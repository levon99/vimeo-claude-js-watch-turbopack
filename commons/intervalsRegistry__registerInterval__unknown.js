{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = new Map();
  _v0.s(["intervalsRegistry", 0, _v2, "registerInterval", 0, function (_v0, _v1 = 0, _v2 = "unknown") {
    let _v3 = window.setInterval(_v1.liveApplicationConfig.TIMING.DEBUG_TIMERS ? () => {
      let _v0 = _v2.get(_v3),
        _v1 = Date.now();
      _v0(), _v0 && _v2.set(_v3, {
        ..._v0,
        callOffset: _v0.calledAt ? _v1 - _v0.calledAt - _v0.period : 0,
        callsCount: _v0.callsCount + 1,
        calledAt: _v1
      });
    } : _v0, _v1);
    return _v2.set(_v3, {
      name: _v2,
      period: _v1,
      callable: _v0,
      callOffset: 0,
      callsCount: 0,
      calledAt: 0
    }), _v3;
  }, "unRegisterInterval", 0, function (_v0) {
    null !== _v0 && (_v2.delete(_v0), window.clearInterval(_v0));
  }]);
}