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
    _v10 = _v0.i(0);
  _v0.s(["RestoreConfirmationModal", 0, ({
    isOpen: _v0,
    onClose: _v1,
    isRestoreApiInProgress: _v2,
    onRestoreVersion: _v3
  }) => (0, _v1.jsxs)(_v3.Modal, {
    isOpen: _v0,
    onClose: _v1,
    size: "md",
    children: [(0, _v1.jsx)(_v8.ModalOverlay, {}), (0, _v1.jsxs)(_v5.ModalContent, {
      children: [(0, _v1.jsx)(_v7.ModalHeader, {
        pb: "0px",
        children: (0, _v10.translate)({
          singular: "Restore version",
          dictionary: {
            es: {
              singular: "Restaurar versión"
            },
            "de-DE": {
              singular: "Version wiederherstellen"
            },
            "fr-FR": {
              singular: "Restaurer la version"
            },
            "ja-JP": {
              singular: "バージョンを復元"
            },
            "ko-KR": {
              singular: "버전 복원"
            },
            "pt-BR": {
              singular: "Restaurar versão"
            },
            "zh-CN": {
              singular: "恢复版本"
            }
          }
        })
      }), (0, _v1.jsx)(_v4.ModalBody, {
        paddingBottom: "md",
        children: (0, _v1.jsx)(_v9.Text, {
          variant: "body-md",
          children: (0, _v10.translate)({
            singular: "The restored video file will replace the current version of this video on vimeo.com and anywhere the video is embedded. Analytics, public comments, and likes will not be affected.",
            dictionary: {
              es: {
                singular: "El archivo de video restaurado reemplazará la versión actual de este video en vimeo.com y en todos los lugares donde esté insertado. Los análisis, los comentarios públicos y los Me gusta no se verán afectados."
              },
              "de-DE": {
                singular: "Die wiederhergestellte Videodatei ersetzt die aktuelle Version dieses Videos auf vimeo.com und überall dort, wo es eingebettet ist. Analytics, öffentliche Kommentare und Likes sind davon nicht betroffen."
              },
              "fr-FR": {
                singular: "Le fichier vidéo restauré remplacera la version actuelle de cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Les statistiques, les commentaires publics et les mentions « J'aime » ne seront pas affectés."
              },
              "ja-JP": {
                singular: "復元された動画ファイルは、vimeo.comおよび動画が埋め込まれているすべての場所で、この動画の現在のバージョンを置き換えます。分析、一般公開コメント、いいねには影響しません。"
              },
              "ko-KR": {
                singular: "복원된 동영상 파일은 vimeo.com과 동영상이 임베드된 모든 곳에서 현재 버전의 동영상을 대체합니다. 분석, 공개 댓글, 좋아요는 영향을 받지 않습니다."
              },
              "pt-BR": {
                singular: "O arquivo de vídeo restaurado substituirá a versão atual deste vídeo em vimeo.com e em qualquer lugar onde o vídeo esteja incorporado. As análises, os comentários públicos e as curtidas não serão afetados."
              },
              "zh-CN": {
                singular: "恢复后的视频文件将替换 vimeo.com 上以及嵌入该视频的任何地方的当前版本。分析、公开评论和点赞将不受影响。"
              }
            }
          })
        })
      }), (0, _v1.jsxs)(_v6.ModalFooter, {
        children: [(0, _v1.jsx)(_v2.Button, {
          variant: "tertiary",
          onClick: () => _v1(),
          disabled: _v2,
          children: (0, _v10.translate)({
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
          variant: "primary",
          onClick: _v3,
          isLoading: _v2,
          children: (0, _v10.translate)({
            singular: "Restore",
            dictionary: {
              es: {
                singular: "Restaurar"
              },
              "de-DE": {
                singular: "Wiederherstellen"
              },
              "fr-FR": {
                singular: "Réinstaurer"
              },
              "ja-JP": {
                singular: "復元"
              },
              "ko-KR": {
                singular: "복원"
              },
              "pt-BR": {
                singular: "Restaure"
              },
              "zh-CN": {
                singular: "恢复"
              }
            }
          })
        })]
      })]
    })]
  })]);
}