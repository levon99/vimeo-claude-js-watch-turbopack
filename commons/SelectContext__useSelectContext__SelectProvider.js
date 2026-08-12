{
  "use strict";

  _v0.s([], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let [_v6, _v7] = (0, _v5.createContext)({
    name: "SelectContext",
    hookName: "useSelectContext",
    providerName: "<SelectProvider />"
  });
  _v0.s(["SelectProvider", 0, _v6, "useSelectContext", 0, _v7], 0);
  let _v8 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getClearTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v8.displayName = "SelectClearTrigger", _v0.s(["SelectClearTrigger", 0, _v8], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v10.usePresenceContext)(),
      _v4 = (0, _v2.mergeProps)(_v2.getContentProps(), _v3.getPresenceProps(), _v0);
    return _v3.unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: (0, _v9.composeRefs)(_v3.ref, _v1)
    });
  });
  _v11.displayName = "SelectContent", _v0.s(["SelectContent", 0, _v11], 0), _v0.s(["SelectContext", 0, _v0 => _v0.children(_v7())], 0);
  let _v12 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getControlProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v12.displayName = "SelectControl", _v0.s(["SelectControl", 0, _v12], 0);
  var _v13 = _v0.i(0);
  let _v14 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getHiddenSelectProps(), _v0),
      _v4 = 0 === _v2.value.length,
      _v5 = (0, _v13.useFieldContext)();
    return (0, _v1.jsxs)(_v4.ark.select, {
      "aria-describedby": _v5?.ariaDescribedby,
      ..._v3,
      ref: _v1,
      children: [_v4 && (0, _v1.jsx)("option", {
        value: ""
      }), _v2.collection.items.map((_v0, _v1) => (0, _v1.jsx)("option", {
        value: _v2.collection.getItemValue(_v0) ?? "",
        disabled: _v2.collection.getItemDisabled(_v0),
        children: _v2.collection.stringifyItem(_v0)
      }, _v1))]
    });
  });
  _v14.displayName = "SelectHiddenSelect", _v0.s(["SelectHiddenSelect", 0, _v14], 0);
  let _v15 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getIndicatorProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v15.displayName = "SelectIndicator", _v0.s(["SelectIndicator", 0, _v15], 0);
  var _v16 = _v0.i(0);
  let [_v17, _v18] = (0, _v5.createContext)({
      name: "SelectItemContext",
      hookName: "useSelectItemContext",
      providerName: "<SelectItemProvider />"
    }),
    [_v19, _v20] = (0, _v5.createContext)({
      name: "SelectItemPropsContext",
      hookName: "useSelectItemPropsContext",
      providerName: "<SelectItemPropsProvider />"
    }),
    _v21 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v16.createSplitProps)()(_v0, ["item", "persistFocus"]),
        _v4 = _v7(),
        _v5 = (0, _v2.mergeProps)(_v4.getItemProps(_v2), _v3),
        _v6 = _v4.getItemState(_v2);
      return (0, _v1.jsx)(_v19, {
        value: _v2,
        children: (0, _v1.jsx)(_v17, {
          value: _v6,
          children: (0, _v1.jsx)(_v4.ark.div, {
            ..._v5,
            ref: _v1
          })
        })
      });
    });
  _v21.displayName = "SelectItem", _v0.s(["SelectItem", 0, _v21], 0), _v0.s(["SelectItemContext", 0, _v0 => _v0.children(_v18())], 0);
  let [_v22, _v23] = (0, _v5.createContext)({
      name: "SelectItemGroupPropsContext",
      hookName: "useSelectItemGroupPropsContext",
      providerName: "<SelectItemGroupPropsProvider />"
    }),
    _v24 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v3.useId)(),
        [_v3, _v4] = (0, _v16.createSplitProps)()(_v0, ["id"]),
        _v5 = {
          id: _v2,
          ..._v3
        },
        _v6 = _v7(),
        _v7 = (0, _v2.mergeProps)(_v6.getItemGroupProps(_v5), _v4);
      return (0, _v1.jsx)(_v22, {
        value: _v5,
        children: (0, _v1.jsx)(_v4.ark.div, {
          ..._v7,
          ref: _v1
        })
      });
    });
  _v24.displayName = "SelectItemGroup", _v0.s(["SelectItemGroup", 0, _v24], 0);
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
  _v25.displayName = "SelectItemGroupLabel", _v0.s(["SelectItemGroupLabel", 0, _v25], 0);
  let _v26 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = _v20(),
      _v4 = (0, _v2.mergeProps)(_v2.getItemIndicatorProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v26.displayName = "SelectItemIndicator", _v0.s(["SelectItemIndicator", 0, _v26], 0);
  let _v27 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = _v20(),
      _v4 = (0, _v2.mergeProps)(_v2.getItemTextProps(_v3), _v0);
    return (0, _v1.jsx)(_v4.ark.span, {
      ..._v4,
      ref: _v1
    });
  });
  _v27.displayName = "SelectItemText", _v0.s(["SelectItemText", 0, _v27], 0);
  let _v28 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getLabelProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.label, {
      ..._v3,
      ref: _v1
    });
  });
  _v28.displayName = "SelectLabel", _v0.s(["SelectLabel", 0, _v28], 0);
  let _v29 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getListProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v29.displayName = "SelectList", _v0.s(["SelectList", 0, _v29], 0);
  let _v30 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = _v7(),
      _v3 = (0, _v2.mergeProps)(_v2.getPositionerProps(), _v0);
    return (0, _v10.usePresenceContext)().unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v30.displayName = "SelectPositioner", _v0.s(["SelectPositioner", 0, _v30], 0);
}