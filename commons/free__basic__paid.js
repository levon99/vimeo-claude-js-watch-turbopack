{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    return _v0?.user ? ["free", "basic"].includes(_v0.teamUser?.accountType ?? _v0.user.account) ? "free" : "paid" : "logged_out";
  }
  function _v7(_v0, _v1) {
    let _v2 = _v0.pathname,
      _v3 = "true" === _v0.searchParams.get("isPrivate");
    return /^\/search/.test(_v2) ? "search" : /^\/staff_picks/.test(_v2) ? "staff_picks" : /^\/categories/.test(_v2) ? "category_page" : /^\/watch\/?$/.test(_v2) || /^\/watch\//.test(_v2) ? "watchpage" : /^\/analytics(\/|$)/.test(_v2) || /^\/manage\/organization\/analytics(\/|$)/.test(_v2) ? "analytics" : /^\/manage\/team(\/|$)/.test(_v2) ? "manage_team" : /^\/manage\/workspace(\/|$)/.test(_v2) ? "manage_workspace" : /^\/manage\/organization(\/|$)/.test(_v2) ? "manage_organization" : "/" === _v2 || /^\/home\/?$/.test(_v2) ? "homepage" : /^\/create\/edit(\/|$)/.test(_v2) ? "editor" : /^\/shared-with-me(\/|$)/.test(_v2) ? "shared_with_me" : /^\/my-feed(\/|$)/.test(_v2) ? "feed" : /^\/recently-deleted(\/|$)/.test(_v2) ? "recently_deleted" : /^\/channels\/staffpicks(\/|$)/.test(_v2) ? "staff_picks" : /^\/channels(\/|$)/.test(_v2) ? "channel_page" : /^\/apps(\/|$)/.test(_v2) ? "app_center" : /^\/library\/events(\/|$)/.test(_v2) ? "live_events" : /^\/library\/event_series(\/|$)/.test(_v2) ? "event_series" : /^\/library\/showcases(\/|$)/.test(_v2) ? "showcases" : /^\/user\/[^/]+\/folder\//.test(_v2) ? _v3 ? "my_library" : "team_library" : /^\/library(\/|$)/.test(_v2) ? _v1?.is_team_user == null ? "unknown" : _v1.is_team_user ? "team_library" : "my_library" : /^\/\d+(?:\/[0-9a-fA-F]+)?\/?$/.test(_v2) || /^\/video\/\d+(?:\/[0-9a-fA-F]+)?\/?$/.test(_v2) || /^\/share\/[^/]+\/?$/.test(_v2) ? "clip_page" : /^\/album\/\d+(?:\/[0-9a-fA-F]+)?\/?$/.test(_v2) || /^\/showcase\/[^/]+(?:\/[^/]+)?\/?$/.test(_v2) ? "showcases" : /^\/channels\/[^/]+(\/|$)/.test(_v2) ? "channel_page" : /^\/[^/]+\/?$/.test(_v2) ? "user_profile" : "unknown";
  }
  function _v8() {
    return !("u" < typeof document) && "1" === _v5.default.get("is_in_grace_period");
  }
  function _v9(_v0) {
    if (!_v0) return {
      user_id: null,
      vuid: null,
      team_id: null,
      team_owner_id: null,
      actor_id: null,
      organization_id: null,
      account_type: null,
      is_team_user: !1,
      is_free_trial: !1,
      country: null,
      is_mobile: !1
    };
    let _v1 = _v0.user?.id?.toString() ?? null,
      _v2 = _v0.vuid,
      _v3 = _v0.teamUser?.teamId?.toString() ?? null,
      _v4 = _v0.teamUser?.ownerId?.toString() ?? null,
      _v5 = _v4 ? `T_${_v4}` : _v1 ? `U_${_v1}` : null,
      _v6 = _v0.user?.organizationId ?? null,
      _v7 = _v0.teamUser?.accountType?.toString() ?? _v0.user?.account?.toString() ?? null,
      _v8 = _v0.user?.isTeamUser ?? !1,
      _v9 = _v0.user?.isFreeTrial ?? !1;
    return {
      user_id: _v1,
      vuid: _v2,
      team_id: _v3,
      team_owner_id: _v4,
      actor_id: _v5,
      organization_id: _v6,
      account_type: _v7,
      is_team_user: _v8,
      is_free_trial: _v9,
      country: _v0.location,
      is_mobile: _v0.isMobile
    };
  }
  _v0.s(["deriveCanonicalPage", 0, _v7, "deriveIsInGracePeriod", 0, _v8, "deriveLibraryReferrerPage", 0, function (_v0) {
    if ("sidebar" === _v0) return "sidebar";
    if ("u" < typeof document || !document.referrer) return "unknown";
    try {
      let _v0 = new URL(document.referrer);
      if ("vimeo.com" !== _v0.hostname && !_v0.hostname.endsWith(".vimeo.com")) return "external";
      let _v1 = _v0.pathname;
      if ("/" === _v1 || "/home" === _v1 || "/home/" === _v1) return "homepage";
      return "unknown";
    } catch {
      return "unknown";
    }
  }, "deriveLibraryType", 0, function (_v0) {
    return _v0.isSharedWithMe ? "shared_with_me" : !0 === _v0.isPrivateToUser ? "my_library" : !1 === _v0.isPrivateToUser || _v0.hasContentSpaceEnabled ? "team_library" : "my_library";
  }, "deriveReferrerPage", 0, function () {
    if ("u" < typeof document || !document.referrer) return "unknown";
    try {
      let _v0 = new URL(document.referrer);
      if ("vimeo.com" !== _v0.hostname && !_v0.hostname.endsWith(".vimeo.com")) return "external";
      if (("/" === _v0.pathname || "" === _v0.pathname) && !_v0.search && !_v0.hash) return "origin_only";
      return _v7(_v0);
    } catch {
      return "unknown";
    }
  }, "deriveViewerAuthStatus", 0, _v6, "extractSafeViewerInfo", 0, _v9], 0);
  let _v10 = ["uri"];
  function _v11(_v0, _v1, _v2) {
    let _v3 = null !== _v0 ? `picox:cold_content:${_v0}:${_v1}` : null,
      _v4 = function (_v0) {
        if (null === _v0) return null;
        try {
          let _v0 = window.localStorage.getItem(_v0);
          if (null === _v0) return null;
          let _v1 = JSON.parse(_v0);
          if ("boolean" != typeof _v1?.v || "number" != typeof _v1?.e || Date.now() >= _v1.e) return window.localStorage.removeItem(_v0), null;
          return _v1.v;
        } catch {
          return null;
        }
      }(_v3),
      _v5 = _v2 && null !== _v3 && null === _v4,
      {
        data: _v6,
        isLoading: _v7
      } = (0, _v4.useGetUserVideos)(() => _v5 && null !== _v0 ? {
        where: {
          userId: _v0
        },
        select: _v10,
        query: {
          filter: _v1,
          perPage: 1
        },
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        revalidateIfStale: !1
      });
    return (0, _v2.useEffect)(() => {
      _v5 && null !== _v3 && _v6 && function (_v0, _v1) {
        try {
          window.localStorage.setItem(_v0, JSON.stringify({
            v: _v1,
            e: Date.now() + 0
          }));
        } catch {}
      }(_v3, (_v6.total ?? 0) > 0);
    }, [_v5, _v3, _v6]), !!_v2 && (null !== _v4 ? _v4 : _v7 ? null : (_v6?.total ?? 0) > 0);
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = "ping_web";
  function _v15(_v0) {
    return _v0 instanceof Error && "code" in _v0;
  }
  function _v16(_v0) {
    return _v15(_v0) && "PicoXClientError" === _v0.code;
  }
  function _v17(_v0) {
    return _v15(_v0) && "PicoXSerializationError" === _v0.code;
  }
  function _v18(_v0) {
    return _v15(_v0) && "PicoXPayloadTooLargeError" === _v0.code;
  }
  let _v19 = "events",
    _v20 = "event_timestamp",
    _v21 = async _v0 => {
      let _v1 = await _v27(_v0.dbName),
        _v2 = async _v0 => {
          let _v1 = _v0.map(_v0 => _v0.event_id),
            _v2 = await _v28(_v0.dbName, _v1);
          await _v26(_v2, _v19, _v1);
        };
      return {
        storeEvent: async _v0 => {
          let _v1 = await _v28(_v0.dbName, _v1),
            _v2 = await _v25(_v1, _v19);
          if (_v2 >= _v0.maxEventsStored) {
            let _v0 = _v2 - _v0.targetEventsNumberAfterClearingSpace,
              _v1 = await _v24(_v1, _v19, _v20, _v0, "next");
            await _v2(_v1);
          }
          await _v23(_v1, _v19, _v0.event_id, _v0);
        },
        retrieveEvents: async _v0 => {
          let _v1 = await _v28(_v0.dbName, _v1);
          return await _v24(_v1, _v19, _v20, _v0, "next");
        },
        removeEvents: _v2
      };
    },
    _v22 = async (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      let _v2 = indexedDB.open(_v0, _v1);
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0(_v2.result);
      }, _v2.onupgradeneeded = () => {
        _v2(_v2.result);
      };
    }),
    _v23 = async (_v0, _v1, _v2, _v3) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readwrite").objectStore(_v1).put(_v3, _v2);
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0();
      };
    }),
    _v24 = async (_v0, _v1, _v2, _v3, _v4) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readonly").objectStore(_v1).index(_v2).openCursor(null, _v4),
        _v3 = [];
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        let _v0 = _v2.result;
        _v0 && _v3.length < _v3 ? (_v3.push(_v0.value), _v0.continue()) : _v0(_v3);
      };
    }),
    _v25 = async (_v0, _v1) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readonly").objectStore(_v1).count();
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0(_v2.result);
      };
    }),
    _v26 = async (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readwrite").objectStore(_v1),
        _v3 = [];
      _v2.forEach(_v0 => {
        let _v1 = _v2.delete(_v0);
        _v3.push(new Promise((_v0, _v1) => {
          _v1.onerror = () => {
            _v1(_v1.error);
          }, _v1.onsuccess = () => {
            _v0();
          };
        }));
      }), Promise.all(_v3).then(() => _v0()).catch(_v1);
    }),
    _v27 = async _v0 => _v22(_v0, 1, _v0 => {
      _v0.objectStoreNames.contains(_v19) || _v0.createObjectStore(_v19).createIndex(_v20, "event_timestamp");
    }),
    _v28 = async (_v0, _v1) => _v1 && (_v0 => {
      try {
        return _v0.transaction([_v19], "readwrite"), !0;
      } catch (_v0) {
        return "InvalidStateError" !== _v0.name;
      }
    })(_v1) ? _v1 : _v1 = await _v27(_v0);
  class _v29 {
    mutex = Promise.resolve();
    async run(_v0) {
      return new Promise((_v0, _v1) => {
        this.mutex = this.mutex.then(async () => {
          try {
            _v0(await _v0());
          } catch (_v0) {
            _v1(_v0);
          }
        });
      });
    }
  }
  let _v30 = {
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
      webLockApiRunner: async (_v0, _v1) => {
        window.navigator.locks?.request && window.navigator.locks.request(_v0, async () => (await _v1(), new Promise(() => {})));
      },
      identifiersSuffix: "PICOX_ID"
    },
    _v31 = async _v0 => {
      var _v1, _v2;
      let _v3,
        _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11,
        _v12,
        _v13,
        _v14,
        _v15,
        _v16,
        _v17,
        _v18,
        _v19,
        _v20,
        _v21 = {
          ..._v30,
          ..._v0
        },
        _v22 = "__picox_storage_probe__";
      try {
        window.localStorage.setItem(_v22, _v22), window.localStorage.removeItem(_v22), window.sessionStorage.setItem(_v22, _v22), window.sessionStorage.removeItem(_v22);
      } catch (_v0) {
        throw Error("PicoX cannot initialize: web storage is unavailable", {
          cause: _v0
        });
      }
      let _v23 = await _v21(_v21),
        _v24 = ((_v0, _v1 = () => new Date()) => ({
          sendEvents: async (_v0, _v1, _v2) => {
            let _v3;
            if (0 === _v0.length) return _v1;
            try {
              _v3 = JSON.stringify({
                events: _v0,
                delta: _v1.delta,
                last_event_timestamp: _v1.last_event_timestamp,
                request_timestamp: _v1().toISOString()
              });
            } catch (_v0) {
              let _v1;
              throw _v0.logger.error(`Failed to serialize events: ${_v0}`), (_v1 = Error("SerializationError")).code = "PicoXSerializationError", _v1;
            }
            let _v4 = {
              "X-Pico-Auth": _v0.identificationToken,
              "Content-Type": "application/json"
            };
            !0 === _v0.isDevelopment && (_v4["X-Pico-Is-Development"] = "true");
            let _v5 = await fetch(_v0.endpoint, {
              method: "POST",
              headers: _v4,
              body: _v3,
              keepalive: _v2?.keepalive === !0
            });
            if (200 !== _v5.status) {
              let _v0;
              if (_v0.logger.error(`Received invalid response: ${_v5.status}`), 413 === _v5.status) {
                let _v0;
                throw (_v0 = Error("ClientError")).code = "PicoXPayloadTooLargeError", _v0;
              }
              if (400 <= _v5.status && _v5.status < 500) {
                let _v0;
                throw (_v0 = Error("ClientError")).code = "PicoXClientError", _v0;
              }
              throw (_v0 = Error("ServerError")).code = "PicoXServerError", _v0;
            }
            let _v6 = await _v5.json();
            return {
              delta: _v6.delta ?? 0,
              last_event_timestamp: _v6.last_event_timestamp ?? null
            };
          }
        }))(_v21),
        _v25 = (_v3 = !1, _v4 = 0, _v5 = null, _v6 = _v21.syncIntervalMilliseconds, _v7 = {
          delta: 0,
          last_event_timestamp: null
        }, _v8 = _v21.eventsBatchSize, _v9 = new _v29(), _v10 = async () => {
          let _v0 = [];
          return _v9.run(async () => {
            _v4++;
            try {
              if (!(_v0 = await _v23.retrieveEvents(_v8)) || 0 === _v0.length) {
                _v4 = 0, _v6 = _v21.syncIntervalMilliseconds;
                return;
              }
              let _v0 = await _v24.sendEvents(_v0, _v7);
              return await _v11(_v0, _v0);
            } catch (_v0) {
              if (_v21.logger.error(`Event sync operation failed: ${_v0}`), _v16(_v0) || _v17(_v0) || _v18(_v0) && 1 === _v8) return await _v11(_v7, _v0);
              _v18(_v0) && (_v8 = Math.max(1, Math.floor(_v8 / 2))), _v6 = (({
                baseInterval: _v0,
                currentAttempt: _v1,
                maxInterval: _v2
              }) => Math.random() * Math.min(_v2, _v0 * Math.pow(2, Math.min(_v1 - 1, 64))))({
                baseInterval: _v21.retryBaseInterval,
                currentAttempt: _v4,
                maxInterval: _v21.maxExponentialBackoffInterval
              });
              return;
            } finally {
              _v12();
            }
          });
        }, _v11 = async (_v0, _v1) => {
          await _v23.removeEvents(_v1), _v4 = 0, _v7 = _v0, _v6 = _v21.syncIntervalMilliseconds, 0 === _v21.syncIntervalMilliseconds && _v1.length === _v8 && (_v6 = 1), _v8 < _v21.eventsBatchSize && (_v8 = Math.min(_v21.eventsBatchSize, _v8 + 1));
        }, _v12 = () => {
          _v3 && (_v5 = window.setTimeout(_v10, _v6));
        }, _v13 = async _v0 => {
          try {
            _v7 = await _v24.sendEvents([_v0], _v7, {
              keepalive: !0
            });
          } catch (_v0) {
            if (_v16(_v0) || _v17(_v0) || _v18(_v0)) return void _v21.logger.error(`Immediate send failed permanently: ${_v0}`);
            _v21.logger.error(`Immediate send failed, persisting for retry: ${_v0}`);
            try {
              await _v23.storeEvent(_v0);
            } catch (_v0) {
              _v21.logger.error(`Failed to persist event for retry: ${_v0}`);
            }
          }
        }, {
          configuration: _v21,
          sendImmediately: _v13,
          startScheduling: () => _v3 ? Promise.resolve() : (_v3 = !0, _v21.webLockApiRunner("picoXSendEvents", _v10)),
          stopScheduling: () => {
            _v3 = !1, _v5 && (window.clearTimeout(_v5), _v5 = null), _v6 = _v21.syncIntervalMilliseconds;
          }
        }),
        _v26 = (_v1 = _v21.identifiersSuffix, _v2 = _v21.cookieDomain, _v14 = `LOCAL_STORAGE_ID_${_v1}`, _v15 = () => {
          let _v0 = window.localStorage.getItem(_v14);
          if (null == _v0) {
            let _v0 = (0, _v12.v4)();
            return window.localStorage.setItem(_v14, _v0), _v0;
          }
          return _v0;
        }, _v16 = `SESSION_STORAGE_ID_${_v1}`, _v17 = () => {
          let _v0 = window.sessionStorage.getItem(_v16);
          if (null == _v0) {
            let _v0 = (0, _v12.v4)();
            return window.sessionStorage.setItem(_v16, _v0), _v0;
          }
          return _v0;
        }, _v18 = `COOKIE_ID_${_v1}`, _v19 = () => {
          let _v0 = _v5.default.get(_v18) ?? (0, _v12.v4)();
          return _v5.default.set(_v18, _v0, {
            expires: 365,
            domain: _v2
          }), _v0;
        }, {
          currentIdentifiers: () => ({
            local_storage_id: _v15(),
            session_storage_id: _v17(),
            cookie_storage_id: _v19()
          })
        }),
        _v27 = {
          currentContext: _v0 => {
            let _v1 = new _v13.UAParser(window.navigator.userAgent).getResult(),
              _v2 = Intl.DateTimeFormat().resolvedOptions(),
              _v3 = _v21.sdkVersion,
              _v4 = _v1.browser.name ?? null,
              _v5 = _v1.os.name ?? null,
              _v6 = _v1.os.version ?? null,
              _v7 = _v1.device.type ?? "desktop",
              _v8 = window.navigator.language,
              _v9 = _v2.locale,
              _v10 = ((_v0 = new Date()) => Math.max(new Date(_v0.getFullYear(), 0, 1).getTimezoneOffset(), new Date(_v0.getFullYear(), 6, 1).getTimezoneOffset()) !== _v0.getTimezoneOffset())(_v0),
              _v11 = _v2.timeZone,
              _v12 = 60 * _v0.getTimezoneOffset();
            return {
              device_browser: _v4,
              device_os: _v5,
              device_os_version: _v6,
              device_type: _v7,
              language: _v8,
              locale: _v9,
              session_id: ((_v0, _v1 = new Date()) => {
                let _v2 = `SESSION_STORAGE_ID_${_v0}`,
                  _v3 = `${_v2}__LAST_ACTIVITY`,
                  _v4 = window.sessionStorage.getItem(_v3);
                null !== _v4 && _v1.getTime() - Number(_v4) > 0 && window.sessionStorage.removeItem(_v2), window.sessionStorage.setItem(_v3, String(_v1.getTime()));
                let _v5 = window.sessionStorage.getItem(_v2);
                if (null == _v5) {
                  let _v0 = (0, _v12.v4)();
                  return window.sessionStorage.setItem(_v2, _v0), _v0;
                }
                return _v5;
              })("PICOX_SESSION_ID", _v0),
              sdk_version: _v3,
              timezone_daylight_saving: _v10,
              timezone_name: _v11,
              timezone_seconds: _v12
            };
          }
        },
        _v28 = async (_v0, _v1, _v2, _v3) => {
          let _v4 = new Date(),
            _v5 = _v26.currentIdentifiers(),
            _v6 = _v21.additionalIdentifiers(),
            _v7 = {
              ..._v5,
              ..._v6,
              ...(_v2 ?? {})
            },
            _v8 = _v27.currentContext(_v4),
            _v9 = _v21.additionalContext(),
            _v10 = {
              ..._v8,
              ..._v9
            },
            _v11 = {
              event_id: (0, _v12.v4)(),
              event_name: _v0,
              payload: _v1,
              identifiers: _v7,
              context: _v10,
              event_timestamp: _v4
            };
          for (let _v0 of _v21.eventProcessors) if (!(_v11 = _v0.processEvent(_v11))) return;
          _v3?.delivery === "immediate" ? await _v25.sendImmediately(_v11) : await _v23.storeEvent(_v11);
        },
        _v29 = (_v20 = {
          start: () => {
            null === window.sessionStorage.getItem("PICOX_PING") && (window.sessionStorage.setItem("PICOX_PING", (0, _v12.v4)()), _v28(_v14, {
              ping_type: "tab_created"
            }));
          }
        }, {
          start: () => {
            _v20.start();
          }
        });
      return _v25.startScheduling(), _v29.start(), {
        track: _v28
      };
    };
  var _v32 = _v0.i(0);
  let _v33 = "utmParameters",
    _v34 = "utmParametersTracked";
  function _v35(_v0) {
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
  function _v36(_v0, _v1) {
    try {
      return ("localStorage" === _v0 ? window.localStorage : window.sessionStorage).getItem(_v1);
    } catch {
      return null;
    }
  }
  function _v37(_v0, _v1, _v2) {
    try {
      ("localStorage" === _v0 ? window.localStorage : window.sessionStorage).setItem(_v1, _v2);
    } catch {}
  }
  let _v38 = async _v0 => {
      try {
        if ("true" === _v36("sessionStorage", _v34)) return;
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
              _v32.ATTRIBUTION_PARAM_NAMES.includes(_v1) && _v0 && (_v0[_v1] = _v0);
            }), _v0),
            _v3 = _v35(_v36("localStorage", _v33)),
            _v4 = _v35(_v36("sessionStorage", _v33)),
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
            _v37("sessionStorage", _v33, JSON.stringify(_v5));
            let _v0 = Object.keys(_v5).length > 0 ? _v5 : _v3;
            return _v37("localStorage", _v33, JSON.stringify(_v0)), {
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
        }), _v37("sessionStorage", _v34, "true");
      } catch (_v0) {
        console.error("Error tracking UTM params event", _v0);
      }
    },
    _v39 = (0, _v2.createContext)({
      track: async () => {
        let _v0 = "usePico() was called outside of <PicoProvider>. Track calls will be dropped.";
        if (console.error(_v0), _v40()) throw Error(_v0);
      }
    });
  function _v40() {
    let _v0 = window.location?.hostname ?? "";
    return "vimeo.dev" === _v0 || _v0.endsWith(".vimeows.com");
  }
  _v0.s(["PicoProvider", 0, ({
    children: _v0,
    syncIntervalMilliseconds: _v1 = 0,
    isDevelopment: _v2,
    surface: _v3 = "main"
  }) => {
    let _v4,
      _v5,
      _v6,
      _v7 = (0, _v3.useViewer)(),
      {
        user_id: _v8,
        vuid: _v9,
        team_id: _v10,
        team_owner_id: _v11,
        actor_id: _v12,
        organization_id: _v13,
        account_type: _v14,
        is_team_user: _v15,
        is_free_trial: _v16,
        country: _v17,
        is_mobile: _v18
      } = _v9(_v7),
      {
        has_cold_storage_videos: _v19,
        has_cold_privacy_videos: _v20
      } = (_v4 = (0, _v3.useViewer)(), _v6 = !!(_v5 = _v4?.user?.id ?? null) && "paid" !== _v6(_v4), {
        has_cold_storage_videos: _v11(_v5, "cold_storage", _v6),
        has_cold_privacy_videos: _v11(_v5, "cold_privacy", _v6)
      }),
      _v21 = null != _v7,
      _v22 = (0, _v2.useMemo)(() => _v21 ? {
        user_id: _v8,
        vuid: _v9,
        team_id: _v10,
        team_owner_id: _v11,
        actor_id: _v12,
        organization_id: _v13
      } : null, [_v8, _v9, _v10, _v11, _v12, _v13, _v21]),
      _v23 = (0, _v2.useMemo)(() => _v21 ? {
        account_type: _v14,
        is_team_user: _v15,
        is_free_trial: _v16,
        country: _v17,
        is_mobile: _v18,
        has_cold_storage_videos: _v19,
        has_cold_privacy_videos: _v20,
        is_in_grace_period: null
      } : null, [_v14, _v15, _v16, _v17, _v18, _v19, _v20, _v21]),
      _v24 = (0, _v2.useRef)(_v22),
      _v25 = (0, _v2.useRef)(_v23);
    _v24.current = _v22, _v25.current = _v23;
    let {
      proxy: _v26,
      bind: _v27,
      fail: _v28
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
      if (!_v21) return;
      let _v0 = () => ({
          ...(_v24.current ?? {})
        }),
        _v1 = () => {
          let _v0 = null;
          return {
            page: _v0 = window.location.pathname,
            surface: _v3,
            ...(_v25.current ?? {}),
            is_in_grace_period: _v8()
          };
        },
        _v2 = _v2 || _v40(),
        _v3 = `https://vimeo.com/flarepoint/${function () {
          let _v0 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            _v1 = "";
          for (let _v0 = 0; _v0 < 8; _v0++) _v1 += _v0.charAt(Math.floor(Math.random() * _v0.length));
          return _v1;
        }()}`;
      (async () => {
        try {
          let _v0 = await _v31({
            additionalIdentifiers: _v0,
            additionalContext: _v1,
            cookieDomain: `.${window.location.hostname.split(".").slice(-2).join(".")}`,
            identificationToken: "c10f1887-7c05-4a9a-9a60-c307825f0f34",
            isDevelopment: _v2,
            syncIntervalMilliseconds: _v1,
            endpoint: _v3
          });
          _v27(_v0), _v38(_v0);
        } catch (_v0) {
          console.error("Error initializing PicoX client", _v0), _v28(_v0);
        }
      })();
    }, [_v21]), (0, _v1.jsx)(_v39.Provider, {
      value: _v26,
      children: _v0
    });
  }, "usePico", 0, () => (0, _v2.useContext)(_v39)], 0);
}