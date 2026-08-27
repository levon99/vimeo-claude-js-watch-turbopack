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
    _v18 = _v0.i(0);
  let _v19 = "INTRO099_14D",
    _v20 = {
      [_v19]: {
        discount: .9931,
        introDays: 14
      }
    },
    _v21 = "starter",
    _v22 = "Starter";
  function _v23(_v0) {
    try {
      _v0();
    } catch (_v0) {
      console.error("WelcomeOfferModalPaywall: side effect failed", _v0);
    }
  }
  function _v24({
    title: _v0,
    description: _v1
  }) {
    return (0, _v1.jsxs)(_v6.Flex, {
      gap: "8px",
      alignItems: "flex-start",
      width: "100%",
      children: [(0, _v1.jsx)(_v11.Text, {
        color: "text-primary",
        fontSize: "13px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsxs)(_v11.Text, {
        variant: "body-md",
        color: "text-tertiary",
        children: [(0, _v1.jsx)(_v11.Text, {
          as: "span",
          variant: "heading-xs",
          color: "text-primary",
          children: _v0
        }), _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [" ", _v1]
        }) : null]
      })]
    });
  }
  _v0.s(["WelcomeOfferModalPaywall", 0, function ({
    isOpen: _v0,
    paywallTracking: _v1,
    postCheckoutUrl: _v2,
    onClose: _v3,
    onDismiss: _v4,
    isPage: _v5 = !1,
    showContinueLink: _v6 = !0
  }) {
    var _v7;
    let {
        plans: _v8,
        isLoading: _v9
      } = (0, _v17.useGetSubscriptionPlansDataResult)([_v21], void 0, !1),
      _v10 = _v8?.find(_v0 => _v0.tier === _v21) ?? _v8?.[0],
      _v11 = _v10?.metadata?.entitlements?.params?.videoStoragePeriodicQuota,
      _v12 = _v10?.metadata?.entitlements?.params?.teamSeats,
      {
        discount: _v13,
        introDays: _v14
      } = _v20[_v19],
      _v15 = _v10?.price?.annual,
      _v16 = _v10?.currency?.currencyCode,
      _v17 = "number" == typeof _v15 && _v16 ? (_v7 = _v15 * (1 - _v13), new Intl.NumberFormat((0, _v14.getCurrentLocale)(), {
        style: "currency",
        currency: _v16,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(_v7)) : void 0,
      {
        trackPaywallCtaClicked: _v18,
        trackPaywallDismissed: _v19
      } = (0, _v16.usePaywallTracking)({
        ..._v1,
        paywallStyle: "welcome_offer_modal",
        paywallPlansDisplayed: [_v21],
        paywallPeriodicitiesDisplayed: ["yearly"],
        isVisible: _v0 && !_v5
      }),
      [_v20, _v21] = (0, _v2.useState)(null),
      _v22 = null !== _v20,
      _v23 = _v5 ? (0, _v14.translate)({
        singular: "Unlock more with Vimeo {TIER}",
        replacements: {
          TIER: _v22
        },
        dictionary: {
          es: {
            singular: "Accede a más con Vimeo {TIER}"
          },
          "de-DE": {
            singular: "Mit Vimeo {TIER} mehr freischalten"
          },
          "fr-FR": {
            singular: "Accédez à davantage avec Vimeo {TIER}"
          },
          "ja-JP": {
            singular: "Vimeo {TIER}でさらに多くの機能を利用可能に"
          },
          "ko-KR": {
            singular: "Vimeo {TIER}로 더 많은 기능을 이용하세요"
          },
          "pt-BR": {
            singular: "Desbloqueie mais com o Vimeo {TIER}"
          },
          "zh-CN": {
            singular: "使用 Vimeo {TIER} 解锁更多功能"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Get the most out of Vimeo",
        dictionary: {
          es: {
            singular: "Aprovecha al máximo Vimeo"
          },
          "de-DE": {
            singular: "Holen Sie das Beste aus Vimeo heraus"
          },
          "fr-FR": {
            singular: "Tirez le meilleur parti de Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoを最大限に活用する"
          },
          "ko-KR": {
            singular: "Vimeo를 최대한 활용하세요"
          },
          "pt-BR": {
            singular: "Tire o máximo proveito do Vimeo"
          },
          "zh-CN": {
            singular: "充分利用 Vimeo"
          }
        }
      }),
      _v24 = _v5 ? _v17 ? (0, _v14.translate)({
        singular: "Try for {PRICE} for {DAYS} days",
        replacements: {
          PRICE: _v17,
          DAYS: `${_v14}`
        },
        dictionary: {
          es: {
            singular: "Prueba por {PRICE} durante {DAYS} días"
          },
          "de-DE": {
            singular: "Für {PRICE} {DAYS} Tage testen"
          },
          "fr-FR": {
            singular: "Essayez pour {PRICE} pendant {DAYS} jours"
          },
          "ja-JP": {
            singular: "{PRICE}で{DAYS}日間お試し"
          },
          "ko-KR": {
            singular: "{PRICE}에 {DAYS}일간 체험해 보세요"
          },
          "pt-BR": {
            singular: "Experimente por {PRICE} durante {DAYS} dias"
          },
          "zh-CN": {
            singular: "以 {PRICE} 试用 {DAYS} 天"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Try {TIER}",
        replacements: {
          TIER: _v22
        },
        dictionary: {
          es: {
            singular: "Probar {TIER}"
          },
          "de-DE": {
            singular: "{TIER} testen"
          },
          "fr-FR": {
            singular: "Essayez {TIER}"
          },
          "ja-JP": {
            singular: "{TIER}をお試し"
          },
          "ko-KR": {
            singular: "{TIER} 체험하기"
          },
          "pt-BR": {
            singular: "Experimente {TIER}"
          },
          "zh-CN": {
            singular: "试用 {TIER}"
          }
        }
      }) : _v17 ? (0, _v14.translate)({
        singular: "Get Vimeo {TIER} for {PRICE} for {DAYS} days",
        replacements: {
          TIER: _v22,
          PRICE: _v17,
          DAYS: `${_v14}`
        },
        dictionary: {
          es: {
            singular: "Obtén Vimeo {TIER} por {PRICE} durante {DAYS} días"
          },
          "de-DE": {
            singular: "Vimeo {TIER} für {PRICE} für {DAYS} Tage erwerben"
          },
          "fr-FR": {
            singular: "Obtenez Vimeo {TIER} pour {PRICE} pendant {DAYS} jours"
          },
          "ja-JP": {
            singular: "Vimeo {TIER} を {PRICE} で、{DAYS} 日間ご利用"
          },
          "ko-KR": {
            singular: "Vimeo {TIER} {DAYS}일간 {PRICE}에 이용하기"
          },
          "pt-BR": {
            singular: "Assine o Vimeo {TIER} por {PRICE} durante {DAYS} dias"
          },
          "zh-CN": {
            singular: "以 {PRICE} 获取 Vimeo {TIER}，为期 {DAYS} 天"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Get Vimeo {TIER}",
        replacements: {
          TIER: _v22
        },
        dictionary: {
          es: {
            singular: "Obtén Vimeo {TIER}"
          },
          "de-DE": {
            singular: "Vimeo {TIER} erwerben"
          },
          "fr-FR": {
            singular: "Obtenez Vimeo {TIER}"
          },
          "ja-JP": {
            singular: "Vimeo {TIER} を入手"
          },
          "ko-KR": {
            singular: "Vimeo {TIER} 이용하기"
          },
          "pt-BR": {
            singular: "Assine o Vimeo {TIER}"
          },
          "zh-CN": {
            singular: "获取 Vimeo {TIER}"
          }
        }
      }),
      _v25 = _v5 ? (0, _v14.translate)({
        singular: "Continue with Free Trial",
        dictionary: {
          es: {
            singular: "Continuar con la prueba gratuita"
          },
          "de-DE": {
            singular: "Mit kostenlosem Probeabo fortfahren"
          },
          "fr-FR": {
            singular: "Continuer avec l'essai gratuit"
          },
          "ja-JP": {
            singular: "無料トライアルを続ける"
          },
          "ko-KR": {
            singular: "무료 체험 계속하기"
          },
          "pt-BR": {
            singular: "Continuar com o teste gratuito"
          },
          "zh-CN": {
            singular: "继续免费试用"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Try Vimeo for {DAYS} days free",
        replacements: {
          DAYS: "7"
        },
        dictionary: {
          es: {
            singular: "Prueba Vimeo gratis durante {DAYS} días"
          },
          "de-DE": {
            singular: "Teste Vimeo {DAYS} Tage kostenlos"
          },
          "fr-FR": {
            singular: "Essayez Vimeo gratuitement pendant {DAYS} jours"
          },
          "ja-JP": {
            singular: "Vimeoを{DAYS}日間無料でお試し"
          },
          "ko-KR": {
            singular: "Vimeo를 {DAYS}일 동안 무료로 체험해 보세요"
          },
          "pt-BR": {
            singular: "Experimente o Vimeo gratuitamente por {DAYS} dias"
          },
          "zh-CN": {
            singular: "免费试用 Vimeo {DAYS} 天"
          }
        }
      }),
      _v26 = _v11 ? (0, _v14.translate)({
        singular: "Access to {STORAGE}",
        replacements: {
          STORAGE: _v11
        },
        dictionary: {
          es: {
            singular: "Acceso a {STORAGE}"
          },
          "de-DE": {
            singular: "Zugriff auf {STORAGE}"
          },
          "fr-FR": {
            singular: "Accès à {STORAGE}"
          },
          "ja-JP": {
            singular: "{STORAGE}へのアクセス"
          },
          "ko-KR": {
            singular: "{STORAGE}의 저장 공간 이용"
          },
          "pt-BR": {
            singular: "Acesso a {STORAGE}"
          },
          "zh-CN": {
            singular: "可访问 {STORAGE}"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Access to more storage",
        dictionary: {
          es: {
            singular: "Acceso a más almacenamiento"
          },
          "de-DE": {
            singular: "Zugriff auf mehr Speicherplatz"
          },
          "fr-FR": {
            singular: "Accès à davantage de stockage"
          },
          "ja-JP": {
            singular: "より多くのストレージにアクセス"
          },
          "ko-KR": {
            singular: "더 많은 저장 공간 이용"
          },
          "pt-BR": {
            singular: "Acesso a mais espaço de armazenamento"
          },
          "zh-CN": {
            singular: "获得更多存储空间"
          }
        }
      }),
      _v27 = "number" == typeof _v12 ? (0, _v14.translate)({
        singular: "{COUNT} seat",
        plural: "{COUNT} seats",
        count: _v12,
        replacements: {
          COUNT: `${_v12}`
        },
        dictionary: {
          es: {
            singular: "{COUNT} asiento",
            plural: "{COUNT} asientos"
          },
          "de-DE": {
            singular: "{COUNT} Nutzerplatz",
            plural: "{COUNT} Nutzerplätze"
          },
          "fr-FR": {
            singular: "{COUNT} siège",
            plural: "{COUNT} sièges"
          },
          "ja-JP": {
            singular: "{COUNT}席",
            plural: "{COUNT}席"
          },
          "ko-KR": {
            singular: "{COUNT} 좌석",
            plural: "{COUNT} 좌석"
          },
          "pt-BR": {
            singular: "{COUNT} vaga",
            plural: "{COUNT} vagas"
          },
          "zh-CN": {
            singular: "{COUNT} 个席位",
            plural: "{COUNT} 个席位"
          }
        }
      }) : (0, _v14.translate)({
        singular: "Multiple seats",
        dictionary: {
          es: {
            singular: "Múltiples asientos"
          },
          "de-DE": {
            singular: "Mehrere Nutzerplätze"
          },
          "fr-FR": {
            singular: "Plusieurs sièges"
          },
          "ja-JP": {
            singular: "複数のシート"
          },
          "ko-KR": {
            singular: "여러 좌석"
          },
          "pt-BR": {
            singular: "Várias vagas"
          },
          "zh-CN": {
            singular: "多个席位"
          }
        }
      }),
      _v28 = (0, _v1.jsxs)(_v6.Flex, {
        direction: {
          base: "column",
          md: "row"
        },
        alignItems: "stretch",
        width: "100%",
        minHeight: 0,
        children: [(0, _v1.jsx)(_v4.Box, {
          display: {
            base: "none",
            md: "block"
          },
          flexShrink: 0,
          width: {
            md: _v5 ? "380px" : "256px"
          },
          minHeight: {
            md: _v5 ? "540px" : void 0
          },
          borderRadius: _v5 ? "16px" : void 0,
          backgroundColor: _v5 ? "#95ECFF" : "#17d5ff",
          backgroundImage: `url(${_v5 ? "https://i.vimeocdn.com/custom_asset/e32912569817310c9cbe205764ab774c" : "https://i.vimeocdn.com/custom_asset/d8a5550cf99397d50d5749a2037f33a5"})`,
          backgroundSize: _v5 ? "auto 100%" : "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }), (0, _v1.jsxs)(_v6.Flex, {
          direction: "column",
          gap: "24px",
          justifyContent: _v5 ? "center" : void 0,
          paddingX: {
            base: "24px",
            md: _v5 ? "40px" : "24px"
          },
          paddingY: "24px",
          width: {
            base: "100%",
            md: _v5 ? "540px" : "400px"
          },
          flexShrink: {
            base: 1,
            md: 0
          },
          minHeight: 0,
          children: [(0, _v1.jsxs)(_v12.VStack, {
            gap: "8px",
            alignItems: "flex-start",
            width: "100%",
            flexShrink: 0,
            children: [!_v5 && (0, _v1.jsxs)(_v3.Badge, {
              variant: "upgrade",
              size: "sm",
              gap: "4px",
              children: [(0, _v1.jsx)(_v13.Gift, {
                boxSize: "14px"
              }), (0, _v14.translate)({
                singular: "Welcome Offer",
                dictionary: {
                  es: {
                    singular: "Oferta de bienvenida"
                  },
                  "de-DE": {
                    singular: "Willkommensangebot"
                  },
                  "fr-FR": {
                    singular: "Offre de bienvenue"
                  },
                  "ja-JP": {
                    singular: "ウェルカムオファー"
                  },
                  "ko-KR": {
                    singular: "환영 혜택"
                  },
                  "pt-BR": {
                    singular: "Oferta de boas-vindas"
                  },
                  "zh-CN": {
                    singular: "欢迎优惠"
                  }
                }
              })]
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "heading-lg",
              color: "text-primary",
              children: _v23
            })]
          }), (0, _v1.jsxs)(_v12.VStack, {
            flex: _v5 ? "0 0 auto" : "1 1 auto",
            gap: _v5 ? "18px" : "24px",
            alignItems: "flex-start",
            width: "100%",
            minHeight: 0,
            overflowY: _v5 ? "visible" : "auto",
            children: [(0, _v1.jsx)(_v11.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v14.translate)({
                singular: "Your welcome offer is here — everything Vimeo {TIER} unlocks, for a limited time.",
                replacements: {
                  TIER: _v22
                },
                dictionary: {
                  es: {
                    singular: "Tu oferta de bienvenida está aquí — todo lo que desbloquea Vimeo {TIER}, por tiempo limitado."
                  },
                  "de-DE": {
                    singular: "Ihr Willkommensangebot ist da — für eine begrenzte Zeit alles, was Vimeo {TIER} freischaltet."
                  },
                  "fr-FR": {
                    singular: "Votre offre de bienvenue est arrivée — tout ce que propose Vimeo {TIER}, pour une durée limitée."
                  },
                  "ja-JP": {
                    singular: "あなたのウェルカムオファーが届きました — 期間限定で、Vimeo {TIER}が解放するすべてをご利用いただけます."
                  },
                  "ko-KR": {
                    singular: "환영 혜택이 도착했습니다 — 제한된 기간 동안 Vimeo {TIER}에서 제공하는 모든 기능을 이용하세요."
                  },
                  "pt-BR": {
                    singular: "Sua oferta de boas-vindas chegou — tudo o que o Vimeo {TIER} desbloqueia, por tempo limitado."
                  },
                  "zh-CN": {
                    singular: "欢迎优惠已到 — 限时可享 Vimeo {TIER} 解锁的全部功能。"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v12.VStack, {
              gap: _v5 ? "8px" : "12px",
              alignItems: "flex-start",
              width: "100%",
              children: [(0, _v1.jsxs)(_v12.VStack, {
                gap: "8px",
                alignItems: "flex-start",
                width: "100%",
                children: [(0, _v1.jsx)(_v24, {
                  title: _v26,
                  description: _v11 ? (0, _v14.translate)({
                    singular: "of storage.",
                    dictionary: {
                      es: {
                        singular: "de almacenamiento."
                      },
                      "de-DE": {
                        singular: "Speicherplatz."
                      },
                      "fr-FR": {
                        singular: "de stockage."
                      },
                      "ja-JP": {
                        singular: "のストレージ."
                      },
                      "ko-KR": {
                        singular: "저장 공간."
                      },
                      "pt-BR": {
                        singular: "de armazenamento."
                      },
                      "zh-CN": {
                        singular: "的存储空间。"
                      }
                    }
                  }) : void 0
                }), (0, _v1.jsx)(_v24, {
                  title: (0, _v14.translate)({
                    singular: "Access to all privacy options",
                    dictionary: {
                      es: {
                        singular: "Acceso a todas las opciones de privacidad"
                      },
                      "de-DE": {
                        singular: "Zugriff auf alle Datenschutzeinstellungen"
                      },
                      "fr-FR": {
                        singular: "Accès à toutes les options de confidentialité"
                      },
                      "ja-JP": {
                        singular: "すべてのプライバシーオプションへのアクセス"
                      },
                      "ko-KR": {
                        singular: "모든 개인정보 보호 옵션에 대한 액세스"
                      },
                      "pt-BR": {
                        singular: "Acesso a todas as opções de privacidade"
                      },
                      "zh-CN": {
                        singular: "访问所有隐私选项"
                      }
                    }
                  }),
                  description: (0, _v14.translate)({
                    singular: "for all your videos",
                    dictionary: {
                      es: {
                        singular: "para todos tus vídeos"
                      },
                      "de-DE": {
                        singular: "für alle Ihre Videos"
                      },
                      "fr-FR": {
                        singular: "pour toutes vos vidéos"
                      },
                      "ja-JP": {
                        singular: "すべての動画に対して"
                      },
                      "ko-KR": {
                        singular: "모든 동영상에 대해"
                      },
                      "pt-BR": {
                        singular: "para todos os seus vídeos"
                      },
                      "zh-CN": {
                        singular: "适用于您所有的视频"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v24, {
                  title: _v27,
                  description: (0, _v14.translate)({
                    singular: "to collaborate with your team",
                    dictionary: {
                      es: {
                        singular: "para colaborar con tu equipo"
                      },
                      "de-DE": {
                        singular: "zur Zusammenarbeit mit Ihrem Team"
                      },
                      "fr-FR": {
                        singular: "pour collaborer avec votre équipe"
                      },
                      "ja-JP": {
                        singular: "チームと共同で作業するために"
                      },
                      "ko-KR": {
                        singular: "팀과 협업하기 위해"
                      },
                      "pt-BR": {
                        singular: "para colaborar com sua equipe"
                      },
                      "zh-CN": {
                        singular: "与您的团队协作"
                      }
                    }
                  })
                })]
              }), _v6 && (0, _v1.jsx)(_v7.Link, {
                onClick: () => {
                  _v22 || (_v5 || _v23(() => _v19()), _v23(() => _v4?.()), _v3());
                },
                width: "fit-content",
                cursor: "pointer",
                "aria-disabled": _v22,
                pointerEvents: _v22 ? "none" : void 0,
                children: (0, _v1.jsx)(_v11.Text, {
                  variant: "heading-xs",
                  color: "text-secondary",
                  textDecoration: "underline",
                  children: (0, _v14.translate)({
                    singular: "Or continue with the limited plan",
                    dictionary: {
                      es: {
                        singular: "O continuar con el plan limitado"
                      },
                      "de-DE": {
                        singular: "Oder mit dem eingeschränkten Tarif fortfahren"
                      },
                      "fr-FR": {
                        singular: "Ou continuer avec le forfait limité"
                      },
                      "ja-JP": {
                        singular: "または限定プランで継続する"
                      },
                      "ko-KR": {
                        singular: "또는 제한된 요금제로 계속 이용하세요"
                      },
                      "pt-BR": {
                        singular: "Ou continue com o plano limitado"
                      },
                      "zh-CN": {
                        singular: "或继续使用受限计划"
                      }
                    }
                  })
                })
              })]
            })]
          }), (0, _v1.jsxs)(_v12.VStack, {
            gap: "12px",
            alignItems: "stretch",
            width: "100%",
            flexShrink: 0,
            children: [(0, _v1.jsx)(_v5.Button, {
              variant: "primary",
              size: "lg",
              fontSize: _v5 ? "13px" : void 0,
              height: _v5 ? "40px" : void 0,
              width: "100%",
              onClick: () => {
                _v22 || (_v21("primary"), _v23(() => _v18("primary")), _v23(() => _v4?.()), _v23(() => window.localStorage.removeItem(_v18.SELECTED_BILLING_PLAN_ID_STORAGE_KEY)), window.location.assign((0, _v15.buildCheckoutUrl)({
                  ..._v1,
                  tier: _v21,
                  postCheckoutUrl: _v2
                }, {
                  promo: "01KYHRZ3DBBWVRHNX19K31XVVD"
                })));
              },
              isDisabled: _v22 || _v9,
              isLoading: "primary" === _v20 || _v9,
              children: _v24
            }), (0, _v1.jsx)(_v5.Button, {
              variant: "secondary",
              size: "lg",
              fontSize: _v5 ? "13px" : void 0,
              height: _v5 ? "40px" : void 0,
              width: "100%",
              onClick: () => {
                _v22 || (_v21("secondary"), _v23(() => _v18("secondary")), _v23(() => _v4?.()), _v23(() => window.localStorage.removeItem(_v18.SELECTED_BILLING_PLAN_ID_STORAGE_KEY)), window.location.assign((0, _v15.buildCheckoutUrl)({
                  ..._v1,
                  tier: _v21,
                  isTrial: !0,
                  postCheckoutUrl: _v2
                })));
              },
              isDisabled: _v22,
              isLoading: "secondary" === _v20,
              children: _v25
            })]
          })]
        })]
      });
    return _v5 ? (0, _v1.jsx)(_v6.Flex, {
      maxWidth: {
        base: "100%",
        md: "920px"
      },
      width: "100%",
      marginX: "auto",
      children: _v28
    }) : (0, _v1.jsxs)(_v8.Modal, {
      isOpen: _v0,
      onClose: _v3,
      closeOnEsc: !1,
      closeOnOverlayClick: !1,
      isCentered: !0,
      size: "xl",
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v9.ModalContent, {
        maxWidth: "656px",
        width: {
          base: "calc(100% - 24px)",
          md: "656px"
        },
        maxHeight: {
          base: "calc(100dvh - 24px)",
          md: "calc(100dvh - 48px)"
        },
        borderRadius: "28px",
        padding: "0",
        overflow: "hidden",
        backgroundColor: "surface",
        boxShadow: "0px 8px 40px 0px rgba(13, 18, 23, 0.18)",
        display: "flex",
        flexDirection: "column",
        children: _v28
      })]
    });
  }]);
}