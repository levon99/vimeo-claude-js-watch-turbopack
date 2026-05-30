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
          borderLeftWidth: _v2,
          borderBottomWidth: _v3,
          borderTopWidth: _v4,
          borderRightWidth: _v5,
          borderWidth: _v6,
          borderStyle: _v7,
          borderColor: _v8,
          ..._v9
        } = (0, _v4.useStyleConfig)("Divider", _v0),
        {
          className: _v10,
          orientation: _v11 = "horizontal",
          __css: _v12,
          ..._v13
        } = (0, _v3.omitThemingProps)(_v0);
      return (0, _v6.jsx)(_v1.chakra.hr, {
        ref: _v1,
        "aria-orientation": _v11,
        ..._v13,
        __css: {
          ..._v9,
          border: "0",
          borderColor: _v8,
          borderStyle: _v7,
          ...{
            vertical: {
              borderLeftWidth: _v2 || _v5 || _v6 || "1px",
              height: "100%"
            },
            horizontal: {
              borderBottomWidth: _v3 || _v4 || _v6 || "1px",
              width: "100%"
            }
          }[_v11],
          ..._v12
        },
        className: (0, _v5.cx)("chakra-divider", _v10)
      });
    });
  _v7.displayName = "Divider", _v0.s(["Divider", 0, _v7]);
}