{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["EditableTitle", 0, function (_v0) {
    let {
        defaultName: _v1,
        isDisabled: _v2 = !1,
        isEditing: _v3 = !1,
        maxLength: _v4 = 32,
        onCancel: _v5,
        onChange: _v6,
        onSubmit: _v7,
        value: _v8,
        fontSize: _v9,
        fontWeight: _v10 = "bold",
        ..._v11
      } = _v0,
      [_v12, _v13] = (0, _v2.useState)(_v8),
      _v14 = (0, _v2.useRef)(null),
      _v15 = (0, _v2.useRef)(!1),
      _v16 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      !_v3 || _v12 || _v16.current ? _v3 && _v14.current && !_v16.current && (_v14.current.focus(), _v14.current.select()) : (_v13(_v1 || ""), requestAnimationFrame(() => {
        _v14.current && (_v14.current.focus(), _v14.current.select());
      })), _v16.current = _v3;
    }, [_v3, _v12, _v1]);
    let _v17 = "string" == typeof _v9 ? _v9 : {
      base: _v9?.base,
      md: _v9?.md
    };
    return (0, _v1.jsxs)(_v3.Editable, {
      value: _v3 ? _v12 : _v8,
      onChange: _v0 => {
        _v13(_v0);
      },
      onSubmit: () => {
        if (!_v15.current) {
          _v15.current = !0;
          try {
            let _v0 = _v12.trim();
            if (_v0) _v7 && _v7(_v0), _v6(_v0);else {
              let _v0 = _v8 || _v1 || "";
              _v13(_v0), _v5 && _v5();
            }
          } finally {
            requestAnimationFrame(() => {
              _v15.current = !1;
            });
          }
        }
      },
      onCancel: () => {
        _v5?.();
      },
      isPreviewFocusable: !1,
      selectAllOnFocus: !0,
      submitOnBlur: !0,
      isDisabled: _v2,
      startWithEditView: _v3,
      width: "100%",
      display: "block",
      overflow: "hidden",
      ..._v11,
      children: [(0, _v1.jsx)(_v5.EditablePreview, {
        fontWeight: _v10,
        fontSize: _v17,
        maxW: "100%",
        width: "100%",
        display: "block",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "data-testid": "editable-title-preview",
        cursor: _v3 ? "text" : "pointer",
        ..._v11
      }), (0, _v1.jsx)(_v4.EditableInput, {
        ref: _v14,
        maxLength: _v4,
        fontWeight: _v10,
        fontSize: _v17,
        maxW: "100%",
        width: "100%",
        display: "block",
        minW: "0",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        "data-testid": "editable-title-input",
        ..._v11
      })]
    });
  }]);
}