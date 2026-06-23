{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["VersionAlert", 0, ({
    uri: _v0,
    isOpen: _v1,
    closeAlert: _v2
  }) => _v1 ? (0, _v1.jsx)(_v6.Box, {
    paddingX: "sm",
    children: (0, _v1.jsx)(_v2.Alert, {
      variant: "info",
      size: "sm",
      onClose: () => _v2(),
      children: (0, _v1.jsx)(_v3.AlertDescription, {
        children: (0, _v1.jsx)(_v4.Text, {
          variant: "body-xl",
          as: "span",
          fontSize: "body-sm",
          color: "text-primary",
          letterSpacing: "0.24px",
          children: (0, _v7.translate)({
            singular: "You are viewing a previous version of this video. {LINK}View current version{/LINK}",
            replacements: {
              LINK: _v0 => (0, _v1.jsx)(_v5.Link, {
                href: _v0,
                variant: "inline-primary",
                fontSize: "body-sm",
                _hover: {
                  cursor: "pointer"
                },
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Está viendo una versión anterior de este video. {LINK}Ver la versión actual{/LINK}."
              },
              "de-DE": {
                singular: "Sie sehen sich eine frühere Version dieses Videos an. {LINK}Aktuelle Version anzeigen{/LINK}"
              },
              "fr-FR": {
                singular: "Vous regardez une ancienne version de cette vidéo. {LINK}Afficher la version actuelle{/LINK}"
              },
              "ja-JP": {
                singular: "この動画の以前のバージョンを表示しています。{LINK}現在のバージョンを表示する{/LINK}"
              },
              "ko-KR": {
                singular: "이전 버전의 동영상입니다. {LINK}최신 버전 보기{/LINK}"
              },
              "pt-BR": {
                singular: "Você está visualizando uma versão anterior deste vídeo. {LINK}Visualizar versão atual{/LINK}"
              },
              "zh-CN": {
                singular: "您正在查看此视频的先前版本。{LINK}查看当前版本{/LINK}"
              }
            }
          })
        })
      })
    })
  }) : null]);
}