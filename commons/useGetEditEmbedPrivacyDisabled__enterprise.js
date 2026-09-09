{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useGetEditEmbedPrivacyDisabled", 0, () => {
    let _v0 = (0, _v3.useViewer)(),
      _v1 = (0, _v5.getTranslations)(),
      _v2 = _v0?.teamUser ? _v0.teamUser?.accountType === "enterprise" : _v0?.user?.account === "enterprise",
      _v3 = _v0?.teamUser && _v0?.teamUser?.permissionLevel !== _v4.PermissionLevel.Owner && _v0?.teamUser?.permissionLevel !== _v4.PermissionLevel.Admin ? _v4.PREF_EMBED_DOMAIN_EDIT_ENABLED_CONTRIBUTOR : _v4.PREF_EMBED_DOMAIN_EDIT_ENABLED_ADMIN,
      _v4 = _v0?.teamUser ? _v0?.teamUser?.ownerId : _v0?.user?.id,
      {
        data: _v5
      } = (0, _v2.useGetUserPreferences)(() => _v4 && _v2 ? {
        where: {
          userId: _v4
        },
        select: [_v4.PREF_EMBED_DOMAIN_EDIT_ENABLED_ADMIN, _v4.PREF_EMBED_DOMAIN_EDIT_ENABLED_CONTRIBUTOR]
      } : null);
    return (0, _v1.useMemo)(() => {
      let _v0 = !1;
      return _v2 && _v5 && _v5.hasOwnProperty(_v3) && (_v0 = !_v5[_v3]), {
        tooltip: _v1.EditEmbedPrivacyDisableTooltip,
        isDisabled: _v0
      };
    }, [_v1.EditEmbedPrivacyDisableTooltip, _v3, _v2, _v5]);
  }]);
}