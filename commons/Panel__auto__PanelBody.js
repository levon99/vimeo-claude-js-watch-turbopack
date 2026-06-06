{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v6.motion)(_v4.Box),
    _v9 = (0, _v2.forwardRef)(({
      children: _v0,
      isVisible: _v1 = !0,
      motionProps: _v2,
      sx: _v3,
      ..._v4
    }, _v5) => {
      let {
          container: _v6,
          content: _v7
        } = (0, _v3.useStyleConfig)("Panel", _v4),
        _v8 = (0, _v7.useRef)(null),
        [_v9, _v10] = (0, _v7.useState)("auto");
      return (0, _v7.useEffect)(() => {
        let _v0 = () => {
          let _v0 = _v8.current?.getBoundingClientRect().height;
          _v0 && _v10(`${_v0}px`);
        };
        _v0();
        let _v1 = new ResizeObserver(_v0),
          _v2 = _v8.current;
        return _v2 && _v1.observe(_v2), () => {
          _v2 && _v1.unobserve(_v2);
        };
      }, [_v0]), (0, _v1.jsx)(_v5.AnimatePresence, {
        children: _v1 && (0, _v1.jsx)(_v8, {
          transition: {
            duration: .2
          },
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          ..._v2,
          __css: _v6,
          height: _v9,
          ref: _v5,
          sx: _v3,
          children: (0, _v1.jsx)(_v4.Box, {
            ref: _v8,
            __css: _v7,
            ..._v4,
            children: _v0
          })
        })
      });
    }),
    _v10 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let {
        header: _v3
      } = (0, _v3.useStyleConfig)("Panel", _v1);
      return (0, _v1.jsx)(_v4.Box, {
        ref: _v2,
        __css: _v3,
        ..._v1,
        children: _v0
      });
    }),
    _v11 = (0, _v2.forwardRef)(({
      children: _v0,
      ..._v1
    }, _v2) => {
      let {
        body: _v3
      } = (0, _v3.useStyleConfig)("Panel", _v1);
      return (0, _v1.jsx)(_v4.Box, {
        ref: _v2,
        __css: _v3,
        ..._v1,
        children: _v0
      });
    });
  _v0.s(["Panel", 0, _v9, "PanelBody", 0, _v11, "PanelHeader", 0, _v10]);
}