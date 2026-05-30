{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    assign: function () {
      return _v8;
    },
    searchParamsToUrlQuery: function () {
      return _v5;
    },
    urlQueryToSearchParams: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  function _v5(_v0) {
    let _v1 = {};
    for (let [_v0, _v1] of _v0.entries()) {
      let _v0 = _v1[_v0];
      void 0 === _v0 ? _v1[_v0] = _v1 : Array.isArray(_v0) ? _v0.push(_v1) : _v1[_v0] = [_v0, _v1];
    }
    return _v1;
  }
  function _v6(_v0) {
    return "string" == typeof _v0 ? _v0 : ("number" != typeof _v0 || isNaN(_v0)) && "boolean" != typeof _v0 ? "" : String(_v0);
  }
  function _v7(_v0) {
    let _v1 = new URLSearchParams();
    for (let [_v0, _v1] of Object.entries(_v0)) if (Array.isArray(_v1)) for (let _v0 of _v1) _v1.append(_v0, _v6(_v0));else _v1.set(_v0, _v6(_v1));
    return _v1;
  }
  function _v8(_v0, ..._v1) {
    for (let _v0 of _v1) {
      for (let _v0 of _v0.keys()) _v0.delete(_v0);
      for (let [_v0, _v1] of _v0.entries()) _v0.append(_v0, _v1);
    }
    return _v0;
  }
}