{
  "use strict";

  function _v3(_v0) {
    return (_v3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (_v0) {
      return typeof _v0;
    } : function (_v0) {
      return _v0 && "function" == typeof Symbol && _v0.constructor === Symbol && _v0 !== Symbol.prototype ? "symbol" : typeof _v0;
    })(_v0);
  }
  function _v4() {
    if ("function" != typeof WeakMap) return null;
    var _v0 = new WeakMap();
    return _v4 = function () {
      return _v0;
    }, _v0;
  }
  function _v5(_v0) {
    if (_v0 && _v0.__esModule) return _v0;
    if (null === _v0 || "object" !== _v3(_v0) && "function" != typeof _v0) return {
      default: _v0
    };
    var _v1 = _v4();
    if (_v1 && _v1.has(_v0)) return _v1.get(_v0);
    var _v2 = {},
      _v3 = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var _v4 in _v0) if (Object.prototype.hasOwnProperty.call(_v0, _v4)) {
      var _v5 = _v3 ? Object.getOwnPropertyDescriptor(_v0, _v4) : null;
      _v5 && (_v5.get || _v5.set) ? Object.defineProperty(_v2, _v4, _v5) : _v2[_v4] = _v0[_v4];
    }
    return _v2.default = _v0, _v1 && _v1.set(_v0, _v2), _v2;
  }
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.GoogleTagManager = _v2.FatalAttraction = void 0, _v2.FatalAttraction = _v5(_v0.r(0)), _v2.GoogleTagManager = _v5(_v0.r(0));
}