{
  "use strict";

  _v0.s(["KeywordContext", () => _v74, "TranscriptionKeywordsApp", () => _v76], 0);
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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0);
  async function _v25({
    baseUrl: _v0,
    select: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v23.measureLatency)("getUserTranscriptPhrases", "GET", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/transcript_phrases?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v3,
        method: "GET"
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  async function _v26({
    baseUrl: _v0,
    select: _v1,
    variables: _v2,
    where: {
      userId: _v3
    },
    ..._v4
  }) {
    return (0, _v23.measureLatency)("postUserTranscriptPhrases", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v3}/transcript_phrases?fields=${_v1.map(_v24.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "POST",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v2))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  _v0.s(["getUserTranscriptPhrases", 0, _v25, "postUserTranscriptPhrases", 0, _v26], 0);
  var _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0);
  async function _v30({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v23.measureLatency)("postUserTranscriptPhrasesBatch", "POST", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/transcript_phrases/batch`, {
        ..._v3,
        method: "POST",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  async function _v31({
    baseUrl: _v0,
    variables: _v1,
    where: {
      userId: _v2
    },
    ..._v3
  }) {
    return (0, _v23.measureLatency)("deleteUserTranscriptPhrasesBatch", "DELETE", async () => {
      let _v0 = await fetch(`${_v0}/users/${_v2}/transcript_phrases/batch`, {
        ..._v3,
        method: "DELETE",
        body: JSON.stringify((0, _v24.deepSnakeCase)(_v1))
      });
      if (!_v0.ok) throw new _v24.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v24.deepCamelCase)(_v1);
    });
  }
  var _v32 = _v0.i(0);
  function _v33() {
    let {
        mutate: _v0
      } = (0, _v32.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v27.useGctlConfig)(),
      [_v5, _v6] = (0, _v29.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/transcript_phrases/batch${(0, _v29.serializeQuery)(_v0)}`, _v30({
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
  }
  function _v34() {
    let {
        mutate: _v0
      } = (0, _v32.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v27.useGctlConfig)(),
      [_v5, _v6] = (0, _v29.useInternalState)();
    return [(0, _v2.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/users/${_v0.where.userId}/transcript_phrases/batch${(0, _v29.serializeQuery)(_v0)}`, _v31({
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
  }
  "true" === _v28.default.env.STORYBOOK && (0, _v29.assignMswData)(_v33, {
    endpoint: "/users/:userId/transcript_phrases/batch",
    method: "POST"
  }), "true" === _v28.default.env.STORYBOOK && (0, _v29.assignMswData)(_v34, {
    endpoint: "/users/:userId/transcript_phrases/batch",
    method: "DELETE"
  });
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0);
  let _v44 = (0, _v39.createNullObject)(["add_on_feature", "add_on_value", "currency", "discount_offer", "duration", "interface_type", "is_discount", "is_dismissible", "price", "promo_code_id", "purchase_type", "selected_plan", "usd_price"]),
    _v45 = () => {
      let _v0,
        _v1,
        _v2,
        _v3,
        _v4,
        _v5,
        {
          buildContexts: _v6,
          buildViewContext: _v7,
          buildActionContext: _v8
        } = (_v0 = (0, _v8.useViewer)(), _v1 = _v0?.teamUser, _v2 = (0, _v2.useCallback)(() => (0, _v40.buildTeamBpContextFromTeamUser)(_v1), [_v1]), _v3 = (0, _v2.useCallback)(_v0 => {
          let _v1;
          return _v1 = {
            view_type: "impression",
            feature: null,
            is_empty_state: _v0
          }, {
            view_context: new _v36.EventContext("view_context", 7, _v1)
          };
        }, []), _v4 = (0, _v2.useCallback)(() => (0, _v43.buildActionBpContext)({
          action_type: "click",
          feature: null
        }), []), _v5 = (0, _v2.useCallback)(_v0 => (0, _v41.buildWebBpContext)({
          path: window.location.pathname,
          page_name: _v0,
          location: null,
          referrer_page_name: null
        }), []), {
          buildContexts: (0, _v2.useCallback)(({
            copy: _v0,
            page: _v1
          }) => ({
            ...(0, _v38.buildProductAnalyticsBpContext)({
              product: "ai",
              feature: "language",
              copy: _v0,
              device_type: (0, _v37.default)(),
              location: "modal",
              modal_name: "ai_translations_vocabulary",
              element: null,
              flow: null
            }),
            ..._v5(_v1),
            ..._v2(),
            ...(0, _v42.buildThirdPartyIntegrationBpContext)({
              integration_id: null,
              integration_name: null,
              is_partner: null
            })
          }), [_v2, _v5]),
          buildViewContext: _v3,
          buildActionContext: _v4
        }),
        {
          page: _v9
        } = (0, _v2.useContext)(_v74),
        _v10 = (0, _v2.useCallback)(_v0 => {
          (0, _v39.sendBpEventWithContexts)("vimeo.upsell_trigger_impression", {
            ..._v6({
              copy: "upgrade for more",
              page: _v9
            }),
            ..._v7(0 === _v0)
          }, 31, {
            ..._v44,
            upsell_name: "custom_vocabulary"
          });
        }, [_v6, _v7, _v9]),
        _v11 = (0, _v2.useCallback)(() => {
          (0, _v39.sendBpEventWithContexts)("vimeo.trigger_upsell", {
            ..._v6({
              copy: "upgrade for more",
              page: _v9
            }),
            ..._v8()
          }, 31, {
            ..._v44,
            upsell_name: "custom_vocabulary"
          });
        }, [_v6, _v9, _v8]),
        _v12 = (0, _v2.useCallback)(_v0 => {
          (0, _v39.sendBpEventWithContexts)("vimeo.view_ai_vocabulary", {
            ..._v6({
              copy: "add_to_custom_vocabulary",
              page: _v9
            }),
            ..._v7(0 === _v0)
          }, 1, {
            value: String(_v0)
          });
        }, [_v6, _v7, _v9]);
      return {
        trackViewModal: _v12,
        trackViewModalSaveCancel: (0, _v2.useCallback)((_v0, _v1) => {
          (0, _v39.sendBpEventWithContexts)("vimeo.select_ai_vocabulary_action", {
            ..._v6({
              copy: _v0,
              page: _v9
            }),
            ..._v8()
          }, 1, {
            value: String(_v1)
          });
        }, [_v8, _v6, _v9]),
        trackViewModalUploadCsv: (0, _v2.useCallback)(() => {
          (0, _v39.sendBpEventWithContexts)("vimeo.select_ai_vocabulary_action", {
            ..._v6({
              copy: "upload_a_csv",
              page: _v9
            }),
            ..._v8()
          }, 1);
        }, [_v8, _v6, _v9]),
        trackViewUpgradeBadge: _v10,
        trackClickUpgradeBadge: _v11
      };
    };
  var _v46 = _v0.i(0);
  let _v47 = {
    addCustomVocabulary: (0, _v46.translate)({
      singular: "Add to custom vocabulary",
      dictionary: {
        es: {
          singular: "Añadir al vocabulario personalizado"
        },
        "de-DE": {
          singular: "Zum benutzerdefinierten Vokabular hinzufügen"
        },
        "fr-FR": {
          singular: "Ajouter au vocabulaire personnalisé"
        },
        "ja-JP": {
          singular: "カスタム語彙に追加"
        },
        "ko-KR": {
          singular: "커스텀 어휘에 추가"
        },
        "pt-BR": {
          singular: "Adicionar ao vocabulário customizado"
        },
        "zh-CN": {
          singular: "添加到自定义词汇"
        }
      }
    }),
    addUniqueWordsOrPhrasesToHelpVimeoAI: (0, _v46.translate)({
      singular: "Add unique words or phrases to help Vimeo AI transcribe videos",
      dictionary: {
        es: {
          singular: "Añada palabras o frases únicas para ayudar a Vimeo AI a transcribir videos"
        },
        "de-DE": {
          singular: "Fügen Sie einzigartige Wörter oder Ausdrücke hinzu, um Vimeo AI bei der Transkription von Videos zu unterstützen"
        },
        "fr-FR": {
          singular: "Ajoutez des mots ou des phrases uniques pour aider l'IA Vimeo à transcrire des vidéos."
        },
        "ja-JP": {
          singular: "ユニークな単語やフレーズを追加して、Vimeo AIが動画を文字起こしできるようにします。"
        },
        "ko-KR": {
          singular: "Vimeo AI가 동영상을 텍스트로 변환하는 데 도움이 될 고유한 단어나 문구를 추가하세요."
        },
        "pt-BR": {
          singular: "Adicione palavras ou frases únicas para ajudar o Vimeo AI a transcrever os vídeos"
        },
        "zh-CN": {
          singular: "添加独特的字词或短语，帮助 Vimeo AI 转录视频"
        }
      }
    }),
    cancel: (0, _v46.translate)({
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
    changesCouldNotBeSaved: (0, _v46.translate)({
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
    }),
    changesSaved: (0, _v46.translate)({
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
    countOfCount: (_v0, _v1) => (0, _v46.translate)({
      singular: "{COUNT_1} of {COUNT_2}",
      replacements: {
        COUNT_1: _v0,
        COUNT_2: _v1
      },
      dictionary: {
        es: {
          singular: "{COUNT_1} de {COUNT_2}"
        },
        "de-DE": {
          singular: "{COUNT_1} von {COUNT_2}"
        },
        "fr-FR": {
          singular: "{COUNT_1} sur {COUNT_2}"
        },
        "ja-JP": {
          singular: "{COUNT_1} / {COUNT_2}"
        },
        "ko-KR": {
          singular: "{COUNT_1}/{COUNT_2}"
        },
        "pt-BR": {
          singular: "{COUNT_1} de {COUNT_2}"
        },
        "zh-CN": {
          singular: "{COUNT_1} / {COUNT_2}"
        }
      }
    }),
    save: (0, _v46.translate)({
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
    deleteAll: (0, _v46.translate)({
      singular: "Delete all",
      dictionary: {
        es: {
          singular: "Eliminar todo"
        },
        "de-DE": {
          singular: "Alles löschen"
        },
        "fr-FR": {
          singular: "Tout supprimer"
        },
        "ja-JP": {
          singular: "すべてを削除"
        },
        "ko-KR": {
          singular: "모두 삭제"
        },
        "pt-BR": {
          singular: "Excluir tudo"
        },
        "zh-CN": {
          singular: "全部删除"
        }
      }
    }),
    import: (0, _v46.translate)({
      singular: "Import",
      dictionary: {
        es: {
          singular: "IMPORTAR"
        },
        "de-DE": {
          singular: "Importieren"
        },
        "fr-FR": {
          singular: "Importer"
        },
        "ja-JP": {
          singular: "インポート"
        },
        "ko-KR": {
          singular: "가져오기"
        },
        "pt-BR": {
          singular: "Importar"
        },
        "zh-CN": {
          singular: "导入"
        }
      }
    }),
    importCSV: (0, _v46.translate)({
      singular: "Import CSV",
      dictionary: {
        es: {
          singular: "Importar CSV"
        },
        "de-DE": {
          singular: "CSV importieren"
        },
        "fr-FR": {
          singular: "Importer un fichier CSV"
        },
        "ja-JP": {
          singular: "CSVをインポート"
        },
        "ko-KR": {
          singular: "CSV 가져오기"
        },
        "pt-BR": {
          singular: "Importar CSV"
        },
        "zh-CN": {
          singular: "导入 CSV"
        }
      }
    }),
    download: (0, _v46.translate)({
      singular: "Download",
      dictionary: {
        es: {
          singular: "Descargar"
        },
        "de-DE": {
          singular: "Herunterladen"
        },
        "fr-FR": {
          singular: "Télécharger "
        },
        "ja-JP": {
          singular: "ダウンロード"
        },
        "ko-KR": {
          singular: "다운로드"
        },
        "pt-BR": {
          singular: "Baixar"
        },
        "zh-CN": {
          singular: "下载"
        }
      }
    }),
    upgradeForMore: (0, _v46.translate)({
      singular: "Upgrade for more",
      dictionary: {
        es: {
          singular: "Cambie para obtener más"
        },
        "de-DE": {
          singular: "Mit Upgrade gibt's mehr Platz."
        },
        "fr-FR": {
          singular: "Passez au niveau supérieur pour en obtenir plus"
        },
        "ja-JP": {
          singular: "さらに大きな容量をご利用になるにはアップグレード"
        },
        "ko-KR": {
          singular: "추가 공간 확보를 위한 업그레이드"
        },
        "pt-BR": {
          singular: "Faça upgrade para obter mais espaço"
        },
        "zh-CN": {
          singular: "升级以获取更多功能"
        }
      }
    })
  };
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = (0, _v46.translate)({
    singular: "Unsupported file type. Upload a CSV or add words manually.",
    dictionary: {
      es: {
        singular: "Tipo de archivo no compatible. Suba un archivo CSV o agregue palabras manualmente."
      },
      "de-DE": {
        singular: "Nicht unterstützter Dateityp. Laden Sie eine CSV-Datei hoch oder fügen Sie Wörter manuell hinzu."
      },
      "fr-FR": {
        singular: "Type de fichier non pris en charge. Importez un fichier CSV ou ajoutez des mots manuellement."
      },
      "ja-JP": {
        singular: "対応していないファイルタイプです。CSVをアップロードするか、単語を手動で追加してください。"
      },
      "ko-KR": {
        singular: "지원되지 않는 파일 유형입니다. CSV 파일을 업로드하거나 단어를 수동으로 추가하세요."
      },
      "pt-BR": {
        singular: "Tipo de arquivo incompatível. Carregue um CSV ou adicione palavras manualmente."
      },
      "zh-CN": {
        singular: "不支持的文件类型。上传 CSV 文件或手动添加字词。"
      }
    }
  });
  function _v51({
    onUpload: _v0,
    onError: _v1
  }) {
    let {
        trackViewModalUploadCsv: _v2
      } = _v45(),
      _v3 = (0, _v2.useRef)(null),
      [_v4, _v5] = (0, _v2.useState)(!1);
    return (0, _v1.jsx)(_v15.Tooltip, {
      isDisabled: _v4,
      placement: "top",
      label: (0, _v46.translate)({
        singular: "Import CSV",
        dictionary: {
          es: {
            singular: "Importar CSV"
          },
          "de-DE": {
            singular: "CSV importieren"
          },
          "fr-FR": {
            singular: "Importer un fichier CSV"
          },
          "ja-JP": {
            singular: "CSVをインポート"
          },
          "ko-KR": {
            singular: "CSV 가져오기"
          },
          "pt-BR": {
            singular: "Importar CSV"
          },
          "zh-CN": {
            singular: "导入 CSV"
          }
        }
      }),
      children: (0, _v1.jsx)("div", {
        children: (0, _v1.jsx)(_v48.FileInput, {
          ref: _v3,
          sx: {
            padding: `0 ${(0, _v6.rem)(6)}`
          },
          isLoading: _v4,
          "aria-label": _v47.import,
          size: "sm",
          variant: "tertiary",
          label: (0, _v1.jsx)(_v49.FileUpload, {}),
          onClick: _v2,
          onChange: _v0 => {
            _v0.target.files?.[0] && (_v0 => {
              if (_v5(!0), _v0.size > 0) _v1((0, _v46.translate)({
                singular: "{FILE_NAME} is too big. Please upload a file under 5MB.",
                replacements: {
                  FILE_NAME: () => (0, _v1.jsx)("strong", {
                    children: _v0.name
                  })
                },
                dictionary: {
                  es: {
                    singular: "{FILE_NAME} es demasiado grande. Suba un archivo de menos de 5 MB."
                  },
                  "de-DE": {
                    singular: "{FILE_NAME} ist zu groß. Bitte lade eine Datei unter 5 MB hoch."
                  },
                  "fr-FR": {
                    singular: "Le fichier {FILE_NAME} est trop volumineux. Veuillez mettre en ligne un fichier de moins de 5 Mo."
                  },
                  "ja-JP": {
                    singular: "{FILE_NAME} は大きすぎます。5MB以下のファイルをアップロードしてください。"
                  },
                  "ko-KR": {
                    singular: "{FILE_NAME} 파일이 너무 큽니다. 5MB 미만의 파일을 업로드하세요."
                  },
                  "pt-BR": {
                    singular: "{FILE_NAME} é grande demais. Carregue um arquivo com menos de 5 MB."
                  },
                  "zh-CN": {
                    singular: "{FILE_NAME} 太大了。请上传小于 5MB 的文件。"
                  }
                }
              })), _v5(!1);else {
                _v1("");
                let _v0 = new FileReader();
                _v0.onload = function (_v0) {
                  let _v1 = _v0?.target?.result;
                  if ("string" != typeof _v1 || _v1.length <= 1) {
                    _v1(_v50), _v5(!1), _v3.current && (_v3.current.value = "");
                    return;
                  }
                  _v0(_v1.split(/\r\n|\n/)), _v5(!1);
                }, _v0.onerror = function () {
                  _v1(_v50), _v5(!1);
                }, _v0.readAsText(_v0);
              }
              _v3.current && (_v3.current.value = "");
            })(_v0.target.files[0]);
          },
          accept: ".csv"
        })
      })
    });
  }
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  let _v60 = new RegExp(/[^\p{L}\p{M} .,!?'":;_()-]/u),
    _v61 = "maxCharactersLengthError",
    _v62 = "maxWordLengthError",
    _v63 = "forbiddenSymbolsError",
    _v64 = {
      CHARACTERS_LIMIT_EXCEEDED: (0, _v46.translate)({
        singular: "Words must be {MAX_CHARACTERS} characters or less",
        replacements: {
          MAX_CHARACTERS: 50
        },
        dictionary: {
          es: {
            singular: "Las palabras deben tener {MAX_CHARACTERS} caracteres o menos"
          },
          "de-DE": {
            singular: "Wörter dürfen höchstens {MAX_CHARACTERS} Zeichen lang sein"
          },
          "fr-FR": {
            singular: "Les mots ne doivent pas contenir plus de {MAX_CHARACTERS} caractères."
          },
          "ja-JP": {
            singular: "単語は{MAX_CHARACTERS}文字以内にしてください"
          },
          "ko-KR": {
            singular: "단어는 {MAX_CHARACTERS}자 이하여야 합니다."
          },
          "pt-BR": {
            singular: "As palavras devem ter {MAX_CHARACTERS} caracteres ou menos"
          },
          "zh-CN": {
            singular: "字词不得超过 {MAX_CHARACTERS} 个字符"
          }
        }
      }),
      SOME_ITEMS_ARE_TOO_LONG: (0, _v46.translate)({
        singular: "Some items are too long and weren’t added. Words must be {MAX_CHARACTERS} characters or less, and phrases must be {MAX_WORDS} words or less.",
        replacements: {
          MAX_CHARACTERS: 50,
          MAX_WORDS: 5
        },
        dictionary: {
          es: {
            singular: "Algunos elementos son demasiado largos y no se añadieron. Las palabras deben tener {MAX_CHARACTERS} caracteres o menos, y las frases deben tener {MAX_WORDS} palabras o menos."
          },
          "de-DE": {
            singular: "Einige Elemente sind zu lang und wurden nicht hinzugefügt. Wörter dürfen höchstens {MAX_CHARACTERS} Zeichen lang sein, und Phrasen dürfen höchstens {MAX_WORDS} Wörter umfassen."
          },
          "fr-FR": {
            singular: "Certains éléments sont trop longs et n'ont pas été ajoutés. Les mots doivent comporter {MAX_CHARACTERS} caractères ou moins, et les phrases doivent comporter {MAX_WORDS} mots ou moins."
          },
          "ja-JP": {
            singular: "一部のアイテムが長すぎて追加されませんでした。単語は{MAX_CHARACTERS}文字以下で、フレーズは{MAX_WORDS}語以下でなければなりません。"
          },
          "ko-KR": {
            singular: "일부 항목은 너무 길어서 추가되지 않았습니다. 단어는 {MAX_CHARACTERS}자 이하여야 하며 문구는 {MAX_WORDS}단어 이하여야 합니다."
          },
          "pt-BR": {
            singular: "Alguns itens são muito longos e não foram adicionados. As palavras devem ter {MAX_CHARACTERS} caracteres ou menos e as frases devem ter {MAX_WORDS} palavras ou menos."
          },
          "zh-CN": {
            singular: "某些项目过长，因此未被添加。字词不得超过 {MAX_CHARACTERS} 个字符，短语则不得超过 {MAX_WORDS} 个字词。"
          }
        }
      }),
      WORDS_LIMIT_EXCEEDED: (0, _v46.translate)({
        singular: "Phrases must be {MAX_WORDS} words or less",
        replacements: {
          MAX_WORDS: 5
        },
        dictionary: {
          es: {
            singular: "Las frases deben tener {MAX_WORDS} palabras o menos"
          },
          "de-DE": {
            singular: "Phrasen müssen {MAX_WORDS} Wörter oder weniger umfassen"
          },
          "fr-FR": {
            singular: "Les phrases ne doivent pas contenir plus de {MAX_WORDS} mots."
          },
          "ja-JP": {
            singular: "フレーズは{MAX_WORDS}語以下にしてください"
          },
          "ko-KR": {
            singular: "문구는 {MAX_WORDS}단어 이하여야 합니다."
          },
          "pt-BR": {
            singular: "As frases devem ter {MAX_WORDS} palavras ou menos"
          },
          "zh-CN": {
            singular: "短语不得超过 {MAX_WORDS} 个字词"
          }
        }
      }),
      PHRASES_LIMIT_REACHED: (_v0, _v1) => (0, _v46.translate)({
        singular: "You can add up to {MAX_PHRASES} words and phrases. Remove {EXTRA_PHRASES} to add.",
        replacements: {
          MAX_PHRASES: _v0,
          EXTRA_PHRASES: _v1
        },
        dictionary: {
          es: {
            singular: "Puede añadir hasta {MAX_PHRASES} palabras y frases. Elimine {EXTRA_PHRASES} para añadir."
          },
          "de-DE": {
            singular: "Sie können bis zu {MAX_PHRASES} Wörter und Ausdrücke hinzufügen. Entfernen Sie {EXTRA_PHRASES}, um hinzuzufügen."
          },
          "fr-FR": {
            singular: "Vous pouvez ajouter jusqu'à {MAX_PHRASES} mots et expressions. Supprimez {EXTRA_PHRASES} pour procéder à l'ajout."
          },
          "ja-JP": {
            singular: "最大{MAX_PHRASES}件の単語とフレーズを追加できます。追加するには{EXTRA_PHRASES}を削除してください。"
          },
          "ko-KR": {
            singular: "최대 {MAX_PHRASES}개의 단어와 문구를 추가할 수 있습니다. 추가하려면 {EXTRA_PHRASES}을(를) 제거하세요."
          },
          "pt-BR": {
            singular: "Você pode adicionar até {MAX_PHRASES} palavras e frases. Para adicionar outra, remova {EXTRA_PHRASES}."
          },
          "zh-CN": {
            singular: "最多可以添加 {MAX_PHRASES} 个字词和短语。移除 {EXTRA_PHRASES} 即可添加。"
          }
        }
      }),
      PHRASE_ALREADY_ADDED: (0, _v46.translate)({
        singular: "This word or phrase has already been added",
        dictionary: {
          es: {
            singular: "Esta palabra o frase ya se añadió."
          },
          "de-DE": {
            singular: "Dieses Wort oder dieser Ausdruck wurde bereits hinzugefügt."
          },
          "fr-FR": {
            singular: "Ce mot ou cette phrase a déjà été ajoutée."
          },
          "ja-JP": {
            singular: "この単語またはフレーズはすでに追加されています"
          },
          "ko-KR": {
            singular: "이 단어 또는 문구는 이미 추가되었습니다."
          },
          "pt-BR": {
            singular: "A palavra ou frase já foi adicionada"
          },
          "zh-CN": {
            singular: "已添加此字词或短语"
          }
        }
      }),
      FORBIDDEN_CHARACTERS: (0, _v46.translate)({
        singular: "Remove any numerals, dashes, or special characters",
        dictionary: {
          es: {
            singular: "Elimine cualquier número, guion o carácter especial"
          },
          "de-DE": {
            singular: "Entfernen Sie alle Ziffern, Bindestriche oder Sonderzeichen."
          },
          "fr-FR": {
            singular: "Supprimez tous les chiffres, tirets ou caractères spéciaux."
          },
          "ja-JP": {
            singular: "数字、ダッシュ、特殊文字を削除"
          },
          "ko-KR": {
            singular: "숫자, 대시 또는 특수 문자를 제거하세요."
          },
          "pt-BR": {
            singular: "Remova quaisquer numerais, traços ou caracteres especiais"
          },
          "zh-CN": {
            singular: "请移除所有数字、短横线或特殊字符"
          }
        }
      }),
      SOME_WERE_NOT_ADDED: (0, _v46.translate)({
        singular: "Some items weren’t added. Remove any numerals, dashes, or non-standard characters and try again.",
        dictionary: {
          es: {
            singular: "Algunos artículos no se agregaron. Elimine cualquier número, guion o carácter no estándar e inténtelo de nuevo."
          },
          "de-DE": {
            singular: "Einige Elemente wurden nicht hinzugefügt. Entfernen Sie alle Ziffern, Bindestriche oder nicht standardmäßige Zeichen und versuchen Sie es erneut."
          },
          "fr-FR": {
            singular: "Certains éléments n'ont pas été ajoutés. Supprimez tous les chiffres, tirets ou caractères non standard et réessayez."
          },
          "ja-JP": {
            singular: "一部のアイテムが追加されませんでした。数字、ダッシュ、標準外の文字を削除してから、もう一度お試しください。"
          },
          "ko-KR": {
            singular: "일부 항목이 추가되지 않았습니다. 숫자, 대시 또는 비표준 문자를 없애고 다시 시도해주세요."
          },
          "pt-BR": {
            singular: "Alguns itens não foram adicionados. Exclua numerais, traços e caracteres incomuns e tente novamente."
          },
          "zh-CN": {
            singular: "未添加某些项目。请移除所有数字、短横线或非标准字符，然后重试。"
          }
        }
      })
    };
  function _v65(_v0) {
    return _v0.length > 50 ? {
      message: _v64.CHARACTERS_LIMIT_EXCEEDED,
      error: _v61
    } : _v0.match(_v60) ? {
      message: _v64.FORBIDDEN_CHARACTERS,
      error: _v63
    } : _v0.trim().split(/\s+/).length > 5 ? {
      message: _v64.WORDS_LIMIT_EXCEEDED,
      error: _v62
    } : null;
  }
  function _v66(_v0, _v1 = [], _v2 = 0) {
    let _v3 = _v0.split(",").reduce((_v0, _v1) => {
      let _v2 = _v1.trim();
      return _v2 && _v0.push(_v2), _v0;
    }, []);
    if (_v1.length) {
      let _v0 = _v2 - _v1.length - _v3.length;
      if (_v0 < 0) return {
        error: _v64.PHRASES_LIMIT_REACHED(_v2, Math.abs(_v0))
      };
      if (_v1.filter(_v0 => _v3.includes(_v0.phrase)).length) return {
        error: _v64.PHRASE_ALREADY_ADDED
      };
    }
    for (let _v0 = 0; _v0 < _v3.length; _v0++) {
      let _v0 = _v65(_v3[_v0]);
      if (_v0) return {
        error: _v0.message
      };
    }
    return {
      phrases: _v3
    };
  }
  function _v67(_v0, _v1, _v2) {
    let _v3 = [],
      _v4 = "";
    _v0.forEach(_v0 => {
      let _v1 = _v0.replaceAll('"', "").split(",").reduce((_v0, _v1) => {
          let _v2 = _v1.trim();
          return _v2 && _v0.push(_v2), _v0;
        }, []),
        _v2 = _v1.map(_v0 => _v0.phrase);
      _v1.forEach(_v0 => {
        let _v1 = _v65(_v0);
        _v4 || _v1?.error !== _v61 && _v1?.error !== _v62 && _v1?.error !== _v63 || (_v4 = _v1.error), _v1 || _v2.includes(_v0) || _v3.push(_v0);
      });
    });
    let _v5 = _v3.filter(function (_v0, _v1, _v2) {
        return _v2.indexOf(_v0) == _v1;
      }),
      _v6 = _v2 - _v1.length - _v5.length;
    return _v6 < 0 ? {
      error: _v64.PHRASES_LIMIT_REACHED(_v2, Math.abs(_v6))
    } : _v4 === _v63 ? {
      phrases: _v5,
      error: _v64.SOME_WERE_NOT_ADDED
    } : _v4 === _v62 || _v4 === _v61 ? {
      phrases: _v5,
      error: _v64.SOME_ITEMS_ARE_TOO_LONG
    } : {
      phrases: _v5
    };
  }
  function _v68({
    isLoading: _v0,
    phrases: _v1,
    phrasesLimit: _v2,
    onAddPhrases: _v3,
    onRemovePhrase: _v4
  }) {
    let [_v5, _v6] = (0, _v2.useState)(""),
      [_v7, _v8] = (0, _v2.useState)(""),
      _v9 = (0, _v2.useCallback)(() => {
        let _v0 = _v66(_v7, _v1, _v2);
        _v0?.error ? _v6(_v0.error) : _v0?.phrases && (_v8(""), _v3(_v0.phrases));
      }, [_v7, _v3, _v1, _v2]),
      _v10 = (0, _v2.useCallback)(_v0 => {
        "Enter" === _v0.key && _v9();
      }, [_v9]),
      _v11 = (0, _v2.useCallback)(_v0 => {
        _v6(""), _v8(_v0.target.value);
      }, []);
    return (0, _v1.jsxs)(_v52.VStack, {
      gap: (0, _v6.rem)(12),
      children: [(0, _v1.jsxs)(_v57.FormControl, {
        w: "100%",
        children: [(0, _v1.jsx)(_v58.Flex, {
          gap: "10",
          children: (0, _v1.jsxs)(_v55.InputGroup, {
            children: [(0, _v1.jsx)(_v54.Input, {
              isInvalid: !!_v5,
              onKeyDown: _v10,
              onChange: _v11,
              isDisabled: _v0,
              value: _v7
            }), (0, _v1.jsx)(_v56.InputRightElement, {})]
          })
        }), (0, _v1.jsx)(_v57.FormHelperText, {
          mt: (0, _v6.rem)(8),
          color: _v5 ? "status-destructive-primary" : void 0,
          children: _v5 || (0, _v46.translate)({
            singular: "Press enter to add a word, phrase, or list separated by commas",
            dictionary: {
              es: {
                singular: "Presione Intro para añadir una palabra, frase o lista separada por comas"
              },
              "de-DE": {
                singular: "Drücken Sie die Eingabetaste, um ein Wort, eine Phrase oder eine durch Kommas getrennte Liste hinzuzufügen."
              },
              "fr-FR": {
                singular: "Appuyez sur Entrée pour ajouter un mot, une expression ou une liste séparée par des virgules"
              },
              "ja-JP": {
                singular: "Enterキーを押して、単語、フレーズ、またはリストをカンマで区切って追加します。"
              },
              "ko-KR": {
                singular: "단어, 문구 또는 목록을 쉼표로 구분하고 엔터 키를 눌러 추가하세요."
              },
              "pt-BR": {
                singular: "Pressione enter para adicionar uma palavra, frase ou lista separada por vírgulas"
              },
              "zh-CN": {
                singular: "按回车键添加字词、短语或用逗号分隔的列表"
              }
            }
          })
        })]
      }), _v1.length && (0, _v1.jsx)(_v12.HStack, {
        w: "100%",
        maxHeight: (0, _v6.rem)(268),
        flexWrap: "wrap",
        justifyContent: "flex-start",
        overflow: "auto",
        children: _v1.map(_v0 => (0, _v1.jsxs)(_v53.Tag, {
          size: "md",
          children: [(0, _v1.jsx)(_v53.TagLabel, {
            children: _v0.phrase
          }), (0, _v1.jsx)(_v53.TagCloseButton, {
            onClick: () => _v4(_v0),
            children: (0, _v1.jsx)(_v16.IconButton, {
              isDisabled: _v0,
              marginLeft: "8px",
              "aria-label": (0, _v46.translate)({
                singular: "Delete phrase",
                dictionary: {
                  es: {
                    singular: "Eliminar frase"
                  },
                  "de-DE": {
                    singular: "Phrase löschen"
                  },
                  "fr-FR": {
                    singular: "Supprimer la phrase"
                  },
                  "ja-JP": {
                    singular: "フレーズを削除"
                  },
                  "ko-KR": {
                    singular: "문구 삭제"
                  },
                  "pt-BR": {
                    singular: "Excluir frase"
                  },
                  "zh-CN": {
                    singular: "删除短语"
                  }
                }
              }),
              variant: "tertiary",
              icon: (0, _v1.jsx)(_v59.CloseX, {}),
              size: "xs"
            })
          })]
        }, _v0.uri))
      })]
    });
  }
  _v0.s(["getValidatedPhrases", 0, _v66, "getValidatedPhrasesCsv", 0, _v67], 0);
  var _v69 = _v0.i(0);
  let _v70 = ({
      onClick: _v0
    }) => (0, _v1.jsx)(_v69.Badge, {
      onClick: _v0,
      marginLeft: "8px",
      variant: "upgrade",
      cursor: "pointer",
      size: "sm",
      children: _v47.upgradeForMore
    }),
    _v71 = ({
      onCancel: _v0,
      userId: _v1,
      onOpenEnterpriseModal: _v2,
      transcriptPhrasesLimit: _v3
    }) => {
      let {
          baseUrl: _v4,
          jwt: _v5,
          xVimeoPage: _v6,
          locale: _v7
        } = (0, _v27.useGctlConfig)(),
        _v8 = (0, _v2.useRef)(!1),
        _v9 = (0, _v2.useRef)(null),
        {
          trackViewModal: _v10,
          trackViewModalSaveCancel: _v11,
          trackViewUpgradeBadge: _v12,
          trackClickUpgradeBadge: _v13
        } = _v45(),
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)([]),
        [_v18, _v19] = (0, _v2.useState)([]),
        [_v20, _v21] = (0, _v2.useState)([]),
        [_v22, _v23] = (0, _v2.useState)(""),
        _v24 = (0, _v2.useMemo)(() => _v3 && _v3 < 0, [_v3]),
        [_v25] = _v33(),
        [_v26] = _v34(),
        _v27 = (0, _v2.useCallback)((_v0, _v1) => -1 !== _v0.findIndex(_v0 => _v0.uri === _v1.uri), []),
        _v28 = (0, _v13.useToast)({
          title: _v47.changesSaved,
          duration: 0,
          icon: (0, _v1.jsx)(_v19.InfoCircle, {})
        }),
        _v29 = (0, _v13.useToast)({
          title: _v47.changesCouldNotBeSaved,
          duration: 0,
          icon: (0, _v1.jsx)(_v20.CircleExclamation, {})
        }),
        _v30 = (0, _v2.useCallback)(() => {
          _v11("cancel", _v16.length), _v0();
        }, [_v0, _v11, _v16]),
        _v31 = (0, _v2.useCallback)(() => _v25({
          select: ["uri", "phrase"],
          where: {
            userId: _v1
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: _v5 ? `jwt ${_v5}` : "",
            "Vimeo-Page": `${_v6}`,
            "Accept-Language": _v7 ?? "en"
          },
          baseUrl: _v4
        }).then(_v0 => {
          let _v1 = _v0.data;
          _v17(_v1), _v1 && !_v8.current && (_v8.current = !0, _v10(_v1.length), _v24 && _v12(_v1.length));
        }), [_v1, _v5, _v6, _v7, _v4, _v10, _v24, _v12]),
        _v32 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v18.length - 1,
            _v2 = _v0.map((_v0, _v1) => ({
              phrase: _v0,
              uri: `add_phrase#${_v1 + _v1}`
            }));
          _v19(_v0 => [..._v0, ..._v2]);
        }, [_v18.length]),
        _v33 = (0, _v2.useCallback)(_v0 => {
          _v27(_v18, _v0) ? _v19(_v0 => _v0.filter(_v0 => _v0.uri !== _v0.uri)) : _v21(_v0 => [..._v0, _v0]);
        }, [_v27, _v18]),
        _v34 = (0, _v2.useMemo)(() => [..._v16.filter(_v0 => !_v27(_v20, _v0)), ..._v18], [_v27, _v16, _v18, _v20]),
        _v35 = (0, _v2.useCallback)(() => {
          _v11("save", _v34.length), _v15(!0);
          let _v0 = [];
          _v20.length && _v0.push(_v26({
            where: {
              userId: _v1
            },
            variables: {
              uuids: _v20.map(_v0 => String(_v0.uri.split("/").pop()))
            }
          })), _v18.length && _v0.push(_v25({
            where: {
              userId: _v1
            },
            variables: {
              phrases: _v18.map(_v0 => _v0.phrase)
            }
          })), Promise.allSettled(_v0).then(_v31).then(() => {
            _v19([]), _v21([]), _v15(!1), _v28();
          }).catch(() => _v29());
        }, [_v26, _v18, _v34.length, _v20, _v25, _v31, _v29, _v28, _v11, _v1]),
        _v36 = (0, _v2.useCallback)(() => {
          _v21(_v16), _v19([]);
        }, [_v16]),
        _v37 = (0, _v2.useCallback)(() => {
          let _v0 = new Blob([_v16.map(_v0 => _v0.phrase).join(",")], {
              type: "text/csv;charset=utf-8;"
            }),
            _v1 = URL.createObjectURL(_v0);
          (0, _v35.downloadFile)(_v1);
        }, [_v16]),
        _v38 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v67(_v0, [..._v16, ..._v18], _v3);
          (!_v1?.error || (_v23(_v1.error), _v1.phrases)) && _v1?.phrases && _v32(_v1?.phrases);
        }, [_v16, _v18, _v3, _v32]),
        _v39 = (0, _v2.useCallback)(() => {
          _v2(), _v13();
        }, [_v2, _v13]);
      (0, _v2.useEffect)(() => {
        _v15(!0), _v31().then(() => _v15(!1));
      }, []), (0, _v14.useOutsideClick)({
        ref: _v9,
        handler: () => {
          _v18.length || _v20.length || _v0();
        }
      });
      let _v40 = !_v14 && !!(_v18.length || _v20.length),
        _v41 = _v16.length + _v18.length - _v20.length;
      return (0, _v1.jsxs)(_v9.Box, {
        ref: _v9,
        children: [(0, _v1.jsx)(_v10.Text, {
          variant: "heading-md",
          mb: (0, _v6.rem)(12),
          children: _v47.addCustomVocabulary
        }), (0, _v1.jsx)(_v10.Text, {
          variant: "body-md",
          color: "text-secondary",
          mb: (0, _v6.rem)(16),
          children: _v47.addUniqueWordsOrPhrasesToHelpVimeoAI
        }), _v22 && (0, _v1.jsx)(_v17.Alert, {
          status: "error",
          mb: (0, _v6.rem)(12),
          onClose: () => _v23(""),
          children: (0, _v1.jsx)(_v18.AlertDescription, {
            children: _v22
          })
        }), (0, _v1.jsx)(_v68, {
          setIsLoading: _v15,
          isLoading: _v14,
          phrases: _v34,
          onAddPhrases: _v32,
          phrasesLimit: Number(_v3),
          onRemovePhrase: _v33
        }), _v3 && (0, _v1.jsxs)(_v10.Text, {
          variant: "body-xl",
          fontSize: "text-xs",
          ml: (0, _v6.rem)(4),
          mt: (0, _v6.rem)(16),
          color: "text-secondary",
          children: [_v47.countOfCount(_v41, _v3), _v24 && (0, _v1.jsx)(_v70, {
            onClick: _v39
          })]
        }), (0, _v1.jsxs)(_v12.HStack, {
          justifyContent: "space-between",
          children: [(0, _v1.jsxs)(_v12.HStack, {
            justifyContent: "start",
            children: [(0, _v1.jsx)(_v15.Tooltip, {
              label: _v47.importCSV,
              isDisabled: _v14,
              placement: "top",
              children: (0, _v1.jsx)(_v51, {
                onUpload: _v38,
                onError: _v23
              })
            }), (0, _v1.jsx)(_v15.Tooltip, {
              label: _v47.download,
              isDisabled: !_v16.length,
              placement: "top",
              children: (0, _v1.jsx)(_v16.IconButton, {
                isDisabled: !_v16.length,
                "aria-label": _v47.download,
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v22.DownloadImport, {}),
                size: "sm",
                onClick: _v37
              })
            }), (0, _v1.jsx)(_v15.Tooltip, {
              label: _v47.deleteAll,
              isDisabled: !_v34.length,
              placement: "top",
              children: (0, _v1.jsx)(_v16.IconButton, {
                isDisabled: !_v34.length,
                "aria-label": _v47.deleteAll,
                variant: "tertiary",
                icon: (0, _v1.jsx)(_v21.TrashBin, {}),
                size: "sm",
                onClick: _v36
              })
            })]
          }), (0, _v1.jsxs)(_v12.HStack, {
            justifyContent: "end",
            children: [(0, _v1.jsx)(_v11.Button, {
              size: "md",
              variant: "tertiary",
              onClick: _v30,
              children: _v47.cancel
            }), (0, _v1.jsx)(_v11.Button, {
              isDisabled: !_v40,
              size: "md",
              variant: "primary",
              onClick: _v35,
              children: _v47.save
            })]
          })]
        })]
      });
    },
    _v72 = (0, _v0.i(0).default)(() => _v0.A(0), {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v73 = ({
      onClose: _v0
    }) => {
      let _v1 = (0, _v8.useViewer)();
      return (0, _v1.jsx)(_v72, {
        apiUrl: _v1?.apiUrl,
        userConfig: {
          jwt: _v1?.jwt,
          userId: _v1?.user?.id
        },
        templateType: "enterprise",
        onClose: _v0,
        tracking: {
          params: {
            upsell_name: "custom_vocabulary",
            feature: "language",
            location: "modal",
            page: window.location.pathname
          },
          paywallTracking: {
            paywallTrigger: "transcription_keywords_enterprise_upgrade_button",
            paywallLocation: "transcription_keywords",
            paywallType: "popup",
            paywallFeature: "language"
          }
        },
        modalConfig: {
          mkcCode: "custom-vocabulary"
        }
      });
    },
    _v74 = (0, _v2.createContext)({
      page: "single_video_view_manage"
    }),
    _v75 = (0, _v2.forwardRef)(({}, _v0) => {
      let _v1 = (0, _v8.useViewer)(),
        [_v2, _v3] = (0, _v2.useState)(!1),
        [_v4, _v5] = (0, _v2.useState)(!1),
        _v6 = _v1?.teamUser?.ownerId ?? _v1?.user?.id,
        {
          data: _v7
        } = (0, _v7.useGetUser)(() => ({
          where: {
            userId: Number(_v6)
          },
          select: ["transcriptPhrasesLimit"]
        })),
        _v8 = _v7?.transcriptPhrasesLimit;
      (0, _v2.useImperativeHandle)(_v0, () => ({
        openModal() {
          _v3(!0);
        }
      }), []);
      let _v9 = (0, _v2.useCallback)(() => {
          _v3(!1);
        }, []),
        _v10 = (0, _v2.useCallback)(() => {
          _v3(!1), _v5(!1);
        }, []);
      return _v4 ? (0, _v1.jsx)(_v73, {
        onClose: _v10
      }) : (0, _v1.jsxs)(_v3.Modal, {
        isOpen: _v2,
        onClose: _v9,
        closeOnOverlayClick: !1,
        children: [(0, _v1.jsx)(_v5.ModalOverlay, {}), (0, _v1.jsx)(_v4.ModalContent, {
          p: `${(0, _v6.rem)(16)} ${(0, _v6.rem)(24)}`,
          maxWidth: (0, _v6.rem)(480),
          maxHeight: (0, _v6.rem)(660),
          children: _v6 && _v8 && (0, _v1.jsx)(_v71, {
            onCancel: _v9,
            userId: _v6,
            onOpenEnterpriseModal: () => _v5(!0),
            transcriptPhrasesLimit: _v8
          })
        })]
      });
    }),
    _v76 = ({
      forwardRef: _v0,
      location: _v1
    }) => (0, _v1.jsx)(_v74.Provider, {
      value: {
        page: _v1
      },
      children: (0, _v1.jsx)(_v75, {
        ref: _v0
      })
    });
}