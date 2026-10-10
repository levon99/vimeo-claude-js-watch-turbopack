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
    _v19 = _v0.i(0);
  let _v20 = "starter",
    _v21 = "var(--vimeo-colors-vimeoBlue-400)";
  function _v22({
    selected: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v4.Box, {
      minWidth: "22px",
      minHeight: "22px",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      borderWidth: "6px",
      borderColor: _v21,
      bg: "text-primary",
      flexShrink: 0
    }) : (0, _v1.jsx)(_v4.Box, {
      minWidth: "22px",
      minHeight: "22px",
      width: "22px",
      height: "22px",
      borderRadius: "50%",
      borderWidth: "1.5px",
      borderColor: "stroke-primary",
      bg: "transparent",
      flexShrink: 0
    });
  }
  function _v23({
    title: _v0,
    description: _v1
  }) {
    return (0, _v1.jsxs)(_v6.Flex, {
      gap: "8px",
      alignItems: "flex-start",
      width: "100%",
      children: [(0, _v1.jsx)(_v11.Text, {
        color: "text-primary",
        fontSize: "16px",
        lineHeight: "1.5",
        flexShrink: 0,
        children: "•"
      }), (0, _v1.jsxs)(_v11.Text, {
        variant: "body-lg",
        color: "text-secondary",
        children: [(0, _v1.jsx)(_v11.Text, {
          as: "span",
          variant: "heading-sm",
          color: "text-primary",
          children: _v0
        }), _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [" ", _v1]
        }) : null]
      })]
    });
  }
  _v0.s(["PricingDismissOfferPaywall", 0, function ({
    isOpen: _v0,
    paywallTracking: _v1,
    onClose: _v2
  }) {
    var _v3;
    let _v4 = (0, _v12.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)"),
      [_v5, _v6] = (0, _v2.useState)("offer"),
      {
        plans: _v7
      } = (0, _v18.useGetSubscriptionPlansDataResult)([_v20], void 0, !1),
      _v8 = _v7?.find(_v0 => _v0.tier === _v20),
      _v9 = _v8?.currency?.currencyCode,
      _v10 = _v8?.price?.annual,
      _v11 = "number" == typeof _v10 && _v9 ? (_v3 = .006900000000000017 * _v10, new Intl.NumberFormat((0, _v15.getCurrentLocale)(), {
        style: "currency",
        currency: _v9,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(_v3)) : void 0,
      _v12 = _v8?.metadata?.entitlements?.params?.videoStoragePeriodicQuota,
      _v13 = _v8?.metadata?.entitlements?.params?.teamSeats,
      _v14 = _v12 ? (0, _v15.translate)({
        singular: "Access to {STORAGE}",
        replacements: {
          STORAGE: _v12
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
      }) : (0, _v15.translate)({
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
      _v15 = "number" == typeof _v13 ? (0, _v15.translate)({
        singular: "{COUNT} seat",
        plural: "{COUNT} seats",
        count: _v13,
        replacements: {
          COUNT: `${_v13}`
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
      }) : (0, _v15.translate)({
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
      {
        trackPaywallCtaClicked: _v16,
        trackPaywallDismissed: _v17
      } = (0, _v17.usePaywallTracking)({
        ..._v1,
        paywallStyle: "pricing_dismiss_offer",
        paywallPlansDisplayed: [_v20],
        paywallPeriodicitiesDisplayed: ["yearly"],
        isVisible: _v0
      });
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v0,
      onClose: () => {
        _v17(), _v2();
      },
      isCentered: !0,
      size: "xl",
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
        maxWidth: "850px",
        width: {
          base: "calc(100% - 24px)",
          md: "850px"
        },
        borderRadius: "28px",
        padding: "0",
        overflow: "hidden",
        backgroundColor: "surface",
        children: [(0, _v1.jsx)(_v8.ModalCloseButton, {
          top: "24px",
          right: "24px"
        }), (0, _v1.jsxs)(_v6.Flex, {
          direction: {
            base: "column",
            md: "row"
          },
          children: [(0, _v1.jsx)(_v4.Box, {
            width: {
              base: "100%",
              md: "366px"
            },
            minHeight: {
              base: "220px",
              md: "630px"
            },
            backgroundColor: _v21,
            backgroundImage: "url(https://i.vimeocdn.com/custom_asset/d8a5550cf99397d50d5749a2037f33a5)",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }), (0, _v1.jsxs)(_v13.VStack, {
            alignItems: "stretch",
            gap: "24px",
            padding: {
              base: "24px",
              md: "32px"
            },
            flex: "1",
            children: [(0, _v1.jsxs)(_v3.Badge, {
              variant: "upgrade",
              size: "sm",
              width: "fit-content",
              gap: "4px",
              paddingY: "6px",
              children: [(0, _v1.jsx)(_v14.Gift, {
                boxSize: "14px"
              }), (0, _v15.translate)({
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
              variant: "heading-xl",
              children: (0, _v15.translate)({
                singular: "Wait, there’s something for you!",
                dictionary: {
                  es: {
                    singular: "¡Espera, hay algo para ti!"
                  },
                  "de-DE": {
                    singular: "Warten Sie, da ist etwas für Sie!"
                  },
                  "fr-FR": {
                    singular: "Attendez, nous avons quelque chose pour vous !"
                  },
                  "ja-JP": {
                    singular: "お待ちください、あなたへの特別オファーがあります！"
                  },
                  "ko-KR": {
                    singular: "잠깐만요, 당신을 위한 혜택이 있어요!"
                  },
                  "pt-BR": {
                    singular: "Espere, há algo para você!"
                  },
                  "zh-CN": {
                    singular: "等等，我们为您准备了优惠！"
                  }
                }
              })
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "body-lg",
              color: "text-secondary",
              children: (0, _v15.translate)({
                singular: "Your welcome offer is here — everything Vimeo {TIER} unlocks, for a limited time at a special price.",
                replacements: {
                  TIER: "Starter"
                },
                dictionary: {
                  es: {
                    singular: "Tu oferta de bienvenida está aquí — todo lo que desbloquea Vimeo {TIER}, por tiempo limitado a un precio especial."
                  },
                  "de-DE": {
                    singular: "Ihr Willkommensangebot ist da — alles, was Vimeo {TIER} freischaltet, für kurze Zeit zu einem Sonderpreis."
                  },
                  "fr-FR": {
                    singular: "Votre offre de bienvenue est arrivée — tout ce que Vimeo {TIER} débloque, pour une durée limitée à un prix spécial."
                  },
                  "ja-JP": {
                    singular: "ウェルカムオファーが登場しました — Vimeo {TIER} で利用できるすべてを、期間限定の特別価格でご提供します。"
                  },
                  "ko-KR": {
                    singular: "환영 혜택이 도착했습니다 — Vimeo {TIER}가 제공하는 모든 기능을 제한된 기간 동안 특별 가격으로 이용할 수 있습니다."
                  },
                  "pt-BR": {
                    singular: "Sua oferta de boas-vindas chegou — tudo o que o Vimeo {TIER} desbloqueia, por tempo limitado a um preço especial."
                  },
                  "zh-CN": {
                    singular: "您的欢迎专享已到 — Vimeo {TIER} 可解锁的一切，限时特价。"
                  }
                }
              })
            }), (0, _v1.jsxs)(_v13.VStack, {
              alignItems: "stretch",
              gap: "12px",
              children: [(0, _v1.jsx)(_v23, {
                title: _v14,
                description: _v12 ? (0, _v15.translate)({
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
              }), (0, _v1.jsx)(_v23, {
                title: (0, _v15.translate)({
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
                description: (0, _v15.translate)({
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
              }), (0, _v1.jsx)(_v23, {
                title: _v15,
                description: (0, _v15.translate)({
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
            }), (0, _v1.jsxs)(_v13.VStack, {
              alignItems: "stretch",
              gap: "16px",
              marginTop: "auto",
              paddingTop: "8px",
              children: [(0, _v1.jsxs)(_v4.Box, {
                as: "button",
                type: "button",
                onClick: () => _v6("offer"),
                position: "relative",
                width: "100%",
                textAlign: "left",
                borderRadius: "16px",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: "offer" === _v5 ? _v21 : "stroke-primary",
                backgroundColor: "offer" === _v5 ? _v4 : "transparent",
                padding: "16px 20px",
                cursor: "pointer",
                children: [(0, _v1.jsx)(_v4.Box, {
                  position: "absolute",
                  top: "-12px",
                  left: "16px",
                  backgroundColor: _v21,
                  color: "text-primary",
                  fontSize: "13px",
                  fontWeight: "600",
                  lineHeight: "1",
                  padding: "4px 10px",
                  borderRadius: "6px",
                  children: (0, _v15.translate)({
                    singular: "Welcome offer",
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
                        singular: "欢迎专享优惠"
                      }
                    }
                  })
                }), (0, _v1.jsxs)(_v6.Flex, {
                  alignItems: "center",
                  gap: "16px",
                  children: [(0, _v1.jsx)(_v22, {
                    selected: "offer" === _v5
                  }), (0, _v1.jsx)(_v11.Text, {
                    variant: "heading-xs",
                    color: "text-primary",
                    children: _v11 ? (0, _v15.translate)({
                      singular: "{PRICE} for {DAYS} days",
                      replacements: {
                        PRICE: _v11,
                        DAYS: "14"
                      },
                      dictionary: {
                        es: {
                          singular: "{PRICE} por {DAYS} días"
                        },
                        "de-DE": {
                          singular: "{PRICE} für {DAYS} Tage"
                        },
                        "fr-FR": {
                          singular: "{PRICE} pour {DAYS} jours"
                        },
                        "ja-JP": {
                          singular: "{PRICE}（{DAYS}日間）"
                        },
                        "ko-KR": {
                          singular: "{PRICE}에 {DAYS}일간"
                        },
                        "pt-BR": {
                          singular: "{PRICE} por {DAYS} dias"
                        },
                        "zh-CN": {
                          singular: "{PRICE} 即可获得 {DAYS} 天"
                        }
                      }
                    }) : (0, _v15.translate)({
                      singular: "Get the Starter plan",
                      dictionary: {
                        es: {
                          singular: "Obtén el plan Starter"
                        },
                        "de-DE": {
                          singular: "Holen Sie sich den Starter-Plan"
                        },
                        "fr-FR": {
                          singular: "Obtenez le forfait Starter"
                        },
                        "ja-JP": {
                          singular: "スタータープランを申し込む"
                        },
                        "ko-KR": {
                          singular: "스타터 플랜을 선택하세요"
                        },
                        "pt-BR": {
                          singular: "Obtenha o plano Starter"
                        },
                        "zh-CN": {
                          singular: "获取入门计划"
                        }
                      }
                    })
                  })]
                })]
              }), (0, _v1.jsx)(_v4.Box, {
                as: "button",
                type: "button",
                onClick: () => _v6("trial"),
                width: "100%",
                textAlign: "left",
                borderRadius: "16px",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderColor: "trial" === _v5 ? _v21 : "stroke-primary",
                backgroundColor: "trial" === _v5 ? _v4 : "transparent",
                padding: "16px 20px",
                cursor: "pointer",
                children: (0, _v1.jsxs)(_v6.Flex, {
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  children: [(0, _v1.jsxs)(_v6.Flex, {
                    alignItems: "center",
                    gap: "16px",
                    children: [(0, _v1.jsx)(_v22, {
                      selected: "trial" === _v5
                    }), (0, _v1.jsx)(_v11.Text, {
                      variant: "heading-xs",
                      color: "text-primary",
                      children: (0, _v15.translate)({
                        singular: "{DAYS}-day free trial",
                        replacements: {
                          DAYS: "7"
                        },
                        dictionary: {
                          es: {
                            singular: "Prueba gratuita de {DAYS} días"
                          },
                          "de-DE": {
                            singular: "{DAYS}-tägige kostenlose Testversion"
                          },
                          "fr-FR": {
                            singular: "Essai gratuit de {DAYS} jours"
                          },
                          "ja-JP": {
                            singular: "{DAYS}日間の無料トライアル"
                          },
                          "ko-KR": {
                            singular: "{DAYS}일 무료 체험"
                          },
                          "pt-BR": {
                            singular: "Teste gratuito de {DAYS} dias"
                          },
                          "zh-CN": {
                            singular: "{DAYS}-天免费试用"
                          }
                        }
                      })
                    })]
                  }), (0, _v1.jsx)(_v11.Text, {
                    variant: "body-md",
                    color: "text-secondary",
                    children: (0, _v15.translate)({
                      singular: "No payment today",
                      dictionary: {
                        es: {
                          singular: "Sin pago hoy"
                        },
                        "de-DE": {
                          singular: "Heute keine Zahlung"
                        },
                        "fr-FR": {
                          singular: "Aucun paiement aujourd'hui"
                        },
                        "ja-JP": {
                          singular: "本日はお支払い不要です"
                        },
                        "ko-KR": {
                          singular: "오늘은 결제 없음"
                        },
                        "pt-BR": {
                          singular: "Sem cobrança hoje"
                        },
                        "zh-CN": {
                          singular: "今天无需付款"
                        }
                      }
                    })
                  })]
                })
              }), (0, _v1.jsx)(_v5.Button, {
                variant: "primary",
                size: "lg",
                height: "52px",
                borderRadius: "14px",
                fontSize: "16px",
                onClick: () => {
                  _v16("offer" === _v5 ? "primary" : "secondary");
                  try {
                    window.localStorage.removeItem(_v19.SELECTED_BILLING_PLAN_ID_STORAGE_KEY);
                  } catch {}
                  window.location.assign((0, _v16.buildCheckoutUrl)({
                    ..._v1,
                    tier: _v20,
                    isTrial: "trial" === _v5
                  }, "offer" === _v5 ? {
                    promo: "01KYHRZ3DBBWVRHNX19K31XVVD"
                  } : void 0));
                },
                children: (0, _v15.translate)({
                  singular: "Continue with selected offer",
                  dictionary: {
                    es: {
                      singular: "Continuar con la oferta seleccionada"
                    },
                    "de-DE": {
                      singular: "Mit dem ausgewählten Angebot fortfahren"
                    },
                    "fr-FR": {
                      singular: "Continuer avec l'offre sélectionnée"
                    },
                    "ja-JP": {
                      singular: "選択したオファーで続ける"
                    },
                    "ko-KR": {
                      singular: "선택한 제안으로 계속 진행"
                    },
                    "pt-BR": {
                      singular: "Continuar com a oferta selecionada"
                    },
                    "zh-CN": {
                      singular: "继续使用所选优惠"
                    }
                  }
                })
              })]
            })]
          })]
        })]
      })]
    });
  }]);
}