{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.ModalFooter = _v2.ModalText = _v2.ModalHeader = _v2.ModalContainer = void 0;
  var _v3,
    _v4,
    _v5,
    _v6,
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v7.__importDefault(_v0.r(0));
  _v2.ModalContainer = _v10.default.div(_v3 || (_v3 = _v7.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  padding: ", ";\n  width: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  padding: ", ";\n  width: ", ";\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n"])), _v8.rem(16), _v8.rem(16), _v8.rem(440), function (_v0) {
    var _v1,
      _v2 = _v0.theme;
    return (null == (_v1 = null == _v2 ? void 0 : _v2.content) ? void 0 : _v1.background) || (_v2.name === _v9.DARK_MODE ? _v9.grayscale(900) : _v9.white);
  }, _v8.rem(8), function (_v0) {
    var _v1 = _v0.theme;
    return (null == _v1 ? void 0 : _v1.name) === _v9.DARK_MODE ? _v9.white : _v9.slate(800);
  }), _v2.ModalHeader = _v10.default.div(_v4 || (_v4 = _v7.__makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n"], ["\n  font-size: ", ";\n  font-weight: 800;\n  display: flex;\n  align-items: center;\n"])), _v8.rem(18)), _v2.ModalText = _v10.default.p(_v5 || (_v5 = _v7.__makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  white-space: pre-wrap;\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  white-space: pre-wrap;\n"])), _v8.rem(14), _v8.rem(21.56)), _v2.ModalFooter = _v10.default.div(_v6 || (_v6 = _v7.__makeTemplateObject(["\n  display: flex;\n  justify-content: flex-end;\n  gap: ", ";\n"], ["\n  display: flex;\n  justify-content: flex-end;\n  gap: ", ";\n"])), _v8.rem(16));
}