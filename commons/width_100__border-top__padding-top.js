{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.SubMenu = void 0;
  var _v3,
    _v4,
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v5.__importStar(_v0.r(0));
  _v2.SubMenu = _v9.default.div(_v4 || (_v4 = _v5.__makeTemplateObject(["\n  width: 100%;\n\n  ", ";\n\n  & + & {\n    border-top: ", ";\n  }\n"], ["\n  width: 100%;\n\n  ", ";\n\n  & + & {\n    border-top: ", ";\n  }\n"])), function (_v0) {
    return _v0.addPaddingTop ? _v9.css(_v3 || (_v3 = _v5.__makeTemplateObject(["\n          padding-top: ", ";\n        "], ["\n          padding-top: ", ";\n        "])), _v6.rem(23)) : null;
  }, function (_v0) {
    var _v1 = _v0.theme.name === _v8.DARK_MODE ? _v7.grayscale(800) : _v7.slate(100);
    return _v6.rem(1) + " solid " + _v1 + ";";
  });
}