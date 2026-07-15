{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
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
    _v24 = _v0.i(0),
    _v25 = _v0.i(0);
  let _v26 = {
    accentColor: (0, _v25.translate)({
      singular: "Accent color",
      dictionary: {
        es: {
          singular: "Color de contraste"
        },
        "de-DE": {
          singular: "Farbakzent"
        },
        "fr-FR": {
          singular: "Accentuer la couleur"
        },
        "ja-JP": {
          singular: "アクセントカラー"
        },
        "ko-KR": {
          singular: "강조색"
        },
        "pt-BR": {
          singular: "Tom de cor"
        },
        "zh-CN": {
          singular: "强调色"
        }
      }
    }),
    auto: (0, _v25.translate)({
      singular: "Auto",
      dictionary: {
        es: {
          singular: "Automático"
        },
        "de-DE": {
          singular: "Automatisch"
        },
        "ja-JP": {
          singular: "自動"
        },
        "ko-KR": {
          singular: "자동"
        },
        "pt-BR": {
          singular: "Automático"
        },
        "zh-CN": {
          singular: "自动"
        }
      }
    }),
    autoPlayNextVideo: (0, _v25.translate)({
      singular: "Autoplay next video",
      dictionary: {
        es: {
          singular: "Reproducir de forma automática el siguiente video"
        },
        "de-DE": {
          singular: "Nächstes Video automatisch abspielen"
        },
        "fr-FR": {
          singular: "Lire automatiquement la vidéo suivante"
        },
        "ja-JP": {
          singular: "次の動画を自動再生"
        },
        "ko-KR": {
          singular: "다음 동영상 자동 재생"
        },
        "pt-BR": {
          singular: "Reprodução automática do próximo vídeo"
        },
        "zh-CN": {
          singular: "自动播放下一个视频"
        }
      }
    }),
    beforeEvent: (0, _v25.translate)({
      singular: "Before event",
      dictionary: {
        es: {
          singular: "Antes del evento"
        },
        "de-DE": {
          singular: "Vor dem Event"
        },
        "fr-FR": {
          singular: "Avant l'événement"
        },
        "ja-JP": {
          singular: "イベント前"
        },
        "ko-KR": {
          singular: "이벤트 전"
        },
        "pt-BR": {
          singular: "Antes do evento"
        },
        "zh-CN": {
          singular: "活动前"
        }
      }
    }),
    bottom: (0, _v25.translate)({
      singular: "Bottom",
      dictionary: {
        es: {
          singular: "Parte inferior"
        },
        "de-DE": {
          singular: "Unten"
        },
        "fr-FR": {
          singular: "Bas"
        },
        "ja-JP": {
          singular: "下"
        },
        "ko-KR": {
          singular: "아래"
        },
        "pt-BR": {
          singular: "Inferior"
        },
        "zh-CN": {
          singular: "底部"
        }
      }
    }),
    byline: (0, _v25.translate)({
      singular: "Byline",
      dictionary: {
        es: {
          singular: "Autor"
        },
        "de-DE": {
          singular: "Verfasserangabe"
        },
        "fr-FR": {
          singular: "Signature"
        },
        "ja-JP": {
          singular: "投稿者"
        },
        "ko-KR": {
          singular: "창작가 이름"
        },
        "pt-BR": {
          singular: "Autoria"
        },
        "zh-CN": {
          singular: "署名行"
        }
      }
    }),
    cancel: (0, _v25.translate)({
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
    }),
    center: (0, _v25.translate)({
      singular: "Center",
      dictionary: {
        es: {
          singular: "Centro"
        },
        "de-DE": {
          singular: "Mitte"
        },
        "fr-FR": {
          singular: "Centre"
        },
        "ja-JP": {
          singular: "中央揃え"
        },
        "ko-KR": {
          singular: "가운데"
        },
        "pt-BR": {
          singular: "Centro"
        },
        "zh-CN": {
          singular: "中心"
        }
      }
    }),
    chromecast: (0, _v25.translate)("Chromecast"),
    controls: (0, _v25.translate)({
      singular: "Controls",
      dictionary: {
        es: {
          singular: "Controles"
        },
        "de-DE": {
          singular: "Steuerungen"
        },
        "fr-FR": {
          singular: "Contrôles"
        },
        "ja-JP": {
          singular: "コントロール"
        },
        "ko-KR": {
          singular: "제어"
        },
        "pt-BR": {
          singular: "Controles"
        },
        "zh-CN": {
          singular: "控件"
        }
      }
    }),
    customization: (0, _v25.translate)({
      singular: "Customization",
      dictionary: {
        es: {
          singular: "Personalización"
        },
        "de-DE": {
          singular: "Anpassung"
        },
        "fr-FR": {
          singular: "Personnalisation"
        },
        "ja-JP": {
          singular: "カスタマイズ機能"
        },
        "ko-KR": {
          singular: "커스텀"
        },
        "pt-BR": {
          singular: "Personalização"
        },
        "zh-CN": {
          singular: "定制"
        }
      }
    }),
    customLogo: (0, _v25.translate)({
      singular: "Custom logo",
      dictionary: {
        es: {
          singular: "Logotipo personalizado"
        },
        "de-DE": {
          singular: "Benutzerdefiniertes Logo"
        },
        "fr-FR": {
          singular: "Logo personnalisé"
        },
        "ja-JP": {
          singular: "カスタムロゴ"
        },
        "ko-KR": {
          singular: "커스텀 로고"
        },
        "pt-BR": {
          singular: "Customizar logo"
        },
        "zh-CN": {
          singular: "自定义徽标"
        }
      }
    }),
    changesSaved: (0, _v25.translate)({
      singular: "Changes saved",
      dictionary: {
        es: {
          singular: "Guardamos los cambios"
        },
        "de-DE": {
          singular: "Änderungen wurden gespeichert"
        },
        "fr-FR": {
          singular: "Changements sauvegardés"
        },
        "ja-JP": {
          singular: "変更内容が保存されました"
        },
        "ko-KR": {
          singular: "변경 사항 저장 완료"
        },
        "pt-BR": {
          singular: "Alterações salvas"
        },
        "zh-CN": {
          singular: "已保存更改"
        }
      }
    }),
    customizePlayer: (0, _v25.translate)({
      singular: "Customize player",
      dictionary: {
        es: {
          singular: "Personalizar el reproductor"
        },
        "de-DE": {
          singular: "Player anpassen"
        },
        "fr-FR": {
          singular: "Personnaliser le player"
        },
        "ja-JP": {
          singular: "プレーヤーのカスタマイズ"
        },
        "ko-KR": {
          singular: "플레이어 커스텀"
        },
        "pt-BR": {
          singular: "Personalize o player"
        },
        "zh-CN": {
          singular: "自定义播放器"
        }
      }
    }),
    errorMsg: (0, _v25.translate)({
      singular: "An error occurred. Please try again.",
      dictionary: {
        es: {
          singular: "Se produjo un error. Vuelve a intentarlo."
        },
        "de-DE": {
          singular: "Es ist ein Fehler aufgetreten. Bitte versuche es erneut."
        },
        "fr-FR": {
          singular: "Une erreur s'est produite. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "エラーが発生しました。再度お試しください。"
        },
        "ko-KR": {
          singular: "오류가 발생했습니다. 다시 시도해주세요."
        },
        "pt-BR": {
          singular: "Ocorreu um erro. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "发生错误。请重试。"
        }
      }
    }),
    fullScreen: (0, _v25.translate)({
      singular: "Full screen",
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
    hideLiveLabel: (0, _v25.translate)({
      singular: "Hide live label",
      dictionary: {
        es: {
          singular: "Ocultar etiqueta “en vivo”"
        },
        "de-DE": {
          singular: "Live-Bezeichnung ausblenden"
        },
        "fr-FR": {
          singular: "Masquer l'étiquette En direct"
        },
        "ja-JP": {
          singular: "ライブラベルを非表示にする"
        },
        "ko-KR": {
          singular: "라이브 표시 숨기기"
        },
        "pt-BR": {
          singular: "Ocultar rótulo ao vivo"
        },
        "zh-CN": {
          singular: "隐藏直播标签"
        }
      }
    }),
    hideViewerCount: (0, _v25.translate)({
      singular: "Hide viewer count",
      dictionary: {
        es: {
          singular: "Ocultar recuento de espectadores"
        },
        "de-DE": {
          singular: "Anzahl der Zuschauer ausblenden"
        },
        "fr-FR": {
          singular: "Masquer le nombre de spectateurs"
        },
        "ja-JP": {
          singular: "視聴者数を非表示にする"
        },
        "ko-KR": {
          singular: "시청자 수 숨기기"
        },
        "pt-BR": {
          singular: "Ocultar a contagem de espectadores"
        },
        "zh-CN": {
          singular: "隐藏观众人数"
        }
      }
    }),
    iconColor: (0, _v25.translate)({
      singular: "Icon/text color",
      dictionary: {
        es: {
          singular: "Color del ícono/texto"
        },
        "de-DE": {
          singular: "Symbol-/Textfarbe"
        },
        "fr-FR": {
          singular: "Couleur de l'icône/du texte"
        },
        "ja-JP": {
          singular: "アイコン / テキストの色"
        },
        "ko-KR": {
          singular: "아이콘/텍스트 색상"
        },
        "pt-BR": {
          singular: "Cor do ícone/texto"
        },
        "zh-CN": {
          singular: "图标/文本颜色"
        }
      }
    }),
    invalidUrl: (0, _v25.translate)({
      singular: "Invalid URL",
      dictionary: {
        es: {
          singular: "URL no válida"
        },
        "de-DE": {
          singular: "Ungültige URL"
        },
        "fr-FR": {
          singular: "URL non valide"
        },
        "ja-JP": {
          singular: "無効なURL"
        },
        "ko-KR": {
          singular: "유효하지 않은 URL"
        },
        "pt-BR": {
          singular: "URL inválido"
        },
        "zh-CN": {
          singular: "无效 URL"
        }
      }
    }),
    linkThisLogo: (0, _v25.translate)({
      singular: "Link this logo",
      dictionary: {
        es: {
          singular: "Vincular este logotipo"
        },
        "de-DE": {
          singular: "Verknüpfe dieses Logo:"
        },
        "fr-FR": {
          singular: "Ajouter un lien à ce logo"
        },
        "ja-JP": {
          singular: "このロゴをリンクする"
        },
        "ko-KR": {
          singular: "이 로고에 링크 걸기"
        },
        "pt-BR": {
          singular: "Vincular este logo a:"
        },
        "zh-CN": {
          singular: "链接此徽标"
        }
      }
    }),
    linkUrl: (0, _v25.translate)({
      singular: "Link Url",
      dictionary: {
        es: {
          singular: "URL del enlace"
        },
        "de-DE": {
          singular: "Link-URL"
        },
        "fr-FR": {
          singular: "Relier l'URL"
        },
        "ja-JP": {
          singular: "リンクURL"
        },
        "ko-KR": {
          singular: "URL 연결"
        },
        "pt-BR": {
          singular: "Vincular URL"
        },
        "zh-CN": {
          singular: "链接 URL"
        }
      }
    }),
    logo: (0, _v25.translate)({
      singular: "Logo",
      dictionary: {
        "ja-JP": {
          singular: "ロゴ"
        },
        "ko-KR": {
          singular: "로고"
        },
        "zh-CN": {
          singular: "徽标"
        }
      }
    }),
    loopPlaylist: (0, _v25.translate)({
      singular: "Loop playlist",
      dictionary: {
        es: {
          singular: "Lista de reproducción en bucle"
        },
        "de-DE": {
          singular: "Playlist-Wiedergabe wiederholen"
        },
        "fr-FR": {
          singular: "Lire la playlist en boucle"
        },
        "ja-JP": {
          singular: "プレイリストをループ再生"
        },
        "ko-KR": {
          singular: "재생 목록 반복 재생"
        },
        "pt-BR": {
          singular: "Playlist com repetição automática"
        },
        "zh-CN": {
          singular: "循环播放列表"
        }
      }
    }),
    pictureInPicture: (0, _v25.translate)({
      singular: "Picture-in-picture",
      dictionary: {
        es: {
          singular: "Imagen en imagen"
        },
        "de-DE": {
          singular: "Bild im Bild"
        },
        "fr-FR": {
          singular: "Incrustation"
        },
        "ja-JP": {
          singular: "ピクチャ・イン・ピクチャ"
        },
        "ko-KR": {
          singular: "화면 속 화면"
        },
        "pt-BR": {
          singular: "Picture-in-Picture"
        },
        "zh-CN": {
          singular: "画中画"
        }
      }
    }),
    progressBar: (0, _v25.translate)({
      singular: "Progress bar",
      dictionary: {
        es: {
          singular: "Barra de progreso"
        },
        "de-DE": {
          singular: "Fortschrittsbalken"
        },
        "fr-FR": {
          singular: "Barre de progression"
        },
        "ja-JP": {
          singular: "プログレスバー"
        },
        "ko-KR": {
          singular: "진행 표시줄"
        },
        "pt-BR": {
          singular: "Barra de progresso"
        },
        "zh-CN": {
          singular: "进度条"
        }
      }
    }),
    playButton: (0, _v25.translate)({
      singular: "Play button",
      dictionary: {
        es: {
          singular: "Botón de reproducción"
        },
        "de-DE": {
          singular: "Wiedergabe-Button"
        },
        "fr-FR": {
          singular: "Bouton de lecture"
        },
        "ja-JP": {
          singular: "再生ボタン"
        },
        "ko-KR": {
          singular: "재생 버튼"
        },
        "pt-BR": {
          singular: "Botão Reproduzir"
        },
        "zh-CN": {
          singular: "播放按钮"
        }
      }
    }),
    playlist: (0, _v25.translate)({
      singular: "Playlist",
      dictionary: {
        es: {
          singular: "Lista de reproducción"
        },
        "fr-FR": {
          singular: "Sélection"
        },
        "ja-JP": {
          singular: "プレイリスト"
        },
        "ko-KR": {
          singular: "재생 목록"
        },
        "zh-CN": {
          singular: "播放列表"
        }
      }
    }),
    position: (0, _v25.translate)({
      singular: "Position",
      dictionary: {
        es: {
          singular: "Posición"
        },
        "fr-FR": {
          singular: "Poste"
        },
        "ja-JP": {
          singular: "ポジション"
        },
        "ko-KR": {
          singular: "위치"
        },
        "pt-BR": {
          singular: "Posição"
        },
        "zh-CN": {
          singular: "位置"
        }
      }
    }),
    primaryColor: (0, _v25.translate)({
      singular: "Primary color",
      dictionary: {
        es: {
          singular: "Color primario"
        },
        "de-DE": {
          singular: "Primärfarbe"
        },
        "fr-FR": {
          singular: "Couleur principale"
        },
        "ja-JP": {
          singular: "プライマリーカラー"
        },
        "ko-KR": {
          singular: "기본 색상"
        },
        "pt-BR": {
          singular: "Cor principal"
        },
        "zh-CN": {
          singular: "主色"
        }
      }
    }),
    profilePicture: (0, _v25.translate)({
      singular: "Profile picture",
      dictionary: {
        es: {
          singular: "Foto del perfil"
        },
        "de-DE": {
          singular: "Profilbild"
        },
        "fr-FR": {
          singular: "Photo de profil"
        },
        "ja-JP": {
          singular: "プロフィール画像"
        },
        "ko-KR": {
          singular: "프로필 이미지"
        },
        "pt-BR": {
          singular: "Foto do perfil"
        },
        "zh-CN": {
          singular: "个人资料图片"
        }
      }
    }),
    remove: (0, _v25.translate)({
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
    }),
    save: (0, _v25.translate)({
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
    }),
    showLogoDurringPlayback: (0, _v25.translate)({
      singular: "Show logo during playback",
      dictionary: {
        es: {
          singular: "Mostrar logotipo durante la reproducción"
        },
        "de-DE": {
          singular: "Logo während des Abspielens anzeigen"
        },
        "fr-FR": {
          singular: "Afficher le logo lors de la lecture"
        },
        "ja-JP": {
          singular: "再生中にロゴを表示"
        },
        "ko-KR": {
          singular: "재생 중 로고 표시"
        },
        "pt-BR": {
          singular: "Mostrar o logo durante a reprodução"
        },
        "zh-CN": {
          singular: "播放期间显示徽标"
        }
      }
    }),
    showRecurringSchedule: (0, _v25.translate)({
      singular: "Show recurring schedule",
      dictionary: {
        es: {
          singular: "Mostrar programación recurrente"
        },
        "de-DE": {
          singular: "Wiederkehrenden Zeitplan anzeigen"
        },
        "fr-FR": {
          singular: "Afficher le programme récurrent"
        },
        "ja-JP": {
          singular: "定期的なスケジュールを表示"
        },
        "ko-KR": {
          singular: "반복 일정 표시"
        },
        "pt-BR": {
          singular: "Exibir agenda recorrente"
        },
        "zh-CN": {
          singular: "显示定期时间表"
        }
      }
    }),
    showEventSchedule: (0, _v25.translate)({
      singular: "Show event schedule",
      dictionary: {
        es: {
          singular: "Mostrar programación del evento"
        },
        "de-DE": {
          singular: "Event-Zeitplan anzeigen"
        },
        "fr-FR": {
          singular: "Afficher le programme des événements"
        },
        "ja-JP": {
          singular: "イベントスケジュールを表示"
        },
        "ko-KR": {
          singular: "이벤트 일정 표시"
        },
        "pt-BR": {
          singular: "Exibir agenda de eventos"
        },
        "zh-CN": {
          singular: "显示活动时间表"
        }
      }
    }),
    showLatestVideo: (0, _v25.translate)({
      singular: "Show latest video",
      dictionary: {
        es: {
          singular: "Mostrar video más reciente"
        },
        "de-DE": {
          singular: "Neuestes Video anzeigen"
        },
        "fr-FR": {
          singular: "Afficher la dernière vidéo"
        },
        "ja-JP": {
          singular: "最新の動画を表示"
        },
        "ko-KR": {
          singular: "최신 동영상 표시"
        },
        "pt-BR": {
          singular: "Exibir o vídeo mais recente"
        },
        "zh-CN": {
          singular: "显示最新视频"
        }
      }
    }),
    title: (0, _v25.translate)({
      singular: "Title",
      dictionary: {
        es: {
          singular: "Título"
        },
        "de-DE": {
          singular: "Titel"
        },
        "fr-FR": {
          singular: "Titre"
        },
        "ja-JP": {
          singular: "タイトル"
        },
        "ko-KR": {
          singular: "제목"
        },
        "pt-BR": {
          singular: "Título"
        },
        "zh-CN": {
          singular: "标题"
        }
      }
    }),
    thumbnail: (0, _v25.translate)({
      singular: "Thumbnail",
      dictionary: {
        es: {
          singular: "Miniatura"
        },
        "de-DE": {
          singular: "Vorschaubild"
        },
        "fr-FR": {
          singular: "Vignette"
        },
        "ja-JP": {
          singular: "サムネイル"
        },
        "ko-KR": {
          singular: "썸네일"
        },
        "pt-BR": {
          singular: "Miniatura"
        },
        "zh-CN": {
          singular: "缩略图"
        }
      }
    }),
    transcript: (0, _v25.translate)({
      singular: "Transcript",
      dictionary: {
        es: {
          singular: "Transcripción"
        },
        "de-DE": {
          singular: "Transkript"
        },
        "fr-FR": {
          singular: "Transcription"
        },
        "ja-JP": {
          singular: "トランスクリプト"
        },
        "ko-KR": {
          singular: "스크립트"
        },
        "pt-BR": {
          singular: "Transcrição"
        },
        "zh-CN": {
          singular: "文字稿"
        }
      }
    }),
    upload: (0, _v25.translate)({
      singular: "Upload",
      dictionary: {
        es: {
          singular: "Subir"
        },
        "de-DE": {
          singular: "Hochladen"
        },
        "fr-FR": {
          singular: "Importer"
        },
        "ja-JP": {
          singular: "アップロード"
        },
        "ko-KR": {
          singular: "업로드"
        },
        "pt-BR": {
          singular: "Carregar"
        },
        "zh-CN": {
          singular: "上传"
        }
      }
    }),
    vimeoLogo: (0, _v25.translate)({
      singular: "Vimeo logo",
      dictionary: {
        es: {
          singular: "Logotipo de Vimeo"
        },
        "de-DE": {
          singular: "Vimeo-Logo"
        },
        "fr-FR": {
          singular: "Logo Vimeo"
        },
        "ja-JP": {
          singular: "Vimeo のロゴ"
        },
        "ko-KR": {
          singular: "Vimeo 로고"
        },
        "pt-BR": {
          singular: "Logo do Vimeo"
        },
        "zh-CN": {
          singular: "Vimeo 徽标"
        }
      }
    }),
    volume: (0, _v25.translate)({
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
    yourDetails: (0, _v25.translate)({
      singular: "Your details",
      dictionary: {
        es: {
          singular: "Tus detalles"
        },
        "de-DE": {
          singular: "Deine Infos"
        },
        "fr-FR": {
          singular: "Vos informations"
        },
        "ja-JP": {
          singular: "あなたの詳細"
        },
        "ko-KR": {
          singular: "나의 정보"
        },
        "pt-BR": {
          singular: "Seus detalhes"
        },
        "zh-CN": {
          singular: "您的详细信息"
        }
      }
    })
  };
  var _v27 = ((_v1 = {}).COMPLETED = "completed", _v1),
    _v28 = ((_v2 = {})[_v2.AUTO = 0] = "AUTO", _v2[_v2.BOTTOM = 1] = "BOTTOM", _v2[_v2.CENTER = 2] = "CENTER", _v2);
  let _v29 = "image/png,image/x-png,image/jpeg,.jpg,.jpeg,.png",
    _v30 = {
      uri: null,
      link: "https://i.vimeocdn.com/video/default_960x540?r=pad"
    },
    _v31 = "toggle",
    _v32 = "color",
    _v33 = "thumbnail",
    _v34 = "customLogo",
    _v35 = "playButton",
    _v36 = "schedule",
    _v37 = "eventSchedule",
    _v38 = "showLatestArchivedClip",
    _v39 = "playlist",
    _v40 = "loop",
    _v41 = "autoplay",
    _v42 = "playbar",
    _v43 = "volume",
    _v44 = "fullscreenButton",
    _v45 = "logos.vimeo",
    _v46 = "hideViewerCount",
    _v47 = "hideLiveLabel",
    _v48 = "title",
    _v49 = "portrait",
    _v50 = "byline",
    _v51 = "colors.colorOne",
    _v52 = "colors.colorTwo",
    _v53 = "colors.colorThree",
    _v54 = "playButtonPosition",
    _v55 = "transcript",
    _v56 = {
      show_schedule: _v36,
      event_schedule: _v37,
      show_latest_archived_clip: _v38,
      show_playlist: _v39,
      loop: _v40,
      autoplay: _v41,
      playbar: _v42,
      volume: _v43,
      fullscreen_button: _v44,
      pip: "pip",
      hide_viewer_count: _v46,
      hide_live_label: _v47,
      title: _v48,
      portrait: _v49,
      byline: _v50,
      vimeo_logo: _v45,
      custom_logo: "logos.custom.active",
      custom_logo_link_url: "logos.custom.link",
      custom_logo_url: "logos.custom.url",
      custom_logo_use_link: "logos.custom.useLink",
      colorOne: _v51,
      colorTwo: _v52,
      colorThree: _v53,
      play_button_position: _v54,
      transcript: _v55
    },
    _v57 = [{
      id: "before-event-controls",
      title: _v26.beforeEvent,
      withBorder: !0,
      options: [{
        type: _v31,
        label: _v26.showRecurringSchedule,
        payloadKey: _v36,
        disableReason: _v27.COMPLETED
      }, {
        type: _v31,
        label: _v26.showEventSchedule,
        payloadKey: _v37,
        disableReason: _v27.COMPLETED
      }, {
        type: _v31,
        label: _v26.showLatestVideo,
        payloadKey: _v38,
        disableReason: _v27.COMPLETED
      }]
    }, {
      id: "playlist-controls",
      title: _v26.playlist,
      withBorder: !0,
      options: [{
        type: _v31,
        label: _v26.playlist,
        payloadKey: _v39
      }, {
        type: _v31,
        label: _v26.autoPlayNextVideo,
        payloadKey: _v41
      }, {
        type: _v31,
        label: _v26.loopPlaylist,
        payloadKey: _v40
      }]
    }, {
      id: "play-button",
      title: _v26.playButton,
      withBorder: !0,
      options: [{
        type: _v35,
        label: _v26.position,
        payloadKey: _v54
      }]
    }, {
      id: "video-controls",
      title: _v26.controls,
      withBorder: !0,
      options: [{
        type: _v31,
        label: _v26.progressBar,
        payloadKey: _v42
      }, {
        type: _v31,
        label: _v26.volume,
        payloadKey: _v43
      }, {
        type: _v31,
        label: _v26.transcript,
        payloadKey: _v55
      }, {
        type: _v31,
        label: _v26.pictureInPicture,
        payloadKey: "pip"
      }, {
        type: _v31,
        label: _v26.fullScreen,
        payloadKey: _v44
      }, {
        type: _v31,
        label: _v26.vimeoLogo,
        payloadKey: _v45
      }]
    }, {
      id: "customization-controls",
      title: _v26.customization,
      withBorder: !0,
      options: [{
        type: _v32,
        label: _v26.primaryColor,
        payloadKey: _v51
      }, {
        type: _v32,
        label: _v26.accentColor,
        payloadKey: _v52
      }, {
        type: _v32,
        label: _v26.iconColor,
        payloadKey: _v53
      }, {
        type: _v33,
        label: _v26.thumbnail,
        payloadKey: "thumbnail"
      }, {
        type: _v34,
        label: _v26.customLogo,
        payloadKey: "logos.custom"
      }, {
        type: _v31,
        label: _v26.hideLiveLabel,
        payloadKey: _v47
      }, {
        type: _v31,
        label: _v26.hideViewerCount,
        payloadKey: _v46
      }]
    }, {
      id: "details-controls",
      title: _v26.yourDetails,
      withBorder: !1,
      options: [{
        type: _v31,
        label: _v26.profilePicture,
        payloadKey: _v49
      }, {
        type: _v31,
        label: _v26.title,
        payloadKey: _v48
      }, {
        type: _v31,
        label: _v26.byline,
        payloadKey: _v50
      }]
    }],
    _v58 = {
      isLoading: !0,
      embed: {
        committed: null,
        draft: null
      },
      thumbnail: {
        committed: null,
        draft: null
      },
      status: null
    },
    _v59 = ["embed.embedProperties.sourceUrl", "embed.schedule", "embed.eventSchedule", "embed.showLatestArchivedClip", "embed.playlist", "embed.autoplay", "embed.loop", "embed.playbar", "embed.volume", "embed.fullscreenButton", "embed.pip", "embed.hideLiveLabel", "embed.hideViewerCount", "embed.portrait", "embed.title", "embed.byline", "embed.logos", "embed.colors", "embed.playButtonPosition", "embed.transcript", "pictures.uri", "pictures.baseLink", "status"];
  function _v60(_v0, _v1) {
    switch (_v1.type) {
      case "INITIALIZE":
        return {
          ..._v0,
          isLoading: !1,
          embed: {
            ..._v0.embed,
            committed: _v1.payload.embed,
            draft: _v1.payload.embed
          },
          thumbnail: {
            ..._v0.thumbnail,
            committed: _v1.payload.thumbnail,
            draft: _v1.payload.thumbnail
          },
          status: _v1.payload.status
        };
      case "TOGGLE_EMBED_SETTING":
        if (!_v0.embed.draft) return _v0;
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              [_v1.payload]: !_v0.embed.draft[_v1.payload]
            }
          }
        };
      case "TOGGLE_VIMEO_LOGO":
        if (!_v0.embed.draft) return _v0;
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              logos: {
                ..._v0.embed.draft.logos,
                vimeo: !_v0.embed.draft.logos.vimeo,
                custom: {
                  ..._v0.embed.draft.logos.custom,
                  active: !1
                }
              }
            }
          }
        };
      case "TOGGLE_PLAYLIST":
        if (!_v0.embed.draft) return _v0;
        if (!_v0.embed.draft.playlist) return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              title: !1,
              portrait: !1,
              byline: !1,
              playlist: !0
            }
          }
        };
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              playlist: !1
            }
          }
        };
      case "TOGGLE_DETAILS":
        if (!_v0.embed.draft) return _v0;
        if (!_v0.embed.draft[_v1.payload]) return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              playlist: !1,
              [_v1.payload]: !0
            }
          }
        };
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              [_v1.payload]: !1
            }
          }
        };
      case "SET_COLORS":
        if (!_v0.embed.draft) return _v0;
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              colors: {
                ..._v0.embed.draft.colors,
                [_v1.payload.key]: _v1.payload.hex
              }
            }
          }
        };
      case "SET_CUSTOM_LOGO":
        if (!_v0.embed.draft) return _v0;
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              logos: {
                ..._v0.embed.draft.logos,
                vimeo: !1,
                custom: {
                  ..._v0.embed.draft.logos.custom,
                  ..._v1.payload
                }
              }
            }
          }
        };
      case "SET_THUMBNAIL":
        if (!_v0.thumbnail.draft) return _v0;
        return {
          ..._v0,
          thumbnail: {
            ..._v0.thumbnail,
            draft: {
              ..._v0.thumbnail.draft,
              ..._v1.payload
            }
          }
        };
      case "SET_PLAY_BUTTON_POSITION":
        if (!_v0.embed.draft) return _v0;
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: {
              ..._v0.embed.draft,
              playButtonPosition: _v1.payload
            }
          }
        };
      case "RESET_SETTINGS":
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            draft: _v0.embed.committed
          },
          thumbnail: {
            ..._v0.thumbnail,
            draft: _v0.thumbnail.committed
          }
        };
      case "APPLY_SETTINGS":
        return {
          ..._v0,
          embed: {
            ..._v0.embed,
            committed: _v0.embed.draft
          },
          thumbnail: {
            ..._v0.thumbnail,
            committed: _v0.thumbnail.draft
          }
        };
      default:
        return _v0;
    }
  }
  let _v61 = _v14.default.createContext({
    state: _v58,
    player: {
      sourceUrl: null,
      elementRef: null
    },
    controls: {
      hasSettingsChanged: !1,
      isSubmitting: !1
    },
    actions: {
      toggleEmbedSetting: () => {
        throw Error("Not implemented");
      },
      setEmbedColorSetting: () => {
        throw Error("Not implemented");
      },
      setCustomLogo: () => {
        throw Error("Not implemented");
      },
      setThumbnail: () => {
        throw Error("Not implemented");
      },
      resetSettings: () => {
        throw Error("Not implemented");
      },
      applySettings: () => {
        throw Error("Not implemented");
      },
      setNotification: () => {
        throw Error("Not implemented");
      },
      setPlayButtonPosition: _v0 => {
        throw Error("Not implemented");
      }
    }
  });
  function _v62({
    viewer: _v0,
    eventId: _v1,
    children: _v2
  }) {
    let [_v3, _v4] = (0, _v14.useReducer)(_v60, _v58),
      [_v5, _v6] = (0, _v14.useState)(null),
      [_v7, _v8] = (0, _v14.useState)(0),
      [_v9, _v10] = (0, _v14.useState)(null),
      {
        data: _v11,
        error: _v12
      } = (0, _v22.useGetLiveEvent)({
        where: {
          liveEventId: _v1
        },
        select: _v59
      }),
      _v13 = (0, _v14.useRef)(null),
      _v14 = _v0?.teamUser?.ownerId || _v0?.user?.id;
    (0, _v14.useEffect)(() => {
      _v11 && (_v4({
        type: "INITIALIZE",
        payload: {
          embed: _v11?.embed,
          thumbnail: {
            uri: _v11?.pictures?.uri,
            link: _v11?.pictures?.baseLink
          },
          status: _v11?.status
        }
      }), _v6(_v11?.embed?.embedProperties?.sourceUrl ?? null));
    }, [_v11, _v4]), (0, _v14.useEffect)(() => {
      if (_v3.embed.draft && _v13.current) {
        let _v0 = {};
        Object.keys(_v56).forEach(_v0 => {
          _v0[_v0] = (0, _v18.default)(_v3.embed.draft, _v56[_v0]);
        }), _v13.current.contentWindow?.postMessage({
          type: "UPDATE_RLE_EMBED_SETTINGS",
          payload: _v0
        }, window.location.origin);
      }
    }, [_v3.embed.draft, _v13]);
    let _v15 = (0, _v14.useMemo)(() => JSON.stringify(_v3.embed.draft) !== JSON.stringify(_v3.embed.committed), [_v3.embed]),
      _v16 = (0, _v14.useMemo)(() => JSON.stringify(_v3.thumbnail.draft) !== JSON.stringify(_v3.thumbnail.committed), [_v3.thumbnail]),
      _v17 = (0, _v14.useCallback)(_v0 => {
        if (_v0.type === _v31) switch (_v0.payloadKey) {
          case _v45:
            _v4({
              type: "TOGGLE_VIMEO_LOGO"
            });
            break;
          case _v39:
            _v4({
              type: "TOGGLE_PLAYLIST"
            });
            break;
          case _v49:
          case _v48:
          case _v50:
            _v4({
              type: "TOGGLE_DETAILS",
              payload: _v0.payloadKey
            });
            break;
          default:
            _v4({
              type: "TOGGLE_EMBED_SETTING",
              payload: _v0.payloadKey
            });
        }
      }, [_v4]),
      _v18 = (0, _v14.useCallback)((_v0, _v1) => {
        if (_v0.type !== _v32) return;
        let _v2 = _v0.payloadKey.split(".");
        _v4({
          type: "SET_COLORS",
          payload: {
            key: _v2 && _v2[1] ? _v2[1] : _v0.payloadKey,
            hex: _v1
          }
        });
      }, [_v4]),
      _v19 = (0, _v14.useCallback)(_v0 => {
        _v4({
          type: "SET_CUSTOM_LOGO",
          payload: _v0
        });
      }, [_v4]),
      _v20 = (0, _v14.useCallback)(_v0 => {
        _v4({
          type: "SET_THUMBNAIL",
          payload: _v0
        });
      }, [_v4]),
      _v21 = (0, _v14.useCallback)(_v0 => {
        _v4({
          type: "SET_PLAY_BUTTON_POSITION",
          payload: _v0
        });
      }, [_v4]),
      _v22 = (0, _v14.useCallback)(() => {
        _v4({
          type: "RESET_SETTINGS"
        });
      }, [_v4]),
      _v23 = (0, _v14.useCallback)(async () => {
        if (!_v0 || !_v14) return;
        _v4({
          type: "APPLY_SETTINGS"
        }), _v8(1);
        let _v0 = [];
        if (_v3.embed.draft && _v15 && _v0.push((0, _v20.patchLiveEvent)({
          baseUrl: `//${_v0.apiUrl}`,
          headers: {
            Authorization: `jwt ${_v0.jwt}`,
            "Content-Type": "application/json"
          },
          where: {
            liveEventId: _v1
          },
          select: ["uri"],
          variables: {
            embed: _v3.embed.draft
          }
        })), _v3.thumbnail.draft && _v16) {
          let _v0 = (0, _v23.parseThumbnailIdFromUrl)(_v3.thumbnail.draft.uri ?? _v3.thumbnail?.committed?.uri);
          if (_v0 > 0) {
            let _v0 = !!_v3.thumbnail.draft.uri;
            _v0.push((0, _v21.patchUserLiveEventPicture)({
              baseUrl: `//${_v0.apiUrl}`,
              headers: {
                Authorization: `jwt ${_v0.jwt}`,
                "Content-Type": "application/json"
              },
              select: ["uri"],
              where: {
                userId: _v14,
                liveEventId: _v1,
                thumbnailId: _v0
              },
              variables: {
                active: _v0
              }
            }));
          }
        }
        try {
          if (await Promise.all(_v0), _v8(0), _v10({
            message: _v26.changesSaved,
            status: "neutral"
          }), _v16 && _v5) {
            let _v0 = new URL(_v5);
            _v0.searchParams.set("time", new Date().getTime().toString()), _v6(_v0.toString());
          }
        } catch (_v0) {
          _v8(2), _v10({
            message: _v26.errorMsg,
            status: "negative"
          });
        }
      }, [_v1, _v14, _v0, _v15, _v16, _v3.embed.draft, _v3.thumbnail, _v5, _v4]),
      _v24 = (0, _v14.useMemo)(() => ({
        state: _v3,
        player: {
          sourceUrl: _v5,
          elementRef: _v13
        },
        controls: {
          hasSettingsChanged: 2 === _v7 || _v15 || _v16,
          isSubmitting: 1 === _v7
        },
        notification: _v9,
        actions: {
          toggleEmbedSetting: _v17,
          setEmbedColorSetting: _v18,
          setCustomLogo: _v19,
          setThumbnail: _v20,
          resetSettings: _v22,
          applySettings: _v23,
          setNotification: _v10,
          setPlayButtonPosition: _v21
        },
        ownerId: _v14,
        eventId: _v1,
        viewer: _v0
      }), [_v14, _v1, _v0, _v3, _v7, _v15, _v16, _v13, _v5, _v9, _v23, _v17, _v18, _v20, _v19, _v22]);
    return _v12 ? (0, _v12.jsx)(_v24.ErrorPage, {
      error: new _v19.ResourceNotFoundError()
    }) : (0, _v12.jsx)(_v61.Provider, {
      value: _v24,
      children: _v2
    });
  }
  let _v63 = () => (0, _v14.useContext)(_v61);
  var _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = _v67.default.div.withConfig({
    displayName: "AppearanceLogo.style__LogoLoader",
    componentId: "sc-fafb8d24-0"
  })`
  width: ${(0, _v66.rem)(48)};
  height: 100%;
  border-radius: ${(0, _v66.rem)(4)};
  background: ${_v68.core.color.surface(200)};
  background-size: 200%;
`;
  function _v70({
    ownerId: _v0
  }) {
    let [_v1, {
      data: _v2,
      loading: _v3
    }] = (0, _v64.useGetUserTeamLazy)();
    return ((0, _v14.useEffect)(() => {
      _v0 && _v1({
        where: {
          userId: _v0
        },
        select: ["pictures.sizes", "teamName"]
      });
    }, [_v0, _v1]), !_v0 || _v3) ? (0, _v12.jsx)(_v69, {}) : (0, _v12.jsx)(_v65.default, {
      teamLogoUrl: _v2?.pictures?.sizes?.[3]?.link,
      teamName: _v2?.teamName,
      tooltipPosition: "center"
    });
  }
  var _v71 = _v0.i(0);
  let _v72 = `
  display: flex;
  align-items: center;
  justify-content: center;
`,
    _v73 = _v67.default.div.withConfig({
      displayName: "Controls.style__ControlsWrapper",
      componentId: "sc-e4cb4aa1-0"
    })`
  ${_v72}
  gap: ${(0, _v66.rem)(8)};
  height: 100%;
`,
    _v74 = _v67.default.div.withConfig({
      displayName: "Controls.style__ButtonPlaceholder",
      componentId: "sc-e4cb4aa1-1"
    })`
  width: ${(0, _v66.rem)(170)};
  height: 100%;
  border-radius: ${(0, _v66.rem)(4)};
  background: ${_v68.core.color.surface(200)};
  background-size: 200%;
`;
  function _v75() {
    let {
      state: {
        isLoading: _v0
      },
      controls: {
        hasSettingsChanged: _v1,
        isSubmitting: _v2
      },
      actions: {
        resetSettings: _v3,
        applySettings: _v4
      }
    } = _v63();
    return (0, _v12.jsx)(_v73, {
      children: _v0 ? (0, _v12.jsxs)(_v12.Fragment, {
        children: [(0, _v12.jsx)(_v74, {}), (0, _v12.jsx)(_v74, {})]
      }) : (0, _v12.jsxs)(_v12.Fragment, {
        children: [(0, _v12.jsx)(_v71.Button, {
          onClick: _v3,
          disabled: !_v1 || _v2,
          format: "secondary",
          children: _v26.cancel
        }), (0, _v12.jsx)(_v71.Button, {
          loading: _v2,
          disabled: !_v1,
          onClick: _v4,
          children: _v26.save
        })]
      })
    });
  }
  var _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  function _v81(_v0, _v1) {
    var _v2 = _v1.type,
      _v3 = _v1.payload,
      _v4 = void 0 === _v3 ? null : _v3;
    switch (_v2) {
      case "TOGGLE":
        return (0, _v78.c)((0, _v78.c)({}, _v0), {
          open: !_v0.open
        });
      case "CLOSE":
        return (0, _v78.c)((0, _v78.c)({}, _v0), {
          open: !1
        });
      case "SET_COLORSPACE":
        return (0, _v78.c)((0, _v78.c)({}, _v0), {
          colorSpace: _v4
        });
      case "SET_ERROR":
        return (0, _v78.c)((0, _v78.c)({}, _v0), {
          error: _v4
        });
      case "SET_EDITING":
        return (0, _v78.c)((0, _v78.c)({}, _v0), {
          editing: _v4
        });
      case "SET_LAST":
        return _v0;
      case "SET_HEX":
        try {
          var _v5 = _v82(_v4);
          return (0, _v78.c)((0, _v78.c)({}, _v0), {
            colorMeta: _v5
          });
        } catch (_v0) {
          return _v0;
        }
      case "SET_RGB":
        try {
          var _v5 = _v82(_v4);
          return (0, _v78.c)((0, _v78.c)({}, _v0), {
            colorMeta: _v5
          });
        } catch (_v0) {
          return _v0;
        }
      case "SET_HSL":
        try {
          var _v5 = _v82(_v4);
          return (0, _v78.c)((0, _v78.c)({}, _v0), {
            colorMeta: _v5
          });
        } catch (_v0) {
          return _v0;
        }
      default:
        throw Error();
    }
  }
  function _v82(_v0) {
    "string" == typeof _v0 && (_v0 = (0, _v79.parseToHsl)(_v0)), _v0.red && (_v0 = (0, _v79.parseToHsl)((0, _v79.rgb)(_v0)));
    var _v1 = (0, _v80.colorSpaces)(_v0);
    return {
      HSL: _v1.HSL,
      HSV: _v1.HSV,
      HEX: _v1.HEX,
      RGB: _v1.RGB
    };
  }
  _v67.default.div(_v3 || (_v3 = (0, _v78.a)(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
  var _v83 = _v67.default.div(_v4 || (_v4 = (0, _v78.a)(["\n  padding: 1rem;\n  position: relative;\n  width: ", "px;\n  border-radius: 0.25rem;\n  overflow: hidden;\n\n  .react-colorful {\n    width: auto;\n    height: auto;\n  }\n\n  .react-colorful__saturation,\n  .react-colorful__hue {\n    border-radius: 5px;\n  }\n\n  .react-colorful__saturation {\n    height: ", "px;\n  }\n\n  .react-colorful__hue {\n    display: ", ";\n    margin: 1.5rem 0 0;\n    border-radius: 1rem;\n  }\n\n  .react-colorful__saturation-pointer {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n"], ["\n  padding: 1rem;\n  position: relative;\n  width: ", "px;\n  border-radius: 0.25rem;\n  overflow: hidden;\n\n  .react-colorful {\n    width: auto;\n    height: auto;\n  }\n\n  .react-colorful__saturation,\n  .react-colorful__hue {\n    border-radius: 5px;\n  }\n\n  .react-colorful__saturation {\n    height: ", "px;\n  }\n\n  .react-colorful__hue {\n    display: ", ";\n    margin: 1.5rem 0 0;\n    border-radius: 1rem;\n  }\n\n  .react-colorful__saturation-pointer {\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n"])), function (_v0) {
      return _v0.width;
    }, function (_v0) {
      return _v0.height;
    }, function (_v0) {
      return _v0.showHueSlider ? "block" : "none";
    }),
    _v84 = _v67.default.div(_v5 || (_v5 = (0, _v78.a)(["\n  border-radius: 50%;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 1rem;\n  display: inline-flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -0.375rem;\n  z-index: 10;\n  border: 0.5px solid ", ";\n"], ["\n  border-radius: 50%;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 1rem;\n  display: inline-flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: -0.375rem;\n  z-index: 10;\n  border: 0.5px solid ", ";\n"])), function (_v0) {
      var _v1 = _v0.theme;
      return (0, _v79.rgba)(_v1.content.color, .1);
    }),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  function _v89(_v0) {
    var _v1 = _v0.colorMeta,
      _v2 = _v0.dispatch,
      _v3 = _v0.label,
      _v4 = _v0.onChange,
      _v5 = _v0.reset,
      _v6 = _v0.size,
      _v7 = _v0.toggle,
      _v8 = _v0.disabled,
      _v9 = (0, _v14.useRef)(),
      _v10 = _v1.HEX,
      _v11 = (0, _v78._)((0, _v14.useState)(0), 2),
      _v12 = _v11[0],
      _v13 = _v11[1];
    return (0, _v14.useLayoutEffect)(function () {
      _v13((0, _v87.geometry)(null == _v9 ? void 0 : _v9.current).height);
    }, []), _v14.default.createElement("div", {
      style: {
        position: "relative"
      }
    }, _v14.default.createElement(_v86.Input, {
      disabled: _v8,
      label: _v3,
      onClick: _v7,
      ref: _v9,
      size: _v6,
      style: {
        paddingLeft: "2.25rem",
        cursor: "pointer"
      },
      type: "text",
      value: _v10,
      "aria-label": "color",
      readOnly: !0,
      onChange: function (_v0) {
        var _v1 = _v0.target.value;
        _v4 && _v4(_v1), _v2({
          type: "SET_HEX",
          payload: _v1
        });
      }
    }, _v14.default.createElement(_v84, {
      style: {
        background: _v10
      }
    }), _v5.label && _v10.toLowerCase() !== _v5.color.toLowerCase() && _v14.default.createElement(_v85.InnerButton, {
      disabled: _v8,
      "aria-label": "reset",
      format: "basic",
      variant: "minimalTransparent",
      size: _v6,
      onClick: function (_v0) {
        _v0.stopPropagation(), _v4 && _v4((0, _v79.hslToColorString)((0, _v79.parseToHsl)(_v5.color))), _v2({
          type: "SET_HSL",
          payload: (0, _v79.parseToHsl)(_v5.color)
        });
      },
      tooltipText: _v5.label,
      height: _v12
    }, _v14.default.createElement(_v88.History, {
      style: {
        opacity: .5
      }
    }))));
  }
  _v0.i(0);
  var _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0);
  function _v94(_v0) {
    var _v1 = _v0.selectedColor,
      _v2 = _v0.palette,
      _v3 = _v0.label,
      _v4 = _v0.onSelect,
      _v5 = _v0.onEdit,
      _v6 = (0, _v78._)((0, _v14.useState)(0), 2),
      _v7 = _v6[0],
      _v8 = _v6[1],
      _v9 = function (_v0) {
        var _v1,
          _v2 = _v0.key;
        ("ArrowRight" === _v2 || "ArrowLeft" === _v2) && ("ArrowRight" === _v2 && (_v1 = _v7 === _v2.length - 1 ? 0 : _v7 + 1), "ArrowLeft" === _v2 && (_v1 = 0 === _v7 ? _v2.length - 1 : _v7 - 1), _v8(_v1), _v4(_v2[_v1]));
      };
    return _v14.default.createElement(_v95, null, _v3 && _v14.default.createElement(_v91.Paragraph, {
      size: "1",
      style: {
        margin: 0,
        fontWeight: 700
      }
    }, _v3), _v14.default.createElement(_v96, null, _v2.map(function (_v0) {
      return _v14.default.createElement(_v98, {
        selected: _v1.toLowerCase() === _v0.toLowerCase(),
        key: _v0,
        onClick: function () {
          return _v4(_v0);
        }
      }, _v14.default.createElement(_v97, {
        "aria-label": _v0,
        color: _v0,
        onClick: function (_v0) {
          _v0.stopPropagation(), _v4(_v0);
        },
        onKeyUp: _v9
      }, _v14.default.createElement(_v92.Focus, {
        parent: _v97,
        radius: 24
      })));
    }), _v5 && _v14.default.createElement(_v71.Button, {
      icon: _v14.default.createElement(_v93.Pencil, null),
      size: "sm",
      variant: "minimalTransparent",
      format: "basic",
      onClick: _v5
    })));
  }
  var _v95 = _v67.default.div(_v6 || (_v6 = (0, _v78.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  margin-bottom: 1rem;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  margin-bottom: 1rem;\n"]))),
    _v96 = _v67.default.div(_v7 || (_v7 = (0, _v78.a)(["\n  margin-left: auto;\n  display: flex;\n  gap: ", ";\n"], ["\n  margin-left: auto;\n  display: flex;\n  gap: ", ";\n"])), (0, _v79.rem)(4)),
    _v97 = _v67.default.button(_v8 || (_v8 = (0, _v78.a)(["\n  height: ", ";\n  width: ", ";\n  border: ", " solid rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  background-color: ", ";\n  position: relative;\n  outline: none;\n  cursor: pointer;\n"], ["\n  height: ", ";\n  width: ", ";\n  border: ", " solid rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  background-color: ", ";\n  position: relative;\n  outline: none;\n  cursor: pointer;\n"])), (0, _v79.rem)(24), (0, _v79.rem)(24), (0, _v79.rem)(1), function (_v0) {
      return _v0.color;
    }),
    _v98 = _v67.default.div(_v9 || (_v9 = (0, _v78.a)(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  border: ", ";\n  transition: 150ms ease-in-out;\n\n  &:hover {\n    border-color: ", ";\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: ", ";\n  height: ", ";\n  border-radius: ", ";\n  border: ", ";\n  transition: 150ms ease-in-out;\n\n  &:hover {\n    border-color: ", ";\n  }\n"])), (0, _v79.rem)(30), (0, _v79.rem)(30), (0, _v79.rem)(24), function (_v0) {
      return "".concat(_v0.selected ? _v0.theme.formats.primary : "transparent", " solid ").concat((0, _v79.rem)(2));
    }, function (_v0) {
      return _v0.theme.content.color;
    }),
    _v99 = _v0.i(0);
  function _v100() {
    return (_v100 = Object.assign || function (_v0) {
      for (var _v1 = 1; _v1 < arguments.length; _v1++) {
        var _v2 = arguments[_v1];
        for (var _v3 in _v2) Object.prototype.hasOwnProperty.call(_v2, _v3) && (_v0[_v3] = _v2[_v3]);
      }
      return _v0;
    }).apply(this, arguments);
  }
  function _v101(_v0, _v1) {
    if (null == _v0) return {};
    var _v2,
      _v3,
      _v4 = {},
      _v5 = Object.keys(_v0);
    for (_v3 = 0; _v3 < _v5.length; _v3++) _v1.indexOf(_v2 = _v5[_v3]) >= 0 || (_v4[_v2] = _v0[_v2]);
    return _v4;
  }
  function _v102(_v0) {
    var _v1 = (0, _v14.useRef)(_v0),
      _v2 = (0, _v14.useRef)(function (_v0) {
        _v1.current && _v1.current(_v0);
      });
    return _v1.current = _v0, _v2.current;
  }
  var _v103 = function (_v0, _v1, _v2) {
      return void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = 1), _v0 > _v2 ? _v2 : _v0 < _v1 ? _v1 : _v0;
    },
    _v104 = function (_v0) {
      return "touches" in _v0;
    },
    _v105 = function (_v0) {
      return _v0 && _v0.ownerDocument.defaultView || self;
    },
    _v106 = function (_v0, _v1, _v2) {
      var _v3 = _v0.getBoundingClientRect(),
        _v4 = _v104(_v1) ? function (_v0, _v1) {
          for (var _v2 = 0; _v2 < _v0.length; _v2++) if (_v0[_v2].identifier === _v1) return _v0[_v2];
          return _v0[0];
        }(_v1.touches, _v2) : _v1;
      return {
        left: _v103((_v4.pageX - (_v3.left + _v105(_v0).pageXOffset)) / _v3.width),
        top: _v103((_v4.pageY - (_v3.top + _v105(_v0).pageYOffset)) / _v3.height)
      };
    },
    _v107 = function (_v0) {
      _v104(_v0) || _v0.preventDefault();
    },
    _v108 = _v14.default.memo(function (_v0) {
      var _v1 = _v0.onMove,
        _v2 = _v0.onKey,
        _v3 = _v101(_v0, ["onMove", "onKey"]),
        _v4 = (0, _v14.useRef)(null),
        _v5 = _v102(_v1),
        _v6 = _v102(_v2),
        _v7 = (0, _v14.useRef)(null),
        _v8 = (0, _v14.useRef)(!1),
        _v9 = (0, _v14.useMemo)(function () {
          var _v0 = function (_v0) {
              _v107(_v0), (_v104(_v0) ? _v0.touches.length > 0 : _v0.buttons > 0) && _v4.current ? _v5(_v106(_v4.current, _v0, _v7.current)) : _v2(!1);
            },
            _v1 = function () {
              return _v2(!1);
            };
          function _v2(_v0) {
            var _v1 = _v8.current,
              _v2 = _v105(_v4.current),
              _v3 = _v0 ? _v2.addEventListener : _v2.removeEventListener;
            _v3(_v1 ? "touchmove" : "mousemove", _v0), _v3(_v1 ? "touchend" : "mouseup", _v1);
          }
          return [function (_v0) {
            var _v1 = _v0.nativeEvent,
              _v2 = _v4.current;
            if (_v2 && (_v107(_v1), (!_v8.current || _v104(_v1)) && _v2)) {
              if (_v104(_v1)) {
                _v8.current = !0;
                var _v3 = _v1.changedTouches || [];
                _v3.length && (_v7.current = _v3[0].identifier);
              }
              _v2.focus(), _v5(_v106(_v2, _v1, _v7.current)), _v2(!0);
            }
          }, function (_v0) {
            var _v1 = _v0.which || _v0.keyCode;
            _v1 < 37 || _v1 > 40 || (_v0.preventDefault(), _v6({
              left: 39 === _v1 ? .05 : 37 === _v1 ? -.05 : 0,
              top: 40 === _v1 ? .05 : 38 === _v1 ? -.05 : 0
            }));
          }, _v2];
        }, [_v6, _v5]),
        _v10 = _v9[0],
        _v11 = _v9[1],
        _v12 = _v9[2];
      return (0, _v14.useEffect)(function () {
        return _v12;
      }, [_v12]), _v14.default.createElement("div", _v100({}, _v3, {
        onTouchStart: _v10,
        onMouseDown: _v10,
        className: "react-colorful__interactive",
        ref: _v4,
        onKeyDown: _v11,
        tabIndex: 0,
        role: "slider"
      }));
    }),
    _v109 = function (_v0) {
      return _v0.filter(Boolean).join(" ");
    },
    _v110 = function (_v0) {
      var _v1 = _v0.color,
        _v2 = _v0.left,
        _v3 = _v0.top,
        _v4 = _v109(["react-colorful__pointer", _v0.className]);
      return _v14.default.createElement("div", {
        className: _v4,
        style: {
          top: 100 * (void 0 === _v3 ? .5 : _v3) + "%",
          left: 100 * _v2 + "%"
        }
      }, _v14.default.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
          backgroundColor: _v1
        }
      }));
    },
    _v111 = function (_v0, _v1, _v2) {
      return void 0 === _v1 && (_v1 = 0), void 0 === _v2 && (_v2 = Math.pow(10, _v1)), Math.round(_v2 * _v0) / _v2;
    },
    _v112 = function (_v0) {
      return "#" === _v0[0] && (_v0 = _v0.substring(1)), _v0.length < 6 ? {
        r: parseInt(_v0[0] + _v0[0], 16),
        g: parseInt(_v0[1] + _v0[1], 16),
        b: parseInt(_v0[2] + _v0[2], 16),
        a: 4 === _v0.length ? _v111(parseInt(_v0[3] + _v0[3], 16) / 255, 2) : 1
      } : {
        r: parseInt(_v0.substring(0, 2), 16),
        g: parseInt(_v0.substring(2, 4), 16),
        b: parseInt(_v0.substring(4, 6), 16),
        a: 8 === _v0.length ? _v111(parseInt(_v0.substring(6, 8), 16) / 255, 2) : 1
      };
    },
    _v113 = function (_v0) {
      var _v1 = _v0.s,
        _v2 = _v0.v,
        _v3 = _v0.a,
        _v4 = (200 - _v1) * _v2 / 100;
      return {
        h: _v111(_v0.h),
        s: _v111(_v4 > 0 && _v4 < 200 ? _v1 * _v2 / 100 / (_v4 <= 100 ? _v4 : 200 - _v4) * 100 : 0),
        l: _v111(_v4 / 2),
        a: _v111(_v3, 2)
      };
    },
    _v114 = function (_v0) {
      var _v1 = _v113(_v0);
      return "hsl(" + _v1.h + ", " + _v1.s + "%, " + _v1.l + "%)";
    },
    _v115 = function (_v0) {
      var _v1 = _v0.h,
        _v2 = _v0.s,
        _v3 = _v0.v,
        _v4 = _v0.a;
      _v1 = _v1 / 360 * 6, _v2 /= 100, _v3 /= 100;
      var _v5 = Math.floor(_v1),
        _v6 = _v3 * (1 - _v2),
        _v7 = _v3 * (1 - (_v1 - _v5) * _v2),
        _v8 = _v3 * (1 - (1 - _v1 + _v5) * _v2),
        _v9 = _v5 % 6;
      return {
        r: _v111(255 * [_v3, _v7, _v6, _v6, _v8, _v3][_v9]),
        g: _v111(255 * [_v8, _v3, _v3, _v7, _v6, _v6][_v9]),
        b: _v111(255 * [_v6, _v6, _v8, _v3, _v3, _v7][_v9]),
        a: _v111(_v4, 2)
      };
    },
    _v116 = function (_v0) {
      var _v1 = _v0.toString(16);
      return _v1.length < 2 ? "0" + _v1 : _v1;
    },
    _v117 = function (_v0) {
      var _v1 = _v0.r,
        _v2 = _v0.g,
        _v3 = _v0.b,
        _v4 = _v0.a,
        _v5 = _v4 < 1 ? _v116(_v111(255 * _v4)) : "";
      return "#" + _v116(_v1) + _v116(_v2) + _v116(_v3) + _v5;
    },
    _v118 = function (_v0) {
      var _v1 = _v0.r,
        _v2 = _v0.g,
        _v3 = _v0.b,
        _v4 = _v0.a,
        _v5 = Math.max(_v1, _v2, _v3),
        _v6 = _v5 - Math.min(_v1, _v2, _v3),
        _v7 = _v6 ? _v5 === _v1 ? (_v2 - _v3) / _v6 : _v5 === _v2 ? 2 + (_v3 - _v1) / _v6 : 4 + (_v1 - _v2) / _v6 : 0;
      return {
        h: _v111(60 * (_v7 < 0 ? _v7 + 6 : _v7)),
        s: _v111(_v5 ? _v6 / _v5 * 100 : 0),
        v: _v111(_v5 / 255 * 100),
        a: _v4
      };
    },
    _v119 = _v14.default.memo(function (_v0) {
      var _v1 = _v0.hue,
        _v2 = _v0.onChange,
        _v3 = _v109(["react-colorful__hue", _v0.className]);
      return _v14.default.createElement("div", {
        className: _v3
      }, _v14.default.createElement(_v108, {
        onMove: function (_v0) {
          _v2({
            h: 360 * _v0.left
          });
        },
        onKey: function (_v0) {
          _v2({
            h: _v103(_v1 + 360 * _v0.left, 0, 360)
          });
        },
        "aria-label": "Hue",
        "aria-valuenow": _v111(_v1),
        "aria-valuemax": "360",
        "aria-valuemin": "0"
      }, _v14.default.createElement(_v110, {
        className: "react-colorful__hue-pointer",
        left: _v1 / 360,
        color: _v114({
          h: _v1,
          s: 100,
          v: 100,
          a: 1
        })
      })));
    }),
    _v120 = _v14.default.memo(function (_v0) {
      var _v1 = _v0.hsva,
        _v2 = _v0.onChange,
        _v3 = {
          backgroundColor: _v114({
            h: _v1.h,
            s: 100,
            v: 100,
            a: 1
          })
        };
      return _v14.default.createElement("div", {
        className: "react-colorful__saturation",
        style: _v3
      }, _v14.default.createElement(_v108, {
        onMove: function (_v0) {
          _v2({
            s: 100 * _v0.left,
            v: 100 - 100 * _v0.top
          });
        },
        onKey: function (_v0) {
          _v2({
            s: _v103(_v1.s + 100 * _v0.left, 0, 100),
            v: _v103(_v1.v - 100 * _v0.top, 0, 100)
          });
        },
        "aria-label": "Color",
        "aria-valuetext": "Saturation " + _v111(_v1.s) + "%, Brightness " + _v111(_v1.v) + "%"
      }, _v14.default.createElement(_v110, {
        className: "react-colorful__saturation-pointer",
        top: 1 - _v1.v / 100,
        left: _v1.s / 100,
        color: _v114(_v1)
      })));
    }),
    _v121 = function (_v0, _v1) {
      if (_v0 === _v1) return !0;
      for (var _v2 in _v0) if (_v0[_v2] !== _v1[_v2]) return !1;
      return !0;
    },
    _v122 = "u" > typeof window ? _v14.useLayoutEffect : _v14.useEffect,
    _v123 = new Map(),
    _v124 = function (_v0) {
      _v122(function () {
        var _v0 = _v0.current ? _v0.current.ownerDocument : document;
        if (void 0 !== _v0 && !_v123.has(_v0)) {
          var _v1 = _v0.createElement("style");
          _v1.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', _v123.set(_v0, _v1);
          var _v2 = "u" > typeof __webpack_nonce__ ? __webpack_nonce__ : void 0;
          _v2 && _v1.setAttribute("nonce", _v2), _v0.head.appendChild(_v1);
        }
      }, []);
    },
    _v125 = function (_v0) {
      var _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        _v6 = _v0.className,
        _v7 = _v0.colorModel,
        _v8 = _v0.color,
        _v9 = void 0 === _v8 ? _v7.defaultColor : _v8,
        _v10 = _v0.onChange,
        _v11 = _v101(_v0, ["className", "colorModel", "color", "onChange"]),
        _v12 = (0, _v14.useRef)(null);
      _v124(_v12);
      var _v13 = (_v1 = _v102(_v10), _v3 = (_v2 = (0, _v14.useState)(function () {
          return _v7.toHsva(_v9);
        }))[0], _v4 = _v2[1], _v5 = (0, _v14.useRef)({
          color: _v9,
          hsva: _v3
        }), (0, _v14.useEffect)(function () {
          if (!_v7.equal(_v9, _v5.current.color)) {
            var _v0 = _v7.toHsva(_v9);
            _v5.current = {
              hsva: _v0,
              color: _v9
            }, _v4(_v0);
          }
        }, [_v9, _v7]), (0, _v14.useEffect)(function () {
          var _v0;
          _v121(_v3, _v5.current.hsva) || _v7.equal(_v0 = _v7.fromHsva(_v3), _v5.current.color) || (_v5.current = {
            hsva: _v3,
            color: _v0
          }, _v1(_v0));
        }, [_v3, _v7, _v1]), [_v3, (0, _v14.useCallback)(function (_v0) {
          _v4(function (_v0) {
            return Object.assign({}, _v0, _v0);
          });
        }, [])]),
        _v14 = _v13[0],
        _v15 = _v13[1],
        _v16 = _v109(["react-colorful", _v6]);
      return _v14.default.createElement("div", _v100({}, _v11, {
        ref: _v12,
        className: _v16
      }), _v14.default.createElement(_v120, {
        hsva: _v14,
        onChange: _v15
      }), _v14.default.createElement(_v119, {
        hue: _v14.h,
        onChange: _v15,
        className: "react-colorful__last-control"
      }));
    },
    _v126 = {
      defaultColor: "000",
      toHsva: function (_v0) {
        return _v118(_v112(_v0));
      },
      fromHsva: function (_v0) {
        return _v117(_v115({
          h: _v0.h,
          s: _v0.s,
          v: _v0.v,
          a: 1
        }));
      },
      equal: function (_v0, _v1) {
        return _v0.toLowerCase() === _v1.toLowerCase() || _v121(_v112(_v0), _v112(_v1));
      }
    },
    _v127 = function (_v0) {
      return _v14.default.createElement(_v125, _v100({}, _v0, {
        colorModel: _v126
      }));
    };
  function _v128(_v0) {
    var _v1 = _v0.value,
      _v2 = _v0.dispatch,
      _v3 = _v0.onChange,
      _v4 = _v0.throttleSpeed,
      _v5 = (0, _v99.throttle)(function (_v0) {
        _v2({
          type: "SET_HEX",
          payload: _v0
        }), _v3 && _v3(_v0);
      }, _v4);
    return _v14.default.createElement("div", {
      "aria-label": "color picker"
    }, _v14.default.createElement(_v127, {
      color: _v1,
      onChange: _v5
    }));
  }
  function _v129(_v0) {
    var _v1,
      _v2 = _v0.colorMeta,
      _v3 = _v0.colorSpace,
      _v4 = _v0.dispatch,
      _v5 = _v0.editing,
      _v6 = _v0.error,
      _v7 = _v0.onChange,
      _v8 = (0, _v78.b)(_v0, ["colorMeta", "colorSpace", "dispatch", "editing", "error", "onChange"]),
      _v9 = (0, _v14.useRef)(),
      _v10 = _v2.HEX,
      _v11 = _v2.RGB;
    (0, _v14.useEffect)(function () {
      var _v0;
      _v5 && (null == (_v0 = null == _v9 ? void 0 : _v9.current) || _v0.focus());
    }, [_v5]), "HEX" === _v3 && (_v1 = _v10), "RGB" === _v3 && (_v1 = _v133(_v11));
    var _v12 = {
      colorMeta: _v2,
      onClick: function () {
        return _v4({
          type: "SET_EDITING",
          payload: !0
        });
      }
    };
    return _v14.default.createElement(_v14.default.Fragment, null, _v14.default.createElement(_v136, (0, _v78.c)({}, _v8), _v14.default.createElement(_v71.Button, {
      format: "secondary",
      onClick: function () {
        var _v0 = "SET_COLORSPACE";
        "HEX" === _v3 && _v4({
          type: _v0,
          payload: "RGB"
        }), "RGB" === _v3 && _v4({
          type: _v0,
          payload: "HEX"
        });
      },
      status: _v6 ? "negative" : null,
      style: {
        height: "2.35rem"
      }
    }, _v3), _v5 ? _v14.default.createElement(_v130, {
      value: _v1,
      dispatch: _v4,
      error: _v6,
      forwardRef: _v9,
      onChange: _v7
    }) : _v14.default.createElement(_v14.default.Fragment, null, "HEX" === _v3 && _v14.default.createElement(_v131, (0, _v78.c)({}, _v12)), "RGB" === _v3 && _v14.default.createElement(_v132, (0, _v78.c)({}, _v12)))));
  }
  function _v130(_v0) {
    var _v1 = _v0.value,
      _v2 = _v0.dispatch,
      _v3 = _v0.error,
      _v4 = _v0.forwardRef,
      _v5 = _v0.onChange;
    return _v14.default.createElement(_v135, {
      value: _v1,
      onBlur: function () {
        var _v0;
        _v134(null == (_v0 = null == _v4 ? void 0 : _v4.current) ? void 0 : _v0.value).valid || (_v2({
          type: "SET_LAST"
        }), _v2({
          type: "SET_COLORSPACE",
          payload: "HEX"
        }), _v2({
          type: "SET_ERROR",
          payload: !1
        })), _v2({
          type: "SET_EDITING",
          payload: !1
        });
      },
      onChange: function (_v0) {
        var _v1 = _v134(_v0.target.value);
        if (_v1.valid) {
          _v5(_v1.value), _v2({
            type: "SET_COLORSPACE",
            payload: _v1.type
          }), _v2({
            type: "SET_ERROR",
            payload: !1
          });
          var _v2 = void 0;
          "HEX" === _v1.type && (_v2 = _v1.value), "RGB" === _v1.type && (_v2 = (0, _v79.parseToRgb)(_v1.value)), _v2({
            type: "SET_" + _v1.type,
            payload: _v2
          });
        } else _v2({
          type: "SET_COLORSPACE",
          payload: "—"
        }), _v2({
          type: "SET_ERROR",
          payload: !0
        });
      },
      onFocus: function () {
        var _v0;
        return null == (_v0 = null == _v4 ? void 0 : _v4.current) ? void 0 : _v0.select();
      },
      onKeyUp: function (_v0) {
        "Enter" === _v0.key && _v2({
          type: "TOGGLE"
        });
      },
      ref: _v4,
      status: _v3 ? "negative" : null,
      type: "text"
    });
  }
  function _v131(_v0) {
    var _v1 = _v0.colorMeta,
      _v2 = _v0.onClick,
      _v3 = _v1.HEX;
    return _v14.default.createElement(_v135, (0, _v78.c)({
      value: _v3
    }, {
      onClick: _v2,
      type: "text"
    }, {
      readOnly: !0
    }));
  }
  function _v132(_v0) {
    var _v1 = _v0.colorMeta,
      _v2 = _v0.onClick,
      _v3 = _v1.RGB;
    return _v14.default.createElement(_v14.default.Fragment, null, _v14.default.createElement(_v135, (0, _v78.c)({
      value: _v133(_v3)
    }, {
      onClick: _v2,
      type: "text",
      min: 0,
      max: 255,
      readOnly: !0
    }, {
      readOnly: !0
    })));
  }
  function _v133(_v0) {
    var _v1 = (0, _v78._)((0, _v80.roundValues)(_v0), 3),
      _v2 = _v1[0],
      _v3 = _v1[1],
      _v4 = _v1[2];
    return "rgb(".concat(_v2, ", ").concat(_v3, ", ").concat(_v4, ")");
  }
  function _v134(_v0) {
    var _v1,
      _v2 = !1,
      _v3 = _v0.replace(/\s+/g, "").replace(";", "");
    _v3.startsWith("#") && (_v1 = "HEX"), _v3.startsWith("rgb") && (_v1 = "RGB");
    try {
      (0, _v79.grayscale)(_v3), "HEX" !== _v1 && (_v2 = !0), 7 === _v3.length && (_v2 = !0);
    } catch (_v0) {}
    return {
      type: _v1,
      value: _v3,
      valid: _v2
    };
  }
  var _v135 = (0, _v67.default)(_v86.Input)(_v10 || (_v10 = (0, _v78.a)(["\n  width: 100%;\n  flex-grow: 1;\n  display: inline-block;\n\n  + div {\n    margin-left: 0.334rem;\n  }\n"], ["\n  width: 100%;\n  flex-grow: 1;\n  display: inline-block;\n\n  + div {\n    margin-left: 0.334rem;\n  }\n"]))),
    _v136 = _v67.default.div(_v11 || (_v11 = (0, _v78.a)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1.5rem;\n"], ["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1.5rem;\n"])));
  function _v137(_v0) {
    var _v1 = _v0.width,
      _v2 = _v0.height,
      _v3 = _v0.showHueSlider,
      _v4 = _v0.popOverRef,
      _v5 = _v0.presets,
      _v6 = _v0.dispatch,
      _v7 = _v0.onChange,
      _v8 = _v0.throttleSpeed,
      _v9 = _v0.colorMeta,
      _v10 = _v0.state;
    return _v14.default.createElement(_v83, {
      width: _v1,
      height: _v2,
      showHueSlider: _v3,
      ref: _v4
    }, _v5 && _v14.default.createElement(_v94, {
      selectedColor: _v9.HEX,
      palette: _v5.palette,
      label: _v5.label,
      onEdit: _v5.onEdit,
      onSelect: function (_v0) {
        _v6({
          type: "SET_HEX",
          payload: _v0
        }), _v7(_v0);
      }
    }), _v14.default.createElement(_v128, {
      dispatch: _v6,
      onChange: _v7,
      throttleSpeed: _v8,
      value: _v9.HEX
    }), _v14.default.createElement(_v129, (0, _v78.c)({
      dispatch: _v6,
      onChange: _v7
    }, _v10)));
  }
  var _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = (0, _v138.withIris)(function (_v0) {
      var _v1 = _v0.children,
        _v2 = _v0.height,
        _v3 = _v0.initial,
        _v4 = void 0 === _v3 ? {
          color: "#F00",
          colorSpace: "HEX"
        } : _v3,
        _v5 = _v0.label,
        _v6 = _v0.onChange,
        _v7 = _v0.onClose,
        _v8 = _v0.onOpen,
        _v9 = _v0.reset,
        _v10 = void 0 === _v9 ? {
          color: _v4.color,
          label: "reset"
        } : _v9,
        _v11 = _v0.size,
        _v12 = _v0.throttleSpeed,
        _v13 = _v0.value,
        _v14 = _v0.width,
        _v15 = _v0.attach,
        _v16 = _v0.showHueSlider,
        _v17 = _v0.disabled,
        _v18 = _v0.presets,
        _v19 = (0, _v14.useRef)(),
        _v20 = (0, _v14.useRef)();
      (0, _v139.useOutsideClick)([_v19, _v20], function () {
        _v25.open && (_v26({
          type: "CLOSE",
          payload: !0
        }), null == _v7 || _v7());
      }, {
        capture: !0
      });
      var _v21 = (0, _v79.parseToHsl)(_v4.color),
        _v22 = (0, _v80.colorSpaces)(_v21),
        _v23 = {
          open: !1,
          editing: !1,
          error: !1,
          colorMeta: (0, _v78.c)({
            HSL: _v21
          }, _v22),
          colorSpace: "HEX"
        },
        _v24 = (0, _v78._)((0, _v14.useReducer)(_v81, _v23), 2),
        _v25 = _v24[0],
        _v26 = _v24[1],
        _v27 = _v25.open,
        _v28 = _v25.colorMeta;
      (0, _v14.useEffect)(function () {
        _v26({
          type: "SET_HEX",
          payload: _v13
        });
      }, [_v13]);
      var _v29 = function () {
        _v27 && (null == _v7 || _v7()), _v27 || null == _v8 || _v8(), _v26({
          type: "TOGGLE"
        });
      };
      return _v14.default.createElement(_v90.PopOver, {
        attach: void 0 === _v15 ? "bottom" : _v15,
        active: _v27,
        content: _v14.default.createElement(_v137, (0, _v78.c)({}, {
          width: void 0 === _v14 ? 360 : _v14,
          height: void 0 === _v2 ? 360 : _v2,
          showHueSlider: void 0 === _v16 || _v16,
          popOverRef: _v20,
          presets: _v18,
          dispatch: _v26,
          onChange: _v6,
          throttleSpeed: void 0 === _v12 ? 24 : _v12,
          colorMeta: _v28,
          state: _v25
        }))
      }, _v1 ? _v14.default.createElement("div", {
        onClick: function () {
          return !_v17 && _v29();
        },
        ref: _v19
      }, _v1) : _v14.default.createElement("div", {
        ref: _v19
      }, _v14.default.createElement(_v89, {
        colorMeta: _v28,
        dispatch: _v26,
        label: _v5,
        onChange: _v6,
        reset: _v10,
        size: _v11,
        toggle: _v29,
        disabled: _v17
      })));
    });
  let _v141 = _v67.default.div.withConfig({
      displayName: "ColorEmbedOption.style__ColorWrapper",
      componentId: "sc-5fe7588d-0"
    })`
  position: relative;
  width: ${(0, _v66.rem)(100)};
  padding-right: ${(0, _v66.rem)(24)};
  text-align: right;
`,
    _v142 = (0, _v67.default)(_v91.Paragraph).withConfig({
      displayName: "ColorEmbedOption.style__ColorText",
      componentId: "sc-5fe7588d-1"
    })`
  margin-right: ${(0, _v66.rem)(8)};
`,
    _v143 = _v67.default.div.withConfig({
      displayName: "ColorEmbedOption.style__Dot",
      componentId: "sc-5fe7588d-2"
    })`
  position: absolute;
  top: 50%;
  border-radius: 50%;
  width: ${(0, _v66.rem)(24)};
  height: ${(0, _v66.rem)(24)};
  display: inline-flex;
  transform: translateY(-50%);
  z-index: 10;
  border: 0.5px solid ${_v68.core.color.stroke};

  &:hover,
  &[data-active='true'] {
    outline: 1px solid ${_v68.core.color.format.primary};
    border-color: ${_v68.core.color.format.primary};
  }
`;
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0);
  let _v146 = _v67.default.div.withConfig({
      displayName: "layout__EmbedSection",
      componentId: "sc-3de637b9-0"
    })`
  border-bottom: ${(0, _v144.rem)(1)} solid
    ${({
      withBorder: _v0
    }) => _v0 ? _v68.core.color.stroke : "transparent"};
  margin-bottom: ${(0, _v144.rem)(16)};
`,
    _v147 = _v67.default.div.withConfig({
      displayName: "layout__EventEmbedOptionPlaceholder",
      componentId: "sc-3de637b9-1"
    })`
  height: ${(0, _v144.rem)(20)};
  margin-bottom: ${(0, _v144.rem)(16)};
  background-color: ${_v68.core.color.stroke};
`,
    _v148 = _v67.default.label.withConfig({
      displayName: "layout__OptionLabel",
      componentId: "sc-3de637b9-2"
    })`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${(0, _v144.rem)(16)};

  ${({
      disabled: _v0
    }) => _v0 && "cursor: not-allowed;"};
`,
    _v149 = (0, _v67.default)(_v91.Paragraph).withConfig({
      displayName: "layout__OptionText",
      componentId: "sc-3de637b9-3"
    })`
  margin: 0;
  flex-grow: 1;
`,
    _v150 = _v67.default.div.withConfig({
      displayName: "layout__BackgroundImage",
      componentId: "sc-3de637b9-4"
    })`
  display: flex;
  justify-content: center;
  background-image: ${({
      theme: _v0,
      src: _v1
    }) => {
      if (_v1) return `url('${_v1}');`;
      let _v2 = _v0.formats.secondary;
      return `
      linear-gradient(45deg, ${_v2} 25%, transparent 25%),
      linear-gradient(-45deg, ${_v2} 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${_v2} 75%),
      linear-gradient(-45deg, transparent 75%, ${_v2} 75%)
    `;
    }};

  background-size: ${({
      src: _v0
    }) => _v0 ? "contain" : `${(0, _v144.rem)(16)} ${(0, _v144.rem)(16)}`};
  background-position: ${({
      src: _v0
    }) => _v0 ? "center" : `0 0, 0 ${(0, _v144.rem)(8)}, ${(0, _v144.rem)(8)} ${(0, _v144.rem)(-8)}, ${(0, _v144.rem)(-8)} ${(0, _v144.rem)(0)}`};
  background-repeat: ${({
      src: _v0
    }) => _v0 ? "no-repeat" : "repeat"};
`,
    _v151 = (0, _v67.default)(_v145.Toggle).withConfig({
      displayName: "layout__StyledToggle",
      componentId: "sc-3de637b9-5"
    })`
  width: ${(0, _v144.rem)(32)};
`,
    _v152 = _v67.default.div.withConfig({
      displayName: "layout__Overlay",
      componentId: "sc-3de637b9-6"
    })`
  ${_v72}
  height: 100%;
  width: 100%;
  z-index: 2;
  cursor: pointer;

  > svg {
    display: none;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);

    > svg {
      display: inline-block;
    }
  }
`;
  function _v153({
    payloadKey: _v0,
    label: _v1,
    color: _v2,
    disabled: _v3,
    onChange: _v4
  }) {
    let [_v5, _v6] = (0, _v14.useState)(!1),
      _v7 = -1 === _v2.indexOf("#") ? `#${_v2}` : _v2,
      _v8 = (0, _v77.default)(_v4, 100);
    return (0, _v12.jsx)(_v140, {
      width: 225,
      height: 125,
      reset: {},
      label: null,
      size: "md",
      attach: "top",
      initial: {
        color: _v7
      },
      onOpen: () => _v6(!0),
      onClose: () => _v6(!1),
      onChange: _v8,
      children: (0, _v12.jsxs)(_v148, {
        htmlFor: _v0,
        disabled: _v3,
        children: [(0, _v12.jsx)(_v149, {
          size: 2,
          children: _v1
        }), (0, _v12.jsxs)(_v141, {
          children: [(0, _v12.jsx)(_v142, {
            size: 2,
            children: _v7
          }), (0, _v12.jsx)(_v143, {
            style: {
              background: _v7
            },
            "data-active": _v5
          })]
        })]
      })
    });
  }
  var _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0);
  let _v160 = (0, _v67.default)(_v159.Card).withConfig({
      displayName: "LogoPicker.style__LogoPickerWrapper",
      componentId: "sc-da3c1dd-0"
    })`
  display: flex;
  flex-direction: column;
  width: ${(0, _v66.rem)(292)};
  padding: ${(0, _v66.rem)(20)};
  height: 100%;
  overflow: hidden;
`,
    _v161 = _v67.default.div.withConfig({
      displayName: "LogoPicker.style__LogoWrapper",
      componentId: "sc-da3c1dd-1"
    })`
  position: relative;
  display: flex;
  flex-direction: column;
  height: ${(0, _v66.rem)(120)};
`,
    _v162 = (0, _v67.default)(_v150).withConfig({
      displayName: "LogoPicker.style__LogoPlaceholder",
      componentId: "sc-da3c1dd-2"
    })`
  margin-bottom: ${(0, _v66.rem)(14)};
  height: ${(0, _v66.rem)(104)};
  width: 100%;
`,
    _v163 = (0, _v67.default)(_v86.Input).withConfig({
      displayName: "LogoPicker.style__StyledInput",
      componentId: "sc-da3c1dd-3"
    })`
  margin: ${(0, _v66.rem)(12)} auto;
  width: 100%;
`,
    _v164 = _v67.default.div.withConfig({
      displayName: "LogoPicker.style__Divider",
      componentId: "sc-da3c1dd-4"
    })`
  border: ${(0, _v66.rem)(.5)} solid ${_v68.core.color.stroke};
  width: 100vw;
  transform: translateX(-10%);
  margin: ${(0, _v66.rem)(8)} 0 ${(0, _v66.rem)(18)} 0;
`,
    _v165 = _v67.default.div.withConfig({
      displayName: "LogoPicker.style__LoadingState",
      componentId: "sc-da3c1dd-5"
    })`
  ${_v72}
  border-radius: ${(0, _v66.rem)(3)};
  border: ${(0, _v66.rem)(1)} solid ${(0, _v158.blue)(500)};
  box-shadow:
    0 0 ${(0, _v66.rem)(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${(0, _v66.rem)(4)} ${(0, _v66.rem)(8)} 0 rgba(0, 0, 0, 0.2);
  margin: ${(0, _v66.rem)(12)} ${(0, _v66.rem)(10)} ${(0, _v66.rem)(12)} ${(0, _v66.rem)(10)};
  height: ${(0, _v66.rem)(90)};
  width: ${(0, _v66.rem)(228)};
`,
    _v166 = /\b((?:https?:\/\/|www\d{0,3}[.])([a-z0-9\-]+[.])(?:[a-z0-9\-]+[.])?([a-z]{2,4}(\/)?)((?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+)?(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])?)/i;
  function _v167(_v0) {
    let _v1 = _v0 && _v0.match(/player\/(\d+)/);
    return _v1 && _v1.length > 1 ? parseInt(_v1[1]) : -1;
  }
  var _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0);
  let _v171 = _v67.css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  min-width: ${(0, _v66.rem)(25)};
  width: ${(0, _v66.rem)(25)};
  height: ${(0, _v66.rem)(50)};

  &:active {
    transform: scale(0.98) translateY(-50%);
  }
`,
    _v172 = _v67.default.div.withConfig({
      displayName: "Carousel.style__CarouselWrapper",
      componentId: "sc-b7e9ef2a-0"
    })`
  position: relative;
  display: flex;
  width: 100%;
  height: ${(0, _v66.rem)(120)};
`,
    _v173 = _v67.default.div.withConfig({
      displayName: "Carousel.style__LogoRow",
      componentId: "sc-b7e9ef2a-1"
    })`
  display: inline-block;
  white-space: nowrap;
  position: absolute;
  transition: left 0.3s ease-out;
  ${({
      currentLogoIndex: _v0
    }) => `left: ${10 - 238 * _v0}px;`};
`,
    _v174 = _v67.default.div.withConfig({
      displayName: "Carousel.style__Logo",
      componentId: "sc-b7e9ef2a-2"
    })`
  padding: ${(0, _v66.rem)(10)};
  position: relative;
  display: inline-block;
  margin: ${(0, _v66.rem)(12)} ${(0, _v66.rem)(10)} ${(0, _v66.rem)(12)} 0;
  height: ${(0, _v66.rem)(90)};
  width: ${(0, _v66.rem)(228)};
  border-radius: ${(0, _v66.rem)(3)};
  background: url(${({
      src: _v0
    }) => _v0}) center/contain no-repeat content-box;
  box-shadow:
    0 0 ${(0, _v66.rem)(1)} 0 rgba(0, 0, 0, 0.15),
    0 ${(0, _v66.rem)(4)} ${_v0 => _v0.isCurrent ? (0, _v66.rem)(8) : (0, _v66.rem)(4)} 0
      rgba(0, 0, 0, ${_v0 => _v0.isCurrent ? .2 : .04});
  border: ${(0, _v66.rem)(1)} solid
    ${({
      isCurrent: _v0
    }) => _v0 ? _v68.core.color.format.primary : "transparent"};
  transition: border 0.3s ease-out;

  &:hover {
    button {
      visibility: visible;
    }
  }
`,
    _v175 = (0, _v67.default)(_v71.Button).withConfig({
      displayName: "Carousel.style__LeftButton",
      componentId: "sc-b7e9ef2a-3"
    })`
  ${_v171};
  border-radius: 0 ${(0, _v66.rem)(25)} ${(0, _v66.rem)(25)} 0;
  left: -${(0, _v66.rem)(20)};
  display: ${_v0 => _v0.shouldShow ? "flex" : "none"};

  div {
    border-radius: ${(0, _v66.rem)(25)} 0 0 ${(0, _v66.rem)(25)};
  }

  svg {
    position: absolute;
    right: ${(0, _v66.rem)(5)};
    transform: rotate(180deg);
  }
`,
    _v176 = (0, _v67.default)(_v71.Button).withConfig({
      displayName: "Carousel.style__RightButton",
      componentId: "sc-b7e9ef2a-4"
    })`
  ${_v171};
  border-radius: ${(0, _v66.rem)(25)} 0 0 ${(0, _v66.rem)(25)};
  right: -${(0, _v66.rem)(20)};
  display: ${({
      shouldShow: _v0
    }) => _v0 ? "flex" : "none"};

  div {
    border-radius: ${(0, _v66.rem)(25)} 0 0 ${(0, _v66.rem)(25)};
  }

  svg {
    position: absolute;
    left: ${(0, _v66.rem)(5)};
  }
`,
    _v177 = (0, _v67.default)(_v71.Button).withConfig({
      displayName: "Carousel.style__RemoveButton",
      componentId: "sc-b7e9ef2a-5"
    })`
  position: absolute;
  top: ${(0, _v66.rem)(-14)};
  right: ${(0, _v66.rem)(-15)};
  visibility: hidden;

  svg path {
    fill: ${(0, _v158.red)(500)};
  }
`;
  function _v178({
    logos: _v0,
    selectedLogoIndex: _v1,
    origLogo: _v2,
    onChange: _v3,
    onDeleteLogo: _v4
  }) {
    return (0, _v12.jsxs)(_v172, {
      children: [(0, _v12.jsx)(_v173, {
        currentLogoIndex: _v1,
        children: _v0.map((_v0, _v1) => {
          let _v2 = _v167(_v0.baseLink),
            _v3 = _v2 !== (_v2 ? _v167(_v2.url) : -1);
          return (0, _v12.jsx)(_v174, {
            isCurrent: _v1 === _v1,
            src: _v0.baseLink,
            children: _v3 ? (0, _v12.jsx)(_v170.Tip, {
              content: _v26.remove,
              children: (0, _v12.jsx)(_v177, {
                icon: (0, _v12.jsx)(_v169.CloseX, {}),
                size: "xs",
                format: "secondary",
                onClick: _v0 => {
                  _v0.stopPropagation(), _v4(_v2);
                }
              })
            }) : null
          }, `logo-${_v1}`);
        })
      }), (0, _v12.jsx)(_v175, {
        shouldShow: _v1 > 0,
        pill: !0,
        format: "secondary",
        icon: (0, _v12.jsx)(_v168.ChevronRightSmall, {}),
        onClick: () => {
          let _v0 = _v1 - 1;
          _v0[_v0]?.baseLink && _v3(_v0[_v0]?.baseLink);
        }
      }), (0, _v12.jsx)(_v176, {
        shouldShow: _v1 < _v0.length - 1,
        pill: !0,
        format: "secondary",
        icon: (0, _v12.jsx)(_v168.ChevronRightSmall, {}),
        onClick: () => {
          let _v0 = _v1 + 1;
          _v0[_v0]?.baseLink && _v3(_v0[_v0]?.baseLink);
        }
      })]
    });
  }
  function _v179({
    isUploading: _v0,
    isLoading: _v1,
    logos: _v2,
    selectedLogo: _v3,
    origLogo: _v4,
    onChange: _v5,
    onUploadLogo: _v6,
    onDeleteLogo: _v7
  }) {
    let _v8,
      _v9 = _v2.length,
      _v10 = (0, _v14.useMemo)(() => _v3?.url ? _v2.findIndex(_v0 => _v167(_v0.baseLink) === _v167(_v3.url)) : 0, [_v2, _v3?.url]),
      _v11 = (0, _v14.useCallback)(_v0 => {
        _v5({
          url: _v0
        });
      }, [_v5]),
      _v12 = _v3?.link && (_v8 = _v3?.link, !_v166.test(_v8));
    return (0, _v12.jsxs)(_v160, {
      children: [(0, _v12.jsxs)(_v76.Header, {
        size: "6",
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [_v26.logo, _v9 > 0 && (0, _v12.jsx)("span", {
          children: (0, _v25.translate)({
            singular: "{CURRENT_INDEX} of {TOTAL}",
            replacements: {
              CURRENT_INDEX: _v10 + 1,
              TOTAL: _v9
            },
            dictionary: {
              es: {
                singular: "{CURRENT_INDEX} de {TOTAL}"
              },
              "de-DE": {
                singular: "{CURRENT_INDEX} von {TOTAL}"
              },
              "fr-FR": {
                singular: "{CURRENT_INDEX} sur {TOTAL}"
              },
              "ja-JP": {
                singular: "{CURRENT_INDEX} / {TOTAL}"
              },
              "ko-KR": {
                singular: "{CURRENT_INDEX}/{TOTAL}"
              },
              "pt-BR": {
                singular: "{CURRENT_INDEX} de {TOTAL}"
              },
              "zh-CN": {
                singular: "{CURRENT_INDEX} / {TOTAL}"
              }
            }
          })
        })]
      }), (0, _v12.jsx)(_v161, {
        children: _v1 || _v0 ? (0, _v12.jsx)(_v165, {
          children: (0, _v12.jsx)(_v155.Spinner, {})
        }) : (0, _v12.jsx)(_v12.Fragment, {
          children: _v2.length > 0 ? (0, _v12.jsx)(_v178, {
            logos: _v2,
            selectedLogoIndex: _v10,
            origLogo: _v4,
            onChange: _v11,
            onDeleteLogo: _v7
          }) : (0, _v12.jsx)(_v162, {})
        })
      }), (0, _v12.jsxs)(_v148, {
        htmlFor: "show-logo-playback",
        disabled: !1,
        children: [(0, _v12.jsx)(_v149, {
          size: 2,
          children: _v26.showLogoDurringPlayback
        }), (0, _v12.jsx)(_v151, {
          id: "show-logo",
          size: "sm",
          checked: _v3?.sticky || !1,
          onChange: () => {
            _v3 && _v5({
              sticky: !_v3.sticky
            });
          }
        })]
      }), (0, _v12.jsxs)(_v148, {
        htmlFor: "link-logo",
        disabled: !1,
        children: [(0, _v12.jsx)(_v149, {
          size: 2,
          children: _v26.linkThisLogo
        }), (0, _v12.jsx)(_v151, {
          id: "link-logo",
          size: "sm",
          checked: _v3?.useLink || !1,
          onChange: () => {
            _v3 && _v5({
              useLink: !_v3.useLink
            });
          }
        })]
      }), (0, _v12.jsx)(_v163, {
        disabled: !_v3?.useLink,
        placeholder: _v26.linkUrl,
        size: "md",
        value: _v3?.link || "",
        onChange: _v0 => {
          _v3 && _v5({
            link: _v0.target.value
          });
        },
        status: _v12 ? "negative" : "neutral",
        messages: _v12 ? {
          error: _v26.invalidUrl
        } : void 0
      }), (0, _v12.jsx)(_v164, {}), (0, _v12.jsx)(_v157.FileUpload, {
        accept: _v29,
        disabled: _v0,
        onChange: _v0 => {
          _v0.target?.files?.length && _v6(_v0.target.files[0]), _v0.target.value = "";
        },
        children: (0, _v12.jsx)(_v71.Button, {
          fluid: !0,
          format: "secondary",
          icon: (0, _v12.jsx)(_v156.Image, {}),
          size: "md",
          children: _v26.upload
        })
      })]
    });
  }
  let _v180 = _v67.default.div.withConfig({
      displayName: "CustomLogoOption.styles__CustomLogoWrapper",
      componentId: "sc-46170472-0"
    })`
  position: relative;
  display: flex;
  width: 100%;
`,
    _v181 = _v67.default.div.withConfig({
      displayName: "CustomLogoOption.styles__LogoPreviewWrapper",
      componentId: "sc-46170472-1"
    })`
  position: absolute;
  bottom: ${(0, _v66.rem)(10)};
  right: ${(0, _v66.rem)(36)};
`,
    _v182 = (0, _v67.default)(_v145.Toggle).withConfig({
      displayName: "CustomLogoOption.styles__StyledToggle",
      componentId: "sc-46170472-2"
    })`
  width: ${(0, _v66.rem)(32)};
`,
    _v183 = (0, _v67.default)(_v150).withConfig({
      displayName: "CustomLogoOption.styles__SelectedLogo",
      componentId: "sc-46170472-3"
    })`
  border: ${(0, _v66.rem)(1)} solid ${_v68.core.color.stroke};
  width: ${(0, _v66.rem)(56)};
  height: ${(0, _v66.rem)(32)};
  margin-right: ${(0, _v66.rem)(8)};
`;
  var _v184 = _v0.i(0),
    _v185 = _v0.i(0);
  let _v186 = ["baseLink", "link", "sizes"];
  function _v187({
    payloadKey: _v0,
    label: _v1,
    disabled: _v2,
    selectedLogo: _v3,
    origLogo: _v4,
    onChange: _v5
  }) {
    let {
        isLoading: _v6,
        isUploading: _v7,
        customLogos: _v8,
        uploadCustomLogo: _v9,
        deleteCustomLogo: _v10
      } = function () {
        let {
            ownerId: _v0,
            viewer: _v1,
            actions: {
              setCustomLogo: _v2
            }
          } = _v63(),
          [_v3, _v4] = (0, _v14.useState)(!0),
          [_v5, _v6] = (0, _v14.useState)(!1),
          [_v7, _v8] = (0, _v14.useState)([]);
        (0, _v14.useEffect)(() => {
          if (_v0 && _v1) try {
            (0, _v185.getUserCustomlogos)({
              baseUrl: `//${_v1.apiUrl}`,
              headers: {
                Authorization: `jwt ${_v1.jwt}`,
                "Content-Type": "application/json"
              },
              select: _v186,
              where: {
                userId: _v0
              }
            }).then(_v0 => {
              _v8(_v0.data), _v4(!1);
            });
          } catch (_v0) {
            _v4(!1), _v8([]);
          }
        }, [_v0, _v1]);
        let _v9 = (0, _v14.useCallback)(async _v0 => {
            if (_v0 && _v1) {
              _v6(!0);
              try {
                (0, _v185.postUserCustomlogos)({
                  baseUrl: `//${_v1.apiUrl}`,
                  headers: {
                    Authorization: `jwt ${_v1.jwt}`,
                    "Content-Type": "application/json"
                  },
                  where: {
                    userId: _v0
                  },
                  select: _v186
                }).then(_v0 => {
                  _v0.link ? fetch(_v0.link, {
                    method: "PUT",
                    body: _v0,
                    headers: {
                      "Content-Type": _v0.type
                    }
                  }).then(() => {
                    _v7.unshift(_v0), _v8(_v7), _v2({
                      url: _v0.baseLink
                    }), _v6(!1);
                  }) : _v6(!1);
                });
              } catch (_v0) {
                _v6(!1);
              }
            }
          }, [_v0, _v1, _v7, _v2]),
          _v10 = (0, _v14.useCallback)(async _v0 => {
            if (_v0 && _v1) {
              _v4(!0);
              try {
                (0, _v184.deleteUserCustomlogo)({
                  baseUrl: `//${_v1.apiUrl}`,
                  headers: {
                    Authorization: `jwt ${_v1.jwt}`,
                    "Content-Type": "application/json"
                  },
                  where: {
                    userId: _v0,
                    logoId: _v0
                  }
                }).then(() => {
                  let _v0 = _v7.filter(_v0 => _v167(_v0.baseLink) !== _v0);
                  _v8(_v0), _v2({
                    url: _v0[0]?.baseLink ?? ""
                  }), _v4(!1);
                });
              } catch (_v0) {
                _v4(!1);
              }
            }
          }, [_v0, _v1, _v7, _v2]);
        return {
          isLoading: _v3,
          isUploading: _v5,
          customLogos: _v7,
          uploadCustomLogo: _v9,
          deleteCustomLogo: _v10
        };
      }(),
      _v11 = (0, _v14.useCallback)(() => {
        let _v0 = {
          active: !_v3.active
        };
        _v0.active && _v8.length && (_v0.url = _v8[0].baseLink), _v5(_v0);
      }, [_v3, _v8, _v5]),
      _v12 = (0, _v14.useCallback)(() => {
        let _v0;
        _v0 = _v3.link, _v166.test(_v0) || _v5({
          link: ""
        });
      }, [_v5, _v3.link]),
      _v13 = (0, _v12.jsx)(_v179, {
        isUploading: _v7,
        isLoading: _v6,
        logos: _v8,
        selectedLogo: _v3,
        origLogo: _v4,
        onChange: _v5,
        onUploadLogo: _v9,
        onDeleteLogo: _v10
      });
    return (0, _v12.jsxs)(_v180, {
      children: [(0, _v12.jsxs)(_v148, {
        htmlFor: _v0,
        disabled: _v2 || _v6,
        children: [(0, _v12.jsx)(_v149, {
          size: 2,
          children: _v1
        }), (0, _v12.jsx)(_v182, {
          size: "sm",
          disabled: _v2 || _v6,
          checked: _v3.active,
          onChange: _v11,
          id: _v0
        })]
      }), (0, _v12.jsx)(_v181, {
        children: _v3.active ? (0, _v12.jsx)(_v90.PopOver, {
          attach: "top",
          content: _v13,
          onClose: _v12,
          children: (0, _v12.jsx)(_v183, {
            src: _v3.url,
            children: (0, _v12.jsx)(_v152, {
              children: (0, _v12.jsx)(_v154.EditPencil, {
                color: "white",
                boxSize: (0, _v144.rem)(22)
              })
            })
          })
        }) : null
      })]
    });
  }
  var _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0);
  function _v194() {
    let {
        mutate: _v0
      } = (0, _v192.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v193.useGctlConfig)(),
      [_v5, _v6] = (0, _v189.useInternalState)();
    return [(0, _v14.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/pictures${(0, _v189.serializeQuery)(_v0)}`, (0, _v190.getUserLiveEventPictures)({
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
  }
  "true" === _v188.default.env.STORYBOOK && (0, _v189.assignMswData)(function (_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v193.useGctlConfig)();
    return (0, _v191.default)(_v2 ? `/users/${_v2.where.userId}/live_events/${_v2.where.liveEventId}/pictures${(0, _v189.serializeQuery)(_v2)}` : () => null, _v2 ? () => (0, _v190.getUserLiveEventPictures)({
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
  }, {
    endpoint: "/users/:userId/live_events/:liveEventId/pictures",
    method: "GET"
  }), "true" === _v188.default.env.STORYBOOK && (0, _v189.assignMswData)(_v194, {
    endpoint: "/users/:userId/live_events/:liveEventId/pictures",
    method: "GET"
  }), "true" === _v188.default.env.STORYBOOK && (0, _v189.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v192.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v193.useGctlConfig)(),
      [_v5, _v6] = (0, _v189.useInternalState)();
    return [(0, _v14.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/live_events/${_v0.where.liveEventId}/pictures${(0, _v189.serializeQuery)(_v0)}`, (0, _v190.postUserLiveEventPictures)({
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
    endpoint: "/users/:userId/live_events/:liveEventId/pictures",
    method: "POST"
  });
  var _v195 = _v0.i(0);
  let _v196 = (0, _v67.default)(_v76.Header).withConfig({
      displayName: "ThumbnailPicker.styles__ThumbnailHeader",
      componentId: "sc-e72ef36d-0"
    })`
  margin-bottom: ${(0, _v66.rem)(20)};
`,
    _v197 = (0, _v67.default)(_v159.Card).withConfig({
      displayName: "ThumbnailPicker.styles__ThumbnailPickerWrapper",
      componentId: "sc-e72ef36d-1"
    })`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex-shrink: 0;
  width: ${(0, _v66.rem)(304)};
  height: 100%;
  min-height: ${(0, _v66.rem)(197)};
  max-height: ${(0, _v66.rem)(282)};
  padding: ${(0, _v66.rem)(20)} ${(0, _v66.rem)(24)};
`,
    _v198 = _v67.default.div.withConfig({
      displayName: "ThumbnailPicker.styles__ThumbnailList",
      componentId: "sc-e72ef36d-2"
    })`
  display: grid;
  position: relative;
  grid-template: auto auto / auto auto;
  height: 100%;
  width: 100%;
  max-height: ${(0, _v66.rem)(144)};
  overflow: hidden;
  overflow-y: auto;
  gap: ${(0, _v66.rem)(18)};
  margin-bottom: ${(0, _v66.rem)(18)};
`,
    _v199 = _v67.default.div.withConfig({
      displayName: "ThumbnailPicker.styles__BaseThumbnail",
      componentId: "sc-e72ef36d-3"
    })`
  ${_v72}
  position: relative;
  height: ${(0, _v66.rem)(62)};
  width: ${(0, _v66.rem)(118)};
  border-radius: ${(0, _v66.rem)(4)};
`,
    _v200 = (0, _v67.default)(_v169.CloseX).withConfig({
      displayName: "ThumbnailPicker.styles__DeleteButton",
      componentId: "sc-e72ef36d-4"
    })`
  background-color: ${(0, _v158.red)(500)};
  position: absolute;
  visibility: hidden;
  right: 0;
  top: 0;
  height: ${(0, _v66.rem)(16)};
  width: ${(0, _v66.rem)(16)};
  padding: ${(0, _v66.rem)(2)};
  color: ${_v158.white};
  border-radius: ${(0, _v66.rem)(4)};

  path {
    fill: ${_v158.white};
    stroke: ${_v158.white};
  }
`,
    _v201 = (0, _v67.default)(_v199).withConfig({
      displayName: "ThumbnailPicker.styles__Thumbnail",
      componentId: "sc-e72ef36d-5"
    })`
  cursor: pointer;
  background: ${({
      src: _v0
    }) => _v0 ? `url(${_v0}) center/contain no-repeat content-box` : "none"};
  border: ${(0, _v66.rem)(2)} solid
    ${({
      isSelected: _v0
    }) => _v0 ? _v68.core.color.format.primary : "transparent"};
  transition: border 0.3s ease-out;

  &:hover {
    border: ${(0, _v66.rem)(2)} solid
      ${({
      isSelected: _v0,
      isRemovable: _v1
    }) => _v1 && !_v0 ? (0, _v158.red)(500) : _v0 ? _v68.core.color.format.primary : "transparent"};

    ${_v200} {
      visibility: visible;
    }
  }
`,
    _v202 = (0, _v67.default)(_v199).withConfig({
      displayName: "ThumbnailPicker.styles__EmptyThumbnail",
      componentId: "sc-e72ef36d-6"
    })`
  border: ${(0, _v66.rem)(2)} dotted ${_v68.core.color.stroke};
  cursor: unset;
`,
    _v203 = _v67.default.div.withConfig({
      displayName: "ThumbnailPicker.styles__LoadingState",
      componentId: "sc-e72ef36d-7"
    })`
  ${_v72}
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  border-radius: ${(0, _v66.rem)(4)};
  margin-bottom: ${(0, _v66.rem)(18)};
`;
  function _v204({
    isLoading: _v0,
    isUploading: _v1,
    thumbnails: _v2,
    activeThumbnail: _v3,
    originalThumbnail: _v4,
    onThumbnailSelect: _v5,
    onThumbnailUpload: _v6,
    onThumbnailDelete: _v7
  }) {
    let _v8 = _v2.length % 2 != 0;
    return (0, _v12.jsxs)(_v197, {
      children: [(0, _v12.jsx)(_v196, {
        size: "6",
        children: _v26.thumbnail
      }), _v0 || _v1 ? (0, _v12.jsx)(_v203, {
        children: (0, _v12.jsx)(_v155.Spinner, {})
      }) : null, (0, _v12.jsxs)(_v198, {
        children: [_v2.map(_v0 => {
          let _v1 = !!(_v3 && _v3.uri === _v0.uri),
            _v2 = !!(_v4 && _v4.uri === _v0.uri),
            _v3 = !_v1 && !_v2 && !!_v0.uri;
          return (0, _v12.jsx)(_v201, {
            src: _v0.link,
            isSelected: _v1,
            isRemovable: _v3,
            onClick: () => {
              _v1 || _v5(_v0);
            },
            children: _v3 ? (0, _v12.jsx)(_v169.CloseX, {
              backgroundColor: "red.500",
              position: "absolute",
              visibility: "hidden",
              right: "0",
              top: "0",
              boxSize: (0, _v144.rem)(16),
              padding: (0, _v144.rem)(2),
              color: "white",
              stroke: "white",
              borderRadius: (0, _v144.rem)(4),
              onClick: _v0 => {
                _v0.stopPropagation(), _v7(_v0);
              }
            }) : null
          }, _v0.uri);
        }), _v8 ? (0, _v12.jsx)(_v202, {}) : null]
      }), (0, _v12.jsx)(_v157.FileUpload, {
        accept: _v29,
        disabled: _v1,
        onChange: _v0 => {
          _v0.target?.files?.length && _v6(_v0.target.files[0]), _v0.target.value = "";
        },
        children: (0, _v12.jsx)(_v71.Button, {
          icon: (0, _v12.jsx)(_v156.Image, {}),
          iconPosition: "left",
          format: "secondary",
          fluid: !0,
          children: _v26.upload
        })
      })]
    });
  }
  let _v205 = _v67.default.div.withConfig({
      displayName: "ThumbnailOption.styles__ThumbnailWrapper",
      componentId: "sc-654e695e-0"
    })`
  position: relative;
  display: flex;
  width: 100%;
`,
    _v206 = (0, _v67.default)(_v150).withConfig({
      displayName: "ThumbnailOption.styles__ActiveThumbnail",
      componentId: "sc-654e695e-1"
    })`
  border: ${(0, _v66.rem)(1)} solid ${_v68.core.color.stroke};
  width: ${(0, _v66.rem)(56)};
  height: ${(0, _v66.rem)(32)};
`;
  function _v207({
    label: _v0,
    activeThumbnail: _v1,
    originalThumbnail: _v2,
    onChange: _v3
  }) {
    let {
        isLoading: _v4,
        isUploading: _v5,
        thumbnails: _v6,
        uploadThumbnail: _v7,
        deleteThumbnail: _v8
      } = function () {
        let {
            ownerId: _v0,
            eventId: _v1,
            viewer: _v2,
            actions: _v3
          } = _v63(),
          {
            setNotification: _v4,
            setThumbnail: _v5
          } = _v3,
          [_v6, _v7] = (0, _v14.useState)(!1),
          [_v8, _v9] = (0, _v14.useState)(!1),
          [_v10, _v11] = (0, _v14.useState)([_v30]),
          [_v12, {
            data: _v13,
            loading: _v14
          }] = _v194();
        (0, _v14.useEffect)(() => {
          _v0 && _v1 && _v12({
            select: ["uri", "baseLink"],
            where: {
              userId: _v0,
              liveEventId: _v1
            }
          });
        }, [_v0, _v1]), (0, _v14.useEffect)(() => {
          if (_v13) {
            let _v0 = _v13.data.map(_v0 => ({
              uri: _v0.uri,
              link: _v0.baseLink
            }));
            _v0.push(_v30), _v11(_v0);
          }
        }, [_v13]);
        let _v15 = (0, _v14.useCallback)(async _v0 => {
            if (_v0 && _v1 && _v2) {
              _v9(!0);
              try {
                let {
                    picture: _v0
                  } = await (0, _v195.uploadEventPicture)({
                    baseUrl: `//${_v2.apiUrl}`,
                    headers: {
                      Authorization: `jwt ${_v2.jwt}`,
                      "Content-Type": "application/json"
                    },
                    userId: _v0,
                    liveEventId: _v1,
                    upload: {
                      body: _v0,
                      contentType: _v0.type
                    },
                    activate: !1
                  }),
                  _v1 = {
                    uri: _v0.uri,
                    link: _v0.baseLink
                  };
                _v10.unshift(_v1), _v11(_v10), _v5(_v1);
              } catch (_v0) {
                _v4({
                  message: _v26.errorMsg,
                  status: "negative"
                });
              } finally {
                _v9(!1);
              }
            }
          }, [_v0, _v1, _v2, _v10, _v5, _v4]),
          _v16 = (0, _v14.useCallback)(_v0 => {
            let _v1 = (0, _v23.parseThumbnailIdFromUrl)(_v0.uri);
            if (_v0 && _v1 && _v2 && _v1 > 0) {
              _v7(!0);
              try {
                (0, _v21.deleteUserLiveEventPicture)({
                  baseUrl: `//${_v2.apiUrl}`,
                  headers: {
                    Authorization: `jwt ${_v2.jwt}`,
                    "Content-Type": "application/json"
                  },
                  where: {
                    userId: _v0,
                    liveEventId: _v1,
                    thumbnailId: _v1
                  }
                }).then(() => {
                  let _v0 = _v10.filter(_v0 => (0, _v23.parseThumbnailIdFromUrl)(_v0.uri) !== _v1);
                  _v11(_v0), _v7(!1);
                });
              } catch (_v0) {
                _v4({
                  message: _v26.errorMsg,
                  status: "negative"
                }), _v7(!1);
              }
            }
          }, [_v0, _v1, _v2, _v10, _v4]);
        return {
          isLoading: _v6 || _v14,
          isUploading: _v8,
          thumbnails: _v10,
          uploadThumbnail: _v15,
          deleteThumbnail: _v16
        };
      }(),
      _v9 = (0, _v12.jsx)(_v204, {
        isLoading: _v4,
        isUploading: _v5,
        thumbnails: _v6,
        activeThumbnail: _v1,
        originalThumbnail: _v2,
        onThumbnailSelect: _v3,
        onThumbnailUpload: _v7,
        onThumbnailDelete: _v8
      });
    return (0, _v12.jsx)(_v205, {
      children: (0, _v12.jsxs)(_v148, {
        children: [(0, _v12.jsx)(_v149, {
          size: 2,
          children: _v0
        }), (0, _v12.jsx)(_v90.PopOver, {
          attach: "top",
          content: _v9,
          children: (0, _v12.jsx)(_v206, {
            src: _v1?.link,
            children: (0, _v12.jsx)(_v152, {
              children: (0, _v12.jsx)(_v154.EditPencil, {
                color: "white",
                boxSize: (0, _v144.rem)(22)
              })
            })
          })
        })]
      })
    });
  }
  function _v208({
    payloadKey: _v0,
    label: _v1,
    checked: _v2,
    disabled: _v3,
    onToggle: _v4
  }) {
    return (0, _v12.jsxs)(_v148, {
      htmlFor: _v0,
      disabled: _v3,
      children: [(0, _v12.jsx)(_v149, {
        size: 2,
        children: _v1
      }), (0, _v12.jsx)(_v151, {
        size: "sm",
        disabled: _v3,
        checked: _v2,
        id: _v0,
        onChange: _v4
      })]
    });
  }
  let _v209 = _v67.default.div.withConfig({
      displayName: "PlayButton.styles__PlayButtonWrapper",
      componentId: "sc-862531f2-0"
    })`
  display: flex;
  flex-direction: column;
`,
    _v210 = _v67.default.div.withConfig({
      displayName: "PlayButton.styles__OptionsWrapper",
      componentId: "sc-862531f2-1"
    })`
  display: flex;
  gap: ${(0, _v66.rem)(16)};
  width: 100%;
  padding-bottom: ${(0, _v66.rem)(24)};
`,
    _v211 = (0, _v67.default)(_v159.Card).withConfig({
      displayName: "PlayButton.styles__CardStyled",
      componentId: "sc-862531f2-2"
    })`
  border-radius: ${(0, _v66.rem)(8)};
`,
    _v212 = [{
      value: _v28.AUTO,
      label: _v26.auto
    }, {
      value: _v28.BOTTOM,
      label: _v26.bottom
    }, {
      value: _v28.CENTER,
      label: _v26.center
    }];
  function _v213({
    position: _v0,
    label: _v1,
    onChange: _v2
  }) {
    return (0, _v12.jsxs)(_v209, {
      children: [(0, _v12.jsx)(_v91.Paragraph, {
        size: "2",
        children: _v1
      }), (0, _v12.jsx)(_v210, {
        children: _v212.map(({
          value: _v0,
          label: _v1
        }) => (0, _v12.jsx)(_v211, {
          selected: _v0 === _v0,
          children: (0, _v12.jsx)(_v71.Button, {
            fluid: !0,
            format: "secondary",
            onClick: () => _v2(_v0),
            children: _v1
          })
        }, _v0))
      })]
    });
  }
  function _v214() {
    let {
        state: {
          isLoading: _v0,
          embed: _v1,
          thumbnail: _v2,
          status: _v3
        },
        actions: _v4
      } = _v63(),
      {
        toggleEmbedSetting: _v5,
        setEmbedColorSetting: _v6,
        setCustomLogo: _v7,
        setThumbnail: _v8,
        setPlayButtonPosition: _v9
      } = _v4,
      _v10 = "ended" === _v3;
    return (0, _v12.jsx)(_v12.Fragment, {
      children: _v57.map(_v0 => (0, _v12.jsxs)(_v146, {
        withBorder: _v0.withBorder,
        id: _v0.id,
        children: [(0, _v12.jsx)(_v76.Header, {
          size: "5",
          children: _v0.title
        }), (0, _v12.jsx)(_v12.Fragment, {
          children: _v0.options.map(_v0 => {
            if (_v0 || !_v1.draft) return (0, _v12.jsx)(_v147, {}, _v0.payloadKey);
            if (_v0.type === _v31) {
              let _v0 = !!(_v0.disableReason === _v27.COMPLETED && _v10);
              return (0, _v12.jsx)(_v208, {
                payloadKey: _v0.payloadKey,
                label: _v0.label,
                disabled: _v0,
                checked: (0, _v18.default)(_v1.draft, _v0.payloadKey),
                onToggle: () => _v5(_v0)
              }, _v0.payloadKey);
            }
            return _v0.type === _v32 ? (0, _v12.jsx)(_v153, {
              payloadKey: _v0.payloadKey,
              label: _v0.label,
              disabled: !1,
              color: (0, _v18.default)(_v1.draft, _v0.payloadKey),
              onChange: _v0 => {
                _v6(_v0, _v0);
              }
            }, _v0.payloadKey) : _v0.type === _v34 ? (0, _v12.jsx)(_v187, {
              payloadKey: _v0.payloadKey,
              label: _v0.label,
              selectedLogo: (0, _v18.default)(_v1.draft, _v0.payloadKey),
              origLogo: (0, _v18.default)(_v1.committed, _v0.payloadKey),
              disabled: !1,
              onChange: _v0 => {
                _v7(_v0);
              }
            }, _v0.payloadKey) : _v0.type === _v33 ? (0, _v12.jsx)(_v207, {
              label: _v0.label,
              activeThumbnail: _v2.draft,
              originalThumbnail: _v2.committed,
              onChange: _v0 => {
                _v8(_v0);
              }
            }, _v0.payloadKey) : _v0.type === _v35 ? (0, _v12.jsx)(_v213, {
              position: _v1.draft.playButtonPosition,
              label: _v0.label,
              onChange: _v0 => _v9(_v0)
            }, _v0.payloadKey) : null;
          })
        })]
      }, _v0.id))
    });
  }
  var _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0);
  let _v218 = (0, _v14.forwardRef)(({
      sourceUrl: _v0
    }, _v1) => (0, _v12.jsx)(_v12.Fragment, {
      children: _v0 ? (0, _v12.jsx)(_v215.Flex, {
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        minH: "700px",
        children: (0, _v12.jsx)(_v216.Box, {
          width: "100%",
          maxWidth: (0, _v144.rem)(960),
          aspectRatio: 16 / 9,
          children: (0, _v12.jsx)(_v216.Box, {
            as: "iframe",
            width: "100%",
            height: "100%",
            src: _v0,
            ref: _v1,
            frameBorder: 0
          })
        })
      }) : (0, _v12.jsx)(_v217.Center, {
        height: "100vh",
        width: "100%",
        children: (0, _v12.jsx)(_v155.Spinner, {
          boxSize: (0, _v144.rem)(48),
          size: "md"
        })
      })
    })),
    _v219 = _v67.default.div.withConfig({
      displayName: "EventAppearancePage.style__PageWrapper",
      componentId: "sc-31d4bccb-0"
    })`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-width: ${(0, _v66.rem)(0)};
  min-height: ${(0, _v66.rem)(740)};
  overflow: hidden;
  background: ${_v68.core.color.surface(200)};
`,
    _v220 = _v67.default.div.withConfig({
      displayName: "EventAppearancePage.style__HeaderWrapper",
      componentId: "sc-31d4bccb-1"
    })`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  padding: ${(0, _v66.rem)(12)} ${(0, _v66.rem)(16)};
  min-height: ${(0, _v66.rem)(64)};
  height: ${(0, _v66.rem)(64)};
  max-height: ${(0, _v66.rem)(64)};
  background: ${_v68.core.color.surface(450)};
  border-bottom: ${(0, _v66.rem)(1)} solid ${_v68.core.color.stroke};
`,
    _v221 = (0, _v67.default)(_v76.Header).withConfig({
      displayName: "EventAppearancePage.style__HeaderText",
      componentId: "sc-31d4bccb-2"
    })`
  margin: ${(0, _v66.rem)(0)} ${(0, _v66.rem)(0)} ${(0, _v66.rem)(0)} ${(0, _v66.rem)(24)};
`,
    _v222 = _v67.default.main.withConfig({
      displayName: "EventAppearancePage.style__Content",
      componentId: "sc-31d4bccb-3"
    })`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
`,
    _v223 = _v67.default.div.withConfig({
      displayName: "EventAppearancePage.style__SidebarWrapper",
      componentId: "sc-31d4bccb-4"
    })`
  flex-shrink: 0;
  display: flex;
  width: ${(0, _v66.rem)(340)};
  padding: ${(0, _v66.rem)(24)};
  flex-direction: column;
  background: ${_v68.core.color.surface(450)};
  border-right: ${(0, _v66.rem)(1)} solid ${_v68.core.color.stroke};
  overflow-y: scroll;
`,
    _v224 = _v67.default.div.withConfig({
      displayName: "EventAppearancePage.style__Workspace",
      componentId: "sc-31d4bccb-5"
    })`
  background: ${_v68.core.color.surface(250)};
  padding: ${(0, _v66.rem)(60)};
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;
  function _v225() {
    let {
      player: _v0,
      ownerId: _v1,
      notification: _v2,
      actions: {
        setNotification: _v3
      }
    } = _v63();
    return (0, _v12.jsxs)(_v219, {
      id: "appearance-page",
      children: [(0, _v12.jsxs)(_v220, {
        id: "appearance-header",
        children: [(0, _v12.jsx)(_v70, {
          ownerId: _v1
        }), (0, _v12.jsx)(_v221, {
          size: "6",
          children: _v26.customizePlayer
        }), (0, _v12.jsx)(_v17.Spacer, {}), (0, _v12.jsx)(_v75, {})]
      }), (0, _v12.jsxs)(_v222, {
        id: "appearance-content",
        children: [(0, _v12.jsx)(_v223, {
          id: "appearance-sidebar",
          children: (0, _v12.jsx)(_v214, {})
        }), (0, _v12.jsx)(_v224, {
          id: "appearance-workspace",
          children: (0, _v12.jsx)(_v218, {
            sourceUrl: _v0.sourceUrl,
            ref: _v0.elementRef
          })
        }), (0, _v12.jsx)(_v16.Notification, {
          status: _v2?.status ?? "neutral",
          showing: !!_v2,
          onComplete: () => _v3(null),
          content: _v2?.message ?? ""
        })]
      })]
    });
  }
  function _v226({
    eventId: _v0
  }) {
    let _v1 = (0, _v14.useContext)(_v15.ViewerContext);
    return _v1 ? (0, _v12.jsx)(_v62, {
      viewer: _v1,
      eventId: Number(_v0),
      children: (0, _v12.jsx)(_v225, {})
    }) : (0, _v12.jsx)(_v12.Fragment, {});
  }
  var _v227 = _v0.i(0);
  function _v228({
    children: _v0
  }) {
    let _v1 = (0, _v14.useContext)(_v67.ThemeContext),
      _v2 = (0, _v14.useContext)(_v15.ViewerContext);
    return _v1?.isReady ? (0, _v12.jsxs)(_v67.ThemeProvider, {
      theme: _v1,
      children: [_v0, _v2 ? (0, _v12.jsx)(_v227.EssentialFooter, {
        ..._v2,
        enableQuotaMenu: !1
      }) : null]
    }) : (0, _v12.jsx)(_v12.Fragment, {});
  }
  let _v229 = ({
    eventId: _v0
  }) => (0, _v12.jsx)(_v226, {
    eventId: _v0
  });
  (0, _v13.withPageSetup)(({
    params: _v0
  }) => {
    let _v1 = _v0?.eventId;
    return _v1 && "string" == typeof _v1 ? {
      props: {
        hasThemeSupport: !0,
        eventId: _v1
      }
    } : {
      notFound: !0
    };
  }, {
    requireLogin: !0
  }), _v229.getLayout = _v0 => (0, _v12.jsx)(_v228, {
    children: _v0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v229], 0);
}