{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.Popover = void 0;
  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v4.__importDefault(_v0.r(0)),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0);
  _v2.Popover = _v5.default.div(_v3 || (_v3 = _v4.__makeTemplateObject(["\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  position: absolute;\n  top: calc(100% + ", ");\n  white-space: nowrap;\n  width: 100%;\n"], ["\n  background: ", ";\n  color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  position: absolute;\n  top: calc(100% + ", ");\n  white-space: nowrap;\n  width: 100%;\n"])), function (_v0) {
    return _v0.theme.name === _v7.DARK_MODE ? _v7.grayscale(900) : _v7.white;
  }, function (_v0) {
    return _v0.theme.name === _v7.DARK_MODE ? _v7.white : "inherit";
  }, _v6.rem(3), function (_v0) {
    return _v0.theme.name === _v7.DARK_MODE ? "0 " + _v6.rem(3) + " " + _v6.rem(10) + " rgba(0, 0, 0, 0.12)" : "0 " + _v6.rem(8) + " " + _v6.rem(20) + " rgba(0, 0, 0, 0.2)";
  }, _v6.rem(5));
}