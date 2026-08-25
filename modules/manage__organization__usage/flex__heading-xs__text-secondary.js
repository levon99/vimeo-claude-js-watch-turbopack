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
    _v20 = _v0.i(0);
  let _v21 = ({
    areSomeAllocated: _v0
  }) => (0, _v1.jsx)(_v18.Thead, {
    height: (0, _v6.rem)(48),
    display: "flex",
    children: (0, _v1.jsxs)(_v19.Tr, {
      children: [(0, _v1.jsx)(_v17.Th, {
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v20.translate)({
            singular: "Name",
            dictionary: {
              es: {
                singular: "Nombre"
              },
              "fr-FR": {
                singular: "Nom"
              },
              "ja-JP": {
                singular: "名前"
              },
              "ko-KR": {
                singular: "이름"
              },
              "pt-BR": {
                singular: "Nome"
              },
              "zh-CN": {
                singular: "姓名"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v17.Th, {
        textAlign: "end",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v20.translate)({
            singular: "AI credits used",
            dictionary: {
              es: {
                singular: "Créditos de IA utilizados"
              },
              "de-DE": {
                singular: "Verwendete AI-Credits"
              },
              "fr-FR": {
                singular: "Crédits IA utilisés"
              },
              "ja-JP": {
                singular: "使用済みのAIクレジット"
              },
              "ko-KR": {
                singular: "사용된 AI 크레딧"
              },
              "pt-BR": {
                singular: "Créditos de IA utilizados"
              },
              "zh-CN": {
                singular: "已使用 AI 积分"
              }
            }
          })
        })
      }), _v0 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17.Th, {
          textAlign: "end",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            children: (0, _v20.translate)({
              singular: "AI credits allocated",
              dictionary: {
                es: {
                  singular: "Créditos de IA asignados"
                },
                "de-DE": {
                  singular: "AI-Credits zugewiesen"
                },
                "fr-FR": {
                  singular: "Crédits d'IA attribués"
                },
                "ja-JP": {
                  singular: "AIクレジットが割り当てられました"
                },
                "ko-KR": {
                  singular: "할당된 AI 크레딧"
                },
                "pt-BR": {
                  singular: "Créditos de IA alocados"
                },
                "zh-CN": {
                  singular: "已分配 AI 积分"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v17.Th, {
          textAlign: "end",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            color: "text-secondary",
            children: (0, _v20.translate)({
              singular: "Percentage used",
              dictionary: {
                es: {
                  singular: "Porcentaje utilizado"
                },
                "de-DE": {
                  singular: "Prozentsatz verwendet"
                },
                "fr-FR": {
                  singular: "Pourcentage utilisé"
                },
                "ja-JP": {
                  singular: "使用率"
                },
                "ko-KR": {
                  singular: "사용된 비율"
                },
                "pt-BR": {
                  singular: "Porcentagem utilizada"
                },
                "zh-CN": {
                  singular: "已使用百分比"
                }
              }
            })
          })
        })]
      })]
    })
  });
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = ({
      value: _v0
    }) => _v0 ? (0, _v1.jsx)(_v8.Text, {
      variant: "body-md",
      children: _v0
    }) : (0, _v1.jsx)(_v27.Skeleton, {
      borderRadius: "sm",
      height: "2rem",
      variant: "text"
    }),
    _v34 = ({
      workspace: _v0,
      areAllUnallocated: _v1,
      onEditAllocation: _v2
    }) => {
      let _v3 = void 0 !== _v0.limit && Number.isFinite(_v0.limit) ? _v0.limit : null,
        _v4 = null !== _v3 ? (0, _v20.translate)({
          singular: "Edit allocation",
          dictionary: {
            es: {
              singular: "Editar asignación"
            },
            "de-DE": {
              singular: "Zuteilung bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier l'allocation"
            },
            "ja-JP": {
              singular: "割り当てを編集"
            },
            "ko-KR": {
              singular: "할당 편집"
            },
            "pt-BR": {
              singular: "Editar alocação"
            },
            "zh-CN": {
              singular: "编辑分配"
            }
          }
        }) : (0, _v20.translate)({
          singular: "Set allocation",
          dictionary: {
            es: {
              singular: "Establecer asignación"
            },
            "de-DE": {
              singular: "Zuteilung festlegen"
            },
            "fr-FR": {
              singular: "Définir l'allocation"
            },
            "ja-JP": {
              singular: "割り当てを設定"
            },
            "ko-KR": {
              singular: "할당 설정"
            },
            "pt-BR": {
              singular: "Definir alocação"
            },
            "zh-CN": {
              singular: "设置分配"
            }
          }
        });
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v19.Tr, {
          children: (0, _v1.jsx)(_v28.Td, {
            paddingY: "0",
            children: (0, _v1.jsx)(_v23.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })
          })
        }), (0, _v1.jsxs)(_v19.Tr, {
          height: (0, _v6.rem)(64),
          children: [(0, _v1.jsx)(_v28.Td, {
            paddingY: "sm",
            children: (0, _v1.jsxs)(_v24.HStack, {
              children: [(0, _v1.jsx)(_v32.WorkspaceLogo, {
                borderRadius: "input-sm",
                boxSize: "sm",
                label: _v0.name || "",
                logoUrl: _v0.iconUrl
              }), (0, _v1.jsx)(_v33, {
                value: _v0.name
              })]
            })
          }), (0, _v1.jsx)(_v28.Td, {
            textAlign: "end",
            paddingY: "sm",
            children: (0, _v1.jsx)(_v33, {
              value: _v0.used?.toLocaleString()
            })
          }), !_v1 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v28.Td, {
              textAlign: "end",
              paddingY: "sm",
              children: (0, _v1.jsxs)(_v24.HStack, {
                justifyContent: "flex-end",
                gap: "xs",
                children: [null !== _v3 ? (0, _v1.jsx)(_v8.Text, {
                  variant: "body-md",
                  children: _v3.toLocaleString()
                }) : _v2 && (0, _v1.jsx)(_v8.Text, {
                  variant: "body-md",
                  color: "text-tertiary",
                  children: "—"
                }), _v2 && (0, _v1.jsx)(_v29.Tooltip, {
                  label: _v4,
                  placement: "top",
                  children: (0, _v1.jsx)(_v25.IconButton, {
                    size: "xs",
                    variant: "tertiary",
                    "aria-label": _v4,
                    icon: null !== _v3 ? (0, _v1.jsx)(_v30.EditPencil, {}) : (0, _v1.jsx)(_v31.PlusCircle, {}),
                    onClick: _v2
                  })
                })]
              })
            }), (0, _v1.jsx)(_v28.Td, {
              textAlign: "end",
              paddingY: "sm",
              children: null !== _v3 && (0, _v1.jsxs)(_v22.Center, {
                children: [(0, _v1.jsx)(_v26.Progress, {
                  value: _v0.used && _v3 > 0 ? _v0.used / _v3 * 100 : 0,
                  size: "sm",
                  sx: {
                    "& > div": {
                      backgroundColor: "text-primary"
                    }
                  }
                }), (0, _v1.jsx)(_v8.Text, {
                  marginLeft: "xl",
                  variant: "body-md",
                  children: _v0.used && _v3 > 0 ? `${(_v0.used / _v3 * 100).toFixed(2)}%` : "0%"
                })]
              })
            })]
          })]
        }, _v0.uri)]
      });
    };
  var _v35 = _v0.i(0),
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
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  async function _v53({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      workspaceUuid: _v3
    },
    ..._v4
  }) {
    return (0, _v51.measureLatency)("patchWorkspaceEnterpriseCreditsLimit", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/workspaces/${_v3}/enterprise_credits/limit?fields=${_v1.map(_v52.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v52.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v52.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v52.deepCamelCase)(_v1);
    });
  }
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  function _v56() {
    let {
        mutate: _v0
      } = (0, _v54.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v55.useGctlConfig)(),
      [_v5, _v6] = (0, _v50.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/workspaces/${_v0.where.workspaceUuid}/enterprise_credits/limit${(0, _v50.serializeQuery)(_v0)}`, _v53({
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
  "true" === _v49.default.env.STORYBOOK && (0, _v50.assignMswData)(_v56, {
    endpoint: "/workspaces/:workspaceUuid/enterprise_credits/limit",
    method: "PATCH"
  });
  var _v57 = _v0.i(0);
  let _v58 = "rgba(26, 54, 93, 0.12)",
    _v59 = "#17d5ff",
    _v60 = "#875be5",
    _v61 = ({
      color: _v0
    }) => (0, _v1.jsx)(_v3.Box, {
      width: "12px",
      height: "12px",
      borderRadius: "2px",
      backgroundColor: _v0,
      flex: "none"
    }),
    _v62 = ({
      isOpen: _v0,
      onClose: _v1,
      onSaved: _v2,
      organizationUuid: _v3,
      workspaceUuid: _v4,
      workspaceName: _v5,
      workspaceIconUrl: _v6,
      used: _v7,
      currentLimit: _v8,
      orgAvailable: _v9,
      allocatedElsewhere: _v10
    }) => {
      let _v11 = (0, _v48.useToast)(),
        _v12 = (0, _v57.usePico)(),
        [_v13, _v14] = _v56(),
        _v15 = _v14.loading,
        [_v16, _v17] = (0, _v2.useState)(null !== _v8 ? _v8.toLocaleString() : ""),
        _v18 = Math.max(0, _v9 - _v10),
        _v19 = (_v0 => {
          let _v1 = _v0.replace(/[,\s]/g, "");
          if ("" === _v1) return null;
          let _v2 = Number(_v1);
          return Number.isFinite(_v2) ? Math.floor(_v2) : NaN;
        })(_v16),
        _v20 = (0, _v2.useMemo)(() => null === _v19 ? null : Number.isNaN(_v19) || _v19 < 0 ? (0, _v20.translate)({
          singular: "Enter a whole number of credits.",
          dictionary: {
            es: {
              singular: "Introduzca un número entero de créditos."
            },
            "de-DE": {
              singular: "Geben Sie eine ganze Zahl an Credits ein."
            },
            "fr-FR": {
              singular: "Saisissez un nombre entier de crédits."
            },
            "ja-JP": {
              singular: "クレジットは整数で入力してください。"
            },
            "ko-KR": {
              singular: "정수로 된 크레딧을 입력하세요."
            },
            "pt-BR": {
              singular: "Insira um número inteiro de créditos."
            },
            "zh-CN": {
              singular: "请输入整数个积分。"
            }
          }
        }) : _v19 < _v7 ? (0, _v20.translate)({
          singular: "The limit can't be lower than the workspace's current usage ({USED}).",
          replacements: {
            USED: _v7.toLocaleString()
          },
          dictionary: {
            es: {
              singular: "El límite no puede ser inferior al uso actual del espacio de trabajo ({USED})."
            },
            "de-DE": {
              singular: "Das Limit darf nicht niedriger als die aktuelle Nutzung des Arbeitsbereichs ({USED}) sein."
            },
            "fr-FR": {
              singular: "La limite ne peut pas être inférieure à l'utilisation actuelle de l'espace de travail ({USED})."
            },
            "ja-JP": {
              singular: "制限はワークスペースの現在の使用量（{USED}）より低くできません。"
            },
            "ko-KR": {
              singular: "한도는 워크스페이스의 현재 사용량({USED})보다 낮을 수 없습니다."
            },
            "pt-BR": {
              singular: "O limite não pode ser inferior ao uso atual do workspace ({USED})."
            },
            "zh-CN": {
              singular: "该限制不能低于工作区当前的使用量（{USED}）。"
            }
          }
        }) : _v19 > _v18 ? (0, _v20.translate)({
          singular: "The allocation exceeds the credits available to allocate ({AVAILABLE}).",
          replacements: {
            AVAILABLE: _v18.toLocaleString()
          },
          dictionary: {
            es: {
              singular: "La asignación excede los créditos disponibles para asignar ({AVAILABLE})."
            },
            "de-DE": {
              singular: "Die Zuteilung überschreitet die zum Zuteilen verfügbaren Credits ({AVAILABLE})."
            },
            "fr-FR": {
              singular: "L'allocation dépasse les crédits disponibles à allouer ({AVAILABLE})."
            },
            "ja-JP": {
              singular: "割り当てが可能なクレジット（{AVAILABLE}）を超えています。"
            },
            "ko-KR": {
              singular: "할당량이 할당 가능한 크레딧({AVAILABLE})을 초과합니다."
            },
            "pt-BR": {
              singular: "A alocação excede os créditos disponíveis para alocar ({AVAILABLE})."
            },
            "zh-CN": {
              singular: "分配超过可用于分配的积分（{AVAILABLE}）。"
            }
          }
        }) : null, [_v19, _v7, _v18]),
        _v21 = (0, _v2.useRef)(!1),
        _v22 = (0, _v2.useRef)(null);
      (0, _v2.useEffect)(() => {
        if (!_v21.current || _v14.loading) return;
        _v21.current = !1;
        let _v0 = _v22.current;
        (_v22.current = null, _v14.error) ? _v11({
          title: (0, _v20.translate)({
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
          variant: "warning"
        }) : (null !== _v0 && _v12?.track("vimeo_organization_set_workspace_ai_credit_limit", {
          org_id: _v3,
          workspace_id: _v4,
          new_limit: _v0,
          ...(null !== _v8 ? {
            old_limit: _v8
          } : {})
        }), _v11({
          title: (0, _v20.translate)({
            singular: "Allocation updated",
            dictionary: {
              es: {
                singular: "Asignación actualizada"
              },
              "de-DE": {
                singular: "Zuteilung aktualisiert"
              },
              "fr-FR": {
                singular: "Allocation mise à jour"
              },
              "ja-JP": {
                singular: "割り当てを更新しました"
              },
              "ko-KR": {
                singular: "할당이 업데이트되었습니다"
              },
              "pt-BR": {
                singular: "Alocação atualizada"
              },
              "zh-CN": {
                singular: "分配已更新"
              }
            }
          }),
          variant: "success"
        }), _v2(), _v1());
      }, [_v8, _v3, _v2, _v1, _v14.error, _v14.loading, _v12, _v11, _v4]);
      let _v23 = _v0 => {
        _v21.current = !0, _v22.current = _v0, _v13({
          where: {
            workspaceUuid: _v4
          },
          select: ["uri"],
          variables: {
            limit: _v0
          }
        });
      };
      return (0, _v1.jsxs)(_v36.Modal, {
        isOpen: _v0,
        size: "lg",
        onClose: _v1,
        children: [(0, _v1.jsx)(_v41.ModalOverlay, {}), (0, _v1.jsxs)(_v38.ModalContent, {
          children: [(0, _v1.jsx)(_v40.ModalHeader, {
            children: (0, _v1.jsx)(_v35.Header, {
              size: "md",
              children: (0, _v20.translate)({
                singular: "Edit AI credit allocation",
                dictionary: {
                  es: {
                    singular: "Editar asignación de créditos AI"
                  },
                  "de-DE": {
                    singular: "Zuteilung der KI-Credits bearbeiten"
                  },
                  "fr-FR": {
                    singular: "Modifier l'allocation de crédits IA"
                  },
                  "ja-JP": {
                    singular: "AIクレジットの割り当てを編集"
                  },
                  "ko-KR": {
                    singular: "AI 크레딧 할당 편집"
                  },
                  "pt-BR": {
                    singular: "Editar alocação de créditos de IA"
                  },
                  "zh-CN": {
                    singular: "编辑 AI 积分分配"
                  }
                }
              })
            })
          }), (0, _v1.jsx)(_v37.ModalBody, {
            paddingBottom: 16,
            children: (0, _v1.jsxs)(_v9.VStack, {
              align: "stretch",
              spacing: "lg",
              children: [(0, _v1.jsxs)(_v5.Flex, {
                alignItems: "center",
                gap: "sm",
                children: [(0, _v1.jsx)(_v32.WorkspaceLogo, {
                  borderRadius: "input-sm",
                  boxSize: "sm",
                  label: _v5,
                  logoUrl: _v6
                }), (0, _v1.jsx)(_v8.Text, {
                  variant: "heading-xs",
                  children: _v5
                })]
              }), (0, _v1.jsxs)(_v9.VStack, {
                align: "stretch",
                spacing: "xs",
                children: [(0, _v1.jsx)(_v8.Text, {
                  variant: "heading-xs",
                  children: (0, _v20.translate)({
                    singular: "Allocation",
                    dictionary: {
                      es: {
                        singular: "Asignación"
                      },
                      "de-DE": {
                        singular: "Zuteilung"
                      },
                      "ja-JP": {
                        singular: "割り当て"
                      },
                      "ko-KR": {
                        singular: "할당"
                      },
                      "pt-BR": {
                        singular: "Alocação"
                      },
                      "zh-CN": {
                        singular: "分配"
                      }
                    }
                  })
                }), (0, _v1.jsx)("input", {
                  "data-testid": "allocation-input",
                  type: "text",
                  inputMode: "numeric",
                  value: _v16,
                  onChange: _v0 => _v17(_v0.target.value),
                  style: {
                    height: "40px",
                    borderRadius: "12px",
                    border: `1px solid ${_v20 ? "#e5484d" : "rgba(26,54,93,0.16)"}`,
                    padding: "0 16px",
                    fontSize: "14px",
                    width: "100%"
                  }
                }), (0, _v1.jsx)(_v8.Text, {
                  variant: "body-sm",
                  color: _v20 ? "status-destructive-primary" : "text-tertiary",
                  children: _v20 ?? (0, _v20.translate)({
                    singular: "Must cover the workspace's current usage ({USED}). Leave empty for no allocation.",
                    replacements: {
                      USED: _v7.toLocaleString()
                    },
                    dictionary: {
                      es: {
                        singular: "Debe cubrir el uso actual del espacio de trabajo ({USED}). Dejar vacío para no asignar."
                      },
                      "de-DE": {
                        singular: "Muss die aktuelle Nutzung des Arbeitsbereichs ({USED}) abdecken. Leer lassen für keine Zuteilung."
                      },
                      "fr-FR": {
                        singular: "Doit couvrir l'utilisation actuelle de l'espace de travail ({USED}). Laissez vide pour ne pas définir d'allocation."
                      },
                      "ja-JP": {
                        singular: "ワークスペースの現在の使用量（{USED}）をカバーする必要があります。割り当てを行わない場合は空のままにしてください。"
                      },
                      "ko-KR": {
                        singular: "워크스페이스의 현재 사용량({USED})을 충당해야 합니다. 할당하지 않으려면 비워 두세요."
                      },
                      "pt-BR": {
                        singular: "Deve cobrir o uso atual do workspace ({USED}). Deixe em branco para não alocar."
                      },
                      "zh-CN": {
                        singular: "必须覆盖工作区当前的使用量（{USED}）。留空表示不进行分配。"
                      }
                    }
                  })
                })]
              }), (0, _v1.jsx)(_v3.Box, {
                backgroundColor: "fill-component",
                borderRadius: "md",
                padding: "md",
                children: (0, _v1.jsxs)(_v9.VStack, {
                  align: "stretch",
                  spacing: "md",
                  children: [(0, _v1.jsxs)(_v5.Flex, {
                    height: "20px",
                    width: "100%",
                    gap: "2px",
                    borderRadius: "999px",
                    overflow: "hidden",
                    backgroundColor: _v58,
                    children: [_v9 > 0 && _v10 > 0 && (0, _v1.jsx)(_v3.Box, {
                      height: "100%",
                      backgroundColor: _v59,
                      width: `${Math.min(100, _v10 / _v9 * 100)}%`
                    }), _v9 > 0 && _v18 > 0 && (0, _v1.jsx)(_v3.Box, {
                      height: "100%",
                      backgroundColor: _v60,
                      width: `${Math.min(100, _v18 / _v9 * 100)}%`
                    })]
                  }), (0, _v1.jsxs)(_v9.VStack, {
                    align: "stretch",
                    spacing: "xs",
                    children: [(0, _v1.jsxs)(_v5.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [(0, _v1.jsxs)(_v24.HStack, {
                        gap: "xs",
                        children: [(0, _v1.jsx)(_v61, {
                          color: _v58
                        }), (0, _v1.jsx)(_v8.Text, {
                          variant: "body-md",
                          color: "text-secondary",
                          children: (0, _v20.translate)({
                            singular: "Organization credits",
                            dictionary: {
                              es: {
                                singular: "Créditos de la organización"
                              },
                              "de-DE": {
                                singular: "Guthaben der Organisation"
                              },
                              "fr-FR": {
                                singular: "Crédits de l'organisation"
                              },
                              "ja-JP": {
                                singular: "組織のクレジット"
                              },
                              "ko-KR": {
                                singular: "조직 크레딧"
                              },
                              "pt-BR": {
                                singular: "Créditos da organização"
                              },
                              "zh-CN": {
                                singular: "组织积分"
                              }
                            }
                          })
                        })]
                      }), (0, _v1.jsx)(_v8.Text, {
                        variant: "body-sm",
                        children: _v9.toLocaleString()
                      })]
                    }), (0, _v1.jsxs)(_v5.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [(0, _v1.jsxs)(_v24.HStack, {
                        gap: "xs",
                        children: [(0, _v1.jsx)(_v61, {
                          color: _v59
                        }), (0, _v1.jsx)(_v8.Text, {
                          variant: "body-md",
                          color: "text-secondary",
                          children: (0, _v20.translate)({
                            singular: "Allocated to other workspaces",
                            dictionary: {
                              es: {
                                singular: "Asignado a otros espacios de trabajo"
                              },
                              "de-DE": {
                                singular: "Anderen Arbeitsbereichen zugewiesen"
                              },
                              "fr-FR": {
                                singular: "Attribué à d'autres espaces de travail"
                              },
                              "ja-JP": {
                                singular: "他のワークスペースに割り当て済み"
                              },
                              "ko-KR": {
                                singular: "다른 워크스페이스에 할당됨"
                              },
                              "pt-BR": {
                                singular: "Alocado para outros workspaces"
                              },
                              "zh-CN": {
                                singular: "分配给其他工作区"
                              }
                            }
                          })
                        })]
                      }), (0, _v1.jsx)(_v8.Text, {
                        variant: "body-sm",
                        children: _v10.toLocaleString()
                      })]
                    }), (0, _v1.jsxs)(_v5.Flex, {
                      justifyContent: "space-between",
                      alignItems: "center",
                      children: [(0, _v1.jsxs)(_v24.HStack, {
                        gap: "xs",
                        children: [(0, _v1.jsx)(_v61, {
                          color: _v60
                        }), (0, _v1.jsx)(_v8.Text, {
                          variant: "body-md",
                          color: "text-secondary",
                          children: (0, _v20.translate)({
                            singular: "Available for this allocation",
                            dictionary: {
                              es: {
                                singular: "Disponible para esta asignación"
                              },
                              "de-DE": {
                                singular: "Für diese Zuteilung verfügbar"
                              },
                              "fr-FR": {
                                singular: "Disponible pour cette allocation"
                              },
                              "ja-JP": {
                                singular: "この割り当てで利用可能"
                              },
                              "ko-KR": {
                                singular: "이 할당에 사용 가능"
                              },
                              "pt-BR": {
                                singular: "Disponível para esta alocação"
                              },
                              "zh-CN": {
                                singular: "可用于此分配"
                              }
                            }
                          })
                        })]
                      }), (0, _v1.jsx)(_v8.Text, {
                        variant: "body-sm",
                        children: _v18.toLocaleString()
                      })]
                    })]
                  })]
                })
              })]
            })
          }), (0, _v1.jsxs)(_v39.ModalFooter, {
            borderTop: 0,
            children: [null !== _v8 && (0, _v1.jsx)(_v3.Box, {
              marginRight: "auto",
              children: (0, _v1.jsxs)(_v42.Popover, {
                placement: "top-start",
                children: [(0, _v1.jsx)(_v47.PopoverTrigger, {
                  children: (0, _v1.jsx)(_v4.Button, {
                    isDisabled: _v15,
                    variant: "tertiary",
                    children: (0, _v20.translate)({
                      singular: "Remove allocation",
                      dictionary: {
                        es: {
                          singular: "Eliminar asignación"
                        },
                        "de-DE": {
                          singular: "Zuteilung entfernen"
                        },
                        "fr-FR": {
                          singular: "Supprimer l'allocation"
                        },
                        "ja-JP": {
                          singular: "割り当てを削除"
                        },
                        "ko-KR": {
                          singular: "할당 제거"
                        },
                        "pt-BR": {
                          singular: "Remover alocação"
                        },
                        "zh-CN": {
                          singular: "移除分配"
                        }
                      }
                    })
                  })
                }), (0, _v1.jsxs)(_v45.PopoverContent, {
                  width: "320px",
                  children: [(0, _v1.jsx)(_v43.PopoverArrow, {}), (0, _v1.jsx)(_v44.PopoverBody, {
                    children: (0, _v1.jsx)(_v8.Text, {
                      variant: "body-md",
                      children: (0, _v20.translate)({
                        singular: "Remove allocation? This workspace will draw from the organization's shared credits.",
                        dictionary: {
                          es: {
                            singular: "¿Eliminar asignación? Este espacio de trabajo usará los créditos compartidos de la organización."
                          },
                          "de-DE": {
                            singular: "Zuteilung entfernen? Dieser Arbeitsbereich greift dann auf das gemeinsame Guthaben der Organisation zu."
                          },
                          "fr-FR": {
                            singular: "Supprimer l'allocation ? Cet espace de travail utilisera les crédits partagés de l'organisation."
                          },
                          "ja-JP": {
                            singular: "割り当てを削除しますか？このワークスペースは組織の共有クレジットを使用します。"
                          },
                          "ko-KR": {
                            singular: "할당을 제거하시겠습니까? 이 워크스페이스는 조직의 공유 크레딧을 사용하게 됩니다."
                          },
                          "pt-BR": {
                            singular: "Remover alocação? Este workspace irá utilizar os créditos compartilhados da organização."
                          },
                          "zh-CN": {
                            singular: "移除分配吗？此工作区将使用组织的共享积分。"
                          }
                        }
                      })
                    })
                  }), (0, _v1.jsx)(_v46.PopoverFooter, {
                    borderTop: 0,
                    children: (0, _v1.jsx)(_v5.Flex, {
                      justifyContent: "flex-end",
                      gap: "sm",
                      width: "100%",
                      children: (0, _v1.jsx)(_v4.Button, {
                        variant: "destructive",
                        isLoading: _v15,
                        onClick: () => _v23(null),
                        children: (0, _v20.translate)({
                          singular: "Remove",
                          dictionary: {
                            es: {
                              singular: "Eliminar"
                            },
                            "de-DE": {
                              singular: "Entfernen"
                            },
                            "fr-FR": {
                              singular: "Supprimer"
                            },
                            "ja-JP": {
                              singular: "削除"
                            },
                            "ko-KR": {
                              singular: "제거"
                            },
                            "pt-BR": {
                              singular: "Remover"
                            },
                            "zh-CN": {
                              singular: "移除"
                            }
                          }
                        })
                      })
                    })
                  })]
                })]
              })
            }), (0, _v1.jsx)(_v4.Button, {
              isDisabled: _v15,
              variant: "secondary",
              minW: 100,
              onClick: _v1,
              children: (0, _v20.translate)({
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
            }), (0, _v1.jsx)(_v4.Button, {
              isLoading: _v15,
              isDisabled: _v15 || null !== _v20,
              variant: "primary",
              minW: 100,
              onClick: () => _v23(_v19),
              children: (0, _v20.translate)({
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
      });
    },
    _v63 = _v0 => {
      if (!_v0) return null;
      let _v1 = _v0.split("/").pop();
      return _v1 && "" !== _v1 ? _v1 : null;
    },
    _v64 = ({
      workspacesList: _v0,
      editing: _v1
    }) => {
      let _v2 = _v0.some(_v0 => Number.isFinite(_v0.limit)),
        _v3 = _v0.every(_v0 => !Number.isFinite(_v0.limit)),
        [_v4, _v5] = (0, _v2.useState)(null),
        _v6 = _v63(_v4?.uri),
        _v7 = _v4 && Number.isFinite(_v4.limit) ? _v4.limit ?? 0 : 0;
      return (0, _v1.jsxs)(_v9.VStack, {
        width: "100%",
        "data-testid": "ai-credits-workspace-list",
        children: [(0, _v1.jsxs)(_v15.Table, {
          variant: "unstyled",
          backgroundColor: "fill-surface",
          borderRadius: "md",
          padding: "md",
          sx: {
            "& th": {
              fontVariantNumeric: "normal"
            }
          },
          children: [(0, _v1.jsx)(_v21, {
            areSomeAllocated: _v2 || !!_v1
          }), (0, _v1.jsx)(_v16.Tbody, {
            children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v34, {
              workspace: _v0,
              areAllUnallocated: _v3 && !_v1,
              onEditAllocation: _v1 && _v63(_v0.uri) ? () => _v5(_v0) : void 0
            }, `${_v0.uri}-${_v1}`))
          })]
        }), _v1 && _v4 && _v6 && (0, _v1.jsx)(_v62, {
          isOpen: !0,
          onClose: () => _v5(null),
          onSaved: _v1.onAllocationSaved,
          organizationUuid: _v1.organizationUuid,
          workspaceUuid: _v6,
          workspaceName: _v4.name ?? "",
          workspaceIconUrl: _v4.iconUrl,
          used: _v4.used ?? 0,
          currentLimit: Number.isFinite(_v4.limit) ? _v4.limit ?? null : null,
          orgAvailable: _v1.orgAvailableCredits,
          allocatedElsewhere: Math.max(0, _v1.orgAllocatedCredits - _v7)
        })]
      });
    };
  var _v65 = _v0.i(0);
  let _v66 = () => (0, _v1.jsx)(_v18.Thead, {
    height: (0, _v6.rem)(48),
    display: "flex",
    children: (0, _v1.jsxs)(_v19.Tr, {
      children: [(0, _v1.jsx)(_v17.Th, {
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v20.translate)({
            singular: "Name",
            dictionary: {
              es: {
                singular: "Nombre"
              },
              "fr-FR": {
                singular: "Nom"
              },
              "ja-JP": {
                singular: "名前"
              },
              "ko-KR": {
                singular: "이름"
              },
              "pt-BR": {
                singular: "Nome"
              },
              "zh-CN": {
                singular: "姓名"
              }
            }
          })
        })
      }), (0, _v1.jsx)(_v17.Th, {
        textAlign: "end",
        children: (0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          color: "text-secondary",
          children: (0, _v20.translate)({
            singular: "Storage used",
            dictionary: {
              es: {
                singular: "Almacenamiento utilizado"
              },
              "de-DE": {
                singular: "Verwendeter Speicherplatz"
              },
              "fr-FR": {
                singular: "Stockage utilisé"
              },
              "ja-JP": {
                singular: "使用済みストレージ"
              },
              "ko-KR": {
                singular: "사용된 저장 공간"
              },
              "pt-BR": {
                singular: "Armazenamento usado"
              },
              "zh-CN": {
                singular: "已用存储空间"
              }
            }
          })
        })
      })]
    })
  });
  var _v67 = _v0.i(0);
  let _v68 = ({
      value: _v0
    }) => void 0 !== _v0 ? (0, _v1.jsx)(_v8.Text, {
      variant: "body-md",
      children: _v0.toLocaleString()
    }) : (0, _v1.jsx)(_v27.Skeleton, {
      borderRadius: "sm",
      height: "2rem",
      variant: "text"
    }),
    _v69 = ({
      workspace: _v0
    }) => {
      let _v1 = void 0 !== _v0.used && Number.isFinite(_v0?.used) ? (0, _v67.bytesToSize)(_v0.used, 1) : void 0;
      return (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v19.Tr, {
          children: (0, _v1.jsx)(_v28.Td, {
            paddingY: "0",
            children: (0, _v1.jsx)(_v23.Divider, {
              orientation: "horizontal",
              borderColor: "stroke"
            })
          })
        }), (0, _v1.jsxs)(_v19.Tr, {
          height: (0, _v6.rem)(64),
          children: [(0, _v1.jsx)(_v28.Td, {
            paddingY: "sm",
            children: (0, _v1.jsxs)(_v24.HStack, {
              children: [(0, _v1.jsx)(_v32.WorkspaceLogo, {
                borderRadius: "input-sm",
                boxSize: "sm",
                label: _v0.name || "",
                logoUrl: _v0.iconUrl
              }), (0, _v1.jsx)(_v68, {
                value: _v0.name
              })]
            })
          }), (0, _v1.jsx)(_v28.Td, {
            textAlign: "end",
            paddingY: "sm",
            children: (0, _v1.jsx)(_v68, {
              value: _v1
            })
          })]
        }, _v0.uri)]
      });
    },
    _v70 = ({
      workspacesList: _v0
    }) => (0, _v1.jsx)(_v9.VStack, {
      width: "100%",
      "data-testid": "storage-workspace-list",
      children: (0, _v1.jsxs)(_v15.Table, {
        variant: "unstyled",
        backgroundColor: "fill-surface",
        borderRadius: "md",
        padding: "sm",
        sx: {
          "& th": {
            fontVariantNumeric: "normal"
          }
        },
        children: [(0, _v1.jsx)(_v66, {}), (0, _v1.jsx)(_v16.Tbody, {
          children: _v0.map((_v0, _v1) => (0, _v1.jsx)(_v69, {
            workspace: _v0
          }, `${_v0.uri}-${_v1}`))
        })]
      })
    });
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  let _v73 = () => {
    let _v0 = (0, _v20.translate)({
      singular: "Usage limits for your organization. To increase your limits, please reach out to your Account Manager or {CONTACT_US}contact us{/CONTACT_US}.",
      replacements: {
        CONTACT_US: _v0 => (0, _v1.jsx)(_v72.Link, {
          href: "https://vimeo.com/enterprise/contact-us",
          variant: "brand",
          letterSpacing: "body-md",
          lineHeight: "body-md",
          fontSize: "body-md",
          target: "_blank",
          children: _v0
        }, "contact-support")
      },
      dictionary: {
        es: {
          singular: "Límites de uso para su organización. Para aumentar sus límites, comuníquese con su gerente de la cuenta o {CONTACT_US}contáctenos{/CONTACT_US}."
        },
        "de-DE": {
          singular: "Nutzungsbeschränkungen für Ihre Organisation. Um Ihre Limits zu erhöhen, wenden Sie sich bitte an Ihre Kundenbetreuende oder {CONTACT_US}kontaktieren Sie uns{/CONTACT_US}."
        },
        "fr-FR": {
          singular: "Limites d'utilisation pour votre organisation. Pour augmenter vos limites, veuillez contacter votre responsable de compte ou {CONTACT_US}nous contacter{/CONTACT_US}."
        },
        "ja-JP": {
          singular: "組織の使用制限。制限を引き上げるには、アカウントマネージャーに連絡するか、 {CONTACT_US}こちらにお問い合わせ{/CONTACT_US}ください。"
        },
        "ko-KR": {
          singular: "조직의 사용 한도. 한도를 늘리려면 계정 관리자에게 문의하거나 {CONTACT_US}문의하기{/CONTACT_US}를 클릭하세요."
        },
        "pt-BR": {
          singular: "Limites de uso da sua organização. Para aumentar seus limites, entre em contato com o gerente da conta ou {CONTACT_US}fale conosco{/CONTACT_US}."
        },
        "zh-CN": {
          singular: "您所在组织的使用限制。要提高您的限额，请联系您的客户经理或{CONTACT_US}联系我们{/CONTACT_US}。"
        }
      }
    });
    return (0, _v1.jsx)(_v1.Fragment, {
      children: (0, _v1.jsx)(_v8.Text, {
        variant: "body-md",
        size: "2",
        alignSelf: "start",
        children: _v0
      })
    });
  };
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  let _v77 = ({
    organizationUuid: _v0
  }) => {
    let [_v1, _v2] = (0, _v2.useState)(_v71.USAGE_PAGES.AI_CREDITS),
      {
        areMoreWorkspaceResultsAvailable: _v3,
        billingStartDate: _v4,
        billingEndDate: _v5,
        loadNextWorkspaceResults: _v6,
        refetchWorkspaces: _v7,
        totalWorkspaceResults: _v8,
        areWorkspacesLoading: _v9,
        workspacesList: _v10,
        totalOrganizationUsage: _v11,
        isOrganizationLowOnCredits: _v12,
        isOrganizationAtCreditLimit: _v13
      } = (0, _v75.useOrganizationUsage)({
        organizationUuid: _v0
      }),
      _v14 = _v1 === _v71.USAGE_PAGES.AI_CREDITS,
      _v15 = _v1 === _v71.USAGE_PAGES.STORAGE,
      _v16 = _v8 > 0,
      {
        settings: _v17
      } = (0, _v12.useOrionSettings)(),
      _v18 = _v17.show_ai_credits_revamp,
      _v19 = _v14 && _v18 && !_v9 && !_v16,
      _v20 = _v14 && (!_v18 || _v9 || _v16),
      _v21 = _v18 ? _v11[_v71.USAGE_PAGES.AI_CREDITS]?.breakdown : void 0,
      _v22 = (0, _v11.translate)({
        singular: "Billing cycle:",
        dictionary: {
          es: {
            singular: "Ciclo de facturación:"
          },
          "de-DE": {
            singular: "Abrechnungszeitraum:"
          },
          "fr-FR": {
            singular: "Cycle de facturation :"
          },
          "ja-JP": {
            singular: "請求期間:"
          },
          "ko-KR": {
            singular: "청구 주기:"
          },
          "pt-BR": {
            singular: "Ciclo de faturamento:"
          },
          "zh-CN": {
            singular: "计费周期:"
          }
        }
      }),
      _v23 = (0, _v11.translate)({
        singular: "{FROM} - {TO}",
        replacements: {
          FROM: _v4,
          TO: _v5
        }
      }),
      _v24 = (0, _v11.translate)({
        singular: "Showing {COUNT} of {TOTAL}",
        replacements: {
          COUNT: _v10[_v1]?.length ?? 0,
          TOTAL: _v8
        },
        dictionary: {
          es: {
            singular: "Mostrando {COUNT} de {TOTAL}"
          },
          "de-DE": {
            singular: "Zeigt {COUNT} von {TOTAL}"
          },
          "fr-FR": {
            singular: "Affichage de {COUNT} sur {TOTAL}"
          },
          "ja-JP": {
            singular: "全{TOTAL}件中{COUNT}件を表示中"
          },
          "ko-KR": {
            singular: "{COUNT}/{TOTAL}개 표시"
          },
          "pt-BR": {
            singular: "Mostrando {COUNT} de {TOTAL}"
          },
          "zh-CN": {
            singular: "正在显示 {COUNT} 个，共 {TOTAL} 个"
          }
        }
      });
    return (0, _v1.jsxs)(_v9.VStack, {
      paddingTop: "lg",
      paddingX: "lg",
      children: [(0, _v1.jsx)(_v8.Text, {
        variant: "heading-lg",
        fontWeight: "medium",
        alignSelf: "flex-start",
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
              singular: "사용 내역"
            },
            "pt-BR": {
              singular: "Uso"
            },
            "zh-CN": {
              singular: "使用方法"
            }
          }
        })
      }), (0, _v1.jsx)(_v73, {}), (0, _v1.jsxs)(_v5.Flex, {
        alignSelf: "flex-start",
        alignItems: "center",
        gap: "sm",
        marginBottom: "md",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-xs",
          children: _v22
        }), (0, _v1.jsx)(_v3.Box, {
          backgroundColor: "vimeoNavy.50",
          borderRadius: "md",
          paddingX: "md",
          children: (0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: _v23
          })
        })]
      }), (0, _v1.jsxs)(_v5.Flex, {
        "data-testid": "organization-usage-container",
        width: "100%",
        gap: "lg",
        flexDirection: {
          base: "column",
          md: "row"
        },
        marginBottom: "md",
        alignItems: "stretch",
        children: [(0, _v1.jsx)(_v14.AiCreditsTotalCount, {
          currentCount: _v11[_v71.USAGE_PAGES.AI_CREDITS]?.currentCount,
          resetDate: _v11[_v71.USAGE_PAGES.AI_CREDITS]?.resetDate,
          totalCount: _v11[_v71.USAGE_PAGES.AI_CREDITS]?.totalCount,
          breakdown: _v21,
          banner: _v18 ? _v13 ? "error" : _v12 ? "warning" : void 0 : void 0
        }), (0, _v1.jsx)(_v65.StorageTotalCount, {
          currentCount: _v11[_v71.USAGE_PAGES.STORAGE]?.currentCount,
          totalCount: _v11[_v71.USAGE_PAGES.STORAGE]?.totalCount
        })]
      }), (0, _v1.jsxs)(_v5.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        marginBottom: "md",
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "heading-md",
          children: "Workspaces"
        }), (0, _v1.jsxs)(_v5.Flex, {
          alignItems: "center",
          gap: "sm",
          children: [(0, _v1.jsx)(_v8.Text, {
            variant: "heading-xs",
            children: "Usage type"
          }), (0, _v1.jsx)(_v3.Box, {
            width: (0, _v6.rem)(130),
            children: (0, _v1.jsx)(_v7.Select, {
              items: [{
                label: (0, _v11.translate)({
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
                value: _v71.USAGE_PAGES.AI_CREDITS
              }, {
                label: (0, _v11.translate)({
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
                value: _v71.USAGE_PAGES.STORAGE
              }],
              placeholder: (0, _v11.translate)({
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
              defaultValue: [_v71.USAGE_PAGES.AI_CREDITS],
              onValueChange: _v0 => _v2(_v0.value[0]),
              size: "sm",
              withPortal: !0,
              variant: "withCheck"
            })
          })]
        })]
      }), _v19 && (0, _v1.jsx)(_v13.AiCreditsConsumptionList, {
        organizationUuid: _v0
      }), _v20 && (0, _v1.jsx)(_v64, {
        workspacesList: _v10[_v71.USAGE_PAGES.AI_CREDITS],
        editing: _v18 && _v16 ? {
          organizationUuid: _v0,
          orgAvailableCredits: _v11[_v71.USAGE_PAGES.AI_CREDITS]?.totalCount ?? 0,
          orgAllocatedCredits: _v11[_v71.USAGE_PAGES.AI_CREDITS]?.allocated ?? 0,
          onAllocationSaved: _v7
        } : void 0
      }), _v15 && (0, _v1.jsx)(_v70, {
        workspacesList: _v10[_v71.USAGE_PAGES.STORAGE]
      }), !_v19 && (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v8.Text, {
          variant: "body-md",
          marginBottom: "md",
          color: "text-tertiary",
          marginTop: "md",
          children: _v24
        }), _v3 && (0, _v1.jsx)(_v4.Button, {
          variant: "tertiary",
          onClick: _v6,
          children: (0, _v11.translate)({
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
      })]
    });
  };
  (0, _v10.withPageSetup)(_v76.getOrgUuidServerSideProps, {
    requireLogin: !0,
    inlineViewer: !0,
    noIndex: !0
  }), _v77.getLayout = (_v0, _v1) => (0, _v74.getLayout)(_v0, _v1), _v0.s(["__N_SSP", 0, !0, "default", 0, _v77], 0);
}