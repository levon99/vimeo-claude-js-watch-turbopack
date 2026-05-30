{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = {
      slideInBottom: {
        ..._v5.slideFadeConfig,
        custom: {
          offsetY: 16,
          reverse: !0
        }
      },
      slideInRight: {
        ..._v5.slideFadeConfig,
        custom: {
          offsetX: 16,
          reverse: !0
        }
      },
      slideInTop: {
        ..._v5.slideFadeConfig,
        custom: {
          offsetY: -16,
          reverse: !0
        }
      },
      slideInLeft: {
        ..._v5.slideFadeConfig,
        custom: {
          offsetX: -16,
          reverse: !0
        }
      },
      scale: {
        ..._v4.scaleFadeConfig,
        custom: {
          initialScale: .95,
          reverse: !0
        }
      },
      none: {}
    },
    _v9 = (0, _v3.chakra)(_v6.motion.section),
    _v10 = (0, _v7.forwardRef)((_v0, _v1) => {
      let {
        preset: _v2,
        motionProps: _v3 = _v8[_v2 || "none"],
        ..._v4
      } = _v0;
      return (0, _v1.jsx)(_v9, {
        ref: _v1,
        ..._v3,
        ..._v4
      });
    });
  _v10.displayName = "ModalTransition";
  var _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = (0, _v2.forwardRef)((_v0, _v1) => {
      let {
          className: _v2,
          children: _v3,
          containerProps: _v4,
          motionProps: _v5,
          ..._v6
        } = _v0,
        {
          getDialogProps: _v7,
          getDialogContainerProps: _v8
        } = (0, _v12.useModalContext)(),
        _v9 = _v7(_v6, _v1),
        _v10 = _v8(_v4),
        _v11 = (0, _v13.cx)("chakra-modal__content", _v2),
        _v12 = (0, _v12.useModalStyles)(),
        _v13 = {
          display: "flex",
          flexDirection: "column",
          position: "relative",
          width: "100%",
          outline: 0,
          ..._v12.dialog
        },
        _v14 = {
          display: "flex",
          width: "100vw",
          height: "$100vh",
          position: "fixed",
          left: 0,
          top: 0,
          ..._v12.dialogContainer
        },
        {
          motionPreset: _v15
        } = (0, _v12.useModalContext)();
      return (0, _v1.jsx)(_v11.ModalFocusScope, {
        children: (0, _v1.jsx)(_v3.chakra.div, {
          ..._v10,
          className: "chakra-modal__content-container",
          tabIndex: -1,
          __css: _v14,
          children: (0, _v1.jsx)(_v10, {
            preset: _v15,
            motionProps: _v5,
            className: _v11,
            ..._v9,
            __css: _v13,
            children: _v3
          })
        })
      });
    });
  _v14.displayName = "ModalContent";
  var _v15 = _v0.i(0);
  let _v16 = {
      enter: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: _v15.Duration.lg,
          ease: _v15.Easing["expressive-entrance"]
        }
      },
      exit: {
        opacity: 0,
        scale: .8,
        transition: {
          duration: _v15.Duration.md,
          ease: _v15.Easing["basic-exit"]
        }
      }
    },
    _v17 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => (0, _v1.jsx)(_v14, {
      ref: _v2,
      motionProps: {
        initial: "exit",
        animate: "enter",
        exit: "exit",
        variants: _v16
      },
      ..._v1,
      children: _v0
    }));
  _v0.s(["ModalContent", 0, _v17], 0);
}