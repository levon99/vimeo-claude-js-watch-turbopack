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
    _v9 = _v0.i(0);
  let _v10 = _v6.keyframes`
    from {
        width: 10%;
    }
    to {
        width: 100%;
    }
`;
  _v0.s(["SearchComments", 0, ({
    updateCommentSearchQuery: _v0,
    onCloseSearch: _v1,
    searchInputRef: _v2
  }) => (0, _v1.jsx)(_v7.Box, {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "flex-end",
    children: (0, _v1.jsxs)(_v3.InputGroup, {
      display: "inline-block",
      size: "sm",
      ref: _v2,
      animation: `${_v10} 250ms ease forwards`,
      children: [(0, _v1.jsx)(_v2.Input, {
        placeholder: (0, _v9.translate)({
          singular: "Search comments",
          dictionary: {
            es: {
              singular: "Buscar comentarios"
            },
            "de-DE": {
              singular: "Kommentare durchsuchen"
            },
            "fr-FR": {
              singular: "Rechercher des commentaires"
            },
            "ja-JP": {
              singular: "コメントを検索"
            },
            "ko-KR": {
              singular: "댓글 검색"
            },
            "pt-BR": {
              singular: "Pesquisar comentários"
            },
            "zh-CN": {
              singular: "搜索评论"
            }
          }
        }),
        _placeholder: {
          opacity: 1,
          color: "gray.500"
        },
        onChange: _v0 => _v0?.(_v0),
        onKeyDown: _v0 => {
          _v0.stopPropagation(), "Escape" === _v0.key && _v1?.();
        },
        size: "sm",
        autoFocus: !0
      }), (0, _v1.jsx)(_v4.InputRightElement, {
        onClick: _v1,
        h: "100%",
        children: (0, _v1.jsx)(_v5.IconButton, {
          "aria-label": (0, _v9.translate)({
            singular: "Close Search",
            dictionary: {
              es: {
                singular: "Cerrar búsqueda"
              },
              "de-DE": {
                singular: "Suche schließen"
              },
              "fr-FR": {
                singular: "Fermer la recherche"
              },
              "ja-JP": {
                singular: "検索を閉じる"
              },
              "ko-KR": {
                singular: "검색 닫기"
              },
              "pt-BR": {
                singular: "Fechar busca"
              },
              "zh-CN": {
                singular: "关闭搜索"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v8.CloseXCircleFilled, {}),
          size: "xs",
          variant: "tertiary"
        })
      })]
    })
  })]);
}