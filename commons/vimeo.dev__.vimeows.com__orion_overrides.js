{
  "use strict";

  let _v1, _v2, _v3, _v4;
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  function _v10() {
    return "vimeo.dev" === window.location.hostname || window.location.hostname.endsWith(".vimeows.com");
  }
  let _v11 = "orion_overrides";
  function _v12() {
    if (!_v10()) return {};
    try {
      let _v0 = window.sessionStorage.getItem(_v11);
      return _v0 ? JSON.parse(_v0) : {};
    } catch {
      return {};
    }
  }
  var _v13 = _v0.i(0);
  async function _v14(_v0) {
    return new Promise(_v0 => {
      _v0.then(_v0 => _v0({
        data: _v0,
        err: void 0
      })).catch(_v0 => _v0({
        err: _v0,
        data: void 0
      }));
    });
  }
  class _v15 extends Error {
    constructor(_v0) {
      super(_v0), this.name = "Error4xx";
    }
  }
  async function _v16(_v0) {
    if (_v0.status >= 400 && _v0.status < 500) throw new _v15(`Received invalid response! Code: ${_v0.status}, Message: ${_v0.statusText}, Source: proxy`);
    let _v1 = null;
    try {
      _v1 = await _v0.json();
    } catch {
      throw Error(`Received invalid response! Code: ${_v0.status}, Message: ${_v0.statusText}, Extra: Invalid JSON content, Source: proxy`);
    }
    if (200 !== _v0.status) {
      let _v0 = (() => {
        if ("object" != typeof _v1 || !_v1) return {
          code: "",
          message: "Received unexpected json",
          extra: JSON.stringify(_v1)
        };
        let {
          error_code: _v0,
          code: _v1,
          error_message: _v2,
          message: _v3,
          extra: _v4
        } = _v1;
        return {
          code: _v0 ?? _v1 ?? "",
          message: _v2 ?? _v3 ?? "",
          extra: JSON.stringify(_v4 ?? {})
        };
      })();
      throw Error(`Received invalid response! Code: ${_v0.code}, Message: ${_v0.message}, Extra: ${_v0.extra}, Source: orion`);
    }
    return _v1;
  }
  function _v17(_v0) {
    async function _v1(_v0) {
      return _v16(await _v0.fetcher(_v0.url, {
        method: _v0.method,
        ...(_v0.body && {
          body: JSON.stringify((0, _v13.default)(_v0.body))
        }),
        headers: {
          ...(_v0.body && {
            "Content-Type": "application/json"
          }),
          "bsp-id": _v0.appId,
          ...(_v0.goesThroughOrionProxy ? {
            "X-Set-Orion": "true"
          } : {})
        }
      }));
    }
    let _v2 = _v0.goesThroughOrionProxy ? `${_v0.baseUrl}/orion` : _v0.baseUrl;
    return {
      async requestSettingsAndSegmentations(_v0) {
        let _v1 = {
          ..._v0,
          bspId: _v0.appId
        };
        return await _v1({
          url: `${_v2}/v3/identity/settings`,
          body: _v1,
          method: "POST"
        });
      },
      async getAllExperiments(_v0) {
        let _v1 = {
          ..._v0,
          returnIncompatible: !0
        };
        return await _v1({
          url: `${_v2}/v3/secret/experiments`,
          body: _v1,
          method: "POST"
        });
      },
      async forceExperimentSegmentation(_v0, _v1, _v2) {
        let _v3 = null != _v1 ? `&segment_index=${_v1}` : "",
          _v4 = `${_v2}/v3/secret/forced-segmentation?segmentation_id_name=${_v2.idName}&segmentation_id=${_v2.idValue}&experiment_name=${_v0}${_v3}`;
        await _v1({
          url: _v4,
          body: {},
          method: null != _v1 ? "PUT" : "DELETE"
        });
      },
      async forceExperimentSegmentations(_v0) {
        await _v1({
          url: `${_v2}/v3/secret/forced-segmentations`,
          method: "PUT",
          body: {
            segmentations_to_force: _v0
          }
        });
      },
      async setSegmentationState(_v0, _v1) {
        await _v1({
          url: `${_v2}/v3/secret/segmentation-state`,
          method: "PUT",
          body: {
            excludeFromSegmentation: _v0,
            segmentationIdName: _v1
          }
        });
      }
    };
  }
  var _v18 = _v0.i(0);
  async function _v19(_v0) {
    let _v1 = new _v18.Mutex(),
      _v2 = _v0 => ({
        isDefaultIdentity: _v0?.isDefaultIdentity ?? !0,
        settings: {
          ..._v0.defaultSettings,
          ...(_v0?.settings ?? {})
        },
        segmentations: {
          ..._v0.defaultSegmentations,
          ...(_v0?.segmentations ?? {})
        },
        settingsHash: _v0?.settingsHash ?? ""
      }),
      _v3 = async _v0 => {
        let _v1 = {};
        for (let _v0 in _v0) {
          let _v0 = _v0[_v0];
          if (void 0 !== _v0) {
            let _v0 = await _v0();
            void 0 !== _v0 && (_v1[_v0] = _v0);
          }
        }
        return _v1;
      },
      _v4 = async (_v0, _v1) => {
        _v0.logger.debug(`Requesting latest settings from remote at time: ${new Date().getTime()}`);
        let _v2 = await _v14(_v0.apiManager.requestSettingsAndSegmentations(_v1));
        if (_v2.err) return _v0.logger.debug(_v2.err.message), _v2(null);
        if (null == _v2.data) return _v2(null);
        try {
          let _v0 = _v2.data,
            _v1 = {
              isDefaultIdentity: !1,
              settings: _v0.settings,
              segmentations: _v0.segmentations,
              settingsHash: _v0.settings_hash
            },
            _v2 = _v2(_v1);
          return await _v0.persistenceManager.saveIdentity(_v2, _v0), _v2;
        } catch (_v0) {
          return _v0.logger.error("Failed to store remote identity", _v0), _v2(null);
        }
      },
      _v5 = async _v0 => {
        let _v1 = await _v0.persistenceManager.loadIdentity(_v0);
        if (!_v1) return null;
        let {
          identity: _v2,
          updatedAt: _v3
        } = _v1;
        return _v3 + _v0.identityCacheTtlInMs < new Date().getTime() ? null : _v2;
      },
      _v6 = async (_v0 = !1) => {
        if (_v0.shouldReturnDefaultsImmediately) return {
          isDefaultIdentity: !0,
          settings: _v0.defaultSettings,
          segmentations: _v0.defaultSegmentations,
          settingsHash: ""
        };
        let [_v1, _v2] = await Promise.all([_v3(_v0.deviceAttributeGetters), _v3(_v0.appSpecificAttributeGetters)]),
          _v3 = {
            ..._v1,
            ..._v2
          },
          _v4 = await _v0.userIdGenerator(_v3);
        try {
          if (!_v0) {
            let _v0 = await _v5(_v4);
            if (_v0) return _v2(_v0);
          }
          return await _v4(_v4, _v3);
        } catch (_v0) {
          return _v0.logger.error("Failed to fetch identity", _v0), _v2(null);
        }
      },
      _v7 = async (_v0 = !1) => await _v1.run(async () => await _v6(_v0));
    return {
      isSecretMenuEligible: async () => {
        let _v0 = await _v7();
        return !!_v0?.settings?.is_spooner_device;
      },
      getAllExperiments: async () => {
        let [_v0, _v1] = await Promise.all([_v3(_v0.deviceAttributeGetters), _v3(_v0.appSpecificAttributeGetters)]);
        return await _v0.apiManager.getAllExperiments({
          ..._v0,
          ..._v1
        });
      },
      setExperimentSegmentation: (_v0, _v1, _v2) => _v0.apiManager.forceExperimentSegmentation(_v0, _v1, _v2),
      setExperimentSegmentations: _v0 => _v0.apiManager.forceExperimentSegmentations(_v0),
      getDeviceAttributes: async () => await _v3(_v0.deviceAttributeGetters),
      getUserAttributes: async () => await _v3(_v0.appSpecificAttributeGetters),
      excludeFromSegmentation: (_v0, _v1) => _v0.apiManager.setSegmentationState(_v0, _v1),
      getIdentity: () => _v7(!1),
      refreshIdentity: () => _v7(!0)
    };
  }
  async function _v20(_v0, _v1 = {}) {
    let _v2 = _v1.createAPIManager || _v17,
      _v3 = _v1.createEntityManager || _v19,
      _v4 = _v2({
        fetcher: _v0.fetcher,
        appId: _v0.appId,
        baseUrl: _v0.baseUrl,
        goesThroughOrionProxy: _v0.goesThroughOrionProxy ?? !1
      }),
      _v5 = await _v3({
        apiManager: _v4,
        persistenceManager: _v0.persistenceManager,
        logger: _v0.logger,
        defaultSettings: _v0.defaultSettings,
        defaultSegmentations: _v0.defaultSegmentations,
        deviceAttributeGetters: _v0.deviceAttributeGetters,
        appSpecificAttributeGetters: _v0.appSpecificAttributeGetters,
        userIdGenerator: _v0.userIdGenerator,
        shouldReturnDefaultsImmediately: _v0.shouldReturnDefaultsImmediately,
        identityCacheTtlInMs: _v0.identityCacheTtlInMs
      });
    return {
      identity: {
        get: _v5.getIdentity,
        refresh: _v5.refreshIdentity
      },
      secret: {
        isAvailable: _v5.isSecretMenuEligible,
        getAllExperiments: _v5.getAllExperiments,
        setExperimentSegmentation: _v5.setExperimentSegmentation,
        setExperimentSegmentations: _v5.setExperimentSegmentations,
        getDeviceAttributes: _v5.getDeviceAttributes,
        getUserAttributes: _v5.getUserAttributes,
        excludeFromSegmentation: _v5.excludeFromSegmentation
      }
    };
  }
  let _v21 = (_v0, _v1) => _v1.some(_v0 => _v0 instanceof _v0),
    _v22 = new WeakMap(),
    _v23 = new WeakMap(),
    _v24 = new WeakMap(),
    _v25 = {
      get(_v0, _v1, _v2) {
        if (_v0 instanceof IDBTransaction) {
          if ("done" === _v1) return _v22.get(_v0);
          if ("store" === _v1) return _v2.objectStoreNames[1] ? void 0 : _v2.objectStore(_v2.objectStoreNames[0]);
        }
        return _v26(_v0[_v1]);
      },
      set: (_v0, _v1, _v2) => (_v0[_v1] = _v2, !0),
      has: (_v0, _v1) => _v0 instanceof IDBTransaction && ("done" === _v1 || "store" === _v1) || _v1 in _v0
    };
  function _v26(_v0) {
    if (_v0 instanceof IDBRequest) {
      let _v0;
      return _v0 = new Promise((_v0, _v1) => {
        let _v2 = () => {
            _v0.removeEventListener("success", _v3), _v0.removeEventListener("error", _v4);
          },
          _v3 = () => {
            _v0(_v26(_v0.result)), _v2();
          },
          _v4 = () => {
            _v1(_v0.error), _v2();
          };
        _v0.addEventListener("success", _v3), _v0.addEventListener("error", _v4);
      }), _v24.set(_v0, _v0), _v0;
    }
    if (_v23.has(_v0)) return _v23.get(_v0);
    let _v1 = function (_v0) {
      if ("function" == typeof _v0) return (_v2 || (_v2 = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(_v0) ? function (..._v0) {
        return _v0.apply(_v27(this), _v0), _v26(this.request);
      } : function (..._v0) {
        return _v26(_v0.apply(_v27(this), _v0));
      };
      return (_v0 instanceof IDBTransaction && function (_v0) {
        if (_v22.has(_v0)) return;
        let _v1 = new Promise((_v0, _v1) => {
          let _v2 = () => {
              _v0.removeEventListener("complete", _v3), _v0.removeEventListener("error", _v4), _v0.removeEventListener("abort", _v4);
            },
            _v3 = () => {
              _v0(), _v2();
            },
            _v4 = () => {
              _v1(_v0.error || new DOMException("AbortError", "AbortError")), _v2();
            };
          _v0.addEventListener("complete", _v3), _v0.addEventListener("error", _v4), _v0.addEventListener("abort", _v4);
        });
        _v22.set(_v0, _v1);
      }(_v0), _v21(_v0, _v1 || (_v1 = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]))) ? new Proxy(_v0, _v25) : _v0;
    }(_v0);
    return _v1 !== _v0 && (_v23.set(_v0, _v1), _v24.set(_v1, _v0)), _v1;
  }
  let _v27 = _v0 => _v24.get(_v0),
    _v28 = ["get", "getKey", "getAll", "getAllKeys", "count"],
    _v29 = ["put", "add", "delete", "clear"],
    _v30 = new Map();
  function _v31(_v0, _v1) {
    if (!(_v0 instanceof IDBDatabase && !(_v1 in _v0) && "string" == typeof _v1)) return;
    if (_v30.get(_v1)) return _v30.get(_v1);
    let _v2 = _v1.replace(/FromIndex$/, ""),
      _v3 = _v1 !== _v2,
      _v4 = _v29.includes(_v2);
    if (!(_v2 in (_v3 ? IDBIndex : IDBObjectStore).prototype) || !(_v4 || _v28.includes(_v2))) return;
    let _v5 = async function (_v0, ..._v1) {
      let _v2 = this.transaction(_v0, _v4 ? "readwrite" : "readonly"),
        _v3 = _v2.store;
      return _v3 && (_v3 = _v3.index(_v1.shift())), (await Promise.all([_v3[_v2](..._v1), _v4 && _v2.done]))[0];
    };
    return _v30.set(_v1, _v5), _v5;
  }
  _v25 = {
    ...(_v3 = _v25),
    get: (_v0, _v1, _v2) => _v31(_v0, _v1) || _v3.get(_v0, _v1, _v2),
    has: (_v0, _v1) => !!_v31(_v0, _v1) || _v3.has(_v0, _v1)
  };
  let _v32 = ["continue", "continuePrimaryKey", "advance"],
    _v33 = {},
    _v34 = new WeakMap(),
    _v35 = new WeakMap(),
    _v36 = {
      get(_v0, _v1) {
        if (!_v32.includes(_v1)) return _v0[_v1];
        let _v2 = _v33[_v1];
        return _v2 || (_v2 = _v33[_v1] = function (..._v0) {
          _v34.set(this, _v35.get(this)[_v1](..._v0));
        }), _v2;
      }
    };
  async function* _v37(..._v0) {
    let _v1 = this;
    if (_v1 instanceof IDBCursor || (_v1 = await _v1.openCursor(..._v0)), !_v1) return;
    let _v2 = new Proxy(_v1, _v36);
    for (_v35.set(_v2, _v1), _v24.set(_v2, _v27(_v1)); _v1;) yield _v2, _v1 = await (_v34.get(_v2) || _v1.continue()), _v34.delete(_v2);
  }
  function _v38(_v0, _v1) {
    return _v1 === Symbol.asyncIterator && _v21(_v0, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === _v1 && _v21(_v0, [IDBIndex, IDBObjectStore]);
  }
  _v25 = {
    ...(_v4 = _v25),
    get: (_v0, _v1, _v2) => _v38(_v0, _v1) ? _v37 : _v4.get(_v0, _v1, _v2),
    has: (_v0, _v1) => _v38(_v0, _v1) || _v4.has(_v0, _v1)
  };
  let _v39 = "identity";
  async function _v40() {
    let _v0 = await function (_v0, {
      blocked: _v1,
      upgrade: _v2,
      blocking: _v3,
      terminated: _v4
    } = {}) {
      let _v5 = indexedDB.open(_v0, 1),
        _v6 = _v26(_v5);
      return _v2 && _v5.addEventListener("upgradeneeded", _v0 => {
        _v2(_v26(_v5.result), _v0.oldVersion, _v0.newVersion, _v26(_v5.transaction), _v0);
      }), _v1 && _v5.addEventListener("blocked", _v0 => _v1(_v0.oldVersion, _v0.newVersion, _v0)), _v6.then(_v0 => {
        _v4 && _v0.addEventListener("close", () => _v4()), _v3 && _v0.addEventListener("versionchange", _v0 => _v3(_v0.oldVersion, _v0.newVersion, _v0));
      }).catch(() => {}), _v6;
    }("orionV3", {
      upgrade(_v0) {
        _v0.createObjectStore(_v39, {
          keyPath: "userId"
        });
      }
    });
    return {
      clearEntities: async () => {
        await _v0.clear(_v39);
      },
      loadIdentity: async _v0 => {
        try {
          let _v0 = await _v0.get(_v39, _v0);
          if (!_v0) return null;
          let {
            identity: _v1,
            updatedAt: _v2,
            userId: _v3
          } = _v0;
          if (!_v1 || !_v2 || !_v3) return null;
          return {
            identity: JSON.parse(_v1),
            updatedAt: Number(_v2),
            userId: _v3
          };
        } catch {
          return null;
        }
      },
      saveIdentity: async (_v0, _v1) => {
        await _v0.put(_v39, {
          identity: JSON.stringify(_v0),
          updatedAt: Date.now().toString(),
          userId: _v1
        });
      }
    };
  }
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = () => Promise.resolve(_v42.isMobile ? "mobile" : _v42.isTablet ? "tablet" : _v42.isDesktop ? "desktop" : "unknown");
  var _v44 = _v0.i(0);
  let _v45 = () => async () => _v46(),
    _v46 = () => {
      let _v0;
      return (_v0 = "LOCAL_STORAGE_ID_PICOX_ID", () => {
        let _v0 = window.localStorage.getItem(_v0);
        if (null == _v0) {
          let _v0 = (0, _v44.v4)();
          return window.localStorage.setItem(_v0, _v0), _v0;
        }
        return _v0;
      })();
    };
  _v0.s(["picoXLocalStorageId", 0, _v45, "readPicoXLocalStorageId", 0, _v46], 0);
  let _v47 = {
      trace(..._v0) {
        console.trace("[Orion]", ..._v0);
      },
      info(..._v0) {
        console.info("[Orion]", ..._v0);
      },
      debug(..._v0) {
        console.debug("[Orion]", ..._v0);
      },
      warn(..._v0) {
        console.warn("[Orion]", ..._v0);
      },
      error(..._v0) {
        console.error("[Orion]", ..._v0);
      },
      fatal(..._v0) {
        console.error("[Orion]", ..._v0);
      }
    },
    _v48 = {
      trace() {},
      info() {},
      debug() {},
      warn() {},
      error() {},
      fatal() {}
    },
    _v49 = {
      production: "https://vimeo.com/flarepoint",
      staging: "https://vimeo.com/flarepoint"
    };
  _v0.s(["OrionProvider", 0, ({
    children: _v0,
    isLoggingEnabled: _v1 = !1,
    surface: _v2 = "main"
  }) => {
    let _v3,
      _v4,
      _v5 = _v1 ? _v47 : _v48,
      _v6 = (0, _v8.useViewer)(),
      _v7 = !_v6,
      _v8 = null,
      _v9 = null,
      _v10 = null,
      _v11 = null,
      _v12 = null;
    _v7 || (_v3 = _v6?.user?.id?.toString() ?? null, _v4 = _v6.vuid, _v9 = (_v8 = _v6.teamUser?.ownerId?.toString() ?? null) ? `T_${_v8}` : _v3 ? `U_${_v3}` : null, _v10 = _v6.teamUser?.accountType?.toString() ?? _v6.user?.account?.toString() ?? null, _v11 = _v6.user?.productId?.toString() ?? null, _v12 = _v6.user?.currency?.toUpperCase() ?? null);
    let _v13 = (0, _v7.useRef)(_v3),
      _v14 = (0, _v7.useRef)(_v4),
      _v15 = (0, _v7.useRef)(_v8),
      _v16 = (0, _v7.useRef)(_v9),
      _v17 = (0, _v7.useRef)(_v10),
      _v18 = (0, _v7.useRef)(_v11),
      _v19 = (0, _v7.useRef)(_v12),
      _v20 = (0, _v7.useRef)(_v6);
    _v13.current = _v3, _v14.current = _v4, _v15.current = _v8, _v16.current = _v9, _v17.current = _v10, _v18.current = _v11, _v19.current = _v12, _v20.current = _v6;
    let [_v21, _v22] = (0, _v7.useState)(void 0),
      _v23 = (0, _v7.useRef)(!1),
      [_v24, _v25] = (0, _v7.useState)(0),
      [_v26, _v27] = (0, _v7.useState)({
        settings: _v9.defaultSettings,
        segmentations: {},
        settingsHash: "",
        isDefaultIdentity: !0
      }),
      [_v28, _v29] = (0, _v7.useState)(!0),
      _v30 = function () {
        let [_v0, _v1] = (0, _v7.useState)(_v12);
        return (0, _v7.useEffect)(() => {
          if (!_v10()) return;
          let _v0 = _v0 => {
            let _v1 = _v0(_v12());
            try {
              window.sessionStorage.setItem(_v11, JSON.stringify(_v1));
            } catch {}
            _v1(_v1);
          };
          return window._orion = {
            setOverride: (_v0, _v1) => {
              _v0(_v0 => ({
                ..._v0,
                [_v0]: _v1
              }));
            },
            clearOverride: _v0 => {
              _v0(_v0 => {
                let _v1 = {
                  ..._v0
                };
                return delete _v1[_v0], _v1;
              });
            },
            clearAllOverrides: () => {
              _v0(() => ({}));
            },
            getOverrides: () => _v12()
          }, () => {
            delete window._orion;
          };
        }, []), _v0;
      }(),
      [_v31] = (0, _v7.useState)(_v41.createOrionStore),
      _v32 = (0, _v7.useRef)(!1);
    (0, _v7.useEffect)(() => {
      _v7 || _v23.current || (_v23.current = !0, (async () => {
        try {
          let _v0,
            _v1 = _v10() ? "staging" : "production";
          try {
            _v0 = await _v40();
          } catch (_v0) {
            let _v1;
            _v5.error("Failed to open IndexedDB, falling back to in-memory persistence", _v0), _v1 = new Map(), _v0 = {
              clearEntities: () => (_v1.clear(), Promise.resolve()),
              loadIdentity: _v0 => Promise.resolve(_v1.get(_v0) ?? null),
              saveIdentity: (_v0, _v1) => (_v1.set(_v1, {
                identity: _v0,
                updatedAt: Date.now(),
                userId: _v1
              }), Promise.resolve())
            };
          }
          let _v2 = await _v20({
            goesThroughOrionProxy: !0,
            appId: "vimeo_web",
            appSpecificAttributeGetters: {
              vimeoUserId: () => Promise.resolve(_v13.current),
              vuid: () => Promise.resolve(_v14.current),
              teamOwnerId: () => Promise.resolve(_v15.current),
              actorId: () => Promise.resolve(_v16.current),
              tier: () => Promise.resolve(_v17.current),
              vimeoProductId: () => Promise.resolve(_v18.current),
              currency: () => Promise.resolve(_v19.current),
              minutesElapsedSinceRegistration: () => Promise.resolve(function (_v0) {
                if (!_v0) return null;
                let _v1 = Date.parse(_v0);
                return Number.isNaN(_v1) ? null : Math.max(0, Math.floor((Date.now() - _v1) / 0));
              }(_v20.current?.user?.createdTime)),
              clientEnvironment: () => Promise.resolve(_v10() ? "staging" : "production"),
              surface: () => Promise.resolve(_v2)
            },
            persistenceManager: _v0,
            defaultSettings: _v9.defaultSettings,
            defaultSegmentations: {},
            deviceAttributeGetters: {
              isLoggedIn: () => Promise.resolve(!!_v13.current),
              localStorageId: _v45(),
              deviceType: _v43
            },
            logger: _v5,
            baseUrl: _v49[_v1],
            shouldReturnDefaultsImmediately: !("u" < typeof navigator) && /(?:google|bing|msn|facebook)bot[-imagevdo]{0,6}|bingpreview|gptbot|slack(?:bot)?(?:-imgproxy|-linkexpanding)?/i.test(navigator.userAgent),
            fetcher: (..._v0) => fetch(..._v0),
            userIdGenerator: _v0 => Promise.resolve(["localStorageId", "vimeoUserId", "vuid", "teamOwnerId"].filter(_v0 => void 0 !== _v0[_v0]).map(_v0 => _v0[_v0]).join("_")),
            identityCacheTtlInMs: 0
          });
          _v22(_v2);
        } catch (_v0) {
          _v5.error("Failed to initialize Orion client", _v0), _v23.current = !1, _v25(_v0 => _v0 + 1);
        }
      })());
    }, [_v7, _v24]), (0, _v7.useEffect)(() => {
      let _v0;
      if (!_v21 || void 0 === _v3) return;
      _v29(!0);
      let _v1 = async () => {
          try {
            let _v0 = !_v32.current && new URLSearchParams(window.location.search).has("orion_refresh");
            _v32.current = !0;
            let _v1 = _v0 ? await _v21.identity.refresh() : await _v21.identity.get();
            _v27({
              settings: _v1.settings,
              segmentations: _v1.segmentations,
              settingsHash: _v1.settingsHash,
              isDefaultIdentity: _v1.isDefaultIdentity
            }), _v29(!1), _v5.info("Orion identity ready");
          } catch (_v0) {
            _v5.error("Failed to fetch Orion identity", _v0);
          }
        },
        _v2 = new Promise(_v0 => _v0 = setTimeout(() => {
          _v29(_v0 => _v0 ? (_v5.error("Timeout: Orion identity was not received within the timeout."), !1) : _v0), _v0(0);
        }, 0));
      Promise.race([_v1(), _v2]).finally(() => clearTimeout(_v0));
    }, [_v21, _v3, _v8]);
    let _v33 = (0, _v7.useMemo)(() => 0 === Object.keys(_v30).length ? _v26 : {
      ..._v26,
      settings: {
        ..._v26.settings,
        ..._v30
      }
    }, [_v26, _v30]);
    (0, _v7.useEffect)(() => {
      _v31.setState({
        client: _v21,
        identity: _v33,
        isLoadingResponse: _v28
      });
    }, [_v31, _v21, _v33, _v28]);
    let _v34 = _v33.settings.orion_free_override;
    return (0, _v7.useEffect)(() => {
      !_v28 && _v34 && _v6.default.set("orion_free_override", "1", {
        sameSite: "none",
        secure: !0
      });
    }, [_v28, _v34]), (0, _v5.jsx)(_v41.OrionStoreContext.Provider, {
      value: _v31,
      children: _v0
    });
  }, "useOrion", 0, () => {
    let _v0 = (0, _v41.useOrionStore)();
    return (0, _v7.useSyncExternalStore)(_v0.subscribe, _v0.getState, _v0.getServerState);
  }], 0);
}