{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    categories: _v0
  }) => (0, _v1.jsxs)(_v5.Page, {
    children: [(0, _v1.jsx)("h1", {
      children: (0, _v4.translate)({
        singular: "All Categories",
        dictionary: {
          es: {
            singular: "Todas las categorías"
          },
          "de-DE": {
            singular: "Alle Kategorien"
          },
          "fr-FR": {
            singular: "Toutes les catégories"
          },
          "ja-JP": {
            singular: "全カテゴリー"
          },
          "ko-KR": {
            singular: "모든 카테고리"
          },
          "pt-BR": {
            singular: "Todas as Categorias"
          },
          "zh-CN": {
            singular: "所有类别"
          }
        }
      })
    }), (0, _v1.jsx)("ul", {
      children: _v0?.map(_v0 => (0, _v1.jsx)("li", {
        children: (0, _v1.jsx)(_v2.default, {
          href: `/demo/next/videos/categories/${_v0}`,
          children: _v0
        })
      }, `CAT_${_v0}`))
    })]
  });
  _v7.getLayout = _v6.getLayout, (0, _v3.withPageSetup)(async () => {
    let _v0 = await new Promise(_v0 => {
      setTimeout(() => {
        _v0(["food", "travel", "media", "photography", "video-games"]);
      }, Math.ceil(25 * Math.random()));
    });
    return _v0 ? {
      props: {
        categories: _v0
      }
    } : {
      notFound: !0
    };
  }, {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v7], 0);
}