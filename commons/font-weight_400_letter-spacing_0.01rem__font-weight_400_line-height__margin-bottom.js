{
  "use strict";

  var _v1,
    _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v5.default)(_v6.Text)(_v1 || (_v1 = (0, _v3.a)(["\n  font-weight: 400;\n  letter-spacing: 0.01rem;\n  ", ";\n"], ["\n  font-weight: 400;\n  letter-spacing: 0.01rem;\n  ", ";\n"])), function (_v0) {
      var _v1 = 4 - _v0.size / 100,
        _v2 = Math.round((_v1 / 25 + 1.46) * 100) / 100,
        _v3 = Math.round((1.5 - .25 * _v1) * 100) / 100;
      return (0, _v5.css)(_v2 || (_v2 = (0, _v3.a)(["\n    font-weight: 400;\n    line-height: ", ";\n    margin-bottom: ", "rem;\n  "], ["\n    font-weight: 400;\n    line-height: ", ";\n    margin-bottom: ", "rem;\n  "])), _v2, _v3);
    }),
    _v8 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1 = _v0.element,
        _v2 = _v0.forwardRef,
        _v3 = _v0.size,
        _v4 = void 0 === _v3 ? "4" : _v3,
        _v5 = _v0.format,
        _v6 = (0, _v3.b)(_v0, ["element", "forwardRef", "size", "format"]),
        _v7 = "number" == typeof _v4 ? _v4 : parseInt(_v4);
      return _v4.default.createElement(_v7, (0, _v3.c)({
        element: void 0 === _v1 ? "p" : _v1,
        format: void 0 === _v5 ? "basic" : _v5,
        ref: _v2,
        size: 400 - 100 * _v7
      }, _v6));
    });
  _v0.s(["Paragraph", 0, _v8], 0);
}