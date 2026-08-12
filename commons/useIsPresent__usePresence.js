{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useIsPresent", 0, function () {
    var _v0;
    return null === (_v0 = (0, _v1.useContext)(_v2.PresenceContext)) || _v0.isPresent;
  }, "usePresence", 0, function (_v0 = !0) {
    let _v1 = (0, _v1.useContext)(_v2.PresenceContext);
    if (null === _v1) return [!0, null];
    let {
        isPresent: _v2,
        onExitComplete: _v3,
        register: _v4
      } = _v1,
      _v5 = (0, _v1.useId)();
    (0, _v1.useEffect)(() => {
      _v0 && _v4(_v5);
    }, [_v0]);
    let _v6 = (0, _v1.useCallback)(() => _v0 && _v3 && _v3(_v5), [_v5, _v3, _v0]);
    return !_v2 && _v3 ? [!1, _v6] : [!0];
  }]);
}