{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = (0, _v1.chakra)("div");
  _v4.displayName = "Box";
  var _v5 = (0, _v2.forwardRef)(function (_v0, _v1) {
    let {
      size: _v2,
      centerContent: _v3 = !0,
      ..._v4
    } = _v0;
    return (0, _v3.jsx)(_v4, {
      ref: _v1,
      boxSize: _v2,
      __css: {
        ...(_v3 ? {
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        } : {}),
        flexShrink: 0,
        flexGrow: 0
      },
      ..._v4
    });
  });
  _v5.displayName = "Square", (0, _v2.forwardRef)(function (_v0, _v1) {
    let {
      size: _v2,
      ..._v3
    } = _v0;
    return (0, _v3.jsx)(_v5, {
      size: _v2,
      ref: _v1,
      borderRadius: "9999px",
      ..._v3
    });
  }).displayName = "Circle", _v0.s(["Box", 0, _v4]);
}