{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ActionButton = void 0;
  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v2.ActionButton = _v4.__importDefault(_v0.r(0)).default.button(_v3 || (_v3 = _v4.__makeTemplateObject(["\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  height: ", ";\n  min-width: ", ";\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  &:hover {\n    background: ", ";\n    border: 1px solid\n      ", ";\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  svg {\n    width: ", ";\n    height: ", ";\n    display: inline-flex;\n    overflow: visible;\n  }\n\n  &[data-title]:hover:after {\n    opacity: 1;\n    transition: all 0.1s ease 0.5s;\n    visibility: visible;\n  }\n  &[data-title]:after {\n    content: attr(data-title);\n    position: absolute;\n    font-weight: 400;\n    font-size: ", ";\n    line-height: ", ";\n    text-align: center;\n    letter-spacing: 0.1px;\n    top: ", ";\n    right: ", ";\n    white-space: nowrap;\n    opacity: 0;\n    z-index: 99999;\n    visibility: hidden;\n    padding: ", " ", ";\n    color: ", ";\n    border-radius: ", ";\n    background-color: ", ";\n    text-align: center;\n    border: ", " solid ", ";\n    translate: 0 -100%;\n  }\n  &[data-title] {\n    position: relative;\n  }\n"], ["\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n  height: ", ";\n  min-width: ", ";\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  &:hover {\n    background: ", ";\n    border: 1px solid\n      ", ";\n  }\n\n  &:active {\n    transform: scale(0.98);\n  }\n\n  svg {\n    width: ", ";\n    height: ", ";\n    display: inline-flex;\n    overflow: visible;\n  }\n\n  &[data-title]:hover:after {\n    opacity: 1;\n    transition: all 0.1s ease 0.5s;\n    visibility: visible;\n  }\n  &[data-title]:after {\n    content: attr(data-title);\n    position: absolute;\n    font-weight: 400;\n    font-size: ", ";\n    line-height: ", ";\n    text-align: center;\n    letter-spacing: 0.1px;\n    top: ", ";\n    right: ", ";\n    white-space: nowrap;\n    opacity: 0;\n    z-index: 99999;\n    visibility: hidden;\n    padding: ", " ", ";\n    color: ", ";\n    border-radius: ", ";\n    background-color: ", ";\n    text-align: center;\n    border: ", " solid ", ";\n    translate: 0 -100%;\n  }\n  &[data-title] {\n    position: relative;\n  }\n"])), _v5.rem(32), _v5.rem(32), _v5.rem(6), function (_v0) {
    return _v0.theme.name === _v6.DARK_MODE ? _v6.grayscale(900) : _v6.white;
  }, function (_v0) {
    return _v0.theme.name === _v6.DARK_MODE ? _v6.grayscale(900) : _v6.white;
  }, _v6.black, function (_v0) {
    return _v0.theme.name === _v6.DARK_MODE ? _v5.tint(.15, _v6.grayscale(900)) : _v6.slate(100);
  }, function (_v0) {
    return _v0.theme.name === _v6.DARK_MODE ? _v5.tint(.15, _v6.grayscale(900)) : _v6.slate(100);
  }, _v5.rem(16.49), _v5.rem(16.49), _v5.rem(14), _v5.rem(16), _v5.rem(-6), _v5.rem(-6), _v5.rem(9), _v5.rem(14), _v6.white, _v5.rem(4), _v6.black, _v5.rem(1), function (_v0) {
    var _v1 = _v0.theme;
    return _v5.rgba(_v6.white, .25 * ("dark" === _v1.name));
  });
}