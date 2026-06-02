{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useInteractivityFreemiumAccess", 0, function () {
    let _v0 = (0, _v5.useViewer)(),
      _v1 = _v0?.user,
      _v2 = _v1?.id,
      _v3 = _v0?.teamUser,
      _v4 = _v3?.ownerId,
      _v5 = (_v4 || _v2) ?? 0,
      _v6 = (!_v3 || _v4 === _v2) && _v1?.account === "free",
      _v7 = (0, _v2.useIsStaff)(),
      _v8 = (!_v3 || _v4 === _v2) && _v7,
      _v9 = (0, _v1.useMemo)(() => ({
        cuid: _v5,
        is_free: _v6,
        is_staff: _v8
      }), [_v5, _v6, _v8]),
      {
        assignment: _v10
      } = (0, _v4.useEppoAssignment)({
        flagKey: "interactivity-freemium-access",
        subject: {
          key: _v5,
          keyType: _v3.SubjectKeyTypes.TEAM_OWNER_ID,
          additionalData: _v9
        },
        defaultAssignment: !1,
        disabled: !_v6,
        assignmentType: _v3.VariationTypes.BOOLEAN
      });
    return _v10;
  }]);
}