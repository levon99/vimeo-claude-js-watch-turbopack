{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useReCharts", 0, () => {
    let [_v0, _v1] = (0, _v1.useState)(null),
      [_v2, _v3] = (0, _v1.useState)(null);
    return (0, _v1.useEffect)(() => {
      let _v0 = !1;
      return _v0.A(0).then(_v0 => {
        _v0 || _v1(_v0);
      }).catch(_v0 => {
        _v0 || _v3(_v0);
      }), () => void (_v0 = !0);
    }, []), {
      ReCharts: _v0,
      loadError: _v2
    };
  }]);
}