{
  "use strict";

  _v0.s(["clamp", 0, function (_v0, _v1) {
    var _v2 = void 0 === _v1 ? {
        min: 0,
        max: 0
      } : _v1,
      _v3 = _v2.min,
      _v4 = _v2.max;
    return Math.min(Math.max(_v0, void 0 === _v3 ? 0 : _v3), void 0 === _v4 ? 0 : _v4);
  }]);
}