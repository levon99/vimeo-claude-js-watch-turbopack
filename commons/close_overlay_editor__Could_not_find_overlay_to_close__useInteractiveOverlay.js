{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.i(0);
  var _v3 = _v0.i(0),
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
    _v30 = _v0.i(0);
  let _v31 = 0 * _v4.Duration.xl,
    _v32 = _v0 => (_v0, _v1) => {
      let {
        interactiveOverlay: _v2,
        storyboard: _v3
      } = _v1();
      if (!_v2.isEditingOverlay) return;
      let _v4 = _v3.interactiveOverlays.find(_v0 => _v0.id === _v2.activeOverlayId);
      if (!_v4) throw _v12.default.sendLog(_v6.OVERLAY_ELEMENT_MISSING_OVERLAY, _v23.LogComponent.INTERACTIVE_ERROR, {
        context: "close_overlay_editor",
        storyboardId: _v3.id,
        overlayId: _v2.activeOverlayId
      }), Error("Could not find overlay to close");
      let _v5 = (0, _v26.extractOverlayInteractiveLayers)(_v3.layers),
        _v6 = JSON.parse(JSON.stringify(_v2.editorBackup.storyboardLayers)),
        _v7 = !_v5.length,
        _v8 = !_v4.interactiveLayers.length && !_v0;
      if (_v7) {
        let {
          element: _v0
        } = (0, _v28.getElementByIdFromLayers)(_v2.linkedElementId, _v6);
        (0, _v26.unlinkOverlayFromElement)(_v0), _v6 = (0, _v28.deleteElementFromLayers)(_v2.linkedElementId, _v6), _v0((0, _v18.deleteInteractiveOverlayAction)({
          overlayId: _v2.activeOverlayId
        }));
      } else if (_v8) _v6 = (0, _v28.deleteElementFromLayers)(_v2.linkedElementId, _v6), _v0((0, _v18.deleteInteractiveOverlayAction)({
        overlayId: _v2.activeOverlayId
      }));else if (_v0) {
        let {
          element: _v0,
          layerIndex: _v1,
          elementIndex: _v2
        } = (0, _v28.getElementByIdFromLayers)(_v2.linkedElementId, _v6);
        (0, _v24.isOverlayElement)(_v0) && (0, _v26.mutateOverlayElementAndLayersWhenExitingOverlayEditor)({
          layersToRestore: _v6,
          overlayElementIndex: _v2,
          overlayElementLayerIndex: _v1,
          overlayId: _v2.activeOverlayId,
          currentlyEditedOverlayLayers: _v5
        }), _v0((0, _v18.updateInteractiveOverlayAction)({
          overlay: {
            id: _v2.activeOverlayId,
            analyticsId: _v4.analyticsId,
            name: _v2.activeOverlayName,
            interactiveLayers: _v5,
            closeAfter: _v4.closeAfter ?? -1,
            onEndAction: _v4.onEndAction ?? _v7.OVERLAY_ON_END_DEFAULT
          }
        }));
      }
      (0, _v3.batch)(() => {
        _v0((0, _v18.setLayersAction)(_v6)), _v0((0, _v14.restoreHistoryAction)(_v0 ? _v2.editorBackup.historyStateOnSave : _v2.editorBackup.historyStateOnDiscard)), _v0((0, _v17.selectCEsAction)({
          ceIds: _v2.editorBackup.selectionState.selectedCEIds
        })), _v0((0, _v19.setSecondsPerPixelAction)({
          secondsPerPixel: _v2.editorBackup.timelineState.secondsPerPixel
        })), _v0((0, _v15.restoreInspectorStateAction)(_v2.editorBackup.inspectorState)), _v0((0, _v16.closeOverlayEditorAction)());
      });
    };
  _v0.s(["useInteractiveOverlay", 0, () => {
    let _v0 = (0, _v8.getTranslations)().interactiveOverlay,
      _v1 = (0, _v21.useAppSelector)(_v13.isInteractiveSelector),
      _v2 = !(0, _v21.useAppSelector)(_v20.isLoadingMediaOrApplyingTemplateSelector),
      _v3 = (0, _v21.useAppDispatch)(),
      _v4 = (0, _v21.useAppSelector)(_v16.backupCurrentTimeSelector),
      {
        addOverlayElement: _v5
      } = (0, _v30.useOverlayElement)(),
      {
        getStoryboardMetadata: _v6,
        saveOverlayCount: _v7
      } = (0, _v10.useStoryboardMetadata)(),
      {
        alertCouldNotEditOverlay: _v8
      } = (0, _v29.useAlerts)(),
      {
        seek: _v9
      } = (0, _v9.useDragonfly)(),
      {
        handleFit: _v10
      } = (0, _v11.useTimelineContext)(),
      _v11 = (0, _v2.useCallback)(_v0 => {
        let _v1 = (_v0, _v1) => {
          let {
            storyboard: _v2,
            history: _v3,
            inspector: _v4,
            dragonflyState: _v5,
            selection: _v6,
            timeline: _v7
          } = _v1();
          !function ({
            overlay: _v0,
            linkedElementId: _v1,
            selectedElements: _v2,
            selectedInspector: _v3,
            dispatch: _v4,
            storyboard: _v5,
            history: _v6,
            inspectorState: _v7,
            dragonflyState: _v8,
            selectionState: _v9,
            timelineState: _v10
          }) {
            _v4((0, _v19.resetTimelineState)());
            let _v11 = (0, _v28.getElementByIdFromStoryboard)(_v1, _v5),
              _v12 = _v5.layers[0].composition[0],
              _v13 = _v12.compositionTiming.end - _v12.compositionTiming.start,
              _v14 = (0, _v24.isOverlayElement)(_v11) ? _v13 - _v11.compositionTiming.start : _v13,
              _v15 = {
                ..._v12,
                compositionTiming: {
                  start: 0,
                  end: _v14
                }
              },
              _v16 = {
                ..._v5,
                layers: (0, _v27.alignZIndices)([{
                  ..._v5.layers[0],
                  composition: [_v15]
                }, ..._v0.interactiveLayers])
              };
            _v4((0, _v18.updateStoryboardAction)(_v16)), _v4((0, _v14.resetHistoryAction)());
            let _v17 = {
              undoSnapshots: [..._v6.undoSnapshots, _v5],
              redoSnapshots: []
            };
            _v4((0, _v16.openOverlayEditorAction)({
              overlayId: _v0.id,
              overlayName: _v0.name,
              linkedElementId: _v1,
              storyboardLayers: _v5.layers,
              historyStateOnSave: _v17,
              historyStateOnDiscard: _v6,
              inspectorState: _v7,
              dragonflyState: _v8,
              selectionState: _v9,
              timelineState: _v10
            })), _v2?.length && _v4((0, _v17.selectCEsAction)({
              ceIds: _v2,
              isMultiSelect: !1
            })), _v4(_v3 ? (0, _v15.openInspectorAction)({
              inspectorType: _v3
            }) : (0, _v15.openInspectorAction)({
              inspectorType: _v22.InspectorType.OVERLAYS
            }));
          }({
            overlay: _v0.overlay ?? (0, _v26.getOverlayById)(_v2.interactiveOverlays, _v0.overlayId),
            linkedElementId: _v0.linkedElementId,
            selectedElements: _v0.selectedElements,
            selectedInspector: _v0.selectedInspector,
            dispatch: _v0,
            storyboard: _v2,
            history: _v3,
            inspectorState: _v4,
            dragonflyState: _v5,
            selectionState: {
              selectedCEIds: _v6.selectedCEIds
            },
            timelineState: {
              secondsPerPixel: _v7.secondsPerPixel
            }
          });
        };
        _v3((0, _v16.setIsEnteringOrExitingOverlayEditorAction)(!0)), setTimeout(() => {
          _v3(_v1), _v10(), _v3((0, _v16.setIsEnteringOrExitingOverlayEditorAction)(!1)), queueMicrotask(() => {
            _v9(_v0.seekTo ?? 0);
          });
        }, _v31);
      }, [_v3, _v10, _v9]),
      _v12 = (0, _v2.useCallback)(() => {
        let _v0 = _v6()?.overlayCount ?? 0;
        return _v7(_v0 + 1), `${_v0.overlay} #${_v0 + 1}`;
      }, [_v6, _v7, _v0.overlay]),
      _v13 = (0, _v2.useCallback)(() => ({
        id: (0, _v25.createUuidV4)(),
        analyticsId: (0, _v25.generateRandomUInt32Id)(),
        name: _v12(),
        closeAfter: -1,
        onEndAction: _v7.OVERLAY_ON_END_DEFAULT,
        interactiveLayers: []
      }), [_v12]),
      _v14 = (0, _v2.useCallback)(_v0 => {
        let _v1 = _v13();
        return (0, _v3.batch)(() => {
          _v3((0, _v18.addInteractiveOverlayAction)({
            overlay: _v1
          })), _v3((0, _v18.updateElementAction)({
            ceId: _v0,
            element: {
              interactiveHotspot: {
                action: {
                  type: _v5.HotspotActionType.SHOW_OVERLAY,
                  overlayId: _v1.id
                }
              }
            }
          }));
        }), _v1;
      }, [_v13, _v3]),
      _v15 = (0, _v2.useCallback)(() => {
        let _v0 = _v13();
        return _v3((0, _v18.addInteractiveOverlayAction)({
          overlay: _v0
        })), _v0;
      }, [_v13, _v3]),
      _v16 = (0, _v2.useCallback)(_v0 => {
        if (!_v2) return;
        let _v1 = _v15();
        (0, _v3.batch)(() => {
          _v0 ? _v3((0, _v18.updateElementAction)({
            ceId: _v0,
            element: {
              overlayId: _v1.id
            }
          })) : _v0 = _v5({
            overlayId: _v1.id,
            name: _v1.name,
            isIgnoreUndo: !0
          }), _v11({
            overlay: _v1,
            linkedElementId: _v0
          });
        });
      }, [_v2, _v15, _v11, _v5, _v3]),
      _v17 = (0, _v2.useCallback)(_v0 => {
        _v2 && _v11({
          overlay: _v14(_v0),
          linkedElementId: _v0
        });
      }, [_v14, _v2, _v11]),
      _v18 = (0, _v2.useCallback)(({
        linkedElementId: _v0,
        overlayId: _v1,
        selectedElements: _v2,
        selectedInspector: _v3,
        seekTo: _v4
      }) => {
        if (_v2) try {
          _v11({
            overlayId: _v1,
            linkedElementId: _v0,
            selectedElements: _v2,
            selectedInspector: _v3,
            seekTo: _v4
          });
        } catch (_v0) {
          console.error(_v0), _v8();
        }
      }, [_v8, _v2, _v11]),
      _v19 = (0, _v2.useCallback)(({
        saveChanges: _v0,
        afterCloseCallback: _v1
      }) => {
        _v2 && (_v3((0, _v16.setIsEnteringOrExitingOverlayEditorAction)(!0)), setTimeout(() => {
          _v3(_v32(_v0)), _v9(_v4), _v3((0, _v16.setIsEnteringOrExitingOverlayEditorAction)(!1)), _v1?.();
        }, _v31));
      }, [_v4, _v3, _v2, _v9]),
      _v20 = (0, _v2.useCallback)(({
        saveChanges: _v0,
        switchTo: _v1
      }) => {
        _v3((0, _v16.setIsEnteringOrExitingOverlayEditorAction)(!0)), setTimeout(() => {
          _v3(_v32(_v0)), queueMicrotask(() => {
            _v18(_v1);
          }), _v3((0, _v16.setIsEnteringOrExitingOverlayEditorAction)(!1));
        }, _v31);
      }, [_v3, _v18]);
    return _v1 ? {
      editBlankTimeTriggeredOverlay: _v16,
      editBlankHotspotOverlay: _v17,
      editOverlay: _v18,
      closeOverlayEditor: _v19,
      switchToAnotherOverlay: _v20
    } : {
      editBlankTimeTriggeredOverlay: _v1.default,
      editBlankHotspotOverlay: _v1.default,
      editOverlay: _v1.default,
      closeOverlayEditor: _v1.default,
      switchToAnotherOverlay: _v1.default
    };
  }]);
}