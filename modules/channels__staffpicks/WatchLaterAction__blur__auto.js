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
    _v9 = _v0.i(0);
  _v0.s(["WatchLaterAction", 0, ({
    videoId: _v0,
    isOnWatchList: _v1 = !1,
    onToggle: _v2,
    size: _v3 = "xs",
    variant: _v4 = "blur",
    placement: _v5 = "top",
    showIcon: _v6 = "auto"
  }) => {
    let _v7 = (0, _v8.useViewer)(),
      _v8 = (0, _v9.useNotification)(),
      [_v9, {
        loading: _v10
      }] = (0, _v6.usePutMeWatchlater)(),
      [_v11, {
        loading: _v12
      }] = (0, _v6.useDeleteMeWatchlater)(),
      _v13 = _v10 || _v12,
      _v14 = async () => {
        if (!_v0 || !_v7?.user) return void _v8({
          content: (0, _v7.translate)({
            singular: "Please log in to manage Watch Later",
            dictionary: {
              es: {
                singular: "Inicie sesión para gestionar Ver después."
              },
              "de-DE": {
                singular: "Bitte loggen Sie sich ein, um die Liste „Später anschauen“ zu verwalten"
              },
              "fr-FR": {
                singular: "Connectez-vous pour gérer votre liste Regarder plus tard"
              },
              "ja-JP": {
                singular: "ログインして「後で見る」を管理してください"
              },
              "ko-KR": {
                singular: "나중에 보기를 관리하려면 로그인하세요."
              },
              "pt-BR": {
                singular: "Faça login para gerenciar a lista Assistir Depois"
              },
              "zh-CN": {
                singular: "请登录以管理“稍后观看”"
              }
            }
          }),
          status: "error"
        });
        try {
          _v1 ? (await _v11({
            where: {
              videoId: _v0
            }
          }), _v8({
            content: (0, _v7.translate)({
              singular: "Removed from Watch Later",
              dictionary: {
                es: {
                  singular: 'Eliminado de la lista "Ver después"'
                },
                "de-DE": {
                  singular: "Aus „Später anschauen“ entfernt"
                },
                "fr-FR": {
                  singular: "Supprimé de Regarder plus tard"
                },
                "ja-JP": {
                  singular: "「後で見る」から削除されました"
                },
                "ko-KR": {
                  singular: "나중에 보기에서 제거됨"
                },
                "pt-BR": {
                  singular: "Removido do Assistir Depois"
                }
              }
            })
          }), _v2?.(!1)) : (await _v9({
            where: {
              videoId: _v0
            }
          }), _v8({
            content: (0, _v7.translate)({
              singular: "Added to Watch Later",
              dictionary: {
                es: {
                  singular: 'Se agregó a la lista "Ver después"'
                },
                "de-DE": {
                  singular: "Zu „Später anschauen“ hinzugefügt"
                },
                "fr-FR": {
                  singular: "Ajouté à Regarder plus tard"
                },
                "ja-JP": {
                  singular: "「後で見る」に追加しました"
                },
                "ko-KR": {
                  singular: "나중에 보기에 추가됨"
                },
                "pt-BR": {
                  singular: "Adicionado ao Assistir Depois"
                },
                "zh-CN": {
                  singular: "已添加到稍后观看"
                }
              }
            })
          }), _v2?.(!0));
        } catch (_v0) {
          _v8({
            content: (0, _v7.translate)({
              singular: "An error occurred while updating Watch Later",
              dictionary: {
                es: {
                  singular: "Se produjo un error al actualizar Ver después"
                },
                "de-DE": {
                  singular: "Beim Aktualisieren der Liste „Später anschauen“ ist ein Fehler aufgetreten"
                },
                "fr-FR": {
                  singular: "Une erreur est survenue lors de la mise à jour de Regarder plus tard"
                },
                "ja-JP": {
                  singular: "「後で見る」の更新中にエラーが発生しました"
                },
                "ko-KR": {
                  singular: "나중에 보기 업데이트 중 오류 발생"
                },
                "pt-BR": {
                  singular: "Ocorreu um erro ao atualizar a lista Assistir Depois"
                },
                "zh-CN": {
                  singular: "更新“稍后观看”时出错"
                }
              }
            }),
            status: "error"
          });
        }
      },
      _v15 = () => _v1 ? (0, _v7.translate)({
        singular: "Remove from Watch later",
        dictionary: {
          es: {
            singular: "Quitar de la lista “Ver después”"
          },
          "de-DE": {
            singular: "Aus „Später anschauen“ entfernen"
          },
          "fr-FR": {
            singular: "Supprimer de la liste Regarder plus tard"
          },
          "ja-JP": {
            singular: "「後で見る」から削除"
          },
          "ko-KR": {
            singular: "나중에 보기에서 제거"
          },
          "pt-BR": {
            singular: "Remover da lista Assistir Depois"
          },
          "zh-CN": {
            singular: "从稍后观看中移除"
          }
        }
      }) : (0, _v7.translate)({
        singular: "Add to Watch later",
        dictionary: {
          es: {
            singular: 'Agregar a "Ver después"'
          },
          "de-DE": {
            singular: 'Zu „Später anschauen" hinzufügen'
          },
          "fr-FR": {
            singular: "Ajouter à la liste Regarder plus tard"
          },
          "ja-JP": {
            singular: "後で見るに追加"
          },
          "ko-KR": {
            singular: "나중에 보기"
          },
          "pt-BR": {
            singular: "Adicionar ao Assistir Depois"
          },
          "zh-CN": {
            singular: "添加到稍后观看"
          }
        }
      });
    return (0, _v1.jsx)(_v3.Tooltip, {
      label: _v15(),
      placement: _v5,
      children: (0, _v1.jsx)(_v2.IconButton, {
        "aria-label": _v15(),
        icon: "filled" === _v6 ? (0, _v1.jsx)(_v5.ClockFilled, {}) : "outlined" === _v6 ? (0, _v1.jsx)(_v4.Clock, {}) : _v1 ? (0, _v1.jsx)(_v5.ClockFilled, {}) : (0, _v1.jsx)(_v4.Clock, {}),
        onClick: _v14,
        size: _v3,
        variant: _v4,
        isLoading: _v13,
        isDisabled: _v13,
        zIndex: 1
      })
    });
  }]);
}