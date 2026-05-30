{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    default: function () {
      return _v6;
    },
    getProperError: function () {
      return _v7;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0);
  function _v6(_v0) {
    return "object" == typeof _v0 && null !== _v0 && "name" in _v0 && "message" in _v0;
  }
  function _v7(_v0) {
    let _v1;
    return _v6(_v0) ? _v0 : Object.defineProperty(Error((0, _v5.isPlainObject)(_v0) ? (_v1 = new WeakSet(), JSON.stringify(_v0, (_v0, _v1) => {
      if ("object" == typeof _v1 && null !== _v1) {
        if (_v1.has(_v1)) return "[Circular]";
        _v1.add(_v1);
      }
      return _v1;
    })) : _v0 + ""), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
  }
}