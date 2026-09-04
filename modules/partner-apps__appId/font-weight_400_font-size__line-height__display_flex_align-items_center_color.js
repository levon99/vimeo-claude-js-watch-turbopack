{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Feedback = void 0;
  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v2.Feedback = _v4.__importDefault(_v0.r(0)).default.div(_v3 || (_v3 = _v4.__makeTemplateObject(["\n  font-weight: 400;\n  font-size: ", ";\n  line-height: ", ";\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  padding: ", " ", ";\n\n  & button {\n    background: none;\n    border: none;\n    font: inherit;\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n    padding: 0;\n\n    &:before {\n      content: ' ';\n      white-space: pre;\n      display: inline-block;\n    }\n  }\n"], ["\n  font-weight: 400;\n  font-size: ", ";\n  line-height: ", ";\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  padding: ", " ", ";\n\n  & button {\n    background: none;\n    border: none;\n    font: inherit;\n    color: inherit;\n    text-decoration: underline;\n    cursor: pointer;\n    padding: 0;\n\n    &:before {\n      content: ' ';\n      white-space: pre;\n      display: inline-block;\n    }\n  }\n"])), _v5.rem(12), _v5.rem(20), function (_v0) {
    return _v0.theme.name === _v6.DARK_MODE ? _v6.white : _v6.slate(800);
  }, _v5.rem(4), function (_v0) {
    return _v0.isVls ? _v5.rem(4) : _v5.rem(20);
  });
}