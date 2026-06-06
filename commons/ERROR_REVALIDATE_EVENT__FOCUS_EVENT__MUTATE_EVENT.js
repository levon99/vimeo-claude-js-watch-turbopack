{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["ERROR_REVALIDATE_EVENT", 0, 3, "FOCUS_EVENT", 0, 0, "MUTATE_EVENT", 0, 2, "RECONNECT_EVENT", 0, 1], 0);
  var _v2 = Object.prototype.hasOwnProperty;
  let _v3 = new WeakMap(),
    _v4 = () => {},
    _v5 = _v4(),
    _v6 = Object,
    _v7 = _v0 => _v0 === _v5,
    _v8 = _v0 => "function" == typeof _v0,
    _v9 = (_v0, _v1) => ({
      ..._v0,
      ..._v1
    }),
    _v10 = _v0 => _v8(_v0.then),
    _v11 = {},
    _v12 = {},
    _v13 = "undefined",
    _v14 = typeof window != _v13,
    _v15 = typeof document != _v13,
    _v16 = _v14 && "Deno" in window,
    _v17 = (_v0, _v1) => {
      let _v2 = _v3.get(_v0);
      return [() => !_v7(_v1) && _v0.get(_v1) || _v11, _v0 => {
        if (!_v7(_v1)) {
          let _v0 = _v0.get(_v1);
          _v1 in _v12 || (_v12[_v1] = _v0), _v2[5](_v1, _v9(_v0, _v0), _v0 || _v11);
        }
      }, _v2[6], () => !_v7(_v1) && _v1 in _v12 ? _v12[_v1] : !_v7(_v1) && _v0.get(_v1) || _v11];
    },
    _v18 = !0,
    [_v19, _v20] = _v14 && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [_v4, _v4],
    _v21 = {
      initFocus: _v0 => (_v15 && document.addEventListener("visibilitychange", _v0), _v19("focus", _v0), () => {
        _v15 && document.removeEventListener("visibilitychange", _v0), _v20("focus", _v0);
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
    _v23 = !_v14 || _v16,
    _v24 = _v23 ? _v1.useEffect : _v1.useLayoutEffect,
    _v25 = "u" > typeof navigator && navigator.connection,
    _v26 = !_v23 && _v25 && (["slow-2g", "2g"].includes(_v25.effectiveType) || _v25.saveData),
    _v27 = new WeakMap(),
    _v28 = (_v0, _v1) => _v0 === `[object ${_v1}]`,
    _v29 = 0,
    _v30 = _v0 => {
      let _v1,
        _v2,
        _v3 = typeof _v0,
        _v4 = _v6.prototype.toString.call(_v0),
        _v5 = _v28(_v4, "Date"),
        _v6 = _v28(_v4, "RegExp"),
        _v7 = _v28(_v4, "Object");
      if (_v6(_v0) !== _v0 || _v5 || _v6) _v1 = _v5 ? _v0.toJSON() : "symbol" == _v3 ? _v0.toString() : "string" == _v3 ? JSON.stringify(_v0) : "" + _v0;else {
        if (_v1 = _v27.get(_v0)) return _v1;
        if (_v1 = ++_v29 + "~", _v27.set(_v0, _v1), Array.isArray(_v0)) {
          for (_v2 = 0, _v1 = "@"; _v2 < _v0.length; _v2++) _v1 += _v30(_v0[_v2]) + ",";
          _v27.set(_v0, _v1);
        }
        if (_v7) {
          _v1 = "#";
          let _v0 = _v6.keys(_v0).sort();
          for (; !_v7(_v2 = _v0.pop());) _v7(_v0[_v2]) || (_v1 += _v2 + ":" + _v30(_v0[_v2]) + ",");
          _v27.set(_v0, _v1);
        }
      }
      return _v1;
    },
    _v31 = _v0 => {
      if (_v8(_v0)) try {
        _v0 = _v0();
      } catch (_v0) {
        _v0 = "";
      }
      let _v1 = _v0;
      return [_v0 = "string" == typeof _v0 ? _v0 : (Array.isArray(_v0) ? _v0.length : _v0) ? _v30(_v0) : "", _v1];
    },
    _v32 = 0,
    _v33 = () => ++_v32;
  async function _v34(..._v0) {
    let [_v1, _v2, _v3, _v4] = _v0,
      _v5 = _v9({
        populateCache: !0,
        throwOnError: !0
      }, "boolean" == typeof _v4 ? {
        revalidate: _v4
      } : _v4 || {}),
      _v6 = _v5.populateCache,
      _v7 = _v5.rollbackOnError,
      _v8 = _v5.optimisticData,
      _v9 = _v5.throwOnError;
    if (_v8(_v2)) {
      let _v0 = [];
      for (let _v0 of _v1.keys()) !/^\$(inf|sub)\$/.test(_v0) && _v2(_v1.get(_v0)._k) && _v0.push(_v0);
      return Promise.all(_v0.map(_v10));
    }
    return _v10(_v2);
    async function _v10(_v0) {
      let _v1,
        [_v2] = _v31(_v0);
      if (!_v2) return;
      let [_v3, _v4] = _v17(_v1, _v2),
        [_v5, _v6, _v7, _v8] = _v3.get(_v1),
        _v9 = () => {
          let _v0 = _v5[_v2];
          return (_v8(_v5.revalidate) ? _v5.revalidate(_v3().data, _v0) : !1 !== _v5.revalidate) && (delete _v7[_v2], delete _v8[_v2], _v0 && _v0[0]) ? _v0[0](2).then(() => _v3().data) : _v3().data;
        };
      if (_v0.length < 3) return _v9();
      let _v10 = _v3,
        _v11 = !1,
        _v12 = _v33();
      _v6[_v2] = [_v12, 0];
      let _v13 = !_v7(_v8),
        _v14 = _v3(),
        _v15 = _v14.data,
        _v16 = _v14._c,
        _v17 = _v7(_v16) ? _v15 : _v16;
      if (_v13 && _v4({
        data: _v8 = _v8(_v8) ? _v8(_v17, _v15) : _v8,
        _c: _v17
      }), _v8(_v10)) try {
        _v10 = _v10(_v17);
      } catch (_v0) {
        _v1 = _v0, _v11 = !0;
      }
      if (_v10 && _v10(_v10)) {
        let _v0;
        if (_v10 = await _v10.catch(_v0 => {
          _v1 = _v0, _v11 = !0;
        }), _v12 !== _v6[_v2][0]) {
          if (_v11) throw _v1;
          return _v10;
        }
        _v11 && _v13 && (_v0 = _v1, "function" == typeof _v7 ? _v7(_v0) : !1 !== _v7) && (_v6 = !0, _v4({
          data: _v17,
          _c: _v5
        }));
      }
      if (_v6 && !_v11 && (_v8(_v6) ? _v4({
        data: _v6(_v10, _v17),
        error: _v5,
        _c: _v5
      }) : _v4({
        data: _v10,
        error: _v5,
        _c: _v5
      })), _v6[_v2][1] = _v33(), Promise.resolve(_v9()).then(() => {
        _v4({
          _c: _v5
        });
      }), _v11) {
        if (_v9) throw _v1;
        return;
      }
      return _v10;
    }
  }
  let _v35 = (_v0, _v1) => {
      for (let _v0 in _v0) _v0[_v0][0] && _v0[_v0][0](_v1);
    },
    _v36 = (_v0, _v1) => {
      if (!_v3.has(_v0)) {
        let _v0 = _v9(_v21, _v1),
          _v1 = Object.create(null),
          _v2 = _v34.bind(_v5, _v0),
          _v3 = _v4,
          _v4 = Object.create(null),
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
            if (!_v3.has(_v0) && (_v3.set(_v0, [_v1, Object.create(null), Object.create(null), Object.create(null), _v2, _v6, _v5]), !_v23)) {
              let _v0 = _v0.initFocus(setTimeout.bind(_v5, _v35.bind(_v5, _v1, 0))),
                _v1 = _v0.initReconnect(setTimeout.bind(_v5, _v35.bind(_v5, _v1, 1)));
              _v3 = () => {
                _v0 && _v0(), _v1 && _v1(), _v3.delete(_v0);
              };
            }
          };
        return _v7(), [_v0, _v2, _v7, _v3];
      }
      return [_v0, _v3.get(_v0)[4]];
    },
    [_v37, _v38] = _v36(new Map()),
    _v39 = _v9({
      onLoadingSlow: _v4,
      onSuccess: _v4,
      onError: _v4,
      onErrorRetry: (_v0, _v1, _v2, _v3, _v4) => {
        let _v5 = _v2.errorRetryCount,
          _v6 = _v4.retryCount,
          _v7 = ~~((Math.random() + .5) * (1 << (_v6 < 8 ? _v6 : 8))) * _v2.errorRetryInterval;
        (_v7(_v5) || !(_v6 > _v5)) && setTimeout(_v3, _v7, _v4);
      },
      onDiscarded: _v4,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: _v26 ? 0 : 0,
      focusThrottleInterval: 0,
      dedupingInterval: 0,
      loadingTimeout: _v26 ? 0 : 0,
      compare: function _v0(_v1, _v2) {
        var _v3, _v4;
        if (_v1 === _v2) return !0;
        if (_v1 && _v2 && (_v3 = _v1.constructor) === _v2.constructor) {
          if (_v3 === Date) return _v1.getTime() === _v2.getTime();
          if (_v3 === RegExp) return _v1.toString() === _v2.toString();
          if (_v3 === Array) {
            if ((_v4 = _v1.length) === _v2.length) for (; _v4-- && _v0(_v1[_v4], _v2[_v4]););
            return -1 === _v4;
          }
          if (!_v3 || "object" == typeof _v1) {
            for (_v3 in _v4 = 0, _v1) if (_v2.call(_v1, _v3) && ++_v4 && !_v2.call(_v2, _v3) || !(_v3 in _v2) || !_v0(_v1[_v3], _v2[_v3])) return !1;
            return Object.keys(_v2).length === _v4;
          }
        }
        return _v1 != _v1 && _v2 != _v2;
      },
      isPaused: () => !1,
      cache: _v37,
      mutate: _v38,
      fallback: {}
    }, {
      isOnline: () => _v18,
      isVisible: () => {
        let _v0 = _v15 && document.visibilityState;
        return _v7(_v0) || "hidden" !== _v0;
      }
    }),
    _v40 = (_v0, _v1) => {
      let _v2 = _v9(_v0, _v1);
      if (_v1) {
        let {
            use: _v0,
            fallback: _v1
          } = _v0,
          {
            use: _v2,
            fallback: _v3
          } = _v1;
        _v0 && _v2 && (_v2.use = _v0.concat(_v2)), _v1 && _v3 && (_v2.fallback = _v9(_v1, _v3));
      }
      return _v2;
    },
    _v41 = (0, _v1.createContext)({});
  _v0.s(["A", 0, _v4, "B", 0, _v10, "I", 0, _v23, "O", 0, _v6, "S", 0, _v41, "U", 0, _v5, "a", 0, _v8, "b", 0, _v3, "c", 0, _v37, "d", 0, _v39, "e", 0, _v7, "f", 0, _v40, "g", 0, _v0 => {
    let {
        value: _v1
      } = _v0,
      _v2 = (0, _v1.useContext)(_v41),
      _v3 = _v8(_v1),
      _v4 = (0, _v1.useMemo)(() => _v3 ? _v1(_v2) : _v1, [_v3, _v2, _v1]),
      _v5 = (0, _v1.useMemo)(() => _v3 ? _v4 : _v40(_v2, _v4), [_v3, _v2, _v4]),
      _v6 = _v4 && _v4.provider,
      _v7 = (0, _v1.useRef)(_v5);
    _v6 && !_v7.current && (_v7.current = _v36(_v6(_v5.cache || _v37), _v4));
    let _v8 = _v7.current;
    return _v8 && (_v5.cache = _v8[0], _v5.mutate = _v8[1]), _v24(() => {
      if (_v8) return _v8[2] && _v8[2](), _v8[3];
    }, []), (0, _v1.createElement)(_v41.Provider, _v9(_v0, {
      value: _v5
    }));
  }, "i", 0, _v14, "m", 0, _v9, "n", 0, _v34, "o", 0, _v33, "r", 0, _v22, "s", 0, _v31, "t", 0, _v0 => _v14 && typeof window.requestAnimationFrame != _v13 ? window.requestAnimationFrame(_v0) : setTimeout(_v0, 1), "u", 0, _v24, "z", 0, _v17], 0), _v0.i(0);
  let _v42 = "$inf$";
  _v0.s(["INFINITE_PREFIX", 0, _v42], 0);
  let _v43 = _v14 && window.__SWR_DEVTOOLS_USE__,
    _v44 = _v43 ? window.__SWR_DEVTOOLS_USE__ : [],
    _v45 = _v0 => _v8(_v0[1]) ? [_v0[0], _v0[1], _v0[2] || {}] : [_v0[0], null, (null === _v0[1] ? _v0[2] : _v0[1]) || {}],
    _v46 = () => {
      let _v0 = (0, _v1.useContext)(_v41);
      return (0, _v1.useMemo)(() => _v9(_v39, _v0), [_v0]);
    },
    _v47 = _v44.concat(_v0 => (_v0, _v1, _v2) => {
      let _v3 = _v1 && ((..._v0) => {
        let [_v1] = _v31(_v0),
          [,,, _v2] = _v3.get(_v37);
        if (_v1.startsWith(_v42)) return _v1(..._v0);
        let _v3 = _v2[_v1];
        return _v7(_v3) ? _v1(..._v0) : (delete _v2[_v1], _v3);
      });
      return _v0(_v0, _v3, _v2);
    });
  _v43 && (window.__SWR_DEVTOOLS_REACT__ = _v1.default), _v0.s(["subscribeCallback", 0, (_v0, _v1, _v2) => {
    let _v3 = _v1[_v0] || (_v1[_v0] = []);
    return _v3.push(_v2), () => {
      let _v0 = _v3.indexOf(_v2);
      _v0 >= 0 && (_v3[_v0] = _v3[_v3.length - 1], _v3.pop());
    };
  }, "useSWRConfig", 0, _v46, "withArgs", 0, _v0 => function (..._v0) {
    let _v1 = _v46(),
      [_v2, _v3, _v4] = _v45(_v0),
      _v5 = _v40(_v1, _v4),
      _v6 = _v0,
      {
        use: _v7
      } = _v5,
      _v8 = (_v7 || []).concat(_v47);
    for (let _v0 = _v8.length; _v0--;) _v6 = _v8[_v0](_v6);
    return _v6(_v2, _v3 || _v5.fetcher || null, _v5);
  }, "withMiddleware", 0, (_v0, _v1) => (..._v0) => {
    let [_v1, _v2, _v3] = _v45(_v0),
      _v4 = (_v3.use || []).concat(_v1);
    return _v0(_v1, _v2, {
      ..._v3,
      use: _v4
    });
  }], 0);
}