{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.forwardRef)(({
    size: _v0 = "md",
    value: _v1,
    children: _v2,
    ..._v3
  }, _v4) => {
    let _v5 = (0, _v3.useMultiStyleConfig)("CircularProgress", {
        size: _v0
      }),
      _v6 = {
        sm: {
          radius: 10,
          dotRadius: 1,
          x: 12,
          y: 12,
          transform: "rotate(-90 12 12)"
        },
        md: {
          radius: 22,
          dotRadius: 2,
          x: 24,
          y: 24,
          transform: "rotate(-90 24 24)"
        },
        lg: {
          radius: 29.4166,
          dotRadius: 2.7,
          x: 32,
          y: 32,
          transform: "rotate(-90 32 32)"
        }
      },
      _v7 = 2 * Math.PI * _v6[_v0].radius,
      _v8 = _v6[_v0].dotRadius,
      _v9 = _v6[_v0].x,
      _v10 = _v6[_v0].y - _v6[_v0].radius;
    return (0, _v1.jsxs)(_v4.Box, {
      ref: _v4,
      __css: _v5.root,
      role: "progressbar",
      "aria-valuenow": _v1,
      ..._v3,
      children: [(0, _v1.jsxs)(_v5.Icon, {
        __css: _v5.icon,
        fill: "none",
        viewBox: "var(--circular-progress-viewbox)",
        height: _v5.icon.height,
        width: _v5.icon.width,
        children: [(0, _v1.jsx)("circle", {
          cx: _v6[_v0].x,
          cy: _v6[_v0].y,
          r: _v6[_v0].radius,
          stroke: _v5.track?.stroke,
          strokeWidth: "var(--circular-progress-stroke-width)"
        }), 0 === _v1 ? (0, _v1.jsx)("circle", {
          cx: _v9,
          cy: _v10,
          r: _v8,
          fill: "currentColor"
        }) : (0, _v1.jsx)("circle", {
          cx: _v6[_v0].x,
          cy: _v6[_v0].y,
          r: _v6[_v0].radius,
          stroke: "currentColor",
          strokeDasharray: _v7,
          strokeDashoffset: _v7 * (100 - _v1) / 100,
          strokeLinecap: "round",
          transform: _v6[_v0].transform,
          strokeWidth: "var(--circular-progress-stroke-width)"
        })]
      }), _v2]
    });
  });
  _v0.s(["CircularProgress", 0, _v6]);
}