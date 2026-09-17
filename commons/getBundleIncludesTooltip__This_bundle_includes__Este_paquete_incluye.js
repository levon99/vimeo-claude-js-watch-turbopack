{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["getBundleIncludesTooltip", 0, _v0 => (0, _v1.jsxs)(_v2.Box, {
    children: [String((0, _v6.translate)({
      singular: "This bundle includes:",
      dictionary: {
        es: {
          singular: "Este paquete incluye:"
        },
        "de-DE": {
          singular: "Dieses Bundle enthält:"
        },
        "fr-FR": {
          singular: "Ce pack comprend\r:"
        },
        "ja-JP": {
          singular: "このバンドルには次のものが含まれます:"
        },
        "ko-KR": {
          singular: "이 번들에는 다음이 포함됩니다:"
        },
        "pt-BR": {
          singular: "Este pacote inclui:"
        },
        "zh-CN": {
          singular: "此捆绑包包含："
        }
      }
    })), (0, _v1.jsx)(_v4.SimpleGrid, {
      columns: 2,
      spacingX: (0, _v3.rem)(16),
      spacingY: (0, _v3.rem)(2),
      marginTop: (0, _v3.rem)(4),
      children: _v0.map(_v0 => (0, _v1.jsxs)(_v5.Text, {
        as: "span",
        display: "block",
        children: ["• ", _v7.PRODUCT_NAMES[_v0]]
      }, _v0))
    })]
  })]);
}