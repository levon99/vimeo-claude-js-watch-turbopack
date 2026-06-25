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
  let _v9 = _v0 => (0, _v1.jsx)(_v8.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 6a9.002 9.002 0 0 0-8.182 5.246c-.22.478-.22 1.03 0 1.508A9.002 9.002 0 0 0 12 18a9.002 9.002 0 0 0 8.183-5.246c.22-.478.22-1.03 0-1.508A9.002 9.002 0 0 0 12 6ZM2 10.41A11.002 11.002 0 0 1 12 4c4.44 0 8.262 2.63 10 6.41a3.808 3.808 0 0 1 0 3.18A11.002 11.002 0 0 1 12 20a11.002 11.002 0 0 1-10-6.41 3.808 3.808 0 0 1 0-3.18ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z",
      fill: "currentColor"
    })
  });
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = (0, _v2.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v10.useState)(!1),
      _v4 = _v2 ? "text" : "password",
      {
        field: _v5
      } = (0, _v3.useStyleConfig)("Input", {
        size: _v0.size
      });
    return (0, _v1.jsxs)(_v4.InputGroup, {
      children: [(0, _v1.jsx)(_v11.Input, {
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
          }) : (0, _v1.jsx)(_v9, {
            width: "20px"
          })
        })
      })]
    });
  });
  _v0.s(["Password", 0, _v12], 0);
}