{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    initial: {
      opacity: 0,
      y: "300%",
      x: "-50%"
    },
    enter: {
      opacity: 1,
      y: "0",
      x: "-50%"
    },
    exit: {
      opacity: 0,
      y: "300%",
      x: "-50%"
    }
  };
  _v0.s(["AnimatedNotice", 0, function ({
    children: _v0,
    className: _v1,
    onMount: _v2,
    ..._v3
  }) {
    return (0, _v3.useEffect)(() => {
      _v2?.();
    }, []), (0, _v1.jsx)(_v2.motion.div, {
      className: _v1,
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants: {
        ..._v4,
        ..._v3?.variants
      },
      ..._v3,
      children: _v0
    });
  }]);
}