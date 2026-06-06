{
  var _v3 = "u" > typeof Element,
    _v4 = "function" == typeof Map,
    _v5 = "function" == typeof Set,
    _v6 = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
  _v1.exports = function (_v0, _v1) {
    try {
      return function _v0(_v1, _v2) {
        if (_v1 === _v2) return !0;
        if (_v1 && _v2 && "object" == typeof _v1 && "object" == typeof _v2) {
          var _v3, _v4, _v5, _v6;
          if (_v1.constructor !== _v2.constructor) return !1;
          if (Array.isArray(_v1)) {
            if ((_v3 = _v1.length) != _v2.length) return !1;
            for (_v4 = _v3; 0 != _v4--;) if (!_v0(_v1[_v4], _v2[_v4])) return !1;
            return !0;
          }
          if (_v4 && _v1 instanceof Map && _v2 instanceof Map) {
            if (_v1.size !== _v2.size) return !1;
            for (_v6 = _v1.entries(); !(_v4 = _v6.next()).done;) if (!_v2.has(_v4.value[0])) return !1;
            for (_v6 = _v1.entries(); !(_v4 = _v6.next()).done;) if (!_v0(_v4.value[1], _v2.get(_v4.value[0]))) return !1;
            return !0;
          }
          if (_v5 && _v1 instanceof Set && _v2 instanceof Set) {
            if (_v1.size !== _v2.size) return !1;
            for (_v6 = _v1.entries(); !(_v4 = _v6.next()).done;) if (!_v2.has(_v4.value[0])) return !1;
            return !0;
          }
          if (_v6 && ArrayBuffer.isView(_v1) && ArrayBuffer.isView(_v2)) {
            if ((_v3 = _v1.length) != _v2.length) return !1;
            for (_v4 = _v3; 0 != _v4--;) if (_v1[_v4] !== _v2[_v4]) return !1;
            return !0;
          }
          if (_v1.constructor === RegExp) return _v1.source === _v2.source && _v1.flags === _v2.flags;
          if (_v1.valueOf !== Object.prototype.valueOf && "function" == typeof _v1.valueOf && "function" == typeof _v2.valueOf) return _v1.valueOf() === _v2.valueOf();
          if (_v1.toString !== Object.prototype.toString && "function" == typeof _v1.toString && "function" == typeof _v2.toString) return _v1.toString() === _v2.toString();
          if ((_v3 = (_v5 = Object.keys(_v1)).length) !== Object.keys(_v2).length) return !1;
          for (_v4 = _v3; 0 != _v4--;) if (!Object.prototype.hasOwnProperty.call(_v2, _v5[_v4])) return !1;
          if (_v3 && _v1 instanceof Element) return !1;
          for (_v4 = _v3; 0 != _v4--;) if (("_owner" !== _v5[_v4] && "__v" !== _v5[_v4] && "__o" !== _v5[_v4] || !_v1.$$typeof) && !_v0(_v1[_v5[_v4]], _v2[_v5[_v4]])) return !1;
          return !0;
        }
        return _v1 != _v1 && _v2 != _v2;
      }(_v0, _v1);
    } catch (_v0) {
      if ((_v0.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw _v0;
    }
  };
}