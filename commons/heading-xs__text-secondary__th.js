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
      label: _v0,
      width: _v1
    }) => (0, _v1.jsx)(_v15.Th, {
      width: _v1,
      paddingY: "sm",
      paddingX: "sm",
      children: (0, _v1.jsx)(_v11.Text, {
        variant: "heading-xs",
        color: "text-secondary",
        children: _v0
      })
    }),
    _v19 = () => (0, _v1.jsx)(_v16.Thead, {
      sx: {
        "& th": {
          backgroundColor: "fill-component"
        },
        "& th:first-of-type": {
          borderTopLeftRadius: "md",
          borderBottomLeftRadius: "md"
        },
        "& th:last-of-type": {
          borderTopRightRadius: "md",
          borderBottomRightRadius: "md"
        }
      },
      children: (0, _v1.jsxs)(_v17.Tr, {
        height: (0, _v7.rem)(40),
        children: [(0, _v1.jsx)(_v18, {
          label: (0, _v13.translate)({
            singular: "Date",
            dictionary: {
              es: {
                singular: "Fecha"
              },
              "de-DE": {
                singular: "Datum"
              },
              "fr-FR": {
                singular: "Date "
              },
              "ja-JP": {
                singular: "日付"
              },
              "ko-KR": {
                singular: "날짜"
              },
              "pt-BR": {
                singular: "Data"
              },
              "zh-CN": {
                singular: "日期"
              }
            }
          })
        }), (0, _v1.jsx)(_v18, {
          label: (0, _v13.translate)({
            singular: "Action performed",
            dictionary: {
              es: {
                singular: "Acción realizada"
              },
              "de-DE": {
                singular: "Aktion ausgeführt"
              },
              "fr-FR": {
                singular: "Action effectuée"
              },
              "ja-JP": {
                singular: "実行された操作"
              },
              "ko-KR": {
                singular: "수행된 작업"
              },
              "pt-BR": {
                singular: "Ação executada"
              },
              "zh-CN": {
                singular: "已执行操作"
              }
            }
          }),
          width: (0, _v7.rem)(240)
        }), (0, _v1.jsx)(_v18, {
          label: (0, _v13.translate)({
            singular: "Affected Object",
            dictionary: {
              es: {
                singular: "Objeto afectado"
              },
              "de-DE": {
                singular: "Betroffenes Objekt"
              },
              "fr-FR": {
                singular: "Objet affecté"
              },
              "ja-JP": {
                singular: "影響を受けたオブジェクト"
              },
              "ko-KR": {
                singular: "영향을 받은 대상"
              },
              "pt-BR": {
                singular: "Objeto afetado"
              },
              "zh-CN": {
                singular: "受影响的对象"
              }
            }
          })
        }), (0, _v1.jsx)(_v18, {
          label: (0, _v13.translate)({
            singular: "User",
            dictionary: {
              es: {
                singular: "Usuario"
              },
              "de-DE": {
                singular: "Benutzer"
              },
              "fr-FR": {
                singular: "Utilisateur"
              },
              "ja-JP": {
                singular: "ユーザー"
              },
              "ko-KR": {
                singular: "사용자"
              },
              "pt-BR": {
                singular: "Usuário"
              },
              "zh-CN": {
                singular: "用户"
              }
            }
          })
        }), (0, _v1.jsx)(_v18, {
          label: (0, _v13.translate)({
            singular: "Credits used",
            dictionary: {
              es: {
                singular: "Créditos utilizados"
              },
              "de-DE": {
                singular: "Verwendete Credits"
              },
              "fr-FR": {
                singular: "Crédits utilisés"
              },
              "ja-JP": {
                singular: "使用したクレジット"
              },
              "ko-KR": {
                singular: "사용된 크레딧"
              },
              "pt-BR": {
                singular: "Créditos utilizados"
              },
              "zh-CN": {
                singular: "已使用积分"
              }
            }
          })
        }), (0, _v1.jsx)(_v18, {
          label: (0, _v13.translate)({
            singular: "Status",
            dictionary: {
              es: {
                singular: "Estado"
              },
              "fr-FR": {
                singular: "Statut"
              },
              "ja-JP": {
                singular: "ステータス"
              },
              "ko-KR": {
                singular: "상태"
              },
              "zh-CN": {
                singular: "状态"
              }
            }
          })
        })]
      })
    });
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  function _v23(_v0) {
    switch (_v0) {
      case "coyote":
        return (0, _v13.translate)({
          singular: "Video Dubbing",
          dictionary: {
            es: {
              singular: "Doblaje de vídeo"
            },
            "de-DE": {
              singular: "Video-Synchronisation"
            },
            "fr-FR": {
              singular: "Doublage vidéo"
            },
            "ja-JP": {
              singular: "ビデオ吹き替え"
            },
            "ko-KR": {
              singular: "영상 더빙"
            },
            "pt-BR": {
              singular: "Dublagem de Vídeo"
            },
            "zh-CN": {
              singular: "视频配音"
            }
          }
        });
      case "live_captions":
        return (0, _v13.translate)({
          singular: "Live event captions",
          dictionary: {
            es: {
              singular: "Subtítulos de evento en vivo"
            },
            "de-DE": {
              singular: "Live-Event-Untertitel"
            },
            "fr-FR": {
              singular: "Sous-titres d'événement en direct"
            },
            "ja-JP": {
              singular: "ライブイベントのキャプション"
            },
            "ko-KR": {
              singular: "라이브 이벤트 자막"
            },
            "pt-BR": {
              singular: "Legendas de evento ao vivo"
            },
            "zh-CN": {
              singular: "直播字幕"
            }
          }
        });
      case "live_translations":
        return (0, _v13.translate)({
          singular: "Live event translation",
          dictionary: {
            es: {
              singular: "Traducción de evento en vivo"
            },
            "de-DE": {
              singular: "Live-Event-Übersetzung"
            },
            "fr-FR": {
              singular: "Traduction d'événement en direct"
            },
            "ja-JP": {
              singular: "ライブイベントの翻訳"
            },
            "ko-KR": {
              singular: "라이브 이벤트 번역"
            },
            "pt-BR": {
              singular: "Tradução de evento ao vivo"
            },
            "zh-CN": {
              singular: "直播翻译"
            }
          }
        });
      case "bulk_job_manager":
        return (0, _v13.translate)({
          singular: "Bulk job",
          dictionary: {
            es: {
              singular: "Trabajo por lotes"
            },
            "de-DE": {
              singular: "Stapelauftrag"
            },
            "fr-FR": {
              singular: "Traitement par lot"
            },
            "ja-JP": {
              singular: "一括ジョブ"
            },
            "ko-KR": {
              singular: "일괄 작업"
            },
            "pt-BR": {
              singular: "Tarefa em lote"
            },
            "zh-CN": {
              singular: "批量作业"
            }
          }
        });
      default:
        return (0, _v13.translate)({
          singular: "AI credits usage",
          dictionary: {
            es: {
              singular: "Uso de créditos de IA"
            },
            "de-DE": {
              singular: "KI-Credits-Nutzung"
            },
            "fr-FR": {
              singular: "Utilisation des crédits IA"
            },
            "ja-JP": {
              singular: "AIクレジットの使用量"
            },
            "ko-KR": {
              singular: "AI 크레딧 사용 내역"
            },
            "pt-BR": {
              singular: "Uso de créditos de IA"
            },
            "zh-CN": {
              singular: "AI 积分使用"
            }
          }
        });
    }
  }
  function _v24(_v0) {
    if (!_v0) return "";
    let _v1 = new Date(_v0);
    return Number.isNaN(_v1.getTime()) ? "" : _v1.toLocaleDateString(void 0, {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    userId: _v0
  }) => {
    let {
      data: _v1,
      isLoading: _v2,
      error: _v3
    } = (0, _v28.useGetUser)(() => _v0 ? {
      where: {
        userId: _v0
      },
      select: ["name", "link", "pictures.sizes"]
    } : null);
    if (null === _v0) return (0, _v1.jsx)(_v11.Text, {
      variant: "body-md",
      color: "text-tertiary",
      children: "—"
    });
    if (_v2 && !_v1) return (0, _v1.jsx)(_v27.Skeleton, {
      borderRadius: "sm",
      height: "2rem",
      variant: "text"
    });
    let _v4 = _v1?.name,
      _v5 = _v1?.link,
      _v6 = _v1?.pictures?.sizes,
      _v7 = _v6 && _v6.length > 0 ? _v6[0].link : void 0;
    if (!_v4 || _v3) return (0, _v1.jsxs)(_v26.HStack, {
      children: [(0, _v1.jsx)(_v25.Avatar, {
        shape: "full",
        size: "sm",
        alt: "",
        nameProps: {
          name: "?"
        }
      }), (0, _v1.jsxs)(_v12.VStack, {
        alignItems: "flex-start",
        gap: "0",
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "heading-xs",
          children: (0, _v13.translate)({
            singular: "Removed member",
            dictionary: {
              es: {
                singular: "Miembro eliminado"
              },
              "de-DE": {
                singular: "Entferntes Mitglied"
              },
              "fr-FR": {
                singular: "Membre supprimé"
              },
              "ja-JP": {
                singular: "削除されたメンバー"
              },
              "ko-KR": {
                singular: "제거된 구성원"
              },
              "pt-BR": {
                singular: "Membro removido"
              },
              "zh-CN": {
                singular: "已移除成员"
              }
            }
          })
        }), (0, _v1.jsx)(_v11.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: (0, _v13.translate)({
            singular: "User ID {ID}",
            replacements: {
              ID: _v0
            },
            dictionary: {
              es: {
                singular: "ID de usuario {ID}"
              },
              "de-DE": {
                singular: "Benutzer-ID {ID}"
              },
              "fr-FR": {
                singular: "ID utilisateur {ID}"
              },
              "ja-JP": {
                singular: "ユーザーID {ID}"
              },
              "ko-KR": {
                singular: "사용자 ID {ID}"
              },
              "pt-BR": {
                singular: "ID do usuário {ID}"
              },
              "zh-CN": {
                singular: "用户 ID {ID}"
              }
            }
          })
        })]
      })]
    });
    if (/^user\d+$/i.test(_v4)) return (0, _v1.jsxs)(_v26.HStack, {
      children: [(0, _v1.jsx)(_v25.Avatar, {
        shape: "full",
        size: "sm",
        alt: "",
        nameProps: {
          name: "W"
        }
      }), (0, _v1.jsxs)(_v12.VStack, {
        alignItems: "flex-start",
        gap: "0",
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "heading-xs",
          children: (0, _v13.translate)({
            singular: "Workspace account",
            dictionary: {
              es: {
                singular: "Cuenta del espacio de trabajo"
              },
              "de-DE": {
                singular: "Workspace-Konto"
              },
              "fr-FR": {
                singular: "Compte de l'espace de travail"
              },
              "ja-JP": {
                singular: "ワークスペースアカウント"
              },
              "ko-KR": {
                singular: "워크스페이스 계정"
              },
              "pt-BR": {
                singular: "Conta do espaço de trabalho"
              },
              "zh-CN": {
                singular: "工作区账户"
              }
            }
          })
        }), (0, _v1.jsx)(_v11.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: (0, _v13.translate)({
            singular: "User ID {ID}",
            replacements: {
              ID: _v0
            },
            dictionary: {
              es: {
                singular: "ID de usuario {ID}"
              },
              "de-DE": {
                singular: "Benutzer-ID {ID}"
              },
              "fr-FR": {
                singular: "ID utilisateur {ID}"
              },
              "ja-JP": {
                singular: "ユーザーID {ID}"
              },
              "ko-KR": {
                singular: "사용자 ID {ID}"
              },
              "pt-BR": {
                singular: "ID do usuário {ID}"
              },
              "zh-CN": {
                singular: "用户 ID {ID}"
              }
            }
          })
        })]
      })]
    });
    let _v8 = _v5 ? _v5.replace(/^https?:\/\/[^/]+\//, "") : null;
    return (0, _v1.jsxs)(_v26.HStack, {
      children: [(0, _v1.jsx)(_v25.Avatar, {
        shape: "full",
        size: "sm",
        src: _v7,
        alt: _v4,
        nameProps: {
          name: _v4
        }
      }), (0, _v1.jsxs)(_v12.VStack, {
        alignItems: "flex-start",
        gap: "0",
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "heading-xs",
          children: _v4
        }), _v8 && (0, _v1.jsx)(_v11.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v8
        })]
      })]
    });
  };
  var _v30 = _v0.i(0);
  let _v31 = new Set(["live_captions", "live_translations"]),
    _v32 = _v0 => _v31.has(_v0 ?? ""),
    _v33 = (_v0, _v1) => `${_v32(_v1) ? "live" : "video"}:${_v0}`,
    _v34 = ({
      value: _v0,
      secondary: _v1
    }) => _v0 ? (0, _v1.jsx)(_v11.Text, {
      variant: "body-md",
      color: _v1 ? "text-secondary" : void 0,
      children: _v0
    }) : (0, _v1.jsx)(_v11.Text, {
      variant: "body-md",
      color: "text-tertiary",
      children: "—"
    }),
    _v35 = ({
      operation: _v0,
      clipReference: _v1
    }) => {
      let _v2 = _v1?.name ?? (null !== _v0.clipId ? `#${_v0.clipId}` : "");
      return (0, _v1.jsxs)(_v17.Tr, {
        height: (0, _v7.rem)(64),
        sx: {
          "& td": {
            borderBottom: "1px solid",
            borderColor: "stroke"
          }
        },
        children: [(0, _v1.jsx)(_v22.Td, {
          paddingY: "sm",
          paddingX: "sm",
          children: (0, _v1.jsx)(_v34, {
            value: _v24(_v0.occurredAt)
          })
        }), (0, _v1.jsx)(_v22.Td, {
          paddingY: "sm",
          paddingX: "sm",
          width: (0, _v7.rem)(240),
          children: (0, _v1.jsx)(_v34, {
            value: _v23(_v0.consumerService),
            secondary: !0
          })
        }), (0, _v1.jsx)(_v22.Td, {
          paddingY: "sm",
          paddingX: "sm",
          children: null !== _v0.clipId ? (0, _v1.jsx)(_v20.default, {
            href: _v1?.href ?? (_v32(_v0.consumerService) ? "/library/events" : `/manage/videos/${_v0.clipId}`),
            passHref: !0,
            children: (0, _v1.jsx)(_v11.Text, {
              as: "a",
              variant: "body-md",
              color: "text-link",
              sx: {
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline"
                }
              },
              children: _v2
            })
          }) : (0, _v1.jsx)(_v34, {
            value: _v2
          })
        }), (0, _v1.jsx)(_v22.Td, {
          paddingY: "sm",
          paddingX: "sm",
          children: (0, _v1.jsx)(_v29, {
            userId: _v0.triggeringUserId
          })
        }), (0, _v1.jsx)(_v22.Td, {
          paddingY: "sm",
          paddingX: "sm",
          children: (0, _v1.jsx)(_v11.Text, {
            variant: "heading-xs",
            children: _v0.creditsUsed.toLocaleString()
          })
        }), (0, _v1.jsx)(_v22.Td, {
          paddingY: "sm",
          paddingX: "sm",
          children: (0, _v1.jsx)(_v21.Tag, {
            size: "md",
            borderRadius: "sm",
            children: (0, _v1.jsx)(_v21.TagLabel, {
              children: (0, _v13.translate)({
                singular: "Done",
                dictionary: {
                  es: {
                    singular: "Hecho"
                  },
                  "de-DE": {
                    singular: "Fertig"
                  },
                  "fr-FR": {
                    singular: "Terminé"
                  },
                  "ja-JP": {
                    singular: "完了"
                  },
                  "ko-KR": {
                    singular: "완료"
                  },
                  "pt-BR": {
                    singular: "Feito"
                  },
                  "zh-CN": {
                    singular: "已存档"
                  }
                }
              })
            })
          })
        })]
      }, _v0.operationKey);
    };
  function _v36(_v0) {
    let _v1 = _v0;
    return (/^[=+\-@\t\r]/.test(_v1) && (_v1 = `'${_v1}`), /[",\n\r\t]/.test(_v1)) ? `"${_v1.replace(/"/g, '""')}"` : _v1;
  }
  function _v37(_v0, _v1, _v2 = "ai-credits-usage.csv") {
    let _v3 = [["Date", "Action performed", "Affected object", "Affected object ID", "User ID", "Language", "Workspace ID", "Credits used", "Status"], ..._v0.map(_v0 => [_v24(_v0.occurredAt), _v23(_v0.consumerService), null !== _v0.clipId ? _v1[_v33(_v0.clipId, _v0.consumerService)]?.name ?? "" : "", null !== _v0.clipId ? String(_v0.clipId) : "", null !== _v0.triggeringUserId ? String(_v0.triggeringUserId) : "", _v0.targetLang ?? "", null !== _v0.workspaceId ? String(_v0.workspaceId) : "", String(_v0.creditsUsed), "Done"])].map(_v0 => _v0.map(_v36).join(",")).join("\n"),
      _v4 = document.createElement("a");
    _v4.setAttribute("href", "data:text/csv;charset=utf-8," + encodeURIComponent(_v3)), _v4.setAttribute("download", _v2), document.body.appendChild(_v4), _v4.click(), document.body.removeChild(_v4);
  }
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  async function _v40({
    baseUrl: _v0,
    select: _v1,
    where: {
      orgUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v39.measureLatency)("getOrganizationEnterpriseCreditsUsageOperations", "GET", async () => {
      let _v0 = await fetch(`${_v0}/organizations/${_v2}/enterprise_credits/usage_operations?${(0, _v38.searchQueryString)(_v3)}&fields=${_v1.map(_v38.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v38.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v38.deepCamelCase)(_v1);
    });
  }
  var _v41 = _v0.i(0);
  async function _v42({
    baseUrl: _v0,
    select: _v1,
    where: {
      workspaceUuid: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v39.measureLatency)("getWorkspaceEnterpriseCreditsUsageOperations", "GET", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v2}/enterprise_credits/usage_operations?${(0, _v38.searchQueryString)(_v3)}&fields=${_v1.map(_v38.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v38.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v38.deepCamelCase)(_v1);
    });
  }
  var _v43 = _v0.i(0);
  let _v44 = ["data.operationKey", "data.creditsUsed", "data.occurredAt", "data.clipId", "data.targetLang", "data.consumerService", "data.triggeringUserId", "data.workspaceId", "data.objectName", "data.objectUri", "paging.next"];
  var _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0);
  function _v49(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v43.useGctlConfig)();
    return (0, _v45.default)(_v2 ? `/organizations/${_v2.where.orgUuid}/enterprise_credits/usage_operations${(0, _v48.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v40({
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
  function _v50(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v43.useGctlConfig)();
    return (0, _v45.default)(_v2 ? `/workspaces/${_v2.where.workspaceUuid}/enterprise_credits/usage_operations${(0, _v48.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v42({
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
  "true" === _v46.default.env.STORYBOOK && (0, _v48.assignMswData)(_v49, {
    endpoint: "/organizations/:orgUuid/enterprise_credits/usage_operations",
    method: "GET"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v48.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v47.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v43.useGctlConfig)(),
      [_v5, _v6] = (0, _v48.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/organizations/${_v0.where.orgUuid}/enterprise_credits/usage_operations${(0, _v48.serializeQuery)(_v0)}`, _v40({
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
    endpoint: "/organizations/:orgUuid/enterprise_credits/usage_operations",
    method: "GET"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v48.assignMswData)(_v50, {
    endpoint: "/workspaces/:workspaceUuid/enterprise_credits/usage_operations",
    method: "GET"
  }), "true" === _v46.default.env.STORYBOOK && (0, _v48.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v47.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v43.useGctlConfig)(),
      [_v5, _v6] = (0, _v48.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/enterprise_credits/usage_operations${(0, _v48.serializeQuery)(_v0)}`, _v42({
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
    endpoint: "/workspaces/:workspaceUuid/enterprise_credits/usage_operations",
    method: "GET"
  });
  let _v51 = ["data.operationKey", "data.creditsUsed", "data.occurredAt", "data.clipId", "data.targetLang", "data.consumerService", "data.triggeringUserId", "data.workspaceId", "data.objectName", "data.objectUri", "paging.next"];
  _v0.s(["AiCreditsConsumptionList", 0, ({
    organizationUuid: _v0,
    workspaceUuid: _v1,
    teamOwnerId: _v2
  }) => {
    let {
        operations: _v3,
        loadMore: _v4,
        hasMore: _v5,
        isLoading: _v6,
        isLoadingInitial: _v7
      } = function ({
        organizationUuid: _v0,
        workspaceUuid: _v1,
        teamOwnerId: _v2
      }) {
        let [_v3, _v4] = (0, _v2.useState)(void 0),
          [_v5, _v6] = (0, _v2.useState)([]),
          _v7 = (0, _v2.useRef)(new Set()),
          _v8 = !!_v0,
          _v9 = !_v8 && !!_v1,
          {
            baseUrl: _v10,
            jwt: _v11,
            xVimeoPage: _v12,
            locale: _v13
          } = (0, _v43.useGctlConfig)(),
          _v14 = _v49(() => _v8 && _v0 ? {
            where: {
              orgUuid: _v0
            },
            select: _v51,
            query: _v3 ? {
              cursor: _v3
            } : {}
          } : null),
          _v15 = _v50(() => _v9 && _v1 ? {
            where: {
              workspaceUuid: _v1
            },
            select: _v51,
            query: _v3 ? {
              cursor: _v3
            } : {}
          } : null),
          _v16 = !_v8 && !_v9 && _v2 && _v2 ? `${_v10}/users/${_v2}/enterprise_credits/usage_operations?${new URLSearchParams({
            per_page: "15",
            ...(_v3 ? {
              cursor: _v3
            } : {})
          })}` : null,
          _v17 = (0, _v45.default)(_v16, async _v0 => {
            let _v1 = await fetch(_v0, {
              headers: {
                Authorization: _v11 ? `jwt ${_v11}` : "",
                "Vimeo-Page": `${_v12}`,
                "Accept-Language": _v13 ?? "en"
              }
            });
            if (!_v1.ok) throw Error(`Failed to fetch team credit usage: ${_v1.status}`);
            return (0, _v38.deepCamelCase)(await _v1.json());
          }),
          _v18 = _v8 ? _v14.data : _v9 ? _v15.data : _v17.data,
          _v19 = _v8 ? _v14.error : _v9 ? _v15.error : _v17.error,
          _v20 = _v8 ? _v14.isLoading : _v9 ? _v15.isLoading : _v17.isLoading;
        (0, _v2.useEffect)(() => {
          if (!_v18) return;
          let _v0 = (_v18.data ?? []).filter(_v0 => !_v7.current.has(_v0.operationKey));
          _v0.length > 0 && (_v0.forEach(_v0 => _v7.current.add(_v0.operationKey)), _v6(_v0 => [..._v0, ..._v0]));
        }, [_v18]);
        let _v21 = _v18?.paging?.next ?? null;
        return {
          operations: _v5,
          loadMore: (0, _v2.useCallback)(() => {
            _v21 && _v4(_v21);
          }, [_v21]),
          hasMore: !!_v21,
          isLoading: !!_v20,
          isLoadingInitial: !!_v20 && 0 === _v5.length,
          error: _v19
        };
      }({
        organizationUuid: _v0,
        workspaceUuid: _v1,
        teamOwnerId: _v2
      }),
      {
        fetchAllOperations: _v8,
        isExporting: _v9
      } = function ({
        organizationUuid: _v0,
        workspaceUuid: _v1,
        teamOwnerId: _v2
      }) {
        let {
            baseUrl: _v3,
            jwt: _v4,
            xVimeoPage: _v5,
            locale: _v6
          } = (0, _v43.useGctlConfig)(),
          [_v7, _v8] = (0, _v2.useState)(!1);
        return {
          fetchAllOperations: async () => {
            _v8(!0);
            try {
              let _v0,
                _v1 = [],
                _v2 = new Set(),
                _v3 = !1,
                _v4 = {
                  "Content-Type": "application/json",
                  Authorization: _v4 ? `jwt ${_v4}` : "",
                  "Vimeo-Page": `${_v5}`,
                  "Accept-Language": _v6 ?? "en"
                };
              for (let _v0 = 0; _v0 < 100; _v0 += 1) {
                let _v0 = {
                    perPage: 0,
                    ...(_v0 ? {
                      cursor: _v0
                    } : {})
                  },
                  _v1 = _v0 ? await _v40({
                    where: {
                      orgUuid: _v0
                    },
                    select: _v44,
                    query: _v0,
                    headers: _v4,
                    baseUrl: _v3
                  }) : _v1 ? await _v42({
                    where: {
                      workspaceUuid: _v1
                    },
                    select: _v44,
                    query: _v0,
                    headers: _v4,
                    baseUrl: _v3
                  }) : await fetch(`${_v3}/users/${_v2 ?? ""}/enterprise_credits/usage_operations?${new URLSearchParams({
                    per_page: String(0),
                    ...(_v0 ? {
                      cursor: _v0
                    } : {})
                  })}`, {
                    headers: _v4
                  }).then(async _v0 => {
                    if (!_v0.ok) throw Error(`Failed to fetch team credit usage: ${_v0.status}`);
                    return (0, _v38.deepCamelCase)(await _v0.json());
                  });
                for (let _v0 of _v1?.data ?? []) _v2.has(_v0.operationKey) || (_v2.add(_v0.operationKey), _v1.push(_v0));
                let _v2 = _v1?.paging?.next ?? null;
                if (!_v2) break;
                if (99 === _v0) {
                  _v3 = !0;
                  break;
                }
                _v0 = _v2;
              }
              let _v5 = {};
              for (let _v0 of _v1) null !== _v0.clipId && _v32(_v0.consumerService) && _v0.objectName && _v0.objectUri && (_v5[_v33(_v0.clipId, _v0.consumerService)] = {
                name: _v0.objectName,
                href: _v0.objectUri
              });
              let _v6 = Array.from(new Set(_v1.filter(_v0 => !_v32(_v0.consumerService)).map(_v0 => _v0.clipId).filter(_v0 => null !== _v0)));
              for (let _v0 = 0; _v0 < _v6.length; _v0 += 50) {
                let _v0 = _v6.slice(_v0, _v0 + 50);
                try {
                  let _v0 = await (0, _v41.getVideos)({
                    select: ["name", "uri"],
                    query: {
                      uris: _v0.map(_v0 => `/videos/${_v0}`).join(",")
                    },
                    headers: _v4,
                    baseUrl: _v3
                  });
                  for (let _v0 of _v0?.data ?? []) {
                    let _v0 = _v0.uri,
                      _v1 = _v0.name;
                    if (!_v0 || !_v1) continue;
                    let _v2 = Number(_v0.split("/").pop());
                    Number.isFinite(_v2) && (_v5[`video:${_v2}`] = {
                      name: _v1,
                      href: `/manage/videos/${_v2}`
                    });
                  }
                } catch {}
              }
              return {
                operations: _v1,
                clipNames: _v5,
                isTruncated: _v3
              };
            } finally {
              _v8(!1);
            }
          },
          isExporting: _v7
        };
      }({
        organizationUuid: _v0,
        workspaceUuid: _v1,
        teamOwnerId: _v2
      }),
      _v10 = (0, _v14.usePico)(),
      _v11 = _v1 ?? _v0 ?? (_v2 ? String(_v2) : void 0),
      _v12 = _v1 ? "workspace" : _v2 ? "team" : "organization",
      [_v13, _v14] = (0, _v2.useState)(""),
      _v15 = function (_v0) {
        let _v1 = Array.from(new Set(_v0.filter(_v0 => Number.isFinite(_v0)))),
          {
            data: _v2
          } = (0, _v30.useGetVideos)(() => _v1.length > 0 ? {
            select: ["name", "uri"],
            query: {
              uris: _v1.map(_v0 => `/videos/${_v0}`).join(",")
            }
          } : null),
          _v3 = {};
        for (let _v0 of _v2?.data ?? []) {
          let _v0 = _v0.uri,
            _v1 = _v0.name;
          if (!_v0 || !_v1) continue;
          let _v2 = Number(_v0.split("/").pop());
          Number.isFinite(_v2) && (_v3[`video:${_v2}`] = {
            name: _v1,
            href: `/manage/videos/${_v2}`
          });
        }
        return _v3;
      }((0, _v2.useMemo)(() => _v3.filter(_v0 => !_v32(_v0.consumerService)).map(_v0 => _v0.clipId).filter(_v0 => null !== _v0), [_v3])),
      _v16 = (0, _v2.useCallback)(_v0 => {
        if (null !== _v0.clipId) return _v32(_v0.consumerService) ? _v0.objectName && _v0.objectUri ? {
          name: _v0.objectName,
          href: _v0.objectUri
        } : void 0 : _v15[_v33(_v0.clipId, _v0.consumerService)];
      }, [_v15]),
      _v17 = (0, _v2.useMemo)(() => {
        let _v0 = _v13.trim().toLowerCase();
        return _v0 ? _v3.filter(_v0 => {
          let _v1 = _v16(_v0)?.name ?? "";
          return [_v23(_v0.consumerService), _v1, _v0.targetLang ?? "", null !== _v0.clipId ? String(_v0.clipId) : "", null !== _v0.triggeringUserId ? String(_v0.triggeringUserId) : ""].join(" ").toLowerCase().includes(_v0);
        }) : _v3;
      }, [_v13, _v3, _v16]),
      _v18 = (0, _v2.useMemo)(() => Object.fromEntries(_v3.map(_v0 => [_v33(_v0.clipId ?? 0, _v0.consumerService), _v16(_v0)]).filter(([, _v0]) => void 0 !== _v0)), [_v3, _v16]);
    return (0, _v1.jsxs)(_v12.VStack, {
      width: "100%",
      gap: "md",
      "data-testid": "ai-credits-consumption-list",
      children: [(0, _v1.jsx)(_v11.Text, {
        variant: "heading-md",
        alignSelf: "flex-start",
        children: (0, _v13.translate)({
          singular: "AI credits consumption",
          dictionary: {
            es: {
              singular: "Consumo de créditos de IA"
            },
            "de-DE": {
              singular: "KI-Credits-Verbrauch"
            },
            "fr-FR": {
              singular: "Consommation de crédits IA"
            },
            "ja-JP": {
              singular: "AIクレジットの消費量"
            },
            "ko-KR": {
              singular: "AI 크레딧 소비"
            },
            "pt-BR": {
              singular: "Consumo de créditos de IA"
            },
            "zh-CN": {
              singular: "AI 积分消耗"
            }
          }
        })
      }), (0, _v1.jsxs)(_v12.VStack, {
        width: "100%",
        gap: "md",
        backgroundColor: "fill-surface",
        borderRadius: "lg",
        padding: "md",
        alignItems: "stretch",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "md",
          children: [(0, _v1.jsx)(_v3.Box, {
            width: (0, _v7.rem)(306),
            children: (0, _v1.jsx)(_v8.Search, {
              size: "md",
              variant: "primary",
              label: (0, _v13.translate)({
                singular: "Search AI credits usage",
                dictionary: {
                  es: {
                    singular: "Buscar uso de créditos de IA"
                  },
                  "de-DE": {
                    singular: "KI-Credits-Nutzung durchsuchen"
                  },
                  "fr-FR": {
                    singular: "Rechercher l'utilisation des crédits IA"
                  },
                  "ja-JP": {
                    singular: "AIクレジットの使用量を検索"
                  },
                  "ko-KR": {
                    singular: "AI 크레딧 사용 내역 검색"
                  },
                  "pt-BR": {
                    singular: "Pesquisar uso de créditos de IA"
                  },
                  "zh-CN": {
                    singular: "搜索 AI 积分使用"
                  }
                }
              }),
              placeholder: (0, _v13.translate)({
                singular: "Search...",
                dictionary: {
                  es: {
                    singular: "Buscar…"
                  },
                  "de-DE": {
                    singular: "Suchen ..."
                  },
                  "fr-FR": {
                    singular: "Rechercher..."
                  },
                  "ja-JP": {
                    singular: "検索..."
                  },
                  "ko-KR": {
                    singular: "검색..."
                  },
                  "pt-BR": {
                    singular: "Pesquisar..."
                  },
                  "zh-CN": {
                    singular: "搜索..."
                  }
                }
              }),
              value: _v13,
              onChange: _v0 => _v14(_v0.target.value)
            })
          }), (0, _v1.jsx)(_v4.Button, {
            variant: "primary",
            isDisabled: 0 === _v3.length,
            isLoading: _v9,
            onClick: async () => {
              _v11 && _v10.track("vimeo_ai_credits_usage_csv_export_requested", {
                entity_id: _v11,
                entity_type: _v12
              });
              try {
                let _v0 = await _v8();
                if (_v0.operations.length > 0) return void _v37(_v0.operations, _v0.clipNames, _v0.isTruncated ? "ai-credits-usage-truncated.csv" : "ai-credits-usage.csv");
              } catch {}
              _v37(_v3, _v18);
            },
            children: (0, _v13.translate)({
              singular: "Export to CSV",
              dictionary: {
                es: {
                  singular: "Exportar a CSV"
                },
                "de-DE": {
                  singular: "In CSV exportieren"
                },
                "fr-FR": {
                  singular: "Exporter au format .CSV"
                },
                "ja-JP": {
                  singular: "CSVにエクスポート"
                },
                "ko-KR": {
                  singular: "CSV로 내보내기"
                },
                "pt-BR": {
                  singular: "Exportar para CSV"
                },
                "zh-CN": {
                  singular: "导出为 CSV"
                }
              }
            })
          })]
        }), (0, _v1.jsxs)(_v9.Table, {
          variant: "unstyled",
          sx: {
            "& th": {
              fontVariantNumeric: "normal"
            }
          },
          children: [(0, _v1.jsx)(_v19, {}), (0, _v1.jsx)(_v10.Tbody, {
            children: _v17.map(_v0 => (0, _v1.jsx)(_v35, {
              operation: _v0,
              clipReference: _v16(_v0)
            }, _v0.operationKey))
          })]
        })]
      }), !_v7 && 0 === _v3.length && (0, _v1.jsx)(_v5.Center, {
        width: "100%",
        paddingY: "lg",
        children: (0, _v1.jsx)(_v11.Text, {
          variant: "body-md",
          color: "text-tertiary",
          children: (0, _v13.translate)({
            singular: "No AI credits usage yet.",
            dictionary: {
              es: {
                singular: "Aún no hay uso de créditos de IA."
              },
              "de-DE": {
                singular: "Noch keine KI-Credits-Nutzung."
              },
              "fr-FR": {
                singular: "Aucune utilisation de crédits IA pour le moment."
              },
              "ja-JP": {
                singular: "まだAIクレジットの使用はありません。"
              },
              "ko-KR": {
                singular: "아직 AI 크레딧 사용 내역이 없습니다."
              },
              "pt-BR": {
                singular: "Ainda não há uso de créditos de IA."
              },
              "zh-CN": {
                singular: "尚无 AI 积分使用记录。"
              }
            }
          })
        })
      }), _v5 && (0, _v1.jsx)(_v4.Button, {
        variant: "tertiary",
        isLoading: _v6,
        onClick: _v4,
        children: (0, _v13.translate)({
          singular: "Load more",
          dictionary: {
            es: {
              singular: "Cargar más"
            },
            "de-DE": {
              singular: "Mehr laden"
            },
            "fr-FR": {
              singular: "Afficher plus"
            },
            "ja-JP": {
              singular: "もっとロードする"
            },
            "ko-KR": {
              singular: "동영상 더 보기"
            },
            "pt-BR": {
              singular: "Carregar mais"
            },
            "zh-CN": {
              singular: "加载更多"
            }
          }
        })
      })]
    });
  }], 0);
  var _v52 = _v0.i(0);
  let _v53 = "gray.300",
    _v54 = [{
      key: "base",
      color: "vimeoBlue.400",
      label: (0, _v13.translate)({
        singular: "Base",
        dictionary: {
          "de-DE": {
            singular: "Basis"
          },
          "fr-FR": {
            singular: "De base"
          },
          "ja-JP": {
            singular: "ベース"
          },
          "ko-KR": {
            singular: "기본"
          },
          "zh-CN": {
            singular: "基础"
          }
        }
      })
    }, {
      key: "addons",
      color: "purple.400",
      label: (0, _v13.translate)({
        singular: "Add-ons",
        dictionary: {
          es: {
            singular: "Complementos"
          },
          "fr-FR": {
            singular: "Modules complémentaires"
          },
          "ja-JP": {
            singular: "アドオン"
          },
          "ko-KR": {
            singular: "추가 기능"
          },
          "pt-BR": {
            singular: "Complementos"
          },
          "zh-CN": {
            singular: "附加组件"
          }
        }
      })
    }, {
      key: "gift",
      color: "orange.400",
      label: (0, _v13.translate)({
        singular: "Gifted",
        dictionary: {
          es: {
            singular: "Regalado"
          },
          "fr-FR": {
            singular: "Offert"
          },
          "ja-JP": {
            singular: "ギフト"
          },
          "pt-BR": {
            singular: "Presenteado"
          },
          "zh-CN": {
            singular: "已赠送"
          }
        }
      })
    }],
    _v55 = ({
      totalCount: _v0,
      breakdown: _v1
    }) => {
      let _v2 = Math.max(_v0 && _v0 > 0 ? _v0 : 0, _v54.reduce((_v0, _v1) => _v0 + Math.max(0, _v1[_v1.key]?.used ?? 0), 0)),
        _v3 = _v54.map(_v0 => {
          let _v1 = _v1[_v0.key],
            _v2 = Math.max(0, _v1?.used ?? 0),
            _v3 = Math.max(0, _v1?.granted ?? 0);
          return {
            ..._v0,
            used: _v2,
            granted: _v3,
            widthPercentage: _v2 > 0 ? _v2 / _v2 * 100 : 0
          };
        }),
        _v4 = _v3.filter(_v0 => _v0.granted > 0 || _v0.used > 0);
      return (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        width: "100%",
        gap: "sm",
        children: [(0, _v1.jsx)(_v6.Flex, {
          height: (0, _v7.rem)(8),
          width: "100%",
          borderRadius: "999px",
          backgroundColor: _v53,
          overflow: "hidden",
          children: _v3.map(_v0 => _v0.widthPercentage > 0 ? (0, _v1.jsx)(_v3.Box, {
            height: "100%",
            width: `${_v0.widthPercentage}%`,
            backgroundColor: _v0.color,
            "data-testid": `ai-credits-segment-${_v0.key}`
          }, _v0.key) : null)
        }), (0, _v1.jsxs)(_v6.Flex, {
          gap: "md",
          flexWrap: "wrap",
          children: [_v4.map(_v0 => (0, _v1.jsxs)(_v26.HStack, {
            align: "center",
            gap: "xs",
            children: [(0, _v1.jsx)(_v3.Box, {
              boxSize: (0, _v7.rem)(12),
              borderRadius: "full",
              backgroundColor: _v0.color
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v0.label
            })]
          }, _v0.key)), (0, _v1.jsxs)(_v26.HStack, {
            align: "center",
            gap: "xs",
            children: [(0, _v1.jsx)(_v3.Box, {
              boxSize: (0, _v7.rem)(12),
              borderRadius: "full",
              backgroundColor: _v53
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v13.translate)({
                singular: "Available credits",
                dictionary: {
                  es: {
                    singular: "Créditos disponibles"
                  },
                  "de-DE": {
                    singular: "Verfügbares Guthaben"
                  },
                  "fr-FR": {
                    singular: "Crédits disponibles"
                  },
                  "ja-JP": {
                    singular: "利用可能クレジット"
                  },
                  "ko-KR": {
                    singular: "사용 가능한 크레딧"
                  },
                  "pt-BR": {
                    singular: "Créditos disponíveis"
                  },
                  "zh-CN": {
                    singular: "可用积分"
                  }
                }
              })
            })]
          })]
        })]
      });
    };
  var _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = ({
    variant: _v0
  }) => {
    let _v1 = "error" === _v0 ? (0, _v13.translate)({
      singular: "You've reached your AI credit limit.",
      dictionary: {
        es: {
          singular: "Has alcanzado tu límite de créditos de IA."
        },
        "de-DE": {
          singular: "Sie haben Ihr Limit für KI-Credits erreicht."
        },
        "fr-FR": {
          singular: "Vous avez atteint votre limite de crédits IA."
        },
        "ja-JP": {
          singular: "AIクレジットの上限に達しました。"
        },
        "ko-KR": {
          singular: "AI 크레딧 한도에 도달했습니다."
        },
        "pt-BR": {
          singular: "Você atingiu seu limite de créditos de IA."
        },
        "zh-CN": {
          singular: "您已达到 AI 积分上限。"
        }
      }
    }) : (0, _v13.translate)({
      singular: "You're running low on AI credits.",
      dictionary: {
        es: {
          singular: "Te quedan pocos créditos de IA."
        },
        "de-DE": {
          singular: "Ihnen gehen die KI-Credits zur Neige."
        },
        "fr-FR": {
          singular: "Vos crédits IA sont presque épuisés."
        },
        "ja-JP": {
          singular: "AIクレジットが残りわずかです。"
        },
        "ko-KR": {
          singular: "AI 크레딧이 부족합니다."
        },
        "pt-BR": {
          singular: "Você está ficando sem créditos de IA."
        },
        "zh-CN": {
          singular: "您的 AI 积分即将耗尽。"
        }
      }
    });
    return (0, _v1.jsxs)(_v56.Alert, {
      status: _v0,
      borderRadius: "0",
      alignItems: "center",
      width: "100%",
      "data-testid": `ai-credits-usage-banner-${_v0}`,
      children: [(0, _v1.jsx)(_v57.AlertIcon, {}), (0, _v1.jsx)(_v58.AlertTitle, {
        children: _v1
      }), (0, _v1.jsx)(_v59.Spacer, {}), (0, _v1.jsx)(_v4.Button, {
        variant: "secondary",
        size: "sm",
        onClick: () => window.open("https://vimeo.com/enterprise/contact-us", "_blank"),
        children: (0, _v13.translate)({
          singular: "Contact us",
          dictionary: {
            es: {
              singular: "Contáctenos"
            },
            "de-DE": {
              singular: "Kontaktieren Sie uns"
            },
            "fr-FR": {
              singular: "Contactez-nous"
            },
            "ja-JP": {
              singular: "お問い合わせ"
            },
            "ko-KR": {
              singular: "문의하기"
            },
            "pt-BR": {
              singular: "Entre em contato conosco"
            },
            "zh-CN": {
              singular: "联系我们"
            }
          }
        })
      })]
    });
  };
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  let _v63 = (_v0, _v1) => {
      let _v2 = "number" == typeof _v0 && "number" == typeof _v1 && _v1 > 0 ? _v0 / _v1 : 0;
      return _v2 >= .9 ? "status-destructive-primary" : _v2 >= .75 ? "status-caution-primary" : "fill-brand";
    },
    _v64 = ({
      children: _v0,
      ..._v1
    }) => (0, _v1.jsx)(_v12.VStack, {
      alignSelf: "stretch",
      backgroundColor: "fill-surface",
      borderRadius: "md",
      padding: "lg",
      width: "100%",
      minHeight: (0, _v7.rem)(120),
      justifyContent: "space-between",
      gap: "sm",
      ..._v1,
      children: _v0
    }),
    _v65 = ({
      children: _v0,
      title: _v1,
      tooltip: _v2,
      currentCount: _v3,
      totalCount: _v4,
      hideContactButton: _v5 = !1
    }) => (0, _v1.jsxs)(_v12.VStack, {
      align: "flex-start",
      width: "100%",
      gap: "sm",
      children: [_v1 && (0, _v1.jsxs)(_v6.Flex, {
        justify: "space-between",
        width: "100%",
        children: [(0, _v1.jsxs)(_v26.HStack, {
          align: "center",
          children: [(0, _v1.jsx)(_v11.Text, {
            variant: "heading-xs",
            children: _v1
          }), _v2 && (0, _v1.jsx)(_v61.Tooltip, {
            placement: "top-start",
            label: _v2,
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v62.InfoCircle, {
              boxSize: "2xs",
              display: "block"
            })
          })]
        }), !_v5 && void 0 !== _v3 && void 0 !== _v4 && _v3 >= .9 * _v4 && (0, _v1.jsx)(_v4.Button, {
          size: "xs",
          variant: "secondary",
          onClick: () => window.open("https://vimeo.com/enterprise/contact-us", "_blank"),
          children: (0, _v13.translate)({
            singular: "Contact us",
            dictionary: {
              es: {
                singular: "Contáctenos"
              },
              "de-DE": {
                singular: "Kontaktieren Sie uns"
              },
              "fr-FR": {
                singular: "Contactez-nous"
              },
              "ja-JP": {
                singular: "お問い合わせ"
              },
              "ko-KR": {
                singular: "문의하기"
              },
              "pt-BR": {
                singular: "Entre em contato conosco"
              },
              "zh-CN": {
                singular: "联系我们"
              }
            }
          })
        })]
      }), (0, _v1.jsx)(_v26.HStack, {
        flexDirection: "column",
        width: "100%",
        alignItems: "flex-start",
        children: _v0
      })]
    }),
    _v66 = ({
      currentCount: _v0,
      totalCount: _v1
    }) => {
      let _v2 = "number" == typeof _v0 && "number" == typeof _v1 && _v1 > 0 ? Math.min(100, Math.max(0, _v0 / _v1 * 100)) : 0,
        _v3 = _v63(_v0, _v1);
      return (0, _v1.jsx)(_v6.Flex, {
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(_v2),
        height: (0, _v7.rem)(8),
        width: "100%",
        borderRadius: "999px",
        backgroundColor: "gray.300",
        overflow: "hidden",
        "data-testid": "quota-progress",
        children: (0, _v1.jsx)(_v3.Box, {
          height: "100%",
          width: `${_v2}%`,
          backgroundColor: _v3,
          "data-testid": "quota-progress-fill"
        })
      });
    },
    _v67 = ({
      currentCount: _v0,
      totalCount: _v1,
      currentCountText: _v2,
      totalCountText: _v3,
      hideLimitIndicator: _v4 = !1
    }) => {
      if (void 0 === _v0 || void 0 === _v1) return (0, _v1.jsx)(_v27.Skeleton, {
        borderRadius: "sm",
        height: (0, _v7.rem)(28),
        variant: "text",
        width: "100%"
      });
      let _v5 = _v2 || _v0.toLocaleString(),
        _v6 = _v3 || _v1.toLocaleString(),
        _v7 = !_v4 && _v0 >= .9 * _v1;
      return (0, _v1.jsxs)(_v6.Flex, {
        justify: "space-between",
        width: "100%",
        children: [(0, _v1.jsx)(_v11.Text, {
          variant: "body-md",
          color: "text-secondary",
          children: (0, _v13.translate)({
            singular: "{CURRENT_COUNT} of {TOTAL_COUNT}",
            replacements: {
              CURRENT_COUNT: () => (0, _v1.jsx)(_v11.Text, {
                as: "span",
                variant: "heading-md",
                color: "text-primary",
                children: _v5
              }, "current-count"),
              TOTAL_COUNT: () => (0, _v1.jsx)(_v11.Text, {
                as: "span",
                variant: "body-md",
                children: _v6
              }, "total-count")
            },
            dictionary: {
              es: {
                singular: "{CURRENT_COUNT} de {TOTAL_COUNT}"
              },
              "de-DE": {
                singular: "{CURRENT_COUNT} von {TOTAL_COUNT}"
              },
              "fr-FR": {
                singular: "{CURRENT_COUNT} sur {TOTAL_COUNT}"
              },
              "ja-JP": {
                singular: "{CURRENT_COUNT} / {TOTAL_COUNT}"
              },
              "ko-KR": {
                singular: "{CURRENT_COUNT}/{TOTAL_COUNT}"
              },
              "pt-BR": {
                singular: "{CURRENT_COUNT} de {TOTAL_COUNT}"
              },
              "zh-CN": {
                singular: "{CURRENT_COUNT} / {TOTAL_COUNT}"
              }
            }
          })
        }), _v7 && (0, _v1.jsxs)(_v26.HStack, {
          align: "center",
          gap: "xs",
          children: [(0, _v1.jsx)(_v62.InfoCircle, {
            boxSize: "2xs",
            color: "red.400"
          }), (0, _v1.jsx)(_v11.Text, {
            variant: "body-sm",
            children: (0, _v13.translate)({
              singular: "At limit",
              dictionary: {
                es: {
                  singular: "En el límite"
                },
                "de-DE": {
                  singular: "Am Limit"
                },
                "fr-FR": {
                  singular: "À la limite"
                },
                "ja-JP": {
                  singular: "上限に達しました"
                },
                "ko-KR": {
                  singular: "한도에 도달"
                },
                "pt-BR": {
                  singular: "No limite"
                },
                "zh-CN": {
                  singular: "已到上限"
                }
              }
            })
          })]
        })]
      });
    };
  _v0.s(["AiCreditsTotalCount", 0, ({
    currentCount: _v0,
    totalCount: _v1,
    resetDate: _v2,
    breakdown: _v3,
    banner: _v4,
    ..._v5
  }) => {
    let _v6 = (0, _v13.translate)({
        singular: "Renews on {RESET_DATE}",
        replacements: {
          RESET_DATE: (_v0 => {
            if (!_v0) return "N/A";
            let _v1 = new Date(_v0);
            return Number.isNaN(_v1.getTime()) ? _v0 : _v1.toLocaleDateString(void 0, {
              year: "numeric",
              month: "short",
              day: "numeric"
            });
          })(_v2)
        },
        dictionary: {
          es: {
            singular: "Se renovará el {RESET_DATE}"
          },
          "de-DE": {
            singular: "Verlängert sich {RESET_DATE}"
          },
          "fr-FR": {
            singular: "Renouvelle le {RESET_DATE}"
          },
          "ja-JP": {
            singular: "{RESET_DATE} に更新"
          },
          "ko-KR": {
            singular: "{RESET_DATE}에 갱신"
          },
          "pt-BR": {
            singular: "Renovação em {RESET_DATE}"
          },
          "zh-CN": {
            singular: "{RESET_DATE} 更新"
          }
        }
      }),
      _v7 = _v3 ? (0, _v1.jsxs)(_v12.VStack, {
        align: "flex-start",
        gap: "xs",
        children: [(0, _v1.jsx)(_v11.Text, {
          children: _v6
        }), (0, _v1.jsx)(_v52.Divider, {
          borderColor: "stroke",
          width: "100%"
        }), (0, _v1.jsx)(_v11.Text, {
          children: (0, _v13.translate)({
            singular: "Your account's credit allocation includes:",
            dictionary: {
              es: {
                singular: "La asignación de créditos de su cuenta incluye:"
              },
              "de-DE": {
                singular: "Die Ihrem Konto zugewiesenen Guthaben umfassen:"
              },
              "fr-FR": {
                singular: "L'allocation de crédits de votre compte inclut :"
              },
              "ja-JP": {
                singular: "お客様のアカウントのクレジット割り当てには以下が含まれます："
              },
              "ko-KR": {
                singular: "계정의 크레딧 할당에는 다음이 포함됩니다:"
              },
              "pt-BR": {
                singular: "A alocação de créditos da sua conta inclui:"
              },
              "zh-CN": {
                singular: "您的账户的积分分配包括："
              }
            }
          })
        }), (0, _v1.jsxs)(_v26.HStack, {
          justify: "space-between",
          width: "100%",
          children: [(0, _v1.jsx)(_v11.Text, {
            children: (0, _v13.translate)({
              singular: "Base credits",
              dictionary: {
                es: {
                  singular: "Créditos base"
                },
                "de-DE": {
                  singular: "Basisguthaben"
                },
                "fr-FR": {
                  singular: "Crédits de base"
                },
                "ja-JP": {
                  singular: "基本クレジット"
                },
                "ko-KR": {
                  singular: "기본 크레딧"
                },
                "pt-BR": {
                  singular: "Créditos base"
                },
                "zh-CN": {
                  singular: "基础积分"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Text, {
            children: (_v3.base?.granted ?? 0).toLocaleString()
          })]
        }), (0, _v1.jsxs)(_v26.HStack, {
          justify: "space-between",
          width: "100%",
          children: [(0, _v1.jsx)(_v11.Text, {
            children: (0, _v13.translate)({
              singular: "Add-on credits",
              dictionary: {
                es: {
                  singular: "Créditos adicionales"
                },
                "de-DE": {
                  singular: "Add-on-Guthaben"
                },
                "fr-FR": {
                  singular: "Crédits complémentaires"
                },
                "ja-JP": {
                  singular: "追加クレジット"
                },
                "ko-KR": {
                  singular: "추가 크레딧"
                },
                "pt-BR": {
                  singular: "Créditos adicionais"
                },
                "zh-CN": {
                  singular: "附加积分"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Text, {
            children: (_v3.addons?.granted ?? 0).toLocaleString()
          })]
        }), (0, _v1.jsxs)(_v26.HStack, {
          justify: "space-between",
          width: "100%",
          children: [(0, _v1.jsx)(_v11.Text, {
            children: (0, _v13.translate)({
              singular: "Gifted credits",
              dictionary: {
                es: {
                  singular: "Créditos otorgados"
                },
                "de-DE": {
                  singular: "Geschenktes Guthaben"
                },
                "fr-FR": {
                  singular: "Crédits offerts"
                },
                "ja-JP": {
                  singular: "付与クレジット"
                },
                "ko-KR": {
                  singular: "증정 크레딧"
                },
                "pt-BR": {
                  singular: "Créditos concedidos"
                },
                "zh-CN": {
                  singular: "赠送积分"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Text, {
            children: (_v3.gift?.granted ?? 0).toLocaleString()
          })]
        }), (0, _v1.jsxs)(_v26.HStack, {
          justify: "space-between",
          width: "100%",
          children: [(0, _v1.jsx)(_v11.Text, {
            children: (0, _v13.translate)({
              singular: "Total",
              dictionary: {
                "de-DE": {
                  singular: "Insgesamt"
                },
                "ja-JP": {
                  singular: "合計"
                },
                "ko-KR": {
                  singular: "총계"
                },
                "zh-CN": {
                  singular: "总计"
                }
              }
            })
          }), (0, _v1.jsx)(_v11.Text, {
            children: [_v3.base?.granted ?? 0, _v3.addons?.granted ?? 0, _v3.gift?.granted ?? 0].reduce((_v0, _v1) => _v0 + _v1, 0).toLocaleString()
          })]
        })]
      }) : _v6,
      _v8 = (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v65, {
          title: (0, _v13.translate)({
            singular: "AI credits",
            dictionary: {
              es: {
                singular: "Créditos de IA"
              },
              "de-DE": {
                singular: "AI-Credits"
              },
              "fr-FR": {
                singular: "Crédits IA"
              },
              "ja-JP": {
                singular: "AIクレジット"
              },
              "ko-KR": {
                singular: "AI 크레딧"
              },
              "pt-BR": {
                singular: "Créditos de IA"
              },
              "zh-CN": {
                singular: "AI 积分"
              }
            }
          }),
          tooltip: _v7,
          currentCount: _v0,
          totalCount: _v1,
          hideContactButton: !!_v4,
          children: (0, _v1.jsx)(_v67, {
            currentCount: _v0,
            totalCount: _v1,
            hideLimitIndicator: !!_v4
          })
        }), _v3 ? (0, _v1.jsx)(_v55, {
          totalCount: _v1,
          breakdown: _v3
        }) : (0, _v1.jsx)(_v66, {
          currentCount: _v0,
          totalCount: _v1
        })]
      });
    return _v4 ? (0, _v1.jsxs)(_v12.VStack, {
      "data-testid": "ai-credits-total-count",
      alignSelf: "stretch",
      backgroundColor: "fill-surface",
      borderRadius: "md",
      overflow: "hidden",
      width: "100%",
      gap: "0",
      minHeight: (0, _v7.rem)(120),
      ..._v5,
      children: [(0, _v1.jsx)(_v60, {
        variant: _v4
      }), (0, _v1.jsx)(_v12.VStack, {
        padding: "lg",
        gap: "sm",
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "space-between",
        flex: "1",
        children: _v8
      })]
    }) : (0, _v1.jsx)(_v64, {
      "data-testid": "ai-credits-total-count",
      ...(_v3 ? {
        minHeight: (0, _v7.rem)(120)
      } : {
        height: (0, _v7.rem)(120)
      }),
      ..._v5,
      children: _v8
    });
  }], 0);
  var _v68 = _v0.i(0);
  _v0.s(["StorageTotalCount", 0, ({
    currentCount: _v0,
    totalCount: _v1,
    ..._v2
  }) => {
    let _v3 = (0, _v68.bytesToSize)(_v0 || 0, 1),
      _v4 = (0, _v68.bytesToSize)(_v1 || 0, 1);
    return (0, _v1.jsxs)(_v64, {
      "data-testid": "storage-total-count",
      ..._v2,
      children: [(0, _v1.jsx)(_v65, {
        title: (0, _v13.translate)({
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
        currentCount: _v0,
        totalCount: _v1,
        children: (0, _v1.jsx)(_v67, {
          currentCount: _v0,
          totalCount: _v1,
          currentCountText: _v3,
          totalCountText: _v4
        })
      }), (0, _v1.jsxs)(_v6.Flex, {
        direction: "column",
        width: "100%",
        gap: "sm",
        children: [(0, _v1.jsx)(_v66, {
          currentCount: _v0,
          totalCount: _v1
        }), (0, _v1.jsxs)(_v6.Flex, {
          gap: "md",
          flexWrap: "wrap",
          children: [(0, _v1.jsxs)(_v26.HStack, {
            align: "center",
            gap: "xs",
            children: [(0, _v1.jsx)(_v3.Box, {
              boxSize: (0, _v7.rem)(12),
              borderRadius: "full",
              backgroundColor: _v63(_v0, _v1)
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v13.translate)({
                singular: "Used storage",
                dictionary: {
                  es: {
                    singular: "Almacenamiento utilizado"
                  },
                  "de-DE": {
                    singular: "Genutzter Speicher"
                  },
                  "fr-FR": {
                    singular: "Espace de stockage utilisé"
                  },
                  "ja-JP": {
                    singular: "使用済みストレージ容量"
                  },
                  "ko-KR": {
                    singular: "사용 중인 저장 공간"
                  },
                  "pt-BR": {
                    singular: "Armazenamento utilizado"
                  },
                  "zh-CN": {
                    singular: "已用存储"
                  }
                }
              })
            })]
          }), (0, _v1.jsxs)(_v26.HStack, {
            align: "center",
            gap: "xs",
            children: [(0, _v1.jsx)(_v3.Box, {
              boxSize: (0, _v7.rem)(12),
              borderRadius: "full",
              backgroundColor: "gray.300"
            }), (0, _v1.jsx)(_v11.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v13.translate)({
                singular: "Available storage",
                dictionary: {
                  es: {
                    singular: "Almacenamiento disponible"
                  },
                  "de-DE": {
                    singular: "Verfügbarer Speicher"
                  },
                  "fr-FR": {
                    singular: "Espace de stockage disponible"
                  },
                  "ja-JP": {
                    singular: "利用可能ストレージ容量"
                  },
                  "ko-KR": {
                    singular: "사용 가능한 저장 공간"
                  },
                  "pt-BR": {
                    singular: "Armazenamento disponível"
                  },
                  "zh-CN": {
                    singular: "可用存储"
                  }
                }
              })
            })]
          })]
        })]
      })]
    });
  }], 0);
}