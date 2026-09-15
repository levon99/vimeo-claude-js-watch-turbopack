{
  !function () {
    "use strict";

    var _v0 = {}.hasOwnProperty;
    function _v1() {
      for (var _v0 = "", _v1 = 0; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        _v2 && (_v0 = _v2(_v0, function (_v0) {
          if ("string" == typeof _v0 || "number" == typeof _v0) return _v0;
          if ("object" != typeof _v0) return "";
          if (Array.isArray(_v0)) return _v1.apply(null, _v0);
          if (_v0.toString !== Object.prototype.toString && !_v0.toString.toString().includes("[native code]")) return _v0.toString();
          var _v1 = "";
          for (var _v2 in _v0) _v0.call(_v0, _v2) && _v0[_v2] && (_v1 = _v2(_v1, _v2));
          return _v1;
        }(_v2)));
      }
      return _v0;
    }
    function _v2(_v0, _v1) {
      return _v1 ? _v0 ? _v0 + " " + _v1 : _v0 + _v1 : _v0;
    }
    if (_v1.exports) _v1.default = _v1, _v1.exports = _v1;else if ("function" == typeof define && "object" == typeof define.amd && define.amd) void 0 !== _v1 && _v0.v(_v1);else window.classNames = _v1;
  }();
}