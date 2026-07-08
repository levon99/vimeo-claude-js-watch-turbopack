{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (_v0, _v1, _v2) => _v2.DEFAULT_PRIVACY_OPTIONS.map(_v0 => _v2 ? (0, _v3.getNewPrivacyCopy)("xs", _v0, _v1)(_v0) : _v0).map(_v0 => ({
      icon: _v2 ? _v0.icon : _v2.VIDEO_PRIVACY_ICON_MAP[_v0.privacy].icon,
      title: "team" === _v0.privacy && _v2 ? !_v0 && _v1 ? (0, _v1.translate)({
        singular: "Anyone in this workspace",
        dictionary: {
          es: {
            singular: "Cualquier persona en este espacio de trabajo"
          },
          "de-DE": {
            singular: "Jeder in diesem Workspace"
          },
          "fr-FR": {
            singular: "Tous les membres de cet espace de travail"
          },
          "ja-JP": {
            singular: "このワークスペースにいる全員"
          },
          "ko-KR": {
            singular: "이 워크스페이스의 모든 사용자"
          },
          "pt-BR": {
            singular: "Qualquer pessoa neste espaço de trabalho"
          },
          "zh-CN": {
            singular: "此工作区内的任何人"
          }
        }
      }) : _v0 ? (0, _v1.translate)({
        singular: "Anyone at {TEAM_NAME}",
        replacements: {
          TEAM_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Cualquier persona en {TEAM_NAME}"
          },
          "de-DE": {
            singular: "Jemand von {TEAM_NAME}"
          },
          "fr-FR": {
            singular: "Tous les membres de {TEAM_NAME}"
          },
          "ja-JP": {
            singular: "{TEAM_NAME}の全員"
          },
          "ko-KR": {
            singular: "{TEAM_NAME}의 모든 사용자"
          },
          "pt-BR": {
            singular: "Qualquer pessoa em {TEAM_NAME}"
          },
          "zh-CN": {
            singular: "{TEAM_NAME} 内的任何人"
          }
        }
      }) : (0, _v1.translate)({
        singular: "All members",
        dictionary: {
          es: {
            singular: "Todos los miembros"
          },
          "de-DE": {
            singular: "Alle Mitglieder"
          },
          "fr-FR": {
            singular: "Tous les membres"
          },
          "ja-JP": {
            singular: "すべてのメンバー"
          },
          "ko-KR": {
            singular: "모든 멤버"
          },
          "pt-BR": {
            singular: "Todos os integrantes"
          },
          "zh-CN": {
            singular: "所有成员"
          }
        }
      }) : _v0.title,
      description: _v0.description ?? "",
      value: "disable" === _v0.privacy ? "embed_only" : _v0.privacy
    })),
    _v5 = _v4();
  _v0.s(["DefaultPrivacies", 0, _v5, "EventEmbedPrivacyVariant", 0, {
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
  }, "getDefaultPrivacies", 0, _v4]);
}