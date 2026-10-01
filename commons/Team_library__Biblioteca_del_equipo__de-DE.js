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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = [{
      label: (0, _v7.translate)({
        singular: "Team library",
        dictionary: {
          es: {
            singular: "Biblioteca del equipo"
          },
          "de-DE": {
            singular: "Teambibliothek"
          },
          "fr-FR": {
            singular: "Bibliothèque de l'équipe"
          },
          "ja-JP": {
            singular: "チームライブラリ"
          },
          "ko-KR": {
            singular: "팀 라이브러리"
          },
          "pt-BR": {
            singular: "Biblioteca da equipe"
          },
          "zh-CN": {
            singular: "团队视频库"
          }
        }
      }),
      link: "team-library"
    }, {
      label: (0, _v7.translate)({
        singular: "My library",
        dictionary: {
          es: {
            singular: "Mi biblioteca"
          },
          "de-DE": {
            singular: "Meine Bibliothek"
          },
          "fr-FR": {
            singular: "Ma bibliothèque"
          },
          "ja-JP": {
            singular: "マイ ライブラリ"
          },
          "ko-KR": {
            singular: "내 라이브러리"
          },
          "pt-BR": {
            singular: "Minha Biblioteca"
          },
          "zh-CN": {
            singular: "我的视频库"
          }
        }
      }),
      link: "my-library"
    }],
    _v21 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useRouter)(),
        {
          member_id: _v2
        } = _v1.query,
        _v3 = _v1.pathname.startsWith("/manage/workspace"),
        _v4 = "string" == typeof _v2 && /^(\d)+$/gm.test(_v2),
        _v5 = _v20.findIndex(({
          link: _v0
        }) => _v1.pathname.includes(_v0));
      if (!_v4) return null;
      let _v6 = _v3 ? _v19.WORKSPACE_MEMBERS_ROUTE : _v19.TEAM_MEMBERS_ROUTE;
      return (0, _v1.jsxs)(_v14.Tabs, {
        variant: "underline",
        size: "sm",
        align: "start",
        isLazy: !0,
        index: _v5,
        children: [(0, _v1.jsxs)(_v15.TabList, {
          children: [_v20.map(({
            label: _v0,
            link: _v1,
            icon: _v2
          }, _v3) => {
            let _v4 = `${_v6}/${_v2}/${_v1}`;
            return (0, _v1.jsxs)(_v13.Tab, {
              width: "auto",
              px: 16,
              fontSize: (0, _v18.rem)(16),
              fontWeight: 500,
              children: [_v2, (0, _v1.jsx)(_v12.default, {
                href: _v4,
                children: _v0
              })]
            }, _v3);
          }), (0, _v1.jsx)(_v14.TabIndicator, {})]
        }), (0, _v1.jsx)(_v17.TabPanels, {
          children: _v20.map((_v0, _v1) => (0, _v1.jsx)(_v16.TabPanel, {
            children: _v0
          }, _v1))
        })]
      });
    },
    _v22 = ({
      children: _v0,
      pageTitle: _v1,
      pageDescription: _v2
    }) => {
      let _v3 = (0, _v3.useContext)(_v9.ViewerContext),
        _v4 = (0, _v4.useTheme)(),
        _v5 = _v3?.teamUser?.ownerId ?? _v3?.user?.id,
        {
          data: _v6
        } = (0, _v6.useGetUserTeam)(() => _v5 ? {
          where: {
            userId: _v5
          },
          select: ["accentColor", "logoUri", "pictures.sizes", "teamName"]
        } : null),
        _v7 = JSON.parse(JSON.stringify(_v4));
      _v6?.accentColor && (_v7.content.focus = _v6.accentColor, _v7.formats.primary = _v6.accentColor);
      let {
        member_id: _v8
      } = (0, _v2.useRouter)().query;
      return "string" == typeof _v8 && /^(\d)+$/gm.test(_v8) ? (0, _v1.jsxs)(_v4.ThemeProvider, {
        theme: _v7,
        children: [(0, _v1.jsx)(_v5.DefaultNavigation, {}), (0, _v1.jsx)(_v8.TeamUserInfoProvider, {
          children: (0, _v1.jsx)(_v10.PageContent, {
            teamOwnerId: _v5 || 0,
            memberId: parseInt(_v8),
            pageTitle: _v1,
            pageDescription: _v2,
            children: _v0
          })
        })]
      }) : null;
    },
    _v23 = ({
      children: _v0,
      pageTitle: _v1,
      pageDescription: _v2
    }) => (0, _v3.useContext)(_v9.ViewerContext) ? (0, _v1.jsx)(_v22, {
      pageTitle: _v1,
      pageDescription: _v2,
      children: _v0
    }) : (0, _v1.jsx)(_v11.Spinner, {});
  _v0.s(["getMemberAccessLayout", 0, _v0 => (0, _v1.jsx)(_v23, {
    pageTitle: (0, _v7.translate)({
      singular: "Team member access",
      dictionary: {
        es: {
          singular: "Acceso de los miembros del equipo"
        },
        "de-DE": {
          singular: "Zugriff für Teammitglieder"
        },
        "fr-FR": {
          singular: "Accès des membres de l'équipe"
        },
        "ja-JP": {
          singular: "チームメンバーのアクセス"
        },
        "ko-KR": {
          singular: "팀원 접근 권한"
        },
        "pt-BR": {
          singular: "Acesso dos membros da equipe"
        },
        "zh-CN": {
          singular: "团队成员访问权限"
        }
      }
    }),
    pageDescription: (0, _v7.translate)({
      singular: "Control which features and workspace content users can access.",
      dictionary: {
        es: {
          singular: "Controla a qué funciones y contenidos del espacio de trabajo pueden acceder los usuarios."
        },
        "de-DE": {
          singular: "Steuern Sie, auf welche Funktionen und Inhalte des Arbeitsbereichs Benutzer zugreifen können."
        },
        "fr-FR": {
          singular: "Contrôlez les fonctionnalités et le contenu de l’espace de travail accessibles aux utilisateurs."
        },
        "ja-JP": {
          singular: "ユーザーがアクセスできる機能やワークスペースのコンテンツを制御します。"
        },
        "ko-KR": {
          singular: "사용자가 액세스할 수 있는 기능 및 워크스페이스 콘텐츠를 제어합니다."
        },
        "pt-BR": {
          singular: "Controle quais recursos e conteúdos do espaço de trabalho os usuários podem acessar."
        },
        "zh-CN": {
          singular: "控制用户可以访问哪些功能和工作区内容。"
        }
      }
    }),
    children: _v0
  }), "getSharedContentLayout", 0, _v0 => (0, _v1.jsx)(_v23, {
    children: _v0
  }), "getSharedContentLayoutWithTabs", 0, _v0 => (0, _v1.jsx)(_v23, {
    children: (0, _v1.jsx)(_v21, {
      children: _v0
    })
  })], 0);
}