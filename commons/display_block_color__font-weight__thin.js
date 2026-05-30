{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = (0, _v6.default)(_v8.Text)(_v1 || (_v1 = (0, _v4.a)(["\n  display: block;\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n  ", ";\n"], ["\n  display: block;\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n  ", ";\n"])), function (_v0) {
      return _v0.theme.formats[_v0.format];
    }, function (_v0) {
      return "thin" === _v0.variant ? 400 : 700;
    }, function (_v0) {
      var _v1 = 8 - _v0.size / 100,
        _v2 = Math.round((_v1 / 50 + 1.14) * 100) / 100,
        _v3 = Math.min(Math.round((-1.2 - -((_v1 - 1) * .2)) * 100) / 100, 0),
        _v4 = Math.max(.5, Math.round((1.45 - (_v1 - 1) / 5) * 100) / 100);
      return (0, _v6.css)(_v3 || (_v3 = (0, _v4.a)(["\n    line-height: ", ";\n    letter-spacing: ", "px;\n    margin-bottom: ", "rem;\n  "], ["\n    line-height: ", ";\n    letter-spacing: ", "px;\n    margin-bottom: ", "rem;\n  "])), _v2, _v3, _v4);
    }, _v7.antialias),
    _v10 = (0, _v6.default)(_v8.Text)(_v2 || (_v2 = (0, _v4.a)(["\n  display: block;\n  color: ", ";\n  font-size: calc(2.25rem + 3.5vw);\n  line-height: calc(2.0625rem + 3.5125vw);\n  letter-spacing: calc(-0.125rem - 0.0025vw);\n  font-weight: 800;\n  max-width: calc(96vw - 2rem);\n  margin-bottom: calc(1.5rem + 0.875vw);\n"], ["\n  display: block;\n  color: ", ";\n  font-size: calc(2.25rem + 3.5vw);\n  line-height: calc(2.0625rem + 3.5125vw);\n  letter-spacing: calc(-0.125rem - 0.0025vw);\n  font-weight: 800;\n  max-width: calc(96vw - 2rem);\n  margin-bottom: calc(1.5rem + 0.875vw);\n"])), function (_v0) {
      return _v0.theme.formats[_v0.format];
    }),
    _v11 = (0, _v0.i(0).withIris)(function (_v0) {
      var _v1,
        _v2 = _v0.element,
        _v3 = _v0.format,
        _v4 = void 0 === _v3 ? "basic" : _v3,
        _v5 = _v0.forwardRef,
        _v6 = _v0.size,
        _v7 = void 0 === _v6 ? "1" : _v6,
        _v8 = _v0.variant,
        _v9 = (0, _v4.b)(_v0, ["element", "format", "forwardRef", "size", "variant"]),
        _v10 = parseInt(_v7),
        _v11 = (_v1 = _v7) < 7 ? "h" + _v1 : "plusUltra" === _v1 ? "h1" : "span";
      return "plusUltra" === _v7 ? _v5.default.createElement(_v10, (0, _v4.c)({
        element: "h1",
        format: _v4,
        ref: _v5
      }, _v9)) : _v5.default.createElement(_v9, (0, _v4.c)({
        element: _v2 || _v11,
        format: _v4,
        ref: _v5,
        size: 800 - 100 * _v10,
        variant: void 0 === _v8 ? "normal" : _v8
      }, _v9));
    });
  _v0.s(["Header", 0, _v11], 0);
}