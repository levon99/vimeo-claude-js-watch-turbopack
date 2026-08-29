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
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = ["membership.subscription.trial.isReverseFreeTrial"];
  var _v28 = _v0.i(0),
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
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = () => (0, _v1.jsx)(_v18.Box, {
      backgroundColor: "var(--vimeo-colors-status-positive-primary)",
      borderRadius: (0, _v20.rem)(6),
      width: (0, _v20.rem)(64),
      height: (0, _v20.rem)(20),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v19.Text, {
        variant: "body-xs",
        fontWeight: 500,
        whiteSpace: "nowrap",
        style: {
          color: "var(--vimeo-colors-text-button-inverted)"
        },
        children: (0, _v7.translate)({
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
    _v49 = ({
      children: _v0,
      isSelected: _v1
    }) => (0, _v1.jsxs)(_v18.Box, {
      position: "relative",
      children: [(0, _v1.jsx)(_v19.Text, {
        variant: "heading-sm",
        visibility: "hidden",
        "aria-hidden": !0,
        children: _v0
      }), (0, _v1.jsx)(_v19.Text, {
        variant: _v1 ? "heading-sm" : "body-lg",
        color: "text.primary",
        position: "absolute",
        top: 0,
        left: 0,
        children: _v0
      })]
    }),
    _v50 = ({
      onClick: _v0,
      checked: _v1,
      isMobile: _v2
    }) => (0, _v1.jsxs)(_v46.Flex, {
      alignItems: _v2 ? "flex-end" : "center",
      gap: (0, _v20.rem)(16),
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v49, {
        isSelected: !_v1,
        children: (0, _v7.translate)({
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
      }), (0, _v1.jsx)(_v47.Switch, {
        size: "lg",
        isChecked: _v1,
        onChange: _v0,
        "aria-label": "Toggle billing frequency"
      }), (0, _v1.jsxs)(_v46.Flex, {
        direction: _v2 ? "column-reverse" : "row",
        alignItems: _v2 ? "flex-start" : "center",
        gap: (0, _v20.rem)(4),
        children: [(0, _v1.jsx)(_v49, {
          isSelected: _v1,
          children: (0, _v7.translate)({
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
        }), (0, _v1.jsx)(_v48, {})]
      })]
    });
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = _v52.default.div.withConfig({
      displayName: "styles__StyledToggle",
      componentId: "sc-c583c415-0"
    })`
  color: var(--vimeo-colors-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  border-width: ${(0, _v51.rem)(2)};
  border-color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v51.rem)(8)} 0;
  transition: all 250ms ease-in-out 0s;
  position: relative;
  border-radius: 3rem;
  margin: 0 ${(0, _v51.rem)(8)} 0 ${(0, _v51.rem)(8)};
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? "#181E24" : "none"};
  &::after {
    position: absolute;
    left: ${(0, _v51.rem)(4)};
    right: auto;
    content: '';
    display: block;
    background: var(--vimeo-colors-text-primary);
    opacity: 1;
    transition: all 250ms ease-in-out 0s;
    width: 50%;
    height: ${(0, _v51.rem)(30)};
    border-radius: ${(0, _v51.rem)(20)};
  }
`,
    _v54 = _v52.default.div.withConfig({
      displayName: "styles__ToggleContainer",
      componentId: "sc-c583c415-1"
    })`
  display: inline-block;
  &:active > ${_v53} {
    background-color: rgba(20, 26, 32, 0.3);
  }
`,
    _v55 = _v52.default.input.withConfig({
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
  &:checked ~ ${_v53} {
    &::after {
      transform: translateX(calc(100% - 7px));
    }
  }
`,
    _v56 = _v52.default.p.withConfig({
      displayName: "styles__ToggleLabel",
      componentId: "sc-c583c415-3"
    })`
  z-index: 1;
  font-size: ${(0, _v51.rem)(16)};
  letter-spacing: ${(0, _v51.rem)(-.48)};
  white-space: nowrap;
  text-align: center;
  padding: 0 ${(0, _v51.rem)(20)};
  width: ${({
      width: _v0
    }) => _v0 && (0, _v51.rem)(_v0)};
  ${({
      checked: _v0
    }) => _v0 && _v52.css`
      color: var(--vimeo-colors-text-button-inverted);
    `};
`,
    _v57 = ({
      onClick: _v0,
      checked: _v1
    }) => {
      let [_v2, _v3] = (0, _v11.useState)(""),
        _v4 = (0, _v11.useRef)(null),
        _v5 = (0, _v11.useCallback)(() => {
          let _v0 = _v4.current;
          if (!_v0) return;
          let _v1 = _v0.children;
          if (_v1.length && !_v2) {
            let _v0 = 0;
            for (let _v0 of _v1) _v0 && _v0?.offsetWidth > _v0 && (_v0 = _v0?.offsetWidth);
            _v3(_v0);
          }
        }, [_v4, _v2]);
      return (0, _v11.useEffect)(() => {
        _v5();
      }, [_v5]), (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v54, {
          onClick: _v0,
          children: [(0, _v1.jsx)(_v55, {
            checked: _v1,
            type: "checkbox"
          }), (0, _v1.jsxs)(_v53, {
            ref: _v4,
            children: [(0, _v1.jsx)(_v56, {
              checked: !_v1,
              width: _v2,
              children: (0, _v7.translate)({
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
            }), (0, _v1.jsx)(_v56, {
              checked: _v1,
              width: _v2,
              children: (0, _v7.translate)({
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
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = _v52.default.div.withConfig({
      displayName: "styles__TagContainer",
      componentId: "sc-2420be19-0"
    })`
  background: ${_v0 => (0, _v59.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
  padding: ${(0, _v51.rem)(4)} ${(0, _v51.rem)(6)} ${(0, _v51.rem)(4)} ${(0, _v51.rem)(8)};
  border-radius: ${(0, _v51.rem)(12)};
  color: ${_v0 => (0, _v59.getTagColor)(_v0.showYearly, _v0.theme.name)};
  font-size: ${(0, _v51.rem)(16)};
  font-weight: 400;
  line-height: 130%;
  letter-spacing: ${(0, _v51.rem)(-.32)};
  position: relative;
  margin-left: ${(0, _v51.rem)(9)};
  margin-bottom: 0px;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-right: ${(0, _v51.rem)(6)} solid
      ${_v0 => (0, _v59.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
    border-top: ${(0, _v51.rem)(4)} solid transparent;
    border-bottom: ${(0, _v51.rem)(4)} solid transparent;
    border-left: 0px;
    top: ${(0, _v51.rem)(10)};
    left: ${(0, _v51.rem)(-6)};
  }
`,
    _v61 = ({
      showYearly: _v0
    }) => ((0, _v58.useIsBokeh)(), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v60, {
        showYearly: _v0,
        children: (0, _v1.jsx)("p", {
          children: (0, _v7.translate)({
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
    _v62 = _v0 => {
      let _v1,
        _v2,
        _v3,
        {
          trackPricingPageSeeBusinessTiersClicked: _v4,
          trackPricingPageSeeIndividualTiersClicked: _v5
        } = (0, _v31.usePricingTracking)();
      if (_v0.onRequestEligibility) _v1 = (0, _v7.translate)({
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
      }), _v2 = (0, _v7.translate)({
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
        _v1 = _v0 ? (0, _v7.translate)({
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
        }) : (0, _v7.translate)({
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
        }), _v2 = _v0 ? (0, _v7.translate)({
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
        }) : (0, _v7.translate)({
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
      return (0, _v1.jsx)(_v18.Box, {
        maxWidth: (0, _v20.rem)(0),
        margin: "0 auto",
        padding: `${(0, _v20.rem)(24)} ${(0, _v20.rem)(28)}`,
        textAlign: "center",
        background: "var(--vimeo-colors-fill-surface)",
        borderRadius: "1.5rem",
        children: (0, _v1.jsxs)(_v19.Text, {
          variant: "body-xl",
          children: [_v1, " ", (0, _v1.jsx)(_v19.Text, {
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
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0);
  let _v66 = _v0 => {
    let _v1 = (0, _v11.useContext)(_v16.ViewerContext),
      _v2 = (0, _v11.useContext)(_v39.OverridesContext),
      _v3 = _v2.description || !_v1?.user,
      {
        isMobileBreakpoint: _v4,
        redirectUrl: _v5
      } = _v0;
    return (0, _v1.jsxs)(_v18.Box, {
      padding: `0 ${(0, _v64.space)(600)}`,
      children: [(0, _v1.jsx)(_v18.Box, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v63.Header, {
          size: "xl",
          fontSize: _v4 ? (0, _v20.rem)(30) : _v2?.titleSize ?? (0, _v20.rem)(92),
          lineHeight: _v4 ? (0, _v20.rem)(36) : (0, _v20.rem)(92),
          fontWeight: 500,
          children: _v2?.title ? _v2.title : _v65.PRIMARY_HEADERS.theUltimateAdFreePlayer
        })
      }), _v2?.displayRedirect && _v5 && (0, _v1.jsx)(_v18.Box, {
        textAlign: "center",
        margin: `${(0, _v20.rem)(10)} 0 ${(0, _v20.rem)(15)}`,
        children: (0, _v1.jsx)(_v63.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v65.SECONDARY_HEADERS.getStartedWithFreeConcise(_v5)
        })
      }), _v3 && (0, _v1.jsx)(_v18.Box, {
        textAlign: "center",
        margin: `${(0, _v20.rem)(10)} 0 ${(0, _v20.rem)(15)}`,
        children: (0, _v1.jsx)(_v63.Header, {
          size: _v4 ? "sm" : "md",
          fontWeight: 400,
          children: _v2?.description !== void 0 && _v2?.description !== null ? _v2.description : _v65.SECONDARY_HEADERS.getStartedWithBasic
        })
      })]
    });
  };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = (0, _v9.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v72 = (0, _v9.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v73 = (0, _v9.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v74 = (0, _v9.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v75 = ["ES", "FR", "BR", "NL", "NO", "FI", "MX", "SE", "DK", "BE"],
    _v76 = _v0 => {
      let {
          context: _v1,
          campaign: _v2
        } = _v0,
        [_v3, _v4] = (0, _v11.useState)(!1),
        [_v5, _v6] = (0, _v11.useState)(!1),
        [_v7, _v8] = (0, _v11.useState)(void 0),
        [_v9, _v10] = (0, _v11.useState)(Date.now()),
        _v11 = (0, _v11.useContext)(_v16.ViewerContext),
        [_v12, _v13] = (0, _v11.useState)(!0),
        {
          areBusinessPlansEnforced: _v14,
          isWhitelistedForIndPlans: _v15,
          showIndividualPlans: _v16,
          hasSubmittedSurvey: _v17,
          canRequestEligibility: _v18
        } = (0, _v12.useB2BRepackagingContext)(),
        {
          open: _v19,
          modal: _v20
        } = (0, _v67.useIndividualEligibilityModal)({
          initialStep: _v17 && !_v15 ? "not_qualified" : void 0
        }),
        _v21 = (0, _v10.useSearchParams)(),
        _v22 = _v21 ? _v21.get("upsell") : null,
        _v23 = _v21 ? _v21.get("extole_coupon") : null,
        _v24 = _v21 ? _v21.get("promo_code_id") : null,
        _v25 = !!_v11?.user,
        _v26 = _v21?.get("paywall_trigger") ?? "unknown",
        _v27 = _v21?.get("paywall_location") ?? "unknown",
        _v28 = _v21?.get("paywall_feature") ?? "unknown",
        _v29 = (0, _v23.useCampaignIdOverride)() ?? _v2,
        {
          campaignId: _v30,
          isLoading: _v31
        } = (0, _v42.useRepackagingCampaign)(_v29),
        _v32 = function () {
          let _v0 = (0, _v11.useContext)(_v16.ViewerContext),
            _v1 = !!_v0?.user,
            {
              data: _v2
            } = (0, _v13.useGetMeSubscriptions)(() => _v1 ? {
              select: ["id"],
              query: {
                status: "SUBSCRIPTION_STATUS_ACTIVE"
              }
            } : null),
            _v3 = _v2?.data?.[0]?.id,
            {
              data: _v4
            } = (0, _v14.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
              select: ["productName"],
              where: {
                subscriptionId: _v3
              }
            } : null);
          if (_v4?.productName) return (0, _v15.normalizeTier)(_v4.productName);
        }(),
        _v33 = _v11?.teamUser?.accountType?.toString() ?? _v11?.user?.account?.toString() ?? "",
        _v34 = !!_v32 && _v35.RepackagedTiers.includes(_v32) || _v35.RepackagedTiers.includes(_v33),
        {
          settings: _v35,
          isLoadingResponse: _v36
        } = (0, _v24.useOrionSettings)(),
        _v37 = _v36 || _v29 || !_v34 ? null : _v23.RP_2026_LOW_CAMPAIGN_ID,
        _v38 = _v29 ?? _v37 ?? _v30,
        _v39 = !!_v38 && _v23.REPACKAGING_CAMPAIGN_IDS.includes(_v38),
        _v40 = _v39 || _v35.allow_downgrade_from_pricing_page,
        {
          capabilities: {
            hasMonthlyBilling: _v41,
            hasPaid: _v42,
            inAppSubscription: _v43
          },
          ready: _v44
        } = (0, _v22.useCapability)(["hasMonthlyBilling", "hasPaid", "inAppSubscription"]),
        _v45 = _v44 && _v41,
        {
          isReverseFreeTrial: _v46
        } = function () {
          let _v0 = (0, _v26.useViewer)(),
            _v1 = _v0?.user?.id,
            {
              data: _v2,
              isLoading: _v3
            } = (0, _v25.useGetUser)(() => null == _v1 ? null : {
              select: _v27,
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
          width: _v47
        } = (0, _v37.useWindowSize)(),
        _v48 = _v47 <= 0,
        [_v49, _v50] = (0, _v11.useState)(""),
        _v51 = (0, _v21.useColorMode)(),
        {
          trackPricingPagePeriodicityToggled: _v52
        } = (0, _v31.usePricingTracking)(),
        {
          trackIndividualEligibilityCtaClicked: _v53
        } = (0, _v29.useIndividualEligibilityTracking)(),
        _v54 = () => {
          _v17.BigPictureClient.sendEvent(new _v17.Event("vimeo.upgrade_action", 41, {
            copy: _v12 ? "monthly" : "annually",
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
            device_type: (0, _v36.default)(),
            upsell_name: null,
            feature: null,
            is_new_pricing: null,
            upgrade_flags: null,
            loading_time: null,
            promo_code_id: _v24,
            third_party_integration: null
          })), _v52({
            selectedPeriodicity: _v12 ? "monthly" : "yearly"
          });
          let _v0 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"].includes(_v67) ? _v67 : null,
            _v1 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"].includes(_v67) ? _v67 : "seat_subscription";
          _v17.BigPictureClient.sendEvent(new _v17.Event("vimeo.checkout_form_action", 17, {
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
            location: _v12 ? "billing_period_monthly" : "billing_period_annual",
            mobile_app_user_id: null,
            path: window?.location?.href ?? null,
            referrer_path: document?.referrer ?? null,
            promo_code: null,
            seat_total: null,
            store: _v1,
            subtotal: "",
            target_path: null,
            tax: "",
            user_account_type_at_checkout: _v11?.user?.account || "",
            user_seat_count_at_checkout: 0,
            user_selection: null,
            upsell_name: _v21?.get("upsell"),
            feature: _v21?.get("feature")
          })), _v13(!_v12);
        };
      (0, _v11.useEffect)(() => {
        let _v0 = sessionStorage.getItem("redirectUrl");
        _v0 && ("/welcome" !== _v0 ? _v50(_v0) : _v50("/"));
      }, []);
      let _v55 = {
        bypassTierHierarchy: !0
      };
      _v23 && (_v55.promos = JSON.stringify({
        extole: _v23
      })), _v38 && (_v55.campaignId = _v38, _v55.usePaymentsService = !0), _v24 && (_v55.promoCodeId = _v24);
      let _v56 = (0, _v32.useGetSubscriptionPlansData)(_v7?.customSelfServeComapreTable ? _v7?.plans : void 0, void 0, void 0, _v55),
        _v57 = (0, _v11.useMemo)(() => (0, _v33.applyPlanAvailabilityPolicy)(_v56, {
          coreTierEnabled: _v35.core_tier_enabled,
          flatTierMonthlyEnabled: _v35.flat_tiers_monthly_enabled
        }), [_v56, _v35.core_tier_enabled, _v35.flat_tiers_monthly_enabled]),
        {
          data: _v58
        } = (0, _v43.useSubscriptionPlansUsageCheck)(_v39 ? _v38.REPACKAGING_COMPARISON_TIERS.filter(_v0 => "free" !== _v0) : []),
        {
          shouldReorder: _v59
        } = (0, _v41.useColdStoragePlanReorder)(),
        _v60 = _v59 && !_v39 && !_v48 && void 0 !== _v57,
        {
          trackColdStoragePlanReorderDisplayed: _v61
        } = (0, _v28.useColdStorageReorderTracking)(),
        _v62 = (0, _v11.useRef)(!1);
      (0, _v11.useEffect)(() => {
        _v60 && !_v62.current && (_v62.current = !0, _v61({
          surface: "upgrade_page"
        }));
      }, [_v60, _v61]);
      let _v63 = _v57?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased")?.tier,
        _v64 = _v40 ? _v32 : void 0,
        _v65 = _v40 ? _v64 ?? _v63 : void 0,
        _v66 = !_v16,
        _v67 = (_v0 => {
          if (!_v0) return;
          let _v1 = _v7?.plans ? [..._v0] : _v57 ? [..._v57] : [],
            _v2 = _v65 ? (0, _v15.getTierComparisonRank)(_v65) ?? 0 : -1,
            _v3 = ["free", "starter", "basic", "plus", "customSelfServe", "proSolution", "production"];
          _v39 && _v3.push("creator");
          let _v4 = _v39 ? (0, _v45.getFeatureFloorRank)(_v28) : void 0,
            _v5 = _v0 => {
              for (let _v0 of _v1) {
                let {
                    metadata: _v0,
                    tier: _v1
                  } = _v0,
                  _v2 = _v0?.interactions?.purchase?.status,
                  _v3 = _v0?.purchasedProduct?.isMonthly;
                if ("available" === (0, _v34.getEffectivePurchaseStatus)({
                  purchaseStatus: _v2,
                  tier: _v1,
                  isViewingAnnual: _v12,
                  isPurchasedMonthly: _v3
                }) && !_v3.includes(_v1) && (!_v39 || ((0, _v15.getTierComparisonRank)(_v1) ?? 0) > _v2) && (void 0 === _v0 || ((0, _v15.getTierComparisonRank)(_v1) ?? 0) >= _v0)) return _v1;
              }
            };
          return _v5(_v4) ?? _v5(void 0);
        })(_v57),
        _v68 = (0, _v11.useMemo)(() => "studio" === _v64 ? "business" : _v15 ? "individual" : "studio" === _v65 || "production" === _v65 ? "business" : "individual", [_v65, _v15, _v64]),
        [_v69, _v70] = (0, _v11.useState)(null),
        _v71 = _v66 ? "business" : _v69 ?? _v68,
        _v72 = () => {
          _v70("individual" === _v71 ? "business" : "individual");
        },
        _v73 = (0, _v11.useMemo)(() => "production" === _v65 ? ["studio", "production", "enterprise"] : _v66 ? ["studio", "enterprise"] : ["professional", "studio", "enterprise"], [_v65, _v66]),
        _v74 = !_v66 && (_v48 || _v14 || "studio" !== _v65 && "production" !== _v65 || "individual" === _v71),
        _v75 = void 0 !== _v65 && _v38.REPACKAGING_PAID_PLANS.includes(_v65);
      (0, _v11.useEffect)(() => {
        _v64 && _v44 ? _v13(!_v45) : _v57?.some(_v0 => _v0.metadata?.purchasedProduct?.isMonthly === !1) ? _v13(!0) : _v44 && _v42 && _v45 && _v13(!1);
      }, [_v57, _v64, _v44, _v45, _v42]), (0, _v11.useEffect)(() => {
        _v22 && ["review", "copy_review_link"].includes(_v22) && _v11 && _v57 && (0, _v44.logViewUpsell)(_v22, _v11);
      }, [_v22, _v57, _v11]), (0, _v11.useEffect)(() => {
        !_v25 && _v7?.redirectLoggedOut && (window.location.href = "/log_in"), void 0 !== _v57 && (_v4((_v0 => {
          let _v1 = !1;
          for (let _v0 of _v0) if ("plus" !== _v0.tier) if (_v0.price.monthly) {
            _v1 = !0;
            break;
          } else _v1 = !1;
          return _v1;
        })(_v57)), _v6(!0), _v9 && ((0, _v44.emitBPEvent)({
          action_type: "pageview",
          is_new_pricing: !0,
          upgrade_flags: window.location.search,
          loading_time: (Date.now() - _v9) / 0,
          path: window.location.href
        }), _v10(null))), _v7 && void 0 !== _v7.showMonthlyToggle && (_v4(_v7.showMonthlyToggle), _v6(!0));
      }, [_v57, _v9, _v7, _v25]), (0, _v11.useEffect)(() => {
        !_v25 && _v11?.location && _v75.includes(_v11.location.toUpperCase()) && (window.location.href = "/log_in");
      }, [_v25, _v11?.location]), (0, _v11.useEffect)(() => {
        void 0 === _v7 && (async _v0 => {
          _v8((0, (await _v0.A(0)).default)(_v0));
        })(_v1);
      }, [_v1, _v7]);
      let _v76 = !!(_v57 && _v57.some(_v0 => void 0 !== _v0.promotion) && _v12 && _v3 && !_v48),
        _v77 = _v5 && _v3 && !(_v42 && !_v45 && !_v46) && !_v64 && (_v39 || !_v48),
        _v78 = (0, _v11.useMemo)(() => {
          if (!_v57) return;
          if (!_v39) return (_v7?.plans ? _v57.filter(_v0 => _v7.plans?.includes(_v0.tier)) : _v7?.excludedPlans ? _v57.filter(_v0 => !_v7.excludedPlans?.includes(_v0.tier)) : _v57).map(_v0 => _v0.tier);
          let _v0 = new Set(_v57.map(_v0 => _v0.tier)),
            _v1 = _v0.has("core");
          return ("individual" === _v71 ? _v38.REPACKAGING_INDIVIDUAL_VIEW_TIERS : _v73).filter(_v0 => ("free" !== _v0 || !_v75 && !_v1) && _v0.has(_v0));
        }, [_v57, _v39, _v71, _v75, _v73, _v7]),
        _v79 = (0, _v11.useMemo)(() => _v3 ? ["monthly", "yearly"] : ["yearly"], [_v3]);
      return ((0, _v30.usePaywallTracking)({
        paywallTrigger: _v26,
        paywallLocation: _v27,
        paywallType: "page",
        paywallFeature: _v28,
        paywallStyle: "upgrade_plan",
        paywallPlansDisplayed: _v78 ?? [],
        paywallPeriodicitiesDisplayed: _v79,
        isVisible: null !== _v11 && void 0 !== _v57 && void 0 !== _v7 && _v5 && !_v31 && !(!_v25 && _v7?.redirectLoggedOut),
        displayKey: _v39 ? _v71 : void 0
      }), null === _v11 || void 0 === _v57 || _v31 || !_v25 && _v7?.redirectLoggedOut) ? (0, _v1.jsx)(_v68.default, {}) : (0, _v1.jsxs)(_v70.default, {
        isMobileBreakpoint: _v48,
        children: [void 0 !== _v7 && _v57 && (0, _v1.jsx)(_v39.OverridesContextProvider, {
          showYearly: _v12,
          viewer: _v11,
          overrides: _v7,
          children: (0, _v1.jsx)(_v40.PlansDataProvider, {
            overrides: _v7,
            plansData: _v57,
            isLoggedIn: _v25,
            capabilitiesReady: _v44,
            isPricingRedesign: _v39,
            downgradeEnabled: _v40,
            effectiveTier: _v65,
            upcomingTier: _v64,
            usageCheckData: _v58,
            hideIndividualPlans: _v66,
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v18.Box, {
                children: (0, _v1.jsx)(_v66, {
                  isMobileBreakpoint: _v48,
                  redirectUrl: _v49
                })
              }), _v77 && (0, _v1.jsx)(_v18.Box, {
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
                marginTop: (0, _v20.rem)(40),
                alignItems: "center",
                children: _v39 ? (0, _v1.jsx)(_v50, {
                  checked: _v12,
                  onClick: _v54,
                  isMobile: _v48
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v57, {
                    checked: _v12,
                    onClick: _v54
                  }), (0, _v1.jsx)(_v61, {
                    showYearly: _v12
                  })]
                })
              }), (0, _v1.jsx)(_v69.default, {
                showYearly: !!_v48 && !_v64 || _v12,
                isBillingFreqToggleAvailable: _v3 && !_v48,
                isPageTopToggleVisible: _v77,
                badgePlan: _v67,
                showStrikePrice: _v76,
                isMobileBreakpoint: _v48,
                planView: _v71,
                onSwitchView: _v72,
                businessTiers: _v73,
                showCrossSellCard: _v74
              }), _v39 && !_v48 && (0, _v1.jsxs)(_v1.Fragment, {
                children: [_v66 && _v18 && (0, _v1.jsx)(_v62, {
                  onRequestEligibility: () => {
                    _v53({
                      location: "upgrade_plan_banner"
                    }), _v19("upgrade_plan_banner");
                  }
                }), !_v66 && (0, _v1.jsx)(_v62, {
                  planView: _v71,
                  onSwitchView: _v72
                })]
              }), (0, _v1.jsxs)(_v18.Box, {
                maxWidth: (0, _v20.rem)(0),
                margin: `${(0, _v20.rem)(4)} auto`,
                padding: _v48 ? `${(0, _v20.rem)(0)} ${(0, _v20.rem)(24)}` : `${(0, _v20.rem)(75)} ${(0, _v20.rem)(28)}`,
                minHeight: _v48 ? "" : (0, _v20.rem)(240),
                children: [_v48 && (0, _v1.jsx)(_v19.Text, {
                  textAlign: "center",
                  marginBottom: (0, _v20.rem)(24),
                  variant: "heading-lg",
                  children: (0, _v7.translate)({
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
                }), (0, _v1.jsx)(_v73, {})]
              }), !_v48 && (0, _v1.jsx)(_v71, {
                showYearly: _v12,
                badgePlan: _v67,
                theme: _v51.colorMode,
                filteredTiers: _v39 ? [...("individual" !== _v71 || _v66 ? _v73 : _v38.REPACKAGING_INDIVIDUAL_VIEW_TIERS.filter(_v0 => "free" !== _v0 || !_v75))] : void 0
              }), _v7.terms && (0, _v1.jsx)(_v18.Box, {
                maxWidth: (0, _v20.rem)(0),
                margin: `${(0, _v20.rem)(4)} auto`,
                padding: _v48 ? `${(0, _v20.rem)(0)} ${(0, _v20.rem)(24)}` : `${(0, _v20.rem)(75)} ${(0, _v20.rem)(28)}`,
                children: (0, _v1.jsx)(_v19.Text, {
                  variant: "body-xl",
                  children: _v7.terms
                })
              }), !_v7.hideFaq && (0, _v1.jsx)(_v72, {
                isMobileBreakpoint: _v48
              })]
            })
          })
        }), _v43 && (0, _v1.jsx)(_v74, {}), _v20]
      });
    };
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = [{
      tier: "starter",
      name: "Starter",
      previous: null
    }, {
      tier: "standard",
      name: "Standard",
      previous: "Starter"
    }, {
      tier: "advanced",
      name: "Advanced",
      previous: "Standard"
    }],
    _v84 = {
      maxWidth: 960,
      margin: "0 auto",
      padding: "32px 16px",
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      color: "#1a1a1a"
    },
    _v85 = {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      margin: "16px 0 40px"
    },
    _v86 = {
      flex: "1 1 240px",
      border: "1px solid #d5d5d5",
      borderRadius: 8,
      padding: 20
    },
    _v87 = {
      fontSize: 22,
      fontWeight: 700,
      margin: "4px 0 12px"
    },
    _v88 = {
      fontWeight: 600,
      margin: "0 0 8px"
    },
    _v89 = {
      margin: 0,
      paddingLeft: 20
    },
    _v90 = {
      borderTop: "1px solid #e5e5e5",
      marginTop: 32,
      paddingTop: 16
    },
    _v91 = {
      marginBottom: 24
    },
    _v92 = {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    },
    _v93 = {
      textAlign: "left",
      padding: "6px 10px",
      borderBottom: "1px solid #e5e5e5",
      verticalAlign: "top"
    },
    _v94 = {
      textAlign: "center",
      padding: "6px 10px",
      borderBottom: "1px solid #f0f0f0"
    },
    _v95 = {
      marginBottom: 16
    },
    _v96 = {
      fontWeight: 600,
      marginBottom: 4
    },
    _v97 = _v0 => {
      let _v1 = "number" == typeof _v0 ? _v0 : parseFloat(_v0);
      return Number.isFinite(_v1) ? Number.isInteger(_v1) ? `$${_v1}` : `$${_v1.toFixed(2)}` : null;
    },
    _v98 = () => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)("h1", {
        children: _v65.PRIMARY_HEADERS.theUltimateAdFreePlayer
      }), (0, _v1.jsx)("p", {
        children: (0, _v1.jsx)(_v78.Link, {
          href: "/join",
          children: (0, _v7.translate)({
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
      })]
    }),
    _v99 = ({
      inVideoSize: _v0
    }) => (0, _v1.jsxs)("section", {
      style: _v90,
      children: [(0, _v1.jsx)("h2", {
        children: (0, _v7.translate)({
          singular: "Have questions?",
          dictionary: {
            es: {
              singular: "¿Preguntas?"
            },
            "de-DE": {
              singular: "Hast du Fragen?"
            },
            "fr-FR": {
              singular: "Des questions ?"
            },
            "ja-JP": {
              singular: "質問がありますか？"
            },
            "ko-KR": {
              singular: "질문이 있으신가요?"
            },
            "pt-BR": {
              singular: "Tem dúvidas?"
            },
            "zh-CN": {
              singular: "有问题吗？"
            }
          }
        })
      }), (0, _v1.jsx)("dl", {
        style: {
          margin: 0
        },
        children: (0, _v81.default)(_v0).map(_v0 => (0, _v1.jsxs)("div", {
          style: _v95,
          children: [(0, _v1.jsx)("dt", {
            style: _v96,
            children: _v0.question
          }), (0, _v1.jsx)("dd", {
            style: {
              margin: 0
            },
            children: _v0.answer
          })]
        }, _v0.id))
      }), (0, _v1.jsx)("p", {
        children: (0, _v1.jsx)(_v78.Link, {
          href: "/help/contact",
          children: (0, _v7.translate)({
            singular: "Contact support",
            dictionary: {
              es: {
                singular: "Contactar con soporte"
              },
              "de-DE": {
                singular: "Support kontaktieren"
              },
              "fr-FR": {
                singular: "Contacter le support"
              },
              "ja-JP": {
                singular: "サポートにお問い合わせください"
              },
              "ko-KR": {
                singular: "지원팀에 문의"
              },
              "pt-BR": {
                singular: "Contate o suporte"
              },
              "zh-CN": {
                singular: "联系客服"
              }
            }
          })
        })
      })]
    }),
    _v100 = ({
      plansData: _v0,
      prices: _v1
    }) => {
      let _v2 = (0, _v7.translate)({
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
        }),
        _v3 = _v0[0]?.metadata?.entitlements?.params?.videoStorageQuotaUnit === "video_size",
        _v4 = _v0.reduce((_v0, _v1) => (_v0[_v1.tier] = _v1.metadata.entitlements.params, _v0), {}),
        _v5 = (0, _v79.default)(_v4);
      return (0, _v1.jsxs)("section", {
        style: _v84,
        children: [(0, _v1.jsx)(_v98, {}), (0, _v1.jsx)("div", {
          style: _v85,
          children: _v0.map(_v0 => {
            let _v1 = (_v0 => {
                let _v1 = _v0.priceFormatted?.annualMonthly;
                if (_v1) return _v1;
                let _v2 = _v0.price?.annualMonthly;
                if ("number" == typeof _v2) return _v97(_v2);
                let _v3 = _v1?.[_v0.tier];
                return _v3 ? _v97(_v3) : null;
              })(_v0),
              _v2 = (0, _v82.getCardFeatureSubhead)(_v0, _v0.tier),
              _v3 = (0, _v82.getFeatureListByTier)(_v0.tier) ?? [];
            return (0, _v1.jsxs)("div", {
              style: _v86,
              children: [(0, _v1.jsx)("h2", {
                style: {
                  margin: 0
                },
                children: _v0.name
              }), _v1 ? (0, _v1.jsxs)("p", {
                style: _v87,
                children: [_v1, " ", _v2]
              }) : null, _v2 ? (0, _v1.jsx)("p", {
                style: _v88,
                children: _v2
              }) : null, (0, _v1.jsx)("ul", {
                style: _v89,
                children: _v3.map((_v0, _v1) => (0, _v1.jsx)("li", {
                  children: _v0
                }, `${_v0.tier}-${_v1}`))
              })]
            }, _v0.tier);
          })
        }), (0, _v1.jsxs)("section", {
          style: _v90,
          children: [(0, _v1.jsx)("h2", {
            children: (0, _v7.translate)({
              singular: "Compare plans",
              dictionary: {
                es: {
                  singular: "Comparar planes"
                },
                "de-DE": {
                  singular: "Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparer les abonnements"
                },
                "ja-JP": {
                  singular: "プランの比較"
                },
                "ko-KR": {
                  singular: "요금제 비교"
                },
                "pt-BR": {
                  singular: "Comparar planos"
                },
                "zh-CN": {
                  singular: "套餐对比"
                }
              }
            })
          }), _v5.map(_v0 => (0, _v1.jsxs)("div", {
            style: _v91,
            children: [(0, _v1.jsx)("h3", {
              children: _v0.title
            }), (0, _v1.jsxs)("table", {
              style: _v92,
              children: [(0, _v1.jsx)("thead", {
                children: (0, _v1.jsxs)("tr", {
                  children: [(0, _v1.jsx)("th", {
                    style: _v93,
                    scope: "col"
                  }), _v0.map(_v0 => (0, _v1.jsx)("th", {
                    style: {
                      ..._v93,
                      textAlign: "center"
                    },
                    scope: "col",
                    children: _v0.name
                  }, _v0.tier))]
                })
              }), (0, _v1.jsx)("tbody", {
                children: _v0.list.map((_v0, _v1) => (0, _v1.jsxs)("tr", {
                  children: [(0, _v1.jsx)("th", {
                    style: _v93,
                    scope: "row",
                    children: _v0.text
                  }), _v0.map(_v0 => (0, _v1.jsx)("td", {
                    style: _v94,
                    children: ((_v0, _v1) => {
                      if (Array.isArray(_v0)) return _v0.includes(_v1) ? (0, _v7.translate)({
                        singular: "Included",
                        dictionary: {
                          es: {
                            singular: "Incluida"
                          },
                          "de-DE": {
                            singular: "Inbegriffen"
                          },
                          "fr-FR": {
                            singular: "Inclus"
                          },
                          "ja-JP": {
                            singular: "含む"
                          },
                          "ko-KR": {
                            singular: "포함"
                          },
                          "pt-BR": {
                            singular: "Incluído"
                          },
                          "zh-CN": {
                            singular: "已包含"
                          }
                        }
                      }) : "—";
                      let _v2 = _v0?.[_v1];
                      return !0 === _v2 ? (0, _v7.translate)({
                        singular: "Included",
                        dictionary: {
                          es: {
                            singular: "Incluida"
                          },
                          "de-DE": {
                            singular: "Inbegriffen"
                          },
                          "fr-FR": {
                            singular: "Inclus"
                          },
                          "ja-JP": {
                            singular: "含む"
                          },
                          "ko-KR": {
                            singular: "포함"
                          },
                          "pt-BR": {
                            singular: "Incluído"
                          },
                          "zh-CN": {
                            singular: "已包含"
                          }
                        }
                      }) : _v2 || "—";
                    })(_v0.tiers, _v0.tier)
                  }, _v0.tier))]
                }, `${_v0.id}-${_v1}`))
              })]
            })]
          }, _v0.id))]
        }), (0, _v1.jsx)(_v99, {
          inVideoSize: _v3
        })]
      });
    },
    _v101 = [{
      id: "video_player",
      title: (0, _v7.translate)({
        singular: "Video player",
        dictionary: {
          es: {
            singular: "reproductor de video"
          },
          "de-DE": {
            singular: "Video-Player"
          },
          "fr-FR": {
            singular: "Player vidéo"
          },
          "ja-JP": {
            singular: "動画プレーヤー"
          },
          "ko-KR": {
            singular: "동영상 플레이어"
          },
          "pt-BR": {
            singular: "Reprodutor de vídeo"
          },
          "zh-CN": {
            singular: "视频播放器"
          }
        }
      }),
      features: _v80.VIDEO_PLAYER_FEATURES
    }, {
      id: "video_maker_and_editing_tools",
      title: (0, _v7.translate)({
        singular: "Video maker and editing tools",
        dictionary: {
          es: {
            singular: "Realizador de videos y herramientas de edición"
          },
          "de-DE": {
            singular: "Videomacher und Bearbeitungstools"
          },
          "fr-FR": {
            singular: "Créateur de vidéos et outils de montage"
          },
          "ja-JP": {
            singular: "ビデオメーカーと編集ツール"
          },
          "ko-KR": {
            singular: "동영상 제작 및 편집 도구"
          },
          "pt-BR": {
            singular: "Criador de vídeos e ferramentas de edição"
          },
          "zh-CN": {
            singular: "视频制作和编辑工具"
          }
        }
      }),
      features: _v80.EDITING_FEATURES
    }, {
      id: "vimeo_ai",
      title: (0, _v7.translate)({
        singular: "Vimeo AI",
        dictionary: {
          "fr-FR": {
            singular: "IA Vimeo"
          }
        }
      }),
      features: _v80.AI_FEATURES
    }, {
      id: "virtual_events_and_webinars",
      title: (0, _v7.translate)({
        singular: "Virtual events and webinars",
        dictionary: {
          es: {
            singular: "Eventos virtuales y webinars"
          },
          "de-DE": {
            singular: "Virtuelle Veranstaltungen und Webinare"
          },
          "fr-FR": {
            singular: "Événements virtuels et webinaires"
          },
          "ja-JP": {
            singular: "バーチャルイベントとウェビナー"
          },
          "ko-KR": {
            singular: "가상 이벤트 및 웨비나"
          },
          "pt-BR": {
            singular: "Eventos virtuais e webinars"
          },
          "zh-CN": {
            singular: "虚拟活动与网络研讨会"
          }
        }
      }),
      features: _v80.WEBINARS_FEATURES
    }, {
      id: "video_management_and_collaboration",
      title: (0, _v7.translate)({
        singular: "Video management and collaboration",
        dictionary: {
          es: {
            singular: "Gestión de video y colaboración"
          },
          "de-DE": {
            singular: "Videomanagement und Zusammenarbeit"
          },
          "fr-FR": {
            singular: "Gestion et collaboration vidéo"
          },
          "ja-JP": {
            singular: "動画管理と共同作業"
          },
          "ko-KR": {
            singular: "동영상 관리 및 협업"
          },
          "pt-BR": {
            singular: "Colaboração e gerenciamento de vídeo"
          },
          "zh-CN": {
            singular: "视频管理与协作"
          }
        }
      }),
      features: _v80.COLLABORATION_FEATURES
    }, {
      id: "analytics",
      title: (0, _v7.translate)({
        singular: "Analytics",
        dictionary: {
          es: {
            singular: "Análisis"
          },
          "de-DE": {
            singular: "Analytik"
          },
          "fr-FR": {
            singular: "Analyses"
          },
          "ja-JP": {
            singular: "分析"
          },
          "ko-KR": {
            singular: "애널리틱스"
          },
          "pt-BR": {
            singular: "Análises"
          },
          "zh-CN": {
            singular: "分析"
          }
        }
      }),
      features: _v80.ANALYTICS_FEATURES
    }, {
      id: "marketing_and_distribution",
      title: (0, _v7.translate)({
        singular: "Marketing and distribution",
        dictionary: {
          es: {
            singular: "Marketing y distribución"
          },
          "de-DE": {
            singular: "Marketing und Vertrieb"
          },
          "fr-FR": {
            singular: "Marketing et distribution"
          },
          "ja-JP": {
            singular: "マーケティングと配信"
          },
          "ko-KR": {
            singular: "마케팅 및 배포"
          },
          "pt-BR": {
            singular: "Marketing e distribuição"
          },
          "zh-CN": {
            singular: "营销和分发"
          }
        }
      }),
      features: _v80.MARKETING_FEATURES
    }, {
      id: "privacy_security_and_admin_controls",
      title: (0, _v7.translate)({
        singular: "Privacy, security, and admin controls",
        dictionary: {
          es: {
            singular: "Controles de privacidad, seguridad y administración"
          },
          "de-DE": {
            singular: "Datenschutz, Sicherheit und administrative Kontrolle"
          },
          "fr-FR": {
            singular: "Confidentialité, sécurité et contrôles administrateur"
          },
          "ja-JP": {
            singular: "プライバシー、セキュリティ、管理コントロール"
          },
          "ko-KR": {
            singular: "프라이버시･보안･관리자 제어"
          },
          "pt-BR": {
            singular: "Privacidade, segurança e controles de administração"
          },
          "zh-CN": {
            singular: "隐私、安全和管理控制"
          }
        }
      }),
      features: _v80.PRIVACY_FEATURES
    }, {
      id: "priority_support",
      title: (0, _v7.translate)({
        singular: "Priority support",
        dictionary: {
          es: {
            singular: "Asistencia prioritaria"
          },
          "de-DE": {
            singular: "Prioritäts-Support"
          },
          "fr-FR": {
            singular: "Assistance prioritaire"
          },
          "ja-JP": {
            singular: "優先サポート"
          },
          "ko-KR": {
            singular: "우선 지원"
          },
          "pt-BR": {
            singular: "Suporte prioritário"
          },
          "zh-CN": {
            singular: "优先支持"
          }
        }
      }),
      features: _v80.SUPPORT_FEATURES
    }, {
      id: "enterprise_services",
      title: (0, _v7.translate)({
        singular: "Enterprise services",
        dictionary: {
          es: {
            singular: "Servicios de Enterprise"
          },
          "de-DE": {
            singular: "Enterprise-Services"
          },
          "fr-FR": {
            singular: "Services Entreprise"
          },
          "ja-JP": {
            singular: "Enterpriseサービス"
          },
          "ko-KR": {
            singular: "엔터프라이즈 서비스"
          },
          "pt-BR": {
            singular: "Serviços Enterprise"
          },
          "zh-CN": {
            singular: "Enterprise 服务"
          }
        }
      }),
      features: _v80.ENTERPRISE_FEATURES
    }],
    _v102 = ({
      prices: _v0
    }) => {
      let _v1 = (0, _v7.translate)({
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
      return (0, _v1.jsxs)("section", {
        style: _v84,
        children: [(0, _v1.jsx)(_v98, {}), (0, _v1.jsx)("div", {
          style: _v85,
          children: _v83.map(({
            tier: _v0,
            name: _v1,
            previous: _v2
          }) => {
            let _v3 = _v0?.[_v0];
            return (0, _v1.jsxs)("div", {
              style: _v86,
              children: [(0, _v1.jsx)("h2", {
                style: {
                  margin: 0
                },
                children: _v1
              }), _v3 ? (0, _v1.jsxs)("p", {
                style: _v87,
                children: [_v97(_v3), " USD ", _v1]
              }) : null, (0, _v1.jsx)("p", {
                style: _v88,
                children: _v2 ? (0, _v7.translate)({
                  singular: "Everything in {PLAN_NAME}, plus:",
                  replacements: {
                    PLAN_NAME: _v2
                  },
                  dictionary: {
                    es: {
                      singular: "Todo lo incluido en {PLAN_NAME}, más:"
                    },
                    "de-DE": {
                      singular: "Alles in {PLAN_NAME}, plus:"
                    },
                    "fr-FR": {
                      singular: "Tout ce qui est compris dans l'abonnement {PLAN_NAME}, plus :"
                    },
                    "ja-JP": {
                      singular: "{PLAN_NAME}プランの全機能に加え："
                    },
                    "ko-KR": {
                      singular: "{PLAN_NAME}의 모든 기능 및 다음 기능:"
                    },
                    "pt-BR": {
                      singular: "Tudo incluído no plano {PLAN_NAME}, mais:"
                    },
                    "zh-CN": {
                      singular: "{PLAN_NAME} 中的所有功能，加上："
                    }
                  }
                }) : (0, _v7.translate)({
                  singular: "Key features:",
                  dictionary: {
                    es: {
                      singular: "Funciones clave:"
                    },
                    "de-DE": {
                      singular: "Die wichtigsten Funktionen:"
                    },
                    "fr-FR": {
                      singular: "Fonctionnalités principales :"
                    },
                    "ja-JP": {
                      singular: "主な機能："
                    },
                    "ko-KR": {
                      singular: "주요 기능:"
                    },
                    "pt-BR": {
                      singular: "Principais recursos:"
                    },
                    "zh-CN": {
                      singular: "主要特点："
                    }
                  }
                })
              }), (0, _v1.jsx)("ul", {
                style: _v89,
                children: (_v82.CARD_FEATURE_LIST_MAP[_v0] ?? []).map((_v0, _v1) => (0, _v1.jsx)("li", {
                  children: _v0
                }, `${_v0}-${_v1}`))
              })]
            }, _v0);
          })
        }), (0, _v1.jsxs)("section", {
          style: _v90,
          children: [(0, _v1.jsx)("h2", {
            children: (0, _v7.translate)({
              singular: "Compare plans",
              dictionary: {
                es: {
                  singular: "Comparar planes"
                },
                "de-DE": {
                  singular: "Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparer les abonnements"
                },
                "ja-JP": {
                  singular: "プランの比較"
                },
                "ko-KR": {
                  singular: "요금제 비교"
                },
                "pt-BR": {
                  singular: "Comparar planos"
                },
                "zh-CN": {
                  singular: "套餐对比"
                }
              }
            })
          }), (0, _v1.jsxs)("div", {
            style: _v91,
            children: [(0, _v1.jsx)("h3", {
              children: (0, _v7.translate)({
                singular: "Core features",
                dictionary: {
                  es: {
                    singular: "Funciones principales"
                  },
                  "de-DE": {
                    singular: "Hauptfunktionen"
                  },
                  "fr-FR": {
                    singular: "Fonctionnalités principales"
                  },
                  "ja-JP": {
                    singular: "主な機能"
                  },
                  "ko-KR": {
                    singular: "핵심 기능"
                  },
                  "pt-BR": {
                    singular: "Recursos principais"
                  },
                  "zh-CN": {
                    singular: "核心功能"
                  }
                }
              })
            }), (0, _v1.jsx)("ul", {
              style: _v89,
              children: [(0, _v7.translate)({
                singular: "Users",
                dictionary: {
                  es: {
                    singular: "Usuarios"
                  },
                  "de-DE": {
                    singular: "Benutzer"
                  },
                  "fr-FR": {
                    singular: "Utilisateurs"
                  },
                  "ja-JP": {
                    singular: "ユーザー"
                  },
                  "ko-KR": {
                    singular: "사용자"
                  },
                  "pt-BR": {
                    singular: "Usuários"
                  }
                }
              }), (0, _v7.translate)({
                singular: "Video uploads and creation",
                dictionary: {
                  es: {
                    singular: "Creación y subidas de videos"
                  },
                  "de-DE": {
                    singular: "Videos hochladen und erstellen"
                  },
                  "fr-FR": {
                    singular: "Mises en ligne et création de vidéos"
                  },
                  "ja-JP": {
                    singular: "動画のアップロードと作成"
                  },
                  "ko-KR": {
                    singular: "동영상 업로드 및 제작"
                  },
                  "pt-BR": {
                    singular: "Carregamentos e criação de vídeos"
                  },
                  "zh-CN": {
                    singular: "上传和创建视频"
                  }
                }
              }), (0, _v7.translate)({
                singular: "Screen recording",
                dictionary: {
                  es: {
                    singular: "Grabación de pantalla"
                  },
                  "de-DE": {
                    singular: "Bildschirmaufnahme"
                  },
                  "fr-FR": {
                    singular: "Enregistrement d'écran"
                  },
                  "ja-JP": {
                    singular: "画面録画"
                  },
                  "ko-KR": {
                    singular: "화면 녹화"
                  },
                  "pt-BR": {
                    singular: "Gravação de tela"
                  },
                  "zh-CN": {
                    singular: "屏幕录制"
                  }
                }
              }), (0, _v7.translate)({
                singular: "Virtual events & webinars",
                dictionary: {
                  es: {
                    singular: "Eventos virtuales & seminarios web"
                  },
                  "de-DE": {
                    singular: "Virtuelle Events & Webinare"
                  },
                  "fr-FR": {
                    singular: "Événements virtuels et webinaires"
                  },
                  "ja-JP": {
                    singular: "バーチャルイベント & ウェビナー"
                  },
                  "ko-KR": {
                    singular: "가상 이벤트 & 웨비나"
                  },
                  "pt-BR": {
                    singular: "Eventos virtuais e webinars"
                  },
                  "zh-CN": {
                    singular: "虚拟活动与网络研讨会"
                  }
                }
              }), (0, _v7.translate)({
                singular: "Bandwidth",
                dictionary: {
                  es: {
                    singular: "Ancho de banda"
                  },
                  "de-DE": {
                    singular: "Bandbreite"
                  },
                  "fr-FR": {
                    singular: "Bande passante"
                  },
                  "ja-JP": {
                    singular: "転送量"
                  },
                  "ko-KR": {
                    singular: "대역폭"
                  },
                  "pt-BR": {
                    singular: "Largura de banda"
                  },
                  "zh-CN": {
                    singular: "带宽"
                  }
                }
              })].map((_v0, _v1) => (0, _v1.jsx)("li", {
                children: _v0
              }, `core-${_v1}`))
            })]
          }), _v101.map(_v0 => (0, _v1.jsxs)("div", {
            style: _v91,
            children: [(0, _v1.jsx)("h3", {
              children: _v0.title
            }), (0, _v1.jsx)("ul", {
              style: _v89,
              children: _v0.features.map((_v0, _v1) => (0, _v1.jsx)("li", {
                children: _v0.text
              }, `${_v0.id}-${_v1}`))
            })]
          }, _v0.id))]
        }), (0, _v1.jsx)(_v99, {
          inVideoSize: !1
        })]
      });
    },
    _v103 = ({
      plansData: _v0,
      prices: _v1
    }) => _v0 && _v0.length > 0 ? (0, _v1.jsx)(_v100, {
      plansData: _v0,
      prices: _v1
    }) : (0, _v1.jsx)(_v102, {
      prices: _v1
    });
  var _v104 = _v0.i(0);
  let _v105 = "https://vimeo.com",
    _v106 = `${_v105}/upgrade-plan`,
    _v107 = {
      starter: "12.00",
      standard: "25.00",
      advanced: "75.00"
    },
    _v108 = (_v0, _v1, _v2) => ({
      "@type": "ImageObject",
      url: `https://i.vimeocdn.com/custom_asset/${_v0}`,
      width: _v1,
      height: _v2
    }),
    _v109 = {
      "@type": "Organization",
      name: "Vimeo",
      url: _v105,
      logo: _v108("cbf0b6892f540132a1d1b8f1520a9d75", "2150", "860"),
      sameAs: ["https://www.facebook.com/Vimeo/", "https://twitter.com/vimeo", "https://www.instagram.com/vimeo/", "https://en.wikipedia.org/wiki/Vimeo", "https://www.crunchbase.com/organization/vimeo", "https://www.tiktok.com/@vimeo", "https://www.linkedin.com/company/vimeo/"]
    },
    _v110 = {
      "@type": "QuantitativeValue",
      value: "1",
      unitCode: "MON"
    },
    _v111 = ({
      plansData: _v0,
      prices: _v1
    }) => {
      let [_v2] = (0, _v4.useQueryParams)({
          v: _v3.NumberParam,
          context: (0, _v3.createEnumParam)(Object.values(_v77.CONTEXT)),
          campaign: _v3.StringParam
        }),
        _v3 = (0, _v7.translate)({
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
        _v4 = (0, _v7.translate)({
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
            children: _v3
          }), (0, _v1.jsx)("meta", {
            name: "description",
            content: _v4
          }), (0, _v1.jsx)("meta", {
            property: "og:type",
            content: "video.other"
          }), (0, _v1.jsx)("meta", {
            property: "og:site_name",
            content: "Vimeo"
          }), (0, _v1.jsx)("meta", {
            property: "og:url",
            content: _v106
          }), (0, _v1.jsx)("meta", {
            property: "og:title",
            content: _v3
          }), (0, _v1.jsx)("meta", {
            property: "og:description",
            content: _v4
          }), (0, _v1.jsx)("meta", {
            name: "twitter:title",
            content: _v3
          }), (0, _v1.jsx)("link", {
            rel: "canonical",
            href: _v106
          })]
        }), (0, _v1.jsx)("div", {
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: {
            __html: `<script type="application/ld+json">${JSON.stringify({
              "@context": "http://schema.org",
              "@graph": [{
                mainEntity: {
                  "@context": "http://schema.org",
                  "@type": ["WebApplication", "Product", "SoftwareApplication"],
                  "@id": _v105,
                  applicationCategory: ["BusinessApplication", "BrowserApplication", "EntertainmentApplication", "MultimediaApplication", "LifestyleApplication", "EducationalApplication", "CommunicationApplication", "ReferenceApplication"],
                  name: "Vimeo All-In-One Video Platform",
                  operatingSystem: "all",
                  browserRequirements: "Requires Javascript and HTML5 support",
                  url: _v105,
                  screenshot: _v108("d9ef877c80e240720926ee30e6ace39b", "1800", "1101"),
                  image: [_v108("c406392768b237292f74f3e2099e5545", "1920", "1082"), _v108("650db19aec4d5633a6f5a1a2997bd058", "1921", "1081"), _v108("f884aa9bd76537bdb2f52e8017becdc0", "1920", "1080"), _v108("bc7ff4aaa44d52d6683d21e1d68c9913", "1920", "1080"), _v108("202c65b28d45af4812af604d1f2f629d", "1920", "1080")],
                  description: "Unlock the power of video and join over 260M professionals, teams, and organizations who use Vimeo to create, collaborate and communicate.",
                  featureList: ["https://vimeo.com/solutions/video-monetization", "https://vimeo.com/solutions/communications", "https://vimeo.com/solutions/marketing", "https://vimeo.com/features/interactive-video", "https://vimeo.com/features/livestreaming", "https://vimeo.com/features/screen-recorder", "https://vimeo.com/create", "https://vimeo.com/for-hire", "https://vimeo.com/stock", "https://vimeo.com/features/video-library", "https://vimeo.com/features/video-player", "https://vimeo.com/features/online-video-hosting", "https://vimeo.com/features/video-privacy", "https://vimeo.com/enterprise", "https://vimeo.com/features/virtual-events", "https://vimeo.com/features/video-analytics", "https://vimeo.com/ott"],
                  offers: {
                    "@type": "AggregateOffer",
                    offeredBy: _v109,
                    highPrice: _v1.advanced,
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
                      price: _v1.starter,
                      priceCurrency: "USD",
                      name: "Starter",
                      description: "Our Starter plan comes with 60 videos/seat/year; 2TB of bandwidth/month in the Vimeo player; In addition to the Free plan, Starter comes with Player embedding; Password protection; Video chaptering and SEO; Seamless video review tools with Time-coded notes; and Engagement and social analytics.",
                      referenceQuantity: _v110
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.standard,
                      priceCurrency: "USD",
                      name: "Standard",
                      description: "Our Standard plan comes with 120 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Starter plan, Standard comes with Branding in player and videos; Custom CTAs and end cards; Lead capture with custom forms; Premium templates for video creation; Stock photos, videos, and music; and Tools to sell videos online and worldwide.",
                      referenceQuantity: _v110
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.advanced,
                      priceCurrency: "USD",
                      name: "Advanced",
                      description: "Our Advanced plan comes with 240 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Standard plan, Advanced comes with Virtual events and webinars; Live Q&A, polls, and chats; Register up to 100 attendees per event; Branded invite & reminder emails; Real-time stream health; and Marketing integrations with Constant Contact, Hubspot, Mailchimp, Heap, and Campaign Monitor.",
                      referenceQuantity: _v110
                    }]
                  },
                  creator: _v109
                }
              }]
            })}</script>`
          }
        }), (0, _v1.jsx)("noscript", {
          suppressHydrationWarning: !0,
          children: (0, _v1.jsx)(_v103, {
            plansData: _v0,
            prices: _v1
          })
        }), (0, _v1.jsx)(_v76, {
          version: _v2.v,
          context: _v2.context,
          campaign: _v2.campaign
        })]
      });
    },
    _v112 = ["starter", "standard", "advanced"],
    _v113 = ["currency", "discount", "id", "metadata", "price", "promotion", "name", "uri", "tier", "priceFormatted"],
    _v114 = async (_v0, _v1) => {
      try {
        let _v0 = await (0, _v6.getSubscriptionPlans)({
            baseUrl: _v0,
            select: _v113,
            query: {
              bypassTierHierarchy: !0,
              currency: "USD"
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": "/upgrade-plan",
              "Accept-Language": "en"
            }
          }),
          _v1 = Array.isArray(_v0) ? _v0 : _v0?.data ?? [];
        if (!_v1 || 0 === _v1.length) return null;
        let _v2 = _v1.filter(_v0 => "free" !== _v0.tier);
        if (0 === _v2.length) return null;
        return JSON.parse(JSON.stringify(_v2));
      } catch {
        return null;
      }
    };
  (0, _v5.withPageSetup)(async _v0 => {
    let _v1 = await _v114(_v0.baseUrl, _v0.jwt);
    return {
      props: {
        hasThemeSupport: !0,
        plansData: _v1,
        prices: (_v0 => {
          if (!_v0) return _v107;
          let _v1 = {
            ..._v107
          };
          for (let _v0 of _v112) {
            let _v0 = _v0.find(_v0 => _v0.tier === _v0)?.price?.annualMonthly;
            if ("number" != typeof _v0) return _v107;
            _v1[_v0] = _v0.toFixed(2);
          }
          return _v1;
        })(_v1)
      }
    };
  }, {
    inlineViewer: "all"
  }), _v111.getLayout = _v0 => (0, _v1.jsxs)(_v104.QueryParamProvider, {
    children: [_v0, (0, _v1.jsx)(_v8.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v111], 0);
}