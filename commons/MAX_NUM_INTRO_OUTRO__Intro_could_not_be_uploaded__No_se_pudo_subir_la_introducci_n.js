{
  "use strict";

  _v0.s(["default", () => _v35], 0);
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
    _v15 = _v0.i(0);
  _v0.s(["MAX_NUM_INTRO_OUTRO", 0, 10], 0);
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = () => {
    let _v0 = (0, _v18.useAppDispatch)(),
      {
        uploadIntroOutroMedia: _v1
      } = (0, _v14.useUploadQueue)(),
      {
        alertSomeIntrosOutrosCouldNotBeUploaded: _v2
      } = (0, _v13.useAlerts)();
    return {
      uploadIntroOutro: (0, _v5.useCallback)(async (_v0, _v1, _v2) => {
        let _v3,
          _v4,
          _v5,
          _v6 = [..._v0],
          _v7 = 10 - _v2,
          _v8 = _v6.splice(_v7),
          _v9 = _v6.splice(0, _v7);
        if (_v9.length > 0) {
          let _v0 = _v9.map(_v0 => _v1({
            file: _v0,
            context: _v1
          }));
          await Promise.all(_v0).catch(async _v0 => {
            var _v1;
            let {
              title: _v2,
              content: _v3,
              notificationName: _v4
            } = (_v1 = _v0.message, _v1 === _v15.VIDEO_DURATION_ABOVE_60_SEC ? _v1 === _v19.IntroOutroContext.INTRO ? {
              title: (0, _v9.translate)({
                singular: "Intro could not be uploaded",
                dictionary: {
                  es: {
                    singular: "No se pudo subir la introducción"
                  },
                  "de-DE": {
                    singular: "Intro konnte nicht hochgeladen werden"
                  },
                  "fr-FR": {
                    singular: "L'intro n'a pas pu être importée"
                  },
                  "ja-JP": {
                    singular: "イントロをアップロードできませんでした"
                  },
                  "ko-KR": {
                    singular: "인트로를 업로드할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "A introdução não pode ser carregada"
                  },
                  "zh-CN": {
                    singular: "片头无法上传"
                  }
                }
              }),
              content: (0, _v9.translate)({
                singular: "Make sure your intro is less than 60 seconds",
                dictionary: {
                  es: {
                    singular: "Asegúrese de que su introducción dure menos de 60 segundos"
                  },
                  "de-DE": {
                    singular: "Stelle sicher, dass dein Intro weniger als 60 Sekunden lang ist"
                  },
                  "fr-FR": {
                    singular: "Veillez à ce que votre intro dure moins de 60 secondes"
                  },
                  "ja-JP": {
                    singular: "イントロが60秒未満であることを確認してください。"
                  },
                  "ko-KR": {
                    singular: "인트로가 60초 미만인지 확인하세요."
                  },
                  "pt-BR": {
                    singular: "Confira se a sua introdução tem menos de 60 segundos"
                  },
                  "zh-CN": {
                    singular: "确保您的片头短于 60 秒"
                  }
                }
              }),
              notificationName: _v16.notificationName.introCouldNotBeUploaded
            } : {
              title: (0, _v9.translate)({
                singular: "Outro could not be uploaded",
                dictionary: {
                  es: {
                    singular: "No se pudo subir el cierre"
                  },
                  "de-DE": {
                    singular: "Outro konnte nicht hochgeladen werden"
                  },
                  "fr-FR": {
                    singular: "L'outro n'a pas pu être importée"
                  },
                  "ja-JP": {
                    singular: "アウトロをアップロードできませんでした"
                  },
                  "ko-KR": {
                    singular: "아우트로를 업로드할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "A tela de pós-vídeo não pode ser carregada"
                  },
                  "zh-CN": {
                    singular: "片尾无法上传"
                  }
                }
              }),
              content: (0, _v9.translate)({
                singular: "Make sure your outro is less than 60 seconds",
                dictionary: {
                  es: {
                    singular: "Asegúrese de que su cierre dure menos de 60 segundos"
                  },
                  "de-DE": {
                    singular: "Stelle sicher, dass dein Outro weniger als 60 Sekunden lang ist"
                  },
                  "fr-FR": {
                    singular: "Veillez à ce que votre outro dure moins de 60 secondes."
                  },
                  "ja-JP": {
                    singular: "アウトロが60秒未満であることを確認してください。"
                  },
                  "ko-KR": {
                    singular: "아우트로가 60초 미만인지 확인하세요."
                  },
                  "pt-BR": {
                    singular: "Certifique-se de que sua tela de pós-vídeo tenha menos de 60 segundos"
                  },
                  "zh-CN": {
                    singular: "确保您的片尾短于 60 秒"
                  }
                }
              }),
              notificationName: _v16.notificationName.outroCouldNotBeUploaded
            } : _v1 === _v15.MAX_INTRO_OUTRO_UPLOADS ? {
              title: (0, _v9.translate)({
                singular: "Maximum files upload limit",
                dictionary: {
                  es: {
                    singular: "Límite máximo de subida de archivos"
                  },
                  "de-DE": {
                    singular: "Obergrenze für das Hochladen von Dateien"
                  },
                  "fr-FR": {
                    singular: "Limite maximale de mise en ligne de fichiers"
                  },
                  "ja-JP": {
                    singular: "ファイルのアップロード上限"
                  },
                  "ko-KR": {
                    singular: "파일 업로드 최대 한도"
                  },
                  "pt-BR": {
                    singular: "Limite máximo de carregamento de arquivos"
                  },
                  "zh-CN": {
                    singular: "最大文件数量上传限制"
                  }
                }
              }),
              content: (0, _v9.translate)({
                singular: "You have reached the limit of 20 files.\n Please delete files to upload additional ones.",
                dictionary: {
                  es: {
                    singular: "Ha alcanzado el límite de 20 archivos.\n Elimine archivos para subir otros."
                  },
                  "de-DE": {
                    singular: "Du hast das Limit von 20 Dateien erreicht.\n Bitte lösche Dateien, um weitere hochzuladen."
                  },
                  "fr-FR": {
                    singular: "Vous avez atteint la limite de 20 fichiers.\n Veuillez en supprimer pour en ajouter d'autres."
                  },
                  "ja-JP": {
                    singular: "20個のファイル上限に達しました。\nさらにアップロードするには、ファイルを削除してください。"
                  },
                  "ko-KR": {
                    singular: "파일 한도 20개에 도달했습니다.\n 추가로 업로드하려면 파일을 삭제하세요."
                  },
                  "pt-BR": {
                    singular: "Você atingiu o limite de 20 arquivos carregados.\n Exclua alguns arquivos para carregar mais."
                  },
                  "zh-CN": {
                    singular: "您已达到 20 个文件的限制。\n请删除部分文件，上传其他文件。"
                  }
                }
              }),
              notificationName: _v16.notificationName.maximumFilesUploadLimit
            } : {
              title: (0, _v9.translate)({
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
              content: _v1 === _v19.IntroOutroContext.INTRO ? (0, _v9.translate)({
                singular: "Intro could not be uploaded",
                dictionary: {
                  es: {
                    singular: "No se pudo subir la introducción"
                  },
                  "de-DE": {
                    singular: "Intro konnte nicht hochgeladen werden"
                  },
                  "fr-FR": {
                    singular: "L'intro n'a pas pu être importée"
                  },
                  "ja-JP": {
                    singular: "イントロをアップロードできませんでした"
                  },
                  "ko-KR": {
                    singular: "인트로를 업로드할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "A introdução não pode ser carregada"
                  },
                  "zh-CN": {
                    singular: "片头无法上传"
                  }
                }
              }) : (0, _v9.translate)({
                singular: "Outro could not be uploaded",
                dictionary: {
                  es: {
                    singular: "No se pudo subir el cierre"
                  },
                  "de-DE": {
                    singular: "Outro konnte nicht hochgeladen werden"
                  },
                  "fr-FR": {
                    singular: "L'outro n'a pas pu être importée"
                  },
                  "ja-JP": {
                    singular: "アウトロをアップロードできませんでした"
                  },
                  "ko-KR": {
                    singular: "아우트로를 업로드할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "A tela de pós-vídeo não pode ser carregada"
                  },
                  "zh-CN": {
                    singular: "片尾无法上传"
                  }
                }
              }),
              notificationName: _v16.notificationName.somethingWentWrong
            });
            _v3 = _v2, _v4 = _v3, _v5 = _v4;
          });
        }
        _v8.length > 0 ? _v2({
          type: _v1,
          files: _v8
        }) : _v3 && _v4 && _v5 && _v0((0, _v17.showAlertAction)({
          title: _v3,
          content: _v4,
          primaryButtonConfig: {
            content: (0, _v9.translate)({
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
          notificationName: _v5
        }));
      }, [_v2, _v0, _v1])
    };
  };
  _v0.s(["useIntroOutroElement", 0, _v20], 0);
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  let _v29 = ({
    type: _v0
  }) => {
    let _v1 = (0, _v18.useAppDispatch)(),
      _v2 = (0, _v18.useAppSelector)(_v23.storyboardIdSelector),
      {
        trackEditorBrandKitItemOpened: _v3,
        trackEditorBrandKitItemUploaded: _v4
      } = (0, _v10.useEditorTracking)(),
      _v5 = (0, _v18.useAppSelector)(_v24.uploadsSelector),
      _v6 = (0, _v5.useRef)(null),
      {
        uploadIntroOutro: _v7
      } = _v20(),
      {
        data: _v8,
        isFetching: _v9
      } = (0, _v21.useFetchIntroOutroQuery)(),
      _v10 = _v0.toLocaleLowerCase(),
      _v11 = (0, _v5.useMemo)(() => {
        let _v0 = _v8?.[_v10].filter(_v0 => "DONE" === _v0.jobStatus);
        return [..._v5.filter(_v0 => _v0.origin === _v27.UploadMediaOrigin.BRAND && _v0.context === _v0.toUpperCase()).map(_v0 => {
          if (_v0.type !== _v26.MediaType.VIDEO || !_v0.source) return {
            ..._v0.media,
            id: _v0.id
          };
          {
            let {
              previewUrl: _v0,
              duration: _v1
            } = _v0.source;
            return {
              ..._v0.media,
              id: _v0.id,
              previewUrl: _v0,
              duration: _v1
            };
          }
        }), ...(_v0 || [])];
      }, [_v8, _v0, _v10, _v5]),
      _v12 = (0, _v5.useCallback)(async _v0 => {
        let _v1 = _v8?.[_v10].filter(_v0 => "DONE" === _v0.jobStatus).length ?? 0,
          _v2 = _v5.filter(_v0 => _v0.origin === _v27.UploadMediaOrigin.BRAND && _v0.context === _v0.toUpperCase()).length;
        _v1((0, _v22.openInspectorAction)({
          inspectorType: _v0 === _v19.IntroOutroContext.INTRO ? _v25.InspectorType.BRAND_INTRO : _v25.InspectorType.BRAND_OUTRO
        }));
        let _v3 = _v0.target.files;
        _v3 && (_v7(_v3, _v0, _v1 + _v2), _v4({
          editorSessionId: _v2,
          editorBrandKitItemType: _v0 === _v19.IntroOutroContext.INTRO ? "intros" : "outros"
        }));
      }, [_v8, _v1, _v0, _v10, _v7, _v5, _v4, _v2]),
      _v13 = (0, _v5.useMemo)(() => _v0 === _v19.IntroOutroContext.INTRO ? (0, _v1.jsx)(_v7.EndScreen, {}) : (0, _v1.jsx)("div", {
        style: {
          transform: "rotate(180deg)"
        },
        children: (0, _v1.jsx)(_v7.EndScreen, {})
      }), [_v0]);
    return (0, _v1.jsxs)(_v28.BrandKitSection, {
      testId: _v0 === _v19.IntroOutroContext.INTRO ? _v11.testIds.brandIntrosSection : _v11.testIds.brandOutrosSection,
      title: _v0 === _v19.IntroOutroContext.INTRO ? (0, _v9.translate)({
        singular: "Intros",
        dictionary: {
          es: {
            singular: "Introducciones"
          },
          "ja-JP": {
            singular: "イントロ"
          },
          "ko-KR": {
            singular: "인트로"
          },
          "pt-BR": {
            singular: "Introduções"
          },
          "zh-CN": {
            singular: "片头"
          }
        }
      }) : (0, _v9.translate)({
        singular: "Outros",
        dictionary: {
          es: {
            singular: "Cierres"
          },
          "ja-JP": {
            singular: "アウトロ"
          },
          "ko-KR": {
            singular: "아우트로"
          },
          "pt-BR": {
            singular: "Telas Pós-Vídeo"
          },
          "zh-CN": {
            singular: "片尾"
          }
        }
      }),
      leftIcon: _v13,
      onClick: _v0 => {
        _v0?.nativeEvent.target?.nodeName !== "INPUT" && (_v1((0, _v22.openInspectorAction)({
          inspectorType: _v0 === _v19.IntroOutroContext.INTRO ? _v25.InspectorType.BRAND_INTRO : _v25.InspectorType.BRAND_OUTRO
        })), _v3({
          editorSessionId: _v2,
          editorBrandKitSection: _v0 === _v19.IntroOutroContext.INTRO ? "intros" : "outros"
        }));
      },
      children: [!_v9 && _v11?.length > 0 ? (0, _v1.jsx)(_v6.ChevronRightSmall, {
        boxSize: "xs"
      }) : (0, _v1.jsx)(_v8.PlusSmall, {
        onClick: _v0 => {
          _v0.stopPropagation(), _v6.current?.click();
        }
      }), (0, _v1.jsx)("input", {
        type: "file",
        onChange: _v12,
        accept: _v12.ALLOWED_INTRO_OUTRO_MEDIA.join(),
        multiple: !0,
        "data-testid": "music-upload-button",
        ref: _v6,
        hidden: !0
      })]
    });
  };
  var _v30 = _v0.i(0);
  let _v31 = () => {
    let _v0 = (0, _v18.useAppDispatch)(),
      _v1 = (0, _v18.useAppSelector)(_v23.storyboardIdSelector),
      {
        trackEditorBrandKitItemOpened: _v2
      } = (0, _v10.useEditorTracking)();
    return (0, _v1.jsx)(_v28.BrandKitSection, {
      testId: _v11.testIds.brandLogosSection,
      title: (0, _v9.translate)({
        singular: "Logos",
        dictionary: {
          es: {
            singular: "Logotipos"
          },
          "ja-JP": {
            singular: "logo"
          },
          "ko-KR": {
            singular: "로고"
          },
          "zh-CN": {
            singular: "徽标"
          }
        }
      }),
      leftIcon: (0, _v1.jsx)(_v30.LogoBrand, {}),
      onClick: () => {
        _v0((0, _v22.openInspectorAction)({
          inspectorType: _v25.InspectorType.BRAND_LOGOS
        })), _v2({
          editorSessionId: _v1,
          editorBrandKitSection: "logos"
        });
      },
      children: (0, _v1.jsx)(_v6.ChevronRightSmall, {
        boxSize: "xs"
      })
    });
  };
  var _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  let _v35 = () => (0, _v1.jsxs)(_v32.Inspector, {
    children: [(0, _v1.jsx)(_v34.InspectorHeader, {
      title: "Brand kit"
    }), (0, _v1.jsx)(_v33.InspectorBody, {
      children: (0, _v1.jsx)(_v2.Flex, {
        flexDirection: "column",
        padding: "0 16px",
        alignItems: "center",
        height: "100%",
        gap: "8px",
        children: (0, _v1.jsxs)(_v2.Flex, {
          width: "100%",
          flexDirection: "column",
          gap: "8px",
          children: [(0, _v1.jsx)(_v31, {}), (0, _v1.jsx)(_v3.default, {}), (0, _v1.jsx)(_v4.default, {}), (0, _v1.jsx)(_v29, {
            type: _v19.IntroOutroContext.INTRO
          }), (0, _v1.jsx)(_v29, {
            type: _v19.IntroOutroContext.OUTRO
          })]
        })
      })
    })]
  });
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  _v0.s(["default", 0, ({
    selectedBrandKit: _v0,
    brandKits: _v1,
    onBrandKitChange: _v2,
    canEditBrandKit: _v3,
    brandkitsUrl: _v4
  }) => (0, _v1.jsxs)(_v2.Flex, {
    width: "100%",
    children: [(0, _v1.jsx)(_v36.Box, {
      flexGrow: 1,
      marginRight: "sm",
      children: (0, _v1.jsx)(_v37.Select, {
        onValueChange: _v0 => _v2(_v0.value[0]),
        value: [_v0],
        items: _v1,
        size: "sm",
        variant: "withCheck"
      })
    }), _v3 && (0, _v1.jsx)(_v38.Button, {
      size: "sm",
      variant: "secondary",
      paddingX: 3,
      leftIcon: (0, _v1.jsx)(_v39.PopOut, {}),
      isDisabled: "" === _v0,
      onClick: () => {
        window.open(_v4, "_blank");
      },
      children: (0, _v9.translate)({
        singular: "Edit",
        dictionary: {
          es: {
            singular: "Editar"
          },
          "de-DE": {
            singular: "Bearbeiten"
          },
          "fr-FR": {
            singular: "Modifier"
          },
          "ja-JP": {
            singular: "編集"
          },
          "ko-KR": {
            singular: "편집"
          },
          "pt-BR": {
            singular: "Editar"
          },
          "zh-CN": {
            singular: "编辑"
          }
        }
      })
    })]
  })], 0);
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = (0, _v9.translate)({
      singular: "characters",
      dictionary: {
        es: {
          singular: "caracteres"
        },
        "de-DE": {
          singular: "Zeichen"
        },
        "fr-FR": {
          singular: "caractères"
        },
        "ja-JP": {
          singular: "文字"
        },
        "ko-KR": {
          singular: "자"
        },
        "pt-BR": {
          singular: "caracteres"
        },
        "zh-CN": {
          singular: "字符"
        }
      }
    }),
    _v51 = (0, _v9.translate)({
      singular: "Create",
      dictionary: {
        es: {
          singular: "Crear"
        },
        "de-DE": {
          singular: "Erstellen"
        },
        "fr-FR": {
          singular: "Créer"
        },
        "ja-JP": {
          singular: "作成"
        },
        "ko-KR": {
          singular: "만들기"
        },
        "pt-BR": {
          singular: "Criar"
        },
        "zh-CN": {
          singular: "创建"
        }
      }
    }),
    _v52 = (0, _v9.translate)({
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
    });
  _v0.s(["CreateBrandKitModal", 0, ({
    isOpen: _v0,
    onSave: _v1,
    handleClose: _v2,
    isLoading: _v3
  }) => {
    let [_v4, _v5] = (0, _v5.useState)(""),
      _v6 = async _v0 => {
        if (_v0) {
          let _v0 = _v40.default.sanitize(_v0);
          if (_v0) return await _v1(_v0), _v2();
        }
      };
    return (0, _v1.jsxs)(_v41.Modal, {
      isOpen: _v0,
      onClose: _v2,
      size: "md",
      children: [(0, _v1.jsx)(_v42.ModalOverlay, {}), (0, _v1.jsxs)(_v43.ModalContent, {
        borderRadius: "md",
        pb: "md",
        children: [(0, _v1.jsx)(_v44.ModalHeader, {
          fontSize: "header-lg",
          py: "md",
          px: "lg",
          mb: "0",
          children: (0, _v9.translate)({
            singular: "Create new brand kit",
            dictionary: {
              es: {
                singular: "Crear un nuevo kit de marca"
              },
              "de-DE": {
                singular: "Neues Markenkit erstellen"
              },
              "fr-FR": {
                singular: "Créer un nouveau kit de marque"
              },
              "ja-JP": {
                singular: "新しいブランドキットを作成"
              },
              "ko-KR": {
                singular: "새로운 브랜드 키트 생성"
              },
              "pt-BR": {
                singular: "Criar novo kit de marca"
              },
              "zh-CN": {
                singular: "新建品牌工具包"
              }
            }
          })
        }), (0, _v1.jsx)(_v46.ModalBody, {
          gap: "md",
          px: "lg",
          py: "sm",
          height: "408px",
          children: (0, _v1.jsx)(_v49.FormControl, {
            display: "flex",
            flexDirection: "column",
            gap: "xs",
            children: (0, _v1.jsxs)(_v49.FormControl, {
              children: [(0, _v1.jsx)(_v48.FormLabel, {
                fontWeight: "medium",
                children: (0, _v9.translate)({
                  singular: "Brand kit name",
                  dictionary: {
                    es: {
                      singular: "Nombre del kit de marca"
                    },
                    "de-DE": {
                      singular: "Markenkit-Name"
                    },
                    "fr-FR": {
                      singular: "Nom du kit de marque"
                    },
                    "ja-JP": {
                      singular: "ブランドキット名"
                    },
                    "ko-KR": {
                      singular: "브랜드 키트 이름"
                    },
                    "pt-BR": {
                      singular: "Nome do Kit de marca"
                    },
                    "zh-CN": {
                      singular: "品牌工具包名称"
                    }
                  }
                })
              }), (0, _v1.jsx)(_v47.Input, {
                value: _v4,
                marginTop: "xs",
                size: "lg",
                maxLength: 32,
                onChange: _v0 => _v5(_v0.target.value),
                autoFocus: !0,
                onKeyDown: async _v0 => {
                  "Enter" === _v0.key && _v4 && (await _v6(_v4));
                }
              }), (0, _v1.jsxs)(_v49.FormHelperText, {
                fontSize: "body-md",
                display: "flex",
                justifyContent: "flex-end",
                paddingTop: "xs",
                color: _v4.length >= 27 ? "status-caution-primary" : "text-tertiary",
                children: [_v4.length || 0, "/", 32, " ", _v50]
              })]
            })
          })
        }), (0, _v1.jsxs)(_v45.ModalFooter, {
          gap: "md",
          children: [(0, _v1.jsx)(_v38.Button, {
            size: "md",
            variant: "tertiary",
            onClick: _v2,
            children: _v52
          }), (0, _v1.jsx)(_v38.Button, {
            size: "md",
            variant: "primary",
            isDisabled: !_v4,
            isLoading: _v3,
            onClick: async () => {
              await _v6(_v4);
            },
            children: _v51
          })]
        })]
      })]
    });
  }], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  _v0.s(["default", 0, ({
    canEditBrandKit: _v0,
    onFileUpload: _v1
  }) => _v0 ? (0, _v1.jsxs)(_v53.Center, {
    flexDirection: "column",
    children: [(0, _v1.jsx)(_v57.default, {
      type: _v56.EmptyInspectorView.LOGOS,
      title: (0, _v9.translate)({
        singular: "Add logos",
        dictionary: {
          es: {
            singular: "Agregar logotipos"
          },
          "de-DE": {
            singular: "Logos hinzufügen"
          },
          "fr-FR": {
            singular: "Ajouter des logos"
          },
          "ja-JP": {
            singular: "ロゴを追加"
          },
          "ko-KR": {
            singular: "로고 추가"
          },
          "pt-BR": {
            singular: "Adicionar logotipos"
          },
          "zh-CN": {
            singular: "添加徽标"
          }
        }
      }),
      text: (0, _v9.translate)({
        singular: "Add logos to your brand kit to use in videos",
        dictionary: {
          es: {
            singular: "Agregue logotipos a su kit de marca para usarlos en videos."
          },
          "de-DE": {
            singular: "Fügen Sie Logos zu Ihrem Markenkit hinzu, um sie im Video zu verwenden."
          },
          "fr-FR": {
            singular: "Ajoutez des logos à votre kit de marque pour les utiliser dans vos vidéos"
          },
          "ja-JP": {
            singular: "ブランドキットにロゴを追加して、動画内で使用しましょう"
          },
          "ko-KR": {
            singular: "브랜드 키트에 로고를 추가하고 동영상에서 사용하세요."
          },
          "pt-BR": {
            singular: "Adicione logotipos ao seu kit de marca para usar em vídeos"
          },
          "zh-CN": {
            singular: "将徽标添加到您的品牌工具包中以在视频内使用"
          }
        }
      })
    }), (0, _v1.jsx)(_v36.Box, {
      marginTop: "md",
      children: (0, _v1.jsx)(_v54.FileInput, {
        variant: "primary",
        label: (0, _v1.jsxs)(_v53.Center, {
          children: [(0, _v1.jsx)(_v8.PlusSmall, {}), (0, _v9.translate)({
            singular: "Upload logo",
            dictionary: {
              es: {
                singular: "Subir un logotipo"
              },
              "de-DE": {
                singular: "Logo hochladen"
              },
              "fr-FR": {
                singular: "Mettre en ligne un logo"
              },
              "ja-JP": {
                singular: "ロゴをアップロード"
              },
              "ko-KR": {
                singular: "로고 업로드"
              },
              "pt-BR": {
                singular: "Carregar logo"
              },
              "zh-CN": {
                singular: "上传徽标"
              }
            }
          })]
        }),
        onChange: _v1,
        accept: _v55.ALLOWED_FILE_TYPES?.map(_v0 => `.${_v0}`).join(", ")
      })
    })]
  }) : (0, _v1.jsx)(_v57.default, {
    type: _v56.EmptyInspectorView.LOGOS,
    title: (0, _v9.translate)({
      singular: "No logos yet",
      dictionary: {
        es: {
          singular: "Sin logotipos aún"
        },
        "de-DE": {
          singular: "Noch keine Logos"
        },
        "fr-FR": {
          singular: "Pas encore de logos"
        },
        "ja-JP": {
          singular: "ロゴはまだありません"
        },
        "ko-KR": {
          singular: "아직 로고 없음"
        },
        "pt-BR": {
          singular: "Ainda não há logotipos"
        },
        "zh-CN": {
          singular: "暂无徽标"
        }
      }
    }),
    text: (0, _v9.translate)({
      singular: "Ask your admin to add logos for your team to use",
      dictionary: {
        es: {
          singular: "Pídale a su administrador que agregue logotipos para que los use su equipo"
        },
        "de-DE": {
          singular: "Bitten Sie Ihren Administratoren, Logos für Ihr Team hinzuzufügen."
        },
        "fr-FR": {
          singular: "Demandez à votre administrateur d'ajouter des logos pour que votre équipe puisse les utiliser"
        },
        "ja-JP": {
          singular: "管理者にチームで使用するロゴを追加するよう依頼してください"
        },
        "ko-KR": {
          singular: "관리자에게 팀에서 사용할 로고를 추가해 달라고 요청하세요."
        },
        "pt-BR": {
          singular: "Peça para o seu administrador adicionar logotipos para sua equipe usar"
        },
        "zh-CN": {
          singular: "请联系管理员添加徽标以供您的团队使用"
        }
      }
    })
  })], 0);
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0);
  _v0.s(["default", 0, ({
    logos: _v0,
    onLogoClick: _v1,
    onDeleteLogo: _v2,
    canEditBrandKit: _v3,
    gridRef: _v4,
    hasApplyBranding: _v5
  }) => {
    let _v6 = (0, _v5.useCallback)((_v0, _v1) => {
      let _v2 = _v0[_v0];
      return (0, _v1.jsx)(_v59.Box, {
        id: _v2.uri,
        gridStyleType: _v25.GridStyleType.LANDSCAPE,
        alignToCenter: !0,
        imageUrl: _v2.url,
        width: _v1,
        testid: "brand-logo-item",
        ...(_v5 && {
          onClick: () => _v1(_v2),
          isShowPlusButton: !0
        }),
        ...(_v3 && _v2 && {
          onDelete: () => _v2(_v2),
          deleteTooltip: (0, _v9.translate)({
            singular: "Delete logo",
            dictionary: {
              es: {
                singular: "Eliminar logotipo"
              },
              "de-DE": {
                singular: "Logo löschen"
              },
              "fr-FR": {
                singular: "Supprimer le logo"
              },
              "ja-JP": {
                singular: "ロゴを削除"
              },
              "ko-KR": {
                singular: "로고 삭제"
              },
              "pt-BR": {
                singular: "Excluir logotipo"
              },
              "zh-CN": {
                singular: "删除徽标"
              }
            }
          })
        })
      }, _v2.uri);
    }, [_v0, _v1, _v2, _v3, _v5]);
    return (0, _v1.jsx)(_v36.Box, {
      height: "100%",
      width: "100%",
      marginTop: "md",
      children: (0, _v1.jsx)(_v58.Grid, {
        ref: _v4,
        itemRenderer: _v6,
        styleType: _v25.GridStyleType.LANDSCAPE,
        items: _v0,
        isLoading: !1
      })
    });
  }], 0), _v0.s(["default", 0, ({
    canEditBrandKit: _v0,
    onCreateNewBrandKit: _v1
  }) => _v0 ? (0, _v1.jsxs)(_v2.Flex, {
    flexDirection: "column",
    padding: "md",
    children: [(0, _v1.jsx)(_v57.default, {
      type: _v56.EmptyInspectorView.LOGOS,
      title: (0, _v9.translate)({
        singular: "Create a brand kit",
        dictionary: {
          es: {
            singular: "Crear un kit de marca"
          },
          "de-DE": {
            singular: "Markenkit erstellen"
          },
          "fr-FR": {
            singular: "Créer un kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキットを作成"
          },
          "ko-KR": {
            singular: "브랜드 키트 생성"
          },
          "pt-BR": {
            singular: "Criar um kit de marca"
          },
          "zh-CN": {
            singular: "新建品牌工具包"
          }
        }
      }),
      text: (0, _v9.translate)({
        singular: "Add logos to your brand kit to use in videos",
        dictionary: {
          es: {
            singular: "Agregue logotipos a su kit de marca para usarlos en videos."
          },
          "de-DE": {
            singular: "Fügen Sie Logos zu Ihrem Markenkit hinzu, um sie im Video zu verwenden."
          },
          "fr-FR": {
            singular: "Ajoutez des logos à votre kit de marque pour les utiliser dans vos vidéos"
          },
          "ja-JP": {
            singular: "ブランドキットにロゴを追加して、動画内で使用しましょう"
          },
          "ko-KR": {
            singular: "브랜드 키트에 로고를 추가하고 동영상에서 사용하세요."
          },
          "pt-BR": {
            singular: "Adicione logotipos ao seu kit de marca para usar em vídeos"
          },
          "zh-CN": {
            singular: "将徽标添加到您的品牌工具包中以在视频内使用"
          }
        }
      })
    }), (0, _v1.jsx)(_v53.Center, {
      children: (0, _v1.jsx)(_v38.Button, {
        size: "sm",
        variant: "primary",
        onClick: _v1,
        mt: "sm",
        children: (0, _v9.translate)({
          singular: "New brand kit",
          dictionary: {
            es: {
              singular: "Nuevo kit de marca"
            },
            "de-DE": {
              singular: "Neues Markenkit"
            },
            "fr-FR": {
              singular: "Nouveau kit de marque"
            },
            "ja-JP": {
              singular: "新しいブランドキット"
            },
            "ko-KR": {
              singular: "새 브랜드 키트"
            },
            "pt-BR": {
              singular: "Novo kit de marca"
            },
            "zh-CN": {
              singular: "新品牌工具包"
            }
          }
        })
      })
    })]
  }) : (0, _v1.jsx)(_v36.Box, {
    padding: "md",
    children: (0, _v1.jsx)(_v57.default, {
      type: _v56.EmptyInspectorView.LOGOS,
      title: (0, _v9.translate)({
        singular: "No brand kit",
        dictionary: {
          es: {
            singular: "No hay kit de su marca"
          },
          "de-DE": {
            singular: "Kein Markenkit"
          },
          "fr-FR": {
            singular: "Aucun kit de marque"
          },
          "ja-JP": {
            singular: "ブランドキットがありません"
          },
          "ko-KR": {
            singular: "브랜드 키트가 없습니다."
          },
          "pt-BR": {
            singular: "Nenhum kit de marca"
          },
          "zh-CN": {
            singular: "无品牌工具包"
          }
        }
      }),
      text: (0, _v9.translate)({
        singular: "Ask your admin to create a brand kit and add logos for your team to use",
        dictionary: {
          es: {
            singular: "Pídale a su administrador que cree un kit de marca y agregue logotipos para que los use su equipo."
          },
          "de-DE": {
            singular: "Bitten Sie Ihren Administratoren, ein Markenkit zu erstellen und Logos für Ihr Team hinzuzufügen."
          },
          "fr-FR": {
            singular: "Demandez à votre administrateur de créer un kit de marque et d'ajouter des logos pour que votre équipe puisse les utiliser."
          },
          "ja-JP": {
            singular: "管理者にブランドキットを作成し、チームで使用するロゴを追加するよう依頼してください。"
          },
          "ko-KR": {
            singular: "관리자에게 브랜드 키트를 만들고 팀에서 사용할 로고를 추가해 달라고 요청하세요"
          },
          "pt-BR": {
            singular: "Peça para o seu administrador criar um kit de marca e adicionar logotipos para sua equipe usar"
          },
          "zh-CN": {
            singular: "请联系管理员创建品牌工具包并添加徽标以供您的团队使用"
          }
        }
      })
    })
  })], 0);
}