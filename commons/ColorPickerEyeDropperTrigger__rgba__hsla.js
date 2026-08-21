{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getEyeDropperTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v6.displayName = "ColorPickerEyeDropperTrigger", _v0.s(["ColorPickerEyeDropperTrigger", 0, _v6], 0);
  let _v7 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getFormatSelectProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.select, {
      ..._v3,
      ref: _v1,
      children: ["rgba", "hsla", "hsba"].map(_v0 => (0, _v1.jsx)(_v4.ark.option, {
        value: _v0,
        children: _v0
      }, _v0))
    });
  });
  _v7.displayName = "ColorPickerFormatSelect", _v0.s(["ColorPickerFormatSelect", 0, _v7], 0);
  let _v8 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getFormatTriggerProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.button, {
      ..._v3,
      ref: _v1
    });
  });
  _v8.displayName = "ColorPickerFormatTrigger", _v0.s(["ColorPickerFormatTrigger", 0, _v8], 0);
  var _v9 = _v0.i(0);
  let _v10 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getHiddenInputProps(), _v0),
      _v4 = (0, _v9.useFieldContext)();
    return (0, _v1.jsx)(_v4.ark.input, {
      "aria-describedby": _v4?.ariaDescribedby,
      ..._v3,
      ref: _v1
    });
  });
  _v10.displayName = "ColorPickerHiddenInput", _v0.s(["ColorPickerHiddenInput", 0, _v10], 0);
  let _v11 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getLabelProps(), _v0);
    return (0, _v1.jsx)(_v4.ark.label, {
      ..._v3,
      ref: _v1
    });
  });
  _v11.displayName = "ColorPickerLabel", _v0.s(["ColorPickerLabel", 0, _v11], 0);
  var _v12 = _v0.i(0);
  let _v13 = (0, _v3.forwardRef)((_v0, _v1) => {
    let _v2 = (0, _v5.useColorPickerContext)(),
      _v3 = (0, _v2.mergeProps)(_v2.getPositionerProps(), _v0);
    return (0, _v12.usePresenceContext)().unmounted ? null : (0, _v1.jsx)(_v4.ark.div, {
      ..._v3,
      ref: _v1
    });
  });
  _v13.displayName = "ColorPickerPositioner", _v0.s(["ColorPickerPositioner", 0, _v13], 0);
}