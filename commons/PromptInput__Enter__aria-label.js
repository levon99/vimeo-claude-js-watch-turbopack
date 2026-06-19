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
    _v9 = _v0.i(0);
  _v0.s(["PromptInput", 0, ({
    onSubmit: _v0,
    placeholderText: _v1 = _v9.askQuestionAction,
    isDisabled: _v2 = !1
  }) => {
    let [_v3, _v4] = (0, _v2.useState)(""),
      [_v5, _v6] = (0, _v2.useState)(!1),
      _v7 = (0, _v2.useCallback)(_v0 => {
        _v4(_v0.target.value);
      }, []),
      _v8 = (0, _v2.useCallback)(() => {
        _v4(""), _v0(_v3);
      }, [_v0, _v3]),
      _v9 = (0, _v2.useCallback)(_v0 => {
        "Enter" !== _v0.key || _v5 || _v8();
      }, [_v8, _v5]);
    return (0, _v1.jsxs)(_v5.InputGroup, {
      mt: (0, _v7.rem)(8),
      children: [(0, _v1.jsx)(_v4.Input, {
        autoFocus: !0,
        onChange: _v7,
        onCompositionEnd: () => _v6(!1),
        onCompositionStart: () => _v6(!0),
        onKeyDown: _v9,
        maxLength: 500,
        placeholder: _v1,
        value: _v3,
        variant: "default",
        disabled: _v2
      }), (0, _v1.jsx)(_v6.InputRightElement, {
        children: (0, _v1.jsx)(_v3.IconButton, {
          isDisabled: 0 === _v3.trim().length,
          "aria-label": "Submit question",
          variant: "tertiary",
          icon: (0, _v1.jsx)(_v8.ArrowUp, {
            color: _v3.length > 0 ? "text-primary" : "text-secondary"
          }),
          size: "xs",
          onClick: _v8
        })
      })]
    });
  }]);
}