{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = ((_v1 = {}).ADMIN = "admin", _v1.REGISTRANT = "registrant", _v1.ANONYMOUS = "anonymous", _v1.VIMEO = "vimeo", _v1.GUEST = "guest", _v1),
    _v12 = ((_v2 = {}).PUBLIC = "anybody", _v2.NOBODY = "nobody", _v2.PASSWORD = "password", _v2.UNLISTED = "unlisted", _v2.EMBED_ONLY = "embed_only", _v2);
  _v0.s(["EInteractionAuthOption", () => _v11, "EInteractionRoomPrivacy", () => _v12], 0);
  var _v13 = _v0.i(0);
  function _v14() {
    if (_v13.environmentConfig.IS_IFRAME) {
      if (window?.document.referrer) return window.document.referrer;else if (window?.document.location?.ancestorOrigins?.length) return window?.document.location?.ancestorOrigins[0];
    }
    return null;
  }
  _v0.s(["getIframeReferrer", 0, _v14], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  async function _v23(_v0) {
    let {
      roomInfo: {
        value: _v1
      },
      roomPassword: _v2,
      roomHashedPassword: _v3,
      roomInjectedAuthToken: _v4,
      roomRegistrantUuid: _v5,
      roomDisabledAuthOptions: _v6,
      sessionId: _v7
    } = _v0.context;
    if (_v0.log.info("Checking auto-login options:", _v0.isAuthAutoSignInDisabled, _v1?.settings.authOptions, _v6), _v0.assertIsInitialized(), _v0.isAuthAutoSignInDisabled) return _v0.log.info("Auto auth is not forced, continue with separate options flow");
    let _v8 = (0, _v19.queryCurrentViewerSync)(_v0),
      _v9 = _v1?.settings.privacy === _v12.PASSWORD && !_v2 && !_v3,
      _v10 = !!_v1?.settings.authOptions[_v11.ADMIN],
      _v11 = !!(_v1?.settings.authOptions[_v11.VIMEO] && _v8.user),
      _v12 = !!(_v1?.settings.authOptions[_v11.REGISTRANT] && _v5),
      _v13 = (0, _v17.getFromLocalStorage)(_v8.localStorageConfig.INTERACTION.SAVED_USER_AUTH_PREFERENCES(_v7)),
      _v14 = Math.floor(Date.now() / 0),
      _v15 = !!(_v1?.roomType !== _v9.EComposerSessionType.VENUE && _v13 && _v13.roomId === _v1?.roomId && _v13.authToken.jwt && _v13.authToken.exp >= _v14),
      _v16 = !!(_v1?.settings.authOptions[_v11.ANONYMOUS] && !_v11 && (_v4 || _v15));
    if (_v10) _v0.log.info("Detected admin permissions, continue with auto-login flow");else if (_v9) return _v0.log.info("Password protected event with not provided password, auto auth is not available.");
    try {
      if (_v10) _v0.log.info("Processing auto-login with admin vimeo user"), await _v24(_v0, {
        type: _v11.ADMIN
      });else if (_v11) _v0.log.info("Processing auto-login with vimeo user"), await _v24(_v0, {
        type: _v11.VIMEO
      });else if (_v16) {
        _v0.log.info("Processing auto-login with anonymous user based on jwt");
        let _v0 = (0, _v16.inline)(() => _v4 ? {} : {
          roomDisplayName: _v13?.displayName,
          roomSavedUserAuthToken: _v13?.authToken.jwt
        });
        await _v24(_v0, {
          type: _v11.ANONYMOUS,
          ..._v0
        });
      } else _v12 ? (_v0.log.info("Processing auto-login with registrant user"), await _v24(_v0, {
        type: _v11.REGISTRANT,
        roomRegistrantUuid: _v5
      })) : _v0.log.info("No possible auto-login options, fallback to manual variant");
    } catch (_v0) {
      _v0.log.error("Auto-login flow failed:", _v0), (0, _v21.trackLiveError)(_v0, {
        method: "checkAutoAuth",
        category: _v20.ELiveErrorCategory.INTERACTION
      });
    }
  }
  async function _v24(_v0, {
    type: _v1,
    roomDisplayName: _v2,
    roomRegistrantUuid: _v3,
    roomGuestCode: _v4,
    roomSavedUserAuthToken: _v5,
    roomEmail: _v6
  }) {
    let {
        roomPassword: _v7,
        roomHashedPassword: _v8,
        roomUnlistedHash: _v9,
        roomInjectedAuthToken: _v10,
        sessionId: _v11
      } = _v0.context,
      _v12 = _v14();
    _v0.log.info("Authorizing in room:", {
      type: _v1,
      roomDisplayName: _v2,
      roomGuestCode: _v4,
      roomPassword: _v7,
      roomHashedPassword: _v8,
      roomUnlistedHash: _v9,
      roomJwtToken: _v10 || _v5,
      referrer: _v12
    }), _v0.assertIsInitialized(), _v0.setContext({
      roomUser: (0, _v3.createLoadable)(null, !0),
      isRoomUserAuthAttempted: !0
    });
    try {
      if (!_v10) switch (_v1) {
        case _v11.ANONYMOUS:
          if ("string" != typeof _v2 || _v2.length < _v7.interactionToolsConfig.AUTHORIZATION.MIN_DISPLAYNAME_LENGTH || _v2.length > _v7.interactionToolsConfig.AUTHORIZATION.MAX_DISPLAYNAME_LENGTH) throw new _v15.LiveError("Invalid auth preferred name supplied.", {
            code: _v10.ELiveErrorCode.INVALID_PARAMETERS,
            data: {
              authType: _v1
            }
          });
          break;
        case _v11.GUEST:
          if ("string" != typeof _v4 || _v4.length !== _v7.interactionToolsConfig.AUTHORIZATION.ROOM_GUEST_CODE_LENGTH) throw new _v15.LiveError("Invalid auth guest code supplied.", {
            code: _v10.ELiveErrorCode.INVALID_PARAMETERS,
            data: {
              authType: _v1
            }
          });
          break;
        case _v11.REGISTRANT:
          if (_v3 && 36 !== _v3.length) throw new _v15.LiveError("Invalid auth registrant UUID supplied. Expect 36 characters string.", {
            code: _v10.ELiveErrorCode.INVALID_PARAMETERS,
            data: {
              authType: _v1
            }
          });
          if (!_v3 && ("string" != typeof _v6 || !(0, _v18.isEmailValid)(_v6))) throw new _v15.LiveError("Invalid auth registrant email supplied.", {
            code: _v10.ELiveErrorCode.INVALID_PARAMETERS,
            data: {
              authType: _v1
            }
          });
      }
      let _v0 = _v10 || _v5,
        _v1 = await (0, _v6.postInteractionRoomAuth)({
          gctlConfig: (0, _v5.queryManagerGctlConfigWithFallback)(_v0),
          connection: _v0.connections.auth,
          fields: ["user", "firebase.config", "firebase.app_name", "firebase.jwt", "room_id", "room_hash", "room_type", "metadata.connections.chat_history", "metadata.connections.questions_history", "metadata.connections.polls_history", "metadata.misc"]
        }, {
          roomDisplayName: _v2,
          roomGuestCode: _v4,
          authType: _v1,
          ...(_v9 ? {
            roomUnlistedHash: encodeURIComponent(_v9)
          } : {}),
          ...(_v7 ? {
            roomPassword: encodeURIComponent(_v7)
          } : {}),
          ...(_v8 ? {
            roomHashedPassword: encodeURIComponent(_v8)
          } : {}),
          ...(_v3 ? {
            roomRegistrantUuid: _v3
          } : {}),
          ...(_v6 ? {
            roomEmail: _v6
          } : {}),
          ...(_v0 ? {
            roomJwtToken: _v0
          } : {}),
          ...(_v12 ? {
            referrer: _v12
          } : {})
        });
      if (_v0.log.info("Credentials ready:", _v1), _v0.setContext({
        roomUser: _v0.context.roomUser.asReady(_v1.user)
      }), _v0.log.info("Credentials user auth token:", _v1.user.authToken), _v1.user.authToken) {
        let {
          roomId: _v0,
          user: {
            displayName: _v1,
            authToken: _v2
          }
        } = _v1;
        _v0.log.info("Save user auth prefs to localstorage:", _v8.localStorageConfig.INTERACTION.SAVED_USER_AUTH_PREFERENCES(_v11), {
          roomId: _v0,
          displayName: _v1,
          authToken: _v2
        }), (0, _v17.setLocalStorageItem)(_v8.localStorageConfig.INTERACTION.SAVED_USER_AUTH_PREFERENCES(_v11), {
          roomId: _v0,
          displayName: _v1,
          authToken: _v2
        });
      }
      _v0.emitSignal({
        type: _v22.ELiveSignal.INTERACTION_SESSION_READY,
        data: {
          roomId: _v1.roomId,
          roomHash: _v1.roomHash,
          firebase: _v1.firebase,
          user: _v1.user,
          metadata: _v1.metadata
        }
      });
    } catch (_v0) {
      _v0.log.error("Credentials load failed:", _v0), _v0 instanceof _v15.LiveError && (_v0.data.authType = _v1), _v0.setContext({
        roomUser: _v0.context.roomUser.asFailed(_v0)
      }), (0, _v21.trackLiveError)(_v0, {
        method: "authorizeInteractionUser",
        category: _v20.ELiveErrorCategory.INTERACTION
      });
    }
  }
  async function _v25(_v0) {
    _v0.log.info("Interaction tools user logout");
    let {
      roomUser: _v1
    } = _v0.context;
    return _v1.value ? _v1.isLoading ? _v0.log.info("Currently auth is in loading status, ignore request") : void (_v0.setContext({
      roomUser: (0, _v3.createLoadable)(null)
    }), _v0.emitSignal({
      type: _v22.ELiveSignal.INTERACTION_SESSION_LOGOUT
    })) : _v0.log.info("Already logged out");
  }
  async function _v26(_v0, _v1, _v2 = _v6.ECredentialsType.PASSWORD) {
    let {
      sessionId: _v3,
      sessionType: _v4,
      roomPassword: _v5,
      roomHashedPassword: _v6
    } = _v0.context;
    _v0.log.info("Validating room password:", {
      sessionId: _v3,
      sessionType: _v4,
      password: _v1
    }), _v0.assertIsInitialized();
    try {
      if (!_v1 || "string" != typeof _v1 || 0 === _v1.length || _v2 !== _v6.ECredentialsType.PASSWORD && _v2 !== _v6.ECredentialsType.HASHED_PASSWORD) throw new _v15.LiveError("Invalid room password supplied.", {
        code: _v10.ELiveErrorCode.INVALID_PARAMETERS,
        data: {}
      });
      return await (0, _v6.postRoomCredentialsCheck)({
        gctlConfig: (0, _v5.queryManagerGctlConfigWithFallback)(_v0),
        connection: _v0.connections.credentialsCheck
      }, {
        type: _v2,
        value: encodeURIComponent(_v1)
      }), _v2 === _v6.ECredentialsType.PASSWORD ? _v0.setContext({
        roomPassword: _v1
      }) : _v2 === _v6.ECredentialsType.HASHED_PASSWORD && _v0.setContext({
        roomHashedPassword: _v1
      }), _v23(_v0);
    } catch (_v0) {
      _v0.log.error("Password validation failed:", _v0), _v5 ? _v0.setContext({
        roomPassword: null,
        roomUser: _v0.context.roomUser.asReady(null)
      }) : _v6 ? _v0.setContext({
        roomHashedPassword: null,
        roomUser: _v0.context.roomUser.asReady(null)
      }) : _v0.setContext({
        roomUser: _v0.context.roomUser.asFailed(_v0)
      }), (0, _v21.trackLiveError)(_v0, {
        method: "checkPasswordAuth",
        category: _v20.ELiveErrorCategory.INTERACTION
      });
    }
  }
  async function _v27(_v0) {
    let {
        sessionId: _v1,
        sessionType: _v2,
        roomDisabledAuthOptions: _v3,
        roomUnlistedHash: _v4,
        roomPassword: _v5,
        roomHashedPassword: _v6,
        roomInjectedAuthToken: _v7
      } = _v0.context,
      _v8 = _v14();
    _v0.log.info("Loading room info:", {
      sessionId: _v1,
      sessionType: _v2,
      roomPassword: _v5,
      roomHashedPassword: _v6,
      roomUnlistedHash: _v4,
      roomJwtToken: _v7,
      referrer: _v8
    });
    try {
      let _v0 = await (0, _v6.getInteractionRoomInfo)({
        sessionType: _v2,
        sessionId: _v1,
        gctlConfig: (0, _v5.queryManagerGctlConfigWithFallback)(_v0),
        fields: ["room_id", "room_type", "room_hash", "embed_code", "settings.auth_options", "settings.privacy", "metadata.connections.auth", "metadata.connections.ingest_status", "metadata.connections.credentials_check", "metadata.misc"]
      }, {
        ...(_v4 ? {
          roomUnlistedHash: encodeURIComponent(_v4)
        } : {}),
        ...(_v5 ? {
          roomPassword: encodeURIComponent(_v5)
        } : {}),
        ...(_v6 ? {
          roomHashedPassword: encodeURIComponent(_v6)
        } : {}),
        ...(_v7 ? {
          roomJwtToken: _v7
        } : {}),
        ...(_v8 ? {
          referrer: _v8
        } : {})
      });
      if (_v0.IS_DISPOSED) return _v0.log.warn("Disposed when init finish, skip room");
      _v3.length && Object.entries(_v0.settings.authOptions).forEach(([_v0, _v1]) => {
        _v1 && _v3.includes(_v0) && (_v0.settings.authOptions[_v0] = !1);
      }), _v0.log.info("Accessing interaction room:", _v1, _v2, _v0), _v0.connections = {
        auth: _v0.metadata.connections.auth,
        credentialsCheck: _v0.metadata.connections.credentialsCheck
      }, _v0.setContext({
        roomInfo: (0, _v3.createLoadable)(_v0, !_v0.isAuthAutoSignInDisabled)
      });
      let _v1 = (0, _v16.inline)(() => _v0?.settings.privacy !== _v12.PASSWORD ? _v23(_v0) : _v5 ? _v26(_v0, _v5) : _v6 ? _v26(_v0, _v6, _v6.ECredentialsType.HASHED_PASSWORD) : Promise.resolve());
      await _v1.finally(() => {
        if (_v0.IS_DISPOSED) return _v0.log.warn("Disposed when auth check finished");
        _v0.setContext(({
          roomInfo: _v0
        }) => ({
          roomInfo: _v0.asReady()
        }));
      });
    } catch (_v0) {
      _v0.log.error("Failed to load session:", _v0), _v0.emitSignal({
        type: _v22.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      });
    }
  }
  class _v28 extends _v3.ContextManager {
    context = {
      interactionSessionActions: (0, _v3.createActions)({
        authorizeInteractionUser: _v0 => this.authorizeInteractionUser(_v0),
        logoutInteractionUser: () => this.logoutInteractionUser(),
        resetAuthError: () => this.resetAuthError(),
        checkPasswordAuth: (_v0, _v1) => this.checkPasswordAuth(_v0, _v1)
      }),
      sessionApplicationType: _v9.EComposerApplicationType.UNKNOWN,
      sessionType: _v9.EComposerSessionType.UNKNOWN,
      sessionId: -1,
      roomDisabledAuthOptions: [],
      roomPassword: null,
      roomHashedPassword: null,
      roomUnlistedHash: null,
      roomInjectedAuthToken: null,
      roomRegistrantUuid: null,
      roomInfo: (0, _v3.createLoadable)(null, !0),
      roomUser: (0, _v3.createLoadable)(null),
      isRoomUserAuthAttempted: !1
    };
    log = new _v4.Logger("🌴ISM");
    connections = null;
    isAuthAutoSignInDisabled = !1;
    constructor(_v0) {
      if (super(), !_v0?.sessionId || !_v0.sessionType || !_v0.sessionApplicationType) throw new _v15.LiveError("Cannot initialize room session context.", {
        code: _v10.ELiveErrorCode.INITIALIZATION
      });
      this.context.sessionId = _v0.sessionId, this.context.sessionType = _v0.sessionType, this.context.sessionApplicationType = _v0.sessionApplicationType, this.isAuthAutoSignInDisabled = !!_v0.interaction?.auth?.noAutoSignIn, this.context.roomRegistrantUuid = _v0?.interaction?.auth?.roomRegistrantUuid || null, this.context.roomUnlistedHash = _v0?.interaction?.auth?.roomUnlistedHash || null, this.context.roomPassword = _v0?.interaction?.auth?.roomPassword || null, this.context.roomHashedPassword = _v0?.interaction?.auth?.roomHashedPassword || null, this.context.roomInjectedAuthToken = _v0?.interaction?.auth?.roomInjectedAuthToken || null, this.context.roomDisabledAuthOptions = _v0?.interaction?.auth?.roomDisabledOptions || [], this.log.info("Initializing room session manager for:", this.context.sessionType, this.context.sessionId);
    }
    async onProvisionStarted() {
      await this.loadSessionInfo();
    }
    async loadSessionInfo() {
      return _v27(this);
    }
    resetAuthError() {
      return function (_v0) {
        let {
          roomUser: _v1
        } = _v0.context;
        _v1.error && _v0.setContext({
          roomUser: _v1.asReady()
        });
      }(this);
    }
    async authorizeInteractionUser(_v0) {
      return (0, _v21.withLiveErrorTracking)(() => _v24(this, _v0), {
        category: _v20.ELiveErrorCategory.INTERACTION,
        method: "authorizeInteractionUser"
      });
    }
    async logoutInteractionUser() {
      return (0, _v21.withLiveErrorTracking)(() => _v25(this), {
        category: _v20.ELiveErrorCategory.INTERACTION,
        method: "logoutInteractionUser"
      });
    }
    assertIsInitialized() {
      if (!this.context.roomInfo.value || !this.connections) throw new _v15.LiveError("Interaction session manager is not initialized.", {
        code: _v10.ELiveErrorCode.INITIALIZATION
      });
    }
    async checkPasswordAuth(_v0, _v1) {
      return (0, _v21.withLiveErrorTracking)(() => _v26(this, _v0, _v1), {
        category: _v20.ELiveErrorCategory.INTERACTION,
        method: "checkPasswordAuth"
      });
    }
  }
  _v0.s(["InteractionSessionManager", 0, _v28], 0);
}