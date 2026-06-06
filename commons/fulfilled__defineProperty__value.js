{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    NavigationPromisesContext: function () {
      return _v10;
    },
    PathParamsContext: function () {
      return _v9;
    },
    PathnameContext: function () {
      return _v8;
    },
    ReadonlyURLSearchParams: function () {
      return _v6.ReadonlyURLSearchParams;
    },
    SearchParamsContext: function () {
      return _v7;
    },
    createDevToolsInstrumentedPromise: function () {
      return _v11;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = (0, _v5.createContext)(null),
    _v8 = (0, _v5.createContext)(null),
    _v9 = (0, _v5.createContext)(null),
    _v10 = (0, _v5.createContext)(null);
  function _v11(_v0, _v1) {
    let _v2 = Promise.resolve(_v1);
    return _v2.status = "fulfilled", _v2.value = _v1, _v2.displayName = `${_v0} (SSR)`, _v2;
  }
}