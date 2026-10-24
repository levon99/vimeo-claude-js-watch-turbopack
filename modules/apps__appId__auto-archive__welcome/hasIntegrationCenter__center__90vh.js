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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  let _v19 = [_v5.PARTNER_APP_ID.MSTeamProduction, _v5.PARTNER_APP_ID.MSTeamDevelopment],
    _v20 = ({
      folderId: _v0,
      appId: _v1,
      teamOwnerId: _v2
    }) => {
      let _v3 = (0, _v18.useViewer)(),
        {
          capabilities: _v4
        } = (0, _v13.useCapability)(["hasIntegrationCenter"]),
        _v5 = _v5.PARTNER_CONFIG[_v1],
        _v6 = _v19.includes(_v1);
      return _v3 ? _v6 ? (0, _v1.jsx)(_v16.MicrosoftTeamsSuccess, {
        folderId: _v0,
        config: _v5,
        appId: _v1,
        teamOwnerId: _v2,
        viewer: _v3,
        hasIntegrationCenter: !!_v4.hasIntegrationCenter
      }) : (0, _v1.jsxs)(_v6.Flex, {
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
        backgroundColor: "backgroundSubtle",
        children: [(0, _v1.jsx)(_v17.ConfettiLottieAnimation, {}), (0, _v1.jsxs)(_v7.Card, {
          padding: "xl",
          width: (0, _v10.rem)(420),
          boxShadow: "lg",
          height: "auto",
          borderRadius: "lg",
          children: [(0, _v1.jsx)(_v6.Flex, {
            alignItems: "center",
            justifyContent: "center",
            gap: "sm",
            mb: "lg",
            children: (0, _v1.jsx)(_v12.CircleCheckFilled, {
              boxSize: "sm"
            })
          }), (0, _v1.jsx)(_v8.Header, {
            size: "md",
            textAlign: "center",
            mb: "3",
            color: "text-primary",
            children: _v5?.getHeaderText()
          }), (0, _v1.jsx)(_v9.Paragraph, {
            size: "lg",
            color: "text-secondary",
            mb: "lg",
            textAlign: "center",
            children: _v5?.getSubHeaderText()
          }), (0, _v1.jsxs)(_v6.Flex, {
            gap: "sm",
            justifyContent: "center",
            flexDirection: "column",
            children: [(0, _v1.jsx)(_v11.Button, {
              variant: "primary",
              as: "a",
              href: _v4.hasIntegrationCenter ? `/integrations-center/${_v5.appUUID}/details/manage` : "/settings/apps",
              width: "100%",
              children: (0, _v14.translate)({
                singular: "Done",
                dictionary: {
                  es: {
                    singular: "Hecho"
                  },
                  "de-DE": {
                    singular: "Fertig"
                  },
                  "fr-FR": {
                    singular: "Terminé"
                  },
                  "ja-JP": {
                    singular: "完了"
                  },
                  "ko-KR": {
                    singular: "완료"
                  },
                  "pt-BR": {
                    singular: "Feito"
                  },
                  "zh-CN": {
                    singular: "已存档"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Button, {
              variant: "tertiary",
              as: "a",
              href: `/manage/folders/${_v0}`,
              width: "100%",
              children: (0, _v14.translate)({
                singular: "Go to folder",
                dictionary: {
                  es: {
                    singular: "Ir a la carpeta"
                  },
                  "de-DE": {
                    singular: "Zum Ordner"
                  },
                  "fr-FR": {
                    singular: "Accéder au dossier"
                  },
                  "ja-JP": {
                    singular: "フォルダーに移動"
                  },
                  "ko-KR": {
                    singular: "폴더로 이동하기"
                  },
                  "pt-BR": {
                    singular: "Ir para a pasta"
                  },
                  "zh-CN": {
                    singular: "前往文件夹"
                  }
                }
              })
            })]
          })]
        })]
      }) : (0, _v1.jsx)(_v15.LoadingPage, {});
    },
    _v21 = ({
      folderId: _v0,
      appId: _v1,
      teamOwnerId: _v2
    }) => (0, _v1.jsx)(_v20, {
      appId: _v1,
      folderId: _v0,
      teamOwnerId: _v2
    });
  (0, _v2.withPageSetup)(async ({
    params: _v0,
    query: _v1
  }) => {
    let _v2 = Number(_v0?.appId),
      _v3 = String(_v1?.folderId ?? ""),
      _v4 = Number(_v1?.teamOwnerId) || null;
    return _v2 && (0, _v5.isValidAppId)(_v2) ? {
      props: {
        hasThemeSupport: !0,
        appId: _v2,
        folderId: _v3,
        teamOwnerId: _v4
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0,
    inlineViewer: !0
  }), _v21.getLayout = _v0 => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v3.DefaultNavigation, {
      hasSearch: !1,
      isSideNavActive: !1
    }), _v0, (0, _v1.jsx)(_v4.MinimalFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v21], 0);
}