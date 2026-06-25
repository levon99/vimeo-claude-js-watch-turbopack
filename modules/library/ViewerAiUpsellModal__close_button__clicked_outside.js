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
  _v0.s(["ViewerAiUpsellModal", 0, function ({
    step: _v0,
    onDismiss: _v1,
    onCtaClick: _v2,
    onErrorClose: _v3
  }) {
    let _v4 = (0, _v2.useRef)(!1),
      _v5 = (0, _v2.useCallback)(() => {
        _v4.current = !0, _v3("close_button");
      }, [_v3]),
      _v6 = (0, _v2.useCallback)(() => {
        if (_v4.current) {
          _v4.current = !1;
          return;
        }
        _v3("clicked_outside");
      }, [_v3]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v7.Modal, {
        isOpen: "upsell" === _v0,
        onClose: _v1,
        size: "md",
        children: [(0, _v1.jsx)(_v10.ModalOverlay, {
          zIndex: 0
        }), (0, _v1.jsxs)(_v9.ModalContent, {
          containerProps: {
            style: {
              zIndex: 0
            }
          },
          borderRadius: (0, _v12.rem)(24),
          maxWidth: [(0, _v12.rem)(354), (0, _v12.rem)(354), (0, _v12.rem)(600)],
          maxHeight: "90vh",
          overflowY: "auto",
          width: "100%",
          mx: (0, _v12.rem)(16),
          p: "0",
          position: "relative",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            align: "center",
            pt: [(0, _v12.rem)(20), (0, _v12.rem)(20), (0, _v12.rem)(12)],
            pb: (0, _v12.rem)(16),
            children: [(0, _v1.jsx)(_v5.Flex, {
              direction: "column",
              align: "center",
              px: [(0, _v12.rem)(20), (0, _v12.rem)(20), (0, _v12.rem)(24)],
              w: "100%",
              children: (0, _v1.jsxs)(_v5.Flex, {
                direction: "column",
                align: "center",
                gap: [(0, _v12.rem)(24), (0, _v12.rem)(24), (0, _v12.rem)(32)],
                w: "100%",
                maxW: (0, _v12.rem)(400),
                pt: (0, _v12.rem)(24),
                pb: [(0, _v12.rem)(12), (0, _v12.rem)(12), (0, _v12.rem)(24)],
                children: [(0, _v1.jsxs)(_v5.Flex, {
                  direction: "column",
                  align: "center",
                  gap: [(0, _v12.rem)(16), (0, _v12.rem)(16), (0, _v12.rem)(24)],
                  w: "100%",
                  children: [(0, _v1.jsx)(_v6.Header, {
                    size: {
                      base: "lg",
                      md: "xl"
                    },
                    textAlign: "center",
                    w: "100%",
                    children: (0, _v14.translate)({
                      singular: "Help viewers get more from your videos",
                      dictionary: {
                        es: {
                          singular: "Ayuda a los espectadores a aprovechar más tus vídeos"
                        },
                        "de-DE": {
                          singular: "Helfen Sie Zuschauern, mehr aus Ihren Videos herauszuholen"
                        },
                        "fr-FR": {
                          singular: "Aidez les spectateurs à tirer le meilleur parti de vos vidéos"
                        },
                        "ja-JP": {
                          singular: "視聴者が動画をより活用できるようにする"
                        },
                        "ko-KR": {
                          singular: "시청자가 동영상에서 더 많은 가치를 얻도록 도와주세요"
                        },
                        "pt-BR": {
                          singular: "Ajude os espectadores a tirar mais proveito dos seus vídeos"
                        },
                        "zh-CN": {
                          singular: "帮助观众更好地从你的视频中受益"
                        }
                      }
                    })
                  }), (0, _v1.jsx)(_v6.Header, {
                    size: {
                      base: "xs",
                      md: "sm"
                    },
                    textAlign: "center",
                    color: "text-secondary",
                    w: "100%",
                    children: (0, _v14.translate)({
                      singular: "Let viewers use AI to summarize your video, ask questions, translate it, and navigate with generated chapters and captions, right where they watch.",
                      dictionary: {
                        es: {
                          singular: "Permite que los espectadores utilicen IA para resumir tu vídeo, hacer preguntas, traducirlo y navegar mediante capítulos y subtítulos generados, justo donde lo ven."
                        },
                        "de-DE": {
                          singular: "Ermöglichen Sie Zuschauern, KI zu nutzen, um Ihr Video zusammenfassen zu lassen, Fragen zu stellen, es zu übersetzen und sich mit automatisch generierten Kapiteln und Untertiteln direkt beim Anschauen zu orientieren."
                        },
                        "fr-FR": {
                          singular: "Permettez aux spectateurs d'utiliser l'IA pour résumer votre vidéo, poser des questions, la traduire et naviguer grâce à des chapitres et des sous-titres générés, directement là où ils regardent."
                        },
                        "ja-JP": {
                          singular: "視聴画面で直接、視聴者がAIを使って動画を要約したり、質問したり、翻訳したり、生成されたチャプターやキャプションでナビゲートしたりできるようにします。"
                        },
                        "ko-KR": {
                          singular: "시청자가 시청하는 바로 그 자리에서 AI를 사용해 동영상을 요약하고 질문하고 번역하며, 자동 생성된 챕터와 자막으로 탐색할 수 있게 하세요."
                        },
                        "pt-BR": {
                          singular: "Permita que os espectadores usem IA para resumir seu vídeo, fazer perguntas, traduzi-lo e navegar com capítulos e legendas gerados, diretamente onde assistem."
                        },
                        "zh-CN": {
                          singular: "让观众在观看时直接使用 AI 对视频进行摘要、提问、翻译，并通过生成的章节与字幕便捷导航。"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsxs)(_v5.Flex, {
                  direction: "column",
                  align: "center",
                  gap: (0, _v12.rem)(16),
                  w: "100%",
                  children: [(0, _v1.jsx)(_v3.Box, {
                    as: "img",
                    src: "https://i.vimeocdn.com/custom_asset/d89b2e4c73316af9466e2cfee92b6cdc",
                    alt: "",
                    w: "100%",
                    h: [(0, _v12.rem)(228), (0, _v12.rem)(228), (0, _v12.rem)(299)],
                    objectFit: "cover",
                    borderRadius: (0, _v12.rem)(20),
                    display: "block"
                  }), (0, _v1.jsxs)(_v5.Flex, {
                    align: "center",
                    justify: "center",
                    gap: (0, _v12.rem)(4),
                    w: "100%",
                    children: [(0, _v1.jsx)(_v3.Box, {
                      as: _v13.VimeoCoin,
                      boxSize: (0, _v12.rem)(16),
                      color: "text-tertiary",
                      flexShrink: 0
                    }), (0, _v1.jsx)(_v6.Header, {
                      size: {
                        base: "2xs",
                        md: "xs"
                      },
                      textAlign: "center",
                      color: "text-tertiary",
                      children: (0, _v14.translate)({
                        singular: "Viewer AI usage will consume your AI credits.",
                        dictionary: {
                          es: {
                            singular: "El uso de la IA por parte de los espectadores consumirá tus créditos de IA."
                          },
                          "de-DE": {
                            singular: "Die Nutzung der KI durch Zuschauer wird Ihr KI-Guthaben verbrauchen."
                          },
                          "fr-FR": {
                            singular: "L'utilisation de l'IA par les spectateurs consommera vos crédits d'IA."
                          },
                          "ja-JP": {
                            singular: "視聴者のAI利用はお客様のAIクレジットを消費します。"
                          },
                          "ko-KR": {
                            singular: "시청자의 AI 사용은 귀하의 AI 크레딧을 소모합니다."
                          },
                          "pt-BR": {
                            singular: "O uso de IA pelos espectadores consumirá seus créditos de IA."
                          },
                          "zh-CN": {
                            singular: "观众使用 AI 会消耗你的 AI 积分。"
                          }
                        }
                      })
                    })]
                  })]
                })]
              })
            }), (0, _v1.jsx)(_v5.Flex, {
              direction: "column",
              align: "center",
              px: [(0, _v12.rem)(20), (0, _v12.rem)(20), (0, _v12.rem)(24)],
              py: [(0, _v12.rem)(20), (0, _v12.rem)(20), (0, _v12.rem)(24)],
              w: "100%",
              children: (0, _v1.jsx)(_v4.Button, {
                size: "lg",
                variant: "primary",
                w: "100%",
                maxW: (0, _v12.rem)(400),
                onClick: _v2,
                children: (0, _v14.translate)({
                  singular: "Join waitlist",
                  dictionary: {
                    es: {
                      singular: "Únete a la lista de espera"
                    },
                    "de-DE": {
                      singular: "Warteliste beitreten"
                    },
                    "fr-FR": {
                      singular: "Rejoindre la liste d'attente"
                    },
                    "ja-JP": {
                      singular: "ウェイトリストに登録"
                    },
                    "ko-KR": {
                      singular: "대기자 명단 등록"
                    },
                    "pt-BR": {
                      singular: "Inscreva-se na lista de espera"
                    },
                    "zh-CN": {
                      singular: "加入候补名单"
                    }
                  }
                })
              })
            })]
          }), (0, _v1.jsx)(_v8.ModalCloseButton, {
            opacity: .4,
            top: [(0, _v12.rem)(12), (0, _v12.rem)(12), (0, _v12.rem)(20)],
            right: [(0, _v12.rem)(12), (0, _v12.rem)(12), (0, _v12.rem)(20)]
          })]
        })]
      }), (0, _v1.jsxs)(_v7.Modal, {
        isOpen: "error" === _v0,
        onClose: _v6,
        size: "md",
        children: [(0, _v1.jsx)(_v10.ModalOverlay, {
          zIndex: 0
        }), (0, _v1.jsxs)(_v9.ModalContent, {
          containerProps: {
            style: {
              zIndex: 0
            }
          },
          borderRadius: (0, _v12.rem)(24),
          maxWidth: [(0, _v12.rem)(354), (0, _v12.rem)(354), (0, _v12.rem)(509)],
          width: "100%",
          mx: (0, _v12.rem)(16),
          p: "0",
          overflow: "hidden",
          position: "relative",
          children: [(0, _v1.jsxs)(_v5.Flex, {
            direction: "column",
            align: "center",
            pt: (0, _v12.rem)(24),
            children: [(0, _v1.jsx)(_v5.Flex, {
              direction: "column",
              align: "center",
              pt: (0, _v12.rem)(12),
              w: "100%",
              children: (0, _v1.jsxs)(_v5.Flex, {
                direction: "column",
                align: "center",
                gap: (0, _v12.rem)(16),
                px: [(0, _v12.rem)(24), (0, _v12.rem)(40), (0, _v12.rem)(60)],
                py: (0, _v12.rem)(24),
                w: "100%",
                children: [(0, _v1.jsx)(_v6.Header, {
                  size: "lg",
                  textAlign: "center",
                  children: (0, _v14.translate)({
                    singular: "Thanks, you're on the waitlist",
                    dictionary: {
                      es: {
                        singular: "Gracias, ya estás en la lista de espera"
                      },
                      "de-DE": {
                        singular: "Danke, Sie sind auf der Warteliste"
                      },
                      "fr-FR": {
                        singular: "Merci, vous êtes sur la liste d'attente"
                      },
                      "ja-JP": {
                        singular: "ありがとうございます。ウェイトリストに登録されました"
                      },
                      "ko-KR": {
                        singular: "감사합니다, 대기자 명단에 등록되었습니다."
                      },
                      "pt-BR": {
                        singular: "Obrigado, você está na lista de espera"
                      },
                      "zh-CN": {
                        singular: "谢谢，你已加入候补名单"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v11.Text, {
                  textAlign: "center",
                  children: (0, _v14.translate)({
                    singular: "We'll keep you posted when AI viewer features become available.",
                    dictionary: {
                      es: {
                        singular: "Te mantendremos informado cuando las funciones de IA para espectadores estén disponibles."
                      },
                      "de-DE": {
                        singular: "Wir halten Sie auf dem Laufenden, sobald KI-Funktionen für Zuschauer verfügbar sind."
                      },
                      "fr-FR": {
                        singular: "Nous vous tiendrons informés lorsque les fonctionnalités d'IA pour les spectateurs seront disponibles."
                      },
                      "ja-JP": {
                        singular: "視聴者向けのAI機能が利用可能になったらお知らせします。"
                      },
                      "ko-KR": {
                        singular: "AI 시청자 기능을 이용할 수 있게 되면 알려드리겠습니다."
                      },
                      "pt-BR": {
                        singular: "Manteremos você informado quando os recursos de IA para espectadores estiverem disponíveis."
                      },
                      "zh-CN": {
                        singular: "当面向观众的 AI 功能可用时，我们会及时通知你。"
                      }
                    }
                  })
                })]
              })
            }), (0, _v1.jsx)(_v5.Flex, {
              direction: "column",
              align: "center",
              px: [(0, _v12.rem)(24), (0, _v12.rem)(40), (0, _v12.rem)(55)],
              p: (0, _v12.rem)(24),
              w: "100%",
              children: (0, _v1.jsx)(_v4.Button, {
                size: "lg",
                variant: "primary",
                w: "100%",
                maxW: (0, _v12.rem)(400),
                onClick: _v5,
                children: (0, _v14.translate)({
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
                })
              })
            })]
          }), (0, _v1.jsx)(_v8.ModalCloseButton, {
            top: (0, _v12.rem)(12),
            right: (0, _v12.rem)(12),
            onClick: _v5
          })]
        })]
      })]
    });
  }], 0);
  var _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = "viewer-ai-upsell-dismissed";
  _v0.s(["useViewerAiUpsellModal", 0, function (_v0) {
    let _v1,
      _v2,
      _v3,
      _v4,
      _v5,
      [_v6, _v7] = (0, _v2.useState)("closed"),
      {
        settings: _v8
      } = (0, _v15.useOrionSettings)(),
      _v9 = _v8.viewer_ai_upsell_modal_enabled,
      _v10 = (0, _v2.useRef)(!1),
      {
        trackUpsellModalEligible: _v11,
        trackUpsellModalShown: _v12,
        trackUpsellModalDismissed: _v13,
        trackUpsellModalCtaClicked: _v14,
        trackUpsellErrorModalShown: _v15,
        trackUpsellErrorModalClosed: _v16
      } = (_v1 = (0, _v16.usePico)(), _v2 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("viewer_ai_upsell_modal_eligible", {
          page: _v0
        });
      }, [_v1]), _v3 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("viewer_ai_upsell_modal_shown", {
          page: _v0
        });
      }, [_v1]), _v4 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("viewer_ai_upsell_modal_dismissed", {
          page: _v0
        });
      }, [_v1]), _v5 = (0, _v2.useCallback)(_v0 => {
        _v1?.track("viewer_ai_upsell_modal_cta_clicked", {
          page: _v0
        });
      }, [_v1]), {
        trackUpsellModalEligible: _v2,
        trackUpsellModalShown: _v3,
        trackUpsellModalDismissed: _v4,
        trackUpsellModalCtaClicked: _v5,
        trackUpsellErrorModalShown: (0, _v2.useCallback)(_v0 => {
          _v1?.track("viewer_ai_upsell_error_modal_shown", {
            page: _v0
          });
        }, [_v1]),
        trackUpsellErrorModalClosed: (0, _v2.useCallback)((_v0, _v1) => {
          _v1?.track("viewer_ai_upsell_error_modal_closed", {
            page: _v0,
            action: _v1
          });
        }, [_v1])
      }),
      _v17 = (0, _v2.useRef)(_v11),
      _v18 = (0, _v2.useRef)(_v12);
    (0, _v2.useEffect)(() => {
      _v17.current = _v11;
    }, [_v11]), (0, _v2.useEffect)(() => {
      _v18.current = _v12;
    }, [_v12]), (0, _v2.useEffect)(() => {
      if (!_v9 || _v10.current) return;
      let _v0 = !1;
      try {
        _v0 = "1" === localStorage.getItem(_v17);
      } catch (_v0) {
        return;
      }
      if (_v0) return;
      _v17.current(_v0);
      let _v1 = setTimeout(() => {
        _v10.current = !0;
        try {
          localStorage.setItem(_v17, "1");
        } catch (_v0) {}
        _v7("upsell"), _v18.current(_v0);
      }, 0);
      return () => clearTimeout(_v1);
    }, [_v9, _v0]);
    let _v19 = (0, _v2.useCallback)(() => {
      _v7("closed");
      try {
        localStorage.setItem(_v17, "1");
      } catch (_v0) {}
      _v13(_v0);
    }, [_v0, _v13]);
    return {
      step: _v6,
      handleDismiss: _v19,
      handleCtaClick: (0, _v2.useCallback)(() => {
        _v7("error");
        try {
          localStorage.setItem(_v17, "1");
        } catch (_v0) {}
        _v14(_v0), _v15(_v0);
      }, [_v0, _v14, _v15]),
      handleErrorClose: (0, _v2.useCallback)(_v0 => {
        _v7("closed"), _v16(_v0, _v0);
      }, [_v0, _v16])
    };
  }], 0);
}