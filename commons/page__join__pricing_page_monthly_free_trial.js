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
    _v33 = _v0.i(0);
  let _v34 = (_v0, _v1, _v2) => (0, _v18.authAttributionUrl)(_v0, (0, _v18.buildAuthAttribution)({
    flowId: null,
    entry: _v1,
    originRoute: _v2,
    surfaceType: "page",
    initialIntent: "join",
    entryTimestamp: null
  }));
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
    let _v11,
      _v12,
      _v13,
      _v14 = (0, _v10.useToast)(),
      _v15 = (0, _v4.useContext)(_v31.OverridesContext),
      {
        cardSurface: _v16,
        compact: _v17
      } = _v15,
      _v18 = (0, _v30.getPlanCardPresentation)(_v16, _v17),
      _v19 = (0, _v17.useOrionSettingsFields)(["pricing_page_monthly_free_trial", "second_free_trial_enabled"]),
      _v20 = _v18.ctaSize,
      {
        isRepackagingData: _v21
      } = (0, _v4.useContext)(_v32.PlansDataContext),
      {
        trackPricingPagePlanSelected: _v22
      } = (0, _v20.usePricingTracking)(),
      _v23 = (0, _v33.useBundleOfferStore)(),
      _v24 = (0, _v33.useBundleOfferSelector)(_v0 => !_v0.intercepts && _v0.isEnabled && _v0.isBundleActive),
      _v25 = _v0 => _v24 && !_v39 ? _v23.getState().reconcileCheckoutHref(_v0) ?? _v0 : _v0,
      _v26 = (0, _v2.useSearchParams)(),
      _v27 = (0, _v3.useRouter)(),
      _v28 = (0, _v19.useAuthPageEntry)(),
      _v29 = (0, _v18.resolveAuthOriginRoute)(_v27.pathname),
      [_v30, _v31] = (0, _v4.useState)(!1),
      [_v32, _v33] = (0, _v4.useState)(!1),
      [_v34, _v35] = (0, _v4.useState)(!1),
      {
        metadata: _v36,
        name: _v37,
        tier: _v38
      } = _v1,
      _v39 = "enterprise" === _v38,
      _v40 = void 0 !== _v6 && _v38 === _v6,
      _v41 = void 0 !== _v7 && ((0, _v22.getTierComparisonRank)(_v38) ?? 0) < ((0, _v22.getTierComparisonRank)(_v7) ?? 0) && "free" !== _v38,
      _v42 = (0, _v27.useViewer)(),
      _v43 = _v42?.teamUser?.ownerId ?? _v42?.user?.id,
      {
        data: _v44,
        isLoading: _v45
      } = (0, _v15.useGetUserSettingsBillingMembership)(() => _v41 && null != _v43 ? {
        select: ["subscriptionId", "hasAutorenew", "endDate", "gracePeriodType", "vendor"],
        where: {
          userId: _v43
        }
      } : null),
      {
        subscriptionId: _v46,
        subscriptionEndDate: _v47,
        gracePeriodType: _v48,
        isInGracePeriod: _v49,
        supportsGraceDowngrade: _v50,
        hasAutorenew: _v51
      } = (0, _v28.getDowngradeSubscriptionState)(_v44, _v45),
      _v52 = _v51 || _v34,
      _v53 = (0, _v16.translate)({
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
      _v54 = (0, _v16.translate)({
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
      _v55 = (0, _v16.translate)({
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
      _v56 = (0, _v16.translate)({
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
      _v57 = (0, _v16.translate)({
        singular: "Get {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v37
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
      _v58 = (0, _v16.translate)({
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
          hasPaid: _v59,
          hasMonthlyBilling: _v60,
          inAppSubscription: _v61
        }
      } = (0, _v12.useCapability)(["hasPaid", "hasMonthlyBilling", "inAppSubscription"]),
      _v62 = _v41 && !_v5 && _v59 && (_v60 && _v4 || !_v60 && !_v4),
      _v63 = _v41 && _v49 && (!_v46 || !_v50),
      [_v64, _v65] = (0, _v13.default)(_v23.SELECTED_BILLING_PLAN_ID_STORAGE_KEY, ""),
      _v66 = _v0 => {
        let _v1 = !_v4 && _v19.pricing_page_monthly_free_trial ? _v0?.replace(/\/trial(\?|$)/, "/monthly/trial$1") : _v0,
          _v2 = new URLSearchParams(_v26);
        _v2.delete(_v11.BUNDLE_OFFER_TOGGLE_PARAM);
        let _v3 = _v2.toString();
        if (!_v1 || !_v3) return _v25(_v1 || "");
        let _v4 = _v1.includes("?") ? "&" : "?";
        return _v25(`${_v1}${_v4}${_v3}`);
      },
      _v67 = !_v39 && !_v42?.user,
      _v68 = _v66(_v36.interactions?.purchase?.uri?.freeTrial),
      _v69 = (0, _v4.useMemo)(() => _v67 && _v68 ? _v34(_v68, "pricing_free_trial", _v29) : _v68, [_v67, _v68, _v29]),
      _v70 = (_v11 = _v36.interactions?.purchase?.uri?.[_v4 ? "annual" : "monthly"], _v12 = "", _v39 && _v3 ? _v12 = (_v0 => {
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
      })(_v3) : _v15.ctaQueryParams && (_v12 = `?${_v15.ctaQueryParams}`), _v13 = _v59 && !_v60, _v5 && _v36?.purchasedProduct == null && !_v13 && (_v12.includes("?") ? _v12 += "&show_billing_plans=1" : _v12 = "?show_billing_plans=1"), _v66(_v11 + _v12)),
      _v71 = (0, _v4.useMemo)(() => _v67 && _v70 ? _v34(_v70, "pricing_purchase", _v29) : _v70, [_v67, _v70, _v29]),
      _v72 = _v36?.interactions?.purchase?.status,
      _v73 = _v36?.purchasedProduct?.isMonthly,
      _v74 = _v15.ctaTreatment,
      _v75 = (0, _v21.getEffectivePurchaseStatus)({
        purchaseStatus: _v72,
        tier: _v38,
        isViewingAnnual: _v4,
        isPurchasedMonthly: _v73
      }),
      _v76 = "purchased" === _v75 && !_v40 && !_v41,
      _v77 = _v21 && (_v40 || _v76),
      _v78 = _v40 ? _v53 : _v77 ? _v54 : _v41 ? _v55 : _v39 ? _v56 : null != _v8 ? _v58 : _v57,
      _v79 = _v0 => {
        let _v1 = _v4 ? _v0.id.annual : _v0.id.monthly;
        _v0.metadata.isPsPlan && _v1 !== _v64 && _v65(_v1);
      },
      _v80 = !0 === _v15.hidePaidPlanSecondaryLinks,
      _v81 = !_v19.second_free_trial_enabled && !!_v42?.user?.capabilities?.hasSecondFreeTrialEligibility,
      _v82 = _v2 && !_v81,
      _v83 = !_v80 && _v82 && !_v40 && !_v41,
      _v84 = !_v80 && !_v40 && !_v41 && (_v82 || _v74 === _v29.CTA_TREATMENT.free_trial_secondary || _v74 === _v29.CTA_TREATMENT.free_trial_only) && _v74 !== _v29.CTA_TREATMENT.purchase_only,
      _v85 = _v40 || "available" !== _v75 || _v61,
      _v86 = _v4 ? "yearly" : "monthly",
      _v87 = _v39 ? "contact_sales" : _v38,
      _v88 = _v77 ? {
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
      } : _v41 ? {
        variant: "secondary"
      } : _v39 || "free" === _v1.tier ? {
        variant: "primary",
        bgColor: "text-primary",
        _hover: {
          backgroundColor: _v39 ? "gray.200" : "vimeoBlue.300"
        },
        _dark: {
          bgColor: "text-primary",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: _v39 ? "gray.200" : "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      } : {
        variant: "tertiary",
        bgColor: _v85 ? "text-primary" : "fill-brand",
        _hover: {
          backgroundColor: "vimeoBlue.300"
        },
        _dark: {
          bgColor: _v85 ? "text-primary" : "vimeoBlue.500",
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
      _v89 = (_v0, _v1, _v2, _v3) => {
        if (!_v3 || !_v67) return void ((_v0, _v1) => {
          if (!_v10) return _v1();
          let _v2 = _v0.currentTarget,
            _v3 = _v2 instanceof HTMLAnchorElement && _v2.href ? _v2.getAttribute("href") : null;
          _v0.preventDefault(), _v10(_v0 => {
            let _v1 = _v0 ?? _v3;
            _v1 && window.location.assign(_v1), _v1();
          }, _v3);
        })(_v0, _v1);
        if (_v10) {
          _v0.preventDefault(), _v10(_v0 => {
            window.location.assign(_v28(_v2, "join", _v0 ?? _v3)), _v1();
          }, _v3);
          return;
        }
        (0, _v14.isPlainLeftClick)(_v0) && (_v0.preventDefault(), window.location.assign(_v28(_v2, "join", _v3))), _v1();
      },
      _v90 = (0, _v1.jsx)(_v6.Button, {
        as: "a",
        size: _v20,
        width: "100%",
        href: _v39 ? _v70 : _v69,
        ...(!_v39 && {
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        }),
        _dark: {
          bgColor: _v39 || "free" === _v1.tier || _v85 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _hover: {
            backgroundColor: _v39 ? "gray.200" : "vimeoBlue.300"
          }
        },
        bgColor: _v39 ? "text-primary" : "fill-brand",
        variant: _v39 ? "primary" : "tertiary",
        onClick: _v0 => _v89(_v0, () => {
          _v22({
            plan: _v87,
            periodicity: _v86,
            freeTrial: !_v39
          }), _v79(_v1);
        }, "pricing_free_trial", _v68),
        ..._v0,
        children: _v39 ? (0, _v16.translate)({
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
        }) : "table" === _v3 ? (0, _v16.translate)({
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
        }) : _v15.paidPlanCtaLabel ?? (0, _v16.translate)({
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
      _v91 = (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v9.rem)(17)} ${(0, _v9.rem)(20)}`,
        children: (0, _v16.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v7.Link, {
              href: _v71,
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v89(_v0, () => {
                _v22({
                  plan: _v87,
                  periodicity: _v86,
                  freeTrial: !1
                }), _v79(_v1);
              }, "pricing_purchase", _v70),
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
    return _v74 !== _v29.CTA_TREATMENT.free_trial_primary || _v40 || _v41 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(!_v74 || _v74 === _v29.CTA_TREATMENT.purchase_only || _v74 === _v29.CTA_TREATMENT.purchase_primary) && (_v41 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.Tooltip, {
          label: (0, _v16.translate)({
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
          isDisabled: !_v62,
          placement: "top",
          children: (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsx)(_v6.Button, {
              size: _v20,
              width: "100%",
              ..._v88,
              isDisabled: _v62 || _v63,
              onClick: () => {
                _v22({
                  plan: _v87,
                  periodicity: _v86,
                  freeTrial: !1
                }), (0, _v28.shouldShowAutoRenewRetentionModal)(_v49, _v52) ? _v33(!0) : _v31(!0);
              },
              ..._v0,
              children: _v78
            })
          })
        }), (0, _v1.jsx)(_v24.AutoRenewRetentionModal, {
          isOpen: _v32,
          onClose: () => _v33(!1),
          onAutoRenewEnabled: () => {
            _v35(!0), _v33(!1), _v31(!0);
          },
          onError: _v0 => {
            _v14({
              variant: "warning",
              title: _v0 ?? (0, _v16.translate)({
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
          subscriptionId: _v46,
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          currentTier: _v7 ?? "",
          targetTier: _v38,
          endDate: _v47
        }), (0, _v1.jsx)(_v25.DowngradeFlowModal, {
          isOpen: _v30,
          onClose: () => _v31(!1),
          onSuccess: () => {
            window.location.reload();
          },
          onError: _v0 => {
            _v14({
              variant: "warning",
              title: _v0 ?? (0, _v16.translate)({
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
            subscriptionId: _v46,
            tier: _v7,
            billingPeriod: _v4 ? _v26.UserPlanType.Year : _v26.UserPlanType.Month,
            isFreeTrial: !1,
            renewalDate: "",
            hasAutorenew: _v52,
            gracePeriodType: _v50 ? _v48 : null
          },
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          currentTier: _v7,
          targetTier: _v38,
          targetPlanName: _v37,
          targetBillingPlanId: (_v4 ? _v1.id.annual : _v1.id.monthly) ?? "",
          totalSeats: 1
        })]
      }) : null != _v8 && _v9 ? (0, _v1.jsx)(_v6.Button, {
        size: _v20,
        width: "100%",
        onClick: () => {
          _v9();
        },
        ..._v0,
        children: _v78
      }) : (0, _v1.jsx)(_v6.Button, {
        as: "a",
        size: _v20,
        width: "100%",
        href: _v71,
        isDisabled: _v85,
        "aria-disabled": _v85,
        ..._v88,
        onClick: _v0 => _v89(_v0, () => {
          _v22({
            plan: _v87,
            periodicity: _v86,
            freeTrial: !1
          }), _v79(_v1);
        }, "pricing_purchase", _v70),
        ..._v0,
        children: _v78
      })), _v84 && (0, _v1.jsx)(() => !_v59 && (_v4 || _v19.pricing_page_monthly_free_trial) ? (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v9.rem)(17)} ${(0, _v9.rem)(20)}`,
        children: (0, _v16.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v7.Link, {
              href: _v69,
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v89(_v0, () => {
                _v22({
                  plan: _v87,
                  periodicity: _v86,
                  freeTrial: !0
                }), _v79(_v1);
              }, "pricing_free_trial", _v68),
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
      children: [_v90, _v83 && _v91]
    });
  }], 0);
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    hrefRedirect: _v1 = "/home",
    onPurchaseIntercept: _v2
  }) => {
    let _v3 = (0, _v4.useContext)(_v37.ViewerContext),
      [_v4, _v5] = (0, _v4.useState)(!1);
    return (0, _v1.jsx)(_v35.LoginJoinModal, {
      type: "join",
      xsrft: _v3?.xsrft || "",
      shouldOptIntoMarketing: _v3?.shouldOptIntoMarketing,
      onSuccess: () => {
        window.location.href = _v1;
      },
      isShowing: _v4,
      onDismiss: () => _v5(!1),
      faContainer: "upgrade-plan",
      children: () => (0, _v1.jsx)(_v6.Button, {
        size: "lg",
        width: "100%",
        isDisabled: _v3?.user?.account === _v36.AccountType.Free,
        variant: "tertiary",
        onClick: () => {
          _v2 ? _v2(() => {
            _v3?.user ? window.location.href = _v1 : _v5(!0);
          }) : _v3?.user ? window.location.href = _v1 : _v5(!0);
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
        children: _v3?.user?.account === _v36.AccountType.Free ? (0, _v16.translate)({
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
        }) : (0, _v16.translate)({
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