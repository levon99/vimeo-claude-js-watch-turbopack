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
  let _v18 = _v0 => (0, _v1.jsx)(_v17.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M8 12a4 4 0 1 0 8 0 4 4 0 0 0-8 0Zm4-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z",
        fill: "currentColor"
      })
    }),
    _v19 = _v0 => (0, _v1.jsx)(_v17.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("rect", {
        x: "6",
        y: "6",
        width: "12",
        height: "12",
        rx: "6",
        fill: "currentColor"
      })
    });
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    variables: _v1,
    where: {
      videoId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v23.measureLatency)("patchVideoClipReviewStatus", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/videos/${_v2}/clip_review_status?${(0, _v24.searchQueryString)(_v3)}`, {
        ..._v4,
        method: "PATCH",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = "in_progress",
    _v29 = "needs_review",
    _v30 = "approved";
  var _v31 = _v0.i(0);
  let _v32 = new Map([[_v28, (0, _v20.translate)({
      singular: "In progress",
      dictionary: {
        es: {
          singular: "En curso"
        },
        "de-DE": {
          singular: "In Bearbeitung"
        },
        "fr-FR": {
          singular: "En cours"
        },
        "ja-JP": {
          singular: "処理中"
        },
        "ko-KR": {
          singular: "진행 중"
        },
        "pt-BR": {
          singular: "Em andamento"
        },
        "zh-CN": {
          singular: "进行中"
        }
      }
    })], [_v29, (0, _v20.translate)({
      singular: "Needs review",
      dictionary: {
        es: {
          singular: "Necesita revisión"
        },
        "de-DE": {
          singular: "Muss überprüft werden."
        },
        "fr-FR": {
          singular: "Révision requise"
        },
        "ja-JP": {
          singular: "要レビュー"
        },
        "ko-KR": {
          singular: "검토 필요"
        },
        "pt-BR": {
          singular: "Precisa de revisão"
        },
        "zh-CN": {
          singular: "需要审核"
        }
      }
    })], [_v30, (0, _v20.translate)({
      singular: "Approved",
      dictionary: {
        es: {
          singular: "Aprobado"
        },
        "de-DE": {
          singular: "Genehmigt"
        },
        "fr-FR": {
          singular: "Validé"
        },
        "ja-JP": {
          singular: "承認済み"
        },
        "ko-KR": {
          singular: "승인됨"
        },
        "pt-BR": {
          singular: "Aprovado"
        },
        "zh-CN": {
          singular: "已批准"
        }
      }
    })]]),
    _v33 = new Map([[_v28, "blue.400"], [_v29, "yellow.400"], [_v30, "green.400"], [null, "text-secondary"]]),
    _v34 = new Map([[null, (0, _v20.translate)({
      singular: "Add status",
      dictionary: {
        es: {
          singular: "Agregar estado"
        },
        "de-DE": {
          singular: "Status hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter un statut"
        },
        "ja-JP": {
          singular: "ステータスを追加"
        },
        "ko-KR": {
          singular: "상태 추가"
        },
        "pt-BR": {
          singular: "Adicionar status"
        },
        "zh-CN": {
          singular: "添加状态"
        }
      }
    })], ..._v32]);
  _v0.s(["ReviewStatusMenu", 0, ({
    clipId: _v0,
    defaultStatus: _v1,
    isReadOnly: _v2,
    analyticsProps: _v3,
    reviewId: _v4
  }) => {
    let _v5 = (0, _v13.useToast)(),
      _v6 = (0, _v22.useViewer)(),
      [_v7, _v8] = (0, _v2.useState)(_v1),
      {
        trackVideoManageStatusChanged: _v9
      } = (0, _v21.useVideoManageTracking)(),
      [_v10] = (0, _v12.useMediaQuery)("(min-width: 768px)"),
      {
        updateClipReviewStatus: _v11
      } = ((_v0, _v1) => {
        let {
          baseUrl: _v2,
          jwt: _v3
        } = (0, _v26.useGctlConfig)();
        return {
          updateClipReviewStatus: async _v0 => {
            let _v1 = (0, _v27.getReviewPasswordHashFromCookie)(_v1);
            return _v25({
              baseUrl: _v2,
              headers: {
                "Content-Type": "application/json",
                Authorization: `jwt ${_v3}`
              },
              where: {
                videoId: _v0
              },
              ...(_v1 && {
                query: {
                  reviewId: _v1,
                  password: _v1
                }
              }),
              variables: {
                reviewStatus: _v0 ?? null
              }
            });
          }
        };
      })(_v0, _v4),
      _v12 = async _v0 => {
        _v8(_v0), _v11(_v0).then(() => {
          _v5({
            title: (0, _v20.translate)({
              singular: "Status updated",
              dictionary: {
                es: {
                  singular: "Estado actualizado"
                },
                "de-DE": {
                  singular: "Status wurde aktualisiert"
                },
                "fr-FR": {
                  singular: "Statut mis à jour"
                },
                "ja-JP": {
                  singular: "ステータスが更新されました"
                },
                "ko-KR": {
                  singular: "상태가 업데이트되었습니다."
                },
                "pt-BR": {
                  singular: "Status atualizado"
                },
                "zh-CN": {
                  singular: "状态已更新"
                }
              }
            })
          });
        }).catch(() => {
          _v5({
            title: (0, _v20.translate)({
              singular: "Unable to update status. Try again.",
              dictionary: {
                es: {
                  singular: "No se puede actualizar el estado. Inténtelo de nuevo."
                },
                "de-DE": {
                  singular: "Status kann nicht aktualisiert werden. Nochmal versuchen."
                },
                "fr-FR": {
                  singular: "Impossible de mettre à jour le statut. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "ステータスを更新できません。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "상태를 업데이트할 수 없습니다. 다시 시도해주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível atualizar o status. Tente novamente."
                },
                "zh-CN": {
                  singular: "无法更新状态。请重试。"
                }
              }
            })
          });
        });
      };
    return _v2 ? _v7 ? (0, _v1.jsxs)(_v14.HStack, {
      "data-testid": "review-status-button",
      gap: "xs",
      px: "sm",
      children: [(0, _v1.jsx)(_v19, {
        boxSize: "xs",
        color: _v33.get(_v7)
      }), (0, _v1.jsx)(_v15.Header, {
        size: "2xs",
        whiteSpace: "nowrap",
        children: (0, _v1.jsx)("span", {
          children: _v34.get(_v7)
        })
      })]
    }) : null : (0, _v1.jsx)(_v3.Box, {
      children: (0, _v1.jsxs)(_v5.Menu, {
        placement: "bottom",
        children: [(0, _v1.jsx)(_v6.MenuButton, {
          onFocus: _v0 => _v0.preventDefault(),
          "data-testid": "review-status-button",
          as: _v4.Button,
          variant: _v10 ? "tertiary" : "secondary",
          size: _v10 ? "xs" : "md",
          rightIcon: (0, _v1.jsx)(_v16.ChevronDownSmall, {}),
          onClick: () => (0, _v31.bpOpenVideoReviewStatus)(_v7, _v0, _v6, _v3),
          display: "flex",
          children: (0, _v1.jsxs)(_v3.Box, {
            as: "span",
            display: "flex",
            gap: "sm",
            alignItems: "center",
            children: [null === _v7 ? (0, _v1.jsx)(_v18, {
              boxSize: "xs",
              color: _v33.get(_v7)
            }) : (0, _v1.jsx)(_v19, {
              boxSize: "xs",
              color: _v33.get(_v7)
            }), (0, _v1.jsx)("span", {
              children: _v10 ? _v34.get(_v7) : ""
            })]
          })
        }), (0, _v1.jsxs)(_v8.MenuList, {
          children: [(0, _v1.jsx)(_v10.MenuOptionGroup, {
            defaultValue: _v34.get(_v7),
            value: _v34.get(_v7),
            textColor: "text-secondary",
            children: Array.from(_v32).map(([_v0, _v1]) => (0, _v1.jsx)(_v9.MenuItemOption, {
              value: _v1,
              onClick: () => {
                (0, _v31.bpSetVideoReviewStatus)(_v7, _v0, _v0, _v6, _v3), _v0 !== _v7 && _v12(_v0), null !== _v0 && _v0 !== _v7 && _v9({
                  clipId: String(_v0),
                  newStatus: _v0
                });
              },
              children: (0, _v1.jsxs)(_v3.Box, {
                as: "span",
                display: "flex",
                gap: "sm",
                alignItems: "center",
                children: [(0, _v1.jsx)(_v19, {
                  boxSize: "xs",
                  color: _v33.get(_v0)
                }), _v1]
              })
            }, _v1))
          }), null !== _v7 && (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v11.MenuDivider, {
              my: "4px"
            }), (0, _v1.jsx)(_v7.MenuGroup, {
              children: (0, _v1.jsx)(_v9.MenuItemOption, {
                onClick: () => {
                  (0, _v31.bpSetVideoReviewStatus)(_v7, null, _v0, _v6, _v3), _v12(null), _v9({
                    clipId: String(_v0),
                    newStatus: "none"
                  });
                },
                children: (0, _v1.jsxs)(_v3.Box, {
                  as: "span",
                  display: "flex",
                  gap: "sm",
                  alignItems: "center",
                  children: [(0, _v1.jsx)(_v19, {
                    boxSize: "xs",
                    opacity: "0"
                  }), (0, _v20.translate)({
                    singular: "Clear status",
                    dictionary: {
                      es: {
                        singular: "Borrar estado"
                      },
                      "de-DE": {
                        singular: "Status zurücksetzen"
                      },
                      "fr-FR": {
                        singular: "Effacer le statut"
                      },
                      "ja-JP": {
                        singular: "ステータスをクリア"
                      },
                      "ko-KR": {
                        singular: "상태 초기화"
                      },
                      "pt-BR": {
                        singular: "Limpar status"
                      },
                      "zh-CN": {
                        singular: "清除状态"
                      }
                    }
                  })]
                })
              })
            })]
          })]
        })]
      })
    });
  }], 0);
}