{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
      "disable privacy": {
        feature: "privacy",
        upsell_name: "privacy_settings_hide_from_vimeo",
        location: "SVV_share_drawer"
      },
      "password privacy": {
        feature: "privacy",
        upsell_name: "privacy_settings_password",
        location: "SVV_share_drawer"
      },
      "unlisted privacy": {
        feature: "privacy",
        upsell_name: "privacy_settings_unlisted_fka_private",
        location: "SVV_share_drawer"
      }
    },
    _v8 = {
      "disable privacy": {
        paywallTrigger: "svv_share_drawer_disable_privacy_button",
        paywallLocation: "single_video_view_share_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      "password privacy": {
        paywallTrigger: "svv_share_drawer_password_privacy_button",
        paywallLocation: "single_video_view_share_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      "unlisted privacy": {
        paywallTrigger: "svv_share_drawer_unlisted_privacy_button",
        paywallLocation: "single_video_view_share_drawer",
        paywallType: "popup",
        paywallFeature: "privacy"
      }
    },
    _v9 = ({
      upsellType: _v0,
      isOpen: _v1,
      onClose: _v2
    }) => {
      let _v3 = (0, _v6.useViewer)(),
        _v4 = {
          hidePlansSummary: !0,
          hasFreeFeaturedBanner: !0,
          headerText: "",
          subHeaderText: "",
          planOverrides: {
            starter: {
              featuresList: [(0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              })]
            },
            standard: {
              featuresList: [(0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              })]
            },
            advanced: {
              featuresList: [(0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              })]
            },
            enterprise: {
              featuresList: [(0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
              }), (0, _v4.translate)({
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
            }
          }
        };
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v5.default, {
          apiUrl: _v3?.apiUrl,
          userConfig: {
            jwt: _v3?.jwt,
            userId: _v3?.user?.id
          },
          templateType: "default",
          onClose: _v2,
          modalConfig: _v4,
          tracking: {
            params: _v7[_v0],
            paywallTracking: _v8[_v0]
          }
        })
      });
    };
  var _v10 = _v0.i(0),
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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    children: _v0,
    showBackButton: _v1,
    showCloseButton: _v2 = !0,
    showPlusButton: _v3 = !1,
    onBackButtonClick: _v4,
    onCloseButtonClick: _v5,
    onPlusButtonClick: _v6,
    disablePlusButton: _v7
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [_v1 && (0, _v1.jsx)(_v23.IconButton, {
      "aria-label": "Back",
      variant: "tertiary",
      size: "sm",
      icon: (0, _v1.jsx)(_v26.ChevronLeft, {}),
      onClick: _v4
    }), (0, _v1.jsx)(_v24.Text, {
      variant: "heading-sm",
      flex: "1",
      wordBreak: "break-word",
      noOfLines: 4,
      children: _v0
    }), _v3 && (0, _v1.jsx)(_v25.Tooltip, {
      label: (0, _v4.translate)({
        singular: "Create review link",
        dictionary: {
          es: {
            singular: "Cree un enlace de revisión"
          },
          "de-DE": {
            singular: "Review-Link erstellen"
          },
          "fr-FR": {
            singular: "Créer un lien de révision"
          },
          "ja-JP": {
            singular: "レビューリンクを作成"
          },
          "ko-KR": {
            singular: "리뷰 링크 생성"
          },
          "pt-BR": {
            singular: "Criar link de revisão"
          },
          "zh-CN": {
            singular: "创建评论链接"
          }
        }
      }),
      isDisabled: _v7,
      placement: "top",
      children: (0, _v1.jsx)(_v23.IconButton, {
        "aria-label": (0, _v4.translate)({
          singular: "Create review link",
          dictionary: {
            es: {
              singular: "Cree un enlace de revisión"
            },
            "de-DE": {
              singular: "Review-Link erstellen"
            },
            "fr-FR": {
              singular: "Créer un lien de révision"
            },
            "ja-JP": {
              singular: "レビューリンクを作成"
            },
            "ko-KR": {
              singular: "리뷰 링크 생성"
            },
            "pt-BR": {
              singular: "Criar link de revisão"
            },
            "zh-CN": {
              singular: "创建评论链接"
            }
          }
        }),
        variant: "tertiary",
        size: "sm",
        icon: (0, _v1.jsx)(_v28.Plus, {}),
        isDisabled: _v7,
        onClick: _v6
      })
    }), _v2 && (0, _v1.jsx)(_v23.IconButton, {
      "aria-label": "Close",
      variant: "tertiary",
      size: "sm",
      icon: (0, _v1.jsx)(_v27.CloseX, {}),
      onClick: _v5
    })]
  });
  _v0.s(["HeaderContent", 0, _v29], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = _v0 => (0, _v1.jsx)(_v30.Center, {
    h: "100%",
    flex: "1",
    ..._v0,
    children: (0, _v1.jsx)(_v31.Spinner, {})
  });
  var _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = _v0 => (0, _v1.jsx)(_v37.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsxs)("g", {
      fill: "currentColor",
      children: [(0, _v1.jsx)("path", {
        d: "M17 9H9V7a3 3 0 0 1 5.12-2.13c.376.384.645.86.78 1.38a1 1 0 1 0 1.94-.5 5.09 5.09 0 0 0-1.31-2.29A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Zm1 10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7Z"
      }), (0, _v1.jsx)("path", {
        d: "M11.293 13.293A1 1 0 0 1 13 14v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 .293-.707Z"
      })]
    })
  });
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = ({
      label: _v0,
      isDisabled: _v1,
      ..._v2
    }) => (0, _v1.jsxs)(_v40.VStack, {
      gap: "2",
      width: (0, _v13.rem)(72),
      children: [(0, _v1.jsx)(_v23.IconButton, {
        "aria-label": _v0,
        variant: "secondary",
        isRound: !0,
        isDisabled: _v1,
        width: (0, _v13.rem)(62),
        height: `${(0, _v13.rem)(62)} !important`,
        ..._v2
      }), (0, _v1.jsx)(_v24.Text, {
        variant: "body-sm",
        textAlign: "center",
        opacity: _v1 ? .5 : 1,
        children: _v0
      })]
    }),
    _v42 = ({
      onClick: _v0,
      hasReviewLinks: _v1 = !1
    }) => {
      let _v2 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.isInputtingPassword),
        {
          videoOwnerCapabilities: {
            hasMultipleReviewLinks: _v3,
            hasProhibitMultipleReviewLinks: _v4,
            regionalDeliveryPublishContentToChina: _v5
          },
          isVideoOwnerCapabilitiesReady: _v6
        } = (0, _v39.useGetVideoOwnerCapabilities)(),
        _v7 = _v6 && _v3 && !_v4,
        _v8 = (0, _v2.useMemo)(() => {
          var _v0;
          return _v0 = {
            showCreateReview: _v7 && !_v1,
            showManageReview: _v7 && _v1,
            showChinaAccess: _v5
          }, [{
            panelType: "EMBED_PANEL",
            label: (0, _v4.translate)({
              singular: "Embed",
              dictionary: {
                es: {
                  singular: "Insertar"
                },
                "de-DE": {
                  singular: "Einbetten"
                },
                "fr-FR": {
                  singular: "Intégration"
                },
                "ja-JP": {
                  singular: "埋め込み"
                },
                "ko-KR": {
                  singular: "임베드"
                },
                "pt-BR": {
                  singular: "Incorporação"
                },
                "zh-CN": {
                  singular: "嵌入"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v33.Code, {})
          }, {
            panelType: "INVITE_PANEL",
            label: _v0?.isTab ? (0, _v4.translate)({
              singular: "Invite",
              dictionary: {
                es: {
                  singular: "Invitar"
                },
                "de-DE": {
                  singular: "Einladen"
                },
                "fr-FR": {
                  singular: "Inviter"
                },
                "ja-JP": {
                  singular: "招待"
                },
                "ko-KR": {
                  singular: "초대"
                },
                "pt-BR": {
                  singular: "Convidar"
                },
                "zh-CN": {
                  singular: "邀请"
                }
              }
            }) : (0, _v4.translate)({
              singular: "Add people",
              dictionary: {
                es: {
                  singular: "Agregar personas"
                },
                "de-DE": {
                  singular: "Personen hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter des personnes"
                },
                "ja-JP": {
                  singular: "メンバーを追加"
                },
                "ko-KR": {
                  singular: "사람 추가하기"
                },
                "pt-BR": {
                  singular: "Adicione pessoas"
                },
                "zh-CN": {
                  singular: "添加人物"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v34.PersonUserAdd, {})
          }, {
            panelType: "CREATE_REVIEW_LINK_MODAL",
            label: (0, _v4.translate)({
              singular: "Create review links",
              dictionary: {
                es: {
                  singular: "Crear enlaces de revisión"
                },
                "de-DE": {
                  singular: "Review-Links erstellen"
                },
                "fr-FR": {
                  singular: "Créez des liens de révision"
                },
                "ja-JP": {
                  singular: "レビューリンクを作成"
                },
                "ko-KR": {
                  singular: "리뷰 링크 생성하기"
                },
                "pt-BR": {
                  singular: "Criar links de revisão"
                },
                "zh-CN": {
                  singular: "创建评论链接"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v36.LinkAdd, {}),
            hide: !_v0?.showCreateReview
          }, {
            panelType: "REVIEW_LINKS_PANEL",
            label: (0, _v4.translate)({
              singular: "Manage review links",
              dictionary: {
                es: {
                  singular: "Administrar enlaces de revisión"
                },
                "de-DE": {
                  singular: "Review-Links verwalten"
                },
                "fr-FR": {
                  singular: "Gérer les liens de révision"
                },
                "ja-JP": {
                  singular: "レビューリンクを管理"
                },
                "ko-KR": {
                  singular: "리뷰 링크 관리"
                },
                "pt-BR": {
                  singular: "Gerenciar links de revisão"
                },
                "zh-CN": {
                  singular: "管理评论链接"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v36.LinkAdd, {}),
            hide: !_v0?.showManageReview
          }, {
            panelType: "PUBLISH_PANEL",
            label: (0, _v4.translate)({
              singular: "Publish",
              dictionary: {
                es: {
                  singular: "Publicar"
                },
                "de-DE": {
                  singular: "Veröffentlichen"
                },
                "fr-FR": {
                  singular: "Publier"
                },
                "ja-JP": {
                  singular: "公開する"
                },
                "ko-KR": {
                  singular: "게시"
                },
                "pt-BR": {
                  singular: "Publicar"
                },
                "zh-CN": {
                  singular: "发布"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v35.Export, {})
          }, {
            panelType: "CHINA_ACCESS_PANEL",
            label: (0, _v4.translate)({
              singular: "China access",
              dictionary: {
                es: {
                  singular: "Acceso a China"
                },
                "de-DE": {
                  singular: "China-Zugang"
                },
                "fr-FR": {
                  singular: "Accès à partir de la Chine"
                },
                "ja-JP": {
                  singular: "中国でのアクセス"
                },
                "ko-KR": {
                  singular: "중국 접근"
                },
                "pt-BR": {
                  singular: "Acesso a partir da China"
                },
                "zh-CN": {
                  singular: "中国访问权限"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v38, {}),
            hide: !_v0?.showChinaAccess
          }].filter(_v0 => !_v0.hide);
        }, [_v7, _v5, _v1]);
      return (0, _v1.jsx)(_v30.Center, {
        children: (0, _v1.jsx)(_v11.Box, {
          display: "grid",
          minWidth: "0",
          width: `calc(100% + ${(0, _v13.rem)(24)})`,
          mx: `${(0, _v13.rem)(-12)}`,
          gridTemplateColumns: `
          repeat(
            auto-fit,
            minmax(${(0, _v13.rem)(84)}, ${_v8.length > 3 ? (0, _v13.rem)(84) : (0, _v13.rem)(96)}
          ))`,
          justifyItems: "center",
          justifyContent: "center",
          rowGap: (0, _v13.rem)(24),
          children: _v8.map(_v0 => (0, _v1.jsx)(_v41, {
            label: _v0.label,
            icon: _v0.icon,
            isDisabled: _v2,
            "data-panel-type": _v0.panelType,
            onClick: _v0
          }, _v0.panelType))
        })
      });
    };
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0);
  let _v45 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v44.ErrorBoundary, {
      errorPage: _v46,
      children: _v0
    }),
    _v46 = () => (0, _v1.jsxs)(_v40.VStack, {
      h: "100%",
      minH: "200px",
      justify: "center",
      children: [(0, _v1.jsx)(_v43.InfoCircle, {}), (0, _v1.jsx)(_v24.Text, {
        variant: "body-xl",
        children: "Something went wrong"
      })]
    });
  var _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  let _v49 = () => {
    let _v0 = (0, _v6.useViewer)();
    return (0, _v1.jsx)(_v47.BundlePromoTile, {
      trigger: "share_panel",
      hasSubscription: "paid" === (0, _v48.deriveViewerAuthStatus)(_v0)
    });
  };
  var _v50 = _v0.i(0);
  let _v51 = ({
    clipId: _v0,
    clipHash: _v1,
    trackingContextConfig: _v2
  }) => {
    let _v3 = (0, _v10.useGlobalStore)(({
        clip: _v0
      }) => _v0.actions.setClipParams),
      _v4 = (0, _v10.useGlobalStore)(({
        util: _v0
      }) => _v0.actions.setTrackingContextConfig),
      _v5 = (0, _v10.useGlobalStore)(({
        clip: _v0
      }) => _v0.actions.resetClip),
      _v6 = (0, _v2.useRef)(_v2);
    _v6.current = _v2, (0, _v2.useEffect)(() => {
      if (_v0) return _v3(_v0, _v1), _v4(_v6.current), () => {
        _v5();
      };
    }, [_v0, _v1, _v3, _v4, _v5]);
  };
  _v0.s(["useInitGlobalStore", 0, _v51], 0);
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = ["url", "expiresOn", "createdOn", "uri", "intervalDays", "hasExpiration"];
  function _v58(_v0) {
    return _v0 <= 0 ? _v58(7) : 1 === _v0 ? (0, _v4.translate)({
      singular: "Tomorrow",
      dictionary: {
        es: {
          singular: "Mañana"
        },
        "de-DE": {
          singular: "Morgen"
        },
        "fr-FR": {
          singular: "Demain"
        },
        "ja-JP": {
          singular: "明日"
        },
        "ko-KR": {
          singular: "내일"
        },
        "pt-BR": {
          singular: "Amanhã"
        },
        "zh-CN": {
          singular: "明天"
        }
      }
    }) : 7 === _v0 ? (0, _v4.translate)({
      singular: "1 week",
      dictionary: {
        es: {
          singular: "1 semana"
        },
        "de-DE": {
          singular: "1 Woche"
        },
        "fr-FR": {
          singular: "1 semaine"
        },
        "ja-JP": {
          singular: "1週間"
        },
        "ko-KR": {
          singular: "1주일"
        },
        "pt-BR": {
          singular: "1 semana"
        },
        "zh-CN": {
          singular: "1 周"
        }
      }
    }) : (0, _v4.translate)({
      singular: "{count} day",
      plural: "{count} days",
      count: _v0,
      replacements: {
        count: String(_v0)
      },
      dictionary: {
        es: {
          singular: "{count} día",
          plural: "{count} días"
        },
        "de-DE": {
          singular: "{count} Tag",
          plural: "{count} Tage"
        },
        "fr-FR": {
          singular: "{count} jour",
          plural: "{count} jours"
        },
        "ja-JP": {
          singular: "{count}日",
          plural: "{count}日"
        },
        "ko-KR": {
          singular: "{count}일",
          plural: "{count}일"
        },
        "pt-BR": {
          singular: "{count} dia",
          plural: "{count} dias"
        },
        "zh-CN": {
          singular: "{count} 天",
          plural: "{count} 天"
        }
      }
    });
  }
  function _v59() {
    let _v0 = (0, _v54.useOrionSettingsFields)(["bi_expiring_links_ux_enabled", "bi_expiring_links_default_expiry_days"]),
      _v1 = !!_v0?.bi_expiring_links_ux_enabled,
      _v2 = (0, _v10.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      _v3 = (0, _v2.useMemo)(() => _v1 && _v2 ? {
        where: {
          videoId: Number(_v2)
        },
        select: [..._v57]
      } : null, [_v1, _v2]),
      {
        data: _v4,
        mutate: _v5,
        isLoading: _v6
      } = (0, _v53.useGetVideoSharingLink)(_v3 ? () => _v3 : () => null),
      {
        data: _v7
      } = (0, _v50.useGetVideoSharingData)(),
      _v8 = _v7?.user?.uri ? (0, _v55.idFromUri)(_v7.user.uri) : null,
      _v9 = (0, _v6.useViewer)(),
      _v10 = !!_v9?.user?.uri && _v9.user.uri === _v7?.user?.uri,
      {
        data: _v11,
        isLoading: _v12
      } = (0, _v52.useGetUser)(() => _v1 && _v8 ? {
        where: {
          userId: _v8
        },
        select: ["preferences.videos.sharingLinkDefaultExpiryDays"],
        headers: {
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        }
      } : null),
      {
        intervalDays: _v13,
        hasExpiration: _v14
      } = (0, _v56.resolveDefaultExpiry)({
        prefDays: _v11?.preferences?.videos?.sharingLinkDefaultExpiryDays ?? null,
        orionDays: _v0?.bi_expiring_links_default_expiry_days ?? 0
      }),
      [_v15, {
        data: _v16,
        loading: _v17,
        error: _v18
      }] = (0, _v53.usePostVideoSharingLink)(),
      [_v19, {
        loading: _v20,
        error: _v21
      }] = (0, _v53.usePatchVideoSharingLink)(),
      [_v22, _v23] = (0, _v2.useState)(null);
    (0, _v2.useEffect)(() => {
      _v16?.url && _v23(_v16);
    }, [_v16]), (0, _v2.useEffect)(() => {
      _v23(null);
    }, [_v2]);
    let _v24 = (0, _v2.useRef)(_v4);
    _v24.current = _v4;
    let _v25 = (0, _v2.useCallback)((_v0 = {}) => {
        if (!_v2) return;
        let _v1 = _v24.current;
        if (_v1?.url && !(_v1?.expiresOn && !1 !== _v1.hasExpiration && new Date(_v1.expiresOn).getTime() < Date.now())) return;
        let {
            intervalDays: _v2,
            intervalDaysFallback: _v3
          } = _v0,
          _v4 = {};
        void 0 !== _v2 && (_v4.intervalDays = _v2), void 0 === _v2 && void 0 !== _v3 && (_v4.intervalDaysFallback = _v3), _v15({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v57],
          variables: _v4
        });
      }, [_v2, _v15]),
      _v26 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
        _v5(_v0 => _v0 ? {
          ..._v0,
          expiresOn: _v0,
          intervalDays: _v1,
          hasExpiration: _v2
        } : _v0, {
          revalidate: !1
        });
      }, [_v5]),
      _v27 = (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
        _v2 && (await _v19({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v57],
          variables: {
            expiresOn: _v0,
            intervalDays: _v1,
            hasExpiration: _v2
          }
        }));
      }, [_v2, _v19]),
      _v28 = (0, _v2.useCallback)(async _v0 => {
        _v2 && (await _v19({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v57],
          variables: {
            hasExpiration: _v0
          }
        }));
      }, [_v2, _v19]),
      _v29 = _v1 && (_v6 || _v12);
    return {
      isEnabled: _v1,
      sharingLink: _v4,
      createdLink: _v22,
      isOwner: _v10,
      defaultExpiryDays: _v13,
      defaultHasExpiration: _v14,
      isLoading: _v6,
      isPatchLoading: _v20,
      isCreateLoading: _v17,
      isInitialLoading: _v29,
      patchError: _v21,
      createError: _v18,
      getOrCreateLink: _v25,
      setOptimisticUpdate: _v26,
      saveInterval: _v27,
      saveHasExpiration: _v28
    };
  }
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  let _v67 = _v0 => (0, _v1.jsx)(_v60.Flex, {
    flexDirection: "column",
    ..._v0
  });
  _v67.Header = _v0 => (0, _v1.jsx)(_v60.Flex, {
    alignItems: "center",
    gap: "2",
    p: "4",
    ..._v0
  }), _v67.Body = _v0 => (0, _v1.jsx)(_v60.Flex, {
    flexDirection: "column",
    gap: "lg",
    p: "0 1rem 1rem 1rem",
    ..._v0
  });
  let _v68 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsxs)(_v61.Modal, {
    ..._v1,
    children: [(0, _v1.jsx)(_v62.ModalOverlay, {}), (0, _v1.jsxs)(_v63.ModalContent, {
      minH: (0, _v13.rem)(281),
      children: [_v0, (0, _v1.jsx)(_v66.ModalFooter, {
        pb: "0"
      })]
    })]
  });
  _v68.Header = _v0 => (0, _v1.jsx)(_v64.ModalHeader, {
    display: "flex",
    alignItems: "center",
    gap: "2",
    pb: "4",
    ..._v0
  }), _v68.Body = _v0 => (0, _v1.jsx)(_v65.ModalBody, {
    display: "flex",
    flexDirection: "column",
    gap: "4",
    pt: "0",
    pb: "6",
    bg: "unset",
    ..._v0
  });
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = _v0 => (0, _v69.useGlobalStore)(({
    screen: _v0
  }) => _v0.main) !== _v70.ShareModalState.Default && "INVITE_PANEL" === _v0;
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = () => {
    let {
        logError: _v0
      } = (0, _v82.useErrorTracking)(),
      _v1 = (0, _v6.useViewer)(),
      _v2 = _v1?.teamUser?.ownerId || _v1?.user?.id,
      {
        data: _v3,
        ..._v4
      } = (0, _v81.useGetUserPreferences)(() => _v2 ? {
        select: ["acd", "ecm"],
        where: {
          userId: _v2
        }
      } : null, {
        revalidateOnFocus: !1,
        revalidateOnReconnect: !1,
        onError: _v0 => {
          _v0(_v0, {
            additionalData: {
              action: "get_user_preferences"
            }
          });
        }
      }),
      _v5 = _v3?.acd,
      _v6 = !!_v3?.ecm;
    return {
      data: _v3,
      enterpriseCustomDomain: _v5,
      isContentModerationEnabled: _v6,
      ..._v4
    };
  };
  var _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  let _v88 = _v0 => {
      let {
          clipId: _v1,
          clipHash: _v2
        } = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0),
        _v3 = (0, _v55.getClipRequestId)(_v1, _v2),
        {
          data: _v4,
          ..._v5
        } = (0, _v87.useGetUnlockedVideo)(() => !_v3 || _v0?.skip ? null : {
          where: {
            videoId: _v3
          },
          select: ["regionalPrivacyEmbeds.cn.html", "regionalLinks.cn"]
        }, {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1
        });
      return {
        data: _v4,
        chinaDeliveryLink: _v4?.regionalLinks?.cn ?? "",
        ..._v5
      };
    },
    _v89 = () => {
      let {
          logError: _v0
        } = (0, _v82.useErrorTracking)(),
        {
          clipId: _v1,
          clipHash: _v2
        } = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0),
        _v3 = (0, _v55.getClipRequestId)(_v1, _v2),
        {
          mutate: _v4
        } = _v88(),
        {
          data: _v5,
          isLoading: _v6,
          mutate: _v7
        } = (0, _v84.useGetVideoRegionalPrivacies)(() => {
          if (!_v3) return null;
          let _v0 = (0, _v86.getPasswordHashFromCookie)(_v1);
          return {
            where: {
              videoId: _v3
            },
            select: ["uri", "region", "privacy", "contentScan"],
            query: {
              ...(_v0 && {
                password: _v0
              })
            }
          };
        }, {
          revalidateOnFocus: !1,
          revalidateOnReconnect: !1,
          onError: _v0 => {
            _v0(_v0, {
              additionalData: {
                action: "get_video_regional_privacies"
              }
            });
          }
        }),
        [_v8, {
          error: _v9,
          loading: _v10
        }] = (0, _v84.usePostVideoRegionalPrivacies)(),
        [_v11, {
          error: _v12,
          loading: _v13
        }] = (0, _v85.useDeleteVideoRegionalPrivacy)(),
        [_v14, {
          loading: _v15,
          data: _v16,
          error: _v17
        }] = (0, _v85.usePatchVideoRegionalPrivacy)();
      (0, _v2.useEffect)(() => {
        _v12 && _v0(_v12, {
          additionalData: {
            action: "delete_video_regional_privacy"
          }
        });
      }, [_v12, _v0]), (0, _v2.useEffect)(() => {
        _v9 && _v0(_v9, {
          additionalData: {
            action: "post_video_regional_privacy"
          }
        });
      }, [_v9, _v0]);
      let _v18 = _v5?.data?.find(_v0 => "CN" === _v0.region),
        _v19 = (_v0 => {
          if (!_v0) return null;
          let _v1 = _v0.split("/");
          return parseInt(_v1[_v1.length - 1].split(":")[0]);
        })(_v18?.uri),
        _v20 = _v13 || _v10 || _v6,
        _v21 = (0, _v2.useCallback)(() => {
          _v7(), _v4();
        }, [_v7, _v4]),
        _v22 = (0, _v2.useCallback)(async () => {
          _v20 || (_v19 ? await _v11({
            where: {
              videoId: _v3,
              regionalPrivacyId: _v19
            }
          }) : await _v8({
            where: {
              videoId: _v3
            },
            select: ["uri", "region", "privacy"],
            variables: {
              region: "CN",
              privacy: "nobody"
            }
          }), _v21());
        }, [_v20, _v19, _v3, _v11, _v8, _v21]),
        _v23 = (0, _v2.useCallback)(async _v0 => {
          _v19 && ("unlisted" === _v0 || "nobody" === _v0) && (await _v14({
            where: {
              videoId: _v3,
              regionalPrivacyId: _v19
            },
            select: ["uri", "region", "privacy"],
            variables: {
              privacy: _v0,
              region: "CN"
            }
          }), _v21());
        }, [_v19, _v14, _v3, _v21]);
      return {
        chinaRegionalPrivacy: _v18,
        mutate: _v7,
        isChinaAccessEnabled: !!_v18,
        isUpdatingChinaAccess: _v20,
        onChinaAccessChange: _v22,
        chinaAccessLinkPrivacy: _v18?.privacy,
        isUpdatingChinaAccessLinkPrivacy: _v15,
        onChinaAccessLinkPrivacyChange: _v23,
        patchData: _v16,
        patchError: _v17
      };
    },
    _v90 = () => {
      let [_v0, _v1] = (0, _v2.useState)(!0),
        _v2 = (0, _v2.useRef)(void 0),
        {
          isContentModerationEnabled: _v3
        } = _v83(),
        {
          chinaRegionalPrivacy: _v4,
          mutate: _v5
        } = _v89(),
        _v6 = _v4?.contentScan?.status,
        _v7 = "in_progress" === _v6;
      if ((0, _v2.useEffect)(() => (_v3 && _v7 && (_v2.current = setInterval(() => {
        _v5();
      }, 0)), () => {
        _v2.current && clearInterval(_v2.current);
      }), [_v3, _v7, _v5]), !_v4) return null;
      let _v8 = _v91(_v4.contentScan),
        _v9 = _v8.reasons?.length ?? 0,
        _v10 = _v8?.reasons?.filter((_v0, _v1) => !_v0 || _v1 < 3),
        _v11 = _v4?.contentScan?.status === "denied" && _v0 && _v9 > 3;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v7 && (0, _v1.jsxs)(_v78.Alert, {
          size: "sm",
          children: [(0, _v1.jsx)(_v80.AlertTitle, {
            children: (0, _v4.translate)({
              singular: "Processing... This may take a few minutes.",
              dictionary: {
                es: {
                  singular: "Procesando… Esto puede tardar unos minutos."
                },
                "de-DE": {
                  singular: "Wird bearbeitet… Das kann ein paar Minuten dauern."
                },
                "fr-FR": {
                  singular: "En cours de traitement… Cela peut prendre quelques minutes."
                },
                "ja-JP": {
                  singular: "処理中...少々お待ちください。"
                },
                "ko-KR": {
                  singular: "처리 중... 몇 분 정도 걸릴 수 있습니다."
                },
                "pt-BR": {
                  singular: "Processando... Isto pode levar alguns minutos."
                },
                "zh-CN": {
                  singular: "正在处理...这可能需要几分钟时间。"
                }
              }
            })
          }), (0, _v1.jsx)(_v79.AlertDescription, {
            children: (0, _v4.translate)({
              singular: "We’ll let you know once it’s done. You can close this window.",
              dictionary: {
                es: {
                  singular: "Le avisaremos cuando haya finalizado. Puede cerrar esta ventana."
                },
                "de-DE": {
                  singular: "Wir werden Sie benachrichtigen, sobald es erledigt ist. Sie können dieses Fenster schließen."
                },
                "fr-FR": {
                  singular: "Nous vous informerons une fois que ce sera fait. Vous pouvez fermer cette fenêtre."
                },
                "ja-JP": {
                  singular: "完了したらお知らせします。このウィンドウを閉じることができます。"
                },
                "ko-KR": {
                  singular: "완료되면 알려드리겠습니다. 이 창을 닫으셔도 됩니다."
                },
                "pt-BR": {
                  singular: "Avisaremos quando estiver pronto. Você pode fechar esta janela."
                },
                "zh-CN": {
                  singular: "一旦完成，我们会通知您。您可以关闭此窗口。"
                }
              }
            })
          })]
        }), ("denied" === _v6 || "failed" === _v6) && (0, _v1.jsxs)(_v78.Alert, {
          status: "error",
          children: [(0, _v1.jsx)(_v24.Text, {
            variant: _v9 ? "heading-2xs" : "body-sm",
            sx: {
              "&&": {
                marginTop: "50"
              }
            },
            children: _v8.message
          }), _v10 && (0, _v1.jsx)(_v11.Box, {
            as: "ul",
            pl: "1rem",
            maxHeight: (0, _v13.rem)(80),
            paddingY: "50",
            overflowY: "auto",
            sx: {
              listStyle: "disc"
            },
            children: _v10.map((_v0, _v1) => (0, _v1.jsx)(_v24.Text, {
              as: "li",
              variant: "body-sm",
              children: _v0
            }, `reasons-${_v1}`))
          }), _v11 && (0, _v1.jsx)(_v24.Text, {
            variant: "body-sm",
            color: "text-secondary",
            marginTop: "50",
            cursor: "pointer",
            onClick: () => _v1(!1),
            children: (0, _v4.translate)({
              singular: "View {COUNT} more...",
              count: _v9 - 3,
              replacements: {
                COUNT: _v9 - 3
              },
              dictionary: {
                es: {
                  singular: "Ver {COUNT} más..."
                },
                "de-DE": {
                  singular: "{COUNT} weitere anzeigen ..."
                },
                "fr-FR": {
                  singular: "Voir {COUNT} de plus…"
                },
                "ja-JP": {
                  singular: "さらに{COUNT}件を表示..."
                },
                "ko-KR": {
                  singular: "{COUNT}개 더 보기..."
                },
                "pt-BR": {
                  singular: "Visualize mais {COUNT}..."
                },
                "zh-CN": {
                  singular: "查看额外 {COUNT} 个..."
                }
              }
            })
          })]
        })]
      });
    },
    _v91 = _v0 => _v0?.status === "denied" ? _v0?.result?.length ? {
      message: (0, _v4.translate)({
        singular: "This video can’t be made accessible in China because it may show:",
        dictionary: {
          es: {
            singular: "No se puede acceder a este video en China porque podría mostrar lo siguiente:"
          },
          "de-DE": {
            singular: "Dieses Video kann in China nicht zugänglich gemacht werden, da es möglicherweise Folgendes zeigt:"
          },
          "fr-FR": {
            singular: "Cette vidéo ne peut pas être rendue accessible en Chine, car elle pourrait montrer :"
          },
          "ja-JP": {
            singular: "この動画は、以下を表示する可能性があるため、中国ではアクセスできません。"
          },
          "ko-KR": {
            singular: "이 동영상은 다음과 같은 이유로 중국에서 접근할 수 없습니다."
          },
          "pt-BR": {
            singular: "Este vídeo não pode ser disponibilizado na China porque pode exibir:"
          },
          "zh-CN": {
            singular: "此视频无法在中国播放，因为可能会显示："
          }
        }
      }),
      reasons: _v0?.result
    } : {
      message: (0, _v4.translate)({
        singular: "This video can’t be made accessible in China because it may contain prohibited content.",
        dictionary: {
          es: {
            singular: "No se puede acceder a este video en China porque podría contener contenido prohibido."
          },
          "de-DE": {
            singular: "Dieses Video kann in China nicht zugänglich gemacht werden, da es möglicherweise verbotene Inhalte enthält."
          },
          "fr-FR": {
            singular: "Cette vidéo ne peut pas être rendue accessible en Chine, car elle pourrait inclure du contenu interdit."
          },
          "ja-JP": {
            singular: "この動画には禁止されているコンテンツが含まれている可能性があるため、中国ではアクセスできません。"
          },
          "ko-KR": {
            singular: "이 동영상은 금지된 콘텐츠를 포함하고 있을 수 있으므로 중국에서 접근할 수 없습니다."
          },
          "pt-BR": {
            singular: "Este vídeo não pode ser acessado na China porque pode conter conteúdo proibido."
          },
          "zh-CN": {
            singular: "此视频无法在中国播放，因为其中可能包含违禁内容。"
          }
        }
      })
    } : {
      message: (0, _v4.translate)({
        singular: "Something went wrong during processing. Try again.",
        dictionary: {
          es: {
            singular: "Hubo un error durante el procesamiento. Inténtelo de nuevo."
          },
          "de-DE": {
            singular: "Leider ist während der Verarbeitung etwas schiefgegangen. Nochmal versuchen."
          },
          "fr-FR": {
            singular: "Une erreur s'est produite pendant le traitement. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "処理中に問題が発生しました。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "처리하는 중에 문제가 발생했습니다. 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Algo deu errado durante o processamento. Tente novamente."
          },
          "zh-CN": {
            singular: "处理过程中出现了问题。请重试。"
          }
        }
      })
    };
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  let _v94 = (0, _v13.rem)(58),
    _v95 = ({
      id: _v0 = "china-access-switch",
      domain: _v1 = "videoji.cn",
      isChecked: _v2 = !1,
      isDisabled: _v3 = !1,
      onChange: _v4
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(_v2);
      return (0, _v2.useEffect)(() => {
        _v6(_v2);
      }, [_v2]), (0, _v1.jsxs)(_v60.Flex, {
        flexDirection: "column",
        gap: "sm",
        children: [(0, _v1.jsxs)(_v60.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          gap: "lg",
          children: [(0, _v1.jsx)(_v24.Text, {
            as: "label",
            htmlFor: _v0,
            variant: "heading-xs",
            color: "text-primary",
            flex: "1",
            children: (0, _v4.translate)({
              singular: "Accessible in China",
              dictionary: {
                es: {
                  singular: "Accesible en China"
                },
                "de-DE": {
                  singular: "In China zugänglich"
                },
                "fr-FR": {
                  singular: "Accessible en Chine"
                },
                "ja-JP": {
                  singular: "中国でアクセス可能"
                },
                "ko-KR": {
                  singular: "중국에서 접근 가능"
                },
                "pt-BR": {
                  singular: "Acessível na China"
                },
                "zh-CN": {
                  singular: "在中国可访问"
                }
              }
            })
          }), (0, _v1.jsx)(_v92.Switch, {
            id: _v0,
            onChange: _v0 => {
              _v4?.(_v0), _v6(_v0.target.checked);
            },
            isChecked: _v5,
            isDisabled: _v3
          })]
        }), (0, _v1.jsx)(_v24.Text, {
          variant: "body-md",
          color: "text-secondary",
          pr: _v94,
          children: (0, _v4.translate)({
            singular: "Viewers in China can access this video on {DOMAIN}. Videos are scanned automatically for {LINK}prohibited content{/LINK}.",
            replacements: {
              DOMAIN: _v1,
              LINK: _v0 => (0, _v1.jsx)(_v93.Link, {
                href: "/enterpriseterms/china",
                target: "_blank",
                rel: "noopener noreferrer",
                variant: "inline-primary",
                fontSize: "inherit",
                children: _v0
              })
            },
            dictionary: {
              es: {
                singular: "Los espectadores en China pueden acceder a este video en {DOMAIN}. Los videos se analizan automáticamente en busca de {LINK}contenido prohibido{/LINK}."
              },
              "de-DE": {
                singular: "Zuschauer in China können auf dieses Video auf {DOMAIN} zugreifen. Ihre Videos werden automatisch auf {LINK}verbotene Inhalte{/LINK} gescannt."
              },
              "fr-FR": {
                singular: "En Chine, les spectateurs peuvent accéder à cette vidéo sur {DOMAIN}. Les vidéos sont scannées automatiquement pour détecter les {LINK}contenus interdits{/LINK}."
              },
              "ja-JP": {
                singular: "中国の視聴者は{DOMAIN}でこの動画にアクセスできます。動画は自動的にスキャンされ、{LINK}禁止コンテンツ{/LINK}がないことを確認されます。"
              },
              "ko-KR": {
                singular: "중국에 있는 뷰어는 {DOMAIN}에서 이 동영상을 볼 수 있습니다. 동영상에 {LINK}금지된 콘텐츠{/LINK}가 있는지 자동으로 스캔합니다."
              },
              "pt-BR": {
                singular: "Os espectadores da China podem acessar este vídeo em {DOMAIN}. Os vídeos são verificados automaticamente para detectar {LINK}conteúdo proibido{/LINK}."
              },
              "zh-CN": {
                singular: "中国的观众可以在 {DOMAIN} 上访问此视频。系统会自动扫描视频以查找{LINK}违禁内容{/LINK}。"
              }
            }
          })
        })]
      });
    };
  var _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  let _v98 = {
      color: "transparent",
      textShadow: `0 0 ${(0, _v13.rem)(5)} rgba(0, 0, 0, 0.25)`,
      userSelect: "none",
      cursor: "not-allowed"
    },
    _v99 = {
      userSelect: "text"
    },
    _v100 = ({
      embedCode: _v0 = "",
      isDisabled: _v1 = !1,
      spacing: _v2 = "1rem",
      onCodeAreaClick: _v3,
      onCopyEmbedCodeClick: _v4
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(!1),
        [_v7, _v8] = (0, _v2.useState)("NOT_STICKY"),
        _v9 = "STICKY_AND_LOCK_EXPAND" === _v7,
        _v10 = (0, _v2.useRef)(null),
        _v11 = (0, _v2.useRef)(null);
      (0, _v97.useOutsideClick)({
        ref: _v10,
        handler: () => _v6(!1)
      }), (0, _v2.useEffect)(() => {
        let _v0,
          _v1 = () => {
            if (clearTimeout(_v0), window.innerHeight < 670) {
              _v0 = setTimeout(() => {
                _v6(!1), _v8("STICKY_AND_LOCK_EXPAND");
              }, 200);
              return;
            }
            _v0 = setTimeout(() => {
              _v8("NOT_STICKY");
            }, 200);
          };
        return window.addEventListener("resize", _v1), _v1(), () => window.removeEventListener("resize", _v1);
      }, []);
      let _v12 = (0, _v2.useCallback)(() => {
        if (!_v1 && !_v5 && !_v9) {
          if (_v6(!0), _v11.current) {
            let _v0 = document.createRange();
            _v0.selectNodeContents(_v11.current);
            let _v1 = window.getSelection();
            _v1?.removeAllRanges(), _v1?.addRange(_v0);
          }
          _v3?.();
        }
      }, [_v1, _v5, _v9, _v3]);
      return (0, _v1.jsxs)(_v40.VStack, {
        gap: (0, _v13.rem)(10),
        flexShrink: 0,
        ...(_v9 && {
          position: "sticky",
          bgColor: "surface",
          borderTop: "1px solid",
          borderColor: "input-stroke",
          bottom: `-${_v2}`,
          padding: _v2,
          margin: `-${_v2}`
        }),
        children: [(0, _v1.jsx)(_v60.Flex, {
          ref: _v10,
          w: "100%",
          py: "sm",
          px: "md",
          border: `${(0, _v13.rem)(_v5 ? 2 : 1)} solid`,
          borderRadius: "md",
          borderColor: _v5 ? "stroke-focus" : "input-stroke",
          onClick: _v12,
          sx: _v1 ? _v98 : _v99,
          children: (0, _v1.jsx)(_v24.Text, {
            "aria-label": "Embed code",
            ref: _v11,
            w: "100%",
            overflow: "hidden",
            variant: "body-md",
            textOverflow: "ellipsis",
            whiteSpace: _v5 ? "inherit" : "nowrap",
            noOfLines: _v5 ? void 0 : 1,
            children: _v0
          })
        }), (0, _v1.jsx)(_v96.Button, {
          variant: "primary",
          isDisabled: _v1,
          w: "100%",
          onClick: _v4,
          children: (0, _v4.translate)({
            singular: "Copy embed code",
            dictionary: {
              es: {
                singular: "Copiar el código de inserción"
              },
              "de-DE": {
                singular: "Einbettungscode kopieren"
              },
              "fr-FR": {
                singular: "Copier le code d’intégration"
              },
              "ja-JP": {
                singular: "埋め込みコードをコピー"
              },
              "ko-KR": {
                singular: "임베드 코드 복사하기"
              },
              "pt-BR": {
                singular: "Copiar código de incorporação"
              },
              "zh-CN": {
                singular: "复制嵌入代码"
              }
            }
          })
        })]
      });
    };
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0);
  let _v105 = ({
      id: _v0,
      value: _v1,
      isDisabled: _v2 = !1,
      showButton: _v3 = !1,
      ..._v4
    }) => {
      let _v5 = (0, _v2.useRef)(null),
        {
          width: _v6
        } = (0, _v104.useSize)(_v5) ?? {
          width: 39
        };
      return (0, _v1.jsxs)(_v101.InputGroup, {
        children: [(0, _v1.jsx)(_v102.Input, {
          id: _v0,
          variant: "outlined",
          value: _v1,
          isReadOnly: !0,
          isDisabled: _v2,
          ...(_v3 && {
            pr: _v6 + 16
          })
        }), _v3 && (0, _v1.jsx)(_v103.InputRightElement, {
          width: _v6 + 16,
          children: (0, _v1.jsx)(_v96.Button, {
            variant: "secondary",
            size: "xs",
            ref: _v5,
            isDisabled: _v2,
            ..._v4
          })
        })]
      });
    },
    _v106 = ({
      value: _v0,
      isDisabled: _v1 = !1,
      showEditButton: _v2 = !1,
      onEditButtonClick: _v3,
      onCopyLinkButtonClick: _v4
    }) => (0, _v1.jsxs)(_v60.Flex, {
      role: "group",
      "aria-labelledby": "link-heading",
      flexDirection: "column",
      gap: "sm",
      children: [(0, _v1.jsx)(_v24.Text, {
        id: "link-heading",
        variant: "heading-xs",
        color: "text-primary",
        opacity: _v1 ? .5 : 1,
        children: (0, _v4.translate)({
          singular: "Link",
          dictionary: {
            es: {
              singular: "Vínculo"
            },
            "fr-FR": {
              singular: "Lien"
            },
            "ja-JP": {
              singular: "リンク"
            },
            "ko-KR": {
              singular: "링크"
            },
            "zh-CN": {
              singular: "链接"
            }
          }
        })
      }), (0, _v1.jsx)(_v105, {
        id: "custom-link",
        "data-panel-type": "CUSTOMIZE_LINK_PANEL",
        value: _v0,
        showButton: _v2,
        isDisabled: _v1,
        onClick: _v3,
        children: (0, _v4.translate)({
          singular: "Edit",
          dictionary: {
            es: {
              singular: "Editar"
            },
            "de-DE": {
              singular: "Bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier"
            },
            "ja-JP": {
              singular: "編集"
            },
            "ko-KR": {
              singular: "편집"
            },
            "pt-BR": {
              singular: "Editar"
            },
            "zh-CN": {
              singular: "编辑"
            }
          }
        })
      }), (0, _v1.jsx)(_v96.Button, {
        variant: "primary",
        isDisabled: _v1,
        onClick: _v4,
        children: (0, _v4.translate)({
          singular: "Copy link",
          dictionary: {
            es: {
              singular: "Copiar vínculo"
            },
            "de-DE": {
              singular: "Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピー"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link"
            },
            "zh-CN": {
              singular: "复制链接"
            }
          }
        })
      })]
    });
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = ({
      isDisabled: _v0,
      dimensions: _v1,
      handleDimensionsChange: _v2
    }) => {
      let _v3 = _v0 => (0, _v1.jsx)(_v102.Input, {
        variant: "outlined",
        w: "2xl",
        size: "xs",
        isDisabled: _v0,
        value: _v1[_v0],
        onChange: _v0 => _v2(_v0, _v0)
      });
      return (0, _v1.jsx)(_v11.Box, {
        children: (0, _v1.jsxs)(_v60.Flex, {
          gap: "sm",
          alignItems: "center",
          children: [_v3("width"), (0, _v1.jsx)(_v24.Text, {
            color: _v0 ? "text-secondary" : "text-primary",
            variant: "body-md",
            children: "x"
          }), _v3("height")]
        })
      });
    },
    _v111 = ({
      dimensions: _v0,
      embedType: _v1,
      onDimensionsChange: _v2,
      onEmbedTypeChange: _v3
    }) => (0, _v1.jsxs)(_v60.Flex, {
      role: "group",
      "aria-labelledby": "size-heading",
      flexDirection: "column",
      gap: "sm",
      children: [(0, _v1.jsx)(_v24.Text, {
        id: "size-heading",
        variant: "heading-xs",
        color: "text-primary",
        children: (0, _v4.translate)({
          singular: "Size",
          dictionary: {
            es: {
              singular: "Tamaño"
            },
            "de-DE": {
              singular: "Größe"
            },
            "fr-FR": {
              singular: "Taille"
            },
            "ja-JP": {
              singular: "サイズ"
            },
            "ko-KR": {
              singular: "크기"
            },
            "pt-BR": {
              singular: "Tamanho"
            },
            "zh-CN": {
              singular: "大小"
            }
          }
        })
      }), (0, _v1.jsx)(_v107.RadioGroup, {
        onChange: _v3,
        value: _v1,
        children: (0, _v1.jsxs)(_v60.Flex, {
          flexDirection: "column",
          gap: "sm",
          children: [(0, _v1.jsx)(_v108.Radio, {
            value: "responsive",
            children: (0, _v4.translate)({
              singular: "Responsive",
              dictionary: {
                es: {
                  singular: "Adaptable"
                },
                "de-DE": {
                  singular: "Responsiv"
                },
                "fr-FR": {
                  singular: "Adaptative"
                },
                "ja-JP": {
                  singular: "レスポンシブ"
                },
                "ko-KR": {
                  singular: "반응형"
                },
                "pt-BR": {
                  singular: "Responsivo"
                },
                "zh-CN": {
                  singular: "响应式"
                }
              }
            })
          }), (0, _v1.jsxs)(_v109.HStack, {
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v108.Radio, {
              value: "fixed",
              children: (0, _v4.translate)({
                singular: "Fixed",
                dictionary: {
                  es: {
                    singular: "Fijo"
                  },
                  "de-DE": {
                    singular: "Unveränderlich"
                  },
                  "fr-FR": {
                    singular: "Fixe"
                  },
                  "ja-JP": {
                    singular: "固定サイズ"
                  },
                  "ko-KR": {
                    singular: "고정형"
                  },
                  "pt-BR": {
                    singular: "Fixa"
                  },
                  "zh-CN": {
                    singular: "固定"
                  }
                }
              })
            }), (0, _v1.jsx)(_v110, {
              dimensions: _v0,
              handleDimensionsChange: _v2,
              isDisabled: "fixed" !== _v1
            })]
          })]
        })
      })]
    });
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  let _v114 = ({
    activePrivacy: _v0 = "nobody",
    isDisabled: _v1,
    onSelectPrivacy: _v2
  }) => {
    let _v3 = (0, _v113.useRegionalPrivacyOptions)();
    return (0, _v1.jsxs)(_v60.Flex, {
      flexDirection: "column",
      gap: "sm",
      children: [(0, _v1.jsx)(_v24.Text, {
        id: "privacy-heading",
        variant: "heading-xs",
        color: "text-primary",
        children: (0, _v4.translate)({
          singular: "Privacy",
          dictionary: {
            es: {
              singular: "Privacidad"
            },
            "de-DE": {
              singular: "Datenschutz"
            },
            "fr-FR": {
              singular: "Confidentialité "
            },
            "ja-JP": {
              singular: "プライバシー"
            },
            "ko-KR": {
              singular: "프라이버시"
            },
            "pt-BR": {
              singular: "Privacidade"
            },
            "zh-CN": {
              singular: "隐私"
            }
          }
        })
      }), _v2 && (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v112.PrivacyDropdown, {
          isVideoPrivacy: !0,
          privacyOptions: _v3,
          activePrivacy: _v0,
          isDisabled: _v1,
          isRedirectUpsell: !1,
          onSelect: _v2,
          variant: "outlined"
        })
      })]
    });
  };
  var _v115 = _v0.i(0),
    _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  let _v118 = () => {
      let {
          data: _v0,
          mutate: _v1,
          ..._v2
        } = (0, _v50.useGetVideoSharingData)(),
        {
          trackPrivacyChanged: _v3
        } = (0, _v116.useViewPrivacyChangeTracking)(),
        {
          clipId: _v4,
          clipHash: _v5
        } = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0),
        _v6 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig),
        _v7 = (0, _v55.getClipRequestId)(_v4, _v5),
        _v8 = (0, _v77.useToast)(),
        _v9 = (0, _v115.useRouter)(),
        [_v10, _v11] = (0, _v117.usePatchUnlockedVideo)(),
        _v12 = async (_v0, _v1) => {
          let _v2;
          if (!_v7 || !_v0) return Promise.resolve();
          if ((_v2 = _v0?.customMetadata) && 0 !== _v2.length && _v2.some(_v0 => {
            let _v1 = _v0.mandatory;
            if (!0 !== _v1 && 1 !== _v1) return !1;
            let _v2 = _v0.fieldValue;
            return null == _v2 || (Array.isArray(_v2) ? 0 === _v2.length : "bool" === _v0.type ? "" === _v2 : "string" == typeof _v2 && "" === _v2.trim());
          })) {
            let _v0 = _v0.manageLink ?? (_v7 ? `/manage/videos/${_v7}` : void 0),
              _v1 = _v0 ? `${_v0}${_v0.includes("?") ? "&" : "?"}focus=custom-metadata` : void 0;
            return _v8({
              duration: 0,
              isClosable: !0,
              position: "bottom-right",
              render: _v0 => (0, _v1.jsxs)(_v77.ToastRoot, {
                ..._v0,
                variant: "warning",
                children: [(0, _v1.jsx)(_v77.ToastIcon, {}), (0, _v1.jsxs)(_v30.Center, {
                  gap: "sm",
                  children: [(0, _v1.jsx)(_v77.ToastTitle, {
                    children: (0, _v4.translate)({
                      singular: "This video has missing mandatory custom metadata.",
                      dictionary: {
                        es: {
                          singular: "A este video le faltan metadatos personalizados obligatorios."
                        },
                        "de-DE": {
                          singular: "Bei diesem Video fehlen erforderliche benutzerdefinierte Metadaten."
                        },
                        "fr-FR": {
                          singular: "Il manque à cette vidéo des métadonnées personnalisées obligatoires."
                        },
                        "ja-JP": {
                          singular: "この動画には必須のカスタムメタデータが欠落しています。"
                        },
                        "ko-KR": {
                          singular: "이 비디오에는 필수 사용자 지정 메타데이터가 누락되어 있습니다."
                        },
                        "pt-BR": {
                          singular: "Este vídeo está sem metadados personalizados obrigatórios."
                        },
                        "zh-CN": {
                          singular: "该视频缺少必填的自定义元数据。"
                        }
                      }
                    })
                  }), _v1 && (0, _v1.jsx)(_v77.ToastButton, {
                    onClick: () => {
                      _v8.closeAll(), _v9.push(_v1);
                    },
                    children: (0, _v4.translate)({
                      singular: "Add metadata",
                      dictionary: {
                        es: {
                          singular: "Agregar metadatos"
                        },
                        "de-DE": {
                          singular: "Metadaten hinzufügen"
                        },
                        "fr-FR": {
                          singular: "Ajouter des métadonnées"
                        },
                        "ja-JP": {
                          singular: "メタデータを追加"
                        },
                        "ko-KR": {
                          singular: "메타데이터 추가"
                        },
                        "pt-BR": {
                          singular: "Adicionar metadados"
                        },
                        "zh-CN": {
                          singular: "添加元数据"
                        }
                      }
                    })
                  })]
                })]
              })
            }), Promise.resolve();
          }
          let _v3 = _v0.privacy?.view ?? null,
            _v4 = _v0?.view ?? null;
          await _v10({
            select: ["privacy", "password"],
            where: {
              videoId: _v7
            },
            variables: {
              privacy: _v0,
              password: _v1
            }
          }), _v4 && _v3 !== _v4 && _v3({
            entityType: "video",
            previousPrivacy: _v3,
            newPrivacy: _v4,
            pageSource: _v6?.privacyChangePageSource,
            entryPoint: _v6?.privacyChangeEntryPoint
          }), _v1({
            ..._v0,
            privacy: {
              ..._v0.privacy,
              ..._v0
            },
            ...(_v1 && {
              password: _v1
            })
          });
        };
      return {
        privacy: _v0?.privacy,
        password: _v0?.password,
        patchVideoPrivacy: _v12,
        getState: _v2,
        patchState: _v11
      };
    },
    _v119 = "video-share-view-copy-link",
    _v120 = () => {
      let _v0 = (0, _v77.useToast)(),
        _v1 = (0, _v2.useRef)(_v0);
      _v1.current = _v0;
      let {
          privacy: _v2
        } = _v118(),
        {
          data: _v3
        } = (0, _v50.useGetVideoSharingData)(),
        _v4 = !!_v3?.contentRating?.includes("unrated"),
        _v5 = _v2?.view,
        _v6 = _v2?.embed;
      return {
        triggerCopyLinkToast: (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => {
          if (!_v1.current.isActive(_v119)) {
            let _v0;
            if (_v0) {
              if (_v1) _v0 = "private" === _v6 ? (0, _v4.translate)({
                singular: "Code copied, but the embedded video won't be visible due to your embed settings.",
                dictionary: {
                  es: {
                    singular: "El código se copió, pero el video insertado no estará visible debido a la configuración de inserción."
                  },
                  "de-DE": {
                    singular: "Code kopiert, aber das eingebettete Video ist aufgrund Ihrer Einbettungseinstellungen nicht sichtbar."
                  },
                  "fr-FR": {
                    singular: "Le code a été copié, mais la vidéo intégrée ne sera pas visible en raison de vos paramètres d'intégration."
                  },
                  "ja-JP": {
                    singular: "コードはコピーされましたが、埋め込み設定により埋め込まれた動画は表示されません。"
                  },
                  "ko-KR": {
                    singular: "코드가 복사되었지만 임베드 설정으로 인해 임베드된 동영상이 표시되지 않습니다."
                  },
                  "pt-BR": {
                    singular: "Código copiado, mas o vídeo de incorporação não será visível devido às suas configurações de incorporação."
                  },
                  "zh-CN": {
                    singular: "代码已复制，但由于您的嵌入设置，嵌入的视频将无法显示。"
                  }
                }
              }) : (0, _v4.translate)({
                singular: "Embed code copied",
                dictionary: {
                  es: {
                    singular: "Se copió el código de inserción"
                  },
                  "de-DE": {
                    singular: "Einbettungscode kopiert"
                  },
                  "fr-FR": {
                    singular: "Code d'intégration copié"
                  },
                  "ja-JP": {
                    singular: "埋め込みコードがコピーされました"
                  },
                  "ko-KR": {
                    singular: "임베드 코드를 복사했습니다"
                  },
                  "pt-BR": {
                    singular: "Código de incorporação copiado"
                  },
                  "zh-CN": {
                    singular: "嵌入代码已复制"
                  }
                }
              });else {
                let _v0 = _v2 ? (0, _v56.formatExpiryDuration)(_v2) : void 0;
                _v0 = (0, _v56.getCopyLinkToastTitle)(_v5, _v4, _v0);
              }
            } else _v0 = (0, _v4.translate)({
              singular: "Link failed to copy",
              dictionary: {
                es: {
                  singular: "No se pudo copiar el enlace"
                },
                "de-DE": {
                  singular: "Link wurde nicht kopiert"
                },
                "fr-FR": {
                  singular: "Impossible de copier le lien"
                },
                "ja-JP": {
                  singular: "リンクをコピーできませんでした"
                },
                "ko-KR": {
                  singular: "링크 복사를 실패했습니다"
                },
                "pt-BR": {
                  singular: "Falha ao copiar o link"
                },
                "zh-CN": {
                  singular: "链接复制失败"
                }
              }
            });
            _v0 && !_v1 && _v3 && _v2 && (0, _v56.getRemainingDays)(_v2) <= _v56.EXPIRY_SOON_DAYS ? _v1.current({
              id: _v119,
              duration: 0,
              isClosable: !0,
              render: _v0 => (0, _v1.jsx)(_v77.ToastRoot, {
                ..._v0,
                variant: "neutral",
                children: (0, _v1.jsxs)(_v30.Center, {
                  gap: "sm",
                  children: [(0, _v1.jsx)(_v77.ToastTitle, {
                    children: _v0
                  }), (0, _v1.jsx)(_v77.ToastButton, {
                    onClick: () => {
                      _v1.current.closeAll(), _v3();
                    },
                    children: (0, _v4.translate)({
                      singular: "Reset expiration",
                      dictionary: {
                        es: {
                          singular: "Restablecer expiración"
                        },
                        "de-DE": {
                          singular: "Ablaufdatum zurücksetzen"
                        },
                        "fr-FR": {
                          singular: "Réinitialiser l'expiration"
                        },
                        "ja-JP": {
                          singular: "有効期限をリセット"
                        },
                        "ko-KR": {
                          singular: "만료 재설정"
                        },
                        "pt-BR": {
                          singular: "Redefinir expiração"
                        },
                        "zh-CN": {
                          singular: "重置到期时间"
                        }
                      }
                    })
                  })]
                })
              })
            }) : _v1.current({
              title: _v0,
              id: _v119,
              ...(_v0 ? {} : {
                variant: "warning"
              }),
              containerStyle: {
                maxWidth: "100%",
                minWidth: "auto",
                width: "fit-content"
              },
              onCloseComplete: () => _v1.current.close(_v119)
            });
          }
        }, [_v6, _v5, _v4])
      };
    };
  _v0.s(["useCopyLinkToast", 0, _v120], 0);
  let _v121 = _v0 => {
      let _v1 = !!_v0?.isChinaDelivery,
        _v2 = _v0?.onCopyEmbedCode,
        _v3 = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0.clipId),
        _v4 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig),
        _v5 = _v4?.location ?? "panel",
        {
          trackShareEmbedPlaybackToggled: _v6,
          trackEmbedCodeCopied: _v7
        } = (0, _v15.useDistributionTracking)(),
        {
          data: _v8,
          isLoading: _v9
        } = (0, _v50.useGetVideoSharingData)(),
        {
          data: _v10
        } = function (_v0) {
          let {
              clipId: _v1,
              clipHash: _v2
            } = (0, _v10.useGlobalStore)(({
              clip: _v0
            }) => _v0),
            _v3 = (0, _v55.getClipRequestId)(_v1, _v2);
          return (0, _v87.useGetUnlockedVideo)(() => ({
            where: {
              videoId: _v3
            },
            select: _v0?.isChinaDelivery ? ["embed.html", "regionalLinks.cn", "regionalPrivacyEmbeds.cn.html"] : ["embed.html"],
            query: {
              responsive: !0
            }
          }), {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1
          });
        }({
          isChinaDelivery: _v1
        }),
        {
          data: _v11
        } = _v88({
          skip: !_v1
        }),
        [_v12, _v13] = (0, _v2.useState)("responsive"),
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)(!1),
        [_v18, _v19] = (0, _v2.useState)(!1),
        {
          embedCode: _v20,
          dimensions: _v21,
          handleDimensionsChange: _v22
        } = (({
          embedType: _v0,
          fixedCode: _v1,
          responsiveCode: _v2,
          initialDimensions: _v3
        }) => {
          let [_v4, _v5] = (0, _v2.useState)(_v3),
            _v6 = _v3.width / _v3.height;
          return {
            embedCode: (0, _v2.useMemo)(() => {
              if ("responsive" === _v0) {
                if (_v2) return _v2;
                let _v0 = (1 / _v6 * 100).toFixed(2),
                  _v1 = new DOMParser().parseFromString(_v1, "text/html").querySelector("iframe")?.src;
                return `<div style="padding:${_v0}% 0 0 0;position:relative;"><iframe src="${_v1}/embed" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0" style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe></div>`;
              }
              return _v1.replace(/height="\d*"/, `height="${_v4.height}"`).replace(/width="\d*"/, `width="${_v4.width}"`);
            }, [_v6, _v4, _v0, _v1, _v2]),
            dimensions: _v4,
            handleDimensionsChange: (_v0, _v1) => {
              let {
                value: _v2
              } = _v0.currentTarget;
              if (isNaN(Number(_v2))) return;
              let _v3 = Math.round(Math.min(Number(_v2) || 0, "width" === _v1 ? 0 : 0 / _v6));
              _v5("width" === _v1 ? {
                width: _v3,
                height: Math.round(_v3 / _v6)
              } : {
                width: Math.round(_v3 * _v6),
                height: _v3
              });
            }
          };
        })({
          fixedCode: (_v1 ? _v11?.regionalPrivacyEmbeds?.cn?.html : _v8?.embed?.html) || "",
          responsiveCode: (_v1 ? _v10?.regionalPrivacyEmbeds?.cn?.html : _v10?.embed?.html) || "",
          embedType: _v12,
          initialDimensions: {
            width: _v8?.width ?? 720,
            height: _v8?.height ?? 405
          }
        }),
        {
          triggerCopyLinkToast: _v23
        } = _v120(),
        _v24 = (0, _v2.useMemo)(() => {
          if (!_v20) return "";
          let _v0 = new DOMParser().parseFromString(_v20, "text/html"),
            _v1 = _v0.querySelector("iframe");
          if (_v1) {
            let _v0 = new URL(_v1.src);
            _v14 ? _v0.searchParams.set("autoplay", "1") : _v0.searchParams.delete("autoplay"), _v16 ? _v0.searchParams.set("muted", "1") : _v0.searchParams.delete("muted"), _v18 ? _v0.searchParams.set("loop", "1") : _v0.searchParams.delete("loop"), _v1.src = _v0.toString();
          }
          return _v0.body.innerHTML;
        }, [_v20, _v14, _v18, _v16]),
        _v25 = (0, _v2.useCallback)(async () => {
          let _v0 = !0;
          if (_v24) {
            try {
              await navigator.clipboard.writeText(_v24), _v0 = !0, _v7({
                clipId: String(_v3),
                pageName: _v4?.pageName ?? "",
                location: _v4?.location ?? "panel"
              });
            } catch (_v0) {
              _v0 = !1;
            }
            _v23(_v0, !0), _v0 && _v2?.();
          }
        }, [_v24, _v23, _v3, _v7, _v4, _v2]);
      return {
        dimensions: _v21,
        embedCode: _v24,
        embedType: _v12,
        isEmbedDisabled: !_v8?.embed.html,
        isLoading: _v9,
        isAutoplay: _v14,
        isLoop: _v18,
        isMute: _v16,
        copyEmbedCode: _v25,
        handleDimensionsChange: _v22,
        setEmbedType: _v13,
        togglePlaybackOption: _v0 => {
          let [_v1, _v2] = {
            autoplay: [_v14, _v15, "Autoplay"],
            mute: [_v16, _v17, "Mute"],
            loop: [_v18, _v19, "Loop"]
          }[_v0];
          _v6({
            clipId: String(_v3),
            playbackSetting: _v0,
            playbackNewStatus: !_v1,
            shareSurface: _v5
          }), _v2(_v0 => !_v0), "autoplay" !== _v0 || _v1 || _v17(!0);
        }
      };
    },
    _v122 = () => ({
      changesSaved: (0, _v4.translate)({
        singular: "Changes saved",
        dictionary: {
          es: {
            singular: "Guardamos los cambios"
          },
          "de-DE": {
            singular: "Änderungen wurden gespeichert"
          },
          "fr-FR": {
            singular: "Changements sauvegardés"
          },
          "ja-JP": {
            singular: "変更内容が保存されました"
          },
          "ko-KR": {
            singular: "변경 사항 저장 완료"
          },
          "pt-BR": {
            singular: "Alterações salvas"
          },
          "zh-CN": {
            singular: "已保存更改"
          }
        }
      }),
      somethingWentWrong: (0, _v4.translate)({
        singular: "Oops! Something went wrong!",
        dictionary: {
          es: {
            singular: "¡Ups, algo salió mal!"
          },
          "de-DE": {
            singular: "Hoppla, hier ist was schief gegangen!"
          },
          "fr-FR": {
            singular: "Oups ! Quelque chose a planté !"
          },
          "ja-JP": {
            singular: "エラーが発生しました！"
          },
          "ko-KR": {
            singular: "죄송합니다. 문제가 발생했습니다."
          },
          "pt-BR": {
            singular: "Opa! Alguma coisa deu errado!"
          },
          "zh-CN": {
            singular: "哎呀！出错了！"
          }
        }
      }),
      linkCopied: (0, _v4.translate)({
        singular: "Link copied",
        dictionary: {
          es: {
            singular: "Vínculo copiado"
          },
          "de-DE": {
            singular: "Link kopiert"
          },
          "fr-FR": {
            singular: "Lien copié"
          },
          "ja-JP": {
            singular: "リンクがコピーされました"
          },
          "ko-KR": {
            singular: "링크가 복사됐습니다"
          },
          "pt-BR": {
            singular: "Link copiado"
          },
          "zh-CN": {
            singular: "链接已复制"
          }
        }
      }),
      linkCopyFailed: (0, _v4.translate)({
        singular: "Link failed to copy",
        dictionary: {
          es: {
            singular: "No se pudo copiar el enlace"
          },
          "de-DE": {
            singular: "Link wurde nicht kopiert"
          },
          "fr-FR": {
            singular: "Impossible de copier le lien"
          },
          "ja-JP": {
            singular: "リンクをコピーできませんでした"
          },
          "ko-KR": {
            singular: "링크 복사를 실패했습니다"
          },
          "pt-BR": {
            singular: "Falha ao copiar o link"
          },
          "zh-CN": {
            singular: "链接复制失败"
          }
        }
      })
    }),
    _v123 = ({
      layoutType: _v0
    }) => {
      let _v1 = _v122(),
        _v2 = (0, _v77.useToast)(),
        {
          enterpriseCustomDomain: _v3,
          isContentModerationEnabled: _v4,
          isLoading: _v5
        } = _v83(),
        {
          chinaDeliveryLink: _v6
        } = _v88(),
        {
          dimensions: _v7,
          embedCode: _v8,
          embedType: _v9,
          isEmbedDisabled: _v10,
          copyEmbedCode: _v11,
          handleDimensionsChange: _v12,
          setEmbedType: _v13
        } = _v121({
          isChinaDelivery: !0
        }),
        {
          triggerCopyLinkToast: _v14
        } = _v120(),
        {
          chinaRegionalPrivacy: _v15,
          isChinaAccessEnabled: _v16,
          isUpdatingChinaAccess: _v17,
          onChinaAccessChange: _v18,
          chinaAccessLinkPrivacy: _v19,
          isUpdatingChinaAccessLinkPrivacy: _v20,
          onChinaAccessLinkPrivacyChange: _v21,
          patchData: _v22,
          patchError: _v23
        } = _v89();
      (0, _v2.useEffect)(() => {
        if (_v23) {
          let _v0 = "china-access-privacy-error-toast";
          _v2.isActive(_v0) || _v2({
            title: _v1.somethingWentWrong,
            id: _v0
          });
        }
      }, [_v23, _v2, _v1.somethingWentWrong]), (0, _v2.useEffect)(() => {
        if (_v22) {
          let _v0 = "china-access-privacy-save-toast";
          _v2.isActive(_v0) || _v2({
            title: _v1.changesSaved,
            id: _v0
          });
        }
      }, [_v22, _v2, _v1.changesSaved]);
      let _v24 = (0, _v2.useCallback)(async () => {
          if (!_v6) return;
          let _v0 = !1;
          try {
            let _v0 = new URL(_v6);
            _v0.searchParams.append("share", "copy"), await navigator.clipboard.writeText(_v0.toString()), _v0 = !0;
          } catch (_v0) {
            _v0 = !1;
          }
          _v14(_v0);
        }, [_v6, _v14]),
        _v25 = _v4 && !_v15?.contentScan,
        _v26 = _v4 && _v15?.contentScan?.status === "not_started",
        _v27 = _v4 && _v15?.contentScan?.status === "approved";
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v95, {
          domain: _v3,
          isChecked: _v16,
          isDisabled: _v17,
          onChange: () => {
            _v18?.();
          }
        }), (0, _v1.jsx)(_v90, {}), _v16 && (!_v4 || _v25 || _v26 || _v27) && !_v5 && (0, _v1.jsxs)(_v72.Tabs, {
          size: "xs",
          children: [(0, _v1.jsxs)(_v74.TabList, {
            children: [(0, _v1.jsx)(_v73.Tab, {
              children: (0, _v4.translate)({
                singular: "Link",
                dictionary: {
                  es: {
                    singular: "Vínculo"
                  },
                  "fr-FR": {
                    singular: "Lien"
                  },
                  "ja-JP": {
                    singular: "リンク"
                  },
                  "ko-KR": {
                    singular: "링크"
                  },
                  "zh-CN": {
                    singular: "链接"
                  }
                }
              })
            }), (0, _v1.jsx)(_v73.Tab, {
              children: (0, _v4.translate)({
                singular: "Embed",
                dictionary: {
                  es: {
                    singular: "Insertar"
                  },
                  "de-DE": {
                    singular: "Einbetten"
                  },
                  "fr-FR": {
                    singular: "Intégration"
                  },
                  "ja-JP": {
                    singular: "埋め込み"
                  },
                  "ko-KR": {
                    singular: "임베드"
                  },
                  "pt-BR": {
                    singular: "Incorporação"
                  },
                  "zh-CN": {
                    singular: "嵌入"
                  }
                }
              })
            }), (0, _v1.jsx)(_v72.TabIndicator, {})]
          }), (0, _v1.jsxs)(_v76.TabPanels, {
            children: [(0, _v1.jsxs)(_v75.TabPanel, {
              display: "flex",
              flexDirection: "column",
              gap: "lg",
              mt: "lg",
              children: [(0, _v1.jsx)(_v114, {
                activePrivacy: _v19,
                isDisabled: _v20,
                onSelectPrivacy: _v21
              }), (0, _v1.jsx)(_v106, {
                value: _v6,
                onCopyLinkButtonClick: _v24
              })]
            }), (0, _v1.jsxs)(_v75.TabPanel, {
              display: "flex",
              flexDirection: "column",
              gap: "lg",
              mt: "lg",
              children: [(0, _v1.jsx)(_v111, {
                dimensions: _v7,
                embedType: _v9,
                onDimensionsChange: _v12,
                onEmbedTypeChange: _v13
              }), (0, _v1.jsx)(_v100, {
                embedCode: _v8,
                isDisabled: _v10,
                spacing: "modal" === _v0 ? "1.5rem" : "1rem",
                onCopyEmbedCodeClick: _v11
              })]
            })]
          })]
        })]
      });
    };
  var _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0);
  let _v136 = ({
    viewPrivacy: _v0,
    onCheckedChange: _v1
  }) => {
    let _v2 = (0, _v6.useViewer)(),
      {
        data: _v3
      } = (0, _v50.useGetVideoSharingData)(),
      {
        isChecked: _v4,
        isDisabled: _v5,
        onToggle: _v6,
        quota: _v7,
        isQuotaLoading: _v8,
        restricted: _v9,
        showStorageLimitPaywall: _v10,
        closeStorageLimitPaywall: _v11
      } = function (_v0) {
        let _v1 = _v122(),
          _v2 = (0, _v77.useToast)(),
          _v3 = (0, _v2.useRef)(_v2),
          _v4 = (0, _v6.useViewer)(),
          _v5 = _v4?.user?.uploadQuota?.restricted,
          {
            privacy: _v6,
            patchState: {
              loading: _v7,
              error: _v8
            },
            patchVideoPrivacy: _v9
          } = _v118(),
          {
            uploadQuota: _v10,
            mutate: _v11,
            isValidating: _v12
          } = (0, _v132.useUserQuotaApi)(),
          _v13 = _v6?.embed,
          [_v14, _v15] = (0, _v2.useState)(null),
          [_v16, _v17] = (0, _v2.useState)(!1),
          _v18 = _v14 ?? "private" !== _v13;
        (0, _v2.useEffect)(() => {
          _v15(null);
        }, [_v13]);
        let _v19 = (0, _v2.useRef)(_v7);
        (0, _v2.useEffect)(() => {
          !_v19.current || _v7 || _v8 || "anybody" !== _v0 || _v11(void 0, {
            revalidate: !0
          }), _v19.current = _v7;
        }, [_v7, _v8, _v0, _v11]);
        let _v20 = (0, _v2.useRef)(null);
        (0, _v2.useEffect)(() => {
          _v8 && _v8 !== _v20.current && (_v20.current = _v8, _v15(null), "res" in _v8 ? _v8.res.clone().json().then(_v0 => {
            0 === _v0.error_code ? _v17(!0) : _v0();
          }).catch(() => _v0()) : _v0());
          function _v0() {
            let _v0 = "embed-storage-limit-toast";
            _v3.current.isActive(_v0) || _v3.current({
              title: _v1.somethingWentWrong,
              id: _v0
            });
          }
        }, [_v8, _v1.somethingWentWrong]);
        let _v21 = (0, _v2.useCallback)(async () => {
          let _v0 = !_v18;
          _v15(_v0), await _v9({
            embed: _v0 ? "public" : "private"
          });
        }, [_v18, _v9]);
        return {
          isChecked: _v18,
          isDisabled: _v7,
          onToggle: _v21,
          quota: _v10 ?? null,
          isQuotaLoading: _v12,
          restricted: _v5,
          showStorageLimitPaywall: _v16,
          closeStorageLimitPaywall: () => _v17(!1)
        };
      }(_v0),
      _v12 = null != _v9;
    return ((0, _v2.useEffect)(() => {
      _v12 && _v1?.(_v4);
    }, [_v4, _v12, _v1]), _v12) ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v135.EmbeddableQuotaMeter, {
        isChecked: _v4,
        isDisabled: _v5,
        viewPrivacy: _v0,
        onChange: _v6,
        quota: _v7,
        isQuotaLoading: _v8,
        highlightedValue: _v3?.filesSize?.totalSize,
        isHighlightedAdditional: _v3?.filesSize?.fileSizeType === "PROCESSING"
      }), _v10 && (0, _v1.jsx)(_v5.default, {
        apiUrl: _v2?.apiUrl,
        userConfig: {
          jwt: _v2?.jwt,
          userId: _v2?.user?.id
        },
        templateType: "default",
        onClose: _v11,
        tracking: {
          params: {
            feature: "storage",
            upsell_name: "embed_storage_limit",
            location: "SVV_share_drawer"
          },
          paywallTracking: {
            paywallTrigger: "svv_embed_toggle_storage_limit",
            paywallLocation: "single_video_view_share_drawer",
            paywallType: "popup",
            paywallFeature: "storage_limit"
          }
        }
      })]
    }) : null;
  };
  var _v137 = _v0.i(0),
    _v138 = _v0.i(0);
  let _v139 = "/assets/images_v6/video_review/mock_avatar_eric.webp",
    _v140 = ({
      src: _v0,
      size: _v1 = "21px",
      lightLocked: _v2 = !1
    }) => (0, _v1.jsx)(_v138.Image, {
      src: _v0,
      alt: "",
      "aria-hidden": !0,
      w: _v1,
      h: _v1,
      minWidth: _v1,
      borderRadius: "full",
      border: "1px solid",
      borderColor: _v2 ? "#97a1ad" : "gray.400",
      objectFit: "cover"
    }),
    _v141 = () => (0, _v1.jsxs)(_v60.Flex, {
      bg: "fill-component",
      borderRadius: "17px",
      p: "14px",
      w: "100%",
      flexDirection: "column",
      gap: "10px",
      children: [(0, _v1.jsxs)(_v11.Box, {
        position: "relative",
        w: "100%",
        aspectRatio: "16/9",
        borderRadius: "7px",
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v138.Image, {
          src: "/assets/images_v6/video_review/mock_video_still.webp",
          alt: "",
          "aria-hidden": !0,
          w: "100%",
          h: "100%",
          objectFit: "cover"
        }), (0, _v1.jsxs)(_v60.Flex, {
          position: "absolute",
          left: "5.7%",
          bottom: "19.8%",
          bg: "white",
          borderRadius: "14px",
          pl: "9px",
          pr: "10px",
          py: "8px",
          minWidth: "194px",
          minHeight: "77px",
          alignItems: "center",
          gap: "12px",
          children: [(0, _v1.jsx)(_v140, {
            src: _v139,
            size: "30px",
            lightLocked: !0
          }), (0, _v1.jsxs)(_v60.Flex, {
            flexDirection: "column",
            gap: "4px",
            children: [(0, _v1.jsxs)(_v60.Flex, {
              alignItems: "baseline",
              gap: "6px",
              children: [(0, _v1.jsx)(_v24.Text, {
                fontSize: "17px",
                fontFamily: "heading",
                color: "#0e1216",
                lineHeight: "1.3",
                children: (0, _v4.translate)("Eric Phillips")
              }), (0, _v1.jsx)(_v24.Text, {
                fontSize: "12px",
                color: "#68727c",
                lineHeight: "1.3",
                children: (0, _v4.translate)({
                  singular: "Just now",
                  dictionary: {
                    es: {
                      singular: "Justo ahora"
                    },
                    "de-DE": {
                      singular: "Gerade eben"
                    },
                    "fr-FR": {
                      singular: "À l’instant"
                    },
                    "ja-JP": {
                      singular: "たった今"
                    },
                    "ko-KR": {
                      singular: "방금"
                    },
                    "pt-BR": {
                      singular: "Agora mesmo"
                    },
                    "zh-CN": {
                      singular: "刚刚"
                    }
                  }
                })
              })]
            }), (0, _v1.jsx)(_v24.Text, {
              fontSize: "16px",
              color: "#0e1216",
              lineHeight: "1.3",
              children: (0, _v4.translate)({
                singular: "Oops. Too big!",
                dictionary: {
                  es: {
                    singular: "¡Ups. Demasiado grande!"
                  },
                  "de-DE": {
                    singular: "Ups. Zu groß!"
                  },
                  "fr-FR": {
                    singular: "Oups. Trop grand !"
                  },
                  "ja-JP": {
                    singular: "おっと。大きすぎます！"
                  },
                  "ko-KR": {
                    singular: "앗. 너무 큽니다!"
                  },
                  "pt-BR": {
                    singular: "Ops. Grande demais!"
                  },
                  "zh-CN": {
                    singular: "哎呀。太大了！"
                  }
                }
              })
            })]
          })]
        })]
      }), (0, _v1.jsxs)(_v11.Box, {
        position: "relative",
        h: "21px",
        w: "100%",
        children: [(0, _v1.jsx)(_v11.Box, {
          position: "absolute",
          left: "7.4%",
          top: 0,
          children: (0, _v1.jsx)(_v140, {
            src: _v139
          })
        }), (0, _v1.jsxs)(_v60.Flex, {
          position: "absolute",
          left: "38.8%",
          top: 0,
          alignItems: "center",
          children: [(0, _v1.jsx)(_v140, {
            src: "/assets/images_v6/video_review/mock_avatar_1.webp"
          }), (0, _v1.jsx)(_v11.Box, {
            ml: "-10px",
            children: (0, _v1.jsx)(_v140, {
              src: "/assets/images_v6/video_review/mock_avatar_2.webp"
            })
          }), (0, _v1.jsx)(_v11.Box, {
            ml: "-10px",
            children: (0, _v1.jsx)(_v140, {
              src: "/assets/images_v6/video_review/mock_avatar_3.webp"
            })
          })]
        }), (0, _v1.jsx)(_v60.Flex, {
          position: "absolute",
          right: "14.2%",
          top: 0,
          w: "21px",
          h: "21px",
          bg: "gray.500",
          borderRadius: "full",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v1.jsx)(_v24.Text, {
            fontSize: "12px",
            color: "white",
            lineHeight: "none",
            children: "2"
          })
        })]
      }), (0, _v1.jsx)(_v11.Box, {
        w: "100%",
        h: "7px",
        borderRadius: "full",
        bg: "fill-component-hover",
        children: (0, _v1.jsx)(_v11.Box, {
          w: "10%",
          h: "100%",
          borderRadius: "full",
          bg: "#00adef"
        })
      })]
    }),
    _v142 = ({
      isOpen: _v0,
      onClose: _v1,
      onCopyReviewLink: _v2,
      onCopyRegularLink: _v3,
      isCopyReviewLinkDisabled: _v4 = !1
    }) => {
      let [_v5, _v6] = (0, _v2.useState)(!1);
      return (0, _v1.jsxs)(_v61.Modal, {
        isOpen: _v0,
        onClose: _v1,
        onCloseComplete: () => _v6(!1),
        children: [(0, _v1.jsx)(_v62.ModalOverlay, {}), (0, _v1.jsxs)(_v63.ModalContent, {
          maxW: 480,
          borderRadius: 24,
          overflow: "hidden",
          pt: "4",
          children: [(0, _v1.jsx)(_v60.Flex, {
            flexDirection: "column",
            alignItems: "center",
            px: "6",
            children: (0, _v1.jsxs)(_v60.Flex, {
              flexDirection: "column",
              alignItems: "center",
              gap: "5",
              py: "5",
              w: "100%",
              children: [(0, _v1.jsxs)(_v60.Flex, {
                flexDirection: "column",
                alignItems: "center",
                gap: "3",
                w: "100%",
                children: [(0, _v1.jsx)(_v24.Text, {
                  variant: "heading-xl",
                  color: "text-primary",
                  textAlign: "center",
                  children: (0, _v4.translate)({
                    singular: "Sharing for feedback?",
                    dictionary: {
                      es: {
                        singular: "¿Compartir para recibir comentarios?"
                      },
                      "de-DE": {
                        singular: "Zum Teilen, um Feedback zu erhalten?"
                      },
                      "fr-FR": {
                        singular: "Partager pour recevoir des retours ?"
                      },
                      "ja-JP": {
                        singular: "フィードバック用に共有しますか？"
                      },
                      "ko-KR": {
                        singular: "피드백을 위해 공유하시나요?"
                      },
                      "pt-BR": {
                        singular: "Compartilhando para receber feedback?"
                      },
                      "zh-CN": {
                        singular: "要分享以获取反馈吗？"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v24.Text, {
                  variant: "body-lg",
                  color: "text-secondary",
                  textAlign: "center",
                  children: (0, _v4.translate)({
                    singular: "Review links let everyone leave time-stamped comments directly on the video. No more email threads.",
                    dictionary: {
                      es: {
                        singular: "Los enlaces de revisión permiten que todo el mundo deje comentarios con marca de tiempo directamente en el vídeo. No más hilos de correo electrónico."
                      },
                      "de-DE": {
                        singular: "Review-Links ermöglichen es allen, zeitgestempelte Kommentare direkt im Video zu hinterlassen. Keine E-Mail-Verläufe mehr."
                      },
                      "fr-FR": {
                        singular: "Les liens de révision permettent à chacun de laisser des commentaires horodatés directement sur la vidéo. Plus besoin des fils d'e-mails."
                      },
                      "ja-JP": {
                        singular: "レビュー用リンクを使うと、誰でも動画上にタイムスタンプ付きのコメントを直接残せます。もうメールのやり取りは不要です。"
                      },
                      "ko-KR": {
                        singular: "검토 링크를 통해 누구나 동영상에 타임스탬프가 있는 댓글을 직접 남길 수 있습니다. 더 이상 이메일 스레드가 필요 없습니다."
                      },
                      "pt-BR": {
                        singular: "Links de revisão permitem que todos deixem comentários com carimbo de tempo diretamente no vídeo. Chega de conversas por e-mail."
                      },
                      "zh-CN": {
                        singular: "审阅链接可让每个人在视频中直接留下带时间戳的评论。无需再通过邮件往来。"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v137.Checkbox, {
                  size: "md",
                  isChecked: _v5,
                  onChange: _v0 => _v6(_v0.target.checked),
                  children: (0, _v4.translate)({
                    singular: "Don't show this again",
                    dictionary: {
                      es: {
                        singular: "No mostrar esto de nuevo"
                      },
                      "de-DE": {
                        singular: "Nicht mehr anzeigen"
                      },
                      "fr-FR": {
                        singular: "Ne plus afficher ceci"
                      },
                      "ja-JP": {
                        singular: "今後表示しない"
                      },
                      "ko-KR": {
                        singular: "다시 표시하지 않음"
                      },
                      "pt-BR": {
                        singular: "Não mostrar isso novamente"
                      },
                      "zh-CN": {
                        singular: "不再显示"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v141, {})]
            })
          }), (0, _v1.jsx)(_v60.Flex, {
            flexDirection: "column",
            alignItems: "center",
            pt: "5",
            pb: "6",
            px: "6",
            w: "100%",
            children: (0, _v1.jsxs)(_v60.Flex, {
              flexDirection: "column",
              gap: "2",
              w: "100%",
              children: [(0, _v1.jsx)(_v96.Button, {
                variant: "primary",
                size: "lg",
                w: "100%",
                isDisabled: _v4,
                onClick: () => _v2(_v5),
                children: (0, _v4.translate)({
                  singular: "Copy review link",
                  dictionary: {
                    es: {
                      singular: "Copiar enlace de revisión"
                    },
                    "de-DE": {
                      singular: "Review-Link kopieren"
                    },
                    "fr-FR": {
                      singular: "Copier le lien de révision"
                    },
                    "ja-JP": {
                      singular: "レビュー用リンクをコピー"
                    },
                    "ko-KR": {
                      singular: "검토 링크 복사"
                    },
                    "pt-BR": {
                      singular: "Copiar link de revisão"
                    },
                    "zh-CN": {
                      singular: "复制审阅链接"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v96.Button, {
                variant: "tertiary",
                size: "lg",
                w: "100%",
                onClick: () => _v3(_v5),
                children: (0, _v4.translate)({
                  singular: "Copy regular link",
                  dictionary: {
                    es: {
                      singular: "Copiar enlace normal"
                    },
                    "de-DE": {
                      singular: "Regulären Link kopieren"
                    },
                    "fr-FR": {
                      singular: "Copier le lien standard"
                    },
                    "ja-JP": {
                      singular: "通常のリンクをコピー"
                    },
                    "ko-KR": {
                      singular: "일반 링크 복사"
                    },
                    "pt-BR": {
                      singular: "Copiar link normal"
                    },
                    "zh-CN": {
                      singular: "复制常规链接"
                    }
                  }
                })
              })]
            })
          })]
        })]
      });
    };
  _v0.s(["ShareForFeedbackModal", 0, _v142], 0);
  var _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0);
  let _v162 = (_v0, _v1) => !_v1 || null === _v0 || _v0 <= 0 ? null : _v0,
    _v163 = [{
      label: () => (0, _v4.translate)({
        singular: "Tomorrow",
        dictionary: {
          es: {
            singular: "Mañana"
          },
          "de-DE": {
            singular: "Morgen"
          },
          "fr-FR": {
            singular: "Demain"
          },
          "ja-JP": {
            singular: "明日"
          },
          "ko-KR": {
            singular: "내일"
          },
          "pt-BR": {
            singular: "Amanhã"
          },
          "zh-CN": {
            singular: "明天"
          }
        }
      }),
      days: 1
    }, {
      label: () => (0, _v4.translate)({
        singular: "1 week",
        dictionary: {
          es: {
            singular: "1 semana"
          },
          "de-DE": {
            singular: "1 Woche"
          },
          "fr-FR": {
            singular: "1 semaine"
          },
          "ja-JP": {
            singular: "1週間"
          },
          "ko-KR": {
            singular: "1주일"
          },
          "pt-BR": {
            singular: "1 semana"
          },
          "zh-CN": {
            singular: "1 周"
          }
        }
      }),
      days: 7
    }, {
      label: () => (0, _v4.translate)({
        singular: "30 days",
        dictionary: {
          es: {
            singular: "30 días"
          },
          "de-DE": {
            singular: "30 Tage"
          },
          "fr-FR": {
            singular: "30 jours"
          },
          "ja-JP": {
            singular: "30日間"
          },
          "ko-KR": {
            singular: "30일"
          },
          "pt-BR": {
            singular: "30 dias"
          },
          "zh-CN": {
            singular: "30 天"
          }
        }
      }),
      days: 30
    }],
    _v164 = ({
      intervalDays: _v0,
      expiresOn: _v1,
      hasExpiration: _v2,
      onIntervalChange: _v3,
      onNoExpiration: _v4,
      onReset: _v5,
      isResetLoading: _v6,
      defaultIntervalDays: _v7,
      hasLink: _v8,
      isDisabled: _v9 = !1,
      isPatchLoading: _v10 = !1,
      manageDefaultsUrl: _v11,
      canManageDefaults: _v12,
      hasWorkspace: _v13,
      videoId: _v14,
      entryPoint: _v15
    }) => {
      let [_v16, _v17] = (0, _v2.useState)(!1),
        [_v18, _v19] = (0, _v2.useState)(!1),
        [_v20, _v21] = (0, _v2.useState)(0),
        _v22 = (0, _v2.useRef)(null),
        _v23 = (0, _v2.useRef)(null),
        _v24 = (0, _v2.useRef)(null),
        {
          trackSharingLinkExpirationValueChanged: _v25
        } = (0, _v15.useDistributionTracking)(),
        _v26 = _v162(_v0, _v2),
        _v27 = _v162(_v7 && _v7 > 0 ? _v7 : null, null != _v7 && _v7 > 0),
        _v28 = (0, _v2.useMemo)(() => {
          let _v0 = new Date();
          return _v0.setDate(_v0.getDate() + 1), _v0.setHours(0, 0, 0, 0), _v0;
        }, []),
        _v29 = (0, _v2.useMemo)(() => !!_v1 && new Date(_v1).getTime() < Date.now(), [_v1]),
        _v30 = (0, _v2.useMemo)(() => _v1 ? (0, _v56.getRemainingDays)(_v1) : null, [_v1]),
        _v31 = !_v29 && null !== _v30 && _v30 <= _v56.EXPIRY_SOON_DAYS,
        _v32 = (0, _v2.useMemo)(() => _v2 && null !== _v30 ? _v29 ? (0, _v4.translate)({
          singular: "Expired",
          dictionary: {
            es: {
              singular: "Expirado"
            },
            "de-DE": {
              singular: "Abgelaufen"
            },
            "fr-FR": {
              singular: "Expiré"
            },
            "ja-JP": {
              singular: "期限切れ"
            },
            "ko-KR": {
              singular: "만료됨"
            },
            "pt-BR": {
              singular: "Expirado"
            },
            "zh-CN": {
              singular: "已过期"
            }
          }
        }) : 0 === _v30 ? (0, _v4.translate)({
          singular: "Expires today",
          dictionary: {
            es: {
              singular: "Expira hoy"
            },
            "de-DE": {
              singular: "Läuft heute ab"
            },
            "fr-FR": {
              singular: "Expire aujourd'hui"
            },
            "ja-JP": {
              singular: "本日が有効期限です"
            },
            "ko-KR": {
              singular: "오늘 만료"
            },
            "pt-BR": {
              singular: "Expira hoje"
            },
            "zh-CN": {
              singular: "今天到期"
            }
          }
        }) : 1 === _v30 ? (0, _v4.translate)({
          singular: "Expires tomorrow",
          dictionary: {
            es: {
              singular: "Expira mañana"
            },
            "de-DE": {
              singular: "Läuft morgen ab"
            },
            "fr-FR": {
              singular: "Expire demain"
            },
            "ja-JP": {
              singular: "明日が有効期限です"
            },
            "ko-KR": {
              singular: "내일 만료"
            },
            "pt-BR": {
              singular: "Expira amanhã"
            },
            "zh-CN": {
              singular: "明天到期"
            }
          }
        }) : (0, _v4.translate)({
          singular: "Expires in {count} day",
          plural: "Expires in {count} days",
          count: _v30,
          replacements: {
            count: String(_v30)
          },
          dictionary: {
            es: {
              singular: "Expira en {count} día",
              plural: "Expira en {count} días"
            },
            "de-DE": {
              singular: "Läuft in {count} Tag ab",
              plural: "Läuft in {count} Tagen ab"
            },
            "fr-FR": {
              singular: "Expire dans {count} jour",
              plural: "Expire dans {count} jours"
            },
            "ja-JP": {
              singular: "あと{count}日で有効期限が切れます",
              plural: "あと{count}日で有効期限が切れます"
            },
            "ko-KR": {
              singular: "{count}일 후 만료됩니다",
              plural: "{count}일 후 만료됩니다"
            },
            "pt-BR": {
              singular: "Expira em {count} dia",
              plural: "Expira em {count} dias"
            },
            "zh-CN": {
              singular: "{count} 天后到期",
              plural: "{count} 天后到期"
            }
          }
        }) : null, [_v2, _v30, _v29]),
        _v33 = (0, _v2.useMemo)(() => _v2 ? null !== _v0 ? _v58(_v0) : _v7 && _v7 > 0 ? _v58(_v7) : (0, _v4.translate)({
          singular: "No expiration",
          dictionary: {
            es: {
              singular: "Sin expiración"
            },
            "de-DE": {
              singular: "Kein Ablaufdatum"
            },
            "fr-FR": {
              singular: "Pas d'expiration"
            },
            "ja-JP": {
              singular: "期限なし"
            },
            "ko-KR": {
              singular: "만료 없음"
            },
            "pt-BR": {
              singular: "Sem expiração"
            },
            "zh-CN": {
              singular: "无限期"
            }
          }
        }) : (0, _v4.translate)({
          singular: "No expiration",
          dictionary: {
            es: {
              singular: "Sin expiración"
            },
            "de-DE": {
              singular: "Kein Ablaufdatum"
            },
            "fr-FR": {
              singular: "Pas d'expiration"
            },
            "ja-JP": {
              singular: "期限なし"
            },
            "ko-KR": {
              singular: "만료 없음"
            },
            "pt-BR": {
              singular: "Sem expiração"
            },
            "zh-CN": {
              singular: "无限期"
            }
          }
        }), [_v2, _v0, _v7]),
        _v34 = (0, _v2.useCallback)(_v0 => new Date(Date.now() + _v0 * _v56.MS_PER_DAY).toISOString(), []),
        _v35 = (0, _v2.useCallback)(_v0 => {
          _v14 && _v26 !== _v0 && _v25({
            videoId: _v14,
            fromValue: _v26,
            toValue: _v0,
            defaultValueShown: _v27,
            entryPoint: _v15,
            isFirstLinkValue: !_v8
          });
        }, [_v14, _v26, _v27, _v15, _v8, _v25]),
        _v36 = (0, _v2.useCallback)(() => {
          _v4(), _v35(null), _v17(!1);
        }, [_v4, _v35]),
        _v37 = (0, _v2.useCallback)(_v0 => {
          _v3(_v0, _v34(_v0)), _v17(!1), _v35(_v0);
        }, [_v3, _v34, _v35]),
        _v38 = (0, _v2.useCallback)(() => {
          _v21(_v0 => _v0 + 1), _v19(!0), _v17(!1);
        }, []),
        _v39 = (0, _v2.useCallback)(_v0 => {
          if (!_v0.value.length) return;
          let {
              day: _v1,
              month: _v2,
              year: _v3
            } = _v0.value[0],
            _v4 = new Date();
          _v4.setHours(0, 0, 0, 0);
          let _v5 = new Date(_v3, _v2 - 1, _v1);
          _v5.setHours(0, 0, 0, 0);
          let _v6 = Math.round((_v5.getTime() - _v4.getTime()) / _v56.MS_PER_DAY);
          _v6 > 0 && (_v3(_v6, _v34(_v6)), _v35(_v6)), _v21(_v0 => _v0 + 1), _v19(!1);
        }, [_v3, _v34, _v35]);
      return (0, _v97.useOutsideClick)({
        enabled: _v16,
        ref: _v22,
        handler: _v0 => {
          _v0.target && _v23?.current && (_v23.current === _v0.target || _v23.current.contains(_v0.target)) || _v17(!1);
        }
      }), (0, _v97.useOutsideClick)({
        enabled: _v18,
        ref: _v24,
        handler: () => {
          _v19(!1);
        }
      }), (0, _v1.jsxs)(_v60.Flex, {
        flexDirection: "column",
        gap: "sm",
        children: [_v8 && (0, _v1.jsxs)(_v60.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          minHeight: (0, _v13.rem)(24),
          visibility: _v32 ? "visible" : "hidden",
          "aria-hidden": !_v32,
          children: [(0, _v1.jsx)(_v143.Badge, {
            size: "xs",
            variant: _v29 ? "error" : _v31 ? "staff" : "default",
            children: (0, _v1.jsx)(_v24.Text, {
              variant: "heading-2xs",
              whiteSpace: "nowrap",
              children: _v32 ?? " "
            })
          }), (0, _v1.jsxs)(_v60.Flex, {
            as: "button",
            type: "button",
            alignItems: "center",
            gap: "xs",
            onClick: _v5,
            disabled: _v9 || !_v32 || _v6,
            color: "text-secondary",
            background: "transparent",
            border: "none",
            padding: 0,
            cursor: "pointer",
            _hover: {
              opacity: .7
            },
            _disabled: {
              opacity: .4,
              cursor: "not-allowed"
            },
            "aria-label": (0, _v4.translate)({
              singular: "Reset",
              dictionary: {
                es: {
                  singular: "Restablecer"
                },
                "de-DE": {
                  singular: "Zurücksetzen"
                },
                "fr-FR": {
                  singular: "Réinitialiser"
                },
                "ja-JP": {
                  singular: "リセット"
                },
                "ko-KR": {
                  singular: "재설정"
                },
                "pt-BR": {
                  singular: "Redefinir"
                },
                "zh-CN": {
                  singular: "重置"
                }
              }
            }),
            children: [_v6 ? (0, _v1.jsx)(_v31.Spinner, {
              size: "xs"
            }) : (0, _v1.jsx)(_v160.Reset, {
              boxSize: (0, _v13.rem)(16)
            }), (0, _v1.jsx)(_v24.Text, {
              variant: "heading-2xs",
              children: (0, _v4.translate)({
                singular: "Reset",
                dictionary: {
                  es: {
                    singular: "Restablecer"
                  },
                  "de-DE": {
                    singular: "Zurücksetzen"
                  },
                  "fr-FR": {
                    singular: "Réinitialiser"
                  },
                  "ja-JP": {
                    singular: "リセット"
                  },
                  "ko-KR": {
                    singular: "재설정"
                  },
                  "pt-BR": {
                    singular: "Redefinir"
                  },
                  "zh-CN": {
                    singular: "重置"
                  }
                }
              })
            })]
          })]
        }), (0, _v1.jsxs)(_v60.Flex, {
          alignItems: "center",
          justifyContent: "space-between",
          children: [(0, _v1.jsxs)(_v60.Flex, {
            alignItems: "center",
            gap: "xs",
            children: [(0, _v1.jsx)(_v24.Text, {
              variant: "body-md",
              color: "text-primary",
              children: (0, _v4.translate)({
                singular: "Expiration",
                dictionary: {
                  es: {
                    singular: "Expiración"
                  },
                  "de-DE": {
                    singular: "Ablaufdatum"
                  },
                  "ja-JP": {
                    singular: "有効期限"
                  },
                  "ko-KR": {
                    singular: "만료"
                  },
                  "pt-BR": {
                    singular: "Expiração"
                  },
                  "zh-CN": {
                    singular: "到期"
                  }
                }
              })
            }), (0, _v1.jsx)(_v25.Tooltip, {
              label: (0, _v4.translate)({
                singular: "Set an expiration date for your link.",
                dictionary: {
                  es: {
                    singular: "Establece una fecha de expiración para tu enlace."
                  },
                  "de-DE": {
                    singular: "Legen Sie ein Ablaufdatum für Ihren Link fest."
                  },
                  "fr-FR": {
                    singular: "Définissez une date d'expiration pour votre lien."
                  },
                  "ja-JP": {
                    singular: "リンクの有効期限を設定してください。"
                  },
                  "ko-KR": {
                    singular: "링크의 만료일을 설정하세요."
                  },
                  "pt-BR": {
                    singular: "Defina uma data de expiração para seu link."
                  },
                  "zh-CN": {
                    singular: "为您的链接设置到期日期。"
                  }
                }
              }),
              placement: "top",
              children: (0, _v1.jsx)(_v11.Box, {
                as: "span",
                display: "inline-flex",
                color: "text-secondary",
                tabIndex: 0,
                role: "img",
                "aria-label": (0, _v4.translate)({
                  singular: "Set an expiration date for your link.",
                  dictionary: {
                    es: {
                      singular: "Establece una fecha de expiración para tu enlace."
                    },
                    "de-DE": {
                      singular: "Legen Sie ein Ablaufdatum für Ihren Link fest."
                    },
                    "fr-FR": {
                      singular: "Définissez une date d'expiration pour votre lien."
                    },
                    "ja-JP": {
                      singular: "リンクの有効期限を設定してください。"
                    },
                    "ko-KR": {
                      singular: "링크의 만료일을 설정하세요."
                    },
                    "pt-BR": {
                      singular: "Defina uma data de expiração para seu link."
                    },
                    "zh-CN": {
                      singular: "为您的链接设置到期日期。"
                    }
                  }
                }),
                children: (0, _v1.jsx)(_v43.InfoCircle, {
                  boxSize: (0, _v13.rem)(16)
                })
              })
            })]
          }), (0, _v1.jsxs)(_v11.Box, {
            position: "relative",
            children: [(0, _v1.jsxs)(_v144.Menu, {
              isOpen: _v16,
              onClose: () => _v17(!1),
              placement: "bottom-end",
              isLazy: !0,
              children: [(0, _v1.jsx)(_v145.MenuButton, {
                as: _v96.Button,
                size: "xs",
                variant: "tertiary",
                leftIcon: (0, _v1.jsx)(_v156.Calendar, {
                  boxSize: (0, _v13.rem)(16)
                }),
                rightIcon: (0, _v1.jsx)(_v158.ChevronDownSmall, {
                  boxSize: (0, _v13.rem)(16)
                }),
                onClick: () => _v17(_v0 => !_v0),
                ref: _v23,
                isDisabled: _v9 || _v10,
                children: (0, _v1.jsx)(_v24.Text, {
                  variant: "heading-2xs",
                  whiteSpace: "nowrap",
                  children: _v33
                })
              }), (0, _v1.jsx)(_v146.MenuList, {
                paddingY: "xs",
                width: "auto",
                maxWidth: (0, _v13.rem)(350),
                ref: _v22,
                children: (0, _v1.jsxs)(_v148.MenuGroup, {
                  title: (0, _v4.translate)({
                    singular: "Link expires",
                    dictionary: {
                      es: {
                        singular: "El enlace expira"
                      },
                      "de-DE": {
                        singular: "Link läuft ab"
                      },
                      "fr-FR": {
                        singular: "Expiration du lien"
                      },
                      "ja-JP": {
                        singular: "リンクの有効期限"
                      },
                      "ko-KR": {
                        singular: "링크 만료"
                      },
                      "pt-BR": {
                        singular: "Link expira"
                      },
                      "zh-CN": {
                        singular: "链接到期"
                      }
                    }
                  }),
                  children: [(0, _v1.jsx)(_v155.MenuItem, {
                    padding: "sm",
                    borderRadius: "sm",
                    icon: (0, _v1.jsx)(_v157.Checkmark, {
                      boxSize: (0, _v13.rem)(16),
                      visibility: _v2 ? "hidden" : "visible"
                    }),
                    iconSpacing: (0, _v13.rem)(8),
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    onClick: _v36,
                    "aria-current": _v2 ? void 0 : "true",
                    children: (0, _v1.jsx)(_v24.Text, {
                      variant: "body-md",
                      children: (0, _v4.translate)({
                        singular: "No expiration",
                        dictionary: {
                          es: {
                            singular: "Sin expiración"
                          },
                          "de-DE": {
                            singular: "Kein Ablaufdatum"
                          },
                          "fr-FR": {
                            singular: "Pas d'expiration"
                          },
                          "ja-JP": {
                            singular: "期限なし"
                          },
                          "ko-KR": {
                            singular: "만료 없음"
                          },
                          "pt-BR": {
                            singular: "Sem expiração"
                          },
                          "zh-CN": {
                            singular: "无限期"
                          }
                        }
                      })
                    })
                  }), _v163.map(_v0 => {
                    let _v1,
                      _v2 = (_v1 = _v0.days, _v2 && _v0 === _v1);
                    return (0, _v1.jsx)(_v155.MenuItem, {
                      padding: "sm",
                      borderRadius: "sm",
                      icon: (0, _v1.jsx)(_v157.Checkmark, {
                        boxSize: (0, _v13.rem)(16),
                        visibility: _v2 ? "visible" : "hidden"
                      }),
                      iconSpacing: (0, _v13.rem)(8),
                      flexDirection: "row-reverse",
                      justifyContent: "space-between",
                      onClick: () => _v37(_v0.days),
                      "aria-current": _v2 ? "true" : void 0,
                      children: (0, _v1.jsx)(_v24.Text, {
                        variant: "body-md",
                        children: _v0.label()
                      })
                    }, _v0.days);
                  }), (0, _v1.jsx)(_v147.MenuDivider, {
                    paddingX: "md"
                  }), (0, _v1.jsx)(_v155.MenuItem, {
                    padding: "sm",
                    borderRadius: "sm",
                    icon: (0, _v1.jsx)(_v159.ChevronRightSmall, {
                      boxSize: (0, _v13.rem)(16)
                    }),
                    iconSpacing: (0, _v13.rem)(8),
                    flexDirection: "row-reverse",
                    justifyContent: "space-between",
                    onClick: _v38,
                    children: (0, _v1.jsx)(_v24.Text, {
                      variant: "body-md",
                      children: (0, _v4.translate)({
                        singular: "Choose custom date",
                        dictionary: {
                          es: {
                            singular: "Elegir fecha personalizada"
                          },
                          "de-DE": {
                            singular: "Benutzerdefiniertes Datum wählen"
                          },
                          "fr-FR": {
                            singular: "Choisir une date personnalisée"
                          },
                          "ja-JP": {
                            singular: "カスタム日付を選択"
                          },
                          "ko-KR": {
                            singular: "사용자 지정 날짜 선택"
                          },
                          "pt-BR": {
                            singular: "Escolher data personalizada"
                          },
                          "zh-CN": {
                            singular: "选择自定义日期"
                          }
                        }
                      })
                    })
                  })]
                })
              })]
            }), (0, _v1.jsxs)(_v151.Popover, {
              isOpen: _v18,
              onClose: () => _v19(!1),
              placement: "bottom-end",
              flip: !0,
              preventOverflow: !0,
              gutter: 4,
              isLazy: !0,
              children: [(0, _v1.jsx)(_v154.PopoverAnchor, {
                children: (0, _v1.jsx)(_v11.Box, {
                  position: "absolute",
                  top: "100%",
                  right: 0
                })
              }), (0, _v1.jsx)(_v152.PopoverContent, {
                padding: "0px",
                width: (0, _v13.rem)(300),
                maxWidth: (0, _v13.rem)(300),
                ref: _v24,
                sx: {
                  '[data-part="table-cell"]': {
                    width: "xs",
                    height: "xs",
                    cursor: "pointer"
                  },
                  '[data-part="table-cell"][aria-disabled="true"]': {
                    pointerEvents: "none"
                  },
                  '[data-part="table-header"]': {
                    width: "xs",
                    height: "xs",
                    fontSize: "body-md",
                    marginBottom: "sm"
                  },
                  '[data-scope="date-picker"]:disabled': {
                    color: "text-secondary",
                    pointerEvents: "none"
                  }
                },
                children: (0, _v1.jsxs)(_v153.PopoverBody, {
                  children: [(0, _v1.jsx)(_v11.Box, {
                    opacity: _v2 ? 1 : .5,
                    pointerEvents: _v2 ? "auto" : "none",
                    "aria-disabled": !_v2,
                    inert: !_v2 || void 0,
                    children: (0, _v1.jsx)(_v149.DatePicker, {
                      onValueChange: _v39,
                      open: !0,
                      closeOnSelect: !0,
                      min: new _v150.BokehDate.CalendarDate(_v28.getFullYear(), _v28.getMonth() + 1, _v28.getDate()),
                      children: (0, _v1.jsx)(_v149.Calendar, {
                        padding: "md",
                        width: (0, _v13.rem)(300)
                      })
                    }, _v20)
                  }), (0, _v1.jsx)(_v11.Box, {
                    paddingTop: "sm",
                    paddingX: "md",
                    paddingBottom: "md",
                    children: (0, _v1.jsx)(_v24.Text, {
                      variant: "caption",
                      color: "text-secondary",
                      children: _v12 ? _v11 === _v161.WORKSPACE_BASICS_URL ? (0, _v4.translate)({
                        singular: 'Go to the "Privacy" tab in {LINK}Manage Defaults{/LINK} to change the default link expiration.',
                        replacements: {
                          LINK: _v0 => (0, _v1.jsx)(_v93.Link, {
                            href: _v11,
                            textDecoration: "underline",
                            color: "inherit",
                            children: _v0
                          })
                        },
                        dictionary: {
                          es: {
                            singular: 'Vaya a la pestaña "Privacidad" en {LINK}Administrar valores predeterminados{/LINK} para cambiar la expiración predeterminada del enlace.'
                          },
                          "de-DE": {
                            singular: 'Gehen Sie zur Registerkarte "Datenschutz" in {LINK}Standardeinstellungen verwalten{/LINK}, um die standardmäßige Ablaufzeit für Links zu ändern.'
                          },
                          "fr-FR": {
                            singular: "Allez dans l'onglet \"Confidentialité\" de {LINK}Manage Defaults{/LINK} pour modifier l'expiration par défaut des liens."
                          },
                          "ja-JP": {
                            singular: '{LINK}Manage Defaults{/LINK} の "Privacy" タブに移動して、デフォルトのリンク有効期限を変更してください。'
                          },
                          "ko-KR": {
                            singular: '기본 링크 만료 기간을 변경하려면 {LINK}기본값 관리{/LINK}의 "개인정보" 탭으로 이동하세요.'
                          },
                          "pt-BR": {
                            singular: 'Acesse a aba "Privacidade" em {LINK}Gerenciar padrões{/LINK} para alterar a expiração padrão do link.'
                          },
                          "zh-CN": {
                            singular: '转到 "隐私" 选项卡，在 {LINK}管理默认值{/LINK} 中更改默认链接过期时间。'
                          }
                        }
                      }) : (0, _v4.translate)({
                        singular: "Go to {LINK}Manage Defaults{/LINK} to change the default link expiration.",
                        replacements: {
                          LINK: _v0 => (0, _v1.jsx)(_v93.Link, {
                            href: _v11,
                            textDecoration: "underline",
                            color: "inherit",
                            children: _v0
                          })
                        },
                        dictionary: {
                          es: {
                            singular: "Ve a {LINK}Administrar valores predeterminados{/LINK} para cambiar la expiración predeterminada del enlace."
                          },
                          "de-DE": {
                            singular: "Gehen Sie zu {LINK}Standardeinstellungen verwalten{/LINK}, um die Standard-Ablaufzeit für Links zu ändern."
                          },
                          "fr-FR": {
                            singular: "Allez dans {LINK}Gérer les paramètres par défaut{/LINK} pour modifier l'expiration par défaut du lien."
                          },
                          "ja-JP": {
                            singular: "デフォルトのリンク有効期限を変更するには、{LINK}デフォルトを管理{/LINK}してください。"
                          },
                          "ko-KR": {
                            singular: "기본 링크 만료를 변경하려면 {LINK}기본값 관리{/LINK}로 이동하세요."
                          },
                          "pt-BR": {
                            singular: "Vá para {LINK}Gerenciar Padrões{/LINK} para alterar a expiração padrão do link."
                          },
                          "zh-CN": {
                            singular: "前往 {LINK}管理默认设置{/LINK} 以更改链接的默认到期时间。"
                          }
                        }
                      }) : _v13 ? (0, _v4.translate)({
                        singular: "Workspace admins can change the default link expiration.",
                        dictionary: {
                          es: {
                            singular: "Los administradores del espacio de trabajo pueden cambiar la expiración predeterminada del enlace."
                          },
                          "de-DE": {
                            singular: "Administratoren des Arbeitsbereichs können die standardmäßige Ablaufzeit für Links ändern."
                          },
                          "fr-FR": {
                            singular: "Les administrateurs de l'espace de travail peuvent modifier l'expiration par défaut des liens."
                          },
                          "ja-JP": {
                            singular: "ワークスペース管理者はデフォルトのリンク有効期限を変更できます。"
                          },
                          "ko-KR": {
                            singular: "워크스페이스 관리자는 기본 링크 만료 기간을 변경할 수 있습니다."
                          },
                          "pt-BR": {
                            singular: "Os administradores do espaço de trabalho podem alterar a expiração padrão do link."
                          },
                          "zh-CN": {
                            singular: "工作区管理员可以更改默认链接过期时间。"
                          }
                        }
                      }) : (0, _v4.translate)({
                        singular: "Team owners can change the default link expiration.",
                        dictionary: {
                          es: {
                            singular: "Los propietarios del equipo pueden cambiar la expiración predeterminada del enlace."
                          },
                          "de-DE": {
                            singular: "Teaminhaber können die standardmäßige Ablaufzeit für Links ändern."
                          },
                          "fr-FR": {
                            singular: "Les propriétaires d'équipe peuvent modifier la durée d'expiration par défaut des liens."
                          },
                          "ja-JP": {
                            singular: "チームの所有者はデフォルトのリンクの有効期限を変更できます。"
                          },
                          "ko-KR": {
                            singular: "팀 소유자는 기본 링크 만료 기간을 변경할 수 있습니다."
                          },
                          "pt-BR": {
                            singular: "Os proprietários da equipe podem alterar a expiração padrão do link."
                          },
                          "zh-CN": {
                            singular: "团队所有者可以更改默认链接的过期时间。"
                          }
                        }
                      })
                    })
                  })]
                })
              })]
            })]
          })]
        })]
      });
    };
  var _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  let _v167 = ({
    isOpen: _v0,
    isSaveDisabled: _v1 = !1,
    onCancel: _v2,
    onConfirm: _v3
  }) => (0, _v1.jsxs)(_v61.Modal, {
    isOpen: _v0,
    onClose: _v2,
    children: [(0, _v1.jsx)(_v62.ModalOverlay, {}), (0, _v1.jsxs)(_v63.ModalContent, {
      children: [(0, _v1.jsx)(_v64.ModalHeader, {
        children: (0, _v4.translate)({
          singular: "Video is part of a subscription plan",
          dictionary: {
            es: {
              singular: "El video forma parte de un plan de suscripción"
            },
            "de-DE": {
              singular: "Video ist Teil eines Abonnementplans."
            },
            "fr-FR": {
              singular: "La vidéo fait partie d'une offre d'abonnement"
            },
            "ja-JP": {
              singular: "動画はサブスクリプションプランの一部です"
            },
            "ko-KR": {
              singular: "동영상은 구독 요금제의 일부입니다."
            },
            "pt-BR": {
              singular: "O vídeo faz parte de um plano de assinatura"
            },
            "zh-CN": {
              singular: "视频是订阅套餐的一部分"
            }
          }
        })
      }), (0, _v1.jsx)(_v165.ModalCloseButton, {
        onClick: _v2
      }), (0, _v1.jsx)(_v65.ModalBody, {
        children: (0, _v1.jsx)(_v166.Paragraph, {
          size: "md",
          children: (0, _v4.translate)({
            singular: "If this video’s privacy is set to Public, it can be viewed for free on Vimeo. It's also part of your streaming site's paid subscription plan.",
            dictionary: {
              es: {
                singular: "Si la privacidad de este video está establecida como Público, se puede ver de forma gratuita en Vimeo. También es parte del plan de suscripción paga de su sitio de transmisión."
              },
              "de-DE": {
                singular: "Wenn der Datenschutz für dieses Video auf „Öffentlich“ eingestellt ist, können Sie es kostenlos auf Vimeo ansehen. Es ist auch Teil des kostenpflichtigen Abonnements Ihrer Streaming-Website."
              },
              "fr-FR": {
                singular: "Si la confidentialité de cette vidéo est définie sur « Publique », elle peut être regardée gratuitement sur Vimeo. Elle fait également partie de l'offre d'abonnement payant de votre site de streaming."
              },
              "ja-JP": {
                singular: "この動画のプライバシー設定が「一般公開」になっている場合、Vimeoで無料で視聴できます。これもストリーミングサイトの有料サブスクリプションプランの一部です。"
              },
              "ko-KR": {
                singular: "이 동영상이 '공개'로 설정된 경우 Vimeo에서 무료로 시청할 수 있습니다. 또한 스트리밍 사이트의 유료 구독 요금제에도 포함됩니다."
              },
              "pt-BR": {
                singular: "Se este vídeo estiver definido como Público, ele pode ser assistido de graça no Vimeo. Também faz parte do plano de assinatura paga do seu site de transmissão."
              },
              "zh-CN": {
                singular: "如果此视频的隐私设置为公开，则可以在 Vimeo 上免费观看。这也是您的流媒体网站付费订阅套餐的一部分。"
              }
            }
          })
        })
      }), (0, _v1.jsxs)(_v66.ModalFooter, {
        children: [(0, _v1.jsx)(_v96.Button, {
          onClick: _v2,
          variant: "secondary",
          children: (0, _v4.translate)({
            singular: "Cancel",
            dictionary: {
              es: {
                singular: "Cancelar"
              },
              "de-DE": {
                singular: "Abbrechen"
              },
              "fr-FR": {
                singular: "Annuler"
              },
              "ja-JP": {
                singular: "キャンセル"
              },
              "ko-KR": {
                singular: "취소"
              },
              "pt-BR": {
                singular: "Cancelar"
              },
              "zh-CN": {
                singular: "取消"
              }
            }
          })
        }), (0, _v1.jsx)(_v96.Button, {
          isDisabled: _v1,
          onClick: _v3,
          variant: "primary",
          children: (0, _v4.translate)({
            singular: "Set to Public",
            dictionary: {
              es: {
                singular: "Configurar como Público"
              },
              "de-DE": {
                singular: "Auf „Öffentlich“ setzen"
              },
              "fr-FR": {
                singular: "Définir sur Publique"
              },
              "ja-JP": {
                singular: "一般公開に設定"
              },
              "ko-KR": {
                singular: "공개로 설정"
              },
              "pt-BR": {
                singular: "Definir como Público"
              },
              "zh-CN": {
                singular: "设为公开"
              }
            }
          })
        })]
      })]
    })]
  });
  var _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0);
  let _v171 = ({
      value: _v0 = 0,
      maxValue: _v1 = 1,
      isDisabled: _v2 = !1,
      onTimestampChange: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(_v172(_v0)),
        [_v6, _v7] = (0, _v2.useState)(!1),
        _v8 = Math.floor(_v0),
        _v9 = (0, _v2.useRef)(_v8);
      (0, _v2.useEffect)(() => {
        _v5(_v172(_v8)), _v6 && _v9.current !== _v8 && (_v3?.({
          seconds: _v8,
          isChecked: !0,
          shouldSeekPlayer: !1
        }), _v9.current = _v8);
      }, [_v8, _v6, _v3]);
      let _v10 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v0.target.checked;
          _v7(_v1), _v3?.({
            seconds: _v173(_v4),
            isChecked: _v1,
            shouldSeekPlayer: !1
          });
        }, [_v3, _v4]),
        _v11 = (0, _v2.useCallback)(_v0 => {
          _v5(_v174(_v0));
        }, []),
        _v12 = (0, _v2.useCallback)(_v0 => {
          let _v1 = Math.min(_v173(_v0), _v1);
          _v5(_v172(_v1)), _v3?.({
            seconds: _v1,
            isChecked: _v6,
            shouldSeekPlayer: !0
          });
        }, [_v1, _v6, _v3]);
      return (0, _v1.jsxs)(_v109.HStack, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v1.jsx)(_v137.Checkbox, {
          isDisabled: _v2,
          isChecked: _v6,
          onChange: _v10,
          children: (0, _v1.jsx)(_v24.Text, {
            variant: "body-md",
            color: "text-primary",
            children: (0, _v4.translate)({
              singular: "Start at",
              dictionary: {
                es: {
                  singular: "Comenzar en"
                },
                "de-DE": {
                  singular: "Startet um"
                },
                "fr-FR": {
                  singular: "Commencer à"
                },
                "ja-JP": {
                  singular: "開始時間"
                },
                "ko-KR": {
                  singular: "시작"
                },
                "pt-BR": {
                  singular: "Começar em"
                },
                "zh-CN": {
                  singular: "开始于"
                }
              }
            })
          })
        }), (0, _v1.jsxs)(_v168.Editable, {
          variant: "body-sm",
          h: "sm",
          color: "text-primary",
          defaultValue: "00:00",
          isDisabled: _v2,
          value: _v4,
          onChange: _v11,
          onSubmit: _v12,
          children: [(0, _v1.jsx)(_v169.EditablePreview, {
            lineHeight: (0, _v13.rem)(32),
            px: "xs",
            fontSize: "body-md",
            opacity: _v2 ? .5 : 1
          }), (0, _v1.jsx)(_v170.EditableInput, {
            fontSize: "body-md",
            px: "xs",
            maxLength: 8,
            minWidth: (0, _v13.rem)(48),
            maxWidth: (0, _v13.rem)(70),
            sx: {
              fieldSizing: "content"
            }
          })]
        })]
      });
    },
    _v172 = _v0 => {
      let _v1 = Math.floor(_v0 / 0),
        _v2 = Math.floor(_v0 % 0 / 60),
        _v3 = Math.floor(_v0 % 60);
      return _v1 > 0 ? `${_v1}:${_v2.toString().padStart(2, "0")}:${_v3.toString().padStart(2, "0")}` : `${_v2.toString().padStart(2, "0")}:${_v3.toString().padStart(2, "0")}`;
    },
    _v173 = _v0 => {
      let _v1 = _v0.split(":").map(_v0 => parseInt(_v0.replace(/\D/g, ""), 10) || 0);
      if (2 === _v1.length) {
        let [_v0, _v1] = _v1;
        return 60 * _v0 + _v1;
      }
      if (3 === _v1.length) {
        let [_v0, _v1, _v2] = _v1;
        return 0 * _v0 + 60 * _v1 + _v2;
      }
      return 0;
    },
    _v174 = _v0 => {
      let _v1 = _v0.replace(/\D/g, "");
      if (!_v1) return "00:00";
      let _v2 = parseInt(_v1, 10).toString().slice(-6).padStart(6, "0"),
        _v3 = _v2.slice(0, 2),
        _v4 = _v2.slice(2, 4),
        _v5 = _v2.slice(4, 6);
      return parseInt(_v3, 10) > 0 ? `${_v3}:${_v4}:${_v5}` : `${_v4}:${_v5}`;
    },
    _v175 = ({
      maxValue: _v0 = 1,
      playerApi: _v1,
      isDisabled: _v2,
      onTimestampChange: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(0);
      (0, _v2.useEffect)(() => {
        if (!_v1 || null === _v1 || "function" != typeof _v1?.ready) return;
        let _v0 = _v1?.currentTime;
        "number" == typeof _v0 && _v5(_v0);
      }, [_v1]), (0, _v2.useEffect)(() => {
        if (!_v1 || null === _v1 || "function" != typeof _v1.ready) return;
        let _v0 = ({
            seconds: _v0
          }) => {
            _v5(_v0);
          },
          _v1 = !1;
        return _v1?.ready?.(() => {
          _v1 || _v1?.on?.("timeupdate", _v0);
        }), () => {
          _v1 = !0, _v1 && null !== _v1 && "function" == typeof _v1.ready && _v1?.off?.("timeupdate", _v0);
        };
      }, [_v1]);
      let _v6 = (0, _v2.useCallback)(_v0 => {
        _v3?.(_v0), _v0.shouldSeekPlayer && (_v1?.seekTo(_v0.seconds), _v5(_v0.seconds));
      }, [_v3, _v5, _v1]);
      return (0, _v1.jsx)(_v171, {
        value: _v4,
        maxValue: _v0,
        isDisabled: _v2,
        onTimestampChange: _v6
      });
    },
    _v176 = 0,
    _v177 = (_v0 = _v176) => {
      let [_v1, _v2] = (0, _v2.useState)(!1),
        _v3 = (0, _v2.useRef)(null),
        _v4 = (0, _v2.useRef)(!1),
        _v5 = (0, _v2.useCallback)(() => {
          _v4.current = !0, _v2(!0), _v3.current && clearTimeout(_v3.current), _v3.current = setTimeout(() => _v2(!1), _v0);
        }, [_v0]);
      return (0, _v2.useEffect)(() => () => {
        _v3.current && clearTimeout(_v3.current);
      }, []), {
        isCopied: _v1,
        hasBeenTriggeredRef: _v4,
        triggerCopied: _v5
      };
    };
  var _v178 = _v0.i(0),
    _v179 = _v0.i(0);
  let _v180 = "review_link_opened_video_ids",
    _v181 = (_v0, _v1, _v2) => {
      let _v3 = (0, _v179.useReviewLinkCopiedToast)(),
        {
          trackReviewLinksCopied: _v4
        } = (0, _v15.useDistributionTracking)(),
        _v5 = (0, _v2.useCallback)(_v0 => {
          _v3(), _v4({
            clipId: String(_v0),
            reviewId: (0, _v22.reviewIdFromUri)(_v0) ?? "",
            surface: "share_view"
          }), _v2?.(), function (_v0) {
            try {
              let _v0 = localStorage.getItem(_v180),
                _v1 = _v0 ? JSON.parse(_v0) : [],
                _v2 = Array.isArray(_v1) ? _v1.filter(_v0 => "number" == typeof _v0) : [],
                _v3 = _v2.indexOf(_v0),
                _v4 = -1 !== _v3;
              return _v4 && _v2.splice(_v3, 1), _v2.unshift(_v0), localStorage.setItem(_v180, JSON.stringify(_v2.slice(0, 50))), !_v4;
            } catch {
              return !0;
            }
          }(_v0) && window.open((0, _v22.getVideoReviewPageUrl)(_v0, _v0), "_blank");
        }, [_v3, _v4, _v2, _v0]),
        _v6 = (0, _v178.useCreateAndCopyVideoReviewLink)((0, _v2.useCallback)((_v0, _v1) => _v5(_v1), [_v5]));
      return (0, _v2.useCallback)(_v0 => {
        if (_v0) {
          (0, _v134.default)((0, _v22.getVideoReviewPageUrl)(_v0, _v0)), _v5(_v0);
          return;
        }
        _v6(_v0, _v1);
      }, [_v6, _v5, _v0, _v1]);
    };
  _v0.s(["useCopyReviewLink", 0, _v181], 0);
  var _v182 = _v0.i(0),
    _v183 = _v0.i(0);
  let _v184 = "rlpsa";
  function _v185() {
    let _v0 = (0, _v6.useViewer)(),
      {
        data: _v1
      } = (0, _v50.useGetVideoSharingData)();
    return (0, _v2.useMemo)(() => {
      let _v0 = _v0?.teamUser?.ownerId,
        _v1 = _v0?.teamUser?.plainTextPermissionLevel,
        _v2 = !!_v0?.user?.organizationId,
        _v3 = !!_v0 && (!_v0 || _v0 === _v0?.user?.id || ("Owner" === _v1 || "Admin" === _v1) && _v2),
        _v4 = !!_v1?.metadata?.interactions?.edit,
        _v5 = !!_v1?.metadata?.interactions?.invite,
        _v6 = _v1?.privacy?.view;
      return {
        canEdit: _v4,
        canManageDefaults: _v3,
        canInvite: _v5,
        canViewerShare: !!_v6 && !["nobody", "disable"].includes(_v6)
      };
    }, [_v1, _v0]);
  }
  var _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0);
  let _v189 = _v188.keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;
  var _v190 = _v0.i(0);
  let _v191 = ({
      info: _v0,
      isChecked: _v1,
      isDisabled: _v2,
      label: _v3,
      onChange: _v4,
      size: _v5 = "md",
      upsellBadge: _v6,
      w: _v7 = "100%",
      ..._v8
    }) => (0, _v1.jsxs)(_v60.Flex, {
      justifyContent: "space-between",
      w: _v7,
      ..._v8,
      children: [(0, _v1.jsxs)(_v60.Flex, {
        gap: "sm",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v24.Text, {
          variant: "body-md",
          opacity: _v2 && !_v6 ? .5 : 1,
          children: _v3
        }), _v0 && (0, _v1.jsx)(_v25.Tooltip, {
          label: _v0,
          placement: "top",
          shouldWrapChildren: !0,
          children: (0, _v1.jsx)(_v43.InfoCircle, {
            boxSize: "2xs",
            display: "flex"
          })
        })]
      }), (0, _v1.jsxs)(_v60.Flex, {
        alignItems: "center",
        children: [_v6, (0, _v1.jsx)(_v92.Switch, {
          size: _v5,
          isChecked: _v1,
          isDisabled: _v2,
          onChange: _v4,
          sx: {
            ".chakra-switch__track[data-checked][data-disabled]": {
              bgColor: "gray.350"
            },
            _dark: {
              ".chakra-switch__track[data-checked][data-disabled]": {
                bgColor: "gray.600"
              }
            }
          }
        })]
      })]
    }),
    _v192 = ({
      onPrivacyChange: _v0,
      isDisabled: _v1
    }) => {
      let _v2 = _v122(),
        _v3 = (0, _v77.useToast)(),
        _v4 = [{
          label: (0, _v4.translate)({
            singular: "Downloads",
            dictionary: {
              es: {
                singular: "Descargas"
              },
              "fr-FR": {
                singular: "Téléchargements"
              },
              "ja-JP": {
                singular: "ダウンロード"
              },
              "ko-KR": {
                singular: "다운로드"
              },
              "zh-CN": {
                singular: "下载"
              }
            }
          }),
          key: "download"
        }, {
          label: (0, _v4.translate)({
            singular: "Comments",
            dictionary: {
              es: {
                singular: "Comentarios"
              },
              "de-DE": {
                singular: "Kommentare"
              },
              "fr-FR": {
                singular: "Commentaires"
              },
              "ja-JP": {
                singular: "コメント"
              },
              "ko-KR": {
                singular: "소감"
              },
              "pt-BR": {
                singular: "Comentários"
              },
              "zh-CN": {
                singular: "评论"
              }
            }
          }),
          key: "comments"
        }, {
          label: (0, _v4.translate)({
            singular: "Add to collections",
            dictionary: {
              es: {
                singular: "Agregar a las colecciones"
              },
              "de-DE": {
                singular: "Zu Sammlungen hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter aux collections"
              },
              "ja-JP": {
                singular: "コレクションに追加"
              },
              "ko-KR": {
                singular: "컬렉션에 추가"
              },
              "pt-BR": {
                singular: "Adicionar às coleções"
              },
              "zh-CN": {
                singular: "添加到合集中"
              }
            }
          }),
          key: "add",
          info: (0, _v4.translate)({
            singular: "Showcases, channels, or groups",
            dictionary: {
              es: {
                singular: "Presentaciones, canales o grupos"
              },
              "de-DE": {
                singular: "Präsentationen, Kanäle oder Gruppen"
              },
              "fr-FR": {
                singular: "Présentations, chaînes ou groupes"
              },
              "ja-JP": {
                singular: "ショーケース、チャンネル、またはグループ"
              },
              "ko-KR": {
                singular: "쇼케이스, 채널 또는 그룹"
              },
              "pt-BR": {
                singular: "Vitrines, canais ou grupos"
              },
              "zh-CN": {
                singular: "展示、频道或群组"
              }
            }
          })
        }],
        {
          privacy: _v5,
          patchVideoPrivacy: _v6
        } = _v118(),
        {
          videoOwnerCapabilities: {
            canAllowDownloads: _v7
          }
        } = (0, _v39.useGetVideoOwnerCapabilities)(),
        _v8 = async (_v0, _v1) => {
          if (!_v5) return;
          let _v2 = "comments" === _v1 ? _v0.target.checked ? "anybody" : "nobody" : _v0.target.checked;
          try {
            await _v6({
              [_v1]: _v2
            }), _v0?.({
              [_v1]: _v2
            }), _v3({
              title: _v2.changesSaved
            });
          } catch {
            _v3({
              title: _v2.somethingWentWrong
            });
          }
        };
      return (0, _v1.jsxs)(_v60.Flex, {
        role: "group",
        "aria-labelledby": "permissions-heading",
        flexDirection: "column",
        gap: "xs",
        tabIndex: 0,
        children: [(0, _v1.jsx)(_v24.Text, {
          id: "permissions-heading",
          variant: "heading-xs",
          color: "text-primary",
          my: (0, _v13.rem)(6),
          opacity: _v1 ? .5 : 1,
          children: (0, _v4.translate)({
            singular: "Viewer permissions",
            dictionary: {
              es: {
                singular: "Permisos de los espectadores"
              },
              "de-DE": {
                singular: "Zuschauerberechtigungen"
              },
              "fr-FR": {
                singular: "Autorisations du spectateur"
              },
              "ja-JP": {
                singular: "視聴者権限"
              },
              "ko-KR": {
                singular: "뷰어 권한"
              },
              "pt-BR": {
                singular: "Permissões do espectador"
              },
              "zh-CN": {
                singular: "观众权限"
              }
            }
          })
        }), _v4.map(({
          key: _v0,
          label: _v1,
          info: _v2
        }) => (0, _v1.jsx)(_v191, {
          label: _v1,
          isChecked: "comments" === _v0 ? _v5?.comments === "anybody" : _v5?.[_v0],
          onChange: _v0 => _v8(_v0, _v0),
          isDisabled: _v1 || "download" === _v0 && !_v7,
          info: _v2,
          h: (0, _v13.rem)(32),
          upsellBadge: "download" !== _v0 || _v7 ? void 0 : (0, _v1.jsx)(_v190.UpgradeBadge, {
            modalConfig: {
              headerText: (0, _v4.translate)({
                singular: "Upgrade to allow downloads",
                dictionary: {
                  es: {
                    singular: "Actualice para permitir descargas"
                  },
                  "de-DE": {
                    singular: "Upgrade vornehmen, um Downloads zu ermöglichen"
                  },
                  "fr-FR": {
                    singular: "Mettez à niveau pour autoriser les téléchargements"
                  },
                  "ja-JP": {
                    singular: "アップグレードしてダウンロード可能に"
                  },
                  "ko-KR": {
                    singular: "다운로드를 허용하려면 업그레이드하세요."
                  },
                  "pt-BR": {
                    singular: "Faça upgrade para permitir downloads"
                  },
                  "zh-CN": {
                    singular: "升级以允许下载功能"
                  }
                }
              }),
              subHeaderText: (0, _v4.translate)({
                singular: "Get full access to robust privacy and engagement tools",
                dictionary: {
                  es: {
                    singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                  },
                  "de-DE": {
                    singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                  },
                  "fr-FR": {
                    singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                  },
                  "ja-JP": {
                    singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                  },
                  "ko-KR": {
                    singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                  },
                  "pt-BR": {
                    singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                  },
                  "zh-CN": {
                    singular: "获取对强大的隐私和参与工具的完整访问权限"
                  }
                }
              })
            },
            tracking: {
              upsell_feature_category: "privacy",
              upsell_specific_feature: "privacy_allow_downloads",
              upsell_badge_location: "svv_share"
            },
            modalTracking: {
              params: {
                feature: "privacy",
                upsell_name: "privacy_settings_allow_downloads",
                location: "SVV_share_drawer"
              },
              paywallTracking: {
                paywallTrigger: "svv_share_settings_allow_downloads_toggle_button",
                paywallLocation: "share_drawer",
                paywallType: "popup",
                paywallFeature: "privacy"
              }
            }
          })
        }, _v0))]
      });
    },
    _v193 = ({
      arm: _v0,
      copyLinkLabel: _v1,
      copyReviewLinkLabel: _v2,
      layoutType: _v3,
      isCopyLinkButtonDisabled: _v4,
      isCopyReviewLinkDisabled: _v5,
      onCopyLinkClick: _v6,
      onCopyReviewLinkClick: _v7
    }) => {
      switch (_v0) {
        case _v127.ReviewAdoptionV3Arm.T1:
          return (0, _v1.jsxs)(_v60.Flex, {
            gap: "2",
            children: [(0, _v1.jsx)(_v96.Button, {
              variant: "primary",
              flex: "1",
              isDisabled: _v4,
              onClick: _v6,
              children: _v1
            }), (0, _v1.jsx)(_v96.Button, {
              variant: "secondary",
              width: (0, _v13.rem)("modal" === _v3 ? 240 : 180),
              flexShrink: 0,
              isDisabled: _v5,
              onClick: _v7,
              children: _v2
            })]
          });
        case _v127.ReviewAdoptionV3Arm.T2:
          return (0, _v1.jsxs)(_v60.Flex, {
            flexDirection: "column",
            gap: "2",
            children: [(0, _v1.jsx)(_v96.Button, {
              variant: "primary",
              isDisabled: _v4,
              onClick: _v6,
              children: _v1
            }), (0, _v1.jsx)(_v96.Button, {
              variant: "secondary",
              isDisabled: _v5,
              onClick: _v7,
              children: _v2
            })]
          });
        case _v127.ReviewAdoptionV3Arm.T3:
          return (0, _v1.jsxs)(_v60.Flex, {
            flexDirection: "column",
            gap: "2",
            children: [(0, _v1.jsx)(_v96.Button, {
              variant: "secondary",
              isDisabled: _v4,
              onClick: _v6,
              children: _v1
            }), (0, _v1.jsx)(_v96.Button, {
              variant: "primary",
              isDisabled: _v5,
              onClick: _v7,
              children: _v2
            })]
          });
        case _v127.ReviewAdoptionV3Arm.Control:
          return (0, _v1.jsx)(_v96.Button, {
            variant: "primary",
            isDisabled: _v4,
            onClick: _v6,
            children: _v1
          });
        default:
          throw Error(`Unhandled review adoption v3 arm: ${String(_v0)}`);
      }
    },
    _v194 = ({
      layoutType: _v0 = "panel",
      playerApi: _v1,
      onSelectPanelClick: _v2,
      onPrivacyChange: _v3,
      onUpsellClick: _v4,
      onCopyLink: _v5,
      onEmbedChange: _v6,
      showInlineTransferFile: _v7,
      transferInlineLinkSurface: _v8,
      reviewLinkUri: _v9,
      canCreateReviewLink: _v10 = !1,
      isReviewLinkLoading: _v11 = !1,
      expiryPickerEntryPoint: _v12
    }) => {
      let _v13,
        _v14,
        _v15,
        _v16 = _v122(),
        _v17 = (0, _v77.useToast)(),
        _v18 = (0, _v2.useRef)(_v17),
        _v19 = (0, _v2.useRef)(!1),
        _v20 = (0, _v2.useCallback)(_v0 => {
          if (!_v19.current) {
            _v19.current = !0;
            return;
          }
          _v6?.(_v0);
        }, [_v6]),
        {
          data: _v21,
          isLoading: _v22
        } = (0, _v50.useGetVideoSharingData)(),
        {
          canEdit: _v23,
          canManageDefaults: _v24
        } = _v185(),
        _v25 = function () {
          let _v0 = (0, _v6.useViewer)(),
            {
              data: _v1
            } = (0, _v50.useGetVideoSharingData)(),
            _v2 = (0, _v54.useOrionSettingsFields)(["enable_team_defaults_page", "enable_workspace_defaults_page"]),
            _v3 = _v1?.user?.uri ? (0, _v55.idFromUri)(_v1.user.uri) : null,
            _v4 = _v0?.teamUser?.ownerId,
            _v5 = !!_v0?.teamUser?.isWorkspace;
          return (0, _v161.getVideoDefaultsUrl)({
            isTeamOwned: !!(_v4 && _v3 === _v4),
            isWorkspaceTeam: _v5,
            enableTeamDefaultsPage: _v2.enable_team_defaults_page,
            enableWorkspaceDefaultsPage: _v2.enable_workspace_defaults_page
          });
        }(),
        {
          isEnabled: _v26,
          sharingLink: _v27,
          createdLink: _v28,
          isOwner: _v29,
          createError: _v30,
          patchError: _v31,
          defaultExpiryDays: _v32,
          defaultHasExpiration: _v33,
          getOrCreateLink: _v34,
          setOptimisticUpdate: _v35,
          saveInterval: _v36,
          saveHasExpiration: _v37,
          isPatchLoading: _v38,
          isCreateLoading: _v39,
          isInitialLoading: _v40
        } = _v59(),
        _v41 = (0, _v2.useRef)(null),
        _v42 = (0, _v2.useRef)(_v31),
        _v43 = _v27 ?? _v28,
        _v44 = _v43 ? !_v43.hasExpiration : !_v33,
        _v45 = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0.clipId),
        {
          trackSharingLinkCopied: _v46,
          trackSharePrivacyDropdownOpened: _v47,
          trackVideoLinkCopied: _v48,
          trackSharingLinkExpirationReset: _v49
        } = (0, _v15.useDistributionTracking)(),
        _v50 = (0, _v2.useCallback)(() => {
          _v18.current({
            title: (0, _v4.translate)({
              singular: "Changes saved",
              dictionary: {
                es: {
                  singular: "Guardamos los cambios"
                },
                "de-DE": {
                  singular: "Änderungen wurden gespeichert"
                },
                "fr-FR": {
                  singular: "Changements sauvegardés"
                },
                "ja-JP": {
                  singular: "変更内容が保存されました"
                },
                "ko-KR": {
                  singular: "변경 사항 저장 완료"
                },
                "pt-BR": {
                  singular: "Alterações salvas"
                },
                "zh-CN": {
                  singular: "已保存更改"
                }
              }
            }),
            id: "sharing-link-expiry-saved"
          });
        }, []),
        _v51 = (0, _v2.useCallback)((_v0, _v1) => {
          _v43 ? (_v41.current = {
            ..._v43
          }, _v35(_v1, _v0, !0), _v36(_v1, _v0, !0)) : _v34({
            intervalDays: _v0
          }), _v50();
        }, [_v43, _v35, _v36, _v34, _v50]),
        _v52 = (0, _v2.useCallback)(_v0 => {
          if (!_v43) return;
          let _v1 = {
              ..._v43
            },
            _v2 = _v1.intervalDays,
            _v3 = new Date(Date.now() + _v2 * _v56.MS_PER_DAY).toISOString();
          _v41.current = _v1, _v49({
            videoId: String(_v45),
            entryPoint: _v0
          }), _v35(_v3, _v2, !0), _v36(_v3, _v2, !0), _v50();
        }, [_v43, _v35, _v36, _v50, _v49, _v45]),
        _v53 = (0, _v2.useCallback)(() => {
          if (!_v43) return;
          let _v0 = {
            ..._v43
          };
          _v41.current = _v0, _v35(_v0.expiresOn, _v0.intervalDays, !1), _v37(!1), _v50();
        }, [_v43, _v35, _v37, _v50]);
      (0, _v2.useEffect)(() => {
        if (_v31 && _v31 !== _v42.current) {
          let _v0 = _v41.current;
          _v0 && (_v35(_v0.expiresOn, _v0.intervalDays, _v0.hasExpiration), _v41.current = null), _v18.current.close("sharing-link-expiry-saved"), _v18.current({
            title: (0, _v4.translate)({
              singular: "Something went wrong",
              dictionary: {
                es: {
                  singular: "Se ha producido un error"
                },
                "de-DE": {
                  singular: "Hier ist etwas schief gelaufen"
                },
                "fr-FR": {
                  singular: "Quelque chose a planté"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado"
                },
                "zh-CN": {
                  singular: "出错了"
                }
              }
            }),
            variant: "warning",
            id: "sharing-link-save-error"
          });
        }
        _v42.current = _v31;
      }, [_v31, _v35]);
      let _v54 = (0, _v2.useRef)(_v30);
      (0, _v2.useEffect)(() => {
        _v30 && _v30 !== _v54.current && (_v18.current.close("sharing-link-expiry-saved"), _v18.current({
          title: (0, _v4.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          }),
          variant: "warning",
          id: "sharing-link-save-error"
        })), _v54.current = _v30;
      }, [_v30]), (0, _v2.useEffect)(() => {
        _v38 || _v31 || (_v41.current = null);
      }, [_v38, _v31]);
      let {
          trackTransferInlineLinkDisplayed: _v55,
          trackTransferInlineLinkClicked: _v56
        } = (0, _v128.useFileTransferAdoptionTracking)(),
        _v57 = _v7 && !!_v21?.fileTransfer?.link;
      (0, _v16.usePicoEffect)(() => {
        if (!_v57) return !1;
        _v55();
      }, [_v57], {
        once: !0
      });
      let {
          trackReviewButtonDisplayed: _v58,
          trackReviewButtonClicked: _v59,
          trackPromptDisplayed: _v60,
          trackPromptActionClicked: _v61
        } = (_v13 = (0, _v129.usePico)(), _v14 = (0, _v2.useCallback)(_v0 => {
          _v13.track("review_maximize_v3_button_displayed", {
            surface: _v0.surface,
            new_review_link_type: _v0.newReviewLinkType,
            variant: _v0.variant
          });
        }, [_v13]), _v15 = (0, _v2.useCallback)(_v0 => {
          _v13.track("review_maximize_v3_button_clicked", {
            surface: _v0.surface,
            new_review_link_type: _v0.newReviewLinkType,
            variant: _v0.variant
          });
        }, [_v13]), {
          trackReviewButtonDisplayed: _v14,
          trackReviewButtonClicked: _v15,
          trackPromptDisplayed: (0, _v2.useCallback)(_v0 => {
            _v13.track("review_maximize_v3_prompt_displayed", {
              surface: _v0.surface,
              clip_id: _v0.clipId,
              display_index: _v0.displayIndex,
              variant: _v0.variant
            });
          }, [_v13]),
          trackPromptActionClicked: (0, _v2.useCallback)(_v0 => {
            _v13.track("review_maximize_v3_prompt_action_clicked", {
              surface: _v0.surface,
              review_link_prompt_action: _v0.reviewLinkPromptAction,
              clip_id: _v0.clipId,
              dont_show_again: _v0.dontShowAgain,
              variant: _v0.variant
            });
          }, [_v13])
        }),
        _v62 = "modal" === _v0 ? "share_view_modal" : "share_view_panel",
        _v63 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig),
        _v64 = _v63?.location ?? "panel",
        _v65 = "modal" === _v64 ? "share_modal" : "share_panel",
        {
          privacy: _v66,
          password: _v67,
          patchVideoPrivacy: _v68,
          patchState: {
            loading: _v69,
            error: _v70,
            data: _v71
          }
        } = _v118(),
        {
          privacyOptions: _v72,
          isLoading: _v73
        } = (0, _v131.useClipPrivacyOptions)(_v45, !1),
        _v74 = _v66?.view,
        _v75 = (0, _v2.useMemo)(() => _v72.find(_v0 => _v0.privacy === _v74), [_v74, _v72]),
        [_v76, _v77] = (0, _v2.useState)(_v74),
        _v78 = (0, _v2.useRef)(_v71);
      (0, _v2.useEffect)(() => {
        _v77(_v74);
      }, [_v74]);
      let _v79 = !function () {
          let [_v0] = (0, _v182.useMediaQuery)(`(max-width: ${(0, _v13.rem)(_v183.BREAKPOINTS.medium)})`);
          return _v0;
        }() ? void 0 : {
          maxH: (0, _v13.rem)(Math.floor(window.innerHeight / 2))
        },
        {
          isClipInSubscriptionPlan: _v80,
          isOpen: _v81,
          onClose: _v82,
          onOpen: _v83
        } = function () {
          let {
              clipId: _v0
            } = (0, _v10.useGlobalStore)(({
              clip: _v0
            }) => _v0),
            {
              isOpen: _v1,
              onClose: _v2,
              onOpen: _v3
            } = (0, _v14.useDisclosure)(),
            {
              siteId: _v4
            } = (0, _v187.useGetStreamingSites)(),
            {
              data: _v5
            } = (0, _v186.useGetVideoSitePublishSettings)(() => _v0 && _v4 ? {
              select: ["plan"],
              where: {
                siteId: _v4,
                videoId: Number(_v0)
              }
            } : null);
          return {
            isClipInSubscriptionPlan: _v5?.plan ?? !1,
            isOpen: _v1,
            onClose: _v2,
            onOpen: _v3
          };
        }(),
        {
          triggerCopyLinkToast: _v84
        } = _v120(),
        _v85 = (0, _v6.useViewer)(),
        _v86 = _v85?.user?.uploadQuota?.restricted,
        {
          mutate: _v87
        } = (0, _v132.useUserQuotaApi)(),
        [_v88, _v89] = (0, _v2.useState)(!1);
      (0, _v2.useEffect)(() => {
        if (_v71 && _v71 !== _v78.current) {
          _v78.current = _v71, _v3?.({
            view: _v71.privacy?.view
          }), null != _v86 && _v87(void 0, {
            revalidate: !0
          });
          let _v0 = _v71.privacy?.view === "password" ? (0, _v4.translate)({
              singular: "Password applied",
              dictionary: {
                es: {
                  singular: "Contraseña aplicada"
                },
                "de-DE": {
                  singular: "Passwort angewendet"
                },
                "fr-FR": {
                  singular: "Mot de passe défini"
                },
                "ja-JP": {
                  singular: "パスワードが適用されました"
                },
                "ko-KR": {
                  singular: "비밀번호 적용 완료"
                },
                "pt-BR": {
                  singular: "Senha aplicada"
                },
                "zh-CN": {
                  singular: "密码已应用"
                }
              }
            }) : _v16.changesSaved,
            _v1 = "video-privacy-save-toast";
          _v18.current.isActive(_v1) || _v18.current({
            title: _v0,
            id: _v1
          });
        }
      }, [_v71, _v3, _v16.changesSaved, _v86, _v87]), (0, _v2.useEffect)(() => {
        _v70 && (_v77(_v74), null != _v86 && "res" in _v70 ? _v70.res.clone().json().then(_v0 => {
          0 === _v0.error_code ? _v89(!0) : _v0();
        }).catch(() => _v0()) : _v0());
        function _v0() {
          let _v0 = "video-privacy-error-toast";
          _v18.current.isActive(_v0) || _v18.current({
            title: _v16.somethingWentWrong,
            id: _v0
          });
        }
      }, [_v70, _v16.somethingWentWrong, _v74, _v86]);
      let _v90 = (0, _v2.useCallback)(async _v0 => {
          _v80 && _v0 === _v130.DEFAULT_PRIVACY_VALUES.PUBLIC ? _v83() : (_v77(_v0), _v0 !== _v130.DEFAULT_PRIVACY_VALUES.PASSWORD && (await _v68({
            view: _v0
          })));
        }, [_v80, _v83, _v68]),
        _v91 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.actions.setIsInputtingPassword),
        _v92 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.isInputtingPassword),
        _v93 = (0, _v2.useRef)(_v67),
        _v94 = (0, _v2.useCallback)(_v0 => {
          _v91(_v0);
        }, [_v91]),
        _v95 = (0, _v2.useCallback)(async _v0 => {
          await _v68({
            view: "password"
          }, _v0), _v93.current = _v0;
        }, [_v68]),
        {
          isCopied: _v96,
          hasBeenTriggeredRef: _v97,
          triggerCopied: _v98
        } = _v177(),
        [_v99, _v100] = (0, _v2.useState)(_v21?.link ?? ""),
        _v101 = (0, _v54.useOrionSettingsFields)(["bi_expiring_links_default_expiry_days", "review_adoption_v3_arm"]),
        _v102 = Math.min(Math.max(_v101?.bi_expiring_links_default_expiry_days ?? 0, 0), _v56.MAX_EXPIRY_DAYS),
        _v103 = _v101.review_adoption_v3_arm,
        {
          isCopied: _v104,
          hasBeenTriggeredRef: _v105,
          triggerCopied: _v106
        } = _v177(),
        {
          shouldShow: _v107,
          displayCount: _v108,
          registerDisplay: _v109,
          markAdopted: _v110,
          setDontShowAgain: _v111
        } = function () {
          let _v0 = (0, _v6.useViewer)(),
            _v1 = _v0?.user?.id,
            {
              data: _v2,
              mutate: _v3
            } = (0, _v81.useGetUserPreferences)(() => null == _v1 ? null : {
              where: {
                userId: _v1
              },
              select: [_v184, "rlp"]
            }),
            [_v4] = (0, _v81.usePatchUserPreferences)(),
            _v5 = void 0 !== _v2,
            _v6 = _v2?.[_v184] ?? 0,
            _v7 = _v2?.rlp === !0,
            _v8 = _v5 && !_v7 && _v6 < 3,
            _v9 = (0, _v2.useCallback)((_v0, _v1) => {
              if (null == _v1) return;
              let _v2 = "rlp" === _v0 || _v1;
              _v3(_v0 => void 0 === _v0 ? _v0 : {
                ..._v0,
                [_v0]: _v2
              }, {
                revalidate: !1
              }), _v4({
                where: {
                  userId: _v1
                },
                select: [_v0],
                variables: {
                  [_v0]: _v1
                }
              }).then(() => {
                _v3();
              }).catch(() => {
                _v3();
              });
            }, [_v1, _v4, _v3]),
            _v10 = (0, _v2.useCallback)(() => {
              null == _v1 || _v6 >= 3 || _v9(_v184, _v6 + 1);
            }, [_v1, _v6, _v9]);
          return {
            shouldShow: _v8,
            displayCount: _v6,
            registerDisplay: _v10,
            setDontShowAgain: (0, _v2.useCallback)(() => {
              _v9("rlp", 1);
            }, [_v9]),
            markAdopted: (0, _v2.useCallback)(() => {
              _v9("rlp", 1);
            }, [_v9])
          };
        }(),
        {
          isOpen: _v112,
          onOpen: _v113,
          onClose: _v114
        } = (0, _v14.useDisclosure)(),
        _v115 = (0, _v2.useRef)(!1),
        _v116 = (0, _v2.useCallback)(() => {
          _v115.current = !1, _v106(), _v110();
        }, [_v106, _v110]),
        _v117 = _v181(Number(_v45), _v21?.uri ?? "", _v116),
        _v118 = _v92 || _v11,
        _v119 = _v9 ? "view" : "create",
        _v120 = !_v9 && !_v10 && !_v11,
        _v121 = _v120 ? _v127.ReviewAdoptionV3Arm.Control : _v103;
      (0, _v16.usePicoEffect)(() => _v103 !== _v127.ReviewAdoptionV3Arm.Control && !_v120 && !_v11 && (_v58({
        surface: _v62,
        newReviewLinkType: _v119,
        variant: _v103
      }), !0), [_v103, _v120, _v62, _v119, _v11], {
        once: !0
      });
      let _v122 = (0, _v2.useMemo)(() => {
        if (_v26 && !_v44 && _v43?.url) {
          let _v0 = "";
          try {
            _v0 = _v99 ? new URL(_v99).hash : "";
          } catch {}
          return `${window.location.origin}${_v43.url}${_v0}`;
        }
        return _v99;
      }, [_v26, _v44, _v43?.url, _v99]);
      (0, _v2.useEffect)(() => {
        _v21?.link && _v100(_v0 => {
          if (!_v0) return _v21.link;
          let _v1 = new URL(_v0).hash,
            _v2 = new URL(_v21.link);
          return _v2.hash = _v1, _v2.toString();
        });
      }, [_v21?.link]);
      let _v123 = !!_v21?.disabledProperties?.embed,
        _v124 = _v22 || _v123 || _v69 || _v92 || _v39 || _v40,
        _v125 = (0, _v2.useCallback)(_v0 => {
          let _v1 = new URL(`${window.location.origin}${_v0}`);
          _v1.searchParams.append("share", "copy"), _v1.searchParams.append("fl", "sv"), _v1.searchParams.append("fe", "ci");
          try {
            let _v0 = new URL(_v99 || window.location.href).hash;
            _v0 && (_v1.hash = _v0);
          } catch {}
          return _v1.toString();
        }, [_v99]),
        _v126 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        if (_v28?.url && _v126.current) {
          let _v0, _v1;
          if (_v28.hasExpiration) _v0 = _v125(_v28.url), _v1 = _v28.expiresOn, _v46({
            clipId: String(_v45),
            surface: "svv_panel",
            intervalDays: _v28.intervalDays
          });else {
            let _v0;
            _v0 = _v99 ? ((_v0 = new URL(_v99)).searchParams.append("share", "copy"), _v0.searchParams.append("fl", "sv"), _v0.searchParams.append("fe", "ci"), _v0.toString()) : "", _v1 = void 0;
          }
          let _v2 = !!_v0 && (0, _v134.default)(_v0);
          _v84(_v2, !1, _v1, () => _v52("share_panel_toast")), _v2 && (_v98(), _v48({
            clipId: String(_v45),
            source: _v65
          })), _v126.current = !1;
        }
      }, [_v28, _v125, _v52, _v99, _v84, _v98, _v45, _v46, _v48, _v65]), (0, _v2.useEffect)(() => {
        _v30 && _v126.current && (_v84(!1), _v126.current = !1);
      }, [_v30, _v84]), (0, _v2.useEffect)(() => {
        _v126.current = !1, _v115.current = !1;
      }, [_v45]);
      let _v127 = (0, _v2.useCallback)(async () => {
          let _v0 = !1;
          try {
            let _v0;
            if (_v26) {
              if (_v43?.url) {
                if (_v43.hasExpiration) _v0 = _v125(_v43.url), _v46({
                  clipId: String(_v45),
                  surface: "svv_panel",
                  intervalDays: _v43.intervalDays
                });else if (_v99) {
                  let _v0 = new URL(_v99);
                  _v0.searchParams.append("share", "copy"), _v0.searchParams.append("fl", "sv"), _v0.searchParams.append("fe", "ci"), _v0 = _v0.toString();
                } else _v0 = "";
              } else if (_v23) {
                if (_v29 && !_v33) {
                  if (_v99) {
                    let _v0 = new URL(_v99);
                    _v0.searchParams.append("share", "copy"), _v0.searchParams.append("fl", "sv"), _v0.searchParams.append("fe", "ci"), _v0 = _v0.toString();
                  } else _v0 = "";
                } else {
                  _v126.current = !0, _v34({
                    intervalDaysFallback: _v102
                  });
                  return;
                }
              } else if (_v99) {
                let _v0 = new URL(_v99);
                _v0.searchParams.append("share", "copy"), _v0.searchParams.append("fl", "sv"), _v0.searchParams.append("fe", "ci"), _v0 = _v0.toString();
              } else _v0 = "";
            } else if (_v99) {
              let _v0 = new URL(_v99);
              _v0.searchParams.append("share", "copy"), _v0.searchParams.append("fl", "sv"), _v0.searchParams.append("fe", "ci"), _v0 = _v0.toString();
            } else _v0 = "";
            _v0 && (await navigator.clipboard.writeText(_v0), _v0 = !0);
          } catch {
            _v0 = !1;
          }
          _v84(_v0, !1, _v26 && !_v44 ? _v43?.expiresOn : void 0, () => _v52("share_panel_toast")), _v0 && _v5?.(), _v0 && (_v98(), _v48({
            clipId: String(_v45),
            source: _v65
          }));
        }, [_v26, _v44, _v43, _v23, _v29, _v33, _v125, _v34, _v102, _v99, _v46, _v48, _v65, _v45, _v52, _v84, _v5, _v98]),
        _v128 = (0, _v2.useCallback)(() => {
          _v103 !== _v127.ReviewAdoptionV3Arm.Control && _v107 && !_v11 && !_v115.current && (null != _v9 || _v10) ? (_v109(), _v60({
            surface: _v62,
            clipId: _v45,
            displayIndex: _v108 + 1,
            variant: _v103
          }), _v113()) : _v127();
        }, [_v103, _v107, _v11, _v9, _v10, _v127, _v109, _v60, _v62, _v45, _v108, _v113]),
        _v129 = (0, _v2.useCallback)(() => {
          _v103 !== _v127.ReviewAdoptionV3Arm.Control && _v59({
            surface: _v62,
            newReviewLinkType: _v119,
            variant: _v103
          }), _v9 || (_v115.current = !0), _v117(_v9);
        }, [_v103, _v59, _v62, _v119, _v117, _v9]),
        _v130 = (0, _v2.useCallback)(_v0 => {
          _v103 !== _v127.ReviewAdoptionV3Arm.Control && _v61({
            surface: _v62,
            reviewLinkPromptAction: "copy_review_link",
            clipId: _v45,
            dontShowAgain: _v0,
            variant: _v103
          }), _v0 && _v111(), _v114(), _v9 || (_v115.current = !0), _v117(_v9);
        }, [_v103, _v61, _v62, _v45, _v111, _v114, _v117, _v9]),
        _v131 = (0, _v2.useCallback)(_v0 => {
          _v103 !== _v127.ReviewAdoptionV3Arm.Control && _v61({
            surface: _v62,
            reviewLinkPromptAction: "copy_regular_link",
            clipId: _v45,
            dontShowAgain: _v0,
            variant: _v103
          }), _v0 && _v111(), _v114(), _v127();
        }, [_v103, _v61, _v62, _v45, _v111, _v114, _v127]),
        _v132 = (0, _v2.useCallback)(({
          seconds: _v0,
          isChecked: _v1
        }) => {
          _v1 ? _v100(`${_v21?.link}#t=${_v0}`) : _v100(_v21?.link ?? "");
        }, [_v21?.link]),
        _v133 = async () => {
          try {
            _v77("anybody"), await _v68({
              view: "anybody"
            });
          } catch {
            _v77(_v76);
          } finally {
            _v82();
          }
        };
      if (!_v76 || _v73) return null;
      let _v134 = _v72.some(_v0 => _v0.privacy === _v130.DEFAULT_PRIVACY_VALUES.PASSWORD && _v0.showUpsell),
        _v135 = (0, _v1.jsx)(_v24.Text, {
          as: "span",
          fontSize: "inherit",
          fontWeight: "inherit",
          lineHeight: "inherit",
          sx: _v97.current ? {
            animation: `0.2s ${_v189} ease-out`
          } : void 0,
          children: _v96 ? (0, _v4.translate)({
            singular: "Copied!",
            dictionary: {
              es: {
                singular: "Copiado"
              },
              "de-DE": {
                singular: "Kopiert!"
              },
              "fr-FR": {
                singular: "Copié !"
              },
              "ja-JP": {
                singular: "コピー完了！"
              },
              "ko-KR": {
                singular: "복사 완료!"
              },
              "pt-BR": {
                singular: "Copiado!"
              },
              "zh-CN": {
                singular: "已复制！"
              }
            }
          }) : (0, _v4.translate)({
            singular: "Copy link",
            dictionary: {
              es: {
                singular: "Copiar vínculo"
              },
              "de-DE": {
                singular: "Link kopieren"
              },
              "fr-FR": {
                singular: "Copier le lien"
              },
              "ja-JP": {
                singular: "リンクをコピー"
              },
              "ko-KR": {
                singular: "링크 복사"
              },
              "pt-BR": {
                singular: "Copiar link"
              },
              "zh-CN": {
                singular: "复制链接"
              }
            }
          })
        }, _v97.current ? _v96 ? "copied" : "copy" : "initial"),
        _v136 = (0, _v1.jsx)(_v24.Text, {
          as: "span",
          fontSize: "inherit",
          fontWeight: "inherit",
          lineHeight: "inherit",
          sx: _v105.current ? {
            animation: `0.2s ${_v189} ease-out`
          } : void 0,
          children: _v104 ? (0, _v4.translate)({
            singular: "Copied!",
            dictionary: {
              es: {
                singular: "Copiado"
              },
              "de-DE": {
                singular: "Kopiert!"
              },
              "fr-FR": {
                singular: "Copié !"
              },
              "ja-JP": {
                singular: "コピー完了！"
              },
              "ko-KR": {
                singular: "복사 완료!"
              },
              "pt-BR": {
                singular: "Copiado!"
              },
              "zh-CN": {
                singular: "已复制！"
              }
            }
          }) : (0, _v4.translate)({
            singular: "Copy review link",
            dictionary: {
              es: {
                singular: "Copiar enlace de revisión"
              },
              "de-DE": {
                singular: "Review-Link kopieren"
              },
              "fr-FR": {
                singular: "Copier le lien de révision"
              },
              "ja-JP": {
                singular: "レビュー用リンクをコピー"
              },
              "ko-KR": {
                singular: "검토 링크 복사"
              },
              "pt-BR": {
                singular: "Copiar link de revisão"
              },
              "zh-CN": {
                singular: "复制审阅链接"
              }
            }
          })
        }, _v105.current ? _v104 ? "copied" : "copy" : "initial");
      return (0, _v1.jsxs)(_v60.Flex, {
        flexDirection: "column",
        gap: "lg",
        children: [(0, _v1.jsxs)(_v60.Flex, {
          role: "group",
          "aria-labelledby": "privacy-heading",
          flexDirection: "column",
          gap: "2",
          children: [(0, _v1.jsxs)(_v60.Flex, {
            justifyContent: "space-between",
            children: [(0, _v1.jsx)(_v24.Text, {
              id: "privacy-heading",
              variant: "heading-xs",
              color: "text-primary",
              children: (0, _v4.translate)({
                singular: "Privacy",
                dictionary: {
                  es: {
                    singular: "Privacidad"
                  },
                  "de-DE": {
                    singular: "Datenschutz"
                  },
                  "fr-FR": {
                    singular: "Confidentialité "
                  },
                  "ja-JP": {
                    singular: "プライバシー"
                  },
                  "ko-KR": {
                    singular: "프라이버시"
                  },
                  "pt-BR": {
                    singular: "Privacidade"
                  },
                  "zh-CN": {
                    singular: "隐私"
                  }
                }
              })
            }), _v24 && (0, _v1.jsx)(_v93.Link, {
              variant: "inline-secondary",
              href: _v25,
              rel: "noopener noreferrer",
              target: "_blank",
              fontSize: "body-md",
              _focus: {
                outline: "2px solid",
                outlineOffset: "-2px",
                outlineColor: "fill-brand"
              },
              children: (0, _v4.translate)({
                singular: "Manage defaults",
                dictionary: {
                  es: {
                    singular: "Gestionar valores predeterminados"
                  },
                  "de-DE": {
                    singular: "Standardeinstellungen verwalten"
                  },
                  "fr-FR": {
                    singular: "Gérer les paramètres par défaut"
                  },
                  "ja-JP": {
                    singular: "デフォルト設定を管理する"
                  },
                  "ko-KR": {
                    singular: "기본값 관리"
                  },
                  "pt-BR": {
                    singular: "Gerenciar padrões"
                  },
                  "zh-CN": {
                    singular: "管理默认值"
                  }
                }
              })
            })]
          }), _v23 && (0, _v1.jsx)("div", {
            children: (0, _v1.jsx)(_v112.PrivacyDropdown, {
              isVideoPrivacy: !0,
              privacyOptions: _v72,
              activePrivacy: _v76,
              isDisabled: _v69,
              isRedirectUpsell: !1,
              menuListProps: _v79,
              onSelect: _v90,
              onUpsellClick: _v4,
              onMenuToggle: _v0 => {
                _v0 && _v47({
                  clipId: String(_v45),
                  shareSurface: _v64
                });
              },
              variant: "outlined"
            })
          }), !_v23 && void 0 !== _v75 && (0, _v1.jsx)(_v125.SelectedPrivacyOption, {
            option: _v75,
            showChevron: !1,
            onlyView: !0
          }), "password" === _v76 && (0, _v1.jsx)(_v126.PasswordInput, {
            name: `${_v21?.uri}-video-password-input`,
            variant: "outlined",
            initialValue: _v67,
            prefillValue: _v93.current,
            isLoading: _v69,
            isDisabled: !_v23 || _v134,
            onFocusChange: _v94,
            onSave: _v95,
            onUnmount: ({
              isChanged: _v0,
              inputPassword: _v1
            }) => {
              let _v2 = "password-not-saved-toast",
                _v3 = "password" === _v74;
              !_v18.current.isActive(_v2) && function ({
                isChanged: _v0,
                inputPassword: _v1,
                isSavedAsPassword: _v2
              }) {
                return _v0 || !_v1 && !_v2;
              }({
                isChanged: _v0,
                inputPassword: _v1,
                isSavedAsPassword: _v3
              }) && _v18.current({
                title: (0, _v4.translate)({
                  singular: "Password not applied to video",
                  dictionary: {
                    es: {
                      singular: "La contraseña no se aplicó al video."
                    },
                    "de-DE": {
                      singular: "Passwort nicht auf Video angewendet"
                    },
                    "fr-FR": {
                      singular: "Le mot de passe n'a pas été appliqué à la vidéo"
                    },
                    "ja-JP": {
                      singular: "動画にパスワードが適用されていません"
                    },
                    "ko-KR": {
                      singular: "동영상에 비밀번호가 적용되지 않았습니다."
                    },
                    "pt-BR": {
                      singular: "Senha não aplicada ao vídeo"
                    },
                    "zh-CN": {
                      singular: "密码未应用于视频"
                    }
                  }
                }),
                variant: "warning",
                id: _v2
              });
            }
          })]
        }), (0, _v1.jsx)(_v136, {
          viewPrivacy: _v76,
          onCheckedChange: _v20
        }), _v88 && (0, _v1.jsx)(_v5.default, {
          apiUrl: _v85?.apiUrl,
          userConfig: {
            jwt: _v85?.jwt,
            userId: _v85?.user?.id
          },
          templateType: "default",
          onClose: () => _v89(!1),
          tracking: {
            params: {
              feature: "storage",
              upsell_name: "privacy_storage_limit",
              location: "SVV_share_drawer"
            },
            paywallTracking: {
              paywallTrigger: "svv_privacy_toggle_storage_limit",
              paywallLocation: "single_video_view_share_drawer",
              paywallType: "popup",
              paywallFeature: "storage_limit"
            }
          }
        }), (0, _v1.jsx)(_v192, {
          onPrivacyChange: _v3,
          isDisabled: _v92
        }), (0, _v1.jsx)(_v167, {
          isOpen: _v81,
          isSaveDisabled: _v69,
          onCancel: _v82,
          onConfirm: _v133
        }), (0, _v1.jsx)(_v142, {
          isOpen: _v112,
          onClose: _v114,
          onCopyReviewLink: _v130,
          onCopyRegularLink: _v131,
          isCopyReviewLinkDisabled: _v118
        }), (0, _v1.jsxs)(_v60.Flex, {
          role: "group",
          "aria-labelledby": "link-heading",
          flexDirection: "column",
          gap: "2",
          children: [(0, _v1.jsx)(_v24.Text, {
            id: "link-heading",
            variant: "heading-xs",
            color: "text-primary",
            opacity: _v92 ? .5 : 1,
            children: (0, _v4.translate)({
              singular: "Link",
              dictionary: {
                es: {
                  singular: "Vínculo"
                },
                "fr-FR": {
                  singular: "Lien"
                },
                "ja-JP": {
                  singular: "リンク"
                },
                "ko-KR": {
                  singular: "링크"
                },
                "zh-CN": {
                  singular: "链接"
                }
              }
            })
          }), (0, _v1.jsx)(_v105, {
            id: "custom-link",
            value: _v122,
            showButton: _v23 && (!_v26 || _v44),
            "data-panel-type": "CUSTOMIZE_LINK_PANEL",
            isDisabled: _v92,
            onClick: _v2,
            children: (0, _v4.translate)({
              singular: "Edit",
              dictionary: {
                es: {
                  singular: "Editar"
                },
                "de-DE": {
                  singular: "Bearbeiten"
                },
                "fr-FR": {
                  singular: "Modifier"
                },
                "ja-JP": {
                  singular: "編集"
                },
                "ko-KR": {
                  singular: "편집"
                },
                "pt-BR": {
                  singular: "Editar"
                },
                "zh-CN": {
                  singular: "编辑"
                }
              }
            })
          }, _v44 ? "canonical-url" : "expiring-sharing-url"), _v26 && _v23 && (0, _v1.jsx)(_v11.Box, {
            my: "xs",
            children: (0, _v1.jsx)(_v164, {
              intervalDays: _v43?.intervalDays ?? null,
              expiresOn: _v43?.expiresOn ?? null,
              hasExpiration: _v43?.hasExpiration ?? !_v44,
              defaultIntervalDays: _v32,
              onIntervalChange: _v51,
              onNoExpiration: _v53,
              onReset: () => _v52("expiry_picker"),
              isResetLoading: _v38,
              hasLink: !!_v43,
              isDisabled: _v92 || _v39,
              isPatchLoading: _v38,
              manageDefaultsUrl: _v25,
              canManageDefaults: _v24,
              hasWorkspace: !!_v85?.user?.organizationId,
              videoId: _v45,
              entryPoint: _v12
            })
          }), (0, _v1.jsx)(_v193, {
            arm: _v121,
            copyLinkLabel: _v135,
            copyReviewLinkLabel: _v136,
            layoutType: _v0,
            isCopyLinkButtonDisabled: _v124,
            isCopyReviewLinkDisabled: _v118,
            onCopyLinkClick: _v128,
            onCopyReviewLinkClick: _v129
          }), (0, _v1.jsx)(_v175, {
            maxValue: _v21?.duration || 1,
            playerApi: _v1,
            isDisabled: _v92,
            onTimestampChange: _v132
          })]
        }), _v7 && _v21?.fileTransfer?.link && (0, _v1.jsxs)(_v60.Flex, {
          role: "group",
          "aria-labelledby": "transfer-file-heading",
          flexDirection: "column",
          gap: "2",
          children: [(0, _v1.jsxs)(_v60.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            children: [(0, _v1.jsxs)(_v60.Flex, {
              alignItems: "center",
              gap: "1",
              children: [(0, _v1.jsx)(_v124.FileUpload, {
                width: (0, _v13.rem)(16),
                height: (0, _v13.rem)(16)
              }), (0, _v1.jsx)(_v24.Text, {
                id: "transfer-file-heading",
                variant: "heading-xs",
                color: "text-primary",
                children: (0, _v4.translate)({
                  singular: "Transfer file",
                  dictionary: {
                    es: {
                      singular: "Transferir archivo"
                    },
                    "de-DE": {
                      singular: "Datei übertragen"
                    },
                    "fr-FR": {
                      singular: "Transférer un fichier"
                    },
                    "ja-JP": {
                      singular: "Transferでファイルを送信"
                    },
                    "ko-KR": {
                      singular: "파일 전송"
                    },
                    "pt-BR": {
                      singular: "Transferir arquivo"
                    },
                    "zh-CN": {
                      singular: "传输文件"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v133.NewBadge, {})]
            }), (0, _v1.jsx)(_v25.Tooltip, {
              label: (0, _v4.translate)({
                singular: "Send original source files to anyone with a simple link — no compression, no quality loss.",
                dictionary: {
                  es: {
                    singular: "Envía los archivos fuente originales a cualquier persona con un enlace sencillo — sin compresión, sin pérdida de calidad."
                  },
                  "de-DE": {
                    singular: "Senden Sie Original-Quelldateien an beliebige Empfänger über einen einfachen Link — ohne Komprimierung, ohne Qualitätsverlust."
                  },
                  "fr-FR": {
                    singular: "Envoyez les fichiers sources originaux à n’importe qui grâce à un simple lien — sans compression, sans perte de qualité."
                  },
                  "ja-JP": {
                    singular: "シンプルなリンクで誰にでも元のソースファイルを送信できます — 圧縮なし、品質劣化なし。"
                  },
                  "ko-KR": {
                    singular: "간단한 링크로 누구에게나 원본 소스 파일을 보내세요 — 압축 없음, 품질 손실 없음."
                  },
                  "pt-BR": {
                    singular: "Envie arquivos-fonte originais para qualquer pessoa com um link simples — sem compressão, sem perda de qualidade."
                  },
                  "zh-CN": {
                    singular: "通过一个简单的链接将原始源文件发送给任何人 — 无压缩，无质量损失。"
                  }
                }
              }),
              placement: "top",
              children: (0, _v1.jsx)(_v11.Box, {
                as: "span",
                display: "inline-flex",
                cursor: "pointer",
                children: (0, _v1.jsx)(_v43.InfoCircle, {
                  width: (0, _v13.rem)(16),
                  height: (0, _v13.rem)(16)
                })
              })
            })]
          }), (0, _v1.jsx)(_v96.Button, {
            variant: "primary",
            isDisabled: _v92,
            onClick: () => {
              _v8 && _v56({
                surface: _v8
              }), window.open(_v21?.fileTransfer?.link, "_blank");
            },
            children: (0, _v4.translate)({
              singular: "Send a video with transfer",
              dictionary: {
                es: {
                  singular: "Enviar un vídeo con transfer"
                },
                "de-DE": {
                  singular: "Video per Transfer senden"
                },
                "fr-FR": {
                  singular: "Envoyer une vidéo par transfert"
                },
                "ja-JP": {
                  singular: "Transferで動画を送信"
                },
                "ko-KR": {
                  singular: "전송으로 동영상 보내기"
                },
                "pt-BR": {
                  singular: "Envie um vídeo com transferência"
                },
                "zh-CN": {
                  singular: "使用 Transfer 发送视频"
                }
              }
            })
          })]
        })]
      });
    };
  var _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0);
  let _v200 = _v188.keyframes`
  0% { opacity: 0; }
  50% {  opacity: 0; }
  100% { opacity: 1; }
`,
    _v201 = ({
      disabled: _v0
    }) => {
      let {
          isTyping: _v1,
          isLoading: _v2,
          isTimestampIncluded: _v3
        } = (0, _v2.useContext)(_v199.CustomUrlStateCtx),
        {
          copyUrlLink: _v4
        } = (0, _v2.useContext)(_v199.CustomUrlDispatcherCtx),
        {
          triggerCopyLinkToast: _v5
        } = _v120(),
        {
          isCopied: _v6,
          hasBeenTriggeredRef: _v7,
          triggerCopied: _v8
        } = _v177(),
        _v9 = async () => {
          let _v0 = !0;
          await _v4(_v3).catch(() => _v0 = !1), _v5(_v0), _v0 && _v8();
        },
        _v10 = _v6 ? (0, _v4.translate)({
          singular: "Copied!",
          dictionary: {
            es: {
              singular: "Copiado"
            },
            "de-DE": {
              singular: "Kopiert!"
            },
            "fr-FR": {
              singular: "Copié !"
            },
            "ja-JP": {
              singular: "コピー完了！"
            },
            "ko-KR": {
              singular: "복사 완료!"
            },
            "pt-BR": {
              singular: "Copiado!"
            },
            "zh-CN": {
              singular: "已复制！"
            }
          }
        }) : (0, _v4.translate)({
          singular: "Copy link",
          dictionary: {
            es: {
              singular: "Copiar vínculo"
            },
            "de-DE": {
              singular: "Link kopieren"
            },
            "fr-FR": {
              singular: "Copier le lien"
            },
            "ja-JP": {
              singular: "リンクをコピー"
            },
            "ko-KR": {
              singular: "링크 복사"
            },
            "pt-BR": {
              singular: "Copiar link"
            },
            "zh-CN": {
              singular: "复制链接"
            }
          }
        });
      return (0, _v1.jsx)(_v96.Button, {
        variant: "primary",
        isDisabled: _v0,
        isLoading: _v2,
        onClick: _v9,
        children: _v1 ? (0, _v1.jsx)(_v11.Box, {
          as: _v198.DotsMenu,
          boxSize: "sm",
          sx: {
            circle: {
              opacity: 0,
              animation: `1.5s ${_v200} infinite`,
              _even: {
                animationDelay: "0.2s"
              },
              _last: {
                animationDelay: "0.3s"
              }
            }
          }
        }) : (0, _v1.jsx)(_v24.Text, {
          as: "span",
          fontSize: "inherit",
          fontWeight: "inherit",
          lineHeight: "inherit",
          sx: _v7.current ? {
            animation: `0.2s ${_v189} ease-out`
          } : void 0,
          children: _v10
        }, _v7.current ? _v6 ? "copied" : "copy" : "initial")
      });
    };
  var _v202 = _v0.i(0);
  let _v203 = () => {
    let _v0 = _v122(),
      _v1 = (0, _v77.useToast)(),
      _v2 = (0, _v2.useRef)(_v1),
      {
        data: _v3,
        mutate: _v4
      } = (0, _v50.useGetVideoSharingData)(),
      {
        privacy: _v5,
        patchState: {
          loading: _v6
        }
      } = _v118(),
      {
        videoOwnerCapabilities: {
          canAddCustomUrl: _v7
        },
        isVideoOwnerCapabilitiesReady: _v8
      } = (0, _v39.useGetVideoOwnerCapabilities)(),
      {
        teamPermissionLevel: _v9
      } = (() => {
        let _v0 = (0, _v6.useViewer)(),
          {
            data: _v1
          } = (0, _v50.useGetVideoSharingData)(),
          _v2 = _v1?.user?.uri,
          _v3 = _v2 ? (0, _v55.idFromUri)(_v2) : null,
          {
            data: _v4
          } = (0, _v202.useGetUserTeamRole)(() => _v3 && _v0 ? {
            where: {
              userId: _v3
            },
            select: ["permissionLevel"]
          } : null, {
            revalidateOnFocus: !1,
            revalidateOnReconnect: !1
          });
        return {
          teamPermissionLevel: _v4?.permissionLevel?.toLowerCase() ?? ""
        };
      })(),
      _v10 = (0, _v10.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      _v11 = (0, _v6.useViewer)(),
      _v12 = !!_v3?.disabledProperties?.embed,
      _v13 = !_v5 || "stock" === _v5.view || "stock_purchased" === _v5.view || _v12 || _v6,
      _v14 = (0, _v2.useCallback)(async _v0 => {
        try {
          await _v4({
            ..._v3,
            ..._v0
          }), _v2.current({
            title: _v0.changesSaved
          });
        } catch (_v0) {
          _v2.current({
            title: _v0.somethingWentWrong
          });
        }
      }, [_v3, _v4, _v0.changesSaved, _v0.somethingWentWrong]);
    return _v3 && _v8 ? (0, _v1.jsx)(_v60.Flex, {
      flexDirection: "column",
      gap: "md",
      children: (0, _v1.jsx)(_v197.CustomUrlContextProvider, {
        linkToCopy: _v3.link,
        teamUsersRole: _v9,
        children: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v196.CustomizeLinkProvider, {
            changesSaved: _v14,
            customResourceLink: _v3.customUrl || "",
            resourceId: Number(_v10),
            resourceType: "video",
            xsrft: _v11?.xsrft || "",
            children: (0, _v1.jsx)(_v195.CustomizeLinkInput, {
              placeholderLink: _v3.user?.link + "/",
              showUpsell: !_v7
            })
          }), (0, _v1.jsx)(_v201, {
            disabled: _v13
          })]
        })
      })
    }) : (0, _v1.jsx)(_v60.Flex, {
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      children: (0, _v1.jsx)(_v31.Spinner, {
        size: "xs"
      })
    });
  };
  var _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v0.i(0),
    _v209 = _v0.i(0),
    _v210 = _v0.i(0),
    _v211 = _v0.i(0),
    _v212 = _v0.i(0),
    _v213 = _v0.i(0);
  let _v214 = ["domain"],
    _v215 = ({
      initialPrivacy: _v0,
      handlePrivacyChange: _v1,
      onHasDomainsChange: _v2,
      isDisabled: _v3 = !1
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(""),
        {
          canLoadMore: _v6,
          curDomains: _v7,
          curPage: _v8,
          errorMessage: _v9,
          isValidDomain: _v10,
          lastDomain: _v11,
          loadMoreDomains: _v12,
          putDomain: _v13,
          removeDomain: _v14,
          setIsValidDomain: _v15,
          isDomainsLoading: _v16
        } = (() => {
          let {
              clipId: _v0
            } = (0, _v10.useGlobalStore)(({
              clip: _v0
            }) => _v0),
            {
              privacy: _v1,
              patchState: {
                loading: _v2
              }
            } = _v118(),
            [_v3, _v4] = (0, _v2.useState)(null),
            [_v5, _v6] = (0, _v2.useState)(!0),
            [_v7, _v8] = (0, _v2.useState)(""),
            [_v9] = (0, _v212.usePutVideoPrivacyDomain)(),
            [_v10] = (0, _v212.useDeleteVideoPrivacyDomain)(),
            {
              data: _v11,
              error: _v12,
              isLoading: _v13,
              mutate: _v14,
              size: _v15,
              setSize: _v16
            } = (0, _v213.useGetVideoPrivacyDomainsInfinite)(() => _v0 ? {
              where: {
                videoId: _v0
              },
              select: _v214,
              query: {
                perPage: 50,
                sort: "default",
                direction: "desc"
              }
            } : null),
            _v17 = (0, _v2.useMemo)(() => {
              if (!_v11) return null;
              let _v0 = _v11?.filter(Boolean)?.flatMap(_v0 => _v0.data.flatMap(_v0 => _v0));
              return {
                ..._v11[_v11.length - 1],
                data: _v0 ?? []
              };
            }, [_v11]),
            _v18 = _v17?.data || [],
            _v19 = _v3 ? [] : _v18,
            _v20 = _v19.map(_v0 => _v0.domain),
            _v21 = !_v11?.[_v11?.length - 1]?.paging?.next,
            _v22 = !_v11 && !_v12 || _v15 > 0 && _v11 && void 0 === _v11[_v15 - 1],
            _v23 = (0, _v2.useCallback)(async (_v0, _v1) => {
              if (!_v0 || !_v11 || !_v17 || _v0.trim().length < 1) return Promise.resolve();
              let _v2 = _v1 ? _v9 : _v10;
              await _v2({
                where: {
                  videoId: Number(_v0),
                  domain: _v0
                }
              });
              let _v3 = _v1 ? [..._v17.data, {
                domain: _v0,
                allowHd: !1,
                uri: _v0
              }] : [..._v17.data.filter(_v0 => _v0.domain !== _v0)];
              return _v11[0].data = _v3, _v14(_v11);
            }, [_v0, _v11, _v17, _v9, _v10, _v14]),
            _v24 = _v0 => {
              if (_v13 || _v0.trim().length < 1) return !1;
              if (!(0, _v55.validateUrl)(_v0)) return _v6(!1), _v8((0, _v4.translate)({
                singular: "Enter a valid URL",
                dictionary: {
                  es: {
                    singular: "Ingresar un URL válido"
                  },
                  "de-DE": {
                    singular: "Gib eine gültige URL ein"
                  },
                  "fr-FR": {
                    singular: "Saisissez une URL valide"
                  },
                  "ja-JP": {
                    singular: "正しいURLを入力してください"
                  },
                  "ko-KR": {
                    singular: "유효한 URL을 입력하세요."
                  },
                  "pt-BR": {
                    singular: "Digite um URL válido"
                  },
                  "zh-CN": {
                    singular: "输入有效的 URL"
                  }
                }
              })), !1;
              let _v1 = (0, _v55.sanitizeUrl)(_v0);
              return !_v20.includes(_v1) || (_v6(!1), _v8((0, _v4.translate)({
                singular: "Domain already added",
                dictionary: {
                  es: {
                    singular: "El dominio ya se agregó"
                  },
                  "de-DE": {
                    singular: "Domain wurde bereits hinzugefügt."
                  },
                  "fr-FR": {
                    singular: "Le domaine a déjà été ajouté"
                  },
                  "ja-JP": {
                    singular: "ドメインはすでに追加されています"
                  },
                  "ko-KR": {
                    singular: "도메인이 이미 추가되었습니다."
                  },
                  "pt-BR": {
                    singular: "Domínio já adicionado"
                  },
                  "zh-CN": {
                    singular: "域名已被添加"
                  }
                }
              })), !1);
            },
            _v25 = async _v0 => {
              _v19.length > 1 ? await _v23(_v0.domain, !1) : _v4(_v0);
            },
            _v26 = async _v0 => {
              if (!_v24(_v0)) return;
              _v5 || _v6(!0);
              let _v1 = (0, _v55.sanitizeUrl)(_v0);
              _v3 && (await _v23(_v3.domain, !1), _v4(null)), await _v23(_v1, !0);
            },
            _v27 = (0, _v2.useCallback)(() => _v16(_v15 + 1), [_v16, _v15]);
          return (0, _v2.useEffect)(() => {
            !_v2 && _v1?.embed !== "whitelist" && _v3 && (_v23(_v3.domain, !1), _v4(null));
          }, [_v2, _v1?.embed, _v3, _v10, _v23]), {
            canLoadMore: !_v21 && !_v13 && !_v22,
            curDomains: _v19,
            curPage: _v15,
            domains: _v18,
            errorMessage: _v7,
            isDomainsLoading: _v13,
            isValidDomain: _v5,
            lastDomain: _v3,
            isDomainValid: _v24,
            loadMoreDomains: _v27,
            putDomain: _v26,
            removeDomain: _v25,
            setIsValidDomain: _v6
          };
        })(),
        [_v17, _v18] = (0, _v211.useInfiniteScroll)(_v6, _v8),
        _v19 = _v7.length > 0;
      (0, _v2.useEffect)(() => {
        _v17 > _v8 && _v12();
      }, [_v8, _v17, _v12]), (0, _v2.useEffect)(() => {
        _v16 || _v2?.(_v19);
      }, [_v19, _v2, _v16]), (0, _v2.useEffect)(() => {
        _v19 && "whitelist" !== _v0 && _v1();
      }, [_v19, _v0, _v1]);
      let _v20 = (0, _v2.useCallback)(async () => {
        await _v13(_v4), _v5(""), "whitelist" !== _v0 && (await _v1());
      }, [_v4, _v0, _v1, _v13]);
      return (0, _v1.jsxs)(_v60.Flex, {
        flexDirection: "column",
        gap: "xs",
        children: [(0, _v1.jsx)(_v204.Header, {
          variant: "heading-xs",
          size: "xl",
          children: (0, _v4.translate)({
            singular: "Allowed domains",
            dictionary: {
              es: {
                singular: "Dominios permitidos"
              },
              "de-DE": {
                singular: "Zulässige Domains"
              },
              "fr-FR": {
                singular: "Domaines autorisés"
              },
              "ja-JP": {
                singular: "許可ドメイン"
              },
              "ko-KR": {
                singular: "허용되는 도메인"
              },
              "pt-BR": {
                singular: "Domínios permitidos"
              },
              "zh-CN": {
                singular: "允许的域名"
              }
            }
          })
        }), (0, _v1.jsxs)(_v207.FormControl, {
          isInvalid: !_v10 || !!_v11,
          children: [(0, _v1.jsxs)(_v101.InputGroup, {
            size: "md",
            children: [(0, _v1.jsx)(_v102.Input, {
              isDisabled: _v3,
              autoFocus: !0,
              variant: "outlined",
              placeholder: (0, _v4.translate)({
                singular: "domain.com",
                dictionary: {
                  es: {
                    singular: "dominio.com"
                  }
                }
              }),
              value: _v4,
              size: "md",
              onChange: _v0 => {
                _v10 || _v15(!0), _v5(_v0.target.value);
              },
              onKeyDown: _v0 => "Enter" === _v0.key && _v20(),
              onBlur: _v20
            }), (0, _v1.jsx)(_v103.InputRightElement, {
              children: (0, _v1.jsx)(_v25.Tooltip, {
                label: (0, _v4.translate)({
                  singular: "Add to list",
                  dictionary: {
                    es: {
                      singular: "Agregar a la lista"
                    },
                    "de-DE": {
                      singular: "Zur Liste hinzufügen"
                    },
                    "fr-FR": {
                      singular: "Ajouter à la liste"
                    },
                    "ja-JP": {
                      singular: "リストに追加"
                    },
                    "ko-KR": {
                      singular: "목록에 추가"
                    },
                    "pt-BR": {
                      singular: "Adicionar à lista"
                    },
                    "zh-CN": {
                      singular: "添加到列表中"
                    }
                  }
                }),
                placement: "top",
                children: (0, _v1.jsx)(_v23.IconButton, {
                  isDisabled: _v3,
                  "aria-label": (0, _v4.translate)({
                    singular: "Add domain",
                    dictionary: {
                      es: {
                        singular: "Agregar un dominio"
                      },
                      "de-DE": {
                        singular: "Domäne hinzufügen"
                      },
                      "fr-FR": {
                        singular: "Ajouter un domaine"
                      },
                      "ja-JP": {
                        singular: "ドメインを追加"
                      },
                      "ko-KR": {
                        singular: "도메인 추가"
                      },
                      "pt-BR": {
                        singular: "Adicionar domínio"
                      },
                      "zh-CN": {
                        singular: "添加域"
                      }
                    }
                  }),
                  size: "sm",
                  variant: "tertiary",
                  icon: (0, _v1.jsx)(_v210.PlusCircle, {
                    cursor: "pointer"
                  }),
                  onClick: _v20
                })
              })
            })]
          }), !_v10 && _v9 && (0, _v1.jsx)(_v208.FormErrorMessage, {
            children: _v9
          }), _v11 && (0, _v1.jsx)(_v208.FormErrorMessage, {
            children: (0, _v4.translate)({
              singular: "At least 1 domain must be allowed",
              dictionary: {
                es: {
                  singular: "Se debe permitir, al menos, 1 dominio"
                },
                "de-DE": {
                  singular: "Mindestens eine Domain muss zugelassen werden."
                },
                "fr-FR": {
                  singular: "Au moins un domaine doit être autorisé"
                },
                "ja-JP": {
                  singular: "少なくとも1つのドメインを許可する必要があります"
                },
                "ko-KR": {
                  singular: "최소 1개의 도메인이 허용되어야 합니다."
                },
                "pt-BR": {
                  singular: "Pelo menos 1 domínio deve ser permitido"
                },
                "zh-CN": {
                  singular: "必须至少允许 1 个域名"
                }
              }
            })
          })]
        }), (0, _v1.jsx)(_v109.HStack, {
          flexWrap: "wrap",
          maxH: (0, _v13.rem)(120),
          overflowY: "auto",
          mt: "xs",
          children: _v7.map((_v0, _v1) => (0, _v1.jsxs)(_v209.Tag, {
            ref: _v7.length - 1 === _v1 ? _v18 : void 0,
            size: "sm",
            children: [(0, _v1.jsx)(_v209.TagLabel, {
              children: _v0.domain.slice(0, 56)
            }), !_v3 && (0, _v1.jsx)(_v209.TagCloseButton, {
              onClick: () => _v14(_v0)
            })]
          }, _v0.domain))
        })]
      });
    },
    _v216 = "video-embed-privacy-error",
    _v217 = {
      color: "transparent",
      textShadow: `0 0 ${(0, _v13.rem)(5)} rgba(0, 0, 0, 0.25)`,
      userSelect: "none",
      cursor: "not-allowed"
    },
    _v218 = {
      userSelect: "text"
    },
    _v219 = ({
      layoutType: _v0,
      onPrivacyChange: _v1,
      onCopyEmbedCode: _v2,
      onEmbedChange: _v3
    }) => {
      let _v4,
        _v5,
        _v6,
        _v7,
        _v8 = _v122(),
        _v9 = (0, _v77.useToast)(),
        _v10 = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0.clipId),
        _v11 = _v0 ?? "panel",
        {
          trackShareEmbedPrivacyChanged: _v12,
          trackShareEmbedSizeChanged: _v13
        } = (0, _v15.useDistributionTracking)(),
        _v14 = (0, _v2.useRef)(_v9),
        _v15 = (0, _v6.useViewer)(),
        [_v16, _v17] = (0, _v2.useState)("NOT_STICKY"),
        [_v18, _v19] = (0, _v2.useState)(!1),
        {
          privacy: _v20,
          patchState: {
            loading: _v21,
            called: _v22,
            error: _v23
          },
          patchVideoPrivacy: _v24
        } = _v118(),
        {
          videoOwnerCapabilities: {
            hasExtraEmbedOptions: _v25
          },
          isVideoOwnerCapabilitiesReady: _v26
        } = (0, _v39.useGetVideoOwnerCapabilities)(),
        {
          dimensions: _v27,
          embedCode: _v28,
          embedType: _v29,
          isEmbedDisabled: _v30,
          isAutoplay: _v31,
          isMute: _v32,
          isLoop: _v33,
          copyEmbedCode: _v34,
          handleDimensionsChange: _v35,
          setEmbedType: _v36,
          togglePlaybackOption: _v37
        } = _v121({
          onCopyEmbedCode: _v2
        }),
        [_v38, _v39] = (0, _v2.useState)(_v20?.embed || "public"),
        [_v40, _v41] = (0, _v2.useState)(!1),
        [_v42, _v43] = (0, _v2.useState)(!0),
        _v44 = (0, _v2.useRef)(!1),
        _v45 = (0, _v2.useCallback)(_v0 => {
          if (_v43(_v0), !_v44.current) {
            _v44.current = !0;
            return;
          }
          _v3?.(_v0);
        }, [_v3]);
      (0, _v2.useEffect)(() => {
        _v20?.embed && _v39(_v20.embed);
      }, [_v20?.embed]);
      let _v46 = (0, _v2.useRef)(null),
        _v47 = (0, _v2.useRef)(null),
        _v48 = (0, _v2.useRef)(_v20);
      (0, _v97.useOutsideClick)({
        ref: _v46,
        handler: () => _v41(!1)
      });
      let {
          mutate: _v49
        } = (0, _v132.useUserQuotaApi)(),
        {
          onHasDomainsChange: _v50
        } = (_v4 = (0, _v77.useToast)(), _v5 = (0, _v2.useRef)(_v4), _v6 = (0, _v2.useRef)(!1), _v7 = (0, _v2.useCallback)(_v0 => {
          _v6.current = !_v0;
        }, []), (0, _v2.useEffect)(() => {
          _v6.current && "whitelist" !== _v38 && (_v6.current = !1);
        }, [_v38]), (0, _v2.useEffect)(() => () => {
          _v6.current && (_v5.current({
            variant: "warning",
            title: (0, _v4.translate)({
              singular: "Couldn't update embed privacy. At least 1 domain must be allowed.",
              dictionary: {
                es: {
                  singular: "No se pudo actualizar la privacidad de la inserción. Se debe permitir, al menos, 1 dominio."
                },
                "de-DE": {
                  singular: "Datenschutz für das einbetten konnte nicht aktualisiert werden. Es muss mindestens 1 Domain erlaubt sein."
                },
                "fr-FR": {
                  singular: "Impossible de mettre à jour la confidentialité intégrée. Au moins un domaine doit être autorisé."
                },
                "ja-JP": {
                  singular: "埋め込みのプライバシーを更新できませんでした。少なくとも1つのドメインを許可する必要があります。"
                },
                "ko-KR": {
                  singular: "임베드 프라이버시를 업데이트할 수 없습니다. 최소 1개의 도메인이 허용되어야 합니다."
                },
                "pt-BR": {
                  singular: "Não foi possível atualizar a privacidade de incorporação. Pelo menos um domínio deve ser permitido."
                },
                "zh-CN": {
                  singular: "无法更新嵌入内容隐私设置。必须至少允许 1 个域名。"
                }
              }
            })
          }), _v6.current = !1);
        }, []), {
          onHasDomainsChange: _v7
        }),
        {
          tooltip: _v51,
          isDisabled: _v52
        } = (0, _v206.useGetEditEmbedPrivacyDisabled)(),
        _v53 = _v15?.user?.uploadQuota?.restricted,
        _v54 = _v20?.view === "nobody",
        _v55 = (0, _v205.useEmbedPrivacyOptions)(_v25, !0);
      (0, _v2.useEffect)(() => {
        _v22 && _v23 && (_v9.isActive(_v216) || _v9({
          title: _v8.somethingWentWrong,
          id: _v216
        }));
      }, [_v9, _v22, _v23, _v8.somethingWentWrong]);
      let _v56 = (0, _v2.useCallback)(async _v0 => {
          if (!_v21) {
            _v0 !== _v38 && _v12({
              clipId: String(_v10),
              privacy: _v0,
              shareSurface: _v11
            }), _v39(_v0);
            try {
              await _v24({
                embed: _v0
              }), _v14.current({
                title: _v8.changesSaved
              }), _v1?.({
                embed: _v0
              }), null != _v53 && _v48.current?.view === "anybody" && _v49(void 0, {
                revalidate: !0
              });
            } catch (_v0) {
              _v14.current({
                title: _v8.somethingWentWrong
              });
            }
          }
        }, [_v21, _v8, _v1, _v24, _v53, _v49, _v10, _v11, _v12, _v38]),
        _v57 = (0, _v2.useCallback)(async () => {
          _v21 || (await _v24({
            embed: "whitelist"
          }), null != _v53 && _v48.current?.view === "anybody" && _v49(void 0, {
            revalidate: !0
          }));
        }, [_v21, _v24, _v53, _v49]);
      if ((0, _v2.useEffect)(() => {
        let _v0,
          _v1 = () => {
            if (clearTimeout(_v0), window.innerHeight < 670) {
              _v0 = setTimeout(() => {
                _v41(!1), _v17("STICKY_AND_LOCK_EXPAND");
              }, 200);
              return;
            }
            _v0 = setTimeout(() => {
              _v17("NOT_STICKY");
            }, 200);
          };
        return window.addEventListener("resize", _v1), _v1(), () => window.removeEventListener("resize", _v1);
      }, []), !_v20 || !_v26) return (0, _v1.jsx)(_v60.Flex, {
        justifyContent: "center",
        alignItems: "center",
        children: (0, _v1.jsx)(_v31.Spinner, {
          size: "xs"
        })
      });
      let _v58 = "STICKY_AND_LOCK_EXPAND" === _v16;
      return (0, _v1.jsxs)(_v60.Flex, {
        flexDirection: "column",
        gap: "md",
        children: [(0, _v1.jsxs)(_v60.Flex, {
          flexDirection: "column",
          gap: "md",
          flex: "1",
          ...(_v58 && {
            paddingBottom: "md"
          }),
          children: [(0, _v1.jsx)(_v136, {
            viewPrivacy: _v20?.view,
            onCheckedChange: _v45
          }), (0, _v1.jsxs)(_v60.Flex, {
            flexDirection: "column",
            gap: "md",
            opacity: _v42 ? 1 : .2,
            pointerEvents: _v42 ? "auto" : "none",
            children: [(0, _v1.jsxs)(_v60.Flex, {
              flexDirection: "column",
              gap: "xs",
              children: [(0, _v1.jsxs)(_v60.Flex, {
                alignItems: "center",
                gap: "1",
                children: [(0, _v1.jsx)(_v204.Header, {
                  variant: "heading-xs",
                  size: "xl",
                  children: (0, _v4.translate)({
                    singular: "Where can this be embedded?",
                    dictionary: {
                      es: {
                        singular: "¿Dónde pueden insertarlo?"
                      },
                      "de-DE": {
                        singular: "Wo kann das eingebettet werden?"
                      },
                      "fr-FR": {
                        singular: "Où est-ce que cette vidéo peut être intégrée ?"
                      },
                      "ja-JP": {
                        singular: "どこに動画の埋め込みを許可しますか？"
                      },
                      "ko-KR": {
                        singular: "어디에 임베드할 수 있나요?"
                      },
                      "pt-BR": {
                        singular: "Onde este vídeo pode ser incorporado?"
                      },
                      "zh-CN": {
                        singular: "可以在哪里嵌入？"
                      }
                    }
                  })
                }), _v52 && _v51 && (0, _v1.jsx)(_v25.Tooltip, {
                  shouldWrapChildren: !0,
                  label: _v51,
                  children: (0, _v1.jsx)(_v43.InfoCircle, {
                    display: "block",
                    width: "2xs",
                    height: "2xs"
                  })
                })]
              }), _v54 && (0, _v1.jsx)(_v78.Alert, {
                mb: "md",
                status: "info",
                children: (0, _v1.jsx)(_v24.Text, {
                  variant: "body-sm",
                  children: (0, _v4.translate)({
                    singular: "This video is set to Private. Only people with access can view the embedded video.",
                    dictionary: {
                      es: {
                        singular: "Este video está configurado como Privado. Solo las personas que tienen acceso pueden ver el video insertado."
                      },
                      "de-DE": {
                        singular: "Dieses Video ist auf „Privat“ eingestellt. Nur Personen mit Zugriffsrechten können das eingebettete Video ansehen."
                      },
                      "fr-FR": {
                        singular: "Cette vidéo est définie sur le mode Privé. Le visionnage de la vidéo intégrée est réservé aux utilisateurs disposant d'un accès."
                      },
                      "ja-JP": {
                        singular: "この動画は「プライベート」に設定されています。アクセス権を持つ人のみ埋め込み動画を視聴できます。"
                      },
                      "ko-KR": {
                        singular: "이 동영상은 '비공개'로 설정되어 있습니다. 액세스 권한이 있는 사람만 임베드된 동영상을 볼 수 있습니다."
                      },
                      "pt-BR": {
                        singular: "O vídeo está definido como Privado. Somente pessoas com acesso podem ver o vídeo incorporado."
                      },
                      "zh-CN": {
                        singular: "此视频已设置为私密。只有具有访问权限的人员才能查看嵌入的视频。"
                      }
                    }
                  })
                })
              }), (0, _v1.jsx)(_v11.Box, {
                sx: {
                  "> div > div > span > div": {
                    paddingTop: "sm",
                    paddingBottom: "sm"
                  }
                },
                children: (0, _v1.jsx)(_v112.PrivacyDropdown, {
                  activePrivacy: _v38,
                  privacyOptions: _v55,
                  onSelect: _v56,
                  isDisabled: _v21 || _v52,
                  onUpsellClick: () => {
                    _v19(!0);
                  },
                  isRedirectUpsell: !1,
                  variant: "outlined"
                })
              })]
            }), "whitelist" === _v38 && (0, _v1.jsx)(_v215, {
              initialPrivacy: _v20?.embed,
              handlePrivacyChange: _v57,
              onHasDomainsChange: _v50,
              isDisabled: _v52
            }), (0, _v1.jsx)(_v111, {
              dimensions: _v27,
              embedType: _v29,
              onDimensionsChange: _v35,
              onEmbedTypeChange: _v0 => {
                _v13({
                  clipId: String(_v10),
                  embedSizeType: _v0,
                  shareSurface: _v11
                }), _v36(_v0);
              }
            }), (0, _v1.jsxs)(_v40.VStack, {
              gap: "sm",
              alignItems: "start",
              children: [(0, _v1.jsx)(_v204.Header, {
                variant: "heading-xs",
                size: "xl",
                children: (0, _v4.translate)({
                  singular: "Playback",
                  dictionary: {
                    es: {
                      singular: "Reproducción"
                    },
                    "de-DE": {
                      singular: "Wiedergabe"
                    },
                    "fr-FR": {
                      singular: "Lecture"
                    },
                    "ja-JP": {
                      singular: "再生"
                    },
                    "ko-KR": {
                      singular: "재생"
                    },
                    "pt-BR": {
                      singular: "Reprodução"
                    },
                    "zh-CN": {
                      singular: "回放"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v191, {
                label: (0, _v4.translate)({
                  singular: "Autoplay",
                  dictionary: {
                    es: {
                      singular: "Reproducción automática"
                    },
                    "de-DE": {
                      singular: "Automatisches Abspielen"
                    },
                    "fr-FR": {
                      singular: "Lecture automatique"
                    },
                    "ja-JP": {
                      singular: "自動再生"
                    },
                    "ko-KR": {
                      singular: "자동재생"
                    },
                    "pt-BR": {
                      singular: "Reprodução automática"
                    },
                    "zh-CN": {
                      singular: "自动播放"
                    }
                  }
                }),
                isChecked: _v31,
                onChange: () => _v37("autoplay"),
                info: (0, _v4.translate)({
                  singular: "Video will start playing immediately after page loads",
                  dictionary: {
                    es: {
                      singular: "El video comenzará a reproducirse inmediatamente después de que se cargue la página."
                    },
                    "de-DE": {
                      singular: "Das Video wird sofort abgespielt, sobald die Seite geladen ist"
                    },
                    "fr-FR": {
                      singular: "La vidéo commencera à jouer immédiatement après le chargement de la page."
                    },
                    "ja-JP": {
                      singular: "ページが読み込まれるとすぐに動画が再生されます"
                    },
                    "ko-KR": {
                      singular: "페이지가 로딩되면 곧바로 동영상이 재생됩니다."
                    },
                    "pt-BR": {
                      singular: "O vídeo começará a ser reproduzido imediatamente após a página ser carregada"
                    },
                    "zh-CN": {
                      singular: "页面加载后，视频将立即开始播放"
                    }
                  }
                }),
                size: "md"
              }), _v31 ? (0, _v1.jsx)(_v25.Tooltip, {
                label: (0, _v4.translate)({
                  singular: "Autoplay videos need to start muted because browsers block autoplay with sound.",
                  dictionary: {
                    es: {
                      singular: "Los videos con reproducción automática deben empezar silenciados porque los navegadores bloquean la reproducción automática con sonido."
                    },
                    "de-DE": {
                      singular: "Autoplay-Videos müssen stummgeschaltet starten, da Browser die automatische Wiedergabe mit Ton blockieren."
                    },
                    "fr-FR": {
                      singular: "Les vidéos en lecture automatique doivent démarrer en sourdine car les navigateurs bloquent la lecture automatique lorsqu'il y a du son."
                    },
                    "ja-JP": {
                      singular: "自動再生される動画は、ブラウザが音声ありの自動再生をブロックするため、ミュートで開始する必要があります。"
                    },
                    "ko-KR": {
                      singular: "자동 재생 비디오는 브라우저가 소리가 있는 자동 재생을 차단하기 때문에 음소거 상태로 시작해야 합니다."
                    },
                    "pt-BR": {
                      singular: "Vídeos com reprodução automática precisam começar sem som porque os navegadores bloqueiam a reprodução automática com som."
                    },
                    "zh-CN": {
                      singular: "自动播放的视频需要静音开始，因为浏览器会阻止带声音的自动播放。"
                    }
                  }
                }),
                placement: "top-end",
                children: (0, _v1.jsx)(_v60.Flex, {
                  w: "100%",
                  children: (0, _v1.jsx)(_v191, {
                    label: (0, _v4.translate)({
                      singular: "Mute",
                      dictionary: {
                        es: {
                          singular: "Silenciar"
                        },
                        "de-DE": {
                          singular: "Stummschalten"
                        },
                        "fr-FR": {
                          singular: "Mettre en sourdine"
                        },
                        "ja-JP": {
                          singular: "ミュート"
                        },
                        "ko-KR": {
                          singular: "음소거"
                        },
                        "pt-BR": {
                          singular: "Mudo"
                        },
                        "zh-CN": {
                          singular: "静音"
                        }
                      }
                    }),
                    isChecked: !0,
                    isDisabled: !0,
                    size: "md"
                  })
                })
              }) : (0, _v1.jsx)(_v191, {
                label: (0, _v4.translate)({
                  singular: "Mute",
                  dictionary: {
                    es: {
                      singular: "Silenciar"
                    },
                    "de-DE": {
                      singular: "Stummschalten"
                    },
                    "fr-FR": {
                      singular: "Mettre en sourdine"
                    },
                    "ja-JP": {
                      singular: "ミュート"
                    },
                    "ko-KR": {
                      singular: "음소거"
                    },
                    "pt-BR": {
                      singular: "Mudo"
                    },
                    "zh-CN": {
                      singular: "静音"
                    }
                  }
                }),
                isChecked: _v32,
                onChange: () => _v37("mute"),
                size: "md"
              }), (0, _v1.jsx)(_v191, {
                label: (0, _v4.translate)({
                  singular: "Loop",
                  dictionary: {
                    es: {
                      singular: "Bucle"
                    },
                    "fr-FR": {
                      singular: "Lire en boucle"
                    },
                    "ja-JP": {
                      singular: "ループ"
                    },
                    "ko-KR": {
                      singular: "반복 재생"
                    },
                    "zh-CN": {
                      singular: "循环播放"
                    }
                  }
                }),
                isChecked: _v33,
                onChange: () => _v37("loop"),
                size: "md"
              })]
            })]
          })]
        }), (0, _v1.jsxs)(_v40.VStack, {
          gap: (0, _v13.rem)(10),
          flexShrink: 0,
          opacity: _v42 ? 1 : .2,
          pointerEvents: _v42 ? "auto" : "none",
          ...(_v58 && {
            position: "sticky",
            bgColor: "surface",
            borderTop: "1px solid",
            borderColor: "input-stroke",
            bottom: "modal" === _v0 ? "-1.5rem" : "-1rem",
            padding: "modal" === _v0 ? "1.5rem" : "1rem",
            margin: "modal" === _v0 ? "-1.5rem" : "-1rem"
          }),
          children: [(0, _v1.jsx)(_v60.Flex, {
            ref: _v46,
            w: "100%",
            py: "sm",
            px: "md",
            border: `${(0, _v13.rem)(_v40 ? 2 : 1)} solid`,
            borderRadius: "md",
            borderColor: _v40 ? "stroke-focus" : "input-stroke",
            onClick: () => {
              if (!_v30 && !_v40 && "STICKY_AND_LOCK_EXPAND" !== _v16 && (_v41(!0), _v47.current)) {
                let _v0 = document.createRange();
                _v0.selectNodeContents(_v47.current);
                let _v1 = window.getSelection();
                _v1?.removeAllRanges(), _v1?.addRange(_v0);
              }
            },
            sx: _v30 ? _v217 : _v218,
            children: (0, _v1.jsx)(_v24.Text, {
              "aria-label": "Embed code",
              ref: _v47,
              w: "100%",
              overflow: "hidden",
              variant: "body-md",
              textOverflow: "ellipsis",
              whiteSpace: _v40 ? "inherit" : "nowrap",
              noOfLines: _v40 ? void 0 : 1,
              children: _v28
            })
          }), (0, _v1.jsx)(_v96.Button, {
            variant: "primary",
            isDisabled: _v30 || !_v42,
            w: "100%",
            onClick: _v34,
            children: (0, _v4.translate)({
              singular: "Copy embed code",
              dictionary: {
                es: {
                  singular: "Copiar el código de inserción"
                },
                "de-DE": {
                  singular: "Einbettungscode kopieren"
                },
                "fr-FR": {
                  singular: "Copier le code d’intégration"
                },
                "ja-JP": {
                  singular: "埋め込みコードをコピー"
                },
                "ko-KR": {
                  singular: "임베드 코드 복사하기"
                },
                "pt-BR": {
                  singular: "Copiar código de incorporação"
                },
                "zh-CN": {
                  singular: "复制嵌入代码"
                }
              }
            })
          })]
        }), _v18 && (0, _v1.jsx)(_v5.default, {
          apiUrl: _v15?.apiUrl,
          userConfig: {
            jwt: _v15?.jwt,
            userId: _v15?.user?.id
          },
          templateType: "default",
          onClose: () => _v19(!1),
          modalConfig: {
            headerText: (0, _v4.translate)({
              singular: "Upgrade to restrict domains",
              dictionary: {
                es: {
                  singular: "Actualice para restringir dominios"
                },
                "de-DE": {
                  singular: "Upgrade vornehmen, um Domains einzuschränken"
                },
                "fr-FR": {
                  singular: "Mettez à niveau pour restreindre les domaines"
                },
                "ja-JP": {
                  singular: "アップグレードしてドメイン制限可能に"
                },
                "ko-KR": {
                  singular: "도메인을 제한하려면 업그레이드하세요."
                },
                "pt-BR": {
                  singular: "Faça upgrade para restringir domínios"
                },
                "zh-CN": {
                  singular: "升级以限制域"
                }
              }
            }),
            subHeaderText: (0, _v4.translate)({
              singular: "Get full access to robust privacy and engagement tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de privacidad e interacción"
                },
                "de-DE": {
                  singular: "Sie erhalten vollen Zugang zu leistungsstarken Datenschutz- und Interaktionstools."
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la confidentialité et l'engagement"
                },
                "ja-JP": {
                  singular: "強力なプライバシー機能とエンゲージメントツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 개인정보 보호 및 참여 도구를 모두 활용하세요."
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de privacidade e engajamento"
                },
                "zh-CN": {
                  singular: "获取对强大的隐私和参与工具的完整访问权限"
                }
              }
            })
          },
          tracking: {
            params: {
              feature: "privacy",
              upsell_name: "privacy_settings_embed_specific_domains",
              location: "SVV_share_drawer"
            },
            paywallTracking: {
              paywallTrigger: "svv_embed_panel_domain_restriction_button",
              paywallLocation: "single_video_view_share_drawer",
              paywallType: "popup",
              paywallFeature: "privacy"
            }
          }
        })]
      });
    };
  var _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0);
  let _v224 = ({
      children: _v0,
      onUpsellClick: _v1
    }) => {
      let _v2 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig?.location) ?? "panel",
        _v3 = (0, _v2.useMemo)(() => ({
          components: {
            ScreenManager: () => (0, _v1.jsx)(_v1.Fragment, {})
          },
          providers: {
            ResourceProvider: () => (0, _v1.jsx)(_v1.Fragment, {})
          },
          header: {
            getTabs: () => []
          },
          subHeader: {
            getTabs: () => []
          },
          footer: {
            TeamListFooter: () => (0, _v1.jsx)(_v1.Fragment, {})
          },
          hooks: {
            useUpsellCallback: () => ({
              onInviteUpsellClick: () => _v1?.({
                skipGrowthModalTest: !0
              })
            })
          },
          shareSurface: _v2
        }), [_v1, _v2]);
      return !function () {
        let {
            clipId: _v0,
            clipHash: _v1
          } = (0, _v10.useGlobalStore)(({
            clip: _v0
          }) => _v0),
          _v2 = (0, _v55.getClipRequestId)(_v0, _v1),
          {
            data: _v3
          } = (0, _v50.useGetVideoSharingData)(),
          _v4 = (0, _v69.useGlobalStore)(({
            resourceProps: _v0
          }) => _v0.actions.setResourceProps);
        (0, _v2.useEffect)(() => {
          if (!_v3) return;
          let {
              name: _v0,
              metadata: _v1,
              parentProject: _v2,
              allowedPrivacies: _v3,
              uri: _v4,
              user: _v5,
              privacy: _v6
            } = _v3,
            _v7 = _v6 && !["nobody", "disable"].includes(_v6.view);
          _v4({
            allowedPrivacies: _v3,
            id: Number(_v0),
            idHash: _v2,
            uri: _v4,
            name: _v0,
            hasParent: !!_v2?.uri,
            isPrivateToUser: !!_v2?.isPrivateToUser,
            user: _v5,
            canInvite: !!_v1.interactions.invite,
            canEdit: !!_v1.interactions.edit,
            resourceCreatorTeamUserUri: _v1.connections.resourceCreatorTeamUser?.uri ?? null,
            userId: (0, _v55.getUserIdFromUri)(_v5.uri),
            viewPrivacy: !!_v1.interactions.viewPrivacy,
            showViewerEmbed: "public" === _v6.embed,
            canViewerShare: _v7,
            showSocialTab: !1,
            folderId: _v2?.uri ? (0, _v55.getMemberIdFromUri)(_v2.uri) : void 0
          });
        }, [_v4, _v3, _v0, _v2]), (0, _v223.useSetupInitStore)({
          uri: `/videos/${_v0}`,
          page: "home",
          entryPoint: null,
          showPrivacyRedesign: !0,
          ownerUri: _v3?.user?.uri ?? "",
          modalState: _v70.ShareModalState.Default,
          isCustomModal: !0,
          closeResourceShareModal: () => {}
        });
      }(), (0, _v1.jsx)(_v221.ResourceConfigContext.Provider, {
        value: _v3,
        children: (0, _v1.jsx)(_v222.RefsProvider, {
          children: _v0
        })
      });
    },
    _v225 = ({
      onClose: _v0
    }) => {
      let _v1 = (0, _v69.useGlobalStore)(({
          screen: _v0
        }) => _v0.main),
        _v2 = (0, _v69.useGlobalStore)(({
          screen: _v0
        }) => _v0.actions.setMainScreen),
        _v3 = (0, _v69.useGlobalStore)(({
          invite: _v0
        }) => _v0.actions.clearSelectedTeamMembers),
        _v4 = (0, _v2.useCallback)(() => {
          _v2(_v70.ShareModalState.Default), _v3();
        }, [_v2, _v3]),
        _v5 = (0, _v2.useCallback)(() => {
          _v2(_v70.ShareModalState.Default), _v0?.();
        }, [_v2, _v0]);
      return _v71("INVITE_PANEL") ? (0, _v1.jsx)(_v60.Flex, {
        alignItems: "center",
        gap: "2",
        pt: "4",
        children: (0, _v1.jsx)(_v29, {
          showBackButton: !0,
          onBackButtonClick: _v4,
          onCloseButtonClick: _v5,
          children: (() => {
            switch (_v1) {
              case _v70.ShareModalState.Invitation:
                return (0, _v4.translate)({
                  singular: "Share with...",
                  dictionary: {
                    es: {
                      singular: "Compartir con..."
                    },
                    "de-DE": {
                      singular: "Teilen mit ..."
                    },
                    "fr-FR": {
                      singular: "Partager avec..."
                    },
                    "ja-JP": {
                      singular: "共有相手"
                    },
                    "ko-KR": {
                      singular: "공유 대상..."
                    },
                    "pt-BR": {
                      singular: "Compartilhar com..."
                    },
                    "zh-CN": {
                      singular: "分享给..."
                    }
                  }
                });
              case _v70.ShareModalState.InheritedAccessList:
                return (0, _v4.translate)({
                  singular: "People with access to the parent folder",
                  dictionary: {
                    es: {
                      singular: "Personas con acceso a la carpeta principal"
                    },
                    "de-DE": {
                      singular: "Personen mit Zugriff auf den übergeordneten Ordner"
                    },
                    "fr-FR": {
                      singular: "Les personnes ayant accès au dossier parent"
                    },
                    "ja-JP": {
                      singular: "親フォルダーにアクセスできる人"
                    },
                    "ko-KR": {
                      singular: "상위 폴더에 대한 액세스 권한이 있는 사람들"
                    },
                    "pt-BR": {
                      singular: "Pessoas com acesso à pasta principal"
                    },
                    "zh-CN": {
                      singular: "有权访问父文件夹的人员"
                    }
                  }
                });
              default:
                return null;
            }
          })()
        })
      }) : null;
    },
    _v226 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v2.useContext)(_v222.RefsDispatch),
        _v2 = (0, _v2.useRef)(null),
        _v3 = (0, _v2.useRef)(null),
        _v4 = (0, _v2.useRef)(null);
      return (0, _v2.useEffect)(() => {
        _v1(_v0 => ({
          ..._v0,
          modalRef: _v2,
          modalWrapperRef: _v2,
          modalContentRef: _v3,
          modalFooterRef: _v4
        }));
      }, [_v1, _v2, _v3, _v4]), (0, _v1.jsxs)(_v11.Box, {
        ref: _v2,
        sx: {
          ".team-permissions-list-header": {
            display: "none"
          },
          ".team-permissions-list-content": {
            paddingTop: (0, _v13.rem)(10),
            maxHeight: "unset"
          },
          ".custom-divider": {
            backgroundColor: "transparent"
          },
          ".invitation-footer-send-button": {
            width: "100%"
          },
          ".invitation-footer-cancel-button": {
            display: "none"
          }
        },
        children: [(0, _v1.jsx)(_v11.Box, {
          ref: _v3,
          sx: {
            "& > div": {
              padding: 0
            }
          },
          children: _v0
        }), (0, _v1.jsx)(_v11.Box, {
          ref: _v4,
          sx: {
            "& > div > div": {
              padding: 0
            }
          }
        })]
      });
    },
    _v227 = ({
      onClose: _v0
    }) => {
      let _v1 = (0, _v6.useViewer)(),
        _v2 = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0.clipId),
        _v3 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig?.location) ?? "panel",
        {
          trackShareAddPeopleButtonClicked: _v4
        } = (0, _v15.useDistributionTracking)();
      (0, _v16.usePicoEffect)(() => {
        if (!_v2) return !1;
        _v4({
          clipId: String(_v2),
          shareSurface: _v3
        });
      }, [_v2], {
        once: !0
      });
      let {
          isOpen: _v5,
          onOpen: _v6,
          onClose: _v7
        } = (0, _v14.useDisclosure)(),
        _v8 = (0, _v2.useCallback)(() => {
          _v6();
        }, [_v6]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v224, {
          onUpsellClick: _v8,
          children: [(0, _v1.jsx)(_v225, {
            onClose: _v0
          }), (0, _v1.jsx)(_v226, {
            children: (0, _v1.jsx)(_v220.PermissionScreenManager, {})
          })]
        }), _v5 && (0, _v1.jsx)(_v5.default, {
          apiUrl: _v1?.apiUrl,
          userConfig: {
            jwt: _v1?.jwt,
            userId: _v1?.user?.id
          },
          templateType: "default",
          onClose: _v7,
          modalConfig: {
            headerText: (0, _v4.translate)({
              singular: "Upgrade to share",
              dictionary: {
                es: {
                  singular: "Cambia de membresía para compartir"
                },
                "de-DE": {
                  singular: "Zum Teilen Upgrade vornehmen"
                },
                "fr-FR": {
                  singular: "Passez au niveau supérieur pour partager"
                },
                "ja-JP": {
                  singular: "共有するにはアップグレード"
                },
                "ko-KR": {
                  singular: "업그레이드하고 공유하세요"
                },
                "pt-BR": {
                  singular: "Faça o upgrade para compartilhar"
                },
                "zh-CN": {
                  singular: "升级后即可分享"
                }
              }
            }),
            subHeaderText: (0, _v4.translate)({
              singular: "Get full access to robust collaboration and privacy tools",
              dictionary: {
                es: {
                  singular: "Obtenga acceso total a herramientas potentes de colaboración y privacidad"
                },
                "de-DE": {
                  singular: "Erhalten Sie vollen Zugriff auf zuverlässige Tools für Zusammenarbeit und Datenschutz"
                },
                "fr-FR": {
                  singular: "Accédez à tous les outils performants pour la collaboration et la confidentialité"
                },
                "ja-JP": {
                  singular: "強力な共同作業ツールとプライバシーツールにフルアクセス"
                },
                "ko-KR": {
                  singular: "강력한 협업 및 개인정보 보호 도구 모두 이용"
                },
                "pt-BR": {
                  singular: "Tenha acesso total a ferramentas robustas de colaboração e privacidade"
                },
                "zh-CN": {
                  singular: "获取对强大协作和隐私工具的完整访问权限"
                }
              }
            })
          },
          tracking: {
            params: {
              feature: "teams",
              upsell_name: "video_share",
              location: "SVV_share_drawer"
            },
            paywallTracking: {
              paywallTrigger: "svv_invite_panel_share_button",
              paywallLocation: "single_video_view_share_drawer",
              paywallType: "popup",
              paywallFeature: "collaboration"
            }
          }
        })]
      });
    };
  var _v228 = _v0.i(0),
    _v229 = _v0.i(0),
    _v230 = _v0.i(0),
    _v231 = _v0.i(0);
  let _v232 = _v0 => (0, _v1.jsx)(_v37.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 2a10 10 0 1 0 5 18.66 1 1 0 1 0-1-1.73A8 8 0 1 1 20 12v.75a1.75 1.75 0 0 1-3.5 0V8.5a1 1 0 0 0-1-1 1 1 0 0 0-1 .79A4.45 4.45 0 0 0 12 7.5a4.5 4.5 0 1 0 3.3 7.5 3.74 3.74 0 0 0 6.7-2.25V12A10 10 0 0 0 12 2Zm0 12.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z",
      fill: "currentColor"
    })
  });
  var _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = _v0.i(0),
    _v236 = _v0.i(0),
    _v237 = _v0.i(0),
    _v238 = _v0.i(0),
    _v239 = _v0.i(0),
    _v240 = _v0.i(0);
  let _v241 = _v0 => (0, _v1.jsxs)(_v109.HStack, {
    bgColor: "status-destructive-secondary",
    borderRadius: "sm",
    gap: "2",
    px: "3",
    py: "2",
    width: "fit-content",
    children: [(0, _v1.jsx)(_v240.CircleExclamationFilled, {
      color: "status-destructive-primary",
      fontSize: "1.5rem"
    }), (0, _v1.jsx)(_v24.Text, {
      variant: "body-md",
      whiteSpace: "nowrap",
      children: _v0.title
    }), _v0.children, (0, _v1.jsx)(_v23.IconButton, {
      variant: "tertiary",
      size: "xs",
      icon: (0, _v1.jsx)(_v27.CloseX, {}),
      "aria-label": "Close",
      onClick: _v0.onClose
    })]
  });
  _v241.ActionButton = _v0 => (0, _v1.jsx)(_v96.Button, {
    variant: "destructive",
    size: "sm",
    ..._v0
  });
  var _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0),
    _v245 = _v0.i(0);
  let _v246 = ["channel", "group", "portfolio", "showcase"];
  class _v247 {
    static getDisabledCollections(_v0, _v1) {
      let _v2 = this.getAllowedCollectionsByViewPrivacy(_v0),
        _v3 = this.getAllowedCollectionsByPrivateMode(_v1);
      return _v246.filter(_v0 => !_v2.includes(_v0) || !_v3.includes(_v0));
    }
    static getVisibleCollections(_v0, _v1, _v2) {
      let _v3 = this.getVisibleCollectionsByTeamRole(_v0),
        _v4 = this.getAllowedCollectionsByPrivateMode(_v1),
        _v5 = _v3.filter(_v0 => _v4.includes(_v0));
      return _v2 ? [..._v5, "portfolio"] : _v5;
    }
    static getVisibleCollectionsByTeamRole(_v0) {
      switch (_v0) {
        case void 0:
          return [];
        case "Owner":
        case "Admin":
          return ["channel", "group", "showcase"];
        default:
          return ["showcase"];
      }
    }
    static getAllowedCollectionsByViewPrivacy(_v0) {
      switch (_v0) {
        case "disable":
        case "unlisted":
          return ["portfolio", "showcase"];
        default:
          return ["channel", "group", "portfolio", "showcase"];
      }
    }
    static getAllowedCollectionsByPrivateMode(_v0) {
      return !0 === _v0 ? ["portfolio", "showcase"] : ["channel", "group", "portfolio", "showcase"];
    }
  }
  var _v248 = _v0.i(0);
  let _v249 = (0, _v228.default)(async () => {
      let {
        EmbedInEmailModalModule: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v250 = (0, _v228.default)(async () => {
      let {
        ExportToLMSModalModule: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v251 = ({
      onSelectPanelClick: _v0,
      onPublishToClick: _v1
    }) => {
      let _v2 = (0, _v10.useGlobalStore)(({
          clip: _v0
        }) => _v0.clipId),
        _v3 = (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig?.location) ?? "panel",
        {
          trackSharePublishButtonClicked: _v4,
          trackSharePublishDestinationClicked: _v5
        } = (0, _v15.useDistributionTracking)();
      (0, _v16.usePicoEffect)(() => {
        if (!_v2) return !1;
        _v4({
          clipId: String(_v2),
          shareSurface: _v3
        });
      }, [_v2], {
        once: !0
      });
      let _v6 = "single_video_view" === (0, _v10.useGlobalStore)(({
          util: _v0
        }) => _v0.trackingContextConfig?.pageName),
        {
          data: _v7
        } = (0, _v50.useGetVideoSharingData)(),
        {
          canEdit: _v8
        } = _v185(),
        {
          showStreamLive: _v9,
          showExportToLMS: _v10,
          showPublishToSocial: _v11,
          ownerId: _v12
        } = (0, _v248.usePublishPermissions)(),
        [_v13, _v14] = (0, _v2.useState)(""),
        _v15 = (0, _v2.useCallback)(() => _v14(""), []),
        _v16 = (0, _v77.useToast)(),
        _v17 = (0, _v2.useRef)(_v16),
        _v18 = (0, _v2.useCallback)(_v0 => {
          if (!_v7?.privacy?.view) return;
          let _v1 = `${_v0}-disabled-toast`,
            _v2 = _v130.DEFAULT_PRIVACY_OPTIONS.find(({
              privacy: _v0
            }) => _v0 === _v7?.privacy?.view)?.title,
            _v3 = {
              channel: (0, _v4.translate)({
                singular: "channels",
                dictionary: {
                  es: {
                    singular: "canales"
                  },
                  "de-DE": {
                    singular: "Kanäle"
                  },
                  "fr-FR": {
                    singular: "chaînes"
                  },
                  "ja-JP": {
                    singular: "チャンネル"
                  },
                  "ko-KR": {
                    singular: "채널"
                  },
                  "pt-BR": {
                    singular: "Canais"
                  },
                  "zh-CN": {
                    singular: "频道"
                  }
                }
              }),
              group: (0, _v4.translate)({
                singular: "groups",
                dictionary: {
                  es: {
                    singular: "Grupos"
                  },
                  "de-DE": {
                    singular: "Gruppen"
                  },
                  "fr-FR": {
                    singular: "groupes"
                  },
                  "ja-JP": {
                    singular: "グループ"
                  },
                  "ko-KR": {
                    singular: "그룹"
                  },
                  "pt-BR": {
                    singular: "Grupos"
                  },
                  "zh-CN": {
                    singular: "群组"
                  }
                }
              }),
              portfolio: null,
              showcase: null,
              publish_to_social: null,
              embed_in_email: null,
              stream_live: null,
              send_file: null,
              export_for_lms: null
            }[_v0];
          !_v17.current.isActive(_v1) && _v2 && _v3 && _v17.current({
            id: _v1,
            title: (0, _v4.translate)({
              singular: "This video can't be added to {collectionDisplayLabel} because privacy is set to {privacyDisplayLabel}",
              replacements: {
                collectionDisplayLabel: _v3,
                privacyDisplayLabel: _v2
              },
              dictionary: {
                es: {
                  singular: "Este video no puede agregarse a {collectionDisplayLabel} porque la configuración de privacidad es {privacyDisplayLabel}."
                },
                "de-DE": {
                  singular: "Dieses Video kann nicht zu {collectionDisplayLabel} hinzugefügt werden, da die Datenschutzeinstellungen auf {privacyDisplayLabel} eingestellt sind"
                },
                "fr-FR": {
                  singular: "Cette vidéo ne peut pas être ajoutée à {collectionDisplayLabel}, car la confidentialité est réglée sur {privacyDisplayLabel}"
                },
                "ja-JP": {
                  singular: "プライバシー設定が{privacyDisplayLabel}のため、この動画は{collectionDisplayLabel}に追加できません。"
                },
                "ko-KR": {
                  singular: "이 동영상의 개인정보 보호 설정이 {privacyDisplayLabel}(으)로 되어 있어 {collectionDisplayLabel}에 추가할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Este vídeo não pode ser adicionado a {collectionDisplayLabel} porque a privacidade está definida como {privacyDisplayLabel}"
                },
                "zh-CN": {
                  singular: "此视频无法添加到 {collectionDisplayLabel}，因为隐私设置为{privacyDisplayLabel}"
                }
              }
            }),
            render: _v0 => (0, _v1.jsx)(_v241, {
              ..._v0,
              children: _v8 && (0, _v1.jsx)(_v241.ActionButton, {
                "data-panel-type": "COPY_LINK_PANEL",
                onClick: _v0,
                children: (0, _v4.translate)({
                  singular: "Change privacy",
                  dictionary: {
                    es: {
                      singular: "Cambiar la privacidad"
                    },
                    "de-DE": {
                      singular: "Datenschutz ändern"
                    },
                    "fr-FR": {
                      singular: "Modifier la confidentialité"
                    },
                    "ja-JP": {
                      singular: "プライバシー設定を変更"
                    },
                    "ko-KR": {
                      singular: "프라이버시 변경"
                    },
                    "pt-BR": {
                      singular: "Alterar privacidade"
                    },
                    "zh-CN": {
                      singular: "更改隐私"
                    }
                  }
                })
              })
            })
          });
        }, [_v7?.privacy?.view, _v8, _v0]),
        _v19 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v0.currentTarget.dataset.destination,
            _v2 = _v0.currentTarget.dataset.id;
          "true" === _v0.currentTarget.dataset.disabledWarning ? _v18(_v1) : _v1 ? ("export_for_lms" !== _v1 && ("embed_in_email" !== _v1 || _v6) ? _v1?.({
            destination: _v1,
            id: _v2
          }) : _v14(_v1), _v5({
            clipId: String(_v2),
            destination: _v1,
            socialNetworkId: _v2,
            shareSurface: _v3
          })) : console.info("This icon button didn't have data-destination set up.");
        }, [_v1, _v6, _v18, _v2, _v3, _v5]),
        _v20 = (0, _v2.useMemo)(() => [{
          destination: "publish_to_social",
          id: "facebook",
          label: (0, _v4.translate)("Facebook"),
          icon: (0, _v1.jsx)(_v234.Facebook, {})
        }, {
          destination: "publish_to_social",
          id: "youtube",
          label: (0, _v4.translate)("YouTube"),
          icon: (0, _v1.jsx)(_v235.Youtube, {})
        }, {
          destination: "publish_to_social",
          id: "twitter",
          label: (0, _v4.translate)("X"),
          icon: (0, _v1.jsx)(_v237.XNegative, {})
        }, {
          destination: "publish_to_social",
          id: "linkedin",
          label: (0, _v4.translate)("LinkedIn"),
          icon: (0, _v1.jsx)(_v238.Linkedin, {})
        }, {
          destination: "publish_to_social",
          id: "shopify",
          label: (0, _v4.translate)("Shopify"),
          icon: (0, _v1.jsx)(_v239.Shopify, {})
        }, {
          destination: "publish_to_social",
          id: "tiktok",
          label: (0, _v4.translate)({
            singular: "TikTok for Business",
            dictionary: {
              "pt-BR": {
                singular: "TikTok para empresas"
              }
            }
          }),
          icon: (0, _v1.jsx)(_v236.Tiktok, {})
        }], []),
        {
          addToCollections: _v21,
          isLoading: _v22
        } = (() => {
          let _v0 = (0, _v6.useViewer)(),
            {
              data: _v1
            } = (0, _v50.useGetVideoSharingData)(),
            {
              privateModeOn: _v2
            } = function () {
              let {
                videoOwnerCapabilities: {
                  hasPrivateModeOff: _v0
                },
                isVideoOwnerCapabilitiesReady: _v1
              } = (0, _v39.useGetVideoOwnerCapabilities)();
              return {
                privateModeOn: (0, _v2.useMemo)(() => _v1 ? !_v0 : void 0, [_v1, _v0])
              };
            }(),
            _v3 = (0, _v2.useMemo)(() => !_v0 || !_v1 || void 0 === _v2, [_v0, _v1, _v2]);
          return {
            addToCollections: (0, _v2.useMemo)(() => {
              if (!_v0 || !_v1 || void 0 === _v2) return [];
              let _v0 = _v0?.user?.uri === _v1?.user?.uri ? "Owner" : _v0?.teamUser?.plainTextPermissionLevel,
                _v1 = _v1?.user?.metadata?.connections.portfolios?.options,
                _v2 = !!(_v1 && _v1.length > 0),
                _v3 = _v247.getVisibleCollections(_v0, _v2, _v2),
                _v4 = _v1?.privacy?.view,
                _v5 = _v247.getDisabledCollections(_v4, _v2);
              return [{
                destination: "showcase",
                label: (0, _v4.translate)({
                  singular: "Showcase",
                  dictionary: {
                    es: {
                      singular: "Presentaciones"
                    },
                    "de-DE": {
                      singular: "Präsentation"
                    },
                    "fr-FR": {
                      singular: "Présentation"
                    },
                    "ja-JP": {
                      singular: "作品集"
                    },
                    "ko-KR": {
                      singular: "쇼케이스"
                    },
                    "pt-BR": {
                      singular: "Vitrine"
                    },
                    "zh-CN": {
                      singular: "橱窗"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v242._3GridLeftLayout, {})
              }, {
                destination: "channel",
                label: (0, _v4.translate)({
                  singular: "Channel",
                  dictionary: {
                    es: {
                      singular: "Canal"
                    },
                    "de-DE": {
                      singular: "Kanal"
                    },
                    "fr-FR": {
                      singular: "Chaîne"
                    },
                    "ja-JP": {
                      singular: "チャンネル"
                    },
                    "ko-KR": {
                      singular: "채널"
                    },
                    "pt-BR": {
                      singular: "Canal"
                    },
                    "zh-CN": {
                      singular: "频道"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v243.TvRetro, {})
              }, {
                destination: "group",
                label: (0, _v4.translate)({
                  singular: "Group",
                  dictionary: {
                    es: {
                      singular: "Grupo"
                    },
                    "de-DE": {
                      singular: "Gruppe"
                    },
                    "fr-FR": {
                      singular: "Groupe"
                    },
                    "ja-JP": {
                      singular: "グループ"
                    },
                    "ko-KR": {
                      singular: "그룹"
                    },
                    "pt-BR": {
                      singular: "Grupo"
                    },
                    "zh-CN": {
                      singular: "群组"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v244.Groups, {})
              }, {
                destination: "portfolio",
                label: (0, _v4.translate)({
                  singular: "Portfolio",
                  dictionary: {
                    es: {
                      singular: "portafolio"
                    },
                    "ja-JP": {
                      singular: "ポートフォリオ"
                    },
                    "ko-KR": {
                      singular: "포트폴리오"
                    },
                    "pt-BR": {
                      singular: "Portfólio"
                    },
                    "zh-CN": {
                      singular: "作品集"
                    }
                  }
                }),
                icon: (0, _v1.jsx)(_v245.BrowserWindow, {})
              }].reduce((_v0, _v1) => {
                if (!_v3.includes(_v1.destination)) return _v0;
                let _v2 = _v5.includes(_v1.destination);
                return _v0.push({
                  ..._v1,
                  isDisabled: _v2
                }), _v0;
              }, []);
            }, [_v0, _v1, _v2]),
            isLoading: _v3
          };
        })();
      return !_v7 || _v22 ? null : (0, _v1.jsxs)(_v40.VStack, {
        gap: (0, _v13.rem)(24),
        alignItems: "flex-start",
        children: [(0, _v1.jsxs)(_v229.ButtonGroup, {
          "aria-labelledby": "publish-button-group",
          flexWrap: "wrap",
          columnGap: (0, _v13.rem)(10),
          rowGap: (0, _v13.rem)(24),
          sx: {
            "> *:not(style)~*:not(style)": {
              margin: 0
            }
          },
          children: [(0, _v1.jsx)(_v231.VisuallyHidden, {
            id: "publish-button-group",
            children: (0, _v4.translate)({
              singular: "Publishing actions on Vimeo",
              dictionary: {
                es: {
                  singular: "Acciones de publicación en Vimeo"
                },
                "de-DE": {
                  singular: "Veröffentlichung von Aktionen auf Vimeo"
                },
                "fr-FR": {
                  singular: "Actions de publication sur Vimeo"
                },
                "ja-JP": {
                  singular: "Vimeoでの公開アクション"
                },
                "ko-KR": {
                  singular: "Vimeo에서 작업 게시"
                },
                "pt-BR": {
                  singular: "Ações de publicação no Vimeo"
                },
                "zh-CN": {
                  singular: "在 Vimeo 上发布操作"
                }
              }
            })
          }), _v21.map(_v0 => (0, _v1.jsx)(_v41, {
            "data-destination": _v0.destination,
            "data-disabled-warning": _v0.isDisabled,
            "data-disabled-label": _v0.label,
            label: _v0.label,
            icon: _v0.icon,
            onClick: _v19
          }, _v0.destination)), (0, _v1.jsx)(_v41, {
            label: (0, _v4.translate)({
              singular: "Send file",
              dictionary: {
                es: {
                  singular: "Enviar archivo"
                },
                "de-DE": {
                  singular: "Datei senden"
                },
                "fr-FR": {
                  singular: "Envoyer le fichier"
                },
                "ja-JP": {
                  singular: "ファイルを送信"
                },
                "ko-KR": {
                  singular: "파일 보내기"
                },
                "pt-BR": {
                  singular: "Enviar arquivo"
                },
                "zh-CN": {
                  singular: "发送文件"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v124.FileUpload, {}),
            onClick: () => {
              window.open(_v7?.fileTransfer?.link, "_blank"), _v5({
                clipId: String(_v2),
                destination: "send_file",
                shareSurface: _v3
              });
            }
          }, "publish-panel-icon-button-file"), (0, _v1.jsxs)(_v230.Hide, {
            below: "sm",
            children: [(0, _v1.jsx)(_v41, {
              "data-destination": "embed_in_email",
              label: (0, _v4.translate)({
                singular: "Email",
                dictionary: {
                  es: {
                    singular: "Correo electrónico"
                  },
                  "de-DE": {
                    singular: "E-Mail-Adresse"
                  },
                  "fr-FR": {
                    singular: "E-mail"
                  },
                  "ja-JP": {
                    singular: "E メール"
                  },
                  "ko-KR": {
                    singular: "이메일"
                  },
                  "pt-BR": {
                    singular: "E-mail"
                  },
                  "zh-CN": {
                    singular: "电子邮件"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v232, {}),
              onClick: _v19
            }, "publish-panel-icon-button-email"), "embed_in_email" === _v13 && (0, _v1.jsx)(_v249, {
              onClose: _v15,
              onSelectPanelClick: _v0
            })]
          }), _v9 && (0, _v1.jsx)(_v41, {
            label: (0, _v4.translate)({
              singular: "Stream live",
              dictionary: {
                es: {
                  singular: "Transmitir en vivo"
                },
                "de-DE": {
                  singular: "Livestreamen"
                },
                "fr-FR": {
                  singular: "Diffuser en live"
                },
                "ja-JP": {
                  singular: "ライブストリーム配信"
                },
                "ko-KR": {
                  singular: "라이브 스트리밍"
                },
                "pt-BR": {
                  singular: "Transmissão ao vivo"
                },
                "zh-CN": {
                  singular: "现场直播"
                }
              }
            }),
            icon: (0, _v1.jsx)(_v233.CameraOn, {}),
            onClick: () => {
              window.open(`/live/stream_video/${_v2}?owner_id=${_v12}`, "_blank"), _v5({
                clipId: String(_v2),
                destination: "stream_live",
                shareSurface: _v3
              });
            }
          }, "publish-panel-icon-button-stream"), _v10 && (0, _v1.jsxs)(_v230.Hide, {
            below: "sm",
            children: [(0, _v1.jsx)(_v41, {
              "data-destination": "export_for_lms",
              label: (0, _v4.translate)({
                singular: "Export for LMS",
                dictionary: {
                  es: {
                    singular: "Exportar para LMS"
                  },
                  "de-DE": {
                    singular: "Für das LMS exportieren"
                  },
                  "fr-FR": {
                    singular: "Exporter pour LMS"
                  },
                  "ja-JP": {
                    singular: "LMS向けにエクスポート"
                  },
                  "ko-KR": {
                    singular: "LMS로 내보내기"
                  },
                  "pt-BR": {
                    singular: "Exportar para LMS"
                  },
                  "zh-CN": {
                    singular: "导出到 LMS"
                  }
                }
              }),
              icon: (0, _v1.jsx)(_v35.Export, {}),
              onClick: _v19
            }, "publish-panel-icon-button-lms"), "export_for_lms" === _v13 && (0, _v1.jsx)(_v250, {
              onClose: _v15
            })]
          })]
        }), _v6 && _v11 && (0, _v1.jsxs)(_v230.Hide, {
          below: "sm",
          children: [(0, _v1.jsx)(_v12.Divider, {
            borderColor: "stroke"
          }), (0, _v1.jsxs)(_v229.ButtonGroup, {
            "aria-labelledby": "social-and-web-button-group",
            flexWrap: "wrap",
            columnGap: (0, _v13.rem)(10),
            rowGap: (0, _v13.rem)(24),
            sx: {
              "> *:not(style)~*:not(style)": {
                margin: 0
              }
            },
            children: [(0, _v1.jsx)(_v231.VisuallyHidden, {
              id: "social-and-web-button-group",
              children: (0, _v4.translate)({
                singular: "Social and web distribution",
                dictionary: {
                  es: {
                    singular: "Distribución en redes sociales y web"
                  },
                  "de-DE": {
                    singular: "Verteilung im Web und Social Media"
                  },
                  "fr-FR": {
                    singular: "Distribution sur les réseaux sociaux et le Web"
                  },
                  "ja-JP": {
                    singular: "ソーシャルメディアおよびウェブでの配信"
                  },
                  "ko-KR": {
                    singular: "소셜 및 웹 배포"
                  },
                  "pt-BR": {
                    singular: "Distribuição em redes sociais e na web"
                  },
                  "zh-CN": {
                    singular: "社交媒体和网络分发"
                  }
                }
              })
            }), _v20.map(_v0 => (0, _v1.jsx)(_v41, {
              "data-destination": _v0.destination,
              "data-id": _v0.id,
              label: _v0.label,
              icon: _v0.icon,
              onClick: _v19
            }, `publish-panel-icon-button-${_v0.id}`))]
          })]
        })]
      });
    };
  var _v252 = _v0.i(0);
  let _v253 = ({
    videoName: _v0
  }) => {
    let _v1 = (0, _v10.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      _v2 = (0, _v10.useGlobalStore)(({
        util: _v0
      }) => _v0.trackingContextConfig?.location) ?? "panel",
      {
        reviewLinks: _v3,
        isLoading: _v4
      } = (0, _v17.useGetReviewLinks)(Number(_v1), "clip"),
      {
        trackReviewLinksDisplayed: _v5,
        trackShareReviewButtonClicked: _v6
      } = (0, _v15.useDistributionTracking)();
    (0, _v16.usePicoEffect)(() => {
      if (!_v1 || _v4) return !1;
      _v5({
        clipId: String(_v1),
        reviewLinksCount: _v3.length
      });
    }, [_v4, _v3.length, _v1], {
      once: !0
    });
    let [_v7, _v8] = (0, _v2.useState)(),
      [_v9, _v10] = (0, _v2.useState)(),
      _v11 = (0, _v2.useRef)(void 0),
      _v12 = (0, _v2.useCallback)(_v0 => {
        _v11.current = _v0, _v10(_v0);
      }, []),
      {
        isUpdatingDefault: _v13,
        showAutoReviewLinkModal: _v14,
        handleAutoReviewLinkView: _v15,
        enableAutoReviewLink: _v16
      } = (0, _v20.useIsFirstReviewLink)(),
      {
        isOpen: _v17,
        onOpen: _v18,
        onClose: _v19
      } = (0, _v14.useDisclosure)(),
      {
        isOpen: _v20,
        onOpen: _v21,
        onClose: _v22
      } = (0, _v14.useDisclosure)(),
      _v23 = async () => {
        await _v16(), _v22();
      },
      _v24 = () => {
        _v8(void 0), _v10(void 0), _v19();
      },
      _v25 = (0, _v2.useCallback)(() => {
        let _v0 = _v11.current;
        _v11.current = void 0, "edit" !== _v0 && _v1 && _v6({
          clipId: String(_v1),
          shareReviewType: "create",
          shareSurface: _v2
        }), _v18();
      }, [_v1, _v2, _v6, _v18]);
    return (0, _v1.jsxs)(_v45, {
      children: [(0, _v1.jsx)(_v252.ReviewLinks, {
        resourceId: Number(_v1),
        resourceType: "clip",
        setCreateReviewLinkScreen: _v25,
        setReviewLinkData: _v8,
        setReviewLinkModalMode: _v12,
        hideFooter: !0
      }), (0, _v1.jsx)(_v19.CreateReviewLinkModal, {
        resourceId: Number(_v1),
        resourceType: "clip",
        resourceName: _v0,
        onCancel: _v24,
        onSubmit: () => {
          _v14 && (_v15(), _v21()), _v24();
        },
        onClose: _v24,
        isOpen: _v17,
        reviewLinkData: _v7,
        reviewLinkModalMode: _v9
      }), (0, _v1.jsx)(_v18.CreateAutoReviewLinksModal, {
        onConfirm: _v23,
        onClose: _v22,
        isLoading: _v13,
        isOpen: _v20
      })]
    });
  };
  _v0.s(["ReviewLinksPanel", 0, _v253], 0);
  let _v254 = ({
      layoutType: _v0,
      panelType: _v1,
      playerApi: _v2,
      videoName: _v3,
      onSelectPanelClick: _v4,
      onClose: _v5,
      onPrivacyChange: _v6,
      onPublishToClick: _v7,
      onUpsellClick: _v8,
      onCopyLink: _v9,
      onCopyEmbedCode: _v10,
      onEmbedChange: _v11,
      showInlineTransferFile: _v12,
      transferInlineLinkSurface: _v13,
      reviewLinkUri: _v14,
      canCreateReviewLink: _v15,
      isReviewLinkLoading: _v16,
      expiryPickerEntryPoint: _v17
    }) => {
      switch (_v1) {
        case "EMBED_PANEL":
          return (0, _v1.jsx)(_v219, {
            layoutType: _v0,
            onPrivacyChange: _v6,
            onCopyEmbedCode: _v10,
            onEmbedChange: _v11
          });
        case "INVITE_PANEL":
          return (0, _v1.jsx)(_v227, {
            onClose: _v5
          });
        case "PUBLISH_PANEL":
          return (0, _v1.jsx)(_v251, {
            onSelectPanelClick: _v4,
            onPublishToClick: _v7
          });
        case "CUSTOMIZE_LINK_PANEL":
          return (0, _v1.jsx)(_v203, {});
        case "REVIEW_LINKS_PANEL":
          return (0, _v1.jsx)(_v253, {
            videoName: _v3
          });
        case "CHINA_ACCESS_PANEL":
          return (0, _v1.jsx)(_v123, {
            layoutType: _v0
          });
        default:
          return (0, _v1.jsx)(_v194, {
            layoutType: _v0,
            playerApi: _v2,
            onSelectPanelClick: _v4,
            onPrivacyChange: _v6,
            onUpsellClick: _v8,
            onCopyLink: _v9,
            onEmbedChange: _v11,
            showInlineTransferFile: _v12,
            transferInlineLinkSurface: _v13,
            reviewLinkUri: _v14,
            canCreateReviewLink: _v15,
            isReviewLinkLoading: _v16,
            expiryPickerEntryPoint: _v17
          });
      }
    },
    _v255 = ({
      clipId: _v0,
      clipHash: _v1,
      trackingContextConfig: _v2 = {
        pageName: "single_video_view",
        location: "panel"
      },
      layoutType: _v3 = "panel",
      isOpen: _v4 = !0,
      playerApi: _v5,
      defaultPanel: _v6,
      skipDefaultPanelTracking: _v7 = !1,
      onPublishToClick: _v8,
      onPrivacyChange: _v9,
      onUpsellClick: _v10,
      onClose: _v11,
      onCopyLink: _v12,
      onCopyEmbedCode: _v13,
      revalidateKey: _v14,
      onPanelChange: _v15,
      onCreateReviewLinkSuccess: _v16,
      editReviewLinkUri: _v17,
      onEmbedChange: _v18,
      showInlineTransferFile: _v19,
      transferInlineLinkSurface: _v20,
      expiryPickerEntryPoint: _v21
    }) => {
      var _v22;
      _v51({
        clipId: _v0,
        clipHash: _v1,
        trackingContextConfig: _v2
      });
      let {
          data: _v23,
          isLoading: _v24,
          mutate: _v25
        } = (0, _v50.useGetVideoSharingData)(),
        {
          isVideoOwnerCapabilitiesReady: _v26
        } = (0, _v39.useGetVideoOwnerCapabilities)(),
        {
          isInitialLoading: _v27
        } = _v59(),
        _v28 = _v24 || !_v26 || _v27,
        {
          canCreateReviewLinks: _v29,
          reviewLinks: _v30,
          hasReviewLinks: _v31,
          isLoading: _v32
        } = (0, _v17.useGetReviewLinks)(Number(_v0), "clip"),
        _v33 = _v17 ? _v30.find(_v0 => _v0.uri === _v17) : void 0,
        _v34 = (0, _v21.useCanUpSell)(),
        _v35 = (0, _v2.useMemo)(() => (0, _v22.selectReviewLinkUriToCopy)(_v30, _v34), [_v30, _v34]),
        {
          isUpdatingDefault: _v36,
          showAutoReviewLinkModal: _v37,
          handleAutoReviewLinkView: _v38,
          enableAutoReviewLink: _v39
        } = (0, _v20.useIsFirstReviewLink)();
      (0, _v2.useEffect)(() => {
        _v14 && _v25();
      }, [_v14, _v25]);
      let {
        trackShareEmbedButtonClicked: _v40,
        trackShareReviewButtonClicked: _v41
      } = (0, _v15.useDistributionTracking)();
      (0, _v16.usePicoEffect)(() => {
        _v7 || ("EMBED_PANEL" === _v6 && _v40({
          clipId: _v0,
          shareSurface: _v3
        }), "CREATE_REVIEW_LINK_MODAL" === _v6 && _v41({
          clipId: _v0,
          shareReviewType: "create",
          shareSurface: _v3
        }), "REVIEW_LINKS_PANEL" === _v6 && _v41({
          clipId: _v0,
          shareReviewType: "manage",
          shareSurface: _v3
        }));
      }, [], {
        once: !0
      });
      let _v42 = (_v22 = "modal" === _v3 ? _v23?.name : "", (0, _v2.useMemo)(() => ({
          COPY_LINK_PANEL: _v22 ? (0, _v4.translate)({
            singular: "Share “{TITLE}”",
            replacements: {
              TITLE: _v22
            },
            dictionary: {
              es: {
                singular: "Compartir “{TITLE}”"
              },
              "de-DE": {
                singular: "„{TITLE}“ teilen"
              },
              "fr-FR": {
                singular: "Partager « {TITLE} »"
              },
              "ja-JP": {
                singular: "「{TITLE}」を共有"
              },
              "ko-KR": {
                singular: '"{TITLE}" 공유'
              },
              "pt-BR": {
                singular: 'Compartilhar "{TITLE}"'
              },
              "zh-CN": {
                singular: "分享“{TITLE}”"
              }
            }
          }) : (0, _v4.translate)({
            singular: "Share",
            dictionary: {
              es: {
                singular: "Compartir"
              },
              "de-DE": {
                singular: "Teilen"
              },
              "fr-FR": {
                singular: "Partager"
              },
              "ja-JP": {
                singular: "共有"
              },
              "ko-KR": {
                singular: "공유"
              },
              "pt-BR": {
                singular: "Compartilhar"
              },
              "zh-CN": {
                singular: "分享"
              }
            }
          }),
          EMBED_PANEL: (0, _v4.translate)({
            singular: "Embed",
            dictionary: {
              es: {
                singular: "Insertar"
              },
              "de-DE": {
                singular: "Einbetten"
              },
              "fr-FR": {
                singular: "Intégration"
              },
              "ja-JP": {
                singular: "埋め込み"
              },
              "ko-KR": {
                singular: "임베드"
              },
              "pt-BR": {
                singular: "Incorporação"
              },
              "zh-CN": {
                singular: "嵌入"
              }
            }
          }),
          INVITE_PANEL: (0, _v4.translate)({
            singular: "People with access",
            dictionary: {
              es: {
                singular: "Personas con acceso"
              },
              "de-DE": {
                singular: "Personen mit Zugriff"
              },
              "fr-FR": {
                singular: "Personnes ayant accès"
              },
              "ja-JP": {
                singular: "アクセスできる人"
              },
              "ko-KR": {
                singular: "접근 권한이 있는 사람"
              },
              "pt-BR": {
                singular: "Pessoas com acesso"
              },
              "zh-CN": {
                singular: "具有访问权限的人"
              }
            }
          }),
          PUBLISH_PANEL: (0, _v4.translate)({
            singular: "Publish",
            dictionary: {
              es: {
                singular: "Publicar"
              },
              "de-DE": {
                singular: "Veröffentlichen"
              },
              "fr-FR": {
                singular: "Publier"
              },
              "ja-JP": {
                singular: "公開する"
              },
              "ko-KR": {
                singular: "게시"
              },
              "pt-BR": {
                singular: "Publicar"
              },
              "zh-CN": {
                singular: "发布"
              }
            }
          }),
          SHARING_SETTINGS_PANEL: (0, _v4.translate)({
            singular: "Sharing settings",
            dictionary: {
              es: {
                singular: "Configuración de la función compartir"
              },
              "de-DE": {
                singular: "Teilungseinstellungen"
              },
              "fr-FR": {
                singular: "Paramètres de partage"
              },
              "ja-JP": {
                singular: "共有設定"
              },
              "ko-KR": {
                singular: "공유 모드 설정"
              },
              "pt-BR": {
                singular: "Configurações de compartilhamento"
              },
              "zh-CN": {
                singular: "共享设置"
              }
            }
          }),
          CUSTOMIZE_LINK_PANEL: (0, _v4.translate)({
            singular: "Edit link",
            dictionary: {
              es: {
                singular: "Editar enlace"
              },
              "de-DE": {
                singular: "Link bearbeiten"
              },
              "fr-FR": {
                singular: "Modifier le lien"
              },
              "ja-JP": {
                singular: "リンクを編集"
              },
              "ko-KR": {
                singular: "링크 편집"
              },
              "pt-BR": {
                singular: "Editar link"
              },
              "zh-CN": {
                singular: "编辑链接"
              }
            }
          }),
          REVIEW_LINKS_PANEL: (0, _v4.translate)({
            singular: "Review links",
            dictionary: {
              es: {
                singular: "Enlaces de revisión"
              },
              "de-DE": {
                singular: "Review-Links"
              },
              "fr-FR": {
                singular: "Liens de révision"
              },
              "ja-JP": {
                singular: "レビューリンク"
              },
              "ko-KR": {
                singular: "리뷰 링크"
              },
              "pt-BR": {
                singular: "Links de revisão"
              },
              "zh-CN": {
                singular: "评论链接"
              }
            }
          }),
          CREATE_REVIEW_LINK_MODAL: "",
          CHINA_ACCESS_PANEL: (0, _v4.translate)({
            singular: "China access",
            dictionary: {
              es: {
                singular: "Acceso a China"
              },
              "de-DE": {
                singular: "China-Zugang"
              },
              "fr-FR": {
                singular: "Accès à partir de la Chine"
              },
              "ja-JP": {
                singular: "中国でのアクセス"
              },
              "ko-KR": {
                singular: "중국 접근"
              },
              "pt-BR": {
                singular: "Acesso a partir da China"
              },
              "zh-CN": {
                singular: "中国访问权限"
              }
            }
          })
        }), [_v22])),
        [_v43, _v44] = (0, _v2.useState)(_v6 ?? "COPY_LINK_PANEL"),
        [_v45, _v46] = (0, _v2.useState)("create"),
        {
          isOpen: _v47,
          onOpen: _v48,
          onClose: _v49
        } = (0, _v14.useDisclosure)(),
        {
          isOpen: _v50,
          onOpen: _v51,
          onClose: _v52
        } = (0, _v14.useDisclosure)(),
        _v53 = (0, _v2.useRef)(!1),
        _v54 = (0, _v2.useRef)(!1);
      (0, _v2.useEffect)(() => {
        let _v0 = "CREATE_REVIEW_LINK_MODAL" === _v6 ? "REVIEW_LINKS_PANEL" : _v6;
        _v43 !== _v0 && _v44(_v0 ?? "COPY_LINK_PANEL"), "CREATE_REVIEW_LINK_MODAL" === _v6 && (_v17 ? (_v46("edit"), _v33 ? _v48() : _v53.current = !0) : (_v46("create"), _v48()));
      }, [_v6]), (0, _v2.useEffect)(() => {
        _v33 && _v53.current && (_v53.current = !1, _v48());
      }, [_v33, _v48]), (0, _v2.useEffect)(() => {
        "CHINA_ACCESS_PANEL" != _v43 && _v43 != _v6 && _v15?.(_v43);
      }, [_v43]);
      let _v55 = (0, _v2.useCallback)(() => {
          _v53.current = !1, _v54.current = !1, _v49();
        }, [_v49]),
        _v56 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v0.currentTarget.dataset.panelType;
          if (_v1) {
            if ("CREATE_REVIEW_LINK_MODAL" === _v1) {
              _v53.current = !1, "inline-review-link" === _v0.currentTarget.dataset.source && (_v54.current = !0), _v46("create"), _v41({
                clipId: _v0,
                shareReviewType: "create",
                shareSurface: _v3
              }), _v48();
              return;
            }
            "EMBED_PANEL" === _v1 && _v40({
              clipId: _v0,
              shareSurface: _v3
            }), "REVIEW_LINKS_PANEL" === _v1 && _v41({
              clipId: _v0,
              shareReviewType: "manage",
              shareSurface: _v3
            }), _v44(_v1);
          }
        }, [_v48, _v46, _v44, _v0, _v3, _v40, _v41]),
        _v57 = (0, _v2.useCallback)(() => {
          _v44("COPY_LINK_PANEL"), _v11?.();
        }, [_v44, _v11]),
        _v58 = (0, _v2.useCallback)(() => {
          _v44("COPY_LINK_PANEL");
        }, [_v44]),
        _v59 = async () => {
          await _v39(), _v52();
        },
        _v60 = "COPY_LINK_PANEL" !== _v43,
        _v61 = "REVIEW_LINKS_PANEL" === _v43,
        _v62 = _v71(_v43),
        _v63 = "modal" === _v3 ? _v68 : _v67;
      return _v28 && "modal" === _v3 ? (0, _v1.jsxs)(_v63, {
        isOpen: _v4,
        onClose: _v57,
        children: [(0, _v1.jsx)(_v63.Header, {
          children: (0, _v1.jsx)(_v29, {
            onCloseButtonClick: _v57,
            children: _v42[_v43]
          })
        }), (0, _v1.jsx)(_v63.Body, {
          children: (0, _v1.jsx)(_v32, {
            "data-testid": "loading-spinner"
          })
        })]
      }) : _v28 ? (0, _v1.jsx)(_v32, {
        "data-testid": "loading-spinner"
      }) : (0, _v1.jsxs)(_v63, {
        isOpen: _v4,
        onClose: _v57,
        children: [(0, _v1.jsx)(_v63.Header, {
          hidden: _v62,
          children: (0, _v1.jsx)(_v29, {
            showBackButton: _v60,
            showPlusButton: _v61,
            onBackButtonClick: _v58,
            disablePlusButton: !_v29,
            onCloseButtonClick: _v57,
            onPlusButtonClick: () => {
              _v53.current = !1, _v46("create"), _v41({
                clipId: _v0,
                shareReviewType: "create",
                shareSurface: _v3
              }), _v48();
            },
            children: _v42[_v43]
          })
        }), (0, _v1.jsx)(_v63.Body, {
          overflowY: "auto",
          h: "calc(100vh - 144px)",
          children: (0, _v1.jsxs)(_v45, {
            children: [(0, _v1.jsx)(_v254, {
              layoutType: _v3,
              panelType: _v43,
              playerApi: _v5,
              videoName: _v23?.name,
              onSelectPanelClick: _v56,
              onClose: _v57,
              onPrivacyChange: _v9,
              onPublishToClick: _v8,
              onUpsellClick: _v10,
              onCopyLink: _v12,
              onCopyEmbedCode: _v13,
              onEmbedChange: _v18,
              showInlineTransferFile: _v19,
              transferInlineLinkSurface: _v20,
              reviewLinkUri: _v35,
              canCreateReviewLink: _v29,
              isReviewLinkLoading: _v32,
              expiryPickerEntryPoint: _v21
            }), "COPY_LINK_PANEL" === _v43 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v12.Divider, {
                borderColor: "stroke"
              }), (0, _v1.jsx)(_v42, {
                onClick: _v56,
                hasReviewLinks: _v31
              })]
            }), "panel" === _v3 && "COPY_LINK_PANEL" === _v43 && (0, _v1.jsx)(_v11.Box, {
              paddingX: (0, _v13.rem)(16),
              paddingY: (0, _v13.rem)(16),
              children: (0, _v1.jsx)(_v49, {})
            })]
          })
        }), (0, _v1.jsx)(_v19.CreateReviewLinkModal, {
          resourceId: Number(_v0),
          resourceType: "clip",
          resourceName: _v23?.name,
          onCancel: _v55,
          onSubmit: () => {
            "REVIEW_LINKS_PANEL" !== _v43 && _v44("REVIEW_LINKS_PANEL"), _v16?.(), _v55(), _v37 && (_v38(), _v51());
          },
          onClose: _v55,
          isOpen: _v47,
          reviewLinkData: "edit" === _v45 ? _v33 : void 0,
          reviewLinkModalMode: _v45,
          inlineShareFlow: _v54.current && "create" === _v45
        }), (0, _v1.jsx)(_v18.CreateAutoReviewLinksModal, {
          onConfirm: _v59,
          onClose: _v52,
          isLoading: _v36,
          isOpen: _v50
        })]
      });
    };
  _v0.s(["VideoShareViewContainer", 0, ({
    onUpsellClick: _v0,
    ..._v1
  }) => {
    let {
        maximizeVideoFileTransferAdoption: _v2
      } = (0, _v3.useAdoptionSettings)(),
      [_v3, _v4] = (0, _v2.useState)({
        upsellType: "unlisted privacy",
        isOpen: !1
      }),
      _v5 = (0, _v2.useCallback)(_v0 => {
        _v0?.(_v0), "string" == typeof _v0 && _v4({
          isOpen: !0,
          upsellType: _v0
        });
      }, [_v0]),
      _v6 = (0, _v2.useCallback)(() => {
        _v4(_v0 => ({
          ..._v0,
          isOpen: !1
        }));
      }, []);
    return (0, _v1.jsxs)(_v10.VideoShareViewStoreProvider, {
      children: [(0, _v1.jsx)(_v255, {
        ..._v1,
        onUpsellClick: _v5,
        showInlineTransferFile: _v2
      }), (0, _v1.jsx)(_v9, {
        ..._v3,
        onClose: _v6
      })]
    });
  }], 0);
}