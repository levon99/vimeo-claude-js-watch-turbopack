{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.mapKeysDeep = void 0;
  var _v3 = _v6(_v0.r(0)),
    _v4 = _v6(_v0.r(0)),
    _v5 = _v6(_v0.r(0));
  function _v6(_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  }
  _v2.mapKeysDeep = function _v0(_v1, _v2) {
    return Array.isArray(_v1) ? _v1.map(function (_v0) {
      return _v0(_v0, _v2);
    }) : (0, _v3.default)(_v1) ? (0, _v5.default)((0, _v4.default)(_v1, _v2), function (_v0) {
      return (0, _v3.default)(_v0) ? _v0(_v0, _v2) : _v0;
    }) : _v1;
  };
}