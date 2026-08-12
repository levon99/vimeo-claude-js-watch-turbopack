{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.camelCase = void 0;
  var _v3 = /^--[a-zA-Z0-9_-]+$/,
    _v4 = /-([a-z])/g,
    _v5 = /^[^-]+$/,
    _v6 = /^-(webkit|moz|ms|o|khtml)-/,
    _v7 = /^-(ms)-/,
    _v8 = function (_v0, _v1) {
      return _v1.toUpperCase();
    },
    _v9 = function (_v0, _v1) {
      return "".concat(_v1, "-");
    };
  _v2.camelCase = function (_v0, _v1) {
    var _v2;
    return (void 0 === _v1 && (_v1 = {}), !(_v2 = _v0) || _v5.test(_v2) || _v3.test(_v2)) ? _v0 : (_v0 = _v0.toLowerCase(), (_v0 = _v1.reactCompat ? _v0.replace(_v7, _v9) : _v0.replace(_v6, _v9)).replace(_v4, _v8));
  };
}