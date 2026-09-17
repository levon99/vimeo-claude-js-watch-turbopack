{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
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
    _v16 = _v0.i(0);
  let _v17 = [{
      tier: "starter",
      name: "Starter",
      previous: null
    }, {
      tier: "standard",
      name: "Standard",
      previous: "Starter"
    }, {
      tier: "advanced",
      name: "Advanced",
      previous: "Standard"
    }],
    _v18 = {
      maxWidth: 960,
      margin: "0 auto",
      padding: "32px 16px",
      fontFamily: "sans-serif",
      lineHeight: 1.5,
      color: "#1a1a1a"
    },
    _v19 = {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      margin: "16px 0 40px"
    },
    _v20 = {
      flex: "1 1 240px",
      border: "1px solid #d5d5d5",
      borderRadius: 8,
      padding: 20
    },
    _v21 = {
      fontSize: 22,
      fontWeight: 700,
      margin: "4px 0 12px"
    },
    _v22 = {
      fontWeight: 600,
      margin: "0 0 8px"
    },
    _v23 = {
      margin: 0,
      paddingLeft: 20
    },
    _v24 = {
      borderTop: "1px solid #e5e5e5",
      marginTop: 32,
      paddingTop: 16
    },
    _v25 = {
      marginBottom: 24
    },
    _v26 = {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 14
    },
    _v27 = {
      textAlign: "left",
      padding: "6px 10px",
      borderBottom: "1px solid #e5e5e5",
      verticalAlign: "top"
    },
    _v28 = {
      textAlign: "center",
      padding: "6px 10px",
      borderBottom: "1px solid #f0f0f0"
    },
    _v29 = {
      marginBottom: 16
    },
    _v30 = {
      fontWeight: 600,
      marginBottom: 4
    },
    _v31 = _v0 => {
      let _v1 = "number" == typeof _v0 ? _v0 : parseFloat(_v0);
      return Number.isFinite(_v1) ? Number.isInteger(_v1) ? `$${_v1}` : `$${_v1.toFixed(2)}` : null;
    },
    _v32 = () => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)("h1", {
        children: _v12.PRIMARY_HEADERS.theUltimateAdFreePlayer
      }), (0, _v1.jsx)("p", {
        children: (0, _v1.jsx)(_v11.Link, {
          href: "/join",
          children: (0, _v7.translate)({
            singular: "Sign up",
            dictionary: {
              es: {
                singular: "Regístrate"
              },
              "de-DE": {
                singular: "Registrieren"
              },
              "fr-FR": {
                singular: "Inscrivez-vous"
              },
              "ja-JP": {
                singular: "サインアップ"
              },
              "ko-KR": {
                singular: "가입하기"
              },
              "pt-BR": {
                singular: "Inscreva-se"
              },
              "zh-CN": {
                singular: "注册"
              }
            }
          })
        })
      })]
    }),
    _v33 = ({
      inVideoSize: _v0
    }) => (0, _v1.jsxs)("section", {
      style: _v24,
      children: [(0, _v1.jsx)("h2", {
        children: (0, _v7.translate)({
          singular: "Have questions?",
          dictionary: {
            es: {
              singular: "¿Preguntas?"
            },
            "de-DE": {
              singular: "Hast du Fragen?"
            },
            "fr-FR": {
              singular: "Des questions ?"
            },
            "ja-JP": {
              singular: "質問がありますか？"
            },
            "ko-KR": {
              singular: "질문이 있으신가요?"
            },
            "pt-BR": {
              singular: "Tem dúvidas?"
            },
            "zh-CN": {
              singular: "有问题吗？"
            }
          }
        })
      }), (0, _v1.jsx)("dl", {
        style: {
          margin: 0
        },
        children: (0, _v15.default)(_v0).map(_v0 => (0, _v1.jsxs)("div", {
          style: _v29,
          children: [(0, _v1.jsx)("dt", {
            style: _v30,
            children: _v0.question
          }), (0, _v1.jsx)("dd", {
            style: {
              margin: 0
            },
            children: _v0.answer
          })]
        }, _v0.id))
      }), (0, _v1.jsx)("p", {
        children: (0, _v1.jsx)(_v11.Link, {
          href: "/help/contact",
          children: (0, _v7.translate)({
            singular: "Contact support",
            dictionary: {
              es: {
                singular: "Contactar al equipo de asistencia"
              },
              "de-DE": {
                singular: "Support kontaktieren"
              },
              "fr-FR": {
                singular: "Contacter l'assistance"
              },
              "ja-JP": {
                singular: "サポートへのお問い合わせ"
              },
              "ko-KR": {
                singular: "지원팀에 문의"
              },
              "pt-BR": {
                singular: "Entre em contato com o suporte"
              },
              "zh-CN": {
                singular: "联系支持团队"
              }
            }
          })
        })
      })]
    }),
    _v34 = ({
      plansData: _v0,
      prices: _v1
    }) => {
      let _v2 = (0, _v7.translate)({
          singular: "per seat / month",
          dictionary: {
            es: {
              singular: "por puesto al mes"
            },
            "de-DE": {
              singular: "pro Lizenz pro Monat"
            },
            "fr-FR": {
              singular: "par licence/mois"
            },
            "ja-JP": {
              singular: "1シートライセンスあたり / 月々"
            },
            "ko-KR": {
              singular: "사용자 라이선스당/월"
            },
            "pt-BR": {
              singular: "por licença/mês"
            },
            "zh-CN": {
              singular: "/席位/月"
            }
          }
        }),
        _v3 = _v0[0]?.metadata?.entitlements?.params?.videoStorageQuotaUnit === "video_size",
        _v4 = _v0.reduce((_v0, _v1) => (_v0[_v1.tier] = _v1.metadata.entitlements.params, _v0), {}),
        _v5 = (0, _v13.default)(_v4);
      return (0, _v1.jsxs)("section", {
        style: _v18,
        children: [(0, _v1.jsx)(_v32, {}), (0, _v1.jsx)("div", {
          style: _v19,
          children: _v0.map(_v0 => {
            let _v1 = (_v0 => {
                let _v1 = _v0.priceFormatted?.annualMonthly;
                if (_v1) return _v1;
                let _v2 = _v0.price?.annualMonthly;
                if ("number" == typeof _v2) return _v31(_v2);
                let _v3 = _v1?.[_v0.tier];
                return _v3 ? _v31(_v3) : null;
              })(_v0),
              _v2 = (0, _v16.getCardFeatureSubhead)(_v0, _v0.tier),
              _v3 = (0, _v16.getFeatureListByTier)(_v0.tier) ?? [];
            return (0, _v1.jsxs)("div", {
              style: _v20,
              children: [(0, _v1.jsx)("h2", {
                style: {
                  margin: 0
                },
                children: _v0.name
              }), _v1 ? (0, _v1.jsxs)("p", {
                style: _v21,
                children: [_v1, " ", _v2]
              }) : null, _v2 ? (0, _v1.jsx)("p", {
                style: _v22,
                children: _v2
              }) : null, (0, _v1.jsx)("ul", {
                style: _v23,
                children: _v3.map((_v0, _v1) => (0, _v1.jsx)("li", {
                  children: _v0
                }, `${_v0.tier}-${_v1}`))
              })]
            }, _v0.tier);
          })
        }), (0, _v1.jsxs)("section", {
          style: _v24,
          children: [(0, _v1.jsx)("h2", {
            children: (0, _v7.translate)({
              singular: "Compare plans",
              dictionary: {
                es: {
                  singular: "Comparar planes"
                },
                "de-DE": {
                  singular: "Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparer les abonnements"
                },
                "ja-JP": {
                  singular: "プランの比較"
                },
                "ko-KR": {
                  singular: "요금제 비교"
                },
                "pt-BR": {
                  singular: "Comparar planos"
                },
                "zh-CN": {
                  singular: "套餐对比"
                }
              }
            })
          }), _v5.map(_v0 => (0, _v1.jsxs)("div", {
            style: _v25,
            children: [(0, _v1.jsx)("h3", {
              children: _v0.title
            }), (0, _v1.jsxs)("table", {
              style: _v26,
              children: [(0, _v1.jsx)("thead", {
                children: (0, _v1.jsxs)("tr", {
                  children: [(0, _v1.jsx)("th", {
                    style: _v27,
                    scope: "col"
                  }), _v0.map(_v0 => (0, _v1.jsx)("th", {
                    style: {
                      ..._v27,
                      textAlign: "center"
                    },
                    scope: "col",
                    children: _v0.name
                  }, _v0.tier))]
                })
              }), (0, _v1.jsx)("tbody", {
                children: _v0.list.map((_v0, _v1) => (0, _v1.jsxs)("tr", {
                  children: [(0, _v1.jsx)("th", {
                    style: _v27,
                    scope: "row",
                    children: _v0.text
                  }), _v0.map(_v0 => (0, _v1.jsx)("td", {
                    style: _v28,
                    children: ((_v0, _v1) => {
                      if (Array.isArray(_v0)) return _v0.includes(_v1) ? (0, _v7.translate)({
                        singular: "Included",
                        dictionary: {
                          es: {
                            singular: "Incluida"
                          },
                          "de-DE": {
                            singular: "Inbegriffen"
                          },
                          "fr-FR": {
                            singular: "Inclus"
                          },
                          "ja-JP": {
                            singular: "含む"
                          },
                          "ko-KR": {
                            singular: "포함"
                          },
                          "pt-BR": {
                            singular: "Incluído"
                          },
                          "zh-CN": {
                            singular: "已包含"
                          }
                        }
                      }) : "—";
                      let _v2 = _v0?.[_v1];
                      return !0 === _v2 ? (0, _v7.translate)({
                        singular: "Included",
                        dictionary: {
                          es: {
                            singular: "Incluida"
                          },
                          "de-DE": {
                            singular: "Inbegriffen"
                          },
                          "fr-FR": {
                            singular: "Inclus"
                          },
                          "ja-JP": {
                            singular: "含む"
                          },
                          "ko-KR": {
                            singular: "포함"
                          },
                          "pt-BR": {
                            singular: "Incluído"
                          },
                          "zh-CN": {
                            singular: "已包含"
                          }
                        }
                      }) : _v2 || "—";
                    })(_v0.tiers, _v0.tier)
                  }, _v0.tier))]
                }, `${_v0.id}-${_v1}`))
              })]
            })]
          }, _v0.id))]
        }), (0, _v1.jsx)(_v33, {
          inVideoSize: _v3
        })]
      });
    },
    _v35 = [{
      id: "video_player",
      title: (0, _v7.translate)({
        singular: "Video player",
        dictionary: {
          es: {
            singular: "reproductor de video"
          },
          "de-DE": {
            singular: "Video-Player"
          },
          "fr-FR": {
            singular: "Player vidéo"
          },
          "ja-JP": {
            singular: "動画プレーヤー"
          },
          "ko-KR": {
            singular: "동영상 플레이어"
          },
          "pt-BR": {
            singular: "Reprodutor de vídeo"
          },
          "zh-CN": {
            singular: "视频播放器"
          }
        }
      }),
      features: _v14.VIDEO_PLAYER_FEATURES
    }, {
      id: "video_maker_and_editing_tools",
      title: (0, _v7.translate)({
        singular: "Video maker and editing tools",
        dictionary: {
          es: {
            singular: "Realizador de videos y herramientas de edición"
          },
          "de-DE": {
            singular: "Videomacher und Bearbeitungstools"
          },
          "fr-FR": {
            singular: "Créateur de vidéos et outils de montage"
          },
          "ja-JP": {
            singular: "ビデオメーカーと編集ツール"
          },
          "ko-KR": {
            singular: "동영상 제작 및 편집 도구"
          },
          "pt-BR": {
            singular: "Criador de vídeos e ferramentas de edição"
          },
          "zh-CN": {
            singular: "视频制作和编辑工具"
          }
        }
      }),
      features: _v14.EDITING_FEATURES
    }, {
      id: "vimeo_ai",
      title: (0, _v7.translate)({
        singular: "Vimeo AI",
        dictionary: {
          "fr-FR": {
            singular: "IA Vimeo"
          }
        }
      }),
      features: _v14.AI_FEATURES
    }, {
      id: "virtual_events_and_webinars",
      title: (0, _v7.translate)({
        singular: "Virtual events and webinars",
        dictionary: {
          es: {
            singular: "Eventos virtuales y webinars"
          },
          "de-DE": {
            singular: "Virtuelle Veranstaltungen und Webinare"
          },
          "fr-FR": {
            singular: "Événements virtuels et webinaires"
          },
          "ja-JP": {
            singular: "バーチャルイベントとウェビナー"
          },
          "ko-KR": {
            singular: "가상 이벤트 및 웨비나"
          },
          "pt-BR": {
            singular: "Eventos virtuais e webinars"
          },
          "zh-CN": {
            singular: "虚拟活动与网络研讨会"
          }
        }
      }),
      features: _v14.WEBINARS_FEATURES
    }, {
      id: "video_management_and_collaboration",
      title: (0, _v7.translate)({
        singular: "Video management and collaboration",
        dictionary: {
          es: {
            singular: "Gestión de video y colaboración"
          },
          "de-DE": {
            singular: "Videomanagement und Zusammenarbeit"
          },
          "fr-FR": {
            singular: "Gestion et collaboration vidéo"
          },
          "ja-JP": {
            singular: "動画管理と共同作業"
          },
          "ko-KR": {
            singular: "동영상 관리 및 협업"
          },
          "pt-BR": {
            singular: "Colaboração e gerenciamento de vídeo"
          },
          "zh-CN": {
            singular: "视频管理与协作"
          }
        }
      }),
      features: _v14.COLLABORATION_FEATURES
    }, {
      id: "analytics",
      title: (0, _v7.translate)({
        singular: "Analytics",
        dictionary: {
          es: {
            singular: "Análisis"
          },
          "de-DE": {
            singular: "Analytik"
          },
          "fr-FR": {
            singular: "Analyses"
          },
          "ja-JP": {
            singular: "分析"
          },
          "ko-KR": {
            singular: "애널리틱스"
          },
          "pt-BR": {
            singular: "Análises"
          },
          "zh-CN": {
            singular: "分析"
          }
        }
      }),
      features: _v14.ANALYTICS_FEATURES
    }, {
      id: "marketing_and_distribution",
      title: (0, _v7.translate)({
        singular: "Marketing and distribution",
        dictionary: {
          es: {
            singular: "Marketing y distribución"
          },
          "de-DE": {
            singular: "Marketing und Vertrieb"
          },
          "fr-FR": {
            singular: "Marketing et distribution"
          },
          "ja-JP": {
            singular: "マーケティングと配信"
          },
          "ko-KR": {
            singular: "마케팅 및 배포"
          },
          "pt-BR": {
            singular: "Marketing e distribuição"
          },
          "zh-CN": {
            singular: "营销和分发"
          }
        }
      }),
      features: _v14.MARKETING_FEATURES
    }, {
      id: "privacy_security_and_admin_controls",
      title: (0, _v7.translate)({
        singular: "Privacy, security, and admin controls",
        dictionary: {
          es: {
            singular: "Controles de privacidad, seguridad y administración"
          },
          "de-DE": {
            singular: "Datenschutz, Sicherheit und administrative Kontrolle"
          },
          "fr-FR": {
            singular: "Confidentialité, sécurité et contrôles administrateur"
          },
          "ja-JP": {
            singular: "プライバシー、セキュリティ、管理コントロール"
          },
          "ko-KR": {
            singular: "프라이버시･보안･관리자 제어"
          },
          "pt-BR": {
            singular: "Privacidade, segurança e controles de administração"
          },
          "zh-CN": {
            singular: "隐私、安全和管理控制"
          }
        }
      }),
      features: _v14.PRIVACY_FEATURES
    }, {
      id: "priority_support",
      title: (0, _v7.translate)({
        singular: "Priority support",
        dictionary: {
          es: {
            singular: "Asistencia prioritaria"
          },
          "de-DE": {
            singular: "Prioritäts-Support"
          },
          "fr-FR": {
            singular: "Assistance prioritaire"
          },
          "ja-JP": {
            singular: "優先サポート"
          },
          "ko-KR": {
            singular: "우선 지원"
          },
          "pt-BR": {
            singular: "Suporte prioritário"
          },
          "zh-CN": {
            singular: "优先支持"
          }
        }
      }),
      features: _v14.SUPPORT_FEATURES
    }, {
      id: "enterprise_services",
      title: (0, _v7.translate)({
        singular: "Enterprise services",
        dictionary: {
          es: {
            singular: "Servicios de Enterprise"
          },
          "de-DE": {
            singular: "Enterprise-Services"
          },
          "fr-FR": {
            singular: "Services Entreprise"
          },
          "ja-JP": {
            singular: "Enterpriseサービス"
          },
          "ko-KR": {
            singular: "엔터프라이즈 서비스"
          },
          "pt-BR": {
            singular: "Serviços Enterprise"
          },
          "zh-CN": {
            singular: "Enterprise 服务"
          }
        }
      }),
      features: _v14.ENTERPRISE_FEATURES
    }],
    _v36 = ({
      prices: _v0
    }) => {
      let _v1 = (0, _v7.translate)({
        singular: "per seat / month",
        dictionary: {
          es: {
            singular: "por puesto al mes"
          },
          "de-DE": {
            singular: "pro Lizenz pro Monat"
          },
          "fr-FR": {
            singular: "par licence/mois"
          },
          "ja-JP": {
            singular: "1シートライセンスあたり / 月々"
          },
          "ko-KR": {
            singular: "사용자 라이선스당/월"
          },
          "pt-BR": {
            singular: "por licença/mês"
          },
          "zh-CN": {
            singular: "/席位/月"
          }
        }
      });
      return (0, _v1.jsxs)("section", {
        style: _v18,
        children: [(0, _v1.jsx)(_v32, {}), (0, _v1.jsx)("div", {
          style: _v19,
          children: _v17.map(({
            tier: _v0,
            name: _v1,
            previous: _v2
          }) => {
            let _v3 = _v0?.[_v0];
            return (0, _v1.jsxs)("div", {
              style: _v20,
              children: [(0, _v1.jsx)("h2", {
                style: {
                  margin: 0
                },
                children: _v1
              }), _v3 ? (0, _v1.jsxs)("p", {
                style: _v21,
                children: [_v31(_v3), " USD ", _v1]
              }) : null, (0, _v1.jsx)("p", {
                style: _v22,
                children: _v2 ? (0, _v7.translate)({
                  singular: "Everything in {PLAN_NAME}, plus:",
                  replacements: {
                    PLAN_NAME: _v2
                  },
                  dictionary: {
                    es: {
                      singular: "Todo lo incluido en {PLAN_NAME}, más:"
                    },
                    "de-DE": {
                      singular: "Alles in {PLAN_NAME}, plus:"
                    },
                    "fr-FR": {
                      singular: "Tout ce qui est compris dans l'abonnement {PLAN_NAME}, plus :"
                    },
                    "ja-JP": {
                      singular: "{PLAN_NAME}プランの全機能に加え："
                    },
                    "ko-KR": {
                      singular: "{PLAN_NAME}의 모든 기능 및 다음 기능:"
                    },
                    "pt-BR": {
                      singular: "Tudo incluído no plano {PLAN_NAME}, mais:"
                    },
                    "zh-CN": {
                      singular: "{PLAN_NAME} 中的所有功能，加上："
                    }
                  }
                }) : (0, _v7.translate)({
                  singular: "Key features:",
                  dictionary: {
                    es: {
                      singular: "Funciones clave:"
                    },
                    "de-DE": {
                      singular: "Die wichtigsten Funktionen:"
                    },
                    "fr-FR": {
                      singular: "Fonctionnalités principales :"
                    },
                    "ja-JP": {
                      singular: "主な機能："
                    },
                    "ko-KR": {
                      singular: "주요 기능:"
                    },
                    "pt-BR": {
                      singular: "Principais recursos:"
                    },
                    "zh-CN": {
                      singular: "主要特点："
                    }
                  }
                })
              }), (0, _v1.jsx)("ul", {
                style: _v23,
                children: (_v16.CARD_FEATURE_LIST_MAP[_v0] ?? []).map((_v0, _v1) => (0, _v1.jsx)("li", {
                  children: _v0
                }, `${_v0}-${_v1}`))
              })]
            }, _v0);
          })
        }), (0, _v1.jsxs)("section", {
          style: _v24,
          children: [(0, _v1.jsx)("h2", {
            children: (0, _v7.translate)({
              singular: "Compare plans",
              dictionary: {
                es: {
                  singular: "Comparar planes"
                },
                "de-DE": {
                  singular: "Pläne vergleichen"
                },
                "fr-FR": {
                  singular: "Comparer les abonnements"
                },
                "ja-JP": {
                  singular: "プランの比較"
                },
                "ko-KR": {
                  singular: "요금제 비교"
                },
                "pt-BR": {
                  singular: "Comparar planos"
                },
                "zh-CN": {
                  singular: "套餐对比"
                }
              }
            })
          }), (0, _v1.jsxs)("div", {
            style: _v25,
            children: [(0, _v1.jsx)("h3", {
              children: (0, _v7.translate)({
                singular: "Core features",
                dictionary: {
                  es: {
                    singular: "Funciones principales"
                  },
                  "de-DE": {
                    singular: "Hauptfunktionen"
                  },
                  "fr-FR": {
                    singular: "Fonctionnalités principales"
                  },
                  "ja-JP": {
                    singular: "主な機能"
                  },
                  "ko-KR": {
                    singular: "핵심 기능"
                  },
                  "pt-BR": {
                    singular: "Recursos principais"
                  },
                  "zh-CN": {
                    singular: "核心功能"
                  }
                }
              })
            }), (0, _v1.jsx)("ul", {
              style: _v23,
              children: [(0, _v7.translate)({
                singular: "Users",
                dictionary: {
                  es: {
                    singular: "Usuarios"
                  },
                  "de-DE": {
                    singular: "Benutzer"
                  },
                  "fr-FR": {
                    singular: "Utilisateurs"
                  },
                  "ja-JP": {
                    singular: "ユーザー"
                  },
                  "ko-KR": {
                    singular: "사용자"
                  },
                  "pt-BR": {
                    singular: "Usuários"
                  }
                }
              }), (0, _v7.translate)({
                singular: "Video uploads and creation",
                dictionary: {
                  es: {
                    singular: "Creación y subidas de videos"
                  },
                  "de-DE": {
                    singular: "Videos hochladen und erstellen"
                  },
                  "fr-FR": {
                    singular: "Mises en ligne et création de vidéos"
                  },
                  "ja-JP": {
                    singular: "動画のアップロードと作成"
                  },
                  "ko-KR": {
                    singular: "동영상 업로드 및 제작"
                  },
                  "pt-BR": {
                    singular: "Carregamentos e criação de vídeos"
                  },
                  "zh-CN": {
                    singular: "上传和创建视频"
                  }
                }
              }), (0, _v7.translate)({
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
              }), (0, _v7.translate)({
                singular: "Virtual events & webinars",
                dictionary: {
                  es: {
                    singular: "Eventos virtuales & seminarios web"
                  },
                  "de-DE": {
                    singular: "Virtuelle Events & Webinare"
                  },
                  "fr-FR": {
                    singular: "Événements virtuels et webinaires"
                  },
                  "ja-JP": {
                    singular: "バーチャルイベント & ウェビナー"
                  },
                  "ko-KR": {
                    singular: "가상 이벤트 & 웨비나"
                  },
                  "pt-BR": {
                    singular: "Eventos virtuais e webinars"
                  },
                  "zh-CN": {
                    singular: "虚拟活动与网络研讨会"
                  }
                }
              }), (0, _v7.translate)({
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
              })].map((_v0, _v1) => (0, _v1.jsx)("li", {
                children: _v0
              }, `core-${_v1}`))
            })]
          }), _v35.map(_v0 => (0, _v1.jsxs)("div", {
            style: _v25,
            children: [(0, _v1.jsx)("h3", {
              children: _v0.title
            }), (0, _v1.jsx)("ul", {
              style: _v23,
              children: _v0.features.map((_v0, _v1) => (0, _v1.jsx)("li", {
                children: _v0.text
              }, `${_v0.id}-${_v1}`))
            })]
          }, _v0.id))]
        }), (0, _v1.jsx)(_v33, {
          inVideoSize: !1
        })]
      });
    },
    _v37 = ({
      plansData: _v0,
      prices: _v1
    }) => _v0 && _v0.length > 0 ? (0, _v1.jsx)(_v34, {
      plansData: _v0,
      prices: _v1
    }) : (0, _v1.jsx)(_v36, {
      prices: _v1
    });
  var _v38 = _v0.i(0);
  let _v39 = "https://vimeo.com",
    _v40 = `${_v39}/upgrade-plan`,
    _v41 = {
      starter: "12.00",
      standard: "25.00",
      advanced: "75.00"
    },
    _v42 = (_v0, _v1, _v2) => ({
      "@type": "ImageObject",
      url: `https://i.vimeocdn.com/custom_asset/${_v0}`,
      width: _v1,
      height: _v2
    }),
    _v43 = {
      "@type": "Organization",
      name: "Vimeo",
      url: _v39,
      logo: _v42("cbf0b6892f540132a1d1b8f1520a9d75", "2150", "860"),
      sameAs: ["https://www.facebook.com/Vimeo/", "https://twitter.com/vimeo", "https://www.instagram.com/vimeo/", "https://en.wikipedia.org/wiki/Vimeo", "https://www.crunchbase.com/organization/vimeo", "https://www.tiktok.com/@vimeo", "https://www.linkedin.com/company/vimeo/"]
    },
    _v44 = {
      "@type": "QuantitativeValue",
      value: "1",
      unitCode: "MON"
    },
    _v45 = ({
      plansData: _v0,
      prices: _v1
    }) => {
      let [_v2] = (0, _v4.useQueryParams)({
          v: _v3.NumberParam,
          context: (0, _v3.createEnumParam)(Object.values(_v10.CONTEXT)),
          campaign: _v3.StringParam
        }),
        _v3 = (0, _v7.translate)({
          singular: "Pricing plans | From free plans to enterprise solutions",
          dictionary: {
            es: {
              singular: "Planes de precios | Desde planes gratuitos hasta soluciones empresariales"
            },
            "de-DE": {
              singular: "Preispläne | Von kostenlosen Plänen bis zu Enterprise-Lösungen"
            },
            "fr-FR": {
              singular: "Plans tarifaires | Des offres gratuites aux solutions d’entreprise"
            },
            "ja-JP": {
              singular: "料金プラン | 無料プランからエンタープライズ向けソリューションまで"
            },
            "ko-KR": {
              singular: "요금제 | 무료 요금제부터 엔터프라이즈 솔루션까지"
            },
            "pt-BR": {
              singular: "Planos de preços | De planos gratuitos a soluções empresariais"
            },
            "zh-CN": {
              singular: "定价计划 | 从免费计划到企业级解决方案"
            }
          }
        }),
        _v4 = (0, _v7.translate)({
          singular: "Join the web’s most supportive community of creators and get high-quality tools for hosting, sharing, and streaming videos in gorgeous HD and 4K with no ads.",
          dictionary: {
            es: {
              singular: "Únete a la comunidad de creadores más acogedora de la red y obtén herramientas de alta calidad para alojar, compartir y emitir videos en continuo en alta definición y 4K sin anuncios."
            },
            "de-DE": {
              singular: "Komm an Board zu der hilfreichsten Community im ganzen Internet und erhalte qualitativ hochwertige Tools für Hosten, Teilen und Streamen von Videos in wunderschönem HD und 4K ganz ohne Werbung."
            },
            "fr-FR": {
              singular: "Rejoignez la communauté de créateurs de vidéos la plus passionnée du Web, et bénéficiez d'outils de grande qualité pour héberger, partager et streamer vos vidéos en sublime HD et 4k sans pubs."
            },
            "ja-JP": {
              singular: " ウェブで最も協力的なクリエイターコミュニティで、HDや4K動画のホスティング、共有、ストリーミングなど、たくさんのパワフルなツールを広告無しで活用しよう。"
            },
            "ko-KR": {
              singular: "웹에서 가장 풍부한 지원을 제공하는 창작가 커뮤니티와 함께하여 광고 없는 멋진 HD 및 4K 동영상을 호스팅, 공유 및 스트리밍할 수 있는 고품질 도구들을 만나보세요."
            },
            "pt-BR": {
              singular: "Junte-se à comunidade de criadores mais prestativa da web e obtenha ferramentas de alta qualidade para hospedar, compartilhar e transmitir vídeos, em incrível Alta Definição (HD) e em 4K, sem anúncios."
            },
            "zh-CN": {
              singular: "加入网络上最有支持力的创作者社区，获取优质工具来托管、分享和直播精美的高清和 4K 视频，而且没有广告。"
            }
          }
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v2.default, {
          children: [(0, _v1.jsx)("title", {
            children: _v3
          }), (0, _v1.jsx)("meta", {
            name: "description",
            content: _v4
          }), (0, _v1.jsx)("meta", {
            property: "og:type",
            content: "video.other"
          }), (0, _v1.jsx)("meta", {
            property: "og:site_name",
            content: "Vimeo"
          }), (0, _v1.jsx)("meta", {
            property: "og:url",
            content: _v40
          }), (0, _v1.jsx)("meta", {
            property: "og:title",
            content: _v3
          }), (0, _v1.jsx)("meta", {
            property: "og:description",
            content: _v4
          }), (0, _v1.jsx)("meta", {
            name: "twitter:title",
            content: _v3
          }), (0, _v1.jsx)("link", {
            rel: "canonical",
            href: _v40
          })]
        }), (0, _v1.jsx)("div", {
          suppressHydrationWarning: !0,
          dangerouslySetInnerHTML: {
            __html: `<script type="application/ld+json">${JSON.stringify({
              "@context": "http://schema.org",
              "@graph": [{
                mainEntity: {
                  "@context": "http://schema.org",
                  "@type": ["WebApplication", "Product", "SoftwareApplication"],
                  "@id": _v39,
                  applicationCategory: ["BusinessApplication", "BrowserApplication", "EntertainmentApplication", "MultimediaApplication", "LifestyleApplication", "EducationalApplication", "CommunicationApplication", "ReferenceApplication"],
                  name: "Vimeo All-In-One Video Platform",
                  operatingSystem: "all",
                  browserRequirements: "Requires Javascript and HTML5 support",
                  url: _v39,
                  screenshot: _v42("d9ef877c80e240720926ee30e6ace39b", "1800", "1101"),
                  image: [_v42("c406392768b237292f74f3e2099e5545", "1920", "1082"), _v42("650db19aec4d5633a6f5a1a2997bd058", "1921", "1081"), _v42("f884aa9bd76537bdb2f52e8017becdc0", "1920", "1080"), _v42("bc7ff4aaa44d52d6683d21e1d68c9913", "1920", "1080"), _v42("202c65b28d45af4812af604d1f2f629d", "1920", "1080")],
                  description: "Unlock the power of video and join over 260M professionals, teams, and organizations who use Vimeo to create, collaborate and communicate.",
                  featureList: ["https://vimeo.com/solutions/video-monetization", "https://vimeo.com/solutions/communications", "https://vimeo.com/solutions/marketing", "https://vimeo.com/features/interactive-video", "https://vimeo.com/features/livestreaming", "https://vimeo.com/features/screen-recorder", "https://vimeo.com/create", "https://vimeo.com/for-hire", "https://vimeo.com/stock", "https://vimeo.com/features/video-library", "https://vimeo.com/features/video-player", "https://vimeo.com/features/online-video-hosting", "https://vimeo.com/features/video-privacy", "https://vimeo.com/enterprise", "https://vimeo.com/features/virtual-events", "https://vimeo.com/features/video-analytics", "https://vimeo.com/ott"],
                  offers: {
                    "@type": "AggregateOffer",
                    offeredBy: _v43,
                    highPrice: _v1.advanced,
                    lowPrice: "0.00",
                    offerCount: "4",
                    priceCurrency: "USD",
                    priceSpecification: [{
                      "@type": "UnitPriceSpecification",
                      price: "0.00",
                      priceCurrency: "USD",
                      name: "Free",
                      description: "Our Free plan comes with 2 videos/month, up to 25 videos total; 2TB of bandwidth/month in the Vimeo player; Free features include Basic templates for video creation; Screen recording; Custom gif creation; 4K & HDR Support & Dolby Vision; and no ads before, after, or on your video."
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.starter,
                      priceCurrency: "USD",
                      name: "Starter",
                      description: "Our Starter plan comes with 60 videos/seat/year; 2TB of bandwidth/month in the Vimeo player; In addition to the Free plan, Starter comes with Player embedding; Password protection; Video chaptering and SEO; Seamless video review tools with Time-coded notes; and Engagement and social analytics.",
                      referenceQuantity: _v44
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.standard,
                      priceCurrency: "USD",
                      name: "Standard",
                      description: "Our Standard plan comes with 120 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Starter plan, Standard comes with Branding in player and videos; Custom CTAs and end cards; Lead capture with custom forms; Premium templates for video creation; Stock photos, videos, and music; and Tools to sell videos online and worldwide.",
                      referenceQuantity: _v44
                    }, {
                      "@type": "UnitPriceSpecification",
                      price: _v1.advanced,
                      priceCurrency: "USD",
                      name: "Advanced",
                      description: "Our Advanced plan comes with 240 videos/seat/year, 2TB of bandwidth/month in the Vimeo player; In addition to the Standard plan, Advanced comes with Virtual events and webinars; Live Q&A, polls, and chats; Register up to 100 attendees per event; Branded invite & reminder emails; Real-time stream health; and Marketing integrations with Constant Contact, Hubspot, Mailchimp, Heap, and Campaign Monitor.",
                      referenceQuantity: _v44
                    }]
                  },
                  creator: _v43
                }
              }]
            })}</script>`
          }
        }), (0, _v1.jsx)("noscript", {
          suppressHydrationWarning: !0,
          children: (0, _v1.jsx)(_v37, {
            plansData: _v0,
            prices: _v1
          })
        }), (0, _v1.jsx)(_v9.default, {
          version: _v2.v,
          context: _v2.context,
          campaign: _v2.campaign
        })]
      });
    },
    _v46 = ["starter", "standard", "advanced"],
    _v47 = ["currency", "discount", "id", "metadata", "price", "promotion", "name", "uri", "tier", "priceFormatted"],
    _v48 = async (_v0, _v1) => {
      try {
        let _v0 = await (0, _v6.getSubscriptionPlans)({
            baseUrl: _v0,
            select: _v47,
            query: {
              bypassTierHierarchy: !0,
              currency: "USD"
            },
            headers: {
              "Content-Type": "application/json",
              Authorization: _v1 ? `jwt ${_v1}` : "",
              "Vimeo-Page": "/upgrade-plan",
              "Accept-Language": "en"
            }
          }),
          _v1 = Array.isArray(_v0) ? _v0 : _v0?.data ?? [];
        if (!_v1 || 0 === _v1.length) return null;
        let _v2 = _v1.filter(_v0 => "free" !== _v0.tier);
        if (0 === _v2.length) return null;
        return JSON.parse(JSON.stringify(_v2));
      } catch {
        return null;
      }
    };
  (0, _v5.withPageSetup)(async _v0 => {
    let _v1 = await _v48(_v0.baseUrl, _v0.jwt);
    return {
      props: {
        hasThemeSupport: !0,
        plansData: _v1,
        prices: (_v0 => {
          if (!_v0) return _v41;
          let _v1 = {
            ..._v41
          };
          for (let _v0 of _v46) {
            let _v0 = _v0.find(_v0 => _v0.tier === _v0)?.price?.annualMonthly;
            if ("number" != typeof _v0) return _v41;
            _v1[_v0] = _v0.toFixed(2);
          }
          return _v1;
        })(_v1)
      }
    };
  }, {
    inlineViewer: "all"
  }), _v45.getLayout = _v0 => (0, _v1.jsxs)(_v38.QueryParamProvider, {
    children: [_v0, (0, _v1.jsx)(_v8.StandardFooterLayout, {})]
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v45], 0);
}