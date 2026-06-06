{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = function (_v0) {
      return "dark" === _v0.theme.name && (0, _v5.css)(_v1 || (_v1 = (0, _v4.a)(["\n    font-smoothing: antialiased;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizelegibility;\n  "], ["\n    font-smoothing: antialiased;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizelegibility;\n  "])));
    };
  _v0.s(["antialias", 0, _v7], 0);
  var _v8 = _v0.i(0),
    _v9 = _v5.default.span(_v2 || (_v2 = (0, _v4.a)(["\n  display: inline;\n  font-size: ", ";\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  border: 0;\n  color: ", ";\n  ", ";\n"], ["\n  display: inline;\n  font-size: ", ";\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  border: 0;\n  color: ", ";\n  ", ";\n"])), function (_v0) {
      return (0, _v6.rem)(_v8.core.typography.size(_v0.size));
    }, _v11, _v7),
    _v10 = _v5.default.input(_v3 || (_v3 = (0, _v4.a)(["\n  background: transparent;\n  display: inline;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n  border: 0;\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"], ["\n  background: transparent;\n  display: inline;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0;\n  margin: 0;\n  outline: 0;\n  border: 0;\n  letter-spacing: 0.0125rem;\n  line-height: 1.25;\n  font-size: ", ";\n  color: ", ";\n  ", ";\n"])), function (_v0) {
      return (0, _v6.rem)(_v8.core.typography.size(_v0.size));
    }, _v11, _v7);
  function _v11(_v0) {
    var _v1 = _v0.format,
      _v2 = _v0.status;
    return _v0.theme.formats[_v2 || _v1];
  }
  _v0.s(["Input", 0, _v10, "Text", 0, _v9], 0);
}