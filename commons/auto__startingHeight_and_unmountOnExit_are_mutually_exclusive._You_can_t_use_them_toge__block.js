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
        height: {
          duration: .2,
          ease: _v1.TRANSITION_EASINGS.ease
        },
        opacity: {
          duration: .3,
          ease: _v1.TRANSITION_EASINGS.ease
        }
      },
      enter: {
        height: {
          duration: .3,
          ease: _v1.TRANSITION_EASINGS.ease
        },
        opacity: {
          duration: .4,
          ease: _v1.TRANSITION_EASINGS.ease
        }
      }
    },
    _v8 = {
      exit: ({
        animateOpacity: _v0,
        startingHeight: _v1,
        transition: _v2,
        transitionEnd: _v3,
        delay: _v4
      }) => {
        var _v5;
        return {
          ...(_v0 && {
            opacity: +!!(null != _v1 && parseInt(_v1.toString(), 10) > 0)
          }),
          height: _v1,
          transitionEnd: null == _v3 ? void 0 : _v3.exit,
          transition: null != (_v5 = null == _v2 ? void 0 : _v2.exit) ? _v5 : _v1.withDelay.exit(_v7.exit, _v4)
        };
      },
      enter: ({
        animateOpacity: _v0,
        endingHeight: _v1,
        transition: _v2,
        transitionEnd: _v3,
        delay: _v4
      }) => {
        var _v5;
        return {
          ...(_v0 && {
            opacity: 1
          }),
          height: _v1,
          transitionEnd: null == _v3 ? void 0 : _v3.enter,
          transition: null != (_v5 = null == _v2 ? void 0 : _v2.enter) ? _v5 : _v1.withDelay.enter(_v7.enter, _v4)
        };
      }
    },
    _v9 = (0, _v5.forwardRef)((_v0, _v1) => {
      let {
          in: _v2,
          unmountOnExit: _v3,
          animateOpacity: _v4 = !0,
          startingHeight: _v5 = 0,
          endingHeight: _v6 = "auto",
          style: _v7,
          className: _v8,
          transition: _v9,
          transitionEnd: _v10,
          ..._v11
        } = _v0,
        [_v12, _v13] = (0, _v5.useState)(!1);
      (0, _v5.useEffect)(() => {
        let _v0 = setTimeout(() => {
          _v13(!0);
        });
        return () => clearTimeout(_v0);
      }, []), (0, _v2.warn)({
        condition: Number(_v5) > 0 && !!_v3,
        message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
      });
      let _v14 = parseFloat(_v5.toString()) > 0,
        _v15 = {
          startingHeight: _v5,
          endingHeight: _v6,
          animateOpacity: _v4,
          transition: _v12 ? _v9 : {
            enter: {
              duration: 0
            }
          },
          transitionEnd: {
            enter: null == _v10 ? void 0 : _v10.enter,
            exit: _v3 ? null == _v10 ? void 0 : _v10.exit : {
              ...(null == _v10 ? void 0 : _v10.exit),
              display: _v14 ? "block" : "none"
            }
          }
        },
        _v16 = !_v3 || _v2,
        _v17 = _v2 || _v3 ? "enter" : "exit";
      return (0, _v6.jsx)(_v3.AnimatePresence, {
        initial: !1,
        custom: _v15,
        children: _v16 && (0, _v6.jsx)(_v4.motion.div, {
          ref: _v1,
          ..._v11,
          className: (0, _v2.cx)("chakra-collapse", _v8),
          style: {
            overflow: "hidden",
            display: "block",
            ..._v7
          },
          custom: _v15,
          variants: _v8,
          initial: !!_v3 && "exit",
          animate: _v17,
          exit: "exit"
        })
      });
    });
  _v9.displayName = "Collapse", _v0.s(["Collapse", 0, _v9]);
}