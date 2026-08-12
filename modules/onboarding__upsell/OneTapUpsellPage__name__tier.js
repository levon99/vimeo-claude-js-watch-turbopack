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
    _v18 = _v18,
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["OneTapUpsellPage", 0, function ({
    next: _v0,
    checkoutTracking: _v1
  }) {
    let _v2 = function () {
        let _v0 = (0, _v19.useViewer)(),
          {
            settings: _v1,
            isLoadingResponse: _v2
          } = (0, _v23.useOrionSettings)(),
          _v3 = (0, _v22.useCampaignIdOverride)(),
          _v4 = !!_v1.onboarding_upsell_interstitial_enabled,
          {
            data: _v5,
            error: _v6
          } = (0, _v20.useGetMeSubscriptionPlans)(() => _v0?.user ? {
            select: ["id", "name", "tier", "currency", "price", "priceFormatted", "metadata"],
            query: {
              vuid: _v0.vuid,
              ...(_v3 ? {
                campaignId: _v3
              } : {})
            }
          } : null),
          _v7 = (0, _v21.cheapPreGate)(_v0, _v4),
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
          } = (0, _v24.getRecommendedTierDisplayName)({
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
      _v3 = (0, _v19.useViewer)(),
      _v4 = (0, _v3.useRef)(!1),
      [_v5, _v6] = (0, _v3.useState)(!1),
      {
        trackPaywallDismissed: _v7
      } = (0, _v15.usePaywallTracking)({
        ..._v1,
        paywallStyle: "one_tap_upsell",
        paywallPlansDisplayed: "eligible" === _v2.status ? [_v2.oneUpTier] : [],
        paywallPeriodicitiesDisplayed: "eligible" === _v2.status ? [_v2.isMonthly ? "monthly" : "yearly"] : [],
        isVisible: "eligible" === _v2.status
      }),
      _v8 = (0, _v2.default)(_v3?.teamUser?.accountType ?? _v3?.user?.account ?? ""),
      _v9 = (0, _v16.getTierDisplayName)(_v8) ?? (0, _v12.translate)({
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
      _v17 = _v15?.billingAddress,
      _v18 = (0, _v14.isAutorenewalOptInProtected)(_v17) || !!_v15?.isImpactedByGermanConsumerLaw,
      {
        data: _v19,
        isLoading: _v20
      } = (0, _v10.useGetMeSubscriptions)(() => _v3?.user?.id ? {
        select: ["id"],
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE",
          types: ["SUBSCRIPTION_TYPE_BASE"]
        }
      } : null),
      _v21 = _v19?.data?.[0]?.id;
    return (0, _v1.jsx)(_v17.OnboardingShell, {
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
          children: (0, _v1.jsx)(_v13.UpsellCard, {
            plan: _v2.plan,
            displayName: _v2.oneUpDisplayName,
            quota: (0, _v1.jsx)(_v18.default, {
              planData: _v2.plan,
              displayMonthlyPlan: _v2.isMonthly
            }),
            isMonthly: _v2.isMonthly,
            isFreeTrial: _v14,
            next: _v0,
            checkoutTracking: _v1,
            accountRequiresOptIn: _v18,
            accountGateLoading: _v16 || _v20,
            subscriptionId: _v21,
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