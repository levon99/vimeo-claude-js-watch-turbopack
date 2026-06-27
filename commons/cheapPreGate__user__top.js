{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["cheapPreGate", 0, function (_v0, _v1) {
    let _v2;
    if (!_v1 || !_v0?.user || function () {
      try {
        return window.self !== window.top;
      } catch {
        return !0;
      }
    }()) return !1;
    let _v3 = _v0.teamUser?.accountType ?? _v0.user.account;
    return !_v0.isEnterpriseSite && _v3 !== _v1.AccountType.Enterprise && (void 0 === (_v2 = _v0.teamUser?.ownerId) || _v2 === _v0.user?.id);
  }]);
}