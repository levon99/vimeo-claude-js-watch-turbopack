{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = (0, _v2.forwardRef)(({
    children: _v0,
    enterDuration: _v1 = "md",
    exitDuration: _v2 = "sm",
    enterEase: _v3 = "basic-entrance",
    exitEase: _v4 = "basic-exit",
    ..._v5
  }, _v6) => {
    let _v7 = {
      enter: {
        duration: _v4.Duration[_v1],
        ease: _v4.Easing[_v3]
      },
      exit: {
        duration: _v4.Duration[_v2],
        ease: _v4.Easing[_v4]
      }
    };
    return (0, _v1.jsx)(_v3.Collapse, {
      ref: _v6,
      ..._v5,
      transition: _v7,
      children: _v0
    });
  });
  _v0.s(["Collapse", 0, _v5]);
}