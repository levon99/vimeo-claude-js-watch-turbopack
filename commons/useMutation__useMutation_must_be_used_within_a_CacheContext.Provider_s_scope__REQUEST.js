{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useMutation", 0, function (_v0, {
    resourceKey: _v1 = _v0,
    ..._v2
  } = {}) {
    let _v3 = (0, _v1.useContext)(_v2.ViewerContext),
      _v4 = (0, _v1.useContext)(_v3.CacheContext),
      _v5 = (0, _v5.usePage)();
    if (!_v4) throw Error("useMutation must be used within a <CacheContext.Provider />'s scope");
    let _v6 = _v4.get(_v1) || null,
      [_v7, _v8] = (0, _v6.useFetchReducer)(_v6),
      _v9 = (0, _v1.useCallback)(async function (_v0, _v1, _v2, _v3, _v4, _v5) {
        _v0({
          type: "REQUEST"
        });
        try {
          let _v0 = await fetch(`//${_v2}`, function ({
              variables: _v0,
              accept: _v1
            }, _v2, _v3, _v4) {
              try {
                return {
                  method: _v2,
                  body: JSON.stringify(_v0),
                  headers: {
                    Authorization: `jwt ${_v3}`,
                    Accept: (0, _v4.buildAcceptHeader)(_v1 || _v2.accept),
                    "Content-Type": "application/json",
                    "Vimeo-Page": _v5,
                    "Accept-Language": _v3?.locale || "en"
                  }
                };
              } catch (_v0) {
                _v4({
                  type: "FAILURE",
                  payload: _v0
                });
              }
            }(_v1, _v5, _v4, _v0)),
            _v1 = await _v0.json();
          _v4.set(_v3, _v1), _v0({
            type: "SUCCESS",
            payload: _v1
          });
        } catch (_v0) {
          _v0({
            type: "FAILURE",
            payload: _v0
          });
        }
      }, [_v2, _v4, _v5]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        if (!_v3) throw _v4.noViewerError;
        _v9(_v8, _v0, _v3.apiUrl + _v0, _v1, _v3.jwt, "PATCH");
      }, [_v0, _v3, _v1, _v9, _v8]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        if (!_v3) throw _v4.noViewerError;
        _v9(_v8, _v0, _v3.apiUrl + _v0, _v1, _v3.jwt, "PUT");
      }, [_v0, _v3, _v1, _v9, _v8]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        if (!_v3) throw _v4.noViewerError;
        _v9(_v8, _v0, _v3.apiUrl + _v0, _v1, _v3.jwt, "POST");
      }, [_v0, _v3, _v1, _v9, _v8]);
    return [{
      destroy: (0, _v1.useCallback)(() => {
        !async function () {
          if (!_v3) throw _v4.noViewerError;
          if (!_v4) throw Error("useMutation must be used within a <CacheContext.Provider />'s scope");
          if (!_v1) throw Error(`Invalid resourceKey for ${_v0}`);
          _v8({
            type: "REQUEST"
          });
          try {
            await fetch(`//${_v3.apiUrl}${_v0}`, {
              method: "DELETE",
              headers: {
                Authorization: `jwt ${_v3.jwt}`,
                "Content-Type": "application/json"
              }
            }), _v4.delete(_v1), _v8({
              type: "SUCCESS",
              payload: null
            });
          } catch (_v0) {
            _v8({
              type: "FAILURE",
              payload: _v0
            });
          }
        }();
      }, [_v0, _v3, _v1, _v8, _v4]),
      patch: _v10,
      post: _v12,
      put: _v11
    }, _v7];
  }]);
}