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
  function _v11(_v0) {
    if (!document) return;
    let _v1 = document.createElement("input");
    _v1.value = _v0, document.body.appendChild(_v1), _v1.select(), document.execCommand("copy"), document.body.removeChild(_v1);
  }
  _v0.s(["copyTextToClipboard", 0, _v11], 0);
  var _v12 = _v0.i(0);
  _v0.s(["CopyField", 0, function ({
    id: _v0,
    className: _v1 = (0, _v12.createDomName)("copy-field"),
    isDisabled: _v2,
    isPassword: _v3,
    title: _v4,
    value: _v5,
    placeholder: _v6,
    size: _v7,
    inputVariant: _v8 = "default",
    copiedMessage: _v9,
    onCopyClick: _v10,
    onAfterCopyClick: _v11,
    copyButton: _v12
  }) {
    let [_v13, _v14] = (0, _v2.useState)(!1),
      _v15 = (0, _v8.useToast)(),
      _v16 = "sm" === _v7 ? (0, _v7.rem)(20) : _v7,
      _v17 = !!(_v3 && !_v13),
      _v18 = (0, _v2.useCallback)(() => _v14(!0), []),
      _v19 = (0, _v2.useCallback)(() => _v14(!1), []),
      _v20 = (0, _v2.useCallback)(() => {
        _v10 ? _v10() : _v5 && _v11(_v5), _v9 && _v5 && _v15({
          title: _v9
        }), _v11 && _v11();
      }, [_v5, _v9, _v15, _v11, _v10]);
    return (0, _v1.jsxs)(_v3.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      alignItems: "flex-start",
      gap: (0, _v7.rem)(8),
      children: [_v4, (0, _v1.jsxs)(_v5.InputGroup, {
        id: (0, _v12.createDomName)(_v0, "input-group"),
        className: (0, _v12.createDomName)(_v1, "input-group"),
        display: "flex",
        borderRadius: "input-md",
        size: _v7,
        onFocus: _v18,
        onBlur: _v19,
        children: [(0, _v1.jsx)(_v4.Input, {
          id: (0, _v12.createDomName)(_v0, "input"),
          className: (0, _v12.createDomName)(_v1, "input"),
          isDisabled: !!_v2,
          value: _v17 && _v6 ? _v6 : _v5 ?? "",
          isReadOnly: !0,
          type: _v17 ? "password" : void 0,
          variant: _v8,
          textOverflow: _v3 ? void 0 : "ellipsis",
          size: _v7
        }), (0, _v1.jsx)(_v6.InputRightElement, {
          cursor: "pointer",
          overflow: "hidden",
          borderRightRadius: "sm" === _v7 ? (0, _v7.rem)(8) : (0, _v7.rem)(12),
          onClick: _v20,
          children: _v12 || (0, _v1.jsx)(_v9.Center, {
            width: "100%",
            height: "100%",
            _hover: {
              background: "text-primary",
              svg: {
                color: "background"
              }
            },
            borderRightRadius: (0, _v7.rem)("sm" === _v7 ? 2 : 4),
            children: (0, _v1.jsx)(_v10.CopyPortrait, {
              color: "text-primary",
              boxSize: _v16
            })
          })
        })]
      })]
    });
  }], 0);
}