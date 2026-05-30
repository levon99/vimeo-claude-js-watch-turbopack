{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = () => () => {};
  _v0.s(["Portal", 0, _v0 => {
    var _v1;
    let _v2,
      _v3,
      {
        children: _v4,
        disabled: _v5
      } = _v0,
      [_v6, _v7] = (0, _v3.useState)(_v0.container?.current),
      _v8 = (0, _v3.useSyncExternalStore)(_v6, () => !1, () => !0),
      {
        getRootNode: _v9
      } = (0, _v5.useEnvironmentContext)();
    if ((0, _v3.useEffect)(() => {
      _v7(() => _v0.container?.current);
    }, [_v0.container]), _v8 || _v5) return (0, _v1.jsx)(_v1.Fragment, {
      children: _v4
    });
    let _v10 = _v6 ?? (_v1 = _v9, _v3 = (_v2 = _v1?.()).getRootNode(), (0, _v2.isShadowRoot)(_v3) ? _v3 : (0, _v2.getDocument)(_v2).body);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v3.Children.map(_v4, _v0 => (0, _v4.createPortal)(_v0, _v10))
    });
  }]);
}