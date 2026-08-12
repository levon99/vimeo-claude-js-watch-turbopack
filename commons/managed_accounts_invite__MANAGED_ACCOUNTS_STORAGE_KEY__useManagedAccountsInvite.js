{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "managed_accounts_invite";
  _v0.s(["MANAGED_ACCOUNTS_STORAGE_KEY", 0, _v3, "useManagedAccountsInvite", 0, function () {
    let {
        value: _v0,
        set: _v1,
        remove: _v2
      } = (0, _v2.default)(_v3, null, void 0, window.sessionStorage),
      _v3 = (0, _v1.useMemo)(() => "object" == typeof _v0 && null !== _v0 && "number" == typeof _v0.agencyUserId && (null === _v0.s || "email" === _v0.s || "link" === _v0.s) ? _v0 : null, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v1(_v0);
      }, [_v1]),
      _v5 = (0, _v1.useCallback)(() => {
        _v2();
      }, [_v2]);
    return (0, _v1.useMemo)(() => ({
      payload: _v3,
      set: _v4,
      clear: _v5
    }), [_v3, _v4, _v5]);
  }]);
}