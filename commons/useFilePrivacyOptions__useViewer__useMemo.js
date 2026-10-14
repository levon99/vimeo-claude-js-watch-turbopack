{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useFilePrivacyOptions", 0, (_v0 = !1) => {
    let _v1 = (0, _v2.useViewer)();
    return (0, _v1.useMemo)(() => (0, _v4.getTeamPrivacyTranslation)(_v0 ? _v3.FILE_PRIVACY_OPTIONS_WITH_PASSWORD : _v3.FILE_PRIVACY_OPTIONS, _v1?.teamUser?.teamName, _v1?.teamUser?.isWorkspace), [_v0, _v1?.teamUser?.teamName, _v1?.teamUser?.isWorkspace]);
  }]);
}