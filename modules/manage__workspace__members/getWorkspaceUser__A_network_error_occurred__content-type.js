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
    _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2,
      workspaceUserId: _v3
    },
    ..._v4
  }) {
    return (0, _v23.measureLatency)("getWorkspaceUser", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/users/${_v3}?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  async function _v26({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3,
      workspaceUserId: _v4
    },
    ..._v5
  }) {
    return (0, _v23.measureLatency)("patchWorkspaceUser", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/users/${_v4}?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  function _v30(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v29.useGctlConfig)();
    return (0, _v27.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/users/${_v2.where.workspaceUserId}${(0, _v22.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v25({
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
  }
  "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(_v30, {
    endpoint: "/workspaces/:workspaceUuid/users/:workspaceUserId",
    method: "GET"
  }), "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/users/${_v0.where.workspaceUserId}${(0, _v22.serializeQuery)(_v0)}`, _v25({
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
  }, {
    endpoint: "/workspaces/:workspaceUuid/users/:workspaceUserId",
    method: "GET"
  }), "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/users/${_v0.where.workspaceUserId}${(0, _v22.serializeQuery)(_v0)}`, _v26({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  }, {
    endpoint: "/workspaces/:workspaceUuid/users/:workspaceUserId",
    method: "PATCH"
  });
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  let _v48 = ({
    mode: _v0,
    onModeChange: _v1,
    draft: _v2,
    onDraftChange: _v3,
    maxCredits: _v4 = null,
    resetDate: _v5 = null
  }) => {
    let _v6 = _v5 ? new Date(_v5).toLocaleDateString(void 0, {
      day: "numeric",
      month: "short",
      year: "numeric"
    }) : null;
    return (0, _v1.jsxs)(_v42.Stack, {
      spacing: (0, _v13.rem)(8),
      children: [(0, _v1.jsx)(_v3.Text, {
        fontWeight: 700,
        children: (0, _v44.translate)({
          singular: "Credits limit",
          dictionary: {
            es: {
              singular: "Límite de créditos"
            },
            "de-DE": {
              singular: "Credits-Limit"
            },
            "fr-FR": {
              singular: "Limite de crédits"
            },
            "ja-JP": {
              singular: "クレジット上限"
            },
            "ko-KR": {
              singular: "크레딧 한도"
            },
            "pt-BR": {
              singular: "Limite de créditos"
            },
            "zh-CN": {
              singular: "积分上限"
            }
          }
        })
      }), (0, _v1.jsx)(_v46.Select, {
        size: "md",
        items: [{
          label: (0, _v44.translate)({
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
          label: (0, _v44.translate)({
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
        leftIcon: "none" === _v0 ? (0, _v1.jsx)(_v47.PersonUser, {}) : (0, _v1.jsx)(_v38.FiltersLevers, {}),
        onValueChange: _v0 => _v1(_v0.value[0] ?? "none"),
        value: [_v0],
        children: _v0 => (0, _v1.jsx)(_v46.SelectItem, {
          label: _v0.label,
          children: (0, _v1.jsxs)(_v12.HStack, {
            spacing: (0, _v13.rem)(8),
            children: ["none" === _v0.value ? (0, _v1.jsx)(_v47.PersonUser, {}) : (0, _v1.jsx)(_v38.FiltersLevers, {}), (0, _v1.jsx)(_v46.SelectItemText, {
              children: _v0.label
            })]
          })
        })
      }), "custom" === _v0 && (0, _v1.jsx)(_v45.Input, {
        inputMode: "numeric",
        placeholder: "2,500",
        value: _v2,
        onChange: _v0 => _v3(_v0.target.value.replace(/[^0-9]/g, ""))
      }), _v6 && (0, _v1.jsx)(_v3.Text, {
        color: "text-secondary",
        fontSize: (0, _v13.rem)(12),
        fontWeight: 350,
        lineHeight: "120%",
        letterSpacing: "-0.02em",
        children: (0, _v44.translate)({
          singular: "Maximum: {max} credits. Limits reset on {date}.",
          replacements: {
            max: (_v4 ?? 0).toLocaleString(),
            date: _v6
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
      })]
    });
  };
  var _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  let _v55 = ({
      isOpen: _v0,
      title: _v1,
      sections: _v2,
      activeSectionKey: _v3,
      onSectionChange: _v4,
      onClose: _v5,
      onSave: _v6,
      isSaving: _v7 = !1,
      isSaveDisabled: _v8 = !1,
      cancelLabel: _v9,
      saveLabel: _v10
    }) => {
      let [_v11, _v12] = (0, _v10.useState)(_v2[0]?.key ?? ""),
        _v13 = _v3 ?? _v11,
        _v14 = _v2.find(_v0 => _v0.key === _v13) ?? _v2[0];
      return (0, _v1.jsxs)(_v49.Modal, {
        isOpen: _v0,
        onClose: _v5,
        size: "lg",
        children: [(0, _v1.jsx)(_v54.ModalOverlay, {}), (0, _v1.jsxs)(_v51.ModalContent, {
          maxW: (0, _v13.rem)(960),
          children: [(0, _v1.jsx)(_v53.ModalHeader, {
            pr: "7",
            pb: "sm",
            children: _v1
          }), (0, _v1.jsx)(_v50.ModalCloseButton, {}), (0, _v1.jsx)(_v11.Box, {
            h: "1px",
            bg: "stroke"
          }), (0, _v1.jsxs)(_v12.HStack, {
            align: "stretch",
            spacing: 0,
            minH: (0, _v13.rem)(320),
            flex: 1,
            children: [(0, _v1.jsx)(_v2.VStack, {
              w: "33%",
              align: "stretch",
              spacing: 0,
              p: "lg",
              children: _v2.map(_v0 => (0, _v1.jsx)(_v11.Box, {
                cursor: "pointer",
                px: "md",
                h: (0, _v13.rem)(40),
                display: "flex",
                alignItems: "center",
                borderRadius: "md",
                bg: _v13 === _v0.key ? "fill-component" : "transparent",
                _hover: _v13 === _v0.key ? void 0 : {
                  bg: "fill-component-hover"
                },
                onClick: () => {
                  var _v0;
                  _v12(_v0 = _v0.key), _v4?.(_v0);
                },
                children: (0, _v1.jsx)(_v3.Text, {
                  variant: "heading-xs",
                  fontWeight: _v13 === _v0.key ? "bold" : "normal",
                  children: _v0.label
                })
              }, _v0.key))
            }), (0, _v1.jsx)(_v11.Box, {
              w: "1px",
              bg: "stroke"
            }), (0, _v1.jsx)(_v2.VStack, {
              w: "75%",
              align: "stretch",
              p: "lg",
              children: (0, _v1.jsx)(_v11.Box, {
                children: _v14?.content
              })
            })]
          }), (0, _v1.jsxs)(_v52.ModalFooter, {
            display: "block",
            px: 0,
            py: "lg",
            children: [(0, _v1.jsx)(_v41.Divider, {
              borderColor: "stroke",
              opacity: .6,
              mb: (0, _v13.rem)(16)
            }), (0, _v1.jsxs)(_v12.HStack, {
              justifyContent: "flex-end",
              gap: (0, _v13.rem)(8),
              px: "lg",
              children: [(0, _v1.jsx)(_v35.Button, {
                variant: "tertiary",
                onClick: _v5,
                isDisabled: _v7,
                children: _v9 ?? (0, _v44.translate)({
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
              }), (0, _v1.jsx)(_v35.Button, {
                variant: "primary",
                onClick: _v6,
                isLoading: _v7,
                isDisabled: _v8,
                children: _v10 ?? (0, _v44.translate)({
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
    },
    _v56 = [{
      key: "vocabulary",
      label: (0, _v44.translate)({
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
      description: (0, _v44.translate)({
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
      label: (0, _v44.translate)({
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
      description: (0, _v44.translate)({
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
      label: (0, _v44.translate)({
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
      description: (0, _v44.translate)({
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
      label: (0, _v44.translate)({
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
      description: (0, _v44.translate)({
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
      label: (0, _v44.translate)({
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
      description: (0, _v44.translate)({
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
      label: (0, _v44.translate)({
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
      description: (0, _v44.translate)({
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
    _v57 = async (_v0, _v1, _v2, _v3) => {
      if (_v0 && !(await fetch(`//${_v0.apiUrl}/users/${_v1}/team_users/${_v2}`, {
        method: "PATCH",
        headers: {
          Authorization: `jwt ${_v0.jwt}`,
          "Content-Type": "application/json",
          Accept: "application/vnd.vimeo.*+json;version=3.4.1"
        },
        body: JSON.stringify(_v3)
      })).ok) throw Error("Failed to update the member AI access");
    },
    _v58 = ({
      displayToast: _v0,
      isOpen: _v1,
      onClose: _v2,
      workspaceOwnerId: _v3,
      selectedMemberIds: _v4
    }) => {
      let _v5 = (0, _v33.useViewer)(),
        [_v6, _v7] = (0, _v10.useState)(_v56.map(_v0 => _v0.key)),
        [_v8, _v9] = (0, _v10.useState)("none"),
        [_v10, _v11] = (0, _v10.useState)(""),
        [_v12, _v13] = (0, _v10.useState)(!1),
        [_v14, _v15] = (0, _v10.useState)({
          limit: null,
          resetDate: null
        });
      (0, _v10.useEffect)(() => {
        if (!_v5 || !_v1) return;
        let _v0 = !1;
        return (async () => {
          try {
            let _v0 = await fetch(`//${_v5.apiUrl}/me/ai_credits/usage`, {
              headers: {
                Authorization: `jwt ${_v5.jwt}`,
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            });
            if (_v0.ok && !_v0) {
              let _v0 = await _v0.json();
              _v15({
                limit: _v0.account_limit ?? null,
                resetDate: _v0.quota_end ?? null
              });
            }
          } catch {}
        })(), () => {
          _v0 = !0;
        };
      }, [_v5, _v1]);
      let _v16 = "" === _v10.trim() ? null : Number(_v10),
        _v17 = "custom" === _v8 && null === _v16,
        _v18 = async () => {
          if (!_v5 || !_v3) return;
          _v13(!0);
          let _v0 = 0;
          for (let _v0 of _v4) try {
            await _v57(_v5, _v3, _v0, {
              ai_permission: !0,
              ai_features: Object.fromEntries(_v56.map(_v0 => [_v0.key, _v6.includes(_v0.key)])),
              ai_credit_limit: "custom" === _v8 ? _v16 : null
            });
          } catch {
            _v0 += 1;
          }
          _v13(!1), _v0 > 0 ? _v0((0, _v44.translate)({
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
          }), "warning") : _v0((0, _v44.translate)({
            singular: "The selected members were updated.",
            dictionary: {
              es: {
                singular: "Los miembros seleccionados se actualizaron."
              },
              "de-DE": {
                singular: "Die ausgewählten Mitglieder wurden aktualisiert."
              },
              "fr-FR": {
                singular: "Les membres sélectionnés ont été mis à jour."
              },
              "ja-JP": {
                singular: "選択したメンバーが更新されました。"
              },
              "ko-KR": {
                singular: "선택한 구성원이 업데이트되었습니다."
              },
              "pt-BR": {
                singular: "Os membros selecionados foram atualizados."
              },
              "zh-CN": {
                singular: "所选成员已更新。"
              }
            }
          })), _v2();
        },
        _v19 = [{
          key: "ai",
          label: (0, _v44.translate)({
            singular: "Vimeo AI",
            dictionary: {
              "fr-FR": {
                singular: "IA Vimeo"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v42.Stack, {
            spacing: (0, _v13.rem)(24),
            children: [(0, _v1.jsxs)(_v42.Stack, {
              spacing: (0, _v13.rem)(12),
              children: [(0, _v1.jsx)(_v3.Text, {
                fontWeight: 600,
                color: "text-tertiary",
                children: (0, _v44.translate)({
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
              }), (0, _v1.jsx)(_v3.Text, {
                color: "text-secondary",
                variant: "body-sm",
                children: (0, _v44.translate)({
                  singular: "Set the maximum number of AI credits these members can use during the current period. Credits aren’t reserved or allocated to them.",
                  dictionary: {
                    es: {
                      singular: "Establece el número máximo de créditos de IA que estos miembros pueden usar durante el período actual. Los créditos no están reservados ni asignados a ellos."
                    },
                    "de-DE": {
                      singular: "Legen Sie die maximale Anzahl an KI-Credits fest, die diese Mitglieder im aktuellen Zeitraum nutzen können. Credits werden ihnen nicht reserviert oder zugewiesen."
                    },
                    "fr-FR": {
                      singular: "Définissez le nombre maximum de crédits IA que ces membres peuvent utiliser pendant la période en cours. Les crédits ne leur sont pas réservés ni alloués."
                    },
                    "ja-JP": {
                      singular: "この期間中にメンバーが使用できるAIクレジットの最大数を設定します。クレジットは予約・割り当てされるものではありません。"
                    },
                    "ko-KR": {
                      singular: "이 구성원들이 현재 기간 동안 사용할 수 있는 AI 크레딧의 최대 수를 설정합니다. 크레딧은 해당 구성원에게 예약되거나 할당되지 않습니다."
                    },
                    "pt-BR": {
                      singular: "Defina o número máximo de créditos de IA que esses membros podem usar durante o período atual. Os créditos não são reservados nem alocados a eles."
                    },
                    "zh-CN": {
                      singular: "设置这些成员在当前周期可使用的 AI 积分上限。积分不会被保留或分配给他们。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v48, {
                mode: _v8,
                onModeChange: _v9,
                draft: _v10,
                onDraftChange: _v11,
                maxCredits: _v14.limit,
                resetDate: _v14.resetDate
              })]
            }), (0, _v1.jsx)(_v41.Divider, {
              borderColor: "stroke"
            }), (0, _v1.jsxs)(_v42.Stack, {
              spacing: (0, _v13.rem)(16),
              children: [(0, _v1.jsx)(_v3.Text, {
                fontWeight: 600,
                color: "text-tertiary",
                children: (0, _v44.translate)({
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
              }), _v56.map(_v0 => (0, _v1.jsxs)(_v12.HStack, {
                justifyContent: "space-between",
                alignItems: "center",
                gap: (0, _v13.rem)(16),
                children: [(0, _v1.jsxs)(_v42.Stack, {
                  spacing: 0,
                  children: [(0, _v1.jsx)(_v3.Text, {
                    variant: "body-md",
                    fontWeight: 700,
                    children: _v0.label
                  }), (0, _v1.jsx)(_v3.Text, {
                    color: "text-secondary",
                    variant: "body-sm",
                    children: _v0.description
                  })]
                }), (0, _v1.jsx)(_v43.Switch, {
                  isChecked: _v6.includes(_v0.key),
                  onChange: () => {
                    var _v0, _v1;
                    return _v0 = _v0.key, _v1 = !_v6.includes(_v0.key), void _v7(_v0 => _v1 ? [..._v0, _v0] : _v0.filter(_v0 => _v0 !== _v0));
                  },
                  "aria-label": _v0.label
                })]
              }, _v0.key))]
            })]
          })
        }];
      return (0, _v1.jsx)(_v55, {
        isOpen: _v1,
        title: (0, _v1.jsx)(_v3.Text, {
          variant: "heading-md",
          children: (0, _v44.translate)({
            singular: "Manage features access",
            dictionary: {
              es: {
                singular: "Administrar el acceso a funciones"
              },
              "de-DE": {
                singular: "Zugriff auf Funktionen verwalten"
              },
              "fr-FR": {
                singular: "Gérer l'accès aux fonctionnalités"
              },
              "ja-JP": {
                singular: "機能へのアクセスを管理"
              },
              "ko-KR": {
                singular: "기능 접근 권한 관리"
              },
              "pt-BR": {
                singular: "Gerenciar acesso às funcionalidades"
              },
              "zh-CN": {
                singular: "管理功能访问权限"
              }
            }
          })
        }),
        sections: _v19,
        onClose: _v2,
        onSave: () => {
          _v18();
        },
        isSaving: _v12,
        isSaveDisabled: _v17,
        saveLabel: (0, _v44.translate)({
          singular: "Override access",
          dictionary: {
            es: {
              singular: "Anular acceso"
            },
            "de-DE": {
              singular: "Zugriff überschreiben"
            },
            "fr-FR": {
              singular: "Remplacer l'accès"
            },
            "ja-JP": {
              singular: "アクセスを上書き"
            },
            "ko-KR": {
              singular: "접근 권한 재정의"
            },
            "pt-BR": {
              singular: "Substituir acesso"
            },
            "zh-CN": {
              singular: "覆盖访问权限"
            }
          }
        })
      });
    };
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = ({
    isOpen: _v0,
    onClose: _v1,
    workspaceName: _v2,
    selectedMembers: _v3,
    onRemoval: _v4
  }) => {
    let _v5 = (0, _v6.getTranslations)(),
      _v6 = (0, _v15.useToast)(),
      [_v7, _v8] = (0, _v10.useState)(!1),
      [_v9] = (0, _v59.useDeleteWorkspaceMember)(),
      _v10 = (0, _v10.useCallback)(async () => {
        _v8(!0);
        let _v0 = 0;
        for (let _v0 of _v3) {
          let {
            workspaceMemberId: _v0,
            workspaceUuid: _v1
          } = (0, _v60.parseWorkspaceMemberUri)(_v0.uri);
          try {
            await _v9({
              where: {
                workspaceUuid: _v1,
                workspaceMemberId: _v0
              }
            });
          } catch {
            _v0 += 1;
          }
        }
        _v8(!1), _v0 > 0 ? _v6({
          duration: 0,
          title: (0, _v44.translate)({
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
          variant: "warning",
          id: "bulk-remove-members-failure"
        }) : _v6.isActive("bulk-remove-members") || _v6({
          title: _v5.XMembersRemoved(_v3.length),
          variant: "neutral",
          id: "bulk-remove-members"
        }), _v1(), _v4();
      }, [_v9, _v1, _v4, _v3, _v5, _v6]),
      _v11 = 1 === _v3.length ? _v3[0]?.user?.name ?? _v3[0]?.email ?? void 0 : void 0;
    return (0, _v1.jsx)(_v61.RemovalConfirmationModal, {
      isOpen: _v0,
      onClose: _v1,
      header: _v5.RemoveXMembersFromWorkspace(_v3.length, _v2),
      onConfirmAction: () => {
        _v10();
      },
      isLoading: _v7,
      width: 400,
      children: (0, _v1.jsx)(_v3.Text, {
        variant: "body-md",
        children: _v5.RemoveFromWorkspaceBulkActionConfirmation({
          member: _v11,
          workspaceName: _v2
        })
      })
    });
  };
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0);
  let _v71 = ["applicablePermissionPolicies.folder.createdOn", "applicablePermissionPolicies.folder.displayDescription", "applicablePermissionPolicies.folder.displayName", "applicablePermissionPolicies.folder.modifiedOn", "applicablePermissionPolicies.folder.name", "applicablePermissionPolicies.folder.permissionActions", "applicablePermissionPolicies.folder.uri", "permissionLevel", "uri"],
    _v72 = ({
      displayToast: _v0,
      isOpen: _v1,
      onClose: _v2,
      workspaceOwnerId: _v3,
      selectedMemberUris: _v4
    }) => {
      let _v5 = (0, _v6.getTranslations)(),
        [_v6, _v7] = (0, _v10.useState)({
          isSelected: !1,
          children: {}
        }),
        [_v8, _v9] = (0, _v10.useState)(null),
        [_v10, {
          loading: _v11,
          error: _v12,
          complete: _v13
        }] = (0, _v67.usePutBatchFolderTeamPermissions)(),
        _v14 = (0, _v33.useViewer)(),
        [_v15, _v16] = (0, _v10.useState)([]),
        [_v17, _v18] = (0, _v10.useState)(!1);
      (0, _v10.useEffect)(() => {
        let _v0 = !1;
        return (async () => {
          if (!_v1 || !_v14 || 0 === _v4.length) return;
          let _v0 = await Promise.all(_v4.map(async _v0 => {
            let {
              workspaceUuid: _v1,
              workspaceMemberId: _v2
            } = (0, _v60.parseWorkspaceMemberUri)(_v0);
            return await (0, _v69.getWorkspaceMember)({
              baseUrl: `${location.protocol}//${_v14.apiUrl}`,
              select: _v71,
              where: {
                workspaceUuid: _v1,
                workspaceMemberId: _v2
              },
              headers: {
                Authorization: `jwt ${_v14.jwt}`
              }
            });
          }));
          _v0 || (_v16(_v0), _v18(!0));
        })().catch(() => {
          _v0 || (_v16([]), _v18(!0));
        }), () => {
          _v0 = !0;
        };
      }, [_v1, _v4, _v14]);
      let _v19 = (0, _v65.getApplicableFolderPolicies)(_v15),
        _v20 = _v19.length ? _v19[0] : null,
        _v21 = _v8 ?? _v20,
        _v22 = 0 === Object.keys(_v6.children).length || !_v21;
      return (0, _v10.useEffect)(() => {
        !_v11 && (_v12 || _v13) && (_v13 ? _v0(_v5.FoldersShared) : _v0(_v5.UnableToShareFolders, "warning"), _v2());
      }, [_v0, _v2, _v5, _v13, _v12, _v11]), (0, _v1.jsxs)(_v49.Modal, {
        isOpen: _v1,
        onClose: _v11 ? _v63.default : _v2,
        children: [(0, _v1.jsx)(_v54.ModalOverlay, {}), (0, _v1.jsxs)(_v51.ModalContent, {
          children: [(0, _v1.jsxs)(_v53.ModalHeader, {
            pb: "0",
            children: [(0, _v1.jsx)(_v3.Text, {
              variant: "heading-md",
              children: _v5.ShareFolders
            }), (0, _v1.jsx)(_v3.Text, {
              variant: "body-md",
              children: _v5.ShareFoldersDescription
            })]
          }), (0, _v1.jsx)(_v50.ModalCloseButton, {
            isDisabled: _v11
          }), (0, _v1.jsx)(_v68.ModalBody, {
            pt: "0",
            children: _v15.length > 0 && (0, _v1.jsx)(_v64.AddToFoldersModalBodyContent, {
              applicableFolderPolicies: _v19,
              error: null,
              header: (0, _v1.jsx)(_v70.AddToFolderModalBodyHeader, {}),
              ownerId: _v3,
              searchPlaceHolderText: _v5.Search,
              selectedFoldersTree: _v6,
              selectedPermissionPolicy: _v21,
              setSelectedFoldersTree: _v7,
              setSelectedPermissionPolicy: _v9,
              teamUsers: _v15
            })
          }), (0, _v1.jsxs)(_v52.ModalFooter, {
            children: [(0, _v1.jsx)(_v35.Button, {
              isDisabled: _v11,
              onClick: _v2,
              size: "md",
              variant: "tertiary",
              children: _v5.Cancel
            }), (0, _v1.jsx)(_v35.Button, {
              isDisabled: !_v17 || _v22,
              isLoading: _v11,
              onClick: () => {
                0 !== _v15.length && _v3 && _v21?.uri && _v10(_v15, (0, _v66.getSelectedFolderUrisFromTree)(_v6), _v3, _v21.uri);
              },
              size: "md",
              variant: "primary",
              children: _v5.Share
            })]
          })]
        })]
      });
    };
  var _v73 = _v0.i(0);
  let _v74 = ({
    displayToast: _v0,
    workspaceName: _v1,
    workspaceUuid: _v2,
    workspaceOwnerId: _v3,
    workspaceMembers: _v4,
    revalidateWorkspaceMembers: _v5,
    revalidateWorkspaceMemberCount: _v6
  }) => {
    let _v7 = (0, _v6.getTranslations)(),
      {
        settings: _v8
      } = (0, _v31.useOrionSettings)(),
      _v9 = _v8.show_granular_permissions,
      {
        selectedItems: _v10,
        resetSelection: _v11
      } = (0, _v73.useSelectionContext)(),
      {
        isOpen: _v12,
        onOpen: _v13,
        onClose: _v14
      } = (0, _v14.useDisclosure)(),
      {
        isOpen: _v15,
        onOpen: _v16,
        onClose: _v17
      } = (0, _v14.useDisclosure)(),
      {
        isOpen: _v18,
        onOpen: _v19,
        onClose: _v20
      } = (0, _v14.useDisclosure)(),
      _v21 = _v4.filter(_v0 => _v10.has(_v0.uri));
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v10.size > 0 && !_v12 && !_v18 && !_v15 && (0, _v1.jsx)(_v37.Portal, {
        children: (0, _v1.jsx)(_v11.Box, {
          pos: "fixed",
          left: "50%",
          bottom: {
            base: "0",
            sm: (0, _v13.rem)(60)
          },
          transform: "translateX(-50%)",
          children: (0, _v1.jsxs)(_v34.ActionBar, {
            children: [(0, _v1.jsx)(_v34.ActionBarText, {
              variant: "heading-xs",
              children: _v7.XMembersSelected(_v10.size)
            }), (0, _v1.jsxs)(_v34.ActionBarButtonGroup, {
              children: [(0, _v1.jsx)(_v35.Button, {
                size: "sm",
                leftIcon: (0, _v1.jsx)(_v39.FolderPlus, {}),
                "aria-label": _v7.ShareFolders,
                onClick: _v19,
                children: _v7.ShareFolders
              }, "bulk-action-share-folders"), (0, _v1.jsx)(_v35.Button, {
                size: "sm",
                isDisabled: !_v9,
                leftIcon: (0, _v1.jsx)(_v38.FiltersLevers, {}),
                "aria-label": _v7.ManageFeaturesAccess,
                onClick: _v16,
                children: _v7.ManageFeaturesAccess
              }, "bulk-action-manage-features-access"), (0, _v1.jsx)(_v35.Button, {
                size: "sm",
                leftIcon: (0, _v1.jsx)(_v40.UserMinus, {}),
                "aria-label": _v7.RemoveFromWorkspace,
                onClick: _v13,
                children: _v7.RemoveFromWorkspace
              }, "bulk-action-remove-from-workspace"), (0, _v1.jsx)(_v36.CloseButton, {
                "aria-label": "close button",
                size: "sm",
                variant: "tertiary",
                onClick: () => _v11()
              }, "close-action-bar")]
            })]
          })
        })
      }), _v15 && (0, _v1.jsx)(_v58, {
        displayToast: _v0,
        isOpen: _v15,
        onClose: _v17,
        workspaceOwnerId: _v3,
        selectedMemberIds: _v21.map(_v0 => (0, _v60.parseWorkspaceMemberUri)(_v0.uri).workspaceMemberId)
      }), _v18 && (0, _v1.jsx)(_v72, {
        displayToast: _v0,
        isOpen: _v18,
        onClose: _v20,
        workspaceUuid: _v2,
        workspaceOwnerId: _v3,
        selectedMemberUris: _v21.map(_v0 => _v0.uri)
      }), _v12 && (0, _v1.jsx)(_v62, {
        isOpen: _v12,
        onClose: _v14,
        workspaceName: _v1,
        selectedMembers: _v21,
        onRemoval: () => {
          _v5(), _v6(), _v11();
        }
      })]
    });
  };
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  let _v80 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v3.Text, {
      variant: "body-md",
      ..._v1,
      children: _v0
    }),
    _v81 = ({
      onClickShareFolder: _v0,
      onClickManageFeaturesAccess: _v1,
      onClickViewAccess: _v2,
      onClickViewActivity: _v3,
      onClickRemoveFromWorkspace: _v4,
      isShareFolderDisabled: _v5 = !0,
      isShareFolderVisible: _v6 = !0,
      isViewActivityVisible: _v7 = !1,
      isManageFeaturesAccessVisible: _v8 = !1
    }) => {
      let _v9 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v6 && (0, _v1.jsx)(_v75.MenuItem, {
          isDisabled: _v5,
          onClick: _v0,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v39.FolderPlus, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v9.ShareFolders
            })]
          })
        }), _v8 && (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v1,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v38.FiltersLevers, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v9.ManageFeaturesAccess
            })]
          })
        }), (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v2,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v78.FolderLock, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v9.ViewAccess
            })]
          })
        }), _v7 && (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v3,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v77.Analytics, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v9.ViewActivity
            })]
          })
        }), (0, _v1.jsx)(_v76.MenuDivider, {}), (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v4,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v79.TrashBin, {
              boxSize: "xs",
              color: "status-destructive-primary"
            }), (0, _v1.jsx)(_v80, {
              color: "status-destructive-primary",
              children: _v9.RemoveFromWorkspace
            })]
          })
        })]
      });
    },
    _v82 = ({
      onClickManageFeaturesAccess: _v0,
      onClickViewAccess: _v1,
      onClickViewActivity: _v2,
      isManageFeaturesAccessVisible: _v3 = !1
    }) => {
      let _v4 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v3 && (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v0,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v38.FiltersLevers, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v4.ManageFeaturesAccess
            })]
          })
        }), (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v1,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v78.FolderLock, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v4.ViewAccess
            })]
          })
        }), (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v2,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v77.Analytics, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v4.ViewActivity
            })]
          })
        })]
      });
    },
    _v83 = ({
      onClickResendInvite: _v0,
      onClickCopyInviteLink: _v1,
      onClickShareFolder: _v2,
      onClickRemoveFromWorkspace: _v3,
      isShareFolderDisabled: _v4 = !0,
      isShareFolderVisible: _v5 = !0,
      reminderAlreadySent: _v6 = !1,
      isSendingReminder: _v7 = !1
    }) => {
      let _v8 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v75.MenuItem, {
          isDisabled: _v6 || _v7,
          onClick: _v0,
          children: (0, _v1.jsx)(_v80, {
            children: _v6 ? _v8.ReminderSent : _v8.ResendInviteOption
          })
        }), (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v1,
          children: (0, _v1.jsx)(_v80, {
            children: _v8.CopyInviteLinkOption
          })
        }), _v5 && (0, _v1.jsx)(_v75.MenuItem, {
          isDisabled: _v4,
          onClick: _v2,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v39.FolderPlus, {
              boxSize: "xs"
            }), (0, _v1.jsx)(_v80, {
              children: _v8.ShareFolders
            })]
          })
        }), (0, _v1.jsx)(_v76.MenuDivider, {}), (0, _v1.jsx)(_v75.MenuItem, {
          onClick: _v3,
          children: (0, _v1.jsxs)(_v12.HStack, {
            alignItems: "center",
            gap: (0, _v13.rem)(8),
            children: [(0, _v1.jsx)(_v79.TrashBin, {
              boxSize: "xs",
              color: "status-destructive-primary"
            }), (0, _v1.jsx)(_v80, {
              color: "status-destructive-primary",
              children: _v8.RemoveFromWorkspace
            })]
          })
        })]
      });
    };
  var _v84 = _v0.i(0);
  let _v85 = ({
    isOpen: _v0,
    isLoading: _v1,
    selectedMember: _v2,
    workspaceName: _v3,
    onClose: _v4,
    revalidateWorkspaceMembers: _v5,
    revalidateWorkspaceMemberCount: _v6
  }) => {
    let _v7 = (0, _v6.getTranslations)(),
      _v8 = _v2?.user?.name || _v2?.email || "",
      _v9 = _v2?.permissionLevel === _v84.WORKSPACE_ROLES.VIEWER,
      _v10 = (0, _v15.useToast)(),
      [_v11, {
        called: _v12,
        error: _v13,
        loading: _v14
      }] = (0, _v59.useDeleteWorkspaceMember)(),
      _v15 = (0, _v10.useCallback)(() => {
        if (!_v2) return;
        let {
          workspaceMemberId: _v0,
          workspaceUuid: _v1
        } = (0, _v60.parseWorkspaceMemberUri)(_v2?.uri);
        _v11({
          where: {
            workspaceUuid: _v1,
            workspaceMemberId: _v0
          }
        });
      }, [_v11, _v2]),
      _v16 = (0, _v10.useCallback)(() => {
        _v10.isActive("member-removed-failure") || _v10({
          duration: 0,
          title: _v7.MemberRemovedFromWorkspace(_v3),
          variant: "warning",
          id: "member-removed-failure"
        });
      }, [_v7, _v10, _v3]),
      _v17 = (0, _v10.useCallback)(() => {
        _v10.isActive("member-removed") || (_v10({
          duration: 0,
          title: _v7.MemberRemovedFromWorkspace(_v3),
          id: "member-removed"
        }), _v5(), _v6());
      }, [_v5, _v6, _v7, _v10, _v3]);
    return (0, _v10.useEffect)(() => {
      _v12 && !_v14 && (_v13 ? _v16() : _v17(), _v4());
    }, [_v12, _v13, _v14, _v4, _v16, _v17]), (0, _v1.jsx)(_v61.RemovalConfirmationModal, {
      header: _v7.RemoveMemberFromWorkspace(_v3),
      isLoading: _v1 || _v14,
      isOpen: _v0,
      modalProps: {
        closeOnOverlayClick: !1
      },
      onClose: _v4,
      onConfirmAction: _v15,
      width: 400,
      children: (0, _v1.jsx)(_v3.Text, {
        variant: "body-md",
        children: _v9 ? _v7.RemoveMemberFromWorkspaceViewerDescription(_v8, _v3) : _v7.RemoveMemberFromWorkspaceDescription(_v8, _v3)
      })
    });
  };
  var _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = ({
    member: _v0,
    revalidateWorkspaceMembers: _v1,
    revalidateWorkspaceMemberCount: _v2,
    onSuccess: _v3
  }) => {
    let [_v4, {
        data: _v5,
        loading: _v6,
        called: _v7
      }] = (0, _v59.usePatchWorkspaceMember)(),
      _v8 = (0, _v10.useCallback)((_v0, _v1) => {
        if (!_v1) return;
        let {
          workspaceMemberId: _v2,
          workspaceUuid: _v3
        } = (0, _v60.parseWorkspaceMemberUri)(_v1.uri);
        _v4({
          select: ["email", "permissionLevel", "role"],
          where: {
            workspaceUuid: _v3,
            workspaceMemberId: _v2
          },
          variables: {
            role: _v0
          }
        });
      }, [_v4]);
    return (0, _v10.useEffect)(() => {
      _v5 && _v7 && _v5.email === _v0?.email && !_v6 && (_v1(void 0, {
        populateCache: (_v0, _v1) => ({
          ..._v1,
          data: _v1.data.map(_v0 => _v0.uri === _v0?.uri ? {
            ..._v0,
            role: _v5.role,
            permissionLevel: _v5.permissionLevel
          } : _v0)
        }),
        revalidate: !1
      }), _v2(), _v3?.());
    }, [_v5, _v7, _v6, _v0?.email, _v0?.uri]), {
      handleRoleChange: _v8,
      loading: _v6
    };
  };
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  let _v92 = ({
      tooltip: _v0
    }) => (0, _v1.jsx)(_v86.Tooltip, {
      label: _v0,
      shouldWrapChildren: !0,
      maxWidth: (0, _v13.rem)(235),
      placement: "bottom-start",
      children: (0, _v1.jsx)(_v88.InfoCircle, {})
    }),
    _v93 = ({
      member: _v0,
      marginRight: _v1,
      revalidateWorkspaceMembers: _v2,
      revalidateWorkspaceMemberCount: _v3,
      setConfirmationModalOpen: _v4
    }) => {
      let _v5,
        _v6 = (0, _v90.getRolesForRoleSelector)(),
        {
          handleRoleChange: _v7,
          loading: _v8
        } = _v89({
          member: _v0,
          revalidateWorkspaceMembers: _v2,
          revalidateWorkspaceMemberCount: _v3
        }),
        _v9 = _v0.orgPermissionLevel === _v84.ORGANIZATION_ROLES.OWNER || _v0.orgPermissionLevel === _v84.ORGANIZATION_ROLES.ADMIN;
      return _v8 ? (0, _v1.jsx)(_v87.Skeleton, {
        display: "flex",
        width: (0, _v13.rem)(150),
        height: (0, _v13.rem)(40)
      }) : (0, _v1.jsx)(_v91.RoleSelector, {
        allowedRoles: _v6,
        selectedRole: _v84.WS_MEMBER_PERMISSION_LEVEL_TO_ROLE_FOR_INVITE[_v0.permissionLevel],
        onRoleChange: _v0 => {
          _v0 === _v84.ALLOWED_ROLES_FOR_INVITE.ADMIN ? _v4(_v0) : _v7(_v0, _v0);
        },
        variant: "tertiary",
        isDisabled: _v9,
        mr: _v1,
        ...(_v9 ? {
          rightIcon: (0, _v1.jsx)(_v92, {
            tooltip: (_v5 = (0, _v6.getTranslations)(), _v0.orgPermissionLevel === _v84.ORGANIZATION_ROLES.OWNER ? _v5.WorkspaceMemberListOrgOwnerTooltip : _v5.WorkspaceMemberListOrgAdminsTooltip)
          })
        } : {}),
        children: _v0.role
      });
    };
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  async function _v96({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v23.measureLatency)("getWorkspaceTeamGroups", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/team_groups?${(0, _v24.searchQueryString)(_v3)}&fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  var _v97 = _v0.i(0);
  function _v98(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v29.useGctlConfig)();
    return (0, _v27.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/team_groups${(0, _v22.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v96({
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
  }
  "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(_v98, {
    endpoint: "/workspaces/:workspaceUuid/team_groups",
    method: "GET"
  }), "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/team_groups${(0, _v22.serializeQuery)(_v0)}`, _v96({
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
  }, {
    endpoint: "/workspaces/:workspaceUuid/team_groups",
    method: "GET"
  }), "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v29.useGctlConfig)();
    return (0, _v97.default)((_v0, _v1) => {
      if (null === _v2 || _v1 && !_v1.paging.next) return null;
      let {
          perPage: _v2 = 25,
          page: _v3,
          ..._v4
        } = _v2.query ?? {},
        _v5 = _v2.select.join(","),
        _v6 = Object.entries(_v4 ?? {}).filter(([, _v0]) => void 0 !== _v0).map(([_v0, _v1]) => `${_v0}=${_v1}`).join("&");
      return [`/workspaces/${_v2.where.workspaceUuid}/team_groups?page=${_v0 + 1}&perPage=${_v2}&fields=${_v5}&${_v6}`, _v0];
    }, null !== _v2 ? ([_v0, _v1]) => _v96({
      ..._v2,
      baseUrl: _v3,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      query: {
        ..._v2.query,
        page: _v1 + 1
      }
    }) : null, _v1);
  }, {
    endpoint: "/workspaces/:workspaceUuid/team_groups",
    method: "GET"
  });
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0);
  let _v101 = _v0 => ["asc", "desc"].includes(_v0 ?? ""),
    _v102 = _v0 => ["name", "role"].includes(_v0 ?? ""),
    _v103 = ({
      workspaceUuid: _v0
    }) => {
      let [_v1, _v2] = (0, _v10.useState)(!1),
        _v3 = (0, _v8.useSearchParams)(),
        _v4 = (0, _v8.usePathname)(),
        {
          push: _v5
        } = (0, _v8.useRouter)(),
        _v6 = _v3.get("page"),
        _v7 = _v3.get("query"),
        _v8 = _v3.get("direction"),
        _v9 = _v3.get("sort"),
        _v10 = _v3.get("roles"),
        _v11 = _v3.get("status"),
        _v12 = _v3.get("groups"),
        _v13 = (0, _v10.useMemo)(() => {
          let _v0 = _v6 && parseInt(_v6) ? parseInt(_v6) : 1,
            _v1 = _v7 && _v7?.trim() !== "" ? _v7?.trim() : void 0,
            _v2 = _v101(_v8) ? _v8 : "asc",
            _v3 = _v102(_v9) ? _v9 : void 0;
          return {
            page: _v0,
            query: _v1,
            direction: _v2,
            sort: _v3,
            roles: (0, _v60.validateRolesFilterParam)(_v10, _v84.WSP_MEMBERS_ROLES_FILTER_VALUES),
            inviteStatuses: (0, _v60.validateStatusFilterParam)(_v11),
            groups: (0, _v60.validateGroupsFilterParam)(_v12)
          };
        }, [_v6, _v7, _v8, _v9, _v10, _v11, _v12]),
        _v14 = _v3.toString(),
        _v15 = (0, _v10.useCallback)(_v0 => {
          let _v1 = new URLSearchParams(_v14),
            _v2 = _v1.get("query"),
            _v3 = !1;
          (_v2?.trim() ?? "") !== _v0.trim() && (_v1.set("query", _v0), _v3 = !0), "" === _v0.trim() && (_v1.delete("query"), _v3 = !0), _v3 && (_v1.delete("sort"), _v1.delete("direction"), _v1.delete("page")), _v5((0, _v60.buildUrlWithSearchParams)(_v4, _v1));
        }, [_v5, _v14, _v4]),
        _v16 = (0, _v10.useCallback)(_v0 => {
          let _v1 = new URLSearchParams(_v14);
          _v0 > 1 ? _v1.set("page", _v0.toString()) : _v1.delete("page"), _v5((0, _v60.buildUrlWithSearchParams)(_v4, _v1));
        }, [_v5, _v4, _v14]),
        _v17 = (0, _v10.useCallback)(_v0 => {
          let _v1 = new URLSearchParams(_v14);
          if (_v102(_v0)) {
            let _v0 = _v1.get("sort");
            if (_v0 && _v0 === _v0) {
              let _v0 = _v1.get("direction"),
                _v1 = _v101(_v0) && "desc" === _v0 ? "asc" : "desc";
              _v1.set("direction", _v1);
            } else _v1.set("sort", _v0), _v1.set("direction", "asc");
          } else _v1.delete("sort"), _v1.delete("direction");
          _v1.delete("page"), _v5((0, _v60.buildUrlWithSearchParams)(_v4, _v1));
        }, [_v14, _v5, _v4]),
        _v18 = (0, _v10.useCallback)((_v0, _v1) => {
          let _v2 = new URLSearchParams(_v14);
          _v0.includes("roles") && (Array.isArray(_v1.roles) && _v1.roles && 0 !== _v1.roles.length ? _v2.set("roles", _v1.roles.join(",")) : _v2.delete("roles")), _v0.includes("status") && (Array.isArray(_v1.status) && _v1.status && 0 !== _v1.status.length ? _v2.set("status", _v1.status.join(",")) : _v2.delete("status")), _v0.includes("groups") && (Array.isArray(_v1.groups) && _v1.groups && 0 !== _v1.groups.length ? _v2.set("groups", _v1.groups.join(",")) : _v2.delete("groups")), _v0.length > 0 && (_v2.delete("page"), _v2.delete("sort"), _v2.delete("direction"), _v2.delete("query")), _v5((0, _v60.buildUrlWithSearchParams)(_v4, _v2));
        }, [_v5, _v4, _v14]),
        _v19 = (0, _v100.useGetWorkspaceMembers)(() => _v0 ? {
          select: ["uri", "inviteUrl", "permissionLevel", "orgPermissionLevel", "role", "email", "status", "user.uri", "user.name", "user.pictures.sizes.link", "recentlyReminded"],
          where: {
            workspaceUuid: _v0
          },
          query: {
            ..._v13,
            perPage: _v84.WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT
          }
        } : null, {
          revalidateOnFocus: !1
        });
      return (0, _v10.useEffect)(() => {
        !async function () {
          try {
            let _v0 = _v19.error.res?.body,
              _v1 = new Response(_v0),
              _v2 = await _v1.json();
            _v2(_v2?.error_code === 0);
          } catch {
            _v2(!1);
          }
        }();
      }, [_v19.error]), {
        ..._v19,
        handleQueryBy: _v15,
        handleSetPageTo: _v16,
        toggleSortBy: _v17,
        parsedFilters: _v13,
        isPaginationError: _v1,
        handleFiltersChange: _v18
      };
    };
  var _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  let _v106 = () => {
    let {
        workspaceUuid: _v0
      } = (0, _v99.useCurrentWorkspaceDetails)(),
      _v1 = (0, _v6.getTranslations)(),
      {
        handleFiltersChange: _v2,
        parsedFilters: {
          inviteStatuses: _v3,
          roles: _v4,
          groups: _v5
        }
      } = _v103({
        workspaceUuid: _v0
      }),
      {
        data: _v6
      } = _v98(() => _v0 ? {
        select: ["name", "uri"],
        where: {
          workspaceUuid: _v0
        },
        query: {
          perPage: _v84.WORKSPACE_GROUPS_FILTER_PER_PAGE
        }
      } : null),
      _v7 = (0, _v10.useMemo)(() => (_v6?.data ?? []).map(_v0 => ({
        id: _v0.uri.substring(_v0.uri.lastIndexOf("/") + 1),
        name: _v0.name
      })), [_v6]),
      [_v8, _v9] = (0, _v10.useState)({
        status: _v3 ?? [],
        roles: _v4 ?? [],
        groups: _v5 ?? []
      }),
      {
        sendFilterTeamMembersListEvent: _v10
      } = (0, _v104.useTrackEvents)(),
      _v11 = (0, _v10.useMemo)(() => !_v8.status && !_v3 || [..._v8.status].sort().toString() === [...(_v3 ?? [])].sort().toString(), [_v8.status, _v3]),
      _v12 = (0, _v10.useMemo)(() => _v8.groups.length === (_v5?.length ?? 0) && [..._v8.groups].sort().toString() === [...(_v5 ?? [])].sort().toString(), [_v8.groups, _v5]),
      _v13 = (_v4?.length ?? 0) > 0 || (_v3?.length ?? 0) > 0 || (_v5?.length ?? 0) > 0,
      _v14 = (0, _v10.useMemo)(() => {
        if (_v4 && 0 !== _v4.length) {
          if (1 === _v4.length) switch (_v4[0]) {
            case "admin":
              return _v1.AdminRole;
            case "contributor_plus":
              return _v1.ContributorPlusRole;
            case "contributor":
              return _v1.ContributorRole;
            case "viewer":
              return _v1.ViewerRole;
            default:
              return;
          }
          return _v1.RoleFilterWithCount(_v4.length);
        }
      }, [_v1, _v4]),
      _v15 = (0, _v10.useMemo)(() => {
        if (_v3 && 0 !== _v3.length) {
          if (_v3.length > 1) return _v1.StatusFilterWithCount(_v3.length);
          if ("pending" === _v3[0]) return _v1.Pending;
          if ("accepted" === _v3[0]) return _v1.Accepted;
        }
      }, [_v1, _v3]),
      _v16 = (0, _v10.useMemo)(() => {
        if (_v5 && 0 !== _v5.length) return _v5.length > 1 ? _v1.GroupsFilterWithCount(_v5.length) : _v7.find(_v0 => _v0.id === _v5[0])?.name;
      }, [_v1, _v5, _v7]),
      _v17 = (0, _v10.useCallback)(_v0 => {
        switch (_v0.filterKey) {
          case "roles":
            return _v8.roles.length;
          case "status":
            return _v8.status.length;
          case "groups":
            return _v8.groups.length;
          default:
            return 0;
        }
      }, [_v8]),
      _v18 = (0, _v10.useMemo)(() => _v8.roles.length === (_v4?.length ?? 0) && [..._v8.roles].sort().toString() === [...(_v4 ?? [])].sort().toString(), [_v8.roles, _v4]),
      _v19 = (0, _v10.useCallback)((_v0 = []) => {
        _v2(_v0, _v8), _v0.includes("roles") && _v8.roles.length > 0 && _v10({
          filter: "role",
          filterValues: _v8.roles
        }), _v0.includes("status") && _v8.status.length > 0 && _v10({
          filter: "status",
          filterValues: _v8.status
        }), _v0.includes("groups") && _v8.groups.length > 0 && _v10({
          filter: "group",
          filterValues: _v8.groups
        });
      }, [_v8, _v2, _v10]),
      _v20 = (0, _v10.useCallback)((_v0 = []) => {
        let _v1 = {
          ..._v8
        };
        _v0.includes("roles") && (_v1.roles = []), _v0.includes("status") && (_v1.status = []), _v0.includes("groups") && (_v1.groups = []), _v2(_v0, _v1);
      }, [_v8, _v2]),
      _v21 = [...(_v7.length ? [{
        filterKey: "groups",
        filterName: _v1.GroupFilter,
        filterDisplayName: _v16,
        popoverContent: (0, _v1.jsx)(_v94.CheckboxGroup, {
          value: _v8.groups,
          onChange: _v0 => _v9(_v0 => ({
            ..._v0,
            groups: _v0.sort()
          })),
          children: (0, _v1.jsx)(_v2.VStack, {
            align: "start",
            minWidth: (0, _v13.rem)(170),
            maxHeight: (0, _v13.rem)(240),
            overflowY: "auto",
            gap: "md",
            mx: "sm",
            my: "xs",
            children: _v7.map(_v0 => (0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: `group-${_v0.id}`,
              value: _v0.id,
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v0.name
              })
            }, _v0.id))
          })
        }),
        filterFooterProps: {
          showClearAll: (_v5?.length ?? 0) > 0,
          onClickClearAll: () => _v2(["groups"], {
            groups: []
          }),
          onClickApply: () => {
            _v2(["groups"], {
              groups: _v8.groups
            }), _v8.groups.length > 0 && _v10({
              filter: "group",
              filterValues: _v8.groups
            });
          },
          disableApply: _v12
        }
      }] : []), {
        filterKey: "roles",
        filterName: _v1.RoleFilter,
        filterDisplayName: _v14,
        popoverContent: (0, _v1.jsx)(_v94.CheckboxGroup, {
          value: _v8.roles,
          onChange: _v0 => _v9(_v0 => ({
            ..._v0,
            roles: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minWidth: (0, _v13.rem)(170),
            gap: "md",
            mx: "sm",
            my: "xs",
            children: [(0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: "admin",
              value: "admin",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.AdminRole
              })
            }), (0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: "contributor_plus",
              value: "contributor_plus",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.ContributorPlusRole
              })
            }), (0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: "contributor",
              value: "contributor",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.ContributorRole
              })
            }), (0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: "viewer",
              value: "viewer",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.ViewerRole
              })
            })]
          })
        }),
        filterFooterProps: {
          showClearAll: (_v4?.length ?? 0) > 0,
          onClickClearAll: () => {
            _v2(["roles"], {
              roles: []
            });
          },
          onClickApply: () => {
            _v2(["roles"], {
              roles: _v8.roles
            }), _v8.roles.length > 0 && _v10({
              filter: "role",
              filterValues: _v8.roles
            });
          },
          disableApply: _v18
        }
      }, {
        filterKey: "status",
        filterName: _v1.StatusFilter,
        filterDisplayName: _v15,
        popoverContent: (0, _v1.jsx)(_v94.CheckboxGroup, {
          value: _v8.status,
          onChange: _v0 => _v9(_v0 => ({
            ..._v0,
            status: _v0.sort()
          })),
          children: (0, _v1.jsxs)(_v2.VStack, {
            align: "start",
            minW: (0, _v13.rem)(200),
            gap: "md",
            mx: "sm",
            my: "xs",
            children: [(0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: "pending",
              value: "pending",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.Pending
              })
            }), (0, _v1.jsx)(_v95.Checkbox, {
              size: "md",
              id: "accepted",
              value: "accepted",
              children: (0, _v1.jsx)(_v3.Text, {
                variant: "body-md",
                children: _v1.Accepted
              })
            })]
          })
        }),
        filterFooterProps: {
          showClearAll: !!_v3,
          onClickClearAll: () => _v2(["status"], {
            status: []
          }),
          onClickApply: () => {
            _v2(["status"], {
              status: _v8.status
            }), _v8.status.length > 0 && _v10({
              filter: "status",
              filterValues: _v8.status
            });
          },
          disableApply: _v11
        }
      }];
    return (0, _v1.jsxs)(_v12.HStack, {
      children: [_v13 && (0, _v1.jsx)(_v35.Button, {
        variant: "tertiary",
        size: "sm",
        color: "text-secondary",
        textStyle: "heading-xs",
        onClick: () => _v2(["roles", "status", "groups"], {
          roles: [],
          status: [],
          groups: []
        }),
        children: _v1.ClearFilters
      }), (0, _v1.jsx)(_v105.ResponsivePopoverFilters, {
        filters: _v21,
        getFilterCount: _v17,
        filterFooterProps: {
          onClickApply: _v19,
          onClickClearAll: _v20
        },
        breakpointConfig: _v84.WORKSPACE_FILTER_BREAKPOINTS
      })]
    });
  };
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0);
  let _v110 = ({
      direction: _v0
    }) => "desc" === _v0 ? (0, _v1.jsx)(_v108.ArrowDown, {}) : (0, _v1.jsx)(_v109.ArrowUp, {}),
    _v111 = () => {
      let {
          workspaceUuid: _v0,
          isLoading: _v1
        } = (0, _v99.useCurrentWorkspaceDetails)(),
        _v2 = (0, _v6.getTranslations)(),
        {
          parsedFilters: {
            sort: _v3,
            direction: _v4
          },
          toggleSortBy: _v5,
          isValidating: _v6
        } = _v103({
          workspaceUuid: _v0
        }),
        _v7 = _v1 || _v6,
        {
          sendSortTeamMembersListEvent: _v8
        } = (0, _v104.useTrackEvents)(),
        _v9 = (0, _v10.useCallback)(() => {
          _v5("name"), _v8({
            field: "name",
            direction: "asc" === _v4 ? "desc" : "asc"
          });
        }, [_v5, _v8, _v4]),
        _v10 = (0, _v10.useCallback)(() => {
          _v5("role"), _v8({
            field: "role",
            direction: "asc" === _v4 ? "desc" : "asc"
          });
        }, [_v5, _v8, _v4]);
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v107.Th, {
          children: (0, _v1.jsx)(_v35.Button, {
            variant: "tertiary",
            size: "sm",
            rightIcon: "role" !== _v3 ? (0, _v1.jsx)(_v110, {
              direction: "name" === _v3 ? _v4 : "asc"
            }) : void 0,
            color: "text-secondary",
            onClick: _v9,
            isDisabled: _v7,
            children: _v2.Name
          })
        }), (0, _v1.jsx)(_v107.Th, {
          children: (0, _v1.jsx)(_v35.Button, {
            variant: "tertiary",
            size: "sm",
            ...("role" === _v3 ? {
              rightIcon: (0, _v1.jsx)(_v110, {
                direction: _v4
              })
            } : {}),
            color: "text-secondary",
            onClick: _v10,
            isDisabled: _v7,
            children: _v2.RoleFilter
          })
        }), (0, _v1.jsx)(_v107.Th, {})]
      });
    };
  var _v112 = _v0.i(0);
  let _v113 = () => {
    let {
        workspaceUuid: _v0,
        isLoading: _v1
      } = (0, _v99.useCurrentWorkspaceDetails)(),
      {
        data: _v2,
        isLoading: _v3,
        parsedFilters: {
          page: _v4
        },
        handleSetPageTo: _v5,
        isPaginationError: _v6
      } = _v103({
        workspaceUuid: _v0
      }),
      _v7 = !_v1 && !_v3 && _v2?.total ? _v2.total : 0,
      _v8 = (0, _v10.useCallback)(_v0 => {
        _v4 !== _v0.page && _v5(_v0.page);
      }, [_v5, _v4]);
    return _v7 ? _v6 ? (0, _v1.jsx)(_v112.PaginationRoot, {
      children: (0, _v1.jsx)(_v112.PaginationItem, {
        type: "page",
        value: 1,
        onClick: () => _v5(1)
      })
    }) : (0, _v1.jsx)(_v112.Pagination, {
      count: _v7,
      pageSize: _v84.WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT,
      onPageChange: _v8,
      page: _v4
    }) : null;
  };
  var _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  let _v116 = () => {
    let {
        workspaceUuid: _v0,
        isLoading: _v1
      } = (0, _v99.useCurrentWorkspaceDetails)(),
      _v2 = (0, _v6.getTranslations)(),
      {
        parsedFilters: {
          query: _v3
        },
        handleQueryBy: _v4
      } = _v103({
        workspaceUuid: _v0
      }),
      [_v5, _v6] = (0, _v10.useState)(_v3),
      {
        debouncedCallback: _v7,
        cancel: _v8
      } = (0, _v114.useDebouncedCallback)(_v0 => _v4(_v0), 400);
    return (0, _v10.useEffect)(() => {
      _v3 || _v6("");
    }, [_v3]), (0, _v1.jsx)(_v115.SearchWithLeftIcon, {
      variant: "minimal",
      size: "sm",
      placeholder: _v2.SearchMembers,
      value: _v5,
      onChange: _v0 => {
        _v8(), _v7(_v0.target.value), _v6(_v0.target.value);
      },
      isDisabled: _v1
    });
  };
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0);
  let _v120 = (0, _v7.default)(() => _v0.A(0).then(_v0 => _v0.WorkspaceMemberShareFolderModal), {
      loadableGenerated: {
        modules: [0]
      },
      ssr: !1
    }),
    _v121 = () => {
      let _v0 = (0, _v33.useViewer)(),
        _v1 = _v0?.user,
        _v2 = _v0?.teamUser,
        _v3 = (0, _v9.useRouter)(),
        {
          settings: _v4
        } = (0, _v31.useOrionSettings)(),
        [_v5, _v6] = (0, _v10.useState)(),
        _v7 = (0, _v8.useSearchParams)(),
        _v8 = (0, _v6.getTranslations)(),
        _v9 = (0, _v15.useToast)(),
        _v10 = (0, _v10.useCallback)((_v0, _v1 = "neutral") => {
          _v9({
            duration: 0,
            title: _v0,
            variant: _v1
          });
        }, [_v9]),
        {
          isOpen: _v11,
          onOpen: _v12,
          onClose: _v13
        } = (0, _v14.useDisclosure)(),
        {
          isOpen: _v14,
          onOpen: _v15,
          onClose: _v16
        } = (0, _v14.useDisclosure)(),
        {
          isOpen: _v17,
          onOpen: _v18,
          onClose: _v19
        } = (0, _v14.useDisclosure)(),
        {
          isLoading: _v20,
          workspaceUuid: _v21
        } = (0, _v99.useCurrentWorkspaceDetails)(),
        {
          data: _v22,
          isLoading: _v23,
          mutate: _v24,
          parsedFilters: {
            query: _v25
          }
        } = _v103({
          workspaceUuid: _v21
        }),
        _v26 = (0, _v18.useGetMePreferences)({
          select: ["toid"]
        }),
        _v27 = _v26.data?.toid ?? 0,
        {
          isLoading: _v28,
          data: _v29
        } = (0, _v19.useGetUserProjects)(() => _v27 ? {
          query: {
            excludePrivateToMeFolder: !0,
            perPage: 1,
            topLevelOnly: !0,
            permissionAction: "folder.view"
          },
          select: ["isPrivateToUser", "name", "privacy", "uri"],
          where: {
            userId: _v27
          }
        } : null),
        _v30 = !_v28 && (_v29?.total ?? 0) > 0,
        _v31 = (0, _v10.useCallback)(_v0 => {
          _v6(_v0), _v18();
        }, [_v18]),
        {
          data: _v32,
          mutate: _v33,
          isLoading: _v34
        } = (0, _v20.useGetWorkspace)(() => _v21 ? {
          select: ["displayName", "membershipCount.admins", "membershipCount.members", "rolesCount"],
          where: {
            workspaceUuid: _v21
          }
        } : null),
        _v35 = (0, _v60.getUserIdFromUri)(_v1?.uri),
        {
          data: _v36
        } = _v30(() => _v21 && _v35 ? {
          select: ["orgPermissionLevel", "permissionLevel"],
          where: {
            workspaceUuid: _v21,
            workspaceUserId: _v35
          }
        } : null),
        _v37 = _v36 ? _v36.orgPermissionLevel : _v84.ORGANIZATION_ROLES.MEMBER,
        _v38 = _v36 ? _v36.permissionLevel : _v84.WORKSPACE_ROLES.VIEWER,
        {
          handleRoleChange: _v39,
          loading: _v40
        } = _v89({
          member: _v5,
          revalidateWorkspaceMembers: _v24,
          revalidateWorkspaceMemberCount: _v33,
          onSuccess: _v16
        }),
        {
          capabilities: {
            hasContentSpaceEnabled: _v41
          },
          ready: _v42
        } = (0, _v17.useCapability)(["hasContentSpaceEnabled"], _v2?.ownerId ?? _v1?.id),
        _v43 = (0, _v10.useCallback)(_v0 => {
          _v6(_v0), _v12();
        }, [_v12]),
        _v44 = (0, _v10.useCallback)(_v0 => {
          if (!_v42) return;
          let {
            workspaceMemberId: _v1
          } = (0, _v60.parseWorkspaceMemberUri)(_v0.uri);
          _v3.push(`/manage/workspace/members/${_v1}/access`);
        }, [_v42, _v3]),
        _v45 = (0, _v10.useCallback)(_v0 => {
          if (!_v42) return;
          let {
              workspaceMemberId: _v1
            } = (0, _v60.parseWorkspaceMemberUri)(_v0.uri),
            _v2 = _v4.show_granular_permissions ? `/manage/workspace/members/${_v1}/access?tab=content` : _v41 ? `/manage/workspace/members/${_v1}/team-library` : `/manage/workspace/members/${_v1}/shared-resources`;
          _v3.push(_v2);
        }, [_v41, _v42, _v3, _v4.show_granular_permissions]),
        _v46 = (0, _v10.useCallback)(_v0 => !!(_v0.status === _v84.INVITE_STATUS.ACCEPTED && _v0?.user?.uri), []),
        _v47 = (0, _v10.useCallback)(_v0 => {
          _v46(_v0) ? _v3.push(`/analytics/teams/${_v27}${_v0?.user?.uri}`) : _v10(_v8.MemberDoesNotHaveActivityHistory, "warning");
        }, [_v10, _v46, _v3, _v8, _v27]),
        _v48 = (0, _v10.useCallback)(_v0 => {
          _v0 && ((0, _v32.default)(window.location.origin + _v0) ? _v10(_v8.InviteLinkCopied, "neutral") : _v10(_v8.CopyInviteLinkError, "warning"));
        }, [_v10, _v8]),
        {
          triggerReminderEmail: _v49,
          isSending: _v50
        } = (({
          onError: _v0,
          onSuccess: _v1
        }) => {
          let _v2 = (0, _v10.useRef)(!1),
            [_v3, {
              loading: _v4,
              error: _v5,
              data: _v6
            }] = (0, _v59.usePatchWorkspaceMember)(),
            _v7 = (0, _v10.useCallback)(_v0 => {
              let {
                workspaceUuid: _v1,
                workspaceMemberId: _v2
              } = (0, _v60.parseWorkspaceMemberUri)(_v0);
              _v2.current || !_v1 || isNaN(_v2) || (_v3({
                select: ["uri"],
                where: {
                  workspaceUuid: _v1,
                  workspaceMemberId: _v2
                },
                variables: {
                  sendReminderEmail: !0
                }
              }), _v2.current = !0);
            }, [_v3]);
          return (0, _v10.useEffect)(() => {
            _v2.current && !_v4 && (_v5 && _v0 ? _v0() : _v6 && _v1 && _v1(_v6.uri), _v2.current = !1);
          }, [_v0, _v1, _v5, _v4, _v6]), {
            triggerReminderEmail: _v7,
            isSending: _v4
          };
        })({
          onSuccess: (0, _v10.useCallback)(_v0 => {
            _v10(_v8.ReminderEmailSent), _v24(void 0, {
              populateCache: (_v0, _v1) => ({
                ..._v1,
                data: _v1.data.map(_v0 => _v0.uri === _v0 && "pending" === _v0.status ? {
                  ..._v0,
                  recentlyReminded: !0
                } : _v0)
              }),
              revalidate: !1
            });
          }, [_v10, _v8.ReminderEmailSent, _v24]),
          onError: (0, _v10.useCallback)(() => {
            _v10(_v8.ErrorSendingReminderEmail, "warning");
          }, [_v10, _v8])
        }),
        _v51 = (0, _v10.useCallback)(_v0 => "pending" === _v0.status ? (0, _v1.jsx)(_v83, {
          onClickCopyInviteLink: () => _v48(_v0.inviteUrl),
          reminderAlreadySent: _v0.recentlyReminded,
          onClickRemoveFromWorkspace: () => _v43(_v0),
          onClickResendInvite: () => _v49(_v0.uri),
          onClickShareFolder: () => _v31(_v0),
          isShareFolderDisabled: !_v30,
          isShareFolderVisible: _v0.permissionLevel !== _v84.WORKSPACE_ROLES.ADMIN,
          isSendingReminder: _v50
        }) : _v0.orgPermissionLevel === _v84.ORGANIZATION_ROLES.ADMIN ? (0, _v1.jsx)(_v82, {
          onClickManageFeaturesAccess: () => _v44(_v0),
          onClickViewAccess: () => _v45(_v0),
          onClickViewActivity: () => _v47(_v0),
          isManageFeaturesAccessVisible: _v4.show_granular_permissions
        }) : (0, _v1.jsx)(_v81, {
          onClickShareFolder: () => _v31(_v0),
          onClickManageFeaturesAccess: () => _v44(_v0),
          onClickViewAccess: () => _v45(_v0),
          onClickViewActivity: () => _v47(_v0),
          onClickRemoveFromWorkspace: () => _v43(_v0),
          isShareFolderDisabled: !_v30,
          isShareFolderVisible: _v0.permissionLevel !== _v84.WORKSPACE_ROLES.ADMIN,
          isViewActivityVisible: _v46(_v0),
          isManageFeaturesAccessVisible: _v4.show_granular_permissions
        }), [_v43, _v50, _v31, _v44, _v45, _v47, _v46, _v48, _v4.show_granular_permissions, _v49, _v30]),
        _v52 = (0, _v10.useCallback)(_v0 => {
          if (_v0.user?.uri === _v1?.uri) return !1;
          let _v1 = _v0.status === _v84.INVITE_STATUS.ACCEPTED,
            _v2 = _v0.orgPermissionLevel,
            _v3 = _v1 && _v2 === _v84.ORGANIZATION_ROLES.ADMIN,
            _v4 = _v2 === _v84.ORGANIZATION_ROLES.MEMBER,
            _v5 = _v3 || _v4;
          switch (_v37) {
            case _v84.ORGANIZATION_ROLES.OWNER:
              return _v1 || _v4;
            case _v84.ORGANIZATION_ROLES.ADMIN:
              return _v5;
            default:
              return _v38 === _v84.WORKSPACE_ROLES.ADMIN && _v5;
          }
        }, [_v37, _v38, _v1?.uri]),
        _v53 = (0, _v10.useCallback)(_v0 => {
          _v6(_v0), _v15();
        }, [_v15]),
        _v54 = (0, _v10.useCallback)(_v0 => (0, _v1.jsx)(_v16.Td, {
          children: (0, _v1.jsx)(_v93, {
            member: _v0,
            revalidateWorkspaceMembers: _v24,
            revalidateWorkspaceMemberCount: _v33,
            setConfirmationModalOpen: _v53
          })
        }), [_v24, _v33, _v53]),
        _v55 = (_v22?.data ?? []).filter(_v52).length,
        _v56 = !_v23 && _v22?.data.length === 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsxs)(_v2.VStack, {
          width: "100%",
          gap: 0,
          children: [(0, _v1.jsx)(_v11.Box, {
            width: "100%",
            backgroundColor: "background",
            position: "sticky",
            top: 0,
            zIndex: "docked",
            children: (0, _v1.jsxs)(_v12.HStack, {
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "surface",
              borderTopLeftRadius: "lg",
              borderTopRightRadius: "lg",
              p: "md",
              children: [(0, _v1.jsx)(_v11.Box, {
                maxWidth: (0, _v13.rem)(350),
                children: (0, _v1.jsx)(_v116, {})
              }), (0, _v1.jsx)(_v12.HStack, {
                gap: "md",
                children: (0, _v1.jsx)(_v106, {}, _v7.toString())
              })]
            })
          }), (0, _v1.jsxs)(_v73.SelectionProvider, {
            initTotalCount: _v55,
            children: [_v56 ? (0, _v1.jsx)(_v11.Box, {
              backgroundColor: "surface",
              borderBottomLeftRadius: "lg",
              borderBottomRightRadius: "lg",
              width: "100%",
              children: (0, _v1.jsx)(_v119.NoResults, {
                query: _v25
              })
            }) : (0, _v1.jsx)(_v11.Box, {
              p: "md",
              pt: 0,
              width: "100%",
              backgroundColor: "surface",
              borderBottomLeftRadius: "lg",
              borderBottomRightRadius: "lg",
              children: (0, _v1.jsx)(_v117.MembersList, {
                showCheckboxes: !0,
                shouldBeSelectable: _v52,
                members: _v22?.data ?? [],
                shouldShowOptionsMenu: _v52,
                getMemberAdditionalActions: _v54,
                getMenuContent: _v51,
                headerSlot: (0, _v1.jsx)(_v111, {}),
                isLoading: _v20 || _v23,
                loadingMemberSkeletonCount: _v84.WORKSPACE_MEMBERS_PER_PAGE_ITEM_COUNT,
                isHeaderSticky: !0,
                headerHeight: (0, _v13.rem)(64)
              })
            }), (0, _v1.jsx)(_v74, {
              displayToast: _v10,
              workspaceName: _v32?.displayName ?? "",
              workspaceUuid: _v21 ?? "",
              workspaceOwnerId: _v27,
              workspaceMembers: _v22?.data ?? [],
              revalidateWorkspaceMembers: _v24,
              revalidateWorkspaceMemberCount: _v33
            })]
          })]
        }), (0, _v1.jsx)(_v113, {}), _v11 && _v5 && (0, _v1.jsx)(_v85, {
          isOpen: _v11,
          isLoading: _v34,
          selectedMember: _v5,
          workspaceName: _v32?.displayName ?? "",
          onClose: _v13,
          revalidateWorkspaceMembers: _v24,
          revalidateWorkspaceMemberCount: _v33
        }), _v14 && (0, _v1.jsx)(_v118.ConfirmationModal, {
          isOpen: _v14,
          modalHeaderContent: (0, _v1.jsx)(_v3.Text, {
            variant: "body-xl",
            fontSize: (0, _v13.rem)(20),
            children: _v8.MakeWorkspaceAdminOption(_v5?.user?.name ?? _v5?.email)
          }),
          onClose: _v16,
          onConfirmAction: () => {
            _v39(_v84.ALLOWED_ROLES_FOR_INVITE.ADMIN, _v5);
          },
          isLoading: _v40,
          children: (0, _v1.jsx)(_v3.Text, {
            variant: "body-md",
            children: _v8.MakeWorkspaceAdminDescription(_v5?.user?.name ?? _v5?.email, _v32?.displayName ?? "")
          })
        }), _v17 && _v5 && (0, _v1.jsx)(_v120, {
          displayToast: _v10,
          isOpen: _v17,
          onClose: _v19,
          workspaceMemberUri: _v5.uri,
          workspaceOwnerId: _v27
        })]
      });
    };
  var _v122 = _v0.i(0);
  async function _v123({
    baseUrl: _v0,
    where: {
      workspaceUuid: _v1
    },
    query: _v2,
    ..._v3
  }) {
    return (0, _v23.measureLatency)("postWorkspaceMembersExport", "POST", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v1}/members/export?${(0, _v24.searchQueryString)(_v2)}`, {
        ..._v3,
        method: "POST"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  function _v124() {
    let {
        mutate: _v0
      } = (0, _v28.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v29.useGctlConfig)(),
      [_v5, _v6] = (0, _v22.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/members/export${(0, _v22.serializeQuery)(_v0)}`, _v123({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }), !1);
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
  "true" === _v21.default.env.STORYBOOK && (0, _v22.assignMswData)(_v124, {
    endpoint: "/workspaces/:workspaceUuid/members/export",
    method: "POST"
  });
  var _v125 = _v0.i(0);
  let _v126 = (0, _v7.default)(() => _v0.A(0).then(_v0 => _v0.ExportCSVModal), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v127 = () => {
      let {
          pathname: _v0
        } = (0, _v9.useRouter)(),
        _v1 = (0, _v33.useViewer)(),
        _v2 = _v1?.user?.email ?? "",
        _v3 = (0, _v6.getTranslations)(),
        {
          sendWorkspaceMemberExportEvent: _v4
        } = (0, _v104.useTrackEvents)(),
        {
          workspaceUuid: _v5
        } = (0, _v99.useCurrentWorkspaceDetails)(),
        [_v6, {
          data: _v7,
          loading: _v8,
          error: _v9
        }] = _v124(),
        {
          parsedFilters: {
            query: _v10,
            sort: _v11,
            direction: _v12,
            roles: _v13,
            inviteStatuses: _v14
          }
        } = _v103({
          workspaceUuid: _v5
        }),
        {
          isOpen: _v15,
          onOpen: _v16,
          onClose: _v17
        } = (0, _v14.useDisclosure)(),
        _v18 = (0, _v15.useToast)();
      return (0, _v10.useEffect)(() => {
        if (!_v9) return;
        let _v0 = _v18({
          variant: "warning",
          title: _v3.ErrorExportingCSV,
          duration: 0
        });
        return () => _v18.close(_v0);
      }, [_v9, _v18, _v3.ErrorExportingCSV]), (0, _v10.useEffect)(() => {
        _v7 && _v16();
      }, [_v7, _v16]), (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v125.ExportCSVButton, {
          onClick: () => {
            _v2 && _v5 && (_v6({
              where: {
                workspaceUuid: _v5
              },
              query: {
                query: _v10,
                sort: _v11,
                ...(_v11 ? {
                  direction: _v12
                } : {}),
                roles: _v13,
                inviteStatuses: _v14.length > 0 ? _v14 : void 0
              }
            }), _v4({
              path: _v0
            }));
          },
          isLoading: _v8,
          disabled: !_v2
        }), !!_v2 && (0, _v1.jsx)(_v126, {
          email: _v2,
          isOpen: _v15,
          onClose: _v17
        })]
      });
    };
  var _v128 = _v0.i(0),
    _v129 = _v0.i(0);
  let _v130 = ({
      emails: _v0,
      handleAddErrorToEmail: _v1,
      handleChangeIsRequestInProgress: _v2,
      handleEmailAddition: _v3,
      handleEmailRemoval: _v4,
      handleErrorChange: _v5,
      workspaceUuid: _v6,
      onEmailAddressHeightChange: _v7
    }) => {
      let [_v8, _v9] = (0, _v10.useState)(""),
        [_v10, {
          called: _v11,
          data: _v12,
          loading: _v13
        }] = (0, _v100.useGetWorkspaceMembersLazy)(),
        _v14 = (0, _v6.getTranslations)(),
        _v15 = () => {
          let _v0 = _v8.trim();
          if (!_v0) return;
          let _v1 = [],
            _v2 = _v14.IsNotAValidEmailAddress(_v0);
          _v128.EMAIL_REGEX.test(_v0) || _v1.push(_v2), _v0.some(_v0 => _v0.value === _v0) && _v1.push(_v14.HasBeenEnteredMultipleTimes(_v0)), _v3({
            errorMessages: _v1,
            id: Date.now(),
            value: _v0
          }), _v9(""), _v1.includes(_v2) || (_v2(!0), _v10({
            select: ["email"],
            query: {
              page: 1,
              perPage: 1,
              query: _v0
            },
            where: {
              workspaceUuid: _v6
            }
          }));
        };
      return (0, _v10.useEffect)(() => {
        _v11 && !_v13 && _v12 && (_v12 && _v12.data.forEach(_v0 => {
          let _v1 = _v0.email;
          if (!_v1) return;
          let _v2 = _v14.IsAlreadyAMember(_v1);
          _v1(_v1, _v2);
        }), _v2(!1));
      }, [_v11, _v12, _v1, _v2, _v13, _v14]), (0, _v1.jsx)(_v129.EmailAddressInput, {
        currentEmail: _v8,
        emails: _v0,
        handleOnBlur: _v15,
        handleEmailChange: _v0 => {
          _v9(_v0.target.value);
        },
        handleEmailRemoval: _v4,
        handleErrorChange: _v5,
        validateAndStoreEmail: _v15,
        onEmailAddressHeightChange: _v7
      });
    },
    _v131 = "inviteToWorkspace",
    _v132 = "shareFolders",
    _v133 = {
      applicableFolderPolicies: [],
      currentStep: _v131,
      emails: [],
      hasErrors: !0,
      invitationNote: "",
      invitedWorkspaceMembers: [],
      isReqInProgress: !1,
      selectedFoldersTree: {
        isSelected: !1,
        children: {}
      },
      selectedPermissionPolicy: null,
      selectedRole: _v84.ALLOWED_ROLES_FOR_INVITE.VIEWER
    },
    _v134 = "ADD_EMAIL",
    _v135 = "ADD_ERROR_TO_EMAIL",
    _v136 = "ADD_INVITED_WORKSPACE_MEMBERS",
    _v137 = "CHANGE_SELECTED_FOLDERS_TREE",
    _v138 = "CHANGE_SELECTED_PERMISSION_POLICY",
    _v139 = "REMOVE_EMAIL",
    _v140 = "SET_HAS_ERRORS",
    _v141 = "SET_INVITATION_NOTE",
    _v142 = "SET_IS_REQ_IN_PROGRESS",
    _v143 = "SET_SELECTED_ROLE",
    _v144 = "UPDATE_CURRENT_STEP_TO_NEXT";
  function _v145(_v0, _v1) {
    switch (_v1.type) {
      case _v134:
        return {
          ..._v0,
          emails: [..._v0.emails, _v1.payload]
        };
      case _v135:
        return {
          ..._v0,
          emails: _v0.emails.map(_v0 => _v0.value !== _v1.payload.email || _v0.errorMessages.includes(_v1.payload.errorMessage) ? _v0 : {
            ..._v0,
            errorMessages: [..._v0.errorMessages, _v1.payload.errorMessage]
          })
        };
      case _v136:
        let _v0 = [..._v0.invitedWorkspaceMembers, ..._v1.payload],
          _v1 = (0, _v65.getApplicableFolderPolicies)(_v0),
          _v2 = _v1.length ? _v1[0] : null;
        return {
          ..._v0,
          applicableFolderPolicies: _v1,
          invitedWorkspaceMembers: _v0,
          selectedPermissionPolicy: _v2
        };
      case _v137:
        let _v3 = Object.keys(_v1.payload.children).length > 0;
        return {
          ..._v0,
          selectedFoldersTree: _v1.payload,
          hasErrors: !_v3
        };
      case _v138:
        return {
          ..._v0,
          selectedPermissionPolicy: _v1.payload
        };
      case _v139:
        return {
          ..._v0,
          emails: _v0.emails.filter(_v0 => _v0.id !== _v1.payload)
        };
      case _v140:
        return {
          ..._v0,
          hasErrors: _v1.payload
        };
      case _v141:
        return {
          ..._v0,
          invitationNote: _v1.payload
        };
      case _v142:
        return {
          ..._v0,
          isReqInProgress: _v1.payload
        };
      case _v143:
        return {
          ..._v0,
          selectedRole: _v1.payload
        };
      case _v144:
        return {
          ..._v0,
          currentStep: (_v0 => {
            if (_v0 === _v131) return _v132;
            throw Error(`Unknown step: ${_v0}`);
          })(_v0.currentStep),
          hasErrors: !0
        };
      default:
        return _v0;
    }
  }
  var _v146 = _v0.i(0);
  let _v147 = ({
      handleAddErrorToEmail: _v0,
      handleChangeIsRequestInProgress: _v1,
      handleChangeSelectedFoldersTree: _v2,
      handleChangeSelectedPermissionPolicy: _v3,
      handleEmailAddition: _v4,
      handleEmailRemoval: _v5,
      handleErrorChange: _v6,
      handleInvitationNoteChange: _v7,
      inviteData: _v8,
      onRoleChange: _v9,
      ownerId: _v10,
      workspaceUuid: _v11
    }) => {
      switch (_v8.currentStep) {
        case _v131:
          return (0, _v1.jsx)(_v148, {
            handleAddErrorToEmail: _v0,
            handleChangeIsRequestInProgress: _v1,
            handleEmailAddition: _v4,
            handleEmailRemoval: _v5,
            handleErrorChange: _v6,
            handleInvitationNoteChange: _v7,
            inviteData: _v8,
            onRoleChange: _v9,
            workspaceUuid: _v11
          });
        case _v132:
          return (0, _v1.jsx)(_v149, {
            handleChangeSelectedFoldersTree: _v2,
            handleChangeSelectedPermissionPolicy: _v3,
            inviteData: _v8,
            ownerId: _v10
          });
        default:
          throw Error(`Unknown modal step: ${_v8.currentStep}`);
      }
    },
    _v148 = ({
      handleAddErrorToEmail: _v0,
      handleChangeIsRequestInProgress: _v1,
      handleEmailAddition: _v2,
      handleEmailRemoval: _v3,
      handleErrorChange: _v4,
      handleInvitationNoteChange: _v5,
      inviteData: _v6,
      onRoleChange: _v7,
      workspaceUuid: _v8
    }) => {
      let _v9 = (0, _v90.getRolesForRoleSelector)(),
        [_v10, _v11] = (0, _v10.useState)(40);
      return (0, _v1.jsxs)(_v68.ModalBody, {
        display: "flex",
        flexDirection: "column",
        gap: "md",
        minH: (0, _v13.rem)(132),
        paddingBottom: "0",
        paddingTop: "md",
        px: "sm",
        children: [(0, _v1.jsxs)(_v12.HStack, {
          width: "100%",
          gap: "sm",
          alignItems: "flex-start",
          children: [(0, _v1.jsx)(_v130, {
            emails: _v6.emails,
            handleAddErrorToEmail: _v0,
            handleChangeIsRequestInProgress: _v1,
            handleEmailAddition: _v2,
            handleEmailRemoval: _v3,
            handleErrorChange: _v4,
            onEmailAddressHeightChange: _v11,
            workspaceUuid: _v8
          }), (0, _v1.jsx)(_v11.Box, {
            paddingTop: "lg",
            mt: (0, _v13.rem)(_v10 / 2),
            children: (0, _v1.jsx)(_v91.RoleSelector, {
              allowedRoles: _v9,
              borderRadius: "md",
              height: (0, _v13.rem)(40),
              maxWidth: (0, _v13.rem)(180),
              onRoleChange: _v7,
              selectedRole: _v6.selectedRole
            })
          })]
        }), (0, _v1.jsx)(_v146.AddInvitationNote, {
          handleInvitationNoteChange: _v5,
          invitationNote: _v6.invitationNote
        })]
      });
    },
    _v149 = ({
      handleChangeSelectedFoldersTree: _v0,
      handleChangeSelectedPermissionPolicy: _v1,
      inviteData: _v2,
      ownerId: _v3
    }) => {
      let _v4 = (0, _v6.getTranslations)();
      return (0, _v1.jsx)(_v68.ModalBody, {
        display: "flex",
        flexDirection: "column",
        gap: "md",
        minH: (0, _v13.rem)(132),
        paddingBottom: "0",
        paddingTop: "xs",
        px: "sm",
        children: (0, _v1.jsx)(_v64.AddToFoldersModalBodyContent, {
          applicableFolderPolicies: _v2.applicableFolderPolicies,
          error: null,
          header: (0, _v1.jsx)(_v70.AddToFolderModalBodyHeader, {}),
          ownerId: _v3,
          searchPlaceHolderText: _v4.Search,
          selectedFoldersTree: _v2.selectedFoldersTree,
          selectedPermissionPolicy: _v2.selectedPermissionPolicy,
          setSelectedFoldersTree: _v0,
          setSelectedPermissionPolicy: _v1,
          teamUsers: _v2.invitedWorkspaceMembers
        })
      });
    },
    _v150 = ({
      called: _v0,
      closeModal: _v1,
      handlePrimaryButtonClick: _v2,
      inviteData: _v3,
      loading: _v4
    }) => {
      switch (_v3.currentStep) {
        case _v131:
          return (0, _v1.jsx)(_v151, {
            called: _v0,
            closeModal: _v1,
            handlePrimaryButtonClick: _v2,
            hasAnyEmails: _v3.emails.length > 0,
            hasErrors: _v3.hasErrors,
            isReqInProgress: _v3.isReqInProgress,
            loading: _v4
          });
        case _v132:
          return (0, _v1.jsx)(_v152, {
            closeModal: _v1,
            loading: _v4,
            handlePrimaryButtonClick: _v2,
            hasErrors: _v3.hasErrors
          });
        default:
          throw Error(`Unknown modal step: ${_v3.currentStep}`);
      }
    },
    _v151 = ({
      called: _v0,
      closeModal: _v1,
      handlePrimaryButtonClick: _v2,
      hasAnyEmails: _v3,
      hasErrors: _v4,
      isReqInProgress: _v5,
      loading: _v6
    }) => {
      let _v7 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v52.ModalFooter, {
        p: "sm",
        children: [(0, _v1.jsx)(_v35.Button, {
          size: "md",
          variant: "tertiary",
          onClick: _v1,
          disabled: _v0 || _v6 || _v5,
          children: _v7.Cancel
        }), (0, _v1.jsx)(_v35.Button, {
          size: "md",
          variant: "primary",
          isDisabled: _v4 || !_v3,
          isLoading: _v6 || _v5,
          onClick: _v2,
          children: _v7.Invite
        })]
      });
    },
    _v152 = ({
      closeModal: _v0,
      loading: _v1,
      handlePrimaryButtonClick: _v2,
      hasErrors: _v3
    }) => {
      let _v4 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v52.ModalFooter, {
        children: [(0, _v1.jsx)(_v35.Button, {
          isDisabled: _v1,
          onClick: _v0,
          size: "md",
          variant: "tertiary",
          children: _v4.Skip
        }), (0, _v1.jsx)(_v35.Button, {
          isDisabled: _v3,
          isLoading: _v1,
          onClick: _v2,
          size: "md",
          variant: "primary",
          children: _v4.Share
        })]
      });
    },
    _v153 = ({
      currentModalStep: _v0
    }) => {
      switch (_v0) {
        case _v131:
          return (0, _v1.jsx)(_v154, {});
        case _v132:
          return (0, _v1.jsx)(_v155, {});
        default:
          throw Error(`Unknown modal step: ${_v0}`);
      }
    },
    _v154 = () => {
      let _v0 = (0, _v6.getTranslations)();
      return (0, _v1.jsx)(_v53.ModalHeader, {
        fontSize: "heading-md",
        p: 0,
        children: _v0.InviteMember
      });
    },
    _v155 = () => {
      let _v0 = (0, _v6.getTranslations)();
      return (0, _v1.jsxs)(_v53.ModalHeader, {
        pb: "xs",
        px: "sm",
        children: [(0, _v1.jsx)(_v3.Text, {
          variant: "heading-md",
          children: _v0.ShareFolders
        }), (0, _v1.jsx)(_v3.Text, {
          variant: "body-md",
          children: _v0.ShareFoldersDescription
        })]
      });
    };
  var _v156 = _v0.i(0);
  let _v157 = ["applicablePermissionPolicies.folder.createdOn", "applicablePermissionPolicies.folder.displayDescription", "applicablePermissionPolicies.folder.displayName", "applicablePermissionPolicies.folder.modifiedOn", "applicablePermissionPolicies.folder.name", "applicablePermissionPolicies.folder.permissionActions", "applicablePermissionPolicies.folder.uri", "email", "permissionLevel", "role", "uri"],
    _v158 = ({
      closeModal: _v0,
      isOpen: _v1,
      workspaceUuid: _v2,
      workspaceName: _v3,
      onInviteSuccess: _v4
    }) => {
      let _v5 = (0, _v6.getTranslations)(),
        {
          handleAddErrorToEmail: _v6,
          handleAddInvitedWorkspaceMembers: _v7,
          handleChangeSelectedFoldersTree: _v8,
          handleChangeSelectedPermissionPolicy: _v9,
          handleEmailAddition: _v10,
          handleEmailRemoval: _v11,
          inviteData: _v12,
          setHasErrors: _v13,
          setInvitationNote: _v14,
          setIsReqInProgress: _v15,
          setSelectedRole: _v16,
          updateCurrentStepToNext: _v17
        } = (() => {
          let [_v0, _v1] = (0, _v10.useReducer)(_v145, _v133),
            _v2 = (0, _v10.useCallback)((_v0, _v1) => {
              _v1({
                type: _v135,
                payload: {
                  email: _v0,
                  errorMessage: _v1
                }
              });
            }, []),
            _v3 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v136,
                payload: _v0
              });
            }, []),
            _v4 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v137,
                payload: _v0
              });
            }, []),
            _v5 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v138,
                payload: _v0
              });
            }, []),
            _v6 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v134,
                payload: _v0
              });
            }, []),
            _v7 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v139,
                payload: _v0
              });
            }, []),
            _v8 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v140,
                payload: _v0
              });
            }, []),
            _v9 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v141,
                payload: _v0
              });
            }, []),
            _v10 = (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v142,
                payload: _v0
              });
            }, []);
          return {
            handleAddErrorToEmail: _v2,
            handleAddInvitedWorkspaceMembers: _v3,
            handleChangeSelectedFoldersTree: _v4,
            handleChangeSelectedPermissionPolicy: _v5,
            handleEmailAddition: _v6,
            handleEmailRemoval: _v7,
            inviteData: _v0,
            setHasErrors: _v8,
            setInvitationNote: _v9,
            setIsReqInProgress: _v10,
            setSelectedRole: (0, _v10.useCallback)(_v0 => {
              _v1({
                type: _v143,
                payload: _v0
              });
            }, []),
            updateCurrentStepToNext: (0, _v10.useCallback)(() => {
              _v1({
                type: _v144
              });
            }, [])
          };
        })(),
        {
          currentStep: _v18,
          emails: _v19,
          invitationNote: _v20,
          selectedRole: _v21
        } = _v12,
        _v22 = _v21 === _v84.ALLOWED_ROLES_FOR_INVITE.ADMIN,
        _v23 = (0, _v10.useRef)(!1),
        _v24 = (0, _v10.useRef)(!1),
        {
          sendInviteMembersToTeamEvent: _v25
        } = (0, _v104.useTrackEvents)(),
        _v26 = (0, _v18.useGetMePreferences)({
          select: ["toid"]
        }),
        _v27 = _v26.data?.toid ?? 0,
        {
          isLoading: _v28,
          data: _v29
        } = (0, _v19.useGetUserProjects)(() => _v27 ? {
          query: {
            excludePrivateToMeFolder: !0,
            perPage: 1,
            topLevelOnly: !0,
            permissionAction: "folder.view"
          },
          select: ["isPrivateToUser", "name", "privacy", "uri"],
          where: {
            userId: _v27
          }
        } : null),
        _v30 = !_v28 && (_v29?.total ?? 0) > 0,
        {
          mutate: _v31
        } = _v103({
          workspaceUuid: _v2
        }),
        [_v32, {
          called: _v33,
          data: _v34,
          error: _v35,
          loading: _v36
        }] = (0, _v100.usePostWorkspaceMembers)(),
        _v37 = (0, _v15.useToast)(),
        _v38 = (0, _v10.useCallback)((_v0, _v1, _v2 = "neutral") => {
          let _v3 = `invite-workspace-${_v1}`;
          _v37.isActive(_v3) || _v37({
            duration: 0,
            id: _v3,
            isClosable: !0,
            title: _v0,
            variant: _v2
          });
        }, [_v37]),
        [_v39, {
          loading: _v40,
          error: _v41,
          complete: _v42
        }] = (0, _v67.usePutBatchFolderTeamPermissions)(),
        _v43 = (0, _v10.useCallback)(() => _v22 ? _v5.InviteSent : _v5.MembersInvitedToWorkspace(_v19.length, _v3), [_v19.length, _v22, _v5, _v3]);
      return (0, _v10.useEffect)(() => {
        !_v24.current || !_v40 && (_v41 || _v42) && (_v42 ? _v38(_v5.FoldersShared, "folders-shared") : _v38(_v5.UnableToShareFolders, "folder-share-failed", "warning"), _v24.current = !1, _v0());
      }, [_v0, _v38, _v5, _v42, _v41, _v40]), (0, _v10.useEffect)(() => {
        _v23.current && _v33 && !_v36 && (_v35 ? (_v38(_v5.ErrorSendingInvites, "error", "warning"), _v0()) : _v34 && (_v38(_v43(), "success"), _v4(), _v31(), _v30 && !_v22 ? (_v7(_v34.data), _v17()) : _v0()), _v23.current = !1);
      }, [_v33, _v34, _v35, _v7, _v22, _v36, _v5, _v43, _v38, _v30]), (0, _v1.jsxs)(_v49.Modal, {
        isOpen: _v1,
        onClose: _v0,
        children: [(0, _v1.jsx)(_v54.ModalOverlay, {}), (0, _v1.jsxs)(_v51.ModalContent, {
          minH: (0, _v13.rem)(264),
          maxW: (0, _v13.rem)(500),
          padding: "md",
          children: [(0, _v1.jsx)(_v153, {
            currentModalStep: _v18
          }), (0, _v1.jsx)(_v147, {
            handleAddErrorToEmail: _v6,
            handleChangeIsRequestInProgress: _v15,
            handleChangeSelectedFoldersTree: _v8,
            handleChangeSelectedPermissionPolicy: _v9,
            handleEmailAddition: _v10,
            handleEmailRemoval: _v11,
            handleErrorChange: _v13,
            handleInvitationNoteChange: _v14,
            inviteData: _v12,
            onRoleChange: _v16,
            ownerId: _v27,
            workspaceUuid: _v2
          }), (0, _v1.jsx)(_v150, {
            called: _v18 === _v131 && _v33,
            closeModal: _v0,
            handlePrimaryButtonClick: () => {
              if (_v18 === _v131) 0 !== _v19.length && (_v32({
                select: _v157,
                variables: {
                  customMessage: _v20,
                  newInviteeEmails: _v19.map(_v0 => _v0.value),
                  role: _v21
                },
                where: {
                  workspaceUuid: _v2
                }
              }), _v25({
                entityId: _v2,
                entityName: _v3,
                entityType: _v156.ENTITY_TYPE.WORKSPACE,
                includesMessage: !!_v20,
                inviteRole: _v21,
                numberOfInvitedMembers: _v19.length
              }), _v23.current = !0);else {
                let _v0, _v1;
                _v18 === _v132 && (_v0 = (0, _v66.getSelectedFolderUrisFromTree)(_v12.selectedFoldersTree), _v1 = _v12.selectedPermissionPolicy, _v27 && _v0.length && _v1?.uri && (_v39(_v12.invitedWorkspaceMembers, _v0, _v27, _v1.uri), _v24.current = !0));
              }
            },
            inviteData: _v12,
            loading: _v36 || _v40
          })]
        })]
      });
    };
  var _v159 = _v0.i(0);
  let _v160 = [40, 105, 65, 50, 40],
    _v161 = () => (0, _v1.jsx)(_v159.SeatCount.Group, {
      children: _v160.map((_v0, _v1) => (0, _v1.jsxs)(_v2.VStack, {
        children: [(0, _v1.jsx)(_v87.Skeleton, {
          minW: (0, _v13.rem)(_v0),
          maxH: (0, _v13.rem)(26)
        }), (0, _v1.jsx)(_v87.Skeleton, {
          minW: (0, _v13.rem)(_v0),
          maxH: (0, _v13.rem)(14)
        })]
      }, _v1))
    }),
    _v162 = () => {
      let [_v0, _v1] = (0, _v10.useState)(!1),
        {
          workspaceUuid: _v2
        } = (0, _v99.useCurrentWorkspaceDetails)(),
        _v3 = (0, _v6.getTranslations)(),
        {
          data: _v4,
          mutate: _v5,
          isLoading: _v6
        } = (0, _v20.useGetWorkspace)(() => _v2 ? {
          select: ["displayName", "membershipCount.admins", "membershipCount.members", "rolesCount"],
          where: {
            workspaceUuid: _v2
          }
        } : null, {
          revalidateOnFocus: !1,
          revalidateIfStale: !1
        }),
        {
          rolesCount: {
            admin: _v7 = 0,
            contributorPlus: _v8 = 0,
            contributor: _v9 = 0,
            viewer: _v10 = 0,
            owner: _v11 = 0
          } = {}
        } = _v4 || {};
      return (0, _v1.jsxs)(_v12.HStack, {
        width: "100%",
        backgroundColor: "surface",
        justify: "space-between",
        borderRadius: "md",
        padding: "md",
        children: [_v2 && _v0 && !_v6 && (0, _v1.jsx)(_v158, {
          workspaceUuid: _v2,
          workspaceName: _v4?.displayName ?? "",
          closeModal: () => _v1(!1),
          isOpen: _v0,
          onInviteSuccess: _v5
        }), (0, _v1.jsx)(_v159.SeatCount.Container, {
          children: _v6 || !_v4 ? (0, _v1.jsx)(_v161, {}) : (0, _v1.jsxs)(_v159.SeatCount.Group, {
            children: [(0, _v1.jsx)(_v159.SeatCount.Tile, {
              label: _v3.AdminRole,
              value: _v7 + _v11
            }), (0, _v1.jsx)(_v159.SeatCount.Tile, {
              label: _v3.ContributorPlusRole,
              value: _v8
            }), (0, _v1.jsx)(_v159.SeatCount.Tile, {
              label: _v3.ContributorRole,
              value: _v9
            }), (0, _v1.jsx)(_v159.SeatCount.Tile, {
              label: _v3.ViewerRole,
              value: _v10
            })]
          })
        }), (0, _v1.jsxs)(_v12.HStack, {
          spacing: 4,
          children: [(0, _v1.jsx)(_v127, {}), (0, _v1.jsx)(_v35.Button, {
            fontWeight: "500",
            leftIcon: (0, _v1.jsx)(_v122.PersonUserAdd, {}),
            variant: "primary",
            onClick: () => _v1(!0),
            children: _v3.Invite
          })]
        })]
      });
    };
  var _v163 = _v0.i(0);
  let _v164 = () => {
    let _v0 = (0, _v6.getTranslations)();
    return (0, _v1.jsxs)(_v2.VStack, {
      spacing: "lg",
      p: "lg",
      pb: "xl",
      children: [(0, _v1.jsx)(_v3.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
        children: _v0.Members
      }), (0, _v1.jsx)(_v162, {}), (0, _v1.jsx)(_v121, {})]
    });
  };
  (0, _v4.withPageSetup)(_v163.getWspServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v164.getLayout = (_v0, _v1) => (0, _v5.getLayout)(_v0, _v1, _v5.WORKSPACE_ROOT_LIST_LAYOUT), _v0.s(["__N_SSP", 0, !0, "default", 0, _v164], 0);
}