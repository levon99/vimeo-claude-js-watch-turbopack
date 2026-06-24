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
    _v13 = _v0.i(0);
  let _v14 = (0, _v2.default)(async () => {
    let {
      Omnisearch: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  }, {
    loadableGenerated: {
      modules: [0]
    }
  });
  _v0.s(["Search", 0, ({
    updateGlobalNavSearchState: _v0,
    withToggle: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v4.useContext)(_v13.ViewerContext),
      _v4 = (0, _v3.useRouter)(),
      {
        settings: _v5
      } = (0, _v10.useOrionSettings)(),
      {
        trackAgenticSearchEntryClicked: _v6
      } = (0, _v11.useSearchTracking)(),
      [, _v7] = (0, _v4.useState)(!1);
    if (!_v3 || _v3.isSimplifiedSite && !_v3.user) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v8 = _v4.pathname.startsWith("/search"),
      _v9 = !!_v3.user && !!_v5.agentic_search_enabled && !_v8;
    return (0, _v1.jsxs)(_v5.Box, {
      display: "contents",
      "data-global-nav-search": !0,
      children: [(0, _v1.jsx)(_v14, {}), (0, _v1.jsx)(_v12.SearchField, {
        updateGlobalNavSearchState: _v0 || _v7,
        width: "100%",
        maxWidth: (0, _v7.rem)(480),
        withToggle: _v1,
        ...(_v1 && {
          inputStyle: {
            maxWidth: "90vw",
            backgroundColor: "background",
            borderRadius: "input-md"
          }
        }),
        ..._v2
      }), _v9 && (0, _v1.jsx)(_v6.Button, {
        size: "sm",
        flexShrink: 0,
        display: {
          base: "none",
          sm: "inline-flex"
        },
        leftIcon: (0, _v1.jsx)(_v8.SearchMagnifier, {
          boxSize: "xs"
        }),
        onClick: () => {
          _v6({
            location: "global_nav"
          });
          let _v0 = "string" == typeof _v4.query.q ? _v4.query.q : void 0,
            _v1 = _v0 ? `/search/library?ai=1&q=${encodeURIComponent(_v0)}` : "/search/library?ai=1";
          _v4.push(_v1);
        },
        color: "white",
        border: "none",
        sx: {
          background: "linear-gradient(90deg, #3B86FF 0%, #A77BFF 100%)",
          boxShadow: "0 0 0 2px var(--vimeo-colors-lightBlueAlpha-500), 0 2px 14px rgba(124, 92, 246, 0.45)",
          "& svg": {
            color: "white"
          },
          _hover: {
            background: "linear-gradient(90deg, #4E92FF 0%, #B488FF 100%)"
          }
        },
        children: (0, _v9.translate)({
          singular: "Try Smart Search",
          dictionary: {
            es: {
              singular: "Probar Smart Search"
            },
            "de-DE": {
              singular: "Smart Search testen"
            },
            "fr-FR": {
              singular: "Essayez Smart Search"
            },
            "ja-JP": {
              singular: "スマート検索を試す"
            },
            "ko-KR": {
              singular: "스마트 검색 사용해 보기"
            },
            "pt-BR": {
              singular: "Experimente o Smart Search"
            },
            "zh-CN": {
              singular: "试用智能搜索"
            }
          }
        })
      })]
    });
  }]);
}