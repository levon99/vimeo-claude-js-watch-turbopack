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
    _v10 = _v0 => "function" == typeof _v0,
    _v11 = (_v0, _v1) => ({
      ..._v0,
      ..._v1
    }),
    _v12 = "undefined",
    _v13 = typeof window != _v12,
    _v14 = typeof document != _v12,
    _v15 = (_v0, _v1) => {
      let _v2 = _v3.get(_v0);
      return [() => !_v9(_v1) && _v0.get(_v1) || _v4, _v0 => {
        if (!_v9(_v1)) {
          let _v0 = _v0.get(_v1);
          _v1 in _v5 || (_v5[_v1] = _v0), _v2[5](_v1, _v11(_v0, _v0), _v0 || _v4);
        }
      }, _v2[6], () => !_v9(_v1) && _v1 in _v5 ? _v5[_v1] : !_v9(_v1) && _v0.get(_v1) || _v4];
    },
    _v16 = new WeakMap(),
    _v17 = 0,
    _v18 = _v0 => {
      let _v1,
        _v2,
        _v3 = typeof _v0,
        _v4 = _v0 && _v0.constructor,
        _v5 = _v4 == Date;
      if (_v8(_v0) !== _v0 || _v5 || _v4 == RegExp) _v1 = _v5 ? _v0.toJSON() : "symbol" == _v3 ? _v0.toString() : "string" == _v3 ? JSON.stringify(_v0) : "" + _v0;else {
        if (_v1 = _v16.get(_v0)) return _v1;
        if (_v1 = ++_v17 + "~", _v16.set(_v0, _v1), _v4 == Array) {
          for (_v2 = 0, _v1 = "@"; _v2 < _v0.length; _v2++) _v1 += _v18(_v0[_v2]) + ",";
          _v16.set(_v0, _v1);
        }
        if (_v4 == _v8) {
          _v1 = "#";
          let _v0 = _v8.keys(_v0).sort();
          for (; !_v9(_v2 = _v0.pop());) _v9(_v0[_v2]) || (_v1 += _v2 + ":" + _v18(_v0[_v2]) + ",");
          _v16.set(_v0, _v1);
        }
      }
      return _v1;
    },
    _v19 = !0,
    [_v20, _v21] = _v13 && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [_v6, _v6],
    _v22 = {
      initFocus: _v0 => (_v14 && document.addEventListener("visibilitychange", _v0), _v20("focus", _v0), () => {
        _v14 && document.removeEventListener("visibilitychange", _v0), _v21("focus", _v0);
      }),
      initReconnect: _v0 => {
        let _v1 = () => {
            _v19 = !0, _v0();
          },
          _v2 = () => {
            _v19 = !1;
          };
        return _v20("online", _v1), _v20("offline", _v2), () => {
          _v21("online", _v1), _v21("offline", _v2);
        };
      }
    },
    _v23 = !_v1.default.useId,
    _v24 = !_v13 || "Deno" in window,
    _v25 = _v0 => _v13 && typeof window.requestAnimationFrame != _v12 ? window.requestAnimationFrame(_v0) : setTimeout(_v0, 1),
    _v26 = _v24 ? _v1.useEffect : _v1.useLayoutEffect,
    _v27 = "u" > typeof navigator && navigator.connection,
    _v28 = !_v24 && _v27 && (["slow-2g", "2g"].includes(_v27.effectiveType) || _v27.saveData),
    _v29 = _v0 => {
      if (_v10(_v0)) try {
        _v0 = _v0();
      } catch (_v0) {
        _v0 = "";
      }
      let _v1 = _v0;
      return [_v0 = "string" == typeof _v0 ? _v0 : (Array.isArray(_v0) ? _v0.length : _v0) ? _v18(_v0) : "", _v1];
    },
    _v30 = 0,
    _v31 = () => ++_v30;
  var _v32 = {
    __proto__: null,
    ERROR_REVALIDATE_EVENT: 3,
    FOCUS_EVENT: 0,
    MUTATE_EVENT: 2,
    RECONNECT_EVENT: 1
  };
  async function _v33(..._v0) {
    let [_v1, _v2, _v3, _v4] = _v0,
      _v5 = _v11({
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
    if (_v10(_v2)) {
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
        [_v2] = _v29(_v0);
      if (!_v2) return;
      let [_v3, _v4] = _v15(_v1, _v2),
        [_v5, _v6, _v7] = _v3.get(_v1),
        _v8 = _v5[_v2],
        _v9 = () => _v9 && (delete _v7[_v2], _v8 && _v8[0]) ? _v8[0](2).then(() => _v3().data) : _v3().data;
      if (_v0.length < 3) return _v9();
      let _v10 = _v3,
        _v11 = _v31();
      _v6[_v2] = [_v11, 0];
      let _v12 = !_v9(_v8),
        _v13 = _v3(),
        _v14 = _v13.data,
        _v15 = _v13._c,
        _v16 = _v9(_v15) ? _v14 : _v15;
      if (_v12 && _v4({
        data: _v8 = _v10(_v8) ? _v8(_v16) : _v8,
        _c: _v16
      }), _v10(_v10)) try {
        _v10 = _v10(_v16);
      } catch (_v0) {
        _v1 = _v0;
      }
      if (_v10 && _v10(_v10.then)) {
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
      _v6 && !_v1 && (_v10(_v6) && (_v10 = _v6(_v10, _v16)), _v4({
        data: _v10,
        _c: _v7
      })), _v6[_v2][1] = _v31();
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
  let _v34 = (_v0, _v1) => {
      for (let _v0 in _v0) _v0[_v0][0] && _v0[_v0][0](_v1);
    },
    _v35 = (_v0, _v1) => {
      if (!_v3.has(_v0)) {
        let _v0 = _v11(_v22, _v1),
          _v1 = {},
          _v2 = _v33.bind(_v7, _v0),
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
            if (!_v3.has(_v0) && (_v3.set(_v0, [_v1, {}, {}, {}, _v2, _v6, _v5]), !_v24)) {
              let _v0 = _v0.initFocus(setTimeout.bind(_v7, _v34.bind(_v7, _v1, 0))),
                _v1 = _v0.initReconnect(setTimeout.bind(_v7, _v34.bind(_v7, _v1, 1)));
              _v3 = () => {
                _v0 && _v0(), _v1 && _v1(), _v3.delete(_v0);
              };
            }
          };
        return _v7(), [_v0, _v2, _v7, _v3];
      }
      return [_v0, _v3.get(_v0)[4]];
    },
    [_v36, _v37] = _v35(new Map()),
    _v38 = _v11({
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
      errorRetryInterval: _v28 ? 0 : 0,
      focusThrottleInterval: 0,
      dedupingInterval: 0,
      loadingTimeout: _v28 ? 0 : 0,
      compare: (_v0, _v1) => _v18(_v0) == _v18(_v1),
      isPaused: () => !1,
      cache: _v36,
      mutate: _v37,
      fallback: {}
    }, {
      isOnline: () => _v19,
      isVisible: () => {
        let _v0 = _v14 && document.visibilityState;
        return _v9(_v0) || "hidden" !== _v0;
      }
    }),
    _v39 = (_v0, _v1) => {
      let _v2 = _v11(_v0, _v1);
      if (_v1) {
        let {
            use: _v0,
            fallback: _v1
          } = _v0,
          {
            use: _v2,
            fallback: _v3
          } = _v1;
        _v0 && _v2 && (_v2.use = _v0.concat(_v2)), _v1 && _v3 && (_v2.fallback = _v11(_v1, _v3));
      }
      return _v2;
    },
    _v40 = (0, _v1.createContext)({}),
    _v41 = _v0 => {
      let {
          value: _v1
        } = _v0,
        _v2 = (0, _v1.useContext)(_v40),
        _v3 = _v10(_v1),
        _v4 = (0, _v1.useMemo)(() => _v3 ? _v1(_v2) : _v1, [_v3, _v2, _v1]),
        _v5 = (0, _v1.useMemo)(() => _v3 ? _v4 : _v39(_v2, _v4), [_v3, _v2, _v4]),
        _v6 = _v4 && _v4.provider,
        _v7 = (0, _v1.useRef)(_v7);
      _v6 && !_v7.current && (_v7.current = _v35(_v6(_v5.cache || _v36), _v4));
      let _v8 = _v7.current;
      return _v8 && (_v5.cache = _v8[0], _v5.mutate = _v8[1]), _v26(() => {
        if (_v8) return _v8[2] && _v8[2](), _v8[3];
      }, []), (0, _v1.createElement)(_v40.Provider, _v11(_v0, {
        value: _v5
      }));
    },
    _v42 = _v13 && window.__SWR_DEVTOOLS_USE__,
    _v43 = _v42 ? window.__SWR_DEVTOOLS_USE__ : [],
    _v44 = () => _v11(_v38, (0, _v1.useContext)(_v40)),
    _v45 = _v43.concat(_v0 => (_v0, _v1, _v2) => {
      let _v3 = _v1 && ((..._v0) => {
        let [_v1] = _v29(_v0),
          [,,, _v2] = _v3.get(_v36),
          _v3 = _v2[_v1];
        return _v3 ? (delete _v2[_v1], _v3) : _v1(..._v0);
      });
      return _v0(_v0, _v3, _v2);
    }),
    _v46 = _v0 => function (..._v0) {
      let _v1 = _v44(),
        [_v2, _v3, _v4] = _v10(_v0[1]) ? [_v0[0], _v0[1], _v0[2] || {}] : [_v0[0], null, (null === _v0[1] ? _v0[2] : _v0[1]) || {}],
        _v5 = _v39(_v1, _v4),
        _v6 = _v0,
        {
          use: _v7
        } = _v5,
        _v8 = (_v7 || []).concat(_v45);
      for (let _v0 = _v8.length; _v0--;) _v6 = _v8[_v0](_v6);
      return _v6(_v2, _v3 || _v5.fetcher || null, _v5);
    },
    _v47 = (_v0, _v1, _v2) => {
      let _v3 = _v1[_v0] || (_v1[_v0] = []);
      return _v3.push(_v2), () => {
        let _v0 = _v3.indexOf(_v2);
        _v0 >= 0 && (_v3[_v0] = _v3[_v3.length - 1], _v3.pop());
      };
    };
  _v42 && (window.__SWR_DEVTOOLS_REACT__ = _v1.default), _v0.s(["IS_REACT_LEGACY", 0, _v23, "IS_SERVER", 0, _v24, "OBJECT", 0, _v8, "SWRConfig", 0, _v41, "SWRGlobalState", 0, _v3, "UNDEFINED", 0, _v7, "createCacheHelper", 0, _v15, "defaultConfig", 0, _v38, "getTimestamp", 0, _v31, "internalMutate", 0, _v33, "isFunction", 0, _v10, "isUndefined", 0, _v9, "mergeObjects", 0, _v11, "rAF", 0, _v25, "revalidateEvents", 0, _v32, "serialize", 0, _v29, "subscribeCallback", 0, _v47, "useIsomorphicLayoutEffect", 0, _v26, "useSWRConfig", 0, _v44, "withArgs", 0, _v46], 0);
  let _v48 = {
      dedupe: !0
    },
    _v49 = _v8.defineProperty(_v41, "defaultValue", {
      value: _v38
    });
  _v46((_v0, _v1, _v2) => {
    let {
        cache: _v3,
        compare: _v4,
        suspense: _v5,
        fallbackData: _v6,
        revalidateOnMount: _v7,
        revalidateIfStale: _v8,
        refreshInterval: _v9,
        refreshWhenHidden: _v10,
        refreshWhenOffline: _v11,
        keepPreviousData: _v12
      } = _v2,
      [_v13, _v14, _v15] = _v3.get(_v3),
      [_v16, _v17] = _v29(_v0),
      _v18 = (0, _v1.useRef)(!1),
      _v19 = (0, _v1.useRef)(!1),
      _v20 = (0, _v1.useRef)(_v16),
      _v21 = (0, _v1.useRef)(_v1),
      _v22 = (0, _v1.useRef)(_v2),
      _v23 = () => _v22.current.isVisible() && _v22.current.isOnline(),
      [_v24, _v25, _v26, _v27] = _v15(_v3, _v16),
      _v28 = (0, _v1.useRef)({}).current,
      _v29 = _v9(_v6) ? _v2.fallback[_v16] : _v6,
      _v30 = (_v0, _v1) => {
        for (let _v0 in _v28) if ("data" === _v0) {
          if (!_v4(_v0[_v0], _v1[_v0]) && (!_v9(_v0[_v0]) || !_v4(_v39, _v1[_v0]))) return !1;
        } else if (_v1[_v0] !== _v0[_v0]) return !1;
        return !0;
      },
      _v31 = (0, _v1.useMemo)(() => {
        let _v0 = !!_v16 && !!_v1 && (_v9(_v7) ? !_v22.current.isPaused() && !_v5 && (!!_v9(_v8) || _v8) : _v7),
          _v1 = _v0 => {
            let _v1 = _v11(_v0);
            return (delete _v1._k, _v0) ? {
              isValidating: !0,
              isLoading: !0,
              ..._v1
            } : _v1;
          },
          _v2 = _v24(),
          _v3 = _v27(),
          _v4 = _v1(_v2),
          _v5 = _v2 === _v3 ? _v4 : _v1(_v3),
          _v6 = _v4;
        return [() => {
          let _v0 = _v1(_v24());
          return _v30(_v0, _v6) ? (_v6.data = _v0.data, _v6.isLoading = _v0.isLoading, _v6.isValidating = _v0.isValidating, _v6.error = _v0.error, _v6) : (_v6 = _v0, _v0);
        }, () => _v5];
      }, [_v3, _v16]),
      _v32 = (0, _v2.useSyncExternalStore)((0, _v1.useCallback)(_v0 => _v26(_v16, (_v0, _v1) => {
        _v30(_v1, _v0) || _v0();
      }), [_v3, _v16]), _v31[0], _v31[1]),
      _v33 = !_v18.current,
      _v34 = _v13[_v16] && _v13[_v16].length > 0,
      _v35 = _v32.data,
      _v36 = _v9(_v35) ? _v29 : _v35,
      _v37 = _v32.error,
      _v38 = (0, _v1.useRef)(_v36),
      _v39 = _v12 ? _v9(_v35) ? _v38.current : _v35 : _v36,
      _v40 = (!_v34 || !!_v9(_v37)) && (_v33 && !_v9(_v7) ? _v7 : !_v22.current.isPaused() && (_v5 ? !_v9(_v36) && _v8 : _v9(_v36) || _v8)),
      _v41 = !!(_v16 && _v1 && _v33 && _v40),
      _v42 = _v9(_v32.isValidating) ? _v41 : _v32.isValidating,
      _v43 = _v9(_v32.isLoading) ? _v41 : _v32.isLoading,
      _v44 = (0, _v1.useCallback)(async _v0 => {
        let _v1,
          _v2,
          _v3 = _v21.current;
        if (!_v16 || !_v3 || _v19.current || _v22.current.isPaused()) return !1;
        let _v4 = !0,
          _v5 = _v0 || {},
          _v6 = !_v15[_v16] || !_v5.dedupe,
          _v7 = () => _v23 ? !_v19.current && _v16 === _v20.current && _v18.current : _v16 === _v20.current,
          _v8 = {
            isValidating: !1,
            isLoading: !1
          },
          _v9 = () => {
            _v25(_v8);
          },
          _v10 = () => {
            let _v0 = _v15[_v16];
            _v0 && _v0[1] === _v2 && delete _v15[_v16];
          },
          _v11 = {
            isValidating: !0
          };
        _v9(_v24().data) && (_v11.isLoading = !0);
        try {
          if (_v6 && (_v25(_v11), _v2.loadingTimeout && _v9(_v24().data) && setTimeout(() => {
            _v4 && _v7() && _v22.current.onLoadingSlow(_v16, _v2);
          }, _v2.loadingTimeout), _v15[_v16] = [_v3(_v17), _v31()]), [_v1, _v2] = _v15[_v16], _v1 = await _v1, _v6 && setTimeout(_v10, _v2.dedupingInterval), !_v15[_v16] || _v15[_v16][1] !== _v2) return _v6 && _v7() && _v22.current.onDiscarded(_v16), !1;
          _v8.error = _v7;
          let _v0 = _v14[_v16];
          if (!_v9(_v0) && (_v2 <= _v0[0] || _v2 <= _v0[1] || 0 === _v0[1])) return _v9(), _v6 && _v7() && _v22.current.onDiscarded(_v16), !1;
          let _v1 = _v24().data;
          _v8.data = _v4(_v1, _v1) ? _v1 : _v1, _v6 && _v7() && _v22.current.onSuccess(_v1, _v16, _v2);
        } catch (_v0) {
          _v10();
          let _v1 = _v22.current,
            {
              shouldRetryOnError: _v2
            } = _v1;
          !_v1.isPaused() && (_v8.error = _v0, _v6 && _v7() && (_v1.onError(_v0, _v16, _v1), (!0 === _v2 || _v10(_v2) && _v2(_v0)) && _v23() && _v1.onErrorRetry(_v0, _v16, _v1, _v0 => {
            let _v1 = _v13[_v16];
            _v1 && _v1[0] && _v1[0](_v32.ERROR_REVALIDATE_EVENT, _v0);
          }, {
            retryCount: (_v5.retryCount || 0) + 1,
            dedupe: !0
          })));
        }
        return _v4 = !1, _v9(), !0;
      }, [_v16, _v3]),
      _v45 = (0, _v1.useCallback)((..._v0) => _v33(_v3, _v20.current, ..._v0), []);
    if (_v26(() => {
      _v21.current = _v1, _v22.current = _v2, _v9(_v35) || (_v38.current = _v35);
    }), _v26(() => {
      if (!_v16) return;
      let _v0 = _v44.bind(_v7, _v48),
        _v1 = 0,
        _v2 = _v47(_v16, _v13, (_v0, _v1 = {}) => {
          if (_v0 == _v32.FOCUS_EVENT) {
            let _v0 = Date.now();
            _v22.current.revalidateOnFocus && _v0 > _v1 && _v23() && (_v1 = _v0 + _v22.current.focusThrottleInterval, _v0());
          } else if (_v0 == _v32.RECONNECT_EVENT) _v22.current.revalidateOnReconnect && _v23() && _v0();else if (_v0 == _v32.MUTATE_EVENT) return _v44();else if (_v0 == _v32.ERROR_REVALIDATE_EVENT) return _v44(_v1);
        });
      return _v19.current = !1, _v20.current = _v16, _v18.current = !0, _v25({
        _k: _v17
      }), _v40 && (_v9(_v36) || _v24 ? _v0() : _v25(_v0)), () => {
        _v19.current = !0, _v2();
      };
    }, [_v16]), _v26(() => {
      let _v0;
      function _v1() {
        let _v0 = _v10(_v9) ? _v9(_v24().data) : _v9;
        _v0 && -1 !== _v0 && (_v0 = setTimeout(_v2, _v0));
      }
      function _v2() {
        !_v24().error && (_v10 || _v22.current.isVisible()) && (_v11 || _v22.current.isOnline()) ? _v44(_v48).then(_v1) : _v1();
      }
      return _v1(), () => {
        _v0 && (clearTimeout(_v0), _v0 = -1);
      };
    }, [_v9, _v10, _v11, _v16]), (0, _v1.useDebugValue)(_v39), _v5 && _v9(_v36) && _v16) {
      if (!_v23 && _v24) throw Error("Fallback data is required when using suspense in SSR.");
      throw _v21.current = _v1, _v22.current = _v2, _v19.current = !1, _v9(_v37) ? _v44(_v48) : _v37;
    }
    return {
      mutate: _v45,
      get data() {
        return _v28.data = !0, _v39;
      },
      get error() {
        return _v28.error = !0, _v37;
      },
      get isValidating() {
        return _v28.isValidating = !0, _v42;
      },
      get isLoading() {
        return _v28.isLoading = !0, _v43;
      }
    };
  }), _v0.s(["SWRConfig", 0, _v49], 0);
}