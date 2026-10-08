{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.dontSetMe = function (_v0, _v1, _v2) {
    if (_v0[_v1]) return Error(`Invalid prop ${_v1} passed to ${_v2} - do not set this, set it on the child.`);
  }, _v2.findInArray = function (_v0, _v1) {
    for (let _v0 = 0, _v1 = _v0.length; _v0 < _v1; _v0++) if (_v1.apply(_v1, [_v0[_v0], _v0, _v0])) return _v0[_v0];
  }, _v2.int = function (_v0) {
    return parseInt(_v0, 10);
  }, _v2.isFunction = function (_v0) {
    return "function" == typeof _v0 || "[object Function]" === Object.prototype.toString.call(_v0);
  }, _v2.isNum = function (_v0) {
    return "number" == typeof _v0 && !isNaN(_v0);
  };
}