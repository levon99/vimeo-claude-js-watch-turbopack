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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {
      additionalContext: () => ({}),
      additionalIdentifiers: () => ({}),
      cookieDomain: "https://api.picox.bendingspoons.com",
      endpoint: "https://api.picox.bendingspoons.com/v1/events",
      dbName: "picox",
      eventsBatchSize: 100,
      eventProcessors: [],
      isDevelopment: !1,
      logger: {
        debug: () => {},
        error: () => {},
        info: () => {},
        trace: () => {},
        warn: () => {}
      },
      maxEventsStored: 0,
      maxExponentialBackoffInterval: 0,
      sdkVersion: "web@0.8.0",
      retryBaseInterval: 0,
      syncIntervalMilliseconds: 0,
      targetEventsNumberAfterClearingSpace: 0,
      webLockApiRunner: (0, _v12.webLockApiRunner)(),
      identifiersSuffix: "PICOX_ID"
    },
    _v15 = async _v0 => {
      let _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11,
        _v12 = {
          ..._v14,
          ..._v0
        },
        _v13 = "__picox_storage_probe__";
      try {
        window.localStorage.setItem(_v13, _v13), window.localStorage.removeItem(_v13), window.sessionStorage.setItem(_v13, _v13), window.sessionStorage.removeItem(_v13);
      } catch (_v0) {
        throw Error("PicoX cannot initialize: web storage is unavailable", {
          cause: _v0
        });
      }
      let _v14 = await (0, _v10.createPersistence)(_v12),
        _v15 = (0, _v9.createNetwork)(_v12),
        _v16 = (_v1 = !1, _v2 = 0, _v3 = null, _v4 = _v12.syncIntervalMilliseconds, _v5 = {
          delta: 0,
          last_event_timestamp: null
        }, _v6 = _v12.eventsBatchSize, _v7 = new _v13.Mutex(), _v8 = async () => {
          let _v0 = [];
          return _v7.run(async () => {
            _v2++;
            try {
              if (!(_v0 = await _v14.retrieveEvents(_v6)) || 0 === _v0.length) {
                _v2 = 0, _v4 = _v12.syncIntervalMilliseconds;
                return;
              }
              let _v0 = await _v15.sendEvents(_v0, _v5);
              return await _v9(_v0, _v0);
            } catch (_v0) {
              if (_v12.logger.error(`Event sync operation failed: ${_v0}`), (0, _v11.isPicoXClientError)(_v0) || (0, _v11.isPicoXSerializationError)(_v0) || (0, _v11.isPicoXPayloadTooLargeError)(_v0) && 1 === _v6) return await _v9(_v5, _v0);
              (0, _v11.isPicoXPayloadTooLargeError)(_v0) && (_v6 = Math.max(1, Math.floor(_v6 / 2))), _v4 = (({
                baseInterval: _v0,
                currentAttempt: _v1,
                maxInterval: _v2
              }) => Math.random() * Math.min(_v2, _v0 * Math.pow(2, Math.min(_v1 - 1, 64))))({
                baseInterval: _v12.retryBaseInterval,
                currentAttempt: _v2,
                maxInterval: _v12.maxExponentialBackoffInterval
              });
              return;
            } finally {
              _v10();
            }
          });
        }, _v9 = async (_v0, _v1) => {
          await _v14.removeEvents(_v1), _v2 = 0, _v5 = _v0, _v4 = _v12.syncIntervalMilliseconds, 0 === _v12.syncIntervalMilliseconds && _v1.length === _v6 && (_v4 = 1), _v6 < _v12.eventsBatchSize && (_v6 = Math.min(_v12.eventsBatchSize, _v6 + 1));
        }, _v10 = () => {
          _v1 && (_v3 = window.setTimeout(_v8, _v4));
        }, _v11 = async _v0 => {
          try {
            _v5 = await _v15.sendEvents([_v0], _v5, {
              keepalive: !0
            });
          } catch (_v0) {
            if ((0, _v11.isPicoXClientError)(_v0) || (0, _v11.isPicoXSerializationError)(_v0) || (0, _v11.isPicoXPayloadTooLargeError)(_v0)) return void _v12.logger.error(`Immediate send failed permanently: ${_v0}`);
            _v12.logger.error(`Immediate send failed, persisting for retry: ${_v0}`);
            try {
              await _v14.storeEvent(_v0);
            } catch (_v0) {
              _v12.logger.error(`Failed to persist event for retry: ${_v0}`);
            }
          }
        }, {
          configuration: _v12,
          sendImmediately: _v11,
          startScheduling: () => _v1 ? Promise.resolve() : (_v1 = !0, _v12.webLockApiRunner(_v12.LockId.picoXSendEvents, _v8)),
          stopScheduling: () => {
            _v1 = !1, _v3 && (window.clearTimeout(_v3), _v3 = null), _v4 = _v12.syncIntervalMilliseconds;
          }
        }),
        _v17 = (0, _v8.createIdentifiersProvider)(_v12.identifiersSuffix, _v12.cookieDomain),
        _v18 = (0, _v6.createContextProvider)(_v12),
        _v19 = async (_v0, _v1, _v2, _v3) => {
          let _v4 = new Date(),
            _v5 = _v17.currentIdentifiers(),
            _v6 = _v12.additionalIdentifiers(),
            _v7 = {
              ..._v5,
              ..._v6,
              ...(_v2 ?? {})
            },
            _v8 = _v18.currentContext(_v4),
            _v9 = _v12.additionalContext(),
            _v10 = {
              ..._v8,
              ..._v9
            },
            _v11 = {
              event_id: (0, _v5.v4)(),
              event_name: _v0,
              payload: _v1,
              identifiers: _v7,
              context: _v10,
              event_timestamp: _v4
            };
          for (let _v0 of _v12.eventProcessors) if (!(_v11 = _v0.processEvent(_v11))) return;
          _v3?.delivery === "immediate" ? await _v16.sendImmediately(_v11) : await _v14.storeEvent(_v11);
        },
        _v20 = (0, _v7.createCoreEvents)(_v19);
      return _v16.startScheduling(), _v20.start(), {
        track: _v19
      };
    };
  var _v16 = _v0.i(0);
  let _v17 = "utmParameters",
    _v18 = "utmParametersTracked";
  function _v19(_v0) {
    if (null === _v0 || "" === _v0) return {};
    try {
      let _v0 = JSON.parse(_v0);
      if (_v0 instanceof Object && !Array.isArray(_v0)) {
        let _v0 = {};
        for (let [_v0, _v1] of Object.entries(_v0)) "string" == typeof _v1 && (_v0[_v0] = _v1);
        return _v0;
      }
      return {};
    } catch {
      return {};
    }
  }
  function _v20(_v0, _v1) {
    try {
      return ("localStorage" === _v0 ? window.localStorage : window.sessionStorage).getItem(_v1);
    } catch {
      return null;
    }
  }
  function _v21(_v0, _v1, _v2) {
    try {
      ("localStorage" === _v0 ? window.localStorage : window.sessionStorage).setItem(_v1, _v2);
    } catch {}
  }
  let _v22 = async _v0 => {
    try {
      if ("true" === _v20("sessionStorage", _v18)) return;
      let {
        sessionParams: _v0,
        persistentParams: _v1
      } = function () {
        let _v0,
          _v1 = function () {
            if ("" === document.referrer) return !1;
            try {
              let _v0 = new URL(document.referrer);
              return _v0.hostname.endsWith(".vimeo.com") || "vimeo.com" === _v0.hostname || _v0.hostname.endsWith(".livestream.com") || "livestream.com" === _v0.hostname;
            } catch {
              return !1;
            }
          }(),
          _v2 = (_v0 = {}, new URLSearchParams(window.location.search).forEach((_v0, _v1) => {
            _v16.ATTRIBUTION_PARAM_NAMES.includes(_v1) && _v0 && (_v0[_v1] = _v0);
          }), _v0),
          _v3 = _v19(_v20("localStorage", _v17)),
          _v4 = _v19(_v20("sessionStorage", _v17)),
          _v5 = Object.keys(_v2).length > 0 ? {
            ..._v2
          } : {
            ..._v4
          };
        if (_v5.t_lp ??= window.location.href, void 0 === _v5.t_wsource) {
          let _v0 = function () {
            if ("" === document.referrer) return null;
            try {
              return new URL(document.referrer).hostname;
            } catch {
              return null;
            }
          }();
          null !== _v0 && (_v5.t_wsource = _v0);
        }
        let _v6 = void 0 !== _v5.t_s || void 0 !== _v3.t_s || void 0 !== _v5.utm_source || void 0 !== _v3.utm_source;
        if (void 0 === _v5.t_network && void 0 === _v3.t_network && !_v6 && "" !== document.referrer && /google|bing|yahoo|duckduckgo|ask|baidu|yandex/i.test(document.referrer) && (_v5.t_network = "seo"), !_v1) {
          _v21("sessionStorage", _v17, JSON.stringify(_v5));
          let _v0 = Object.keys(_v5).length > 0 ? _v5 : _v3;
          return _v21("localStorage", _v17, JSON.stringify(_v0)), {
            sessionParams: _v5,
            persistentParams: _v0
          };
        }
        return {
          sessionParams: _v4,
          persistentParams: _v3
        };
      }();
      await _v0.track("utm_params_tracked", {
        landing_page_info: _v0,
        persistent: _v1
      }), _v21("sessionStorage", _v18, "true");
    } catch (_v0) {
      console.error("Error tracking UTM params event", _v0);
    }
  };
  var _v23 = _v0.i(0);
  let _v24 = (0, _v2.createContext)({
    track: async () => {
      let _v0 = "usePico() was called outside of <PicoProvider>. Track calls will be dropped.";
      if (console.error(_v0), _v25()) throw Error(_v0);
    }
  });
  function _v25() {
    let _v0 = window.location?.hostname ?? "";
    return "vimeo.dev" === _v0 || _v0.endsWith(".vimeows.com");
  }
  _v0.s(["PicoProvider", 0, ({
    children: _v0,
    syncIntervalMilliseconds: _v1 = 0,
    isDevelopment: _v2,
    surface: _v3 = "main"
  }) => {
    let _v4 = (0, _v3.useViewer)(),
      {
        user_id: _v5,
        vuid: _v6,
        team_id: _v7,
        team_owner_id: _v8,
        actor_id: _v9,
        organization_id: _v10,
        account_type: _v11,
        is_team_user: _v12,
        is_free_trial: _v13,
        country: _v14,
        is_mobile: _v15
      } = (0, _v23.extractSafeViewerInfo)(_v4),
      {
        has_cold_storage_videos: _v16,
        has_cold_privacy_videos: _v17
      } = (0, _v4.useColdContentContext)(),
      _v18 = null != _v4,
      _v19 = (0, _v2.useMemo)(() => _v18 ? {
        user_id: _v5,
        vuid: _v6,
        team_id: _v7,
        team_owner_id: _v8,
        actor_id: _v9,
        organization_id: _v10
      } : null, [_v5, _v6, _v7, _v8, _v9, _v10, _v18]),
      _v20 = (0, _v2.useMemo)(() => _v18 ? {
        account_type: _v11,
        is_team_user: _v12,
        is_free_trial: _v13,
        country: _v14,
        is_mobile: _v15,
        has_cold_storage_videos: _v16,
        has_cold_privacy_videos: _v17,
        is_in_grace_period: null
      } : null, [_v11, _v12, _v13, _v14, _v15, _v16, _v17, _v18]),
      _v21 = (0, _v2.useRef)(_v19),
      _v22 = (0, _v2.useRef)(_v20);
    _v21.current = _v19, _v22.current = _v20;
    let {
      proxy: _v23,
      bind: _v24,
      fail: _v25
    } = (0, _v2.useMemo)(() => {
      let _v0;
      return _v0 = {
        type: "buffering",
        buffer: []
      }, {
        proxy: {
          track: async (_v0, _v1, _v2, _v3) => {
            switch (_v0.type) {
              case "bound":
                return _v0.pico.track(_v0, _v1, _v2, _v3);
              case "buffering":
                {
                  let _v0 = _v0.buffer;
                  return new Promise(_v0 => {
                    _v0.push({
                      eventName: _v0,
                      payload: _v1,
                      additionalIdentifiers: _v2,
                      delivery: _v3?.delivery,
                      resolve: _v0
                    });
                  });
                }
              case "error":
                console.warn(`Discarding event due to init error: ${_v0.error}`);
                return;
            }
          }
        },
        bind: _v0 => {
          let _v1 = "buffering" === _v0.type ? _v0.buffer : [];
          for (let _v0 of (_v0 = {
            type: "bound",
            pico: _v0
          }, _v1)) _v0.track(_v0.eventName, _v0.payload, _v0.additionalIdentifiers, void 0 === _v0.delivery ? void 0 : {
            delivery: _v0.delivery
          }).catch(_v0 => console.warn(`Failed to persist buffered PicoX event: ${_v0}`)).finally(_v0.resolve);
        },
        fail: _v0 => {
          let _v1 = "buffering" === _v0.type ? _v0.buffer : [];
          if (_v0 = {
            type: "error",
            error: _v0
          }, _v1.length > 0) for (let _v0 of (console.warn(`Discarding ${_v1.length} buffered PicoX events due to init error: ${_v0}`), _v1)) _v0.resolve();
        }
      };
    }, []);
    return (0, _v2.useEffect)(() => {
      if (!_v18) return;
      let _v0 = () => ({
          ...(_v21.current ?? {})
        }),
        _v1 = () => {
          let _v0 = null;
          return {
            page: _v0 = window.location.pathname,
            surface: _v3,
            ...(_v22.current ?? {}),
            is_in_grace_period: (0, _v23.deriveIsInGracePeriod)()
          };
        },
        _v2 = _v2 || _v25(),
        _v3 = `https://vimeo.com/flarepoint/${function () {
          let _v0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            _v1 = "";
          for (let _v0 = 0; _v0 < 8; _v0++) _v1 += _v0.charAt(Math.floor(Math.random() * _v0.length));
          return _v1;
        }()}`;
      (async () => {
        try {
          let _v0 = await _v15({
            additionalIdentifiers: _v0,
            additionalContext: _v1,
            cookieDomain: `.${window.location.hostname.split(".").slice(-2).join(".")}`,
            identificationToken: "c10f1887-7c05-4a9a-9a60-c307825f0f34",
            isDevelopment: _v2,
            syncIntervalMilliseconds: _v1,
            endpoint: _v3
          });
          _v24(_v0), _v22(_v0);
        } catch (_v0) {
          console.error("Error initializing PicoX client", _v0), _v25(_v0);
        }
      })();
    }, [_v18]), (0, _v1.jsx)(_v24.Provider, {
      value: _v23,
      children: _v0
    });
  }, "usePico", 0, () => (0, _v2.useContext)(_v24)], 0);
}