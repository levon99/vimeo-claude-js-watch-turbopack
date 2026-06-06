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
  function _v10(_v0) {
    _v0.preventDefault(), _v0.stopPropagation();
  }
  _v0.s(["useCheckbox", 0, function (_v0 = {}) {
    let {
        isDisabled: _v1,
        isReadOnly: _v2,
        isRequired: _v3,
        isInvalid: _v4,
        id: _v5,
        onBlur: _v6,
        onFocus: _v7,
        "aria-describedby": _v8
      } = (0, _v1.useFormControlProps)(_v0),
      {
        defaultChecked: _v9,
        isChecked: _v10,
        isFocusable: _v11,
        onChange: _v12,
        isIndeterminate: _v13,
        name: _v14,
        value: _v15,
        tabIndex: _v16,
        "aria-label": _v17,
        "aria-labelledby": _v18,
        "aria-invalid": _v19,
        ..._v20
      } = _v0,
      _v21 = function (_v0, _v1 = []) {
        let _v2 = Object.assign({}, _v0);
        for (let _v0 of _v1) _v0 in _v2 && delete _v2[_v0];
        return _v2;
      }(_v20, ["isDisabled", "isReadOnly", "isRequired", "isInvalid", "id", "onBlur", "onFocus", "aria-describedby"]),
      _v22 = (0, _v4.useCallbackRef)(_v12),
      _v23 = (0, _v4.useCallbackRef)(_v6),
      _v24 = (0, _v4.useCallbackRef)(_v7),
      [_v25, _v26] = (0, _v9.useState)(!1),
      [_v27, _v28] = (0, _v9.useState)(!1),
      [_v29, _v30] = (0, _v9.useState)(!1),
      [_v31, _v32] = (0, _v9.useState)(!1);
    (0, _v9.useEffect)(() => (0, _v8.trackFocusVisible)(_v26), []);
    let _v33 = (0, _v9.useRef)(null),
      [_v34, _v35] = (0, _v9.useState)(!0),
      [_v36, _v37] = (0, _v9.useState)(!!_v9),
      _v38 = void 0 !== _v10,
      _v39 = _v38 ? _v10 : _v36,
      _v40 = (0, _v9.useCallback)(_v0 => {
        _v2 || _v1 ? _v0.preventDefault() : (_v38 || (_v39 ? _v37(_v0.target.checked) : _v37(!!_v13 || _v0.target.checked)), null == _v22 || _v22(_v0));
      }, [_v2, _v1, _v39, _v38, _v13, _v22]);
    (0, _v2.useSafeLayoutEffect)(() => {
      _v33.current && (_v33.current.indeterminate = !!_v13);
    }, [_v13]), (0, _v3.useUpdateEffect)(() => {
      _v1 && _v28(!1);
    }, [_v1, _v28]), (0, _v2.useSafeLayoutEffect)(() => {
      let _v0 = _v33.current;
      if (!(null == _v0 ? void 0 : _v0.form)) return;
      let _v1 = () => {
        _v37(!!_v9);
      };
      return _v0.form.addEventListener("reset", _v1), () => {
        var _v0;
        return null == (_v0 = _v0.form) ? void 0 : _v0.removeEventListener("reset", _v1);
      };
    }, []);
    let _v41 = _v1 && !_v11,
      _v42 = (0, _v9.useCallback)(_v0 => {
        " " === _v0.key && _v32(!0);
      }, [_v32]),
      _v43 = (0, _v9.useCallback)(_v0 => {
        " " === _v0.key && _v32(!1);
      }, [_v32]);
    (0, _v2.useSafeLayoutEffect)(() => {
      _v33.current && _v33.current.checked !== _v39 && _v37(_v33.current.checked);
    }, [_v33.current]);
    let _v44 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        "data-active": (0, _v6.dataAttr)(_v31),
        "data-hover": (0, _v6.dataAttr)(_v29),
        "data-checked": (0, _v6.dataAttr)(_v39),
        "data-focus": (0, _v6.dataAttr)(_v27),
        "data-focus-visible": (0, _v6.dataAttr)(_v27 && _v25),
        "data-indeterminate": (0, _v6.dataAttr)(_v13),
        "data-disabled": (0, _v6.dataAttr)(_v1),
        "data-invalid": (0, _v6.dataAttr)(_v4),
        "data-readonly": (0, _v6.dataAttr)(_v2),
        "aria-hidden": !0,
        onMouseDown: (0, _v6.callAllHandlers)(_v0.onMouseDown, _v0 => {
          _v27 && _v0.preventDefault(), _v32(!0);
        }),
        onMouseUp: (0, _v6.callAllHandlers)(_v0.onMouseUp, () => _v32(!1)),
        onMouseEnter: (0, _v6.callAllHandlers)(_v0.onMouseEnter, () => _v30(!0)),
        onMouseLeave: (0, _v6.callAllHandlers)(_v0.onMouseLeave, () => _v30(!1))
      }), [_v31, _v39, _v1, _v27, _v25, _v29, _v13, _v4, _v2]),
      _v45 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        "data-active": (0, _v6.dataAttr)(_v31),
        "data-hover": (0, _v6.dataAttr)(_v29),
        "data-checked": (0, _v6.dataAttr)(_v39),
        "data-focus": (0, _v6.dataAttr)(_v27),
        "data-focus-visible": (0, _v6.dataAttr)(_v27 && _v25),
        "data-indeterminate": (0, _v6.dataAttr)(_v13),
        "data-disabled": (0, _v6.dataAttr)(_v1),
        "data-invalid": (0, _v6.dataAttr)(_v4),
        "data-readonly": (0, _v6.dataAttr)(_v2)
      }), [_v31, _v39, _v1, _v27, _v25, _v29, _v13, _v4, _v2]),
      _v46 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v21,
        ..._v0,
        ref: (0, _v5.mergeRefs)(_v1, _v0 => {
          _v0 && _v35("LABEL" === _v0.tagName);
        }),
        onClick: (0, _v6.callAllHandlers)(_v0.onClick, () => {
          var _v0;
          _v34 || (null == (_v0 = _v33.current) || _v0.click(), requestAnimationFrame(() => {
            var _v0;
            null == (_v0 = _v33.current) || _v0.focus({
              preventScroll: !0
            });
          }));
        }),
        "data-disabled": (0, _v6.dataAttr)(_v1),
        "data-checked": (0, _v6.dataAttr)(_v39),
        "data-invalid": (0, _v6.dataAttr)(_v4)
      }), [_v21, _v1, _v39, _v4, _v34]),
      _v47 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: (0, _v5.mergeRefs)(_v33, _v1),
        type: "checkbox",
        name: _v14,
        value: _v15,
        id: _v5,
        tabIndex: _v16,
        onChange: (0, _v6.callAllHandlers)(_v0.onChange, _v40),
        onBlur: (0, _v6.callAllHandlers)(_v0.onBlur, _v23, () => _v28(!1)),
        onFocus: (0, _v6.callAllHandlers)(_v0.onFocus, _v24, () => _v28(!0)),
        onKeyDown: (0, _v6.callAllHandlers)(_v0.onKeyDown, _v42),
        onKeyUp: (0, _v6.callAllHandlers)(_v0.onKeyUp, _v43),
        required: _v3,
        checked: _v39,
        disabled: _v41,
        readOnly: _v2,
        "aria-label": _v17,
        "aria-labelledby": _v18,
        "aria-invalid": _v19 ? !!_v19 : _v4,
        "aria-describedby": _v8,
        "aria-disabled": _v1,
        style: _v7.visuallyHiddenStyle
      }), [_v14, _v15, _v5, _v40, _v23, _v24, _v42, _v43, _v3, _v39, _v41, _v2, _v17, _v18, _v19, _v4, _v8, _v1, _v16]),
      _v48 = (0, _v9.useCallback)((_v0 = {}, _v1 = null) => ({
        ..._v0,
        ref: _v1,
        onMouseDown: (0, _v6.callAllHandlers)(_v0.onMouseDown, _v10),
        "data-disabled": (0, _v6.dataAttr)(_v1),
        "data-checked": (0, _v6.dataAttr)(_v39),
        "data-invalid": (0, _v6.dataAttr)(_v4)
      }), [_v39, _v1, _v4]);
    return {
      state: {
        isInvalid: _v4,
        isFocused: _v27,
        isChecked: _v39,
        isActive: _v31,
        isHovered: _v29,
        isIndeterminate: _v13,
        isDisabled: _v1,
        isReadOnly: _v2,
        isRequired: _v3
      },
      getRootProps: _v46,
      getCheckboxProps: _v44,
      getIndicatorProps: _v45,
      getInputProps: _v47,
      getLabelProps: _v48,
      htmlProps: _v21
    };
  }]);
}