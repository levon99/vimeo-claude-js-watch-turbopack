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
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  function _v36({
    paymentMethods: _v0,
    paymentMethodId: _v1,
    onSelectPaymentMethod: _v2,
    disabled: _v3
  }) {
    let _v4 = _v0.find(_v0 => _v0.id === _v1);
    return (0, _v1.jsx)(_v26.Select, {
      "data-testid": "upsell-saved-card-select",
      disabled: _v3,
      leftIcon: _v4 ? _v37(_v4) : void 0,
      items: _v0.map(_v0 => ({
        value: _v0.id,
        label: _v38(_v0)
      })),
      value: _v1 ? [_v1] : void 0,
      onValueChange: _v0 => _v2(_v0.value[0]),
      children: _v0 => {
        let _v1 = _v0.find(_v0 => _v0.id === _v0.value);
        return (0, _v1.jsx)(_v26.SelectItem, {
          item: _v0,
          children: (0, _v1.jsxs)(_v7.Flex, {
            gap: "xs",
            alignItems: "center",
            children: [_v1 ? _v37(_v1) : null, (0, _v1.jsx)(_v26.SelectItemText, {
              children: _v0.label
            })]
          })
        });
      }
    });
  }
  let _v37 = _v0 => {
      if ("PAYMENT_METHOD_TYPES_PAYPAL" === _v0.type) return _v3.default.createElement(_v32.Paypal);
      switch (_v0.card?.brand) {
        case "CARD_BRAND_AMERICAN_EXPRESS":
          return _v3.default.createElement(_v28.Amex);
        case "CARD_BRAND_DISCOVER":
          return _v3.default.createElement(_v29.Discover);
        case "CARD_BRAND_JCB":
          return _v3.default.createElement(_v30.Jcb);
        case "CARD_BRAND_MASTER_CARD":
          return _v3.default.createElement(_v31.Mastercard);
        case "CARD_BRAND_UNION_PAY":
          return _v3.default.createElement(_v33.UnionPay);
        case "CARD_BRAND_VISA":
          return _v3.default.createElement(_v34.Visa);
        default:
          return _v3.default.createElement(_v27.CreditCard);
      }
    },
    _v38 = _v0 => {
      switch (_v0.type) {
        case "PAYMENT_METHOD_TYPES_PAYPAL":
          return "PayPal";
        case "PAYMENT_METHOD_TYPES_CC_REF":
          {
            let _v0 = new Date(_v0.createdAt).toISOString().split("T")[0];
            return `${(0, _v35.getCardBrandName)(_v0.card?.brand)} (Indian Bank Card) - Saved on ${_v0}`;
          }
        default:
          return `${_v0.card?.lastFourDigits} (${_v0.card?.expirationMonth}/${_v0.card?.expirationYear})`;
      }
    };
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  async function _v42({
    data: _v0,
    error: _v1
  }) {
    try {
      if (_v1) {
        let _v0 = _v1.res,
          _v1 = _v0 ? await _v0.clone().json().catch(() => null) : null;
        return (0, _v41.getDeclineMessage)((0, _v41.parseGatewayDeclineCode)(_v1?.error ?? _v1.message));
      }
      if (_v0?.error) return (0, _v41.getDeclineMessage)((0, _v41.parseGatewayDeclineCode)(_v0.error));
      if (_v0?.shouldBlockPurchase) return (0, _v41.getErrorMessage)(_v41.ERROR_TYPE.SIFT_ERROR);
      return null;
    } catch {
      return (0, _v41.getDeclineMessage)();
    }
  }
  function _v43(_v0) {
    return _v0?.country === "US" && !!_v0.postalCode && (0, _v40.isZipCodeIsRequiredAutorenewalOptInRange)(_v0.postalCode.trim().slice(0, 5));
  }
  var _v44 = _v0.i(0);
  let _v45 = (_v0, _v1) => {
    let _v2, _v3, _v4;
    return {
      tier: _v0.tier,
      periodicity: _v0.periodicity,
      is_free_trial: _v0.isFreeTrial ?? !1,
      ...(_v2 = new URLSearchParams(window.location.search), _v3 = _v0 => sessionStorage.getItem(_v0) ?? null, _v4 = _v0 => _v2?.get(_v0) || null, {
        paywall_id: _v3("paywall_id"),
        paywall_trigger: _v3("paywall_trigger") ?? _v4("paywall_trigger"),
        paywall_feature: _v3("paywall_feature") ?? _v4("paywall_feature"),
        paywall_location: _v3("paywall_location") ?? _v4("paywall_location")
      }),
      ..._v1
    };
  };
  function _v46({
    plan: _v0,
    displayName: _v1,
    isMonthly: _v2,
    isFreeTrial: _v3,
    continueLabel: _v4,
    next: _v5,
    checkoutTracking: _v6,
    accountRequiresOptIn: _v7,
    accountGateLoading: _v8,
    subscriptionId: _v9,
    onUpgrade: _v10,
    onContinue: _v11,
    isLocked: _v12,
    onChargingChange: _v13,
    isUpgrading: _v14
  }) {
    let _v15,
      {
        data: _v16,
        isLoading: _v17
      } = (0, _v23.useGetMePaymentMethods)({
        select: _v39.PAYMENT_METHOD_FIELDS,
        query: {
          showDisabled: !1
        }
      }),
      _v18 = (_v16?.data ?? []).filter(_v40.filterSavedPaymentMethods),
      _v19 = (_v18.find(_v0 => _v0.isDefault) ?? _v18[0])?.id,
      [_v20, _v21] = (0, _v3.useState)(void 0),
      _v22 = _v20 ?? _v19,
      _v23 = (_v2 ? _v0.id?.monthly : _v0.id?.annual) ?? void 0,
      [_v24, _v25] = (0, _v22.usePostMeOrdersSubscription)(),
      [_v26, _v27] = (0, _v3.useState)(void 0),
      [_v28, _v29] = (0, _v3.useState)(!1),
      {
        trackCheckoutPurchaseButtonClicked: _v30,
        trackCheckoutFailed: _v31,
        trackUserConverted: _v32
      } = (0, _v24.useCheckoutTracking)(),
      {
        trackOneTapPurchaseButtonClicked: _v33,
        trackOneTapCheckoutRedirect: _v34
      } = (_v15 = (0, _v44.usePico)(), {
        trackOneTapPurchaseButtonClicked: (0, _v3.useCallback)(_v0 => {
          _v15.track("onetap_upsell_purchase_button_clicked", _v45(_v0));
        }, [_v15]),
        trackOneTapCheckoutRedirect: (0, _v3.useCallback)((_v0, _v1) => {
          _v15.track("onetap_upsell_checkout_redirect", _v45(_v0, {
            reason: _v1
          }));
        }, [_v15])
      }),
      _v35 = {
        tier: String(_v0.tier),
        periodicity: _v2 ? "monthly" : "annual",
        isFreeTrial: _v3
      },
      _v36 = (_v0, _v1) => {
        _v0 ? (_v31({
          ..._v35,
          error_message: _v0
        }), _v27(_v0), _v13(!1)) : (_v29(!0), _v32(_v35), _v10(_v1));
      },
      _v37 = (0, _v3.useRef)(_v36);
    (0, _v3.useEffect)(() => {
      _v37.current = _v36;
    });
    let _v38 = _v17 || _v8,
      _v39 = !_v38 && 0 === _v18.length,
      _v40 = !_v38 && (!_v9 || !_v23),
      _v41 = _v18.find(_v0 => _v0.id === _v22),
      _v42 = _v43(_v41?.card?.billingAddress),
      _v43 = _v7 || _v39 || _v42 || _v40,
      _v44 = !_v7 && _v18.length > 0,
      {
        called: _v45,
        loading: _v46,
        data: _v47,
        error: _v48
      } = _v25;
    (0, _v3.useEffect)(() => {
      if (!_v45 || _v46) return;
      let _v0 = !1;
      return _v42({
        data: _v47,
        error: _v48
      }).then(_v0 => {
        _v0 || _v37.current(_v0, _v47?.orderId ?? _v47?.id);
      }), () => {
        _v0 = !0;
      };
    }, [_v45, _v46, _v47, _v48]);
    let _v49 = _v0.currency?.currencyCode === "GBP" ? (0, _v12.translate)({
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
      }) : (0, _v12.translate)({
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
      _v50 = (_v2 ? _v0.priceFormatted?.monthly : _v0.priceFormatted?.annualMonthly) ?? "",
      _v51 = (_v2 ? _v0.priceFormatted?.monthly : _v0.priceFormatted?.annual) ?? "",
      _v52 = _v2 ? (0, _v12.translate)({
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
            singular: "月額、毎月請求"
          },
          "ko-KR": {
            singular: "월별 요금(월별 청구)"
          },
          "pt-BR": {
            singular: "por mês, faturado mensalmente"
          },
          "zh-CN": {
            singular: "每月，按月计费"
          }
        }
      }) : (0, _v12.translate)({
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
      _v53 = (0, _v12.translate)({
        singular: "Do more with {PLAN}",
        replacements: {
          PLAN: _v1
        },
        dictionary: {
          es: {
            singular: "Haz más con {PLAN}"
          },
          "de-DE": {
            singular: "Mehr Möglichkeiten mit {PLAN}"
          },
          "fr-FR": {
            singular: "Faites-en plus avec {PLAN}"
          },
          "ja-JP": {
            singular: "{PLAN}でさらにできること"
          },
          "ko-KR": {
            singular: "{PLAN}으로 더 많은 기능 이용"
          },
          "pt-BR": {
            singular: "Faça mais com o {PLAN}"
          },
          "zh-CN": {
            singular: "使用 {PLAN} 获取更多功能"
          }
        }
      }),
      _v54 = _v43 ? (0, _v12.translate)({
        singular: "Go to checkout",
        dictionary: {
          es: {
            singular: "Ir al pago"
          },
          "de-DE": {
            singular: "Zur Kasse gehen"
          },
          "fr-FR": {
            singular: "Passer à la caisse"
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
      }) : _v2 ? (0, _v12.translate)({
        singular: "Upgrade and pay {PRICE}/month",
        replacements: {
          PRICE: _v51
        },
        dictionary: {
          es: {
            singular: "Actualiza y paga {PRICE}/mes"
          },
          "de-DE": {
            singular: "Upgrade und {PRICE}/Monat bezahlen"
          },
          "fr-FR": {
            singular: "Passez à la version supérieure et payez {PRICE}/mois"
          },
          "ja-JP": {
            singular: "アップグレードして {PRICE}/月 を支払う"
          },
          "ko-KR": {
            singular: "업그레이드하고 {PRICE}/월 결제"
          },
          "pt-BR": {
            singular: "Faça upgrade e pague {PRICE}/mês"
          },
          "zh-CN": {
            singular: "升级并支付 {PRICE}/month"
          }
        }
      }) : (0, _v12.translate)({
        singular: "Upgrade and pay {PRICE}/year",
        replacements: {
          PRICE: _v51
        },
        dictionary: {
          es: {
            singular: "Actualiza y paga {PRICE}/año"
          },
          "de-DE": {
            singular: "Upgrade und {PRICE}/Jahr bezahlen"
          },
          "fr-FR": {
            singular: "Passez à la version supérieure et payez {PRICE}/an"
          },
          "ja-JP": {
            singular: "アップグレードして {PRICE}/年 を支払う"
          },
          "ko-KR": {
            singular: "업그레이드하고 {PRICE}/년 결제"
          },
          "pt-BR": {
            singular: "Faça upgrade e pague {PRICE}/ano"
          },
          "zh-CN": {
            singular: "升级并支付 {PRICE}/year"
          }
        }
      }),
      _v55 = function ({
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
          BILLING_SETTINGS_LINK: _v47("/settings/account/subscription"),
          TOS_LINK: _v47("/terms"),
          PRIVACY_LINK: _v47("/privacy")
        };
        return _v1 ? _v0 ? (0, _v12.translate)({
          singular: "By completing this purchase, your free trial ends now and your monthly {PLAN} subscription starts. You'll be charged {AMOUNT}/month ({TAX}) today and again every month unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Prices may change. If you cancel or downgrade, you may lose access to some content or features, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, tu periodo de prueba gratuito finaliza ahora y comienza tu suscripción mensual {PLAN}. Se te cobrará {AMOUNT}/mes ({TAX}) hoy y nuevamente cada mes a menos que canceles en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancelas o cambias a un plan inferior, podrías perder acceso a algunos contenidos o funciones y parte del contenido podría ser eliminado. También aceptas los {TOS_LINK}Términos de servicio{/TOS_LINK} y la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Durch Abschluss dieses Kaufs endet Ihre kostenlose Testphase und Ihr monatliches {PLAN}-Abonnement beginnt. Ihnen werden heute {AMOUNT}/Monat ({TAX}) berechnet und danach monatlich erneut, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Die Preise können sich ändern. Wenn Sie kündigen oder Ihr Abonnement herabstufen, können Sie den Zugriff auf einige Inhalte oder Funktionen verlieren, und bestimmte Inhalte können gelöscht werden. Sie stimmen den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} zu und nehmen die {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} zur Kenntnis."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, votre période d'essai gratuite prend fin maintenant et votre abonnement mensuel {PLAN} commence. {AMOUNT}/mois ({TAX}) vous sera facturé aujourd'hui, puis de nouveau chaque mois, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les prix peuvent changer. Si vous annulez ou rétrogradez, vous pourriez perdre l'accès à certains contenus ou fonctionnalités, et certains contenus pourraient être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、無料トライアルは即時終了し、月額の{PLAN}サブスクリプションが開始されます。{AMOUNT}/月（{TAX}）が本日請求され、その後は毎月請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り継続して請求されます。価格は変更されることがあります。解約またはダウングレードした場合、一部のコンテンツや機能へのアクセスを失うことがあり、コンテンツが削除されることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}および{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}に同意するものとします。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 무료 체험이 즉시 종료되고 월간 {PLAN} 구독이 시작됩니다. 오늘 {AMOUNT}/월 ({TAX})이 청구되며 갱신 최소 1일 전까지 {BILLING_SETTINGS_LINK}결제 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않는 한 매월 다시 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 하위 요금제로 변경하면 일부 콘텐츠나 기능에 대한 접근 권한을 잃거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}이용 약관{/TOS_LINK} 및 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}에 동의합니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, seu período de teste gratuito termina agora e sua assinatura mensal {PLAN} começa. Você será cobrado {AMOUNT}/mês ({TAX}) hoje e novamente todo mês, a menos que cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} com pelo menos 1 dia de antecedência antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, pode perder acesso a algum conteúdo ou recursos, e alguns conteúdos podem ser excluídos. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成此次购买后，您的免费试用将立即结束，按月 {PLAN} 订阅将开始。今天将收取 {AMOUNT}/month ({TAX})，并在此后每月收取，除非您在续订前至少 1 天于 {BILLING_SETTINGS_LINK}计费设置{/BILLING_SETTINGS_LINK} 取消。价格可能变动。如果您取消或降级，您可能会失去对某些内容或功能的访问权，且部分内容可能被删除。您也同意 {TOS_LINK}服务条款{/TOS_LINK} 并已知悉 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        }) : (0, _v12.translate)({
          singular: "By completing this purchase, your free trial ends now and your annual {PLAN} subscription starts. You'll be charged {AMOUNT}/year ({TAX}) today and again every year unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Prices may change. If you cancel or downgrade, you may lose access to some content or features, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, tu periodo de prueba gratuito finaliza ahora y comienza tu suscripción anual {PLAN}. Se te cobrará {AMOUNT}/año ({TAX}) hoy y nuevamente cada año a menos que canceles en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancelas o cambias a un plan inferior, podrías perder acceso a algunos contenidos o funciones y parte del contenido podría ser eliminado. También aceptas los {TOS_LINK}Términos de servicio{/TOS_LINK} y la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Durch Abschluss dieses Kaufs endet Ihre kostenlose Testphase und Ihr jährliches {PLAN}-Abonnement beginnt. Ihnen werden heute {AMOUNT}/Jahr ({TAX}) berechnet und danach jährlich erneut, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Die Preise können sich ändern. Wenn Sie kündigen oder Ihr Abonnement herabstufen, können Sie den Zugriff auf einige Inhalte oder Funktionen verlieren, und bestimmte Inhalte können gelöscht werden. Sie stimmen den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} zu und nehmen die {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} zur Kenntnis."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, votre période d'essai gratuite prend fin maintenant et votre abonnement annuel {PLAN} commence. {AMOUNT}/an ({TAX}) vous sera facturé aujourd'hui, puis de nouveau chaque année, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les prix peuvent changer. Si vous annulez ou rétrogradez, vous pourriez perdre l'accès à certains contenus ou fonctionnalités, et certains contenus pourraient être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、無料トライアルは即時終了し、年額の{PLAN}サブスクリプションが開始されます。{AMOUNT}/年（{TAX}）が本日請求され、その後は毎年請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り継続して請求されます。価格は変更されることがあります。解約またはダウングレードした場合、一部のコンテンツや機能へのアクセスを失うことがあり、コンテンツが削除されることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}および{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}に同意するものとします。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 무료 체험이 즉시 종료되고 연간 {PLAN} 구독이 시작됩니다. 오늘 {AMOUNT}/년 ({TAX})이 청구되며 갱신 최소 1일 전까지 {BILLING_SETTINGS_LINK}결제 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않는 한 매년 다시 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 하위 요금제로 변경하면 일부 콘텐츠나 기능에 대한 접근 권한을 잃거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}이용 약관{/TOS_LINK} 및 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}에 동의합니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, seu período de teste gratuito termina agora e sua assinatura anual {PLAN} começa. Você será cobrado {AMOUNT}/ano ({TAX}) hoje e novamente todos os anos, a menos que cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} com pelo menos 1 dia de antecedência antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, pode perder acesso a algum conteúdo ou recursos, e alguns conteúdos podem ser excluídos. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成此次购买后，您的免费试用将立即结束，年度 {PLAN} 订阅将开始。今天将收取 {AMOUNT}/year ({TAX})，并在此后每年收取，除非您在续订前至少 1 天于 {BILLING_SETTINGS_LINK}计费设置{/BILLING_SETTINGS_LINK} 取消。价格可能变动。如果您取消或降级，您可能会失去对某些内容或功能的访问权，且部分内容可能被删除。您也同意 {TOS_LINK}服务条款{/TOS_LINK} 并已知悉 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        }) : _v0 ? (0, _v12.translate)({
          singular: "By completing this purchase, you are enrolling in a monthly auto-renewing {PLAN} subscription at {AMOUNT}/month ({TAX}), charged today and every month thereafter unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and acknowledge the {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, te estarás suscribiendo a una suscripción {PLAN} mensual con renovación automática por {AMOUNT}/mes ({TAX}), que se cobrará hoy y cada mes en adelante a menos que canceles en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancelas o cambias a un plan inferior, es posible que algunos contenidos o funciones ya no estén disponibles y que parte del contenido sea eliminado. También aceptas los {TOS_LINK}Términos de servicio{/TOS_LINK} y reconoces la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Wenn Sie diesen Kauf abschließen, schließen Sie ein monatlich automatisch verlängerndes {PLAN}-Abonnement zum Preis von {AMOUNT}/Monat ({TAX}) ab. Die Gebühren werden heute und danach jeden Monat berechnet, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Die Preise können sich ändern. Wenn Sie kündigen oder Ihr Abonnement herabstufen, sind möglicherweise einige Inhalte oder Funktionen nicht mehr verfügbar, und bestimmte Inhalte können gelöscht werden. Sie stimmen außerdem den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} zu und nehmen die {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} zur Kenntnis."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, vous souscrivez à un abonnement mensuel {PLAN} à reconduction automatique au tarif de {AMOUNT}/mois ({TAX}), facturé aujourd'hui puis chaque mois par la suite, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les tarifs peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et reconnaissez la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、{AMOUNT}/月（{TAX}）で毎月自動更新される{PLAN}サブスクリプションに登録されます。初回請求は本日行われ、その後は更新ごとに毎月請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り継続して請求されます。料金は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、コンテンツが削除されたりすることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を確認したことを承認します。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 {PLAN}의 월 자동 갱신 구독({AMOUNT}/월 ({TAX}))에 등록되며, 오늘 결제되며 갱신 최소 1일 전까지 {BILLING_SETTINGS_LINK}결제 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않는 한 매월 자동으로 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 하위 요금제로 변경하면 일부 콘텐츠나 기능을 더 이상 이용할 수 없게 되거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}이용 약관{/TOS_LINK}에 동의하며 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인한 것으로 간주됩니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, você estará se inscrevendo em uma assinatura mensal {PLAN} com renovação automática de {AMOUNT}/mês ({TAX}), cobrada hoje e todo mês subsequente, a menos que você cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} com pelo menos 1 dia de antecedência antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, algum conteúdo ou recursos podem deixar de estar disponíveis, e alguns conteúdos podem ser excluídos. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e reconhece a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成本次购买后，您将订阅按月自动续订的 {PLAN}，费用为 {AMOUNT}/month ({TAX})，今天将收取并在此后每月收取一次，除非您在续订前至少 1 天于 {BILLING_SETTINGS_LINK}计费设置{/BILLING_SETTINGS_LINK} 取消。价格可能变动。如果您取消或降级，某些内容或功能可能不再可用，且部分内容可能被删除。您同时同意 {TOS_LINK}服务条款{/TOS_LINK} 并已知悉 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        }) : (0, _v12.translate)({
          singular: "By completing this purchase, you are enrolling in an annual auto-renewing {PLAN} subscription at {AMOUNT}/year ({TAX}), charged today and every year thereafter unless you cancel in {BILLING_SETTINGS_LINK}Billing Settings{/BILLING_SETTINGS_LINK} at least 1 day before renewal. Pricing may change. If you cancel or downgrade, some content or features may no longer be available, and some content may be deleted. You also agree to the {TOS_LINK}Terms of Service{/TOS_LINK} and acknowledge the {PRIVACY_LINK}Privacy Policy{/PRIVACY_LINK}.",
          replacements: _v5,
          dictionary: {
            es: {
              singular: "Al completar esta compra, te estarás suscribiendo a una suscripción {PLAN} anual con renovación automática por {AMOUNT}/año ({TAX}), que se cobrará hoy y cada año en adelante a menos que canceles en {BILLING_SETTINGS_LINK}Configuración de facturación{/BILLING_SETTINGS_LINK} al menos 1 día antes de la renovación. Los precios pueden cambiar. Si cancelas o cambias a un plan inferior, es posible que algunos contenidos o funciones ya no estén disponibles y que parte del contenido sea eliminado. También aceptas los {TOS_LINK}Términos de servicio{/TOS_LINK} y reconoces la {PRIVACY_LINK}Política de privacidad{/PRIVACY_LINK}."
            },
            "de-DE": {
              singular: "Wenn Sie diesen Kauf abschließen, schließen Sie ein jährlich automatisch verlängerndes {PLAN}-Abonnement zum Preis von {AMOUNT}/Jahr ({TAX}) ab. Die Gebühren werden heute und danach jedes Jahr berechnet, sofern Sie nicht mindestens 1 Tag vor der Verlängerung in den {BILLING_SETTINGS_LINK}Abrechnungseinstellungen{/BILLING_SETTINGS_LINK} kündigen. Die Preise können sich ändern. Wenn Sie kündigen oder Ihr Abonnement herabstufen, sind möglicherweise einige Inhalte oder Funktionen nicht mehr verfügbar, und bestimmte Inhalte können gelöscht werden. Sie stimmen außerdem den {TOS_LINK}Nutzungsbedingungen{/TOS_LINK} zu und nehmen die {PRIVACY_LINK}Datenschutzrichtlinie{/PRIVACY_LINK} zur Kenntnis."
            },
            "fr-FR": {
              singular: "En finalisant cet achat, vous souscrivez à un abonnement annuel {PLAN} à reconduction automatique au tarif de {AMOUNT}/an ({TAX}), facturé aujourd'hui puis chaque année par la suite, sauf si vous annulez dans {BILLING_SETTINGS_LINK}Paramètres de facturation{/BILLING_SETTINGS_LINK} au moins 1 jour avant le renouvellement. Les tarifs peuvent changer. Si vous annulez ou rétrogradez, certains contenus ou fonctionnalités peuvent ne plus être disponibles, et certains contenus peuvent être supprimés. Vous acceptez également les {TOS_LINK}Conditions d'utilisation{/TOS_LINK} et reconnaissez la {PRIVACY_LINK}Politique de confidentialité{/PRIVACY_LINK}."
            },
            "ja-JP": {
              singular: "この購入を完了すると、{AMOUNT}/年（{TAX}）で毎年自動更新される{PLAN}サブスクリプションに登録されます。初回請求は本日行われ、その後は更新ごとに毎年請求されます。更新日の少なくとも1日前までに{BILLING_SETTINGS_LINK}請求設定{/BILLING_SETTINGS_LINK}で解約しない限り継続して請求されます。料金は変更される場合があります。解約またはダウングレードした場合、一部のコンテンツや機能が利用できなくなったり、コンテンツが削除されたりすることがあります。また、{TOS_LINK}利用規約{/TOS_LINK}に同意し、{PRIVACY_LINK}プライバシーポリシー{/PRIVACY_LINK}を確認したことを承認します。"
            },
            "ko-KR": {
              singular: "이 구매를 완료하면 {PLAN}의 연간 자동 갱신 구독({AMOUNT}/년 ({TAX}))에 등록되며, 오늘 결제되며 갱신 최소 1일 전까지 {BILLING_SETTINGS_LINK}결제 설정{/BILLING_SETTINGS_LINK}에서 취소하지 않는 한 매년 자동으로 청구됩니다. 가격은 변경될 수 있습니다. 취소하거나 하위 요금제로 변경하면 일부 콘텐츠나 기능을 더 이상 이용할 수 없게 되거나 일부 콘텐츠가 삭제될 수 있습니다. 또한 {TOS_LINK}이용 약관{/TOS_LINK}에 동의하며 {PRIVACY_LINK}개인정보 처리방침{/PRIVACY_LINK}을 확인한 것으로 간주됩니다."
            },
            "pt-BR": {
              singular: "Ao concluir esta compra, você estará se inscrevendo em uma assinatura anual {PLAN} com renovação automática de {AMOUNT}/ano ({TAX}), cobrada hoje e todos os anos subsequentes, a menos que você cancele em {BILLING_SETTINGS_LINK}Configurações de cobrança{/BILLING_SETTINGS_LINK} com pelo menos 1 dia de antecedência antes da renovação. Os preços podem mudar. Se você cancelar ou fizer downgrade, algum conteúdo ou recursos podem deixar de estar disponíveis, e alguns conteúdos podem ser excluídos. Você também concorda com os {TOS_LINK}Termos de Serviço{/TOS_LINK} e reconhece a {PRIVACY_LINK}Política de Privacidade{/PRIVACY_LINK}."
            },
            "zh-CN": {
              singular: "完成本次购买后，您将订阅按年自动续订的 {PLAN}，费用为 {AMOUNT}/year ({TAX})，今天将收取并在此后每年收取一次，除非您在续订前至少 1 天于 {BILLING_SETTINGS_LINK}计费设置{/BILLING_SETTINGS_LINK} 取消。价格可能变动。如果您取消或降级，某些内容或功能可能不再可用，且部分内容可能被删除。您同时同意 {TOS_LINK}服务条款{/TOS_LINK} 并已知悉 {PRIVACY_LINK}隐私政策{/PRIVACY_LINK}。"
            }
          }
        });
      }({
        isMonthly: _v2,
        isFreeTrial: _v3,
        planName: _v1,
        amount: _v51,
        tax: _v49
      });
    return (0, _v1.jsxs)(_v18.Box, {
      width: "100%",
      maxWidth: (0, _v9.rem)(540),
      overflow: "hidden",
      backgroundColor: "surface",
      color: "text-primary",
      borderRadius: {
        base: "0",
        md: (0, _v9.rem)(24)
      },
      borderStyle: "solid",
      borderWidth: {
        base: 0,
        md: "2px"
      },
      borderColor: "upsell-primary",
      children: [(0, _v1.jsx)(_v7.Flex, {
        display: {
          base: "none",
          md: "flex"
        },
        backgroundColor: "upsell-primary",
        color: "white",
        justifyContent: "center",
        paddingY: (0, _v9.rem)(6),
        paddingX: (0, _v9.rem)(24),
        children: (0, _v1.jsx)(_v21.Text, {
          variant: "body-md",
          fontWeight: "medium",
          children: (0, _v12.translate)({
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
      }), (0, _v1.jsxs)(_v7.Flex, {
        direction: "column",
        gap: (0, _v9.rem)(32),
        padding: {
          base: "0",
          md: (0, _v9.rem)(24)
        },
        children: [(0, _v1.jsxs)(_v7.Flex, {
          direction: "column",
          gap: (0, _v9.rem)(20),
          children: [(0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: (0, _v9.rem)(8),
            children: [(0, _v1.jsx)(_v17.Badge, {
              variant: "upgrade",
              size: "sm",
              display: {
                base: "inline-flex",
                md: "none"
              },
              alignSelf: "flex-start",
              children: (0, _v12.translate)({
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
            }), (0, _v1.jsx)(_v19.Header, {
              size: {
                base: "lg",
                md: "xl"
              },
              children: _v53
            })]
          }), (0, _v1.jsxs)(_v7.Flex, {
            alignItems: "center",
            gap: (0, _v9.rem)(8),
            children: [(0, _v1.jsx)(_v19.Header, {
              as: "span",
              size: {
                base: "xl",
                md: "2xl"
              },
              children: _v50
            }), (0, _v1.jsxs)(_v7.Flex, {
              direction: "column",
              color: "text-secondary",
              children: [(0, _v1.jsx)(_v21.Text, {
                as: "span",
                variant: "body-md",
                children: _v52
              }), (0, _v1.jsx)(_v21.Text, {
                as: "span",
                variant: "body-md",
                children: _v49
              })]
            })]
          }), (0, _v1.jsx)(_v25.PlanCardQuota, {
            planData: _v0,
            displayMonthlyPlan: _v2
          })]
        }), (0, _v1.jsxs)(_v7.Flex, {
          direction: "column",
          gap: (0, _v9.rem)(16),
          children: [!_v38 && _v44 ? (0, _v1.jsx)(_v36, {
            paymentMethods: _v18,
            paymentMethodId: _v22,
            onSelectPaymentMethod: _v21,
            disabled: _v12
          }) : null, (0, _v1.jsx)(_v21.Text, {
            variant: "body-sm",
            color: "text-primary",
            children: (0, _v1.jsx)("span", {
              children: _v55
            })
          }), _v26 ? (0, _v1.jsx)(_v4.Alert, {
            status: "error",
            borderRadius: (0, _v9.rem)(12),
            children: (0, _v1.jsx)(_v5.AlertDescription, {
              children: _v26
            })
          }) : null, (0, _v1.jsxs)(_v7.Flex, {
            direction: "column",
            gap: (0, _v9.rem)(8),
            children: [(0, _v1.jsx)(_v6.Button, {
              variant: "brand",
              size: "lg",
              onClick: () => {
                if (_v43 || !_v9 || !_v23 || !_v22) {
                  _v34(_v35, _v7 ? "account_opt_in_required" : _v39 ? "no_payment_method" : _v42 ? "selected_card_opt_in_protected" : _v9 && _v23 ? "no_card_selected" : "cannot_upgrade_in_place"), _v13(!0), window.location.assign((0, _v24.buildCheckoutUrl)({
                    ..._v6,
                    tier: _v0.tier,
                    isMonthly: _v2,
                    postCheckoutUrl: _v5
                  }));
                  return;
                }
                _v30(_v35), _v33(_v35), _v27(void 0), _v13(!0), _v24({
                  select: ["id", "orderId", "status", "shouldBlockPurchase"],
                  where: {
                    subscriptionId: _v9
                  },
                  variables: {
                    type: "upgrade",
                    billingPlanId: _v23,
                    paymentMethodId: _v22
                  }
                });
              },
              isDisabled: _v12,
              isLoading: _v14 || _v38 || _v25.loading || _v28,
              children: _v54
            }), (0, _v1.jsx)(_v6.Button, {
              variant: "secondary",
              size: "lg",
              onClick: _v11,
              isDisabled: _v12,
              children: _v4
            })]
          })]
        })]
      })]
    });
  }
  let _v47 = _v0 => _v0 => (0, _v1.jsx)(_v20.Link, {
    href: _v0,
    color: "fill-brand",
    children: _v0
  });
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  _v0.s(["OneTapUpsellPage", 0, function ({
    next: _v0,
    checkoutTracking: _v1
  }) {
    let _v2 = function () {
        let _v0 = (0, _v16.useViewer)(),
          {
            settings: _v1,
            isLoadingResponse: _v2
          } = (0, _v50.useOrionSettings)(),
          _v3 = (0, _v49.useCampaignIdOverride)(),
          _v4 = !!_v1.onboarding_upsell_interstitial_enabled,
          {
            data: _v5,
            error: _v6
          } = (0, _v48.useGetMeSubscriptionPlans)(() => _v0?.user ? {
            select: ["id", "name", "tier", "currency", "price", "priceFormatted", "metadata"],
            query: {
              vuid: _v0.vuid,
              ...(_v3 ? {
                campaignId: _v3
              } : {})
            }
          } : null),
          _v7 = (0, _v52.cheapPreGate)(_v0, _v4),
          _v8 = _v0?.teamUser?.accountType ?? _v0?.user?.account,
          _v9 = _v8 ? (0, _v2.default)(_v8) : null;
        if (_v2) return {
          status: "loading"
        };
        if (!_v7 || !_v9 || _v6) return {
          status: "ineligible"
        };
        let _v10 = _v5?.data;
        if (!_v10) return {
          status: "loading"
        };
        let {
            tier: _v11,
            displayName: _v12
          } = (0, _v51.getResolvedTierDisplayName)({
            currentTier: _v9,
            tierSetting: "one_up",
            variant: "generic",
            plansData: _v10
          }),
          _v13 = _v11 ? _v10.find(_v0 => _v0.tier === _v11) : void 0;
        if (!_v11 || !_v13) return {
          status: "ineligible"
        };
        let _v14 = _v10.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased");
        return {
          status: "eligible",
          oneUpTier: _v11,
          oneUpDisplayName: _v12 ?? "",
          plan: _v13,
          isMonthly: !!_v14?.metadata?.purchasedProduct?.isMonthly
        };
      }(),
      _v3 = (0, _v16.useViewer)(),
      _v4 = (0, _v3.useRef)(!1),
      [_v5, _v6] = (0, _v3.useState)(!1),
      {
        trackPaywallDismissed: _v7
      } = (0, _v13.usePaywallTracking)({
        ..._v1,
        isVisible: "eligible" === _v2.status
      }),
      _v8 = (0, _v2.default)(_v3?.teamUser?.accountType ?? _v3?.user?.account ?? ""),
      _v9 = _v15.PLANS_DISPLAY_NAMES[_v8] ?? (0, _v12.translate)({
        singular: "current",
        dictionary: {
          es: {
            singular: "actual"
          },
          "de-DE": {
            singular: "aktuell"
          },
          "fr-FR": {
            singular: "actuel"
          },
          "ja-JP": {
            singular: "現在"
          },
          "ko-KR": {
            singular: "현재"
          },
          "pt-BR": {
            singular: "atual"
          },
          "zh-CN": {
            singular: "当前"
          }
        }
      }),
      _v10 = _v3?.user?.email,
      _v11 = (0, _v3.useCallback)(() => {
        _v4.current || (_v4.current = !0, _v6(!0), window.location.href = _v0);
      }, [_v0]),
      _v12 = (0, _v3.useCallback)(_v0 => {
        if (_v4.current) return;
        _v4.current = !0, _v6(!0);
        let _v1 = "eligible" === _v2.status ? _v2.plan.name : void 0;
        window.location.href = function ({
          productName: _v0,
          email: _v1,
          orderId: _v2
        }) {
          let _v3 = [_v0 && `product_name=${encodeURIComponent(_v0)}`, _v1 && `user_email=${encodeURIComponent(_v1)}`, _v2 && `order_id=${encodeURIComponent(_v2)}`, "upsold=1"].filter(Boolean);
          return `/onboarding?${_v3.join("&")}`;
        }({
          productName: _v1,
          email: _v10,
          orderId: _v0
        });
      }, [_v2, _v10]),
      _v13 = (0, _v3.useCallback)(() => {
        _v7(), _v11();
      }, [_v7, _v11]);
    (0, _v3.useEffect)(() => {
      "ineligible" === _v2.status && _v11();
    }, [_v2.status, _v11]);
    let _v14 = !!(_v3?.teamUser?.isFreeTrial ?? _v3?.user?.isFreeTrial),
      {
        data: _v15,
        isLoading: _v16
      } = (0, _v11.useGetUserSettingsBillingMembership)(() => _v3?.user?.id ? {
        select: ["billingAddress", "isImpactedByGermanConsumerLaw"],
        where: {
          userId: Number(_v3.user.id)
        }
      } : null),
      _v17 = _v43(_v15?.billingAddress) || !!_v15?.isImpactedByGermanConsumerLaw,
      {
        data: _v18,
        isLoading: _v19
      } = (0, _v10.useGetMeSubscriptions)(() => _v3?.user?.id ? {
        select: ["id"],
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE",
          types: ["SUBSCRIPTION_TYPE_BASE"]
        }
      } : null),
      _v20 = _v18?.data?.[0]?.id;
    return (0, _v1.jsx)(_v14.OnboardingShell, {
      growLogo: !1,
      children: "eligible" !== _v2.status ? (0, _v1.jsx)(_v7.Flex, {
        flex: "1",
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        children: (0, _v1.jsx)(_v8.Spinner, {
          size: "xl",
          label: (0, _v12.translate)({
            singular: "Loading",
            dictionary: {
              es: {
                singular: "Cargando"
              },
              "de-DE": {
                singular: "Wird geladen"
              },
              "fr-FR": {
                singular: "Chargement"
              },
              "ja-JP": {
                singular: "読み込み中"
              },
              "ko-KR": {
                singular: "로딩 중"
              },
              "pt-BR": {
                singular: "Carregando"
              },
              "zh-CN": {
                singular: "加载中"
              }
            }
          })
        })
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v6.Button, {
          variant: "tertiary",
          position: "absolute",
          top: (0, _v9.rem)(32),
          right: (0, _v9.rem)(32),
          onClick: _v13,
          isDisabled: _v5,
          children: (0, _v12.translate)({
            singular: "Skip",
            dictionary: {
              es: {
                singular: "Omitir"
              },
              "de-DE": {
                singular: "Überspringen"
              },
              "fr-FR": {
                singular: "Sauter"
              },
              "ja-JP": {
                singular: "スキップ"
              },
              "ko-KR": {
                singular: "건너뛰기"
              },
              "pt-BR": {
                singular: "PULAR"
              },
              "zh-CN": {
                singular: "跳过"
              }
            }
          })
        }), (0, _v1.jsx)(_v4.Alert, {
          status: "success",
          borderRadius: (0, _v9.rem)(12),
          width: "100%",
          children: (0, _v1.jsx)(_v5.AlertDescription, {
            children: _v10 ? (0, _v12.translate)({
              singular: "Your {PLAN} plan is active. A receipt is on its way to {EMAIL}.",
              replacements: {
                PLAN: _v9,
                EMAIL: _v10
              },
              dictionary: {
                es: {
                  singular: "Tu plan {PLAN} está activo. Un recibo está en camino a {EMAIL}."
                },
                "de-DE": {
                  singular: "Ihr {PLAN}-Plan ist aktiv. Eine Quittung wird an {EMAIL} gesendet."
                },
                "fr-FR": {
                  singular: "Votre forfait {PLAN} est actif. Un reçu est en cours d'envoi à {EMAIL}."
                },
                "ja-JP": {
                  singular: "{PLAN}プランは有効になっています。領収書は{EMAIL}宛てに送信されます。"
                },
                "ko-KR": {
                  singular: "{PLAN} 플랜이 활성화되었습니다. 영수증이 {EMAIL}로 발송되었습니다."
                },
                "pt-BR": {
                  singular: "Seu plano {PLAN} está ativo. Um recibo está a caminho de {EMAIL}."
                },
                "zh-CN": {
                  singular: "您的 {PLAN} 计划已激活。收据已发送至 {EMAIL}。"
                }
              }
            }) : (0, _v12.translate)({
              singular: "Your {PLAN} plan is active.",
              replacements: {
                PLAN: _v9
              },
              dictionary: {
                es: {
                  singular: "Tu plan {PLAN} está activo."
                },
                "de-DE": {
                  singular: "Ihr {PLAN}-Plan ist aktiv."
                },
                "fr-FR": {
                  singular: "Votre forfait {PLAN} est actif."
                },
                "ja-JP": {
                  singular: "{PLAN}プランは有効になっています。"
                },
                "ko-KR": {
                  singular: "{PLAN} 플랜이 활성화되었습니다."
                },
                "pt-BR": {
                  singular: "Seu plano {PLAN} está ativo."
                },
                "zh-CN": {
                  singular: "您的 {PLAN} 计划已激活。"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v7.Flex, {
          flex: "1",
          direction: "column",
          alignItems: "center",
          width: "100%",
          sx: {
            justifyContent: "safe center"
          },
          children: (0, _v1.jsx)(_v46, {
            plan: _v2.plan,
            displayName: _v2.oneUpDisplayName,
            isMonthly: _v2.isMonthly,
            isFreeTrial: _v14,
            next: _v0,
            checkoutTracking: _v1,
            accountRequiresOptIn: _v17,
            accountGateLoading: _v16 || _v19,
            subscriptionId: _v20,
            continueLabel: (0, _v12.translate)({
              singular: "Continue with {PLAN} plan",
              replacements: {
                PLAN: _v9
              },
              dictionary: {
                es: {
                  singular: "Continuar con el plan {PLAN}"
                },
                "de-DE": {
                  singular: "Mit dem {PLAN}-Plan fortfahren"
                },
                "fr-FR": {
                  singular: "Continuer avec le plan {PLAN}"
                },
                "ja-JP": {
                  singular: "{PLAN}プランで続行"
                },
                "ko-KR": {
                  singular: "{PLAN} 플랜으로 계속하기"
                },
                "pt-BR": {
                  singular: "Continuar com o plano {PLAN}"
                },
                "zh-CN": {
                  singular: "继续使用 {PLAN} 套餐"
                }
              }
            }),
            onUpgrade: _v12,
            onContinue: _v13,
            isLocked: _v5,
            onChargingChange: _v6
          })
        })]
      })
    });
  }], 0);
}