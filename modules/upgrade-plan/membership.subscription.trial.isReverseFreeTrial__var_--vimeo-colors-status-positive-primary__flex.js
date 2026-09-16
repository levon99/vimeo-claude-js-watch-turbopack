{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  _v0.i(0);
  var _v11 = _v0.i(0),
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
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = ["membership.subscription.trial.isReverseFreeTrial"];
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  let _v68 = () => (0, _v9.jsx)(_v28.Box, {
      backgroundColor: "var(--vimeo-colors-status-positive-primary)",
      borderRadius: (0, _v30.rem)(6),
      width: (0, _v30.rem)(64),
      height: (0, _v30.rem)(20),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v9.jsx)(_v29.Text, {
        variant: "body-xs",
        fontWeight: 500,
        whiteSpace: "nowrap",
        style: {
          color: "var(--vimeo-colors-text-button-inverted)"
        },
        children: (0, _v15.translate)({
          singular: "Save {PERCENT}%",
          replacements: {
            PERCENT: 40
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
      })
    }),
    _v69 = ({
      children: _v0,
      isSelected: _v1
    }) => (0, _v9.jsxs)(_v28.Box, {
      position: "relative",
      children: [(0, _v9.jsx)(_v29.Text, {
        variant: "heading-sm",
        visibility: "hidden",
        "aria-hidden": !0,
        children: _v0
      }), (0, _v9.jsx)(_v29.Text, {
        variant: _v1 ? "heading-sm" : "body-lg",
        color: "text.primary",
        position: "absolute",
        top: 0,
        left: 0,
        children: _v0
      })]
    }),
    _v70 = ({
      onClick: _v0,
      checked: _v1,
      isMobile: _v2
    }) => (0, _v9.jsxs)(_v66.Flex, {
      alignItems: _v2 ? "flex-end" : "center",
      gap: (0, _v30.rem)(16),
      justifyContent: "center",
      children: [(0, _v9.jsx)(_v69, {
        isSelected: !_v1,
        children: (0, _v15.translate)({
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
      }), (0, _v9.jsx)(_v67.Switch, {
        size: "lg",
        isChecked: _v1,
        onChange: _v0,
        "aria-label": "Toggle billing frequency"
      }), (0, _v9.jsxs)(_v66.Flex, {
        direction: _v2 ? "column-reverse" : "row",
        alignItems: _v2 ? "flex-start" : "center",
        gap: (0, _v30.rem)(4),
        children: [(0, _v9.jsx)(_v69, {
          isSelected: _v1,
          children: (0, _v15.translate)({
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
        }), (0, _v9.jsx)(_v68, {})]
      })]
    });
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = _v72.default.div.withConfig({
      displayName: "styles__StyledToggle",
      componentId: "sc-c583c415-0"
    })`
  color: var(--vimeo-colors-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  border-width: ${(0, _v71.rem)(2)};
  border-color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v71.rem)(8)} 0;
  transition: all 250ms ease-in-out 0s;
  position: relative;
  border-radius: 3rem;
  margin: 0 ${(0, _v71.rem)(8)} 0 ${(0, _v71.rem)(8)};
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? "#181E24" : "none"};
  &::after {
    position: absolute;
    left: ${(0, _v71.rem)(4)};
    right: auto;
    content: '';
    display: block;
    background: var(--vimeo-colors-text-primary);
    opacity: 1;
    transition: all 250ms ease-in-out 0s;
    width: 50%;
    height: ${(0, _v71.rem)(30)};
    border-radius: ${(0, _v71.rem)(20)};
  }
`,
    _v74 = _v72.default.div.withConfig({
      displayName: "styles__ToggleContainer",
      componentId: "sc-c583c415-1"
    })`
  display: inline-block;
  &:active > ${_v73} {
    background-color: rgba(20, 26, 32, 0.3);
  }
`,
    _v75 = _v72.default.input.withConfig({
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
  &:checked ~ ${_v73} {
    &::after {
      transform: translateX(calc(100% - 7px));
    }
  }
`,
    _v76 = _v72.default.p.withConfig({
      displayName: "styles__ToggleLabel",
      componentId: "sc-c583c415-3"
    })`
  z-index: 1;
  font-size: ${(0, _v71.rem)(16)};
  letter-spacing: ${(0, _v71.rem)(-.48)};
  white-space: nowrap;
  text-align: center;
  padding: 0 ${(0, _v71.rem)(20)};
  width: ${({
      width: _v0
    }) => _v0 && (0, _v71.rem)(_v0)};
  ${({
      checked: _v0
    }) => _v0 && _v72.css`
      color: var(--vimeo-colors-text-button-inverted);
    `};
`,
    _v77 = ({
      onClick: _v0,
      checked: _v1
    }) => {
      let [_v2, _v3] = (0, _v19.useState)(""),
        _v4 = (0, _v19.useRef)(null),
        _v5 = (0, _v19.useCallback)(() => {
          let _v0 = _v4.current;
          if (!_v0) return;
          let _v1 = _v0.children;
          if (_v1.length && !_v2) {
            let _v0 = 0;
            for (let _v0 of _v1) _v0 && _v0?.offsetWidth > _v0 && (_v0 = _v0?.offsetWidth);
            _v3(_v0);
          }
        }, [_v4, _v2]);
      return (0, _v19.useEffect)(() => {
        _v5();
      }, [_v5]), (0, _v9.jsx)(_v9.Fragment, {
        children: (0, _v9.jsxs)(_v74, {
          onClick: _v0,
          children: [(0, _v9.jsx)(_v75, {
            checked: _v1,
            type: "checkbox"
          }), (0, _v9.jsxs)(_v73, {
            ref: _v4,
            children: [(0, _v9.jsx)(_v76, {
              checked: !_v1,
              width: _v2,
              children: (0, _v15.translate)({
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
            }), (0, _v9.jsx)(_v76, {
              checked: _v1,
              width: _v2,
              children: (0, _v15.translate)({
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
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = _v72.default.div.withConfig({
      displayName: "styles__TagContainer",
      componentId: "sc-2420be19-0"
    })`
  background: ${_v0 => (0, _v79.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
  padding: ${(0, _v71.rem)(4)} ${(0, _v71.rem)(6)} ${(0, _v71.rem)(4)} ${(0, _v71.rem)(8)};
  border-radius: ${(0, _v71.rem)(12)};
  color: ${_v0 => (0, _v79.getTagColor)(_v0.showYearly, _v0.theme.name)};
  font-size: ${(0, _v71.rem)(16)};
  font-weight: 400;
  line-height: 130%;
  letter-spacing: ${(0, _v71.rem)(-.32)};
  position: relative;
  margin-left: ${(0, _v71.rem)(9)};
  margin-bottom: 0px;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-right: ${(0, _v71.rem)(6)} solid
      ${_v0 => (0, _v79.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
    border-top: ${(0, _v71.rem)(4)} solid transparent;
    border-bottom: ${(0, _v71.rem)(4)} solid transparent;
    border-left: 0px;
    top: ${(0, _v71.rem)(10)};
    left: ${(0, _v71.rem)(-6)};
  }
`,
    _v81 = ({
      showYearly: _v0
    }) => ((0, _v78.useIsBokeh)(), (0, _v9.jsx)(_v9.Fragment, {
      children: (0, _v9.jsx)(_v80, {
        showYearly: _v0,
        children: (0, _v9.jsx)("p", {
          children: (0, _v15.translate)({
            singular: "Save {PERCENT}%",
            replacements: {
              PERCENT: 40
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
        })
      })
    })),
    _v82 = _v0 => {
      let _v1,
        _v2,
        _v3,
        {
          trackPricingPageSeeBusinessTiersClicked: _v4,
          trackPricingPageSeeIndividualTiersClicked: _v5
        } = (0, _v45.usePricingTracking)();
      if (_v0.onRequestEligibility) _v1 = (0, _v15.translate)({
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
      }), _v2 = (0, _v15.translate)({
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
        _v1 = _v0 ? (0, _v15.translate)({
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
        }) : (0, _v15.translate)({
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
        }), _v2 = _v0 ? (0, _v15.translate)({
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
        }) : (0, _v15.translate)({
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
      return (0, _v9.jsx)(_v28.Box, {
        maxWidth: (0, _v30.rem)(0),
        margin: "0 auto",
        padding: `${(0, _v30.rem)(24)} ${(0, _v30.rem)(28)}`,
        textAlign: "center",
        background: "var(--vimeo-colors-fill-surface)",
        borderRadius: "1.5rem",
        children: (0, _v9.jsxs)(_v29.Text, {
          variant: "body-xl",
          children: [_v1, " ", (0, _v9.jsx)(_v29.Text, {
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
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  function _v97() {
    return (_v97 = Object.assign.bind()).apply(null, arguments);
  }
  let _v98 = function (_v0) {
    return _v19.createElement("svg", _v97({
      preserveAspectRatio: "none",
      overflow: "visible",
      width: 549.8,
      height: 549.8,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      display: "block"
    }, _v0), _v1 || (_v1 = _v19.createElement("g", {
      filter: "url(#paywall-glow-blue_svg__filter0_f_0_4)"
    }, _v19.createElement("circle", {
      cx: 274.9,
      cy: 274.9,
      r: 146.5,
      fill: "#3767EA",
      fillOpacity: .2
    }))), _v2 || (_v2 = _v19.createElement("defs", null, _v19.createElement("filter", {
      id: "paywall-glow-blue_svg__filter0_f_0_4",
      x: 0,
      y: 0,
      width: 549.8,
      height: 549.8,
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, _v19.createElement("feFlood", {
      floodOpacity: 0,
      result: "BackgroundImageFix"
    }), _v19.createElement("feBlend", {
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), _v19.createElement("feGaussianBlur", {
      stdDeviation: 64.2,
      result: "effect1_foregroundBlur_0_4"
    })))));
  };
  function _v99() {
    return (_v99 = Object.assign.bind()).apply(null, arguments);
  }
  let _v100 = function (_v0) {
      return _v19.createElement("svg", _v99({
        preserveAspectRatio: "none",
        overflow: "visible",
        width: 436.8,
        height: 436.8,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        display: "block"
      }, _v0), _v3 || (_v3 = _v19.createElement("g", {
        filter: "url(#paywall-glow-purple_svg__filter0_f_0_4)"
      }, _v19.createElement("circle", {
        cx: 218.4,
        cy: 218.4,
        r: 90,
        fill: "#8E21CC",
        fillOpacity: .2
      }))), _v4 || (_v4 = _v19.createElement("defs", null, _v19.createElement("filter", {
        id: "paywall-glow-purple_svg__filter0_f_0_4",
        x: 0,
        y: 0,
        width: 436.8,
        height: 436.8,
        filterUnits: "userSpaceOnUse",
        colorInterpolationFilters: "sRGB"
      }, _v19.createElement("feFlood", {
        floodOpacity: 0,
        result: "BackgroundImageFix"
      }), _v19.createElement("feBlend", {
        in: "SourceGraphic",
        in2: "BackgroundImageFix",
        result: "shape"
      }), _v19.createElement("feGaussianBlur", {
        stdDeviation: 64.2,
        result: "effect1_foregroundBlur_0_4"
      })))));
    },
    _v101 = {
      left: -132.7,
      top: -153.4,
      size: 325.26
    },
    _v102 = {
      left: 198.4,
      top: -30,
      size: 274.9
    },
    _v103 = {
      left: -273.4,
      top: -288.4,
      size: 549.8
    },
    _v104 = {
      left: 252.6,
      top: -75.4,
      size: 436.8
    };
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = "bundle-paywall-banner",
    _v111 = `@container ${_v110} (max-width: ${(0, _v30.rem)(480)})`,
    _v112 = `@container ${_v110} (max-width: ${(0, _v30.rem)(400)})`,
    _v113 = `
  'cluster heading'
  'cluster price'
  'link link'
`,
    _v114 = `
  'heading heading'
  'cluster price'
  'link link'
`,
    _v115 = `
  'heading'
  'cluster'
  'price'
  'link'
`,
    _v116 = `@container ${_v110} (max-width: ${(0, _v30.rem)(340)})`,
    _v117 = ({
      bundleType: _v0,
      price: _v1,
      fullPrice: _v2,
      onSeeAllClick: _v3,
      surface: _v4 = "paywall",
      maxWidth: _v5
    }) => {
      let _v6 = (0, _v106.getBundleActivationCluster)(_v0),
        _v7 = (0, _v94.getBundleProductOrder)(_v0).length;
      return (0, _v9.jsxs)(_v66.Flex, {
        direction: "column",
        width: "100%",
        maxWidth: void 0 !== _v5 ? (0, _v30.rem)(_v5) : void 0,
        marginX: "auto",
        padding: (0, _v30.rem)(12),
        background: _v105.BUNDLE_SURFACE_BACKGROUND,
        border: _v105.BUNDLE_SURFACE_BORDER,
        borderRadius: (0, _v30.rem)(16),
        overflow: "hidden",
        position: "relative",
        sx: {
          containerType: "inline-size",
          containerName: _v110
        },
        children: [(0, _v9.jsx)(_v108.BannerGlow, {
          geometry: _v103,
          asset: _v98
        }), (0, _v9.jsx)(_v108.BannerGlow, {
          geometry: _v104,
          asset: _v100
        }), (0, _v9.jsxs)(_v28.Box, {
          position: "relative",
          display: "grid",
          width: "100%",
          gap: (0, _v30.rem)(12),
          gridTemplateAreas: _v113,
          gridTemplateColumns: "auto minmax(0, 1fr)",
          sx: {
            [_v111]: {
              gridTemplateAreas: _v114,
              gridTemplateColumns: "auto minmax(0, 1fr)"
            },
            [_v112]: {
              gridTemplateAreas: _v115,
              gridTemplateColumns: "minmax(0, 1fr)",
              justifyItems: "center"
            }
          },
          children: [(0, _v9.jsx)(_v28.Box, {
            gridArea: "cluster",
            alignSelf: "center",
            sx: {
              [_v112]: {
                display: "flex",
                justifyContent: "center"
              },
              [_v116]: {
                display: "none"
              }
            },
            children: (0, _v9.jsx)(_v109.TiltedTileCluster, {
              tileSize: 48.34,
              clusterTiles: _v6.clusterTiles,
              otherProductsCount: _v6.otherProductsCount,
              infoTooltip: _v6.infoTooltip
            })
          }), (0, _v9.jsx)(_v28.Box, {
            gridArea: "heading",
            sx: {
              justifySelf: "end",
              [_v111]: {
                justifySelf: "start"
              },
              [_v112]: {
                justifySelf: "center",
                textAlign: "center"
              }
            },
            children: (0, _v9.jsx)(_v29.Text, {
              variant: "heading-sm",
              color: "text-primary",
              letterSpacing: (0, _v30.rem)(-.48),
              children: "offer" === _v4 ? String((0, _v92.translate)({
                singular: "Premium access to {count} product",
                plural: "Premium access to {count} products",
                count: _v7,
                replacements: {
                  count: `${_v7}`
                },
                dictionary: {
                  es: {
                    singular: "Acceso premium a {count} producto",
                    plural: "Acceso premium a {count} productos"
                  },
                  "de-DE": {
                    singular: "Premiumzugang für {count} Produkt",
                    plural: "Premiumzugang für {count} Produkte"
                  },
                  "fr-FR": {
                    singular: "Accès premium à {count} produit",
                    plural: "Accès premium à {count} produits"
                  },
                  "ja-JP": {
                    singular: "{count}件の製品へのプレミアムアクセス",
                    plural: "{count}件の製品へのプレミアムアクセス"
                  },
                  "ko-KR": {
                    singular: "{count}개 상품에 대한 프리미엄 액세스",
                    plural: "{count}개 상품에 대한 프리미엄 액세스"
                  },
                  "pt-BR": {
                    singular: "Acesso premium a {count} produto",
                    plural: "Acesso premium a {count} produtos"
                  },
                  "zh-CN": {
                    singular: "为 {count} 个产品提供高级访问权限",
                    plural: "为 {count} 个产品提供高级访问权限"
                  }
                }
              })) : String((0, _v92.translate)({
                singular: "1 premium subscription included",
                plural: "{count} premium subscriptions included",
                count: _v7,
                replacements: {
                  count: `${_v7}`
                },
                dictionary: {
                  es: {
                    singular: "1 suscripción premium incluida",
                    plural: "{count} suscripciones premium incluidas"
                  },
                  "de-DE": {
                    singular: "1 Premium-Abonnement enthalten",
                    plural: "{count} Premium-Abonnements enthalten"
                  },
                  "fr-FR": {
                    singular: "1 abonnement premium inclus",
                    plural: "{count} abonnements premium inclus"
                  },
                  "ja-JP": {
                    singular: "プレミアムサブスクリプションが1つ含まれます",
                    plural: "{count}件のプレミアムサブスクリプションが含まれます"
                  },
                  "ko-KR": {
                    singular: "프리미엄 구독 1개 포함",
                    plural: "{count}개의 프리미엄 구독 포함"
                  },
                  "pt-BR": {
                    singular: "1 assinatura premium incluída",
                    plural: "{count} assinaturas premium incluídas"
                  },
                  "zh-CN": {
                    singular: "包含 1 个高级订阅",
                    plural: "包含 {count} 个高级订阅"
                  }
                }
              }))
            })
          }), (0, _v9.jsxs)(_v66.Flex, {
            gridArea: "price",
            alignItems: "baseline",
            justifyContent: "flex-end",
            gap: (0, _v30.rem)(6),
            flexWrap: "wrap",
            sx: {
              justifySelf: "end",
              [_v111]: {
                justifySelf: "end"
              },
              [_v112]: {
                justifySelf: "center",
                justifyContent: "center"
              }
            },
            children: [(0, _v9.jsxs)(_v66.Flex, {
              alignItems: "baseline",
              gap: (0, _v30.rem)(6),
              children: [(0 !== _v1.amount || "offer" !== _v4) && (0, _v9.jsx)(_v29.Text, {
                variant: "heading-md",
                color: "text-primary",
                letterSpacing: (0, _v30.rem)(-.8),
                children: (0, _v107.formatBundlePrice)(_v1)
              }), void 0 !== _v2 && (0 !== _v1.amount || "offer" !== _v4) && (0, _v9.jsx)(_v29.Text, {
                variant: "body-lg",
                color: _v105.GRAY_600,
                letterSpacing: (0, _v30.rem)(-.42),
                sx: {
                  textDecoration: "line-through"
                },
                children: (0, _v107.formatBundlePrice)(_v2)
              })]
            }), (0, _v9.jsxs)(_v95.Badge, {
              variant: "info",
              size: "sm",
              gap: "4px",
              children: [(0, _v9.jsx)(_v96.Gift, {
                boxSize: "14px"
              }), 0 === _v1.amount ? String((0, _v92.translate)({
                singular: "No extra cost",
                dictionary: {
                  es: {
                    singular: "Sin costo adicional"
                  },
                  "de-DE": {
                    singular: "Keine zusätzlichen Kosten"
                  },
                  "fr-FR": {
                    singular: "Sans frais supplémentaires"
                  },
                  "ja-JP": {
                    singular: "追加料金なし"
                  },
                  "ko-KR": {
                    singular: "추가 비용 없음"
                  },
                  "pt-BR": {
                    singular: "Sem custo adicional"
                  },
                  "zh-CN": {
                    singular: "无需额外费用"
                  }
                }
              })) : String((0, _v92.translate)({
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
              }))]
            })]
          }), (0, _v9.jsx)(_v66.Flex, {
            gridArea: "link",
            justifyContent: "center",
            children: (0, _v9.jsx)(_v85.Button, {
              variant: "tertiary",
              size: "xs",
              sx: {
                textDecoration: "underline",
                textUnderlineOffset: (0, _v30.rem)(2)
              },
              onClick: _v3,
              children: "offer" === _v4 ? String((0, _v92.translate)({
                singular: "Learn more",
                dictionary: {
                  es: {
                    singular: "Ver más"
                  },
                  "de-DE": {
                    singular: "Mehr dazu"
                  },
                  "fr-FR": {
                    singular: "En savoir plus "
                  },
                  "ja-JP": {
                    singular: "詳細を見る"
                  },
                  "ko-KR": {
                    singular: "자세히 보기"
                  },
                  "pt-BR": {
                    singular: "Saiba mais"
                  },
                  "zh-CN": {
                    singular: "了解更多"
                  }
                }
              })) : String((0, _v92.translate)({
                singular: "See all the products",
                dictionary: {
                  es: {
                    singular: "Ver todos los productos"
                  },
                  "de-DE": {
                    singular: "Alle Produkte ansehen"
                  },
                  "fr-FR": {
                    singular: "Voir tous les produits"
                  },
                  "ja-JP": {
                    singular: "すべての製品を見る"
                  },
                  "ko-KR": {
                    singular: "모든 제품 보기"
                  },
                  "pt-BR": {
                    singular: "Veja todos os produtos"
                  },
                  "zh-CN": {
                    singular: "查看所有产品"
                  }
                }
              }))
            })
          })]
        })]
      });
    },
    _v118 = {
      amount: 0,
      currency: "USD"
    },
    _v119 = ({
      isOpen: _v0,
      onClose: _v1,
      onAddBundle: _v2,
      onContinueWithoutBundle: _v3,
      bundleType: _v4,
      price: _v5,
      fullPrice: _v6
    }) => {
      let _v7 = (0, _v94.getBundleProductOrder)(_v4).length;
      return (0, _v9.jsxs)(_v86.Modal, {
        isOpen: _v0,
        onClose: _v1,
        isCentered: !0,
        size: "lg",
        children: [(0, _v9.jsx)(_v91.ModalOverlay, {}), (0, _v9.jsxs)(_v89.ModalContent, {
          padding: (0, _v30.rem)(24),
          children: [(0, _v9.jsx)(_v88.ModalCloseButton, {
            "aria-label": String((0, _v92.translate)({
              singular: "Close",
              dictionary: {
                es: {
                  singular: "Cerrar"
                },
                "de-DE": {
                  singular: "Schließen"
                },
                "fr-FR": {
                  singular: "Fermer "
                },
                "ja-JP": {
                  singular: "閉じる"
                },
                "ko-KR": {
                  singular: "닫기"
                },
                "pt-BR": {
                  singular: "Fechar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            }))
          }), (0, _v9.jsx)(_v90.ModalHeader, {
            padding: (0, _v30.rem)(0),
            paddingRight: (0, _v30.rem)(40),
            children: (0, _v9.jsx)(_v29.Text, {
              as: "h2",
              variant: "heading-lg",
              fontSize: (0, _v30.rem)(30),
              lineHeight: 1.2,
              letterSpacing: (0, _v30.rem)(-1.2),
              color: "text-primary",
              children: (0, _v93.getBundleOfferModalTitle)(_v5, _v7)
            })
          }), (0, _v9.jsx)(_v87.ModalBody, {
            padding: (0, _v30.rem)(0),
            marginTop: (0, _v30.rem)(24),
            children: (0, _v9.jsxs)(_v66.Flex, {
              direction: "column",
              gap: (0, _v30.rem)(8),
              children: [(0, _v9.jsx)(_v117, {
                bundleType: _v4,
                surface: "offer",
                price: _v5 ?? _v118,
                fullPrice: _v6,
                onSeeAllClick: () => {
                  _v1(), window.location.assign(_v84.BUNDLE_LIBRARY_PATH);
                }
              }), (0, _v9.jsx)(_v85.Button, {
                variant: "brand",
                size: "lg",
                width: "100%",
                onClick: _v2,
                children: (0, _v93.getBundleOfferAddCtaLabel)(_v5)
              }), (0, _v9.jsx)(_v85.Button, {
                variant: "tertiary",
                size: "lg",
                width: "100%",
                onClick: _v3,
                children: (0, _v93.getBundleOfferDismissCtaLabel)()
              })]
            })
          })]
        })]
      });
    };
  function _v120() {
    return (_v120 = Object.assign.bind()).apply(null, arguments);
  }
  let _v121 = function (_v0) {
    return _v19.createElement("svg", _v120({
      preserveAspectRatio: "none",
      overflow: "visible",
      width: 325.259,
      height: 325.259,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      display: "block"
    }, _v0), _v5 || (_v5 = _v19.createElement("g", {
      filter: "url(#glow-blue_svg__filter0_f_0_130)"
    }, _v19.createElement("circle", {
      cx: 162.629,
      cy: 162.629,
      r: 81.818,
      fill: "#3767EA",
      fillOpacity: .2
    }))), _v6 || (_v6 = _v19.createElement("defs", null, _v19.createElement("filter", {
      id: "glow-blue_svg__filter0_f_0_130",
      x: 0,
      y: 0,
      width: 325.259,
      height: 325.259,
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, _v19.createElement("feFlood", {
      floodOpacity: 0,
      result: "BackgroundImageFix"
    }), _v19.createElement("feBlend", {
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), _v19.createElement("feGaussianBlur", {
      stdDeviation: 40.406,
      result: "effect1_foregroundBlur_0_130"
    })))));
  };
  function _v122() {
    return (_v122 = Object.assign.bind()).apply(null, arguments);
  }
  let _v123 = function (_v0) {
    return _v19.createElement("svg", _v122({
      preserveAspectRatio: "none",
      overflow: "visible",
      width: 274.909,
      height: 274.909,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      display: "block"
    }, _v0), _v7 || (_v7 = _v19.createElement("g", {
      filter: "url(#glow-purple_svg__filter0_f_0_125)"
    }, _v19.createElement("circle", {
      cx: 137.455,
      cy: 137.455,
      r: 56.643,
      fill: "#8E21CC",
      fillOpacity: .2
    }))), _v8 || (_v8 = _v19.createElement("defs", null, _v19.createElement("filter", {
      id: "glow-purple_svg__filter0_f_0_125",
      x: 0,
      y: 0,
      width: 274.909,
      height: 274.909,
      filterUnits: "userSpaceOnUse",
      colorInterpolationFilters: "sRGB"
    }, _v19.createElement("feFlood", {
      floodOpacity: 0,
      result: "BackgroundImageFix"
    }), _v19.createElement("feBlend", {
      in: "SourceGraphic",
      in2: "BackgroundImageFix",
      result: "shape"
    }), _v19.createElement("feGaussianBlur", {
      stdDeviation: 40.406,
      result: "effect1_foregroundBlur_0_125"
    })))));
  };
  var _v124 = _v0.i(0),
    _v125 = _v0.i(0);
  let _v126 = [53.14, 50.41, 46.46, 43.6],
    _v127 = ({
      bundleType: _v0,
      isBundleActive: _v1,
      onToggleBundle: _v2,
      price: _v3,
      fullPrice: _v4,
      onLearnMoreClick: _v5,
      maxWidth: _v6
    }) => {
      let _v7 = (0, _v106.getBundleActivationCluster)(_v0),
        _v8 = (0, _v94.getBundleProductOrder)(_v0).length;
      return (0, _v9.jsxs)(_v28.Box, {
        position: "relative",
        width: "100%",
        maxWidth: void 0 !== _v6 ? (0, _v30.rem)(_v6) : void 0,
        marginX: "auto",
        background: _v105.BUNDLE_SURFACE_BACKGROUND,
        border: _v105.BUNDLE_SURFACE_BORDER,
        borderRadius: (0, _v30.rem)(24),
        overflow: "hidden",
        paddingX: {
          base: (0, _v30.rem)(20),
          md: (0, _v30.rem)(40)
        },
        paddingY: {
          base: (0, _v30.rem)(24),
          md: (0, _v30.rem)(20)
        },
        children: [(0, _v9.jsx)(_v108.BannerGlow, {
          geometry: _v101,
          asset: _v121
        }), (0, _v9.jsx)(_v108.BannerGlow, {
          geometry: _v102,
          asset: _v123
        }), (0, _v9.jsx)(_v28.Box, {
          width: "100%",
          sx: {
            containerType: "inline-size",
            containerName: "bundle-toggle"
          },
          children: (0, _v9.jsxs)(_v66.Flex, {
            width: "100%",
            position: "relative",
            alignItems: "center",
            gap: (0, _v30.rem)(32),
            flexWrap: "wrap",
            children: [(0, _v9.jsx)(_v28.Box, {
              height: (0, _v30.rem)(72),
              flex: "0 0 auto",
              sx: {
                [`@container bundle-toggle (max-width: ${(0, _v30.rem)(599)})`]: {
                  display: "none"
                },
                [`@container bundle-toggle (min-width: ${(0, _v30.rem)(600)})`]: {
                  display: "block"
                }
              },
              children: (0, _v9.jsx)(_v125.BundleTileCluster, {
                hostTileSize: 68,
                partnerTileSizes: _v126,
                clusterTiles: _v7.clusterTiles,
                otherProductsCount: _v7.otherProductsCount,
                infoTooltip: _v7.infoTooltip
              })
            }), (0, _v9.jsxs)(_v66.Flex, {
              flex: "1 1 34rem",
              minWidth: "min(100%, 34rem)",
              minHeight: (0, _v30.rem)(72),
              gap: (0, _v30.rem)(32),
              alignItems: "center",
              flexWrap: "wrap",
              sx: {
                [`@container bundle-toggle (max-width: ${(0, _v30.rem)(599)})`]: {
                  gap: (0, _v30.rem)(16)
                }
              },
              children: [(0, _v9.jsxs)(_v66.Flex, {
                flex: "1 1 24rem",
                minWidth: 0,
                direction: "column",
                gap: (0, _v30.rem)(6),
                children: [(0, _v9.jsxs)(_v66.Flex, {
                  alignItems: "center",
                  gap: (0, _v30.rem)(12),
                  flexWrap: "wrap",
                  children: [(0, _v9.jsx)(_v29.Text, {
                    variant: "heading-lg",
                    color: "text-primary",
                    fontSize: {
                      base: (0, _v30.rem)(20),
                      md: (0, _v30.rem)(24)
                    },
                    letterSpacing: {
                      base: (0, _v30.rem)(-.8),
                      md: (0, _v30.rem)(-.96)
                    },
                    children: (0, _v93.getBundleToggleBannerHeading)(_v3, _v8)
                  }), null === _v3 ? (0, _v9.jsxs)(_v95.Badge, {
                    variant: "info",
                    size: "sm",
                    gap: "4px",
                    children: [(0, _v9.jsx)(_v96.Gift, {
                      boxSize: "14px"
                    }), (0, _v93.getBundlePriceBadgeLabel)(null)]
                  }) : (0, _v9.jsxs)(_v66.Flex, {
                    background: "status-info-primary",
                    borderRadius: (0, _v30.rem)(8),
                    paddingX: (0, _v30.rem)(8),
                    paddingY: (0, _v30.rem)(2),
                    alignItems: "baseline",
                    gap: (0, _v30.rem)(4),
                    flexShrink: 0,
                    children: [(0, _v9.jsx)(_v29.Text, {
                      color: "text-button-inverted",
                      fontSize: (0, _v30.rem)(16),
                      letterSpacing: (0, _v30.rem)(-.48),
                      children: (0, _v107.formatBundlePrice)(_v3)
                    }), void 0 !== _v4 && (0, _v9.jsx)(_v29.Text, {
                      color: "text-button-inverted",
                      fontSize: (0, _v30.rem)(14),
                      letterSpacing: (0, _v30.rem)(-.42),
                      sx: {
                        textDecoration: "line-through",
                        opacity: .8
                      },
                      children: (0, _v107.formatBundlePrice)(_v4)
                    })]
                  })]
                }), (0, _v9.jsxs)(_v29.Text, {
                  variant: "body-lg",
                  color: "text-secondary",
                  noOfLines: 2,
                  children: [(0, _v124.getBundleAppsBodyCopy)(_v7.clusterTiles, _v7.otherProductsCount), " ", (0, _v9.jsx)(_v29.Text, {
                    as: "span",
                    role: "button",
                    tabIndex: 0,
                    cursor: "pointer",
                    sx: {
                      textDecoration: "underline",
                      textUnderlineOffset: (0, _v30.rem)(2)
                    },
                    onClick: _v5,
                    children: String((0, _v92.translate)({
                      singular: "Learn more",
                      dictionary: {
                        es: {
                          singular: "Ver más"
                        },
                        "de-DE": {
                          singular: "Mehr dazu"
                        },
                        "fr-FR": {
                          singular: "En savoir plus "
                        },
                        "ja-JP": {
                          singular: "詳細を見る"
                        },
                        "ko-KR": {
                          singular: "자세히 보기"
                        },
                        "pt-BR": {
                          singular: "Saiba mais"
                        },
                        "zh-CN": {
                          singular: "了解更多"
                        }
                      }
                    }))
                  }), "."]
                })]
              }), (0, _v9.jsx)(_v28.Box, {
                flex: "0 0 auto",
                marginLeft: "auto",
                children: (0, _v9.jsx)(_v67.Switch, {
                  size: "lg",
                  isChecked: _v1,
                  onChange: () => _v2(!_v1),
                  "aria-label": String((0, _v92.translate)({
                    singular: "Add premium access",
                    dictionary: {
                      es: {
                        singular: "Añadir acceso premium"
                      },
                      "de-DE": {
                        singular: "Premiumzugang hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter l'accès premium"
                      },
                      "ja-JP": {
                        singular: "プレミアムアクセスを追加"
                      },
                      "ko-KR": {
                        singular: "프리미엄 액세스 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar acesso premium"
                      },
                      "zh-CN": {
                        singular: "添加高级访问权限"
                      }
                    }
                  }))
                })
              })]
            })]
          })
        })]
      });
    };
  var _v128 = _v0.i(0);
  let _v129 = () => {
      window.location.assign(_v84.BUNDLE_LIBRARY_PATH);
    },
    _v130 = ({
      currency: _v0
    }) => {
      let _v1 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.isEnabled),
        _v2 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.bundleType),
        _v3 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.price),
        _v4 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.isBundleActive),
        _v5 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.toggleBundle),
        _v6 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.isOfferModalOpen),
        _v7 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.closeOfferModal),
        _v8 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.addBundleAndContinue),
        _v9 = (0, _v83.useBundleOfferSelector)(_v0 => _v0.continueWithoutBundle),
        {
          width: _v10
        } = (0, _v53.useWindowSize)();
      if (!_v1 || !_v2) return null;
      let _v11 = void 0 !== _v0 ? (0, _v128.resolveBundleIdealAmount)({
          periodicity: "annual",
          currency: _v0
        }) ?? void 0 : void 0,
        _v12 = _v10 <= 768 ? "100%" : `min(100%, ${(0, _v30.rem)(586)})`;
      return (0, _v9.jsxs)(_v9.Fragment, {
        children: [(0, _v9.jsx)(_v28.Box, {
          width: "100%",
          maxWidth: _v10 > 0 ? "1440px" : _v12,
          margin: `${(0, _v30.rem)(24)} auto 0`,
          padding: `0 ${(0, _v30.rem)(2)}`,
          children: (0, _v9.jsx)(_v127, {
            bundleType: _v2,
            isBundleActive: _v4,
            onToggleBundle: _v5,
            price: _v3,
            fullPrice: _v11,
            onLearnMoreClick: _v129
          })
        }), (0, _v9.jsx)(_v119, {
          isOpen: _v6,
          onClose: _v7,
          onAddBundle: _v8,
          onContinueWithoutBundle: _v9,
          bundleType: _v2,
          price: _v3,
          fullPrice: _v11
        })]
      });
    };
  var _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0);
  let _v134 = _v0 => {
    let _v1 = (0, _v19.useContext)(_v54.ViewerContext),
      _v2 = (0, _v19.useContext)(_v57.OverridesContext),
      _v3 = _v2.description || !_v1?.user,
      {
        isMobileBreakpoint: _v4,
        redirectUrl: _v5
      } = _v0;
    return (0, _v9.jsxs)(_v28.Box, {
      padding: `0 ${(0, _v132.space)(600)}`,
      children: [(0, _v9.jsx)(_v28.Box, {
        textAlign: "center",
        children: (0, _v9.jsx)(_v131.Header, {
          size: "xl",
          fontSize: _v4 ? (0, _v30.rem)(30) : _v2?.titleSize ?? (0, _v30.rem)(92),
          lineHeight: _v4 ? (0, _v30.rem)(36) : (0, _v30.rem)(92),
          fontWeight: 500,
          children: _v2?.title ? _v2.title : _v133.PRIMARY_HEADERS.theUltimateAdFreePlayer
        })
      }), _v2?.displayRedirect && _v5 && (0, _v9.jsx)(_v28.Box, {
        textAlign: "center",
        margin: `${(0, _v30.rem)(10)} 0 ${(0, _v30.rem)(15)}`,
        children: (0, _v9.jsx)(_v131.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v133.SECONDARY_HEADERS.getStartedWithFreeConcise(_v5)
        })
      }), _v3 && (0, _v9.jsx)(_v28.Box, {
        textAlign: "center",
        margin: `${(0, _v30.rem)(10)} 0 ${(0, _v30.rem)(15)}`,
        children: (0, _v9.jsx)(_v131.Header, {
          size: _v4 ? "sm" : "md",
          fontWeight: 400,
          children: _v2?.description !== void 0 && _v2?.description !== null ? _v2.description : _v133.SECONDARY_HEADERS.getStartedWithBasic
        })
      })]
    });
  };
  var _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0);
  let _v138 = ({
      onRequestEligibility: _v0
    }) => (0, _v9.jsxs)(_v137.AlertRoot, {
      variant: "info",
      size: "md",
      borderRadius: "1.25rem",
      padding: 4,
      gap: 4,
      alignItems: "center",
      children: [(0, _v9.jsxs)(_v66.Flex, {
        direction: "column",
        gap: 1,
        children: [(0, _v9.jsx)(_v29.Text, {
          variant: "body-xl",
          color: "text-primary",
          fontFamily: "heading",
          children: (0, _v15.translate)({
            singular: "Not a business?",
            dictionary: {
              es: {
                singular: "¿No es una empresa?"
              },
              "de-DE": {
                singular: "Kein Geschäftskonto?"
              },
              "fr-FR": {
                singular: "Pas une entreprise ?"
              },
              "ja-JP": {
                singular: "ビジネスではありませんか？"
              },
              "ko-KR": {
                singular: "비즈니스가 아니신가요?"
              },
              "pt-BR": {
                singular: "Não é uma empresa?"
              },
              "zh-CN": {
                singular: "不是企业账户？"
              }
            }
          })
        }), (0, _v9.jsxs)(_v29.Text, {
          variant: "body-lg",
          color: "text-secondary",
          children: [(0, _v15.translate)({
            singular: "Business accounts are not eligible for individual plans.",
            dictionary: {
              es: {
                singular: "Las cuentas empresariales no son elegibles para planes individuales."
              },
              "de-DE": {
                singular: "Geschäftskonten sind für Einzelpläne nicht berechtigt."
              },
              "fr-FR": {
                singular: "Les comptes professionnels ne sont pas éligibles aux plans individuels."
              },
              "ja-JP": {
                singular: "ビジネスアカウントは個人プランの対象外です。"
              },
              "ko-KR": {
                singular: "비즈니스 계정은 개인 요금제의 대상이 아닙니다."
              },
              "pt-BR": {
                singular: "Contas empresariais não são elegíveis para planos individuais."
              },
              "zh-CN": {
                singular: "企业账户不符合个人计划资格。"
              }
            }
          }), (0, _v9.jsx)("br", {}), (0, _v15.translate)({
            singular: "If you believe you have been misclassified, you can request eligibility for individual plans",
            dictionary: {
              es: {
                singular: "Si considera que ha sido clasificado erróneamente, puede solicitar la elegibilidad para planes individuales"
              },
              "de-DE": {
                singular: "Wenn Sie glauben, falsch eingestuft worden zu sein, können Sie die Berechtigung für Einzelpläne anfordern"
              },
              "fr-FR": {
                singular: "Si vous pensez avoir été mal classé, vous pouvez demander à être éligible aux plans individuels"
              },
              "ja-JP": {
                singular: "誤って分類されていると思われる場合は、個人プランの適用を申請できます"
              },
              "ko-KR": {
                singular: "자신이 잘못 분류되었다고 생각하시면 개인 요금제 자격을 요청할 수 있습니다"
              },
              "pt-BR": {
                singular: "Se você acredita que foi classificado incorretamente, pode solicitar elegibilidade para planos individuais"
              },
              "zh-CN": {
                singular: "如果您认为您被错误分类，您可以申请个人计划资格"
              }
            }
          })]
        })]
      }), (0, _v9.jsx)(_v85.Button, {
        size: "lg",
        flexShrink: 0,
        bgColor: "blue.500",
        color: "white",
        _hover: {
          backgroundColor: "blue.600"
        },
        _dark: {
          bgColor: "blue.500",
          color: "white"
        },
        onClick: _v0,
        children: (0, _v15.translate)({
          singular: "Request eligibility for individual plans",
          dictionary: {
            es: {
              singular: "Solicite elegibilidad para planes individuales"
            },
            "de-DE": {
              singular: "Berechtigung für Einzelpläne anfordern"
            },
            "fr-FR": {
              singular: "Demander l'éligibilité aux offres individuelles"
            },
            "ja-JP": {
              singular: "個人プランの対象資格を申請する"
            },
            "ko-KR": {
              singular: "개인 요금제 자격 요청"
            },
            "pt-BR": {
              singular: "Solicitar elegibilidade para planos individuais"
            },
            "zh-CN": {
              singular: "申请个人计划资格"
            }
          }
        })
      })]
    }),
    _v139 = (0, _v17.default)(async () => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v140 = (0, _v17.default)(async () => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v141 = (0, _v17.default)(async () => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v142 = (0, _v17.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v143 = ["ES", "FR", "BR", "NL", "NO", "FI", "MX", "SE", "DK", "BE"],
    _v144 = _v0 => {
      let {
          context: _v1,
          campaign: _v2
        } = _v0,
        {
          settings: _v3,
          isLoadingResponse: _v4
        } = (0, _v36.useOrionSettings)(),
        [_v5, _v6] = (0, _v19.useState)(!1),
        [_v7, _v8] = (0, _v19.useState)(!1),
        [_v9, _v10] = (0, _v19.useState)(void 0),
        [_v11, _v12] = (0, _v19.useState)(Date.now()),
        _v13 = (0, _v19.useContext)(_v54.ViewerContext),
        {
          locale: _v14
        } = (0, _v34.useGctlConfig)(),
        [_v15, _v16] = (0, _v19.useState)("monthly" !== _v3.pricing_page_default_periodicity),
        _v17 = (0, _v32.useToast)(),
        _v18 = (0, _v19.useRef)(!1),
        _v19 = (0, _v19.useRef)(!1);
      (0, _v19.useEffect)(() => {
        _v18.current || _v19.current || _v16("monthly" !== _v3.pricing_page_default_periodicity);
      }, [_v3.pricing_page_default_periodicity]);
      let {
          areBusinessPlansEnforced: _v20,
          isWhitelistedForIndPlans: _v21,
          showIndividualPlans: _v22,
          hasSubmittedSurvey: _v23,
          canRequestEligibility: _v24
        } = (0, _v24.useB2BRepackagingContext)(),
        {
          open: _v25,
          modal: _v26
        } = (0, _v25.useIndividualEligibilityModal)({
          initialStep: _v23 && !_v21 ? "not_qualified" : void 0
        }),
        _v27 = (0, _v18.useSearchParams)(),
        _v28 = _v27 ? _v27.get("upsell") : null,
        _v29 = _v27 ? _v27.get("extole_coupon") : null,
        _v30 = _v27 ? _v27.get("promo_code_id") : null,
        _v31 = _v27?.get("bundle_offer_toggle") === "1",
        _v32 = !!_v13?.user,
        _v33 = _v27?.get("paywall_trigger") ?? "unknown",
        _v34 = _v27?.get("paywall_location") ?? "unknown",
        _v35 = _v27?.get("paywall_feature") ?? "unknown",
        _v36 = (0, _v35.useCampaignIdOverride)() ?? _v2,
        {
          campaignId: _v37,
          isLoading: _v38
        } = (0, _v62.useRepackagingCampaign)(_v36),
        {
          tier: _v39,
          hasAutorenew: _v40,
          renewalDate: _v41
        } = (0, _v26.useUpcomingTier)(),
        _v42 = _v13?.teamUser?.accountType?.toString() ?? _v13?.user?.account?.toString() ?? "",
        _v43 = _v51.RepackagedTiers.includes(_v42) ? _v42 : void 0,
        _v44 = null != _v39 && _v51.RepackagedTiers.includes(_v39) || _v51.RepackagedTiers.includes(_v42),
        _v45 = _v4 || _v36 || !_v44 ? null : _v35.RP_2026_LOW_CAMPAIGN_ID,
        _v46 = _v36 ?? _v45 ?? _v37,
        _v47 = null != _v46 && _v35.REPACKAGING_CAMPAIGN_IDS.includes(_v46),
        _v48 = _v47 || _v3.allow_downgrade_from_pricing_page,
        {
          capabilities: {
            hasMonthlyBilling: _v49,
            hasPaid: _v50,
            inAppSubscription: _v51
          },
          ready: _v52
        } = (0, _v33.useCapability)(["hasMonthlyBilling", "hasPaid", "inAppSubscription"]),
        _v53 = _v52 && _v49,
        {
          isReverseFreeTrial: _v54
        } = function () {
          let _v0 = (0, _v40.useViewer)(),
            _v1 = _v0?.user?.id,
            {
              data: _v2,
              isLoading: _v3
            } = (0, _v39.useGetUser)(() => null == _v1 ? null : {
              select: _v41,
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
          width: _v55
        } = (0, _v53.useWindowSize)(),
        _v56 = _v55 <= 0,
        [_v57, _v58] = (0, _v19.useState)(""),
        _v59 = (0, _v31.useColorMode)(),
        {
          trackPricingPagePeriodicityToggled: _v60
        } = (0, _v45.usePricingTracking)(),
        {
          trackIndividualEligibilityCtaClicked: _v61
        } = (0, _v43.useIndividualEligibilityTracking)(),
        _v62 = () => {
          _v18.current = !0, _v27.BigPictureClient.sendEvent(new _v27.Event("vimeo.upgrade_action", 41, {
            copy: _v15 ? "monthly" : "annually",
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
            device_type: (0, _v52.default)(),
            upsell_name: null,
            feature: null,
            is_new_pricing: null,
            upgrade_flags: null,
            loading_time: null,
            promo_code_id: _v30,
            third_party_integration: null
          })), _v60({
            selectedPeriodicity: _v15 ? "monthly" : "yearly"
          });
          let _v0 = ["advanced", "business", "enterprise", "live_business", "live_premium", "live_pro", "plus", "pro", "pro_custom", "pro_unlimited", "producer", "standard", "starter"].includes(_v90) ? _v90 : null,
            _v1 = ["advanced", "plus", "pro", "standard", "starter", "ondemand", "stock", "live", "seat_subscription"].includes(_v90) ? _v90 : "seat_subscription";
          _v27.BigPictureClient.sendEvent(new _v27.Event("vimeo.checkout_form_action", 17, {
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
            location: _v15 ? "billing_period_monthly" : "billing_period_annual",
            mobile_app_user_id: null,
            path: window?.location?.href ?? null,
            referrer_path: document?.referrer ?? null,
            promo_code: null,
            seat_total: null,
            store: _v1,
            subtotal: "",
            target_path: null,
            tax: "",
            user_account_type_at_checkout: _v13?.user?.account || "",
            user_seat_count_at_checkout: 0,
            user_selection: null,
            upsell_name: _v27?.get("upsell"),
            feature: _v27?.get("feature")
          })), _v16(!_v15);
        };
      (0, _v19.useEffect)(() => {
        let _v0 = sessionStorage.getItem("redirectUrl");
        _v0 && ("/welcome" !== _v0 ? _v58(_v0) : _v58("/"));
      }, []);
      let _v63 = {
        bypassTierHierarchy: !0
      };
      _v29 && (_v63.promos = JSON.stringify({
        extole: _v29
      })), _v46 && (_v63.campaignId = _v46, _v63.usePaymentsService = !0), _v30 && (_v63.promoCodeId = _v30);
      let _v64 = (0, _v47.useGetSubscriptionPlansData)(_v9?.customSelfServeComapreTable ? _v9?.plans : void 0, void 0, void 0, _v63),
        _v65 = (0, _v19.useMemo)(() => (0, _v48.applyPlanAvailabilityPolicy)(_v64, {
          coreTierEnabled: _v3.core_tier_enabled,
          flatTierMonthlyEnabled: _v3.flat_tiers_monthly_enabled
        }), [_v64, _v3.core_tier_enabled, _v3.flat_tiers_monthly_enabled]),
        _v66 = _v64?.[0]?.currency?.currencyCode,
        {
          data: _v67
        } = (0, _v63.useSubscriptionPlansUsageCheck)(_v47 ? _v56.REPACKAGING_COMPARISON_TIERS.filter(_v0 => "free" !== _v0) : []),
        {
          shouldReorder: _v68
        } = (0, _v59.useColdStoragePlanReorder)(),
        _v69 = _v68 && !_v47 && !_v56 && void 0 !== _v65,
        {
          trackColdStoragePlanReorderDisplayed: _v70
        } = (0, _v42.useColdStorageReorderTracking)(),
        _v71 = (0, _v19.useRef)(!1);
      (0, _v19.useEffect)(() => {
        _v69 && !_v71.current && (_v71.current = !0, _v70({
          surface: "upgrade_page"
        }));
      }, [_v69, _v70]);
      let _v72 = _v65?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased")?.tier,
        _v73 = _v48 && _v40 ? _v39 : void 0,
        _v74 = _v48 ? _v39 ?? _v72 ?? _v43 : void 0,
        _v75 = !_v22,
        _v76 = (0, _v20.isPermanentDiscountOfferEligible)({
          isSettingEnabled: _v3.b2b_offer_permanent_discount_when_arr_off_upgrade_plan,
          hasAutorenew: _v40,
          scheduledTier: _v39,
          areBusinessPlansEnforced: _v20,
          isWhitelistedForIndPlans: _v21
        }),
        _v77 = (0, _v19.useMemo)(() => _v65?.find(_v0 => "studio" === _v0.tier) ?? null, [_v65]),
        _v78 = (0, _v19.useMemo)(() => _v65?.find(_v0 => "professional" === _v0.tier) ?? null, [_v65]),
        _v79 = (0, _v19.useMemo)(() => _v76 && _v77 ? (0, _v21.resolveStudioRenewalDiscount)({
          studioPlan: _v77,
          professionalPlan: _v78,
          isAnnual: _v15
        }) : null, [_v76, _v77, _v78, _v15]),
        [_v80, _v81] = (0, _v19.useState)(!1),
        _v82 = (0, _v19.useRef)(!1),
        {
          acceptRenewalOffer: _v83,
          isAccepting: _v84
        } = (0, _v23.useAcceptStudioRenewalOffer)(),
        {
          trackStudioRenewalOfferCtaClicked: _v85,
          trackStudioRenewalOfferAccepted: _v86,
          trackStudioRenewalOfferFailed: _v87
        } = (0, _v46.useStudioRenewalOfferTracking)();
      (0, _v46.useStudioRenewalOfferDisplayed)({
        isOpen: _v80,
        savingsPercent: _v79?.savingsPercent ?? 0,
        location: "upgrade_plan"
      }), (0, _v46.useStudioRenewalOfferDismissed)({
        isOpen: _v80,
        savingsPercent: _v79?.savingsPercent ?? 0,
        wasAcceptedRef: _v82,
        location: "upgrade_plan"
      });
      let _v88 = (0, _v19.useCallback)(() => {
          _v81(!1), window.location.reload();
        }, [_v81]),
        _v89 = (0, _v19.useCallback)(async () => {
          let _v0 = _v15 ? _v77?.id?.annual ?? "" : _v77?.id?.monthly ?? "",
            _v1 = _v79?.savingsPercent;
          if ("" !== _v0 && null != _v1 && !(_v1 <= 0)) {
            _v85({
              copy: (0, _v15.translate)({
                singular: "Renew at {PERCENT}% discount",
                replacements: {
                  PERCENT: _v1
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
              savingsPercent: _v1,
              location: "upgrade_plan"
            });
            try {
              await _v83({
                billingPlanId: _v0,
                discountPercent: _v1
              }), _v82.current = !0;
            } catch (_v0) {
              _v87({
                errorMessage: _v0 instanceof Error ? _v0.message : String(_v0),
                location: "upgrade_plan"
              }), _v17({
                variant: "warning",
                title: (0, _v15.translate)({
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
              return;
            }
            try {
              await _v86({
                savingsPercent: _v79?.savingsPercent ?? null,
                periodicity: _v15 ? "annual" : "monthly",
                location: "upgrade_plan"
              });
            } catch (_v0) {
              console.warn("Failed to track studio_renewal_offer_accepted", _v0);
            }
            _v88();
          }
        }, [_v83, _v88, _v15, _v77, _v79, _v17, _v85, _v87]),
        _v90 = (_v0 => {
          if (!_v0) return;
          let _v1 = _v9?.plans ? [..._v0] : _v65 ? [..._v65] : [],
            _v2 = _v74 ? (0, _v50.getTierComparisonRank)(_v74) ?? 0 : -1,
            _v3 = ["free", "starter", "basic", "plus", "customSelfServe", "proSolution", "production"];
          _v47 && _v3.push("creator");
          let _v4 = _v47 ? (0, _v65.getFeatureFloorRank)(_v35) : void 0,
            _v5 = _v0 => {
              for (let _v0 of _v1) {
                let {
                    metadata: _v0,
                    tier: _v1
                  } = _v0,
                  _v2 = _v0?.interactions?.purchase?.status,
                  _v3 = _v0?.purchasedProduct?.isMonthly;
                if ("available" === (0, _v49.getEffectivePurchaseStatus)({
                  purchaseStatus: _v2,
                  tier: _v1,
                  isViewingAnnual: _v15,
                  isPurchasedMonthly: _v3
                }) && !_v3.includes(_v1) && (!_v47 || ((0, _v50.getTierComparisonRank)(_v1) ?? 0) > _v2) && (void 0 === _v0 || ((0, _v50.getTierComparisonRank)(_v1) ?? 0) >= _v0)) return _v1;
              }
            };
          return _v5(_v4) ?? _v5(void 0);
        })(_v65),
        _v91 = (0, _v19.useMemo)(() => "studio" === _v39 ? "business" : _v21 ? "individual" : "studio" === _v74 || "production" === _v74 ? "business" : "individual", [_v74, _v21, _v39]),
        [_v92, _v93] = (0, _v19.useState)(null),
        _v94 = _v75 ? "business" : _v92 ?? _v91,
        _v95 = () => {
          _v93("individual" === _v94 ? "business" : "individual");
        },
        _v96 = (0, _v19.useMemo)(() => "production" === _v74 ? ["studio", "production", "enterprise"] : _v75 ? ["studio", "enterprise"] : ["professional", "studio", "enterprise"], [_v74, _v75]),
        _v97 = !_v75 && (_v56 || _v20 || "studio" !== _v74 && "production" !== _v74 || "individual" === _v94),
        _v98 = void 0 !== _v74 && _v56.REPACKAGING_PAID_PLANS.includes(_v74);
      (0, _v19.useEffect)(() => {
        if (_v73 && _v52) {
          _v19.current = !0, _v16(!_v53);
          return;
        }
        _v65?.some(_v0 => "free" !== _v0.tier && _v0.metadata?.purchasedProduct !== void 0 && !_v0.metadata.purchasedProduct.isMonthly) ? (_v19.current = !0, _v16(!0)) : _v52 && _v50 && _v53 && (_v19.current = !0, _v16(!1));
      }, [_v65, _v73, _v52, _v53, _v50]), (0, _v19.useEffect)(() => {
        _v28 && ["review", "copy_review_link"].includes(_v28) && _v13 && _v65 && (0, _v64.logViewUpsell)(_v28, _v13);
      }, [_v28, _v65, _v13]), (0, _v19.useEffect)(() => {
        !_v32 && _v9?.redirectLoggedOut && (window.location.href = "/log_in"), void 0 !== _v65 && (_v6((_v0 => {
          let _v1 = !1;
          for (let _v0 of _v0) if ("plus" !== _v0.tier) if (_v0.price.monthly) {
            _v1 = !0;
            break;
          } else _v1 = !1;
          return _v1;
        })(_v65)), _v8(!0), null != _v11 && ((0, _v64.emitBPEvent)({
          action_type: "pageview",
          is_new_pricing: !0,
          upgrade_flags: window.location.search,
          loading_time: (Date.now() - _v11) / 0,
          path: window.location.href
        }), _v12(null))), _v9 && void 0 !== _v9.showMonthlyToggle && (_v6(_v9.showMonthlyToggle), _v8(!0));
      }, [_v65, _v11, _v9, _v32]), (0, _v19.useEffect)(() => {
        !_v32 && _v13?.location && _v143.includes(_v13.location.toUpperCase()) && (window.location.href = "/log_in");
      }, [_v32, _v13?.location]), (0, _v19.useEffect)(() => {
        void 0 === _v9 && (async _v0 => {
          _v10((0, (await _v0.A(0)).default)(_v0));
        })(_v1);
      }, [_v1, _v9]);
      let _v99 = !!(_v65 && _v65.some(_v0 => void 0 !== _v0.promotion) && _v15 && _v5 && !_v56),
        _v100 = _v7 && _v5 && !(_v50 && !_v53 && !_v54) && !_v73 && (_v47 || !_v56),
        _v101 = (0, _v19.useMemo)(() => {
          if (!_v65) return;
          if (!_v47) return (_v9?.plans ? _v65.filter(_v0 => _v9.plans?.includes(_v0.tier)) : _v9?.excludedPlans ? _v65.filter(_v0 => !_v9.excludedPlans?.includes(_v0.tier)) : _v65).map(_v0 => _v0.tier);
          let _v0 = new Set(_v65.map(_v0 => _v0.tier)),
            _v1 = _v0.has("core");
          return ("individual" === _v94 ? _v56.REPACKAGING_INDIVIDUAL_VIEW_TIERS : _v96).filter(_v0 => ("free" !== _v0 || !_v98 && !_v1) && _v0.has(_v0));
        }, [_v65, _v47, _v94, _v98, _v96, _v9]),
        _v102 = (0, _v19.useMemo)(() => _v5 ? ["monthly", "yearly"] : ["yearly"], [_v5]),
        _v103 = function (_v0) {
          let _v1 = (0, _v40.useViewer)(),
            {
              isRepackagedFree: _v2
            } = (0, _v60.useIsRepackagedFree)(),
            {
              settings: _v3
            } = (0, _v36.useOrionSettings)(),
            [_v4, _v5] = (0, _v19.useState)(!1),
            [_v6, _v7] = (0, _v19.useState)("pricing_logo_click"),
            _v8 = _v1?.user?.id,
            _v9 = (0, _v19.useRef)(!1),
            _v10 = _v1?.teamUser?.accountType?.toString() ?? _v1?.user?.account?.toString(),
            _v11 = null != _v8 && !_v1?.user?.capabilities?.hasPaid && ("free" === _v10 || "basic" === _v10),
            _v12 = (0, _v19.useCallback)(_v0 => {
              let _v1 = _v3.pricing_page_dismiss_offer_triggers;
              return !(!_v0 || !_v11 || _v2 || "off" === _v1 || "pricing_logo_click" === _v0 && "logo_click" !== _v1 && "both" !== _v1 || null == _v8 || _v9.current || (0, _v61.hasDismissOfferBeenDisplayed)(_v8, "pricing_page", _v3.pricing_page_dismiss_offer_max_displays)) && (_v9.current = !0, (0, _v61.markDismissOfferDisplayed)(_v8, "pricing_page"), _v7(_v0), _v5(!0), !0);
            }, [_v0, _v11, _v2, _v3.pricing_page_dismiss_offer_triggers, _v3.pricing_page_dismiss_offer_max_displays, _v8]),
            _v13 = (0, _v19.useCallback)(() => _v5(!1), []),
            _v14 = (0, _v19.useEffectEvent)(_v0 => {
              null !== _v0.relatedTarget || _v4 || _v12("pricing_exit_intent");
            });
          return (0, _v19.useEffect)(() => {
            let _v0 = _v3.pricing_page_dismiss_offer_triggers;
            if (!_v0 || !_v11 || _v2 || "cursor_leave" !== _v0 && "both" !== _v0 || _v1?.user?.id == null) return;
            let _v1 = _v0 => {
              _v14(_v0);
            };
            return document.addEventListener("mouseout", _v1), () => document.removeEventListener("mouseout", _v1);
          }, [_v0, _v11, _v2, _v3.pricing_page_dismiss_offer_triggers, _v1?.user?.id]), {
            isOpen: _v4,
            variant: _v3.dismiss_offer_paywall_variant,
            tracking: {
              paywallTrigger: _v6,
              paywallLocation: "upgrade_plan",
              paywallType: "popup",
              paywallFeature: "dismiss_offer"
            },
            open: _v12,
            close: _v13
          };
        }(null !== _v13 && void 0 !== _v65 && void 0 !== _v9 && !_v38 && !(!_v32 && _v9?.redirectLoggedOut));
      return ((0, _v44.usePaywallTracking)({
        paywallTrigger: _v33,
        paywallLocation: _v34,
        paywallType: "page",
        paywallFeature: _v35,
        paywallStyle: "upgrade_plan",
        paywallPlansDisplayed: _v101 ?? [],
        paywallPeriodicitiesDisplayed: _v102,
        isVisible: null !== _v13 && void 0 !== _v65 && void 0 !== _v9 && _v7 && !_v38 && !(!_v32 && _v9?.redirectLoggedOut),
        displayKey: _v47 ? _v94 : void 0
      }), null === _v13 || void 0 === _v65 || _v38 || !_v32 && _v9?.redirectLoggedOut) ? (0, _v9.jsx)(_v135.default, {}) : (0, _v9.jsxs)(_v55.default, {
        isMobileBreakpoint: _v56,
        onLogoClick: () => _v103.open("pricing_logo_click"),
        children: [void 0 !== _v9 && _v65 && (0, _v9.jsx)(_v57.OverridesContextProvider, {
          showYearly: _v15,
          viewer: _v13,
          overrides: _v9,
          children: (0, _v9.jsx)(_v58.PlansDataProvider, {
            overrides: _v9,
            plansData: _v65,
            isLoggedIn: _v32,
            capabilitiesReady: _v52,
            isPricingRedesign: _v47,
            downgradeEnabled: _v48,
            effectiveTier: _v74,
            upcomingTier: _v73,
            usageCheckData: _v67,
            hideIndividualPlans: _v75,
            children: (0, _v9.jsxs)(_v9.Fragment, {
              children: [(0, _v9.jsx)(_v28.Box, {
                children: (0, _v9.jsx)(_v134, {
                  isMobileBreakpoint: _v56,
                  redirectUrl: _v57
                })
              }), _v76 && (0, _v9.jsx)(_v28.Box, {
                width: "100%",
                maxWidth: (0, _v30.rem)(0),
                margin: "0 auto",
                padding: `0 ${(0, _v30.rem)(16)}`,
                children: (0, _v9.jsx)(_v138, {
                  onRequestEligibility: () => {
                    _v61({
                      location: "upgrade_plan_banner"
                    }), _v25("upgrade_plan_banner");
                  }
                })
              }), (0, _v9.jsxs)(_v83.BundleOfferProvider, {
                initialIsBundleActive: _v31,
                children: [(0, _v9.jsx)(_v130, {
                  currency: _v66
                }), _v100 && (0, _v9.jsx)(_v28.Box, {
                  width: "100%",
                  display: "inline-flex",
                  justifyContent: "center",
                  marginTop: (0, _v30.rem)(40),
                  alignItems: "center",
                  children: _v47 ? (0, _v9.jsx)(_v70, {
                    checked: _v15,
                    onClick: _v62,
                    isMobile: _v56
                  }) : (0, _v9.jsxs)(_v9.Fragment, {
                    children: [(0, _v9.jsx)(_v77, {
                      checked: _v15,
                      onClick: _v62
                    }), (0, _v9.jsx)(_v81, {
                      showYearly: _v15
                    })]
                  })
                }), (0, _v9.jsx)(_v136.default, {
                  showYearly: !!_v56 && !_v73 || _v15,
                  isBillingFreqToggleAvailable: _v5 && !_v56,
                  isPageTopToggleVisible: _v100,
                  badgePlan: _v90,
                  showStrikePrice: _v99,
                  isMobileBreakpoint: _v56,
                  planView: _v94,
                  onSwitchView: _v95,
                  businessTiers: _v96,
                  showCrossSellCard: _v97,
                  studioRenewalTier: _v76 ? _v39 : void 0,
                  studioRenewalDiscount: _v79,
                  onStudioRenewal: () => _v81(!0)
                })]
              }), _v47 && !_v56 && (0, _v9.jsxs)(_v9.Fragment, {
                children: [_v75 && _v24 && (0, _v9.jsx)(_v82, {
                  onRequestEligibility: () => {
                    _v61({
                      location: "upgrade_plan_banner"
                    }), _v25("upgrade_plan_banner");
                  }
                }), !_v75 && (0, _v9.jsx)(_v82, {
                  planView: _v94,
                  onSwitchView: _v95
                })]
              }), (0, _v9.jsxs)(_v28.Box, {
                maxWidth: (0, _v30.rem)(0),
                margin: `${(0, _v30.rem)(4)} auto`,
                padding: _v56 ? `${(0, _v30.rem)(0)} ${(0, _v30.rem)(24)}` : `${(0, _v30.rem)(75)} ${(0, _v30.rem)(28)}`,
                minHeight: _v56 ? "" : (0, _v30.rem)(240),
                children: [_v56 && (0, _v9.jsx)(_v29.Text, {
                  textAlign: "center",
                  marginBottom: (0, _v30.rem)(24),
                  variant: "heading-lg",
                  children: (0, _v15.translate)({
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
                }), (0, _v9.jsx)(_v141, {})]
              }), !_v56 && (0, _v9.jsx)(_v139, {
                showYearly: _v15,
                badgePlan: _v90,
                theme: _v59.colorMode,
                filteredTiers: _v47 ? [...("individual" !== _v94 || _v75 ? _v96 : _v56.REPACKAGING_INDIVIDUAL_VIEW_TIERS.filter(_v0 => "free" !== _v0 || !_v98))] : void 0
              }), _v9.terms && (0, _v9.jsx)(_v28.Box, {
                maxWidth: (0, _v30.rem)(0),
                margin: `${(0, _v30.rem)(4)} auto`,
                padding: _v56 ? `${(0, _v30.rem)(0)} ${(0, _v30.rem)(24)}` : `${(0, _v30.rem)(75)} ${(0, _v30.rem)(28)}`,
                children: (0, _v9.jsx)(_v29.Text, {
                  variant: "body-xl",
                  children: _v9.terms
                })
              }), !_v9.hideFaq && (0, _v9.jsx)(_v140, {
                isMobileBreakpoint: _v56
              })]
            })
          })
        }), _v51 && (0, _v9.jsx)(_v142, {}), _v103.isOpen && "wt_offer" === _v103.variant && (0, _v9.jsx)(_v37.PricingDismissOfferPaywall, {
          isOpen: !0,
          onClose: () => {
            _v103.close(), "pricing_logo_click" === _v103.tracking.paywallTrigger && window.location.assign("/");
          },
          paywallTracking: _v103.tracking
        }), _v103.isOpen && "ev_offer" === _v103.variant && (0, _v9.jsx)(_v38.WelcomeOfferModalPaywall, {
          isOpen: !0,
          onClose: () => {
            _v103.close(), "pricing_logo_click" === _v103.tracking.paywallTrigger && window.location.assign("/");
          },
          onDismiss: _v103.close,
          paywallTracking: _v103.tracking
        }), _v26, _v79 && (0, _v9.jsx)(_v22.StudioRenewalOfferModal, {
          isOpen: _v80,
          onClose: () => _v81(!1),
          savingsPercent: _v79.savingsPercent,
          discountedMonthlyPrice: _v79.discountedMonthlyPrice,
          fullMonthlyPrice: _v79.fullMonthlyPrice,
          currencyCode: _v77?.currency?.currencyCode,
          locale: _v14,
          studioPlan: _v77,
          renewalDate: _v41,
          isAnnual: _v15,
          onRenew: () => {
            _v89();
          },
          isRenewing: _v84
        })]
      });
    };
  var _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0);
  let _v151 = [{
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
    _v152 = {
      maxWidth: 960,
      margin: "0 auto",
      padding: "32px 16px",
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      color: "#1a1a1a"
    },
    _v153 = {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      margin: "16px 0 40px"
    },
    _v154 = {
      flex: "1 1 240px",
      border: "1px solid #d5d5d5",
      borderRadius: 8,
      padding: 20
    },
    _v155 = {
      fontSize: 22,
      fontWeight: 700,
      margin: "4px 0 12px"
    },
    _v156 = {
      fontWeight: 600,
      margin: "0 0 8px"
    },
    _v157 = {
      margin: 0,
      paddingLeft: 20
    },
    _v158 = {
      borderTop: "1px solid #e5e5e5",
      marginTop: 32,
      paddingTop: 16
    },
    _v159 = {
      marginBottom: 24
    },
    _v160 = {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    },
    _v161 = {
      textAlign: "left",
      padding: "6px 10px",
      borderBottom: "1px solid #e5e5e5",
      verticalAlign: "top"
    },
    _v162 = {
      textAlign: "center",
      padding: "6px 10px",
      borderBottom: "1px solid #f0f0f0"
    },
    _v163 = {
      marginBottom: 16
    },
    _v164 = {
      fontWeight: 600,
      marginBottom: 4
    },
    _v165 = _v0 => {
      let _v1 = "number" == typeof _v0 ? _v0 : parseFloat(_v0);
      return Number.isFinite(_v1) ? Number.isInteger(_v1) ? `$${_v1}` : `$${_v1.toFixed(2)}` : null;
    },
    _v166 = () => (0, _v9.jsxs)(_v9.Fragment, {
      children: [(0, _v9.jsx)("h1", {
        children: _v133.PRIMARY_HEADERS.theUltimateAdFreePlayer
      }), (0, _v9.jsx)("p", {
        children: (0, _v9.jsx)(_v146.Link, {
          href: "/join",
          children: (0, _v15.translate)({
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
    _v167 = ({
      inVideoSize: _v0
    }) => (0, _v9.jsxs)("section", {
      style: _v158,
      children: [(0, _v9.jsx)("h2", {
        children: (0, _v15.translate)({
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
      }), (0, _v9.jsx)("dl", {
        style: {
          margin: 0
        },
        children: (0, _v149.default)(_v0).map(_v0 => (0, _v9.jsxs)("div", {
          style: _v163,
          children: [(0, _v9.jsx)("dt", {
            style: _v164,
            children: _v0.question
          }), (0, _v9.jsx)("dd", {
            style: {
              margin: 0
            },
            children: _v0.answer
          })]
        }, _v0.id))
      }), (0, _v9.jsx)("p", {
        children: (0, _v9.jsx)(_v146.Link, {
          href: "/help/contact",
          children: (0, _v15.translate)({
            singular: "Contact support",
            dictionary: {
              es: {
                singular: "Contactar al equipo de asistencia"
              },
              "de-DE": {
                singular: "Support kontaktieren"
              },
              "fr-FR": {
                singular: "Contacter l'assistance"
              },
              "ja-JP": {
                singular: "サポートへのお問い合わせ"
              },
              "ko-KR": {
                singular: "지원팀에 문의"
              },
              "pt-BR": {
                singular: "Entre em contato com o suporte"
              },
              "zh-CN": {
                singular: "联系支持团队"
              }
            }
          })
        })
      })]
    }),
    _v168 = ({
      plansData: _v0,
      prices: _v1
    }) => {
      let _v2 = (0, _v15.translate)({
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
        _v5 = (0, _v147.default)(_v4);
      return (0, _v9.jsxs)("section", {
        style: _v152,
        children: [(0, _v9.jsx)(_v166, {}), (0, _v9.jsx)("div", {
          style: _v153,
          children: _v0.map(_v0 => {
            let _v1 = (_v0 => {
                let _v1 = _v0.priceFormatted?.annualMonthly;
                if (_v1) return _v1;
                let _v2 = _v0.price?.annualMonthly;
                if ("number" == typeof _v2) return _v165(_v2);
                let _v3 = _v1?.[_v0.tier];
                return _v3 ? _v165(_v3) : null;
              })(_v0),
              _v2 = (0, _v150.getCardFeatureSubhead)(_v0, _v0.tier),
              _v3 = (0, _v150.getFeatureListByTier)(_v0.tier) ?? [];
            return (0, _v9.jsxs)("div", {
              style: _v154,
              children: [(0, _v9.jsx)("h2", {
                style: {
                  margin: 0
                },
                children: _v0.name
              }), _v1 ? (0, _v9.jsxs)("p", {
                style: _v155,
                children: [_v1, " ", _v2]
              }) : null, _v2 ? (0, _v9.jsx)("p", {
                style: _v156,
                children: _v2
              }) : null, (0, _v9.jsx)("ul", {
                style: _v157,
                children: _v3.map((_v0, _v1) => (0, _v9.jsx)("li", {
                  children: _v0
                }, `${_v0.tier}-${_v1}`))
              })]
            }, _v0.tier);
          })
        }), (0, _v9.jsxs)("section", {
          style: _v158,
          children: [(0, _v9.jsx)("h2", {
            children: (0, _v15.translate)({
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
          }), _v5.map(_v0 => (0, _v9.jsxs)("div", {
            style: _v159,
            children: [(0, _v9.jsx)("h3", {
              children: _v0.title
            }), (0, _v9.jsxs)("table", {
              style: _v160,
              children: [(0, _v9.jsx)("thead", {
                children: (0, _v9.jsxs)("tr", {
                  children: [(0, _v9.jsx)("th", {
                    style: _v161,
                    scope: "col"
                  }), _v0.map(_v0 => (0, _v9.jsx)("th", {
                    style: {
                      ..._v161,
                      textAlign: "center"
                    },
                    scope: "col",
                    children: _v0.name
                  }, _v0.tier))]
                })
              }), (0, _v9.jsx)("tbody", {
                children: _v0.list.map((_v0, _v1) => (0, _v9.jsxs)("tr", {
                  children: [(0, _v9.jsx)("th", {
                    style: _v161,
                    scope: "row",
                    children: _v0.text
                  }), _v0.map(_v0 => (0, _v9.jsx)("td", {
                    style: _v162,
                    children: ((_v0, _v1) => {
                      if (Array.isArray(_v0)) return _v0.includes(_v1) ? (0, _v15.translate)({
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
                      return !0 === _v2 ? (0, _v15.translate)({
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
        }), (0, _v9.jsx)(_v167, {
          inVideoSize: _v3
        })]
      });
    },
    _v169 = [{
      id: "video_player",
      title: (0, _v15.translate)({
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
      features: _v148.VIDEO_PLAYER_FEATURES
    }, {
      id: "video_maker_and_editing_tools",
      title: (0, _v15.translate)({
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
      features: _v148.EDITING_FEATURES
    }, {
      id: "vimeo_ai",
      title: (0, _v15.translate)({
        singular: "Vimeo AI",
        dictionary: {
          "fr-FR": {
            singular: "IA Vimeo"
          }
        }
      }),
      features: _v148.AI_FEATURES
    }, {
      id: "virtual_events_and_webinars",
      title: (0, _v15.translate)({
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
      features: _v148.WEBINARS_FEATURES
    }, {
      id: "video_management_and_collaboration",
      title: (0, _v15.translate)({
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
      features: _v148.COLLABORATION_FEATURES
    }, {
      id: "analytics",
      title: (0, _v15.translate)({
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
      features: _v148.ANALYTICS_FEATURES
    }, {
      id: "marketing_and_distribution",
      title: (0, _v15.translate)({
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
      features: _v148.MARKETING_FEATURES
    }, {
      id: "privacy_security_and_admin_controls",
      title: (0, _v15.translate)({
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
      features: _v148.PRIVACY_FEATURES
    }, {
      id: "priority_support",
      title: (0, _v15.translate)({
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
      features: _v148.SUPPORT_FEATURES
    }, {
      id: "enterprise_services",
      title: (0, _v15.translate)({
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
      features: _v148.ENTERPRISE_FEATURES
    }],
    _v170 = ({
      prices: _v0
    }) => {
      let _v1 = (0, _v15.translate)({
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
      return (0, _v9.jsxs)("section", {
        style: _v152,
        children: [(0, _v9.jsx)(_v166, {}), (0, _v9.jsx)("div", {
          style: _v153,
          children: _v151.map(({
            tier: _v0,
            name: _v1,
            previous: _v2
          }) => {
            let _v3 = _v0?.[_v0];
            return (0, _v9.jsxs)("div", {
              style: _v154,
              children: [(0, _v9.jsx)("h2", {
                style: {
                  margin: 0
                },
                children: _v1
              }), _v3 ? (0, _v9.jsxs)("p", {
                style: _v155,
                children: [_v165(_v3), " USD ", _v1]
              }) : null, (0, _v9.jsx)("p", {
                style: _v156,
                children: _v2 ? (0, _v15.translate)({
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
                }) : (0, _v15.translate)({
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
              }), (0, _v9.jsx)("ul", {
                style: _v157,
                children: (_v150.CARD_FEATURE_LIST_MAP[_v0] ?? []).map((_v0, _v1) => (0, _v9.jsx)("li", {
                  children: _v0
                }, `${_v0}-${_v1}`))
              })]
            }, _v0);
          })
        }), (0, _v9.jsxs)("section", {
          style: _v158,
          children: [(0, _v9.jsx)("h2", {
            children: (0, _v15.translate)({
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
          }), (0, _v9.jsxs)("div", {
            style: _v159,
            children: [(0, _v9.jsx)("h3", {
              children: (0, _v15.translate)({
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
            }), (0, _v9.jsx)("ul", {
              style: _v157,
              children: [(0, _v15.translate)({
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
              }), (0, _v15.translate)({
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
              }), (0, _v15.translate)({
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
              }), (0, _v15.translate)({
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
              }), (0, _v15.translate)({
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
              })].map((_v0, _v1) => (0, _v9.jsx)("li", {
                children: _v0
              }, `core-${_v1}`))
            })]
          }), _v169.map(_v0 => (0, _v9.jsxs)("div", {
            style: _v159,
            children: [(0, _v9.jsx)("h3", {
              children: _v0.title
            }), (0, _v9.jsx)("ul", {
              style: _v157,
              children: _v0.features.map((_v0, _v1) => (0, _v9.jsx)("li", {
                children: _v0.text
              }, `${_v0.id}-${_v1}`))
            })]
          }, _v0.id))]
        }), (0, _v9.jsx)(_v167, {
          inVideoSize: !1
        })]
      });
    },
    _v171 = ({
      plansData: _v0,
      prices: _v1
    }) => _v0 && _v0.length > 0 ? (0, _v9.jsx)(_v168, {
      plansData: _v0,
      prices: _v1
    }) : (0, _v9.jsx)(_v170, {
      prices: _v1
    });
  var _v172 = _v0.i(0);
  let _v173 = "https://vimeo.com",
    _v174 = `${_v173}/upgrade-plan`,
    _v175 = {
      starter: "12.00",
      standard: "25.00",
      advanced: "75.00"
    },
    _v176 = (_v0, _v1, _v2) => ({
      "@type": "ImageObject",
      url: `https://i.vimeocdn.com/custom_asset/${_v0}`,
      width: _v1,
      height: _v2
    }),
    _v177 = {
      "@type": "Organization",
      name: "Vimeo",
      url: _v173,
      logo: _v176("cbf0b6892f540132a1d1b8f1520a9d75", "2150", "860"),
      sameAs: ["https://www.facebook.com/Vimeo/", "https://twitter.com/vimeo", "https://www.instagram.com/vimeo/", "https://en.wikipedia.org/wiki/Vimeo", "https://www.crunchbase.com/organization/vimeo", "https://www.tiktok.com/@vimeo", "https://www.linkedin.com/company/vimeo/"]
    },
    _v178 = {
      "@type": "QuantitativeValue",
      value: "1",
      unitCode: "MON"
    },
    _v179 = ({
      plansData: _v0,
      prices: _v1
    }) => {
      let [_v2] = (0, _v12.useQueryParams)({
          v: _v11.NumberParam,
          context: (0, _v11.createEnumParam)(Object.values(_v145.CONTEXT)),
          campaign: _v11.StringParam
        }),
        _v3 = (0, _v15.translate)({
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
        _v4 = (0, _v15.translate)({
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
      return (0, _v9.jsxs)(_v9.Fragment, {
        children: [(0, _v9.jsxs)(_v10.default, {
          children: [(0, _v9.jsx)("title", {
            children: _v3
          }), (0, _v9.jsx)("meta", {
            name: "description",
            content: _v4
          }), (0, _v9.jsx)("meta", {
            property: "og:type",
            content: "video.other"
          }), (0, _v9.jsx)("meta", {
            property: "og:site_name",
            content: "Vimeo"
          }), (0, _v9.jsx)("meta", {
            property: "og:url",
            content: _v174
          }), (0, _v9.jsx)("meta", {
            property: "og:title",
            content: _v3
          }), (0, _v9.jsx)("meta", {
            property: "og:description",
            content: _v4
          }), (0, _v9.jsx)("meta", {
            name: "twitter:title",
            content: _v3
          }), (0, _v9.jsx)("link", {
            rel: "canonical",
            href: _v174
          })]
        }), (0, _v9.jsx)("div", {
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: {
            __html: `<script type="application/ld+json">${JSON.stringify({
              "@context": "http://schema.org",
              "@graph": [{
                mainEntity: {
                  "@context": "http://schema.org",
                  "@type": ["WebApplication", "Product", "SoftwareApplication"],
                  "@id": _v173,
                  applicationCategory: ["BusinessApplication", "BrowserApplication", "EntertainmentApplication", "MultimediaApplication", "LifestyleApplication", "EducationalApplication", "CommunicationApplication", "ReferenceApplication"],
                  name: "Vimeo All-In-One Video Platform",
                  operatingSystem: "all",
                  browserRequirements: "Requires Javascript and HTML5 support",
                  url: _v173,
                  screenshot: _v176("d9ef877c80e240720926ee30e6ace39b", "1800", "1101"),
                  image: [_v176("c406392768b237292f74f3e2099e5545", "1920", "1082"), _v176("650db19aec4d5633a6f5a1a2997bd058", "1921", "1081"), _v176("f884aa9bd76537bdb2f52e8017becdc0", "1920", "1080"), _v176("bc7ff4aaa44d52d6683d21e1d68c9913", "1920", "1080"), _v176("202c65b28d45af4812af604d1f2f629d", "1920", "1080")],
                  description: "Unlock the power of video and join over 260M professionals, teams, and organizations who use Vimeo to create, collaborate and communicate.",
                  featureList: ["https://vimeo.com/solutions/video-monetization", "https://vimeo.com/solutions/communications", "https://vimeo.com/solutions/marketing", "https://vimeo.com/features/interactive-video", "https://vimeo.com/features/livestreaming", "https://vimeo.com/features/screen-recorder", "https://vimeo.com/create", "https://vimeo.com/for-hire", "https://vimeo.com/stock", "https://vimeo.com/features/video-library", "https://vimeo.com/features/video-player", "https://vimeo.com/features/online-video-hosting", "https://vimeo.com/features/video-privacy", "https://vimeo.com/enterprise", "https://vimeo.com/features/virtual-events", "https://vimeo.com/features/video-analytics", "https://vimeo.com/ott"],
                  offers: {
                    "@type": "AggregateOffer",
                    offeredBy: _v177,
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
                      referenceQuantity: _v178
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.standard,
                      priceCurrency: "USD",
                      name: "Standard",
                      description: "Our Standard plan comes with 120 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Starter plan, Standard comes with Branding in player and videos; Custom CTAs and end cards; Lead capture with custom forms; Premium templates for video creation; Stock photos, videos, and music; and Tools to sell videos online and worldwide.",
                      referenceQuantity: _v178
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.advanced,
                      priceCurrency: "USD",
                      name: "Advanced",
                      description: "Our Advanced plan comes with 240 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Standard plan, Advanced comes with Virtual events and webinars; Live Q&A, polls, and chats; Register up to 100 attendees per event; Branded invite & reminder emails; Real-time stream health; and Marketing integrations with Constant Contact, Hubspot, Mailchimp, Heap, and Campaign Monitor.",
                      referenceQuantity: _v178
                    }]
                  },
                  creator: _v177
                }
              }]
            })}</script>`
          }
        }), (0, _v9.jsx)("noscript", {
          suppressHydrationWarning: !0,
          children: (0, _v9.jsx)(_v171, {
            plansData: _v0,
            prices: _v1
          })
        }), (0, _v9.jsx)(_v144, {
          version: _v2.v,
          context: _v2.context,
          campaign: _v2.campaign
        })]
      });
    },
    _v180 = ["starter", "standard", "advanced"],
    _v181 = ["currency", "discount", "id", "metadata", "price", "promotion", "name", "uri", "tier", "priceFormatted"],
    _v182 = async (_v0, _v1) => {
      try {
        let _v0 = await (0, _v14.getSubscriptionPlans)({
            baseUrl: _v0,
            select: _v181,
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
  (0, _v13.withPageSetup)(async _v0 => {
    let _v1 = await _v182(_v0.baseUrl, _v0.jwt);
    return {
      props: {
        hasThemeSupport: !0,
        plansData: _v1,
        prices: (_v0 => {
          if (!_v0) return _v175;
          let _v1 = {
            ..._v175
          };
          for (let _v0 of _v180) {
            let _v0 = _v0.find(_v0 => _v0.tier === _v0)?.price?.annualMonthly;
            if ("number" != typeof _v0) return _v175;
            _v1[_v0] = _v0.toFixed(2);
          }
          return _v1;
        })(_v1)
      }
    };
  }, {
    inlineViewer: "all"
  }), _v179.getLayout = _v0 => (0, _v9.jsxs)(_v172.QueryParamProvider, {
    children: [_v0, (0, _v9.jsx)(_v16.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v179], 0);
}