{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useTour", 0, function (_v0, _v1) {
    let _v2 = (0, _v2.useTourContext)(),
      {
        enable: _v3 = !1,
        fromKey: _v4
      } = _v1 ?? {},
      {
        startTour: _v5,
        dismiss: _v6
      } = _v2,
      _v7 = (0, _v1.useEffectEvent)(() => _v6("disabled"));
    return (0, _v1.useLayoutEffect)(() => {
      if (_v3 && _v0) return _v5(_v0, _v4), () => _v7();
    }, [_v3, _v0, _v4, _v5]), _v2;
  }]);
}