{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = {
      exit: {
        duration: .15,
        ease: _v1.TRANSITION_EASINGS.easeInOut
      },
      enter: {
        type: "spring",
        damping: 25,
        stiffness: 180
      }
    },
    _v8 = {
      exit: ({
        direction: _v0,
        transition: _v1,
        transitionEnd: _v2,
        delay: _v3
      }) => {
        var _v4;
        let {
          exit: _v5
        } = (0, _v1.getSlideTransition)({
          direction: _v0
        });
        return {
          ..._v5,
          transition: null != (_v4 = null == _v1 ? void 0 : _v1.exit) ? _v4 : _v1.withDelay.exit(_v7.exit, _v3),
          transitionEnd: null == _v2 ? void 0 : _v2.exit
        };
      },
      enter: ({
        direction: _v0,
        transitionEnd: _v1,
        transition: _v2,
        delay: _v3
      }) => {
        var _v4;
        let {
          enter: _v5
        } = (0, _v1.getSlideTransition)({
          direction: _v0
        });
        return {
          ..._v5,
          transition: null != (_v4 = null == _v2 ? void 0 : _v2.enter) ? _v4 : _v1.withDelay.enter(_v7.enter, _v3),
          transitionEnd: null == _v1 ? void 0 : _v1.enter
        };
      }
    },
    _v9 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let {
          direction: _v2 = "right",
          style: _v3,
          unmountOnExit: _v4,
          in: _v5,
          className: _v6,
          transition: _v7,
          transitionEnd: _v8,
          delay: _v9,
          motionProps: _v10,
          ..._v11
        } = _v0,
        _v12 = Object.assign({
          position: "fixed"
        }, (0, _v1.getSlideTransition)({
          direction: _v2
        }).position, _v3),
        _v13 = !_v4 || _v5 && _v4,
        _v14 = _v5 || _v4 ? "enter" : "exit",
        _v15 = {
          transitionEnd: _v8,
          transition: _v7,
          direction: _v2,
          delay: _v9
        };
      return (0, _v6.jsx)(_v3.AnimatePresence, {
        custom: _v15,
        children: _v13 && (0, _v6.jsx)(_v4.motion.div, {
          ..._v11,
          ref: _v1,
          initial: "exit",
          className: (0, _v2.cx)("chakra-slide", _v6),
          animate: _v14,
          exit: "exit",
          custom: _v15,
          variants: _v8,
          style: _v12,
          ..._v10
        })
      });
    });
  _v9.displayName = "Slide", _v0.s(["Slide", 0, _v9]);
}