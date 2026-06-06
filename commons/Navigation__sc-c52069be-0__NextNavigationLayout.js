{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v5.default.nav.withConfig({
    displayName: "Navigation",
    componentId: "sc-c52069be-0"
  })`
  padding: 1rem 1rem 0;
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 0.5rem;
`;
  _v0.s(["Navigation", 0, _v6], 0), _v0.s(["NextNavigationLayout", 0, function ({
    children: _v0
  }) {
    return (0, _v4.useMountTracking)("Next Navigation"), (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v6, {
        children: [(0, _v1.jsx)(_v2.default, {
          href: "/demo/next",
          children: (0, _v3.translate)({
            singular: "Home",
            dictionary: {
              es: {
                singular: "Inicio"
              },
              "de-DE": {
                singular: "Startseite"
              },
              "fr-FR": {
                singular: "Accueil"
              },
              "ja-JP": {
                singular: "ホーム"
              },
              "ko-KR": {
                singular: "홈"
              },
              "pt-BR": {
                singular: "Página Inicial"
              },
              "zh-CN": {
                singular: "主页"
              }
            }
          })
        }), (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/videos",
          children: (0, _v3.translate)({
            singular: "Videos",
            dictionary: {
              "fr-FR": {
                singular: "Vidéos"
              },
              "ja-JP": {
                singular: "動画"
              },
              "ko-KR": {
                singular: "동영상"
              },
              "pt-BR": {
                singular: "Vídeos"
              },
              "zh-CN": {
                singular: "视频"
              }
            }
          })
        }), (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/test",
          children: "Test"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/about",
          children: "About"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/demo-page",
          children: "Demo Page"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/activity",
          children: "Activity"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/next/react-router",
          children: "react-router test"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/demo/next/error",
          children: "Error test"
        }), (0, _v1.jsx)(_v2.default, {
          href: "/manage/showcases/6320639",
          children: "Showcase CMS"
        })]
      }), _v0]
    });
  }], 0);
}