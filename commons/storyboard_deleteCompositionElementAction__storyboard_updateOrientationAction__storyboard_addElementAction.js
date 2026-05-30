{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = ["storyboard/deleteCompositionElementAction", "storyboard/updateOrientationAction", "storyboard/addElementAction", "storyboard/addTransitionElementAction", "storyboard/updateElementAction", "storyboard/updateElementsAction", "storyboard/replaceElementAction", "storyboard/deleteElementAction", "storyboard/deleteElementsAction", "storyboard/deleteAllElementsAction", "storyboard/addAudioAction", "storyboard/addTimeTriggerAction", "storyboard/addIntroElementAction", "storyboard/addOutroElementAction", "storyboard/setBrandingColorsAction", "storyboard/changeElementLayerByOffsetAction", "storyboard/setCanvasColorAction", "storyboard/addElementToLayerWithOffsetAction", "storyboard/addElementsToLayersWithOffsetMapAction", "storyboard/addElementToLayerAction", "storyboard/deleteEmptyLayersAction", "storyboard/splitElementsAction", "storyboard/deleteTranscriptSelectionAction", "storyboard/bulkRemoveTranscriptItemsAction", "storyboard/removeElementsBySourceHashAction", "storyboard/updateLayerWithBulkChangesAction", "storyboard/addInteractiveOverlayAction", "storyboard/updateInteractiveOverlayAction"],
    _v5 = ["history/undoAction", "history/redoAction"];
  _v0.s(["historyMiddleware", 0, ({
    getState: _v0,
    dispatch: _v1
  }) => _v0 => _v0 => {
    if (_v4.includes(_v0.type) && !_v0.payload?.isIgnoreUndo) {
      let _v0 = _v0().storyboard;
      _v1((0, _v1.addUndoSnapshotAction)(_v0)), _v1((0, _v1.resetRedoAction)());
    }
    if (_v5.includes(_v0.type)) {
      let _v0 = (0, _v3.allElementsSelector)(_v0()).map(_v0 => _v0.id);
      (0, _v2.selectedElementsIdsSelector)(_v0()).forEach(_v0 => {
        _v0.includes(_v0) || _v1((0, _v2.deselectCEsAction)({
          ceIdsToRemove: [_v0]
        }));
      });
    }
    return _v0(_v0);
  }]);
}