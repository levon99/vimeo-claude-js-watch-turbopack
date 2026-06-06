{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v4.forwardRef)((_v0, _v1) => {
      let {
          onClick: _v2,
          className: _v3,
          ..._v4
        } = _v0,
        {
          onClose: _v5
        } = (0, _v1.useModalContext)(),
        _v6 = (0, _v3.cx)("chakra-modal__close-btn", _v3),
        _v7 = (0, _v1.useModalStyles)();
      return (0, _v5.jsx)(_v2.CloseButton, {
        ref: _v1,
        __css: _v7.closeButton,
        className: _v6,
        onClick: (0, _v3.callAllHandlers)(_v2, _v0 => {
          _v0.stopPropagation(), _v5();
        }),
        ..._v4
      });
    });
  _v6.displayName = "ModalCloseButton", _v0.s(["ModalCloseButton", 0, _v6]);
}