{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = {
      branding: {
        primary: "#000000",
        secondary: "#EBEBEB",
        default: "#FFFFFF"
      },
      canvas: "#000000",
      graphics: {
        primary: "#FFFFFF",
        secondary: "#000000",
        thumbCSSFilter: "invert(100%)"
      }
    },
    _v9 = {
      branding: {
        primary: "#FFFFFF",
        secondary: "#EBEBEB",
        default: "#000000"
      },
      canvas: "#FFFFFF",
      graphics: {
        primary: "#000000",
        secondary: "#FFFFFF"
      }
    };
  _v0.s(["default", 0, function () {
    let _v0 = (0, _v2.useDispatch)(),
      _v1 = (0, _v3.useIsBokeh)(),
      _v2 = (0, _v7.useAppSelector)(_v5.isInteractiveSelector),
      _v3 = _v1 ? _v8 : _v9,
      _v4 = (0, _v7.useAppSelector)(_v6.isBlankSelector),
      _v5 = _v0 => (_v0 || _v4.default.isEVV) && !_v2,
      _v6 = _v5(_v4);
    return (0, _v1.useEffect)(() => {
      _v4.default.previousIsBokeh !== _v1 && _v6 && (_v0((0, _v6.setBrandingColorsAction)({
        colorPalette: _v3.branding,
        isIgnoreUndo: !0
      })), _v0((0, _v6.setCanvasColorAction)({
        color: _v3.canvas,
        isIgnoreUndo: !0
      }))), _v4.default.setPreviousIsBokeh(_v1);
    }, [_v1, _v0, _v3, _v6]), {
      defaultColors: _v3,
      hasPaintableGraphics: _v0 => ["Shapes", "Frames", "Arrows", "Bubbles", "Call To Action", "Buttons", "Echos", "Classic", "E-learning", "Marketing", "Menu", "Shop"].includes(_v0),
      shouldForceUseDefaultColors: _v5
    };
  }]);
}