{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
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
    _v24 = _v0.i(0);
  let _v25 = ["membership.subscription.trial.isReverseFreeTrial"];
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = () => (0, _v1.jsx)(_v16.Box, {
      backgroundColor: "var(--vimeo-colors-status-positive-primary)",
      borderRadius: (0, _v18.rem)(6),
      width: (0, _v18.rem)(64),
      height: (0, _v18.rem)(20),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v17.Text, {
        variant: "body-xs",
        fontWeight: 500,
        whiteSpace: "nowrap",
        style: {
          color: "var(--vimeo-colors-text-button-inverted)"
        },
        children: (0, _v6.translate)({
          singular: "Save {PERCENT}%",
          replacements: {
            PERCENT: 40
          },
          dictionary: {
            es: {
              singular: "Ahorra {PERCENT}%"
            },
            "de-DE": {
              singular: "Sparen Sie {PERCENT}%"
            },
            "fr-FR": {
              singular: "Économisez {PERCENT}\x0f%"
            },
            "ja-JP": {
              singular: "{PERCENT}%オフ"
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
      })
    }),
    _v43 = ({
      children: _v0,
      isSelected: _v1
    }) => (0, _v1.jsxs)(_v16.Box, {
      position: "relative",
      children: [(0, _v1.jsx)(_v17.Text, {
        variant: "heading-sm",
        visibility: "hidden",
        "aria-hidden": !0,
        children: _v0
      }), (0, _v1.jsx)(_v17.Text, {
        variant: _v1 ? "heading-sm" : "body-lg",
        color: "text.primary",
        position: "absolute",
        top: 0,
        left: 0,
        children: _v0
      })]
    }),
    _v44 = ({
      onClick: _v0,
      checked: _v1,
      isMobile: _v2
    }) => (0, _v1.jsxs)(_v40.Flex, {
      alignItems: _v2 ? "flex-end" : "center",
      gap: (0, _v18.rem)(16),
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v43, {
        isSelected: !_v1,
        children: (0, _v6.translate)({
          singular: "Billed monthly",
          dictionary: {
            es: {
              singular: "Facturado mensualmente"
            },
            "de-DE": {
              singular: "Monatlich abgerechnet"
            },
            "fr-FR": {
              singular: "Facturé mensuellement"
            },
            "ja-JP": {
              singular: "月額請求"
            },
            "ko-KR": {
              singular: "월별 청구"
            },
            "pt-BR": {
              singular: "Cobrado mensalmente"
            },
            "zh-CN": {
              singular: "按月计费"
            }
          }
        })
      }), (0, _v1.jsx)(_v41.Switch, {
        size: "lg",
        isChecked: _v1,
        onChange: _v0,
        "aria-label": "Toggle billing frequency"
      }), (0, _v1.jsxs)(_v40.Flex, {
        direction: _v2 ? "column-reverse" : "row",
        alignItems: _v2 ? "flex-start" : "center",
        gap: (0, _v18.rem)(4),
        children: [(0, _v1.jsx)(_v43, {
          isSelected: _v1,
          children: (0, _v6.translate)({
            singular: "Billed yearly",
            dictionary: {
              es: {
                singular: "Facturado anualmente"
              },
              "de-DE": {
                singular: "Jährlich abgerechnet"
              },
              "fr-FR": {
                singular: "Facturé annuellement"
              },
              "ja-JP": {
                singular: "年額請求"
              },
              "ko-KR": {
                singular: "연간 청구"
              },
              "pt-BR": {
                singular: "Cobrado anualmente"
              },
              "zh-CN": {
                singular: "按年计费"
              }
            }
          })
        }), (0, _v1.jsx)(_v42, {})]
      })]
    });
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = _v46.default.div.withConfig({
      displayName: "styles__StyledToggle",
      componentId: "sc-c583c415-0"
    })`
  color: var(--vimeo-colors-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  border-width: ${(0, _v45.rem)(2)};
  border-color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v45.rem)(8)} 0;
  transition: all 250ms ease-in-out 0s;
  position: relative;
  border-radius: 3rem;
  margin: 0 ${(0, _v45.rem)(8)} 0 ${(0, _v45.rem)(8)};
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? "#181E24" : "none"};
  &::after {
    position: absolute;
    left: ${(0, _v45.rem)(4)};
    right: auto;
    content: '';
    display: block;
    background: var(--vimeo-colors-text-primary);
    opacity: 1;
    transition: all 250ms ease-in-out 0s;
    width: 50%;
    height: ${(0, _v45.rem)(30)};
    border-radius: ${(0, _v45.rem)(20)};
  }
`,
    _v48 = _v46.default.div.withConfig({
      displayName: "styles__ToggleContainer",
      componentId: "sc-c583c415-1"
    })`
  display: inline-block;
  &:active > ${_v47} {
    background-color: rgba(20, 26, 32, 0.3);
  }
`,
    _v49 = _v46.default.input.withConfig({
      displayName: "styles__HiddenCheckbox",
      componentId: "sc-c583c415-2"
    })`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  outline: 0;
  opacity: 0;
  appearance: none;
  &:checked ~ ${_v47} {
    &::after {
      transform: translateX(calc(100% - 7px));
    }
  }
`,
    _v50 = _v46.default.p.withConfig({
      displayName: "styles__ToggleLabel",
      componentId: "sc-c583c415-3"
    })`
  z-index: 1;
  font-size: ${(0, _v45.rem)(16)};
  letter-spacing: ${(0, _v45.rem)(-.48)};
  white-space: nowrap;
  text-align: center;
  padding: 0 ${(0, _v45.rem)(20)};
  width: ${({
      width: _v0
    }) => _v0 && (0, _v45.rem)(_v0)};
  ${({
      checked: _v0
    }) => _v0 && _v46.css`
      color: var(--vimeo-colors-text-button-inverted);
    `};
`,
    _v51 = ({
      onClick: _v0,
      checked: _v1
    }) => {
      let [_v2, _v3] = (0, _v10.useState)(""),
        _v4 = (0, _v10.useRef)(null),
        _v5 = (0, _v10.useCallback)(() => {
          let _v0 = _v4.current;
          if (!_v0) return;
          let _v1 = _v0.children;
          if (_v1.length && !_v2) {
            let _v0 = 0;
            for (let _v0 of _v1) _v0 && _v0?.offsetWidth > _v0 && (_v0 = _v0?.offsetWidth);
            _v3(_v0);
          }
        }, [_v4, _v2]);
      return (0, _v10.useEffect)(() => {
        _v5();
      }, [_v5]), (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v48, {
          onClick: _v0,
          children: [(0, _v1.jsx)(_v49, {
            checked: _v1,
            type: "checkbox"
          }), (0, _v1.jsxs)(_v47, {
            ref: _v4,
            children: [(0, _v1.jsx)(_v50, {
              checked: !_v1,
              width: _v2,
              children: (0, _v6.translate)({
                singular: "Monthly",
                dictionary: {
                  es: {
                    singular: "Mensual"
                  },
                  "de-DE": {
                    singular: "Monatlich"
                  },
                  "fr-FR": {
                    singular: "Mensuel"
                  },
                  "ja-JP": {
                    singular: "月額"
                  },
                  "ko-KR": {
                    singular: "월간"
                  },
                  "pt-BR": {
                    singular: "Mensal"
                  },
                  "zh-CN": {
                    singular: "按月"
                  }
                }
              })
            }), (0, _v1.jsx)(_v50, {
              checked: _v1,
              width: _v2,
              children: (0, _v6.translate)({
                singular: "Annually",
                dictionary: {
                  es: {
                    singular: "Anualmente"
                  },
                  "de-DE": {
                    singular: "Jährlich"
                  },
                  "fr-FR": {
                    singular: "Annuel"
                  },
                  "ja-JP": {
                    singular: "年間"
                  },
                  "ko-KR": {
                    singular: "연간"
                  },
                  "pt-BR": {
                    singular: "Anualmente"
                  },
                  "zh-CN": {
                    singular: "每年"
                  }
                }
              })
            })]
          })]
        })
      });
    };
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  let _v54 = _v46.default.div.withConfig({
      displayName: "styles__TagContainer",
      componentId: "sc-2420be19-0"
    })`
  background: ${_v0 => (0, _v53.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
  padding: ${(0, _v45.rem)(4)} ${(0, _v45.rem)(6)} ${(0, _v45.rem)(4)} ${(0, _v45.rem)(8)};
  border-radius: ${(0, _v45.rem)(12)};
  color: ${_v0 => (0, _v53.getTagColor)(_v0.showYearly, _v0.theme.name)};
  font-size: ${(0, _v45.rem)(16)};
  font-weight: 400;
  line-height: 130%;
  letter-spacing: ${(0, _v45.rem)(-.32)};
  position: relative;
  margin-left: ${(0, _v45.rem)(9)};
  margin-bottom: 0px;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-right: ${(0, _v45.rem)(6)} solid
      ${_v0 => (0, _v53.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
    border-top: ${(0, _v45.rem)(4)} solid transparent;
    border-bottom: ${(0, _v45.rem)(4)} solid transparent;
    border-left: 0px;
    top: ${(0, _v45.rem)(10)};
    left: ${(0, _v45.rem)(-6)};
  }
`,
    _v55 = ({
      showYearly: _v0
    }) => ((0, _v52.useIsBokeh)(), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v54, {
        showYearly: _v0,
        children: (0, _v1.jsx)("p", {
          children: (0, _v6.translate)({
            singular: "Save {PERCENT}%",
            replacements: {
              PERCENT: 40
            },
            dictionary: {
              es: {
                singular: "Ahorra {PERCENT}%"
              },
              "de-DE": {
                singular: "Sparen Sie {PERCENT}%"
              },
              "fr-FR": {
                singular: "Économisez {PERCENT}\x0f%"
              },
              "ja-JP": {
                singular: "{PERCENT}%オフ"
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
        })
      })
    })),
    _v56 = _v0 => {
      let _v1,
        _v2,
        _v3,
        {
          trackPricingPageSeeBusinessTiersClicked: _v4,
          trackPricingPageSeeIndividualTiersClicked: _v5
        } = (0, _v29.usePricingTracking)();
      if (_v0.onRequestEligibility) _v1 = (0, _v6.translate)({
        singular: "Not a business or Non Profit?",
        dictionary: {
          es: {
            singular: "¿No es una empresa o una organización sin fines de lucro?"
          },
          "de-DE": {
            singular: "Kein Unternehmen oder keine gemeinnützige Organisation?"
          },
          "fr-FR": {
            singular: "Pas une entreprise ni un organisme à but non lucratif ?"
          },
          "ja-JP": {
            singular: "ビジネスまたは非営利団体ではありませんか？"
          },
          "ko-KR": {
            singular: "사업체 또는 비영리 단체가 아닌가요?"
          },
          "pt-BR": {
            singular: "Não é uma empresa ou organização sem fins lucrativos?"
          },
          "zh-CN": {
            singular: "不是企业或非营利组织？"
          }
        }
      }), _v2 = (0, _v6.translate)({
        singular: "Request eligibility for dedicated plans",
        dictionary: {
          es: {
            singular: "Solicitar elegibilidad para planes dedicados"
          },
          "de-DE": {
            singular: "Berechtigung für dedizierte Pläne anfordern"
          },
          "fr-FR": {
            singular: "Demander l'éligibilité aux plans dédiés"
          },
          "ja-JP": {
            singular: "専用プランの適格性を申請する"
          },
          "ko-KR": {
            singular: "전용 요금제 자격 요청하기"
          },
          "pt-BR": {
            singular: "Solicitar elegibilidade para planos dedicados"
          },
          "zh-CN": {
            singular: "申请专属计划资格"
          }
        }
      }), _v3 = _v0.onRequestEligibility;else {
        let _v0 = "individual" === _v0.planView;
        _v1 = _v0 ? (0, _v6.translate)({
          singular: "Do you need a plan for your company or organization?",
          dictionary: {
            es: {
              singular: "¿Necesita un plan para su empresa u organización?"
            },
            "de-DE": {
              singular: "Benötigen Sie einen Plan für Ihr Unternehmen oder Ihre Organisation?"
            },
            "fr-FR": {
              singular: "Avez-vous besoin d'un plan pour votre entreprise ou votre organisation ?"
            },
            "ja-JP": {
              singular: "企業や組織向けのプランは必要ですか？"
            },
            "ko-KR": {
              singular: "회사나 조직을 위한 요금제가 필요하신가요?"
            },
            "pt-BR": {
              singular: "Você precisa de um plano para sua empresa ou organização?"
            },
            "zh-CN": {
              singular: "您的公司或组织需要套餐吗？"
            }
          }
        }) : (0, _v6.translate)({
          singular: "You are not a company?",
          dictionary: {
            es: {
              singular: "¿No es una empresa?"
            },
            "de-DE": {
              singular: "Sie sind kein Unternehmen?"
            },
            "fr-FR": {
              singular: "Vous n'êtes pas une entreprise ?"
            },
            "ja-JP": {
              singular: "企業ではありませんか？"
            },
            "ko-KR": {
              singular: "회사나 조직이 아니신가요?"
            },
            "pt-BR": {
              singular: "Você não é uma empresa?"
            },
            "zh-CN": {
              singular: "您不是公司吗？"
            }
          }
        }), _v2 = _v0 ? (0, _v6.translate)({
          singular: "Explore our plans for Business",
          dictionary: {
            es: {
              singular: "Explore nuestros planes para empresas"
            },
            "de-DE": {
              singular: "Entdecken Sie unsere Pläne für Unternehmen"
            },
            "fr-FR": {
              singular: "Découvrez nos offres pour les entreprises"
            },
            "ja-JP": {
              singular: "ビジネス向けプランを詳しく見る"
            },
            "ko-KR": {
              singular: "기업용 요금제를 확인해보세요"
            },
            "pt-BR": {
              singular: "Explore nossos planos para Empresas"
            },
            "zh-CN": {
              singular: "了解我们的企业套餐"
            }
          }
        }) : (0, _v6.translate)({
          singular: "Explore our plans for Individuals",
          dictionary: {
            es: {
              singular: "Explore nuestros planes para particulares"
            },
            "de-DE": {
              singular: "Entdecken Sie unsere Pläne für Privatpersonen"
            },
            "fr-FR": {
              singular: "Découvrez nos offres pour les particuliers"
            },
            "ja-JP": {
              singular: "個人向けプランを詳しく見る"
            },
            "ko-KR": {
              singular: "개인용 요금제를 확인해보세요"
            },
            "pt-BR": {
              singular: "Explore nossos planos para Pessoas"
            },
            "zh-CN": {
              singular: "了解我们的个人套餐"
            }
          }
        }), _v3 = () => {
          _v0 ? _v4({
            entryPoint: "banner"
          }) : _v5({
            entryPoint: "banner"
          }), _v0.onSwitchView();
        };
      }
      return (0, _v1.jsx)(_v16.Box, {
        maxWidth: (0, _v18.rem)(0),
        margin: "0 auto",
        padding: `${(0, _v18.rem)(24)} ${(0, _v18.rem)(28)}`,
        textAlign: "center",
        background: "var(--vimeo-colors-fill-surface)",
        borderRadius: "1.5rem",
        children: (0, _v1.jsxs)(_v17.Text, {
          variant: "body-xl",
          children: [_v1, " ", (0, _v1.jsx)(_v17.Text, {
            as: "span",
            variant: "body-xl",
            color: "var(--vimeo-colors-vimeoBlue-500)",
            cursor: "pointer",
            onClick: _v3,
            role: "button",
            tabIndex: 0,
            children: _v2
          })]
        })
      });
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = _v0 => {
    let _v1 = (0, _v10.useContext)(_v14.ViewerContext),
      _v2 = (0, _v10.useContext)(_v34.OverridesContext),
      _v3 = _v2.description || !_v1?.user,
      {
        isMobileBreakpoint: _v4,
        redirectUrl: _v5
      } = _v0;
    return (0, _v1.jsxs)(_v16.Box, {
      padding: `0 ${(0, _v58.space)(600)}`,
      children: [(0, _v1.jsx)(_v16.Box, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v57.Header, {
          size: "xl",
          fontSize: _v4 ? (0, _v18.rem)(30) : _v2?.titleSize ?? (0, _v18.rem)(92),
          lineHeight: _v4 ? (0, _v18.rem)(36) : (0, _v18.rem)(92),
          fontWeight: 500,
          children: _v2?.title ? _v2.title : _v59.PRIMARY_HEADERS.theUltimateAdFreePlayer
        })
      }), _v2?.displayRedirect && _v5 && (0, _v1.jsx)(_v16.Box, {
        textAlign: "center",
        margin: `${(0, _v18.rem)(10)} 0 ${(0, _v18.rem)(15)}`,
        children: (0, _v1.jsx)(_v57.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v59.SECONDARY_HEADERS.getStartedWithFreeConcise(_v5)
        })
      }), _v3 && (0, _v1.jsx)(_v16.Box, {
        textAlign: "center",
        margin: `${(0, _v18.rem)(10)} 0 ${(0, _v18.rem)(15)}`,
        children: (0, _v1.jsx)(_v57.Header, {
          size: _v4 ? "sm" : "md",
          fontWeight: 400,
          children: _v2?.description !== void 0 && _v2?.description !== null ? _v2.description : _v59.SECONDARY_HEADERS.getStartedWithBasic
        })
      })]
    });
  };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = (0, _v8.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v66 = (0, _v8.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v67 = (0, _v8.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v68 = (0, _v8.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v69 = ["ES", "FR", "BR", "NL"],
    _v70 = _v0 => {
      let {
          context: _v1,
          campaign: _v2
        } = _v0,
        [_v3, _v4] = (0, _v10.useState)(!1),
        [_v5, _v6] = (0, _v10.useState)(void 0),
        [_v7, _v8] = (0, _v10.useState)(Date.now()),
        _v9 = (0, _v10.useContext)(_v14.ViewerContext),
        [_v10, _v11] = (0, _v10.useState)(!0),
        {
          areBusinessPlansEnforced: _v12,
          isWhitelistedForIndPlans: _v13,
          showIndividualPlans: _v14,
          hasSubmittedSurvey: _v15,
          canRequestEligibility: _v16
        } = (0, _v11.useB2BRepackagingContext)(),
        {
          open: _v17,
          modal: _v18
        } = (0, _v61.useIndividualEligibilityModal)({
          initialStep: _v15 && !_v13 ? "not_qualified" : void 0
        }),
        _v19 = (0, _v9.useSearchParams)(),
        _v20 = _v19 ? _v19.get("upsell") : null,
        _v21 = _v19 ? _v19.get("extole_coupon") : null,
        _v22 = _v19 ? _v19.get("promo_code_id") : null,
        _v23 = !!_v9?.user,
        _v24 = _v19?.get("paywall_trigger") ?? "unknown",
        _v25 = _v19?.get("paywall_location") ?? "unknown",
        _v26 = _v19?.get("paywall_feature") ?? "unknown",
        _v27 = (0, _v21.useCampaignIdOverride)() ?? _v2,
        {
          campaignId: _v28,
          isLoading: _v29
        } = (0, _v37.useRepackagingCampaign)(_v27),
        _v30 = _v27 ?? _v28,
        _v31 = !!_v30 && _v21.REPACKAGING_CAMPAIGN_IDS.includes(_v30),
        {
          settings: _v32
        } = (0, _v22.useOrionSettings)(),
        _v33 = _v31 || _v32.allow_downgrade_from_pricing_page,
        {
          capabilities: {
            hasMonthlyBilling: _v34,
            hasPaid: _v35,
            inAppSubscription: _v36
          },
          ready: _v37
        } = (0, _v20.useCapability)(["hasMonthlyBilling", "hasPaid", "inAppSubscription"]),
        _v38 = _v37 && _v34,
        {
          isReverseFreeTrial: _v39
        } = function () {
          let _v0 = (0, _v24.useViewer)(),
            _v1 = _v0?.user?.id,
            {
              data: _v2,
              isLoading: _v3
            } = (0, _v23.useGetUser)(() => null == _v1 ? null : {
              select: _v25,
              where: {
                userId: _v1
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.14"
              }
            });
          return {
            isReverseFreeTrial: _v2?.membership?.subscription?.trial?.isReverseFreeTrial === !0,
            isLoading: null != _v1 && _v3
          };
        }(),
        {
          width: _v40
        } = (0, _v32.useWindowSize)(),
        _v41 = _v40 <= 0,
        [_v42, _v43] = (0, _v10.useState)(""),
        _v44 = (0, _v19.useColorMode)(),
        {
          trackPricingPagePeriodicityToggled: _v45
        } = (0, _v29.usePricingTracking)(),
        {
          trackIndividualEligibilityCtaClicked: _v46
        } = (0, _v27.useIndividualEligibilityTracking)(),
        _v47 = () => {
          _v15.BigPictureClient.sendEvent(new _v15.Event("vimeo.upgrade_action", 41, {
            copy: _v10 ? "monthly" : "annually",
            action_type: "toggle",
            location: "period_toggle",
            page: "upgrade-plan",
            target: null,
            plan_selected: null,
            purchase_type: null,
            duration: "monthly/annually",
            price: null,
            currency: null,
            is_discount: null,
            discount_offer: null,
            path: window.location.pathname,
            target_path: null,
            device_type: (0, _v31.default)(),
            upsell_name: null,
            feature: null,
            is_new_pricing: null,
            upgrade_flags: null,
            loading_time: null,
            promo_code_id: _v22,
            third_party_integration: null
          })), _v45({
            selectedPeriodicity: _v10 ? "monthly" : "yearly"
          });
          let _v0 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"].includes(_v62) ? _v62 : null,
            _v1 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"].includes(_v62) ? _v62 : "seat_subscription";
          _v15.BigPictureClient.sendEvent(new _v15.Event("vimeo.checkout_form_action", 17, {
            action_type: "select",
            bot_score: 0,
            checkout_product_ids: [],
            checkout_subscription_type: _v0,
            consumer_renewal_prohibited: !1,
            currency: "",
            device_type: null,
            is_signup_checkout: !1,
            error_copy: null,
            error_id: null,
            is_trial_purchase: !1,
            location: _v10 ? "billing_period_monthly" : "billing_period_annual",
            mobile_app_user_id: null,
            path: window?.location?.href ?? null,
            referrer_path: document?.referrer ?? null,
            promo_code: null,
            seat_total: null,
            store: _v1,
            subtotal: "",
            target_path: null,
            tax: "",
            user_account_type_at_checkout: _v9?.user?.account || "",
            user_seat_count_at_checkout: 0,
            user_selection: null,
            upsell_name: _v19?.get("upsell"),
            feature: _v19?.get("feature")
          })), _v11(!_v10);
        };
      (0, _v10.useEffect)(() => {
        let _v0 = sessionStorage.getItem("redirectUrl");
        _v0 && ("/welcome" !== _v0 ? _v43(_v0) : _v43("/"));
      }, []);
      let _v48 = {
        bypassTierHierarchy: !0
      };
      _v21 && (_v48.promos = JSON.stringify({
        extole: _v21
      })), _v30 && (_v48.campaignId = _v30, _v48.usePaymentsService = !0), _v22 && (_v48.promoCodeId = _v22);
      let _v49 = (0, _v30.useGetSubscriptionPlansData)(_v5?.customSelfServeComapreTable ? _v5?.plans : void 0, void 0, void 0, _v48),
        _v50 = (0, _v10.useMemo)(() => _v32.core_tier_enabled ? _v49 : _v49?.filter(_v0 => "core" !== _v0.tier), [_v49, _v32.core_tier_enabled]),
        {
          data: _v51
        } = (0, _v38.useSubscriptionPlansUsageCheck)(_v31 ? _v33.REPACKAGING_ALL_SHOWN_TIERS.filter(_v0 => "free" !== _v0) : []);
      (0, _v28.usePaywallTracking)({
        paywallTrigger: _v24,
        paywallLocation: _v25,
        paywallType: "page",
        paywallFeature: _v26,
        isVisible: void 0 !== _v50 && void 0 !== _v5
      });
      let {
          shouldReorder: _v52
        } = (0, _v36.useColdStoragePlanReorder)(),
        _v53 = _v52 && !_v31 && !_v41 && void 0 !== _v50,
        {
          trackColdStoragePlanReorderDisplayed: _v54
        } = (0, _v26.useColdStorageReorderTracking)(),
        _v55 = (0, _v10.useRef)(!1);
      (0, _v10.useEffect)(() => {
        _v53 && !_v55.current && (_v55.current = !0, _v54({
          surface: "upgrade_page"
        }));
      }, [_v53, _v54]);
      let _v56 = (_v0, _v1, _v2, _v3) => "plus" !== _v3 && "purchased" === _v0 && _v1 && _v2 ? "available" : _v0,
        _v57 = _v50?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased")?.tier,
        _v58 = function () {
          let _v0 = (0, _v10.useContext)(_v14.ViewerContext),
            _v1 = !!_v0?.user,
            {
              data: _v2
            } = (0, _v12.useGetMeSubscriptions)(() => _v1 ? {
              select: ["id"],
              query: {
                status: "SUBSCRIPTION_STATUS_ACTIVE"
              }
            } : null),
            _v3 = _v2?.data?.[0]?.id,
            {
              data: _v4
            } = (0, _v13.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
              select: ["productName"],
              where: {
                subscriptionId: _v3
              }
            } : null);
          if (_v4?.productName) return _v4.productName.toLowerCase().replace(/_([a-z])/g, (_v0, _v1) => _v1.toUpperCase());
        }(),
        _v59 = _v33 ? _v58 : void 0,
        _v60 = _v33 ? _v59 ?? _v57 : void 0,
        _v61 = !_v14,
        _v62 = (_v0 => {
          if (!_v0) return;
          let _v1 = _v5?.plans ? [..._v0] : _v50 ? [..._v50] : [],
            _v2 = ["free", "starter", "basic", "plus", "customSelfServe", "proSolution", "production"];
          _v31 && _v2.push("creator");
          let _v3 = _v60 ? _v33.TIER_RANK[_v60] ?? 0 : -1;
          for (let _v0 of _v1) {
            let {
              metadata: _v0,
              tier: _v1
            } = _v0;
            if ("available" === _v56(_v0?.interactions?.purchase?.status, _v10, _v0?.purchasedProduct?.isMonthly, _v1) && !_v2.includes(_v1) && (!_v31 || (_v33.TIER_RANK[_v1] ?? 0) > _v3)) return _v1;
          }
        })(_v50),
        _v63 = (0, _v10.useMemo)(() => "studio" === _v59 ? "business" : _v13 ? "individual" : "studio" === _v60 || "production" === _v60 ? "business" : "individual", [_v60, _v13, _v59]),
        [_v64, _v65] = (0, _v10.useState)(null),
        _v66 = _v61 ? "business" : _v64 ?? _v63,
        _v67 = () => {
          _v65("individual" === _v66 ? "business" : "individual");
        },
        _v68 = (0, _v10.useMemo)(() => "production" === _v60 ? ["studio", "production", "enterprise"] : _v61 ? ["studio", "enterprise"] : ["professional", "studio", "enterprise"], [_v60, _v61]),
        _v69 = !_v61 && (_v41 || _v12 || "studio" !== _v60 && "production" !== _v60 || "individual" === _v66),
        _v70 = void 0 !== _v60 && _v33.REPACKAGING_PAID_PLANS.includes(_v60);
      (0, _v10.useEffect)(() => {
        _v59 && _v37 ? _v11(!_v38) : _v50?.some(_v0 => _v0.metadata?.purchasedProduct?.isMonthly === !1) ? _v11(!0) : _v37 && _v35 && _v38 && _v11(!1);
      }, [_v50, _v59, _v37, _v38, _v35]), (0, _v10.useEffect)(() => {
        _v20 && ["review", "copy_review_link"].includes(_v20) && _v9 && _v50 && (0, _v39.logViewUpsell)(_v20, _v9);
      }, [_v20, _v50, _v9]), (0, _v10.useEffect)(() => {
        !_v23 && _v5?.redirectLoggedOut && (window.location.href = "/log_in"), void 0 !== _v50 && (_v4((_v0 => {
          let _v1 = !1;
          for (let _v0 of _v0) if ("plus" !== _v0.tier) if (_v0.price.monthly) {
            _v1 = !0;
            break;
          } else _v1 = !1;
          return _v1;
        })(_v50)), _v7 && ((0, _v39.emitBPEvent)({
          action_type: "pageview",
          is_new_pricing: !0,
          upgrade_flags: window.location.search,
          loading_time: (Date.now() - _v7) / 0,
          path: window.location.href
        }), _v8(null))), _v5 && void 0 !== _v5.showMonthlyToggle && _v4(_v5.showMonthlyToggle);
      }, [_v50, _v7, _v5, _v23]), (0, _v10.useEffect)(() => {
        !_v23 && _v9?.location && _v69.includes(_v9.location.toUpperCase()) && (window.location.href = "/log_in");
      }, [_v23, _v9?.location]), (0, _v10.useEffect)(() => {
        void 0 === _v5 && (async _v0 => {
          _v6((0, (await _v0.A(0)).default)(_v0));
        })(_v1);
      }, [_v1, _v5]);
      let _v71 = !!(_v50 && _v50.some(_v0 => void 0 !== _v0.promotion) && _v10 && _v3 && !_v41);
      return null === _v9 || void 0 === _v50 || _v29 || !_v23 && _v5?.redirectLoggedOut ? (0, _v1.jsx)(_v62.default, {}) : (0, _v1.jsxs)(_v64.default, {
        isMobileBreakpoint: _v41,
        children: [void 0 !== _v5 && _v50 && (0, _v1.jsx)(_v34.OverridesContextProvider, {
          showYearly: _v10,
          viewer: _v9,
          overrides: _v5,
          children: (0, _v1.jsx)(_v35.PlansDataProvider, {
            overrides: _v5,
            plansData: _v50,
            isLoggedIn: _v23,
            capabilitiesReady: _v37,
            isPricingRedesign: _v31,
            downgradeEnabled: _v33,
            effectiveTier: _v60,
            upcomingTier: _v59,
            usageCheckData: _v51,
            hideIndividualPlans: _v61,
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v16.Box, {
                children: (0, _v1.jsx)(_v60, {
                  isMobileBreakpoint: _v41,
                  redirectUrl: _v42
                })
              }), _v3 && !(_v35 && !_v38 && !_v39) && !_v59 && (_v31 || !_v41) && (0, _v1.jsx)(_v16.Box, {
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
                marginTop: (0, _v18.rem)(40),
                alignItems: "center",
                children: _v31 ? (0, _v1.jsx)(_v44, {
                  checked: _v10,
                  onClick: _v47,
                  isMobile: _v41
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v51, {
                    checked: _v10,
                    onClick: _v47
                  }), (0, _v1.jsx)(_v55, {
                    showYearly: _v10
                  })]
                })
              }), (0, _v1.jsx)(_v63.default, {
                showYearly: !!_v41 && !_v59 || _v10,
                isBillingFreqToggleAvailable: _v3 && !_v41,
                badgePlan: _v62,
                showStrikePrice: _v71,
                isMobileBreakpoint: _v41,
                planView: _v66,
                onSwitchView: _v67,
                businessTiers: _v68,
                showCrossSellCard: _v69
              }), _v31 && !_v41 && (0, _v1.jsxs)(_v1.Fragment, {
                children: [_v61 && _v16 && (0, _v1.jsx)(_v56, {
                  onRequestEligibility: () => {
                    _v46({
                      location: "upgrade_plan_banner"
                    }), _v17("upgrade_plan_banner");
                  }
                }), !_v61 && (0, _v1.jsx)(_v56, {
                  planView: _v66,
                  onSwitchView: _v67
                })]
              }), (0, _v1.jsxs)(_v16.Box, {
                maxWidth: (0, _v18.rem)(0),
                margin: `${(0, _v18.rem)(4)} auto`,
                padding: _v41 ? `${(0, _v18.rem)(0)} ${(0, _v18.rem)(24)}` : `${(0, _v18.rem)(75)} ${(0, _v18.rem)(28)}`,
                minHeight: _v41 ? "" : (0, _v18.rem)(240),
                children: [_v41 && (0, _v1.jsx)(_v17.Text, {
                  textAlign: "center",
                  marginBottom: (0, _v18.rem)(24),
                  variant: "heading-lg",
                  children: (0, _v6.translate)({
                    singular: "The best brands in the world trust Vimeo",
                    dictionary: {
                      es: {
                        singular: "Las mejores marcas del mundo confían en Vimeo"
                      },
                      "de-DE": {
                        singular: "Die besten Marken der Welt vertrauen Vimeo"
                      },
                      "fr-FR": {
                        singular: "Les meilleures marques du monde font confiance à Vimeo"
                      },
                      "ja-JP": {
                        singular: "世界の一流ブランドが信頼するVimeo"
                      },
                      "ko-KR": {
                        singular: "세계 최고의 브랜드가 Vimeo를 신뢰합니다."
                      },
                      "pt-BR": {
                        singular: "As melhores marcas do mundo confiam no Vimeo"
                      },
                      "zh-CN": {
                        singular: "世界最佳品牌信赖 Vimeo"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v67, {})]
              }), !_v41 && (0, _v1.jsx)(_v65, {
                showYearly: _v10,
                badgePlan: _v62,
                theme: _v44.colorMode,
                filteredTiers: _v31 ? [...("individual" !== _v66 || _v61 ? _v68 : _v33.REPACKAGING_INDIVIDUAL_TIERS.filter(_v0 => "free" !== _v0 || !_v70))] : void 0
              }), _v5.terms && (0, _v1.jsx)(_v16.Box, {
                maxWidth: (0, _v18.rem)(0),
                margin: `${(0, _v18.rem)(4)} auto`,
                padding: _v41 ? `${(0, _v18.rem)(0)} ${(0, _v18.rem)(24)}` : `${(0, _v18.rem)(75)} ${(0, _v18.rem)(28)}`,
                children: (0, _v1.jsx)(_v17.Text, {
                  variant: "body-xl",
                  children: _v5.terms
                })
              }), !_v5.hideFaq && (0, _v1.jsx)(_v66, {
                isMobileBreakpoint: _v41
              })]
            })
          })
        }), _v36 && (0, _v1.jsx)(_v68, {}), _v18]
      });
    };
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = "https://vimeo.com",
    _v74 = `${_v73}/upgrade-plan`,
    _v75 = "75.00",
    _v76 = (_v0, _v1, _v2) => ({
      "@type": "ImageObject",
      url: `https://i.vimeocdn.com/custom_asset/${_v0}`,
      width: _v1,
      height: _v2
    }),
    _v77 = {
      "@type": "Organization",
      name: "Vimeo",
      url: _v73,
      logo: _v76("cbf0b6892f540132a1d1b8f1520a9d75", "2150", "860"),
      sameAs: ["https://www.facebook.com/Vimeo/", "https://twitter.com/vimeo", "https://www.instagram.com/vimeo/", "https://en.wikipedia.org/wiki/Vimeo", "https://www.crunchbase.com/organization/vimeo", "https://www.tiktok.com/@vimeo", "https://www.linkedin.com/company/vimeo/"]
    },
    _v78 = {
      "@type": "QuantitativeValue",
      value: "1",
      unitCode: "MON"
    },
    _v79 = JSON.stringify({
      "@context": "http://schema.org",
      "@graph": [{
        mainEntity: {
          "@context": "http://schema.org",
          "@type": ["WebApplication", "Product", "SoftwareApplication"],
          "@id": _v73,
          applicationCategory: ["BusinessApplication", "BrowserApplication", "EntertainmentApplication", "MultimediaApplication", "LifestyleApplication", "EducationalApplication", "CommunicationApplication", "ReferenceApplication"],
          name: "Vimeo All-In-One Video Platform",
          operatingSystem: "all",
          browserRequirements: "Requires Javascript and HTML5 support",
          url: _v73,
          screenshot: _v76("d9ef877c80e240720926ee30e6ace39b", "1800", "1101"),
          image: [_v76("c406392768b237292f74f3e2099e5545", "1920", "1082"), _v76("650db19aec4d5633a6f5a1a2997bd058", "1921", "1081"), _v76("f884aa9bd76537bdb2f52e8017becdc0", "1920", "1080"), _v76("bc7ff4aaa44d52d6683d21e1d68c9913", "1920", "1080"), _v76("202c65b28d45af4812af604d1f2f629d", "1920", "1080")],
          description: "Unlock the power of video and join over 260M professionals, teams, and organizations who use Vimeo to create, collaborate and communicate.",
          featureList: ["https://vimeo.com/solutions/video-monetization", "https://vimeo.com/solutions/communications", "https://vimeo.com/solutions/marketing", "https://vimeo.com/features/interactive-video", "https://vimeo.com/features/livestreaming", "https://vimeo.com/features/screen-recorder", "https://vimeo.com/create", "https://vimeo.com/for-hire", "https://vimeo.com/stock", "https://vimeo.com/features/video-library", "https://vimeo.com/features/video-player", "https://vimeo.com/features/online-video-hosting", "https://vimeo.com/features/video-privacy", "https://vimeo.com/enterprise", "https://vimeo.com/features/virtual-events", "https://vimeo.com/features/video-analytics", "https://vimeo.com/ott"],
          offers: {
            "@type": "AggregateOffer",
            offeredBy: _v77,
            highPrice: _v75,
            lowPrice: "0.00",
            offerCount: "4",
            priceCurrency: "USD",
            priceSpecification: [{
              "@type": "UnitPriceSpecification",
              price: "0.00",
              priceCurrency: "USD",
              name: "Free",
              description: "Our Free plan comes with 2 videos/month, up to 25 videos total; 2TB of bandwidth/month in the Vimeo player; Free features include Basic templates for video creation; Screen recording; Custom gif creation; 4K & HDR Support & Dolby Vision; and no ads before, after, or on your video."
            }, {
              "@type": "UnitPriceSpecification",
              price: "12.00",
              priceCurrency: "USD",
              name: "Starter",
              description: "Our Starter plan comes with 60 videos/seat/year; 2TB of bandwidth/month in the Vimeo player; In addition to the Free plan, Starter comes with Player embedding; Password protection; Video chaptering and SEO; Seamless video review tools with Time-coded notes; and Engagement and social analytics.",
              referenceQuantity: _v78
            }, {
              "@type": "UnitPriceSpecification",
              price: "25.00",
              priceCurrency: "USD",
              name: "Standard",
              description: "Our Standard plan comes with 120 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Starter plan, Standard comes with Branding in player and videos; Custom CTAs and end cards; Lead capture with custom forms; Premium templates for video creation; Stock photos, videos, and music; and Tools to sell videos online and worldwide.",
              referenceQuantity: _v78
            }, {
              "@type": "UnitPriceSpecification",
              price: _v75,
              priceCurrency: "USD",
              name: "Advanced",
              description: "Our Advanced plan comes with 240 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Standard plan, Advanced comes with Virtual events and webinars; Live Q&A, polls, and chats; Register up to 100 attendees per event; Branded invite & reminder emails; Real-time stream health; and Marketing integrations with Constant Contact, Hubspot, Mailchimp, Heap, and Campaign Monitor.",
              referenceQuantity: _v78
            }]
          },
          creator: _v77
        }
      }]
    }),
    _v80 = () => {
      let [_v0] = (0, _v4.useQueryParams)({
          v: _v3.NumberParam,
          context: (0, _v3.createEnumParam)(Object.values(_v71.CONTEXT)),
          campaign: _v3.StringParam
        }),
        _v1 = (0, _v6.translate)({
          singular: "Pricing plans | From free plans to enterprise solutions",
          dictionary: {
            es: {
              singular: "Planes de precios | Desde planes gratuitos hasta soluciones empresariales"
            },
            "de-DE": {
              singular: "Preispläne | Von kostenlosen Plänen bis zu Enterprise-Lösungen"
            },
            "fr-FR": {
              singular: "Plans tarifaires | Des offres gratuites aux solutions d’entreprise"
            },
            "ja-JP": {
              singular: "料金プラン | 無料プランからエンタープライズ向けソリューションまで"
            },
            "ko-KR": {
              singular: "요금제 | 무료 요금제부터 엔터프라이즈 솔루션까지"
            },
            "pt-BR": {
              singular: "Planos de preços | De planos gratuitos a soluções empresariais"
            },
            "zh-CN": {
              singular: "定价计划 | 从免费计划到企业级解决方案"
            }
          }
        }),
        _v2 = (0, _v6.translate)({
          singular: "Join the web’s most supportive community of creators and get high-quality tools for hosting, sharing, and streaming videos in gorgeous HD and 4K with no ads.",
          dictionary: {
            es: {
              singular: "Únete a la comunidad de creadores más acogedora de la red y obtén herramientas de alta calidad para alojar, compartir y emitir videos en continuo en alta definición y 4K sin anuncios."
            },
            "de-DE": {
              singular: "Komm an Board zu der hilfreichsten Community im ganzen Internet und erhalte qualitativ hochwertige Tools für Hosten, Teilen und Streamen von Videos in wunderschönem HD und 4K ganz ohne Werbung."
            },
            "fr-FR": {
              singular: "Rejoignez la communauté de créateurs de vidéos la plus passionnée du Web, et bénéficiez d'outils de grande qualité pour héberger, partager et streamer vos vidéos en sublime HD et 4k sans pubs."
            },
            "ja-JP": {
              singular: " ウェブで最も協力的なクリエイターコミュニティで、HDや4K動画のホスティング、共有、ストリーミングなど、たくさんのパワフルなツールを広告無しで活用しよう。"
            },
            "ko-KR": {
              singular: "웹에서 가장 풍부한 지원을 제공하는 창작가 커뮤니티와 함께하여 광고 없는 멋진 HD 및 4K 동영상을 호스팅, 공유 및 스트리밍할 수 있는 고품질 도구들을 만나보세요."
            },
            "pt-BR": {
              singular: "Junte-se à comunidade de criadores mais prestativa da web e obtenha ferramentas de alta qualidade para hospedar, compartilhar e transmitir vídeos, em incrível Alta Definição (HD) e em 4K, sem anúncios."
            },
            "zh-CN": {
              singular: "加入网络上最有支持力的创作者社区，获取优质工具来托管、分享和直播精美的高清和 4K 视频，而且没有广告。"
            }
          }
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v2.default, {
          children: [(0, _v1.jsx)("title", {
            children: _v1
          }), (0, _v1.jsx)("meta", {
            name: "description",
            content: _v2
          }), (0, _v1.jsx)("meta", {
            property: "og:type",
            content: "video.other"
          }), (0, _v1.jsx)("meta", {
            property: "og:site_name",
            content: "Vimeo"
          }), (0, _v1.jsx)("meta", {
            property: "og:url",
            content: _v74
          }), (0, _v1.jsx)("meta", {
            property: "og:title",
            content: _v1
          }), (0, _v1.jsx)("meta", {
            property: "og:description",
            content: _v2
          }), (0, _v1.jsx)("meta", {
            name: "twitter:title",
            content: _v1
          }), (0, _v1.jsx)("link", {
            rel: "canonical",
            href: _v74
          })]
        }), (0, _v1.jsx)("div", {
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: {
            __html: `<script type="application/ld+json">${_v79}</script>`
          }
        }), (0, _v1.jsx)(_v70, {
          version: _v0.v,
          context: _v0.context,
          campaign: _v0.campaign
        })]
      });
    };
  (0, _v5.withPageSetup)(async () => ({
    props: {
      hasThemeSupport: !0,
      omitEsi: !0
    }
  }), {
    inlineViewer: "all"
  }), _v80.getLayout = _v0 => (0, _v1.jsxs)(_v72.QueryParamProvider, {
    children: [_v0, (0, _v1.jsx)(_v7.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v80], 0);
}