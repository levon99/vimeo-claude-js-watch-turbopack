{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => {
      let _v1 = `SESSION_STORAGE_ID_${_v0}`;
      return () => {
        let _v0 = window.sessionStorage.getItem(_v1);
        if (null == _v0) {
          let _v0 = (0, _v1.v4)();
          return window.sessionStorage.setItem(_v1, _v0), _v0;
        }
        return _v0;
      };
    },
    _v5 = "ping_web";
  function _v6(_v0) {
    return _v0 instanceof Error && "code" in _v0;
  }
  function _v7(_v0) {
    return _v6(_v0) && "PicoXPayloadTooLargeError" === _v0.code;
  }
  let _v8 = "events",
    _v9 = "event_timestamp",
    _v10 = async _v0 => {
      let _v1 = await _v16(_v0.dbName),
        _v2 = async _v0 => {
          let _v1 = _v0.map(_v0 => _v0.event_id),
            _v2 = await _v17(_v0.dbName, _v1);
          await _v15(_v2, _v8, _v1);
        };
      return {
        storeEvent: async _v0 => {
          let _v1 = await _v17(_v0.dbName, _v1),
            _v2 = await _v14(_v1, _v8);
          if (_v2 >= _v0.maxEventsStored) {
            let _v0 = _v2 - _v0.targetEventsNumberAfterClearingSpace,
              _v1 = await _v13(_v1, _v8, _v9, _v0, "next");
            await _v2(_v1);
          }
          await _v12(_v1, _v8, _v0.event_id, _v0);
        },
        retrieveEvents: async _v0 => {
          let _v1 = await _v17(_v0.dbName, _v1);
          return await _v13(_v1, _v8, _v9, _v0, "next");
        },
        removeEvents: _v2
      };
    },
    _v11 = async (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      let _v2 = indexedDB.open(_v0, _v1);
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0(_v2.result);
      }, _v2.onupgradeneeded = () => {
        _v2(_v2.result);
      };
    }),
    _v12 = async (_v0, _v1, _v2, _v3) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readwrite").objectStore(_v1).put(_v3, _v2);
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0();
      };
    }),
    _v13 = async (_v0, _v1, _v2, _v3, _v4) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readonly").objectStore(_v1).index(_v2).openCursor(null, _v4),
        _v3 = [];
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        let _v0 = _v2.result;
        _v0 && _v3.length < _v3 ? (_v3.push(_v0.value), _v0.continue()) : _v0(_v3);
      };
    }),
    _v14 = async (_v0, _v1) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readonly").objectStore(_v1).count();
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0(_v2.result);
      };
    }),
    _v15 = async (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
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
    _v16 = async _v0 => _v11(_v0, 1, _v0 => {
      _v0.objectStoreNames.contains(_v8) || _v0.createObjectStore(_v8).createIndex(_v9, "event_timestamp");
    }),
    _v17 = async (_v0, _v1) => _v1 && (_v0 => {
      try {
        return _v0.transaction([_v8], "readwrite"), !0;
      } catch (_v0) {
        return "InvalidStateError" !== _v0.name;
      }
    })(_v1) ? _v1 : _v1 = await _v16(_v0);
  class _v18 {
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
  let _v19 = {
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
        window.navigator.locks.request(_v0, async () => (await _v1(), new Promise(() => {})));
      },
      identifiersSuffix: "PICOX_ID"
    },
    _v20 = async _v0 => {
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
        _v19 = {
          ..._v19,
          ..._v0
        },
        _v20 = "__picox_storage_probe__";
      try {
        window.localStorage.setItem(_v20, _v20), window.localStorage.removeItem(_v20), window.sessionStorage.setItem(_v20, _v20), window.sessionStorage.removeItem(_v20);
      } catch (_v0) {
        throw Error("PicoX cannot initialize: web storage is unavailable", {
          cause: _v0
        });
      }
      let _v21 = await _v10(_v19),
        _v22 = ((_v0, _v1 = () => new Date()) => ({
          sendEvents: async (_v0, _v1) => {
            let _v2;
            if (0 === _v0.length) return _v1;
            try {
              _v2 = JSON.stringify({
                events: _v0,
                delta: _v1.delta,
                last_event_timestamp: _v1.last_event_timestamp,
                request_timestamp: _v1().toISOString()
              });
            } catch (_v0) {
              let _v1;
              throw _v0.logger.error(`Failed to serialize events: ${_v0}`), (_v1 = Error("SerializationError")).code = "PicoXSerializationError", _v1;
            }
            let _v3 = {
              "X-Pico-Auth": _v0.identificationToken,
              "Content-Type": "application/json"
            };
            !0 === _v0.isDevelopment && (_v3["X-Pico-Is-Development"] = "true");
            let _v4 = await fetch(_v0.endpoint, {
              method: "POST",
              headers: _v3,
              body: _v2
            });
            if (200 !== _v4.status) {
              let _v0;
              if (_v0.logger.error(`Received invalid response: ${_v4.status}`), 413 === _v4.status) {
                let _v0;
                throw (_v0 = Error("ClientError")).code = "PicoXPayloadTooLargeError", _v0;
              }
              if (400 <= _v4.status && _v4.status < 500) {
                let _v0;
                throw (_v0 = Error("ClientError")).code = "PicoXClientError", _v0;
              }
              throw (_v0 = Error("ServerError")).code = "PicoXServerError", _v0;
            }
            let _v5 = await _v4.json();
            return {
              delta: _v5.delta ?? 0,
              last_event_timestamp: _v5.last_event_timestamp ?? null
            };
          }
        }))(_v19),
        _v23 = (_v3 = !1, _v4 = 0, _v5 = null, _v6 = _v19.syncIntervalMilliseconds, _v7 = {
          delta: 0,
          last_event_timestamp: null
        }, _v8 = _v19.eventsBatchSize, _v9 = new _v18(), _v10 = async () => {
          let _v0 = [];
          return _v9.run(async () => {
            _v4++;
            try {
              if (!(_v0 = await _v21.retrieveEvents(_v8)) || 0 === _v0.length) {
                _v4 = 0, _v6 = _v19.syncIntervalMilliseconds;
                return;
              }
              let _v0 = await _v22.sendEvents(_v0, _v7);
              return await _v11(_v0, _v0);
            } catch (_v0) {
              if (_v19.logger.error(`Event sync operation failed: ${_v0}`), _v6(_v0) && "PicoXClientError" === _v0.code || _v6(_v0) && "PicoXSerializationError" === _v0.code || _v7(_v0) && 1 === _v8) return await _v11(_v7, _v0);
              _v7(_v0) && (_v8 = Math.max(1, Math.floor(_v8 / 2))), _v6 = (({
                baseInterval: _v0,
                currentAttempt: _v1,
                maxInterval: _v2
              }) => Math.random() * Math.min(_v2, _v0 * Math.pow(2, Math.min(_v1 - 1, 64))))({
                baseInterval: _v19.retryBaseInterval,
                currentAttempt: _v4,
                maxInterval: _v19.maxExponentialBackoffInterval
              });
              return;
            } finally {
              _v12();
            }
          });
        }, _v11 = async (_v0, _v1) => {
          await _v21.removeEvents(_v1), _v4 = 0, _v7 = _v0, _v6 = _v19.syncIntervalMilliseconds, 0 === _v19.syncIntervalMilliseconds && _v1.length === _v8 && (_v6 = 1), _v8 < _v19.eventsBatchSize && (_v8 = Math.min(_v19.eventsBatchSize, _v8 + 1));
        }, _v12 = () => {
          _v3 && (_v5 = window.setTimeout(_v10, _v6));
        }, {
          configuration: _v19,
          startScheduling: () => _v3 ? Promise.resolve() : (_v3 = !0, _v19.webLockApiRunner("picoXSendEvents", _v10)),
          stopScheduling: () => {
            _v3 = !1, _v5 && (window.clearTimeout(_v5), _v5 = null), _v6 = _v19.syncIntervalMilliseconds;
          }
        }),
        _v24 = (_v1 = _v19.identifiersSuffix, _v2 = _v19.cookieDomain, _v13 = `LOCAL_STORAGE_ID_${_v1}`, _v14 = () => {
          let _v0 = window.localStorage.getItem(_v13);
          if (null == _v0) {
            let _v0 = (0, _v1.v4)();
            return window.localStorage.setItem(_v13, _v0), _v0;
          }
          return _v0;
        }, _v15 = _v4(_v1), _v16 = `COOKIE_ID_${_v1}`, _v17 = () => {
          let _v0 = _v3.default.get(_v16) ?? (0, _v1.v4)();
          return _v3.default.set(_v16, _v0, {
            expires: 365,
            domain: _v2
          }), _v0;
        }, {
          currentIdentifiers: () => ({
            local_storage_id: _v14(),
            session_storage_id: _v15(),
            cookie_storage_id: _v17()
          })
        }),
        _v25 = {
          currentContext: _v0 => {
            let _v1 = new _v2.UAParser(window.navigator.userAgent).getResult(),
              _v2 = Intl.DateTimeFormat().resolvedOptions(),
              _v3 = _v19.sdkVersion,
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
              session_id: _v4("PICOX_SESSION_ID")(),
              sdk_version: _v3,
              timezone_daylight_saving: _v10,
              timezone_name: _v11,
              timezone_seconds: _v12
            };
          }
        },
        _v26 = async (_v0, _v1, _v2) => {
          let _v3 = new Date(),
            _v4 = _v24.currentIdentifiers(),
            _v5 = _v19.additionalIdentifiers(),
            _v6 = {
              ..._v4,
              ..._v5,
              ...(_v2 ?? {})
            },
            _v7 = _v25.currentContext(_v3),
            _v8 = _v19.additionalContext(),
            _v9 = {
              ..._v7,
              ..._v8
            },
            _v10 = {
              event_id: (0, _v1.v4)(),
              event_name: _v0,
              payload: _v1,
              identifiers: _v6,
              context: _v9,
              event_timestamp: _v3
            };
          for (let _v0 of _v19.eventProcessors) if (!(_v10 = _v0.processEvent(_v10))) return;
          await _v21.storeEvent(_v10);
        },
        _v27 = (_v18 = {
          start: () => {
            null === window.sessionStorage.getItem("PICOX_PING") && (window.sessionStorage.setItem("PICOX_PING", (0, _v1.v4)()), _v26(_v5, {
              ping_type: "tab_created"
            }));
          }
        }, {
          start: () => {
            _v18.start();
          }
        });
      return _v23.startScheduling(), _v27.start(), {
        track: _v26
      };
    };
  _v0.s(["createPicoX", 0, _v20], 0);
}