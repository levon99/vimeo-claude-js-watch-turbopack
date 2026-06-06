{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useRegistrantLoginCookie", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(null),
      _v4 = (0, _v1.useCallback)(() => {
        _v3(_v1 && ((0, _v3.getLeadCaptureCookie)(String(_v1)) || (0, _v2.loadCookie)(_v4.interactionToolsConfig.AUTHORIZATION.REGISTRANT_COOKIE(_v1))) || null);
      }, [_v1]);
    return (0, _v5.useInterval)(!!(_v0 && _v1 && !_v2), _v4, {
      checkCallable: !0,
      initialize: !0,
      period: 500
    }), _v1 ? _v2 : null;
  }]);
}