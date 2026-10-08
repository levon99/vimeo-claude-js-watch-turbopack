{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ItemImg = void 0;
  var _v3,
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v4.__importDefault(_v0.r(0)),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0);
  _v2.ItemImg = _v6.default.img(_v3 || (_v3 = _v4.__makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  border-radius: ", ";\n  margin-right: ", ";\n  object-fit: cover;\n  border: ", ";\n  background-color: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  border-radius: ", ";\n  margin-right: ", ";\n  object-fit: cover;\n  border: ", ";\n  background-color: ", ";\n"])), function (_v0) {
    return _v0.flat ? _v5.rem(63) : _v5.rem(90);
  }, function (_v0) {
    return _v0.flat ? _v5.rem(35) : _v5.rem(50);
  }, _v5.rem(3), function (_v0) {
    return _v0.flat ? _v5.rem(10) : 0;
  }, function (_v0) {
    return "1px solid " + (_v0.theme.name === _v8.DARK_MODE ? _v7.grayscale(800) : _v7.slate(50));
  }, function (_v0) {
    return _v0.theme.name === _v8.DARK_MODE ? _v7.grayscale(800) : _v7.slate(100);
  });
}