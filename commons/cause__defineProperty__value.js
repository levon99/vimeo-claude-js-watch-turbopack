{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = {
    isRecoverableError: function () {
      return _v10;
    },
    onRecoverableError: function () {
      return _v11;
    }
  };
  for (var _v4 in _v3) Object.defineProperty(_v2, _v4, {
    enumerable: !0,
    get: _v3[_v4]
  });
  let _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v5._(_v0.r(0)),
    _v8 = _v0.r(0),
    _v9 = new WeakSet();
  function _v10(_v0) {
    return _v9.has(_v0);
  }
  let _v11 = _v0 => {
    let _v1 = (0, _v7.default)(_v0) && "cause" in _v0 ? _v0.cause : _v0;
    (0, _v6.isBailoutToCSRError)(_v1) || (0, _v8.reportGlobalError)(_v1);
  };
  ("function" == typeof _v2.default || "object" == typeof _v2.default && null !== _v2.default) && void 0 === _v2.default.__esModule && (Object.defineProperty(_v2.default, "__esModule", {
    value: !0
  }), Object.assign(_v2.default, _v2), _v1.exports = _v2.default);
}