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
    _v14 = _v0.i(0);
  let _v15 = (0, _v3.default)(_v11.Tip).withConfig({
      displayName: "TeamLogo__TeamNameTip",
      componentId: "sc-4675bc35-0"
    })`
  margin-left: ${_v0 => "bottomRight" == _v0.attach ? (0, _v5.rem)(-40) : 0};
  max-width: unset;
`,
    _v16 = ({
      teamName: _v0,
      teamLogoUrl: _v1,
      tooltipPosition: _v2
    }) => {
      let _v3 = (0, _v1.jsx)("img", {
        style: {
          height: 40,
          maxWidth: "none"
        },
        src: _v1,
        height: 40,
        alt: "team-logo"
      });
      return _v0 ? (0, _v1.jsx)(_v15, {
        content: _v0,
        attach: `${"center" === _v2 ? "bottom" : "bottomRight"}`,
        children: _v3
      }) : _v3;
    },
    _v17 = (0, _v3.default)(_v12.VimeoLogo).withConfig({
      displayName: "TeamLogo__Logo",
      componentId: "sc-4675bc35-1"
    })`
  width: ${(0, _v5.rem)(80)};
  path {
    fill: ${({
      theme: _v0
    }) => "light" === _v0.name ? _v8.bokehTheme.colors.gray["800"] : _v8.bokehTheme.colors.white};
  }
`,
    _v18 = _v3.default.a.withConfig({
      displayName: "TeamLogo__LinkDisabled",
      componentId: "sc-4675bc35-2"
    })`
  pointer-events: none;
`;
  _v0.s(["default", 0, _v0 => {
    let _v1 = (0, _v9.useIsBokeh)(),
      [_v2] = (0, _v6.useMediaQuery)("(max-width: 770px)"),
      {
        vimeoLogo: _v3 = (0, _v1.jsx)(_v17, {}),
        teamLogoUrl: _v4,
        teamName: _v5,
        onClickAnalytics: _v6 = () => void 0,
        tooltipPosition: _v7
      } = _v0,
      _v8 = (0, _v2.useContext)(_v13.ViewerContext),
      _v9 = _v8?.isSimplifiedSite,
      _v10 = _v9 ? (0, _v10.translate)({
        singular: "Go to Videoji home page",
        dictionary: {
          es: {
            singular: "Ir a la página de inicio de Videoji"
          },
          "de-DE": {
            singular: "Zur Videoji-Startseite"
          },
          "fr-FR": {
            singular: "Accéder à la page d'accueil de Videoji"
          },
          "ja-JP": {
            singular: "Videojiホームページに移動"
          },
          "ko-KR": {
            singular: "Videoji 홈페이지로 이동"
          },
          "pt-BR": {
            singular: "Ir para a página inicial do Videoji"
          },
          "zh-CN": {
            singular: "前往 Videoji 主页"
          }
        }
      }) : (0, _v10.translate)({
        singular: "Go to Vimeo home page",
        dictionary: {
          es: {
            singular: "Ir a la página de inicio de Vimeo"
          },
          "de-DE": {
            singular: "Zur Startseite von Vimeo"
          },
          "fr-FR": {
            singular: "Aller à la page d'accueil Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoホームページに移動"
          },
          "ko-KR": {
            singular: "Vimeo 홈페이지로 이동"
          },
          "pt-BR": {
            singular: "Ir para a página inicial do Vimeo"
          },
          "zh-CN": {
            singular: "前往 Vimeo 主页"
          }
        }
      });
    if (void 0 === _v9 || _v9 && !_v4 && !_v8.user) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v11 = !_v8?.user && _v9,
      _v12 = _v11 ? "javascript:void(0);" : "/";
    return !_v1 && _v4 ? (0, _v1.jsx)(_v4.Link, {
      href: _v12,
      children: (0, _v1.jsx)(_v11 ? _v18 : "a", {
        onClick: () => _v6({
          is_custom_logo: !0
        }),
        id: "header-team-logo",
        title: _v5 || _v10,
        children: (0, _v1.jsx)(_v16, {
          teamLogoUrl: _v4,
          teamName: _v5 || null,
          tooltipPosition: _v7
        })
      })
    }) : (0, _v1.jsx)(_v4.Link, {
      href: _v12,
      onClick: () => _v6({
        is_custom_logo: !1
      }),
      id: "header-vimeo-logo",
      title: _v10,
      maxWidth: "max-content",
      children: _v2 ? (0, _v1.jsx)(_v7.VimeoV, {
        marginTop: (0, _v5.rem)(-5),
        boxSize: "xs"
      }) : (0, _v1.jsx)(_v14.default, {
        href: "/home",
        width: (0, _v5.rem)(78),
        height: (0, _v5.rem)(27),
        title: _v10
      })
    });
  }]);
}