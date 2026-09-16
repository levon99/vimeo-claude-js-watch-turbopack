{
  "use strict";

  _v0.s(["default", () => _v50], 0);
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
    _v23 = _v0.i(0);
  let _v24 = ({
    tier: _v0
  }) => {
    let _v1 = (0, _v2.useContext)(_v16.OverridesContext),
      _v2 = _v1?.subHeadingType?.[_v0];
    return (0, _v1.jsx)(_v5.Paragraph, {
      fontSize: "18",
      children: _v2
    });
  };
  _v0.s(["default", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = _v32.default.div.withConfig({
      displayName: "styles__MenuWrapper",
      componentId: "sc-f1e205c8-0"
    })`
  position: relative;
  ${({
      disabled: _v0
    }) => _v0 && _v32.css`
      pointer-events: none;
      cursor: not-allowed;
    `}
`,
    _v38 = _v32.default.div.withConfig({
      displayName: "styles__Menu",
      componentId: "sc-f1e205c8-1"
    })`
  display: flex;
  color: #566;
  &:hover {
    background: ${_v33.bokehTheme.colors.gray["100"]};
    border-radius: ${(0, _v31.rem)(4)};
    cursor: pointer;
  }
  > div {
    text-decoration: underline;
  }
`,
    _v39 = (0, _v32.default)(_v34.ChevronDown).withConfig({
      displayName: "styles__ChevronDownStyled",
      componentId: "sc-f1e205c8-2"
    })`
  margin-top: ${(0, _v31.rem)(-2)};
  width: ${(0, _v31.rem)(20)};
  height: ${(0, _v31.rem)(20)};

  path {
    fill: #566;
  }
`,
    _v40 = _v32.default.span.withConfig({
      displayName: "styles__Accent",
      componentId: "sc-f1e205c8-3"
    })`
  padding-left: ${(0, _v31.rem)(4)};
  color: #4ec437;
`,
    _v41 = _v32.default.div.withConfig({
      displayName: "styles__PriceListWrapper",
      componentId: "sc-f1e205c8-4"
    })`
  padding: ${(0, _v31.rem)(8)} 0;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: ${(0, _v31.rem)(4)};

  span {
    ${(0, _v36.addTypography)(12, 14)};
  }
`,
    _v42 = _v32.default.div.withConfig({
      displayName: "styles__PriceFrequency",
      componentId: "sc-f1e205c8-5"
    })`
  font-weight: normal;
  ${(0, _v36.addTypography)(14, 16)};
  color: #566;
  letter-spacing: unset;
`,
    _v43 = (0, _v32.default)(_v42).withConfig({
      displayName: "styles__PriceFrequencySelector",
      componentId: "sc-f1e205c8-6"
    })`
  font-weight: 500;
  ${(0, _v36.addTypography)(14, 16)};
  letter-spacing: unset;
`;
  (0, _v32.default)(_v35.ReviewCheck).withConfig({
    displayName: "styles__ReviewIconStyled",
    componentId: "sc-f1e205c8-7"
  })`
  width: ${(0, _v31.rem)(38)};
  width: ${(0, _v31.rem)(34)};
  margin-top: ${(0, _v31.rem)(-2)};
`;
  var _v44 = _v0.i(0);
  let _v45 = _v0 => {
      let [_v1, _v2] = (0, _v2.useState)(!1),
        _v3 = (0, _v2.useRef)(null),
        {
          isMonthly: _v4,
          purchased: _v5,
          disabled: _v6
        } = _v0,
        {
          trackPricingPagePlanSelected: _v7
        } = (0, _v30.usePricingTracking)();
      (0, _v29.useOutsideClick)([_v3], () => {
        _v1 && _v2(!1);
      });
      let _v8 = (0, _v1.jsx)(_v41, {
          children: (0, _v1.jsxs)(_v28.Pop.List, {
            children: [(0, _v1.jsx)(_v28.Pop.Item, {
              onClick: () => {
                _v7({
                  plan: _v0.tier,
                  periodicity: "yearly",
                  freeTrial: !1
                }), (0, _v44.emitBPEvent)({
                  copy: "billed annually",
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: _v0.tier,
                  duration: "annual",
                  purchase_type: "direct",
                  path: window.location.href,
                  target_path: _v0.annualStoreUrl,
                  is_discount: !1,
                  currency: _v0.currency?.currencyCode,
                  price: _v0.price?.annualMonthly
                }), window.location.href = _v0.annualStoreUrl;
              },
              children: _v0.annualDiscount > 0 ? (0, _v12.translate)({
                singular: "{PRICE} per month, billed annually {ACCENT}(save {PERCENT}%){/ACCENT}",
                replacements: {
                  PRICE: `${_v0.currency?.symbol}${_v0.price?.annualMonthly}`,
                  ACCENT: _v0 => (0, _v1.jsx)(_v40, {
                    children: _v0
                  }, "dropdown-accent"),
                  PERCENT: _v0.annualDiscount
                },
                dictionary: {
                  es: {
                    singular: "{PRICE} al mes, facturados anualmente {ACCENT}(ahorra {PERCENT} %){/ACCENT}"
                  },
                  "de-DE": {
                    singular: "{PRICE} pro Monat, jährlich abgerechnet {ACCENT}({PERCENT}%{/ACCENT} gespart)"
                  },
                  "fr-FR": {
                    singular: "{PRICE} par mois, facturé annuellement {ACCENT}(économisez {PERCENT}%){/ACCENT}"
                  },
                  "ja-JP": {
                    singular: "{PRICE} /月、年払い {ACCENT}({PERCENT}%オフ){/ACCENT}"
                  },
                  "ko-KR": {
                    singular: "{PRICE}/월, 연간 청구 {ACCENT}({PERCENT}% 할인){/ACCENT}"
                  },
                  "pt-BR": {
                    singular: "{PRICE}por mês, cobrado anualmente {ACCENT}(economize {PERCENT}%){/ACCENT}"
                  },
                  "zh-CN": {
                    singular: "每月 {PRICE}，按年计费{ACCENT}（节省 {PERCENT}%）{/ACCENT}"
                  }
                }
              }) : (0, _v12.translate)({
                singular: "{PRICE} per month, billed annually",
                replacements: {
                  PRICE: `${_v0.currency?.symbol}${_v0.price?.annualMonthly}`
                },
                dictionary: {
                  es: {
                    singular: "{PRICE} al mes, facturados anualmente"
                  },
                  "de-DE": {
                    singular: "{PRICE} pro Monat, jährlich abgerechnet"
                  },
                  "fr-FR": {
                    singular: "{PRICE} par mois, facturé annuellement"
                  },
                  "ja-JP": {
                    singular: "{PRICE}/月（年払い）"
                  },
                  "ko-KR": {
                    singular: "월 {PRICE} 연간 청구"
                  },
                  "pt-BR": {
                    singular: "{PRICE} por mês, cobrados anualmente"
                  },
                  "zh-CN": {
                    singular: "每月 {PRICE}，按年计费"
                  }
                }
              })
            }), (0, _v1.jsx)(_v28.Pop.Item, {
              onClick: () => {
                _v7({
                  plan: _v0.tier,
                  periodicity: "monthly",
                  freeTrial: !1
                }), (0, _v44.emitBPEvent)({
                  copy: "billed monthly",
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: _v0.tier,
                  duration: "monthly",
                  purchase_type: "direct",
                  path: window.location.href,
                  target_path: _v0.annualStoreUrl,
                  is_discount: !1,
                  currency: _v0.currency?.currencyCode,
                  price: _v0.price?.monthly
                }), window.location.href = _v0.monthlyStoreUrl;
              },
              children: (0, _v12.translate)({
                singular: "{PRICE} per month, billed monthly",
                replacements: {
                  PRICE: `${_v0.currency?.symbol}${_v0.price?.monthly}`
                },
                dictionary: {
                  es: {
                    singular: "{PRICE} al mes, facturados mensualmente"
                  },
                  "de-DE": {
                    singular: "{PRICE} pro Monat, monatlich abgerechnet"
                  },
                  "fr-FR": {
                    singular: "{PRICE} par mois, facturé mensuellement"
                  },
                  "ja-JP": {
                    singular: "{PRICE} /月、月額払い"
                  },
                  "ko-KR": {
                    singular: "{PRICE}/월, 월간 청구"
                  },
                  "pt-BR": {
                    singular: "{PRICE} por mês, cobrado mensalmente"
                  },
                  "zh-CN": {
                    singular: "每月 {PRICE}，按月结算"
                  }
                }
              })
            })]
          })
        }),
        _v9 = () => (0, _v1.jsx)(_v43, {
          children: (0, _v12.translate)({
            singular: "billed annually",
            dictionary: {
              es: {
                singular: "facturados anualmente"
              },
              "de-DE": {
                singular: "Jährliche Abrechnung"
              },
              "fr-FR": {
                singular: "facturé annuellement"
              },
              "ja-JP": {
                singular: "年払い"
              },
              "ko-KR": {
                singular: "연간 청구"
              },
              "pt-BR": {
                singular: "fatura enviada anualmente"
              },
              "zh-CN": {
                singular: "按年计费"
              }
            }
          })
        });
      return _v5 ? _v4 ? (0, _v1.jsx)(_v42, {
        children: (0, _v12.translate)({
          singular: "billed monthly",
          dictionary: {
            es: {
              singular: "facturados de forma mensual"
            },
            "de-DE": {
              singular: "monatliche Abrechnung"
            },
            "fr-FR": {
              singular: "facturés mensuellement"
            },
            "ja-JP": {
              singular: "月払い"
            },
            "ko-KR": {
              singular: "월간 청구"
            },
            "pt-BR": {
              singular: "cobrado mensalmente"
            },
            "zh-CN": {
              singular: "按月计费"
            }
          }
        })
      }) : (0, _v1.jsx)(_v9, {}) : (0, _v1.jsxs)(_v25.Popover, {
        onOpen: () => (0, _v44.emitBPEvent)({
          copy: "monthly dropdown",
          action_type: "expand",
          location: "our_plans",
          path: window.location.href
        }),
        placement: "bottom",
        children: [(0, _v1.jsx)(_v26.PopoverTrigger, {
          children: (0, _v1.jsx)(_v37, {
            disabled: _v6,
            children: (0, _v1.jsxs)(_v38, {
              id: "plus-monthly-dropdown",
              children: [(0, _v1.jsx)(_v9, {}), (0, _v1.jsx)(_v39, {})]
            })
          })
        }), (0, _v1.jsx)(_v27.PopoverContent, {
          children: _v8
        })]
      });
    },
    _v46 = new Set(["starter", "standard", "advanced"]),
    _v47 = _v0 => (0, _v1.jsx)(_v13.EnterpriseFeatureList, {
      children: _v0.map(_v0 => (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v22.StyledCheckmark, {}), (0, _v1.jsx)(_v5.Paragraph, {
          children: _v0
        })]
      }, _v0 + "cards-feature-list-horizontal"))
    }),
    _v48 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.Text, {
      variant: "body-lg",
      textColor: "text-primary",
      letterSpacing: (0, _v7.rem)(-.48),
      children: _v0
    }),
    _v49 = ({
      icon: _v0,
      children: _v1,
      align: _v2 = "center"
    }) => (0, _v1.jsxs)(_v3.Box, {
      display: "flex",
      gap: (0, _v7.rem)(4),
      alignItems: _v2,
      children: [(0, _v1.jsx)(_v3.Box, {
        display: "flex",
        flexShrink: 0,
        children: _v0
      }), _v1]
    }),
    _v50 = ({
      planData: _v0,
      showBadge: _v1,
      showYearly: _v2 = !0,
      isPageTopToggleVisible: _v3
    }) => {
      let _v4,
        _v5,
        _v6,
        _v7,
        _v8,
        _v9,
        _v10,
        _v11,
        _v12,
        _v13,
        _v14,
        _v15 = (0, _v2.useContext)(_v17.PlansDataContext),
        _v16 = (0, _v2.useContext)(_v16.OverridesContext),
        {
          isFlatRateData: _v17,
          isSolutionData: _v18,
          plansData: _v19
        } = _v15,
        _v20 = _v19 && _v19.length > _v14.maxVerticalCards,
        _v21 = "enterprise" === _v0.tier,
        _v22 = (0, _v20.useBundleCtaIntercept)(_v0.tier),
        _v23 = (0, _v20.useBundleOfferSelector)(_v0 => _v0.isBundleActive),
        _v24 = (0, _v20.useBundleOfferSelector)(_v0 => _v0.isEnabled),
        _v25 = (0, _v20.useBundleOfferSelector)(_v0 => _v0.bundleType),
        _v26 = (0, _v20.useBundleOfferSelector)(_v0 => _v0.price),
        _v27 = (0, _v15.getFeatureListByTier)(_v0.tier, _v17, _v18) ?? [],
        _v28 = (0, _v15.getCardFeatureSubhead)(_v19, _v0.tier, _v17, _v18),
        _v29 = _v0 => (0, _v1.jsx)(_v3.Box, {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: (0, _v7.rem)(306),
          width: "100%",
          ..._v0,
          children: _v0.children
        }),
        _v30 = _v0 => (0, _v1.jsx)(_v3.Box, {
          display: "flex",
          justifyContent: "space-between",
          children: _v0.children
        });
      return (0, _v1.jsxs)(_v3.Box, {
        border: `${(0, _v7.rem)(8)} solid transparent`,
        display: "flex",
        position: "relative",
        "data-testid": "horizontal-plan-card",
        children: [(0, _v1.jsx)(_v18.default, {
          showBadge: _v1,
          planData: _v0
        }), (0, _v1.jsxs)(_v3.Box, {
          padding: `${(0, _v7.rem)(52)} ${(0, _v7.rem)(44)} ${(0, _v7.rem)(48)}`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          border: `'var(--vimeo-colors-fill-surface)' solid ${(0, _v7.rem)(1)}`,
          borderRadius: (0, _v7.rem)(32),
          opacity: _v0?.metadata?.interactions?.purchase?.status !== "available" ? "0.6" : "initial",
          children: [(0, _v1.jsx)(_v23.CardBorder, {
            showBadge: _v1,
            purchaseStatus: _v0?.metadata?.interactions?.purchase?.status || ""
          }), _v19 && _v20 && (_v21 ? (_v4 = Math.ceil(_v27.length / 2), (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v29, {
              children: [(0, _v1.jsxs)(_v3.Box, {
                children: [(0, _v1.jsxs)(_v23.PlanTitle, {
                  as: "h2",
                  size: "2",
                  children: [_v0.name, " ", (0, _v1.jsx)(_v19.default, {
                    showBadge: _v0?.metadata?.interactions?.purchase?.status === "purchased"
                  })]
                }), _v16?.subHeadingType?.[_v0.tier] && (0, _v1.jsx)(_v24, {
                  tier: _v0.tier
                })]
              }), (0, _v1.jsx)(_v3.Box, {
                children: (0, _v1.jsxs)(_v3.Box, {
                  display: "flex",
                  children: [(0, _v1.jsx)(_v8.Building, {
                    h: (0, _v7.rem)(26),
                    w: (0, _v7.rem)(26)
                  }), (0, _v1.jsx)(_v4.Header, {
                    size: "xl",
                    as: "h3",
                    marginLeft: (0, _v7.rem)(5),
                    variant: "heading-md",
                    children: (0, _v12.translate)({
                      singular: "Talk to our team for pricing",
                      dictionary: {
                        es: {
                          singular: "Consulte los precios a nuestro equipo"
                        },
                        "de-DE": {
                          singular: "Besprechen Sie mögliche Preismodelle mit unserem Team"
                        },
                        "fr-FR": {
                          singular: "Contactez notre équipe pour connaître les tarifs"
                        },
                        "ja-JP": {
                          singular: "料金: 要問い合わせ"
                        },
                        "ko-KR": {
                          singular: "요금과 관련된 자세한 내용은 영업팀으로 문의해 주세요."
                        },
                        "pt-BR": {
                          singular: "Fale com a nossa equipe sobre valores"
                        },
                        "zh-CN": {
                          singular: "请向我们的团队了解价格"
                        }
                      }
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v21.default, {
                planData: _v0,
                location: "horizontal",
                showYearly: _v2,
                onPurchaseIntercept: _v22
              })]
            }), (0, _v1.jsxs)(_v29, {
              children: [(0, _v1.jsx)(_v3.Box, {
                marginBottom: 12,
                lineHeight: 18,
                children: (0, _v1.jsx)(_v5.Paragraph, {
                  fontWeight: 500,
                  children: _v28
                })
              }), (0, _v1.jsx)(_v30, {
                children: _v47(_v27.slice(0, _v4))
              })]
            }), (0, _v1.jsx)(_v29, {
              children: (0, _v1.jsx)(_v30, {
                children: _v47(_v27.slice(_v4))
              })
            })]
          })) : (_v5 = _v0.metadata?.entitlements?.params, _v6 = _v5?.teamSeats ?? 0, _v7 = (0, _v12.translate)({
            singular: "{AMOUNT} user",
            plural: "{AMOUNT} users",
            count: _v6,
            replacements: {
              AMOUNT: _v6
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
          }), _v8 = _v5?.videoStorageQuotaUnit === "video_count" ? (0, _v12.translate)({
            singular: "{AMOUNT} videos",
            replacements: {
              AMOUNT: _v5?.videoStoragePeriodicQuota
            },
            dictionary: {
              "de-DE": {
                singular: "{AMOUNT} Videos"
              },
              "fr-FR": {
                singular: "{AMOUNT} vidéos"
              },
              "ja-JP": {
                singular: "{AMOUNT}件の動画"
              },
              "ko-KR": {
                singular: "동영상 {AMOUNT}개"
              },
              "pt-BR": {
                singular: "{AMOUNT} vídeos"
              },
              "zh-CN": {
                singular: "{AMOUNT} 个视频"
              }
            }
          }) : (0, _v12.translate)({
            singular: "{AMOUNT} storage",
            replacements: {
              AMOUNT: _v5?.videoStoragePeriodicQuota
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de almacenamiento"
              },
              "de-DE": {
                singular: "{AMOUNT} Speicherplatz"
              },
              "fr-FR": {
                singular: "{AMOUNT} de stockage"
              },
              "ja-JP": {
                singular: "{AMOUNT}のストレージ"
              },
              "ko-KR": {
                singular: "총 저장 공간 {AMOUNT}"
              },
              "pt-BR": {
                singular: "{AMOUNT} de armazenamento"
              },
              "zh-CN": {
                singular: "{AMOUNT} 存储空间"
              }
            }
          }), _v9 = _v2 ? _v0.priceFormatted?.annualMonthly : _v0.priceFormatted?.monthly, _v10 = _v2 ? (0, _v12.translate)({
            singular: "billed annually",
            dictionary: {
              es: {
                singular: "facturados anualmente"
              },
              "de-DE": {
                singular: "Jährliche Abrechnung"
              },
              "fr-FR": {
                singular: "facturé annuellement"
              },
              "ja-JP": {
                singular: "年払い"
              },
              "ko-KR": {
                singular: "연간 청구"
              },
              "pt-BR": {
                singular: "fatura enviada anualmente"
              },
              "zh-CN": {
                singular: "按年计费"
              }
            }
          }) : (0, _v12.translate)({
            singular: "billed monthly",
            dictionary: {
              es: {
                singular: "facturados de forma mensual"
              },
              "de-DE": {
                singular: "monatliche Abrechnung"
              },
              "fr-FR": {
                singular: "facturés mensuellement"
              },
              "ja-JP": {
                singular: "月払い"
              },
              "ko-KR": {
                singular: "월간 청구"
              },
              "pt-BR": {
                singular: "cobrado mensalmente"
              },
              "zh-CN": {
                singular: "按月计费"
              }
            }
          }), _v11 = !_v3 && !!_v0.price?.monthly && _v16?.showMonthlyDropdown !== !1, _v12 = Math.floor(_v27.length / 2), _v13 = (0, _v1.jsxs)(_v3.Box, {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v7.rem)(12),
            width: (0, _v7.rem)(306),
            children: [(0, _v1.jsx)(_v49, {
              icon: (0, _v1.jsx)(_v10.Users, {
                boxSize: (0, _v7.rem)(20)
              }),
              children: (0, _v1.jsx)(_v48, {
                children: _v7
              })
            }), (0, _v1.jsx)(_v49, {
              icon: (0, _v1.jsx)(_v9.Database, {
                boxSize: (0, _v7.rem)(20)
              }),
              children: (0, _v1.jsx)(_v48, {
                children: _v8
              })
            }), _v27.slice(0, _v12).map((_v0, _v1) => (0, _v1.jsx)(_v49, {
              icon: (0, _v1.jsx)(_v13.FeatureCheckIcon, {}),
              align: "flex-start",
              children: (0, _v1.jsx)(_v48, {
                children: _v0
              })
            }, `low-tier-feature-col1-${_v1}`))]
          }), _v14 = (0, _v1.jsx)(_v3.Box, {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v7.rem)(12),
            children: _v27.slice(_v12).map((_v0, _v1) => (0, _v1.jsx)(_v49, {
              icon: (0, _v1.jsx)(_v13.FeatureCheckIcon, {}),
              align: "flex-start",
              children: (0, _v1.jsx)(_v48, {
                children: _v0
              })
            }, `low-tier-feature-col2-${_v1}`))
          }), (0, _v1.jsxs)(_v3.Box, {
            position: "relative",
            display: "flex",
            gap: (0, _v7.rem)(180),
            alignItems: "flex-start",
            width: "100%",
            children: [(0, _v1.jsxs)(_v3.Box, {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignSelf: "stretch",
              width: (0, _v7.rem)(290),
              children: [(0, _v1.jsxs)(_v3.Box, {
                display: "flex",
                flexDirection: "column",
                gap: (0, _v7.rem)(8),
                paddingBottom: (0, _v7.rem)(10),
                children: [(0, _v1.jsxs)(_v23.PlanTitle, {
                  as: "h2",
                  size: "lg",
                  children: [_v0.name, " ", (0, _v1.jsx)(_v19.default, {
                    showBadge: _v0?.metadata?.interactions?.purchase?.status === "purchased"
                  })]
                }), _v16?.subHeadingType?.[_v0.tier] && (0, _v1.jsx)(_v24, {
                  tier: _v0.tier
                }), _v46.has(_v0.tier) && _v24 && _v25 && (0, _v1.jsx)(_v3.Box, {
                  marginTop: (0, _v7.rem)(12),
                  marginBottom: (0, _v7.rem)(8),
                  children: (0, _v1.jsx)(_v11.BundlePlanCardStrip, {
                    bundleType: _v25,
                    isVisible: _v23,
                    price: _v26
                  })
                }), (0, _v1.jsxs)(_v3.Box, {
                  display: "flex",
                  gap: (0, _v7.rem)(12),
                  alignItems: "flex-start",
                  children: [(0, _v1.jsx)(_v6.Text, {
                    as: "p",
                    variant: "heading-sm",
                    fontSize: "48",
                    fontWeight: 500,
                    lineHeight: "1",
                    letterSpacing: (0, _v7.rem)(-2.4),
                    whiteSpace: "nowrap",
                    children: _v9
                  }), (0, _v1.jsxs)(_v3.Box, {
                    display: "flex",
                    flexDirection: "column",
                    gap: (0, _v7.rem)(4),
                    children: [(0, _v1.jsx)(_v6.Text, {
                      variant: "body-lg",
                      textColor: "text-secondary",
                      lineHeight: "1.2",
                      children: _v11 ? (0, _v12.translate)({
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
                      }) : `${(0, _v12.translate)({
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
                      })}, ${_v10},`
                    }), _v11 && (0, _v1.jsx)(_v45, {
                      price: _v0.price,
                      annualDiscount: _v0.discount?.annual || 0,
                      annualStoreUrl: _v0.metadata?.interactions?.purchase?.uri?.annual || "/upgrade",
                      monthlyStoreUrl: _v0.metadata?.interactions?.purchase?.uri?.monthly || "/upgrade",
                      showPerSeatPricingDetails: !0,
                      isMonthly: _v0.metadata?.purchasedProduct?.isMonthly,
                      purchased: _v0.metadata?.purchasedProduct != null,
                      currency: _v0.currency,
                      disabled: _v0.metadata?.interactions?.purchase?.status !== "available",
                      tier: _v0.tier
                    }), (0, _v1.jsx)(_v6.Text, {
                      variant: "body-lg",
                      textColor: "text-secondary",
                      lineHeight: "1.2",
                      children: (0, _v12.translate)({
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
                      })
                    })]
                  })]
                })]
              }), (0, _v1.jsx)(_v21.default, {
                planData: _v0,
                location: "horizontal",
                showYearly: _v2,
                onPurchaseIntercept: _v22
              })]
            }), (0, _v1.jsxs)(_v3.Box, {
              display: "flex",
              flex: "1",
              flexDirection: "column",
              gap: (0, _v7.rem)(16),
              paddingTop: (0, _v7.rem)(12),
              paddingBottom: (0, _v7.rem)(4),
              children: [(0, _v1.jsx)(_v5.Paragraph, {
                fontWeight: 500,
                children: _v28
              }), (0, _v1.jsxs)(_v3.Box, {
                display: "flex",
                flexWrap: "wrap",
                alignItems: "flex-start",
                rowGap: (0, _v7.rem)(12),
                columnGap: (0, _v7.rem)(80),
                width: "100%",
                children: [_v13, _v14]
              })]
            })]
          })))]
        })]
      });
    };
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = _v0 => {
      let {
        compact: _v1
      } = (0, _v2.useContext)(_v16.OverridesContext);
      return (0, _v1.jsx)(_v6.Text, {
        variant: _v1 ? "heading-xl" : "heading-sm",
        fontSize: _v1 ? void 0 : "48",
        marginRight: "4",
        float: "left",
        whiteSpace: "nowrap",
        display: "inline",
        as: "p",
        ..._v0,
        children: _v0.children
      });
    },
    _v56 = ({
      children: _v0
    }) => {
      let {
        compact: _v1
      } = (0, _v2.useContext)(_v16.OverridesContext);
      return (0, _v1.jsx)(_v6.Text, {
        variant: "heading-sm",
        fontSize: _v1 ? "12" : void 0,
        fontWeight: 400,
        textColor: "text-secondary",
        children: _v0
      });
    },
    _v57 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v55, {
      color: "stroke",
      textDecoration: "line-through",
      textDecorationThickness: "2px",
      fontWeight: 400,
      children: _v0
    }),
    _v58 = (_v0, _v1) => {
      let {
          entitlements: _v2,
          isBandwidthProduct: _v3
        } = _v0?.metadata,
        {
          videoStorageQuotaUnit: _v4
        } = _v2?.params;
      if (_v3) return null;
      switch (_v0.tier) {
        case "free":
          return (0, _v12.translate)({
            singular: "per user",
            dictionary: {
              es: {
                singular: "por usuario"
              },
              "de-DE": {
                singular: "pro Nutzer*in"
              },
              "fr-FR": {
                singular: "par utilisateur"
              },
              "ja-JP": {
                singular: "ユーザーあたり"
              },
              "ko-KR": {
                singular: "사용자당"
              },
              "pt-BR": {
                singular: "por usuário(a)"
              },
              "zh-CN": {
                singular: "每用户"
              }
            }
          });
        case "customSelfServe":
          return null;
        case "enterprise":
          return (0, _v12.translate)({
            singular: "Talk to our team for pricing",
            dictionary: {
              es: {
                singular: "Consulte los precios a nuestro equipo"
              },
              "de-DE": {
                singular: "Besprechen Sie mögliche Preismodelle mit unserem Team"
              },
              "fr-FR": {
                singular: "Contactez notre équipe pour connaître les tarifs"
              },
              "ja-JP": {
                singular: "料金: 要問い合わせ"
              },
              "ko-KR": {
                singular: "요금과 관련된 자세한 내용은 영업팀으로 문의해 주세요."
              },
              "pt-BR": {
                singular: "Fale com a nossa equipe sobre valores"
              },
              "zh-CN": {
                singular: "请向我们的团队了解价格"
              }
            }
          });
        default:
          return _v1 || !_v1 && "video_size" === _v4 ? (0, _v12.translate)({
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
          }) : (0, _v12.translate)({
            singular: "per seat / month",
            dictionary: {
              es: {
                singular: "por puesto al mes"
              },
              "de-DE": {
                singular: "pro Lizenz pro Monat"
              },
              "fr-FR": {
                singular: "par licence/mois"
              },
              "ja-JP": {
                singular: "1シートライセンスあたり / 月々"
              },
              "ko-KR": {
                singular: "사용자 라이선스당/월"
              },
              "pt-BR": {
                singular: "por licença/mês"
              },
              "zh-CN": {
                singular: "/席位/月"
              }
            }
          });
      }
    };
  _v0.s(["default", 0, ({
    planData: _v0,
    showYearly: _v1,
    isBillingFreqToggleAvailable: _v2,
    disabled: _v3,
    showStrikePrice: _v4,
    isMobileBreakpoint: _v5,
    renewalDiscount: _v6
  }) => {
    let {
        currency: _v7,
        price: _v8,
        metadata: _v9,
        discount: _v10,
        tier: _v11,
        promotion: _v12,
        priceFormatted: _v13
      } = _v0,
      _v14 = _v0.metadata.purchasedProduct ?? null,
      {
        isFlatRateData: _v15
      } = (0, _v2.useContext)(_v17.PlansDataContext),
      _v16 = (0, _v2.useContext)(_v16.OverridesContext),
      _v17 = (0, _v2.useContext)(_v54.ViewerContext),
      _v18 = (0, _v53.isUkLocation)(_v17?.location),
      {
        capabilities: {
          hasMonthlyBilling: _v19,
          hasPaid: _v20
        }
      } = (0, _v52.useCapability)(["hasMonthlyBilling", "hasPaid"]),
      _v21 = (0, _v2.useRef)(null),
      _v22 = _v18 && _v7?.currencyCode ? (0, _v53.formatUkVatPrice)(_v1 || "free" === _v11 ? _v12?.price?.annualMonthly ? _v12.price.annualMonthly : "customSelfServe" === _v11 || _v9.isBandwidthProduct ? _v8?.annual : _v8?.annualMonthly : _v12?.price?.monthly ? _v12.price.monthly : _v8?.monthly, _v7?.currencyCode) ?? null : null,
      _v23 = _v6 && _v7?.currencyCode ? new Intl.NumberFormat("en", {
        style: "currency",
        currency: _v7.currencyCode,
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(_v6.discountedMonthlyPrice) : null,
      _v24 = _v23 ?? _v22 ?? (_v1 || "free" === _v11 ? _v14 && !_v9.isBandwidthProduct && (!_v14?.isMonthly || _v15) ? _v14?.displayPriceFormatted : _v12?.priceFormatted?.annualMonthly ? _v12.priceFormatted.annualMonthly : "customSelfServe" === _v11 || _v9.isBandwidthProduct ? _v13?.annual : _v13?.annualMonthly : _v14 && _v14?.isMonthly ? _v14?.displayPriceFormatted : _v12?.priceFormatted?.monthly ? _v12.priceFormatted.monthly : _v13?.monthly);
    return ((0, _v2.useLayoutEffect)(() => {
      let _v0 = _v21.current,
        _v1 = _v0?.firstElementChild;
      _v1 && _v1.innerText.length > 5 && (_v1.style.fontSize = (0, _v7.rem)(30));
    }, [_v24]), "enterprise" === _v11) ? (0, _v1.jsxs)(_v3.Box, {
      marginTop: "21",
      display: "flex",
      alignItems: "center",
      gap: (0, _v7.rem)(8),
      minHeight: (0, _v7.rem)(115),
      children: [_v5 ? (0, _v1.jsx)(_v8.Building, {
        height: 48,
        width: 40
      }) : (0, _v1.jsx)(_v3.Box, {
        height: 48,
        children: (0, _v1.jsx)(_v8.Building, {
          width: (0, _v7.rem)(52),
          height: (0, _v7.rem)(52)
        })
      }), (0, _v1.jsx)(_v3.Box, {
        children: (0, _v1.jsx)(_v4.Header, {
          size: "xl",
          as: "h3",
          variant: "heading-md",
          children: _v58(_v0, _v15)
        })
      })]
    }) : (0, _v1.jsxs)(_v3.Box, {
      marginTop: _v16.compact ? "4" : "21",
      minHeight: _v16.compact ? (0, _v7.rem)(56) : (0, _v7.rem)(115),
      children: [(0, _v1.jsxs)(_v3.Box, {
        width: "100%",
        overflow: "hidden",
        ref: _v21,
        children: [_v4 && _v13?.monthly && (0, _v1.jsx)(_v57, {
          children: _v13?.monthly
        }), (0, _v1.jsx)(_v55, {
          children: _v24
        })]
      }), _v6 && (0, _v1.jsxs)(_v3.Box, {
        display: "flex",
        alignItems: "center",
        gap: 2,
        children: [(0, _v1.jsx)(_v6.Text, {
          variant: "body-sm",
          color: "text-tertiary",
          textDecoration: "line-through",
          children: _v24 && _v24 !== _v23 ? _v24 : _v13?.annualMonthly ?? _v13?.monthly
        }), (0, _v1.jsx)(_v51.Badge, {
          size: "sm",
          backgroundColor: "status-positive-secondary",
          textColor: "status-positive-primary",
          border: "none",
          borderRadius: "999px",
          px: 2,
          py: 1,
          children: (0, _v12.translate)({
            singular: "Save {PERCENT}%",
            replacements: {
              PERCENT: _v6.savingsPercent
            },
            dictionary: {
              es: {
                singular: "Ahorre {PERCENT}%"
              },
              "de-DE": {
                singular: "Sparen Sie {PERCENT}%"
              },
              "fr-FR": {
                singular: "Économisez {PERCENT}%"
              },
              "ja-JP": {
                singular: "{PERCENT}%節約"
              },
              "ko-KR": {
                singular: "{PERCENT}% 절약"
              },
              "pt-BR": {
                singular: "Economize {PERCENT}%"
              },
              "zh-CN": {
                singular: "节省 {PERCENT}%"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v3.Box, {
        children: "free" !== _v11 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v56, {
            children: [_v58(_v0, _v15), _v5 && `, ${_v1 ? (0, _v12.translate)({
              singular: "billed annually",
              dictionary: {
                es: {
                  singular: "facturados anualmente"
                },
                "de-DE": {
                  singular: "Jährliche Abrechnung"
                },
                "fr-FR": {
                  singular: "facturé annuellement"
                },
                "ja-JP": {
                  singular: "年払い"
                },
                "ko-KR": {
                  singular: "연간 청구"
                },
                "pt-BR": {
                  singular: "fatura enviada anualmente"
                },
                "zh-CN": {
                  singular: "按年计费"
                }
              }
            }) : (0, _v12.translate)({
              singular: "billed monthly",
              dictionary: {
                es: {
                  singular: "facturados de forma mensual"
                },
                "de-DE": {
                  singular: "monatliche Abrechnung"
                },
                "fr-FR": {
                  singular: "facturés mensuellement"
                },
                "ja-JP": {
                  singular: "月払い"
                },
                "ko-KR": {
                  singular: "월간 청구"
                },
                "pt-BR": {
                  singular: "cobrado mensalmente"
                },
                "zh-CN": {
                  singular: "按月计费"
                }
              }
            })}`]
          }), (_v8?.monthly || _v14?.isMonthly) && !_v2 && !_v5 && !1 !== _v16.showMonthlyDropdown ? (0, _v1.jsx)(_v45, {
            price: _v8,
            annualDiscount: _v10?.annual || 0,
            annualStoreUrl: _v9.interactions?.purchase?.uri?.annual || "/upgrade",
            monthlyStoreUrl: _v9.interactions?.purchase?.uri?.monthly || "/upgrade",
            showPerSeatPricingDetails: !0,
            isMonthly: _v14?.isMonthly,
            purchased: null !== _v14,
            currency: _v7,
            disabled: _v3,
            tier: _v11
          }) : _v8?.monthly === void 0 || _v1 ? (0, _v1.jsx)(_v56, {
            children: _v5 ? !(_v20 && !_v19) && _v13?.monthly && null === _v14 && (0, _v12.translate)({
              singular: "or {PRICE} billed monthly",
              replacements: {
                PRICE: _v13?.monthly
              },
              dictionary: {
                es: {
                  singular: "o {PRICE} facturado mensualmente"
                },
                "de-DE": {
                  singular: "oder {PRICE} monatlich abgerechnet"
                },
                "fr-FR": {
                  singular: "ou {PRICE} facturé mensuellement"
                },
                "ja-JP": {
                  singular: "または月額{PRICE}で請求"
                },
                "ko-KR": {
                  singular: "또는 월별로 {PRICE} 청구"
                },
                "pt-BR": {
                  singular: "ou {PRICE} cobrado mensalmente"
                },
                "zh-CN": {
                  singular: "或 {PRICE} 按月计费"
                }
              }
            }) : (0, _v12.translate)({
              singular: "billed annually",
              dictionary: {
                es: {
                  singular: "facturados anualmente"
                },
                "de-DE": {
                  singular: "Jährliche Abrechnung"
                },
                "fr-FR": {
                  singular: "facturé annuellement"
                },
                "ja-JP": {
                  singular: "年払い"
                },
                "ko-KR": {
                  singular: "연간 청구"
                },
                "pt-BR": {
                  singular: "fatura enviada anualmente"
                },
                "zh-CN": {
                  singular: "按年计费"
                }
              }
            })
          }) : (0, _v1.jsx)(_v56, {
            children: !_v5 && (0, _v12.translate)({
              singular: "billed monthly",
              dictionary: {
                es: {
                  singular: "facturados de forma mensual"
                },
                "de-DE": {
                  singular: "monatliche Abrechnung"
                },
                "fr-FR": {
                  singular: "facturés mensuellement"
                },
                "ja-JP": {
                  singular: "月払い"
                },
                "ko-KR": {
                  singular: "월간 청구"
                },
                "pt-BR": {
                  singular: "cobrado mensalmente"
                },
                "zh-CN": {
                  singular: "按月计费"
                }
              }
            })
          }), (0, _v1.jsx)(_v56, {
            children: _v18 ? (0, _v12.translate)({
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
            })
          })]
        })
      })]
    });
  }], 0);
}