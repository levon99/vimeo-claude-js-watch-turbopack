{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useFilePrivacyOptions", 0, (_v0 = !1, _v1, _v2) => {
    let _v3 = (0, _v3.useViewer)(),
      {
        capabilities: _v4
      } = (0, _v2.useCapability)(["teamPrivacy"], _v1),
      _v5 = !0 === _v4.teamPrivacy || "team" === _v2;
    return (0, _v1.useMemo)(() => (0, _v5.getTeamPrivacyTranslation)((_v0 ? _v4.FILE_PRIVACY_OPTIONS_WITH_PASSWORD : _v4.FILE_PRIVACY_OPTIONS).filter(_v0 => "team" !== _v0.privacy || _v5), _v3?.teamUser?.teamName, _v3?.teamUser?.isWorkspace), [_v0, _v5, _v3?.teamUser?.teamName, _v3?.teamUser?.isWorkspace]);
  }]);
}