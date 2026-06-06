{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useQuery", 0, function (_v0, _v1 = {}) {
    let _v2 = (0, _v1.useContext)(_v2.ViewerContext),
      _v3 = (0, _v1.useContext)(_v3.CacheContext),
      _v4 = (0, _v5.usePage)();
    if (!_v3) throw Error("useQuery must be used within a <CacheContext.Provider />'s scope");
    let _v5 = (0, _v1.useRef)(_v1.accept),
      _v6 = _v1.variables ? _v0 + (0, _v4.buildQueryString)(_v1.variables) : _v0,
      _v7 = _v1.resourceKey || _v6,
      [_v8, _v9] = (0, _v6.useFetchReducer)(),
      _v10 = (0, _v1.useCallback)(async _v0 => {
        if (!_v2) throw Error("Cannot make requests without a viewer object.");
        let _v1 = await fetch(`https://${_v2.apiUrl}${_v0}`, {
          method: "GET",
          headers: {
            Authorization: `jwt ${_v2.jwt}`,
            Accept: (0, _v4.buildAcceptHeader)(_v5.current),
            "Content-Type": "application/json",
            "Vimeo-Page": _v4,
            "Accept-Language": _v2.locale
          }
        });
        return await _v1.json();
      }, [_v2, _v4]);
    (0, _v1.useEffect)(() => {
      let _v0 = !1;
      return async function () {
        if (!_v3) throw Error("useQuery must be used within a <CacheContext.Provider />'s scope");
        let _v0 = _v3.get(_v7);
        if (_v0) return _v9({
          type: "CACHE_HIT",
          payload: _v0
        });
        _v9({
          type: "REQUEST"
        });
        try {
          let _v0 = await _v10(_v6);
          _v3.set(_v7, _v0), _v0 || _v9({
            type: "SUCCESS",
            payload: _v0
          });
        } catch (_v0) {
          _v0 || _v9({
            type: "FAILURE",
            payload: _v0
          });
        }
      }(), () => {
        _v0 = !0;
      };
    }, [_v9, _v10, _v7, _v6, _v3]), (0, _v1.useEffect)(() => {
      let _v0 = _v3.subscribeToKey(_v7, _v0 => {
        _v9({
          type: "CACHE_HIT",
          payload: _v0
        });
      });
      return () => {
        _v0();
      };
    }, [_v7, _v3, _v9]);
    let _v11 = (0, _v1.useCallback)(async (_v0 = {}) => {
      let _v1 = {
          ..._v1,
          ..._v0
        },
        _v2 = _v1.variables ? (0, _v4.appendQueryString)(_v0, (0, _v4.buildQueryString)(_v1.variables)) : _v0,
        _v3 = _v1.resourceKey || _v2;
      _v9({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v10(_v2);
        _v3.set(_v3, _v0), _v9({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v9({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v9, _v10, _v1, _v0, _v3]);
    return {
      ..._v8,
      refetch: _v11
    };
  }]);
}