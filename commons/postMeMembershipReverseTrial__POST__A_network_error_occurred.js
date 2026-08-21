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
    _v17 = _v0.i(0);
  async function _v18({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    ..._v3
  }) {
    return (0, _v17.measureLatency)("postMeMembershipReverseTrial", "POST", async () => {
      let _v0 = await fetch(`${_v0}/me/membership/reverse_trial?fields=${_v1.map(_v11.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v11.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v11.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v11.deepCamelCase)(_v1);
    });
  }
  var _v19 = _v0.i(0);
  let _v20 = {
    isLoading: !1,
    errorKind: null
  };
  var _v21 = _v0.i(0);
  let _v22 = {
    tier: "starter",
    periodicity: "trial",
    isFreeTrial: !0
  };
  function _v23({
    trialDays: _v0,
    storageQuota: _v1,
    isLoading: _v2,
    showInlineError: _v3,
    onActivate: _v4
  }) {
    let _v5 = (0, _v12.translate)({
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
      _v6 = (0, _v12.translate)({
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
    return (0, _v1.jsx)(_v5.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: (0, _v1.jsxs)(_v5.Flex, {
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
        children: [(0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "md",
          paddingX: "16px",
          children: [(0, _v1.jsx)(_v3.Box, {
            display: {
              base: "none",
              md: "block"
            },
            children: (0, _v1.jsx)(_v7.Text, {
              variant: "heading-lg",
              textAlign: "center",
              whiteSpace: "nowrap",
              children: (0, _v12.translate)({
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
          }), (0, _v1.jsxs)(_v5.Flex, {
            display: {
              base: "flex",
              md: "none"
            },
            direction: "row",
            alignItems: "center",
            gap: "xs",
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v7.Text, {
              variant: "heading-xl",
              whiteSpace: "nowrap",
              children: (0, _v12.translate)({
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
            }), (0, _v1.jsx)(_v3.Box, {
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
                children: (0, _v12.translate)("Starter")
              })
            })]
          })]
        }), (0, _v1.jsx)(_v3.Box, {
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
          children: (0, _v1.jsxs)(_v8.VStack, {
            gap: "32px",
            alignItems: "center",
            width: "100%",
            children: [(0, _v1.jsxs)(_v8.VStack, {
              gap: "md",
              alignItems: "center",
              width: "100%",
              children: [(0, _v1.jsx)(_v7.Text, {
                variant: {
                  base: "heading-sm",
                  md: "heading-md"
                },
                color: "text-primary",
                textAlign: "center",
                children: (0, _v12.translate)({
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
              }), (0, _v1.jsx)(_v3.Box, {
                width: "79px",
                height: "2px",
                bg: "stroke"
              }), (0, _v1.jsx)(_v8.VStack, {
                gap: "md",
                alignItems: "start",
                width: "100%",
                children: (0, _v21.getFeatures)(_v1).map((_v0, _v1) => (0, _v1.jsx)(_v16.FeatureRow, {
                  ..._v0
                }, `row${_v1}`))
              })]
            }), (0, _v1.jsxs)(_v8.VStack, {
              gap: "md",
              alignItems: "stretch",
              width: "100%",
              children: [(0, _v1.jsxs)(_v4.Button, {
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
                children: [(0, _v1.jsx)(_v3.Box, {
                  display: {
                    base: "none",
                    md: "inline"
                  },
                  children: _v5
                }), (0, _v1.jsx)(_v3.Box, {
                  display: {
                    base: "inline",
                    md: "none"
                  },
                  children: _v6
                })]
              }), _v3 && (0, _v1.jsx)(_v7.Text, {
                variant: "body-xs",
                color: "status-destructive-primary",
                textAlign: "center",
                role: "alert",
                children: (0, _v12.translate)({
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
              }), (0, _v1.jsx)(_v24, {})]
            })]
          })
        })]
      })
    });
  }
  function _v24() {
    return (0, _v1.jsxs)(_v6.HStack, {
      bg: "vimeoBlueAlpha.300",
      borderRadius: "10px",
      px: "12px",
      py: "11px",
      gap: "md",
      alignItems: "start",
      width: "100%",
      children: [(0, _v1.jsx)(_v3.Box, {
        color: "text-primary",
        pt: "2px",
        flexShrink: 0,
        children: (0, _v1.jsx)(_v10.CreditCard, {})
      }), (0, _v1.jsxs)(_v8.VStack, {
        alignItems: "start",
        gap: "0",
        children: [(0, _v1.jsx)(_v7.Text, {
          variant: "heading-sm",
          color: "text-primary",
          children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v7.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v12.translate)({
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
  function _v25({
    trialDays: _v0,
    onGotIt: _v1
  }) {
    let _v2 = (0, _v12.translate)({
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
    return (0, _v1.jsx)(_v5.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxHeight: "calc(100vh - 120px)",
      position: "relative",
      children: (0, _v1.jsxs)(_v5.Flex, {
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
        children: [(0, _v1.jsxs)(_v5.Flex, {
          direction: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "sm",
          paddingX: "16px",
          children: [(0, _v1.jsx)(_v3.Box, {
            color: "fill-brand",
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            children: (0, _v1.jsx)(_v9.CircleCheckFilled, {})
          }), (0, _v1.jsx)(_v7.Text, {
            variant: "heading-lg",
            whiteSpace: "nowrap",
            children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v3.Box, {
          width: "100%",
          maxWidth: {
            base: "100%",
            md: "540px"
          },
          padding: {
            base: "32px 24px",
            md: "32px"
          },
          children: (0, _v1.jsxs)(_v8.VStack, {
            gap: "32px",
            alignItems: "center",
            width: "100%",
            children: [(0, _v1.jsxs)(_v8.VStack, {
              gap: "md",
              alignItems: "center",
              width: "100%",
              children: [(0, _v1.jsx)(_v7.Text, {
                variant: "heading-md",
                color: "text-secondary",
                textAlign: "center",
                children: _v2
              }), (0, _v1.jsx)(_v3.Box, {
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
            }), (0, _v1.jsx)(_v4.Button, {
              size: "lg",
              variant: "primary",
              width: "100%",
              onClick: _v1,
              children: (0, _v12.translate)({
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
  _v0.s(["ActivatedScreen", 0, _v25, "ReverseTrialPaywall", 0, function ({
    trialDays: _v0,
    paywallTracking: _v1,
    onComplete: _v2,
    onActivated: _v3,
    postActivationUrl: _v4
  }) {
    let [_v5, _v6] = (0, _v2.useState)(!1),
      {
        activate: _v7,
        isLoading: _v8,
        errorKind: _v9
      } = function () {
        let {
            baseUrl: _v0,
            jwt: _v1,
            xVimeoPage: _v2,
            locale: _v3
          } = (0, _v19.useGctlConfig)(),
          [_v4, _v5] = (0, _v2.useState)(_v20);
        return {
          activate: (0, _v2.useCallback)(async _v0 => {
            _v5({
              isLoading: !0,
              errorKind: null
            });
            try {
              await _v18({
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
                errorKind: _v0 instanceof _v11.NetworkError ? _v0.status >= 500 ? "5xx" : "4xx" : "network"
              }), _v0;
            }
          }, [_v0, _v1, _v2, _v3]),
          isLoading: _v4.isLoading,
          errorKind: _v4.errorKind
        };
      }(),
      _v10 = (0, _v15.useGetSubscriptionPlansData)(["starter"], void 0, !1),
      _v11 = _v10?.find(_v0 => "starter" === _v0.tier) ?? _v10?.[0],
      _v12 = _v11?.metadata?.entitlements?.params?.videoStoragePeriodicQuota;
    (0, _v14.usePaywallTracking)({
      ..._v1,
      isVisible: !_v5
    });
    let {
        trackCheckoutPurchaseButtonClicked: _v13,
        trackCheckoutFailed: _v14,
        trackUserConverted: _v15
      } = (0, _v13.useCheckoutTracking)(),
      _v16 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      "4xx" !== _v9 || _v16.current || (_v16.current = !0, _v2());
    }, [_v9, _v2]);
    let _v17 = async () => {
      _v13(_v22);
      try {
        await _v7(_v0), _v15(_v22), _v6(!0), _v3?.();
      } catch (_v0) {
        _v14({
          ..._v22,
          source: "network",
          http_status: _v0 instanceof _v11.NetworkError ? _v0.status : null,
          endpoint: "me_membership_reverse_trial",
          error_message: _v0 instanceof Error ? _v0.message : void 0
        });
      }
    };
    return _v5 ? (0, _v1.jsx)(_v25, {
      trialDays: _v0,
      onGotIt: () => {
        window.location.assign(_v4 ?? "/home");
      }
    }) : (0, _v1.jsx)(_v23, {
      trialDays: _v0,
      storageQuota: _v12,
      isLoading: _v8,
      showInlineError: "5xx" === _v9 || "network" === _v9,
      onActivate: _v17
    });
  }], 0);
}