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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  _v5.default.div.withConfig({
    displayName: "style__ModalContent",
    componentId: "sc-b143cfd9-0"
  })`
  ${({
    theme: _v0
  }) => _v0.shadows[200]}
  position: relative;
  border-radius: ${(0, _v4.rem)(8)};
  background: ${_v9.color.surface(500)};

  color: ${({
    theme: _v0
  }) => "dark" === _v0.name ? (0, _v7.grayscale)(240) : (0, _v7.slate)(540)};
  min-width: ${({
    stretch: _v0
  }) => _v0 ? (0, _v4.rem)(416) : (0, _v4.rem)(320)};
  ${({
    stretch: _v0
  }) => _v12.media.xmd`
  width: ${_v0 ? (0, _v4.rem)(536) : (0, _v4.rem)(440)}`};
`, _v5.default.div.withConfig({
    displayName: "style__ModalHeaderContent",
    componentId: "sc-b143cfd9-1"
  })`
  letter-spacing: ${(0, _v4.rem)(.2)};
  position: relative;
  padding: ${(0, _v4.rem)(22)} ${(0, _v4.rem)(24)} ${(0, _v4.rem)(0)} ${(0, _v4.rem)(24)};
  margin-bottom ${(0, _v4.rem)(20)}; 
`;
  let _v13 = _v5.default.div.withConfig({
      displayName: "style__Divider",
      componentId: "sc-b143cfd9-2"
    })`
  margin: 0;
  transform: translateY(-2px);
  background-color: ${_v9.color.stroke};
  height: ${(0, _v4.rem)(1)};
`,
    _v14 = (0, _v5.default)(_v13).withConfig({
      displayName: "style__DividerMargin",
      componentId: "sc-b143cfd9-3"
    })`
  transform: none;
  margin: ${(0, _v4.rem)(8)} 0;
`;
  _v5.default.div.withConfig({
    displayName: "style__ModalBodyContent",
    componentId: "sc-b143cfd9-4"
  })`
  padding: ${(0, _v4.rem)(12)} ${(0, _v4.rem)(24)};
`, _v5.default.div.withConfig({
    displayName: "style__PaymentInfoItem",
    componentId: "sc-b143cfd9-5"
  })`
  display: flex;
  justify-content: space-between;
  align-items: center;
`, _v5.default.div.withConfig({
    displayName: "style__InfoTextContainer",
    componentId: "sc-b143cfd9-6"
  })`
  display: flex;
`;
  let _v15 = _v5.default.div.withConfig({
      displayName: "style__InfoTextTypeA",
      componentId: "sc-b143cfd9-7"
    })`
  font-weight: 700;
  font-size: ${(0, _v4.rem)(14)};
  line-height: 1;
  display: flex;
  color: ${_v9.color.text.primary};
`,
    _v16 = _v5.default.div.withConfig({
      displayName: "style__InfoTextTypeB",
      componentId: "sc-b143cfd9-8"
    })`
  font-weight: 400;
  font-size: ${(0, _v4.rem)(14)};
  line-height: ${(0, _v4.rem)(40)};
  display: flex;
  color: ${_v9.color.text.primary};
`,
    _v17 = _v5.default.div.withConfig({
      displayName: "style__InfoTextTypeC",
      componentId: "sc-b143cfd9-9"
    })`
  font-weight: 400;
  font-size: ${(0, _v4.rem)(12)};
  line-height: ${(0, _v4.rem)(18)};
  color: ${_v9.color.text.primary};
`,
    _v18 = _v5.default.div.withConfig({
      displayName: "style__FlexGrouping",
      componentId: "sc-b143cfd9-10"
    })`
  display: flex;
  align-items: center;
  justify-items: left;
`;
  (0, _v5.default)(_v18).withConfig({
    displayName: "style__FlexColumnGrouping",
    componentId: "sc-b143cfd9-11"
  })`
  flex-direction: column;
`;
  let _v19 = (0, _v5.default)(_v17).withConfig({
    displayName: "style__InfoTextPrivacy",
    componentId: "sc-b143cfd9-12"
  })`
  color: ${(0, _v7.slate)(500)};
  margin-top: ${(0, _v4.rem)(16)};
  color: ${({
    theme: _v0
  }) => "dark" === _v0.name ? (0, _v7.grayscale)(240) : (0, _v7.slate)(540)};

  a,
  a:hover {
    color: ${({
    theme: _v0
  }) => "dark" === _v0.name ? (0, _v7.grayscale)(240) : (0, _v7.slate)(540)};
  }
`;
  (0, _v5.default)(_v19).withConfig({
    displayName: "style__InfoTextTermsConditions",
    componentId: "sc-b143cfd9-13"
  })`
  font-weight: bold;
`;
  let _v20 = (0, _v5.default)(_v15).withConfig({
      displayName: "style__InfoTextTypeASuccess",
      componentId: "sc-b143cfd9-14"
    })`
  color: ${_v9.color.status.positive};
`,
    _v21 = _v5.default.div.withConfig({
      displayName: "style__AdditionalInfoContainer",
      componentId: "sc-b143cfd9-15"
    })`
  margin: 0 0 ${(0, _v4.rem)(12)} 0;
`;
  (0, _v5.default)(_v8.Button).withConfig({
    displayName: "style__CloseIconStyle",
    componentId: "sc-b143cfd9-16"
  })`
  position: absolute;
  top: ${(0, _v4.rem)(16)};
  right: ${(0, _v4.rem)(24)};
`, _v5.default.div.withConfig({
    displayName: "style__Gap",
    componentId: "sc-b143cfd9-17"
  })`
  ${({
    top: _v0 = 0,
    right: _v1 = 0,
    bottom: _v2 = 0,
    left: _v3 = 0
  }) => _v5.css`
    margin: ${(0, _v4.rem)(_v0)} ${(0, _v4.rem)(_v1)} ${(0, _v4.rem)(_v2)} ${(0, _v4.rem)(_v3)};
  `}
`;
  let _v22 = (0, _v5.default)(_v8.Button).withConfig({
      displayName: "style__StyledInfoButton",
      componentId: "sc-b143cfd9-18"
    })`
  padding: 0;
  color: ${_v9.color.text.primary};
  align-items: center;
  display: inline-flex;
  justify-content: space-between;

  &:hover {
    cursor: initial;
    color: ${_v9.color.text.primary};
  }

  svg {
    margin-left: ${(0, _v4.rem)(5)};
  }
`,
    _v23 = _v5.default.span.withConfig({
      displayName: "style__ToSAutoRenewalSpan",
      componentId: "sc-b143cfd9-19"
    })`
  font-weight: 700;
`,
    _v24 = _v5.default.div.withConfig({
      displayName: "style__CardIconContainer",
      componentId: "sc-b143cfd9-20"
    })`
  display: flex;
  justify-content: center;
  align-itens: center;
  & svg {
    height: ${(0, _v4.rem)(32)};
    width: ${(0, _v4.rem)(32)};
  }
  margin-left: ${({
      marginNeeded: _v0
    }) => _v0 ? (0, _v4.rem)(28) : 0};
`,
    _v25 = (0, _v5.default)(_v11.Paragraph).withConfig({
      displayName: "style__CardLastFour",
      componentId: "sc-b143cfd9-21"
    })`
  margin: 0;
  ${({
      expired: _v0,
      disabled: _v1,
      theme: _v2
    }) => _v1 && `color: ${"dark" === _v2.name ? (0, _v7.grayscale)(240) : (0, _v7.slate)(540)}` || _v0 && `color: ${(0, _v7.red)(600)}`};
  ${({
      warning: _v0,
      disabled: _v1
    }) => _v0 && _v1 && `color: ${(0, _v7.red)(400)}`};
  ${({
      colorOverride: _v0
    }) => _v0 && `color: ${_v0}`};
`,
    _v26 = (0, _v5.default)(_v25).withConfig({
      displayName: "style__CardLastFourDots",
      componentId: "sc-b143cfd9-22"
    })`
  margin-bottom: ${(0, _v4.rem)(5)};
`,
    _v27 = (0, _v5.default)(_v11.Paragraph).withConfig({
      displayName: "style__CardExpired",
      componentId: "sc-b143cfd9-23"
    })`
  margin: 0;
  padding: 0;
  padding-right: ${({
      paddingNeeded: _v0
    }) => _v0 ? (0, _v4.rem)(8) : 0};
  color: ${(0, _v7.red)(600)};
`;
  (0, _v5.default)(_v11.Paragraph).withConfig({
    displayName: "style__NegativeParagraph",
    componentId: "sc-b143cfd9-24"
  })`
  margin-bottom: 0;
  padding-top: ${(0, _v4.rem)(7)};
  color: ${(0, _v7.red)(600)};
`, _v5.default.span.withConfig({
    displayName: "style__IconContainer",
    componentId: "sc-b143cfd9-25"
  })`
  color: ${(0, _v7.red)(600)};
  margin-right: ${(0, _v4.rem)(2)};
  & svg {
    width: ${(0, _v4.rem)(14)};
    height: ${(0, _v4.rem)(14)};
    vertical-align: middle;
  }
  & path {
    fill: ${(0, _v7.red)(600)};
  }
`, _v5.default.div.withConfig({
    displayName: "style__PaymentMethodContainer",
    componentId: "sc-b143cfd9-26"
  })`
  display: flex;
`;
  let _v28 = (0, _v5.default)(_v8.Button).withConfig({
    displayName: "style__StyledCancelButton",
    componentId: "sc-b143cfd9-27"
  })`
  margin-top: ${(0, _v4.rem)(12)};
  color: ${({
    theme: _v0
  }) => _v0.content.color};

  &:hover {
    color: ${({
    theme: _v0
  }) => _v0.content.color};
  }
`;
  (0, _v5.default)(_v10.Header).withConfig({
    displayName: "style__StrikeThroughHeader",
    componentId: "sc-b143cfd9-28"
  })`
  text-decoration: line-through;
  font-weight: 400;
  display: inline;
`, (0, _v5.default)(_v10.Header).withConfig({
    displayName: "style__TrialDueAmount",
    componentId: "sc-b143cfd9-29"
  })`
  margin-left: ${(0, _v4.rem)(8)};
  color: ${_v9.color.status.positive};
  display: inline;
`;
  let _v29 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__Loader",
      componentId: "sc-b143cfd9-30"
    })`
  display: flex;
  margin-bottom: ${(0, _v4.rem)(22)};
  height: ${(0, _v4.rem)(105)};
  height: ${({
      trial: _v0
    }) => _v0 ? (0, _v4.rem)(105) : (0, _v4.rem)(109)};
  width: 100%;
`,
    _v30 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__LeftColumnLoaderNoMargin",
      componentId: "sc-b143cfd9-31"
    })`
  display: flex;
  margin: 0;
  height: ${(0, _v4.rem)(30)};
  width: ${(0, _v4.rem)(150)};
`,
    _v31 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__RightColumnLoaderNoMargin",
      componentId: "sc-b143cfd9-32"
    })`
  display: flex;
  margin: 0;
  height: ${(0, _v4.rem)(30)};
  width: ${(0, _v4.rem)(150)};
`,
    _v32 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__LeftColumnLoader",
      componentId: "sc-b143cfd9-33"
    })`
  display: flex;
  margin-bottom: ${(0, _v4.rem)(22)};
  height: ${(0, _v4.rem)(30)};
  width: ${(0, _v4.rem)(150)};
`,
    _v33 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__RightColumnLoader",
      componentId: "sc-b143cfd9-34"
    })`
  display: flex;
  margin-bottom: ${(0, _v4.rem)(22)};
  height: ${(0, _v4.rem)(30)};
  width: ${(0, _v4.rem)(100)};
`,
    _v34 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__DueAtSubscriptionLeftColumnLoader",
      componentId: "sc-b143cfd9-35"
    })`
  display: flex;
  margin-bottom: ${(0, _v4.rem)(10)};
  height: ${(0, _v4.rem)(30)};
  width: ${(0, _v4.rem)(150)};
`,
    _v35 = (0, _v5.default)(_v6.LoadingBlock).withConfig({
      displayName: "style__DueAtSubscriptionRightColumnLoader",
      componentId: "sc-b143cfd9-36"
    })`
  display: flex;
  margin-bottom: ${(0, _v4.rem)(10)};
  height: ${(0, _v4.rem)(30)};
  width: ${(0, _v4.rem)(100)};
`;
  (0, _v5.default)(_v10.Header).withConfig({
    displayName: "style__StyledHeader",
    componentId: "sc-b143cfd9-37"
  })`
  margin: 0;
`;
  let _v36 = (0, _v5.default)(_v10.Header).withConfig({
    displayName: "style__HeaderNotBolded",
    componentId: "sc-b143cfd9-38"
  })`
  font-weight: normal;
  margin-bottom: ${(0, _v4.rem)(4)};
`;
  (0, _v5.default)(_v36).withConfig({
    displayName: "style__SubTextHeader",
    componentId: "sc-b143cfd9-39"
  })`
  width: 100%;
  margin-top: ${(0, _v4.rem)(4)};
  margin-bottom: 0;
`;
  let _v37 = _v5.default.div.withConfig({
    displayName: "style__TotalDueWrapper",
    componentId: "sc-b143cfd9-40"
  })`
  padding: ${(0, _v4.rem)(4)} 0;
`;
  _v0.s(["AdditionalInfoContainer", 0, _v21, "CardExpired", 0, _v27, "CardIconContainer", 0, _v24, "CardLastFour", 0, _v25, "CardLastFourDots", 0, _v26, "DividerMargin", 0, _v14, "DueAtSubscriptionLeftColumnLoader", 0, _v34, "DueAtSubscriptionRightColumnLoader", 0, _v35, "FlexGrouping", 0, _v18, "HeaderNotBolded", 0, _v36, "InfoTextPrivacy", 0, _v19, "InfoTextTypeASuccess", 0, _v20, "InfoTextTypeB", 0, _v16, "LeftColumnLoader", 0, _v32, "LeftColumnLoaderNoMargin", 0, _v30, "Loader", 0, _v29, "RightColumnLoader", 0, _v33, "RightColumnLoaderNoMargin", 0, _v31, "StyledCancelButton", 0, _v28, "StyledInfoButton", 0, _v22, "ToSAutoRenewalSpan", 0, _v23, "TotalDueWrapper", 0, _v37], 0);
  var _v38 = _v0.i(0);
  let _v39 = {
      BillingAdjustmentTip: (0, _v3.translate)({
        singular: "Your price is pro-rated based on the remaining time in your plan cycle.",
        dictionary: {
          es: {
            singular: "Tu precio se prorratea en función del tiempo restante en el ciclo de tu plan."
          },
          "de-DE": {
            singular: "Dein Preis berechnet sich anteilig nach der im Abrechnungszeitraum deines Tarifs verbleibenden Zeit."
          },
          "fr-FR": {
            singular: "Votre prix est calculé au prorata en fonction du temps restant dans votre abonnement."
          },
          "ja-JP": {
            singular: "価格は、プランサイクルの残りの期間に基づいて割り当てられています。"
          },
          "ko-KR": {
            singular: "가격은 요금제 주기의 미사용 시간을 기준으로 일할 계산됩니다."
          },
          "pt-BR": {
            singular: "O preço é calculado proporcionalmente com base no tempo restante no ciclo do seu plano."
          },
          "zh-CN": {
            singular: "价格根据套餐周期的剩余时间按比例计算。"
          }
        }
      }),
      SubtotalTip: (_v0, _v1) => (0, _v3.translate)({
        singular: "Each seat costs {PRICE}, billed {BILLING_CYCLE}.",
        replacements: {
          PRICE: _v0,
          BILLING_CYCLE: _v1
        },
        dictionary: {
          es: {
            singular: "Cada puesto cuesta {PRICE} y se factura {BILLING_CYCLE}."
          },
          "de-DE": {
            singular: "Jede Einzellizenz kostet {PRICE}, bei {BILLING_CYCLE} Abrechnung."
          },
          "fr-FR": {
            singular: "Chaque licence coûte {PRICE} par {BILLING_CYCLE}."
          },
          "ja-JP": {
            singular: "各シートライセンスの価格は{PRICE}で、{BILLING_CYCLE}払いです。"
          },
          "ko-KR": {
            singular: "각 사용자 라이선스의 비용은 {PRICE}이며 {BILLING_CYCLE} 청구됩니다."
          },
          "pt-BR": {
            singular: "Cada licença custa {PRICE}, cobrada {BILLING_CYCLE}."
          },
          "zh-CN": {
            singular: "每个席位的价格为 {PRICE}，按 {BILLING_CYCLE} 计费。"
          }
        }
      }),
      PaymentMethodTip: (0, _v3.translate)({
        singular: "The payment method can be changed in your Billing page.",
        dictionary: {
          es: {
            singular: "El método de pago se puede cambiar en tu página de facturación."
          },
          "de-DE": {
            singular: "Die Zahlungsmethode kann auf deiner Abrechnungsseite geändert werden."
          },
          "fr-FR": {
            singular: "Le mode de paiement peut être modifié sur votre page de facturation."
          },
          "ja-JP": {
            singular: "お支払い方法は、お支払いページで変更できます。"
          },
          "ko-KR": {
            singular: "결제 수단은 청구 페이지에서 변경할 수 있습니다."
          },
          "pt-BR": {
            singular: "O método de pagamento pode ser alterado na página Cobrança."
          },
          "zh-CN": {
            singular: "您可以在计费页面更改付款方式。"
          }
        }
      })
    },
    _v40 = {
      ReceiptInfo: (0, _v3.translate)({
        singular: "We’ll send a receipt via email and the card on file will be charged. This purchase is for an additional seat regardless of invitation acceptance and is non-refundable.",
        dictionary: {
          es: {
            singular: "Te enviaremos un recibo por correo electrónico y se cobrará de la tarjeta registrada. Esta compra incluye un puesto adicional independientemente de la aceptación de la invitación y no es reembolsable."
          },
          "de-DE": {
            singular: "Wir senden dir einen Beleg per E-Mail und belasten die hinterlegte Karte. Dieser Kauf bezieht sich auf eine weitere Einzellizenz, unabhängig von der Einladungsannahme, und ist nicht erstattungsfähig."
          },
          "fr-FR": {
            singular: "Nous vous enverrons un reçu par e-mail et facturerons votre carte enregistrée. Cet achat concerne une licence supplémentaire, ne dépend pas de l'acceptation de l'invitation et n'est pas remboursable."
          },
          "ja-JP": {
            singular: "登録されているカードに請求され、領収書をメールで送信します。この購入は、招待の受諾に関係なく追加のシートライセンス購入のためのものであり、払い戻しはできません。"
          },
          "ko-KR": {
            singular: "영수증은 이메일로 전송되며 등록된 카드로 요금이 청구됩니다. 이 구매는 초대 수락 여부와 관계없이 추가 사용자 라이선스를 위한 것이며 환불되지 않습니다."
          },
          "pt-BR": {
            singular: "Enviaremos um recibo por e-mail, e uma cobrança será feita no cartão registrado. Esta compra é de uma licença adicional, independentemente da aceitação de convite, e não é reembolsável."
          },
          "zh-CN": {
            singular: "我们将通过电子邮件发送收据，并从您登记的信用卡扣款。无论是否接受邀请，该购买均为额外席位，且不可退款。"
          }
        }
      }),
      TrialReceiptInfo: (0, _v3.translate)({
        singular: "At the start of your subscription, we’ll send a receipt via email and the card on file will be charged. This purchase is for an additional seat regardless of invitation acceptance and is non-refundable.",
        dictionary: {
          es: {
            singular: "Al comienzo de tu suscripción, te enviaremos un recibo por correo electrónico y se cobrará de la tarjeta registrada. Esta compra incluye un puesto adicional independientemente de la aceptación de la invitación y no es reembolsable."
          },
          "de-DE": {
            singular: "Zu Beginn deines Abonnements senden wir dir einen Beleg per E-Mail und belasten die hinterlegte Karte. Dieser Kauf bezieht sich auf eine weitere Einzellizenz, unabhängig von der Einladungsannahme, und ist nicht erstattungsfähig."
          },
          "fr-FR": {
            singular: "Lorsque votre abonnement débutera, nous facturerons votre carte enregistrée et vous enverrons une facture par e-mail. Cet achat concerne une licence supplémentaire, ne dépend pas de l'acceptation de l'invitation et n'est pas remboursable."
          },
          "ja-JP": {
            singular: "サブスクリプションの開始時に、登録されているカードに請求され、領収書をメールでお送りします。この購入は、招待の受諾に関係なく追加のシートライセンス購入のためのものであり、払い戻しはできません。"
          },
          "ko-KR": {
            singular: "구독 시작 시 영수증이 이메일로 전송되며 등록된 카드로 요금이 청구됩니다. 이 구매는 초대 수락 여부와 관계없이 추가 사용자 라이선스를 위한 것이며 환불되지 않습니다."
          },
          "pt-BR": {
            singular: "No início da sua assinatura, enviaremos um recibo por e-mail, e uma cobrança será feita no cartão registrado. Esta compra é de uma licença adicional, independentemente da aceitação de convite, e não é reembolsável."
          },
          "zh-CN": {
            singular: "订阅开始时，我们将通过电子邮件发送收据，并从您登记的信用卡扣款。无论是否接受邀请，该购买均为额外席位，且不可退款。"
          }
        }
      }),
      TermsConditionsTrial: (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => (0, _v3.translate)({
        singular: "By clicking below, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}, and {SPAN}automatic renewal{/SPAN}. After the free trial ends on {DATE}, your subscription begins and you authorize Vimeo to charge {PRICE} or the then-current rate (plus any tax) each {BILLING_PERIOD} until you cancel in your account settings.",
        replacements: {
          TERMS_LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
            variant: "inline-secondary",
            fontSize: "body-sm",
            href: _v0,
            onClick: _v5,
            target: "_blank",
            children: _v0
          }, "payments-tos"),
          PRIVACY_LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
            variant: "inline-secondary",
            fontSize: "body-sm",
            href: _v1,
            onClick: _v6,
            target: "_blank",
            children: _v0
          }, "payments-privacy"),
          SPAN: _v0 => (0, _v1.jsx)(_v23, {
            children: _v0
          }),
          PRICE: _v2,
          DATE: _v3,
          BILLING_PERIOD: _v4
        },
        dictionary: {
          es: {
            singular: "Al hacer clic a continuación, aceptas nuestros {TERMS_LINK}Términos de servicio{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y la {SPAN}renovación automática{/SPAN}. Cuando termine la prueba gratis, el {DATE}, tu suscripción comenzará y autorizas que Vimeo cobre {PRICE} o la tarifa vigente en ese momento, más cualquier impuesto, cada {BILLING_PERIOD} hasta que la canceles en la configuración de tu cuenta."
          },
          "de-DE": {
            singular: "Mit Klick auf den Button unten stimmst du unseren {TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, unserer {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} und der {SPAN}automatischen Verlängerung{/SPAN} zu. Nach Ablauf des kostenlosen Probeabos am {DATE} wird dein Abonnement gestartet und du autorisierst Vimeo dazu, in jedem {BILLING_PERIOD} einen Betrag über {PRICE} bzw. den jeweils aktuellen Preis (zuzüglich Steuern) einzuziehen, bis du diese Autorisierung in deinen Kontoeinstellungen widerrufst."
          },
          "fr-FR": {
            singular: "En cliquant ci-dessous, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} ainsi que le {SPAN}renouvellement automatique{/SPAN} de votre abonnement. Une fois la période d'essai gratuit terminée, le {DATE}, votre abonnement commencera. Vous autorisez Vimeo à vous facturer {PRICE}, ou le tarif alors en vigueur (plus taxes applicables), chaque {BILLING_PERIOD}, jusqu'à ce que vous résiliiez votre abonnement dans les paramètres de votre compte."
          },
          "ja-JP": {
            singular: "下記をクリックすることで、当社の{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、および{SPAN}自動更新{/SPAN}に同意したことになります。無料トライアルが {DATE} で終了すると、お客様のサブスクリプションが開始され、アカウント設定でキャンセルするまで {PRICE} またはその当時のレート（および税金）が {BILLING_PERIOD} 毎に請求されます。"
          },
          "ko-KR": {
            singular: "아래를 클릭하면 Vimeo의 {TERMS_LINK}서비스 약관{/TERMS_LINK}, {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK} 및 {SPAN}자동 갱신{/SPAN}에 동의하는 것입니다. 무료 체험이 {DATE}에 종료되면 구독이 시작되고, 귀하가 계정 설정에서 취소할 때까지 Vimeo가 귀하에게 {PRICE} 또는 당시 현행 요금(세금 포함)을 각 {BILLING_PERIOD}에 청구하도록 승인합니다."
          },
          "pt-BR": {
            singular: "Ao clicar abaixo, você aceita nossos {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, nossa {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e a {SPAN}renovação automática{/SPAN}. Sua assinatura entrará em vigor após o término do teste gratuito em {DATE}, e você autoriza o Vimeo a cobrar {PRICE} ou o valor vigente (mais todos os impostos) todo {BILLING_PERIOD} até você fazer o cancelamento nas configurações da sua conta."
          },
          "zh-CN": {
            singular: "点击下方，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}和{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}，并{SPAN}自动续订{/SPAN}。{DATE} 优惠月份结束之后，您的订阅开始生效，您授权 Vimeo 每 {BILLING_PERIOD} 收取 {PRICE} 或当时有效的费率（以及任何税费），直至您在账户设置中取消订阅为止。"
          }
        }
      }),
      TermsConditionsOptedIn: (_v0, _v1, _v2, _v3, _v4, _v5) => (0, _v3.translate)({
        singular: "By clicking below, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK}, {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}, and {SPAN}automatic renewal{/SPAN}. You authorize Vimeo to charge {PRICE} or the then-current rate (plus any tax) each {BILLING_PERIOD} until you cancel in your account settings.",
        replacements: {
          TERMS_LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
            variant: "inline-secondary",
            fontSize: "body-sm",
            href: _v0,
            onClick: _v4,
            target: "_blank",
            children: _v0
          }, "payments-tos"),
          PRIVACY_LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
            variant: "inline-secondary",
            fontSize: "body-sm",
            href: _v1,
            onClick: _v5,
            target: "_blank",
            children: _v0
          }, "payments-privacy"),
          SPAN: _v0 => (0, _v1.jsx)(_v23, {
            children: _v0
          }),
          PRICE: _v2,
          BILLING_PERIOD: _v3
        },
        dictionary: {
          es: {
            singular: "Al hacer clic a continuación, aceptas nuestros {TERMS_LINK}Términos de servicio{/TERMS_LINK}, nuestra {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK} y la {SPAN} renovación automática{/SPAN}. Autorizas que Vimeo cobre {PRICE} o la tarifa vigente en ese momento, más cualquier impuesto, cada {BILLING_PERIOD} hasta que la canceles en la configuración de tu cuenta."
          },
          "de-DE": {
            singular: "Mit Klick auf den Button unten stimmst du unseren {TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK}, unserer {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} und der {SPAN}automatischen Verlängerung{/SPAN} zu. Du autorisierst Vimeo dadurch außerdem dazu, in jedem {BILLING_PERIOD} einen Betrag über {PRICE} bzw. den jeweils aktuellen Preis (zuzüglich Steuern) einzuziehen, bis du diese Autorisierung in deinen Kontoeinstellungen widerrufst."
          },
          "fr-FR": {
            singular: "En cliquant ci-dessous, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK}, notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK} ainsi que le {SPAN}renouvellement automatique{/SPAN} de votre abonnement. Vous autorisez Vimeo à vous facturer {PRICE}, ou le tarif alors en vigueur (plus taxes applicables), chaque {BILLING_PERIOD}, jusqu'à ce que vous résiliiez votre abonnement dans les paramètres de votre compte."
          },
          "ja-JP": {
            singular: "下記をクリックすることで、当社の{TERMS_LINK}利用規約{/TERMS_LINK}、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}、および{SPAN}自動更新{/SPAN}に同意したことになります。お客様は、アカウント設定でキャンセルするまで {PRICE} またはその当時のレート（および税金）が {BILLING_PERIOD} 毎にVimeoから請求されることに承認したことになります。"
          },
          "ko-KR": {
            singular: "아래를 클릭하면 Vimeo의 {TERMS_LINK}서비스 약관{/TERMS_LINK}, {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK} 및 {SPAN}자동 갱신{/SPAN}에 동의하는 것입니다. 귀하가 계정 설정에서 취소할 때까지 Vimeo가 귀하에게 {PRICE} 또는 당시 현행 요금(세금 포함)을 각 {BILLING_PERIOD}에 청구하도록 승인합니다."
          },
          "pt-BR": {
            singular: "Ao clicar abaixo, você aceita nossos {TERMS_LINK}Termos de Serviço{/TERMS_LINK}, nossa {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e a {SPAN}renovação automática{/SPAN}. Você autoriza o Vimeo a cobrar {PRICE} ou o valor vigente (mais todos os impostos) todos os anos {BILLING_PERIOD} até você fazer o cancelamento nas configurações da sua conta."
          },
          "zh-CN": {
            singular: "点击下方，即表示您同意我们的{TERMS_LINK}服务条款{/TERMS_LINK}、{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}和{SPAN}自动续订{/SPAN}。您授权 Vimeo 每 {BILLING_PERIOD} 收取 {PRICE} 或当时的费率（加上任何税费），直至您在帐户设置中取消。"
          }
        }
      }),
      TermsConditionsOptedOut: (_v0, _v1, _v2, _v3, _v4) => (0, _v3.translate)({
        singular: "By clicking below, you agree to our {TERMS_LINK}Terms of Service{/TERMS_LINK} and {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}, and authorize Vimeo to charge {PRICE} to your card on file. This purchase will not automatically renew unless you change your account settings.",
        replacements: {
          TERMS_LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
            variant: "inline-secondary",
            fontSize: "body-sm",
            href: _v0,
            onClick: _v3,
            target: "_blank",
            children: _v0
          }, "payments-tos"),
          PRIVACY_LINK: _v0 => (0, _v1.jsx)(_v2.Link, {
            variant: "inline-secondary",
            fontSize: "body-sm",
            href: _v1,
            onClick: _v4,
            target: "_blank",
            children: _v0
          }, "payments-privacy"),
          PRICE: _v2
        },
        dictionary: {
          es: {
            singular: "Al hacer clic abajo, aceptas nuestros {TERMS_LINK}Términos de servicio{/TERMS_LINK} y la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}, y autorizas a Vimeo a cobrar {PRICE} de tu tarjeta registrada. Esta compra no se renovará automáticamente, a menos que cambies la configuración de tu cuenta."
          },
          "de-DE": {
            singular: "Wenn du unten klickst, akzeptierst du unsere {TERMS_LINK}Nutzungsbedingungen{/TERMS_LINK} und unsere {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} und erteilst Vimeo die Befugnis, deine bei uns hinterlegte Karte mit {PRICE} zu belasten. Dieser Kauf verlängert sich nicht automatisch. Du kannst dies in deinen Kontoeinstellungen ändern."
          },
          "fr-FR": {
            singular: "En cliquant ci-dessous, vous acceptez nos {TERMS_LINK}conditions d'utilisation{/TERMS_LINK} et notre {PRIVACY_LINK}politique de confidentialité{/PRIVACY_LINK}, et autorisez Vimeo à débiter {PRICE} de la carte enregistrée. Cet achat ne se renouvellera pas automatiquement, sauf si vous modifiez les paramètres de votre compte."
          },
          "ja-JP": {
            singular: "以下をクリックすることで、Vimeoの{TERMS_LINK}サービス利用規約{/TERMS_LINK}と{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}に同意し、登録されているカードに {PRICE}が請求されることを承認したことになります。アカウント設定を変更しない限り、この購入は自動的に更新されません。"
          },
          "ko-KR": {
            singular: "아래를 클릭하면 Vimeo의 {TERMS_LINK}서비스 약관{/TERMS_LINK}, {PRIVACY_LINK}개인정보보호 정책{/PRIVACY_LINK}에 동의하고 Vimeo가 귀하의 등록된 카드에 {PRICE}을(를) 청구하도록 승인하는 것입니다. 계정 설정을 변경하지 않는 한 이 구매는 자동 갱신되지 않습니다."
          },
          "pt-BR": {
            singular: "Ao clicar abaixo, você concorda com os {TERMS_LINK}Termos de Serviço{/TERMS_LINK} e com a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK} e autoriza o Vimeo a cobrar {PRICE} no seu cartão registrado. Esta compra não será renovada automaticamente a menos que você altere as configurações da sua conta."
          },
          "zh-CN": {
            singular: "点击下方，即表示您同意我们的 {TERMS_LINK}服务条款{/TERMS_LINK}和{PRIVACY_LINK}隐私政策{/PRIVACY_LINK}，并授权 Vimeo 从您登记的卡中收取 {PRICE}。此购买活动不会自动续订，除非您更改账户设置。"
          }
        }
      }),
      PayPayRedirctInfo: (0, _v3.translate)({
        singular: "You’ll be redirected to PayPal, where you can review your order before you purchase.",
        dictionary: {
          es: {
            singular: "Irás a la página de PayPal. Allí podrás revisar la compra antes de completarla."
          },
          "de-DE": {
            singular: "Du wirst zu PayPal weitergeleitet, wo du deine Bestellung vor dem Einkauf überprüfen kannst."
          },
          "fr-FR": {
            singular: "Vous serez redirigé sur PayPal, d'où vous pourrez passer en revue votre commande avant de compléter votre achat."
          },
          "ja-JP": {
            singular: "PayPalに切り替わりご購入詳細をご確認いただけます。"
          },
          "ko-KR": {
            singular: "구매 전 주문 내역을 검토할 수 있도록 PayPal로 이동됩니다."
          },
          "pt-BR": {
            singular: "Você será redirecionado para o PayPal, onde você pode rever seu pedido antes de comprar."
          },
          "zh-CN": {
            singular: "您将被重定向到 PayPal，在购买之前，您可以在那里查看您的订单。"
          }
        }
      }),
      PayPayTrialInfo: (0, _v3.translate)({
        singular: "You'll be redirected to PayPal, where we'll verify your payment method by placing a temporary authorization of $0.01 (or the lowest amount in your local currency). This amount will appear as \"pending\" until verified and then it will be released.",
        dictionary: {
          es: {
            singular: 'Se te redireccionará a PayPal, donde verificaremos tu método de pago mediante la retención de una autorización temporal de $0.01 (o el monto más bajo posible en tu moneda local). Este monto aparecerá como "pendiente" hasta que se verifique y luego se liberará.'
          },
          "de-DE": {
            singular: "Du wirst zu PayPal weitergeleitet, wo wir deine Zahlungsmethode verifizieren, indem wir eine temporäre Autorisierung von 0,01 USD (oder dem niedrigsten Betrag in deiner Landeswährung) vornehmen. Dieser Betrag wird als „ausstehend“ angezeigt, bis er verifiziert und dann freigegeben wird."
          },
          "fr-FR": {
            singular: "Vous serez redirigé(e) vers PayPal, où nous pourrons vérifier votre mode de paiement en appliquant une autorisation temporaire de 0,01 $ (ou le montant le plus bas possible dans votre devise locale). Ce montant apparaîtra comme « en attente de » jusqu'à vérification, puis sera débloqué."
          },
          "ja-JP": {
            singular: "このあとお客様はPayPalにリダイレクトされます。当社は0.01ドル（またはお客様の国の通貨の最低額）の一時的承認を実施し、お客様のお支払い方法を確認します。この確認が完了するまでこの金額は「保留」として表示され、確認後に解除されます。"
          },
          "ko-KR": {
            singular: 'PayPal로 리디렉션되며 결제 수단 확인을 위해 계정에 $0.01(또는 현지 통화로 가장 낮은 금액)를 임시 승인합니다. 이 금액은 확인될 때까지 "보류 중"으로 표시된 후 취소됩니다.'
          },
          "pt-BR": {
            singular: 'Você será redirecionado para o PayPal, onde verificaremos sua forma de pagamento e enviaremos uma autorização temporária de cobrança de US$ 0,01 (ou o menor valor na sua moeda local). Esse valor será exibido como "pendente" até ser verificado e, em seguida, será liberado.'
          },
          "zh-CN": {
            singular: "您将被重定向到 PayPal，我们将通过临时授权 0.01 美元（或您当地货币的最低金额）来验证您的付款方式。在验证之前，此金额将显示为“待处理”，然后将被发出。"
          }
        }
      })
    },
    _v41 = {
      [_v38.NOTICE_TYPES.PAYMENT_FAILED]: (0, _v3.translate)({
        singular: "Payment failed, please try again.",
        dictionary: {
          es: {
            singular: "Hubo un error en el pago, vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Zahlung fehlgeschlagen, bitte versuche es erneut."
          },
          "fr-FR": {
            singular: "Échec du paiement. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "決済ができませんでした。再度お試しください。"
          },
          "ko-KR": {
            singular: "결제에 실패했습니다. 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Falha no pagamento. Tente novamente."
          },
          "zh-CN": {
            singular: "付款失败，请重试。"
          }
        }
      }),
      [_v38.NOTICE_TYPES.SOMETHING_WRONG]: (0, _v3.translate)({
        singular: "Oops! Something went wrong. Please try again.",
        dictionary: {
          es: {
            singular: "¡Ups, algo salió mal! Vuelve a intentarlo."
          },
          "de-DE": {
            singular: "Hoppla! Etwas ist schief gelaufen. Bitte versuche es nochmal."
          },
          "fr-FR": {
            singular: "Oups ! Une erreur s'est produite. Veuillez essayer à nouveau."
          },
          "ja-JP": {
            singular: "エラーが発生しました。再度お試しください。"
          },
          "ko-KR": {
            singular: "죄송합니다. 문제가 발생했습니다. 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Oh! Alguma coisa deu errado. Por favor, tente novamente."
          },
          "zh-CN": {
            singular: "哎呀，出错了。请重试。"
          }
        }
      }),
      [_v38.NOTICE_TYPES.PURCHASE_SUCCESSFULL]: (0, _v3.translate)({
        singular: "Your purchase was successfull!",
        dictionary: {
          es: {
            singular: "¡Tu compra se realizó con éxito!"
          },
          "de-DE": {
            singular: "Dein Kauf war erfolgreich!"
          },
          "fr-FR": {
            singular: "Votre achat a bien été pris en compte !"
          },
          "ja-JP": {
            singular: "購入が完了しました！"
          },
          "ko-KR": {
            singular: "구매가 성공적으로 이루어졌습니다!"
          },
          "pt-BR": {
            singular: "Sua compra foi realizada com sucesso!"
          },
          "zh-CN": {
            singular: "购买成功！"
          }
        }
      }),
      [_v38.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS]: _v0 => (0, _v3.translate)({
        singular: "You've successfully purchased {SEAT_COUNT} seat!",
        plural: "You've successfully purchased {SEAT_COUNT} seats!",
        count: _v0,
        replacements: {
          SEAT_COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "¡Has comprado con éxito {SEAT_COUNT} puesto!",
            plural: "¡Has comprado con éxito {SEAT_COUNT} puestos!"
          },
          "de-DE": {
            singular: "Du hast erfolgreich {SEAT_COUNT} Einzellizenz erworben!",
            plural: "Du hast erfolgreich {SEAT_COUNT} Einzellizenzen erworben!"
          },
          "fr-FR": {
            singular: "Vous avez acheté {SEAT_COUNT} licence !",
            plural: "Vous avez acheté {SEAT_COUNT} licences !"
          },
          "ja-JP": {
            singular: "{SEAT_COUNT}個のシートライセンスが正常に削除されました。",
            plural: "{SEAT_COUNT}個のシートライセンスが正常に削除されました。"
          },
          "ko-KR": {
            singular: "사용자 라이선스 {SEAT_COUNT}개를 구매했습니다!",
            plural: "사용자 라이선스 {SEAT_COUNT}개를 구매했습니다!"
          },
          "pt-BR": {
            singular: "Você comprou com sucesso {SEAT_COUNT} licença!",
            plural: "Você comprou com sucesso {SEAT_COUNT} licenças!"
          },
          "zh-CN": {
            singular: "您已成功购买 {SEAT_COUNT} 个席位！",
            plural: "您已成功购买 {SEAT_COUNT} 个席位！"
          }
        }
      }),
      [_v38.NOTICE_TYPES.ADDED_SEATS_SUCCESSFULLY]: (0, _v3.translate)({
        singular: "You've successfully added seats.",
        dictionary: {
          es: {
            singular: "Agregaste puestos con éxito."
          },
          "de-DE": {
            singular: "Du hast erfolgreich Lizenzen hinzugefügt."
          },
          "fr-FR": {
            singular: "Vous avez ajouté des licences."
          },
          "ja-JP": {
            singular: "シートライセンスが正常に追加されました。"
          },
          "ko-KR": {
            singular: "사용자를 성공적으로 추가했습니다."
          },
          "pt-BR": {
            singular: "Você adicionou licenças com sucesso."
          },
          "zh-CN": {
            singular: "您已成功添加席位。"
          }
        }
      }),
      [_v38.NOTICE_TYPES.INVITATION_FAILED]: (0, _v3.translate)({
        singular: "The invitation failed to send. Please try inviting again.",
        dictionary: {
          es: {
            singular: "No se pudo enviar la invitación. Intenta enviar la invitación de nuevo."
          },
          "de-DE": {
            singular: "Die Einladung konnte nicht gesendet werden. Bitte versuche, die Einladung erneut zu senden."
          },
          "fr-FR": {
            singular: "L'invitation n'a pas pu être envoyée. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "招待を送信できませんでした。再度招待してください。"
          },
          "ko-KR": {
            singular: "초대장 전송에 실패했습니다. 다시 초대해보세요."
          },
          "pt-BR": {
            singular: "Falha no envio do convite. Tente novamente."
          },
          "zh-CN": {
            singular: "邀请发送失败。请再次尝试邀请。"
          }
        }
      }),
      [_v38.NOTICE_TYPES.PURCHASE_INVITATION_SUCCESSFULL]: (0, _v3.translate)({
        singular: "Your purchase was successful and your invites have been sent!",
        dictionary: {
          es: {
            singular: "¡Tu compra se realizó con éxito y se enviaron tus invitaciones!"
          },
          "de-DE": {
            singular: "Dein Kauf war erfolgreich und deine Einladungen wurden versendet!"
          },
          "fr-FR": {
            singular: "Votre achat a bien été pris en compte et vos invitations ont été envoyées !"
          },
          "ja-JP": {
            singular: "購入が完了し、招待が送信されました。"
          },
          "ko-KR": {
            singular: "구매가 성공적으로 완료되었으며 초대장이 전송되었습니다!"
          },
          "pt-BR": {
            singular: "Sua compra foi realizada com sucesso, e seus convites foram enviados!"
          },
          "zh-CN": {
            singular: "您的购买已成功，您的邀请已发送！"
          }
        }
      }),
      [_v38.NOTICE_TYPES.BILLING_FETCH_FAILED]: (0, _v3.translate)({
        singular: "Unable to retrieve billing data. Please try again later.",
        dictionary: {
          es: {
            singular: "No se pudieron recuperar los datos de facturación. Vuelve a intentarlo más tarde."
          },
          "de-DE": {
            singular: "Die Rechnungsdaten konnten nicht abgerufen werden. Bitte versuche es später erneut."
          },
          "fr-FR": {
            singular: "Impossible de récupérer les données de facturation. Veuillez réessayer plus tard."
          },
          "ja-JP": {
            singular: "請求データを取得できません。しばらくしてからもう一度お試しください。"
          },
          "ko-KR": {
            singular: "결제 데이터를 가져올 수 없습니다. 나중에 다시 시도하세요."
          },
          "pt-BR": {
            singular: "Não foi possível recuperar os dados de faturamento. Tente novamente mais tarde."
          },
          "zh-CN": {
            singular: "无法检索账单数据。请稍后再试。"
          }
        }
      })
    },
    _v42 = {
      AdditionalSeats: _v0 => (0, _v3.translate)({
        singular: "Additional seat ({SEAT_COUNT})",
        plural: "Additional seats ({SEAT_COUNT})",
        count: _v0,
        replacements: {
          SEAT_COUNT: _v0
        },
        dictionary: {
          es: {
            singular: "Puesto adicional ({SEAT_COUNT})",
            plural: "Puestos adicionales ({SEAT_COUNT})"
          },
          "de-DE": {
            singular: "Zusätzliche Lizenz({SEAT_COUNT})",
            plural: "Zusätzliche Lizenzen ({SEAT_COUNT})"
          },
          "fr-FR": {
            singular: "Licence supplémentaire ({SEAT_COUNT})",
            plural: "Licences supplémentaires ({SEAT_COUNT})"
          },
          "ja-JP": {
            singular: "追加のシート（{SEAT_COUNT}）",
            plural: "追加のシート（{SEAT_COUNT}）"
          },
          "ko-KR": {
            singular: "추가 사용자 라이선스({SEAT_COUNT}개)",
            plural: "추가 사용자 라이선스({SEAT_COUNT}개)"
          },
          "pt-BR": {
            singular: "Licença adicional ({SEAT_COUNT})",
            plural: "Licenças adicionais ({SEAT_COUNT})"
          },
          "zh-CN": {
            singular: "额外席位 ({SEAT_COUNT})",
            plural: "额外席位 ({SEAT_COUNT})"
          }
        }
      }),
      BasePlanPlusSeats: (_v0, _v1) => (0, _v3.translate)({
        singular: "{PLAN_NAME} plan (includes {SEAT_COUNT} seat)",
        plural: "{PLAN_NAME} plan (includes {SEAT_COUNT} seats)",
        count: _v1,
        replacements: {
          SEAT_COUNT: _v1,
          PLAN_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "{PLAN_NAME} plan (incluye {SEAT_COUNT} puesto)",
            plural: "Plan {PLAN_NAME} (incluye {SEAT_COUNT} plazas)"
          },
          "de-DE": {
            singular: "{PLAN_NAME}-Plan (enthält {SEAT_COUNT} Lizenz)",
            plural: "{PLAN_NAME}-Plan (enthält {SEAT_COUNT} Lizenzen)"
          },
          "fr-FR": {
            singular: "Abonnement {PLAN_NAME} (comprend {SEAT_COUNT} licence)",
            plural: "Abonnement {PLAN_NAME} (comprend {SEAT_COUNT} licences)"
          },
          "ja-JP": {
            singular: "{PLAN_NAME}プラン（{SEAT_COUNT}個のシートを含む）",
            plural: "{PLAN_NAME}プラン（{SEAT_COUNT}個のシートを含む）"
          },
          "ko-KR": {
            singular: "{PLAN_NAME} 요금제(사용자 라이선스 {SEAT_COUNT}개 포함)",
            plural: "{PLAN_NAME} 요금제(사용자 라이선스 {SEAT_COUNT}개 포함)"
          },
          "pt-BR": {
            singular: "Plano {PLAN_NAME} (inclui {SEAT_COUNT} licença)",
            plural: "Plano {PLAN_NAME} (inclui {SEAT_COUNT} licenças)"
          },
          "zh-CN": {
            singular: "{PLAN_NAME} 套餐（包括 {SEAT_COUNT} 个席位）",
            plural: "{PLAN_NAME} 套餐（包括 {SEAT_COUNT} 个席位）"
          }
        }
      }),
      Cancel: (0, _v3.translate)({
        singular: "Cancel",
        dictionary: {
          es: {
            singular: "Cancelar"
          },
          "de-DE": {
            singular: "Abbrechen"
          },
          "fr-FR": {
            singular: "Annuler"
          },
          "ja-JP": {
            singular: "キャンセル"
          },
          "ko-KR": {
            singular: "취소"
          },
          "pt-BR": {
            singular: "Cancelar"
          },
          "zh-CN": {
            singular: "取消"
          }
        }
      }),
      CompletePurchase: (0, _v3.translate)({
        singular: "Complete purchase",
        dictionary: {
          es: {
            singular: "Completar la compra"
          },
          "de-DE": {
            singular: "Einkauf abschließen"
          },
          "fr-FR": {
            singular: "Finalisez votre achat"
          },
          "ja-JP": {
            singular: "購入を完了する"
          },
          "ko-KR": {
            singular: "구매 완료"
          },
          "pt-BR": {
            singular: "Finalizar compra"
          },
          "zh-CN": {
            singular: "完成购买"
          }
        }
      }),
      DueToday: (0, _v3.translate)({
        singular: "Due today",
        dictionary: {
          es: {
            singular: "Vence hoy"
          },
          "de-DE": {
            singular: "Heute fällig:"
          },
          "fr-FR": {
            singular: "Dû aujourd'hui"
          },
          "ja-JP": {
            singular: "本日お支払い期限分"
          },
          "ko-KR": {
            singular: "오늘 지불할 금액"
          },
          "pt-BR": {
            singular: "Total hoje"
          },
          "zh-CN": {
            singular: "今天到期"
          }
        }
      }),
      DueAtSubscriptionStart: (0, _v3.translate)({
        singular: "Due at the start of subscription",
        dictionary: {
          es: {
            singular: "Se debe pagar al inicio de la suscripción"
          },
          "de-DE": {
            singular: "Fällig zu Beginn des Abonnements"
          },
          "fr-FR": {
            singular: "À payer au début de l'abonnement"
          },
          "ja-JP": {
            singular: "サブスクリプション開始時のご請求額"
          },
          "ko-KR": {
            singular: "구독 시작 시 지불할 금액"
          },
          "pt-BR": {
            singular: "A ser pago no início da assinatura"
          },
          "zh-CN": {
            singular: "订阅开始时到期"
          }
        }
      }),
      SubscriptionStartsOn: _v0 => (0, _v3.translate)({
        singular: "Subscription starts on {DATE}",
        replacements: {
          DATE: _v0
        },
        dictionary: {
          es: {
            singular: "La suscripción comienza el {DATE}"
          },
          "de-DE": {
            singular: "Das Abonnement beginnt am {DATE}."
          },
          "fr-FR": {
            singular: "L'abonnement commence le {DATE}"
          },
          "ja-JP": {
            singular: "サブスクリプション開始日：{DATE}"
          },
          "ko-KR": {
            singular: "{DATE}에 구독 시작"
          },
          "pt-BR": {
            singular: "A assinatura começa em {DATE}"
          },
          "zh-CN": {
            singular: "订阅从 {DATE} 开始"
          }
        }
      }),
      NumberOfSeats: (0, _v3.translate)({
        singular: "Number of seats",
        dictionary: {
          es: {
            singular: "Cantidad de puestos"
          },
          "de-DE": {
            singular: "Anzahl der Plätze"
          },
          "fr-FR": {
            singular: "Nombre de licences"
          },
          "ja-JP": {
            singular: "シートライセンス数"
          },
          "ko-KR": {
            singular: "사용자 라이선스 수"
          },
          "pt-BR": {
            singular: "Número de licenças"
          },
          "zh-CN": {
            singular: "席位数"
          }
        }
      }),
      PaymentMethod: (0, _v3.translate)({
        singular: "Payment method",
        dictionary: {
          es: {
            singular: "Método de pago"
          },
          "de-DE": {
            singular: "Zahlungsmethode"
          },
          "fr-FR": {
            singular: "Mode de paiement"
          },
          "ja-JP": {
            singular: "支払方法"
          },
          "ko-KR": {
            singular: "결제 수단"
          },
          "pt-BR": {
            singular: "Método de pagamento"
          },
          "zh-CN": {
            singular: "付款方式"
          }
        }
      }),
      BillingAdjustment: (0, _v3.translate)({
        singular: "Billing adjustment",
        dictionary: {
          es: {
            singular: "Ajuste de la facturación"
          },
          "de-DE": {
            singular: "Abrechnungsanpassung"
          },
          "fr-FR": {
            singular: "Ajustement de facturation"
          },
          "ja-JP": {
            singular: "請求内容の調整"
          },
          "ko-KR": {
            singular: "청구액 조정"
          },
          "pt-BR": {
            singular: "Ajuste de cobrança"
          },
          "zh-CN": {
            singular: "计费调整"
          }
        }
      }),
      PurchaseAdditionalSeats: (0, _v3.translate)({
        singular: "Purchase additional seats",
        dictionary: {
          es: {
            singular: "Comprar puestos adicionales"
          },
          "de-DE": {
            singular: "Zusätzliche Einzellizenzen kaufen"
          },
          "fr-FR": {
            singular: "Acheter des licences supplémentaires"
          },
          "ja-JP": {
            singular: "追加のシートライセンスを購入"
          },
          "ko-KR": {
            singular: "사용자 라이선스 추가 구매"
          },
          "pt-BR": {
            singular: "Comprar mais licenças"
          },
          "zh-CN": {
            singular: "购买额外席位"
          }
        }
      }),
      PricePerSeat: _v0 => (0, _v3.translate)({
        singular: "{PRICE} per seat",
        replacements: {
          PRICE: _v0
        },
        dictionary: {
          es: {
            singular: "{PRICE} por plaza"
          },
          "de-DE": {
            singular: "{PRICE} pro Platz"
          },
          "fr-FR": {
            singular: "{PRICE} par licence"
          },
          "ja-JP": {
            singular: "{PRICE} /ユーザー数"
          },
          "ko-KR": {
            singular: "사용자 라이선스당 {PRICE}"
          },
          "pt-BR": {
            singular: "{PRICE} por licença"
          },
          "zh-CN": {
            singular: "每个席位 {PRICE}"
          }
        }
      }),
      Subtotal: (0, _v3.translate)({
        singular: "Subtotal",
        dictionary: {
          "de-DE": {
            singular: "Zwischensumme"
          },
          "fr-FR": {
            singular: "Sous-total"
          },
          "ja-JP": {
            singular: "小計"
          },
          "ko-KR": {
            singular: "소계"
          },
          "zh-CN": {
            singular: "小计"
          }
        }
      }),
      Annually: (0, _v3.translate)({
        singular: "annually",
        dictionary: {
          es: {
            singular: "anualmente"
          },
          "de-DE": {
            singular: "Jährlich"
          },
          "fr-FR": {
            singular: "annuel"
          },
          "ja-JP": {
            singular: "年間"
          },
          "ko-KR": {
            singular: "연간"
          },
          "pt-BR": {
            singular: "anualmente"
          },
          "zh-CN": {
            singular: "每年"
          }
        }
      }),
      Monthly: (0, _v3.translate)({
        singular: "monthly",
        dictionary: {
          es: {
            singular: "mensual"
          },
          "de-DE": {
            singular: "Monatlich"
          },
          "fr-FR": {
            singular: "mensuel"
          },
          "ja-JP": {
            singular: "月間"
          },
          "ko-KR": {
            singular: "월간"
          },
          "pt-BR": {
            singular: "mensalmente"
          },
          "zh-CN": {
            singular: "每月"
          }
        }
      }),
      Tax: (0, _v3.translate)({
        singular: "Tax",
        dictionary: {
          es: {
            singular: "Impuesto"
          },
          "de-DE": {
            singular: "Steuer"
          },
          "fr-FR": {
            singular: "Taxe"
          },
          "ja-JP": {
            singular: "税"
          },
          "ko-KR": {
            singular: "부가세"
          },
          "pt-BR": {
            singular: "Impostos"
          },
          "zh-CN": {
            singular: "税"
          }
        }
      }),
      AddNewCard: (0, _v3.translate)({
        singular: "Add new card",
        dictionary: {
          es: {
            singular: "Agregar una nueva tarjeta"
          },
          "de-DE": {
            singular: "Füge eine neue Karte hinzu"
          },
          "fr-FR": {
            singular: "Ajouter une nouvelle carte"
          },
          "ja-JP": {
            singular: "新しいカードを追加"
          },
          "ko-KR": {
            singular: "새 카드 추가"
          },
          "pt-BR": {
            singular: "Adicionar novo cartão"
          },
          "zh-CN": {
            singular: "添加新卡"
          }
        }
      }),
      PayPal: (0, _v3.translate)("PayPal"),
      PurchaseInvite: (0, _v3.translate)({
        singular: "Purchase and invite",
        dictionary: {
          es: {
            singular: "Comprar e invitar"
          },
          "de-DE": {
            singular: "Kauf und Einladung"
          },
          "fr-FR": {
            singular: "Acheter et inviter"
          },
          "ja-JP": {
            singular: "購入して招待"
          },
          "ko-KR": {
            singular: "구매 및 초대"
          },
          "pt-BR": {
            singular: "Comprar e convidar"
          },
          "zh-CN": {
            singular: "购买和邀请"
          }
        }
      }),
      AddInvite: (0, _v3.translate)({
        singular: "Add seats and invite",
        dictionary: {
          es: {
            singular: "Agregar puestos e invitar"
          },
          "de-DE": {
            singular: "Lizenzen hinzufügen und Einladungen senden"
          },
          "fr-FR": {
            singular: "Ajouter des licences et inviter"
          },
          "ja-JP": {
            singular: "シートを追加して招待"
          },
          "ko-KR": {
            singular: "사용자 라이선스 추가 및 초대"
          },
          "pt-BR": {
            singular: "Adicionar licenças e convidar"
          },
          "zh-CN": {
            singular: "添加席位和邀请"
          }
        }
      }),
      Notices: _v41,
      CardExpired: (0, _v3.translate)({
        singular: "Expired",
        dictionary: {
          es: {
            singular: "Expirado"
          },
          "de-DE": {
            singular: "Abgelaufen"
          },
          "fr-FR": {
            singular: "Expiré"
          },
          "ja-JP": {
            singular: "期限切れ"
          },
          "ko-KR": {
            singular: "만료됨"
          },
          "pt-BR": {
            singular: "Expirado"
          },
          "zh-CN": {
            singular: "已过期"
          }
        }
      }),
      AllCardsExpiredAddNew: (0, _v3.translate)({
        singular: "All expired. Add new",
        dictionary: {
          es: {
            singular: "Todos expiraron. Agregar nuevo"
          },
          "de-DE": {
            singular: "Alle abgelaufen. Neue hinzufügen"
          },
          "fr-FR": {
            singular: "Cartes expirées. Ajouter une nouvelle carte"
          },
          "ja-JP": {
            singular: "すべて期限切れです。新しいカードを追加"
          },
          "ko-KR": {
            singular: "모두 만료됨. 새로 추가"
          },
          "pt-BR": {
            singular: "Todos expiraram. Adicione um novo"
          },
          "zh-CN": {
            singular: "全部过期。添加新内容"
          }
        }
      }),
      AddPaymentMethod: (0, _v3.translate)({
        singular: "Add payment method",
        dictionary: {
          es: {
            singular: "Añadir método de pago"
          },
          "de-DE": {
            singular: "Zahlungsmethode hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter un mode de paiement"
          },
          "ja-JP": {
            singular: "支払方法を追加"
          },
          "ko-KR": {
            singular: "결제 수단 추가"
          },
          "pt-BR": {
            singular: "Adicionar método de pagamento"
          },
          "zh-CN": {
            singular: "添加付款方式"
          }
        }
      }),
      Month: (0, _v3.translate)({
        singular: "month",
        dictionary: {
          es: {
            singular: "mes"
          },
          "de-DE": {
            singular: "Monat"
          },
          "fr-FR": {
            singular: "mois"
          },
          "ja-JP": {
            singular: "月"
          },
          "ko-KR": {
            singular: "월"
          },
          "pt-BR": {
            singular: "Mês"
          },
          "zh-CN": {
            singular: "月"
          }
        }
      }),
      Year: (0, _v3.translate)({
        singular: "year",
        dictionary: {
          es: {
            singular: "año"
          },
          "de-DE": {
            singular: "Jahr"
          },
          "fr-FR": {
            singular: "année"
          },
          "ja-JP": {
            singular: "年"
          },
          "ko-KR": {
            singular: "년"
          },
          "pt-BR": {
            singular: "Ano"
          },
          "zh-CN": {
            singular: "年"
          }
        }
      }),
      AddSeats: (0, _v3.translate)({
        singular: "Add seats",
        dictionary: {
          es: {
            singular: "Agregar puestos"
          },
          "de-DE": {
            singular: "Plätze hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter des licences"
          },
          "ja-JP": {
            singular: "シートを追加"
          },
          "ko-KR": {
            singular: "사용자 라이선스 추가"
          },
          "pt-BR": {
            singular: "Adicionar licenças"
          },
          "zh-CN": {
            singular: "添加席位"
          }
        }
      }),
      InvitesViewersFree: (0, _v3.translate)({
        singular: "Invite team members as Viewers for free",
        dictionary: {
          es: {
            singular: "Invita gratis a miembros de equipo como espectadores"
          },
          "de-DE": {
            singular: "Lade Team-Mitglieder kostenlos als „Betrachter“ ein"
          },
          "fr-FR": {
            singular: "Invitez gratuitement des collaborateurs en tant que spectateurs"
          },
          "ja-JP": {
            singular: "チームメンバーを閲覧者として無料で招待する"
          },
          "ko-KR": {
            singular: "팀원을 뷰어로 무료 초대하세요."
          },
          "pt-BR": {
            singular: "Convide de graça integrantes da equipe como espectadores"
          },
          "zh-CN": {
            singular: "免费邀请团队成员成为观众"
          }
        }
      }),
      ContinueToPayPal: (0, _v3.translate)({
        singular: "Continue to PayPal",
        dictionary: {
          es: {
            singular: "Ir a PayPal"
          },
          "de-DE": {
            singular: "Weiter zu PayPal"
          },
          "fr-FR": {
            singular: "Continuer sur PayPal"
          },
          "ja-JP": {
            singular: "PayPalに進む"
          },
          "ko-KR": {
            singular: "PayPal로 계속"
          },
          "pt-BR": {
            singular: "Continuar com PayPal"
          },
          "zh-CN": {
            singular: "继续前往 PayPal"
          }
        }
      }),
      Unknown: (0, _v3.translate)({
        singular: "Unknown",
        dictionary: {
          es: {
            singular: "Desconocido"
          },
          "de-DE": {
            singular: "Unbekannt"
          },
          "fr-FR": {
            singular: "Inconnu"
          },
          "ja-JP": {
            singular: "不明"
          },
          "ko-KR": {
            singular: "알 수 없음"
          },
          "pt-BR": {
            singular: "Desconhecido"
          },
          "zh-CN": {
            singular: "未知"
          }
        }
      }),
      UpdatePaymentMethod: (0, _v3.translate)({
        singular: "Update payment method",
        dictionary: {
          es: {
            singular: "Actualizar método de pago"
          },
          "de-DE": {
            singular: "Zahlungsmethode aktualisieren"
          },
          "fr-FR": {
            singular: "Mettre à jour le mode de paiement"
          },
          "ja-JP": {
            singular: "お支払い方法を更新"
          },
          "ko-KR": {
            singular: "결제 수단 업데이트"
          },
          "pt-BR": {
            singular: "Atualizar método de pagamento"
          },
          "zh-CN": {
            singular: "更新付款方式"
          }
        }
      }),
      ..._v39,
      ..._v40
    };
  _v0.s(["default", 0, _v42], 0);
}