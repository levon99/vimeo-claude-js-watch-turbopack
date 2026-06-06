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
    let {
        apiKey: _v1,
        ..._v2
      } = _v0,
      _v3 = {
        ..._v2,
        key: _v1
      },
      {
        html: _v4
      } = (0, _v5.GoogleMapsEmbed)(_v3);
    return (0, _v4.jsx)(_v6.default, {
      height: _v3.height || null,
      width: _v3.width || null,
      html: _v4,
      dataNtpc: "GoogleMapsEmbed"
    });
  };
  let _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v3(_v0.r(0));
}