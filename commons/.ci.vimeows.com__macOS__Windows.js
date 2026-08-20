{
  "use strict";

  let _v1;
  var _v2,
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.i(0);
  let _v10 = location.host.endsWith(".ci.vimeows.com"),
    _v11 = "macOS" === function () {
      let _v0;
      if (navigator.userAgentData) {
        let _v0 = navigator.userAgentData.platform;
        return _v0.includes("macOS") ? "macOS" : _v0.includes("Windows") ? "Windows" : _v0 || "Unknown";
      }
      return (_v0 = navigator.platform.toLowerCase()).includes("mac") ? "macOS" : _v0.includes("win") ? "Windows" : _v0.includes("linux") ? "Linux" : "Unknown";
    }(),
    _v12 = {
      code: "ArrowRight",
      representation: "→"
    },
    _v13 = {
      code: "ArrowLeft",
      representation: "←"
    },
    _v14 = {
      code: "Space",
      representation: "Space"
    },
    _v15 = {
      code: "Shift",
      representation: "Shift"
    },
    _v16 = {
      code: "AnyDigit",
      representation: "0–9"
    },
    _v17 = {
      code: "Slash",
      representation: "/"
    },
    _v18 = {
      code: "Meta",
      representation: _v11 ? "⌘" : "^"
    },
    _v19 = {
      code: "L",
      representation: "L"
    },
    _v20 = {
      code: "J",
      representation: "J"
    },
    _v21 = {
      code: "M",
      representation: "M"
    },
    _v22 = {
      code: "K",
      representation: "K"
    },
    _v23 = {
      code: "I",
      representation: "I"
    },
    _v24 = {
      code: "O",
      representation: "O"
    },
    _v25 = {
      fiveStepsBackwards: [_v15, _v13],
      fiveStepsForward: [_v15, _v12],
      stepBackwards: _v13,
      stepForward: _v12,
      toggleCloseCaptions: [_v18, {
        code: "C",
        representation: "C"
      }],
      toggleFullScreen: {
        code: "F",
        representation: "F"
      },
      toggleMuted: _v21,
      togglePlayPause: _v14,
      volumeDown: {
        code: "ArrowDown",
        representation: "↓"
      },
      volumeUp: {
        code: "ArrowUp",
        representation: "↑"
      },
      increasePlaybackRate: [_v19],
      decreasePlaybackRate: [_v20],
      increasePlaybackRateSlow: [_v15, _v19],
      decreasePlaybackRateSlow: [_v15, _v20],
      toggleLoop: [_v18, _v17],
      shuttleStop: _v22,
      playWithPrerollAndPostroll: [_v15, _v14],
      playAround: [_v15, _v22],
      goToNextComment: [_v15, _v21],
      goToPreviousComment: [_v15, _v18, _v21],
      toggleShortcutsLegend: [_v15, _v17],
      setVolumePreset: _v16,
      markInByShortcut: [_v23],
      markOutByShortcut: [_v24],
      clearIn: [_v18, _v23],
      clearOut: [_v18, _v24],
      clearInAndOut: [_v18, {
        code: "X",
        representation: "X"
      }],
      gotoIn: [_v15, _v23],
      gotoOut: [_v15, _v24]
    },
    _v26 = Object.entries(_v25).reduce((_v0, _v1) => {
      let [_v2, _v3] = _v1;
      return _v0[_v2] = _v28(_v3, "representation"), _v0;
    }, {}),
    _v27 = Object.entries(_v25).reduce((_v0, _v1) => {
      let [_v2, _v3] = _v1;
      return _v0[_v28(_v3, "code").join("+")] = _v2, _v0;
    }, {});
  function _v28(_v0, _v1) {
    return "string" == typeof _v0 ? [_v0] : [_v0].flatMap(_v0 => _v0).map(_v0 => _v0[_v1]);
  }
  let {
      togglePlayPause: _v29,
      stepForward: _v30,
      stepBackwards: _v31,
      toggleShortcutsLegend: _v32,
      toggleFullScreen: _v33,
      toggleLoop: _v34
    } = _v26,
    _v35 = ({
      children: _v0
    }) => (0, _v3.jsx)(_v8.Text, {
      as: "span",
      variant: "body-md",
      color: "gray.400",
      children: _v0
    }),
    _v36 = {
      audio: (0, _v9.translate)({
        singular: "Audio",
        dictionary: {
          "ja-JP": {
            singular: "オーディオ"
          },
          "ko-KR": {
            singular: "오디오"
          },
          "pt-BR": {
            singular: "Áudio"
          },
          "zh-CN": {
            singular: "音频"
          }
        }
      }),
      video: (0, _v9.translate)({
        singular: "Video",
        dictionary: {
          "fr-FR": {
            singular: "Vidéo"
          },
          "ja-JP": {
            singular: "動画"
          },
          "ko-KR": {
            singular: "동영상"
          },
          "pt-BR": {
            singular: "Vídeo"
          },
          "zh-CN": {
            singular: "视频"
          }
        }
      }),
      comments: (0, _v9.translate)({
        singular: "Comments",
        dictionary: {
          es: {
            singular: "Comentarios"
          },
          "de-DE": {
            singular: "Kommentare"
          },
          "fr-FR": {
            singular: "Commentaires"
          },
          "ja-JP": {
            singular: "コメント"
          },
          "ko-KR": {
            singular: "소감"
          },
          "pt-BR": {
            singular: "Comentários"
          },
          "zh-CN": {
            singular: "评论"
          }
        }
      }),
      markers: (0, _v9.translate)({
        singular: "Markers",
        dictionary: {
          es: {
            singular: "Marcadores"
          },
          "de-DE": {
            singular: "Markierungen"
          },
          "fr-FR": {
            singular: "Marqueurs"
          },
          "ja-JP": {
            singular: "マーカー"
          },
          "ko-KR": {
            singular: "마커"
          },
          "pt-BR": {
            singular: "Marcadores"
          },
          "zh-CN": {
            singular: "标记"
          }
        }
      }),
      subtitles: (0, _v9.translate)({
        singular: "CC/Subtitles",
        dictionary: {
          es: {
            singular: "CC/Subtítulos"
          },
          "de-DE": {
            singular: "CC/Untertitel"
          },
          "fr-FR": {
            singular: "CC/sous-titres"
          },
          "ja-JP": {
            singular: "CC/字幕"
          },
          "ko-KR": {
            singular: "CC/자막"
          },
          "pt-BR": {
            singular: "CC/legendas"
          },
          "zh-CN": {
            singular: "隐藏式字幕/字幕"
          }
        }
      })
    },
    _v37 = {
      video: {
        togglePlayPause: (0, _v9.translate)({
          singular: "Play and pause",
          dictionary: {
            es: {
              singular: "Reproducir y pausar"
            },
            "de-DE": {
              singular: "Wiedergeben und Anhalten"
            },
            "fr-FR": {
              singular: "Lire et mettre sur pause"
            },
            "ja-JP": {
              singular: "再生と一時停止"
            },
            "ko-KR": {
              singular: "재생/일시 정지"
            },
            "pt-BR": {
              singular: "Reproduzir e pausar"
            },
            "zh-CN": {
              singular: "播放和暂停"
            }
          }
        }),
        toggleFullScreen: (0, _v9.translate)({
          singular: "Fullscreen",
          dictionary: {
            es: {
              singular: "Pantalla completa"
            },
            "de-DE": {
              singular: "Vollbild"
            },
            "fr-FR": {
              singular: "Plein écran"
            },
            "ja-JP": {
              singular: "全画面"
            },
            "ko-KR": {
              singular: "전체 화면"
            },
            "pt-BR": {
              singular: "Tela cheia"
            },
            "zh-CN": {
              singular: "全屏"
            }
          }
        }),
        toggleLoop: (0, _v9.translate)({
          singular: "Loop",
          dictionary: {
            es: {
              singular: "Bucle"
            },
            "fr-FR": {
              singular: "Lire en boucle"
            },
            "ja-JP": {
              singular: "ループ"
            },
            "ko-KR": {
              singular: "반복 재생"
            },
            "zh-CN": {
              singular: "循环播放"
            }
          }
        }),
        stepForward: (0, _v9.translate)({
          singular: "Go forward 1 frame",
          dictionary: {
            es: {
              singular: "Avanzar 1 fotograma"
            },
            "de-DE": {
              singular: "1 Frame vorwärtsgehen"
            },
            "fr-FR": {
              singular: "Avancer d'une image"
            },
            "ja-JP": {
              singular: "1フレーム進む"
            },
            "ko-KR": {
              singular: "1프레임 앞으로 이동"
            },
            "pt-BR": {
              singular: "Avançar 1 quadro"
            },
            "zh-CN": {
              singular: "前进 1 帧"
            }
          }
        }),
        stepBackwards: (0, _v9.translate)({
          singular: "Go backward 1 frame",
          dictionary: {
            es: {
              singular: "Retroceder 1 fotograma"
            },
            "de-DE": {
              singular: "1 Frame zurückgehen"
            },
            "fr-FR": {
              singular: "Reculer d'une image"
            },
            "ja-JP": {
              singular: "1フレーム戻る"
            },
            "ko-KR": {
              singular: "1프레임 뒤로 이동"
            },
            "pt-BR": {
              singular: "Retroceder 1 quadro"
            },
            "zh-CN": {
              singular: "后退 1 帧"
            }
          }
        }),
        fiveStepsForward: (0, _v9.translate)({
          singular: "Go forward 5 frames",
          dictionary: {
            es: {
              singular: "Avanzar 5 fotogramas"
            },
            "de-DE": {
              singular: "5 Frames vorwärtsgehen"
            },
            "fr-FR": {
              singular: "Avancer de 5 images"
            },
            "ja-JP": {
              singular: "5フレーム進む"
            },
            "ko-KR": {
              singular: "5프레임 앞으로 이동"
            },
            "pt-BR": {
              singular: "Avançar 5 quadros"
            },
            "zh-CN": {
              singular: "前进 5 帧"
            }
          }
        }),
        fiveStepsBackwards: (0, _v9.translate)({
          singular: "Go backward 5 frames",
          dictionary: {
            es: {
              singular: "Retroceder 5 fotogramas"
            },
            "de-DE": {
              singular: "5 Frames zurückgehen"
            },
            "fr-FR": {
              singular: "Reculer de 5 images"
            },
            "ja-JP": {
              singular: "5フレーム戻る"
            },
            "ko-KR": {
              singular: "5프레임 뒤로 이동"
            },
            "pt-BR": {
              singular: "Retroceder 5 quadros"
            },
            "zh-CN": {
              singular: "后退 5 帧"
            }
          }
        }),
        decreasePlaybackRate: (0, _v9.translate)({
          singular: "Shuttle left",
          dictionary: {
            es: {
              singular: "Desplazar a la izquierda"
            },
            "de-DE": {
              singular: "Shuttle nach links"
            },
            "fr-FR": {
              singular: "Naviguer vers la gauche"
            },
            "ja-JP": {
              singular: "左へシャトル"
            },
            "ko-KR": {
              singular: "왼쪽으로 탐색"
            },
            "pt-BR": {
              singular: "Deslocar para a esquerda"
            },
            "zh-CN": {
              singular: "向左穿梭"
            }
          }
        }),
        increasePlaybackRate: (0, _v9.translate)({
          singular: "Shuttle right",
          dictionary: {
            es: {
              singular: "Desplazar a la derecha"
            },
            "de-DE": {
              singular: "Shuttle nach rechts"
            },
            "fr-FR": {
              singular: "Naviguer vers la droite"
            },
            "ja-JP": {
              singular: "右へシャトル"
            },
            "ko-KR": {
              singular: "오른쪽으로 탐색"
            },
            "pt-BR": {
              singular: "Deslocar para a direita"
            },
            "zh-CN": {
              singular: "向右穿梭"
            }
          }
        }),
        decreasePlaybackRateSlow: (0, _v9.translate)({
          singular: "Shuttle slow left",
          dictionary: {
            es: {
              singular: "Desplazar lentamente a la izquierda"
            },
            "de-DE": {
              singular: "Shuttle langsam nach links"
            },
            "fr-FR": {
              singular: "Naviguer lentement vers la gauche"
            },
            "ja-JP": {
              singular: "左へゆっくりシャトル"
            },
            "ko-KR": {
              singular: "왼쪽으로 천천히 탐색"
            },
            "pt-BR": {
              singular: "Deslocar lentamente para a esquerda"
            },
            "zh-CN": {
              singular: "慢速向左穿梭"
            }
          }
        }),
        increasePlaybackRateSlow: (0, _v9.translate)({
          singular: "Shuttle slow right",
          dictionary: {
            es: {
              singular: "Desplazar lentamente a la derecha"
            },
            "de-DE": {
              singular: "Shuttle langsam nach rechts"
            },
            "fr-FR": {
              singular: "Naviguer lentement vers la droite"
            },
            "ja-JP": {
              singular: "右へゆっくりシャトル"
            },
            "ko-KR": {
              singular: "오른쪽으로 천천히 탐색"
            },
            "pt-BR": {
              singular: "Deslocar lentamente para a direita"
            },
            "zh-CN": {
              singular: "慢速向右穿梭"
            }
          }
        }),
        shuttleStop: (0, _v9.translate)({
          singular: "Shuttle stop",
          dictionary: {
            es: {
              singular: "Detener desplazamiento"
            },
            "de-DE": {
              singular: "Shuttle anhalten"
            },
            "fr-FR": {
              singular: "Arrêter la navigation"
            },
            "ja-JP": {
              singular: "シャトル停止"
            },
            "ko-KR": {
              singular: "탐색 정지"
            },
            "pt-BR": {
              singular: "Interromper deslocamento"
            },
            "zh-CN": {
              singular: "停止穿梭"
            }
          }
        }),
        playWithPrerollAndPostroll: (0, _v9.translate)({
          singular: "Play In to Out with preroll and postroll",
          dictionary: {
            es: {
              singular: "Reproducir del punto de entrada al de salida con prerroll y postroll"
            },
            "de-DE": {
              singular: "In-to-Out mit Vorlauf und Nachlauf abspielen"
            },
            "fr-FR": {
              singular: "Lecture du point d'entrée au point de sortie avec pré-roll et post-roll"
            },
            "ja-JP": {
              singular: "イン〜アウト再生（プリロール/ポストロール付き）"
            },
            "ko-KR": {
              singular: "프리롤과 포스트롤을 포함해 시작점에서 끝점까지 재생"
            },
            "pt-BR": {
              singular: "Reproduzir do ponto de entrada até a saída com pré e pós-roll"
            },
            "zh-CN": {
              singular: "从入点到出点播放，包括前贴片和后贴片"
            }
          }
        }),
        playAround: (0, _v9.translate)({
          singular: "Play around current frame",
          dictionary: {
            es: {
              singular: "Reproducir alrededor del fotograma actual"
            },
            "de-DE": {
              singular: "Um den aktuellen Frame abspielen"
            },
            "fr-FR": {
              singular: "Lecture autour de l'image actuelle"
            },
            "ja-JP": {
              singular: "現在のフレームの前後を再生"
            },
            "ko-KR": {
              singular: "현재 프레임을 중심으로 재생"
            },
            "pt-BR": {
              singular: "Reproduzir o vídeo a partir do quadro atual"
            },
            "zh-CN": {
              singular: "在当前帧前后播放"
            }
          }
        })
      },
      audio: {
        setVolumePreset: (0, _v9.translate)({
          singular: "Set volume",
          dictionary: {
            es: {
              singular: "Ajustar volumen"
            },
            "de-DE": {
              singular: "Lautstärke einstellen"
            },
            "fr-FR": {
              singular: "Régler le volume"
            },
            "ja-JP": {
              singular: "音量の設定"
            },
            "ko-KR": {
              singular: "볼륨 설정"
            },
            "pt-BR": {
              singular: "Definir volume"
            },
            "zh-CN": {
              singular: "设置音量"
            }
          }
        }),
        volumeUp: (0, _v9.translate)({
          singular: "Volume up",
          dictionary: {
            es: {
              singular: "Subir el volumen"
            },
            "de-DE": {
              singular: "Lautstärke aufdrehen"
            },
            "fr-FR": {
              singular: "Augmenter le volume"
            },
            "ja-JP": {
              singular: "音量を上げる"
            },
            "ko-KR": {
              singular: "음량 올리기"
            },
            "pt-BR": {
              singular: "Aumentar volume"
            },
            "zh-CN": {
              singular: "提高音量"
            }
          }
        }),
        volumeDown: (0, _v9.translate)({
          singular: "Volume down",
          dictionary: {
            es: {
              singular: "Bajar el volumen"
            },
            "de-DE": {
              singular: "Lautstärke runter"
            },
            "fr-FR": {
              singular: "Baisser le volume"
            },
            "ja-JP": {
              singular: "音声を下げる"
            },
            "ko-KR": {
              singular: "음량 줄이기"
            },
            "pt-BR": {
              singular: "Abaixar volume"
            },
            "zh-CN": {
              singular: "降低音量"
            }
          }
        })
      },
      comments: {
        goToNextComment: (0, _v9.translate)({
          singular: "Go to next comment",
          dictionary: {
            es: {
              singular: "Ir al siguiente comentario"
            },
            "de-DE": {
              singular: "Zum nächsten Kommentar gehen"
            },
            "fr-FR": {
              singular: "Accéder au commentaire suivant"
            },
            "ja-JP": {
              singular: "次のコメント"
            },
            "ko-KR": {
              singular: "다음 댓글로 이동"
            },
            "pt-BR": {
              singular: "Ir para o próximo comentário"
            },
            "zh-CN": {
              singular: "转到下一条评论"
            }
          }
        }),
        goToPreviousComment: (0, _v9.translate)({
          singular: "Go to previous comment",
          dictionary: {
            es: {
              singular: "Ir al comentario anterior"
            },
            "de-DE": {
              singular: "Zum vorherigen Kommentar gehen"
            },
            "fr-FR": {
              singular: "Accéder au commentaire précédent"
            },
            "ja-JP": {
              singular: "前のコメント"
            },
            "ko-KR": {
              singular: "이전 댓글로 이동"
            },
            "pt-BR": {
              singular: "Ir para o comentário anterior"
            },
            "zh-CN": {
              singular: "转到上一条评论"
            }
          }
        })
      },
      markers: {
        markInByShortcut: (0, _v9.translate)({
          singular: "Mark In",
          dictionary: {
            es: {
              singular: "Marcar entrada"
            },
            "fr-FR": {
              singular: "Marquer le point de début"
            },
            "ja-JP": {
              singular: "インポイントをマーク"
            },
            "ko-KR": {
              singular: "시작점 지정"
            },
            "pt-BR": {
              singular: "Marcar entrada"
            },
            "zh-CN": {
              singular: "标记入点"
            }
          }
        }),
        markOutByShortcut: (0, _v9.translate)({
          singular: "Mark Out",
          dictionary: {
            es: {
              singular: "Marcar salida"
            },
            "fr-FR": {
              singular: "Marquer le point de fin"
            },
            "ja-JP": {
              singular: "アウトポイントをマーク"
            },
            "ko-KR": {
              singular: "끝점 지정"
            },
            "pt-BR": {
              singular: "Marcar saída"
            },
            "zh-CN": {
              singular: "标记出点"
            }
          }
        }),
        clearIn: (0, _v9.translate)({
          singular: "Clear In",
          dictionary: {
            es: {
              singular: "Borrar marca de entrada"
            },
            "fr-FR": {
              singular: "Effacer le point de début"
            },
            "ja-JP": {
              singular: "インポイントをクリア"
            },
            "ko-KR": {
              singular: "시작점 삭제"
            },
            "pt-BR": {
              singular: "Apagar marca de entrada"
            },
            "zh-CN": {
              singular: "清除入点"
            }
          }
        }),
        clearOut: (0, _v9.translate)({
          singular: "Clear Out",
          dictionary: {
            es: {
              singular: "Borrar marca de salida"
            },
            "fr-FR": {
              singular: "Effacer le point de fin"
            },
            "ja-JP": {
              singular: "アウトポイントをクリア"
            },
            "ko-KR": {
              singular: "끝점 삭제"
            },
            "pt-BR": {
              singular: "Apagar marca de saída"
            },
            "zh-CN": {
              singular: "清除出点"
            }
          }
        }),
        clearInAndOut: (0, _v9.translate)({
          singular: "Clear In And Out",
          dictionary: {
            es: {
              singular: "Borrar marca de entrada y salida"
            },
            "de-DE": {
              singular: "Clear In und Out"
            },
            "fr-FR": {
              singular: "Effacer les points de début et fin"
            },
            "ja-JP": {
              singular: "イン/アウトポイントをクリア"
            },
            "ko-KR": {
              singular: "시작점/끝점 삭제"
            },
            "pt-BR": {
              singular: "Apagar marcas de entrada e saída"
            },
            "zh-CN": {
              singular: "清除入点和出点"
            }
          }
        }),
        gotoIn: (0, _v9.translate)({
          singular: "Go to In",
          dictionary: {
            es: {
              singular: "Ir a la marca de entrada"
            },
            "de-DE": {
              singular: "Zu In gehen"
            },
            "fr-FR": {
              singular: "Accéder au point de début"
            },
            "ja-JP": {
              singular: "インポイントに移動"
            },
            "ko-KR": {
              singular: "시작점으로 이동"
            },
            "pt-BR": {
              singular: "Ir para a marca de entrada"
            },
            "zh-CN": {
              singular: "转到入点"
            }
          }
        }),
        gotoOut: (0, _v9.translate)({
          singular: "Go to Out",
          dictionary: {
            es: {
              singular: "Ir a la marca de salida"
            },
            "de-DE": {
              singular: "Zu Out gehen"
            },
            "fr-FR": {
              singular: "Accéder au point de fin"
            },
            "ja-JP": {
              singular: "アウトポイントに移動"
            },
            "ko-KR": {
              singular: "끝점으로 이동"
            },
            "pt-BR": {
              singular: "Ir para a marca de saída"
            },
            "zh-CN": {
              singular: "转到出点"
            }
          }
        })
      },
      subtitles: {
        toggleCloseCaptions: (0, _v9.translate)({
          singular: "Show and hide CC/subtitles",
          dictionary: {
            es: {
              singular: "Mostrar y ocultar CC/Subtítulos"
            },
            "de-DE": {
              singular: "CC/Untertitel ein- und ausblenden"
            },
            "fr-FR": {
              singular: "Afficher et masquer les sous-titres/CC"
            },
            "ja-JP": {
              singular: "CC/字幕の表示/非表示"
            },
            "ko-KR": {
              singular: "CC/자막 표시/숨기기"
            },
            "pt-BR": {
              singular: "Exibir e ocultar CC/legendas"
            },
            "zh-CN": {
              singular: "显示和隐藏隐藏式字幕/字幕"
            }
          }
        })
      }
    },
    _v38 = {
      play: (0, _v9.translate)({
        singular: "Play {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v29
          }, "togglePlay")
        },
        dictionary: {
          es: {
            singular: "Reproducir {SHORTCUT}"
          },
          "de-DE": {
            singular: "Wiedergabe {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Lire {SHORTCUT}"
          },
          "ja-JP": {
            singular: "再生 {SHORTCUT}"
          },
          "ko-KR": {
            singular: "재생 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Reproduzir {SHORTCUT}"
          },
          "zh-CN": {
            singular: "播放 {SHORTCUT}"
          }
        }
      }),
      pause: (0, _v9.translate)({
        singular: "Pause {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v29
          }, "togglePause")
        },
        dictionary: {
          es: {
            singular: "Pausar {SHORTCUT}"
          },
          "de-DE": {
            singular: "Anhalten {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Mettre en pause {SHORTCUT}"
          },
          "ja-JP": {
            singular: "一時停止 {SHORTCUT}"
          },
          "ko-KR": {
            singular: "일시 정지 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Pausar {SHORTCUT}"
          },
          "zh-CN": {
            singular: "暂停 {SHORTCUT}"
          }
        }
      }),
      frameForward: (0, _v9.translate)({
        singular: "Step forward one frame {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v30
          }, "stepForward")
        },
        dictionary: {
          es: {
            singular: "Avanzar un fotograma {SHORTCUT}"
          },
          "de-DE": {
            singular: "Einen Frame vorwärtsgehen {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Avancer d'une image {SHORTCUT}"
          },
          "ja-JP": {
            singular: "1フレーム進む {SHORTCUT}"
          },
          "ko-KR": {
            singular: "한 프레임 앞으로 이동 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Avançar um quadro {SHORTCUT}"
          },
          "zh-CN": {
            singular: "前进一帧 {SHORTCUT}"
          }
        }
      }),
      frameBackward: (0, _v9.translate)({
        singular: "Step back one frame {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v31
          }, "stepBackwards")
        },
        dictionary: {
          es: {
            singular: "Retroceder un fotograma {SHORTCUT}"
          },
          "de-DE": {
            singular: "Einen Frame zurückgehen {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Reculer d'une image {SHORTCUT}"
          },
          "ja-JP": {
            singular: "1フレーム戻る {SHORTCUT}"
          },
          "ko-KR": {
            singular: "한 프레임 뒤로 이동 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Retroceder um quadro {SHORTCUT}"
          },
          "zh-CN": {
            singular: "后退一帧 {SHORTCUT}"
          }
        }
      }),
      toggleShortcutsLegend: (0, _v9.translate)({
        singular: "Keyboard shortcuts {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v32
          }, "toggleShortcuts")
        },
        dictionary: {
          es: {
            singular: "Atajos de teclado {SHORTCUT}"
          },
          "de-DE": {
            singular: "Tastaturkürzel {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Raccourcis clavier {SHORTCUT}"
          },
          "ja-JP": {
            singular: "キーボードショートカット {SHORTCUT}"
          },
          "ko-KR": {
            singular: "키보드 단축키 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Atalhos do teclado {SHORTCUT}"
          },
          "zh-CN": {
            singular: "键盘快捷键 {SHORTCUT}"
          }
        }
      }),
      toggleFullScreen: (0, _v9.translate)({
        singular: "Fullscreen {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v33
          }, "fullscreen")
        },
        dictionary: {
          es: {
            singular: "Pantalla completa {SHORTCUT}"
          },
          "de-DE": {
            singular: "Vollbild {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Plein écran {SHORTCUT}"
          },
          "ja-JP": {
            singular: "フルスクリーン {SHORTCUT}"
          },
          "ko-KR": {
            singular: "전체 화면 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Tela cheia {SHORTCUT}"
          },
          "zh-CN": {
            singular: "全屏 {SHORTCUT}"
          }
        }
      }),
      toggleLoop: (0, _v9.translate)({
        singular: "Loop {SHORTCUT}",
        replacements: {
          SHORTCUT: (0, _v3.jsx)(_v35, {
            children: _v34
          }, "loop")
        },
        dictionary: {
          es: {
            singular: "Bucle {SHORTCUT}"
          },
          "fr-FR": {
            singular: "Boucle {SHORTCUT}"
          },
          "ja-JP": {
            singular: "ループ {SHORTCUT}"
          },
          "ko-KR": {
            singular: "반복 재생 {SHORTCUT}"
          },
          "pt-BR": {
            singular: "Repetir {SHORTCUT}"
          },
          "zh-CN": {
            singular: "循环 {SHORTCUT}"
          }
        }
      })
    };
  var _v39 = _v0.i(0);
  _v0.s(["PlayerActionsContext", () => _v72, "ProvidePlayerActions", () => _v73], 0);
  var _v40 = _v0.i(0);
  let _v41 = {
      label: "1x",
      value: 1
    },
    _v42 = {
      label: "2x",
      value: 2
    },
    _v43 = [{
      label: "-8x",
      value: -8
    }, {
      label: "-4x",
      value: -4
    }, {
      label: "-2x",
      value: -2
    }, {
      label: "-1.75x",
      value: -1.75
    }, {
      label: "-1.5x",
      value: -1.5
    }, {
      label: "-1.25x",
      value: -1.25
    }, {
      label: "-1x",
      value: -1
    }, {
      label: "-0.75x",
      value: -.75
    }, {
      label: "-0.5x",
      value: -.5
    }, {
      label: "-0.25x",
      value: -.25
    }].concat([{
      label: "0.25x",
      value: .25
    }, {
      label: "0.5x",
      value: .5
    }, {
      label: "0.75x",
      value: .75
    }, _v41, {
      label: "1.25x",
      value: 1.25
    }, {
      label: "1.5x",
      value: 1.5
    }, {
      label: "1.75x",
      value: 1.75
    }, _v42, {
      label: "4x",
      value: 4
    }, {
      label: "8x",
      value: 8
    }]),
    _v44 = _v43[0].value,
    _v45 = _v43[_v43.length - 1].value,
    _v46 = (0, _v40.create)((_v0, _v1) => ({
      ..._v48(),
      update: _v0 => {
        _v0({
          ..._v1(),
          ..._v0
        });
      }
    }));
  function _v47(_v0) {
    return _v43.reduce((_v0, _v1) => Math.abs(_v1.value - _v0) < Math.abs(_v0.value - _v0) ? _v1 : _v0);
  }
  function _v48() {
    return {
      breakpoints: [],
      paused: !0,
      playbackRate: _v41,
      playerSupportSpeedChange: !1,
      playerSupportFastPlaybackRate: !1,
      duration: 0,
      currentTime: 0,
      bufferedTime: 0,
      timeFormat: "seconds",
      fps: 30,
      inMarkerTime: null,
      outMarkerTime: null,
      extendedMarkerTime: 0,
      loop: !1,
      muted: !1,
      volume: 1,
      isFullscreen: !1,
      isShortcutsModalShown: !1,
      textTracks: [],
      audioTracks: [],
      qualities: [],
      commentsTimeCodes: [],
      textTrack: void 0,
      audioTrack: void 0,
      quality: void 0
    };
  }
  function _v49() {
    return _v46(_v0 => _v0.update);
  }
  _v0.s(["VOLUME_ADJUST_STEP", () => _v61, "Volume", () => _v62], 0);
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  function _v60(..._v0) {
    let _v1 = (0, _v39.useRef)(_v0);
    _v1.current = _v0;
    let _v2 = (0, _v39.useCallback)(_v0 => _v1.current.reduce((_v0, _v1) => (_v0[_v1] = _v0[_v1], _v0), {}), []);
    return _v46((0, _v59.useShallow)(_v2));
  }
  _v0.s(["usePlayerState", 0, _v60], 0);
  let _v61 = .01;
  function _v62() {
    let {
        setVolume: _v0,
        toggleMuted: _v1
      } = _v74("setVolume", "volumeUp", "volumeDown", "toggleMuted", "setVolumePreset"),
      {
        muted: _v2,
        volume: _v3
      } = _v60("muted", "volume");
    return (0, _v3.jsxs)(_v51.Popover, {
      trigger: "hover",
      placement: "top",
      children: [(0, _v3.jsx)(_v53.PopoverTrigger, {
        children: (0, _v3.jsx)(_v50.Box, {
          children: (0, _v3.jsx)(_v5.Tooltip, {
            label: (0, _v9.translate)({
              singular: "Volume",
              dictionary: {
                es: {
                  singular: "Volumen"
                },
                "de-DE": {
                  singular: "Lautstärke"
                },
                "ja-JP": {
                  singular: "音量"
                },
                "ko-KR": {
                  singular: "음량"
                },
                "zh-CN": {
                  singular: "音量"
                }
              }
            }),
            children: (0, _v3.jsx)(_v4.IconButton, {
              "aria-label": "Volume",
              variant: "tertiary",
              size: "md",
              icon: _v2 ? (0, _v3.jsx)(_v57.VolumeOff, {}) : (0, _v3.jsx)(_v58.VolumeOn, {}),
              onClick: _v1
            })
          })
        })
      }), (0, _v3.jsx)(_v54.Portal, {
        children: (0, _v3.jsx)(_v52.PopoverContent, {
          width: "md",
          height: "10rem",
          paddingY: "lg",
          children: (0, _v3.jsxs)(_v55.Slider, {
            orientation: "vertical",
            minHeight: "100%",
            min: 0,
            max: 1,
            step: _v61,
            value: _v2 ? 0 : _v3,
            onChange: _v0,
            children: [(0, _v3.jsx)(_v56.SliderTrack, {
              children: (0, _v3.jsx)(_v56.SliderFilledTrack, {})
            }), (0, _v3.jsx)(_v56.SliderThumb, {})]
          })
        })
      })]
    });
  }
  function _v63(_v0, _v1, _v2) {
    return Math.min(Math.max(_v0, _v1), _v2);
  }
  function _v64(_v0, _v1) {
    let {
      x: _v2,
      width: _v3
    } = _v0.getBoundingClientRect();
    return _v63((_v1 - _v2) / _v3, 0, 1);
  }
  let _v65 = /^chakra-modal.?/i,
    _v66 = /^chakra-menu.?/i,
    _v67 = (_v2 = _v0 => {
      var _v1;
      return function (_v0) {
        if ("menu" === _v0.getAttribute("role")) return !0;
        for (let _v0 of _v0.classList) if (_v66.test(_v0)) return !0;
        return !1;
      }(_v0) || function (_v0) {
        if ("dialog" === _v0.getAttribute("role")) return !0;
        for (let _v0 of _v0.classList) if (_v65.test(_v0)) return !0;
        return !1;
      }(_v0) || !!("INPUT" === (_v1 = _v0).tagName || _v1.classList.contains("chakra-input")) || "true" === _v1.getAttribute("contenteditable");
    }, _v1 = (_v0, _v1) => {
      let _v2 = _v2(_v0);
      return !_v2 && _v1 < 3 && _v0.parentElement ? _v1(_v0.parentElement, _v1 + 1) : _v2;
    }, _v0 => _v1(_v0, 0));
  function _v68() {
    let {
      playbackRate: _v0,
      playerSupportSpeedChange: _v1,
      playerSupportFastPlaybackRate: _v2
    } = _v60("playbackRate", "playerSupportSpeedChange", "playerSupportFastPlaybackRate");
    return (0, _v39.useMemo)(() => _v69(_v0.value, _v1, _v2), [_v0.value, _v1, _v2]);
  }
  function _v69(_v0, _v1, _v2) {
    return _v0 < 0 || (_v1 ? !_v2 && _v0 > _v42.value : _v0 !== _v41.value);
  }
  function _v70() {
    let {
      playbackRate: _v0,
      playerSupportSpeedChange: _v1,
      playerSupportFastPlaybackRate: _v2
    } = _v46.getState();
    return _v69(_v0.value, _v1, _v2);
  }
  function _v71(_v0) {
    return _v0.find(({
      enabled: _v0
    }) => _v0) ?? _v0.at(0);
  }
  let _v72 = (0, _v39.createContext)(null),
    _v73 = ({
      children: _v0,
      player: _v1
    }) => {
      let _v2, _v3, _v4, _v5, _v6, _v7, _v8, _v9, _v10, _v11;
      _v2 = _v49(), (0, _v39.useEffect)(() => {
        if (_v1?.config?.embed?.settings?.speed) return _v1.config.embed.settings.fast_playback_rates || _v1._setEmbedSetting("fast_playback_rates", 1), () => {
          _v1._setEmbedSetting("fast_playback_rates", 0);
        };
      }, [_v1]), (0, _v39.useEffect)(() => {
        let _v0 = _v1.textTracks.map(({
            mode: _v0,
            ..._v1
          }) => ({
            ..._v1,
            mode: _v0,
            enabled: "showing" === _v0
          })),
          _v1 = _v1._backbone.audioTracks;
        _v2({
          duration: _v1.duration,
          currentTime: _v1.currentTime,
          loop: _v1.loop,
          muted: _v1.muted || 0 === _v1.volume,
          volume: _v1.volume,
          isFullscreen: _v1.fullscreen,
          qualities: _v1.qualities,
          quality: _v1.qualities.find(({
            id: _v0
          }) => _v0 === _v1.quality),
          textTracks: _v0,
          textTrack: _v71(_v0),
          audioTracks: _v1,
          audioTrack: _v71(_v1),
          fps: _v1.config.video.fps,
          playerSupportSpeedChange: !!_v1.config.embed.settings.speed,
          playerSupportFastPlaybackRate: !!_v1.config.embed.settings.fast_playback_rates
        });
        let _v2 = () => {
            _v1.pauseKeyboard(), _v70() || _v2({
              paused: _v1.paused
            });
          },
          _v3 = ({
            fullscreen: _v0
          }) => {
            _v2({
              isFullscreen: _v0
            });
          },
          _v4 = ({
            muted: _v0,
            volume: _v1
          }) => {
            _v2({
              muted: _v0 || 0 === _v1,
              volume: _v1
            });
          },
          _v5 = ({
            quality: _v0
          }) => {
            _v2({
              quality: _v1.qualities.find(({
                id: _v0
              }) => _v0 === _v0)
            });
          },
          _v6 = ({
            playbackRate: _v0
          }) => {
            _v70() || _v2({
              playbackRate: _v47(_v0)
            });
          },
          _v7 = ({
            seconds: _v0
          }) => {
            _v2({
              currentTime: _v0
            });
          },
          _v8 = ({
            duration: _v0
          }) => {
            _v2({
              duration: _v0
            });
          },
          _v9 = ({
            seconds: _v0
          }) => {
            _v2({
              bufferedTime: _v0
            });
          },
          _v10 = ({
            label: _v0,
            language: _v1,
            kind: _v2
          }) => {
            if (_v0 && _v1 && _v2) _v2({
              textTrack: {
                label: _v0,
                language: _v1,
                kind: _v2,
                mode: "showing",
                enabled: !0
              }
            });else {
              let _v0 = _v46.getState().textTrack;
              _v2({
                textTrack: _v0 ? {
                  ..._v0,
                  enabled: !1
                } : void 0
              });
            }
          };
        return _v1.on("play", _v2), _v1.on("pause", _v2), _v1.on("fullscreenchange", _v3), _v1.on("volumechange", _v4), _v1.on("qualitychange", _v5), _v1.on("ratechange", _v6), _v1.on("durationchange", _v8), _v1.on("timeupdate", _v7), _v1.on("seeked", _v7), _v1.on("progress", _v9), _v1.on("texttrackchange", _v10), () => {
          _v1.off("play", _v2), _v1.off("pause", _v2), _v1.off("fullscreenchange", _v3), _v1.off("volumechange", _v4), _v1.off("qualitychange", _v5), _v1.off("ratechange", _v6), _v1.off("durationchange", _v8), _v1.off("timeupdate", _v7), _v1.off("seeked", _v7), _v1.off("progress", _v9), _v1.off("texttrackchange", _v10);
        };
      }, [_v1, _v2]), (0, _v39.useEffect)(() => () => {
        _v2(_v48());
      }, [_v2]), function (_v0) {
        let {
            paused: _v1,
            playbackRate: _v2,
            playerSupportSpeedChange: _v3
          } = _v60("paused", "playbackRate", "playerSupportSpeedChange"),
          _v4 = _v68();
        (0, _v39.useEffect)(() => {
          _v4 && _v0.pause();
        }, [_v0, _v4]), (0, _v39.useEffect)(() => {
          !_v4 && (_v1 ? _v0.paused || _v0.pause() : _v0.paused && _v0.play());
        }, [_v1, _v0, _v4]), (0, _v39.useEffect)(() => {
          !_v4 && _v3 && (_v0.playbackRate = _v2.value);
        }, [_v2.value, _v0, _v4, _v3]);
      }(_v1);
      let {
          actions: _v12
        } = (_v3 = _v49(), _v4 = (0, _v39.useCallback)(async _v0 => {
          _v3({
            currentTime: _v0
          }), 0 === _v1.played.length && (await _v1.play(), _v1.pause()), await new Promise(_v0 => {
            let _v1 = () => {
              _v1.off("seeked", _v1), _v0();
            };
            _v1.on("seeked", _v1), _v1.seekTo(_v0);
          });
        }, [_v1, _v3]), _v5 = (0, _v39.useCallback)(async (_v0 = 1) => {
          let {
            currentTime: _v1,
            duration: _v2,
            fps: _v3
          } = _v46.getState();
          await _v4(_v63(_v1 + _v0 / _v3, 0, _v2));
        }, [_v4]), _v6 = (0, _v39.useCallback)(_v0 => {
          _v1.volume = _v63(_v0, 0, 1);
        }, [_v1]), _v7 = (0, _v39.useCallback)(_v0 => {
          _v6(_v1.volume + ("up" === _v0 ? _v61 : -_v61));
        }, [_v1, _v6]), _v8 = (0, _v39.useCallback)(_v0 => {
          _v3({
            playbackRate: _v47(_v0)
          });
        }, [_v3]), _v9 = (0, _v39.useCallback)(_v0 => {
          let _v1 = _v46.getState().playbackRate.value,
            _v2 = _v0(_v1);
          0 === _v2 && (_v2 = -1 * _v1), _v8(_v63(_v2, _v44, _v45));
        }, [_v8]), _v10 = (0, _v39.useCallback)(_v0 => {
          _v3({
            outMarkerTime: _v0
          });
        }, [_v3]), _v11 = (0, _v39.useCallback)(_v0 => {
          _v3({
            inMarkerTime: _v0
          });
        }, [_v3]), {
          actions: (0, _v39.useMemo)(() => ({
            setVolumePreset: _v0 => {
              if (!(_v0 instanceof KeyboardEvent)) return;
              let _v1 = parseInt(_v0.key);
              !isNaN(_v1) && function (_v0, _v1 = 0, _v2 = 9) {
                return _v0 >= _v1 && _v0 <= _v2;
              }(_v1) && _v6(_v1 / 10);
            },
            toggleShortcutsLegend: () => {
              let {
                isShortcutsModalShown: _v0
              } = _v46.getState();
              _v3({
                isShortcutsModalShown: !_v0
              });
            },
            shuttleStop: async () => {
              _v1.played.length > 0 && (_v3({
                paused: !0,
                playbackRate: _v41
              }), await _v4(0));
            },
            togglePlayPause: () => {
              let {
                paused: _v0
              } = _v46.getState();
              _v3({
                paused: !_v0
              });
            },
            toggleLoop: () => {
              _v1.loop = !_v1.loop, _v3({
                loop: _v1.loop
              });
            },
            stepForward: () => _v5(1),
            stepBackwards: () => _v5(-1),
            fiveStepsForward: () => _v5(5),
            fiveStepsBackwards: () => _v5(-5),
            toggleMuted: () => {
              let _v0 = _v1.muted || 0 === _v1.volume;
              _v1.muted = !_v0, _v0 && 0 === _v1.volume && (_v1.volume = 1);
            },
            volumeUp: () => _v7("up"),
            volumeDown: () => _v7("down"),
            toggleFullScreen: () => {
              _v1.fullscreen ? _v1.exitFullscreen() : _v1.requestFullscreen();
            },
            toggleCloseCaptions: () => {
              let {
                textTrack: _v0
              } = _v46.getState();
              _v0 && (_v0.enabled ? _v1.disableTextTrack() : _v1.enableTextTrack(_v0.language, _v0.kind));
            },
            increasePlaybackRate: () => _v9(_v0 => {
              if (_v0 >= -1 && _v0 < 1) return 1;
              let _v1 = Math.floor(_v0);
              return _v1 < 0 ? _v1 / 2 : 2 * _v1;
            }),
            decreasePlaybackRate: () => _v9(_v0 => {
              if (_v0 > -1 && _v0 <= 1) return -1;
              let _v1 = Math.ceil(_v0);
              return _v1 > 0 ? _v1 / 2 : 2 * _v1;
            }),
            increasePlaybackRateSlow: () => _v9(_v0 => _v0 + .25),
            decreasePlaybackRateSlow: () => _v9(_v0 => _v0 - .25),
            goToNextComment: async () => {
              let {
                  commentsTimeCodes: _v0,
                  currentTime: _v1
                } = _v46.getState(),
                _v2 = _v0.filter(_v0 => _v0 > _v1).at(0);
              _v2 && (await _v4(_v2));
            },
            goToPreviousComment: async () => {
              let {
                  commentsTimeCodes: _v0,
                  currentTime: _v1
                } = _v46.getState(),
                _v2 = _v0.filter(_v0 => _v0 < _v1).at(-1);
              _v2 && (await _v4(_v2));
            },
            seekTo: _v4,
            setVolume: _v6,
            setPlaybackRate: _v8,
            setQuality: _v0 => {
              _v1.quality = _v0;
            },
            setAudioTrack: _v0 => {
              _v3({
                audioTrack: _v0
              }), _v1._backbone.enableAudioTrack(_v0);
            },
            enableTextTrack: _v0 => {
              _v1.enableTextTrack(_v0.language, _v0.kind);
            },
            disableTextTrack: () => {
              _v1.disableTextTrack();
            },
            markInByShortcut: () => _v11(_v46.getState().currentTime),
            markOutByShortcut: () => _v10(_v46.getState().currentTime),
            markInTimestamp: _v11,
            markOutTimestamp: _v10,
            clearIn: () => {
              _v3({
                inMarkerTime: null
              });
            },
            clearOut: () => {
              _v3({
                outMarkerTime: null
              });
            },
            clearInAndOut: () => {
              _v3({
                outMarkerTime: null,
                inMarkerTime: null
              });
            },
            gotoIn: async () => {
              let {
                inMarkerTime: _v0
              } = _v46.getState();
              null !== _v0 && (_v3({
                paused: !0
              }), await _v4(_v0));
            },
            gotoOut: async () => {
              let {
                outMarkerTime: _v0
              } = _v46.getState();
              null !== _v0 && (_v3({
                paused: !0
              }), await _v4(_v0));
            },
            playWithPrerollAndPostroll: async () => {
              let {
                inMarkerTime: _v0,
                outMarkerTime: _v1,
                playbackRate: _v2
              } = _v46.getState();
              null !== _v0 && null !== _v1 && (_v2.value < 0 && _v3({
                playbackRate: _v41
              }), _v3({
                extendedMarkerTime: 3
              }), await _v4(Math.max(0, _v0 - 3)), _v3({
                paused: !1
              }));
            },
            playAround: async () => {
              let {
                currentTime: _v0,
                duration: _v1,
                playbackRate: _v2
              } = _v46.getState();
              _v2.value < 0 && _v3({
                playbackRate: _v41
              });
              let _v3 = Math.max(0, _v0 - 2),
                _v4 = Math.min(_v1, _v0 + 2),
                _v5 = new Promise(_v0 => {
                  _v1.on("timeupdate", function _v0({
                    seconds: _v1
                  }) {
                    _v1 >= _v4 && (_v1.off("timeupdate", _v0), _v0());
                  });
                });
              await _v4(_v3), _v3({
                paused: !1
              }), await _v5, _v3({
                paused: !0
              }), await _v4(_v0);
            }
          }), [_v7, _v11, _v10, _v9, _v1, _v4, _v8, _v6, _v5, _v3])
        }),
        _v13 = (0, _v39.useRef)(new Set());
      !function (_v0, _v1, _v2 = window) {
        let _v3 = (0, _v39.useCallback)(_v0 => {
          let _v1 = [],
            _v2 = _v0.target instanceof HTMLElement && _v0.target;
          if (_v2 && _v67(_v2)) {
            _v10 && console.debug("ignore KeyboardEvent as its from either <Input> / <Modal> / <Popover>");
            return;
          }
          _v0.shiftKey && _v1.push(_v15.code), (_v0.metaKey || _v0.ctrlKey) && _v1.push(_v18.code), _v0.altKey && _v1.push("Alt");
          let _v3 = /Digit[0-9]/g.test(_v0.code) && 0 === _v1.length ? _v16.code : "";
          _v1.push(_v0.code.replace(/key|digit/gi, ""));
          let _v4 = _v1.join("+"),
            _v5 = _v27[_v4] ?? _v27[_v3];
          if (!_v5) {
            _v10 && console.debug('could not find an "actionVariant" for a shortcut', {
              keyPath: _v4,
              actionVariant: _v5
            });
            return;
          }
          if (!_v1.current?.has(_v5)) {
            _v10 && console.debug('provided "actionVariant" is not in "watchedActions"', {
              actionVariant: _v5,
              watchedActions: _v1
            });
            return;
          }
          _v0.code === _v14.code && _v0.preventDefault(), _v0[_v5](_v0), _v10 && console.debug("executed action by shortcut", {
            actionVariant: _v5,
            keyPath: _v4
          });
        }, [_v0, _v1]);
        (0, _v39.useEffect)(() => (_v2?.addEventListener("keydown", _v3), () => _v2?.removeEventListener("keydown", _v3)), [_v3, _v2]);
      }(_v12, _v13);
      let {
        isFullscreen: _v14
      } = _v60("isFullscreen");
      !function ({
        player: _v0,
        shouldBeEnabled: _v1
      }) {
        (0, _v39.useEffect)(() => {
          let _v0 = () => {
            _v0.unpauseKeyboard(), _v0._setEmbedSetting("controls", 1);
          };
          if (!_v1) return _v0.pauseKeyboard(), _v0._setEmbedSetting("controls", 0), () => {
            _v0();
          };
          _v0();
        }, [_v0, _v1]);
      }({
        player: _v1,
        shouldBeEnabled: _v14
      });
      let _v15 = (0, _v39.useCallback)(_v0 => (_v0.forEach(_v0 => {
        _v13.current.add(_v0);
      }), () => {
        _v0.forEach(_v0 => {
          _v13.current.delete(_v0);
        });
      }), []);
      return (0, _v3.jsx)(_v72.Provider, {
        value: {
          actions: _v12,
          watchAsShortcut: _v15
        },
        children: _v0
      });
    },
    _v74 = (..._v0) => {
      let _v1 = (0, _v39.useContext)(_v72);
      if (null === _v1) throw Error('"PlayerActionsContext" not initialized');
      let {
          actions: _v2,
          watchAsShortcut: _v3
        } = _v1,
        _v4 = (0, _v39.useRef)(_v0),
        _v5 = (0, _v39.useMemo)(() => {
          if (null === _v2) throw Error('"PlayerActionsContext" not initialized');
          return _v4.current.reduce((_v0, _v1) => (_v0[_v1] = _v2[_v1], _v0), {});
        }, [_v2]);
      return (0, _v39.useEffect)(() => _v3(_v4.current), [_v3]), _v5;
    };
  _v0.s(["Fullscreen", 0, function () {
    let {
        isFullscreen: _v0
      } = _v60("isFullscreen"),
      {
        toggleFullScreen: _v1
      } = _v74("toggleFullScreen");
    return (0, _v3.jsx)(_v5.Tooltip, {
      label: _v38.toggleFullScreen,
      children: (0, _v3.jsx)(_v4.IconButton, {
        "aria-label": "Fullscreen",
        variant: "tertiary",
        size: "md",
        icon: _v0 ? (0, _v3.jsx)(_v6.CompressArrows, {}) : (0, _v3.jsx)(_v7.ExpandArrowsAlt, {}),
        onClick: _v1
      })
    });
  }], 0);
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0);
  function _v80({
    priority: _v0,
    action: _v1 = "hide",
    children: _v2
  }) {
    let {
      breakpoints: _v3
    } = _v60("breakpoints");
    return ("hide" === _v1 ? _v3.length >= _v0 : _v3.length < _v0) ? null : (0, _v3.jsx)(_v3.Fragment, {
      children: _v2
    });
  }
  var _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  function _v86({
    title: _v0,
    label: _v1,
    onClick: _v2
  }) {
    return (0, _v3.jsx)(_v81.MenuItem, {
      onClick: _v2,
      children: (0, _v3.jsxs)(_v82.HStack, {
        width: "100%",
        justifyContent: "space-between",
        gap: "2xl",
        children: [(0, _v3.jsx)(_v50.Box, {
          children: _v0
        }), (0, _v3.jsxs)(_v82.HStack, {
          children: [_v1 && (0, _v3.jsx)(_v50.Box, {
            children: _v1
          }), (0, _v3.jsx)(_v85.ChevronRight, {
            boxSize: "2xs"
          })]
        })]
      })
    });
  }
  function _v87({
    title: _v0,
    onBack: _v1,
    items: _v2,
    selectedItem: _v3,
    onSelect: _v4,
    onOff: _v5
  }) {
    return (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v88, {
        title: _v0,
        onBack: _v1
      }), "function" == typeof _v5 && (0, _v3.jsx)(_v89, {
        item: {
          label: (0, _v9.translate)({
            singular: "Off",
            dictionary: {
              es: {
                singular: "Desactivado"
              },
              "de-DE": {
                singular: "Aus"
              },
              "fr-FR": {
                singular: "Inactif"
              },
              "ja-JP": {
                singular: "オフ"
              },
              "ko-KR": {
                singular: "해제"
              },
              "pt-BR": {
                singular: "Desligar"
              },
              "zh-CN": {
                singular: "关闭"
              }
            }
          }),
          enabled: !_v3 || !_v3.enabled
        },
        onClick: _v5
      }), _v2.map(_v0 => (0, _v3.jsx)(_v89, {
        item: _v0,
        onClick: _v4
      }, _v0.label))]
    });
  }
  function _v88({
    title: _v0,
    onBack: _v1
  }) {
    return (0, _v3.jsxs)(_v81.MenuItem, {
      onClick: _v1,
      children: [(0, _v3.jsx)(_v84.ChevronLeft, {
        boxSize: "2xs"
      }), _v0]
    });
  }
  function _v89({
    item: _v0,
    onClick: _v1
  }) {
    return (0, _v3.jsxs)(_v81.MenuItem, {
      justifyContent: "space-between",
      gap: "2xl",
      onClick: () => _v1(_v0),
      children: [_v0.label, _v0.enabled ? (0, _v3.jsx)(_v83.Checkmark, {
        boxSize: "2xs"
      }) : (0, _v3.jsx)(_v50.Box, {
        boxSize: "2xs"
      })]
    });
  }
  let _v90 = "pac-quality-button",
    _v91 = "pac-next-frame",
    _v92 = "pac-previous-frame",
    _v93 = "pac-play-pause",
    _v94 = "pac-languages-button",
    _v95 = "pac-playbar-timeline",
    _v96 = "pac-playbar-marker-in",
    _v97 = "pac-playbar-marker-out",
    _v98 = "pac-comments-container",
    _v99 = "pac-comment-with-user-avatar",
    _v100 = "pac-comments-group";
  function _v101({
    state: _v0,
    setState: _v1
  }) {
    let {
        textTrack: _v2,
        textTracks: _v3,
        audioTrack: _v4,
        audioTracks: _v5
      } = _v60("textTrack", "textTracks", "audioTrack", "audioTracks"),
      {
        setAudioTrack: _v6,
        enableTextTrack: _v7,
        disableTextTrack: _v8
      } = _v74("setAudioTrack", "enableTextTrack", "disableTextTrack");
    switch (_v0) {
      case "options":
        return (0, _v3.jsxs)(_v3.Fragment, {
          children: [_v2 && (0, _v3.jsx)(_v86, {
            title: (0, _v9.translate)({
              singular: "CC/subtitles",
              dictionary: {
                es: {
                  singular: "CC/Subtítulos"
                },
                "de-DE": {
                  singular: "CC/Untertitel"
                },
                "fr-FR": {
                  singular: "CC/sous-titres"
                },
                "ja-JP": {
                  singular: "CC/字幕"
                },
                "ko-KR": {
                  singular: "CC/자막"
                },
                "pt-BR": {
                  singular: "CC/legendas"
                },
                "zh-CN": {
                  singular: "隐藏式字幕/字幕"
                }
              }
            }),
            label: _v2.enabled ? _v2.label : (0, _v9.translate)({
              singular: "Off",
              dictionary: {
                es: {
                  singular: "Desactivado"
                },
                "de-DE": {
                  singular: "Aus"
                },
                "fr-FR": {
                  singular: "Inactif"
                },
                "ja-JP": {
                  singular: "オフ"
                },
                "ko-KR": {
                  singular: "해제"
                },
                "pt-BR": {
                  singular: "Desligar"
                },
                "zh-CN": {
                  singular: "关闭"
                }
              }
            }),
            onClick: () => _v1("cc")
          }), _v4 && (0, _v3.jsx)(_v86, {
            title: (0, _v9.translate)({
              singular: "Audio",
              dictionary: {
                "ja-JP": {
                  singular: "オーディオ"
                },
                "ko-KR": {
                  singular: "오디오"
                },
                "pt-BR": {
                  singular: "Áudio"
                },
                "zh-CN": {
                  singular: "音频"
                }
              }
            }),
            label: _v4.label,
            onClick: () => _v1("audio")
          })]
        });
      case "cc":
        return (0, _v3.jsx)(_v87, {
          title: (0, _v9.translate)({
            singular: "CC/subtitles",
            dictionary: {
              es: {
                singular: "CC/Subtítulos"
              },
              "de-DE": {
                singular: "CC/Untertitel"
              },
              "fr-FR": {
                singular: "CC/sous-titres"
              },
              "ja-JP": {
                singular: "CC/字幕"
              },
              "ko-KR": {
                singular: "CC/자막"
              },
              "pt-BR": {
                singular: "CC/legendas"
              },
              "zh-CN": {
                singular: "隐藏式字幕/字幕"
              }
            }
          }),
          onBack: () => _v1("options"),
          items: _v3,
          selectedItem: _v2,
          onSelect: _v7,
          onOff: _v8
        });
      case "audio":
        return (0, _v3.jsx)(_v87, {
          title: (0, _v9.translate)({
            singular: "Audio",
            dictionary: {
              "ja-JP": {
                singular: "オーディオ"
              },
              "ko-KR": {
                singular: "오디오"
              },
              "pt-BR": {
                singular: "Áudio"
              },
              "zh-CN": {
                singular: "音频"
              }
            }
          }),
          onBack: () => _v1("options"),
          items: _v5,
          selectedItem: _v4,
          onSelect: _v6
        });
      default:
        return null;
    }
  }
  _v0.s(["Languages", 0, function () {
    let [_v0, _v1] = (0, _v39.useState)("options"),
      {
        textTrack: _v2,
        audioTrack: _v3
      } = _v60("textTrack", "audioTrack"),
      {
        toggleCloseCaptions: _v4
      } = _v74("toggleCloseCaptions");
    return _v2 || _v3 ? (0, _v3.jsxs)(_v3.Fragment, {
      children: [_v2 && (0, _v3.jsx)(_v5.Tooltip, {
        label: (0, _v9.translate)({
          singular: "CC/subtitles",
          dictionary: {
            es: {
              singular: "CC/Subtítulos"
            },
            "de-DE": {
              singular: "CC/Untertitel"
            },
            "fr-FR": {
              singular: "CC/sous-titres"
            },
            "ja-JP": {
              singular: "CC/字幕"
            },
            "ko-KR": {
              singular: "CC/자막"
            },
            "pt-BR": {
              singular: "CC/legendas"
            },
            "zh-CN": {
              singular: "隐藏式字幕/字幕"
            }
          }
        }),
        children: (0, _v3.jsx)(_v4.IconButton, {
          "aria-label": "CC/subtitles",
          "data-testid": _v94,
          variant: "tertiary",
          size: "md",
          isActive: _v2.enabled,
          icon: (0, _v3.jsx)(_v78.Captions, {}),
          onClick: _v4,
          onFocus: _v0 => _v0.preventDefault()
        })
      }), (0, _v3.jsx)(_v80, {
        priority: 2,
        children: (0, _v3.jsxs)(_v75.Menu, {
          placement: "top-start",
          closeOnSelect: !1,
          onClose: () => {
            setTimeout(() => {
              _v1("options");
            }, 150);
          },
          flip: !1,
          children: [(0, _v3.jsx)(_v5.Tooltip, {
            label: (0, _v9.translate)({
              singular: "Languages",
              dictionary: {
                es: {
                  singular: "Idiomas"
                },
                "de-DE": {
                  singular: "Sprachen"
                },
                "fr-FR": {
                  singular: "Langues"
                },
                "ja-JP": {
                  singular: "言語"
                },
                "ko-KR": {
                  singular: "언어"
                },
                "pt-BR": {
                  singular: "Idiomas"
                }
              }
            }),
            children: (0, _v3.jsx)(_v76.MenuButton, {
              as: _v4.IconButton,
              icon: (0, _v3.jsx)(_v79.Translate, {}),
              variant: "tertiary",
              size: "md"
            })
          }), (0, _v3.jsx)(_v77.MenuList, {
            children: (0, _v3.jsx)(_v101, {
              state: _v0,
              setState: _v1
            })
          })]
        })
      })]
    }) : null;
  }, "LanguagesSubmenuItems", 0, _v101], 0);
  var _v102 = _v0.i(0);
  _v0.s(["Loop", 0, function () {
    let {
        loop: _v0
      } = _v60("loop"),
      {
        toggleLoop: _v1
      } = _v74("toggleLoop");
    return (0, _v3.jsx)(_v80, {
      priority: 5,
      children: (0, _v3.jsx)(_v5.Tooltip, {
        label: _v38.toggleLoop,
        children: (0, _v3.jsx)(_v4.IconButton, {
          "aria-label": "Loop",
          variant: "tertiary",
          size: "md",
          isActive: _v0,
          icon: (0, _v3.jsx)(_v102.Repeat, {}),
          onClick: _v1
        })
      })
    });
  }], 0);
  var _v103 = _v0.i(0);
  let _v104 = _v0 => (0, _v3.jsx)(_v103.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10 17.715 17.81 12 10 6.285v11.43Zm-1.2 2a1.836 1.836 0 0 1-.8-1.537V5.821c0-.633.305-1.205.8-1.536a1.652 1.652 0 0 1 1.8-.036l.034.022 8.616 6.304c.53.347.75.923.75 1.425s-.22 1.077-.75 1.425l-8.616 6.304-.034.021a1.652 1.652 0 0 1-1.8-.035ZM5 20a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1Z",
      fill: "currentColor"
    })
  });
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0);
  let _v107 = _v0 => (0, _v3.jsx)(_v103.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M14 6.285 6.19 12 14 17.715V6.285Zm1.2-2c.495.331.8.903.8 1.537v12.357c0 .633-.305 1.205-.8 1.536a1.652 1.652 0 0 1-1.8.036l-.034-.021-8.616-6.305C4.22 13.078 4 12.502 4 12s.22-1.077.75-1.425l8.616-6.304.034-.021a1.652 1.652 0 0 1 1.8.035ZM19 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Z",
      fill: "currentColor"
    })
  });
  async function _v108(_v0, _v1) {
    let {
        currentTime: _v2,
        duration: _v3,
        loop: _v4,
        update: _v5
      } = _v46.getState(),
      _v6 = _v63(_v2 + _v0, 0, _v3);
    _v4 || 0 !== _v6 && _v6 !== _v3 ? _v4 && _v6 === _v3 ? await _v1(0) : _v4 && 0 === _v6 ? await _v1(.99 * _v3) : await _v1(_v6) : _v5({
      paused: !0
    });
  }
  _v0.s(["Playback", 0, function () {
    let {
      paused: _v0,
      currentTime: _v1,
      duration: _v2
    } = _v60("paused", "currentTime", "duration");
    !function () {
      let {
          playbackRate: _v0,
          fps: _v1,
          paused: _v2
        } = _v60("playbackRate", "paused", "fps"),
        {
          seekTo: _v3
        } = _v74("seekTo"),
        _v4 = _v68(),
        _v5 = _v0.value < 0,
        _v6 = (0, _v39.useRef)(_v3);
      _v6.current = _v3;
      let _v7 = !_v2 && _v4,
        _v8 = (0, _v39.useMemo)(() => 0 / (_v1 || 24), [_v1]),
        _v9 = Math.abs(_v0.value) || _v41.value,
        _v10 = (0, _v39.useMemo)(() => Math.max(1, Math.round(_v9)), [_v9]),
        _v11 = (0, _v39.useMemo)(() => _v10 * _v8, [_v10, _v8]),
        _v12 = (0, _v39.useMemo)(() => Math.round(_v11 / _v9), [_v11, _v9]);
      (0, _v39.useEffect)(() => {
        if (!_v7) return;
        let _v0 = null,
          _v1 = !1,
          _v2 = Number(Number(_v11 / 0).toFixed(2)) * (_v5 ? -1 : 1),
          _v3 = {
            realFps: -1,
            durationSeconds: 0,
            callsPerInterval: 0
          },
          _v4 = Date.now();
        return !function _v0() {
          let _v1 = Date.now() - _v4;
          _v1 >= 0 && (_v3.durationSeconds += 5, _v3.realFps = _v3.callsPerInterval / _v1 * 0, _v4 = Date.now(), _v3.callsPerInterval = 0), Promise.all([_v108(_v2, _v6.current), new Promise(_v0 => {
            _v0 = setTimeout(_v0, _v12);
          })]).then(() => {
            _v1 || (_v3.callsPerInterval++, _v0());
          });
        }(), () => {
          _v1 = !0, _v0 && clearTimeout(_v0);
        };
      }, [_v12, _v1, _v7, _v11, _v9, _v5]);
    }();
    let {
      togglePlayPause: _v3,
      stepForward: _v4,
      stepBackwards: _v5
    } = _v74("togglePlayPause", "stepForward", "stepBackwards", "fiveStepsForward", "fiveStepsBackwards", "shuttleStop", "playWithPrerollAndPostroll", "playAround", "increasePlaybackRate", "decreasePlaybackRate", "increasePlaybackRateSlow", "decreasePlaybackRateSlow");
    return (0, _v3.jsxs)(_v82.HStack, {
      children: [(0, _v3.jsx)(_v5.Tooltip, {
        label: _v0 ? _v38.play : _v38.pause,
        children: (0, _v3.jsx)(_v4.IconButton, {
          variant: "secondary",
          size: "md",
          width: "2xl",
          "data-testid": _v93,
          "aria-label": _v0 ? "Play" : "Pause",
          icon: _v0 ? (0, _v3.jsx)(_v106.PlayFilled, {}) : (0, _v3.jsx)(_v105.PauseFilled, {}),
          onClick: _v3
        })
      }), (0, _v3.jsxs)(_v80, {
        priority: 1,
        children: [(0, _v3.jsx)(_v5.Tooltip, {
          label: _v38.frameBackward,
          children: (0, _v3.jsx)(_v4.IconButton, {
            variant: "tertiary",
            isDisabled: 0 === _v1,
            size: "md",
            "data-testid": _v92,
            "aria-label": "Previous Frame",
            icon: (0, _v3.jsx)(_v107, {}),
            onClick: _v5
          })
        }), (0, _v3.jsx)(_v5.Tooltip, {
          label: _v38.frameForward,
          children: (0, _v3.jsx)(_v4.IconButton, {
            variant: "tertiary",
            isDisabled: _v1 === _v2,
            size: "md",
            "data-testid": _v91,
            "aria-label": "Next Frame",
            icon: (0, _v3.jsx)(_v104, {}),
            onClick: _v4
          })
        })]
      })]
    });
  }], 0);
  var _v109 = _v0.i(0);
  let _v110 = _v43.filter(_v0 => _v0.value % .5 == 0);
  function _v111() {
    let {
        playbackRate: _v0
      } = _v60("playbackRate"),
      {
        setPlaybackRate: _v1
      } = _v74("setPlaybackRate");
    return (0, _v3.jsx)(_v3.Fragment, {
      children: _v110.map(({
        label: _v0,
        value: _v1
      }) => (0, _v3.jsx)(_v89, {
        item: {
          label: _v0 === _v41.label ? (0, _v9.translate)({
            singular: "Normal",
            dictionary: {
              "fr-FR": {
                singular: "Normale"
              },
              "ja-JP": {
                singular: "普通"
              },
              "ko-KR": {
                singular: "보통"
              },
              "zh-CN": {
                singular: "正常"
              }
            }
          }) : _v0,
          enabled: _v0 === _v0.label
        },
        onClick: () => _v1(_v1)
      }, _v0))
    });
  }
  _v0.s(["PlaybackRate", 0, function () {
    let {
      playbackRate: _v0
    } = _v60("playbackRate");
    return (0, _v3.jsx)(_v80, {
      priority: 4,
      children: (0, _v3.jsxs)(_v75.Menu, {
        placement: "top-start",
        children: [(0, _v3.jsx)(_v5.Tooltip, {
          label: (0, _v9.translate)({
            singular: "Speed",
            dictionary: {
              es: {
                singular: "Velocidad"
              },
              "de-DE": {
                singular: "Geschwindigkeit"
              },
              "fr-FR": {
                singular: "Vitesse"
              },
              "ja-JP": {
                singular: "スピード"
              },
              "ko-KR": {
                singular: "속도"
              },
              "pt-BR": {
                singular: "Velocidade"
              },
              "zh-CN": {
                singular: "速度"
              }
            }
          }),
          children: (0, _v3.jsx)(_v76.MenuButton, {
            as: _v109.Button,
            variant: "tertiary",
            size: "md",
            onFocus: _v0 => _v0.preventDefault(),
            children: _v0.label
          })
        }), (0, _v3.jsx)(_v77.MenuList, {
          children: (0, _v3.jsx)(_v111, {})
        })]
      })
    });
  }, "PlaybackRateSubmenuItems", 0, _v111], 0);
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  function _v117({
    onClick: _v0,
    comment: _v1,
    boxSize: _v2 = 22,
    "data-testid": _v3
  }) {
    let {
        highlightedCommentId: _v4
      } = (0, _v39.useContext)(_v115.CommentHighlightContext),
      _v5 = _v1.id === _v4,
      _v6 = _v1.user.pictures?.sizes,
      [_v7, _v8] = (0, _v39.useMemo)(() => (0, _v116.getAvatarImages)(_v6), [_v6]);
    return (0, _v3.jsx)(_v50.Box, {
      "data-testid": _v3,
      as: "img",
      src: _v7,
      srcSet: _v8,
      alt: _v1.user.name ?? "User avatar",
      boxSize: `${_v2}px`,
      ...(_v0 ? {
        border: "1px solid",
        borderColor: _v5 ? "white" : "gray.500",
        _hover: {
          borderColor: _v5 ? "white" : "gray.300"
        },
        cursor: "pointer"
      } : {
        border: "0.5px solid",
        borderColor: "blackAlpha.200"
      }),
      borderRadius: "round",
      userSelect: "none",
      onClick: _v0 ? () => _v0(_v1) : void 0
    });
  }
  var _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  let _v127 = {
    display: "-webkit-box",
    WebkitLineClamp: 7,
    WebkitBoxOrient: "vertical",
    lineHeight: "1.4em",
    maxHeight: "calc(1.4em * 7)"
  };
  function _v128({
    children: _v0,
    revalidate: _v1
  }) {
    let _v2 = (0, _v39.useRef)(null),
      [_v3, _v4] = (0, _v39.useState)(!1);
    return (0, _v39.useEffect)(() => {
      let _v0 = _v2.current,
        _v1 = _v0?.offsetHeight ?? 0;
      _v4((_v0?.scrollHeight ?? 0) - _v1 > 2);
    }, [_v1]), (0, _v3.jsx)(_v3.Fragment, {
      children: _v0({
        ref: _v2,
        isOverflowing: _v3
      })
    });
  }
  function _v129(_v0, _v1, _v2) {
    let _v3 = Math.floor(_v0 / 0),
      _v4 = Math.floor(_v0 % 0 / 60).toString().padStart(_v3 > 0 ? 2 : 1, "0"),
      _v5 = Math.floor(_v0 % 60).toString().padStart(2, "0"),
      _v6 = [_v3, _v4, _v5, Math.floor(_v0 % 1 * ("frames" === _v2 ? _v1 : 0)).toString().padStart("frames" === _v2 ? 2 : 3, "0")];
    return "seconds" === _v2 && (_v6 = [_v3, _v4, _v5]), _v6.filter(Boolean).join(":");
  }
  let _v130 = ({
    children: _v0,
    comment: _v1,
    enableLinks: _v2
  }) => {
    let {
        onOpen: _v3,
        onClose: _v4,
        isOpen: _v5
      } = (0, _v122.useDisclosure)(),
      {
        setHighlightedCommentId: _v6
      } = (0, _v39.useContext)(_v115.CommentHighlightContext),
      {
        fps: _v7,
        timeFormat: _v8
      } = _v60("fps", "timeFormat"),
      _v9 = (0, _v39.useCallback)(_v0 => {
        _v0.preventDefault(), _v6(_v1.id);
      }, [_v1.id, _v6]);
    return (0, _v3.jsxs)(_v51.Popover, {
      trigger: "hover",
      placement: "top",
      isOpen: _v5,
      onOpen: _v3,
      onClose: _v4,
      children: [(0, _v3.jsx)(_v53.PopoverTrigger, {
        children: _v0
      }), (0, _v3.jsx)(_v54.Portal, {
        children: (0, _v3.jsxs)(_v52.PopoverContent, {
          padding: "md",
          width: (0, _v123.rem)(320),
          children: [(0, _v3.jsx)(_v118.PopoverHeader, {
            display: "flex",
            justifyContent: "space-between",
            textStyle: "heading-sm",
            children: (0, _v3.jsxs)(_v82.HStack, {
              alignItems: "flex-start",
              children: [(0, _v3.jsx)(_v117, {
                boxSize: 32,
                comment: _v1
              }), (0, _v3.jsxs)(_v50.Box, {
                alignItems: "flex-start",
                children: [(0, _v3.jsx)(_v8.Text, {
                  variant: "heading-xs",
                  children: _v1.user.name
                }), (0, _v3.jsx)(_v8.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v125.fromNow)(new Date(_v1.createdTime))
                })]
              })]
            })
          }), (0, _v3.jsx)(_v120.PopoverBody, {
            marginTop: "sm",
            maxHeight: (0, _v123.rem)(200),
            children: (0, _v3.jsx)(_v128, {
              revalidate: _v5,
              children: ({
                ref: _v0,
                isOverflowing: _v1
              }) => (0, _v3.jsxs)(_v3.Fragment, {
                children: [(0, _v3.jsxs)(_v8.Text, {
                  variant: "body-md",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  sx: {
                    ..._v127,
                    ...(_v2 && {
                      a: {
                        color: "vimeoBlue.700",
                        _dark: {
                          color: "vimeoBlue.600"
                        },
                        textDecoration: "underline",
                        cursor: "pointer",
                        transition: "color 0.2s ease",
                        _hover: {
                          color: "vimeoBlue.800",
                          _dark: {
                            color: "vimeoBlue.500"
                          }
                        }
                      }
                    })
                  },
                  ref: _v0,
                  children: [(0, _v3.jsx)(_v119.Badge, {
                    variant: "timestamp",
                    size: "sm",
                    mr: "8px",
                    ..._v124.TIMESTAMP_BADGE_LAYOUT_PROPS,
                    sx: _v124.TIMESTAMP_BADGE_COLOR_STYLES,
                    children: _v129(_v1.timeCode, _v7, _v8)
                  }), _v1.plainText ? _v2 ? (0, _v3.jsx)(_v126.default, {
                    text: _v1.plainText
                  }) : _v1.plainText : null]
                }), _v1 && (0, _v3.jsx)(_v121.Link, {
                  cursor: "pointer",
                  variant: "inline-primary",
                  fontSize: "body-md",
                  onClick: _v9,
                  children: (0, _v9.translate)({
                    singular: "Read more",
                    dictionary: {
                      es: {
                        singular: "Leer más"
                      },
                      "de-DE": {
                        singular: "Mehr lesen"
                      },
                      "fr-FR": {
                        singular: "En savoir plus"
                      },
                      "ja-JP": {
                        singular: "続きを読む"
                      },
                      "ko-KR": {
                        singular: "더 읽기"
                      },
                      "pt-BR": {
                        singular: "Leia mais"
                      },
                      "zh-CN": {
                        singular: "阅读更多"
                      }
                    }
                  })
                })]
              })
            })
          })]
        })
      })]
    });
  };
  var _v131 = _v0.i(0);
  function _v132({
    group: _v0,
    onCommentClick: _v1,
    enableLinks: _v2
  }) {
    let [_v3, _v4] = (0, _v39.useState)(!1),
      _v5 = (0, _v39.useCallback)(() => _v4(!0), []),
      _v6 = (0, _v39.useCallback)(() => _v4(!1), []),
      _v7 = (0, _v131.useColorModeValue)("surface", "text-primary");
    return (0, _v3.jsxs)(_v112.Center, {
      position: "relative",
      boxSize: "22px",
      onMouseEnter: _v5,
      onMouseLeave: _v6,
      "data-testid": _v100,
      children: [(0, _v3.jsx)(_v112.Center, {
        position: "absolute",
        opacity: +!_v3,
        transition: "opacity 250ms ease-in-out",
        boxSize: "22px",
        backgroundColor: "gray.500",
        borderRadius: "round",
        userSelect: "none",
        pointerEvents: "none",
        children: (0, _v3.jsx)(_v8.Text, {
          variant: "body-sm",
          color: _v7,
          children: _v0.comments.length
        })
      }), (0, _v3.jsx)(_v82.HStack, {
        position: "absolute",
        opacity: +!!_v3,
        transform: _v3 ? "scaleX(1)" : "scaleX(0)",
        transition: "opacity 250ms ease-in-out, transform 250ms ease-in-out",
        alignItems: "center",
        gap: "0",
        paddingY: "sm",
        children: _v0.comments.map((_v0, _v1) => (0, _v3.jsx)(_v130, {
          comment: _v0,
          enableLinks: _v2,
          children: (0, _v3.jsx)(_v50.Box, {
            marginLeft: _v1 > 0 ? "-11px" : void 0,
            children: (0, _v3.jsx)(_v117, {
              "data-testid": _v99,
              comment: _v0,
              onClick: _v1
            })
          })
        }, _v0.id))
      })]
    });
  }
  function _v133({
    comments: _v0,
    enableLinks: _v1
  }) {
    let {
        seekTo: _v2
      } = _v74("seekTo", "goToNextComment", "goToPreviousComment"),
      {
        duration: _v3
      } = _v60("duration"),
      {
        setActiveComment: _v4
      } = (0, _v39.useContext)(_v114.CommentsContext),
      {
        setHighlightedCommentId: _v5
      } = (0, _v39.useContext)(_v115.CommentHighlightContext),
      _v6 = function (_v0, _v1 = 25) {
        let {
            duration: _v2
          } = _v60("duration"),
          _v3 = (0, _v39.useMemo)(() => _v2 > 0 ? _v2 / _v1 : null, [_v2, _v1]);
        return (0, _v39.useMemo)(() => {
          var _v0;
          let _v1 = (_v0 = _v0 => null == _v3 ? "default_group" : `${Math.floor(_v0.timeCode / _v3)}`, _v0.reduce((_v0, _v1) => {
              let _v2 = _v0(_v1);
              return _v0[_v2] ??= [], _v0[_v2].push(_v1), _v0;
            }, {})),
            _v2 = [];
          return Object.entries(_v1).forEach(([_v0, _v1]) => {
            if (_v1.length) if (1 === _v1.length) _v2.push({
              ..._v1[0],
              type: "comment"
            });else {
              let _v0 = {
                type: "group",
                id: _v0,
                comments: _v1.slice().sort((_v0, _v1) => Date.parse(_v0.createdTime) - Date.parse(_v1.createdTime)),
                timeCode: _v1.reduce((_v0, _v1) => _v0 + _v1.timeCode, 0) / _v1.length
              };
              _v2.push(_v0);
            }
          }), _v2.sort((_v0, _v1) => _v0.timeCode - _v1.timeCode);
        }, [_v3, _v0]);
      }(_v0),
      _v7 = (0, _v39.useCallback)(_v0 => {
        _v2(_v0.timeCode), _v4(_v0), _v5(_v0.id);
      }, [_v2, _v4, _v5]);
    return _v6.length ? (0, _v3.jsx)(_v82.HStack, {
      "data-testid": _v98,
      position: "relative",
      width: "100%",
      height: "22px",
      zIndex: "0",
      children: _v6.map(_v0 => (0, _v3.jsx)(_v112.Center, {
        position: "absolute",
        style: {
          left: `${_v0.timeCode / _v3 * 100}%`
        },
        transform: "translateX(-50%)",
        alignItems: "stretch",
        children: "comment" === _v0.type ? (0, _v3.jsx)(_v130, {
          comment: _v0,
          enableLinks: _v1,
          children: (0, _v3.jsx)(_v50.Box, {
            children: (0, _v3.jsx)(_v117, {
              "data-testid": _v99,
              comment: _v0,
              onClick: _v7
            })
          })
        }) : (0, _v3.jsx)(_v132, {
          group: _v0,
          onCommentClick: _v7,
          enableLinks: _v1
        })
      }, _v0.id))
    }) : null;
  }
  function _v134({
    isEnabled: _v0 = !0
  } = {}) {
    let _v1 = (0, _v39.useRef)(null),
      [_v2, _v3] = (0, _v39.useState)({
        width: 0,
        height: 0
      });
    return (0, _v39.useEffect)(() => {
      let _v0 = _v1.current;
      if (!_v0 || !_v0) return;
      let _v1 = () => {
        _v3({
          width: _v0.clientWidth,
          height: _v0.clientHeight
        });
      };
      _v1();
      let _v2 = new window.ResizeObserver(_v1);
      return _v2.observe(_v0), () => {
        _v2.disconnect(), _v1();
      };
    }, [_v0]), [_v1, _v2];
  }
  function _v135({
    framesPreview: _v0
  }) {
    let {
        duration: _v1,
        fps: _v2,
        timeFormat: _v3
      } = _v60("duration", "fps", "timeFormat"),
      [_v4, {
        width: _v5
      }] = _v134(),
      [{
        percentage: _v6,
        isShown: _v7
      }, _v8] = (0, _v39.useState)({
        percentage: 0,
        isShown: !1
      }),
      _v9 = _v0 ? 160 : 60,
      _v10 = _v63(Math.round(_v6 * _v5) - _v9 / 2, 0, Math.max(_v5 - _v9, 0));
    return (0, _v3.jsx)(_v50.Box, {
      ref: _v4,
      position: "absolute",
      width: "100%",
      height: "100%",
      onMouseMove: ({
        currentTarget: _v0,
        clientX: _v1
      }) => {
        _v8({
          percentage: _v64(_v0, _v1),
          isShown: !0
        });
      },
      onMouseLeave: () => {
        _v8(_v0 => ({
          ..._v0,
          isShown: !1
        }));
      },
      children: (0, _v3.jsxs)(_v113.VStack, {
        zIndex: "popover",
        position: "absolute",
        borderRadius: "sm",
        overflow: "hidden",
        background: "black",
        pointerEvents: "none",
        gap: 0,
        opacity: +!!_v7,
        transition: "opacity 250ms ease-in-out",
        style: {
          transform: `translate(${_v10}px, -100%)`
        },
        children: [_v0 && (0, _v3.jsx)(_v136, {
          framesPreview: _v0,
          percentage: _v6
        }), (0, _v3.jsx)(_v112.Center, {
          minWidth: 60,
          width: "100%",
          height: "xs",
          children: (0, _v3.jsx)(_v8.Text, {
            color: "white",
            variant: "body-sm",
            children: _v129(_v6 * _v1, _v2, _v3)
          })
        })]
      })
    });
  }
  function _v136({
    framesPreview: _v0,
    percentage: _v1
  }) {
    let _v2 = Math.round(160 * (_v0.frame_height / _v0.frame_width)),
      _v3 = _v63(Math.ceil(_v1 * _v0.frames), 0, _v0.frames - 1),
      _v4 = Math.floor(_v3 / _v0.columns),
      _v5 = _v3 % _v0.columns,
      _v6 = 160 / _v0.frame_width,
      _v7 = _v2 / _v0.frame_height,
      _v8 = Math.round(_v5 * _v0.frame_width * _v6),
      _v9 = Math.round(_v4 * _v0.frame_height * _v7),
      _v10 = Math.ceil(_v0.width * _v6),
      _v11 = Math.ceil(_v0.height * _v7);
    return (0, _v3.jsx)(_v50.Box, {
      style: {
        width: "160px",
        height: `${_v2}px`,
        backgroundImage: `url(${_v0.url})`,
        backgroundPosition: `${-_v8}px ${-_v9}px`,
        backgroundSize: `${_v10}px ${_v11}px`
      }
    });
  }
  _v0.s(["useResizeObserver", 0, _v134], 0);
  let _v137 = "rgba(139, 156, 173, 0.28)";
  function _v138(_v0) {
    return {
      base: (0, _v131.useColorModeValue)(_v0 ? _v137 : "fill-component", _v0 ? _v137 : "fill-component"),
      hovered: (0, _v131.useColorModeValue)(_v0 ? "rgba(41, 81, 128, 0.24)" : "fill-component-hover", _v0 ? "rgba(161, 183, 207, 0.32)" : "fill-component-hover")
    };
  }
  function _v139({
    intervalDuration: _v0,
    haveMarkers: _v1
  }) {
    let {
        bufferedTime: _v2,
        inMarkerTime: _v3
      } = _v60("bufferedTime", "inMarkerTime"),
      _v4 = (0, _v39.useMemo)(() => _v63(_v2 - (_v3 ?? 0), 0, _v0) / _v0, [_v2, _v3, _v0]),
      {
        base: _v5,
        hovered: _v6
      } = _v138(_v1);
    return (0, _v3.jsx)(_v50.Box, {
      position: "absolute",
      left: "0px",
      width: "100%",
      height: "100%",
      background: _v5,
      _groupHover: {
        backgroundColor: _v6
      },
      pointerEvents: "none",
      transformOrigin: "0 50%",
      style: {
        transform: `scaleX(${_v4})`
      }
    });
  }
  let _v140 = "20px";
  function _v141({
    "data-testid": _v0,
    isLeft: _v1,
    onMouseDown: _v2
  }) {
    return (0, _v3.jsx)(_v112.Center, {
      "data-testid": _v0,
      position: "absolute",
      cursor: "ew-resize",
      onMouseDown: _v2,
      zIndex: _v1 ? 9 : 10,
      height: "100%",
      left: _v1 ? "4px" : void 0,
      right: _v1 ? void 0 : "4px",
      paddingY: "2px",
      paddingRight: _v1 ? _v140 : void 0,
      paddingLeft: _v1 ? void 0 : _v140,
      children: (0, _v3.jsx)(_v50.Box, {
        borderRadius: "sm",
        backgroundColor: "gray.900",
        height: "100%",
        width: "4px"
      })
    });
  }
  function _v142({
    intervalDuration: _v0
  }) {
    let {
        currentTime: _v1,
        inMarkerTime: _v2
      } = _v60("currentTime", "inMarkerTime"),
      _v3 = (0, _v39.useMemo)(() => _v63(_v1 - (_v2 ?? 0), 0, _v0) / _v0, [_v1, _v2, _v0]);
    return (0, _v3.jsx)(_v50.Box, {
      position: "absolute",
      left: "0px",
      width: "100%",
      height: "100%",
      background: "fill-brand",
      pointerEvents: "none",
      transformOrigin: "0 50%",
      style: {
        transform: `scaleX(${_v3})`
      }
    });
  }
  _v0.s(["Playbar", 0, function ({
    framesPreview: _v0,
    enableLinks: _v1
  }) {
    let _v2 = (0, _v39.useRef)(null),
      _v3 = (0, _v39.useRef)(null),
      {
        seekTo: _v4,
        markInTimestamp: _v5,
        markOutTimestamp: _v6
      } = _v74("seekTo", "markInByShortcut", "markOutByShortcut", "clearIn", "clearOut", "clearInAndOut", "gotoIn", "gotoOut", "markInTimestamp", "markOutTimestamp");
    !function () {
      let {
          seekTo: _v0
        } = _v74("seekTo"),
        {
          currentTime: _v1
        } = _v60("currentTime"),
        _v2 = _v49(),
        _v3 = (0, _v39.useCallback)(_v0 => {
          let {
              inMarkerTime: _v1,
              outMarkerTime: _v2,
              extendedMarkerTime: _v3
            } = _v46.getState(),
            _v4 = _v3 + .5;
          _v1 && _v1 - _v0 > _v4 && _v2({
            inMarkerTime: null
          }), _v2 && _v0 - _v2 > _v4 && _v2({
            outMarkerTime: null
          });
        }, [_v2]),
        _v4 = (0, _v39.useCallback)(async _v0 => {
          let _v1 = function () {
            let {
              inMarkerTime: _v0,
              outMarkerTime: _v1,
              duration: _v2
            } = _v46.getState();
            if (null === _v1 && null === _v0) return null;
            let _v3 = _v0 ?? 0,
              _v4 = _v1 ?? _v2;
            return _v4 <= _v3 ? null : {
              playFrom: _v3,
              playTo: _v4
            };
          }();
          if (!_v1) return;
          let {
              loop: _v2,
              playbackRate: _v3,
              extendedMarkerTime: _v4,
              duration: _v5
            } = _v46.getState(),
            _v6 = _v3.value > 0,
            _v7 = _v6 && _v0 > Math.min(_v1.playTo + _v4, _v5),
            _v8 = !_v6 && _v0 < Math.max(_v1.playFrom - _v4, 0);
          (_v7 || _v8) && (_v2 ? await _v0(_v7 ? _v1.playFrom : _v1.playTo) : (_v2({
            paused: !0
          }), await _v0(_v7 ? _v1.playTo : _v1.playFrom)), _v4 > 0 && _v2({
            paused: !0,
            extendedMarkerTime: 0
          }));
        }, [_v0, _v2]);
      (0, _v39.useEffect)(() => {
        _v4(_v1);
      }, [_v1, _v4]), (0, _v39.useEffect)(() => {
        _v3(_v1);
      }, [_v1, _v3]), (0, _v39.useEffect)(() => () => {
        _v2({
          extendedMarkerTime: 0
        });
      }, [_v2]);
    }();
    let {
        duration: _v7,
        inMarkerTime: _v8,
        outMarkerTime: _v9
      } = _v60("duration", "inMarkerTime", "outMarkerTime"),
      _v10 = (0, _v39.useCallback)(_v0 => {
        let {
          buttons: _v1,
          clientX: _v2
        } = _v0;
        if (1 !== _v1 || !_v2.current || !_v3.current) return;
        let _v3 = _v64(_v3.current, _v2) * _v7;
        switch (_v2.current) {
          case "markerIn":
            _v5(_v3);
            break;
          case "markerOut":
            _v6(_v3);
            break;
          case "timeline":
            _v4(_v3);
        }
      }, [_v7, _v5, _v6, _v4]),
      _v11 = (0, _v39.useCallback)(_v0 => {
        _v2.current = _v0;
        let _v1 = () => {
          _v2.current = null, window.removeEventListener("mousemove", _v10), window.removeEventListener("mouseup", _v1);
        };
        window.addEventListener("mousemove", _v10), window.addEventListener("mouseup", _v1);
      }, [_v10]),
      {
        intervalWidth: _v12,
        intervalOffset: _v13,
        intervalDuration: _v14
      } = (0, _v39.useMemo)(() => function (_v0, _v1 = 0, _v2 = _v0) {
        let _v3 = _v2 - _v1;
        return {
          intervalDuration: _v3,
          intervalWidth: 100 * Number(_v3 / _v0).toFixed(3),
          intervalOffset: 100 * Number(_v1 / _v0).toFixed(3)
        };
      }(_v7, _v8 ?? void 0, _v9 ?? void 0), [_v7, _v8, _v9]),
      _v15 = null !== _v8 || null !== _v9,
      _v16 = _v15 ? 8 : 4,
      _v17 = (0, _v39.useCallback)(_v0 => {
        _v0.stopPropagation(), _v11("markerIn");
      }, [_v11]),
      _v18 = (0, _v39.useCallback)(_v0 => {
        _v0.stopPropagation(), _v11("markerOut");
      }, [_v11]),
      _v19 = (0, _v39.useCallback)(_v0 => {
        _v11("timeline"), _v10(_v0);
      }, [_v10, _v11]),
      {
        base: _v20,
        hovered: _v21
      } = _v138(_v15),
      _v22 = function () {
        let {
            comments: _v0,
            commentAnnotationFormShown: _v1
          } = (0, _v39.useContext)(_v114.CommentsContext),
          _v2 = (0, _v39.useMemo)(() => _v0.filter(_v0 => "number" == typeof _v0.timeCode).sort((_v0, _v1) => _v0.timeCode - _v1.timeCode), [_v0]);
        return (0, _v39.useEffect)(() => {
          let _v0 = _v2.map(({
            timeCode: _v0
          }) => _v0);
          _v46.getState().update({
            commentsTimeCodes: _v0
          });
        }, [_v2]), (0, _v39.useEffect)(() => {
          _v1 && _v46.getState().update({
            paused: !0
          });
        }, [_v1]), _v2;
      }();
    return (0, _v3.jsxs)(_v113.VStack, {
      width: "100%",
      gap: 0,
      children: [_v22.length > 0 && (0, _v3.jsx)(_v133, {
        comments: _v22,
        enableLinks: _v1
      }), (0, _v3.jsxs)(_v112.Center, {
        ref: _v3,
        "data-testid": _v95,
        position: "relative",
        width: "100%",
        height: "24px",
        role: "group",
        cursor: "pointer",
        onMouseDown: _v19,
        children: [(0, _v3.jsx)(_v50.Box, {
          position: "relative",
          height: `${_v16}px`,
          width: "100%",
          borderRadius: "xs",
          overflow: "hidden",
          background: _v20,
          transition: "height 250ms ease-in-out",
          _groupHover: {
            height: `${2 * _v16}px`,
            backgroundColor: _v21
          },
          children: (0, _v3.jsxs)(_v82.HStack, {
            position: "relative",
            borderRadius: "xs",
            overflow: "hidden",
            background: _v20,
            _groupHover: {
              backgroundColor: _v21
            },
            height: "100%",
            style: {
              width: `${_v12}%`,
              left: `${_v13}%`
            },
            children: [(0, _v3.jsx)(_v139, {
              intervalDuration: _v14,
              haveMarkers: _v15
            }), (0, _v3.jsx)(_v142, {
              intervalDuration: _v14
            }), null !== _v8 && (0, _v3.jsx)(_v141, {
              "data-testid": _v96,
              isLeft: !0,
              onMouseDown: _v17
            }), null !== _v9 && (0, _v3.jsx)(_v141, {
              "data-testid": _v97,
              onMouseDown: _v18
            })]
          })
        }), (0, _v3.jsx)(_v135, {
          framesPreview: _v0
        })]
      })]
    });
  }], 0);
  let _v143 = _v0 => (0, _v3.jsx)(_v103.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("path", {
      d: "M6.71 8.79a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33 1 1 0 0 0 .21 1.09c.097.088.209.16.33.21a.84.84 0 0 0 .38.08 1 1 0 0 0 .92-1.38 1 1 0 0 0-.21-.33ZM10 10.5a1 1 0 0 0 .92-1.38 1 1 0 0 0-.624-.588A1 1 0 0 0 9.81 8.5a.6.6 0 0 0-.19.06l-.18.09-.15.12A1.05 1.05 0 0 0 9 9.5a1 1 0 0 0 1 1Zm-3.62 2.08A1 1 0 0 0 5 13.5a1 1 0 0 0 1.38.92 1.15 1.15 0 0 0 .33-.21A1 1 0 0 0 7 13.5a1 1 0 0 0-.29-.71.93.93 0 0 0-.33-.21ZM14 12.5h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm.71-3.71a1 1 0 0 0-1.42 0 1 1 0 0 0-.21.33A1 1 0 1 0 15 9.5a.84.84 0 0 0-.08-.38 1 1 0 0 0-.21-.33Zm3.85 3.88a.762.762 0 0 0-.18-.09 1 1 0 0 0-.76 0 1.15 1.15 0 0 0-.33.21 1.05 1.05 0 0 0-.29.71 1 1 0 0 0 2 0 1.05 1.05 0 0 0-.29-.71l-.15-.12ZM20 4.5H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3Zm1 11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v8Zm-2.29-6.71A1 1 0 0 0 17 9.5a1 1 0 1 0 1.92-.38 1 1 0 0 0-.21-.33Z",
      fill: "currentColor"
    })
  });
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  let _v152 = (0, _v39.memo)(({
    section: _v0
  }) => {
    let _v1 = Object.entries(_v37[_v0]);
    return _v1.length ? (0, _v3.jsxs)(_v113.VStack, {
      alignItems: "flex-start",
      children: [(0, _v3.jsx)(_v8.Text, {
        variant: "heading-sm",
        children: _v36[_v0]
      }), (0, _v3.jsx)(_v151.Divider, {
        borderColor: "stroke"
      }), _v1.map(([_v0, _v1]) => {
        let _v2 = _v26[_v0];
        return (0, _v3.jsxs)(_v82.HStack, {
          width: "100%",
          justifyContent: "space-between",
          gap: "md",
          children: [(0, _v3.jsx)(_v8.Text, {
            variant: "body-md",
            whiteSpace: "nowrap",
            children: _v1
          }), (0, _v3.jsx)(_v82.HStack, {
            gap: "xs",
            children: _v2.map((_v0, _v1) => (0, _v3.jsx)(_v50.Box, {
              backgroundColor: "button-secondary-default",
              borderRadius: "sm",
              paddingX: "sm",
              paddingY: (0, _v123.rem)(6),
              children: (0, _v3.jsx)(_v8.Text, {
                variant: "body-sm",
                children: _v0
              })
            }, _v1))
          })]
        }, _v0);
      })]
    }) : null;
  });
  function _v153(_v0) {
    let _v1 = (0, _v39.useCallback)(() => {
      let {
        update: _v0
      } = _v46.getState();
      _v0({
        isShortcutsModalShown: !1
      });
    }, []);
    return (0, _v3.jsxs)(_v144.Modal, {
      isOpen: _v0.isShortcutsModalShown,
      onClose: _v1,
      size: "100%",
      children: [(0, _v3.jsx)(_v145.ModalOverlay, {}), (0, _v3.jsxs)(_v146.ModalContent, {
        width: "fit-content",
        overflow: "auto",
        paddingX: "sm",
        children: [(0, _v3.jsx)(_v147.ModalHeader, {
          mt: "sm",
          children: (0, _v3.jsx)(_v8.Text, {
            variant: "heading-md",
            children: (0, _v9.translate)({
              singular: "Keyboard shortcuts",
              dictionary: {
                es: {
                  singular: "Métodos abreviados de teclado"
                },
                "de-DE": {
                  singular: "Tastaturkürzel"
                },
                "fr-FR": {
                  singular: "Raccourcis clavier"
                },
                "ja-JP": {
                  singular: "キーボード ショートカット"
                },
                "ko-KR": {
                  singular: "키보드 단축 키"
                },
                "pt-BR": {
                  singular: "Atalhos do Teclado"
                },
                "zh-CN": {
                  singular: "键盘快捷键"
                }
              }
            })
          })
        }), (0, _v3.jsx)(_v148.ModalCloseButton, {}), (0, _v3.jsx)(_v149.ModalBody, {
          children: (0, _v3.jsxs)(_v82.HStack, {
            alignItems: "stretch",
            justifyContent: "flex-start",
            gap: "xl",
            children: [(0, _v3.jsxs)(_v113.VStack, {
              flex: "1",
              alignItems: "stretch",
              gap: "lg",
              children: [(0, _v3.jsx)(_v152, {
                section: "video"
              }), (0, _v3.jsx)(_v152, {
                section: "audio"
              })]
            }), (0, _v3.jsxs)(_v113.VStack, {
              flex: "1",
              alignItems: "stretch",
              gap: "lg",
              children: [(0, _v3.jsx)(_v152, {
                section: "comments"
              }), (0, _v3.jsx)(_v152, {
                section: "subtitles"
              }), (0, _v3.jsx)(_v152, {
                section: "markers"
              })]
            })]
          })
        }), (0, _v3.jsx)(_v150.ModalFooter, {
          paddingY: "sm"
        })]
      })]
    });
  }
  function _v154() {
    let {
        quality: _v0,
        qualities: _v1
      } = _v60("quality", "qualities"),
      {
        setQuality: _v2
      } = _v74("setQuality");
    return _v0 ? (0, _v3.jsx)(_v3.Fragment, {
      children: _v1.map(({
        id: _v0,
        label: _v1
      }) => (0, _v3.jsx)(_v89, {
        item: {
          label: _v1,
          enabled: _v0 === _v0.id
        },
        onClick: () => _v2(_v0)
      }, _v0))
    }) : null;
  }
  _v0.s(["PreviewShortcuts", 0, function () {
    let {
        isShortcutsModalShown: _v0
      } = _v60("isShortcutsModalShown"),
      {
        toggleShortcutsLegend: _v1
      } = _v74("toggleShortcutsLegend");
    return (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v80, {
        priority: 1,
        children: (0, _v3.jsx)(_v5.Tooltip, {
          label: _v38.toggleShortcutsLegend,
          children: (0, _v3.jsx)(_v4.IconButton, {
            "aria-label": "PreviewShortcuts",
            variant: "tertiary",
            size: "md",
            icon: (0, _v3.jsx)(_v143, {}),
            onClick: _v1,
            isActive: _v0,
            onFocus: _v0 => _v0.preventDefault()
          })
        })
      }), (0, _v3.jsx)(_v153, {
        isShortcutsModalShown: _v0
      })]
    });
  }], 0), _v0.s(["Quality", 0, function () {
    let {
      quality: _v0
    } = _v60("quality");
    return _v0 ? (0, _v3.jsx)(_v80, {
      priority: 3,
      children: (0, _v3.jsxs)(_v75.Menu, {
        placement: "top-start",
        children: [(0, _v3.jsx)(_v5.Tooltip, {
          label: (0, _v9.translate)({
            singular: "Quality",
            dictionary: {
              es: {
                singular: "Calidad"
              },
              "de-DE": {
                singular: "Qualität"
              },
              "fr-FR": {
                singular: "Qualité"
              },
              "ja-JP": {
                singular: "画質"
              },
              "ko-KR": {
                singular: "화질"
              },
              "pt-BR": {
                singular: "Qualidade"
              },
              "zh-CN": {
                singular: "质量"
              }
            }
          }),
          children: (0, _v3.jsx)(_v76.MenuButton, {
            as: _v109.Button,
            variant: "tertiary",
            size: "md",
            "data-testid": _v90,
            onFocus: _v0 => _v0.preventDefault(),
            children: _v0.label
          })
        }), (0, _v3.jsx)(_v77.MenuList, {
          children: (0, _v3.jsx)(_v154, {})
        })]
      })
    }) : null;
  }, "QualitySubmenuItems", 0, _v154], 0);
  var _v155 = _v0.i(0);
  function _v156({
    state: _v0,
    setState: _v1,
    languagesMenuState: _v2,
    setLanguagesMenuState: _v3
  }) {
    let {
      quality: _v4,
      playbackRate: _v5,
      textTrack: _v6,
      audioTrack: _v7
    } = _v60("quality", "playbackRate", "textTrack", "audioTrack");
    switch (_v0) {
      case "options":
        return (0, _v3.jsxs)(_v3.Fragment, {
          children: [_v4 && (0, _v3.jsx)(_v80, {
            priority: 3,
            action: "show",
            children: (0, _v3.jsx)(_v86, {
              title: (0, _v9.translate)({
                singular: "Quality",
                dictionary: {
                  es: {
                    singular: "Calidad"
                  },
                  "de-DE": {
                    singular: "Qualität"
                  },
                  "fr-FR": {
                    singular: "Qualité"
                  },
                  "ja-JP": {
                    singular: "画質"
                  },
                  "ko-KR": {
                    singular: "화질"
                  },
                  "pt-BR": {
                    singular: "Qualidade"
                  },
                  "zh-CN": {
                    singular: "质量"
                  }
                }
              }),
              label: _v4.label,
              onClick: () => _v1("quality")
            })
          }), (0, _v3.jsx)(_v80, {
            priority: 4,
            action: "show",
            children: (0, _v3.jsx)(_v86, {
              title: (0, _v9.translate)({
                singular: "Speed",
                dictionary: {
                  es: {
                    singular: "Velocidad"
                  },
                  "de-DE": {
                    singular: "Geschwindigkeit"
                  },
                  "fr-FR": {
                    singular: "Vitesse"
                  },
                  "ja-JP": {
                    singular: "スピード"
                  },
                  "ko-KR": {
                    singular: "속도"
                  },
                  "pt-BR": {
                    singular: "Velocidade"
                  },
                  "zh-CN": {
                    singular: "速度"
                  }
                }
              }),
              label: _v5.label,
              onClick: () => _v1("speed")
            })
          }), (_v6 || _v7) && (0, _v3.jsx)(_v80, {
            priority: 2,
            action: "show",
            children: (0, _v3.jsx)(_v86, {
              title: (0, _v9.translate)({
                singular: "Languages",
                dictionary: {
                  es: {
                    singular: "Idiomas"
                  },
                  "de-DE": {
                    singular: "Sprachen"
                  },
                  "fr-FR": {
                    singular: "Langues"
                  },
                  "ja-JP": {
                    singular: "言語"
                  },
                  "ko-KR": {
                    singular: "언어"
                  },
                  "pt-BR": {
                    singular: "Idiomas"
                  }
                }
              }),
              onClick: () => _v1("languages")
            })
          })]
        });
      case "quality":
        return (0, _v3.jsxs)(_v3.Fragment, {
          children: [(0, _v3.jsx)(_v88, {
            title: (0, _v9.translate)({
              singular: "Quality",
              dictionary: {
                es: {
                  singular: "Calidad"
                },
                "de-DE": {
                  singular: "Qualität"
                },
                "fr-FR": {
                  singular: "Qualité"
                },
                "ja-JP": {
                  singular: "画質"
                },
                "ko-KR": {
                  singular: "화질"
                },
                "pt-BR": {
                  singular: "Qualidade"
                },
                "zh-CN": {
                  singular: "质量"
                }
              }
            }),
            onBack: () => _v1("options")
          }), (0, _v3.jsx)(_v154, {})]
        });
      case "speed":
        return (0, _v3.jsxs)(_v3.Fragment, {
          children: [(0, _v3.jsx)(_v88, {
            title: (0, _v9.translate)({
              singular: "Speed",
              dictionary: {
                es: {
                  singular: "Velocidad"
                },
                "de-DE": {
                  singular: "Geschwindigkeit"
                },
                "fr-FR": {
                  singular: "Vitesse"
                },
                "ja-JP": {
                  singular: "スピード"
                },
                "ko-KR": {
                  singular: "속도"
                },
                "pt-BR": {
                  singular: "Velocidade"
                },
                "zh-CN": {
                  singular: "速度"
                }
              }
            }),
            onBack: () => _v1("options")
          }), (0, _v3.jsx)(_v111, {})]
        });
      case "languages":
        return (0, _v3.jsxs)(_v3.Fragment, {
          children: ["options" === _v2 && (0, _v3.jsx)(_v88, {
            title: (0, _v9.translate)({
              singular: "Languages",
              dictionary: {
                es: {
                  singular: "Idiomas"
                },
                "de-DE": {
                  singular: "Sprachen"
                },
                "fr-FR": {
                  singular: "Langues"
                },
                "ja-JP": {
                  singular: "言語"
                },
                "ko-KR": {
                  singular: "언어"
                },
                "pt-BR": {
                  singular: "Idiomas"
                }
              }
            }),
            onBack: () => _v1("options")
          }), (0, _v3.jsx)(_v101, {
            state: _v2,
            setState: _v3
          })]
        });
      default:
        return null;
    }
  }
  _v0.s(["Settings", 0, function () {
    let [_v0, _v1] = (0, _v39.useState)("options"),
      [_v2, _v3] = (0, _v39.useState)("options"),
      {
        toggleShortcutsLegend: _v4
      } = _v74("toggleShortcutsLegend");
    return (0, _v3.jsx)(_v80, {
      priority: 1,
      action: "show",
      children: (0, _v3.jsxs)(_v75.Menu, {
        placement: "top-end",
        closeOnSelect: !1,
        onClose: () => {
          setTimeout(() => {
            _v1("options"), _v3("options");
          }, 150);
        },
        children: [(0, _v3.jsx)(_v5.Tooltip, {
          label: (0, _v9.translate)({
            singular: "Settings",
            dictionary: {
              es: {
                singular: "Configuración"
              },
              "de-DE": {
                singular: "Einstellungen"
              },
              "fr-FR": {
                singular: "Paramètres"
              },
              "ja-JP": {
                singular: "設定"
              },
              "ko-KR": {
                singular: "설정"
              },
              "pt-BR": {
                singular: "Configurações"
              },
              "zh-CN": {
                singular: "设置"
              }
            }
          }),
          children: (0, _v3.jsx)(_v76.MenuButton, {
            as: _v4.IconButton,
            icon: (0, _v3.jsx)(_v155.SettingsGear, {}),
            variant: "tertiary",
            size: "md",
            onFocus: _v0 => _v0.preventDefault()
          })
        }), (0, _v3.jsxs)(_v77.MenuList, {
          children: [(0, _v3.jsx)(_v156, {
            state: _v0,
            setState: _v1,
            languagesMenuState: _v2,
            setLanguagesMenuState: _v3
          }), "options" === _v0 && (0, _v3.jsx)(_v81.MenuItem, {
            justifyContent: "space-between",
            gap: "2xl",
            onClick: _v4,
            children: _v38.toggleShortcutsLegend
          })]
        })]
      })
    });
  }], 0);
  let _v157 = [{
    value: "seconds",
    label: (0, _v9.translate)({
      singular: "Seconds",
      dictionary: {
        es: {
          singular: "Segundos"
        },
        "de-DE": {
          singular: "Sekunden"
        },
        "fr-FR": {
          singular: "secondes"
        },
        "ja-JP": {
          singular: "秒"
        },
        "ko-KR": {
          singular: "초"
        },
        "pt-BR": {
          singular: "Segundos"
        },
        "zh-CN": {
          singular: "秒"
        }
      }
    })
  }, {
    value: "frames",
    label: (0, _v9.translate)({
      singular: "Frames",
      dictionary: {
        es: {
          singular: "Fotogramas"
        },
        "de-DE": {
          singular: "Bilder"
        },
        "fr-FR": {
          singular: "Images"
        },
        "ja-JP": {
          singular: "フレーム"
        },
        "ko-KR": {
          singular: "프레임"
        },
        "pt-BR": {
          singular: "Quadros"
        },
        "zh-CN": {
          singular: "帧"
        }
      }
    })
  }, {
    value: "milliseconds",
    label: (0, _v9.translate)({
      singular: "Milliseconds",
      dictionary: {
        es: {
          singular: "Milisegundos"
        },
        "de-DE": {
          singular: "Millisekunden"
        },
        "fr-FR": {
          singular: "Millisecondes"
        },
        "ja-JP": {
          singular: "ミリ秒"
        },
        "ko-KR": {
          singular: "밀리초"
        },
        "pt-BR": {
          singular: "Milissegundos"
        },
        "zh-CN": {
          singular: "毫秒"
        }
      }
    })
  }];
  function _v158({
    format: _v0
  }) {
    let {
        currentTime: _v1,
        duration: _v2,
        fps: _v3
      } = _v60("currentTime", "duration", "fps"),
      _v4 = _v129(_v1, _v3, _v0),
      _v5 = _v129(_v2, _v3, _v0);
    return (0, _v3.jsxs)(_v3.Fragment, {
      children: [(0, _v3.jsx)(_v80, {
        priority: 6,
        children: `${_v4} / ${_v5}`
      }), (0, _v3.jsx)(_v80, {
        priority: 6,
        action: "show",
        children: _v4
      })]
    });
  }
  _v0.s(["Time", 0, function () {
    let {
      timeFormat: _v0
    } = _v60("timeFormat");
    return (0, _v3.jsx)(_v80, {
      priority: 7,
      children: (0, _v3.jsxs)(_v75.Menu, {
        placement: "top-start",
        children: [(0, _v3.jsx)(_v5.Tooltip, {
          label: (0, _v9.translate)({
            singular: "Time display",
            dictionary: {
              es: {
                singular: "Visualización del tiempo"
              },
              "de-DE": {
                singular: "Zeitanzeige"
              },
              "fr-FR": {
                singular: "Affichage du temps"
              },
              "ja-JP": {
                singular: "時間表示"
              },
              "ko-KR": {
                singular: "시간 표시"
              },
              "pt-BR": {
                singular: "Exibição de tempo"
              },
              "zh-CN": {
                singular: "时间显示"
              }
            }
          }),
          children: (0, _v3.jsx)(_v76.MenuButton, {
            as: _v109.Button,
            variant: "tertiary",
            size: "md",
            onFocus: _v0 => _v0.preventDefault(),
            children: (0, _v3.jsx)(_v158, {
              format: _v0
            })
          })
        }), (0, _v3.jsx)(_v77.MenuList, {
          children: _v157.map(({
            value: _v0,
            label: _v1
          }) => (0, _v3.jsx)(_v89, {
            item: {
              label: _v1,
              enabled: _v0 === _v0
            },
            onClick: () => _v46.getState().update({
              timeFormat: _v0
            })
          }, _v0))
        })]
      })
    });
  }], 0), _v0.s(["useBreakpoints", 0, function ({
    isEnabled: _v0 = !0
  } = {}) {
    let {
        breakpoints: _v1
      } = _v60("breakpoints"),
      [_v2, {
        width: _v3
      }] = _v134({
        isEnabled: _v0
      });
    return (0, _v39.useEffect)(() => {
      let _v0 = _v2.current;
      if (!_v0 || !_v0) return;
      let {
          update: _v1
        } = _v46.getState(),
        {
          scrollWidth: _v2,
          clientWidth: _v3
        } = _v0;
      _v2 > _v3 && (0 === _v1.length || _v1[0] > _v2) ? (_v10 && console.debug("Adding breakpoint:", _v2), _v1({
        breakpoints: [_v2, ..._v1]
      })) : _v1.length > 0 && _v1[0] <= _v3 ? (_v10 && console.debug("Removing breakpoint:", _v1[0]), _v1({
        breakpoints: _v1.slice(1)
      })) : _v1.length > 0 && _v1[0] < _v2 && (_v10 && console.debug("Resetting breakpoints due to increased controls width"), _v1({
        breakpoints: []
      }));
    }, [_v2, _v0, _v3, _v1]), _v2;
  }], 0), _v0.s(["usePlayerReady", 0, function (_v0) {
    let [_v1, _v2] = (0, _v39.useState)(!1);
    return (0, _v39.useEffect)(() => {
      if (_v0 && "function" == typeof _v0.ready) return _v0.ready(() => {
        _v2(!0);
      }), () => {
        _v2(!1);
      };
    }, [_v0]), _v1;
  }], 0);
}