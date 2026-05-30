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
    _v10 = _v0.i(0);
  async function _v11(_v0) {
    let {
      streamHealthCredentials: _v1
    } = _v0.context;
    _v0.firebase && _v1 && !_v0.streamHealthApp && (await _v12(_v0, _v0.firebase, _v1));
  }
  async function _v12(_v0, _v1, _v2) {
    let {
        config: _v3,
        firestoreEventId: _v4,
        token: _v5
      } = _v2,
      _v6 = _v6.firebaseConfig.REFS.STREAM_HEALTH.APP_NAME(_v4);
    _v0.log.info("Setting up Stream Health firebase connections:", _v6);
    try {
      let [_v0, _v1] = await (0, _v7.createFirebaseApplication)(_v1, {
        config: _v3,
        name: _v6,
        token: _v5
      }, {
        onAuthStateChanged: _v0 => {
          _v0.setContext({
            streamHealthConnection: _v0.context.streamHealthConnection.asMerged({
              user: _v0,
              isConnected: !!_v0
            })
          });
        }
      });
      _v0.streamHealthApp = _v0, _v0.addUnSubscribers(_v1, "streamHealth"), _v0.emitSignal({
        type: _v10.ELiveSignal.STREAM_HEALTH_CONFIG_READY,
        data: {
          firebase: _v1,
          app: _v0,
          credentials: _v2
        }
      });
    } catch (_v0) {
      _v0.log.error("Failed to authorize Stream Health firebase:", _v0), (0, _v9.trackLiveError)(_v0, {
        method: "createStreamHealthConnection",
        category: _v8.ELiveErrorCategory.FIREBASE
      });
    }
    (0, _v9.trackLiveAction)("fb_stream_health_connection_created");
  }
  async function _v13(_v0, _v1) {
    try {
      let _v0 = _v1.data.metadata,
        _v1 = await _v0.loadStreamHealthCredentials(_v0);
      _v0.setContext({
        streamHealthCredentials: _v1
      }), _v0.log.info("Stream Health credentials ready:", _v0.context.streamHealthCredentials), await _v11(_v0);
    } catch (_v0) {
      _v0.log.error("Failed to load Stream Health FB credentials:", _v0), _v0.emitSignal({
        type: _v10.ELiveSignal.GLOBAL_ERROR,
        data: _v0
      }), (0, _v9.trackLiveError)(_v0, {
        method: "initializeStreamHealthConnection",
        category: _v8.ELiveErrorCategory.FIREBASE
      });
    }
  }
  class _v14 extends _v3.AbstractFirebaseManager {
    context = {
      isFirebaseReady: !1,
      isComposerReady: !1,
      isInteractionReady: !1,
      isDisposed: !1,
      isStreamHealthReady: !1,
      interactionCredentials: null,
      composerCredentials: null,
      streamHealthCredentials: null,
      interactionConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      }),
      composerConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      }),
      streamHealthConnection: (0, _v2.createNested)({
        isConnected: !1,
        user: null
      }),
      connectionStatuses: (0, _v2.createComputed)(({
        interactionConnection: _v0
      }) => ({
        isInteractionConnected: !!(_v0?.isConnected && _v0?.user !== null)
      }))
    };
    onLiveEventEnded() {
      return (0, _v4.dispose)(this);
    }
    async onComposerSessionReady(_v0) {
      this.log.info("Initializing firebase connection on session init"), await Promise.all([(0, _v5.initializeComposerInteractionToolsConnection)(this, _v0), _v13(this, _v0)]);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v10.ELiveSignal.LIVE_EVENT_ENDED), (0, _v2.OnSignal)(_v10.EPageSignal.PAGE_INACTIVE)], _v14.prototype, "onLiveEventEnded", null), (0, _v1._)([(0, _v2.OnSignal)(_v10.ELiveSignal.COMPOSER_SESSION_READY)], _v14.prototype, "onComposerSessionReady", null), _v0.s(["RtmpFirebaseManager", 0, _v14], 0);
}