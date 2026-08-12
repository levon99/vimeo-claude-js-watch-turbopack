{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ItemsViewName = void 0;
  var _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v7.__importStar(_v0.r(0)),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0);
  _v2.ItemsViewName = _v9.default.div(_v6 || (_v6 = _v7.__makeTemplateObject(["\n  display: block;\n  word-break: break-word;\n  white-space: normal;\n  text-overflow: ellipsis;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  letter-spacing: 0;\n  overflow: hidden;\n  margin-top: ", ";\n\n  p {\n    ", ";\n  }\n\n  ", "\n"], ["\n  display: block;\n  word-break: break-word;\n  white-space: normal;\n  text-overflow: ellipsis;\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  letter-spacing: 0;\n  overflow: hidden;\n  margin-top: ", ";\n\n  p {\n    ", ";\n  }\n\n  ", "\n"])), function (_v0) {
    return _v0.theme.name === _v10.DARK_MODE ? _v11.white : _v11.slate(800);
  }, _v10.GlobalFontFamily, _v8.rem(14), function (_v0) {
    return _v0.flat ? 0 : _v8.rem(5);
  }, function (_v0) {
    return _v0.isCaption ? null : _v9.css(_v3 || (_v3 = _v7.__makeTemplateObject(["\n            display: -webkit-box;\n            overflow: hidden;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n          "], ["\n            display: -webkit-box;\n            overflow: hidden;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n          "])));
  }, function (_v0) {
    return _v0.flat ? _v9.css(_v4 || (_v4 = _v7.__makeTemplateObject(["\n          height: ", "\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: flex-start;\n          \n          p {\n            line-height: ", ";\n          }\n        "], ["\n          height: ", "\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: flex-start;\n          \n          p {\n            line-height: ", ";\n          }\n        "])), function (_v0) {
      return _v0.isNonAppShell ? _v8.rem(50) + ";" : "inherit;";
    }, function (_v0) {
      return _v0.isNonAppShell ? 1.35 : "inherit";
    }) : _v9.css(_v5 || (_v5 = _v7.__makeTemplateObject(["\n          height: ", ";\n          width: ", ";\n          line-height: ", ";\n        "], ["\n          height: ", ";\n          width: ", ";\n          line-height: ", ";\n        "])), _v8.rem(36), _v8.rem(85), _v8.rem(18));
  });
}