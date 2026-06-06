{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = {
      textMultiplier: 1,
      contrast: !1,
      motion: !1
    },
    _v4 = {
      light: {
        name: "light",
        a11y: _v3,
        content: {
          background: _v2.white,
          color: _v2.black,
          color2: (0, _v2.slate)(800),
          disabled: (0, _v2.grayscale)(50),
          focus: (0, _v2.blue)(500)
        },
        item: {
          bg: _v2.white,
          bg2: (0, _v2.slate)(50),
          locked: (0, _v2.grayscale)(50)
        },
        formats: {
          primary: (0, _v2.blue)(500),
          secondary: (0, _v2.grayscale)(50),
          alternative: "#3a5161",
          soft: (0, _v2.slate)(800),
          basic: _v2.black,
          positive: (0, _v2.green)(500),
          negative: (0, _v2.red)(500)
        },
        inputs: {
          primary: (0, _v2.blue)(500),
          small: (0, _v2.red)(400)
        },
        shadows: {
          small: "box-shadow: 0 0 0.334rem -0.05rem ".concat((0, _v1.rgba)(_v2.black, .15), ";"),
          0: "box-shadow: 0 0 0.334rem -0.05rem ".concat((0, _v1.rgba)(_v2.black, .1), ";"),
          200: "box-shadow: 0 0 0.445rem -0.0475rem ".concat((0, _v1.rgba)(_v2.black, .15), ";"),
          400: "box-shadow: 0 0 0.556rem -0.045rem ".concat((0, _v1.rgba)(_v2.black, .2), ";"),
          600: "box-shadow: 0 0 0.667rem -0.0425rem ".concat((0, _v1.rgba)(_v2.black, .25), ";"),
          800: "box-shadow: 0 0 0.778rem -0.04rem ".concat((0, _v1.rgba)(_v2.black, .3), ";"),
          0: "box-shadow: 0 0 0.889rem -0.0375rem ".concat((0, _v1.rgba)(_v2.black, .35), ";")
        }
      },
      dark: {
        name: "dark",
        a11y: _v3,
        content: {
          background: (0, _v2.grayscale)(910),
          color: _v2.white,
          color2: (0, _v2.grayscale)(50),
          disabled: (0, _v2.grayscale)(850),
          focus: (0, _v2.blue)(400)
        },
        item: {
          bg: (0, _v2.grayscale)(850),
          bg2: (0, _v2.slate)(800),
          locked: (0, _v2.grayscale)(800)
        },
        formats: {
          primary: (0, _v2.blue)(500),
          secondary: (0, _v2.grayscale)(700),
          alternative: (0, _v2.slate)(700),
          soft: (0, _v2.slate)(100),
          basic: _v2.white,
          positive: (0, _v2.green)(500),
          negative: (0, _v2.red)(500)
        },
        inputs: {
          primary: (0, _v2.blue)(400),
          small: (0, _v2.red)(400)
        },
        shadows: {
          small: "box-shadow: 0 0 0.334rem -0.05rem ".concat((0, _v1.rgba)(_v2.black, .15), ";"),
          0: "box-shadow: 0 0 0.334rem -0.05rem ".concat((0, _v1.rgba)(_v2.black, .1), ";"),
          200: "box-shadow: 0 0 0.445rem -0.0475rem ".concat((0, _v1.rgba)(_v2.black, .15), ";"),
          400: "box-shadow: 0 0 0.556rem -0.045rem ".concat((0, _v1.rgba)(_v2.black, .2), ";"),
          600: "box-shadow: 0 0 0.667rem -0.0425rem ".concat((0, _v1.rgba)(_v2.black, .25), ";"),
          800: "box-shadow: 0 0 0.778rem -0.04rem ".concat((0, _v1.rgba)(_v2.black, .3), ";"),
          0: "box-shadow: 0 0 0.889rem -0.0375rem ".concat((0, _v1.rgba)(_v2.black, .35), ";")
        }
      }
    };
  _v0.s(["a11yColor", 0, function (_v0) {
    return function (_v0) {
      return _v0.theme.a11y.contrast ? (0, _v1.readableColor)((0, _v1.lighten)(.1, _v0)) : (0, _v1.readableColor)((0, _v1.darken)(.3, _v0));
    };
  }, "a11yContrast", 0, function (_v0) {
    return function (_v0) {
      return _v0.theme.a11y.contrast ? (0, _v1.getLuminance)(_v0) > .179 ? (0, _v1.darken)(.15, (0, _v1.saturate)(.1, _v0)) : (0, _v1.lighten)(.15, (0, _v1.saturate)(.1, _v0)) : _v0;
    };
  }, "a11yText", 0, function (_v0) {
    return function (_v0) {
      return _v0 * (1 + _v0.theme.a11y.textMultiplier / 5);
    };
  }, "themes", 0, _v4]);
}