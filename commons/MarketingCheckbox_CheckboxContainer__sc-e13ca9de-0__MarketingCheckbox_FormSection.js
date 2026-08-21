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
  let _v10 = _v3.default.div.withConfig({
      displayName: "MarketingCheckbox__CheckboxContainer",
      componentId: "sc-e13ca9de-0"
    })`
  margin-top: ${(0, _v2.rem)(8)};
`,
    _v11 = _v3.default.section.withConfig({
      displayName: "MarketingCheckbox__FormSection",
      componentId: "sc-e13ca9de-1"
    })`
  margin-top: ${(0, _v2.rem)(10)};
  display: flex;
  flex-direction: column;
`;
  _v0.s(["default", 0, ({
    hideHorizontalRule: _v0,
    marketingOptIn: _v1,
    marketingOptInHandler: _v2,
    isSimplifiedSite: _v3,
    isFullScreen: _v4 = !1
  }) => (0, _v1.jsxs)(_v11, {
    children: [_v4 ? (0, _v1.jsx)(_v4.Checkbox, {
      size: "md",
      isChecked: _v1,
      onChange: _v2,
      id: "marketing_opt_in",
      children: (0, _v1.jsx)(_v5.Text, {
        variant: "body-sm",
        color: "text-secondary",
        children: _v3 ? (0, _v6.translate)({
          singular: "I agree to receive newsletters, product updates, and exclusive offers from VideoJi.",
          dictionary: {
            es: {
              singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de VideoJi"
            },
            "de-DE": {
              singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von VideoJi zu erhalten."
            },
            "fr-FR": {
              singular: "J'accepte de recevoir des newsletters, des mises à jour sur les produits et des offres exclusives de la part de VideoJi."
            },
            "ja-JP": {
              singular: "VideoJiからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
            },
            "ko-KR": {
              singular: "VideoJi의 뉴스레터, 제품 업데이트 및 특별 혜택 수신에 동의합니다."
            },
            "pt-BR": {
              singular: "Concordo em receber newsletters, atualizações de produtos e ofertas exclusivas do VideoJi."
            },
            "zh-CN": {
              singular: "我同意接收来自 VideoJi 的时事通讯、产品新资讯和独家优惠。"
            }
          }
        }) : (0, _v6.translate)({
          singular: "I agree to receive newsletters, updates, and offers",
          dictionary: {
            es: {
              singular: "Acepto recibir boletines, actualizaciones y ofertas"
            },
            "de-DE": {
              singular: "Ich bin damit einverstanden, Newsletter, Updates und Angebote zu erhalten"
            },
            "fr-FR": {
              singular: "J'accepte de recevoir des newsletters, des offres et des mises à jour."
            },
            "ja-JP": {
              singular: "ニュースレター、最新情報、オファーを受信することに同意します"
            },
            "ko-KR": {
              singular: "뉴스레터, 업데이트 및 제안을 수신하는 데 동의합니다."
            },
            "pt-BR": {
              singular: "Concordo em receber newsletters, atualizações e ofertas"
            },
            "zh-CN": {
              singular: "我同意接收时事通讯、更新和优惠信息"
            }
          }
        })
      })
    }) : (0, _v1.jsx)(_v10, {
      className: "marketing-opt-in-checkbox",
      children: (0, _v1.jsx)(_v7.Checkbox, {
        checked: _v1,
        onChange: _v2,
        id: "marketing_opt_in",
        label: (0, _v1.jsx)(_v8.Paragraph, {
          size: "3",
          children: _v3 ? (0, _v6.translate)({
            singular: "I agree to receive newsletters, product updates, and exclusive offers from VideoJi.",
            dictionary: {
              es: {
                singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de VideoJi"
              },
              "de-DE": {
                singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von VideoJi zu erhalten."
              },
              "fr-FR": {
                singular: "J'accepte de recevoir des newsletters, des mises à jour sur les produits et des offres exclusives de la part de VideoJi."
              },
              "ja-JP": {
                singular: "VideoJiからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
              },
              "ko-KR": {
                singular: "VideoJi의 뉴스레터, 제품 업데이트 및 특별 혜택 수신에 동의합니다."
              },
              "pt-BR": {
                singular: "Concordo em receber newsletters, atualizações de produtos e ofertas exclusivas do VideoJi."
              },
              "zh-CN": {
                singular: "我同意接收来自 VideoJi 的时事通讯、产品新资讯和独家优惠。"
              }
            }
          }) : (0, _v6.translate)({
            singular: "I agree to receive newsletters, product updates, and exclusive offers from Vimeo.",
            dictionary: {
              es: {
                singular: "Acepto recibir noticias, actualizaciones de productos y ofertas exclusivas de Vimeo."
              },
              "de-DE": {
                singular: "Ich bin damit einverstanden, Newsletter, Produkt-Updates und exklusive Angebote von Vimeo zu erhalten."
              },
              "fr-FR": {
                singular: "J'accepte de recevoir des newsletters, des nouveautés produit et des offres exclusives de Vimeo."
              },
              "ja-JP": {
                singular: "Vimeoからのニュースレター、製品アップデート、特別オファーを受信することに同意します。"
              },
              "ko-KR": {
                singular: "Vimeo로부터 뉴스레터, 제품 업데이트, 특별 제안을 받는 데 동의합니다."
              },
              "pt-BR": {
                singular: "Concordo em receber boletins informativos, atualizações de produto e ofertas exclusivas do Vimeo."
              },
              "zh-CN": {
                singular: "我同意接收来自 Vimeo 的时事通讯、产品新资讯和独家优惠。"
              }
            }
          })
        })
      })
    }), !_v0 && (0, _v1.jsx)(_v9.HR, {})]
  })]);
}