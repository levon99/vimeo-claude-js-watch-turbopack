{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["numItemsText", 0, _v0 => (0, _v1.translate)({
    singular: "{NUM_ITEMS} item",
    plural: "{NUM_ITEMS} items",
    count: _v0,
    replacements: {
      NUM_ITEMS: _v0
    },
    dictionary: {
      es: {
        singular: "{NUM_ITEMS} elemento",
        plural: "{NUM_ITEMS} elementos"
      },
      "de-DE": {
        singular: "{NUM_ITEMS} Element",
        plural: "{NUM_ITEMS} Elemente"
      },
      "fr-FR": {
        singular: "{NUM_ITEMS} élément",
        plural: "{NUM_ITEMS} éléments"
      },
      "ja-JP": {
        singular: "{NUM_ITEMS} 件のアイテム",
        plural: "{NUM_ITEMS} 件のアイテム"
      },
      "ko-KR": {
        singular: "{NUM_ITEMS}개 항목",
        plural: "{NUM_ITEMS}개 항목"
      },
      "pt-BR": {
        singular: "{NUM_ITEMS} iten",
        plural: "{NUM_ITEMS} itens"
      },
      "zh-CN": {
        singular: "{NUM_ITEMS} 项",
        plural: "{NUM_ITEMS} 项"
      }
    }
  }), "numResultsText", 0, _v0 => (0, _v1.translate)({
    singular: "{NUM_ITEMS} result",
    plural: "{NUM_ITEMS} results",
    count: _v0,
    replacements: {
      NUM_ITEMS: _v0
    },
    dictionary: {
      es: {
        singular: "{NUM_ITEMS} resultado",
        plural: "{NUM_ITEMS} resultados"
      },
      "de-DE": {
        singular: "{NUM_ITEMS} Ergebnis",
        plural: "{NUM_ITEMS} Ergebnisse"
      },
      "fr-FR": {
        singular: "{NUM_ITEMS} résultat",
        plural: "{NUM_ITEMS} résultats"
      },
      "ja-JP": {
        singular: "{NUM_ITEMS}件の検索結果",
        plural: "{NUM_ITEMS} 件の結果"
      },
      "ko-KR": {
        singular: "검색 결과 {NUM_ITEMS}건",
        plural: "결과 {NUM_ITEMS}개"
      },
      "pt-BR": {
        singular: "{NUM_ITEMS} resultado",
        plural: "{NUM_ITEMS} resultados"
      },
      "zh-CN": {
        singular: "{NUM_ITEMS} 个结果",
        plural: "{NUM_ITEMS} 个结果"
      }
    }
  }), "sharedByFilterLabel", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = (0, _v1.translate)({
      singular: "Shared by",
      dictionary: {
        es: {
          singular: "Compartido por"
        },
        "de-DE": {
          singular: "Geteilt von"
        },
        "fr-FR": {
          singular: "Partagé par"
        },
        "ja-JP": {
          singular: "共有者"
        },
        "ko-KR": {
          singular: "공유한 사람"
        },
        "pt-BR": {
          singular: "Compartilhado por"
        },
        "zh-CN": {
          singular: "分享者"
        }
      }
    });
    return _v0 ? _v4 + " (" + _v2 + ")" : _v1 ? _v4 : _v3;
  }]);
}