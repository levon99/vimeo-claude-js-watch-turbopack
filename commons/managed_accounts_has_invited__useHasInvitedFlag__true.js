{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "managed_accounts_has_invited_";
  _v0.s(["useHasInvitedFlag", 0, function (_v0) {
    return {
      hasInvited: !!(0, _v2.useHasMounted)() && void 0 !== _v0 && function (_v0) {
        try {
          return "true" === window.localStorage.getItem(`${_v3}${_v0}`);
        } catch {
          return !1;
        }
      }(_v0),
      setHasInvited: (0, _v1.useCallback)(() => {
        if (void 0 !== _v0) try {
          window.localStorage.setItem(`${_v3}${_v0}`, "true");
        } catch {}
      }, [_v0])
    };
  }]);
}