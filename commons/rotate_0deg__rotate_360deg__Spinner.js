{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v3.keyframes)({
      "0%": {
        transform: "rotate(0deg)"
      },
      "100%": {
        transform: "rotate(360deg)"
      }
    }),
    _v9 = (0, _v2.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v5.useStyleConfig)("Spinner", _v0),
        {
          label: _v3 = "Loading...",
          thickness: _v4 = "2px",
          speed: _v5 = "0.45s",
          emptyColor: _v6 = "transparent",
          className: _v7,
          ..._v8
        } = (0, _v4.omitThemingProps)(_v0),
        _v9 = (0, _v6.cx)("chakra-spinner", _v7),
        _v10 = {
          display: "inline-block",
          borderColor: "currentColor",
          borderStyle: "solid",
          borderRadius: "99999px",
          borderWidth: _v4,
          borderBottomColor: _v6,
          borderLeftColor: _v6,
          animation: `${_v8} ${_v5} linear infinite`,
          ..._v2
        };
      return (0, _v7.jsx)(_v1.chakra.div, {
        ref: _v1,
        __css: _v10,
        className: _v9,
        ..._v8,
        children: _v3 && (0, _v7.jsx)(_v1.chakra.span, {
          srOnly: !0,
          children: _v3
        })
      });
    });
  _v9.displayName = "Spinner", _v0.s(["Spinner", 0, _v9]);
}