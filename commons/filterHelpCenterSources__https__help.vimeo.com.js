{
  "use strict";

  _v0.s(["filterHelpCenterSources", 0, _v0 => _v0.filter(_v0 => (_v0 => {
    try {
      let _v0 = new URL(_v0);
      return "https:" === _v0.protocol && "help.vimeo.com" === _v0.hostname;
    } catch {
      return !1;
    }
  })(_v0.url))], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["RelatedArticles", 0, ({
    sources: _v0,
    panelPage: _v1,
    gap: _v2 = 2,
    entrypoint: _v3,
    surface: _v4
  }) => {
    let {
      trackSupportPanelSourceClicked: _v5
    } = (0, _v8.useSupportPanelTracking)({
      entrypoint: _v3,
      surface: _v4
    });
    return (0, _v1.jsxs)(_v2.Box, {
      children: [(0, _v1.jsx)(_v4.Text, {
        variant: "heading-2xs",
        color: "text-secondary",
        marginBottom: (0, _v5.rem)(9),
        children: (0, _v7.translate)({
          singular: "Related articles",
          dictionary: {
            es: {
              singular: "Artículos relacionados"
            },
            "de-DE": {
              singular: "Verwandte Artikel"
            },
            "fr-FR": {
              singular: "Articles associés"
            },
            "ja-JP": {
              singular: "関連記事"
            },
            "ko-KR": {
              singular: "관련 문서"
            },
            "pt-BR": {
              singular: "Artigos relacionados"
            },
            "zh-CN": {
              singular: "相关文章"
            }
          }
        })
      }), (0, _v1.jsx)(_v3.Flex, {
        direction: "column",
        gap: (0, _v5.rem)(_v2),
        children: _v0.slice(0, 3).map(_v0 => (0, _v1.jsxs)(_v3.Flex, {
          as: "a",
          href: _v0.url,
          target: "_blank",
          rel: "noopener noreferrer",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "sm",
          minHeight: "48px",
          transitionProperty: "common",
          transitionDuration: "fast",
          transitionTimingFunction: "ease-out",
          _hover: {
            textDecoration: "underline"
          },
          _focusVisible: {
            boxShadow: "outline"
          },
          onClick: () => _v5({
            title: _v0.title,
            url: _v0.url,
            panel_page: _v1
          }),
          children: [(0, _v1.jsx)(_v4.Text, {
            variant: "body-md",
            children: _v0.title
          }), (0, _v1.jsx)(_v6.PopOut, {
            boxSize: 16
          })]
        }, _v0.url))
      })]
    });
  }], 0);
}