{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => (0, _v2.getTeamPrivacyTranslation)(_v1.DEFAULT_PRIVACY_OPTIONS, _v0, _v1).map(_v0 => ({
      icon: _v1.VIDEO_PRIVACY_ICON_MAP[_v0.privacy].icon,
      title: _v0.title,
      description: _v0.description ?? "",
      value: "disable" === _v0.privacy ? "embed_only" : _v0.privacy
    })),
    _v4 = _v3();
  _v0.s(["DefaultPrivacies", 0, _v4, "EventEmbedPrivacyVariant", 0, {
    Public: "public",
    Private: "private",
    Whitelist: "whitelist"
  }, "EventViewPrivacy", 0, {
    Anybody: "anybody",
    Nobody: "nobody",
    Team: "team",
    Password: "password",
    Unlisted: "unlisted",
    EmbedOnly: "embed_only"
  }, "getDefaultPrivacies", 0, _v3]);
}