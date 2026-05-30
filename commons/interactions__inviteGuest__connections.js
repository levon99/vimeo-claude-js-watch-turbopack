{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0) {
    return !!(_v0 && "interactions" in _v0 && "inviteGuest" in _v0.interactions && "connections" in _v0 && "guests" in _v0.connections);
  }
  _v0.s(["createGuestInviteLink", 0, function ({
    eventInvites: _v0,
    guestId: _v1,
    isVpaas: _v2,
    sessionId: _v3,
    sessionType: _v4
  }) {
    let _v5 = _v0.find(_v0 => _v0.guestId === _v1);
    return _v5 ? `${_v10.environmentConfig.PROTOCOL}//${_v10.environmentConfig.HOST}${_v2 ? "/integration" : ""}/live/guest/${(0, _v11.transformSessionTypeToUri)(_v4)}/${_v3}/${_v5.id}` : "";
  }, "isBroadcasterComposerMetadata", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  class _v21 extends _v18.UnsubscribingContextManager {
    context = {
      guestsActions: (0, _v2.createActions)({
        createGuest: _v0 => this.createGuest(_v0),
        updateGuest: (_v0, _v1) => this.updateGuest(_v0, _v1),
        deleteGuest: _v0 => this.deleteGuest(_v0),
        sendGuestInvite: _v0 => this.sendGuestInvite(_v0),
        muteGuest: _v0 => this.muteGuest(_v0),
        unmuteGuest: _v0 => this.unmuteGuest(_v0),
        purgeGuests: () => this.purgeGuests()
      }),
      guests: {},
      guestSettings: {},
      guestInvites: {},
      guestsEmailInvitesCreatedTimestamps: {}
    };
    connections = null;
    firebase;
    guestsRef = null;
    guestsInvitesRef = null;
    guestsSettingsRef = null;
    sessionApplicationType;
    sessionType;
    log = new _v3.Logger("🦤GST");
    constructor(_v0) {
      if (super(), !_v0?.sessionApplicationType || !_v0?.sessionType) throw new _v17.LiveError("Init failed, application type required.", {
        data: _v0
      });
      this.sessionApplicationType = _v0.sessionApplicationType, this.sessionType = _v0.sessionType;
    }
    async createGuest(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.createGuest)(this, _v0), {
        method: "createGuest",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    async updateGuest(_v0, _v1) {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.updateGuest)(this, _v0, _v1), {
        method: "updateGuest",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    async deleteGuest(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.deleteGuest)(this, _v0), {
        method: "deleteGuest",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    async sendGuestInvite(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.sendGuestInvite)(this, _v0), {
        method: "sendGuestInvite",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    async muteGuest(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.muteGuest)(this, _v0), {
        method: "muteGuest",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    async unmuteGuest(_v0) {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.unmuteGuest)(this, _v0), {
        method: "unmuteGuest",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    async purgeGuests() {
      return (0, _v20.withLiveErrorTracking)(() => (0, _v4.purgeGuests)(this), {
        method: "purgeGuests",
        category: _v19.ELiveErrorCategory.GUEST
      });
    }
    assertConnectionsAreInitialized() {
      if (!this.connections) throw new _v17.LiveError("Guests manager connection is not initialized.", {
        code: _v15.ELiveErrorCode.INITIALIZATION
      });
    }
    assertIsInitialized() {
      if (!this.guestsRef || !this.guestsInvitesRef || !this.guestsSettingsRef) throw new _v17.LiveError("Guests manager is not initialized.", {
        code: _v15.ELiveErrorCode.INITIALIZATION
      });
    }
    onCheckRoomMediaAccess({
      data: _v0
    }) {
      let {
        guests: _v1
      } = this.context;
      return Object.keys(_v1).includes(String(_v0));
    }
    onGetGuestInformation({
      data: {
        id: _v0
      }
    }) {
      return this.context.guests[_v0] || null;
    }
    async onGuestMuteAcknowledgement({
      data: {
        guestId: _v0
      }
    }) {
      this.assertIsInitialized(), await (0, _v7.removeRefValue)(this.firebase, (0, _v7.getRefChild)(this.firebase, this.guestsSettingsRef, `${_v0}/remoteRequest`));
    }
    onComposerSessionReady({
      data: {
        metadata: _v0
      }
    }) {
      _v12(_v0) ? (this.log.info("Initializing guest management api connection"), this.connections = {
        guests: _v0.connections.guests,
        guest: _v0.connections.guest,
        inviteGuest: _v0.interactions.inviteGuest
      }) : this.log.info("Skipping api connection for guest manager");
    }
    onChatApplicationReady({
      data: {
        firebase: _v0,
        sessionId: _v1,
        app: _v2
      }
    }) {
      var _v3, _v4, _v5, _v6, _v7, _v8;
      let _v9, _v10, _v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18;
      this.log.info("🚀Initializing guest management firebase connection"), this.firebase = _v0;
      let _v19 = (0, _v7.getRealtimeDatabase)(_v0, _v2);
      this.guestsRef = (0, _v7.getDatabaseRef)(_v0, _v19, _v13.firebaseConfig.REFS.COMPOSER.GUESTS.GUESTS(_v1)), this.guestsInvitesRef = (0, _v7.getDatabaseRef)(_v0, _v19, _v13.firebaseConfig.REFS.COMPOSER.GUESTS.GUEST_INVITES(_v1)), this.guestsSettingsRef = (0, _v7.getDatabaseRef)(_v0, _v19, _v13.firebaseConfig.REFS.COMPOSER.GUESTS.GUEST_SETTINGS(_v1)), this.addUnSubscribers([(_v3 = this, _v4 = this.guestsRef, _v9 = _v0 => {
        let {
            guests: _v1
          } = _v3.context,
          _v2 = _v0.val();
        _v3.log.info("New event guest added:", _v0.key), _v3.setContext({
          guests: {
            ..._v1,
            [_v0.key]: _v2
          }
        }), _v3.emitSignal({
          type: _v9.EAgoraSignal.ALLOWED_REMOTE_GUEST_ADDED,
          data: _v2
        });
      }, _v10 = _v0 => {
        let _v1 = _v0.val(),
          {
            guests: _v2
          } = _v3.context,
          _v3 = {
            ..._v2
          };
        delete _v3[_v0.key], _v3.setContext({
          guests: _v3
        }), _v3.emitSignal({
          type: _v9.EAgoraSignal.ALLOWED_REMOTE_GUEST_REMOVED,
          data: _v1
        }), _v3.log.info("Event guest removed:", _v0.key, _v1), _v3.queryDataSync({
          type: _v8.ELiveConnectionQuery.CURRENT_CONNECTION_UID
        }).data === _v1.id && (_v3.log.warn("Current tab guest was kicked, performing graceful stop"), _v3.emitSignal({
          type: _v9.EAgoraSignal.AGORA_CONNECTION_REMOVED_FROM_SESSION
        }));
      }, _v11 = _v0 => {
        let {
            guests: _v1
          } = _v3.context,
          _v2 = _v0.val();
        _v3.log.info("Event guest updated:", _v0.key), _v3.setContext({
          guests: {
            ..._v1,
            [_v0.key]: _v2
          }
        });
      }, (0, _v7.onRefEvent)(_v3.firebase, _v4, "child_added", _v9, "guests-list"), (0, _v7.onRefEvent)(_v3.firebase, _v4, "child_removed", _v10, "guests-list"), (0, _v7.onRefEvent)(_v3.firebase, _v4, "child_changed", _v11, "guests-list"), () => {
        (0, _v7.offRefEvent)(_v3.firebase, _v4, "child_added", _v9), (0, _v7.offRefEvent)(_v3.firebase, _v4, "child_removed", _v10), (0, _v7.offRefEvent)(_v3.firebase, _v4, "child_changed", _v11);
      }), (_v5 = this, _v6 = this.guestsSettingsRef, _v12 = _v0 => {
        let {
            guestSettings: _v1
          } = _v5.context,
          _v2 = _v0.val();
        _v5.log.info("New guest settings added:", _v0.key), _v5.setContext({
          guestSettings: {
            ..._v1,
            [_v0.key]: _v2
          }
        }), _v15(_v2.remoteRequest, _v0.key);
      }, _v13 = _v0 => {
        let {
            guestSettings: _v1
          } = _v5.context,
          _v2 = {
            ..._v1
          };
        delete _v2[_v0.key], _v5.log.info("Guest settings removed:", _v0.key), _v5.setContext({
          guestSettings: _v2
        });
      }, _v14 = _v0 => {
        let {
            guestSettings: _v1
          } = _v5.context,
          _v2 = _v0.val();
        _v5.log.info("Guest settings updated:", _v0.key), _v5.setContext({
          guestSettings: {
            ..._v1,
            [_v0.key]: _v2
          }
        }), _v15(_v2.remoteRequest, _v0.key);
      }, _v15 = (_v0, _v1) => {
        if (!_v0) return;
        let {
          data: _v2
        } = _v5.queryDataSync({
          type: _v8.ELiveConnectionQuery.CURRENT_CONNECTION_MEDIA_UID
        });
        _v1 === (0, _v6.parseUidFromAgora)(_v2) && (_v0 === _v5.EGuestMuteState.GUEST_MUTE_REQUESTED ? _v5.emitSignal({
          type: _v9.EGuestMuteSignal.GUEST_MUTE_REQUESTED,
          data: {
            guestId: _v1
          }
        }) : _v0 === _v5.EGuestMuteState.GUEST_UNMUTE_REQUESTED && _v5.emitSignal({
          type: _v9.EGuestMuteSignal.GUEST_UNMUTE_REQUESTED,
          data: {
            guestId: _v1
          }
        }));
      }, (0, _v7.onRefEvent)(_v5.firebase, _v6, "child_added", _v12, "guest-settings"), (0, _v7.onRefEvent)(_v5.firebase, _v6, "child_removed", _v13, "guest-settings"), (0, _v7.onRefEvent)(_v5.firebase, _v6, "child_changed", _v14, "guest-settings"), () => {
        (0, _v7.offRefEvent)(_v5.firebase, _v6, "child_added", _v12), (0, _v7.offRefEvent)(_v5.firebase, _v6, "child_removed", _v13), (0, _v7.offRefEvent)(_v5.firebase, _v6, "child_changed", _v14);
      }), this.sessionApplicationType === _v14.EComposerApplicationType.BROADCASTER ? (_v7 = this, _v8 = this.guestsInvitesRef, _v16 = _v0 => {
        let {
            guestInvites: _v1
          } = _v7.context,
          _v2 = _v0.val();
        _v7.log.info("New event invite added:", _v0.key), _v7.setContext({
          guestInvites: {
            ..._v1,
            [_v0.key]: _v2
          }
        });
      }, _v17 = _v0 => {
        let {
            guestInvites: _v1
          } = _v7.context,
          _v2 = {
            ..._v1
          };
        delete _v2[_v0.key], _v7.log.info("Event invite removed:", _v0.key), _v7.setContext({
          guestInvites: _v2
        });
      }, _v18 = _v0 => {
        let {
            guestInvites: _v1
          } = _v7.context,
          _v2 = _v0.val();
        _v7.log.info("Event invite updated:", _v0.key), _v7.setContext({
          guestInvites: {
            ..._v1,
            [_v0.key]: _v2
          }
        });
      }, (0, _v7.onRefEvent)(_v7.firebase, _v8, "child_added", _v16, "guests-invites"), (0, _v7.onRefEvent)(_v7.firebase, _v8, "child_removed", _v17, "guests-invites"), (0, _v7.onRefEvent)(_v7.firebase, _v8, "child_changed", _v18, "guests-invites"), () => {
        (0, _v7.offRefEvent)(_v7.firebase, _v8, "child_added", _v16), (0, _v7.offRefEvent)(_v7.firebase, _v8, "child_removed", _v17), (0, _v7.offRefEvent)(_v7.firebase, _v8, "child_changed", _v18);
      }) : _v16.CallablePlaceholder]);
    }
  }
  (0, _v1._)([(0, _v2.OnQuery)(_v8.ELiveConnectionQuery.IS_REMOTE_ALLOWED_IN_ROOM)], _v21.prototype, "onCheckRoomMediaAccess", null), (0, _v1._)([(0, _v2.OnQuery)(_v8.ELiveGraphicsQuery.GUEST_ITEM)], _v21.prototype, "onGetGuestInformation", null), (0, _v1._)([(0, _v2.OnSignal)(_v9.EGuestMuteSignal.GUEST_MUTE_ACKNOWLEDGED), (0, _v2.OnSignal)(_v9.EGuestMuteSignal.GUEST_UNMUTE_ACKNOWLEDGED)], _v21.prototype, "onGuestMuteAcknowledgement", null), (0, _v1._)([(0, _v2.OnSignal)(_v9.ELiveSignal.COMPOSER_SESSION_READY)], _v21.prototype, "onComposerSessionReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v9.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY)], _v21.prototype, "onChatApplicationReady", null), _v0.s(["GuestsManager", 0, _v21], 0);
}