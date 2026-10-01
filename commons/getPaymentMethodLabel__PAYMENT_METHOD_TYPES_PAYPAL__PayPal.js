{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getPaymentMethodLabel", 0, (_v0, _v1 = !1) => {
    if ("PAYMENT_METHOD_TYPES_PAYPAL" === _v0.type) return (0, _v1.translate)("PayPal");
    let {
      brand: _v2,
      lastFourDigits: _v3,
      expirationMonth: _v4,
      expirationYear: _v5
    } = _v0.card ?? {};
    if (_v3) {
      let _v0 = (0, _v1.translate)({
        singular: "{BRAND} ••••{LAST_FOUR_DIGITS}",
        replacements: {
          BRAND: (_v0 => {
            switch (_v0) {
              case "CARD_BRAND_AMERICAN_EXPRESS":
                return "American Express";
              case "CARD_BRAND_DISCOVER":
                return "Discover";
              case "CARD_BRAND_JCB":
                return "JCB";
              case "CARD_BRAND_MASTER_CARD":
                return "MasterCard";
              case "CARD_BRAND_VISA":
                return "Visa";
              case "CARD_BRAND_UNION_PAY":
                return "UnionPay";
              default:
                return "Unknown";
            }
          })(_v2),
          LAST_FOUR_DIGITS: _v3
        }
      });
      return !_v1 && _v4 && _v5 ? (0, _v1.translate)({
        singular: "{CARD_LABEL} ({EXPIRATION_MONTH}/{EXPIRATION_YEAR})",
        replacements: {
          CARD_LABEL: _v0,
          EXPIRATION_MONTH: _v4,
          EXPIRATION_YEAR: _v5
        }
      }) : _v0;
    }
    if ("PAYMENT_METHOD_TYPES_CC_REF" === _v0.type) {
      let _v0 = new Date(_v0.createdAt).toISOString().split("T")[0];
      return (0, _v1.translate)({
        singular: "Bank card - Saved on {DATE}",
        replacements: {
          DATE: _v0
        },
        dictionary: {
          es: {
            singular: "Tarjeta bancaria - Guardada el {DATE}"
          },
          "de-DE": {
            singular: "Bankkarte - Gespeichert am {DATE}"
          },
          "fr-FR": {
            singular: "Carte bancaire - Enregistrée le {DATE}"
          },
          "ja-JP": {
            singular: "銀行カード - {DATE} に保存"
          },
          "ko-KR": {
            singular: "은행 카드 - {DATE}에 저장됨"
          },
          "pt-BR": {
            singular: "Cartão bancário - Salvo em {DATE}"
          },
          "zh-CN": {
            singular: "银行卡 - 保存于 {DATE}"
          }
        }
      });
    }
    return (0, _v1.translate)({
      singular: "Bank card",
      dictionary: {
        es: {
          singular: "Tarjeta bancaria"
        },
        "de-DE": {
          singular: "Bankkarte"
        },
        "fr-FR": {
          singular: "Carte bancaire"
        },
        "ja-JP": {
          singular: "銀行カード"
        },
        "ko-KR": {
          singular: "은행 카드"
        },
        "pt-BR": {
          singular: "Cartão bancário"
        },
        "zh-CN": {
          singular: "银行卡"
        }
      }
    });
  }], 0);
  var _v2 = _v0.i(0);
  _v0.s(["useHideCardExpiry", 0, () => {
    let {
      data: _v0,
      isLoading: _v1
    } = (0, _v2.useGetMeCapabilities)(() => ({
      select: ["useStripeCheckout"]
    }));
    return _v1 || _v0?.useStripeCheckout === !0;
  }], 0);
}