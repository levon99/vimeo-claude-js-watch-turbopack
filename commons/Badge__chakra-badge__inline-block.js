{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v2.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v4.useStyleConfig)("Badge", _v0),
        {
          className: _v3,
          ..._v4
        } = (0, _v3.omitThemingProps)(_v0);
      return (0, _v6.jsx)(_v1.chakra.span, {
        ref: _v1,
        className: (0, _v5.cx)("chakra-badge", _v0.className),
        ..._v4,
        __css: {
          display: "inline-block",
          whiteSpace: "nowrap",
          verticalAlign: "middle",
          ..._v2
        }
      });
    });
  _v7.displayName = "Badge", _v0.s(["Badge", 0, _v7]);
}