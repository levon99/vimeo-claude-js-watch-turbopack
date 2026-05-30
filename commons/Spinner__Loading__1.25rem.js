{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["Spinner", 0, ({
    size: _v0 = "md",
    label: _v1 = "Loading",
    ..._v2
  }) => {
    let _v3 = {
        xs: {
          size: "1.25rem",
          x: 6,
          y: 6,
          radius: 5,
          viewBox: "0 0 12 12",
          borderWidth: 1
        },
        sm: {
          size: "1.5rem",
          x: 12,
          y: 12,
          radius: 10,
          viewBox: "0 0 24 24",
          borderWidth: 2
        },
        md: {
          size: "3rem",
          x: 24,
          y: 24,
          radius: 22,
          viewBox: "0 0 48 48",
          borderWidth: 4
        },
        lg: {
          size: "4rem",
          x: 32,
          y: 32,
          radius: 29.4166,
          viewBox: "0 0 64 64",
          borderWidth: 5.5
        },
        xl: {
          size: "5rem",
          x: 40,
          y: 40,
          radius: 37,
          viewBox: "0 0 80 80",
          borderWidth: 7
        }
      },
      _v4 = (0, _v2.useStyleConfig)("Spinner", {
        size: _v0
      }),
      _v5 = 2 * Math.PI * _v3[_v0].radius;
    return (0, _v1.jsxs)(_v3.Box, {
      __css: _v4,
      ..._v2,
      children: [(0, _v1.jsxs)(_v4.Icon, {
        width: _v3[_v0].size,
        height: _v3[_v0].size,
        viewBox: _v3[_v0].viewBox,
        fill: "none",
        children: [(0, _v1.jsx)("circle", {
          opacity: "0.1",
          cx: _v3[_v0].x,
          cy: _v3[_v0].y,
          r: _v3[_v0].radius,
          stroke: "currentColor",
          strokeWidth: _v3[_v0].borderWidth
        }), (0, _v1.jsx)("circle", {
          cx: _v3[_v0].x,
          cy: _v3[_v0].y,
          r: _v3[_v0].radius,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: _v3[_v0].borderWidth,
          strokeDasharray: _v5,
          strokeDashoffset: 76 * _v5 / 100
        })]
      }), (0, _v1.jsx)(_v5.chakra.span, {
        srOnly: !0,
        children: _v1
      })]
    });
  }]);
}