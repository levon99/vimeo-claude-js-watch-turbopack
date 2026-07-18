{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.setLogLevel = _v2.getPrecomputedInstance = _v2.offlinePrecomputedInit = _v2.precomputedInit = _v2.EppoPrecomputedJSClient = _v2.getConfigUrl = _v2.getInstance = _v2.init = _v2.offlineInit = _v2.buildStorageKeySuffix = _v2.EppoJSClient = _v2.NO_OP_EVENT_DISPATCHER = _v2.ChromeStorageEngine = _v2.EppoAssignmentLogger = void 0;
  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0);
  var _v11 = _v0.r(0);
  Object.defineProperty(_v2, "EppoAssignmentLogger", {
    enumerable: !0,
    get: function () {
      return _v11.EppoAssignmentLogger;
    }
  });
  var _v12 = _v0.r(0);
  Object.defineProperty(_v2, "ChromeStorageEngine", {
    enumerable: !0,
    get: function () {
      return _v12.ChromeStorageEngine;
    }
  });
  let _v13 = (0, _v7.configurationStorageFactory)({
      forceMemoryOnly: !0
    }),
    _v14 = (0, _v7.precomputedFlagsStorageFactory)(),
    _v15 = (0, _v7.precomputedBanditStoreFactory)();
  _v2.NO_OP_EVENT_DISPATCHER = {
    attachContext: () => {},
    dispatch: () => {}
  };
  class _v16 extends _v3.EppoClient {
    constructor() {
      super(...arguments), this.initialized = !1;
    }
    getStringAssignment(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getStringAssignment(_v0, _v1, _v2, _v3);
    }
    getStringAssignmentDetails(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getStringAssignmentDetails(_v0, _v1, _v2, _v3);
    }
    getBoolAssignment(_v0, _v1, _v2, _v3) {
      return this.getBooleanAssignment(_v0, _v1, _v2, _v3);
    }
    getBooleanAssignment(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getBooleanAssignment(_v0, _v1, _v2, _v3);
    }
    getBooleanAssignmentDetails(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getBooleanAssignmentDetails(_v0, _v1, _v2, _v3);
    }
    getIntegerAssignment(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getIntegerAssignment(_v0, _v1, _v2, _v3);
    }
    getIntegerAssignmentDetails(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getIntegerAssignmentDetails(_v0, _v1, _v2, _v3);
    }
    getNumericAssignment(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getNumericAssignment(_v0, _v1, _v2, _v3);
    }
    getNumericAssignmentDetails(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getNumericAssignmentDetails(_v0, _v1, _v2, _v3);
    }
    getJSONAssignment(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getJSONAssignment(_v0, _v1, _v2, _v3);
    }
    getJSONAssignmentDetails(_v0, _v1, _v2, _v3) {
      return this.ensureInitialized(), super.getJSONAssignmentDetails(_v0, _v1, _v2, _v3);
    }
    getBanditAction(_v0, _v1, _v2, _v3, _v4) {
      return this.ensureInitialized(), super.getBanditAction(_v0, _v1, _v2, _v3, _v4);
    }
    getBanditActionDetails(_v0, _v1, _v2, _v3, _v4) {
      return this.ensureInitialized(), super.getBanditActionDetails(_v0, _v1, _v2, _v3, _v4);
    }
    getExperimentContainerEntry(_v0, _v1, _v2) {
      return this.ensureInitialized(), super.getExperimentContainerEntry(_v0, _v1, _v2);
    }
    ensureInitialized() {
      this.initialized || _v3.applicationLogger.warn("Eppo SDK assignment requested before init() completed");
    }
    async init(_v0) {
      var _v1;
      let _v2;
      _v3.validation.validateNotBlank(_v0.apiKey, "API key required");
      let {
        apiKey: _v3,
        persistentStore: _v4,
        baseUrl: _v5,
        maxCacheAgeSeconds: _v6,
        updateOnFetch: _v7,
        requestTimeoutMs: _v8,
        numInitialRequestRetries: _v9,
        numPollRequestRetries: _v10,
        pollingIntervalMs: _v11,
        pollAfterSuccessfulInitialization: _v12 = !1,
        pollAfterFailedInitialization: _v13 = !1,
        skipInitialRequest: _v14 = !1,
        eventTracking: _v15,
        enableOverrides: _v16 = !1
      } = _v0;
      try {
        let _v0, _v1, _v2;
        this.stopPolling(), this.setAssignmentLogger(_v0.assignmentLogger), _v0.banditLogger && this.setBanditLogger(_v0.banditLogger);
        let _v3 = _v17(_v3),
          _v4 = (0, _v7.configurationStorageFactory)({
            maxAgeSeconds: _v6,
            servingStoreUpdateStrategy: _v7,
            persistentStore: _v4,
            hasChromeStorage: (0, _v7.hasChromeStorage)(),
            hasWindowLocalStorage: (0, _v7.hasWindowLocalStorage)()
          }, {
            chromeStorage: (0, _v7.chromeStorageIfAvailable)(),
            windowLocalStorage: (0, _v7.localStorageIfAvailable)(),
            storageKeySuffix: _v3
          });
        if (_v4.setFormat(_v3.FormatEnum.CLIENT), this.setFlagConfigurationStore(_v4), _v16) {
          let _v0 = (0, _v7.overrideStorageFactory)({
            hasWindowLocalStorage: (0, _v7.hasWindowLocalStorage)()
          }, {
            windowLocalStorage: (0, _v7.localStorageIfAvailable)(),
            storageKey: _v0.overridesStorageKey
          });
          this.setOverrideStore(_v0);
        } else this.unsetOverrideStore();
        let _v5 = (0, _v4.assignmentCacheFactory)({
          chromeStorage: (0, _v7.chromeStorageIfAvailable)(),
          storageKeySuffix: _v3
        });
        _v5 instanceof _v5.default && (await _v5.init()), this.useCustomAssignmentCache(_v5);
        let _v6 = {
          apiKey: _v3,
          sdkName: _v10.sdkName,
          sdkVersion: _v10.sdkVersion,
          baseUrl: _v5,
          requestTimeoutMs: _v8,
          numInitialRequestRetries: _v9,
          numPollRequestRetries: _v10,
          pollAfterSuccessfulInitialization: _v12,
          pollAfterFailedInitialization: _v13,
          pollingIntervalMs: _v11,
          throwOnFailedInitialization: !0,
          skipInitialPoll: _v14
        };
        this.setConfigurationRequestParameters(_v6), this.setEventDispatcher(function (_v0, _v1 = {}) {
          let {
            batchSize: _v2 = 0,
            deliveryIntervalMs: _v3 = 0,
            enabled: _v4 = !1,
            maxQueueSize: _v5 = 0,
            maxRetries: _v6 = 3,
            maxRetryDelayMs: _v7 = 0,
            retryIntervalMs: _v8 = 0
          } = _v1;
          if (!_v4) return _v2.NO_OP_EVENT_DISPATCHER;
          let _v9 = (0, _v7.hasWindowLocalStorage)() ? new _v9.default("events") : new _v3.BoundedEventQueue("events", [], _v5),
            _v10 = "u" > typeof window ? new _v8.default() : {
              isOffline: () => !1,
              onNetworkStatusChange: () => {}
            };
          return (0, _v3.newDefaultEventDispatcher)(_v9, _v10, _v0, _v2, {
            deliveryIntervalMs: _v3,
            retryIntervalMs: _v8,
            maxRetryDelayMs: _v7,
            maxRetries: _v6
          });
        }(_v3, _v15));
        let _v7 = _v4.init().then(async () => {
            if (!_v4.getKeys().length) return _v3.applicationLogger.warn("Eppo SDK cached configuration is empty"), _v1 = Error("Configuration store was empty"), _v6.ConfigLoaderStatus.DID_NOT_PRODUCE;
            let _v0 = await _v4.isExpired();
            return _v0 && !_v0.useExpiredCache ? (_v3.applicationLogger.warn("Eppo SDK set not to use expired cached configuration"), _v1 = Error("Configuration store was expired"), _v6.ConfigLoaderStatus.DID_NOT_PRODUCE) : (_v0 && _v0.useExpiredCache && _v3.applicationLogger.warn("Eppo SDK config.useExpiredCache is true; using expired cache"), _v6.ConfigLoaderStatus.COMPLETED);
          }).catch(_v0 => (_v3.applicationLogger.warn({
            err: _v0
          }, "Eppo SDK encountered an error initializing from the configuration store"), _v1 = _v0, _v6.ConfigLoaderStatus.FAILED)).then(_v0 => ({
            source: _v6.ConfigSource.CONFIG_STORE,
            result: _v0
          })),
          _v8 = this.fetchFlagConfigurations().then(() => _v4.isInitialized() ? _v6.ConfigLoaderStatus.COMPLETED : _v6.ConfigLoaderStatus.DID_NOT_PRODUCE).catch(_v0 => (_v3.applicationLogger.warn({
            err: _v0
          }, "Eppo SDK encountered an error initializing from fetching"), _v2 = _v0, _v6.ConfigLoaderStatus.FAILED)).then(_v0 => ({
            source: _v6.ConfigSource.FETCH,
            result: _v0
          })),
          _v9 = [_v7];
        _v0.skipInitialRequest || _v9.push(_v8);
        let {
          source: _v10,
          result: _v11
        } = await Promise.race(_v9);
        if (_v11 === _v6.ConfigLoaderStatus.COMPLETED) _v0 = _v10;else {
          let _v0 = _v10 === _v6.ConfigSource.FETCH ? _v7 : _v8;
          _v0 = await _v0.then(_v0 => {
            let {
              source: _v1,
              result: _v2
            } = _v0;
            return _v2 === _v6.ConfigLoaderStatus.COMPLETED ? _v1 : _v6.ConfigSource.NONE;
          });
        }
        _v0 === _v6.ConfigSource.NONE && (_v2 = _v2 || _v1 || Error("Eppo SDK: No configuration source produced a valid configuration")), _v3.applicationLogger.debug(`Initialization source: ${_v0}`);
      } catch (_v0) {
        _v2 = _v0 instanceof Error ? _v0 : Error(String(_v0));
      }
      if (_v2 && (_v3.applicationLogger.warn("Eppo SDK was unable to initialize with a configuration, assignment calls will return the default value and not be logged" + (_v0.pollAfterFailedInitialization ? " until an experiment configuration is successfully retrieved" : "")), null == (_v1 = _v0.throwOnFailedInitialization) || _v1)) throw _v2;
      return this.initialized = !0, this;
    }
    offlineInit(_v0) {
      var _v1, _v2, _v3;
      let _v4 = null != (_v1 = _v0.isObfuscated) && _v1,
        _v5 = null == (_v2 = _v0.throwOnFailedInitialization) || _v2,
        _v6 = null != (_v3 = _v0.enableOverrides) && _v3;
      try {
        let _v0 = (0, _v7.configurationStorageFactory)({
          forceMemoryOnly: !0
        });
        if (_v0.setFormat(_v4 ? _v3.FormatEnum.CLIENT : _v3.FormatEnum.SERVER), _v0.setEntries(_v0.flagsConfiguration).catch(_v0 => _v3.applicationLogger.warn({
          err: _v0
        }, "Error setting flags for memory-only configuration store")), this.setFlagConfigurationStore(_v0), _v0.configPublishedAt && _v0.setConfigPublishedAt(_v0.configPublishedAt), _v0.configFetchedAt && _v0.setConfigFetchedAt(_v0.configFetchedAt), _v6) {
          let _v0 = (0, _v7.overrideStorageFactory)({
            hasWindowLocalStorage: (0, _v7.hasWindowLocalStorage)()
          }, {
            windowLocalStorage: (0, _v7.localStorageIfAvailable)(),
            storageKey: _v0.overridesStorageKey
          });
          this.setOverrideStore(_v0);
        } else this.unsetOverrideStore();
        _v0.assignmentLogger && this.setAssignmentLogger(_v0.assignmentLogger), _v0.banditLogger && this.setBanditLogger(_v0.banditLogger);
        let _v1 = (0, _v4.assignmentCacheFactory)({
          storageKeySuffix: "offline",
          forceMemoryOnly: !0
        });
        this.useCustomAssignmentCache(_v1);
      } catch (_v0) {
        if (_v3.applicationLogger.warn({
          err: _v0
        }, "Eppo SDK encountered an error initializing, assignment calls will return the default value and not be logged"), _v5) throw _v0;
      }
      this.initialized = !0;
    }
  }
  function _v17(_v0) {
    return _v0.replace(/\W/g, "").substring(0, 8);
  }
  _v2.EppoJSClient = _v16, _v16.instance = new _v16({
    flagConfigurationStore: _v13
  }), _v16.initialized = !1, _v2.buildStorageKeySuffix = _v17, _v2.offlineInit = function (_v0) {
    let _v1 = _v19();
    return _v1.offlineInit(_v0), _v16.initialized = !0, _v1;
  };
  let _v18 = null;
  function _v19() {
    return _v16.instance;
  }
  _v2.init = async function (_v0) {
    _v3.validation.validateNotBlank(_v0.apiKey, "API key required");
    let _v1 = _v19();
    if (_v16.initialized) if (!_v0.forceReinitialize) return _v3.applicationLogger.warn("Eppo SDK is already initialized, skipping reinitialization since forceReinitialize is false."), _v1;else _v3.applicationLogger.info("Eppo SDK is already initialized, reinitializing since forceReinitialize is true.");
    null === _v18 ? _v18 = _v1.init(_v0) : _v3.applicationLogger.warn("Initialization is already in progress. init should be called only once at application startup.");
    let _v2 = await _v18;
    return _v18 = null, _v16.initialized = !0, _v2;
  }, _v2.getInstance = _v19, _v2.getConfigUrl = function (_v0, _v1) {
    let _v2 = {
      sdkName: _v10.sdkName,
      sdkVersion: _v10.sdkVersion,
      apiKey: _v0
    };
    return new _v3.ApiEndpoints({
      baseUrl: _v1,
      queryParams: _v2
    }).ufcEndpoint();
  };
  class _v20 extends _v3.EppoPrecomputedClient {
    getStringAssignment(_v0, _v1) {
      return _v20.getAssignmentInitializationCheck(), super.getStringAssignment(_v0, _v1);
    }
    getBooleanAssignment(_v0, _v1) {
      return _v20.getAssignmentInitializationCheck(), super.getBooleanAssignment(_v0, _v1);
    }
    getIntegerAssignment(_v0, _v1) {
      return _v20.getAssignmentInitializationCheck(), super.getIntegerAssignment(_v0, _v1);
    }
    getNumericAssignment(_v0, _v1) {
      return _v20.getAssignmentInitializationCheck(), super.getNumericAssignment(_v0, _v1);
    }
    getJSONAssignment(_v0, _v1) {
      return _v20.getAssignmentInitializationCheck(), super.getJSONAssignment(_v0, _v1);
    }
    getBanditAction(_v0, _v1) {
      return _v20.getAssignmentInitializationCheck(), super.getBanditAction(_v0, _v1);
    }
    static getAssignmentInitializationCheck() {
      _v20.initialized || _v3.applicationLogger.warn("Eppo SDK assignment requested before init() completed");
    }
  }
  _v2.EppoPrecomputedJSClient = _v20, _v20.instance = new _v20({
    precomputedFlagStore: _v14,
    subject: {
      subjectKey: "",
      subjectAttributes: {}
    }
  }), _v20.initialized = !1, _v2.precomputedInit = async function (_v0) {
    if (_v20.initialized) return _v20.instance;
    _v3.validation.validateNotBlank(_v0.apiKey, "API key required"), _v3.validation.validateNotBlank(_v0.precompute.subjectKey, "Subject key required");
    let {
        apiKey: _v1,
        precompute: {
          subjectKey: _v2,
          subjectAttributes: _v3 = {},
          banditActions: _v4
        },
        baseUrl: _v5,
        requestTimeoutMs: _v6,
        numInitialRequestRetries: _v7,
        numPollRequestRetries: _v8,
        pollingIntervalMs: _v9,
        pollAfterSuccessfulInitialization: _v10 = !1,
        pollAfterFailedInitialization: _v11 = !1,
        skipInitialRequest: _v12 = !1,
        enableOverrides: _v13 = !1,
        overridesStorageKey: _v14
      } = _v0,
      _v15 = _v17(_v1),
      _v16 = (0, _v4.assignmentCacheFactory)({
        chromeStorage: (0, _v7.chromeStorageIfAvailable)(),
        storageKeySuffix: _v15
      });
    _v16 instanceof _v5.default && (await _v16.init());
    let _v17 = {
      apiKey: _v1,
      sdkName: _v10.sdkName,
      sdkVersion: _v10.sdkVersion,
      baseUrl: _v5,
      requestTimeoutMs: _v6,
      numInitialRequestRetries: _v7,
      numPollRequestRetries: _v8,
      pollAfterSuccessfulInitialization: _v10,
      pollAfterFailedInitialization: _v11,
      pollingIntervalMs: _v9,
      throwOnFailedInitialization: !0,
      skipInitialPoll: _v12
    };
    if (_v20.instance = new _v20({
      precomputedFlagStore: _v14,
      requestParameters: _v17,
      subject: {
        subjectKey: _v2,
        subjectAttributes: _v3
      },
      precomputedBanditStore: _v15,
      banditActions: _v4
    }), _v13) {
      let _v0 = (0, _v7.overrideStorageFactory)({
        hasWindowLocalStorage: (0, _v7.hasWindowLocalStorage)()
      }, {
        windowLocalStorage: (0, _v7.localStorageIfAvailable)(),
        storageKey: _v14
      });
      _v20.instance.setOverrideStore(_v0);
    } else _v20.instance.unsetOverrideStore();
    return _v20.instance.setAssignmentLogger(_v0.assignmentLogger), _v0.banditLogger && _v20.instance.setBanditLogger(_v0.banditLogger), _v20.instance.useCustomAssignmentCache(_v16), await _v20.instance.fetchPrecomputedFlags(), _v20.initialized = !0, _v20.instance;
  }, _v2.offlinePrecomputedInit = function (_v0) {
    var _v1, _v2;
    let _v3,
      _v4 = null == (_v1 = _v0.throwOnFailedInitialization) || _v1,
      _v5 = null != (_v2 = _v0.enableOverrides) && _v2;
    try {
      if (!(_v3 = JSON.parse(_v0.precomputedConfiguration)).precomputed) throw Error();
    } catch (_v0) {
      let _v1 = "Invalid precomputed configuration wire";
      if (_v4) throw Error(_v1);
      return _v3.applicationLogger.error({
        err: _v0
      }, `[Eppo SDK] ${_v1}`), _v20.instance;
    }
    let {
        subjectKey: _v6,
        subjectAttributes: _v7,
        response: _v8
      } = _v3.precomputed,
      _v9 = JSON.parse(_v8);
    try {
      let _v0 = (0, _v7.precomputedFlagsStorageFactory)();
      _v0.setEntries(_v9.flags).catch(_v0 => _v3.applicationLogger.warn({
        err: _v0
      }, "Error setting precomputed assignments for memory-only store")), _v0.salt = _v9.salt;
      let _v1 = (0, _v7.precomputedBanditStoreFactory)();
      _v1.setEntries(_v9.bandits).catch(_v0 => _v3.applicationLogger.warn({
        err: _v0
      }, "Error setting precomputed bandits for memory-only store")), _v1.salt = _v9.salt, _v20.initialized && (_v20.instance.stopPolling(), _v20.initialized = !1, _v3.applicationLogger.warn("[Eppo SDK] Precomputed client is being re-initialized."));
      let _v2 = (0, _v4.assignmentCacheFactory)({
        storageKeySuffix: "offline",
        forceMemoryOnly: !0
      });
      if (_v20.instance = new _v20({
        precomputedFlagStore: _v0,
        precomputedBanditStore: _v1,
        subject: {
          subjectKey: _v6,
          subjectAttributes: null != _v7 ? _v7 : {}
        }
      }), _v5) {
        let _v0 = (0, _v7.overrideStorageFactory)({
          hasWindowLocalStorage: (0, _v7.hasWindowLocalStorage)()
        }, {
          windowLocalStorage: (0, _v7.localStorageIfAvailable)(),
          storageKey: _v0.overridesStorageKey
        });
        _v20.instance.setOverrideStore(_v0);
      } else _v20.instance.unsetOverrideStore();
      _v0.assignmentLogger && _v20.instance.setAssignmentLogger(_v0.assignmentLogger), _v0.banditLogger && _v20.instance.setBanditLogger(_v0.banditLogger), _v20.instance.useCustomAssignmentCache(_v2);
    } catch (_v0) {
      if (_v3.applicationLogger.warn({
        err: _v0
      }, "[Eppo SDK] Encountered an error initializing precomputed client, assignment calls will return the default value and not be logged"), _v4) throw _v0;
    }
    return _v20.initialized = !0, _v20.instance;
  }, _v2.getPrecomputedInstance = function () {
    return _v20.instance;
  }, _v2.setLogLevel = function (_v0) {
    _v3.applicationLogger.level = _v0;
  };
}