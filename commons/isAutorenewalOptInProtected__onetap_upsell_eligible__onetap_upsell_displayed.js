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
    _v19 = _v0.i(0);
  async function _v20({
    data: _v0,
    error: _v1
  }) {
    try {
      if (_v1) {
        let _v0 = _v1.res,
          _v1 = _v0 ? await _v0.clone().json().catch(() => null) : null;
        return (0, _v19.getDeclineMessage)((0, _v19.parseGatewayDeclineCode)(_v1?.error ?? _v1.message));
      }
      if (_v0?.error) return (0, _v19.getDeclineMessage)((0, _v19.parseGatewayDeclineCode)(_v0.error));
      if (_v0?.shouldBlockPurchase) return (0, _v19.getErrorMessage)(_v19.ERROR_TYPE.SIFT_ERROR);
      return null;
    } catch {
      return (0, _v19.getDeclineMessage)();
    }
  }
  var _v21 = _v0.i(0);
  function _v22(_v0) {
    return _v0?.country === "US" && !!_v0.postalCode && (0, _v21.isZipCodeIsRequiredAutorenewalOptInRange)(_v0.postalCode.trim().slice(0, 5));
  }
  _v0.s(["isAutorenewalOptInProtected", 0, _v22], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  let _v25 = (_v0, _v1) => ({
      tier: _v0.tier,
      periodicity: _v0.periodicity,
      is_free_trial: _v0.isFreeTrial ?? !1,
      ...(0, _v23.readStoredPaywallContext)(),
      ..._v1
    }),
    _v26 = () => {
      let _v0 = (0, _v24.usePico)(),
        _v1 = (0, _v2.useCallback)(_v0 => {
          _v0.track("onetap_upsell_eligible", _v25(_v0));
        }, [_v0]),
        _v2 = (0, _v2.useCallback)(_v0 => {
          _v0.track("onetap_upsell_displayed", _v25(_v0));
        }, [_v0]);
      return {
        trackOneTapEligible: _v1,
        trackOneTapDisplayed: _v2,
        trackOneTapPurchaseButtonClicked: (0, _v2.useCallback)(_v0 => {
          _v0.track("onetap_upsell_purchase_button_clicked", _v25(_v0));
        }, [_v0]),
        trackOneTapCheckoutRedirect: (0, _v2.useCallback)((_v0, _v1) => {
          _v0.track("onetap_upsell_checkout_redirect", _v25(_v0, {
            reason: _v1
          }));
        }, [_v0])
      };
    };
  _v0.s(["useOneTapUpsellTracking", 0, _v26], 0);
  let _v27 = _v0 => _v0 => (0, _v1.jsx)(_v8.Link, {
    href: _v0,
    color: "fill-brand",
    children: _v0
  });
  _v0.s(["UpsellCard", 0, function ({
    plan: _v0,
    displayName: _v1,
    quota: _v2,
    title: _v3,
    subtitle: _v4,
    isModal: _v5 = !1,
    ctaLabel: _v6,
    showSavedCard: _v7 = !0,
    isMonthly: _v8,
    isFreeTrial: _v9,
    continueLabel: _v10,
    next: _v11,
    checkoutTracking: _v12,
    accountRequiresOptIn: _v13,
    accountGateLoading: _v14,
    subscriptionId: _v15,
    freshPurchase: _v16,
    onUpgrade: _v17,
    onContinue: _v18,
    isLocked: _v19,
    onChargingChange: _v20,
    isUpgrading: _v21
  }) {
    let _v22 = (0, _v17.useViewer)(),
      {
        data: _v23,
        isLoading: _v24
      } = (0, _v12.useGetMePaymentMethods)({
        select: _v21.PAYMENT_METHOD_FIELDS,
        query: {
          showDisabled: !1
        }
      }),
      _v25 = (_v23?.data ?? []).filter(_v0 => (0, _v21.filterSavedPaymentMethods)(_v0) && (!_v16 || (0, _v21.isInPlaceChargeable)(_v0))),
      _v26 = (_v25.find(_v0 => _v0.isDefault) ?? _v25[0])?.id,
      [_v27, _v28] = (0, _v2.useState)(void 0),
      _v29 = _v27 ?? _v26,
      _v30 = (_v8 ? _v0.id?.monthly : _v0.id?.annual) ?? void 0,
      [_v31, _v32] = (0, _v11.usePostMeOrdersSubscription)(),
      [_v33, _v34] = (0, _v2.useState)(!1),
      {
        trackCheckoutPurchaseButtonClicked: _v35,
        trackCheckoutFailed: _v36,
        trackUserConverted: _v37
      } = (0, _v14.useCheckoutTracking)(),
      {
        trackOneTapDisplayed: _v38,
        trackOneTapPurchaseButtonClicked: _v39,
        trackOneTapCheckoutRedirect: _v40
      } = _v26(),
      _v41 = {
        tier: String(_v0.tier),
        periodicity: _v8 ? "monthly" : "annual",
        isFreeTrial: _v9
      },
      _v42 = (0, _v2.useRef)(_v41);
    (0, _v2.useEffect)(() => {
      _v42.current = _v41;
    });
    let _v43 = (_v0, _v1) => {
        _v0 ? (_v36({
          ..._v41,
          error_message: _v0
        }), _v40(_v41, "charge_declined"), _v20(!0), window.location.assign((0, _v14.buildCheckoutUrl)({
          ..._v12,
          tier: _v0.tier,
          isMonthly: _v8,
          postCheckoutUrl: _v11
        }))) : (_v34(!0), _v37(_v41), _v17(_v1));
      },
      _v44 = (0, _v2.useRef)(_v43);
    (0, _v2.useEffect)(() => {
      _v44.current = _v43;
    });
    let _v45 = _v24 || _v14,
      _v46 = !_v45 && 0 === _v25.length,
      _v47 = !!_v15 || !!_v16,
      _v48 = !_v45 && (!_v47 || !_v30),
      _v49 = _v25.find(_v0 => _v0.id === _v29),
      _v50 = _v22(_v49?.card?.billingAddress),
      _v51 = _v13 || _v46 || _v50 || _v48,
      _v52 = _v7 && !_v13 && _v25.length > 0,
      _v53 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v53.current || _v45 || _v51 || (_v53.current = !0, _v38(_v42.current));
    }, [_v45, _v51, _v38]);
    let _v54 = _v16?.state ?? _v32,
      {
        called: _v55,
        loading: _v56,
        data: _v57,
        error: _v58
      } = _v54;
    (0, _v2.useEffect)(() => {
      if (!_v55 || _v56) return;
      let _v0 = !1;
      return _v20({
        data: _v57,
        error: _v58
      }).then(_v0 => {
        _v0 || _v44.current(_v0, _v57?.orderId ?? _v57?.id);
      }), () => {
        _v0 = !0;
      };
    }, [_v55, _v56, _v57, _v58]);
    let _v59 = (0, _v16.isUkLocation)(_v22?.location),
      _v60 = _v0.currency?.currencyCode || "USD",
      _v61 = _v0 => _v59 ? (0, _v16.formatUkVatPrice)(_v0, _v60) : void 0,
      _v62 = _v61(_v8 ? _v0.price?.monthly : _v0.price?.annualMonthly),
      _v63 = _v61(_v8 ? _v0.price?.monthly : _v0.price?.annual),
      _v64 = _v62 && _v63 ? (0, _v13.translate)({
        singular: "incl. 20% VAT",
        dictionary: {
          es: {
            singular: "incl. 20% IVA"
          },
          "de-DE": {
            singular: "inkl. 20% MwSt."
          },
          "fr-FR": {
            singular: "incl. 20 % TVA"
          },
          "ja-JP": {
            singular: "付加価値税（20%）を含む"
          },
          "ko-KR": {
            singular: "부가가치세 20% 포함"
          },
          "zh-CN": {
            singular: "含 20% 增值税"
          }
        }
      }) : (0, _v13.translate)({
        singular: "plus tax",
        dictionary: {
          es: {
            singular: "Más impuestos"
          },
          "de-DE": {
            singular: "zzgl. Steuern"
          },
          "fr-FR": {
            singular: "Taxes en sus"
          },
          "ja-JP": {
            singular: "税別"
          },
          "ko-KR": {
            singular: "세금 별도"
          },
          "pt-BR": {
            singular: "Mais impostos"
          },
          "zh-CN": {
            singular: "加税"
          }
        }
      }),
      _v65 = _v62 ?? (_v8 ? _v0.priceFormatted?.monthly : _v0.priceFormatted?.annualMonthly) ?? "",
      _v66 = _v63 ?? (_v8 ? _v0.priceFormatted?.monthly : _v0.priceFormatted?.annual) ?? "",
      _v67 = _v8 ? (0, _v13.translate)({
        singular: "per month, billed monthly",
        dictionary: {
          es: {
            singular: "por mes, facturado mensualmente"
          },
          "de-DE": {
            singular: "pro Monat, monatlich abgerechnet"
          },
          "fr-FR": {
            singular: "par mois, facturé mensuellement"
          },
          "ja-JP": {
            singular: "月額（毎月請求）"
          },
          "ko-KR": {
            singular: "월별, 매월 청구"
          },
          "pt-BR": {
            singular: "por mês, cobrado mensalmente"
          },
          "zh-CN": {
            singular: "每月，按月计费"
          }
        }
      }) : (0, _v13.translate)({
        singular: "per month, billed annually",
        dictionary: {
          es: {
            singular: "al mes facturados anualmente"
          },
          "de-DE": {
            singular: "pro Monat, mit jährlicher Abrechnung"
          },
          "fr-FR": {
            singular: "par mois, facturé annuellement"
          },
          "ja-JP": {
            singular: "/月、年払い"
          },
          "ko-KR": {
            singular: "매월, 연간 결제"
          },
          "pt-BR": {
            singular: "por mês, cobrança anual"
          },
          "zh-CN": {
            singular: "每月，按年计费"
          }
        }
      }),
      _v68 = _v3 ?? (0, _v13.translate)({
        singular: "Do more with {PLAN}",
        replacements: {
          PLAN: _v1
        },
        dictionary: {
          es: {
            singular: "Haga más con {PLAN}"
          },
          "de-DE": {
            singular: "Mehr erreichen mit {PLAN}"
          },
          "fr-FR": {
            singular: "Faites-en plus avec {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN}でさらにできること"
          },
          "ko-KR": {
            singular: "{PLAN}으로 더 많은 기능을 이용해 보세요"
          },
          "pt-BR": {
            singular: "Faça mais com {PLAN}"
          },
          "zh-CN": {
            singular: "通过 {PLAN} 实现更多功能"
          }
        }
      }),
      _v69 = _v51 ? (0, _v13.translate)({
        singular: "Go to checkout",
        dictionary: {
          es: {
            singular: "Ir al pago"
          },
          "de-DE": {
            singular: "Zur Kasse"
          },
          "fr-FR": {
            singular: "Passer au paiement"
          },
          "ja-JP": {
            singular: "チェックアウトへ進む"
          },
          "ko-KR": {
            singular: "결제하기"
          },
          "pt-BR": {
            singular: "Ir para o checkout"
          },
          "zh-CN": {
            singular: "前往结账"
          }
        }
      }) : _v6 || (_v8 ? (0, _v13.translate)({
        singular: "Upgrade and pay {PRICE}/month",
        replacements: {
          PRICE: _v66
        },
        dictionary: {
          es: {
            singular: "Actualiza y paga {PRICE}/mes"
          },
          "de-DE": {
            singular: "Upgrade durchführen und {PRICE}/Monat bezahlen"
          },
          "fr-FR": {
            singular: "Mettez à niveau et payez {PRICE}/mois"
          },
          "ja-JP": {
            singular: "アップグレードして{PRICE}/月をお支払いください"
          },
          "ko-KR": {
            singular: "업그레이드하고 {PRICE}/월 결제"
          },
          "pt-BR": {
            singular: "Atualize e pague {PRICE}/mês"
          },
          "zh-CN": {
            singular: "升级并支付 {PRICE}/月"
          }
        }
      }) : (0, _v13.translate)({
        singular: "Upgrade and pay {PRICE}/year",
        replacements: {
          PRICE: _v66
        },
        dictionary: {
          es: {
            singular: "Actualiza y paga {PRICE}/año"
          },
          "de-DE": {
            singular: "Upgrade durchführen und {PRICE}/Jahr bezahlen"
          },
          "fr-FR": {
            singular: "Mettez à niveau et payez {PRICE}/an"
          },
          "ja-JP": {
            singular: "アップグレードして{PRICE}/年をお支払いください"
          },
          "ko-KR": {
            singular: "업그레이드하고 {PRICE}/년 결제"
          },
          "pt-BR": {
            singular: "Atualize e pague {PRICE}/ano"
          },
          "zh-CN": {
            singular: "升级并支付 {PRICE}/年"
          }
        }
      })),
      _v70 = function ({
        isMonthly: _v0,
        isFreeTrial: _v1,
        planName: _v2,
        amount: _v3,
        tax: _v4
      }) {
        let _v5 = {
          PLAN: _v2,
          AMOUNT: _v3,
          TAX: _v4,
          BILLING_SETTINGS_LINK: _v27("/settings/account/subscription"),
          TOS_LINK: _v27("/terms"),
          PRIVACY_LINK: _v27("/privacy")
        };
        return _v1 ? _v0 ? (0, _v13.translate)({
          singular: "By completing this purchase, your free trial ends now and your monthly {PLAN} subscription starts. You'll be charged {AMOUNT}/month ({TAX}) today and again every month unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Prices may change. If you cancel or downgrade, you may lose access to some content or features, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, su prueba gratuita finaliza ahora y comienza su suscripción mensual {PLAN}. Se le cobrará {AMOUNT}/mes ({TAX}) hoy y nuevamente cada mes, a menos que cancele en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancela o cambia a un plan inferior, puede perder el acceso a parte del contenido o de las funciones, y parte del contenido puede eliminarse. También acepta los {TOS_LINK}Términos del servicio{/TOS_LINK} y la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Durch den Abschluss dieses Kaufs endet Ihre kostenlose Testphase sofort und Ihr monatliches {PLAN}-Abonnement beginnt. Ihnen wird heute {AMOUNT}/Monat ({TAX}) berechnet und erneut jeden Monat, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Preise können sich ändern. Wenn Sie kündigen oder downgraden, können Sie den Zugang zu bestimmten Inhalten oder Funktionen verlieren, und einige Inhalte können gelöscht werden. Sie stimmen außerdem den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} und der {PRIVACY_LINK}Datenschutzerklärung{/PRIVACY_LINK} zu."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, votre période d'essai gratuite prend fin et votre abonnement mensuel {PLAN} commence. Vous serez facturé {AMOUNT}/mois ({TAX}) aujourd'hui et de nouveau chaque mois, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les prix peuvent changer. Si vous annulez ou rétrogradez, vous pouvez perdre l'accès à certains contenus ou fonctionnalités, et certains contenus peuvent être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、無料トライアルは即時終了し、月額の{PLAN}サブスクリプションが開始されます。本日（{AMOUNT}/月（{TAX}））が請求され、以後毎月請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り課金されます。価格は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、コンテンツが削除されたりすることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を確認したものとします。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 무료 체험이 즉시 종료되고 월간 {PLAN} 구독이 시작됩니다. 오늘 및 이후 매월 {AMOUNT}/월({TAX})이 청구됩니다. 갱신 최소 1일 전에 {BILLING_SETTINGS_LINK}청구 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않으면 계속 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드할 경우 일부 콘텐츠나 기능에 대한 접근을 잃거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}서비스 약관{/TOS_LINK}에 동의하고 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인합니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, seu período de avaliação gratuito termina agora e sua assinatura mensal {PLAN} começa. Você será cobrado {AMOUNT}/mês ({TAX}) hoje e novamente todo mês, a menos que cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} pelo menos 1 dia antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, poderá perder o acesso a algum conteúdo ou recurso, e parte do conteúdo poderá ser excluída. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成本次购买后，您的免费试用将立即结束，并开始生效每月 {PLAN} 订阅。您将在今天被收取 {AMOUNT}/月（{TAX}），此后每月自动收取，除非您至少在续订前 1 天在 {BILLING_SETTINGS_LINK}账单设置{/BILLING_SETTINGS_LINK} 中取消。价格可能会变动。如您取消或降级，您可能会失去对部分内容或功能的访问权，且部分内容可能被删除。您同时同意 {TOS_LINK}服务条款{/TOS_LINK} 并已阅读 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        }) : (0, _v13.translate)({
          singular: "By completing this purchase, your free trial ends now and your annual {PLAN} subscription starts. You'll be charged {AMOUNT}/year ({TAX}) today and again every year unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Prices may change. If you cancel or downgrade, you may lose access to some content or features, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, su prueba gratuita finaliza ahora y comienza su suscripción anual {PLAN}. Se le cobrará {AMOUNT}/año ({TAX}) hoy y nuevamente cada año, a menos que cancele en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancela o cambia a un plan inferior, puede perder el acceso a parte del contenido o de las funciones, y parte del contenido puede eliminarse. También acepta los {TOS_LINK}Términos del servicio{/TOS_LINK} y la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Durch den Abschluss dieses Kaufs endet Ihre kostenlose Testphase sofort und Ihr jährliches {PLAN}-Abonnement beginnt. Ihnen wird heute {AMOUNT}/Jahr ({TAX}) berechnet und erneut jedes Jahr, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Preise können sich ändern. Wenn Sie kündigen oder downgraden, können Sie den Zugang zu bestimmten Inhalten oder Funktionen verlieren, und einige Inhalte können gelöscht werden. Sie stimmen außerdem den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} und der {PRIVACY_LINK}Datenschutzerklärung{/PRIVACY_LINK} zu."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, votre période d'essai gratuite prend fin et votre abonnement annuel {PLAN} commence. Vous serez facturé {AMOUNT}/an ({TAX}) aujourd'hui et de nouveau chaque année, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les prix peuvent changer. Si vous annulez ou rétrogradez, vous pouvez perdre l'accès à certains contenus ou fonctionnalités, et certains contenus peuvent être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、無料トライアルは即時終了し、年額の{PLAN}サブスクリプションが開始されます。本日（{AMOUNT}/年（{TAX}））が請求され、以後毎年請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り課金されます。価格は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、コンテンツが削除されたりすることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を確認したものとします。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 무료 체험이 즉시 종료되고 연간 {PLAN} 구독이 시작됩니다. 오늘 및 이후 매년 {AMOUNT}/년({TAX})이 청구됩니다. 갱신 최소 1일 전에 {BILLING_SETTINGS_LINK}청구 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않으면 계속 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드할 경우 일부 콘텐츠나 기능에 대한 접근을 잃거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}서비스 약관{/TOS_LINK}에 동의하고 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인합니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, seu período de avaliação gratuito termina agora e sua assinatura anual {PLAN} começa. Você será cobrado {AMOUNT}/ano ({TAX}) hoje e novamente a cada ano, a menos que cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} pelo menos 1 dia antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, poderá perder o acesso a algum conteúdo ou recurso, e parte do conteúdo poderá ser excluída. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成本次购买后，您的免费试用将立即结束，并开始生效年度 {PLAN} 订阅。您将在今天被收取 {AMOUNT}/年（{TAX}），此后每年自动收取，除非您至少在续订前 1 天在 {BILLING_SETTINGS_LINK}账单设置{/BILLING_SETTINGS_LINK} 中取消。价格可能会变动。如您取消或降级，您可能会失去对部分内容或功能的访问权，且部分内容可能被删除。您同时同意 {TOS_LINK}服务条款{/TOS_LINK} 并已阅读 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        }) : _v0 ? (0, _v13.translate)({
          singular: "By completing this purchase, you are enrolling in a monthly auto-renewing {PLAN} subscription at {AMOUNT}/month ({TAX}), charged today and every month thereafter unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and acknowledge the {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, se está inscribiendo en una suscripción mensual {PLAN} con renovación automática por {AMOUNT}/mes ({TAX}), cobrada hoy y cada mes a partir de entonces, a menos que cancele en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancela o cambia a un plan inferior, parte del contenido o las funciones pueden dejar de estar disponibles y parte del contenido puede eliminarse. También acepta los {TOS_LINK}Términos del servicio{/TOS_LINK} y reconoce la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Mit Abschluss dieses Kaufs schließen Sie ein monatlich automatisch verlängerndes {PLAN}-Abonnement zum Preis von {AMOUNT}/Monat ({TAX}) ab. Die Zahlung wird heute und anschließend jeden Monat fällig, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Preise können sich ändern. Wenn Sie kündigen oder downgraden, sind möglicherweise bestimmte Inhalte oder Funktionen nicht mehr verfügbar, und einige Inhalte können gelöscht werden. Sie stimmen außerdem den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} zu und erkennen die {PRIVACY_LINK}Datenschutzerklärung{/PRIVACY_LINK} an."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, vous vous abonnez au {PLAN} mensuel à renouvellement automatique au tarif de {AMOUNT}/mois ({TAX}), facturé aujourd'hui puis chaque mois par la suite, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les prix peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et reconnaissez la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、{PLAN}の月額自動更新サブスクリプション（{AMOUNT}/月（{TAX}））に加入します。料金は本日および以後毎月請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り課金されます。料金は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、コンテンツが削除されたりすることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を確認したものとします。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 {AMOUNT}/월({TAX})의 요금으로 매달 자동 갱신되는 월간 {PLAN} 구독에 가입되며, 오늘 및 이후 매월 요금이 청구됩니다. 갱신 최소 1일 전에 {BILLING_SETTINGS_LINK}청구 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않으면 계속 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드할 경우 일부 콘텐츠나 기능에 대한 접근이 불가능해지거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}서비스 약관{/TOS_LINK}에 동의하고 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인합니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, você está se inscrevendo em uma assinatura mensal {PLAN} com renovação automática no valor de {AMOUNT}/mês ({TAX}), cobrada hoje e todo mês subsequente, a menos que você cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} pelo menos 1 dia antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, algum conteúdo ou recurso pode não estar mais disponível, e parte do conteúdo pode ser excluído. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e reconhece a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成本次购买后，您将订阅每月自动续订的 {PLAN}，费用为 {AMOUNT}/月（{TAX}），将在今天及此后每月收取，除非您至少在续订前 1 天在 {BILLING_SETTINGS_LINK}账单设置{/BILLING_SETTINGS_LINK} 中取消。价格可能会变动。如您取消或降级，某些内容或功能可能不再可用，且部分内容可能被删除。您同时同意 {TOS_LINK}服务条款{/TOS_LINK} 并已阅读 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        }) : (0, _v13.translate)({
          singular: "By completing this purchase, you are enrolling in an annual auto-renewing {PLAN} subscription at {AMOUNT}/year ({TAX}), charged today and every year thereafter unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and acknowledge the {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, se está inscribiendo en una suscripción anual {PLAN} con renovación automática por {AMOUNT}/año ({TAX}), cobrada hoy y cada año a partir de entonces, a menos que cancele en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancela o cambia a un plan inferior, parte del contenido o las funciones pueden dejar de estar disponibles y parte del contenido puede eliminarse. También acepta los {TOS_LINK}Términos del servicio{/TOS_LINK} y reconoce la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Mit Abschluss dieses Kaufs schließen Sie ein jährlich automatisch verlängerndes {PLAN}-Abonnement zum Preis von {AMOUNT}/Jahr ({TAX}) ab. Die Zahlung wird heute und anschließend jedes Jahr fällig, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Preise können sich ändern. Wenn Sie kündigen oder downgraden, sind möglicherweise bestimmte Inhalte oder Funktionen nicht mehr verfügbar, und einige Inhalte können gelöscht werden. Sie stimmen außerdem den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} zu und erkennen die {PRIVACY_LINK}Datenschutzerklärung{/PRIVACY_LINK} an."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, vous vous abonnez au {PLAN} annuel à renouvellement automatique au tarif de {AMOUNT}/an ({TAX}), facturé aujourd'hui puis chaque année par la suite, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les prix peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et reconnaissez la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、{PLAN}の年額自動更新サブスクリプション（{AMOUNT}/年（{TAX}））に加入します。料金は本日および以後毎年請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り課金されます。料金は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、コンテンツが削除されたりすることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を確認したものとします。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 {AMOUNT}/년({TAX})의 요금으로 매년 자동 갱신되는 연간 {PLAN} 구독에 가입되며, 오늘 및 이후 매년 요금이 청구됩니다. 갱신 최소 1일 전에 {BILLING_SETTINGS_LINK}청구 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않으면 계속 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 다운그레이드할 경우 일부 콘텐츠나 기능에 대한 접근이 불가능해지거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}서비스 약관{/TOS_LINK}에 동의하고 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인합니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, você está se inscrevendo em uma assinatura anual {PLAN} com renovação automática no valor de {AMOUNT}/ano ({TAX}), cobrada hoje e todo ano subsequente, a menos que você cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} pelo menos 1 dia antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, algum conteúdo ou recurso pode não estar mais disponível, e parte do conteúdo pode ser excluído. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e reconhece a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成本次购买后，您将订阅每年自动续订的 {PLAN}，费用为 {AMOUNT}/年（{TAX}），将在今天及此后每年收取，除非您至少在续订前 1 天在 {BILLING_SETTINGS_LINK}账单设置{/BILLING_SETTINGS_LINK} 中取消。价格可能会变动。如您取消或降级，某些内容或功能可能不再可用，且部分内容可能被删除。您同时同意 {TOS_LINK}服务条款{/TOS_LINK} 并已阅读 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        });
      }({
        isMonthly: _v8,
        isFreeTrial: _v9,
        planName: _v1,
        amount: _v66,
        tax: _v64
      });
    return (0, _v1.jsxs)(_v4.Box, {
      width: "100%",
      maxWidth: _v5 ? "100%" : (0, _v10.rem)(540),
      overflow: "hidden",
      backgroundColor: "surface",
      color: "text-primary",
      borderRadius: _v5 ? (0, _v10.rem)(24) : {
        base: "0",
        md: (0, _v10.rem)(24)
      },
      borderStyle: "solid",
      borderWidth: _v5 ? 0 : {
        base: 0,
        md: "2px"
      },
      borderColor: "upsell-primary",
      children: [_v5 ? null : (0, _v1.jsx)(_v6.Flex, {
        display: {
          base: "none",
          md: "flex"
        },
        backgroundColor: "upsell-primary",
        color: "white",
        justifyContent: "center",
        paddingY: (0, _v10.rem)(6),
        paddingX: (0, _v10.rem)(24),
        children: (0, _v1.jsx)(_v9.Text, {
          variant: "body-md",
          fontWeight: "medium",
          children: (0, _v13.translate)({
            singular: "Recommended",
            dictionary: {
              es: {
                singular: "Recomendado"
              },
              "de-DE": {
                singular: "Empfohlen"
              },
              "fr-FR": {
                singular: "Recommandé"
              },
              "ja-JP": {
                singular: "おすすめ"
              },
              "ko-KR": {
                singular: "추천"
              },
              "pt-BR": {
                singular: "Recomendados"
              },
              "zh-CN": {
                singular: "推荐"
              }
            }
          })
        })
      }), (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        gap: (0, _v10.rem)(32),
        paddingTop: _v5 ? (0, _v10.rem)(40) : {
          base: "0",
          md: (0, _v10.rem)(24)
        },
        paddingX: _v5 ? (0, _v10.rem)(32) : {
          base: "0",
          md: (0, _v10.rem)(24)
        },
        paddingBottom: _v5 ? (0, _v10.rem)(32) : {
          base: "0",
          md: (0, _v10.rem)(24)
        },
        children: [(0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          gap: (0, _v10.rem)(20),
          children: [(0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v3.Badge, {
              variant: "upgrade",
              size: "sm",
              display: _v5 ? "inline-flex" : {
                base: "inline-flex",
                md: "none"
              },
              alignSelf: "flex-start",
              children: (0, _v13.translate)({
                singular: "Recommended",
                dictionary: {
                  es: {
                    singular: "Recomendado"
                  },
                  "de-DE": {
                    singular: "Empfohlen"
                  },
                  "fr-FR": {
                    singular: "Recommandé"
                  },
                  "ja-JP": {
                    singular: "おすすめ"
                  },
                  "ko-KR": {
                    singular: "추천"
                  },
                  "pt-BR": {
                    singular: "Recomendados"
                  },
                  "zh-CN": {
                    singular: "推荐"
                  }
                }
              })
            }), (0, _v1.jsx)(_v7.Header, {
              size: {
                base: "lg",
                md: "xl"
              },
              children: _v68
            }), _v4 ? (0, _v1.jsx)(_v9.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v4
            }) : null]
          }), (0, _v1.jsxs)(_v6.Flex, {
            alignItems: "center",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v7.Header, {
              as: "span",
              size: {
                base: "xl",
                md: "2xl"
              },
              children: _v65
            }), (0, _v1.jsxs)(_v6.Flex, {
              direction: "column",
              color: "text-secondary",
              children: [(0, _v1.jsx)(_v9.Text, {
                as: "span",
                variant: "body-md",
                children: _v67
              }), (0, _v1.jsx)(_v9.Text, {
                as: "span",
                variant: "body-md",
                children: _v64
              })]
            })]
          }), _v2]
        }), (0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          gap: (0, _v10.rem)(16),
          children: [!_v45 && _v52 ? (0, _v1.jsx)(_v18.SavedCardSelect, {
            paymentMethods: _v25,
            paymentMethodId: _v29,
            onSelectPaymentMethod: _v28,
            disabled: _v19
          }) : null, (0, _v1.jsx)(_v9.Text, {
            variant: "body-sm",
            color: "text-primary",
            children: (0, _v1.jsx)("span", {
              children: _v70
            })
          }), (0, _v1.jsxs)(_v6.Flex, {
            direction: "column",
            gap: (0, _v10.rem)(8),
            children: [(0, _v1.jsx)(_v5.Button, {
              variant: "brand",
              size: "lg",
              onClick: () => {
                if (_v51 || !_v47 || !_v30 || !_v49) {
                  _v40(_v41, _v13 ? "account_opt_in_required" : _v46 ? "no_payment_method" : _v50 ? "selected_card_opt_in_protected" : _v47 && _v30 ? "no_card_selected" : "cannot_upgrade_in_place"), _v20(!0), window.location.assign((0, _v14.buildCheckoutUrl)({
                    ..._v12,
                    tier: _v0.tier,
                    isMonthly: _v8,
                    postCheckoutUrl: _v11
                  }));
                  return;
                }
                (_v35(_v41), _v39(_v41), _v20(!0), _v16 && !_v15) ? _v16.charge(_v30, _v49) : _v31({
                  select: ["id", "orderId", "status", "shouldBlockPurchase"],
                  where: {
                    subscriptionId: _v15
                  },
                  variables: {
                    type: "upgrade",
                    billingPlanId: _v30,
                    paymentMethodId: _v49.id
                  }
                });
              },
              isDisabled: _v19,
              isLoading: _v21 || _v45 || _v54.loading || _v33,
              children: _v69
            }), (0, _v1.jsx)(_v5.Button, {
              variant: "secondary",
              size: "lg",
              onClick: _v18,
              isDisabled: _v19,
              children: _v10
            }), _v5 ? (0, _v1.jsx)(_v5.Button, {
              variant: "tertiary",
              size: "lg",
              onClick: () => window.location.assign((0, _v15.buildUpgradePlanUrl)(_v12)),
              isDisabled: _v19,
              children: (0, _v13.translate)({
                singular: "See other plans",
                dictionary: {
                  es: {
                    singular: "Ver otros planes"
                  },
                  "de-DE": {
                    singular: "Weitere Pläne ansehen"
                  },
                  "fr-FR": {
                    singular: "Voir les autres forfaits"
                  },
                  "ja-JP": {
                    singular: "他のプランを見る"
                  },
                  "ko-KR": {
                    singular: "다른 요금제 보기"
                  },
                  "pt-BR": {
                    singular: "Ver outros planos"
                  },
                  "zh-CN": {
                    singular: "查看其他套餐"
                  }
                }
              })
            }) : null]
          })]
        })]
      })]
    });
  }], 0);
}