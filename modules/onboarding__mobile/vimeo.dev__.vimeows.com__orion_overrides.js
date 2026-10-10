{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6() {
    return "vimeo.dev" === window.location.hostname || window.location.hostname.endsWith(".vimeows.com");
  }
  let _v7 = "orion_overrides";
  function _v8() {
    if (!_v6()) return {};
    try {
      let _v0 = window.sessionStorage.getItem(_v7);
      return _v0 ? JSON.parse(_v0) : {};
    } catch {
      return {};
    }
  }
  var _v9 = _v0.i(0);
  async function _v10(_v0) {
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
  class _v11 extends Error {
    constructor(_v0) {
      super(_v0), this.name = "Error4xx";
    }
  }
  async function _v12(_v0) {
    if (_v0.status >= 400 && _v0.status < 500) throw new _v11(`Received invalid response! Code: ${_v0.status}, Message: ${_v0.statusText}, Source: proxy`);
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
  function _v13(_v0) {
    async function _v1(_v0) {
      return _v12(await _v0.fetcher(_v0.url, {
        method: _v0.method,
        ...(_v0.body && {
          body: JSON.stringify((0, _v9.default)(_v0.body))
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
  var _v14 = _v0.i(0);
  async function _v15(_v0) {
    let _v1 = new _v14.Mutex(),
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
        let _v2 = await _v10(_v0.apiManager.requestSettingsAndSegmentations(_v1));
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
  async function _v16(_v0, _v1 = {}) {
    let _v2 = _v1.createAPIManager || _v13,
      _v3 = _v1.createEntityManager || _v15,
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
  var _v17 = _v0.i(0);
  let _v18 = "identity";
  async function _v19() {
    let _v0 = await (0, _v17.openDB)("orionV3", 1, {
      upgrade(_v0) {
        _v0.createObjectStore(_v18, {
          keyPath: "userId"
        });
      }
    });
    return {
      clearEntities: async () => {
        await _v0.clear(_v18);
      },
      loadIdentity: async _v0 => {
        try {
          let _v0 = await _v0.get(_v18, _v0);
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
        await _v0.put(_v18, {
          identity: JSON.stringify(_v0),
          updatedAt: Date.now().toString(),
          userId: _v1
        });
      }
    };
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  let _v22 = () => Promise.resolve(_v21.isMobile ? "mobile" : _v21.isTablet ? "tablet" : _v21.isDesktop ? "desktop" : "unknown");
  var _v23 = _v0.i(0);
  let _v24 = () => async () => _v25(),
    _v25 = () => {
      let _v0;
      return (_v0 = "LOCAL_STORAGE_ID_PICOX_ID", () => {
        let _v0 = window.localStorage.getItem(_v0);
        if (null == _v0) {
          let _v0 = (0, _v23.v4)();
          return window.localStorage.setItem(_v0, _v0), _v0;
        }
        return _v0;
      })();
    };
  _v0.s(["picoXLocalStorageId", 0, _v24, "readPicoXLocalStorageId", 0, _v25], 0);
  let _v26 = {
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
    _v27 = {
      trace() {},
      info() {},
      debug() {},
      warn() {},
      error() {},
      fatal() {}
    },
    _v28 = {
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
      _v5 = _v1 ? _v26 : _v27,
      _v6 = (0, _v4.useViewer)(),
      _v7 = !_v6,
      _v8 = null,
      _v9 = null,
      _v10 = null,
      _v11 = null,
      _v12 = null;
    _v7 || (_v3 = _v6?.user?.id?.toString() ?? null, _v4 = _v6.vuid, _v9 = (_v8 = _v6.teamUser?.ownerId?.toString() ?? null) ? `T_${_v8}` : _v3 ? `U_${_v3}` : null, _v10 = _v6.teamUser?.accountType?.toString() ?? _v6.user?.account?.toString() ?? null, _v11 = _v6.user?.productId?.toString() ?? null, _v12 = _v6.user?.currency?.toUpperCase() ?? null);
    let _v13 = (0, _v3.useRef)(_v3),
      _v14 = (0, _v3.useRef)(_v4),
      _v15 = (0, _v3.useRef)(_v8),
      _v16 = (0, _v3.useRef)(_v9),
      _v17 = (0, _v3.useRef)(_v10),
      _v18 = (0, _v3.useRef)(_v11),
      _v19 = (0, _v3.useRef)(_v12),
      _v20 = (0, _v3.useRef)(_v6);
    _v13.current = _v3, _v14.current = _v4, _v15.current = _v8, _v16.current = _v9, _v17.current = _v10, _v18.current = _v11, _v19.current = _v12, _v20.current = _v6;
    let [_v21, _v22] = (0, _v3.useState)(void 0),
      _v23 = (0, _v3.useRef)(!1),
      [_v24, _v25] = (0, _v3.useState)(0),
      [_v26, _v27] = (0, _v3.useState)({
        settings: _v5.defaultSettings,
        segmentations: {},
        settingsHash: "",
        isDefaultIdentity: !0
      }),
      [_v28, _v29] = (0, _v3.useState)(!0),
      _v30 = function () {
        let [_v0, _v1] = (0, _v3.useState)(_v8);
        return (0, _v3.useEffect)(() => {
          if (!_v6()) return;
          let _v0 = _v0 => {
            let _v1 = _v0(_v8());
            try {
              window.sessionStorage.setItem(_v7, JSON.stringify(_v1));
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
            getOverrides: () => _v8()
          }, () => {
            delete window._orion;
          };
        }, []), _v0;
      }(),
      [_v31] = (0, _v3.useState)(_v20.createOrionStore),
      _v32 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v7 || _v23.current || (_v23.current = !0, (async () => {
        try {
          let _v0,
            _v1 = _v6() ? "staging" : "production";
          try {
            _v0 = await _v19();
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
          let _v2 = await _v16({
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
              clientEnvironment: () => Promise.resolve(_v6() ? "staging" : "production"),
              surface: () => Promise.resolve(_v2)
            },
            persistenceManager: _v0,
            defaultSettings: _v5.defaultSettings,
            defaultSegmentations: {},
            deviceAttributeGetters: {
              isLoggedIn: () => Promise.resolve(!!_v13.current),
              localStorageId: _v24(),
              deviceType: _v22
            },
            logger: _v5,
            baseUrl: _v28[_v1],
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
    }, [_v7, _v24]), (0, _v3.useEffect)(() => {
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
    let _v33 = (0, _v3.useMemo)(() => 0 === Object.keys(_v30).length ? _v26 : {
      ..._v26,
      settings: {
        ..._v26.settings,
        ..._v30
      }
    }, [_v26, _v30]);
    (0, _v3.useEffect)(() => {
      _v31.setState({
        client: _v21,
        identity: _v33,
        isLoadingResponse: _v28
      });
    }, [_v31, _v21, _v33, _v28]);
    let _v34 = _v33.settings.orion_free_override;
    return (0, _v3.useEffect)(() => {
      !_v28 && _v34 && _v2.default.set("orion_free_override", "1", {
        sameSite: "none",
        secure: !0
      });
    }, [_v28, _v34]), (0, _v1.jsx)(_v20.OrionStoreContext.Provider, {
      value: _v31,
      children: _v0
    });
  }, "useOrion", 0, () => {
    let _v0 = (0, _v20.useOrionStore)();
    return (0, _v3.useSyncExternalStore)(_v0.subscribe, _v0.getState, _v0.getServerState);
  }], 0);
}