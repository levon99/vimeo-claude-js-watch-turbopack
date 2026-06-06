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
    _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = (0, _v37.slate)(390),
    _v39 = (0, _v37.grayscale)(800),
    _v40 = ["metadata.connections.items.total", "metadata.connections.items.uri", "metadata.connections.parentFolder.uri", "metadata.interactions.edit.uri", "metadata.interactions.editSettings.uri", "metadata.interactions.invite.uri", "metadata.interactions.delete.uri", "name", "uri", "privacy.view", "isPinned", "isPrivateToUser", "pinnedOn", "settings"];
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = function ({
    userId: _v0,
    closeModal: _v1,
    parentFolderUri: _v2,
    currentFolderUri: _v3,
    onSettingsChange: _v4,
    location: _v5,
    isEditingFolder: _v6,
    isEditingFromFolderHeader: _v7 = !1,
    initialColor: _v8
  }) {
    let [_v9, {
        called: _v10,
        data: _v11,
        error: _v12,
        loading: _v13
      }] = (0, _v33.usePostUserProjects)(),
      {
        capabilities: _v14
      } = (0, _v30.useCapability)(["hasContentSpaceEnabled", "hasFolderSettings", "hasEnterprise"], _v0),
      _v15 = !!_v14.hasEnterprise,
      [_v16, {
        called: _v17,
        data: _v18,
        error: _v19,
        loading: _v20
      }] = (0, _v32.usePatchUserProject)(),
      _v21 = _v3 ? _v3.split("/").pop() : "",
      _v22 = _v21 ? parseInt(_v21) : 0,
      {
        data: _v23,
        mutate: _v24
      } = (0, _v32.useGetUserProject)(() => _v0 && _v3 && _v6 ? {
        where: {
          userId: _v0,
          projectId: _v22
        },
        select: _v40
      } : null),
      _v25 = (0, _v10.useRef)(null),
      _v26 = (0, _v42.default)(),
      _v27 = (0, _v36.useAnalyticsEvent)(),
      _v28 = (0, _v9.useRouter)(),
      _v29 = (0, _v10.useContext)(_v11.ThemeContext),
      _v30 = (0, _v34.useWindowSize)(),
      _v31 = _v30.height <= _v35.BreakPoints.sm,
      _v32 = _v30.width <= _v35.BreakPoints.sm,
      _v33 = _v23?.settings?.color,
      _v34 = _v29?.name === "dark" ? _v39 : _v38,
      _v35 = _v23 && _v33 ? _v33 : _v8 || _v34,
      _v36 = _v23 && _v23?.name ? _v23?.name : "",
      [_v37, _v38] = (0, _v10.useState)(""),
      [_v39, _v40] = (0, _v10.useState)(!1),
      _v41 = (0, _v43.useNotification)(),
      _v42 = (0, _v44.usePageName)(),
      _v43 = () => {
        _v26(_v3 && !_v7 ? `.*${_v3}/items.*filter=folder.*` : `.*/users/${_v0}/projects.*`), _v49();
      },
      _v44 = (0, _v31.useForm)({
        initialValues: {
          folder_name: _v23 ? _v23?.name : "",
          folder_color: _v23 ? _v23?.settings?.color : ""
        },
        onSubmit: async ({
          folder_name: _v0,
          folder_color: _v1
        }) => {
          if (_v6 && _v3) {
            var _v2, _v3;
            let _v0,
              _v1 = _v46.meta.dirty ? _v1 : _v35;
            if (!_v45.meta.dirty && !_v46.meta.dirty) return void _v49();
            (_v1 === _v38 || _v1 === _v39) && (_v1 = ""), _v45.meta.dirty || (_v0 = _v36);
            let _v2 = {
              name: _v0
            };
            _v15 && (_v2.color = _v1), await _v16({
              where: {
                userId: _v0,
                projectId: _v22
              },
              select: ["name", "uri", "settings"],
              variables: _v2
            }).finally(() => {
              _v46.gtm.trackFolderChangeSettings();
            }), _v24({
              variables: {
                name: _v2 = _v0,
                color: _v3 = _v1
              },
              where: {
                userId: parseInt((_v0 = _v23.uri.split("/"))[2]),
                projectId: parseInt(_v0[4])
              },
              select: _v40
            }), _v4?.({
              name: _v2,
              settings: {
                color: _v3
              },
              uri: _v23.uri,
              parentFolder: _v23.metadata.connections.parentFolder
            });
          } else await _v9({
            where: {
              userId: _v0
            },
            select: ["name", "uri", "settings"],
            variables: {
              name: _v0,
              parentFolderUri: _v3 ?? void 0,
              color: _v14.hasFolderSettings && _v15 ? _v1 : void 0
            }
          });
        }
      }),
      _v45 = (0, _v31.useField)(_v44, "folder_name"),
      _v46 = (0, _v31.useField)(_v44, "folder_color"),
      _v47 = _v45.input.value?.length || _v36.length || 0;
    (0, _v10.useEffect)(() => {
      if (_v10 && !_v12 && !_v13 && _v11) {
        _v43(), _v41({
          content: (0, _v6.translate)({
            singular: "Folder ‘{FOLDER}’ has been created.",
            replacements: {
              FOLDER: _v11.name
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
        });
        let _v0 = _v11?.settings?.color,
          _v1 = [_v41.AnalyticsFolderSettingsCustomizations.name];
        _v0 && _v1.push(_v41.AnalyticsFolderSettingsCustomizations.color), _v27((0, _v41.createFolderViaFolderSettings)({
          location: _v5,
          folder_id: parseInt(_v11.uri.split("/").pop()),
          folder_name: _v11?.name,
          is_subfolder: !!_v3,
          feature: "video_library",
          settings_changed: _v1,
          is_my_videos: (_v11.isPrivateToUser && !!_v14.hasContentSpaceEnabled) ?? null
        })), _v28.push((0, _v45.getFolderPageUriFromApiUri)(_v11.uri));
      } else if (_v17 && !_v19 && !_v20 && _v18) {
        _v43(), _v41({
          content: (0, _v6.translate)({
            singular: "Updated folder {FOLDER_NAME}",
            replacements: {
              FOLDER_NAME: _v18.name
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
        });
        let _v0 = _v36 !== _v18?.name,
          _v1 = _v35 !== _v18?.settings?.color,
          _v2 = [];
        _v0 && _v2.push(_v41.AnalyticsFolderSettingsCustomizations.name), _v1 && _v2.push(_v41.AnalyticsFolderSettingsCustomizations.color), _v27((0, _v41.updateFolderSettings)({
          product: _v41.AnalyticsProducts.WORKFLOW,
          location: _v5,
          folder_id: parseInt(_v18.uri.split("/").pop()),
          is_subfolder: !!_v2,
          feature: "vls" === _v42 ? "search" : "video_library",
          settings_changed: _v2,
          is_my_videos: !!_v23?.isPrivateToUser && !!_v14.hasContentSpaceEnabled
        }));
      }
    }, [_v10, _v12, _v13, _v11, _v17, _v19, _v20, _v18]);
    let _v48 = (0, _v10.useCallback)(() => {
        _v45.handlers.setValue(""), _v25 && _v25.current && (_v25.current.value = "");
      }, [_v45, _v25]),
      _v49 = (0, _v10.useCallback)(() => {
        _v1(), _v48();
      }, [_v1, _v48]),
      [_v50, _v51] = (0, _v10.useState)(_v36);
    (0, _v10.useEffect)(() => {
      _v45.input.value !== _v36 && ("" === _v45.input.value || void 0 === _v45.input.value) ? _v51(_v36) : _v51(_v45.input.value);
    }, [_v36, _v50, _v45.input.value]);
    let _v52 = _v37 || _v35,
      _v53 = (0, _v10.useCallback)(_v0 => {
        var _v1;
        let _v2 = "RGB" === ((_v1 = _v0.valueAsString).startsWith("#") ? "HEX" : _v1.startsWith("rgb") ? "RGB" : _v1.startsWith("hsl") ? "HSL" : void 0) ? (0, _v26.toHex)(_v0.valueAsString) : _v0.valueAsString;
        _v38(_v2), _v46.handlers.setValue(_v2);
      }, [_v46.handlers]),
      _v54 = (0, _v7.shouldShowInDevelopmentFeature)("change_color", !0);
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
            backgroundColor: _v52
          })
        }), _v14.hasFolderSettings && _v15 && (0, _v1.jsxs)(_v14.ColorPickerRoot, {
          defaultValue: (0, _v27.parseColor)(_v52),
          onValueChange: _v53,
          positioning: {
            placement: _v31 && !_v32 ? "left" : "bottom"
          },
          open: _v39,
          onInteractOutside: () => _v40(!_v39),
          children: [(0, _v1.jsx)(_v12.Box, {
            width: "100%",
            paddingTop: "sm",
            children: (0, _v1.jsx)(_v15.ColorPickerControl, {
              children: (0, _v1.jsx)(_v14.ColorPickerTrigger, {
                onClick: () => _v40(!_v39),
                children: (0, _v1.jsxs)(_v21.InputGroup, {
                  children: [(0, _v1.jsx)(_v22.InputLeftElement, {
                    children: (0, _v1.jsx)(_v12.Box, {
                      borderRadius: "pill",
                      w: "xs",
                      h: "xs",
                      bgColor: _v52
                    })
                  }), (0, _v1.jsx)(_v20.Input, {
                    defaultValue: _v52,
                    value: _v52,
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
                          _v38(_v35), _v46.handlers.setValue(_v35);
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
        }), !_v54 && (0, _v1.jsxs)(_v17.FormControl, {
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
            defaultValue: _v36,
            name: "folder_name",
            maxLength: 32,
            onChange: _v45.iris.onChange,
            onBlur: _v45.iris.onBlur,
            onFocus: _v45.iris.onFocus,
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
            ref: _v25,
            autoFocus: !0
          }, _v36), (0, _v1.jsx)(_v17.FormHelperText, {
            color: _v45.input.value?.length >= 27 ? "status-caution-primary" : "text-tertiary",
            fontWeight: _v45.input.value?.length >= 27 ? "bold" : "normal",
            display: "flex",
            justifyContent: "flex-end",
            paddingTop: "xs",
            children: (0, _v6.translate)({
              singular: "{COUNT}/32 characters",
              replacements: {
                COUNT: _v47
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
            _v49(), _v0.stopPropagation();
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
          isDisabled: _v45.input.value?.length > 32 || "" === _v36 && void 0 === _v45.meta.dirty || _v45.input.value?.length === 0 && void 0 !== _v45.meta.dirty,
          onClick: _v0 => {
            _v44.handleSubmit(_v0);
          },
          isLoading: _v13 || _v20,
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
          }), (0, _v1.jsx)(_v47, {
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