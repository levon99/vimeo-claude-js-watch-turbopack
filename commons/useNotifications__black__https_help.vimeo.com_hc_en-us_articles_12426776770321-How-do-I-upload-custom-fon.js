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
  _v0.s(["useNotifications", 0, () => {
    let _v0 = (0, _v8.useToast)(),
      _v1 = (0, _v8.useToast)({
        render: _v0 => (0, _v1.jsxs)(_v8.ToastRoot, {
          ..._v0,
          children: [(0, _v1.jsx)(_v8.ToastIcon, {}), (0, _v1.jsx)(_v8.ToastTitle, {
            children: _v0.title
          }), (0, _v1.jsx)(_v6.Link, {
            color: "black",
            href: "https://help.vimeo.com/hc/en-us/articles/12426776770321-How-do-I-upload-custom-fonts-in-the-video-editor",
            target: "_blank",
            rel: "noopener noreferrer",
            children: (0, _v1.jsx)(_v7.Text, {
              variant: "body-md",
              textDecoration: "underline",
              children: (0, _v10.translate)({
                singular: "How to upload a font",
                dictionary: {
                  es: {
                    singular: "Cómo subir una fuente"
                  },
                  "de-DE": {
                    singular: "Wie man eine Schriftart hochlädt"
                  },
                  "fr-FR": {
                    singular: "Comment mettre en ligne une police"
                  },
                  "ja-JP": {
                    singular: "フォントをアップロードする方法"
                  },
                  "ko-KR": {
                    singular: "폰트를 업로드하는 방법"
                  },
                  "pt-BR": {
                    singular: "Como carregar uma fonte"
                  },
                  "zh-CN": {
                    singular: "如何上传字体"
                  }
                }
              })
            })
          })]
        })
      }),
      _v2 = (0, _v2.useCallback)(() => {
        _v1({
          title: (0, _v10.translate)({
            singular: "The font Helvetica is no longer available and was replaced with InterTight.",
            dictionary: {
              es: {
                singular: "La fuente Helvetica ya no está disponible y ha sido reemplazada por InterTight."
              },
              "de-DE": {
                singular: "Die Schriftart Helvetica ist nicht mehr verfügbar und wurde durch InterTight ersetzt."
              },
              "fr-FR": {
                singular: "La police Helvetica n'est plus disponible et a été remplacée par InterTight."
              },
              "ja-JP": {
                singular: "Helveticaフォントは使用できなくなり、InterTightに置き換えられました。"
              },
              "ko-KR": {
                singular: "Helvetica 폰트는 더 이상 사용할 수 없어 InterTight로 대체되었습니다."
              },
              "pt-BR": {
                singular: "A fonte Helvetica não está mais disponível e foi substituída pela InterTight."
              },
              "zh-CN": {
                singular: "Helvetica 字体不再可用，并已替换为 InterTight 字体。"
              }
            }
          }),
          variant: "info",
          duration: null,
          containerStyle: {
            width: "fit-content",
            maxWidth: "100%"
          }
        });
      }, [_v1]),
      _v3 = (0, _v2.useCallback)(_v0 => {
        _v0({
          title: (0, _v1.jsxs)(_v4.Flex, {
            whiteSpace: "nowrap",
            alignItems: "center",
            gap: 2,
            children: [(0, _v10.translate)({
              singular: "The font {fontName} was removed and has been replaced with Gothic",
              replacements: {
                fontName: _v0
              },
              dictionary: {
                es: {
                  singular: "La fuente {fontName} fue eliminada y se ha reemplazado por Gothic"
                },
                "de-DE": {
                  singular: "Die Schriftart {fontName} wurde entfernt und durch Gotisch ersetzt."
                },
                "fr-FR": {
                  singular: "La police {fontName} a été supprimée et a été remplacée par Gothic."
                },
                "ja-JP": {
                  singular: "フォント{fontName}は削除され、Gothicに置き換えられました"
                },
                "ko-KR": {
                  singular: "{fontName} 폰트가 제거되고 Gothic으로 대체되었습니다."
                },
                "pt-BR": {
                  singular: "A fonte {fontName} foi removida e substituída por Gothic."
                },
                "zh-CN": {
                  singular: "字体 {fontName} 已被移除，并已替换为 Gothic 字体"
                }
              }
            }), (0, _v1.jsx)(_v6.Link, {
              color: "black",
              href: "https://help.vimeo.com/hc/en-us/articles/12426776770321-How-do-I-upload-custom-fonts-in-the-video-editor",
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, _v1.jsx)(_v7.Text, {
                variant: "body-md",
                textDecoration: "underline",
                children: (0, _v10.translate)({
                  singular: "How to upload a font",
                  dictionary: {
                    es: {
                      singular: "Cómo subir una fuente"
                    },
                    "de-DE": {
                      singular: "Wie man eine Schriftart hochlädt"
                    },
                    "fr-FR": {
                      singular: "Comment mettre en ligne une police"
                    },
                    "ja-JP": {
                      singular: "フォントをアップロードする方法"
                    },
                    "ko-KR": {
                      singular: "폰트를 업로드하는 방법"
                    },
                    "pt-BR": {
                      singular: "Como carregar uma fonte"
                    },
                    "zh-CN": {
                      singular: "如何上传字体"
                    }
                  }
                })
              })
            })]
          }),
          variant: "info",
          duration: null,
          containerStyle: {
            width: "fit-content",
            maxWidth: "100%"
          }
        });
      }, [_v0]),
      _v4 = (0, _v2.useCallback)((_v0, _v1) => {
        _v0({
          title: _v1 ? (0, _v10.translate)({
            singular: "{TIME} minutes were removed from the video",
            replacements: {
              TIME: _v0
            },
            dictionary: {
              es: {
                singular: "Se eliminaron {TIME} minutos del video"
              },
              "de-DE": {
                singular: "{TIME} Minuten wurden aus dem Video entfernt"
              },
              "fr-FR": {
                singular: "{TIME} minutes supprimées de la vidéo"
              },
              "ja-JP": {
                singular: "動画から{TIME}分間が削除されました"
              },
              "ko-KR": {
                singular: "동영상에서 {TIME}분이 삭제되었습니다."
              },
              "pt-BR": {
                singular: "{TIME} minutos foram removidos do vídeo"
              },
              "zh-CN": {
                singular: "从视频中删除了 {TIME} 分钟"
              }
            }
          }) : (0, _v10.translate)({
            singular: "{TIME} seconds were removed from the video",
            replacements: {
              TIME: _v0
            },
            dictionary: {
              es: {
                singular: "Se eliminaron {TIME} segundos del video"
              },
              "de-DE": {
                singular: "{TIME} Sekunden wurden aus dem Video entfernt"
              },
              "fr-FR": {
                singular: "{TIME} secondes supprimées de la vidéo"
              },
              "ja-JP": {
                singular: "動画から{TIME}秒間が削除されました"
              },
              "ko-KR": {
                singular: "동영상에서 {TIME}초가 삭제되었습니다."
              },
              "pt-BR": {
                singular: "{TIME} segundos foram removidos do vídeo"
              },
              "zh-CN": {
                singular: "从视频中删除了 {TIME} 秒"
              }
            }
          }),
          variant: "info"
        });
      }, [_v0]),
      _v5 = (0, _v2.useCallback)(_v0 => {
        _v0({
          title: (0, _v10.translate)({
            singular: "Failed deleting {fontName}. please try again...",
            replacements: {
              fontName: _v0
            },
            dictionary: {
              es: {
                singular: "Error al borrar {fontName}. Vuelva a intentarlo…"
              },
              "de-DE": {
                singular: "{fontName} konnte nicht gelöscht werden. Bitte versuche es erneut ..."
              },
              "fr-FR": {
                singular: "Impossible de supprimer {fontName}. Veuillez réessayer."
              },
              "ja-JP": {
                singular: "{fontName}を削除できませんでした。再度お試しください。"
              },
              "ko-KR": {
                singular: "{fontName} 삭제에 실패했습니다. 다시 시도하세요..."
              },
              "pt-BR": {
                singular: "Falha na exclusão de {fontName}. por favor, tente novamente..."
              },
              "zh-CN": {
                singular: "删除 {fontName} 失败。请重试..."
              }
            }
          }),
          variant: "warning"
        });
      }, [_v0]),
      _v6 = (0, _v2.useCallback)(_v0 => {
        _v0({
          title: (0, _v10.translate)({
            singular: "To upload more than 400 videos and 200 images per video, upgrade your account",
            dictionary: {
              es: {
                singular: "Para subir más de 400 videos y 200 imágenes por video, actualice su cuenta"
              },
              "de-DE": {
                singular: "Nehmen Sie ein Upgrade für Ihr Konto vor, um mehr als 400 Videos und 200 Bilder pro Video hochladen"
              },
              "fr-FR": {
                singular: "Pour mettre en ligne plus de 400 vidéos et 200 images par vidéo, veuillez mettre à niveau votre compte"
              },
              "ja-JP": {
                singular: "400本を超える動画と1本の動画につき200枚以上の画像をアップロードするには、アカウントをアップグレードしてください。"
              },
              "ko-KR": {
                singular: "400개가 넘는 동영상과 동영상당 200개 이상의 이미지를 업로드하려면 계정을 업그레이드하세요."
              },
              "pt-BR": {
                singular: "Para carregar mais de 400 vídeos e 200 imagens por vídeo, faça upgrade da sua conta"
              },
              "zh-CN": {
                singular: "要上传超过 400 个视频且每个视频包含 200 张图片，请升级您的帐户"
              }
            }
          }),
          variant: "neutral",
          duration: null,
          containerStyle: {
            maxWidth: "fit-content"
          },
          isClosable: !1,
          render: _v0 => (0, _v1.jsxs)(_v8.ToastRoot, {
            ..._v0,
            children: [(0, _v1.jsx)(_v8.ToastTitle, {
              children: (0, _v1.jsx)(_v7.Text, {
                variant: "body-md",
                color: "text-primary",
                children: _v0.title
              })
            }), (0, _v1.jsx)(_v3.Button, {
              variant: "upsell",
              size: "xs",
              onClick: _v0,
              children: (0, _v10.translate)({
                singular: "Upgrade",
                dictionary: {
                  es: {
                    singular: "Actualizar"
                  },
                  "de-DE": {
                    singular: "Upgraden"
                  },
                  "fr-FR": {
                    singular: "Mettre à niveau"
                  },
                  "ja-JP": {
                    singular: "アップグレード"
                  },
                  "ko-KR": {
                    singular: "업그레이드"
                  },
                  "zh-CN": {
                    singular: "升级"
                  }
                }
              })
            }), (0, _v1.jsx)(_v5.IconButton, {
              size: "xs",
              icon: (0, _v1.jsx)(_v9.CloseX, {}),
              "aria-label": "Dismiss toast",
              variant: "tertiary",
              onClick: _v0.onClose
            })]
          })
        });
      }, [_v0]),
      _v7 = (0, _v2.useCallback)(_v0 => {
        _v0({
          title: (0, _v10.translate)({
            singular: "Hover image for {NAME} hotspot could not be added",
            replacements: {
              NAME: _v0 ? `"${_v0}"` : "this"
            },
            dictionary: {
              es: {
                singular: "No se pudo agregar la imagen con efecto hover para el punto de acceso {NAME}."
              },
              "de-DE": {
                singular: "Das Hover-Bild für den Hotspot {NAME} konnte nicht hinzugefügt werden."
              },
              "fr-FR": {
                singular: "L'image pour le passage de la souris sur la zone interactive {NAME} n'a pas pu être ajoutée."
              },
              "ja-JP": {
                singular: "{NAME}ホットスポット用のホバー画像を追加できませんでした"
              },
              "ko-KR": {
                singular: "{NAME} 핫스팟에 대한 마우스 오버 이미지를 추가할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível adicionar a imagem de sobreposição para o hotspot {NAME}"
              },
              "zh-CN": {
                singular: "无法为 {NAME} 热点添加悬停图像"
              }
            }
          }),
          variant: "warning",
          duration: 0
        });
      }, [_v0]),
      _v8 = (0, _v2.useCallback)(() => {
        _v0({
          title: (0, _v10.translate)({
            singular: "Result screen cannot be moved",
            dictionary: {
              es: {
                singular: "La pantalla de resultados no se puede mover"
              },
              "de-DE": {
                singular: "Ergebnisseite kann nicht verschoben werden"
              },
              "fr-FR": {
                singular: "L'écran de résultat ne peut pas être déplacé"
              },
              "ja-JP": {
                singular: "結果画面は移動できません"
              },
              "ko-KR": {
                singular: "결과 화면은 이동할 수 없습니다."
              },
              "pt-BR": {
                singular: "A tela de resultados não pode ser movida"
              },
              "zh-CN": {
                singular: "结果屏幕无法移动"
              }
            }
          }),
          variant: "neutral",
          duration: 0
        });
      }, [_v0]);
    return {
      notifyHelveticaDeprecation: _v2,
      notifyDeletedFontInUse: _v3,
      notifyTimeRemovedFromTheVideo: _v4,
      notifyFontFailedDeleting: _v5,
      notifyMaximumFilesUploadsLimit: _v6,
      notifyHoverAssetUploadFailed: _v7,
      notifyScorecardTimeTriggerCannotBeDragged: _v8,
      notifyPollToQuizInstruction: (0, _v2.useCallback)(() => {
        _v0({
          title: (0, _v10.translate)({
            singular: "This is now a poll question. Select a correct answer to make it a quiz.",
            dictionary: {
              es: {
                singular: "Esta es ahora una pregunta de encuesta. Seleccione una respuesta correcta para que sea un cuestionario."
              },
              "de-DE": {
                singular: "Dies ist jetzt eine Umfragefrage. Wählen Sie eine richtige Antwort aus, um daraus ein Quiz zu machen."
              },
              "fr-FR": {
                singular: "Il s'agit désormais d'une question de sondage. Sélectionnez une réponse correcte pour en faire un questionnaire."
              },
              "ja-JP": {
                singular: "これは現在、アンケートの質問です。クイズにするには、正解を選択してください。"
              },
              "ko-KR": {
                singular: "이것은 투표 질문입니다. 퀴즈로 만들려면 정답을 선택하세요."
              },
              "pt-BR": {
                singular: "Agora, esta é uma pergunta de enquete. Selecione uma resposta correta para criar um questionário."
              },
              "zh-CN": {
                singular: "现在这是一个调查问题。选择一个正确答案以将其设为测验。"
              }
            }
          }),
          variant: "neutral",
          duration: 0
        });
      }, [_v0]),
      notifyResultScreenRemoved: (0, _v2.useCallback)(() => {
        _v0({
          title: (0, _v10.translate)({
            singular: "Result screen was removed because this video no longer has any quiz questions.",
            dictionary: {
              es: {
                singular: "La pantalla de resultados se eliminó porque este video ya no tiene preguntas de cuestionario."
              },
              "de-DE": {
                singular: "Der Ergebnisbildschirm wurde entfernt, da dieses Video keine Quizfragen mehr enthält."
              },
              "fr-FR": {
                singular: "L'écran des résultats a été supprimé, car cette vidéo ne contient plus de questions de quiz."
              },
              "ja-JP": {
                singular: "この動画にはクイズの質問がなくなったため、結果画面が削除されました。"
              },
              "ko-KR": {
                singular: "이 동영상은 더 이상 퀴즈 질문이 없어 결과 화면이 삭제되었습니다."
              },
              "pt-BR": {
                singular: "A tela de resultados foi removida porque este vídeo não tem mais perguntas de questionário."
              },
              "zh-CN": {
                singular: "结果屏幕已被移除，因为此视频不再有任何测验题目。"
              }
            }
          }),
          variant: "neutral",
          duration: 0
        });
      }, [_v0])
    };
  }]);
}