{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let {
          getInputProps: _v2
        } = (0, _v2.useEditableContext)(),
        _v3 = (0, _v2.useEditableStyles)(),
        _v4 = _v2(_v0, _v1),
        _v5 = (0, _v5.cx)("chakra-editable__input", _v0.className);
      return (0, _v6.jsx)(_v3.chakra.input, {
        ..._v4,
        __css: {
          outline: 0,
          ..._v1.commonStyles,
          ..._v3.input
        },
        className: _v5
      });
    });
  _v7.displayName = "EditableInput", _v0.s(["EditableInput", 0, _v7]);
}