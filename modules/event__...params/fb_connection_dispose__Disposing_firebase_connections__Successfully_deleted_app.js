{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    let {
      isDisposed: _v1
    } = _v0.context;
    _v1 || ((0, _v5.trackLiveAction)("fb_connection_dispose"), _v0.log.info("Disposing firebase connections"), _v0.disposeSubscribers(), [_v0.interactionApp, _v0.composerApp].forEach((_v0, _v1) => {
      _v0 && _v0.firebase?.firebase.deleteApp(_v0).then(() => _v0.log.info("Successfully deleted app:", _v1)).catch(() => _v0.log.warn("Failed to delete app:", _v1));
    }), _v0.context.isDisposed = !0, _v0.context.interactionConnection.isConnected = !1, _v0.context.composerConnection.isConnected = !1);
  }
  _v0.s(["dispose", 0, _v6], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  async function _v11(_v0, _v1, _v2) {
    var _v3;
    let {
        config: _v4,
        token: _v5,
        name: _v6,
        persistence: _v7
      } = _v1,
      {
        onPersistenceChangeFinished: _v8,
        onPersistenceChangeFailed: _v9,
        onBeforeAuthStateChanged: _v10,
        onIdTokenChanged: _v11,
        onAuthStateChanged: _v12,
        onConnectionStateChanged: _v13,
        onClockSkewChanged: _v14
      } = _v2,
      _v15 = [],
      _v16 = (_v3 = _v0.firebase, _v3.getApps().find(_v0 => _v0.name === _v6) || _v3.initializeApp(_v4, _v6)),
      _v17 = _v0.auth.getAuth(_v16);
    if (_v7) {
      let _v0 = function (_v0, _v1) {
        switch (_v1) {
          case _v10.EFirebasePersistenceType.LOCAL_STORAGE:
            return _v0.browserLocalPersistence;
          case _v10.EFirebasePersistenceType.INDEXED_DB:
            return _v0.indexedDBLocalPersistence;
          case _v10.EFirebasePersistenceType.SESSION:
            return _v0.browserSessionPersistence;
          case _v10.EFirebasePersistenceType.MEMORY:
            return _v0.inMemoryPersistence;
        }
      }(_v0.auth, _v7);
      await _v0.auth.setPersistence(_v17, _v0).then(() => _v8 ? _v8(_v7) : null).catch(_v0 => _v9 ? _v9(_v0, _v7) : _v4.Logger.getGlobal().error("Auth persistence change failed:", _v6, _v7, _v0));
    }
    await _v0.auth.signInWithCustomToken(_v17, _v5);
    let _v18 = _v17.onAuthStateChanged(_v12);
    if (_v15.push(_v18), _v10) {
      let _v0 = _v17.beforeAuthStateChanged(_v10);
      _v15.push(_v0);
    }
    if (_v11) {
      let _v0 = _v17.onIdTokenChanged(_v11);
      _v15.push(_v0);
    }
    if (_v13) {
      let _v0 = _v0.database.getDatabase(_v16),
        _v1 = _v0.database.ref(_v0, _v7.firebaseConfig.REFS.INTERNAL.CONNECTION_STATE),
        _v2 = _v0 => _v13(_v0, _v16, _v17);
      if ((0, _v9.onRefEvent)(_v0, _v1, "value", _v2, "app-connection-state"), _v15.push(() => (0, _v9.offRefEvent)(_v0, _v1, "value", _v2)), _v14) {
        let _v0 = _v0.database.ref(_v0, _v7.firebaseConfig.REFS.INTERNAL.SERVER_TIME_OFFSET);
        (0, _v9.onRefEvent)(_v0, _v0, "value", _v14, "app-clock-skew"), _v15.push(() => (0, _v9.offRefEvent)(_v0, _v0, "value", _v14));
      }
    }
    return [_v16, _v15];
  }
  function _v12(_v0, _v1) {
    return `VIMEO-${_v0}:${_v1}`;
  }
  _v0.s(["createFirebaseApplication", 0, _v11, "generateFirebaseApplicationName", 0, _v12], 0);
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  async function _v15(_v0) {
    let {
      composerCredentials: _v1
    } = _v0.context;
    _v0.firebase && _v1 && !_v0.composerApp && (await _v16(_v0, _v0.firebase, _v1));
  }
  async function _v16(_v0, _v1, _v2) {
    let {
        config: _v3,
        token: _v4,
        sessionId: _v5,
        sessionFolder: _v6,
        appName: _v7
      } = _v2,
      _v8 = {
        sessionId: _v5,
        appName: _v7
      };
    _v0.log.info("Setting up composer firebase connections", _v5), (0, _v5.trackLiveAction)("fb_composer_connection_create");
    try {
      let _v0 = !1,
        [_v1, _v2] = await _v11(_v1, {
          config: _v3,
          name: _v7,
          token: _v4,
          persistence: _v7.firebaseConfig.AUTH.DEFAULT_PERSISTENCE_TYPE
        }, {
          onPersistenceChangeFinished: _v0 => {
            _v0.log.info("Composer auth persistence state set to:", _v0);
          },
          onPersistenceChangeFailed: (_v0, _v1) => {
            _v0.log.error("Composer auth persistence state change failed:", _v0, _v1);
          },
          onBeforeAuthStateChanged: _v0 => {
            _v0.log.info("Received before composer auth update:", _v8, !!_v0), (0, _v5.trackLiveAction)("fb_composer_before_connection_auth_update", {
              isDisposed: _v0.IS_DISPOSED,
              name: _v7,
              sessionId: _v5,
              user: !!_v0
            });
          },
          onIdTokenChanged: _v0 => {
            _v0.log.info("Received composer ID token changed event auth update:", _v8, !!_v0);
          },
          onAuthStateChanged: _v0 => {
            if ((0, _v5.trackLiveAction)("fb_composer_connection_auth_update", {
              isDisposed: _v0.IS_DISPOSED,
              name: _v7,
              user: !!_v0
            }), _v0.IS_DISPOSED) return _v0.log.info("Received composer auth update after disposal:", _v8);
            _v0.log.info("Received interaction auth update:", _v8), _v0.setContext({
              composerConnection: _v0.context.composerConnection.asMerged({
                user: _v0
              })
            });
          },
          onConnectionStateChanged: _v0 => {
            if (_v0.IS_DISPOSED) return _v0.log.info("Received composer status change after disposal:", _v8);
            let _v1 = !0 === _v0.val();
            _v0 && (0, _v5.trackLiveAction)(_v1 ? "fb_composer_connected" : "fb_composer_disconnected"), _v0.log.info("Composer firebase connection state change:", _v1, _v8), _v0.setContext({
              composerConnection: _v0.context.composerConnection.asMerged({
                isConnected: _v1
              })
            }), !_v1 || _v0 || _v0.IS_DISPOSED || (_v0.log.info("Composer firebase app is ready:", _v8), (0, _v5.trackLiveAction)("fb_composer_app_ready"), _v0 = !0, _v0.emitSignal({
              type: _v14.ELiveRealtimeSignal.FIREBASE_COMPOSER_APP_READY,
              data: {
                firebase: _v1,
                app: _v0.composerApp,
                config: _v3,
                sessionId: _v5,
                sessionFolder: _v6
              }
            }));
          },
          onClockSkewChanged: _v0 => {
            _v8.liveApplicationConfig.TIMING.CLOCK_SKEW = _v0.val() || 0;
          }
        });
      _v0.composerApp = _v1, _v0.IS_DISPOSED ? (_v0.log.info("Composer apps de-synced with fast updates, need unsubscribing"), _v2.forEach(_v0 => _v0())) : (_v0.log.info("Composer apps created:", _v8), _v0.addUnSubscribers(_v2));
    } catch (_v0) {
      _v0.log.error("Failed to authorize composer firebase:", _v0, _v8), (0, _v5.trackLiveError)(_v0, {
        method: "createComposerConnection",
        category: _v13.ELiveErrorCategory.FIREBASE
      });
    }
    (0, _v5.trackLiveAction)("fb_composer_connection_created");
  }
  async function _v17(_v0, _v1) {
    _v0.log.info("Session information loaded, fetching composer credentials:", _v1.data);
    try {
      let {
        firebase: {
          config: _v0,
          jwt: _v1,
          appName: _v2
        },
        sessionId: _v3,
        user: _v4
      } = await _v0.loadComposerConfig(_v1);
      _v0.setContext({
        composerCredentials: {
          config: {
            apiKey: _v0.apiKey,
            authDomain: _v0.authDomain,
            databaseURL: _v0.databaseUrl,
            projectId: _v0.projectId,
            storageBucket: _v0.storageBucket
          },
          token: _v1,
          sessionFolder: `${_v0.graphicsStorageFolder}${_v3}`,
          sessionId: _v3,
          appName: _v12(_v0.uuid, _v2 ?? `vimeo-composer-${_v0.uuid}`),
          user: _v4
        },
        isComposerReady: !0
      }), _v0.log.info("Composer config credentials ready:", _v0.context.composerCredentials, _v0), await _v15(_v0);
    } catch (_v0) {
      _v0.log.error("Failed to load composer FB config:", _v0), _v0.emitSignal({
        type: _v14.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      }), (0, _v5.trackLiveError)(_v0, {
        method: "initializeComposerConnection",
        category: _v13.ELiveErrorCategory.FIREBASE,
        data: {
          signal: _v1
        }
      });
    }
  }
  async function _v18(_v0) {
    let {
      interactionCredentials: _v1
    } = _v0.context;
    _v0.firebase && _v1 && !_v0.interactionApp && (await _v19(_v0, _v0.firebase, _v1));
  }
  async function _v19(_v0, _v1, _v2) {
    let {
        config: _v3,
        roomId: _v4,
        token: _v5,
        appName: _v6
      } = _v2,
      _v7 = {
        roomId: _v4,
        appName: _v6
      };
    _v0.log.info("Setting up interaction firebase connections:", _v7), (0, _v5.trackLiveAction)("fb_interaction_connection_create");
    try {
      let _v0 = !1,
        [_v1, _v2] = await _v11(_v1, {
          config: _v3,
          name: _v6,
          token: _v5,
          persistence: _v7.firebaseConfig.AUTH.DEFAULT_PERSISTENCE_TYPE
        }, {
          onPersistenceChangeFinished: _v0 => {
            _v0.log.info("Interaction auth persistence state set to:", _v0);
          },
          onPersistenceChangeFailed: (_v0, _v1) => {
            _v0.log.error("Interaction auth persistence state change failed:", _v0, _v1);
          },
          onBeforeAuthStateChanged: _v0 => {
            _v0.log.info("Received before interaction auth update:", _v7, !!_v0), (0, _v5.trackLiveAction)("fb_interaction_before_connection_auth_update", {
              isDisposed: _v0.IS_DISPOSED,
              name: _v6,
              roomId: _v4,
              user: !!_v0
            });
          },
          onIdTokenChanged: _v0 => {
            _v0.log.info("Received interaction ID token changed event auth update:", _v7, !!_v0);
          },
          onAuthStateChanged: _v0 => {
            if ((0, _v5.trackLiveAction)("fb_interaction_connection_auth_update", {
              isDisposed: _v0.IS_DISPOSED,
              name: _v6,
              user: !!_v0
            }), _v0.IS_DISPOSED) return _v0.log.info("Received interaction auth update after disposal:", _v7);
            _v0.log.info("Received interaction auth update:", _v7), _v0.setContext({
              interactionConnection: _v0.context.interactionConnection.asMerged({
                user: _v0
              })
            });
          },
          onConnectionStateChanged: (_v0, _v1) => {
            if (_v0.IS_DISPOSED) return _v0.log.info("Received interaction status change after disposal:", _v7);
            let _v2 = !0 === _v0.val();
            _v0 && (0, _v5.trackLiveAction)(_v2 ? "fb_interaction_connected" : "fb_interaction_disconnected"), _v0.log.info("Interaction firebase connection state change:", _v2, _v7), _v0.setContext({
              interactionConnection: _v0.context.interactionConnection.asMerged({
                isConnected: _v2
              })
            }), _v2 && !_v0 && (_v0.log.info("Interaction firebase app is ready:", _v7), (0, _v5.trackLiveAction)("fb_interaction_app_ready"), _v0 = !0, _v0.emitSignal({
              type: _v14.ELiveRealtimeSignal.FIREBASE_INTERACTION_APP_READY,
              data: {
                firebase: _v1,
                app: _v1,
                metadata: _v2.metadata,
                user: _v2.user,
                roomHash: _v2.roomHash,
                roomId: _v2.roomId
              }
            }));
          },
          onClockSkewChanged: _v0 => {
            _v8.liveApplicationConfig.TIMING.CLOCK_SKEW = _v0.val() || 0;
          }
        });
      _v0.interactionApp = _v1, _v0.IS_DISPOSED ? (_v0.log.info("Interaction apps de-synced with fast updates, need unsubscribing"), _v2.forEach(_v0 => _v0())) : (_v0.log.info("Interaction apps created:", _v7), _v0.addUnSubscribers(_v2, "interaction"));
    } catch (_v0) {
      _v0.log.error("Failed to authorize interaction firebase:", _v0, _v7), (0, _v5.trackLiveError)(_v0, {
        method: "createInteractionConnection",
        category: _v13.ELiveErrorCategory.FIREBASE
      });
    }
    (0, _v5.trackLiveAction)("fb_interaction_connection_created");
  }
  async function _v20(_v0, _v1) {
    if (!_v1.data?.metadata?.connections?.interactionTools) return _v0.log.warn("Cannot load interaction credentials for session, no connection");
    _v0.log.info("Session information loaded, fetching interaction credentials:", _v1.data);
    try {
      let {
        firebase: {
          config: _v0,
          jwt: _v1,
          appName: _v2
        },
        metadata: _v3,
        user: _v4,
        roomId: _v5,
        roomHash: _v6
      } = await _v0.loadInteractionConfig(_v1);
      _v0.setContext({
        interactionCredentials: {
          config: {
            apiKey: _v0.apiKey,
            authDomain: _v0.authDomain,
            databaseURL: _v0.databaseUrl,
            projectId: _v0.projectId,
            storageBucket: _v0.storageBucket
          },
          metadata: _v3,
          appName: _v12(_v0.uuid, _v2 ?? `vimeo-interaction-${_v0.uuid}`),
          token: _v1,
          roomHash: _v6,
          roomId: _v5,
          user: _v4
        },
        isInteractionReady: !0
      }), _v0.log.info("Interaction config credentials ready:", _v0.context.interactionCredentials, _v0), await _v18(_v0);
    } catch (_v0) {
      _v0.log.error("Failed to load interaction FB config:", _v0), _v0.emitSignal({
        type: _v14.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      }), (0, _v5.trackLiveError)(_v0, {
        method: "initializeComposerInteractionToolsConnection",
        category: _v13.ELiveErrorCategory.FIREBASE
      });
    }
  }
  async function _v21(_v0, _v1) {
    _v0.log.info("Session information loaded, initialize interaction:", _v1.data);
    try {
      let {
        firebase: {
          config: _v0,
          jwt: _v1,
          appName: _v2
        },
        user: _v3,
        roomId: _v4,
        roomHash: _v5,
        metadata: _v6
      } = _v1.data;
      _v0.setContext({
        interactionCredentials: {
          config: {
            apiKey: _v0.apiKey,
            authDomain: _v0.authDomain,
            databaseURL: _v0.databaseUrl,
            projectId: _v0.projectId,
            storageBucket: _v0.storageBucket
          },
          metadata: _v6,
          appName: _v12(_v0.uuid, _v2 ?? `vimeo-interaction-${_v0.uuid}`),
          token: _v1,
          roomHash: _v5,
          roomId: _v4,
          user: _v3
        },
        isInteractionReady: !0
      }), _v0.log.info("Interaction config credentials ready:", _v0.context.interactionCredentials, _v0), await _v18(_v0);
    } catch (_v0) {
      _v0.log.error("Failed to load interaction FB config:", _v0), _v0.emitSignal({
        type: _v14.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      }), (0, _v5.trackLiveError)(_v0, {
        method: "initializeInteractionToolsConnection",
        category: _v13.ELiveErrorCategory.FIREBASE,
        data: {
          signal: _v1
        }
      });
    }
  }
  function _v22(_v0) {
    _v0.log.info("Disposing interaction tools connection"), _v0.interactionApp && (_v0.log.info("Disposing interaction tools app:", _v0.interactionApp.name), _v0.interactionApp.name && _v0.disposeSubscribers(_v0.interactionApp.name), _v0.firebase?.firebase.deleteApp(_v0.interactionApp), _v0.interactionApp = null), _v0.setContext({
      isInteractionReady: !1,
      interactionCredentials: null,
      interactionConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      })
    });
  }
  _v0.s(["initializeComposerConnection", 0, _v17, "tryToSetupComposerConnection", 0, _v15], 0), _v0.s(["disposeInteractionToolsConnection", 0, _v22, "initializeComposerInteractionToolsConnection", 0, _v20, "initializeInteractionToolsConnection", 0, _v21, "tryToSetupInteractionConnection", 0, _v18], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  class _v29 extends _v27.UnsubscribingContextManager {
    firebase = null;
    uuid = (0, _v3.v4)();
    interactionApp = null;
    composerApp = null;
    streamHealthApp = null;
    log = new _v4.Logger("🧁FBS");
    onProvisionEnded() {
      return _v6(this);
    }
    async loadInteractionConfig({
      data: {
        metadata: _v0
      }
    }) {
      let _v1 = _v0.connections.interactionTools;
      return this.log.info("Loading interaction with new room API:", _v1.uri), (0, _v26.postInteractionRoomAuth)({
        connection: _v1,
        gctlConfig: (0, _v23.queryManagerGctlConfig)(this),
        fields: ["room_hash", "room_id", "firebase.app_name", "firebase.jwt", "firebase.config", "user", "metadata.connections.chat_history", "metadata.connections.questions_history", "metadata.connections.polls_history"]
      });
    }
    async loadComposerConfig({
      data: {
        metadata: _v0
      }
    }) {
      var _v1;
      return _v1 = {
        connection: _v0.connections.firebase,
        gctlConfig: (0, _v23.queryManagerGctlConfig)(this),
        fields: ["session_id", "firebase.app_name", "firebase.jwt", "firebase.config", "user"]
      }, (0, _v24.withConnectionSupport)(_v25.ERequestMethod.GET, _v1, ({
        liveEventId: _v0
      }) => ({
        path: `/live_events/${_v0}/broadcaster/composer`
      }));
    }
    async loadStreamHealthCredentials(_v0) {
      var _v1;
      return _v1 = {
        connection: _v0.connections.streamHealth,
        gctlConfig: (0, _v23.queryManagerGctlConfig)(this),
        fields: []
      }, (0, _v24.withConnectionSupport)(_v25.ERequestMethod.GET, _v1, ({
        liveEventId: _v0
      }) => ({
        path: `/live_events/${_v0}/stream_health`
      }));
    }
    async onFirebaseLoaded(_v0) {
      this.firebase = _v0.data, this.setContext({
        isFirebaseReady: !0
      }), await Promise.all([_v18(this), _v15(this)]);
    }
    onLiveInteractionUserRequested() {
      return this.context.interactionCredentials?.user || null;
    }
    onComposerApplicationRequested() {
      return this.composerApp;
    }
    onFirebaseDependenciesRequested() {
      return this.firebase;
    }
    onFirebaseInteractionCredentialsRequested() {
      return this.context.interactionCredentials;
    }
    onComposerFirebaseConnectionStateReady() {
      return this.context.composerConnection?.isConnected;
    }
    onInteractionSessionLogout() {
      return _v22(this);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v14.EDependencySignal.FIREBASE_DEPENDENCIES_LOADED)], _v29.prototype, "onFirebaseLoaded", null), (0, _v1._)([(0, _v2.OnQuery)(_v28.ELiveInteractionQuery.LIVE_INTERACTION_USER)], _v29.prototype, "onLiveInteractionUserRequested", null), (0, _v1._)([(0, _v2.OnQuery)(_v28.ELiveConnectionQuery.FIREBASE_COMPOSER_APPLICATION)], _v29.prototype, "onComposerApplicationRequested", null), (0, _v1._)([(0, _v2.OnQuery)(_v28.ELiveConnectionQuery.FIREBASE_DEPENDENCIES)], _v29.prototype, "onFirebaseDependenciesRequested", null), (0, _v1._)([(0, _v2.OnQuery)(_v28.ELiveConnectionQuery.FIREBASE_INTERACTION_CREDENTIALS)], _v29.prototype, "onFirebaseInteractionCredentialsRequested", null), (0, _v1._)([(0, _v2.OnQuery)(_v28.ELiveConnectionQuery.COMPOSER_FIREBASE_CONNECTION_STATE_READY)], _v29.prototype, "onComposerFirebaseConnectionStateReady", null), (0, _v1._)([(0, _v2.OnSignal)(_v14.ELiveSignal.INTERACTION_SESSION_LOGOUT)], _v29.prototype, "onInteractionSessionLogout", null), _v0.s(["AbstractFirebaseManager", 0, _v29], 0);
}