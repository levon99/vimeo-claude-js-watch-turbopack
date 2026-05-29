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
    _v21 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    planData: _v1,
    showFreeTrial: _v2 = !1,
    location: _v3,
    showYearly: _v4,
    isMobileBreakpoint: _v5,
    upcomingTier: _v6,
    effectiveTier: _v7
  }) => {
    let _v8 = (0, _v9.useToast)(),
      _v9 = (0, _v3.useContext)(_v19.OverridesContext),
      {
        isRepackagingData: _v10
      } = (0, _v3.useContext)(_v20.PlansDataContext),
      {
        trackPricingPagePlanSelected: _v11
      } = (0, _v14.usePricingTracking)(),
      _v12 = (0, _v2.useSearchParams)(),
      [_v13, _v14] = (0, _v3.useState)(!1),
      {
        currency: _v15,
        metadata: _v16,
        name: _v17,
        price: _v18,
        tier: _v19
      } = _v1,
      _v20 = "enterprise" === _v19,
      _v21 = void 0 !== _v6 && _v19 === _v6,
      _v22 = void 0 !== _v7 && (_v17.TIER_RANK[_v19] ?? 0) < (_v17.TIER_RANK[_v7] ?? 0) && "free" !== _v19,
      {
        data: _v23
      } = (0, _v12.useGetMeSubscriptions)(() => _v22 ? {
        select: ["id"],
        query: {
          status: "SUBSCRIPTION_STATUS_ACTIVE"
        }
      } : null),
      _v24 = _v23?.data?.[0]?.id ?? "",
      _v25 = (0, _v13.translate)({
        singular: "Your next plan",
        dictionary: {
          es: {
            singular: "Próximo plan"
          },
          "de-DE": {
            singular: "Bevorstehender Tarif"
          },
          "fr-FR": {
            singular: "Plan à venir"
          },
          "ja-JP": {
            singular: "今後のプラン"
          },
          "ko-KR": {
            singular: "예정된 요금제"
          },
          "pt-BR": {
            singular: "Próximo plano"
          },
          "zh-CN": {
            singular: "即将到来的计划"
          }
        }
      }),
      _v26 = (0, _v13.translate)({
        singular: "Current plan",
        dictionary: {
          es: {
            singular: "Plan actual"
          },
          "de-DE": {
            singular: "Aktueller Plan"
          },
          "fr-FR": {
            singular: "Forfait actuel"
          },
          "ja-JP": {
            singular: "現在のプラン"
          },
          "ko-KR": {
            singular: "현재 요금제"
          },
          "pt-BR": {
            singular: "Plano atual"
          },
          "zh-CN": {
            singular: "当前计划"
          }
        }
      }),
      _v27 = (0, _v13.translate)({
        singular: "Downgrade",
        dictionary: {
          es: {
            singular: "Cambiar a plan inferior"
          },
          "fr-FR": {
            singular: "Rétrograder"
          },
          "ja-JP": {
            singular: "ダウングレード"
          },
          "ko-KR": {
            singular: "다운그레이드"
          },
          "pt-BR": {
            singular: "Rebaixar"
          },
          "zh-CN": {
            singular: "降级"
          }
        }
      }),
      _v28 = (0, _v13.translate)({
        singular: "Contact Sales",
        dictionary: {
          es: {
            singular: "Comunicarse con Ventas"
          },
          "de-DE": {
            singular: "Sales-Team kontaktieren"
          },
          "fr-FR": {
            singular: "Service commercial"
          },
          "ja-JP": {
            singular: "営業チームへ問い合わせる"
          },
          "ko-KR": {
            singular: "영업팀에 문의"
          },
          "pt-BR": {
            singular: "Falar com vendas"
          },
          "zh-CN": {
            singular: "联系销售"
          }
        }
      }),
      _v29 = (0, _v13.translate)({
        singular: "Get {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v17
        },
        dictionary: {
          es: {
            singular: "Obtener {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Hol dir {PLAN_NAME}"
          },
          "fr-FR": {
            singular: "Choisissez {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "{PLAN_NAME}をスタート"
          },
          "ko-KR": {
            singular: "{PLAN_NAME} 가입하기"
          },
          "pt-BR": {
            singular: "Compre o {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "获取 {PLAN_NAME}"
          }
        }
      }),
      {
        capabilities: {
          hasPaid: _v30,
          hasMonthlyBilling: _v31,
          inAppSubscription: _v32
        }
      } = (0, _v10.useCapability)(["hasPaid", "hasMonthlyBilling", "inAppSubscription"]),
      _v33 = _v22 && !_v5 && _v30 && (_v31 && _v4 || !_v31 && !_v4),
      [_v34, _v35] = (0, _v11.default)("ps_billing_plan_id", ""),
      _v36 = _v0 => {
        let _v1 = _v12.toString();
        return _v0 && _v1 ? (_v0.includes("?") ? _v0 += `&${_v1}` : _v0 += `?${_v1}`, _v0) : _v0 || "";
      },
      _v37 = () => {
        let _v0 = _v16.interactions?.purchase?.uri?.[_v4 ? "annual" : "monthly"],
          _v1 = "";
        _v20 && _v3 ? _v1 = (_v0 => {
          switch (_v0) {
            case "vertical":
              return "?mkc=ent-upgrade-plan-card";
            case "horizontal":
              return "?mkc=ent-upgrade-plan-horizontal";
            case "table":
              return "?mkc=ent-upgrade-plan-compare";
            default:
              return "";
          }
        })(_v3) : _v9.ctaQueryParams && (_v1 = `?${_v9.ctaQueryParams}`);
        let _v2 = _v30 && !_v31;
        return _v5 && _v16?.purchasedProduct == null && !_v2 && (_v1.includes("?") ? _v1 += "&show_billing_plans=1" : _v1 = "?show_billing_plans=1"), _v36(_v0 + _v1);
      },
      _v38 = _v16?.interactions?.purchase?.status,
      _v39 = _v16?.purchasedProduct?.isMonthly,
      _v40 = _v9.ctaTreatment,
      _v41 = _v0 => "plus" !== _v19 && "purchased" === _v0 && _v4 && _v39 ? "available" : _v0,
      _v42 = "purchased" === _v41(_v38) && !_v21 && !_v22,
      _v43 = _v10 && (_v21 || _v42),
      _v44 = _v21 ? _v25 : _v43 ? _v26 : _v22 ? _v27 : _v20 ? _v28 : _v29,
      _v45 = _v0 => {
        let _v1 = _v4 ? _v0.id.annual : _v0.id.monthly;
        _v0.metadata.isPsPlan && _v1 !== _v34 && _v35(_v1);
      },
      _v46 = _v2 && !_v21 && !_v22,
      _v47 = !_v21 && !_v22 && (_v2 || _v40 === _v18.CTA_TREATMENT.free_trial_secondary || _v40 === _v18.CTA_TREATMENT.free_trial_only) && _v40 !== _v18.CTA_TREATMENT.purchase_only,
      _v48 = _v21 || "available" !== _v41(_v38) || _v32,
      _v49 = _v4 ? "yearly" : "monthly",
      _v50 = _v20 ? "contact_sales" : _v19,
      _v51 = {
        variant: "secondary",
        bgColor: "transparent",
        borderColor: "darkBlueAlpha.300",
        borderWidth: "1px",
        borderStyle: "solid",
        color: "text-primary",
        _dark: {
          bgColor: "transparent",
          color: "text-primary",
          borderColor: "input-fill",
          _disabled: {
            bgColor: "transparent",
            pointerEvents: "none"
          }
        },
        _disabled: {
          bgColor: "transparent",
          pointerEvents: "none"
        }
      },
      _v52 = _v43 ? {
        ..._v51,
        opacity: .5
      } : _v22 ? _v51 : _v20 || "free" === _v1.tier ? {
        variant: "primary",
        bgColor: "text-primary",
        _hover: {
          backgroundColor: _v20 ? "gray.200" : "vimeoBlue.300"
        },
        _dark: {
          bgColor: "text-primary",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: _v20 ? "gray.200" : "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      } : {
        variant: "tertiary",
        bgColor: _v48 ? "text-primary" : "fill-brand",
        _hover: {
          backgroundColor: "vimeoBlue.300"
        },
        _dark: {
          bgColor: _v48 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      },
      _v53 = (0, _v1.jsx)(_v5.Button, {
        as: "a",
        size: "lg",
        width: "100%",
        href: _v20 ? _v37() : _v36(_v16.interactions?.purchase?.uri?.freeTrial),
        ...(!_v20 && {
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        }),
        _dark: {
          bgColor: _v20 || "free" === _v1.tier || _v48 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _hover: {
            backgroundColor: _v20 ? "gray.200" : "vimeoBlue.300"
          }
        },
        bgColor: _v20 ? "text-primary" : "fill-brand",
        variant: _v20 ? "primary" : "tertiary",
        onClick: () => {
          _v11({
            plan: _v50,
            periodicity: _v49,
            freeTrial: !_v20
          }), _v45(_v1), (0, _v21.emitBPEvent)({
            copy: _v20 ? "contact sales" : "start free trial",
            currency: _v20 ? null : _v15?.currencyCode,
            location: "table" === _v3 ? "compare_table" : "our_plans",
            target: _v20 ? "enterprise_contact_page" : "checkout",
            plan_selected: _v19,
            price: _v20 ? null : _v18?.annualMonthly,
            duration: "annual",
            purchase_type: _v20 ? null : "trial",
            path: window.location ? window.location.href : "",
            target_path: _v20 ? _v37() : _v36(_v16.interactions?.purchase?.uri?.freeTrial),
            is_discount: !!_v20 && null
          });
        },
        ..._v0,
        children: _v20 ? (0, _v13.translate)({
          singular: "Contact sales",
          dictionary: {
            es: {
              singular: "Comunicarse con Ventas"
            },
            "de-DE": {
              singular: "Sales-Team kontaktieren"
            },
            "fr-FR": {
              singular: "Service commercial"
            },
            "ja-JP": {
              singular: "営業チームへ問い合わせる"
            },
            "ko-KR": {
              singular: "영업팀에 문의"
            },
            "pt-BR": {
              singular: "Falar com vendas"
            },
            "zh-CN": {
              singular: "联系销售"
            }
          }
        }) : (0, _v13.translate)({
          singular: "Start free trial",
          dictionary: {
            es: {
              singular: "Iniciar prueba gratuita"
            },
            "de-DE": {
              singular: "Kostenloses Probeabo starten"
            },
            "fr-FR": {
              singular: "Commencez l'essai gratuit"
            },
            "ja-JP": {
              singular: "無料トライアルを始める"
            },
            "ko-KR": {
              singular: "무료 체험 시작"
            },
            "pt-BR": {
              singular: "Faça um teste grátis"
            },
            "zh-CN": {
              singular: "开始免费试用"
            }
          }
        })
      }),
      _v54 = (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v8.rem)(17)} ${(0, _v8.rem)(20)}`,
        children: (0, _v13.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: _v37(),
              variant: "inline-primary",
              fontWeight: 500,
              onClick: () => {
                _v11({
                  plan: _v50,
                  periodicity: _v49,
                  freeTrial: !1
                }), _v45(_v1), (0, _v21.emitBPEvent)({
                  copy: "purchase now",
                  currency: _v15?.currencyCode,
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: _v19,
                  price: _v4 ? _v18?.annualMonthly : _v18?.monthly,
                  duration: _v4 ? "annual" : "monthly",
                  purchase_type: "direct",
                  path: window.location ? window.location.href : "",
                  target_path: _v37(),
                  is_discount: !1
                });
              },
              children: _v0
            }, "purchase-now-link")
          },
          dictionary: {
            es: {
              singular: "o {A}comprar ahora{/A}"
            },
            "de-DE": {
              singular: "oder {A}jetzt kaufen{/A}"
            },
            "fr-FR": {
              singular: "ou bien {A}achetez maintenant{/A}"
            },
            "ja-JP": {
              singular: "または{A}今すぐ購入{/A}"
            },
            "ko-KR": {
              singular: "또는 {A}지금 바로 구매하세요.{/A}"
            },
            "pt-BR": {
              singular: "ou {A}compre agora{/A}"
            },
            "zh-CN": {
              singular: "或者{A}立即购买{/A}"
            }
          }
        })
      });
    return _v40 !== _v18.CTA_TREATMENT.free_trial_primary || _v21 || _v22 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(!_v40 || _v40 === _v18.CTA_TREATMENT.purchase_only || _v40 === _v18.CTA_TREATMENT.purchase_primary) && (_v22 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v7.Tooltip, {
          label: (0, _v13.translate)({
            singular: "Downgrade is only available at your current billing period",
            dictionary: {
              es: {
                singular: "El cambio a un plan inferior solo está disponible durante su período de facturación actual"
              },
              "de-DE": {
                singular: "Eine Herabstufung ist nur während Ihres aktuellen Abrechnungszeitraums möglich."
              },
              "fr-FR": {
                singular: "La rétrogradation n'est possible que pendant votre période de facturation en cours"
              },
              "ja-JP": {
                singular: "ダウングレードは現在の請求期間中のみ可能です"
              },
              "ko-KR": {
                singular: "다운그레이드는 현재 청구 기간에만 가능합니다"
              },
              "pt-BR": {
                singular: "O downgrade só está disponível no seu ciclo de faturamento atual"
              },
              "zh-CN": {
                singular: "降级仅在您当前的计费周期内可用"
              }
            }
          }),
          isDisabled: !_v33,
          placement: "top",
          children: (0, _v1.jsx)(_v4.Box, {
            children: (0, _v1.jsx)(_v5.Button, {
              size: "lg",
              width: "100%",
              ..._v52,
              isDisabled: _v33,
              onClick: () => {
                _v11({
                  plan: _v50,
                  periodicity: _v49,
                  freeTrial: !1
                }), (0, _v21.emitBPEvent)({
                  copy: _v44,
                  currency: _v15?.currencyCode,
                  location: "table" === _v3 ? "compare_table" : "our_plans",
                  target: "downgrade_modal",
                  plan_selected: _v19,
                  price: _v4 ? _v18?.annualMonthly : _v18?.monthly,
                  duration: _v4 ? "annual" : "monthly",
                  purchase_type: "direct",
                  path: window?.location?.href,
                  target_path: "",
                  is_discount: !1
                }), _v14(!0);
              },
              ..._v0,
              children: _v44
            })
          })
        }), (0, _v1.jsx)(_v15.DowngradeFlowModal, {
          isOpen: _v13,
          onClose: () => _v14(!1),
          onSuccess: () => {
            window.location.reload();
          },
          onError: () => {
            _v8({
              variant: "error",
              title: (0, _v13.translate)({
                singular: "Something went wrong. Please try again.",
                dictionary: {
                  es: {
                    singular: "Algo salió mal. Inténtalo de nuevo."
                  },
                  "de-DE": {
                    singular: "Hier ist etwas schiefgelaufen. Bitte nochmal versuchen"
                  },
                  "fr-FR": {
                    singular: "Une erreur s'est produite. Veuillez essayer à nouveau."
                  },
                  "ja-JP": {
                    singular: "エラーが発生しました。 再度お試しください。"
                  },
                  "ko-KR": {
                    singular: "문제가 발생했습니다. 다시 시도해주세요."
                  },
                  "pt-BR": {
                    singular: "Alguma coisa deu errado. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "出错了。请重试。"
                  }
                }
              })
            });
          },
          membership: {
            subscriptionId: _v24,
            tier: _v7,
            billingPeriod: _v4 ? _v16.UserPlanType.Year : _v16.UserPlanType.Month,
            isFreeTrial: !1,
            renewalDate: ""
          },
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          targetTier: _v19,
          targetPlanName: _v17,
          targetBillingPlanId: (_v4 ? _v1.id.annual : _v1.id.monthly) ?? "",
          totalSeats: 1
        })]
      }) : (0, _v1.jsx)(_v5.Button, {
        as: "a",
        size: "lg",
        width: "100%",
        href: _v37(),
        isDisabled: _v48,
        "aria-disabled": _v48,
        ..._v52,
        onClick: () => {
          _v11({
            plan: _v50,
            periodicity: _v49,
            freeTrial: !1
          }), _v45(_v1), (0, _v21.emitBPEvent)({
            copy: _v44,
            currency: _v20 ? null : _v15?.currencyCode,
            location: "table" === _v3 ? "compare_table" : "our_plans",
            target: _v20 ? "enterprise_contact_page" : "checkout",
            plan_selected: _v19,
            price: _v20 ? null : _v4 ? _v18?.annualMonthly : _v18?.monthly,
            duration: _v4 ? "annual" : "monthly",
            purchase_type: _v20 ? null : "direct",
            path: window?.location?.href,
            target_path: _v37(),
            is_discount: !!_v20 && null
          });
        },
        ..._v0,
        children: _v44
      })), _v47 && (0, _v1.jsx)(() => !_v30 && _v4 ? (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v8.rem)(17)} ${(0, _v8.rem)(20)}`,
        children: (0, _v13.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: _v36(_v16.interactions?.purchase?.uri?.freeTrial),
              variant: "inline-primary",
              fontWeight: 500,
              onClick: () => {
                _v11({
                  plan: _v50,
                  periodicity: _v49,
                  freeTrial: !0
                }), _v45(_v1), (0, _v21.emitBPEvent)({
                  copy: "start free trial",
                  currency: _v15?.currencyCode,
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: _v19,
                  price: _v18?.annualMonthly,
                  duration: "annual",
                  purchase_type: "trial",
                  path: window.location ? window.location.href : "",
                  target_path: _v36(_v16.interactions?.purchase?.uri?.freeTrial),
                  is_discount: !1
                });
              },
              children: _v0
            }, "free-trial-link")
          },
          dictionary: {
            es: {
              singular: "o {A}iniciar una prueba gratis{/A}"
            },
            "de-DE": {
              singular: "oder {A}mache ein Probeabo{/A}"
            },
            "fr-FR": {
              singular: "ou bien {A}commencez l'essai gratuit{/A}"
            },
            "ja-JP": {
              singular: "または{A}無料トライアルを始める{/A}"
            },
            "ko-KR": {
              singular: "또는 {A}무료로 체험해보세요{/A}"
            },
            "pt-BR": {
              singular: "ou {A}faça um teste gratuito{/A}"
            },
            "zh-CN": {
              singular: "或{A}开始免费试用{/A}"
            }
          }
        })
      }) : (0, _v1.jsx)(_v1.Fragment, {}), {})]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v53, _v46 && _v54]
    });
  }], 0);
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    compact: _v1 = !1,
    hrefRedirect: _v2 = "/home",
    location: _v3
  }) => {
    let _v4 = (0, _v3.useContext)(_v24.ViewerContext),
      [_v5, _v6] = (0, _v3.useState)(!1);
    return (0, _v1.jsx)(_v22.LoginJoinModal, {
      type: "join",
      xsrft: _v4?.xsrft || "",
      shouldOptIntoMarketing: _v4?.shouldOptIntoMarketing,
      onSuccess: () => {
        window.location.href = _v2;
      },
      isShowing: _v5,
      onDismiss: () => _v6(!1),
      faContainer: "upgrade-plan",
      children: () => (0, _v1.jsx)(_v5.Button, {
        size: "lg",
        width: "100%",
        isDisabled: _v4?.user?.account === _v23.AccountType.Free,
        variant: "tertiary",
        onClick: () => {
          (0, _v21.emitBPEvent)({
            copy: "Sign Up",
            location: "table" === _v3 ? "compare_table" : "our_plans",
            target: "join_modal",
            plan_selected: "free",
            path: window.location.href
          }), _v4?.user ? window.location.href = _v2 : _v6(!0);
        },
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "darkBlueAlpha.300",
        "data-testid": "sign-up-button",
        _dark: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "input-fill",
          color: "text-primary"
        },
        ..._v0,
        children: _v4?.user?.account === _v23.AccountType.Free ? (0, _v13.translate)({
          singular: "Current plan",
          dictionary: {
            es: {
              singular: "Plan actual"
            },
            "de-DE": {
              singular: "Aktueller Plan"
            },
            "fr-FR": {
              singular: "Forfait actuel"
            },
            "ja-JP": {
              singular: "現在のプラン"
            },
            "ko-KR": {
              singular: "현재 요금제"
            },
            "pt-BR": {
              singular: "Plano atual"
            },
            "zh-CN": {
              singular: "当前计划"
            }
          }
        }) : (0, _v13.translate)({
          singular: "Sign up",
          dictionary: {
            es: {
              singular: "Regístrate"
            },
            "de-DE": {
              singular: "Registrieren"
            },
            "fr-FR": {
              singular: "Inscrivez-vous"
            },
            "ja-JP": {
              singular: "サインアップ"
            },
            "ko-KR": {
              singular: "가입하기"
            },
            "pt-BR": {
              singular: "Inscreva-se"
            },
            "zh-CN": {
              singular: "注册"
            }
          }
        })
      })
    });
  }], 0);
}