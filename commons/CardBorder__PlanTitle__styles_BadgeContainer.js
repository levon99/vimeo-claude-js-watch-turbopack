{
  "use strict";

  _v0.s(["CardBorder", () => _v90, "PlanTitle", () => _v92, "default", () => _v95], 0);
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
  let _v22 = _v19.default.div.withConfig({
      displayName: "styles__BadgeContainer",
      componentId: "sc-2c69964a-0"
    })`
  position: absolute;
  top: ${_v0 => _v0.$compact ? (0, _v18.rem)(-22) : (0, _v18.rem)(-24)};
  left: 0;
  background: ${({
      bgColor: _v0
    }) => _v0};
  color: white;
  border-radius: ${(0, _v18.rem)(20)} ${(0, _v18.rem)(20)} 0 0;
  height: ${_v0 => _v0.$compact ? (0, _v18.rem)(44) : (0, _v18.rem)(70)};
  width: 100%;
  text-align: center;

  @media (width > ${_v20.breakpoints.TABLET}) {
    top: ${_v0 => _v0.$compact ? (0, _v18.rem)(-22) : (0, _v18.rem)(-37)};
    min-height: ${_v0 => _v0.$compact ? (0, _v18.rem)(24) : (0, _v18.rem)(36)};
    height: ${_v0 => _v0.$compact ? (0, _v18.rem)(44) : (0, _v18.rem)(70)};
    padding: ${_v0 => _v0.$compact ? `${(0, _v18.rem)(4)} ${(0, _v18.rem)(24)}` : `${(0, _v18.rem)(6)} ${(0, _v18.rem)(24)}`};
  }

  > h2 {
    ${(0, _v21.addTypography)(12, 18)}
    color: #f0f4f6;
    font-weight: 500;
    line-height: ${(0, _v18.rem)(24)};
    margin: 0;
    letter-spacing: unset;
    @media (width > ${_v20.breakpoints.TABLET}) {
      line-height: ${(0, _v18.rem)(26)};
    }
  }
`,
    _v23 = _v19.default.div.withConfig({
      displayName: "styles__CurrentPlanBadgeContainer",
      componentId: "sc-2c69964a-1"
    })`
  border-radius: ${(0, _v18.rem)(20)};
  background: var(--vimeo-colors-button-secondary-default);
  padding: ${(0, _v18.rem)(8)} ${(0, _v18.rem)(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
  @media (max-width: ${_v20.breakpoints.DESKTOP_LARGE}) {
    padding: ${(0, _v18.rem)(6)} ${(0, _v18.rem)(1)};
  }
  .currentPlanText {
    ${(0, _v21.addTypography)(7, 14)}
    color: var(--vimeo-colors-text-secondary);
    font-weight: 400;
    padding: 0 ${(0, _v18.rem)(10)};
    margin: auto;
    line-height: 13.3px;
    letter-spacing: 0.56px;
  }
`,
    _v24 = ({
      color: _v0 = "#000",
      text: _v1,
      compact: _v2 = !1
    }) => (0, _v1.jsx)(_v22, {
      bgColor: _v0,
      $compact: _v2,
      children: (0, _v1.jsx)(_v6.Text, {
        variant: _v2 ? "heading-2xs" : "heading-md",
        children: _v1
      })
    }),
    _v25 = ({
      planData: _v0,
      showBadge: _v1
    }) => {
      let _v2 = (0, _v3.useContext)(_v15.OverridesContext);
      if (_v2?.noBadge) return null;
      let {
        tier: _v3
      } = _v0;
      return _v2?.badgeType && _v2?.badgePlan === _v3 ? (0, _v1.jsx)(_v24, {
        color: "#8A5EE8",
        text: _v2.badgeType,
        compact: _v2?.compact
      }) : _v1 ? (0, _v1.jsx)(_v24, {
        color: "#8A5EE8",
        text: (0, _v9.translate)({
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
        }),
        compact: _v2?.compact
      }) : null;
    },
    _v26 = ({
      showBadge: _v0,
      showUpcoming: _v1,
      label: _v2
    }) => _v0 || _v1 ? (0, _v1.jsx)(_v23, {
      children: (0, _v1.jsx)(_v6.Text, {
        as: "div",
        variant: "body-md",
        size: "6",
        className: "currentPlanText",
        children: _v2 ?? (0, _v9.translate)({
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
    _v27 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.Text, {
      variant: "heading-xs",
      margin: 0,
      textDecoration: "underline",
      cursor: "pointer",
      letterSpacing: (0, _v7.rem)(.48),
      children: _v0
    }),
    _v28 = () => (0, _v1.jsx)(_v4.Box, {
      padding: `0 ${(0, _v7.rem)(40)}`,
      width: "100%",
      position: "absolute",
      bottom: (0, _v7.rem)(36),
      onClick: () => {
        document.getElementById("compare_plans_table_header")?.scrollIntoView({
          behavior: "smooth"
        });
      },
      children: (0, _v1.jsx)(_v27, {
        children: (0, _v9.translate)({
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
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ({
    targetView: _v0,
    onSwitch: _v1,
    isMobileBreakpoint: _v2
  }) => {
    let _v3 = "business" === _v0,
      {
        trackPricingPageSeeBusinessTiersClicked: _v4,
        trackPricingPageSeeIndividualTiersClicked: _v5
      } = (0, _v32.usePricingTracking)(),
      _v6 = _v3 ? (0, _v9.translate)({
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
      }) : (0, _v9.translate)({
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
      _v7 = _v3 ? (0, _v9.translate)({
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
      }) : (0, _v9.translate)({
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
    return (0, _v1.jsx)(_v4.Box, {
      width: _v2 ? "100%" : "25%",
      minWidth: _v2 ? "100%" : (0, _v7.rem)(330),
      display: _v2 ? "block" : "table-cell",
      verticalAlign: "middle",
      position: "relative",
      "data-cross-sell": !0,
      margin: "0 auto",
      border: `${(0, _v7.rem)(8)} solid transparent`,
      children: (0, _v1.jsxs)(_v4.Box, {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        paddingX: (0, _v7.rem)(32),
        paddingBottom: (0, _v7.rem)(32),
        gap: (0, _v7.rem)(24),
        children: [(0, _v1.jsx)(_v4.Box, {
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
        }), (0, _v1.jsx)(_v5.Header, {
          as: "h3",
          size: "lg",
          textAlign: "center",
          children: _v6
        }), (0, _v1.jsx)(_v31.Button, {
          variant: "primary",
          size: "lg",
          bgColor: "text-primary",
          width: "100%",
          borderRadius: (0, _v7.rem)(16),
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
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  let _v36 = _v0 => (0, _v1.jsx)(_v35.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.088 4.955c-.007-.008-.01-.019-.017-.026-.008-.008-.018-.01-.026-.018a9.979 9.979 0 0 0-14.09 0c-.008.008-.018.01-.026.018-.007.007-.01.018-.017.026a10 10 0 1 0 14.176 0ZM12 20a7.983 7.983 0 0 1-6.235-3H9.78a2.963 2.963 0 0 0 4.44 0h4.015A7.985 7.985 0 0 1 12 20Zm-1-5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm8.41.002L19.4 15H15a2.995 2.995 0 0 0-2-2.816V9a1 1 0 0 0-2 0v3.184A2.995 2.995 0 0 0 9 15H4.6l-.01.002A7.931 7.931 0 0 1 4.07 13H5a1 1 0 0 0 0-2h-.93a7.951 7.951 0 0 1 1.618-3.898l.655.655a1 1 0 0 0 1.414-1.414l-.654-.655A7.952 7.952 0 0 1 11 4.07V5a1 1 0 1 0 2 0v-.93a7.952 7.952 0 0 1 3.897 1.618l-.654.655a1 1 0 0 0 1.414 1.414l.654-.655A7.951 7.951 0 0 1 19.931 11H19a1 1 0 0 0 0 2h.93a7.932 7.932 0 0 1-.52 2.002Z",
      fill: "currentColor"
    })
  });
  var _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = ({
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
      } = (0, _v3.useContext)(_v16.PlansDataContext),
      {
        compact: _v12
      } = (0, _v3.useContext)(_v15.OverridesContext),
      _v13 = _v0 => {
        switch (_v0) {
          case "free":
          default:
            return (0, _v9.translate)({
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
            return (0, _v9.translate)({
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
            return (0, _v9.translate)({
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
      _v14 = _v3.default.forwardRef(({
        children: _v0,
        ..._v1
      }, _v2) => (0, _v1.jsx)(_v4.Box, {
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
      _v15 = _v0 => (0, _v1.jsx)(_v6.Text, {
        variant: _v12 ? "body-md" : "body-lg",
        marginLeft: (0, _v7.rem)(4),
        ..._v0,
        children: _v0.children
      });
    if (_v10) {
      let _v0 = _v0?.tier,
        _v1 = _v11?.[_v0];
      return (0, _v1.jsxs)(_v4.Box, {
        borderTop: "1px solid var(--vimeo-colors-stroke) !important",
        borderBottom: "1px solid var(--vimeo-colors-stroke) !important",
        padding: _v12 ? `${(0, _v7.rem)(6)} 0` : `${(0, _v7.rem)(10)} 0`,
        position: "relative",
        alignItems: "center",
        marginBottom: _v12 ? 8 : 20,
        children: [(0, _v1.jsxs)(_v14, {
          children: [(_v4 ?? 0) === 1 ? (0, _v1.jsx)(_v41.PersonUser, {}) : (0, _v1.jsx)(_v40.Users, {}), (0, _v1.jsx)(_v15, {
            children: "enterprise" === _v0 ? (0, _v9.translate)({
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
            }) : "core" === _v0 ? (0, _v9.translate)({
              singular: "{AMOUNT} user (up to {ADD_USERS})",
              plural: "{AMOUNT} users (up to {ADD_USERS})",
              count: _v4 ?? 0,
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: 3
              },
              dictionary: {
                es: {
                  singular: "{AMOUNT} usuario (hasta {ADD_USERS})",
                  plural: "{AMOUNT} usuarios (hasta {ADD_USERS})"
                },
                "de-DE": {
                  singular: "{AMOUNT} Benutzer (bis zu {ADD_USERS})",
                  plural: "{AMOUNT} Benutzer (bis zu {ADD_USERS})"
                },
                "fr-FR": {
                  singular: "{AMOUNT} utilisateur (jusqu'à {ADD_USERS})",
                  plural: "{AMOUNT} utilisateurs (jusqu'à {ADD_USERS})"
                },
                "ja-JP": {
                  singular: "{AMOUNT} ユーザー (最大 {ADD_USERS} 名まで)",
                  plural: "{AMOUNT} ユーザー (最大 {ADD_USERS} 名まで)"
                },
                "ko-KR": {
                  singular: "{AMOUNT}명 사용자 (최대 {ADD_USERS}명)",
                  plural: "{AMOUNT}명 사용자 (최대 {ADD_USERS}명)"
                },
                "pt-BR": {
                  singular: "{AMOUNT} usuário (até {ADD_USERS})",
                  plural: "{AMOUNT} usuários (até {ADD_USERS})"
                },
                "zh-CN": {
                  singular: "{AMOUNT} 位用户 (最多 {ADD_USERS})",
                  plural: "{AMOUNT} 位用户 (最多 {ADD_USERS})"
                }
              }
            }) : "professional" === _v0 ? (0, _v9.translate)({
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
            }) : "studio" === _v0 ? (0, _v9.translate)({
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
            }) : "production" === _v0 ? (0, _v9.translate)({
              singular: "{AMOUNT} users (up to {ADD_USERS})",
              replacements: {
                AMOUNT: _v4,
                ADD_USERS: (0, _v9.translate)({
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
            }) : (0, _v9.translate)({
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
        }), _v1?.seats?.over && (0, _v1.jsxs)(_v4.Box, {
          display: "flex",
          gap: (0, _v7.rem)(8),
          alignItems: "flex-start",
          background: "var(--vimeo-colors-status-caution-secondary, #feebcb)",
          borderRadius: (0, _v7.rem)(8),
          paddingLeft: (0, _v7.rem)(12),
          paddingRight: (0, _v7.rem)(8),
          paddingY: (0, _v7.rem)(8),
          width: "100%",
          marginBottom: (0, _v7.rem)(4),
          children: [(0, _v1.jsx)(_v4.Box, {
            paddingY: (0, _v7.rem)(2),
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v34.CircleExclamationFilled, {
              boxSize: (0, _v7.rem)(20),
              color: "status-caution-primary"
            })
          }), (0, _v1.jsx)(_v6.Text, {
            variant: "body-sm",
            children: (0, _v9.translate)({
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
        }), (0, _v1.jsxs)(_v14, {
          children: [(0, _v1.jsx)(_v39.Database, {}), (0, _v1.jsx)(_v15, {
            children: (_v0 => {
              if ("enterprise" === _v0) return (0, _v9.translate)({
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
              return (0, _v9.translate)({
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
        }), _v1?.restrictedVideoStorage?.over && (0, _v1.jsxs)(_v4.Box, {
          display: "flex",
          gap: (0, _v7.rem)(8),
          alignItems: "flex-start",
          background: "var(--vimeo-colors-status-caution-secondary, #feebcb)",
          borderRadius: (0, _v7.rem)(8),
          paddingLeft: (0, _v7.rem)(12),
          paddingRight: (0, _v7.rem)(8),
          paddingY: (0, _v7.rem)(8),
          width: "100%",
          marginBottom: (0, _v7.rem)(4),
          children: [(0, _v1.jsx)(_v4.Box, {
            paddingY: (0, _v7.rem)(2),
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
            children: (0, _v1.jsx)(_v34.CircleExclamationFilled, {
              boxSize: (0, _v7.rem)(20),
              color: "status-caution-primary"
            })
          }), (0, _v1.jsx)(_v6.Text, {
            variant: "body-sm",
            children: (0, _v9.translate)({
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
        }), ("free" === _v0 || "creator" === _v0) && (0, _v1.jsxs)(_v14, {
          children: [(0, _v1.jsx)(_v39.Database, {}), (0, _v1.jsx)(_v15, {
            children: "enterprise" === _v0 ? (0, _v9.translate)({
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
            }) : (0, _v9.translate)({
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
        }), "enterprise" !== _v0 && (0, _v1.jsxs)(_v14, {
          children: [(0, _v1.jsx)(_v37.Speedometer, {}), (0, _v1.jsx)(_v15, {
            children: _v7?.quotaPeriod === "year" ? (0, _v9.translate)({
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
            }) : (0, _v9.translate)({
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
    return (0, _v1.jsxs)(_v4.Box, {
      borderTop: "1px solid #1A365D14 !important",
      borderBottom: "1px solid #1A365D14 !important",
      padding: `${(0, _v7.rem)(10)} 0`,
      position: "relative",
      alignItems: "center",
      marginBottom: 20,
      children: [_v0?.tier === "customSelfServe" && (0, _v1.jsxs)(_v14, {
        children: [(0, _v1.jsx)(_v36, {}), (0, _v1.jsx)(_v15, {
          children: (0, _v9.translate)({
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
      }), !_v8 && (_v0?.tier === "free" || _v0?.tier === "enterprise" || _v9 ? (0, _v1.jsxs)(_v14, {
        children: [(_v4 ?? 0) === 1 ? (0, _v1.jsx)(_v41.PersonUser, {}) : (0, _v1.jsx)(_v40.Users, {}), (0, _v1.jsx)(_v15, {
          children: _v13(_v0?.tier)
        })]
      }) : (0, _v1.jsxs)(_v14, {
        children: [(0, _v1.jsx)(_v40.Users, {}), (0, _v1.jsx)(_v15, {
          marginLeft: (0, _v7.rem)(4),
          children: _v13(_v0?.tier)
        })]
      })), (0, _v1.jsxs)(_v14, {
        children: ["video_count" === _v6 ? (0, _v1.jsx)(_v38.VideosStack, {}) : (0, _v1.jsx)(_v39.Database, {}), (0, _v1.jsx)(_v15, {
          children: (_v1 = _v0?.tier, "enterprise" === _v1 ? _v3 ? (0, _v9.translate)({
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
          }) : (0, _v9.translate)({
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
          }) : "video_count" === _v6 ? (0, _v9.translate)({
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
          }) : (0, _v9.translate)({
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
      }), (_v9 || _v3) && (0, _v1.jsxs)(_v14, {
        children: [(0, _v1.jsx)(_v37.Speedometer, {}), (0, _v1.jsx)(_v15, {
          children: "enterprise" === _v0?.tier ? (0, _v9.translate)({
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
          }) : (0, _v9.translate)({
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
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  _v19.default.div.withConfig({
    displayName: "styles__FeatureSubhead",
    componentId: "sc-dc427937-0"
  })`
  margin-bottom: ${_v0 => _v0?.bottomSpacing || (0, _v18.rem)(12)};
  line-height: ${(0, _v18.rem)(18)};

  p {
    font-weight: 900;
  }
`;
  let _v45 = _v19.default.ul.withConfig({
    displayName: "styles__FeatureList",
    componentId: "sc-dc427937-1"
  })`
  list-style: initial;

  li {
    margin-bottom: ${_v0 => _v0.$compact ? (0, _v18.rem)(12) : (0, _v18.rem)(8)};
    position: relative;
    @media (width > ${_v20.breakpoints.TABLET}) {
      margin-bottom: ${_v0 => (_v0.$compact, (0, _v18.rem)(12))};
    }
  }

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${_v0 => _v0.$compact ? (0, _v18.rem)(20) : (0, _v18.rem)(24)};
    @media (width > ${_v20.breakpoints.TABLET}) {
      &:last-child {
        padding-bottom: ${_v0 => _v0.$compact ? "0" : (0, _v18.rem)(48)} !important;
        margin-bottom: 0;
      }
    }
  }

  @media (width > ${_v20.breakpoints.TABLET}) {
    margin-bottom: ${_v0 => _v0.$compact ? "0" : (0, _v18.rem)(19)};
  }
`;
  (0, _v19.default)(_v44.Checkmark).withConfig({
    displayName: "styles__FeatureCheck",
    componentId: "sc-dc427937-2"
  })`
  ${(0, _v21.addWidth)(18, 24)};
  position: absolute;
  left: 0;
`;
  let _v46 = (0, _v19.default)(_v44.Checkmark).withConfig({
    displayName: "styles__StyledCheckmark",
    componentId: "sc-dc427937-3"
  })`
  margin-right: ${(0, _v18.rem)(4)};
  max-width: ${(0, _v18.rem)(16)};
  position: relative;
  width: 100%;
  top: ${(0, _v18.rem)(2)};

  @media (width > ${_v20.breakpoints.TABLET}) {
    margin-right: ${(0, _v18.rem)(8)};
  }
  path {
    fill: var(--vimeo-colors-text-primary);
  }
`;
  var _v47 = _v0.i(0);
  let _v48 = {
      free: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      starter: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
        singular: "Review & collaboration tools {NEW_BADGE}",
        replacements: {
          NEW_BADGE: (0, _v1.jsx)(() => (0, _v1.jsx)(_v47.Badge, {
            size: "xs",
            variant: "new",
            children: (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      standard: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      advanced: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      customSelfServe: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      enterprise: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
    _v49 = {
      plus: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
        singular: "Subtitle translations (with AI Credits) {NEW_BADGE}",
        replacements: {
          NEW_BADGE: () => (0, _v1.jsx)(_v47.Badge, {
            size: "sm",
            variant: "new",
            children: (0, _v9.translate)({
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
      pro: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      proUnlimited: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      business: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      livePremium: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      enterprise: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
    _v50 = {
      free: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      proSolution: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      team: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      teamLive: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      enterprise: [(0, _v9.translate)({
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
      }), (0, _v9.translate)({
        singular: "SSO (SAML)",
        dictionary: {
          "ja-JP": {
            singular: "SSO（SAML）"
          },
          "ko-KR": {
            singular: "SSO(SAML)"
          }
        }
      }), (0, _v9.translate)({
        singular: "SCIM (OKTA, Azure)",
        dictionary: {
          "ja-JP": {
            singular: "SCIM（OKTA、Azure）"
          },
          "ko-KR": {
            singular: "SCIM(OKTA, Azure)"
          }
        }
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
      }), (0, _v9.translate)({
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
    _v51 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
      if (_v3) switch (_v0) {
        case "free":
          return [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          return _v4 || _v6 ? [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
            singular: "AI-powered video tools",
            dictionary: {
              es: {
                singular: "Herramientas de vídeo impulsadas por IA"
              },
              "de-DE": {
                singular: "KI-gestützte Videotools"
              },
              "fr-FR": {
                singular: "Outils vidéo propulsés par l'IA"
              },
              "ja-JP": {
                singular: "AI搭載の動画ツール"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de vídeo com IA"
              },
              "zh-CN": {
                singular: "AI 驱动的视频工具"
              }
            }
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          })] : [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
            singular: "AI-powered video tools",
            dictionary: {
              es: {
                singular: "Herramientas de vídeo impulsadas por IA"
              },
              "de-DE": {
                singular: "KI-gestützte Videotools"
              },
              "fr-FR": {
                singular: "Outils vidéo propulsés par l'IA"
              },
              "ja-JP": {
                singular: "AI搭載の動画ツール"
              },
              "ko-KR": {
                singular: "AI 기반 비디오 도구"
              },
              "pt-BR": {
                singular: "Ferramentas de vídeo com IA"
              },
              "zh-CN": {
                singular: "AI 驱动的视频工具"
              }
            }
          })];
        case "core":
          return [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
            singular: "Custom fonts",
            dictionary: {
              es: {
                singular: "Fuentes personalizadas"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Schriftarten"
              },
              "fr-FR": {
                singular: "Polices personnalisées"
              },
              "ja-JP": {
                singular: "カスタムフォント"
              },
              "ko-KR": {
                singular: "사용자 지정 글꼴"
              },
              "pt-BR": {
                singular: "Fontes personalizadas"
              },
              "zh-CN": {
                singular: "自定义字体"
              }
            }
          }), (0, _v9.translate)({
            singular: "Unlisted links for sharing",
            dictionary: {
              es: {
                singular: "Enlaces no listados para compartir"
              },
              "de-DE": {
                singular: "Nicht gelistete Links zum Teilen"
              },
              "fr-FR": {
                singular: "Liens non répertoriés pour le partage"
              },
              "ja-JP": {
                singular: "共有用の非公開リンク"
              },
              "ko-KR": {
                singular: "공유용 비공개 링크"
              },
              "pt-BR": {
                singular: "Links não listados para compartilhamento"
              },
              "zh-CN": {
                singular: "用于共享的未列出链接"
              }
            }
          }), (0, _v9.translate)({
            singular: "Embed domain level privacy",
            dictionary: {
              es: {
                singular: "Incorpore privacidad a nivel de dominio"
              },
              "de-DE": {
                singular: "Integriere Datenschutz auf Domain-Ebene."
              },
              "fr-FR": {
                singular: "Intégrer la confidentialité au niveau du domaine"
              },
              "ja-JP": {
                singular: "埋め込み動画のドメインレベルでのプライバシー"
              },
              "ko-KR": {
                singular: "도메인 수준 프라이버시 임베드"
              },
              "pt-BR": {
                singular: "Incorpore privacidade no nível de domínio"
              },
              "zh-CN": {
                singular: "嵌入域名级隐私"
              }
            }
          })];
        case "professional":
          return [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
            singular: "Stock photos, videos, and music",
            dictionary: {
              es: {
                singular: "Archivo de fotos, videos y música"
              },
              "de-DE": {
                singular: "Stockfotos, Videos und Musik"
              },
              "fr-FR": {
                singular: "Photos, vidéos et sons sous licence"
              },
              "ja-JP": {
                singular: "ストック写真、動画、音楽"
              },
              "ko-KR": {
                singular: "스톡 사진, 동영상, 음악"
              },
              "pt-BR": {
                singular: "Acervo de fotos, vídeos e músicas"
              },
              "zh-CN": {
                singular: "库存图片、视频和音乐"
              }
            }
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
            singular: "Custom intros and outros",
            dictionary: {
              es: {
                singular: "Introducciones y cierres personalizados"
              },
              "de-DE": {
                singular: "Benutzerdefinierte Intros und Outros"
              },
              "fr-FR": {
                singular: "Personnaliser les intros et les outros"
              },
              "ja-JP": {
                singular: "カスタムイントロおよびアウトロ"
              },
              "ko-KR": {
                singular: "커스텀 인트로 및 아우트로"
              },
              "pt-BR": {
                singular: "Introduções e telas pós-vídeo customizadas"
              },
              "zh-CN": {
                singular: "自定义片头和片尾"
              }
            }
          })];
        case "studio":
        case "production":
          return [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          return [(0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
          }), (0, _v9.translate)({
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
      return _v1 ? _v49[_v0] : _v2 ? _v50[_v0] : _v48[_v0];
    },
    _v52 = (_v0, _v1 = !1, _v2, _v3) => _v0 && _v1 ? "enterprise" === _v0 ? (0, _v9.translate)({
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
    }) : "lifetime" === _v2 ? (0, _v9.translate)({
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
    }) : "pro" === _v0 || "plus" === _v0 ? (0, _v9.translate)({
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
    }) : `${(0, _v9.translate)({
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
    })}, ${(0, _v9.translate)({
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
    })}` : "enterprise" === _v0 ? (0, _v9.translate)({
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
    }) : "free" === _v0 && 2 == _v3 ? (0, _v9.translate)({
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
    }) : (0, _v9.translate)({
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
    }),
    _v53 = (_v0, _v1, _v2, _v3, _v4, _v5) => {
      let _v6 = !!Array.isArray(_v0) && !_v0.some(_v0 => "free" === _v0.tier);
      return "free" === _v1 || "customSelfServe" === _v1 || "starter" === _v1 && _v6 || _v4 && "professional" === _v1 && (_v6 || "business" === _v5) ? (0, _v9.translate)({
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
      }) : (0, _v9.translate)({
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
            core: "Creator",
            professional: "Core",
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
  _v0.s(["CARD_FEATURE_LIST_MAP", 0, _v48, "getCardFeatureSubhead", 0, _v53, "getCardVideoQuota", 0, _v52, "getFeatureListByTier", 0, _v51], 0);
  var _v54 = _v0.i(0);
  let _v55 = _v0 => {
      let {
        compact: _v1
      } = (0, _v3.useContext)(_v15.OverridesContext);
      return (0, _v1.jsx)(_v43.Paragraph, {
        variant: _v1 ? "body-md" : void 0,
        fontWeight: 400,
        children: _v0.children
      });
    },
    _v56 = ({
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
        } = (0, _v3.useContext)(_v16.PlansDataContext),
        {
          compact: _v9
        } = (0, _v3.useContext)(_v15.OverridesContext),
        _v10 = !!_v7 && (0, _v54.isCreatorV2)(_v8),
        _v11 = !!_v7 && (0, _v54.isCreatorJuly2026)(_v8),
        _v12 = _v51(_v4, _v5, _v6, _v7, _v10, _v0?.metadata?.entitlements?.params, _v11),
        _v13 = _v53(_v8, _v4, _v5, _v6, _v7, _v3),
        _v14 = _v52(_v4, _v5, _v2, _v1);
      return (0, _v1.jsxs)(_v4.Box, {
        "data-testid": "plan-card-features",
        children: [_v13 && (0, _v1.jsx)(_v4.Box, {
          marginBottom: 12,
          lineHeight: 18,
          children: (0, _v1.jsx)(_v43.Paragraph, {
            fontWeight: 500,
            children: _v13
          })
        }), _v12 && _v12.length > 0 && (_v14 || _v7) && (0, _v1.jsxs)(_v45, {
          $compact: _v9,
          children: [_v5 && (0, _v1.jsxs)("li", {
            children: [(0, _v1.jsx)(_v46, {}), (0, _v1.jsx)(_v55, {
              children: _v14
            })]
          }), _v12.map(_v0 => (0, _v1.jsxs)("li", {
            children: [(0, _v1.jsx)(_v46, {}), (0, _v1.jsx)(_v55, {
              children: _v0
            })]
          }, _v0 + "cards-feature-list"))]
        })]
      });
    };
  var _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = (0, _v19.default)(_v44.Checkmark).withConfig({
    displayName: "styles__FeatureCheckIcon",
    componentId: "sc-d95ef56-0"
  })`
  width: ${(0, _v18.rem)(20)};
  height: ${(0, _v18.rem)(20)};
  flex-shrink: 0;

  path {
    fill: var(--vimeo-colors-text-primary);
  }
`;
  (0, _v19.default)(_v59.ReviewCheck).withConfig({
    displayName: "styles__ReviewIcon",
    componentId: "sc-d95ef56-1"
  })`
  ${(0, _v21.addWidth)(16, 20)};
  margin-top: ${(0, _v18.rem)(4)};
  align-self: flex-start;
  flex-shrink: 0;
`, _v19.default.div.withConfig({
    displayName: "styles__ReviewContainer",
    componentId: "sc-d95ef56-2"
  })`
  min-height: ${(0, _v18.rem)(120)};
  margin-bottom: ${(0, _v18.rem)(20)};
  svg {
    margin: ${(0, _v18.rem)(8)} 0;
  }
  p {
    color: ${_v58.bokehTheme.colors.gray["900"]};
    max-width: ${(0, _v18.rem)(180)};
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;
  let _v61 = _v19.default.ul.withConfig({
      displayName: "styles__EnterpriseFeatureList",
      componentId: "sc-d95ef56-3"
    })`
  list-style: initial;

  li {
    margin-top: ${(0, _v18.rem)(8)};
    position: relative;
  }

  > li {
    align-items: baseline;
    display: flex;
    line-height: ${(0, _v18.rem)(24)};
  }
`,
    _v62 = ({
      tier: _v0
    }) => {
      let _v1 = (0, _v3.useContext)(_v15.OverridesContext),
        _v2 = _v1?.subHeadingType?.[_v0];
      return (0, _v1.jsx)(_v43.Paragraph, {
        fontSize: "18",
        children: _v2
      });
    };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = _v19.default.div.withConfig({
      displayName: "styles__MenuWrapper",
      componentId: "sc-f1e205c8-0"
    })`
  position: relative;
  ${({
      disabled: _v0
    }) => _v0 && _v19.css`
      pointer-events: none;
      cursor: not-allowed;
    `}
`,
    _v70 = _v19.default.div.withConfig({
      displayName: "styles__Menu",
      componentId: "sc-f1e205c8-1"
    })`
  display: flex;
  color: #566;
  &:hover {
    background: ${_v58.bokehTheme.colors.gray["100"]};
    border-radius: ${(0, _v18.rem)(4)};
    cursor: pointer;
  }
  > div {
    text-decoration: underline;
  }
`,
    _v71 = (0, _v19.default)(_v68.ChevronDown).withConfig({
      displayName: "styles__ChevronDownStyled",
      componentId: "sc-f1e205c8-2"
    })`
  margin-top: ${(0, _v18.rem)(-2)};
  width: ${(0, _v18.rem)(20)};
  height: ${(0, _v18.rem)(20)};

  path {
    fill: #566;
  }
`,
    _v72 = _v19.default.span.withConfig({
      displayName: "styles__Accent",
      componentId: "sc-f1e205c8-3"
    })`
  padding-left: ${(0, _v18.rem)(4)};
  color: #4ec437;
`,
    _v73 = _v19.default.div.withConfig({
      displayName: "styles__PriceListWrapper",
      componentId: "sc-f1e205c8-4"
    })`
  padding: ${(0, _v18.rem)(8)} 0;
  border: 1px solid rgba(100, 100, 100, 0.2);
  border-radius: ${(0, _v18.rem)(4)};

  span {
    ${(0, _v21.addTypography)(12, 14)};
  }
`,
    _v74 = _v19.default.div.withConfig({
      displayName: "styles__PriceFrequency",
      componentId: "sc-f1e205c8-5"
    })`
  font-weight: normal;
  ${(0, _v21.addTypography)(14, 16)};
  color: #566;
  letter-spacing: unset;
`,
    _v75 = (0, _v19.default)(_v74).withConfig({
      displayName: "styles__PriceFrequencySelector",
      componentId: "sc-f1e205c8-6"
    })`
  font-weight: 500;
  ${(0, _v21.addTypography)(14, 16)};
  letter-spacing: unset;
`;
  (0, _v19.default)(_v59.ReviewCheck).withConfig({
    displayName: "styles__ReviewIconStyled",
    componentId: "sc-f1e205c8-7"
  })`
  width: ${(0, _v18.rem)(38)};
  width: ${(0, _v18.rem)(34)};
  margin-top: ${(0, _v18.rem)(-2)};
`;
  var _v76 = _v0.i(0);
  let _v77 = _v0 => {
      let [_v1, _v2] = (0, _v3.useState)(!1),
        _v3 = (0, _v3.useRef)(null),
        {
          isMonthly: _v4,
          purchased: _v5,
          disabled: _v6
        } = _v0,
        {
          trackPricingPagePlanSelected: _v7
        } = (0, _v32.usePricingTracking)();
      (0, _v67.useOutsideClick)([_v3], () => {
        _v1 && _v2(!1);
      });
      let _v8 = (0, _v1.jsx)(_v73, {
          children: (0, _v1.jsxs)(_v66.Pop.List, {
            children: [(0, _v1.jsx)(_v66.Pop.Item, {
              onClick: () => {
                _v7({
                  plan: _v0.tier,
                  periodicity: "yearly",
                  freeTrial: !1
                }), (0, _v76.emitBPEvent)({
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
              children: _v0.annualDiscount > 0 ? (0, _v9.translate)({
                singular: "{PRICE} per month, billed annually {ACCENT}(save {PERCENT}%){/ACCENT}",
                replacements: {
                  PRICE: `${_v0.currency?.symbol}${_v0.price?.annualMonthly}`,
                  ACCENT: _v0 => (0, _v1.jsx)(_v72, {
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
              }) : (0, _v9.translate)({
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
            }), (0, _v1.jsx)(_v66.Pop.Item, {
              onClick: () => {
                _v7({
                  plan: _v0.tier,
                  periodicity: "monthly",
                  freeTrial: !1
                }), (0, _v76.emitBPEvent)({
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
              children: (0, _v9.translate)({
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
        _v9 = () => (0, _v1.jsx)(_v75, {
          children: (0, _v9.translate)({
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
      return _v5 ? _v4 ? (0, _v1.jsx)(_v74, {
        children: (0, _v9.translate)({
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
      }) : (0, _v1.jsx)(_v9, {}) : (0, _v1.jsxs)(_v63.Popover, {
        onOpen: () => (0, _v76.emitBPEvent)({
          copy: "monthly dropdown",
          action_type: "expand",
          location: "our_plans",
          path: window.location.href
        }),
        placement: "bottom",
        children: [(0, _v1.jsx)(_v64.PopoverTrigger, {
          children: (0, _v1.jsx)(_v69, {
            disabled: _v6,
            children: (0, _v1.jsxs)(_v70, {
              id: "plus-monthly-dropdown",
              children: [(0, _v1.jsx)(_v9, {}), (0, _v1.jsx)(_v71, {})]
            })
          })
        }), (0, _v1.jsx)(_v65.PopoverContent, {
          children: _v8
        })]
      });
    },
    _v78 = _v0 => (0, _v1.jsx)(_v61, {
      children: _v0.map(_v0 => (0, _v1.jsxs)("li", {
        children: [(0, _v1.jsx)(_v46, {}), (0, _v1.jsx)(_v43.Paragraph, {
          children: _v0
        })]
      }, _v0 + "cards-feature-list-horizontal"))
    }),
    _v79 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v6.Text, {
      variant: "body-lg",
      textColor: "text-primary",
      letterSpacing: (0, _v7.rem)(-.48),
      children: _v0
    }),
    _v80 = ({
      icon: _v0,
      children: _v1,
      align: _v2 = "center"
    }) => (0, _v1.jsxs)(_v4.Box, {
      display: "flex",
      gap: (0, _v7.rem)(4),
      alignItems: _v2,
      children: [(0, _v1.jsx)(_v4.Box, {
        display: "flex",
        flexShrink: 0,
        children: _v0
      }), _v1]
    }),
    _v81 = ({
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
        _v15 = (0, _v3.useContext)(_v16.PlansDataContext),
        _v16 = (0, _v3.useContext)(_v15.OverridesContext),
        {
          isFlatRateData: _v17,
          isSolutionData: _v18,
          plansData: _v19
        } = _v15,
        _v20 = _v19 && _v19.length > _v13.maxVerticalCards,
        _v21 = "enterprise" === _v0.tier,
        _v22 = _v51(_v0.tier, _v17, _v18) ?? [],
        _v23 = _v53(_v19, _v0.tier, _v17, _v18),
        _v24 = _v0 => (0, _v1.jsx)(_v4.Box, {
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: (0, _v7.rem)(306),
          width: "100%",
          ..._v0,
          children: _v0.children
        }),
        _v25 = _v0 => (0, _v1.jsx)(_v4.Box, {
          display: "flex",
          justifyContent: "space-between",
          children: _v0.children
        });
      return (0, _v1.jsxs)(_v4.Box, {
        border: `${(0, _v7.rem)(8)} solid transparent`,
        display: "flex",
        position: "relative",
        "data-testid": "horizontal-plan-card",
        children: [(0, _v1.jsx)(_v25, {
          showBadge: _v1,
          planData: _v0
        }), (0, _v1.jsxs)(_v4.Box, {
          padding: `${(0, _v7.rem)(52)} ${(0, _v7.rem)(44)} ${(0, _v7.rem)(48)}`,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          border: `'var(--vimeo-colors-fill-surface)' solid ${(0, _v7.rem)(1)}`,
          borderRadius: (0, _v7.rem)(32),
          opacity: _v0?.metadata?.interactions?.purchase?.status !== "available" ? "0.6" : "initial",
          children: [(0, _v1.jsx)(_v90, {
            showBadge: _v1,
            purchaseStatus: _v0?.metadata?.interactions?.purchase?.status || ""
          }), _v19 && _v20 && (_v21 ? (_v4 = Math.ceil(_v22.length / 2), (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v24, {
              children: [(0, _v1.jsxs)(_v4.Box, {
                children: [(0, _v1.jsxs)(_v92, {
                  as: "h2",
                  size: "2",
                  children: [_v0.name, " ", (0, _v1.jsx)(_v26, {
                    showBadge: _v0?.metadata?.interactions?.purchase?.status === "purchased"
                  })]
                }), _v16?.subHeadingType?.[_v0.tier] && (0, _v1.jsx)(_v62, {
                  tier: _v0.tier
                })]
              }), (0, _v1.jsx)(_v4.Box, {
                children: (0, _v1.jsxs)(_v4.Box, {
                  display: "flex",
                  children: [(0, _v1.jsx)(_v57.Building, {
                    h: (0, _v7.rem)(26),
                    w: (0, _v7.rem)(26)
                  }), (0, _v1.jsx)(_v5.Header, {
                    size: "xl",
                    as: "h3",
                    marginLeft: (0, _v7.rem)(5),
                    variant: "heading-md",
                    children: (0, _v9.translate)({
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
              }), (0, _v1.jsx)(_v29.default, {
                planData: _v0,
                location: "horizontal",
                showYearly: _v2
              })]
            }), (0, _v1.jsxs)(_v24, {
              children: [(0, _v1.jsx)(_v4.Box, {
                marginBottom: 12,
                lineHeight: 18,
                children: (0, _v1.jsx)(_v43.Paragraph, {
                  fontWeight: 500,
                  children: _v23
                })
              }), (0, _v1.jsx)(_v25, {
                children: _v78(_v22.slice(0, _v4))
              })]
            }), (0, _v1.jsx)(_v24, {
              children: (0, _v1.jsx)(_v25, {
                children: _v78(_v22.slice(_v4))
              })
            })]
          })) : (_v5 = _v0.metadata?.entitlements?.params, _v6 = _v5?.teamSeats ?? 0, _v7 = (0, _v9.translate)({
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
          }), _v8 = _v5?.videoStorageQuotaUnit === "video_count" ? (0, _v9.translate)({
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
          }) : (0, _v9.translate)({
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
          }), _v9 = _v2 ? _v0.priceFormatted?.annualMonthly : _v0.priceFormatted?.monthly, _v10 = _v2 ? (0, _v9.translate)({
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
          }) : (0, _v9.translate)({
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
          }), _v11 = !_v3 && !!_v0.price?.monthly && _v16?.showMonthlyDropdown !== !1, _v12 = Math.floor(_v22.length / 2), _v13 = (0, _v1.jsxs)(_v4.Box, {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v7.rem)(12),
            width: (0, _v7.rem)(306),
            children: [(0, _v1.jsx)(_v80, {
              icon: (0, _v1.jsx)(_v40.Users, {
                boxSize: (0, _v7.rem)(20)
              }),
              children: (0, _v1.jsx)(_v79, {
                children: _v7
              })
            }), (0, _v1.jsx)(_v80, {
              icon: (0, _v1.jsx)(_v39.Database, {
                boxSize: (0, _v7.rem)(20)
              }),
              children: (0, _v1.jsx)(_v79, {
                children: _v8
              })
            }), _v22.slice(0, _v12).map((_v0, _v1) => (0, _v1.jsx)(_v80, {
              icon: (0, _v1.jsx)(_v60, {}),
              align: "flex-start",
              children: (0, _v1.jsx)(_v79, {
                children: _v0
              })
            }, `low-tier-feature-col1-${_v1}`))]
          }), _v14 = (0, _v1.jsx)(_v4.Box, {
            display: "flex",
            flexDirection: "column",
            gap: (0, _v7.rem)(12),
            children: _v22.slice(_v12).map((_v0, _v1) => (0, _v1.jsx)(_v80, {
              icon: (0, _v1.jsx)(_v60, {}),
              align: "flex-start",
              children: (0, _v1.jsx)(_v79, {
                children: _v0
              })
            }, `low-tier-feature-col2-${_v1}`))
          }), (0, _v1.jsxs)(_v4.Box, {
            position: "relative",
            display: "flex",
            gap: (0, _v7.rem)(180),
            alignItems: "flex-start",
            width: "100%",
            children: [(0, _v1.jsxs)(_v4.Box, {
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignSelf: "stretch",
              width: (0, _v7.rem)(290),
              children: [(0, _v1.jsxs)(_v4.Box, {
                display: "flex",
                flexDirection: "column",
                gap: (0, _v7.rem)(8),
                paddingBottom: (0, _v7.rem)(10),
                children: [(0, _v1.jsxs)(_v92, {
                  as: "h2",
                  size: "lg",
                  children: [_v0.name, " ", (0, _v1.jsx)(_v26, {
                    showBadge: _v0?.metadata?.interactions?.purchase?.status === "purchased"
                  })]
                }), _v16?.subHeadingType?.[_v0.tier] && (0, _v1.jsx)(_v62, {
                  tier: _v0.tier
                }), (0, _v1.jsxs)(_v4.Box, {
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
                  }), (0, _v1.jsxs)(_v4.Box, {
                    display: "flex",
                    flexDirection: "column",
                    gap: (0, _v7.rem)(4),
                    children: [(0, _v1.jsx)(_v6.Text, {
                      variant: "body-lg",
                      textColor: "text-secondary",
                      lineHeight: "1.2",
                      children: _v11 ? (0, _v9.translate)({
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
                      }) : `${(0, _v9.translate)({
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
                    }), _v11 && (0, _v1.jsx)(_v77, {
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
                      children: (0, _v9.translate)({
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
              }), (0, _v1.jsx)(_v29.default, {
                planData: _v0,
                location: "horizontal",
                showYearly: _v2
              })]
            }), (0, _v1.jsxs)(_v4.Box, {
              display: "flex",
              flex: "1",
              flexDirection: "column",
              gap: (0, _v7.rem)(16),
              paddingTop: (0, _v7.rem)(12),
              paddingBottom: (0, _v7.rem)(4),
              children: [(0, _v1.jsx)(_v43.Paragraph, {
                fontWeight: 500,
                children: _v23
              }), (0, _v1.jsxs)(_v4.Box, {
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
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = _v0 => {
      let {
        compact: _v1
      } = (0, _v3.useContext)(_v15.OverridesContext);
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
    _v86 = ({
      children: _v0
    }) => {
      let {
        compact: _v1
      } = (0, _v3.useContext)(_v15.OverridesContext);
      return (0, _v1.jsx)(_v6.Text, {
        variant: "heading-sm",
        fontSize: _v1 ? "12" : void 0,
        fontWeight: 400,
        textColor: "text-secondary",
        children: _v0
      });
    },
    _v87 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v85, {
      color: "stroke",
      textDecoration: "line-through",
      textDecorationThickness: "2px",
      fontWeight: 400,
      children: _v0
    }),
    _v88 = (_v0, _v1) => {
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
          return (0, _v9.translate)({
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
          return (0, _v9.translate)({
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
          return _v1 || !_v1 && "video_size" === _v4 ? (0, _v9.translate)({
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
          }) : (0, _v9.translate)({
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
    _v89 = ({
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
        } = (0, _v3.useContext)(_v16.PlansDataContext),
        _v15 = (0, _v3.useContext)(_v15.OverridesContext),
        _v16 = (0, _v3.useContext)(_v84.ViewerContext),
        _v17 = (0, _v83.isUkLocation)(_v16?.location),
        {
          capabilities: {
            hasMonthlyBilling: _v18,
            hasPaid: _v19
          }
        } = (0, _v82.useCapability)(["hasMonthlyBilling", "hasPaid"]),
        _v20 = (0, _v3.useRef)(null),
        _v21 = (_v17 && _v6?.currencyCode ? (0, _v83.formatUkVatPrice)(_v1 || "free" === _v10 ? _v11?.price?.annualMonthly ? _v11.price.annualMonthly : "customSelfServe" === _v10 || _v8.isBandwidthProduct ? _v7?.annual : _v7?.annualMonthly : _v11?.price?.monthly ? _v11.price.monthly : _v7?.monthly, _v6?.currencyCode) ?? null : null) ?? (_v1 || "free" === _v10 ? _v13 && !_v8.isBandwidthProduct && (!_v13?.isMonthly || _v14) ? _v13?.displayPriceFormatted : _v11?.priceFormatted?.annualMonthly ? _v11.priceFormatted.annualMonthly : "customSelfServe" === _v10 || _v8.isBandwidthProduct ? _v12?.annual : _v12?.annualMonthly : _v13 && _v13?.isMonthly ? _v13?.displayPriceFormatted : _v11?.priceFormatted?.monthly ? _v11.priceFormatted.monthly : _v12?.monthly);
      return ((0, _v3.useLayoutEffect)(() => {
        let _v0 = _v20.current,
          _v1 = _v0?.firstElementChild;
        _v1 && _v1.innerText.length > 5 && (_v1.style.fontSize = (0, _v7.rem)(30));
      }, [_v21]), "enterprise" === _v10) ? (0, _v1.jsxs)(_v4.Box, {
        marginTop: "21",
        display: "flex",
        alignItems: "center",
        gap: (0, _v7.rem)(8),
        minHeight: (0, _v7.rem)(115),
        children: [_v5 ? (0, _v1.jsx)(_v57.Building, {
          height: 48,
          width: 40
        }) : (0, _v1.jsx)(_v4.Box, {
          height: 48,
          children: (0, _v1.jsx)(_v57.Building, {
            width: (0, _v7.rem)(52),
            height: (0, _v7.rem)(52)
          })
        }), (0, _v1.jsx)(_v4.Box, {
          children: (0, _v1.jsx)(_v5.Header, {
            size: "xl",
            as: "h3",
            variant: "heading-md",
            children: _v88(_v0, _v14)
          })
        })]
      }) : (0, _v1.jsxs)(_v4.Box, {
        marginTop: _v15.compact ? "4" : "21",
        minHeight: _v15.compact ? (0, _v7.rem)(56) : (0, _v7.rem)(115),
        children: [(0, _v1.jsxs)(_v4.Box, {
          width: "100%",
          overflow: "hidden",
          ref: _v20,
          children: [_v4 && _v12?.monthly && (0, _v1.jsx)(_v87, {
            children: _v12?.monthly
          }), (0, _v1.jsx)(_v85, {
            children: _v21
          })]
        }), (0, _v1.jsx)(_v4.Box, {
          children: "free" !== _v10 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v86, {
              children: [_v88(_v0, _v14), _v5 && `, ${_v1 ? (0, _v9.translate)({
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
              }) : (0, _v9.translate)({
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
            }), (_v7?.monthly || _v13?.isMonthly) && !_v2 && !_v5 && !1 !== _v15.showMonthlyDropdown ? (0, _v1.jsx)(_v77, {
              price: _v7,
              annualDiscount: _v9?.annual || 0,
              annualStoreUrl: _v8.interactions?.purchase?.uri?.annual || "/upgrade",
              monthlyStoreUrl: _v8.interactions?.purchase?.uri?.monthly || "/upgrade",
              showPerSeatPricingDetails: !0,
              isMonthly: _v13?.isMonthly,
              purchased: null !== _v13,
              currency: _v6,
              disabled: _v3,
              tier: _v10
            }) : _v7?.monthly === void 0 || _v1 ? (0, _v1.jsx)(_v86, {
              children: _v5 ? !(_v19 && !_v18) && _v12?.monthly && null === _v13 && (0, _v9.translate)({
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
              }) : (0, _v9.translate)({
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
            }) : (0, _v1.jsx)(_v86, {
              children: !_v5 && (0, _v9.translate)({
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
            }), (0, _v1.jsx)(_v86, {
              children: _v17 ? (0, _v9.translate)({
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
              }) : (0, _v9.translate)({
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
    _v90 = ({
      purchaseStatus: _v0 = "",
      showBadge: _v1 = !1,
      showCardBorder: _v2 = !1,
      compact: _v3 = !1,
      ..._v4
    }) => (0, _v1.jsx)(_v4.Box, {
      background: "var(--vimeo-colors-fill-surface)",
      position: "absolute",
      height: "100%",
      width: "100%",
      left: 0,
      top: 0,
      borderRadius: _v3 ? "1.75rem" : {
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
        base: _v2 ? "var(--vimeo-colors-stroke) solid 0.125rem" : "var(--vimeo-colors-fill-surface) solid 0.1rem"
      },
      children: _v4.children
    }),
    _v91 = ({
      isDisabled: _v0,
      compact: _v1,
      ..._v2
    }) => (0, _v1.jsx)(_v4.Box, {
      opacity: _v0 ? .6 : 1,
      position: "relative",
      padding: "1.25rem",
      paddingX: _v1 ? "1.25rem" : {
        base: "1.25rem",
        md: "2.5rem"
      },
      paddingY: _v1 ? "1.25rem" : {
        base: "1.25rem",
        md: "2.85rem"
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      children: _v2.children
    }),
    _v92 = ({
      allowWrap: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v5.Header, {
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
    _v93 = _v0 => (0, _v1.jsx)(_v4.Box, {
      minHeight: "72px",
      children: _v0.children
    }),
    _v94 = ({
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
        } = (0, _v12.useWindowSize)(),
        _v8 = _v5 && _v7 > 768,
        {
          tier: _v9,
          name: _v10,
          metadata: _v11
        } = _v0,
        _v12 = (0, _v3.useContext)(_v16.PlansDataContext),
        _v13 = (0, _v3.useContext)(_v15.OverridesContext),
        {
          isFlatRateData: _v14,
          isSolutionData: _v15,
          isRepackagingData: _v16,
          downgradeEnabled: _v17,
          effectiveTier: _v18,
          upcomingTier: _v19
        } = _v12,
        _v20 = _v11.entitlements?.params?.videoStoragePeriodicQuota || _v11.entitlements?.params?.videoStorageQuotaCap,
        _v21 = _v11.entitlements?.params?.videoStorageQuotaPeriod,
        _v22 = _v11.entitlements?.params?.bandwidth?.periodicQuota,
        _v23 = _v11?.interactions?.purchase?.status,
        _v24 = _v11?.purchasedProduct?.isMonthly,
        _v25 = void 0 !== _v19 && _v9 === _v19,
        _v26 = _v16 && void 0 !== _v19,
        _v27 = "annual" === (0, _v11.resolveBillingPeriod)(_v0, _v2 ? "annual" : "monthly"),
        _v28 = (0, _v10.getEffectivePurchaseStatus)({
          purchaseStatus: _v23,
          tier: _v9,
          isViewingAnnual: _v27,
          isPurchasedMonthly: _v24
        }),
        _v29 = "available" !== _v28,
        _v30 = (_v29 || _v25) && _v16,
        _v31 = _v30 ? .7 : 1,
        _v32 = !!_v13?.compact,
        _v33 = _v8 && (0, _v7.rem)(586) || _v5 && "50%" || "25%",
        _v34 = _v8 && "auto" || _v5 && "100%" || (0, _v7.rem)(330);
      if (_v29 && !_v25 && _v5 && !_v16 && !_v17) return null;
      let _v35 = !_v14 || _v16,
        _v36 = !("free" === _v9 && _v5);
      return (0, _v1.jsxs)(_v4.Box, {
        width: _v33,
        position: "relative",
        margin: _v1 && "purchased" !== _v28 ? `${(0, _v7.rem)(40)} auto 0` : "0 auto",
        minWidth: _v34,
        display: _v5 || "customSelfServe" === _v9 ? "block" : "table-cell",
        border: `${(0, _v7.rem)(8)} solid transparent`,
        children: [(0, _v1.jsx)(_v25, {
          showBadge: _v1,
          planData: _v0
        }), (0, _v1.jsx)(_v90, {
          showBadge: _v1,
          purchaseStatus: _v28,
          showCardBorder: _v13?.showCardBorder,
          compact: _v32
        }), (0, _v1.jsx)(_v91, {
          isDisabled: _v29 && !_v16,
          compact: _v32,
          children: (0, _v1.jsxs)(_v4.Box, {
            className: "card-section-container",
            gap: _v8 ? "lg" : void 0,
            display: _v8 ? "flex" : void 0,
            margin: _v8 ? "0 auto" : void 0,
            children: [(0, _v1.jsxs)(_v4.Box, {
              paddingBottom: _v26 ? (0, _v7.rem)(16) : void 0,
              children: [(0, _v1.jsxs)(_v92, {
                as: "h1",
                size: _v32 ? "md" : "lg",
                allowWrap: _v16,
                children: [(0, _v1.jsx)(_v4.Box, {
                  as: "span",
                  opacity: _v31,
                  children: _v10
                }), " ", (0, _v1.jsx)(_v26, {
                  showBadge: "purchased" === _v28
                })]
              }), _v11.isBandwidthProduct && (0, _v1.jsx)(_v4.Box, {
                opacity: _v31,
                children: (0, _v1.jsx)(_v5.Header, {
                  size: "sm",
                  children: "enterprise" !== _v9 ? `${_v22} annual bandwidth` : ""
                })
              }), !_v15 && _v13?.subHeadingType?.[_v9] && (0, _v1.jsx)(_v93, {
                children: (0, _v1.jsx)(_v4.Box, {
                  opacity: _v31,
                  children: (0, _v1.jsx)(_v62, {
                    tier: _v9
                  })
                })
              }), !("free" === _v9 && _v5) && (0, _v1.jsx)(_v4.Box, {
                opacity: _v31,
                children: (0, _v1.jsx)(_v89, {
                  planData: _v0,
                  showYearly: _v27,
                  isBillingFreqToggleAvailable: _v3,
                  disabled: _v29,
                  showStrikePrice: _v4,
                  isMobileBreakpoint: _v5
                })
              }), (0, _v1.jsx)(_v4.Box, {
                marginTop: _v32 ? 12 : 24,
                marginBottom: _v26 || _v32 ? 12 : 24,
                opacity: _v30 ? .5 : 1,
                children: "free" === _v9 ? (0, _v1.jsx)(_v30.default, {
                  location: "vertical"
                }) : (0, _v1.jsx)(_v29.default, {
                  planData: _v0,
                  showYearly: _v27,
                  showFreeTrial: _v0.metadata?.interactions?.purchase?.uri?.freeTrial !== null,
                  location: "vertical",
                  isMobileBreakpoint: _v5,
                  upcomingTier: _v19,
                  effectiveTier: _v18
                })
              }), _v26 && (0, _v1.jsxs)(_v4.Box, {
                "aria-hidden": !_v25,
                visibility: _v25 ? void 0 : "hidden",
                display: "flex",
                gap: (0, _v7.rem)(8),
                alignItems: "flex-start",
                background: "var(--vimeo-colors-status-info-secondary, rgba(190,227,248,0.48))",
                borderRadius: (0, _v7.rem)(8),
                paddingLeft: (0, _v7.rem)(12),
                paddingRight: (0, _v7.rem)(8),
                paddingY: (0, _v7.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v4.Box, {
                  paddingY: (0, _v7.rem)(2),
                  display: "flex",
                  alignItems: "center",
                  flexShrink: 0,
                  children: (0, _v1.jsx)(_v8.InfoCircle, {
                    boxSize: (0, _v7.rem)(20),
                    color: "status-info-primary"
                  })
                }), (0, _v1.jsx)(_v6.Text, {
                  variant: "body-sm",
                  children: (0, _v9.translate)({
                    singular: "Starting from the next renewal, you will be moved to the new {B}{PLAN_NAME}{/B} plan.",
                    replacements: {
                      PLAN_NAME: _v10,
                      B: _v0 => (0, _v1.jsx)(_v6.Text, {
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
            }), _v36 && (0, _v1.jsxs)(_v4.Box, {
              opacity: _v31,
              children: [_v35 && (0, _v1.jsx)(_v42, {
                planData: _v0,
                showYearly: _v2
              }), (0, _v1.jsx)(_v56, {
                planData: _v0,
                quotaPeriod: _v21,
                periodicQuota: "free" === _v9 && null !== _v20 ? _v20 : _v11.entitlements?.params?.videoStoragePeriodicQuota || 0,
                planView: _v6
              })]
            })]
          })
        }), !_v5 && !_v32 && (0, _v1.jsx)(_v28, {})]
      });
    },
    _v95 = ({
      showYearly: _v0,
      isBillingFreqToggleAvailable: _v1,
      isPageTopToggleVisible: _v2,
      badgePlan: _v3,
      showStrikePrice: _v4,
      isMobileBreakpoint: _v5,
      planView: _v6 = "individual",
      onSwitchView: _v7,
      businessTiers: _v8,
      showCrossSellCard: _v9 = !0
    }) => {
      let _v10 = (0, _v3.useContext)(_v15.OverridesContext),
        _v11 = !!_v10?.compact,
        {
          plansData: _v12,
          isRepackagingData: _v13,
          hideFreePlan: _v14,
          hideIndividualPlans: _v15
        } = (0, _v3.useContext)(_v16.PlansDataContext),
        _v16 = (0, _v3.useRef)(null),
        {
          shouldReorder: _v17,
          isResolving: _v18
        } = (0, _v17.useColdStoragePlanReorder)(),
        _v19 = (0, _v3.useMemo)(() => !_v12 || !_v17 || _v13 || _v5 ? _v12 : (_v0 => {
          let _v1 = _v0.findIndex(_v0 => "free" !== _v0.tier);
          if (_v1 < 0 || _v1 === _v0.length - 1) return _v0;
          let _v2 = [..._v0],
            [_v3] = _v2.splice(_v1, 1);
          return _v2.push(_v3), _v2;
        })(_v12), [_v12, _v17, _v13, _v5]),
        _v20 = (0, _v3.useMemo)(() => _v19 ? _v10?.plans ? _v19.filter(_v0 => _v10.plans?.includes(_v0.tier)) : _v10?.excludedPlans ? _v19.filter(_v0 => !_v10.excludedPlans?.includes(_v0.tier)) : _v5 ? _v19 : _v19.length > _v13.maxVerticalCards ? _v19.slice(0, -1) : _v19 : [], [_v19, _v10, _v5]),
        _v21 = (0, _v3.useMemo)(() => {
          if (!_v12 || !_v13) return [];
          let _v0 = _v12.some(_v0 => "core" === _v0.tier);
          return _v14.REPACKAGING_INDIVIDUAL_VIEW_TIERS.reduce((_v0, _v1) => {
            if ((_v14 || _v0) && "free" === _v1) return _v0;
            let _v2 = _v12.find(_v0 => _v0.tier === _v1);
            return _v2 && _v0.push(_v2), _v0;
          }, []);
        }, [_v12, _v13, _v14]),
        _v22 = (0, _v3.useMemo)(() => _v8 ?? ["professional", "studio", "enterprise"], [_v8]),
        _v23 = (0, _v3.useMemo)(() => _v12 && _v13 ? _v22.reduce((_v0, _v1) => {
          let _v2 = _v12.find(_v0 => _v0.tier === _v1);
          return _v2 && _v0.push(_v2), _v0;
        }, []) : [], [_v12, _v13, _v22]),
        _v24 = "individual" === _v6 ? _v21 : _v23,
        _v25 = (0, _v3.useCallback)(() => {
          let _v0 = _v16.current;
          if (!_v0) return;
          let _v1 = _v13 ? `[data-panel="${_v6}"] .card-section-container` : ".card-section-container",
            _v2 = new Map(),
            _v3 = Array.from(_v0.querySelectorAll(_v1));
          _v3.length && (_v3.forEach(_v0 => {
            Array.from(_v0.children).forEach((_v0, _v1) => {
              _v0.style.height = "auto", _v0.style.minHeight = "unset", _v2.set(_v1, Math.max(_v2.get(_v1) || 0, _v0.scrollHeight));
            });
          }), _v5 || _v3.forEach(_v0 => {
            Array.from(_v0.children).forEach((_v0, _v1) => {
              _v0 && _v0.style && (_v0.style.minHeight = (0, _v7.rem)(_v2.get(_v1)), _v0.style.height = "auto");
            });
          }));
        }, [_v13, _v6, _v5]);
      (0, _v3.useEffect)(() => {
        let _v0 = (0, _v2.default)(_v25, 300);
        return window.addEventListener("resize", _v0), () => {
          window.removeEventListener("resize", _v0);
        };
      }, [_v13, _v6, _v5, _v25]), (0, _v3.useEffect)(() => {
        if (_v13) {
          let _v0 = setTimeout(_v25, 450);
          return () => clearTimeout(_v0);
        }
      }, [_v6, _v13, _v25]);
      let _v26 = (0, _v3.useCallback)(_v0 => {
          _v0 && _v16.current && _v25();
        }, [_v25]),
        _v27 = (0, _v3.useCallback)((_v0, _v1) => (_v5 && !_v11 ? [..._v0].reverse() : _v0).map(_v0 => (0, _v1.jsx)(_v94, {
          showBadge: _v3 === _v0.tier,
          planData: _v0,
          showYearly: _v0,
          isBillingFreqToggleAvailable: _v1,
          showStrikePrice: _v4,
          isMobileBreakpoint: _v5,
          planView: _v1
        }, _v0.name)), [_v3, _v11, _v1, _v5, _v4, _v0]);
      if (!_v12 || _v18 && !_v13 && !_v5) return null;
      if (_v13 && _v7) {
        let _v0 = "business" === _v6;
        if (_v15) {
          let _v0 = _v5 ? 0 : Math.max(0, 3 - _v23.length),
            _v1 = _v0 > 0 && (0, _v1.jsx)(_v4.Box, {
              display: "table-cell",
              width: `${25 * _v0 / 2}%`,
              minWidth: (0, _v7.rem)(165 * _v0),
              border: `${(0, _v7.rem)(8)} solid transparent`,
              "aria-hidden": !0
            });
          return (0, _v1.jsx)(_v4.Box, {
            marginTop: _v5 ? 0 : (0, _v7.rem)(50),
            padding: `0 ${(0, _v7.rem)(2)}`,
            ref: _v26,
            children: (0, _v1.jsxs)(_v4.Box, {
              margin: `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
              display: _v5 ? "block" : "table",
              width: "100%",
              maxWidth: "1440px",
              sx: _v5 ? void 0 : {
                tableLayout: "fixed"
              },
              ref: _v16,
              "data-panel": "business",
              children: [_v1, _v27(_v23, "business"), _v1]
            })
          });
        }
        return _v5 ? (0, _v1.jsx)(_v4.Box, {
          marginTop: 0,
          padding: `0 ${(0, _v7.rem)(2)}`,
          ref: _v26,
          children: (0, _v1.jsxs)(_v4.Box, {
            margin: `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
            width: "100%",
            ref: _v16,
            children: [_v27(_v24, _v6), _v9 && (0, _v1.jsx)(_v33, {
              targetView: _v0 ? "individual" : "business",
              onSwitch: _v7,
              isMobileBreakpoint: _v5
            })]
          })
        }) : (0, _v1.jsx)(_v4.Box, {
          marginTop: (0, _v7.rem)(50),
          padding: `0 ${(0, _v7.rem)(2)}`,
          ref: _v26,
          children: (0, _v1.jsx)(_v4.Box, {
            margin: `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
            overflow: "hidden",
            paddingTop: (0, _v7.rem)(40),
            maxWidth: "1440px",
            ref: _v16,
            children: (0, _v1.jsxs)(_v4.Box, {
              display: "flex",
              width: "200%",
              sx: {
                transition: "transform 400ms ease-in-out",
                transform: _v0 ? "translateX(-50%)" : "translateX(0)"
              },
              children: [(0, _v1.jsxs)(_v4.Box, {
                "data-panel": "individual",
                display: "table",
                flex: "0 0 50%",
                sx: {
                  tableLayout: "fixed",
                  "& > *:not([data-cross-sell])": {
                    verticalAlign: "top"
                  }
                },
                children: [_v27(_v21, "individual"), _v9 && (0, _v1.jsx)(_v33, {
                  targetView: "business",
                  onSwitch: _v7,
                  isMobileBreakpoint: _v5
                })]
              }), (0, _v1.jsxs)(_v4.Box, {
                "data-panel": "business",
                display: "table",
                flex: "0 0 50%",
                sx: {
                  tableLayout: "fixed",
                  "& > *:not([data-cross-sell])": {
                    verticalAlign: "top"
                  }
                },
                children: [_v9 && (0, _v1.jsx)(_v33, {
                  targetView: "individual",
                  onSwitch: _v7,
                  isMobileBreakpoint: _v5
                }), _v27(_v23, "business")]
              })]
            })
          })
        });
      }
      return _v20.length ? (0, _v1.jsxs)(_v4.Box, {
        marginTop: _v5 ? 0 : _v11 ? _v3 ? (0, _v7.rem)(28) : 0 : (0, _v7.rem)(50),
        padding: `0 ${(0, _v7.rem)(2)}`,
        ref: _v26,
        children: [(0, _v1.jsx)(_v4.Box, {
          margin: _v11 ? `0 auto ${(0, _v7.rem)(8)}` : `${(0, _v7.rem)(24)} auto ${(0, _v7.rem)(38)}`,
          display: "table",
          width: "100%",
          maxWidth: "1440px",
          sx: {
            tableLayout: "fixed"
          },
          ref: _v16,
          children: _v27(_v20)
        }), _v19 && _v19.length > _v13.maxVerticalCards && !_v10?.plans && !_v10?.excludedPlans?.includes(_v19[_v19.length - 1].tier) && !_v5 && (0, _v1.jsx)(_v4.Box, {
          margin: "0 auto",
          maxWidth: "1440px",
          children: (0, _v1.jsx)(_v81, {
            showBadge: _v3 === _v19[_v19.length - 1]?.tier,
            planData: _v19[_v19.length - 1],
            showYearly: _v0,
            isPageTopToggleVisible: _v2
          })
        })]
      }) : null;
    };
}