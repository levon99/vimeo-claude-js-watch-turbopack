{
  "use strict";

  var _v3 = _v0.e && _v0.e.__importDefault || function (_v0) {
    return _v0 && _v0.__esModule ? _v0 : {
      default: _v0
    };
  };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.default = function (_v0) {
    if ("string" != typeof _v0) throw TypeError("First argument must be a string");
    if (!_v0) return [];
    var _v1 = _v6.exec(_v0),
      _v2 = _v1 ? _v1[1] : void 0;
    return (0, _v5.formatDOM)((0, _v4.default)(_v0), null, _v2);
  };
  var _v4 = _v3(_v0.r(0)),
    _v5 = _v0.r(0),
    _v6 = /<(![a-zA-Z\s]+)>/;
}