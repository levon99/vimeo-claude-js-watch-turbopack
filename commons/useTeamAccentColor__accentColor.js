{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useTeamAccentColor", 0, function (_v0) {
    let {
      data: _v1
    } = (0, _v1.useGetUserTeam)(() => _v0 ? {
      select: ["accentColor"],
      where: {
        userId: (0, _v2.idFromUri)(_v0)
      }
    } : null);
    return _v1?.accentColor;
  }]);
}