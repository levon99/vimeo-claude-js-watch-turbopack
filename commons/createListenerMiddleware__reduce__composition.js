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
    _v10 = _v0.i(0);
  let _v11 = (0, _v1.createListenerMiddleware)(),
    _v12 = (_v0, _v1) => _v0.reduce((_v0, _v1, _v2) => (_v1.composition.forEach(_v0 => {
      if ((0, _v4.isVideoElement)(_v0) && _v1[_v0.sourceHash]) {
        let {
          sourceHash: _v0,
          timing: _v1,
          compositionTiming: _v2,
          id: _v3,
          muted: _v4
        } = _v0;
        _v4 || _v0.push({
          sourceHash: _v0,
          layerIndex: _v2,
          id: _v3,
          timing: _v1,
          compositionTiming: _v2
        });
      }
    }), _v0), []).sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start);
  _v11.startListening({
    matcher: (0, _v1.isAnyOf)(_v9.addElementsToLayersWithOffsetMapAction, _v9.updateStoryboardAction, _v9.resetStoryboardAction, _v9.setLayersAction, _v9.deleteLayerAction, _v9.deleteAllElementsAction, _v9.updateMediaElementsWithSameSource, _v9.changeElementLayerByOffsetAction, _v9.addElementToLayerWithOffsetAction, _v9.addElementToLayerAction, _v9.splitElementsAction, _v9.addElementAction, _v9.addIntroElementAction, _v9.addOutroElementAction, _v9.deleteTranscriptSelectionAction, _v9.bulkRemoveTranscriptItemsAction, _v9.updateLayerWithBulkChangesAction, _v8.removeInspectorHistoryStepsAction, _v8.openInspectorAction, _v9.removeElementsBySourceHashAction, _v9.updateElementsAction, _v9.deleteElementsAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getState: _v3
        } = _v1,
        _v4 = _v3();
      if ((0, _v8.currentInspectorSelector)(_v4) === _v3.InspectorType.TRANSCRIPT) {
        let _v0 = _v12(_v4.storyboard.layers, (0, _v5.createSourceMap)(_v4.storyboard.sources.filter(_v0 => (0, _v6.isSourceValidForTranscript)(_v0))));
        _v2((0, _v10.setTranscribableElementTimings)(_v0));
      }
    }
  }), _v11.startListening({
    matcher: (0, _v1.isAnyOf)(_v9.deleteCompositionElementAction, _v9.updateElementAction, _v9.replaceElementAction, _v9.deleteElementAction),
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2,
          getOriginalState: _v3,
          getState: _v4
        } = _v1,
        {
          ceId: _v5
        } = _v0.payload,
        _v6 = _v3(),
        _v7 = _v4();
      if ((0, _v8.currentInspectorSelector)(_v6) === _v3.InspectorType.TRANSCRIPT) {
        let _v0 = (0, _v5.createSourceMap)(_v6.storyboard.sources.filter(_v0 => (0, _v6.isSourceValidForTranscript)(_v0))),
          _v1 = (0, _v5.getElementByIdFromStoryboard)(_v5, _v6.storyboard);
        if ((0, _v4.isVideoElement)(_v1) && _v0[_v1.sourceHash]) {
          let _v0 = _v12(_v7.storyboard.layers, _v0);
          _v2((0, _v10.setTranscribableElementTimings)(_v0));
        }
      }
    }
  }), _v11.startListening({
    matcher: (0, _v1.isAnyOf)(_v9.updateSourceAction),
    effect: (_v0, _v1) => {
      let {
          dispatch: _v2
        } = _v1,
        {
          hash: _v3,
          source: {
            hash: _v4
          }
        } = _v0.payload;
      _v3 !== _v4 && _v2((0, _v10.updateSourceHashForTranscribableElementTimings)({
        oldSourceHash: _v3,
        newSourceHash: _v4
      }));
    }
  }), _v11.startListening({
    matcher: _v7.storyboardApi.endpoints.fetchStoryboard.matchFulfilled,
    effect: async (_v0, _v1) => {
      let {
          dispatch: _v2
        } = _v1,
        {
          storyboard: _v3
        } = _v0.payload;
      _v3.sources.forEach(async _v0 => {
        if (!(0, _v6.isSourceValidForTranscript)(_v0)) return;
        let _v1 = _v0.transcriptions?.[0];
        if (_v1) {
          let _v0 = {
            id: _v1.id,
            status: _v1.status,
            words: []
          };
          _v1.url && (_v0.words = await (0, _v6.fetchTranscriptWordsUrl)(_v1.url)), _v2((0, _v10.setTranscriptForSource)({
            sourceHash: _v0.hash,
            transcript: _v0
          })), _v2((0, _v10.setIsShowDeletedWordsForSourceAction)({
            sourceHash: _v0.hash,
            isShowDeletedWords: _v2.DEFAULT_IS_SHOW_DELETED_WORDS
          }));
        }
      });
    }
  });
  let _v13 = _v11.middleware;
  _v0.s(["default", 0, _v13]);
}