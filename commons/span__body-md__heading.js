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
    _v13 = _v0.i(0);
  let _v14 = _v0 => ({
    fileName: (0, _v1.jsx)(_v12.Text, {
      as: "span",
      variant: "body-md",
      fontFamily: "heading",
      children: _v0
    })
  });
  _v0.s(["ReplaceModal", 0, ({
    onCancel: _v0,
    onConfirm: _v1,
    primaryCtaText: _v2,
    isInteractive: _v3,
    fileToReplaceName: _v4
  }) => (0, _v1.jsxs)(_v4.Modal, {
    isOpen: !0,
    onClose: _v0,
    children: [(0, _v1.jsx)(_v10.ModalOverlay, {}), (0, _v1.jsxs)(_v7.ModalContent, {
      children: [(0, _v1.jsx)(_v9.ModalHeader, {
        children: (0, _v13.translate)({
          singular: "Replace video with new version",
          dictionary: {
            es: {
              singular: "Reemplazar el video con la nueva versión"
            },
            "de-DE": {
              singular: "Video durch neue Version ersetzen"
            },
            "fr-FR": {
              singular: "Remplacer la vidéo par une nouvelle version"
            },
            "ja-JP": {
              singular: "ビデオを新しいバージョンに差し替える"
            },
            "ko-KR": {
              singular: "동영상을 새 버전으로 교체"
            },
            "pt-BR": {
              singular: "Substituir o vídeo por uma nova versão"
            },
            "zh-CN": {
              singular: "用新版本替换视频"
            }
          }
        })
      }), (0, _v1.jsx)(_v6.ModalCloseButton, {}), (0, _v1.jsx)(_v5.ModalBody, {
        children: (0, _v1.jsx)(_v3.Flex, {
          flexDirection: "column",
          gap: 200,
          children: (0, _v1.jsx)(_v11.Paragraph, {
            size: "md",
            children: (() => {
              if (_v4) return _v3 ? (0, _v13.translate)({
                singular: "{fileName} will replace this video on vimeo.com and anywhere the video is embedded. Analytics, viewer comments, and likes will not be affected. Interactive elements you added will still appear in your video.",
                replacements: _v14(_v4),
                dictionary: {
                  es: {
                    singular: "{fileName} reemplazará este video en vimeo.com y en cualquier lugar donde esté incrustado. Las analíticas, los comentarios de los espectadores y los me gusta no se verán afectados. Los elementos interactivos que añadiste seguirán apareciendo en tu video."
                  },
                  "de-DE": {
                    singular: "{fileName} ersetzt dieses Video auf vimeo.com und überall dort, wo das Video eingebettet ist. Statistiken, Zuschauerkommentare und Likes werden nicht beeinträchtigt. Interaktive Elemente, die Sie hinzugefügt haben, werden weiterhin in Ihrem Video angezeigt."
                  },
                  "fr-FR": {
                    singular: "{fileName} remplacera cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Les statistiques, les commentaires des spectateurs et les mentions J'aime ne seront pas affectés. Les éléments interactifs que vous avez ajoutés apparaîtront toujours dans votre vidéo."
                  },
                  "ja-JP": {
                    singular: "{fileName} が vimeo.com 上および動画が埋め込まれているすべての場所でこの動画を置き換えます。アナリティクス、視聴者のコメント、およびいいねは影響を受けません。追加したインタラクティブ要素は動画に引き続き表示されます。"
                  },
                  "ko-KR": {
                    singular: "{fileName}이(가) vimeo.com 및 동영상이 삽입된 모든 위치에서 이 동영상을 대체합니다. 분석, 시청자 댓글 및 좋아요는 영향을 받지 않습니다. 추가한 인터랙티브 요소는 동영상에 계속 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "{fileName} substituirá este vídeo no vimeo.com e em qualquer lugar em que o vídeo esteja incorporado. As análises, comentários dos espectadores e curtidas não serão afetados. Os elementos interativos que você adicionou continuarão a aparecer no seu vídeo."
                  },
                  "zh-CN": {
                    singular: "{fileName} 将在 vimeo.com 及视频被嵌入的所有位置替换该视频。分析、观众评论和点赞不会受到影响。您添加的交互元素仍将出现在视频中。"
                  }
                }
              }) : (0, _v13.translate)({
                singular: "{fileName} will replace this video on vimeo.com and anywhere the video is embedded. Analytics, viewer comments, and likes will not be affected.",
                replacements: _v14(_v4),
                dictionary: {
                  es: {
                    singular: "{fileName} reemplazará este video en vimeo.com y en cualquier lugar donde esté incrustado. Las analíticas, los comentarios de los espectadores y los me gusta no se verán afectados."
                  },
                  "de-DE": {
                    singular: "{fileName} ersetzt dieses Video auf vimeo.com und überall dort, wo das Video eingebettet ist. Statistiken, Zuschauerkommentare und Likes werden nicht beeinträchtigt."
                  },
                  "fr-FR": {
                    singular: "{fileName} remplacera cette vidéo sur vimeo.com et partout où la vidéo est intégrée. Les statistiques, les commentaires des spectateurs et les mentions J'aime ne seront pas affectés."
                  },
                  "ja-JP": {
                    singular: "{fileName} が vimeo.com 上および動画が埋め込まれているすべての場所でこの動画を置き換えます。アナリティクス、視聴者のコメント、およびいいねは影響を受けません。"
                  },
                  "ko-KR": {
                    singular: "{fileName}이(가) vimeo.com 및 동영상이 삽입된 모든 위치에서 이 동영상을 대체합니다. 분석, 시청자 댓글 및 좋아요는 영향을 받지 않습니다."
                  },
                  "pt-BR": {
                    singular: "{fileName} substituirá este vídeo no vimeo.com e em qualquer lugar em que o vídeo esteja incorporado. As análises, comentários dos espectadores e curtidas não serão afetados."
                  },
                  "zh-CN": {
                    singular: "{fileName} 将在 vimeo.com 及视频被嵌入的所有位置替换该视频。分析、观众评论和点赞不会受到影响。"
                  }
                }
              });
              return _v3 ? (0, _v13.translate)({
                singular: "This action will update this video on vimeo.com and anywhere the video is embedded. Video analytics, public comments, and likes will not be affected. Interactive elements you added will still appear in your video.",
                dictionary: {
                  es: {
                    singular: "Esta acción actualizará este video en vimeo.com y en cualquier lugar donde esté incrustado. Las analíticas del video, los comentarios públicos y los me gusta no se verán afectados. Los elementos interactivos que añadiste seguirán apareciendo en tu video."
                  },
                  "de-DE": {
                    singular: "Diese Aktion aktualisiert dieses Video auf vimeo.com und überall dort, wo es eingebettet ist. Video-Analysen, öffentliche Kommentare und Likes sind davon nicht betroffen. Interaktive Elemente, die Sie hinzugefügt haben, bleiben in Ihrem Video sichtbar."
                  },
                  "fr-FR": {
                    singular: "Cette action mettra à jour cette vidéo sur vimeo.com et partout où elle est intégrée. Les analyses de la vidéo, les commentaires publics et les mentions J'aime ne seront pas affectés. Les éléments interactifs que vous avez ajoutés continueront d'apparaître dans votre vidéo."
                  },
                  "ja-JP": {
                    singular: "この操作により、vimeo.com および動画が埋め込まれているすべての場所のこのビデオが更新されます。視聴分析、公開コメント、いいねは影響を受けません。追加したインタラクティブ要素は引き続き動画に表示されます。"
                  },
                  "ko-KR": {
                    singular: "이 작업은 vimeo.com의 이 동영상과 동영상이 삽입된 모든 위치에서 해당 동영상을 업데이트합니다. 동영상 분석, 공개 댓글, 좋아요에는 영향이 없습니다. 추가한 인터랙티브 요소는 동영상에 계속 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Esta ação atualizará este vídeo em vimeo.com e em qualquer lugar onde o vídeo esteja incorporado. As análises do vídeo, comentários públicos e curtidas não serão afetados. Os elementos interativos que você adicionou continuarão aparecendo no seu vídeo."
                  },
                  "zh-CN": {
                    singular: "此操作将更新 vimeo.com 上的视频以及视频被嵌入的所有位置。视频分析、公开评论和点赞将不受影响。您添加的交互元素仍会出现在视频中。"
                  }
                }
              }) : (0, _v13.translate)({
                singular: "This action will update this video on vimeo.com and anywhere the video is embedded. Video analytics, public comments, and likes will not be affected.",
                dictionary: {
                  es: {
                    singular: "Esta acción actualizará este video en vimeo.com y en cualquier lugar donde esté incrustado. Las analíticas del video, los comentarios públicos y los me gusta no se verán afectados."
                  },
                  "de-DE": {
                    singular: "Diese Aktion aktualisiert dieses Video auf vimeo.com und überall dort, wo es eingebettet ist. Video-Analysen, öffentliche Kommentare und Likes sind davon nicht betroffen."
                  },
                  "fr-FR": {
                    singular: "Cette action mettra à jour cette vidéo sur vimeo.com et partout où elle est intégrée. Les analyses de la vidéo, les commentaires publics et les mentions J'aime ne seront pas affectés."
                  },
                  "ja-JP": {
                    singular: "この操作により、vimeo.com および動画が埋め込まれているすべての場所のこのビデオが更新されます。視聴分析、公開コメント、いいねは影響を受けません。"
                  },
                  "ko-KR": {
                    singular: "이 작업은 vimeo.com의 이 동영상과 동영상이 삽입된 모든 위치에서 해당 동영상을 업데이트합니다. 동영상 분석, 공개 댓글, 좋아요에는 영향이 없습니다."
                  },
                  "pt-BR": {
                    singular: "Esta ação atualizará este vídeo em vimeo.com e em qualquer lugar onde o vídeo esteja incorporado. As análises do vídeo, comentários públicos e curtidas não serão afetados."
                  },
                  "zh-CN": {
                    singular: "此操作将更新 vimeo.com 上的视频以及视频被嵌入的所有位置。视频分析、公开评论和点赞将不受影响。"
                  }
                }
              });
            })()
          })
        })
      }), (0, _v1.jsxs)(_v8.ModalFooter, {
        children: [(0, _v1.jsx)(_v2.Button, {
          variant: "secondary",
          onClick: _v0,
          children: (0, _v13.translate)({
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
          onClick: _v1,
          children: _v2
        })]
      })]
    })]
  })]);
}