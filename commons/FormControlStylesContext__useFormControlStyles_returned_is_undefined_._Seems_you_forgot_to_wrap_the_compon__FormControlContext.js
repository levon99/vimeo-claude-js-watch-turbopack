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
    [_v10, _v11] = (0, _v1.createContext)({
      name: "FormControlStylesContext",
      errorMessage: "useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "
    }),
    [_v12, _v13] = (0, _v1.createContext)({
      strict: !1,
      name: "FormControlContext"
    }),
    _v14 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v6.useMultiStyleConfig)("Form", _v0),
        {
          getRootProps: _v3,
          htmlProps: _v4,
          ..._v5
        } = function (_v0) {
          let {
              id: _v1,
              isRequired: _v2,
              isInvalid: _v3,
              isDisabled: _v4,
              isReadOnly: _v5,
              ..._v6
            } = _v0,
            _v7 = (0, _v8.useId)(),
            _v8 = _v1 || `field-${_v7}`,
            _v9 = `${_v8}-label`,
            _v10 = `${_v8}-feedback`,
            _v11 = `${_v8}-helptext`,
            [_v12, _v13] = (0, _v8.useState)(!1),
            [_v14, _v15] = (0, _v8.useState)(!1),
            [_v16, _v17] = (0, _v8.useState)(!1),
            _v18 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              id: _v11,
              ..._v0,
              ref: (0, _v2.mergeRefs)(_v1, _v0 => {
                _v0 && _v15(!0);
              })
            }), [_v11]),
            _v19 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              ..._v0,
              ref: _v1,
              "data-focus": (0, _v7.dataAttr)(_v16),
              "data-disabled": (0, _v7.dataAttr)(_v4),
              "data-invalid": (0, _v7.dataAttr)(_v3),
              "data-readonly": (0, _v7.dataAttr)(_v5),
              id: void 0 !== _v0.id ? _v0.id : _v9,
              htmlFor: void 0 !== _v0.htmlFor ? _v0.htmlFor : _v8
            }), [_v8, _v4, _v16, _v3, _v5, _v9]),
            _v20 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              id: _v10,
              ..._v0,
              ref: (0, _v2.mergeRefs)(_v1, _v0 => {
                _v0 && _v13(!0);
              }),
              "aria-live": "polite"
            }), [_v10]),
            _v21 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              ..._v0,
              ..._v6,
              ref: _v1,
              role: "group"
            }), [_v6]);
          return {
            isRequired: !!_v2,
            isInvalid: !!_v3,
            isReadOnly: !!_v5,
            isDisabled: !!_v4,
            isFocused: !!_v16,
            onFocus: () => _v17(!0),
            onBlur: () => _v17(!1),
            hasFeedbackText: _v12,
            setHasFeedbackText: _v13,
            hasHelpText: _v14,
            setHasHelpText: _v15,
            id: _v8,
            labelId: _v9,
            feedbackId: _v10,
            helpTextId: _v11,
            htmlProps: _v6,
            getHelpTextProps: _v18,
            getErrorMessageProps: _v20,
            getRootProps: _v21,
            getLabelProps: _v19,
            getRequiredIndicatorProps: (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              ..._v0,
              ref: _v1,
              role: "presentation",
              "aria-hidden": !0,
              children: _v0.children || "*"
            }), [])
          };
        }((0, _v5.omitThemingProps)(_v0)),
        _v6 = (0, _v7.cx)("chakra-form-control", _v0.className);
      return (0, _v9.jsx)(_v12, {
        value: _v5,
        children: (0, _v9.jsx)(_v10, {
          value: _v2,
          children: (0, _v9.jsx)(_v3.chakra.div, {
            ..._v3({}, _v1),
            className: _v6,
            __css: _v2.container
          })
        })
      });
    });
  _v14.displayName = "FormControl";
  var _v15 = (0, _v4.forwardRef)(function (_v0, _v1) {
    let _v2 = _v13(),
      _v3 = _v11(),
      _v4 = (0, _v7.cx)("chakra-form__helper-text", _v0.className);
    return (0, _v9.jsx)(_v3.chakra.div, {
      ...(null == _v2 ? void 0 : _v2.getHelpTextProps(_v0, _v1)),
      __css: _v3.helperText,
      className: _v4
    });
  });
  _v15.displayName = "FormHelperText", _v0.s(["FormControl", 0, _v14, "FormHelperText", 0, _v15, "useFormControlContext", 0, _v13, "useFormControlStyles", 0, _v11]);
}