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
    _v12 = _v0.i(0);
  _v0.s(["ConfirmUploadModal", 0, ({
    onCancel: _v0,
    onConfirm: _v1,
    isOpen: _v2 = !1,
    fileName: _v3,
    isLoading: _v4 = !1
  }) => (0, _v1.jsxs)(_v4.Modal, {
    isOpen: _v2,
    onClose: _v0,
    children: [(0, _v1.jsx)(_v9.ModalOverlay, {}), (0, _v1.jsxs)(_v6.ModalContent, {
      maxW: (0, _v10.rem)(480),
      children: [(0, _v1.jsx)(_v8.ModalHeader, {
        children: (0, _v12.translate)({
          singular: "Create new version",
          dictionary: {
            es: {
              singular: "Crear nueva versión"
            },
            "de-DE": {
              singular: "Neue Version erstellen"
            },
            "fr-FR": {
              singular: "Créer une nouvelle version"
            },
            "ja-JP": {
              singular: "新しいバージョンを作成"
            },
            "ko-KR": {
              singular: "새 버전을 생성하세요."
            },
            "pt-BR": {
              singular: "Criar nova versão"
            },
            "zh-CN": {
              singular: "创建新版本"
            }
          }
        })
      }), (0, _v1.jsx)(_v5.ModalBody, {
        children: (0, _v1.jsx)(_v3.Flex, {
          flexDirection: "column",
          gap: 200,
          children: (0, _v1.jsx)(_v11.Text, {
            variant: "body-md",
            children: _v3 ? (0, _v12.translate)({
              singular: "{BOLD}{FILENAME}{/BOLD} will replace this video on vimeo.com and anywhere the video is embedded. Analytics, viewer comments, and likes will not be affected.",
              replacements: {
                FILENAME: _v3,
                BOLD: _v0 => (0, _v1.jsx)("b", {
                  children: _v0
                })
              },
              dictionary: {
                es: {
                  singular: "{BOLD}{FILENAME}{/BOLD} reemplazará este video en vimeo.com y en cualquier lugar donde esté insertado. Los análisis, los comentarios de los espectadores y los me gusta no se verán afectados."
                },
                "de-DE": {
                  singular: "{BOLD}{FILENAME}{/BOLD} wird dieses Video auf vimeo.com und überall dort ersetzen, wo es eingebettet ist. Analysen, Kommentare von Zuschauenden und Likes sind davon nicht betroffen."
                },
                "fr-FR": {
                  singular: "{BOLD}{FILENAME}{/BOLD} remplacera cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Cela n'aura aucun effet sur les statistiques, les commentaires des spectateurs et les mentions « J'aime »."
                },
                "ja-JP": {
                  singular: "{BOLD}{FILENAME}{/BOLD}により、vimeo.comおよび動画が埋め込まれているすべての場所でこの動画が置き換えられます。分析、視聴者のコメント、いいねには影響しません。"
                },
                "ko-KR": {
                  singular: "vimeo.com과 동영상이 임베드된 모든 곳에서 이 동영상이 {BOLD}{FILENAME}{/BOLD}(으)로 대체됩니다. 분석, 시청자 의견 및 좋아요는 영향을 받지 않습니다."
                },
                "pt-BR": {
                  singular: "{BOLD}{FILENAME}{/BOLD} substituirá este vídeo em vimeo.com e em qualquer lugar onde ele esteja incorporado. As análises, os comentários dos espectadores e as curtidas não serão afetados."
                },
                "zh-CN": {
                  singular: "{BOLD}{FILENAME}{/BOLD} 将替换在 vimeo.com 上以及视频嵌入的任何位置的该视频。分析、观众评论和点赞将不会受到影响。"
                }
              }
            }) : (0, _v12.translate)({
              singular: "This action will replace this video on vimeo.com and anywhere the video is embedded. Analytics, viewer comments, and likes will not be affected.",
              dictionary: {
                es: {
                  singular: "Esta acción reemplazará este video en vimeo.com y en cualquier sitio donde esté insertado. Los análisis, los comentarios de los espectadores y los me gusta no se verán afectados."
                },
                "de-DE": {
                  singular: "Mit dieser Aktion wird dieses Video auf vimeo.com und überall dort ersetzt, wo es eingebettet ist. Analysen, Kommentare von Zuschauenden und Likes sind davon nicht betroffen."
                },
                "fr-FR": {
                  singular: "Cette action remplacera cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Cela n'aura aucun effet sur les statistiques, les commentaires des spectateurs et les mentions « J'aime »."
                },
                "ja-JP": {
                  singular: "この操作により、vimeo.comおよび動画が埋め込まれているすべての場所でこの動画が置き換えられます。分析、視聴者のコメント、いいねには影響しません。"
                },
                "ko-KR": {
                  singular: "이 작업을 진행하면 vimeo.com과 동영상이 임베드된 모든 곳에서 이 동영상이 대체됩니다. 분석, 시청자 의견 및 좋아요는 영향을 받지 않습니다."
                },
                "pt-BR": {
                  singular: "Esta ação substituirá este vídeo em vimeo.com e em qualquer lugar onde ele esteja incorporado. As análises, os comentários dos espectadores e as curtidas não serão afetados."
                },
                "zh-CN": {
                  singular: "此操作将替换 vimeo.com 上以及视频嵌入的任何位置的该视频。分析、观众评论和点赞将不会受到影响。"
                }
              }
            })
          })
        })
      }), (0, _v1.jsxs)(_v7.ModalFooter, {
        children: [(0, _v1.jsx)(_v2.Button, {
          isDisabled: _v4,
          size: "md",
          variant: "tertiary",
          onClick: _v0,
          children: (0, _v12.translate)({
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
        }), (0, _v1.jsx)(_v2.Button, {
          size: "md",
          variant: "primary",
          onClick: _v1,
          isLoading: _v4,
          children: (0, _v12.translate)({
            singular: "Create",
            dictionary: {
              es: {
                singular: "Crear"
              },
              "de-DE": {
                singular: "Erstellen"
              },
              "fr-FR": {
                singular: "Créer"
              },
              "ja-JP": {
                singular: "作成"
              },
              "ko-KR": {
                singular: "만들기"
              },
              "pt-BR": {
                singular: "Criar"
              },
              "zh-CN": {
                singular: "创建"
              }
            }
          })
        })]
      })]
    })]
  })], 0), _v0.s(["isFileSizeWithinQuota", 0, (_v0, _v1, _v2, _v3 = 0) => {
    if (!_v1) return !0;
    let _v4 = !1 === _v2 ? _v0 - _v3 : _v0,
      _v5 = _v1.lifetime?.free,
      _v6 = _v1.periodic?.free;
    return !("number" == typeof _v6 && _v4 > _v6) && !("number" == typeof _v5 && _v4 > _v5);
  }], 0);
}