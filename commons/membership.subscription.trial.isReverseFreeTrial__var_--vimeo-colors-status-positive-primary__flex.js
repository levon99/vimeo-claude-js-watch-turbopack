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
    _v27 = _v0.i(0);
  let _v28 = ["membership.subscription.trial.isReverseFreeTrial"];
  var _v29 = _v0.i(0),
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
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = () => (0, _v1.jsx)(_v12.Box, {
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
        children: (0, _v20.translate)({
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
    _v54 = ({
      children: _v0,
      isSelected: _v1
    }) => (0, _v1.jsxs)(_v12.Box, {
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
    _v55 = ({
      onClick: _v0,
      checked: _v1,
      isMobile: _v2
    }) => (0, _v1.jsxs)(_v51.Flex, {
      alignItems: _v2 ? "flex-end" : "center",
      gap: (0, _v15.rem)(16),
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v54, {
        isSelected: !_v1,
        children: (0, _v20.translate)({
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
      }), (0, _v1.jsx)(_v52.Switch, {
        size: "lg",
        isChecked: _v1,
        onChange: _v0,
        "aria-label": "Toggle billing frequency"
      }), (0, _v1.jsxs)(_v51.Flex, {
        direction: _v2 ? "column-reverse" : "row",
        alignItems: _v2 ? "flex-start" : "center",
        gap: (0, _v15.rem)(4),
        children: [(0, _v1.jsx)(_v54, {
          isSelected: _v1,
          children: (0, _v20.translate)({
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
        }), (0, _v1.jsx)(_v53, {})]
      })]
    });
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = _v57.default.div.withConfig({
      displayName: "styles__StyledToggle",
      componentId: "sc-c583c415-0"
    })`
  color: var(--vimeo-colors-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  border-width: ${(0, _v56.rem)(2)};
  border-color: var(--vimeo-colors-text-primary);
  padding: ${(0, _v56.rem)(8)} 0;
  transition: all 250ms ease-in-out 0s;
  position: relative;
  border-radius: 3rem;
  margin: 0 ${(0, _v56.rem)(8)} 0 ${(0, _v56.rem)(8)};
  background: ${({
      theme: _v0
    }) => "dark" === _v0.name ? "#181E24" : "none"};
  &::after {
    position: absolute;
    left: ${(0, _v56.rem)(4)};
    right: auto;
    content: '';
    display: block;
    background: var(--vimeo-colors-text-primary);
    opacity: 1;
    transition: all 250ms ease-in-out 0s;
    width: 50%;
    height: ${(0, _v56.rem)(30)};
    border-radius: ${(0, _v56.rem)(20)};
  }
`,
    _v59 = _v57.default.div.withConfig({
      displayName: "styles__ToggleContainer",
      componentId: "sc-c583c415-1"
    })`
  display: inline-block;
  &:active > ${_v58} {
    background-color: rgba(20, 26, 32, 0.3);
  }
`,
    _v60 = _v57.default.input.withConfig({
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
  &:checked ~ ${_v58} {
    &::after {
      transform: translateX(calc(100% - 7px));
    }
  }
`,
    _v61 = _v57.default.p.withConfig({
      displayName: "styles__ToggleLabel",
      componentId: "sc-c583c415-3"
    })`
  z-index: 1;
  font-size: ${(0, _v56.rem)(16)};
  letter-spacing: ${(0, _v56.rem)(-.48)};
  white-space: nowrap;
  text-align: center;
  padding: 0 ${(0, _v56.rem)(20)};
  width: ${({
      width: _v0
    }) => _v0 && (0, _v56.rem)(_v0)};
  ${({
      checked: _v0
    }) => _v0 && _v57.css`
      color: var(--vimeo-colors-text-button-inverted);
    `};
`,
    _v62 = ({
      onClick: _v0,
      checked: _v1
    }) => {
      let [_v2, _v3] = (0, _v4.useState)(""),
        _v4 = (0, _v4.useRef)(null),
        _v5 = (0, _v4.useCallback)(() => {
          let _v0 = _v4.current;
          if (!_v0) return;
          let _v1 = _v0.children;
          if (_v1.length && !_v2) {
            let _v0 = 0;
            for (let _v0 of _v1) _v0 && _v0?.offsetWidth > _v0 && (_v0 = _v0?.offsetWidth);
            _v3(_v0);
          }
        }, [_v4, _v2]);
      return (0, _v4.useEffect)(() => {
        _v5();
      }, [_v5]), (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsxs)(_v59, {
          onClick: _v0,
          children: [(0, _v1.jsx)(_v60, {
            checked: _v1,
            type: "checkbox"
          }), (0, _v1.jsxs)(_v58, {
            ref: _v4,
            children: [(0, _v1.jsx)(_v61, {
              checked: !_v1,
              width: _v2,
              children: (0, _v20.translate)({
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
            }), (0, _v1.jsx)(_v61, {
              checked: _v1,
              width: _v2,
              children: (0, _v20.translate)({
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
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  let _v65 = _v57.default.div.withConfig({
      displayName: "styles__TagContainer",
      componentId: "sc-2420be19-0"
    })`
  background: ${_v0 => (0, _v64.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
  padding: ${(0, _v56.rem)(4)} ${(0, _v56.rem)(6)} ${(0, _v56.rem)(4)} ${(0, _v56.rem)(8)};
  border-radius: ${(0, _v56.rem)(12)};
  color: ${_v0 => (0, _v64.getTagColor)(_v0.showYearly, _v0.theme.name)};
  font-size: ${(0, _v56.rem)(16)};
  font-weight: 400;
  line-height: 130%;
  letter-spacing: ${(0, _v56.rem)(-.32)};
  position: relative;
  margin-left: ${(0, _v56.rem)(9)};
  margin-bottom: 0px;
  &:before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-right: ${(0, _v56.rem)(6)} solid
      ${_v0 => (0, _v64.getTagBackgroundColor)(_v0.showYearly, _v0.theme.name)};
    border-top: ${(0, _v56.rem)(4)} solid transparent;
    border-bottom: ${(0, _v56.rem)(4)} solid transparent;
    border-left: 0px;
    top: ${(0, _v56.rem)(10)};
    left: ${(0, _v56.rem)(-6)};
  }
`,
    _v66 = ({
      showYearly: _v0
    }) => ((0, _v63.useIsBokeh)(), (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v65, {
        showYearly: _v0,
        children: (0, _v1.jsx)("p", {
          children: (0, _v20.translate)({
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
    _v67 = _v0 => {
      let _v1,
        _v2,
        _v3,
        {
          trackPricingPageSeeBusinessTiersClicked: _v4,
          trackPricingPageSeeIndividualTiersClicked: _v5
        } = (0, _v32.usePricingTracking)();
      if (_v0.onRequestEligibility) _v1 = (0, _v20.translate)({
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
      }), _v2 = (0, _v20.translate)({
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
        _v1 = _v0 ? (0, _v20.translate)({
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
        }) : (0, _v20.translate)({
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
        }), _v2 = _v0 ? (0, _v20.translate)({
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
        }) : (0, _v20.translate)({
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
      return (0, _v1.jsx)(_v12.Box, {
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
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = {
      amount: 0,
      currency: "USD"
    },
    _v82 = ({
      isOpen: _v0,
      onClose: _v1,
      onAddBundle: _v2,
      onContinueWithoutBundle: _v3,
      bundleType: _v4,
      price: _v5,
      fullPrice: _v6,
      bundlePrice: _v7
    }) => {
      let _v8 = (0, _v79.getBundleMemberCount)(),
        {
          trackBundleOfferCtaClick: _v9
        } = (0, _v77.useBundleTracking)();
      return (0, _v1.jsxs)(_v70.Modal, {
        isOpen: _v0,
        onClose: _v1,
        isCentered: !0,
        size: "lg",
        children: [(0, _v1.jsx)(_v75.ModalOverlay, {}), (0, _v1.jsxs)(_v73.ModalContent, {
          padding: (0, _v15.rem)(24),
          children: [(0, _v1.jsx)(_v72.ModalCloseButton, {
            "aria-label": String((0, _v76.translate)({
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
          }), (0, _v1.jsx)(_v74.ModalHeader, {
            padding: (0, _v15.rem)(0),
            paddingRight: (0, _v15.rem)(40),
            children: (0, _v1.jsx)(_v14.Text, {
              as: "h2",
              variant: "heading-lg",
              fontSize: (0, _v15.rem)(30),
              lineHeight: 1.2,
              letterSpacing: (0, _v15.rem)(-1.2),
              color: "text-primary",
              children: (0, _v78.getBundleOfferModalTitle)(_v5, _v8)
            })
          }), (0, _v1.jsx)(_v71.ModalBody, {
            padding: (0, _v15.rem)(0),
            marginTop: (0, _v15.rem)(24),
            children: (0, _v1.jsxs)(_v51.Flex, {
              direction: "column",
              gap: (0, _v15.rem)(8),
              children: [_v0 && (0, _v1.jsx)(_v80.BundlePaywallBanner, {
                bundleType: _v4,
                surface: "offer",
                price: _v5 ?? _v81,
                fullPrice: _v6,
                showLink: !0,
                trackingSurface: "bundle_offer_modal",
                bundlePrice: _v7 ?? null,
                onSeeAllClick: () => {
                  _v1(), window.location.assign(_v69.BUNDLE_LIBRARY_PATH);
                }
              }), (0, _v1.jsx)(_v13.Button, {
                variant: "brand",
                size: "lg",
                width: "100%",
                onClick: () => {
                  _v9({
                    surface: "bundle_offer_modal",
                    cta: "add_bundle",
                    bundleIncluded: !0
                  }), _v2();
                },
                children: (0, _v78.getBundleOfferAddCtaLabel)(_v5)
              }), (0, _v1.jsx)(_v13.Button, {
                variant: "tertiary",
                size: "lg",
                width: "100%",
                onClick: () => {
                  _v9({
                    surface: "bundle_offer_modal",
                    cta: "continue_without_bundle",
                    bundleIncluded: !1
                  }), _v3();
                },
                children: (0, _v78.getBundleOfferDismissCtaLabel)()
              })]
            })
          })]
        })]
      });
    };
  var _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = () => {
      window.location.assign(_v69.BUNDLE_LIBRARY_PATH);
    },
    _v86 = () => {
      let _v0 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.isEnabled),
        _v1 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.bundleType),
        _v2 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.price),
        _v3 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.priceTier),
        _v4 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.isBundleActive),
        _v5 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.toggleBundle),
        _v6 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.isOfferModalOpen),
        _v7 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.closeOfferModal),
        _v8 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.addBundleAndContinue),
        _v9 = (0, _v68.useBundleOfferSelector)(_v0 => _v0.continueWithoutBundle),
        {
          width: _v10
        } = (0, _v39.useWindowSize)();
      if (!_v0 || !_v1) return null;
      let _v11 = null !== _v2 ? (0, _v84.resolveBundleIdealAmount)({
          periodicity: "annual",
          currency: _v2.currency
        }) : null,
        _v12 = null !== _v2 && null !== _v11 && _v11.currency === _v2.currency ? _v11 : void 0,
        _v13 = _v10 <= 768 ? "100%" : `min(100%, ${(0, _v15.rem)(586)})`;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v12.Box, {
          width: "100%",
          maxWidth: _v10 > 0 ? "1440px" : _v13,
          margin: `${(0, _v15.rem)(24)} auto 0`,
          padding: `0 ${(0, _v15.rem)(2)}`,
          children: (0, _v1.jsx)(_v83.BundleToggleBanner, {
            bundleType: _v1,
            isBundleActive: _v4,
            onToggleBundle: _v5,
            price: _v2,
            fullPrice: _v12,
            onLearnMoreClick: _v85,
            surface: "pricing_page",
            bundlePrice: _v3
          })
        }), (0, _v1.jsx)(_v82, {
          isOpen: _v6,
          onClose: _v7,
          onAddBundle: _v8,
          onContinueWithoutBundle: _v9,
          bundleType: _v1,
          price: _v2,
          fullPrice: _v12,
          bundlePrice: _v3
        })]
      });
    };
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0);
  let _v90 = _v0 => {
    let _v1 = (0, _v4.useContext)(_v40.ViewerContext),
      _v2 = (0, _v4.useContext)(_v44.OverridesContext),
      _v3 = _v2.description || !_v1?.user,
      {
        isMobileBreakpoint: _v4,
        redirectUrl: _v5
      } = _v0;
    return (0, _v1.jsxs)(_v12.Box, {
      padding: `0 ${(0, _v88.space)(600)}`,
      children: [(0, _v1.jsx)(_v12.Box, {
        textAlign: "center",
        children: (0, _v1.jsx)(_v87.Header, {
          size: "xl",
          fontSize: _v4 ? (0, _v15.rem)(30) : _v2?.titleSize ?? (0, _v15.rem)(92),
          lineHeight: _v4 ? (0, _v15.rem)(36) : (0, _v15.rem)(92),
          fontWeight: 500,
          children: _v2?.title ? _v2.title : _v89.PRIMARY_HEADERS.theUltimateAdFreePlayer
        })
      }), _v2?.displayRedirect && _v5 && (0, _v1.jsx)(_v12.Box, {
        textAlign: "center",
        margin: `${(0, _v15.rem)(10)} 0 ${(0, _v15.rem)(15)}`,
        children: (0, _v1.jsx)(_v87.Header, {
          size: "sm",
          fontWeight: 400,
          children: _v89.SECONDARY_HEADERS.getStartedWithFreeConcise(_v5)
        })
      }), _v3 && (0, _v1.jsx)(_v12.Box, {
        textAlign: "center",
        margin: `${(0, _v15.rem)(10)} 0 ${(0, _v15.rem)(15)}`,
        children: (0, _v1.jsx)(_v87.Header, {
          size: _v4 ? "sm" : "md",
          fontFamily: "body",
          children: _v2?.description !== void 0 && _v2?.description !== null ? _v2.description : _v89.SECONDARY_HEADERS.getStartedWithBasic
        })
      })]
    });
  };
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = ({
      onRequestEligibility: _v0
    }) => (0, _v1.jsxs)(_v93.AlertRoot, {
      variant: "info",
      size: "md",
      borderRadius: "1.25rem",
      padding: 4,
      gap: 4,
      alignItems: "center",
      children: [(0, _v1.jsxs)(_v51.Flex, {
        direction: "column",
        gap: 1,
        children: [(0, _v1.jsx)(_v14.Text, {
          variant: "body-xl",
          color: "text-primary",
          fontFamily: "heading",
          children: (0, _v20.translate)({
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
        }), (0, _v1.jsxs)(_v14.Text, {
          variant: "body-lg",
          color: "text-secondary",
          children: [(0, _v20.translate)({
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
          }), (0, _v1.jsx)("br", {}), (0, _v20.translate)({
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
      }), (0, _v1.jsx)(_v13.Button, {
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
        children: (0, _v20.translate)({
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
    _v95 = (0, _v2.default)(async () => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v96 = (0, _v2.default)(async () => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v97 = (0, _v2.default)(async () => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v98 = (0, _v2.default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v99 = ["ES", "FR", "BR", "NL", "NO", "FI", "MX", "SE", "DK", "BE"];
  _v0.s(["default", 0, _v0 => {
    let {
        context: _v1,
        campaign: _v2,
        onDismiss: _v3,
        onContinueWithFreePlan: _v4,
        paywallTracking: _v5
      } = _v0,
      _v6 = (0, _v23.useOrionSettingsFields)(["pricing_page_default_periodicity", "allow_downgrade_from_pricing_page", "core_tier_enabled", "flat_tiers_monthly_enabled", "b2b_offer_permanent_discount_when_arr_off_upgrade_plan", "onboarding_paywall_pricing_page_show_back_link"]),
      _v7 = (0, _v22.useOrionLoading)(),
      [_v8, _v9] = (0, _v4.useState)(!1),
      [_v10, _v11] = (0, _v4.useState)(!1),
      [_v12, _v13] = (0, _v4.useState)(void 0),
      [_v14, _v15] = (0, _v4.useState)(Date.now()),
      _v16 = (0, _v4.useContext)(_v40.ViewerContext),
      {
        locale: _v17
      } = (0, _v19.useGctlConfig)(),
      [_v18, _v19] = (0, _v4.useState)("monthly" !== _v6.pricing_page_default_periodicity),
      _v20 = (0, _v17.useToast)(),
      _v21 = (0, _v4.useRef)(!1),
      _v22 = (0, _v4.useRef)(!1);
    (0, _v4.useEffect)(() => {
      _v21.current || _v22.current || _v19("monthly" !== _v6.pricing_page_default_periodicity);
    }, [_v6.pricing_page_default_periodicity]);
    let {
        areBusinessPlansEnforced: _v23,
        isWhitelistedForIndPlans: _v24,
        showIndividualPlans: _v25,
        hasSubmittedSurvey: _v26,
        canRequestEligibility: _v27
      } = (0, _v9.useB2BRepackagingContext)(),
      {
        open: _v28,
        modal: _v29
      } = (0, _v10.useIndividualEligibilityModal)({
        initialStep: _v26 && !_v24 ? "not_qualified" : void 0
      }),
      _v30 = (0, _v3.useSearchParams)(),
      _v31 = _v30 ? _v30.get("extole_coupon") : null,
      _v32 = _v30 ? _v30.get("promo_code_id") : null,
      _v33 = (0, _v68.resolveInitialBundleToggle)(_v30),
      _v34 = !!_v16?.user,
      _v35 = _v5?.paywallTrigger ?? _v30?.get("paywall_trigger") ?? "unknown",
      _v36 = _v5?.paywallLocation ?? _v30?.get("paywall_location") ?? "unknown",
      _v37 = _v5?.paywallFeature ?? _v30?.get("paywall_feature") ?? "unknown",
      _v38 = (0, _v21.useCampaignIdOverride)() ?? _v2,
      {
        campaignId: _v39,
        isLoading: _v40
      } = (0, _v48.useRepackagingCampaign)(_v38),
      {
        tier: _v41,
        hasAutorenew: _v42,
        renewalDate: _v43
      } = (0, _v11.useUpcomingTier)(),
      _v44 = _v16?.teamUser?.accountType?.toString() ?? _v16?.user?.account?.toString() ?? "",
      _v45 = _v38.RepackagedTiers.includes(_v44) ? _v44 : void 0,
      _v46 = null != _v41 && _v38.RepackagedTiers.includes(_v41) || _v38.RepackagedTiers.includes(_v44),
      _v47 = _v7 || _v38 || !_v46 ? null : _v21.RP_2026_LOW_CAMPAIGN_ID,
      _v48 = _v38 ?? _v47 ?? _v39,
      _v49 = null != _v48 && _v21.REPACKAGING_CAMPAIGN_IDS.includes(_v48),
      _v50 = _v49 || _v6.allow_downgrade_from_pricing_page,
      {
        capabilities: {
          hasMonthlyBilling: _v51,
          hasPaid: _v52,
          inAppSubscription: _v53
        },
        ready: _v54
      } = (0, _v18.useCapability)(["hasMonthlyBilling", "hasPaid", "inAppSubscription"]),
      _v55 = _v54 && _v51,
      {
        isReverseFreeTrial: _v56
      } = function () {
        let _v0 = (0, _v27.useViewer)(),
          _v1 = _v0?.user?.id,
          {
            data: _v2,
            isLoading: _v3
          } = (0, _v26.useGetUser)(() => null == _v1 ? null : {
            select: _v28,
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
        width: _v57
      } = (0, _v39.useWindowSize)(),
      _v58 = _v57 <= 0,
      [_v59, _v60] = (0, _v4.useState)(""),
      _v61 = (0, _v16.useColorMode)(),
      {
        trackPricingPagePeriodicityToggled: _v62
      } = (0, _v32.usePricingTracking)(),
      {
        trackIndividualEligibilityCtaClicked: _v63
      } = (0, _v30.useIndividualEligibilityTracking)(),
      _v64 = () => {
        _v21.current = !0, _v62({
          selectedPeriodicity: _v18 ? "monthly" : "yearly"
        }), _v19(!_v18);
      };
    (0, _v4.useEffect)(() => {
      let _v0 = sessionStorage.getItem("redirectUrl");
      _v0 && ("/welcome" !== _v0 ? _v60(_v0) : _v60("/"));
    }, []);
    let _v65 = {
      bypassTierHierarchy: !0
    };
    _v31 && (_v65.promos = JSON.stringify({
      extole: _v31
    })), _v48 && (_v65.campaignId = _v48, _v65.usePaymentsService = !0), _v32 && (_v65.promoCodeId = _v32);
    let _v66 = (0, _v34.useGetSubscriptionPlansData)(_v12?.customSelfServeComapreTable ? _v12?.plans : void 0, void 0, void 0, _v65),
      _v67 = (0, _v4.useMemo)(() => (0, _v35.applyPlanAvailabilityPolicy)(_v66, {
        coreTierEnabled: _v6.core_tier_enabled,
        flatTierMonthlyEnabled: _v6.flat_tiers_monthly_enabled
      }), [_v66, _v6.core_tier_enabled, _v6.flat_tiers_monthly_enabled]),
      {
        data: _v68
      } = (0, _v49.useSubscriptionPlansUsageCheck)(_v49 ? _v42.REPACKAGING_COMPARISON_TIERS.filter(_v0 => "free" !== _v0) : []),
      {
        shouldReorder: _v69
      } = (0, _v46.useColdStoragePlanReorder)(),
      _v70 = _v69 && !_v49 && !_v58 && void 0 !== _v67,
      {
        trackColdStoragePlanReorderDisplayed: _v71
      } = (0, _v29.useColdStorageReorderTracking)(),
      _v72 = (0, _v4.useRef)(!1);
    (0, _v4.useEffect)(() => {
      _v70 && !_v72.current && (_v72.current = !0, _v71({
        surface: "upgrade_page"
      }));
    }, [_v70, _v71]);
    let _v73 = _v67?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased")?.tier,
      _v74 = _v50 && _v42 ? _v41 : void 0,
      _v75 = _v50 ? _v41 ?? _v73 ?? _v45 : void 0,
      _v76 = !_v25,
      _v77 = (0, _v5.isPermanentDiscountOfferEligible)({
        isSettingEnabled: _v6.b2b_offer_permanent_discount_when_arr_off_upgrade_plan,
        hasAutorenew: _v42,
        scheduledTier: _v41,
        areBusinessPlansEnforced: _v23,
        isWhitelistedForIndPlans: _v24
      }),
      _v78 = (0, _v4.useMemo)(() => _v67?.find(_v0 => "studio" === _v0.tier) ?? null, [_v67]),
      _v79 = (0, _v4.useMemo)(() => _v67?.find(_v0 => "professional" === _v0.tier) ?? null, [_v67]),
      _v80 = (0, _v4.useMemo)(() => _v77 && _v78 ? (0, _v6.resolveStudioRenewalDiscount)({
        studioPlan: _v78,
        professionalPlan: _v79,
        isAnnual: _v18
      }) : null, [_v77, _v78, _v79, _v18]),
      [_v81, _v82] = (0, _v4.useState)(!1),
      _v83 = (0, _v4.useRef)(!1),
      {
        acceptRenewalOffer: _v84,
        isAccepting: _v85
      } = (0, _v8.useAcceptStudioRenewalOffer)(),
      {
        trackStudioRenewalOfferCtaClicked: _v86,
        trackStudioRenewalOfferAccepted: _v87,
        trackStudioRenewalOfferFailed: _v88
      } = (0, _v33.useStudioRenewalOfferTracking)();
    (0, _v33.useStudioRenewalOfferDisplayed)({
      isOpen: _v81,
      savingsPercent: _v80?.savingsPercent ?? 0,
      location: "upgrade_plan"
    }), (0, _v33.useStudioRenewalOfferDismissed)({
      isOpen: _v81,
      savingsPercent: _v80?.savingsPercent ?? 0,
      wasAcceptedRef: _v83,
      location: "upgrade_plan"
    });
    let _v89 = (0, _v4.useCallback)(() => {
        _v82(!1), window.location.reload();
      }, [_v82]),
      _v90 = (0, _v4.useCallback)(async () => {
        let _v0 = _v18 ? _v78?.id?.annual ?? "" : _v78?.id?.monthly ?? "",
          _v1 = _v80?.savingsPercent;
        if ("" !== _v0 && null != _v1 && !(_v1 <= 0)) {
          _v86({
            copy: (0, _v20.translate)({
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
            await _v84({
              billingPlanId: _v0,
              discountPercent: _v1
            }), _v83.current = !0;
          } catch (_v0) {
            _v88({
              errorMessage: _v0 instanceof Error ? _v0.message : String(_v0),
              location: "upgrade_plan"
            }), _v20({
              variant: "warning",
              title: (0, _v20.translate)({
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
            await _v87({
              savingsPercent: _v80?.savingsPercent ?? null,
              periodicity: _v18 ? "annual" : "monthly",
              location: "upgrade_plan"
            });
          } catch (_v0) {
            console.warn("Failed to track studio_renewal_offer_accepted", _v0);
          }
          _v89();
        }
      }, [_v84, _v89, _v18, _v78, _v80, _v20, _v86, _v88]),
      _v91 = (_v0 => {
        if (!_v0) return;
        let _v1 = _v12?.plans ? [..._v0] : _v67 ? [..._v67] : [],
          _v2 = _v75 ? (0, _v37.getTierComparisonRank)(_v75) ?? 0 : -1,
          _v3 = ["free", "starter", "basic", "plus", "customSelfServe", "proSolution", "production"];
        _v49 && _v3.push("creator");
        let _v4 = _v49 ? (0, _v50.getFeatureFloorRank)(_v37) : void 0,
          _v5 = _v0 => {
            for (let _v0 of _v1) {
              let {
                  metadata: _v0,
                  tier: _v1
                } = _v0,
                _v2 = _v0?.interactions?.purchase?.status,
                _v3 = _v0?.purchasedProduct?.isMonthly;
              if ("available" === (0, _v36.getEffectivePurchaseStatus)({
                purchaseStatus: _v2,
                tier: _v1,
                isViewingAnnual: _v18,
                isPurchasedMonthly: _v3
              }) && !_v3.includes(_v1) && (!_v49 || ((0, _v37.getTierComparisonRank)(_v1) ?? 0) > _v2) && (void 0 === _v0 || ((0, _v37.getTierComparisonRank)(_v1) ?? 0) >= _v0)) return _v1;
            }
          };
        return _v5(_v4) ?? _v5(void 0);
      })(_v67),
      _v92 = (0, _v4.useMemo)(() => "studio" === _v41 ? "business" : _v24 ? "individual" : "studio" === _v75 || "production" === _v75 ? "business" : "individual", [_v75, _v24, _v41]),
      [_v93, _v94] = (0, _v4.useState)(null),
      _v95 = _v76 ? "business" : _v93 ?? _v92,
      _v96 = () => {
        _v94("individual" === _v95 ? "business" : "individual");
      },
      _v97 = (0, _v4.useMemo)(() => "production" === _v75 ? ["studio", "production", "enterprise"] : _v76 ? ["studio", "enterprise"] : ["professional", "studio", "enterprise"], [_v75, _v76]),
      _v98 = !_v76 && (_v58 || _v23 || "studio" !== _v75 && "production" !== _v75 || "individual" === _v95),
      _v99 = void 0 !== _v75 && _v42.REPACKAGING_PAID_PLANS.includes(_v75);
    (0, _v4.useEffect)(() => {
      if (_v74 && _v54) {
        _v22.current = !0, _v19(!_v55);
        return;
      }
      _v67?.some(_v0 => "free" !== _v0.tier && _v0.metadata?.purchasedProduct !== void 0 && !_v0.metadata.purchasedProduct.isMonthly) ? (_v22.current = !0, _v19(!0)) : _v54 && _v52 && _v55 && (_v22.current = !0, _v19(!1));
    }, [_v67, _v74, _v54, _v55, _v52]), (0, _v4.useEffect)(() => {
      !_v34 && _v12?.redirectLoggedOut && (window.location.href = "/log_in"), void 0 !== _v67 && (_v9((_v0 => {
        let _v1 = !1;
        for (let _v0 of _v0) if ("plus" !== _v0.tier) if (_v0.price.monthly) {
          _v1 = !0;
          break;
        } else _v1 = !1;
        return _v1;
      })(_v67)), _v11(!0), null != _v14 && _v15(null)), _v12 && void 0 !== _v12.showMonthlyToggle && (_v9(_v12.showMonthlyToggle), _v11(!0));
    }, [_v67, _v14, _v12, _v34]), (0, _v4.useEffect)(() => {
      !_v34 && _v16?.location && _v99.includes(_v16.location.toUpperCase()) && (window.location.href = "/log_in");
    }, [_v34, _v16?.location]), (0, _v4.useEffect)(() => {
      void 0 === _v12 && (async _v0 => {
        _v13((0, (await _v0.A(0)).default)(_v0));
      })(_v1);
    }, [_v1, _v12]);
    let _v100 = !!(_v67 && _v67.some(_v0 => void 0 !== _v0.promotion) && _v18 && _v8 && !_v58),
      _v101 = _v10 && _v8 && !(_v52 && !_v55 && !_v56) && !_v74 && (_v49 || !_v58),
      _v102 = (0, _v4.useMemo)(() => {
        if (!_v67) return;
        if (!_v49) return (_v12?.plans ? _v67.filter(_v0 => _v12.plans?.includes(_v0.tier)) : _v12?.excludedPlans ? _v67.filter(_v0 => !_v12.excludedPlans?.includes(_v0.tier)) : _v67).map(_v0 => _v0.tier);
        let _v0 = new Set(_v67.map(_v0 => _v0.tier)),
          _v1 = _v0.has("core");
        return ("individual" === _v95 ? _v42.REPACKAGING_INDIVIDUAL_VIEW_TIERS : _v97).filter(_v0 => ("free" !== _v0 || !_v99 && !_v1) && _v0.has(_v0));
      }, [_v67, _v49, _v95, _v99, _v97, _v12]),
      _v103 = (0, _v4.useMemo)(() => _v8 ? ["monthly", "yearly"] : ["yearly"], [_v8]),
      _v104 = function (_v0) {
        let _v1 = (0, _v27.useViewer)(),
          _v2 = (0, _v21.useIsRepackFreeWithRepackagingCampaign)(),
          _v3 = (0, _v23.useOrionSettingsFields)(["pricing_page_dismiss_offer_triggers", "pricing_page_dismiss_offer_max_displays", "dismiss_offer_paywall_variant"]),
          [_v4, _v5] = (0, _v4.useState)(!1),
          [_v6, _v7] = (0, _v4.useState)("pricing_logo_click"),
          _v8 = _v1?.user?.id,
          _v9 = (0, _v4.useRef)(!1),
          _v10 = _v1?.teamUser?.accountType?.toString() ?? _v1?.user?.account?.toString(),
          _v11 = null != _v8 && !_v1?.user?.capabilities?.hasPaid && ("free" === _v10 || "basic" === _v10),
          _v12 = (0, _v4.useCallback)(_v0 => {
            let _v1 = _v3.pricing_page_dismiss_offer_triggers;
            return !(!_v0 || !_v11 || _v2 || "off" === _v1 || "pricing_logo_click" === _v0 && "logo_click" !== _v1 && "both" !== _v1 || null == _v8 || _v9.current || (0, _v47.hasDismissOfferBeenDisplayed)(_v8, "pricing_page", _v3.pricing_page_dismiss_offer_max_displays)) && (_v9.current = !0, (0, _v47.markDismissOfferDisplayed)(_v8, "pricing_page"), _v7(_v0), _v5(!0), !0);
          }, [_v0, _v11, _v2, _v3.pricing_page_dismiss_offer_triggers, _v3.pricing_page_dismiss_offer_max_displays, _v8]),
          _v13 = (0, _v4.useCallback)(() => _v5(!1), []),
          _v14 = (0, _v4.useEffectEvent)(_v0 => {
            null !== _v0.relatedTarget || _v4 || _v12("pricing_exit_intent");
          });
        return (0, _v4.useEffect)(() => {
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
      }(null !== _v16 && void 0 !== _v67 && void 0 !== _v12 && !_v40 && !(!_v34 && _v12?.redirectLoggedOut)),
      {
        trackPaywallCtaClicked: _v105,
        trackPaywallDismissed: _v106
      } = (0, _v31.usePaywallTracking)({
        paywallTrigger: _v35,
        paywallLocation: _v36,
        paywallType: "page",
        paywallFeature: _v37,
        paywallStyle: "upgrade_plan",
        paywallPlansDisplayed: _v102 ?? [],
        paywallPeriodicitiesDisplayed: _v103,
        isVisible: null !== _v16 && void 0 !== _v67 && void 0 !== _v12 && _v10 && !_v40 && !(!_v34 && _v12?.redirectLoggedOut),
        displayKey: _v49 ? _v95 : void 0
      }),
      _v107 = (0, _v4.useCallback)(() => _v4 ? (0, _v1.jsx)(_v13.Button, {
        size: "lg",
        width: "100%",
        bgColor: "text-primary",
        variant: "primary",
        color: "surface",
        onClick: () => {
          _v105("primary"), _v106(), _v4();
        },
        children: (0, _v20.translate)({
          singular: "Continue with free plan",
          dictionary: {
            es: {
              singular: "Continuar con el plan gratuito"
            },
            "de-DE": {
              singular: "Mit dem kostenlosen Tarif fortfahren"
            },
            "fr-FR": {
              singular: "Continuer avec le forfait gratuit"
            },
            "ja-JP": {
              singular: "無料プランを継続する"
            },
            "ko-KR": {
              singular: "무료 플랜으로 계속하기"
            },
            "pt-BR": {
              singular: "Continuar com o plano gratuito"
            },
            "zh-CN": {
              singular: "继续使用免费计划"
            }
          }
        })
      }) : null, [_v4, _v105, _v106]),
      _v108 = (0, _v4.useMemo)(() => _v4 ? {
        ...(_v12 ?? {}),
        ctaTreatment: "free_trial_primary",
        paidPlanCtaLabel: (0, _v20.translate)({
          singular: "Start 7 days free trial",
          dictionary: {
            es: {
              singular: "Iniciar prueba gratuita de 7 días"
            },
            "de-DE": {
              singular: "7 Tage kostenlos testen"
            },
            "fr-FR": {
              singular: "Commencer l'essai gratuit de 7 jours"
            },
            "ja-JP": {
              singular: "7日間の無料トライアルを開始する"
            },
            "ko-KR": {
              singular: "7일 무료 체험 시작"
            },
            "pt-BR": {
              singular: "Iniciar teste gratuito de 7 dias"
            },
            "zh-CN": {
              singular: "开始 7 天免费试用"
            }
          }
        }),
        hidePaidPlanSecondaryLinks: !0,
        description: _v43.PLAN_HEADER_DESCRIPTION.getStartedWithFreePlan
      } : _v12, [_v4, _v12]);
    return null === _v16 || void 0 === _v67 || _v40 || !_v34 && _v12?.redirectLoggedOut ? (0, _v1.jsx)(_v91.default, {}) : (0, _v1.jsxs)(_v41.default, {
      isMobileBreakpoint: _v58,
      onLogoClick: () => _v104.open("pricing_logo_click"),
      disableLogoLink: !!_v3,
      topRightAction: _v3 && _v6.onboarding_paywall_pricing_page_show_back_link ? (0, _v1.jsx)(_v13.Button, {
        size: "sm",
        p: "1.25rem",
        borderRadius: "md",
        variant: "tertiary",
        padding: "md",
        onClick: () => {
          _v106(), _v3();
        },
        children: (0, _v20.translate)({
          singular: "Back to intro offer",
          dictionary: {
            es: {
              singular: "Volver a la oferta introductoria"
            },
            "de-DE": {
              singular: "Zurück zum Einführungsangebot"
            },
            "fr-FR": {
              singular: "Retour à l'offre d'introduction"
            },
            "ja-JP": {
              singular: "イントロオファーに戻る"
            },
            "ko-KR": {
              singular: "소개 혜택으로 돌아가기"
            },
            "pt-BR": {
              singular: "Voltar para a oferta introdutória"
            },
            "zh-CN": {
              singular: "返回入门优惠"
            }
          }
        })
      }) : void 0,
      children: [void 0 !== _v108 && _v67 && (0, _v1.jsx)(_v44.OverridesContextProvider, {
        showYearly: _v18,
        viewer: _v16,
        overrides: _v108,
        children: (0, _v1.jsx)(_v45.PlansDataProvider, {
          overrides: _v108,
          plansData: _v67,
          isLoggedIn: _v34,
          capabilitiesReady: _v54,
          isPricingRedesign: _v49,
          downgradeEnabled: _v50,
          effectiveTier: _v75,
          upcomingTier: _v74,
          usageCheckData: _v68,
          hideIndividualPlans: _v76,
          children: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v12.Box, {
              children: (0, _v1.jsx)(_v90, {
                isMobileBreakpoint: _v58,
                redirectUrl: _v59
              })
            }), _v77 && (0, _v1.jsx)(_v12.Box, {
              width: "100%",
              maxWidth: (0, _v15.rem)(0),
              margin: "0 auto",
              padding: `0 ${(0, _v15.rem)(16)}`,
              children: (0, _v1.jsx)(_v94, {
                onRequestEligibility: () => {
                  _v63({
                    location: "upgrade_plan_banner"
                  }), _v28("upgrade_plan_banner");
                }
              })
            }), (0, _v1.jsxs)(_v68.BundleOfferProvider, {
              periodicity: _v58 && !_v74 || _v18 ? "annual" : "monthly",
              initialIsBundleActive: _v33,
              children: [(0, _v1.jsx)(_v86, {}), _v101 && (0, _v1.jsx)(_v12.Box, {
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
                marginTop: (0, _v15.rem)(40),
                alignItems: "center",
                children: _v49 ? (0, _v1.jsx)(_v55, {
                  checked: _v18,
                  onClick: _v64,
                  isMobile: _v58
                }) : (0, _v1.jsxs)(_v1.Fragment, {
                  children: [(0, _v1.jsx)(_v62, {
                    checked: _v18,
                    onClick: _v64
                  }), (0, _v1.jsx)(_v66, {
                    showYearly: _v18
                  })]
                })
              }), (0, _v1.jsx)(_v92.default, {
                showYearly: !!_v58 && !_v74 || _v18,
                isBillingFreqToggleAvailable: _v8 && !_v58,
                isPageTopToggleVisible: _v101,
                badgePlan: _v91,
                showStrikePrice: _v100,
                isMobileBreakpoint: _v58,
                planView: _v95,
                onSwitchView: _v96,
                businessTiers: _v97,
                showCrossSellCard: _v98,
                studioRenewalTier: _v77 ? _v41 : void 0,
                studioRenewalDiscount: _v80,
                onStudioRenewal: () => _v82(!0),
                renderFreePlanCta: _v4 ? _v107 : void 0,
                ignoreCurrentPlanState: !!_v4
              })]
            }), _v49 && !_v58 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v76 && _v27 && (0, _v1.jsx)(_v67, {
                onRequestEligibility: () => {
                  _v63({
                    location: "upgrade_plan_banner"
                  }), _v28("upgrade_plan_banner");
                }
              }), !_v76 && (0, _v1.jsx)(_v67, {
                planView: _v95,
                onSwitchView: _v96
              })]
            }), (0, _v1.jsxs)(_v12.Box, {
              maxWidth: (0, _v15.rem)(0),
              margin: `${(0, _v15.rem)(4)} auto`,
              padding: _v58 ? `${(0, _v15.rem)(0)} ${(0, _v15.rem)(24)}` : `${(0, _v15.rem)(75)} ${(0, _v15.rem)(28)}`,
              minHeight: _v58 ? "" : (0, _v15.rem)(240),
              children: [_v58 && (0, _v1.jsx)(_v14.Text, {
                textAlign: "center",
                marginBottom: (0, _v15.rem)(24),
                variant: "heading-lg",
                children: (0, _v20.translate)({
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
              }), (0, _v1.jsx)(_v97, {})]
            }), !_v58 && (0, _v1.jsx)(_v95, {
              showYearly: _v18,
              badgePlan: _v91,
              theme: _v61.colorMode,
              filteredTiers: _v49 ? [...("individual" !== _v95 || _v76 ? _v97 : _v42.REPACKAGING_INDIVIDUAL_VIEW_TIERS.filter(_v0 => "free" !== _v0 || !_v99))] : void 0
            }), _v108.terms && (0, _v1.jsx)(_v12.Box, {
              maxWidth: (0, _v15.rem)(0),
              margin: `${(0, _v15.rem)(4)} auto`,
              padding: _v58 ? `${(0, _v15.rem)(0)} ${(0, _v15.rem)(24)}` : `${(0, _v15.rem)(75)} ${(0, _v15.rem)(28)}`,
              children: (0, _v1.jsx)(_v14.Text, {
                variant: "body-xl",
                children: _v108.terms
              })
            }), !_v108.hideFaq && (0, _v1.jsx)(_v96, {
              isMobileBreakpoint: _v58
            })]
          })
        })
      }), _v53 && (0, _v1.jsx)(_v98, {}), _v104.isOpen && "wt_offer" === _v104.variant && (0, _v1.jsx)(_v24.PricingDismissOfferPaywall, {
        isOpen: !0,
        onClose: () => {
          _v104.close(), "pricing_logo_click" === _v104.tracking.paywallTrigger && window.location.assign("/");
        },
        paywallTracking: _v104.tracking
      }), _v104.isOpen && "ev_offer" === _v104.variant && (0, _v1.jsx)(_v25.WelcomeOfferModalPaywall, {
        isOpen: !0,
        onClose: () => {
          _v104.close(), "pricing_logo_click" === _v104.tracking.paywallTrigger && window.location.assign("/");
        },
        onDismiss: _v104.close,
        paywallTracking: _v104.tracking
      }), _v29, _v80 && (0, _v1.jsx)(_v7.StudioRenewalOfferModal, {
        isOpen: _v81,
        onClose: () => _v82(!1),
        savingsPercent: _v80.savingsPercent,
        discountedMonthlyPrice: _v80.discountedMonthlyPrice,
        fullMonthlyPrice: _v80.fullMonthlyPrice,
        currencyCode: _v78?.currency?.currencyCode,
        locale: _v17,
        studioPlan: _v78,
        renewalDate: _v43,
        isAnnual: _v18,
        onRenew: () => {
          _v90();
        },
        isRenewing: _v85
      })]
    });
  }], 0);
}