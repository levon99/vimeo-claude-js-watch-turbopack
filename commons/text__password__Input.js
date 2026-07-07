{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v2.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v9.useState)(!1),
      _v4 = _v2 ? "text" : "password",
      {
        field: _v5
      } = (0, _v3.useStyleConfig)("Input", {
        size: _v0.size
      });
    return (0, _v1.jsxs)(_v4.InputGroup, {
      children: [(0, _v1.jsx)(_v10.Input, {
        ref: _v1,
        type: _v4,
        ..._v0
      }), (0, _v1.jsx)(_v5.InputRightElement, {
        height: "100%",
        children: (0, _v1.jsx)(_v6.IconButton, {
          size: _v0.size,
          variant: "minimal",
          borderRadius: _v5?.borderRadius,
          height: "100%",
          width: "100%",
          onClick: () => _v3(!_v2),
          "aria-label": "text" === _v4 ? "hide" : "show",
          icon: "text" === _v4 ? (0, _v1.jsx)(_v7.EyeShut, {
            width: "20px"
          }) : (0, _v1.jsx)(_v8.Eye, {
            width: "20px"
          })
        })
      })]
    });
  });
  _v0.s(["Password", 0, _v11]);
}