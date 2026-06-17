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
    _v14 = _v0.i(0);
  function _v15({
    title: _v0,
    price: _v1,
    selected: _v2,
    onClick: _v3,
    badge: _v4
  }) {
    let _v5 = (0, _v8.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)");
    return (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "100%",
      children: [(0, _v1.jsxs)(_v5.Flex, {
        as: "button",
        type: "button",
        onClick: _v3,
        alignItems: "center",
        gap: "md",
        padding: "md",
        width: "100%",
        height: "64px",
        borderColor: _v2 ? "fill-brand" : "check-radio-stroke",
        borderRadius: "16px",
        borderWidth: "1px",
        borderStyle: "solid",
        cursor: "pointer",
        bg: _v2 ? _v5 : "surface",
        _hover: {
          bg: _v2 ? _v5 : "input-fill-hover"
        },
        transition: "background-color 0.15s ease, border-color 0.15s ease",
        sx: {
          width: "100% !important"
        },
        children: [(0, _v1.jsx)(_v16, {
          selected: _v2
        }), (0, _v1.jsx)(_v5.Flex, {
          direction: "column",
          alignItems: "start",
          flex: "1",
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            children: _v0
          })
        }), (0, _v1.jsx)(_v5.Flex, {
          direction: "column",
          alignItems: "end",
          children: (0, _v1.jsx)(_v7.Text, {
            variant: "body-sm",
            color: "text-secondary",
            textAlign: "right",
            children: _v1
          })
        })]
      }), _v4 && (0, _v1.jsx)(_v14.Badge, {
        position: "absolute",
        top: "-11px",
        left: "15px",
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v7.Text, {
          variant: "heading-2xs",
          color: "text-primary",
          children: _v4
        })
      })]
    });
  }
  function _v16({
    selected: _v0,
    size: _v1 = 20
  }) {
    return _v0 ? (0, _v1.jsx)(_v3.Box, {
      minWidth: `${_v1}px`,
      minHeight: `${_v1}px`,
      width: `${_v1}px`,
      height: `${_v1}px`,
      borderRadius: "50%",
      borderWidth: "6px",
      borderColor: "fill-brand",
      bg: "surface",
      flexShrink: 0
    }) : (0, _v1.jsx)(_v3.Box, {
      minWidth: `${_v1}px`,
      minHeight: `${_v1}px`,
      width: `${_v1}px`,
      height: `${_v1}px`,
      borderRadius: "50%",
      borderWidth: "1px",
      borderColor: "check-radio-stroke",
      bg: "transparent",
      flexShrink: 0
    });
  }
  function _v17(_v0, _v1) {
    if ("number" != typeof _v0) return;
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
      return `${_v3 ? _v2.toFixed(0) : _v2.toFixed(2)} ${_v1}`;
    }
  }
  function _v18({
    selected: _v0
  }) {
    return (0, _v1.jsx)(_v3.Box, {
      minWidth: "24px",
      minHeight: "24px",
      width: "24px",
      height: "24px",
      borderRadius: "50%",
      borderWidth: _v0 ? "0" : "1px",
      borderColor: "check-radio-stroke",
      bg: _v0 ? "fill-brand" : "transparent",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      children: _v0 && (0, _v1.jsx)(_v9.Checkmark, {
        color: "white",
        width: "20px",
        height: "20px"
      })
    });
  }
  _v0.s(["PlansComparisonPaywall", 0, function ({
    tier: _v0 = "starter",
    paywallTracking: _v1,
    defaultPeriodicity: _v2 = "yearly",
    monthlyFreeTrial: _v3 = !1,
    isFreeTrialEligible: _v4 = !0,
    postCheckoutUrl: _v5
  }) {
    var _v6;
    let _v7,
      _v8,
      [_v9, _v10] = (0, _v2.useState)(_v2),
      [_v11, _v12] = (0, _v2.useState)(!1),
      _v13 = _v4 && _v11,
      _v14 = (0, _v12.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v15 = (0, _v13.useViewer)(),
      _v16 = (_v8 = _v15?.location, _v8?.toUpperCase() === "GB"),
      _v17 = _v14?.find(_v0 => _v0.tier === _v0) ?? _v14?.[0],
      _v18 = _v17?.currency?.currencyCode || "USD",
      _v19 = _v16 ? _v17(_v17?.price.annualMonthly, _v18) : _v17?.priceFormatted.annualMonthly,
      _v20 = _v16 ? _v17(_v17?.price.monthly, _v18) : _v17?.priceFormatted.monthly,
      _v21 = void 0 === _v14,
      _v22 = (0, _v8.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419"),
      _v23 = (0, _v8.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)"),
      _v24 = _v0 => {
        _v10(_v0), "monthly" !== _v0 || _v3 || _v12(!1);
      },
      _v25 = (0, _v10.translate)({
        singular: "Join Vimeo",
        dictionary: {
          es: {
            singular: "Unirse a Vimeo"
          },
          "de-DE": {
            singular: "Registriere dich bei Vimeo"
          },
          "fr-FR": {
            singular: "S'inscrire à Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoに登録"
          },
          "ko-KR": {
            singular: "Vimeo 가입"
          },
          "pt-BR": {
            singular: "Cadastre-se no Vimeo"
          },
          "zh-CN": {
            singular: "加入 Vimeo"
          }
        }
      }),
      _v26 = _v25.length > 12;
    return (0, _v1.jsxs)(_v5.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: [(0, _v1.jsxs)(_v5.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        gap: {
          base: "12px",
          md: "24px"
        },
        flex: "1",
        pb: {
          base: "24px",
          md: "48px"
        },
        mx: {
          base: "0",
          md: "32px"
        },
        overflow: "auto",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          width: "100%",
          paddingX: {
            base: "0",
            md: "32px"
          },
          children: [(0, _v1.jsxs)(_v5.Flex, {
            direction: "row",
            alignItems: "center",
            gap: "sm",
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v7.Text, {
              variant: {
                base: "heading-lg",
                md: _v26 ? "heading-xl" : "heading-2xl"
              },
              whiteSpace: "nowrap",
              children: _v25
            }), (0, _v1.jsx)(_v3.Box, {
              pt: {
                base: "0",
                md: _v26 ? "4px" : "8px"
              },
              children: (0, _v1.jsx)(_v3.Box, {
                bg: "#8a5ee8",
                px: "6px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v7.Text, {
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "white",
                  children: _v0.charAt(0).toUpperCase() + _v0.slice(1)
                })
              })
            })]
          }), (0, _v1.jsx)(_v7.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: (0, _v10.translate)({
              singular: "All the tools to create, manage, and showcase video.",
              dictionary: {
                es: {
                  singular: "Todas las herramientas para crear, gestionar y mostrar vídeo."
                },
                "de-DE": {
                  singular: "Alle Tools, mit denen Sie Videos erstellen, verwalten und präsentieren können."
                },
                "fr-FR": {
                  singular: "Tous les outils pour créer, gérer et mettre en valeur la vidéo."
                },
                "ja-JP": {
                  singular: "動画を作成、管理、公開するためのすべてのツール。"
                },
                "ko-KR": {
                  singular: "비디오를 제작, 관리 및 전시할 수 있는 모든 도구."
                },
                "pt-BR": {
                  singular: "Todas as ferramentas para criar, gerenciar e exibir vídeos."
                },
                "zh-CN": {
                  singular: "创建、管理和展示视频的所有工具。"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v3.Box, {
          width: "100%",
          maxWidth: "252px",
          maxHeight: _v13 ? "180px" : "200px",
          minHeight: "120px",
          aspectRatio: "1333/1058",
          flexShrink: "1",
          backgroundImage: `url(${_v22})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: _v13 ? "all 0.3s ease" : "all 0.3s ease 0.1s"
        }), _v4 && (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: "8px",
          width: "100%",
          marginBottom: {
            base: "12px",
            md: "0px"
          },
          children: [(0, _v1.jsxs)(_v5.Flex, {
            as: "button",
            type: "button",
            onClick: () => {
              let _v0 = !_v11;
              _v12(_v0), _v0 && !_v3 && _v10("yearly");
            },
            alignItems: "center",
            gap: "md",
            padding: "md",
            width: "100%",
            height: "78px",
            borderColor: _v13 ? "fill-brand" : "input-stroke",
            borderRadius: "16px",
            borderWidth: "1px",
            borderStyle: "solid",
            cursor: "pointer",
            bg: _v13 ? _v23 : "surface",
            _hover: {
              bg: _v13 ? _v23 : "input-fill-hover"
            },
            transition: "background-color 0.15s ease, border-color 0.15s ease",
            sx: {
              width: "100% !important"
            },
            children: [(0, _v1.jsxs)(_v5.Flex, {
              direction: "column",
              alignItems: "start",
              flex: "1",
              gap: "2px",
              children: [(0, _v1.jsx)(_v7.Text, {
                variant: "heading-sm",
                fontWeight: "medium",
                color: "text-primary",
                children: _v13 ? (0, _v10.translate)({
                  singular: "Free trial enabled",
                  dictionary: {
                    es: {
                      singular: "Prueba gratuita activada"
                    },
                    "de-DE": {
                      singular: "Kostenlose Testversion aktiviert"
                    },
                    "fr-FR": {
                      singular: "Essai gratuit activé"
                    },
                    "ja-JP": {
                      singular: "無料トライアルが有効になりました"
                    },
                    "ko-KR": {
                      singular: "무료 체험 활성화됨"
                    },
                    "pt-BR": {
                      singular: "Avaliação gratuita ativada"
                    },
                    "zh-CN": {
                      singular: "已启用免费试用"
                    }
                  }
                }) : (0, _v10.translate)({
                  singular: "Not sure yet?",
                  dictionary: {
                    es: {
                      singular: "¿Todavía no estás seguro?"
                    },
                    "de-DE": {
                      singular: "Noch nicht sicher?"
                    },
                    "fr-FR": {
                      singular: "Pas encore sûr ?"
                    },
                    "ja-JP": {
                      singular: "まだ決めていませんか？"
                    },
                    "ko-KR": {
                      singular: "아직 확실하지 않으신가요?"
                    },
                    "pt-BR": {
                      singular: "Ainda não tem certeza?"
                    },
                    "zh-CN": {
                      singular: "还不确定？"
                    }
                  }
                })
              }), !_v13 && (0, _v1.jsx)(_v7.Text, {
                variant: "body-md",
                color: "text-tertiary",
                children: (0, _v10.translate)({
                  singular: "Enable free trial",
                  dictionary: {
                    es: {
                      singular: "Activar la prueba gratuita"
                    },
                    "de-DE": {
                      singular: "Kostenlose Testversion aktivieren"
                    },
                    "fr-FR": {
                      singular: "Activer l'essai gratuit"
                    },
                    "ja-JP": {
                      singular: "無料トライアルを有効にする"
                    },
                    "ko-KR": {
                      singular: "무료 체험 활성화"
                    },
                    "pt-BR": {
                      singular: "Ativar avaliação gratuita"
                    },
                    "zh-CN": {
                      singular: "启用免费试用"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v18, {
              selected: _v13
            })]
          }), (0, _v1.jsxs)(_v5.Flex, {
            width: "100%",
            px: "md",
            justifyContent: "space-between",
            alignItems: "center",
            height: _v13 ? "20px" : "0px",
            opacity: +!!_v13,
            transition: _v13 ? "height 0.3s ease, opacity 0.3s ease 0.1s" : "height 0.3s ease 0.1s, opacity 0.3s ease",
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v7.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: (0, _v10.translate)({
                singular: "{amount} due today",
                replacements: {
                  amount: (_v6 = _v18, _v7 = (0, _v10.getCurrentLocale)(), new Intl.NumberFormat(_v7, {
                    style: "currency",
                    currency: _v6,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(0))
                },
                dictionary: {
                  es: {
                    singular: "{amount} a pagar hoy"
                  },
                  "de-DE": {
                    singular: "{amount} heute fällig"
                  },
                  "fr-FR": {
                    singular: "{amount} à payer aujourd'hui"
                  },
                  "ja-JP": {
                    singular: "{amount} が本日請求されます"
                  },
                  "ko-KR": {
                    singular: "{amount} 오늘 결제 예정"
                  },
                  "pt-BR": {
                    singular: "{amount} devido hoje"
                  },
                  "zh-CN": {
                    singular: "{amount} 今日应付"
                  }
                }
              })
            }), (0, _v1.jsx)(_v7.Text, {
              variant: "heading-2xs",
              color: "fill-brand",
              children: (0, _v10.translate)({
                singular: "Free",
                dictionary: {
                  es: {
                    singular: "Gratis"
                  },
                  "de-DE": {
                    singular: "Kostenlos"
                  },
                  "fr-FR": {
                    singular: "Gratuit"
                  },
                  "ja-JP": {
                    singular: "無料"
                  },
                  "ko-KR": {
                    singular: "무료"
                  },
                  "pt-BR": {
                    singular: "Grátis"
                  },
                  "zh-CN": {
                    singular: "免费"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: "12px",
          width: "100%",
          children: [_v21 ? (0, _v1.jsx)(_v3.Box, {
            position: "relative",
            width: "100%",
            children: (0, _v1.jsx)(_v6.Skeleton, {
              width: "100%",
              height: "64px",
              borderRadius: "16px"
            })
          }) : (0, _v1.jsx)(_v15, {
            title: (0, _v10.translate)({
              singular: "Yearly",
              dictionary: {
                es: {
                  singular: "Anual"
                },
                "de-DE": {
                  singular: "Jährlich"
                },
                "fr-FR": {
                  singular: "Annuel"
                },
                "ja-JP": {
                  singular: "年額"
                },
                "ko-KR": {
                  singular: "연간"
                },
                "pt-BR": {
                  singular: "Anual"
                },
                "zh-CN": {
                  singular: "按年"
                }
              }
            }),
            price: _v19 ? `${_v19}${(0, _v10.translate)({
              singular: "/month",
              dictionary: {
                es: {
                  singular: "/mes"
                },
                "de-DE": {
                  singular: "/Monat"
                },
                "fr-FR": {
                  singular: "/mois"
                },
                "ja-JP": {
                  singular: "/月"
                },
                "ko-KR": {
                  singular: "/월"
                },
                "pt-BR": {
                  singular: "/mês"
                },
                "zh-CN": {
                  singular: "/月"
                }
              }
            })}` : "-",
            selected: "yearly" === _v9,
            onClick: () => _v24("yearly"),
            badge: (0, _v10.translate)({
              singular: "Most popular",
              dictionary: {
                es: {
                  singular: "Más popular"
                },
                "de-DE": {
                  singular: "Am beliebtesten"
                },
                "fr-FR": {
                  singular: "Le plus populaire"
                },
                "ja-JP": {
                  singular: "一番人気"
                },
                "ko-KR": {
                  singular: "가장 인기 있는"
                },
                "pt-BR": {
                  singular: "Mais popular"
                },
                "zh-CN": {
                  singular: "最受欢迎"
                }
              }
            })
          }), _v21 ? (0, _v1.jsx)(_v3.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v6.Skeleton, {
              width: "100%",
              height: "64px",
              borderRadius: "16px"
            })
          }) : (0, _v1.jsx)(_v15, {
            title: (0, _v10.translate)({
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
            }),
            price: _v20 ? `${_v20}${(0, _v10.translate)({
              singular: "/month",
              dictionary: {
                es: {
                  singular: "/mes"
                },
                "de-DE": {
                  singular: "/Monat"
                },
                "fr-FR": {
                  singular: "/mois"
                },
                "ja-JP": {
                  singular: "/月"
                },
                "ko-KR": {
                  singular: "/월"
                },
                "pt-BR": {
                  singular: "/mês"
                },
                "zh-CN": {
                  singular: "/月"
                }
              }
            })}` : "-",
            selected: "monthly" === _v9,
            onClick: () => _v24("monthly")
          }), !_v21 && (0, _v1.jsx)(_v7.Text, {
            variant: "body-sm",
            color: "text-tertiary",
            textAlign: "center",
            children: _v16 ? (0, _v10.translate)({
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
            }) : (0, _v10.translate)({
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
      }), (0, _v1.jsx)(_v3.Box, {
        position: "sticky",
        bottom: "0",
        width: "100%",
        maxWidth: "400px",
        pt: "24px",
        pb: {
          base: "0px",
          md: "48px"
        },
        children: (0, _v1.jsx)(_v4.Button, {
          width: "100%",
          height: "48px",
          variant: "primary",
          onClick: () => {
            let _v0 = "monthly" === _v9 ? `${_v0}/monthly` : _v0,
              _v1 = (0, _v11.buildCheckoutUrl)({
                ..._v1,
                tier: _v0,
                isTrial: _v13,
                postCheckoutUrl: _v5
              });
            window.location.assign(_v1);
          },
          isDisabled: _v21,
          children: _v13 ? (0, _v10.translate)({
            singular: "Try for free",
            dictionary: {
              es: {
                singular: "Prueba gratuita"
              },
              "de-DE": {
                singular: "Kostenlos testen"
              },
              "fr-FR": {
                singular: "Essayer gratuitement"
              },
              "ja-JP": {
                singular: "無料で試す"
              },
              "ko-KR": {
                singular: "무료로 체험해 보기"
              },
              "pt-BR": {
                singular: "Experimente grátis"
              },
              "zh-CN": {
                singular: "免费试用"
              }
            }
          }) : (0, _v10.translate)({
            singular: "Continue",
            dictionary: {
              es: {
                singular: "Continuar"
              },
              "de-DE": {
                singular: "Weiter"
              },
              "fr-FR": {
                singular: "Continuer"
              },
              "ja-JP": {
                singular: "次へ"
              },
              "ko-KR": {
                singular: "계속"
              },
              "pt-BR": {
                singular: "Continuar"
              },
              "zh-CN": {
                singular: "继续"
              }
            }
          })
        })
      })]
    });
  }], 0), _v0.s(["PlansComparisonPaywallNavigation", 0, function ({
    dismissButtonPosition: _v0 = "top_right",
    onDismiss: _v1
  }) {
    return (0, _v1.jsx)(_v4.Button, {
      size: "sm",
      p: "1.25rem",
      borderRadius: "md",
      variant: "tertiary",
      onClick: _v1,
      position: "absolute",
      width: "auto",
      padding: "md",
      ...("top_right" === _v0 ? {
        top: "2rem",
        right: "2rem"
      } : "bottom" === _v0 ? {
        right: "50%",
        bottom: "2rem",
        transform: "translateX(50%)"
      } : {
        top: {
          base: void 0,
          md: "2rem"
        },
        right: {
          base: "50%",
          md: "2rem"
        },
        bottom: {
          base: "2rem",
          md: void 0
        },
        transform: {
          base: "translateX(50%)",
          md: void 0
        }
      }),
      children: (0, _v10.translate)({
        singular: "Skip",
        dictionary: {
          es: {
            singular: "Omitir"
          },
          "de-DE": {
            singular: "Überspringen"
          },
          "fr-FR": {
            singular: "Sauter"
          },
          "ja-JP": {
            singular: "スキップ"
          },
          "ko-KR": {
            singular: "건너뛰기"
          },
          "pt-BR": {
            singular: "PULAR"
          },
          "zh-CN": {
            singular: "跳过"
          }
        }
      })
    });
  }], 0);
}