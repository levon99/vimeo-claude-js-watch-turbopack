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
    _v22 = _v0.i(0);
  function _v23({
    tier: _v0 = "starter",
    paywallTracking: _v1,
    isUserEligibleForFreeTrial: _v2 = !1
  }) {
    let _v3 = (0, _v18.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v4 = _v3?.find(_v0 => _v0.tier === _v0) ?? _v3?.[0],
      _v5 = _v4?.metadata?.entitlements?.params?.videoStoragePeriodicQuota,
      _v6 = _v4?.name ?? (0, _v16.default)(`${_v0}`),
      _v7 = !!_v4?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v8 = (0, _v14.translate)({
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
      _v9 = _v8.length > 12,
      _v10 = (0, _v13.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419");
    return (0, _v1.jsxs)(_v8.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: [(0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        gap: "24px",
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
        children: [(0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          width: "100%",
          paddingX: "32px",
          children: [(0, _v1.jsxs)(_v8.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            alignItems: "center",
            gap: {
              base: "xs",
              md: "sm"
            },
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: {
                base: "heading-lg",
                md: _v9 ? "heading-xl" : "heading-2xl"
              },
              whiteSpace: "nowrap",
              children: _v8
            }), (0, _v1.jsx)(_v7.Box, {
              pt: {
                base: "0",
                md: _v9 ? "4px" : "8px"
              },
              children: (0, _v1.jsx)(_v7.Box, {
                bg: "#8a5ee8",
                px: "6px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v12.Text, {
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "white",
                  children: (0, _v16.default)(`${_v0}`)
                })
              })
            })]
          }), (0, _v1.jsx)(_v12.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: (0, _v14.translate)({
              singular: "All the tools to create, manage, and showcase video.",
              dictionary: {
                es: {
                  singular: "Todas las herramientas para crear, gestionar y presentar videos."
                },
                "de-DE": {
                  singular: "Alle Tools zum Erstellen, Verwalten und Präsentieren von Videos."
                },
                "fr-FR": {
                  singular: "Tous les outils pour créer, gérer et présenter des vidéos."
                },
                "ja-JP": {
                  singular: "動画の作成・管理・公開に必要なツールがすべて揃っています。"
                },
                "ko-KR": {
                  singular: "동영상을 제작 및 관리하고 선보일 수 있는 모든 도구를"
                },
                "pt-BR": {
                  singular: "Todas as ferramentas para criar, gerenciar e mostrar seus vídeos."
                },
                "zh-CN": {
                  singular: "用于创建、管理和展示视频的所有工具。"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v7.Box, {
          width: "100%",
          maxWidth: "252px",
          maxHeight: "200px",
          minHeight: "120px",
          aspectRatio: "1333/1058",
          children: (0, _v1.jsx)("img", {
            src: _v10,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }
          })
        }), (0, _v1.jsx)(_v17.VStack, {
          gap: "md",
          alignItems: "start",
          width: "100%",
          children: (0, _v22.getFeatures)(_v5).map((_v0, _v1) => (0, _v1.jsx)(_v19.FeatureRow, {
            ..._v0
          }, `row${_v1}`))
        })]
      }), (0, _v1.jsx)(_v20.PaywallCTAsWrapper, {
        children: (0, _v1.jsx)(_v21.PurchaseButton, {
          subscriptionTier: _v0,
          isTrial: _v7 && _v2,
          planName: _v6,
          paywallTracking: _v1
        })
      })]
    });
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  function _v30({
    title: _v0,
    price: _v1,
    selected: _v2,
    onClick: _v3,
    badge: _v4
  }) {
    let _v5 = (0, _v13.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)");
    return (0, _v1.jsxs)(_v7.Box, {
      position: "relative",
      width: "100%",
      children: [(0, _v1.jsxs)(_v8.Flex, {
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
        children: [(0, _v1.jsx)(_v31, {
          selected: _v2
        }), (0, _v1.jsx)(_v8.Flex, {
          direction: "column",
          alignItems: "start",
          flex: "1",
          children: (0, _v1.jsx)(_v12.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            children: _v0
          })
        }), (0, _v1.jsx)(_v8.Flex, {
          direction: "column",
          alignItems: "end",
          children: (0, _v1.jsx)(_v12.Text, {
            variant: "body-sm",
            color: "text-secondary",
            textAlign: "right",
            children: _v1
          })
        })]
      }), _v4 && (0, _v1.jsx)(_v29.Badge, {
        position: "absolute",
        top: "-11px",
        left: "15px",
        variant: "new",
        size: "sm",
        children: (0, _v1.jsx)(_v12.Text, {
          variant: "heading-2xs",
          color: "text-primary",
          children: _v4
        })
      })]
    });
  }
  function _v31({
    selected: _v0,
    size: _v1 = 20
  }) {
    return _v0 ? (0, _v1.jsx)(_v7.Box, {
      minWidth: `${_v1}px`,
      minHeight: `${_v1}px`,
      width: `${_v1}px`,
      height: `${_v1}px`,
      borderRadius: "50%",
      borderWidth: "6px",
      borderColor: "fill-brand",
      bg: "surface",
      flexShrink: 0
    }) : (0, _v1.jsx)(_v7.Box, {
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
  function _v32(_v0, _v1) {
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
  function _v33({
    tier: _v0 = "starter",
    paywallTracking: _v1,
    defaultPeriodicity: _v2 = "yearly",
    monthlyFreeTrial: _v3 = !1
  }) {
    var _v4;
    let _v5,
      _v6,
      [_v7, _v8] = (0, _v6.useState)(_v2),
      [_v9, _v10] = (0, _v6.useState)(!1),
      _v11 = (0, _v18.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v12 = (0, _v28.useViewer)(),
      _v13 = (_v6 = _v12?.location, _v6?.toUpperCase() === "GB"),
      _v14 = _v11?.find(_v0 => _v0.tier === _v0) ?? _v11?.[0],
      _v15 = _v14?.currency?.currencyCode || "USD",
      _v16 = _v13 ? _v32(_v14?.price.annualMonthly, _v15) : _v14?.priceFormatted.annualMonthly,
      _v17 = _v13 ? _v32(_v14?.price.monthly, _v15) : _v14?.priceFormatted.monthly,
      _v18 = void 0 === _v11,
      _v19 = (0, _v13.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419"),
      _v20 = (0, _v13.useColorModeValue)("var(--vimeo-colors-vimeoBlue-50)", "var(--vimeo-colors-vimeoBlue-900)"),
      _v21 = _v0 => {
        _v8(_v0), "monthly" !== _v0 || _v3 || _v10(!1);
      },
      _v22 = (0, _v14.translate)({
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
      _v23 = _v22.length > 12;
    return (0, _v1.jsxs)(_v8.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: [(0, _v1.jsxs)(_v8.Flex, {
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
        children: [(0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          width: "100%",
          paddingX: {
            base: "0",
            md: "32px"
          },
          children: [(0, _v1.jsxs)(_v8.Flex, {
            direction: "row",
            alignItems: "center",
            gap: "sm",
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: {
                base: "heading-lg",
                md: _v23 ? "heading-xl" : "heading-2xl"
              },
              whiteSpace: "nowrap",
              children: _v22
            }), (0, _v1.jsx)(_v7.Box, {
              pt: {
                base: "0",
                md: _v23 ? "4px" : "8px"
              },
              children: (0, _v1.jsx)(_v7.Box, {
                bg: "#8a5ee8",
                px: "6px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v12.Text, {
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "white",
                  children: _v0.charAt(0).toUpperCase() + _v0.slice(1)
                })
              })
            })]
          }), (0, _v1.jsx)(_v12.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: (0, _v14.translate)({
              singular: "All the tools to create, manage, and showcase video.",
              dictionary: {
                es: {
                  singular: "Todas las herramientas para crear, gestionar y presentar videos."
                },
                "de-DE": {
                  singular: "Alle Tools zum Erstellen, Verwalten und Präsentieren von Videos."
                },
                "fr-FR": {
                  singular: "Tous les outils pour créer, gérer et présenter des vidéos."
                },
                "ja-JP": {
                  singular: "動画の作成・管理・公開に必要なツールがすべて揃っています。"
                },
                "ko-KR": {
                  singular: "동영상을 제작 및 관리하고 선보일 수 있는 모든 도구를"
                },
                "pt-BR": {
                  singular: "Todas as ferramentas para criar, gerenciar e mostrar seus vídeos."
                },
                "zh-CN": {
                  singular: "用于创建、管理和展示视频的所有工具。"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v7.Box, {
          width: "100%",
          maxWidth: "252px",
          maxHeight: _v9 ? "180px" : "200px",
          minHeight: "120px",
          aspectRatio: "1333/1058",
          flexShrink: "1",
          backgroundImage: `url(${_v19})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transition: _v9 ? "all 0.3s ease" : "all 0.3s ease 0.1s"
        }), (0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          gap: "8px",
          width: "100%",
          marginBottom: {
            base: "12px",
            md: "0px"
          },
          children: [(0, _v1.jsxs)(_v8.Flex, {
            as: "button",
            type: "button",
            onClick: () => {
              let _v0 = !_v9;
              _v10(_v0), _v0 && !_v3 && _v8("yearly");
            },
            alignItems: "center",
            gap: "md",
            padding: "md",
            width: "100%",
            height: "78px",
            borderColor: _v9 ? "fill-brand" : "input-stroke",
            borderRadius: "16px",
            borderWidth: "1px",
            borderStyle: "solid",
            cursor: "pointer",
            bg: _v9 ? _v20 : "surface",
            _hover: {
              bg: _v9 ? _v20 : "input-fill-hover"
            },
            transition: "background-color 0.15s ease, border-color 0.15s ease",
            sx: {
              width: "100% !important"
            },
            children: [(0, _v1.jsxs)(_v8.Flex, {
              direction: "column",
              alignItems: "start",
              flex: "1",
              gap: "2px",
              children: [(0, _v1.jsx)(_v12.Text, {
                variant: "heading-sm",
                fontWeight: "medium",
                color: "text-primary",
                children: _v9 ? (0, _v14.translate)({
                  singular: "Free trial enabled",
                  dictionary: {
                    es: {
                      singular: "Prueba gratuita activada"
                    },
                    "de-DE": {
                      singular: "Kostenlose Testversion aktiviert."
                    },
                    "fr-FR": {
                      singular: "Essai gratuit activé"
                    },
                    "ja-JP": {
                      singular: "無料トライアルが有効になりました"
                    },
                    "ko-KR": {
                      singular: "무료 체험이 시작되었습니다"
                    },
                    "pt-BR": {
                      singular: "Experimente grátis ativado"
                    },
                    "zh-CN": {
                      singular: "已开启免费试用。"
                    }
                  }
                }) : (0, _v14.translate)({
                  singular: "Not sure yet?",
                  dictionary: {
                    es: {
                      singular: "¿Todavía no está seguro?"
                    },
                    "de-DE": {
                      singular: "Sind Sie noch nicht sicher?"
                    },
                    "fr-FR": {
                      singular: "Vous n'êtes pas encore sûr ?"
                    },
                    "ja-JP": {
                      singular: "まだ決め手に欠けますか？"
                    },
                    "ko-KR": {
                      singular: "아직 확신하기 어려운가요?"
                    },
                    "pt-BR": {
                      singular: "Ainda não tem certeza, o senhor?"
                    },
                    "zh-CN": {
                      singular: "还要再考虑一下？"
                    }
                  }
                })
              }), !_v9 && (0, _v1.jsx)(_v12.Text, {
                variant: "body-md",
                color: "text-tertiary",
                children: (0, _v14.translate)({
                  singular: "Enable free trial",
                  dictionary: {
                    es: {
                      singular: "Activar prueba gratuita"
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
                      singular: "무료 체험을 시작해 보세요"
                    },
                    "pt-BR": {
                      singular: "Ativar teste gratuito"
                    },
                    "zh-CN": {
                      singular: "开启免费试用。"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v34, {
              selected: _v9
            })]
          }), (0, _v1.jsxs)(_v8.Flex, {
            width: "100%",
            px: "md",
            justifyContent: "space-between",
            alignItems: "center",
            height: _v9 ? "20px" : "0px",
            opacity: +!!_v9,
            transition: _v9 ? "height 0.3s ease, opacity 0.3s ease 0.1s" : "height 0.3s ease 0.1s, opacity 0.3s ease",
            overflow: "hidden",
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: "heading-2xs",
              color: "text-secondary",
              children: (0, _v14.translate)({
                singular: "{amount} due today",
                replacements: {
                  amount: (_v4 = _v15, _v5 = (0, _v14.getCurrentLocale)(), new Intl.NumberFormat(_v5, {
                    style: "currency",
                    currency: _v4,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  }).format(0))
                },
                dictionary: {
                  es: {
                    singular: "{amount} vence(n) hoy"
                  },
                  "de-DE": {
                    singular: "{amount} heute fällig"
                  },
                  "fr-FR": {
                    singular: "{amount} prévu aujourd’hui"
                  },
                  "ja-JP": {
                    singular: "{amount}の期限は今日です"
                  },
                  "ko-KR": {
                    singular: "오늘 {amount} 마감"
                  },
                  "pt-BR": {
                    singular: "{amount} vencem hoje"
                  },
                  "zh-CN": {
                    singular: "今日待支付 {amount}。"
                  }
                }
              })
            }), (0, _v1.jsx)(_v12.Text, {
              variant: "heading-2xs",
              color: "fill-brand",
              children: (0, _v14.translate)({
                singular: "Free",
                dictionary: {
                  es: {
                    singular: "Gratis"
                  },
                  "de-DE": {
                    singular: "Kostenlos"
                  },
                  "fr-FR": {
                    singular: "Gratuit "
                  },
                  "ja-JP": {
                    singular: "無料"
                  },
                  "ko-KR": {
                    singular: "무료"
                  },
                  "zh-CN": {
                    singular: "免费"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          gap: "12px",
          width: "100%",
          children: [_v18 ? (0, _v1.jsx)(_v7.Box, {
            position: "relative",
            width: "100%",
            children: (0, _v1.jsx)(_v25.Skeleton, {
              width: "100%",
              height: "64px",
              borderRadius: "16px"
            })
          }) : (0, _v1.jsx)(_v30, {
            title: (0, _v14.translate)({
              singular: "Yearly",
              dictionary: {
                es: {
                  singular: "Anual"
                },
                "de-DE": {
                  singular: "jährlich"
                },
                "fr-FR": {
                  singular: "annuel"
                },
                "ja-JP": {
                  singular: "年間"
                },
                "ko-KR": {
                  singular: "연간"
                },
                "pt-BR": {
                  singular: "anual"
                },
                "zh-CN": {
                  singular: "每年"
                }
              }
            }),
            price: _v16 ? `${_v16}${(0, _v14.translate)({
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
            selected: "yearly" === _v7,
            onClick: () => _v21("yearly"),
            badge: (0, _v14.translate)({
              singular: "Most popular",
              dictionary: {
                es: {
                  singular: "Más popular"
                },
                "de-DE": {
                  singular: "Besonders beliebt"
                },
                "fr-FR": {
                  singular: "Plus populaire"
                },
                "ja-JP": {
                  singular: "最も人気なプラン"
                },
                "ko-KR": {
                  singular: "인기"
                },
                "pt-BR": {
                  singular: "Mais Popular"
                },
                "zh-CN": {
                  singular: "最热门"
                }
              }
            })
          }), _v18 ? (0, _v1.jsx)(_v7.Box, {
            width: "100%",
            children: (0, _v1.jsx)(_v25.Skeleton, {
              width: "100%",
              height: "64px",
              borderRadius: "16px"
            })
          }) : (0, _v1.jsx)(_v30, {
            title: (0, _v14.translate)({
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
            }),
            price: _v17 ? `${_v17}${(0, _v14.translate)({
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
            selected: "monthly" === _v7,
            onClick: () => _v21("monthly")
          }), !_v18 && (0, _v1.jsx)(_v12.Text, {
            variant: "body-sm",
            color: "text-tertiary",
            textAlign: "center",
            children: _v13 ? (0, _v14.translate)({
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
            }) : (0, _v14.translate)({
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
      }), (0, _v1.jsx)(_v7.Box, {
        position: "sticky",
        bottom: "0",
        width: "100%",
        maxWidth: "400px",
        pt: "24px",
        pb: {
          base: "0px",
          md: "48px"
        },
        children: (0, _v1.jsx)(_v24.Button, {
          width: "100%",
          height: "48px",
          variant: "primary",
          onClick: () => {
            let _v0 = "monthly" === _v7 ? `${_v0}/monthly` : _v0,
              _v1 = (0, _v27.buildCheckoutUrl)({
                ..._v1,
                tier: _v0,
                isTrial: _v9
              });
            window.location.assign(_v1);
          },
          isDisabled: _v18,
          children: _v9 ? (0, _v14.translate)({
            singular: "Try for free",
            dictionary: {
              es: {
                singular: "Probar gratis"
              },
              "de-DE": {
                singular: "Gratis-Angebot"
              },
              "fr-FR": {
                singular: "Essai gratuit"
              },
              "ja-JP": {
                singular: "無料で試す"
              },
              "ko-KR": {
                singular: "무료 체험하기"
              },
              "pt-BR": {
                singular: "Teste gratuitamente"
              },
              "zh-CN": {
                singular: "免费试用"
              }
            }
          }) : (0, _v14.translate)({
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
  }
  function _v34({
    selected: _v0
  }) {
    return (0, _v1.jsx)(_v7.Box, {
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
      children: _v0 && (0, _v1.jsx)(_v26.Checkmark, {
        color: "white",
        width: "20px",
        height: "20px"
      })
    });
  }
  function _v35({
    dismissButtonPosition: _v0 = "top_right",
    onDismiss: _v1
  }) {
    return (0, _v1.jsx)(_v24.Button, {
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
      children: (0, _v14.translate)({
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
  }
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  async function _v42({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v41.measureLatency)("postMeMembershipReverseTrial", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/membership/reverse_trial?fields=${_v1.map(_v39.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v39.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v39.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v39.deepCamelCase)(_v1);
    });
  }
  var _v43 = _v0.i(0);
  let _v44 = {
      isLoading: !1,
      errorKind: null
    },
    _v45 = {
      tier: "starter",
      periodicity: "trial",
      isFreeTrial: !0
    };
  function _v46({
    trialDays: _v0,
    paywallTracking: _v1,
    onComplete: _v2,
    onActivated: _v3
  }) {
    let [_v4, _v5] = (0, _v6.useState)(!1),
      {
        activate: _v6,
        isLoading: _v7,
        errorKind: _v8
      } = function () {
        let {
            baseUrl: _v0,
            jwt: _v1,
            xVimeoPage: _v2,
            locale: _v3
          } = (0, _v43.useGctlConfig)(),
          [_v4, _v5] = (0, _v6.useState)(_v44);
        return {
          activate: (0, _v6.useCallback)(async _v0 => {
            _v5({
              isLoading: !0,
              errorKind: null
            });
            try {
              await _v42({
                baseUrl: _v0,
                select: ["productId"],
                variables: {
                  trialDays: _v0
                },
                headers: {
                  "Content-Type": "application/json",
                  Authorization: _v1 ? `jwt ${_v1}` : "",
                  "Vimeo-Page": `${_v2}`,
                  "Accept-Language": _v3 ?? "en"
                }
              }), _v5({
                isLoading: !1,
                errorKind: null
              });
            } catch (_v0) {
              throw _v5({
                isLoading: !1,
                errorKind: _v0 instanceof _v39.NetworkError ? _v0.status >= 500 ? "5xx" : "4xx" : "network"
              }), _v0;
            }
          }, [_v0, _v1, _v2, _v3]),
          isLoading: _v4.isLoading,
          errorKind: _v4.errorKind
        };
      }(),
      _v9 = (0, _v18.useGetSubscriptionPlansData)(["starter"], void 0, !1),
      _v10 = _v9?.find(_v0 => "starter" === _v0.tier) ?? _v9?.[0],
      _v11 = _v10?.metadata?.entitlements?.params?.videoStoragePeriodicQuota;
    (0, _v40.usePaywallTracking)({
      ..._v1,
      isVisible: !_v4
    });
    let {
        trackCheckoutPurchaseButtonClicked: _v12,
        trackCheckoutFailed: _v13,
        trackUserConverted: _v14
      } = (0, _v27.useCheckoutTracking)(),
      _v15 = (0, _v6.useRef)(!1);
    (0, _v6.useEffect)(() => {
      "4xx" !== _v8 || _v15.current || (_v15.current = !0, _v2());
    }, [_v8, _v2]);
    let _v16 = async () => {
      _v12(_v45);
      try {
        await _v6(_v0), _v14(_v45), _v5(!0), _v3?.();
      } catch (_v0) {
        _v13({
          ..._v45,
          error_message: _v0 instanceof Error ? _v0.message : void 0,
          error_code: _v0 instanceof _v39.NetworkError ? String(_v0.status) : void 0
        });
      }
    };
    return _v4 ? (0, _v1.jsx)(_v49, {
      trialDays: _v0,
      onGotIt: () => {
        window.location.assign("/home");
      }
    }) : (0, _v1.jsx)(_v47, {
      trialDays: _v0,
      storageQuota: _v11,
      isLoading: _v7,
      showInlineError: "5xx" === _v8 || "network" === _v8,
      onActivate: _v16
    });
  }
  function _v47({
    trialDays: _v0,
    storageQuota: _v1,
    isLoading: _v2,
    showInlineError: _v3,
    onActivate: _v4
  }) {
    let _v5 = (0, _v14.translate)({
        singular: "Start my {DAYS} days free trial",
        replacements: {
          DAYS: `${_v0}`
        },
        dictionary: {
          es: {
            singular: "Iniciar mi prueba gratuita de {DAYS} días"
          },
          "de-DE": {
            singular: "Meine {DAYS}-tägige kostenlose Testphase starten"
          },
          "fr-FR": {
            singular: "Commencer mon essai gratuit de {DAYS} jours"
          },
          "ja-JP": {
            singular: "{DAYS}日間の無料トライアルを開始"
          },
          "ko-KR": {
            singular: "내 {DAYS}일 무료 체험 시작하기"
          },
          "pt-BR": {
            singular: "Iniciar meu teste gratuito de {DAYS} dias"
          },
          "zh-CN": {
            singular: "开始我的 {DAYS} 天免费试用"
          }
        }
      }),
      _v6 = (0, _v14.translate)({
        singular: "Start my free trial",
        dictionary: {
          es: {
            singular: "Comenzar mi prueba gratuita"
          },
          "de-DE": {
            singular: "Mein kostenloses Probeabo starten"
          },
          "fr-FR": {
            singular: "Commencer mon essai gratuit"
          },
          "ja-JP": {
            singular: "無料トライアルを始める"
          },
          "ko-KR": {
            singular: "무료 체험 시작"
          },
          "pt-BR": {
            singular: "Fazer um teste grátis"
          },
          "zh-CN": {
            singular: "开始我的免费试用"
          }
        }
      });
    return (0, _v1.jsx)(_v8.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        gap: "32px",
        flex: "1",
        pb: {
          base: "24px",
          md: "48px"
        },
        px: {
          base: "0",
          md: "32px"
        },
        overflow: "auto",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          paddingX: "16px",
          children: [(0, _v1.jsx)(_v7.Box, {
            display: {
              base: "none",
              md: "block"
            },
            children: (0, _v1.jsx)(_v12.Text, {
              variant: "heading-lg",
              textAlign: "center",
              whiteSpace: "nowrap",
              children: (0, _v14.translate)({
                singular: "Try the best of Vimeo Starter — for free",
                dictionary: {
                  es: {
                    singular: "Pruebe lo mejor de Vimeo Starter gratis"
                  },
                  "de-DE": {
                    singular: "Teste das Beste von Vimeo Starter – kostenlos"
                  },
                  "fr-FR": {
                    singular: "Essayez le meilleur de Vimeo Starter, gratuitement"
                  },
                  "ja-JP": {
                    singular: "無料でVimeo Starterを体験"
                  },
                  "ko-KR": {
                    singular: "Vimeo Starter 혜택을 무료로 이용해 보세요."
                  },
                  "pt-BR": {
                    singular: "Experimente o melhor do Vimeo Starter de graça"
                  },
                  "zh-CN": {
                    singular: "免费试用 Vimeo Starter 的最佳功能"
                  }
                }
              })
            })
          }), (0, _v1.jsxs)(_v8.Flex, {
            display: {
              base: "flex",
              md: "none"
            },
            direction: "row",
            alignItems: "center",
            gap: "xs",
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v12.Text, {
              variant: "heading-xl",
              whiteSpace: "nowrap",
              children: (0, _v14.translate)({
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
              })
            }), (0, _v1.jsx)(_v7.Box, {
              bg: "#8a5ee8",
              px: "6px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              children: (0, _v1.jsx)(_v12.Text, {
                fontSize: "14px",
                fontWeight: "medium",
                color: "white",
                children: (0, _v14.translate)("Starter")
              })
            })]
          })]
        }), (0, _v1.jsx)(_v7.Box, {
          width: "100%",
          maxWidth: {
            base: "100%",
            md: "540px"
          },
          border: "1px solid",
          borderColor: "input-stroke",
          borderRadius: "24px",
          padding: {
            base: "32px 16px",
            md: "32px"
          },
          children: (0, _v1.jsxs)(_v17.VStack, {
            gap: "32px",
            alignItems: "center",
            width: "100%",
            children: [(0, _v1.jsxs)(_v17.VStack, {
              gap: "md",
              alignItems: "center",
              width: "100%",
              children: [(0, _v1.jsx)(_v12.Text, {
                variant: {
                  base: "heading-sm",
                  md: "heading-md"
                },
                color: "text-primary",
                textAlign: "center",
                children: (0, _v14.translate)({
                  singular: "All the tools to create, manage, and showcase video. No strings attached.",
                  dictionary: {
                    es: {
                      singular: "Todas las herramientas para crear, gestionar y presentar videos. Sin condiciones."
                    },
                    "de-DE": {
                      singular: "Alle Tools zum Erstellen, Verwalten und Präsentieren von Videos. Ohne Bedingungen."
                    },
                    "fr-FR": {
                      singular: "Tous les outils pour créer, gérer et présenter des vidéos. Sans engagement."
                    },
                    "ja-JP": {
                      singular: "動画の作成・管理・公開に必要なツールがすべて揃っています。気軽にお試しください。"
                    },
                    "ko-KR": {
                      singular: "동영상을 제작 및 관리하고 선보일 수 있는 모든 도구를 조건 없이 이용하세요."
                    },
                    "pt-BR": {
                      singular: "Todas as ferramentas para criar, gerenciar e mostrar seus vídeos. Sem compromisso."
                    },
                    "zh-CN": {
                      singular: "用于创建、管理和展示视频的所有工具。没有任何附加条件。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v7.Box, {
                width: "79px",
                height: "2px",
                bg: "stroke"
              }), (0, _v1.jsx)(_v17.VStack, {
                gap: "md",
                alignItems: "start",
                width: "100%",
                children: (0, _v22.getFeatures)(_v1).map((_v0, _v1) => (0, _v1.jsx)(_v19.FeatureRow, {
                  ..._v0
                }, `row${_v1}`))
              })]
            }), (0, _v1.jsxs)(_v17.VStack, {
              gap: "md",
              alignItems: "stretch",
              width: "100%",
              children: [(0, _v1.jsxs)(_v24.Button, {
                size: "lg",
                backgroundColor: "fill-brand",
                color: "text-primary",
                _hover: {
                  backgroundColor: "vimeoBlue.300"
                },
                _disabled: {
                  opacity: .7,
                  cursor: "not-allowed"
                },
                _focus: {
                  boxShadow: "0 0 0 3px #0099ff"
                },
                width: "100%",
                onClick: _v4,
                isLoading: _v2,
                children: [(0, _v1.jsx)(_v7.Box, {
                  display: {
                    base: "none",
                    md: "inline"
                  },
                  children: _v5
                }), (0, _v1.jsx)(_v7.Box, {
                  display: {
                    base: "inline",
                    md: "none"
                  },
                  children: _v6
                })]
              }), _v3 && (0, _v1.jsx)(_v12.Text, {
                variant: "body-xs",
                color: "status-destructive-primary",
                textAlign: "center",
                role: "alert",
                children: (0, _v14.translate)({
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
              }), (0, _v1.jsx)(_v48, {})]
            })]
          })
        })]
      })
    });
  }
  function _v48() {
    return (0, _v1.jsxs)(_v36.HStack, {
      bg: "vimeoBlueAlpha.300",
      borderRadius: "10px",
      px: "12px",
      py: "11px",
      gap: "md",
      alignItems: "start",
      width: "100%",
      children: [(0, _v1.jsx)(_v7.Box, {
        color: "text-primary",
        pt: "2px",
        flexShrink: 0,
        children: (0, _v1.jsx)(_v38.CreditCard, {})
      }), (0, _v1.jsxs)(_v17.VStack, {
        alignItems: "start",
        gap: "0",
        children: [(0, _v1.jsx)(_v12.Text, {
          variant: "heading-sm",
          color: "text-primary",
          children: (0, _v14.translate)({
            singular: "No credit card needed",
            dictionary: {
              es: {
                singular: "No se necesita tarjeta de crédito"
              },
              "de-DE": {
                singular: "Keine Kreditkarte erforderlich"
              },
              "fr-FR": {
                singular: "Aucune carte de crédit nécessaire"
              },
              "ja-JP": {
                singular: "クレジットカードは不要です"
              },
              "ko-KR": {
                singular: "신용카드 필요 없음"
              },
              "pt-BR": {
                singular: "Não é necessário cartão de crédito"
              },
              "zh-CN": {
                singular: "无需信用卡"
              }
            }
          })
        }), (0, _v1.jsx)(_v12.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v14.translate)({
            singular: "We’ll remind you before your trial ends",
            dictionary: {
              es: {
                singular: "Se lo recordaremos antes de que finalice su período de prueba"
              },
              "de-DE": {
                singular: "Wir werden Sie erinnern, bevor Ihr Probeabo endet"
              },
              "fr-FR": {
                singular: "Nous vous enverrons un rappel avant la fin de votre essai"
              },
              "ja-JP": {
                singular: "トライアル終了前にリマインダーをお送りします"
              },
              "ko-KR": {
                singular: "체험 종료 전 알림 제공"
              },
              "pt-BR": {
                singular: "Avisaremos quando o teste estiver terminando"
              },
              "zh-CN": {
                singular: "我们会在试用期结束前提醒您。"
              }
            }
          })
        })]
      })]
    });
  }
  function _v49({
    trialDays: _v0,
    onGotIt: _v1
  }) {
    let _v2 = (0, _v14.translate)({
      singular: "Great news, your free trial is active, enjoy it for {DAYS} days. We’ll remind you before your trial ends.",
      replacements: {
        DAYS: `${_v0}`
      },
      dictionary: {
        es: {
          singular: "¡Buenas noticias! Tu prueba gratuita está activa; disfrútala durante {DAYS} días. Te recordaremos antes de que termine."
        },
        "de-DE": {
          singular: "Gute Nachrichten: Ihre kostenlose Testphase ist aktiv. Genießen Sie sie {DAYS} Tage. Wir erinnern Sie, bevor die Testphase endet."
        },
        "fr-FR": {
          singular: "Bonne nouvelle : votre période d'essai est active, profitez-en pendant {DAYS} jours. Nous vous le rappellerons avant la fin de votre essai."
        },
        "ja-JP": {
          singular: "おめでとうございます。無料トライアルが有効になりました。{DAYS}日間ご利用いただけます。トライアル終了前にお知らせします。"
        },
        "ko-KR": {
          singular: "좋은 소식입니다. 무료 체험이 활성화되었습니다. {DAYS}일 동안 이용하실 수 있습니다. 체험 종료 전에 알려드리겠습니다."
        },
        "pt-BR": {
          singular: "Ótima notícia, seu teste gratuito está ativo, aproveite por {DAYS} dias. Avisaremos você antes do término do teste."
        },
        "zh-CN": {
          singular: "好消息：您的免费试用已激活，可享受 {DAYS} 天。我们会在试用期结束前提醒您。"
        }
      }
    });
    return (0, _v1.jsx)(_v8.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        gap: "md",
        flex: "1",
        pb: {
          base: "24px",
          md: "48px"
        },
        px: {
          base: "0",
          md: "32px"
        },
        overflow: "auto",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "sm",
          paddingX: "16px",
          children: [(0, _v1.jsx)(_v7.Box, {
            color: "fill-brand",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            children: (0, _v1.jsx)(_v37.CircleCheckFilled, {})
          }), (0, _v1.jsx)(_v12.Text, {
            variant: "heading-lg",
            whiteSpace: "nowrap",
            children: (0, _v14.translate)({
              singular: "Free trial activated!",
              dictionary: {
                es: {
                  singular: "¡Prueba gratuita activada!"
                },
                "de-DE": {
                  singular: "Kostenlose Testphase aktiviert!"
                },
                "fr-FR": {
                  singular: "Essai gratuit activé !"
                },
                "ja-JP": {
                  singular: "無料トライアルが有効になりました！"
                },
                "ko-KR": {
                  singular: "무료 체험이 활성화되었습니다!"
                },
                "pt-BR": {
                  singular: "Teste gratuito ativado!"
                },
                "zh-CN": {
                  singular: "免费试用已激活！"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v7.Box, {
          width: "100%",
          maxWidth: {
            base: "100%",
            md: "540px"
          },
          padding: {
            base: "32px 24px",
            md: "32px"
          },
          children: (0, _v1.jsxs)(_v17.VStack, {
            gap: "32px",
            alignItems: "center",
            width: "100%",
            children: [(0, _v1.jsxs)(_v17.VStack, {
              gap: "md",
              alignItems: "center",
              width: "100%",
              children: [(0, _v1.jsx)(_v12.Text, {
                variant: "heading-md",
                color: "text-secondary",
                textAlign: "center",
                children: _v2
              }), (0, _v1.jsx)(_v7.Box, {
                width: "100%",
                aspectRatio: "476/276",
                children: (0, _v1.jsx)("img", {
                  src: "https://i.vimeocdn.com/custom_asset/fb38679f56c7c0f194f9a0ffe607033e",
                  alt: "",
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "contain"
                  }
                })
              })]
            }), (0, _v1.jsx)(_v24.Button, {
              size: "lg",
              variant: "primary",
              width: "100%",
              onClick: _v1,
              children: (0, _v14.translate)({
                singular: "Got it",
                dictionary: {
                  es: {
                    singular: "Entendido"
                  },
                  "de-DE": {
                    singular: "Alles klar"
                  },
                  "fr-FR": {
                    singular: "J'ai compris"
                  },
                  "ja-JP": {
                    singular: "了解"
                  },
                  "ko-KR": {
                    singular: "확인"
                  },
                  "pt-BR": {
                    singular: "Entendi"
                  },
                  "zh-CN": {
                    singular: "明白"
                  }
                }
              })
            })]
          })
        })]
      })
    });
  }
  function _v50() {
    return (0, _v1.jsx)(_v8.Flex, {
      justifyContent: "center",
      width: "100%",
      children: (0, _v1.jsxs)(_v17.VStack, {
        borderColor: "input-stroke",
        borderRadius: "lg",
        borderWidth: 1,
        maxWidth: 540,
        paddingX: {
          base: "md",
          md: "lg"
        },
        paddingY: "xl",
        gap: "md",
        alignItems: "start",
        children: [(0, _v1.jsx)(_v12.Text, {
          variant: {
            base: "heading-sm",
            md: "heading-md"
          },
          textAlign: "center",
          children: (0, _v14.translate)({
            singular: "All the tools to create, manage, and showcase video. No strings attached.",
            dictionary: {
              es: {
                singular: "Todas las herramientas para crear, gestionar y presentar videos. Sin condiciones."
              },
              "de-DE": {
                singular: "Alle Tools zum Erstellen, Verwalten und Präsentieren von Videos. Ohne Bedingungen."
              },
              "fr-FR": {
                singular: "Tous les outils pour créer, gérer et présenter des vidéos. Sans engagement."
              },
              "ja-JP": {
                singular: "動画の作成・管理・公開に必要なツールがすべて揃っています。気軽にお試しください。"
              },
              "ko-KR": {
                singular: "동영상을 제작 및 관리하고 선보일 수 있는 모든 도구를 조건 없이 이용하세요."
              },
              "pt-BR": {
                singular: "Todas as ferramentas para criar, gerenciar e mostrar seus vídeos. Sem compromisso."
              },
              "zh-CN": {
                singular: "用于创建、管理和展示视频的所有工具。没有任何附加条件。"
              }
            }
          })
        }), (0, _v1.jsx)(_v7.Box, {
          margin: "auto",
          height: "2px",
          minWidth: "80px",
          maxWidth: "80px",
          background: "stroke"
        }), (0, _v22.getFeatures)(null).map((_v0, _v1) => (0, _v1.jsx)(_v19.FeatureRow, {
          ..._v0
        }, `row${_v1}`)), (0, _v1.jsx)(_v24.Button, {
          width: "100%",
          mt: "xl",
          variant: "primary",
          as: "a",
          href: "/cart/starter/trial",
          children: (0, _v14.translate)({
            singular: "Start my free trial",
            dictionary: {
              es: {
                singular: "Comenzar mi prueba gratuita"
              },
              "de-DE": {
                singular: "Mein kostenloses Probeabo starten"
              },
              "fr-FR": {
                singular: "Commencer mon essai gratuit"
              },
              "ja-JP": {
                singular: "無料トライアルを始める"
              },
              "ko-KR": {
                singular: "무료 체험 시작"
              },
              "pt-BR": {
                singular: "Fazer um teste grátis"
              },
              "zh-CN": {
                singular: "开始我的免费试用"
              }
            }
          })
        })]
      })
    });
  }
  function _v51() {
    return (0, _v1.jsx)(_v8.Flex, {
      mb: "xl",
      children: (0, _v1.jsx)(_v12.Text, {
        variant: {
          base: "heading-md",
          md: "heading-lg"
        },
        children: (0, _v14.translate)({
          singular: "Try the best of Vimeo Starter — for free",
          dictionary: {
            es: {
              singular: "Pruebe lo mejor de Vimeo Starter gratis"
            },
            "de-DE": {
              singular: "Teste das Beste von Vimeo Starter – kostenlos"
            },
            "fr-FR": {
              singular: "Essayez le meilleur de Vimeo Starter, gratuitement"
            },
            "ja-JP": {
              singular: "無料でVimeo Starterを体験"
            },
            "ko-KR": {
              singular: "Vimeo Starter 혜택을 무료로 이용해 보세요."
            },
            "pt-BR": {
              singular: "Experimente o melhor do Vimeo Starter de graça"
            },
            "zh-CN": {
              singular: "免费试用 Vimeo Starter 的最佳功能"
            }
          }
        })
      })
    });
  }
  function _v52({
    onSkip: _v0
  }) {
    return (0, _v1.jsx)(_v8.Flex, {
      alignItems: "end",
      padding: "xl",
      mb: "xl",
      grow: "1",
      children: (0, _v1.jsx)(_v24.Button, {
        onClick: _v0,
        variant: "tertiary",
        children: (0, _v14.translate)({
          singular: "Skip trial",
          dictionary: {
            es: {
              singular: "Omitir prueba"
            },
            "de-DE": {
              singular: "Probeabo überspringen"
            },
            "fr-FR": {
              singular: "Ignorer l'essai"
            },
            "ja-JP": {
              singular: "トライアルをスキップ"
            },
            "ko-KR": {
              singular: "체험 건너뛰기"
            },
            "pt-BR": {
              singular: "Pular o teste"
            },
            "zh-CN": {
              singular: "跳过试用"
            }
          }
        })
      })
    });
  }
  var _v53 = _v0.i(0);
  let _v54 = _v0 => ({
    question_id: _v0.id,
    question_text: _v0.question,
    question_description: _v0.description ?? null
  });
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  function _v57({
    text: _v0,
    Icon: _v1,
    isSelected: _v2,
    onToggle: _v3,
    ..._v4
  }) {
    return (0, _v1.jsx)(_v56.Card, {
      onKeyDown: _v0 => {
        "Enter" === _v0.key && _v3();
      },
      onClick: _v3,
      borderRadius: "md",
      borderWidth: "1px",
      borderColor: _v2 ? "stroke-focus" : "input-stroke",
      _hover: {
        borderColor: "var(--vimeo-colors-input-stroke-hover)"
      },
      outline: _v2 ? "1px solid" : void 0,
      ..._v4,
      p: "0.5rem 1rem",
      style: {
        cursor: "pointer",
        userSelect: "none"
      },
      "aria-selected": _v2,
      "aria-label": _v0,
      tabIndex: 0,
      children: (0, _v1.jsxs)(_v8.Flex, {
        justifyContent: "space-between",
        alignItems: {
          base: "center",
          md: "flex-start"
        },
        gap: {
          base: "sm",
          md: "lg"
        },
        textAlign: _v1 ? "left" : "center",
        height: "100%",
        children: [_v1 && (0, _v1.jsx)(_v1, {}), (0, _v1.jsx)(_v12.Text, {
          variant: {
            base: "heading-xs",
            md: "heading-sm"
          },
          width: "100%",
          children: _v0
        })]
      })
    });
  }
  function _v58({
    answers: _v0,
    onToggleAnswer: _v1,
    gridProps: _v2,
    renderSubAnswers: _v3
  }) {
    return _v0 && 0 !== _v0.length ? (0, _v1.jsx)(_v9.Grid, {
      gap: 3,
      ..._v2,
      width: "100%",
      minWidth: {
        base: "auto",
        md: "320px"
      },
      children: _v0.map(_v0 => {
        let _v1 = _v0.icon,
          _v2 = _v3?.(_v0.id),
          _v3 = (0, _v1.jsx)(_v57, {
            text: _v0.label,
            Icon: _v1,
            isSelected: _v0.isSelected,
            onToggle: () => _v1(_v0.id)
          });
        return _v2 ? (0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          gap: "3",
          children: [_v3, _v2]
        }, _v0.id) : (0, _v1.jsx)(_v57, {
          text: _v0.label,
          Icon: _v1,
          isSelected: _v0.isSelected,
          onToggle: () => _v1(_v0.id)
        }, _v0.id);
      })
    }) : (0, _v1.jsx)(_v55.Spinner, {});
  }
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = _v0 => (0, _v1.jsx)(_v62.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M19 6h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-9-1h4v1h-4V5Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h4v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h4v5Zm0-7H4V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Z",
        fill: "currentColor"
      })
    }),
    _v68 = "profile",
    _v69 = "upload_audience",
    _v70 = "usage",
    _v71 = "org_size",
    _v72 = "video_professional",
    _v73 = [{
      id: "video_professional_freelance",
      label: (0, _v14.translate)({
        singular: "Freelance",
        dictionary: {
          "de-DE": {
            singular: "Freiberufler"
          },
          "fr-FR": {
            singular: "Indépendant"
          },
          "ja-JP": {
            singular: "フリーランス"
          },
          "ko-KR": {
            singular: "프리랜서"
          },
          "pt-BR": {
            singular: "Freelancer"
          },
          "zh-CN": {
            singular: "自由职业者"
          }
        }
      }),
      icon: _v63.PersonUser
    }, {
      id: "video_professional_agency",
      label: (0, _v14.translate)({
        singular: "Agency / production company",
        dictionary: {
          es: {
            singular: "Agencia / productora"
          },
          "de-DE": {
            singular: "Agentur / Produktionsfirma"
          },
          "fr-FR": {
            singular: "Agence / société de production"
          },
          "ja-JP": {
            singular: "代理店 / 制作会社"
          },
          "ko-KR": {
            singular: "에이전시 / 제작사"
          },
          "pt-BR": {
            singular: "Agência / produtora"
          },
          "zh-CN": {
            singular: "代理机构 / 制作公司"
          }
        }
      }),
      icon: _v67
    }, {
      id: "video_professional_in_house",
      label: (0, _v14.translate)({
        singular: "In-house at a business",
        dictionary: {
          es: {
            singular: "En el equipo interno de una empresa"
          },
          "de-DE": {
            singular: "Unternehmensintern"
          },
          "fr-FR": {
            singular: "En interne dans une entreprise"
          },
          "ja-JP": {
            singular: "企業内（社内）"
          },
          "ko-KR": {
            singular: "회사 내(사내)"
          },
          "pt-BR": {
            singular: "Na equipe interna de uma empresa"
          },
          "zh-CN": {
            singular: "在公司内部"
          }
        }
      }),
      icon: _v59.Building
    }],
    _v74 = [{
      id: _v68,
      question: (0, _v14.translate)({
        singular: "Which best describes you?",
        dictionary: {
          es: {
            singular: "¿Cuál te describe mejor?"
          },
          "de-DE": {
            singular: "Welche Beschreibung trifft am besten auf Sie zu?"
          },
          "fr-FR": {
            singular: "Laquelle vous décrit le mieux ?"
          },
          "ja-JP": {
            singular: "どれがあなたに最も当てはまりますか？"
          },
          "ko-KR": {
            singular: "어떤 항목이 귀하를 가장 잘 설명하나요?"
          },
          "pt-BR": {
            singular: "Qual das opções melhor descreve você?"
          },
          "zh-CN": {
            singular: "下列哪项最能描述您？"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !1,
      answers: [{
        id: _v72,
        label: (0, _v14.translate)({
          singular: "Video professional",
          dictionary: {
            es: {
              singular: "Profesional de video"
            },
            "de-DE": {
              singular: "Video-Profi"
            },
            "fr-FR": {
              singular: "Professionnel de la vidéo"
            },
            "ja-JP": {
              singular: "映像のプロフェッショナル"
            },
            "ko-KR": {
              singular: "영상 전문가"
            },
            "pt-BR": {
              singular: "Profissional de vídeo"
            },
            "zh-CN": {
              singular: "视频专业人士"
            }
          }
        }),
        icon: _v64.PresentationPlay
      }, {
        id: "independent_filmmaker",
        label: (0, _v14.translate)({
          singular: "Independent filmmaker",
          dictionary: {
            es: {
              singular: "Cineasta independiente"
            },
            "de-DE": {
              singular: "Unabhängiger Filmemacher"
            },
            "fr-FR": {
              singular: "Réalisateur indépendant"
            },
            "ja-JP": {
              singular: "独立系映画製作者"
            },
            "ko-KR": {
              singular: "독립 영화 제작자"
            },
            "pt-BR": {
              singular: "Cineasta independente"
            },
            "zh-CN": {
              singular: "独立电影制片人"
            }
          }
        }),
        icon: _v64.PresentationPlay
      }, {
        id: "non_video_freelancer",
        label: (0, _v14.translate)({
          singular: "Non-video freelancer",
          dictionary: {
            es: {
              singular: "Freelance no centrado en video"
            },
            "de-DE": {
              singular: "Nicht-Video-Freiberufler"
            },
            "fr-FR": {
              singular: "Indépendant non spécialisé en vidéo"
            },
            "ja-JP": {
              singular: "動画以外のフリーランス"
            },
            "ko-KR": {
              singular: "비영상 프리랜서"
            },
            "pt-BR": {
              singular: "Freelancer não de vídeo"
            },
            "zh-CN": {
              singular: "非视频自由职业者"
            }
          }
        }),
        icon: _v63.PersonUser
      }, {
        id: "business_owner_employee",
        label: (0, _v14.translate)({
          singular: "Business owner or employee",
          dictionary: {
            es: {
              singular: "Propietario o empleado de una empresa"
            },
            "de-DE": {
              singular: "Geschäftsinhaber oder Mitarbeiter"
            },
            "fr-FR": {
              singular: "Propriétaire d'entreprise ou employé"
            },
            "ja-JP": {
              singular: "事業主または従業員"
            },
            "ko-KR": {
              singular: "사업주 또는 직원"
            },
            "pt-BR": {
              singular: "Proprietário ou funcionário de empresa"
            },
            "zh-CN": {
              singular: "企业主或员工"
            }
          }
        }),
        icon: _v59.Building
      }, {
        id: "viewer_only",
        label: (0, _v14.translate)({
          singular: "Viewer only",
          dictionary: {
            es: {
              singular: "Solo espectador"
            },
            "de-DE": {
              singular: "Nur Zuschauer"
            },
            "fr-FR": {
              singular: "Spectateur uniquement"
            },
            "ja-JP": {
              singular: "視聴者のみ"
            },
            "ko-KR": {
              singular: "시청자 전용"
            },
            "pt-BR": {
              singular: "Apenas espectador"
            },
            "zh-CN": {
              singular: "仅作为观众"
            }
          }
        }),
        icon: _v65.SearchMagnifier
      }]
    }, {
      id: _v69,
      question: (0, _v14.translate)({
        singular: "Do you upload videos? Who are these videos for?",
        dictionary: {
          es: {
            singular: "¿Subes videos? ¿Para quiénes son estos videos?"
          },
          "de-DE": {
            singular: "Laden Sie Videos hoch? Für wen sind diese Videos?"
          },
          "fr-FR": {
            singular: "Téléversez-vous des vidéos ? Pour qui sont ces vidéos ?"
          },
          "ja-JP": {
            singular: "動画をアップロードしますか？これらの動画は誰のためのものですか？"
          },
          "ko-KR": {
            singular: "동영상을 업로드하나요? 이 동영상들은 누구를 위한 것인가요?"
          },
          "pt-BR": {
            singular: "Você envia vídeos? Para quem são esses vídeos?"
          },
          "zh-CN": {
            singular: "您会上传视频吗？这些视频是为谁准备的？"
          }
        }
      }),
      description: (0, _v14.translate)({
        singular: "Choose as many as you like",
        dictionary: {
          es: {
            singular: "Selecciona tantas como desees"
          },
          "de-DE": {
            singular: "Wählen Sie so viele, wie Sie möchten"
          },
          "fr-FR": {
            singular: "Choisissez autant que vous le souhaitez"
          },
          "ja-JP": {
            singular: "いくつでも選択できます"
          },
          "ko-KR": {
            singular: "원하시는 만큼 선택하세요"
          },
          "pt-BR": {
            singular: "Escolha quantos quiser"
          },
          "zh-CN": {
            singular: "可选择任意多个"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !0,
      answers: [{
        id: "clients",
        label: (0, _v14.translate)({
          singular: "Clients",
          dictionary: {
            es: {
              singular: "Clientes"
            },
            "de-DE": {
              singular: "Kunden"
            },
            "ja-JP": {
              singular: "クライアント"
            },
            "ko-KR": {
              singular: "클라이언트"
            },
            "pt-BR": {
              singular: "Clientes"
            },
            "zh-CN": {
              singular: "客户"
            }
          }
        }),
        icon: _v60.Chats
      }, {
        id: "own_brand",
        label: (0, _v14.translate)({
          singular: "My own brand or business",
          dictionary: {
            es: {
              singular: "Mi propia marca o negocio"
            },
            "de-DE": {
              singular: "Meine eigene Marke oder mein eigenes Unternehmen"
            },
            "fr-FR": {
              singular: "Ma propre marque ou entreprise"
            },
            "ja-JP": {
              singular: "自身のブランドまたは事業"
            },
            "ko-KR": {
              singular: "자신의 브랜드나 사업"
            },
            "pt-BR": {
              singular: "Minha própria marca ou negócio"
            },
            "zh-CN": {
              singular: "我的品牌或业务"
            }
          }
        }),
        icon: _v0 => (0, _v1.jsx)(_v62.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v1.jsx)("path", {
            d: "M6.5 14h-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Zm-1 5h-1v-3h1v3Zm15-9h-3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Zm-1 9h-1v-7h1v7Zm-6-16h-3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-1 16h-1V5h1v14Z",
            fill: "currentColor"
          })
        })
      }, {
        id: "my_company",
        label: (0, _v14.translate)({
          singular: "My company",
          dictionary: {
            es: {
              singular: "Mi empresa"
            },
            "de-DE": {
              singular: "Mein Unternehmen"
            },
            "fr-FR": {
              singular: "Mon entreprise"
            },
            "ja-JP": {
              singular: "自社"
            },
            "ko-KR": {
              singular: "내 회사"
            },
            "pt-BR": {
              singular: "Minha empresa"
            },
            "zh-CN": {
              singular: "我的公司"
            }
          }
        }),
        icon: _v59.Building
      }, {
        id: "creative_audience",
        label: (0, _v14.translate)({
          singular: "A creative audience",
          dictionary: {
            es: {
              singular: "Una audiencia creativa"
            },
            "de-DE": {
              singular: "Ein kreatives Publikum"
            },
            "fr-FR": {
              singular: "Un public créatif"
            },
            "ja-JP": {
              singular: "クリエイティブな視聴者"
            },
            "ko-KR": {
              singular: "창의적인 관객"
            },
            "pt-BR": {
              singular: "Um público criativo"
            },
            "zh-CN": {
              singular: "创意型受众"
            }
          }
        }),
        icon: _v66.Share
      }, {
        id: "just_me",
        label: (0, _v14.translate)({
          singular: "Just me",
          dictionary: {
            es: {
              singular: "Solo yo"
            },
            "de-DE": {
              singular: "Nur ich"
            },
            "fr-FR": {
              singular: "Seulement moi"
            },
            "ja-JP": {
              singular: "自分のみ"
            },
            "ko-KR": {
              singular: "나만"
            },
            "pt-BR": {
              singular: "Somente eu"
            },
            "zh-CN": {
              singular: "仅限我"
            }
          }
        }),
        icon: _v63.PersonUser
      }, {
        id: "mainly_watch",
        label: (0, _v14.translate)({
          singular: "I mainly watch videos",
          dictionary: {
            es: {
              singular: "Principalmente veo videos"
            },
            "de-DE": {
              singular: "Ich schaue hauptsächlich Videos"
            },
            "fr-FR": {
              singular: "Je regarde principalement des vidéos"
            },
            "ja-JP": {
              singular: "主に動画を視聴します"
            },
            "ko-KR": {
              singular: "주로 동영상을 시청합니다"
            },
            "pt-BR": {
              singular: "Eu assisto principalmente vídeos"
            },
            "zh-CN": {
              singular: "我主要观看视频"
            }
          }
        }),
        icon: _v65.SearchMagnifier
      }]
    }, {
      id: _v70,
      question: (0, _v14.translate)({
        singular: "What are you using Vimeo for?",
        dictionary: {
          es: {
            singular: "¿Para qué usas Vimeo?"
          },
          "de-DE": {
            singular: "Wofür nutzen Sie Vimeo?"
          },
          "fr-FR": {
            singular: "À quoi utilisez-vous Vimeo ?"
          },
          "ja-JP": {
            singular: "Vimeoを何に使用していますか？"
          },
          "ko-KR": {
            singular: "Vimeo를 어떤 목적으로 사용하시나요?"
          },
          "pt-BR": {
            singular: "Para que você usa o Vimeo?"
          },
          "zh-CN": {
            singular: "您将 Vimeo 用于什么目的？"
          }
        }
      }),
      description: (0, _v14.translate)({
        singular: "Choose as many as you like",
        dictionary: {
          es: {
            singular: "Selecciona tantas como desees"
          },
          "de-DE": {
            singular: "Wählen Sie so viele, wie Sie möchten"
          },
          "fr-FR": {
            singular: "Choisissez autant que vous le souhaitez"
          },
          "ja-JP": {
            singular: "いくつでも選択できます"
          },
          "ko-KR": {
            singular: "원하시는 만큼 선택하세요"
          },
          "pt-BR": {
            singular: "Escolha quantos quiser"
          },
          "zh-CN": {
            singular: "可选择任意多个"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !0,
      answers: [{
        id: "share_links",
        label: (0, _v14.translate)({
          singular: "Share video links and files",
          dictionary: {
            es: {
              singular: "Compartir enlaces y archivos de video"
            },
            "de-DE": {
              singular: "Video-Links und Dateien teilen"
            },
            "fr-FR": {
              singular: "Partager des liens et fichiers vidéo"
            },
            "ja-JP": {
              singular: "動画のリンクやファイルを共有する"
            },
            "ko-KR": {
              singular: "동영상 링크 및 파일 공유"
            },
            "pt-BR": {
              singular: "Compartilhar links e arquivos de vídeo"
            },
            "zh-CN": {
              singular: "分享视频链接和文件"
            }
          }
        }),
        icon: _v66.Share
      }, {
        id: "review_feedback",
        label: (0, _v14.translate)({
          singular: "Review videos for feedback with others",
          dictionary: {
            es: {
              singular: "Revisar videos para recibir comentarios con otros"
            },
            "de-DE": {
              singular: "Videos gemeinsam mit anderen zur Rückmeldung prüfen"
            },
            "fr-FR": {
              singular: "Revoir des vidéos pour obtenir des retours avec d'autres"
            },
            "ja-JP": {
              singular: "他者とフィードバックのために動画をレビューする"
            },
            "ko-KR": {
              singular: "다른 사람들과 피드백을 위해 동영상을 검토"
            },
            "pt-BR": {
              singular: "Revisar vídeos para obter feedback com outras pessoas"
            },
            "zh-CN": {
              singular: "与他人一起审看视频以获取反馈"
            }
          }
        }),
        icon: _v60.Chats
      }, {
        id: "embed_videos",
        label: (0, _v14.translate)({
          singular: "Embed videos",
          dictionary: {
            es: {
              singular: "Incrustar videos"
            },
            "de-DE": {
              singular: "Videos einbetten"
            },
            "fr-FR": {
              singular: "Intégrer des vidéos"
            },
            "ja-JP": {
              singular: "動画を埋め込む"
            },
            "ko-KR": {
              singular: "동영상 삽입"
            },
            "pt-BR": {
              singular: "Incorporar vídeos"
            },
            "zh-CN": {
              singular: "嵌入视频"
            }
          }
        }),
        icon: _v64.PresentationPlay
      }, {
        id: "store_organize",
        label: (0, _v14.translate)({
          singular: "Store and organize videos",
          dictionary: {
            es: {
              singular: "Almacenar y organizar videos"
            },
            "de-DE": {
              singular: "Videos speichern und organisieren"
            },
            "fr-FR": {
              singular: "Stocker et organiser des vidéos"
            },
            "ja-JP": {
              singular: "動画を保存・整理する"
            },
            "ko-KR": {
              singular: "동영상 저장 및 정리"
            },
            "pt-BR": {
              singular: "Armazenar e organizar vídeos"
            },
            "zh-CN": {
              singular: "存储并整理视频"
            }
          }
        }),
        icon: _v67
      }, {
        id: "showcase_portfolio",
        label: (0, _v14.translate)({
          singular: "Showcase my work/portfolio",
          dictionary: {
            es: {
              singular: "Mostrar mi trabajo/portafolio"
            },
            "de-DE": {
              singular: "Meine Arbeit/Portfolio präsentieren"
            },
            "fr-FR": {
              singular: "Mettre en valeur mon travail/portfolio"
            },
            "ja-JP": {
              singular: "作品/ポートフォリオを公開する"
            },
            "ko-KR": {
              singular: "내 작품/포트폴리오 전시"
            },
            "pt-BR": {
              singular: "Exibir meu trabalho/portfólio"
            },
            "zh-CN": {
              singular: "展示我的作品/作品集"
            }
          }
        }),
        icon: _v67
      }, {
        id: "share_films",
        label: (0, _v14.translate)({
          singular: "Share films on vimeo.com",
          dictionary: {
            es: {
              singular: "Compartir películas en vimeo.com"
            },
            "de-DE": {
              singular: "Filme auf vimeo.com teilen"
            },
            "fr-FR": {
              singular: "Partager des films sur vimeo.com"
            },
            "ja-JP": {
              singular: "映画を vimeo.com で共有する"
            },
            "ko-KR": {
              singular: "vimeo.com에 영화 공유"
            },
            "pt-BR": {
              singular: "Compartilhar filmes no vimeo.com"
            },
            "zh-CN": {
              singular: "在 vimeo.com 分享影片"
            }
          }
        }),
        icon: _v66.Share
      }, {
        id: "inspiration_discovery",
        label: (0, _v14.translate)({
          singular: "Inspiration or discovery",
          dictionary: {
            es: {
              singular: "Inspiración o descubrimiento"
            },
            "de-DE": {
              singular: "Inspiration oder Entdeckung"
            },
            "fr-FR": {
              singular: "Inspiration ou découverte"
            },
            "ja-JP": {
              singular: "インスピレーションや発見"
            },
            "ko-KR": {
              singular: "영감 또는 발견"
            },
            "pt-BR": {
              singular: "Inspiração ou descoberta"
            },
            "zh-CN": {
              singular: "寻找灵感或发现"
            }
          }
        }),
        icon: _v65.SearchMagnifier
      }, {
        id: "other",
        label: (0, _v14.translate)({
          singular: "Other",
          dictionary: {
            es: {
              singular: "Otro"
            },
            "de-DE": {
              singular: "Sonstiges"
            },
            "fr-FR": {
              singular: "Autre"
            },
            "ja-JP": {
              singular: "その他"
            },
            "ko-KR": {
              singular: "기타"
            },
            "pt-BR": {
              singular: "Outro"
            },
            "zh-CN": {
              singular: "其他"
            }
          }
        }),
        icon: _v61.EllipsisV
      }]
    }, {
      id: _v71,
      question: (0, _v14.translate)({
        singular: "Organization size?",
        dictionary: {
          es: {
            singular: "¿Tamaño de la organización?"
          },
          "de-DE": {
            singular: "Größe der Organisation?"
          },
          "fr-FR": {
            singular: "Taille de l'organisation ?"
          },
          "ja-JP": {
            singular: "組織の規模は？"
          },
          "ko-KR": {
            singular: "조직 규모는?"
          },
          "pt-BR": {
            singular: "Tamanho da organização?"
          },
          "zh-CN": {
            singular: "组织规模？"
          }
        }
      }),
      placeholder: "",
      isMultiChoice: !1,
      answers: [{
        id: "only_me",
        label: (0, _v14.translate)({
          singular: "Just me",
          dictionary: {
            es: {
              singular: "Solo yo"
            },
            "de-DE": {
              singular: "Nur ich"
            },
            "fr-FR": {
              singular: "Seulement moi"
            },
            "ja-JP": {
              singular: "自分のみ"
            },
            "ko-KR": {
              singular: "나만"
            },
            "pt-BR": {
              singular: "Somente eu"
            },
            "zh-CN": {
              singular: "仅限我"
            }
          }
        }),
        icon: _v63.PersonUser
      }, {
        id: "2_10",
        label: (0, _v14.translate)("2-10"),
        icon: _v63.PersonUser
      }, {
        id: "11_50",
        label: (0, _v14.translate)("11-50"),
        icon: _v63.PersonUser
      }, {
        id: "51_200",
        label: (0, _v14.translate)("51-200"),
        icon: _v63.PersonUser
      }, {
        id: "201_1000",
        label: (0, _v14.translate)("201-1,000"),
        icon: _v63.PersonUser
      }, {
        id: "1000_plus",
        label: (0, _v14.translate)("1,000+"),
        icon: _v63.PersonUser
      }]
    }],
    _v75 = _v0 => {
      let _v1 = [..._v0];
      for (let _v0 = _v1.length - 1; _v0 > 0; _v0 -= 1) {
        let _v0 = Math.floor(Math.random() * (_v0 + 1));
        [_v1[_v0], _v1[_v0]] = [_v1[_v0], _v1[_v0]];
      }
      return _v1;
    };
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  function _v78({
    progressPct: _v0,
    onBack: _v1,
    onNext: _v2,
    onSkip: _v3,
    isDisabled: _v4 = !1,
    isNextDisabled: _v5 = !1,
    activeNavigation: _v6
  }) {
    return (0, _v1.jsxs)(_v8.Flex, {
      flexDirection: "column",
      gap: "6",
      grow: "1",
      alignItems: "center",
      justifyContent: "flex-end",
      width: {
        base: "100%",
        md: "148px"
      },
      mb: "4rem",
      children: [(0, _v1.jsx)(_v7.Box, {
        bg: "fill-component",
        borderRadius: "4px",
        flexShrink: "0",
        height: "0.25rem",
        hidden: 0 === _v0,
        overflow: "hidden",
        width: {
          base: "240px",
          md: "120px"
        },
        children: (0, _v1.jsx)(_v7.Box, {
          as: _v77.motion.div,
          bg: "fill-brand",
          height: "100%",
          animate: {
            width: `${_v0}%`
          }
        })
      }), (0, _v1.jsxs)(_v8.Flex, {
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "40",
        width: "100%",
        children: [(0, _v1.jsxs)(_v8.Flex, {
          justifyContent: "center",
          gap: "2",
          width: "100%",
          children: [(0, _v1.jsx)(_v79, {
            variant: "secondary",
            onClick: _v1,
            hidden: 0 === _v0,
            isDisabled: _v4,
            loading: "back" === _v6,
            width: "100%",
            children: (0, _v14.translate)({
              singular: "Back",
              dictionary: {
                es: {
                  singular: "Atrás"
                },
                "de-DE": {
                  singular: "Zurück"
                },
                "fr-FR": {
                  singular: "Retour"
                },
                "ja-JP": {
                  singular: "戻る"
                },
                "ko-KR": {
                  singular: "뒤로"
                },
                "pt-BR": {
                  singular: "Voltar"
                },
                "zh-CN": {
                  singular: "返回"
                }
              }
            })
          }), (0, _v1.jsx)(_v79, {
            variant: "primary",
            onClick: _v2,
            isDisabled: _v4 || _v5,
            loading: "next" === _v6,
            width: "100%",
            children: 100 === _v0 ? (0, _v14.translate)({
              singular: "Finish",
              dictionary: {
                es: {
                  singular: "Terminar"
                },
                "de-DE": {
                  singular: "Beenden"
                },
                "fr-FR": {
                  singular: "Terminer"
                },
                "ja-JP": {
                  singular: "終了"
                },
                "ko-KR": {
                  singular: "다음"
                },
                "pt-BR": {
                  singular: "Terminar"
                },
                "zh-CN": {
                  singular: "完成"
                }
              }
            }) : (0, _v14.translate)({
              singular: "Next",
              dictionary: {
                es: {
                  singular: "Siguiente"
                },
                "de-DE": {
                  singular: "Weiter"
                },
                "fr-FR": {
                  singular: "Suivant"
                },
                "ja-JP": {
                  singular: "次へ"
                },
                "ko-KR": {
                  singular: "다음"
                },
                "pt-BR": {
                  singular: "Próxima"
                },
                "zh-CN": {
                  singular: "下一步"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v79, {
          variant: "tertiary",
          onClick: _v3,
          isDisabled: _v4,
          loading: "skip" === _v6,
          top: "2rem",
          right: "2rem",
          position: "absolute",
          width: "auto",
          padding: "md",
          children: (0, _v14.translate)({
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
        })]
      })]
    });
  }
  let _v79 = ({
    children: _v0,
    loading: _v1,
    ..._v2
  }) => (0, _v1.jsxs)(_v24.Button, {
    size: "sm",
    p: "1.25rem",
    borderRadius: "md",
    ..._v2,
    children: [_v1 && (0, _v1.jsx)(_v55.Spinner, {
      size: "sm",
      position: "absolute"
    }), (0, _v1.jsx)(_v7.Box, {
      as: _v77.motion.div,
      animate: {
        opacity: +!_v1
      },
      children: _v0
    })]
  });
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16
      }
    },
    _v83 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16,
        delay: .16
      }
    };
  function _v84({
    randomizeAnswers: _v0 = !0
  }) {
    let _v1,
      _v2,
      _v3,
      _v4 = (0, _v28.useViewer)(),
      _v5 = _v4?.user?.capabilities?.hasFreeTrialEligibility ?? !1,
      _v6 = (0, _v5.useRouter)(),
      {
        trackOnboardingSurveyViewed: _v7,
        trackOnboardingSurveyAnswered: _v8,
        trackOnboardingSurveySkipped: _v9
      } = (_v1 = (0, _v53.usePico)(), _v2 = (0, _v6.useRef)(!1), _v3 = (0, _v6.useCallback)(() => {
        null === _v1 || _v2.current || (_v1.track("onboarding_survey_viewed", {}), _v2.current = !0);
      }, [_v1]), {
        trackOnboardingSurveyViewed: _v3,
        trackOnboardingSurveyAnswered: (0, _v6.useCallback)(_v0 => {
          null !== _v1 && _v1.track("onboarding_survey_answered", {
            ..._v54(_v0.question),
            answers: _v0.answers.map(_v0 => ({
              answer_id: _v0.id,
              answer_text: _v0.label,
              answer_description: _v0.description ?? null,
              answer_input: _v0.text ?? null
            }))
          });
        }, [_v1]),
        trackOnboardingSurveySkipped: (0, _v6.useCallback)((_v0, _v1 = !1) => {
          null !== _v1 && _v1.track("onboarding_survey_skipped", {
            ..._v54(_v0),
            skipped_to_paywall: _v1
          });
        }, [_v1])
      }),
      {
        settings: _v10
      } = (0, _v15.useOrionSettings)(),
      _v11 = _v10.onboarding_survey_skip_to_paywall,
      _v12 = _v10.onboarding_paywall_kind,
      _v13 = _v10.onboarding_paywall_tier,
      _v14 = _v10.onboarding_paywall_default_periodicity,
      _v15 = _v10.onboarding_paywall_monthly_free_trial,
      _v16 = _v10.onboarding_paywall_dismiss_button_position,
      _v17 = _v10.reverse_free_trial_arm,
      _v18 = "control" !== _v17,
      _v19 = _v18 && _v5,
      _v20 = _v18 && !_v5,
      {
        colorMode: _v21
      } = (0, _v13.useColorMode)(),
      _v22 = "dark" === _v21 ? "background" : "#fff",
      [_v23, _v24] = (0, _v6.useState)(!1),
      [_v25, _v26] = (0, _v6.useState)(),
      [_v27, _v28] = (0, _v6.useState)(!1),
      [_v29, _v30] = (0, _v6.useState)({}),
      [_v31, _v32] = (0, _v6.useState)({}),
      _v33 = _v29[_v68] ?? [],
      _v34 = _v33.find(_v0 => !_v73.some(_v0 => _v0.id === _v0)) ?? null,
      _v35 = _v73.find(_v0 => _v33.includes(_v0.id))?.id ?? null,
      _v36 = _v34 === _v72,
      _v37 = _v36 || "non_video_freelancer" === _v34 || "business_owner_employee" === _v34;
    (0, _v6.useEffect)(() => {
      !_v36 && _v35 && _v30(_v0 => ({
        ..._v0,
        [_v68]: (_v0[_v68] ?? []).filter(_v0 => !_v73.some(_v0 => _v0.id === _v0))
      }));
    }, [_v36, _v35]), (0, _v6.useEffect)(() => {
      let _v0 = _v29[_v71] ?? [];
      !_v37 && _v0.length > 0 && _v30(_v0 => ({
        ..._v0,
        [_v71]: []
      }));
    }, [_v29, _v37]);
    let _v38 = (0, _v6.useMemo)(() => _v37 ? _v74 : _v74.filter(_v0 => _v0.id !== _v71), [_v37]),
      _v39 = (0, _v6.useRef)({}),
      _v40 = (0, _v6.useMemo)(() => _v38.map(_v0 => {
        let _v1 = _v29[_v0.id] ?? [],
          _v2 = _v0.answers.map(_v0 => ({
            ..._v0,
            isSelected: _v1.includes(_v0.id)
          })),
          _v3 = (({
            questionId: _v0,
            answers: _v1,
            randomizeAnswers: _v2,
            randomizedOrders: _v3
          }) => {
            if (!_v2 || _v0 === _v71) return _v1;
            let _v4 = _v1.map(_v0 => _v0.id),
              _v5 = _v3.current?.[_v0],
              _v6 = _v5 && _v5.length === _v4.length && _v4.every(_v0 => _v5.includes(_v0)),
              _v7 = _v6 ? _v5 : ((_v0, _v1) => {
                if (_v0 === _v70) {
                  let _v0 = _v75(_v1.filter(_v0 => "other" !== _v0));
                  return _v1.includes("other") && _v0.push("other"), _v0;
                }
                return _v75(_v1);
              })(_v0, _v4);
            !_v6 && _v3.current && (_v3.current[_v0] = _v7);
            let _v8 = new Map(_v1.map(_v0 => [_v0.id, _v0]));
            return _v7.map(_v0 => _v8.get(_v0)).filter(_v0 => !!_v0);
          })({
            questionId: _v0.id,
            answers: _v2,
            randomizeAnswers: _v0,
            randomizedOrders: _v39
          });
        return {
          ..._v0,
          answers: _v3
        };
      }), [_v29, _v38, _v0]),
      {
        navigateToPage: _v41,
        numPages: _v42,
        pageNumber: _v43
      } = function ({
        questions: _v0,
        numAdditionalPages: _v1 = 0
      }) {
        let _v2 = (0, _v5.useRouter)(),
          _v3 = (0, _v81.useSearchParams)(),
          _v4 = _v0.length + _v1,
          _v5 = _v3.get("page"),
          _v6 = Number(_v5);
        if (isNaN(_v6) || _v6 < 1 || _v6 > _v4) {
          let _v0 = -1;
          for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) if (_v0[_v0].answers.some(_v0 => _v0.isSelected)) {
            _v0 = _v0;
            break;
          }
          _v6 = Math.min(_v4, _v0 + 1 + 1);
        }
        let _v7 = (0, _v6.useCallback)((_v0, _v1 = !1) => {
          if (_v0 < 1 || _v0 > _v4) return;
          let _v2 = new URLSearchParams(_v3.toString());
          _v2.set("page", String(_v0)), _v1 ? _v2.replace({
            pathname: _v2.pathname,
            search: _v2.toString()
          }) : _v2.push({
            pathname: _v2.pathname,
            search: _v2.toString()
          });
        }, [_v3, _v2, _v4]);
        return (0, _v6.useEffect)(() => {
          0 !== _v0.length && _v5 !== String(_v6) && _v7(_v6);
        }, [_v7, _v5, _v6, _v0.length]), {
          numPages: _v4,
          navigateToPage: _v7,
          pageNumber: _v6
        };
      }({
        questions: _v40,
        numAdditionalPages: 1
      }),
      _v44 = _v43 <= _v40.length ? _v40[_v43 - 1] : null,
      _v45 = _v43 === _v42,
      _v46 = {
        paywallTrigger: _v19 ? `registration_survey_reverse_trial_${_v17}` : `registration_survey_trial_upsell_page_${_v12}`,
        paywallLocation: "registration_survey",
        paywallType: "page",
        paywallFeature: "registration_survey"
      },
      {
        trackPaywallDismissed: _v47
      } = (0, _v40.usePaywallTracking)({
        ..._v46,
        isVisible: _v45 && !_v18
      }),
      _v48 = _v45 && _v20,
      _v49 = (0, _v6.useRef)(!1);
    if ((0, _v6.useEffect)(() => {
      _v48 && !_v49.current && (_v49.current = !0, _v24(!0), _v6.push("/home"));
    }, [_v48, _v6]), (0, _v6.useEffect)(() => {
      _v26(void 0);
    }, [_v43]), (0, _v6.useEffect)(() => {
      _v7();
    }, [_v7]), _v23 || _v48) return (0, _v1.jsx)(_v76.default, {});
    let _v50 = _v29[_v70] ?? [],
      _v51 = _v50.includes("other"),
      _v52 = _v31[_v70]?.other ?? "",
      _v53 = _v44?.id === _v70 && _v51,
      _v54 = (() => {
        if (!_v44) return !1;
        switch (_v44.id) {
          case _v68:
            if (!_v34) return !1;
            if (_v34 === _v72) return !!_v35;
            return !0;
          case _v69:
            return (_v29[_v69] ?? []).length > 0;
          case _v70:
            if (0 === _v50.length) return !1;
            if (_v51) return _v52.trim().length > 0;
            return !0;
          case _v71:
            return (_v29[_v71] ?? []).length > 0;
          default:
            return !1;
        }
      })(),
      _v55 = () => {
        _v43 === _v42 ? (_v47(), _v24(!0), _v6.push("/home")) : _v41(_v43 + 1);
      },
      _v56 = _v0 => {
        _v44 && _v26(_v0);
      },
      _v57 = _v0 => {
        _v30(_v0 => {
          let _v1 = (_v0[_v68] ?? []).includes(_v0) ? [] : [_v0];
          return {
            ..._v0,
            [_v68]: [_v72, ..._v1]
          };
        });
      },
      _v58 = _v73.map(_v0 => ({
        ..._v0,
        isSelected: _v33.includes(_v0.id)
      }));
    return (0, _v1.jsxs)(_v9.Grid, {
      gridTemplateColumns: {
        base: "1fr",
        lg: "1fr 320px"
      },
      height: "100vh",
      position: "relative",
      children: [(0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        height: "100%",
        p: "2rem",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "3",
        backgroundColor: _v22,
        position: "relative",
        children: [(0, _v1.jsx)(_v8.Flex, {
          grow: "1",
          children: (0, _v1.jsx)(_v80.default, {
            height: "32",
            width: "74"
          })
        }), (0, _v1.jsxs)(_v8.Flex, {
          grow: _v45 && (_v19 || "legacy" !== _v12) ? "1" : void 0,
          gap: "3",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          children: [(0, _v1.jsx)(_v11.SlideFade, {
            in: !_v25,
            transition: _v82,
            children: (0, _v1.jsxs)(_v1.Fragment, {
              children: [_v44 && (0, _v1.jsxs)(_v8.Flex, {
                flexDirection: "column",
                alignItems: "center",
                gap: 3,
                width: "100%",
                marginBottom: 5,
                children: [(0, _v1.jsx)(_v12.Text, {
                  variant: {
                    base: "heading-md",
                    md: "heading-lg"
                  },
                  children: _v44.question
                }), _v44.description && (0, _v1.jsx)(_v12.Text, {
                  variant: {
                    base: "body-sm",
                    md: "body-md"
                  },
                  color: "text-secondary",
                  children: _v44.description
                })]
              }), _v45 && !_v18 && "legacy" === _v12 && (0, _v1.jsx)(_v51, {})]
            })
          }, `animate-title-${_v43}`), (0, _v1.jsx)(_v8.Flex, {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            sx: _v45 && (_v19 || "legacy" !== _v12) ? void 0 : {
              div: {
                width: {
                  base: "100%",
                  md: "auto"
                }
              }
            },
            children: (0, _v1.jsxs)(_v11.SlideFade, {
              in: !_v25,
              transition: _v83,
              style: _v45 && (_v19 || "legacy" !== _v12) ? {
                width: "100%"
              } : void 0,
              children: [_v44 && (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v58, {
                  answers: _v44.answers,
                  onToggleAnswer: _v0 => {
                    _v44.id === _v68 ? _v30(_v0 => {
                      let _v1 = _v0[_v68] ?? [],
                        _v2 = _v73.find(_v0 => _v1.includes(_v0.id))?.id ?? null;
                      if (_v1.includes(_v0)) return {
                        ..._v0,
                        [_v68]: [],
                        [_v71]: []
                      };
                      let _v3 = _v0 === _v72 ? [_v72, ...(_v2 ? [_v2] : [])] : [_v0];
                      return {
                        ..._v0,
                        [_v68]: _v3
                      };
                    }) : _v44.id === _v69 ? _v30(_v0 => {
                      let _v1 = _v0[_v69] ?? [];
                      if ("mainly_watch" === _v0) return {
                        ..._v0,
                        [_v69]: _v1.includes(_v0) ? [] : [_v0]
                      };
                      let _v2 = _v1.includes(_v0) ? _v1.filter(_v0 => _v0 !== _v0) : [..._v1, _v0];
                      return {
                        ..._v0,
                        [_v69]: _v2.filter(_v0 => "mainly_watch" !== _v0)
                      };
                    }) : _v44.id === _v70 ? _v30(_v0 => {
                      let _v1 = _v0[_v70] ?? [],
                        _v2 = _v1.includes(_v0) ? _v1.filter(_v0 => _v0 !== _v0) : [..._v1, _v0];
                      return _v2.includes("other") || _v32(_v0 => ({
                        ..._v0,
                        [_v70]: {
                          ...(_v0[_v70] ?? {}),
                          other: ""
                        }
                      })), {
                        ..._v0,
                        [_v70]: _v2
                      };
                    }) : _v44.id === _v71 && _v30(_v0 => {
                      let _v1 = _v0[_v71] ?? [];
                      return {
                        ..._v0,
                        [_v71]: _v1.includes(_v0) ? [] : [_v0]
                      };
                    });
                  },
                  gridProps: {
                    [_v68]: {
                      gridAutoFlow: "row"
                    },
                    [_v69]: {
                      gridAutoFlow: "row"
                    },
                    [_v70]: {
                      gridAutoFlow: "row"
                    },
                    [_v71]: {
                      gridAutoFlow: "row"
                    }
                  }[_v44.id],
                  renderSubAnswers: _v0 => _v44.id === _v68 && _v0 === _v72 && _v36 ? (0, _v1.jsx)(_v11.SlideFade, {
                    in: _v36,
                    transition: _v82,
                    offsetY: "-20px",
                    children: (0, _v1.jsx)(_v7.Box, {
                      width: "100%",
                      pl: {
                        base: 2,
                        md: 4
                      },
                      children: (0, _v1.jsx)(_v58, {
                        answers: _v58,
                        onToggleAnswer: _v57,
                        gridProps: {
                          gridAutoFlow: "row"
                        }
                      })
                    })
                  }) : null
                }), (0, _v1.jsx)(_v11.SlideFade, {
                  in: _v53,
                  transition: _v82,
                  offsetY: "-20px",
                  children: (0, _v1.jsxs)(_v8.Flex, {
                    visibility: _v53 ? "visible" : "hidden",
                    mt: 5,
                    width: "100%",
                    position: "relative",
                    children: [(0, _v1.jsx)(_v7.Box, {
                      position: "absolute",
                      left: "12px",
                      top: "-8px",
                      p: "0 4px",
                      bg: _v22,
                      width: "fit-content",
                      children: (0, _v1.jsx)(_v12.Text, {
                        variant: "heading-2xs",
                        children: (0, _v14.translate)({
                          singular: "Other",
                          dictionary: {
                            es: {
                              singular: "Otro"
                            },
                            "de-DE": {
                              singular: "Sonstiges"
                            },
                            "fr-FR": {
                              singular: "Autre"
                            },
                            "ja-JP": {
                              singular: "その他"
                            },
                            "ko-KR": {
                              singular: "기타"
                            },
                            "pt-BR": {
                              singular: "Outro"
                            },
                            "zh-CN": {
                              singular: "其他"
                            }
                          }
                        })
                      })
                    }), (0, _v1.jsx)(_v10.Input, {
                      autoFocus: !0,
                      bg: "transparent",
                      value: _v52,
                      onChange: _v0 => _v32(_v0 => ({
                        ..._v0,
                        [_v70]: {
                          ...(_v0[_v70] ?? {}),
                          other: _v0.target.value
                        }
                      }))
                    }, `autoFocus-${_v53}`)]
                  })
                })]
              }), _v45 && _v19 && (0, _v1.jsx)(_v46, {
                trialDays: "14d" === _v17 ? 14 : 7,
                paywallTracking: _v46,
                onComplete: _v55,
                onActivated: () => _v28(!0)
              }), _v45 && !_v18 && "legacy" === _v12 && (0, _v1.jsx)(_v50, {}), _v45 && !_v18 && "plansComparison" === _v12 && (0, _v1.jsx)(_v33, {
                tier: _v13,
                paywallTracking: _v46,
                defaultPeriodicity: _v14,
                monthlyFreeTrial: _v15
              }), _v45 && !_v18 && "featureList" === _v12 && (0, _v1.jsx)(_v23, {
                tier: _v13,
                paywallTracking: _v46,
                isUserEligibleForFreeTrial: _v5
              })]
            }, `animate-content-${_v43}`)
          })]
        }), !_v45 && (0, _v1.jsx)(_v78, {
          progressPct: (_v43 - 1) / (_v42 - 1) * 100,
          isNextDisabled: !_v54,
          onBack: () => {
            _v44 && (_v56("back"), _v41(_v43 - 1));
          },
          onNext: () => {
            var _v0;
            let _v1, _v2, _v3, _v4;
            _v44 && (_v56("next"), _v8({
              question: {
                id: _v44.id,
                question: _v44.question,
                description: _v44.description
              },
              answers: (_v2 = _v29[_v1 = (_v0 = _v44).id] ?? [], _v3 = _v1 === _v68 ? [..._v0.answers, ..._v73] : _v0.answers, _v4 = _v1 === _v68 && _v2.includes(_v72) ? _v2.filter(_v0 => _v0 !== _v72) : _v2, _v3.filter(_v0 => _v4.includes(_v0.id)).map(_v0 => ({
                id: _v0.id,
                label: _v0.label,
                text: _v1 === _v70 && "other" === _v0.id ? _v52 : void 0
              })))
            }), _v55());
          },
          onSkip: () => {
            _v44 && (_v56("skip"), _v9({
              id: _v44.id,
              question: _v44.question,
              description: _v44.description
            }, _v11), _v11 ? _v41(_v42) : (_v44 && (_v30(_v0 => ({
              ..._v0,
              [_v44.id]: [],
              ...(_v44.id === _v68 ? {
                [_v71]: []
              } : {})
            })), _v44.id === _v70 && _v32(_v0 => ({
              ..._v0,
              [_v70]: {
                ...(_v0[_v70] ?? {}),
                other: ""
              }
            }))), _v55()));
          },
          isDisabled: !!_v25,
          activeNavigation: _v25
        }), _v45 && _v19 && !_v27 && (0, _v1.jsx)(_v35, {
          dismissButtonPosition: "responsive",
          onDismiss: _v55
        }), _v45 && !_v18 && "legacy" === _v12 && (0, _v1.jsx)(_v52, {
          onSkip: _v55
        }), _v45 && !_v18 && "legacy" !== _v12 && (0, _v1.jsx)(_v35, {
          dismissButtonPosition: _v16,
          onDismiss: _v55
        })]
      }), (0, _v1.jsx)(_v8.Flex, {
        hideBelow: "lg",
        height: "100%",
        alignItems: "center",
        justifyContent: "end",
        overflow: "hidden",
        flexShrink: 0,
        backgroundColor: _v22,
        children: (0, _v1.jsx)(_v7.Box, {
          height: "100%",
          children: (0, _v1.jsx)("video", {
            height: "100%",
            autoPlay: !0,
            loop: !0,
            playsInline: !0,
            muted: !0,
            src: "https://player.vimeo.com/progressive_redirect/playback/1088210042/rendition/540p/file.mp4?loc=external&signature=e51aba1579c34ff97797cec14c655b48a9d0dbcdeca2761f94758ba49291b7e7",
            poster: "https://i.vimeocdn.com/custom_asset/8be3bdbdec84ca1597a9aaf08721f148"
          })
        })
      })]
    });
  }
  (0, _v2.withPageSetup)(async _v0 => {
    if (!(await (0, _v3.getMeCapabilities)({
      baseUrl: _v0.baseUrl,
      headers: _v0.headers,
      select: ["registrationSurvey"]
    })).registrationSurvey) return {
      redirect: {
        destination: "/home",
        statusCode: 302
      }
    };
    if (!_v0.query.page) try {
      if ((await (0, _v4.getMeSurvey)({
        baseUrl: _v0.baseUrl,
        headers: _v0.headers,
        select: ["isCompleted"],
        where: {
          surveyType: "reg_prof_v2"
        }
      })).isCompleted) return {
        redirect: {
          destination: "/home",
          statusCode: 302
        }
      };
    } catch (_v0) {
      console.warn("Failed to fetch survey data:", _v0);
    }
    return {
      props: {
        hasThemeSupport: !0
      }
    };
  }, {
    requireLogin: !0,
    noIndex: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsx)(_v84, {})], 0);
}