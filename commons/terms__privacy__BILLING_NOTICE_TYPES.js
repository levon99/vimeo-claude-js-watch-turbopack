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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = "/terms",
    _v29 = "/privacy";
  _v0.s(["BILLING_NOTICE_TYPES", 0, {
    RENEWAL_SUCCESSFUL: "RENEWAL_SUCCESSFUL",
    RENEWAL_FAILED: "RENEWAL_FAILED"
  }, "PRIVACY_URL", 0, _v29, "TERMS_URL", 0, _v28], 0);
  var _v30 = _v0.i(0);
  let _v31 = (_v0, _v1) => _v0 => (0, _v1.jsx)(_v24.Link, {
      href: _v0,
      variant: "inline-primary",
      color: "vimeoBlue.600",
      target: "_blank",
      rel: "noopener noreferrer",
      children: _v0
    }, _v1),
    _v32 = ({
      planName: _v0,
      planData: _v1,
      billingPeriod: _v2,
      renewalDate: _v3,
      isImmediate: _v4,
      ctaLabel: _v5
    }) => {
      let {
          locale: _v6
        } = (0, _v21.useGctlConfig)(),
        {
          teamSeats: _v7,
          restrictedVideoStorageLimit: _v8
        } = _v1.metadata.entitlements.params,
        _v9 = _v2 === _v30.UserPlanType.Year,
        _v10 = _v9 ? _v1.priceFormatted.annualMonthly : _v1.priceFormatted.monthly ?? _v1.priceFormatted.annualMonthly,
        _v11 = _v9 ? _v1.priceFormatted.annual : _v1.priceFormatted.monthly ?? _v1.priceFormatted.annual,
        _v12 = _v1.metadata.priceTax?.included ? (0, _v22.translate)({
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
        }) : (0, _v22.translate)({
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
        _v13 = _v9 ? (0, _v22.translate)({
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
        }) : (0, _v22.translate)({
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
          icon: (0, _v1.jsx)(_v27.Users, {
            boxSize: (0, _v17.rem)(20),
            color: "text-secondary"
          }),
          label: (0, _v22.translate)({
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
          icon: (0, _v1.jsx)(_v26.ManagedStorage, {
            boxSize: (0, _v17.rem)(20),
            color: "text-secondary"
          }),
          label: (0, _v22.translate)({
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
          icon: (0, _v1.jsx)(_v25.Database, {
            boxSize: (0, _v17.rem)(20),
            color: "text-secondary"
          }),
          label: (0, _v22.translate)({
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
        _v15 = ((_v0, _v1) => {
          if ("" === _v0) return "";
          let _v2 = new Date(_v0.replace(" ", "T"));
          return Number.isNaN(_v2.getTime()) ? "" : new Intl.DateTimeFormat(_v1 ?? "en", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
          }).format(_v2);
        })(_v3, _v6),
        _v16 = _v9 ? (0, _v22.translate)({
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
        }) : (0, _v22.translate)({
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
        _v17 = _v9 ? (0, _v22.translate)({
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
        }) : (0, _v22.translate)({
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
        _v18 = _v4 ? (0, _v22.translate)({
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
        }) : (0, _v22.translate)({
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
        _v19 = _v4 ? (0, _v22.translate)({
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
        }) : "" !== _v15 ? (0, _v22.translate)({
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
        }) : (0, _v22.translate)({
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
        _v20 = (0, _v22.translate)({
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
            TOS_URL: _v31(_v28, "tos"),
            PP_URL: _v31(_v29, "privacy")
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
          md: (0, _v17.rem)(60)
        },
        paddingTop: "4",
        paddingBottom: "5",
        children: [(0, _v1.jsxs)(_v15.Stack, {
          spacing: "1",
          children: [(0, _v1.jsx)(_v16.Text, {
            variant: "heading-xl",
            as: "p",
            children: _v10
          }), (0, _v1.jsx)(_v16.Text, {
            variant: "body-sm",
            color: "text-secondary",
            children: _v13
          })]
        }), (0, _v1.jsxs)(_v15.Stack, {
          spacing: "6",
          marginTop: "2",
          children: [(0, _v1.jsx)(_v15.Stack, {
            spacing: "2",
            children: _v14.map(_v0 => (0, _v1.jsxs)(_v5.Flex, {
              gap: "2",
              alignItems: "center",
              children: [_v0.icon, (0, _v1.jsx)(_v16.Text, {
                variant: "heading-xs",
                color: "text-secondary",
                children: _v0.label
              })]
            }, _v0.label))
          }), (0, _v1.jsx)(_v16.Text, {
            variant: "body-xs",
            color: "text-secondary",
            children: _v20
          })]
        })]
      });
    };
  var _v33 = _v0.i(0);
  _v0.s(["DowngradeFlowModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    onSuccess: _v2,
    onError: _v3,
    membership: _v4,
    currentPlanName: _v5,
    currentTier: _v6,
    currentManagedStorage: _v7,
    targetTier: _v8,
    targetPlanName: _v9,
    targetBillingPlanId: _v10,
    targetPlanData: _v11,
    surface: _v12
  }) => {
    let {
        baseUrl: _v13,
        jwt: _v14,
        xVimeoPage: _v15,
        locale: _v16
      } = (0, _v21.useGctlConfig)(),
      [_v17, _v18] = (0, _v2.useState)(!1),
      [_v19, _v20] = (0, _v2.useState)("loss"),
      _v21 = (0, _v2.useRef)(null),
      {
        trackUserScheduledDowngrade: _v22,
        trackDowngradeModalDowngradeClicked: _v23,
        trackDowngradeModalStepViewed: _v24,
        trackDowngradeModalContinued: _v25,
        trackDowngradeFailed: _v26
      } = (0, _v23.usePricingTracking)(),
      _v27 = _v4.billingPeriod === _v30.UserPlanType.Year ? "annual" : "monthly",
      _v28 = _v4.subscriptionId,
      _v29 = !!_v4.gracePeriodType;
    (0, _v2.useEffect)(() => {
      if (!_v0) {
        _v21.current = null;
        return;
      }
      _v21.current !== _v19 && (_v21.current = _v19, _v24({
        step: _v19,
        currentPlan: _v4.tier ?? "",
        targetPlan: _v8,
        targetPeriodicity: _v27,
        surface: _v12
      }));
    }, [_v0, _v19, _v24, _v4.tier, _v8, _v27, _v12]);
    let _v30 = (0, _v2.useCallback)(() => {
        _v20("loss"), _v1();
      }, [_v1]),
      _v31 = (0, _v2.useCallback)(() => {
        _v25({
          currentPlan: _v4.tier ?? "",
          targetPlan: _v8,
          targetPeriodicity: _v27,
          surface: _v12
        }), _v20("confirm");
      }, [_v25, _v4.tier, _v8, _v27, _v12]),
      _v32 = (0, _v2.useCallback)(async () => {
        if (_v23({
          currentPlan: _v4.tier ?? "",
          targetPlan: _v8,
          targetPeriodicity: _v27
        }), !_v29 && !_v4.hasAutorenew) {
          _v3?.((0, _v22.translate)({
            singular: "To change your plan, please turn auto-renew back on first.",
            dictionary: {
              es: {
                singular: "Para cambiar tu plan, primero vuelve a activar la renovación automática."
              },
              "de-DE": {
                singular: "Um Ihren Plan zu ändern, schalten Sie bitte zuerst die automatische Verlängerung wieder ein."
              },
              "fr-FR": {
                singular: "Pour modifier votre forfait, veuillez d'abord réactiver le renouvellement automatique."
              },
              "ja-JP": {
                singular: "プランを変更するには、まず自動更新を再度オンにしてください。"
              },
              "ko-KR": {
                singular: "요금제를 변경하려면 먼저 자동 갱신을 다시 켜 주세요."
              },
              "pt-BR": {
                singular: "Para alterar seu plano, por favor reative a renovação automática primeiro."
              },
              "zh-CN": {
                singular: "要更改您的订阅计划，请先重新开启自动续订。"
              }
            }
          })), _v30();
          return;
        }
        if (!_v28) {
          _v3?.(), _v30();
          return;
        }
        _v18(!0);
        try {
          _v29 ? await (0, _v19.postMeOrdersSubscription)({
            select: [],
            where: {
              subscriptionId: _v28
            },
            variables: {
              billingPlanId: _v10,
              type: "downgrade"
            },
            baseUrl: _v13,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v14 ? `jwt ${_v14}` : "",
              "Vimeo-Page": `${_v15}`,
              "Accept-Language": _v16 ?? "en"
            }
          }) : await (0, _v20.putMeSubscriptionScheduledOrder)({
            where: {
              subscriptionId: _v28
            },
            variables: {
              billingPlanId: _v10
            },
            baseUrl: _v13,
            headers: {
              "Content-Type": "application/json",
              Authorization: _v14 ? `jwt ${_v14}` : "",
              "Vimeo-Page": `${_v15}`,
              "Accept-Language": _v16 ?? "en"
            }
          }), _v22({
            currentPlan: _v4.tier ?? "",
            newPlan: _v8,
            newPeriodicity: _v27
          }), _v2?.({
            isImmediate: _v29
          }), _v30();
        } catch (_v0) {
          _v26({
            currentPlan: _v4.tier ?? "",
            targetPlan: _v8,
            targetPeriodicity: _v27,
            errorMessage: _v0 instanceof Error ? _v0.message : String(_v0)
          }), _v3?.(), _v30();
        } finally {
          _v18(!1);
        }
      }, [_v28, _v10, _v13, _v14, _v15, _v16, _v30, _v22, _v23, _v26, _v4.tier, _v4.hasAutorenew, _v29, _v8, _v27, _v2, _v3]),
      _v33 = [...(0, _v33.getLostFeatures)(_v6, _v8, {
        currentManagedStorage: _v7
      }).slice(0, _v33.MAX_LOST_FEATURES), (0, _v22.translate)({
        singular: "...and much more",
        dictionary: {
          es: {
            singular: "...y mucho más"
          },
          "de-DE": {
            singular: "...und vieles mehr"
          },
          "fr-FR": {
            singular: "...et bien plus encore"
          },
          "ja-JP": {
            singular: "...ほかにも多数の機能"
          },
          "ko-KR": {
            singular: "...그리고 훨씬 더 많은 기능"
          },
          "pt-BR": {
            singular: "...e muito mais"
          },
          "zh-CN": {
            singular: "...还有更多"
          }
        }
      })],
      _v34 = _v33.length - 1,
      _v35 = _v29 ? (0, _v22.translate)({
        singular: "Downgrade to {PLAN} plan now",
        replacements: {
          PLAN: _v9
        },
        dictionary: {
          es: {
            singular: "Cambiar al plan {PLAN} ahora"
          },
          "de-DE": {
            singular: "Jetzt auf den {PLAN}-Tarif herabstufen"
          },
          "fr-FR": {
            singular: "Rétrogradez maintenant vers le forfait {PLAN}"
          },
          "ja-JP": {
            singular: "今すぐ{PLAN}プランにダウングレードする"
          },
          "ko-KR": {
            singular: "지금 {PLAN} 요금제로 다운그레이드"
          },
          "pt-BR": {
            singular: "Mudar para o plano {PLAN} agora"
          },
          "zh-CN": {
            singular: "立即降级到{PLAN}计划"
          }
        }
      }) : (0, _v22.translate)({
        singular: "Downgrade to {PLAN} plan",
        replacements: {
          PLAN: _v9
        },
        dictionary: {
          es: {
            singular: "Cambiar al plan {PLAN}"
          },
          "de-DE": {
            singular: "Downgrade auf den {PLAN}-Plan"
          },
          "fr-FR": {
            singular: "Rétrograder vers le forfait {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN} プランにダウングレード"
          },
          "ko-KR": {
            singular: "{PLAN} 플랜으로 다운그레이드"
          },
          "pt-BR": {
            singular: "Rebaixar para o plano {PLAN}"
          },
          "zh-CN": {
            singular: "降级到 {PLAN} 计划"
          }
        }
      }),
      _v36 = (0, _v22.translate)({
        singular: "Downgrade to {PLAN}",
        replacements: {
          PLAN: _v9
        },
        dictionary: {
          es: {
            singular: "Cambiar a {PLAN}"
          },
          "de-DE": {
            singular: "Auf {PLAN} herabstufen"
          },
          "fr-FR": {
            singular: "Rétrograder vers {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN}にダウングレード"
          },
          "ko-KR": {
            singular: "{PLAN}으로 다운그레이드"
          },
          "pt-BR": {
            singular: "Rebaixar para {PLAN}"
          },
          "zh-CN": {
            singular: "降级到 {PLAN}"
          }
        }
      });
    return (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: _v30,
      size: ["full", "md"],
      scrollBehavior: "inside",
      children: [(0, _v1.jsx)(_v14.ModalOverlay, {}), (0, _v1.jsxs)(_v11.ModalContent, {
        containerProps: {
          padding: {
            base: "0 !important"
          }
        },
        maxW: {
          base: "100vw",
          md: "560px"
        },
        width: {
          base: "100vw",
          md: "560px"
        },
        height: {
          base: "100dvh",
          md: "auto"
        },
        minH: {
          base: "100dvh",
          md: "auto"
        },
        maxH: {
          base: "100dvh",
          md: "90vh"
        },
        borderRadius: {
          base: "0",
          md: "16px"
        },
        margin: {
          base: "0",
          md: "auto"
        },
        children: [(0, _v1.jsx)(_v13.ModalHeader, {
          paddingLeft: {
            base: "6",
            md: (0, _v17.rem)(60)
          },
          paddingRight: "64px",
          paddingBottom: "12px",
          children: (0, _v1.jsx)(_v7.Header, {
            size: "md",
            textAlign: "left",
            children: (0, _v22.translate)({
              singular: "Are you sure you want to downgrade to {PLAN}?",
              replacements: {
                PLAN: _v9
              },
              dictionary: {
                es: {
                  singular: "¿Está seguro de que desea degradar su plan a {PLAN}?"
                },
                "de-DE": {
                  singular: "Möchten Sie wirklich auf {PLAN} herabstufen?"
                },
                "fr-FR": {
                  singular: "Êtes-vous sûr de vouloir rétrograder vers {PLAN}?"
                },
                "ja-JP": {
                  singular: "本当に{PLAN}へダウングレードしてもよろしいですか？"
                },
                "ko-KR": {
                  singular: "정말로 {PLAN}으로 다운그레이드하시겠습니까?"
                },
                "pt-BR": {
                  singular: "Tem certeza de que deseja fazer o downgrade para {PLAN}?"
                },
                "zh-CN": {
                  singular: "您确定要降级到 {PLAN}吗？"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v10.ModalCloseButton, {
          top: "20px",
          right: "20px",
          onClick: _v30
        }), (0, _v1.jsx)(_v9.ModalBody, {
          paddingX: "0",
          paddingTop: "12px",
          overflowY: "auto",
          children: "loss" === _v19 ? (0, _v1.jsx)(_v3.Box, {
            backgroundColor: "rgba(229, 62, 62, 0.08)",
            paddingX: "24px",
            paddingY: "32px",
            children: (0, _v1.jsxs)(_v15.Stack, {
              spacing: "4",
              width: "100%",
              children: [(0, _v1.jsx)(_v16.Text, {
                variant: "heading-sm",
                children: _v29 ? (0, _v22.translate)({
                  singular: "Your downgrade takes effect immediately. You will lose access to",
                  dictionary: {
                    es: {
                      singular: "Su cambio de plan entra en vigor de inmediato. Perderá el acceso a"
                    },
                    "de-DE": {
                      singular: "Ihre Herabstufung tritt sofort in Kraft. Sie verlieren den Zugriff auf"
                    },
                    "fr-FR": {
                      singular: "Votre rétrogradation prend effet immédiatement. Vous perdrez l'accès à"
                    },
                    "ja-JP": {
                      singular: "ダウングレードは即時に適用されます。以下へのアクセス権が失われます"
                    },
                    "ko-KR": {
                      singular: "하향 조정은 즉시 적용됩니다. 다음 항목에 대한 접근 권한을 잃게 됩니다"
                    },
                    "pt-BR": {
                      singular: "A mudança para um plano inferior entra em vigor imediatamente. Você perderá acesso a"
                    },
                    "zh-CN": {
                      singular: "您的降级将立即生效。您将失去对"
                    }
                  }
                }) : (0, _v22.translate)({
                  singular: "At the end of the current billing cycle, you will lose access to",
                  dictionary: {
                    es: {
                      singular: "Al final del ciclo de facturación actual, perderás el acceso a"
                    },
                    "de-DE": {
                      singular: "Am Ende des laufenden Abrechnungszeitraums verlieren Sie den Zugriff auf"
                    },
                    "fr-FR": {
                      singular: "À la fin de la période de facturation en cours, vous perdrez l'accès à"
                    },
                    "ja-JP": {
                      singular: "現在の請求期間の終了時に、以下へのアクセスを失います"
                    },
                    "ko-KR": {
                      singular: "현재 청구 주기 종료 시 다음 항목에 대한 접근 권한을 잃게 됩니다"
                    },
                    "pt-BR": {
                      singular: "Ao final do ciclo de cobrança atual, você perderá acesso a"
                    },
                    "zh-CN": {
                      singular: "在当前计费周期结束时，您将失去对以下内容的访问权限"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v6.Grid, {
                gridTemplateColumns: {
                  base: "repeat(1, minmax(0, 1fr))",
                  md: "repeat(2, minmax(0, 1fr))"
                },
                columnGap: "4",
                rowGap: "2",
                width: "100%",
                children: _v33.map((_v0, _v1) => {
                  let _v2 = _v1 === _v34;
                  return (0, _v1.jsxs)(_v5.Flex, {
                    gap: "2",
                    align: "flex-start",
                    children: [!_v2 && (0, _v1.jsx)(_v18.CloseXCircleFilled, {
                      boxSize: "14px",
                      color: "status-destructive-primary",
                      marginTop: "2px"
                    }), (0, _v1.jsx)(_v16.Text, {
                      variant: "heading-xs",
                      color: _v2 ? "status-destructive-primary" : void 0,
                      children: _v0
                    })]
                  }, `feature-${_v1}-${_v0}`);
                })
              })]
            })
          }) : (0, _v1.jsx)(_v32, {
            planName: _v9,
            planData: _v11,
            billingPeriod: _v4.billingPeriod,
            renewalDate: _v4.renewalDate,
            isImmediate: _v29,
            ctaLabel: _v36
          })
        }), (0, _v1.jsx)(_v12.ModalFooter, {
          paddingTop: "loss" === _v19 ? "20px" : "0",
          paddingBottom: "24px",
          paddingX: {
            base: "6",
            md: (0, _v17.rem)(60)
          },
          children: "loss" === _v19 ? (0, _v1.jsxs)(_v15.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v4.Button, {
              onClick: _v30,
              size: "md",
              variant: "primary",
              width: "100%",
              children: (0, _v22.translate)({
                singular: "Keep {PLAN} plan",
                replacements: {
                  PLAN: _v5
                },
                dictionary: {
                  es: {
                    singular: "Mantener el plan {PLAN}"
                  },
                  "de-DE": {
                    singular: "Beim {PLAN}-Plan bleiben"
                  },
                  "fr-FR": {
                    singular: "Conserver le forfait {PLAN}"
                  },
                  "ja-JP": {
                    singular: "{PLAN} プランを維持"
                  },
                  "ko-KR": {
                    singular: "{PLAN} 플랜 유지"
                  },
                  "pt-BR": {
                    singular: "Manter o plano {PLAN}"
                  },
                  "zh-CN": {
                    singular: "保留 {PLAN} 计划"
                  }
                }
              })
            }), (0, _v1.jsx)(_v4.Button, {
              onClick: _v31,
              size: "md",
              variant: "destructive",
              width: "100%",
              children: _v35
            })]
          }) : (0, _v1.jsxs)(_v15.Stack, {
            spacing: "3",
            width: "100%",
            children: [(0, _v1.jsx)(_v4.Button, {
              onClick: _v32,
              size: "md",
              variant: "primary",
              width: "100%",
              isLoading: _v17,
              disabled: _v17,
              children: _v36
            }), (0, _v1.jsx)(_v4.Button, {
              onClick: _v30,
              size: "md",
              variant: "secondary",
              width: "100%",
              children: (0, _v22.translate)({
                singular: "No thanks",
                dictionary: {
                  es: {
                    singular: "No, gracias"
                  },
                  "de-DE": {
                    singular: "Nein, danke"
                  },
                  "fr-FR": {
                    singular: "Non merci"
                  },
                  "ja-JP": {
                    singular: "いいえ、結構です"
                  },
                  "ko-KR": {
                    singular: "괜찮습니다"
                  },
                  "pt-BR": {
                    singular: "Não, obrigado"
                  },
                  "zh-CN": {
                    singular: "不用，谢谢"
                  }
                }
              })
            })]
          })
        })]
      })]
    });
  }], 0);
}