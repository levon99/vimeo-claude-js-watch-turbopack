{
  "use strict";

  let _v1;
  var _v2 = _v0.i(0),
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
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  let _v24 = ({
    children: _v0,
    ..._v1
  }) => (0, _v2.jsx)(_v18.TableContainer, {
    borderRadius: "lg",
    pb: "0",
    pt: "0",
    ..._v1,
    children: _v0
  });
  _v24.Content = ({
    children: _v0,
    ..._v1
  }) => (0, _v2.jsx)(_v17.Table, {
    variant: "simple",
    ..._v1,
    children: _v0
  }), _v24.Title = _v0 => (0, _v2.jsx)(_v9.Flex, {
    alignItems: "center",
    bg: "fill-surface",
    p: "md",
    position: "sticky",
    pr: "xs",
    top: 0,
    zIndex: 1,
    ..._v0
  }), _v24.Header = ({
    children: _v0
  }) => (0, _v2.jsx)(_v19.Thead, {
    children: (0, _v2.jsx)(_v23.Tr, {
      children: (0, _v2.jsx)(_v22.Th, {
        textColor: "text-secondary",
        children: _v0
      })
    })
  }), _v24.Body = ({
    children: _v0
  }) => (0, _v2.jsx)(_v20.Tbody, {
    children: _v0
  }), _v24.Row = ({
    children: _v0,
    ..._v1
  }) => (0, _v2.jsx)(_v23.Tr, {
    h: "100%",
    cursor: "pointer",
    _hover: {
      background: "fill-component-hover"
    },
    _last: {
      "td:last-of-type": {
        borderBottom: "none"
      }
    },
    children: (0, _v2.jsx)(_v21.Td, {
      children: (0, _v2.jsx)(_v9.Flex, {
        alignItems: "center",
        gap: "2",
        ..._v1,
        children: _v0
      })
    })
  }), _v0.s(["List", 0, _v24], 0);
  let _v25 = {
      h: 40,
      w: 80
    },
    _v26 = {
      colorOne: "#000000",
      colorTwo: "#00adef",
      colorThree: "#ffffff",
      colorFour: "#000000"
    },
    _v27 = "image/jpeg, image/png, image/gif",
    _v28 = (0, _v11.rem)(72),
    _v29 = (0, _v11.rem)(40),
    _v30 = "3.4.15",
    _v31 = (0, _v11.rem)(560),
    _v32 = {
      moreVideos: "videos",
      callToAction: "link",
      shareButton: "share",
      customImage: "image",
      loop: "loop",
      thumbnail: "beginning",
      empty: "nothing",
      customMessage: "text"
    },
    _v33 = {
      airplay: "airplay",
      askAi: "ask_ai",
      audioTracks: "audio_tracks",
      autopip: "auto_pip",
      chapters: "chapters",
      chromecast: "chromecast",
      closedCaptions: "cc",
      colors: "colors",
      customLogo: "custom_logo",
      embed: "embed",
      fullscreen: "fullscreen",
      like: "like",
      name: "title",
      owner: "byline",
      pip: "pip",
      playButtonPosition: "play_button_position",
      playbar: "playbar",
      portrait: "portrait",
      qualitySelector: "quality",
      reaction: "reaction",
      share: "share",
      skippingForward: "skipping_forward",
      speed: "speed",
      title: "title",
      transcript: "transcript",
      vimeoLogo: "logo",
      volume: "volume",
      watchLater: "watch_later"
    },
    _v34 = {
      auto: 0,
      bottom: 1,
      center: 2
    },
    _v35 = {
      description: ""
    },
    _v36 = {
      outroVideosCollectionType: "uploaded_videos",
      videoUris: []
    },
    _v37 = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?«»“”‘’]))/;
  _v0.s(["COLOR_DEFAULTS", 0, _v26, "DEFAULT_DESCRIPTION", 0, _v35, "DEFAULT_MORE_VIDEOS", 0, _v36, "EMBED_OPTIONS_KEYS_MAP", 0, _v33, "END_SCREEN_TYPES", 0, _v32, "IMAGE_ACCEPT_FORMATS", 0, _v27, "MAX_INPUT_LENGTH", 0, 128, "PLAY_BUTTON_POSITION_MAP", 0, _v34, "PRESET_DEMO_VIDEO_ID", 0, 0, "PREVIEW_DIMENSIONS", 0, _v25, "THEME_MODAL_MAX_WIDTH", 0, _v31, "THUMBNAIL_HEIGHT_REM", 0, _v29, "THUMBNAIL_WIDTH_REM", 0, _v28, "VALID_URL_REGEX", 0, _v37, "VIDEOS_API_VERSION", 0, _v30, "VIMEO_DEFAULT_PRESET_ID", 0, -1], 0);
  let _v38 = () => ({
    accentColor: (0, _v16.translate)({
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
    airplay: (0, _v16.translate)({
      singular: "Airplay",
      dictionary: {
        es: {
          singular: "AirPlay"
        },
        "de-DE": {
          singular: "AirPlay"
        },
        "fr-FR": {
          singular: "AirPlay"
        },
        "ja-JP": {
          singular: "AirPlay"
        },
        "ko-KR": {
          singular: "AirPlay"
        },
        "pt-BR": {
          singular: "AirPlay"
        },
        "zh-CN": {
          singular: "隔空播放"
        }
      }
    }),
    altText: (0, _v16.translate)({
      singular: "Alternative text",
      dictionary: {
        es: {
          singular: "Texto alternativo"
        },
        "de-DE": {
          singular: "Alternativtext"
        },
        "fr-FR": {
          singular: "Texte alternatif"
        },
        "ja-JP": {
          singular: "代替テキスト"
        },
        "ko-KR": {
          singular: "대체 텍스트"
        },
        "pt-BR": {
          singular: "Texto alternativo"
        }
      }
    }),
    altTextDescription: (0, _v16.translate)({
      singular: "Describe the image to help people using screen readers.",
      dictionary: {
        es: {
          singular: "Describe la imagen para ayudar a la gente que use lectores de pantalla con audio."
        },
        "de-DE": {
          singular: "Beschreiben Sie das Bild, um Menschen mit Bildschirmlesegeräten zu helfen."
        },
        "fr-FR": {
          singular: "Décrire l'image pour aider les gens utilisant un lecteur d'écran"
        },
        "ja-JP": {
          singular: "スクリーンリーダーを使用する人向けに画像の説明を加えてください。"
        },
        "ko-KR": {
          singular: "이미지를 설명하여 스크린 리더 사용자에게 도움을 주세요."
        },
        "pt-BR": {
          singular: "Descreva a imagem para ajudar as pessoas que usam leitores de tela."
        },
        "zh-CN": {
          singular: "描述图像，以帮助用户使用屏幕阅读器。"
        }
      }
    }),
    audioTracks: (0, _v16.translate)({
      singular: "Audio tracks",
      dictionary: {
        es: {
          singular: "Pistas de audio"
        },
        "de-DE": {
          singular: "Audiospuren"
        },
        "fr-FR": {
          singular: "Pistes audio"
        },
        "ja-JP": {
          singular: "オーディオトラック"
        },
        "ko-KR": {
          singular: "오디오 트랙"
        },
        "pt-BR": {
          singular: "Faixas de áudio"
        },
        "zh-CN": {
          singular: "音轨"
        }
      }
    }),
    backgroundColor: (0, _v16.translate)({
      singular: "Background color",
      dictionary: {
        es: {
          singular: "Color de fondo"
        },
        "de-DE": {
          singular: "Hintergrundfarbe"
        },
        "fr-FR": {
          singular: "Couleur de fond"
        },
        "ja-JP": {
          singular: "背景色"
        },
        "ko-KR": {
          singular: "배경색"
        },
        "pt-BR": {
          singular: "Cor do fundo"
        },
        "zh-CN": {
          singular: "背景颜色"
        }
      }
    }),
    backToBeginningDescription: (0, _v16.translate)({
      singular: "This video will return to the beginning and display your thumbnail in the player",
      dictionary: {
        es: {
          singular: "Este video volverá al principio y mostrará su miniatura en el reproductor"
        },
        "de-DE": {
          singular: "Dieses Video kehrt nach dem vollständigen Abspielen zum Anfang zurück und wird Ihre Miniaturansicht im Player anzeigen."
        },
        "fr-FR": {
          singular: "Cette vidéo reviendra au début et affichera votre vignette dans le lecteur."
        },
        "ja-JP": {
          singular: "この動画は最初に戻りプレーヤーでサムネイルを表示します"
        },
        "ko-KR": {
          singular: "이 동영상의 처음으로 다시 돌아가 플레이어에서 썸네일을 표시합니다."
        },
        "pt-BR": {
          singular: "Este vídeo voltará ao início e mostrará a sua miniatura (thumbnail) no player"
        },
        "zh-CN": {
          singular: "此视频将返回开头，并在播放器中显示您的缩略图"
        }
      }
    }),
    branding: (0, _v16.translate)({
      singular: "Branding",
      dictionary: {
        es: {
          singular: "Marca"
        },
        "fr-FR": {
          singular: "Image de marque"
        },
        "ja-JP": {
          singular: "ブランディング"
        },
        "ko-KR": {
          singular: "브랜딩"
        },
        "pt-BR": {
          singular: "Marca"
        },
        "zh-CN": {
          singular: "品牌设计"
        }
      }
    }),
    buttonText: (0, _v16.translate)({
      singular: "Button text",
      dictionary: {
        es: {
          singular: "Texto del botón"
        },
        "de-DE": {
          singular: "Button-Text"
        },
        "fr-FR": {
          singular: "Texte du bouton"
        },
        "ja-JP": {
          singular: "ボタンのテキスト"
        },
        "ko-KR": {
          singular: "버튼 텍스트"
        },
        "pt-BR": {
          singular: "Texto do botão"
        },
        "zh-CN": {
          singular: "按钮文本"
        }
      }
    }),
    byline: (0, _v16.translate)({
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
    callToAction: (0, _v16.translate)({
      singular: "Call to action",
      dictionary: {
        es: {
          singular: "Llamada a la acción"
        },
        "de-DE": {
          singular: "Aufruf zum Handeln"
        },
        "fr-FR": {
          singular: "Appel à l'action"
        },
        "ja-JP": {
          singular: "CTA"
        },
        "ko-KR": {
          singular: "콜 투 액션 (Call To Action)"
        },
        "pt-BR": {
          singular: "Chamada para ação"
        },
        "zh-CN": {
          singular: "行动号召"
        }
      }
    }),
    categories: (0, _v16.translate)({
      singular: "Categories",
      dictionary: {
        es: {
          singular: "Categorías"
        },
        "de-DE": {
          singular: "Kategorien"
        },
        "fr-FR": {
          singular: "Catégories"
        },
        "ja-JP": {
          singular: "カテゴリー"
        },
        "ko-KR": {
          singular: "카테고리"
        },
        "pt-BR": {
          singular: "Categorias"
        },
        "zh-CN": {
          singular: "类别"
        }
      }
    }),
    chapters: (0, _v16.translate)({
      singular: "Chapters",
      dictionary: {
        es: {
          singular: "Capítulos"
        },
        "de-DE": {
          singular: "Kapitel"
        },
        "fr-FR": {
          singular: "Chapitres"
        },
        "ja-JP": {
          singular: "チャプター"
        },
        "ko-KR": {
          singular: "챕터"
        },
        "pt-BR": {
          singular: "Capítulos"
        },
        "zh-CN": {
          singular: "章节"
        }
      }
    }),
    chromecast: (0, _v16.translate)("Chromecast"),
    closedCaptions: (0, _v16.translate)({
      singular: "Closed captions",
      dictionary: {
        es: {
          singular: "Subtítulos ocultos"
        },
        "de-DE": {
          singular: "Erweiterte Untertitel"
        },
        "fr-FR": {
          singular: "Légendes"
        },
        "ja-JP": {
          singular: "クローズドキャプション"
        },
        "ko-KR": {
          singular: "폐쇄 자막"
        },
        "pt-BR": {
          singular: "Legendas ocultas (CC)"
        },
        "zh-CN": {
          singular: "隐藏式字幕"
        }
      }
    }),
    controls: (0, _v16.translate)({
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
    creativeCommons: (0, _v16.translate)({
      singular: "Creative Commons License",
      dictionary: {
        es: {
          singular: "Licencia de Creative Commons"
        },
        "de-DE": {
          singular: "Creative Commons-Lizenz"
        },
        "fr-FR": {
          singular: "Licence Creative Commons"
        },
        "ja-JP": {
          singular: "クリエイティブ・コモンズ ライセンス"
        },
        "ko-KR": {
          singular: "크리에이티브 커먼즈 라이선스"
        },
        "pt-BR": {
          singular: "Licença Creative Commons"
        },
        "zh-CN": {
          singular: "知识共享许可"
        }
      }
    }),
    credits: (0, _v16.translate)({
      singular: "Credits",
      dictionary: {
        es: {
          singular: "Créditos"
        },
        "de-DE": {
          singular: "Namen der Mitwirkenden"
        },
        "fr-FR": {
          singular: "Crédits"
        },
        "ja-JP": {
          singular: "クレジット"
        },
        "ko-KR": {
          singular: "크레딧"
        },
        "pt-BR": {
          singular: "Créditos"
        },
        "zh-CN": {
          singular: "致谢"
        }
      }
    }),
    customImage: (0, _v16.translate)({
      singular: "Custom image",
      dictionary: {
        es: {
          singular: "Imagen personalizada"
        },
        "de-DE": {
          singular: "Selbst ausgewähltes Bild "
        },
        "fr-FR": {
          singular: "Image personnalisée"
        },
        "ja-JP": {
          singular: "カスタム画像"
        },
        "ko-KR": {
          singular: "커스텀 이미지"
        },
        "pt-BR": {
          singular: "Imagem customizada"
        },
        "zh-CN": {
          singular: "自定义图片"
        }
      }
    }),
    customLogo: (0, _v16.translate)({
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
          singular: "사용자 지정 로고"
        },
        "pt-BR": {
          singular: "Logotipo personalizado"
        },
        "zh-CN": {
          singular: "自定义徽标"
        }
      }
    }),
    customMessage: (0, _v16.translate)({
      singular: "Custom message",
      dictionary: {
        es: {
          singular: "Mensaje personalizado"
        },
        "de-DE": {
          singular: "Benutzerdefinierte Nachricht"
        },
        "fr-FR": {
          singular: "Message personnalisé"
        },
        "ja-JP": {
          singular: "カスタムメッセージ"
        },
        "ko-KR": {
          singular: "커스텀 메시지 입력"
        },
        "pt-BR": {
          singular: "Mensagem customizada"
        },
        "zh-CN": {
          singular: "自定义消息"
        }
      }
    }),
    dateAdded: (0, _v16.translate)({
      singular: "Date added",
      dictionary: {
        es: {
          singular: "Fecha de subida"
        },
        "de-DE": {
          singular: "Datum hinzugefügt"
        },
        "fr-FR": {
          singular: "Date ajouté"
        },
        "ja-JP": {
          singular: "追加日"
        },
        "ko-KR": {
          singular: "추가된 날짜"
        },
        "pt-BR": {
          singular: "Data do carregamento"
        },
        "zh-CN": {
          singular: "日期已添加"
        }
      }
    }),
    deleteConfirmationMsg: (0, _v16.translate)({
      singular: "Deleting this preset will unlink it from your videos. They will keep their current customizations but will no longer receive updates from the preset.",
      dictionary: {
        es: {
          singular: "Si elimina esta configuración predeterminada, se desvinculará de sus videos. Mantendrán su personalización actual, pero ya no recibirán actualizaciones de la configuración predeterminada."
        },
        "de-DE": {
          singular: "Wenn Sie diese Voreinstellung löschen, ist sie nicht mehr mit Ihren Videos verknüpft. Derzeitige Anpassungen werden beibehalten, die Videos erhalten jedoch keine weiteren Updates von der Voreinstellung."
        },
        "fr-FR": {
          singular: "La suppression de ce préréglage le dissociera de vos vidéos. Elles conserveront leurs réglages personnalisés actuels mais ne recevront plus de mises à jour du préréglage."
        },
        "ja-JP": {
          singular: "このプリセットを削除すると、動画とのリンクが解除されます。現在のカスタマイズは維持されますが、プリセットからの更新は受信しなくなります。"
        },
        "ko-KR": {
          singular: "이 사전 설정을 삭제하면 동영상과의 연결이 해제됩니다. 현재 사용자 지정은 유지되지만 사전 설정의 업데이트는 더 이상 받지 못합니다."
        },
        "pt-BR": {
          singular: "Excluir esta predefinição a desvinculará dos seus vídeos. Eles manterão as personalizações atuais, mas não receberão mais atualizações da predefinição."
        },
        "zh-CN": {
          singular: "删除此预设将取消其与您的视频链接。他们将保留当前的自定义设置，但将不再接收来自预设的更新。"
        }
      }
    }),
    deleteModalTitle: _v0 => (0, _v16.translate)({
      singular: 'Delete "{NAME}"',
      replacements: {
        NAME: _v0
      },
      dictionary: {
        es: {
          singular: 'Eliminar "{NAME}"'
        },
        "de-DE": {
          singular: "„{NAME}“ löschen"
        },
        "fr-FR": {
          singular: "Supprimer « {NAME} »"
        },
        "ja-JP": {
          singular: "「{NAME}」を削除"
        },
        "ko-KR": {
          singular: '"{NAME}" 삭제'
        },
        "pt-BR": {
          singular: 'Excluir "{NAME}"'
        },
        "zh-CN": {
          singular: "删除“{NAME}”"
        }
      }
    }),
    deletePreset: (0, _v16.translate)({
      singular: "Delete",
      dictionary: {
        es: {
          singular: "Eliminar"
        },
        "de-DE": {
          singular: "Löschen"
        },
        "fr-FR": {
          singular: "Supprimer"
        },
        "ja-JP": {
          singular: "削除"
        },
        "ko-KR": {
          singular: "삭제"
        },
        "pt-BR": {
          singular: "Excluir"
        },
        "zh-CN": {
          singular: "删除"
        }
      }
    }),
    approvedPresetCannotBeDeleted: (0, _v16.translate)({
      singular: "Approved preset cannot be deleted here",
      dictionary: {
        es: {
          singular: "El ajuste preestablecido aprobado no se puede eliminar aquí"
        },
        "de-DE": {
          singular: "Die freigegebene Voreinstellung kann hier nicht gelöscht werden"
        },
        "fr-FR": {
          singular: "Le préréglage approuvé ne peut pas être supprimé ici"
        },
        "ja-JP": {
          singular: "承認済みプリセットはここでは削除できません"
        },
        "ko-KR": {
          singular: "승인된 프리셋은 여기에서 삭제할 수 없습니다"
        },
        "pt-BR": {
          singular: "Predefinição aprovada não pode ser excluída aqui"
        },
        "zh-CN": {
          singular: "已批准的预设无法在此删除"
        }
      }
    }),
    description: (0, _v16.translate)({
      singular: "Description",
      dictionary: {
        es: {
          singular: "Descripción"
        },
        "de-DE": {
          singular: "Beschreibung"
        },
        "ja-JP": {
          singular: "説明"
        },
        "ko-KR": {
          singular: "설명"
        },
        "pt-BR": {
          singular: "Descrição"
        },
        "zh-CN": {
          singular: "描述"
        }
      }
    }),
    embed: (0, _v16.translate)({
      singular: "Embed",
      dictionary: {
        es: {
          singular: "Insertar"
        },
        "de-DE": {
          singular: "Einbetten"
        },
        "fr-FR": {
          singular: "Intégration"
        },
        "ja-JP": {
          singular: "埋め込み"
        },
        "ko-KR": {
          singular: "임베드"
        },
        "pt-BR": {
          singular: "Incorporação"
        },
        "zh-CN": {
          singular: "嵌入"
        }
      }
    }),
    embeds: (0, _v16.translate)({
      singular: "Embeds",
      dictionary: {
        es: {
          singular: "Incrustaciones"
        },
        "de-DE": {
          singular: "Einbettungen"
        },
        "fr-FR": {
          singular: "Intégrations"
        },
        "ja-JP": {
          singular: "埋め込み"
        },
        "ko-KR": {
          singular: "임베드"
        },
        "pt-BR": {
          singular: "Incorporações"
        },
        "zh-CN": {
          singular: "嵌入内容"
        }
      }
    }),
    embedDescription: (0, _v16.translate)({
      singular: "How the player looks when embedded on other sites.",
      dictionary: {
        es: {
          singular: "Cómo se ve el reproductor cuando está incrustado en otros sitios."
        },
        "de-DE": {
          singular: "Wie der Videoplayer aussieht, wenn er auf anderen Websites eingebettet ist."
        },
        "fr-FR": {
          singular: "Apparence du lecteur lorsqu’il est intégré sur d’autres sites."
        },
        "ja-JP": {
          singular: "他のサイトに埋め込まれたときのプレーヤーの見え方。"
        },
        "ko-KR": {
          singular: "플레이어가 다른 사이트에 임베드될 때의 모습."
        },
        "pt-BR": {
          singular: "Como o reprodutor aparece quando incorporado em outros sites."
        },
        "zh-CN": {
          singular: "播放器嵌入到其他站点时的外观."
        }
      }
    }),
    empty: (0, _v16.translate)({
      singular: "Empty",
      dictionary: {
        es: {
          singular: "Vacía"
        },
        "de-DE": {
          singular: "Leer"
        },
        "fr-FR": {
          singular: "Vide"
        },
        "ja-JP": {
          singular: "空"
        },
        "ko-KR": {
          singular: "내용 없음"
        },
        "pt-BR": {
          singular: "Vazio"
        },
        "zh-CN": {
          singular: "空"
        }
      }
    }),
    emptyDescription: (0, _v16.translate)({
      singular: "This video will display a black frame when it ends",
      dictionary: {
        es: {
          singular: "Este video mostrará un fotograma negro cuando termine"
        },
        "de-DE": {
          singular: "Dieses Video wird am Ende einen schwarzen Rahmen anzeigen"
        },
        "fr-FR": {
          singular: "Cette vidéo affichera un écran noir à la fin."
        },
        "ja-JP": {
          singular: "この動画が終了すると、黒い画面が表示されます"
        },
        "ko-KR": {
          singular: "이 동영상의 재생이 끝나면 검정색 화면을 표시합니다."
        },
        "pt-BR": {
          singular: "Este vídeo exibirá um quadro preto ao terminar"
        },
        "zh-CN": {
          singular: "视频结束时会显示一个黑框"
        }
      }
    }),
    engagement: (0, _v16.translate)({
      singular: "Engagement",
      dictionary: {
        es: {
          singular: "Interacción"
        },
        "de-DE": {
          singular: "Interaktion"
        },
        "fr-FR": {
          singular: "Implication"
        },
        "ja-JP": {
          singular: "エンゲージメント"
        },
        "ko-KR": {
          singular: "참여"
        },
        "pt-BR": {
          singular: "Engajamento"
        },
        "zh-CN": {
          singular: "参与度"
        }
      }
    }),
    enterMessage: (0, _v16.translate)({
      singular: "Enter message",
      dictionary: {
        es: {
          singular: "Escriba su mensaje"
        },
        "de-DE": {
          singular: "Nachricht eingeben"
        },
        "fr-FR": {
          singular: "Saisissez un message"
        },
        "ja-JP": {
          singular: "メッセージを入力"
        },
        "ko-KR": {
          singular: "메시지를 입력하세요"
        },
        "pt-BR": {
          singular: "Digite sua mensagem"
        },
        "zh-CN": {
          singular: "输入消息内容"
        }
      }
    }),
    enterText: (0, _v16.translate)({
      singular: "Enter text",
      dictionary: {
        es: {
          singular: "Ingresar el texto"
        },
        "de-DE": {
          singular: "Text eingeben"
        },
        "fr-FR": {
          singular: "Saisir le texte"
        },
        "ja-JP": {
          singular: "テキストを入力する"
        },
        "ko-KR": {
          singular: "텍스트 입력"
        },
        "pt-BR": {
          singular: "Digitar texto"
        },
        "zh-CN": {
          singular: "输入文本"
        }
      }
    }),
    enterUrl: (0, _v16.translate)({
      singular: "Enter url",
      dictionary: {
        es: {
          singular: "Ingresar la URL"
        },
        "de-DE": {
          singular: "URL eingeben"
        },
        "fr-FR": {
          singular: "Saisir l'URL"
        },
        "ja-JP": {
          singular: "URLを入力する"
        },
        "ko-KR": {
          singular: "URL 입력"
        },
        "pt-BR": {
          singular: "Digite URL"
        },
        "zh-CN": {
          singular: "输入 URL"
        }
      }
    }),
    errorDeletingPreset: (0, _v16.translate)({
      singular: "Preset wasn’t deleted. Try again.",
      dictionary: {
        es: {
          singular: "No se eliminó la configuración predeterminada. Inténtelo de nuevo."
        },
        "de-DE": {
          singular: "Voreinstellung wurde nicht gelöscht. Versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Le préréglage n'a pas été supprimé. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "プリセットは削除されませんでした。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "사전 설정이 삭제되지 않았습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "A predefinição não foi excluída. Tente novamente."
        },
        "zh-CN": {
          singular: "预设未被删除。请重试。"
        }
      }
    }),
    from: (0, _v16.translate)({
      singular: "From",
      dictionary: {
        es: {
          singular: "De"
        },
        "de-DE": {
          singular: "Von"
        },
        "fr-FR": {
          singular: "Du"
        },
        "ja-JP": {
          singular: "次より選択"
        },
        "ko-KR": {
          singular: "다음에서 선택"
        },
        "pt-BR": {
          singular: "Do"
        },
        "zh-CN": {
          singular: "来自"
        }
      }
    }),
    fullScreen: (0, _v16.translate)({
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
    howToCreatePreset: (0, _v16.translate)({
      singular: "How to create a registration form preset",
      dictionary: {
        es: {
          singular: "Cómo crear una configuración predeterminada de formulario de registro"
        },
        "de-DE": {
          singular: "So erstellen Sie eine Voreinstellung für ein Registrierungsformular"
        },
        "fr-FR": {
          singular: "Comment créer un préréglage de formulaire d'inscription ?"
        },
        "ja-JP": {
          singular: "登録フォームのプリセットを作成する方法"
        },
        "ko-KR": {
          singular: "등록 양식 사전 설정을 만드는 방법"
        },
        "pt-BR": {
          singular: "Como criar uma predefinição de formulário de inscrição"
        },
        "zh-CN": {
          singular: "如何创建注册表预设"
        }
      }
    }),
    iconColor: (0, _v16.translate)({
      singular: "Icon and text color",
      dictionary: {
        es: {
          singular: "Ícono y color del texto"
        },
        "de-DE": {
          singular: "Symbol und Textfarbe"
        },
        "fr-FR": {
          singular: "Couleur de l'icône et du texte"
        },
        "ja-JP": {
          singular: "アイコンとテキストの色"
        },
        "ko-KR": {
          singular: "아이콘 및 텍스트 색상"
        },
        "pt-BR": {
          singular: "Ícone e cor do texto"
        },
        "zh-CN": {
          singular: "图标和文本颜色"
        }
      }
    }),
    likes: (0, _v16.translate)({
      singular: "Likes",
      dictionary: {
        es: {
          singular: "Me gusta"
        },
        "fr-FR": {
          singular: "J'aime"
        },
        "ja-JP": {
          singular: "いいね"
        },
        "ko-KR": {
          singular: "좋아하기"
        },
        "pt-BR": {
          singular: "Curtidas"
        },
        "zh-CN": {
          singular: "赞"
        }
      }
    }),
    link: (0, _v16.translate)({
      singular: "Link",
      dictionary: {
        es: {
          singular: "Vínculo"
        },
        "fr-FR": {
          singular: "Lien"
        },
        "ja-JP": {
          singular: "リンク"
        },
        "ko-KR": {
          singular: "링크"
        },
        "zh-CN": {
          singular: "链接"
        }
      }
    }),
    linkDescription: (0, _v16.translate)({
      singular: "Your link will open when viewers click or tap anywhere on the image.",
      dictionary: {
        es: {
          singular: "El vínculo se abrirá cuando los espectadores hagan clic en cualquier parte de la imagen."
        },
        "de-DE": {
          singular: "Ihr Link wird geöffnet, wenn Zuschauer irgendwo auf das Bild klicken oder es antippen."
        },
        "fr-FR": {
          singular: "Votre lien s'ouvrira lorsque des spectateurs cliqueront ou appuieront n'importe où sur cette image."
        },
        "ja-JP": {
          singular: "視聴者が画像上の場所をクリックまたはタップすると、リンクが開きます。"
        },
        "ko-KR": {
          singular: "링크는 시청자가 이미지 어느 곳에나 클릭 또는 터치하면 열립니다."
        },
        "pt-BR": {
          singular: "Seu link abrirá quando as pessoas clicarem ou tocarem em qualquer lugar da imagem."
        },
        "zh-CN": {
          singular: "当观众点击或轻点图片上的任何位置时，您的链接就会打开。"
        }
      }
    }),
    loop: (0, _v16.translate)({
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
    loopDescription: (0, _v16.translate)({
      singular: "This video automatically replays every time it finishes",
      dictionary: {
        es: {
          singular: "Este video se repetirá automáticamente cada vez que termine"
        },
        "de-DE": {
          singular: "Dieses Video wird nach jedem Abspielen automatisch wiederholt"
        },
        "fr-FR": {
          singular: "La lecture reprend automatiquement à la fin de la vidéo."
        },
        "ja-JP": {
          singular: "この動画は終了するたびに自動的に再生されます"
        },
        "ko-KR": {
          singular: "이 동영상의 재생이 끝날 때마다 자동으로 반복 재생됩니다."
        },
        "pt-BR": {
          singular: "Este vídeo é reproduzido automaticamente toda vez que termina"
        },
        "zh-CN": {
          singular: "此视频每次播放结束后都会自动重播"
        }
      }
    }),
    message: (0, _v16.translate)({
      singular: "Message",
      dictionary: {
        es: {
          singular: "Mensaje"
        },
        "de-DE": {
          singular: "Nachricht"
        },
        "ja-JP": {
          singular: "メッセージ"
        },
        "ko-KR": {
          singular: "메시지"
        },
        "pt-BR": {
          singular: "Mensagem"
        },
        "zh-CN": {
          singular: "消息"
        }
      }
    }),
    moreVideos: (0, _v16.translate)({
      singular: "More videos",
      dictionary: {
        es: {
          singular: "Más videos"
        },
        "de-DE": {
          singular: "Mehr Videos"
        },
        "fr-FR": {
          singular: "Plus de vidéos"
        },
        "ja-JP": {
          singular: "その他の動画"
        },
        "ko-KR": {
          singular: "동영상 더 보기"
        },
        "pt-BR": {
          singular: "Mais vídeos"
        },
        "zh-CN": {
          singular: "更多视频"
        }
      }
    }),
    myLibrary: (0, _v16.translate)({
      singular: "My library",
      dictionary: {
        es: {
          singular: "Mi biblioteca"
        },
        "de-DE": {
          singular: "Meine Bibliothek"
        },
        "fr-FR": {
          singular: "Ma bibliothèque"
        },
        "ja-JP": {
          singular: "マイ ライブラリ"
        },
        "ko-KR": {
          singular: "내 라이브러리"
        },
        "pt-BR": {
          singular: "Minha Biblioteca"
        },
        "zh-CN": {
          singular: "我的视频库"
        }
      }
    }),
    name: (0, _v16.translate)({
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
    }),
    newPreset: (0, _v16.translate)({
      singular: "New preset",
      dictionary: {
        es: {
          singular: "Nueva configuración predeterminada"
        },
        "de-DE": {
          singular: "Neue Voreinstellung"
        },
        "fr-FR": {
          singular: "Nouveau préréglage"
        },
        "ja-JP": {
          singular: "新しいプリセット"
        },
        "ko-KR": {
          singular: "새 사전 설정"
        },
        "pt-BR": {
          singular: "Nova predefinição"
        },
        "zh-CN": {
          singular: "新预设"
        }
      }
    }),
    noPresetsYet: (0, _v16.translate)({
      singular: "To get started, add a registration form for any video, event, or showcase. You’ll have an option to save it as a preset — then you can reuse it on other videos, too.",
      dictionary: {
        es: {
          singular: "Para empezar, agregue un formulario de registro para cualquier video, evento o presentación. Podrá guardarlo como configuración predeterminada; luego podrá reutilizarlo también en otros videos."
        },
        "de-DE": {
          singular: "Um loszulegen, fügen Sie ein Registrierungsformular für ein beliebiges Video, ein Event oder eine Präsentation hinzu. Sie haben die Möglichkeit, es als Voreinstellung zu speichern – dann können Sie es auch für andere Videos wiederverwenden."
        },
        "fr-FR": {
          singular: "Pour commencer, ajoutez un formulaire d'inscription à une vidéo, un événement ou une présentation. Vous aurez la possibilité de l'enregistrer en tant que préréglage, ce qui vous permettra de le réutiliser sur d'autres vidéos."
        },
        "ja-JP": {
          singular: "まずは動画、イベント、ショーケースの登録フォームを追加してみましょう。プリセットとして保存し、他の動画で再利用することもできます。"
        },
        "ko-KR": {
          singular: "시작하려면 동영상, 이벤트 또는 쇼케이스에 등록 양식을 추가하세요. 사전 설정으로 저장하면 다른 동영상에서 재사용할 수 있습니다."
        },
        "pt-BR": {
          singular: "Para começar, adicione um formulário de inscrição para qualquer vídeo, evento ou vitrine. Você terá a opção de salvá-lo como predefinição e, depois, também poderá reutilizá-lo em outros vídeos."
        },
        "zh-CN": {
          singular: "首先，为任何视频、活动或展示添加注册表。您可以选择将其保存为预设，然后您也可以在其他视频中重复使用它。"
        }
      }
    }),
    owner: (0, _v16.translate)({
      singular: "Owner",
      dictionary: {
        es: {
          singular: "Propietario(a)"
        },
        "de-DE": {
          singular: "Inhaber"
        },
        "fr-FR": {
          singular: "Propriétaire"
        },
        "ja-JP": {
          singular: "所有者"
        },
        "ko-KR": {
          singular: "계정 소유자"
        },
        "pt-BR": {
          singular: "Proprietário"
        },
        "zh-CN": {
          singular: "所有者"
        }
      }
    }),
    pip: (0, _v16.translate)({
      singular: "Picture in picture",
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
          singular: "Modo picture-in-picture"
        },
        "zh-CN": {
          singular: "画中画"
        }
      }
    }),
    playButtonPosition: (0, _v16.translate)({
      singular: "Play button position",
      dictionary: {
        es: {
          singular: "Posición del botón de reproducción"
        },
        "de-DE": {
          singular: "Position des Buttons zur Wiedergabe"
        },
        "fr-FR": {
          singular: "Position du bouton de lecture"
        },
        "ja-JP": {
          singular: "再生ボタンの位置"
        },
        "ko-KR": {
          singular: "재생 버튼 위치"
        },
        "pt-BR": {
          singular: "Posição do botão de reprodução"
        },
        "zh-CN": {
          singular: "播放按钮位置"
        }
      }
    }),
    portrait: (0, _v16.translate)({
      singular: "Portrait",
      dictionary: {
        es: {
          singular: "Foto de perfil"
        },
        "de-DE": {
          singular: "Porträt"
        },
        "ja-JP": {
          singular: "縦向き"
        },
        "ko-KR": {
          singular: "프로필 이미지"
        },
        "pt-BR": {
          singular: "Retrato"
        },
        "zh-CN": {
          singular: "肖像"
        }
      }
    }),
    presetName: (0, _v16.translate)({
      singular: "Preset name",
      dictionary: {
        es: {
          singular: "Nombre del valor preestablecido"
        },
        "de-DE": {
          singular: "Name der Voreinstellung"
        },
        "fr-FR": {
          singular: "Nom du préréglage"
        },
        "ja-JP": {
          singular: "プリセット名"
        },
        "ko-KR": {
          singular: "사전 설정 이름"
        },
        "pt-BR": {
          singular: "Nome da predefinição"
        },
        "zh-CN": {
          singular: "预设名称"
        }
      }
    }),
    primaryColor: (0, _v16.translate)({
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
    profilePicture: (0, _v16.translate)({
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
    progressBar: (0, _v16.translate)({
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
    qualitySelector: (0, _v16.translate)({
      singular: "Quality selector",
      dictionary: {
        es: {
          singular: "Selector de calidad"
        },
        "de-DE": {
          singular: "Qualitätsauswahl"
        },
        "fr-FR": {
          singular: "Sélecteur de qualité"
        },
        "ja-JP": {
          singular: "クオリティセレクター"
        },
        "ko-KR": {
          singular: "화질 선택기"
        },
        "pt-BR": {
          singular: "Seletor de qualidade"
        },
        "zh-CN": {
          singular: "质量选择器"
        }
      }
    }),
    reaction: (0, _v16.translate)({
      singular: "Reaction",
      dictionary: {
        es: {
          singular: "Reacción"
        },
        "de-DE": {
          singular: "Reaktion"
        },
        "fr-FR": {
          singular: "Réaction"
        },
        "ja-JP": {
          singular: "リアクション"
        },
        "ko-KR": {
          singular: "반응"
        },
        "pt-BR": {
          singular: "Reação"
        },
        "zh-CN": {
          singular: "反应"
        }
      }
    }),
    registration: (0, _v16.translate)({
      singular: "Registration presets",
      dictionary: {
        es: {
          singular: "Configuración predeterminada de registro"
        },
        "de-DE": {
          singular: "Voreinstellungen für die Registrierung"
        },
        "fr-FR": {
          singular: "Préréglages d'inscription"
        },
        "ja-JP": {
          singular: "登録プリセット"
        },
        "ko-KR": {
          singular: "등록 사전 설정"
        },
        "pt-BR": {
          singular: "Predefinições de registro"
        },
        "zh-CN": {
          singular: "注册预设"
        }
      }
    }),
    selectVideos: _v0 => (0, _v16.translate)({
      singular: "Select up to {COUNT} videos...",
      replacements: {
        COUNT: _v0
      },
      dictionary: {
        es: {
          singular: "Seleccione hasta {COUNT} videos..."
        },
        "de-DE": {
          singular: "Bis zu {COUNT} Videos auswählen..."
        },
        "fr-FR": {
          singular: "Sélectionnez jusqu'à {COUNT} vidéos..."
        },
        "ja-JP": {
          singular: "最大{COUNT}件の動画を選択..."
        },
        "ko-KR": {
          singular: "최대 {COUNT}개의 동영상을 선택하세요..."
        },
        "pt-BR": {
          singular: "Selecione até {COUNT} vídeos..."
        },
        "zh-CN": {
          singular: "最多可选择 {COUNT} 个视频…"
        }
      }
    }),
    share: (0, _v16.translate)({
      singular: "Share",
      dictionary: {
        es: {
          singular: "Compartir"
        },
        "de-DE": {
          singular: "Teilen"
        },
        "fr-FR": {
          singular: "Partager"
        },
        "ja-JP": {
          singular: "共有"
        },
        "ko-KR": {
          singular: "공유"
        },
        "pt-BR": {
          singular: "Compartilhar"
        },
        "zh-CN": {
          singular: "分享"
        }
      }
    }),
    shareButton: (0, _v16.translate)({
      singular: "Share button",
      dictionary: {
        es: {
          singular: "Botón Compartir"
        },
        "de-DE": {
          singular: "Teilen-Button"
        },
        "fr-FR": {
          singular: "Bouton Partager"
        },
        "ja-JP": {
          singular: "シェアボタン"
        },
        "ko-KR": {
          singular: "공유 버튼"
        },
        "pt-BR": {
          singular: "Botão Compartilhar"
        },
        "zh-CN": {
          singular: "分享按钮"
        }
      }
    }),
    shareButtonDescription: (0, _v16.translate)({
      singular: "Show icons for sharing via Facebook, Twitter, Tumblr, or email",
      dictionary: {
        es: {
          singular: "Cree íconos para compartir a través de Facebook, Twitter, Tumblr o correo electrónico"
        },
        "de-DE": {
          singular: "Zeigen Sie Symbole für die Freigabe über Facebook, Twitter, Tumblr oder E-Mail"
        },
        "fr-FR": {
          singular: "Afficher les icônes de partage via Facebook, Twitter, Tumblr ou e-mail."
        },
        "ja-JP": {
          singular: "Facebook、X（旧Twitter）、Tumblr、Eメールでの共有アイコンを表示"
        },
        "ko-KR": {
          singular: "Facebook, Twitter, Tumblr 또는 이메일을 통해 공유할 수 있도록 아이콘을 표시합니다."
        },
        "pt-BR": {
          singular: "Mostre ícones para compartilhamento via Facebook, Twitter, Tumblr ou e-mail"
        },
        "zh-CN": {
          singular: "显示通过 Facebook、Twitter、Tumblr 或电子邮件分享的图标"
        }
      }
    }),
    speed: (0, _v16.translate)({
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
    tags: (0, _v16.translate)({
      singular: "Tags",
      dictionary: {
        es: {
          singular: "Etiquetas"
        },
        "fr-FR": {
          singular: "Étiquettes"
        },
        "ja-JP": {
          singular: "タグ"
        },
        "ko-KR": {
          singular: "태그"
        },
        "pt-BR": {
          singular: "Etiquetas"
        },
        "zh-CN": {
          singular: "标签"
        }
      }
    }),
    thumbnail: (0, _v16.translate)({
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
    title: (0, _v16.translate)({
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
    transcript: (0, _v16.translate)({
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
    uploader: (0, _v16.translate)({
      singular: "Uploader",
      dictionary: {
        es: {
          singular: "Herramienta para subir videos"
        },
        "ja-JP": {
          singular: "アップローダー"
        },
        "ko-KR": {
          singular: "업로더"
        },
        "pt-BR": {
          singular: "Quem carrega os vídeos"
        },
        "zh-CN": {
          singular: "上传者"
        }
      }
    }),
    url: (0, _v16.translate)({
      singular: "URL",
      dictionary: {
        "pt-BR": {
          singular: "customizada"
        }
      }
    }),
    videoDetails: (0, _v16.translate)({
      singular: "Video details",
      dictionary: {
        es: {
          singular: "Detalles del video"
        },
        "de-DE": {
          singular: "Videodetails"
        },
        "fr-FR": {
          singular: "Détails de la vidéo"
        },
        "ja-JP": {
          singular: "動画の詳細情報"
        },
        "ko-KR": {
          singular: "동영상 세부 사항"
        },
        "pt-BR": {
          singular: "Detalhes do vídeo"
        },
        "zh-CN": {
          singular: "视频详情"
        }
      }
    }),
    videoPage: (0, _v16.translate)({
      singular: "Video player and comments",
      dictionary: {
        es: {
          singular: "Reproductor de video y comentarios"
        },
        "de-DE": {
          singular: "Videoplayer und Kommentare"
        },
        "fr-FR": {
          singular: "Lecteur vidéo et commentaires"
        },
        "ja-JP": {
          singular: "動画プレーヤーとコメント"
        },
        "ko-KR": {
          singular: "동영상 플레이어 및 댓글"
        },
        "pt-BR": {
          singular: "Reprodutor de vídeo e comentários"
        },
        "zh-CN": {
          singular: "视频播放器和评论"
        }
      }
    }),
    videoPageDescription: (0, _v16.translate)({
      singular: "How the player, video details, and engagements look on the video page.",
      dictionary: {
        es: {
          singular: "Cómo se ven el reproductor, los detalles del video y las interacciones en la página del video."
        },
        "de-DE": {
          singular: "Wie der Videoplayer, die Videodetails und Interaktionen auf der Videoseite aussehen."
        },
        "fr-FR": {
          singular: "Apparence du lecteur, des détails de la vidéo et des interactions sur la page de la vidéo."
        },
        "ja-JP": {
          singular: "動画ページ上でのプレーヤー、動画の詳細、およびエンゲージメントの見え方。"
        },
        "ko-KR": {
          singular: "비디오 페이지에서 플레이어, 비디오 상세정보 및 참여 요소가 어떻게 표시되는지."
        },
        "pt-BR": {
          singular: "Como o reprodutor, os detalhes do vídeo e as interações aparecem na página do vídeo."
        },
        "zh-CN": {
          singular: "播放器、视频详情和互动在视频页面上的显示方式."
        }
      }
    }),
    videoPageTheme: (0, _v16.translate)({
      singular: "Video page theme",
      dictionary: {
        es: {
          singular: "Tema de la página del video"
        },
        "de-DE": {
          singular: "Design der Videoseite"
        },
        "fr-FR": {
          singular: "Thème de la page vidéo"
        },
        "ja-JP": {
          singular: "動画ページのテーマ"
        },
        "ko-KR": {
          singular: "동영상 페이지 테마"
        },
        "pt-BR": {
          singular: "Tema da página do vídeo"
        },
        "zh-CN": {
          singular: "视频页面主题"
        }
      }
    }),
    videoPageThemeDescription: (0, _v16.translate)({
      singular: "How the page around your video looks: background, logo, title font.",
      dictionary: {
        es: {
          singular: "Cómo se ve la página que rodea su video: fondo, logotipo, tipografía del título."
        },
        "de-DE": {
          singular: "Wie die Seite rund um Ihr Video aussieht: Hintergrund, Logo, Titelschriftart."
        },
        "fr-FR": {
          singular: "Apparence de la page autour de votre vidéo : arrière-plan, logo, police du titre."
        },
        "ja-JP": {
          singular: "動画ページの見た目: 背景, ロゴ, タイトルフォント."
        },
        "ko-KR": {
          singular: "동영상 주변 페이지의 모양: 배경, 로고, 제목 글꼴."
        },
        "pt-BR": {
          singular: "Como a página ao redor do seu vídeo fica: plano de fundo, logo, fonte do título."
        },
        "zh-CN": {
          singular: "视频页面的外观：背景、徽标、标题字体。"
        }
      }
    }),
    videoPageThemeHelper: (0, _v16.translate)({
      singular: "These presets can be managed from individual videos’ Manage video pages.",
      dictionary: {
        es: {
          singular: "Estos ajustes preestablecidos se pueden gestionar desde las páginas 'Manage video' de cada video individual."
        },
        "de-DE": {
          singular: "Diese Voreinstellungen können auf den Seiten „Video verwalten“ einzelner Videos verwaltet werden."
        },
        "fr-FR": {
          singular: "Ces préréglages peuvent être gérés depuis la page « Gérer la vidéo » de chaque vidéo."
        },
        "ja-JP": {
          singular: "これらのプリセットは各動画の「Manage video」ページから管理できます."
        },
        "ko-KR": {
          singular: "이 프리셋은 개별 동영상의 Manage video 페이지에서 관리할 수 있습니다."
        },
        "pt-BR": {
          singular: 'Essas predefinições podem ser gerenciadas nas páginas "Gerenciar vídeo" de cada vídeo.'
        },
        "zh-CN": {
          singular: "这些预设可以从单个视频的 Manage video 页面进行管理。"
        }
      }
    }),
    setAsDefault: (0, _v16.translate)({
      singular: "Set as default",
      dictionary: {
        es: {
          singular: "Usar por defecto"
        },
        "de-DE": {
          singular: "Als Standard setzen"
        },
        "fr-FR": {
          singular: "Mettre par défaut"
        },
        "ja-JP": {
          singular: "既定にする"
        },
        "ko-KR": {
          singular: "기본값 설정"
        },
        "pt-BR": {
          singular: "Usar como padrão"
        },
        "zh-CN": {
          singular: "设为默认"
        }
      }
    }),
    setAsDefaultDescription: _v0 => (0, _v16.translate)({
      singular: '"{NAME}" will be the default video page theme for new uploads.',
      replacements: {
        NAME: _v0
      },
      dictionary: {
        es: {
          singular: '"{NAME}" será el tema predeterminado de la página de video para nuevas subidas.'
        },
        "de-DE": {
          singular: '"{NAME}" wird als Standarddesign der Videoseite für neue Uploads festgelegt.'
        },
        "fr-FR": {
          singular: '"{NAME}" sera le thème par défaut de la page vidéo pour les nouvelles mises en ligne.'
        },
        "ja-JP": {
          singular: '"{NAME}" が新規アップロードの動画ページのデフォルトテーマになります。'
        },
        "ko-KR": {
          singular: '"{NAME}"은(는) 신규 업로드의 기본 동영상 페이지 테마로 설정됩니다.'
        },
        "pt-BR": {
          singular: '"{NAME}" será o tema padrão da página de vídeo para novos envios.'
        },
        "zh-CN": {
          singular: '"{NAME}" 将成为新上传的默认视频页面主题.'
        }
      }
    }),
    applyToAllExistingVideos: (0, _v16.translate)({
      singular: "Apply to all existing videos",
      dictionary: {
        es: {
          singular: "Aplicar a todos los videos existentes"
        },
        "de-DE": {
          singular: "Auf alle vorhandenen Videos anwenden"
        },
        "fr-FR": {
          singular: "Appliquer à toutes les vidéos existantes"
        },
        "ja-JP": {
          singular: "既存のすべての動画に適用"
        },
        "ko-KR": {
          singular: "기존 동영상 전체에 적용"
        },
        "pt-BR": {
          singular: "Aplicar a todos os vídeos existentes"
        },
        "zh-CN": {
          singular: "应用于所有现有视频"
        }
      }
    }),
    applyToAllDescription: _v0 => (0, _v16.translate)({
      singular: '"{NAME}" will be applied to all of your existing videos.',
      replacements: {
        NAME: _v0
      },
      dictionary: {
        es: {
          singular: '"{NAME}" se aplicará a todos tus videos existentes.'
        },
        "de-DE": {
          singular: '"{NAME}" wird auf alle Ihre bestehenden Videos angewendet.'
        },
        "fr-FR": {
          singular: '"{NAME}" sera appliqué à toutes vos vidéos existantes.'
        },
        "ja-JP": {
          singular: '"{NAME}" が既存のすべての動画に適用されます。'
        },
        "ko-KR": {
          singular: '"{NAME}"이(가) 귀하의 기존 동영상 모두에 적용됩니다.'
        },
        "pt-BR": {
          singular: '"{NAME}" será aplicado a todos os seus vídeos existentes.'
        },
        "zh-CN": {
          singular: '"{NAME}" 将应用于您所有现有的视频.'
        }
      }
    }),
    alsoApplyToAll: (0, _v16.translate)({
      singular: "Also apply to all existing videos",
      dictionary: {
        es: {
          singular: "Aplicar también a todos los vídeos existentes"
        },
        "de-DE": {
          singular: "Auch auf alle bestehenden Videos anwenden"
        },
        "fr-FR": {
          singular: "Appliquer également à toutes les vidéos existantes"
        },
        "ja-JP": {
          singular: "既存のすべての動画にも適用する"
        },
        "ko-KR": {
          singular: "기존 모든 동영상에도 적용"
        },
        "pt-BR": {
          singular: "Aplicar também a todos os vídeos existentes"
        },
        "zh-CN": {
          singular: "同时应用于所有现有视频"
        }
      }
    }),
    vimeoDefault: (0, _v16.translate)({
      singular: "Vimeo default",
      dictionary: {
        es: {
          singular: "Predeterminado de Vimeo"
        },
        "de-DE": {
          singular: "Vimeo Standard"
        },
        "fr-FR": {
          singular: "Vimeo par défaut"
        },
        "ja-JP": {
          singular: "Vimeo デフォルト"
        },
        "ko-KR": {
          singular: "Vimeo 기본값"
        },
        "zh-CN": {
          singular: "Vimeo 默认"
        }
      }
    }),
    views: (0, _v16.translate)({
      singular: "Views",
      dictionary: {
        es: {
          singular: "Vistas"
        },
        "de-DE": {
          singular: "Ansichten"
        },
        "fr-FR": {
          singular: "Vues"
        },
        "ja-JP": {
          singular: "視聴数"
        },
        "ko-KR": {
          singular: "조회 수"
        },
        "pt-BR": {
          singular: "Visualizações"
        },
        "zh-CN": {
          singular: "观看量"
        }
      }
    }),
    vimeo: (0, _v16.translate)("Vimeo"),
    vimeoAi: (0, _v16.translate)({
      singular: "Vimeo AI",
      dictionary: {
        "fr-FR": {
          singular: "IA Vimeo"
        }
      }
    }),
    vimeoLogo: (0, _v16.translate)({
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
          singular: "Vimeo ロゴ"
        },
        "ko-KR": {
          singular: "Vimeo 로고"
        },
        "pt-BR": {
          singular: "Logotipo do Vimeo"
        },
        "zh-CN": {
          singular: "Vimeo 徽标"
        }
      }
    }),
    volume: (0, _v16.translate)({
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
    watchLater: (0, _v16.translate)({
      singular: "Watch later",
      dictionary: {
        es: {
          singular: "Ver después"
        },
        "de-DE": {
          singular: "Später anschauen"
        },
        "fr-FR": {
          singular: "Regarder plus tard"
        },
        "ja-JP": {
          singular: "後で見る"
        },
        "ko-KR": {
          singular: "나중에 보기"
        },
        "pt-BR": {
          singular: "Assistir depois"
        },
        "zh-CN": {
          singular: "稍后观看"
        }
      }
    }),
    pagePresetModalDescription: (0, _v16.translate)({
      singular: "When applied to videos with privacy set to Public, some preset settings might be ignored",
      dictionary: {
        es: {
          singular: "Cuando se aplica a videos con la privacidad configurada como Público, es posible que se ignoren algunas configuraciones predeterminadas."
        },
        "de-DE": {
          singular: "Wenn auf Videos mit der Datenschutzeinstellung „öffentlich“ angewendet, können einige Voreinstellungen ignoriert werden."
        },
        "fr-FR": {
          singular: "Lorsqu’appliqués à des vidéos dont la confidentialité est définie sur publique, certains paramètres de préréglage peuvent être ignorés"
        },
        "ja-JP": {
          singular: "動画のプライバシー設定が「公開」の場合、一部のプリセット設定が無視されることがあります"
        },
        "ko-KR": {
          singular: "공개로 설정된 동영상에 적용할 경우, 일부 사전 설정이 무시될 수 있습니다."
        },
        "pt-BR": {
          singular: "Quando aplicadas a vídeos com privacidade definida como Público, algumas configurações predefinidas podem ser ignoradas"
        },
        "zh-CN": {
          singular: "当应用于隐私设置为“公开”的视频时，某些预设设置可能会被忽略"
        }
      }
    }),
    applyPresetToAll: (0, _v16.translate)({
      singular: "Apply preset to all existing videos",
      dictionary: {
        es: {
          singular: "Aplicar la configuración predeterminada a todos los videos existentes"
        },
        "de-DE": {
          singular: "Voreinstellung auf alle vorhandenen Videos anwenden"
        },
        "fr-FR": {
          singular: "Appliquer le préréglage à toutes les vidéos existantes"
        },
        "ja-JP": {
          singular: "既存の動画すべてにプリセットを適用する"
        },
        "ko-KR": {
          singular: "모든 기존 동영상에 사전 설정 적용"
        },
        "pt-BR": {
          singular: "Aplicar predefinição a todos os vídeos existentes"
        },
        "zh-CN": {
          singular: "将预设应用于所有现有视频"
        }
      }
    }),
    thisPresetWillReplaceTheCurrent: (0, _v16.translate)({
      singular: "This preset will replace the current settings for all videos in this workspace",
      dictionary: {
        es: {
          singular: "Esta configuración predeterminada reemplazará la configuración actual de todos los videos en este espacio de trabajo."
        },
        "de-DE": {
          singular: "Diese Voreinstellung ersetzt die aktuellen Einstellungen für alle Videos in diesem Workspace."
        },
        "fr-FR": {
          singular: "Ce préréglage remplacera les paramètres actuels pour toutes les vidéos de cet espace de travail."
        },
        "ja-JP": {
          singular: "このプリセットは、このワークスペース内のすべての動画の現在の設定を上書きします。"
        },
        "ko-KR": {
          singular: "이 사전 설정은 이 워크스페이스의 모든 동영상에 대한 현재 설정을 대체합니다."
        },
        "pt-BR": {
          singular: "Esta predefinição substituirá as configurações atuais de todos os vídeos neste espaço de trabalho"
        },
        "zh-CN": {
          singular: "此预设将替换此工作区中所有视频的当前设置"
        }
      }
    }),
    cancel: (0, _v16.translate)({
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
    applyToAll: (0, _v16.translate)({
      singular: "Apply to all",
      dictionary: {
        es: {
          singular: "Aplicar a todos"
        },
        "de-DE": {
          singular: "Auf alle anwenden"
        },
        "fr-FR": {
          singular: "Appliquer à tout"
        },
        "ja-JP": {
          singular: "すべてに適用する"
        },
        "ko-KR": {
          singular: "모두에 적용"
        },
        "pt-BR": {
          singular: "Aplicar a todos"
        },
        "zh-CN": {
          singular: "应用于所有"
        }
      }
    }),
    showcase: (0, _v16.translate)({
      singular: "Showcase",
      dictionary: {
        es: {
          singular: "Presentaciones"
        },
        "de-DE": {
          singular: "Präsentation"
        },
        "fr-FR": {
          singular: "Présentation"
        },
        "ja-JP": {
          singular: "作品集"
        },
        "ko-KR": {
          singular: "쇼케이스"
        },
        "pt-BR": {
          singular: "Vitrine"
        },
        "zh-CN": {
          singular: "橱窗"
        }
      }
    }),
    changesSaved: (0, _v16.translate)({
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
    presetCreated: (0, _v16.translate)({
      singular: "Preset created",
      dictionary: {
        es: {
          singular: "Configuración predeterminada creada"
        },
        "de-DE": {
          singular: "Voreinstellung erstellt"
        },
        "fr-FR": {
          singular: "Préréglage créé"
        },
        "ja-JP": {
          singular: "プリセットが作成されました"
        },
        "ko-KR": {
          singular: "사전 설정 생성 완료"
        },
        "pt-BR": {
          singular: "Predefinição criada"
        },
        "zh-CN": {
          singular: "预设已创建"
        }
      }
    }),
    changesWerentSaved: (0, _v16.translate)({
      singular: "Changes weren’t saved. Try again.",
      dictionary: {
        es: {
          singular: "Los cambios no se guardaron. Inténtelo de nuevo."
        },
        "de-DE": {
          singular: "Änderungen wurden nicht gespeichert. Nochmal versuchen."
        },
        "fr-FR": {
          singular: "Les modifications n'ont pas été enregistrées. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "変更が保存されませんでした。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "변경 사항이 저장되지 않았습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "As alterações não foram salvas. Tente novamente."
        },
        "zh-CN": {
          singular: "更改未保存。请重试。"
        }
      }
    }),
    presetWasntSaved: (0, _v16.translate)({
      singular: "Preset wasn’t saved. Try again.",
      dictionary: {
        es: {
          singular: "La configuración predeterminada no se guardó. Inténtelo de nuevo."
        },
        "de-DE": {
          singular: "Voreinstellung wurde nicht gespeichert. Nochmal versuchen."
        },
        "fr-FR": {
          singular: "Le préréglage n'a pas été enregistré. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "プリセットが保存されませんでした。もう一度お試しください。"
        },
        "ko-KR": {
          singular: "사전 설정이 저장되지 않았습니다. 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "A predefinição não foi salva. Tente novamente."
        },
        "zh-CN": {
          singular: "预设未保存。请重试。"
        }
      }
    }),
    presetDeleted: _v0 => (0, _v16.translate)({
      singular: '"{NAME}" deleted',
      replacements: {
        NAME: _v0
      },
      dictionary: {
        es: {
          singular: "“{NAME}” se eliminó"
        },
        "de-DE": {
          singular: "„{NAME}“ gelöscht"
        },
        "fr-FR": {
          singular: "« {NAME} » supprimé"
        },
        "ja-JP": {
          singular: "「{NAME}」が削除されました"
        },
        "ko-KR": {
          singular: '"{NAME}" 삭제 완료'
        },
        "pt-BR": {
          singular: '"{NAME}" excluído'
        },
        "zh-CN": {
          singular: "“{NAME}”已删除"
        }
      }
    }),
    presetSetAsDefault: _v0 => (0, _v16.translate)({
      singular: '"{NAME}" set as default',
      replacements: {
        NAME: _v0
      },
      dictionary: {
        es: {
          singular: "“{NAME}” se estableció como predeterminado"
        },
        "de-DE": {
          singular: "„{NAME}“ als Standard festlegen"
        },
        "fr-FR": {
          singular: "« {NAME} » défini par défaut"
        },
        "ja-JP": {
          singular: "「{NAME}」をデフォルトに設定"
        },
        "ko-KR": {
          singular: '"{NAME}"이(가) 기본값으로 설정되었습니다.'
        },
        "pt-BR": {
          singular: '"{NAME}" definido como padrão'
        },
        "zh-CN": {
          singular: "“{NAME}”设为默认值"
        }
      }
    }),
    presetUnsetAsDefault: _v0 => (0, _v16.translate)({
      singular: '"{NAME}" removed as default',
      replacements: {
        NAME: _v0
      },
      dictionary: {
        es: {
          singular: "“{NAME}” se eliminó como predeterminado"
        },
        "de-DE": {
          singular: "„{NAME}“ als Standard entfernt"
        },
        "fr-FR": {
          singular: "« {NAME} » supprimé par défaut"
        },
        "ja-JP": {
          singular: "「{NAME}」がデフォルトから削除されました"
        },
        "ko-KR": {
          singular: '"{NAME}"이(가) 기본값에서 제거되었습니다.'
        },
        "pt-BR": {
          singular: '"{NAME}" removido como padrão'
        },
        "zh-CN": {
          singular: "已默认删除“{NAME}”"
        }
      }
    }),
    duplicateName: (0, _v16.translate)({
      singular: "This name is already used by one of your other presets",
      dictionary: {
        es: {
          singular: "Este nombre ya está en uso en otra preconfiguración."
        },
        "de-DE": {
          singular: "Dieser Name wird schon von einer anderen deiner Voreinstellungen verwendet!"
        },
        "fr-FR": {
          singular: "Ce nom est déjà utilisé par l'un de vos préréglages"
        },
        "ja-JP": {
          singular: "この名前はすでに他のプリセットで使用済みです"
        },
        "ko-KR": {
          singular: "다른 사전 설정에서 이미 이 이름을 사용하고 있습니다"
        },
        "pt-BR": {
          singular: "Este nome já está sendo usado por uma das suas outras predefinições"
        },
        "zh-CN": {
          singular: "您已有其他预设使用了此名称"
        }
      }
    }),
    emptyName: (0, _v16.translate)({
      singular: "Preset name is required",
      dictionary: {
        es: {
          singular: "El nombre de la configuración predeterminada es obligatorio"
        },
        "de-DE": {
          singular: "Der Name der Voreinstellung ist erforderlich"
        },
        "fr-FR": {
          singular: "Le nom du préréglage est requis"
        },
        "ja-JP": {
          singular: "プリセット名は必須です"
        },
        "ko-KR": {
          singular: "사전 설정 이름은 필수입니다."
        },
        "pt-BR": {
          singular: "O nome da predefinição é obrigatório"
        },
        "zh-CN": {
          singular: "预设名称为必填"
        }
      }
    }),
    logo: (0, _v16.translate)({
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
    showLogoDuringPlayback: (0, _v16.translate)({
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
    linkThisLogo: (0, _v16.translate)({
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
    linkUrl: (0, _v16.translate)({
      singular: "Link URL",
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
    invalidUrl: (0, _v16.translate)({
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
    upload: (0, _v16.translate)({
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
    })
  });
  _v0.s(["getTranslations", 0, _v38], 0);
  let _v39 = _v0 => {
      if (!_v0) return 0;
      let _v1 = _v0.split("/");
      return _v0 ? parseInt(_v1[_v1.length - 1]) : 0;
    },
    _v40 = (_v0, _v1, _v2) => {
      let _v3 = new Date(_v0);
      return new Intl.DateTimeFormat(_v1, _v2 ? {
        year: "numeric",
        month: "short"
      } : {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: !0
      }).format(_v3);
    },
    _v41 = (_v0, _v1) => _v0.find(_v0 => _v0.name?.trim() === _v1.draft.presetName?.trim() && _v0.id !== _v1.presetId),
    _v42 = _v0 => /\b((?:https?:\/\/|www\d{0,3}[.])([a-z0-9\-]+[.])(?:[a-z0-9\-]+[.])?([a-z]{2,4}(\/)?)((?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+)?(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’])?)/i.test(_v0),
    _v43 = _v0 => {
      let _v1 = (0, _v16.translate)({
        singular: "Untitled preset",
        dictionary: {
          es: {
            singular: "Configuración predeterminada sin título"
          },
          "de-DE": {
            singular: "Unbenannte Voreinstellung"
          },
          "fr-FR": {
            singular: "Préréglage sans titre"
          },
          "ja-JP": {
            singular: "無題のプリセット"
          },
          "ko-KR": {
            singular: "제목 없는 사전 설정"
          },
          "pt-BR": {
            singular: "Predefinição sem título"
          },
          "zh-CN": {
            singular: "无标题预设"
          }
        }
      });
      if (!_v0.includes(_v1)) return _v1;
      let _v2 = 1,
        _v3 = `${_v1} (${_v2})`;
      for (; _v0.includes(_v3);) _v2++, _v3 = `${_v1} (${_v2})`;
      return _v3;
    };
  _v0.s(["generatePresetName", 0, _v43, "getFormattedDate", 0, _v40, "hasDuplicatePresetName", 0, _v41, "isValidUrl", 0, _v42, "lastIdFromUri", 0, _v39], 0);
  var _v44 = _v0.i(0);
  let _v45 = ({
    colors: _v0
  }) => _v0 ? (0, _v2.jsx)(_v9.Flex, {
    w: (0, _v11.rem)(_v25.w),
    h: (0, _v11.rem)(_v25.h),
    borderRadius: "xs",
    overflow: "hidden",
    children: Object.values(_v0).map((_v0, _v1) => (0, _v2.jsx)(_v44.Box, {
      bgColor: _v0,
      w: "100%",
      h: "100%"
    }, _v1))
  }) : null;
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  let _v53 = ({
    children: _v0,
    description: _v1,
    isOpen: _v2,
    title: _v3,
    onClose: _v4,
    returnFocusOnClose: _v5 = !1,
    ..._v6
  }) => (0, _v2.jsxs)(_v46.Modal, {
    isOpen: _v2,
    onClose: _v4,
    returnFocusOnClose: _v5,
    children: [(0, _v2.jsx)(_v52.ModalOverlay, {}), (0, _v2.jsxs)(_v49.ModalContent, {
      ..._v6,
      children: [(0, _v2.jsxs)(_v51.ModalHeader, {
        children: [(0, _v2.jsxs)(_v9.Flex, {
          direction: "column",
          gap: "xs",
          children: [(0, _v2.jsx)(_v13.Text, {
            variant: "heading-md",
            children: _v3
          }), _v1 && (0, _v2.jsx)(_v13.Text, {
            maxW: "80%",
            variant: "body-sm",
            color: "text-secondary",
            children: _v1
          })]
        }), (0, _v2.jsx)(_v48.ModalCloseButton, {})]
      }), _v0]
    })]
  });
  _v53.Content = ({
    children: _v0,
    isScrollable: _v1 = !1,
    ..._v2
  }) => (0, _v2.jsx)(_v47.ModalBody, {
    fontSize: "body-md",
    h: "100%",
    py: "0",
    children: (0, _v2.jsx)(_v9.Flex, {
      gap: "md",
      direction: "row",
      h: _v1 ? (0, _v11.rem)(570) : "auto",
      overflowY: _v1 ? "hidden" : "auto",
      sx: {
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      ..._v2,
      children: _v0
    })
  }), _v53.MainContent = ({
    children: _v0,
    ..._v1
  }) => (0, _v2.jsx)(_v9.Flex, {
    gap: "md",
    py: "sm",
    px: "xs",
    h: "100%",
    direction: "column",
    flexGrow: 2,
    flexBasis: 0,
    overflowY: "auto",
    overflowX: "hidden",
    sx: {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": {
        display: "none"
      }
    },
    ..._v1,
    children: _v0
  }), _v53.SideContent = ({
    children: _v0,
    ..._v1
  }) => (0, _v2.jsx)(_v9.Flex, {
    direction: "column",
    gap: "md",
    flexGrow: 3,
    flexBasis: 0,
    position: "sticky",
    ..._v1,
    children: _v0
  }), _v53.Footer = ({
    children: _v0,
    ..._v1
  }) => (0, _v2.jsx)(_v50.ModalFooter, {
    w: "100%",
    borderTopWidth: "1px",
    borderColor: "stroke",
    ..._v1,
    children: _v0
  });
  let _v54 = ({
    isLoading: _v0,
    isOpen: _v1,
    name: _v2,
    onClose: _v3,
    onDelete: _v4
  }) => {
    let _v5 = _v38();
    return (0, _v2.jsxs)(_v53, {
      isOpen: _v1,
      title: _v5.deleteModalTitle(_v2),
      onClose: _v3,
      children: [(0, _v2.jsx)(_v53.Content, {
        flexDirection: "column",
        pb: "md",
        children: (0, _v2.jsx)(_v13.Text, {
          variant: "body-md",
          children: _v5.deleteConfirmationMsg
        })
      }), (0, _v2.jsxs)(_v53.Footer, {
        justifyContent: "flex-end",
        border: "none",
        children: [(0, _v2.jsx)(_v7.Button, {
          variant: "tertiary",
          onClick: _v3,
          children: _v5.cancel
        }), (0, _v2.jsx)(_v7.Button, {
          variant: "destructive",
          onClick: _v4,
          isLoading: _v0,
          children: _v5.deletePreset
        })]
      })]
    });
  };
  _v0.s(["DeletePresetModal", 0, _v54], 0);
  let _v55 = ({
    onLoadMore: _v0,
    isLoadingMore: _v1
  }) => (0, _v2.jsx)(_v9.Flex, {
    justify: "center",
    my: "sm",
    children: _v1 ? (0, _v2.jsx)(_v12.Spinner, {
      h: (0, _v11.rem)(40),
      color: "text-primary"
    }) : (0, _v2.jsx)(_v7.Button, {
      onClick: _v0,
      variant: "secondary",
      children: (0, _v16.translate)({
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
    })
  });
  _v0.s(["LoadMoreButton", 0, _v55], 0);
  var _v56 = _v0.i(0);
  let _v57 = ({
      children: _v0,
      src: _v1,
      showOverlay: _v2 = !1,
      showFallback: _v3 = !1,
      width: _v4 = _v25.w,
      height: _v5 = _v25.h
    }) => {
      let _v6 = (0, _v56.useColorModeValue)("grayscale.50", "grayscale.800");
      return (0, _v2.jsx)(_v8.Center, {
        w: _v4,
        h: _v5,
        border: _v3 || _v1 ? "1px solid" : "none",
        borderColor: "stroke",
        borderRadius: "xs",
        _hover: {
          svg: {
            visibility: _v2 ? "visible" : "hidden"
          }
        },
        ...(!_v1 && _v3 && _v59(_v6)),
        ...(_v1 && _v60(_v1)),
        children: _v2 ? (0, _v2.jsx)(_v58, {
          borderRadius: "xs",
          children: _v0
        }) : _v0
      });
    },
    _v58 = ({
      children: _v0,
      ..._v1
    }) => (0, _v2.jsx)(_v8.Center, {
      h: "100%",
      w: "100%",
      cursor: "pointer",
      _hover: {
        backgroundColor: "blackAlpha.600"
      },
      ..._v1,
      children: _v0
    }),
    _v59 = _v0 => ({
      bgSize: `${(0, _v11.rem)(16)} ${(0, _v11.rem)(16)}`,
      bgPosition: `0 0, 0 ${(0, _v11.rem)(8)}, ${(0, _v11.rem)(8)} ${(0, _v11.rem)(-8)}, ${(0, _v11.rem)(-8)} 0`,
      bgRepeat: "repeat",
      bgImage: `linear-gradient(45deg, ${_v0} 25%, transparent 25%),\
              linear-gradient(-45deg, ${_v0} 25%, transparent 25%),\
              linear-gradient(45deg, transparent 75%, ${_v0} 75%),\
              linear-gradient(-45deg, transparent 75%, ${_v0} 75%)`
    }),
    _v60 = _v0 => ({
      bgImage: `url(${_v0})`,
      bgSize: "contain",
      bgPosition: "center",
      bgRepeat: "no-repeat"
    });
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  let _v70 = ({
      isVisible: _v0,
      isDefault: _v1 = !1,
      onApplyToAll: _v2,
      onDelete: _v3,
      onEdit: _v4,
      onSetAsDefault: _v5
    }) => {
      let {
        isOpen: _v6,
        onOpen: _v7,
        onClose: _v8
      } = (0, _v4.useDisclosure)();
      return (0, _v2.jsx)(_v68.Tooltip, {
        label: (0, _v16.translate)({
          singular: "More",
          dictionary: {
            es: {
              singular: "Ver más"
            },
            "de-DE": {
              singular: "Mehr"
            },
            "fr-FR": {
              singular: "Plus"
            },
            "ja-JP": {
              singular: "詳細"
            },
            "ko-KR": {
              singular: "더 보기"
            },
            "pt-BR": {
              singular: "Mais"
            },
            "zh-CN": {
              singular: "更多"
            }
          }
        }),
        placement: "top",
        shouldWrapChildren: !0,
        children: (0, _v2.jsxs)(_v62.Menu, {
          isOpen: _v6,
          onClose: _v8,
          children: [(0, _v2.jsx)(_v63.MenuButton, {
            as: _v61.IconButton,
            icon: (0, _v2.jsx)(_v69.EllipsisV, {}),
            "aria-label": (0, _v16.translate)({
              singular: "More",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr"
                },
                "fr-FR": {
                  singular: "Plus"
                },
                "ja-JP": {
                  singular: "詳細"
                },
                "ko-KR": {
                  singular: "더 보기"
                },
                "pt-BR": {
                  singular: "Mais"
                },
                "zh-CN": {
                  singular: "更多"
                }
              }
            }),
            variant: "tertiary",
            size: "md",
            visibility: _v0 ? "visible" : "hidden",
            onClick: _v0 => {
              _v0.stopPropagation(), _v7();
            }
          }), (0, _v2.jsx)(_v67.Portal, {
            children: (0, _v2.jsx)(_v65.MenuList, {
              w: _v2 ? (0, _v11.rem)(240) : (0, _v11.rem)(160),
              children: (0, _v2.jsxs)(_v64.MenuGroup, {
                children: [_v4 && (0, _v2.jsx)(_v66.MenuItem, {
                  onClick: _v0 => {
                    _v0.stopPropagation(), _v4();
                  },
                  children: (0, _v16.translate)({
                    singular: "Edit preset",
                    dictionary: {
                      es: {
                        singular: "Editar preajuste"
                      },
                      "de-DE": {
                        singular: "Preset bearbeiten"
                      },
                      "fr-FR": {
                        singular: "Modifier le préréglage"
                      },
                      "ja-JP": {
                        singular: "プリセットを編集"
                      },
                      "ko-KR": {
                        singular: "프리셋 편집"
                      },
                      "pt-BR": {
                        singular: "Editar predefinição"
                      },
                      "zh-CN": {
                        singular: "编辑预设"
                      }
                    }
                  })
                }), _v2 && (0, _v2.jsx)(_v66.MenuItem, {
                  onClick: _v0 => {
                    _v0.stopPropagation(), _v2();
                  },
                  children: (0, _v16.translate)({
                    singular: "Apply to all existing videos",
                    dictionary: {
                      es: {
                        singular: "Aplicar a todos los videos existentes"
                      },
                      "de-DE": {
                        singular: "Auf alle vorhandenen Videos anwenden"
                      },
                      "fr-FR": {
                        singular: "Appliquer à toutes les vidéos existantes"
                      },
                      "ja-JP": {
                        singular: "既存のすべての動画に適用"
                      },
                      "ko-KR": {
                        singular: "기존 동영상 전체에 적용"
                      },
                      "pt-BR": {
                        singular: "Aplicar a todos os vídeos existentes"
                      },
                      "zh-CN": {
                        singular: "应用于所有现有视频"
                      }
                    }
                  })
                }), _v5 && (0, _v2.jsx)(_v66.MenuItem, {
                  onClick: _v0 => {
                    _v0.stopPropagation(), _v5();
                  },
                  children: _v1 ? (0, _v16.translate)({
                    singular: "Remove as default",
                    dictionary: {
                      es: {
                        singular: "Eliminar como predeterminado"
                      },
                      "de-DE": {
                        singular: "Als Standard entfernen"
                      },
                      "fr-FR": {
                        singular: "Ne plus définir par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルトから削除"
                      },
                      "ko-KR": {
                        singular: "기본값에서 제거"
                      },
                      "pt-BR": {
                        singular: "Remover como padrão"
                      },
                      "zh-CN": {
                        singular: "默认删除"
                      }
                    }
                  }) : (0, _v16.translate)({
                    singular: "Set as default",
                    dictionary: {
                      es: {
                        singular: "Usar por defecto"
                      },
                      "de-DE": {
                        singular: "Als Standard setzen"
                      },
                      "fr-FR": {
                        singular: "Mettre par défaut"
                      },
                      "ja-JP": {
                        singular: "既定にする"
                      },
                      "ko-KR": {
                        singular: "기본값 설정"
                      },
                      "pt-BR": {
                        singular: "Usar como padrão"
                      },
                      "zh-CN": {
                        singular: "设为默认"
                      }
                    }
                  })
                }), _v3 && (0, _v2.jsx)(_v66.MenuItem, {
                  onClick: _v0 => {
                    _v0.stopPropagation(), _v3();
                  },
                  children: (0, _v16.translate)({
                    singular: "Delete",
                    dictionary: {
                      es: {
                        singular: "Eliminar"
                      },
                      "de-DE": {
                        singular: "Löschen"
                      },
                      "fr-FR": {
                        singular: "Supprimer"
                      },
                      "ja-JP": {
                        singular: "削除"
                      },
                      "ko-KR": {
                        singular: "삭제"
                      },
                      "pt-BR": {
                        singular: "Excluir"
                      },
                      "zh-CN": {
                        singular: "删除"
                      }
                    }
                  })
                })]
              })
            })
          })]
        })
      });
    },
    _v71 = ({
      canLoadMore: _v0,
      defaultPresetId: _v1,
      description: _v2,
      isCreating: _v3 = !1,
      isLoadingMore: _v4,
      isLoadingPresets: _v5,
      isDeleting: _v6 = !1,
      presets: _v7,
      title: _v8,
      onCreate: _v9,
      onDelete: _v10,
      onLoadMore: _v11,
      onPresetClick: _v12,
      onSetAsDefault: _v13,
      ..._v14
    }) => {
      let _v15 = _v38(),
        _v16 = (0, _v3.useRef)(null),
        {
          isOpen: _v17,
          onOpen: _v18,
          onClose: _v19
        } = (0, _v4.useDisclosure)(),
        _v20 = async () => {
          _v16.current && (await _v10(_v16.current), _v16.current = null, _v19());
        };
      return (0, _v2.jsxs)(_v24, {
        ..._v14,
        maxH: (0, _v11.rem)(440),
        overflowY: "auto",
        children: [(0, _v2.jsxs)(_v24.Title, {
          justifyContent: "space-between",
          children: [(0, _v2.jsxs)(_v14.VStack, {
            alignItems: "flex-start",
            gap: "2xs",
            children: [(0, _v2.jsx)(_v13.Text, {
              variant: "heading-md",
              children: _v8
            }), void 0 !== _v2 && (0, _v2.jsx)(_v13.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: _v2
            })]
          }), (0, _v2.jsx)(_v7.Button, {
            size: "md",
            variant: "secondary",
            leftIcon: (0, _v2.jsx)(_v15.Plus, {}),
            onClick: () => _v9(),
            isLoading: _v3,
            children: _v15.newPreset
          })]
        }), (0, _v2.jsxs)(_v24.Content, {
          children: [(0, _v2.jsx)(_v24.Header, {
            children: _v15.name
          }), (0, _v2.jsx)(_v24.Body, {
            children: _v5 ? (0, _v2.jsx)(_v8.Center, {
              py: "md",
              children: (0, _v2.jsx)(_v12.Spinner, {
                size: "sm"
              })
            }) : _v7.map((_v0, _v1) => {
              let _v2 = _v0.id === _v1,
                _v3 = -1 === _v0.id,
                _v4 = !_v3 || !_v2;
              return (0, _v2.jsxs)(_v24.Row, {
                onClick: () => _v12(_v0),
                children: [(0, _v2.jsxs)(_v14.VStack, {
                  alignItems: "flex-start",
                  w: "100%",
                  gap: "2",
                  children: [(0, _v2.jsxs)(_v10.HStack, {
                    alignItems: "center",
                    gap: "sm",
                    children: [(0, _v2.jsx)(_v13.Text, {
                      variant: "body-md",
                      children: _v0.name
                    }), _v2 && (0, _v2.jsx)(_v6.Badge, {
                      variant: "default",
                      size: "xs",
                      h: "fit-content",
                      children: (0, _v16.translate)({
                        singular: "Default",
                        dictionary: {
                          es: {
                            singular: "Predeterminado"
                          },
                          "de-DE": {
                            singular: "Standardwert"
                          },
                          "fr-FR": {
                            singular: "Par défaut"
                          },
                          "ja-JP": {
                            singular: "デフォルト"
                          },
                          "ko-KR": {
                            singular: "기본값"
                          },
                          "pt-BR": {
                            singular: "Padrão"
                          },
                          "zh-CN": {
                            singular: "默认"
                          }
                        }
                      })
                    })]
                  }), (0, _v2.jsx)(_v13.Text, {
                    variant: "body-sm",
                    color: "text-secondary",
                    children: _v40(_v0?.createdDate, navigator.language || "en-US", _v3)
                  })]
                }), (0, _v2.jsxs)(_v9.Flex, {
                  justifyContent: "flex-end",
                  alignItems: "center",
                  w: "100%",
                  gap: "lg",
                  children: [(0, _v2.jsx)(_v45, {
                    colors: _v0.settings?.colors
                  }), (0, _v2.jsx)(_v57, {
                    src: _v0.settings?.customLogo?.url ?? null
                  }), (0, _v2.jsx)(_v70, {
                    isVisible: !0,
                    isDefault: _v2,
                    onDelete: _v3 ? void 0 : () => {
                      _v16.current = _v0, _v18();
                    },
                    onEdit: () => _v12(_v0),
                    onSetAsDefault: _v4 ? () => _v13(_v0) : void 0
                  })]
                })]
              }, _v1);
            })
          }), _v0 && (0, _v2.jsx)(_v55, {
            onLoadMore: _v11,
            isLoadingMore: _v4
          })]
        }), (0, _v2.jsx)(_v54, {
          name: _v16.current?.name || "",
          isLoading: _v6,
          isOpen: _v17,
          onClose: _v19,
          onDelete: _v20
        })]
      });
    };
  var _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  function _v74() {
    let _v0 = (0, _v73.useViewer)(),
      _v1 = _v0?.teamUser?.ownerId || _v0?.user?.id,
      {
        data: _v2,
        isLoading: _v3,
        mutate: _v4
      } = (0, _v72.useGetUser)(() => _v1 ? {
        where: {
          userId: _v1
        },
        select: ["preferences.videos.embedPresetUri", "preferences.videos.pagePresetUri"]
      } : null, {
        revalidateOnFocus: !1
      }),
      [_v5, _v6] = (0, _v3.useMemo)(() => [_v39(_v2?.preferences?.videos?.embedPresetUri) || null, _v39(_v2?.preferences?.videos?.pagePresetUri) || null], [_v2]),
      [_v7, _v8] = (0, _v72.usePatchUser)(),
      _v9 = async (_v0, _v1) => {
        if (!_v1) return;
        let _v2 = "embed" === _v0 ? "embedPresetUri" : "pagePresetUri",
          _v3 = [`preferences.videos.${_v2}`];
        await _v7({
          select: _v3,
          variables: {
            videos: {
              [_v2]: _v1 === ("embed" === _v0 ? _v5 : _v6) ? "" : `/${_v1}`
            }
          },
          where: {
            userId: _v1
          }
        }), _v4();
      };
    return {
      defaultEmbedPresetId: _v5,
      defaultPagePresetId: _v6,
      isLoading: _v3 || _v8.loading,
      update: _v9
    };
  }
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  async function _v78({
    baseUrl: _v0,
    where: {
      userId: _v1,
      presetId: _v2
    },
    ..._v3
  }) {
    return (0, _v76.measureLatency)("deleteUserPreset", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v1}/presets/${_v2}`, {
        ..._v3,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  async function _v79({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      presetId: _v4
    },
    ..._v5
  }) {
    return (0, _v76.measureLatency)("patchUserPreset", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/presets/${_v4}?fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v77.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0);
  let _v86 = (_v0, _v1) => {
      let {
        customLogo: _v2,
        embed: _v3,
        endScreen: _v4,
        fullscreen: _v5,
        like: _v6,
        owner: _v7,
        askAi: _v8,
        reaction: _v9,
        playButtonPosition: _v10,
        playbar: _v11,
        portrait: _v12,
        qualitySelector: _v13,
        share: _v14,
        title: _v15,
        vimeoLogo: _v16,
        watchlater: _v17,
        colors: _v18,
        ..._v19
      } = _v0;
      return {
        ..._v19,
        colors: _v18 && {
          ..._v18
        },
        qualitySelector: _v13 ?? _v11,
        playButton: {
          position: _v10
        },
        askAi: _v8,
        playbar: _v11,
        buttons: {
          embed: _v3,
          fullscreen: _v5,
          like: _v6,
          reaction: _v9,
          share: _v14,
          watchlater: _v17
        },
        endScreen: _v87(_v4, _v1),
        title: {
          owner: _v7 ? "show" : "hide",
          portrait: _v12 ? "show" : "hide",
          name: _v15 ? "show" : "hide"
        },
        logos: {
          vimeo: _v16,
          custom: _v2
        }
      };
    },
    _v87 = (_v0, _v1) => {
      let {
          type: _v2,
          text: _v3,
          link: _v4,
          videos: _v5,
          image: _v6,
          share: _v7
        } = _v0,
        _v8 = null;
      switch (_v2) {
        case "videos":
          let {
            outroVideosCollectionType: _v0,
            outroVideosCollectionUri: _v1,
            videoUris: _v2,
            pictureUri: _v3
          } = _v5 || {};
          _v8 = {
            videos: {
              ...("album" === _v0 && {
                outroVideosCollection: `${_v0}:${_v1?.split("/").pop()}`
              }),
              ...("uploaded_videos" === _v0 && {
                outroVideosCollectionType: _v0,
                videoUris: _v2
              }),
              ...(_v0 && "uploaded_videos" !== _v0 && "album" !== _v0 && {
                outroVideosCollectionType: _v0
              }),
              picture: null,
              pictureUri: _v3 ? _v88(_v3, _v1) : null
            }
          };
          break;
        case "link":
          _v8 = {
            link: _v4
          };
          break;
        case "text":
          _v8 = {
            text: _v3
          };
          break;
        case "image":
          _v8 = {
            image: {
              pictureUri: _v88(_v6?.pictureUri, _v1)
            }
          };
          break;
        case "share":
          _v8 = {
            share: {
              pictureUri: _v88(_v7?.pictureUri, _v1)
            }
          };
          break;
        default:
          _v8 = {};
      }
      return {
        type: _v2,
        ..._v8
      };
    },
    _v88 = (_v0, _v1) => `resources/presets/${_v1}/${_v0}`,
    _v89 = ["name", "uri", "createdOn", "modifiedOn", "settings.colors", "settings.logos", "settings.buttons.embed", "settings.buttons.reaction", "settings.buttons.like", "settings.buttons.share", "settings.buttons.fullscreen", "settings.buttons.watchlater", "settings.pip", "settings.volume", "settings.speed", "settings.byline", "settings.title", "settings.portrait", "settings.playbar", "settings.chapters", "settings.airplay", "settings.chromecast", "settings.closedCaptions", "settings.transcript", "settings.qualitySelector", "settings.playButton.position", "settings.audioTracks", "settings.skippingForward", "settings.endScreen", "settings.askAi"],
    _v90 = _v0 => ({
      id: _v39(_v0.uri),
      name: _v0.name,
      settings: (_v0 => {
        let {
            settings: _v1
          } = _v0,
          {
            buttons: _v2,
            colors: _v3,
            logos: _v4,
            playButton: _v5,
            title: _v6,
            portrait: _v7,
            byline: _v8,
            endScreen: _v9,
            ..._v10
          } = _v1,
          {
            vimeo: _v11,
            custom: _v12
          } = _v4,
          {
            position: _v13
          } = _v5,
          {
            type: _v14,
            text: _v15,
            link: _v16,
            share: _v17,
            videos: _v18,
            image: _v19
          } = _v9 ?? {};
        return {
          ..._v2,
          colors: {
            colorOne: _v3?.colorOne ? (0, _v85.withHashPrefix)(_v3.colorOne) : _v26.colorOne,
            colorTwo: _v3?.colorTwo ? (0, _v85.withHashPrefix)(_v3.colorTwo) : _v26.colorTwo,
            colorThree: _v3?.colorThree ? (0, _v85.withHashPrefix)(_v3.colorThree) : _v26.colorThree,
            colorFour: _v3?.colorFour ? (0, _v85.withHashPrefix)(_v3.colorFour) : _v26.colorFour
          },
          endScreen: {
            type: "email" !== _v14 && _v14 ? _v14 : "nothing",
            text: _v15 ?? _v35,
            link: _v16,
            share: _v17,
            videos: _v18 ?? _v36,
            image: _v19
          },
          customLogo: _v12,
          vimeoLogo: _v11,
          playButtonPosition: _v13,
          title: "show" === _v6,
          portrait: "show" === _v7,
          owner: "show" === _v8,
          ..._v10
        };
      })(_v0),
      createdDate: _v0.createdOn,
      modifiedDate: _v0.modifiedOn
    });
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  let _v95 = {},
    _v96 = {},
    _v97 = {
      presetName: "Untitled preset",
      airplay: !0,
      askAi: !0,
      audioTracks: !0,
      autopip: !0,
      categories: !0,
      chapters: !0,
      chromecast: !0,
      closedCaptions: !0,
      colors: {
        colorFour: _v26.colorFour,
        colorOne: _v26.colorOne,
        colorThree: _v26.colorThree,
        colorTwo: _v26.colorTwo
      },
      creativeCommons: !0,
      credits: !0,
      customLogo: {
        active: !1,
        link: null,
        sticky: !1,
        url: null,
        useLink: !1
      },
      dateAdded: !0,
      description: !0,
      embed: !0,
      endScreen: {
        videos: _v36,
        type: "videos"
      },
      fullscreen: !0,
      like: !0,
      owner: !0,
      pip: !0,
      playButtonPosition: "auto",
      playbar: !0,
      portrait: !0,
      qualitySelector: !0,
      reaction: !1,
      share: !0,
      skippingForward: !0,
      speed: !0,
      tags: !0,
      title: !0,
      transcript: !0,
      uploader: !0,
      vimeoAi: !1,
      vimeoLogo: !0,
      views: !0,
      volume: !0,
      watchlater: !0
    },
    _v98 = (_v1 = (_v0, _v1) => ({
      preset: (({
        set: _v0,
        get: _v1
      }) => ({
        applyToAll: _v1()?.preset.applyToAll ?? !1,
        committed: _v1()?.preset.committed ?? _v97,
        draft: _v1()?.preset.draft ?? _v97,
        isSubmitting: _v1()?.preset.isSubmitting ?? !1,
        presetId: _v1()?.preset.presetId ?? 0,
        actions: {
          initializeState: _v0 => _v0(({
            preset: _v0
          }) => {
            _v0.presetId = _v0.id, _v0.committed = {
              ..._v97,
              ..._v0.settings,
              presetName: _v0.name
            }, _v0.draft = {
              ..._v97,
              ..._v0.settings,
              presetName: _v0.name
            };
          }),
          resetState: () => _v0(({
            preset: _v0
          }) => {
            _v0.presetId = 0, _v0.draft = _v97, _v0.committed = _v97, _v0.applyToAll = !1;
          }),
          toggleSetting: _v0 => {
            _v0(({
              preset: _v0
            }) => {
              let _v1 = _v0.draft?.[_v0];
              _v0.draft[_v0] = !_v1;
            });
          },
          setApplyToAll: _v0 => {
            _v0(({
              preset: _v0
            }) => {
              _v0.applyToAll = _v0;
            });
          },
          setColor: (_v0, _v1) => {
            _v0(({
              preset: _v0
            }) => {
              _v0.draft.colors || (_v0.draft.colors = {
                ..._v26
              }), _v0.draft.colors[_v0] = _v1;
            });
          },
          setCustomLogo: _v0 => _v0(({
            preset: _v0
          }) => {
            _v0.draft.customLogo = {
              active: _v0.active ?? _v0.draft.customLogo?.active ?? !1,
              link: _v0.link ?? _v0.draft.customLogo?.link ?? "",
              sticky: _v0.sticky ?? _v0.draft.customLogo?.sticky ?? !1,
              url: _v0.url ?? _v0.draft.customLogo?.url ?? "",
              useLink: _v0.useLink ?? _v0.draft.customLogo?.useLink ?? !1
            };
          }),
          setEndScreenType: _v0 => _v0(({
            preset: _v0
          }) => {
            _v0.draft.endScreen = {
              ..._v0.draft.endScreen,
              type: _v0
            };
          }),
          setEndScreen: _v0 => _v0(({
            preset: _v0
          }) => {
            _v0.draft.endScreen = {
              type: _v0.draft?.endScreen?.type ?? _v97.endScreen.type,
              ..._v0.draft.endScreen,
              ..._v0
            };
          }),
          setName: _v0 => _v0(({
            preset: _v0
          }) => {
            _v0.draft.presetName = _v0;
          }),
          setPlayButtonPosition: _v0 => _v0(({
            preset: _v0
          }) => {
            _v0.draft.playButtonPosition = _v0;
          }),
          applySettings: () => _v0(({
            preset: _v0
          }) => {
            _v0.committed = _v0.draft, _v0.draft = {
              ..._v0.draft
            };
          })
        }
      }))({
        set: _v0,
        get: _v1
      }),
      form: (({
        set: _v0,
        get: _v1
      }) => ({
        fields: _v1()?.form.fields ?? _v95,
        errors: _v1()?.form.errors ?? _v96,
        actions: {
          register: (_v0, _v1) => {
            _v0(({
              form: _v0
            }) => {
              _v0.fields[_v0] = _v1;
            });
          },
          setFocusedField: _v0 => {
            _v0(({
              form: _v0
            }) => {
              _v0.focusedField = _v0;
            });
          },
          setValue: (_v0, _v1) => {
            _v0(({
              form: _v0
            }) => {
              _v0.fields[_v0] = _v1 || "";
            });
          },
          setError: (_v0, _v1) => {
            _v0(({
              form: _v0
            }) => {
              _v0.errors[_v0] = _v1;
            });
          },
          clearErrors: _v0 => {
            _v0(({
              form: _v0
            }) => {
              _v0 ? delete _v0.errors[_v0] : _v0.errors = {};
            });
          },
          reset: () => {
            _v0(({
              form: _v0
            }) => {
              _v0.fields = _v95, _v0.errors = _v96;
            });
          }
        }
      }))({
        set: _v0,
        get: _v1
      }),
      actions: {
        resetStore: () => {
          _v1().preset.actions.resetState(), _v1().form.actions.reset();
        }
      }
    }), (0, _v92.create)((0, _v94.immer)((0, _v93.devtools)(_v1, {
      enabled: !1
    })))),
    _v99 = "2004-11-05T22:00:36+00:00",
    _v100 = "Vimeo (none applied)",
    _v101 = {
      id: -1,
      name: _v100,
      createdDate: _v99,
      modifiedDate: "",
      settings: {
        airplay: !0,
        askAi: !0,
        audioTracks: !0,
        categories: !0,
        chapters: !0,
        chromecast: !0,
        closedCaptions: !0,
        collections: !0,
        colors: _v26,
        comments: !0,
        credits: !0,
        creativeCommons: !0,
        customLogo: {
          active: !1,
          link: "",
          sticky: !1,
          url: "",
          useLink: !1
        },
        embed: !0,
        endScreen: {
          videos: _v36,
          type: "videos"
        },
        like: !0,
        owner: !0,
        pip: !0,
        playButtonPosition: "auto",
        playbar: !0,
        portrait: !0,
        qualitySelector: !0,
        reaction: !1,
        share: !0,
        skippingForward: !0,
        speed: !0,
        tags: !0,
        title: !0,
        transcript: !0,
        vimeoLogo: !0,
        volume: !0,
        watchlater: !0
      }
    },
    _v102 = {
      id: -1,
      name: _v100,
      createdDate: _v99,
      modifiedDate: "",
      settings: {
        airplay: !0,
        askAi: !0,
        audioTracks: !0,
        categories: !0,
        chapters: !0,
        chromecast: !0,
        closedCaptions: !0,
        collections: !0,
        colors: _v26,
        comments: !0,
        credits: !0,
        creativeCommons: !0,
        customLogo: {
          active: !1,
          link: "",
          sticky: !1,
          url: "",
          useLink: !1
        },
        dateAdded: !0,
        description: !0,
        download: !0,
        embed: !0,
        like: !0,
        owner: !0,
        pip: !0,
        playButtonPosition: "auto",
        playbar: !0,
        portrait: !0,
        qualitySelector: !0,
        reaction: !1,
        share: !0,
        skippingForward: !0,
        speed: !0,
        tags: !0,
        title: !0,
        transcript: !0,
        uploader: !1,
        vimeoLogo: !0,
        volume: !0,
        watchlater: !0,
        views: !1
      }
    };
  var _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  let _v117 = ({
      children: _v0,
      ..._v1
    }) => (0, _v2.jsx)(_v111.Accordion, {
      w: "100%",
      borderRadius: "sm",
      defaultIndex: 0,
      allowToggle: !0,
      reduceMotion: !0,
      ..._v1,
      children: _v0
    }),
    _v118 = ({
      children: _v0,
      label: _v1
    }) => (0, _v2.jsx)(_v114.AccordionItem, {
      children: ({
        isExpanded: _v0
      }) => (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsxs)(_v112.AccordionButton, {
          display: "flex",
          justifyContent: "space-between",
          bgColor: "transparent",
          children: [(0, _v2.jsx)(_v116.Header, {
            variant: "heading-sm",
            my: "sm",
            size: "xl",
            children: _v1
          }), (0, _v2.jsx)(_v113.AccordionIcon, {})]
        }), (0, _v2.jsx)(_v115.AccordionPanel, {
          children: (0, _v2.jsx)(_v9.Flex, {
            direction: "column",
            gap: "md",
            align: "flex-start",
            children: _v0
          })
        })]
      })
    });
  var _v119 = _v0.i(0),
    _v120 = _v0.i(0);
  let _v121 = ({
    disabled: _v0 = !1,
    options: _v1,
    state: _v2,
    onToggle: _v3
  }) => {
    let [_v4, _v5] = (0, _v3.useState)(!1),
      _v6 = (0, _v56.useColorModeValue)("blackAlpha.500", "whiteAlpha.500"),
      _v7 = (0, _v3.useCallback)(() => {
        _v4 || _v1?.forEach(_v0 => {
          "toggle" !== _v0.type || (_v0.payload ? (0, _v119.default)(_v2, _v0.payload) : null) && _v3?.(_v0.payload);
        }), _v5(_v0 => !_v0);
      }, [_v2, _v4, _v1, _v3]);
    return (0, _v2.jsx)(_v120.Toggle, {
      label: (0, _v2.jsx)(_v13.Text, {
        color: _v0 ? _v6 : "inherit",
        variant: "heading-xs",
        children: (0, _v16.translate)({
          singular: "Hide all",
          dictionary: {
            es: {
              singular: "Ocultar todo"
            },
            "de-DE": {
              singular: "Alle ausblenden"
            },
            "fr-FR": {
              singular: "Tout masquer"
            },
            "ja-JP": {
              singular: "すべて非表示にする"
            },
            "ko-KR": {
              singular: "모두 숨기기"
            },
            "pt-BR": {
              singular: "Ocultar tudo"
            },
            "zh-CN": {
              singular: "隐藏所有"
            }
          }
        })
      }),
      isChecked: _v4,
      isDisabled: _v0,
      onChange: _v7
    });
  };
  var _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0);
  let _v130 = ({
    children: _v0,
    defaultValue: _v1,
    placement: _v2 = "right-start",
    onChange: _v3
  }) => (0, _v2.jsxs)(_v126.ColorPickerRoot, {
    defaultValue: (0, _v128.parseColor)(_v1),
    onValueChange: _v0 => _v3((0, _v129.toHex)(_v0.valueAsString)),
    positioning: {
      placement: _v2
    },
    children: [(0, _v2.jsx)(_v127.ColorPickerControl, {
      children: (0, _v2.jsx)(_v126.ColorPickerTrigger, {
        children: _v0
      })
    }), (0, _v2.jsx)(_v67.Portal, {
      children: (0, _v2.jsx)(_v126.ColorPickerPositioner, {
        children: (0, _v2.jsxs)(_v126.ColorPickerContent, {
          style: {
            height: "max-content",
            maxHeight: "100%"
          },
          children: [(0, _v2.jsx)(_v126.ColorPickerArea, {}), (0, _v2.jsx)(_v9.Flex, {
            w: "100%",
            align: "center",
            children: (0, _v2.jsxs)(_v126.ColorPickerChannelSlider, {
              channel: "hue",
              children: [(0, _v2.jsx)(_v126.ColorPickerChannelSliderTrack, {}), (0, _v2.jsx)(_v126.ColorPickerChannelSliderThumb, {})]
            })
          }), (0, _v2.jsxs)(_v9.Flex, {
            gap: "sm",
            align: "center",
            children: [(0, _v2.jsx)(_v126.ColorPickerChannelInput, {
              channel: "hex"
            }), (0, _v2.jsx)(_v126.ColorPickerEyeDropperTrigger, {})]
          })]
        })
      })
    })]
  });
  var _v131 = _v0.i(0);
  function _v132({
    hasBrandkit: _v0,
    label: _v1,
    onChange: _v2,
    value: _v3,
    isDisabled: _v4 = !1
  }) {
    let [_v5, _v6] = (0, _v3.useState)(_v3),
      _v7 = (0, _v122.default)(_v2, 50);
    (0, _v3.useEffect)(() => {
      _v6(_v3);
    }, [_v3]);
    let _v8 = _v0 => _v7(_v0);
    return (0, _v2.jsx)(_v131.LabeledControl, {
      label: _v1,
      isDisabled: _v4,
      children: (0, _v2.jsxs)(_v10.HStack, {
        gap: "xs",
        cursor: "inherit",
        children: [(0, _v2.jsx)(_v13.Text, {
          variant: "body-xl",
          fontSize: "inherit",
          children: _v5
        }), _v4 && (0, _v2.jsx)(_v133, {
          color: _v5
        }), !_v4 && (_v0 ? (0, _v2.jsx)(_v124.ColorPickerBrandKit, {
          color: _v5 ?? _v125.DEFAULT_BRANDING_COLOR,
          position: _v125.DEFAULT_PICKER_PLACEMENT,
          onChange: _v8,
          productName: "single_video_view",
          children: (0, _v2.jsx)(_v44.Box, {
            children: (0, _v2.jsx)(_v133, {
              color: _v5 ?? _v125.DEFAULT_BRANDING_COLOR
            })
          })
        }) : (0, _v2.jsx)(_v130, {
          defaultValue: _v3,
          onChange: _v8,
          children: (0, _v2.jsx)(_v44.Box, {
            children: (0, _v2.jsx)(_v133, {
              color: _v5
            })
          })
        }))]
      })
    });
  }
  let _v133 = ({
    color: _v0
  }) => (0, _v2.jsx)(_v123.CircleShapeFilled, {
    color: _v0,
    cursor: "inherit",
    stroke: "stroke",
    boxSize: "xs",
    mx: "sm",
    _hover: {
      backgroundColor: "transparent"
    }
  });
  var _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0);
  let _v141 = {
      h: (0, _v11.rem)(32),
      w: (0, _v11.rem)(52)
    },
    _v142 = ({
      canAddPlayerLogo: _v0,
      committedLogo: _v1,
      disabled: _v2,
      draftLogo: _v3,
      onChange: _v4
    }) => {
      let _v5 = _v38(),
        _v6 = (0, _v3.useRef)(null),
        _v7 = (0, _v3.useRef)(null),
        {
          isOpen: _v8,
          onClose: _v9,
          onToggle: _v10
        } = (0, _v4.useDisclosure)(),
        _v11 = !!_v3?.link && !_v42(_v3?.link),
        _v12 = _v2 || !_v0;
      (0, _v138.useOutsideClick)({
        enabled: _v8,
        ref: _v6,
        handler: _v0 => {
          _v0.target && _v7.current && (_v7.current == _v0.target || _v7.current?.contains(_v0.target)) || _v9();
        }
      });
      let _v13 = (0, _v3.useCallback)(() => {
          _v4({
            active: !_v3?.active,
            url: _v3?.active ? _v1?.url ?? null : null
          });
        }, [_v1, _v3, _v4]),
        _v14 = (0, _v3.useCallback)(() => {
          _v3?.link && !_v42(_v3?.link) && (_v4({
            ..._v3,
            link: ""
          }), _v9());
        }, [_v3, _v4, _v9]),
        _v15 = (0, _v3.useCallback)(({
          logoUrl: _v0
        }) => {
          _v0 && _v3 && _v4({
            ..._v3,
            url: _v0,
            active: !0
          }), _v9();
        }, [_v3, _v4, _v9]),
        _v16 = (0, _v2.jsx)(_v57, {
          src: _v3?.url,
          width: _v141.w,
          height: _v141.h,
          showOverlay: _v0,
          showFallback: !0,
          children: (0, _v2.jsx)(_v139.EditPencil, {
            color: "white",
            visibility: "hidden"
          })
        }),
        _v17 = (0, _v2.jsx)(_v140.LogoPickerBrandKit, {
          LogoPickerControlComponent: () => (0, _v2.jsx)(_v44.Box, {
            onClick: _v10,
            children: _v16
          }),
          popoverPlacement: "top-start",
          logoPickerStyle: {
            zIndex: 0
          },
          isPickerOpen: _v8,
          popoverRef: _v6,
          triggerRef: _v7,
          onClose: _v14,
          onLogoSelect: _v15,
          initialLogo: {
            url: _v3?.url || void 0
          }
        });
      return (0, _v2.jsxs)(_v9.Flex, {
        direction: "column",
        gap: "md",
        w: "100%",
        children: [(0, _v2.jsxs)(_v131.LabeledControl, {
          label: (0, _v16.translate)({
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
                singular: "사용자 지정 로고"
              },
              "pt-BR": {
                singular: "Logotipo personalizado"
              },
              "zh-CN": {
                singular: "自定义徽标"
              }
            }
          }),
          isDisabled: _v12,
          children: [!_v12 && _v3?.active && _v17, (0, _v2.jsx)(_v137.Switch, {
            isChecked: _v3?.active || !1,
            onChange: _v13,
            isDisabled: _v12,
            size: "sm",
            pr: "75"
          })]
        }), _v3?.active && (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v120.Toggle, {
            label: _v5.showLogoDuringPlayback,
            isChecked: _v3?.sticky || !1,
            isDisabled: !_v3?.active,
            onChange: () => {
              _v3 && _v4({
                ..._v3,
                sticky: !_v3.sticky
              });
            }
          }), (0, _v2.jsx)(_v120.Toggle, {
            label: _v5.linkThisLogo,
            isChecked: _v3?.useLink || !1,
            isDisabled: !_v3?.active,
            onChange: () => {
              _v3 && _v4({
                ..._v3,
                useLink: !_v3.useLink
              });
            }
          }), !!_v3?.useLink && (0, _v2.jsxs)(_v134.FormControl, {
            w: "100%",
            isInvalid: _v11,
            children: [(0, _v2.jsx)(_v136.Input, {
              placeholder: _v5.linkUrl,
              variant: "md",
              value: _v3?.link || "",
              onChange: _v0 => {
                _v3 && _v4({
                  ..._v3,
                  link: _v0.target.value
                });
              }
            }), (0, _v2.jsx)(_v135.FormErrorMessage, {
              children: _v5.invalidUrl
            })]
          })]
        })]
      });
    },
    _v143 = ({
      canAddPlayerLogo: _v0,
      committedLogo: _v1,
      disabled: _v2,
      draftLogo: _v3,
      onChange: _v4
    }) => (0, _v2.jsx)(_v142, {
      committedLogo: _v1,
      disabled: _v2,
      draftLogo: _v3,
      canAddPlayerLogo: _v0,
      onChange: _v4
    }),
    _v144 = ({
      title: _v0,
      committed: _v1,
      disabled: _v2,
      draft: _v3,
      options: _v4,
      hasHideAll: _v5 = !1,
      onColorChange: _v6,
      onToggle: _v7,
      onLogoChange: _v8
    }) => (0, _v2.jsxs)(_v118, {
      label: _v0,
      children: [_v5 && (0, _v2.jsx)(_v121, {
        state: _v3,
        options: _v4,
        onToggle: _v7,
        disabled: _v2
      }), _v4.map(_v0 => (_v0 => {
        let _v1,
          {
            label: _v2,
            payload: _v3,
            type: _v4
          } = _v0,
          _v5 = !!_v0.disableReason;
        switch (_v4) {
          case "color":
            _v1 = (0, _v2.jsx)(_v132, {
              label: _v2,
              value: (0, _v119.default)(_v3, `colors.${_v3}`) ?? "",
              isDisabled: _v5 || _v2,
              hasBrandkit: !1,
              onChange: _v0 => _v6?.(_v0.payload, _v0)
            }, _v0.payload);
            break;
          case "custom-logo":
            _v1 = (0, _v2.jsx)(_v143, {
              committedLogo: (0, _v119.default)(_v1, _v3) || {},
              draftLogo: (0, _v119.default)(_v3, _v3) || {},
              onChange: _v0 => _v8?.(_v0),
              canAddPlayerLogo: !0,
              disabled: _v5 || _v2
            }, _v0.payload);
            break;
          default:
            _v1 = (0, _v2.jsx)(_v120.Toggle, {
              label: _v2,
              isChecked: (0, _v119.default)(_v3, _v3),
              isDisabled: _v5 || _v2,
              onChange: () => _v7?.(_v3)
            }, _v3);
        }
        return _v5 ? (0, _v2.jsx)(_v68.Tooltip, {
          label: _v0.disableReason,
          placement: "top-end",
          children: (0, _v2.jsx)(_v9.Flex, {
            w: "100%",
            children: _v1
          })
        }) : _v1;
      })(_v0))]
    }),
    _v145 = ({
      value: _v0,
      isDisabled: _v1,
      onChange: _v2
    }) => {
      let _v3 = [{
          payload: "auto",
          label: (0, _v16.translate)({
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
          })
        }, {
          payload: "bottom",
          label: (0, _v16.translate)({
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
          })
        }, {
          payload: "center",
          label: (0, _v16.translate)({
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
          })
        }],
        _v4 = (0, _v56.useColorModeValue)("blackAlpha.500", "whiteAlpha.500");
      return (0, _v2.jsxs)(_v9.Flex, {
        direction: "column",
        w: "100%",
        gap: "sm",
        children: [(0, _v2.jsx)(_v13.Text, {
          variant: "heading-xs",
          color: _v1 ? _v4 : "text-primary",
          children: (0, _v16.translate)({
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
          })
        }), (0, _v2.jsx)(_v8.Center, {
          w: "100%",
          gap: "md",
          children: _v3.map(({
            payload: _v0,
            label: _v1
          }) => {
            let _v2 = (_v1 ? "auto" : _v0) === _v0;
            return (0, _v2.jsx)(_v7.Button, {
              title: _v1.length > 8 ? _v1 : "",
              w: "100%",
              size: "sm",
              variant: "secondary",
              display: "block",
              overflow: "hidden",
              textOverflow: "ellipsis",
              border: _v2 ? "2px solid" : "",
              borderColor: _v2 ? "blue.500" : "grayscale.400",
              isDisabled: _v1,
              onClick: () => _v2(_v0),
              children: _v1
            }, _v0);
          })
        })]
      });
    },
    _v146 = ({
      disabled: _v0 = !1,
      title: _v1,
      state: _v2,
      onToggle: _v3,
      onPlayButtonChange: _v4
    }) => {
      let _v5,
        _v6 = [{
          type: "toggle",
          label: (_v5 = _v38()).progressBar,
          payload: "playbar"
        }, {
          type: "toggle",
          label: _v5.volume,
          payload: "volume"
        }, {
          type: "toggle",
          label: _v5.closedCaptions,
          payload: "closedCaptions"
        }, {
          type: "toggle",
          label: _v5.transcript,
          payload: "transcript"
        }, {
          type: "toggle",
          label: _v5.speed,
          payload: "speed"
        }, {
          type: "toggle",
          label: _v5.qualitySelector,
          payload: "qualitySelector"
        }, {
          type: "toggle",
          label: _v5.audioTracks,
          payload: "audioTracks"
        }, {
          type: "toggle",
          label: _v5.chapters,
          payload: "chapters"
        }, {
          type: "toggle",
          label: _v5.chromecast,
          payload: "chromecast"
        }, {
          type: "toggle",
          label: _v5.airplay,
          payload: "airplay"
        }, {
          type: "toggle",
          label: _v5.pip,
          payload: "pip"
        }, {
          type: "toggle",
          label: _v5.fullScreen,
          payload: "fullscreen"
        }, {
          type: "toggle",
          label: _v5.vimeoLogo,
          payload: "vimeoLogo"
        }];
      return (0, _v2.jsxs)(_v118, {
        label: _v1,
        children: [(0, _v2.jsx)(_v145, {
          isDisabled: _v0,
          value: (0, _v119.default)(_v2, "playButtonPosition"),
          onChange: _v4
        }), (0, _v2.jsx)(_v105.Divider, {
          borderColor: "stroke"
        }), (0, _v2.jsx)(_v121, {
          state: _v2,
          onToggle: _v3,
          options: _v6,
          disabled: _v0
        }), _v6.map(_v0 => (0, _v2.jsx)(_v120.Toggle, {
          label: _v0.label,
          isChecked: (0, _v119.default)(_v2, _v0.payload),
          isDisabled: _v0,
          onChange: () => _v3(_v0.payload)
        }, _v0.payload))]
      });
    },
    _v147 = ({
      isLoading: _v0 = !1,
      isOpen: _v1,
      onClose: _v2,
      onConfirm: _v3
    }) => {
      let _v4 = _v38();
      return (0, _v2.jsxs)(_v53, {
        isOpen: _v1,
        title: _v4.applyPresetToAll,
        onClose: _v2,
        children: [(0, _v2.jsx)(_v53.Content, {
          flexDirection: "column",
          pb: "sm",
          children: _v4.thisPresetWillReplaceTheCurrent
        }), (0, _v2.jsxs)(_v53.Footer, {
          justifyContent: "flex-end",
          border: "none",
          children: [(0, _v2.jsx)(_v7.Button, {
            variant: "tertiary",
            onClick: _v2,
            children: _v4.cancel
          }), (0, _v2.jsx)(_v7.Button, {
            variant: "primary",
            onClick: _v3,
            isLoading: _v0,
            children: _v4.applyToAll
          })]
        })]
      });
    };
  var _v148 = _v0.i(0);
  let _v149 = ({
    title: _v0,
    description: _v1,
    mainContent: _v2,
    sideContent: _v3,
    footer: _v4,
    onClose: _v5
  }) => (0, _v2.jsxs)(_v53, {
    title: _v0,
    description: _v1,
    onClose: _v5,
    maxW: _v3 ? (0, _v11.rem)(960) : void 0,
    isOpen: !0,
    children: [(0, _v2.jsxs)(_v53.Content, {
      isScrollable: !0,
      children: [(0, _v2.jsx)(_v53.MainContent, {
        children: _v2
      }), _v3 && (0, _v2.jsx)(_v53.SideContent, {
        children: _v3
      })]
    }), (0, _v2.jsx)(_v53.Footer, {
      justifyContent: "space-between",
      children: _v4
    })]
  });
  var _v150 = _v0.i(0);
  let _v151 = ({
    name: _v0,
    label: _v1,
    maxLength: _v2,
    focusedInput: _v3,
    value: _v4,
    warningThreshold: _v5 = _v2 / 2,
    disabled: _v6,
    error: _v7,
    children: _v8
  }) => {
    let _v9 = _v4?.length || 0;
    return (0, _v2.jsxs)(_v134.FormControl, {
      isDisabled: _v6,
      isInvalid: !!_v7,
      w: "100%",
      children: [(0, _v2.jsx)(_v150.FormLabel, {
        children: (0, _v2.jsx)(_v13.Text, {
          variant: "heading-xs",
          children: _v1
        })
      }), _v8, (0, _v2.jsxs)(_v10.HStack, {
        alignItems: "center",
        justifyContent: _v7 ? "space-between" : "flex-end",
        children: [(0, _v2.jsx)(_v135.FormErrorMessage, {
          children: (0, _v2.jsx)(_v13.Text, {
            variant: "body-sm",
            children: _v7
          })
        }), _v3 === _v0 && (0, _v2.jsx)(_v134.FormHelperText, {
          color: _v9 >= _v5 ? _v9 >= _v2 ? "status-destructive-primary" : "status-caution-primary" : "text-primary",
          children: `${_v9}/${_v2}`
        })]
      })]
    });
  };
  function _v152({
    name: _v0,
    value: _v1,
    error: _v2,
    focusedInput: _v3,
    label: _v4,
    warningThreshold: _v5,
    maxLength: _v6,
    disabled: _v7,
    handleFocus: _v8,
    handleBlur: _v9,
    ..._v10
  }) {
    return (0, _v2.jsx)(_v151, {
      name: _v0,
      maxLength: _v6,
      value: _v1,
      focusedInput: _v3,
      label: _v4,
      warningThreshold: _v5,
      disabled: _v7,
      error: _v2,
      children: (0, _v2.jsx)(_v136.Input, {
        name: _v0,
        value: _v1,
        maxLength: _v6,
        isDisabled: _v7,
        onFocus: _v8,
        onBlur: _v9,
        ..._v10
      })
    });
  }
  var _v153 = _v0.i(0);
  let _v154 = ({
    configUrl: _v0,
    mode: _v1
  }) => {
    let {
        draft: _v2
      } = _v98(({
        preset: _v0
      }) => _v0),
      [_v3, _v4] = (0, _v3.useState)(!1),
      _v5 = (0, _v3.useRef)(null),
      {
        player: _v6
      } = (0, _v153.usePlayer)(_v5, 0, !0, _v0, !1);
    return (0, _v3.useEffect)(() => {
      if (_v6 && _v6.ready) switch (_v1) {
        case "endscreen":
          if (!_v6?._setOutro || !_v2.endScreen) return;
          _v6._setOutro(_v2.endScreen.type, (_v0 => {
            let _v1;
            switch (_v0.type) {
              case "videos":
                _v0.videos && (_v1 = {
                  videos: _v0.videos,
                  following: 0,
                  context: "",
                  img_base: _v0.videos?.picture?.baseLink
                });
                break;
              case "link":
                _v1 = {
                  title: _v0.link?.name,
                  url: _v0.link?.button?.link,
                  text: _v0.link?.button?.label,
                  description: _v0.link?.description,
                  url2: _v0.link?.secondaryLink?.link,
                  text2: _v0.link?.secondaryLink?.label,
                  img_base: _v0.link?.picture?.baseLink
                };
                break;
              case "text":
                _v1 = {
                  text: _v0.text?.description
                };
                break;
              case "image":
                _v1 = {
                  url: _v0.image?.link,
                  description: _v0.image?.description,
                  img_base: _v0.image?.picture?.baseLink
                };
                break;
              case "share":
                _v1 = {
                  img_base: _v0.share?.picture?.baseLink
                };
            }
            return {
              version: 2,
              ...(_v1 && {
                data: _v1
              })
            };
          })(_v2.endScreen));
          break;
        case "embed":
          _v6.ready(() => Object.keys(_v2).forEach(_v0 => ((_v0, _v1, _v2) => {
            let _v3 = _v33[_v1];
            if (!_v3) return;
            let _v4 = _v2[_v1];
            switch (_v3) {
              case "colors":
                Object.entries(_v4).forEach(([_v0, _v1]) => {
                  let _v2;
                  _v0[_v0] = (_v2 = _v1, _v2?.replace(/^#/, ""));
                });
                return;
              case "play_button_position":
                _v0._setEmbedSetting(_v3, _v34[_v4]);
                return;
              case "share":
              case "embed":
                let _v0;
                _v0._setEmbedSettings?.((_v0 = _v2.share, {
                  share: +!!_v0,
                  embed: +!!_v2.embed
                }));
                return;
              case "byline":
              case "portrait":
              case "title":
              case "airplay":
              case "ask_ai":
              case "audio_tracks":
              case "cc":
              case "chapters":
              case "chromecast":
              case "fullscreen":
              case "like":
              case "logo":
              case "pip":
              case "playbar":
              case "quality":
              case "speed":
              case "transcript":
              case "volume":
              case "watch_later":
              case "skipping_forward":
                _v0._setEmbedSetting(_v3, +!!_v4);
                return;
              case "custom_logo":
                _v0._setEmbedSetting(_v3, _v4.active && _v4.url ? {
                  img: _v4.url,
                  url: _v4.link,
                  sticky: _v4.sticky
                } : null);
                return;
            }
          })(_v6, _v0, _v2)));
      }
    }, [_v2, _v1, _v6]), (0, _v3.useEffect)(() => {
      _v6 && _v6.ready && _v6.ready(() => {
        _v4(!0);
      });
    }, [_v6]), (0, _v2.jsxs)(_v9.Flex, {
      aspectRatio: "16/9",
      borderRadius: "sm",
      overflow: "hidden",
      my: "md",
      children: [!_v3 && (0, _v2.jsx)(_v8.Center, {
        position: "absolute",
        w: "100%",
        h: "50%",
        children: (0, _v2.jsx)(_v12.Spinner, {
          size: "md"
        })
      }), (0, _v2.jsx)(_v44.Box, {
        ref: _v5,
        className: "player js-player"
      })]
    });
  };
  var _v155 = _v0.i(0),
    _v156 = _v0.i(0);
  async function _v157({
    baseUrl: _v0,
    where: {
      resourceType: _v1,
      resourceId: _v2,
      imageId: _v3
    },
    ..._v4
  }) {
    return (0, _v76.measureLatency)("deleteResourceResourceIdOutrobackground", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/resources/${_v1}/${_v2}/outrobackgrounds/${_v3}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  async function _v158({
    baseUrl: _v0,
    select: _v1,
    where: {
      resourceType: _v2,
      resourceId: _v3
    },
    ..._v4
  }) {
    return (0, _v76.measureLatency)("getResourceResourceIdOutrobackgrounds", "GET", async () => {
      let _v0 = await fetch(`${_v0}/resources/${_v2}/${_v3}/outrobackgrounds?fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  let _v159 = "presets",
    _v160 = {
      loading: !1,
      error: null,
      data: []
    };
  function _v161(_v0, _v1) {
    switch (_v1.type) {
      case "REQUEST":
        return {
          ..._v0,
          loading: !0
        };
      case "SUCCESS":
        return {
          ..._v0,
          loading: !1,
          ...(_v1.payload && {
            data: _v1.payload
          })
        };
      case "FAILURE":
        return {
          ..._v0,
          loading: !1,
          error: _v1.payload
        };
      default:
        return _v0;
    }
  }
  var _v162 = _v0.i(0),
    _v163 = _v0.i(0);
  let _v164 = ({
    icon: _v0,
    tooltipLabel: _v1,
    onChange: _v2,
    isUploading: _v3,
    size: _v4 = "xs",
    ..._v5
  }) => (0, _v2.jsx)(_v163.FileInput, {
    label: (0, _v2.jsx)(_v68.Tooltip, {
      label: _v1,
      children: (0, _v2.jsx)(_v8.Center, {
        paddingX: _v4,
        height: _v4,
        children: _v0
      })
    }),
    sx: {
      padding: 0,
      height: "auto",
      borderRadius: "xs"
    },
    onChange: _v2,
    isDisabled: _v3,
    isLoading: _v3,
    variant: "secondary",
    size: _v4,
    ..._v5
  });
  var _v165 = _v0.i(0),
    _v166 = _v0.i(0);
  function _v167({
    item: _v0,
    value: _v1,
    onChange: _v2,
    handleDeleteImage: _v3,
    handleUploadImage: _v4,
    isUploading: _v5 = !1
  }) {
    let _v6 = {
        backgroundImage: (0, _v16.translate)({
          singular: "Background image",
          dictionary: {
            es: {
              singular: "Imagen de fondo"
            },
            "de-DE": {
              singular: "Hintergrundbild"
            },
            "fr-FR": {
              singular: "Image de fond"
            },
            "ja-JP": {
              singular: "背景イメージ"
            },
            "ko-KR": {
              singular: "배경 이미지"
            },
            "pt-BR": {
              singular: "Imagem de Fundo"
            },
            "zh-CN": {
              singular: "背景图片"
            }
          }
        }),
        deleteImage: (0, _v16.translate)({
          singular: "Delete image",
          dictionary: {
            es: {
              singular: "Eliminar imagen"
            },
            "de-DE": {
              singular: "Bild löschen"
            },
            "fr-FR": {
              singular: "Supprimer l'image"
            },
            "ja-JP": {
              singular: "画像を削除"
            },
            "ko-KR": {
              singular: "이미지 삭제"
            },
            "pt-BR": {
              singular: "Excluir imagem"
            },
            "zh-CN": {
              singular: "删除图片"
            }
          }
        }),
        replaceImage: (0, _v16.translate)({
          singular: "Replace image",
          dictionary: {
            es: {
              singular: "Reemplazar imagen"
            },
            "de-DE": {
              singular: "Bild ersetzen"
            },
            "fr-FR": {
              singular: "Remplacer l'image"
            },
            "ja-JP": {
              singular: "画像を置き換える"
            },
            "ko-KR": {
              singular: "이미지 교체"
            },
            "pt-BR": {
              singular: "Substituir imagem"
            },
            "zh-CN": {
              singular: "替换图像"
            }
          }
        })
      },
      [_v7, _v8] = (0, _v3.useState)(!1);
    return (0, _v2.jsxs)(_v9.Flex, {
      onClick: () => _v2(_v0.id),
      tabIndex: 0,
      aspectRatio: 1.8,
      borderRadius: "xs",
      w: `calc((100% - ${(0, _v11.rem)(16)}) / 3)`,
      position: "relative",
      onMouseEnter: () => _v8(!0),
      onMouseLeave: () => _v8(!1),
      pointerEvents: _v5 ? "none" : "auto",
      children: [(0, _v2.jsx)(_v44.Box, {
        as: "img",
        w: "100%",
        h: "100%",
        objectFit: "cover",
        opacity: _v0.id === _v1 ? 1 : .4,
        src: _v0.thumbnailUrl ?? "https://devi.vimeocdn.com/card/641b837ad3386",
        alt: _v6.backgroundImage
      }), (0, _v2.jsxs)(_v10.HStack, {
        gap: "xs",
        position: "absolute",
        top: (0, _v11.rem)(2),
        right: (0, _v11.rem)(2),
        display: _v7 ? "flex" : "none",
        children: [(0, _v2.jsx)(_v68.Tooltip, {
          label: _v6.deleteImage,
          children: (0, _v2.jsx)(_v61.IconButton, {
            "aria-label": _v6.deleteImage,
            size: "xs",
            variant: "blur",
            icon: (0, _v2.jsx)(_v166.TrashBin, {}),
            onClick: _v0 => _v3(_v0, _v0.id),
            disabled: _v5
          })
        }), (0, _v2.jsx)(_v68.Tooltip, {
          label: _v6.replaceImage,
          children: (0, _v2.jsx)(_v44.Box, {
            children: (0, _v2.jsx)(_v164, {
              icon: (0, _v2.jsx)(_v165.SyncRefresh, {}),
              tooltipLabel: _v6.replaceImage,
              onChange: _v4,
              accept: _v27,
              variant: "blur"
            })
          })
        })]
      })]
    }, _v0.id);
  }
  let _v168 = ({
      images: _v0 = [],
      value: _v1,
      loading: _v2,
      disabled: _v3,
      onChange: _v4,
      onSelectFile: _v5,
      onDeleteFile: _v6
    }) => {
      let _v7 = {
          addImage: (0, _v16.translate)({
            singular: "Add image",
            dictionary: {
              es: {
                singular: "Agregar imagen"
              },
              "de-DE": {
                singular: "Bild hinzufügen"
              },
              "fr-FR": {
                singular: "Ajouter une image"
              },
              "ja-JP": {
                singular: "画像の追加"
              },
              "ko-KR": {
                singular: "이미지 추가"
              },
              "pt-BR": {
                singular: "Adicionar imagem"
              },
              "zh-CN": {
                singular: "添加图片"
              }
            }
          }),
          image: (0, _v16.translate)({
            singular: "Image",
            dictionary: {
              es: {
                singular: "Imagen"
              },
              "de-DE": {
                singular: "Bild"
              },
              "ja-JP": {
                singular: "画像"
              },
              "ko-KR": {
                singular: "이미지"
              },
              "pt-BR": {
                singular: "Imagem"
              },
              "zh-CN": {
                singular: "图片"
              }
            }
          }),
          uploadImage: (0, _v16.translate)({
            singular: "Upload image",
            dictionary: {
              es: {
                singular: "Subir imagen"
              },
              "de-DE": {
                singular: "Bild hochladen"
              },
              "fr-FR": {
                singular: "Téléverser une image"
              },
              "ja-JP": {
                singular: "画像をアップロード"
              },
              "ko-KR": {
                singular: "이미지 업로드"
              },
              "pt-BR": {
                singular: "Enviar imagem"
              },
              "zh-CN": {
                singular: "上传图片"
              }
            }
          })
        },
        _v8 = async (_v0, _v1) => {
          _v0.preventDefault(), _v0.stopPropagation(), await _v6(_v1);
          let _v2 = _v0.filter(_v0 => _v0.id !== _v1);
          _v4(_v2.length > 0 ? _v2[0].id : void 0);
        },
        _v9 = async _v0 => {
          let _v1 = _v0.target.files?.[0];
          _v1 && _v4(await _v5(_v1));
        },
        _v10 = _v0.length > 0;
      return (0, _v2.jsxs)(_v9.Flex, {
        direction: "column",
        gap: "sm",
        w: "100%",
        children: [(0, _v2.jsxs)(_v9.Flex, {
          justify: "space-between",
          align: "center",
          w: "100%",
          children: [(0, _v2.jsx)(_v116.Header, {
            as: "h6",
            size: "xs",
            children: _v7.image
          }), !_v10 && (0, _v2.jsx)(_v164, {
            icon: (0, _v2.jsx)(_v162.PlusSmall, {}),
            tooltipLabel: _v7.addImage,
            onChange: _v9,
            isUploading: _v2,
            accept: _v27,
            isDisabled: _v3,
            size: "xs"
          })]
        }), _v10 && !_v3 ? (0, _v2.jsx)(_v9.Flex, {
          w: "100%",
          gap: "sm",
          wrap: "wrap",
          children: _v0.map(_v0 => (0, _v2.jsx)(_v167, {
            item: _v0,
            value: _v1,
            isUploading: _v2,
            onChange: _v4,
            handleDeleteImage: _v8,
            handleUploadImage: _v9
          }, _v0.id))
        }) : null]
      });
    },
    _v169 = ({
      uriName: _v0,
      urlName: _v1,
      disabled: _v2 = !1
    }) => {
      let {
          setValue: _v3
        } = (0, _v104.useFormContext)(),
        {
          images: _v4,
          isLoading: _v5,
          updateState: _v6,
          destroy: _v7,
          upload: _v8,
          refetch: _v9
        } = (() => {
          let _v0 = (0, _v73.useViewer)(),
            _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
            {
              presetId: _v2
            } = _v98(({
              preset: _v0
            }) => _v0),
            {
              data: _v3,
              isLoading: _v4,
              mutate: _v5
            } = function (_v0, _v1) {
              let _v2 = "function" == typeof _v0 ? _v0() : _v0,
                {
                  baseUrl: _v3,
                  jwt: _v4,
                  xVimeoPage: _v5,
                  locale: _v6
                } = (0, _v82.useGctlConfig)();
              return (0, _v80.default)(_v2 ? `/resources/${_v2.where.resourceType}/${_v2.where.resourceId}/outrobackgrounds${(0, _v75.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v158({
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
            }(() => _v1 && _v2 ? {
              where: {
                resourceType: _v159,
                resourceId: _v2
              },
              select: ["uri", "baseLink", "sizes.link"]
            } : null, {
              revalidateOnFocus: !1
            }),
            _v6 = (0, _v3.useMemo)(() => _v3?.data?.map(_v0 => ({
              id: _v39(_v0.uri),
              baseUrl: _v0.baseLink,
              thumbnailUrl: _v0.sizes?.[1]?.link
            })) || [], [_v3]),
            [_v7] = function () {
              let {
                  mutate: _v0
                } = (0, _v81.useSWRConfig)(),
                {
                  baseUrl: _v1,
                  jwt: _v2,
                  xVimeoPage: _v3,
                  locale: _v4
                } = (0, _v82.useGctlConfig)(),
                [_v5, _v6] = (0, _v75.useInternalState)();
              return [(0, _v3.useCallback)(async _v0 => {
                _v6({
                  type: "REQUEST"
                });
                try {
                  let _v0 = await _v0(`/resources/${_v0.where.resourceType}/${_v0.where.resourceId}/outrobackgrounds/${_v0.where.imageId}${(0, _v75.serializeQuery)(_v0)}`, _v157({
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
            }(),
            _v8 = (0, _v3.useCallback)(async _v0 => {
              await _v7({
                where: {
                  resourceType: _v159,
                  resourceId: `${_v2 || 0}`,
                  imageId: _v0
                }
              }), await _v5();
            }, [_v2, _v7, _v5]),
            [_v9, _v10] = (0, _v3.useReducer)(_v161, _v160);
          return {
            images: _v6,
            isLoading: _v4,
            updateState: _v9,
            destroy: _v8,
            refetch: _v5,
            upload: (0, _v3.useCallback)(async _v0 => {
              _v10({
                type: "REQUEST"
              });
              try {
                let {
                    url: _v0,
                    response: _v1
                  } = await (0, _v156.uploadImageViaWebController)({
                    file: _v0,
                    type: "clip_preset_outro_background",
                    id: _v2,
                    contentType: "application/json"
                  }),
                  _v2 = await _v1.json(),
                  {
                    Path: _v3
                  } = _v2,
                  _v4 = {
                    id: Number(_v3.split("/").pop()),
                    url: _v0,
                    ..._v2
                  };
                return _v10({
                  type: "SUCCESS",
                  payload: _v4
                }), _v4;
              } catch (_v0) {
                _v10({
                  type: "FAILURE",
                  payload: _v0
                });
              }
            }, [_v2])
          };
        })(),
        _v10 = (0, _v104.useWatch)({
          name: _v0
        }),
        _v11 = _v10 ? Number(_v10?.split("/")?.pop()) : void 0,
        _v12 = _v4?.length ? _v4?.find(_v0 => _v0.id === _v11) : null,
        _v13 = _v12 ? _v12.baseUrl : "";
      (0, _v3.useEffect)(() => {
        _v13 && _v3(_v1, _v13);
      }, [_v3, _v13, _v1]);
      let _v14 = async _v0 => {
          let _v1 = await _v8(_v0);
          return await _v9(), _v1.id;
        },
        _v15 = async _v0 => {
          await _v7(_v0), await _v9();
        };
      return (0, _v2.jsx)(_v168, {
        images: _v4,
        value: _v11,
        loading: _v6.loading || _v5,
        disabled: _v2,
        onChange: _v0 => {
          _v3(_v0, _v0 ? `outrobackgrounds/${_v0}` : null, {
            shouldDirty: !0
          });
        },
        onSelectFile: _v14,
        onDeleteFile: _v15
      });
    };
  var _v170 = _v0.i(0);
  let _v171 = (0, _v11.rem)(250),
    _v172 = ({
      name: _v0,
      label: _v1,
      tooltip: _v2,
      error: _v3,
      ..._v4
    }) => (0, _v2.jsxs)(_v14.VStack, {
      alignItems: "flex-start",
      gap: "xs",
      w: "100%",
      children: [(0, _v2.jsxs)(_v9.Flex, {
        alignItems: "center",
        gap: "xs",
        children: [(0, _v2.jsx)(_v116.Header, {
          as: "h6",
          size: "xs",
          children: _v1
        }), _v2 && (0, _v2.jsx)(_v68.Tooltip, {
          label: _v2,
          placement: "top",
          maxW: _v171,
          children: (0, _v2.jsx)(_v9.Flex, {
            children: (0, _v2.jsx)(_v170.InfoCircle, {
              boxSize: "2xs"
            })
          })
        })]
      }), (0, _v2.jsxs)(_v134.FormControl, {
        isInvalid: !!_v3,
        w: "100%",
        children: [(0, _v2.jsx)(_v136.Input, {
          name: _v0,
          size: "md",
          error: _v3,
          ..._v4
        }), (0, _v2.jsx)(_v135.FormErrorMessage, {
          children: _v3
        })]
      })]
    }),
    _v173 = ({
      disabled: _v0
    }) => {
      let {
          control: _v1
        } = (0, _v104.useFormContext)(),
        _v2 = _v38();
      return (0, _v2.jsxs)(_v14.VStack, {
        gap: "md",
        children: [(0, _v2.jsx)(_v169, {
          uriName: "image.pictureUri",
          urlName: "image.picture.baseLink",
          disabled: _v0
        }), (0, _v2.jsx)(_v104.Controller, {
          name: "image.link",
          control: _v1,
          rules: {
            pattern: {
              value: _v37,
              message: _v2.invalidUrl
            }
          },
          render: ({
            field: _v0,
            fieldState: {
              error: _v1
            }
          }) => (0, _v2.jsx)(_v172, {
            ..._v0,
            label: _v2.link,
            tooltip: _v2.linkDescription,
            placeholder: _v2.enterUrl,
            error: _v1?.message,
            isInvalid: !!_v1,
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v104.Controller, {
          name: "image.description",
          control: _v1,
          render: ({
            field: _v0,
            fieldState: {
              error: _v1
            }
          }) => (0, _v2.jsx)(_v172, {
            ..._v0,
            label: _v2.altText,
            tooltip: _v2.altTextDescription,
            placeholder: _v2.enterText,
            error: _v1?.message,
            isInvalid: !!_v1,
            disabled: _v0
          })
        })]
      });
    };
  var _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0),
    _v178 = _v0.i(0);
  let _v179 = (0, _v11.rem)(56),
    _v180 = {
      opacity: .5
    },
    _v181 = {
      p: "xs",
      w: "lg",
      h: "lg",
      flexShrink: "0",
      ..._v180
    },
    _v182 = {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      mb: "0"
    },
    _v183 = {
      objectFit: "cover",
      w: "100%",
      h: "100%",
      _hover: {
        border: "0",
        boxShadow: "none"
      }
    },
    _v184 = ({
      name: _v0,
      thumbnailUrl: _v1,
      uri: _v2,
      modifiedTime: _v3,
      privacy: _v4,
      selected: _v5 = !1,
      editable: _v6 = !0,
      onSelect: _v7,
      onRemove: _v8
    }) => {
      let [_v9, _v10] = (0, _v3.useState)(!1),
        _v11 = _v178.DEFAULT_PRIVACY_OPTIONS.reduce((_v0, _v1) => (_v0[_v1.privacy] = {
          label: _v1.title,
          icon: _v178.VIDEO_PRIVACY_ICON_MAP[_v1.privacy]?.icon
        }, _v0), {}),
        _v12 = _v4 && "anybody" !== _v4 || !_v6,
        _v13 = _v5 ? (0, _v2.jsx)(_v176.StopBanRight, {
          boxSize: "lg"
        }) : (0, _v2.jsx)(_v175.PlusCircle, {}),
        _v14 = _v5 ? (0, _v16.translate)({
          singular: "Remove from end screen",
          dictionary: {
            es: {
              singular: "Eliminar de la pantalla final"
            },
            "de-DE": {
              singular: "Vom Endbildschirm entfernen"
            },
            "fr-FR": {
              singular: "Supprimer de l'écran de fin"
            },
            "ja-JP": {
              singular: "終了画面から削除"
            },
            "ko-KR": {
              singular: "종료 화면에서 삭제"
            },
            "pt-BR": {
              singular: "Remover da tela final"
            },
            "zh-CN": {
              singular: "从片尾画面中删除"
            }
          }
        }) : (0, _v16.translate)({
          singular: "Add to end screen",
          dictionary: {
            es: {
              singular: "Agregar a la pantalla final"
            },
            "de-DE": {
              singular: "Zum Endbildschirm hinzufügen"
            },
            "fr-FR": {
              singular: "Ajouter à l'écran de fin"
            },
            "ja-JP": {
              singular: "終了画面に追加"
            },
            "ko-KR": {
              singular: "종료 화면에 추가"
            },
            "pt-BR": {
              singular: "Adicionar à tela final"
            },
            "zh-CN": {
              singular: "添加到片尾画面"
            }
          }
        });
      return (0, _v2.jsxs)(_v9.Flex, {
        sx: (({
          disabled: _v0,
          selected: _v1,
          alignCenter: _v2
        }) => ({
          _hover: {
            backgroundColor: "fill-component-hover"
          },
          cursor: _v0 ? "not-allowed" : "pointer",
          ...(_v1 && {
            backgroundColor: "fill-blur"
          }),
          ...(_v2 && {
            align: "center"
          }),
          gap: "sm",
          h: _v179,
          w: "100%",
          p: "sm",
          borderRadius: "sm",
          transition: "background-color ease 200ms"
        }))({
          disabled: _v12,
          selected: _v5,
          alignCenter: !_v3
        }),
        onMouseEnter: () => _v10(!0),
        onMouseLeave: () => _v10(!1),
        onClick: _v12 ? void 0 : () => {
          _v2 && (_v5 ? _v8?.({
            uri: _v2
          }) : _v7?.({
            uri: _v2
          }));
        },
        children: [(0, _v2.jsx)(_v9.Flex, {
          sx: {
            h: _v29,
            w: _v28,
            borderRadius: "xs",
            overflow: "hidden",
            border: "0",
            flexShrink: "0",
            ...(_v12 && _v180)
          },
          children: _v1 && (0, _v2.jsx)(_v44.Box, {
            as: "img",
            src: _v1,
            alt: (0, _v16.translate)({
              singular: "Video thumbnail",
              dictionary: {
                es: {
                  singular: "Miniatura de vídeo"
                },
                "de-DE": {
                  singular: "Video-Vorschaubild"
                },
                "fr-FR": {
                  singular: "Vignette vidéo"
                },
                "ja-JP": {
                  singular: "動画サムネイル"
                },
                "ko-KR": {
                  singular: "동영상 섬네일"
                },
                "pt-BR": {
                  singular: "Miniatura de foto do vídeo"
                },
                "zh-CN": {
                  singular: "视频缩略图"
                }
              }
            }),
            sx: _v183
          })
        }), (0, _v2.jsxs)(_v9.Flex, {
          sx: {
            flexDirection: "column",
            justifyContent: "center",
            flexGrow: "1",
            flexShrink: "1",
            overflow: "hidden",
            w: `calc(100% - ${_v28})`,
            ...(_v12 && _v180)
          },
          children: [(0, _v2.jsx)(_v116.Header, {
            as: "p",
            size: "xs",
            sx: _v182,
            children: _v0
          }), _v3 && (0, _v2.jsx)(_v174.Paragraph, {
            size: "xs",
            mb: "0",
            children: (0, _v177.fromNow)(new Date(_v3))
          })]
        }), _v12 && _v4 && (0, _v2.jsx)(_v44.Box, {
          "aria-label": _v11[_v4]?.label,
          sx: _v181,
          children: _v11[_v4]?.icon
        }), !_v12 && _v4 && (0, _v2.jsx)(_v68.Tooltip, {
          label: _v14,
          children: (0, _v2.jsx)(_v61.IconButton, {
            type: "button",
            size: "sm",
            variant: "tertiary",
            "aria-label": _v14,
            icon: _v9 && _v6 ? _v13 : _v11[_v4].icon,
            isDisabled: _v12
          })
        })]
      });
    };
  var _v185 = _v0.i(0),
    _v186 = _v0.i(0),
    _v187 = _v0.i(0);
  async function _v188({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v76.measureLatency)("getUserLikes", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/likes?${(0, _v77.searchQueryString)(_v3)}&fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  _v0.i(0);
  var _v189 = _v0.i(0),
    _v190 = _v0.i(0);
  let _v191 = {},
    _v192 = ["uri", "name", "privacy.view", "createdTime", "pictures.sizes"],
    _v193 = () => ({
      uploadOption: {
        label: (0, _v16.translate)({
          singular: "My videos",
          dictionary: {
            es: {
              singular: "Mis videos"
            },
            "de-DE": {
              singular: "Meine Videos"
            },
            "fr-FR": {
              singular: "Mes vidéos"
            },
            "ja-JP": {
              singular: "自分の動画"
            },
            "ko-KR": {
              singular: "내 동영상"
            },
            "pt-BR": {
              singular: "Meus vídeos"
            },
            "zh-CN": {
              singular: "我的视频"
            }
          }
        }),
        value: "uploaded_videos"
      },
      showcaseOption: {
        label: (0, _v16.translate)({
          singular: "Showcase videos",
          dictionary: {
            es: {
              singular: "Presenta tus videos"
            },
            "de-DE": {
              singular: "Videos präsentieren"
            },
            "fr-FR": {
              singular: "Vidéos de la présentation"
            },
            "ja-JP": {
              singular: "ショーケース動画"
            },
            "ko-KR": {
              singular: "쇼케이스 동영상"
            },
            "pt-BR": {
              singular: "Vídeos da vitrine"
            },
            "zh-CN": {
              singular: "橱窗视频"
            }
          }
        }),
        value: "album"
      },
      channelOption: {
        label: (0, _v16.translate)({
          singular: "Channel videos",
          dictionary: {
            es: {
              singular: "Videos del canal"
            },
            "de-DE": {
              singular: "Kanal-Videos"
            },
            "fr-FR": {
              singular: "Vidéos de la chaîne"
            },
            "ja-JP": {
              singular: "チャンネル動画"
            },
            "ko-KR": {
              singular: "채널 동영상"
            },
            "pt-BR": {
              singular: "Canal dos Videos"
            },
            "zh-CN": {
              singular: "频道视频"
            }
          }
        }),
        value: "channel"
      },
      groupOption: {
        label: (0, _v16.translate)({
          singular: "Group videos",
          dictionary: {
            es: {
              singular: "Vídeos del grupo"
            },
            "de-DE": {
              singular: "Gruppenvideos"
            },
            "fr-FR": {
              singular: "Vidéos du groupe"
            },
            "ja-JP": {
              singular: "グループ動画"
            },
            "ko-KR": {
              singular: "그룹 동영상"
            },
            "pt-BR": {
              singular: "Vídeos de grupo"
            },
            "zh-CN": {
              singular: "群组视频"
            }
          }
        }),
        value: "group"
      },
      likesOption: {
        label: (0, _v16.translate)({
          singular: "Likes",
          dictionary: {
            es: {
              singular: "Me gusta"
            },
            "fr-FR": {
              singular: "J'aime"
            },
            "ja-JP": {
              singular: "いいね"
            },
            "ko-KR": {
              singular: "좋아하기"
            },
            "pt-BR": {
              singular: "Curtidas"
            },
            "zh-CN": {
              singular: "赞"
            }
          }
        }),
        value: "likes"
      }
    }),
    _v194 = ["unlisted", "password", "nobody", "anybody", "disable"],
    _v195 = {
      size: "md",
      style: {
        width: "100%"
      }
    },
    _v196 = ({
      disabled: _v0 = !1
    }) => {
      let _v1 = _v38(),
        {
          register: _v2,
          setValue: _v3
        } = (0, _v104.useFormContext)(),
        {
          uploadOption: _v4,
          showcaseOption: _v5,
          likesOption: _v6
        } = _v193(),
        [_v7, _v8, _v9] = (0, _v104.useWatch)({
          name: ["videos.outroVideosCollectionType", "videos.outroVideosCollectionUri", "videos.videoUris"]
        }),
        {
          albums: _v10,
          likes: _v11,
          isMyVideosLoading: _v12,
          isOutroClipsLoading: _v13,
          isSelectOptionsLoading: _v14,
          isVideosFinishedLoading: _v15,
          options: _v16,
          selectedOutroClips: _v17,
          videos: _v18,
          videosPage: _v19,
          setVideosPage: _v20
        } = (({
          videoUris: _v0
        }) => {
          let _v1 = (0, _v73.useViewer)(),
            _v2 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
            {
              channelOption: _v3,
              groupOption: _v4,
              likesOption: _v5,
              showcaseOption: _v6,
              uploadOption: _v7
            } = _v193(),
            [_v8, _v9] = (0, _v3.useState)(1),
            {
              data: _v10,
              isLoading: _v11
            } = (0, _v189.useGetUserVideos)({
              where: {
                userId: _v2
              },
              select: _v192,
              query: {
                perPage: 8,
                page: _v8
              }
            }),
            _v12 = _v10?.paging?.next === null;
          _v10 && (_v191[_v10.page] = _v10);
          let _v13 = Object.values(_v191).flatMap(_v0 => _v0.data),
            {
              data: _v14,
              isLoading: _v15
            } = (0, _v190.useGetVideos)(() => _v2 && _v0?.length ? {
              select: _v192,
              query: {
                userId: _v2,
                uris: _v0?.join(",")
              }
            } : null, {
              revalidateOnFocus: !1
            }),
            {
              data: _v16,
              isLoading: _v17
            } = function (_v0) {
              let _v1 = "function" == typeof _v0 ? _v0() : _v0,
                {
                  baseUrl: _v2,
                  jwt: _v3,
                  xVimeoPage: _v4,
                  locale: _v5
                } = (0, _v82.useGctlConfig)();
              return (0, _v80.default)(_v1 ? `/users/${_v1.where.userId}/likes${(0, _v75.serializeQuery)(_v1)}` : () => null, _v1 ? () => _v188({
                ..._v1,
                headers: {
                  ..._v1.headers,
                  "Content-Type": "application/json",
                  Authorization: _v3 ? `jwt ${_v3}` : "",
                  "Vimeo-Page": `${_v4}`,
                  "Accept-Language": _v5 ?? "en"
                },
                baseUrl: _v2
              }) : null, void 0);
            }({
              where: {
                userId: _v2
              },
              select: _v192,
              query: {
                perPage: 8,
                sort: "date"
              }
            }),
            _v18 = _v16?.data?.map(_v0 => ({
              ..._v0,
              id: Number(_v0.uri.split("/").pop())
            })),
            {
              data: _v19,
              error: _v20,
              isValidating: _v21,
              setSize: _v22
            } = (0, _v187.useGetUserAlbumsInfinite)({
              where: {
                userId: _v2
              },
              select: ["uri", "name"],
              query: {
                perPage: 8
              }
            }),
            _v23 = !_v19 && !_v20,
            _v24 = Math.ceil((_v19?.[0]?.total ?? 0) / 8),
            _v25 = _v19?.[_v19.length - 1]?.paging?.next === null,
            _v26 = _v19?.flatMap(_v0 => _v0.data).map(_v0 => ({
              ..._v0,
              id: Number(_v0.uri.split("/").pop())
            }));
          (0, _v3.useEffect)(() => {
            _v21 || !(_v24 > 1) || _v25 || _v22(_v24);
          }, [_v24, _v21, _v25, _v22]);
          let {
              data: _v27,
              isLoading: _v28
            } = (0, _v185.useGetMeChannels)({
              select: ["uri", "name"],
              query: {
                filter: "moderated"
              }
            }),
            {
              data: _v29,
              isLoading: _v30
            } = (0, _v186.useGetMeGroups)({
              select: ["uri", "name"]
            }),
            _v31 = [_v7, ...(_v18 && _v18.length > 0 ? [_v5] : []), ...(_v26 && _v26.length > 0 ? [_v6] : []), ...(_v27?.data && _v27.data.length > 0 ? [_v3] : []), ...(_v29?.data && _v29.data.length > 0 ? [_v4] : [])];
          return {
            isSelectOptionsLoading: _v23 || _v28 || _v30,
            videos: _v13,
            videosTotal: _v10?.total || 0,
            isMyVideosLoading: _v11,
            isVideosFinishedLoading: _v12,
            videosPage: _v8,
            selectedOutroClips: _v14?.data || [],
            isOutroClipsLoading: _v15,
            albums: _v26 || [],
            albumsTotal: _v19?.[0]?.total || 0,
            likes: _v16?.data || [],
            likesTotal: _v16?.total || 0,
            isLikesLoading: _v17,
            channels: _v27?.data || [],
            groups: _v29?.data || [],
            options: _v31,
            setVideosPage: _v9
          };
        })(_v9 ? {
          videoUris: _v9
        } : {}),
        _v21 = _v9?.length > 0,
        _v22 = _v7 === _v5.value && !_v8,
        _v23 = _v10?.[0]?.uri,
        _v24 = (0, _v3.useMemo)(() => _v10.map(_v0 => ({
          value: _v0.uri,
          label: _v0.name
        })), [_v10]);
      (0, _v3.useEffect)(() => {
        _v22 && _v23 && _v3("videos.outroVideosCollectionUri", _v23, {
          shouldDirty: !0
        });
      }, [_v22, _v23, _v3]);
      let _v25 = ({
          uri: _v0
        }) => {
          _v9.length > 2 || _v3("videos.videoUris", [..._v9, _v0], {
            shouldDirty: !0
          });
        },
        _v26 = ({
          uri: _v0
        }) => {
          _v3("videos.videoUris", _v9.filter(_v0 => _v0 !== _v0), {
            shouldDirty: !0
          });
        };
      return _v14 ? (0, _v2.jsx)(_v8.Center, {
        children: (0, _v2.jsx)(_v12.Spinner, {})
      }) : (0, _v2.jsxs)(_v9.Flex, {
        direction: "column",
        gap: "md",
        w: "100%",
        children: [(0, _v2.jsxs)(_v14.VStack, {
          w: "100%",
          alignItems: "flex-start",
          children: [(0, _v2.jsx)(_v116.Header, {
            size: "sm",
            children: _v1.from
          }), (0, _v2.jsx)(_v155.Select, {
            ..._v195,
            "data-testid": "videos-from-select",
            disabled: _v0,
            items: _v16,
            value: [_v7 || _v4.value],
            onValueChange: _v0 => _v3("videos.outroVideosCollectionType", _v0.value[0]),
            ..._v2("videos.outroVideosCollectionType")
          })]
        }), _v7 === _v5.value && _v10.length > 0 && (0, _v2.jsxs)(_v14.VStack, {
          w: "100%",
          alignItems: "flex-start",
          children: [(0, _v2.jsx)(_v116.Header, {
            size: "sm",
            children: _v1.showcase
          }), (0, _v2.jsx)(_v155.Select, {
            ..._v195,
            "data-testid": "album-select",
            items: _v24,
            disabled: _v0,
            value: [_v8 || ""],
            defaultValue: _v8 || "",
            onValueChange: _v0 => _v3("videos.outroVideosCollectionUri", _v0.value[0]),
            ..._v2("videos.outroVideosCollectionUri")
          })]
        }), _v7 === _v6.value && _v11.length > 0 && (0, _v2.jsx)(_v9.Flex, {
          direction: "column",
          gap: "sm",
          "data-testid": "uploaded_videos_roll",
          children: _v11?.map(_v0 => (0, _v2.jsx)(_v184, {
            name: _v0.name,
            thumbnailUrl: _v0.pictures?.sizes[0].link,
            selected: !0,
            editable: !_v0
          }, _v0.uri))
        }), _v7 === _v4.value && _v18.length > 0 && (0, _v2.jsxs)(_v9.Flex, {
          direction: "column",
          gap: "md",
          w: "100%",
          children: [(0, _v2.jsxs)(_v9.Flex, {
            direction: "column",
            gap: "sm",
            children: [(0, _v2.jsx)(_v116.Header, {
              as: "h6",
              size: "xs",
              color: "text-primary",
              children: (0, _v16.translate)({
                singular: "Select up to 3 public videos",
                dictionary: {
                  es: {
                    singular: "Selecciona hasta 3 videos públicos"
                  },
                  "de-DE": {
                    singular: "Wähle Sie bis zu 3 öffentliche Videos aus"
                  },
                  "fr-FR": {
                    singular: "Sélectionnez jusqu'à 3 vidéos publiques"
                  },
                  "ja-JP": {
                    singular: "公開動画を3つまで選択してください"
                  },
                  "ko-KR": {
                    singular: "최대 3개의 공개 동영상 선택"
                  },
                  "pt-BR": {
                    singular: "Selecione até três vídeos públicos"
                  },
                  "zh-CN": {
                    singular: "最多选择 3 个公开视频"
                  }
                }
              })
            }), _v21 ? null : (0, _v2.jsx)(_v13.Text, {
              variant: "body-md",
              color: "text-secondary",
              children: (0, _v16.translate)({
                singular: "Your 3 most recent public videos will show if none are selected.",
                dictionary: {
                  es: {
                    singular: "Si no seleccionas ninguno, se mostrarán tus 3 videos públicos más recientes."
                  },
                  "de-DE": {
                    singular: "Wenn keine Videos ausgewählt sind, werden Ihre 3 neuesten öffentlichen Videos angezeigt."
                  },
                  "fr-FR": {
                    singular: "Vos 3 dernières vidéos publiques s'afficheront si aucune n'est sélectionnée."
                  },
                  "ja-JP": {
                    singular: "何も選択されていない場合は、最近の3つの公開動画が表示されます。"
                  },
                  "ko-KR": {
                    singular: "아무것도 선택하지 않으면 가장 최근의 공개 동영상 3개가 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Seus três vídeos públicos mais recentes serão exibidos se nenhum for selecionado."
                  },
                  "zh-CN": {
                    singular: "如果未选择，则会显示您最近的 3 个公开视频。"
                  }
                }
              })
            }), _v13 && (0, _v2.jsx)(_v8.Center, {
              children: (0, _v2.jsx)(_v12.Spinner, {})
            }), _v21 && Array.isArray(_v17) && _v17.map(_v0 => (0, _v2.jsx)(_v184, {
              uri: _v0.uri,
              name: _v0.name,
              privacy: "anybody",
              thumbnailUrl: _v0.pictures?.sizes[0].link,
              selected: !0,
              onSelect: _v25,
              onRemove: _v26,
              editable: !_v0
            }, _v0.uri)), _v18.filter(_v0 => !_v9.includes(_v0.uri) && _v194.includes(_v0.privacy?.view)).map(_v0 => (0, _v2.jsx)(_v184, {
              uri: _v0.uri,
              name: _v0.name,
              privacy: _v0.privacy?.view,
              modifiedTime: _v0.createdTime,
              thumbnailUrl: _v0.pictures?.sizes[0].link,
              selected: _v9?.includes(_v0.uri),
              onSelect: _v25,
              onRemove: _v26,
              editable: !_v0
            }, _v0.uri))]
          }), !_v15 && !_v0 && (0, _v2.jsx)(_v7.Button, {
            type: "button",
            variant: "secondary",
            onClick: () => _v20(_v19 + 1),
            isLoading: _v12,
            children: (0, _v16.translate)({
              singular: "Load more videos",
              dictionary: {
                es: {
                  singular: "Cargar más videos"
                },
                "de-DE": {
                  singular: "Mehr Videos laden"
                },
                "fr-FR": {
                  singular: "Afficher plus de vidéos"
                },
                "ja-JP": {
                  singular: "さらに動画をロードする"
                },
                "ko-KR": {
                  singular: "동영상 더 보기"
                },
                "pt-BR": {
                  singular: "Carregar mais vídeos"
                },
                "zh-CN": {
                  singular: "加载更多视频"
                }
              }
            })
          })]
        }), (0, _v2.jsx)(_v169, {
          uriName: "videos.pictureUri",
          urlName: "videos.picture.baseLink",
          disabled: _v0
        })]
      });
    },
    _v197 = ({
      disabled: _v0 = !1
    }) => {
      let _v1 = _v38();
      return (0, _v2.jsxs)(_v14.VStack, {
        gap: "md",
        children: [(0, _v2.jsx)(_v13.Text, {
          as: "span",
          variant: "body-md",
          color: "text-secondary",
          children: _v1.shareButtonDescription
        }), (0, _v2.jsx)(_v169, {
          uriName: "share.pictureUri",
          urlName: "share.picture.baseLink",
          disabled: _v0
        })]
      });
    },
    _v198 = ({
      message: _v0
    }) => (0, _v2.jsx)(_v13.Text, {
      as: "span",
      variant: "body-md",
      color: "text-secondary",
      children: _v0
    });
  var _v199 = _v0.i(0);
  function _v200({
    name: _v0,
    value: _v1,
    focusedInput: _v2,
    label: _v3,
    warningThreshold: _v4,
    maxLength: _v5,
    disabled: _v6,
    handleFocus: _v7,
    handleBlur: _v8,
    ..._v9
  }) {
    return (0, _v2.jsx)(_v151, {
      name: _v0,
      maxLength: _v5,
      value: _v1,
      focusedInput: _v2,
      label: _v3,
      warningThreshold: _v4,
      children: (0, _v2.jsx)(_v199.Textarea, {
        name: _v0,
        value: _v1,
        disabled: _v6,
        onFocus: _v7,
        onBlur: _v8,
        ..._v9
      })
    });
  }
  let _v201 = ({
      disabled: _v0 = !1
    }) => {
      let _v1 = _v38(),
        {
          control: _v2
        } = (0, _v104.useFormContext)(),
        [_v3, _v4] = (0, _v3.useState)(""),
        _v5 = {
          value: _v37,
          message: _v1.invalidUrl
        },
        _v6 = () => _v4(""),
        _v7 = _v0 => {
          _v4(_v0.target.name);
        };
      return (0, _v2.jsxs)(_v14.VStack, {
        gap: "md",
        children: [(0, _v2.jsx)(_v104.Controller, {
          control: _v2,
          name: "link.name",
          render: ({
            field: _v0
          }) => (0, _v2.jsx)(_v152, {
            ..._v0,
            label: _v1.title,
            maxLength: 40,
            focusedInput: _v3,
            handleFocus: _v7,
            handleBlur: _v6,
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v104.Controller, {
          control: _v2,
          name: "link.description",
          render: ({
            field: _v0
          }) => (0, _v2.jsx)(_v200, {
            ..._v0,
            label: _v1.message,
            placeholder: _v1.enterMessage,
            maxLength: 140,
            focusedInput: _v3,
            handleFocus: _v7,
            handleBlur: _v6,
            rows: 4,
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v104.Controller, {
          control: _v2,
          name: "link.button.label",
          render: ({
            field: _v0
          }) => (0, _v2.jsx)(_v152, {
            ..._v0,
            label: _v1.buttonText,
            maxLength: 20,
            focusedInput: _v3,
            handleFocus: _v7,
            handleBlur: _v6,
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v104.Controller, {
          control: _v2,
          name: "link.button.link",
          rules: {
            pattern: _v5
          },
          render: ({
            field: _v0,
            fieldState: {
              error: _v1
            }
          }) => (0, _v2.jsx)(_v172, {
            ..._v0,
            error: _v1?.message,
            label: _v1.url,
            placeholder: "https://www.vimeo.com",
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v104.Controller, {
          control: _v2,
          name: "link.secondaryLink.label",
          render: ({
            field: _v0
          }) => (0, _v2.jsx)(_v152, {
            ..._v0,
            label: _v1.link,
            focusedInput: _v3,
            handleFocus: _v7,
            handleBlur: _v6,
            maxLength: 20,
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v104.Controller, {
          control: _v2,
          name: "link.secondaryLink.link",
          rules: {
            pattern: _v5
          },
          render: ({
            field: _v0,
            fieldState: {
              error: _v1
            }
          }) => (0, _v2.jsx)(_v172, {
            ..._v0,
            error: _v1?.message,
            label: _v1.url,
            placeholder: "https://www.vimeo.com",
            disabled: _v0
          })
        }), (0, _v2.jsx)(_v169, {
          urlName: "link.picture.baseLink",
          uriName: "link.pictureUri",
          disabled: _v0
        })]
      });
    },
    _v202 = ({
      disabled: _v0
    }) => {
      let _v1 = _v38(),
        {
          control: _v2
        } = (0, _v104.useFormContext)(),
        [_v3, _v4] = (0, _v3.useState)("");
      return (0, _v2.jsx)(_v104.Controller, {
        name: "text.description",
        control: _v2,
        render: ({
          field: _v0
        }) => (0, _v2.jsx)(_v200, {
          focusedInput: _v3,
          ..._v0,
          label: _v1.message,
          maxLength: 140,
          warningThreshold: 130,
          rows: 4,
          onFocus: () => _v4("text.description"),
          onBlur: () => _v4(""),
          disabled: _v0
        })
      });
    };
  function _v203({
    disabled: _v0 = !1
  }) {
    let _v1,
      _v2 = _v38(),
      _v3 = [{
        label: (_v1 = _v38()).moreVideos,
        value: _v32.moreVideos
      }, {
        label: _v1.callToAction,
        value: _v32.callToAction
      }, {
        label: _v1.shareButton,
        value: _v32.shareButton
      }, {
        label: _v1.customImage,
        value: _v32.customImage
      }, {
        label: _v1.loop,
        value: _v32.loop
      }, {
        label: _v1.thumbnail,
        value: _v32.thumbnail
      }, {
        label: _v1.empty,
        value: _v32.empty
      }, {
        label: _v1.customMessage,
        value: _v32.customMessage
      }],
      {
        watch: _v4,
        register: _v5,
        setValue: _v6
      } = (0, _v104.useFormContext)(),
      {
        type: _v7
      } = _v4();
    return (0, _v2.jsxs)(_v9.Flex, {
      direction: "column",
      gap: "md",
      my: "sm",
      w: "100%",
      children: [(0, _v2.jsx)(_v155.Select, {
        disabled: _v0,
        size: "md",
        items: _v3,
        defaultValue: [_v7 || _v32.moreVideos],
        onValueChange: _v0 => _v6("type", _v0.value[0]),
        ..._v5("type")
      }), (() => {
        switch (_v7) {
          case _v32.moreVideos:
            return (0, _v2.jsx)(_v196, {
              disabled: _v0
            });
          case _v32.callToAction:
            return (0, _v2.jsx)(_v201, {
              disabled: _v0
            });
          case _v32.shareButton:
            return (0, _v2.jsx)(_v197, {
              disabled: _v0
            });
          case _v32.customImage:
            return (0, _v2.jsx)(_v173, {
              disabled: _v0
            });
          case _v32.customMessage:
            return (0, _v2.jsx)(_v202, {
              disabled: _v0
            });
          case _v32.loop:
            return (0, _v2.jsx)(_v198, {
              message: _v2.loopDescription
            });
          case _v32.thumbnail:
            return (0, _v2.jsx)(_v198, {
              message: _v2.backToBeginningDescription
            });
          case _v32.empty:
            return (0, _v2.jsx)(_v198, {
              message: _v2.emptyDescription
            });
          default:
            return null;
        }
      })()]
    });
  }
  let _v204 = ({
    configUrl: _v0,
    defaultPresetId: _v1,
    isSubmitting: _v2,
    isVimeoDefault: _v3,
    onClose: _v4,
    onSave: _v5
  }) => {
    let _v6,
      _v7 = _v38(),
      {
        draft: _v8,
        committed: _v9,
        applyToAll: _v10,
        actions: _v11
      } = _v98(({
        preset: _v0
      }) => _v0),
      _v12 = (0, _v104.useForm)({
        defaultValues: _v8.endScreen,
        mode: "onChange"
      }),
      {
        watch: _v13
      } = _v12,
      [_v14, _v15] = (0, _v3.useState)(""),
      [_v16, _v17] = (0, _v3.useState)(""),
      [_v18, _v19] = (0, _v3.useState)("embed"),
      {
        isOpen: _v20,
        onOpen: _v21,
        onClose: _v22
      } = (0, _v4.useDisclosure)(),
      _v23 = [{
        title: (_v6 = _v38()).branding,
        id: "branding-section",
        options: [{
          type: "color",
          label: _v6.primaryColor,
          payload: "colorOne"
        }, {
          type: "color",
          label: _v6.accentColor,
          payload: "colorTwo"
        }, {
          type: "color",
          label: _v6.iconColor,
          payload: "colorThree"
        }, {
          type: "color",
          label: _v6.backgroundColor,
          payload: "colorFour"
        }, {
          type: "custom-logo",
          label: _v6.customLogo,
          payload: "customLogo"
        }]
      }, {
        title: _v6.engagement,
        id: "engagement-section",
        hasHideAll: !0,
        options: [{
          type: "toggle",
          label: _v6.reaction,
          payload: "reaction"
        }, {
          type: "toggle",
          label: _v6.likes,
          payload: "like"
        }, {
          type: "toggle",
          label: _v6.watchLater,
          payload: "watchlater"
        }, {
          type: "toggle",
          label: _v6.share,
          payload: "share"
        }, {
          type: "toggle",
          label: _v6.embed,
          payload: "embed"
        }, {
          type: "toggle",
          label: _v6.vimeoAi,
          payload: "askAi"
        }]
      }, {
        title: _v6.videoDetails,
        id: "video-details-section",
        hasHideAll: !0,
        options: [{
          type: "toggle",
          label: _v6.profilePicture,
          payload: "portrait"
        }, {
          type: "toggle",
          label: _v6.title,
          payload: "title"
        }, {
          type: "toggle",
          label: _v6.byline,
          payload: "owner"
        }]
      }],
      _v24 = (0, _v3.useMemo)(() => JSON.stringify(_v8) !== JSON.stringify(_v9) || _v10, [_v8, _v9, _v10]),
      _v25 = (0, _v3.useMemo)(() => !0 === _v3 ? (0, _v16.translate)({
        singular: "Vimeo preset",
        dictionary: {
          es: {
            singular: "Configuración predeterminada de Vimeo"
          },
          "de-DE": {
            singular: "Vimeo-Voreinstellung"
          },
          "fr-FR": {
            singular: "Préréglage Vimeo"
          },
          "ja-JP": {
            singular: "Vimeoプリセット"
          },
          "ko-KR": {
            singular: "Vimeo 사전 설정"
          },
          "pt-BR": {
            singular: "Predefinições do Vimeo"
          },
          "zh-CN": {
            singular: "Vimeo 预设"
          }
        }
      }) : (0, _v16.translate)({
        singular: "Edit embed preset",
        dictionary: {
          es: {
            singular: "Editar la configuración predeterminada de inserción"
          },
          "de-DE": {
            singular: "Voreinstellung für Einbettungen bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier le préréglage d'intégration"
          },
          "ja-JP": {
            singular: "埋め込みプリセットを編集"
          },
          "ko-KR": {
            singular: "임베드 사전 설정 편집"
          },
          "pt-BR": {
            singular: "Editar predefinição de incorporação"
          },
          "zh-CN": {
            singular: "编辑嵌入预设"
          }
        }
      }), [_v3]);
    (0, _v3.useEffect)(() => {
      let _v0 = _v13(_v0 => _v11.setEndScreen((0, _v103.default)(_v0)));
      return () => _v0.unsubscribe();
    }, [_v13, _v11]);
    let _v26 = _v12.handleSubmit(() => {
        _v8.presetName?.trim() ? _v10 ? _v21() : _v5() : _v17(_v7.emptyName);
      }),
      _v27 = (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v152, {
          name: "presetName",
          value: _v8.presetName || "",
          focusedInput: _v14,
          label: _v7.presetName,
          disabled: _v3,
          maxLength: 128,
          error: _v16,
          onChange: _v0 => _v11.setName(_v0.target.value),
          onFocus: () => _v15("presetName"),
          onBlur: () => _v15("")
        }), (0, _v2.jsx)(_v105.Divider, {
          borderColor: "stroke"
        }), (0, _v2.jsxs)(_v108.Tabs, {
          variant: "soft",
          onChange: () => _v19("embed" === _v18 ? "endscreen" : "embed"),
          children: [(0, _v2.jsxs)(_v107.TabList, {
            children: [(0, _v2.jsx)(_v106.Tab, {
              children: (0, _v16.translate)({
                singular: "Player",
                dictionary: {
                  es: {
                    singular: "Reproductor"
                  },
                  "ja-JP": {
                    singular: "プレーヤー"
                  },
                  "ko-KR": {
                    singular: "플레이어"
                  },
                  "zh-CN": {
                    singular: "播放器"
                  }
                }
              })
            }), (0, _v2.jsx)(_v106.Tab, {
              children: (0, _v16.translate)({
                singular: "End screen",
                dictionary: {
                  es: {
                    singular: "Pantalla final"
                  },
                  "de-DE": {
                    singular: "Endbildschirm"
                  },
                  "fr-FR": {
                    singular: "Écrans de fin"
                  },
                  "ja-JP": {
                    singular: "終了画面"
                  },
                  "ko-KR": {
                    singular: "종료 화면"
                  },
                  "pt-BR": {
                    singular: "Telas finais"
                  },
                  "zh-CN": {
                    singular: "片尾画面"
                  }
                }
              })
            }), (0, _v2.jsx)(_v108.TabIndicator, {})]
          }), (0, _v2.jsxs)(_v110.TabPanels, {
            children: [(0, _v2.jsx)(_v109.TabPanel, {
              children: (0, _v2.jsx)(_v14.VStack, {
                gap: "md",
                children: (0, _v2.jsxs)(_v117, {
                  children: [_v23.map(_v0 => (0, _v2.jsx)(_v144, {
                    title: _v0.title,
                    hasHideAll: _v0?.hasHideAll,
                    options: _v0.options,
                    disabled: _v3,
                    draft: _v8,
                    committed: _v9,
                    onToggle: _v11.toggleSetting,
                    onColorChange: _v11.setColor,
                    onLogoChange: _v11.setCustomLogo
                  }, _v0.id)), (0, _v2.jsx)(_v146, {
                    disabled: _v3,
                    title: _v7.controls,
                    state: _v8,
                    onToggle: _v11.toggleSetting,
                    onPlayButtonChange: _v11.setPlayButtonPosition
                  })]
                })
              })
            }), (0, _v2.jsx)(_v109.TabPanel, {
              children: (0, _v2.jsx)(_v104.FormProvider, {
                ..._v12,
                children: (0, _v2.jsx)(_v203, {
                  disabled: _v3
                })
              })
            })]
          })]
        })]
      }),
      _v28 = (0, _v2.jsx)(_v154, {
        configUrl: _v0,
        mode: _v18
      }),
      _v29 = (0, _v2.jsx)(_v148.DefaultFooterContent, {
        disableApplyToAll: _v3 && -1 === _v1,
        isLoading: _v2,
        isSaveDisabled: !_v24,
        onSave: _v26,
        onApplyToAll: _v11.setApplyToAll
      });
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v149, {
        title: _v25,
        mainContent: _v27,
        sideContent: _v28,
        footer: _v29,
        onClose: _v4
      }), (0, _v2.jsx)(_v147, {
        isOpen: _v20,
        onClose: _v22,
        onConfirm: _v5,
        isLoading: _v2
      })]
    });
  };
  async function _v205({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2,
      pagePresetId: _v3
    },
    ..._v4
  }) {
    return (0, _v76.measureLatency)("deleteUserPagePreset", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/page_presets/${_v3}?fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "DELETE"
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  async function _v206({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3,
      pagePresetId: _v4
    },
    ..._v5
  }) {
    return (0, _v76.measureLatency)("patchUserPagePreset", "PATCH", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/page_presets/${_v4}?fields=${_v1.map(_v77.intoSnakeCase).join(",")}`, {
        ..._v5,
        method: "PATCH",
        body: JSON.stringify((0, _v77.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v77.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v77.deepCamelCase)(_v1);
    });
  }
  _v0.s(["EmbedPresetListModule", 0, () => {
    let _v0 = (0, _v3.useMemo)(() => _v38(), []),
      _v1 = (0, _v5.useToast)(),
      {
        actions: {
          initializeState: _v2,
          resetState: _v3,
          setName: _v4
        },
        ..._v5
      } = _v98(({
        preset: _v0
      }) => _v0),
      {
        actions: {
          reset: _v6,
          setError: _v7
        }
      } = _v98(({
        form: _v0
      }) => _v0),
      {
        embedPresets: _v8,
        createdPreset: _v9,
        createError: _v10,
        canLoadMorePresets: _v11,
        isDeleting: _v12,
        isCreating: _v13,
        isLoadingMorePresets: _v14,
        isLoading: _v15,
        isSubmitting: _v16,
        destroy: _v17,
        create: _v18,
        update: _v19,
        loadMorePresets: _v20
      } = function () {
        let _v0 = (0, _v73.useViewer)(),
          _v1 = _v0?.teamUser?.ownerId || _v0?.user?.id,
          {
            data: _v2,
            mutate: _v3,
            isLoading: _v4,
            size: _v5,
            setSize: _v6
          } = (0, _v83.useGetUserPresetsInfinite)(() => _v1 ? {
            where: {
              userId: _v1
            },
            select: _v89,
            query: {
              perPage: 10
            },
            headers: {
              Accept: `application/vnd.vimeo.*+json;version=${_v30}`
            }
          } : null, {
            revalidateOnFocus: !1
          }),
          _v7 = (0, _v3.useMemo)(() => _v2?.filter(Boolean)?.flatMap(_v0 => _v0.data).map(_v90), [_v2]),
          {
            isLoadingInitialData: _v8,
            isLoadingMore: _v9,
            isDone: _v10
          } = (0, _v84.getInfiniteRequestLoadingState)({
            data: _v2,
            size: _v5,
            itemsPerPage: 10
          }),
          [_v11, _v12] = (0, _v83.usePostUserPresets)(),
          [_v13, _v14] = function () {
            let {
                mutate: _v0
              } = (0, _v81.useSWRConfig)(),
              {
                baseUrl: _v1,
                jwt: _v2,
                xVimeoPage: _v3,
                locale: _v4
              } = (0, _v82.useGctlConfig)(),
              [_v5, _v6] = (0, _v75.useInternalState)();
            return [(0, _v3.useCallback)(async _v0 => {
              _v6({
                type: "REQUEST"
              });
              try {
                let _v0 = await _v0(`/users/${_v0.where.userId}/presets/${_v0.where.presetId}${(0, _v75.serializeQuery)(_v0)}`, _v79({
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
          }(),
          [_v15, _v16] = function () {
            let {
                mutate: _v0
              } = (0, _v81.useSWRConfig)(),
              {
                baseUrl: _v1,
                jwt: _v2,
                xVimeoPage: _v3,
                locale: _v4
              } = (0, _v82.useGctlConfig)(),
              [_v5, _v6] = (0, _v75.useInternalState)();
            return [(0, _v3.useCallback)(async _v0 => {
              _v6({
                type: "REQUEST"
              });
              try {
                let _v0 = await _v0(`/users/${_v0.where.userId}/presets/${_v0.where.presetId}${(0, _v75.serializeQuery)(_v0)}`, _v78({
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
          }(),
          _v17 = (0, _v3.useMemo)(() => _v12.called && !_v12.loading && !_v12.error && _v12.data ? _v90(_v12.data) : null, [_v12.called, _v12.loading, _v12.error, _v12.data]);
        (0, _v3.useEffect)(() => {
          _v17 && _v3();
        }, [_v17, _v3]);
        let _v18 = async _v0 => {
            if (!_v1) return null;
            await _v13({
              where: {
                userId: _v1,
                presetId: _v0.presetId
              },
              variables: {
                name: _v0.draft.presetName,
                embed: _v86(_v0.draft, _v0.presetId),
                applyToAll: _v0.applyToAll
              },
              select: ["uri"]
            }), _v3();
          },
          _v19 = async _v0 => {
            if (!_v1) return null;
            await _v15({
              where: {
                userId: _v1,
                presetId: _v0
              }
            }), _v3();
          };
        return {
          embedPresets: _v7,
          createdPreset: _v17,
          createError: _v12.error,
          canLoadMorePresets: !_v10 && !_v4,
          isLoading: _v4 || _v8,
          isLoadingMorePresets: _v9,
          isCreating: _v12.loading,
          isSubmitting: _v14.loading,
          isDeleting: _v16.loading,
          create: _v0 => {
            _v1 && _v11({
              where: {
                userId: _v1
              },
              variables: {
                name: _v0.draft.presetName,
                embed: _v86(_v0.draft, 0),
                applyToAll: _v0.applyToAll
              },
              select: _v89,
              headers: {
                Accept: `application/vnd.vimeo.*+json;version=${_v30}`
              }
            });
          },
          update: _v18,
          destroy: _v19,
          loadMorePresets: () => {
            _v6(_v5 + 1);
          }
        };
      }(),
      {
        defaultEmbedPresetId: _v21,
        update: _v22
      } = _v74(),
      {
        configUrl: _v23
      } = (() => {
        let {
          data: _v0
        } = (0, _v91.useGetVideo)({
          where: {
            videoId: 0
          },
          select: ["embedPlayerConfigUrl"],
          headers: {
            Accept: `application/vnd.vimeo.*+json;version=${_v30}`
          }
        });
        return {
          configUrl: _v0?.embedPlayerConfigUrl || ""
        };
      })(),
      {
        isOpen: _v24,
        onOpen: _v25,
        onClose: _v26
      } = (0, _v4.useDisclosure)(),
      _v27 = [_v101, ...(_v8 || [])],
      _v28 = _v21 ?? -1,
      _v29 = async () => {
        try {
          await _v22("embed", null), _v1({
            title: _v0.changesSaved
          });
        } catch (_v0) {
          _v1({
            title: _v0.changesWerentSaved,
            status: "error"
          });
        }
      },
      _v30 = () => {
        _v6(), _v3(), _v26();
      },
      _v31 = async _v0 => {
        let {
          name: _v1,
          id: _v2
        } = _v0;
        try {
          await _v22("embed", _v2);
          let _v0 = (_v2 === _v21 ? _v0.presetUnsetAsDefault : _v0.presetSetAsDefault)(_v1);
          _v1({
            title: _v0
          });
        } catch (_v0) {
          _v1({
            title: _v0.changesWerentSaved,
            status: "error"
          });
        }
      },
      _v32 = async _v0 => {
        await _v17(_v0.id), _v1({
          title: _v0.presetDeleted(_v0.name)
        });
      };
    (0, _v3.useEffect)(() => {
      _v9 && (_v2(_v9), _v1({
        title: _v0.presetCreated
      }), _v25());
    }, [_v9, _v2, _v1, _v25, _v0]), (0, _v3.useEffect)(() => {
      _v10 && _v1({
        title: _v0.changesWerentSaved,
        status: "error"
      });
    }, [_v10, _v1, _v0]);
    let _v33 = async () => {
      let _v0;
      if ((_v0 = _v41(_v8 || [], _v5)) && _v7("embed.name", _v0.duplicateName), !_v0) {
        if (-1 === _v5.presetId && !0 === _v5.applyToAll) await _v29();else try {
          await _v19(_v5), _v1({
            title: _v0.changesSaved
          });
        } catch (_v0) {
          _v1({
            title: _v0.changesWerentSaved,
            status: "error"
          });
        }
        _v30();
      }
    };
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v71, {
        title: _v0.embeds,
        description: _v0.embedDescription,
        defaultPresetId: _v28,
        canLoadMore: _v11,
        isLoadingMore: _v14,
        isLoadingPresets: _v15,
        isCreating: _v13,
        isDeleting: _v12,
        presets: _v27,
        onCreate: () => {
          let _v0 = _v43(_v8?.map(_v0 => _v0.name) || []);
          _v4(_v0), _v18({
            ..._v5,
            draft: {
              ..._v5.draft,
              presetName: _v0
            }
          });
        },
        onDelete: _v32,
        onLoadMore: _v20,
        onPresetClick: _v0 => {
          _v2(_v0), _v25();
        },
        onSetAsDefault: _v31
      }), _v24 && (0, _v2.jsx)(_v204, {
        configUrl: _v23,
        defaultPresetId: _v28,
        onClose: _v30,
        onSave: _v33,
        isVimeoDefault: -1 === _v5.presetId,
        isSubmitting: _v16
      })]
    });
  }], 0);
  var _v207 = _v0.i(0);
  let _v208 = _v0 => ({
      askAi: _v0.askAi,
      categories: _v0.categories,
      chapters: _v0.chapters,
      collections: _v0.collections,
      comments: _v0.comments,
      credits: _v0.credits,
      creativeCommons: _v0.creativeCommons,
      dateAdded: _v0.dateAdded,
      description: _v0.description,
      download: _v0.download,
      like: _v0.like,
      matchPlayerBackground: _v0.matchPlayerBackground,
      owner: _v0.owner,
      portrait: _v0.portrait,
      share: _v0.share,
      tags: _v0.tags,
      uploader: _v0.uploader,
      views: _v0.views,
      watchLater: _v0.watchlater,
      title: _v0.title,
      transcript: _v0.transcript,
      player: {
        airplay: _v0.airplay,
        audioTracks: _v0.audioTracks,
        chromecast: _v0.chromecast,
        closedCaptions: _v0.closedCaptions,
        colors: {
          colorOne: _v0.colors?.colorOne,
          colorTwo: _v0.colors?.colorTwo,
          colorThree: _v0.colors?.colorThree,
          colorFour: _v0.colors?.colorFour
        },
        fullscreen: _v0.fullscreen,
        logos: {
          vimeo: _v0.vimeoLogo,
          custom: _v0.customLogo
        },
        pip: _v0.pip,
        playbar: _v0.playbar,
        playButton: {
          position: _v0.playButtonPosition
        },
        qualitySelector: _v0.qualitySelector,
        skippingForward: _v0.skippingForward,
        speed: _v0.speed,
        transcript: _v0.transcript,
        volume: _v0.volume
      }
    }),
    _v209 = ["name", "uri", "settings", "createdOn", "modifiedOn"],
    _v210 = _v0 => ({
      id: _v39(_v0.uri),
      name: _v0.name,
      settings: (_v0 => {
        let {
            settings: _v1
          } = _v0,
          {
            player: _v2
          } = _v1;
        return {
          presetName: _v0.name,
          ..._v1,
          ..._v2,
          colors: {
            colorOne: _v2?.colors?.colorOne ? (0, _v85.withHashPrefix)(_v2.colors.colorOne) : _v26.colorOne,
            colorTwo: _v2?.colors?.colorTwo ? (0, _v85.withHashPrefix)(_v2.colors.colorTwo) : _v26.colorTwo,
            colorThree: _v2?.colors?.colorThree ? (0, _v85.withHashPrefix)(_v2.colors.colorThree) : _v26.colorThree,
            colorFour: _v2?.colors?.colorFour ? (0, _v85.withHashPrefix)(_v2.colors.colorFour) : _v26.colorFour
          },
          customLogo: {
            active: _v2?.logos?.custom?.active || !1,
            link: _v2?.logos?.custom?.link || "",
            sticky: _v2?.logos?.custom?.sticky || !1,
            url: _v2?.logos?.custom?.url || null,
            useLink: _v2?.logos?.custom?.useLink || !1
          },
          title: _v1?.title,
          owner: _v1?.owner,
          portrait: _v1?.portrait,
          playButtonPosition: _v2?.playButton?.position || "auto"
        };
      })(_v0),
      createdDate: _v0.createdOn,
      modifiedDate: _v0.modifiedOn
    }),
    _v211 = ({
      defaultPresetId: _v0,
      isVimeoDefault: _v1,
      isSubmitting: _v2,
      onClose: _v3,
      onSave: _v4
    }) => {
      let _v5,
        _v6 = _v38(),
        {
          draft: _v7,
          committed: _v8,
          applyToAll: _v9,
          actions: _v10
        } = _v98(({
          preset: _v0
        }) => _v0),
        {
          isOpen: _v11,
          onOpen: _v12,
          onClose: _v13
        } = (0, _v4.useDisclosure)(),
        _v14 = [{
          title: (_v5 = _v38()).branding,
          id: "branding-section",
          options: [{
            type: "color",
            label: _v5.primaryColor,
            payload: "colorOne"
          }, {
            type: "color",
            label: _v5.accentColor,
            payload: "colorTwo"
          }, {
            type: "color",
            label: _v5.iconColor,
            payload: "colorThree"
          }, {
            type: "color",
            label: _v5.backgroundColor,
            payload: "colorFour"
          }, {
            type: "custom-logo",
            label: _v5.customLogo,
            payload: "customLogo"
          }]
        }, {
          title: _v5.engagement,
          id: "engagement-section",
          hasHideAll: !0,
          options: [{
            type: "toggle",
            label: _v5.reaction,
            payload: "reaction"
          }, {
            type: "toggle",
            label: _v5.likes,
            payload: "like"
          }, {
            type: "toggle",
            label: _v5.watchLater,
            payload: "watchlater"
          }, {
            type: "toggle",
            label: _v5.share,
            payload: "share"
          }, {
            type: "toggle",
            label: _v5.embed,
            payload: "embed"
          }, {
            type: "toggle",
            label: _v5.vimeoAi,
            payload: "askAi"
          }]
        }, {
          title: _v5.videoDetails,
          id: "video-details-section",
          hasHideAll: !0,
          options: [{
            type: "toggle",
            label: _v5.profilePicture,
            payload: "portrait"
          }, {
            type: "toggle",
            label: _v5.title,
            payload: "title"
          }, {
            type: "toggle",
            label: _v5.byline,
            payload: "owner"
          }, {
            type: "toggle",
            label: _v5.description,
            payload: "description"
          }, {
            type: "toggle",
            label: _v5.views,
            payload: "views"
          }, {
            type: "toggle",
            label: _v5.dateAdded,
            payload: "dateAdded"
          }, {
            type: "toggle",
            label: _v5.tags,
            payload: "tags"
          }, {
            type: "toggle",
            label: _v5.credits,
            payload: "credits"
          }, {
            type: "toggle",
            label: _v5.categories,
            payload: "categories"
          }, {
            type: "toggle",
            label: _v5.creativeCommons,
            payload: "creativeCommons"
          }, {
            type: "toggle",
            label: _v5.uploader,
            payload: "uploader"
          }]
        }],
        [_v15, _v16] = (0, _v3.useState)(""),
        [_v17, _v18] = (0, _v3.useState)(""),
        _v19 = (0, _v3.useMemo)(() => JSON.stringify(_v7) !== JSON.stringify(_v8) || _v9, [_v7, _v8, _v9]),
        _v20 = (0, _v3.useMemo)(() => !0 === _v1 ? (0, _v16.translate)({
          singular: "Vimeo preset",
          dictionary: {
            es: {
              singular: "Configuración predeterminada de Vimeo"
            },
            "de-DE": {
              singular: "Vimeo-Voreinstellung"
            },
            "fr-FR": {
              singular: "Préréglage Vimeo"
            },
            "ja-JP": {
              singular: "Vimeoプリセット"
            },
            "ko-KR": {
              singular: "Vimeo 사전 설정"
            },
            "pt-BR": {
              singular: "Predefinições do Vimeo"
            },
            "zh-CN": {
              singular: "Vimeo 预设"
            }
          }
        }) : (0, _v16.translate)({
          singular: "Edit video page preset",
          dictionary: {
            es: {
              singular: "Editar la configuración predeterminada de la página de video"
            },
            "de-DE": {
              singular: "Voreinstellung für Videoseiten bearbeiten"
            },
            "fr-FR": {
              singular: "Modifier le préréglage de la page vidéo"
            },
            "ja-JP": {
              singular: "動画ページのプリセットを編集"
            },
            "ko-KR": {
              singular: "동영상 페이지 사전 설정 편집"
            },
            "pt-BR": {
              singular: "Editar predefinição de página de vídeo"
            },
            "zh-CN": {
              singular: "编辑视频页面预设"
            }
          }
        }), [_v1]),
        _v21 = (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v152, {
            name: "presetName",
            focusedInput: _v15,
            label: _v6.presetName,
            disabled: _v1,
            maxLength: 128,
            value: _v7.presetName ?? "",
            error: _v17,
            handleFocus: () => _v16("presetName"),
            handleBlur: () => _v16(""),
            onChange: _v0 => _v10.setName(_v0.target.value)
          }), (0, _v2.jsx)(_v14.VStack, {
            gap: "sm",
            children: (0, _v2.jsxs)(_v117, {
              children: [_v14.map(_v0 => (0, _v2.jsx)(_v144, {
                title: _v0.title,
                hasHideAll: _v0?.hasHideAll,
                options: _v0.options,
                disabled: _v1,
                draft: _v7,
                committed: _v8,
                onToggle: _v10.toggleSetting,
                onColorChange: _v10.setColor,
                onLogoChange: _v10.setCustomLogo
              }, _v0.id)), (0, _v2.jsx)(_v146, {
                disabled: _v1,
                title: _v6.controls,
                state: _v7,
                onToggle: _v10.toggleSetting,
                onPlayButtonChange: _v10.setPlayButtonPosition
              })]
            })
          })]
        }),
        _v22 = (0, _v2.jsx)(_v148.DefaultFooterContent, {
          disableApplyToAll: _v1 && -1 === _v0,
          isLoading: _v2,
          isSaveDisabled: !_v19,
          onSave: () => {
            _v7.presetName?.trim() ? _v9 ? _v12() : _v4() : _v18(_v6.emptyName);
          },
          onApplyToAll: _v10.setApplyToAll
        });
      return (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v149, {
          title: _v20,
          description: _v6.pagePresetModalDescription,
          mainContent: _v21,
          footer: _v22,
          onClose: _v3
        }), (0, _v2.jsx)(_v147, {
          isOpen: _v11,
          onClose: _v13,
          onConfirm: _v4,
          isLoading: _v2
        })]
      });
    };
  _v0.s(["VideoPagePresetListModule", 0, () => {
    let _v0 = (0, _v3.useMemo)(() => _v38(), []),
      _v1 = (0, _v5.useToast)(),
      {
        actions: {
          initializeState: _v2,
          resetState: _v3,
          setName: _v4
        },
        ..._v5
      } = _v98(({
        preset: _v0
      }) => _v0),
      {
        actions: {
          reset: _v6,
          setError: _v7
        }
      } = _v98(({
        form: _v0
      }) => _v0),
      {
        videoPagePresets: _v8,
        createdPreset: _v9,
        createError: _v10,
        canLoadMorePresets: _v11,
        isDeleting: _v12,
        isCreating: _v13,
        isLoadingMorePresets: _v14,
        isLoading: _v15,
        isSubmitting: _v16,
        destroy: _v17,
        create: _v18,
        update: _v19,
        loadMorePresets: _v20
      } = function () {
        let _v0 = (0, _v73.useViewer)(),
          _v1 = _v0?.teamUser?.ownerId || _v0?.user?.id,
          {
            data: _v2,
            isLoading: _v3,
            size: _v4,
            mutate: _v5,
            setSize: _v6
          } = (0, _v207.useGetUserPagePresetsInfinite)(() => _v1 ? {
            where: {
              userId: _v1
            },
            select: _v209,
            query: {
              perPage: 10
            },
            headers: {
              Accept: `application/vnd.vimeo.*+json;version=${_v30}`
            }
          } : null, {
            revalidateOnFocus: !1
          }),
          _v7 = (0, _v3.useMemo)(() => _v2?.filter(Boolean)?.flatMap(_v0 => _v0.data).map(_v210), [_v2]),
          {
            isLoadingInitialData: _v8,
            isLoadingMore: _v9,
            isDone: _v10
          } = (0, _v84.getInfiniteRequestLoadingState)({
            data: _v2,
            size: _v4,
            itemsPerPage: 10
          }),
          [_v11, _v12] = (0, _v207.usePostUserPagePresets)(),
          [_v13, _v14] = function () {
            let {
                mutate: _v0
              } = (0, _v81.useSWRConfig)(),
              {
                baseUrl: _v1,
                jwt: _v2,
                xVimeoPage: _v3,
                locale: _v4
              } = (0, _v82.useGctlConfig)(),
              [_v5, _v6] = (0, _v75.useInternalState)();
            return [(0, _v3.useCallback)(async _v0 => {
              _v6({
                type: "REQUEST"
              });
              try {
                let _v0 = await _v0(`/users/${_v0.where.userId}/page_presets/${_v0.where.pagePresetId}${(0, _v75.serializeQuery)(_v0)}`, _v206({
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
          }(),
          [_v15, _v16] = function () {
            let {
                mutate: _v0
              } = (0, _v81.useSWRConfig)(),
              {
                baseUrl: _v1,
                jwt: _v2,
                xVimeoPage: _v3,
                locale: _v4
              } = (0, _v82.useGctlConfig)(),
              [_v5, _v6] = (0, _v75.useInternalState)();
            return [(0, _v3.useCallback)(async _v0 => {
              _v6({
                type: "REQUEST"
              });
              try {
                let _v0 = await _v0(`/users/${_v0.where.userId}/page_presets/${_v0.where.pagePresetId}${(0, _v75.serializeQuery)(_v0)}`, _v205({
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
          }(),
          _v17 = (0, _v3.useMemo)(() => _v12.called && !_v12.loading && !_v12.error && _v12.data ? _v210(_v12.data) : null, [_v12.called, _v12.loading, _v12.error, _v12.data]);
        (0, _v3.useEffect)(() => {
          _v17 && _v5();
        }, [_v17, _v5]);
        let _v18 = async _v0 => {
            if (!_v1) return null;
            await _v13({
              where: {
                userId: _v1,
                pagePresetId: _v0.presetId
              },
              variables: {
                name: _v0.draft.presetName,
                page: _v208(_v0.draft),
                applyToAll: _v0.applyToAll
              },
              select: ["uri"]
            }), _v5();
          },
          _v19 = async _v0 => {
            if (!_v1) return null;
            await _v15({
              where: {
                userId: _v1,
                pagePresetId: _v0
              },
              select: ["uri"]
            }), _v5();
          };
        return {
          videoPagePresets: _v7,
          createdPreset: _v17,
          createError: _v12.error,
          isLoading: _v3 || _v8,
          isCreating: _v12.loading,
          isSubmitting: _v14.loading,
          isDeleting: _v16.loading,
          canLoadMorePresets: !_v10 && !_v3,
          isLoadingMorePresets: _v9,
          create: _v0 => {
            _v1 && _v11({
              where: {
                userId: _v1
              },
              variables: {
                name: _v0.draft.presetName,
                page: _v208(_v0.draft),
                applyToAll: _v0.applyToAll
              },
              select: _v209,
              headers: {
                Accept: `application/vnd.vimeo.*+json;version=${_v30}`
              }
            });
          },
          update: _v18,
          destroy: _v19,
          loadMorePresets: () => {
            _v6(_v4 + 1);
          }
        };
      }(),
      {
        defaultPagePresetId: _v21,
        update: _v22
      } = _v74(),
      {
        isOpen: _v23,
        onOpen: _v24,
        onClose: _v25
      } = (0, _v4.useDisclosure)(),
      _v26 = [_v102, ...(_v8 || [])],
      _v27 = _v21 ?? -1,
      _v28 = async () => {
        try {
          await _v22("page", null), _v1({
            title: _v0.changesSaved
          });
        } catch (_v0) {
          _v1({
            title: _v0.changesWerentSaved,
            status: "error"
          });
        }
      },
      _v29 = () => {
        _v3(), _v6(), _v25();
      },
      _v30 = async _v0 => {
        let {
          name: _v1,
          id: _v2
        } = _v0;
        try {
          await _v22("page", _v2), _v1({
            title: (_v2 === _v21 ? _v0.presetUnsetAsDefault : _v0.presetSetAsDefault)(_v1)
          });
        } catch (_v0) {
          _v1({
            title: _v0.changesWerentSaved,
            status: "error"
          });
        }
      },
      _v31 = async _v0 => {
        await _v17(_v0.id), _v1({
          title: _v0.presetDeleted(_v0.name)
        });
      };
    (0, _v3.useEffect)(() => {
      _v9 && (_v2(_v9), _v1({
        title: _v0.presetCreated
      }), _v24());
    }, [_v9, _v2, _v1, _v24, _v0]), (0, _v3.useEffect)(() => {
      _v10 && _v1({
        title: _v0.changesWerentSaved,
        status: "error"
      });
    }, [_v10, _v1, _v0]);
    let _v32 = async () => {
      let _v0;
      if ((_v0 = _v41(_v8 || [], _v5)) && _v7("page.name", _v0.duplicateName), !_v0) {
        if (-1 === _v5.presetId && !0 === _v5.applyToAll) await _v28();else try {
          await _v19(_v5), _v1({
            title: _v0.changesSaved
          });
        } catch (_v0) {
          _v1({
            title: _v0.changesWerentSaved,
            status: "error"
          });
        }
        _v29();
      }
    };
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v71, {
        title: _v0.videoPage,
        description: _v0.videoPageDescription,
        defaultPresetId: _v27,
        canLoadMore: _v11,
        isLoadingMore: _v14,
        isLoadingPresets: _v15,
        isCreating: _v13,
        isDeleting: _v12,
        presets: _v26,
        onCreate: () => {
          let _v0 = _v43(_v8?.map(_v0 => _v0.name) || []);
          _v4(_v0), _v18({
            ..._v5,
            draft: {
              ..._v5.draft,
              presetName: _v0
            }
          });
        },
        onDelete: _v31,
        onLoadMore: _v20,
        onPresetClick: _v0 => {
          _v2(_v0), _v24();
        },
        onSetAsDefault: _v30
      }), _v23 && (0, _v2.jsx)(_v211, {
        defaultPresetId: _v27,
        onClose: _v29,
        onSave: _v32,
        isVimeoDefault: -1 === _v5.presetId,
        isSubmitting: _v16
      })]
    });
  }], 0);
  let _v212 = ({
    isLoading: _v0 = !1,
    isOpen: _v1,
    presetName: _v2,
    onClose: _v3,
    onConfirm: _v4
  }) => {
    let _v5 = _v38();
    return (0, _v2.jsxs)(_v53, {
      isOpen: _v1,
      maxW: _v31,
      title: _v5.applyToAllExistingVideos,
      onClose: _v3,
      children: [(0, _v2.jsx)(_v53.Content, {
        flexDirection: "column",
        pb: "sm",
        children: _v5.applyToAllDescription(_v2)
      }), (0, _v2.jsx)(_v53.Footer, {
        justifyContent: "flex-end",
        border: "none",
        children: (0, _v2.jsx)(_v7.Button, {
          variant: "primary",
          onClick: _v4,
          isLoading: _v0,
          children: _v5.applyToAll
        })
      })]
    });
  };
  var _v213 = _v0.i(0);
  let _v214 = ({
    applyToAll: _v0,
    isLoading: _v1 = !1,
    isOpen: _v2,
    presetName: _v3,
    onApplyToAllChange: _v4,
    onClose: _v5,
    onConfirm: _v6
  }) => {
    let _v7 = _v38();
    return (0, _v2.jsxs)(_v53, {
      isOpen: _v2,
      maxW: _v31,
      title: _v7.setAsDefault,
      onClose: _v5,
      children: [(0, _v2.jsx)(_v53.Content, {
        flexDirection: "column",
        pb: "sm",
        children: _v7.setAsDefaultDescription(_v3)
      }), (0, _v2.jsxs)(_v53.Footer, {
        justifyContent: "space-between",
        border: "none",
        children: [(0, _v2.jsx)(_v213.Checkbox, {
          size: "md",
          isChecked: _v0,
          isDisabled: _v1,
          onChange: _v0 => _v4(_v0.target.checked),
          children: _v7.alsoApplyToAll
        }), (0, _v2.jsx)(_v7.Button, {
          variant: "primary",
          onClick: _v6,
          isLoading: _v1,
          children: _v7.setAsDefault
        })]
      })]
    });
  };
  var _v215 = _v0.i(0);
  let _v216 = ["name", "uri"],
    _v217 = "preferences.videos.customPagePresetUri";
  _v0.s(["VideoPageThemeBlock", 0, () => {
    let _v0 = (0, _v3.useMemo)(() => _v38(), []),
      _v1 = (0, _v5.useToast)(),
      {
        presets: _v2,
        defaultPresetId: _v3,
        error: _v4,
        isLoading: _v5,
        isSaving: _v6,
        setDefaultPreset: _v7
      } = function () {
        let _v0 = (0, _v73.useViewer)(),
          _v1 = _v0?.teamUser?.ownerId ?? _v0?.user?.id,
          {
            data: _v2,
            isLoading: _v3
          } = (0, _v215.useGetUserCustomPagePresets)(() => void 0 === _v1 ? null : {
            where: {
              userId: _v1
            },
            query: {
              perPage: 100
            },
            select: _v216
          }, {
            revalidateOnFocus: !1
          }),
          {
            data: _v4,
            isLoading: _v5,
            mutate: _v6
          } = (0, _v72.useGetUser)(() => void 0 === _v1 ? null : {
            where: {
              userId: _v1
            },
            select: [_v217]
          }, {
            revalidateOnFocus: !1
          }),
          _v7 = (0, _v3.useMemo)(() => (_v2?.data ?? []).map(_v0 => ({
            id: _v39(_v0.uri),
            name: _v0.name
          })), [_v2]),
          _v8 = _v39(_v4?.preferences?.videos?.customPagePresetUri),
          [_v9, _v10] = (0, _v72.usePatchUser)(),
          _v11 = async (_v0, _v1) => {
            void 0 !== _v1 && (await _v9({
              select: [_v217],
              variables: {
                applyToAll: _v1,
                videos: {
                  customPagePresetUri: 0 === _v0 ? "" : `/${_v0}`
                }
              },
              where: {
                userId: _v1
              }
            }), await _v6());
          };
        return {
          presets: _v7,
          defaultPresetId: _v8,
          error: _v10.error,
          isLoading: _v3 || _v5,
          isSaving: _v10.loading,
          setDefaultPreset: _v11
        };
      }(),
      [_v8, _v9] = (0, _v3.useState)(null),
      [_v10, _v11] = (0, _v3.useState)(!1),
      {
        isOpen: _v12,
        onOpen: _v13,
        onClose: _v14
      } = (0, _v4.useDisclosure)(),
      {
        isOpen: _v15,
        onOpen: _v16,
        onClose: _v17
      } = (0, _v4.useDisclosure)(),
      _v18 = (0, _v3.useMemo)(() => [{
        id: 0,
        name: _v0.vimeoDefault
      }, ..._v2], [_v2, _v0]),
      _v19 = (0, _v3.useMemo)(() => _v2.find(_v0 => _v0.id === _v3)?.name ?? _v0.vimeoDefault, [_v2, _v3, _v0]),
      _v20 = (0, _v3.useCallback)(() => {
        _v14(), _v9(null), _v11(!1);
      }, [_v14]),
      _v21 = (0, _v3.useCallback)(_v0 => {
        _v9(_v0), _v13();
      }, [_v13]),
      _v22 = (0, _v3.useCallback)(() => {
        _v16();
      }, [_v16]),
      _v23 = (0, _v3.useRef)(!1),
      _v24 = (0, _v3.useEffectEvent)(() => {
        null !== _v4 ? _v1({
          title: _v0.changesWerentSaved,
          status: "error"
        }) : (_v1({
          title: _v0.changesSaved
        }), _v20(), _v17());
      });
    return (0, _v3.useEffect)(() => {
      _v23.current && !_v6 && (_v23.current = !1, _v24());
    }, [_v4, _v6]), (0, _v2.jsxs)(_v24, {
      maxH: (0, _v11.rem)(440),
      overflowY: "auto",
      children: [(0, _v2.jsx)(_v24.Title, {
        children: (0, _v2.jsxs)(_v14.VStack, {
          alignItems: "flex-start",
          gap: "2xs",
          children: [(0, _v2.jsx)(_v13.Text, {
            variant: "heading-md",
            children: _v0.videoPageTheme
          }), (0, _v2.jsx)(_v13.Text, {
            variant: "body-md",
            color: "text-secondary",
            children: _v0.videoPageThemeDescription
          })]
        })
      }), (0, _v2.jsxs)(_v24.Content, {
        children: [(0, _v2.jsx)(_v24.Header, {
          children: _v0.name
        }), (0, _v2.jsx)(_v24.Body, {
          children: _v5 ? (0, _v2.jsx)(_v8.Center, {
            py: "md",
            children: (0, _v2.jsx)(_v12.Spinner, {
              size: "sm"
            })
          }) : _v18.map(_v0 => {
            let _v1 = _v0.id === _v3;
            return (0, _v2.jsxs)(_v24.Row, {
              children: [(0, _v2.jsxs)(_v10.HStack, {
                alignItems: "center",
                w: "100%",
                gap: "sm",
                minH: "md",
                children: [(0, _v2.jsx)(_v13.Text, {
                  variant: "body-md",
                  children: _v0.name
                }), _v1 && (0, _v2.jsx)(_v6.Badge, {
                  variant: "default",
                  size: "xs",
                  h: "fit-content",
                  children: (0, _v16.translate)({
                    singular: "Default",
                    dictionary: {
                      es: {
                        singular: "Predeterminado"
                      },
                      "de-DE": {
                        singular: "Standardwert"
                      },
                      "fr-FR": {
                        singular: "Par défaut"
                      },
                      "ja-JP": {
                        singular: "デフォルト"
                      },
                      "ko-KR": {
                        singular: "기본값"
                      },
                      "pt-BR": {
                        singular: "Padrão"
                      },
                      "zh-CN": {
                        singular: "默认"
                      }
                    }
                  })
                })]
              }), (0, _v2.jsx)(_v9.Flex, {
                justifyContent: "flex-end",
                alignItems: "center",
                w: "100%",
                children: (0, _v2.jsx)(_v70, {
                  isVisible: !0,
                  isDefault: _v1,
                  onApplyToAll: _v1 ? _v22 : void 0,
                  onSetAsDefault: _v1 ? void 0 : () => _v21(_v0)
                })
              })]
            }, _v0.id);
          })
        })]
      }), (0, _v2.jsx)(_v44.Box, {
        bg: "fill-surface",
        bottom: 0,
        position: "sticky",
        px: "md",
        py: "sm",
        children: (0, _v2.jsxs)(_v10.HStack, {
          alignItems: "center",
          color: "text-tertiary",
          gap: "2",
          children: [(0, _v2.jsx)(_v170.InfoCircle, {
            boxSize: "2xs"
          }), (0, _v2.jsx)(_v13.Text, {
            variant: "body-md",
            children: _v0.videoPageThemeHelper
          })]
        })
      }), (0, _v2.jsx)(_v214, {
        applyToAll: _v10,
        isLoading: _v6,
        isOpen: _v12,
        presetName: _v8?.name ?? "",
        onApplyToAllChange: _v11,
        onClose: _v20,
        onConfirm: () => {
          null !== _v8 && (_v23.current = !0, _v7(_v8.id, _v10));
        }
      }), (0, _v2.jsx)(_v212, {
        isLoading: _v6,
        isOpen: _v15,
        presetName: _v19,
        onClose: _v17,
        onConfirm: () => {
          _v23.current = !0, _v7(_v3, !0);
        }
      })]
    });
  }], 0);
}