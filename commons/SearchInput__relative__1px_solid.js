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
  _v0.s(["SearchInput", 0, ({
    value: _v0,
    onChange: _v1,
    onSubmit: _v2,
    height: _v3,
    isLoading: _v4 = !1,
    inputRef: _v5
  }) => {
    let [_v6, _v7] = (0, _v2.useState)(!1),
      _v8 = (0, _v2.useRef)(null),
      _v9 = _v5 ?? _v8;
    return (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      minWidth: 0,
      borderRadius: "md",
      border: "1px solid",
      borderColor: "stroke",
      bg: "surface",
      boxShadow: _v6 && !_v4 ? "0 0 0 3px rgba(110, 220, 245, 0.14)" : "0 2px 10px rgba(78, 205, 234, 0.13)",
      sx: _v4 ? {
        ..._v12.FLOW_GRADIENT_KEYFRAMES
      } : {
        ..._v12.FLOW_GRADIENT_KEYFRAMES,
        ..._v12.FLOW_GRADIENT_LAYERS_SX
      },
      children: [!_v4 && (0, _v1.jsx)(_v3.Box, {
        "aria-hidden": !0,
        position: "absolute",
        inset: 0,
        borderRadius: "inherit",
        pointerEvents: "none",
        zIndex: 0,
        sx: {
          ..._v12.FLOW_INNER_GLOW_SX
        }
      }), (0, _v1.jsxs)(_v6.InputGroup, {
        position: "relative",
        zIndex: 1,
        children: [(0, _v1.jsx)(_v5.Input, {
          placeholder: (0, _v11.translate)({
            singular: "Search for help or ask a question",
            dictionary: {
              es: {
                singular: "Buscar ayuda o hacer una pregunta"
              },
              "de-DE": {
                singular: "Nach Hilfe suchen oder eine Frage stellen"
              },
              "fr-FR": {
                singular: "Recherchez de l'aide ou posez une question"
              },
              "ja-JP": {
                singular: "ヘルプを検索するか、質問する"
              },
              "ko-KR": {
                singular: "도움말 검색 또는 질문하기"
              },
              "pt-BR": {
                singular: "Pesquisar ajuda ou fazer uma pergunta"
              },
              "zh-CN": {
                singular: "搜索帮助或提问"
              }
            }
          }),
          value: _v0,
          onChange: _v0 => _v1(_v0.target.value),
          onKeyDown: _v0 => {
            "Enter" === _v0.key && (_v2(), _v0.preventDefault());
          },
          isDisabled: _v4,
          onFocus: () => _v7(!0),
          onBlur: () => _v7(!1),
          maxLength: _v13.MAX_QUERY_LENGTH,
          height: (0, _v8.rem)(_v3),
          borderRadius: "sm",
          border: "none",
          bg: "surface",
          pr: "calc(var(--vimeo-sizes-sm) * 2 + var(--vimeo-space-md))",
          _focus: {
            boxShadow: "none"
          },
          ref: _v9
        }), (0, _v1.jsxs)(_v7.InputRightElement, {
          width: "auto",
          height: "calc(100% - 2 * var(--vimeo-space-xs))",
          margin: "xs",
          gap: "xs",
          children: ["" !== _v0 && (0, _v1.jsx)(_v4.IconButton, {
            icon: (0, _v1.jsx)(_v9.CloseXCircleFilled, {}),
            "aria-label": (0, _v11.translate)({
              singular: "Clear search",
              dictionary: {
                es: {
                  singular: "Borrar búsqueda"
                },
                "de-DE": {
                  singular: "Suche löschen"
                },
                "fr-FR": {
                  singular: "Effacer la recherche"
                },
                "ja-JP": {
                  singular: "検索をクリア"
                },
                "ko-KR": {
                  singular: "검색 지우기"
                },
                "pt-BR": {
                  singular: "Limpar pesquisa"
                },
                "zh-CN": {
                  singular: "清除搜索"
                }
              }
            }),
            variant: "tertiary",
            size: "sm",
            borderRadius: "md",
            isDisabled: _v4,
            onClick: () => {
              _v1(""), _v9.current?.focus();
            }
          }), (0, _v1.jsx)(_v4.IconButton, {
            icon: (0, _v1.jsx)(_v10.SearchMagnifierAi, {}),
            "aria-label": (0, _v11.translate)({
              singular: "Search",
              dictionary: {
                es: {
                  singular: "Buscar"
                },
                "de-DE": {
                  singular: "Suchen"
                },
                "fr-FR": {
                  singular: "Chercher"
                },
                "ja-JP": {
                  singular: "検索"
                },
                "ko-KR": {
                  singular: "검색"
                },
                "pt-BR": {
                  singular: "Pesquisar"
                },
                "zh-CN": {
                  singular: "搜索"
                }
              }
            }),
            variant: "tertiary",
            size: "sm",
            borderRadius: "md",
            isDisabled: _v4,
            onClick: _v2
          })]
        })]
      })]
    });
  }]);
}