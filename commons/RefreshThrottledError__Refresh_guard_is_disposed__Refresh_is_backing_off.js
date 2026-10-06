{
  "use strict";

  var _v1 = _v0.i(0);
  class _v2 extends Error {
    name = "RefreshThrottledError";
  }
  class _v3 {
    job;
    baseDelayMs;
    maxDelayMs;
    inFlight;
    consecutiveFailures;
    nextAttemptAt;
    isDisposed;
    constructor(_v0, _v1 = {}) {
      this.job = _v0, this.inFlight = null, this.consecutiveFailures = 0, this.nextAttemptAt = 0, this.isDisposed = !1, this.baseDelayMs = _v1.baseDelayMs ?? 0, this.maxDelayMs = _v1.maxDelayMs ?? 0;
    }
    nextAttemptInMs() {
      return this.isDisposed ? null : Math.max(0, this.nextAttemptAt - (0, _v1.getAbsoluteNow)());
    }
    run() {
      if (this.isDisposed) return Promise.reject(new _v2("Refresh guard is disposed"));
      if (this.inFlight) return this.inFlight;
      if ((0, _v1.getAbsoluteNow)() < this.nextAttemptAt) return Promise.reject(new _v2("Refresh is backing off"));
      let _v0 = (async () => this.job())().then(_v0 => (this.consecutiveFailures = 0, this.nextAttemptAt = 0, _v0)).catch(_v0 => {
        if (this.isDisposed) throw _v0;
        this.consecutiveFailures += 1;
        let _v1 = Math.min(this.baseDelayMs * 2 ** (this.consecutiveFailures - 1), this.maxDelayMs);
        throw this.nextAttemptAt = (0, _v1.getAbsoluteNow)() + _v1 + Math.floor(Math.random() * _v1 * .2), _v0;
      }).finally(() => {
        this.inFlight = null;
      });
      return this.inFlight = _v0, _v0;
    }
    dispose() {
      this.isDisposed = !0, this.inFlight = null;
    }
  }
  async function _v4(_v0, _v1) {
    let _v2 = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${encodeURIComponent(_v0)}`,
      _v3 = await fetch(_v2, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          token: _v1,
          returnSecureToken: !0
        })
      }),
      _v4 = await _v3.json();
    if (!_v3.ok || !_v4.idToken || !_v4.refreshToken) throw Error(`Firebase REST custom-token exchange failed (${_v3.status}): ${_v4.error?.message ?? "unknown error"}`);
    let _v5 = Number(_v4.expiresIn) || 0;
    return {
      idToken: _v4.idToken,
      refreshToken: _v4.refreshToken,
      expiresAt: Math.floor((0, _v1.getAbsoluteNow)() / 0) + _v5
    };
  }
  async function _v5(_v0, _v1) {
    let _v2 = `https://securetoken.googleapis.com/v1/token?key=${encodeURIComponent(_v0)}`,
      _v3 = await fetch(_v2, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: _v1
        }).toString()
      }),
      _v4 = await _v3.json();
    if (!_v3.ok || !_v4.id_token || !_v4.refresh_token) throw Error(`Firebase REST token refresh failed (${_v3.status}): ${_v4.error?.message ?? "unknown error"}`);
    let _v5 = Number(_v4.expires_in) || 0;
    return {
      idToken: _v4.id_token,
      refreshToken: _v4.refresh_token,
      expiresAt: Math.floor((0, _v1.getAbsoluteNow)() / 0) + _v5
    };
  }
  _v0.s(["RefreshGuard", 0, _v3], 0);
  class _v6 {
    apiKey;
    customToken;
    refreshCustomToken;
    tokens = null;
    guard = new _v3(() => this.executeRefresh());
    refreshTimeout = null;
    isDisposed = !1;
    constructor(_v0, _v1, _v2 = {}) {
      this.apiKey = _v0, this.customToken = _v1, this.refreshCustomToken = _v2.refreshCustomToken ?? null;
    }
    async getIdToken() {
      if (this.isDisposed) throw Error("FirebaseRestTokenManager is disposed");
      let _v0 = Math.floor((0, _v1.getAbsoluteNow)() / 0);
      return this.tokens && this.tokens.expiresAt - _v0 > 60 ? this.tokens.idToken : this.guard.run();
    }
    async refreshAfterUnauthorized(_v0) {
      if (this.isDisposed) throw Error("FirebaseRestTokenManager is disposed");
      if (!this.tokens) return null;
      if (this.tokens.idToken !== _v0) return this.tokens.idToken;
      let _v1 = Math.floor((0, _v1.getAbsoluteNow)() / 0);
      return this.tokens.expiresAt - _v1 > 60 ? null : this.guard.run();
    }
    dispose() {
      this.isDisposed = !0, this.guard.dispose(), this.refreshTimeout && (clearTimeout(this.refreshTimeout), this.refreshTimeout = null), this.tokens = null;
    }
    isHeldCustomTokenExpired() {
      let _v0 = function (_v0) {
        let _v1 = _v0.split(".")[1];
        if (!_v1) return null;
        try {
          let _v0 = _v1.replace(/-/g, "+").replace(/_/g, "/").padEnd(4 * Math.ceil(_v1.length / 4), "="),
            _v1 = JSON.parse(atob(_v0));
          return "number" == typeof _v1.exp ? _v1.exp : null;
        } catch {
          return null;
        }
      }(this.customToken);
      return null !== _v0 && _v0 <= Math.floor((0, _v1.getAbsoluteNow)() / 0);
    }
    async exchangeWithFallback() {
      if (!this.isHeldCustomTokenExpired()) try {
        return await _v4(this.apiKey, this.customToken);
      } catch (_v0) {
        if (!this.refreshCustomToken) throw _v0;
      }
      if (!this.refreshCustomToken) throw Error("Firebase custom token is expired and no custom-token refresh source is available");
      return this.customToken = await this.refreshCustomToken(), _v4(this.apiKey, this.customToken);
    }
    async executeRefresh() {
      let _v0;
      if (this.tokens) try {
        _v0 = await _v5(this.apiKey, this.tokens.refreshToken);
      } catch {
        _v0 = await this.exchangeWithFallback();
      } else _v0 = await this.exchangeWithFallback();
      if (this.isDisposed) throw Error("FirebaseRestTokenManager is disposed");
      return this.tokens = _v0, this.scheduleProactiveRefresh(), this.tokens.idToken;
    }
    scheduleProactiveRefresh(_v0) {
      if (this.refreshTimeout && (clearTimeout(this.refreshTimeout), this.refreshTimeout = null), this.isDisposed || !this.tokens) return;
      let _v1 = _v0 ?? this.proactiveRefreshDelayMs(this.tokens);
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
    proactiveRefreshDelayMs(_v0) {
      let _v1 = Math.floor((0, _v1.getAbsoluteNow)() / 0),
        _v2 = Math.floor(30 * Math.random());
      return 0 * Math.max(10, _v0.expiresAt - _v1 - 300 - _v2);
    }
  }
  _v0.s(["FirebaseRestTokenManager", 0, _v6], 0);
}