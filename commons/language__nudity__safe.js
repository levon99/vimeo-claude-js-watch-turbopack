{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      Language: "language",
      Nudity: "nudity",
      Safe: "safe",
      Unrated: "unrated",
      Violence: "violence",
      Advertisement: "advertisement",
      Drugs: "drugs"
    },
    _v3 = {
      Safe: "safe",
      Mature: "mature",
      Unrated: "unrated"
    },
    _v4 = [{
      label: (0, _v1.translate)({
        singular: "Select rating",
        dictionary: {
          es: {
            singular: "Seleccionar clasificación"
          },
          "de-DE": {
            singular: "Bewertung auswählen"
          },
          "fr-FR": {
            singular: "Sélectionner la classification"
          },
          "ja-JP": {
            singular: "レーティングを選択"
          },
          "ko-KR": {
            singular: "등급 선택"
          },
          "pt-BR": {
            singular: "Selecionar classificação"
          },
          "zh-CN": {
            singular: "选择分级"
          }
        }
      }),
      value: _v3.Unrated,
      visible: !1
    }, {
      label: (0, _v1.translate)({
        singular: "All audiences",
        dictionary: {
          es: {
            singular: "Para todos los públicos"
          },
          "de-DE": {
            singular: "Alle Zuschauergruppen"
          },
          "fr-FR": {
            singular: "Tout public"
          },
          "ja-JP": {
            singular: "すべての視聴者"
          },
          "ko-KR": {
            singular: "모든 시청자"
          },
          "pt-BR": {
            singular: "Para todas as idades"
          },
          "zh-CN": {
            singular: "所有观众"
          }
        }
      }),
      value: _v3.Safe,
      visible: !0
    }, {
      label: (0, _v1.translate)({
        singular: "Mature",
        dictionary: {
          es: {
            singular: "Para adultos"
          },
          "de-DE": {
            singular: "Nicht jugendfrei"
          },
          "fr-FR": {
            singular: "Adulte"
          },
          "ja-JP": {
            singular: "成人向け"
          },
          "ko-KR": {
            singular: "성인"
          },
          "pt-BR": {
            singular: "Adulto"
          },
          "zh-CN": {
            singular: "成人"
          }
        }
      }),
      value: _v3.Mature,
      visible: !0
    }],
    _v5 = [{
      label: (0, _v1.translate)({
        singular: "Violence",
        dictionary: {
          es: {
            singular: "Violencia"
          },
          "de-DE": {
            singular: "Gewalt"
          },
          "ja-JP": {
            singular: "暴力"
          },
          "ko-KR": {
            singular: "폭력"
          },
          "pt-BR": {
            singular: "Violência"
          },
          "zh-CN": {
            singular: "暴力"
          }
        }
      }),
      value: "violence"
    }, {
      label: (0, _v1.translate)({
        singular: "Profanity",
        dictionary: {
          es: {
            singular: "Lenguaje vulgar"
          },
          "de-DE": {
            singular: "Vulgäre Ausdrucksweise"
          },
          "fr-FR": {
            singular: "Contenu à caractère injurieux"
          },
          "ja-JP": {
            singular: "冒涜"
          },
          "ko-KR": {
            singular: "욕설"
          },
          "pt-BR": {
            singular: "Linguagem imprópria"
          },
          "zh-CN": {
            singular: "粗言秽语"
          }
        }
      }),
      value: "language"
    }, {
      label: (0, _v1.translate)({
        singular: "Nudity",
        dictionary: {
          es: {
            singular: "Desnudez"
          },
          "de-DE": {
            singular: "Nacktheit"
          },
          "fr-FR": {
            singular: "Nudité"
          },
          "ja-JP": {
            singular: "ヌード"
          },
          "ko-KR": {
            singular: "나체"
          },
          "pt-BR": {
            singular: "Nudez"
          },
          "zh-CN": {
            singular: "裸露"
          }
        }
      }),
      value: "nudity"
    }, {
      label: (0, _v1.translate)({
        singular: "Drug / alcohol use",
        dictionary: {
          es: {
            singular: "Consumo de drogas/alcohol"
          },
          "de-DE": {
            singular: "Drogen‑/Alkoholkonsum"
          },
          "fr-FR": {
            singular: "Consommation de drogue / alcool"
          },
          "ja-JP": {
            singular: "薬物／アルコール使用"
          },
          "ko-KR": {
            singular: "약물/알코올 사용"
          },
          "pt-BR": {
            singular: "Uso de drogas/álcool"
          },
          "zh-CN": {
            singular: "药物/酒精使用"
          }
        }
      }),
      value: "drugs"
    }],
    _v6 = [_v2.Nudity, _v2.Drugs, _v2.Language, _v2.Violence];
  _v0.s(["ContentRatingOptions", 0, _v4, "EventContentRating", 0, _v2, "GeneralContentRatingVariants", 0, _v3, "MatureContentRatingArray", 0, _v6, "MatureContentRatingOptions", 0, _v5]);
}