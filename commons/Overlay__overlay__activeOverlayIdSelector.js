{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = {
      isEditingOverlay: !1,
      isOverlayTemplateSaving: !1,
      isEnteringOrExitingOverlayEditor: !1,
      isApplyingOverlayTemplate: !1,
      activeOverlayId: "",
      activeOverlayName: "Overlay",
      linkedElementId: "",
      editorBackup: {
        storyboardLayers: [],
        historyStateOnSave: {
          undoSnapshots: [],
          redoSnapshots: []
        },
        historyStateOnDiscard: {
          undoSnapshots: [],
          redoSnapshots: []
        },
        inspectorState: {
          ..._v4.DEFAULT_INSPECTOR_STATE
        },
        selectionState: {
          selectedCEIds: []
        },
        timelineState: {
          secondsPerPixel: 0
        },
        dragonflyState: {
          currentTime: 0
        }
      }
    },
    _v9 = (0, _v2.createSlice)({
      name: "overlay",
      initialState: _v8,
      reducers: {
        openOverlayEditorAction: (_v0, _v1) => {
          let {
            overlayId: _v2,
            overlayName: _v3,
            storyboardLayers: _v4,
            historyStateOnSave: _v5,
            historyStateOnDiscard: _v6,
            inspectorState: _v7,
            selectionState: _v8,
            timelineState: _v9,
            linkedElementId: _v10,
            dragonflyState: _v11
          } = _v1.payload;
          _v0.isEditingOverlay = !0, _v0.activeOverlayId = _v2, _v0.activeOverlayName = _v3, _v0.linkedElementId = _v10, _v0.editorBackup.storyboardLayers = _v4, _v0.editorBackup.historyStateOnSave = _v5, _v0.editorBackup.historyStateOnDiscard = _v6, _v0.editorBackup.inspectorState = _v7, _v0.editorBackup.dragonflyState = _v11, _v0.editorBackup.selectionState = _v8, _v0.editorBackup.timelineState = _v9;
        },
        closeOverlayEditorAction: () => _v8,
        updateOverlayNameAction: (_v0, _v1) => {
          _v0.activeOverlayName = _v1.payload;
        },
        setIsOverlayTemplateSavingAction: (_v0, _v1) => {
          _v0.isOverlayTemplateSaving = _v1.payload;
        },
        setIsEnteringOrExitingOverlayEditorAction: (_v0, _v1) => {
          _v0.isEnteringOrExitingOverlayEditor = _v1.payload;
        },
        setIsApplyingOverlayTemplateAction: (_v0, _v1) => {
          _v0.isApplyingOverlayTemplate = _v1.payload;
        },
        removeTimeTriggerFromMainTimelineAction: (_v0, _v1) => {
          let {
            timeTriggerId: _v2
          } = _v1.payload;
          _v0.editorBackup.storyboardLayers = _v0.editorBackup.storyboardLayers.map(_v0 => _v0.type === _v3.LayerType.TIME_TRIGGERS ? {
            ..._v0,
            composition: _v0.composition.filter(_v0 => _v0.id !== _v2)
          } : _v0);
        }
      }
    }),
    {
      openOverlayEditorAction: _v10,
      closeOverlayEditorAction: _v11,
      updateOverlayNameAction: _v12,
      setIsOverlayTemplateSavingAction: _v13,
      setIsEnteringOrExitingOverlayEditorAction: _v14,
      setIsApplyingOverlayTemplateAction: _v15,
      removeTimeTriggerFromMainTimelineAction: _v16
    } = _v9.actions,
    _v17 = _v9.reducer,
    _v18 = (0, _v1.createSelector)(_v0 => _v0, _v6.isInteractiveSelector, (_v0, _v1) => _v1 && _v0.interactiveOverlay.isEditingOverlay && "" !== _v0.interactiveOverlay.activeOverlayId),
    _v19 = (0, _v1.createSelector)(_v0 => _v0.interactiveOverlay.isEditingOverlay, _v7.nonHiddenLayersSelector, (_v0, _v1) => _v0 ? _v1.filter(_v0 => _v0.type !== _v3.LayerType.INTERACTIVE_BACKGROUND_VIDEO) : _v1),
    _v20 = (0, _v1.createSelector)(_v19, _v0 => _v0.length > 0),
    _v21 = _v6.isInteractiveSelector;
  _v0.s(["activeOverlayIdSelector", 0, _v0 => _v0.interactiveOverlay.activeOverlayId, "backupCurrentTimeSelector", 0, _v0 => _v0.interactiveOverlay.editorBackup.dragonflyState.currentTime, "backupLayersDurationSelector", 0, _v0 => (0, _v5.getDurationFromLayers)(_v0.interactiveOverlay.editorBackup.storyboardLayers), "closeOverlayEditorAction", 0, _v11, "default", 0, _v17, "editorBackupLayersSelector", 0, _v0 => _v0.interactiveOverlay.editorBackup.storyboardLayers, "hasUnsavedOverlayChangesSelector", 0, _v0 => _v0.interactiveOverlay.isEditingOverlay && _v0.history.undoSnapshots.length > 0, "hasVisibleLayersOnTimelineSelector", 0, _v20, "isApplyingTemplateSelector", 0, _v0 => _v0.interactiveOverlay.isApplyingOverlayTemplate, "isEditingInteractiveOverlaySelector", 0, _v18, "isEditingOverlaySelector", 0, _v0 => _v0.interactiveOverlay.isEditingOverlay, "isEditorUITransitioningAllowedSelector", 0, _v21, "isEditorUITransitioningSelector", 0, _v0 => _v0.interactiveOverlay.isEnteringOrExitingOverlayEditor, "isSavingOverlayTemplateSelector", 0, _v0 => _v0.interactiveOverlay.isOverlayTemplateSaving, "openOverlayEditorAction", 0, _v10, "removeTimeTriggerFromMainTimelineAction", 0, _v16, "setIsApplyingOverlayTemplateAction", 0, _v15, "setIsEnteringOrExitingOverlayEditorAction", 0, _v14, "setIsOverlayTemplateSavingAction", 0, _v13, "updateOverlayNameAction", 0, _v12]);
}