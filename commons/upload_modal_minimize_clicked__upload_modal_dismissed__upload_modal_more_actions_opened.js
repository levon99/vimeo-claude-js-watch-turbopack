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
    _v18 = _v0.i(0);
  function _v19() {
    let _v0 = (0, _v18.usePico)(),
      _v1 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_minimize_clicked", {}), !0), [_v0]),
      _v2 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_dismissed", {}), !0), [_v0]),
      _v3 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_more_actions_opened", {}), !0), [_v0]),
      _v4 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_pause_all_clicked", {}), !0), [_v0]),
      _v5 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_cancel_all_clicked", {}), !0), [_v0]),
      _v6 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_privacy_dropdown_clicked", {}), !0), [_v0]),
      _v7 = (0, _v2.useCallback)(_v0 => null !== _v0 && (_v0.track("upload_modal_privacy_changed", {
        upload_modal_privacy_new_value: _v0.uploadModalPrivacyNewValue
      }), !0), [_v0]),
      _v8 = (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_share_clicked", {}), !0), [_v0]);
    return {
      trackUploadModalMinimizeClicked: _v1,
      trackUploadModalDismissed: _v2,
      trackUploadModalMoreActionsOpened: _v3,
      trackUploadModalPauseAllClicked: _v4,
      trackUploadModalCancelAllClicked: _v5,
      trackUploadModalPrivacyDropdownClicked: _v6,
      trackUploadModalPrivacyChanged: _v7,
      trackUploadModalShareClicked: _v8,
      trackUploadModalVideoRemoved: (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_video_removed", {}), !0), [_v0]),
      trackUploadModalUploadMoreClicked: (0, _v2.useCallback)(() => null !== _v0 && (_v0.track("upload_modal_upload_more_clicked", {}), !0), [_v0])
    };
  }
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0);
  (0, _v21.rem)(4), (0, _v21.rem)(8), (0, _v21.rem)(16), (0, _v21.rem)(32), (0, _v21.rem)(64), (0, _v21.rem)(128);
  let _v22 = () => ({
    cancel: (0, _v17.translate)({
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
    checkingFiles: (0, _v17.translate)({
      singular: "Checking files",
      dictionary: {
        es: {
          singular: "Verificación de archivos"
        },
        "de-DE": {
          singular: "Überprüfen von Dateien"
        },
        "fr-FR": {
          singular: "Vérification des fichiers"
        },
        "ja-JP": {
          singular: "ファイルを確認中"
        },
        "ko-KR": {
          singular: "파일 확인 중"
        },
        "pt-BR": {
          singular: "Verificando arquivos"
        },
        "zh-CN": {
          singular: "检查文件"
        }
      }
    }),
    clear: (0, _v17.translate)({
      singular: "Clear",
      dictionary: {
        es: {
          singular: "Borrar"
        },
        "de-DE": {
          singular: "Löschen"
        },
        "fr-FR": {
          singular: "Effacer"
        },
        "ja-JP": {
          singular: "クリア"
        },
        "ko-KR": {
          singular: "비우기"
        },
        "pt-BR": {
          singular: "Limpar"
        },
        "zh-CN": {
          singular: "清除"
        }
      }
    }),
    close: (0, _v17.translate)({
      singular: "Close",
      dictionary: {
        es: {
          singular: "Cerrar"
        },
        "de-DE": {
          singular: "Schließen"
        },
        "fr-FR": {
          singular: "Fermer "
        },
        "ja-JP": {
          singular: "閉じる"
        },
        "ko-KR": {
          singular: "닫기"
        },
        "pt-BR": {
          singular: "Fechar"
        },
        "zh-CN": {
          singular: "关闭"
        }
      }
    }),
    closeDialog: (0, _v17.translate)({
      singular: "Close dialog",
      dictionary: {
        es: {
          singular: "Cerrar el diálogo"
        },
        "de-DE": {
          singular: "Dialog schließen"
        },
        "fr-FR": {
          singular: "Fermer cette fenêtre"
        },
        "ja-JP": {
          singular: "会話を閉じる"
        },
        "ko-KR": {
          singular: "창 닫기"
        },
        "pt-BR": {
          singular: "Fechar diálogo"
        },
        "zh-CN": {
          singular: "关闭对话框"
        }
      }
    }),
    dropboxFailed: (0, _v17.translate)({
      singular: "Failed. Check sharing settings on Dropbox.",
      dictionary: {
        es: {
          singular: "Se produjo un error. Compruebe la configuración para compartir en Dropbox."
        },
        "de-DE": {
          singular: "Fehlgeschlagen. Überprüfen Sie die Freigabeeinstellungen auf Dropbox."
        },
        "fr-FR": {
          singular: "Échec. Vérifiez les paramètres de partage sur Dropbox."
        },
        "ja-JP": {
          singular: "失敗しました。Dropboxの共有設定をご確認ください。"
        },
        "ko-KR": {
          singular: "실패했습니다. Dropbox에서 공유 설정을 확인하세요."
        },
        "pt-BR": {
          singular: "Falhou. Verifique as configurações de compartilhamento no Dropbox."
        },
        "zh-CN": {
          singular: "失败。检查 Dropbox 上的共享设置。"
        }
      }
    }),
    failed: (0, _v17.translate)({
      singular: "Failed",
      dictionary: {
        es: {
          singular: "Fallido"
        },
        "de-DE": {
          singular: "Fehlgeschlagen"
        },
        "fr-FR": {
          singular: "Échec"
        },
        "ja-JP": {
          singular: "失敗しました"
        },
        "ko-KR": {
          singular: "실패"
        },
        "pt-BR": {
          singular: "Com falha"
        },
        "zh-CN": {
          singular: "失败"
        }
      }
    }),
    fileTypeNotSupported: (0, _v17.translate)({
      singular: "File type not supported",
      dictionary: {
        es: {
          singular: "Tipo de archivo no compatible"
        },
        "de-DE": {
          singular: "Dateityp wird nicht unterstützt"
        },
        "fr-FR": {
          singular: "Ce type de fichier n'est pas pris en charge."
        },
        "ja-JP": {
          singular: "対応していないファイルタイプ"
        },
        "ko-KR": {
          singular: "지원되지 않는 파일 형식입니다."
        },
        "pt-BR": {
          singular: "Tipo de arquivo não compatível"
        },
        "zh-CN": {
          singular: "不支持的文件类型"
        }
      }
    }),
    expand: (0, _v17.translate)({
      singular: "Expand",
      dictionary: {
        es: {
          singular: "Expandir"
        },
        "de-DE": {
          singular: "Vergrößern"
        },
        "fr-FR": {
          singular: "Agrandir"
        },
        "ja-JP": {
          singular: "拡大"
        },
        "ko-KR": {
          singular: "펼치기"
        },
        "pt-BR": {
          singular: "Expandir"
        },
        "zh-CN": {
          singular: "展开"
        }
      }
    }),
    hideDialog: (0, _v17.translate)({
      singular: "Hide dialog",
      dictionary: {
        es: {
          singular: "Ocultar diálogo"
        },
        "de-DE": {
          singular: "Dialog verbergen"
        },
        "fr-FR": {
          singular: "Masquer la fenêtre"
        },
        "ja-JP": {
          singular: "ダイアログを非表示"
        },
        "ko-KR": {
          singular: "대화상자 숨기기"
        },
        "pt-BR": {
          singular: "Ocultar diálogo"
        },
        "zh-CN": {
          singular: "隐藏对话框"
        }
      }
    }),
    location: (0, _v17.translate)({
      singular: "Location",
      dictionary: {
        es: {
          singular: "Ubicación"
        },
        "de-DE": {
          singular: "Ort"
        },
        "fr-FR": {
          singular: "Localisation"
        },
        "ja-JP": {
          singular: "位置情報"
        },
        "ko-KR": {
          singular: "위치"
        },
        "pt-BR": {
          singular: "Local"
        },
        "zh-CN": {
          singular: "位置"
        }
      }
    }),
    minimize: (0, _v17.translate)({
      singular: "Minimize",
      dictionary: {
        es: {
          singular: "Minimizar"
        },
        "de-DE": {
          singular: "Minimieren"
        },
        "fr-FR": {
          singular: "Minimiser"
        },
        "ja-JP": {
          singular: "最小化"
        },
        "ko-KR": {
          singular: "줄이기"
        },
        "pt-BR": {
          singular: "Minimizar"
        },
        "zh-CN": {
          singular: "最小化"
        }
      }
    }),
    moreActions: (0, _v17.translate)({
      singular: "More actions",
      dictionary: {
        es: {
          singular: "Más acciones"
        },
        "de-DE": {
          singular: "Weitere Aktionen"
        },
        "fr-FR": {
          singular: "Plus d'actions"
        },
        "ja-JP": {
          singular: "その他の操作"
        },
        "ko-KR": {
          singular: "기능 더 보기"
        },
        "pt-BR": {
          singular: "Mais ações"
        },
        "zh-CN": {
          singular: "更多操作"
        }
      }
    }),
    myLibrary: (0, _v17.translate)({
      singular: "My Library",
      dictionary: {
        es: {
          singular: "Mi biblioteca"
        },
        "de-DE": {
          singular: "Meine Mediathek"
        },
        "fr-FR": {
          singular: "Ma bibliothèque"
        },
        "ja-JP": {
          singular: "マイライブラリ"
        },
        "ko-KR": {
          singular: "내 보관함"
        },
        "pt-BR": {
          singular: "Minha Biblioteca"
        },
        "zh-CN": {
          singular: "我的媒体库"
        }
      }
    }),
    noInternetConnection: (0, _v17.translate)({
      singular: "No internet connection",
      dictionary: {
        es: {
          singular: "Sin conexión a internet"
        },
        "de-DE": {
          singular: "Keine Verbindung zum Internet."
        },
        "fr-FR": {
          singular: "Pas de connexion Internet."
        },
        "ja-JP": {
          singular: "インターネット接続がありません"
        },
        "ko-KR": {
          singular: "인터넷 연결이 없습니다"
        },
        "pt-BR": {
          singular: "Sem conexão à internet"
        },
        "zh-CN": {
          singular: "无网络连接"
        }
      }
    }),
    setPrivacy: (0, _v17.translate)({
      singular: "Set privacy",
      dictionary: {
        es: {
          singular: "Configurar la privacidad"
        },
        "de-DE": {
          singular: "Datenschutz einstellen"
        },
        "fr-FR": {
          singular: "Configurer la confidentialité"
        },
        "ja-JP": {
          singular: "プライバシーを設定"
        },
        "ko-KR": {
          singular: "공개 범위 설정"
        },
        "pt-BR": {
          singular: "Programar Privacidade"
        },
        "zh-CN": {
          singular: "设置隐私"
        }
      }
    }),
    showDialog: (0, _v17.translate)({
      singular: "Show dialog",
      dictionary: {
        es: {
          singular: "Mostrar diálogo"
        },
        "de-DE": {
          singular: "Dialog anzeigen"
        },
        "fr-FR": {
          singular: "Afficher la fenêtre"
        },
        "ja-JP": {
          singular: "ダイアログを表示"
        },
        "ko-KR": {
          singular: "대화상자 표시"
        },
        "pt-BR": {
          singular: "Exibir diálogo"
        },
        "zh-CN": {
          singular: "显示对话框"
        }
      }
    }),
    storageIsFull: (0, _v17.translate)({
      singular: "Storage is full",
      dictionary: {
        es: {
          singular: "El almacenamiento está lleno"
        },
        "de-DE": {
          singular: "Speicher ist voll"
        },
        "fr-FR": {
          singular: "Espace de stockage plein"
        },
        "ja-JP": {
          singular: "ストレージがいっぱいです"
        },
        "ko-KR": {
          singular: "저장 공간 부족"
        },
        "pt-BR": {
          singular: "Armazenamento cheio"
        },
        "zh-CN": {
          singular: "存储空间已满"
        }
      }
    }),
    teamLibrary: (0, _v17.translate)({
      singular: "Team library",
      dictionary: {
        es: {
          singular: "Biblioteca del equipo"
        },
        "de-DE": {
          singular: "Teambibliothek"
        },
        "fr-FR": {
          singular: "Bibliothèque de l'équipe"
        },
        "ja-JP": {
          singular: "チームライブラリ"
        },
        "ko-KR": {
          singular: "팀 라이브러리"
        },
        "pt-BR": {
          singular: "Biblioteca da equipe"
        },
        "zh-CN": {
          singular: "团队视频库"
        }
      }
    }),
    uploadMore: (0, _v17.translate)({
      singular: "Upload more",
      dictionary: {
        es: {
          singular: "Subir más"
        },
        "de-DE": {
          singular: "Mehr hochladen"
        },
        "fr-FR": {
          singular: "Mettre en ligne d'autres fichiers"
        },
        "ja-JP": {
          singular: "さらにアップロード"
        },
        "ko-KR": {
          singular: "더 업로드하기"
        },
        "pt-BR": {
          singular: "Carregar mais"
        },
        "zh-CN": {
          singular: "上传更多"
        }
      }
    }),
    uploadingTo: (0, _v17.translate)({
      singular: "Uploading to",
      dictionary: {
        es: {
          singular: "Subiendo a"
        },
        "de-DE": {
          singular: "Hochladen auf"
        },
        "fr-FR": {
          singular: "Mise en ligne dans"
        },
        "ja-JP": {
          singular: "アップロード先"
        },
        "ko-KR": {
          singular: "다음으로 업로드 중"
        },
        "pt-BR": {
          singular: "Carregando para"
        },
        "zh-CN": {
          singular: "正在上传至"
        }
      }
    }),
    uploadsCanceled: (0, _v17.translate)({
      singular: "Uploads canceled",
      dictionary: {
        es: {
          singular: "Subidas canceladas"
        },
        "de-DE": {
          singular: "Uploads abgebrochen"
        },
        "fr-FR": {
          singular: "Mises en ligne annulées"
        },
        "ja-JP": {
          singular: "アップロードをキャンセルしました"
        },
        "ko-KR": {
          singular: "업로드가 취소되었습니다."
        },
        "pt-BR": {
          singular: "Carregamentos cancelados"
        },
        "zh-CN": {
          singular: "上传已取消"
        }
      }
    }),
    uploading: (_v0, _v1) => (0, _v17.translate)({
      singular: "Uploading 1 video",
      plural: "Uploading {completeCount} of {totalCount} videos",
      replacements: {
        completeCount: _v0,
        totalCount: _v1
      },
      count: _v1,
      dictionary: {
        es: {
          singular: "Subiendo 1 vídeo",
          plural: "Subiendo {completeCount} de {totalCount} vídeos"
        },
        "de-DE": {
          singular: "Lade 1 Video hoch",
          plural: "Lade {completeCount} von {totalCount} Videos hoch"
        },
        "fr-FR": {
          singular: "Téléversement d'une vidéo",
          plural: "Téléversement de {completeCount} sur {totalCount} vidéos"
        },
        "ja-JP": {
          singular: "動画を1件アップロード中",
          plural: "{totalCount}件中{completeCount}件をアップロード中"
        },
        "ko-KR": {
          singular: "동영상 1개 업로드 중",
          plural: "총 {totalCount}개 중 {completeCount}개 업로드 중"
        },
        "pt-BR": {
          singular: "Enviando 1 vídeo",
          plural: "Enviando {completeCount} de {totalCount} vídeos"
        },
        "zh-CN": {
          singular: "正在上传 1 个视频",
          plural: "正在上传 {completeCount} / {totalCount} 个视频"
        }
      }
    }),
    uploadsComplete: _v0 => (0, _v17.translate)({
      singular: "{completeCount} upload complete",
      plural: "{completeCount} uploads complete",
      replacements: {
        completeCount: _v0
      },
      count: _v0,
      dictionary: {
        es: {
          singular: "{completeCount} subida completa",
          plural: "{completeCount} subidas completas"
        },
        "de-DE": {
          singular: "{completeCount} Upload abgeschlossen",
          plural: "{completeCount} Uploads abgeschlossen"
        },
        "fr-FR": {
          singular: "{completeCount} transfert terminé",
          plural: "{completeCount} transferts terminés"
        },
        "ja-JP": {
          singular: "{completeCount}件のアップロードが完了しました",
          plural: "{completeCount}件のアップロードが完了しました"
        },
        "ko-KR": {
          singular: "업로드 {completeCount}개 완료",
          plural: "업로드 {completeCount}개 완료"
        },
        "pt-BR": {
          singular: "Carregamento de {completeCount} concluído",
          plural: "{completeCount} carregamentos concluídos"
        },
        "zh-CN": {
          singular: "{completeCount} 个上传完成",
          plural: "{completeCount} 个上传完成"
        }
      }
    }),
    uploadErrorAnalysisFailed: (0, _v17.translate)({
      singular: "We couldn't process your file. Please check our encoding guidelines to make sure your file is compatible.",
      dictionary: {
        es: {
          singular: "No pudimos procesar su archivo. Consulte nuestras directrices de codificación para asegurarse de que su archivo sea compatible."
        },
        "de-DE": {
          singular: "Wir konnten Ihre Datei nicht verarbeiten. Bitte prüfen Sie unsere Kodierungsrichtlinien, um sicherzustellen, dass Ihre Datei kompatibel ist."
        },
        "fr-FR": {
          singular: "Nous n'avons pas pu traiter votre fichier. Veuillez consulter nos directives d'encodage pour vous assurer que votre fichier est compatible."
        },
        "ja-JP": {
          singular: "ファイルを処理できませんでした。ファイルが互換性があるかどうか、エンコードガイドラインを確認してください。"
        },
        "ko-KR": {
          singular: "파일을 처리할 수 없습니다. 파일이 호환되는지 확인하려면 인코딩 가이드라인을 확인하세요."
        },
        "pt-BR": {
          singular: "Não conseguimos processar seu arquivo. Consulte nossas diretrizes de codificação para garantir que seu arquivo seja compatível."
        },
        "zh-CN": {
          singular: "我们无法处理您的文件。请查看我们的编码指南以确保您的文件兼容。"
        }
      }
    }),
    uploadErrorDurationTooLong: (0, _v17.translate)({
      singular: "Your video exceeds the 24-hour maximum duration. Please trim it and try again.",
      dictionary: {
        es: {
          singular: "Su vídeo excede la duración máxima de 24 horas. Recórtelo e inténtelo de nuevo."
        },
        "de-DE": {
          singular: "Ihr Video überschreitet die maximale Dauer von 24 Stunden. Bitte kürzen Sie es und versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Votre vidéo dépasse la durée maximale de 24 heures. Veuillez la raccourcir et réessayer."
        },
        "ja-JP": {
          singular: "動画の長さが最大 24 時間を超えています。トリミングしてから再試行してください。"
        },
        "ko-KR": {
          singular: "비디오가 최대 재생 시간인 24시간을 초과했습니다. 길이를 줄인 후 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Seu vídeo excede a duração máxima de 24 horas. Corte-o e tente novamente."
        },
        "zh-CN": {
          singular: "您的视频超过 24 小时的最长时长。请剪辑后重试。"
        }
      }
    }),
    uploadErrorDurationTooShort: (0, _v17.translate)({
      singular: "Your video is too short. Vimeo requires videos of at least 0.5 seconds.",
      dictionary: {
        es: {
          singular: "Su vídeo es demasiado corto. Vimeo requiere vídeos de al menos 0.5 segundos."
        },
        "de-DE": {
          singular: "Ihr Video ist zu kurz. Vimeo erfordert Videos von mindestens 0,5 Sekunden."
        },
        "fr-FR": {
          singular: "Votre vidéo est trop courte. Vimeo exige des vidéos d'au moins 0,5 seconde."
        },
        "ja-JP": {
          singular: "動画が短すぎます。Vimeo では少なくとも 0.5 秒以上の動画が必要です。"
        },
        "ko-KR": {
          singular: "비디오가 너무 짧습니다. Vimeo는 최소 0.5초 이상의 비디오를 요구합니다."
        },
        "pt-BR": {
          singular: "Seu vídeo é curto demais. Vimeo exige vídeos de pelo menos 0,5 segundos."
        },
        "zh-CN": {
          singular: "您的视频过短。Vimeo 要求视频至少为 0.5 秒。"
        }
      }
    }),
    uploadErrorMissingVideoStream: (0, _v17.translate)({
      singular: "Your file doesn't contain a video stream. Please check our encoding guidelines for supported formats.",
      dictionary: {
        es: {
          singular: "Su archivo no contiene un flujo de vídeo. Consulte nuestras directrices de codificación para los formatos compatibles."
        },
        "de-DE": {
          singular: "Ihre Datei enthält keinen Videostream. Bitte prüfen Sie unsere Kodierungsrichtlinien für unterstützte Formate."
        },
        "fr-FR": {
          singular: "Votre fichier ne contient pas de flux vidéo. Veuillez consulter nos directives d'encodage pour connaître les formats pris en charge."
        },
        "ja-JP": {
          singular: "ファイルに動画ストリームが含まれていません。対応フォーマットについては{A}エンコードガイドラインを確認してください{/A}。"
        },
        "ko-KR": {
          singular: "파일에 비디오 스트림이 포함되어 있지 않습니다. 지원되는 포맷은 인코딩 가이드라인을 확인하세요."
        },
        "pt-BR": {
          singular: "Seu arquivo não contém um fluxo de vídeo. Consulte nossas diretrizes de codificação para formatos suportados."
        },
        "zh-CN": {
          singular: "您的文件不包含视频流。请查看我们的编码指南以了解支持的格式。"
        }
      }
    }),
    uploadErrorResolutionTooSmall: (0, _v17.translate)({
      singular: "Your video resolution is too small (minimum 2×2 pixels).",
      dictionary: {
        es: {
          singular: "La resolución de su vídeo es demasiado baja (mínimo 2×2 píxeles)."
        },
        "de-DE": {
          singular: "Die Auflösung Ihres Videos ist zu klein (mindestens 2×2 Pixel)."
        },
        "fr-FR": {
          singular: "La résolution de votre vidéo est trop faible (minimum 2×2 pixels)."
        },
        "ja-JP": {
          singular: "動画の解像度が小さすぎます（最小 2×2 ピクセル）。"
        },
        "ko-KR": {
          singular: "비디오 해상도가 너무 작습니다(최소 2×2 픽셀)."
        },
        "pt-BR": {
          singular: "A resolução do seu vídeo é muito pequena (mínimo 2×2 pixels)."
        },
        "zh-CN": {
          singular: "您的视频分辨率太小 (最小 2×2 像素)。"
        }
      }
    }),
    uploadErrorMaxFileSizeExceeded: (0, _v17.translate)({
      singular: "Your file exceeds the 300 GB maximum file size. Please use a smaller file.",
      dictionary: {
        es: {
          singular: "Su archivo excede el tamaño máximo de archivo de 300 GB. Utilice un archivo más pequeño."
        },
        "de-DE": {
          singular: "Ihre Datei überschreitet die maximale Dateigröße von 300 GB. Bitte verwenden Sie eine kleinere Datei."
        },
        "fr-FR": {
          singular: "Votre fichier dépasse la taille maximale de 300 GB. Veuillez utiliser un fichier plus petit."
        },
        "ja-JP": {
          singular: "ファイルのサイズが最大 300 GB を超えています。より小さいファイルを使用してください。"
        },
        "ko-KR": {
          singular: "파일이 최대 파일 크기인 300 GB를 초과했습니다. 더 작은 파일을 사용하세요."
        },
        "pt-BR": {
          singular: "Seu arquivo excede o tamanho máximo de arquivo de 300 GB. Use um arquivo menor."
        },
        "zh-CN": {
          singular: "您的文件超过 300 GB 的最大文件大小限制。请使用更小的文件。"
        }
      }
    }),
    uploadErrorEmptyUpload: (0, _v17.translate)({
      singular: "Your file is empty (0 bytes). Please check the file and try again.",
      dictionary: {
        es: {
          singular: "Su archivo está vacío (0 bytes). Compruebe el archivo y vuelva a intentarlo."
        },
        "de-DE": {
          singular: "Ihre Datei ist leer (0 Bytes). Bitte prüfen Sie die Datei und versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Votre fichier est vide (0 octets). Veuillez vérifier le fichier et réessayer."
        },
        "ja-JP": {
          singular: "ファイルが空（0 バイト）です。ファイルを確認して再度お試しください。"
        },
        "ko-KR": {
          singular: "파일이 비어 있습니다(0 바이트). 파일을 확인하고 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Seu arquivo está vazio (0 bytes). Verifique o arquivo e tente novamente."
        },
        "zh-CN": {
          singular: "您的文件为空 (0 字节)。请检查文件并重试。"
        }
      }
    }),
    uploadErrorDisallowedContentType: (0, _v17.translate)({
      singular: "This file type is not supported. Please check our encoding guidelines for supported formats.",
      dictionary: {
        es: {
          singular: "Este tipo de archivo no es compatible. Consulte nuestras directrices de codificación para los formatos compatibles."
        },
        "de-DE": {
          singular: "Dieser Dateityp wird nicht unterstützt. Bitte prüfen Sie unsere Kodierungsrichtlinien für unterstützte Formate."
        },
        "fr-FR": {
          singular: "Ce type de fichier n'est pas pris en charge. Veuillez consulter nos directives d'encodage pour connaître les formats pris en charge."
        },
        "ja-JP": {
          singular: "このファイル形式はサポートされていません。対応フォーマットについては{A}エンコードガイドラインを確認してください{/A}。"
        },
        "ko-KR": {
          singular: "이 파일 형식은 지원되지 않습니다. 지원되는 포맷은 인코딩 가이드라인을 확인하세요."
        },
        "pt-BR": {
          singular: "Este tipo de arquivo não é compatível. Consulte nossas diretrizes de codificação para formatos suportados."
        },
        "zh-CN": {
          singular: "不支持此文件类型。请查看我们的编码指南以了解支持的格式。"
        }
      }
    }),
    uploadErrorExceededRetryCount: (0, _v17.translate)({
      singular: "Your upload failed too many times. Please try again.",
      dictionary: {
        es: {
          singular: "Su subida ha fallado demasiadas veces. Inténtelo de nuevo."
        },
        "de-DE": {
          singular: "Ihr Upload ist zu oft fehlgeschlagen. Bitte versuchen Sie es erneut."
        },
        "fr-FR": {
          singular: "Votre téléversement a échoué trop de fois. Veuillez réessayer."
        },
        "ja-JP": {
          singular: "アップロードが何度も失敗しました。再試行してください。"
        },
        "ko-KR": {
          singular: "업로드가 여러 번 실패했습니다. 다시 시도하세요."
        },
        "pt-BR": {
          singular: "Seu envio falhou muitas vezes. Por favor, tente novamente."
        },
        "zh-CN": {
          singular: "您的上传失败次数过多。请重试。"
        }
      }
    }),
    uploadErrorInternal: (0, _v17.translate)({
      singular: "Something went wrong on our end. Please try uploading again.",
      dictionary: {
        es: {
          singular: "Algo salió mal por nuestra parte. Intente subir el archivo de nuevo."
        },
        "de-DE": {
          singular: "Bei uns ist ein Fehler aufgetreten. Bitte versuchen Sie erneut, die Datei hochzuladen."
        },
        "fr-FR": {
          singular: "Un problème est survenu de notre côté. Veuillez réessayer le téléversement."
        },
        "ja-JP": {
          singular: "こちらの不手際により問題が発生しました。アップロードを再試行してください。"
        },
        "ko-KR": {
          singular: "저희 쪽에서 문제가 발생했습니다. 다시 업로드해 보세요."
        },
        "pt-BR": {
          singular: "Ocorreu um erro do nosso lado. Por favor, tente enviar novamente."
        },
        "zh-CN": {
          singular: "我们这边出现了问题。请重试上传。"
        }
      }
    }),
    uploadErrorDisallowedAddress: (0, _v17.translate)({
      singular: "The URL you provided resolves to a restricted address.",
      dictionary: {
        es: {
          singular: "La URL que proporcionó apunta a una dirección restringida."
        },
        "de-DE": {
          singular: "Die von Ihnen angegebene URL führt zu einer gesperrten Adresse."
        },
        "fr-FR": {
          singular: "L'URL fournie renvoie vers une adresse restreinte."
        },
        "ja-JP": {
          singular: "指定した URL は制限されたアドレスに解決されます。"
        },
        "ko-KR": {
          singular: "제공하신 URL이 제한된 주소로 확인됩니다."
        },
        "pt-BR": {
          singular: "A URL que você forneceu resolve para um endereço restrito."
        },
        "zh-CN": {
          singular: "您提供的 URL 解析到受限地址。"
        }
      }
    }),
    uploadErrorInvalidRedirects: (0, _v17.translate)({
      singular: "The URL you provided redirects too many times or to a different host.",
      dictionary: {
        es: {
          singular: "La URL que proporcionó redirige demasiadas veces o a un host diferente."
        },
        "de-DE": {
          singular: "Die von Ihnen angegebene URL leitet zu oft weiter oder auf einen anderen Host."
        },
        "fr-FR": {
          singular: "L'URL fournie redirige trop de fois ou vers un hôte différent."
        },
        "ja-JP": {
          singular: "指定した URL はリダイレクトが多すぎるか、別のホストにリダイレクトしています。"
        },
        "ko-KR": {
          singular: "제공하신 URL이 너무 많이 리디렉션되거나 다른 호스트로 리디렉션됩니다."
        },
        "pt-BR": {
          singular: "A URL que você forneceu redireciona muitas vezes ou para um host diferente."
        },
        "zh-CN": {
          singular: "您提供的 URL 重定向次数过多或重定向到不同的主机。"
        }
      }
    }),
    uploadErrorRemoteNotFound: (0, _v17.translate)({
      singular: "The file at the URL you provided could not be found (404). Please check the URL.",
      dictionary: {
        es: {
          singular: "No se encontró el archivo en la URL que proporcionó (404). Compruebe la URL."
        },
        "de-DE": {
          singular: "Die Datei unter der angegebenen URL konnte nicht gefunden werden (404). Bitte prüfen Sie die URL."
        },
        "fr-FR": {
          singular: "Le fichier à l'URL fournie est introuvable (404). Veuillez vérifier l'URL."
        },
        "ja-JP": {
          singular: "指定した URL のファイルが見つかりませんでした（404）。URL を確認してください。"
        },
        "ko-KR": {
          singular: "제공하신 URL의 파일을 찾을 수 없습니다(404). URL을 확인하세요."
        },
        "pt-BR": {
          singular: "O arquivo na URL que você forneceu não pôde ser encontrado (404). Verifique a URL."
        },
        "zh-CN": {
          singular: "您提供的 URL 对应的文件未找到 (404)。请检查 URL。"
        }
      }
    }),
    uploadErrorRemoteUnauthorized: (0, _v17.translate)({
      singular: "Access to the URL was denied (401). Please check that the URL is publicly accessible or set authorization headers.",
      dictionary: {
        es: {
          singular: "El acceso a la URL fue denegado (401). Compruebe que la URL sea accesible públicamente o que se hayan establecido los encabezados de autorización."
        },
        "de-DE": {
          singular: "Der Zugriff auf die URL wurde verweigert (401). Bitte prüfen Sie, ob die URL öffentlich zugänglich ist oder setzen Sie die Autorisierungsheader."
        },
        "fr-FR": {
          singular: "L'accès à l'URL a été refusé (401). Veuillez vérifier que l'URL est accessible publiquement ou configurer les en-têtes d'autorisation."
        },
        "ja-JP": {
          singular: "指定した URL へのアクセスが拒否されました（401）。URL が公開アクセス可能か、または認証ヘッダーが設定されているか確認してください。"
        },
        "ko-KR": {
          singular: "URL에 대한 접근이 거부되었습니다(401). URL이 공개적으로 접근 가능한지 확인하거나 인증 헤더를 설정하세요."
        },
        "pt-BR": {
          singular: "O acesso à URL foi negado (401). Verifique se a URL é publicamente acessível ou defina cabeçalhos de autorização."
        },
        "zh-CN": {
          singular: "对该 URL 的访问被拒绝 (401)。请检查该 URL 是否可公开访问，或设置授权头。"
        }
      }
    }),
    uploadErrorRemoteForbidden: (0, _v17.translate)({
      singular: "Access to the URL was forbidden (403). Please check that the URL is publicly accessible or set authorization headers.",
      dictionary: {
        es: {
          singular: "El acceso a la URL está prohibido (403). Compruebe que la URL sea accesible públicamente o que se hayan establecido los encabezados de autorización."
        },
        "de-DE": {
          singular: "Der Zugriff auf die URL wurde untersagt (403). Bitte prüfen Sie, ob die URL öffentlich zugänglich ist oder setzen Sie die Autorisierungsheader."
        },
        "fr-FR": {
          singular: "L'accès à l'URL est interdit (403). Veuillez vérifier que l'URL est accessible publiquement ou configurer les en-têtes d'autorisation."
        },
        "ja-JP": {
          singular: "指定した URL へのアクセスが禁止されました（403）。URL が公開アクセス可能か、または認証ヘッダーが設定されているか確認してください。"
        },
        "ko-KR": {
          singular: "URL 접근이 금지되었습니다(403). URL이 공개적으로 접근 가능한지 확인하거나 인증 헤더를 설정하세요."
        },
        "pt-BR": {
          singular: "O acesso à URL foi proibido (403). Verifique se a URL é publicamente acessível ou defina cabeçalhos de autorização."
        },
        "zh-CN": {
          singular: "对该 URL 的访问被禁止 (403)。请检查该 URL 是否可公开访问，或设置授权头。"
        }
      }
    }),
    uploadErrorRemoteBadRequest: (0, _v17.translate)({
      singular: "The server at the URL you provided rejected the request (4xx). Please check the URL.",
      dictionary: {
        es: {
          singular: "El servidor en la URL que proporcionó rechazó la solicitud (4xx). Compruebe la URL."
        },
        "de-DE": {
          singular: "Der Server der angegebenen URL hat die Anfrage abgewiesen (4xx). Bitte prüfen Sie die URL."
        },
        "fr-FR": {
          singular: "Le serveur à l'URL fournie a rejeté la requête (4xx). Veuillez vérifier l'URL."
        },
        "ja-JP": {
          singular: "指定した URL のサーバーがリクエストを拒否しました（4xx）。URL を確認してください。"
        },
        "ko-KR": {
          singular: "제공하신 URL의 서버가 요청을 거부했습니다(4xx). URL을 확인하세요."
        },
        "pt-BR": {
          singular: "O servidor na URL que você forneceu rejeitou a solicitação (4xx). Verifique a URL."
        },
        "zh-CN": {
          singular: "您提供的 URL 所指的服务器拒绝了请求 (4xx)。请检查 URL。"
        }
      }
    }),
    uploadErrorRemoteInternal: (0, _v17.translate)({
      singular: "The server at the URL you provided encountered an error (5xx). Please check the URL or try again later.",
      dictionary: {
        es: {
          singular: "El servidor en la URL que proporcionó encontró un error (5xx). Compruebe la URL o inténtelo de nuevo más tarde."
        },
        "de-DE": {
          singular: "Der Server der angegebenen URL hat einen Fehler zurückgegeben (5xx). Bitte prüfen Sie die URL oder versuchen Sie es später erneut."
        },
        "fr-FR": {
          singular: "Le serveur à l'URL fournie a rencontré une erreur (5xx). Veuillez vérifier l'URL ou réessayer plus tard."
        },
        "ja-JP": {
          singular: "指定した URL のサーバーでエラーが発生しました（5xx）。URL を確認するか、後でもう一度お試しください。"
        },
        "ko-KR": {
          singular: "제공하신 URL의 서버에서 오류가 발생했습니다(5xx). URL을 확인하거나 나중에 다시 시도하세요."
        },
        "pt-BR": {
          singular: "O servidor na URL que você forneceu encontrou um erro (5xx). Verifique a URL ou tente novamente mais tarde."
        },
        "zh-CN": {
          singular: "您提供的 URL 所指的服务器发生错误 (5xx)。请检查 URL 或稍后重试。"
        }
      }
    }),
    uploadErrorUnsupportedVideoProjection: (0, _v17.translate)({
      singular: "Your video uses a spatial projection we don't support yet. Please check our encoding guidelines to make sure your file is compatible.",
      dictionary: {
        es: {
          singular: "Su vídeo utiliza una proyección espacial que aún no admitimos. Por favor, consulte nuestras directrices de codificación para asegurarse de que su archivo sea compatible."
        },
        "de-DE": {
          singular: "Ihr Video verwendet eine räumliche Projektion, die wir noch nicht unterstützen. Bitte prüfen Sie unsere Encodierungsrichtlinien, um sicherzustellen, dass Ihre Datei kompatibel ist."
        },
        "fr-FR": {
          singular: "Votre vidéo utilise une projection spatiale que nous ne prenons pas encore en charge. Veuillez consulter nos consignes d'encodage pour vous assurer que votre fichier est compatible."
        },
        "ja-JP": {
          singular: "お使いの動画は、現在サポートしていない空間プロジェクションを使用しています。ファイルが互換性があるかどうかを確認するには、エンコードガイドラインをご確認ください。"
        },
        "ko-KR": {
          singular: "귀하의 동영상은 현재 지원하지 않는 공간 프로젝션을 사용하고 있습니다. 파일이 호환되는지 확인하려면 인코딩 가이드라인을 확인해 주세요."
        },
        "pt-BR": {
          singular: "Seu vídeo utiliza uma projeção espacial que ainda não suportamos. Consulte nossas diretrizes de codificação para garantir que seu arquivo seja compatível."
        },
        "zh-CN": {
          singular: "您的视频使用了我们当前尚不支持的空间投影。请查看我们的编码指南以确保您的文件兼容。"
        }
      }
    }),
    uploadsIncomplete: (_v0, _v1) => (0, _v17.translate)({
      singular: "Upload incomplete",
      plural: "{completeCount} of {totalCount} uploads complete",
      replacements: {
        completeCount: _v0,
        totalCount: _v1
      },
      count: _v1,
      dictionary: {
        es: {
          singular: "Subida incompleta",
          plural: "{completeCount} de {totalCount} subidas completas"
        },
        "de-DE": {
          singular: "Hochladen unvollständig",
          plural: "{completeCount} von {totalCount} Uploads abgeschlossen"
        },
        "fr-FR": {
          singular: "Transfert incomplet",
          plural: "{completeCount} sur {totalCount} mises en ligne terminées"
        },
        "ja-JP": {
          singular: "アップロードが完了していません",
          plural: "{totalCount}件中{completeCount}件のアップロード完了"
        },
        "ko-KR": {
          singular: "업로드 미완료",
          plural: "{totalCount}개 중 {completeCount}개 업로드 완료"
        },
        "pt-BR": {
          singular: "Carregamento incompleto",
          plural: "{completeCount} de {totalCount} carregamentos concluídos"
        }
      }
    }),
    uploadsPaused: _v0 => (0, _v17.translate)({
      singular: "Paused {pausedCount} upload",
      plural: "Paused {pausedCount} uploads",
      replacements: {
        pausedCount: _v0
      },
      count: _v0,
      dictionary: {
        es: {
          singular: "Se pausó {pausedCount} subida",
          plural: "Se pausaron {pausedCount} subidas"
        },
        "de-DE": {
          singular: "{pausedCount} Upload pausiert",
          plural: "{pausedCount} Uploads pausiert"
        },
        "fr-FR": {
          singular: "{pausedCount} transfert mis en pause",
          plural: "{pausedCount} transferts mis en pause"
        },
        "ja-JP": {
          singular: "{pausedCount}件のアップロードを一時停止しました",
          plural: "{pausedCount}件のアップロードを一時停止しました"
        },
        "ko-KR": {
          singular: "업로드 {pausedCount}개 일시중지",
          plural: "업로드 {pausedCount}개 일시중지"
        },
        "pt-BR": {
          singular: "Carregamento de {pausedCount} pausado",
          plural: "{pausedCount} carregamentos pausados"
        },
        "zh-CN": {
          singular: "已暂停 {pausedCount} 个上传",
          plural: "已暂停 {pausedCount} 个上传"
        }
      }
    }),
    uploadsFailed: _v0 => (0, _v17.translate)({
      singular: "{failedCount} failed",
      replacements: {
        failedCount: _v0
      },
      dictionary: {
        es: {
          singular: "{failedCount} fallida"
        },
        "de-DE": {
          singular: "{failedCount} fehlgeschlagen"
        },
        "fr-FR": {
          singular: "{failedCount} échec(s)"
        },
        "ja-JP": {
          singular: "{failedCount}件失敗"
        },
        "ko-KR": {
          singular: "{failedCount} 실패"
        },
        "pt-BR": {
          singular: "{failedCount} falha(s)"
        },
        "zh-CN": {
          singular: "{failedCount} 失败"
        }
      }
    })
  });
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    onCancel: _v0,
    onDelete: _v1
  }) => (0, _v1.jsxs)(_v24.Modal, {
    isOpen: !0,
    onClose: () => null,
    id: "cancel-all-modal",
    children: [(0, _v1.jsx)(_v28.ModalOverlay, {}), (0, _v1.jsxs)(_v25.ModalContent, {
      width: (0, _v12.rem)(334),
      children: [(0, _v1.jsx)(_v27.ModalHeader, {
        children: (0, _v17.translate)({
          singular: "Delete remaining uploads?",
          dictionary: {
            es: {
              singular: "¿Eliminar las subidas restantes?"
            },
            "de-DE": {
              singular: "Restliche Uploads löschen?"
            },
            "fr-FR": {
              singular: "Supprimer les mises en ligne restantes ?"
            },
            "ja-JP": {
              singular: "残りのアップロードを削除しますか？"
            },
            "ko-KR": {
              singular: "남은 업로드를 삭제하시겠습니까?"
            },
            "pt-BR": {
              singular: "Apagar os carregamentos restantes?"
            },
            "zh-CN": {
              singular: "删除剩余上传？"
            }
          }
        })
      }), (0, _v1.jsxs)(_v26.ModalFooter, {
        children: [(0, _v1.jsx)(_v23.Button, {
          variant: "tertiary",
          onClick: _v0,
          children: (0, _v17.translate)({
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
        }), (0, _v1.jsx)(_v23.Button, {
          variant: "destructive",
          onClick: _v1,
          children: (0, _v17.translate)({
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
      })]
    })]
  });
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = ({
      upload: _v0
    }) => {
      let {
          initialSize: _v1 = -1,
          error: _v2 = null
        } = _v0 || {},
        _v3 = _v22();
      if (null === _v2) return null;
      if (!_v2 && 0 === _v1) return {
        code: _v4.ERROR_CODES[_v4.ERRORS.FILE_TOO_SMALL],
        description: _v3.failed
      };
      switch (_v2) {
        case _v4.ERRORS.VIDEO_FILE_INVALID:
          return {
            code: _v4.ERROR_CODES[_v2],
            description: _v3.fileTypeNotSupported
          };
        case _v4.ERRORS.NETWORK_ERROR:
          return {
            code: _v4.ERROR_CODES[_v2],
            description: _v3.noInternetConnection
          };
        case _v4.ERRORS.INVALID_DROPBOX_URL:
          return {
            code: _v4.ERROR_CODES[_v2],
            description: _v3.dropboxFailed
          };
        case "Your account doesn't have enough free space to upload this video":
        case "You have reached the storage limit for private or embeddable videos and cannot upload more. Upgrade your plan for more storage.":
        case _v4.ERRORS.QUOTA_EXCEEDED:
        case "924":
          return {
            code: _v4.ERROR_CODES[_v2],
            description: _v3.storageIsFull
          };
        case "analysis_failed":
          return {
            code: _v2,
            description: _v3.uploadErrorAnalysisFailed
          };
        case "duration_too_long":
          return {
            code: _v2,
            description: _v3.uploadErrorDurationTooLong
          };
        case "duration_too_short":
          return {
            code: _v2,
            description: _v3.uploadErrorDurationTooShort
          };
        case "missing_video_stream":
          return {
            code: _v2,
            description: _v3.uploadErrorMissingVideoStream
          };
        case "resolution_dimension_too_small":
          return {
            code: _v2,
            description: _v3.uploadErrorResolutionTooSmall
          };
        case "max_file_size_exceeded":
          return {
            code: _v2,
            description: _v3.uploadErrorMaxFileSizeExceeded
          };
        case "empty_upload":
          return {
            code: _v2,
            description: _v3.uploadErrorEmptyUpload
          };
        case "disallowed_content_type":
          return {
            code: _v2,
            description: _v3.uploadErrorDisallowedContentType
          };
        case "exceeded_retry_count":
          return {
            code: _v2,
            description: _v3.uploadErrorExceededRetryCount
          };
        case "internal":
          return {
            code: _v2,
            description: _v3.uploadErrorInternal
          };
        case "disallowed_address":
          return {
            code: _v2,
            description: _v3.uploadErrorDisallowedAddress
          };
        case "invalid_redirects":
          return {
            code: _v2,
            description: _v3.uploadErrorInvalidRedirects
          };
        case "remote_not_found":
          return {
            code: _v2,
            description: _v3.uploadErrorRemoteNotFound
          };
        case "remote_unauthorized":
          return {
            code: _v2,
            description: _v3.uploadErrorRemoteUnauthorized
          };
        case "remote_forbidden":
          return {
            code: _v2,
            description: _v3.uploadErrorRemoteForbidden
          };
        case "remote_bad_request":
          return {
            code: _v2,
            description: _v3.uploadErrorRemoteBadRequest
          };
        case "remote_internal":
          return {
            code: _v2,
            description: _v3.uploadErrorRemoteInternal
          };
        case "unsupported_video_projection":
          return {
            code: _v2,
            description: _v3.uploadErrorUnsupportedVideoProjection
          };
        case _v4.ERRORS.NO_MACHINE_ID:
        case _v4.ERRORS.VERIFICATION_FAILED:
        case _v4.ERRORS.DNS_ERROR:
        case _v4.ERRORS.RETRY_FAILED:
        case _v4.ERRORS.ATTACH_FAILED:
        case _v4.ERRORS.PROGRESS_CALL_ERROR:
        case _v4.ERRORS.METADATA_CALL_ERROR:
        case _v4.ERRORS.PROGRESS_STATE_MISMATCH:
        case _v4.ERRORS.VIDEO_FILE_REMOVED:
        case _v4.ERRORS.VIDEO_FILE_SIZE_CHANGED:
        case _v4.ERRORS.INVALID_UPLOAD_ENDPOINT:
        case _v4.ERRORS.RANGE_FAILED:
        case _v4.ERRORS.RANGE_RESUME_FAILED:
        case _v4.ERRORS.PULL_FAILED:
        case _v4.ERRORS.VALIDATOR_CALL_ERROR:
        case _v4.ERRORS.LIGHTHOUSE_LOAD_ERROR:
        case _v4.ERRORS.LIGHTHOUSE_RACE_ERROR:
        case _v4.ERRORS.FILE_TOO_SMALL:
        default:
          return {
            code: _v4.ERROR_CODES[_v2] || "",
            description: _v3.failed
          };
      }
    },
    _v42 = ({
      destination: _v0,
      transcoding: _v1
    }) => {
      let _v2 = _v22(),
        _v3 = function ({
          transcoding: _v0
        }) {
          let {
              uploads: _v1,
              uploaderSummary: _v2
            } = (0, _v40.useUploader)(),
            {
              canceledCount: _v3,
              completeCount: _v4,
              isPaused: _v5,
              inProgressCount: _v6,
              totalCount: _v7,
              failedCount: _v8
            } = _v2;
          return _v1.find(({
            state: _v0
          }) => _v4.STATES.VALIDATING === _v0) ? "checking" : _v3 === _v1.length && _v1.length > 0 ? "canceled" : !_v0 && 0 === _v6 && (_v4 === _v1.length && _v1.length > 0 || 0 !== _v7 && _v7 === _v4 || _v8 > _v7) ? _v8 > 0 ? "incomplete" : "complete" : _v5 ? "paused" : "uploading";
        }({
          transcoding: _v1
        }),
        _v4 = (() => {
          let {
            uploads: _v0
          } = (0, _v40.useUploader)();
          return (0, _v2.useMemo)(() => _v0.some(_v0 => {
            let _v1 = _v41({
              upload: _v0
            });
            return _v1?.code === _v4.ERROR_CODES.NETWORK_ERROR;
          }), [_v0]);
        })(),
        {
          uploaderSummary: _v5
        } = (0, _v40.useUploader)(),
        {
          completeCount: _v6,
          failedCount: _v7,
          inProgressCount: _v8,
          totalCount: _v9
        } = _v5,
        _v10 = _v6 + _v8,
        _v11 = _v9 + _v7;
      return (0, _v2.useMemo)(() => {
        if (_v4) return {
          headerText: _v2.noInternetConnection,
          headerSubText: "",
          status: _v3
        };
        switch (_v3) {
          case "canceled":
            return {
              headerText: _v2.uploadsCanceled,
              headerSubText: "",
              status: _v3
            };
          case "checking":
            return {
              headerText: _v2.checkingFiles,
              headerSubText: _v11 > 1 && _v7 > 0 ? _v2.uploadsFailed(_v7) : "",
              status: _v3
            };
          case "paused":
            return {
              headerText: _v2.uploadsPaused(_v11 - _v6),
              headerSubText: "",
              status: _v3
            };
          case "incomplete":
            return {
              headerText: _v2.uploadsIncomplete(_v10, _v11),
              headerSubText: _v11 > 1 && _v7 > 0 ? _v2.uploadsFailed(_v7) : "",
              status: _v3
            };
          case "complete":
            return {
              headerText: _v2.uploadsComplete(_v11),
              headerSubText: _v0 ? `${_v2.location}: ${_v0?.name}` : "",
              status: _v3
            };
          case "uploading":
            {
              let _v0 = Math.max(_v11, _v10);
              return {
                headerText: _v2.uploading(_v10, _v0),
                headerSubText: _v7 > 0 ? _v2.uploadsFailed(_v7) : _v0 ? `${_v2.location}: ${_v0?.name}` : "",
                status: _v3
              };
            }
        }
      }, [_v6, _v0, _v7, _v10, _v11, _v4, _v3, _v2]);
    },
    _v43 = ({
      transcoding: _v0
    }) => {
      let _v1 = (0, _v30.useRouter)(),
        {
          uploads: _v2,
          uploaderSummary: {
            activeCount: _v3,
            failedCount: _v4,
            isCanceled: _v5,
            isComplete: _v6
          }
        } = (0, _v40.useUploader)(),
        _v7 = (({
          upload: _v0
        }) => {
          let _v1 = _v0?.folderId,
            _v2 = (0, _v20.useViewer)(),
            _v3 = _v2?.teamUser?.ownerId ?? _v2?.user?.id ?? 0,
            {
              capabilities: _v4
            } = (0, _v37.useCapability)(["hasContentSpaceEnabled"], _v3),
            _v5 = _v22(),
            {
              data: _v6
            } = (0, _v39.useGetUserProject)(() => _v3 && _v1 ? {
              select: ["name", "manageLink"],
              where: {
                userId: _v3,
                projectId: _v1
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.15"
              }
            } : null),
            {
              data: _v7
            } = (0, _v38.useGetUserFoldersPrivateToMe)(() => _v3 && _v4?.hasContentSpaceEnabled ? {
              where: {
                ownerId: _v3
              },
              select: ["manageLink"]
            } : null);
          return (0, _v2.useMemo)(() => Number.isNaN(_v1) || void 0 === _v1 ? {
            name: _v4?.hasContentSpaceEnabled ? _v5.teamLibrary : _v5.myLibrary,
            uri: _v4?.hasContentSpaceEnabled ? "/library" : _v7?.manageLink,
            folderId: _v1
          } : _v6?.name ? {
            name: "my library" === _v6.name.trim().toLowerCase() ? _v5.myLibrary : _v6.name,
            uri: _v6?.manageLink,
            folderId: _v1
          } : void 0, [_v6?.name, _v6?.manageLink, _v4?.hasContentSpaceEnabled, _v1, _v5, _v7?.manageLink]);
        })({
          upload: _v2.find(({
            state: _v0
          }) => [_v4.STATES.STARTING, _v4.STATES.UPLOADING, _v4.STATES.COMPLETED].includes(_v0))
        }),
        {
          headerText: _v8,
          headerSubText: _v9,
          status: _v10
        } = _v42({
          destination: _v7,
          transcoding: _v0
        }),
        _v11 = (0, _v2.useCallback)(_v0 => {
          if (!_v7?.name || !_v7?.uri || !_v6) return _v0;
          let {
              name: _v1,
              uri: _v2
            } = _v7,
            _v3 = _v0.indexOf(_v1);
          if (_v3 < 0) return _v0;
          let [_v4, _v5] = [_v0.slice(0, _v3), _v0.slice(_v3 + _v1.length)];
          return (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v4, (0, _v1.jsx)(_v31.Link, {
              href: _v2,
              onClick: _v0 => {
                _v0.preventDefault(), _v1.push(_v2);
              },
              display: "inline",
              variant: "inline-primary",
              children: _v1
            }), _v5]
          });
        }, [_v7, _v1, _v6]),
        _v12 = (0, _v2.useMemo)(() => _v6 ? (0, _v1.jsx)(_v33.Checkmark, {
          boxSize: "xs"
        }) : _v5 ? (0, _v1.jsx)(_v35.CloseXCircle, {
          boxSize: "xs"
        }) : _v4 && 0 === _v3 ? (0, _v1.jsx)(_v34.CircleExclamationFilled, {
          color: "status-destructive-primary",
          boxSize: "xs"
        }) : (0, _v1.jsx)(_v36.Upload, {
          boxSize: "xs"
        }), [_v3, _v4, _v5, _v6]);
      return (0, _v1.jsxs)(_v8.Flex, {
        h: (0, _v12.rem)(64),
        alignItems: "center",
        gap: (0, _v12.rem)(12),
        justifyContent: "start",
        children: [_v12, (0, _v1.jsxs)(_v32.VStack, {
          gap: "xs",
          justifyContent: "center",
          alignItems: "start",
          children: [(0, _v1.jsx)(_v11.Text, {
            variant: "heading-sm",
            id: "upload-progress-header",
            size: "xs",
            children: _v11(_v8)
          }), (0, _v1.jsx)(_v11.Text, {
            variant: "body-sm",
            color: _v4 > 0 ? "status-destructive-primary" : void 0,
            size: "xs",
            children: _v11(_v9)
          })]
        })]
      });
    };
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  function _v47({
    value: _v0,
    isShowing: _v1,
    onConfirm: _v2,
    onClose: _v3,
    maxLength: _v4 = 32
  }) {
    let [_v5, _v6] = (0, _v2.useState)(_v0),
      [_v7, _v8] = (0, _v2.useState)(_v1),
      _v9 = (0, _v2.useCallback)(_v0 => {
        _v6(_v0.currentTarget.value);
      }, []),
      _v10 = (0, _v2.useCallback)(() => {
        _v5 && (_v2({
          view: "password",
          password: _v5
        }), _v3());
      }, [_v3, _v2, _v5]);
    return (0, _v1.jsxs)(_v24.Modal, {
      isOpen: _v7,
      onClose: () => _v8(!1),
      children: [(0, _v1.jsx)(_v28.ModalOverlay, {}), (0, _v1.jsxs)(_v25.ModalContent, {
        width: (0, _v12.rem)(360),
        children: [(0, _v1.jsx)(_v27.ModalHeader, {
          children: (0, _v1.jsx)(_v11.Text, {
            variant: "heading-md",
            children: (0, _v17.translate)({
              singular: "Enter password",
              dictionary: {
                es: {
                  singular: "Ingresar la contraseña"
                },
                "de-DE": {
                  singular: "Bitte Kennwort eingeben"
                },
                "fr-FR": {
                  singular: "Saisir mot de passe"
                },
                "ja-JP": {
                  singular: "パスワードを入力"
                },
                "ko-KR": {
                  singular: "비밀번호 입력"
                },
                "pt-BR": {
                  singular: "Digite a senha"
                },
                "zh-CN": {
                  singular: "输入密码"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v45.ModalCloseButton, {
          "aria-label": (0, _v17.translate)({
            singular: "Close",
            dictionary: {
              es: {
                singular: "Cerrar"
              },
              "de-DE": {
                singular: "Schließen"
              },
              "fr-FR": {
                singular: "Fermer "
              },
              "ja-JP": {
                singular: "閉じる"
              },
              "ko-KR": {
                singular: "닫기"
              },
              "pt-BR": {
                singular: "Fechar"
              },
              "zh-CN": {
                singular: "关闭"
              }
            }
          })
        }), (0, _v1.jsx)(_v44.ModalBody, {
          children: (0, _v1.jsx)(_v46.PasswordInput, {
            id: "password-input",
            name: "password-input",
            placeholder: "",
            maxLength: _v4,
            tabIndex: 0,
            onChange: _v9,
            autoFocus: !0,
            isLoading: !1,
            initialValue: _v0,
            hideRightElement: !0
          })
        }), (0, _v1.jsxs)(_v26.ModalFooter, {
          children: [(0, _v1.jsx)(_v23.Button, {
            variant: "tertiary",
            onClick: _v3,
            children: (0, _v17.translate)({
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
          }), (0, _v1.jsx)(_v23.Button, {
            variant: "primary",
            onClick: _v10,
            children: (0, _v17.translate)({
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
  }
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  function _v56({
    privacyOptions: _v0,
    onSelectionChange: _v1,
    isDisabled: _v2 = !1,
    onPrivacyUpsellClick: _v3,
    dropdownPrivacy: _v4
  }) {
    let _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      {
        trackUpsellTrigger: _v10
      } = (_v5 = (0, _v2.useCallback)(() => (0, _v53.buildViewBpContext)({
        view_type: "impression",
        feature: "privacy"
      }), []), _v6 = (0, _v2.useCallback)(() => (0, _v54.buildWebBpContext)({
        page_name: (0, _v49.getPageNameFromPath)(window.location.pathname)
      }), []), _v7 = (0, _v2.useCallback)(() => (0, _v50.buildActionBpContext)({
        action_type: "click",
        feature: "privacy"
      }), []), _v8 = (0, _v2.useCallback)(() => (0, _v51.buildProductAnalyticsBpContext)({
        product: "collaboration",
        feature: "privacy",
        location: "dropdown"
      }), []), _v9 = (0, _v2.useCallback)(() => (0, _v52.buildThirdPartyIntegrationBpContext)({
        is_integration: !1,
        integration_id: null,
        integration_name: null,
        is_partner: !1
      }), []), {
        trackUpsellTriggerImpression: (0, _v2.useCallback)(() => {
          (0, _v55.sendBpEventWithContexts)("vimeo.upsell_trigger_impression", {
            ..._v5(),
            ..._v6()
          }, 38, {
            selected_plan: null,
            purchase_type: null,
            currency: null,
            add_on_feature: null,
            add_on_value: null,
            interface_type: null,
            price: null,
            is_discount: null,
            discount_offer: null,
            promo_code_id: null,
            duration: null,
            upsell_name: null,
            is_dismissible: null
          });
        }, [_v5, _v6]),
        trackUpsellTrigger: (0, _v2.useCallback)(() => {
          (0, _v55.sendBpEventWithContexts)("vimeo.trigger_upsell", {
            ..._v7(),
            ..._v8(),
            ..._v6(),
            ..._v9()
          }, 39, {
            selected_plan: null,
            purchase_type: null,
            currency: null,
            add_on_feature: null,
            add_on_value: null,
            interface_type: null,
            price: null,
            is_discount: null,
            discount_offer: null,
            promo_code_id: null,
            duration: null,
            upsell_name: null,
            is_dismissible: null
          });
        }, [_v7, _v8, _v6, _v9])
      }),
      {
        trackUploadModalPrivacyDropdownClicked: _v11
      } = _v19(),
      [_v12, _v13] = (0, _v2.useState)(void 0),
      _v14 = (0, _v2.useMemo)(() => _v4 ? _v0.find(_v0 => _v0.privacy === _v4) : void 0, [_v4, _v0]);
    return (0, _v2.useEffect)(() => {
      _v14 && _v13(_v0 => _v0?.privacy === _v14.privacy ? _v0 : _v14);
    }, [_v14]), (0, _v1.jsx)(_v48.PrivacyDropdown, {
      isVideoPrivacy: !0,
      hasPortal: !0,
      privacyOptions: _v0,
      activePrivacy: _v4 ?? "",
      isRedirectUpsell: !1,
      onSelect: _v0 => _v1(_v0),
      onMenuToggle: _v0 => {
        _v0 && _v11();
      },
      onUpsellClick: _v0 => {
        _v10(), _v3?.(_v0);
      },
      variant: "outlined",
      showSelectedPrivacyDescription: !1,
      matchWidth: !1,
      isDisabled: _v2,
      lastSelectedPrivacyOption: _v12
    });
  }
  var _v57 = _v0.i(0);
  let _v58 = ({
    transcoding: _v0
  }) => {
    let {
        totalBytes: _v1,
        bytesUploaded: _v2
      } = (0, _v40.useUploader)().uploaderSummary,
      {
        status: _v3
      } = _v42({
        transcoding: _v0
      }),
      _v4 = Math.floor(100 * _v2 / _v1),
      _v5 = (0, _v2.useMemo)(() => {
        switch (_v3) {
          case "incomplete":
            return "status-destructive-primary";
          case "canceled":
            return "var(--vimeo-colors-stroke)";
          default:
            return "text-primary";
        }
      }, [_v3]);
    return (0, _v1.jsx)(_v57.Progress, {
      variant: "neutral",
      size: "xs",
      width: "100%",
      value: "incomplete" === _v3 ? 100 : _v4,
      sx: {
        "> *": {
          backgroundColor: _v5,
          transition: "width 0.6s ease-in-out"
        }
      }
    });
  };
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  let _v64 = () => {
    let _v0 = "u" > typeof navigator ? navigator.userAgent : "";
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(_v0) ? "tablet" : /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(_v0) ? "mobile" : "desktop";
  };
  function _v65({
    isCanceling: _v0,
    isPaused: _v1,
    page: _v2,
    pauseAll: _v3,
    resumeAll: _v4,
    toggleIsCanceling: _v5,
    isUploading: _v6
  }) {
    let _v7 = _v64(),
      _v8 = window.location.pathname,
      {
        trackUploadModalMoreActionsOpened: _v9,
        trackUploadModalPauseAllClicked: _v10,
        trackUploadModalCancelAllClicked: _v11
      } = _v19();
    return (0, _v1.jsx)(_v8.Flex, {
      gap: "sm",
      children: (0, _v1.jsxs)(_v59.Menu, {
        placement: "left",
        onOpen: () => _v9(),
        children: [(0, _v1.jsx)(_v60.MenuButton, {
          as: _v9.IconButton,
          "aria-label": (0, _v17.translate)({
            singular: "Upload controls",
            dictionary: {
              es: {
                singular: "Controles de carga"
              },
              "de-DE": {
                singular: "Steuerungen hochladen"
              },
              "fr-FR": {
                singular: "Commandes de téléchargement"
              },
              "ja-JP": {
                singular: "アップロード管理"
              },
              "ko-KR": {
                singular: "업로드 제어"
              },
              "pt-BR": {
                singular: "Controles de carregamento"
              },
              "zh-CN": {
                singular: "上传控件"
              }
            }
          }),
          variant: "tertiary",
          size: "sm",
          icon: (0, _v1.jsx)(_v63.EllipsisV, {})
        }), (0, _v1.jsxs)(_v62.MenuList, {
          children: [_v1 ? (0, _v1.jsx)(_v61.MenuItem, {
            onClick: () => {
              _v4(), _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo.click", 140, {
                copy: null,
                feature: "embeddable_uploader",
                location: "embeddable_uploader",
                name: "restart_upload",
                page: _v2,
                target: null,
                type: "general",
                target_path: null,
                click_type: "click",
                device_type: _v7,
                path: _v8,
                third_party_integration: null
              }));
            },
            children: (0, _v17.translate)({
              singular: "Resume all",
              dictionary: {
                es: {
                  singular: "Reanudar todo"
                },
                "de-DE": {
                  singular: "Mit allem fortfahren"
                },
                "fr-FR": {
                  singular: "Tout reprendre"
                },
                "ja-JP": {
                  singular: "すべて再開"
                },
                "ko-KR": {
                  singular: "모두 재개"
                },
                "pt-BR": {
                  singular: "Retomar tudo"
                },
                "zh-CN": {
                  singular: "全部恢复"
                }
              }
            })
          }) : (0, _v1.jsx)(_v61.MenuItem, {
            disabled: !_v6,
            onClick: () => {
              _v10(), _v3(), _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo.click", 140, {
                copy: null,
                feature: "embeddable_uploader",
                location: "embeddable_uploader",
                name: "pause_upload",
                page: _v2,
                target: null,
                type: "general",
                target_path: null,
                click_type: "click",
                device_type: _v7,
                path: _v8,
                third_party_integration: null
              }));
            },
            children: (0, _v17.translate)({
              singular: "Pause all",
              dictionary: {
                es: {
                  singular: "Pausar todo"
                },
                "de-DE": {
                  singular: "Alle pausieren"
                },
                "fr-FR": {
                  singular: "Tout mettre sur pause"
                },
                "ja-JP": {
                  singular: "すべて停止"
                },
                "ko-KR": {
                  singular: "모두 일시 중지"
                },
                "pt-BR": {
                  singular: "Pausar tudo"
                },
                "zh-CN": {
                  singular: "全部暂停"
                }
              }
            })
          }), (0, _v1.jsx)(_v61.MenuItem, {
            onClick: _v0 ? void 0 : () => {
              _v11(), _v5();
            },
            color: "critical",
            children: (0, _v17.translate)({
              singular: "Cancel all",
              dictionary: {
                es: {
                  singular: "Cancelar todo"
                },
                "de-DE": {
                  singular: "Alles abbrechen"
                },
                "fr-FR": {
                  singular: "Tout annuler"
                },
                "ja-JP": {
                  singular: "すべてキャンセル"
                },
                "ko-KR": {
                  singular: "모두 취소"
                },
                "pt-BR": {
                  singular: "Cancelar tudo"
                },
                "zh-CN": {
                  singular: "全部取消"
                }
              }
            })
          })]
        })]
      })
    });
  }
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0);
  function _v68({
    onUpload: _v0
  }) {
    let _v1 = (0, _v2.useRef)(null),
      {
        trackUploadModalUploadMoreClicked: _v2
      } = _v19();
    return (0, _v1.jsx)(_v13.Tooltip, {
      content: (0, _v17.translate)({
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
      placement: "top",
      children: (0, _v1.jsx)(_v66.FileInput, {
        ref: _v1,
        onChange: _v0 => {
          let _v1 = _v0.target.files;
          _v1 && _v1.length > 0 && (_v0(_v1), _v1.current && (_v1.current.value = ""));
        },
        onClick: () => _v2(),
        label: (0, _v1.jsx)(_v8.Flex, {
          justifyContent: "center",
          width: "md",
          children: (0, _v1.jsx)(_v67.Plus, {})
        }),
        size: "md",
        sx: {
          padding: 0
        },
        variant: "minimal",
        multiple: !0
      })
    });
  }
  var _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  let _v78 = ({
    upload: _v0
  }) => {
    let _v1 = _v41({
      upload: _v0
    });
    return (0, _v1.jsx)(_v11.Text, {
      variant: "body-sm",
      color: "status-destructive-primary",
      children: _v1?.description
    });
  };
  var _v79 = _v0.i(0);
  let _v80 = ({
      upload: _v0
    }) => {
      let _v1 = (0, _v2.useRef)(void 0),
        _v2 = Math.ceil(_v0.bytesUploaded / _v0.initialSize * 10);
      (0, _v2.useEffect)(() => (_v0.file instanceof File && (_v1.current = new _v79.ThumbnailGenerator(_v0.file)), () => {
        _v1.current && _v1.current.removeAllListeners();
      }), [_v0.file, _v0.id]);
      let _v3 = (_v0.file instanceof File ? "" : _v0.file.thumbnailLink) || "https://i.vimeocdn.com/video/default-2308240_92x56";
      return _v1.current && _v1.current.frames.length && (_v3 = _v1.current.frames[_v2] ? _v1.current.frames[_v2] : _v1.current.frames[_v1.current.frames.length - 1]), (0, _v1.jsx)(_v8.Flex, {
        borderRadius: "xs",
        minHeight: (0, _v12.rem)(40),
        minWidth: (0, _v12.rem)(72),
        maxHeight: (0, _v12.rem)(40),
        maxWidth: (0, _v12.rem)(72),
        backgroundImage: _v3,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "stroke"
      });
    },
    _v81 = /\.(mp4|avi|mov|wmv|flv|MP4|AVI|MOV|WMV|FLV)$/;
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  let _v85 = _v0 => (0, _v1.jsx)(_v84.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm-1 13c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6Zm4 0c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1v6Z",
      fill: "currentColor"
    })
  });
  var _v86 = _v0.i(0);
  let _v87 = (0, _v2.forwardRef)(({
      isHover: _v0,
      upload: _v1,
      isPaused: _v2,
      clearUpload: _v3,
      onEditClick: _v4
    }, _v5) => {
      let {
          isActive: _v6,
          activate: _v7
        } = (({
          seconds: _v0 = 5
        } = {
          seconds: 5
        }) => {
          let [_v1, _v2] = (0, _v2.useState)(!1);
          return (0, _v2.useEffect)(() => {
            if (_v1) {
              let _v0 = setTimeout(() => _v2(!1), 0 * _v0);
              return () => clearTimeout(_v0);
            }
          }, [_v1, _v2, _v0]), {
            isActive: _v1,
            activate: () => _v2(!0)
          };
        })(),
        _v8 = (0, _v86.useIsMobile)(),
        {
          trackUploadModalVideoRemoved: _v9
        } = _v19(),
        _v10 = _v1.state === _v4.STATES.COMPLETED;
      if (_v10 || _v0 && !_v8 || _v6 && _v8) {
        let _v0 = _v10 ? _v83.EditPencil : _v35.CloseXCircle,
          _v1 = _v10 ? (0, _v17.translate)({
            singular: "Manage",
            dictionary: {
              es: {
                singular: "Administrar"
              },
              "de-DE": {
                singular: "Verwalten"
              },
              "fr-FR": {
                singular: "Gérer"
              },
              "ja-JP": {
                singular: "管理"
              },
              "ko-KR": {
                singular: "관리"
              },
              "pt-BR": {
                singular: "Gerenciar"
              },
              "zh-CN": {
                singular: "管理"
              }
            }
          }) : (0, _v17.translate)({
            singular: "Clear",
            dictionary: {
              es: {
                singular: "Borrar"
              },
              "de-DE": {
                singular: "Löschen"
              },
              "fr-FR": {
                singular: "Effacer"
              },
              "ja-JP": {
                singular: "クリア"
              },
              "ko-KR": {
                singular: "비우기"
              },
              "pt-BR": {
                singular: "Limpar"
              },
              "zh-CN": {
                singular: "清除"
              }
            }
          }),
          _v2 = _v10 ? _v0 => {
            _v0.stopPropagation(), _v4?.(_v1);
          } : _v0 => {
            _v0.stopPropagation(), _v9(), _v3(_v1);
          };
        return (0, _v1.jsx)("div", {
          ref: _v5,
          style: {
            minWidth: "32px"
          },
          children: (0, _v1.jsx)(_v13.Tooltip, {
            label: _v1,
            placement: "top",
            shouldWrapChildren: !0,
            children: (0, _v1.jsx)(_v9.IconButton, {
              "aria-label": _v1,
              icon: (0, _v1.jsx)(_v0, {
                color: "text-primary",
                boxSize: "xs"
              }),
              variant: "tertiary",
              size: "sm",
              onClick: _v2
            })
          })
        });
      }
      let _v11 = _v8 ? {
          onClick: _v7
        } : {},
        _v12 = null;
      switch (_v1.state) {
        case _v4.STATES.FAILED:
          _v12 = (0, _v1.jsx)(_v34.CircleExclamationFilled, {
            boxSize: "xs",
            color: "status-destructive-primary",
            ..._v11
          });
          break;
        case _v4.STATES.CANCELED:
          break;
        default:
          if (_v2) _v12 = (0, _v1.jsx)(_v85, {
            boxSize: "xs"
          });else {
            let _v0 = Math.floor(100 * _v1.bytesUploaded / _v1.initialSize);
            _v12 = (0, _v1.jsx)(_v82.CircularProgress, {
              size: "sm",
              value: _v0,
              color: "text-primary",
              ..._v11
            });
          }
      }
      return (0, _v1.jsx)("div", {
        ref: _v5,
        style: {
          minWidth: "32px"
        },
        children: _v12
      });
    }),
    _v88 = (_v0, _v1 = 0, _v2 = !1) => {
      if (null === _v0) return "";
      let _v3 = 0;
      for (_v3 = 0; _v0 >= 0 && _v3 < 4; _v3++) _v0 /= 0;
      let _v4 = ["B", "KB", "MB", "GB", "TB"][_v3];
      ("GB" === _v4 || "TB" === _v4) && _v0 % 1 >= .1 && (_v1 = 1);
      let _v5 = _v2 ? " " : "";
      switch (_v4) {
        case "B":
          return (0, _v17.translate)({
            singular: "{BYTE_SIZE}{SPACE}B",
            replacements: {
              BYTE_SIZE: _v0.toFixed(_v1),
              SPACE: _v5
            }
          });
        case "KB":
          return (0, _v17.translate)({
            singular: "{BYTE_SIZE}{SPACE}KB",
            replacements: {
              BYTE_SIZE: _v0.toFixed(_v1),
              SPACE: _v5
            }
          });
        case "MB":
          return (0, _v17.translate)({
            singular: "{BYTE_SIZE}{SPACE}MB",
            replacements: {
              BYTE_SIZE: _v0.toFixed(_v1),
              SPACE: _v5
            }
          });
        case "GB":
          return (0, _v17.translate)({
            singular: "{BYTE_SIZE}{SPACE}GB",
            replacements: {
              BYTE_SIZE: _v0.toFixed(_v1),
              SPACE: _v5
            }
          });
        case "TB":
          return (0, _v17.translate)({
            singular: "{BYTE_SIZE}{SPACE}TB",
            replacements: {
              BYTE_SIZE: _v0.toFixed(_v1),
              SPACE: _v5
            }
          });
        default:
          return _v0;
      }
    },
    _v89 = {
      zIndex: 2,
      backgroundColor: "none",
      cursor: "default"
    },
    _v90 = "changes-saved-toast",
    _v91 = "changes-could-not-be-saved-toast",
    _v92 = ({
      upload: _v0,
      isPaused: _v1,
      isCanceled: _v2,
      disabled: _v3,
      uploadEta: _v4,
      dropdownPrivacy: _v5,
      password: _v6,
      activeClipId: _v7,
      activeClipPrivacy: _v8,
      revalidatePrivacy: _v9,
      clearUpload: _v10,
      onShareClick: _v11,
      onUploadClick: _v12,
      onEditClick: _v13
    }) => {
      let {
          trackUploadModalShareClicked: _v14
        } = _v19(),
        _v15 = (0, _v71.useToast)(),
        _v16 = (0, _v2.useRef)(_v15),
        _v17 = (0, _v2.useRef)(null),
        {
          videoPrivacy: _v18,
          updateVideoPrivacy: _v19,
          mutate: _v20,
          isPatchLoading: _v21,
          patchCalled: _v22,
          patchData: _v23,
          patchError: _v24
        } = (_v0 => {
          let {
              trackPrivacyChanged: _v1
            } = (0, _v77.useViewPrivacyChangeTracking)(),
            [_v2, {
              data: _v3,
              called: _v4,
              loading: _v5,
              error: _v6
            }] = (0, _v76.usePatchVideo)(),
            {
              data: _v7,
              mutate: _v8
            } = (0, _v76.useGetVideo)(() => _v0 ? {
              select: ["name", "privacy.view", "password", "link"],
              where: {
                videoId: Number(_v0)
              },
              headers: {
                Accept: "application/vnd.vimeo.*+json;version=3.4.1"
              }
            } : null),
            _v9 = async (_v0, _v1) => {
              if (!_v0) return;
              let _v2 = _v7?.privacy?.view ?? null;
              await _v2({
                where: {
                  videoId: Number(_v0)
                },
                select: ["privacy.view"],
                variables: {
                  privacy: {
                    view: _v0
                  },
                  password: _v1 || void 0
                }
              }), _v2 !== _v0 && _v1({
                entityType: "video",
                previousPrivacy: _v2,
                newPrivacy: _v0
              }), _v8(_v0 => _v0 ? {
                ..._v0,
                privacy: {
                  ..._v0.privacy,
                  view: _v0
                },
                password: _v1 || void 0
              } : _v0);
            };
          return {
            videoPrivacy: _v7?.privacy?.view,
            updateVideoPrivacy: _v9,
            mutate: _v8,
            isPatchLoading: _v5,
            patchCalled: _v4,
            patchData: _v3,
            patchError: _v6
          };
        })(_v0.clipId),
        _v25 = (0, _v2.useCallback)(_v0 => {
          _v0?.target?.contains(_v17.current) || _v12?.(_v0);
        }, [_v12, _v0]),
        _v26 = _v9?.clipId === _v0.clipId && _v9.privacy !== _v18 || _v0.clipId === _v7 && _v8 !== _v18;
      (0, _v2.useEffect)(() => {
        _v22 && !_v21 && (_v24 ? _v16.current.isActive(_v91) || _v16.current({
          id: _v91,
          duration: 0,
          title: (0, _v17.translate)({
            singular: "Changes could not be saved",
            dictionary: {
              es: {
                singular: "No se pudieron guardar los cambios"
              },
              "de-DE": {
                singular: "Änderungen konnten nicht gespeichert werden"
              },
              "fr-FR": {
                singular: "Les modifications n'ont pas pu être enregistrées"
              },
              "ja-JP": {
                singular: "変更を保存できませんでした"
              },
              "ko-KR": {
                singular: "변경 사항이 저장되지 않았습니다"
              },
              "pt-BR": {
                singular: "As alterações não puderam ser salvas"
              },
              "zh-CN": {
                singular: "无法保存更改"
              }
            }
          })
        }) : _v23 && !_v16.current.isActive(_v90) && _v16.current({
          id: _v90,
          title: (0, _v17.translate)({
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
          duration: 0
        }));
      }, [_v22, _v23, _v24, _v21]), (0, _v2.useEffect)(() => {
        _v26 && _v20();
      }, [_v26, _v20]), (0, _v2.useEffect)(() => {
        _v0.clipId && _v5 && _v18 !== _v5 && _v19(_v5, _v6);
      }, [_v5, _v0.clipId, _v6]);
      let {
          isOpen: _v27,
          onOpen: _v28,
          onClose: _v29
        } = (0, _v14.useDisclosure)(),
        _v30 = (0, _v2.useMemo)(() => {
          let _v0 = "";
          if (_v2 || _v0.state === _v4.STATES.CANCELED) _v0 = (0, _v17.translate)({
            singular: "Canceled",
            dictionary: {
              es: {
                singular: "Cancelada"
              },
              "de-DE": {
                singular: "Abgebrochen"
              },
              "fr-FR": {
                singular: "Annulé"
              },
              "ja-JP": {
                singular: "キャンセルしました"
              },
              "ko-KR": {
                singular: "취소됨"
              },
              "pt-BR": {
                singular: "Cancelado"
              },
              "zh-CN": {
                singular: "已取消"
              }
            }
          });else if (_v1 && _v0.state !== _v4.STATES.COMPLETED) _v0 = (0, _v17.translate)({
            singular: "Paused",
            dictionary: {
              es: {
                singular: "En pausa"
              },
              "de-DE": {
                singular: "Pausiert"
              },
              "fr-FR": {
                singular: "En pause"
              },
              "ja-JP": {
                singular: "一時停止しました"
              },
              "ko-KR": {
                singular: "일시 정지:"
              },
              "pt-BR": {
                singular: "Pausado"
              },
              "zh-CN": {
                singular: "已暂停"
              }
            }
          });else switch (_v0.state) {
            case _v4.STATES.UPLOADING:
              if (void 0 !== _v4) {
                let _v0 = Math.floor(100 * _v0.bytesUploaded / _v0.initialSize);
                if (_v4 < 2) _v0 = _v0 > 75 ? (0, _v17.translate)({
                  singular: "Almost done",
                  dictionary: {
                    es: {
                      singular: "Ya casi terminamos"
                    },
                    "de-DE": {
                      singular: "Fast fertig"
                    },
                    "fr-FR": {
                      singular: "C'est presque fini"
                    },
                    "ja-JP": {
                      singular: "もうすぐ完了"
                    },
                    "ko-KR": {
                      singular: "거의 다 되었습니다."
                    },
                    "pt-BR": {
                      singular: "Falta pouco"
                    },
                    "zh-CN": {
                      singular: "即将完成"
                    }
                  }
                }) : (0, _v17.translate)({
                  singular: "Starting",
                  dictionary: {
                    es: {
                      singular: "Comenzar"
                    },
                    "de-DE": {
                      singular: "Wird gestartet"
                    },
                    "fr-FR": {
                      singular: "Démarrage"
                    },
                    "ja-JP": {
                      singular: "起動中"
                    },
                    "ko-KR": {
                      singular: "시작 중"
                    },
                    "pt-BR": {
                      singular: "Iniciando"
                    },
                    "zh-CN": {
                      singular: "正在启动"
                    }
                  }
                });else {
                  let _v0 = _v88(_v0.bytesUploaded, 1, !0),
                    _v1 = _v88(_v0.initialSize, 1, !0);
                  _v0 = (0, _v17.translate)({
                    singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - {ETA} left",
                    replacements: {
                      UPLOADED_SIZE: _v0,
                      TOTAL_SIZE: _v1,
                      ETA: ((_v0, _v1 = !1) => {
                        let _v2 = Math.floor(_v0 / 0),
                          _v3 = Math.floor(_v0 % 0 / 60),
                          _v4 = _v2 > 0 ? _v2 + " hr" : "",
                          _v5 = _v3 > 0 ? _v3 + " min" : "",
                          _v6 = Math.floor(_v0 % 0 % 60) + " sec";
                        return _v1 ? _v2 > 0 ? _v4 : _v3 > 0 ? _v5 : _v6 : _v2 > 0 ? _v4 + " " + _v5 + " " + _v6 : _v3 > 0 ? _v5 + " " + _v6 : _v6;
                      })(_v4, !0)
                    },
                    dictionary: {
                      es: {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - {ETA} restantes"
                      },
                      "de-DE": {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - noch {ETA}"
                      },
                      "fr-FR": {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - il reste {ETA}"
                      },
                      "ja-JP": {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - 残り {ETA}"
                      },
                      "ko-KR": {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - {ETA} 남음"
                      },
                      "pt-BR": {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - faltam {ETA}"
                      },
                      "zh-CN": {
                        singular: "{UPLOADED_SIZE} / {TOTAL_SIZE} - 剩余 {ETA}"
                      }
                    }
                  });
                }
              }
              break;
            case _v4.STATES.COMPLETED:
              _v0 = (0, _v17.translate)({
                singular: "Complete",
                dictionary: {
                  es: {
                    singular: "Completa"
                  },
                  "de-DE": {
                    singular: "Abgeschlossen"
                  },
                  "fr-FR": {
                    singular: "Terminé"
                  },
                  "ja-JP": {
                    singular: "完了"
                  },
                  "ko-KR": {
                    singular: "완료"
                  },
                  "pt-BR": {
                    singular: "Completo"
                  },
                  "zh-CN": {
                    singular: "完整"
                  }
                }
              });
              break;
            case _v4.STATES.ATTACHING:
              _v0 = (0, _v17.translate)({
                singular: "Attaching",
                dictionary: {
                  es: {
                    singular: "Adjuntar"
                  },
                  "de-DE": {
                    singular: "Wird angehängt"
                  },
                  "fr-FR": {
                    singular: "Ajout en cours"
                  },
                  "ja-JP": {
                    singular: "アップロード中"
                  },
                  "ko-KR": {
                    singular: "첨부 중"
                  },
                  "pt-BR": {
                    singular: "Anexando"
                  },
                  "zh-CN": {
                    singular: "正在连接"
                  }
                }
              });
              break;
            case _v4.STATES.STARTING:
              _v0 = (0, _v17.translate)({
                singular: "Starting",
                dictionary: {
                  es: {
                    singular: "Comenzar"
                  },
                  "de-DE": {
                    singular: "Wird gestartet"
                  },
                  "fr-FR": {
                    singular: "Démarrage"
                  },
                  "ja-JP": {
                    singular: "起動中"
                  },
                  "ko-KR": {
                    singular: "시작 중"
                  },
                  "pt-BR": {
                    singular: "Iniciando"
                  },
                  "zh-CN": {
                    singular: "正在启动"
                  }
                }
              });
              break;
            case _v4.STATES.FAILED:
              _v0 = (0, _v17.translate)({
                singular: "Error",
                dictionary: {
                  "de-DE": {
                    singular: "Fehler"
                  },
                  "fr-FR": {
                    singular: "Erreur"
                  },
                  "ja-JP": {
                    singular: "エラー"
                  },
                  "ko-KR": {
                    singular: "오류"
                  },
                  "pt-BR": {
                    singular: "Erro"
                  },
                  "zh-CN": {
                    singular: "错误"
                  }
                }
              });
              break;
            default:
              _v0 = (0, _v17.translate)({
                singular: "Waiting",
                dictionary: {
                  es: {
                    singular: "Esperando"
                  },
                  "de-DE": {
                    singular: "Wartet"
                  },
                  "fr-FR": {
                    singular: "En attente"
                  },
                  "ja-JP": {
                    singular: "待機中"
                  },
                  "ko-KR": {
                    singular: "대기 중"
                  },
                  "pt-BR": {
                    singular: "Aguardando"
                  },
                  "zh-CN": {
                    singular: "请稍候"
                  }
                }
              });
          }
          return _v0;
        }, [_v2, _v0.state, _v0.bytesUploaded, _v0.initialSize, _v1, _v4, _v18]);
      return (0, _v1.jsx)(_v8.Flex, {
        backgroundColor: _v27 ? "fill-component-hover" : "",
        px: "md",
        py: "xs",
        flexDirection: "column",
        children: (0, _v1.jsxs)(_v8.Flex, {
          as: _v69.motion.div,
          onClick: !_v3 && (0, _v70.default)(_v12) ? _v25 : void 0,
          alignItems: "center",
          cursor: "pointer",
          gap: "sm",
          height: (0, _v12.rem)(42),
          justifyContent: "space-between",
          transition: {
            transform: !_v3 && (0, _v70.default)(_v12) ? "100ms ease-in-out" : void 0
          },
          sx: {
            ...(_v3 ? _v89 : {})
          },
          onMouseEnter: _v28,
          onMouseLeave: _v29,
          children: [(0, _v1.jsx)(_v80, {
            upload: _v0
          }), (0, _v1.jsxs)(_v72.Box, {
            overflow: "hidden",
            width: "100%",
            children: [(0, _v1.jsx)(_v73.Header, {
              className: "embeddable-uploader-file-name",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              size: "xs",
              children: _v0.file.name.replace(_v81, "")
            }), (0, _v1.jsxs)(_v8.Flex, {
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              height: "auto",
              margin: "0 auto",
              flexWrap: "wrap",
              children: [_v0.state !== _v4.STATES.FAILED ? _v21 ? (0, _v1.jsx)(_v74.Skeleton, {
                mt: "xs",
                width: (0, _v12.rem)(50),
                height: (0, _v12.rem)(12),
                variant: "text"
              }) : (0, _v1.jsx)(_v1.Fragment, {
                children: _v0.state === _v4.STATES.COMPLETED ? (0, _v1.jsxs)(_v11.Text, {
                  variant: "body-sm",
                  className: "embeddable-uploader-progress-text",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: (0, _v12.rem)(3),
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  children: [(0, _v1.jsx)(_v75.CircleCheckFilled, {
                    color: "text-primary",
                    boxSize: "2xs",
                    flexShrink: 0
                  }), _v30]
                }) : (0, _v1.jsx)(_v11.Text, {
                  variant: "body-sm",
                  className: "embeddable-uploader-progress-text",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  children: _v30
                })
              }) : null, _v0.state === _v4.STATES.FAILED && (0, _v1.jsx)(_v8.Flex, {
                children: (0, _v1.jsx)(_v78, {
                  upload: _v0
                })
              })]
            })]
          }), (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v0.clipId && (0, _v1.jsx)(_v23.Button, {
              variant: "secondary",
              size: "sm",
              onClick: _v0 => {
                _v0.stopPropagation(), _v14(), _v11?.(_v0);
              },
              children: (0, _v17.translate)({
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
              })
            }), (0, _v1.jsx)(_v87, {
              ref: _v17,
              isHover: _v27,
              upload: _v0,
              isPaused: _v1,
              clearUpload: _v10,
              onEditClick: _v13
            })]
          })]
        })
      });
    };
  function _v93({
    uploads: _v0,
    isPaused: _v1,
    isCanceled: _v2,
    revalidatePrivacy: _v3,
    onUploadClick: _v4,
    onShareClick: _v5,
    onEditClick: _v6,
    clearUpload: _v7,
    uploadEta: _v8,
    dropdownPrivacy: _v9,
    password: _v10,
    clipId: _v11,
    clipPrivacy: _v12
  }) {
    return (0, _v1.jsx)(_v8.Flex, {
      role: "list",
      tabIndex: 0,
      gap: "sm",
      flexDirection: "column",
      maxHeight: (0, _v12.rem)(650),
      overflowX: "hidden",
      maxWidth: (0, _v12.rem)(466),
      paddingBottom: "md",
      children: _v0.map(_v0 => (0, _v1.jsx)(_v92, {
        disabled: !_v0.clipId || _v0.state === _v4.STATES.CANCELED || _v0.state === _v4.STATES.FAILED,
        upload: _v0,
        isPaused: _v1,
        isCanceled: _v2,
        onUploadClick: _v4,
        onShareClick: _v5,
        onEditClick: _v6,
        clearUpload: _v7,
        uploadEta: _v8,
        dropdownPrivacy: _v9,
        password: _v10,
        activeClipId: _v11,
        activeClipPrivacy: _v12,
        revalidatePrivacy: _v3
      }, _v0.id))
    });
  }
  let _v94 = "UPLOADER_STATE_UPDATE",
    _v95 = "SET_HIDE_ROWS",
    _v96 = "SET_IS_CANCELING",
    _v97 = "SET_SHOW_UPLOAD_CONTROLS",
    _v98 = "RESET",
    _v99 = {
      hideRows: !1,
      isCanceling: !1,
      isCanceled: !1,
      isComplete: !1,
      showDropdown: !1,
      showUploadControls: !0,
      transcoding: !1,
      error: ""
    };
  function _v100(_v0, _v1) {
    switch (_v1.type) {
      case _v95:
        return {
          ..._v0,
          hideRows: _v1.payload
        };
      case _v96:
        return {
          ..._v0,
          isCanceling: _v1.payload
        };
      case "SET_SHOW_DROPDOWN":
        return {
          ..._v0,
          showDropdown: _v1.payload
        };
      case _v97:
        return {
          ..._v0,
          showUploadControls: _v1.payload
        };
      case "SET_ERROR":
        return {
          ..._v0,
          error: _v1.payload
        };
      case _v94:
        return {
          ..._v0,
          ..._v1.payload
        };
      case "SET_TRANSCODING":
        return {
          ..._v0,
          transcoding: _v1.payload
        };
      case _v98:
        return _v99;
      default:
        return console.warn(`ProgressWidget does not recognize the action type ${_v1.type}`), _v0;
    }
  }
  function _v101({
    privacyOptions: _v0,
    showPrivacySettings: _v1 = !0,
    page: _v2 = "",
    clipId: _v3,
    revalidatePrivacy: _v4,
    getPrivacyState: _v5,
    onClose: _v6,
    onPrivacyUpsellClick: _v7,
    onShareClick: _v8,
    onUploadClick: _v9,
    onEditClick: _v10,
    setPrivacy: _v11,
    defaultFolderId: _v12,
    showEmbedToggle: _v13,
    isEmbeddable: _v14,
    onEmbedToggle: _v15
  }) {
    let _v16,
      [{
        hideRows: _v17,
        isCanceling: _v18,
        isCanceled: _v19,
        isComplete: _v20,
        showUploadControls: _v21,
        transcoding: _v22
      }, _v23] = (0, _v2.useReducer)(_v100, _v99),
      _v24 = (0, _v20.useViewer)(),
      _v25 = (0, _v2.useRef)(void 0),
      [_v26, _v27] = (0, _v2.useState)(""),
      [_v28, _v29] = (0, _v2.useState)(void 0),
      {
        isOpen: _v30,
        onOpen: _v31,
        onClose: _v32
      } = (0, _v14.useDisclosure)(),
      {
        isOpen: _v33,
        onOpen: _v34,
        onClose: _v35
      } = (0, _v14.useDisclosure)(),
      {
        uploads: _v36,
        uploaderSummary: _v37,
        cancelAll: _v38,
        clearAll: _v39,
        resumeAll: _v40,
        pauseAll: _v41,
        clear: _v42,
        upload: _v43
      } = (0, _v40.useUploader)(),
      {
        trackUploadModalMinimizeClicked: _v44,
        trackUploadModalDismissed: _v45,
        trackUploadModalPrivacyChanged: _v46
      } = _v19(),
      {
        activeCount: _v47,
        canceledCount: _v48,
        completeCount: _v49,
        failedCount: _v50,
        isPaused: _v51,
        eta: _v52
      } = _v37,
      _v53 = _v36.reduce((_v0, _v1) => _v0 || _v1.state === _v4.STATES.UPLOADING, !1),
      _v54 = (0, _v2.useMemo)(() => {
        let _v0 = _v36.filter(_v0 => _v0.state !== _v4.STATES.CANCELED && _v0.state !== _v4.STATES.FAILED),
          _v1 = _v0.length > 0 && _v0.every(_v0 => !!_v0.clipId);
        return _v20 || _v1;
      }, [_v36, _v20]),
      _v55 = (0, _v2.useMemo)(() => _v36.some(_v0 => !!_v0.clipId), [_v36]),
      _v56 = _v26 || _v5().view || "",
      _v57 = _v22(),
      _v58 = (0, _v2.useCallback)(() => {
        _v45(), "function" == typeof _v6 && _v6(), _v23({
          type: _v98
        }), _v39(), _v35();
      }, [_v39, _v35, _v6, _v45]),
      _v59 = (0, _v2.useCallback)(() => {
        _v23({
          type: _v96,
          payload: !_v18
        });
      }, [_v18]),
      _v60 = (0, _v2.useCallback)(() => {
        _v17 || _v44(), _v23({
          type: _v95,
          payload: !_v17
        });
      }, [_v17, _v44]),
      _v61 = (0, _v2.useCallback)(() => _v23({
        type: _v96,
        payload: !1
      }), []),
      _v62 = (0, _v2.useCallback)(_v0 => {
        _v42(_v0);
      }, [_v42]),
      _v63 = (0, _v2.useCallback)(_v0 => {
        0 === _v37.activeCount && _v39(), _v43(_v0, {
          targetUserId: _v24?.teamUser?.ownerId,
          folderId: _v12
        });
      }, [_v39, _v12, _v43, _v37.activeCount, _v24?.teamUser?.ownerId]),
      _v64 = (0, _v2.useCallback)(_v0 => {
        _v46({
          uploadModalPrivacyNewValue: _v0
        });
        let _v1 = _v5(),
          _v2 = _v0.find(_v0 => _v0.privacy === _v0);
        _v2 && !_v2?.showUpsell && ("password" !== _v0 && (_v29(void 0), _v27(_v0)), "password" === _v0 ? _v31() : (_v1 = {
          ..._v1,
          password: ""
        }, _v32(), _v55 && _v11({
          ..._v1,
          view: _v0
        })));
      }, [_v55, _v0, _v5, _v11, _v32, _v31, _v46]),
      _v65 = (0, _v2.useCallback)(() => {
        _v61(), _v38(), _v5.BigPictureClient.sendEvent(new _v5.Event("vimeo.click", 140, {
          copy: null,
          feature: "embeddable_uploader",
          location: "embeddable_uploader",
          name: "cancel_upload",
          page: _v2,
          target: null,
          type: "general",
          target_path: null,
          click_type: "click",
          device_type: _v64(),
          path: window.location.pathname,
          third_party_integration: null
        }));
      }, [_v38, _v61, _v2]);
    return (0, _v2.useEffect)(() => {
      _v50 > 0 && _v34();
      let _v0 = 0 === _v50 && 0 === _v47 && _v49 > 0,
        _v1 = _v36.length > 0 && _v48 === _v36.length;
      _v25.current && (window.clearTimeout(_v25.current), _v25.current = void 0), (_v19 !== _v1 || _v20 !== _v0) && _v23({
        type: _v94,
        payload: {
          isComplete: _v0,
          isCanceled: _v1,
          showUploadControls: !(_v0 || _v1)
        }
      }), _v47 > 0 ? (_v35(), _v23({
        type: _v97,
        payload: !0
      })) : (_v34(), _v23({
        type: _v97,
        payload: !1
      }));
    }, [_v47, _v48, _v49, _v50, _v19, _v20, _v21, _v36.length, _v34, _v35]), (0, _v1.jsxs)(_v8.Flex, {
      className: "embeddable-uploader-progress-toast",
      position: "relative",
      zIndex: "10",
      flexDirection: "column",
      background: "fill-blur",
      backdropFilter: "blur(var(--vimeo-blur-lg))",
      borderRadius: "md",
      boxShadow: "var(--vimeo-shadows-md)",
      width: (0, _v12.rem)(400),
      minHeight: (0, _v12.rem)(45),
      overflow: "hidden",
      children: [(0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        padding: "sm",
        paddingLeft: "md",
        justifyContent: "space-between",
        children: [(0, _v1.jsx)(_v43, {
          transcoding: _v22
        }), (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          children: [(0, _v1.jsx)(_v13.Tooltip, {
            label: _v17 ? _v57.expand : _v57.minimize,
            children: (0, _v1.jsx)(_v9.IconButton, {
              "aria-label": _v17 ? _v57.showDialog : _v57.hideDialog,
              onClick: _v60,
              icon: _v17 ? (0, _v1.jsx)(_v16.ChevronUp, {
                boxSize: (0, _v12.rem)(20)
              }) : (0, _v1.jsx)(_v15.ChevronDown, {
                boxSize: (0, _v12.rem)(20)
              }),
              variant: "tertiary",
              color: "text-primary"
            })
          }), _v33 && (0, _v1.jsx)(_v13.Tooltip, {
            label: _v57.close,
            children: (0, _v1.jsx)(_v8.Flex, {
              children: (0, _v1.jsx)(_v6.CloseButton, {
                color: "text-primary",
                id: "progress-toast-dismiss-button",
                size: "sm",
                variant: "tertiary",
                onClick: () => _v58(),
                "aria-label": _v57.closeDialog
              })
            })
          })]
        })]
      }), (0, _v1.jsx)(_v8.Flex, {
        paddingLeft: "sm",
        paddingRight: "sm",
        width: "100%",
        children: (0, _v1.jsx)(_v58, {
          transcoding: _v22
        })
      }), !_v17 && (0, _v1.jsxs)(_v8.Flex, {
        alignItems: "center",
        padding: "md",
        paddingRight: "sm",
        justifyContent: "space-between",
        width: "100%",
        role: "toolbar",
        children: [(0, _v1.jsx)(_v56, {
          isDisabled: !_v1 || 0 === _v0.length,
          onSelectionChange: _v64,
          privacyOptions: _v0,
          onPrivacyUpsellClick: _v7,
          dropdownPrivacy: _v56
        }), _v13 && (_v16 = !_v54, (0, _v1.jsxs)(_v8.Flex, {
          alignItems: "center",
          gap: "xs",
          paddingX: "sm",
          height: "32px",
          transition: "all 120ms ease-in-out 0s",
          outline: "1px solid",
          outlineColor: "input-stroke",
          outlineOffset: "-1px",
          borderRadius: "md",
          opacity: _v16 ? .5 : 1,
          cursor: _v16 ? "not-allowed" : "default",
          _hover: _v16 ? void 0 : {
            outlineColor: "input-stroke-hover"
          },
          children: [(0, _v1.jsx)(_v11.Text, {
            variant: "body-md",
            children: (0, _v17.translate)({
              singular: "Embeddable",
              dictionary: {
                es: {
                  singular: "Insertable"
                },
                "de-DE": {
                  singular: "Einbettbar"
                },
                "fr-FR": {
                  singular: "Intégrable"
                },
                "ja-JP": {
                  singular: "埋め込み可能"
                },
                "ko-KR": {
                  singular: "임베드 가능"
                },
                "pt-BR": {
                  singular: "Incorporável"
                },
                "zh-CN": {
                  singular: "可嵌入"
                }
              }
            })
          }), (0, _v1.jsx)(_v10.Switch, {
            size: "sm",
            isChecked: _v14 ?? !1,
            isDisabled: _v16,
            onChange: _v15,
            "aria-label": (0, _v17.translate)({
              singular: "Toggle embeddable",
              dictionary: {
                es: {
                  singular: "Alternar inserción"
                },
                "de-DE": {
                  singular: "Einbettung umschalten"
                },
                "fr-FR": {
                  singular: "Activer/désactiver l'intégration"
                },
                "ja-JP": {
                  singular: "埋め込みを切り替え"
                },
                "ko-KR": {
                  singular: "임베드 가능 전환"
                },
                "pt-BR": {
                  singular: "Alternar incorporação"
                },
                "zh-CN": {
                  singular: "切换可嵌入"
                }
              }
            })
          })]
        })), _v30 && (0, _v1.jsx)(_v47, {
          value: _v28,
          isShowing: _v30,
          onClose: _v32,
          onConfirm: _v0 => {
            _v29(_v0.password), _v32(), _v27("password"), _v11 && _v55 && _v11?.(_v0);
          },
          maxLength: 32
        }), _v21 ? (0, _v1.jsx)(_v13.Tooltip, {
          label: _v57.moreActions,
          children: (0, _v1.jsx)(_v8.Flex, {
            alignItems: "center",
            position: "relative",
            children: (0, _v1.jsx)(_v65, {
              isCanceling: _v18,
              isPaused: _v51,
              isUploading: _v53,
              pauseAll: _v41,
              resumeAll: _v40,
              toggleIsCanceling: _v59,
              page: _v2
            })
          })
        }) : (0, _v1.jsx)(_v13.Tooltip, {
          label: _v57.uploadMore,
          children: (0, _v1.jsx)(_v8.Flex, {
            children: (0, _v1.jsx)(_v68, {
              onUpload: _v63
            })
          })
        })]
      }), _v18 && (0, _v1.jsx)(_v29, {
        onCancel: _v61,
        onDelete: _v65
      }), (0, _v1.jsx)(_v8.Flex, {
        alignItems: "center",
        justifyContent: "space-between",
        as: _v7.Collapse,
        in: !_v17,
        children: (0, _v1.jsx)(_v93, {
          dropdownPrivacy: _v26,
          revalidatePrivacy: _v4,
          password: "password" === _v26 ? _v28 ?? _v5().password : void 0,
          uploads: _v36,
          isPaused: _v51,
          isCanceled: _v19,
          onUploadClick: _v9,
          onEditClick: _v10,
          clearUpload: _v62,
          onShareClick: _v8,
          uploadEta: _v52,
          clipId: _v3,
          clipPrivacy: _v5()?.view
        })
      })]
    });
  }
  var _v102 = _v0.i(0);
  let _v103 = {
      "disable privacy": {
        feature: "privacy",
        upsell_name: "privacy_settings_hide_from_vimeo",
        location: "embeddable_uploader"
      },
      "password privacy": {
        feature: "privacy",
        upsell_name: "privacy_settings_password",
        location: "embeddable_uploader"
      },
      "unlisted privacy": {
        feature: "privacy",
        upsell_name: "privacy_settings_unlisted_fka_private",
        location: "embeddable_uploader"
      }
    },
    _v104 = {
      "disable privacy": {
        paywallTrigger: "upload_progress_widget_disable_privacy_button",
        paywallLocation: "embeddable_uploader",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      "password privacy": {
        paywallTrigger: "upload_progress_widget_password_privacy_button",
        paywallLocation: "embeddable_uploader",
        paywallType: "popup",
        paywallFeature: "privacy"
      },
      "unlisted privacy": {
        paywallTrigger: "upload_progress_widget_unlisted_privacy_button",
        paywallLocation: "embeddable_uploader",
        paywallType: "popup",
        paywallFeature: "privacy"
      }
    },
    _v105 = ({
      upsellType: _v0,
      isOpen: _v1,
      onClose: _v2
    }) => {
      let _v3 = (0, _v20.useViewer)(),
        _v4 = {
          hidePlansSummary: !0,
          hasFreeFeaturedBanner: !0,
          headerText: "",
          subHeaderText: "",
          planOverrides: {
            starter: {
              featuresList: [(0, _v17.translate)({
                singular: "Customizable video player",
                dictionary: {
                  es: {
                    singular: "Reproductor de video personalizable"
                  },
                  "de-DE": {
                    singular: "Individuell anpassbarer Video-Player "
                  },
                  "fr-FR": {
                    singular: "Player vidéo personnalisable"
                  },
                  "ja-JP": {
                    singular: "カスタマイズ可能な動画プレーヤー"
                  },
                  "ko-KR": {
                    singular: "사용자 지정 가능한 동영상 플레이어"
                  },
                  "pt-BR": {
                    singular: "Video Player customizável"
                  },
                  "zh-CN": {
                    singular: "可定制的视频播放器"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Transfer video files",
                dictionary: {
                  es: {
                    singular: "Transfiera archivos de video"
                  },
                  "de-DE": {
                    singular: "Videodateien übertragen"
                  },
                  "fr-FR": {
                    singular: "Transférer des fichiers vidéo"
                  },
                  "ja-JP": {
                    singular: "動画ファイルを転送"
                  },
                  "ko-KR": {
                    singular: "동영상 파일 전송"
                  },
                  "pt-BR": {
                    singular: "Transferir arquivos de vídeo"
                  },
                  "zh-CN": {
                    singular: "传输视频文件"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Password privacy & unlisted links",
                dictionary: {
                  es: {
                    singular: "Privacidad de la contraseña y enlaces sin listar"
                  },
                  "de-DE": {
                    singular: "Passwortschutz und nicht gelistete Links"
                  },
                  "fr-FR": {
                    singular: "Confidentialité des mots de passe et liens non répertoriés"
                  },
                  "ja-JP": {
                    singular: "パスワードのプライバシーと限定公開リンク"
                  },
                  "ko-KR": {
                    singular: "비밀번호 보호 및 일부 공개 링크"
                  },
                  "pt-BR": {
                    singular: "Privacidade de senha e links não listados"
                  },
                  "zh-CN": {
                    singular: "密码隐私与未公开发布的链接"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Review and collaboration tools",
                dictionary: {
                  es: {
                    singular: "Herramientas de revisión y colaboración"
                  },
                  "de-DE": {
                    singular: "Tools für Prüfung und Zusammenarbeit"
                  },
                  "fr-FR": {
                    singular: "Outils de collaboration et de révision"
                  },
                  "ja-JP": {
                    singular: "レビュー＆共同作業ツール"
                  },
                  "ko-KR": {
                    singular: "리뷰 및 콜라보레이션 도구"
                  },
                  "pt-BR": {
                    singular: "Ferramentas de revisão e colaboração"
                  },
                  "zh-CN": {
                    singular: "审查和协作工具"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Engagement analytics",
                dictionary: {
                  es: {
                    singular: "Estadísticas de interacción"
                  },
                  "de-DE": {
                    singular: "Analysen zur Interaktion"
                  },
                  "fr-FR": {
                    singular: "Analyses liées à l'implication"
                  },
                  "ja-JP": {
                    singular: "エンゲージメント分析"
                  },
                  "ko-KR": {
                    singular: "참여도 분석"
                  },
                  "pt-BR": {
                    singular: "Análise de engajamento"
                  },
                  "zh-CN": {
                    singular: "参与分析"
                  }
                }
              })]
            },
            standard: {
              featuresList: [(0, _v17.translate)({
                singular: "Branding in the player",
                dictionary: {
                  es: {
                    singular: "Presencia de la marca en el reproductor"
                  },
                  "de-DE": {
                    singular: "Branding im Player"
                  },
                  "fr-FR": {
                    singular: "Branding dans le lecteur"
                  },
                  "ja-JP": {
                    singular: "プレーヤー内でのブランディング"
                  },
                  "ko-KR": {
                    singular: "플레이어 내 브랜딩"
                  },
                  "pt-BR": {
                    singular: "Presença da marca no player"
                  },
                  "zh-CN": {
                    singular: "播放器中的品牌标识"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Third party player support",
                dictionary: {
                  es: {
                    singular: "Compatibilidad con reproductores de terceros"
                  },
                  "de-DE": {
                    singular: "Support für externe Video-Player"
                  },
                  "fr-FR": {
                    singular: "Prise en charge des lecteurs tiers"
                  },
                  "ja-JP": {
                    singular: "Vimeo以外のプレーヤーにも対応"
                  },
                  "ko-KR": {
                    singular: "타사 플레이어 지원"
                  },
                  "pt-BR": {
                    singular: "Suporte para players de terceiros"
                  },
                  "zh-CN": {
                    singular: "第三方播放器支持"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Custom watermark",
                dictionary: {
                  es: {
                    singular: "Marca de agua personalizada"
                  },
                  "de-DE": {
                    singular: "Benutzerdefiniertes Wasserzeichen"
                  },
                  "fr-FR": {
                    singular: "Filigrane personnalisé"
                  },
                  "ja-JP": {
                    singular: "カスタムウォーターマーク"
                  },
                  "ko-KR": {
                    singular: "커스텀 워터마크"
                  },
                  "pt-BR": {
                    singular: "Marca d´água customizada"
                  },
                  "zh-CN": {
                    singular: "自定义水印"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Lead capture",
                dictionary: {
                  es: {
                    singular: "Captura de oportunidades de venta"
                  },
                  "de-DE": {
                    singular: "Lead-Erfassung"
                  },
                  "fr-FR": {
                    singular: "Collecte d'opportunités commerciales"
                  },
                  "ja-JP": {
                    singular: "リードキャプチャー"
                  },
                  "ko-KR": {
                    singular: "리드 수집"
                  },
                  "pt-BR": {
                    singular: "Captura de lead"
                  },
                  "zh-CN": {
                    singular: "线索捕获"
                  }
                }
              })]
            },
            advanced: {
              featuresList: [(0, _v17.translate)({
                singular: "Host livestreamed events",
                dictionary: {
                  es: {
                    singular: "Organice eventos transmitidos en vivo"
                  },
                  "de-DE": {
                    singular: "Veranstalten Sie Livestream-Events"
                  },
                  "fr-FR": {
                    singular: "Héberger des événements en direct"
                  },
                  "ja-JP": {
                    singular: "ライブ配信イベントを主催"
                  },
                  "ko-KR": {
                    singular: "라이브 스트리밍 이벤트 주최"
                  },
                  "pt-BR": {
                    singular: "Hospedar eventos transmitidos ao vivo"
                  },
                  "zh-CN": {
                    singular: "举办直播活动"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Events Q&A, polls, and chat",
                dictionary: {
                  es: {
                    singular: "Sesión de preguntas y respuestas de eventos, encuestas y chat"
                  },
                  "de-DE": {
                    singular: "Event-Fragerunden, Umfragen und Chat"
                  },
                  "fr-FR": {
                    singular: "Questions-réponses, sondages et discussions des événements"
                  },
                  "ja-JP": {
                    singular: "イベントの質問セッション、アンケート、チャット"
                  },
                  "ko-KR": {
                    singular: "이벤트 Q&A, 투표, 채팅"
                  },
                  "pt-BR": {
                    singular: "Perguntas e respostas, enquetes e chat de eventos"
                  },
                  "zh-CN": {
                    singular: "活动问答、投票和聊天"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Stream to multiple destinations",
                dictionary: {
                  es: {
                    singular: "Transmisión a varios destinos"
                  },
                  "de-DE": {
                    singular: "Stream an mehrere Ziele schicken"
                  },
                  "fr-FR": {
                    singular: "Diffusez des vidéos en streaming vers de multiples destinations"
                  },
                  "ja-JP": {
                    singular: "複数の配信先にストリーム"
                  },
                  "ko-KR": {
                    singular: "여러 목적지로 라이브 스트리밍"
                  },
                  "pt-BR": {
                    singular: "Transmissão ao vivo para vários destinos"
                  },
                  "zh-CN": {
                    singular: "串流至多个目的地"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Marketing automation integrations",
                dictionary: {
                  es: {
                    singular: "Integraciones de automatización de marketing"
                  },
                  "de-DE": {
                    singular: "Marketing-Automatisierungsintegrationen"
                  },
                  "fr-FR": {
                    singular: "Intégrations d'automatisation marketing"
                  },
                  "ja-JP": {
                    singular: "マーケティングオートメーションのインテグレーション"
                  },
                  "ko-KR": {
                    singular: "마케팅 자동화 통합"
                  },
                  "pt-BR": {
                    singular: "Integrações de automação de marketing"
                  },
                  "zh-CN": {
                    singular: "营销自动化集成"
                  }
                }
              })]
            },
            enterprise: {
              featuresList: [(0, _v17.translate)({
                singular: "Custom permissions",
                dictionary: {
                  es: {
                    singular: "Permisos personalizados"
                  },
                  "de-DE": {
                    singular: "Benutzerdefinierte Berechtigungen"
                  },
                  "fr-FR": {
                    singular: "Autorisations personnalisées"
                  },
                  "ja-JP": {
                    singular: "カスタム権限"
                  },
                  "ko-KR": {
                    singular: "커스텀 권한"
                  },
                  "pt-BR": {
                    singular: "Permissões customizadas"
                  },
                  "zh-CN": {
                    singular: "自定义权限"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Advanced AI capabilities",
                dictionary: {
                  es: {
                    singular: "Capacidades de IA de Advanced"
                  },
                  "de-DE": {
                    singular: "Erweiterte KI-Fähigkeiten"
                  },
                  "fr-FR": {
                    singular: "Capacités d'IA avancées"
                  },
                  "ja-JP": {
                    singular: "高度なAI機能"
                  },
                  "ko-KR": {
                    singular: "고급 AI 기능"
                  },
                  "pt-BR": {
                    singular: "Recursos avançados de IA"
                  },
                  "zh-CN": {
                    singular: "高级 AI 功能"
                  }
                }
              }), (0, _v17.translate)({
                singular: "SSO (SAML) and SCIM (OKTA, AZURE)",
                dictionary: {
                  es: {
                    singular: "SSO (SAML) y SCIM (OKTA, AZURE)"
                  },
                  "de-DE": {
                    singular: "SSO (SAML) und SCIM (OKTA, AZURE)"
                  },
                  "fr-FR": {
                    singular: "SSO (SAML) et SCIM (OKTA, AZURE)"
                  },
                  "ja-JP": {
                    singular: "SSO（SAML）と SCIM（OKTA、AZURE）"
                  },
                  "ko-KR": {
                    singular: "SSO(SAML) 및 SCIM(OKTA, AZURE)"
                  },
                  "pt-BR": {
                    singular: "SSO (SAML) e SCIM (OKTA, AZURE)"
                  },
                  "zh-CN": {
                    singular: "SSO (SAML) 和 SCIM（OKTA、AZURE）"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Quality events (backup streams, eCDN)",
                dictionary: {
                  es: {
                    singular: "Eventos de calidad (transmisiones de respaldo, eCDN)"
                  },
                  "de-DE": {
                    singular: "Hochwertige Events (Backup-Streams, eCDN)"
                  },
                  "fr-FR": {
                    singular: "Événements de qualité (streams de secours, eCDN)"
                  },
                  "ja-JP": {
                    singular: "高品質なイベント（バックアップストリーム、eCDN）"
                  },
                  "ko-KR": {
                    singular: "고품질 이벤트(백업 스트림, eCDN)"
                  },
                  "pt-BR": {
                    singular: "Eventos de qualidade (cópias de segurança da transmissão ao vivo, eCDN)"
                  },
                  "zh-CN": {
                    singular: "高质量活动（备份流、eCDN）"
                  }
                }
              }), (0, _v17.translate)({
                singular: "Dedicated support",
                dictionary: {
                  es: {
                    singular: "Asistencia exclusiva"
                  },
                  "de-DE": {
                    singular: "Dedizierter Support"
                  },
                  "fr-FR": {
                    singular: "Assistance dédiée"
                  },
                  "ja-JP": {
                    singular: "専用のサポート"
                  },
                  "ko-KR": {
                    singular: "전담 지원"
                  },
                  "pt-BR": {
                    singular: "Suporte exclusivo"
                  },
                  "zh-CN": {
                    singular: "专门支持"
                  }
                }
              })]
            }
          }
        };
      return (0, _v1.jsx)(_v1.Fragment, {
        children: _v1 && (0, _v1.jsx)(_v102.default, {
          apiUrl: _v3?.apiUrl,
          userConfig: {
            jwt: _v3?.jwt,
            userId: _v3?.user?.id
          },
          templateType: "default",
          onClose: _v2,
          modalConfig: _v4,
          tracking: {
            params: _v103[_v0],
            paywallTracking: _v104[_v0]
          }
        })
      });
    };
  var _v106 = _v0.i(0);
  _v0.s(["ProgressWidgetModule", 0, _v0 => {
    let {
        uploads: _v1
      } = (0, _v40.useUploader)(),
      _v2 = _v1?.find(_v0 => _v0.state !== _v4.STATES.CANCELED && _v0.state !== _v4.STATES.FAILED && !!_v0.clipId)?.clipId,
      {
        privacyOptions: _v3
      } = (0, _v3.useClipPrivacyOptions)(_v2),
      {
        defaultFolderId: _v4
      } = (() => {
        let _v0 = (0, _v20.useViewer)(),
          _v1 = _v0?.teamUser ? _v0?.teamUser.ownerId : _v0?.user?.id,
          {
            data: _v2
          } = (0, _v106.useGetUserFoldersDefault)(() => _v1 ? {
            where: {
              userId: _v1
            },
            select: ["uri"]
          } : null, {
            revalidateOnFocus: !1
          });
        return {
          defaultFolderId: Number(_v2?.uri.split("/").pop())
        };
      })(),
      [_v5, _v6] = (0, _v2.useState)({
        upsellType: "unlisted privacy",
        isOpen: !1
      });
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v105, {
        onClose: () => {
          _v6(_v0 => ({
            ..._v0,
            isOpen: !1
          }));
        },
        upsellType: _v5.upsellType,
        isOpen: _v5.isOpen
      }), (0, _v1.jsx)(_v101, {
        ..._v0,
        privacyOptions: _v3,
        onPrivacyUpsellClick: _v0 => {
          _v6({
            isOpen: !0,
            upsellType: _v0 || "unlisted privacy"
          });
        },
        defaultFolderId: _v4
      })]
    });
  }], 0);
  var _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  _v0.s(["useUploadEmbeddable", 0, function ({
    userId: _v0,
    hasRestrictedStorage: _v1,
    defaultEmbedPreference: _v2,
    onQuotaRevalidate: _v3
  }) {
    let {
        uploads: _v4
      } = (0, _v40.useUploader)(),
      [_v5] = (0, _v107.usePatchUserItems)(),
      _v6 = _v4.find(_v0 => _v0.clipId)?.clipId,
      _v7 = (0, _v108.useEmbeddable)(_v6) ?? (!_v2 || "private" !== _v2);
    return {
      showEmbedToggle: _v1,
      isEmbeddable: _v7,
      onEmbedToggle: () => {
        if (!_v6) return Promise.resolve();
        let _v0 = !_v7;
        return _v108.embeddableStore.set(_v6, _v0), _v5({
          where: {
            userId: _v0
          },
          query: {
            uris: _v4.filter(_v0 => _v0.clipId).map(_v0 => _v0.clipId).map(_v0 => `/videos/${_v0}`).join()
          },
          variables: {
            privacy: {
              embed: _v0 ? "public" : "private"
            }
          }
        }).then(() => {
          _v1 && _v3?.();
        }).catch(() => {
          _v108.embeddableStore.set(_v6, !_v0);
        });
      },
      clearEmbeddable: () => {
        _v6 && _v108.embeddableStore.delete(_v6);
      }
    };
  }], 0);
}