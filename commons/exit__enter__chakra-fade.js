{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = {
      initial: "exit",
      animate: "enter",
      exit: "exit",
      variants: {
        enter: ({
          transition: _v0,
          transitionEnd: _v1,
          delay: _v2
        } = {}) => {
          var _v3;
          return {
            opacity: 1,
            transition: null != (_v3 = null == _v0 ? void 0 : _v0.enter) ? _v3 : _v5.withDelay.enter(_v5.TRANSITION_DEFAULTS.enter, _v2),
            transitionEnd: null == _v1 ? void 0 : _v1.enter
          };
        },
        exit: ({
          transition: _v0,
          transitionEnd: _v1,
          delay: _v2
        } = {}) => {
          var _v3;
          return {
            opacity: 0,
            transition: null != (_v3 = null == _v0 ? void 0 : _v0.exit) ? _v3 : _v5.withDelay.exit(_v5.TRANSITION_DEFAULTS.exit, _v2),
            transitionEnd: null == _v1 ? void 0 : _v1.exit
          };
        }
      }
    },
    _v11 = (0, _v8.forwardRef)(function (_v0, _v1) {
      let {
          unmountOnExit: _v2,
          in: _v3,
          className: _v4,
          transition: _v5,
          transitionEnd: _v6,
          delay: _v7,
          ..._v8
        } = _v0,
        _v9 = _v3 || _v2 ? "enter" : "exit",
        _v10 = !_v2 || _v3 && _v2,
        _v11 = {
          transition: _v5,
          transitionEnd: _v6,
          delay: _v7
        };
      return (0, _v9.jsx)(_v6.AnimatePresence, {
        custom: _v11,
        children: _v10 && (0, _v9.jsx)(_v7.motion.div, {
          ref: _v1,
          className: (0, _v2.cx)("chakra-fade", _v4),
          custom: _v11,
          ..._v10,
          animate: _v9,
          ..._v8
        })
      });
    });
  _v11.displayName = "Fade", _v0.s(["Fade", 0, _v11, "fadeConfig", 0, _v10], 0);
  var _v12 = (0, _v3.chakra)(_v7.motion.div),
    _v13 = (0, _v4.forwardRef)((_v0, _v1) => {
      let {
          className: _v2,
          transition: _v3,
          motionProps: _v4,
          ..._v5
        } = _v0,
        _v6 = (0, _v2.cx)("chakra-modal__overlay", _v2),
        _v7 = {
          pos: "fixed",
          left: "0",
          top: "0",
          w: "100vw",
          h: "100vh",
          ...(0, _v1.useModalStyles)().overlay
        },
        {
          motionPreset: _v8
        } = (0, _v1.useModalContext)(),
        _v9 = "none" === _v8 ? {} : _v10;
      return (0, _v9.jsx)(_v12, {
        ...(_v4 || _v9),
        __css: _v7,
        ref: _v1,
        className: _v6,
        ..._v5
      });
    });
  _v13.displayName = "ModalOverlay", _v0.s(["ModalOverlay", 0, _v13], 0);
}