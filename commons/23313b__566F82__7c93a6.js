{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.formats = _v2.a11yColor = _v2.black = _v2.white = _v2.red = _v2.green = _v2.blue = _v2.grayscale = _v2.slate = void 0;
  var _v3 = _v0.r(0),
    _v4 = {
      800: "#23313b",
      540: "#566F82",
      500: "#657987",
      400: "#7c93a6",
      300: "#9caebd",
      200: "#bdcad3",
      100: "#dee4e9",
      50: "#eef1f4"
    },
    _v5 = {
      50: "#efefef",
      200: "#C1C1C1",
      240: "#B5B5B5",
      500: "#666666",
      700: "#3D3D3D",
      800: "#282828",
      900: "#141414"
    },
    _v6 = {
      500: "#00adef"
    },
    _v7 = {
      500: "#28A878"
    },
    _v8 = {
      500: "#E22B12"
    };
  _v2.slate = function (_v0) {
    return _v4[_v0];
  }, _v2.grayscale = function (_v0) {
    return _v5[_v0];
  }, _v2.blue = function (_v0) {
    return _v6[_v0];
  }, _v2.green = function (_v0) {
    return _v7[_v0];
  }, _v2.red = function (_v0) {
    return _v8[_v0];
  }, _v2.white = "#FFFFFF", _v2.black = "#000000", _v2.a11yColor = function (_v0) {
    return function (_v0) {
      var _v1,
        _v2 = _v0.theme;
      return (null == (_v1 = null == _v2 ? void 0 : _v2.a11y) ? void 0 : _v1.contrast) ? _v3.readableColor(_v3.lighten(.1, _v0)) : _v3.readableColor(_v3.darken(.3, _v0));
    };
  }, _v2.formats = {
    primary: _v2.blue(500),
    secondary: _v2.grayscale(50),
    alternative: "#3a5161",
    soft: _v2.slate(800),
    basic: _v2.black,
    positive: _v2.green(500),
    negative: _v2.red(500)
  };
}