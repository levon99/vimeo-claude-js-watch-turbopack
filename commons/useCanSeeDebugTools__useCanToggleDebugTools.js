{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useCanSeeDebugTools", 0, function () {
    let _v0 = (0, _v1.useManager)(_v3.DebugControlManager),
      _v1 = (0, _v2.useIsStaff)();
    return !!(_v0?.isEnabled && (_v4.environmentConfig.IS_DEV || _v1));
  }, "useCanToggleDebugTools", 0, function () {
    let _v0 = (0, _v2.useIsStaff)();
    return !!(_v4.environmentConfig.IS_DEV || _v0);
  }]);
}