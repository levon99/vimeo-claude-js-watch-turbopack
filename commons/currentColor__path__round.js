{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = {
      path: (0, _v5.jsxs)("g", {
        stroke: "currentColor",
        strokeWidth: "1.5",
        children: [(0, _v5.jsx)("path", {
          strokeLinecap: "round",
          fill: "none",
          d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
        }), (0, _v5.jsx)("path", {
          fill: "currentColor",
          strokeLinecap: "round",
          d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
        }), (0, _v5.jsx)("circle", {
          fill: "none",
          strokeMiterlimit: "10",
          cx: "12",
          cy: "12",
          r: "11.25"
        })]
      }),
      viewBox: "0 0 24 24"
    },
    _v7 = (0, _v2.forwardRef)((_v0, _v1) => {
      let {
          as: _v2,
          viewBox: _v3,
          color: _v4 = "currentColor",
          focusable: _v5 = !1,
          children: _v6,
          className: _v7,
          __css: _v8,
          ..._v9
        } = _v0,
        _v10 = (0, _v4.cx)("chakra-icon", _v7),
        _v11 = (0, _v3.useStyleConfig)("Icon", _v0),
        _v12 = {
          ref: _v1,
          focusable: _v5,
          className: _v10,
          __css: {
            w: "1em",
            h: "1em",
            display: "inline-block",
            lineHeight: "1em",
            flexShrink: 0,
            color: _v4,
            ..._v8,
            ..._v11
          }
        },
        _v13 = null != _v3 ? _v3 : _v6.viewBox;
      if (_v2 && "string" != typeof _v2) return (0, _v5.jsx)(_v1.chakra.svg, {
        as: _v2,
        ..._v12,
        ..._v9
      });
      let _v14 = null != _v6 ? _v6 : _v6.path;
      return (0, _v5.jsx)(_v1.chakra.svg, {
        verticalAlign: "middle",
        viewBox: _v13,
        ..._v12,
        ..._v9,
        children: _v14
      });
    });
  _v7.displayName = "Icon", _v0.s(["Icon", 0, _v7]);
}