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
  let _v9 = (0, _v2.forwardRef)(({
    label: _v0 = "Upload File",
    id: _v1,
    isDisabled: _v2 = !1,
    isActive: _v3 = !1,
    isLoading: _v4 = !1,
    sx: _v5,
    ..._v6
  }, _v7) => {
    let _v8,
      _v9 = (0, _v8.useId)(),
      _v10 = _v1 || `file-input-${_v9}`,
      {
        variant: _v11,
        size: _v12 = "md"
      } = _v6,
      _v13 = (0, _v3.useMultiStyleConfig)("FileInput", {
        variant: _v11,
        size: _v12
      }),
      _v14 = Object.keys(_v8 = {
        disabled: _v2 || _v4,
        "data-active": _v3
      }).reduce((_v0, _v1) => (_v8[_v1] && (_v0[_v1] = !0), _v0), {}),
      _v15 = {
        xs: "12px",
        sm: "14px",
        md: "14px",
        lg: "18px"
      },
      _v16 = _v15["string" == typeof _v12 ? _v12 : "md"] ?? _v15.md;
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v4.chakra.label, {
        __css: _v13,
        sx: _v5,
        htmlFor: _v10,
        ..._v14,
        children: _v4 ? (0, _v1.jsxs)(_v5.Grid, {
          as: "span",
          placeItems: "center",
          children: [(0, _v1.jsx)(_v4.chakra.span, {
            width: "max-content",
            gridArea: "1/1",
            children: (0, _v1.jsx)(_v6.Spinner, {
              color: "var(--spinner-color)",
              boxSize: _v16
            })
          }), (0, _v1.jsx)(_v4.chakra.span, {
            gridArea: "1/1",
            visibility: "hidden",
            children: _v0
          })]
        }) : _v0
      }), (0, _v1.jsx)(_v7.Input, {
        ref: _v7,
        id: _v10,
        type: "file",
        overflow: "hidden",
        position: "absolute",
        width: ".1px",
        height: "0.1px",
        opacity: "0",
        outline: "none",
        _disabled: {
          _hover: {
            outline: "none"
          }
        },
        ..._v14,
        ..._v6
      })]
    });
  });
  _v0.s(["FileInput", 0, _v9], 0);
}