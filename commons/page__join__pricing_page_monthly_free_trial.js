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
    _v34 = _v0.i(0);
  let _v35 = (_v0, _v1, _v2) => (0, _v18.authAttributionUrl)(_v0, (0, _v18.buildAuthAttribution)({
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
    onPurchaseIntercept: _v10,
    postCheckoutUrl: _v11
  }) => {
    let _v12,
      _v13,
      _v14,
      _v15 = (0, _v10.useToast)(),
      _v16 = (0, _v4.useContext)(_v32.OverridesContext),
      {
        cardSurface: _v17,
        compact: _v18
      } = _v16,
      _v19 = (0, _v31.getPlanCardPresentation)(_v17, _v18),
      _v20 = (0, _v17.useOrionSettingsFields)(["pricing_page_monthly_free_trial", "second_free_trial_enabled"]),
      _v21 = _v19.ctaSize,
      {
        isRepackagingData: _v22
      } = (0, _v4.useContext)(_v33.PlansDataContext),
      {
        trackPricingPagePlanSelected: _v23
      } = (0, _v20.usePricingTracking)(),
      _v24 = (0, _v34.useBundleOfferStore)(),
      _v25 = (0, _v34.useBundleOfferSelector)(_v0 => !_v0.intercepts && _v0.isEnabled && _v0.isBundleActive),
      _v26 = _v0 => _v25 && !_v40 ? _v24.getState().reconcileCheckoutHref(_v0) ?? _v0 : _v0,
      _v27 = (0, _v2.useSearchParams)(),
      _v28 = (0, _v3.useRouter)(),
      _v29 = (0, _v19.useAuthPageEntry)(),
      _v30 = (0, _v18.resolveAuthOriginRoute)(_v28.pathname),
      [_v31, _v32] = (0, _v4.useState)(!1),
      [_v33, _v34] = (0, _v4.useState)(!1),
      [_v35, _v36] = (0, _v4.useState)(!1),
      {
        metadata: _v37,
        name: _v38,
        tier: _v39
      } = _v1,
      _v40 = "enterprise" === _v39,
      _v41 = void 0 !== _v6 && _v39 === _v6,
      _v42 = void 0 !== _v7 && ((0, _v22.getTierComparisonRank)(_v39) ?? 0) < ((0, _v22.getTierComparisonRank)(_v7) ?? 0) && "free" !== _v39,
      _v43 = (0, _v28.useViewer)(),
      _v44 = _v43?.teamUser?.ownerId ?? _v43?.user?.id,
      {
        data: _v45,
        isLoading: _v46
      } = (0, _v15.useGetUserSettingsBillingMembership)(() => _v42 && null != _v44 ? {
        select: ["subscriptionId", "hasAutorenew", "endDate", "gracePeriodType", "vendor"],
        where: {
          userId: _v44
        }
      } : null),
      {
        subscriptionId: _v47,
        subscriptionEndDate: _v48,
        gracePeriodType: _v49,
        isInGracePeriod: _v50,
        supportsGraceDowngrade: _v51,
        hasAutorenew: _v52
      } = (0, _v29.getDowngradeSubscriptionState)(_v45, _v46),
      _v53 = _v52 || _v35,
      _v54 = (0, _v16.translate)({
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
      _v55 = (0, _v16.translate)({
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
      _v56 = (0, _v16.translate)({
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
      _v57 = (0, _v16.translate)({
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
      _v58 = (0, _v16.translate)({
        singular: "Get {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v38
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
      _v59 = (0, _v16.translate)({
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
          hasPaid: _v60,
          hasMonthlyBilling: _v61,
          inAppSubscription: _v62
        }
      } = (0, _v12.useCapability)(["hasPaid", "hasMonthlyBilling", "inAppSubscription"]),
      _v63 = _v42 && !_v5 && _v60 && (_v61 && _v4 || !_v61 && !_v4),
      _v64 = _v42 && _v50 && (!_v47 || !_v51),
      [_v65, _v66] = (0, _v13.default)(_v23.SELECTED_BILLING_PLAN_ID_STORAGE_KEY, ""),
      _v67 = _v0 => {
        let _v1 = !_v4 && _v20.pricing_page_monthly_free_trial ? _v0?.replace(/\/trial(\?|$)/, "/monthly/trial$1") : _v0,
          _v2 = new URLSearchParams(_v27);
        _v2.delete(_v11.BUNDLE_OFFER_TOGGLE_PARAM);
        let _v3 = _v2.toString();
        if (!_v1 || !_v3) return _v26(_v1 || "");
        let _v4 = _v1.includes("?") ? "&" : "?";
        return _v26(`${_v1}${_v4}${_v3}`);
      },
      _v68 = !_v40 && !_v43?.user,
      _v69 = (0, _v27.appendPostCheckoutUrl)(_v67(_v37.interactions?.purchase?.uri?.freeTrial), _v11),
      _v70 = (0, _v4.useMemo)(() => _v68 && _v69 ? _v35(_v69, "pricing_free_trial", _v30) : _v69, [_v68, _v69, _v30]),
      _v71 = (_v12 = _v37.interactions?.purchase?.uri?.[_v4 ? "annual" : "monthly"], _v13 = "", _v40 && _v3 ? _v13 = (_v0 => {
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
      })(_v3) : _v16.ctaQueryParams && (_v13 = `?${_v16.ctaQueryParams}`), _v14 = _v60 && !_v61, _v5 && _v37?.purchasedProduct == null && !_v14 && (_v13.includes("?") ? _v13 += "&show_billing_plans=1" : _v13 = "?show_billing_plans=1"), (0, _v27.appendPostCheckoutUrl)(_v67(_v12 + _v13), _v11)),
      _v72 = (0, _v4.useMemo)(() => _v68 && _v71 ? _v35(_v71, "pricing_purchase", _v30) : _v71, [_v68, _v71, _v30]),
      _v73 = _v37?.interactions?.purchase?.status,
      _v74 = _v37?.purchasedProduct?.isMonthly,
      _v75 = _v16.ctaTreatment,
      _v76 = (0, _v21.getEffectivePurchaseStatus)({
        purchaseStatus: _v73,
        tier: _v39,
        isViewingAnnual: _v4,
        isPurchasedMonthly: _v74
      }),
      _v77 = "purchased" === _v76 && !_v41 && !_v42,
      _v78 = _v22 && (_v41 || _v77),
      _v79 = _v41 ? _v54 : _v78 ? _v55 : _v42 ? _v56 : _v40 ? _v57 : null != _v8 ? _v59 : _v58,
      _v80 = _v0 => {
        let _v1 = _v4 ? _v0.id.annual : _v0.id.monthly;
        _v0.metadata.isPsPlan && _v1 !== _v65 && _v66(_v1);
      },
      _v81 = !0 === _v16.hidePaidPlanSecondaryLinks,
      _v82 = !_v20.second_free_trial_enabled && !!_v43?.user?.capabilities?.hasSecondFreeTrialEligibility,
      _v83 = _v2 && !_v82,
      _v84 = !_v81 && _v83 && !_v41 && !_v42,
      _v85 = !_v81 && !_v41 && !_v42 && (_v83 || _v75 === _v30.CTA_TREATMENT.free_trial_secondary || _v75 === _v30.CTA_TREATMENT.free_trial_only) && _v75 !== _v30.CTA_TREATMENT.purchase_only,
      _v86 = _v41 || "available" !== _v76 || _v62,
      _v87 = _v4 ? "yearly" : "monthly",
      _v88 = _v40 ? "contact_sales" : _v39,
      _v89 = _v78 ? {
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
      } : _v42 ? {
        variant: "secondary"
      } : _v40 || "free" === _v1.tier ? {
        variant: "primary",
        bgColor: "text-primary",
        _hover: {
          backgroundColor: _v40 ? "gray.200" : "vimeoBlue.300"
        },
        _dark: {
          bgColor: "text-primary",
          color: "gray.900",
          _disabled: {
            bgColor: "stroke",
            pointerEvents: "none"
          },
          _hover: {
            backgroundColor: _v40 ? "gray.200" : "vimeoBlue.300"
          }
        },
        _disabled: {
          bgColor: "stroke",
          pointerEvents: "none"
        }
      } : {
        variant: "tertiary",
        bgColor: _v86 ? "text-primary" : "fill-brand",
        _hover: {
          backgroundColor: "vimeoBlue.300"
        },
        _dark: {
          bgColor: _v86 ? "text-primary" : "vimeoBlue.500",
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
      _v90 = (_v0, _v1, _v2, _v3) => {
        if (!_v3 || !_v68) return void ((_v0, _v1) => {
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
            window.location.assign(_v29(_v2, "join", _v0 ?? _v3)), _v1();
          }, _v3);
          return;
        }
        (0, _v14.isPlainLeftClick)(_v0) && (_v0.preventDefault(), window.location.assign(_v29(_v2, "join", _v3))), _v1();
      },
      _v91 = (0, _v1.jsx)(_v6.Button, {
        as: "a",
        size: _v21,
        width: "100%",
        href: _v40 ? _v71 : _v70,
        ...(!_v40 && {
          _hover: {
            backgroundColor: "vimeoBlue.300"
          }
        }),
        _dark: {
          bgColor: _v40 || "free" === _v1.tier || _v86 ? "text-primary" : "vimeoBlue.500",
          color: "gray.900",
          _hover: {
            backgroundColor: _v40 ? "gray.200" : "vimeoBlue.300"
          }
        },
        bgColor: _v40 ? "text-primary" : "fill-brand",
        variant: _v40 ? "primary" : "tertiary",
        onClick: _v0 => _v90(_v0, () => {
          _v23({
            plan: _v88,
            periodicity: _v87,
            freeTrial: !_v40
          }), _v80(_v1);
        }, "pricing_free_trial", _v69),
        ..._v0,
        children: _v40 ? (0, _v16.translate)({
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
        }) : _v16.paidPlanCtaLabel ?? (0, _v16.translate)({
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
      _v92 = (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v9.rem)(17)} ${(0, _v9.rem)(20)}`,
        children: (0, _v16.translate)({
          singular: "or {A}purchase now{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v7.Link, {
              href: _v72,
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v90(_v0, () => {
                _v23({
                  plan: _v88,
                  periodicity: _v87,
                  freeTrial: !1
                }), _v80(_v1);
              }, "pricing_purchase", _v71),
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
    return _v75 !== _v30.CTA_TREATMENT.free_trial_primary || _v41 || _v42 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(!_v75 || _v75 === _v30.CTA_TREATMENT.purchase_only || _v75 === _v30.CTA_TREATMENT.purchase_primary) && (_v42 ? (0, _v1.jsxs)(_v1.Fragment, {
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
          isDisabled: !_v63,
          placement: "top",
          children: (0, _v1.jsx)(_v5.Box, {
            children: (0, _v1.jsx)(_v6.Button, {
              size: _v21,
              width: "100%",
              ..._v89,
              isDisabled: _v63 || _v64,
              onClick: () => {
                _v23({
                  plan: _v88,
                  periodicity: _v87,
                  freeTrial: !1
                }), (0, _v29.shouldShowAutoRenewRetentionModal)(_v50, _v53) ? _v34(!0) : _v32(!0);
              },
              ..._v0,
              children: _v79
            })
          })
        }), (0, _v1.jsx)(_v24.AutoRenewRetentionModal, {
          isOpen: _v33,
          onClose: () => _v34(!1),
          onAutoRenewEnabled: () => {
            _v36(!0), _v34(!1), _v32(!0);
          },
          onError: _v0 => {
            _v15({
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
          subscriptionId: _v47,
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          currentTier: _v7 ?? "",
          targetTier: _v39,
          endDate: _v48
        }), (0, _v1.jsx)(_v25.DowngradeFlowModal, {
          isOpen: _v31,
          onClose: () => _v32(!1),
          onSuccess: () => {
            window.location.reload();
          },
          onError: _v0 => {
            _v15({
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
            subscriptionId: _v47,
            tier: _v7,
            billingPeriod: _v4 ? _v26.UserPlanType.Year : _v26.UserPlanType.Month,
            isFreeTrial: !1,
            renewalDate: "",
            hasAutorenew: _v53,
            gracePeriodType: _v51 ? _v49 : null
          },
          currentPlanName: _v7 ? _v7.charAt(0).toUpperCase() + _v7.slice(1) : "",
          currentTier: _v7,
          targetTier: _v39,
          targetPlanName: _v38,
          targetBillingPlanId: (_v4 ? _v1.id.annual : _v1.id.monthly) ?? "",
          totalSeats: 1
        })]
      }) : null != _v8 && _v9 ? (0, _v1.jsx)(_v6.Button, {
        size: _v21,
        width: "100%",
        onClick: () => {
          _v9();
        },
        ..._v0,
        children: _v79
      }) : (0, _v1.jsx)(_v6.Button, {
        as: "a",
        size: _v21,
        width: "100%",
        href: _v72,
        isDisabled: _v86,
        "aria-disabled": _v86,
        ..._v89,
        onClick: _v0 => _v90(_v0, () => {
          _v23({
            plan: _v88,
            periodicity: _v87,
            freeTrial: !1
          }), _v80(_v1);
        }, "pricing_purchase", _v71),
        ..._v0,
        children: _v79
      })), _v85 && (0, _v1.jsx)(() => !_v60 && (_v4 || _v20.pricing_page_monthly_free_trial) ? (0, _v1.jsx)(_v5.Box, {
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        marginTop: 8,
        padding: `${(0, _v9.rem)(17)} ${(0, _v9.rem)(20)}`,
        children: (0, _v16.translate)({
          singular: "or {A}start free trial{/A}",
          replacements: {
            A: _v0 => (0, _v1.jsx)(_v7.Link, {
              href: _v70,
              variant: "inline-primary",
              fontWeight: 500,
              onClick: _v0 => _v90(_v0, () => {
                _v23({
                  plan: _v88,
                  periodicity: _v87,
                  freeTrial: !0
                }), _v80(_v1);
              }, "pricing_free_trial", _v69),
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
      children: [_v91, _v84 && _v92]
    });
  }], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  _v0.s(["default", 0, ({
    buttonProps: _v0,
    hrefRedirect: _v1 = "/home",
    onPurchaseIntercept: _v2
  }) => {
    let _v3 = (0, _v4.useContext)(_v38.ViewerContext),
      [_v4, _v5] = (0, _v4.useState)(!1);
    return (0, _v1.jsx)(_v36.LoginJoinModal, {
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
        isDisabled: _v3?.user?.account === _v37.AccountType.Free,
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
        children: _v3?.user?.account === _v37.AccountType.Free ? (0, _v16.translate)({
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