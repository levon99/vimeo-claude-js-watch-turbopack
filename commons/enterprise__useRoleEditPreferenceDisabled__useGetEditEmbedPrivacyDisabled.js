{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = [_v2.PREF_EMBED_DOMAIN_EDIT_ENABLED_ADMIN, _v2.PREF_EMBED_DOMAIN_EDIT_ENABLED_CONTRIBUTOR, _v2.PREF_VIDEO_FILE_LINK_ACCESS_ENABLED_ADMIN, _v2.PREF_VIDEO_FILE_LINK_ACCESS_ENABLED_CONTRIBUTOR],
    _v7 = [_v2.PermissionLevel.Owner, _v2.PermissionLevel.Admin],
    _v8 = (_v0, _v1) => {
      let _v2 = (0, _v5.useViewer)(),
        _v3 = "enterprise" === String(_v2?.teamUser ? _v2.teamUser.accountType : _v2?.user?.account),
        _v4 = !_v2?.teamUser || _v7.includes(_v2.teamUser.permissionLevel) ? _v0 : _v1,
        _v5 = _v2?.teamUser ? _v2?.teamUser?.ownerId : _v2?.user?.id,
        {
          data: _v6,
          isLoading: _v7
        } = (0, _v4.useGetUserPreferences)(() => null != _v5 && _v3 ? {
          where: {
            userId: _v5
          },
          select: _v6
        } : null);
      return (0, _v1.useMemo)(() => {
        let _v0 = !1;
        return _v3 && _v6 && _v4 in _v6 && (_v0 = !_v6[_v4]), {
          isDisabled: _v0,
          isLoading: _v7
        };
      }, [_v3, _v7, _v4, _v6]);
    };
  _v0.s(["useRoleEditPreferenceDisabled", 0, _v8], 0), _v0.s(["useGetEditEmbedPrivacyDisabled", 0, () => {
    let _v0 = (0, _v3.getTranslations)(),
      {
        isDisabled: _v1,
        isLoading: _v2
      } = _v8(_v2.PREF_EMBED_DOMAIN_EDIT_ENABLED_ADMIN, _v2.PREF_EMBED_DOMAIN_EDIT_ENABLED_CONTRIBUTOR);
    return (0, _v1.useMemo)(() => ({
      tooltip: _v0.EditEmbedPrivacyDisableTooltip,
      isDisabled: _v1,
      isLoading: _v2
    }), [_v0.EditEmbedPrivacyDisableTooltip, _v1, _v2]);
  }], 0);
}