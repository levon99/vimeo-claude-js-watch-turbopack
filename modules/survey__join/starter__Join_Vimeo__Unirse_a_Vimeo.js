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
    _v21 = _v0.i(0);
  function _v22({
    tier: _v0 = "starter",
    paywallTracking: _v1,
    isUserEligibleForFreeTrial: _v2 = !1
  }) {
    let _v3 = (0, _v17.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v4 = _v3?.find(_v0 => _v0.tier === _v0) ?? _v3?.[0],
      _v5 = _v4?.metadata?.entitlements?.params?.videoStoragePeriodicQuota,
      _v6 = _v4?.name ?? (0, _v11.default)(`${_v0}`),
      _v7 = !!_v4?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v8 = (0, _v16.translate)({
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
      _v10 = (0, _v15.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419");
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
            children: [(0, _v1.jsx)(_v13.Text, {
              variant: {
                base: "heading-lg",
                md: _v9 ? "heading-xl" : "heading-2xl"
              },
              whiteSpace: "nowrap",
              children: _v8
            }), (0, _v1.jsx)(_v12.Box, {
              pt: {
                base: "0",
                md: _v9 ? "4px" : "8px"
              },
              children: (0, _v1.jsx)(_v12.Box, {
                bg: "#8a5ee8",
                px: "6px",
                height: "28px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "4px",
                children: (0, _v1.jsx)(_v13.Text, {
                  fontSize: "14px",
                  fontWeight: "medium",
                  color: "white",
                  children: (0, _v11.default)(`${_v0}`)
                })
              })
            })]
          }), (0, _v1.jsx)(_v13.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: (0, _v16.translate)({
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
        }), (0, _v1.jsx)(_v12.Box, {
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
        }), (0, _v1.jsx)(_v14.VStack, {
          gap: "md",
          alignItems: "start",
          width: "100%",
          children: (0, _v21.getFeatures)(_v5).map((_v0, _v1) => (0, _v1.jsx)(_v18.FeatureRow, {
            ..._v0
          }, `row${_v1}`))
        })]
      }), (0, _v1.jsx)(_v19.PaywallCTAsWrapper, {
        children: (0, _v1.jsx)(_v20.PurchaseButton, {
          subscriptionTier: _v0,
          isTrial: _v7 && _v2,
          planName: _v6,
          paywallTracking: _v1
        })
      })]
    });
  }
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  async function _v33({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v32.measureLatency)("postMeMembershipReverseTrial", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/membership/reverse_trial?fields=${_v1.map(_v29.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v29.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v29.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v29.deepCamelCase)(_v1);
    });
  }
  var _v34 = _v0.i(0);
  let _v35 = {
      isLoading: !1,
      errorKind: null
    },
    _v36 = {
      tier: "starter",
      periodicity: "trial",
      isFreeTrial: !0
    };
  function _v37({
    trialDays: _v0,
    paywallTracking: _v1,
    onComplete: _v2,
    onActivated: _v3
  }) {
    let [_v4, _v5] = (0, _v7.useState)(!1),
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
          } = (0, _v34.useGctlConfig)(),
          [_v4, _v5] = (0, _v7.useState)(_v35);
        return {
          activate: (0, _v7.useCallback)(async _v0 => {
            _v5({
              isLoading: !0,
              errorKind: null
            });
            try {
              await _v33({
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
                errorKind: _v0 instanceof _v29.NetworkError ? _v0.status >= 500 ? "5xx" : "4xx" : "network"
              }), _v0;
            }
          }, [_v0, _v1, _v2, _v3]),
          isLoading: _v4.isLoading,
          errorKind: _v4.errorKind
        };
      }(),
      _v9 = (0, _v17.useGetSubscriptionPlansData)(["starter"], void 0, !1),
      _v10 = _v9?.find(_v0 => "starter" === _v0.tier) ?? _v9?.[0],
      _v11 = _v10?.metadata?.entitlements?.params?.videoStoragePeriodicQuota;
    (0, _v31.usePaywallTracking)({
      ..._v1,
      isVisible: !_v4
    });
    let {
        trackCheckoutPurchaseButtonClicked: _v12,
        trackCheckoutFailed: _v13,
        trackUserConverted: _v14
      } = (0, _v30.useCheckoutTracking)(),
      _v15 = (0, _v7.useRef)(!1);
    (0, _v7.useEffect)(() => {
      "4xx" !== _v8 || _v15.current || (_v15.current = !0, _v2());
    }, [_v8, _v2]);
    let _v16 = async () => {
      _v12(_v36);
      try {
        await _v6(_v0), _v14(_v36), _v5(!0), _v3?.();
      } catch (_v0) {
        _v13({
          ..._v36,
          error_message: _v0 instanceof Error ? _v0.message : void 0,
          error_code: _v0 instanceof _v29.NetworkError ? String(_v0.status) : void 0
        });
      }
    };
    return _v4 ? (0, _v1.jsx)(_v40, {
      trialDays: _v0,
      onGotIt: () => {
        window.location.assign("/home");
      }
    }) : (0, _v1.jsx)(_v38, {
      trialDays: _v0,
      storageQuota: _v11,
      isLoading: _v7,
      showInlineError: "5xx" === _v8 || "network" === _v8,
      onActivate: _v16
    });
  }
  function _v38({
    trialDays: _v0,
    storageQuota: _v1,
    isLoading: _v2,
    showInlineError: _v3,
    onActivate: _v4
  }) {
    let _v5 = (0, _v16.translate)({
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
      _v6 = (0, _v16.translate)({
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
          children: [(0, _v1.jsx)(_v12.Box, {
            display: {
              base: "none",
              md: "block"
            },
            children: (0, _v1.jsx)(_v13.Text, {
              variant: "heading-lg",
              textAlign: "center",
              whiteSpace: "nowrap",
              children: (0, _v16.translate)({
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
            children: [(0, _v1.jsx)(_v13.Text, {
              variant: "heading-xl",
              whiteSpace: "nowrap",
              children: (0, _v16.translate)({
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
            }), (0, _v1.jsx)(_v12.Box, {
              bg: "#8a5ee8",
              px: "6px",
              height: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "4px",
              children: (0, _v1.jsx)(_v13.Text, {
                fontSize: "14px",
                fontWeight: "medium",
                color: "white",
                children: (0, _v16.translate)("Starter")
              })
            })]
          })]
        }), (0, _v1.jsx)(_v12.Box, {
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
          children: (0, _v1.jsxs)(_v14.VStack, {
            gap: "32px",
            alignItems: "center",
            width: "100%",
            children: [(0, _v1.jsxs)(_v14.VStack, {
              gap: "md",
              alignItems: "center",
              width: "100%",
              children: [(0, _v1.jsx)(_v13.Text, {
                variant: {
                  base: "heading-sm",
                  md: "heading-md"
                },
                color: "text-primary",
                textAlign: "center",
                children: (0, _v16.translate)({
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
              }), (0, _v1.jsx)(_v12.Box, {
                width: "79px",
                height: "2px",
                bg: "stroke"
              }), (0, _v1.jsx)(_v14.VStack, {
                gap: "md",
                alignItems: "start",
                width: "100%",
                children: (0, _v21.getFeatures)(_v1).map((_v0, _v1) => (0, _v1.jsx)(_v18.FeatureRow, {
                  ..._v0
                }, `row${_v1}`))
              })]
            }), (0, _v1.jsxs)(_v14.VStack, {
              gap: "md",
              alignItems: "stretch",
              width: "100%",
              children: [(0, _v1.jsxs)(_v25.Button, {
                variant: "brand",
                size: "lg",
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
                children: [(0, _v1.jsx)(_v12.Box, {
                  display: {
                    base: "none",
                    md: "inline"
                  },
                  children: _v5
                }), (0, _v1.jsx)(_v12.Box, {
                  display: {
                    base: "inline",
                    md: "none"
                  },
                  children: _v6
                })]
              }), _v3 && (0, _v1.jsx)(_v13.Text, {
                variant: "body-xs",
                color: "status-destructive-primary",
                textAlign: "center",
                role: "alert",
                children: (0, _v16.translate)({
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
              }), (0, _v1.jsx)(_v39, {})]
            })]
          })
        })]
      })
    });
  }
  function _v39() {
    return (0, _v1.jsxs)(_v26.HStack, {
      bg: "vimeoBlueAlpha.300",
      borderRadius: "10px",
      px: "12px",
      py: "11px",
      gap: "md",
      alignItems: "start",
      width: "100%",
      children: [(0, _v1.jsx)(_v12.Box, {
        color: "text-primary",
        pt: "2px",
        flexShrink: 0,
        children: (0, _v1.jsx)(_v28.CreditCard, {})
      }), (0, _v1.jsxs)(_v14.VStack, {
        alignItems: "start",
        gap: "0",
        children: [(0, _v1.jsx)(_v13.Text, {
          variant: "heading-sm",
          color: "text-primary",
          children: (0, _v16.translate)({
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
        }), (0, _v1.jsx)(_v13.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v16.translate)({
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
  function _v40({
    trialDays: _v0,
    onGotIt: _v1
  }) {
    let _v2 = (0, _v16.translate)({
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
          children: [(0, _v1.jsx)(_v12.Box, {
            color: "fill-brand",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            children: (0, _v1.jsx)(_v27.CircleCheckFilled, {})
          }), (0, _v1.jsx)(_v13.Text, {
            variant: "heading-lg",
            whiteSpace: "nowrap",
            children: (0, _v16.translate)({
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
        }), (0, _v1.jsx)(_v12.Box, {
          width: "100%",
          maxWidth: {
            base: "100%",
            md: "540px"
          },
          padding: {
            base: "32px 24px",
            md: "32px"
          },
          children: (0, _v1.jsxs)(_v14.VStack, {
            gap: "32px",
            alignItems: "center",
            width: "100%",
            children: [(0, _v1.jsxs)(_v14.VStack, {
              gap: "md",
              alignItems: "center",
              width: "100%",
              children: [(0, _v1.jsx)(_v13.Text, {
                variant: "heading-md",
                color: "text-secondary",
                textAlign: "center",
                children: _v2
              }), (0, _v1.jsx)(_v12.Box, {
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
            }), (0, _v1.jsx)(_v25.Button, {
              size: "lg",
              variant: "primary",
              width: "100%",
              onClick: _v1,
              children: (0, _v16.translate)({
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
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16
      }
    },
    _v44 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16,
        delay: .16
      }
    };
  function _v45({
    onDismiss: _v0
  }) {
    let _v1 = (0, _v41.useViewer)(),
      _v2 = _v1?.user?.capabilities?.hasFreeTrialEligibility ?? !1,
      {
        settings: _v3
      } = (0, _v10.useOrionSettings)(),
      _v4 = _v3.onboarding_paywall_kind,
      _v5 = _v3.onboarding_paywall_tier,
      _v6 = _v3.onboarding_paywall_default_periodicity,
      _v7 = _v3.onboarding_paywall_monthly_free_trial,
      _v8 = _v3.onboarding_paywall_dismiss_button_position,
      _v9 = _v3.reverse_free_trial_arm,
      _v10 = "control" !== _v9,
      _v11 = _v10 && _v2,
      _v12 = _v10 && !_v2,
      [_v13, _v14] = (0, _v7.useState)(!1),
      _v15 = {
        paywallTrigger: _v11 ? `registration_survey_reverse_trial_${_v9}` : `registration_survey_trial_upsell_page_${_v4}`,
        paywallLocation: "registration_survey",
        paywallType: "page",
        paywallFeature: "registration_survey"
      },
      {
        trackPaywallDismissed: _v16
      } = (0, _v31.usePaywallTracking)({
        ..._v15,
        isVisible: !_v10
      }),
      _v17 = (0, _v7.useRef)(!1);
    (0, _v7.useEffect)(() => {
      _v12 && !_v17.current && (_v17.current = !0, _v0());
    }, [_v12, _v0]);
    let _v18 = () => {
      _v16(), _v0();
    };
    return _v12 ? (0, _v1.jsx)(_v42.default, {}) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v8.Flex, {
        grow: "1",
        gap: "3",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: [(0, _v1.jsx)(_v9.SlideFade, {
          in: !0,
          transition: _v43,
          children: (0, _v1.jsx)(_v1.Fragment, {})
        }, "animate-title"), (0, _v1.jsx)(_v8.Flex, {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v1.jsxs)(_v9.SlideFade, {
            in: !0,
            transition: _v44,
            style: {
              width: "100%"
            },
            children: [_v11 && (0, _v1.jsx)(_v37, {
              trialDays: "14d" === _v9 ? 14 : 7,
              paywallTracking: _v15,
              onComplete: _v18,
              onActivated: () => _v14(!0)
            }), !_v10 && "plansComparison" === _v4 && (0, _v1.jsx)(_v23.PlansComparisonPaywall, {
              tier: _v5,
              paywallTracking: _v15,
              defaultPeriodicity: _v6,
              monthlyFreeTrial: _v7
            }), !_v10 && "featureList" === _v4 && (0, _v1.jsx)(_v22, {
              tier: _v5,
              paywallTracking: _v15,
              isUserEligibleForFreeTrial: _v2
            })]
          }, "animate-content")
        })]
      }), _v11 && !_v13 && (0, _v1.jsx)(_v24.PlansComparisonPaywallNavigation, {
        dismissButtonPosition: "responsive",
        onDismiss: _v18
      }), !_v10 && (0, _v1.jsx)(_v24.PlansComparisonPaywallNavigation, {
        dismissButtonPosition: _v8,
        onDismiss: _v18
      })]
    });
  }
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  function _v48({
    children: _v0
  }) {
    let {
        colorMode: _v1
      } = (0, _v15.useColorMode)(),
      _v2 = "dark" === _v1 ? "background" : "#fff";
    return (0, _v1.jsxs)(_v46.Grid, {
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
        backgroundColor: _v2,
        position: "relative",
        children: [(0, _v1.jsx)(_v8.Flex, {
          grow: "1",
          children: (0, _v1.jsx)(_v47.default, {
            height: "32",
            width: "74"
          })
        }), _v0]
      }), (0, _v1.jsx)(_v8.Flex, {
        hideBelow: "lg",
        height: "100%",
        alignItems: "center",
        justifyContent: "end",
        overflow: "hidden",
        flexShrink: 0,
        backgroundColor: _v2,
        children: (0, _v1.jsx)(_v12.Box, {
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
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  let _v51 = _v0 => ({
    question_id: _v0.id,
    question_text: _v0.question,
    question_description: _v0.description ?? null
  });
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  function _v54({
    text: _v0,
    Icon: _v1,
    isSelected: _v2,
    onToggle: _v3,
    ..._v4
  }) {
    return (0, _v1.jsx)(_v53.Card, {
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
        children: [_v1 && (0, _v1.jsx)(_v1, {}), (0, _v1.jsx)(_v13.Text, {
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
  function _v55({
    answers: _v0,
    onToggleAnswer: _v1,
    gridProps: _v2,
    renderSubAnswers: _v3
  }) {
    return _v0 && 0 !== _v0.length ? (0, _v1.jsx)(_v46.Grid, {
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
          _v3 = (0, _v1.jsx)(_v54, {
            text: _v0.label,
            Icon: _v1,
            isSelected: _v0.isSelected,
            onToggle: () => _v1(_v0.id)
          });
        return _v2 ? (0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          gap: "3",
          children: [_v3, _v2]
        }, _v0.id) : (0, _v1.jsx)(_v54, {
          text: _v0.label,
          Icon: _v1,
          isSelected: _v0.isSelected,
          onToggle: () => _v1(_v0.id)
        }, _v0.id);
      })
    }) : (0, _v1.jsx)(_v52.Spinner, {});
  }
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = _v0 => (0, _v1.jsx)(_v59.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        d: "M19 6h-3V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm-9-1h4v1h-4V5Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5h4v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1h4v5Zm0-7H4V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2Z",
        fill: "currentColor"
      })
    }),
    _v65 = "profile",
    _v66 = "upload_audience",
    _v67 = "usage",
    _v68 = "org_size",
    _v69 = "video_professional",
    _v70 = [{
      id: "video_professional_freelance",
      label: (0, _v16.translate)({
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
      icon: _v60.PersonUser
    }, {
      id: "video_professional_agency",
      label: (0, _v16.translate)({
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
      icon: _v64
    }, {
      id: "video_professional_in_house",
      label: (0, _v16.translate)({
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
      icon: _v56.Building
    }],
    _v71 = [{
      id: _v65,
      question: (0, _v16.translate)({
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
        id: _v69,
        label: (0, _v16.translate)({
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
        icon: _v61.PresentationPlay
      }, {
        id: "independent_filmmaker",
        label: (0, _v16.translate)({
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
        icon: _v61.PresentationPlay
      }, {
        id: "non_video_freelancer",
        label: (0, _v16.translate)({
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
        icon: _v60.PersonUser
      }, {
        id: "business_owner_employee",
        label: (0, _v16.translate)({
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
        icon: _v56.Building
      }, {
        id: "viewer_only",
        label: (0, _v16.translate)({
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
        icon: _v62.SearchMagnifier
      }]
    }, {
      id: _v66,
      question: (0, _v16.translate)({
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
      description: (0, _v16.translate)({
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
        label: (0, _v16.translate)({
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
        icon: _v57.Chats
      }, {
        id: "own_brand",
        label: (0, _v16.translate)({
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
        icon: _v0 => (0, _v1.jsx)(_v59.Icon, {
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
        label: (0, _v16.translate)({
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
        icon: _v56.Building
      }, {
        id: "creative_audience",
        label: (0, _v16.translate)({
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
        icon: _v63.Share
      }, {
        id: "just_me",
        label: (0, _v16.translate)({
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
        icon: _v60.PersonUser
      }, {
        id: "mainly_watch",
        label: (0, _v16.translate)({
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
        icon: _v62.SearchMagnifier
      }]
    }, {
      id: _v67,
      question: (0, _v16.translate)({
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
      description: (0, _v16.translate)({
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
        label: (0, _v16.translate)({
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
        icon: _v63.Share
      }, {
        id: "review_feedback",
        label: (0, _v16.translate)({
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
        icon: _v57.Chats
      }, {
        id: "embed_videos",
        label: (0, _v16.translate)({
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
        icon: _v61.PresentationPlay
      }, {
        id: "store_organize",
        label: (0, _v16.translate)({
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
        icon: _v64
      }, {
        id: "showcase_portfolio",
        label: (0, _v16.translate)({
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
        icon: _v64
      }, {
        id: "share_films",
        label: (0, _v16.translate)({
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
        icon: _v63.Share
      }, {
        id: "inspiration_discovery",
        label: (0, _v16.translate)({
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
        icon: _v62.SearchMagnifier
      }, {
        id: "other",
        label: (0, _v16.translate)({
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
        icon: _v58.EllipsisV
      }]
    }, {
      id: _v68,
      question: (0, _v16.translate)({
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
        label: (0, _v16.translate)({
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
        icon: _v60.PersonUser
      }, {
        id: "2_10",
        label: (0, _v16.translate)("2-10"),
        icon: _v60.PersonUser
      }, {
        id: "11_50",
        label: (0, _v16.translate)("11-50"),
        icon: _v60.PersonUser
      }, {
        id: "51_200",
        label: (0, _v16.translate)("51-200"),
        icon: _v60.PersonUser
      }, {
        id: "201_1000",
        label: (0, _v16.translate)("201-1,000"),
        icon: _v60.PersonUser
      }, {
        id: "1000_plus",
        label: (0, _v16.translate)("1,000+"),
        icon: _v60.PersonUser
      }]
    }],
    _v72 = _v0 => {
      let _v1 = [..._v0];
      for (let _v0 = _v1.length - 1; _v0 > 0; _v0 -= 1) {
        let _v0 = Math.floor(Math.random() * (_v0 + 1));
        [_v1[_v0], _v1[_v0]] = [_v1[_v0], _v1[_v0]];
      }
      return _v1;
    };
  var _v73 = _v0.i(0);
  function _v74({
    progressPct: _v0,
    onBack: _v1,
    onNext: _v2,
    onSkip: _v3,
    isDisabled: _v4 = !1,
    isNextDisabled: _v5 = !1,
    showFinishLabel: _v6 = !0,
    activeNavigation: _v7
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
      children: [(0, _v1.jsx)(_v12.Box, {
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
        children: (0, _v1.jsx)(_v12.Box, {
          as: _v73.motion.div,
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
          children: [(0, _v1.jsx)(_v75, {
            variant: "secondary",
            onClick: _v1,
            hidden: 0 === _v0,
            isDisabled: _v4,
            loading: "back" === _v7,
            width: "100%",
            children: (0, _v16.translate)({
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
          }), (0, _v1.jsx)(_v75, {
            variant: "primary",
            onClick: _v2,
            isDisabled: _v4 || _v5,
            loading: "next" === _v7,
            width: "100%",
            children: 100 === _v0 && _v6 ? (0, _v16.translate)({
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
            }) : (0, _v16.translate)({
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
        }), (0, _v1.jsx)(_v75, {
          variant: "tertiary",
          onClick: _v3,
          isDisabled: _v4,
          loading: "skip" === _v7,
          top: "2rem",
          right: "2rem",
          position: "absolute",
          width: "auto",
          padding: "md",
          children: (0, _v16.translate)({
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
  let _v75 = ({
      children: _v0,
      loading: _v1,
      ..._v2
    }) => (0, _v1.jsxs)(_v25.Button, {
      size: "sm",
      p: "1.25rem",
      borderRadius: "md",
      ..._v2,
      children: [_v1 && (0, _v1.jsx)(_v52.Spinner, {
        size: "sm",
        position: "absolute"
      }), (0, _v1.jsx)(_v12.Box, {
        as: _v73.motion.div,
        animate: {
          opacity: +!_v1
        },
        children: _v0
      })]
    }),
    _v76 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16
      }
    },
    _v77 = {
      exit: {
        duration: .16
      },
      enter: {
        duration: .16,
        delay: .16
      }
    };
  function _v78({
    randomizeAnswers: _v0 = !0,
    isFinalPhase: _v1,
    onComplete: _v2
  }) {
    let _v3,
      _v4,
      _v5,
      {
        trackOnboardingSurveyViewed: _v6,
        trackOnboardingSurveyAnswered: _v7,
        trackOnboardingSurveySkipped: _v8
      } = (_v3 = (0, _v50.usePico)(), _v4 = (0, _v7.useRef)(!1), _v5 = (0, _v7.useCallback)(() => {
        null === _v3 || _v4.current || (_v3.track("onboarding_survey_viewed", {}), _v4.current = !0);
      }, [_v3]), {
        trackOnboardingSurveyViewed: _v5,
        trackOnboardingSurveyAnswered: (0, _v7.useCallback)(_v0 => {
          null !== _v3 && _v3.track("onboarding_survey_answered", {
            ..._v51(_v0.question),
            answers: _v0.answers.map(_v0 => ({
              answer_id: _v0.id,
              answer_text: _v0.label,
              answer_description: _v0.description ?? null,
              answer_input: _v0.text ?? null
            }))
          });
        }, [_v3]),
        trackOnboardingSurveySkipped: (0, _v7.useCallback)((_v0, _v1 = !1) => {
          null !== _v3 && _v3.track("onboarding_survey_skipped", {
            ..._v51(_v0),
            skipped_to_paywall: _v1
          });
        }, [_v3])
      }),
      {
        colorMode: _v9
      } = (0, _v15.useColorMode)(),
      [_v10, _v11] = (0, _v7.useState)(),
      [_v12, _v13] = (0, _v7.useState)({}),
      [_v14, _v15] = (0, _v7.useState)({}),
      _v16 = _v12[_v65] ?? [],
      _v17 = _v16.find(_v0 => !_v70.some(_v0 => _v0.id === _v0)) ?? null,
      _v18 = _v70.find(_v0 => _v16.includes(_v0.id))?.id ?? null,
      _v19 = _v17 === _v69,
      _v20 = _v19 || "non_video_freelancer" === _v17 || "business_owner_employee" === _v17;
    (0, _v7.useEffect)(() => {
      !_v19 && _v18 && _v13(_v0 => ({
        ..._v0,
        [_v65]: (_v0[_v65] ?? []).filter(_v0 => !_v70.some(_v0 => _v0.id === _v0))
      }));
    }, [_v19, _v18]), (0, _v7.useEffect)(() => {
      let _v0 = _v12[_v68] ?? [];
      !_v20 && _v0.length > 0 && _v13(_v0 => ({
        ..._v0,
        [_v68]: []
      }));
    }, [_v12, _v20]);
    let _v21 = (0, _v7.useMemo)(() => _v20 ? _v71 : _v71.filter(_v0 => _v0.id !== _v68), [_v20]),
      _v22 = (0, _v7.useRef)({}),
      _v23 = (0, _v7.useMemo)(() => _v21.map(_v0 => {
        let _v1 = _v12[_v0.id] ?? [],
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
            if (!_v2 || _v0 === _v68) return _v1;
            let _v4 = _v1.map(_v0 => _v0.id),
              _v5 = _v3.current?.[_v0],
              _v6 = _v5 && _v5.length === _v4.length && _v4.every(_v0 => _v5.includes(_v0)),
              _v7 = _v6 ? _v5 : ((_v0, _v1) => {
                if (_v0 === _v67) {
                  let _v0 = _v72(_v1.filter(_v0 => "other" !== _v0));
                  return _v1.includes("other") && _v0.push("other"), _v0;
                }
                return _v72(_v1);
              })(_v0, _v4);
            !_v6 && _v3.current && (_v3.current[_v0] = _v7);
            let _v8 = new Map(_v1.map(_v0 => [_v0.id, _v0]));
            return _v7.map(_v0 => _v8.get(_v0)).filter(_v0 => !!_v0);
          })({
            questionId: _v0.id,
            answers: _v2,
            randomizeAnswers: _v0,
            randomizedOrders: _v22
          });
        return {
          ..._v0,
          answers: _v3
        };
      }), [_v12, _v21, _v0]),
      {
        navigateToPage: _v24,
        numPages: _v25,
        pageNumber: _v26,
        isBeyondLastPage: _v27
      } = function ({
        questions: _v0,
        numAdditionalPages: _v1 = 0
      }) {
        let _v2 = (0, _v6.useRouter)(),
          _v3 = (0, _v5.useSearchParams)(),
          _v4 = _v0.length + _v1,
          _v5 = _v3.get("page"),
          _v6 = Number(_v5),
          _v7 = null !== _v5 && !isNaN(_v6) && _v6 > _v4,
          _v8 = _v6;
        if (isNaN(_v8) || _v8 < 1 || _v8 > _v4) {
          let _v0 = -1;
          for (let _v0 = _v0.length - 1; _v0 >= 0; _v0--) if (_v0[_v0].answers.some(_v0 => _v0.isSelected)) {
            _v0 = _v0;
            break;
          }
          _v8 = Math.min(_v4, _v0 + 1 + 1);
        }
        let _v9 = (0, _v7.useCallback)((_v0, _v1 = !1) => {
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
        return (0, _v7.useEffect)(() => {
          0 === _v0.length || _v7 || _v5 === String(_v8) || _v9(_v8);
        }, [_v9, _v5, _v8, _v0.length, _v7]), {
          numPages: _v4,
          navigateToPage: _v9,
          pageNumber: _v8,
          isBeyondLastPage: _v7
        };
      }({
        questions: _v23
      }),
      _v28 = _v26 <= _v23.length ? _v23[_v26 - 1] : null;
    (0, _v7.useEffect)(() => {
      _v11(void 0);
    }, [_v26]);
    let _v29 = (0, _v7.useRef)(!1);
    (0, _v7.useEffect)(() => {
      _v27 && !_v29.current && (_v29.current = !0, _v2());
    }, [_v27, _v2]), (0, _v7.useEffect)(() => {
      _v27 || _v6();
    }, [_v6, _v27]);
    let _v30 = _v12[_v67] ?? [],
      _v31 = _v30.includes("other"),
      _v32 = _v14[_v67]?.other ?? "",
      _v33 = _v28?.id === _v67 && _v31,
      _v34 = (() => {
        if (!_v28) return !1;
        switch (_v28.id) {
          case _v65:
            if (!_v17) return !1;
            if (_v17 === _v69) return !!_v18;
            return !0;
          case _v66:
            return (_v12[_v66] ?? []).length > 0;
          case _v67:
            if (0 === _v30.length) return !1;
            if (_v31) return _v32.trim().length > 0;
            return !0;
          case _v68:
            return (_v12[_v68] ?? []).length > 0;
          default:
            return !1;
        }
      })(),
      _v35 = () => {
        _v26 >= _v25 ? _v2() : _v24(_v26 + 1);
      },
      _v36 = _v0 => {
        _v28 && _v11(_v0);
      },
      _v37 = _v0 => {
        _v13(_v0 => {
          let _v1 = (_v0[_v65] ?? []).includes(_v0) ? [] : [_v0];
          return {
            ..._v0,
            [_v65]: [_v69, ..._v1]
          };
        });
      },
      _v38 = _v70.map(_v0 => ({
        ..._v0,
        isSelected: _v16.includes(_v0.id)
      }));
    return _v27 ? null : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v8.Flex, {
        gap: "3",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: [(0, _v1.jsx)(_v9.SlideFade, {
          in: !_v10,
          transition: _v76,
          children: (0, _v1.jsx)(_v1.Fragment, {
            children: _v28 && (0, _v1.jsxs)(_v8.Flex, {
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              width: "100%",
              marginBottom: 5,
              children: [(0, _v1.jsx)(_v13.Text, {
                variant: {
                  base: "heading-md",
                  md: "heading-lg"
                },
                children: _v28.question
              }), _v28.description && (0, _v1.jsx)(_v13.Text, {
                variant: {
                  base: "body-sm",
                  md: "body-md"
                },
                color: "text-secondary",
                children: _v28.description
              })]
            })
          })
        }, `animate-title-${_v26}`), (0, _v1.jsx)(_v8.Flex, {
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          sx: {
            div: {
              width: {
                base: "100%",
                md: "auto"
              }
            }
          },
          children: (0, _v1.jsx)(_v9.SlideFade, {
            in: !_v10,
            transition: _v77,
            children: _v28 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v55, {
                answers: _v28.answers,
                onToggleAnswer: _v0 => {
                  _v28.id === _v65 ? _v13(_v0 => {
                    let _v1 = _v0[_v65] ?? [],
                      _v2 = _v70.find(_v0 => _v1.includes(_v0.id))?.id ?? null;
                    if (_v1.includes(_v0)) return {
                      ..._v0,
                      [_v65]: [],
                      [_v68]: []
                    };
                    let _v3 = _v0 === _v69 ? [_v69, ...(_v2 ? [_v2] : [])] : [_v0];
                    return {
                      ..._v0,
                      [_v65]: _v3
                    };
                  }) : _v28.id === _v66 ? _v13(_v0 => {
                    let _v1 = _v0[_v66] ?? [];
                    if ("mainly_watch" === _v0) return {
                      ..._v0,
                      [_v66]: _v1.includes(_v0) ? [] : [_v0]
                    };
                    let _v2 = _v1.includes(_v0) ? _v1.filter(_v0 => _v0 !== _v0) : [..._v1, _v0];
                    return {
                      ..._v0,
                      [_v66]: _v2.filter(_v0 => "mainly_watch" !== _v0)
                    };
                  }) : _v28.id === _v67 ? _v13(_v0 => {
                    let _v1 = _v0[_v67] ?? [],
                      _v2 = _v1.includes(_v0) ? _v1.filter(_v0 => _v0 !== _v0) : [..._v1, _v0];
                    return _v2.includes("other") || _v15(_v0 => ({
                      ..._v0,
                      [_v67]: {
                        ...(_v0[_v67] ?? {}),
                        other: ""
                      }
                    })), {
                      ..._v0,
                      [_v67]: _v2
                    };
                  }) : _v28.id === _v68 && _v13(_v0 => {
                    let _v1 = _v0[_v68] ?? [];
                    return {
                      ..._v0,
                      [_v68]: _v1.includes(_v0) ? [] : [_v0]
                    };
                  });
                },
                gridProps: {
                  [_v65]: {
                    gridAutoFlow: "row"
                  },
                  [_v66]: {
                    gridAutoFlow: "row"
                  },
                  [_v67]: {
                    gridAutoFlow: "row"
                  },
                  [_v68]: {
                    gridAutoFlow: "row"
                  }
                }[_v28.id],
                renderSubAnswers: _v0 => _v28.id === _v65 && _v0 === _v69 && _v19 ? (0, _v1.jsx)(_v9.SlideFade, {
                  in: _v19,
                  transition: _v76,
                  offsetY: "-20px",
                  children: (0, _v1.jsx)(_v12.Box, {
                    width: "100%",
                    pl: {
                      base: 2,
                      md: 4
                    },
                    children: (0, _v1.jsx)(_v55, {
                      answers: _v38,
                      onToggleAnswer: _v37,
                      gridProps: {
                        gridAutoFlow: "row"
                      }
                    })
                  })
                }) : null
              }), (0, _v1.jsx)(_v9.SlideFade, {
                in: _v33,
                transition: _v76,
                offsetY: "-20px",
                children: (0, _v1.jsxs)(_v8.Flex, {
                  visibility: _v33 ? "visible" : "hidden",
                  mt: 5,
                  width: "100%",
                  position: "relative",
                  children: [(0, _v1.jsx)(_v12.Box, {
                    position: "absolute",
                    left: "12px",
                    top: "-8px",
                    p: "0 4px",
                    bg: "dark" === _v9 ? "background" : "#fff",
                    width: "fit-content",
                    children: (0, _v1.jsx)(_v13.Text, {
                      variant: "heading-2xs",
                      children: (0, _v16.translate)({
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
                  }), (0, _v1.jsx)(_v49.Input, {
                    autoFocus: !0,
                    bg: "transparent",
                    value: _v32,
                    onChange: _v0 => _v15(_v0 => ({
                      ..._v0,
                      [_v67]: {
                        ...(_v0[_v67] ?? {}),
                        other: _v0.target.value
                      }
                    }))
                  }, `autoFocus-${_v33}`)]
                })
              })]
            })
          }, `animate-content-${_v26}`)
        })]
      }), (0, _v1.jsx)(_v74, {
        progressPct: (_v26 - 1) / (_v25 - 1) * 100,
        showFinishLabel: _v1,
        isNextDisabled: !_v34,
        onBack: () => {
          _v28 && (_v36("back"), _v24(_v26 - 1));
        },
        onNext: () => {
          var _v0;
          let _v1, _v2, _v3, _v4;
          _v28 && (_v36("next"), _v7({
            question: {
              id: _v28.id,
              question: _v28.question,
              description: _v28.description
            },
            answers: (_v2 = _v12[_v1 = (_v0 = _v28).id] ?? [], _v3 = _v1 === _v65 ? [..._v0.answers, ..._v70] : _v0.answers, _v4 = _v1 === _v65 && _v2.includes(_v69) ? _v2.filter(_v0 => _v0 !== _v69) : _v2, _v3.filter(_v0 => _v4.includes(_v0.id)).map(_v0 => ({
              id: _v0.id,
              label: _v0.label,
              text: _v1 === _v67 && "other" === _v0.id ? _v32 : void 0
            })))
          }), _v35());
        },
        onSkip: () => {
          _v28 && (_v36("skip"), _v8({
            id: _v28.id,
            question: _v28.question,
            description: _v28.description
          }), _v28 && (_v13(_v0 => ({
            ..._v0,
            [_v28.id]: [],
            ...(_v28.id === _v65 ? {
              [_v68]: []
            } : {})
          })), _v28.id === _v67 && _v15(_v0 => ({
            ..._v0,
            [_v67]: {
              ...(_v0[_v67] ?? {}),
              other: ""
            }
          }))), _v35());
        },
        isDisabled: !!_v10,
        activeNavigation: _v10
      })]
    });
  }
  function _v79(_v0, _v1) {
    return _v0[_v0.indexOf(_v1) + 1] ?? null;
  }
  function _v80({
    randomizeAnswers: _v0 = !0
  }) {
    var _v1;
    let _v2 = (0, _v6.useRouter)(),
      _v3 = (0, _v5.useSearchParams)(),
      [_v4, _v5] = (0, _v7.useState)(!1),
      _v6 = (0, _v7.useMemo)(() => ["survey", "paywall"], []),
      _v7 = (_v1 = _v3.get("phase"), _v6.find(_v0 => _v0 === _v1) ?? _v6[0]),
      _v8 = () => {
        _v5(!0), _v2.push("/home");
      };
    return _v4 ? (0, _v1.jsx)(_v42.default, {}) : (0, _v1.jsx)(_v48, {
      children: "survey" === _v7 ? (0, _v1.jsx)(_v78, {
        randomizeAnswers: _v0,
        isFinalPhase: null === _v79(_v6, "survey"),
        onComplete: () => {
          let _v0 = _v79(_v6, _v7);
          if (!_v0) return void _v8();
          let _v1 = new URLSearchParams(_v3.toString());
          _v1.delete("page"), _v1.set("phase", _v0), _v2.push({
            pathname: _v2.pathname,
            search: _v1.toString()
          });
        }
      }) : (0, _v1.jsx)(_v45, {
        onDismiss: _v8
      })
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
    if (!(_v0.query.page || _v0.query.phase)) try {
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
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => (0, _v1.jsx)(_v80, {})], 0);
}