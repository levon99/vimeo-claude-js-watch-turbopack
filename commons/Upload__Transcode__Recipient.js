{
  "use strict";

  var _v1,
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
    _v17 = ((_v1 = {})[_v1.Upload = 1] = "Upload", _v1[_v1.Transcode = 2] = "Transcode", _v1[_v1.Recipient = 3] = "Recipient", _v1[_v1.ReplaceOverQuota = 4] = "ReplaceOverQuota", _v1);
  let _v18 = _v5.default.button.withConfig({
      displayName: "errors__UnstyledButton",
      componentId: "sc-ba056818-0"
    })`
  background-color: unset;
  border: none;
  cursor: pointer;
  font-size: ${_v11.core.typography.size(200)}px;
  outline: none;
  padding: 0;
  text-align: unset;

  &:focus {
    border-color: ${({
      theme: _v0
    }) => _v0.element.bg1};
  }
`,
    _v19 = ({
      children: _v0,
      videoId: _v1
    }) => {
      let {
        upload: _v2
      } = (0, _v16.useUploader)();
      return (0, _v2.jsx)(_v13.FileUpload, {
        onChange: _v0 => {
          let {
            files: _v1
          } = _v0.target;
          _v1 && _v2(_v1, {
            uploadType: "replace_clip",
            clipId: _v1
          });
        },
        children: (0, _v2.jsx)(_v18, {
          children: (0, _v2.jsx)(_v14.Link, {
            element: "span",
            children: _v0
          })
        }, "generic-error")
      });
    },
    _v20 = (_v0, _v1, _v2) => _v1 ? (0, _v9.translate)({
      singular: "Upload failed. Your video has not been replaced. {link}Try again.{/link}",
      replacements: {
        link: _v0 => _v2 ? (0, _v2.jsx)(_v19, {
          videoId: _v2,
          children: _v0
        }, "error-cta") : _v0
      },
      dictionary: {
        es: {
          singular: "Error en la subida. Tu video no se ha reemplazado. {link}Vuelve a intentarlo.{/link}"
        },
        "de-DE": {
          singular: "Fehler beim Hochladen. Dein Video wurde nicht ersetzt. {link}Versuche es erneut.{/link}"
        },
        "fr-FR": {
          singular: "Échec de la mise en ligne. Nous n'avons pas pu remplacer votre vidéo. {link}Réessayez.{/link}"
        },
        "ja-JP": {
          singular: "アップロードに失敗しました。動画はまだ置き換えられていません。{link}再試行してください。{/link}"
        },
        "ko-KR": {
          singular: "업로드에 실패했습니다. 동영상이 교체되지 않았습니다. {link} 다시 시도하세요.{/link}"
        },
        "pt-BR": {
          singular: "Falha no carregamento. Seu vídeo não foi substituído. {link}Tente novamente.{/link}"
        },
        "zh-CN": {
          singular: "上传失败。您的视频没有被替换。{link}请重试。{/link}"
        }
      }
    }) : (0, _v9.translate)({
      singular: "There was a problem with your upload. {link}Please try again.{/link}",
      replacements: {
        link: _v0 => _v0 ? (0, _v2.jsx)("a", {
          href: _v0,
          children: _v0
        }, "generic-error") : _v0
      },
      dictionary: {
        es: {
          singular: "Se produjo un problema al subir el contenido. {link}Vuelve a intentarlo.{/link}"
        },
        "de-DE": {
          singular: "Beim Hochladen ist leider ein Problem aufgetreten. {link}Bitte versuche es erneut.{/link}"
        },
        "fr-FR": {
          singular: "Un problème est survenu lors de la mise en ligne. {link}Merci de réessayer.{/link}"
        },
        "ja-JP": {
          singular: "アップロード中に問題が発生しました。{link}もう一度お試しください。{/link}"
        },
        "ko-KR": {
          singular: "업로드 관련 문제가 발생했습니다. {link}다시 시도하세요.{/link}"
        },
        "pt-BR": {
          singular: "Houve um problema com seu carregamento. {link}Por favor, tente novamente.{/link}"
        },
        "zh-CN": {
          singular: "上传时出现问题。{link}请重试。{/link}"
        }
      }
    }),
    _v21 = new Map([[_v15.ERRORS.NO_MACHINE_ID, {
      code: _v15.ERROR_CODES[_v15.ERRORS.NO_MACHINE_ID],
      getDescription: _v20
    }], [_v15.ERRORS.VERIFICATION_FAILED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.VERIFICATION_FAILED],
      getDescription: () => (0, _v9.translate)({
        singular: "We were unable to complete your upload.",
        dictionary: {
          es: {
            singular: "No hemos podido completar tu subida. "
          },
          "de-DE": {
            singular: "Wir konnten deinen Upload nicht abschließen. "
          },
          "fr-FR": {
            singular: "Nous n'avons pas pu finaliser votre téléchargement. "
          },
          "ja-JP": {
            singular: "アップロードを完了できませんでした。"
          },
          "ko-KR": {
            singular: "업로드를 완료할 수 없습니다."
          },
          "pt-BR": {
            singular: "Não foi possível concluir seu carregamento."
          },
          "zh-CN": {
            singular: "我们无法完成您的上传。"
          }
        }
      })
    }], [_v15.ERRORS.DNS_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.DNS_ERROR],
      getDescription: _v20
    }], [_v15.ERRORS.RETRY_FAILED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.RETRY_FAILED],
      getDescription: () => (0, _v9.translate)({
        singular: "Your upload has failed. This is usually caused by a dropped connection. Please try uploading again.",
        dictionary: {
          es: {
            singular: "No se cargó. Esto suele deberse a una interrupción de la conexión. Vuelve a intentar la carga."
          },
          "de-DE": {
            singular: "Dein Upload ist fehlgeschlagen. Meistens liegt das an einer Unterbrechung der Verbindung. Versuch's nochmal mit dem Upload."
          },
          "fr-FR": {
            singular: "Votre mise en ligne a échoué. Une interruption de la connectivité réseau est souvent à l'origine de ce problème. Veuillez réessayer d'effectuer la mise en ligne."
          },
          "ja-JP": {
            singular: "アップロードに失敗しました。通常の場合、インターネット接続が切断されたことが原因です。再度アップロードをお試しください。"
          },
          "ko-KR": {
            singular: "업로드에 실패했습니다. 일반적으로 연결이 끊긴 경우입니다. 업로드를 다시 시도하십시오."
          },
          "pt-BR": {
            singular: "Seu carregamento falhou. Normalmente, isso é causado por uma queda de conexão. Tente carregar de novo."
          },
          "zh-CN": {
            singular: "您的上传失败。这通常是由于连接中断造成的。请尝试再次上传。"
          }
        }
      })
    }], [_v15.ERRORS.ATTACH_FAILED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.ATTACH_FAILED],
      getDescription: () => (0, _v9.translate)({
        singular: "Your upload didn’t start. That’s a pretty rare thing, and it shouldn’t happen again. Please give it another go.",
        dictionary: {
          es: {
            singular: "Tu subida no comenzó. Eso es raro y no debería suceder de nuevo. Inténtalo nuevo."
          },
          "de-DE": {
            singular: "Dein Upload ist nicht gestartet. Das kommt echt selten vor und sollte nicht noch einmal passieren. Versuche es doch bitte noch  einmal."
          },
          "fr-FR": {
            singular: "Votre transfert n'a pas démarré. C'est plutôt rare et ça ne devrait plus se reproduire. Merci de réessayer."
          },
          "ja-JP": {
            singular: "アップロードが開始しませんでした。非常に稀な事象ですので、繰り返し起こることはないと思われます。もう一度お試しください。"
          },
          "ko-KR": {
            singular: "업로드가 시작되지 않았습니다. 매우 드문 오류로, 다시 발생하지는 않을 것입니다. 다시 시도하세요."
          },
          "pt-BR": {
            singular: "Seu carregamento não foi iniciado. Isso é muito raro e não deve acontecer de novo. Tente mais uma vez."
          },
          "zh-CN": {
            singular: "您的上传尚未开始。这种情况非常罕见，应该不会再发生了。请再试一次。"
          }
        }
      })
    }], [_v15.ERRORS.PROGRESS_CALL_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.PROGRESS_CALL_ERROR],
      getDescription: _v20
    }], [_v15.ERRORS.METADATA_CALL_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.METADATA_CALL_ERROR],
      getDescription: _v20
    }], [_v15.ERRORS.PROGRESS_STATE_MISMATCH, {
      code: _v15.ERROR_CODES[_v15.ERRORS.PROGRESS_STATE_MISMATCH],
      getDescription: _v20
    }], [_v15.ERRORS.VIDEO_FILE_INVALID, {
      code: _v15.ERROR_CODES[_v15.ERRORS.VIDEO_FILE_INVALID],
      getDescription: () => (0, _v9.translate)({
        singular: "Hmmm, this does not appear to be a valid video file. Please review our {A}Compression Guidelines{/A} and double-check that you’re uploading a file type that we support.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
            target: "_blank",
            children: _v0
          }, "invalid-error")
        },
        dictionary: {
          es: {
            singular: "Este no parece ser un archivo de video válido. Revisa nuestras {A}Directrices de compresión de video{/A} y vuelve a verificar que estés subiendo un tipo de video que admitamos."
          },
          "de-DE": {
            singular: "Hmmm, das scheint keine gültige Videodatei zu sein. Bitte schau noch mal in unseren {A}Leitlinien zur Komprimierung{/A} nach, ob du auch einen Dateityp hochlädst, den wir unterstützen."
          },
          "fr-FR": {
            singular: "Mmm, il semblerait que ce fichier vidéo ne soit pas valide. Veuillez consulter nos {A}instructions de compression{/A} et vérifier que vous mettez en ligne un type de fichier que nous prenons en charge."
          },
          "ja-JP": {
            singular: "動画ファイルが無効のようです。{A}圧縮ガイドライン{/A} を参照して、あなたがアップロードしているファイル タイプが Vimeo がサポートしているものかどうかを再度ご確認ください。"
          },
          "ko-KR": {
            singular: "죄송합니다. 유효한 동영상 파일이 아닌 것 같습니다. {A}압축 지침{/A}을 검토하고 지원되는 파일 유형을 업로드하고 있는지 확인하세요."
          },
          "pt-BR": {
            singular: "Hummm, este não parece ser um arquivo de vídeo válido. Revise nossas {A}Instruções para Compressão{/A} e verifique novamente se está carregando um tipo de arquivo ao qual oferecemos suporte."
          },
          "zh-CN": {
            singular: "嗯，这似乎不是一个有效的视频文件。请参阅我们的{A}压缩指南{/A}，并仔细检查您上传的文件是否是我们支持的文件类型。"
          }
        }
      })
    }], [_v15.ERRORS.NETWORK_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.NETWORK_ERROR],
      getDescription: () => (0, _v9.translate)({
        singular: "Oops! You’re no longer connected to the Internet. Once you reconnect, your upload will resume.",
        dictionary: {
          es: {
            singular: "Vaya. Ya no estás conectado a Internet. Una vez que vuelvas a conectarte, se reanudará la carga."
          },
          "de-DE": {
            singular: "Hoppla! Du bist nicht mehr mit dem Internet verbunden. Sobald du dich erneut verbunden hast, wird dein Upload wieder aufgenommen."
          },
          "fr-FR": {
            singular: "Oups ! Vous n'êtes plus connecté(e) à Internet. Votre transfert reprendra une fois que vous serez reconnecté(e)."
          },
          "ja-JP": {
            singular: "残念ながら、インターネットに接続されていません。再接続後、アップロードが再開します。"
          },
          "ko-KR": {
            singular: "인터넷 연결이 끊겼습니다. 다시 연결하면 업로드가 재개됩니다."
          },
          "pt-BR": {
            singular: "Opa! Você não está mais conectado à Internet. Depois de se reconectar, seu carregamento será retomado."
          },
          "zh-CN": {
            singular: "哎呀！您的互联网连接已断开。重新连接后，将继续上传。"
          }
        }
      })
    }], [_v15.ERRORS.VIDEO_FILE_REMOVED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.VIDEO_FILE_REMOVED],
      getDescription: () => (0, _v9.translate)({
        singular: "The file you are uploading was either moved or deleted. Please try again.",
        dictionary: {
          es: {
            singular: "El archivo que estás cargando se movió o se eliminó. Inténtalo de nuevo."
          },
          "de-DE": {
            singular: "Die Datei, die du hochlädst, wurde entweder verschoben oder gelöscht. Bitte versuche es erneut."
          },
          "fr-FR": {
            singular: "Le fichier que vous chargez a été déplacé ou supprimé. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "アップロード中のファイルが移動または削除されました。再度お試しください。"
          },
          "ko-KR": {
            singular: "업로드하려는 파일이 이동 또는 삭제되었습니다. 다시 시도하세요."
          },
          "pt-BR": {
            singular: "O arquivo que você está carregando foi movido ou excluído. Tente de novo."
          },
          "zh-CN": {
            singular: "您上传的文件已被移动或删除。请重试。"
          }
        }
      })
    }], [_v15.ERRORS.VIDEO_FILE_SIZE_CHANGED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.VIDEO_FILE_SIZE_CHANGED],
      getDescription: () => (0, _v9.translate)({
        singular: "The size of file you are uploading has changed. Please try again.",
        dictionary: {
          es: {
            singular: "Cambió el tamaño del archivo que estás cargando. Inténtalo de nuevo."
          },
          "de-DE": {
            singular: "Die Größe der Datei, die du hochlädst, hat sich verändert. Bitte versuche es erneut."
          },
          "fr-FR": {
            singular: "La taille du fichier que vous chargez a changé. Veuillez réessayer."
          },
          "ja-JP": {
            singular: "アップロード中のファイルのサイズが変更されました。再度お試しください。"
          },
          "ko-KR": {
            singular: "업로드하려는 파일의 크기가 변경되었습니다. 다시 시도하세요."
          },
          "pt-BR": {
            singular: "O tamanho do arquivo que você está carregando foi alterado. Tente de novo."
          },
          "zh-CN": {
            singular: "您正在上传的文件大小发生了变化。请重试。"
          }
        }
      })
    }], [_v15.ERRORS.FILE_TOO_SMALL, {
      code: _v15.ERROR_CODES[_v15.ERRORS.FILE_TOO_SMALL],
      getDescription: () => (0, _v9.translate)({
        singular: "Sorry, the file you selected is too small to be a valid video.",
        dictionary: {
          es: {
            singular: "Lo sentimos, el archivo que seleccionaste es muy pequeño para ser un video válido."
          },
          "de-DE": {
            singular: "Es tut uns leid, aber die von dir ausgewählte Datei ist zu klein, um als Video angesehen zu werden."
          },
          "fr-FR": {
            singular: "Désolé, le fichier que vous avez choisi est trop petit pour être une vidéo valide."
          },
          "ja-JP": {
            singular: "申し訳ありません、選択したファイルのサイズは動画として小さすぎます。"
          },
          "ko-KR": {
            singular: "죄송합니다. 선택한 파일은 유효 동영상이 되기에 파일 크기가 너무 작습니다."
          },
          "pt-BR": {
            singular: "Desculpe, mas o arquivo que você selecionou é pequeno demais para ser um vídeo válido."
          },
          "zh-CN": {
            singular: "抱歉，您选择的文件太小，不能作为有效视频。"
          }
        }
      })
    }], [_v15.ERRORS.INVALID_DROPBOX_URL, {
      code: _v15.ERROR_CODES[_v15.ERRORS.INVALID_DROPBOX_URL],
      getDescription: () => (0, _v9.translate)({
        singular: "It looks like Dropbox has suspended your sharable links, which is what we use to upload your videos to Vimeo. You can re-enable them in your Dropbox {A_ACCOUNT}Account Page{/A_ACCOUNT} or learn more in the Dropbox {A_HELP}Help Center{/A_HELP}.",
        replacements: {
          A_ACCOUNT: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "https://www.dropbox.com/account#personal",
            target: "_blank",
            children: _v0
          }, "dropbox-error"),
          A_HELP: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "https://www.dropbox.com/help/45",
            target: "_blank",
            children: _v0
          })
        },
        dictionary: {
          es: {
            singular: "Parece que Dropbox ha suspendido tus vínculos para compartir, que son los que usamos para subir tus videos a Vimeo. Puedes volver a habilitarlos en la {A_ACCOUNT}página de tu cuenta{/A_ACCOUNT} de Dropbox u obtener más información en el {A_HELP}Centro de Ayuda{/A_HELP} de Dropbox."
          },
          "de-DE": {
            singular: "Anscheinend hat Dropbox deine teilbaren Links, die wir verwenden, um deine Videos auf Vimeo hochzuladen, deaktiviert. Du kannst sie auf deiner Dropbox-{A_ACCOUNT}Kontoseite {/A_ACCOUNT} wieder aktivieren oder mehr Informationen in dem Dropbox-{A_HELP}Help Center bekommen{/A_HELP}."
          },
          "fr-FR": {
            singular: "Il semble que Dropbox ait suspendu vos liens partageables, ceux-là même que nous utilisons pour mettre en ligne vos vidéos sur Vimeo. Vous pouvez les réactiver depuis votre {A_ACCOUNT}Page de compte{/A_ACCOUNT} Dropbox ou en apprendre davantage dans le {A_HELP}Centre d'aide{/A_HELP} Dropbox."
          },
          "ja-JP": {
            singular: "Dropboxの共有リンクが無効になっています。共有リンクを使ってVimeoにアップロードしているので、有効にしてください。Dropboxの{A_ACCOUNT}アカウントページ{/A_ACCOUNT}で復元するか、Dropboxの{A_HELP}ヘルプセンター{/A_HELP}で詳しく知りましょう。"
          },
          "ko-KR": {
            singular: "Vimeo에서 동영상을 업로드하기 위해 사용하는 공유 링크를 Dropbox에서 일시적으로 비활성화한 것 같습니다. 회원님의 Dropbox 계정의 {A_ACCOUNT}계정 페이지{/A_ACCOUNT}에서 재활성화할 수 있습니다. 추가 정보는 Dropbox {A_HELP}도움말 센터{/A_HELP}에서 확인하세요."
          },
          "pt-BR": {
            singular: "Parece que o Dropbox suspendeu seus links compartilháveis, que são o que usamos para carregar os seus vídeos no Vimeo. Você pode re-ativá-los na página da sua conta {A_ACCOUNT} do Dropbox {/A_ACCOUNT} ou saiba mais sobre isso na Central de Ajuda {A_HELP} do Dropbox{/A_HELP}."
          },
          "zh-CN": {
            singular: "看起来 Dropbox 暂停了您的可共享链接，而我们正是使用这种链接将您的视频上传到 Vimeo。您可以在 Dropbox {A_ACCOUNT}帐户页面{/A_ACCOUNT}重新启用它们，或者在 Dropbox {A_HELP}帮助中心{/A_HELP}中了解更多信息。"
          }
        }
      })
    }], [_v15.ERRORS.INVALID_UPLOAD_ENDPOINT, {
      code: _v15.ERROR_CODES[_v15.ERRORS.INVALID_UPLOAD_ENDPOINT],
      getDescription: _v20
    }], [_v15.ERRORS.RANGE_FAILED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.RANGE_FAILED],
      getDescription: _v20
    }], [_v15.ERRORS.RANGE_RESUME_FAILED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.RANGE_RESUME_FAILED],
      getDescription: _v20
    }], [_v15.ERRORS.PULL_FAILED, {
      code: _v15.ERROR_CODES[_v15.ERRORS.PULL_FAILED],
      getDescription: _v20
    }], [_v15.ERRORS.VALIDATOR_CALL_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.VALIDATOR_CALL_ERROR],
      getDescription: _v20
    }], [_v15.ERRORS.LIGHTHOUSE_LOAD_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.LIGHTHOUSE_LOAD_ERROR],
      getDescription: _v20
    }], [_v15.ERRORS.LIGHTHOUSE_RACE_ERROR, {
      code: _v15.ERROR_CODES[_v15.ERRORS.LIGHTHOUSE_RACE_ERROR],
      getDescription: _v20
    }], [1, {
      code: 1,
      getDescription: _v20
    }], [2, {
      code: 2,
      getDescription: _v20
    }], [3, {
      code: 3,
      getDescription: () => (0, _v9.translate)({
        singular: "This video is unavailable, please contact the owner",
        dictionary: {
          es: {
            singular: "Este video no está disponible; comunícate con el propietario"
          },
          "de-DE": {
            singular: "Dieses Video ist nicht verfügbar, bitte kontaktiere den Inhaber."
          },
          "fr-FR": {
            singular: "Cette vidéo n'est pas disponible. Veuillez contacter le propriétaire."
          },
          "ja-JP": {
            singular: "この動画は利用できません。動画所有者にお問い合わせください。"
          },
          "ko-KR": {
            singular: "유효하지 않은 동영상입니다. 소유자에게 문의하세요"
          },
          "pt-BR": {
            singular: "Este vídeo não está disponível, por favor entre em contato com o proprietário"
          },
          "zh-CN": {
            singular: "此视频不可用，请联系所有者"
          }
        }
      })
    }], ["analysis_failed", {
      code: "analysis_failed",
      getDescription: () => (0, _v9.translate)({
        singular: "We couldn't process your file. Try again, or {A}check our encoding guidelines{/A} to make sure your file is compatible.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
            target: "_blank",
            children: _v0
          }, "analysis-failed-link")
        },
        dictionary: {
          es: {
            singular: "No pudimos procesar su archivo. Inténtelo de nuevo, o {A}consulte nuestras directrices de codificación{/A} para asegurarse de que su archivo sea compatible."
          },
          "de-DE": {
            singular: "Wir konnten Ihre Datei nicht verarbeiten. Versuchen Sie es erneut oder {A}prüfen Sie unsere Kodierungsrichtlinien{/A}, um sicherzustellen, dass Ihre Datei kompatibel ist."
          },
          "fr-FR": {
            singular: "Nous n'avons pas pu traiter votre fichier. Réessayez, ou {A}consultez nos directives d'encodage{/A} pour vous assurer que votre fichier est compatible."
          },
          "ja-JP": {
            singular: "ファイルを処理できませんでした。再度お試しください、または{A}エンコードガイドラインを確認してファイルの互換性を確認してください{/A}。"
          },
          "ko-KR": {
            singular: "파일을 처리할 수 없습니다. 다시 시도하거나, 파일 호환성을 확인하려면 {A}인코딩 가이드라인을 확인{/A}하세요."
          },
          "pt-BR": {
            singular: "Não conseguimos processar seu arquivo. Tente novamente, ou {A}consulte nossas diretrizes de codificação{/A} para garantir que seu arquivo seja compatível."
          },
          "zh-CN": {
            singular: "我们无法处理您的文件。请重试，或 {A}查看我们的编码指南{/A} 以确保您的文件兼容。"
          }
        }
      })
    }], ["duration_too_long", {
      code: "duration_too_long",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["duration_too_short", {
      code: "duration_too_short",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["missing_video_stream", {
      code: "missing_video_stream",
      getDescription: () => (0, _v9.translate)({
        singular: "Your file doesn't contain a video stream. {A}Check our encoding guidelines{/A} for supported formats.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
            target: "_blank",
            children: _v0
          }, "missing-stream-link")
        },
        dictionary: {
          es: {
            singular: "Su archivo no contiene un flujo de vídeo. {A}Consulte nuestras directrices de codificación{/A} para los formatos compatibles."
          },
          "de-DE": {
            singular: "Ihre Datei enthält keinen Videostream. {A}Prüfen Sie unsere Kodierungsrichtlinien{/A} für unterstützte Formate."
          },
          "fr-FR": {
            singular: "Votre fichier ne contient pas de flux vidéo. {A}Consultez nos directives d'encodage{/A} pour connaître les formats pris en charge."
          },
          "ja-JP": {
            singular: "ファイルに動画ストリームが含まれていません。対応フォーマットについては{A}エンコードガイドラインを確認してください{/A}。"
          },
          "ko-KR": {
            singular: "파일에 비디오 스트림이 포함되어 있지 않습니다. {A}인코딩 가이드라인을 확인{/A}하여 지원되는 포맷을 확인하세요."
          },
          "pt-BR": {
            singular: "Seu arquivo não contém um fluxo de vídeo. {A}Consulte nossas diretrizes de codificação{/A} para formatos suportados."
          },
          "zh-CN": {
            singular: "您的文件不包含视频流。 {A}查看我们的编码指南{/A} 以了解支持的格式。"
          }
        }
      })
    }], ["resolution_dimension_too_small", {
      code: "resolution_dimension_too_small",
      getDescription: () => (0, _v9.translate)({
        singular: "Your video resolution is too small. Please upload a video with a minimum width and height of 2 pixels.",
        dictionary: {
          es: {
            singular: "La resolución de su vídeo es demasiado baja. Suba un vídeo con un ancho y alto mínimos de 2 píxeles."
          },
          "de-DE": {
            singular: "Die Auflösung Ihres Videos ist zu klein. Bitte laden Sie ein Video mit einer Mindestbreite und -höhe von 2 Pixeln hoch."
          },
          "fr-FR": {
            singular: "La résolution de votre vidéo est trop faible. Veuillez téléverser une vidéo avec une largeur et une hauteur minimales de 2 pixels."
          },
          "ja-JP": {
            singular: "動画の解像度が小さすぎます。幅と高さがそれぞれ最小 2 ピクセルの動画をアップロードしてください。"
          },
          "ko-KR": {
            singular: "비디오 해상도가 너무 작습니다. 너비와 높이가 최소 2픽셀인 비디오를 업로드하세요."
          },
          "pt-BR": {
            singular: "Envie um vídeo com largura e altura mínimas de 2 pixels."
          },
          "zh-CN": {
            singular: "您的视频分辨率太小。请上传宽度和高度均至少为 2 像素的视频。"
          }
        }
      })
    }], ["max_file_size_exceeded", {
      code: "max_file_size_exceeded",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["empty_upload", {
      code: "empty_upload",
      getDescription: () => (0, _v9.translate)({
        singular: "Your file appears to be empty (0 bytes). Please check the file and try again.",
        dictionary: {
          es: {
            singular: "Su archivo parece estar vacío (0 bytes). Compruebe el archivo y vuelva a intentarlo."
          },
          "de-DE": {
            singular: "Ihre Datei scheint leer zu sein (0 Bytes). Bitte prüfen Sie die Datei und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Votre fichier semble être vide (0 octets). Veuillez vérifier le fichier et réessayer."
          },
          "ja-JP": {
            singular: "ファイルが空（0 バイト）のようです。ファイルを確認して再度お試しください。"
          },
          "ko-KR": {
            singular: "파일이 비어 있는 것 같습니다(0 바이트). 파일을 확인하고 다시 시도하세요."
          },
          "pt-BR": {
            singular: "Seu arquivo parece estar vazio (0 bytes). Verifique o arquivo e tente novamente."
          },
          "zh-CN": {
            singular: "您的文件似乎为空 (0 字节)。请检查文件并重试。"
          }
        }
      })
    }], ["disallowed_content_type", {
      code: "disallowed_content_type",
      getDescription: () => (0, _v9.translate)({
        singular: "This file type is not supported. {A}Check our encoding guidelines{/A} for supported formats.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
            target: "_blank",
            children: _v0
          }, "disallowed-type-link")
        },
        dictionary: {
          es: {
            singular: "Este tipo de archivo no es compatible. {A}Consulte nuestras directrices de codificación{/A} para los formatos compatibles."
          },
          "de-DE": {
            singular: "Dieser Dateityp wird nicht unterstützt. {A}Prüfen Sie unsere Kodierungsrichtlinien{/A} für unterstützte Formate."
          },
          "fr-FR": {
            singular: "Ce type de fichier n'est pas pris en charge. {A}Consultez nos directives d'encodage{/A} pour connaître les formats pris en charge."
          },
          "ja-JP": {
            singular: "このファイル形式はサポートされていません。対応フォーマットについては{A}エンコードガイドラインを確認してください{/A}。"
          },
          "ko-KR": {
            singular: "이 파일 형식은 지원되지 않습니다. {A}인코딩 가이드라인을 확인{/A}하여 지원되는 포맷을 확인하세요."
          },
          "pt-BR": {
            singular: "Este tipo de arquivo não é compatível. {A}Consulte nossas diretrizes de codificação{/A} para formatos suportados."
          },
          "zh-CN": {
            singular: "不支持此文件类型。 {A}查看我们的编码指南{/A} 以了解支持的格式。"
          }
        }
      })
    }], ["exceeded_retry_count", {
      code: "exceeded_retry_count",
      getDescription: () => (0, _v9.translate)({
        singular: "Your upload failed too many times. Please try again, or {A}check our encoding guidelines{/A}.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
            target: "_blank",
            children: _v0
          }, "retry-count-link")
        },
        dictionary: {
          es: {
            singular: "Su subida ha fallado demasiadas veces. Inténtelo de nuevo, o {A}consulte nuestras directrices de codificación{/A}."
          },
          "de-DE": {
            singular: "Ihr Upload ist zu oft fehlgeschlagen. Bitte versuchen Sie es erneut oder {A}prüfen Sie unsere Kodierungsrichtlinien{/A}."
          },
          "fr-FR": {
            singular: "Votre téléversement a échoué trop de fois. Veuillez réessayer, ou {A}consultez nos directives d'encodage{/A}."
          },
          "ja-JP": {
            singular: "アップロードが何度も失敗しました。再試行するか、{A}エンコードガイドラインを確認してください{/A}。"
          },
          "ko-KR": {
            singular: "업로드가 여러 번 실패했습니다. 다시 시도하거나, {A}인코딩 가이드라인을 확인{/A}하세요."
          },
          "pt-BR": {
            singular: "Seu envio falhou muitas vezes. Por favor, tente novamente, ou {A}consulte nossas diretrizes de codificação{/A}."
          },
          "zh-CN": {
            singular: "您的上传失败次数过多。请重试，或 {A}查看我们的编码指南{/A}。"
          }
        }
      })
    }], ["internal", {
      code: "internal",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["disallowed_address", {
      code: "disallowed_address",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["invalid_redirects", {
      code: "invalid_redirects",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["remote_not_found", {
      code: "remote_not_found",
      getDescription: () => (0, _v9.translate)({
        singular: "The file at the URL you provided could not be found (404). Please check the URL and try again.",
        dictionary: {
          es: {
            singular: "No se encontró el archivo en la URL que proporcionó (404). Compruebe la URL y vuelva a intentarlo."
          },
          "de-DE": {
            singular: "Die Datei unter der angegebenen URL konnte nicht gefunden werden (404). Bitte prüfen Sie die URL und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Le fichier à l'URL fournie est introuvable (404). Veuillez vérifier l'URL et réessayer."
          },
          "ja-JP": {
            singular: "指定した URL のファイルが見つかりませんでした（404）。URL を確認して再度お試しください。"
          },
          "ko-KR": {
            singular: "제공하신 URL의 파일을 찾을 수 없습니다(404). URL을 확인하고 다시 시도하세요."
          },
          "pt-BR": {
            singular: "O arquivo na URL que você forneceu não pôde ser encontrado (404). Verifique a URL e tente novamente."
          },
          "zh-CN": {
            singular: "您提供的 URL 对应的文件未找到 (404)。请检查 URL 并重试。"
          }
        }
      })
    }], ["remote_unauthorized", {
      code: "remote_unauthorized",
      getDescription: () => (0, _v9.translate)({
        singular: "Access to the URL was denied (401). Please check that the URL is publicly accessible, or set the appropriate authorization headers.",
        dictionary: {
          es: {
            singular: "El acceso a la URL fue denegado (401). Compruebe que la URL sea accesible públicamente, o que se hayan establecido los encabezados de autorización correspondientes."
          },
          "de-DE": {
            singular: "Der Zugriff auf die URL wurde verweigert (401). Bitte prüfen Sie, ob die URL öffentlich zugänglich ist, oder setzen Sie die entsprechenden Autorisierungsheader."
          },
          "fr-FR": {
            singular: "L'accès à l'URL a été refusé (401). Veuillez vérifier que l'URL est accessible publiquement, ou définir les en-têtes d'autorisation appropriés."
          },
          "ja-JP": {
            singular: "指定した URL へのアクセスが拒否されました（401）。URL が公開アクセス可能か、または適切な認証ヘッダーが設定されているか確認してください。"
          },
          "ko-KR": {
            singular: "URL에 대한 접근이 거부되었습니다(401). URL이 공개적으로 접근 가능한지 확인하거나 적절한 인증 헤더를 설정하세요."
          },
          "pt-BR": {
            singular: "O acesso à URL foi negado (401). Verifique se a URL é publicamente acessível, ou defina os cabeçalhos de autorização apropriados."
          },
          "zh-CN": {
            singular: "对该 URL 的访问被拒绝 (401)。请检查该 URL 是否可公开访问，或设置适当的授权头。"
          }
        }
      })
    }], ["remote_forbidden", {
      code: "remote_forbidden",
      getDescription: () => (0, _v9.translate)({
        singular: "Access to the URL was forbidden (403). Please check that the URL is publicly accessible, or set the appropriate authorization headers.",
        dictionary: {
          es: {
            singular: "El acceso a la URL está prohibido (403). Compruebe que la URL sea accesible públicamente, o que se hayan establecido los encabezados de autorización correspondientes."
          },
          "de-DE": {
            singular: "Der Zugriff auf die URL wurde untersagt (403). Bitte prüfen Sie, ob die URL öffentlich zugänglich ist, oder setzen Sie die entsprechenden Autorisierungsheader."
          },
          "fr-FR": {
            singular: "L'accès à l'URL est interdit (403). Veuillez vérifier que l'URL est accessible publiquement, ou définir les en-têtes d'autorisation appropriés."
          },
          "ja-JP": {
            singular: "指定した URL へのアクセスが禁止されました（403）。URL が公開アクセス可能か、または適切な認証ヘッダーが設定されているか確認してください。"
          },
          "ko-KR": {
            singular: "URL 접근이 금지되었습니다(403). URL이 공개적으로 접근 가능한지 확인하거나 적절한 인증 헤더를 설정하세요."
          },
          "pt-BR": {
            singular: "O acesso à URL foi proibido (403). Verifique se a URL é publicamente acessível, ou defina os cabeçalhos de autorização apropriados."
          },
          "zh-CN": {
            singular: "对该 URL 的访问被禁止 (403)。请检查该 URL 是否可公开访问，或设置适当的授权头。"
          }
        }
      })
    }], ["remote_bad_request", {
      code: "remote_bad_request",
      getDescription: () => (0, _v9.translate)({
        singular: "The server at the URL you provided rejected the request (4xx). Please check the URL and try again.",
        dictionary: {
          es: {
            singular: "El servidor en la URL que proporcionó rechazó la solicitud (4xx). Compruebe la URL y vuelva a intentarlo."
          },
          "de-DE": {
            singular: "Der Server der angegebenen URL hat die Anfrage abgewiesen (4xx). Bitte prüfen Sie die URL und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Le serveur à l'URL fournie a rejeté la requête (4xx). Veuillez vérifier l'URL et réessayer."
          },
          "ja-JP": {
            singular: "指定した URL のサーバーがリクエストを拒否しました（4xx）。URL を確認して再度お試しください。"
          },
          "ko-KR": {
            singular: "제공하신 URL의 서버가 요청을 거부했습니다(4xx). URL을 확인하고 다시 시도하세요."
          },
          "pt-BR": {
            singular: "O servidor na URL que você forneceu rejeitou a solicitação (4xx). Verifique a URL e tente novamente."
          },
          "zh-CN": {
            singular: "您提供的 URL 所指的服务器拒绝了请求 (4xx)。请检查 URL 并重试。"
          }
        }
      })
    }], ["remote_internal", {
      code: "remote_internal",
      getDescription: () => (0, _v9.translate)({
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
      })
    }], ["unsupported_video_projection", {
      code: "unsupported_video_projection",
      getDescription: () => (0, _v9.translate)({
        singular: "Your video uses a spatial projection we don't support yet. {A}Check our encoding guidelines{/A} for supported formats.",
        replacements: {
          A: _v0 => (0, _v2.jsx)(_v14.Link, {
            href: "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426043233169-Video-and-audio-compression-guidelines",
            target: "_blank",
            children: _v0
          }, "projection-type-link")
        },
        dictionary: {
          es: {
            singular: "Su vídeo utiliza una proyección espacial que aún no admitimos. {A}Consulte nuestras directrices de codificación{/A} para conocer los formatos compatibles."
          },
          "de-DE": {
            singular: "Ihr Video verwendet eine räumliche Projektion, die wir noch nicht unterstützen. {A}Prüfen Sie unsere Encodierungsrichtlinien{/A} für unterstützte Formate."
          },
          "fr-FR": {
            singular: "Votre vidéo utilise une projection spatiale que nous ne prenons pas encore en charge. {A}Consultez nos consignes d'encodage{/A} pour les formats pris en charge."
          },
          "ja-JP": {
            singular: "お使いの動画は、現在サポートしていない空間プロジェクションを使用しています。対応フォーマットについては、{A}エンコードガイドラインをご確認ください{/A}。"
          },
          "ko-KR": {
            singular: "귀하의 동영상은 현재 지원하지 않는 공간 프로젝션을 사용하고 있습니다. 지원되는 형식을 확인하려면 {A}인코딩 가이드라인을 확인해 주세요{/A}."
          },
          "pt-BR": {
            singular: "Seu vídeo utiliza uma projeção espacial que ainda não suportamos. {A}Consulte nossas diretrizes de codificação{/A} para ver os formatos suportados."
          },
          "zh-CN": {
            singular: "您的视频使用了我们当前尚不支持的空间投影。{A}查看我们的编码指南{/A}，以获取受支持的格式。"
          }
        }
      })
    }]]),
    _v22 = (0, _v5.default)(_v10.Notice).withConfig({
      displayName: "UploadErrorMessage__StyledNotice",
      componentId: "sc-8b55cbec-0"
    })`
  font-size: ${_v11.core.typography.size(200)}px;
  ${({
      hasMaxWidth: _v0
    }) => _v0 && _v5.css`
      max-width: ${(0, _v3.rem)(741)};
    `}

  > span {
    font-size: ${_v11.core.typography.size(200)}px;
  }
`;
  _v0.s(["UploadErrorMessage", 0, ({
    error: _v0,
    link: _v1,
    onClose: _v2,
    replace: _v3,
    videoId: _v4,
    playerWidth: _v5,
    onClickQuotaMessage: _v6,
    hasMaxWidth: _v7 = !0,
    isEnterprise: _v8 = !1,
    isNewVersionErrorMessage: _v9 = !1,
    ..._v10
  }) => {
    let [_v11, _v12] = (0, _v4.useState)(!!_v0);
    if (_v0 === _v17.ReplaceOverQuota) return (0, _v2.jsx)(_v6.Alert, {
      size: "sm",
      status: "error",
      maxWidth: _v5,
      padding: "2",
      gap: "2",
      overflow: "visible",
      lineHeight: "normal",
      onClose: _v2,
      marginY: "md",
      alignItems: "center",
      ..._v10,
      children: (0, _v2.jsx)(_v7.AlertDescription, {
        children: _v8 ? (0, _v9.translate)({
          singular: "The selected file exceeds your storage limit.",
          dictionary: {
            es: {
              singular: "El archivo seleccionado excede su límite de almacenamiento."
            },
            "de-DE": {
              singular: "Die ausgewählte Datei überschreitet Ihr Speicherlimit."
            },
            "fr-FR": {
              singular: "Le fichier sélectionné dépasse votre limite de stockage."
            },
            "ja-JP": {
              singular: "選択したファイルはストレージの上限を超えています。"
            },
            "ko-KR": {
              singular: "선택한 파일이 저장 공간 한도를 초과합니다."
            },
            "pt-BR": {
              singular: "O arquivo selecionado excede o seu limite de armazenamento."
            },
            "zh-CN": {
              singular: "所选文件超出了您的存储限制。"
            }
          }
        }) : _v9 ? (0, _v9.translate)({
          singular: "The selected file exceeds your storage limit. To add a new version, try a smaller file or {LINK}upgrade for more storage.{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v2.jsx)(_v8.Link, {
              as: "a",
              fontSize: "sm",
              onClick: _v6,
              variant: "inline-primary",
              cursor: "pointer",
              children: _v0
            }, "version-replace-help-message")
          },
          dictionary: {
            es: {
              singular: "El archivo seleccionado excede su límite de almacenamiento. Para agregar una nueva versión, pruebe con un archivo más pequeño o {LINK}cambie de plan para obtener más espacio de almacenamiento{/LINK}."
            },
            "de-DE": {
              singular: "Die ausgewählte Datei überschreitet Ihr Speicherplatzlimit. Um eine neue Version hinzuzufügen, versuchen Sie es mit einer kleineren Datei oder {LINK}führen Sie ein Upgrade für mehr Speicherplatz durch.{/LINK}"
            },
            "fr-FR": {
              singular: "Le fichier sélectionné dépasse votre limite de stockage. Pour ajouter une nouvelle version, essayez un fichier plus petit ou {LINK}effectuez une mise à niveau pour obtenir plus d'espace de stockage.{/LINK}"
            },
            "ja-JP": {
              singular: "選択したファイルはストレージの上限を超えています。新しいバージョンを追加するには、サイズの小さいファイルで試すか、{LINK}アップグレードしてストレージを増やしてください。{/LINK}"
            },
            "ko-KR": {
              singular: "선택한 파일이 저장 공간 한도를 초과합니다. 새 버전을 추가하려면 더 작은 파일을 사용하거나 {LINK}업그레이드하여 저장 공간을 늘리세요.{/LINK}"
            },
            "pt-BR": {
              singular: "O arquivo selecionado excede o seu limite de armazenamento. Para adicionar uma nova versão, use um arquivo menor ou {LINK}faça upgrade para ter mais armazenamento.{/LINK}"
            },
            "zh-CN": {
              singular: "所选文件超出了您的存储限制。要添加新版本，请尝试较小的文件或{LINK}升级以获得更多存储空间。{/LINK}"
            }
          }
        }) : (0, _v9.translate)({
          singular: "The selected file exceeds your storage limit. To replace this video, try a smaller file or {LINK}upgrade for more storage.{/LINK}",
          replacements: {
            LINK: _v0 => (0, _v2.jsx)(_v8.Link, {
              as: "a",
              fontSize: "sm",
              onClick: _v6,
              variant: "inline-primary",
              cursor: "pointer",
              children: _v0
            }, "video-replace-help-message")
          },
          dictionary: {
            es: {
              singular: "El archivo seleccionado excede su límite de almacenamiento. Para reemplazar este video, pruebe con un archivo más pequeño o {LINK}actualice su plan para obtener más espacio de almacenamiento.{/LINK}"
            },
            "de-DE": {
              singular: "Die ausgewählte Datei überschreitet Ihr Speicherplatzlimit. Um dieses Video zu ersetzen, versuchen Sie es mit einer kleineren Datei oder {LINK}führen Sie ein Upgrade für mehr Speicherplatz durch.{/LINK}"
            },
            "fr-FR": {
              singular: "Le fichier sélectionné dépasse votre limite de stockage. Pour remplacer cette vidéo, essayez d'utiliser un fichier plus petit ou {LINK}mettez à niveau votre compte pour augmenter l'espace de stockage.{/LINK}"
            },
            "ja-JP": {
              singular: "選択したファイルはストレージの上限を超えています。この動画を置き換えるには、サイズの小さいファイルで試すか、{LINK}アップグレードしてストレージを増やしてください。{/LINK}"
            },
            "ko-KR": {
              singular: "선택한 파일이 저장 공간 한도를 초과합니다. 동영상을 교체하려면 더 작은 파일을 사용하거나 {LINK}업그레이드하여 저장 공간을 늘리세요.{/LINK}"
            },
            "pt-BR": {
              singular: "O arquivo selecionado excede o seu limite de armazenamento. Para substituir este vídeo, tente usar um arquivo menor ou {LINK}faça upgrade para ter mais espaço de armazenamento.{/LINK}"
            },
            "zh-CN": {
              singular: "所选文件超出了您的存储限制。要替换此视频，请尝试较小的文件或{LINK}升级以获得更多存储空间{/LINK}。"
            }
          }
        })
      })
    });
    let _v13 = ((_v0, _v1, _v2, _v3) => {
      let _v4 = _v21.get(_v0) || "";
      if (!_v4) return _v0;
      let _v5 = _v4.getDescription(_v1, _v2, _v3);
      return "string" == typeof _v5 ? _v5 : _v5.map((_v0, _v1) => "string" == typeof _v0 ? (0, _v2.jsx)(_v12.Paragraph, {
        size: "2",
        children: _v0
      }, `error-${_v1}`) : _v0);
    })(_v0, _v1, _v3, _v4);
    return _v11 ? (0, _v2.jsx)(_v22, {
      format: "negative",
      onClose: () => {
        _v12(!1), _v2?.();
      },
      hasMaxWidth: _v7,
      children: _v13
    }) : null;
  }], 0);
}