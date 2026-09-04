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
  function _v9(_v0, _v1) {
    return !!_v0 && (_v0 === _v1 || _v0.contains(_v1));
  }
  var _v10 = _v0.i(0),
    [_v11, _v12] = (0, _v10.createContext)({
      name: "EditableStylesContext",
      errorMessage: "useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Editable />\" "
    }),
    [_v13, _v14] = (0, _v10.createContext)({
      name: "EditableContext",
      errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
    });
  _v0.s(["EditableProvider", 0, _v13, "EditableStylesProvider", 0, _v11, "useEditableContext", 0, _v14, "useEditableStyles", 0, _v12], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = (0, _v16.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v18.useMultiStyleConfig)("Editable", _v0),
        {
          htmlProps: _v3,
          ..._v4
        } = function (_v0 = {}) {
          let {
              onChange: _v1,
              onCancel: _v2,
              onSubmit: _v3,
              onBlur: _v4,
              value: _v5,
              isDisabled: _v6,
              defaultValue: _v7,
              startWithEditView: _v8,
              isPreviewFocusable: _v9 = !0,
              submitOnBlur: _v10 = !0,
              selectAllOnFocus: _v11 = !0,
              placeholder: _v12,
              onEdit: _v13,
              finalFocusRef: _v14,
              ..._v15
            } = _v0,
            _v16 = (0, _v6.useCallbackRef)(_v13),
            _v17 = !!(_v8 && !_v6),
            [_v18, _v19] = (0, _v8.useState)(_v17),
            [_v20, _v21] = (0, _v4.useControllableState)({
              defaultValue: _v7 || "",
              value: _v5,
              onChange: _v1
            }),
            [_v22, _v23] = (0, _v8.useState)(_v20),
            _v24 = (0, _v8.useRef)(null),
            _v25 = (0, _v8.useRef)(null),
            _v26 = (0, _v8.useRef)(null),
            _v27 = (0, _v8.useRef)(null),
            _v28 = (0, _v8.useRef)(null);
          (0, _v1.useFocusOnPointerDown)({
            ref: _v24,
            enabled: _v18,
            elements: [_v27, _v28]
          });
          let _v29 = !_v18 && !_v6;
          (0, _v2.useSafeLayoutEffect)(() => {
            var _v0, _v1;
            _v18 && (null == (_v0 = _v24.current) || _v0.focus(), _v11 && (null == (_v1 = _v24.current) || _v1.select()));
          }, []), (0, _v3.useUpdateEffect)(() => {
            var _v0, _v1, _v2, _v3;
            _v18 ? (null == (_v2 = _v24.current) || _v2.focus(), _v11 && (null == (_v3 = _v24.current) || _v3.select()), null == _v16 || _v16()) : _v14 ? null == (_v0 = _v14.current) || _v0.focus() : null == (_v1 = _v26.current) || _v1.focus();
          }, [_v18, _v16, _v11]);
          let _v30 = (0, _v8.useCallback)(() => {
              _v29 && _v19(!0);
            }, [_v29]),
            _v31 = (0, _v8.useCallback)(() => {
              _v23(_v20);
            }, [_v20]),
            _v32 = (0, _v8.useCallback)(() => {
              _v19(!1), _v21(_v22), null == _v2 || _v2(_v22), null == _v4 || _v4(_v22);
            }, [_v2, _v4, _v21, _v22]),
            _v33 = (0, _v8.useCallback)(() => {
              _v19(!1), _v23(_v20), null == _v3 || _v3(_v20), null == _v4 || _v4(_v22);
            }, [_v20, _v3, _v4, _v22]);
          (0, _v8.useEffect)(() => {
            if (_v18) return;
            let _v0 = _v24.current;
            (null == _v0 ? void 0 : _v0.ownerDocument.activeElement) === _v0 && (null == _v0 || _v0.blur());
          }, [_v18]);
          let _v34 = (0, _v8.useCallback)(_v0 => {
              _v21(_v0.currentTarget.value);
            }, [_v21]),
            _v35 = (0, _v8.useCallback)(_v0 => {
              let _v1 = {
                Escape: _v32,
                Enter: _v0 => {
                  _v0.shiftKey || _v0.metaKey || _v33();
                }
              }[_v0.key];
              _v1 && (_v0.preventDefault(), _v1(_v0));
            }, [_v32, _v33]),
            _v36 = (0, _v8.useCallback)(_v0 => {
              let _v1 = {
                Escape: _v32
              }[_v0.key];
              _v1 && (_v0.preventDefault(), _v1(_v0));
            }, [_v32]),
            _v37 = 0 === _v20.length,
            _v38 = (0, _v8.useCallback)(_v0 => {
              var _v1;
              if (!_v18) return;
              let _v2 = _v0.currentTarget.ownerDocument,
                _v3 = null != (_v1 = _v0.relatedTarget) ? _v1 : _v2.activeElement,
                _v4 = _v9(_v27.current, _v3),
                _v5 = _v9(_v28.current, _v3);
              _v4 || _v5 || (_v10 ? _v33() : _v32());
            }, [_v10, _v33, _v32, _v18]),
            _v39 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => {
              let _v2 = _v29 && _v9 ? 0 : void 0;
              return {
                ..._v0,
                ref: (0, _v5.mergeRefs)(_v1, _v25),
                children: _v37 ? _v12 : _v20,
                hidden: _v18,
                "aria-disabled": (0, _v7.ariaAttr)(_v6),
                tabIndex: _v2,
                onFocus: (0, _v7.callAllHandlers)(_v0.onFocus, _v30, _v31)
              };
            }, [_v6, _v18, _v29, _v9, _v37, _v30, _v31, _v12, _v20]),
            _v40 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              ..._v0,
              hidden: !_v18,
              placeholder: _v12,
              ref: (0, _v5.mergeRefs)(_v1, _v24),
              disabled: _v6,
              "aria-disabled": (0, _v7.ariaAttr)(_v6),
              value: _v20,
              onBlur: (0, _v7.callAllHandlers)(_v0.onBlur, _v38),
              onChange: (0, _v7.callAllHandlers)(_v0.onChange, _v34),
              onKeyDown: (0, _v7.callAllHandlers)(_v0.onKeyDown, _v35),
              onFocus: (0, _v7.callAllHandlers)(_v0.onFocus, _v31)
            }), [_v6, _v18, _v38, _v34, _v35, _v31, _v12, _v20]),
            _v41 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              ..._v0,
              hidden: !_v18,
              placeholder: _v12,
              ref: (0, _v5.mergeRefs)(_v1, _v24),
              disabled: _v6,
              "aria-disabled": (0, _v7.ariaAttr)(_v6),
              value: _v20,
              onBlur: (0, _v7.callAllHandlers)(_v0.onBlur, _v38),
              onChange: (0, _v7.callAllHandlers)(_v0.onChange, _v34),
              onKeyDown: (0, _v7.callAllHandlers)(_v0.onKeyDown, _v36),
              onFocus: (0, _v7.callAllHandlers)(_v0.onFocus, _v31)
            }), [_v6, _v18, _v38, _v34, _v36, _v31, _v12, _v20]),
            _v42 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              "aria-label": "Edit",
              ..._v0,
              type: "button",
              onClick: (0, _v7.callAllHandlers)(_v0.onClick, _v30),
              ref: (0, _v5.mergeRefs)(_v1, _v26),
              disabled: _v6
            }), [_v30, _v6]),
            _v43 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              ..._v0,
              "aria-label": "Submit",
              ref: (0, _v5.mergeRefs)(_v28, _v1),
              type: "button",
              onClick: (0, _v7.callAllHandlers)(_v0.onClick, _v33),
              disabled: _v6
            }), [_v33, _v6]),
            _v44 = (0, _v8.useCallback)((_v0 = {}, _v1 = null) => ({
              "aria-label": "Cancel",
              id: "cancel",
              ..._v0,
              ref: (0, _v5.mergeRefs)(_v27, _v1),
              type: "button",
              onClick: (0, _v7.callAllHandlers)(_v0.onClick, _v32),
              disabled: _v6
            }), [_v32, _v6]);
          return {
            isEditing: _v18,
            isDisabled: _v6,
            isValueEmpty: _v37,
            value: _v20,
            onEdit: _v30,
            onCancel: _v32,
            onSubmit: _v33,
            getPreviewProps: _v39,
            getInputProps: _v40,
            getTextareaProps: _v41,
            getEditButtonProps: _v42,
            getSubmitButtonProps: _v43,
            getCancelButtonProps: _v44,
            htmlProps: _v15
          };
        }((0, _v17.omitThemingProps)(_v0)),
        {
          isEditing: _v5,
          onSubmit: _v6,
          onCancel: _v7,
          onEdit: _v8
        } = _v4,
        _v9 = (0, _v7.cx)("chakra-editable", _v0.className),
        _v10 = (0, _v7.runIfFn)(_v0.children, {
          isEditing: _v5,
          onSubmit: _v6,
          onCancel: _v7,
          onEdit: _v8
        });
      return (0, _v19.jsx)(_v13, {
        value: _v4,
        children: (0, _v19.jsx)(_v11, {
          value: _v2,
          children: (0, _v19.jsx)(_v15.chakra.div, {
            ref: _v1,
            ..._v3,
            className: _v9,
            children: _v10
          })
        })
      });
    });
  _v20.displayName = "Editable", _v0.s(["Editable", 0, _v20], 0), _v0.s(["commonStyles", 0, {
    fontSize: "inherit",
    fontWeight: "inherit",
    textAlign: "inherit",
    bg: "transparent"
  }], 0);
}