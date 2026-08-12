{
  "use strict";

  var _v3 = _v0.e && _v0.e.__rest || function (_v0, _v1) {
      var _v2 = {};
      for (var _v3 in _v0) Object.prototype.hasOwnProperty.call(_v0, _v3) && 0 > _v1.indexOf(_v3) && (_v2[_v3] = _v0[_v3]);
      if (null != _v0 && "function" == typeof Object.getOwnPropertySymbols) for (var _v4 = 0, _v3 = Object.getOwnPropertySymbols(_v0); _v4 < _v3.length; _v4++) 0 > _v1.indexOf(_v3[_v4]) && Object.prototype.propertyIsEnumerable.call(_v0, _v3[_v4]) && (_v2[_v3[_v4]] = _v0[_v3[_v4]]);
      return _v2;
    },
    _v4 = _v0.e && _v0.e.__importDefault || function (_v0) {
      return _v0 && _v0.__esModule ? _v0 : {
        default: _v0
      };
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.GoogleMapsEmbed = void 0;
  let _v5 = _v4(_v0.r(0)),
    _v6 = _v0.r(0);
  _v2.GoogleMapsEmbed = _v0 => {
    var _v1 = _v3(_v0, []);
    return (0, _v6.formatData)(_v5.default, _v1);
  };
}