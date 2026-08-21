{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    transform: _v0,
    label: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v4.Tooltip, {
    label: _v1,
    placement: "top",
    children: (0, _v1.jsx)(_v2.IconButton, {
      "aria-label": (0, _v7.translate)({
        singular: "Layout toggle",
        dictionary: {
          es: {
            singular: "Alternar diseño"
          },
          "de-DE": {
            singular: "Layout umschalten"
          },
          "fr-FR": {
            singular: "Bascule de mise en page"
          },
          "ja-JP": {
            singular: "レイアウト切り替え"
          },
          "ko-KR": {
            singular: "레이아웃 전환"
          },
          "pt-BR": {
            singular: "Alternar layout"
          },
          "zh-CN": {
            singular: "布局切换"
          }
        }
      }),
      icon: (0, _v1.jsx)(_v5._3GridTopLayout, {
        transform: _v0
      }),
      size: "sm",
      variant: "tertiary",
      onClick: _v2
    })
  });
  _v0.s(["LayoutToggle", 0, () => {
    let {
        isSideModuleOpen: _v0
      } = (0, _v6.useLayout)(),
      _v1 = (0, _v7.translate)({
        singular: "Side by side view",
        dictionary: {
          es: {
            singular: "Vista en paralelo"
          },
          "de-DE": {
            singular: "Nebeneinandergestellte Ansicht"
          },
          "fr-FR": {
            singular: "Vue côte à côte"
          },
          "ja-JP": {
            singular: "並べて表示"
          },
          "ko-KR": {
            singular: "사이드 바이 사이드 뷰"
          },
          "pt-BR": {
            singular: "Telas lado a lado"
          },
          "zh-CN": {
            singular: "并排视图"
          }
        }
      });
    return _v0 ? null : (0, _v1.jsx)(_v3.Show, {
      above: "xl",
      children: (0, _v1.jsx)(_v8, {
        label: _v1,
        transform: "rotate('90deg')"
      })
    });
  }, "LayoutToggleIcon", 0, _v8]);
}