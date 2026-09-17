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
    _v29 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    planData: _v1,
    showFreeTrial: _v2 = !1,
    location: _v3,
    showYearly: _v4,
    isMobileBreakpoint: _v5,
    upcomingTier: _v6,
    effectiveTier: _v7,
    renewalDiscountPercent: _v8,
    onRenewalDiscount: _v9,
    onPurchaseIntercept: _v10
  }) => {
    let _v11 = (0, _v9.useToast)(),
      _v12 = (0, _v3.useContext)(_v26.OverridesContext),
      {
        settings: _v13
      } = (0, _v15.useOrionSettings)(),
      _v14 = _v12.compact ? "md" : "lg",
      {
        isRepackagingData: _v15
      } = (0, _v3.useContext)(_v27.PlansDataContext),
      {
        trackPricingPagePlanSelected: _v16
      } = (0, _v16.usePricingTracking)(),
      _v17 = (0, _v29.useBundleOfferStore)(),
      _v18 = (0, _v29.useBundleOfferSelector)(_v0 => !_v0.intercepts && _v0.isEnabled && _v0.isBundleActive),
      _v19 = _v0 => _v18 && !_v32 ? _v17.getState().reconcileCheckoutHref(_v0) ?? _v0 : _v0,
      _v20 = (0, _v2.useSearchParams)(),
      [_v21, _v22] = (0, _v3.useState)(!1),
      [_v23, _v24] = (0, _v3.useState)(!1),
      [_v25, _v26] = (0, _v3.useState)(!1),
      {
        currency: _v27,
        metadata: _v28,
        name: _v29,
        price: _v30,
        tier: _v31
      } = _v1,
      _v32 = "enterprise" === _v31,
      _v33 = void 0 !== _v6 && _v31 === _v6,
      _v34 = void 0 !== _v7 && ((0, _v18.getTierComparisonRank)(_v31) ?? 0) < ((0, _v18.getTierComparisonRank)(_v7) ?? 0) && "free" !== _v31,
      _v35 = (0, _v23.useViewer)(),
      _v36 = _v35?.teamUser?.ownerId ?? _v35?.user?.id,
      {
        data: _v37,
        isLoading: _v38
      } = (0, _v13.useGetUserSettingsBillingMembership)(() => _v34 && null != _v36 ? {
        select: ["subscriptionId", "hasAutorenew", "endDate", "gracePeriodType", "vendor"],
        where: {
          userId: _v36
        }
      } : null),
      {
        subscriptionId: _v39,
        subscriptionEndDate: _v40,
        gracePeriodType: _v41,
        isInGracePeriod: _v42,
        supportsGraceDowngrade: _v43,
        hasAutorenew: _v44
      } = (0, _v24.getDowngradeSubscriptionState)(_v37, _v38),
      _v45 = _v44 || _v25,
      _v46 = (0, _v14.translate)({
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
      _v47 = (0, _v14.translate)({
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
      _v48 = (0, _v14.translate)({
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
      _v49 = (0, _v14.translate)({
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
      _v50 = (0, _v14.translate)({
        singular: "Get {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v29
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
      _v51 = (0, _v14.translate)({
        singular: "Renew at {PERCENT}% discount",
        replacements: {
          PERCENT: _v8 ?? 0
        },
        dictionary: {
          es: {
            singular: "Renovar con un descuento del {PERCENT}%"
          },
          "de-DE": {
            singular: "Erneuern mit {PERCENT}% Rabatt"
          },
          "fr-FR": {
            singular: "Renouvelez avec une réduction de {PERCENT}%"
          },
          "ja-JP": {
            singular: "{PERCENT}%割引で更新"
          },
          "ko-KR": {
            singular: "{PERCENT}% 할인으로 갱신"
          },
          "pt-BR": {
            singular: "Renove com {PERCENT}% de desconto"
          },
          "zh-CN": {
            singular: "以 {PERCENT}% 折扣续订"
          }
        }
      }),
      {
        capabilities: {
          hasPaid: _v52,
          hasMonthlyBilling: _v53,
          inAppSubscription: _v54
        }
      } = (0, _v11.useCapability)(["hasPaid", "hasMonthlyBilling", "inAppSubscription"]),
      _v55 = _v34 && !_v5 && _v52 && (_v53 && _v4 || !_v53 && !_v4),
      _v56 = _v34 && _v42 && (!_v39 || !_v43),
      [_v57, _v58] = (0, _v12.default)(_v19.SELECTED_BILLING_PLAN_ID_STORAGE_KEY, ""),
      _v59 = _v0 => {
        let _v1 = !_v4 && _v13.pricing_page_monthly_free_trial ? _v0?.replace(/\/trial(\?|$)/, "/monthly/trial$1") : _v0,
          _v2 = new URLSearchParams(_v20);
        _v2.delete(_v10.BUNDLE_OFFER_TOGGLE_PARAM);
        let _v3 = _v2.toString();
        if (!_v1 || !_v3) return _v19(_v1 || "");
        let _v4 = _v1.includes("?") ? "&" : "?";
        return _v19(`${_v1}${_v4}${_v3}`);
      },
      _v60 = () => {
        let _v0 = _v28.interactions?.purchase?.uri?.[_v4 ? "annual" : "monthly"],
          _v1 = "";
        _v32 && _v3 ? _v1 = (_v0 => {
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
        })(_v3) : _v12.ctaQueryParams && (_v1 = `?${_v12.ctaQueryParams}`);
        let _v2 = _v52 && !_v53;
        return _v5 && _v28?.purchasedProduct == null && !_v2 && (_v1.includes("?") ? _v1 += "&show_billing_plans=1" : _v1 = "?show_billing_plans=1"), _v59(_v0 + _v1);
      },
      _v61 = _v28?.interactions?.purchase?.status,
      _v62 = _v28?.purchasedProduct?.isMonthly,
      _v63 = _v12.ctaTreatment,
      _v64 = (0, _v17.getEffectivePurchaseStatus)({
        purchaseStatus: _v61,
        tier: _v31,
        isViewingAnnual: _v4,
        isPurchasedMonthly: _v62
      }),
      _v65 = "purchased" === _v64 && !_v33 && !_v34,
      _v66 = _v15 && (_v33 || _v65),
      _v67 = _v33 ? _v46 : _v66 ? _v47 : _v34 ? _v48 : _v32 ? _v49 : null != _v8 ? _v51 : _v50,
      _v68 = _v0 => {
        let _v1 = _v4 ? _v0.id.annual : _v0.id.monthly;
        _v0.metadata.isPsPlan && _v1 !== _v57 && _v58(_v1);
      },
      _v69 = !0 === _v12.hidePaidPlanSecondaryLinks,
      _v70 = !_v69 && _v2 && !_v33 && !_v34,
      _v71 = !_v69 && !_v33 && !_v34 && (_v2 || _v63 === _v25.CTA_TREATMENT.free_trial_secondary || _v63 === _v25.CTA_TREATMENT.free_trial_only) && _v63 !== _v25.CTA_TREATMENT.purchase_only,
      _v72 = _v33 || "available" !== _v64 || _v54,
      _v73 = _v4 ? "yearly" : "monthly",
      _v74 = _v32 ? "contact_sales" : _v31,
      _v75 = _v66 ? {
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
        },
        opacity: .5
      } : _v34 ? {
        variant: "secondary"
      } : _v32 || "free" === _v1.tier ? {
        variant: "primary",
        bgColor: "text-primary",
        _hover: {
          backgroundColor: _v32 ? "gray.200" : "vimeoBlue.300"
        },
        _dark: {
          bgColor: "text-primary",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: _v32 ? "gray.200" : "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      } : {
        variant: "tertiary",
        bgColor: _v72 ? "text-primary" : "fill-brand",
        _hover: {
          backgroundColor: "vimeoBlue.300"
        },
        _dark: {
          bgColor: _v72 ? "text-primary" : "vimeoBlue.500",
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
      _v76 = (_v0, _v1) => {
        if (!_v10) return void _v1();
        let _v2 = _v0.currentTarget,
          _v3 = _v2 instanceof HTMLAnchorElement && _v2.href ? _v2.getAttribute("href") : null;
        _v0.preventDefault(), _v10(_v0 => {
          let _v1 = _v0 ?? _v3;
          _v1 && window.location.assign(_v1), _v1();
        }, _v3);
      },
      _v77 = (0, _v1.jsx)(_v5.Button, {
        as: "a",
        size: _v14,
        width: "100%",
        href: _v32 ? _v60() : _v59(_v28.interactions?.purchase?.uri?.freeTrial),
        ...(!_v32 && {
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        }),
        _dark: {
          bgColor: _v32 || "free" === _v1.tier || _v72 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _hover: {
            backgroundColor: _v32 ? "gray.200" : "vimeoBlue.300"
          }
        },
        bgColor: _v32 ? "text-primary" : "fill-brand",
        variant: _v32 ? "primary" : "tertiary",
        onClick: _v0 => _v76(_v0, () => {
          _v16({
            plan: _v74,
            periodicity: _v73,
            freeTrial: !_v32
          }), _v68(_v1), (0, _v28.emitBPEvent)({
            copy: _v32 ? "contact sales" : "start free trial",
            currency: _v32 ? null : _v27?.currencyCode,
            location: "table" === _v3 ? "compare_table" : "our_plans",
            target: _v32 ? "enterprise_contact_page" : "checkout",
            plan_selected: _v31,
            price: _v32 ? null : _v30?.annualMonthly,
            duration: "annual",
            purchase_type: _v32 ? null : "trial",
            path: window.location ? window.location.href : "",
            target_path: _v32 ? _v60() : _v59(_v28.interactions?.purchase?.uri?.freeTrial),
            is_discount: !!_v32 && null
          });
        }),
        ..._v0,
        children: _v32 ? (0, _v14.translate)({
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
        }) : "table" === _v3 ? (0, _v14.translate)({
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
        }) : _v12.paidPlanCtaLabel ?? (0, _v14.translate)({
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
      _v78 = (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v8.rem)(17)} ${(0, _v8.rem)(20)}`,
        children: (0, _v14.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: _v60(),
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v76(_v0, () => {
                _v16({
                  plan: _v74,
                  periodicity: _v73,
                  freeTrial: !1
                }), _v68(_v1), (0, _v28.emitBPEvent)({
                  copy: "purchase now",
                  currency: _v27?.currencyCode,
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: _v31,
                  price: _v4 ? _v30?.annualMonthly : _v30?.monthly,
                  duration: _v4 ? "annual" : "monthly",
                  purchase_type: "direct",
                  path: window.location ? window.location.href : "",
                  target_path: _v60(),
                  is_discount: !1
                });
              }),
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
    return _v63 !== _v25.CTA_TREATMENT.free_trial_primary || _v33 || _v34 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(!_v63 || _v63 === _v25.CTA_TREATMENT.purchase_only || _v63 === _v25.CTA_TREATMENT.purchase_primary) && (_v34 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v7.Tooltip, {
          label: (0, _v14.translate)({
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
          isDisabled: !_v55,
          placement: "top",
          children: (0, _v1.jsx)(_v4.Box, {
            children: (0, _v1.jsx)(_v5.Button, {
              size: _v14,
              width: "100%",
              ..._v75,
              isDisabled: _v55 || _v56,
              onClick: () => {
                _v16({
                  plan: _v74,
                  periodicity: _v73,
                  freeTrial: !1
                }), (0, _v28.emitBPEvent)({
                  copy: _v67,
                  currency: _v27?.currencyCode,
                  location: "table" === _v3 ? "compare_table" : "our_plans",
                  target: "downgrade_modal",
                  plan_selected: _v31,
                  price: _v4 ? _v30?.annualMonthly : _v30?.monthly,
                  duration: _v4 ? "annual" : "monthly",
                  purchase_type: "direct",
                  path: window?.location?.href,
                  target_path: "",
                  is_discount: !1
                }), (0, _v24.shouldShowAutoRenewRetentionModal)(_v42, _v45) ? _v24(!0) : _v22(!0);
              },
              ..._v0,
              children: _v67
            })
          })
        }), (0, _v1.jsx)(_v20.AutoRenewRetentionModal, {
          isOpen: _v23,
          onClose: () => _v24(!1),
          onAutoRenewEnabled: () => {
            _v26(!0), _v24(!1), _v22(!0);
          },
          onError: _v0 => {
            _v11({
              variant: "warning",
              title: _v0 ?? (0, _v14.translate)({
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
          subscriptionId: _v39,
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          currentTier: _v7 ?? "",
          targetTier: _v31,
          endDate: _v40
        }), (0, _v1.jsx)(_v21.DowngradeFlowModal, {
          isOpen: _v21,
          onClose: () => _v22(!1),
          onSuccess: () => {
            window.location.reload();
          },
          onError: _v0 => {
            _v11({
              variant: "warning",
              title: _v0 ?? (0, _v14.translate)({
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
            subscriptionId: _v39,
            tier: _v7,
            billingPeriod: _v4 ? _v22.UserPlanType.Year : _v22.UserPlanType.Month,
            isFreeTrial: !1,
            renewalDate: "",
            hasAutorenew: _v45,
            gracePeriodType: _v43 ? _v41 : null
          },
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          currentTier: _v7,
          targetTier: _v31,
          targetPlanName: _v29,
          targetBillingPlanId: (_v4 ? _v1.id.annual : _v1.id.monthly) ?? "",
          totalSeats: 1
        })]
      }) : null != _v8 && _v9 ? (0, _v1.jsx)(_v5.Button, {
        size: _v14,
        width: "100%",
        onClick: () => {
          _v9();
        },
        ..._v0,
        children: _v67
      }) : (0, _v1.jsx)(_v5.Button, {
        as: "a",
        size: _v14,
        width: "100%",
        href: _v60(),
        isDisabled: _v72,
        "aria-disabled": _v72,
        ..._v75,
        onClick: _v0 => _v76(_v0, () => {
          _v16({
            plan: _v74,
            periodicity: _v73,
            freeTrial: !1
          }), _v68(_v1), (0, _v28.emitBPEvent)({
            copy: _v67,
            currency: _v32 ? null : _v27?.currencyCode,
            location: "table" === _v3 ? "compare_table" : "our_plans",
            target: _v32 ? "enterprise_contact_page" : "checkout",
            plan_selected: _v31,
            price: _v32 ? null : _v4 ? _v30?.annualMonthly : _v30?.monthly,
            duration: _v4 ? "annual" : "monthly",
            purchase_type: _v32 ? null : "direct",
            path: window?.location?.href,
            target_path: _v60(),
            is_discount: !!_v32 && null
          });
        }),
        ..._v0,
        children: _v67
      })), _v71 && (0, _v1.jsx)(() => !_v52 && (_v4 || _v13.pricing_page_monthly_free_trial) ? (0, _v1.jsx)(_v4.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v8.rem)(17)} ${(0, _v8.rem)(20)}`,
        children: (0, _v14.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v6.Link, {
              href: _v59(_v28.interactions?.purchase?.uri?.freeTrial),
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v76(_v0, () => {
                _v16({
                  plan: _v74,
                  periodicity: _v73,
                  freeTrial: !0
                }), _v68(_v1), (0, _v28.emitBPEvent)({
                  copy: "start free trial",
                  currency: _v27?.currencyCode,
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: _v31,
                  price: _v4 ? _v30?.annualMonthly : _v30?.monthly,
                  duration: _v4 ? "annual" : "monthly",
                  purchase_type: "trial",
                  path: window.location ? window.location.href : "",
                  target_path: _v59(_v28.interactions?.purchase?.uri?.freeTrial),
                  is_discount: !1
                });
              }),
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
      children: [_v77, _v70 && _v78]
    });
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    compact: _v1 = !1,
    hrefRedirect: _v2 = "/home",
    location: _v3,
    onPurchaseIntercept: _v4
  }) => {
    let _v5 = (0, _v3.useContext)(_v32.ViewerContext),
      [_v6, _v7] = (0, _v3.useState)(!1);
    return (0, _v1.jsx)(_v30.LoginJoinModal, {
      type: "join",
      xsrft: _v5?.xsrft || "",
      shouldOptIntoMarketing: _v5?.shouldOptIntoMarketing,
      onSuccess: () => {
        window.location.href = _v2;
      },
      isShowing: _v6,
      onDismiss: () => _v7(!1),
      faContainer: "upgrade-plan",
      children: () => (0, _v1.jsx)(_v5.Button, {
        size: "lg",
        width: "100%",
        isDisabled: _v5?.user?.account === _v31.AccountType.Free,
        variant: "tertiary",
        onClick: () => {
          (0, _v28.emitBPEvent)({
            copy: "Sign Up",
            location: "table" === _v3 ? "compare_table" : "our_plans",
            target: "join_modal",
            plan_selected: "free",
            path: window.location.href
          }), _v4 ? _v4(() => {
            _v5?.user ? window.location.href = _v2 : _v7(!0);
          }) : _v5?.user ? window.location.href = _v2 : _v7(!0);
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
        children: _v5?.user?.account === _v31.AccountType.Free ? (0, _v14.translate)({
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
        }) : (0, _v14.translate)({
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