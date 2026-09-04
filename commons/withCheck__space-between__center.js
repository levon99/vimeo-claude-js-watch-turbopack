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
  let _v18 = ({
    value: _v0,
    options: _v1,
    onChange: _v2,
    isDisabled: _v3
  }) => {
    let _v4 = (0, _v7.useMemo)(() => Object.entries(_v1).map(([_v0, _v1]) => ({
      value: _v0,
      label: _v1.title,
      description: _v1.description
    })), [_v1]);
    return (0, _v1.jsx)(_v8.Box, {
      width: (0, _v17.rem)(240),
      children: (0, _v1.jsx)(_v15.Select, {
        variant: "withCheck",
        size: "md",
        items: _v4,
        onValueChange: _v0 => _v0.value.length && _v2(_v0.value[0]),
        value: _v0 ? [_v0] : [],
        withPortal: !0,
        disabled: _v3,
        children: _v0 => (0, _v1.jsx)(_v15.SelectItem, {
          children: (0, _v1.jsx)(_v2.Flex, {
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            children: (0, _v1.jsxs)(_v8.Box, {
              textAlign: "left",
              children: [(0, _v1.jsx)(_v15.SelectItemText, {
                children: _v0.label
              }), (0, _v1.jsx)(_v16.Text, {
                variant: "body-sm",
                color: "text-secondary",
                marginTop: "4px",
                children: _v0.description
              })]
            })
          })
        })
      })
    });
  };
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  let _v32 = {
      base: (0, _v17.rem)(640),
      xl: (0, _v17.rem)(720),
      "2xl": (0, _v17.rem)(960)
    },
    _v33 = "roleaao",
    _v34 = {
      [_v33]: {
        title: "Admins and Owners only",
        description: "Limit this feature to Admins and Owners"
      },
      roleewea: {
        title: "Everyone with edit access",
        description: "Allow Admins, Owners, and Contributors to use this feature"
      }
    },
    _v35 = {
      prefEnableAskAiAnalytics: "eaaa"
    },
    _v36 = {
      prefEnableAskAiAnalytics: "prefEnableAskAiAnalytics"
    },
    _v37 = {
      manageTranscriptionKeywords: "manageTranscriptionKeywords",
      enableParentPermissionAiTranslate: "enableParentPermissionAiTranslate",
      enableTranslationsProfanityFilter: "enableTranslationsProfanityFilter",
      enableTranslationsVoiceCloning: "enableTranslationsVoiceCloning",
      enableTranslationsFailureEmail: "enableTranslationsFailureEmail",
      manageAiAutomationGenerateTranslations: "manageAiAutomationGenerateTranslations",
      userRolePermissionAiTranslate: "userRolePermissionAiTranslate",
      enableParentPermissionAiVideoDetails: "enableParentPermissionAiVideoDetails",
      userRolePermissionAiVideoDetails: "userRolePermissionAiVideoDetails",
      enableAutoGenerateAiMetadata: "enableAutoGenerateAiMetadata",
      enableVideoViewerAiUi: "enableVideoViewerAiUi",
      enableLibrarySmartSearch: "enableLibrarySmartSearch",
      enableParentPermissionAiHighlights: "enableParentPermissionAiHighlights",
      userRolePermissionAiHighlights: "userRolePermissionAiHighlights",
      enableAiScriptGeneration: "enableAiScriptGeneration",
      userRolePermissionAiScriptGeneration: "userRolePermissionAiScriptGeneration",
      enableParentPermissionAiLiveCaptions: "enableParentPermissionAiLiveCaptions",
      userRolePermissionAiLiveCaptions: "userRolePermissionAiLiveCaptions",
      enableRegistrationFormAiUserTranslation: "enableRegistrationFormAiUserTranslation",
      userRolePermissionTranscriptionKeywords: "userRolePermissionTranscriptionKeywords",
      enableTranscriptionGeneration: "enableTranscriptionGeneration",
      ..._v36
    },
    _v38 = "ai_translate",
    _v39 = "video_details",
    _v40 = "highlights",
    _v41 = "script",
    _v42 = "ask_ai",
    _v43 = "transcript",
    _v44 = {
      name: {
        enableAiScriptGeneration: _v37.enableAiScriptGeneration,
        enableVideoViewerAiUi: _v37.enableVideoViewerAiUi,
        enableParentPermissionAiTranslate: _v37.enableParentPermissionAiTranslate,
        enableTranslationsProfanityFilter: _v37.enableTranslationsProfanityFilter,
        enableTranslationsVoiceCloning: _v37.enableTranslationsVoiceCloning,
        manageTranscriptionKeywords: _v37.manageTranscriptionKeywords,
        manageAiAutomationGenerateTranslations: _v37.manageAiAutomationGenerateTranslations,
        prefEnableAskAiAnalytics: _v37.prefEnableAskAiAnalytics
      },
      event: {
        enableAiScriptGeneration: "vimeo.ai_script_generation_toggle_switch",
        enableVideoViewerAiUi: "vimeo.ai_for_viewers_toggle_switch",
        enableTranslationsProfanityFilter: "vimeo.ai_profanity_filter_toggle_switch",
        manageTranscriptionKeywords: "vimeo.open_ai_vocabulary_manage",
        enableParentPermissionAiTranslate: "vimeo.ai_team_members_generate_definitions",
        enableParentPermissionAiVideoDetails: "vimeo.ai_team_members_generate_definitions",
        enableParentPermissionAiHighlights: "vimeo.ai_team_members_generate_definitions",
        enableParentPermissionAiLiveCaptions: "vimeo.ai_team_members_generate_definitions",
        enableRegistrationFormAiUserTranslation: "vimeo.ai_team_members_generate_definitions",
        userRolePermissionAiTranslate: "vimeo.ai_team_members_generate_role_definitions",
        userRolePermissionAiVideoDetails: "vimeo.ai_team_members_generate_role_definitions",
        userRolePermissionAiHighlights: "vimeo.ai_team_members_generate_role_definitions",
        userRolePermissionAiScriptGeneration: "vimeo.ai_team_members_generate_role_definitions",
        userRolePermissionAiLiveCaptions: "vimeo.ai_team_members_generate_role_definitions",
        prefEnableAskAiAnalytics: "vimeo.export_ask_ai",
        userRolePermissionTranscriptionKeywords: "vimeo.ai_team_members_generate_role_definitions"
      },
      eventFeature: {
        [_v37.manageTranscriptionKeywords]: _v43,
        [_v37.enableParentPermissionAiTranslate]: _v38,
        [_v37.userRolePermissionAiTranslate]: _v38,
        [_v37.enableTranslationsProfanityFilter]: _v38,
        [_v37.enableTranslationsVoiceCloning]: _v38,
        [_v37.enableTranslationsFailureEmail]: _v38,
        [_v37.enableParentPermissionAiVideoDetails]: _v39,
        [_v37.userRolePermissionAiVideoDetails]: _v39,
        [_v37.enableVideoViewerAiUi]: _v42,
        [_v37.enableLibrarySmartSearch]: "search",
        [_v37.enableParentPermissionAiHighlights]: _v40,
        [_v37.userRolePermissionAiHighlights]: _v40,
        [_v37.enableAiScriptGeneration]: _v41,
        [_v37.userRolePermissionAiScriptGeneration]: _v41,
        [_v37.enableParentPermissionAiLiveCaptions]: _v43,
        [_v37.enableRegistrationFormAiUserTranslation]: _v38,
        [_v37.userRolePermissionAiLiveCaptions]: _v43,
        [_v37.prefEnableAskAiAnalytics]: _v42,
        [_v37.userRolePermissionTranscriptionKeywords]: _v43,
        [_v37.enableTranscriptionGeneration]: _v43
      }
    },
    _v45 = _v0 => _v44.eventFeature[_v0],
    _v46 = () => {
      let _v0 = (0, _v31.useViewer)(),
        _v1 = (0, _v7.useCallback)(_v0 => (0, _v25.buildActionBpContext)({
          action_type: _v0,
          feature: null
        }), []),
        _v2 = (0, _v7.useCallback)(({
          copy: _v0,
          element: _v1,
          feature: _v2
        }) => {
          let _v3 = "object" == typeof _v0 && null !== _v0 ? _v0.title : _v0;
          return (0, _v26.buildProductAnalyticsBpContext)({
            product: "collaboration",
            feature: _v2,
            location: "workspace",
            copy: _v3,
            element: _v1
          });
        }, []),
        _v3 = (0, _v7.useCallback)(() => (0, _v28.buildWebBpContext)({
          page_name: "ai_accounts_settings",
          location: null,
          referrer_page_name: null
        }), []),
        _v4 = (0, _v7.useMemo)(() => (0, _v27.buildTeamBpContextFromTeamUser)(_v0?.teamUser), [_v0?.teamUser]);
      return {
        toggleEvent: (_v0, _v1) => {
          let _v2 = _v44.event[_v0],
            _v3 = _v45(_v0);
          (0, _v29.sendBpEventWithContexts)(_v2, {
            ..._v1("toggle"),
            ..._v2({
              copy: _v1 ? "enable" : "disable",
              element: "toggle",
              feature: _v3
            }),
            ..._v3(),
            ..._v4
          }, -1);
        },
        buttonEvent: _v0 => {
          let _v1 = _v44.event[_v0],
            _v2 = _v45(_v0);
          (0, _v29.sendBpEventWithContexts)(_v1, {
            ..._v1("click"),
            ..._v2({
              copy: "manage",
              element: "button",
              feature: _v2
            }),
            ..._v3(),
            ..._v4,
            ...(0, _v30.buildThirdPartyIntegrationBpContext)({
              integration_id: null,
              integration_name: null,
              is_partner: null
            })
          }, 1);
        },
        dropdownEvent: (_v0, _v1) => {
          let _v2 = _v44.event[_v0],
            _v3 = _v45(_v0);
          (0, _v29.sendBpEventWithContexts)(_v2, {
            ..._v1("click"),
            ..._v2({
              copy: _v34[_v1],
              element: "dropdown",
              feature: _v3
            }),
            ..._v3(),
            ..._v4
          }, -1);
        }
      };
    };
  var _v47 = _v0.i(0);
  let _v48 = () => ({
    aiSettings: (0, _v47.translate)({
      singular: "Vimeo AI",
      dictionary: {
        "fr-FR": {
          singular: "IA Vimeo"
        }
      }
    }),
    settingControls: {
      aiTitleGeneral: {
        title: (0, _v47.translate)({
          singular: "General",
          dictionary: {
            "de-DE": {
              singular: "Allgemein"
            },
            "fr-FR": {
              singular: "Général"
            },
            "ja-JP": {
              singular: "一般"
            },
            "ko-KR": {
              singular: "일반"
            },
            "pt-BR": {
              singular: "Geral"
            },
            "zh-CN": {
              singular: "一般"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Items Vimeo AI will use when generating content",
          dictionary: {
            es: {
              singular: "Elementos que Vimeo AI utilizará al generar contenido"
            },
            "de-DE": {
              singular: "Elemente, die Vimeo AI bei der Generierung von Inhalten verwenden wird"
            },
            "fr-FR": {
              singular: "Éléments que l'IA Vimeo utilisera lors de la génération de contenu"
            },
            "ja-JP": {
              singular: "Vimeo AIがコンテンツ生成時に使用するアイテム"
            },
            "ko-KR": {
              singular: "Vimeo AI가 콘텐츠를 생성할 때 사용하는 항목"
            },
            "pt-BR": {
              singular: "Itens que o Vimeo AI utilizará ao gerar conteúdo"
            },
            "zh-CN": {
              singular: "Vimeo AI 在生成内容时将使用的元素"
            }
          }
        })
      },
      aiTitleSearchAndAskAi: {
        title: (0, _v47.translate)({
          singular: "Search & Ask AI",
          dictionary: {
            es: {
              singular: "Buscar & Ask AI"
            },
            "de-DE": {
              singular: "Suchen & Ask AI"
            },
            "fr-FR": {
              singular: "Recherche & Ask AI"
            },
            "ja-JP": {
              singular: "検索と Ask AI"
            },
            "ko-KR": {
              singular: "검색 & Ask AI"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Enable AI-powered search for videos and your library",
          dictionary: {
            es: {
              singular: "Habilitar la búsqueda con tecnología AI para videos y tu biblioteca"
            },
            "de-DE": {
              singular: "Aktiviere die KI-gestützte Suche für Videos und deine Bibliothek"
            },
            "fr-FR": {
              singular: "Activer la recherche alimentée par l'IA pour les vidéos et votre bibliothèque"
            },
            "ja-JP": {
              singular: "動画およびライブラリの AI 検索を有効にする"
            },
            "ko-KR": {
              singular: "동영상 및 라이브러리에 대해 AI 기반 검색을 활성화하세요"
            },
            "pt-BR": {
              singular: "Ative a busca com tecnologia AI para vídeos e sua biblioteca"
            },
            "zh-CN": {
              singular: "为视频和您的库启用 AI 驱动的搜索"
            }
          }
        })
      },
      aiTitleLocalisation: {
        title: (0, _v47.translate)({
          singular: "Localisation",
          dictionary: {
            es: {
              singular: "Localización"
            },
            "de-DE": {
              singular: "Lokalisierung"
            },
            "ja-JP": {
              singular: "ローカライズ"
            },
            "ko-KR": {
              singular: "현지화"
            },
            "pt-BR": {
              singular: "Localização"
            },
            "zh-CN": {
              singular: "本地化"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Team members can use AI to translate content across your account.",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden usar IA para traducir contenido en toda su cuenta."
            },
            "de-DE": {
              singular: "Teammitglieder können KI verwenden, um Inhalte in Ihrem Konto zu übersetzen."
            },
            "fr-FR": {
              singular: "Les membres de l'équipe peuvent utiliser l'IA pour traduire le contenu de l’ensemble de votre compte."
            },
            "ja-JP": {
              singular: "チームメンバーはAIを使用して、アカウント全体のコンテンツを翻訳できます。"
            },
            "ko-KR": {
              singular: "팀 구성원은 AI를 사용하여 귀하의 계정 전반의 콘텐츠를 번역할 수 있습니다."
            },
            "pt-BR": {
              singular: "Membros da equipe podem usar IA para traduzir o conteúdo em toda a sua conta."
            },
            "zh-CN": {
              singular: "团队成员可以使用 AI 翻译整个帐户中的内容。"
            }
          }
        })
      },
      manageTranscriptionKeywords: {
        title: (0, _v47.translate)({
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
        description: (0, _v47.translate)({
          singular: "Vimeo AI will use unique words or phrases in generated content",
          dictionary: {
            es: {
              singular: "Vimeo AI utilizará palabras o frases únicas en el contenido generado"
            },
            "de-DE": {
              singular: "Vimeo AI wird einzigartige Wörter oder Ausdrücke in generierten Inhalten verwenden"
            },
            "fr-FR": {
              singular: "L'IA Vimeo utilisera des mots ou des expressions uniques dans le contenu généré"
            },
            "ja-JP": {
              singular: "Vimeo AIでは生成コンテンツ内で固有の単語やフレーズを使用します"
            },
            "ko-KR": {
              singular: "Vimeo AI는 생성된 콘텐츠에 고유한 단어나 구문을 사용합니다."
            },
            "pt-BR": {
              singular: "O Vimeo AI usará palavras ou frases únicas no conteúdo gerado"
            },
            "zh-CN": {
              singular: "Vimeo AI 将在生成的内容中使用独特的字词或短语"
            }
          }
        })
      },
      enableAiScriptGeneration: {
        title: (0, _v47.translate)({
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
        description: (0, _v47.translate)({
          singular: "Team members can generate scripts to use for recordings and live events",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden generar guiones para usar en grabaciones y eventos en vivo"
            },
            "de-DE": {
              singular: "Teammitglieder können Skripte für Aufzeichnungen und Live-Events erstellen"
            },
            "fr-FR": {
              singular: "Les collaborateurs peuvent générer des scripts à utiliser pour les enregistrements et les événements en direct"
            },
            "ja-JP": {
              singular: "チームメンバーは録画とライブイベントに使用するスクリプトを生成できます"
            },
            "ko-KR": {
              singular: "팀원은 녹화 및 라이브 이벤트에 사용할 스크립트를 생성할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os integrantes da equipe podem gerar roteiros para usar em gravações e eventos ao vivo"
            },
            "zh-CN": {
              singular: "团队成员可以生成用于录制和现场活动的脚本"
            }
          }
        })
      },
      enableVideoViewerAiUi: {
        title: (0, _v47.translate)({
          singular: "Ask AI",
          dictionary: {
            es: {
              singular: "Pídale a la IA"
            },
            "de-DE": {
              singular: "KI fragen"
            },
            "fr-FR": {
              singular: "Interroger l'IA"
            },
            "ja-JP": {
              singular: "AIに聞く"
            },
            "ko-KR": {
              singular: "AI에게 물어보기"
            },
            "pt-BR": {
              singular: "Perguntar à IA"
            },
            "zh-CN": {
              singular: "向 AI 提问"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Viewers can interact with Ask AI to ask specific questions about videos",
          dictionary: {
            es: {
              singular: "Los espectadores pueden interactuar con Preguntarle a la IA para plantear preguntas específicas sobre los videos"
            },
            "de-DE": {
              singular: "Zuschauende können mit Ask AI interagieren, um spezifische Fragen zu Videos zu stellen"
            },
            "fr-FR": {
              singular: "Les spectateurs peuvent interagir avec Ask AI pour poser des questions spécifiques sur les vidéos."
            },
            "ja-JP": {
              singular: "視聴者はAsk AIとやり取りしながら、動画に関して具体的な質問ができます"
            },
            "ko-KR": {
              singular: "시청자는 'Ask AI' 기능을 사용해 동영상에 대한 구체적인 질문을 할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os espectadores podem interagir com o Ask AI para fazer perguntas específicas sobre vídeos"
            },
            "zh-CN": {
              singular: "观众可以与 Ask AI 互动，提出有关视频的具体问题"
            }
          }
        })
      },
      enableParentPermissionAiTranslate: {
        title: (0, _v47.translate)({
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
        description: (0, _v47.translate)({
          singular: "Team members can generate translations of videos into different languages",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden generar traducciones de videos a diferentes idiomas"
            },
            "de-DE": {
              singular: "Teammitglieder können Übersetzungen von Videos in verschiedene Sprachen erstellen"
            },
            "fr-FR": {
              singular: "Les collaborateurs peuvent générer des traductions de vidéos dans différentes langues."
            },
            "ja-JP": {
              singular: "チームメンバーは動画の翻訳をさまざまな言語で生成できます"
            },
            "ko-KR": {
              singular: "팀원은 동영상을 다양한 언어로 번역할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os integrantes da equipe podem gerar traduções de vídeos para diversos idiomas"
            },
            "zh-CN": {
              singular: "团队成员可以将视频翻译成多种语言"
            }
          }
        })
      },
      enableTranslationsProfanityFilter: {
        title: (0, _v47.translate)({
          singular: "Translations profanity filter",
          dictionary: {
            es: {
              singular: "Filtro de lenguaje vulgar en las traducciones"
            },
            "de-DE": {
              singular: "Filter für Übersetzungen von obszönen Inhalten"
            },
            "fr-FR": {
              singular: "Filtrer les propos grossiers dans les traductions"
            },
            "ja-JP": {
              singular: "翻訳の不適切な表現フィルター"
            },
            "ko-KR": {
              singular: "번역 비속어 필터"
            },
            "pt-BR": {
              singular: "Filtro de palavrões na tradução"
            },
            "zh-CN": {
              singular: "翻译脏话过滤器"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Offensive words and phrases are automatically censored in audio translations generated with Vimeo AI",
          dictionary: {
            es: {
              singular: "Las palabras y frases ofensivas se censuran automáticamente en las traducciones de audio generadas con Vimeo AI."
            },
            "de-DE": {
              singular: "Anstößige Wörter und Ausdrücke werden in Audioübersetzungen, die mit Vimeo AI erstellt wurden, automatisch zensiert."
            },
            "fr-FR": {
              singular: "Les phrases et les mots offensants seront automatiquement censurés dans les traductions audio générées par l'IA Vimeo."
            },
            "ja-JP": {
              singular: "Vimeo AIで生成された音声翻訳では、不快な単語やフレーズが自動的に検閲されます。"
            },
            "ko-KR": {
              singular: "모욕적인 단어와 문구는 Vimeo AI로 생성된 오디오 번역에서 자동으로 검열됩니다."
            },
            "pt-BR": {
              singular: "Termos ofensivos são censurados automaticamente nas transcrições de áudio geradas com o Vimeo AI"
            },
            "zh-CN": {
              singular: "在使用 Vimeo AI 生成的音频翻译中，会自动审查冒犯性词语和短语"
            }
          }
        })
      },
      enableTranscriptionGeneration: {
        title: (0, _v47.translate)({
          singular: "Transcripts",
          dictionary: {
            es: {
              singular: "Transcripciones"
            },
            "de-DE": {
              singular: "Transkripte"
            },
            "fr-FR": {
              singular: "Transcriptions"
            },
            "ja-JP": {
              singular: "トランスクリプト"
            },
            "ko-KR": {
              singular: "스크립트"
            },
            "pt-BR": {
              singular: "Transcrições"
            },
            "zh-CN": {
              singular: "转录文稿"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "A transcript will be automatically generated when a new video is uploaded",
          dictionary: {
            es: {
              singular: "Se generará una transcripción automáticamente cuando se suba un nuevo video."
            },
            "de-DE": {
              singular: "Ein Transkript wird automatisch erstellt, wenn ein neues Video hochgeladen wird."
            },
            "fr-FR": {
              singular: "Une transcription sera automatiquement générée lors de la mise en ligne d'une nouvelle vidéo"
            },
            "ja-JP": {
              singular: "新しい動画がアップロードされるとトランスクリプトが自動的に生成されます"
            },
            "ko-KR": {
              singular: "새 동영상이 업로드되면 자동으로 스크립트가 생성됩니다."
            },
            "pt-BR": {
              singular: "Uma transcrição será gerada automaticamente quando um novo vídeo for carregado"
            },
            "zh-CN": {
              singular: "上传新视频时将自动生成转录文稿"
            }
          }
        })
      },
      enableTranslationsVoiceCloning: {
        title: (0, _v47.translate)({
          singular: "Voice cloning",
          dictionary: {
            es: {
              singular: "Clonación de voz"
            },
            "de-DE": {
              singular: "Klonen von Stimmen"
            },
            "fr-FR": {
              singular: "Clonage de la voix"
            },
            "ja-JP": {
              singular: "音声クローン"
            },
            "ko-KR": {
              singular: "음성 복제"
            },
            "pt-BR": {
              singular: "Clonagem de voz"
            },
            "zh-CN": {
              singular: "语音克隆"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Team members can clone the original speaker’s voice in audio dubs",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden clonar la voz del orador original en doblajes de audio"
            },
            "de-DE": {
              singular: "Teammitglieder können die Stimme des ursprünglichen Sprechers in Audio-Synchronisation klonen."
            },
            "fr-FR": {
              singular: "Les collaborateurs peuvent cloner la voix de l'intervenant original pour les doublages audio"
            },
            "ja-JP": {
              singular: "チームメンバーは音声吹き替えで元の話者の声をクローンできます"
            },
            "ko-KR": {
              singular: "팀원은 오디오 더빙에서 원래 화자의 목소리를 복제할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os integrantes da equipe podem clonar a voz do narrador original em dublagens de áudio"
            },
            "zh-CN": {
              singular: "团队成员可在配音中克隆原始说话者的声音"
            }
          }
        })
      },
      enableTranslationsFailureEmail: {
        title: (0, _v47.translate)("Translation failure notifications"),
        description: (0, _v47.translate)("Send an email notification to the user who triggered a translation when it fails")
      },
      enableParentPermissionAiVideoDetails: {
        title: (0, _v47.translate)({
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
        description: (0, _v47.translate)({
          singular: "Team members can generate titles, descriptions and tags for videos",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden generar títulos, descripciones y etiquetas para los videos"
            },
            "de-DE": {
              singular: "Teammitglieder können Titel, Beschreibungen und Tags für Videos erstellen"
            },
            "fr-FR": {
              singular: "Les collaborateurs peuvent générer des titres, des descriptions et des balises pour les vidéos."
            },
            "ja-JP": {
              singular: "チームメンバーは動画のタイトル、説明、タグを生成できます"
            },
            "ko-KR": {
              singular: "팀원은 동영상 제목, 설명, 태그를 생성할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os integrantes da equipe podem gerar títulos, descrições e etiquetas para vídeos"
            },
            "zh-CN": {
              singular: "团队成员可以为视频生成标题、描述和标签"
            }
          }
        })
      },
      enableParentPermissionAiHighlights: {
        title: (0, _v47.translate)({
          singular: "Highlights",
          dictionary: {
            es: {
              singular: "Momentos destacados"
            },
            "fr-FR": {
              singular: "LE MEILLEUR"
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
        description: (0, _v47.translate)({
          singular: "Team members can generate video highlights",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden generar momentos destacados del video"
            },
            "de-DE": {
              singular: "Teammitglieder können Video-Highlights erstellen"
            },
            "fr-FR": {
              singular: "Les collaborateurs peuvent générer des temps forts des vidéos"
            },
            "ja-JP": {
              singular: "チームメンバーは動画のハイライトを生成できます"
            },
            "ko-KR": {
              singular: "팀원은 동영상 하이라이트를 생성할 수 있습니다."
            },
            "pt-BR": {
              singular: "Os integrantes da equipe podem gerar destaques de vídeo"
            },
            "zh-CN": {
              singular: "团队成员可以生成视频集锦"
            }
          }
        })
      },
      manageAiAutomationGenerateTranslations: {
        title: (0, _v47.translate)({
          singular: "Ai translations",
          dictionary: {
            es: {
              singular: "Traducciones con IA"
            },
            "de-DE": {
              singular: "KI-Übersetzungen"
            },
            "fr-FR": {
              singular: "Traduction générée par l'IA"
            },
            "ja-JP": {
              singular: "AI翻訳"
            },
            "ko-KR": {
              singular: "AI 번역"
            },
            "pt-BR": {
              singular: "Traduções com IA"
            },
            "zh-CN": {
              singular: "Ai 翻译"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Add subtitles and captions to videos in multiple languages",
          dictionary: {
            es: {
              singular: "Agregue subtítulos y leyendas a los videos en varios idiomas"
            },
            "de-DE": {
              singular: "Fügen Sie Untertitel und erweiterte Untertitel zu Videos in mehreren Sprachen hinzu"
            },
            "fr-FR": {
              singular: "Ajoutez des sous-titres aux vidéos en plusieurs langues"
            },
            "ja-JP": {
              singular: "複数の言語で動画に字幕とキャプションを追加"
            },
            "ko-KR": {
              singular: "여러 언어로 동영상에 자막 및 캡션 추가"
            },
            "pt-BR": {
              singular: "Adicione legendas e closed captions (CC) aos vídeos em vários idiomas"
            },
            "zh-CN": {
              singular: "为视频添加多种语言的字幕和标题"
            }
          }
        })
      },
      userRolePermissionAiTranslate: {
        title: (0, _v47.translate)({
          singular: "Who can generate translations",
          dictionary: {
            es: {
              singular: "Quién puede generar traducciones"
            },
            "de-DE": {
              singular: "Wer kann Übersetzungen erstellen?"
            },
            "fr-FR": {
              singular: "Qui peut générer des traductions"
            },
            "ja-JP": {
              singular: "翻訳を生成できるユーザー"
            },
            "ko-KR": {
              singular: "번역 생성 권한"
            },
            "pt-BR": {
              singular: "Quem pode gerar traduções"
            },
            "zh-CN": {
              singular: "谁可以生成翻译"
            }
          }
        }),
        description: ""
      },
      userRolePermissionAiHighlights: {
        title: (0, _v47.translate)({
          singular: "Who can generate highlights",
          dictionary: {
            es: {
              singular: "Quién puede generar momentos destacados"
            },
            "de-DE": {
              singular: "Wer kann Highlights generieren"
            },
            "fr-FR": {
              singular: "Qui peut générer des temps forts ?"
            },
            "ja-JP": {
              singular: "ハイライトを生成できるユーザー"
            },
            "ko-KR": {
              singular: "하이라이트 생성 권한"
            },
            "pt-BR": {
              singular: "Quem pode gerar destaques"
            },
            "zh-CN": {
              singular: "谁可以生成精彩片段"
            }
          }
        }),
        description: ""
      },
      userRolePermissionAiScriptGeneration: {
        title: (0, _v47.translate)({
          singular: "Who can generate scripts",
          dictionary: {
            es: {
              singular: "Quién puede generar guiones"
            },
            "de-DE": {
              singular: "Wer kann Skripte generieren"
            },
            "fr-FR": {
              singular: "Qui peut générer des scripts ?"
            },
            "ja-JP": {
              singular: "スクリプトを生成できるユーザー"
            },
            "ko-KR": {
              singular: "스크립트 생성 권한"
            },
            "pt-BR": {
              singular: "Quem pode gerar roteiros"
            },
            "zh-CN": {
              singular: "谁可以生成脚本"
            }
          }
        }),
        description: ""
      },
      enableParentPermissionAiLiveCaptions: {
        title: (0, _v47.translate)({
          singular: "Live captions",
          dictionary: {
            es: {
              singular: "Subtítulos en directo"
            },
            "de-DE": {
              singular: "Live-Untertitel"
            },
            "fr-FR": {
              singular: "Sous-titres en direct"
            },
            "ja-JP": {
              singular: "ライブキャプション"
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
        description: (0, _v47.translate)({
          replacements: {
            LINK: _v0 => (0, _v1.jsx)("a", {
              href: "https://vimeo.com/legal/transparency/ai/live-caption-translations",
              target: "_blank",
              rel: "noopener noreferrer",
              style: {
                textDecoration: "underline"
              },
              children: _v0
            }, "live-captions-learn-more")
          },
          singular: "Team members can enable live captions and translations for live events. {LINK}Learn more{/LINK}",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden habilitar subtítulos en vivo y traducciones para eventos en vivo. {LINK}Más información{/LINK}"
            },
            "de-DE": {
              singular: "Teammitglieder können für Live-Events Live-Untertitel und Übersetzungen aktivieren. {LINK}Mehr erfahren{/LINK}"
            },
            "fr-FR": {
              singular: "Les membres de l'équipe peuvent activer les sous-titres et les traductions en direct pour les événements en direct. {LINK}En savoir plus{/LINK}"
            },
            "ja-JP": {
              singular: "チームメンバーはライブイベントでライブキャプションと翻訳を有効にできます。 {LINK}詳細を見る{/LINK}"
            },
            "ko-KR": {
              singular: "팀 구성원은 라이브 이벤트에서 실시간 자막 및 번역을 활성화할 수 있습니다. {LINK}자세히 알아보기{/LINK}"
            },
            "pt-BR": {
              singular: "Membros da equipe podem ativar legendas ao vivo e traduções para eventos ao vivo. {LINK}Saiba mais{/LINK}"
            },
            "zh-CN": {
              singular: "团队成员可以为直播活动启用实时字幕和翻译。 {LINK}了解更多{/LINK}"
            }
          }
        })
      },
      userRolePermissionAiLiveCaptions: {
        title: (0, _v47.translate)({
          singular: "Who can generate live captions",
          dictionary: {
            es: {
              singular: "Quién puede generar subtítulos en directo"
            },
            "de-DE": {
              singular: "Wer kann Live-Untertitel erstellen"
            },
            "fr-FR": {
              singular: "Qui peut générer des sous-titres en direct"
            },
            "ja-JP": {
              singular: "ライブキャプションを生成できるのは誰か"
            },
            "ko-KR": {
              singular: "누가 실시간 자막을 생성할 수 있나요?"
            },
            "pt-BR": {
              singular: "Quem pode gerar legendas ao vivo"
            },
            "zh-CN": {
              singular: "谁可以生成实时字幕"
            }
          }
        }),
        description: ""
      },
      enableRegistrationFormAiUserTranslation: {
        title: (0, _v47.translate)({
          singular: "Registration form localisation",
          dictionary: {
            es: {
              singular: "Localización del formulario de registro"
            },
            "de-DE": {
              singular: "Lokalisierung des Registrierungsformulars"
            },
            "fr-FR": {
              singular: "Localisation du formulaire d'inscription"
            },
            "ja-JP": {
              singular: "登録フォームのローカライズ"
            },
            "ko-KR": {
              singular: "등록 양식 현지화"
            },
            "pt-BR": {
              singular: "Localização do formulário de inscrição"
            },
            "zh-CN": {
              singular: "注册表单本地化"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Team members can use AI to translate registration form labels and answer options.",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden usar IA para traducir las etiquetas del formulario de registro y las opciones de respuesta."
            },
            "de-DE": {
              singular: "Teammitglieder können KI verwenden, um Beschriftungen und Antwortoptionen des Registrierungsformulars zu übersetzen."
            },
            "fr-FR": {
              singular: "Les membres de l'équipe peuvent utiliser l'IA pour traduire les libellés et les options de réponse du formulaire d'inscription."
            },
            "ja-JP": {
              singular: "チームメンバーはAIを使用して、登録フォームのラベルや回答オプションを翻訳できます。"
            },
            "ko-KR": {
              singular: "팀 구성원은 AI를 사용하여 등록 양식의 레이블 및 응답 옵션을 번역할 수 있습니다."
            },
            "pt-BR": {
              singular: "Membros da equipe podem usar IA para traduzir rótulos e opções de resposta do formulário de inscrição."
            },
            "zh-CN": {
              singular: "团队成员可以使用 AI 翻译注册表单标签和答案选项。"
            }
          }
        })
      },
      userRolePermissionAiVideoDetails: {
        title: (0, _v47.translate)({
          singular: "Who can generate video details",
          dictionary: {
            es: {
              singular: "Quién puede generar los detalles del video"
            },
            "de-DE": {
              singular: "Wer kann Videodetails generieren"
            },
            "fr-FR": {
              singular: "Qui peut générer les détails de la vidéo"
            },
            "ja-JP": {
              singular: "動画の詳細情報を生成できるユーザー"
            },
            "ko-KR": {
              singular: "동영상 세부 정보 생성 권한"
            },
            "pt-BR": {
              singular: "Quem pode gerar detalhes do vídeo"
            },
            "zh-CN": {
              singular: "谁可以生成视频详情"
            }
          }
        }),
        description: ""
      },
      userRolePermissionTranscriptionKeywords: {
        title: (0, _v47.translate)({
          singular: "Who can manage custom dictionary",
          dictionary: {
            es: {
              singular: "Quién puede gestionar el diccionario personalizado"
            },
            "de-DE": {
              singular: "Wer kann das benutzerdefinierte Wörterbuch verwalten"
            },
            "fr-FR": {
              singular: "Qui peut gérer le dictionnaire personnalisé"
            },
            "ja-JP": {
              singular: "カスタム辞書を管理できるユーザー"
            },
            "ko-KR": {
              singular: "누가 사용자 지정 사전을 관리할 수 있습니까?"
            },
            "pt-BR": {
              singular: "Quem pode gerenciar o dicionário personalizado"
            },
            "zh-CN": {
              singular: "谁可以管理自定义词典"
            }
          }
        }),
        description: ""
      },
      prefEnableAskAiAnalytics: {
        title: (0, _v47.translate)({
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
        description: (0, _v47.translate)({
          singular: "Get analytics for the last 90 days on how AskAI is being used on your videos",
          dictionary: {
            es: {
              singular: "Obtenga análisis de los últimos 90 días sobre cómo se usa la función Preguntarle a la IA en sus videos."
            },
            "de-DE": {
              singular: "Analytics über die Nutzung von AskAI in Ihren Videos für die letzten 90 Tage"
            },
            "fr-FR": {
              singular: "Obtenez des statistiques sur l'utilisation d'AskAI sur vos vidéos au cours des 90 derniers jours"
            },
            "ja-JP": {
              singular: "動画でのAskAIの利用状況について、過去90日間の分析を取得できます"
            },
            "ko-KR": {
              singular: "지난 90일간 동영상의 AskAI 사용 현황에 대한 분석 결과를 확인하세요."
            },
            "pt-BR": {
              singular: "Obtenha análises dos últimos 90 dias sobre como o Ask AI está sendo usado em seus vídeos"
            },
            "zh-CN": {
              singular: "获取过去 90 天内有关 AskAI 在您的视频中使用情况的分析数据"
            }
          }
        })
      },
      videoAskAi: {
        title: (0, _v47.translate)("Video Ask AI"),
        description: (0, _v47.translate)({
          singular: "Viewers can interact with Vimeo AI to ask specific questions about videos",
          dictionary: {
            es: {
              singular: "Los espectadores pueden interactuar con Vimeo AI para hacer preguntas específicas sobre los videos"
            },
            "de-DE": {
              singular: "Zuschauer können mit Vimeo AI interagieren, um spezifische Fragen zu Videos zu stellen"
            },
            "fr-FR": {
              singular: "Les spectateurs peuvent interagir avec Vimeo AI pour poser des questions spécifiques sur les vidéos"
            },
            "ja-JP": {
              singular: "視聴者は Vimeo AI と対話して動画に関する具体的な質問をすることができます"
            },
            "ko-KR": {
              singular: "시청자는 Vimeo AI와 상호작용하여 동영상에 대해 구체적인 질문을 할 수 있습니다"
            },
            "pt-BR": {
              singular: "Os espectadores podem interagir com o Vimeo AI para fazer perguntas específicas sobre os vídeos"
            },
            "zh-CN": {
              singular: "观众可以与 Vimeo AI 交互，针对视频提出具体问题"
            }
          }
        })
      },
      videoAskAiAnalytics: {
        title: (0, _v47.translate)({
          singular: "Video Ask AI analytics",
          dictionary: {
            es: {
              singular: "Analíticas de Video Ask AI"
            },
            "de-DE": {
              singular: "Video Ask AI-Analysen"
            },
            "fr-FR": {
              singular: "Analyses de Video Ask AI"
            },
            "ja-JP": {
              singular: "Video Ask AI の分析"
            },
            "ko-KR": {
              singular: "Video Ask AI 분석"
            },
            "pt-BR": {
              singular: "Análises do Video Ask AI"
            },
            "zh-CN": {
              singular: "Video Ask AI 分析"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Get analytics for the last 90 days on how Video Ask AI is being used on your videos",
          dictionary: {
            es: {
              singular: "Obtener análisis de los últimos 90 días sobre cómo se está utilizando Video Ask AI en tus videos"
            },
            "de-DE": {
              singular: "Erhalte Analysen der letzten 90 Tage darüber, wie Video Ask AI in deinen Videos genutzt wird"
            },
            "fr-FR": {
              singular: "Obtenez des analyses sur les 90 derniers jours concernant l'utilisation de Video Ask AI sur vos vidéos"
            },
            "ja-JP": {
              singular: "過去90日間の Video Ask AI の動画での利用状況に関する分析を取得する"
            },
            "ko-KR": {
              singular: "지난 90일간 동영상에서 Video Ask AI가 어떻게 사용되었는지에 대한 분석을 확인하세요"
            },
            "pt-BR": {
              singular: "Obtenha análises dos últimos 90 dias sobre como o Video Ask AI está sendo usado em seus vídeos"
            },
            "zh-CN": {
              singular: "获取最近 90 天 Video Ask AI 在您视频中的使用情况分析"
            }
          }
        })
      },
      enableLibrarySmartSearch: {
        title: (0, _v47.translate)({
          singular: "Library smart search",
          dictionary: {
            es: {
              singular: "Búsqueda inteligente de la biblioteca"
            },
            "de-DE": {
              singular: "Intelligente Suche in der Bibliothek"
            },
            "fr-FR": {
              singular: "Recherche intelligente de la bibliothèque"
            },
            "ja-JP": {
              singular: "ライブラリのスマート検索"
            },
            "ko-KR": {
              singular: "라이브러리 스마트 검색"
            },
            "pt-BR": {
              singular: "Busca inteligente da biblioteca"
            },
            "zh-CN": {
              singular: "库内智能搜索"
            }
          }
        }),
        description: (0, _v47.translate)({
          singular: "Team members can use the search bar to find videos faster and ask Vimeo AI specific questions about their library",
          dictionary: {
            es: {
              singular: "Los miembros del equipo pueden usar la barra de búsqueda para encontrar videos más rápido y hacerle a Vimeo AI preguntas específicas sobre su biblioteca"
            },
            "de-DE": {
              singular: "Teammitglieder können die Suchleiste nutzen, um Videos schneller zu finden und gezielte Fragen an Vimeo AI zu ihrer Bibliothek zu stellen"
            },
            "fr-FR": {
              singular: "Les membres de l'équipe peuvent utiliser la barre de recherche pour trouver des vidéos plus rapidement et poser à Vimeo AI des questions spécifiques sur leur bibliothèque"
            },
            "ja-JP": {
              singular: "チームメンバーは検索バーを使用して動画をより速く見つけ、ライブラリに関する具体的な質問を Vimeo AI にすることができます"
            },
            "ko-KR": {
              singular: "팀 구성원은 검색창을 사용하여 동영상을 더 빠르게 찾고, 라이브러리에 대해 Vimeo AI에 특정 질문을 할 수 있습니다"
            },
            "pt-BR": {
              singular: "Membros da equipe podem usar a barra de pesquisa para encontrar vídeos com mais rapidez e fazer perguntas específicas ao Vimeo AI sobre a biblioteca deles"
            },
            "zh-CN": {
              singular: "团队成员可以使用搜索栏更快地查找视频，并向 Vimeo AI 提出有关其库的具体问题"
            }
          }
        })
      }
    },
    settingTooltips: {
      videoAskAi: (0, _v47.translate)({
        singular: "Ask AI is accessible from the player, and the video page",
        dictionary: {
          es: {
            singular: "Ask AI está accesible desde el reproductor y la página del video"
          },
          "de-DE": {
            singular: "Ask AI ist im Player und auf der Videoseite zugänglich"
          },
          "fr-FR": {
            singular: "Ask AI est accessible depuis le lecteur et la page vidéo"
          },
          "ja-JP": {
            singular: "プレーヤーおよび動画ページから Ask AI にアクセスできます"
          },
          "ko-KR": {
            singular: "Ask AI는 플레이어와 동영상 페이지에서 이용할 수 있습니다"
          },
          "pt-BR": {
            singular: "Ask AI está acessível a partir do player e da página do vídeo"
          },
          "zh-CN": {
            singular: "可以从播放器和视频页面访问 Ask AI"
          }
        }
      }),
      enableLibrarySmartSearch: (0, _v47.translate)({
        singular: "Smart search is accessible from the searchbar",
        dictionary: {
          es: {
            singular: "La búsqueda inteligente es accesible desde la barra de búsqueda"
          },
          "de-DE": {
            singular: "Die intelligente Suche ist über die Suchleiste verfügbar"
          },
          "fr-FR": {
            singular: "La recherche intelligente est accessible depuis la barre de recherche"
          },
          "ja-JP": {
            singular: "スマート検索は検索バーから利用できます"
          },
          "ko-KR": {
            singular: "스마트 검색은 검색창에서 이용할 수 있습니다"
          },
          "pt-BR": {
            singular: "A busca inteligente está acessível na barra de pesquisa"
          },
          "zh-CN": {
            singular: "智能搜索可从搜索栏访问"
          }
        }
      })
    },
    controls: {
      manage: (0, _v47.translate)({
        singular: "Manage",
        dictionary: {
          es: {
            singular: "Administrar"
          },
          "de-DE": {
            singular: "Verwalten"
          },
          "fr-FR": {
            singular: "Gérer"
          },
          "ja-JP": {
            singular: "管理"
          },
          "ko-KR": {
            singular: "관리"
          },
          "pt-BR": {
            singular: "Gerenciar"
          },
          "zh-CN": {
            singular: "管理"
          }
        }
      }),
      downloadCsv: (0, _v47.translate)({
        singular: "Export Data",
        dictionary: {
          es: {
            singular: "Exportar datos"
          },
          "de-DE": {
            singular: "Daten exportieren"
          },
          "fr-FR": {
            singular: "Exporter les données"
          },
          "ja-JP": {
            singular: "データをエクスポート"
          },
          "ko-KR": {
            singular: "데이터 내보내기"
          },
          "pt-BR": {
            singular: "Exportar dados"
          },
          "zh-CN": {
            singular: "导出数据"
          }
        }
      })
    },
    notifications: {
      error: (0, _v47.translate)({
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
      }),
      askAiAnalyticsDataNotFound: (0, _v47.translate)({
        singular: "No Ask AI data can be found",
        dictionary: {
          es: {
            singular: "No se encuentran datos de Preguntarle a la IA"
          },
          "de-DE": {
            singular: "Es können keine „Ask AI“-Daten gefunden werden."
          },
          "fr-FR": {
            singular: "Aucune donnée Ask AI n'est disponible"
          },
          "ja-JP": {
            singular: "Ask AIのデータが見つかりません"
          },
          "ko-KR": {
            singular: "Ask AI 데이터를 찾을 수 없습니다."
          },
          "pt-BR": {
            singular: "Nenhum dado do Ask AI encontrado"
          },
          "zh-CN": {
            singular: "未找到任何 Ask AI 数据"
          }
        }
      })
    },
    AiTranslationHeader: (0, _v47.translate)({
      singular: "Select Languages for Translation",
      dictionary: {
        es: {
          singular: "Seleccione los idiomas para la traducción"
        },
        "de-DE": {
          singular: "Sprachen für die Übersetzung auswählen"
        },
        "fr-FR": {
          singular: "Sélectionnez les langues pour la traduction"
        },
        "ja-JP": {
          singular: "翻訳する言語を選択してください"
        },
        "ko-KR": {
          singular: "번역할 언어 선택"
        },
        "pt-BR": {
          singular: "Selecione os idiomas para tradução"
        },
        "zh-CN": {
          singular: "选择翻译语言"
        }
      }
    }),
    AiTranslationToggleActive: (0, _v47.translate)({
      singular: "AI Translations Active",
      dictionary: {
        es: {
          singular: "Traducciones con IA activas"
        },
        "de-DE": {
          singular: "KI-Übersetzungen aktiv"
        },
        "fr-FR": {
          singular: "Traduction générée par l'IA active"
        },
        "ja-JP": {
          singular: "AI翻訳が有効"
        },
        "ko-KR": {
          singular: "AI 번역 활성"
        },
        "pt-BR": {
          singular: "Traduções de IA ativas"
        },
        "zh-CN": {
          singular: "AI 翻译处于活动状态"
        }
      }
    }),
    AiTranslationToggleInactive: (0, _v47.translate)({
      singular: "AI Translations Inactive",
      dictionary: {
        es: {
          singular: "Traducciones de IA inactivas"
        },
        "de-DE": {
          singular: "KI-Übersetzungen inaktiv"
        },
        "fr-FR": {
          singular: "Traduction générée par l'IA inactive"
        },
        "ja-JP": {
          singular: "AI翻訳が無効"
        },
        "ko-KR": {
          singular: "AI 번역 비활성"
        },
        "pt-BR": {
          singular: "Traduções de IA Inativas"
        },
        "zh-CN": {
          singular: "AI 翻译处于停用状态"
        }
      }
    }),
    ModalSaveButton: (0, _v47.translate)({
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
    }),
    ModalCancelButton: (0, _v47.translate)({
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
    }),
    TranslationHeader: (0, _v47.translate)({
      singular: "Selected Language:",
      dictionary: {
        es: {
          singular: "Idioma seleccionado:"
        },
        "de-DE": {
          singular: "Ausgewählte Sprache:"
        },
        "fr-FR": {
          singular: "Langue sélectionnée :"
        },
        "ja-JP": {
          singular: "選択された言語："
        },
        "ko-KR": {
          singular: "선택한 언어:"
        },
        "pt-BR": {
          singular: "Idioma selecionado:"
        },
        "zh-CN": {
          singular: "已选语言："
        }
      }
    }),
    SomethingWentWrong: (0, _v47.translate)({
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
    TranslationInputPlaceHolder: (0, _v47.translate)({
      singular: "Select a language",
      dictionary: {
        es: {
          singular: "Seleccione un idioma"
        },
        "de-DE": {
          singular: "Sprache wählen"
        },
        "fr-FR": {
          singular: "Sélectionner une langue"
        },
        "ja-JP": {
          singular: "言語を選択"
        },
        "ko-KR": {
          singular: "언어 선택"
        },
        "pt-BR": {
          singular: "Selecione um idioma"
        },
        "zh-CN": {
          singular: "选择语言"
        }
      }
    })
  });
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = [{
    value: "ar",
    label: "Arabic"
  }, {
    value: "bg",
    label: "Bulgarian"
  }, {
    value: "zh-CHT",
    label: "Chinese (Traditional)"
  }, {
    value: "zh-CN",
    label: "Chinese (Simplified)"
  }, {
    value: "cs",
    label: "Czech"
  }, {
    value: "da",
    label: "Danish"
  }, {
    value: "nl",
    label: "Dutch"
  }, {
    value: "en",
    label: "English"
  }, {
    value: "fi",
    label: "Finnish"
  }, {
    value: "fr",
    label: "French"
  }, {
    value: "de",
    label: "German"
  }, {
    value: "el",
    label: "Greek"
  }, {
    value: "iw",
    label: "Hebrew"
  }, {
    value: "hi",
    label: "Hindi"
  }, {
    value: "hu",
    label: "Hungarian"
  }, {
    value: "in",
    label: "Indonesian"
  }, {
    value: "it",
    label: "Italian"
  }, {
    value: "ja",
    label: "Japanese"
  }, {
    value: "ko",
    label: "Korean"
  }, {
    value: "pl",
    label: "Polish"
  }, {
    value: "pt",
    label: "Portuguese"
  }, {
    value: "ro",
    label: "Romanian"
  }, {
    value: "ru",
    label: "Russian"
  }, {
    value: "sv",
    label: "Swedish"
  }, {
    value: "ta",
    label: "Tamil"
  }, {
    value: "th",
    label: "Thai"
  }, {
    value: "tr",
    label: "Turkish"
  }, {
    value: "uk",
    label: "Ukrainian"
  }, {
    value: "vi",
    label: "Vietnamese"
  }, {
    value: "no",
    label: "Norwegian"
  }];
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = ({
      selectedLanguages: _v0,
      onLanguageChange: _v1,
      isDropdownActive: _v2,
      setIsDropdownActive: _v3,
      isFetchingUserLanguages: _v4
    }) => {
      let _v5 = (0, _v7.useMemo)(() => _v48(), []);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v8.Box, {
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 16,
          children: [(0, _v1.jsx)(_v10.Header, {
            size: "sm",
            children: _v2 ? _v5.AiTranslationToggleActive : _v5.AiTranslationToggleInactive
          }), (0, _v1.jsx)(_v12.Switch, {
            isChecked: _v2,
            onChange: _v0 => _v3(_v0.target.checked),
            spacing: 20
          })]
        }), (0, _v1.jsx)(_v15.Select, {
          disabled: !_v2,
          multiple: !0,
          id: "select-languages",
          placeholder: _v5.TranslationInputPlaceHolder,
          variant: "withCheck",
          value: _v0.map(_v0 => _v0.value),
          items: _v58,
          onValueChange: _v0 => _v1(_v0.items)
        }), (0, _v1.jsx)(_v8.Box, {
          margin: "18px 0",
          minHeight: "86px",
          children: _v2 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v10.Header, {
              size: "sm",
              marginBottom: "1rem",
              children: _v5.TranslationHeader
            }), (0, _v1.jsx)(_v8.Box, {
              display: "flex",
              alignItems: "center",
              marginTop: "10px",
              minHeight: "28px",
              flexWrap: "wrap",
              children: _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
                children: [(0, _v1.jsx)(_v62.Skeleton, {
                  height: 28
                }), (0, _v1.jsx)(_v62.Skeleton, {
                  height: 28
                })]
              }) : _v0.map(_v0 => (0, _v1.jsxs)(_v61.Tag, {
                marginRight: "4px",
                marginTop: "4px",
                size: "md",
                children: [(0, _v1.jsx)(_v61.TagLabel, {
                  children: _v0.label
                }), (0, _v1.jsx)(_v61.TagCloseButton, {
                  onClick: () => {
                    _v1(_v0.filter(_v0 => _v0.value !== _v0.value));
                  },
                  children: (0, _v1.jsx)(_v63.CloseXSmall, {})
                })]
              }, _v0.value))
            })]
          })
        })]
      });
    },
    _v65 = ({
      onClose: _v0,
      userId: _v1
    }) => {
      let _v2 = (0, _v56.useToast)(),
        _v3 = (0, _v7.useMemo)(() => _v48(), []),
        [_v4, _v5] = (0, _v7.useState)([]),
        [_v6, _v7] = (0, _v7.useState)(!0),
        {
          teamSettingsUpdateError: _v8,
          teamSettingsUpdateLoading: _v9,
          onUpdateSetting: _v10
        } = (0, _v59.useUpdateTeamSettings)({
          userId: _v1
        }),
        {
          teamSettingsResult: _v11,
          teamSettingsLoading: _v12,
          teamSettingsError: _v13
        } = (0, _v60.useGetTeamSettings)({
          userId: _v1
        }),
        _v14 = (0, _v7.useCallback)(() => {
          _v2({
            duration: _v57.NOTIFICATION_DURATION,
            title: _v3.SomethingWentWrong
          });
        }, [_v2]);
      (0, _v7.useEffect)(() => {
        (_v13 || _v8) && _v14();
      }, [_v14, _v13, _v8]);
      let _v15 = async () => {
        await _v10({
          manageAiAutomationGenerateTranslations: _v6 ? _v4.map(_v0 => _v0.value).join(",") : ""
        }), _v0();
      };
      return (0, _v7.useEffect)(function () {
        if (_v11 && _v11?.manageAiAutomationGenerateTranslations && _v58) {
          let _v0 = Array.from(_v11?.manageAiAutomationGenerateTranslations.split(","));
          _v5(_v58.filter(_v0 => _v0.includes(_v0.value)));
        }
      }, [_v11]), (0, _v1.jsxs)(_v50.Modal, {
        isOpen: !0,
        onClose: _v0,
        children: [(0, _v1.jsx)(_v51.ModalOverlay, {}), (0, _v1.jsxs)(_v52.ModalContent, {
          children: [(0, _v1.jsx)(_v53.ModalHeader, {
            children: _v3.AiTranslationHeader
          }), (0, _v1.jsx)(_v54.ModalBody, {
            children: (0, _v1.jsx)(_v64, {
              selectedLanguages: _v6 ? _v4 : [],
              onLanguageChange: _v0 => {
                _v5(_v0);
              },
              isDropdownActive: _v6,
              setIsDropdownActive: _v7,
              isFetchingUserLanguages: _v12
            })
          }), (0, _v1.jsxs)(_v55.ModalFooter, {
            children: [(0, _v1.jsx)(_v20.Button, {
              isDisabled: _v9,
              onClick: _v0,
              variant: "tertiary",
              children: _v3.ModalCancelButton
            }), (0, _v1.jsx)(_v20.Button, {
              isLoading: _v9,
              isDisabled: _v6 && 0 === _v4.length,
              onClick: _v15,
              children: _v3.ModalSaveButton
            })]
          })]
        })]
      });
    },
    _v66 = ({
      teamSetting: _v0,
      userId: _v1
    }) => {
      let [_v2, _v3] = (0, _v7.useState)(!1),
        _v4 = (0, _v7.useMemo)(() => _v48(), []);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v49.TeamSettingsPageOptionContainer, {
          children: (0, _v1.jsx)(_v8.Box, {
            "data-id": _v0,
            position: "absolute",
            right: "0",
            top: "50%",
            minWidth: "md",
            transform: "translateY(-50%)",
            children: (0, _v1.jsx)(_v20.Button, {
              size: "sm",
              variant: "secondary",
              onClick: () => _v3(!0),
              children: _v4.controls.manage
            })
          })
        }, _v0), _v2 && (0, _v1.jsx)(_v65, {
          userId: _v1,
          onClose: () => _v3(!1)
        })]
      });
    };
  var _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  async function _v72({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v71.measureLatency)("getUserAiAskAiAnalytics", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/ai/ask_ai_analytics?fields=${_v1.map(_v69.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v69.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v69.deepCamelCase)(_v1);
    });
  }
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  function _v77() {
    let {
        mutate: _v0
      } = (0, _v74.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v76.useGctlConfig)(),
      [_v5, _v6] = (0, _v75.useInternalState)();
    return [(0, _v7.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/ai/ask_ai_analytics${(0, _v75.serializeQuery)(_v0)}`, _v72({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }
  "true" === _v70.default.env.STORYBOOK && (0, _v75.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v76.useGctlConfig)();
    return (0, _v73.default)(_v2 ? `/users/${_v2.where.userId}/ai/ask_ai_analytics${(0, _v75.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v72({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }, {
    endpoint: "/users/:userId/ai/ask_ai_analytics",
    method: "GET"
  }), "true" === _v70.default.env.STORYBOOK && (0, _v75.assignMswData)(_v77, {
    endpoint: "/users/:userId/ai/ask_ai_analytics",
    method: "GET"
  });
  var _v78 = _v0.i(0);
  let _v79 = ({
      userId: _v0,
      isDisabled: _v1,
      sendAskAiAnalyticsBpEvent: _v2
    }) => {
      let _v3 = (0, _v7.useMemo)(() => _v48(), []),
        _v4 = (0, _v56.useToast)(),
        [_v5, {
          loading: _v6,
          data: _v7,
          error: _v8
        }] = _v77(),
        _v9 = (0, _v7.useRef)(null);
      (0, _v7.useEffect)(() => {
        if (_v7) {
          if (!_v7.csvUrl) return void _v4({
            duration: 0,
            title: _v3.notifications.askAiAnalyticsDataNotFound
          });
          _v7.csvUrl !== _v9.current && (_v9.current = _v7.csvUrl, (0, _v78.downloadFile)(_v7.csvUrl));
        }
      }, [_v7, _v4, _v3]), (0, _v7.useEffect)(() => {
        _v8 && (_v8 instanceof _v69.NetworkError && 404 === _v8.status ? _v4({
          duration: 0,
          title: _v3.notifications.askAiAnalyticsDataNotFound
        }) : _v4({
          duration: 0,
          title: _v3.notifications.error
        }));
      }, [_v8, _v4, _v3]);
      let _v10 = async () => {
        await _v5({
          where: {
            userId: String(_v0)
          },
          select: ["csvUrl"]
        }), _v2();
      };
      return (0, _v1.jsx)(_v20.Button, {
        size: "sm",
        variant: "secondary",
        leftIcon: _v6 ? (0, _v1.jsx)(_v67.Spinner, {
          size: "xs"
        }) : (0, _v1.jsx)(_v68.DownloadImport, {}),
        onClick: _v10,
        isDisabled: _v1 || _v6,
        children: _v3.controls.downloadCsv
      });
    },
    _v80 = _v44.name.manageTranscriptionKeywords,
    _v81 = _v44.name.manageAiAutomationGenerateTranslations,
    _v82 = _v44.name.prefEnableAskAiAnalytics,
    _v83 = ({
      userId: _v0,
      teamSetting: _v1,
      isDisabled: _v2
    }) => {
      let _v3 = (0, _v7.useMemo)(() => _v48(), []),
        _v4 = (0, _v7.useRef)(null),
        [_v5, _v6] = (0, _v7.useState)(!1),
        _v7 = (0, _v19.useRouter)(),
        {
          settings: _v8,
          isLoadingResponse: _v9
        } = (0, _v23.useOrionSettings)(),
        _v10 = _v46(),
        _v11 = !_v9 && _v8.enable_account_wide_dictionary_management,
        _v12 = () => {
          if (_v11) {
            let _v0 = _v7.pathname.startsWith("/manage/workspace/") ? "/manage/workspace/manage-ai/custom-dictionary" : "/manage/team/manage-ai/custom-dictionary";
            _v7.push(_v0);
          } else _v6(!0), _v4.current?.openModal(), _v10.buttonEvent(_v80);
        };
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v1 === _v80 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [_v11 ? (0, _v1.jsx)(_v21.IconButton, {
            "aria-label": _v3.settingControls.manageTranscriptionKeywords.description,
            size: "sm",
            variant: "secondary",
            icon: (0, _v1.jsx)(_v22.ChevronRightSmall, {}),
            onClick: _v12,
            isDisabled: _v2
          }) : (0, _v1.jsx)(_v20.Button, {
            size: "sm",
            variant: "secondary",
            onClick: _v12,
            isDisabled: _v2,
            children: _v3.controls.manage
          }), (!_v11 || _v5) && (0, _v1.jsx)(_v24.TranscriptionKeywordsApp, {
            forwardRef: _v4,
            location: "team_manager"
          })]
        }), _v1 === _v81 && (0, _v1.jsx)(_v66, {
          userId: _v0,
          teamSetting: _v1
        }), _v1 === _v82 && (0, _v1.jsx)(_v79, {
          userId: _v0,
          isDisabled: _v2,
          sendAskAiAnalyticsBpEvent: () => {
            _v10.buttonEvent(_v82);
          }
        })]
      });
    };
  var _v84 = _v0.i(0);
  function _v85(_v0, _v1) {
    if (!_v0 || !_v1) return;
    let _v2 = _v1.split("."),
      _v3 = _v0;
    for (let _v0 of _v2) {
      if ("object" != typeof _v3 || null === _v3 || !(_v0 in _v3)) return;
      _v3 = _v3[_v0];
    }
    return _v3;
  }
  let _v86 = "toggle",
    _v87 = "title",
    _v88 = "button",
    _v89 = "role",
    _v90 = {
      aiTitleGeneral: "aiTitleGeneral",
      aiTitleSearchAndAskAi: "aiTitleSearchAndAskAi",
      aiTitleLocalisation: "aiTitleLocalisation"
    },
    _v91 = {
      transcript: [{
        key: _v37.enableTranscriptionGeneration,
        value: !1,
        isSectionTitle: !0,
        isParentPreference: !0,
        type: _v86,
        sectionVisibility: {
          capabilitiesToCheck: ["hasAiTeamSettings"]
        }
      }, {
        key: _v37.manageTranscriptionKeywords,
        value: !1,
        type: _v88
      }, {
        key: _v37.userRolePermissionTranscriptionKeywords,
        value: _v33,
        type: _v89
      }],
      general: [{
        key: _v90.aiTitleGeneral,
        value: !1,
        isSectionTitle: !0,
        type: _v87,
        sectionVisibility: {
          preferencesToCheck: [_v37.manageTranscriptionKeywords],
          capabilitiesToHide: ["hasAiTeamSettings"]
        }
      }, {
        key: _v37.manageTranscriptionKeywords,
        value: !1,
        type: _v88
      }, {
        key: _v37.userRolePermissionTranscriptionKeywords,
        value: _v33,
        type: _v89
      }],
      translations: [{
        key: _v37.enableParentPermissionAiTranslate,
        value: !1,
        isSectionTitle: !0,
        isParentPreference: !0,
        type: _v86,
        sectionVisibility: {
          capabilitiesToCheck: ["canGenerateClipTranslation", "canGenerateClipTextTranslation"]
        }
      }, {
        key: _v37.enableTranslationsProfanityFilter,
        value: !1,
        type: _v86
      }, {
        key: _v37.enableTranslationsVoiceCloning,
        value: !1,
        type: _v86
      }, {
        key: _v37.enableTranslationsFailureEmail,
        value: !1,
        type: _v86
      }, {
        key: _v37.manageAiAutomationGenerateTranslations,
        value: !1,
        type: _v88
      }, {
        key: _v37.userRolePermissionAiTranslate,
        value: _v33,
        type: _v89
      }],
      localisations: [{
        key: _v90.aiTitleLocalisation,
        value: !1,
        isSectionTitle: !0,
        type: _v87,
        sectionVisibility: {
          orionFlagToCheck: "enable_registration_form_localization"
        }
      }, {
        key: _v37.enableRegistrationFormAiUserTranslation,
        value: !1,
        type: _v86,
        sectionVisibility: {
          orionFlagToCheck: "enable_registration_form_localization"
        }
      }],
      videoDetails: [{
        key: _v37.enableParentPermissionAiVideoDetails,
        value: !1,
        isSectionTitle: !0,
        isParentPreference: !0,
        type: _v86,
        sectionVisibility: {
          capabilitiesToCheck: ["canGenerateClipSummary"]
        }
      }, {
        key: _v37.enableAutoGenerateAiMetadata,
        value: !1,
        type: _v86
      }, {
        key: _v37.userRolePermissionAiVideoDetails,
        value: _v33,
        type: _v89
      }],
      askAi: [{
        key: _v37.enableVideoViewerAiUi,
        value: !1,
        isSectionTitle: !0,
        type: _v86,
        sectionVisibility: {
          capabilitiesToCheck: ["canAskAiViewer"],
          capabilitiesToHide: ["hasAgenticSearchTeamSetting"]
        }
      }, {
        key: _v37.prefEnableAskAiAnalytics,
        value: !1,
        type: _v88
      }],
      searchAndAskAi: [{
        key: _v90.aiTitleSearchAndAskAi,
        value: !1,
        isSectionTitle: !0,
        type: _v87,
        sectionVisibility: {
          capabilitiesToCheck: ["hasAgenticSearchTeamSetting"]
        }
      }, {
        key: _v37.enableVideoViewerAiUi,
        value: !1,
        type: _v86,
        translationKey: "videoAskAi"
      }, {
        key: _v37.prefEnableAskAiAnalytics,
        value: !1,
        type: _v88,
        translationKey: "videoAskAiAnalytics",
        hideDivider: !0
      }, {
        key: _v37.enableLibrarySmartSearch,
        value: !1,
        type: _v86
      }],
      highlights: [{
        key: _v37.enableParentPermissionAiHighlights,
        value: !1,
        isSectionTitle: !0,
        isParentPreference: !0,
        type: _v86,
        sectionVisibility: {
          capabilitiesToCheck: ["hasClipHighlights"]
        }
      }, {
        key: _v37.userRolePermissionAiHighlights,
        value: _v33,
        type: _v89
      }],
      scripts: [{
        key: _v37.enableAiScriptGeneration,
        value: !1,
        isSectionTitle: !0,
        isParentPreference: !0,
        type: _v86,
        sectionVisibility: {
          alwaysShow: !0
        }
      }, {
        key: _v37.userRolePermissionAiScriptGeneration,
        value: _v33,
        type: _v89
      }],
      liveCaptions: [{
        key: _v37.enableParentPermissionAiLiveCaptions,
        value: !1,
        isSectionTitle: !0,
        isParentPreference: !0,
        type: _v86,
        sectionVisibility: {
          alwaysShow: !0
        }
      }, {
        key: _v37.userRolePermissionAiLiveCaptions,
        value: _v33,
        type: _v89
      }]
    },
    _v92 = [];
  for (let _v0 in _v91) _v92 = [..._v92, ..._v91[_v0].map(_v0 => _v0.key)];
  let _v93 = new Set(Object.values(_v90)),
    _v94 = new Set(Object.keys(_v36)),
    _v95 = _v92.filter(_v0 => !_v93.has(_v0) && !_v94.has(_v0)),
    _v96 = function ({
      mergedSettingsPrefs: _v0,
      isSelfServe: _v1 = !1,
      ownerId: _v2
    }) {
      let _v3,
        {
          capabilities: _v4
        } = (0, _v84.useCapability)((_v3 = [], Object.values(_v91).forEach(_v0 => {
          _v0.forEach(_v0 => {
            _v0.sectionVisibility?.capabilitiesToCheck?.forEach(_v0 => {
              _v3.includes(_v0) || _v3.push(_v0);
            }), _v0.sectionVisibility?.capabilitiesToHide?.forEach(_v0 => {
              _v3.includes(_v0) || _v3.push(_v0);
            });
          });
        }), _v3), _v2),
        {
          settings: _v5
        } = (0, _v23.useOrionSettings)();
      return {
        SETTINGS: (0, _v7.useMemo)(() => function (_v0, _v1, _v2, _v3) {
          if (!_v0) return null;
          let _v4 = {};
          for (let _v0 in _v91) {
            let _v0 = _v91[_v0];
            _v0.some(_v0 => function (_v0, _v1, _v2, _v3) {
              if (!_v0.sectionVisibility) return !1;
              let {
                  capabilitiesToCheck: _v4,
                  capabilitiesToHide: _v5,
                  preferencesToCheck: _v6,
                  orionFlagToCheck: _v7,
                  alwaysShow: _v8
                } = _v0.sectionVisibility,
                _v9 = void 0 !== _v7;
              if (_v8) return _v0.key in _v90 || _v0.key in _v2;
              if (!((_v4?.length ?? 0) > 0 || (_v6?.length ?? 0) > 0 || _v9)) return !1;
              if (_v5?.length) {
                if (_v5.some(_v0 => _v1[_v0])) return !1;
                if (!_v4?.length && !_v9) return !0;
              }
              return _v4?.length || _v9 ? !!_v4?.some(_v0 => _v1[_v0]) || void 0 !== _v7 && !0 === _v3[_v7] : !!_v6?.length && _v6.some(_v0 => _v0 in _v2);
            }(_v0, _v2, _v0, _v3)) && (_v4[_v0] = _v0.reduce((_v0, _v1) => {
              let _v2 = _v1.key in _v90 || _v1.key in _v0,
                _v3 = _v1.key in _v36,
                _v4 = _v3 ? _v85(_v0, _v1.key) : void 0,
                _v5 = _v3 && !0 === _v4,
                _v6 = !_v3 || _v5,
                _v7 = _v1.sectionVisibility?.orionFlagToCheck,
                _v8 = void 0 === _v7 || !0 === _v3[_v7];
              return _v2 && _v6 && _v8 && (!_v1 || _v1.key !== _v37.userRolePermissionAiTranslate) && _v0.push(function (_v0) {
                return _v0 => {
                  let _v1 = _v0.value;
                  return _v0.key in _v90 || (_v1 = _v0 ? _v85(_v0, _v0.key) : _v0.value), {
                    key: _v0.key,
                    value: _v1,
                    type: _v0.type,
                    ...(void 0 !== _v0.isSectionTitle && {
                      isSectionTitle: _v0.isSectionTitle
                    }),
                    ...(void 0 !== _v0.isParentPreference && {
                      isParentPreference: _v0.isParentPreference
                    }),
                    ...(void 0 !== _v0.translationKey && {
                      translationKey: _v0.translationKey
                    }),
                    ...(void 0 !== _v0.hideDivider && {
                      hideDivider: _v0.hideDivider
                    })
                  };
                };
              }(_v0)(_v1)), _v0;
            }, []));
          }
          return _v4;
        }(_v0, _v1, _v4, _v5), [_v0, _v1, _v4, _v5])
      };
    },
    _v97 = ({
      groupItems: _v0,
      isDisabled: _v1,
      updateTeamSettings: _v2,
      userId: _v3
    }) => {
      let _v4 = (0, _v7.useMemo)(() => _v48(), []),
        _v5 = (0, _v7.useMemo)(() => _v0.reduce((_v0, _v1) => {
          let {
            hasParent: _v2,
            isParentEnabled: _v3,
            filteredItems: _v4
          } = _v0;
          return _v1.isParentPreference ? {
            hasParent: !0,
            isParentEnabled: !!_v1.value,
            filteredItems: [..._v4, _v1]
          } : !_v2 || _v3 ? {
            ..._v0,
            filteredItems: [..._v4, _v1]
          } : _v0;
        }, {
          hasParent: !1,
          isParentEnabled: !1,
          filteredItems: []
        }).filteredItems, [_v0]);
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v5.map(_v0 => {
          let {
              key: _v1,
              value: _v2,
              isSectionTitle: _v3,
              type: _v4,
              translationKey: _v5,
              hideDivider: _v6
            } = _v0,
            _v7 = _v5 ?? _v1,
            _v8 = _v4.settingControls[_v7]?.title,
            _v9 = _v4.settingControls[_v7]?.description,
            _v10 = _v4.settingTooltips[_v7],
            _v11 = _v4 === _v89;
          return (0, _v1.jsxs)(_v8.Box, {
            position: "relative",
            marginTop: _v6 ? "20" : void 0,
            children: [!_v3 && !_v6 && (0, _v1.jsx)(_v9.Divider, {
              borderColor: "stroke",
              marginY: "20"
            }), (0, _v1.jsxs)(_v2.Flex, {
              justifyContent: "space-between",
              flexDirection: _v11 ? {
                base: "column",
                sm: "row"
              } : "row",
              alignItems: _v11 ? {
                base: "flex-start",
                sm: "center"
              } : "center",
              children: [(0, _v1.jsxs)(_v8.Box, {
                children: [(0, _v1.jsxs)(_v2.Flex, {
                  alignItems: "center",
                  gap: "75",
                  marginBottom: "sm",
                  children: [(0, _v1.jsx)(_v10.Header, {
                    variant: `heading-${_v3 ? "md" : "xs"}`,
                    color: "text-primary",
                    as: _v3 ? "h4" : "h6",
                    marginBottom: "0",
                    size: "xl",
                    children: _v8
                  }), _v10 && (0, _v1.jsx)(_v13.Tooltip, {
                    label: _v10,
                    placement: "top",
                    children: (0, _v1.jsx)(_v2.Flex, {
                      children: (0, _v1.jsx)(_v14.InfoCircle, {
                        width: "2xs"
                      })
                    })
                  })]
                }), _v9 && (0, _v1.jsx)(_v11.Paragraph, {
                  variant: "body-md",
                  color: _v3 ? "text-primary" : "text-secondary",
                  children: _v9
                })]
              }), _v4 !== _v87 && (0, _v1.jsxs)(_v8.Box, {
                "data-id": _v1,
                marginLeft: _v11 ? {
                  base: "0",
                  sm: "md"
                } : "md",
                children: [_v4 === _v86 && (0, _v1.jsx)(_v12.Switch, {
                  onChange: () => _v2(_v1, !_v2, _v4),
                  isChecked: "boolean" == typeof _v2 && _v2,
                  isDisabled: _v1
                }), _v4 === _v88 && (0, _v1.jsx)(_v83, {
                  userId: _v3,
                  teamSetting: _v1,
                  isDisabled: _v1
                }), _v4 === _v89 && (0, _v1.jsx)(_v18, {
                  value: _v2,
                  options: _v34,
                  onChange: _v0 => _v2(_v1, _v0, _v4),
                  isDisabled: _v1
                })]
              })]
            })]
          }, _v1);
        })
      });
    };
  var _v98 = _v0.i(0);
  _v0.s(["default", 0, ({
    ownerId: _v0,
    workspaceInternalId: _v1,
    workspaceUuid: _v2
  }) => {
    let {
        settingsCofig: _v3,
        updateTeamSettings: _v4,
        isDisabled: _v5,
        isFirstLoad: _v6,
        isSettingsResults: _v7,
        userId: _v8
      } = function ({
        ownerId: _v0,
        workspaceInternalId: _v1,
        workspaceUuid: _v2
      }) {
        let _v3 = (0, _v7.useMemo)(() => _v48(), []),
          _v4 = (0, _v56.useToast)(),
          _v5 = _v46(),
          _v6 = (0, _v7.useRef)(0),
          {
            teamSettingsUpdateError: _v7,
            teamSettingsUpdateLoading: _v8,
            onUpdateSetting: _v9
          } = (0, _v59.useUpdateTeamSettings)({
            userId: _v0,
            workspaceUuid: _v2
          }),
          {
            data: _v10,
            error: _v11,
            isLoading: _v12,
            isValidating: _v13,
            mutate: _v14
          } = (0, _v60.useGetTeamSettingsWithMutate)({
            settings: _v95,
            userId: _v0,
            workspaceUuid: _v2
          }),
          _v15 = (0, _v31.useViewer)(),
          _v16 = _v15?.teamUser ? "enterprise" === _v15.teamUser.accountType : !!_v15?.user && "enterprise" === _v15.user.account,
          {
            data: _v17
          } = (0, _v98.useGetMePreferences)({
            select: Object.values(_v35)
          }),
          _v18 = (0, _v7.useMemo)(() => {
            if (!_v10) return null;
            let _v0 = {};
            return _v17 && (_v0 = Object.entries(_v35).reduce((_v0, _v1) => {
              let [_v2, _v3] = _v1;
              return _v3 in _v17 && (_v0[_v2] = _v17[_v3]), _v0;
            }, {})), {
              ..._v10,
              ..._v0
            };
          }, [_v10, _v17]),
          {
            SETTINGS: _v19
          } = _v96({
            mergedSettingsPrefs: _v18,
            isSelfServe: !_v16,
            ownerId: _v0 || _v1
          }),
          _v20 = (0, _v7.useCallback)(async (_v0, _v1, _v2) => {
            await _v9({
              [_v0]: _v1
            }), _v14(), _v2 === _v86 ? _v5.toggleEvent(_v0, _v1) : _v2 === _v89 && _v5.dropdownEvent(_v0, _v1);
          }, [_v9, _v14, _v5]);
        (0, _v7.useEffect)(function () {
          let _v0 = Date.now();
          (_v11 || _v7) && _v0 - _v6.current > 0 && (_v4({
            duration: 0,
            title: _v3.notifications.error
          }), _v6.current = _v0);
        }, [_v11, _v7, _v4, _v3]);
        let _v21 = !_v18 && (_v12 || _v13);
        return {
          settingsCofig: _v19,
          updateTeamSettings: _v20,
          isDisabled: _v8 || _v13 || _v12,
          isFirstLoad: _v21,
          isSettingsResults: !!_v18,
          userId: _v0 || _v1
        };
      }({
        ownerId: _v0,
        workspaceInternalId: _v1,
        workspaceUuid: _v2
      }),
      _v9 = Object.entries(_v3 || {}).length;
    return (0, _v1.jsxs)(_v2.Flex, {
      width: "100%",
      maxWidth: _v32,
      margin: "0 auto",
      flexDirection: "column",
      marginBottom: "800",
      children: [(0, _v1.jsx)(_v4.SettingsPageContentHeader, {
        title: _v6.T.ManageAi
      }), _v6 ? (0, _v1.jsx)(_v5.Spinner, {}) : _v7 && _v3 && Object.entries(_v3).map(([_v0, _v1], _v2) => _v1 && _v1.length ? (0, _v1.jsx)(_v3.Card, {
        position: "relative",
        padding: "24",
        marginBottom: "25",
        borderRadius: "md",
        backgroundColor: "fill-surface",
        zIndex: _v9 - _v2,
        children: (0, _v1.jsx)(_v97, {
          groupItems: _v1,
          isDisabled: _v5,
          updateTeamSettings: _v4,
          userId: _v8
        })
      }, `group-card-${_v0}`) : null).filter(_v0 => null !== _v0)]
    });
  }], 0);
}