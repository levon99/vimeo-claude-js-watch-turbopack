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
      label: (0, _v18.translate)({
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
      label: (0, _v18.translate)({
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
      return (0, _v1.jsxs)(_v13.Tabs, {
        variant: "underline",
        size: "sm",
        align: "start",
        isLazy: !0,
        index: _v5,
        children: [(0, _v1.jsxs)(_v14.TabList, {
          children: [_v20.map(({
            label: _v0
          }, _v1) => {
            let {
                link: _v2
              } = _v20[_v1],
              _v3 = `${_v6}/${_v2}/${_v2}`;
            return (0, _v1.jsx)(_v12.Tab, {
              width: "auto",
              px: 16,
              fontSize: (0, _v17.rem)(16),
              fontWeight: 500,
              children: (0, _v1.jsx)(_v11.default, {
                href: _v3,
                children: _v0
              })
            }, _v1);
          }), (0, _v1.jsx)(_v13.TabIndicator, {})]
        }), (0, _v1.jsx)(_v16.TabPanels, {
          children: _v20.map((_v0, _v1) => (0, _v1.jsx)(_v15.TabPanel, {
            children: _v0
          }, _v1))
        })]
      });
    },
    _v22 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v8.ViewerContext),
        _v2 = (0, _v4.useTheme)(),
        _v3 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        {
          data: _v4
        } = (0, _v6.useGetUserTeam)(() => _v3 ? {
          where: {
            userId: _v3
          },
          select: ["accentColor", "logoUri", "pictures.sizes", "teamName"]
        } : null),
        _v5 = JSON.parse(JSON.stringify(_v2));
      _v4?.accentColor && (_v5.content.focus = _v4.accentColor, _v5.formats.primary = _v4.accentColor);
      let {
        member_id: _v6
      } = (0, _v2.useRouter)().query;
      return "string" == typeof _v6 && /^(\d)+$/gm.test(_v6) ? (0, _v1.jsxs)(_v4.ThemeProvider, {
        theme: _v5,
        children: [(0, _v1.jsx)(_v5.DefaultNavigation, {}), (0, _v1.jsx)(_v7.TeamUserInfoProvider, {
          children: (0, _v1.jsx)(_v9.PageContent, {
            teamOwnerId: _v3 || 0,
            memberId: parseInt(_v6),
            viewer: _v1,
            children: _v0
          })
        })]
      }) : null;
    },
    _v23 = ({
      children: _v0
    }) => (0, _v3.useContext)(_v8.ViewerContext) ? (0, _v1.jsx)(_v22, {
      children: _v0
    }) : (0, _v1.jsx)(_v10.Spinner, {});
  _v0.s(["getSharedContentLayout", 0, _v0 => (0, _v1.jsx)(_v23, {
    children: _v0
  }), "getSharedContentLayoutWithTabs", 0, _v0 => (0, _v1.jsx)(_v23, {
    children: (0, _v1.jsx)(_v21, {
      children: _v0
    })
  })], 0);
}