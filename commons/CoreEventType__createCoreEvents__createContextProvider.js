{
  "use strict";

  _v0.s(["CoreEventType", () => _v4, "createCoreEvents", () => _v5], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["createContextProvider", 0, _v0 => ({
    currentContext: _v0 => {
      let _v1 = new _v1.UAParser(window.navigator.userAgent).getResult(),
        _v2 = Intl.DateTimeFormat().resolvedOptions(),
        _v3 = _v0.sdkVersion,
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
            let _v0 = (0, _v3.v4)();
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
  })], 0);
  let _v4 = {
    ping: "ping_web"
  };
  function _v5(_v0) {
    let _v1 = {
      start: () => {
        null === window.sessionStorage.getItem("PICOX_PING") && (window.sessionStorage.setItem("PICOX_PING", (0, _v3.v4)()), _v0(_v4.ping, {
          ping_type: "tab_created"
        }));
      }
    };
    return {
      start: () => {
        _v1.start();
      }
    };
  }
  function _v6(_v0) {
    let _v1 = Error(_v0);
    return _v1.code = "PicoXClientError", _v1;
  }
  function _v7(_v0) {
    let _v1 = Error(_v0);
    return _v1.code = "PicoXSerializationError", _v1;
  }
  function _v8(_v0) {
    let _v1 = Error(_v0);
    return _v1.code = "PicoXPayloadTooLargeError", _v1;
  }
  function _v9(_v0) {
    let _v1 = Error(_v0);
    return _v1.code = "PicoXServerError", _v1;
  }
  function _v10(_v0) {
    return _v0 instanceof Error && "code" in _v0;
  }
  _v0.s(["createIdentifiersProvider", 0, (_v0, _v1) => {
    let _v2,
      _v3,
      _v4,
      _v5 = (_v2 = `LOCAL_STORAGE_ID_${_v0}`, () => {
        let _v0 = window.localStorage.getItem(_v2);
        if (null == _v0) {
          let _v0 = (0, _v3.v4)();
          return window.localStorage.setItem(_v2, _v0), _v0;
        }
        return _v0;
      }),
      _v6 = (_v3 = `SESSION_STORAGE_ID_${_v0}`, () => {
        let _v0 = window.sessionStorage.getItem(_v3);
        if (null == _v0) {
          let _v0 = (0, _v3.v4)();
          return window.sessionStorage.setItem(_v3, _v0), _v0;
        }
        return _v0;
      }),
      _v7 = (_v4 = `COOKIE_ID_${_v0}`, () => {
        let _v0 = _v2.default.get(_v4) ?? (0, _v3.v4)();
        return _v2.default.set(_v4, _v0, {
          expires: 365,
          domain: _v1
        }), _v0;
      });
    return {
      currentIdentifiers: () => ({
        local_storage_id: _v5(),
        session_storage_id: _v6(),
        cookie_storage_id: _v7()
      })
    };
  }], 0), _v0.s(["PicoXClientError", 0, _v6, "PicoXPayloadTooLargeError", 0, _v8, "PicoXSerializationError", 0, _v7, "PicoXServerError", 0, _v9, "isPicoXClientError", 0, function (_v0) {
    return _v10(_v0) && "PicoXClientError" === _v0.code;
  }, "isPicoXPayloadTooLargeError", 0, function (_v0) {
    return _v10(_v0) && "PicoXPayloadTooLargeError" === _v0.code;
  }, "isPicoXSerializationError", 0, function (_v0) {
    return _v10(_v0) && "PicoXSerializationError" === _v0.code;
  }], 0), _v0.s(["createNetwork", 0, (_v0, _v1 = () => new Date()) => ({
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
        throw _v0.logger.error(`Failed to serialize events: ${_v0}`), _v7("SerializationError");
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
        if (_v0.logger.error(`Received invalid response: ${_v5.status}`), 413 === _v5.status) throw _v8("ClientError");
        if (400 <= _v5.status && _v5.status < 500) throw _v6("ClientError");
        throw _v9("ServerError");
      }
      let _v6 = await _v5.json();
      return {
        delta: _v6.delta ?? 0,
        last_event_timestamp: _v6.last_event_timestamp ?? null
      };
    }
  })], 0);
  let _v11 = "events",
    _v12 = "event_timestamp",
    _v13 = async _v0 => {
      let _v1 = await _v19(_v0.dbName),
        _v2 = async _v0 => {
          let _v1 = _v0.map(_v0 => _v0.event_id),
            _v2 = await _v20(_v0.dbName, _v1);
          await _v18(_v2, _v11, _v1);
        };
      return {
        storeEvent: async _v0 => {
          let _v1 = await _v20(_v0.dbName, _v1),
            _v2 = await _v17(_v1, _v11);
          if (_v2 >= _v0.maxEventsStored) {
            let _v0 = _v2 - _v0.targetEventsNumberAfterClearingSpace,
              _v1 = await _v16(_v1, _v11, _v12, _v0, "next");
            await _v2(_v1);
          }
          await _v15(_v1, _v11, _v0.event_id, _v0);
        },
        retrieveEvents: async _v0 => {
          let _v1 = await _v20(_v0.dbName, _v1);
          return await _v16(_v1, _v11, _v12, _v0, "next");
        },
        removeEvents: _v2
      };
    },
    _v14 = async (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
      let _v2 = indexedDB.open(_v0, _v1);
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0(_v2.result);
      }, _v2.onupgradeneeded = () => {
        _v2(_v2.result);
      };
    }),
    _v15 = async (_v0, _v1, _v2, _v3) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readwrite").objectStore(_v1).put(_v3, _v2);
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0();
      };
    }),
    _v16 = async (_v0, _v1, _v2, _v3, _v4) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readonly").objectStore(_v1).index(_v2).openCursor(null, _v4),
        _v3 = [];
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        let _v0 = _v2.result;
        _v0 && _v3.length < _v3 ? (_v3.push(_v0.value), _v0.continue()) : _v0(_v3);
      };
    }),
    _v17 = async (_v0, _v1) => new Promise((_v0, _v1) => {
      let _v2 = _v0.transaction(_v1, "readonly").objectStore(_v1).count();
      _v2.onerror = () => {
        _v1(_v2.error);
      }, _v2.onsuccess = () => {
        _v0(_v2.result);
      };
    }),
    _v18 = async (_v0, _v1, _v2) => new Promise((_v0, _v1) => {
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
    _v19 = async _v0 => _v14(_v0, 1, _v0 => {
      _v0.objectStoreNames.contains(_v11) || _v0.createObjectStore(_v11).createIndex(_v12, "event_timestamp");
    }),
    _v20 = async (_v0, _v1) => _v1 && (_v0 => {
      try {
        return _v0.transaction([_v11], "readwrite"), !0;
      } catch (_v0) {
        return "InvalidStateError" !== _v0.name;
      }
    })(_v1) ? _v1 : _v1 = await _v19(_v0);
  _v0.s(["createPersistence", 0, _v13], 0), _v0.s(["LockId", 0, {
    picoXSendEvents: "picoXSendEvents"
  }, "webLockApiRunner", 0, () => async (_v0, _v1) => {
    window.navigator.locks?.request && window.navigator.locks.request(_v0, async () => (await _v1(), new Promise(() => {})));
  }], 0);
}