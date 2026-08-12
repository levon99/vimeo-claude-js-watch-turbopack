{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v4.forwardRef)((_v0, _v1) => {
      let {
          className: _v2,
          ..._v3
        } = _v0,
        {
          bodyId: _v4,
          setBodyMounted: _v5
        } = (0, _v1.useModalContext)();
      (0, _v5.useEffect)(() => (_v5(!0), () => _v5(!1)), [_v5]);
      let _v6 = (0, _v2.cx)("chakra-modal__body", _v2),
        _v7 = (0, _v1.useModalStyles)();
      return (0, _v6.jsx)(_v3.chakra.div, {
        ref: _v1,
        className: _v6,
        id: _v4,
        ..._v3,
        __css: _v7.body
      });
    });
  _v7.displayName = "ModalBody", _v0.s(["ModalBody", 0, _v7]);
}