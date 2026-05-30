{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    [_v7, _v8] = (0, _v2.createContext)({
      name: "AccordionContext",
      hookName: "useAccordionContext",
      providerName: "Accordion"
    });
  _v0.s(["AccordionProvider", 0, _v7, "useAccordion", 0, function (_v0) {
    var _v1, _v2;
    let _v3,
      _v4,
      {
        onChange: _v5,
        defaultIndex: _v6,
        index: _v7,
        allowMultiple: _v8,
        allowToggle: _v9,
        ..._v10
      } = _v0;
    _v4 = null != (_v3 = (_v1 = _v0).index || _v1.defaultIndex) && !Array.isArray(_v3) && _v1.allowMultiple, (0, _v5.warn)({
      condition: !!_v4,
      message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof _v3},`
    }), _v2 = _v0, (0, _v5.warn)({
      condition: !!(_v2.allowMultiple && _v2.allowToggle),
      message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
    });
    let _v11 = (0, _v1.useAccordionDescendants)(),
      [_v12, _v13] = (0, _v6.useState)(-1);
    (0, _v6.useEffect)(() => () => {
      _v13(-1);
    }, []);
    let [_v14, _v15] = (0, _v3.useControllableState)({
      value: _v7,
      defaultValue: () => _v8 ? null != _v6 ? _v6 : [] : null != _v6 ? _v6 : -1,
      onChange: _v5
    });
    return {
      index: _v14,
      setIndex: _v15,
      htmlProps: _v10,
      getAccordionItemProps: _v0 => {
        let _v1 = !1;
        return null !== _v0 && (_v1 = Array.isArray(_v14) ? _v14.includes(_v0) : _v14 === _v0), {
          isOpen: _v1,
          onChange: _v0 => {
            null !== _v0 && (_v8 && Array.isArray(_v14) ? _v15(_v0 ? _v14.concat(_v0) : _v14.filter(_v0 => _v0 !== _v0)) : _v0 ? _v15(_v0) : _v9 && _v15(-1));
          }
        };
      },
      focusedIndex: _v12,
      setFocusedIndex: _v13,
      descendants: _v11
    };
  }, "useAccordionContext", 0, _v8, "useAccordionItem", 0, function (_v0) {
    var _v1, _v2;
    let {
        isDisabled: _v3,
        isFocusable: _v4,
        id: _v5,
        ..._v6
      } = _v0,
      {
        getAccordionItemProps: _v7,
        setFocusedIndex: _v8
      } = _v8(),
      _v9 = (0, _v6.useRef)(null),
      _v10 = (0, _v6.useId)(),
      _v11 = null != _v5 ? _v5 : _v10,
      _v12 = `accordion-button-${_v11}`,
      _v13 = `accordion-panel-${_v11}`;
    _v1 = _v0, (0, _v5.warn)({
      condition: !!(_v1.isFocusable && !_v1.isDisabled),
      message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
    });
    let {
        register: _v14,
        index: _v15,
        descendants: _v16
      } = (0, _v1.useAccordionDescendant)({
        disabled: _v3 && !_v4
      }),
      {
        isOpen: _v17,
        onChange: _v18
      } = _v7(-1 === _v15 ? null : _v15);
    _v2 = {
      isOpen: _v17,
      isDisabled: _v3
    }, (0, _v5.warn)({
      condition: _v2.isOpen && !!_v2.isDisabled,
      message: "Cannot open a disabled accordion item"
    });
    let _v19 = (0, _v6.useCallback)(() => {
        null == _v18 || _v18(!_v17), _v8(_v15);
      }, [_v15, _v8, _v17, _v18]),
      _v20 = (0, _v6.useCallback)(_v0 => {
        let _v1 = {
          ArrowDown: () => {
            let _v0 = _v16.nextEnabled(_v15);
            null == _v0 || _v0.node.focus();
          },
          ArrowUp: () => {
            let _v0 = _v16.prevEnabled(_v15);
            null == _v0 || _v0.node.focus();
          },
          Home: () => {
            let _v0 = _v16.firstEnabled();
            null == _v0 || _v0.node.focus();
          },
          End: () => {
            let _v0 = _v16.lastEnabled();
            null == _v0 || _v0.node.focus();
          }
        }[_v0.key];
        _v1 && (_v0.preventDefault(), _v1(_v0));
      }, [_v16, _v15]),
      _v21 = (0, _v6.useCallback)(() => {
        _v8(_v15);
      }, [_v8, _v15]),
      _v22 = (0, _v6.useCallback)(function (_v0 = {}, _v1 = null) {
        return {
          ..._v0,
          type: "button",
          ref: (0, _v4.mergeRefs)(_v14, _v9, _v1),
          id: _v12,
          disabled: !!_v3,
          "aria-expanded": !!_v17,
          "aria-controls": _v13,
          onClick: (0, _v5.callAllHandlers)(_v0.onClick, _v19),
          onFocus: (0, _v5.callAllHandlers)(_v0.onFocus, _v21),
          onKeyDown: (0, _v5.callAllHandlers)(_v0.onKeyDown, _v20)
        };
      }, [_v12, _v3, _v17, _v19, _v21, _v20, _v13, _v14]),
      _v23 = (0, _v6.useCallback)(function (_v0 = {}, _v1 = null) {
        return {
          ..._v0,
          ref: _v1,
          role: "region",
          id: _v13,
          "aria-labelledby": _v12,
          hidden: !_v17
        };
      }, [_v12, _v17, _v13]);
    return {
      isOpen: _v17,
      isDisabled: _v3,
      isFocusable: _v4,
      onOpen: () => {
        null == _v18 || _v18(!0);
      },
      onClose: () => {
        null == _v18 || _v18(!1);
      },
      getButtonProps: _v22,
      getPanelProps: _v23,
      htmlProps: _v6
    };
  }]);
}