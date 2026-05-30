{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.s(["ReviewFooter", 0, () => {
    let _v0 = (0, _v10.useViewer)();
    return (0, _v1.jsx)(_v2.Flex, {
      position: "fixed",
      zIndex: "1000",
      bottom: "sm",
      left: (0, _v5.rem)(21),
      boxSize: "md",
      justify: "center",
      align: "center",
      bg: "background",
      borderRadius: (0, _v5.rem)(12),
      children: (0, _v1.jsx)(_v9.EssentialFooterMenu, {
        impressumQualifies: _v0?.impressumQualifies,
        locale: _v0?.locale ?? "en",
        locales: _v0?.locales,
        localeLabels: _v0?.localeLabels,
        token: _v0?.xsrft,
        isDoNotSellReady: !1,
        contentViewingPrefs: _v0?.contentViewingPrefs,
        children: (0, _v1.jsx)(_v6.Tooltip, {
          label: (0, _v8.translate)({
            singular: "Help and preferences",
            dictionary: {
              es: {
                singular: "Ayuda y preferencias"
              },
              "de-DE": {
                singular: "Hilfe und Einstellungen"
              },
              "fr-FR": {
                singular: "Aide et préférences"
              },
              "ja-JP": {
                singular: "ヘルプと詳細設定"
              },
              "ko-KR": {
                singular: "도움말 및 환경설정"
              },
              "pt-BR": {
                singular: "Ajuda e preferências"
              },
              "zh-CN": {
                singular: "帮助和首选项"
              }
            }
          }),
          placement: "right",
          children: (0, _v1.jsx)(_v4.MenuButton, {
            as: _v3.IconButton,
            icon: (0, _v1.jsx)(_v7.QuestionCircle, {}),
            variant: "tertiary",
            size: "md",
            "aria-label": (0, _v8.translate)({
              singular: "Help and preferences",
              dictionary: {
                es: {
                  singular: "Ayuda y preferencias"
                },
                "de-DE": {
                  singular: "Hilfe und Einstellungen"
                },
                "fr-FR": {
                  singular: "Aide et préférences"
                },
                "ja-JP": {
                  singular: "ヘルプと詳細設定"
                },
                "ko-KR": {
                  singular: "도움말 및 환경설정"
                },
                "pt-BR": {
                  singular: "Ajuda e preferências"
                },
                "zh-CN": {
                  singular: "帮助和首选项"
                }
              }
            }),
            "data-testid": "help-center"
          })
        })
      })
    });
  }]);
}