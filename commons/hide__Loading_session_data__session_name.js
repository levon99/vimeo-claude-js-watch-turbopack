{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7(_v0) {
    let _v1 = _v0 ?? window.document.body;
    return _v1.requestFullscreen ? _v1.requestFullscreen({
      navigationUI: "hide"
    }) : _v1.webkitRequestFullscreen ? _v1.webkitRequestFullscreen() : Promise.resolve();
  }
  function _v8() {
    return !!(window.document.fullscreenElement || window.document.webkitFullscreenElement);
  }
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  async function _v12(_v0) {
    if (_v0.IS_DISPOSED) return;
    let {
      sessionId: _v1,
      sessionType: _v2,
      sessionCode: _v3
    } = _v0.context;
    _v0.log.info("Loading session data:", _v1, _v2, _v3), _v0.setContext({
      sessionInfo: _v0.context.sessionInfo.asLoading()
    });
    try {
      let {
        seat: _v0,
        sessionName: _v1,
        nextOccurrenceTime: _v2,
        metadata: _v3,
        sessionIsDemo: _v4
      } = await (0, _v5.getGuestComposerSessionInfo)({
        sessionType: _v2,
        sessionCode: _v3,
        sessionId: _v1,
        gctlConfig: (0, _v4.queryManagerGctlConfig)(_v0),
        fields: ["session_name", "session_is_demo", "seat", "graphics_version", "next_occurrence_time", "metadata.connections.rtc", "metadata.connections.firebase", "metadata.connections.interaction_tools", "metadata.connections.ingest_status"]
      });
      if (_v0.IS_DISPOSED) return (0, _v10.trackLiveAction)("session_info_fetch_cancel"), _v0.log.warn("Cancel session info load:", _v2, _v1);
      (0, _v10.trackLiveAction)("session_info_fetched"), _v0.log.info("Loaded session info:", _v2, _v1, _v0, _v3), _v0.setContext({
        sessionInfo: _v0.context.sessionInfo.asReady({
          sessionName: _v1,
          sessionIsDemo: _v4,
          nextOccurrenceTime: _v2,
          seat: _v0,
          metadata: _v3
        })
      }), _v0.emitSignal({
        type: _v11.ELiveSignal.COMPOSER_SESSION_READY,
        data: {
          id: _v1,
          type: _v2,
          metadata: _v3
        }
      });
    } catch (_v0) {
      _v0.log.error("Failed to fetch session information:", _v0), _v0.IS_DISPOSED || _v0.emitSignal({
        type: _v11.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      });
    }
  }
  async function _v13(_v0, _v1) {
    let _v2;
    _v0.log.info("Setting fullscreen mode:", _v1), _v0.setContext({
      mediaSettings: _v0.context.mediaSettings.asMerged({
        isFullscreenMode: _v1
      })
    }), _v1 !== _v8() && (_v1 ? await _v7() : await ((_v2 = void 0 ?? window.document).exitFullscreen ? _v2.exitFullscreen() : _v2.webkitExitFullscreen ? _v2.webkitExitFullscreen() : Promise.resolve()));
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  class _v20 extends _v2.ContextManager {
    context = {
      guestSessionActions: (0, _v2.createActions)({
        joinGuestSession: () => this.joinGuestSession(),
        leaveGuestSession: () => this.leaveGuestSession()
      }),
      sessionMediaActions: (0, _v2.createActions)({
        setLocalMirrored: _v0 => this.setLocalVideoMirrored(_v0),
        setFullscreenMode: _v0 => this.setFullscreenMode(_v0),
        setChatPanelOpened: _v0 => this.setChatPanelOpened(_v0)
      }),
      mediaSettings: (0, _v2.createNested)({
        isLocalMirrored: (0, _v17.getLiveConfigValue)(_v6.localStorageConfig.MEDIA.MIRRORING_ENABLED, !1),
        isFullscreenMode: !1,
        isChatPanelOpened: !1
      }),
      isJoined: !1,
      isBlocked: !1,
      sessionApplicationType: _v14.EComposerApplicationType.UNKNOWN,
      sessionType: _v14.EComposerSessionType.UNKNOWN,
      sessionId: -1,
      sessionCode: "",
      sessionInfo: (0, _v2.createLoadable)(null, !0)
    };
    log = new _v3.Logger("🌵GSCM");
    constructor(_v0) {
      if (super(), !_v0?.sessionId || !_v0?.sessionCode || !_v0?.sessionType || !_v0?.sessionApplicationType) throw new _v16.LiveError("Guest session must have correct initial state.", {
        data: _v0,
        code: _v15.ELiveErrorCode.INVALID_PARAMETERS
      });
      this.context.sessionId = _v0.sessionId, this.context.sessionType = _v0.sessionType, this.context.sessionCode = _v0.sessionCode, this.context.sessionApplicationType = _v0.sessionApplicationType, this.log.info("Initializing guest session manager for:", this.context.sessionType, this.context.sessionId);
    }
    async onProvisionStarted() {
      var _v0;
      await this.loadInitialSessionInfo(), _v0 = this.onFullScreenStatusChange, window.document.addEventListener("fullscreenchange", _v0), window.document.addEventListener("mozfullscreenchange", _v0), window.document.addEventListener("MSFullscreenChange", _v0), window.document.addEventListener("webkitfullscreenchange", _v0);
    }
    async onProvisionEnded() {
      var _v0;
      _v0 = this.onFullScreenStatusChange, window.document.removeEventListener("fullscreenchange", _v0), window.document.removeEventListener("mozfullscreenchange", _v0), window.document.removeEventListener("MSFullscreenChange", _v0), window.document.removeEventListener("webkitfullscreenchange", _v0);
    }
    async loadInitialSessionInfo() {
      return (0, _v10.withLiveErrorTracking)(() => _v12(this), {
        method: "loadInitialSessionInfo",
        category: _v18.ELiveErrorCategory.GUEST
      });
    }
    joinGuestSession() {
      return (0, _v10.withLiveErrorTracking)(() => {
        !this.IS_DISPOSED && (this.log.info("Joining guest session"), this.setContext({
          isJoined: !0
        }), this.emitSignal({
          type: _v11.EGuestSignal.SESSION_JOINED
        }));
      }, {
        method: "joinGuestSession",
        category: _v18.ELiveErrorCategory.GUEST
      });
    }
    leaveGuestSession() {
      return (0, _v10.withLiveErrorTracking)(() => {
        !this.IS_DISPOSED && (this.log.info("Leaving guest session"), this.setContext({
          isJoined: !1
        }), this.emitSignal({
          type: _v11.EGuestSignal.SESSION_LEFT
        }));
      }, {
        method: "leaveGuestSession",
        category: _v18.ELiveErrorCategory.GUEST
      });
    }
    setLocalVideoMirrored(_v0) {
      return (0, _v10.withLiveErrorTracking)(() => {
        this.setContext({
          mediaSettings: this.context.mediaSettings.asMerged({
            isLocalMirrored: _v0
          })
        }), (0, _v9.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.MIRRORING_ENABLED, _v0);
      }, {
        method: "setLocalVideoMirrored",
        category: _v18.ELiveErrorCategory.GUEST
      });
    }
    async setFullscreenMode(_v0) {
      return (0, _v10.withLiveErrorTracking)(() => _v13(this, _v0), {
        method: "setFullscreenMode",
        category: _v18.ELiveErrorCategory.GUEST
      });
    }
    setChatPanelOpened(_v0) {
      return (0, _v10.withLiveErrorTracking)(() => {
        this.setContext({
          mediaSettings: this.context.mediaSettings.asMerged({
            isChatPanelOpened: _v0
          })
        });
      }, {
        method: "setChatPanelOpened",
        category: _v18.ELiveErrorCategory.GUEST
      });
    }
    onSessionJoinedRequested() {
      return this.context.isJoined;
    }
    onAgoraConnectionRemoved() {
      this.IS_DISPOSED || this.setContext({
        isBlocked: !0,
        isJoined: !1
      });
    }
    onFullScreenStatusChange() {
      if (this.IS_DISPOSED) return;
      let _v0 = _v8();
      _v0 !== this.context.mediaSettings.isFullscreenMode && (this.log.info("Fullscreen mode system change detected:", _v0), this.setFullscreenMode(_v0));
    }
  }
  (0, _v1._)([(0, _v2.OnQuery)(_v19.EGuestQuery.SESSION_JOINED)], _v20.prototype, "onSessionJoinedRequested", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EAgoraSignal.AGORA_CONNECTION_REMOVED_FROM_SESSION)], _v20.prototype, "onAgoraConnectionRemoved", null), (0, _v1._)([(0, _v2.Bind)()], _v20.prototype, "onFullScreenStatusChange", null), _v0.s(["GuestSessionManager", 0, _v20], 0);
}