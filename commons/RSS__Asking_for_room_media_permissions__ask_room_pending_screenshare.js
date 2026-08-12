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
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  class _v13 extends _v11.UnsubscribingContextManager {
    context = {
      roomScreenShareActions: (0, _v2.createActions)({
        askForPermissions: () => this.askForPermissions(),
        cancelPermissionsRequest: () => this.cancelPermissionsRequest(),
        confirmPermissions: _v0 => this.confirmPermissions(_v0),
        declinePermissions: () => this.declinePermissions(),
        stopCurrentSharing: () => this.stopCurrentSharing()
      }),
      isCurrentlyPending: !1,
      isCurrentlyAllowed: !1,
      activeScreenShareId: null,
      pendingScreenShareId: null,
      canModerateActiveSharing: !1,
      isReady: !1
    };
    firebase;
    screenActiveRef;
    screenPendingRef;
    log = new _v3.Logger("🪲RSS");
    constructor(_v0) {
      super(), this.context.canModerateActiveSharing = !!_v0?.media?.canModerateActiveSharing;
    }
    onProvisionEnded() {
      super.onProvisionEnded(), this.dispose();
    }
    async askForPermissions() {
      this.log.info("Asking for room media permissions"), this.assertIsInitialized();
      try {
        let {
            pendingScreenShareId: _v0
          } = this.context,
          {
            data: _v1
          } = this.queryDataSync({
            type: _v6.ELiveConnectionQuery.CURRENT_CONNECTION_SCREEN_UID
          });
        _v0 || ((0, _v5.trackLiveAction)("ask_room_pending_screenshare"), await (0, _v4.setRefValue)(this.firebase, this.screenPendingRef, _v1));
      } catch (_v0) {
        this.log.error("Failed to ask for permissions:", _v0), (0, _v5.trackLiveError)(_v0, {
          category: _v12.ELiveErrorCategory.MEDIA,
          data: {
            screenShareContext: this.context
          },
          method: "askForPermissions"
        });
      }
    }
    async cancelPermissionsRequest() {
      this.log.info("Cancel room media permissions request"), this.assertIsInitialized();
      try {
        let {
            pendingScreenShareId: _v0
          } = this.context,
          {
            data: _v1
          } = this.queryDataSync({
            type: _v6.ELiveConnectionQuery.CURRENT_CONNECTION_SCREEN_UID
          });
        _v0 === _v1 && ((0, _v5.trackLiveAction)("cancel_room_pending_screenshare"), await (0, _v4.removeRefValue)(this.firebase, this.screenPendingRef));
      } catch (_v0) {
        this.log.error("Failed to cancel request for permissions:", _v0), (0, _v5.trackLiveError)(_v0, {
          category: _v12.ELiveErrorCategory.MEDIA,
          data: {
            screenShareContext: this.context
          },
          method: "cancelPermissionsRequest"
        });
      }
    }
    async confirmPermissions(_v0) {
      this.log.info("Confirming sharing permissions for:", _v0), this.assertIsInitialized();
      try {
        (0, _v5.trackLiveAction)("confirm_room_pending_screenshare"), await Promise.all([(0, _v4.setRefValue)(this.firebase, this.screenActiveRef, _v0), (0, _v4.removeRefValue)(this.firebase, this.screenPendingRef)]);
      } catch (_v0) {
        this.log.error("Failed to confirm media permissions:", _v0), (0, _v5.trackLiveError)(_v0, {
          category: _v12.ELiveErrorCategory.MEDIA,
          data: {
            screenShareContext: this.context
          },
          method: "confirmPermissions"
        });
      }
    }
    async declinePermissions() {
      this.log.info("Declining pending sharing permissions", this.context.pendingScreenShareId), this.assertIsInitialized();
      try {
        (0, _v5.trackLiveAction)("reject_room_pending_screenshare"), await (0, _v4.removeRefValue)(this.firebase, this.screenPendingRef);
      } catch (_v0) {
        this.log.error("Failed to decline media permissions:", _v0), (0, _v5.trackLiveError)(_v0, {
          category: _v12.ELiveErrorCategory.MEDIA,
          data: {
            screenShareContext: this.context
          },
          method: "declinePermissions"
        });
      }
    }
    async stopCurrentSharing() {
      this.log.info("Stopping active sharing", this.context.activeScreenShareId), this.assertIsInitialized();
      try {
        (0, _v5.trackLiveAction)("stop_room_active_screenshare"), await (0, _v4.removeRefValue)(this.firebase, this.screenActiveRef), this.emitSignal({
          type: _v7.ELiveMediaSignal.SCREEN_MEDIA_STOP_REQUIRED
        });
      } catch (_v0) {
        this.log.error("Failed to stop sharing media:", _v0), (0, _v5.trackLiveError)(_v0, {
          category: _v12.ELiveErrorCategory.MEDIA,
          data: {
            screenShareContext: this.context
          },
          method: "stopCurrentSharing"
        });
      }
    }
    assertIsInitialized() {
      if (!this.screenPendingRef || !this.screenActiveRef) throw (0, _v5.trackLiveError)("Screenshare manager is not initialized.", {
        method: "assertIsInitialized",
        data: {
          screenPendingRef: !!this.screenPendingRef,
          screenActiveRef: !!this.screenActiveRef
        },
        category: _v12.ELiveErrorCategory.MEDIA
      }), Error("Screenshare manager is not initialized.");
    }
    dispose() {
      this.cleanupSelfStatuses();
    }
    async cleanupSelfStatuses() {
      let {
        isCurrentlyPending: _v0,
        isCurrentlyAllowed: _v1
      } = this.context;
      try {
        _v0 && ((0, _v5.trackLiveAction)("cleanup_screenshare_request"), await (0, _v4.removeRefValue)(this.firebase, this.screenPendingRef).then(() => this.log.info("Removed currently pending id on disposal"))), _v1 && ((0, _v5.trackLiveAction)("cleanup_screenshare_permissions"), await (0, _v4.removeRefValue)(this.firebase, this.screenActiveRef).then(() => this.log.info("Removed currently sharing id on disposal")));
      } catch (_v0) {
        (0, _v5.trackLiveError)(_v0, {
          method: "cleanupSelfStatuses",
          data: {
            screenShareContext: this.context
          },
          category: _v12.ELiveErrorCategory.MEDIA
        });
      }
    }
    isCurrentlyAllowed() {
      return this.context.isCurrentlyAllowed;
    }
    onBroadcasterApplicationReady({
      data: {
        firebase: _v0,
        app: _v1,
        sessionId: _v2
      }
    }) {
      var _v3, _v4, _v5, _v6;
      let _v7, _v8;
      this.firebase = _v0, this.log.info("🚀Initializing guest management connection");
      let _v9 = (0, _v4.getRealtimeDatabase)(_v0, _v1);
      this.screenActiveRef = (0, _v4.getDatabaseRef)(_v0, _v9, `/screen_share/${_v2}/active`), this.screenPendingRef = (0, _v4.getDatabaseRef)(_v0, _v9, `/screen_share/${_v2}/pending`), this.addUnSubscribers([(_v3 = this, _v4 = this.screenActiveRef, _v7 = _v0 => {
        let _v1 = _v0.val(),
          _v2 = _v3.context.activeScreenShareId,
          {
            data: _v3
          } = _v3.queryDataSync({
            type: _v6.ELiveConnectionQuery.CURRENT_CONNECTION_SCREEN_UID
          }),
          _v4 = !!(_v3 && _v1 === _v3);
        if (_v3.log.info("Active screen share src changed:", _v1), _v3.setContext({
          activeScreenShareId: _v1,
          isCurrentlyAllowed: _v4
        }), _v3) _v4 ? ((0, _v5.trackLiveAction)("screen_share_start_requested"), _v3.emitSignal({
          type: _v7.ELiveMediaSignal.SCREEN_MEDIA_START_REQUIRED
        }), (0, _v4.onRefDisconnect)(_v3.firebase, _v3.screenActiveRef).remove().then(() => _v3.log.info("Added disconnect hook for active screen share"))) : _v2 === _v3 && ((0, _v5.trackLiveAction)("screen_share_stop_requested"), _v3.emitSignal({
          type: _v7.ELiveMediaSignal.SCREEN_MEDIA_STOP_REQUIRED
        }), (0, _v4.onRefDisconnect)(_v3.firebase, _v3.screenActiveRef).cancel().then(() => _v3.log.info("Cancelled disconnect hook for active screen share")));else {
          _v3.log.warn("Subscribed to firebase database before agora credentials fetch"), (0, _v5.trackLiveAction)("screen_share_faster_than_agora");
          return;
        }
      }, (0, _v4.onRefEvent)(_v3.firebase, _v4, "value", _v7, "active-screen-share"), () => (0, _v4.offRefEvent)(_v3.firebase, _v4, "value", _v7)), (_v5 = this, _v6 = this.screenPendingRef, _v8 = _v0 => {
        let _v1 = _v0.val(),
          _v2 = _v5.context.pendingScreenShareId,
          {
            data: _v3
          } = _v5.queryDataSync({
            type: _v6.ELiveConnectionQuery.CURRENT_CONNECTION_SCREEN_UID
          }),
          _v4 = !!(_v3 && _v1 === _v3);
        if (_v5.log.info("Pending screen share src changed:", _v1), _v5.setContext({
          pendingScreenShareId: _v1,
          isCurrentlyPending: _v4
        }), _v3) _v4 ? ((0, _v5.trackLiveAction)("screen_share_request_confirmed"), (0, _v4.onRefDisconnect)(_v5.firebase, _v5.screenPendingRef).remove().then(() => _v5.log.info("Added disconnect hook for pending screenshare"))) : _v2 === _v3 && ((0, _v5.trackLiveAction)("screen_share_request_cancel"), (0, _v4.onRefDisconnect)(_v5.firebase, _v5.screenPendingRef).cancel().then(() => _v5.log.info("Cancelled disconnect hook for pending screenshare")));else {
          _v5.log.warn("Subscribed to firebase database before agora credentials fetch"), (0, _v5.trackLiveAction)("screen_share_pending_faster_than_agora");
          return;
        }
      }, (0, _v4.onRefEvent)(_v5.firebase, _v6, "value", _v8, "pending-screen-share"), () => (0, _v4.offRefEvent)(_v5.firebase, _v6, "value", _v8))]), this.setContext({
        isReady: !0
      });
    }
    async onScreenMediaStarted() {
      this.assertIsInitialized();
      let {
          data: _v0
        } = this.queryDataSync({
          type: _v6.ELiveConnectionQuery.CURRENT_CONNECTION_SCREEN_UID
        }),
        {
          data: _v1
        } = this.queryDataSync({
          type: _v6.ELiveConnectionQuery.IS_EVENT_BROADCASTER_CONNECTION
        });
      if (_v1 || null === this.context.activeScreenShareId) {
        this.log.info("Setting current media screen UID:", _v0);
        try {
          await (0, _v4.setRefValue)(this.firebase, this.screenActiveRef, _v0);
        } catch (_v0) {
          this.log.error("Failed to set current media sharing UID:", _v0), (0, _v5.trackLiveError)(_v0, {
            category: _v12.ELiveErrorCategory.MEDIA,
            data: {
              screenShareContext: this.context
            },
            method: "onScreenMediaStarted"
          });
        }
      }
    }
    async onScreenMediaStopped() {
      this.assertIsInitialized();
      let {
          isCurrentlyAllowed: _v0
        } = this.context,
        {
          data: _v1
        } = this.queryDataSync({
          type: _v6.ELiveConnectionQuery.IS_EVENT_BROADCASTER_CONNECTION
        });
      if (_v1 || _v0) {
        this.log.info("Resetting current media screen UID");
        try {
          await (0, _v4.removeRefValue)(this.firebase, this.screenActiveRef);
        } catch (_v0) {
          this.log.error("Failed to reset current media sharing UID: ", _v0), (0, _v5.trackLiveError)(_v0, {
            category: _v12.ELiveErrorCategory.MEDIA,
            data: {
              screenShareContext: this.context
            },
            method: "onScreenMediaStopped"
          });
        }
      }
    }
    async onGuestDeleted(_v0) {
      let {
          data: _v1
        } = _v0,
        {
          activeScreenShareId: _v2,
          pendingScreenShareId: _v3
        } = this.context,
        _v4 = (0, _v10.formatConnectionUidByType)(_v8.EAgoraConnectionType.GUEST_SCREEN, _v1);
      _v3 === _v4 && this.declinePermissions(), _v2 === _v4 && this.stopCurrentSharing();
    }
    onSessionLeft() {
      this.log.info("Cleanup screen states on scene leave"), this.cleanupSelfStatuses();
    }
    onLiveEventEnded() {
      let {
        data: _v0
      } = this.queryDataSync({
        type: _v6.ELiveConnectionQuery.IS_EVENT_BROADCASTER_CONNECTION
      });
      _v0 && (this.log.info("Cleaning up screen sharing state"), this.screenPendingRef && (0, _v4.removeRefValue)(this.firebase, this.screenPendingRef), this.screenActiveRef && (0, _v4.removeRefValue)(this.firebase, this.screenActiveRef));
    }
    async onConnectionTypeChanged(_v0) {
      this.assertIsInitialized();
      let {
          isCurrentlyAllowed: _v1
        } = this.context,
        {
          data: _v2
        } = _v0;
      if (_v2 !== _v9.EEventConnectionType.BROADCASTER && _v1) {
        this.log.info("Stopping screen on connection type change");
        try {
          await (0, _v4.removeRefValue)(this.firebase, this.screenActiveRef);
        } catch (_v0) {
          this.log.error("Failed to reset current media sharing UID:", _v0), (0, _v5.trackLiveError)(_v0, {
            category: _v12.ELiveErrorCategory.MEDIA,
            data: {
              screenShareContext: this.context,
              signal: _v0
            },
            method: "onConnectionTypeChanged"
          });
        }
      }
    }
  }
  (0, _v1._)([(0, _v2.OnQuery)(_v6.ELiveConnectionQuery.IS_SCREEN_SHARING_ALLOWED)], _v13.prototype, "isCurrentlyAllowed", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY)], _v13.prototype, "onBroadcasterApplicationReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_STARTED)], _v13.prototype, "onScreenMediaStarted", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveMediaSignal.SCREEN_MEDIA_STOPPED)], _v13.prototype, "onScreenMediaStopped", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveGraphicsSignal.GUEST_DELETED)], _v13.prototype, "onGuestDeleted", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.EGuestSignal.SESSION_LEFT)], _v13.prototype, "onSessionLeft", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveSignal.LIVE_EVENT_ENDED), (0, _v2.OnSignal)(_v7.EPageSignal.PAGE_INACTIVE)], _v13.prototype, "onLiveEventEnded", null), (0, _v1._)([(0, _v2.OnSignal)(_v7.ELiveBroadcasterSignal.EVENT_CONNECTION_TYPE_CHANGED)], _v13.prototype, "onConnectionTypeChanged", null), _v0.s(["RoomScreenShareManager", 0, _v13], 0);
}