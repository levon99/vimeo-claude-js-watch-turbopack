{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v2.forwardRef)(function (_v0, _v1) {
      let {
          className: _v2,
          centerContent: _v3,
          ..._v4
        } = (0, _v3.omitThemingProps)(_v0),
        _v5 = (0, _v4.useStyleConfig)("Container", _v0);
      return (0, _v6.jsx)(_v1.chakra.div, {
        ref: _v1,
        className: (0, _v5.cx)("chakra-container", _v2),
        ..._v4,
        __css: {
          ..._v5,
          ...(_v3 && {
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          })
        }
      });
    });
  _v7.displayName = "Container", _v0.s(["Container", 0, _v7]);
}