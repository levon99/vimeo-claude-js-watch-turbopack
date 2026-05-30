{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0, ..._v1) {
    let _v2 = _v0,
      _v3 = Object.assign({}, ..._v1),
      {
        variables: _v4
      } = _v3;
    _v4 && (_v2 += (0, _v4.buildQueryString)(_v4));
    let {
        accept: _v5,
        headerOverride: _v6
      } = _v3,
      {
        resourceKey: _v7
      } = _v3;
    return _v7 || (_v7 = _v2), {
      callUrl: _v2,
      resourceKey: _v7,
      accept: _v5,
      headerOverride: _v6
    };
  }
  _v0.s(["useLazyQuery", 0, function (_v0, _v1) {
    let _v2 = (0, _v1.useContext)(_v2.ViewerContext),
      _v3 = (0, _v1.useContext)(_v3.CacheContext);
    if (!_v3) throw Error("useMutation must be used within a <CacheContext.Provider />'s scope");
    let [_v4, _v5] = (0, _v5.useFetchReducer)(),
      _v6 = (0, _v1.useCallback)(async _v0 => {
        if (!_v2) return;
        let {
            callUrl: _v1,
            resourceKey: _v2,
            accept: _v3,
            headerOverride: _v4
          } = _v6(_v0, _v1 || {}, _v0 || {}),
          _v5 = _v3.get(_v2);
        if (_v5 && !_v0?.ignoreCache) return void _v5({
          type: "CACHE_HIT",
          payload: _v5
        });
        _v5({
          type: "REQUEST"
        });
        try {
          let _v0 = {
              Authorization: `jwt ${_v2.jwt}`,
              Accept: (0, _v4.buildAcceptHeader)(_v3),
              "Content-Type": "application/json",
              "Accept-Language": _v2.locale || "en",
              ...(_v4 || {})
            },
            _v1 = await fetch(`https://${_v2.apiUrl}${_v1}`, {
              method: "GET",
              headers: _v0
            }),
            _v2 = await _v1.json();
          _v3.set(_v2, _v2), _v5({
            type: "SUCCESS",
            payload: _v2
          });
        } catch (_v0) {
          _v5({
            type: "FAILURE",
            payload: _v0
          });
        }
      }, [_v0, _v1, _v2, _v5, _v3]),
      {
        resourceKey: _v7
      } = _v6(_v0, _v1 || {});
    return (0, _v1.useEffect)(() => {
      let _v0 = _v3.subscribeToKey(_v7, _v0 => {
        _v5({
          type: "CACHE_HIT",
          payload: _v0
        });
      });
      return () => {
        _v0();
      };
    }, [_v3, _v7, _v5]), [_v6, _v4];
  }]);
}