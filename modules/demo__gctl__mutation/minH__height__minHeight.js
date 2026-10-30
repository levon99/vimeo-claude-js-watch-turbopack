{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = ["h", "minH", "height", "minHeight"],
    _v9 = (0, _v3.forwardRef)((_v0, _v1) => {
      let _v2 = (0, _v5.useStyleConfig)("Textarea", _v0),
        {
          className: _v3,
          rows: _v4,
          ..._v5
        } = (0, _v4.omitThemingProps)(_v0),
        _v6 = (0, _v1.useFormControl)(_v5),
        _v7 = _v4 ? function (_v0, _v1 = []) {
          let _v2 = Object.assign({}, _v0);
          for (let _v0 of _v1) _v0 in _v2 && delete _v2[_v0];
          return _v2;
        }(_v2, _v8) : _v2;
      return (0, _v7.jsx)(_v2.chakra.textarea, {
        ref: _v1,
        rows: _v4,
        ..._v6,
        className: (0, _v6.cx)("chakra-textarea", _v3),
        __css: _v7
      });
    });
  _v9.displayName = "Textarea", _v0.s(["Textarea", 0, _v9], 0);
}