{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0 = {}) {
    let {
        onChange: _v1,
        value: _v2,
        defaultValue: _v3,
        name: _v4,
        isDisabled: _v5,
        isFocusable: _v6,
        isNative: _v7,
        ..._v8
      } = _v0,
      [_v9, _v10] = (0, _v3.useState)(_v3 || ""),
      _v11 = void 0 !== _v2,
      _v12 = _v11 ? _v2 : _v9,
      _v13 = (0, _v3.useRef)(null),
      _v14 = (0, _v3.useCallback)(() => {
        let _v0 = _v13.current;
        if (!_v0) return;
        let _v1 = "input:not(:disabled):checked",
          _v2 = _v0.querySelector(_v1);
        if (_v2) return void _v2.focus();
        _v1 = "input:not(:disabled)";
        let _v3 = _v0.querySelector(_v1);
        null == _v3 || _v3.focus();
      }, []),
      _v15 = (0, _v3.useId)(),
      _v16 = `radio-${_v15}`,
      _v17 = _v4 || _v16,
      _v18 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v0 && (0, _v1.isObject)(_v0) && (0, _v1.isObject)(_v0.target) ? _v0.target.value : _v0;
        _v11 || _v10(_v1), null == _v1 || _v1(String(_v1));
      }, [_v1, _v11]);
    return {
      getRootProps: (0, _v3.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: (0, _v2.mergeRefs)(_v1, _v13),
        role: "radiogroup"
      }), []),
      getRadioProps: (0, _v3.useCallback)((_v0 = {}, _v1 = null) => {
        let _v2 = _v7 ? "checked" : "isChecked";
        return {
          ..._v0,
          ref: _v1,
          name: _v17,
          [_v2]: null != _v12 ? _v0.value === _v12 : void 0,
          onChange(_v0) {
            _v18(_v0);
          },
          "data-radiogroup": !0
        };
      }, [_v7, _v17, _v18, _v12]),
      name: _v17,
      ref: _v13,
      focus: _v14,
      setValue: _v10,
      value: _v12,
      onChange: _v18,
      isDisabled: _v5,
      isFocusable: _v6,
      htmlProps: _v8
    };
  }
  _v0.s(["useRadioGroup", 0, _v4], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    [_v9, _v10] = (0, _v7.createContext)({
      name: "RadioGroupContext",
      strict: !1
    }),
    _v11 = (0, _v6.forwardRef)((_v0, _v1) => {
      let {
          colorScheme: _v2,
          size: _v3,
          variant: _v4,
          children: _v5,
          className: _v6,
          isDisabled: _v7,
          isFocusable: _v8,
          ..._v9
        } = _v0,
        {
          value: _v10,
          onChange: _v11,
          getRootProps: _v12,
          name: _v13,
          htmlProps: _v14
        } = _v4(_v9),
        _v15 = (0, _v3.useMemo)(() => ({
          name: _v13,
          size: _v3,
          onChange: _v11,
          colorScheme: _v2,
          value: _v10,
          variant: _v4,
          isDisabled: _v7,
          isFocusable: _v8
        }), [_v13, _v3, _v11, _v2, _v10, _v4, _v7, _v8]);
      return (0, _v8.jsx)(_v9, {
        value: _v15,
        children: (0, _v8.jsx)(_v5.chakra.div, {
          ..._v12(_v14, _v1),
          className: (0, _v1.cx)("chakra-radio-group", _v6),
          children: _v5
        })
      });
    });
  _v11.displayName = "RadioGroup", _v0.s(["RadioGroup", 0, _v11, "useRadioGroupContext", 0, _v10], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = {
      border: "0",
      clip: "rect(0, 0, 0, 0)",
      height: "1px",
      width: "1px",
      margin: "-1px",
      padding: "0",
      overflow: "hidden",
      whiteSpace: "nowrap",
      position: "absolute"
    };
  function _v15(_v0) {
    _v0.preventDefault(), _v0.stopPropagation();
  }
  _v0.s(["useRadio", 0, function (_v0 = {}) {
    let {
        defaultChecked: _v1,
        isChecked: _v2,
        isFocusable: _v3,
        isDisabled: _v4,
        isReadOnly: _v5,
        isRequired: _v6,
        onChange: _v7,
        isInvalid: _v8,
        name: _v9,
        value: _v10,
        id: _v11,
        "data-radiogroup": _v12,
        "aria-describedby": _v13,
        ..._v14
      } = _v0,
      _v15 = `radio-${(0, _v3.useId)()}`,
      _v16 = (0, _v12.useFormControlContext)(),
      _v17 = _v10(),
      _v18 = _v16 && !(_v17 || _v12) ? _v16.id : _v15;
    _v18 = null != _v11 ? _v11 : _v18;
    let _v19 = null != _v4 ? _v4 : null == _v16 ? void 0 : _v16.isDisabled,
      _v20 = null != _v5 ? _v5 : null == _v16 ? void 0 : _v16.isReadOnly,
      _v21 = null != _v6 ? _v6 : null == _v16 ? void 0 : _v16.isRequired,
      _v22 = null != _v8 ? _v8 : null == _v16 ? void 0 : _v16.isInvalid,
      [_v23, _v24] = (0, _v3.useState)(!1),
      [_v25, _v26] = (0, _v3.useState)(!1),
      [_v27, _v28] = (0, _v3.useState)(!1),
      [_v29, _v30] = (0, _v3.useState)(!1),
      [_v31, _v32] = (0, _v3.useState)(!!_v1),
      _v33 = void 0 !== _v2,
      _v34 = _v33 ? _v2 : _v31;
    (0, _v3.useEffect)(() => (0, _v13.trackFocusVisible)(_v24), []);
    let _v35 = (0, _v3.useCallback)(_v0 => {
        _v20 || _v19 ? _v0.preventDefault() : (_v33 || _v32(_v0.target.checked), null == _v7 || _v7(_v0));
      }, [_v33, _v19, _v20, _v7]),
      _v36 = (0, _v3.useCallback)(_v0 => {
        " " === _v0.key && _v30(!0);
      }, [_v30]),
      _v37 = (0, _v3.useCallback)(_v0 => {
        " " === _v0.key && _v30(!1);
      }, [_v30]),
      _v38 = (0, _v3.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        "data-active": (0, _v1.dataAttr)(_v29),
        "data-hover": (0, _v1.dataAttr)(_v27),
        "data-disabled": (0, _v1.dataAttr)(_v19),
        "data-invalid": (0, _v1.dataAttr)(_v22),
        "data-checked": (0, _v1.dataAttr)(_v34),
        "data-focus": (0, _v1.dataAttr)(_v25),
        "data-focus-visible": (0, _v1.dataAttr)(_v25 && _v23),
        "data-readonly": (0, _v1.dataAttr)(_v20),
        "aria-hidden": !0,
        onMouseDown: (0, _v1.callAllHandlers)(_v0.onMouseDown, () => _v30(!0)),
        onMouseUp: (0, _v1.callAllHandlers)(_v0.onMouseUp, () => _v30(!1)),
        onMouseEnter: (0, _v1.callAllHandlers)(_v0.onMouseEnter, () => _v28(!0)),
        onMouseLeave: (0, _v1.callAllHandlers)(_v0.onMouseLeave, () => _v28(!1))
      }), [_v29, _v27, _v19, _v22, _v34, _v25, _v20, _v23]),
      {
        onFocus: _v39,
        onBlur: _v40
      } = null != _v16 ? _v16 : {},
      _v41 = (0, _v3.useCallback)((_v0 = {}, _v1 = null) => {
        let _v2 = _v19 && !_v3;
        return {
          ..._v0,
          id: _v18,
          ref: _v1,
          type: "radio",
          name: _v9,
          value: _v10,
          onChange: (0, _v1.callAllHandlers)(_v0.onChange, _v35),
          onBlur: (0, _v1.callAllHandlers)(_v40, _v0.onBlur, () => _v26(!1)),
          onFocus: (0, _v1.callAllHandlers)(_v39, _v0.onFocus, () => _v26(!0)),
          onKeyDown: (0, _v1.callAllHandlers)(_v0.onKeyDown, _v36),
          onKeyUp: (0, _v1.callAllHandlers)(_v0.onKeyUp, _v37),
          checked: _v34,
          disabled: _v2,
          readOnly: _v20,
          required: _v21,
          "aria-invalid": (0, _v1.ariaAttr)(_v22),
          "aria-disabled": (0, _v1.ariaAttr)(_v2),
          "aria-required": (0, _v1.ariaAttr)(_v21),
          "data-readonly": (0, _v1.dataAttr)(_v20),
          "aria-describedby": _v13,
          style: _v14
        };
      }, [_v19, _v3, _v18, _v9, _v10, _v35, _v40, _v39, _v36, _v37, _v34, _v20, _v21, _v22, _v13]);
    return {
      state: {
        isInvalid: _v22,
        isFocused: _v25,
        isChecked: _v34,
        isActive: _v29,
        isHovered: _v27,
        isDisabled: _v19,
        isReadOnly: _v20,
        isRequired: _v21
      },
      getCheckboxProps: _v38,
      getRadioProps: _v38,
      getInputProps: _v41,
      getLabelProps: (_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        onMouseDown: (0, _v1.callAllHandlers)(_v0.onMouseDown, _v15),
        "data-disabled": (0, _v1.dataAttr)(_v19),
        "data-checked": (0, _v1.dataAttr)(_v34),
        "data-invalid": (0, _v1.dataAttr)(_v22)
      }),
      getRootProps: (_v0, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        "data-disabled": (0, _v1.dataAttr)(_v19),
        "data-checked": (0, _v1.dataAttr)(_v34),
        "data-invalid": (0, _v1.dataAttr)(_v22)
      }),
      htmlProps: _v14
    };
  }], 0);
}