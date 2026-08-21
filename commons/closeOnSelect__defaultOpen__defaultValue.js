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
  let _v11 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v6.splitPresenceProps)(_v0),
      [_v4, _v5] = (0, _v4.createSplitProps)()(_v3, ["closeOnSelect", "defaultOpen", "defaultValue", "defaultFormat", "disabled", "format", "id", "ids", "initialFocusEl", "invalid", "name", "name", "onFocusOutside", "onFormatChange", "onInteractOutside", "onOpenChange", "onPointerDownOutside", "onValueChange", "onValueChangeEnd", "open", "openAutoFocus", "positioning", "readOnly", "required", "value"]),
      _v6 = (0, _v9.useColorPicker)(_v4),
      _v7 = (0, _v7.usePresence)((0, _v2.mergeProps)({
        present: _v6.open
      }, _v2)),
      _v8 = (0, _v2.mergeProps)(_v6.getRootProps(), _v5);
    return (0, _v1.jsx)(_v10.ColorPickerProvider, {
      value: _v6,
      children: (0, _v1.jsx)(_v8.PresenceProvider, {
        value: _v7,
        children: (0, _v1.jsx)(_v5.ark.div, {
          ..._v8,
          ref: _v1
        })
      })
    });
  });
  _v11.displayName = "ColorPickerRoot", _v0.s(["ColorPickerRoot", 0, _v11], 0);
  let _v12 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v6.splitPresenceProps)(_v0),
      [{
        value: _v4
      }, _v5] = (0, _v4.createSplitProps)()(_v3, ["value"]),
      _v6 = (0, _v7.usePresence)((0, _v2.mergeProps)({
        present: _v4.open
      }, _v2)),
      _v7 = (0, _v2.mergeProps)(_v4.getRootProps(), _v5);
    return (0, _v1.jsx)(_v10.ColorPickerProvider, {
      value: _v4,
      children: (0, _v1.jsx)(_v8.PresenceProvider, {
        value: _v6,
        children: (0, _v1.jsx)(_v5.ark.div, {
          ..._v7,
          ref: _v1
        })
      })
    });
  });
  _v12.displayName = "ColorPickerRootProvider", _v0.s(["ColorPickerRootProvider", 0, _v12], 0);
  let [_v13, _v14] = (0, _v0.i(0).createContext)({
      name: "ColorPickerSwatchContext",
      hookName: "useColorPickerSwatchContext",
      providerName: "<ColorPickerSwatchProvider />"
    }),
    _v15 = (0, _v3.forwardRef)((_v0, _v1) => {
      let [_v2, _v3] = (0, _v4.createSplitProps)()(_v0, ["respectAlpha", "value"]),
        _v4 = (0, _v10.useColorPickerContext)(),
        _v5 = (0, _v2.mergeProps)(_v4.getSwatchProps(_v2), _v3);
      return (0, _v1.jsx)(_v13, {
        value: _v2,
        children: (0, _v1.jsx)(_v5.ark.div, {
          ..._v5,
          ref: _v1
        })
      });
    });
  _v15.displayName = "ColorPickerSwatch", _v0.s(["ColorPickerSwatch", 0, _v15], 0);
  let _v16 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v10.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getSwatchGroupProps(), _v0);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v16.displayName = "ColorPickerSwatchGroup", _v0.s(["ColorPickerSwatchGroup", 0, _v16], 0);
  let _v17 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v10.useColorPickerContext)(),
      _v3 = _v14(),
      _v4 = (0, _v2.mergeProps)(_v2.getSwatchIndicatorProps(_v3), _v0);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v4,
      ref: _v1
    });
  });
  _v17.displayName = "ColorPickerSwatchIndicator", _v0.s(["ColorPickerSwatchIndicator", 0, _v17], 0);
  let _v18 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v4.createSplitProps)()(_v0, ["value", "disabled"]),
      _v4 = (0, _v10.useColorPickerContext)(),
      _v5 = (0, _v2.mergeProps)(_v4.getSwatchTriggerProps(_v2), _v3);
    return (0, _v1.jsx)(_v5.ark.button, {
      ..._v5,
      ref: _v1
    });
  });
  _v18.displayName = "ColorPickerSwatchTrigger", _v0.s(["ColorPickerSwatchTrigger", 0, _v18], 0);
  let _v19 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [_v2, _v3] = (0, _v4.createSplitProps)()(_v0, ["size"]),
      _v4 = (0, _v10.useColorPickerContext)(),
      _v5 = (0, _v2.mergeProps)(_v4.getTransparencyGridProps(_v2), _v3);
    return (0, _v1.jsx)(_v5.ark.div, {
      ..._v5,
      ref: _v1
    });
  });
  _v19.displayName = "ColorPickerTransparencyGrid", _v0.s(["ColorPickerTransparencyGrid", 0, _v19], 0);
  let _v20 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v10.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getTriggerProps(), _v0);
    return (0, _v1.jsx)(_v5.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v20.displayName = "ColorPickerTrigger", _v0.s(["ColorPickerTrigger", 0, _v20], 0);
  let _v21 = (0, _v3.forwardRef)((_v0, _v1) => {
    let [{
        respectAlpha: _v2
      }, _v3] = (0, _v4.createSplitProps)()(_v0, ["respectAlpha"]),
      _v4 = (0, _v10.useColorPickerContext)(),
      _v5 = {
        respectAlpha: _v2,
        value: _v4.valueAsString
      },
      _v6 = (0, _v2.mergeProps)(_v4.getSwatchProps(_v5), _v3);
    return (0, _v1.jsx)(_v13, {
      value: _v5,
      children: (0, _v1.jsx)(_v5.ark.div, {
        ..._v6,
        ref: _v1
      })
    });
  });
  _v21.displayName = "ColorPickerValueSwatch", _v0.s(["ColorPickerValueSwatch", 0, _v21], 0);
}