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
      singular: "Unlock premium access to:",
      dictionary: {
        es: {
          singular: "Obtén acceso premium a:"
        },
        "de-DE": {
          singular: "Premiumzugang freischalten für:"
        },
        "fr-FR": {
          singular: "Débloquez l’accès premium à :"
        },
        "ja-JP": {
          singular: "プレミアムアクセスを有効にする:"
        },
        "ko-KR": {
          singular: "다음에 대한 프리미엄 액세스 잠금 해제:"
        },
        "pt-BR": {
          singular: "Desbloqueie o acesso premium a:"
        },
        "zh-CN": {
          singular: "解锁高级访问:"
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