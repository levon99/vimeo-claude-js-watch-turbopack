{
  "use strict";

  _v1.exports = function _v0(_v1, _v2) {
    if (_v1 === _v2) return !0;
    if (_v1 && _v2 && "object" == typeof _v1 && "object" == typeof _v2) {
      if (_v1.constructor !== _v2.constructor) return !1;
      if (Array.isArray(_v1)) {
        if ((_v3 = _v1.length) != _v2.length) return !1;
        for (_v4 = _v3; 0 != _v4--;) if (!_v0(_v1[_v4], _v2[_v4])) return !1;
        return !0;
      }
      if (_v1.constructor === RegExp) return _v1.source === _v2.source && _v1.flags === _v2.flags;
      if (_v1.valueOf !== Object.prototype.valueOf) return _v1.valueOf() === _v2.valueOf();
      if (_v1.toString !== Object.prototype.toString) return _v1.toString() === _v2.toString();
      if ((_v3 = (_v5 = Object.keys(_v1)).length) !== Object.keys(_v2).length) return !1;
      for (_v4 = _v3; 0 != _v4--;) if (!Object.prototype.hasOwnProperty.call(_v2, _v5[_v4])) return !1;
      for (_v4 = _v3; 0 != _v4--;) {
        var _v3,
          _v4,
          _v5,
          _v6 = _v5[_v4];
        if (!_v0(_v1[_v6], _v2[_v6])) return !1;
      }
      return !0;
    }
    return _v1 != _v1 && _v2 != _v2;
  };
}