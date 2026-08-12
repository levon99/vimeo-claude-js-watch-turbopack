{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = (0, _v2.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v4.useStyleConfig)("Text", _v0),
        {
          className: _v3,
          align: _v4,
          decoration: _v5,
          casing: _v6,
          ..._v7
        } = (0, _v3.omitThemingProps)(_v0),
        _v8 = (0, _v6.compact)({
          textAlign: _v0.align,
          textDecoration: _v0.decoration,
          textTransform: _v0.casing
        });
      return (0, _v7.jsx)(_v1.chakra.p, {
        ref: _v1,
        className: (0, _v5.cx)("chakra-text", _v0.className),
        ..._v8,
        ..._v7,
        __css: _v2
      });
    });
  _v8.displayName = "Text", _v0.s(["Text", 0, _v8]);
}