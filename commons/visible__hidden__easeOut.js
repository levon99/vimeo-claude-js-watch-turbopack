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
      enter: {
        visibility: "visible",
        opacity: 1,
        scale: 1,
        transition: {
          duration: .2,
          ease: [.4, 0, .2, 1]
        }
      },
      exit: {
        transitionEnd: {
          visibility: "hidden"
        },
        opacity: 0,
        scale: .8,
        transition: {
          duration: .1,
          easings: "easeOut"
        }
      }
    },
    _v9 = (0, _v4.chakra)(_v6.motion.div),
    _v10 = (0, _v5.forwardRef)(function (_v0, _v1) {
      var _v2, _v3;
      let {
          rootProps: _v4,
          motionProps: _v5,
          ..._v6
        } = _v0,
        {
          isOpen: _v7,
          onTransitionEnd: _v8,
          unstable__animationState: _v9
        } = (0, _v2.useMenuContext)(),
        _v10 = (0, _v2.useMenuList)(_v6, _v1),
        _v11 = (0, _v2.useMenuPositioner)(_v4),
        _v12 = (0, _v1.useMenuStyles)();
      return (0, _v7.jsx)(_v4.chakra.div, {
        ..._v11,
        __css: {
          zIndex: null != (_v3 = _v0.zIndex) ? _v3 : null == (_v2 = _v12.list) ? void 0 : _v2.zIndex
        },
        children: (0, _v7.jsx)(_v9, {
          variants: _v8,
          initial: !1,
          animate: _v7 ? "enter" : "exit",
          __css: {
            outline: 0,
            ..._v12.list
          },
          ..._v5,
          className: (0, _v3.cx)("chakra-menu__menu-list", _v10.className),
          ..._v10,
          onUpdate: _v8,
          onAnimationComplete: (0, _v3.callAll)(_v9.onComplete, _v10.onAnimationComplete)
        })
      });
    });
  _v10.displayName = "MenuList", _v0.s(["MenuList", 0, _v10]);
}