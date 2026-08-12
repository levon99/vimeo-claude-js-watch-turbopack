{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          htmlSize: _v2,
          ..._v3
        } = _v0,
        _v4 = (0, _v5.useMultiStyleConfig)("Input", _v3),
        _v5 = (0, _v4.omitThemingProps)(_v3),
        _v6 = (0, _v1.useFormControl)(_v5),
        _v7 = (0, _v6.cx)("chakra-input", _v0.className);
      return (0, _v7.jsx)(_v2.chakra.input, {
        size: _v2,
        ..._v6,
        __css: _v4.field,
        ref: _v1,
        className: _v7
      });
    });
  _v8.displayName = "Input", _v8.id = "Input", _v0.s(["Input", 0, _v8]);
}