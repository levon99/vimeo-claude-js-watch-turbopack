{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = () => {
    let _v0 = (0, _v1.useRouter)(),
      {
        trackAuthEntryTriggered: _v1
      } = (0, _v4.useUnifiedAuthTracking)(),
      _v2 = _v0?.pathname;
    return (0, _v2.useCallback)((_v0, _v1, _v2 = "modal") => {
      let _v3 = void 0 === _v2 || "" === _v2 ? window.location.pathname : _v2,
        _v4 = (0, _v3.createAuthEntryContext)(_v0, (0, _v3.resolveAuthOriginRoute)(_v3), _v2, _v1);
      return _v1(_v4), _v4;
    }, [_v2, _v1]);
  };
  _v0.s(["useAuthEntry", 0, _v5, "useAuthPageEntry", 0, () => {
    let _v0 = _v5();
    return (0, _v2.useCallback)((_v0, _v1, _v2) => (0, _v3.authAttributionUrl)(_v2, _v0(_v0, _v1, "page")), [_v0]);
  }]);
}