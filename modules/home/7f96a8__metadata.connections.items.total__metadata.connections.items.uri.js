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
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0);
  let _v37 = "#7f96a8",
    _v38 = "#282828",
    _v39 = ["metadata.connections.items.total", "metadata.connections.items.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.edit.uri", "metadata.interactions.editSettings.uri", "metadata.interactions.invite.uri", "metadata.interactions.delete.uri", "name", "uri", "privacy.view", "isPinned", "isPrivateToUser", "pinnedOn", "settings"];
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0);
  let _v43 = function ({
    userId: _v0,
    closeModal: _v1,
    currentFolderUri: _v2,
    onSettingsChange: _v3,
    isEditingFolder: _v4,
    isEditingFromFolderHeader: _v5 = !1,
    initialColor: _v6
  }) {
    let [_v7, {
        called: _v8,
        data: _v9,
        error: _v10,
        loading: _v11
      }] = (0, _v34.usePostUserProjects)(),
      {
        capabilities: _v12
      } = (0, _v30.useCapability)(["hasContentSpaceEnabled", "hasFolderSettings"], _v0),
      [_v13, {
        called: _v14,
        data: _v15,
        error: _v16,
        loading: _v17
      }] = (0, _v33.usePatchUserProject)(),
      _v18 = _v2 ? _v2.split("/").pop() : "",
      _v19 = _v18 ? parseInt(_v18) : 0,
      {
        data: _v20,
        mutate: _v21
      } = (0, _v33.useGetUserProject)(() => _v0 && _v2 && _v4 ? {
        where: {
          userId: _v0,
          projectId: _v19
        },
        select: _v39
      } : null),
      _v22 = (0, _v10.useRef)(null),
      _v23 = (0, _v31.useMatchMutate)(),
      _v24 = (0, _v9.useRouter)(),
      _v25 = (0, _v10.useContext)(_v11.ThemeContext),
      _v26 = (0, _v35.useWindowSize)(),
      _v27 = _v26.height <= _v36.BreakPoints.sm,
      _v28 = _v26.width <= _v36.BreakPoints.sm,
      _v29 = _v20?.settings?.color,
      _v30 = _v25?.name === "dark" ? _v38 : _v37,
      _v31 = _v20 && _v29 ? _v29 : _v6 || _v30,
      _v32 = _v20 && _v20?.name ? _v20?.name : "",
      [_v33, _v34] = (0, _v10.useState)(""),
      [_v35, _v36] = (0, _v10.useState)(!1),
      _v37 = (0, _v40.useNotification)(),
      _v38 = () => {
        _v23(_v2 && !_v5 ? `.*${_v2}/items.*filter=folder.*` : `.*/users/${_v0}/projects.*`), _v44();
      },
      _v39 = (0, _v32.useForm)({
        initialValues: {
          folder_name: _v20 ? _v20?.name : "",
          folder_color: _v20 ? _v20?.settings?.color : ""
        },
        onSubmit: async ({
          folder_name: _v0,
          folder_color: _v1
        }) => {
          if (_v4 && _v2) {
            var _v2, _v3;
            let _v0,
              _v1 = _v41.meta.dirty ? _v1 : _v31;
            if (!_v40.meta.dirty && !_v41.meta.dirty) return void _v44();
            (_v1 === _v37 || _v1 === _v38) && (_v1 = ""), _v40.meta.dirty || (_v0 = _v32);
            let _v2 = {
              name: _v0,
              color: _v1
            };
            await _v13({
              where: {
                userId: _v0,
                projectId: _v19
              },
              select: ["name", "uri", "settings"],
              variables: _v2
            }).finally(() => {
              _v42.gtm.trackFolderChangeSettings();
            }), _v21({
              variables: {
                name: _v2 = _v0,
                color: _v3 = _v1
              },
              where: {
                userId: parseInt((_v0 = _v20.uri.split("/"))[2]),
                projectId: parseInt(_v0[4])
              },
              select: _v39
            }), _v3?.({
              name: _v2,
              settings: {
                color: _v3
              },
              uri: _v20.uri,
              parentFolder: _v20.metadata.connections.parentFolder
            });
          } else await _v7({
            where: {
              userId: _v0
            },
            select: ["name", "uri", "settings"],
            variables: {
              name: _v0,
              parentFolderUri: _v2 ?? void 0,
              color: _v12.hasFolderSettings ? _v1 : void 0
            }
          });
        }
      }),
      _v40 = (0, _v32.useField)(_v39, "folder_name"),
      _v41 = (0, _v32.useField)(_v39, "folder_color"),
      _v42 = _v40.input.value?.length || _v32.length || 0;
    (0, _v10.useEffect)(() => {
      _v8 && !_v10 && !_v11 && _v9 ? (_v38(), _v37({
        content: (0, _v6.translate)({
          singular: "Folder ‘{FOLDER}’ has been created.",
          replacements: {
            FOLDER: _v9.name
          },
          dictionary: {
            es: {
              singular: 'Se ha creado la carpeta "{FOLDER}".'
            },
            "de-DE": {
              singular: "Der Ordner „{FOLDER}“ wurde erstellt."
            },
            "fr-FR": {
              singular: "Le dossier « {FOLDER} » a été créé."
            },
            "ja-JP": {
              singular: "フォルダー「{FOLDER}」が作成されました。"
            },
            "ko-KR": {
              singular: "'{FOLDER}' 폴더가 생성되었습니다."
            },
            "pt-BR": {
              singular: "A pasta '{FOLDER}' foi criada."
            },
            "zh-CN": {
              singular: "文件夹“{FOLDER}”已创建。"
            }
          }
        })
      }), _v24.push((0, _v41.getFolderPageUriFromApiUri)(_v9.uri))) : _v14 && !_v16 && !_v17 && _v15 && (_v38(), _v37({
        content: (0, _v6.translate)({
          singular: "Updated folder {FOLDER_NAME}",
          replacements: {
            FOLDER_NAME: _v15.name
          },
          dictionary: {
            es: {
              singular: "Carpeta {FOLDER_NAME} actualizada"
            },
            "de-DE": {
              singular: "{FOLDER_NAME} wurde aktualisiert"
            },
            "fr-FR": {
              singular: "Dossier {FOLDER_NAME} mis à jour"
            },
            "ja-JP": {
              singular: "更新されたフォルダー {FOLDER_NAME}"
            },
            "ko-KR": {
              singular: "업데이트된 폴더 {FOLDER_NAME}"
            },
            "pt-BR": {
              singular: "Pasta atualizada {FOLDER_NAME}"
            },
            "zh-CN": {
              singular: "已更新文件夹 {FOLDER_NAME}"
            }
          }
        })
      }));
    }, [_v8, _v10, _v11, _v9, _v14, _v16, _v17, _v15]);
    let _v43 = (0, _v10.useCallback)(() => {
        _v40.handlers.setValue(""), _v22 && _v22.current && (_v22.current.value = "");
      }, [_v40, _v22]),
      _v44 = (0, _v10.useCallback)(() => {
        _v1(), _v43();
      }, [_v1, _v43]),
      [_v45, _v46] = (0, _v10.useState)(_v32);
    (0, _v10.useEffect)(() => {
      _v40.input.value !== _v32 && ("" === _v40.input.value || void 0 === _v40.input.value) ? _v46(_v32) : _v46(_v40.input.value);
    }, [_v32, _v45, _v40.input.value]);
    let _v47 = _v33 || _v31,
      _v48 = (0, _v10.useCallback)(_v0 => {
        var _v1;
        let _v2 = "RGB" === ((_v1 = _v0.valueAsString).startsWith("#") ? "HEX" : _v1.startsWith("rgb") ? "RGB" : _v1.startsWith("hsl") ? "HSL" : void 0) ? (0, _v26.toHex)(_v0.valueAsString) : _v0.valueAsString;
        _v34(_v2), _v41.handlers.setValue(_v2);
      }, [_v41.handlers]);
    return (0, _v1.jsxs)(_v23.ModalBody, {
      py: "sm",
      px: "lg",
      children: [(0, _v1.jsxs)(_v16.Flex, {
        direction: "column",
        gap: "md",
        children: [(0, _v1.jsx)(_v12.Box, {
          aspectRatio: "16 / 9",
          position: "relative",
          width: "100%",
          children: (0, _v1.jsx)(_v29.FolderCardThumbnail, {
            backgroundColor: _v47
          })
        }), _v12.hasFolderSettings && (0, _v1.jsxs)(_v14.ColorPickerRoot, {
          defaultValue: (0, _v27.parseColor)(_v47),
          onValueChange: _v48,
          positioning: {
            placement: _v27 && !_v28 ? "left" : "bottom"
          },
          open: _v35,
          onInteractOutside: () => _v36(!_v35),
          children: [(0, _v1.jsx)(_v12.Box, {
            width: "100%",
            paddingTop: "sm",
            children: (0, _v1.jsx)(_v15.ColorPickerControl, {
              children: (0, _v1.jsx)(_v14.ColorPickerTrigger, {
                onClick: () => _v36(!_v35),
                children: (0, _v1.jsxs)(_v21.InputGroup, {
                  children: [(0, _v1.jsx)(_v22.InputLeftElement, {
                    children: (0, _v1.jsx)(_v12.Box, {
                      borderRadius: "pill",
                      w: "xs",
                      h: "xs",
                      bgColor: _v47
                    })
                  }), (0, _v1.jsx)(_v20.Input, {
                    defaultValue: _v47,
                    value: _v47,
                    cursor: "pointer",
                    readOnly: !0
                  }), (0, _v1.jsx)(_v22.InputRightElement, {
                    children: (0, _v1.jsx)(_v25.Tooltip, {
                      label: (0, _v6.translate)({
                        singular: "Reset",
                        dictionary: {
                          es: {
                            singular: "Restablecer"
                          },
                          "de-DE": {
                            singular: "Zurücksetzen"
                          },
                          "fr-FR": {
                            singular: "Réinitialiser"
                          },
                          "ja-JP": {
                            singular: "リセット"
                          },
                          "ko-KR": {
                            singular: "재설정"
                          },
                          "pt-BR": {
                            singular: "Redefinir"
                          },
                          "zh-CN": {
                            singular: "重置"
                          }
                        }
                      }),
                      placement: "top",
                      children: (0, _v1.jsx)(_v19.IconButton, {
                        "aria-label": "reset-folder-color",
                        icon: (0, _v1.jsx)(_v28.ColorPicker, {}),
                        size: "sm",
                        variant: "tertiary",
                        onClick: () => {
                          _v34(_v31), _v41.handlers.setValue(_v31);
                        }
                      })
                    })
                  })]
                })
              })
            })
          }), (0, _v1.jsx)(_v14.ColorPickerPositioner, {
            children: (0, _v1.jsxs)(_v14.ColorPickerContent, {
              children: [(0, _v1.jsx)(_v14.ColorPickerArea, {}), (0, _v1.jsxs)(_v16.Flex, {
                gap: "sm",
                align: "center",
                children: [(0, _v1.jsxs)(_v14.ColorPickerChannelSlider, {
                  channel: "hue",
                  children: [(0, _v1.jsx)(_v14.ColorPickerChannelSliderTrack, {}), (0, _v1.jsx)(_v14.ColorPickerChannelSliderThumb, {})]
                }), (0, _v1.jsx)(_v14.ColorPickerEyeDropperTrigger, {
                  size: "sm",
                  variant: "secondary"
                })]
              }), (0, _v1.jsx)(_v14.ColorPickerChannelInput, {
                channel: "hex"
              })]
            })
          })]
        }), (0, _v1.jsxs)(_v17.FormControl, {
          children: [(0, _v1.jsx)(_v18.FormLabel, {
            fontWeight: "bold",
            color: "text-primary",
            children: (0, _v6.translate)({
              singular: "Folder name",
              dictionary: {
                es: {
                  singular: "Nombre de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnername"
                },
                "fr-FR": {
                  singular: "Nom du dossier"
                },
                "ja-JP": {
                  singular: "フォルダー名"
                },
                "ko-KR": {
                  singular: "폴더 이름"
                },
                "pt-BR": {
                  singular: "Nome da pasta"
                },
                "zh-CN": {
                  singular: "文件夹名称"
                }
              }
            })
          }), (0, _v1.jsx)(_v20.Input, {
            defaultValue: _v32,
            name: "folder_name",
            maxLength: 32,
            onChange: _v40.iris.onChange,
            onBlur: _v40.iris.onBlur,
            onFocus: _v40.iris.onFocus,
            placeholder: (0, _v6.translate)({
              singular: "Folder name",
              dictionary: {
                es: {
                  singular: "Nombre de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnername"
                },
                "fr-FR": {
                  singular: "Nom du dossier"
                },
                "ja-JP": {
                  singular: "フォルダー名"
                },
                "ko-KR": {
                  singular: "폴더 이름"
                },
                "pt-BR": {
                  singular: "Nome da pasta"
                },
                "zh-CN": {
                  singular: "文件夹名称"
                }
              }
            }),
            ref: _v22,
            autoFocus: !0
          }, _v32), (0, _v1.jsx)(_v17.FormHelperText, {
            color: _v40.input.value?.length >= 27 ? "status-caution-primary" : "text-tertiary",
            fontWeight: _v40.input.value?.length >= 27 ? "bold" : "normal",
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "xs",
            children: (0, _v6.translate)({
              singular: "{COUNT}/32 characters",
              replacements: {
                COUNT: _v42
              },
              dictionary: {
                es: {
                  singular: "{COUNT}/32 caracteres"
                },
                "de-DE": {
                  singular: "{COUNT}/32 Zeichen"
                },
                "fr-FR": {
                  singular: "{COUNT}/32 caractères"
                },
                "ja-JP": {
                  singular: "{COUNT}/32文字"
                },
                "ko-KR": {
                  singular: "{COUNT}/32자"
                },
                "pt-BR": {
                  singular: "{COUNT}/32 caracteres"
                },
                "zh-CN": {
                  singular: "已输入 {COUNT} 个字符（不得超过 32 个字符）"
                }
              }
            })
          })]
        })]
      }), (0, _v1.jsxs)(_v24.ModalFooter, {
        border: 0,
        pt: "lg",
        pb: "xs",
        px: "0",
        children: [(0, _v1.jsx)(_v13.Button, {
          onClick: _v0 => {
            _v44(), _v0.stopPropagation();
          },
          variant: "tertiary",
          "aria-label": (0, _v6.translate)({
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
          children: (0, _v6.translate)({
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
        }), (0, _v1.jsx)(_v13.Button, {
          isDisabled: _v40.input.value?.length > 32 || "" === _v32 && void 0 === _v40.meta.dirty || _v40.input.value?.length === 0 && void 0 !== _v40.meta.dirty,
          onClick: _v0 => {
            _v39.handleSubmit(_v0);
          },
          isLoading: _v11 || _v17,
          "aria-label": (0, _v6.translate)({
            singular: "Confirm",
            dictionary: {
              es: {
                singular: "Confirmar"
              },
              "de-DE": {
                singular: "Bestätigen"
              },
              "fr-FR": {
                singular: "Confirmer"
              },
              "ja-JP": {
                singular: "確定"
              },
              "ko-KR": {
                singular: "확인"
              },
              "pt-BR": {
                singular: "Confirmar"
              },
              "zh-CN": {
                singular: "确认"
              }
            }
          }),
          variant: "primary",
          children: (0, _v1.jsx)("span", {
            children: (0, _v6.translate)({
              singular: "Confirm",
              dictionary: {
                es: {
                  singular: "Confirmar"
                },
                "de-DE": {
                  singular: "Bestätigen"
                },
                "fr-FR": {
                  singular: "Confirmer"
                },
                "ja-JP": {
                  singular: "確定"
                },
                "ko-KR": {
                  singular: "확인"
                },
                "pt-BR": {
                  singular: "Confirmar"
                },
                "zh-CN": {
                  singular: "确认"
                }
              }
            })
          })
        })]
      })]
    });
  };
  _v0.s(["FolderSettingsModal", 0, ({
    isOpen: _v0,
    userId: _v1,
    closeModal: _v2,
    parentFolderUri: _v3,
    currentFolderUri: _v4,
    isEditingFolder: _v5 = !1,
    onSettingsChange: _v6,
    location: _v7,
    isEditingFromFolderHeader: _v8 = !1,
    initialColor: _v9
  }) => {
    let _v10 = (0, _v8.useHasMounted)(),
      _v11 = (0, _v7.shouldShowInDevelopmentFeature)("change_color");
    return _v10 ? (0, _v1.jsx)("div", {
      onClick: _v0 => {
        _v0.stopPropagation(), _v0.preventDefault();
      },
      children: (0, _v1.jsxs)(_v2.Modal, {
        isOpen: _v0,
        onClose: _v2,
        size: "sm",
        children: [(0, _v1.jsx)(_v5.ModalOverlay, {}), (0, _v1.jsxs)(_v3.ModalContent, {
          borderRadius: "md",
          pb: "md",
          children: [(0, _v1.jsx)(_v4.ModalHeader, {
            fontSize: "header-lg",
            py: "md",
            px: "lg",
            mb: "0",
            children: _v11 ? (0, _v6.translate)({
              singular: "Folder color",
              dictionary: {
                es: {
                  singular: "Color de carpeta"
                },
                "de-DE": {
                  singular: "Ordnerfarbe"
                },
                "fr-FR": {
                  singular: "Couleur du dossier"
                },
                "ja-JP": {
                  singular: "フォルダーの色"
                },
                "ko-KR": {
                  singular: "폴더 색상"
                },
                "pt-BR": {
                  singular: "Cor da pasta"
                },
                "zh-CN": {
                  singular: "文件夹颜色"
                }
              }
            }) : _v5 ? (0, _v6.translate)({
              singular: "Folder settings",
              dictionary: {
                es: {
                  singular: "Configuración de la carpeta"
                },
                "de-DE": {
                  singular: "Ordnereinstellungen"
                },
                "fr-FR": {
                  singular: "Paramètres du dossier"
                },
                "ja-JP": {
                  singular: "フォルダー設定"
                },
                "ko-KR": {
                  singular: "폴더 설정"
                },
                "pt-BR": {
                  singular: "Configurações da pasta"
                },
                "zh-CN": {
                  singular: "文件夹设置"
                }
              }
            }) : (0, _v6.translate)({
              singular: "New folder",
              dictionary: {
                es: {
                  singular: "Carpeta nueva"
                },
                "de-DE": {
                  singular: "Neuer Ordner"
                },
                "fr-FR": {
                  singular: "Nouveau dossier"
                },
                "ja-JP": {
                  singular: "新しいフォルダー"
                },
                "ko-KR": {
                  singular: "새 폴더"
                },
                "pt-BR": {
                  singular: "Nova pasta"
                },
                "zh-CN": {
                  singular: "新文件夹"
                }
              }
            })
          }), (0, _v1.jsx)(_v43, {
            userId: _v1,
            isOpen: _v0,
            closeModal: _v2,
            parentFolderUri: _v3,
            currentFolderUri: _v4,
            isEditingFolder: _v5,
            onSettingsChange: _v6,
            location: _v7,
            isEditingFromFolderHeader: _v8,
            initialColor: _v9
          })]
        })]
      })
    }) : null;
  }], 0);
}