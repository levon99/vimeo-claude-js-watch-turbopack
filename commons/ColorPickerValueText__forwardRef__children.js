{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v3.forwardRef)((_v0, _v1) => {
    let {
        children: _v2,
        format: _v3,
        ..._v4
      } = _v0,
      _v5 = (0, _v5.useColorPickerContext)(),
      _v6 = (0, _v2.mergeProps)(_v5.getValueTextProps(), _v4),
      _v7 = _v3 ? _v5.value.toString(_v3) : _v5.valueAsString;
    return (0, _v1.jsx)(_v4.ark.span, {
      ..._v6,
      ref: _v1,
      children: _v0.children || _v7
    });
  });
  _v6.displayName = "ColorPickerValueText", _v0.s(["ColorPickerValueText", 0, _v6]);
}