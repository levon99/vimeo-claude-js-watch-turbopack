{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants: {
        initial: ({
          offsetX: _v0,
          offsetY: _v1,
          transition: _v2,
          transitionEnd: _v3,
          delay: _v4
        }) => {
          var _v5;
          return {
            opacity: 0,
            x: _v0,
            y: _v1,
            transition: null != (_v5 = null == _v2 ? void 0 : _v2.exit) ? _v5 : _v1.withDelay.exit(_v1.TRANSITION_DEFAULTS.exit, _v4),
            transitionEnd: null == _v3 ? void 0 : _v3.exit
          };
        },
        enter: ({
          transition: _v0,
          transitionEnd: _v1,
          delay: _v2
        }) => {
          var _v3;
          return {
            opacity: 1,
            x: 0,
            y: 0,
            transition: null != (_v3 = null == _v0 ? void 0 : _v0.enter) ? _v3 : _v1.withDelay.enter(_v1.TRANSITION_DEFAULTS.enter, _v2),
            transitionEnd: null == _v1 ? void 0 : _v1.enter
          };
        },
        exit: ({
          offsetY: _v0,
          offsetX: _v1,
          transition: _v2,
          transitionEnd: _v3,
          reverse: _v4,
          delay: _v5
        }) => {
          var _v6;
          let _v7 = {
            x: _v1,
            y: _v0
          };
          return {
            opacity: 0,
            transition: null != (_v6 = null == _v2 ? void 0 : _v2.exit) ? _v6 : _v1.withDelay.exit(_v1.TRANSITION_DEFAULTS.exit, _v5),
            ...(_v4 ? {
              ..._v7,
              transitionEnd: null == _v3 ? void 0 : _v3.exit
            } : {
              transitionEnd: {
                ..._v7,
                ...(null == _v3 ? void 0 : _v3.exit)
              }
            })
          };
        }
      }
    },
    _v8 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let {
          unmountOnExit: _v2,
          in: _v3,
          reverse: _v4 = !0,
          className: _v5,
          offsetX: _v6 = 0,
          offsetY: _v7 = 8,
          transition: _v8,
          transitionEnd: _v9,
          delay: _v10,
          ..._v11
        } = _v0,
        _v12 = !_v2 || _v3 && _v2,
        _v13 = _v3 || _v2 ? "enter" : "exit",
        _v14 = {
          offsetX: _v6,
          offsetY: _v7,
          reverse: _v4,
          transition: _v8,
          transitionEnd: _v9,
          delay: _v10
        };
      return (0, _v6.jsx)(_v3.AnimatePresence, {
        custom: _v14,
        children: _v12 && (0, _v6.jsx)(_v4.motion.div, {
          ref: _v1,
          className: (0, _v2.cx)("chakra-offset-slide", _v5),
          custom: _v14,
          ..._v7,
          animate: _v13,
          ..._v11
        })
      });
    });
  _v8.displayName = "SlideFade", _v0.s(["SlideFade", 0, _v8, "slideFadeConfig", 0, _v7]);
}