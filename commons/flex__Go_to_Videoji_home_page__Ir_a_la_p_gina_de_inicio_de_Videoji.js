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
    _v12 = _v0.i(0);
  let _v13 = ({
    display: _v0 = "flex",
    marginLeft: _v1
  }) => {
    let _v2 = (0, _v5.useContext)(_v11.ViewerContext),
      _v3 = _v2?.isSimplifiedSite,
      _v4 = _v3 ? (0, _v4.translate)({
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
      }) : (0, _v4.translate)({
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
      }),
      _v5 = (0, _v7.useBreakpointValue)({
        base: (0, _v1.jsx)(_v8.VimeoV, {
          boxSize: "xs",
          color: "text-primary"
        }),
        md: (0, _v1.jsx)(_v9.default, {
          color: "text-primary",
          width: (0, _v3.rem)(78)
        })
      }),
      _v6 = !_v2?.user && _v3,
      _v7 = (0, _v12.useTrackNavigationEvent)();
    return void 0 === _v3 ? (0, _v1.jsx)(_v1.Fragment, {}) : (0, _v1.jsx)(_v6.Link, {
      href: _v6 ? "javascript:void(0);" : "/",
      onClick: () => _v7({
        feature: "general",
        copy: "vimeo_logo",
        element: "button"
      }),
      id: "header-vimeo-logo",
      title: _v4,
      maxWidth: "max-content",
      display: _v0,
      marginLeft: _v1,
      variant: "secondary",
      children: _v3 ? (0, _v1.jsx)(_v10.default, {
        "data-testid": "videoji-logo"
      }) : _v5
    });
  };
  _v0.s(["VimeoLogo", 0, _v13], 0), _v0.s(["NavbarLogo", 0, ({
    type: _v0,
    customLogoUrl: _v1,
    display: _v2
  }) => "none" === _v0 ? null : "custom" === _v0 ? _v1 ? (0, _v1.jsx)(_v2.Box, {
    alt: (0, _v4.translate)({
      singular: "Logo",
      dictionary: {
        "ja-JP": {
          singular: "ロゴ"
        },
        "ko-KR": {
          singular: "로고"
        },
        "zh-CN": {
          singular: "徽标"
        }
      }
    }),
    as: "img",
    display: _v2,
    maxH: (0, _v3.rem)(32),
    maxW: (0, _v3.rem)(120),
    objectFit: "contain",
    src: _v1
  }) : null : (0, _v1.jsx)(_v13, {
    display: _v2
  })], 0);
}