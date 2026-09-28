{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useReducedMotion", 0, function () {
    _v3.hasReducedMotionListener.current || (0, _v2.initPrefersReducedMotion)();
    let [_v0] = (0, _v1.useState)(_v3.prefersReducedMotion.current);
    return _v0;
  }]);
}