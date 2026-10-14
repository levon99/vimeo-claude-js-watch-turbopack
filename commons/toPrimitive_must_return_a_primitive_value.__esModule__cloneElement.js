{
  "use strict";

  _v2.__esModule = !0, _v2.cloneElement = function (_v0, _v1) {
    return _v1.style && _v0.props.style && (_v1.style = _v6(_v6({}, _v0.props.style), _v1.style)), _v1.className && _v0.props.className && (_v1.className = `${_v0.props.className} ${_v1.className}`), _v4.default.cloneElement(_v0, _v1);
  };
  var _v3,
    _v4 = (_v3 = _v0.r(0)) && _v3.__esModule ? _v3 : {
      default: _v3
    };
  function _v5(_v0, _v1) {
    var _v2 = Object.keys(_v0);
    if (Object.getOwnPropertySymbols) {
      var _v3 = Object.getOwnPropertySymbols(_v0);
      _v1 && (_v3 = _v3.filter(function (_v0) {
        return Object.getOwnPropertyDescriptor(_v0, _v0).enumerable;
      })), _v2.push.apply(_v2, _v3);
    }
    return _v2;
  }
  function _v6(_v0) {
    for (var _v1 = 1; _v1 < arguments.length; _v1++) {
      var _v2 = null != arguments[_v1] ? arguments[_v1] : {};
      _v1 % 2 ? _v5(Object(_v2), !0).forEach(function (_v0) {
        var _v1, _v2, _v3;
        _v1 = _v0, _v2 = _v0, _v3 = _v2[_v0], (_v2 = function (_v0) {
          var _v1 = function (_v0, _v1) {
            if ("object" != typeof _v0 || !_v0) return _v0;
            var _v2 = _v0[Symbol.toPrimitive];
            if (void 0 !== _v2) {
              var _v3 = _v2.call(_v0, _v1 || "default");
              if ("object" != typeof _v3) return _v3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === _v1 ? String : Number)(_v0);
          }(_v0, "string");
          return "symbol" == typeof _v1 ? _v1 : _v1 + "";
        }(_v2)) in _v1 ? Object.defineProperty(_v1, _v2, {
          value: _v3,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : _v1[_v2] = _v3;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_v0, Object.getOwnPropertyDescriptors(_v2)) : _v5(Object(_v2)).forEach(function (_v0) {
        Object.defineProperty(_v0, _v0, Object.getOwnPropertyDescriptor(_v2, _v0));
      });
    }
    return _v0;
  }
}