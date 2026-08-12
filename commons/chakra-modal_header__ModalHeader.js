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
          headerId: _v4,
          setHeaderMounted: _v5
        } = (0, _v1.useModalContext)();
      (0, _v5.useEffect)(() => (_v5(!0), () => _v5(!1)), [_v5]);
      let _v6 = (0, _v2.cx)("chakra-modal__header", _v2),
        _v7 = {
          flex: 0,
          ...(0, _v1.useModalStyles)().header
        };
      return (0, _v6.jsx)(_v3.chakra.header, {
        ref: _v1,
        className: _v6,
        id: _v4,
        ..._v3,
        __css: _v7
      });
    });
  _v7.displayName = "ModalHeader", _v0.s(["ModalHeader", 0, _v7]);
}