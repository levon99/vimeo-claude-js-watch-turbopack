{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), Object.defineProperty(_v2, "removeLocale", {
    enumerable: !0,
    get: function () {
      return _v4;
    }
  });
  let _v3 = _v0.r(0);
  function _v4(_v0, _v1) {
    {
      let {
          pathname: _v0
        } = (0, _v3.parsePath)(_v0),
        _v1 = _v0.toLowerCase(),
        _v2 = _v1?.toLowerCase();
      return _v1 && (_v1.startsWith(`/${_v2}/`) || _v1 === `/${_v2}`) ? `${_v0.length === _v1.length + 1 ? "/" : ""}${_v0.slice(_v1.length + 1)}` : _v0;
    }
  }
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}