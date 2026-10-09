{
  "use strict";

  var _v1,
    _v2,
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
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0);
  let _v33 = 16 / 9;
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  let _v42 = (0, _v6.rem)(20),
    _v43 = (0, _v6.rem)(16),
    _v44 = (0, _v6.rem)(544);
  function _v45({
    file: _v0,
    isSaving: _v1,
    onChange: _v2,
    onCancel: _v3,
    onSave: _v4,
    onCloseComplete: _v5
  }) {
    let [_v6, _v7] = (0, _v5.useState)(null);
    return (0, _v5.useEffect)(() => {
      let _v0 = _v0 ? URL.createObjectURL(_v0) : null;
      return _v7(_v0), () => {
        _v0 && URL.revokeObjectURL(_v0);
      };
    }, [_v0]), (0, _v3.jsxs)(_v36.Modal, {
      isOpen: null !== _v0,
      onClose: _v3,
      onCloseComplete: _v5,
      closeOnEsc: !_v1,
      closeOnOverlayClick: !_v1,
      isCentered: !0,
      size: "lg",
      children: [(0, _v3.jsx)(_v40.ModalOverlay, {}), (0, _v3.jsxs)(_v38.ModalContent, {
        maxWidth: _v44,
        borderRadius: _v42,
        children: [(0, _v3.jsx)(_v37.ModalBody, {
          padding: (0, _v6.rem)(8),
          children: (0, _v3.jsx)(_v34.AspectRatio, {
            ratio: _v33,
            width: "100%",
            borderRadius: _v43,
            overflow: "hidden",
            backgroundColor: "black",
            children: _v6 ? (0, _v3.jsx)(_v18.Image, {
              src: _v6,
              alt: (0, _v25.translate)({
                singular: "Thumbnail preview",
                dictionary: {
                  es: {
                    singular: "Vista previa de la miniatura"
                  },
                  "de-DE": {
                    singular: "Vorschaubild-Vorschau"
                  },
                  "fr-FR": {
                    singular: "Aperçu de la miniature"
                  },
                  "ja-JP": {
                    singular: "サムネイルプレビュー"
                  },
                  "ko-KR": {
                    singular: "썸네일 미리보기"
                  },
                  "pt-BR": {
                    singular: "Visualização da miniatura"
                  },
                  "zh-CN": {
                    singular: "缩略图预览"
                  }
                }
              }),
              width: "100%",
              height: "100%",
              objectFit: "contain"
            }) : (0, _v3.jsx)(_v16.Box, {
              width: "100%",
              height: "100%"
            })
          })
        }), (0, _v3.jsx)(_v39.ModalFooter, {
          paddingTop: (0, _v6.rem)(16),
          paddingBottom: (0, _v6.rem)(24),
          paddingX: (0, _v6.rem)(24),
          children: (0, _v3.jsxs)(_v7.Flex, {
            align: "center",
            gap: (0, _v6.rem)(12),
            width: "100%",
            children: [(0, _v3.jsx)(_v35.Button, {
              variant: "secondary",
              size: "md",
              leftIcon: (0, _v3.jsx)(_v41.Redo, {}),
              onClick: _v2,
              isDisabled: _v1,
              children: (0, _v25.translate)({
                singular: "Change",
                dictionary: {
                  es: {
                    singular: "Cambiar"
                  },
                  "de-DE": {
                    singular: "Ändern"
                  },
                  "fr-FR": {
                    singular: "Modifier"
                  },
                  "ja-JP": {
                    singular: "変更"
                  },
                  "ko-KR": {
                    singular: "변경"
                  },
                  "pt-BR": {
                    singular: "Alterar"
                  },
                  "zh-CN": {
                    singular: "更改"
                  }
                }
              })
            }), (0, _v3.jsxs)(_v7.Flex, {
              flex: "1",
              justify: "flex-end",
              align: "center",
              gap: (0, _v6.rem)(12),
              minWidth: 0,
              children: [(0, _v3.jsx)(_v35.Button, {
                variant: "tertiary",
                size: "md",
                onClick: _v3,
                isDisabled: _v1,
                children: (0, _v25.translate)({
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
              }), (0, _v3.jsx)(_v35.Button, {
                variant: "primary",
                size: "md",
                onClick: _v4,
                isLoading: _v1,
                children: (0, _v25.translate)({
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
          })
        })]
      })]
    });
  }
  var _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  function _v48() {
    return (_v48 = Object.assign.bind()).apply(null, arguments);
  }
  let _v49 = function (_v0) {
      return _v5.createElement("svg", _v48({
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
      }, _v0), _v1 || (_v1 = _v5.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M11.293 10.293a1 1 0 011.414 0l2.829 2.828a1 1 0 11-1.415 1.415L13 13.414V20.5a1 1 0 11-2 0v-7.086l-1.121 1.122a1 1 0 11-1.415-1.415l2.829-2.828z",
        fill: "currentColor"
      })), _v2 || (_v2 = _v5.createElement("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12 4.5A3.5 3.5 0 008.5 8a1 1 0 01-1 1A3.5 3.5 0 004 12.5C4 14.512 5.628 16 7 16h.5a1 1 0 110 2H7c-2.628 0-5-2.541-5-5.5a5.502 5.502 0 014.577-5.423 5.502 5.502 0 0110.846 0A5.501 5.501 0 0122 12.5c0 2.959-2.372 5.5-5 5.5h-.5a1 1 0 110-2h.5c1.372 0 3-1.488 3-3.5A3.5 3.5 0 0016.5 9a1 1 0 01-1-1A3.5 3.5 0 0012 4.5z",
        fill: "currentColor"
      })));
    },
    _v50 = (0, _v6.rem)(8),
    _v51 = (0, _v6.rem)(8);
  function _v52({
    thumbnails: _v0,
    activeUri: _v1,
    isLoading: _v2,
    onSelect: _v3
  }) {
    return _v2 ? (0, _v3.jsx)(_v16.Box, {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: _v51,
      width: "100%",
      children: Array.from({
        length: 4
      }).map((_v0, _v1) => (0, _v3.jsx)(_v34.AspectRatio, {
        ratio: _v33,
        width: "100%",
        children: (0, _v3.jsx)(_v8.BokehSkeleton, {
          width: "100%",
          height: "100%",
          borderRadius: _v50
        })
      }, _v1))
    }) : (0, _v3.jsx)(_v16.Box, {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: _v51,
      width: "100%",
      children: _v0.map(_v0 => {
        let _v1 = !!(_v1 && _v0.uri === _v1);
        return (0, _v3.jsx)(_v16.Box, {
          as: "button",
          type: "button",
          width: "100%",
          padding: 0,
          borderRadius: _v50,
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: _v1 ? "stroke-focus" : "transparent",
          overflow: "hidden",
          cursor: "pointer",
          onClick: () => _v3(_v0),
          children: (0, _v3.jsx)(_v34.AspectRatio, {
            ratio: _v33,
            width: "100%",
            children: (0, _v3.jsx)(_v18.Image, {
              src: _v0.baseLink,
              alt: (0, _v25.translate)({
                singular: "Saved thumbnail",
                dictionary: {
                  es: {
                    singular: "Miniatura guardada"
                  },
                  "de-DE": {
                    singular: "Gespeichertes Vorschaubild"
                  },
                  "fr-FR": {
                    singular: "Miniature enregistrée"
                  },
                  "ja-JP": {
                    singular: "保存済みサムネイル"
                  },
                  "ko-KR": {
                    singular: "저장된 썸네일"
                  },
                  "pt-BR": {
                    singular: "Miniatura salva"
                  },
                  "zh-CN": {
                    singular: "已保存的缩略图"
                  }
                }
              }),
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "black"
            })
          })
        }, _v0.uri);
      })
    });
  }
  let _v53 = (0, _v6.rem)(233),
    _v54 = {
      width: 20,
      height: 20
    };
  function _v55({
    thumbnails: _v0,
    activeUri: _v1,
    isLoading: _v2,
    onUploadClick: _v3,
    onSelectThumbnail: _v4
  }) {
    let _v5 = _v2 || _v0.length > 0;
    return (0, _v3.jsx)(_v47.Portal, {
      children: (0, _v3.jsx)(_v46.PopoverContent, {
        width: _v53,
        maxWidth: _v53,
        maxHeight: (0, _v6.rem)(300),
        padding: (0, _v6.rem)(8),
        borderRadius: (0, _v6.rem)(12),
        border: "none",
        backgroundColor: "fill-surface",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        rootProps: {
          zIndex: "popover"
        },
        _focus: {
          outline: "none"
        },
        _focusVisible: {
          outline: "none"
        },
        children: (0, _v3.jsxs)(_v7.Flex, {
          direction: "column",
          gap: (0, _v6.rem)(16),
          width: "100%",
          flex: "1",
          minHeight: 0,
          children: [(0, _v3.jsx)(_v35.Button, {
            variant: "secondary",
            size: "md",
            width: "100%",
            flexShrink: 0,
            leftIcon: (0, _v3.jsx)(_v49, {
              style: _v54
            }),
            iconSpacing: (0, _v6.rem)(6),
            onClick: _v3,
            children: (0, _v25.translate)({
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
          }), _v5 ? (0, _v3.jsxs)(_v7.Flex, {
            direction: "column",
            gap: (0, _v6.rem)(8),
            width: "100%",
            flex: "1",
            minHeight: 0,
            children: [(0, _v3.jsx)(_v22.Text, {
              variant: "body-sm",
              color: "text-tertiary",
              children: (0, _v25.translate)({
                singular: "Previously used",
                dictionary: {
                  es: {
                    singular: "Usado anteriormente"
                  },
                  "de-DE": {
                    singular: "Zuletzt verwendet"
                  },
                  "fr-FR": {
                    singular: "Utilisé précédemment"
                  },
                  "ja-JP": {
                    singular: "以前に使用した"
                  },
                  "ko-KR": {
                    singular: "이전에 사용된 항목"
                  },
                  "pt-BR": {
                    singular: "Usado anteriormente"
                  },
                  "zh-CN": {
                    singular: "之前使用过"
                  }
                }
              })
            }), (0, _v3.jsx)(_v16.Box, {
              flex: "1",
              minHeight: 0,
              width: "100%",
              overflowY: "auto",
              children: (0, _v3.jsx)(_v52, {
                thumbnails: _v0,
                activeUri: _v1,
                isLoading: _v2,
                onSelect: _v4
              })
            })]
          }) : null]
        })
      })
    });
  }
  let _v56 = (0, _v6.rem)(48),
    _v57 = (0, _v6.rem)(12),
    _v58 = (0, _v6.rem)(8);
  function _v59() {
    let {
        settings: {
          value: _v0
        },
        actions: {
          listSavedThumbnails: _v1,
          createAndActivateThumbnail: _v2,
          activateThumbnail: _v3,
          deactivateThumbnail: _v4
        }
      } = (0, _v4.useManager)(_v11.EventSettingsManager),
      _v5 = (0, _v23.useToast)(),
      {
        trackLiveStreamBasicsChanged: _v6
      } = (0, _v14.useLiveStreamBroadcasterTracking)(),
      _v7 = (0, _v5.useCallback)((_v0, _v1) => {
        _v5({
          status: "error",
          duration: 0,
          title: (0, _v30.getErrorToastTitle)(_v0, _v1, {
            403: (0, _v25.translate)({
              singular: "You don't have permission to change this event's thumbnail.",
              dictionary: {
                es: {
                  singular: "No tiene permiso para cambiar la miniatura de este evento."
                },
                "de-DE": {
                  singular: "Sie haben keine Berechtigung, das Vorschaubild dieses Events zu ändern."
                },
                "fr-FR": {
                  singular: "Vous n'êtes pas autorisé à modifier la vignette de cet événement."
                },
                "ja-JP": {
                  singular: "このイベントのサムネイルを変更する権限がありません。"
                },
                "ko-KR": {
                  singular: "이 이벤트의 썸네일을 변경할 권한이 없습니다."
                },
                "pt-BR": {
                  singular: "Você não tem permissão para alterar a miniatura deste evento."
                },
                "zh-CN": {
                  singular: "您没有权限更改此活动的缩略图。"
                }
              }
            })
          })
        });
      }, [_v5]),
      _v8 = (0, _v5.useRef)(null),
      [_v9, _v10] = (0, _v5.useState)(null),
      _v11 = null !== _v9,
      _v12 = (0, _v5.useRef)(!1),
      [_v13, _v14] = (0, _v5.useState)(!1),
      [_v15, _v16] = (0, _v5.useState)(null),
      [_v17, _v18] = (0, _v5.useState)(null),
      _v19 = (0, _v5.useRef)(void 0),
      _v20 = (0, _v5.useRef)(!1),
      [_v21, _v22] = (0, _v5.useState)(null),
      [_v23, _v24] = (0, _v5.useState)(!0),
      _v25 = (0, _v5.useRef)(0),
      _v26 = (0, _v5.useCallback)(async () => {
        let _v0 = ++_v25.current;
        _v24(!0);
        try {
          let _v0 = await _v1();
          _v0 === _v25.current && _v22(_v0);
        } catch {} finally {
          _v0 === _v25.current && _v24(!1);
        }
      }, [_v1]);
    (0, _v5.useEffect)(() => {
      let _v0 = ++_v25.current,
        _v1 = !1;
      return (async () => {
        try {
          let _v0 = await _v1();
          _v1 || _v0 !== _v25.current || _v22(_v0);
        } catch {} finally {
          _v1 || _v0 !== _v25.current || _v24(!1);
        }
      })(), () => {
        _v1 = !0;
      };
    }, [_v1]);
    let _v27 = (0, _v5.useCallback)(() => {
        _v8.current?.click();
      }, []),
      _v28 = (0, _v5.useRef)(!1),
      _v29 = (0, _v5.useCallback)(() => {
        _v21 && 0 === _v21.length ? (_v28.current = !1, _v14(!1), _v27()) : (_v28.current = !0, _v14(!0));
      }, [_v21, _v27]),
      _v30 = (0, _v5.useCallback)(_v0 => {
        let _v1 = _v0.target.files?.[0];
        if (_v0.target.value = "", _v1) {
          if (_v1.size > _v29.graphicsConfig.UPLOADS.THUMBNAIL_FILE_UPLOAD_LIMIT) return void _v5({
            status: "error",
            duration: 0,
            title: (0, _v25.translate)({
              singular: "Your file can’t be uploaded because it exceeds the size limit of {FILE_SIZE_LIMIT}MB",
              replacements: {
                FILE_SIZE_LIMIT: _v29.graphicsConfig.UPLOADS.THUMBNAIL_FILE_UPLOAD_LIMIT_MB
              },
              dictionary: {
                es: {
                  singular: "Tu archivo no se puede subir porque excede el límite de {FILE_SIZE_LIMIT}MB"
                },
                "de-DE": {
                  singular: "Ihre Datei kann nicht hochgeladen werden, da sie die Größengrenze von {FILE_SIZE_LIMIT}MB überschreitet"
                },
                "fr-FR": {
                  singular: "Votre fichier ne peut pas être téléchargé car il dépasse la taille maximale autorisée de {FILE_SIZE_LIMIT}MB"
                },
                "ja-JP": {
                  singular: "ファイルをアップロードできません。{FILE_SIZE_LIMIT}MBのサイズ制限を超えています"
                },
                "ko-KR": {
                  singular: "{FILE_SIZE_LIMIT}MB의 크기 제한을 초과하여 파일을 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Seu arquivo não pode ser enviado porque excede o limite de tamanho de {FILE_SIZE_LIMIT}MB"
                },
                "zh-CN": {
                  singular: "您的文件无法上传，因为其超过了 {FILE_SIZE_LIMIT}MB 的大小限制"
                }
              }
            })
          });
          _v14(!1), _v16(_v1);
        }
      }, [_v5]),
      _v31 = (0, _v5.useCallback)(async _v0 => {
        if (!_v12.current && !(0 >= (0, _v31.parseThumbnailIdFromUrl)(_v0.uri))) {
          _v12.current = !0, _v14(!1), _v10("activate");
          try {
            await _v3(_v0), _v6({
              liveStreamBasicsField: "thumbnail"
            }), _v18(null), await _v26();
          } catch (_v0) {
            _v7(_v0, (0, _v25.translate)({
              singular: "Couldn't update the thumbnail. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo actualizar la miniatura. Vuelva a intentarlo."
                },
                "de-DE": {
                  singular: "Das Vorschaubild konnte nicht aktualisiert werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible de mettre à jour la vignette. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "サムネイルを更新できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "썸네일을 업데이트할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível atualizar a miniatura. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法更新缩略图。请重试。"
                }
              }
            }));
          } finally {
            _v12.current = !1, _v10(null);
          }
        }
      }, [_v3, _v26, _v7, _v6]),
      _v32 = (0, _v5.useRef)(!1),
      _v33 = (0, _v5.useCallback)(() => {
        _v27();
      }, [_v27]),
      _v34 = (0, _v5.useCallback)(() => {
        _v32.current = _v28.current, _v16(null);
      }, []),
      _v35 = (0, _v5.useCallback)(() => {
        _v32.current && (_v32.current = !1, _v14(!0));
      }, []),
      _v36 = (0, _v5.useCallback)(async () => {
        if (_v15 && !_v12.current) {
          _v12.current = !0, _v10("upload");
          try {
            let _v0 = await _v2(_v15);
            _v6({
              liveStreamBasicsField: "thumbnail"
            }), _v20.current = !0, _v18(_v15), _v16(null), _v22(_v0 => [{
              uri: _v0.uri,
              baseLink: _v0.baseLink,
              sizes: [],
              active: !0
            }, ...(_v0 ?? []).filter(_v0 => _v0.uri !== _v0.uri)]), await _v26();
          } catch (_v0) {
            _v7(_v0, (0, _v25.translate)({
              singular: "Couldn't save the thumbnail. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo guardar la miniatura. Vuelva a intentarlo."
                },
                "de-DE": {
                  singular: "Das Vorschaubild konnte nicht gespeichert werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible d'enregistrer la vignette. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "サムネイルを保存できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "썸네일을 저장할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível salvar a miniatura. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法保存缩略图。请重试。"
                }
              }
            }));
          } finally {
            _v12.current = !1, _v10(null);
          }
        }
      }, [_v15, _v2, _v26, _v7, _v6]),
      _v37 = (0, _v5.useCallback)(async () => {
        if (_v12.current) return;
        let _v0 = (0, _v31.parseThumbnailIdFromUrl)(_v0?.pictures?.uri);
        if (!(_v0 <= 0)) {
          _v12.current = !0, _v10("remove");
          try {
            await _v4(_v0), _v6({
              liveStreamBasicsField: "thumbnail"
            }), _v18(null), await _v26();
          } catch (_v0) {
            _v7(_v0, (0, _v25.translate)({
              singular: "Couldn't remove the thumbnail. Please try again.",
              dictionary: {
                es: {
                  singular: "No se pudo eliminar la miniatura. Vuelva a intentarlo."
                },
                "de-DE": {
                  singular: "Das Vorschaubild konnte nicht entfernt werden. Bitte versuchen Sie es erneut."
                },
                "fr-FR": {
                  singular: "Impossible de supprimer la vignette. Veuillez réessayer."
                },
                "ja-JP": {
                  singular: "サムネイルを削除できませんでした。もう一度お試しください。"
                },
                "ko-KR": {
                  singular: "썸네일을 삭제할 수 없습니다. 다시 시도해 주세요."
                },
                "pt-BR": {
                  singular: "Não foi possível remover a miniatura. Por favor, tente novamente."
                },
                "zh-CN": {
                  singular: "无法删除缩略图。请重试。"
                }
              }
            }));
          } finally {
            _v12.current = !1, _v10(null);
          }
        }
      }, [_v0?.pictures?.uri, _v4, _v26, _v7, _v6]),
      _v38 = _v0?.pictures?.active ? _v0.pictures.uri : void 0;
    if ((0, _v5.useEffect)(() => {
      _v20.current ? (_v19.current = _v38, _v20.current = !1) : _v38 !== _v19.current && (_v19.current = _v38, _v18(null));
    }, [_v38, _v17]), !_v0) return (0, _v3.jsx)(_v8.BokehSkeleton, {
      borderRadius: (0, _v6.rem)(4),
      height: (0, _v6.rem)(92),
      marginTop: (0, _v6.rem)(16)
    });
    let _v39 = _v0?.pictures,
      _v40 = !!(_v39?.active && _v39.baseLink);
    return (0, _v3.jsxs)(_v7.Flex, {
      direction: "column",
      width: "100%",
      marginTop: (0, _v6.rem)(16),
      children: [(0, _v3.jsx)(_v19.Paragraph, {
        size: "md",
        color: "text-primary",
        fontWeight: "bold",
        marginBottom: (0, _v6.rem)(8),
        children: (0, _v25.translate)({
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
        })
      }), (0, _v3.jsxs)(_v20.Popover, {
        isOpen: _v13 && !_v15,
        onClose: () => _v14(!1),
        placement: "left-start",
        flip: !0,
        preventOverflow: !0,
        gutter: 8,
        isLazy: !0,
        children: [(0, _v3.jsx)(_v21.PopoverAnchor, {
          children: _v40 && _v39 ? (0, _v3.jsxs)(_v7.Flex, {
            align: "center",
            gap: (0, _v6.rem)(16),
            paddingY: (0, _v6.rem)(8),
            paddingLeft: (0, _v6.rem)(8),
            paddingRight: (0, _v6.rem)(16),
            width: "100%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "input-stroke",
            borderRadius: _v57,
            backgroundColor: "fill-surface",
            children: [(0, _v3.jsx)(_v18.Image, {
              src: _v39.baseLink,
              alt: (0, _v25.translate)({
                singular: "Event thumbnail",
                dictionary: {
                  es: {
                    singular: "Miniatura del evento"
                  },
                  "de-DE": {
                    singular: "Event-Vorschaubild"
                  },
                  "fr-FR": {
                    singular: "Vignette de l’événement"
                  },
                  "ja-JP": {
                    singular: "イベントのサムネイル"
                  },
                  "ko-KR": {
                    singular: "이벤트 썸네일"
                  },
                  "pt-BR": {
                    singular: "Miniatura do Evento"
                  },
                  "zh-CN": {
                    singular: "活动缩略图"
                  }
                }
              }),
              boxSize: _v56,
              objectFit: "cover",
              borderRadius: _v58,
              backgroundColor: "background",
              flexShrink: 0
            }), (0, _v3.jsx)(_v7.Flex, {
              direction: "column",
              gap: (0, _v6.rem)(2),
              flex: "1",
              minWidth: 0,
              children: _v17 ? (0, _v3.jsxs)(_v3.Fragment, {
                children: [(0, _v3.jsx)(_v22.Text, {
                  variant: "body-md",
                  fontWeight: "medium",
                  color: "text-primary",
                  noOfLines: 1,
                  children: _v17.name
                }), (0, _v3.jsx)(_v22.Text, {
                  variant: "body-sm",
                  color: "text-secondary",
                  children: (0, _v32.bytesToSize)(_v17.size)
                })]
              }) : null
            }), (0, _v3.jsxs)(_v7.Flex, {
              align: "center",
              gap: (0, _v6.rem)(8),
              children: [(0, _v3.jsx)(_v17.IconButton, {
                "aria-label": (0, _v25.translate)({
                  singular: "Reselect thumbnail",
                  dictionary: {
                    es: {
                      singular: "Volver a seleccionar miniatura"
                    },
                    "de-DE": {
                      singular: "Vorschaubild neu auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner à nouveau la vignette"
                    },
                    "ja-JP": {
                      singular: "サムネイルを再選択"
                    },
                    "ko-KR": {
                      singular: "썸네일 다시 선택"
                    },
                    "pt-BR": {
                      singular: "Selecionar miniatura novamente"
                    },
                    "zh-CN": {
                      singular: "重新选择缩略图"
                    }
                  }
                }),
                icon: (0, _v3.jsx)(_v27.default, {}),
                variant: "tertiary",
                size: "sm",
                borderRadius: (0, _v6.rem)(8),
                isDisabled: _v11,
                onClick: _v29
              }), (0, _v3.jsx)(_v17.IconButton, {
                "aria-label": (0, _v25.translate)({
                  singular: "Remove thumbnail",
                  dictionary: {
                    es: {
                      singular: "Eliminar miniatura"
                    },
                    "de-DE": {
                      singular: "Vorschaubild entfernen"
                    },
                    "fr-FR": {
                      singular: "Supprimer la vignette"
                    },
                    "ja-JP": {
                      singular: "サムネイルを削除"
                    },
                    "ko-KR": {
                      singular: "썸네일 제거"
                    },
                    "pt-BR": {
                      singular: "Remover miniatura"
                    },
                    "zh-CN": {
                      singular: "移除缩略图"
                    }
                  }
                }),
                icon: (0, _v3.jsx)(_v26.default, {}),
                variant: "tertiary",
                size: "sm",
                borderRadius: (0, _v6.rem)(8),
                isLoading: "remove" === _v9,
                isDisabled: _v11,
                onClick: _v37
              })]
            })]
          }) : (0, _v3.jsxs)(_v16.Box, {
            as: "button",
            type: "button",
            display: "flex",
            alignItems: "center",
            gap: (0, _v6.rem)(16),
            paddingY: (0, _v6.rem)(8),
            paddingLeft: (0, _v6.rem)(8),
            paddingRight: (0, _v6.rem)(16),
            width: "100%",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: "input-stroke",
            borderRadius: _v57,
            backgroundColor: "fill-surface",
            cursor: _v11 ? "not-allowed" : "pointer",
            opacity: _v11 ? .6 : 1,
            textAlign: "left",
            disabled: _v11,
            onClick: _v29,
            children: [(0, _v3.jsxs)(_v7.Flex, {
              position: "relative",
              align: "center",
              justify: "center",
              boxSize: _v56,
              borderRadius: _v58,
              overflow: "hidden",
              flexShrink: 0,
              children: [(0, _v3.jsx)(_v28.default, {
                width: "100%",
                height: "100%",
                preserveAspectRatio: "xMidYMid meet",
                style: {
                  position: "absolute",
                  inset: 0
                }
              }), (0, _v3.jsx)(_v24.Image, {
                color: "text-secondary",
                style: {
                  position: "relative"
                }
              })]
            }), (0, _v3.jsxs)(_v7.Flex, {
              direction: "column",
              gap: (0, _v6.rem)(2),
              children: [(0, _v3.jsx)(_v22.Text, {
                variant: "body-md",
                fontWeight: "medium",
                color: "text-primary",
                children: (0, _v25.translate)({
                  singular: "Select thumbnail",
                  dictionary: {
                    es: {
                      singular: "Seleccionar miniatura"
                    },
                    "de-DE": {
                      singular: "Vorschaubild auswählen"
                    },
                    "fr-FR": {
                      singular: "Sélectionner la vignette"
                    },
                    "ja-JP": {
                      singular: "サムネイルを選択"
                    },
                    "ko-KR": {
                      singular: "썸네일 선택"
                    },
                    "pt-BR": {
                      singular: "Selecionar miniatura"
                    },
                    "zh-CN": {
                      singular: "选择缩略图"
                    }
                  }
                })
              }), (0, _v3.jsx)(_v22.Text, {
                variant: "body-sm",
                color: "text-secondary",
                children: (0, _v25.translate)({
                  singular: "Max size {FILE_SIZE_LIMIT}MB",
                  replacements: {
                    FILE_SIZE_LIMIT: _v29.graphicsConfig.UPLOADS.THUMBNAIL_FILE_UPLOAD_LIMIT_MB
                  },
                  dictionary: {
                    es: {
                      singular: "Tamaño máximo {FILE_SIZE_LIMIT}MB"
                    },
                    "de-DE": {
                      singular: "Maximale Dateigröße {FILE_SIZE_LIMIT}MB"
                    },
                    "fr-FR": {
                      singular: "Taille maximale {FILE_SIZE_LIMIT}MB"
                    },
                    "ja-JP": {
                      singular: "最大サイズ {FILE_SIZE_LIMIT}MB"
                    },
                    "ko-KR": {
                      singular: "최대 파일 크기 {FILE_SIZE_LIMIT}MB"
                    },
                    "pt-BR": {
                      singular: "Tamanho máximo {FILE_SIZE_LIMIT}MB"
                    },
                    "zh-CN": {
                      singular: "最大文件大小为 {FILE_SIZE_LIMIT}MB"
                    }
                  }
                })
              })]
            })]
          })
        }), (0, _v3.jsx)(_v55, {
          thumbnails: _v21 ?? [],
          activeUri: _v40 ? _v39?.uri : void 0,
          isLoading: _v23,
          onUploadClick: _v27,
          onSelectThumbnail: _v31
        })]
      }), (0, _v3.jsx)("input", {
        ref: _v8,
        type: "file",
        accept: "image/png,image/x-png,image/jpeg,.jpg,.jpeg,.png",
        onChange: _v30,
        hidden: !0
      }), (0, _v3.jsx)(_v45, {
        file: _v15,
        isSaving: "upload" === _v9,
        onChange: _v33,
        onCancel: _v34,
        onSave: _v36,
        onCloseComplete: _v35
      })]
    });
  }
  var _v60 = _v0.i(0);
  _v0.s(["BasicSettings", 0, function ({
    id: _v0 = (0, _v60.createLiveDomName)("basic-settings"),
    eventSettingsContext: {
      settings: {
        value: _v1
      },
      actions: {
        updateLiveEventSettings: _v2
      }
    } = (0, _v4.useManager)(_v11.EventSettingsManager)
  }) {
    let {
        trackLiveStreamBasicsChanged: _v3
      } = (0, _v14.useLiveStreamBroadcasterTracking)(),
      _v4 = (0, _v13.useOrionSettingsFields)(["enable_live_event_basics_thumbnail"]),
      [_v5, _v6] = (0, _v5.useState)(_v1?.title ?? null),
      [_v7, _v8] = (0, _v5.useState)(_v1?.streamDescription ?? null),
      [_v9, _v10] = (0, _v5.useState)(!1),
      [_v11, _v12] = (0, _v5.useState)(!1),
      [_v13, _v14] = (0, _v5.useState)(!1),
      [_v15, _v16] = (0, _v5.useState)(!1),
      [_v17, _v18] = (0, _v5.useState)(0),
      [_v19, _v20] = (0, _v5.useState)(0);
    (0, _v5.useEffect)(() => {
      _v1?.title && _v6(_v1?.title);
    }, [_v1?.title]), (0, _v5.useEffect)(() => {
      null !== _v5 && _v5 === _v1?.title && _v9 && _v10(!1), null === _v7 && _v1?.streamDescription && _v8(_v1.streamDescription), null !== _v7 && _v7 === _v1?.streamDescription && _v11 && _v12(!1);
    }, [_v1?.title, _v1?.streamDescription, _v5, _v6, _v7, _v8, _v9, _v11, _v10, _v12]);
    let _v21 = (0, _v5.useCallback)(_v0 => {
        _v6(_v0);
      }, [_v6]),
      _v22 = (0, _v5.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v23 = (0, _v5.useCallback)(() => {
        _v1?.title && (_v6(_v1.title), _v18(_v0 => _v0 + 1));
      }, [_v1?.title, _v6]),
      _v24 = (0, _v5.useCallback)(() => {
        _v8(_v1?.streamDescription ?? ""), _v20(_v0 => _v0 + 1);
      }, [_v1?.streamDescription, _v8]),
      _v25 = (0, _v5.useCallback)(() => {
        let _v0 = _v5 ? _v5.trim() : "";
        _v0.length > 0 && !_v9 && (_v2({
          title: _v0,
          ...(_v1?.automaticallyTitleStream ? {} : {
            streamTitle: _v0
          })
        }), _v10(!0), (0, _v12.trackAddEventTitle)(), _v3({
          liveStreamBasicsField: "title"
        })), _v6(_v0);
      }, [_v5, _v2, _v9, _v10, _v6, _v3, _v1?.automaticallyTitleStream]),
      _v26 = (0, _v5.useCallback)(() => {
        let _v0 = _v7?.trim() ?? "";
        _v11 || (_v2({
          streamDescription: _v0
        }), _v12(!0), (0, _v12.trackAddEventDescription)(), _v3({
          liveStreamBasicsField: "description"
        }), _v8(_v0));
      }, [_v7, _v2, _v11, _v12, _v3]),
      _v27 = _v1?.title !== _v5,
      _v28 = _v1?.streamDescription !== _v7 && ("" !== _v7 || _v1?.streamDescription !== null);
    return (0, _v3.jsxs)(_v7.Flex, {
      id: _v0,
      direction: "column",
      width: "100%",
      children: [_v1 ? (0, _v3.jsx)(_v7.Flex, {
        position: "relative",
        direction: "column",
        width: "100%",
        marginBottom: (0, _v6.rem)(16),
        children: (0, _v3.jsx)(_v10.EventTitle, {
          title: _v5,
          required: !0,
          onChange: _v21,
          onSetTitleInvalid: _v14,
          children: _v27 ? (0, _v3.jsx)(_v15.BasicSettingsControls, {
            isLoading: _v9,
            isDisabled: !_v5 || _v13,
            onCancelClick: _v23,
            onSaveClick: _v25
          }) : null
        }, _v17)
      }) : (0, _v3.jsx)(_v8.BokehSkeleton, {
        height: (0, _v6.rem)(91),
        borderRadius: (0, _v6.rem)(4),
        marginBottom: (0, _v6.rem)(16)
      }), _v1 ? (0, _v3.jsx)(_v7.Flex, {
        direction: "column",
        width: "100%",
        children: (0, _v3.jsx)(_v9.EventDescription, {
          fieldHeight: (0, _v6.rem)(80),
          description: _v7,
          onChange: _v22,
          onSetDescriptionInvalid: _v16,
          children: _v28 ? (0, _v3.jsx)(_v15.BasicSettingsControls, {
            onCancelClick: _v24,
            onSaveClick: _v26,
            isLoading: _v11,
            isDisabled: _v15
          }) : null
        }, _v19)
      }) : (0, _v3.jsx)(_v8.BokehSkeleton, {
        borderRadius: (0, _v6.rem)(4),
        height: (0, _v6.rem)(104)
      }), _v4.enable_live_event_basics_thumbnail ? (0, _v3.jsx)(_v59, {}) : null]
    });
  }], 0);
  var _v61 = _v0.i(0),
    _v62 = _v0.i(0);
  _v0.s(["DictionaryIntroLiveEventsAnnouncement", 0, function ({
    children: _v0
  }) {
    let _v1 = (0, _v62.useSessionOwnerId)();
    return (0, _v3.jsx)(_v61.AccountDictionaryAnnouncement, {
      surface: "live_events",
      ownerUserId: _v1 > 0 ? _v1 : null,
      placement: "left-start",
      title: (0, _v25.translate)({
        singular: "Create your custom dictionary",
        dictionary: {
          es: {
            singular: "Crea tu diccionario personalizado"
          },
          "de-DE": {
            singular: "Erstellen Sie Ihr benutzerdefiniertes Wörterbuch"
          },
          "fr-FR": {
            singular: "Créez votre dictionnaire personnalisé"
          },
          "ja-JP": {
            singular: "カスタム辞書を作成する"
          },
          "ko-KR": {
            singular: "맞춤 사전 만들기"
          },
          "pt-BR": {
            singular: "Crie seu dicionário personalizado"
          },
          "zh-CN": {
            singular: "创建您的自定义词典"
          }
        }
      }),
      body: (0, _v25.translate)({
        singular: "Define your brand names, product terms, and acronyms once, and they'll be applied consistently in live captions.",
        dictionary: {
          es: {
            singular: "Define los nombres de marca, los términos de producto y los acrónimos una vez, y se aplicarán de forma coherente en los subtítulos en vivo."
          },
          "de-DE": {
            singular: "Definieren Sie Ihre Markennamen, Produktbegriffe und Akronyme einmal, und sie werden einheitlich in Live-Untertiteln angewendet."
          },
          "fr-FR": {
            singular: "Définissez une fois vos noms de marque, termes de produits et acronymes, et ils seront appliqués de manière cohérente dans les sous-titres en direct."
          },
          "ja-JP": {
            singular: "ブランド名、製品用語、略語を一度定義すると、ライブキャプションに一貫して適用されます。"
          },
          "ko-KR": {
            singular: "브랜드 이름, 제품 용어 및 약어를 한 번 정의하면 라이브 자막에 일관되게 적용됩니다."
          },
          "pt-BR": {
            singular: "Defina os nomes da sua marca, termos de produto e siglas uma vez, e eles serão aplicados de forma consistente nas legendas ao vivo."
          },
          "zh-CN": {
            singular: "只需定义一次品牌名称、产品术语和缩写，系统就会在实时字幕中一致地应用它们。"
          }
        }
      }),
      acknowledgeLabel: (0, _v25.translate)({
        singular: "Set up dictionary",
        dictionary: {
          es: {
            singular: "Configurar diccionario"
          },
          "de-DE": {
            singular: "Wörterbuch einrichten"
          },
          "fr-FR": {
            singular: "Configurer le dictionnaire"
          },
          "ja-JP": {
            singular: "辞書を設定する"
          },
          "ko-KR": {
            singular: "사전 설정"
          },
          "pt-BR": {
            singular: "Configurar dicionário"
          },
          "zh-CN": {
            singular: "设置词典"
          }
        }
      }),
      onNavigate: _v0 => {
        window.open(_v0, "_blank", "noopener,noreferrer");
      },
      anchorProps: {
        width: "100%"
      },
      children: _v0
    });
  }], 0);
  var _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  let _v69 = [{
    key: "chatMaxMessageLength",
    label: _v68.translations.chatMaxMessageLength,
    min: 1,
    max: 512,
    fallback: 512
  }, {
    key: "chatRateLimitMaxMessages",
    label: _v68.translations.chatMessagesPerWindow,
    min: 1,
    max: 5,
    fallback: 5
  }, {
    key: "chatRateLimitWindowSeconds",
    label: _v68.translations.chatRateLimitWindowSeconds,
    min: 10,
    max: 0,
    fallback: 10
  }, {
    key: "chatRateLimitCooldownSeconds",
    label: _v68.translations.chatCooldownSeconds,
    min: 30,
    max: 0,
    fallback: 30
  }];
  _v0.s(["EngagementSettings", 0, function ({
    id: _v0 = (0, _v67.createDomName)("engagement-settings"),
    className: _v1 = (0, _v67.createDomName)("engagement-settings")
  }) {
    var _v2;
    let _v3,
      {
        settings: {
          value: _v4
        },
        actions: {
          updateLiveEventSettings: _v5
        }
      } = (0, _v4.useManager)(_v11.EventSettingsManager),
      [_v6, _v7] = (0, _v5.useState)({}),
      _v8 = {
        ...(_v2 = _v4?.interactionToolsSettings, _v3 = {}, _v69.forEach(({
          key: _v0,
          fallback: _v1
        }) => {
          _v3[_v0] = String(_v2?.[_v0] ?? _v1);
        }), _v3),
        ..._v6
      };
    return _v4 ? (0, _v3.jsx)(_v7.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: (0, _v6.rem)(16),
      width: "100%",
      children: _v69.map(_v0 => {
        let _v1 = Number(_v8[_v0.key]),
          _v2 = !Number.isFinite(_v1) || _v1 < _v0.min || _v1 > _v0.max;
        return (0, _v3.jsxs)(_v63.FormControl, {
          isInvalid: _v2,
          children: [(0, _v3.jsx)(_v65.FormLabel, {
            color: "text-primary",
            fontWeight: "bold",
            role: "heading",
            children: (0, _v3.jsx)(_v19.Paragraph, {
              size: "md",
              color: "text-primary",
              fontWeight: "bold",
              children: _v0.label
            })
          }), (0, _v3.jsx)(_v66.Input, {
            type: "number",
            inputMode: "numeric",
            size: "sm",
            backgroundColor: "surface",
            min: _v0.min,
            max: _v0.max,
            value: _v8[_v0.key],
            onChange: _v0 => {
              var _v1;
              return _v1 = _v0.key, void _v7(_v0 => ({
                ..._v0,
                [_v1]: _v0.target.value
              }));
            },
            onBlur: () => {
              var _v0, _v1;
              let _v2, _v3;
              return _v3 = Number.isFinite(_v2 = Number(_v8[_v0.key])) ? (_v0 = Math.round(_v2), _v1 = _v0.min, Math.min(_v0.max, Math.max(_v1, _v0))) : _v0.fallback, void (_v7(_v0 => ({
                ..._v0,
                [_v0.key]: String(_v3)
              })), _v3 !== (_v4?.interactionToolsSettings?.[_v0.key] ?? _v0.fallback) && _v5({
                interactionToolsSettings: {
                  [_v0.key]: _v3
                }
              }, ["interactionToolsSettings"]));
            }
          }), _v2 ? (0, _v3.jsx)(_v64.FormErrorMessage, {
            children: (0, _v25.translate)({
              singular: "Value must be between {MIN} and {MAX}",
              replacements: {
                MIN: () => String(_v0.min),
                MAX: () => String(_v0.max)
              },
              dictionary: {
                es: {
                  singular: "El valor debe estar entre {MIN} y {MAX}"
                },
                "de-DE": {
                  singular: "Wert muss zwischen {MIN} und {MAX} liegen"
                },
                "fr-FR": {
                  singular: "La valeur doit être comprise entre {MIN} et {MAX}"
                },
                "ja-JP": {
                  singular: "値は {MIN} と {MAX} の間である必要があります"
                },
                "ko-KR": {
                  singular: "값은 {MIN}에서 {MAX} 사이여야 합니다"
                },
                "pt-BR": {
                  singular: "O valor deve estar entre {MIN} e {MAX}"
                },
                "zh-CN": {
                  singular: "值必须在 {MIN} 与 {MAX} 之间"
                }
              }
            })
          }) : null]
        }, _v0.key);
      })
    }) : (0, _v3.jsx)(_v8.BokehSkeleton, {
      borderRadius: (0, _v6.rem)(4),
      height: (0, _v6.rem)(180)
    });
  }], 0);
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  _v0.s(["HostAudioSettings", 0, function ({
    id: _v0 = (0, _v67.createDomName)("host-audio-settings"),
    className: _v1 = (0, _v67.createDomName)("host-audio-settings")
  }) {
    let {
        level: _v2,
        isMuted: _v3,
        hasTrack: _v4
      } = function (_v0 = 15) {
        let {
            audio: _v1
          } = (0, _v4.useManager)(_v72.LocalMediaManager),
          {
            track: _v2,
            isMuted: _v3
          } = _v1,
          [_v4, _v5] = (0, _v5.useState)(0),
          _v6 = (0, _v5.useRef)(0),
          _v7 = (0, _v5.useRef)(_v0);
        (0, _v5.useEffect)(() => {
          _v7.current = _v0;
        }, [_v0]);
        let _v8 = _v3 || !_v2 ? null : _v2.getMediaStreamTrack() ?? null,
          _v9 = _v8?.id ?? null;
        (0, _v5.useEffect)(() => {
          if (!_v8) return;
          let _v0 = function (_v0, _v1) {
            if (!_v73.browserConfig.FEATURE.CAN_USE_AUDIO_CONTEXT) return {
              stop: () => void 0
            };
            let _v2 = new AudioContext(),
              _v3 = _v2.createAnalyser();
            _v3.fftSize = 128;
            let _v4 = _v2.createMediaStreamSource(new MediaStream([_v0]));
            _v4.connect(_v3), _v2.resume();
            let _v5 = new Uint8Array(new ArrayBuffer(_v3.fftSize)),
              _v6 = 0,
              _v7 = null,
              _v8 = null;
            return _v8 = requestAnimationFrame(function _v0(_v1) {
              _v3.getByteTimeDomainData(_v5);
              let _v2 = null === _v7 ? 0 : _v1 - _v7;
              _v7 = _v1, _v1(_v6 = function (_v0, _v1, _v2) {
                if (_v2 <= 0) return _v0;
                let _v3 = 1 - Math.exp(-_v2 / (_v1 > _v0 ? 50 : 200));
                return _v0 + (_v1 - _v0) * _v3;
              }(_v6, function (_v0) {
                let {
                  length: _v1
                } = _v0;
                if (0 === _v1) return 0;
                let _v2 = 0;
                for (let _v0 = 0; _v0 < _v1; _v0 += 1) _v2 += Math.abs(_v0[_v0] - 128);
                return _v2 / _v1 / 128;
              }(_v5), _v2)), _v8 = requestAnimationFrame(_v0);
            }), {
              stop() {
                null !== _v8 && (cancelAnimationFrame(_v8), _v8 = null);
                try {
                  _v4.disconnect(_v3);
                } catch {}
                "closed" !== _v2.state && _v2.close();
              }
            };
          }(_v8, _v0 => {
            let _v1 = Date.now();
            if (_v1 - _v6.current < 0 / _v7.current) return;
            _v6.current = _v1;
            let _v2 = Math.round(Math.min(100, Math.max(0, (0 * _v0) ** .8)));
            _v5(_v0 => _v2 !== _v0 ? _v2 : _v0);
          });
          return () => _v0.stop();
        }, [_v9]);
        let _v10 = !!_v2;
        return {
          level: _v10 && !_v3 ? _v4 : 0,
          isMuted: _v3,
          hasTrack: _v10
        };
      }(),
      _v5 = _v4 && !_v3,
      _v6 = _v5 ? Math.round(_v2 / 100 * 16) : 0,
      _v7 = (0, _v5.useMemo)(() => Array.from({
        length: 16
      }, (_v0, _v1) => (0, _v3.jsx)(_v16.Box, {
        flex: "1",
        height: (0, _v6.rem)(8),
        borderRadius: (0, _v6.rem)(2),
        background: _v1 >= _v6 ? "fill-component" : _v1 < 8 ? "status-positive-primary" : _v1 < 12 ? "status-caution-primary" : "status-destructive-primary",
        transition: "background 0.08s linear"
      }, `segment-${_v1}`)), [_v6]);
    return (0, _v3.jsxs)(_v7.Flex, {
      id: _v0,
      className: _v1,
      align: "center",
      gap: (0, _v6.rem)(12),
      paddingY: (0, _v6.rem)(8),
      children: [_v5 ? (0, _v3.jsx)(_v71.MicOn, {
        boxSize: 20
      }) : (0, _v3.jsx)(_v70.MicOff, {
        boxSize: 20,
        color: "status-destructive-primary"
      }), (0, _v3.jsx)(_v22.Text, {
        variant: "body-md",
        children: _v68.translations.host
      }), (0, _v3.jsx)(_v7.Flex, {
        align: "center",
        gap: (0, _v6.rem)(2),
        flex: "1",
        role: "meter",
        "aria-label": _v68.translations.microphoneLevel,
        "aria-valuenow": _v2,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        children: _v7
      })]
    });
  }], 0);
  var _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  let _v83 = {
      showLatestArchivedClip: "show_latest_archived_clip",
      eventSchedule: "event_schedule",
      schedule: "schedule"
    },
    _v84 = 0;
  _v0.s(["PlayerSettings", 0, function () {
    let {
        settings: {
          value: _v0
        },
        actions: {
          updateLiveEventSettings: _v1,
          forcedUpdate: _v2
        }
      } = (0, _v4.useManager)(_v11.EventSettingsManager),
      {
        sessionInfo: {
          value: _v3,
          isLoading: _v4
        }
      } = (0, _v4.useManager)(_v77.ComposerSessionManager),
      {
        scheduledStartTime: _v5
      } = (0, _v4.useManager)(_v78.ComposerSessionStatusManager),
      {
        trackLiveStreamDestinationActionClicked: _v6
      } = (0, _v14.useLiveStreamBroadcasterTracking)(),
      {
        trackSingleEventCustomizationPlayerSettingToggled: _v7
      } = (0, _v82.useSingleEventCustomizationTracking)(),
      [_v8, _v9] = (0, _v5.useState)({}),
      _v10 = (0, _v23.useToast)(),
      _v11 = _v3?.appearanceLink?.uri,
      _v12 = !!_v11,
      _v13 = (0, _v81.getThumbnail)(_v3?.thumbnail.sizes),
      _v14 = _v0?.embed,
      _v15 = _v0?.status === _v80.ENTITY_STATUS.ENDED,
      _v16 = [{
        key: "showLatestArchivedClip",
        switchId: "player-settings-show-latest-recording",
        label: (0, _v25.translate)({
          singular: "Show latest recording",
          dictionary: {
            es: {
              singular: "Mostrar la última grabación"
            },
            "de-DE": {
              singular: "Neueste Aufzeichnung anzeigen"
            },
            "fr-FR": {
              singular: "Afficher le dernier enregistrement"
            },
            "ja-JP": {
              singular: "最新の録画を表示"
            },
            "ko-KR": {
              singular: "최신 녹화 표시"
            },
            "pt-BR": {
              singular: "Mostrar gravação mais recente"
            },
            "zh-CN": {
              singular: "显示最近录制"
            }
          }
        }),
        tip: (0, _v25.translate)({
          singular: "Play the most recent recording while viewers wait for the event to start.",
          dictionary: {
            es: {
              singular: "Reproducir la grabación más reciente mientras los espectadores esperan a que comience el evento."
            },
            "de-DE": {
              singular: "Die neueste Aufnahme abspielen, während Zuschauer auf den Beginn der Veranstaltung warten."
            },
            "fr-FR": {
              singular: "Lire l'enregistrement le plus récent pendant que les spectateurs attendent le début de l'événement."
            },
            "ja-JP": {
              singular: "視聴者がイベントの開始を待っている間、最新の録画を再生します。"
            },
            "ko-KR": {
              singular: "시청자가 이벤트 시작을 기다리는 동안 가장 최근 녹화를 재생합니다."
            },
            "pt-BR": {
              singular: "Reproduzir a gravação mais recente enquanto os espectadores aguardam o início do evento."
            },
            "zh-CN": {
              singular: "在观众等待活动开始时播放最近一次录制视频。"
            }
          }
        })
      }, {
        key: "eventSchedule",
        switchId: "player-settings-show-event-date-time",
        label: (0, _v25.translate)({
          singular: "Show event date & time",
          dictionary: {
            es: {
              singular: "Mostrar fecha y hora del evento"
            },
            "de-DE": {
              singular: "Datum & Uhrzeit des Events anzeigen"
            },
            "fr-FR": {
              singular: "Afficher la date & l'heure de l'événement"
            },
            "ja-JP": {
              singular: "イベントの日時を表示"
            },
            "ko-KR": {
              singular: "이벤트 날짜 및 시간 표시"
            },
            "pt-BR": {
              singular: "Mostrar data & hora do evento"
            },
            "zh-CN": {
              singular: "显示活动日期和时间"
            }
          }
        }),
        tip: (0, _v25.translate)({
          singular: "Display this event's start date and time before it goes live.",
          dictionary: {
            es: {
              singular: "Mostrar la fecha y la hora de inicio de este evento antes de que se transmita en vivo."
            },
            "de-DE": {
              singular: "Startdatum und -uhrzeit dieser Veranstaltung anzeigen, bevor sie live geht."
            },
            "fr-FR": {
              singular: "Afficher la date et l'heure de début de cet événement avant sa mise en ligne."
            },
            "ja-JP": {
              singular: "このイベントがライブになる前に開始日時を表示します。"
            },
            "ko-KR": {
              singular: "이 이벤트가 라이브로 시작되기 전에 시작 일시를 표시합니다."
            },
            "pt-BR": {
              singular: "Exibir a data e a hora de início deste evento antes de ele ir ao vivo."
            },
            "zh-CN": {
              singular: "在活动开播前显示该活动的开始日期和时间。"
            }
          }
        })
      }, {
        key: "schedule",
        switchId: "player-settings-show-recurring-schedule",
        label: (0, _v25.translate)({
          singular: "Show recurring schedule",
          dictionary: {
            es: {
              singular: "Mostrar programación recurrente"
            },
            "de-DE": {
              singular: "Wiederkehrenden Zeitplan anzeigen"
            },
            "fr-FR": {
              singular: "Afficher le planning récurrent"
            },
            "ja-JP": {
              singular: "繰り返しスケジュールを表示"
            },
            "ko-KR": {
              singular: "반복 일정 표시"
            },
            "pt-BR": {
              singular: "Mostrar programação recorrente"
            },
            "zh-CN": {
              singular: "显示重复日程"
            }
          }
        }),
        tip: (0, _v25.translate)({
          singular: "Display the repeat schedule for recurring events.",
          dictionary: {
            es: {
              singular: "Mostrar el horario de repetición para eventos recurrentes."
            },
            "de-DE": {
              singular: "Wiederholungsplan für wiederkehrende Veranstaltungen anzeigen."
            },
            "fr-FR": {
              singular: "Afficher le planning des répétitions pour les événements récurrents."
            },
            "ja-JP": {
              singular: "定期イベントの繰り返しスケジュールを表示します。"
            },
            "ko-KR": {
              singular: "정기 이벤트의 반복 일정을 표시합니다."
            },
            "pt-BR": {
              singular: "Exibir a programação de repetição para eventos recorrentes."
            },
            "zh-CN": {
              singular: "显示定期活动的重复日程。"
            }
          }
        })
      }];
    return (0, _v3.jsxs)(_v7.Flex, {
      direction: "column",
      gap: "lg",
      width: "100%",
      children: [(0, _v3.jsxs)(_v7.Flex, {
        direction: "column",
        gap: 3,
        children: [(0, _v3.jsxs)(_v7.Flex, {
          direction: "column",
          gap: "sm",
          children: [(0, _v3.jsx)(_v22.Text, {
            variant: "heading-xs",
            color: "text-tertiary",
            children: _v68.translations.preview
          }), (0, _v3.jsx)(_v7.Flex, {
            justifyContent: "center",
            alignItems: "center",
            borderRadius: (0, _v6.rem)(8),
            border: "1px solid",
            borderColor: "stroke",
            height: (0, _v6.rem)(167),
            width: "100%",
            background: `url(${_v13?.link}) center/cover no-repeat content-box`,
            backgroundColor: "surface",
            overflow: "hidden",
            children: _v4 ? null : (0, _v3.jsx)(_v7.Flex, {
              direction: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.64)",
              children: null != _v5 && "" !== _v5 ? (0, _v3.jsxs)(_v3.Fragment, {
                children: [(0, _v3.jsx)(_v19.Paragraph, {
                  color: "white",
                  size: "md",
                  children: _v68.translations.thisEventIsScheduledFor
                }), (0, _v3.jsx)(_v74.Header, {
                  color: "white",
                  size: "md",
                  children: new Date(_v5).toLocaleString((0, _v25.getCurrentLocale)(), {
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric"
                  })
                })]
              }) : (0, _v3.jsx)(_v19.Paragraph, {
                color: "white",
                size: "md",
                children: _v68.translations.thisEventHasNotStartedYet
              })
            })
          })]
        }), (0, _v3.jsx)(_v35.Button, {
          as: "a",
          href: _v11 ?? void 0,
          isDisabled: !_v12,
          size: "sm",
          target: "_blank",
          variant: "secondary",
          width: "100%",
          onClick: () => {
            (0, _v79.trackOpenCustomizePlayer)(), _v6({
              liveStreamDestination: "vimeo",
              liveStreamDestinationAction: "customize"
            });
          },
          children: (0, _v25.translate)({
            singular: "Customize appearance",
            dictionary: {
              es: {
                singular: "Personalizar la apariencia"
              },
              "de-DE": {
                singular: "Erscheinungsbild anpassen"
              },
              "fr-FR": {
                singular: "Personnaliser l'apparence"
              },
              "ja-JP": {
                singular: "外観をカスタマイズ"
              },
              "ko-KR": {
                singular: "모양 사용자 지정"
              },
              "pt-BR": {
                singular: "Personalizar aparência"
              },
              "zh-CN": {
                singular: "自定义外观"
              }
            }
          })
        })]
      }), (0, _v3.jsxs)(_v7.Flex, {
        direction: "column",
        gap: "xs",
        children: [(0, _v3.jsx)(_v22.Text, {
          variant: "heading-xs",
          color: "text-tertiary",
          children: (0, _v25.translate)({
            singular: "Preferences",
            dictionary: {
              es: {
                singular: "Preferencias"
              },
              "de-DE": {
                singular: "Einstellungen"
              },
              "fr-FR": {
                singular: "Préférences"
              },
              "ja-JP": {
                singular: "設定"
              },
              "ko-KR": {
                singular: "환경설정"
              },
              "pt-BR": {
                singular: "Preferências"
              },
              "zh-CN": {
                singular: "偏好设置"
              }
            }
          })
        }), _v14 ? _v16.map(({
          key: _v0,
          switchId: _v1,
          label: _v2,
          tip: _v3
        }) => (0, _v3.jsx)(_v63.FormControl, {
          children: (0, _v3.jsxs)(_v65.FormLabel, {
            alignItems: "center",
            cursor: _v15 ? "not-allowed" : "pointer",
            display: "flex",
            htmlFor: _v1,
            justifyContent: "space-between",
            margin: "0",
            paddingY: "xs",
            children: [(0, _v3.jsxs)(_v7.Flex, {
              align: "center",
              gap: "xs",
              children: [(0, _v3.jsx)(_v22.Text, {
                variant: "heading-xs",
                children: _v2
              }), (0, _v3.jsx)(_v76.CircleTip, {
                as: "span",
                label: _v3,
                placement: "left"
              })]
            }), (0, _v3.jsx)(_v75.Switch, {
              id: _v1,
              isChecked: _v8[_v0]?.value ?? !!_v14[_v0],
              isDisabled: _v15,
              onChange: _v0 => {
                var _v1;
                let _v2, _v3;
                return _v1 = _v0.currentTarget.checked, _v2 = ++_v84, _v3 = () => _v9(_v0 => _v0[_v0]?.requestId === _v2 ? {
                  ..._v0,
                  [_v0]: void 0
                } : _v0), void (_v9(_v0 => ({
                  ..._v0,
                  [_v0]: {
                    value: _v1,
                    requestId: _v2
                  }
                })), _v1({
                  embed: {
                    [_v0]: _v1
                  }
                }, _v11.EventSettingsManager.EVENT_PLAYER_FIELDS).then(() => {
                  _v3(), _v7({
                    playerSetting: _v83[_v0],
                    newStatus: _v1
                  }), _v10({
                    status: "success",
                    duration: 0,
                    title: _v1 ? (0, _v25.translate)({
                      singular: "{feature} enabled",
                      replacements: {
                        feature: _v2
                      },
                      dictionary: {
                        es: {
                          singular: "{feature} activado"
                        },
                        "de-DE": {
                          singular: "{feature} aktiviert"
                        },
                        "fr-FR": {
                          singular: "{feature} activé"
                        },
                        "ja-JP": {
                          singular: "{feature}が有効です"
                        },
                        "ko-KR": {
                          singular: "{feature} 활성화됨"
                        },
                        "pt-BR": {
                          singular: "{feature} ativado"
                        },
                        "zh-CN": {
                          singular: "{feature} 已启用"
                        }
                      }
                    }) : (0, _v25.translate)({
                      singular: "{feature} disabled",
                      replacements: {
                        feature: _v2
                      },
                      dictionary: {
                        es: {
                          singular: "{feature} desactivado"
                        },
                        "de-DE": {
                          singular: "{feature} deaktiviert"
                        },
                        "fr-FR": {
                          singular: "{feature} désactivé"
                        },
                        "ja-JP": {
                          singular: "{feature}が無効です"
                        },
                        "ko-KR": {
                          singular: "{feature} 비활성화됨"
                        },
                        "pt-BR": {
                          singular: "{feature} desativado"
                        },
                        "zh-CN": {
                          singular: "{feature} 已禁用"
                        }
                      }
                    })
                  });
                }).catch(_v0 => (_v10({
                  status: "error",
                  duration: 0,
                  title: (0, _v30.getErrorToastTitle)(_v0, (0, _v25.translate)({
                    singular: "Something went wrong updating your player settings. Try again.",
                    dictionary: {
                      es: {
                        singular: "Algo salió mal al actualizar la configuración de su reproductor. Vuelva a intentarlo."
                      },
                      "de-DE": {
                        singular: "Beim Aktualisieren Ihrer Player-Einstellungen ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
                      },
                      "fr-FR": {
                        singular: "Une erreur est survenue lors de la mise à jour de vos paramètres du lecteur. Veuillez réessayer."
                      },
                      "ja-JP": {
                        singular: "プレイヤー設定の更新中に問題が発生しました。もう一度お試しください。"
                      },
                      "ko-KR": {
                        singular: "플레이어 설정을 업데이트하는 중에 문제가 발생했습니다. 다시 시도해 주세요."
                      },
                      "pt-BR": {
                        singular: "Algo deu errado ao atualizar as configurações do seu player. Tente novamente."
                      },
                      "zh-CN": {
                        singular: "更新播放器设置时出现问题。请重试。"
                      }
                    }
                  }))
                }), _v2(_v11.EventSettingsManager.EVENT_PLAYER_FIELDS).finally(_v3))));
              }
            })]
          })
        }, _v0)) : _v16.map(({
          key: _v0
        }) => (0, _v3.jsx)(_v8.BokehSkeleton, {
          height: (0, _v6.rem)(28),
          width: "100%",
          borderRadius: "sm"
        }, _v0))]
      })]
    });
  }], 0);
  var _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  function _v92({
    contentRating: _v0,
    isDisabled: _v1 = !1,
    onChange: _v2
  }) {
    let _v3 = (0, _v5.useMemo)(() => {
        let _v0 = _v91.GeneralContentRatingVariants.Unrated;
        return _v0.some(_v0 => _v91.MatureContentRatingArray.includes(_v0)) && (_v0 = _v91.GeneralContentRatingVariants.Mature), _v0.includes(_v91.GeneralContentRatingVariants.Safe) && (_v0 = _v91.GeneralContentRatingVariants.Safe), _v91.ContentRatingOptions.find(_v0 => _v0.value === _v0);
      }, [_v0]),
      _v4 = (0, _v5.useMemo)(() => _v0.includes(_v91.EventContentRating.Advertisement), [_v0]),
      _v5 = (0, _v5.useCallback)(_v0 => {
        let _v1 = _v4 ? [_v91.EventContentRating.Advertisement] : [];
        _v0 === _v91.GeneralContentRatingVariants.Safe ? _v1.push(_v91.EventContentRating.Safe) : _v0 === _v91.GeneralContentRatingVariants.Mature ? _v1 = [..._v1, ..._v91.MatureContentRatingArray] : _v1.push(_v91.EventContentRating.Unrated), _v2(_v1);
      }, [_v4, _v2]),
      _v6 = (0, _v5.useCallback)(_v0 => {
        let _v1 = [..._v0],
          _v2 = _v1.indexOf(_v0);
        _v2 > -1 ? _v1.splice(_v2, 1) : _v1.push(_v0), _v1.length === +!!_v4 && _v1.push(_v91.EventContentRating.Safe), _v2(_v1);
      }, [_v0, _v4, _v2]),
      _v7 = (0, _v5.useCallback)(() => {
        let _v0 = [..._v0],
          _v1 = _v0.indexOf(_v91.EventContentRating.Advertisement);
        _v1 > -1 ? _v0.splice(_v1, 1) : _v0.push(_v91.EventContentRating.Advertisement), _v2(_v0);
      }, [_v0, _v2]);
    return (0, _v3.jsxs)(_v7.Flex, {
      position: "relative",
      direction: "column",
      "data-testid": "event-content-rating",
      children: [(0, _v3.jsx)(_v74.Header, {
        size: "xs",
        marginBottom: (0, _v6.rem)(8),
        color: "text-primary",
        children: (0, _v25.translate)({
          singular: "Select content rating",
          dictionary: {
            es: {
              singular: "Selecciona la clasificación de contenido"
            },
            "de-DE": {
              singular: "Inhaltseinstufung wählen"
            },
            "fr-FR": {
              singular: "Sélectionnez la classification du contenu"
            },
            "ja-JP": {
              singular: "コンテンツ評価を選択"
            },
            "ko-KR": {
              singular: "콘텐츠 등급 선택"
            },
            "pt-BR": {
              singular: "Selecione a classificação de conteúdo"
            },
            "zh-CN": {
              singular: "选择内容分级"
            }
          }
        })
      }), (0, _v3.jsx)(_v19.Paragraph, {
        size: "sm",
        color: "text-secondary",
        marginBottom: (0, _v6.rem)(12),
        children: (0, _v25.translate)({
          singular: "Content ratings are required. They help keep Vimeo safe and ensure your intended audience can view your video. {A}Learn more{/A}",
          replacements: {
            A: _v0 => (0, _v3.jsx)(_v22.Text, {
              variant: "body-xl",
              color: "blue.500",
              cursor: "pointer",
              as: "a",
              textDecoration: "underline",
              fontSize: "text-xs",
              target: "_blank",
              href: "https://vimeo.zendesk.com/hc/en-us/articles/224818087-Content-ratings",
              children: _v0
            }, "rating-help-message")
          },
          dictionary: {
            es: {
              singular: "Las clasificaciones de contenido son obligatorias. Ayudan a mantener Vimeo seguro y a garantizar que tu audiencia prevista pueda ver tu video. {A}Más información{/A}"
            },
            "de-DE": {
              singular: "Inhaltseinstufungen sind erforderlich. Sie tragen dazu bei, Vimeo sicher zu halten und sicherzustellen, dass Ihre Zielgruppe Ihr Video sehen kann. {A}Mehr erfahren{/A}"
            },
            "fr-FR": {
              singular: "Les classifications de contenu sont obligatoires. Elles aident à maintenir Vimeo sûr et à garantir que votre public ciblé puisse visionner votre vidéo. {A}En savoir plus{/A}"
            },
            "ja-JP": {
              singular: "コンテンツ評価は必須です。Vimeoを安全に保ち、意図した視聴者が動画を視聴できるようにします。{A}詳細はこちら{/A}"
            },
            "ko-KR": {
              singular: "콘텐츠 등급이 필요합니다. 이는 Vimeo를 안전하게 유지하고 의도한 대상이 비디오를 볼 수 있도록 합니다. {A}자세히 알아보기{/A}"
            },
            "pt-BR": {
              singular: "As classificações de conteúdo são obrigatórias. Elas ajudam a manter o Vimeo seguro e garantem que seu público-alvo possa assistir ao seu vídeo. {A}Saiba mais{/A}"
            },
            "zh-CN": {
              singular: "需要内容分级。它们有助于保持 Vimeo 的安全并确保您的目标观众可以观看您的视频。{A}了解更多{/A}"
            }
          }
        })
      }), (0, _v3.jsx)(_v90.Select, {
        onValueChange: _v0 => _v5(_v0.value[0]),
        items: _v91.ContentRatingOptions.filter(_v0 => _v0.visible),
        placeholder: (0, _v25.translate)({
          singular: "Select rating",
          dictionary: {
            es: {
              singular: "Seleccionar clasificación"
            },
            "de-DE": {
              singular: "Bewertung auswählen"
            },
            "fr-FR": {
              singular: "Sélectionner la classification"
            },
            "ja-JP": {
              singular: "レーティングを選択"
            },
            "ko-KR": {
              singular: "등급 선택"
            },
            "pt-BR": {
              singular: "Selecionar classificação"
            },
            "zh-CN": {
              singular: "选择分级"
            }
          }
        }),
        size: "sm",
        variant: "withCheck",
        value: [_v3.value]
      }), _v3.value === _v91.GeneralContentRatingVariants.Mature ? (0, _v3.jsxs)(_v7.Flex, {
        direction: "column",
        paddingTop: (0, _v6.rem)(18),
        paddingBottom: (0, _v6.rem)(20),
        gap: (0, _v6.rem)(16),
        borderBottom: "1px solid",
        borderColor: "stroke",
        children: [(0, _v3.jsx)(_v19.Paragraph, {
          size: "sm",
          color: "text-secondary",
          background: "transparent",
          children: (0, _v25.translate)({
            singular: "Select one or more of the following:",
            dictionary: {
              es: {
                singular: "Selecciona una o más de las siguientes:"
              },
              "de-DE": {
                singular: "Wählen Sie eine oder mehrere der folgenden Optionen:"
              },
              "fr-FR": {
                singular: "Sélectionnez une ou plusieurs des options suivantes :"
              },
              "ja-JP": {
                singular: "以下のいずれか1つ以上を選択してください："
              },
              "ko-KR": {
                singular: "다음 항목 중 하나 이상을 선택하세요:"
              },
              "pt-BR": {
                singular: "Selecione uma ou mais das seguintes opções:"
              },
              "zh-CN": {
                singular: "选择以下一项或多项："
              }
            }
          })
        }), _v91.MatureContentRatingOptions.map(_v0 => (0, _v3.jsx)(_v89.Checkbox, {
          isDisabled: _v1,
          onChange: () => _v6(_v0.value),
          isChecked: _v0.includes(_v0.value),
          name: _v0.value,
          id: `${_v0.value}-checkbox`,
          value: _v0.value,
          children: (0, _v3.jsx)(_v22.Text, {
            variant: "body-xl",
            fontSize: (0, _v6.rem)(14),
            color: "text-primary",
            children: _v0.label
          })
        }, `${_v0.value}-checkbox`))]
      }) : null, (0, _v3.jsxs)(_v7.Flex, {
        direction: "column",
        children: [(0, _v3.jsx)(_v89.Checkbox, {
          isDisabled: _v1,
          name: "ads",
          margin: `${(0, _v6.rem)(8)} 0`,
          value: _v91.EventContentRating.Advertisement,
          isChecked: _v4,
          onChange: _v7,
          children: (0, _v3.jsx)(_v22.Text, {
            variant: "body-xl",
            fontSize: (0, _v6.rem)(12),
            color: "text-primary",
            children: (0, _v25.translate)({
              singular: "This video contains an advertisement",
              dictionary: {
                es: {
                  singular: "Este video contiene un anuncio"
                },
                "de-DE": {
                  singular: "Dieses Video enthält eine Werbung"
                },
                "fr-FR": {
                  singular: "Cette vidéo contient une publicité"
                },
                "ja-JP": {
                  singular: "この動画には広告が含まれています"
                },
                "ko-KR": {
                  singular: "이 비디오는 광고를 포함하고 있습니다"
                },
                "pt-BR": {
                  singular: "Este vídeo contém um anúncio"
                },
                "zh-CN": {
                  singular: "此视频包含广告"
                }
              }
            })
          })
        }), _v4 ? null : (0, _v3.jsx)(_v86.Alert, {
          children: (0, _v3.jsx)(_v87.AlertDescription, {
            children: (0, _v25.translate)({
              singular: "If this video contains advertisements, you are required to indicate so",
              dictionary: {
                es: {
                  singular: "Si este video contiene anuncios, debes indicarlo"
                },
                "de-DE": {
                  singular: "Wenn dieses Video Werbung enthält, müssen Sie dies angeben"
                },
                "fr-FR": {
                  singular: "Si cette vidéo contient des publicités, vous devez l'indiquer"
                },
                "ja-JP": {
                  singular: "この動画に広告が含まれる場合は、その旨を明示する必要があります"
                },
                "ko-KR": {
                  singular: "이 비디오에 광고가 포함된 경우 이를 표시해야 합니다"
                },
                "pt-BR": {
                  singular: "Se este vídeo contém anúncios, você é obrigado a indicá‑lo."
                },
                "zh-CN": {
                  singular: "如果此视频包含广告，您需要予以说明"
                }
              }
            })
          })
        })]
      })]
    });
  }
  var _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  let _v99 = {
      EMBED_PRIVACY_NOWHERE: "private",
      EMBED_PRIVACY_ANYWHERE: "public",
      EMBED_PRIVACY_SPECIFIC_DOMAINS: "whitelist"
    },
    _v100 = {
      [_v99.EMBED_PRIVACY_NOWHERE]: (0, _v25.translate)({
        singular: "Nowhere",
        dictionary: {
          es: {
            singular: "En ningún sitio"
          },
          "de-DE": {
            singular: "Nirgendwo"
          },
          "fr-FR": {
            singular: "Nulle part"
          },
          "ja-JP": {
            singular: "いっさい許可しない"
          },
          "ko-KR": {
            singular: "불가"
          },
          "pt-BR": {
            singular: "Em nenhum lugar"
          },
          "zh-CN": {
            singular: "无处"
          }
        }
      }),
      [_v99.EMBED_PRIVACY_ANYWHERE]: (0, _v25.translate)({
        singular: "Anywhere",
        dictionary: {
          es: {
            singular: "En cualquier sitio"
          },
          "de-DE": {
            singular: "Überall"
          },
          "fr-FR": {
            singular: "N'importe où"
          },
          "ja-JP": {
            singular: "すべてのサイト"
          },
          "ko-KR": {
            singular: "어디에나"
          },
          "pt-BR": {
            singular: "Em qualquer lugar"
          },
          "zh-CN": {
            singular: "任何位置"
          }
        }
      }),
      [_v99.EMBED_PRIVACY_SPECIFIC_DOMAINS]: (0, _v25.translate)({
        singular: "Specific domains",
        dictionary: {
          es: {
            singular: "En dominios específicos"
          },
          "de-DE": {
            singular: "Bestimmte Domains"
          },
          "fr-FR": {
            singular: "Domaines spécifiques"
          },
          "ja-JP": {
            singular: "特定のドメイン"
          },
          "ko-KR": {
            singular: "특정 도메인"
          },
          "pt-BR": {
            singular: "Domínios específicos"
          },
          "zh-CN": {
            singular: "特定域"
          }
        }
      })
    };
  var _v101 = _v0.i(0);
  function _v102({
    embedPrivacy: _v0,
    domains: _v1,
    showNotice: _v2 = !1,
    isVertical: _v3 = !0,
    isDisabled: _v4,
    isSelectDisabled: _v5 = !1,
    disabledTip: _v6,
    onChange: _v7
  }) {
    let [_v8, _v9] = (0, _v5.useState)(""),
      [_v10, _v11] = (0, _v5.useState)(!1),
      _v12 = (0, _v5.useRef)(null),
      _v13 = !!(!_v4 && _v8),
      _v14 = (0, _v5.useCallback)(_v0 => {
        _v7(_v0, _v1), _v11(!1);
      }, [_v1, _v7]),
      _v15 = (0, _v5.useCallback)(() => {
        -1 === _v1.indexOf(_v8) && (_v7(_v0, [..._v1, _v8]), _v9(""));
      }, [_v8, _v1, _v0, _v7]),
      _v16 = (0, _v5.useCallback)(_v0 => {
        let _v1 = [..._v1],
          _v2 = _v1.indexOf(_v0);
        _v1.splice(_v2, 1), _v7(_v0, _v1);
      }, [_v1, _v0, _v7]),
      _v17 = (0, _v5.useMemo)(() => Object.values(_v99).map(_v0 => ({
        label: _v100[_v0],
        value: _v0
      })), []);
    return (0, _v96.useOutsideClick)({
      enabled: _v10,
      ref: _v12,
      handler: () => {
        _v10 && _v11(!1);
      }
    }), (0, _v3.jsx)(_v7.Flex, {
      direction: "column",
      gap: (0, _v6.rem)(8),
      width: "100%",
      "data-testid": "event-embed-privacy",
      children: (0, _v3.jsxs)(_v7.Flex, {
        direction: _v3 ? "column" : "row",
        alignItems: "baseline",
        gap: (0, _v6.rem)(4),
        children: [(0, _v3.jsxs)(_v7.Flex, {
          marginBottom: _v3 ? (0, _v6.rem)(8) : 0,
          width: _v3 ? "100%" : (0, _v6.rem)(120),
          flexShrink: 0,
          alignItems: "center",
          gap: (0, _v6.rem)(4),
          children: [(0, _v3.jsx)(_v74.Header, {
            size: "xs",
            color: "text-primary",
            letterSpacing: "-0.03em",
            children: (0, _v25.translate)({
              singular: "Embed privacy",
              dictionary: {
                es: {
                  singular: "Privacidad de las inserciones"
                },
                "de-DE": {
                  singular: "Datenschutz einbetten"
                },
                "fr-FR": {
                  singular: "Confidentialité de l'intégration"
                },
                "ja-JP": {
                  singular: "プライバシー設定を埋め込む"
                },
                "ko-KR": {
                  singular: "임베드 프라이버시"
                },
                "pt-BR": {
                  singular: "Incorporar privacidade"
                },
                "zh-CN": {
                  singular: "嵌入式隐私"
                }
              }
            })
          }), (0, _v3.jsx)(_v101.BokehTooltip, {
            label: _v5 && _v6 ? _v6 : (0, _v25.translate)({
              singular: "Where can the video be embedded?",
              dictionary: {
                es: {
                  singular: "¿Dónde se puede embeber el video?"
                },
                "de-DE": {
                  singular: "Wo kann das Video eingebettet werden?"
                },
                "fr-FR": {
                  singular: "Où la vidéo peut‑elle être intégrée ?"
                },
                "ja-JP": {
                  singular: "動画はどこに埋め込めますか？"
                },
                "ko-KR": {
                  singular: "비디오는 어디에 임베드할 수 있나요?"
                },
                "pt-BR": {
                  singular: "Onde o vídeo pode ser incorporado?"
                },
                "zh-CN": {
                  singular: "视频可以嵌入到哪里？"
                }
              }
            }),
            maxWidth: (0, _v6.rem)(300),
            shouldWrapChildren: !1,
            children: (0, _v3.jsx)(_v7.Flex, {
              height: (0, _v6.rem)(16),
              width: (0, _v6.rem)(16),
              cursor: "pointer",
              children: (0, _v3.jsx)(_v97.InfoCircle, {
                boxSize: (0, _v6.rem)(16),
                color: "text-tertiary"
              })
            })
          })]
        }), (0, _v3.jsxs)(_v16.Box, {
          width: "100%",
          children: [(0, _v3.jsx)(_v16.Box, {
            position: "relative",
            children: (0, _v3.jsx)(_v90.Select, {
              onValueChange: _v0 => _v14(_v0.value[0]),
              items: _v17,
              withPortal: !1,
              placeholder: (0, _v25.translate)({
                singular: "Select rating",
                dictionary: {
                  es: {
                    singular: "Seleccionar clasificación"
                  },
                  "de-DE": {
                    singular: "Bewertung auswählen"
                  },
                  "fr-FR": {
                    singular: "Sélectionner la classification"
                  },
                  "ja-JP": {
                    singular: "レーティングを選択"
                  },
                  "ko-KR": {
                    singular: "등급 선택"
                  },
                  "pt-BR": {
                    singular: "Selecionar classificação"
                  },
                  "zh-CN": {
                    singular: "选择分级"
                  }
                }
              }),
              size: "sm",
              variant: "withCheck",
              value: [_v0],
              disabled: _v5,
              children: ({
                label: _v0
              }) => (0, _v3.jsx)(_v90.SelectItem, {
                display: "flex",
                width: "100%",
                children: (0, _v3.jsx)(_v101.BokehTooltip, {
                  shouldWrapChildren: !1,
                  placement: "bottom",
                  maxWidth: (0, _v6.rem)(300),
                  label: _v6,
                  isDisabled: !_v4 || _v4 && !_v6,
                  children: (0, _v3.jsx)(_v90.SelectItemText, {
                    children: _v0
                  })
                })
              })
            })
          }), _v0 === _v99.EMBED_PRIVACY_SPECIFIC_DOMAINS ? (0, _v3.jsxs)(_v7.Flex, {
            position: "relative",
            direction: "column",
            width: "100%",
            marginTop: (0, _v6.rem)(8),
            children: [(0, _v3.jsxs)(_v94.InputGroup, {
              size: "sm",
              children: [(0, _v3.jsx)(_v66.Input, {
                onChange: _v0 => {
                  _v9(_v0.target.value);
                },
                value: _v8,
                isDisabled: !!_v4,
                placeholder: "domain.com",
                onKeyDown: _v0 => {
                  "Enter" === _v0.key && _v15();
                }
              }), (0, _v3.jsx)(_v95.InputRightElement, {
                cursor: _v13 ? "pointer" : "not-allowed",
                onClick: _v13 ? _v15 : void 0,
                children: (0, _v3.jsx)(_v98.PlusCircle, {
                  color: _v13 ? "text-primary" : "text-secondary"
                })
              })]
            }), (0, _v3.jsx)(_v7.Flex, {
              flexWrap: "wrap",
              gap: (0, _v6.rem)(4),
              marginTop: (0, _v6.rem)(8),
              children: _v1.map((_v0, _v1) => (0, _v3.jsxs)(_v93.Tag, {
                size: "sm",
                children: [(0, _v3.jsx)(_v93.TagLabel, {
                  fontSize: (0, _v6.rem)(14),
                  children: _v0
                }), !_v5 && (0, _v3.jsx)(_v93.TagCloseButton, {
                  onClick: () => _v16(_v0)
                })]
              }, `${_v0}-idx:${_v1}`))
            })]
          }, `domains-${_v1.length}`) : null, _v2 ? (0, _v3.jsx)(_v86.Alert, {
            marginTop: (0, _v6.rem)(8),
            children: (0, _v3.jsx)(_v87.AlertDescription, {
              children: (0, _v25.translate)({
                singular: "When link privacy is set to Private, the embedded event won’t be visible to everyone",
                dictionary: {
                  es: {
                    singular: "Cuando la privacidad del enlace está establecida en Privado, el evento embebido no será visible para todos"
                  },
                  "de-DE": {
                    singular: "Wenn die Link‑Privatsphäre auf Privat gesetzt ist, ist die eingebettete Veranstaltung nicht für alle sichtbar"
                  },
                  "fr-FR": {
                    singular: "Lorsque la confidentialité du lien est définie sur Privé, l'événement intégré ne sera pas visible de tous"
                  },
                  "ja-JP": {
                    singular: "リンクのプライバシーが非公開に設定されている場合、埋め込みイベントは誰も見られません"
                  },
                  "ko-KR": {
                    singular: "링크 개인정보가 비공개로 설정되면 임베드된 이벤트가 모두에게 보이지 않습니다"
                  },
                  "pt-BR": {
                    singular: "Quando a privacidade do link estiver definida como Privado, o evento incorporado não ficará visível para todos"
                  },
                  "zh-CN": {
                    singular: "当链接隐私设置为私密时，嵌入的活动不会对所有人可见"
                  }
                }
              })
            })
          }) : null]
        })]
      })
    });
  }
  var _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  function _v109({
    privacy: _v0,
    allowedPrivacies: _v1,
    password: _v2,
    disabledTip: _v3,
    isDisabled: _v4,
    onChange: _v5
  }) {
    let [_v6, _v7] = (0, _v5.useState)(_v0),
      [_v8, _v9] = (0, _v5.useState)(_v2 || "");
    (0, _v5.useEffect)(() => _v7(_v0), [_v0]), (0, _v5.useEffect)(() => _v9(_v2 || ""), [_v2]);
    let _v10 = (0, _v5.useCallback)(_v0 => {
        _v7(_v0), _v5(_v0, _v8);
      }, [_v8, _v5]),
      _v11 = (0, _v5.useCallback)(_v0 => {
        _v9(_v0), _v5(_v6, _v0);
      }, [_v6, _v5]);
    return (0, _v3.jsxs)(_v7.Flex, {
      direction: "column",
      gap: (0, _v6.rem)(8),
      children: [(0, _v3.jsx)(_v108.EventPrivacy, {
        selectedPrivacy: _v6,
        allowedPrivacies: _v1,
        isDisabled: _v4,
        disabledTip: _v3,
        onPrivacySelect: _v10
      }, `view-${_v6}`), _v6 === _v80.EStreamPrivacy.PASSWORD && (0, _v3.jsx)(_v107.EventPassword, {
        isDisabled: _v4,
        onChange: _v11,
        password: _v8
      }, `pass-${_v2}`)]
    });
  }
  var _v110 = _v0.i(0),
    _v111 = _v0.i(0);
  let _v112 = ["link", "embed.chatEmbedSource", "embed.embedProperties.sourceUrl", "streamPrivacy.unlistedHash"];
  _v0.s(["PrivacySettings", 0, function ({
    id: _v0 = (0, _v60.createLiveDomName)("privacy-settings"),
    eventSettingsContext: {
      settings: _v1,
      embedWhitelist: _v2,
      actions: {
        updateLiveEventSettings: _v3,
        updateEmbedWhitelist: _v4
      }
    } = (0, _v4.useManager)(_v11.EventSettingsManager),
    onlyShowStreamPrivacy: _v5 = !1
  }) {
    let _v6 = _v1.value?.allowedPrivacies ?? [],
      _v7 = _v1.value?.streamPrivacy?.view,
      _v8 = _v1.value?.streamPrivacy?.embed,
      _v9 = _v1.value?.streamPassword,
      _v10 = _v1.value?.contentRating,
      _v11 = (0, _v104.useIsLiveDemoSubscription)(),
      {
        trackPrivacyChanged: _v12
      } = (0, _v105.useViewPrivacyChangeTracking)(),
      {
        trackLiveStreamPrivacyChanged: _v13
      } = (0, _v14.useLiveStreamBroadcasterTracking)(),
      _v14 = !!_v1.value?.fromShowcase,
      _v15 = _v1.value?.album?.id,
      _v16 = !_v14 && !_v6.find(_v0 => _v0 === _v7),
      _v17 = (0, _v5.useMemo)(() => _v2.value || [], [_v2.value]),
      _v18 = (0, _v5.useCallback)((_v0, _v1) => {
        (_v7 !== _v0 || _v9 !== _v1) && (_v0 !== _v80.EStreamPrivacy.PASSWORD || _v1.length) && (_v3({
          streamPrivacy: {
            view: _v0
          },
          streamPassword: _v0 === _v80.EStreamPrivacy.PASSWORD ? _v1 : void 0
        }, _v112).then(() => {
          _v7 !== _v0 && (_v12({
            entityType: "live_event",
            previousPrivacy: _v7 ?? null,
            newPrivacy: _v0
          }), _v13({
            liveStreamPrivacyType: "link_privacy",
            liveStreamPrivacyValue: String(_v0)
          }));
        }), _v80.EStreamPrivacy.PASSWORD);
      }, [_v3, _v7, _v9, _v12, _v13]),
      _v19 = (0, _v5.useCallback)((_v0, _v1) => {
        _v8 !== _v0 && (_v3({
          streamPrivacy: {
            embed: _v0
          }
        }, _v112), _v80.EStreamPrivacy.PASSWORD, _v13({
          liveStreamPrivacyType: "embed_privacy",
          liveStreamPrivacyValue: String(_v0)
        }));
        _v1 !== _v17 && _v4(_v1);
      }, [_v8, _v17, _v3, _v4, _v7, _v13]),
      _v20 = (0, _v5.useCallback)(_v0 => {
        _v3({
          contentRating: _v0
        }), function (_v0 = !1) {}(_v7 === _v80.EStreamPrivacy.PASSWORD), _v13({
          liveStreamPrivacyType: "content_rating",
          liveStreamPrivacyValue: JSON.stringify(_v0)
        });
      }, [_v3, _v10, _v7, _v13]),
      {
        tooltip: _v21,
        isDisabled: _v22
      } = (0, _v106.useGetEditEmbedPrivacyDisabled)();
    return (0, _v3.jsxs)(_v7.Flex, {
      id: _v0,
      direction: "column",
      maxWidth: "100%",
      width: "100%",
      children: [_v14 && _v15 ? (0, _v3.jsx)(_v86.Alert, {
        children: (0, _v3.jsxs)(_v87.AlertDescription, {
          margin: 0,
          children: [_v111.sharedTranslations.showcasePrivacyNotice, " ", (0, _v3.jsx)(_v22.Text, {
            href: _v103.vimeoConfig.PATH.SHOWCASE_MANAGE_URL(_v15),
            target: "_blank",
            variant: "body-md",
            color: "blue.500",
            textDecoration: "underline",
            as: "a",
            children: _v111.sharedTranslations.manageShowcase
          })]
        })
      }) : null, _v16 ? (0, _v3.jsx)(_v86.Alert, {
        children: (0, _v3.jsx)(_v87.AlertDescription, {
          margin: 0,
          children: _v111.sharedTranslations.eventPrivacyFrozen
        })
      }) : null, _v7 && _v6 ? (0, _v3.jsx)(_v109, {
        isDisabled: _v11 || _v14,
        disabledTip: _v11 ? _v110.rtmpTranslations.viewPrivacyDemoDisabledTip : void 0,
        privacy: _v7,
        allowedPrivacies: _v6,
        password: _v9,
        onChange: (0, _v85.default)(_v18, 0)
      }) : (0, _v3.jsx)(_v8.BokehSkeleton, {
        height: (0, _v6.rem)(110),
        borderRadius: (0, _v6.rem)(4),
        marginBottom: (0, _v6.rem)(16)
      }), !_v5 && (0, _v3.jsxs)(_v3.Fragment, {
        children: [(0, _v3.jsx)(_v88.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v6.rem)(24)} 0`
        }), _v8 ? (0, _v3.jsx)(_v102, {
          isDisabled: _v11 || _v14 || _v22,
          isSelectDisabled: _v22,
          disabledTip: _v11 ? _v110.rtmpTranslations.embedPrivacyDemoDisabledTip : _v22 ? _v21 : void 0,
          embedPrivacy: _v8,
          domains: _v17,
          showNotice: _v7 === _v80.EStreamPrivacy.NOBODY,
          onChange: _v19
        }) : (0, _v3.jsx)(_v8.BokehSkeleton, {
          height: (0, _v6.rem)(200),
          borderRadius: (0, _v6.rem)(4)
        }), (0, _v3.jsx)(_v88.Divider, {
          borderColor: "stroke",
          margin: `${(0, _v6.rem)(24)} 0`
        }), _v10 ? (0, _v3.jsx)(_v92, {
          contentRating: _v10,
          isDisabled: !1,
          onChange: _v20
        }) : (0, _v3.jsx)(_v8.BokehSkeleton, {
          height: (0, _v6.rem)(200),
          borderRadius: (0, _v6.rem)(4)
        })]
      })]
    });
  }], 0);
  var _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  _v0.s(["useFailsafeUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v115.useUpgradeModal)({
      canOpen: _v0,
      tracking: {
        params: {
          feature: "live_event_settings",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "fail_safe_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_failsafe_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "109813",
        enterpriseTitle: _v113.T_GO_LIVE_WITH_PEACE_OF_MIND,
        enterpriseSubtitle: _v113.T_ADD_FAIL_SAFE_STREAMING,
        customFeaturesList: (0, _v3.jsx)(_v114.UpsellFeaturesList, {
          featuresList: _v113.T_FAIL_SAFE_STREAMING_FEATURES
        })
      }
    });
  }], 0), _v0.s(["useUnlimitedStreamUpgradeModal", 0, function ({
    canOpen: _v0 = !0
  } = {}) {
    return (0, _v115.useUpgradeModal)({
      canOpen: _v0,
      tracking: {
        params: {
          feature: "extended_stream",
          target: "enterprise_contact_us_page",
          page: "live_event_stream_settings",
          upsell_name: "live_event_24_7_stream",
          location: window.location.href
        },
        paywallTracking: {
          paywallTrigger: "live_event_unlimited_stream_toggle_button",
          paywallLocation: "live_event",
          paywallType: "popup",
          paywallFeature: "live"
        }
      },
      templateType: "enterprise",
      modalConfig: {
        mkcCode: "109754",
        enterpriseTitle: _v113.T_STREAM_WITHOUT_INTERRUPTIONS,
        enterpriseSubtitle: _v113.T_CREATE_CONTINUOUS_STREAM,
        customFeaturesList: (0, _v3.jsx)(_v114.UpsellFeaturesList, {
          featuresList: _v113.T_UNLIMITED_DURATION_FEATURES
        })
      }
    });
  }], 0);
  var _v116 = _v0.i(0),
    _v117 = _v0.i(0);
  _v0.s(["useTimeBasedDismissableNotification", 0, function ({
    storedKey: _v0,
    cooldownMs: _v1 = 0,
    forceHide: _v2 = !1
  }) {
    let [_v3, _v4] = (0, _v5.useState)(() => {
      if (_v2) return !1;
      let _v0 = (0, _v116.getFromLocalStorage)(_v0),
        _v1 = _v0 ? Number(_v0) : null;
      return !_v1 || _v1 < (0, _v117.getAbsoluteNow)() - _v1;
    });
    return [_v3, (0, _v5.useCallback)(() => {
      (0, _v116.setLocalStorageItem)(_v0, (0, _v117.getAbsoluteNow)()), _v4(!1);
    }, [_v0])];
  }], 0);
}