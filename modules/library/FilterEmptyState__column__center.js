{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["FilterEmptyState", 0, () => (0, _v1.jsx)(_v2.Flex, {
    flexDirection: "column",
    alignItems: "center",
    children: (0, _v1.jsxs)(_v2.Flex, {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      gap: "md",
      children: [(0, _v1.jsx)(_v5.SearchMagnifier, {
        width: "lg",
        height: "lg",
        color: "text-primary"
      }), (0, _v1.jsx)(_v3.Header, {
        size: "lg",
        children: (0, _v6.translate)({
          singular: "No matching results",
          dictionary: {
            es: {
              singular: "No hay resultados coincidentes"
            },
            "de-DE": {
              singular: "Keine übereinstimmenden Ergebnisse"
            },
            "fr-FR": {
              singular: "Aucun résultat correspondant"
            },
            "ja-JP": {
              singular: "一致する結果がありません"
            },
            "ko-KR": {
              singular: "일치하는 결과가 없습니다."
            },
            "pt-BR": {
              singular: "Nenhum resultado correspondente"
            },
            "zh-CN": {
              singular: "无匹配结果"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.Paragraph, {
        size: "lg",
        color: "text-secondary",
        marginBottom: "0",
        children: (0, _v6.translate)({
          singular: "Try different filters",
          dictionary: {
            es: {
              singular: "Prueba distintos filtros"
            },
            "de-DE": {
              singular: "Verschiedene Filter ausprobieren"
            },
            "fr-FR": {
              singular: "Essayez d'autres filtres"
            },
            "ja-JP": {
              singular: "別のフィルターをお試しください"
            },
            "ko-KR": {
              singular: "다른 필터를 시도해 보세요"
            },
            "pt-BR": {
              singular: "Experimente filtros diferentes"
            },
            "zh-CN": {
              singular: "尝试不同的筛选条件"
            }
          }
        })
      })]
    })
  })]);
}