{
  "use strict";

  _v0.s([], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let [_v6, _v7] = (0, _v5.createContext)({
    name: "MenuContext",
    hookName: "useMenuContext",
    providerName: "<MenuProvider />",
    strict: !1
  });
  _v0.s(["MenuProvider", 0, _v6, "useMenuContext", 0, _v7], 0);
  let _v8 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getArrowProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v8.displayName = "MenuArrow", _v0.s(["MenuArrow", 0, _v8], 0);
  let _v9 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getArrowTipProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v9.displayName = "MenuArrowTip", _v0.s(["MenuArrowTip", 0, _v9], 0);
  var _v10 = _v0.i(0);
  let [_v11, _v12] = (0, _v5.createContext)({
      name: "MenuItemContext",
      hookName: "useMenuItemContext",
      providerName: "<MenuItemProvider />"
    }),
    [_v13, _v14] = (0, _v5.createContext)({
      name: "MenuItemPropsContext",
      hookName: "useMenuItemPropsContext",
      providerName: "<MenuItemPropsProvider />"
    }),
    _v15 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v10.createSplitProps)()(_v0, ["checked", "closeOnSelect", "disabled", "onCheckedChange", "value", "valueText"]),
        _v4 = {
          ..._v2,
          type: "checkbox"
        },
        _v5 = _v7(),
        _v6 = (0, _v2.mergeProps)(_v5.getOptionItemProps(_v4), _v3),
        _v7 = _v5.getOptionItemState(_v4);
      return (0, _v1.jsx)(_v13, {
        value: _v4,
        children: (0, _v1.jsx)(_v11, {
          value: _v7,
          children: (0, _v1.jsx)(_v4.ark.div, {
            ..._v6,
            ref: _v1
          })
        })
      });
    });
  _v15.displayName = "MenuCheckboxItem", _v0.s(["MenuCheckboxItem", 0, _v15], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v17.usePresenceContext)(),
      _v4 = (0, _v2.mergeProps)(_v2.getContentProps(), _v3.getPresenceProps(), _v0);
    return _v3.unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: (0, _v16.composeRefs)(_v3.ref, _v1)
    });
  });
  _v18.displayName = "MenuContent", _v0.s(["MenuContent", 0, _v18], 0), _v0.s(["MenuContext", 0, _v0 => _v0.children(_v7())], 0);
  let _v19 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getContextTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v19.displayName = "MenuContextTrigger", _v0.s(["MenuContextTrigger", 0, _v19], 0);
  let _v20 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getIndicatorProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v20.displayName = "MenuIndicator", _v0.s(["MenuIndicator", 0, _v20], 0);
  let _v21 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v10.createSplitProps)()(_v0, ["closeOnSelect", "disabled", "value", "valueText", "onSelect"]),
      _v4 = _v7(),
      _v5 = (0, _v2.mergeProps)(_v4.getItemProps(_v2), _v3),
      _v6 = _v4.getItemState(_v2);
    return (0, _v3.useEffect)(() => _v4.addItemListener({
      id: _v6.id,
      onSelect: _v2.onSelect
    }), [_v6.id, _v2.onSelect]), (0, _v1.jsx)(_v13, {
      value: _v2,
      children: (0, _v1.jsx)(_v11, {
        value: _v6,
        children: (0, _v1.jsx)(_v4.ark.div, {
          ..._v5,
          ref: _v1
        })
      })
    });
  });
  _v21.displayName = "MenuItem", _v0.s(["MenuItem", 0, _v21], 0), _v0.s(["MenuItemContext", 0, _v0 => _v0.children(_v12())], 0);
  let [_v22, _v23] = (0, _v5.createContext)({
      name: "MenuItemGroupContext",
      hookName: "useMenuItemGroupContext",
      providerName: "<MenuItemGroupProvider />"
    }),
    _v24 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v10.createSplitProps)()(_v0, ["id"]),
        _v4 = _v7(),
        _v5 = {
          id: (0, _v3.useId)(),
          ..._v2
        },
        _v6 = (0, _v2.mergeProps)(_v4.getItemGroupProps(_v5), _v3);
      return (0, _v1.jsx)(_v22, {
        value: _v5,
        children: (0, _v1.jsx)(_v4.ark.div, {
          ..._v6,
          ref: _v1
        })
      });
    });
  _v24.displayName = "MenuItemGroup", _v0.s(["MenuItemGroup", 0, _v24], 0);
  let _v25 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = _v23(),
      _v4 = (0, _v2.mergeProps)(_v2.getItemGroupLabelProps({
        htmlFor: _v3.id
      }), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v25.displayName = "MenuItemGroupLabel", _v0.s(["MenuItemGroupLabel", 0, _v25], 0);
  let _v26 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = _v14(),
      _v4 = (0, _v2.mergeProps)(_v2.getItemIndicatorProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v26.displayName = "MenuItemIndicator", _v0.s(["MenuItemIndicator", 0, _v26], 0);
  let _v27 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = _v14(),
      _v4 = (0, _v2.mergeProps)(_v2.getItemTextProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v27.displayName = "MenuItemText", _v0.s(["MenuItemText", 0, _v27], 0);
  let _v28 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getPositionerProps(), _v0);
    return (0, _v17.usePresenceContext)().unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v28.displayName = "MenuPositioner", _v0.s(["MenuPositioner", 0, _v28], 0);
  let _v29 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v10.createSplitProps)()(_v0, ["closeOnSelect", "disabled", "value", "valueText"]),
      _v4 = _v7(),
      _v5 = _v23(),
      _v6 = {
        ..._v2,
        checked: _v5.value === _v2.value,
        type: "radio",
        onCheckedChange: () => _v5.onValueChange?.({
          value: _v2.value
        })
      },
      _v7 = (0, _v2.mergeProps)(_v4.getOptionItemProps(_v6), _v3),
      _v8 = _v4.getOptionItemState(_v6);
    return (0, _v1.jsx)(_v13, {
      value: _v6,
      children: (0, _v1.jsx)(_v11, {
        value: _v8,
        children: (0, _v1.jsx)(_v4.ark.div, {
          ..._v7,
          ref: _v1
        })
      })
    });
  });
  _v29.displayName = "MenuRadioItem", _v0.s(["MenuRadioItem", 0, _v29], 0);
  let _v30 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v10.createSplitProps)()(_v0, ["id", "onValueChange", "value"]),
      _v4 = _v7(),
      _v5 = {
        id: (0, _v3.useId)(),
        ..._v2
      },
      _v6 = (0, _v2.mergeProps)(_v4.getItemGroupProps({
        id: _v5.id
      }), _v3);
    return (0, _v1.jsx)(_v22, {
      value: _v5,
      children: (0, _v1.jsx)(_v4.ark.div, {
        ..._v6,
        ref: _v1
      })
    });
  });
  _v30.displayName = "MenuRadioItemGroup", _v0.s(["MenuRadioItemGroup", 0, _v30], 0), _v0.s(["useEffectOnce", 0, _v0 => {
    let _v1 = (0, _v3.useRef)(_v0),
      _v2 = (0, _v3.useRef)(!1);
    (0, _v3.useEffect)(() => {
      _v1.current = _v0;
    }), (0, _v3.useEffect)(() => {
      !0 !== _v2.current && (_v2.current = !0, _v1.current());
    }, []);
  }], 0);
}