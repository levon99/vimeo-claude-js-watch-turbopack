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
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = ({
    teamUserId: _v0
  }) => {
    let _v1 = (0, _v12.useContext)(_v25.ViewerContext),
      {
        personalTeamFolderUri: _v2
      } = (0, _v12.useContext)(_v24.TeamUserInfoState),
      _v3 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      _v4 = Number(_v2?.match(/(\d)+/g)?.[1]);
    return _v1 ? (0, _v1.jsxs)(_v13.Accordion, {
      allowMultiple: !0,
      children: [(0, _v1.jsx)(_v15.AccordionItem, {
        background: "background",
        _hover: {
          background: "background"
        },
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v18.HStack, {
            width: "100%",
            alignItems: "center",
            gap: (0, _v8.rem)(8),
            p: (0, _v8.rem)(16),
            children: [(0, _v1.jsx)(_v23.TeamLibrary, {
              boxSize: "sm"
            }), (0, _v1.jsx)(_v19.Text, {
              fontWeight: 600,
              flex: "1",
              children: (0, _v11.translate)({
                singular: "Team library",
                dictionary: {
                  es: {
                    singular: "Biblioteca del equipo"
                  },
                  "de-DE": {
                    singular: "Teambibliothek"
                  },
                  "fr-FR": {
                    singular: "Bibliothèque de l'équipe"
                  },
                  "ja-JP": {
                    singular: "チームライブラリ"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리"
                  },
                  "pt-BR": {
                    singular: "Biblioteca da equipe"
                  },
                  "zh-CN": {
                    singular: "团队视频库"
                  }
                }
              })
            }), (0, _v1.jsx)(_v14.AccordionButton, {
              width: "auto",
              minWidth: 0,
              p: 0,
              backgroundColor: "transparent",
              _hover: {
                background: "none"
              },
              "aria-label": (0, _v11.translate)({
                singular: "Team library",
                dictionary: {
                  es: {
                    singular: "Biblioteca del equipo"
                  },
                  "de-DE": {
                    singular: "Teambibliothek"
                  },
                  "fr-FR": {
                    singular: "Bibliothèque de l'équipe"
                  },
                  "ja-JP": {
                    singular: "チームライブラリ"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리"
                  },
                  "pt-BR": {
                    singular: "Biblioteca da equipe"
                  },
                  "zh-CN": {
                    singular: "团队视频库"
                  }
                }
              }),
              children: _v0 ? (0, _v1.jsx)(_v21.ChevronUpSmall, {}) : (0, _v1.jsx)(_v20.ChevronDownSmall, {})
            })]
          }), (0, _v1.jsx)(_v16.AccordionPanel, {
            backgroundColor: "transparent",
            children: (0, _v1.jsx)(_v27.PermissionsListRoot, {
              teamUserId: String(_v0),
              ownerId: _v3,
              isScrollable: !0,
              breadcrumbName: (0, _v11.translate)({
                singular: "Team library",
                dictionary: {
                  es: {
                    singular: "Biblioteca del equipo"
                  },
                  "de-DE": {
                    singular: "Teambibliothek"
                  },
                  "fr-FR": {
                    singular: "Bibliothèque de l'équipe"
                  },
                  "ja-JP": {
                    singular: "チームライブラリ"
                  },
                  "ko-KR": {
                    singular: "팀 라이브러리"
                  },
                  "pt-BR": {
                    singular: "Biblioteca da equipe"
                  },
                  "zh-CN": {
                    singular: "团队视频库"
                  }
                }
              })
            })
          })]
        })
      }), (0, _v1.jsx)(_v17.Divider, {
        borderColor: "stroke",
        opacity: .6
      }), (0, _v1.jsx)(_v15.AccordionItem, {
        background: "background",
        _hover: {
          background: "background"
        },
        children: ({
          isExpanded: _v0
        }) => (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsxs)(_v18.HStack, {
            width: "100%",
            alignItems: "center",
            gap: (0, _v8.rem)(8),
            p: (0, _v8.rem)(16),
            children: [(0, _v1.jsx)(_v22.MyLibrary, {
              boxSize: "sm"
            }), (0, _v1.jsx)(_v19.Text, {
              fontWeight: 600,
              flex: "1",
              children: (0, _v11.translate)({
                singular: "My library",
                dictionary: {
                  es: {
                    singular: "Mi biblioteca"
                  },
                  "de-DE": {
                    singular: "Meine Bibliothek"
                  },
                  "fr-FR": {
                    singular: "Ma bibliothèque"
                  },
                  "ja-JP": {
                    singular: "マイ ライブラリ"
                  },
                  "ko-KR": {
                    singular: "내 라이브러리"
                  },
                  "pt-BR": {
                    singular: "Minha Biblioteca"
                  },
                  "zh-CN": {
                    singular: "我的视频库"
                  }
                }
              })
            }), (0, _v1.jsx)(_v14.AccordionButton, {
              width: "auto",
              minWidth: 0,
              p: 0,
              backgroundColor: "transparent",
              _hover: {
                background: "none"
              },
              "aria-label": (0, _v11.translate)({
                singular: "My library",
                dictionary: {
                  es: {
                    singular: "Mi biblioteca"
                  },
                  "de-DE": {
                    singular: "Meine Bibliothek"
                  },
                  "fr-FR": {
                    singular: "Ma bibliothèque"
                  },
                  "ja-JP": {
                    singular: "マイ ライブラリ"
                  },
                  "ko-KR": {
                    singular: "내 라이브러리"
                  },
                  "pt-BR": {
                    singular: "Minha Biblioteca"
                  },
                  "zh-CN": {
                    singular: "我的视频库"
                  }
                }
              }),
              children: _v0 ? (0, _v1.jsx)(_v21.ChevronUpSmall, {}) : (0, _v1.jsx)(_v20.ChevronDownSmall, {})
            })]
          }), (0, _v1.jsx)(_v16.AccordionPanel, {
            backgroundColor: "transparent",
            children: _v4 ? (0, _v1.jsx)(_v26.FolderPermissionsList, {
              teamUserId: _v0,
              ownerId: _v3,
              folderId: _v4,
              excludePersonalTeamFolder: !1
            }) : null
          })]
        })
      })]
    }) : null;
  };
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = [{
      key: "vocabulary",
      policyName: "AI Vocabulary",
      label: (0, _v11.translate)({
        singular: "Custom dictionary",
        dictionary: {
          es: {
            singular: "Diccionario personalizado"
          },
          "de-DE": {
            singular: "Benutzerdefiniertes Wörterbuch"
          },
          "fr-FR": {
            singular: "Dictionnaire personnalisé"
          },
          "ja-JP": {
            singular: "カスタム辞書"
          },
          "ko-KR": {
            singular: "사용자 지정 사전"
          },
          "pt-BR": {
            singular: "Dicionário personalizado"
          },
          "zh-CN": {
            singular: "自定义词典"
          }
        }
      }),
      description: (0, _v11.translate)({
        singular: "Manage glossary, terms translations and custom rules to be used in AI-generated content",
        dictionary: {
          es: {
            singular: "Gestionar glosario, traducciones de términos y reglas personalizadas para usar en contenido generado por IA"
          },
          "de-DE": {
            singular: "Glossar, Begriffübersetzungen und benutzerdefinierte Regeln verwalten, die in KI-generierten Inhalten verwendet werden"
          },
          "fr-FR": {
            singular: "Gérer le glossaire, les traductions de termes et les règles personnalisées à utiliser dans le contenu généré par l'IA"
          },
          "ja-JP": {
            singular: "AI生成コンテンツで使用する用語集、用語の翻訳、およびカスタムルールの管理"
          },
          "ko-KR": {
            singular: "AI 생성 콘텐츠에 사용될 용어집, 용어 번역 및 사용자 정의 규칙 관리"
          },
          "pt-BR": {
            singular: "Gerenciar glossário, traduções de termos e regras personalizadas a serem usadas em conteúdo gerado por IA"
          },
          "zh-CN": {
            singular: "管理词汇表、术语翻译及用于 AI 生成内容的自定义规则"
          }
        }
      })
    }, {
      key: "translation",
      policyName: "AI Translator",
      label: (0, _v11.translate)({
        singular: "Translations",
        dictionary: {
          es: {
            singular: "Traducciones"
          },
          "de-DE": {
            singular: "Übersetzungen"
          },
          "fr-FR": {
            singular: "Traductions"
          },
          "ja-JP": {
            singular: "翻訳"
          },
          "ko-KR": {
            singular: "번역"
          },
          "pt-BR": {
            singular: "Traduções"
          },
          "zh-CN": {
            singular: "翻译"
          }
        }
      }),
      description: (0, _v11.translate)({
        singular: "Video captions or dubbing",
        dictionary: {
          es: {
            singular: "Subtítulos o doblaje de video"
          },
          "de-DE": {
            singular: "Video-Untertitel oder Synchronisation"
          },
          "fr-FR": {
            singular: "Sous-titres ou doublage vidéo"
          },
          "ja-JP": {
            singular: "動画の字幕または吹き替え"
          },
          "ko-KR": {
            singular: "동영상 자막 또는 더빙"
          },
          "pt-BR": {
            singular: "Legendas ou dublagem de vídeo"
          },
          "zh-CN": {
            singular: "视频字幕或配音"
          }
        }
      })
    }, {
      key: "video_details",
      policyName: "AI Video Details",
      label: (0, _v11.translate)({
        singular: "Video details",
        dictionary: {
          es: {
            singular: "Detalles del video"
          },
          "de-DE": {
            singular: "Videodetails"
          },
          "fr-FR": {
            singular: "Détails de la vidéo"
          },
          "ja-JP": {
            singular: "動画の詳細情報"
          },
          "ko-KR": {
            singular: "동영상 세부 사항"
          },
          "pt-BR": {
            singular: "Detalhes do vídeo"
          },
          "zh-CN": {
            singular: "视频详情"
          }
        }
      }),
      description: (0, _v11.translate)({
        singular: "Generation of video title, description, and tags.",
        dictionary: {
          es: {
            singular: "Generación del título, la descripción y las etiquetas del video."
          },
          "de-DE": {
            singular: "Erstellung von Videotitel, Beschreibung und Tags."
          },
          "fr-FR": {
            singular: "Génération du titre, de la description et des mots-clés de la vidéo."
          },
          "ja-JP": {
            singular: "動画のタイトル、説明、タグの生成。"
          },
          "ko-KR": {
            singular: "동영상 제목, 설명 및 태그 생성."
          },
          "pt-BR": {
            singular: "Geração de título, descrição e tags do vídeo."
          },
          "zh-CN": {
            singular: "生成视频标题、描述和标签。"
          }
        }
      })
    }, {
      key: "scripts",
      policyName: "AI Scripts",
      label: (0, _v11.translate)({
        singular: "Scripts",
        dictionary: {
          es: {
            singular: "Guiones"
          },
          "de-DE": {
            singular: "Skripte"
          },
          "ja-JP": {
            singular: "スクリプト"
          },
          "ko-KR": {
            singular: "스크립트"
          },
          "pt-BR": {
            singular: "Roteiros"
          },
          "zh-CN": {
            singular: "脚本"
          }
        }
      }),
      description: (0, _v11.translate)({
        singular: "Generation of scripts to use for recordings and live events",
        dictionary: {
          es: {
            singular: "Generación de guiones para usar en grabaciones y eventos en vivo"
          },
          "de-DE": {
            singular: "Erstellung von Skripten für Aufnahmen und Live-Events"
          },
          "fr-FR": {
            singular: "Génération de scripts à utiliser pour les enregistrements et les événements en direct"
          },
          "ja-JP": {
            singular: "録画およびライブイベントで使用するスクリプトの生成"
          },
          "ko-KR": {
            singular: "녹화 및 라이브 이벤트에 사용할 스크립트 생성"
          },
          "pt-BR": {
            singular: "Geração de roteiros para gravações e eventos ao vivo"
          },
          "zh-CN": {
            singular: "生成用于录制和直播活动的脚本"
          }
        }
      })
    }, {
      key: "highlights",
      policyName: "AI Highlights",
      label: (0, _v11.translate)({
        singular: "Highlights",
        dictionary: {
          es: {
            singular: "Destacados"
          },
          "de-DE": {
            singular: "Höhepunkte"
          },
          "fr-FR": {
            singular: "Moments forts"
          },
          "ja-JP": {
            singular: "ハイライト"
          },
          "ko-KR": {
            singular: "하이라이트"
          },
          "pt-BR": {
            singular: "Destaques"
          },
          "zh-CN": {
            singular: "精彩片段"
          }
        }
      }),
      description: (0, _v11.translate)({
        singular: "Generation of video clips from a video.",
        dictionary: {
          es: {
            singular: "Generación de clips de video a partir de un video."
          },
          "de-DE": {
            singular: "Erstellung von Videoclips aus einem Video."
          },
          "fr-FR": {
            singular: "Génération de clips vidéo à partir d'une vidéo."
          },
          "ja-JP": {
            singular: "動画からのクリップ生成。"
          },
          "ko-KR": {
            singular: "동영상에서 클립 생성."
          },
          "pt-BR": {
            singular: "Geração de clipes de vídeo a partir de um vídeo."
          },
          "zh-CN": {
            singular: "从视频中生成视频片段。"
          }
        }
      })
    }, {
      key: "live_captions",
      policyName: "AI Live Captions",
      label: (0, _v11.translate)({
        singular: "Live captions",
        dictionary: {
          es: {
            singular: "Subtítulos en directo"
          },
          "de-DE": {
            singular: "Live‑Untertitel"
          },
          "fr-FR": {
            singular: "Sous-titres en direct"
          },
          "ja-JP": {
            singular: "ライブ字幕"
          },
          "ko-KR": {
            singular: "실시간 자막"
          },
          "pt-BR": {
            singular: "Legendas ao vivo"
          },
          "zh-CN": {
            singular: "实时字幕"
          }
        }
      }),
      description: (0, _v11.translate)({
        singular: "Live events captions or dubbing",
        dictionary: {
          es: {
            singular: "Subtítulos o doblaje en eventos en vivo"
          },
          "de-DE": {
            singular: "Untertitel oder Synchronisation für Live-Events"
          },
          "fr-FR": {
            singular: "Sous-titres ou doublage des événements en direct"
          },
          "ja-JP": {
            singular: "ライブイベントの字幕または吹き替え"
          },
          "ko-KR": {
            singular: "라이브 이벤트 자막 또는 더빙"
          },
          "pt-BR": {
            singular: "Legendas ou dublagem para eventos ao vivo"
          },
          "zh-CN": {
            singular: "直播活动字幕或配音"
          }
        }
      })
    }],
    _v43 = (_v0, _v1) => !!_v0?.some(_v0 => _v0.name === _v1);
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0);
  let _v59 = _v0 => (0, _v1.jsx)(_v19.Text, {
      as: "span",
      fontWeight: 700,
      children: _v0
    }),
    _v60 = ({
      isOpen: _v0,
      memberName: _v1,
      currentLimit: _v2,
      maxCredits: _v3,
      currentUsage: _v4,
      resetDate: _v5,
      onClose: _v6,
      onSave: _v7
    }) => {
      let [_v8, _v9] = (0, _v12.useState)(null === _v2 ? "none" : "custom"),
        [_v10, _v11] = (0, _v12.useState)(null === _v2 ? "" : String(_v2)),
        _v12 = "" === _v10.trim() ? null : Number(_v10),
        _v13 = null !== _v12 && null !== _v3 && _v3 > 0 && _v12 > _v3,
        _v14 = "custom" === _v8 && null !== _v12 && null !== _v4 && _v12 < _v4,
        _v15 = "none" === _v8 || null !== _v12 && _v12 >= 0 && !_v14,
        _v16 = _v5 ? new Date(_v5).toLocaleDateString(void 0, {
          day: "numeric",
          month: "short",
          year: "numeric"
        }) : null;
      return (0, _v1.jsxs)(_v51.Modal, {
        isOpen: _v0,
        onClose: _v6,
        size: "md",
        isCentered: !0,
        children: [(0, _v1.jsx)(_v57.ModalOverlay, {}), (0, _v1.jsxs)(_v54.ModalContent, {
          maxW: (0, _v8.rem)(480),
          children: [(0, _v1.jsxs)(_v56.ModalHeader, {
            pr: "7",
            pb: "sm",
            children: [(0, _v1.jsx)(_v19.Text, {
              fontWeight: 700,
              fontSize: (0, _v8.rem)(20),
              children: (0, _v11.translate)({
                singular: "Edit AI credits limit",
                dictionary: {
                  es: {
                    singular: "Editar límite de créditos de AI"
                  },
                  "de-DE": {
                    singular: "Limit für AI-Credits bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier la limite de crédits AI"
                  },
                  "ja-JP": {
                    singular: "AIクレジットの上限を編集"
                  },
                  "ko-KR": {
                    singular: "AI 크레딧 한도 편집"
                  },
                  "pt-BR": {
                    singular: "Editar limite de créditos de AI"
                  },
                  "zh-CN": {
                    singular: "编辑 AI 积分上限"
                  }
                }
              })
            }), (0, _v1.jsx)(_v19.Text, {
              color: "text-secondary",
              variant: "body-md",
              mt: (0, _v8.rem)(8),
              children: (0, _v11.translate)({
                singular: "Set the maximum number of AI credits {bold}{name}{/bold} can use during the current period. Credits aren't reserved or allocated to them.",
                replacements: {
                  bold: _v59,
                  name: _v1
                },
                dictionary: {
                  es: {
                    singular: "Establece el número máximo de créditos de IA que {bold}{name}{/bold} puede usar durante el período actual. Los créditos no se reservan ni se asignan a dicha persona."
                  },
                  "de-DE": {
                    singular: "Legt die maximale Anzahl an KI-Credits fest, die {bold}{name}{/bold} während des aktuellen Zeitraums verwenden kann. Credits werden ihnen nicht reserviert oder zugewiesen."
                  },
                  "fr-FR": {
                    singular: "Définissez le nombre maximal de crédits d'IA que {bold}{name}{/bold} peut utiliser pendant la période en cours. Les crédits ne leur sont ni réservés ni alloués."
                  },
                  "ja-JP": {
                    singular: "現在の期間中に {bold}{name}{/bold} が使用できる AI クレジットの最大数を設定します。クレジットは予約または割り当てられるものではありません。"
                  },
                  "ko-KR": {
                    singular: "현재 기간 동안 {bold}{name}{/bold}이(가) 사용할 수 있는 AI 크레딧의 최대 수를 설정합니다. 크레딧은 예약되거나 할당되지 않습니다."
                  },
                  "pt-BR": {
                    singular: "Defina o número máximo de créditos de IA que {bold}{name}{/bold} pode usar durante o período atual. Os créditos não são reservados nem alocados a essa pessoa."
                  },
                  "zh-CN": {
                    singular: "设置 {bold}{name}{/bold} 在当前周期内可使用的 AI 积分上限。积分不会被保留或分配给其。"
                  }
                }
              })
            })]
          }), (0, _v1.jsx)(_v53.ModalCloseButton, {}), (0, _v1.jsx)(_v52.ModalBody, {
            children: (0, _v1.jsxs)(_v33.Stack, {
              spacing: (0, _v8.rem)(16),
              children: [(0, _v1.jsxs)(_v46.FormControl, {
                children: [(0, _v1.jsx)(_v47.FormLabel, {
                  fontWeight: 600,
                  children: (0, _v11.translate)({
                    singular: "Credits limits",
                    dictionary: {
                      es: {
                        singular: "Límites de créditos"
                      },
                      "de-DE": {
                        singular: "Credits-Limits"
                      },
                      "fr-FR": {
                        singular: "Limites de crédits"
                      },
                      "ja-JP": {
                        singular: "クレジットの制限"
                      },
                      "ko-KR": {
                        singular: "크레딧 한도"
                      },
                      "pt-BR": {
                        singular: "Limites de créditos"
                      },
                      "zh-CN": {
                        singular: "积分限制"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v50.Select, {
                  size: "md",
                  items: [{
                    label: (0, _v11.translate)({
                      singular: "No limits",
                      dictionary: {
                        es: {
                          singular: "Sin límites"
                        },
                        "de-DE": {
                          singular: "Keine Beschränkungen"
                        },
                        "fr-FR": {
                          singular: "Sans limites"
                        },
                        "ja-JP": {
                          singular: "制限なし"
                        },
                        "ko-KR": {
                          singular: "제한 없음"
                        },
                        "pt-BR": {
                          singular: "Sem limites"
                        },
                        "zh-CN": {
                          singular: "无限制"
                        }
                      }
                    }),
                    value: "none"
                  }, {
                    label: (0, _v11.translate)({
                      singular: "Custom limit",
                      dictionary: {
                        es: {
                          singular: "Límite personalizado"
                        },
                        "de-DE": {
                          singular: "Benutzerdefiniertes Limit"
                        },
                        "fr-FR": {
                          singular: "Limite personnalisée"
                        },
                        "ja-JP": {
                          singular: "カスタム上限"
                        },
                        "ko-KR": {
                          singular: "사용자 지정 한도"
                        },
                        "pt-BR": {
                          singular: "Limite personalizado"
                        },
                        "zh-CN": {
                          singular: "自定义限制"
                        }
                      }
                    }),
                    value: "custom"
                  }],
                  leftIcon: "none" === _v8 ? (0, _v1.jsx)(_v58.PersonUser, {}) : (0, _v1.jsx)(_v9.FiltersLevers, {}),
                  onValueChange: _v0 => _v9(_v0.value[0] ?? "none"),
                  value: [_v8],
                  children: _v0 => (0, _v1.jsx)(_v50.SelectItem, {
                    label: _v0.label,
                    children: (0, _v1.jsxs)(_v18.HStack, {
                      spacing: (0, _v8.rem)(8),
                      children: ["none" === _v0.value ? (0, _v1.jsx)(_v58.PersonUser, {}) : (0, _v1.jsx)(_v9.FiltersLevers, {}), (0, _v1.jsx)(_v50.SelectItemText, {
                        children: _v0.label
                      })]
                    })
                  })
                })]
              }), "custom" === _v8 && (0, _v1.jsx)(_v46.FormControl, {
                children: (0, _v1.jsx)(_v49.InputGroup, {
                  children: (0, _v1.jsx)(_v48.Input, {
                    inputMode: "numeric",
                    placeholder: "2,500",
                    value: _v10,
                    onChange: _v0 => _v11(_v0.target.value.replace(/[^0-9]/g, ""))
                  })
                })
              }), _v16 && (0, _v1.jsx)(_v19.Text, {
                color: "text-secondary",
                fontSize: (0, _v8.rem)(12),
                fontWeight: 350,
                lineHeight: "120%",
                letterSpacing: "-0.02em",
                children: (0, _v11.translate)({
                  singular: "Maximum: {max} credits. Limits reset on {date}.",
                  replacements: {
                    max: (_v3 ?? 0).toLocaleString(),
                    date: _v16
                  },
                  dictionary: {
                    es: {
                      singular: "Máximo: {max} créditos. Los límites se restablecen el {date}."
                    },
                    "de-DE": {
                      singular: "Maximal: {max} Credits. Limits werden am {date} zurückgesetzt."
                    },
                    "fr-FR": {
                      singular: "Maximum : {max} crédits. Les limites sont réinitialisées le {date}."
                    },
                    "ja-JP": {
                      singular: "最大：{max} クレジット。制限は{date}にリセットされます。"
                    },
                    "ko-KR": {
                      singular: "최대: {max} 크레딧. 한도는 {date}에 재설정됩니다."
                    },
                    "pt-BR": {
                      singular: "Máximo: {max} créditos. Limites são redefinidos em {date}."
                    },
                    "zh-CN": {
                      singular: "最大值：{max} 积分。额度将于 {date} 重置。"
                    }
                  }
                })
              }), _v14 && (0, _v1.jsx)(_v44.Alert, {
                status: "info",
                children: (0, _v1.jsx)(_v19.Text, {
                  variant: "body-md",
                  children: (0, _v11.translate)({
                    singular: "This limit is below the credits this member has already used. The minimum limit you can set is {min} credits.",
                    replacements: {
                      min: (_v4 ?? 0).toLocaleString()
                    },
                    dictionary: {
                      es: {
                        singular: "Este límite es inferior a los créditos que este miembro ya ha utilizado. El límite mínimo que puede establecer es de {min} créditos."
                      },
                      "de-DE": {
                        singular: "Dieses Limit liegt unter den Credits, die dieses Mitglied bereits genutzt hat. Das Mindestlimit, das Sie setzen können, beträgt {min} Credits."
                      },
                      "fr-FR": {
                        singular: "Cette limite est inférieure au nombre de crédits que ce membre a déjà utilisés. La limite minimale que vous pouvez définir est de {min} crédits."
                      },
                      "ja-JP": {
                        singular: "この制限は、そのメンバーが既に使用したクレジット数よりも低くなっています。設定できる最小値は{min}クレジットです。"
                      },
                      "ko-KR": {
                        singular: "이 한도는 이 회원이 이미 사용한 크레딧보다 낮습니다. 설정할 수 있는 최소 한도는 {min} 크레딧입니다."
                      },
                      "pt-BR": {
                        singular: "Este limite é inferior aos créditos que este membro já utilizou. O limite mínimo que você pode definir é de {min} créditos."
                      },
                      "zh-CN": {
                        singular: "该限制低于该成员已使用的积分. 您可以设置的最小限制为 {min} 积分."
                      }
                    }
                  })
                })
              }), _v13 && (0, _v1.jsx)(_v44.Alert, {
                status: "info",
                children: (0, _v1.jsx)(_v19.Text, {
                  variant: "body-md",
                  children: (0, _v11.translate)({
                    singular: "This limit exceeds the account's available credits. You can set this higher limit now and contact Sales if more credits are needed.",
                    dictionary: {
                      es: {
                        singular: "Este límite supera los créditos disponibles de la cuenta. Puedes establecer este límite más alto ahora y contactar con el equipo de Ventas si se necesitan más créditos."
                      },
                      "de-DE": {
                        singular: "Dieses Limit überschreitet die im Konto verfügbaren Credits. Sie können dieses höhere Limit jetzt festlegen und Sales kontaktieren, falls weitere Credits benötigt werden."
                      },
                      "fr-FR": {
                        singular: "Cette limite dépasse les crédits disponibles du compte. Vous pouvez définir cette limite plus élevée maintenant et contacter le service commercial si davantage de crédits sont nécessaires."
                      },
                      "ja-JP": {
                        singular: "この上限はアカウントの利用可能なクレジットを超えています。今すぐこの高い上限を設定できます。さらにクレジットが必要な場合は Sales にお問い合わせください。"
                      },
                      "ko-KR": {
                        singular: "이 한도는 계정의 사용 가능한 크레딧을 초과합니다. 지금 더 높은 한도를 설정할 수 있으며, 추가 크레딧이 필요하면 영업팀에 문의하세요."
                      },
                      "pt-BR": {
                        singular: "Este limite excede os créditos disponíveis da conta. Você pode definir esse limite maior agora e entrar em contato com o time de Vendas se forem necessários mais créditos."
                      },
                      "zh-CN": {
                        singular: "该限制超过了账户可用的积分。您可以现在设置更高的限制，如果需要更多积分，请联系销售。"
                      }
                    }
                  })
                })
              })]
            })
          }), (0, _v1.jsxs)(_v55.ModalFooter, {
            display: "block",
            children: [(0, _v1.jsx)(_v17.Divider, {
              borderColor: "stroke",
              opacity: .6,
              mb: (0, _v8.rem)(16)
            }), (0, _v1.jsxs)(_v18.HStack, {
              justifyContent: "flex-end",
              gap: (0, _v8.rem)(8),
              children: [(0, _v1.jsx)(_v45.Button, {
                variant: "secondary",
                onClick: _v6,
                children: (0, _v11.translate)({
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
              }), (0, _v1.jsx)(_v45.Button, {
                variant: "primary",
                isDisabled: !_v15,
                onClick: () => {
                  _v7("none" === _v8 ? null : _v12);
                },
                children: (0, _v11.translate)({
                  singular: "Save",
                  dictionary: {
                    es: {
                      singular: "Guardar"
                    },
                    "de-DE": {
                      singular: "Speichern"
                    },
                    "fr-FR": {
                      singular: "Enregistrer"
                    },
                    "ja-JP": {
                      singular: "保存"
                    },
                    "ko-KR": {
                      singular: "저장"
                    },
                    "pt-BR": {
                      singular: "Salvar"
                    },
                    "zh-CN": {
                      singular: "保存"
                    }
                  }
                })
              })]
            })]
          })]
        })]
      });
    };
  var _v61 = _v0.i(0);
  let _v62 = "account_disabled_ai_features,ai_credit_limit,user.name,current_team_permission_policies,applicable_permission_policies.ai.name",
    _v63 = (_v0, _v1) => `/users/${_v0}/team_users/${_v1}`,
    _v64 = (_v0, _v1, _v2) => (0, _v61.makeApiCall)(`${_v63(_v1, _v2)}?fields=${encodeURIComponent(_v62)}`, _v0),
    _v65 = async (_v0, _v1, _v2) => {
      try {
        return await (0, _v61.makeApiCall)(`/users/${_v1}/ai_credits/usage?spender_user_id=${_v2}`, _v0);
      } catch {
        return null;
      }
    },
    _v66 = ({
      teamUserId: _v0
    }) => {
      let _v1 = (0, _v37.useToast)(),
        _v2 = (0, _v12.useContext)(_v25.ViewerContext),
        {
          userId: _v3
        } = (0, _v12.useContext)(_v24.TeamUserInfoState),
        _v4 = _v2?.teamUser?.ownerId ?? _v2?.user?.id,
        [_v5, _v6] = (0, _v12.useState)(null),
        [_v7, _v8] = (0, _v12.useState)(null),
        [_v9, _v10] = (0, _v12.useState)(!1),
        [_v11, _v12] = (0, _v12.useState)(null);
      (0, _v12.useEffect)(() => {
        let _v0 = !1;
        return (async () => {
          if (_v2) try {
            let _v0 = await _v64(_v2, _v4, _v0);
            _v0 || _v6(_v0);
          } catch {
            _v0 || _v1({
              title: (0, _v11.translate)({
                singular: "Couldn't load this member's settings. Please try again.",
                dictionary: {
                  es: {
                    singular: "No se pudieron cargar los ajustes de este miembro. Vuelva a intentarlo."
                  },
                  "de-DE": {
                    singular: "Die Einstellungen dieses Mitglieds konnten nicht geladen werden. Bitte versuchen Sie es erneut."
                  },
                  "fr-FR": {
                    singular: "Impossible de charger les paramètres de ce membre. Veuillez réessayer."
                  },
                  "ja-JP": {
                    singular: "このメンバーの設定を読み込めませんでした。もう一度お試しください。"
                  },
                  "ko-KR": {
                    singular: "이 구성원의 설정을 불러올 수 없습니다. 다시 시도해 주세요."
                  },
                  "pt-BR": {
                    singular: "Não foi possível carregar as configurações deste membro. Por favor, tente novamente."
                  },
                  "zh-CN": {
                    singular: "无法加载此成员的设置。请重试。"
                  }
                }
              }),
              status: "error",
              duration: 0,
              isClosable: !0
            });
          }
        })(), () => {
          _v0 = !0;
        };
      }, [_v2, _v4, _v0, _v1]), (0, _v12.useEffect)(() => {
        let _v0 = !1;
        return (async () => {
          if (!_v2 || !_v3 || !_v4) return;
          let _v0 = await _v65(_v2, _v4, _v3);
          _v0 || _v8(_v0);
        })(), () => {
          _v0 = !0;
        };
      }, [_v2, _v3, _v4]);
      let _v13 = async () => {
          _v2 && (_v6(await _v64(_v2, _v4, _v0)), _v3 && _v4 && _v8(await _v65(_v2, _v4, _v3)));
        },
        _v14 = async (_v0, _v1) => {
          if (_v2) {
            _v12(_v0);
            try {
              await (0, _v61.makeApiCall)(`${_v63(_v4, _v0)}?fields=${encodeURIComponent(_v62)}`, _v2, "PATCH", _v1), await _v13();
            } catch {
              _v1({
                title: (0, _v11.translate)({
                  singular: "Couldn't update this setting. Please try again.",
                  dictionary: {
                    es: {
                      singular: "No se pudo actualizar esta configuración. Vuelva a intentarlo."
                    },
                    "de-DE": {
                      singular: "Diese Einstellung konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut."
                    },
                    "fr-FR": {
                      singular: "Impossible de mettre à jour ce paramètre. Veuillez réessayer."
                    },
                    "ja-JP": {
                      singular: "この設定を更新できませんでした。もう一度お試しください。"
                    },
                    "ko-KR": {
                      singular: "이 설정을 업데이트할 수 없습니다. 다시 시도해 주세요."
                    },
                    "pt-BR": {
                      singular: "Não foi possível atualizar esta configuração. Por favor, tente novamente."
                    },
                    "zh-CN": {
                      singular: "无法更新此设置。请重试。"
                    }
                  }
                }),
                status: "error",
                duration: 0,
                isClosable: !0
              });
            } finally {
              _v12(null);
            }
          }
        },
        _v15 = _v43(_v5?.currentTeamPermissionPolicies, "AI User"),
        _v16 = _v5?.applicablePermissionPolicies?.ai,
        _v17 = !!_v16?.length,
        _v18 = _v7?.quotaEnd ? new Date(_v7.quotaEnd).toLocaleDateString(void 0, {
          day: "numeric",
          month: "short",
          year: "numeric"
        }) : null,
        _v19 = _v5?.aiCreditLimit === 0,
        _v20 = _v5?.aiCreditLimit == null ? _v7?.accountLimit : _v7?.cap,
        _v21 = _v7 && null != _v20 && _v20 > 0 ? Math.min(100, Math.round(_v7.usage / _v20 * 100)) : null;
      return _v2 ? _v17 ? (0, _v1.jsxs)(_v13.Accordion, {
        allowMultiple: !0,
        defaultIndex: [0],
        children: [(0, _v1.jsx)(_v15.AccordionItem, {
          background: "background",
          _hover: {
            background: "background"
          },
          children: ({
            isExpanded: _v0
          }) => (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsxs)(_v18.HStack, {
              width: "100%",
              alignItems: "center",
              gap: (0, _v8.rem)(8),
              p: (0, _v8.rem)(16),
              children: [(0, _v1.jsx)(_v30.Flex, {
                alignItems: "center",
                justifyContent: "center",
                boxSize: (0, _v8.rem)(40),
                borderRadius: (0, _v8.rem)(8),
                bgColor: "fill-component",
                flexShrink: 0,
                children: (0, _v1.jsx)(_v38.AiSparkles, {
                  boxSize: "sm"
                })
              }), (0, _v1.jsxs)(_v36.VStack, {
                alignItems: "flex-start",
                spacing: (0, _v8.rem)(2),
                minWidth: 0,
                flex: "1",
                children: [(0, _v1.jsx)(_v19.Text, {
                  fontWeight: 700,
                  fontSize: (0, _v8.rem)(16),
                  children: (0, _v11.translate)({
                    singular: "Vimeo AI",
                    dictionary: {
                      "fr-FR": {
                        singular: "IA Vimeo"
                      }
                    }
                  })
                }), (0, _v1.jsx)(_v19.Text, {
                  color: "text-secondary",
                  fontSize: (0, _v8.rem)(13),
                  children: (0, _v11.translate)({
                    singular: "AI-powered tools for your video workflow",
                    dictionary: {
                      es: {
                        singular: "Herramientas impulsadas por AI para su flujo de trabajo de video"
                      },
                      "de-DE": {
                        singular: "AI-gestützte Tools für Ihren Video-Workflow"
                      },
                      "fr-FR": {
                        singular: "Outils AI pour votre flux de travail vidéo"
                      },
                      "ja-JP": {
                        singular: "動画ワークフロー向けのAI搭載ツール"
                      },
                      "ko-KR": {
                        singular: "비디오 작업 흐름을 위한 AI 기반 도구"
                      },
                      "pt-BR": {
                        singular: "Ferramentas com tecnologia AI para seu fluxo de trabalho de vídeo"
                      },
                      "zh-CN": {
                        singular: "为您的视频工作流程提供 AI 驱动的工具"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v34.Switch, {
                isChecked: _v15,
                isDisabled: "master" === _v11,
                onChange: () => {
                  _v14("master", {
                    ai_permission: !_v15
                  });
                },
                "aria-label": (0, _v11.translate)({
                  singular: "Vimeo AI",
                  dictionary: {
                    "fr-FR": {
                      singular: "IA Vimeo"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v14.AccordionButton, {
                width: "auto",
                minWidth: 0,
                p: 0,
                backgroundColor: "transparent",
                _hover: {
                  background: "none"
                },
                "aria-label": (0, _v11.translate)({
                  singular: "Vimeo AI",
                  dictionary: {
                    "fr-FR": {
                      singular: "IA Vimeo"
                    }
                  }
                }),
                children: _v0 ? (0, _v1.jsx)(_v21.ChevronUpSmall, {}) : (0, _v1.jsx)(_v20.ChevronDownSmall, {})
              })]
            }), (0, _v1.jsx)(_v16.AccordionPanel, {
              backgroundColor: "transparent",
              children: (0, _v1.jsxs)(_v33.Stack, {
                spacing: (0, _v8.rem)(24),
                children: [(0, _v1.jsxs)(_v33.Stack, {
                  spacing: (0, _v8.rem)(12),
                  children: [(0, _v1.jsx)(_v19.Text, {
                    fontWeight: 600,
                    color: "text-tertiary",
                    children: (0, _v11.translate)({
                      singular: "Credits consumption",
                      dictionary: {
                        es: {
                          singular: "Consumo de créditos"
                        },
                        "de-DE": {
                          singular: "Credits-Verbrauch"
                        },
                        "fr-FR": {
                          singular: "Consommation de crédits"
                        },
                        "ja-JP": {
                          singular: "クレジット消費量"
                        },
                        "ko-KR": {
                          singular: "크레딧 사용량"
                        },
                        "pt-BR": {
                          singular: "Consumo de créditos"
                        },
                        "zh-CN": {
                          singular: "积分消耗"
                        }
                      }
                    })
                  }), (0, _v1.jsxs)(_v33.Stack, {
                    spacing: (0, _v8.rem)(4),
                    children: [(0, _v1.jsx)(_v19.Text, {
                      fontWeight: 700,
                      children: (0, _v11.translate)({
                        singular: "AI credits limit",
                        dictionary: {
                          es: {
                            singular: "Límite de créditos de AI"
                          },
                          "de-DE": {
                            singular: "Limit für AI-Credits"
                          },
                          "fr-FR": {
                            singular: "Limite de crédits AI"
                          },
                          "ja-JP": {
                            singular: "AIクレジットの上限"
                          },
                          "ko-KR": {
                            singular: "AI 크레딧 한도"
                          },
                          "pt-BR": {
                            singular: "Limite de créditos AI"
                          },
                          "zh-CN": {
                            singular: "AI 积分上限"
                          }
                        }
                      })
                    }), (0, _v1.jsxs)(_v18.HStack, {
                      alignItems: "center",
                      gap: (0, _v8.rem)(8),
                      children: [(0, _v1.jsx)(_v19.Text, {
                        fontWeight: 600,
                        fontSize: (0, _v8.rem)(16),
                        children: _v5?.aiCreditLimit != null ? _v5.aiCreditLimit.toLocaleString() : (0, _v11.translate)({
                          singular: "no limits",
                          dictionary: {
                            es: {
                              singular: "sin límites"
                            },
                            "de-DE": {
                              singular: "keine Begrenzung"
                            },
                            "fr-FR": {
                              singular: "sans limites"
                            },
                            "ja-JP": {
                              singular: "制限なし"
                            },
                            "ko-KR": {
                              singular: "제한 없음"
                            },
                            "pt-BR": {
                              singular: "sem limites"
                            },
                            "zh-CN": {
                              singular: "无限制"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v19.Text, {
                        color: "text-secondary",
                        fontSize: (0, _v8.rem)(13),
                        children: (0, _v11.translate)({
                          singular: "per current period",
                          dictionary: {
                            es: {
                              singular: "por período actual"
                            },
                            "de-DE": {
                              singular: "im aktuellen Zeitraum"
                            },
                            "fr-FR": {
                              singular: "pour la période en cours"
                            },
                            "ja-JP": {
                              singular: "現在の期間あたり"
                            },
                            "ko-KR": {
                              singular: "현재 기간 기준"
                            },
                            "pt-BR": {
                              singular: "no período atual"
                            },
                            "zh-CN": {
                              singular: "在当前周期内"
                            }
                          }
                        })
                      }), (0, _v1.jsx)(_v31.IconButton, {
                        icon: (0, _v1.jsx)(_v40.EditPencil, {
                          boxSize: "xs"
                        }),
                        "aria-label": (0, _v11.translate)({
                          singular: "Edit limit",
                          dictionary: {
                            es: {
                              singular: "Límite de edición"
                            },
                            "de-DE": {
                              singular: "Bearbeitungslimit"
                            },
                            "fr-FR": {
                              singular: "Limite d'édition"
                            },
                            "ja-JP": {
                              singular: "編集上限"
                            },
                            "ko-KR": {
                              singular: "편집 한도"
                            },
                            "pt-BR": {
                              singular: "Limite de edição"
                            },
                            "zh-CN": {
                              singular: "编辑上限"
                            }
                          }
                        }),
                        size: "sm",
                        variant: "secondary",
                        onClick: () => _v10(!0),
                        isDisabled: "limit" === _v11
                      })]
                    })]
                  }), !_v19 && _v7 && null != _v20 && null != _v21 && (0, _v1.jsxs)(_v33.Stack, {
                    spacing: (0, _v8.rem)(12),
                    children: [(0, _v1.jsx)(_v19.Text, {
                      color: "text-secondary",
                      children: (0, _v11.translate)({
                        singular: "Usage",
                        dictionary: {
                          es: {
                            singular: "Uso"
                          },
                          "de-DE": {
                            singular: "Nutzung"
                          },
                          "fr-FR": {
                            singular: "Utilisation"
                          },
                          "ja-JP": {
                            singular: "使用状況"
                          },
                          "ko-KR": {
                            singular: "사용량"
                          },
                          "pt-BR": {
                            singular: "Uso"
                          },
                          "zh-CN": {
                            singular: "使用情况"
                          }
                        }
                      })
                    }), (0, _v1.jsxs)(_v33.Stack, {
                      spacing: (0, _v8.rem)(8),
                      children: [(0, _v1.jsxs)(_v18.HStack, {
                        alignItems: "center",
                        gap: (0, _v8.rem)(4),
                        children: [(0, _v1.jsx)(_v19.Text, {
                          children: (0, _v11.translate)({
                            singular: "{used} of {total} used",
                            replacements: {
                              used: _v7.usage.toLocaleString(),
                              total: _v20.toLocaleString()
                            },
                            dictionary: {
                              es: {
                                singular: "{used} de {total} usados"
                              },
                              "de-DE": {
                                singular: "{used} von {total} verwendet"
                              },
                              "fr-FR": {
                                singular: "{used} sur {total} utilisés"
                              },
                              "ja-JP": {
                                singular: "{total}中{used}使用済み"
                              },
                              "ko-KR": {
                                singular: "{total} 중 {used} 사용됨"
                              },
                              "pt-BR": {
                                singular: "{used} de {total} usados"
                              },
                              "zh-CN": {
                                singular: "{used} / {total} 已使用"
                              }
                            }
                          })
                        }), _v18 ? (0, _v1.jsx)(_v35.Tooltip, {
                          label: (0, _v11.translate)({
                            singular: "Renews at {date}",
                            replacements: {
                              date: _v18
                            },
                            dictionary: {
                              es: {
                                singular: "Se renueva el {date}"
                              },
                              "de-DE": {
                                singular: "Erneuert sich am {date}"
                              },
                              "fr-FR": {
                                singular: "Renouvelle le {date}"
                              },
                              "ja-JP": {
                                singular: "{date} に更新されます"
                              },
                              "ko-KR": {
                                singular: "{date}에 갱신됩니다."
                              },
                              "pt-BR": {
                                singular: "Renova em {date}"
                              },
                              "zh-CN": {
                                singular: "续订于 {date}"
                              }
                            }
                          }),
                          children: (0, _v1.jsx)(_v29.Box, {
                            as: "span",
                            display: "inline-flex",
                            alignItems: "center",
                            children: (0, _v1.jsx)(_v41.InfoCircle, {
                              boxSize: (0, _v8.rem)(16),
                              color: "text-secondary"
                            })
                          })
                        }) : (0, _v1.jsx)(_v41.InfoCircle, {
                          boxSize: (0, _v8.rem)(16),
                          color: "text-secondary"
                        })]
                      }), (0, _v1.jsx)(_v32.Progress, {
                        value: _v21,
                        colorScheme: "vimeoBlue",
                        height: (0, _v8.rem)(4),
                        borderRadius: (0, _v8.rem)(2)
                      })]
                    })]
                  })]
                }), (0, _v1.jsxs)(_v33.Stack, {
                  spacing: (0, _v8.rem)(16),
                  children: [(0, _v1.jsx)(_v19.Text, {
                    fontWeight: 600,
                    color: "text-tertiary",
                    children: (0, _v11.translate)({
                      singular: "AI Features",
                      dictionary: {
                        es: {
                          singular: "Funciones de IA"
                        },
                        "de-DE": {
                          singular: "KI-Funktionen"
                        },
                        "fr-FR": {
                          singular: "Fonctionnalités d'IA"
                        },
                        "ja-JP": {
                          singular: "AI機能"
                        },
                        "ko-KR": {
                          singular: "AI 기능"
                        },
                        "pt-BR": {
                          singular: "Recursos de IA"
                        },
                        "zh-CN": {
                          singular: "AI 功能"
                        }
                      }
                    })
                  }), _v42.map(_v0 => {
                    let _v1,
                      _v2,
                      _v3 = _v43(_v5?.currentTeamPermissionPolicies, _v0.policyName),
                      _v4 = _v43(_v16, _v0.policyName),
                      _v5 = (_v1 = _v5?.accountDisabledAiFeatures, _v2 = _v0.policyName, !!_v1?.includes(_v2));
                    return (0, _v1.jsxs)(_v18.HStack, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: (0, _v8.rem)(16),
                      children: [(0, _v1.jsxs)(_v33.Stack, {
                        spacing: 0,
                        children: [(0, _v1.jsx)(_v19.Text, {
                          fontWeight: 700,
                          children: _v0.label
                        }), (0, _v1.jsx)(_v19.Text, {
                          color: "text-secondary",
                          fontSize: (0, _v8.rem)(13),
                          children: _v0.description
                        })]
                      }), (0, _v1.jsxs)(_v18.HStack, {
                        alignItems: "center",
                        gap: (0, _v8.rem)(8),
                        flexShrink: 0,
                        children: [(_v5 || !_v4) && (0, _v1.jsx)(_v35.Tooltip, {
                          label: _v5 ? (0, _v11.translate)({
                            singular: "This feature is disabled at the account level. To allow this user to access it, re-enable it in the account's Vimeo AI settings.",
                            dictionary: {
                              es: {
                                singular: "Esta función está desactivada a nivel de cuenta. Para permitir que este usuario acceda a ella, vuelva a activarla en la configuración de Vimeo AI de la cuenta."
                              },
                              "de-DE": {
                                singular: "Diese Funktion ist auf Kontoebene deaktiviert. Um diesem Benutzer Zugriff zu gewähren, aktivieren Sie sie in den Vimeo AI-Einstellungen des Kontos wieder."
                              },
                              "fr-FR": {
                                singular: "Cette fonctionnalité est désactivée au niveau du compte. Pour permettre à cet utilisateur d'y accéder, réactivez-la dans les paramètres Vimeo AI du compte."
                              },
                              "ja-JP": {
                                singular: "この機能はアカウントレベルで無効になっています。ユーザーにアクセスを許可するには、アカウントの Vimeo AI 設定で再度有効にしてください。"
                              },
                              "ko-KR": {
                                singular: "이 기능은 계정 수준에서 비활성화되어 있습니다. 이 사용자가 해당 기능에 접근할 수 있도록 하려면 계정의 Vimeo AI 설정에서 다시 활성화하세요."
                              },
                              "pt-BR": {
                                singular: "Este recurso está desativado no nível da conta. Para permitir o acesso deste usuário a ele, reative-o nas Vimeo AI settings da conta."
                              },
                              "zh-CN": {
                                singular: "此功能在账户级别已被禁用。要允许该用户访问，请在账户的 Vimeo AI 设置中重新启用它。"
                              }
                            }
                          }) : (0, _v11.translate)({
                            singular: "Not available for this member",
                            dictionary: {
                              es: {
                                singular: "No disponible para este miembro"
                              },
                              "de-DE": {
                                singular: "Für dieses Mitglied nicht verfügbar"
                              },
                              "fr-FR": {
                                singular: "Non disponible pour ce membre"
                              },
                              "ja-JP": {
                                singular: "この会員には利用できません"
                              },
                              "ko-KR": {
                                singular: "이 회원에게는 이용할 수 없습니다"
                              },
                              "pt-BR": {
                                singular: "Não disponível para este membro"
                              },
                              "zh-CN": {
                                singular: "对该成员不可用"
                              }
                            }
                          }),
                          children: (0, _v1.jsx)("span", {
                            children: (0, _v1.jsx)(_v39.CircleExclamation, {
                              boxSize: (0, _v8.rem)(20),
                              color: _v5 ? "status-caution-primary" : "text-secondary"
                            })
                          })
                        }), (0, _v1.jsx)(_v34.Switch, {
                          isChecked: _v3,
                          isDisabled: _v11 === _v0.key || !_v15 || _v5 || !_v4,
                          onChange: () => {
                            var _v0;
                            _v14(_v0 = _v0.key, {
                              ai_features: {
                                [_v0]: !_v3
                              }
                            });
                          },
                          "aria-label": _v0.label
                        })]
                      })]
                    }, _v0.key);
                  })]
                })]
              })
            })]
          })
        }), (0, _v1.jsx)(_v60, {
          isOpen: _v9,
          memberName: _v5?.user?.name ?? "",
          currentLimit: _v5?.aiCreditLimit ?? null,
          maxCredits: _v7?.accountLimit ?? null,
          currentUsage: _v7?.usage ?? null,
          resetDate: _v7?.quotaEnd ?? null,
          onClose: () => _v10(!1),
          onSave: _v0 => {
            _v10(!1), _v14("limit", {
              ai_credit_limit: _v0
            });
          }
        }, `${_v5?.aiCreditLimit ?? "none"}-${String(_v9)}`)]
      }) : (0, _v1.jsx)(_v19.Text, {
        color: "text-secondary",
        py: (0, _v8.rem)(24),
        children: (0, _v11.translate)({
          singular: "No feature access settings are available for this team member.",
          dictionary: {
            es: {
              singular: "No hay ajustes de acceso a funciones disponibles para este miembro del equipo."
            },
            "de-DE": {
              singular: "Für dieses Teammitglied sind keine Einstellungen zum Zugriff auf Funktionen verfügbar."
            },
            "fr-FR": {
              singular: "Aucun réglage d'accès aux fonctionnalités n'est disponible pour ce membre de l'équipe."
            },
            "ja-JP": {
              singular: "このチームメンバーには機能アクセス設定が利用できません。"
            },
            "ko-KR": {
              singular: "이 팀 구성원에 대한 기능 액세스 설정이 없습니다."
            },
            "pt-BR": {
              singular: "Nenhuma configuração de acesso a recursos está disponível para este membro da equipe."
            },
            "zh-CN": {
              singular: "此团队成员暂无可用的功能访问设置。"
            }
          }
        })
      }) : null;
    };
  _v0.s(["MemberAccessTabs", 0, ({
    teamUserId: _v0
  }) => {
    let _v1 = (0, _v2.useRouter)(),
      _v2 = +("content" === _v1.query.tab);
    return (0, _v1.jsxs)(_v4.Tabs, {
      variant: "underline",
      size: "sm",
      align: "start",
      index: _v2,
      onChange: _v0 => {
        _v1.replace({
          query: {
            ..._v1.query,
            tab: 1 === _v0 ? "content" : "features"
          }
        }, void 0, {
          shallow: !0
        });
      },
      children: [(0, _v1.jsxs)(_v5.TabList, {
        children: [(0, _v1.jsxs)(_v3.Tab, {
          width: "auto",
          px: 16,
          fontSize: (0, _v8.rem)(16),
          fontWeight: 500,
          children: [(0, _v1.jsx)(_v9.FiltersLevers, {
            boxSize: "xs",
            mr: (0, _v8.rem)(4)
          }), (0, _v11.translate)({
            singular: "Features access",
            dictionary: {
              es: {
                singular: "Acceso a funciones"
              },
              "de-DE": {
                singular: "Zugriff auf Funktionen"
              },
              "fr-FR": {
                singular: "Accès aux fonctionnalités"
              },
              "ja-JP": {
                singular: "機能アクセス"
              },
              "ko-KR": {
                singular: "기능 액세스"
              },
              "pt-BR": {
                singular: "Acesso a recursos"
              },
              "zh-CN": {
                singular: "功能访问"
              }
            }
          })]
        }), (0, _v1.jsxs)(_v3.Tab, {
          width: "auto",
          px: 16,
          fontSize: (0, _v8.rem)(16),
          fontWeight: 500,
          children: [(0, _v1.jsx)(_v10.FolderLock, {
            boxSize: "xs",
            mr: (0, _v8.rem)(4)
          }), (0, _v11.translate)({
            singular: "Content access",
            dictionary: {
              es: {
                singular: "Acceso al contenido"
              },
              "de-DE": {
                singular: "Inhaltszugriff"
              },
              "fr-FR": {
                singular: "Accès au contenu"
              },
              "ja-JP": {
                singular: "コンテンツへのアクセス"
              },
              "ko-KR": {
                singular: "콘텐츠 액세스"
              },
              "pt-BR": {
                singular: "Acesso ao conteúdo"
              },
              "zh-CN": {
                singular: "内容访问"
              }
            }
          })]
        }), (0, _v1.jsx)(_v4.TabIndicator, {
          backgroundColor: "text-primary"
        })]
      }), (0, _v1.jsxs)(_v7.TabPanels, {
        children: [(0, _v1.jsx)(_v6.TabPanel, {
          children: (0, _v1.jsx)(_v66, {
            teamUserId: _v0
          })
        }), (0, _v1.jsx)(_v6.TabPanel, {
          children: (0, _v1.jsx)(_v28, {
            teamUserId: _v0
          })
        })]
      })]
    });
  }], 0);
}