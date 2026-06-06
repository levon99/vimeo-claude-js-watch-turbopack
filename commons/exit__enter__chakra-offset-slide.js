{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = {
      initial: "exit",
      animate: "enter",
      exit: "exit",
      variants: {
        exit: ({
          reverse: _v0,
          initialScale: _v1,
          transition: _v2,
          transitionEnd: _v3,
          delay: _v4
        }) => {
          var _v5;
          return {
            opacity: 0,
            ...(_v0 ? {
              scale: _v1,
              transitionEnd: null == _v3 ? void 0 : _v3.exit
            } : {
              transitionEnd: {
                scale: _v1,
                ...(null == _v3 ? void 0 : _v3.exit)
              }
            }),
            transition: null != (_v5 = null == _v2 ? void 0 : _v2.exit) ? _v5 : _v1.withDelay.exit(_v1.TRANSITION_DEFAULTS.exit, _v4)
          };
        },
        enter: ({
          transitionEnd: _v0,
          transition: _v1,
          delay: _v2
        }) => {
          var _v3;
          return {
            opacity: 1,
            scale: 1,
            transition: null != (_v3 = null == _v1 ? void 0 : _v1.enter) ? _v3 : _v1.withDelay.enter(_v1.TRANSITION_DEFAULTS.enter, _v2),
            transitionEnd: null == _v0 ? void 0 : _v0.enter
          };
        }
      }
    },
    _v8 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let {
          unmountOnExit: _v2,
          in: _v3,
          reverse: _v4 = !0,
          initialScale: _v5 = .95,
          className: _v6,
          transition: _v7,
          transitionEnd: _v8,
          delay: _v9,
          ..._v10
        } = _v0,
        _v11 = !_v2 || _v3 && _v2,
        _v12 = _v3 || _v2 ? "enter" : "exit",
        _v13 = {
          initialScale: _v5,
          reverse: _v4,
          transition: _v7,
          transitionEnd: _v8,
          delay: _v9
        };
      return (0, _v6.jsx)(_v3.AnimatePresence, {
        custom: _v13,
        children: _v11 && (0, _v6.jsx)(_v4.motion.div, {
          ref: _v1,
          className: (0, _v2.cx)("chakra-offset-slide", _v6),
          ..._v7,
          animate: _v12,
          custom: _v13,
          ..._v10
        })
      });
    });
  _v8.displayName = "ScaleFade", _v0.s(["ScaleFade", 0, _v8, "scaleFadeConfig", 0, _v7]);
}