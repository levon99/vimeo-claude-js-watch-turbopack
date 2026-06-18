{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4({
    parentEnabled: _v0,
    requiredRole: _v1,
    teamUser: _v2
  }) {
    if (!1 === _v0) return !1;
    if (!_v2) return !0;
    let _v3 = _v2.permissionLevel;
    return "roleewea" === (_v1 ?? "roleewea") ? 1 === _v3 || 2 === _v3 || 4 === _v3 || 6 === _v3 : 1 === _v3 || 2 === _v3;
  }
  _v0.s(["canEnableLiveCaptionsForLiveEvent", 0, _v4, "useCanEnableLiveCaptionsForLiveEvent", 0, function (_v0) {
    let _v1 = (0, _v3.useOptionalViewer)(),
      {
        data: _v2
      } = (0, _v2.useGetUserPreferences)(() => _v0 ? {
        select: ["eppailc", "urpailc"],
        where: {
          userId: _v0
        }
      } : null),
      {
        data: _v3
      } = (0, _v1.useGetMePreferences)(() => _v0 ? null : {
        select: ["eppailc", "urpailc"]
      }),
      _v4 = _v2 ?? _v3;
    return _v4({
      parentEnabled: _v4?.eppailc,
      requiredRole: _v4?.urpailc,
      teamUser: _v1?.teamUser
    });
  }]);
}