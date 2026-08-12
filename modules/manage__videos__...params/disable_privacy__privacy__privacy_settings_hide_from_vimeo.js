{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
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
    _v6 = {
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
    };
  _v0.s(["UpsellModalModule", 0, ({
    upsellType: _v0,
    isOpen: _v1,
    onClose: _v2
  }) => {
    let _v3 = (0, _v4.useViewer)(),
      _v4 = {
        hidePlansSummary: !0,
        hasFreeFeaturedBanner: !0,
        headerText: "",
        subHeaderText: "",
        planOverrides: {
          starter: {
            featuresList: [(0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            featuresList: [(0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            featuresList: [(0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            featuresList: [(0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
            }), (0, _v2.translate)({
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
      children: _v1 && (0, _v1.jsx)(_v3.default, {
        apiUrl: _v3?.apiUrl,
        userConfig: {
          jwt: _v3?.jwt,
          userId: _v3?.user?.id
        },
        templateType: "default",
        onClose: _v2,
        modalConfig: _v4,
        tracking: {
          params: _v5[_v0],
          paywallTracking: _v6[_v0]
        }
      })
    });
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["LoadingSpinner", 0, _v0 => (0, _v1.jsx)(_v7.Center, {
    h: "100%",
    flex: "1",
    ..._v0,
    children: (0, _v1.jsx)(_v8.Spinner, {})
  })], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  let _v17 = _v0 => (0, _v1.jsx)(_v16.Icon, {
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
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = ({
    label: _v0,
    isDisabled: _v1,
    ..._v2
  }) => (0, _v1.jsxs)(_v22.VStack, {
    gap: "2",
    width: (0, _v11.rem)(72),
    children: [(0, _v1.jsx)(_v20.IconButton, {
      "aria-label": _v0,
      variant: "secondary",
      isRound: !0,
      isDisabled: _v1,
      width: (0, _v11.rem)(62),
      height: `${(0, _v11.rem)(62)} !important`,
      ..._v2
    }), (0, _v1.jsx)(_v21.Text, {
      variant: "body-sm",
      textAlign: "center",
      opacity: _v1 ? .5 : 1,
      children: _v0
    })]
  });
  _v0.s(["RoundIconButton", 0, _v23], 0), _v0.s(["ButtonsNavigation", 0, ({
    onClick: _v0,
    hideReviewLinkButtons: _v1 = !1,
    hasReviewLinks: _v2 = !1
  }) => {
    let _v3 = (0, _v19.useGlobalStore)(({
        util: _v0
      }) => _v0.isInputtingPassword),
      {
        videoOwnerCapabilities: {
          hasMultipleReviewLinks: _v4,
          hasProhibitMultipleReviewLinks: _v5,
          regionalDeliveryPublishContentToChina: _v6
        },
        isVideoOwnerCapabilitiesReady: _v7
      } = (0, _v18.useGetVideoOwnerCapabilities)(),
      _v8 = _v7 && _v4 && !_v5,
      _v9 = (0, _v9.useMemo)(() => {
        var _v0;
        return _v0 = {
          showCreateReview: _v8 && !_v2 && !_v1,
          showManageReview: _v8 && _v2 && !_v1,
          showChinaAccess: _v6
        }, [{
          panelType: "EMBED_PANEL",
          label: (0, _v2.translate)({
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
          icon: (0, _v1.jsx)(_v12.Code, {})
        }, {
          panelType: "INVITE_PANEL",
          label: _v0?.isTab ? (0, _v2.translate)({
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
          }) : (0, _v2.translate)({
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
          icon: (0, _v1.jsx)(_v13.PersonUserAdd, {})
        }, {
          panelType: "CREATE_REVIEW_LINK_MODAL",
          label: (0, _v2.translate)({
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
          icon: (0, _v1.jsx)(_v15.LinkAdd, {}),
          hide: !_v0?.showCreateReview
        }, {
          panelType: "REVIEW_LINKS_PANEL",
          label: (0, _v2.translate)({
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
          icon: (0, _v1.jsx)(_v15.LinkAdd, {}),
          hide: !_v0?.showManageReview
        }, {
          panelType: "PUBLISH_PANEL",
          label: (0, _v2.translate)({
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
          icon: (0, _v1.jsx)(_v14.Export, {})
        }, {
          panelType: "CHINA_ACCESS_PANEL",
          label: (0, _v2.translate)({
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
          icon: (0, _v1.jsx)(_v17, {}),
          hide: !_v0?.showChinaAccess
        }].filter(_v0 => !_v0.hide);
      }, [_v8, _v6, _v2, _v1]);
    return (0, _v1.jsx)(_v7.Center, {
      children: (0, _v1.jsx)(_v10.Box, {
        display: "grid",
        minWidth: "0",
        width: `calc(100% + ${(0, _v11.rem)(24)})`,
        mx: `${(0, _v11.rem)(-12)}`,
        gridTemplateColumns: `
          repeat(
            auto-fit,
            minmax(${(0, _v11.rem)(84)}, ${_v9.length > 3 ? (0, _v11.rem)(84) : (0, _v11.rem)(96)}
          ))`,
        justifyItems: "center",
        justifyContent: "center",
        rowGap: (0, _v11.rem)(24),
        children: _v9.map(_v0 => (0, _v1.jsx)(_v23, {
          label: _v0.label,
          icon: _v0.icon,
          isDisabled: _v3,
          "data-panel-type": _v0.panelType,
          onClick: _v0
        }, _v0.panelType))
      })
    });
  }], 0), _v0.s(["useCreatePanelTitles", 0, function (_v0) {
    return (0, _v9.useMemo)(() => ({
      COPY_LINK_PANEL: _v0 ? (0, _v2.translate)({
        singular: "Share “{TITLE}”",
        replacements: {
          TITLE: _v0
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
      }) : (0, _v2.translate)({
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
      EMBED_PANEL: (0, _v2.translate)({
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
      INVITE_PANEL: (0, _v2.translate)({
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
      PUBLISH_PANEL: (0, _v2.translate)({
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
      SHARING_SETTINGS_PANEL: (0, _v2.translate)({
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
      CUSTOMIZE_LINK_PANEL: (0, _v2.translate)({
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
      REVIEW_LINKS_PANEL: (0, _v2.translate)({
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
      CHINA_ACCESS_PANEL: (0, _v2.translate)({
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
    }), [_v0]);
  }], 0);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  let _v30 = ["url", "expiresOn", "createdOn", "uri", "intervalDays", "hasExpiration"];
  _v0.s(["formatIntervalLabel", 0, function _v0(_v1) {
    return _v1 <= 0 ? _v0(7) : 1 === _v1 ? (0, _v2.translate)({
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
    }) : 7 === _v1 ? (0, _v2.translate)({
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
    }) : (0, _v2.translate)({
      singular: "{count} day",
      plural: "{count} days",
      count: _v1,
      replacements: {
        count: String(_v1)
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
  }, "useSharingLink", 0, function () {
    let {
        settings: _v0
      } = (0, _v26.useOrionSettings)(),
      _v1 = !!_v0?.bi_expiring_links_ux_enabled,
      _v2 = (0, _v19.useGlobalStore)(({
        clip: _v0
      }) => _v0.clipId),
      _v3 = (0, _v9.useMemo)(() => _v1 && _v2 ? {
        where: {
          videoId: Number(_v2)
        },
        select: [..._v30]
      } : null, [_v1, _v2]),
      {
        data: _v4,
        mutate: _v5,
        isLoading: _v6
      } = (0, _v25.useGetVideoSharingLink)(_v3 ? () => _v3 : () => null),
      {
        data: _v7
      } = (0, _v27.useGetVideoSharingData)(),
      _v8 = _v7?.user?.uri ? (0, _v28.idFromUri)(_v7.user.uri) : null,
      _v9 = (0, _v4.useViewer)(),
      _v10 = !!_v9?.user?.uri && _v9.user.uri === _v7?.user?.uri,
      {
        data: _v11,
        isLoading: _v12
      } = (0, _v24.useGetUser)(() => _v1 && _v8 ? {
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
      } = (0, _v29.resolveDefaultExpiry)({
        prefDays: _v11?.preferences?.videos?.sharingLinkDefaultExpiryDays ?? null,
        orionDays: _v0?.bi_expiring_links_default_expiry_days ?? 0
      }),
      [_v15, {
        data: _v16,
        loading: _v17,
        error: _v18
      }] = (0, _v25.usePostVideoSharingLink)(),
      [_v19, {
        loading: _v20,
        error: _v21
      }] = (0, _v25.usePatchVideoSharingLink)(),
      [_v22, _v23] = (0, _v9.useState)(null);
    (0, _v9.useEffect)(() => {
      _v16?.url && _v23(_v16);
    }, [_v16]), (0, _v9.useEffect)(() => {
      _v23(null);
    }, [_v2]);
    let _v24 = (0, _v9.useRef)(_v4);
    _v24.current = _v4;
    let _v25 = (0, _v9.useCallback)((_v0 = {}) => {
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
          select: [..._v30],
          variables: _v4
        });
      }, [_v2, _v15]),
      _v26 = (0, _v9.useCallback)((_v0, _v1, _v2) => {
        _v5(_v0 => _v0 ? {
          ..._v0,
          expiresOn: _v0,
          intervalDays: _v1,
          hasExpiration: _v2
        } : _v0, {
          revalidate: !1
        });
      }, [_v5]),
      _v27 = (0, _v9.useCallback)(async (_v0, _v1, _v2) => {
        _v2 && (await _v19({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v30],
          variables: {
            expiresOn: _v0,
            intervalDays: _v1,
            hasExpiration: _v2
          }
        }));
      }, [_v2, _v19]),
      _v28 = (0, _v9.useCallback)(async _v0 => {
        _v2 && (await _v19({
          where: {
            videoId: Number(_v2)
          },
          select: [..._v30],
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
  }], 0);
  var _v31 = _v0.i(0);
  let _v32 = () => {
    let _v0 = (0, _v4.useViewer)(),
      {
        data: _v1
      } = (0, _v27.useGetVideoSharingData)(),
      _v2 = _v1?.user?.uri,
      _v3 = _v2 ? (0, _v28.idFromUri)(_v2) : null,
      {
        data: _v4
      } = (0, _v31.useGetUserTeamRole)(() => _v3 && _v0 ? {
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
  };
  _v0.s(["useGetTeamPermissionLevel", 0, _v32], 0), _v0.s(["useVideoContextData", 0, () => {
    let {
        clipId: _v0
      } = (0, _v19.useGlobalStore)(({
        clip: _v0
      }) => _v0),
      {
        data: _v1
      } = (0, _v27.useGetVideoSharingData)(),
      {
        teamPermissionLevel: _v2
      } = _v32();
    return (0, _v9.useMemo)(() => {
      let _v0 = Number(_v0),
        _v1 = Number(_v1?.user?.uri?.split("/").pop()),
        _v2 = {
          video_id: _v0,
          video_owner_id: _v1,
          video_privacy: _v1?.privacy?.view,
          video_embed_privacy: _v1?.privacy?.embed,
          content_rating: _v1?.contentRating,
          duration: _v1?.duration
        };
      return {
        clipId: _v0,
        ownerId: _v1,
        BPVideoContextFields: _v2,
        BPFolderContextFields: {
          folder_id: Number(_v1?.parentProject?.uri?.split("/").pop() ?? 0),
          is_private_to_me: !!_v1?.parentProject?.isPrivateToUser,
          access_permission_to_folder: _v2 ?? null
        }
      };
    }, [_v0, _v1, _v2]);
  }], 0);
}