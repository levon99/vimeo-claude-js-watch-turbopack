{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["usePolling", 0, function (_v0, _v1, _v2, _v3 = 0) {
    let [_v4, _v5] = (0, _v1.useState)(_v2);
    return (0, _v1.useEffect)(() => {
      if (_v0) {
        let _v0 = (0, _v2.registerInterval)(() => _v5(_v0 => _v1(_v0)), _v3, "usePolling");
        return _v5(_v0 => _v1(_v0)), () => (0, _v2.unRegisterInterval)(_v0);
      }
    }, [_v0, _v1, _v3]), _v4;
  }]);
}