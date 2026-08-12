{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    [_v5, _v6] = (0, _v2.createContext)(),
    _v7 = {
      start: {
        ltr: "left",
        rtl: "right"
      },
      end: {
        ltr: "right",
        rtl: "left"
      }
    };
  _v0.s(["Drawer", 0, function (_v0) {
    var _v1;
    let {
        isOpen: _v2,
        onClose: _v3,
        placement: _v4 = "right",
        children: _v5,
        ..._v6
      } = _v0,
      _v7 = (0, _v3.useTheme)(),
      _v8 = null == (_v1 = _v7.components) ? void 0 : _v1.Drawer,
      _v9 = function (_v0, _v1) {
        var _v2, _v3;
        if (_v0) return null != (_v3 = null == (_v2 = _v7[_v0]) ? void 0 : _v2[_v1]) ? _v3 : _v0;
      }(_v4, _v7.direction);
    return (0, _v4.jsx)(_v5, {
      value: {
        placement: _v9
      },
      children: (0, _v4.jsx)(_v1.Modal, {
        isOpen: _v2,
        onClose: _v3,
        styleConfig: _v8,
        ..._v6,
        children: _v5
      })
    });
  }, "useDrawerContext", 0, _v6], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v9 = _v9,
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = (0, _v12.chakra)(_v13.Slide),
    _v15 = (0, _v8.forwardRef)((_v0, _v1) => {
      let {
          className: _v2,
          children: _v3,
          motionProps: _v4,
          containerProps: _v5,
          ..._v6
        } = _v0,
        {
          getDialogProps: _v7,
          getDialogContainerProps: _v8,
          isOpen: _v9
        } = (0, _v1.useModalContext)(),
        _v10 = _v7(_v6, _v1),
        _v11 = _v8(_v5),
        _v12 = (0, _v11.cx)("chakra-modal__content", _v2),
        _v13 = (0, _v1.useModalStyles)(),
        _v14 = {
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          outline: 0,
          ..._v13.dialog
        },
        _v15 = {
          display: "flex",
          width: "100vw",
          height: "$100vh",
          position: "fixed",
          left: 0,
          top: 0,
          ..._v13.dialogContainer
        },
        {
          placement: _v16
        } = _v6();
      return (0, _v4.jsx)(_v10.ModalFocusScope, {
        children: (0, _v4.jsx)(_v12.chakra.div, {
          ..._v11,
          className: "chakra-modal__content-container",
          __css: _v15,
          children: (0, _v4.jsx)(_v14, {
            motionProps: _v4,
            direction: _v16,
            in: _v9,
            className: _v12,
            ..._v10,
            __css: _v14,
            children: _v3
          })
        })
      });
    });
  _v15.displayName = "DrawerContent";
  let _v16 = (0, _v8.forwardRef)(({
    children: _v0,
    size: _v1 = "xs",
    ..._v2
  }, _v3) => (0, _v4.jsx)(_v9.ModalCloseButton, {
    ref: _v3,
    size: _v1,
    ..._v2,
    children: _v0
  }));
  _v0.s(["DrawerCloseButton", 0, _v16, "DrawerContent", 0, _v0 => {
    let _v1 = _v6();
    return (0, _v4.jsx)(_v15, {
      "data-placement": _v1.placement,
      ..._v0,
      children: _v0.children
    });
  }], 0);
}