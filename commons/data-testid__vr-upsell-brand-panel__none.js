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
  function _v23() {
    return (0, _v1.jsx)(_v12.Box, {
      "data-testid": "vr-upsell-brand-panel",
      display: {
        base: "none",
        md: "block"
      },
      flex: "none",
      width: (0, _v8.rem)(320),
      alignSelf: "stretch",
      overflow: "hidden",
      children: (0, _v1.jsx)(_v14.Image, {
        src: "https://i.vimeocdn.com/custom_asset/c518e756bac380e077c8a2b387248079",
        alt: (0, _v22.translate)({
          singular: "Vimeo Review — stop paying for Frame.io",
          dictionary: {
            es: {
              singular: "Vimeo Review — deja de pagar por Frame.io"
            },
            "de-DE": {
              singular: "Vimeo Review — zahlen Sie nicht länger für Frame.io"
            },
            "fr-FR": {
              singular: "Vimeo Review — arrêtez de payer pour Frame.io"
            },
            "ja-JP": {
              singular: "Vimeo Review — Frame.ioへの支払いはもう不要です"
            },
            "ko-KR": {
              singular: "Vimeo Review — Frame.io에 대한 비용 지불을 중단하세요"
            },
            "pt-BR": {
              singular: "Vimeo Review — pare de pagar pelo Frame.io"
            },
            "zh-CN": {
              singular: "Vimeo Review — 不再为 Frame.io 付费"
            }
          }
        }),
        width: "100%",
        height: "100%",
        objectFit: "cover"
      })
    });
  }
  function _v24({
    Icon: _v0,
    tileBg: _v1,
    iconColor: _v2,
    title: _v3,
    body: _v4
  }) {
    return (0, _v1.jsxs)(_v13.Flex, {
      gap: (0, _v8.rem)(12),
      align: "flex-start",
      children: [(0, _v1.jsx)(_v13.Flex, {
        flex: "none",
        align: "center",
        justify: "center",
        width: (0, _v8.rem)(32),
        height: (0, _v8.rem)(32),
        borderRadius: (0, _v8.rem)(8),
        bg: _v1,
        children: (0, _v1.jsx)(_v0, {
          boxSize: (0, _v8.rem)(18),
          color: _v2,
          "aria-hidden": !0
        })
      }), (0, _v1.jsxs)(_v13.Flex, {
        direction: "column",
        gap: (0, _v8.rem)(2),
        children: [(0, _v1.jsx)(_v15.Header, {
          size: "xs",
          color: "text-primary",
          children: _v3
        }), (0, _v1.jsx)(_v16.Text, {
          variant: "body-md",
          color: "text-tertiary",
          children: _v4
        })]
      })]
    });
  }
  function _v25({
    isOpen: _v0,
    onClose: _v1,
    onConfirm: _v2
  }) {
    return (0, _v1.jsxs)(_v9.Modal, {
      isOpen: _v0,
      onClose: _v1,
      isCentered: !0,
      children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsx)(_v11.ModalContent, {
        "data-testid": "vr-upsell-modal",
        "aria-label": (0, _v22.translate)({
          singular: "Try Vimeo Review",
          dictionary: {
            es: {
              singular: "Prueba Vimeo Review"
            },
            "de-DE": {
              singular: "Vimeo Review testen"
            },
            "fr-FR": {
              singular: "Essayez Vimeo Review"
            },
            "ja-JP": {
              singular: "Vimeo Reviewをお試しください"
            },
            "ko-KR": {
              singular: "Vimeo Review를 사용해 보세요"
            },
            "pt-BR": {
              singular: "Experimente o Vimeo Review"
            },
            "zh-CN": {
              singular: "试用 Vimeo Review"
            }
          }
        }),
        bg: "surface",
        borderRadius: (0, _v8.rem)(28),
        width: {
          base: (0, _v8.rem)(440),
          md: (0, _v8.rem)(760)
        },
        maxW: "calc(100% - 2rem)",
        overflow: "hidden",
        boxShadow: "0 4px 32px rgba(10, 26, 41, 0.24)",
        children: (0, _v1.jsxs)(_v13.Flex, {
          align: "stretch",
          children: [(0, _v1.jsx)(_v23, {}), (0, _v1.jsxs)(_v13.Flex, {
            direction: "column",
            flex: "1",
            minW: 0,
            paddingTop: (0, _v8.rem)(24),
            children: [(0, _v1.jsxs)(_v13.Flex, {
              direction: "column",
              flex: "1",
              gap: (0, _v8.rem)(24),
              paddingX: (0, _v8.rem)(32),
              children: [(0, _v1.jsxs)(_v13.Flex, {
                direction: "column",
                gap: (0, _v8.rem)(16),
                children: [(0, _v1.jsxs)(_v13.Flex, {
                  align: "center",
                  justify: "space-between",
                  paddingX: (0, _v8.rem)(12),
                  paddingY: (0, _v8.rem)(4),
                  borderRadius: (0, _v8.rem)(12),
                  bg: "blackAlpha.50",
                  children: [(0, _v1.jsxs)(_v13.Flex, {
                    align: "center",
                    gap: (0, _v8.rem)(12),
                    children: [(0, _v1.jsx)(_v15.Header, {
                      size: "lg",
                      color: "status-positive-primary",
                      children: (0, _v22.translate)("$0")
                    }), (0, _v1.jsx)(_v16.Text, {
                      variant: "body-xl",
                      fontFamily: "heading",
                      fontWeight: "medium",
                      color: "text-tertiary",
                      textDecoration: "line-through",
                      children: (0, _v22.translate)({
                        singular: "Frame.io from $15/mo",
                        dictionary: {
                          es: {
                            singular: "Frame.io desde $15/mes"
                          },
                          "de-DE": {
                            singular: "Frame.io ab $15/Monat"
                          },
                          "fr-FR": {
                            singular: "Frame.io à partir de $15/mo"
                          },
                          "ja-JP": {
                            singular: "Frame.io：$15/moから"
                          },
                          "ko-KR": {
                            singular: "Frame.io — $15/월부터"
                          },
                          "pt-BR": {
                            singular: "Frame.io a partir de $15/mês"
                          },
                          "zh-CN": {
                            singular: "Frame.io 每月 $15 起"
                          }
                        }
                      })
                    })]
                  }), (0, _v1.jsx)(_v18.Badge, {
                    variant: "success",
                    size: "sm",
                    children: (0, _v22.translate)({
                      singular: "Best value",
                      dictionary: {
                        es: {
                          singular: "Mejor relación calidad-precio"
                        },
                        "de-DE": {
                          singular: "Bestes Angebot"
                        },
                        "fr-FR": {
                          singular: "Meilleure offre"
                        },
                        "ja-JP": {
                          singular: "最もお得"
                        },
                        "ko-KR": {
                          singular: "최고의 가치"
                        },
                        "pt-BR": {
                          singular: "Melhor custo-benefício"
                        },
                        "zh-CN": {
                          singular: "最佳性价比"
                        }
                      }
                    })
                  })]
                }), (0, _v1.jsx)(_v16.Text, {
                  variant: "body-lg",
                  color: "text-secondary",
                  children: (0, _v22.translate)({
                    singular: "You already have Vimeo Review — a smoother, integrated alternative included in your plan. No extra cost.",
                    dictionary: {
                      es: {
                        singular: "Ya tienes Vimeo Review — una alternativa más fluida e integrada incluida en tu plan. Sin costo adicional."
                      },
                      "de-DE": {
                        singular: "Sie haben bereits Vimeo Review — eine reibungslosere, integrierte Alternative, die in Ihrem Tarif enthalten ist. Keine zusätzlichen Kosten."
                      },
                      "fr-FR": {
                        singular: "Vous avez déjà Vimeo Review — une alternative plus fluide et intégrée incluse dans votre forfait. Aucun coût supplémentaire."
                      },
                      "ja-JP": {
                        singular: "既にVimeo Reviewをご利用いただけます — よりスムーズで統合された代替機能がプランに含まれており、追加費用はかかりません。"
                      },
                      "ko-KR": {
                        singular: "이미 Vimeo Review를 보유하고 계십니다 — 더 매끄럽고 통합된 대안이 귀하의 요금제에 포함되어 있습니다. 추가 비용이 없습니다."
                      },
                      "pt-BR": {
                        singular: "Você já tem o Vimeo Review — uma alternativa mais fluida e integrada incluída no seu plano. Sem custo adicional."
                      },
                      "zh-CN": {
                        singular: "您已经拥有 Vimeo Review — 更顺畅且集成的替代方案，已包含在您的计划中，无需额外费用。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v13.Flex, {
                direction: "column",
                gap: (0, _v8.rem)(16),
                children: [{
                  Icon: _v19.CommentPin,
                  tileBg: "status-info-secondary",
                  iconColor: "status-info-primary",
                  title: (0, _v22.translate)({
                    singular: "Comment right on the video",
                    dictionary: {
                      es: {
                        singular: "Comenta directamente en el video"
                      },
                      "de-DE": {
                        singular: "Direkt im Video kommentieren"
                      },
                      "fr-FR": {
                        singular: "Commentez directement sur la vidéo"
                      },
                      "ja-JP": {
                        singular: "動画上に直接コメント"
                      },
                      "ko-KR": {
                        singular: "영상에 바로 코멘트를 남기세요"
                      },
                      "pt-BR": {
                        singular: "Comente diretamente no vídeo"
                      },
                      "zh-CN": {
                        singular: "直接在视频上评论"
                      }
                    }
                  }),
                  body: (0, _v22.translate)({
                    singular: "Click the frame to leave a note tied to the exact second and the exact spot.",
                    dictionary: {
                      es: {
                        singular: "Haz clic en el fotograma para dejar una nota vinculada al segundo exacto y al punto exacto."
                      },
                      "de-DE": {
                        singular: "Klicken Sie auf das Frame, um eine Notiz zu hinterlassen, die an die genaue Sekunde und die genaue Stelle gebunden ist."
                      },
                      "fr-FR": {
                        singular: "Cliquez sur l'image pour laisser une note liée à la seconde et à l'emplacement exact."
                      },
                      "ja-JP": {
                        singular: "フレームをクリックして、正確な秒数と位置に紐づいたノートを残してください。"
                      },
                      "ko-KR": {
                        singular: "프레임을 클릭하여 영상의 정확한 초와 위치에 연결된 노트를 남기세요."
                      },
                      "pt-BR": {
                        singular: "Clique no quadro para deixar uma nota vinculada ao segundo exato e ao local exato."
                      },
                      "zh-CN": {
                        singular: "点击画面，在准确的时间点和精确位置添加备注。"
                      }
                    }
                  })
                }, {
                  Icon: _v20.ReviewCheck,
                  tileBg: "status-positive-secondary",
                  iconColor: "status-positive-primary",
                  title: (0, _v22.translate)({
                    singular: "Reply, react, resolve",
                    dictionary: {
                      es: {
                        singular: "Responde, reacciona, resuelve"
                      },
                      "de-DE": {
                        singular: "Antworten, reagieren, schließen"
                      },
                      "fr-FR": {
                        singular: "Répondre, réagir, résoudre"
                      },
                      "ja-JP": {
                        singular: "返信、リアクション、解決"
                      },
                      "ko-KR": {
                        singular: "답글, 리액션, 해결"
                      },
                      "pt-BR": {
                        singular: "Responder, reagir, resolver"
                      },
                      "zh-CN": {
                        singular: "回复、添加表情、标记为已解决"
                      }
                    }
                  }),
                  body: (0, _v22.translate)({
                    singular: "Answer in a thread, react, and resolve each note once it’s handled.",
                    dictionary: {
                      es: {
                        singular: "Responde en un hilo, reacciona y resuelve cada nota una vez que se haya atendido."
                      },
                      "de-DE": {
                        singular: "In einem Thread antworten, reagieren und jede Notiz schließen, sobald sie erledigt ist."
                      },
                      "fr-FR": {
                        singular: "Répondez dans un fil de discussion, réagissez et marquez chaque note comme résolue une fois qu'elle est traitée."
                      },
                      "ja-JP": {
                        singular: "スレッドで返信し、リアクションを付け、対応が完了したら各ノートを解決してください。"
                      },
                      "ko-KR": {
                        singular: "스레드로 답글을 달고, 리액션을 추가한 뒤 각 노트가 처리되면 해결 처리하세요."
                      },
                      "pt-BR": {
                        singular: "Responda em um tópico, reaja e resolva cada nota assim que for tratada."
                      },
                      "zh-CN": {
                        singular: "在讨论线程中回复、添加表情并在处理完每条备注后将其标记为已解决。"
                      }
                    }
                  })
                }, {
                  Icon: _v21.ShieldCheck,
                  tileBg: "upsell-secondary",
                  iconColor: "upsell-primary",
                  title: (0, _v22.translate)({
                    singular: "Share easily and securely",
                    dictionary: {
                      es: {
                        singular: "Comparte de forma fácil y segura"
                      },
                      "de-DE": {
                        singular: "Einfach und sicher teilen"
                      },
                      "fr-FR": {
                        singular: "Partagez facilement et en toute sécurité"
                      },
                      "ja-JP": {
                        singular: "簡単かつ安全に共有"
                      },
                      "ko-KR": {
                        singular: "간편하고 안전하게 공유"
                      },
                      "pt-BR": {
                        singular: "Compartilhe de forma fácil e segura"
                      },
                      "zh-CN": {
                        singular: "轻松且安全地分享"
                      }
                    }
                  }),
                  body: (0, _v22.translate)({
                    singular: "Custom review links with downloads, previous versions, expiration, and more permissions.",
                    dictionary: {
                      es: {
                        singular: "Enlaces de revisión personalizados con descargas, versiones anteriores, caducidad y más permisos."
                      },
                      "de-DE": {
                        singular: "Individuelle Review-Links mit Downloads, vorherigen Versionen, Ablaufdatum und weiteren Berechtigungen."
                      },
                      "fr-FR": {
                        singular: "Liens de révision personnalisés avec téléchargements, versions précédentes, expiration et plus d'autorisations."
                      },
                      "ja-JP": {
                        singular: "ダウンロード、過去のバージョン、有効期限などの権限設定が可能なカスタムレビューリンク。"
                      },
                      "ko-KR": {
                        singular: "다운로드, 이전 버전, 만료 설정 등 다양한 권한을 포함한 맞춤 리뷰 링크."
                      },
                      "pt-BR": {
                        singular: "Links de revisão personalizados com downloads, versões anteriores, expiração e mais permissões."
                      },
                      "zh-CN": {
                        singular: "自定义审查链接，支持下载、查看历史版本、设置过期时间及更多权限。"
                      }
                    }
                  })
                }].map(_v0 => (0, _v1.jsx)(_v24, {
                  ..._v0
                }, _v0.title))
              })]
            }), (0, _v1.jsxs)(_v13.Flex, {
              direction: "column",
              gap: (0, _v8.rem)(8),
              paddingTop: (0, _v8.rem)(24),
              paddingBottom: (0, _v8.rem)(12),
              paddingX: (0, _v8.rem)(32),
              children: [(0, _v1.jsx)(_v17.Button, {
                variant: "primary",
                size: "lg",
                width: "full",
                onClick: _v2,
                children: (0, _v22.translate)({
                  singular: "Try Vimeo Review now",
                  dictionary: {
                    es: {
                      singular: "Prueba Vimeo Review ahora"
                    },
                    "de-DE": {
                      singular: "Vimeo Review jetzt testen"
                    },
                    "fr-FR": {
                      singular: "Essayez Vimeo Review dès maintenant"
                    },
                    "ja-JP": {
                      singular: "今すぐVimeo Reviewをお試しください"
                    },
                    "ko-KR": {
                      singular: "지금 Vimeo Review를 사용해 보세요"
                    },
                    "pt-BR": {
                      singular: "Experimente o Vimeo Review agora"
                    },
                    "zh-CN": {
                      singular: "立即试用 Vimeo Review"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v17.Button, {
                variant: "tertiary",
                size: "lg",
                width: "full",
                onClick: _v1,
                children: (0, _v22.translate)({
                  singular: "Maybe later",
                  dictionary: {
                    es: {
                      singular: "Quizá más tarde"
                    },
                    "de-DE": {
                      singular: "Vielleicht später"
                    },
                    "fr-FR": {
                      singular: "Peut-être plus tard"
                    },
                    "ja-JP": {
                      singular: "後で"
                    },
                    "ko-KR": {
                      singular: "나중에"
                    },
                    "pt-BR": {
                      singular: "Talvez depois"
                    },
                    "zh-CN": {
                      singular: "稍后再说"
                    }
                  }
                })
              })]
            })]
          })]
        })
      })]
    });
  }
  _v0.s(["VimeoReviewUpsellModal", 0, _v25], 0);
  var _v26 = _v0.i(0);
  function _v27({
    reviewVideoId: _v0
  }) {
    let {
        isDismissed: _v1,
        dismiss: _v2
      } = (0, _v3.useDismissCooldown)({
        storageKey: "vimeo_review_upsell_dismissed_until",
        cooldownMs: 0
      }),
      [_v3, _v4] = (0, _v4.default)("vimeo_review_upsell_proceeded", !1),
      {
        openReviewModal: _v5
      } = (0, _v26.useReviewModal)(),
      {
        trackReviewUpsellDisplayed: _v6,
        trackReviewEntryPointClicked: _v7,
        trackReviewCtaDismissed: _v8
      } = (0, _v6.useMaximizeReviewAdoptionTracking)(),
      [_v9, _v10] = (0, _v2.useState)(!1),
      _v11 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => {
      _v11.current || _v1 || _v3 || (_v11.current = !0, _v2(), _v10(!0));
    }, [_v1, _v2, _v3]), (0, _v7.usePicoEffect)(() => {
      if (!_v9) return !1;
      _v6({
        entryPoint: "review_upsell",
        reviewVideoId: _v0
      });
    }, [_v9, _v0], {
      once: !0
    });
    let _v12 = (0, _v2.useCallback)(() => {
        _v10(!1), _v8({
          dismissalStage: "upsell_modal",
          entryPoint: "review_upsell"
        });
      }, [_v8]),
      _v13 = (0, _v2.useCallback)(() => {
        _v10(!1), _v4(!0), _v7({
          entryPoint: "review_upsell"
        }), _v5("review_upsell", void 0 !== _v0 ? {
          videoId: _v0
        } : void 0);
      }, [_v5, _v4, _v7, _v0]);
    return (0, _v1.jsx)(_v25, {
      isOpen: _v9,
      onClose: _v12,
      onConfirm: _v13
    });
  }
  _v0.s(["VimeoReviewUpsellPromo", 0, function ({
    reviewVideoId: _v0
  }) {
    let {
      settings: _v1
    } = (0, _v5.useOrionSettings)();
    return _v1.enable_review_adoption_v2 ? (0, _v1.jsx)(_v26.ReviewModalProvider, {
      children: (0, _v1.jsx)(_v27, {
        reviewVideoId: _v0
      })
    }) : null;
  }], 0);
}