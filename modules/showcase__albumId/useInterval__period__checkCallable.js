{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useInterval", 0, function (_v0, _v1, _v2 = {
    period: 0,
    checkCallable: !1,
    initialize: !1
  }) {
    (0, _v1.useEffect)(() => {
      if (_v0) {
        _v2.initialize && _v1();
        let _v0 = (0, _v2.registerInterval)(_v1, _v2.period, "useInterval");
        return () => (0, _v2.unRegisterInterval)(_v0);
      }
    }, [_v0, _v2.checkCallable ? _v1 : 0, _v2.period]);
  }]);
}