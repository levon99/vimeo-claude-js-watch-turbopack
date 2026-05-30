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
    _v33 = _v0.i(0);
  _v0.s(["SaveOverlayAsTeamTemplateModal", 0, ({
    active: _v0,
    onConfirm: _v1,
    onDismiss: _v2,
    initialTemplateName: _v3,
    overlayId: _v4
  }) => {
    let _v5 = (0, _v26.useAppDispatch)(),
      _v6 = (0, _v26.useAppSelector)(_v25.storyboardSelector),
      _v7 = (0, _v26.useAppSelector)(_v23.isEditingInteractiveOverlaySelector),
      _v8 = (0, _v26.useAppSelector)(_v24.overlayThumbnailUrlsMapSelector)[_v4],
      [_v9] = (0, _v21.useGetOverlayThumbnailUploadLinkMutation)(),
      {
        alertFailedToSaveOverlayAsTemplate: _v10
      } = (0, _v18.useAlerts)(),
      {
        takeScreenshot: _v11
      } = (0, _v19.useStageScreenshot)(),
      {
        saveOverlayAsTemplate: _v12
      } = (0, _v17.useOverlayTemplates)(),
      [_v13, _v14] = (0, _v2.useState)(_v3),
      [_v15, _v16] = (0, _v2.useState)((0, _v33.validateTemplateName)(_v13));
    (0, _v2.useEffect)(() => {
      (0, _v30.sendTrackOverlayViewSaveModal)();
    }, []);
    let _v17 = (0, _v2.useCallback)(async _v0 => {
        let _v1 = await _v9().unwrap();
        try {
          if (!_v1?.storageObjectId || !_v1?.upload?.uploadLink) {
            let _v0 = "No overlay thumbnail upload link returned.";
            throw console.error(_v0), Error(_v0);
          }
          let _v0 = await fetch(_v1.upload.uploadLink, {
              method: "PUT",
              headers: {
                "Content-Type": _v0.type
              },
              body: _v0
            }),
            _v1 = await _v0.json();
          if (!_v0.ok || _v1?.Status !== "success") {
            let _v0 = "Upload via upload link failed.";
            throw console.error(_v0), Error(_v0);
          }
        } catch (_v0) {
          console.error("Failed to upload overlay thumbnail.", _v0);
        }
        return _v1.storageObjectId;
      }, [_v9]),
      _v18 = (0, _v2.useCallback)(async () => {
        let _v0 = _v6.layers;
        if (!_v7) {
          let _v0 = (0, _v32.getOverlayById)(_v6.interactiveOverlays, _v4);
          if (!_v0) {
            _v20.default.sendLog(_v16.INTERACTIVE_ELEMENT_MISSING_OVERLAY, _v28.LogComponent.INTERACTIVE_ERROR, {
              overlayId: _v4,
              storyboardId: _v6.id,
              context: "SaveOverlayAsTeamTemplateModal_GenerateThumbnail"
            }), console.error(`Overlay ${_v4} not found for generating screenshot.`);
            return;
          }
          _v0 = _v0.interactiveLayers;
        }
        return await _v11(_v0, _v4);
      }, [_v7, _v4, _v6.id, _v6.interactiveOverlays, _v6.layers, _v11]),
      _v19 = (0, _v2.useCallback)(async () => {
        let _v0 = _v8 && !_v7 ? await (0, _v31.convertUrlToFile)(_v8, "overlay-thumbnail.png") : await _v18();
        return _v0 ? _v17(_v0) : void console.warn("Failed to generate image file for overlay thumbnail.");
      }, [_v18, _v7, _v8, _v17]),
      _v20 = (0, _v2.useCallback)(async () => {
        (0, _v30.sendTrackSaveOverlayAsTemplate)(_v29.SAVE_COPY.SAVE_TEMPLATE), _v1();
        try {
          _v5((0, _v23.setIsOverlayTemplateSavingAction)(!0));
          let _v0 = await _v19();
          _v0 || console.error("Failed to create overlay thumbnail."), _v12({
            templateName: _v13,
            overlayId: _v4,
            thumbnailId: _v0
          }), _v5((0, _v22.updateInspectorDataAction)({
            inspectorType: _v27.InspectorType.OVERLAYS,
            data: {
              tab: _v27.OverlaysInspectorTabType.TEAM
            }
          })), _v5((0, _v22.openInspectorAction)({
            inspectorType: _v27.InspectorType.OVERLAYS
          }));
        } catch (_v0) {
          console.error(_v0?.message ?? _v0), _v10();
        } finally {
          _v5((0, _v23.setIsOverlayTemplateSavingAction)(!1));
        }
      }, [_v10, _v19, _v5, _v1, _v4, _v12, _v13]);
    return (0, _v1.jsxs)(_v7.Modal, {
      isOpen: _v0,
      onClose: _v2,
      children: [(0, _v1.jsx)(_v12.ModalOverlay, {}), (0, _v1.jsxs)(_v9.ModalContent, {
        children: [(0, _v1.jsx)(_v11.ModalHeader, {
          children: (0, _v1.jsx)(_v14.Text, {
            variant: "heading-md",
            children: (0, _v15.translate)({
              singular: "Save a new template",
              dictionary: {
                es: {
                  singular: "Guardar una nueva plantilla"
                },
                "de-DE": {
                  singular: "Neue Vorlage speichern"
                },
                "fr-FR": {
                  singular: "Enregistrer un nouveau modèle"
                },
                "ja-JP": {
                  singular: "新しいテンプレートを保存"
                },
                "ko-KR": {
                  singular: "새 템플릿 저장"
                },
                "pt-BR": {
                  singular: "Salvar um modelo novo"
                },
                "zh-CN": {
                  singular: "保存新模板"
                }
              }
            })
          })
        }), (0, _v1.jsx)(_v8.ModalBody, {
          children: (0, _v1.jsxs)(_v4.FormControl, {
            isInvalid: !_v15,
            children: [(0, _v1.jsx)(_v5.FormLabel, {
              size: "sm",
              fontWeight: "400",
              marginBottom: (0, _v13.rem)(10),
              children: (0, _v15.translate)({
                singular: "Template name",
                dictionary: {
                  es: {
                    singular: "Nombre de la plantilla"
                  },
                  "de-DE": {
                    singular: "Name der Vorlage"
                  },
                  "fr-FR": {
                    singular: "Nom du modèle"
                  },
                  "ja-JP": {
                    singular: "テンプレート名"
                  },
                  "ko-KR": {
                    singular: "템플릿 이름"
                  },
                  "pt-BR": {
                    singular: "Nome do modelo"
                  },
                  "zh-CN": {
                    singular: "模板名称"
                  }
                }
              })
            }), (0, _v1.jsx)(_v6.Input, {
              translate: "no",
              className: "notranslate",
              onChange: _v0 => {
                let _v1 = _v0.target.value;
                _v14(_v1), _v16((0, _v33.validateTemplateName)(_v1));
              },
              autoFocus: !0,
              defaultValue: _v13,
              maxLength: 256
            })]
          })
        }), (0, _v1.jsxs)(_v10.ModalFooter, {
          children: [(0, _v1.jsx)(_v3.Button, {
            variant: "secondary",
            onClick: () => {
              (0, _v30.sendTrackOverlaySelectSaveModal)("cancel"), _v2();
            },
            children: (0, _v15.translate)({
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
          }), (0, _v1.jsx)(_v3.Button, {
            isDisabled: !_v15,
            variant: "primary",
            onClick: _v20,
            children: (0, _v15.translate)({
              singular: "Apply",
              dictionary: {
                es: {
                  singular: "Aplicar"
                },
                "de-DE": {
                  singular: "Anwenden"
                },
                "fr-FR": {
                  singular: "Appliquer"
                },
                "ja-JP": {
                  singular: "適用する"
                },
                "ko-KR": {
                  singular: "적용"
                },
                "pt-BR": {
                  singular: "Aplicar"
                },
                "zh-CN": {
                  singular: "应用"
                }
              }
            })
          })]
        })]
      })]
    });
  }]);
}