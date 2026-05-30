{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = new WeakMap(),
    _v4 = {},
    _v5 = {},
    _v6 = () => {},
    _v7 = _v6(),
    _v8 = Object,
    _v9 = _v0 => _v0 === _v7,
    _v10 = (_v0, _v1) => ({
      ..._v0,
      ..._v1
    }),
    _v11 = "undefined",
    _v12 = typeof window != _v11,
    _v13 = typeof document != _v11,
    _v14 = (_v0, _v1) => {
      let _v2 = _v3.get(_v0);
      return [() => !_v9(_v1) && _v0.get(_v1) || _v4, _v0 => {
        if (!_v9(_v1)) {
          let _v0 = _v0.get(_v1);
          _v1 in _v5 || (_v5[_v1] = _v0), _v2[5](_v1, _v10(_v0, _v0), _v0 || _v4);
        }
      }, _v2[6], () => !_v9(_v1) && _v1 in _v5 ? _v5[_v1] : !_v9(_v1) && _v0.get(_v1) || _v4];
    },
    _v15 = new WeakMap(),
    _v16 = 0,
    _v17 = _v0 => {
      let _v1,
        _v2,
        _v3 = typeof _v0,
        _v4 = _v0 && _v0.constructor,
        _v5 = _v4 == Date;
      if (_v8(_v0) !== _v0 || _v5 || _v4 == RegExp) _v1 = _v5 ? _v0.toJSON() : "symbol" == _v3 ? _v0.toString() : "string" == _v3 ? JSON.stringify(_v0) : "" + _v0;else {
        if (_v1 = _v15.get(_v0)) return _v1;
        if (_v1 = ++_v16 + "~", _v15.set(_v0, _v1), _v4 == Array) {
          for (_v2 = 0, _v1 = "@"; _v2 < _v0.length; _v2++) _v1 += _v17(_v0[_v2]) + ",";
          _v15.set(_v0, _v1);
        }
        if (_v4 == _v8) {
          _v1 = "#";
          let _v0 = _v8.keys(_v0).sort();
          for (; !_v9(_v2 = _v0.pop());) _v9(_v0[_v2]) || (_v1 += _v2 + ":" + _v17(_v0[_v2]) + ",");
          _v15.set(_v0, _v1);
        }
      }
      return _v1;
    },
    _v18 = !0,
    [_v19, _v20] = _v12 && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [_v6, _v6],
    _v21 = {
      initFocus: _v0 => (_v13 && document.addEventListener("visibilitychange", _v0), _v19("focus", _v0), () => {
        _v13 && document.removeEventListener("visibilitychange", _v0), _v20("focus", _v0);
      }),
      initReconnect: _v0 => {
        let _v1 = () => {
            _v18 = !0, _v0();
          },
          _v2 = () => {
            _v18 = !1;
          };
        return _v19("online", _v1), _v19("offline", _v2), () => {
          _v20("online", _v1), _v20("offline", _v2);
        };
      }
    },
    _v22 = !_v1.default.useId,
    _v23 = !_v12 || "Deno" in window,
    _v24 = _v23 ? _v1.useEffect : _v1.useLayoutEffect,
    _v25 = "u" > typeof navigator && navigator.connection,
    _v26 = !_v23 && _v25 && (["slow-2g", "2g"].includes(_v25.effectiveType) || _v25.saveData),
    _v27 = _v0 => {
      if ("function" == typeof _v0) try {
        _v0 = _v0();
      } catch (_v0) {
        _v0 = "";
      }
      let _v1 = _v0;
      return [_v0 = "string" == typeof _v0 ? _v0 : (Array.isArray(_v0) ? _v0.length : _v0) ? _v17(_v0) : "", _v1];
    },
    _v28 = 0,
    _v29 = () => ++_v28;
  async function _v30(..._v0) {
    let [_v1, _v2, _v3, _v4] = _v0,
      _v5 = _v10({
        populateCache: !0,
        throwOnError: !0
      }, "boolean" == typeof _v4 ? {
        revalidate: _v4
      } : _v4 || {}),
      _v6 = _v5.populateCache,
      _v7 = _v5.rollbackOnError,
      _v8 = _v5.optimisticData,
      _v9 = !1 !== _v5.revalidate,
      _v10 = _v5.throwOnError;
    if ("function" == typeof _v2) {
      let _v0 = [],
        _v1 = _v1.keys();
      for (let _v0 = _v1.next(); !_v0.done; _v0 = _v1.next()) {
        let _v0 = _v0.value;
        !/^\$(inf|sub)\$/.test(_v0) && _v2(_v1.get(_v0)._k) && _v0.push(_v0);
      }
      return Promise.all(_v0.map(_v11));
    }
    return _v11(_v2);
    async function _v11(_v0) {
      let _v1,
        [_v2] = _v27(_v0);
      if (!_v2) return;
      let [_v3, _v4] = _v14(_v1, _v2),
        [_v5, _v6, _v7] = _v3.get(_v1),
        _v8 = _v5[_v2],
        _v9 = () => _v9 && (delete _v7[_v2], _v8 && _v8[0]) ? _v8[0](2).then(() => _v3().data) : _v3().data;
      if (_v0.length < 3) return _v9();
      let _v10 = _v3,
        _v11 = _v29();
      _v6[_v2] = [_v11, 0];
      let _v12 = !_v9(_v8),
        _v13 = _v3(),
        _v14 = _v13.data,
        _v15 = _v13._c,
        _v16 = _v9(_v15) ? _v14 : _v15;
      if (_v12 && _v4({
        data: _v8 = "function" == typeof _v8 ? _v8(_v16) : _v8,
        _c: _v16
      }), "function" == typeof _v10) try {
        _v10 = _v10(_v16);
      } catch (_v0) {
        _v1 = _v0;
      }
      if (_v10 && "function" == typeof _v10.then) {
        let _v0;
        if (_v10 = await _v10.catch(_v0 => {
          _v1 = _v0;
        }), _v11 !== _v6[_v2][0]) {
          if (_v1) throw _v1;
          return _v10;
        }
        _v1 && _v12 && (_v0 = _v1, "function" == typeof _v7 ? _v7(_v0) : !1 !== _v7) && (_v6 = !0, _v4({
          data: _v10 = _v16,
          _c: _v7
        }));
      }
      _v6 && !_v1 && ("function" == typeof _v6 && (_v10 = _v6(_v10, _v16)), _v4({
        data: _v10,
        _c: _v7
      })), _v6[_v2][1] = _v29();
      let _v17 = await _v9();
      if (_v4({
        _c: _v7
      }), _v1) {
        if (_v10) throw _v1;
        return;
      }
      return _v6 ? _v17 : _v10;
    }
  }
  let _v31 = (_v0, _v1) => {
      for (let _v0 in _v0) _v0[_v0][0] && _v0[_v0][0](_v1);
    },
    _v32 = (_v0, _v1) => {
      if (!_v3.has(_v0)) {
        let _v0 = _v10(_v21, _v1),
          _v1 = {},
          _v2 = _v30.bind(_v7, _v0),
          _v3 = _v6,
          _v4 = {},
          _v5 = (_v0, _v1) => {
            let _v2 = _v4[_v0] || [];
            return _v4[_v0] = _v2, _v2.push(_v1), () => _v2.splice(_v2.indexOf(_v1), 1);
          },
          _v6 = (_v0, _v1, _v2) => {
            _v0.set(_v0, _v1);
            let _v3 = _v4[_v0];
            if (_v3) for (let _v0 of _v3) _v0(_v1, _v2);
          },
          _v7 = () => {
            if (!_v3.has(_v0) && (_v3.set(_v0, [_v1, {}, {}, {}, _v2, _v6, _v5]), !_v23)) {
              let _v0 = _v0.initFocus(setTimeout.bind(_v7, _v31.bind(_v7, _v1, 0))),
                _v1 = _v0.initReconnect(setTimeout.bind(_v7, _v31.bind(_v7, _v1, 1)));
              _v3 = () => {
                _v0 && _v0(), _v1 && _v1(), _v3.delete(_v0);
              };
            }
          };
        return _v7(), [_v0, _v2, _v7, _v3];
      }
      return [_v0, _v3.get(_v0)[4]];
    },
    [_v33, _v34] = _v32(new Map()),
    _v35 = _v10({
      onLoadingSlow: _v6,
      onSuccess: _v6,
      onError: _v6,
      onErrorRetry: (_v0, _v1, _v2, _v3, _v4) => {
        let _v5 = _v2.errorRetryCount,
          _v6 = _v4.retryCount,
          _v7 = ~~((Math.random() + .5) * (1 << (_v6 < 8 ? _v6 : 8))) * _v2.errorRetryInterval;
        (_v9(_v5) || !(_v6 > _v5)) && setTimeout(_v3, _v7, _v4);
      },
      onDiscarded: _v6,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: _v26 ? 0 : 0,
      focusThrottleInterval: 0,
      dedupingInterval: 0,
      loadingTimeout: _v26 ? 0 : 0,
      compare: (_v0, _v1) => _v17(_v0) == _v17(_v1),
      isPaused: () => !1,
      cache: _v33,
      mutate: _v34,
      fallback: {}
    }, {
      isOnline: () => _v18,
      isVisible: () => {
        let _v0 = _v13 && document.visibilityState;
        return _v9(_v0) || "hidden" !== _v0;
      }
    }),
    _v36 = (0, _v1.createContext)({}),
    _v37 = _v12 && window.__SWR_DEVTOOLS_USE__;
  (_v37 ? window.__SWR_DEVTOOLS_USE__ : []).concat(_v0 => (_v0, _v1, _v2) => {
    let _v3 = _v1 && ((..._v0) => {
      let [_v1] = _v27(_v0),
        [,,, _v2] = _v3.get(_v33),
        _v3 = _v2[_v1];
      return _v3 ? (delete _v2[_v1], _v3) : _v1(..._v0);
    });
    return _v0(_v0, _v3, _v2);
  }), _v37 && (window.__SWR_DEVTOOLS_REACT__ = _v1.default);
  let _v38 = {
      dedupe: !0
    },
    _v39 = _v8.defineProperty(_v0 => {
      let {
          value: _v1
        } = _v0,
        _v2 = (0, _v1.useContext)(_v36),
        _v3 = "function" == typeof _v1,
        _v4 = (0, _v1.useMemo)(() => _v3 ? _v1(_v2) : _v1, [_v3, _v2, _v1]),
        _v5 = (0, _v1.useMemo)(() => _v3 ? _v4 : ((_v0, _v1) => {
          let _v2 = _v10(_v0, _v1);
          if (_v1) {
            let {
                use: _v0,
                fallback: _v1
              } = _v0,
              {
                use: _v2,
                fallback: _v3
              } = _v1;
            _v0 && _v2 && (_v2.use = _v0.concat(_v2)), _v1 && _v3 && (_v2.fallback = _v10(_v1, _v3));
          }
          return _v2;
        })(_v2, _v4), [_v3, _v2, _v4]),
        _v6 = _v4 && _v4.provider,
        _v7 = (0, _v1.useRef)(_v7);
      _v6 && !_v7.current && (_v7.current = _v32(_v6(_v5.cache || _v33), _v4));
      let _v8 = _v7.current;
      return _v8 && (_v5.cache = _v8[0], _v5.mutate = _v8[1]), _v24(() => {
        if (_v8) return _v8[2] && _v8[2](), _v8[3];
      }, []), (0, _v1.createElement)(_v36.Provider, _v10(_v0, {
        value: _v5
      }));
    }, "defaultValue", {
      value: _v35
    });
  _v0.s(["SWRConfig", 0, _v39], 0);
}