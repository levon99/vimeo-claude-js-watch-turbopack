{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["UNDEFINED", () => _v3.U], 0);
  var _v3 = _v3,
    _v4 = _v3,
    _v5 = _v3,
    _v6 = _v3,
    _v7 = _v0.i(0),
    _v8 = _v3;
  _v0.s(["SWRGlobalState", () => _v8.b], 0);
  var _v8 = _v3,
    _v9 = _v3;
  _v0.s(["serialize", () => _v9.s], 0);
  var _v9 = _v3,
    _v10 = _v3;
  _v0.s(["createCacheHelper", () => _v10.z], 0);
  var _v10 = _v3,
    _v11 = _v3;
  _v0.s(["isUndefined", () => _v11.e], 0);
  var _v11 = _v3,
    _v12 = _v3,
    _v13 = _v3,
    _v14 = _v3,
    _v15 = _v3,
    _v16 = _v3;
  _v0.s(["isFunction", () => _v16.a], 0);
  var _v16 = _v3,
    _v17 = _v0.i(0),
    _v17 = _v17,
    _v18 = _v3,
    _v19 = _v3;
  _v0.s(["useIsomorphicLayoutEffect", () => _v19.u], 0);
  var _v19 = _v3,
    _v20 = _v3,
    _v21 = _v3,
    _v22 = _v3;
  let _v23 = () => {},
    _v24 = _v23(),
    _v25 = (new WeakMap(), _v1.default.use || (_v0 => {
      switch (_v0.status) {
        case "pending":
          throw _v0;
        case "fulfilled":
          return _v0.value;
        case "rejected":
          throw _v0.reason;
        default:
          throw _v0.status = "pending", _v0.then(_v0 => {
            _v0.status = "fulfilled", _v0.value = _v0;
          }, _v0 => {
            _v0.status = "rejected", _v0.reason = _v0;
          }), _v0;
      }
    })),
    _v26 = {
      dedupe: !0
    },
    _v27 = Promise.resolve(_v3.U),
    _v28 = () => _v14.A;
  _v4.O.defineProperty(_v5.g, "defaultValue", {
    value: _v6.d
  });
  let _v29 = (0, _v7.withArgs)((_v0, _v1, _v2) => {
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
        keepPreviousData: _v12,
        strictServerPrefetchWarning: _v13
      } = _v2,
      [_v14, _v15, _v16, _v17] = _v8.b.get(_v3),
      [_v18, _v19] = (0, _v9.s)(_v0),
      _v20 = (0, _v1.useRef)(!1),
      _v21 = (0, _v1.useRef)(!1),
      _v22 = (0, _v1.useRef)(_v18),
      _v23 = (0, _v1.useRef)(_v1),
      _v24 = (0, _v1.useRef)(_v2),
      _v25 = () => _v24.current.isVisible() && _v24.current.isOnline(),
      [_v26, _v27, _v28, _v29] = (0, _v10.z)(_v3, _v18),
      _v30 = (0, _v1.useRef)({}).current,
      _v31 = (0, _v11.e)(_v6) ? (0, _v11.e)(_v2.fallback) ? _v3.U : _v2.fallback[_v18] : _v6,
      _v32 = (_v0, _v1) => {
        for (let _v0 in _v30) if ("data" === _v0) {
          if (!_v4(_v0[_v0], _v1[_v0]) && (!(0, _v11.e)(_v0[_v0]) || !_v4(_v41, _v1[_v0]))) return !1;
        } else if (_v1[_v0] !== _v0[_v0]) return !1;
        return !0;
      },
      _v33 = !_v20.current,
      _v34 = (0, _v1.useMemo)(() => {
        let _v0 = _v26(),
          _v1 = _v29(),
          _v2 = _v0 => {
            let _v1 = (0, _v22.m)(_v0);
            return (delete _v1._k, (() => {
              if (!_v18 || !_v1 || _v24.current.isPaused()) return !1;
              if (_v33 && !(0, _v11.e)(_v7)) return _v7;
              let _v0 = (0, _v11.e)(_v31) ? _v1.data : _v31;
              return (0, _v11.e)(_v0) || _v8;
            })()) ? {
              isValidating: !0,
              isLoading: !0,
              ..._v1
            } : _v1;
          },
          _v3 = _v2(_v0),
          _v4 = _v0 === _v1 ? _v3 : _v2(_v1),
          _v5 = _v3;
        return [() => {
          let _v0 = _v2(_v26());
          return _v32(_v0, _v5) ? (_v5.data = _v0.data, _v5.isLoading = _v0.isLoading, _v5.isValidating = _v0.isValidating, _v5.error = _v0.error, _v5) : (_v5 = _v0, _v0);
        }, () => _v4];
      }, [_v3, _v18]),
      _v35 = (0, _v2.useSyncExternalStore)((0, _v1.useCallback)(_v0 => _v28(_v18, (_v0, _v1) => {
        _v32(_v1, _v0) || _v0();
      }), [_v3, _v18]), _v34[0], _v34[1]),
      _v36 = _v14[_v18] && _v14[_v18].length > 0,
      _v37 = _v35.data,
      _v38 = (0, _v11.e)(_v37) ? _v31 && (0, _v12.B)(_v31) ? _v25(_v31) : _v31 : _v37,
      _v39 = _v35.error,
      _v40 = (0, _v1.useRef)(_v38),
      _v41 = _v12 ? (0, _v11.e)(_v37) ? (0, _v11.e)(_v40.current) ? _v38 : _v40.current : _v37 : _v38,
      _v42 = _v18 && (0, _v11.e)(_v38),
      _v43 = (0, _v1.useRef)(null);
    _v13.I || (0, _v2.useSyncExternalStore)(_v28, () => (_v43.current = !1, _v43), () => (_v43.current = !0, _v43));
    let _v44 = _v43.current;
    _v13 && _v44 && !_v5 && _v42 && console.warn(`Missing pre-initiated data for serialized key "${_v18}" during server-side rendering. Data fetching should be initiated on the server and provided to SWR via fallback data. You can set "strictServerPrefetchWarning: false" to disable this warning.`);
    let _v45 = !(!_v18 || !_v1 || _v24.current.isPaused()) && (!_v36 || !!(0, _v11.e)(_v39)) && (_v33 && !(0, _v11.e)(_v7) ? _v7 : _v5 ? !(0, _v11.e)(_v38) && _v8 : (0, _v11.e)(_v38) || _v8),
      _v46 = _v33 && _v45,
      _v47 = (0, _v11.e)(_v35.isValidating) ? _v46 : _v35.isValidating,
      _v48 = (0, _v11.e)(_v35.isLoading) ? _v46 : _v35.isLoading,
      _v49 = (0, _v1.useCallback)(async _v0 => {
        let _v1,
          _v2,
          _v3 = _v23.current;
        if (!_v18 || !_v3 || _v21.current || _v24.current.isPaused()) return !1;
        let _v4 = !0,
          _v5 = _v0 || {},
          _v6 = !_v16[_v18] || !_v5.dedupe,
          _v7 = () => _v21.r ? !_v21.current && _v18 === _v22.current && _v20.current : _v18 === _v22.current,
          _v8 = {
            isValidating: !1,
            isLoading: !1
          },
          _v9 = () => {
            _v27(_v8);
          },
          _v10 = () => {
            let _v0 = _v16[_v18];
            _v0 && _v0[1] === _v2 && delete _v16[_v18];
          },
          _v11 = {
            isValidating: !0
          };
        (0, _v11.e)(_v26().data) && (_v11.isLoading = !0);
        try {
          if (_v6 && (_v27(_v11), _v2.loadingTimeout && (0, _v11.e)(_v26().data) && setTimeout(() => {
            _v4 && _v7() && _v24.current.onLoadingSlow(_v18, _v2);
          }, _v2.loadingTimeout), _v16[_v18] = [_v3(_v19), (0, _v15.o)()]), [_v1, _v2] = _v16[_v18], _v1 = await _v1, _v6 && setTimeout(_v10, _v2.dedupingInterval), !_v16[_v18] || _v16[_v18][1] !== _v2) return _v6 && _v7() && _v24.current.onDiscarded(_v18), !1;
          _v8.error = _v3.U;
          let _v0 = _v15[_v18];
          if (!(0, _v11.e)(_v0) && (_v2 <= _v0[0] || _v2 <= _v0[1] || 0 === _v0[1])) return _v9(), _v6 && _v7() && _v24.current.onDiscarded(_v18), !1;
          let _v1 = _v26().data;
          _v8.data = _v4(_v1, _v1) ? _v1 : _v1, _v6 && _v7() && _v24.current.onSuccess(_v1, _v18, _v2);
        } catch (_v0) {
          _v10();
          let _v1 = _v24.current,
            {
              shouldRetryOnError: _v2
            } = _v1;
          !_v1.isPaused() && (_v8.error = _v0, _v6 && _v7() && (_v1.onError(_v0, _v18, _v1), (!0 === _v2 || (0, _v16.a)(_v2) && _v2(_v0)) && (!_v24.current.revalidateOnFocus || !_v24.current.revalidateOnReconnect || _v25()) && _v1.onErrorRetry(_v0, _v18, _v1, _v0 => {
            let _v1 = _v14[_v18];
            _v1 && _v1[0] && _v1[0](_v17.ERROR_REVALIDATE_EVENT, _v0);
          }, {
            retryCount: (_v5.retryCount || 0) + 1,
            dedupe: !0
          })));
        }
        return _v4 = !1, _v9(), !0;
      }, [_v18, _v3]),
      _v50 = (0, _v1.useCallback)((..._v0) => (0, _v18.n)(_v3, _v22.current, ..._v0), []);
    if ((0, _v19.u)(() => {
      _v23.current = _v1, _v24.current = _v2, (0, _v11.e)(_v37) || (_v40.current = _v37);
    }), (0, _v19.u)(() => {
      if (!_v18) return;
      let _v0 = _v49.bind(_v3.U, _v26),
        _v1 = 0;
      _v24.current.revalidateOnFocus && (_v1 = Date.now() + _v24.current.focusThrottleInterval);
      let _v2 = (0, _v7.subscribeCallback)(_v18, _v14, (_v0, _v1 = {}) => {
        if (_v0 == _v17.FOCUS_EVENT) {
          let _v0 = Date.now();
          _v24.current.revalidateOnFocus && _v0 > _v1 && _v25() && (_v1 = _v0 + _v24.current.focusThrottleInterval, _v0());
        } else if (_v0 == _v17.RECONNECT_EVENT) _v24.current.revalidateOnReconnect && _v25() && _v0();else if (_v0 == _v17.MUTATE_EVENT) return _v49();else if (_v0 == _v17.ERROR_REVALIDATE_EVENT) return _v49(_v1);
      });
      return _v21.current = !1, _v22.current = _v18, _v20.current = !0, _v27({
        _k: _v19
      }), _v45 && !_v16[_v18] && ((0, _v11.e)(_v38) || _v13.I ? _v0() : (0, _v20.t)(_v0)), () => {
        _v21.current = !0, _v2();
      };
    }, [_v18]), (0, _v19.u)(() => {
      let _v0;
      function _v1() {
        let _v0 = (0, _v16.a)(_v9) ? _v9(_v26().data) : _v9;
        _v0 && -1 !== _v0 && (_v0 = setTimeout(_v2, _v0));
      }
      function _v2() {
        !_v26().error && (_v10 || _v24.current.isVisible()) && (_v11 || _v24.current.isOnline()) ? _v49(_v26).then(_v1) : _v1();
      }
      return _v1(), () => {
        _v0 && (clearTimeout(_v0), _v0 = -1);
      };
    }, [_v9, _v10, _v11, _v18]), (0, _v1.useDebugValue)(_v41), _v5) {
      if (!_v21.r && _v13.I && _v42) throw Error("Fallback data is required when using Suspense in SSR.");
      _v42 && (_v23.current = _v1, _v24.current = _v2, _v21.current = !1);
      let _v0 = _v17[_v18];
      if (_v25(!(0, _v11.e)(_v0) && _v42 ? _v50(_v0) : _v27), !(0, _v11.e)(_v39) && _v42) throw _v39;
      let _v1 = _v42 ? _v49(_v26) : _v27;
      !(0, _v11.e)(_v41) && _v42 && (_v1.status = "fulfilled", _v1.value = !0), _v25(_v1);
    }
    return {
      mutate: _v50,
      get data() {
        return _v30.data = !0, _v41;
      },
      get error() {
        return _v30.error = !0, _v39;
      },
      get isValidating() {
        return _v30.isValidating = !0, _v47;
      },
      get isLoading() {
        return _v30.isLoading = !0, _v48;
      }
    };
  });
  _v0.s(["default", 0, _v29], 0);
}