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
  let _v15 = (0, _v2.default)(async () => {
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
    let _v3 = (0, _v4.useContext)(_v14.ViewerContext),
      _v4 = (0, _v3.useRouter)(),
      {
        settings: _v5
      } = (0, _v11.useOrionSettings)(),
      {
        trackAgenticSearchEntryClicked: _v6
      } = (0, _v12.useSearchTracking)(),
      [, _v7] = (0, _v4.useState)(!1);
    if (!_v3 || _v3.isSimplifiedSite && !_v3.user) return (0, _v1.jsx)(_v1.Fragment, {});
    let _v8 = _v4.pathname.startsWith("/search"),
      _v9 = !!_v3.user && !!_v5.agentic_search_enabled && !_v8;
    return (0, _v1.jsxs)(_v5.Box, {
      display: "contents",
      "data-global-nav-search": !0,
      children: [(0, _v1.jsx)(_v15, {}), _v9 && (0, _v1.jsx)(_v6.Button, {
        size: "sm",
        variant: "secondary",
        flexShrink: 0,
        leftIcon: (0, _v1.jsx)(_v9.SearchMagnifier, {
          boxSize: "xs"
        }),
        rightIcon: (0, _v1.jsx)(_v8.AiSparkles, {
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
        sx: {
          "& svg": {
            color: "#8B5CF6"
          }
        },
        children: (0, _v10.translate)({
          singular: "Try the new Smart Search!",
          dictionary: {
            es: {
              singular: "¡Prueba la nueva Smart Search!"
            },
            "de-DE": {
              singular: "Probieren Sie die neue Smart Search aus!"
            },
            "fr-FR": {
              singular: "Essayez la nouvelle recherche intelligente !"
            },
            "ja-JP": {
              singular: "新しいSmart Searchをお試しください！"
            },
            "ko-KR": {
              singular: "새로운 Smart Search를 사용해 보세요!"
            },
            "pt-BR": {
              singular: "Experimente a nova Busca Inteligente!"
            },
            "zh-CN": {
              singular: "试用全新的智能搜索！"
            }
          }
        })
      }), (0, _v1.jsx)(_v13.SearchField, {
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
      })]
    });
  }]);
}