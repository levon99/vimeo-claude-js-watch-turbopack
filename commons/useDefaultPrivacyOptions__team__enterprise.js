{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["useDefaultPrivacyOptions", 0, (_v0, _v1 = !1, _v2 = !0, _v3 = "xs") => {
    let {
      settings: _v4
    } = (0, _v2.useOrionSettings)();
    return (0, _v1.useMemo)(() => _v0 ? _v3.DEFAULT_PRIVACY_OPTIONS.map(_v0 => ({
      ..._v0,
      isDisabled: !_v1 && _v3.DEFAULT_UPSELL_PRIVACIES.includes(_v0.privacy),
      showUpsellModal: !_v1 && _v2 && _v3.DEFAULT_UPSELL_PRIVACIES.includes(_v0.privacy),
      icon: (0, _v3.videoPrivacyIcons)(_v3)[_v0.privacy].icon,
      title: "team" === _v0.privacy ? (0, _v4.getTranslations)().getTeamPrivacyTranslation(_v0?.teamUser?.teamName, _v0?.teamUser?.isWorkspace) : _v0.title
    })).filter(_v0 => "team" !== _v0.privacy || _v0?.teamUser?.isWorkspace || (_v0?.teamUser?.accountType ?? _v0?.user?.account) === "enterprise").map(_v0 => _v4.privacy_settings_new_copy ? (0, _v5.getNewPrivacyCopy)(_v3, _v0?.teamUser?.teamName, _v0?.teamUser?.isWorkspace)(_v0) : _v0) : [], [_v0, _v1, _v2, _v3, _v4.privacy_settings_new_copy]);
  }]);
}