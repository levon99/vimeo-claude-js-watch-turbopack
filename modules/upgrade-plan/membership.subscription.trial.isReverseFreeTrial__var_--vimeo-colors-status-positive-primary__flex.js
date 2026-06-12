{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
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
    _v22 = _v0.i(0);
  let _v23 = ["membership.subscription.trial.isReverseFreeTrial"];
  var _v24 = _v0.i(0),
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
  let _v35 = [0, 0];
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = () => (0, _v1.jsx)(_v13.Box, {
      backgroundColor: "var(--vimeo-colors-status-positive-primary)",
      borderRadius: (0, _v15.rem)(6),
      width: (0, _v15.rem)(64),
      height: (0, _v15.rem)(20),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v14.Text, {
        variant: "body-xs",
        fontWeight: 500,
        whiteSpace: "nowrap",
        style: {
          color: "var(--vimeo-colors-text-button-inverted)"
        },
        children: (0, _v18.translate)({
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
    _v42 = ({
      children: _v0,
      isSelected: _v1
    }) => (0, _v1.jsxs)(_v13.Box, {
      position: "relative",
      children: [(0, _v1.jsx)(_v14.Text, {
        variant: "heading-sm",
        visibility: "hidden",
        "aria-hidden": !0,
        children: _v0
      }), (0, _v1.jsx)(_v14.Text, {
        variant: _v1 ? "heading-sm" : "body-lg",
        color: "text.primary",
        position: "absolute",
        top: 0,
        left: 0,
        children: _v0
      })]
    }),
    _v43 = ({
      onClick: _v0,
      checked: _v1,
      isMobile: _v2
    }) => (0, _v1.jsxs)(_v39.Flex, {
      alignItems: _v2 ? "flex-end" : "center",
      gap: (0, _v15.rem)(16),
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v42, {
        isSelected: !_v1,
        children: (0, _v18.translate)({
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
      }), (0, _v1.jsx)(_v40.Switch, {
        size: "lg",
        isChecked: _v1,
        onChange: _v0,
        "aria-label": "Toggle billing frequency"
      }), (0, _v1.jsxs)(_v39.Flex, {
        direction: _v2 ? "column-reverse" : "row",
        alignItems: _v2 ? "flex-start" : "center",
        gap: (0, _v15.rem)(4),
        children: [(0, _v1.jsx)(_v42, {
          isSelected: _v1,
          children: (0, _v18.translate)({
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
        }), (0, _v1.jsx)(_v41, {})]
      })]
    });
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  let _v46 = _v45.default.div.withConfig({
      displayName: "styles__StyledToggle",
      componentId: "sc-c583c415-0"
    })`
  color: var(--vimeo-colors-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  border-width: ${(0, _v44.rem)(2)};
  border-color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v44.rem)(8)} 0;
  transition: all 250ms ease-in-out 0s;
  position: relative;
  border-radius: 3rem;
  margin: 0 ${(0, _v44.rem)(8)} 0 ${(0, _v44.rem)(8)};
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? "#181E24" : "none"};
  &::after {
    position: absolute;
    left: ${(0, _v44.rem)(4)};
    right: auto;
    content: '';
    display: block;
    background: var(--vimeo-colors-text-primary);
    opacity: 1;
    transition: all 250ms ease-in-out 0s;
    width: 50%;
    height: ${(0, _v44.rem)(30)};
    border-radius: ${(0, _v44.rem)(20)};
  }
`,
    _v47 = _v45.default.div.withConfig({
      displayName: "styles__ToggleContainer",
      componentId: "sc-c583c415-1"
    })`
  display: inline-block;
  &:active > ${_v46} {
    background-color: rgba(20, 26, 32, 0.3);
  }
`,
    _v48 = _v45.default.input.withConfig({
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
  &:checked ~ ${_v46} {
    &::after {
      transform: translateX(calc(100% - 7px));
    }
  }
`,
    _v49 = _v45.default.p.withConfig({
      displayName: "styles__ToggleLabel",
      componentId: "sc-c583c415-3"
    })`
  z-index: 1;
  font-size: ${(0, _v44.rem)(16)};
  letter-spacing: ${(0, _v44.rem)(-.48)};
  white-space: nowrap;
  text-align: center;
  padding: 0 ${(0, _v44.rem)(20)};
  width: ${({
      width: _v0
    }) => _v0 && (0, _v44.rem)(_v0)};
  ${({
      checked: _v0
    }) => _v0 && _v45.css`
      color: var(--vimeo-colors-text-button-inverted);
    `};
`,
    _v50 = ({
      onClick: _v0,
      checked: _v1
    }) => {
      let [_v2, _v3] = (0, _v7.useState)(""),
        _v4 = (0, _v7.useRef)(null),
        _v5 = (0, _v7.useCallback)(() => {
          let _v0 = _v4.current;
          if (!_v0) return;
          let _v1 = _v0.children;
          if (_v1.length && !_v2) {
            let _v0 = 0;
            for (let _v0 of _v1) _v0 && _v0?.offsetWidth > _v0 && (_v0 = _v0?.offsetWidth);
            _v3(_v0);
          }
        }, [_v4, _v2]);
      return (0, _v7.useEffect)(() => {
        _v5();
      }, [_v5]), (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v47, {
          onClick: _v0,
          children: [(0, _v1.jsx)(_v48, {
            checked: _v1,
            type: "checkbox"
          }), (0, _v1.jsxs)(_v46, {
            ref: _v4,
            children: [(0, _v1.jsx)(_v49, {
              checked: !_v1,
              width: _v2,
              children: (0, _v18.translate)({
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
                    singular: "月間"
                  },
                  "ko-KR": {
                    singular: "월별"
                  },
                  "pt-BR": {
                    singular: "Mensalmente"
                  },
                  "zh-CN": {
                    singular: "每月"
                  }
                }
              })
            }), (0, _v1.jsx)(_v49, {
              checked: _v1,
              width: _v2,
              children: (0, _v18.translate)({
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
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = _v45.default.div.withConfig({
      displayName: "styles__TagContainer",
      componentId: "sc-2420be19-0"
    })`
  background: ${_v0 => (0, _v52.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
  padding: ${(0, _v44.rem)(4)} ${(0, _v44.rem)(6)} ${(0, _v44.rem)(4)} ${(0, _v44.rem)(8)};
  border-radius: ${(0, _v44.rem)(12)};
  color: ${_v0 => (0, _v52.getTagColor)(_v0.showYearly, _v0.theme.name)};
  font-size: ${(0, _v44.rem)(16)};
  font-weight: 400;
  line-height: 130%;
  letter-spacing: ${(0, _v44.rem)(-.32)};
  position: relative;
  margin-left: ${(0, _v44.rem)(9)};
  margin-bottom: 0px;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-right: ${(0, _v44.rem)(6)} solid
      ${_v0 => (0, _v52.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
    border-top: ${(0, _v44.rem)(4)} solid transparent;
    border-bottom: ${(0, _v44.rem)(4)} solid transparent;
    border-left: 0px;
    top: ${(0, _v44.rem)(10)};
    left: ${(0, _v44.rem)(-6)};
  }
`,
    _v54 = ({
      showYearly: _v0
    }) => ((0, _v51.useIsBokeh)(), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v53, {
        showYearly: _v0,
        children: (0, _v1.jsx)("p", {
          children: (0, _v18.translate)({
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
    _v55 = _v0 => {
      let _v1,
        _v2,
        _v3,
        {
          trackPricingPageSeeBusinessTiersClicked: _v4,
          trackPricingPageSeeIndividualTiersClicked: _v5
        } = (0, _v26.usePricingTracking)();
      if (_v0.onRequestEligibility) _v1 = (0, _v18.translate)({
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
      }), _v2 = (0, _v18.translate)({
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
        _v1 = _v0 ? (0, _v18.translate)({
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
        }) : (0, _v18.translate)({
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
        }), _v2 = _v0 ? (0, _v18.translate)({
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
        }) : (0, _v18.translate)({
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
      return (0, _v1.jsx)(_v13.Box, {
        maxWidth: (0, _v15.rem)(0),
        margin: "0 auto",
        padding: `${(0, _v15.rem)(24)} ${(0, _v15.rem)(28)}`,
        textAlign: "center",
        background: "var(--vimeo-colors-fill-surface)",
        borderRadius: "1.5rem",
        children: (0, _v1.jsxs)(_v14.Text, {
          variant: "body-xl",
          children: [_v1, " ", (0, _v1.jsx)(_v14.Text, {
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
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = _v0 => {
    let _v1 = (0, _v7.useContext)(_v11.ViewerContext),
      _v2 = (0, _v7.useContext)(_v31.OverridesContext),
      _v3 = _v2.description || !_v1?.user,
      {
        isMobileBreakpoint: _v4,
        redirectUrl: _v5
      } = _v0;
    return (0, _v1.jsxs)(_v13.Box, {
      padding: `0 ${(0, _v57.space)(600)}`,
      children: [(0, _v1.jsx)(_v13.Box, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v56.Header, {
          size: "xl",
          fontSize: _v4 ? (0, _v15.rem)(30) : _v2?.titleSize ?? (0, _v15.rem)(92),
          lineHeight: _v4 ? (0, _v15.rem)(36) : (0, _v15.rem)(92),
          fontWeight: 500,
          children: _v2?.title ? _v2.title : _v58.PRIMARY_HEADERS.theUltimateAdFreePlayer
        })
      }), _v2?.displayRedirect && _v5 && (0, _v1.jsx)(_v13.Box, {
        textAlign: "center",
        margin: `${(0, _v15.rem)(10)} 0 ${(0, _v15.rem)(15)}`,
        children: (0, _v1.jsx)(_v56.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v58.SECONDARY_HEADERS.getStartedWithFreeConcise(_v5)
        })
      }), _v3 && (0, _v1.jsx)(_v13.Box, {
        textAlign: "center",
        margin: `${(0, _v15.rem)(10)} 0 ${(0, _v15.rem)(15)}`,
        children: (0, _v1.jsx)(_v56.Header, {
          size: _v4 ? "sm" : "md",
          fontWeight: 400,
          children: _v2?.description !== void 0 && _v2?.description !== null ? _v2.description : _v58.SECONDARY_HEADERS.getStartedWithBasic
        })
      })]
    });
  };
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = _v45.default.div.withConfig({
      displayName: "styles__BadgeContainer",
      componentId: "sc-2c69964a-0"
    })`
  position: absolute;
  top: ${(0, _v44.rem)(-24)};
  left: 0;
  background: ${({
      bgColor: _v0
    }) => _v0};
  color: white;
  border-radius: ${(0, _v44.rem)(20)} ${(0, _v44.rem)(20)} 0 0;
  height: ${(0, _v44.rem)(70)};
  width: 100%;
  text-align: center;

  @media (width > ${_v65.breakpoints.TABLET}) {
    top: ${(0, _v44.rem)(-37)};
    min-height: ${(0, _v44.rem)(36)};
    height: ${(0, _v44.rem)(70)};
    padding: ${(0, _v44.rem)(6)} ${(0, _v44.rem)(24)};
  }

  > h2 {
    ${(0, _v66.addTypography)(12, 18)}
    color: #f0f4f6;
    font-weight: 500;
    line-height: ${(0, _v44.rem)(24)};
    margin: 0;
    letter-spacing: unset;
    @media (width > ${_v65.breakpoints.TABLET}) {
      line-height: ${(0, _v44.rem)(26)};
    }
  }
`,
    _v68 = _v45.default.div.withConfig({
      displayName: "styles__CurrentPlanBadgeContainer",
      componentId: "sc-2c69964a-1"
    })`
  border-radius: ${(0, _v44.rem)(20)};
  background: var(--vimeo-colors-button-secondary-default);
  padding: ${(0, _v44.rem)(8)} ${(0, _v44.rem)(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  @media (max-width: ${_v65.breakpoints.DESKTOP_LARGE}) {
    padding: ${(0, _v44.rem)(6)} ${(0, _v44.rem)(1)};
  }
  .currentPlanText {
    ${(0, _v66.addTypography)(7, 14)}
    color: var(--vimeo-colors-text-secondary);
    font-weight: 400;
    padding: 0 ${(0, _v44.rem)(10)};
    margin: auto;
    line-height: 13.3px;
    letter-spacing: 0.56px;
  }
`,
    _v69 = ({
      color: _v0 = "#000",
      text: _v1
    }) => (0, _v1.jsx)(_v67, {
      bgColor: _v0,
      children: (0, _v1.jsx)(_v14.Text, {
        variant: "heading-md",
        children: _v1
      })
    }),
    _v70 = ({
      planData: _v0,
      showBadge: _v1
    }) => {
      let _v2 = (0, _v7.useContext)(_v31.OverridesContext);
      if (_v2?.noBadge) return null;
      let {
        tier: _v3
      } = _v0;
      return _v2?.badgeType && _v2?.badgePlan === _v3 ? (0, _v1.jsx)(_v69, {
        color: "#8A5EE8",
        text: _v2.badgeType
      }) : _v1 ? (0, _v1.jsx)(_v69, {
        color: "#8A5EE8",
        text: (0, _v18.translate)({
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
      }) : null;
    },
    _v71 = ({
      showBadge: _v0,
      showUpcoming: _v1,
      label: _v2
    }) => _v0 || _v1 ? (0, _v1.jsx)(_v68, {
      children: (0, _v1.jsx)(_v14.Text, {
        as: "div",
        variant: "body-md",
        size: "6",
        className: "currentPlanText",
        children: _v2 ?? (0, _v18.translate)({
          singular: "Your plan",
          dictionary: {
            es: {
              singular: "Su plan"
            },
            "de-DE": {
              singular: "Dein Abonnement"
            },
            "fr-FR": {
              singular: "Votre abonnement"
            },
            "ja-JP": {
              singular: "あなたのプラン"
            },
            "ko-KR": {
              singular: "내 요금제"
            },
            "pt-BR": {
              singular: "Seu plano"
            },
            "zh-CN": {
              singular: "您的套餐"
            }
          }
        })
      })
    }) : null,
    _v72 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v14.Text, {
      variant: "heading-xs",
      margin: 0,
      textDecoration: "underline",
      cursor: "pointer",
      letterSpacing: (0, _v15.rem)(.48),
      children: _v0
    }),
    _v73 = () => (0, _v1.jsx)(_v13.Box, {
      padding: `0 ${(0, _v15.rem)(40)}`,
      width: "100%",
      position: "absolute",
      bottom: (0, _v15.rem)(36),
      onClick: () => {
        document.getElementById("compare_plans_table_header")?.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: (0, _v1.jsx)(_v72, {
        children: (0, _v18.translate)({
          singular: "Compare all features",
          dictionary: {
            es: {
              singular: "Comparar todas las funciones"
            },
            "de-DE": {
              singular: "Alle Funktionen vergleichen"
            },
            "fr-FR": {
              singular: "Comparez toutes les fonctionnalités"
            },
            "ja-JP": {
              singular: "すべての機能を比較"
            },
            "ko-KR": {
              singular: "모든 기능 비교하기"
            },
            "pt-BR": {
              singular: "Compare todos os recursos"
            },
            "zh-CN": {
              singular: "比较所有功能"
            }
          }
        })
      })
    });
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = ({
    targetView: _v0,
    onSwitch: _v1,
    isMobileBreakpoint: _v2
  }) => {
    let _v3 = "business" === _v0,
      {
        trackPricingPageSeeBusinessTiersClicked: _v4,
        trackPricingPageSeeIndividualTiersClicked: _v5
      } = (0, _v26.usePricingTracking)(),
      _v6 = _v3 ? (0, _v18.translate)({
        singular: "Looking for Business solutions?",
        dictionary: {
          es: {
            singular: "¿Busca soluciones para empresas?"
          },
          "de-DE": {
            singular: "Suchen Sie nach Lösungen für Unternehmen?"
          },
          "fr-FR": {
            singular: "Vous recherchez des solutions pour les entreprises ?"
          },
          "ja-JP": {
            singular: "ビジネス向けソリューションをお探しですか？"
          },
          "ko-KR": {
            singular: "기업용 솔루션을 찾고 계신가요?"
          },
          "pt-BR": {
            singular: "Procurando soluções para Empresas?"
          },
          "zh-CN": {
            singular: "正在寻找企业解决方案吗？"
          }
        }
      }) : (0, _v18.translate)({
        singular: "Looking for Individual plans?",
        dictionary: {
          es: {
            singular: "¿Busca planes para particulares?"
          },
          "de-DE": {
            singular: "Suchen Sie nach Plänen für Privatpersonen?"
          },
          "fr-FR": {
            singular: "Vous recherchez des offres pour les particuliers ?"
          },
          "ja-JP": {
            singular: "個人向けプランをお探しですか？"
          },
          "ko-KR": {
            singular: "개인용 요금제를 찾고 계신가요?"
          },
          "pt-BR": {
            singular: "Procurando planos para pessoas?"
          },
          "zh-CN": {
            singular: "正在寻找个人套餐吗？"
          }
        }
      }),
      _v7 = _v3 ? (0, _v18.translate)({
        singular: "See plans for Business",
        dictionary: {
          es: {
            singular: "Ver planes para empresas"
          },
          "de-DE": {
            singular: "Pläne für Unternehmen ansehen"
          },
          "fr-FR": {
            singular: "Voir les offres pour les entreprises"
          },
          "ja-JP": {
            singular: "ビジネス向けプランを見る"
          },
          "ko-KR": {
            singular: "기업용 요금제 보기"
          },
          "pt-BR": {
            singular: "Veja planos para Empresas"
          },
          "zh-CN": {
            singular: "查看企业套餐"
          }
        }
      }) : (0, _v18.translate)({
        singular: "See plans for Individuals",
        dictionary: {
          es: {
            singular: "Ver planes para particulares"
          },
          "de-DE": {
            singular: "Pläne für Privatpersonen ansehen"
          },
          "fr-FR": {
            singular: "Voir les offres pour les particuliers"
          },
          "ja-JP": {
            singular: "個人向けプランを見る"
          },
          "ko-KR": {
            singular: "개인용 요금제 보기"
          },
          "pt-BR": {
            singular: "Veja planos para Pessoas"
          },
          "zh-CN": {
            singular: "查看个人套餐"
          }
        }
      });
    return (0, _v1.jsx)(_v13.Box, {
      width: _v2 ? "100%" : "25%",
      minWidth: _v2 ? "100%" : (0, _v15.rem)(330),
      display: _v2 ? "block" : "table-cell",
      verticalAlign: "middle",
      position: "relative",
      "data-cross-sell": !0,
      margin: "0 auto",
      border: `${(0, _v15.rem)(8)} solid transparent`,
      children: (0, _v1.jsxs)(_v13.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingX: (0, _v15.rem)(32),
        paddingBottom: (0, _v15.rem)(32),
        gap: (0, _v15.rem)(24),
        children: [(0, _v1.jsx)(_v13.Box, {
          width: "170px",
          height: "160px",
          flexShrink: 0,
          sx: {
            aspectRatio: "17/16",
            mixBlendMode: "multiply",
            '[data-theme="dark"] &': {
              filter: "invert(1)",
              mixBlendMode: "unset"
            }
          },
          children: (0, _v1.jsx)("img", {
            src: "https://i.vimeocdn.com/custom_asset/e58fa4e3c2cfe590481538dd301730c4",
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }
          })
        }), (0, _v1.jsx)(_v56.Header, {
          as: "h3",
          size: "lg",
          textAlign: "center",
          children: _v6
        }), (0, _v1.jsx)(_v76.Button, {
          variant: "primary",
          size: "lg",
          bgColor: "text-primary",
          width: "100%",
          borderRadius: (0, _v15.rem)(16),
          onClick: () => {
            _v3 ? _v4({
              entryPoint: "button"
            }) : _v5({
              entryPoint: "button"
            }), _v1(), _v2 && window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
          },
          children: _v7
        })]
      })
    });
  };
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = _v0 => (0, _v1.jsx)(_v79.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.088 4.955c-.007-.008-.01-.019-.017-.026-.008-.008-.018-.01-.026-.018a9.979 9.979 0 0 0-14.09 0c-.008.008-.018.01-.026.018-.007.007-.01.018-.017.026a10 10 0 1 0 14.176 0ZM12 20a7.983 7.983 0 0 1-6.235-3H9.78a2.963 2.963 0 0 0 4.44 0h4.015A7.985 7.985 0 0 1 12 20Zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8.41.002L19.4 15H15a2.995 2.995 0 0 0-2-2.816V9a1 1 0 0 0-2 0v3.184A2.995 2.995 0 0 0 9 15H4.6l-.01.002A7.931 7.931 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93a7.951 7.951 0 0 1 1.618-3.898l.655.655a1 1 0 0 0 1.414-1.414l-.654-.655A7.952 7.952 0 0 1 11 4.07V5a1 1 0 1 0 2 0v-.93a7.952 7.952 0 0 1 3.897 1.618l-.654.655a1 1 0 0 0 1.414 1.414l.654-.655A7.951 7.951 0 0 1 19.931 11H19a1 1 0 0 0 0 2h.93a7.932 7.932 0 0 1-.52 2.002Z",
      fill: "currentColor"
    })
  });
  var _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = ({
    planData: _v0
  }) => {
    var _v1;
    let {
        entitlements: _v2,
        isBandwidthProduct: _v3
      } = _v0?.metadata,
      {
        teamSeats: _v4,
        videoStoragePeriodicQuota: _v5,
        videoStorageQuotaUnit: _v6,
        bandwidth: _v7
      } = _v2?.params,
      {
        isFlatRateData: _v8,
        isSolutionData: _v9,
        isRepackagingData: _v10,
        usageCheckData: _v11
      } = (0, _v7.useContext)(_v32.PlansDataContext),
      _v12 = _v0 => {
        switch (_v0) {
          case "free":
          default:
            return (0, _v18.translate)({
              singular: "{AMOUNT} user",
              plural: "{AMOUNT} users",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4
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
            });
          case "enterprise":
            return (0, _v18.translate)({
              singular: "More users",
              dictionary: {
                es: {
                  singular: "Más usuarios"
                },
                "de-DE": {
                  singular: "Mehr Benutzer"
                },
                "fr-FR": {
                  singular: "Plus d'utilisateurs"
                },
                "ja-JP": {
                  singular: "より多くのユーザー"
                },
                "ko-KR": {
                  singular: "더 많은 사용자 추가"
                },
                "pt-BR": {
                  singular: "Mais usuários"
                },
                "zh-CN": {
                  singular: "更多用户"
                }
              }
            });
          case "customSelfServe":
            return (0, _v18.translate)({
              singular: "{AMOUNT} user included",
              plural: "{AMOUNT} users included",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuario incluido",
                  plural: "{AMOUNT} usuarios incluidos"
                },
                "de-DE": {
                  singular: "{AMOUNT} Benutzer eingeschlossen",
                  plural: "{AMOUNT} Benutzer eingeschlossen"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateur inclus",
                  plural: "{AMOUNT} utilisateurs inclus"
                },
                "ja-JP": {
                  singular: "{AMOUNT}人のユーザーが含まれます",
                  plural: "{AMOUNT}人のユーザーが含まれます"
                },
                "ko-KR": {
                  singular: "사용자 {AMOUNT}명 포함",
                  plural: "사용자 {AMOUNT}명 포함"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuário incluído",
                  plural: "{AMOUNT} usuários incluídos"
                },
                "zh-CN": {
                  singular: "包括 {AMOUNT} 位用户",
                  plural: "包括 {AMOUNT} 位用户"
                }
              }
            });
        }
      },
      _v13 = _v7.default.forwardRef(({
        children: _v0,
        ..._v1
      }, _v2) => (0, _v1.jsx)(_v13.Box, {
        ref: _v2,
        marginBottom: 3,
        marginTop: 3,
        display: "flex",
        position: "relative",
        alignItems: "center",
        width: "100%",
        ..._v1,
        children: _v0
      })),
      _v14 = _v0 => (0, _v1.jsx)(_v14.Text, {
        variant: "body-lg",
        marginLeft: (0, _v15.rem)(4),
        ..._v0,
        children: _v0.children
      });
    if (_v10) {
      let _v0 = _v0?.tier,
        _v1 = _v11?.[_v0];
      return (0, _v1.jsxs)(_v13.Box, {
        borderTop: "1px solid #1A365D14 !important",
        borderBottom: "1px solid #1A365D14 !important",
        padding: `${(0, _v15.rem)(10)} 0`,
        position: "relative",
        alignItems: "center",
        marginBottom: 20,
        children: [(0, _v1.jsxs)(_v13, {
          children: [(_v4 ?? 0) === 1 ? (0, _v1.jsx)(_v85.PersonUser, {}) : (0, _v1.jsx)(_v84.Users, {}), (0, _v1.jsx)(_v14, {
            children: "enterprise" === _v0 ? (0, _v18.translate)({
              singular: "More users",
              dictionary: {
                es: {
                  singular: "Más usuarios"
                },
                "de-DE": {
                  singular: "Mehr Benutzer"
                },
                "fr-FR": {
                  singular: "Plus d'utilisateurs"
                },
                "ja-JP": {
                  singular: "より多くのユーザー"
                },
                "ko-KR": {
                  singular: "더 많은 사용자 추가"
                },
                "pt-BR": {
                  singular: "Mais usuários"
                },
                "zh-CN": {
                  singular: "更多用户"
                }
              }
            }) : "professional" === _v0 ? (0, _v18.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: 20
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                }
              }
            }) : "studio" === _v0 ? (0, _v18.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: 200
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                }
              }
            }) : "production" === _v0 ? (0, _v18.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: (0, _v18.translate)({
                  singular: "Unlimited",
                  dictionary: {
                    es: {
                      singular: "Ilimitado"
                    },
                    "de-DE": {
                      singular: "Unbegrenzt"
                    },
                    "fr-FR": {
                      singular: "Illimité"
                    },
                    "ja-JP": {
                      singular: "無制限"
                    },
                    "ko-KR": {
                      singular: "무제한"
                    },
                    "pt-BR": {
                      singular: "Ilimitado"
                    },
                    "zh-CN": {
                      singular: "无限"
                    }
                  }
                })
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Nutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT}ユーザー（最大{ADD_USERS}まで）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 사용자({ADD_USERS}까지)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 用户 (最多 {ADD_USERS})"
                }
              }
            }) : (0, _v18.translate)({
              singular: "{AMOUNT} user",
              plural: "{AMOUNT} users",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4
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
            })
          })]
        }), _v1?.seats?.over && (0, _v1.jsxs)(_v13.Box, {
          display: "flex",
          gap: (0, _v15.rem)(8),
          alignItems: "flex-start",
          background: "var(--vimeo-colors-status-caution-secondary, #feebcb)",
          borderRadius: (0, _v15.rem)(8),
          paddingLeft: (0, _v15.rem)(12),
          paddingRight: (0, _v15.rem)(8),
          paddingY: (0, _v15.rem)(8),
          width: "100%",
          marginBottom: (0, _v15.rem)(4),
          children: [(0, _v1.jsx)(_v13.Box, {
            paddingY: (0, _v15.rem)(2),
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v78.CircleExclamationFilled, {
              boxSize: (0, _v15.rem)(20),
              color: "status-caution-primary"
            })
          }), (0, _v1.jsx)(_v14.Text, {
            variant: "body-sm",
            children: (0, _v18.translate)({
              singular: "You currently have {COUNT} seats on your account. They will be removed upon downgrade.",
              replacements: {
                COUNT: _v1.seats.used
              },
              dictionary: {
                es: {
                  singular: "Actualmente tiene {COUNT} licencias en su cuenta. Se eliminarán al degradar el plan."
                },
                "de-DE": {
                  singular: "Sie haben derzeit {COUNT} Plätze in Ihrem Konto. Diese werden bei einer Herabstufung entfernt."
                },
                "fr-FR": {
                  singular: "Vous avez actuellement {COUNT} sièges sur votre compte. Ils seront supprimés lors de la rétrogradation."
                },
                "ja-JP": {
                  singular: "現在、アカウントには{COUNT}シートがあります。ダウングレード時に削除されます。"
                },
                "ko-KR": {
                  singular: "현재 계정에 {COUNT}개의 좌석이 있습니다. 다운그레이드 시 해당 좌석은 제거됩니다."
                },
                "pt-BR": {
                  singular: "Atualmente você tem {COUNT} assentos em sua conta. Eles serão removidos ao rebaixar o plano."
                },
                "zh-CN": {
                  singular: "您的账户当前有 {COUNT} 个席位。降级时它们将被移除。"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v13, {
          children: [(0, _v1.jsx)(_v83.Database, {}), (0, _v1.jsx)(_v14, {
            children: (_v0 => {
              if ("enterprise" === _v0) return (0, _v18.translate)({
                singular: "Unlimited storage",
                dictionary: {
                  es: {
                    singular: "Almacenamiento ilimitado"
                  },
                  "de-DE": {
                    singular: "Unbegrenzter Speicher"
                  },
                  "fr-FR": {
                    singular: "Stockage illimité"
                  },
                  "ja-JP": {
                    singular: "無制限のストレージ"
                  },
                  "ko-KR": {
                    singular: "무제한 저장 용량"
                  },
                  "pt-BR": {
                    singular: "Armazenamento ilimitado"
                  },
                  "zh-CN": {
                    singular: "无限存储"
                  }
                }
              });
              let _v1 = _v2?.params?.restrictedVideoStorageLimit;
              return (0, _v18.translate)({
                singular: "{AMOUNT} managed storage for embeddable and non-Public videos",
                replacements: {
                  AMOUNT: _v1 ?? ""
                },
                dictionary: {
                  es: {
                    singular: "{AMOUNT} de almacenamiento gestionado para vídeos incrustables y no públicos"
                  },
                  "de-DE": {
                    singular: "{AMOUNT} verwalteter Speicher für einbettbare und nicht-öffentliche Videos"
                  },
                  "fr-FR": {
                    singular: "{AMOUNT} de stockage géré pour les vidéos intégrables et non publiques"
                  },
                  "ja-JP": {
                    singular: "{AMOUNT}の埋め込み可能および非公開動画向け管理ストレージ"
                  },
                  "ko-KR": {
                    singular: "{AMOUNT} 임베드 가능 및 비공개 동영상용 관리형 저장공간"
                  },
                  "pt-BR": {
                    singular: "{AMOUNT} de armazenamento gerenciado para vídeos incorporáveis e não públicos"
                  },
                  "zh-CN": {
                    singular: "{AMOUNT} 托管存储，用于可嵌入和非公开视频"
                  }
                }
              });
            })(_v0)
          })]
        }), _v1?.restrictedVideoStorage?.over && (0, _v1.jsxs)(_v13.Box, {
          display: "flex",
          gap: (0, _v15.rem)(8),
          alignItems: "flex-start",
          background: "var(--vimeo-colors-status-caution-secondary, #feebcb)",
          borderRadius: (0, _v15.rem)(8),
          paddingLeft: (0, _v15.rem)(12),
          paddingRight: (0, _v15.rem)(8),
          paddingY: (0, _v15.rem)(8),
          width: "100%",
          marginBottom: (0, _v15.rem)(4),
          children: [(0, _v1.jsx)(_v13.Box, {
            paddingY: (0, _v15.rem)(2),
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v78.CircleExclamationFilled, {
              boxSize: (0, _v15.rem)(20),
              color: "status-caution-primary"
            })
          }), (0, _v1.jsx)(_v14.Text, {
            variant: "body-sm",
            children: (0, _v18.translate)({
              singular: "You are already above the limit for this plan. Your videos are going to be frozen.",
              dictionary: {
                es: {
                  singular: "Ya supera el límite de este plan. Sus videos quedarán congelados."
                },
                "de-DE": {
                  singular: "Sie haben das Limit dieses Plans bereits überschritten. Ihre Videos werden eingefroren."
                },
                "fr-FR": {
                  singular: "Vous dépassez déjà la limite de ce plan. Vos vidéos seront suspendues."
                },
                "ja-JP": {
                  singular: "このプランの上限をすでに超えています。動画が凍結されます。"
                },
                "ko-KR": {
                  singular: "이미 이 요금제의 제한을 초과했습니다. 동영상이 일시 중지될 예정입니다."
                },
                "pt-BR": {
                  singular: "Você já ultrapassou o limite deste plano. Seus vídeos serão congelados."
                },
                "zh-CN": {
                  singular: "您已超出此计划的限制。您的视频将被冻结。"
                }
              }
            })
          })]
        }), ("free" === _v0 || "creator" === _v0) && (0, _v1.jsxs)(_v13, {
          children: [(0, _v1.jsx)(_v83.Database, {}), (0, _v1.jsx)(_v14, {
            children: "enterprise" === _v0 ? (0, _v18.translate)({
              singular: "Custom storage",
              dictionary: {
                es: {
                  singular: "Personalizar almacenamiento"
                },
                "de-DE": {
                  singular: "Benutzerdefinierter Speicher"
                },
                "fr-FR": {
                  singular: "Stockage personnalisé"
                },
                "ja-JP": {
                  singular: "カスタムストレージ"
                },
                "ko-KR": {
                  singular: "커스텀 저장 공간"
                },
                "pt-BR": {
                  singular: "Armazenamento personalizado"
                },
                "zh-CN": {
                  singular: "自定义存储"
                }
              }
            }) : (0, _v18.translate)({
              singular: "{AMOUNT} total storage (including public, non-embedded videos)",
              replacements: {
                AMOUNT: _v5 ?? ""
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} de almacenamiento total (incluye vídeos públicos no incrustados)"
                },
                "de-DE": {
                  singular: "{AMOUNT} Gesamtspeicher (einschließlich öffentlicher, nicht eingebetteter Videos)"
                },
                "fr-FR": {
                  singular: "{AMOUNT} de stockage total (y compris les vidéos publiques, non intégrées)"
                },
                "ja-JP": {
                  singular: "{AMOUNT}の合計ストレージ（公開、埋め込みされていない動画を含む）"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 총 저장 공간(공개 및 비임베드 동영상 포함)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} de armazenamento total (inclui vídeos públicos, não incorporados)"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 总存储 (包括公开、非嵌入视频)"
                }
              }
            })
          })]
        }), "enterprise" !== _v0 && (0, _v1.jsxs)(_v13, {
          children: [(0, _v1.jsx)(_v81.Speedometer, {}), (0, _v1.jsx)(_v14, {
            children: _v7?.quotaPeriod === "year" ? (0, _v18.translate)({
              singular: "{AMOUNT} yearly bandwidth",
              replacements: {
                AMOUNT: _v7.periodicQuota ?? ""
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} de ancho de banda anual"
                },
                "de-DE": {
                  singular: "{AMOUNT} Bandbreite pro Jahr"
                },
                "fr-FR": {
                  singular: "{AMOUNT} de bande passante annuelle"
                },
                "ja-JP": {
                  singular: "{AMOUNT} の年間帯域幅"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 연간 대역폭"
                },
                "pt-BR": {
                  singular: "{AMOUNT} de largura de banda anual"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 年带宽"
                }
              }
            }) : (0, _v18.translate)({
              singular: "{AMOUNT} monthly bandwidth",
              replacements: {
                AMOUNT: _v7?.periodicQuota ?? ""
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} de ancho de banda mensual"
                },
                "de-DE": {
                  singular: "{AMOUNT} monatliche Bandbreite"
                },
                "fr-FR": {
                  singular: "{AMOUNT} de bande passante mensuelle"
                },
                "ja-JP": {
                  singular: "{AMOUNT}の月間帯域幅"
                },
                "ko-KR": {
                  singular: "{AMOUNT} 월간 대역폭"
                },
                "pt-BR": {
                  singular: "{AMOUNT} de largura de banda mensal"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 每月带宽"
                }
              }
            })
          })]
        })]
      });
    }
    return (0, _v1.jsxs)(_v13.Box, {
      borderTop: "1px solid #1A365D14 !important",
      borderBottom: "1px solid #1A365D14 !important",
      padding: `${(0, _v15.rem)(10)} 0`,
      position: "relative",
      alignItems: "center",
      marginBottom: 20,
      children: [_v0?.tier === "customSelfServe" && (0, _v1.jsxs)(_v13, {
        children: [(0, _v1.jsx)(_v80, {}), (0, _v1.jsx)(_v14, {
          children: (0, _v18.translate)({
            singular: "{AMOUNT} bandwidth per year",
            replacements: {
              AMOUNT: _v2.params.bandwidth.periodicQuota ?? 0
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda al año"
              },
              "de-DE": {
                singular: "{AMOUNT} Bandbreite pro Jahr"
              },
              "fr-FR": {
                singular: "{AMOUNT} bande passante par an"
              },
              "ja-JP": {
                singular: "年間帯域幅 {AMOUNT}"
              },
              "ko-KR": {
                singular: "연간 {AMOUNT}대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda por ano"
              },
              "zh-CN": {
                singular: "每年 {AMOUNT} 带宽"
              }
            }
          })
        })]
      }), !_v8 && (_v0?.tier === "free" || _v0?.tier === "enterprise" || _v9 ? (0, _v1.jsxs)(_v13, {
        children: [(_v4 ?? 0) === 1 ? (0, _v1.jsx)(_v85.PersonUser, {}) : (0, _v1.jsx)(_v84.Users, {}), (0, _v1.jsx)(_v14, {
          children: _v12(_v0?.tier)
        })]
      }) : (0, _v1.jsxs)(_v13, {
        children: [(0, _v1.jsx)(_v84.Users, {}), (0, _v1.jsx)(_v14, {
          marginLeft: (0, _v15.rem)(4),
          children: _v12(_v0?.tier)
        })]
      })), (0, _v1.jsxs)(_v13, {
        children: ["video_count" === _v6 ? (0, _v1.jsx)(_v82.VideosStack, {}) : (0, _v1.jsx)(_v83.Database, {}), (0, _v1.jsx)(_v14, {
          children: (_v1 = _v0?.tier, "enterprise" === _v1 ? _v3 ? (0, _v18.translate)({
            singular: "More storage",
            dictionary: {
              es: {
                singular: "Más almacenamiento"
              },
              "de-DE": {
                singular: "Mehr Speicherplatz"
              },
              "fr-FR": {
                singular: "Plus d'espace de stockage"
              },
              "ja-JP": {
                singular: "さらに増えたストレージ"
              },
              "ko-KR": {
                singular: "더 많은 저장 공간"
              },
              "pt-BR": {
                singular: "Mais espaço para armazenamento"
              },
              "zh-CN": {
                singular: "更多存储"
              }
            }
          }) : (0, _v18.translate)({
            singular: "More storage and bandwidth",
            dictionary: {
              es: {
                singular: "Más almacenamiento y ancho de banda"
              },
              "de-DE": {
                singular: "Mehr Speicher und Bandbreite"
              },
              "fr-FR": {
                singular: "Plus de stockage et de bande passante"
              },
              "ja-JP": {
                singular: "より多くのストレージと帯域幅"
              },
              "ko-KR": {
                singular: "저장 공간과 대역폭 확대"
              },
              "pt-BR": {
                singular: "Mais espaço de armazenamento e largura de banda"
              },
              "zh-CN": {
                singular: "更多存储空间和带宽"
              }
            }
          }) : "video_count" === _v6 ? (0, _v18.translate)({
            singular: "{AMOUNT} videos",
            replacements: {
              AMOUNT: _v5
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
          }) : (0, _v18.translate)({
            singular: "{AMOUNT} storage",
            replacements: {
              AMOUNT: _v5
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
          }))
        })]
      }), (_v9 || _v3) && (0, _v1.jsxs)(_v13, {
        children: [(0, _v1.jsx)(_v81.Speedometer, {}), (0, _v1.jsx)(_v14, {
          children: "enterprise" === _v0?.tier ? (0, _v18.translate)({
            singular: "More bandwidth",
            dictionary: {
              es: {
                singular: "Más ancho de banda"
              },
              "de-DE": {
                singular: "Mehr Bandbreite"
              },
              "fr-FR": {
                singular: "Plus de bande passante"
              },
              "ja-JP": {
                singular: "帯域幅がさらにアップ"
              },
              "ko-KR": {
                singular: "더 많은 대역폭"
              },
              "pt-BR": {
                singular: "Mais largura de banda"
              },
              "zh-CN": {
                singular: "更多带宽"
              }
            }
          }) : (0, _v18.translate)({
            singular: "{AMOUNT} bandwidth per year",
            replacements: {
              AMOUNT: _v7.periodicQuota ?? 0
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} de ancho de banda al año"
              },
              "de-DE": {
                singular: "{AMOUNT} Bandbreite pro Jahr"
              },
              "fr-FR": {
                singular: "{AMOUNT} bande passante par an"
              },
              "ja-JP": {
                singular: "年間帯域幅 {AMOUNT}"
              },
              "ko-KR": {
                singular: "연간 {AMOUNT}대역폭"
              },
              "pt-BR": {
                singular: "{AMOUNT} de largura de banda por ano"
              },
              "zh-CN": {
                singular: "每年 {AMOUNT} 带宽"
              }
            }
          })
        })]
      })]
    });
  };
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  _v45.default.div.withConfig({
    displayName: "styles__FeatureSubhead",
    componentId: "sc-dc427937-0"
  })`
  margin-bottom: ${_v0 => _v0?.bottomSpacing || (0, _v44.rem)(12)};
  line-height: ${(0, _v44.rem)(18)};

  p {
    font-weight: 900;
  }
`;
  let _v89 = _v45.default.ul.withConfig({
    displayName: "styles__FeatureList",
    componentId: "sc-dc427937-1"
  })`
  list-style: initial;

  li {
    margin-bottom: ${(0, _v44.rem)(8)};
    position: relative;
    @media (width > ${_v65.breakpoints.TABLET}) {
      margin-bottom: ${(0, _v44.rem)(12)};
    }
  }

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${(0, _v44.rem)(24)};
    @media (width > ${_v65.breakpoints.TABLET}) {
      &:last-child {
        padding-bottom: ${(0, _v44.rem)(48)} !important;
        margin-bottom: 0;
      }
    }
  }

  @media (width > ${_v65.breakpoints.TABLET}) {
    margin-bottom: ${(0, _v44.rem)(19)};
  }
`;
  (0, _v45.default)(_v88.Checkmark).withConfig({
    displayName: "styles__FeatureCheck",
    componentId: "sc-dc427937-2"
  })`
  ${(0, _v66.addWidth)(18, 24)};
  position: absolute;
  left: 0;
`;
  let _v90 = (0, _v45.default)(_v88.Checkmark).withConfig({
    displayName: "styles__StyledCheckmark",
    componentId: "sc-dc427937-3"
  })`
  margin-right: ${(0, _v44.rem)(4)};
  max-width: ${(0, _v44.rem)(16)};
  position: relative;
  width: 100%;
  top: ${(0, _v44.rem)(2)};

  @media (width > ${_v65.breakpoints.TABLET}) {
    margin-right: ${(0, _v44.rem)(8)};
  }
  path {
    fill: var(--vimeo-colors-text-primary);
  }
`;
  var _v91 = _v0.i(0);
  let _v92 = {
      free: [(0, _v18.translate)({
        singular: "Creation and editing",
        dictionary: {
          es: {
            singular: "Creación y edición"
          },
          "de-DE": {
            singular: "Erstellung und Bearbeitung"
          },
          "fr-FR": {
            singular: "Création et édition"
          },
          "ja-JP": {
            singular: "作成と編集"
          },
          "ko-KR": {
            singular: "제작 및 편집"
          },
          "pt-BR": {
            singular: "Criação e edição"
          },
          "zh-CN": {
            singular: "创建与编辑"
          }
        }
      }), (0, _v18.translate)({
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
      }), (0, _v18.translate)({
        singular: "Sharing and embedding",
        dictionary: {
          es: {
            singular: "Compartir e incrustar"
          },
          "de-DE": {
            singular: "Teilen und Einbetten"
          },
          "fr-FR": {
            singular: "Partage et intégration"
          },
          "ja-JP": {
            singular: "共有と埋め込み"
          },
          "ko-KR": {
            singular: "공유 및 임베드"
          },
          "pt-BR": {
            singular: "Compartilhamento e incorporação"
          },
          "zh-CN": {
            singular: "分享与嵌入"
          }
        }
      })],
      starter: [(0, _v18.translate)({
        singular: "Customizable video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizable"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player "
          },
          "fr-FR": {
            singular: "Player vidéo personnalisable"
          },
          "ja-JP": {
            singular: "カスタマイズ可能な動画プレーヤー"
          },
          "ko-KR": {
            singular: "사용자 지정 가능한 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video Player customizável"
          },
          "zh-CN": {
            singular: "可定制的视频播放器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Password privacy & unlisted links",
        dictionary: {
          es: {
            singular: "Privacidad de la contraseña y enlaces sin listar"
          },
          "de-DE": {
            singular: "Passwortschutz und nicht gelistete Links"
          },
          "fr-FR": {
            singular: "Confidentialité des mots de passe et liens non répertoriés"
          },
          "ja-JP": {
            singular: "パスワードのプライバシーと限定公開リンク"
          },
          "ko-KR": {
            singular: "비밀번호 보호 및 일부 공개 링크"
          },
          "pt-BR": {
            singular: "Privacidade de senha e links não listados"
          },
          "zh-CN": {
            singular: "密码隐私与未公开发布的链接"
          }
        }
      }), (0, _v18.translate)({
        singular: "Review & collaboration tools {NEW_BADGE}",
        replacements: {
          NEW_BADGE: (0, _v1.jsx)(() => (0, _v1.jsx)(_v91.Badge, {
            size: "xs",
            variant: "new",
            children: (0, _v18.translate)({
              singular: "New",
              dictionary: {
                es: {
                  singular: "Nuevo"
                },
                "de-DE": {
                  singular: "Neu"
                },
                "fr-FR": {
                  singular: "Nouveau"
                },
                "ja-JP": {
                  singular: "新規作成"
                },
                "ko-KR": {
                  singular: "신규"
                },
                "pt-BR": {
                  singular: "Novo"
                },
                "zh-CN": {
                  singular: "新"
                }
              }
            })
          }), {})
        },
        dictionary: {
          es: {
            singular: "Herramientas de revisión y colaboración {NEW_BADGE}"
          },
          "de-DE": {
            singular: "Tools für Prüfung und Zusammenarbeit {NEW_BADGE}"
          },
          "fr-FR": {
            singular: "Outils de collaboration et de révision {NEW_BADGE}"
          },
          "ja-JP": {
            singular: "レビューと共同作業ツール {NEW_BADGE}"
          },
          "ko-KR": {
            singular: "리뷰 및 협업 도구 {NEW_BADGE}"
          },
          "pt-BR": {
            singular: "Ferramentas de revisão e colaboração {NEW_BADGE}"
          },
          "zh-CN": {
            singular: "审阅与协作工具 {NEW_BADGE}"
          }
        }
      }), (0, _v18.translate)({
        singular: "Transfer video files",
        dictionary: {
          es: {
            singular: "Transfiera archivos de video"
          },
          "de-DE": {
            singular: "Videodateien übertragen"
          },
          "fr-FR": {
            singular: "Transférer des fichiers vidéo"
          },
          "ja-JP": {
            singular: "動画ファイルを転送"
          },
          "ko-KR": {
            singular: "동영상 파일 전송"
          },
          "pt-BR": {
            singular: "Transferir arquivos de vídeo"
          },
          "zh-CN": {
            singular: "传输视频文件"
          }
        }
      }), (0, _v18.translate)({
        singular: "Engagement analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de interacción"
          },
          "de-DE": {
            singular: "Analysen zur Interaktion"
          },
          "fr-FR": {
            singular: "Analyses liées à l'implication"
          },
          "ja-JP": {
            singular: "エンゲージメント分析"
          },
          "ko-KR": {
            singular: "참여도 분석"
          },
          "pt-BR": {
            singular: "Análise de engajamento"
          },
          "zh-CN": {
            singular: "参与分析"
          }
        }
      })],
      standard: [(0, _v18.translate)({
        singular: "Branding in the player",
        dictionary: {
          es: {
            singular: "Presencia de la marca en el reproductor"
          },
          "de-DE": {
            singular: "Branding im Player"
          },
          "fr-FR": {
            singular: "Branding dans le lecteur"
          },
          "ja-JP": {
            singular: "プレーヤー内でのブランディング"
          },
          "ko-KR": {
            singular: "플레이어 내 브랜딩"
          },
          "pt-BR": {
            singular: "Presença da marca no player"
          },
          "zh-CN": {
            singular: "播放器中的品牌标识"
          }
        }
      }), (0, _v18.translate)({
        singular: "Third party player support",
        dictionary: {
          es: {
            singular: "Compatibilidad con reproductores de terceros"
          },
          "de-DE": {
            singular: "Support für externe Video-Player"
          },
          "fr-FR": {
            singular: "Prise en charge des lecteurs tiers"
          },
          "ja-JP": {
            singular: "Vimeo以外のプレーヤーにも対応"
          },
          "ko-KR": {
            singular: "타사 플레이어 지원"
          },
          "pt-BR": {
            singular: "Suporte para players de terceiros"
          },
          "zh-CN": {
            singular: "第三方播放器支持"
          }
        }
      }), (0, _v18.translate)({
        singular: "Custom watermark",
        dictionary: {
          es: {
            singular: "Marca de agua personalizada"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Wasserzeichen"
          },
          "fr-FR": {
            singular: "Filigrane personnalisé"
          },
          "ja-JP": {
            singular: "カスタムウォーターマーク"
          },
          "ko-KR": {
            singular: "커스텀 워터마크"
          },
          "pt-BR": {
            singular: "Marca d´água customizada"
          },
          "zh-CN": {
            singular: "自定义水印"
          }
        }
      }), (0, _v18.translate)({
        singular: "Branded video galleries",
        dictionary: {
          es: {
            singular: "Galerías de vídeo con marca"
          },
          "de-DE": {
            singular: "Gebrandete Videogalerien"
          },
          "fr-FR": {
            singular: "Galeries vidéo brandées"
          },
          "ja-JP": {
            singular: "ブランド化された動画ギャラリー"
          },
          "ko-KR": {
            singular: "브랜디드 비디오 갤러리"
          },
          "pt-BR": {
            singular: "Galerias de vídeo com marca"
          },
          "zh-CN": {
            singular: "品牌视频画廊"
          }
        }
      }), (0, _v18.translate)({
        singular: "Lead capture",
        dictionary: {
          es: {
            singular: "Captura de oportunidades de venta"
          },
          "de-DE": {
            singular: "Lead-Erfassung"
          },
          "fr-FR": {
            singular: "Collecte d'opportunités commerciales"
          },
          "ja-JP": {
            singular: "リードキャプチャー"
          },
          "ko-KR": {
            singular: "리드 수집"
          },
          "pt-BR": {
            singular: "Captura de lead"
          },
          "zh-CN": {
            singular: "线索捕获"
          }
        }
      }), (0, _v18.translate)({
        singular: "Calls to action and custom cards",
        dictionary: {
          es: {
            singular: "Llamadas a la acción y tarjetas personalizadas"
          },
          "de-DE": {
            singular: "Call-to-Action-Elemente und benutzerdefinierte Karten"
          },
          "fr-FR": {
            singular: "Appels à l'action et cartes personnalisées"
          },
          "ja-JP": {
            singular: "行動喚起とカスタムカード"
          },
          "ko-KR": {
            singular: "콜 투 액션 및 커스텀 카드"
          },
          "pt-BR": {
            singular: "Chamadas para ação e cartões personalizados"
          },
          "zh-CN": {
            singular: "号召性用语与自定义卡片"
          }
        }
      })],
      advanced: [(0, _v18.translate)({
        singular: "Hosted livestreamed events",
        dictionary: {
          es: {
            singular: "Eventos en directo alojados"
          },
          "de-DE": {
            singular: "Gehostete Livestream-Events"
          },
          "fr-FR": {
            singular: "Événements diffusés en direct hébergés"
          },
          "ja-JP": {
            singular: "ホストされたライブ配信イベント"
          },
          "ko-KR": {
            singular: "호스팅된 라이브 스트리밍 이벤트"
          },
          "pt-BR": {
            singular: "Eventos ao vivo hospedados"
          },
          "zh-CN": {
            singular: "托管直播活动"
          }
        }
      }), (0, _v18.translate)({
        singular: "Events Q&A, polls, and chat",
        dictionary: {
          es: {
            singular: "Sesión de preguntas y respuestas de eventos, encuestas y chat"
          },
          "de-DE": {
            singular: "Event-Fragerunden, Umfragen und Chat"
          },
          "fr-FR": {
            singular: "Questions-réponses, sondages et discussions des événements"
          },
          "ja-JP": {
            singular: "イベントの質問セッション、アンケート、チャット"
          },
          "ko-KR": {
            singular: "이벤트 Q&A, 투표, 채팅"
          },
          "pt-BR": {
            singular: "Perguntas e respostas, enquetes e chat de eventos"
          },
          "zh-CN": {
            singular: "活动问答、投票和聊天"
          }
        }
      }), (0, _v18.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v18.translate)({
        singular: "DVR streaming",
        dictionary: {
          es: {
            singular: "Transmisión de DVR"
          },
          "de-DE": {
            singular: "Video-Streaming"
          },
          "fr-FR": {
            singular: "Streaming DVR"
          },
          "ja-JP": {
            singular: "DVRストリーミング"
          },
          "ko-KR": {
            singular: "DVR 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão de DVR"
          },
          "zh-CN": {
            singular: "DVR 直播"
          }
        }
      }), (0, _v18.translate)({
        singular: "Scheduled simulive",
        dictionary: {
          es: {
            singular: "Simulive programado"
          },
          "de-DE": {
            singular: "Geplantes Simulive"
          },
          "fr-FR": {
            singular: "Simulive programmé"
          },
          "ja-JP": {
            singular: "スケジュールされた疑似ライブ"
          },
          "ko-KR": {
            singular: "예정된 시뮬라이브"
          },
          "pt-BR": {
            singular: "Simulive programado"
          },
          "zh-CN": {
            singular: "预定模拟直播"
          }
        }
      }), (0, _v18.translate)({
        singular: "Live event-level analytics",
        dictionary: {
          es: {
            singular: "Análisis a nivel de evento en vivo"
          },
          "de-DE": {
            singular: "Live-Analysen auf Ereignisebene"
          },
          "fr-FR": {
            singular: "Statistiques au niveau des événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントレベルの分析"
          },
          "ko-KR": {
            singular: "라이브 이벤트 수준 분석"
          },
          "pt-BR": {
            singular: "Análise de eventos ao vivo"
          },
          "zh-CN": {
            singular: "现场活动级分析"
          }
        }
      }), (0, _v18.translate)({
        singular: "Marketing automation integrations",
        dictionary: {
          es: {
            singular: "Integraciones de automatización de marketing"
          },
          "de-DE": {
            singular: "Marketing-Automatisierungsintegrationen"
          },
          "fr-FR": {
            singular: "Intégrations d'automatisation marketing"
          },
          "ja-JP": {
            singular: "マーケティングオートメーションのインテグレーション"
          },
          "ko-KR": {
            singular: "마케팅 자동화 통합"
          },
          "pt-BR": {
            singular: "Integrações de automação de marketing"
          },
          "zh-CN": {
            singular: "营销自动化集成"
          }
        }
      })],
      customSelfServe: [(0, _v18.translate)({
        singular: "AI-generated chapters and text summaries",
        dictionary: {
          es: {
            singular: "Capítulos y resúmenes de texto generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Kapitel und Textzusammenfassungen"
          },
          "fr-FR": {
            singular: "Chapitres et résumés de texte générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成によるチャプターとテキストの概要"
          },
          "ko-KR": {
            singular: "AI가 생성한 챕터 및 텍스트 요약"
          },
          "pt-BR": {
            singular: "Resumos de capítulos e textos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的章节和文本摘要"
          }
        }
      }), (0, _v18.translate)({
        singular: "Enable creators to ask questions on videos",
        dictionary: {
          es: {
            singular: "Permita que los creadores hagan preguntas sobre los videos"
          },
          "de-DE": {
            singular: "Ermöglichen Sie es Erstellern, Fragen zu Videos zu stellen"
          },
          "fr-FR": {
            singular: "Permettez aux créateurs de poser des questions sur les vidéos"
          },
          "ja-JP": {
            singular: "クリエイターが動画上で質問可能"
          },
          "ko-KR": {
            singular: "크리에이터가 동영상에 대해 질문할 수 있도록 지원"
          },
          "pt-BR": {
            singular: "Permita que os criadores façam perguntas sobre os vídeos"
          },
          "zh-CN": {
            singular: "允许创作者在视频上提问"
          }
        }
      }), (0, _v18.translate)({
        singular: "Host live broadcasts",
        dictionary: {
          es: {
            singular: "Aloje transmisiones en vivo"
          },
          "de-DE": {
            singular: "Veranstalten Sie Live-Übertragungen"
          },
          "fr-FR": {
            singular: "Organisez des diffusions en direct"
          },
          "ja-JP": {
            singular: "ライブ配信をホスト"
          },
          "ko-KR": {
            singular: "라이브 방송 호스팅"
          },
          "pt-BR": {
            singular: "Hospedar transmissões ao vivo"
          },
          "zh-CN": {
            singular: "主持直播"
          }
        }
      }), (0, _v18.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v18.translate)({
        singular: "Live chat, polls, and Q&A",
        dictionary: {
          es: {
            singular: "Chat en vivo, encuestas, y preguntas y respuestas"
          },
          "de-DE": {
            singular: "Live-Chat, Umfragen und Fragerunden"
          },
          "fr-FR": {
            singular: "Discussion en direct, sondages et questions-réponses"
          },
          "ja-JP": {
            singular: "ライブチャット、投票、質問セッション"
          },
          "ko-KR": {
            singular: "실시간 채팅, 투표, Q&A"
          },
          "pt-BR": {
            singular: "Chat ao vivo, enquetes e perguntas e respostas"
          },
          "zh-CN": {
            singular: "在线聊天、投票和问答"
          }
        }
      })],
      enterprise: [(0, _v18.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v18.translate)({
        singular: "Advanced AI capabilities",
        dictionary: {
          es: {
            singular: "Capacidades de IA de Advanced"
          },
          "de-DE": {
            singular: "Erweiterte KI-Fähigkeiten"
          },
          "fr-FR": {
            singular: "Capacités d'IA avancées"
          },
          "ja-JP": {
            singular: "高度なAI機能"
          },
          "ko-KR": {
            singular: "고급 AI 기능"
          },
          "pt-BR": {
            singular: "Recursos avançados de IA"
          },
          "zh-CN": {
            singular: "高级 AI 功能"
          }
        }
      }), (0, _v18.translate)({
        singular: "SSO (SAML) and SCIM (OKTA, AZURE)",
        dictionary: {
          es: {
            singular: "SSO (SAML) y SCIM (OKTA, AZURE)"
          },
          "de-DE": {
            singular: "SSO (SAML) und SCIM (OKTA, AZURE)"
          },
          "fr-FR": {
            singular: "SSO (SAML) et SCIM (OKTA, AZURE)"
          },
          "ja-JP": {
            singular: "SSO（SAML）と SCIM（OKTA、AZURE）"
          },
          "ko-KR": {
            singular: "SSO(SAML) 및 SCIM(OKTA, AZURE)"
          },
          "pt-BR": {
            singular: "SSO (SAML) e SCIM (OKTA, AZURE)"
          },
          "zh-CN": {
            singular: "SSO (SAML) 和 SCIM（OKTA、AZURE）"
          }
        }
      }), (0, _v18.translate)({
        singular: "Advanced analytics and marketing integrations",
        dictionary: {
          es: {
            singular: "Análisis de avanzada e integraciones de marketing"
          },
          "de-DE": {
            singular: "Erweiterte Analytik und Marketing-Integrationen"
          },
          "fr-FR": {
            singular: "Statistiques avancées et intégrations marketing"
          },
          "ja-JP": {
            singular: "高度な分析機能とマーケティングインテグレーション"
          },
          "ko-KR": {
            singular: "고급 분석 및 마케팅 통합"
          },
          "pt-BR": {
            singular: "Análises avançadas e integrações de marketing"
          },
          "zh-CN": {
            singular: "高级分析和营销集成"
          }
        }
      }), (0, _v18.translate)({
        singular: "Events with polling and Live Q&A",
        dictionary: {
          es: {
            singular: "Eventos con encuestas y sesión de preguntas y respuestas en vivo"
          },
          "de-DE": {
            singular: "Events mit Umfragen und Live-Fragerunden"
          },
          "fr-FR": {
            singular: "Événements avec sondages et questions-réponses en direct"
          },
          "ja-JP": {
            singular: "アンケート投票とライブQ&Aが含まれたイベント"
          },
          "ko-KR": {
            singular: "투표 및 실시간 Q&A가 포함된 이벤트"
          },
          "pt-BR": {
            singular: "Eventos com enquetes e perguntas e respostas em tempo real"
          },
          "zh-CN": {
            singular: "带有投票和现场问答的活动"
          }
        }
      }), (0, _v18.translate)({
        singular: "Quality events (backup streams, eCDN)",
        dictionary: {
          es: {
            singular: "Eventos de calidad (transmisiones de respaldo, eCDN)"
          },
          "de-DE": {
            singular: "Hochwertige Events (Backup-Streams, eCDN)"
          },
          "fr-FR": {
            singular: "Événements de qualité (streams de secours, eCDN)"
          },
          "ja-JP": {
            singular: "高品質なイベント（バックアップストリーム、eCDN）"
          },
          "ko-KR": {
            singular: "고품질 이벤트(백업 스트림, eCDN)"
          },
          "pt-BR": {
            singular: "Eventos de qualidade (cópias de segurança da transmissão ao vivo, eCDN)"
          },
          "zh-CN": {
            singular: "高质量活动（备份流、eCDN）"
          }
        }
      }), (0, _v18.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      })]
    },
    _v93 = {
      plus: [(0, _v18.translate)({
        singular: "Privacy controls",
        dictionary: {
          es: {
            singular: "Controles de privacidad"
          },
          "de-DE": {
            singular: "Datenschutzsteuerungen"
          },
          "fr-FR": {
            singular: "Contrôle de la confidentialité"
          },
          "ja-JP": {
            singular: "プライバシーコントロール"
          },
          "ko-KR": {
            singular: "프라이버시 제어"
          },
          "pt-BR": {
            singular: "Controles de Privacidade"
          },
          "zh-CN": {
            singular: "隐私控制"
          }
        }
      }), (0, _v18.translate)({
        singular: "Custom video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizado"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player"
          },
          "fr-FR": {
            singular: "Player vidéo personnalisé"
          },
          "ja-JP": {
            singular: "カスタム動画プレーヤー"
          },
          "ko-KR": {
            singular: "커스텀 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video player customizado"
          },
          "zh-CN": {
            singular: "自定义视频播放器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Custom URLs",
        dictionary: {
          es: {
            singular: "URL personalizadas"
          },
          "de-DE": {
            singular: "Benutzerdefinierte URLs"
          },
          "fr-FR": {
            singular: "URL personnalisées"
          },
          "ja-JP": {
            singular: "カスタムURL"
          },
          "ko-KR": {
            singular: "커스텀 URL"
          },
          "pt-BR": {
            singular: "URLs personalizados"
          },
          "zh-CN": {
            singular: "自定义 URL"
          }
        }
      }), (0, _v18.translate)({
        singular: "Subtitle translations (with AI Credits) {NEW_BADGE}",
        replacements: {
          NEW_BADGE: () => (0, _v1.jsx)(_v91.Badge, {
            size: "sm",
            variant: "new",
            children: (0, _v18.translate)({
              singular: "New",
              dictionary: {
                es: {
                  singular: "Nuevo"
                },
                "de-DE": {
                  singular: "Neu"
                },
                "fr-FR": {
                  singular: "Nouveau"
                },
                "ja-JP": {
                  singular: "新規作成"
                },
                "ko-KR": {
                  singular: "신규"
                },
                "pt-BR": {
                  singular: "Novo"
                },
                "zh-CN": {
                  singular: "新"
                }
              }
            })
          })
        },
        dictionary: {
          es: {
            singular: "Traducciones de subtítulos (con Créditos de IA) {NEW_BADGE}"
          },
          "de-DE": {
            singular: "Untertitelübersetzungen (mit KI-Credits) {NEW_BADGE}"
          },
          "fr-FR": {
            singular: "Traductions des sous-titres (avec crédits d'IA) {NEW_BADGE}"
          },
          "ja-JP": {
            singular: "字幕翻訳（AIクレジット使用）{NEW_BADGE}"
          },
          "ko-KR": {
            singular: "자막 번역(AI 크레딧 포함) {NEW_BADGE}"
          },
          "pt-BR": {
            singular: "Traduções de legendas (com créditos de IA) {NEW_BADGE}"
          },
          "zh-CN": {
            singular: "字幕翻译（使用 AI 点数）{NEW_BADGE}"
          }
        }
      })],
      pro: [(0, _v18.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Text-based video editing",
        dictionary: {
          es: {
            singular: "Edición de video basada en texto"
          },
          "de-DE": {
            singular: "Textbasierte Videobearbeitung"
          },
          "fr-FR": {
            singular: "Montage vidéo basé sur le texte"
          },
          "ja-JP": {
            singular: "テキストベースの動画編集"
          },
          "ko-KR": {
            singular: "텍스트 기반 동영상 편집"
          },
          "pt-BR": {
            singular: "Edição de vídeo baseada em texto"
          },
          "zh-CN": {
            singular: "基于文本的视频编辑"
          }
        }
      })],
      proUnlimited: [(0, _v18.translate)({
        singular: "AI script generator",
        dictionary: {
          es: {
            singular: "Generador de guiones de IA"
          },
          "de-DE": {
            singular: "KI-Skript-Generator"
          },
          "fr-FR": {
            singular: "Générateur de scripts optimisé par l'IA"
          },
          "ja-JP": {
            singular: "AIスクリプトジェネレーター"
          },
          "ko-KR": {
            singular: "AI 스크립트 작성기"
          },
          "pt-BR": {
            singular: "Gerador de roteiros de IA"
          },
          "zh-CN": {
            singular: "AI 脚本生成器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Teleprompter",
        dictionary: {
          "fr-FR": {
            singular: "Téléprompteur"
          },
          "ja-JP": {
            singular: "テレプロンプター"
          },
          "ko-KR": {
            singular: "텔레프롬프터"
          },
          "zh-CN": {
            singular: "提词器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Text-based video editing",
        dictionary: {
          es: {
            singular: "Edición de video basada en texto"
          },
          "de-DE": {
            singular: "Textbasierte Videobearbeitung"
          },
          "fr-FR": {
            singular: "Montage vidéo basé sur le texte"
          },
          "ja-JP": {
            singular: "テキストベースの動画編集"
          },
          "ko-KR": {
            singular: "텍스트 기반 동영상 편집"
          },
          "pt-BR": {
            singular: "Edição de vídeo baseada em texto"
          },
          "zh-CN": {
            singular: "基于文本的视频编辑"
          }
        }
      })],
      business: [(0, _v18.translate)({
        singular: "Brand kit",
        dictionary: {
          es: {
            singular: "Kit de marca"
          },
          "de-DE": {
            singular: "Brand Kit"
          },
          "fr-FR": {
            singular: "Kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキット"
          },
          "ko-KR": {
            singular: "브랜드 키트"
          },
          "pt-BR": {
            singular: "Kit de marca"
          },
          "zh-CN": {
            singular: "品牌工具包"
          }
        }
      }), (0, _v18.translate)({
        singular: "Showcase SEO",
        dictionary: {
          es: {
            singular: "SEO de presentación"
          },
          "de-DE": {
            singular: "SEO für Präsentationen"
          },
          "fr-FR": {
            singular: "Optimisation pour les moteurs de recherche des présentations"
          },
          "ja-JP": {
            singular: "ショーケースSEO"
          },
          "ko-KR": {
            singular: "쇼케이스 SEO"
          },
          "pt-BR": {
            singular: "SEO da Vitrine"
          },
          "zh-CN": {
            singular: "橱窗搜索引擎优化"
          }
        }
      }), (0, _v18.translate)({
        singular: "Lead generation",
        dictionary: {
          es: {
            singular: "Generación de oportunidades"
          },
          "de-DE": {
            singular: "Lead-Generierung"
          },
          "fr-FR": {
            singular: "Opportunités commerciales"
          },
          "ja-JP": {
            singular: "リード生成"
          },
          "ko-KR": {
            singular: "리드 생성"
          },
          "pt-BR": {
            singular: "Geração de leads"
          },
          "zh-CN": {
            singular: "潜在客户开发"
          }
        }
      }), (0, _v18.translate)({
        singular: "Player Call-to-action",
        dictionary: {
          es: {
            singular: "Llamada a la acción del reproductor"
          },
          "de-DE": {
            singular: "Player-Call-to-Action"
          },
          "fr-FR": {
            singular: "Appel à l'action du lecteur"
          },
          "ja-JP": {
            singular: "プレーヤーのコールトゥアクション"
          },
          "ko-KR": {
            singular: "플레이어 콜투액션"
          },
          "pt-BR": {
            singular: "Chamada para ação no player"
          },
          "zh-CN": {
            singular: "播放器号召性用语"
          }
        }
      }), (0, _v18.translate)({
        singular: "End cards",
        dictionary: {
          es: {
            singular: "Pantallas finales"
          },
          "de-DE": {
            singular: "Endkarten"
          },
          "fr-FR": {
            singular: "Écrans de fin"
          },
          "ja-JP": {
            singular: "エンドカード"
          },
          "ko-KR": {
            singular: "엔드 카드"
          },
          "pt-BR": {
            singular: "Cartões finais"
          },
          "zh-CN": {
            singular: "结束画面"
          }
        }
      }), (0, _v18.translate)({
        singular: "Custom branding",
        dictionary: {
          es: {
            singular: "Desarrollo de marca personalizado"
          },
          "de-DE": {
            singular: "Individuelles Branding"
          },
          "fr-FR": {
            singular: "Image de marque personnalisée"
          },
          "ja-JP": {
            singular: "カスタムブランディング"
          },
          "ko-KR": {
            singular: "커스텀 브랜딩"
          },
          "pt-BR": {
            singular: "Marca personalizada"
          },
          "zh-CN": {
            singular: "自定义品牌设计"
          }
        }
      })],
      livePremium: [(0, _v18.translate)({
        singular: "AI-generated chapters and text summaries",
        dictionary: {
          es: {
            singular: "Capítulos y resúmenes de texto generados por IA"
          },
          "de-DE": {
            singular: "KI-generierte Kapitel und Textzusammenfassungen"
          },
          "fr-FR": {
            singular: "Chapitres et résumés de texte générés par l'IA"
          },
          "ja-JP": {
            singular: "AI生成によるチャプターとテキストの概要"
          },
          "ko-KR": {
            singular: "AI가 생성한 챕터 및 텍스트 요약"
          },
          "pt-BR": {
            singular: "Resumos de capítulos e textos gerados por IA"
          },
          "zh-CN": {
            singular: "AI 生成的章节和文本摘要"
          }
        }
      }), (0, _v18.translate)({
        singular: "Enable creators to ask questions on videos",
        dictionary: {
          es: {
            singular: "Permita que los creadores hagan preguntas sobre los videos"
          },
          "de-DE": {
            singular: "Ermöglichen Sie es Erstellern, Fragen zu Videos zu stellen"
          },
          "fr-FR": {
            singular: "Permettez aux créateurs de poser des questions sur les vidéos"
          },
          "ja-JP": {
            singular: "クリエイターが動画上で質問可能"
          },
          "ko-KR": {
            singular: "크리에이터가 동영상에 대해 질문할 수 있도록 지원"
          },
          "pt-BR": {
            singular: "Permita que os criadores façam perguntas sobre os vídeos"
          },
          "zh-CN": {
            singular: "允许创作者在视频上提问"
          }
        }
      }), (0, _v18.translate)({
        singular: "Host live broadcasts and webinars",
        dictionary: {
          es: {
            singular: "Organice transmisiones en vivo y seminarios web"
          },
          "de-DE": {
            singular: "Veranstalten Sie Live-Übertragungen und Webinare"
          },
          "fr-FR": {
            singular: "Organisez des diffusions en direct et des webinaires"
          },
          "ja-JP": {
            singular: "ライブ配信とウェビナーをホスティング"
          },
          "ko-KR": {
            singular: "라이브 방송 및 웨비나 호스팅"
          },
          "pt-BR": {
            singular: "Hospede webinars e transmissões ao vivo"
          },
          "zh-CN": {
            singular: "主持直播和网络研讨会"
          }
        }
      }), (0, _v18.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v18.translate)({
        singular: "Branded invite and reminder emails",
        dictionary: {
          es: {
            singular: "Correos electrónicos de invitación y recordatorios con presencia de la marca"
          },
          "de-DE": {
            singular: "Markenspezifische Einladungs- und Erinnerungs-E-Mails"
          },
          "fr-FR": {
            singular: "Invitations et e-mails de rappel à l'image de votre marque"
          },
          "ja-JP": {
            singular: "ブランド化された招待状とリマインダーメール"
          },
          "ko-KR": {
            singular: "브랜딩 가능한 초대 및 알림 이메일"
          },
          "pt-BR": {
            singular: "Convites e e-mails de lembrete com sua marca"
          },
          "zh-CN": {
            singular: "品牌邀请和提醒电子邮件"
          }
        }
      }), (0, _v18.translate)({
        singular: "Live chat, polls, and Q&A",
        dictionary: {
          es: {
            singular: "Chat en vivo, encuestas, y preguntas y respuestas"
          },
          "de-DE": {
            singular: "Live-Chat, Umfragen und Fragerunden"
          },
          "fr-FR": {
            singular: "Discussion en direct, sondages et questions-réponses"
          },
          "ja-JP": {
            singular: "ライブチャット、投票、質問セッション"
          },
          "ko-KR": {
            singular: "실시간 채팅, 투표, Q&A"
          },
          "pt-BR": {
            singular: "Chat ao vivo, enquetes e perguntas e respostas"
          },
          "zh-CN": {
            singular: "在线聊天、投票和问答"
          }
        }
      })],
      enterprise: [(0, _v18.translate)({
        singular: "More storage and bandwidth",
        dictionary: {
          es: {
            singular: "Más almacenamiento y ancho de banda"
          },
          "de-DE": {
            singular: "Mehr Speicher und Bandbreite"
          },
          "fr-FR": {
            singular: "Plus de stockage et de bande passante"
          },
          "ja-JP": {
            singular: "より多くのストレージと帯域幅"
          },
          "ko-KR": {
            singular: "저장 공간과 대역폭 확대"
          },
          "pt-BR": {
            singular: "Mais espaço de armazenamento e largura de banda"
          },
          "zh-CN": {
            singular: "更多存储空间和带宽"
          }
        }
      }), (0, _v18.translate)({
        singular: "More users",
        dictionary: {
          es: {
            singular: "Más usuarios"
          },
          "de-DE": {
            singular: "Mehr Benutzer"
          },
          "fr-FR": {
            singular: "Plus d'utilisateurs"
          },
          "ja-JP": {
            singular: "より多くのユーザー"
          },
          "ko-KR": {
            singular: "더 많은 사용자 추가"
          },
          "pt-BR": {
            singular: "Mais usuários"
          },
          "zh-CN": {
            singular: "更多用户"
          }
        }
      }), (0, _v18.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v18.translate)({
        singular: "Advanced AI capabilities",
        dictionary: {
          es: {
            singular: "Capacidades de IA de Advanced"
          },
          "de-DE": {
            singular: "Erweiterte KI-Fähigkeiten"
          },
          "fr-FR": {
            singular: "Capacités d'IA avancées"
          },
          "ja-JP": {
            singular: "高度なAI機能"
          },
          "ko-KR": {
            singular: "고급 AI 기능"
          },
          "pt-BR": {
            singular: "Recursos avançados de IA"
          },
          "zh-CN": {
            singular: "高级 AI 功能"
          }
        }
      }), (0, _v18.translate)({
        singular: "SSO (SAML) and SCIM (OKTA, AZURE)",
        dictionary: {
          es: {
            singular: "SSO (SAML) y SCIM (OKTA, AZURE)"
          },
          "de-DE": {
            singular: "SSO (SAML) und SCIM (OKTA, AZURE)"
          },
          "fr-FR": {
            singular: "SSO (SAML) et SCIM (OKTA, AZURE)"
          },
          "ja-JP": {
            singular: "SSO（SAML）と SCIM（OKTA、AZURE）"
          },
          "ko-KR": {
            singular: "SSO(SAML) 및 SCIM(OKTA, AZURE)"
          },
          "pt-BR": {
            singular: "SSO (SAML) e SCIM (OKTA, AZURE)"
          },
          "zh-CN": {
            singular: "SSO (SAML) 和 SCIM（OKTA、AZURE）"
          }
        }
      }), (0, _v18.translate)({
        singular: "Advanced analytics and marketing integrations",
        dictionary: {
          es: {
            singular: "Análisis de avanzada e integraciones de marketing"
          },
          "de-DE": {
            singular: "Erweiterte Analytik und Marketing-Integrationen"
          },
          "fr-FR": {
            singular: "Statistiques avancées et intégrations marketing"
          },
          "ja-JP": {
            singular: "高度な分析機能とマーケティングインテグレーション"
          },
          "ko-KR": {
            singular: "고급 분석 및 마케팅 통합"
          },
          "pt-BR": {
            singular: "Análises avançadas e integrações de marketing"
          },
          "zh-CN": {
            singular: "高级分析和营销集成"
          }
        }
      }), (0, _v18.translate)({
        singular: "Events with polling and Live Q&A",
        dictionary: {
          es: {
            singular: "Eventos con encuestas y sesión de preguntas y respuestas en vivo"
          },
          "de-DE": {
            singular: "Events mit Umfragen und Live-Fragerunden"
          },
          "fr-FR": {
            singular: "Événements avec sondages et questions-réponses en direct"
          },
          "ja-JP": {
            singular: "アンケート投票とライブQ&Aが含まれたイベント"
          },
          "ko-KR": {
            singular: "투표 및 실시간 Q&A가 포함된 이벤트"
          },
          "pt-BR": {
            singular: "Eventos com enquetes e perguntas e respostas em tempo real"
          },
          "zh-CN": {
            singular: "带有投票和现场问答的活动"
          }
        }
      }), (0, _v18.translate)({
        singular: "Quality events (backup streams, eCDN)",
        dictionary: {
          es: {
            singular: "Eventos de calidad (transmisiones de respaldo, eCDN)"
          },
          "de-DE": {
            singular: "Hochwertige Events (Backup-Streams, eCDN)"
          },
          "fr-FR": {
            singular: "Événements de qualité (streams de secours, eCDN)"
          },
          "ja-JP": {
            singular: "高品質なイベント（バックアップストリーム、eCDN）"
          },
          "ko-KR": {
            singular: "고품질 이벤트(백업 스트림, eCDN)"
          },
          "pt-BR": {
            singular: "Eventos de qualidade (cópias de segurança da transmissão ao vivo, eCDN)"
          },
          "zh-CN": {
            singular: "高质量活动（备份流、eCDN）"
          }
        }
      }), (0, _v18.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      })]
    },
    _v94 = {
      free: [(0, _v18.translate)({
        singular: "Ad-free video player",
        dictionary: {
          es: {
            singular: "Videos sin anuncios"
          },
          "de-DE": {
            singular: "Werbefreier Video-Player"
          },
          "fr-FR": {
            singular: "Player vidéo sans publicités"
          },
          "ja-JP": {
            singular: "広告なしの動画プレーヤー"
          },
          "ko-KR": {
            singular: "광고 없는 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Player de vídeo sem anúncios"
          },
          "zh-CN": {
            singular: "无广告视频播放器"
          }
        }
      }), (0, _v18.translate)({
        singular: "4K and HDR",
        dictionary: {
          es: {
            singular: "4K y HDR"
          },
          "de-DE": {
            singular: "4K und HDR"
          },
          "fr-FR": {
            singular: "4K et HDR"
          },
          "ja-JP": {
            singular: "4KとHDR"
          },
          "ko-KR": {
            singular: "4K 및 HDR"
          },
          "pt-BR": {
            singular: "4K e HDR"
          },
          "zh-CN": {
            singular: "4k 和 HDR"
          }
        }
      }), (0, _v18.translate)({
        singular: "Embed anywhere",
        dictionary: {
          es: {
            singular: "Inserta el reproductor\nen cualquier página"
          },
          "de-DE": {
            singular: "Überall einbetten"
          },
          "fr-FR": {
            singular: "Intégration de vos vidéos où vous le souhaitez"
          },
          "ja-JP": {
            singular: "どこにでも埋め込み可能"
          },
          "ko-KR": {
            singular: "자유로운 임베드"
          },
          "pt-BR": {
            singular: "Incorpore em qualquer lugar"
          },
          "zh-CN": {
            singular: "嵌入任何地方"
          }
        }
      }), (0, _v18.translate)({
        singular: "Unlisted links",
        dictionary: {
          es: {
            singular: "Enlaces sin listar"
          },
          "de-DE": {
            singular: "Nicht gelistete Links"
          },
          "fr-FR": {
            singular: "Liens non listés"
          },
          "ja-JP": {
            singular: "限定公開リンク"
          },
          "ko-KR": {
            singular: "일부 공개 링크"
          },
          "pt-BR": {
            singular: "Links não listados"
          }
        }
      })],
      proSolution: [(0, _v18.translate)({
        singular: "Customizable video player",
        dictionary: {
          es: {
            singular: "Reproductor de video personalizable"
          },
          "de-DE": {
            singular: "Individuell anpassbarer Video-Player "
          },
          "fr-FR": {
            singular: "Player vidéo personnalisable"
          },
          "ja-JP": {
            singular: "カスタマイズ可能な動画プレーヤー"
          },
          "ko-KR": {
            singular: "사용자 지정 가능한 동영상 플레이어"
          },
          "pt-BR": {
            singular: "Video Player customizável"
          },
          "zh-CN": {
            singular: "可定制的视频播放器"
          }
        }
      }), (0, _v18.translate)({
        singular: "Password protection",
        dictionary: {
          es: {
            singular: "Protección por contraseña"
          },
          "de-DE": {
            singular: "Kennwortschutz"
          },
          "fr-FR": {
            singular: "Protection par mot de passe"
          },
          "ja-JP": {
            singular: "動画のパスワード保護"
          },
          "ko-KR": {
            singular: "비밀번호로 동영상 보호"
          },
          "pt-BR": {
            singular: "Proteção com senha"
          },
          "zh-CN": {
            singular: "密码保护"
          }
        }
      }), (0, _v18.translate)({
        singular: "Review tools",
        dictionary: {
          es: {
            singular: "Herramientas de revisión"
          },
          "de-DE": {
            singular: "Review-Tools"
          },
          "fr-FR": {
            singular: "Outils d'avis"
          },
          "ja-JP": {
            singular: "レビューツール"
          },
          "ko-KR": {
            singular: "리뷰 도구"
          },
          "pt-BR": {
            singular: "Ferramentas de revisão"
          },
          "zh-CN": {
            singular: "评论工具"
          }
        }
      }), (0, _v18.translate)({
        singular: "Chapters",
        dictionary: {
          es: {
            singular: "Capítulos"
          },
          "de-DE": {
            singular: "Kapitel"
          },
          "fr-FR": {
            singular: "Chapitres"
          },
          "ja-JP": {
            singular: "チャプター"
          },
          "ko-KR": {
            singular: "챕터"
          },
          "pt-BR": {
            singular: "Capítulos"
          },
          "zh-CN": {
            singular: "章节"
          }
        }
      }), (0, _v18.translate)({
        singular: "Engagement analytics",
        dictionary: {
          es: {
            singular: "Estadísticas de interacción"
          },
          "de-DE": {
            singular: "Analysen zur Interaktion"
          },
          "fr-FR": {
            singular: "Analyses liées à l'implication"
          },
          "ja-JP": {
            singular: "エンゲージメント分析"
          },
          "ko-KR": {
            singular: "참여도 분석"
          },
          "pt-BR": {
            singular: "Análise de engajamento"
          },
          "zh-CN": {
            singular: "参与分析"
          }
        }
      })],
      team: [(0, _v18.translate)({
        singular: "Custom logo in the player",
        dictionary: {
          es: {
            singular: "Logotipo personalizado en el reproductor"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Logo im Player"
          },
          "fr-FR": {
            singular: "Logo personnalisé dans le lecteur"
          },
          "ja-JP": {
            singular: "プレーヤーのカスタムロゴ"
          },
          "ko-KR": {
            singular: "플레이어 내 커스텀 로고"
          },
          "pt-BR": {
            singular: "Logotipo personalizado no player"
          },
          "zh-CN": {
            singular: "播放器中的自定义徽标"
          }
        }
      }), (0, _v18.translate)({
        singular: "Customizable showcases",
        dictionary: {
          es: {
            singular: "Presentaciones personalizables"
          },
          "de-DE": {
            singular: "Individuell anpassbare Showcases"
          },
          "fr-FR": {
            singular: "Présentations personnalisables"
          },
          "ja-JP": {
            singular: "カスタマイズ可能なショーケース"
          },
          "ko-KR": {
            singular: "커스텀 가능한 쇼케이스"
          },
          "pt-BR": {
            singular: "Vitrines personalizáveis"
          },
          "zh-CN": {
            singular: "可定制的展示"
          }
        }
      }), (0, _v18.translate)({
        singular: "Custom forms",
        dictionary: {
          es: {
            singular: "Formularios personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Formulare"
          },
          "fr-FR": {
            singular: "Formulaires personnalisés"
          },
          "ja-JP": {
            singular: "カスタムフォーム"
          },
          "ko-KR": {
            singular: "커스텀 양식"
          },
          "pt-BR": {
            singular: "Formulários personalizados"
          },
          "zh-CN": {
            singular: "自定义表单"
          }
        }
      }), (0, _v18.translate)({
        singular: "Transfer video files up to 300GB",
        dictionary: {
          es: {
            singular: "Transfiera archivos de video de hasta 300 GB"
          },
          "de-DE": {
            singular: "Übertragen Sie Videodateien bis zu 300 GB"
          },
          "fr-FR": {
            singular: "Transfert de fichiers vidéo jusqu'à 300 Go"
          },
          "ja-JP": {
            singular: "最大300GBの動画ファイルを転送"
          },
          "ko-KR": {
            singular: "최대 300GB의 동영상 파일 전송"
          },
          "pt-BR": {
            singular: "Transfira arquivos de vídeo de até 300 GB"
          },
          "zh-CN": {
            singular: "传输最大可达 300GB 的视频文件"
          }
        }
      }), (0, _v18.translate)({
        singular: "Marketing automation integrations",
        dictionary: {
          es: {
            singular: "Integraciones de automatización de marketing"
          },
          "de-DE": {
            singular: "Marketing-Automatisierungsintegrationen"
          },
          "fr-FR": {
            singular: "Intégrations d'automatisation marketing"
          },
          "ja-JP": {
            singular: "マーケティングオートメーションのインテグレーション"
          },
          "ko-KR": {
            singular: "마케팅 자동화 통합"
          },
          "pt-BR": {
            singular: "Integrações de automação de marketing"
          },
          "zh-CN": {
            singular: "营销自动化集成"
          }
        }
      }), (0, _v18.translate)({
        singular: "Viewer-level analytics",
        dictionary: {
          es: {
            singular: "Análisis a nivel del espectador"
          },
          "de-DE": {
            singular: "Analysen auf Zuschauerebene"
          },
          "fr-FR": {
            singular: "Analyse au niveau des spectateurs"
          },
          "ja-JP": {
            singular: "視聴者レベルの分析"
          },
          "ko-KR": {
            singular: "시청자 수준 애널리틱스"
          },
          "pt-BR": {
            singular: "Análise do público"
          }
        }
      })],
      teamLive: [(0, _v18.translate)({
        singular: "Host livestreamed events",
        dictionary: {
          es: {
            singular: "Organice eventos transmitidos en vivo"
          },
          "de-DE": {
            singular: "Veranstalten Sie Livestream-Events"
          },
          "fr-FR": {
            singular: "Héberger des événements en direct"
          },
          "ja-JP": {
            singular: "ライブ配信イベントを主催"
          },
          "ko-KR": {
            singular: "라이브 스트리밍 이벤트 주최"
          },
          "pt-BR": {
            singular: "Hospedar eventos transmitidos ao vivo"
          },
          "zh-CN": {
            singular: "举办直播活动"
          }
        }
      }), (0, _v18.translate)({
        singular: "Event Q&A, polls, and chat",
        dictionary: {
          es: {
            singular: "Sesión de preguntas y respuestas del evento, encuestas y chat"
          },
          "de-DE": {
            singular: "Event-Fragerunden, Umfragen und Chat"
          },
          "fr-FR": {
            singular: "Questions-réponses, sondages et discussions de l'événement"
          },
          "ja-JP": {
            singular: "イベントの質問セッション、アンケート、チャット"
          },
          "ko-KR": {
            singular: "이벤트 Q&A, 투표, 채팅"
          },
          "pt-BR": {
            singular: "Perguntas e respostas, enquetes e chat do evento"
          },
          "zh-CN": {
            singular: "活动问答、投票和聊天"
          }
        }
      }), (0, _v18.translate)({
        singular: "Stream to multiple destinations",
        dictionary: {
          es: {
            singular: "Transmisión a varios destinos"
          },
          "de-DE": {
            singular: "Stream an mehrere Ziele schicken"
          },
          "fr-FR": {
            singular: "Diffusez des vidéos en streaming vers de multiples destinations"
          },
          "ja-JP": {
            singular: "複数の配信先にストリーム"
          },
          "ko-KR": {
            singular: "여러 목적지로 라이브 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão ao vivo para vários destinos"
          },
          "zh-CN": {
            singular: "串流至多个目的地"
          }
        }
      }), (0, _v18.translate)({
        singular: "DVR streaming",
        dictionary: {
          es: {
            singular: "Transmisión de DVR"
          },
          "de-DE": {
            singular: "Video-Streaming"
          },
          "fr-FR": {
            singular: "Streaming DVR"
          },
          "ja-JP": {
            singular: "DVRストリーミング"
          },
          "ko-KR": {
            singular: "DVR 스트리밍"
          },
          "pt-BR": {
            singular: "Transmissão de DVR"
          },
          "zh-CN": {
            singular: "DVR 直播"
          }
        }
      }), (0, _v18.translate)({
        singular: "Concurrent streams",
        dictionary: {
          es: {
            singular: "Transmisiones concurrentes"
          },
          "de-DE": {
            singular: "Gleichzeitige Streams"
          },
          "fr-FR": {
            singular: "Streams simultanés"
          },
          "ja-JP": {
            singular: "同時配信"
          },
          "ko-KR": {
            singular: "동시 스트림"
          },
          "pt-BR": {
            singular: "Transmissões simultâneas"
          },
          "zh-CN": {
            singular: "并发视频流"
          }
        }
      }), (0, _v18.translate)({
        singular: "Scheduled simulive",
        dictionary: {
          es: {
            singular: "Simulive programado"
          },
          "de-DE": {
            singular: "Geplantes Simulive"
          },
          "fr-FR": {
            singular: "Simulive programmé"
          },
          "ja-JP": {
            singular: "スケジュールされた疑似ライブ"
          },
          "ko-KR": {
            singular: "예정된 시뮬라이브"
          },
          "pt-BR": {
            singular: "Simulive programado"
          },
          "zh-CN": {
            singular: "预定模拟直播"
          }
        }
      }), (0, _v18.translate)({
        singular: "Live event-level analytics",
        dictionary: {
          es: {
            singular: "Análisis a nivel de evento en vivo"
          },
          "de-DE": {
            singular: "Live-Analysen auf Ereignisebene"
          },
          "fr-FR": {
            singular: "Statistiques au niveau des événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントレベルの分析"
          },
          "ko-KR": {
            singular: "라이브 이벤트 수준 분석"
          },
          "pt-BR": {
            singular: "Análise de eventos ao vivo"
          },
          "zh-CN": {
            singular: "现场活动级分析"
          }
        }
      })],
      enterprise: [(0, _v18.translate)({
        singular: "Custom permissions",
        dictionary: {
          es: {
            singular: "Permisos personalizados"
          },
          "de-DE": {
            singular: "Benutzerdefinierte Berechtigungen"
          },
          "fr-FR": {
            singular: "Autorisations personnalisées"
          },
          "ja-JP": {
            singular: "カスタム権限"
          },
          "ko-KR": {
            singular: "커스텀 권한"
          },
          "pt-BR": {
            singular: "Permissões customizadas"
          },
          "zh-CN": {
            singular: "自定义权限"
          }
        }
      }), (0, _v18.translate)({
        singular: "SSO (SAML)",
        dictionary: {
          "ja-JP": {
            singular: "SSO（SAML）"
          },
          "ko-KR": {
            singular: "SSO(SAML)"
          }
        }
      }), (0, _v18.translate)({
        singular: "SCIM (OKTA, Azure)",
        dictionary: {
          "ja-JP": {
            singular: "SCIM（OKTA、Azure）"
          },
          "ko-KR": {
            singular: "SCIM(OKTA, Azure)"
          }
        }
      }), (0, _v18.translate)({
        singular: "AI translation",
        dictionary: {
          es: {
            singular: "Traducción con IA"
          },
          "de-DE": {
            singular: "KI-Übersetzung"
          },
          "fr-FR": {
            singular: "Traduction générée par l'IA"
          },
          "ja-JP": {
            singular: "AI翻訳"
          },
          "ko-KR": {
            singular: "AI 번역"
          },
          "pt-BR": {
            singular: "Tradução de IA"
          },
          "zh-CN": {
            singular: "人工智能翻译"
          }
        }
      }), (0, _v18.translate)({
        singular: "Interactive video",
        dictionary: {
          es: {
            singular: "Video interactivo"
          },
          "de-DE": {
            singular: "Interaktives Video"
          },
          "fr-FR": {
            singular: "Vidéo interactive"
          },
          "ja-JP": {
            singular: "インタラクティブ動画"
          },
          "ko-KR": {
            singular: "인터랙티브 동영상"
          },
          "pt-BR": {
            singular: "Vídeo interativo"
          },
          "zh-CN": {
            singular: "交互式视频"
          }
        }
      }), (0, _v18.translate)({
        singular: "Webinars",
        dictionary: {
          es: {
            singular: "Seminarios web"
          },
          "de-DE": {
            singular: "Webinare"
          },
          "fr-FR": {
            singular: "Webinaires"
          },
          "ja-JP": {
            singular: "ウェビナー"
          },
          "ko-KR": {
            singular: "웨비나"
          },
          "zh-CN": {
            singular: "网络研讨会"
          }
        }
      }), (0, _v18.translate)({
        singular: "Advanced integrations",
        dictionary: {
          es: {
            singular: "Integraciones avanzadas"
          },
          "de-DE": {
            singular: "Erweiterte Integrationen"
          },
          "fr-FR": {
            singular: "Intégrations avancées"
          },
          "ja-JP": {
            singular: "高度な統合"
          },
          "ko-KR": {
            singular: "고급 통합"
          },
          "pt-BR": {
            singular: "Integrações avançadas"
          },
          "zh-CN": {
            singular: "Advanced 集成"
          }
        }
      }), (0, _v18.translate)({
        singular: "Advanced analytics",
        dictionary: {
          es: {
            singular: "Análisis avanzados"
          },
          "de-DE": {
            singular: "Erweiterte Analysen"
          },
          "fr-FR": {
            singular: "Analyses détaillées"
          },
          "ja-JP": {
            singular: "高度な分析"
          },
          "ko-KR": {
            singular: "고급 애널리틱스"
          },
          "pt-BR": {
            singular: "Análises avançadas"
          }
        }
      }), (0, _v18.translate)({
        singular: "Dedicated support",
        dictionary: {
          es: {
            singular: "Asistencia exclusiva"
          },
          "de-DE": {
            singular: "Dedizierter Support"
          },
          "fr-FR": {
            singular: "Assistance dédiée"
          },
          "ja-JP": {
            singular: "専用のサポート"
          },
          "ko-KR": {
            singular: "전담 지원"
          },
          "pt-BR": {
            singular: "Suporte exclusivo"
          },
          "zh-CN": {
            singular: "专门支持"
          }
        }
      })]
    },
    _v95 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      if (_v3) switch (_v0) {
        case "free":
          return [(0, _v18.translate)({
            singular: "Ad-free video player",
            dictionary: {
              es: {
                singular: "Videos sin anuncios"
              },
              "de-DE": {
                singular: "Werbefreier Video-Player"
              },
              "fr-FR": {
                singular: "Player vidéo sans publicités"
              },
              "ja-JP": {
                singular: "広告なしの動画プレーヤー"
              },
              "ko-KR": {
                singular: "광고 없는 동영상 플레이어"
              },
              "pt-BR": {
                singular: "Player de vídeo sem anúncios"
              },
              "zh-CN": {
                singular: "无广告视频播放器"
              }
            }
          }), (0, _v18.translate)({
            singular: "4K and HDR",
            dictionary: {
              es: {
                singular: "4K y HDR"
              },
              "de-DE": {
                singular: "4K und HDR"
              },
              "fr-FR": {
                singular: "4K et HDR"
              },
              "ja-JP": {
                singular: "4KとHDR"
              },
              "ko-KR": {
                singular: "4K 및 HDR"
              },
              "pt-BR": {
                singular: "4K e HDR"
              },
              "zh-CN": {
                singular: "4k 和 HDR"
              }
            }
          })];
        case "creator":
          return _v4 ? [(0, _v18.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v18.translate)({
            singular: "Transfer video files",
            dictionary: {
              es: {
                singular: "Transfiera archivos de video"
              },
              "de-DE": {
                singular: "Videodateien übertragen"
              },
              "fr-FR": {
                singular: "Transférer des fichiers vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルを転送"
              },
              "ko-KR": {
                singular: "동영상 파일 전송"
              },
              "pt-BR": {
                singular: "Transferir arquivos de vídeo"
              },
              "zh-CN": {
                singular: "传输视频文件"
              }
            }
          }), (0, _v18.translate)({
            singular: "Engagement analytics",
            dictionary: {
              es: {
                singular: "Estadísticas de interacción"
              },
              "de-DE": {
                singular: "Analysen zur Interaktion"
              },
              "fr-FR": {
                singular: "Analyses liées à l'implication"
              },
              "ja-JP": {
                singular: "エンゲージメント分析"
              },
              "ko-KR": {
                singular: "참여도 분석"
              },
              "pt-BR": {
                singular: "Análise de engajamento"
              },
              "zh-CN": {
                singular: "参与分析"
              }
            }
          })] : [(0, _v18.translate)({
            singular: "Customizable video player",
            dictionary: {
              es: {
                singular: "Reproductor de video personalizable"
              },
              "de-DE": {
                singular: "Individuell anpassbarer Video-Player "
              },
              "fr-FR": {
                singular: "Player vidéo personnalisable"
              },
              "ja-JP": {
                singular: "カスタマイズ可能な動画プレーヤー"
              },
              "ko-KR": {
                singular: "사용자 지정 가능한 동영상 플레이어"
              },
              "pt-BR": {
                singular: "Video Player customizável"
              },
              "zh-CN": {
                singular: "可定制的视频播放器"
              }
            }
          }), (0, _v18.translate)({
            singular: "Password privacy & unlisted links",
            dictionary: {
              es: {
                singular: "Privacidad de la contraseña y enlaces sin listar"
              },
              "de-DE": {
                singular: "Passwortschutz und nicht gelistete Links"
              },
              "fr-FR": {
                singular: "Confidentialité des mots de passe et liens non répertoriés"
              },
              "ja-JP": {
                singular: "パスワードのプライバシーと限定公開リンク"
              },
              "ko-KR": {
                singular: "비밀번호 보호 및 일부 공개 링크"
              },
              "pt-BR": {
                singular: "Privacidade de senha e links não listados"
              },
              "zh-CN": {
                singular: "密码隐私与未公开发布的链接"
              }
            }
          }), (0, _v18.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v18.translate)({
            singular: "Transfer video files",
            dictionary: {
              es: {
                singular: "Transfiera archivos de video"
              },
              "de-DE": {
                singular: "Videodateien übertragen"
              },
              "fr-FR": {
                singular: "Transférer des fichiers vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルを転送"
              },
              "ko-KR": {
                singular: "동영상 파일 전송"
              },
              "pt-BR": {
                singular: "Transferir arquivos de vídeo"
              },
              "zh-CN": {
                singular: "传输视频文件"
              }
            }
          }), (0, _v18.translate)({
            singular: "Engagement analytics",
            dictionary: {
              es: {
                singular: "Estadísticas de interacción"
              },
              "de-DE": {
                singular: "Analysen zur Interaktion"
              },
              "fr-FR": {
                singular: "Analyses liées à l'implication"
              },
              "ja-JP": {
                singular: "エンゲージメント分析"
              },
              "ko-KR": {
                singular: "참여도 분석"
              },
              "pt-BR": {
                singular: "Análise de engajamento"
              },
              "zh-CN": {
                singular: "参与分析"
              }
            }
          })];
        case "professional":
          return [(0, _v18.translate)({
            singular: "Branding in the player",
            dictionary: {
              es: {
                singular: "Presencia de la marca en el reproductor"
              },
              "de-DE": {
                singular: "Branding im Player"
              },
              "fr-FR": {
                singular: "Branding dans le lecteur"
              },
              "ja-JP": {
                singular: "プレーヤー内でのブランディング"
              },
              "ko-KR": {
                singular: "플레이어 내 브랜딩"
              },
              "pt-BR": {
                singular: "Presença da marca no player"
              },
              "zh-CN": {
                singular: "播放器中的品牌标识"
              }
            }
          }), (0, _v18.translate)({
            singular: "Third party player support",
            dictionary: {
              es: {
                singular: "Compatibilidad con reproductores de terceros"
              },
              "de-DE": {
                singular: "Support für externe Video-Player"
              },
              "fr-FR": {
                singular: "Prise en charge des lecteurs tiers"
              },
              "ja-JP": {
                singular: "Vimeo以外のプレーヤーにも対応"
              },
              "ko-KR": {
                singular: "타사 플레이어 지원"
              },
              "pt-BR": {
                singular: "Suporte para players de terceiros"
              },
              "zh-CN": {
                singular: "第三方播放器支持"
              }
            }
          }), (0, _v18.translate)({
            singular: "Custom watermark",
            dictionary: {
              es: {
                singular: "Marca de agua personalizada"
              },
              "de-DE": {
                singular: "Benutzerdefiniertes Wasserzeichen"
              },
              "fr-FR": {
                singular: "Filigrane personnalisé"
              },
              "ja-JP": {
                singular: "カスタムウォーターマーク"
              },
              "ko-KR": {
                singular: "커스텀 워터마크"
              },
              "pt-BR": {
                singular: "Marca d´água customizada"
              },
              "zh-CN": {
                singular: "自定义水印"
              }
            }
          }), (0, _v18.translate)({
            singular: "Branded video galleries",
            dictionary: {
              es: {
                singular: "Galerías de vídeo con marca"
              },
              "de-DE": {
                singular: "Gebrandete Videogalerien"
              },
              "fr-FR": {
                singular: "Galeries vidéo brandées"
              },
              "ja-JP": {
                singular: "ブランド化された動画ギャラリー"
              },
              "ko-KR": {
                singular: "브랜디드 비디오 갤러리"
              },
              "pt-BR": {
                singular: "Galerias de vídeo com marca"
              },
              "zh-CN": {
                singular: "品牌视频画廊"
              }
            }
          }), (0, _v18.translate)({
            singular: "Lead capture",
            dictionary: {
              es: {
                singular: "Captura de oportunidades de venta"
              },
              "de-DE": {
                singular: "Lead-Erfassung"
              },
              "fr-FR": {
                singular: "Collecte d'opportunités commerciales"
              },
              "ja-JP": {
                singular: "リードキャプチャー"
              },
              "ko-KR": {
                singular: "리드 수집"
              },
              "pt-BR": {
                singular: "Captura de lead"
              },
              "zh-CN": {
                singular: "线索捕获"
              }
            }
          }), (0, _v18.translate)({
            singular: "Calls to action and custom cards",
            dictionary: {
              es: {
                singular: "Llamadas a la acción y tarjetas personalizadas"
              },
              "de-DE": {
                singular: "Call-to-Action-Elemente und benutzerdefinierte Karten"
              },
              "fr-FR": {
                singular: "Appels à l'action et cartes personnalisées"
              },
              "ja-JP": {
                singular: "行動喚起とカスタムカード"
              },
              "ko-KR": {
                singular: "콜 투 액션 및 커스텀 카드"
              },
              "pt-BR": {
                singular: "Chamadas para ação e cartões personalizados"
              },
              "zh-CN": {
                singular: "号召性用语与自定义卡片"
              }
            }
          })];
        case "studio":
        case "production":
          return [(0, _v18.translate)({
            singular: "{AMOUNT} Admins included",
            replacements: {
              AMOUNT: _v5?.seats?.admin ?? 0
            },
            dictionary: {
              es: {
                singular: "{AMOUNT} administradores incluidos"
              },
              "de-DE": {
                singular: "{AMOUNT} Admins inklusive"
              },
              "fr-FR": {
                singular: "{AMOUNT} administrateurs inclus"
              },
              "ja-JP": {
                singular: "{AMOUNT}名の管理者が含まれます"
              },
              "ko-KR": {
                singular: "{AMOUNT}명의 관리자 포함"
              },
              "pt-BR": {
                singular: "{AMOUNT} administradores incluídos"
              },
              "zh-CN": {
                singular: "{AMOUNT} 位管理员包含在内"
              }
            }
          }), (0, _v18.translate)({
            singular: "Up to {AMOUNT} guests in live events",
            replacements: {
              AMOUNT: 10
            },
            dictionary: {
              es: {
                singular: "Hasta {AMOUNT} invitados en eventos en vivo"
              },
              "de-DE": {
                singular: "Bis zu {AMOUNT} Gäste bei Live-Events"
              },
              "fr-FR": {
                singular: "Jusqu'à {AMOUNT} invités lors d'événements en direct"
              },
              "ja-JP": {
                singular: "ライブイベントで最大{AMOUNT}名のゲスト"
              },
              "ko-KR": {
                singular: "라이브 이벤트에 최대 {AMOUNT}명의 게스트"
              },
              "pt-BR": {
                singular: "Até {AMOUNT} convidados em eventos ao vivo"
              },
              "zh-CN": {
                singular: "直播活动最多 {AMOUNT} 位嘉宾"
              }
            }
          })];
        case "enterprise":
          return [(0, _v18.translate)({
            singular: "Customizable video player",
            dictionary: {
              es: {
                singular: "Reproductor de video personalizable"
              },
              "de-DE": {
                singular: "Individuell anpassbarer Video-Player "
              },
              "fr-FR": {
                singular: "Player vidéo personnalisable"
              },
              "ja-JP": {
                singular: "カスタマイズ可能な動画プレーヤー"
              },
              "ko-KR": {
                singular: "사용자 지정 가능한 동영상 플레이어"
              },
              "pt-BR": {
                singular: "Video Player customizável"
              },
              "zh-CN": {
                singular: "可定制的视频播放器"
              }
            }
          }), (0, _v18.translate)({
            singular: "Password privacy & unlisted links",
            dictionary: {
              es: {
                singular: "Privacidad de la contraseña y enlaces sin listar"
              },
              "de-DE": {
                singular: "Passwortschutz und nicht gelistete Links"
              },
              "fr-FR": {
                singular: "Confidentialité des mots de passe et liens non répertoriés"
              },
              "ja-JP": {
                singular: "パスワードのプライバシーと限定公開リンク"
              },
              "ko-KR": {
                singular: "비밀번호 보호 및 일부 공개 링크"
              },
              "pt-BR": {
                singular: "Privacidade de senha e links não listados"
              },
              "zh-CN": {
                singular: "密码隐私与未公开发布的链接"
              }
            }
          }), (0, _v18.translate)({
            singular: "Review and collaboration tools",
            dictionary: {
              es: {
                singular: "Herramientas de revisión y colaboración"
              },
              "de-DE": {
                singular: "Tools für Prüfung und Zusammenarbeit"
              },
              "fr-FR": {
                singular: "Outils de collaboration et de révision"
              },
              "ja-JP": {
                singular: "レビュー＆共同作業ツール"
              },
              "ko-KR": {
                singular: "리뷰 및 콜라보레이션 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de revisão e colaboração"
              },
              "zh-CN": {
                singular: "审查和协作工具"
              }
            }
          }), (0, _v18.translate)({
            singular: "Transfer video files",
            dictionary: {
              es: {
                singular: "Transfiera archivos de video"
              },
              "de-DE": {
                singular: "Videodateien übertragen"
              },
              "fr-FR": {
                singular: "Transférer des fichiers vidéo"
              },
              "ja-JP": {
                singular: "動画ファイルを転送"
              },
              "ko-KR": {
                singular: "동영상 파일 전송"
              },
              "pt-BR": {
                singular: "Transferir arquivos de vídeo"
              },
              "zh-CN": {
                singular: "传输视频文件"
              }
            }
          }), (0, _v18.translate)({
            singular: "Engagement analytics",
            dictionary: {
              es: {
                singular: "Estadísticas de interacción"
              },
              "de-DE": {
                singular: "Analysen zur Interaktion"
              },
              "fr-FR": {
                singular: "Analyses liées à l'implication"
              },
              "ja-JP": {
                singular: "エンゲージメント分析"
              },
              "ko-KR": {
                singular: "참여도 분석"
              },
              "pt-BR": {
                singular: "Análise de engajamento"
              },
              "zh-CN": {
                singular: "参与分析"
              }
            }
          })];
        default:
          return;
      }
      return _v1 ? _v93[_v0] : _v2 ? _v94[_v0] : _v92[_v0];
    },
    _v96 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let _v6 = !!Array.isArray(_v0) && !_v0.some(_v0 => "free" === _v0.tier);
      return "free" === _v1 || "customSelfServe" === _v1 || "starter" === _v1 && _v6 || _v4 && "professional" === _v1 && (_v6 || "business" === _v5) ? (0, _v18.translate)({
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
      }) : (0, _v18.translate)({
        singular: "Everything in {PLAN_NAME}, plus:",
        replacements: {
          PLAN_NAME: {
            starter: "Free",
            standard: "Starter",
            advanced: "Standard",
            enterprise: _v2 ? "Premium" : _v3 ? "Team Live" : _v4 ? "Studio" : "Advanced",
            plus: "Basic",
            pro: "Plus",
            proUnlimited: "Plus",
            business: "Pro",
            livePremium: "Business",
            proSolution: "Free",
            team: "Pro",
            teamLive: "Team",
            creator: "Free",
            professional: "Creator",
            studio: "Professional",
            production: "Professional"
          }[_v1]
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
      });
    };
  var _v97 = _v0.i(0);
  let _v98 = _v0 => (0, _v1.jsx)(_v87.Paragraph, {
      fontWeight: 400,
      children: _v0.children
    }),
    _v99 = ({
      planData: _v0,
      periodicQuota: _v1,
      quotaPeriod: _v2,
      planView: _v3
    }) => {
      let {
          tier: _v4
        } = _v0,
        {
          isFlatRateData: _v5,
          isSolutionData: _v6,
          isRepackagingData: _v7,
          plansData: _v8
        } = (0, _v7.useContext)(_v32.PlansDataContext),
        _v9 = !!_v7 && (0, _v97.isCreatorV2)(_v8),
        _v10 = _v95(_v4, _v5, _v6, _v7, _v9, _v0?.metadata?.entitlements?.params),
        _v11 = _v96(_v8, _v4, _v5, _v6, _v7, _v3),
        _v12 = ((_v0, _v1 = !1, _v2, _v3) => _v0 && _v1 ? "enterprise" === _v0 ? (0, _v18.translate)({
          singular: "More storage and bandwidth",
          dictionary: {
            es: {
              singular: "Más almacenamiento y ancho de banda"
            },
            "de-DE": {
              singular: "Mehr Speicher und Bandbreite"
            },
            "fr-FR": {
              singular: "Plus de stockage et de bande passante"
            },
            "ja-JP": {
              singular: "より多くのストレージと帯域幅"
            },
            "ko-KR": {
              singular: "저장 공간과 대역폭 확대"
            },
            "pt-BR": {
              singular: "Mais espaço de armazenamento e largura de banda"
            },
            "zh-CN": {
              singular: "更多存储空间和带宽"
            }
          }
        }) : "lifetime" === _v2 ? (0, _v18.translate)({
          singular: "{AMOUNT} total storage",
          replacements: {
            AMOUNT: _v3
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de almacenamiento total"
            },
            "de-DE": {
              singular: "{AMOUNT} Gesamtspeicherplatz"
            },
            "fr-FR": {
              singular: "{AMOUNT} de stockage en tout"
            },
            "ja-JP": {
              singular: "{AMOUNT} の総ストレージ"
            },
            "ko-KR": {
              singular: "총 {AMOUNT} 저장 공간"
            },
            "pt-BR": {
              singular: "{AMOUNT} de armazenamento total"
            },
            "zh-CN": {
              singular: "{AMOUNT} 总存储量"
            }
          }
        }) : "pro" === _v0 || "plus" === _v0 ? (0, _v18.translate)({
          singular: "{AMOUNT} / week",
          replacements: {
            AMOUNT: _v3
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} por semana"
            },
            "de-DE": {
              singular: "{AMOUNT} pro Woche"
            },
            "fr-FR": {
              singular: "{AMOUNT}/semaine"
            },
            "ja-JP": {
              singular: "{AMOUNT}/週"
            },
            "ko-KR": {
              singular: "{AMOUNT}/주"
            },
            "pt-BR": {
              singular: "{AMOUNT} / semana"
            },
            "zh-CN": {
              singular: "{AMOUNT}/周"
            }
          }
        }) : `${(0, _v18.translate)({
          singular: "No weekly limit",
          dictionary: {
            es: {
              singular: "Sin límites semanales"
            },
            "de-DE": {
              singular: "Keine Wochenlimits"
            },
            "fr-FR": {
              singular: "Sans limite hebdomadaire"
            },
            "ja-JP": {
              singular: "週毎の制限なし"
            },
            "ko-KR": {
              singular: "주간 제한 없음"
            },
            "pt-BR": {
              singular: "Sem limites semanais"
            },
            "zh-CN": {
              singular: "无每周限制"
            }
          }
        })}, ${(0, _v18.translate)({
          singular: "{AMOUNT} total storage",
          replacements: {
            AMOUNT: _v3
          },
          dictionary: {
            es: {
              singular: "{AMOUNT} de almacenamiento total"
            },
            "de-DE": {
              singular: "{AMOUNT} Gesamtspeicherplatz"
            },
            "fr-FR": {
              singular: "{AMOUNT} de stockage en tout"
            },
            "ja-JP": {
              singular: "{AMOUNT} の総ストレージ"
            },
            "ko-KR": {
              singular: "총 {AMOUNT} 저장 공간"
            },
            "pt-BR": {
              singular: "{AMOUNT} de armazenamento total"
            },
            "zh-CN": {
              singular: "{AMOUNT} 总存储量"
            }
          }
        })}` : "enterprise" === _v0 ? (0, _v18.translate)({
          singular: "Unlimited videos",
          dictionary: {
            es: {
              singular: "Videos ilimitados"
            },
            "de-DE": {
              singular: "Unbegrenzte Videos"
            },
            "fr-FR": {
              singular: "Nombre illimité de vidéos"
            },
            "ja-JP": {
              singular: "無制限の動画"
            },
            "ko-KR": {
              singular: "동영상 무제한"
            },
            "pt-BR": {
              singular: "Vídeos ilimitados"
            },
            "zh-CN": {
              singular: "无限数量的视频"
            }
          }
        }) : "free" === _v0 && 2 == _v3 ? (0, _v18.translate)({
          singular: "{NUM_VIDEOS} videos / month",
          replacements: {
            NUM_VIDEOS: _v3
          },
          dictionary: {
            es: {
              singular: "{NUM_VIDEOS} videos/mes"
            },
            "de-DE": {
              singular: "{NUM_VIDEOS} Videos pro Monat"
            },
            "fr-FR": {
              singular: "{NUM_VIDEOS} vidéos/mois"
            },
            "ja-JP": {
              singular: "動画{NUM_VIDEOS}本/月"
            },
            "ko-KR": {
              singular: "한 달에 동영상 {NUM_VIDEOS}개"
            },
            "pt-BR": {
              singular: "{NUM_VIDEOS} vídeos por mês"
            },
            "zh-CN": {
              singular: "{NUM_VIDEOS} 个视频/月"
            }
          }
        }) : (0, _v18.translate)({
          singular: "{NUM_VIDEOS} videos",
          replacements: {
            NUM_VIDEOS: _v3
          },
          dictionary: {
            "de-DE": {
              singular: "{NUM_VIDEOS} Videos"
            },
            "fr-FR": {
              singular: "{NUM_VIDEOS} vidéos"
            },
            "ja-JP": {
              singular: "{NUM_VIDEOS}件の動画"
            },
            "ko-KR": {
              singular: "동영상 {NUM_VIDEOS}개"
            },
            "pt-BR": {
              singular: "{NUM_VIDEOS} vídeos"
            },
            "zh-CN": {
              singular: "{NUM_VIDEOS} 个视频"
            }
          }
        }))(_v4, _v5, _v2, _v1);
      return (0, _v1.jsxs)(_v13.Box, {
        "data-testid": "plan-card-features",
        children: [_v11 && (0, _v1.jsx)(_v13.Box, {
          marginBottom: 12,
          lineHeight: 18,
          children: (0, _v1.jsx)(_v87.Paragraph, {
            fontWeight: 500,
            children: _v11
          })
        }), _v10 && _v10.length > 0 && (_v12 || _v7) && (0, _v1.jsxs)(_v89, {
          children: [_v5 && (0, _v1.jsxs)("li", {
            children: [(0, _v1.jsx)(_v90, {}), (0, _v1.jsx)(_v98, {
              children: _v12
            })]
          }), _v10.map(_v0 => (0, _v1.jsxs)("li", {
            children: [(0, _v1.jsx)(_v90, {}), (0, _v1.jsx)(_v98, {
              children: _v0
            })]
          }, _v0 + "cards-feature-list"))]
        })]
      });
    };
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0);
  (0, _v45.default)(_v102.ReviewCheck).withConfig({
    displayName: "styles__ReviewIcon",
    componentId: "sc-d95ef56-0"
  })`
  ${(0, _v66.addWidth)(16, 20)};
  margin-top: ${(0, _v44.rem)(4)};
  align-self: flex-start;
  flex-shrink: 0;
`, _v45.default.div.withConfig({
    displayName: "styles__ReviewContainer",
    componentId: "sc-d95ef56-1"
  })`
  min-height: ${(0, _v44.rem)(120)};
  margin-bottom: ${(0, _v44.rem)(20)};
  svg {
    margin: ${(0, _v44.rem)(8)} 0;
  }
  p {
    color: ${_v101.bokehTheme.colors.gray["900"]};
    max-width: ${(0, _v44.rem)(180)};
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;
  let _v103 = _v45.default.ul.withConfig({
      displayName: "styles__EnterpriseFeatureList",
      componentId: "sc-d95ef56-2"
    })`
  list-style: initial;

  li {
    margin-top: ${(0, _v44.rem)(8)};
    position: relative;
  }

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${(0, _v44.rem)(24)};
  }
`,
    _v104 = ({
      tier: _v0
    }) => {
      let _v1 = (0, _v7.useContext)(_v31.OverridesContext),
        _v2 = _v1?.subHeadingType?.[_v0];
      return (0, _v1.jsx)(_v87.Paragraph, {
        fontSize: "18",
        children: _v2
      });
    },
    _v105 = _v0 => (0, _v1.jsx)(_v103, {
      children: _v0.map(_v0 => (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v90, {}), (0, _v1.jsx)(_v87.Paragraph, {
          children: _v0
        })]
      }, _v0 + "cards-feature-list-horizontal"))
    }),
    _v106 = ({
      planData: _v0,
      showBadge: _v1
    }) => {
      let _v2 = (0, _v7.useContext)(_v32.PlansDataContext),
        _v3 = (0, _v7.useContext)(_v31.OverridesContext),
        {
          isFlatRateData: _v4,
          isSolutionData: _v5,
          plansData: _v6
        } = _v2,
        _v7 = _v6 && _v6.length > _v30.maxVerticalCards,
        _v8 = _v95(_v0.tier, _v4, _v5) ?? [],
        _v9 = _v8 ? Math.ceil(_v8.length / 2) : 0,
        _v10 = _v0 => (0, _v1.jsx)(_v13.Box, {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: (0, _v15.rem)(306),
          width: "100%",
          ..._v0,
          children: _v0.children
        }),
        _v11 = _v0 => (0, _v1.jsx)(_v13.Box, {
          display: "flex",
          justifyContent: "space-between",
          children: _v0.children
        });
      return (0, _v1.jsxs)(_v13.Box, {
        border: `${(0, _v15.rem)(8)} solid transparent`,
        display: "flex",
        position: "relative",
        "data-testid": "horizontal-plan-card",
        children: [(0, _v1.jsx)(_v70, {
          showBadge: _v1,
          planData: _v0
        }), (0, _v1.jsxs)(_v13.Box, {
          padding: `${(0, _v15.rem)(52)} ${(0, _v15.rem)(44)} ${(0, _v15.rem)(48)}`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          border: `'var(--vimeo-colors-fill-surface)' solid ${(0, _v15.rem)(1)}`,
          borderRadius: (0, _v15.rem)(32),
          opacity: _v0?.metadata?.interactions?.purchase?.status !== "available" ? "0.6" : "initial",
          children: [(0, _v1.jsx)(_v126, {
            showBadge: _v1,
            purchaseStatus: _v0?.metadata?.interactions?.purchase?.status || ""
          }), _v6 && _v7 && (0, _v1.jsxs)(_v10, {
            children: [(0, _v1.jsxs)(_v13.Box, {
              children: [(0, _v1.jsxs)(_v128, {
                as: "h2",
                size: "2",
                children: [_v0.name, " ", (0, _v1.jsx)(_v71, {
                  showBadge: _v0?.metadata?.interactions?.purchase?.status === "purchased"
                })]
              }), _v3?.subHeadingType?.[_v0.tier] && (0, _v1.jsx)(_v104, {
                tier: _v0.tier
              })]
            }), (0, _v1.jsx)(_v13.Box, {
              children: _v0 && "enterprise" === _v0.tier && (0, _v1.jsxs)(_v13.Box, {
                display: "flex",
                children: [(0, _v1.jsx)(_v100.Building, {
                  h: (0, _v15.rem)(26),
                  w: (0, _v15.rem)(26)
                }), (0, _v1.jsx)(_v56.Header, {
                  size: "xl",
                  as: "h3",
                  marginLeft: (0, _v15.rem)(5),
                  variant: "heading-md",
                  children: (0, _v18.translate)({
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
            }), (0, _v1.jsx)(_v74.default, {
              planData: _v0,
              location: "horizontal",
              showYearly: !0
            })]
          }), _v8 && _v6 && _v7 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v10, {
              children: [(0, _v1.jsx)(_v13.Box, {
                marginBottom: 12,
                lineHeight: 18,
                children: (0, _v1.jsx)(_v87.Paragraph, {
                  fontWeight: 500,
                  children: _v96(_v6, _v0.tier, _v4, _v5)
                })
              }), (0, _v1.jsx)(_v11, {
                children: _v105(_v8.slice(0, _v9))
              })]
            }), (0, _v1.jsx)(_v10, {
              children: (0, _v1.jsx)(_v11, {
                children: _v105(_v8.slice(_v9, _v8.length))
              })
            })]
          })]
        })]
      });
    };
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0);
  let _v113 = _v45.default.div.withConfig({
      displayName: "styles__MenuWrapper",
      componentId: "sc-f1e205c8-0"
    })`
  position: relative;
  ${({
      disabled: _v0
    }) => _v0 && _v45.css`
      pointer-events: none;
      cursor: not-allowed;
    `}
`,
    _v114 = _v45.default.div.withConfig({
      displayName: "styles__Menu",
      componentId: "sc-f1e205c8-1"
    })`
  display: flex;
  color: #566;
  &:hover {
    background: ${_v101.bokehTheme.colors.gray["100"]};
    border-radius: ${(0, _v44.rem)(4)};
    cursor: pointer;
  }
  > div {
    text-decoration: underline;
  }
`,
    _v115 = (0, _v45.default)(_v112.ChevronDown).withConfig({
      displayName: "styles__ChevronDownStyled",
      componentId: "sc-f1e205c8-2"
    })`
  margin-top: ${(0, _v44.rem)(-2)};
  width: ${(0, _v44.rem)(20)};
  height: ${(0, _v44.rem)(20)};

  path {
    fill: #566;
  }
`,
    _v116 = _v45.default.span.withConfig({
      displayName: "styles__Accent",
      componentId: "sc-f1e205c8-3"
    })`
  padding-left: ${(0, _v44.rem)(4)};
  color: #4ec437;
`,
    _v117 = _v45.default.div.withConfig({
      displayName: "styles__PriceListWrapper",
      componentId: "sc-f1e205c8-4"
    })`
  padding: ${(0, _v44.rem)(8)} 0;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: ${(0, _v44.rem)(4)};

  span {
    ${(0, _v66.addTypography)(12, 14)};
  }
`,
    _v118 = _v45.default.div.withConfig({
      displayName: "styles__PriceFrequency",
      componentId: "sc-f1e205c8-5"
    })`
  font-weight: normal;
  ${(0, _v66.addTypography)(14, 16)};
  color: #566;
  letter-spacing: unset;
`,
    _v119 = (0, _v45.default)(_v118).withConfig({
      displayName: "styles__PriceFrequencySelector",
      componentId: "sc-f1e205c8-6"
    })`
  font-weight: 500;
  ${(0, _v66.addTypography)(14, 16)};
  letter-spacing: unset;
`;
  (0, _v45.default)(_v102.ReviewCheck).withConfig({
    displayName: "styles__ReviewIconStyled",
    componentId: "sc-f1e205c8-7"
  })`
  width: ${(0, _v44.rem)(38)};
  width: ${(0, _v44.rem)(34)};
  margin-top: ${(0, _v44.rem)(-2)};
`;
  let _v120 = _v0 => {
      let [_v1, _v2] = (0, _v7.useState)(!1),
        _v3 = (0, _v7.useRef)(null),
        {
          isMonthly: _v4,
          purchased: _v5,
          disabled: _v6
        } = _v0,
        {
          trackPricingPagePlanSelected: _v7
        } = (0, _v26.usePricingTracking)();
      (0, _v111.useOutsideClick)([_v3], () => {
        _v1 && _v2(!1);
      });
      let _v8 = (0, _v1.jsx)(_v117, {
          children: (0, _v1.jsxs)(_v110.Pop.List, {
            children: [(0, _v1.jsx)(_v110.Pop.Item, {
              onClick: () => {
                _v7({
                  plan: "starter",
                  periodicity: "yearly",
                  freeTrial: !1
                }), (0, _v38.emitBPEvent)({
                  copy: "billed annually",
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: "starter",
                  duration: "annual",
                  purchase_type: "direct",
                  path: window.location.href,
                  target_path: _v0.annualStoreUrl,
                  is_discount: !1,
                  currency: _v0.currency?.currencyCode,
                  price: _v0.price?.annualMonthly
                }), window.location.href = _v0.annualStoreUrl;
              },
              children: _v0.annualDiscount > 0 ? (0, _v18.translate)({
                singular: "{PRICE} per month, billed annually {ACCENT}(save {PERCENT}%){/ACCENT}",
                replacements: {
                  PRICE: `${_v0.currency?.symbol}${_v0.price?.annualMonthly}`,
                  ACCENT: _v0 => (0, _v1.jsx)(_v116, {
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
              }) : (0, _v18.translate)({
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
            }), (0, _v1.jsx)(_v110.Pop.Item, {
              onClick: () => {
                _v7({
                  plan: "starter",
                  periodicity: "monthly",
                  freeTrial: !1
                }), (0, _v38.emitBPEvent)({
                  copy: "billed monthly",
                  location: "our_plans",
                  target: "checkout",
                  plan_selected: "starter",
                  duration: "monthly",
                  purchase_type: "direct",
                  path: window.location.href,
                  target_path: _v0.annualStoreUrl,
                  is_discount: !1,
                  currency: _v0.currency?.currencyCode,
                  price: _v0.price?.monthly
                }), window.location.href = _v0.monthlyStoreUrl;
              },
              children: (0, _v18.translate)({
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
        _v9 = () => (0, _v1.jsx)(_v119, {
          children: (0, _v18.translate)({
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
      return _v5 ? _v4 ? (0, _v1.jsx)(_v118, {
        children: (0, _v18.translate)({
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
      }) : (0, _v1.jsx)(_v9, {}) : (0, _v1.jsxs)(_v107.Popover, {
        onOpen: () => (0, _v38.emitBPEvent)({
          copy: "monthly dropdown",
          action_type: "expand",
          location: "our_plans",
          path: window.location.href
        }),
        placement: "bottom",
        children: [(0, _v1.jsx)(_v108.PopoverTrigger, {
          children: (0, _v1.jsx)(_v113, {
            disabled: _v6,
            children: (0, _v1.jsxs)(_v114, {
              id: "plus-monthly-dropdown",
              children: [(0, _v1.jsx)(_v9, {}), (0, _v1.jsx)(_v115, {})]
            })
          })
        }), (0, _v1.jsx)(_v109.PopoverContent, {
          children: _v8
        })]
      });
    },
    _v121 = _v0 => (0, _v1.jsx)(_v14.Text, {
      variant: "heading-sm",
      fontSize: "48",
      marginRight: "4",
      float: "left",
      whiteSpace: "nowrap",
      display: "inline",
      as: "p",
      ..._v0,
      children: _v0.children
    }),
    _v122 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v14.Text, {
      variant: "heading-sm",
      fontWeight: 400,
      textColor: "text-secondary",
      children: _v0
    }),
    _v123 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v121, {
      color: "stroke",
      textDecoration: "line-through",
      textDecorationThickness: "2px",
      fontWeight: 400,
      children: _v0
    }),
    _v124 = (_v0, _v1) => {
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
          return (0, _v18.translate)({
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
          return (0, _v18.translate)({
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
          return _v1 || !_v1 && "video_size" === _v4 ? (0, _v18.translate)({
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
          }) : (0, _v18.translate)({
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
    },
    _v125 = ({
      planData: _v0,
      showYearly: _v1,
      isBillingFreqToggleAvailable: _v2,
      disabled: _v3,
      showStrikePrice: _v4,
      isMobileBreakpoint: _v5
    }) => {
      let {
          currency: _v6,
          price: _v7,
          metadata: _v8,
          discount: _v9,
          tier: _v10,
          promotion: _v11,
          priceFormatted: _v12
        } = _v0,
        _v13 = _v0.metadata.purchasedProduct ?? null,
        {
          isFlatRateData: _v14
        } = (0, _v7.useContext)(_v32.PlansDataContext),
        _v15 = (0, _v7.useContext)(_v31.OverridesContext),
        _v16 = (0, _v7.useContext)(_v11.ViewerContext),
        _v17 = _v16?.location?.toUpperCase() === "GB",
        {
          capabilities: {
            hasMonthlyBilling: _v18,
            hasPaid: _v19
          }
        } = (0, _v17.useCapability)(["hasMonthlyBilling", "hasPaid"]),
        _v20 = (0, _v7.useRef)(null),
        _v21 = (_v17 ? ((_v0, _v1) => {
          if ("number" != typeof _v0 || !_v1) return null;
          let _v2 = Math.round(1.2 * _v0 * 100) / 100,
            _v3 = _v2 % 1 == 0;
          try {
            return new Intl.NumberFormat("en-GB", {
              style: "currency",
              currency: _v1,
              currencyDisplay: "narrowSymbol",
              minimumFractionDigits: 2 * !_v3,
              maximumFractionDigits: 2
            }).format(_v2);
          } catch {
            return null;
          }
        })(_v1 || "free" === _v10 ? _v11?.price?.annualMonthly ? _v11.price.annualMonthly : "customSelfServe" === _v10 || _v8.isBandwidthProduct ? _v7?.annual : _v7?.annualMonthly : _v11?.price?.monthly ? _v11.price.monthly : _v7?.monthly, _v6?.currencyCode) : null) ?? (_v1 || "free" === _v10 ? _v13 && !_v8.isBandwidthProduct && (!_v13?.isMonthly || _v14) ? _v13?.displayPriceFormatted : _v11?.priceFormatted?.annualMonthly ? _v11.priceFormatted.annualMonthly : "customSelfServe" === _v10 || _v8.isBandwidthProduct ? _v12?.annual : _v12?.annualMonthly : _v13 && _v13?.isMonthly ? _v13?.displayPriceFormatted : _v11?.priceFormatted?.monthly ? _v11.priceFormatted.monthly : _v12?.monthly);
      return ((0, _v7.useLayoutEffect)(() => {
        let _v0 = _v20.current,
          _v1 = _v0?.firstElementChild;
        _v1 && _v1.innerText.length > 6 && (_v1.style.fontSize = (0, _v15.rem)(30));
      }, [_v21]), "enterprise" === _v10) ? (0, _v1.jsxs)(_v13.Box, {
        marginTop: "21",
        display: "flex",
        alignItems: "center",
        gap: (0, _v15.rem)(8),
        minHeight: (0, _v15.rem)(115),
        children: [_v5 ? (0, _v1.jsx)(_v100.Building, {
          height: 48,
          width: 40
        }) : (0, _v1.jsx)(_v13.Box, {
          height: 48,
          children: (0, _v1.jsx)(_v100.Building, {
            width: (0, _v15.rem)(52),
            height: (0, _v15.rem)(52)
          })
        }), (0, _v1.jsx)(_v13.Box, {
          children: (0, _v1.jsx)(_v56.Header, {
            size: "xl",
            as: "h3",
            variant: "heading-md",
            children: _v124(_v0, _v14)
          })
        })]
      }) : (0, _v1.jsxs)(_v13.Box, {
        marginTop: "21",
        minHeight: (0, _v15.rem)(115),
        children: [(0, _v1.jsxs)(_v13.Box, {
          width: "100%",
          overflow: "hidden",
          ref: _v20,
          children: [_v4 && _v12?.monthly && (0, _v1.jsx)(_v123, {
            children: _v12?.monthly
          }), (0, _v1.jsx)(_v121, {
            children: _v21
          })]
        }), (0, _v1.jsx)(_v13.Box, {
          children: "free" !== _v10 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v122, {
              children: [_v124(_v0, _v14), _v5 && `, ${_v1 ? (0, _v18.translate)({
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
              }) : (0, _v18.translate)({
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
            }), (_v7?.monthly || _v13?.isMonthly) && !_v2 && !_v5 && !1 !== _v15.showMonthlyDropdown ? (0, _v1.jsx)(_v120, {
              price: _v7,
              annualDiscount: _v9?.annual || 0,
              annualStoreUrl: _v8.interactions?.purchase?.uri?.annual || "/upgrade",
              monthlyStoreUrl: _v8.interactions?.purchase?.uri?.monthly || "/upgrade",
              showPerSeatPricingDetails: !0,
              isMonthly: _v13?.isMonthly,
              purchased: null !== _v13,
              currency: _v6,
              disabled: _v3
            }) : _v7?.monthly === void 0 || _v1 ? (0, _v1.jsx)(_v122, {
              children: _v5 ? !(_v19 && !_v18) && _v12?.monthly && null === _v13 && (0, _v18.translate)({
                singular: "or {PRICE} billed monthly",
                replacements: {
                  PRICE: _v12?.monthly
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
              }) : (0, _v18.translate)({
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
            }) : (0, _v1.jsx)(_v122, {
              children: !_v5 && (0, _v18.translate)({
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
            }), (0, _v1.jsx)(_v122, {
              children: _v17 ? (0, _v18.translate)({
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
              }) : (0, _v18.translate)({
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
    },
    _v126 = ({
      purchaseStatus: _v0 = "",
      showBadge: _v1 = !1,
      ..._v2
    }) => (0, _v1.jsx)(_v13.Box, {
      background: "var(--vimeo-colors-fill-surface)",
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      borderRadius: {
        base: "1.5rem",
        md: "2.3rem"
      },
      border: _v1 ? {
        base: "#8a5ee8 solid 0.15rem",
        md: "#8a5ee8 solid 0.28rem"
      } : "purchased" === _v0 ? {
        border: "#8a5ee8 solid 0.15rem",
        md: "#f4f5f6 solid 0.15rem"
      } : {
        base: "var(--vimeo-colors-fill-surface) solid 0.1rem"
      },
      children: _v2.children
    }),
    _v127 = _v0 => (0, _v1.jsx)(_v13.Box, {
      opacity: _v0.isDisabled ? .6 : 1,
      position: "relative",
      padding: "1.25rem",
      paddingX: {
        base: "1.25rem",
        md: "2.5rem"
      },
      paddingY: {
        base: "1.25rem",
        md: "2.85rem"
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      children: _v0.children
    }),
    _v128 = ({
      allowWrap: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v56.Header, {
      wordBreak: "break-word",
      display: "flex",
      columnGap: "0.5rem",
      whiteSpace: _v0 ? void 0 : "nowrap",
      flexWrap: _v0 ? "wrap" : void 0,
      alignItems: "center",
      fontWeight: 500,
      as: _v1.as,
      size: _v1.size,
      children: _v1.children
    }),
    _v129 = _v0 => (0, _v1.jsx)(_v13.Box, {
      minHeight: "72px",
      children: _v0.children
    }),
    _v130 = ({
      planData: _v0,
      showBadge: _v1,
      showYearly: _v2,
      isBillingFreqToggleAvailable: _v3,
      showStrikePrice: _v4,
      isMobileBreakpoint: _v5,
      planView: _v6
    }) => {
      let {
          width: _v7
        } = (0, _v29.useWindowSize)(),
        _v8 = _v5 && _v7 > 768,
        {
          tier: _v9,
          name: _v10,
          metadata: _v11
        } = _v0,
        _v12 = (0, _v7.useContext)(_v32.PlansDataContext),
        _v13 = (0, _v7.useContext)(_v31.OverridesContext),
        {
          isFlatRateData: _v14,
          isSolutionData: _v15,
          isRepackagingData: _v16,
          effectiveTier: _v17,
          upcomingTier: _v18
        } = _v12,
        _v19 = _v11.entitlements?.params?.videoStoragePeriodicQuota || _v11.entitlements?.params?.videoStorageQuotaCap,
        _v20 = _v11.entitlements?.params?.videoStorageQuotaPeriod,
        _v21 = _v11.entitlements?.params?.bandwidth?.periodicQuota,
        _v22 = _v11?.interactions?.purchase?.status,
        _v23 = _v11?.purchasedProduct?.isMonthly,
        _v24 = void 0 !== _v18 && _v9 === _v18,
        _v25 = (0, _v18.translate)({
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
        _v26 = (0, _v64.getEffectiveShowYearly)(_v0, _v2),
        _v27 = "plus" !== _v9 && "purchased" === _v22 && _v26 && _v23 ? "available" : _v22,
        _v28 = "available" !== _v27,
        _v29 = (_v28 || _v24) && _v16,
        _v30 = _v29 ? .7 : 1,
        _v31 = _v8 && (0, _v15.rem)(586) || _v5 && "50%" || "25%",
        _v32 = _v8 && "auto" || _v5 && "100%" || (0, _v15.rem)(330);
      if (_v28 && !_v24 && _v5) return null;
      let _v33 = !_v14 || _v16,
        _v34 = !("free" === _v9 && _v5);
      return (0, _v1.jsxs)(_v13.Box, {
        width: _v31,
        position: "relative",
        margin: _v1 && "purchased" !== _v27 ? `${(0, _v15.rem)(40)} auto 0` : "0 auto",
        minWidth: _v32,
        display: _v5 || "customSelfServe" === _v9 ? "block" : "table-cell",
        border: `${(0, _v15.rem)(8)} solid transparent`,
        children: [(0, _v1.jsx)(_v70, {
          showBadge: _v1,
          planData: _v0
        }), (0, _v1.jsx)(_v126, {
          showBadge: _v1,
          purchaseStatus: _v27
        }), (0, _v1.jsx)(_v127, {
          isDisabled: _v28 && !_v16,
          children: (0, _v1.jsxs)(_v13.Box, {
            className: "card-section-container",
            gap: _v8 ? "lg" : void 0,
            display: _v8 ? "flex" : void 0,
            margin: _v8 ? "0 auto" : void 0,
            children: [(0, _v1.jsxs)(_v13.Box, {
              paddingBottom: _v16 && _v24 ? (0, _v15.rem)(16) : void 0,
              children: [(0, _v1.jsxs)(_v128, {
                as: "h1",
                size: "lg",
                allowWrap: _v16,
                children: [(0, _v1.jsx)(_v13.Box, {
                  as: "span",
                  opacity: _v30,
                  children: _v10
                }), " ", (0, _v1.jsx)(_v71, {
                  showBadge: "purchased" === _v27,
                  label: _v24 ? _v25 : void 0,
                  showUpcoming: _v24
                })]
              }), _v11.isBandwidthProduct && (0, _v1.jsx)(_v13.Box, {
                opacity: _v30,
                children: (0, _v1.jsx)(_v56.Header, {
                  size: "sm",
                  children: "enterprise" !== _v9 ? `${_v21} annual bandwidth` : ""
                })
              }), !_v15 && _v13?.subHeadingType?.[_v9] && (0, _v1.jsx)(_v129, {
                children: (0, _v1.jsx)(_v13.Box, {
                  opacity: _v30,
                  children: (0, _v1.jsx)(_v104, {
                    tier: _v9
                  })
                })
              }), !("free" === _v9 && _v5) && (0, _v1.jsx)(_v13.Box, {
                opacity: _v30,
                children: (0, _v1.jsx)(_v125, {
                  planData: _v0,
                  showYearly: _v26,
                  isBillingFreqToggleAvailable: _v3,
                  disabled: _v28,
                  showStrikePrice: _v4,
                  isMobileBreakpoint: _v5
                })
              }), (0, _v1.jsx)(_v13.Box, {
                marginTop: 24,
                marginBottom: _v16 && _v24 ? 12 : 24,
                opacity: _v29 ? .5 : 1,
                children: "free" === _v9 ? (0, _v1.jsx)(_v75.default, {
                  location: "vertical"
                }) : (0, _v1.jsx)(_v74.default, {
                  planData: _v0,
                  showYearly: _v26,
                  showFreeTrial: _v0.metadata?.interactions?.purchase?.uri?.freeTrial !== null,
                  location: "vertical",
                  isMobileBreakpoint: _v5,
                  upcomingTier: _v18,
                  effectiveTier: _v17
                })
              }), _v16 && _v24 && (0, _v1.jsxs)(_v13.Box, {
                display: "flex",
                gap: (0, _v15.rem)(8),
                alignItems: "flex-start",
                background: "var(--vimeo-colors-status-info-secondary, rgba(190,227,248,0.48))",
                borderRadius: (0, _v15.rem)(8),
                paddingLeft: (0, _v15.rem)(12),
                paddingRight: (0, _v15.rem)(8),
                paddingY: (0, _v15.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v13.Box, {
                  paddingY: (0, _v15.rem)(2),
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v63.InfoCircle, {
                    boxSize: (0, _v15.rem)(20),
                    color: "status-info-primary"
                  })
                }), (0, _v1.jsx)(_v14.Text, {
                  variant: "body-sm",
                  children: (0, _v18.translate)({
                    singular: "Starting from the next renewal, you will be moved to the new {B}{PLAN_NAME}{/B} plan.",
                    replacements: {
                      PLAN_NAME: _v10,
                      B: _v0 => (0, _v1.jsx)(_v14.Text, {
                        as: "span",
                        fontWeight: 500,
                        variant: "body-sm",
                        children: _v0
                      }, "plan-name")
                    },
                    dictionary: {
                      es: {
                        singular: "A partir de la próxima renovación, se le trasladará al nuevo plan {B}{PLAN_NAME}{/B}."
                      },
                      "de-DE": {
                        singular: "Ab der nächsten Verlängerung werden Sie auf den neuen {B}{PLAN_NAME}{/B}-Plan umgestellt."
                      },
                      "fr-FR": {
                        singular: "À partir du prochain renouvellement, vous passerez au nouveau plan {B}{PLAN_NAME}{/B}."
                      },
                      "ja-JP": {
                        singular: "次回の更新時より、新しい{B}{PLAN_NAME}{/B}プランに移行されます。"
                      },
                      "ko-KR": {
                        singular: "다음 갱신부터 새 {B}{PLAN_NAME}{/B} 요금제로 이동됩니다."
                      },
                      "pt-BR": {
                        singular: "A partir da próxima renovação, você será migrado para o novo plano {B}{PLAN_NAME}{/B}."
                      },
                      "zh-CN": {
                        singular: "从下次续订开始，您将被转移到新的 {B}{PLAN_NAME}{/B} 计划。"
                      }
                    }
                  })
                })]
              })]
            }), _v34 && (0, _v1.jsxs)(_v13.Box, {
              opacity: _v30,
              children: [_v33 && (0, _v1.jsx)(_v86, {
                planData: _v0,
                showYearly: _v2
              }), (0, _v1.jsx)(_v99, {
                planData: _v0,
                quotaPeriod: _v20,
                periodicQuota: "free" === _v9 && null !== _v19 ? _v19 : _v11.entitlements?.params?.videoStoragePeriodicQuota || 0,
                planView: _v6
              })]
            })]
          })
        }), !_v5 && (0, _v1.jsx)(_v73, {})]
      });
    },
    _v131 = ({
      showYearly: _v0,
      isBillingFreqToggleAvailable: _v1,
      badgePlan: _v2,
      showStrikePrice: _v3,
      isMobileBreakpoint: _v4,
      planView: _v5 = "individual",
      onSwitchView: _v6,
      businessTiers: _v7,
      showCrossSellCard: _v8 = !0
    }) => {
      let _v9 = (0, _v7.useContext)(_v31.OverridesContext),
        {
          plansData: _v10,
          isRepackagingData: _v11,
          hideFreePlan: _v12,
          hideIndividualPlans: _v13
        } = (0, _v7.useContext)(_v32.PlansDataContext),
        _v14 = (0, _v7.useRef)(null),
        _v15 = (0, _v7.useMemo)(() => _v10 ? _v9?.plans ? _v10.filter(_v0 => _v9.plans?.includes(_v0.tier)) : _v9?.excludedPlans ? _v10.filter(_v0 => !_v9.excludedPlans?.includes(_v0.tier)) : _v4 ? _v10 : _v10.length > _v30.maxVerticalCards ? _v10.slice(0, -1) : _v10 : [], [_v10, _v9, _v4]),
        _v16 = (0, _v7.useMemo)(() => _v10 && _v11 ? _v30.REPACKAGING_INDIVIDUAL_TIERS.reduce((_v0, _v1) => {
          if (_v12 && "free" === _v1) return _v0;
          let _v2 = _v10.find(_v0 => _v0.tier === _v1);
          return _v2 && _v0.push(_v2), _v0;
        }, []) : [], [_v10, _v11, _v12]),
        _v17 = (0, _v7.useMemo)(() => _v7 ?? ["professional", "studio", "enterprise"], [_v7]),
        _v18 = (0, _v7.useMemo)(() => _v10 && _v11 ? _v17.reduce((_v0, _v1) => {
          let _v2 = _v10.find(_v0 => _v0.tier === _v1);
          return _v2 && _v0.push(_v2), _v0;
        }, []) : [], [_v10, _v11, _v17]),
        _v19 = "individual" === _v5 ? _v16 : _v18,
        _v20 = (0, _v7.useCallback)(() => {
          let _v0 = _v14.current;
          if (!_v0) return;
          let _v1 = _v11 ? `[data-panel="${_v5}"] .card-section-container` : ".card-section-container",
            _v2 = new Map(),
            _v3 = Array.from(_v0.querySelectorAll(_v1));
          _v3.length && (_v3.forEach(_v0 => {
            Array.from(_v0.children).forEach((_v0, _v1) => {
              _v0.style.height = "auto", _v0.style.minHeight = "unset", _v2.set(_v1, Math.max(_v2.get(_v1) || 0, _v0.scrollHeight));
            });
          }), _v4 || _v3.forEach(_v0 => {
            Array.from(_v0.children).forEach((_v0, _v1) => {
              _v0 && _v0.style && (_v0.style.minHeight = (0, _v15.rem)(_v2.get(_v1)), _v0.style.height = "auto");
            });
          }));
        }, [_v11, _v5, _v4]);
      (0, _v7.useEffect)(() => {
        let _v0 = (0, _v62.default)(_v20, 300);
        return window.addEventListener("resize", _v0), () => {
          window.removeEventListener("resize", _v0);
        };
      }, [_v11, _v5, _v4, _v20]), (0, _v7.useEffect)(() => {
        if (_v11) {
          let _v0 = setTimeout(_v20, 450);
          return () => clearTimeout(_v0);
        }
      }, [_v5, _v11, _v20]);
      let _v21 = (0, _v7.useCallback)(_v0 => {
          _v0 && _v14.current && _v20();
        }, [_v20]),
        _v22 = (0, _v7.useCallback)((_v0, _v1) => _v0.map(_v0 => (0, _v1.jsx)(_v130, {
          showBadge: _v2 === _v0.tier,
          planData: _v0,
          showYearly: _v0,
          isBillingFreqToggleAvailable: _v1,
          showStrikePrice: _v3,
          isMobileBreakpoint: _v4,
          planView: _v1
        }, _v0.name)), [_v2, _v1, _v4, _v3, _v0]);
      if (!_v10) return null;
      if (_v11 && _v6) {
        let _v0 = "business" === _v5;
        if (_v13) {
          let _v0 = _v4 ? 0 : Math.max(0, 3 - _v18.length),
            _v1 = _v0 > 0 && (0, _v1.jsx)(_v13.Box, {
              display: "table-cell",
              width: `${25 * _v0 / 2}%`,
              minWidth: (0, _v15.rem)(165 * _v0),
              border: `${(0, _v15.rem)(8)} solid transparent`,
              "aria-hidden": !0
            });
          return (0, _v1.jsx)(_v13.Box, {
            marginTop: _v4 ? 0 : (0, _v15.rem)(50),
            padding: `0 ${(0, _v15.rem)(2)}`,
            ref: _v21,
            children: (0, _v1.jsxs)(_v13.Box, {
              margin: `${(0, _v15.rem)(24)} auto ${(0, _v15.rem)(38)}`,
              display: _v4 ? "block" : "table",
              width: "100%",
              maxWidth: "1440px",
              sx: _v4 ? void 0 : {
                tableLayout: "fixed"
              },
              ref: _v14,
              "data-panel": "business",
              children: [_v1, _v22(_v18, "business"), _v1]
            })
          });
        }
        return _v4 ? (0, _v1.jsx)(_v13.Box, {
          marginTop: 0,
          padding: `0 ${(0, _v15.rem)(2)}`,
          ref: _v21,
          children: (0, _v1.jsxs)(_v13.Box, {
            margin: `${(0, _v15.rem)(24)} auto ${(0, _v15.rem)(38)}`,
            width: "100%",
            ref: _v14,
            children: [_v22(_v19, _v5), _v8 && (0, _v1.jsx)(_v77, {
              targetView: _v0 ? "individual" : "business",
              onSwitch: _v6,
              isMobileBreakpoint: _v4
            })]
          })
        }) : (0, _v1.jsx)(_v13.Box, {
          marginTop: (0, _v15.rem)(50),
          padding: `0 ${(0, _v15.rem)(2)}`,
          ref: _v21,
          children: (0, _v1.jsx)(_v13.Box, {
            margin: `${(0, _v15.rem)(24)} auto ${(0, _v15.rem)(38)}`,
            overflow: "hidden",
            paddingTop: (0, _v15.rem)(40),
            maxWidth: "1440px",
            ref: _v14,
            children: (0, _v1.jsxs)(_v13.Box, {
              display: "flex",
              width: "200%",
              sx: {
                transition: "transform 400ms ease-in-out",
                transform: _v0 ? "translateX(-50%)" : "translateX(0)"
              },
              children: [(0, _v1.jsxs)(_v13.Box, {
                "data-panel": "individual",
                display: "table",
                flex: "0 0 50%",
                sx: {
                  tableLayout: "fixed",
                  "& > *:not([data-cross-sell])": {
                    verticalAlign: "top"
                  }
                },
                children: [_v22(_v16, "individual"), _v8 && (0, _v1.jsx)(_v77, {
                  targetView: "business",
                  onSwitch: _v6,
                  isMobileBreakpoint: _v4
                })]
              }), (0, _v1.jsxs)(_v13.Box, {
                "data-panel": "business",
                display: "table",
                flex: "0 0 50%",
                sx: {
                  tableLayout: "fixed",
                  "& > *:not([data-cross-sell])": {
                    verticalAlign: "top"
                  }
                },
                children: [_v8 && (0, _v1.jsx)(_v77, {
                  targetView: "individual",
                  onSwitch: _v6,
                  isMobileBreakpoint: _v4
                }), _v22(_v18, "business")]
              })]
            })
          })
        });
      }
      return _v15.length ? (0, _v1.jsxs)(_v13.Box, {
        marginTop: _v4 ? 0 : (0, _v15.rem)(50),
        padding: `0 ${(0, _v15.rem)(2)}`,
        ref: _v21,
        children: [(0, _v1.jsx)(_v13.Box, {
          margin: `${(0, _v15.rem)(24)} auto ${(0, _v15.rem)(38)}`,
          display: "table",
          width: "100%",
          maxWidth: "1440px",
          sx: {
            tableLayout: "fixed"
          },
          ref: _v14,
          children: _v22(_v15)
        }), _v10 && _v10?.length > _v30.maxVerticalCards && !_v9?.plans && !_v9?.excludedPlans?.includes("enterprise") && !_v4 && (0, _v1.jsx)(_v13.Box, {
          margin: "0 auto",
          maxWidth: "1440px",
          children: (0, _v1.jsx)(_v106, {
            showBadge: _v2 === _v10[_v10.length - 1]?.tier,
            planData: _v10[_v10.length - 1]
          })
        })]
      }) : null;
    };
  var _v132 = _v0.i(0);
  let _v133 = (0, _v5.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v134 = (0, _v5.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v135 = (0, _v5.default)(async () => await _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v136 = (0, _v5.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v137 = ["ES", "FR", "BR", "NL"],
    _v138 = _v0 => {
      let {
          context: _v1,
          campaign: _v2
        } = _v0,
        [_v3, _v4] = (0, _v7.useState)(!1),
        [_v5, _v6] = (0, _v7.useState)(void 0),
        [_v7, _v8] = (0, _v7.useState)(Date.now()),
        _v9 = (0, _v7.useContext)(_v11.ViewerContext),
        [_v10, _v11] = (0, _v7.useState)(!0),
        {
          areBusinessPlansEnforced: _v12,
          isWhitelistedForIndPlans: _v13,
          showIndividualPlans: _v14,
          hasSubmittedSurvey: _v15,
          canRequestEligibility: _v16
        } = (0, _v8.useB2BRepackagingContext)(),
        {
          open: _v17,
          modal: _v18
        } = (0, _v60.useIndividualEligibilityModal)({
          initialStep: _v15 && !_v13 ? "not_qualified" : void 0
        }),
        _v19 = (0, _v6.useSearchParams)(),
        _v20 = _v19 ? _v19.get("upsell") : null,
        _v21 = _v19 ? _v19.get("extole_coupon") : null,
        _v22 = _v19 ? _v19.get("promo_code_id") : null,
        _v23 = !!_v9?.user,
        _v24 = _v19?.get("paywall_trigger") ?? "unknown",
        _v25 = _v19?.get("paywall_location") ?? "unknown",
        _v26 = _v19?.get("paywall_feature") ?? "unknown",
        _v27 = (0, _v19.useCampaignIdOverride)() ?? _v2,
        {
          campaignId: _v28,
          isLoading: _v29
        } = function (_v0) {
          let _v1 = (0, _v7.useContext)(_v11.ViewerContext),
            _v2 = _v1?.user?.id,
            _v3 = _v1?.teamUser?.accountType?.toString() ?? _v1?.user?.account?.toString() ?? "",
            _v4 = _v34.RepackagedTiers.includes(_v3),
            _v5 = "free" === _v3,
            _v6 = !_v0 && !!_v2 && (_v4 || _v5),
            {
              data: _v7,
              isLoading: _v8,
              error: _v9
            } = (0, _v33.useGetUserSettingsBillingMembership)(() => _v6 ? {
              select: ["productId"],
              where: {
                userId: Number(_v2)
              }
            } : null);
          if (!_v6 || _v9) return {
            campaignId: null,
            isLoading: !1
          };
          if (_v8 || !_v7) return {
            campaignId: null,
            isLoading: !0
          };
          let _v10 = _v7.productId;
          return _v35.includes(_v10) ? {
            campaignId: "01KGPR56B56Z9H89TBNS98ASMT",
            isLoading: !1
          } : _v4 || 0 === _v10 ? {
            campaignId: "01KGEWQ5SAS6NW735YSBYK68XG",
            isLoading: !1
          } : {
            campaignId: null,
            isLoading: !1
          };
        }(_v27),
        _v30 = _v27 ?? _v28,
        _v31 = !!_v30 && _v19.REPACKAGING_CAMPAIGN_IDS.includes(_v30),
        {
          settings: _v32
        } = (0, _v20.useOrionSettings)(),
        _v33 = _v31 || _v32.allow_downgrade_from_pricing_page,
        {
          capabilities: {
            hasMonthlyBilling: _v34,
            hasPaid: _v35,
            inAppSubscription: _v36
          },
          ready: _v37
        } = (0, _v17.useCapability)(["hasMonthlyBilling", "hasPaid", "inAppSubscription"]),
        _v38 = _v37 && _v34,
        {
          isReverseFreeTrial: _v39
        } = function () {
          let _v0 = (0, _v22.useViewer)(),
            _v1 = _v0?.user?.id,
            {
              data: _v2,
              isLoading: _v3
            } = (0, _v21.useGetUser)(() => null == _v1 ? null : {
              select: _v23,
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
        } = (0, _v29.useWindowSize)(),
        _v41 = _v40 <= 0,
        [_v42, _v43] = (0, _v7.useState)(""),
        _v44 = (0, _v16.useColorMode)(),
        {
          trackPricingPagePeriodicityToggled: _v45
        } = (0, _v26.usePricingTracking)(),
        {
          trackIndividualEligibilityCtaClicked: _v46
        } = (0, _v24.useIndividualEligibilityTracking)(),
        _v47 = () => {
          _v12.BigPictureClient.sendEvent(new _v12.Event("vimeo.upgrade_action", 41, {
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
            device_type: (0, _v28.default)(),
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
          let _v0 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"].includes(_v57) ? _v57 : null,
            _v1 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"].includes(_v57) ? _v57 : "seat_subscription";
          _v12.BigPictureClient.sendEvent(new _v12.Event("vimeo.checkout_form_action", 17, {
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
      (0, _v7.useEffect)(() => {
        let _v0 = sessionStorage.getItem("redirectUrl");
        _v0 && ("/welcome" !== _v0 ? _v43(_v0) : _v43("/"));
      }, []);
      let _v48 = {
        bypassTierHierarchy: !0
      };
      _v21 && (_v48.promos = JSON.stringify({
        extole: _v21
      })), _v30 && (_v48.campaignId = _v30, _v48.usePaymentsService = !0), _v22 && (_v48.promoCodeId = _v22);
      let _v49 = (0, _v27.useGetSubscriptionPlansData)(_v5?.customSelfServeComapreTable ? _v5?.plans : void 0, void 0, void 0, _v48),
        {
          data: _v50
        } = function (_v0) {
          let _v1 = (0, _v7.useContext)(_v11.ViewerContext),
            {
              baseUrl: _v2,
              jwt: _v3
            } = (0, _v37.useGctlConfig)(),
            _v4 = !!_v1?.user,
            [_v5, _v6] = (0, _v7.useState)({
              data: void 0,
              error: void 0,
              isLoading: !1
            }),
            _v7 = [..._v0].sort().join(","),
            _v8 = (0, _v7.useCallback)(async () => {
              if (_v4 && 0 !== _v0.length) {
                _v6(_v0 => ({
                  ..._v0,
                  isLoading: !0,
                  error: void 0
                }));
                try {
                  let _v0 = `${_v2}/me/subscription_plans/usage_check?tiers=${_v7}`,
                    _v1 = await fetch(_v0, {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json",
                        ...(_v3 ? {
                          Authorization: `jwt ${_v3}`
                        } : {})
                      },
                      credentials: "same-origin"
                    });
                  if (!_v1.ok) throw Error(`Usage check failed: ${_v1.status}`);
                  let _v2 = await _v1.json(),
                    _v3 = (0, _v36.deepCamelCase)(_v2);
                  _v6({
                    data: _v3.data,
                    error: void 0,
                    isLoading: !1
                  });
                } catch (_v0) {
                  _v6({
                    data: void 0,
                    error: _v0 instanceof Error ? _v0 : Error(String(_v0)),
                    isLoading: !1
                  });
                }
              }
            }, [_v2, _v3, _v4, _v7, _v0.length]);
          return (0, _v7.useEffect)(() => {
            _v8();
          }, [_v8]), _v5;
        }(_v31 ? _v30.REPACKAGING_ALL_SHOWN_TIERS.filter(_v0 => "free" !== _v0) : []);
      (0, _v25.usePaywallTracking)({
        paywallTrigger: _v24,
        paywallLocation: _v25,
        paywallType: "page",
        paywallFeature: _v26,
        isVisible: void 0 !== _v49 && void 0 !== _v5
      });
      let _v51 = (_v0, _v1, _v2, _v3) => "plus" !== _v3 && "purchased" === _v0 && _v1 && _v2 ? "available" : _v0,
        _v52 = _v49?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased")?.tier,
        _v53 = function () {
          let _v0 = (0, _v7.useContext)(_v11.ViewerContext),
            _v1 = !!_v0?.user,
            {
              data: _v2
            } = (0, _v9.useGetMeSubscriptions)(() => _v1 ? {
              select: ["id"],
              query: {
                status: "SUBSCRIPTION_STATUS_ACTIVE"
              }
            } : null),
            _v3 = _v2?.data?.[0]?.id,
            {
              data: _v4
            } = (0, _v10.useGetMeSubscriptionScheduledOrder)(() => _v3 ? {
              select: ["productName"],
              where: {
                subscriptionId: _v3
              }
            } : null);
          if (_v4?.productName) return _v4.productName.toLowerCase().replace(/_([a-z])/g, (_v0, _v1) => _v1.toUpperCase());
        }(),
        _v54 = _v33 ? _v53 : void 0,
        _v55 = _v33 ? _v54 ?? _v52 : void 0,
        _v56 = !_v14,
        _v57 = (_v0 => {
          if (!_v0) return;
          let _v1 = _v5?.plans ? [..._v0] : _v49 ? [..._v49] : [],
            _v2 = ["free", "starter", "basic", "plus", "customSelfServe", "proSolution", "production"];
          _v31 && _v2.push("creator");
          let _v3 = _v55 ? _v30.TIER_RANK[_v55] ?? 0 : -1;
          for (let _v0 of _v1) {
            let {
              metadata: _v0,
              tier: _v1
            } = _v0;
            if ("available" === _v51(_v0?.interactions?.purchase?.status, _v10, _v0?.purchasedProduct?.isMonthly, _v1) && !_v2.includes(_v1) && (!_v31 || (_v30.TIER_RANK[_v1] ?? 0) > _v3)) return _v1;
          }
        })(_v49),
        _v58 = (0, _v7.useMemo)(() => "studio" === _v54 ? "business" : _v13 ? "individual" : "studio" === _v55 || "production" === _v55 ? "business" : "individual", [_v55, _v13, _v54]),
        [_v59, _v60] = (0, _v7.useState)(null),
        _v61 = _v56 ? "business" : _v59 ?? _v58,
        _v62 = () => {
          _v60("individual" === _v61 ? "business" : "individual");
        },
        _v63 = (0, _v7.useMemo)(() => "production" === _v55 ? ["studio", "production", "enterprise"] : _v56 ? ["studio", "enterprise"] : ["professional", "studio", "enterprise"], [_v55, _v56]),
        _v64 = !_v56 && (_v12 || "studio" !== _v55 && "production" !== _v55 || "individual" === _v61),
        _v65 = void 0 !== _v55 && _v30.REPACKAGING_PAID_PLANS.includes(_v55);
      (0, _v7.useEffect)(() => {
        _v54 && _v37 ? _v11(!_v38) : _v49?.some(_v0 => _v0.metadata?.purchasedProduct?.isMonthly === !1) ? _v11(!0) : _v37 && _v35 && _v38 && _v11(!1);
      }, [_v49, _v54, _v37, _v38, _v35]), (0, _v7.useEffect)(() => {
        _v20 && ["review", "copy_review_link"].includes(_v20) && _v9 && _v49 && (0, _v38.logViewUpsell)(_v20, _v9);
      }, [_v20, _v49, _v9]), (0, _v7.useEffect)(() => {
        !_v23 && _v5?.redirectLoggedOut && (window.location.href = "/log_in"), void 0 !== _v49 && (_v4((_v0 => {
          let _v1 = !1;
          for (let _v0 of _v0) if ("plus" !== _v0.tier) if (_v0.price.monthly) {
            _v1 = !0;
            break;
          } else _v1 = !1;
          return _v1;
        })(_v49)), _v7 && ((0, _v38.emitBPEvent)({
          action_type: "pageview",
          is_new_pricing: !0,
          upgrade_flags: window.location.search,
          loading_time: (Date.now() - _v7) / 0,
          path: window.location.href
        }), _v8(null))), _v5 && void 0 !== _v5.showMonthlyToggle && _v4(_v5.showMonthlyToggle);
      }, [_v49, _v7, _v5, _v23]), (0, _v7.useEffect)(() => {
        !_v23 && _v9?.location && _v137.includes(_v9.location.toUpperCase()) && (window.location.href = "/log_in");
      }, [_v23, _v9?.location]), (0, _v7.useEffect)(() => {
        void 0 === _v5 && (async _v0 => {
          _v6((0, (await _v0.A(0)).default)(_v0));
        })(_v1);
      }, [_v1, _v5]);
      let _v66 = !!(_v49 && _v49.some(_v0 => void 0 !== _v0.promotion) && _v10 && _v3 && !_v41);
      return null === _v9 || void 0 === _v49 || _v29 || !_v23 && _v5?.redirectLoggedOut ? (0, _v1.jsx)(_v61.default, {}) : (0, _v1.jsxs)(_v132.default, {
        isMobileBreakpoint: _v41,
        children: [void 0 !== _v5 && _v49 && (0, _v1.jsx)(_v31.OverridesContextProvider, {
          showYearly: _v10,
          viewer: _v9,
          overrides: _v5,
          children: (0, _v1.jsx)(_v32.PlansDataProvider, {
            overrides: _v5,
            plansData: _v49,
            isLoggedIn: _v23,
            capabilitiesReady: _v37,
            isPricingRedesign: _v31,
            effectiveTier: _v55,
            upcomingTier: _v54,
            usageCheckData: _v50,
            hideIndividualPlans: _v56,
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v13.Box, {
                children: (0, _v1.jsx)(_v59, {
                  isMobileBreakpoint: _v41,
                  redirectUrl: _v42
                })
              }), _v3 && !(_v35 && !_v38 && !_v39) && !_v54 && (_v31 || !_v41) && (0, _v1.jsx)(_v13.Box, {
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
                marginTop: (0, _v15.rem)(40),
                alignItems: "center",
                children: _v31 ? (0, _v1.jsx)(_v43, {
                  checked: _v10,
                  onClick: _v47,
                  isMobile: _v41
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v50, {
                    checked: _v10,
                    onClick: _v47
                  }), (0, _v1.jsx)(_v54, {
                    showYearly: _v10
                  })]
                })
              }), (0, _v1.jsx)(_v131, {
                showYearly: !!_v41 && !_v54 || _v10,
                isBillingFreqToggleAvailable: _v3 && !_v41,
                badgePlan: _v57,
                showStrikePrice: _v66,
                isMobileBreakpoint: _v41,
                planView: _v61,
                onSwitchView: _v62,
                businessTiers: _v63,
                showCrossSellCard: _v64
              }), _v31 && !_v41 && (0, _v1.jsxs)(_v1.Fragment, {
                children: [_v56 && _v16 && (0, _v1.jsx)(_v55, {
                  onRequestEligibility: () => {
                    _v46({
                      location: "upgrade_plan_banner"
                    }), _v17("upgrade_plan_banner");
                  }
                }), !_v56 && (0, _v1.jsx)(_v55, {
                  planView: _v61,
                  onSwitchView: _v62
                })]
              }), (0, _v1.jsxs)(_v13.Box, {
                maxWidth: (0, _v15.rem)(0),
                margin: `${(0, _v15.rem)(4)} auto`,
                padding: _v41 ? `${(0, _v15.rem)(0)} ${(0, _v15.rem)(24)}` : `${(0, _v15.rem)(75)} ${(0, _v15.rem)(28)}`,
                minHeight: _v41 ? "" : (0, _v15.rem)(240),
                children: [_v41 && (0, _v1.jsx)(_v14.Text, {
                  textAlign: "center",
                  marginBottom: (0, _v15.rem)(24),
                  variant: "heading-lg",
                  children: (0, _v18.translate)({
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
                }), (0, _v1.jsx)(_v135, {})]
              }), !_v41 && (0, _v1.jsx)(_v133, {
                showYearly: _v10,
                badgePlan: _v57,
                theme: _v44.colorMode,
                filteredTiers: _v31 ? [...("individual" !== _v61 || _v56 ? _v63 : _v30.REPACKAGING_INDIVIDUAL_TIERS.filter(_v0 => "free" !== _v0 || !_v65))] : void 0
              }), _v5.terms && (0, _v1.jsx)(_v13.Box, {
                maxWidth: (0, _v15.rem)(0),
                margin: `${(0, _v15.rem)(4)} auto`,
                padding: _v41 ? `${(0, _v15.rem)(0)} ${(0, _v15.rem)(24)}` : `${(0, _v15.rem)(75)} ${(0, _v15.rem)(28)}`,
                children: (0, _v1.jsx)(_v14.Text, {
                  variant: "body-xl",
                  children: _v5.terms
                })
              }), !_v5.hideFaq && (0, _v1.jsx)(_v134, {
                isMobileBreakpoint: _v41
              })]
            })
          })
        }), _v36 && (0, _v1.jsx)(_v136, {}), _v18]
      });
    };
  var _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  function _v141() {
    let [_v0] = (0, _v3.useQueryParams)({
      v: _v2.NumberParam,
      context: (0, _v2.createEnumParam)(Object.values(_v139.CONTEXT)),
      campaign: _v2.StringParam
    });
    return (0, _v1.jsx)(_v138, {
      version: _v0.v,
      context: _v0.context,
      campaign: _v0.campaign
    });
  }
  _v141.getLayout = _v0 => (0, _v1.jsxs)(_v140.QueryParamProvider, {
    children: [_v0, (0, _v1.jsx)(_v4.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSG", 0, !0, "default", 0, _v141], 0);
}