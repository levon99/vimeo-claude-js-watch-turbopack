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
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0);
  let _v28 = {
    SAVE: "save",
    SAVE_AS_NEW_VIDEO: "save as new video",
    SAVE_AS_NEW_TEMPLATE: "save as new template",
    SAVE_TEMPLATE: "save template"
  };
  _v0.s(["SAVE_COPY", 0, _v28], 0);
  var _v29 = _v0.i(0),
    _v30 = _v0.i(0);
  let _v31 = ({
    copy: _v0
  }) => {
    _v30.default.send({
      eventName: "vimeo.view_save_modal",
      version: -1,
      contexts: {
        ..._v30.default.buildProductAnalyticsContext({
          feature: "save",
          location: "modal",
          copy: _v0
        }),
        ..._v30.default.buildViewContext("pageview")
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: null,
        third_party_integration: _v30.default.getThirdPartyIntegration()
      }
    });
  };
  _v0.s(["sendTrackSelectSave", 0, ({
    copy: _v0,
    location: _v1
  }) => {
    _v30.default.send({
      eventName: "vimeo.save_editor",
      version: 1,
      contexts: {
        ..._v30.default.buildActionContext("click"),
        ..._v30.default.buildEditorContext({
          via: null,
          editorFeature: "save"
        }),
        ..._v30.default.buildProductAnalyticsContext({
          is_user_facing_data: !1,
          feature: "save",
          location: _v1,
          copy: _v0
        }),
        ..._v30.default.buildWebContext(),
        ..._v30.default.buildTeamContext()
      },
      additionalFields: {
        action_cta: _v0
      }
    });
  }, "sendTrackSelectSaveAs", 0, ({
    copy: _v0
  }) => {
    _v30.default.send({
      eventName: "vimeo.save_as_action",
      version: 1,
      contexts: {
        ..._v30.default.buildActionContext("click"),
        ..._v30.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v30.default.buildProductAnalyticsContext({
          feature: "save",
          location: "header",
          copy: _v0
        })
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: null,
        third_party_integration: _v30.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackSelectSaveAsModal", 0, ({
    copy: _v0
  }) => {
    _v30.default.send({
      eventName: "vimeo.select_save_modal",
      version: 1,
      contexts: {
        ..._v30.default.buildActionContext("click"),
        ..._v30.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v30.default.buildProductAnalyticsContext({
          feature: "save",
          location: "modal",
          copy: _v0
        })
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: null,
        third_party_integration: _v30.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackSelectSaveDropdown", 0, () => {
    _v30.default.send({
      eventName: "vimeo.open_save_dropdown",
      version: 1,
      contexts: {
        ..._v30.default.buildActionContext("click"),
        ..._v30.default.buildEditorContext({
          via: null,
          editorFeature: ""
        }),
        ..._v30.default.buildProductAnalyticsContext({
          feature: "save",
          location: "header",
          element: "dropdown"
        })
      },
      additionalFields: {
        action_cta: null,
        action_state: null,
        selection_id: null,
        selection_name: null,
        selection_format: null,
        number_of_elements: null,
        third_party_integration: _v30.default.getThirdPartyIntegration()
      }
    });
  }, "sendTrackViewSaveAsModal", 0, _v31], 0), _v0.s(["useAlerts", 0, () => {
    let _v0 = (0, _v25.useAppDispatch)(),
      _v1 = (0, _v4.useHistory)(),
      _v2 = (0, _v3.useContext)(_v12.ViewerContext),
      [_v3, _v4] = (0, _v10.default)(_v15.SHOW_USE_ALL_SCENES_LOCAL_STORAGE_KEY, !0),
      _v5 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "File is too big",
            dictionary: {
              es: {
                singular: "El archivo es demasiado grande"
              },
              "de-DE": {
                singular: "Die Datei ist zu groß"
              },
              "fr-FR": {
                singular: "Fichier trop volumineux"
              },
              "ja-JP": {
                singular: "ファイルが大きすぎます"
              },
              "ko-KR": {
                singular: "파일이 너무 큽니다"
              },
              "pt-BR": {
                singular: "O arquivo é muito grande"
              },
              "zh-CN": {
                singular: "文件太大"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Image size should be less than {MAX_LOGO_SIZE_MB}MB",
            replacements: {
              MAX_LOGO_SIZE_MB: _v18.MAX_LOGO_SIZE_MB
            },
            dictionary: {
              es: {
                singular: "El tamaño de la imagen debe pesar menos de {MAX_LOGO_SIZE_MB} MB"
              },
              "de-DE": {
                singular: "Das Bild muss kleiner als {MAX_LOGO_SIZE_MB} MB sein"
              },
              "fr-FR": {
                singular: "La taille de l'image doit être inférieure à {MAX_LOGO_SIZE_MB} Mo"
              },
              "ja-JP": {
                singular: "画像サイズは {MAX_LOGO_SIZE_MB}MB未満である必要があります"
              },
              "ko-KR": {
                singular: "이미지 크기는 {MAX_LOGO_SIZE_MB}MB보다 작아야 합니다"
              },
              "pt-BR": {
                singular: "O tamanho da imagem deve ser menor que {MAX_LOGO_SIZE_MB} MB"
              },
              "zh-CN": {
                singular: "图片应小于 {MAX_LOGO_SIZE_MB}MB"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.fileIsTooBig,
          errorCode: _v16.FILE_IS_TOO_BIG.toString()
        }));
      }, [_v0]),
      _v6 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "File is too small",
            dictionary: {
              es: {
                singular: "El archivo es demasiado pequeño"
              },
              "de-DE": {
                singular: "Die Datei ist zu klein"
              },
              "fr-FR": {
                singular: "Fichier trop petit"
              },
              "ja-JP": {
                singular: "ファイルが小さすぎます"
              },
              "ko-KR": {
                singular: "파일이 너무 작습니다"
              },
              "pt-BR": {
                singular: "O arquivo é muito pequeno"
              },
              "zh-CN": {
                singular: "文件过小"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Image size should be more than {MIN_LOGO_HEIGHT}x{MIN_LOGO_WIDTH}",
            replacements: {
              MIN_LOGO_HEIGHT: _v18.MIN_LOGO_HEIGHT,
              MIN_LOGO_WIDTH: _v18.MIN_LOGO_WIDTH
            },
            dictionary: {
              es: {
                singular: "El tamaño de la imagen debe ser mayor a {MIN_LOGO_HEIGHT} x {MIN_LOGO_WIDTH}"
              },
              "de-DE": {
                singular: "Das Bild muss größer als {MIN_LOGO_HEIGHT} x {MIN_LOGO_WIDTH} sein"
              },
              "fr-FR": {
                singular: "La taille de l'image doit être supérieure à {MIN_LOGO_HEIGHT}x{MIN_LOGO_WIDTH}"
              },
              "ja-JP": {
                singular: "画像サイズは {MIN_LOGO_HEIGHT}x{MIN_LOGO_WIDTH} より大きくなければなりません"
              },
              "ko-KR": {
                singular: "이미지 크기는 {MIN_LOGO_HEIGHT}x{MIN_LOGO_WIDTH}보다 커야 합니다"
              },
              "pt-BR": {
                singular: "O tamanho da imagem deve ser maior que {MIN_LOGO_HEIGHT}x{MIN_LOGO_WIDTH}"
              },
              "zh-CN": {
                singular: "图片应大于 {MIN_LOGO_HEIGHT}x{MIN_LOGO_WIDTH}"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.fileIsTooSmall,
          errorCode: _v16.FILE_IS_TOO_SMALL.toString()
        }));
      }, [_v0]),
      _v7 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Fonts already exist in library",
            dictionary: {
              es: {
                singular: "Las fuentes ya existen en la biblioteca"
              },
              "de-DE": {
                singular: "Diese Schriftarten sind bereits in der Bibliothek vorhanden"
              },
              "fr-FR": {
                singular: "Les polices existent déjà dans la bibliothèque"
              },
              "ja-JP": {
                singular: "フォントは既にライブラリに存在します"
              },
              "ko-KR": {
                singular: "라이브러리에 폰트가 이미 있습니다."
              },
              "pt-BR": {
                singular: "As fontes já existem na biblioteca"
              },
              "zh-CN": {
                singular: "字体已存在于字体库中"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "This font hasn’t been uploaded since it already exists in the font library. You can find it on the list of available fonts and select it from there.",
            dictionary: {
              es: {
                singular: "Esta fuente no se ha subido porque ya existe en la biblioteca de fuentes. Puedes encontrarla en la lista de fuentes disponibles y seleccionarla allí."
              },
              "de-DE": {
                singular: "Diese Schriftart wurde nicht hochgeladen, da sie bereits in der Schriftartbibliothek vorhanden ist. Du findest sie in der Liste verfügbarer Schriftarten und kannst sie von dort aus auswählen."
              },
              "fr-FR": {
                singular: "Cette police existe déjà dans la bibliothèque, elle n'a donc pas été importée. Vous la retrouverez dans la liste de polices disponibles, d'où vous pourrez la sélectionner."
              },
              "ja-JP": {
                singular: "このフォントは、フォントライブラリに既に存在するためアップロードされていません。これは使用可能なフォントリストから選択できます。"
              },
              "ko-KR": {
                singular: "이 폰트는 폰트 라이브러리에 이미 존재하여 업로드되지 않았습니다. 사용 가능한 폰트 목록에서 찾아 선택할 수 있습니다."
              },
              "pt-BR": {
                singular: "Esta fonte não foi carregada, porque já está incluída na biblioteca de fontes. Você pode encontrá-la e selecioná-la na lista de fontes disponíveis."
              },
              "zh-CN": {
                singular: "该字体尚未上传，因为它已存在于字体库中。您可以在可用字体列表中找到，然后从中选择。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.fontsAlreadyExistInLibrary,
          errorCode: _v16.FONT_ALREADY_EXIST.toString()
        }));
      }, [_v0]),
      _v8 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "You’ve reached the upload limit",
            dictionary: {
              es: {
                singular: "Ha alcanzado el límite de subida"
              },
              "de-DE": {
                singular: "Du hast das Upload-Limit erreicht"
              },
              "fr-FR": {
                singular: "Vous avez atteint la limite de mise en ligne"
              },
              "ja-JP": {
                singular: "アップロード制限に達しました"
              },
              "ko-KR": {
                singular: "업로드 한도에 도달했습니다."
              },
              "pt-BR": {
                singular: "Você atingiu o limite de carregamento"
              },
              "zh-CN": {
                singular: "您已达到上传限制"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "You can upload up to 30 fonts to your Brand fonts. To upload new fonts, delete older ones you’re not using.",
            dictionary: {
              es: {
                singular: "Puede subir hasta 30 fuentes a las fuentes de su marca. Para subir fuentes nuevas, elimine las antiguas que no esté utilizando."
              },
              "de-DE": {
                singular: "Du kannst bis zu 30 Schriftarten als Markenschriftarten hochladen. Um neue Schriftarten hochzuladen, lösche ältere, die du nicht mehr verwendest."
              },
              "fr-FR": {
                singular: "Vous pouvez importer jusqu'à 30 polices dans vos polices de marque. Pour importer de nouvelles polices, supprimez les anciennes que vous n'utilisez pas."
              },
              "ja-JP": {
                singular: "ブランドフォントには30フォントまでアップロードできます。新しいフォントをアップロードするには、使用していない古いフォントを削除してください。"
              },
              "ko-KR": {
                singular: "브랜드 폰트에 최대 30개의 폰트를 업로드할 수 있습니다. 새 폰트를 업로드하려면 사용하지 않는 이전 폰트를 삭제하세요."
              },
              "pt-BR": {
                singular: "Você pode carregar até 30 fontes nas fontes de sua marca. Para carregar novas fontes, exclua as mais antigas que você não está usando."
              },
              "zh-CN": {
                singular: "您最多可以上传 30 种字体到您的品牌字体。要上传新字体，请删除不用的旧字体。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.youveReachedTheUploadLimit,
          errorCode: _v16.MAXIMUM_FONT_LIMIT.toString()
        }));
      }, [_v0]),
      _v9 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Cannot delete media",
            dictionary: {
              es: {
                singular: "No se pueden borrar los archivos"
              },
              "de-DE": {
                singular: "Medien können nicht gelöscht werden"
              },
              "fr-FR": {
                singular: "Impossible de supprimer le média"
              },
              "ja-JP": {
                singular: "メディアを削除できません"
              },
              "ko-KR": {
                singular: "미디어를 삭제할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não é possível excluir a mídia"
              },
              "zh-CN": {
                singular: "无法删除媒体"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.cannotDeleteMedia
        }));
      }, [_v0]),
      _v10 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Cannot delete logo",
            dictionary: {
              es: {
                singular: "No se puede eliminar el logotipo"
              },
              "de-DE": {
                singular: "Logo kann nicht gelöscht werden"
              },
              "fr-FR": {
                singular: "Impossible de supprimer le logo"
              },
              "ja-JP": {
                singular: "ロゴを削除できません"
              },
              "ko-KR": {
                singular: "로고를 삭제할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não é possível excluir o logotipo"
              },
              "zh-CN": {
                singular: "无法删除徽标"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.cannotDeleteMedia
        }));
      }, [_v0]),
      _v11 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Cannot upload logo",
            dictionary: {
              es: {
                singular: "No se puede subir el logotipo"
              },
              "de-DE": {
                singular: "Logo kann nicht hochgeladen werden"
              },
              "fr-FR": {
                singular: "Impossible de mettre en ligne le logo"
              },
              "ja-JP": {
                singular: "ロゴをアップロードできません"
              },
              "ko-KR": {
                singular: "로고를 업로드할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não é possível carregar o logotipo"
              },
              "zh-CN": {
                singular: "无法上传徽标"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.cannotUploadLogo
        }));
      }, [_v0]),
      _v12 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Cannot create brand kit",
            dictionary: {
              es: {
                singular: "No se puede crear el kit de marca"
              },
              "de-DE": {
                singular: "Markenkit kann nicht erstellt werden"
              },
              "fr-FR": {
                singular: "Impossible de créer un kit de marque"
              },
              "ja-JP": {
                singular: "ブランドキットを作成することができません"
              },
              "ko-KR": {
                singular: "브랜드 키트를 생성할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível criar o kit de marca"
              },
              "zh-CN": {
                singular: "无法创建品牌工具包"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.cannotUploadLogo
        }));
      }, [_v0]),
      _v13 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Cannot add logo",
            dictionary: {
              es: {
                singular: "No se puede agregar el logotipo"
              },
              "de-DE": {
                singular: "Logo kann nicht hinzugefügt werden"
              },
              "fr-FR": {
                singular: "Impossible d'ajouter le logo"
              },
              "ja-JP": {
                singular: "ロゴを追加できません"
              },
              "ko-KR": {
                singular: "로고를 추가할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não é possível adicionar o logotipo"
              },
              "zh-CN": {
                singular: "无法添加徽标"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Something went wrong",
            dictionary: {
              es: {
                singular: "Se ha producido un error"
              },
              "de-DE": {
                singular: "Hier ist etwas schief gelaufen"
              },
              "fr-FR": {
                singular: "Quelque chose a planté"
              },
              "ja-JP": {
                singular: "エラーが発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Alguma coisa deu errado"
              },
              "zh-CN": {
                singular: "出错了"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.cannotAddLogo
        }));
      }, [_v0]),
      _v14 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Font submission terms",
            dictionary: {
              es: {
                singular: "Términos de envío de fuentes"
              },
              "de-DE": {
                singular: "Bedingungen für das Einreichen von Schriftarten"
              },
              "fr-FR": {
                singular: "Conditions d'envoi de polices"
              },
              "ja-JP": {
                singular: "フォント提出条件"
              },
              "ko-KR": {
                singular: "폰트 제출 약관"
              },
              "pt-BR": {
                singular: "Termos de envio de fontes"
              },
              "zh-CN": {
                singular: "字体提交条款"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "By uploading a font, you confirm that you own the font or have obtained all necessary licenses to use and incorporate it into a video as required by our Terms of Service.",
            dictionary: {
              es: {
                singular: "Al subir una fuente, confirmas que tienes o que obtuviste todas las licencias necesarias para usarla e incorporarla a un video, tal como lo exigen nuestros Términos de servicio."
              },
              "de-DE": {
                singular: "Durch das Hochladen einer Schriftart bestätigst du, dass du entweder Eigentümer der entsprechenden Schriftart bist oder alle erforderlichen Lizenzen für deren Einbindung in ein Video eingeholt hast – gemäß unseren Nutzungsbedingungen."
              },
              "fr-FR": {
                singular: "En mettant en ligne une police, vous confirmez en être propriétaire ou avoir obtenu toutes les licences nécessaires pour l'intégrer à une vidéo, conformément à nos Conditions d'utilisation."
              },
              "ja-JP": {
                singular: "フォントをアップロードすることにより、Vimeoのサービス利用規約に従い、フォントの所有者であること、またはフォントを利用する、もしくは動画に組み込むために必要なすべてのライセンスを取得済みであることを承認します。"
              },
              "ko-KR": {
                singular: "폰트를 업로드함으로써 회원님이 폰트에 대한 소유권을 갖고 있거나 Vimeo의 서비스 약관에서 요구하는 대로 폰트를 사용하고 동영상에 통합하는 데 필요한 모든 라이선스를 획득했음을 확인합니다."
              },
              "pt-BR": {
                singular: "Ao fazer o carregamento de uma fonte, você confirma que é proprietário(a) da fonte ou obteve todas as licenças necessárias para usá-la e incorporá-la ao vídeo, conforme exigido pelos nossos Termos de Serviço."
              },
              "zh-CN": {
                singular: "上传字体即表示您确认您拥有该字体，或已获得使用该字体、按照我们的服务条款要求在视频中使用该字体的所有必要许可。"
              }
            }
          }),
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "I agree",
              dictionary: {
                es: {
                  singular: "Acepto"
                },
                "de-DE": {
                  singular: "Ich stimme zu"
                },
                "fr-FR": {
                  singular: "J'accepte"
                },
                "ja-JP": {
                  singular: "同意します"
                },
                "ko-KR": {
                  singular: "동의합니다"
                },
                "pt-BR": {
                  singular: "Eu concordo"
                },
                "zh-CN": {
                  singular: "我同意"
                }
              }
            }),
            onClick: _v0
          },
          showX: !0,
          notificationName: _v19.notificationName.fontSubmissionTerms
        }));
      }, [_v0]),
      _v15 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        onSecondaryClick: _v1
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Music Submission Terms",
            dictionary: {
              es: {
                singular: "Términos de envíos de música"
              },
              "de-DE": {
                singular: "Bedingungen für das Einreichen von Musik"
              },
              "fr-FR": {
                singular: "Conditions d'envoi de musique"
              },
              "ja-JP": {
                singular: "音楽提出条件"
              },
              "ko-KR": {
                singular: "음악 제출 약관"
              },
              "pt-BR": {
                singular: "Termos de Envio de Música"
              },
              "zh-CN": {
                singular: "音乐提交条款"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v8.Text, {
            variant: "body-md",
            children: [(0, _v11.translate)({
              singular: "By uploading a music track, you confirm that you own the music or have obtained all necessary licenses to incorporate it into a video as required by our ",
              dictionary: {
                es: {
                  singular: "Si sube una pista de música, confirma que tiene o ha obtenido todos los derechos necesarios para incorporarla a su video de acuerdo con nuestros "
                },
                "de-DE": {
                  singular: "Durch das Hochladen eines Musiktitels bestätigst du, dass du entweder Eigentümer der entsprechenden Musik bist oder alle erforderlichen Lizenzen für deren Einbindung in ein Video eingeholt hast – gemäß unseren "
                },
                "fr-FR": {
                  singular: "En mettant en ligne un morceau, vous confirmez en être propriétaire ou avoir obtenu toutes les licences nécessaires pour l'intégrer à une vidéo, conformément à nos "
                },
                "ja-JP": {
                  singular: "ミュージックトラックをアップロードすることにより、音源の所有者であること、あるいは次のVimeoの規約に応じて動画に利用するすべてのライセンスを取得したことを承認します： "
                },
                "pt-BR": {
                  singular: "Ao fazer o carregamento de uma faixa de música, você confirma que é o proprietário da música ou obteve todas as licenças necessárias para incorporá-la ao vídeo, conforme exigido pelo nosso "
                },
                "zh-CN": {
                  singular: "上传音乐曲目即表示您确认您拥有该曲目，或已获得使用该曲目、按照我们的服务条款要求在视频中使用该曲目的所有必要许可。 "
                }
              }
            }), (0, _v1.jsx)(_v7.Link, {
              variant: "minimal",
              target: "_blank",
              href: "https://vimeo.com/terms",
              children: (0, _v11.translate)({
                singular: "Terms of Service",
                dictionary: {
                  es: {
                    singular: "Términos de servicio"
                  },
                  "de-DE": {
                    singular: "Nutzungsbedingungen"
                  },
                  "fr-FR": {
                    singular: "Conditions d'utilisation "
                  },
                  "ja-JP": {
                    singular: "利用規約"
                  },
                  "ko-KR": {
                    singular: "서비스 약관"
                  },
                  "pt-BR": {
                    singular: "Termos de Serviço"
                  },
                  "zh-CN": {
                    singular: "服务条款"
                  }
                }
              })
            })]
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "I Agree",
              dictionary: {
                es: {
                  singular: "Acepto"
                },
                "de-DE": {
                  singular: "Ich stimme zu"
                },
                "fr-FR": {
                  singular: "J'accepte"
                },
                "ja-JP": {
                  singular: "同意します"
                },
                "ko-KR": {
                  singular: "동의합니다"
                },
                "pt-BR": {
                  singular: "Eu concordo"
                },
                "zh-CN": {
                  singular: "我同意"
                }
              }
            }),
            onClick: _v0
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v1 ?? _v2.default
          },
          notificationName: _v19.notificationName.musicSubmissionTerms
        }));
      }, [_v0]),
      _v16 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Couldn’t complete upload",
            dictionary: {
              es: {
                singular: "No se pudo completar la subida"
              },
              "de-DE": {
                singular: "Upload konnte nicht abgeschlossen werden"
              },
              "fr-FR": {
                singular: "Mise en ligne impossible"
              },
              "ja-JP": {
                singular: "アップロードを完了できませんでした"
              },
              "ko-KR": {
                singular: "업로드를 완료할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível concluir o carregamento"
              },
              "zh-CN": {
                singular: "无法完成上传"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "There was a problem uploading new fonts. Try uploading again or select different files.",
            dictionary: {
              es: {
                singular: "Hubo un problema al subir las fuentes nuevas. Intenta volver a subirlas o selecciona otros archivos."
              },
              "de-DE": {
                singular: "Beim Hochladen neuer Schriftarten ist ein Problem aufgetreten. Bitte versuche das Hochladen erneut oder wähle andere Dateien aus."
              },
              "fr-FR": {
                singular: "Un problème est survenu lors de la mise en ligne de nouvelles polices. Veuillez réessayer ou sélectionner d'autres fichiers."
              },
              "ja-JP": {
                singular: "新しいフォントのアップロード中に問題が発生しました。もう一度アップロードするか、別のファイルを選択してください。"
              },
              "ko-KR": {
                singular: "새 폰트를 업로드하는 중에 문제가 발생했습니다. 다시 업로드하거나 다른 파일을 선택하세요."
              },
              "pt-BR": {
                singular: "Houve um problema com o carregamento das novas fontes. Tente carregar novamente ou selecione outros arquivos."
              },
              "zh-CN": {
                singular: "上传新字体时出现问题。请尝试重新上传或选择其他文件。"
              }
            }
          }),
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Try again",
              dictionary: {
                es: {
                  singular: "Intentar de nuevo"
                },
                "de-DE": {
                  singular: "Nochmal versuchen"
                },
                "fr-FR": {
                  singular: "Veuillez réessayer"
                },
                "ja-JP": {
                  singular: "再試行してください"
                },
                "ko-KR": {
                  singular: "다시 시도하세요"
                },
                "pt-BR": {
                  singular: "Tente de novo"
                },
                "zh-CN": {
                  singular: "再试一次"
                }
              }
            }),
            onClick: _v0
          },
          showX: !0,
          notificationName: _v19.notificationName.couldntCompleteUpload
        }));
      }, [_v0]),
      _v17 = (0, _v3.useCallback)(async () => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Team Switch Detected - Cannot Save",
            dictionary: {
              es: {
                singular: "Cambio de equipo detectado: no se puede guardar"
              },
              "de-DE": {
                singular: "Teamwechsel erkannt – Speichern nicht möglich"
              },
              "fr-FR": {
                singular: "Changement d'équipe détecté - Impossible d'enregistrer"
              },
              "ja-JP": {
                singular: "チームの切り替えが検出されました - 保存できません"
              },
              "ko-KR": {
                singular: "팀 전환 감지 - 저장할 수 없음"
              },
              "pt-BR": {
                singular: "Troca de equipe detectada - Não é possível salvar"
              },
              "zh-CN": {
                singular: "检测到团队切换 — 无法保存"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Your edit session started under a different team and cannot be saved in the current team context. Please return to your original team and try saving again.",
            dictionary: {
              es: {
                singular: "Su sesión de edición comenzó con un equipo diferente y no se puede guardar con el equipo actual. Regrese al equipo original e intente guardar de nuevo."
              },
              "de-DE": {
                singular: "Deine Bearbeitungssitzung wurde unter einem anderen Team gestartet und kann nicht im aktuellen Teamkontext gespeichert werden. Bitte kehre zu deinem ursprünglichen Team zurück und versuche erneut, zu speichern."
              },
              "fr-FR": {
                singular: "Votre session de montage a commencé sous une autre équipe et ne peut pas être enregistrée dans le contexte de l'équipe actuelle. Veuillez retourner dans votre équipe d'origine et essayer d'enregistrer à nouveau."
              },
              "ja-JP": {
                singular: "編集セッションは別のチームで開始されたため、現在のチームコンテキストに保存できません。元のチームに戻って再度保存してください。"
              },
              "ko-KR": {
                singular: "다른 팀에서 편집 세션이 시작되어 현재 팀 컨텍스트에 저장할 수 없습니다. 원래 팀으로 돌아가 다시 저장을 시도해 주세요."
              },
              "pt-BR": {
                singular: "Sua sessão de edit foi iniciada com outra equipe e não pode ser salva no contexto da equipe atual. Retorne à equipe original e tente salvar novamente."
              },
              "zh-CN": {
                singular: "您的编辑会话是在不同的团队下启动的，因此无法保存在当前团队上下文中。请返回您原来的团队，并尝试重新保存。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.unauthorizedToSave
        }));
      }, [_v0]),
      _v18 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Unauthorized",
            dictionary: {
              es: {
                singular: "No autorizado"
              },
              "de-DE": {
                singular: "Nicht genehmigt"
              },
              "fr-FR": {
                singular: "Non autorisé"
              },
              "ja-JP": {
                singular: "許可されていません。"
              },
              "ko-KR": {
                singular: "권한이 없습니다"
              },
              "pt-BR": {
                singular: "Não autorizado"
              },
              "zh-CN": {
                singular: "未经授权"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "You don't have permissions to save this video",
            dictionary: {
              es: {
                singular: "No tiene permiso para guardar este video."
              },
              "de-DE": {
                singular: "Du bist nicht berechtigt, dieses Video zu speichern"
              },
              "fr-FR": {
                singular: "Vous n'êtes pas autorisé à enregistrer cette vidéo"
              },
              "ja-JP": {
                singular: "この動画を保存する権限がありません"
              },
              "ko-KR": {
                singular: "이 동영상을 저장할 수 있는 권한이 없습니다."
              },
              "pt-BR": {
                singular: "Você não tem permissão para salvar o vídeo"
              },
              "zh-CN": {
                singular: "您无权保存此视频"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.unauthorizedToSave
        }));
      }, [_v0]),
      _v19 = (0, _v3.useCallback)((_v0, _v1) => {
        let _v2 = {
          storyboard: JSON.stringify(_v1),
          isUserLoggedIn: !!_v2?.user,
          isUserOnline: !!navigator.onLine
        };
        _v0?.data ? _v23.default.sendLog(_v17.FAILED_TO_SAVE, _v27.LogComponent.EDITOR_ERROR_ALERT, {
          ..._v0.data,
          ..._v2
        }) : _v23.default.sendLog(_v17.FAILED_TO_SAVE, _v27.LogComponent.EDITOR_ERROR_ALERT, {
          error: JSON.stringify(_v0),
          ..._v2
        }), _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to save",
            dictionary: {
              es: {
                singular: "Error al guardar"
              },
              "de-DE": {
                singular: "Konnte nicht gespeichert werden"
              },
              "fr-FR": {
                singular: "Échec de l'enregistrement"
              },
              "ja-JP": {
                singular: "保存できませんでした"
              },
              "ko-KR": {
                singular: "저장 실패"
              },
              "pt-BR": {
                singular: "Não foi possível salvar"
              },
              "zh-CN": {
                singular: "保存失败"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Unfortunately changes have failed to save",
            dictionary: {
              es: {
                singular: "Lamentablemente, no pudieron guardarse los cambios"
              },
              "de-DE": {
                singular: "Leider konnten die Änderungen nicht gespeichert werden"
              },
              "fr-FR": {
                singular: "Les modifications n'ont malheureusement pas pu être enregistrées"
              },
              "ja-JP": {
                singular: "残念ながら変更を保存できませんでした"
              },
              "ko-KR": {
                singular: "안타깝게도 변경사항 저장에 실패했습니다"
              },
              "pt-BR": {
                singular: "Infelizmente, não foi possível salvar as alterações"
              },
              "zh-CN": {
                singular: "很遗憾，未能保存更改"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          errorName: _v0?.data?.error.toString(),
          errorCode: _v0?.data?.error_code.toString(),
          notificationName: _v19.notificationName.failedToSave
        }));
      }, [_v0, _v2?.user]),
      _v20 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to publish interactive content",
            dictionary: {
              es: {
                singular: "No se pudo publicar el contenido interactivo"
              },
              "de-DE": {
                singular: "Interaktive Inhalte konnten nicht veröffentlicht werden."
              },
              "fr-FR": {
                singular: "Échec de la publication du contenu interactif"
              },
              "ja-JP": {
                singular: "インタラクティブコンテンツの公開に失敗しました"
              },
              "ko-KR": {
                singular: "인터랙티브 콘텐츠를 게시하지 못했습니다."
              },
              "pt-BR": {
                singular: "Falha ao publicar conteúdo interativo."
              },
              "zh-CN": {
                singular: "发布交互内容失败"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Unfortunately, changes have failed to publish.",
            dictionary: {
              es: {
                singular: "Lamentablemente, los cambios no se han podido publicar."
              },
              "de-DE": {
                singular: "Leider konnten die Änderungen nicht veröffentlicht werden."
              },
              "fr-FR": {
                singular: "Les modifications n'ont malheureusement pas pu être publiées."
              },
              "ja-JP": {
                singular: "残念ながら、変更を公開できませんでした。"
              },
              "ko-KR": {
                singular: "죄송합니다. 변경사항 게시에 실패했습니다."
              },
              "pt-BR": {
                singular: "Infelizmente, não foi possível publicar as alterações."
              },
              "zh-CN": {
                singular: "很遗憾，未能发布更改。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: () => ({})
          },
          showX: !0,
          notificationName: _v19.notificationName.failedToPublishInteractive
        }));
      }, [_v0]),
      _v21 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Could not edit overlay",
            dictionary: {
              es: {
                singular: "No se pudo editar la superposición"
              },
              "de-DE": {
                singular: "Das Overlay konnte nicht bearbeitet werden"
              },
              "fr-FR": {
                singular: "Impossible de modifier la superposition"
              },
              "ja-JP": {
                singular: "オーバーレイを編集できませんでした"
              },
              "ko-KR": {
                singular: "오버레이를 편집할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível editar a sobreposição"
              },
              "zh-CN": {
                singular: "无法编辑视频叠加"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "There was a problem opening the overlay for editing.",
            dictionary: {
              es: {
                singular: "Hubo un problema al abrir la superposición para su edición."
              },
              "de-DE": {
                singular: "Es gab ein Problem beim Öffnen des Overlay zum Bearbeiten."
              },
              "fr-FR": {
                singular: "Un problème est survenu lors de l'ouverture de la superposition pour le montage."
              },
              "ja-JP": {
                singular: "編集のためにオーバーレイを開く際に問題が発生しました。"
              },
              "ko-KR": {
                singular: "오버레이를 편집하기 위해 여는 중에 문제가 발생했습니다."
              },
              "pt-BR": {
                singular: "Houve um problema ao abrir a sobreposição para edição."
              },
              "zh-CN": {
                singular: "打开视频叠加进行编辑时出现问题。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.overlayNotFound
        }));
      }, [_v0]),
      _v22 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to save overlay as template",
            dictionary: {
              es: {
                singular: "No se pudo guardar la superposición como plantilla"
              },
              "de-DE": {
                singular: "Das Overlay konnte nicht als Vorlage gespeichert werden"
              },
              "fr-FR": {
                singular: "Échec de l'enregistrement de la superposition en tant que modèle"
              },
              "ja-JP": {
                singular: "オーバーレイをテンプレートとして保存できませんでした"
              },
              "ko-KR": {
                singular: "오버레이를 템플릿으로 저장하지 못했습니다."
              },
              "pt-BR": {
                singular: "Falha ao salvar a sobreposição como modelo"
              },
              "zh-CN": {
                singular: "未能将视频叠加保存为模板"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Unfortunately, saving the overlay as a template has failed.",
            dictionary: {
              es: {
                singular: "Lamentablemente, no se pudo guardar la superposición como plantilla."
              },
              "de-DE": {
                singular: "Leider ist das Speichern des Overlays als Vorlage fehlgeschlagen."
              },
              "fr-FR": {
                singular: "Malheureusement, l'enregistrement de la superposition en tant que modèle a échoué."
              },
              "ja-JP": {
                singular: "残念ながら、オーバーレイをテンプレートとして保存できませんでした。"
              },
              "ko-KR": {
                singular: "오버레이를 템플릿으로 저장하지 못했습니다."
              },
              "pt-BR": {
                singular: "Não foi possível salvar a sobreposição como modelo."
              },
              "zh-CN": {
                singular: "很遗憾，未能将视频叠加保存为模板。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.failedToSaveOverlayAsTemplate
        }));
      }, [_v0]),
      _v23 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to upload overlay thumbnail",
            dictionary: {
              es: {
                singular: "No se pudo subir la miniatura de la superposición"
              },
              "de-DE": {
                singular: "Fehler beim Hochladen des Overlay-Thumbnails"
              },
              "fr-FR": {
                singular: "Échec de l'importation de la miniature de superposition"
              },
              "ja-JP": {
                singular: "オーバーレイサムネイルのアップロードに失敗しました"
              },
              "ko-KR": {
                singular: "오버레이 섬네일을 업로드하지 못했습니다."
              },
              "pt-BR": {
                singular: "Falha ao carregar a miniatura da sobreposição"
              },
              "zh-CN": {
                singular: "未能上传视频叠加缩略图"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Unfortunately, uploading the overlay thumbnail has failed.",
            dictionary: {
              es: {
                singular: "Lamentablemente, ocurrió un error al subir la miniatura de la superposición."
              },
              "de-DE": {
                singular: "Leider ist das Hochladen des Overlay-Thumbnails fehlgeschlagen."
              },
              "fr-FR": {
                singular: "Malheureusement, l'importation de la miniature de superposition a échoué."
              },
              "ja-JP": {
                singular: "残念ながら、オーバーレイサムネイルのアップロードに失敗しました。"
              },
              "ko-KR": {
                singular: "오버레이 섬네일을 업로드하지 못했습니다."
              },
              "pt-BR": {
                singular: "Infelizmente, não foi possível carregar a miniatura da sobreposição."
              },
              "zh-CN": {
                singular: "很遗憾，上传视频叠加缩略图失败。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.failedToUploadOverlayThumbnail
        }));
      }, [_v0]),
      _v24 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to add overlay template",
            dictionary: {
              es: {
                singular: "No se pudo agregar la plantilla de superposición"
              },
              "de-DE": {
                singular: "Overlay-Vorlage konnte nicht hinzugefügt werden"
              },
              "fr-FR": {
                singular: "Échec de l'ajout du modèle de superposition"
              },
              "ja-JP": {
                singular: "オーバーレイテンプレートを追加できませんでした"
              },
              "ko-KR": {
                singular: "오버레이 템플릿을 추가하지 못했습니다."
              },
              "pt-BR": {
                singular: "Falha ao adicionar modelo de sobreposição"
              },
              "zh-CN": {
                singular: "未能添加视频叠加模板"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "There was a problem implementing the overlay template to your project.",
            dictionary: {
              es: {
                singular: "Hubo un problema al implementar la plantilla de superposición en su proyecto."
              },
              "de-DE": {
                singular: "Es gab ein Problem bei der Implementierung der Overlay-Vorlage in Ihr Projekt."
              },
              "fr-FR": {
                singular: "Un problème est survenu lors de la mise en place du modèle de superposition dans votre projet."
              },
              "ja-JP": {
                singular: "オーバーレイテンプレートをプロジェクトに実装する際に問題が発生しました。"
              },
              "ko-KR": {
                singular: "프로젝트에 오버레이 템플릿을 구현하는 중에 문제가 발생했습니다."
              },
              "pt-BR": {
                singular: "Houve um problema na implementação do modelo de sobreposição no seu projeto."
              },
              "zh-CN": {
                singular: "在将视频叠加模板实施到您的项目时出现问题。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.failedToAddOverlayTemplateToVideo
        }));
      }, [_v0]),
      _v25 = (0, _v3.useCallback)(_v0 => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Discard changes and go back to video?",
            dictionary: {
              es: {
                singular: "¿Desea descartar los cambios y volver al video?"
              },
              "de-DE": {
                singular: "Änderungen verwerfen und zum Video zurückkehren?"
              },
              "fr-FR": {
                singular: "Annuler les modifications et revenir à la vidéo ?"
              },
              "ja-JP": {
                singular: "変更を破棄して動画に戻りますか？"
              },
              "ko-KR": {
                singular: "변경 사항을 저장하지 않고 동영상으로 돌아가시겠습니까?"
              },
              "pt-BR": {
                singular: "Descartar as alterações e voltar ao vídeo?"
              },
              "zh-CN": {
                singular: "要放弃更改并返回视频吗？"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Changes you made to the overlay will not be saved",
            dictionary: {
              es: {
                singular: "Los cambios que haya hecho en la superposición no se guardarán"
              },
              "de-DE": {
                singular: "Änderungen, die Sie am Overlay vorgenommen haben, werden nicht gespeichert"
              },
              "fr-FR": {
                singular: "Les modifications que vous avez apportées à la superposition ne seront pas enregistrées"
              },
              "ja-JP": {
                singular: "オーバーレイに加えた変更は保存されません"
              },
              "ko-KR": {
                singular: "오버레이 변경 사항은 저장되지 않습니다."
              },
              "pt-BR": {
                singular: "As alterações feitas na sobreposição não serão salvas"
              },
              "zh-CN": {
                singular: "您对视频叠加所做的更改将不会被保存"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Discard changes",
              dictionary: {
                es: {
                  singular: "Descartar los cambios"
                },
                "de-DE": {
                  singular: "Änderungen verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer les modifications"
                },
                "ja-JP": {
                  singular: "変更を破棄"
                },
                "ko-KR": {
                  singular: "변경사항 폐기"
                },
                "pt-BR": {
                  singular: "Descartar alterações"
                },
                "zh-CN": {
                  singular: "放弃更改"
                }
              }
            }),
            onClick: () => _v0({
              saveChanges: !1
            })
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          showX: !1,
          notificationName: _v19.notificationName.discardOverlayChanges
        }));
      }, [_v0]),
      _v26 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        onSecondaryClick: _v1
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Save changes in the overlay",
            dictionary: {
              es: {
                singular: "Guarde los cambios en la superposición"
              },
              "de-DE": {
                singular: "Änderungen im Overlay speichern"
              },
              "fr-FR": {
                singular: "Enregistrer les modifications dans la superposition"
              },
              "ja-JP": {
                singular: "オーバーレイの変更を保存"
              },
              "ko-KR": {
                singular: "오버레이에서 변경 사항을 저장하세요."
              },
              "pt-BR": {
                singular: "Salvar as alterações na sobreposição"
              },
              "zh-CN": {
                singular: "保存视频叠加中的更改"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "You have unsaved changes that will be lost if you don't save them",
            dictionary: {
              es: {
                singular: "Tiene cambios sin guardar que se perderán si no los guarda"
              },
              "de-DE": {
                singular: "Sie haben ungespeicherte Änderungen, die verloren gehen, wenn Sie sie nicht speichern."
              },
              "fr-FR": {
                singular: "Vous avez des modifications non sauvegardées qui seront perdues si vous ne les sauvegardez pas"
              },
              "ja-JP": {
                singular: "保存されていない変更があります。保存しないと失われます。"
              },
              "ko-KR": {
                singular: "저장되지 않은 변경 사항이 있습니다. 저장하지 않으면 사라집니다."
              },
              "pt-BR": {
                singular: "Algumas alterações não foram salvas e serão perdidas se você não salvar"
              },
              "zh-CN": {
                singular: "您有未保存的更改，如果不保存，它们将会丢失"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Save changes",
              dictionary: {
                es: {
                  singular: "Guardar cambios"
                },
                "de-DE": {
                  singular: "Änderungen speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer les modifications"
                },
                "ja-JP": {
                  singular: "変更を保存"
                },
                "ko-KR": {
                  singular: "변경 사항 저장"
                },
                "pt-BR": {
                  singular: "Salvar alterações"
                },
                "zh-CN": {
                  singular: "保存更改"
                }
              }
            }),
            onClick: _v0,
            status: "positive"
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Discard changes",
              dictionary: {
                es: {
                  singular: "Descartar los cambios"
                },
                "de-DE": {
                  singular: "Änderungen verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer les modifications"
                },
                "ja-JP": {
                  singular: "変更を破棄"
                },
                "ko-KR": {
                  singular: "변경사항 폐기"
                },
                "pt-BR": {
                  singular: "Descartar alterações"
                },
                "zh-CN": {
                  singular: "放弃更改"
                }
              }
            }),
            onClick: _v1
          },
          showX: !0,
          notificationName: _v19.notificationName.discardOrSaveOverlayChanges
        }));
      }, [_v0]),
      _v27 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Delete overlay template?",
            dictionary: {
              es: {
                singular: "¿Desea eliminar la plantilla de superposición?"
              },
              "de-DE": {
                singular: "Overlay-Vorlage löschen?"
              },
              "fr-FR": {
                singular: "Supprimer le modèle de superposition ?"
              },
              "ja-JP": {
                singular: "オーバーレイテンプレートを削除しますか？"
              },
              "ko-KR": {
                singular: "오버레이 템플릿을 삭제할까요?"
              },
              "pt-BR": {
                singular: "Excluir modelo de sobreposição?"
              },
              "zh-CN": {
                singular: "删除视频叠加模板？"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Are you sure you want to delete this overlay template? This cannot be undone.",
            dictionary: {
              es: {
                singular: "¿Confirma que desea eliminar esta plantilla de superposición? Esta acción no se puede deshacer."
              },
              "de-DE": {
                singular: "Willst du diese Overlay-Vorlage wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden."
              },
              "fr-FR": {
                singular: "Voulez-vous vraiment supprimer ce modèle de superposition ? Cette action est irréversible."
              },
              "ja-JP": {
                singular: "このオーバーレイテンプレートを削除してもよろしいですか？この操作は元に戻すことができません。"
              },
              "ko-KR": {
                singular: "이 오버레이 템플릿을 정말 삭제할까요? 이 작업은 취소할 수 없습니다."
              },
              "pt-BR": {
                singular: "Quer mesmo excluir o modelo de sobreposição? Essa ação não pode ser desfeita."
              },
              "zh-CN": {
                singular: "您确定要删除此视频叠加模板吗？此操作不可撤销。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Delete template",
              dictionary: {
                es: {
                  singular: "Eliminar plantilla"
                },
                "de-DE": {
                  singular: "Vorlage löschen"
                },
                "fr-FR": {
                  singular: "Supprimer le modèle"
                },
                "ja-JP": {
                  singular: "テンプレートを削除"
                },
                "ko-KR": {
                  singular: "템플릿 삭제"
                },
                "pt-BR": {
                  singular: "Excluir modelo"
                },
                "zh-CN": {
                  singular: "删除模板"
                }
              }
            }),
            onClick: _v0,
            status: "negative"
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2.default
          },
          showX: !1,
          notificationName: _v19.notificationName.deleteOverlayTemplate
        }));
      }, [_v0]),
      _v28 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Video too long",
            dictionary: {
              es: {
                singular: "El video es demasiado largo"
              },
              "de-DE": {
                singular: "Video zu lang"
              },
              "fr-FR": {
                singular: "La vidéo est trop longue"
              },
              "ja-JP": {
                singular: "動画が長すぎます"
              },
              "ko-KR": {
                singular: "동영상이 너무 깁니다"
              },
              "pt-BR": {
                singular: "O vídeo é muito longo"
              },
              "zh-CN": {
                singular: "视频太长"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Video cannot be longer than 120 minutes",
            dictionary: {
              es: {
                singular: "El video no puede durar más de 120 minutos"
              },
              "de-DE": {
                singular: "Das Video darf maximal 120 Minuten lang sein"
              },
              "fr-FR": {
                singular: "La durée de la vidéo ne peut dépasser 120 minutes"
              },
              "ja-JP": {
                singular: "動画の長さは120分までです"
              },
              "ko-KR": {
                singular: "동영상은 120분을 초과할 수 없습니다."
              },
              "pt-BR": {
                singular: "O vídeo não pode ter mais de 120 minutos"
              },
              "zh-CN": {
                singular: "视频不能超过 120 分钟"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.videoTooLong
        }));
      }, [_v0]),
      _v29 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "File wasn't uploaded",
            dictionary: {
              es: {
                singular: "El archivo no se subió"
              },
              "de-DE": {
                singular: "Die Datei wurde nicht hochgeladen"
              },
              "fr-FR": {
                singular: "Le fichier n'a pas été mis en ligne"
              },
              "ja-JP": {
                singular: "ファイルがアップロードされませんでした"
              },
              "ko-KR": {
                singular: "파일이 업로드되지 않았습니다."
              },
              "pt-BR": {
                singular: "O arquivo não foi carregado"
              },
              "zh-CN": {
                singular: "文件未上传"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: 'The file "{fileName}" failed to upload.\nTry uploading again or replace it',
            replacements: {
              fileName: _v0
            },
            dictionary: {
              es: {
                singular: 'No se pudo subir el archivo "{fileName}".\nIntente subirlo de nuevo o reemplácelo.'
              },
              "de-DE": {
                singular: "Die Datei „{fileName}“ konnte nicht hochgeladen werden.\nVersuchen Sie, sie erneut hochzuladen oder sie zu ersetzen"
              },
              "fr-FR": {
                singular: "Le fichier « {fileName} » n'a pas pu être mis en ligne.\nEssayez de le mettre à nouveau en ligne ou remplacez-le."
              },
              "ja-JP": {
                singular: "ファイル「{fileName}」のアップロードに失敗しました。\nもう一度アップロードするか、置き換えてみてください。"
              },
              "ko-KR": {
                singular: "'{fileName}' 파일 업로드에 실패했습니다.\n업로드를 다시 시도하거나 파일을 대체하세요."
              },
              "pt-BR": {
                singular: 'Não foi possível carregar o arquivo "{fileName}".\nTente carregá-lo novamente ou substituí-lo'
              },
              "zh-CN": {
                singular: "文件“{fileName}”上传失败。\n请尝试重新上传或将其替换。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.uploadFailed,
          errorCode: _v1,
          errorName: _v2
        }));
      }, [_v0]),
      _v30 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        error: _v1
      }) => {
        _v1?.data ? _v23.default.sendLog(_v17.FAILED_TO_LOAD, _v27.LogComponent.EDITOR_ERROR_ALERT, {
          ..._v1.data
        }) : _v1 && _v23.default.sendLog(_v17.FAILED_TO_LOAD, _v27.LogComponent.EDITOR_ERROR_ALERT, {
          error: JSON.stringify(_v1)
        }), _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Problem occurred",
            dictionary: {
              es: {
                singular: "Ocurrió un problema"
              },
              "de-DE": {
                singular: "Es ist ein Problem aufgetreten"
              },
              "fr-FR": {
                singular: "Un problème est survenu"
              },
              "ja-JP": {
                singular: "問題が発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Ocorreu um problema"
              },
              "zh-CN": {
                singular: "出现问题"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Unfortunately, we can't complete this action.",
            dictionary: {
              es: {
                singular: "Lamentablemente, no podemos realizar esta acción."
              },
              "de-DE": {
                singular: "Leider können wir diese Aktion nicht abschließen."
              },
              "fr-FR": {
                singular: "Nous ne pouvons malheureusement pas terminer cette action."
              },
              "ja-JP": {
                singular: "申し訳ありません、このアクションを完了できません。"
              },
              "ko-KR": {
                singular: "안타깝게도 이 작업을 완료할 수 없습니다."
              },
              "pt-BR": {
                singular: "Infelizmente, não podemos concluir esta ação."
              },
              "zh-CN": {
                singular: "很遗憾，我们无法完成此操作。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Retry",
              dictionary: {
                es: {
                  singular: "Reintentar"
                },
                "de-DE": {
                  singular: "Neuer Versuch"
                },
                "fr-FR": {
                  singular: "Réessayer"
                },
                "ja-JP": {
                  singular: "再試行"
                },
                "ko-KR": {
                  singular: "재시도"
                },
                "pt-BR": {
                  singular: "TENTAR NOVAMENTE"
                },
                "zh-CN": {
                  singular: "重试"
                }
              }
            }),
            onClick: _v0
          },
          showX: !0,
          errorName: _v1?.data?.error.toString(),
          errorCode: _v1?.data?.error_code.toString(),
          notificationName: _v19.notificationName.problemOccurred
        }));
      }, [_v0]),
      _v31 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Connectivity problem",
            dictionary: {
              es: {
                singular: "Problema de conexión"
              },
              "de-DE": {
                singular: "Verbindungsproblem"
              },
              "fr-FR": {
                singular: "Problème de connectivité"
              },
              "ja-JP": {
                singular: "接続の問題"
              },
              "ko-KR": {
                singular: "연결 문제"
              },
              "pt-BR": {
                singular: "Problema de conectividade"
              },
              "zh-CN": {
                singular: "连接问题"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Please check your internet connection and try again",
            dictionary: {
              es: {
                singular: "Comprueba la conexión a Internet y vuelve a intentarlo."
              },
              "de-DE": {
                singular: "Bitte überprüfe deine Internetverbindung und versuche es erneut"
              },
              "fr-FR": {
                singular: "Veuillez vérifier votre connexion Internet et réessayer"
              },
              "ja-JP": {
                singular: "インターネット接続状況を確認のうえ、再試行してください。"
              },
              "ko-KR": {
                singular: "인터넷 연결 상태를 확인하고 다시 시도하세요"
              },
              "pt-BR": {
                singular: "Por favor, verifique sua conexão com a internet e tente novamente"
              },
              "zh-CN": {
                singular: "请检查网络连接并重试"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Retry",
              dictionary: {
                es: {
                  singular: "Reintentar"
                },
                "de-DE": {
                  singular: "Neuer Versuch"
                },
                "fr-FR": {
                  singular: "Réessayer"
                },
                "ja-JP": {
                  singular: "再試行"
                },
                "ko-KR": {
                  singular: "재시도"
                },
                "pt-BR": {
                  singular: "TENTAR NOVAMENTE"
                },
                "zh-CN": {
                  singular: "重试"
                }
              }
            }),
            onClick: _v0
          },
          showX: !0,
          notificationName: _v19.notificationName.connectivityProblem
        }));
      }, [_v0]),
      _v32 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: _v22.translations.reminder,
          content: _v22.translations.pleaseSaveYourWork,
          primaryButtonConfig: {
            content: _v22.translations.okay,
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.reminder
        }));
      }, [_v0]),
      _v33 = (0, _v3.useCallback)(({
        font: _v0,
        onPrimaryClick: _v1
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Delete a font",
            dictionary: {
              es: {
                singular: "Eliminar una fuente"
              },
              "de-DE": {
                singular: "Eine Schriftart löschen"
              },
              "fr-FR": {
                singular: "Supprimer une police"
              },
              "ja-JP": {
                singular: "フォントを削除"
              },
              "ko-KR": {
                singular: "폰트 삭제"
              },
              "pt-BR": {
                singular: "Excluir fonte"
              },
              "zh-CN": {
                singular: "删除字体"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v8.Text, {
            variant: "body-md",
            "data-testid": _v21.testIds.fontDeleteMessage,
            children: [(0, _v11.translate)({
              singular: "Are you sure you want to delete the following font from your library? This may affect current and past video editing.",
              dictionary: {
                es: {
                  singular: "¿Estás seguro de que quieres eliminar la siguiente fuente de tu biblioteca? Esto puede afectar a la edición de videos actuales y pasados."
                },
                "de-DE": {
                  singular: "Möchtest du die folgende Schriftart wirklich aus deiner Bibliothek löschen? Dies kann sich auf die aktuelle und vergangene Videobearbeitung auswirken."
                },
                "fr-FR": {
                  singular: "Voulez-vous vraiment supprimer la police suivante de votre bibliothèque ? Cela peut avoir des conséquences sur le montage de vos vidéos actuelles ou anciennes."
                },
                "ja-JP": {
                  singular: "次のフォントをライブラリから削除してもよろしいですか？ これにより、現在および過去の動画編集に影響が出る場合があります。"
                },
                "ko-KR": {
                  singular: "라이브러리에서 다음 폰트를 정말 삭제할까요? 현재 및 과거의 동영상 편집에 영향을 줄 수 있습니다."
                },
                "pt-BR": {
                  singular: "Quer mesmo excluir a seguinte fonte da sua biblioteca? Isso pode afetar a edição de vídeos atuais e passados."
                },
                "zh-CN": {
                  singular: "确定要从视频库中删除以下字体吗？这可能会影响当前和过去的视频编辑。"
                }
              }
            }), (0, _v1.jsx)(_v14.FontsUnorderedListView, {
              children: (0, _v1.jsx)("li", {
                children: _v0.family + " " + _v0.style
              })
            })]
          }),
          showX: !0,
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: () => ({})
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v1,
            status: "negative"
          },
          notificationName: _v19.notificationName.deleteFont
        }));
      }, [_v0]),
      _v34 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Cannot delete media",
            dictionary: {
              es: {
                singular: "No se pueden borrar los archivos"
              },
              "de-DE": {
                singular: "Medien können nicht gelöscht werden"
              },
              "fr-FR": {
                singular: "Impossible de supprimer le média"
              },
              "ja-JP": {
                singular: "メディアを削除できません"
              },
              "ko-KR": {
                singular: "미디어를 삭제할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não é possível excluir a mídia"
              },
              "zh-CN": {
                singular: "无法删除媒体"
              }
            }
          }),
          content: (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            children: (0, _v11.translate)({
              singular: "Something went wrong",
              dictionary: {
                es: {
                  singular: "Se ha producido un error"
                },
                "de-DE": {
                  singular: "Hier ist etwas schief gelaufen"
                },
                "fr-FR": {
                  singular: "Quelque chose a planté"
                },
                "ja-JP": {
                  singular: "エラーが発生しました"
                },
                "ko-KR": {
                  singular: "문제가 발생했습니다"
                },
                "pt-BR": {
                  singular: "Alguma coisa deu errado"
                },
                "zh-CN": {
                  singular: "出错了"
                }
              }
            })
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: () => ({}),
            status: "negative"
          },
          showX: !0,
          notificationName: _v19.notificationName.cannotDeleteMedia
        }));
      }, [_v0]),
      _v35 = (0, _v3.useCallback)(({
        type: _v0,
        onPrimaryClick: _v1
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: _v0 === _v26.IntroOutroContext.INTRO ? (0, _v11.translate)({
            singular: "Delete this intro?",
            dictionary: {
              es: {
                singular: "¿Quiere borrar esta introducción?"
              },
              "de-DE": {
                singular: "Dieses Intro löschen?"
              },
              "fr-FR": {
                singular: "Supprimer cette intro ?"
              },
              "ja-JP": {
                singular: "このイントロを削除しますか？"
              },
              "ko-KR": {
                singular: "이 인트로를 삭제할까요?"
              },
              "pt-BR": {
                singular: "Excluir esta introdução?"
              },
              "zh-CN": {
                singular: "删除此片头？"
              }
            }
          }) : (0, _v11.translate)({
            singular: "Delete this outro?",
            dictionary: {
              es: {
                singular: "¿Quiere borrar este cierre?"
              },
              "de-DE": {
                singular: "Dieses Outro löschen?"
              },
              "fr-FR": {
                singular: "Supprimer cette outro ?"
              },
              "ja-JP": {
                singular: "このアウトロを削除しますか？"
              },
              "ko-KR": {
                singular: "이 아우트로를 삭제할까요?"
              },
              "pt-BR": {
                singular: "Excluir esta tela de pós-vídeo?"
              },
              "zh-CN": {
                singular: "删除此片尾？"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)("div", {
              children: (0, _v11.translate)({
                singular: "Your team won't be able to use it anymore.",
                dictionary: {
                  es: {
                    singular: "Tu equipo ya no lo podrá usar."
                  },
                  "de-DE": {
                    singular: "Dein Team wird es nicht mehr verwenden können."
                  },
                  "fr-FR": {
                    singular: "Votre équipe ne pourra plus utiliser cet élément,"
                  },
                  "ja-JP": {
                    singular: "今後、チームは使用できなくなります。"
                  },
                  "ko-KR": {
                    singular: "팀에서 더 이상 사용할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Sua equipe não poderá mais usá-lo."
                  },
                  "zh-CN": {
                    singular: "您的团队将无法再使用它。"
                  }
                }
              })
            }), (0, _v1.jsx)("div", {
              children: (0, _v11.translate)({
                singular: "It'll still appear in videos where it's already been used.",
                dictionary: {
                  es: {
                    singular: "Seguirá apareciendo en los videos en los que ya se haya utilizado."
                  },
                  "de-DE": {
                    singular: "Es wird auch in Videos, in denen es bereits verwendet wurde, weiter angezeigt."
                  },
                  "fr-FR": {
                    singular: "mais il apparaîtra encore dans les vidéos où il a été utilisé."
                  },
                  "ja-JP": {
                    singular: "すでに使用されている動画には引き続き表示されます。"
                  },
                  "ko-KR": {
                    singular: "이미 사용된 동영상에는 계속 표시됩니다."
                  },
                  "pt-BR": {
                    singular: "Ele ainda aparecerá em vídeos em que já foi usado."
                  },
                  "zh-CN": {
                    singular: "但它仍会出现在已经使用过的视频中。"
                  }
                }
              })
            })]
          }),
          showX: !0,
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: () => ({})
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v1,
            status: "negative"
          },
          notificationName: _v0 === _v26.IntroOutroContext.INTRO ? _v19.notificationName.deleteThisIntro : _v19.notificationName.deleteThisOutro
        }));
      }, [_v0]),
      _v36 = (0, _v3.useCallback)(({
        type: _v0,
        files: _v1
      }) => {
        let _v2 = _v0 === _v26.IntroOutroContext.INTRO ? (0, _v11.translate)({
            singular: "Some intros could not be uploaded",
            dictionary: {
              es: {
                singular: "No se han podido subir algunas introducciones"
              },
              "de-DE": {
                singular: "Einige Intros konnten nicht hochgeladen werden"
              },
              "fr-FR": {
                singular: "Certaines intros n'ont pas pu être importées"
              },
              "ja-JP": {
                singular: "一部のイントロをアップロードできませんでした"
              },
              "ko-KR": {
                singular: "일부 인트로를 업로드할 수 없습니다."
              },
              "pt-BR": {
                singular: "Algumas introduções não foram carregadas"
              },
              "zh-CN": {
                singular: "部分片头无法上传"
              }
            }
          }) : (0, _v11.translate)({
            singular: "Some outros could not be uploaded",
            dictionary: {
              es: {
                singular: "No se han podido subir algunos cierres"
              },
              "de-DE": {
                singular: "Einige Outros konnten nicht hochgeladen werden"
              },
              "fr-FR": {
                singular: "Certaines outros n'ont pas pu être importées"
              },
              "ja-JP": {
                singular: "一部のアウトロをアップロードできませんでした"
              },
              "ko-KR": {
                singular: "일부 아우트로를 업로드할 수 없습니다."
              },
              "pt-BR": {
                singular: "Algumas telas pós-vídeo não foram carregadas"
              },
              "zh-CN": {
                singular: "部分片尾无法上传"
              }
            }
          }),
          _v3 = _v1.map(_v0 => `${_v0.name}`).join("\n"),
          _v4 = (_v0 === _v26.IntroOutroContext.INTRO ? (0, _v11.translate)({
            singular: "The following intros were not uploaded because youv'e reached the limit of 10 intros:\n",
            dictionary: {
              es: {
                singular: "Las siguientes introducciones no se han subido porque ha alcanzado el límite de 10 introducciones:\n"
              },
              "de-DE": {
                singular: "Die folgenden Intros wurden nicht hochgeladen, weil du das Limit von 10 Intros erreicht hast:\n"
              },
              "fr-FR": {
                singular: "Les intros suivantes n'ont pas été importées car vous avez atteint la limite de 10 intros :\n"
              },
              "ja-JP": {
                singular: "イントロ数の上限（10個）に達したため、以下のイントロをアップロードできませんでした：\n"
              },
              "ko-KR": {
                singular: "인트로가 10개 제한에 도달하여 다음 인트로가 업로드되지 않았습니다.\n"
              },
              "pt-BR": {
                singular: "As introduções abaixo não foram carregadas porque o limite de 10 introduções foi atingido:\n"
              },
              "zh-CN": {
                singular: "您已达到 10 个片头的上限，以下片头未上传：\n"
              }
            }
          }) : (0, _v11.translate)({
            singular: "The following outros were not uploaded because youv'e reached the limit of 10 outros:\n",
            dictionary: {
              es: {
                singular: "Los siguientes cierres no se han subido porque ha alcanzado el límite de 10 cierres:\n"
              },
              "de-DE": {
                singular: "Die folgenden Outros wurden nicht hochgeladen, weil du das Limit von 10 Outros erreicht hast:\n"
              },
              "fr-FR": {
                singular: "Les outros suivantes n'ont pas été importées car vous avez atteint la limite de 10 outros :\n"
              },
              "ja-JP": {
                singular: "アウトロ数の上限（10個）に達したため、以下のアウトロをアップロードできませんでした：\n"
              },
              "ko-KR": {
                singular: "아우트로가 10개 제한에 도달하여 다음 아우트로가 업로드되지 않았습니다.\n"
              },
              "pt-BR": {
                singular: "As telas pós-vídeo abaixo não foram carregadas porque o limite de 10 telas pós-vídeo foi atingido:\n"
              },
              "zh-CN": {
                singular: "您已达到 10 个片尾的上限，以下片尾未上传：\n"
              }
            }
          })) + _v3;
        _v0((0, _v24.showAlertAction)({
          title: _v2,
          content: _v4,
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: () => ({})
          },
          showX: !0,
          notificationName: _v0 === _v26.IntroOutroContext.INTRO ? _v19.notificationName.someIntrosCouldNotBeUploaded : _v19.notificationName.someOutrosCouldNotBeUploaded
        }));
      }, [_v0]),
      _v37 = (0, _v3.useCallback)(_v0 => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Unable to edit video",
            dictionary: {
              es: {
                singular: "No se puede editar el video"
              },
              "de-DE": {
                singular: "Video kann nicht bearbeitet werden"
              },
              "fr-FR": {
                singular: "Impossible de modifier la vidéo"
              },
              "ja-JP": {
                singular: "動画を編集できません"
              },
              "ko-KR": {
                singular: "영상을 편집할 수 없습니다"
              },
              "pt-BR": {
                singular: "Não é possível editar o vídeo"
              },
              "zh-CN": {
                singular: "无法编辑视频"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "The video resolution should be 360p or higher.",
            dictionary: {
              es: {
                singular: "La resolución del video debe ser de 360p o superior."
              },
              "de-DE": {
                singular: "Die Videoauflösung sollte 360p oder höher sein."
              },
              "fr-FR": {
                singular: "La résolution de la vidéo doit être d'au moins 360p."
              },
              "ja-JP": {
                singular: "動画の解像度は 360p 以上である必要があります"
              },
              "ko-KR": {
                singular: "비디오 해상도는 360p 이상이어야 합니다."
              },
              "pt-BR": {
                singular: "A resolução do vídeo deve ser de 360p ou mais."
              },
              "zh-CN": {
                singular: "视频分辨率应为 360p 或更高。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: () => _v1.push(`${_v20.MANAGE_VIDEO_PATH}${_v0}`)
          },
          showX: !1,
          notificationName: _v19.notificationName.lowResolutionVideo
        }));
      }, [_v0, _v1]),
      _v38 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Couldn’t complete upload",
            dictionary: {
              es: {
                singular: "No se pudo completar la subida"
              },
              "de-DE": {
                singular: "Upload konnte nicht abgeschlossen werden"
              },
              "fr-FR": {
                singular: "Mise en ligne impossible"
              },
              "ja-JP": {
                singular: "アップロードを完了できませんでした"
              },
              "ko-KR": {
                singular: "업로드를 완료할 수 없습니다."
              },
              "pt-BR": {
                singular: "Não foi possível concluir o carregamento"
              },
              "zh-CN": {
                singular: "无法完成上传"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "The video resolution should be 360p or higher.",
            dictionary: {
              es: {
                singular: "La resolución del video debe ser de 360p o superior."
              },
              "de-DE": {
                singular: "Die Videoauflösung sollte 360p oder höher sein."
              },
              "fr-FR": {
                singular: "La résolution de la vidéo doit être d'au moins 360p."
              },
              "ja-JP": {
                singular: "動画の解像度は 360p 以上である必要があります"
              },
              "ko-KR": {
                singular: "비디오 해상도는 360p 이상이어야 합니다."
              },
              "pt-BR": {
                singular: "A resolução do vídeo deve ser de 360p ou mais."
              },
              "zh-CN": {
                singular: "视频分辨率应为 360p 或更高。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: () => ({})
          },
          showX: !0,
          notificationName: _v19.notificationName.uploadLowResolutionVideo
        }));
      }, [_v0]),
      _v39 = (0, _v3.useCallback)(_v0 => {
        _v3 ? _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Add template and replace timeline",
            dictionary: {
              es: {
                singular: "Agregar plantilla y reemplazar línea de tiempo"
              },
              "de-DE": {
                singular: "Vorlage hinzufügen und Chronik ersetzen"
              },
              "fr-FR": {
                singular: "Ajouter un modèle et remplacer la timeline"
              },
              "ja-JP": {
                singular: "テンプレートを追加してタイムラインを置き換える"
              },
              "ko-KR": {
                singular: "템플릿을 추가하고 타임라인 바꾸기"
              },
              "pt-BR": {
                singular: "Adicionar modelo e trocar linha do tempo"
              },
              "zh-CN": {
                singular: "添加模板并替换时间线"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "If you add a template, your timeline will be replaced.\nYour work on the current timeline will be lost.",
            dictionary: {
              es: {
                singular: "Si agrega una plantilla, se reemplazará su línea de tiempo.\nSu trabajo en la línea de tiempo actual se perderá."
              },
              "de-DE": {
                singular: "Wenn Sie eine Vorlage hinzufügen, wird Ihre Chronik ersetzt.\nIhre Arbeit an der aktuellen Chronik geht verloren."
              },
              "fr-FR": {
                singular: "Si vous ajoutez un modèle, votre timeline sera remplacée.\nVotre travail sur la timeline actuelle sera perdu."
              },
              "ja-JP": {
                singular: "テンプレートを追加するとタイムラインが置き換えられます。現在のタイムライン上の作業内容は失われます。"
              },
              "ko-KR": {
                singular: "템플릿을 추가하면 타임라인이 바뀝니다.\n현재 타임라인에서 작업한 내용은 잃게 됩니다."
              },
              "pt-BR": {
                singular: "Ao adicionar um modelo, sua linha do tempo será trocada.\nSeu trabalho na atual linha do tempo será perdido."
              },
              "zh-CN": {
                singular: "如果添加模板，您的时间线将被替换。\n您在当前时间线上所做的工作将丢失。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Add template",
              dictionary: {
                es: {
                  singular: "Agregar plantilla"
                },
                "de-DE": {
                  singular: "Vorlage hinzufügen"
                },
                "fr-FR": {
                  singular: "Ajouter un modèle"
                },
                "ja-JP": {
                  singular: "テンプレートを追加"
                },
                "ko-KR": {
                  singular: "템플릿 추가"
                },
                "pt-BR": {
                  singular: "Adicionar modelo"
                },
                "zh-CN": {
                  singular: "添加模板"
                }
              }
            }),
            onClick: _v0
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: () => ({})
          },
          showX: !0,
          showAgainConfig: {
            toggle: _v4,
            value: _v3
          },
          notificationName: _v19.notificationName.addTemplatesAndReplaceTimeline
        })) : _v0();
      }, [_v0, _v3, _v4]),
      _v40 = (0, _v3.useCallback)(({
        onClick: _v0,
        cta: _v1,
        notificationName: _v2
      }) => {
        (0, _v29.sendTrackAutoSaveNotificationAction)({
          notificationName: _v2,
          cta: _v1
        }), _v0();
      }, []),
      _v41 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        onSecondaryClick: _v1
      }) => {
        let {
          autoSaveKeepChanges: _v2
        } = _v19.notificationName;
        (0, _v29.sendTrackViewAutoSaveNotification)({
          notificationName: _v2
        }), _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Keep changes",
            dictionary: {
              es: {
                singular: "Conserve los cambios"
              },
              "de-DE": {
                singular: "Änderungen behalten"
              },
              "fr-FR": {
                singular: "Conserver les modifications"
              },
              "ja-JP": {
                singular: "変更を保存"
              },
              "ko-KR": {
                singular: "변경 사항 유지"
              },
              "pt-BR": {
                singular: "Manter alterações"
              },
              "zh-CN": {
                singular: "保留更改"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "This version includes previously unsaved changes.\nWould you like to keep them? This action cannot be undone.",
            dictionary: {
              es: {
                singular: "Esta versión incluye cambios que no se guardaron anteriormente.\n¿Le gustaría conservarlos? esta acción no puede deshacerse."
              },
              "de-DE": {
                singular: "Diese Version enthält zuvor nicht gespeicherte Änderungen.\nMöchten Sie diese beibehalten? Diese Aktion kann nicht rückgängig gemacht werden."
              },
              "fr-FR": {
                singular: "Cette version inclut les modifications non sauvegardées lors de votre dernière visite.\nSouhaitez-vous les conserver ? Cette action est irréversible."
              },
              "ja-JP": {
                singular: "このバージョンには、未保存の変更が含まれています。 \n変更を保存しますか？このアクションは元に戻すことができません。"
              },
              "ko-KR": {
                singular: "이 버전에는 이전에 저장하지 않은 변경 사항이 포함되어 있습니다.\n변경 사항을 유지하시겠습니까? 이 작업은 취소할 수 없습니다."
              },
              "pt-BR": {
                singular: "Essa versão inclui alterações não salvas anteriormente.\nGostaria de mantê-las? Essa ação não pode ser desfeita."
              },
              "zh-CN": {
                singular: "此版本包括以前未保存的更改。您想保留它们吗？此操作不可撤销。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Keep changes",
              dictionary: {
                es: {
                  singular: "Conserve los cambios"
                },
                "de-DE": {
                  singular: "Änderungen behalten"
                },
                "fr-FR": {
                  singular: "Conserver les modifications"
                },
                "ja-JP": {
                  singular: "変更を保存"
                },
                "ko-KR": {
                  singular: "변경 사항 유지"
                },
                "pt-BR": {
                  singular: "Manter alterações"
                },
                "zh-CN": {
                  singular: "保留更改"
                }
              }
            }),
            onClick: () => _v40({
              onClick: _v0,
              cta: "Keep changes",
              notificationName: _v2
            })
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Discard",
              dictionary: {
                es: {
                  singular: "Descartar"
                },
                "de-DE": {
                  singular: "Verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer"
                },
                "ja-JP": {
                  singular: "破棄する"
                },
                "ko-KR": {
                  singular: "폐기"
                },
                "pt-BR": {
                  singular: "Descartar"
                },
                "zh-CN": {
                  singular: "丢弃"
                }
              }
            }),
            onClick: () => _v40({
              onClick: _v1,
              cta: "Discard",
              notificationName: _v2
            })
          },
          showX: !1,
          notificationName: _v2
        }));
      }, [_v0, _v40]),
      _v42 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        onSecondaryClick: _v1
      }) => {
        let {
          autoSaveRecoverUnsavedWork: _v2
        } = _v19.notificationName;
        (0, _v29.sendTrackViewAutoSaveNotification)({
          notificationName: _v2
        }), _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Recover unsaved work",
            dictionary: {
              es: {
                singular: "Recupere el trabajo no guardado"
              },
              "de-DE": {
                singular: "Nicht gespeicherte Arbeit wiederherstellen"
              },
              "fr-FR": {
                singular: "Récupérer le travail non sauvegardé"
              },
              "ja-JP": {
                singular: "保存されていない作業を復元"
              },
              "ko-KR": {
                singular: "저장하지 않은 작업 복구"
              },
              "pt-BR": {
                singular: "Recuperar trabalhos não salvos"
              },
              "zh-CN": {
                singular: "恢复未保存的工作"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "You have unsaved work from your last session.\nRecover to continue editing it or discard to start over.",
            dictionary: {
              es: {
                singular: "Tiene trabajo sin guardar de su última sesión.\nRecupérelos para continuar editando o descártelos para empezar de nuevo."
              },
              "de-DE": {
                singular: "Sie haben ungespeicherte Arbeit aus Ihrer letzten Sitzung.\nWiederherstellen, um mit der Bearbeitung fortzufahren oder verwerfen, um neu zu beginnen."
              },
              "fr-FR": {
                singular: "Vous avez des travaux non sauvegardés de votre dernière session.\nCliquez sur Récupérer pour continuer à éditer ou sur Ignorer pour recommencer."
              },
              "ja-JP": {
                singular: "前回のセッションの作業内容が保存されていません。 \n編集を続けるには回復し、最初からやり直すには破棄してください。"
              },
              "ko-KR": {
                singular: "지난 세션에서 저장하지 않은 작업이 있습니다.\n복구하여 편집을 계속하거나 삭제하여 다시 시작하세요."
              },
              "pt-BR": {
                singular: "Você tem trabalhos não salvos da última sessão.\nRecupere-os para continuar editando ou descarte-os para começar de novo."
              },
              "zh-CN": {
                singular: "您的上次会话中有工作未保存。\n恢复并继续编辑，或丢弃，然后重新开始。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Recover",
              dictionary: {
                es: {
                  singular: "Recuperar"
                },
                "de-DE": {
                  singular: "Wiederherstellen"
                },
                "fr-FR": {
                  singular: "Récupérer"
                },
                "ja-JP": {
                  singular: "復元"
                },
                "ko-KR": {
                  singular: "복구"
                },
                "pt-BR": {
                  singular: "Recuperar"
                },
                "zh-CN": {
                  singular: "恢复"
                }
              }
            }),
            onClick: () => _v40({
              onClick: _v0,
              cta: "Recover",
              notificationName: _v2
            })
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Discard",
              dictionary: {
                es: {
                  singular: "Descartar"
                },
                "de-DE": {
                  singular: "Verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer"
                },
                "ja-JP": {
                  singular: "破棄する"
                },
                "ko-KR": {
                  singular: "폐기"
                },
                "pt-BR": {
                  singular: "Descartar"
                },
                "zh-CN": {
                  singular: "丢弃"
                }
              }
            }),
            onClick: () => _v40({
              onClick: _v1,
              cta: "Discard",
              notificationName: _v2
            })
          },
          showX: !1,
          notificationName: _v2
        }));
      }, [_v0, _v40]),
      _v43 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        onSecondaryClick: _v1
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Problem occurred",
            dictionary: {
              es: {
                singular: "Ocurrió un problema"
              },
              "de-DE": {
                singular: "Es ist ein Problem aufgetreten"
              },
              "fr-FR": {
                singular: "Un problème est survenu"
              },
              "ja-JP": {
                singular: "問題が発生しました"
              },
              "ko-KR": {
                singular: "문제가 발생했습니다"
              },
              "pt-BR": {
                singular: "Ocorreu um problema"
              },
              "zh-CN": {
                singular: "出现问题"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Unfortunately, we can't complete this action.",
            dictionary: {
              es: {
                singular: "Lamentablemente, no podemos realizar esta acción."
              },
              "de-DE": {
                singular: "Leider können wir diese Aktion nicht abschließen."
              },
              "fr-FR": {
                singular: "Nous ne pouvons malheureusement pas terminer cette action."
              },
              "ja-JP": {
                singular: "申し訳ありません、このアクションを完了できません。"
              },
              "ko-KR": {
                singular: "안타깝게도 이 작업을 완료할 수 없습니다."
              },
              "pt-BR": {
                singular: "Infelizmente, não podemos concluir esta ação."
              },
              "zh-CN": {
                singular: "很遗憾，我们无法完成此操作。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Retry",
              dictionary: {
                es: {
                  singular: "Reintentar"
                },
                "de-DE": {
                  singular: "Neuer Versuch"
                },
                "fr-FR": {
                  singular: "Réessayer"
                },
                "ja-JP": {
                  singular: "再試行"
                },
                "ko-KR": {
                  singular: "재시도"
                },
                "pt-BR": {
                  singular: "TENTAR NOVAMENTE"
                },
                "zh-CN": {
                  singular: "重试"
                }
              }
            }),
            onClick: _v0
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Discard",
              dictionary: {
                es: {
                  singular: "Descartar"
                },
                "de-DE": {
                  singular: "Verwerfen"
                },
                "fr-FR": {
                  singular: "Ignorer"
                },
                "ja-JP": {
                  singular: "破棄する"
                },
                "ko-KR": {
                  singular: "폐기"
                },
                "pt-BR": {
                  singular: "Descartar"
                },
                "zh-CN": {
                  singular: "丢弃"
                }
              }
            }),
            onClick: _v1
          },
          showX: !1,
          notificationName: _v19.notificationName.autoSaveFailedToLoad
        }));
      }, [_v0]),
      _v44 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0,
        onSecondaryClick: _v1,
        isInteractive: _v2
      }) => {
        let {
          autoSaveUnsavedChangesInEdtior: _v3
        } = _v19.notificationName;
        (0, _v29.sendTrackViewAutoSaveNotification)({
          notificationName: _v3
        });
        let _v4 = _v2 ? (0, _v11.translate)({
            singular: "Unsaved changes in the editor",
            dictionary: {
              es: {
                singular: "Cambios no guardados en el editor"
              },
              "de-DE": {
                singular: "Nicht gespeicherte Änderungen im Editor"
              },
              "fr-FR": {
                singular: "Modifications non enregistrées dans l'éditeur"
              },
              "ja-JP": {
                singular: "エディターで保存されていない変更"
              },
              "ko-KR": {
                singular: "에디터에 저장되지 않은 변경 사항이 있습니다."
              },
              "pt-BR": {
                singular: "Alterações não salvas no editor"
              },
              "zh-CN": {
                singular: "编辑器中未保存的更改"
              }
            }
          }) : (0, _v11.translate)({
            singular: "Unsaved changes in Interactive Studio",
            dictionary: {
              es: {
                singular: "Cambios no guardados en Interactive Studio"
              },
              "de-DE": {
                singular: "Nicht gespeicherte Änderungen in Interactive Studio"
              },
              "fr-FR": {
                singular: "Modifications non enregistrées dans Interactive Studio"
              },
              "ja-JP": {
                singular: "Interactive Studioで保存されていない変更"
              },
              "ko-KR": {
                singular: "Interactive Studio에 저장되지 않은 변경 사항이 있습니다."
              },
              "pt-BR": {
                singular: "Alterações não salvas no Interactive Studio"
              },
              "zh-CN": {
                singular: "Interactive Studio 中未保存的更改"
              }
            }
          }),
          _v5 = _v2 ? (0, _v11.translate)({
            singular: "This video`s version includes previously unsaved changes that were made in the editor. If you would like to keep them, open in the editor and save them.",
            dictionary: {
              es: {
                singular: "Esta versión del video incluye cambios que se realizaron en el editor que no se guardaron anteriormente. Si desea conservarlos, ábralo en el editor y guárdelos."
              },
              "de-DE": {
                singular: "Die Version dieses Videos enthält zuvor nicht gespeicherte Änderungen, die im Editor vorgenommen wurden. Wenn Sie diese Änderungen behalten möchten, öffnen Sie sie im Editor und speichern Sie sie."
              },
              "fr-FR": {
                singular: "La version de cette vidéo inclut les modifications non sauvegardées qui ont été faites dans l'éditeur. Si vous souhaitez les conserver, ouvrez-les dans l'éditeur et enregistrez-les."
              },
              "ja-JP": {
                singular: "この動画のバージョンには、エディターで行われた未保存の変更が含まれています。保存するには、エディターで開いて保存してください。"
              },
              "ko-KR": {
                singular: "이 동영상 버전에는 이전에 에디터에서 저장하지 않은 변경 사항이 포함되어 있습니다. 변경 사항을 유지하려면 에디터에서 열어 저장하세요."
              },
              "pt-BR": {
                singular: "A versão deste vídeo inclui alterações não salvas anteriormente que foram feitas no editor. Se você quiser mantê-las, abra o arquivo no editor e salve-as."
              },
              "zh-CN": {
                singular: "此视频的版本包括以前在编辑器进行的但未保存的更改。如果您想保留这些更改，请在编辑器中打开并保存。"
              }
            }
          }) : (0, _v11.translate)({
            singular: "This video`s version includes previously unsaved changes that were made in Interactive Studio. If you would like to keep them, open in Interactive Studio and save them.",
            dictionary: {
              es: {
                singular: "Esta versión del video incluye cambios que se realizaron en Interactive Studio que no se guardaron anteriormente. Si desea conservarlos, ábralo en Interactive Studio y guárdelos."
              },
              "de-DE": {
                singular: "Die Version dieses Videos enthält zuvor nicht gespeicherte Änderungen, die im Interactive Studio vorgenommen wurden. Wenn Sie diese Änderungen behalten möchten, öffnen Sie sie im Interactive Studio und speichern Sie sie."
              },
              "fr-FR": {
                singular: "La version de cette vidéo comprend des modifications non sauvegardées qui ont été effectuées dans Interactive Studio. Si vous souhaitez les conserver, ouvrez-les dans Interactive Studio et enregistrez-les."
              },
              "ja-JP": {
                singular: "この動画のバージョンには、Interactive Studioで行われた未保存の変更が含まれています。保存するには、Interactive Studioで開いて保存してください。"
              },
              "ko-KR": {
                singular: "이 동영상 버전에는 이전에 Interactive Studio에서 저장하지 않은 변경 사항이 포함되어 있습니다. 변경 사항을 유지하려면 Interactive Studio에서 열고 저장하세요."
              },
              "pt-BR": {
                singular: "A versão deste vídeo inclui alterações não salvas anteriormente feitas no Interactive Studio. Se você quiser mantê-las, abra no Interactive Studio e salve-as."
              },
              "zh-CN": {
                singular: "此视频的版本包括以前在 Interactive Studio 进行的但未保存的更改。如果您想保留这些更改，请在 Interactive Studio 中打开并保存。"
              }
            }
          });
        _v0((0, _v24.showAlertAction)({
          title: _v4,
          content: _v5,
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Continue anyway",
              dictionary: {
                es: {
                  singular: "Continuar de todos modos"
                },
                "de-DE": {
                  singular: "Trotzdem fortfahren"
                },
                "fr-FR": {
                  singular: "Continuer"
                },
                "ja-JP": {
                  singular: "そのまま続ける"
                },
                "ko-KR": {
                  singular: "그래도 계속"
                },
                "pt-BR": {
                  singular: "Continuar assim mesmo"
                },
                "zh-CN": {
                  singular: "仍要继续"
                }
              }
            }),
            onClick: () => _v40({
              onClick: _v0,
              cta: "Continue anyway",
              notificationName: _v3
            })
          },
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: () => _v40({
              onClick: _v1,
              cta: "Cancel",
              notificationName: _v3
            })
          },
          showX: !1,
          notificationName: _v3
        }));
      }, [_v0, _v40]),
      _v45 = (0, _v3.useCallback)(({
        templateName: _v0,
        onPrimaryClick: _v1
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Delete a team template",
            dictionary: {
              es: {
                singular: "Eliminar una plantilla del equipo"
              },
              "de-DE": {
                singular: "Teamvorlage löschen"
              },
              "fr-FR": {
                singular: "Supprimer un modèle d'équipe"
              },
              "ja-JP": {
                singular: "チームテンプレートを削除"
              },
              "ko-KR": {
                singular: "팀 템플릿 삭제"
              },
              "pt-BR": {
                singular: "Excluir um modelo de equipe"
              },
              "zh-CN": {
                singular: "删除团队模板"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v8.Text, {
            variant: "body-md",
            "data-testid": _v21.testIds.fontDeleteMessage,
            children: [(0, _v11.translate)({
              singular: "Your team won’t be able to use it anymore. Videos that were created with it will remain saved in your library.",
              dictionary: {
                es: {
                  singular: "Su equipo ya no podrá utilizarlo. Los videos creados con él permanecerán guardados en su biblioteca."
                },
                "de-DE": {
                  singular: "Ihr Team wird es nicht mehr verwenden können. Videos, die damit erstellt wurden, bleiben in Ihrer Bibliothek gespeichert."
                },
                "fr-FR": {
                  singular: "Votre équipe ne pourra plus l'utiliser. Les vidéos créées avec ce logiciel resteront enregistrées dans votre bibliothèque."
                },
                "ja-JP": {
                  singular: "今後、チームは使用できなくなります。これを使用して作成された動画はライブラリに保存されたまま残ります。"
                },
                "ko-KR": {
                  singular: "팀에서 더 이상 사용할 수 없습니다. 이를 사용하여 제작된 동영상은 라이브러리에 계속 저장됩니다."
                },
                "pt-BR": {
                  singular: "Sua equipe não poderá mais usá-lo. Os vídeos criados com ele permanecerão salvos na sua biblioteca."
                },
                "zh-CN": {
                  singular: "您的团队将无法再使用它。使用它创建的视频将继续保存在您的视频库中。"
                }
              }
            }), (0, _v1.jsx)(_v14.FontsUnorderedListView, {
              children: (0, _v1.jsx)("li", {
                children: _v0
              })
            })]
          }),
          showX: !0,
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: () => ({})
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v1,
            status: "negative"
          },
          notificationName: _v19.notificationName.deleteTeamTemplate
        }));
      }, [_v0]),
      _v46 = (0, _v3.useCallback)(({
        onPrimaryClick: _v0
      }) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Continue without saving",
            dictionary: {
              es: {
                singular: "Continuar sin guardar"
              },
              "de-DE": {
                singular: "Ohne zu speichern fortfahren"
              },
              "fr-FR": {
                singular: "Continuer sans sauvegarder"
              },
              "ja-JP": {
                singular: "保存せずに続行"
              },
              "ko-KR": {
                singular: "저장하지 않고 계속 진행하기"
              },
              "pt-BR": {
                singular: "Continue sem salvar"
              },
              "zh-CN": {
                singular: "继续但不保存"
              }
            }
          }),
          content: (0, _v1.jsx)(_v8.Text, {
            variant: "body-md",
            "data-testid": _v21.testIds.fontDeleteMessage,
            children: (0, _v11.translate)({
              singular: "Unsaved changes will be lost if you edit this template.",
              dictionary: {
                es: {
                  singular: "Los cambios no guardados se perderán si edita esta plantilla."
                },
                "de-DE": {
                  singular: "Nicht gespeicherte Änderungen gehen verloren, wenn Sie diese Vorlage bearbeiten."
                },
                "fr-FR": {
                  singular: "Les modifications non enregistrées seront perdues si vous modifiez ce modèle."
                },
                "ja-JP": {
                  singular: "このテンプレートを編集すると、保存されていない変更は失われます。"
                },
                "ko-KR": {
                  singular: "이 템플릿을 편집하면 저장하지 않은 변경 사항은 잃게 됩니다."
                },
                "pt-BR": {
                  singular: "As alterações não salvas serão perdidas se você editar este modelo."
                },
                "zh-CN": {
                  singular: "如果编辑此模板，未保存的更改将丢失。"
                }
              }
            })
          }),
          showX: !0,
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: () => ({})
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Continue",
              dictionary: {
                es: {
                  singular: "Continuar"
                },
                "de-DE": {
                  singular: "Weiter"
                },
                "fr-FR": {
                  singular: "Continuer"
                },
                "ja-JP": {
                  singular: "次へ"
                },
                "ko-KR": {
                  singular: "계속"
                },
                "pt-BR": {
                  singular: "Continuar"
                },
                "zh-CN": {
                  singular: "继续"
                }
              }
            }),
            onClick: _v0
          },
          notificationName: _v19.notificationName.editTeamTemplate
        }));
      }, [_v0]),
      _v47 = (0, _v3.useCallback)(({
        inputValue: _v0,
        onPrimaryClick: _v1,
        onCancel: _v2,
        onInputChange: _v3
      }) => {
        _v31({
          copy: _v28.SAVE_AS_NEW_VIDEO
        }), _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Save new video",
            dictionary: {
              es: {
                singular: "Guardar el nuevo video"
              },
              "de-DE": {
                singular: "Neues Video speichern"
              },
              "fr-FR": {
                singular: "Enregistrer nouvelle vidéo"
              },
              "ja-JP": {
                singular: "新しい動画を保存"
              },
              "ko-KR": {
                singular: "새 동영상 저장"
              },
              "pt-BR": {
                singular: "Salvar novo vídeo"
              },
              "zh-CN": {
                singular: "保存新视频"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v9.VStack, {
            spacing: 14,
            align: "stretch",
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "heading-xs",
              "data-testid": _v21.testIds.fontSaveAsMessage,
              children: (0, _v11.translate)({
                singular: "Video name",
                dictionary: {
                  es: {
                    singular: "Nombre del video"
                  },
                  "de-DE": {
                    singular: "Videoname"
                  },
                  "fr-FR": {
                    singular: "Nom de la vidéo"
                  },
                  "ja-JP": {
                    singular: "動画名"
                  },
                  "ko-KR": {
                    singular: "동영상 이름"
                  },
                  "pt-BR": {
                    singular: "Nome do vídeo"
                  },
                  "zh-CN": {
                    singular: "视频名称"
                  }
                }
              })
            }), (0, _v1.jsx)(_v6.Input, {
              translate: "no",
              className: "notranslate",
              onChange: _v0 => _v3(_v0.target.value),
              autoFocus: !0,
              defaultValue: _v0,
              onFocus: _v0 => {
                _v0.target.select(), _v3(_v0);
              }
            })]
          }),
          showX: !0,
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v2
          },
          primaryButtonConfig: {
            content: (0, _v11.translate)({
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
            onClick: _v1
          },
          onDismiss: _v2,
          notificationName: _v19.notificationName.saveAs
        }));
      }, [_v0]),
      _v48 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "WebGL is required to edit videos",
            dictionary: {
              es: {
                singular: "Se requiere WebGL para editar videos"
              },
              "de-DE": {
                singular: "WebGL ist zum Bearbeiten von Videos erforderlich"
              },
              "fr-FR": {
                singular: "WebGL est requis pour modifier les vidéos"
              },
              "ja-JP": {
                singular: "動画の編集にはWebGLが必要です"
              },
              "ko-KR": {
                singular: "동영상을 편집하려면 WebGL이 필요합니다."
              },
              "pt-BR": {
                singular: "O WebGL é necessário para editar vídeos"
              },
              "zh-CN": {
                singular: "编辑视频需要 WebGL"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Please enable WebGL in your browser settings to use our video editor. If you continue having issues, try switching to a different device.",
            dictionary: {
              es: {
                singular: "Habilite WebGL en la configuración de su navegador para utilizar nuestro editor de video. Si sigue teniendo problemas, pruebe cambiando de dispositivo."
              },
              "de-DE": {
                singular: "Bitte aktivieren Sie WebGL in Ihren Browser-Einstellungen, um unseren Video-Editor zu verwenden. Wenn weiterhin Probleme auftreten, versuchen Sie, zu einem anderen Gerät zu wechseln."
              },
              "fr-FR": {
                singular: "Veuillez activer WebGL dans les paramètres de votre navigateur pour utiliser notre éditeur vidéo. Si les problèmes persistent, essayez de changer d'appareil."
              },
              "ja-JP": {
                singular: "Vimeoの動画エディターを使用するには、ブラウザー設定でWebGLを有効にしてください。問題が解決しない場合は、別のデバイスに切り替えてみてください。"
              },
              "ko-KR": {
                singular: "동영상 편집기를 사용하려면 브라우저 설정에서 WebGL을 활성화하세요. 문제가 지속되면 다른 기기로 전환해 보세요."
              },
              "pt-BR": {
                singular: "Ative o WebGL nas configurações do seu navegador para usar nosso editor de vídeo. Se o problema persistir, tente mudar de aparelho."
              },
              "zh-CN": {
                singular: "请在浏览器设置中启用 WebGL 以使用我们的视频编辑器。如果问题仍然存在，请尝试切换到其他设备。"
              }
            }
          }),
          primaryButtonConfig: {
            onClick: () => {
              _v1.goBack();
            },
            content: (0, _v11.translate)({
              singular: "Go back",
              dictionary: {
                es: {
                  singular: "Volver"
                },
                "de-DE": {
                  singular: "Zurück"
                },
                "fr-FR": {
                  singular: "Retour"
                },
                "ja-JP": {
                  singular: "戻る"
                },
                "ko-KR": {
                  singular: "돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar"
                },
                "zh-CN": {
                  singular: "返回"
                }
              }
            })
          },
          showX: !1,
          notificationName: _v19.notificationName.missingWebGL
        }));
      }, [_v0, _v1]),
      _v49 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to save",
            dictionary: {
              es: {
                singular: "Error al guardar"
              },
              "de-DE": {
                singular: "Konnte nicht gespeichert werden"
              },
              "fr-FR": {
                singular: "Échec de l'enregistrement"
              },
              "ja-JP": {
                singular: "保存できませんでした"
              },
              "ko-KR": {
                singular: "저장 실패"
              },
              "pt-BR": {
                singular: "Não foi possível salvar"
              },
              "zh-CN": {
                singular: "保存失败"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "This video has been deleted and cannot be saved.",
            dictionary: {
              es: {
                singular: "Este video se ha eliminado y no se puede guardar."
              },
              "de-DE": {
                singular: "Dieses Video wurde gelöscht und kann nicht gespeichert werden."
              },
              "fr-FR": {
                singular: "Cette vidéo a été supprimée et ne peut pas être enregistrée."
              },
              "ja-JP": {
                singular: "この動画は削除されており、保存できません。"
              },
              "ko-KR": {
                singular: "이 동영상은 삭제되어 저장할 수 없습니다."
              },
              "pt-BR": {
                singular: "Este vídeo foi excluído e não pode ser salvo."
              },
              "zh-CN": {
                singular: "此视频已被删除，无法保存。"
              }
            }
          }),
          primaryButtonConfig: {
            onClick: () => {
              _v1.goBack();
            },
            content: (0, _v11.translate)({
              singular: "Go back",
              dictionary: {
                es: {
                  singular: "Volver"
                },
                "de-DE": {
                  singular: "Zurück"
                },
                "fr-FR": {
                  singular: "Retour"
                },
                "ja-JP": {
                  singular: "戻る"
                },
                "ko-KR": {
                  singular: "돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar"
                },
                "zh-CN": {
                  singular: "返回"
                }
              }
            })
          },
          showX: !1,
          notificationName: _v19.notificationName.videoArchived
        }));
      }, [_v0, _v1]),
      _v50 = (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Failed to load",
            dictionary: {
              es: {
                singular: "Error al cargar"
              },
              "de-DE": {
                singular: "Konnte nicht geladen werden"
              },
              "fr-FR": {
                singular: "Échec du chargement"
              },
              "ja-JP": {
                singular: "読み込みに失敗しました"
              },
              "ko-KR": {
                singular: "콘텐츠를 불러 오지 못했습니다."
              },
              "pt-BR": {
                singular: "Falha ao carregar"
              },
              "zh-CN": {
                singular: "加载失败"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "This video has been deleted and cannot be loaded.",
            dictionary: {
              es: {
                singular: "Este video se eliminó y no se puede cargar."
              },
              "de-DE": {
                singular: "Dieses Video wurde gelöscht und kann nicht geladen werden."
              },
              "fr-FR": {
                singular: "Cette vidéo a été supprimée et ne peut pas être chargée."
              },
              "ja-JP": {
                singular: "この動画は削除されており、読み込めません。"
              },
              "ko-KR": {
                singular: "이 동영상은 삭제되어 로드할 수 없습니다."
              },
              "pt-BR": {
                singular: "Este vídeo foi excluído e não pode ser carregado."
              },
              "zh-CN": {
                singular: "此视频已被删除，无法加载。"
              }
            }
          }),
          primaryButtonConfig: {
            onClick: () => {
              _v1.goBack();
            },
            content: (0, _v11.translate)({
              singular: "Go back",
              dictionary: {
                es: {
                  singular: "Volver"
                },
                "de-DE": {
                  singular: "Zurück"
                },
                "fr-FR": {
                  singular: "Retour"
                },
                "ja-JP": {
                  singular: "戻る"
                },
                "ko-KR": {
                  singular: "돌아가기"
                },
                "pt-BR": {
                  singular: "Voltar"
                },
                "zh-CN": {
                  singular: "返回"
                }
              }
            })
          },
          showX: !1,
          notificationName: _v19.notificationName.videoArchivedForLoad
        }));
      }, [_v0, _v1]),
      _v51 = (0, _v3.useCallback)((_v0, _v1, _v2) => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Connect to Vimeo to start editing",
            dictionary: {
              es: {
                singular: "Conéctese a Vimeo para comenzar a editar"
              },
              "de-DE": {
                singular: "Verbinde dich mit Vimeo, um mit der Bearbeitung zu beginnen"
              },
              "fr-FR": {
                singular: "Connectez-vous à Vimeo pour commencer à monter"
              },
              "ja-JP": {
                singular: "Vimeoに接続して編集を開始"
              },
              "ko-KR": {
                singular: "Vimeo에 연결하여 편집 시작"
              },
              "pt-BR": {
                singular: "Vincule o Vimeo para começar a editar"
              },
              "zh-CN": {
                singular: "连接到 Vimeo 开始编辑"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "To use the video editor, you'll need to connect {APP} to your Vimeo account. This only takes a minute and gives you access to Vimeo's powerful editing tools.",
            replacements: {
              APP: _v0
            },
            dictionary: {
              es: {
                singular: "Para utilizar el editor de video, tendrá que conectar {APP} a su cuenta de Vimeo. Esto solo le llevará un minuto y le dará acceso a las potentes herramientas de edición de Vimeo."
              },
              "de-DE": {
                singular: "Um den Video-Editor verwenden zu können, ist es notwendig, {APP} mit deinem Vimeo-Konto zu verbinden. Das dauert nur eine Minute und gibt dir Zugriff auf die leistungsstarken Bearbeitungswerkzeuge von Vimeo."
              },
              "fr-FR": {
                singular: "Pour utiliser l'outil de montage vidéo, vous devez connecter {APP} à votre compte Vimeo. Cela ne prend qu'une minute et vous donne accès aux puissants outils de montage de Vimeo."
              },
              "ja-JP": {
                singular: "動画エディターを使用するには、{APP}をVimeoアカウントに接続する必要があります。これに1分かけるだけで、Vimeoの強力な編集ツールにアクセスできるようになります。"
              },
              "ko-KR": {
                singular: "동영상 편집기를 사용하려면 {APP}을(를) Vimeo 계정에 연결해야 합니다. 1분이면 Vimeo의 강력한 편집 도구를 사용할 수 있습니다."
              },
              "pt-BR": {
                singular: "Para usar o editor de vídeo, é necessário vincular {APP} à sua conta Vimeo. Leva apenas um minuto e dá acesso às ferramentas de edição do Vimeo."
              },
              "zh-CN": {
                singular: "要使用视频编辑器，您需要将 {APP} 连接到您的 Vimeo 帐户。仅需一分钟时间，您就可以使用 Vimeo 强大的编辑工具了。"
              }
            }
          }),
          primaryButtonConfig: {
            onClick: () => {
              _v1();
            },
            content: (0, _v11.translate)({
              singular: "Connect to Vimeo",
              dictionary: {
                es: {
                  singular: "Conectar con Vimeo"
                },
                "de-DE": {
                  singular: "Verknüpfe dich mit Vimeo"
                },
                "fr-FR": {
                  singular: "Connexion à Vimeo"
                },
                "ja-JP": {
                  singular: "Vimeoに接続する"
                },
                "ko-KR": {
                  singular: "Vimeo에 연결"
                },
                "pt-BR": {
                  singular: "Conectar ao Vimeo"
                },
                "zh-CN": {
                  singular: "连接到 Vimeo"
                }
              }
            })
          },
          ...(_v2 && {
            secondaryButtonConfig: {
              onClick: () => {
                _v2();
              },
              content: (0, _v11.translate)({
                singular: "Go back",
                dictionary: {
                  es: {
                    singular: "Volver"
                  },
                  "de-DE": {
                    singular: "Zurück"
                  },
                  "fr-FR": {
                    singular: "Retour"
                  },
                  "ja-JP": {
                    singular: "戻る"
                  },
                  "ko-KR": {
                    singular: "돌아가기"
                  },
                  "pt-BR": {
                    singular: "Voltar"
                  },
                  "zh-CN": {
                    singular: "返回"
                  }
                }
              })
            }
          }),
          showX: !1,
          notificationName: _v19.notificationName.partnerConnect
        }));
      }, [_v0]);
    return {
      alertFileTooBig: _v5,
      alertFileTooSmall: _v6,
      alertFontAlreadyExist: _v7,
      alertMaximumFontLimit: _v8,
      alertCannotDeleteMedia: _v9,
      alertCannotUploadLogo: _v11,
      alertCannotCreateBrandKit: _v12,
      alertCannotAddLogo: _v13,
      alertCannotDeleteLogo: _v10,
      alertFontUploadTerms: _v14,
      alertUploadFontFailed: _v16,
      alertFailedToSave: _v19,
      alertFailedToPublishInteractive: _v20,
      alertCouldNotEditOverlay: _v21,
      alertFailedToSaveOverlayAsTemplate: _v22,
      alertFailedToUploadOverlayThumbnail: _v23,
      alertFailedToAddOverlayTemplateToVideo: _v24,
      alertDiscardOverlayChanges: _v25,
      alertDeleteOverlayTemplate: _v27,
      alertVideoTooLong: _v28,
      alertUploadFailed: _v29,
      alertProblemOccurred: _v30,
      alertConnectivityProblem: _v31,
      alertSaveYouWorkReminder: _v32,
      alertDeleteFont: _v33,
      alertCannotDeleteIntoOutroMedia: _v34,
      alertDeleteIntroOutro: _v35,
      alertMusicUploadTerms: _v15,
      alertSomeIntrosOutrosCouldNotBeUploaded: _v36,
      alertLowResolution: _v37,
      alertUseAllScenes: _v39,
      alertAutoSavedChanges: _v41,
      alertLocalAutoSavedChanges: _v42,
      alertFailedToLoadLocalAutoSave: _v43,
      alertCrossEditingToolAutoSave: _v44,
      alertDeleteTeamTemplate: _v45,
      alertChangesLostEditTeamTemplate: _v46,
      alertSaveAs: _v47,
      alertUploadVideoLowResolution: _v38,
      alertMissingWebGL: _v48,
      alertPartnerConnect: _v51,
      alertUnauthorized: _v18,
      alertStoryboardNotFound: _v17,
      alertVideoIsDeleted: _v49,
      alertNoPermissionsToEdit: (0, _v3.useCallback)(_v0 => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "No editing permissions",
            dictionary: {
              es: {
                singular: "Sin permisos de edición"
              },
              "de-DE": {
                singular: "Keine Bearbeitungsberechtigungen"
              },
              "fr-FR": {
                singular: "Aucune autorisation de montage"
              },
              "ja-JP": {
                singular: "編集権限がありません"
              },
              "ko-KR": {
                singular: "편집 권한이 없습니다."
              },
              "pt-BR": {
                singular: "Sem permissão para edição"
              },
              "zh-CN": {
                singular: "无编辑权限"
              }
            }
          }),
          content: (0, _v1.jsxs)(_v5.Box, {
            children: [(0, _v1.jsx)(_v8.Text, {
              variant: "body-lg",
              children: (0, _v11.translate)({
                singular: "You don't have permissions to edit this video.",
                dictionary: {
                  es: {
                    singular: "No tiene permisos para editar este video."
                  },
                  "de-DE": {
                    singular: "Du hast keine Berechtigungen zum bearbeiten dieses Videos."
                  },
                  "fr-FR": {
                    singular: "Vous n'avez pas l'autorisation de modifier cette vidéo."
                  },
                  "ja-JP": {
                    singular: "この動画を編集する権限がありません。"
                  },
                  "ko-KR": {
                    singular: "이 동영상을 편집할 수 있는 권한이 없습니다."
                  },
                  "pt-BR": {
                    singular: "Você não tem permissão para editar o vídeo."
                  },
                  "zh-CN": {
                    singular: "您无权编辑此视频。"
                  }
                }
              })
            }), _v0 && (0, _v1.jsxs)(_v1.Fragment, {
              children: [(0, _v1.jsx)(_v8.Text, {
                marginBottom: "md",
                variant: "body-lg",
                children: (0, _v11.translate)({
                  singular: "Try switching to a different team.",
                  dictionary: {
                    es: {
                      singular: "Pruebe cambiar a otro."
                    },
                    "de-DE": {
                      singular: "Versuchen Sie, zu einem anderen Team zu wechseln."
                    },
                    "fr-FR": {
                      singular: "Essayez de changer d'équipe."
                    },
                    "ja-JP": {
                      singular: "別のチームに切り替えてみてください。"
                    },
                    "ko-KR": {
                      singular: "다른 팀으로 바꿔보세요."
                    },
                    "pt-BR": {
                      singular: "Tente trocar para uma equipe diferente."
                    },
                    "zh-CN": {
                      singular: "请尝试切换到其他团队。"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v13.default, {})]
            })]
          }),
          secondaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "Go home",
              dictionary: {
                es: {
                  singular: "Inicio"
                },
                "de-DE": {
                  singular: "Zur Startseite"
                },
                "fr-FR": {
                  singular: "Aller à la page d'accueil "
                },
                "ja-JP": {
                  singular: "ホームへ"
                },
                "ko-KR": {
                  singular: "홈으로 이동"
                },
                "pt-BR": {
                  singular: "Ir para a página inicial"
                },
                "zh-CN": {
                  singular: "返回主页"
                }
              }
            }),
            onClick: () => {
              _v1.goBack();
            }
          },
          showX: !1,
          notificationName: _v19.notificationName.noPermissionsToEdit
        }));
      }, [_v0, _v1]),
      alertVideoIsDeletedForLoad: _v50,
      alertDiscardOrSaveOverlayChanges: _v26,
      alertElementsRemoved: (0, _v3.useCallback)(() => {
        _v0((0, _v24.showAlertAction)({
          title: (0, _v11.translate)({
            singular: "Some Items Removed",
            dictionary: {
              es: {
                singular: "Se eliminaron algunos elementos"
              },
              "de-DE": {
                singular: "Einige Elemente wurden entfernt"
              },
              "fr-FR": {
                singular: "Certains éléments ont été supprimés"
              },
              "ja-JP": {
                singular: "一部のアイテムが削除されました"
              },
              "ko-KR": {
                singular: "일부 항목이 제거되었습니다."
              },
              "pt-BR": {
                singular: "Alguns itens foram removidos"
              },
              "zh-CN": {
                singular: "删除的部分项目"
              }
            }
          }),
          content: (0, _v11.translate)({
            singular: "Some items were removed from your video because they were corrupted.",
            dictionary: {
              es: {
                singular: "Se eliminaron algunos elementos de su video porque estaban dañados."
              },
              "de-DE": {
                singular: "Einige Elemente wurden aus Ihrem Video entfernt, da sie beschädigt waren."
              },
              "fr-FR": {
                singular: "Certains éléments ont été supprimés de votre vidéo car ils étaient corrompus."
              },
              "ja-JP": {
                singular: "一部のアイテムが破損していたため、動画から削除されました。"
              },
              "ko-KR": {
                singular: "일부 항목이 손상되어 동영상에서 삭제되었습니다."
              },
              "pt-BR": {
                singular: "Alguns arquivos foram excluídos do seu vídeo porque estavam corrompidos."
              },
              "zh-CN": {
                singular: "由于文件损坏，您视频中的部分项目已删除。"
              }
            }
          }),
          primaryButtonConfig: {
            content: (0, _v11.translate)({
              singular: "OK",
              dictionary: {
                es: {
                  singular: "Aceptar"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "zh-CN": {
                  singular: "确定"
                }
              }
            }),
            onClick: _v2.default
          },
          showX: !0,
          notificationName: _v19.notificationName.someItemsRemoved
        }));
      }, [_v0])
    };
  }], 0);
}