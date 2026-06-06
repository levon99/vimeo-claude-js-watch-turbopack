{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v4.forwardRef)((_v0, _v1) => {
      let {
          className: _v2,
          ..._v3
        } = _v0,
        _v4 = (0, _v2.cx)("chakra-modal__footer", _v2),
        _v5 = {
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          ...(0, _v1.useModalStyles)().footer
        };
      return (0, _v5.jsx)(_v3.chakra.footer, {
        ref: _v1,
        ..._v3,
        __css: _v5,
        className: _v4
      });
    });
  _v6.displayName = "ModalFooter", _v0.s(["ModalFooter", 0, _v6]);
}