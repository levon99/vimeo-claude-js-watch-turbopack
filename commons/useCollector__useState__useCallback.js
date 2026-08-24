{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useCollector", 0, function (_v0, _v1, _v2) {
    let [_v3, _v4] = (0, _v2.useState)(() => _v1(_v0)),
      _v5 = (0, _v2.useCallback)(() => {
        let _v0 = _v1(_v0);
        !(0, _v1.default)(_v3, _v0) && (_v4(_v0), _v2 && _v2());
      }, [_v3, _v0, _v2]);
    return (0, _v3.useIsomorphicLayoutEffect)(_v5), [_v3, _v5];
  }]);
}