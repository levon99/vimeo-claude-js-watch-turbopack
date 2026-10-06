{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  class _v7 extends Error {
    status = 429;
    retryAfterSeconds;
    constructor(_v0) {
      super("Chat proxy rate limited the request"), this.name = "ProxyRateLimitError", this.retryAfterSeconds = _v0;
    }
  }
  class _v8 {
    roomId;
    proxyTokens;
    firebaseTokens;
    constructor(_v0) {
      this.roomId = _v0.roomId, this.proxyTokens = _v0.proxyTokens, this.firebaseTokens = _v0.firebaseTokens;
    }
    getTail() {
      return this.get("/chat/tail");
    }
    getHistory(_v0) {
      let _v1 = _v0.before ? `?before=${encodeURIComponent(_v0.before)}` : _v0.after ? `?after=${encodeURIComponent(_v0.after)}` : "";
      return this.get(`/chat/history${_v1}`);
    }
    getDeleted() {
      return this.get("/chat/deleted");
    }
    getBans() {
      return this.get("/chat/bans");
    }
    async sendMessage(_v0) {
      return (await this.mutate("POST", "/chat/messages", {
        text: _v0
      })).key;
    }
    async deleteMessage(_v0) {
      await this.mutate("DELETE", `/chat/messages/${encodeURIComponent(_v0)}`);
    }
    async banUser(_v0) {
      return (await this.mutate("POST", "/chat/bans", {
        userId: _v0
      })).key;
    }
    async unbanUser(_v0) {
      await this.mutate("DELETE", `/chat/bans/${encodeURIComponent(_v0)}`);
    }
    async get(_v0) {
      let _v1 = await this.request("GET", _v0);
      return _v1.ok ? await _v1.json() : null;
    }
    async mutate(_v0, _v1, _v2) {
      let _v3 = await this.firebaseTokens.getIdToken(),
        _v4 = await this.request(_v0, _v1, _v2, {
          "X-Firebase-ID-Token": _v3
        });
      if (!_v4.ok && ("DELETE" !== _v0 || 404 !== _v4.status)) {
        if (429 === _v4.status) throw new _v7(function (_v0) {
          if (!_v0) return;
          let _v1 = Number(_v0);
          return Number.isFinite(_v1) && _v1 > 0 ? _v1 : void 0;
        }(_v4.headers.get("Retry-After")));
        throw Error(`Proxy ${_v0} ${_v1} failed (${_v4.status})`);
      }
      return _v4.ok && 204 !== _v4.status ? await _v4.json() : void 0;
    }
    async request(_v0, _v1, _v2, _v3) {
      let _v4 = `${this.proxyTokens.getUrl()}/v1/rooms/${encodeURIComponent(this.roomId)}${_v1}`,
        _v5 = await this.proxyTokens.getJwt(),
        _v6 = _v3?.["X-Firebase-ID-Token"],
        _v7 = new Headers({
          Authorization: `Bearer ${_v5}`,
          ..._v3
        });
      void 0 !== _v2 && _v7.set("Content-Type", "application/json");
      let _v8 = {
          method: _v0,
          headers: _v7,
          body: void 0 !== _v2 ? JSON.stringify(_v2) : void 0
        },
        _v9 = await fetch(_v4, _v8);
      if (401 !== _v9.status) return _v9;
      let [_v10, _v11] = await Promise.all([this.refreshRejectedToken(() => this.proxyTokens.refreshAfterUnauthorized(_v5)), _v6 ? this.refreshRejectedToken(() => this.firebaseTokens.refreshAfterUnauthorized(_v6)) : Promise.resolve(null)]),
        _v12 = _v10 && _v10.jwt !== _v5 ? _v10 : null,
        _v13 = _v11 && _v11 !== _v6 ? _v11 : null;
      if (!_v12 && !_v13) return _v9;
      let _v14 = new Headers(_v7);
      return _v12 && _v14.set("Authorization", `Bearer ${_v12.jwt}`), _v13 && _v14.set("X-Firebase-ID-Token", _v13), fetch(`${this.proxyTokens.getUrl()}/v1/rooms/${encodeURIComponent(this.roomId)}${_v1}`, {
        ..._v8,
        headers: _v14
      });
    }
    async refreshRejectedToken(_v0) {
      try {
        return await _v0();
      } catch {
        return null;
      }
    }
  }
  function _v9(_v0, _v1) {
    let _v2 = new Map();
    for (let _v0 of _v0) {
      let _v0 = _v0.clientSendKey ?? _v0.key;
      _v2.set(_v0, _v0);
    }
    for (let _v0 of _v1) {
      let _v0 = _v0.clientSendKey ?? _v0.key,
        _v1 = _v2.get(_v0);
      _v1 && _v1.clientSendKey && !_v0.clientSendKey ? _v2.set(_v0, {
        ..._v0,
        key: _v1.key,
        clientSendKey: _v1.clientSendKey
      }) : _v2.set(_v0, _v0);
    }
    return [..._v2.values()].sort((_v0, _v1) => {
      var _v2, _v3;
      return (_v2 = _v0.clientSendKey ?? _v0.key) < (_v3 = _v1.clientSendKey ?? _v1.key) ? -1 : +(_v2 > _v3);
    });
  }
  _v0.s(["ProxyChatApiClient", 0, _v8, "ProxyRateLimitError", 0, _v7], 0);
  class _v10 {
    mode = "tailing";
    visibleMessages = [];
    bufferedTail = null;
    serverDeletedKeys = new Set();
    localDeleted = new Map();
    isForcedTailing;
    constructor(_v0 = !1) {
      this.isForcedTailing = _v0;
    }
    pruneExpiredLocalDeleted(_v0 = (0, _v4.getAbsoluteNow)()) {
      for (let [_v0, _v1] of this.localDeleted.entries()) _v1 <= _v0 && this.localDeleted.delete(_v0);
    }
    getVisibleMessages() {
      return this.pruneExpiredLocalDeleted(), this.visibleMessages.filter(_v0 => !this.serverDeletedKeys.has(_v0.key) && !(_v0.clientSendKey && this.serverDeletedKeys.has(_v0.clientSendKey)) && !this.localDeleted.has(_v0.key) && !(_v0.clientSendKey && this.localDeleted.has(_v0.clientSendKey)));
    }
    getMode() {
      return this.mode;
    }
    isDetached() {
      return "detached" === this.mode;
    }
    getPendingNewCount() {
      return this.bufferedTail?.length ?? 0;
    }
    setAttached(_v0) {
      this.isForcedTailing || "detached" === this.mode || (this.mode = _v0 ? "tailing" : "free");
    }
    mergeTail(_v0) {
      return !!_v0 && 0 !== _v0.length && ("detached" === this.mode ? (this.bufferedTail = [..._v0], !1) : 0 === this.visibleMessages.length || _v0.some(_v0 => this.visibleMessages.some(_v0 => (_v0.clientSendKey ?? _v0.key) === (_v0.clientSendKey ?? _v0.key))) ? (this.visibleMessages = _v9(this.visibleMessages, _v0), this.bufferedTail = null, !0) : "tailing" === this.mode ? (this.visibleMessages = _v9(this.visibleMessages.filter(_v0 => _v0.key.startsWith("local-")), _v0), this.bufferedTail = null, !0) : (this.mode = "detached", this.bufferedTail = [..._v0], !1));
    }
    mergeHistory(_v0) {
      return !!_v0 && 0 !== _v0.length && (this.visibleMessages = _v9(this.visibleMessages, _v0), this.bufferedTail && this.visibleMessages.some(_v0 => this.bufferedTail?.some(_v0 => (_v0.clientSendKey ?? _v0.key) === (_v0.clientSendKey ?? _v0.key))) && (this.visibleMessages = _v9(this.visibleMessages, this.bufferedTail), this.bufferedTail = null, this.mode = "free"), !0);
    }
    jumpToLive() {
      null !== this.bufferedTail && (this.visibleMessages = this.bufferedTail, this.bufferedTail = null, this.mode = "tailing");
    }
    mergeDeleted(_v0) {
      if (!_v0) return !1;
      let _v1 = new Set(_v0),
        _v2 = _v1.size !== this.serverDeletedKeys.size || [..._v1].some(_v0 => !this.serverDeletedKeys.has(_v0));
      return this.serverDeletedKeys = _v1, _v2;
    }
    markDeleted(..._v0) {
      _v0.forEach(_v0 => this.localDeleted.set(_v0, 1 / 0));
    }
    confirmDeleted(..._v0) {
      let _v1 = (0, _v4.getAbsoluteNow)() + 0;
      _v0.forEach(_v0 => this.localDeleted.set(_v0, _v1));
    }
    getCanonicalKey(_v0) {
      return this.visibleMessages.find(_v0 => _v0.key === _v0)?.clientSendKey ?? _v0;
    }
    rollbackDeleted(..._v0) {
      _v0.forEach(_v0 => this.localDeleted.delete(_v0));
    }
    onMessageSent(_v0) {
      null !== this.bufferedTail && (this.visibleMessages = _v9(this.visibleMessages, this.bufferedTail), this.bufferedTail = null), this.mode = "tailing", this.visibleMessages = _v9(this.visibleMessages, [_v0]);
    }
    resolveLocalEcho(_v0, _v1) {
      let _v2 = _v0 => _v0.key === _v0 ? {
        ..._v0,
        clientSendKey: _v1
      } : _v0;
      this.visibleMessages = _v9(this.visibleMessages.map(_v2), []), null !== this.bufferedTail && (this.bufferedTail = _v9(this.bufferedTail.map(_v2), []));
    }
    rollbackLocalEcho(_v0) {
      this.visibleMessages = this.visibleMessages.filter(_v0 => _v0.key !== _v0);
    }
  }
  let _v11 = _v0 => _v0.clientSendKey ?? _v0.key;
  class _v12 {
    roomId;
    api;
    store;
    buffer;
    onBansChange;
    onStatusChange;
    tailPollIntervalMs;
    deletedPollIntervalMs;
    bansPollIntervalMs;
    revealIntervalMs;
    timers = new Map();
    pendingReveal = new Set();
    revealTimer;
    revealPerTick = 0;
    hasHydratedTail = !1;
    isDisposed = !1;
    serverBannedUserIds = new Set();
    localBans = new Map();
    localUnbans = new Map();
    pruneExpiredLocalBans(_v0 = (0, _v4.getAbsoluteNow)()) {
      for (let [_v0, _v1] of this.localBans.entries()) _v1 <= _v0 && this.localBans.delete(_v0);
      for (let [_v0, _v1] of this.localUnbans.entries()) _v1 <= _v0 && this.localUnbans.delete(_v0);
    }
    getActiveBannedUserIds() {
      this.pruneExpiredLocalBans();
      let _v0 = new Set(this.serverBannedUserIds);
      for (let _v0 of this.localBans.keys()) _v0.add(_v0);
      for (let _v0 of this.localUnbans.keys()) _v0.delete(_v0);
      return [..._v0];
    }
    constructor(_v0) {
      this.roomId = _v0.roomId, this.buffer = _v0.buffer, this.onBansChange = _v0.onBansChange, this.onStatusChange = _v0.onStatusChange, this.store = new _v10(_v0.isForcedTailing), this.tailPollIntervalMs = _v0.tailPollIntervalMs ?? 0, this.deletedPollIntervalMs = _v0.deletedPollIntervalMs ?? 0, this.bansPollIntervalMs = _v0.bansPollIntervalMs ?? 0, this.revealIntervalMs = _v0.revealIntervalMs ?? _v1.interactionToolsConfig.CHAT.MESSAGE_UPDATE_THROTTLE, this.api = new _v8({
        roomId: _v0.roomId,
        proxyTokens: _v0.proxyTokenManager,
        firebaseTokens: _v0.firebaseTokenManager
      });
    }
    async start() {
      let _v0 = (0, _v4.getAbsoluteNow)();
      try {
        await Promise.all([this.pollDeleted(), this.pollBans(), this.pollTail()]), (0, _v6.trackLiveAction)("proxy_chat_transport_hydrated", {
          roomId: this.roomId,
          durationMs: (0, _v4.getAbsoluteNow)() - _v0
        });
      } catch (_v0) {
        (0, _v6.trackLiveError)(_v0, {
          method: "ProxyChatTransport.start",
          category: _v5.ELiveErrorCategory.INTERACTION,
          data: {
            roomId: this.roomId
          }
        });
      }
      this.schedulePoll("tail", this.tailPollIntervalMs, async () => {
        await this.pollTail();
      }), this.schedulePoll("deleted", this.deletedPollIntervalMs, () => this.pollDeleted()), this.schedulePoll("bans", this.bansPollIntervalMs, () => this.pollBans());
    }
    setAttached(_v0) {
      this.store.setAttached(_v0);
    }
    jumpToLive() {
      this.store.jumpToLive(), this.flushPendingReveal(), this.syncBuffer();
    }
    async loadOlder() {
      let _v0 = this.store.getVisibleMessages(),
        _v1 = _v0[0] && this.store.getCanonicalKey(_v0[0].key);
      if (!_v1) return 0;
      let _v2 = await this.api.getHistory({
        before: _v1
      });
      if (!_v2) throw Error("Proxy history request failed");
      let _v3 = this.store.getVisibleMessages().length;
      return _v2.messages && this.store.mergeHistory(_v2.messages) ? (this.flushPendingReveal(), this.syncBuffer(), Math.max(0, this.store.getVisibleMessages().length - _v3)) : 0;
    }
    async loadNewer() {
      if (!this.store.isDetached()) return 0;
      let _v0 = this.store.getVisibleMessages(),
        _v1 = _v0[_v0.length - 1],
        _v2 = _v1 && this.store.getCanonicalKey(_v1.key);
      if (!_v2) return 0;
      let _v3 = await this.api.getHistory({
        after: _v2
      });
      if (!_v3) throw Error("Proxy history request failed");
      let _v4 = this.store.getVisibleMessages().length;
      return _v3.messages && this.store.mergeHistory(_v3.messages) ? (this.flushPendingReveal(), this.syncBuffer(), Math.max(0, this.store.getVisibleMessages().length - _v4)) : 0;
    }
    isDetached() {
      return this.store.isDetached();
    }
    getMode() {
      return this.store.getMode();
    }
    getPendingNewCount() {
      return this.store.getPendingNewCount();
    }
    async sendMessage(_v0, _v1) {
      let _v2 = (0, _v4.getAbsoluteNow)(),
        _v3 = `local-${_v2}`;
      this.store.onMessageSent({
        key: _v3,
        contents: _v0,
        createdAt: _v2,
        user: _v1
      }), this.pendingReveal.delete(_v3), this.syncBuffer();
      try {
        let _v0 = await this.api.sendMessage(_v0);
        return this.store.resolveLocalEcho(_v3, _v0), this.pendingReveal.delete(_v0), this.syncBuffer(), (0, _v6.trackLiveAction)("chat_message_sent", {
          transport: "proxy",
          durationMs: (0, _v4.getAbsoluteNow)() - _v2
        }), _v0;
      } catch (_v0) {
        throw this.store.rollbackLocalEcho(_v3), this.syncBuffer(), _v0;
      }
    }
    async deleteMessage(_v0) {
      let _v1 = this.store.getCanonicalKey(_v0);
      this.store.markDeleted(_v0, _v1), this.syncBuffer();
      try {
        await this.api.deleteMessage(_v1), this.store.confirmDeleted(_v0, _v1);
      } catch (_v0) {
        throw this.store.rollbackDeleted(_v0, _v1), this.syncBuffer(), _v0;
      }
    }
    async banUser(_v0) {
      let _v1,
        _v2 = this.localBans.get(_v0),
        _v3 = this.localUnbans.get(_v0),
        _v4 = this.serverBannedUserIds.has(_v0);
      this.localUnbans.delete(_v0), this.localBans.set(_v0, (0, _v4.getAbsoluteNow)() + 0), this.onBansChange?.(this.getActiveBannedUserIds());
      try {
        _v1 = await this.api.banUser(_v0), this.serverBannedUserIds.add(_v0), this.localBans.set(_v0, (0, _v4.getAbsoluteNow)() + 0);
      } catch (_v0) {
        throw this.restoreBanState(_v0, _v2, _v3, _v4), _v0;
      }
      try {
        await this.pollBans();
      } catch {}
      return _v1;
    }
    async unbanUser(_v0) {
      let _v1 = this.localBans.get(_v0),
        _v2 = this.localUnbans.get(_v0),
        _v3 = this.serverBannedUserIds.has(_v0);
      this.localBans.delete(_v0), this.localUnbans.set(_v0, (0, _v4.getAbsoluteNow)() + 0), this.serverBannedUserIds.delete(_v0), this.onBansChange?.(this.getActiveBannedUserIds());
      try {
        await this.api.unbanUser(_v0), this.serverBannedUserIds.delete(_v0), this.localUnbans.set(_v0, (0, _v4.getAbsoluteNow)() + 0);
      } catch (_v0) {
        throw this.restoreBanState(_v0, _v1, _v2, _v3), _v0;
      }
      try {
        await this.pollBans();
      } catch {}
    }
    async pollTail() {
      let _v0 = await this.api.getTail();
      if (!_v0) return !1;
      this.onStatusChange?.(_v0.isEnabled);
      let _v1 = !this.hasHydratedTail;
      this.hasHydratedTail = !0;
      let _v2 = new Set(this.store.getVisibleMessages().map(_v11));
      return !this.store.mergeTail(_v0.messages) || (_v1 ? this.syncBuffer() : this.holdPendingReveal(_v2), !0);
    }
    holdPendingReveal(_v0) {
      for (let _v0 of this.store.getVisibleMessages()) {
        if (_v0.clientSendKey) continue;
        let _v0 = _v11(_v0);
        _v0.has(_v0) || this.pendingReveal.add(_v0);
      }
      0 === this.pendingReveal.size ? this.syncBuffer() : (this.revealPerTick = Math.max(this.revealPerTick, Math.ceil(this.pendingReveal.size / this.revealTicksPerPoll())), this.startRevealLoop());
    }
    flushPendingReveal() {
      void 0 !== this.revealTimer && (clearTimeout(this.revealTimer), this.revealTimer = void 0), this.pendingReveal.clear(), this.revealPerTick = 0;
    }
    startRevealLoop() {
      void 0 !== this.revealTimer || this.isDisposed || 0 === this.pendingReveal.size || this.revealNext();
    }
    revealNext() {
      let _v0 = 0;
      for (let _v0 of this.pendingReveal) if (this.pendingReveal.delete(_v0), ++_v0 >= this.revealPerTick) break;
      this.syncBuffer(), !this.isDisposed && this.pendingReveal.size > 0 ? this.revealTimer = setTimeout(() => {
        this.revealTimer = void 0, this.revealNext();
      }, this.revealIntervalMs) : this.revealPerTick = 0;
    }
    revealTicksPerPoll() {
      return Math.max(1, Math.floor(this.tailPollIntervalMs / this.revealIntervalMs));
    }
    async pollDeleted() {
      let _v0 = await this.api.getDeleted();
      this.store.mergeDeleted(_v0?.deletedKeys) && this.syncBuffer();
    }
    async pollBans() {
      let _v0 = await this.api.getBans();
      _v0?.userIds && (this.serverBannedUserIds = new Set(_v0.userIds), this.onBansChange?.(this.getActiveBannedUserIds()));
    }
    restoreBanState(_v0, _v1, _v2, _v3) {
      void 0 === _v1 ? this.localBans.delete(_v0) : this.localBans.set(_v0, _v1), void 0 === _v2 ? this.localUnbans.delete(_v0) : this.localUnbans.set(_v0, _v2), _v3 ? this.serverBannedUserIds.add(_v0) : this.serverBannedUserIds.delete(_v0), this.onBansChange?.(this.getActiveBannedUserIds());
    }
    schedulePoll(_v0, _v1, _v2) {
      if (this.isDisposed) return;
      let _v3 = this.timers.get(_v0);
      _v3 && clearTimeout(_v3);
      let _v4 = async () => {
        if (!this.isDisposed) try {
          await _v2();
        } catch (_v0) {
          (0, _v6.trackLiveError)(_v0, {
            method: "ProxyChatTransport.schedulePoll",
            category: _v5.ELiveErrorCategory.INTERACTION,
            data: {
              roomId: this.roomId,
              poll: _v0
            }
          });
        } finally {
          this.isDisposed || this.timers.set(_v0, setTimeout(() => void _v4(), _v1));
        }
      };
      this.timers.set(_v0, setTimeout(() => void _v4(), _v1));
    }
    syncBuffer() {
      let _v0 = {};
      for (let _v0 of this.store.getVisibleMessages()) this.pendingReveal.has(_v11(_v0)) || (_v0[_v0.key] = {
        contents: _v0.contents,
        createdAt: _v0.createdAt,
        user: _v0.user
      });
      let _v1 = {};
      Object.entries(_v0).forEach(([_v0, _v1]) => {
        let _v2 = (0, _v2.collectMessageInteractionErrors)(_v1);
        (0, _v6.checkErrorsAndTrack)({
          possibleErrors: _v2,
          data: _v1,
          methodName: "ProxyChatTransport.syncBuffer"
        }) && (_v1[_v0] = _v1);
      });
      let {
        messages: _v2,
        users: _v3
      } = (0, _v3.transformBulkedChatMessages)(_v1);
      this.buffer.setValue({
        messages: _v2,
        participants: _v3
      });
    }
    dispose() {
      for (let _v0 of (this.isDisposed = !0, void 0 !== this.revealTimer && (clearTimeout(this.revealTimer), this.revealTimer = void 0), this.timers.values())) clearTimeout(_v0);
      this.timers.clear();
    }
  }
  _v0.s(["ProxyChatTransport", 0, _v12], 0);
  var _v13 = _v0.i(0);
  class _v14 {
    credentials;
    refreshFn;
    guard = new _v13.RefreshGuard(() => this.executeRefresh());
    refreshTimeout = null;
    isDisposed = !1;
    constructor(_v0, _v1) {
      this.credentials = _v0, this.refreshFn = _v1, this.scheduleProactiveRefresh();
    }
    getUrl() {
      return this.credentials.url;
    }
    async getJwt() {
      if (this.isDisposed) throw Error("ChatProxyTokenManager is disposed");
      return this.isCurrentTokenFresh() ? this.credentials.jwt : (await this.guard.run()).jwt;
    }
    async refreshAfterUnauthorized(_v0) {
      if (this.isDisposed) throw Error("ChatProxyTokenManager is disposed");
      return this.credentials.jwt !== _v0 ? this.credentials : this.isCurrentTokenFresh() ? null : this.guard.run();
    }
    dispose() {
      this.isDisposed = !0, this.guard.dispose(), this.refreshTimeout && (clearTimeout(this.refreshTimeout), this.refreshTimeout = null);
    }
    async executeRefresh() {
      let _v0 = await this.refreshFn();
      if (this.isDisposed) throw Error("ChatProxyTokenManager is disposed");
      let _v1 = Math.floor((0, _v4.getAbsoluteNow)() / 0);
      if (!_v0.url || !_v0.jwt || !Number.isFinite(_v0.exp) || _v0.exp <= _v1 + 60) throw Error("Chat proxy refresh returned unusable credentials");
      if (_v0.jwt === this.credentials.jwt) throw Error("Chat proxy refresh returned unchanged credentials");
      return this.credentials = _v0, this.scheduleProactiveRefresh(), this.credentials;
    }
    isCurrentTokenFresh() {
      let _v0 = Math.floor((0, _v4.getAbsoluteNow)() / 0);
      return this.credentials.exp - _v0 > 60;
    }
    scheduleProactiveRefresh(_v0) {
      if (this.refreshTimeout && (clearTimeout(this.refreshTimeout), this.refreshTimeout = null), this.isDisposed) return;
      let _v1 = _v0 ?? this.proactiveRefreshDelayMs();
      this.refreshTimeout = setTimeout(() => void this.runProactiveRefresh(), _v1);
    }
    async runProactiveRefresh() {
      if (!this.isDisposed) try {
        await this.guard.run();
      } catch {
        let _v0 = this.guard.nextAttemptInMs();
        null !== _v0 && this.scheduleProactiveRefresh(_v0);
      }
    }
    proactiveRefreshDelayMs() {
      let _v0 = Math.floor((0, _v4.getAbsoluteNow)() / 0),
        _v1 = Math.floor(30 * Math.random());
      return 0 * Math.max(10, this.credentials.exp - _v0 - 300 - _v1);
    }
  }
  _v0.s(["ChatProxyTokenManager", 0, _v14], 0);
}