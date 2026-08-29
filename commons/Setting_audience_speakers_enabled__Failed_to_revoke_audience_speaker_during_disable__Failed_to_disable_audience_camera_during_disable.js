{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    return (0, _v4.withConnectionSupport)(_v5.ERequestMethod.DELETE, _v0, ({
      liveEventId: _v0,
      userId: _v1
    }) => ({
      path: `/live_events/${_v0}/audience_speakers/${_v1}`
    }));
  }
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12(_v0, _v1) {
    return _v0.assertIsInitialized(), _v0.isCreator ? _v0.firebase.database.child(_v0.requestsRef, String(_v1)) : _v0.requestsRef;
  }
  async function _v13(_v0, _v1) {
    if (_v0.assertIsInitialized(), _v0.log.info("Setting audience speakers enabled:", _v1), !_v1) {
      for (let _v0 of Object.values(_v0.context.grants)) if (_v0.isCreator && _v0.userId && _v0.eventId) try {
        await _v6({
          liveEventId: _v0.eventId,
          userId: _v0.userId,
          gctlConfig: (0, _v7.queryManagerGctlConfig)(_v0)
        });
      } catch (_v0) {
        _v0.log.error("Failed to revoke audience speaker during disable:", _v0.userId, _v0);
      }
      try {
        _v0.cameraEnabledRef && (await (0, _v10.setRefValue)(_v0.firebase, _v0.cameraEnabledRef, !1));
      } catch (_v0) {
        _v0.log.error("Failed to disable audience camera during disable:", _v0);
      }
    }
    await (0, _v10.setRefValue)(_v0.firebase, _v0.enabledRef, _v1), _v0.setContext({
      isEnabled: _v1
    });
  }
  async function _v14(_v0, _v1) {
    if (_v0.assertIsInitialized(), _v0.log.info("Setting audience camera enabled:", _v1), !_v0.context.isEnabled) throw new _v9.LiveError("Audience camera cannot be enabled while audience speakers is disabled.", {
      code: _v8.ELiveErrorCode.OPERATION_RESTRICTED
    });
    await (0, _v10.setRefValue)(_v0.firebase, _v0.cameraEnabledRef, _v1);
  }
  async function _v15(_v0, _v1, _v2) {
    var _v3;
    _v0.assertEventIsKnown(), _v0.assertIsInitialized(), _v0.log.info("Accepting audience speaker request:", _v1), await (_v3 = {
      liveEventId: _v0.eventId,
      gctlConfig: (0, _v7.queryManagerGctlConfig)(_v0)
    }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.POST, _v3, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/audience_speakers`
    }), {
      body: {
        user_id: _v1,
        display_name: _v2
      }
    }));
    let _v4 = _v12(_v0, _v1);
    await (0, _v10.setRefValue)(_v0.firebase, _v4, null);
  }
  async function _v16(_v0, _v1) {
    _v0.assertIsInitialized(), _v0.log.info("Rejecting audience speaker request:", _v1);
    let _v2 = _v12(_v0, _v1);
    await (0, _v10.setRefValue)(_v0.firebase, _v2, null);
  }
  async function _v17(_v0, _v1) {
    _v0.assertEventIsKnown(), _v0.log.info("Revoking audience speaker role:", _v1), await _v6({
      liveEventId: _v0.eventId,
      userId: _v1,
      gctlConfig: (0, _v7.queryManagerGctlConfig)(_v0)
    });
  }
  async function _v18(_v0, _v1, _v2) {
    if (_v0.assertIsInitialized(), !_v0.currentUserId) throw new _v9.LiveError("User must be authorized to request to speak.", {
      code: _v8.ELiveErrorCode.UNAUTHORIZED
    });
    if (!_v0.context.isEnabled) throw new _v9.LiveError("Audience speakers feature is not enabled.", {
      code: _v8.ELiveErrorCode.OPERATION_RESTRICTED
    });
    let _v3 = _v12(_v0, _v0.currentUserId);
    await (0, _v10.setRefValue)(_v0.firebase, _v3, {
      userId: String(_v0.currentUserId),
      displayName: _v1,
      avatarUrl: _v2 ?? null,
      requestedAt: (0, _v11.getAbsoluteNow)()
    });
  }
  async function _v19(_v0) {
    if (_v0.assertIsInitialized(), !_v0.currentUserId) return;
    let _v1 = _v12(_v0, _v0.currentUserId);
    await (0, _v10.setRefValue)(_v0.firebase, _v1, null);
  }
  async function _v20(_v0) {
    let _v1 = _v0.currentUserId ? _v0.context.grants[_v0.currentUserId] : null,
      _v2 = _v0.eventId ?? _v1?.eventId,
      _v3 = _v1?.joinToken;
    if (_v2 && _v3) {
      var _v4;
      _v0.log.info("Stopping speaking (self-revoke):", _v0.currentUserId), await (_v4 = {
        liveEventId: _v2,
        roomJwtToken: _v3,
        gctlConfig: (0, _v7.queryManagerGctlConfig)(_v0)
      }, (0, _v4.withConnectionSupport)(_v5.ERequestMethod.DELETE, _v4, ({
        liveEventId: _v0,
        roomJwtToken: _v1
      }) => ({
        path: `/live_events/${_v0}/audience_speaker/self`,
        body: {
          room_jwt_token: _v1
        }
      })));
    }
  }
  function _v21(_v0) {
    _v0.log.info("Disposing audience speakers manager"), _v0.disposeSubscribers(), _v0.enabledRef = null, _v0.cameraEnabledRef = null, _v0.requestsRef = null, _v0.grantsRef = null, _v0.isCreator = !1, _v0.eventId = null, _v0.currentUserId = null, _v0.currentUser = null, _v0.setContext({
      isEnabled: !1,
      isCameraEnabled: !1,
      requests: {},
      grants: {},
      isRequestPending: !1,
      canRequestToSpeak: !1,
      isPromoted: !1,
      currentGrant: null,
      currentUser: null
    });
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  class _v27 extends _v23.UnsubscribingContextManager {
    context = {
      audienceSpeakerActions: (0, _v2.createActions)({
        setEnabled: _v0 => this.setEnabled(_v0),
        setCameraEnabled: _v0 => this.setCameraEnabled(_v0),
        acceptRequest: (_v0, _v1) => this.acceptRequest(_v0, _v1),
        rejectRequest: _v0 => this.rejectRequest(_v0),
        revokeAudienceSpeakingRole: _v0 => this.revokeAudienceSpeakingRole(_v0),
        stopSpeaking: () => this.stopSpeaking(),
        requestToSpeak: (_v0, _v1) => this.requestToSpeak(_v0, _v1),
        leaveWaitingRoom: () => this.leaveWaitingRoom()
      }),
      isHydrated: !1,
      isEnabled: !1,
      isCameraEnabled: !1,
      requests: {},
      grants: {},
      isRequestPending: !1,
      canRequestToSpeak: !1,
      isPromoted: !1,
      currentGrant: null,
      currentUser: null
    };
    firebase;
    enabledRef = null;
    cameraEnabledRef = null;
    requestsRef = null;
    grantsRef = null;
    isCreator = !1;
    eventId = null;
    currentUserId = null;
    currentUser = null;
    log = new _v3.Logger("🎤AUD");
    onProvisionEnded() {
      return _v21(this);
    }
    assertIsInitialized() {
      if (!this.enabledRef || !this.cameraEnabledRef || !this.requestsRef || !this.grantsRef) throw new _v9.LiveError("Audience speakers manager is not initialized.", {
        code: _v8.ELiveErrorCode.INITIALIZATION
      });
    }
    assertEventIsKnown() {
      if (!this.eventId) throw new _v9.LiveError("Audience speakers manager is missing the event id.", {
        code: _v8.ELiveErrorCode.INITIALIZATION
      });
    }
    async setEnabled(_v0) {
      return (0, _v25.withLiveErrorTracking)(() => _v13(this, _v0), {
        method: "setEnabled",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async setCameraEnabled(_v0) {
      return (0, _v25.withLiveErrorTracking)(() => _v14(this, _v0), {
        method: "setCameraEnabled",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async acceptRequest(_v0, _v1) {
      return (0, _v25.withLiveErrorTracking)(() => _v15(this, _v0, _v1), {
        method: "acceptRequest",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async rejectRequest(_v0) {
      return (0, _v25.withLiveErrorTracking)(() => _v16(this, _v0), {
        method: "rejectRequest",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async revokeAudienceSpeakingRole(_v0) {
      return (0, _v25.withLiveErrorTracking)(() => _v17(this, _v0), {
        method: "revokeAudienceSpeakingRole",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async requestToSpeak(_v0, _v1) {
      return (0, _v25.withLiveErrorTracking)(() => _v18(this, _v0, _v1), {
        method: "requestToSpeak",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async leaveWaitingRoom() {
      return (0, _v25.withLiveErrorTracking)(() => _v19(this), {
        method: "leaveWaitingRoom",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    async stopSpeaking() {
      return (0, _v25.withLiveErrorTracking)(() => _v20(this), {
        method: "stopSpeaking",
        category: _v24.ELiveErrorCategory.GUEST
      });
    }
    onComposerSessionReady({
      data: {
        id: _v0
      }
    }) {
      this.eventId = _v0;
    }
    onLiveEventEnded() {
      this.eventId && (this.log.info("Event ended, cleaning up audience speakers"), Object.keys(this.context.grants).forEach(_v0 => {
        this.revokeAudienceSpeakingRole(_v0);
      }));
    }
    onInteractionAppReady({
      data: {
        firebase: _v0,
        app: _v1,
        roomId: _v2,
        user: _v3
      }
    }) {
      var _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11;
      let _v12, _v13, _v14, _v15;
      this.log.info("🚀Initializing audience speakers connection:", _v2), this.firebase = _v0, this.currentUserId = _v3?.id ?? null, this.currentUser = _v3 ?? null, this.isCreator = !!_v3?.isCreator, this.setContext({
        canRequestToSpeak: !!_v3?.id,
        currentUser: this.currentUser
      });
      let _v16 = (0, _v10.getRealtimeDatabase)(_v0, _v1);
      this.enabledRef = (0, _v10.getDatabaseRef)(_v0, _v16, _v22.firebaseConfig.REFS.INTERACTION.AUDIENCE_SPEAKERS.META_ENABLED(_v2)), this.cameraEnabledRef = (0, _v10.getDatabaseRef)(_v0, _v16, _v22.firebaseConfig.REFS.INTERACTION.AUDIENCE_SPEAKERS.META_CAMERA_ENABLED(_v2));
      let _v17 = this.isCreator ? _v22.firebaseConfig.REFS.INTERACTION.AUDIENCE_SPEAKERS.REQUESTS(_v2) : _v22.firebaseConfig.REFS.INTERACTION.AUDIENCE_SPEAKERS.REQUEST(_v2, this.currentUserId ?? ""),
        _v18 = this.isCreator ? _v22.firebaseConfig.REFS.INTERACTION.AUDIENCE_SPEAKERS.GRANTS(_v2) : _v22.firebaseConfig.REFS.INTERACTION.AUDIENCE_SPEAKERS.GRANT(_v2, this.currentUserId ?? "");
      this.requestsRef = (0, _v10.getDatabaseRef)(_v0, _v16, _v17), this.grantsRef = (0, _v10.getDatabaseRef)(_v0, _v16, _v18);
      let _v19 = [(_v4 = this, _v5 = this.enabledRef, _v12 = _v0 => {
        let _v1 = !!_v0.val();
        _v4.setContext({
          isEnabled: _v1,
          isHydrated: !0
        });
      }, (0, _v10.onRefEvent)(_v4.firebase, _v5, "value", _v12, "audience-speakers-enabled"), () => (0, _v10.offRefEvent)(_v4.firebase, _v5, "value", _v12)), (_v6 = this, _v7 = this.cameraEnabledRef, _v13 = _v0 => {
        let _v1 = !!_v0.val();
        _v6.setContext({
          isCameraEnabled: _v1,
          isHydrated: !0
        });
      }, (0, _v10.onRefEvent)(_v6.firebase, _v7, "value", _v13, "audience-speakers-camera-enabled"), () => (0, _v10.offRefEvent)(_v6.firebase, _v7, "value", _v13))];
      (this.isCreator || this.currentUserId) && _v19.push((_v8 = this, _v9 = this.requestsRef, _v14 = _v0 => {
        let _v1 = _v0.val(),
          _v2 = _v8.isCreator ? Object.fromEntries(Object.entries(_v1 ?? {}).map(([_v0, _v1]) => [_v0, {
            ..._v1,
            userId: _v0
          }])) : _v8.currentUserId && _v1 ? {
            [_v8.currentUserId]: {
              ..._v1,
              userId: _v8.currentUserId
            }
          } : {},
          _v3 = !!(_v8.currentUserId && _v2[_v8.currentUserId]);
        _v8.setContext({
          requests: _v2,
          isRequestPending: _v3,
          isHydrated: !0
        });
      }, (0, _v10.onRefEvent)(_v8.firebase, _v9, "value", _v14, "audience-speaker-requests"), () => (0, _v10.offRefEvent)(_v8.firebase, _v9, "value", _v14)), (_v10 = this, _v11 = this.grantsRef, _v15 = _v0 => {
        let _v1 = _v0.val(),
          _v2 = _v10.isCreator ? _v1 ?? {} : _v10.currentUserId && _v1 ? {
            [_v10.currentUserId]: {
              ..._v1,
              userId: _v10.currentUserId
            }
          } : {},
          _v3 = _v10.currentUserId ? _v2[_v10.currentUserId] ?? null : null,
          _v4 = !!(_v3 && _v3.active);
        _v10.setContext({
          grants: _v2,
          currentGrant: _v3,
          isPromoted: _v4,
          isHydrated: !0
        });
      }, (0, _v10.onRefEvent)(_v10.firebase, _v11, "value", _v15, "audience-speaker-grants"), () => (0, _v10.offRefEvent)(_v10.firebase, _v11, "value", _v15))), this.addUnSubscribers(_v19);
    }
    onInteractionSessionLogout() {
      return _v21(this);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v26.ELiveSignal.COMPOSER_SESSION_READY)], _v27.prototype, "onComposerSessionReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v26.ELiveSignal.LIVE_EVENT_ENDED)], _v27.prototype, "onLiveEventEnded", null), (0, _v1._)([(0, _v2.OnSignal)(_v26.ELiveRealtimeSignal.FIREBASE_INTERACTION_APP_READY)], _v27.prototype, "onInteractionAppReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v26.ELiveSignal.INTERACTION_SESSION_LOGOUT)], _v27.prototype, "onInteractionSessionLogout", null), _v0.s(["AudienceSpeakersManager", 0, _v27], 0);
}