{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8({
    tierName: _v0
  }) {
    return (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      gap: "md",
      alignItems: "center",
      px: "sm",
      py: "md",
      width: "100%",
      children: [(0, _v1.jsx)(_v5.Text, {
        variant: {
          base: "heading-xl",
          md: "heading-2xl"
        },
        textAlign: "center",
        letterSpacing: "-0.05em",
        children: (0, _v6.translate)({
          singular: "Go {TIER_NAME}",
          replacements: {
            TIER_NAME: _v0
          },
          dictionary: {
            es: {
              singular: "Ir a {TIER_NAME}"
            },
            "de-DE": {
              singular: "Zu {TIER_NAME}"
            },
            "fr-FR": {
              singular: "Passez à {TIER_NAME}"
            },
            "ja-JP": {
              singular: "{TIER_NAME}に移行"
            },
            "ko-KR": {
              singular: "{TIER_NAME}로 이동"
            },
            "pt-BR": {
              singular: "Vá para {TIER_NAME}"
            },
            "zh-CN": {
              singular: "选择 {TIER_NAME}"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.Text, {
        variant: "heading-sm",
        fontWeight: "medium",
        color: "text-primary",
        textAlign: "center",
        children: (0, _v6.translate)({
          singular: "Unlock more tools to create, manage, and share video.",
          dictionary: {
            es: {
              singular: "Accede a más herramientas para crear, gestionar y compartir videos."
            },
            "de-DE": {
              singular: "Schalten Sie weitere Tools frei, um Videos zu erstellen, zu verwalten und zu teilen."
            },
            "fr-FR": {
              singular: "Accédez à davantage d'outils pour créer, gérer et partager des vidéos."
            },
            "ja-JP": {
              singular: "動画の作成・管理・共有に役立つ追加ツールを利用できます。"
            },
            "ko-KR": {
              singular: "동영상을 제작, 관리 및 공유하기 위한 추가 도구를 이용해 보세요."
            },
            "pt-BR": {
              singular: "Desbloqueie mais ferramentas para criar, gerenciar e compartilhar vídeos."
            },
            "zh-CN": {
              singular: "解锁更多用于创建、管理和分享视频的工具。"
            }
          }
        })
      })]
    });
  }
  _v0.s(["ComparisonPaywallHeader", 0, _v8], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13({
    planName: _v0,
    description: _v1,
    price: _v2,
    billingInfo: _v3,
    seatCount: _v4,
    seatIcon: _v5,
    storageAmount: _v6,
    keyFeaturesLabel: _v7,
    entitlements: _v8,
    isCurrentPlan: _v9 = !1,
    isRecommended: _v10 = !1,
    compact: _v11 = !1,
    fillHeight: _v12 = !1,
    isDisabled: _v13 = !1,
    paywallTracking: _v14,
    subscriptionTier: _v15,
    isTrial: _v16 = !1
  }) {
    let _v17 = () => {
        if (!_v15 || !_v14) return;
        let _v0 = (0, _v12.buildCheckoutUrl)({
          ..._v14,
          tier: _v15,
          isTrial: _v16
        });
        window.location.assign(_v0);
      },
      _v18 = _v16 ? (0, _v6.translate)({
        singular: "Start free trial",
        dictionary: {
          es: {
            singular: "Iniciar prueba gratuita"
          },
          "de-DE": {
            singular: "Kostenloses Probeabo starten"
          },
          "fr-FR": {
            singular: "Commencez l'essai gratuit"
          },
          "ja-JP": {
            singular: "無料トライアルを始める"
          },
          "ko-KR": {
            singular: "무료 체험 시작"
          },
          "pt-BR": {
            singular: "Faça um teste grátis"
          },
          "zh-CN": {
            singular: "开始免费试用"
          }
        }
      }) : (0, _v6.translate)({
        singular: "Join Vimeo {PLAN_NAME}",
        replacements: {
          PLAN_NAME: _v0
        },
        dictionary: {
          es: {
            singular: "Únete a Vimeo {PLAN_NAME}"
          },
          "de-DE": {
            singular: "Treten Sie Vimeo {PLAN_NAME} bei"
          },
          "fr-FR": {
            singular: "Rejoignez Vimeo {PLAN_NAME}"
          },
          "ja-JP": {
            singular: "Vimeo {PLAN_NAME} に加入する"
          },
          "ko-KR": {
            singular: "Vimeo {PLAN_NAME}에 가입하기"
          },
          "pt-BR": {
            singular: "Assine o Vimeo {PLAN_NAME}"
          },
          "zh-CN": {
            singular: "加入 Vimeo {PLAN_NAME}"
          }
        }
      });
    return _v10 ? (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      width: "100%",
      height: _v12 ? "100%" : void 0,
      bg: "#875be5",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "#875be5",
      borderRadius: "2xl",
      overflow: "hidden",
      children: [(0, _v1.jsx)(_v4.Flex, {
        alignItems: "center",
        justifyContent: "center",
        height: "24px",
        px: "24px",
        children: (0, _v1.jsx)(_v5.Text, {
          fontSize: "heading-2xs",
          fontWeight: "medium",
          color: "white",
          textAlign: "center",
          children: (0, _v6.translate)({
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
          })
        })
      }), (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        gap: "md",
        p: "md",
        borderRadius: "2xl",
        bg: "surface",
        width: "100%",
        flex: "1",
        children: _v14({
          planName: _v0,
          description: _v1,
          price: _v2,
          billingInfo: _v3,
          seatCount: _v4,
          seatIcon: _v5,
          storageAmount: _v6,
          keyFeaturesLabel: _v7,
          entitlements: _v8,
          isCurrentPlan: !1,
          isRecommended: !0,
          isDisabled: _v13,
          compact: _v11,
          ctaLabel: _v18,
          handleCtaClick: _v17
        })
      })]
    }) : (0, _v1.jsx)(_v4.Flex, {
      direction: "column",
      width: "100%",
      height: _v12 ? "100%" : void 0,
      position: "relative",
      children: (0, _v1.jsx)(_v4.Flex, {
        direction: "column",
        gap: "md",
        p: "md",
        borderWidth: "2px",
        borderStyle: "solid",
        borderColor: "stroke",
        borderRadius: "2xl",
        bg: "surface",
        opacity: _v9 ? .7 : 1,
        width: "100%",
        flex: _v12 ? "1" : void 0,
        children: _v14({
          planName: _v0,
          description: _v1,
          price: _v2,
          billingInfo: _v3,
          seatCount: _v4,
          seatIcon: _v5,
          storageAmount: _v6,
          keyFeaturesLabel: _v7,
          entitlements: _v8,
          isCurrentPlan: _v9,
          isRecommended: !1,
          isDisabled: _v13,
          compact: _v11,
          ctaLabel: _v18,
          handleCtaClick: _v17
        })
      })
    });
  }
  function _v14({
    planName: _v0,
    description: _v1,
    price: _v2,
    billingInfo: _v3,
    seatCount: _v4,
    seatIcon: _v5,
    storageAmount: _v6,
    keyFeaturesLabel: _v7,
    entitlements: _v8,
    isCurrentPlan: _v9,
    isRecommended: _v10,
    isDisabled: _v11,
    compact: _v12,
    ctaLabel: _v13,
    handleCtaClick: _v14
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        maxHeight: _v12 ? "62px" : void 0,
        children: [(0, _v1.jsxs)(_v4.Flex, {
          gap: "sm",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v5.Text, {
            variant: "heading-md",
            letterSpacing: "-0.04em",
            children: _v0
          }), _v9 && (0, _v1.jsx)(_v9.Badge, {
            variant: "secondary",
            size: "sm",
            children: (0, _v6.translate)({
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
          })]
        }), !_v12 && (0, _v1.jsx)(_v5.Text, {
          fontSize: "body-md",
          color: "text-primary",
          lineHeight: "1.2",
          children: _v1
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        gap: "xs",
        minHeight: "61px",
        children: [(0, _v1.jsx)(_v5.Text, {
          variant: "heading-xl",
          letterSpacing: "-0.04em",
          children: _v2
        }), !_v12 && _v3]
      }), _v12 ? null : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v4.Flex, {
          direction: "column",
          gap: "sm",
          pt: "sm",
          children: _v10 ? (0, _v1.jsx)(_v10.Button, {
            size: "md",
            variant: "primary",
            width: "100%",
            onClick: _v14,
            isDisabled: _v11,
            children: _v13
          }) : (0, _v1.jsx)(_v3.Box, {
            height: "40px",
            opacity: 0
          })
        }), (0, _v1.jsx)(_v3.Box, {
          flex: "1"
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "8px",
          pb: "sm",
          children: [(0, _v1.jsxs)(_v4.Flex, {
            gap: "xs",
            alignItems: "center",
            children: [_v5, (0, _v1.jsx)(_v5.Text, {
              fontSize: "body-md",
              children: _v4
            })]
          }), (0, _v1.jsxs)(_v4.Flex, {
            gap: "xs",
            alignItems: "start",
            children: [(0, _v1.jsx)(_v3.Box, {
              pt: "2px",
              flexShrink: 0,
              children: (0, _v1.jsx)(_v15, {})
            }), (0, _v1.jsx)(_v5.Text, {
              fontSize: "body-md",
              children: _v6
            })]
          }), (0, _v1.jsx)(_v5.Text, {
            variant: "heading-xs",
            lineHeight: "18px",
            children: _v7
          }), _v8.map((_v0, _v1) => (0, _v1.jsxs)(_v4.Flex, {
            gap: "xs",
            alignItems: "center",
            visibility: _v0.text ? "visible" : "hidden",
            children: [(0, _v1.jsx)(_v3.Box, {
              flexShrink: 0,
              width: "16px",
              height: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              children: (0, _v1.jsx)(_v11.Checkmark, {
                width: 16,
                height: 16
              })
            }), (0, _v1.jsx)(_v5.Text, {
              fontSize: "body-md",
              lineHeight: "1.4",
              children: _v0.text || " "
            })]
          }, _v1))]
        })]
      })]
    });
  }
  function _v15() {
    return (0, _v1.jsxs)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [(0, _v1.jsx)("path", {
        d: "M3 4.5C3 3.67157 5.23858 3 8 3C10.7614 3 13 3.67157 13 4.5C13 5.32843 10.7614 6 8 6C5.23858 6 3 5.32843 3 4.5Z",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M3 7C3 7 3 6.5 3 6C3 6 5.23858 7 8 7C10.7614 7 13 6 13 6C13 6.5 13 7 13 7C13 7.82843 10.7614 8.5 8 8.5C5.23858 8.5 3 7.82843 3 7Z",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M3 9.5C3 9.5 3 9 3 8.5C3 8.5 5.23858 9.5 8 9.5C10.7614 9.5 13 8.5 13 8.5C13 9 13 9.5 13 9.5C13 10.3284 10.7614 11 8 11C5.23858 11 3 10.3284 3 9.5Z",
        fill: "currentColor"
      }), (0, _v1.jsx)("path", {
        d: "M3 12C3 12 3 11.5 3 11C3 11 5.23858 12 8 12C10.7614 12 13 11 13 11C13 11.5 13 12 13 12C13 12.8284 10.7614 13.5 8 13.5C5.23858 13.5 3 12.8284 3 12Z",
        fill: "currentColor"
      })]
    });
  }
  var _v16 = _v0.i(0);
  function _v17({
    paywallTracking: _v0
  }) {
    return (0, _v1.jsx)(_v10.Button, {
      size: "lg",
      variant: "tertiary",
      width: "100%",
      onClick: () => {
        window.location.assign((0, _v16.buildUpgradePlanUrl)(_v0));
      },
      children: (0, _v6.translate)({
        singular: "Other Plans",
        dictionary: {
          es: {
            singular: "Otros planes"
          },
          "de-DE": {
            singular: "Andere Pläne"
          },
          "fr-FR": {
            singular: "Autres forfaits"
          },
          "ja-JP": {
            singular: "その他のプラン"
          },
          "ko-KR": {
            singular: "다른 요금제"
          },
          "pt-BR": {
            singular: "Outros planos"
          },
          "zh-CN": {
            singular: "其他套餐"
          }
        }
      })
    });
  }
  _v0.s(["OtherPlansButton", 0, _v17], 0);
  let _v18 = {
      free: (0, _v6.translate)({
        singular: "2k only",
        dictionary: {
          es: {
            singular: "Solo 2k"
          },
          "de-DE": {
            singular: "Nur 2k"
          },
          "fr-FR": {
            singular: "2k uniquement"
          },
          "ja-JP": {
            singular: "2kのみ"
          },
          "ko-KR": {
            singular: "2k 전용"
          },
          "pt-BR": {
            singular: "somente 2k"
          },
          "zh-CN": {
            singular: "仅限 2k"
          }
        }
      }),
      starter: (0, _v6.translate)({
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
      }),
      standard: (0, _v6.translate)({
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
      }),
      advanced: (0, _v6.translate)({
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
    _v19 = {
      free: !1,
      starter: !1,
      standard: !1,
      advanced: (0, _v6.translate)({
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
    _v20 = {
      free: (0, _v6.translate)({
        singular: "Try Vimeo for free",
        dictionary: {
          es: {
            singular: "Prueba Vimeo gratis"
          },
          "de-DE": {
            singular: "Vimeo kostenlos ausprobieren"
          },
          "fr-FR": {
            singular: "Essayez Vimeo gratuitement"
          },
          "ja-JP": {
            singular: "Vimeoを無料で試す"
          },
          "ko-KR": {
            singular: "Vimeo를 무료로 이용해 보세요"
          },
          "pt-BR": {
            singular: "Experimente o Vimeo gratuitamente"
          },
          "zh-CN": {
            singular: "免费体验 Vimeo"
          }
        }
      }),
      starter: (0, _v6.translate)({
        singular: "Host and share videos with ease",
        dictionary: {
          es: {
            singular: "Aloja y comparte vídeos con facilidad"
          },
          "de-DE": {
            singular: "Videos mühelos hosten und teilen"
          },
          "fr-FR": {
            singular: "Hébergez et partagez des vidéos en toute simplicité"
          },
          "ja-JP": {
            singular: "動画を簡単にホストして共有する"
          },
          "ko-KR": {
            singular: "동영상을 손쉽게 호스팅하고 공유하세요"
          },
          "pt-BR": {
            singular: "Hospede e compartilhe vídeos com facilidade"
          },
          "zh-CN": {
            singular: "轻松托管并分享视频"
          }
        }
      }),
      standard: (0, _v6.translate)({
        singular: "Elevate your brand with custom video experiences",
        dictionary: {
          es: {
            singular: "Eleva tu marca con experiencias de vídeo personalizadas"
          },
          "de-DE": {
            singular: "Heben Sie Ihre Marke mit maßgeschneiderten Videoerlebnissen hervor"
          },
          "fr-FR": {
            singular: "Sublimez votre marque avec des expériences vidéo personnalisées"
          },
          "ja-JP": {
            singular: "カスタム動画体験でブランド価値を高める"
          },
          "ko-KR": {
            singular: "맞춤형 비디오 경험으로 브랜드 가치를 높이세요"
          },
          "pt-BR": {
            singular: "Eleve sua marca com experiências de vídeo personalizadas"
          },
          "zh-CN": {
            singular: "通过定制视频体验提升您的品牌影响力"
          }
        }
      }),
      advanced: (0, _v6.translate)({
        singular: "Drive engagement with Vimeo AI and events",
        dictionary: {
          es: {
            singular: "Impulse la interacción con Vimeo AI y eventos"
          },
          "de-DE": {
            singular: "Steigern Sie die Interaktion mit Vimeo-KI und Events"
          },
          "fr-FR": {
            singular: "Boostez l'engagement du public avec Video IA et les événements"
          },
          "ja-JP": {
            singular: "Vimeo AIとイベントでエンゲージメントを促進"
          },
          "ko-KR": {
            singular: "Vimeo AI 및 이벤트를 통한 참여 유도"
          },
          "pt-BR": {
            singular: "Promova o engajamento com o Vimeo AI e eventos"
          },
          "zh-CN": {
            singular: "利用 Vimeo AI 和活动增加参与度"
          }
        }
      })
    },
    _v21 = {
      free: [(0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      starter: [(0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      }), (0, _v6.translate)({
        singular: "Review & collaboration tools",
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
            singular: "レビューと共同作業ツール"
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
      }), (0, _v6.translate)({
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
      })],
      standard: [(0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      })],
      advanced: [(0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      }), (0, _v6.translate)({
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
      })]
    };
  function _v22(_v0) {
    return _v0 ? _v20[_v0] ?? "" : "";
  }
  function _v23(_v0) {
    let _v1 = (_v0 && ("free" === _v0 || "starter" === _v0 || "standard" === _v0 || "advanced" === _v0) ? _v21[_v0] : []).slice(0, 4).map(_v0 => ({
      text: _v0
    }));
    for (; _v1.length < 4;) _v1.push({
      text: ""
    });
    return _v1;
  }
  function _v24({
    currentPlan: _v0,
    targetPlan: _v1,
    currentTier: _v2,
    targetTier: _v3
  }) {
    return [{
      key: "seats",
      name: (0, _v6.translate)({
        singular: "Seats",
        dictionary: {
          es: {
            singular: "Plazas"
          },
          "de-DE": {
            singular: "Plätze"
          },
          "fr-FR": {
            singular: "Places"
          },
          "ja-JP": {
            singular: "利用者数"
          },
          "ko-KR": {
            singular: "사용자 수"
          },
          "pt-BR": {
            singular: "Assentos"
          },
          "zh-CN": {
            singular: "席位"
          }
        }
      }),
      tooltip: (0, _v6.translate)({
        singular: "The number of users included in your plan that can upload, manage, and share videos.",
        dictionary: {
          es: {
            singular: "El número de usuarios incluidos en tu plan que pueden subir, gestionar y compartir videos."
          },
          "de-DE": {
            singular: "Die Anzahl der in Ihrem Tarif enthaltenen Benutzer, die Videos hochladen, verwalten und teilen können."
          },
          "fr-FR": {
            singular: "Le nombre d'utilisateurs inclus dans votre forfait qui peuvent téléverser, gérer et partager des vidéos."
          },
          "ja-JP": {
            singular: "プランに含まれる、動画をアップロード、管理、共有できるユーザー数です。"
          },
          "ko-KR": {
            singular: "귀하의 요금제에 포함되어 동영상을 업로드, 관리 및 공유할 수 있는 사용자 수입니다."
          },
          "pt-BR": {
            singular: "O número de usuários incluídos em seu plano que podem enviar, gerenciar e compartilhar vídeos."
          },
          "zh-CN": {
            singular: "计划中包含的、可上传、管理和分享视频的用户数量。"
          }
        }
      }),
      currentValue: _v28(_v0),
      targetValue: _v28(_v1)
    }, {
      key: "storage",
      name: (0, _v6.translate)({
        singular: "Storage",
        dictionary: {
          es: {
            singular: "Almacenamiento:"
          },
          "de-DE": {
            singular: "Speicherplatz"
          },
          "fr-FR": {
            singular: "Stockage"
          },
          "ja-JP": {
            singular: "ストレージ"
          },
          "ko-KR": {
            singular: "저장 공간"
          },
          "pt-BR": {
            singular: "Armazenamento"
          },
          "zh-CN": {
            singular: "存储"
          }
        }
      }),
      tooltip: (0, _v6.translate)({
        singular: "The total amount of video storage available on your plan.",
        dictionary: {
          es: {
            singular: "La cantidad total de almacenamiento de videos disponible en tu plan."
          },
          "de-DE": {
            singular: "Die gesamte verfügbare Videospeicherkapazität in Ihrem Tarif."
          },
          "fr-FR": {
            singular: "La quantité totale de stockage vidéo disponible sur votre forfait."
          },
          "ja-JP": {
            singular: "プランで利用可能な動画ストレージの合計容量です。"
          },
          "ko-KR": {
            singular: "귀하의 요금제에서 사용 가능한 전체 동영상 저장 용량입니다."
          },
          "pt-BR": {
            singular: "A quantidade total de armazenamento de vídeo disponível no seu plano."
          },
          "zh-CN": {
            singular: "计划中可用的视频总存储量。"
          }
        }
      }),
      currentValue: _v29(_v0),
      targetValue: _v29(_v1)
    }, {
      key: "screen_recording",
      name: (0, _v6.translate)({
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
      }),
      tooltip: (0, _v6.translate)({
        singular: "Record your screen directly from Vimeo and share instantly.",
        dictionary: {
          es: {
            singular: "Graba tu pantalla directamente desde Vimeo y compártela al instante."
          },
          "de-DE": {
            singular: "Nehmen Sie Ihren Bildschirm direkt in Vimeo auf und teilen Sie ihn sofort."
          },
          "fr-FR": {
            singular: "Enregistrez votre écran directement depuis Vimeo et partagez instantanément."
          },
          "ja-JP": {
            singular: "Vimeoから直接画面を録画して、すぐに共有できます。"
          },
          "ko-KR": {
            singular: "Vimeo에서 화면을 직접 녹화하고 즉시 공유하세요."
          },
          "pt-BR": {
            singular: "Grave sua tela diretamente no Vimeo e compartilhe instantaneamente."
          },
          "zh-CN": {
            singular: "直接在 Vimeo 上录制屏幕并即时分享。"
          }
        }
      }),
      currentValue: _v31(_v18, _v2),
      targetValue: _v31(_v18, _v3)
    }, {
      key: "virtual_events",
      name: (0, _v6.translate)({
        singular: "Virtual events",
        dictionary: {
          es: {
            singular: "Eventos virtuales"
          },
          "de-DE": {
            singular: "Virtuelle Events"
          },
          "fr-FR": {
            singular: "Événements virtuels"
          },
          "ja-JP": {
            singular: "バーチャルイベント"
          },
          "ko-KR": {
            singular: "가상 이벤트"
          },
          "pt-BR": {
            singular: "Eventos virtuais"
          },
          "zh-CN": {
            singular: "虚拟活动"
          }
        }
      }),
      tooltip: (0, _v6.translate)({
        singular: "Host live-streamed events with interactive tools like Q&A, polls, and chat.",
        dictionary: {
          es: {
            singular: "Organiza eventos transmitidos en directo con herramientas interactivas como preguntas y respuestas, encuestas y chat."
          },
          "de-DE": {
            singular: "Veranstalten Sie live gestreamte Events mit interaktiven Tools wie Q&A, Umfragen und Chat."
          },
          "fr-FR": {
            singular: "Organisez des événements diffusés en direct avec des outils interactifs tels que Q&A, sondages et chat."
          },
          "ja-JP": {
            singular: "Q&A、投票、チャットなどのインタラクティブなツールを使って、ライブ配信イベントを主催できます。"
          },
          "ko-KR": {
            singular: "Q&A, 설문조사 및 채팅과 같은 인터랙티브 도구로 라이브 스트리밍 이벤트를 주최하세요."
          },
          "pt-BR": {
            singular: "Hospede eventos transmitidos ao vivo com ferramentas interativas como Q&A, enquetes e chat."
          },
          "zh-CN": {
            singular: "使用问答、投票和聊天等互动工具承办直播活动。"
          }
        }
      }),
      currentValue: _v31(_v19, _v2),
      targetValue: _v31(_v19, _v3)
    }, {
      key: "bandwidth",
      name: (0, _v6.translate)({
        singular: "Bandwidth",
        dictionary: {
          es: {
            singular: "Ancho de banda"
          },
          "de-DE": {
            singular: "Bandbreite"
          },
          "fr-FR": {
            singular: "Bande passante"
          },
          "ja-JP": {
            singular: "転送量"
          },
          "ko-KR": {
            singular: "대역폭"
          },
          "pt-BR": {
            singular: "Largura de banda"
          },
          "zh-CN": {
            singular: "带宽"
          }
        }
      }),
      tooltip: (0, _v6.translate)({
        singular: "The amount of data that can be streamed to viewers during your plan’s billing period.",
        dictionary: {
          es: {
            singular: "La cantidad de datos que se pueden transmitir a los espectadores durante el período de facturación de su plan."
          },
          "de-DE": {
            singular: "Die Datenmenge, die während des Abrechnungszeitraums Ihres Tarifs an Zuschauer gestreamt werden kann."
          },
          "fr-FR": {
            singular: "La quantité de données pouvant être diffusées en continu aux spectateurs pendant la période de facturation de votre forfait."
          },
          "ja-JP": {
            singular: "プランの請求期間中に視聴者へストリーミング可能なデータ量。"
          },
          "ko-KR": {
            singular: "요금제의 청구 기간 동안 시청자에게 스트리밍할 수 있는 데이터 양."
          },
          "pt-BR": {
            singular: "A quantidade de dados que pode ser transmitida aos espectadores durante o período de faturamento do seu plano."
          },
          "zh-CN": {
            singular: "在您的套餐计费周期内可向观众传输的数据量。"
          }
        }
      }),
      currentValue: _v30(_v0),
      targetValue: _v30(_v1)
    }];
  }
  function _v25(_v0, _v1, _v2) {
    return _v0.find(_v0 => _v0.key === _v1)?.[_v2] ?? "";
  }
  function _v26(_v0) {
    if ("string" != typeof _v0) return "";
    let _v1 = Number(_v0);
    return !Number.isFinite(_v1) || _v1 <= 0 ? _v0 : (0, _v6.translate)({
      singular: "{COUNT} user",
      plural: "{COUNT} users",
      count: _v1,
      replacements: {
        COUNT: _v1
      },
      dictionary: {
        es: {
          singular: "{COUNT} usuario",
          plural: "{COUNT} usuarios"
        },
        "de-DE": {
          singular: "{COUNT} Benutzer",
          plural: "{COUNT} Benutzer"
        },
        "fr-FR": {
          singular: "{COUNT} utilisateur",
          plural: "{COUNT} utilisateurs"
        },
        "ja-JP": {
          singular: "{COUNT} ユーザー",
          plural: "{COUNT} ユーザー"
        },
        "ko-KR": {
          singular: "{COUNT}명 사용자",
          plural: "{COUNT}명 사용자"
        },
        "pt-BR": {
          singular: "{COUNT} usuário",
          plural: "{COUNT} usuários"
        },
        "zh-CN": {
          singular: "{COUNT} 用户",
          plural: "{COUNT} 用户"
        }
      }
    });
  }
  function _v27(_v0) {
    return "string" == typeof _v0 ? _v0 : "";
  }
  function _v28(_v0) {
    let _v1 = _v0?.metadata?.entitlements?.params?.teamSeats;
    return "number" == typeof _v1 && _v1 > 0 ? String(_v1) : "";
  }
  function _v29(_v0) {
    let _v1 = _v0?.metadata?.entitlements?.params;
    return _v1?.restrictedVideoStorageLimit ?? _v1?.videoStoragePeriodicQuota ?? "";
  }
  function _v30(_v0) {
    let _v1 = _v0?.metadata?.entitlements?.params?.bandwidth;
    if (_v1?.periodicQuota) {
      let _v0 = (0, _v6.translate)({
        singular: "month",
        dictionary: {
          es: {
            singular: "mes"
          },
          "de-DE": {
            singular: "Monat"
          },
          "fr-FR": {
            singular: "mois"
          },
          "ja-JP": {
            singular: "月"
          },
          "ko-KR": {
            singular: "월"
          },
          "pt-BR": {
            singular: "Mês"
          },
          "zh-CN": {
            singular: "月"
          }
        }
      });
      return "year" === _v1.quotaPeriod && (_v0 = (0, _v6.translate)({
        singular: "year",
        dictionary: {
          es: {
            singular: "año"
          },
          "de-DE": {
            singular: "Jahr"
          },
          "fr-FR": {
            singular: "année"
          },
          "ja-JP": {
            singular: "年"
          },
          "ko-KR": {
            singular: "년"
          },
          "pt-BR": {
            singular: "Ano"
          },
          "zh-CN": {
            singular: "年"
          }
        }
      })), (0, _v6.translate)({
        singular: "{BANDWIDTH} per {PERIOD}",
        replacements: {
          BANDWIDTH: _v1.periodicQuota,
          PERIOD: _v0
        },
        dictionary: {
          es: {
            singular: "{BANDWIDTH} por {PERIOD}"
          },
          "de-DE": {
            singular: "{BANDWIDTH} pro {PERIOD}"
          },
          "fr-FR": {
            singular: "{BANDWIDTH} par {PERIOD}"
          },
          "ja-JP": {
            singular: "{PERIOD}あたり{BANDWIDTH}"
          },
          "ko-KR": {
            singular: "{BANDWIDTH} / {PERIOD}"
          },
          "pt-BR": {
            singular: "{BANDWIDTH} por {PERIOD}"
          },
          "zh-CN": {
            singular: "{BANDWIDTH} 每 {PERIOD}"
          }
        }
      });
    }
    return "";
  }
  function _v31(_v0, _v1) {
    return function (_v0, _v1) {
      if (_v1) return _v0[_v1];
    }(_v0, _v1) ?? "";
  }
  function _v32() {
    return (0, _v1.jsx)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v1.jsx)("path", {
        d: "M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8ZM8 9C5.79086 9 2 10.1193 2 12.5V14H14V12.5C14 10.1193 10.2091 9 8 9Z",
        fill: "currentColor"
      })
    });
  }
  function _v33() {
    return (0, _v1.jsx)("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: (0, _v1.jsx)("path", {
        d: "M6 7C7.38071 7 8.5 5.88071 8.5 4.5C8.5 3.11929 7.38071 2 6 2C4.61929 2 3.5 3.11929 3.5 4.5C3.5 5.88071 4.61929 7 6 7ZM10 7C11.1046 7 12 6.10457 12 5C12 3.89543 11.1046 3 10 3C9.44772 3 8.94772 3.22386 8.58579 3.58579C9.16064 4.16064 9.5 4.94772 9.5 5.5C9.5 6.05228 9.16064 6.83936 8.58579 7.41421C8.94772 7.77614 9.44772 8 10 8V7ZM6 8C3.79086 8 1 9.11929 1 11V13H11V11C11 9.11929 8.20914 8 6 8ZM11 8.5C12.6569 9.34315 14 10.1193 14 11.5V13H12V11C12 9.93913 11.6839 9.11929 11 8.5Z",
        fill: "currentColor"
      })
    });
  }
  _v0.s(["getCardEntitlementsForTier", 0, _v23, "getComparisonFeatures", 0, _v24, "getFeatureValue", 0, _v25, "getSeatCountLabel", 0, _v26, "getStorageLabel", 0, _v27, "getSubtitleForTier", 0, _v22], 0), _v0.s(["CardComparisonPaywall", 0, function ({
    tier: _v0,
    currentTier: _v1,
    paywallTracking: _v2,
    isUserEligibleForFreeTrial: _v3 = !1
  }) {
    var _v4;
    let _v5,
      _v6 = (0, _v7.useGetSubscriptionPlansData)(["free", "starter", "standard", "advanced"], void 0, !1),
      _v7 = _v6?.find(_v0 => _v0.tier === _v1) ?? _v6?.find(_v0 => _v0.metadata?.interactions?.purchase?.status === "purchased"),
      _v8 = _v6?.find(_v0 => _v0.tier === _v0) ?? _v6?.find(_v0 => "starter" === _v0.tier || "standard" === _v0.tier || "advanced" === _v0.tier),
      _v9 = !!_v8?.metadata?.interactions?.purchase?.uri?.freeTrial && _v3,
      _v10 = !!_v8,
      _v11 = _v8?.currency?.currencyCode ?? _v7?.currency?.currencyCode ?? "USD",
      _v12 = _v7?.tier === "free" ? (_v4 = _v11, _v5 = (0, _v6.getCurrentLocale)(), new Intl.NumberFormat(_v5, {
        style: "currency",
        currency: _v4,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(0)) : _v7?.metadata?.purchasedProduct?.displayPriceFormatted ?? _v7?.priceFormatted?.annualMonthly ?? "",
      _v13 = _v8?.priceFormatted?.annualMonthly ?? "",
      _v14 = _v8?.priceFormatted?.monthly ?? "",
      _v15 = _v8?.name ?? (0, _v2.default)(`${_v0}`),
      _v16 = _v7?.name ?? "",
      _v17 = _v22(_v7?.tier),
      _v18 = _v22(_v8?.tier ?? _v0),
      _v19 = (0, _v6.translate)({
        singular: "Everything in {CURRENT_TIER}, plus:",
        replacements: {
          CURRENT_TIER: _v16 || (0, _v6.translate)({
            singular: "your current plan",
            dictionary: {
              es: {
                singular: "tu plan actual"
              },
              "de-DE": {
                singular: "Ihr aktueller Tarif"
              },
              "fr-FR": {
                singular: "votre forfait actuel"
              },
              "ja-JP": {
                singular: "現在のプラン"
              },
              "ko-KR": {
                singular: "현재 요금제"
              },
              "pt-BR": {
                singular: "seu plano atual"
              },
              "zh-CN": {
                singular: "您当前的计划"
              }
            }
          })
        },
        dictionary: {
          es: {
            singular: "Todo lo incluido en {CURRENT_TIER}, además:"
          },
          "de-DE": {
            singular: "Alles in {CURRENT_TIER} und zusätzlich:"
          },
          "fr-FR": {
            singular: "Tout ce qui figure dans {CURRENT_TIER}, plus :"
          },
          "ja-JP": {
            singular: "{CURRENT_TIER} のすべて, さらに:"
          },
          "ko-KR": {
            singular: "{CURRENT_TIER}에 포함된 모든 항목에 더하여:"
          },
          "pt-BR": {
            singular: "Tudo do {CURRENT_TIER}, além de:"
          },
          "zh-CN": {
            singular: "包含 {CURRENT_TIER} 的所有内容，外加："
          }
        }
      }),
      _v20 = _v24({
        currentPlan: _v7,
        targetPlan: _v8,
        currentTier: _v7?.tier,
        targetTier: _v0
      }),
      _v21 = _v26(_v25(_v20, "seats", "currentValue")),
      _v22 = _v26(_v25(_v20, "seats", "targetValue")),
      _v23 = _v27(_v25(_v20, "storage", "currentValue")),
      _v24 = _v27(_v25(_v20, "storage", "targetValue")),
      _v25 = _v23(_v8?.tier ?? _v0),
      _v26 = _v23(_v7?.tier);
    return (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      maxWidth: "600px",
      gap: "24px",
      pt: {
        base: "24px",
        md: "0"
      },
      pb: {
        base: "40px",
        md: "24px"
      },
      mx: "auto",
      children: [(0, _v1.jsx)(_v8, {
        tierName: _v15
      }), (0, _v1.jsxs)(_v4.Flex, {
        display: {
          base: "none",
          md: "flex"
        },
        alignItems: "stretch",
        pr: "39px",
        width: "100%",
        children: [(0, _v1.jsx)(_v4.Flex, {
          flex: "1",
          mr: "-39px",
          pt: "24px",
          minWidth: "0",
          direction: "column",
          children: (0, _v1.jsx)(_v13, {
            planName: _v16,
            description: _v17,
            price: _v12,
            seatCount: _v21,
            seatIcon: (0, _v1.jsx)(_v32, {}),
            storageAmount: _v23,
            keyFeaturesLabel: (0, _v6.translate)({
              singular: "Key features",
              dictionary: {
                es: {
                  singular: "Funciones clave"
                },
                "de-DE": {
                  singular: "Die wichtigsten Funktionen"
                },
                "fr-FR": {
                  singular: "Fonctionnalités principales"
                },
                "ja-JP": {
                  singular: "主な機能"
                },
                "ko-KR": {
                  singular: "주요 기능"
                },
                "pt-BR": {
                  singular: "Principais recursos"
                },
                "zh-CN": {
                  singular: "主要特点"
                }
              }
            }),
            entitlements: _v26,
            isCurrentPlan: !0,
            fillHeight: !0
          })
        }), (0, _v1.jsx)(_v4.Flex, {
          flex: "1",
          mr: "-39px",
          minWidth: "0",
          zIndex: 1,
          direction: "column",
          children: (0, _v1.jsx)(_v13, {
            planName: _v15,
            description: _v18,
            price: _v13,
            billingInfo: (0, _v1.jsxs)(_v4.Flex, {
              direction: "column",
              fontSize: "body-sm",
              color: "text-secondary",
              lineHeight: "1.2",
              children: [(0, _v1.jsx)(_v5.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v6.translate)({
                  singular: "per month, billed annually",
                  dictionary: {
                    es: {
                      singular: "al mes facturados anualmente"
                    },
                    "de-DE": {
                      singular: "pro Monat, mit jährlicher Abrechnung"
                    },
                    "fr-FR": {
                      singular: "par mois, facturé annuellement"
                    },
                    "ja-JP": {
                      singular: "/月、年払い"
                    },
                    "ko-KR": {
                      singular: "매월, 연간 결제"
                    },
                    "pt-BR": {
                      singular: "por mês, cobrança anual"
                    },
                    "zh-CN": {
                      singular: "每月，按年计费"
                    }
                  }
                })
              }), _v14 ? (0, _v1.jsx)(_v5.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v6.translate)({
                  singular: "or {PRICE} billed monthly",
                  replacements: {
                    PRICE: _v14
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
                })
              }) : null]
            }),
            seatCount: _v22,
            seatIcon: (0, _v1.jsx)(_v33, {}),
            storageAmount: _v24,
            keyFeaturesLabel: _v19,
            entitlements: _v25,
            isRecommended: !0,
            isDisabled: !_v10,
            paywallTracking: _v2,
            subscriptionTier: _v0,
            isTrial: _v9,
            fillHeight: !0
          })
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        display: {
          base: "flex",
          md: "none"
        },
        direction: "column",
        gap: "md",
        width: "100%",
        px: "md",
        mt: "sm",
        children: [(0, _v1.jsx)(_v3.Box, {
          children: (0, _v1.jsx)(_v13, {
            planName: _v15,
            description: _v18,
            price: _v13,
            billingInfo: (0, _v1.jsxs)(_v4.Flex, {
              direction: "column",
              fontSize: "body-sm",
              color: "text-secondary",
              lineHeight: "1.2",
              children: [(0, _v1.jsx)(_v5.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v6.translate)({
                  singular: "per month, billed annually",
                  dictionary: {
                    es: {
                      singular: "al mes facturados anualmente"
                    },
                    "de-DE": {
                      singular: "pro Monat, mit jährlicher Abrechnung"
                    },
                    "fr-FR": {
                      singular: "par mois, facturé annuellement"
                    },
                    "ja-JP": {
                      singular: "/月、年払い"
                    },
                    "ko-KR": {
                      singular: "매월, 연간 결제"
                    },
                    "pt-BR": {
                      singular: "por mês, cobrança anual"
                    },
                    "zh-CN": {
                      singular: "每月，按年计费"
                    }
                  }
                })
              }), _v14 ? (0, _v1.jsx)(_v5.Text, {
                fontSize: "body-sm",
                color: "text-secondary",
                children: (0, _v6.translate)({
                  singular: "or {PRICE} billed monthly",
                  replacements: {
                    PRICE: _v14
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
                })
              }) : null]
            }),
            seatCount: _v22,
            seatIcon: (0, _v1.jsx)(_v33, {}),
            storageAmount: _v24,
            keyFeaturesLabel: _v19,
            entitlements: _v25,
            isRecommended: !0,
            isDisabled: !_v10,
            paywallTracking: _v2,
            subscriptionTier: _v0,
            isTrial: _v9
          })
        }), (0, _v1.jsx)(_v3.Box, {
          children: (0, _v1.jsx)(_v13, {
            planName: _v16,
            description: _v17,
            price: _v12,
            seatCount: _v21,
            seatIcon: (0, _v1.jsx)(_v32, {}),
            storageAmount: _v23,
            keyFeaturesLabel: (0, _v6.translate)({
              singular: "Key features",
              dictionary: {
                es: {
                  singular: "Funciones clave"
                },
                "de-DE": {
                  singular: "Die wichtigsten Funktionen"
                },
                "fr-FR": {
                  singular: "Fonctionnalités principales"
                },
                "ja-JP": {
                  singular: "主な機能"
                },
                "ko-KR": {
                  singular: "주요 기능"
                },
                "pt-BR": {
                  singular: "Principais recursos"
                },
                "zh-CN": {
                  singular: "主要特点"
                }
              }
            }),
            entitlements: _v26,
            isCurrentPlan: !0
          })
        })]
      }), (0, _v1.jsx)(_v4.Flex, {
        width: "100%",
        maxWidth: "400px",
        mx: "auto",
        pb: {
          base: "sm",
          md: "0"
        },
        children: (0, _v1.jsx)(_v17, {
          paywallTracking: _v2
        })
      })]
    });
  }], 0);
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  _v0.s(["GenericLimitPaywall", 0, function ({
    tier: _v0 = "starter",
    planName: _v1,
    paywallTracking: _v2,
    isUserEligibleForFreeTrial: _v3 = !1
  }) {
    let _v4 = (0, _v7.useGetSubscriptionPlansData)([_v0], void 0, !1),
      _v5 = _v4?.find(_v0 => _v0.tier === _v0) ?? _v4?.[0],
      _v6 = _v5?.metadata?.entitlements?.params?.videoStoragePeriodicQuota,
      _v7 = !!_v5?.metadata?.interactions?.purchase?.uri?.freeTrial,
      _v8 = (0, _v6.translate)({
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
      _v10 = _v1 ?? (_v0 ? (0, _v2.default)(`${_v0}`) : ""),
      _v11 = (0, _v35.useColorModeValue)("https://i.vimeocdn.com/custom_asset/4a6f0f615c4cf9d30b48f79df970438e", "https://i.vimeocdn.com/custom_asset/edb2ec4f5620a90adb065894bbb08419");
    return (0, _v1.jsxs)(_v4.Flex, {
      direction: "column",
      alignItems: "center",
      width: "100%",
      height: {
        base: "100%",
        md: "auto"
      },
      maxHeight: {
        base: "none",
        md: "calc(100vh - 120px)"
      },
      position: "relative",
      children: [(0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: "400px",
        gap: "24px",
        flex: "1 1 auto",
        pt: {
          base: "24px",
          md: "0"
        },
        pb: "24px",
        mx: {
          base: "auto",
          md: "32px"
        },
        overflowY: "auto",
        children: [(0, _v1.jsx)(_v3.Box, {
          width: "100%",
          maxWidth: "252px",
          maxHeight: "200px",
          minHeight: "120px",
          aspectRatio: "1333/1058",
          children: (0, _v1.jsx)("img", {
            src: _v11,
            alt: "",
            style: {
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }
          })
        }), (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          alignItems: "center",
          gap: "16px",
          width: "100%",
          paddingX: "32px",
          children: [(0, _v1.jsxs)(_v4.Flex, {
            direction: {
              base: "column",
              md: "row"
            },
            alignItems: "center",
            gap: {
              base: "xs",
              md: "8px"
            },
            justifyContent: "center",
            children: [(0, _v1.jsx)(_v5.Text, {
              variant: {
                base: "heading-lg",
                md: _v9 ? "heading-xl" : "heading-2xl"
              },
              whiteSpace: "nowrap",
              children: _v8
            }), (0, _v1.jsx)(_v3.Box, {
              pt: {
                base: "0",
                md: "8px"
              },
              children: (0, _v1.jsx)(_v9.Badge, {
                variant: "upgrade",
                px: "6px",
                fontSize: "heading-xs",
                children: _v10
              })
            })]
          }), (0, _v1.jsx)(_v5.Text, {
            variant: "heading-sm",
            fontWeight: "medium",
            color: "text-primary",
            textAlign: "center",
            children: (0, _v6.translate)({
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
        }), (0, _v1.jsx)(_v34.VStack, {
          gap: "md",
          alignItems: "start",
          width: "100%",
          pt: "16px",
          children: (0, _v39.getFeatures)(_v6).map((_v0, _v1) => (0, _v1.jsx)(_v36.FeatureRow, {
            ..._v0
          }, `row${_v1}`))
        })]
      }), (0, _v1.jsxs)(_v37.PaywallCTAsWrapper, {
        children: [(0, _v1.jsx)(_v38.PurchaseButton, {
          subscriptionTier: _v0,
          isTrial: _v7 && _v3,
          planName: _v10,
          paywallTracking: _v2
        }), (0, _v1.jsx)(_v17, {
          paywallTracking: _v2
        })]
      })]
    });
  }], 0);
}