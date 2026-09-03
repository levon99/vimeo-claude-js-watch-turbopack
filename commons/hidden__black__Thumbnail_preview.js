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
      {
        settings: _v4
      } = (0, _v13.useOrionSettings)(),
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
          streamTitle: _v0
        }), _v10(!0), (0, _v12.trackAddEventTitle)(), _v3({
          liveStreamBasicsField: "title"
        })), _v6(_v0);
      }, [_v5, _v2, _v9, _v10, _v6, _v3]),
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
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  _v0.s(["HostAudioSettings", 0, function ({
    id: _v0 = (0, _v65.createDomName)("host-audio-settings"),
    className: _v1 = (0, _v65.createDomName)("host-audio-settings")
  }) {
    let {
        level: _v2,
        isMuted: _v3,
        hasTrack: _v4
      } = function (_v0 = 15) {
        let {
            audio: _v1
          } = (0, _v4.useManager)(_v63.LocalMediaManager),
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
            if (!_v64.browserConfig.FEATURE.CAN_USE_AUDIO_CONTEXT) return {
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
      children: [_v5 ? (0, _v3.jsx)(_v62.MicOn, {
        boxSize: 20
      }) : (0, _v3.jsx)(_v61.MicOff, {
        boxSize: 20,
        color: "status-destructive-primary"
      }), (0, _v3.jsx)(_v22.Text, {
        variant: "body-md",
        children: _v66.translations.host
      }), (0, _v3.jsx)(_v7.Flex, {
        align: "center",
        gap: (0, _v6.rem)(2),
        flex: "1",
        role: "meter",
        "aria-label": _v66.translations.microphoneLevel,
        "aria-valuenow": _v2,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        children: _v7
      })]
    });
  }], 0);
}