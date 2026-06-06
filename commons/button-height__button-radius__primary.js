{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (0, _v6.cssVar)("button-height"),
    _v10 = (0, _v6.cssVar)("button-radius"),
    _v11 = (0, _v2.forwardRef)(({
      size: _v0 = "md",
      variant: _v1 = "primary",
      label: _v2 = "Search",
      ..._v3
    }, _v4) => (0, _v1.jsxs)(_v3.InputGroup, {
      width: _v3.width,
      size: _v0,
      children: [(0, _v1.jsx)(_v4.Input, {
        ref: _v4,
        ..._v3,
        pr: "800"
      }), (0, _v1.jsx)(_v5.InputRightElement, {
        children: (0, _v1.jsx)(_v8.IconButton, {
          "aria-label": _v2,
          sx: {
            "&[data-type=icon-button]": {
              [_v10.variable]: "0 0.2rem 0.2rem 0"
            },
            [_v9.variable]: "100%"
          },
          borderLeftRadius: 0,
          borderRightRadius: _v0,
          size: _v0,
          variant: _v1,
          icon: (0, _v1.jsx)(_v7.SearchMagnifier, {})
        })
      })]
    }));
  _v0.s(["Search", 0, _v11]);
}