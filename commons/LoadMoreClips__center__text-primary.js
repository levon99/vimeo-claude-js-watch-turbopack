{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["LoadMoreClips", 0, ({
    loadMoreClips: _v0,
    isLoadingMoreClips: _v1
  }) => (0, _v1.jsx)(_v2.Flex, {
    justify: "center",
    mb: "md",
    children: _v1 ? (0, _v1.jsx)(_v3.Spinner, {
      h: (0, _v4.rem)(40),
      color: "text-primary"
    }) : (0, _v1.jsx)(_v5.Button, {
      onClick: _v0,
      variant: "secondary",
      children: (0, _v6.translate)({
        singular: "Load more",
        dictionary: {
          es: {
            singular: "Cargar más"
          },
          "de-DE": {
            singular: "Mehr laden"
          },
          "fr-FR": {
            singular: "Afficher plus"
          },
          "ja-JP": {
            singular: "もっとロードする"
          },
          "ko-KR": {
            singular: "동영상 더 보기"
          },
          "pt-BR": {
            singular: "Carregar mais"
          },
          "zh-CN": {
            singular: "加载更多"
          }
        }
      })
    })
  })]);
}