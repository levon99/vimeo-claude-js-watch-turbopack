{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = {
      exit: {
        opacity: 0,
        scale: .95,
        transition: {
          duration: .1,
          ease: [.4, 0, 1, 1]
        }
      },
      enter: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: .15,
          ease: [0, 0, .2, 1]
        }
      }
    },
    _v7 = (0, _v2.chakra)(_v4.motion.section),
    _v8 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          variants: _v2 = _v6,
          ..._v3
        } = _v0,
        {
          isOpen: _v4
        } = (0, _v1.usePopoverContext)();
      return (0, _v5.jsx)(_v7, {
        ref: _v1,
        variants: function (_v0) {
          if (_v0) return {
            enter: {
              ..._v0.enter,
              visibility: "visible"
            },
            exit: {
              ..._v0.exit,
              transitionEnd: {
                visibility: "hidden"
              }
            }
          };
        }(_v2),
        initial: !1,
        animate: _v4 ? "enter" : "exit",
        ..._v3
      });
    });
  _v8.displayName = "PopoverTransition";
  var _v9 = _v0.i(0),
    _v10 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          rootProps: _v2,
          motionProps: _v3,
          ..._v4
        } = _v0,
        {
          getPopoverProps: _v5,
          getPopoverPositionerProps: _v6,
          onAnimationComplete: _v7
        } = (0, _v1.usePopoverContext)(),
        _v8 = (0, _v1.usePopoverStyles)(),
        _v9 = {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          ..._v8.content
        };
      return (0, _v5.jsx)(_v2.chakra.div, {
        ..._v6(_v2),
        __css: _v8.popper,
        className: "chakra-popover__popper",
        children: (0, _v5.jsx)(_v8, {
          ..._v3,
          ..._v5(_v4, _v1),
          onAnimationComplete: (0, _v9.callAll)(_v7, _v4.onAnimationComplete),
          className: (0, _v9.cx)("chakra-popover__content", _v0.className),
          __css: _v9
        })
      });
    });
  _v10.displayName = "PopoverContent", _v0.s(["PopoverContent", 0, _v10], 0);
}