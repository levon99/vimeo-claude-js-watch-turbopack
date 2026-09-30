{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["getTeamPrivacyTranslation", 0, (_v0, _v1, _v2) => _v0.map(_v0 => ({
    ..._v0,
    title: _v0.privacy === _v1.DEFAULT_PRIVACY_VALUES.TEAM ? (0, _v2.getTranslations)().getTeamPrivacyTranslation(_v1, _v2) : _v0.title
  }))]);
}