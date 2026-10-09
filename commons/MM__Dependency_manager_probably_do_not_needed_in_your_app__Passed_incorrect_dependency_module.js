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
  class _v13 extends _v2.ContextManager {
    firebase = null;
    agora = null;
    log = new _v3.Logger("💫MM");
    externalModules = [];
    constructor(_v0) {
      super(), _v0?.externalModules ? this.externalModules = _v0.externalModules : this.log.warn("Dependency manager probably do not needed in your app");
    }
    loadDependencies() {
      this.externalModules.forEach(_v0 => {
        switch (_v0) {
          case _v8.EExternalModule.FIREBASE:
            this.loadFirebase();
            break;
          case _v8.EExternalModule.AGORA:
            this.loadAgoraSdk();
            break;
          case _v8.EExternalModule.FIRESTORE:
            break;
          default:
            this.log.warn("Passed incorrect dependency module");
        }
      });
    }
    onProvisionStarted() {
      this.loadDependencies();
    }
    async loadFirebase() {
      try {
        this.log.info("Firebase chunks loading initialized");
        let _v0 = this.externalModules.includes(_v8.EExternalModule.FIRESTORE),
          [_v1, _v2, _v3, _v4, _v5] = await Promise.all([_v0.A(0), _v0.A(0), _v0.A(0), _v0.A(0), _v0 ? _v0.A(0) : null]);
        this.firebase = {
          firebase: _v1,
          auth: _v2,
          database: _v3,
          storage: _v4,
          firestore: _v5
        }, (0, _v12.trackLiveAction)("firebase_module_loaded"), this.log.info("Firebase chunks successfully loaded"), this.configureFirebaseSDK(this.firebase), this.IS_DISPOSED || this.emitSignal({
          type: _v7.EDependencySignal.FIREBASE_DEPENDENCIES_LOADED,
          data: this.firebase
        });
      } catch (_v0) {
        this.log.error("Failed to load firebase dependencies:", _v0), this.emitSignal({
          type: _v7.ELiveSignal.GLOBAL_ERROR,
          data: _v0
        }), (0, _v12.trackLiveError)(_v0, {
          method: "loadFirebase",
          category: _v11.ELiveErrorCategory.GENERIC
        });
      }
    }
    async loadAgoraSdk() {
      try {
        this.log.info("Agora chunks loading initialized");
        let [_v0, _v1] = await Promise.all([_v0.A(0).then(_v0 => (this.configureAgoraSDK(_v0.default), _v0.default)), _v0.A(0).then(_v0 => _v0.default)]);
        this.agora = _v0, (0, _v12.trackLiveAction)("agora_module_loaded"), this.log.info("Agora chunks successfully loaded"), this.IS_DISPOSED || this.emitSignal({
          type: _v7.EDependencySignal.AGORA_DEPENDENCIES_LOADED,
          data: {
            agoraSDK: _v0,
            VirtualBackgroundExtension: _v1
          }
        });
      } catch (_v0) {
        this.log.error("Failed to load agora dependencies:", _v0), this.emitSignal({
          type: _v7.ELiveSignal.GLOBAL_ERROR,
          data: _v0
        }), (0, _v12.trackLiveError)(_v0, {
          method: "loadAgoraSdk",
          category: _v11.ELiveErrorCategory.GENERIC
        });
      }
    }
    configureAgoraSDK(_v0) {
      this.log.info("Agora log level:", _v5.liveMediaConfig.AGORA.LOG_LEVEL), _v0.setLogLevel(_v5.liveMediaConfig.AGORA.LOG_LEVEL), (0, _v9.applyAgoraParameter)(_v0, "DISABLE_WEBAUDIO", _v5.liveMediaConfig.AGORA.DISABLE_WEB_AUDIO), _v5.liveMediaConfig.AGORA.LOG_UPLOAD && (this.log.info("Enabling agora log uploading"), _v0.enableLogUpload());
    }
    configureFirebaseSDK(_v0) {
      _v4.liveApplicationConfig.TRACKING.IS_FIREBASE_SDK_LOG_ENABLED && (this.log.info("Enabling firebase SDK logs"), _v0.database.enableLogging(_v0 => _v10.firebaseSDKLog.info("[SDK]", _v0)), _v0.firebase.setLogLevel("verbose"));
    }
    onAgoraDependenciesRequired() {
      return this.agora;
    }
    onFirebaseDependenciesRequired() {
      return this.firebase;
    }
  }
  (0, _v1._)([(0, _v2.OnQuery)(_v6.EDependencyQuery.AGORA_DEPENDENCIES)], _v13.prototype, "onAgoraDependenciesRequired", null), (0, _v1._)([(0, _v2.OnQuery)(_v6.EDependencyQuery.FIREBASE_DEPENDENCIES)], _v13.prototype, "onFirebaseDependenciesRequired", null), _v0.s(["ModuleManager", 0, _v13]);
}