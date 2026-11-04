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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = "/terms",
    _v15 = "/privacy";
  _v0.s(["BILLING_NOTICE_TYPES", 0, {
    RENEWAL_SUCCESSFUL: "RENEWAL_SUCCESSFUL",
    RENEWAL_FAILED: "RENEWAL_FAILED"
  }, "PRIVACY_URL", 0, _v15, "TERMS_URL", 0, _v14], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = (_v0, _v1) => _v0 => (0, _v1.jsx)(_v5.Link, {
    href: _v0,
    variant: "inline-primary",
    color: "vimeoBlue.600",
    target: "_blank",
    rel: "noopener noreferrer",
    children: _v0
  }, _v1);
  _v0.s(["DowngradeConfirmStep", 0, ({
    planName: _v0,
    planData: _v1,
    billingPeriod: _v2,
    renewalDate: _v3,
    isImmediate: _v4,
    ctaLabel: _v5
  }) => {
    let {
        locale: _v6
      } = (0, _v12.useGctlConfig)(),
      {
        teamSeats: _v7,
        restrictedVideoStorageLimit: _v8
      } = _v1.metadata.entitlements.params,
      _v9 = _v2 === _v16.UserPlanType.Year,
      _v10 = _v9 ? _v1.priceFormatted.annualMonthly : _v1.priceFormatted.monthly ?? _v1.priceFormatted.annualMonthly,
      _v11 = _v9 ? _v1.priceFormatted.annual : _v1.priceFormatted.monthly ?? _v1.priceFormatted.annual,
      _v12 = _v1.metadata.priceTax?.included ? (0, _v13.translate)({
        singular: "including tax",
        dictionary: {
          es: {
            singular: "impuestos incluidos"
          },
          "de-DE": {
            singular: "inkl. MwSt."
          },
          "fr-FR": {
            singular: "taxes incluses"
          },
          "ja-JP": {
            singular: "税込"
          },
          "ko-KR": {
            singular: "세금 포함"
          },
          "pt-BR": {
            singular: "incluindo impostos"
          },
          "zh-CN": {
            singular: "含税"
          }
        }
      }) : (0, _v13.translate)({
        singular: "plus applicable tax",
        dictionary: {
          es: {
            singular: "más impuestos aplicables"
          },
          "de-DE": {
            singular: "zzgl. anfallender Steuern"
          },
          "fr-FR": {
            singular: "plus les taxes applicables"
          },
          "ja-JP": {
            singular: "該当する税金を別途加算"
          },
          "ko-KR": {
            singular: "해당 세금 별도"
          },
          "pt-BR": {
            singular: "mais imposto aplicável"
          },
          "zh-CN": {
            singular: "另加适用税费"
          }
        }
      }),
      _v13 = _v9 ? (0, _v13.translate)({
        singular: "Per month, billed annually at {TOTAL}/year {TAX}.",
        replacements: {
          TOTAL: _v11,
          TAX: _v12
        },
        dictionary: {
          es: {
            singular: "Por mes, facturado anualmente a {TOTAL}/año {TAX}."
          },
          "de-DE": {
            singular: "Pro Monat, jährlich abgerechnet zu {TOTAL}/Jahr {TAX}."
          },
          "fr-FR": {
            singular: "Par mois, facturé annuellement à {TOTAL}/an {TAX}."
          },
          "ja-JP": {
            singular: "月額（年払い、年額{TOTAL} {TAX}で請求されます）。"
          },
          "ko-KR": {
            singular: "월별 요금(연간 청구: {TOTAL}/년 {TAX})."
          },
          "pt-BR": {
            singular: "Por mês, cobrado anualmente a {TOTAL}/ano {TAX}."
          },
          "zh-CN": {
            singular: "按月计费，按年支付，年费为 {TOTAL}/年 {TAX}。"
          }
        }
      }) : (0, _v13.translate)({
        singular: "Per month, billed monthly {TAX}.",
        replacements: {
          TAX: _v12
        },
        dictionary: {
          es: {
            singular: "Por mes, facturado mensualmente {TAX}."
          },
          "de-DE": {
            singular: "Pro Monat, monatlich abgerechnet {TAX}."
          },
          "fr-FR": {
            singular: "Par mois, facturé mensuellement {TAX}."
          },
          "ja-JP": {
            singular: "月額（月払い、{TAX}で請求されます）。"
          },
          "ko-KR": {
            singular: "월별 요금(매월 청구 {TAX})."
          },
          "pt-BR": {
            singular: "Por mês, cobrado mensalmente {TAX}."
          },
          "zh-CN": {
            singular: "按月计费，每月支付 {TAX}。"
          }
        }
      }),
      _v14 = (0, _v2.useMemo)(() => [{
        icon: (0, _v1.jsx)(_v11.Users, {
          boxSize: (0, _v8.rem)(20),
          color: "text-secondary"
        }),
        label: (0, _v13.translate)({
          singular: "{AMOUNT} user",
          plural: "{AMOUNT} users",
          count: _v7 ?? 1,
          replacements: {
            AMOUNT: _v7 ?? 1
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} usuario",
              plural: "{AMOUNT} usuarios"
            },
            "de-DE": {
              singular: "{AMOUNT} Nutzer",
              plural: "{AMOUNT} Nutzer"
            },
            "fr-FR": {
              singular: "{AMOUNT} utilisateur",
              plural: "{AMOUNT} utilisateurs"
            },
            "ja-JP": {
              singular: "{AMOUNT}ユーザー",
              plural: "{AMOUNT}ユーザー"
            },
            "ko-KR": {
              singular: "{AMOUNT} 사용자",
              plural: "{AMOUNT} 사용자"
            },
            "pt-BR": {
              singular: "{AMOUNT} usuário",
              plural: "{AMOUNT} usuários"
            },
            "zh-CN": {
              singular: "{AMOUNT} 用户",
              plural: "{AMOUNT} 用户"
            }
          }
        })
      }, ...(null !== _v8 ? [{
        icon: (0, _v1.jsx)(_v10.ManagedStorage, {
          boxSize: (0, _v8.rem)(20),
          color: "text-secondary"
        }),
        label: (0, _v13.translate)({
          singular: "{AMOUNT} storage for Embeds and non-Public videos",
          replacements: {
            AMOUNT: _v8
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de almacenamiento para incrustaciones y vídeos no públicos"
            },
            "de-DE": {
              singular: "{AMOUNT} Speicherplatz für eingebettete und nicht-öffentliche Videos"
            },
            "fr-FR": {
              singular: "{AMOUNT} de stockage pour les Embeds et les vidéos non publiques"
            },
            "ja-JP": {
              singular: "{AMOUNT} の埋め込みおよび非公開動画用ストレージ"
            },
            "ko-KR": {
              singular: "{AMOUNT} 저장 공간(임베드 및 비공개 동영상용)"
            },
            "pt-BR": {
              singular: "{AMOUNT} de armazenamento para incorporações e vídeos não públicos"
            },
            "zh-CN": {
              singular: "{AMOUNT} 存储用于 Embeds 和非公开视频"
            }
          }
        })
      }] : []), {
        icon: (0, _v1.jsx)(_v9.Database, {
          boxSize: (0, _v8.rem)(20),
          color: "text-secondary"
        }),
        label: (0, _v13.translate)({
          singular: "Unlimited Public Storage",
          dictionary: {
            es: {
              singular: "Almacenamiento público ilimitado"
            },
            "de-DE": {
              singular: "Unbegrenzter öffentlicher Speicherplatz"
            },
            "fr-FR": {
              singular: "Stockage public illimité"
            },
            "ja-JP": {
              singular: "無制限の公開ストレージ"
            },
            "ko-KR": {
              singular: "무제한 공개 스토리지"
            },
            "pt-BR": {
              singular: "Armazenamento público ilimitado"
            },
            "zh-CN": {
              singular: "无限公共存储"
            }
          }
        })
      }], [_v7, _v8]),
      _v15 = (0, _v17.isCalendarDate)(_v3) ? (0, _v17.formatRenewalDate)(_v3, _v6 ?? "en") : "",
      _v16 = _v9 ? (0, _v13.translate)({
        singular: "per year",
        dictionary: {
          es: {
            singular: "por año"
          },
          "de-DE": {
            singular: "pro Jahr"
          },
          "fr-FR": {
            singular: "par an"
          },
          "ja-JP": {
            singular: "年額"
          },
          "ko-KR": {
            singular: "연간"
          },
          "pt-BR": {
            singular: "por ano"
          },
          "zh-CN": {
            singular: "每年"
          }
        }
      }) : (0, _v13.translate)({
        singular: "per month",
        dictionary: {
          es: {
            singular: "al mes"
          },
          "de-DE": {
            singular: "pro Monat"
          },
          "fr-FR": {
            singular: "par mois"
          },
          "ja-JP": {
            singular: "月々"
          },
          "ko-KR": {
            singular: "월"
          },
          "pt-BR": {
            singular: "por mês"
          },
          "zh-CN": {
            singular: "/月"
          }
        }
      }),
      _v17 = _v9 ? (0, _v13.translate)({
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
      }) : (0, _v13.translate)({
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
      _v18 = _v4 ? (0, _v13.translate)({
        singular: "immediately",
        dictionary: {
          es: {
            singular: "inmediatamente"
          },
          "de-DE": {
            singular: "sofort"
          },
          "fr-FR": {
            singular: "immédiatement"
          },
          "ja-JP": {
            singular: "即時"
          },
          "ko-KR": {
            singular: "즉시"
          },
          "pt-BR": {
            singular: "imediatamente"
          },
          "zh-CN": {
            singular: "立即"
          }
        }
      }) : (0, _v13.translate)({
        singular: "at the end of your current billing period",
        dictionary: {
          es: {
            singular: "al final de su período de facturación actual"
          },
          "de-DE": {
            singular: "am Ende Ihres aktuellen Abrechnungszeitraums"
          },
          "fr-FR": {
            singular: "à la fin de votre période de facturation en cours"
          },
          "ja-JP": {
            singular: "現在の請求期間の終了時に"
          },
          "ko-KR": {
            singular: "현재 청구 기간 종료 시"
          },
          "pt-BR": {
            singular: "no final do seu período de cobrança atual"
          },
          "zh-CN": {
            singular: "在您当前计费周期结束时"
          }
        }
      }),
      _v19 = _v4 ? (0, _v13.translate)({
        singular: "charged today",
        dictionary: {
          es: {
            singular: "cobrado hoy"
          },
          "de-DE": {
            singular: "heute berechnet"
          },
          "fr-FR": {
            singular: "facturé aujourd’hui"
          },
          "ja-JP": {
            singular: "本日請求されます"
          },
          "ko-KR": {
            singular: "오늘 청구됩니다"
          },
          "pt-BR": {
            singular: "cobrado hoje"
          },
          "zh-CN": {
            singular: "今日收取费用"
          }
        }
      }) : "" !== _v15 ? (0, _v13.translate)({
        singular: "charged on {DATE}",
        replacements: {
          DATE: _v15
        },
        dictionary: {
          es: {
            singular: "cobrado el {DATE}"
          },
          "de-DE": {
            singular: "berechnet am {DATE}"
          },
          "fr-FR": {
            singular: "facturé le {DATE}"
          },
          "ja-JP": {
            singular: "{DATE}に請求されます"
          },
          "ko-KR": {
            singular: "{DATE}에 청구됩니다"
          },
          "pt-BR": {
            singular: "cobrado em {DATE}"
          },
          "zh-CN": {
            singular: "于 {DATE} 收取费用"
          }
        }
      }) : (0, _v13.translate)({
        singular: "charged at the end of your current billing period",
        dictionary: {
          es: {
            singular: "se cobrará al final de su período de facturación actual"
          },
          "de-DE": {
            singular: "wird am Ende Ihres aktuellen Abrechnungszeitraums belastet"
          },
          "fr-FR": {
            singular: "facturé à la fin de votre période de facturation en cours"
          },
          "ja-JP": {
            singular: "現在の請求期間の終了時に請求されます"
          },
          "ko-KR": {
            singular: "현재 청구 기간 종료 시 청구됩니다"
          },
          "pt-BR": {
            singular: "cobrado no final do seu período de cobrança atual"
          },
          "zh-CN": {
            singular: "在您当前计费周期结束时收取费用"
          }
        }
      }),
      _v20 = (0, _v13.translate)({
        singular: "By clicking ‘{CTA}’, you agree: Your plan will change to {PLAN} {TIMING}, for a total price of {TOTAL} {TOTAL_PERIOD} {TAX}, {CHARGE}. Your subscription will then renew automatically at {TOTAL} {TAX} every {RENEWAL_PERIOD} unless you cancel in Billing Settings. Subscription price may change in accordance with our Terms of Service. Your content may be deleted upon cancellation. By completing this purchase, you agree to our {TOS_URL}Terms of Service{/TOS_URL}, including the arbitration agreement and class action waiver, and acknowledge our {PP_URL}Privacy Policy{/PP_URL}.",
        replacements: {
          CTA: _v5,
          PLAN: _v0,
          TIMING: _v18,
          TOTAL: _v11,
          TOTAL_PERIOD: _v16,
          TAX: _v12,
          CHARGE: _v19,
          RENEWAL_PERIOD: _v17,
          TOS_URL: _v18(_v14, "tos"),
          PP_URL: _v18(_v15, "privacy")
        },
        dictionary: {
          es: {
            singular: "Al hacer clic en ‘{CTA}’, usted acepta: Su plan cambiará a {PLAN} {TIMING}, por un precio total de {TOTAL} {TOTAL_PERIOD} {TAX}, {CHARGE}. Su suscripción se renovará automáticamente luego a {TOTAL} {TAX} cada {RENEWAL_PERIOD} a menos que cancele en Billing Settings. El precio de la suscripción puede cambiar de conformidad con nuestros {TOS_URL}Términos de Servicio{/TOS_URL}. Su contenido puede ser eliminado al cancelar. Al completar esta compra, usted acepta nuestro {TOS_URL}Términos de Servicio{/TOS_URL}, incluido el acuerdo de arbitraje y la renuncia a la acción colectiva, y reconoce nuestra {PP_URL}Política de privacidad{/PP_URL}."
          },
          "de-DE": {
            singular: "Indem Sie auf ‘{CTA}’ klicken, stimmen Sie zu: Ihr Plan wird auf {PLAN} {TIMING} geändert, für einen Gesamtpreis von {TOTAL} {TOTAL_PERIOD} {TAX}, {CHARGE}. Ihr Abonnement wird dann automatisch zu {TOTAL} {TAX} alle {RENEWAL_PERIOD} verlängert, sofern Sie nicht in den Abrechnungseinstellungen kündigen. Der Abonnementpreis kann sich gemäß unseren Nutzungsbedingungen ändern. Ihre Inhalte können bei Kündigung gelöscht werden. Mit Abschluss dieses Kaufs stimmen Sie unseren {TOS_URL}Nutzungsbedingungen{/TOS_URL} zu, einschließlich der Schiedsvereinbarung und des Verzichts auf Sammelklagen, und erkennen unsere {PP_URL}Datenschutzrichtlinie{/PP_URL} an."
          },
          "fr-FR": {
            singular: "En cliquant sur ‘{CTA}’, vous acceptez : votre abonnement sera modifié pour devenir {PLAN} {TIMING}, pour un prix total de {TOTAL} {TOTAL_PERIOD} {TAX}, {CHARGE}. Votre abonnement se renouvellera ensuite automatiquement à {TOTAL} {TAX} tous les {RENEWAL_PERIOD}, sauf si vous annulez dans les paramètres de facturation. Le prix de l’abonnement peut changer conformément à nos {TOS_URL}Conditions d'utilisation{/TOS_URL}. Votre contenu peut être supprimé en cas d’annulation. En complétant cet achat, vous acceptez nos {TOS_URL}Conditions d'utilisation{/TOS_URL}, y compris la clause d’arbitrage et la renonciation aux recours collectifs, et reconnaissez notre {PP_URL}Politique de confidentialité{/PP_URL}."
          },
          "ja-JP": {
            singular: "‘{CTA}’をクリックすると、次の内容に同意したことになります: プランは{PLAN} {TIMING}に変更され、合計金額は{TOTAL} {TOTAL_PERIOD} {TAX}、{CHARGE}になります。購読は、課金設定でキャンセルしない限り{RENEWAL_PERIOD}ごとに{TOTAL} {TAX}で自動更新されます。サブスクリプションの価格は当社の利用規約に従って変更される場合があります。キャンセルされた場合、コンテンツが削除されることがあります。本購入を完了することで、仲裁合意および集団訴訟放棄を含む当社の{TOS_URL}利用規約{/TOS_URL}に同意し、{PP_URL}プライバシーポリシー{/PP_URL}を確認したことを承認するものとします。"
          },
          "ko-KR": {
            singular: "‘{CTA}’를 클릭하면 다음에 동의하게 됩니다: 귀하의 요금제가 {PLAN} {TIMING}으로 변경되며, 총 금액은 {TOTAL} {TOTAL_PERIOD} {TAX}, {CHARGE}입니다. 결제 설정에서 취소하지 않는 한 귀하의 구독은 이후 매 {RENEWAL_PERIOD}마다 {TOTAL} {TAX}로 자동 갱신됩니다. 구독 요금은 당사의 서비스 약관에 따라 변경될 수 있습니다. 취소 시 귀하의 콘텐츠가 삭제될 수 있습니다. 본 구매를 완료함으로써 귀하는 중재 합의 및 집단소송 포기 조항을 포함한 당사의 {TOS_URL}서비스 약관{/TOS_URL}에 동의하며, 당사의 {PP_URL}개인정보 처리방침{/PP_URL}을 확인했음을 인정합니다."
          },
          "pt-BR": {
            singular: "Ao clicar em ‘{CTA}’, você concorda: Seu plano será alterado para {PLAN} {TIMING}, por um preço total de {TOTAL} {TOTAL_PERIOD} {TAX}, {CHARGE}. Sua assinatura será renovada automaticamente em {TOTAL} {TAX} a cada {RENEWAL_PERIOD}, a menos que você cancele nas Configurações de Cobrança. O preço da assinatura pode mudar de acordo com nossos Termos de Serviço. Seu conteúdo pode ser excluído em caso de cancelamento. Ao concluir esta compra, você concorda com nossos {TOS_URL}Termos de Serviço{/TOS_URL}, incluindo o acordo de arbitragem e a renúncia à ação coletiva, e reconhece nossa {PP_URL}Política de Privacidade{/PP_URL}."
          },
          "zh-CN": {
            singular: "点击‘{CTA}’即表示您同意：您的方案将变更为 {PLAN} {TIMING}，总价为 {TOTAL} {TOTAL_PERIOD} {TAX}，{CHARGE}。随后，除非您在账单设置中取消，否则您的订阅将以 {TOTAL} {TAX} 的价格每 {RENEWAL_PERIOD} 自动续订。订阅价格可能会根据我们的服务条款而变更。取消订阅后您的内容可能会被删除。完成本次购买即表示您同意我们的 {TOS_URL}服务条款{/TOS_URL}（包括仲裁协议和放弃集体诉讼条款），并已知悉我们的 {PP_URL}隐私政策{/PP_URL}。"
          }
        }
      });
    return (0, _v1.jsxs)(_v3.Box, {
      paddingX: {
        base: "6",
        md: (0, _v8.rem)(60)
      },
      paddingTop: "4",
      paddingBottom: "5",
      children: [(0, _v1.jsxs)(_v6.Stack, {
        spacing: "1",
        children: [(0, _v1.jsx)(_v7.Text, {
          variant: "heading-xl",
          as: "p",
          children: _v10
        }), (0, _v1.jsx)(_v7.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v13
        })]
      }), (0, _v1.jsxs)(_v6.Stack, {
        spacing: "6",
        marginTop: "2",
        children: [(0, _v1.jsx)(_v6.Stack, {
          spacing: "2",
          children: _v14.map(_v0 => (0, _v1.jsxs)(_v4.Flex, {
            gap: "2",
            alignItems: "center",
            children: [_v0.icon, (0, _v1.jsx)(_v7.Text, {
              variant: "heading-xs",
              color: "text-secondary",
              children: _v0.label
            })]
          }, _v0.label))
        }), (0, _v1.jsx)(_v7.Text, {
          variant: "body-xs",
          color: "text-secondary",
          children: _v20
        })]
      })]
    });
  }], 0);
}