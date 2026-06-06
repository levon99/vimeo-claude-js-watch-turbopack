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
          ratio: _v2 = 4 / 3,
          children: _v3,
          className: _v4,
          ..._v5
        } = _v0,
        _v6 = _v5.Children.only(_v3),
        _v7 = (0, _v4.cx)("chakra-aspect-ratio", _v4);
      return (0, _v6.jsx)(_v1.chakra.div, {
        ref: _v1,
        position: "relative",
        className: _v7,
        _before: {
          height: 0,
          content: '""',
          display: "block",
          paddingBottom: (0, _v3.mapResponsive)(_v2, _v0 => `${1 / _v0 * 100}%`)
        },
        __css: {
          "& > *:not(style)": {
            overflow: "hidden",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%"
          },
          "& > img, & > video": {
            objectFit: "cover"
          }
        },
        ..._v5,
        children: _v6
      });
    });
  _v7.displayName = "AspectRatio", _v0.s(["AspectRatio", 0, _v7]);
}