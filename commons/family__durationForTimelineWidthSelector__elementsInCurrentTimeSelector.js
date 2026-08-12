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
    _v24 = _v0.i(0);
  let _v25 = (0, _v1.createSelector)(_v0 => _v0.storyboard.branding.font, _v0 => _v0.selection.lastSelections.font, (_v0, _v1) => _v1 || _v0 || _v8.DEFAULT_FONT),
    _v26 = [_v10.ToolbarButtons.HOVER_STATE_CONTROLLER],
    _v27 = (0, _v1.createSelector)(_v24.selectedToolbarButtonSelector, _v0 => !!(_v0 && _v26.includes(_v0))),
    _v28 = (0, _v1.createSelector)(_v0 => _v0.storyboard.layers, _v19.isEditingOverlaySelector, (_v0, _v1) => _v1 ? (0, _v14.getDurationFromLayers)(_v0.slice(1)) : 0),
    _v29 = (0, _v1.createSelector)(_v22.isElementsLoadingSelector, _v20.isLoadingElementInUseSelector, _v19.isApplyingTemplateSelector, (_v0, _v1, _v2) => _v0 || _v1 || _v2),
    _v30 = (0, _v1.createSelector)([_v22.layersSelector, _v21.selectedElementsIdsSelector, _v16.currentTimeSelector], (_v0, _v1, _v2) => {
      let _v3 = (0, _v14.getDurationFromLayers)(_v0);
      return (0, _v13.isSomeSelectedElementInCurrentTime)(_v1, _v0, _v2, _v3);
    }),
    _v31 = (0, _v1.createSelector)([_v22.layersSelector, _v21.selectedElementsIdsSelector, _v16.currentTimeSelector], (_v0, _v1, _v2) => {
      let _v3 = (0, _v14.getDurationFromLayers)(_v0);
      return (0, _v13.isSomeSelectedElementInCurrentTime)(_v1, _v0, _v2, _v3, !0);
    }),
    _v32 = (0, _v1.createSelector)([_v22.layersSelector, _v16.currentTimeSelector, _v28], (_v0, _v1, _v2) => {
      let _v3 = _v2 || (0, _v14.getDurationFromLayers)(_v0),
        _v4 = [];
      return (_v0.forEach(_v0 => {
        _v0.type !== _v5.LayerType.HIDDEN && _v0.composition.forEach(_v0 => {
          (0, _v11.isInCurrentTime)(_v1, _v0, _v3) && _v4.push(_v0.id);
        });
      }), 0 === _v4.length) ? null : _v4;
    }),
    _v33 = (0, _v1.createSelector)([_v22.layersSelector, _v32], (_v0, _v1) => {
      if (!_v1) return null;
      let _v2 = Array(_v1.length),
        _v3 = new Map(_v1.map((_v0, _v1) => [_v0, _v1]));
      for (let _v0 of _v0) for (let _v0 of _v0.composition) _v3.has(_v0.id) && (_v2[_v3.get(_v0.id)] = _v0);
      return _v2.filter(_v0 => void 0 !== _v0);
    }),
    _v34 = (0, _v1.createSelector)(_v22.durationSelector, _v19.backupLayersDurationSelector, _v19.isEditingOverlaySelector, (_v0, _v1, _v2) => _v2 ? _v1 : _v0),
    _v35 = (0, _v1.createSelector)([_v22.allLayersSelector, _v22.interactiveOverlaysSelector, _v19.isEditingInteractiveOverlaySelector, _v19.editorBackupLayersSelector, _v19.activeOverlayIdSelector], (_v0, _v1, _v2, _v3, _v4) => {
      let _v5,
        _v6 = [],
        _v7 = new Map(),
        _v8 = new Map(),
        _v9 = 0,
        _v10 = 0;
      for (let _v0 of _v2 ? _v3 : _v0) for (let _v0 of _v0.composition) (0, _v11.isPollElement)(_v0) ? (_v6.push({
        poll: _v0,
        adjustedStartTime: _v0.compositionTiming.start,
        compositionStartTime: _v0.compositionTiming.start
      }), _v0.correctAnswerId ? _v10++ : _v9++) : (0, _v11.isOverlayElement)(_v0) ? _v7.set(_v0.overlayId, _v0) : (0, _v11.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type === _v4.HotspotActionType.SHOW_OVERLAY && _v8.set(_v0.interactiveHotspot.action.overlayId, _v0);
      for (let _v0 of (_v5 = _v4 ? _v1.filter(_v0 => _v0.id !== _v4) : _v1, _v4 && _v5.push({
        interactiveLayers: _v0,
        id: _v4
      }), _v5)) for (let _v0 of _v0.interactiveLayers) for (let _v0 of _v0.composition) if ((0, _v11.isPollElement)(_v0)) {
        let _v0 = _v8.get(_v0.id),
          _v1 = _v0?.compositionTiming.start,
          _v2 = _v7.get(_v0.id),
          _v3 = _v2?.compositionTiming.start;
        _v6.push({
          poll: _v0,
          adjustedStartTime: _v1 ?? (_v3 ?? 0) + _v0.compositionTiming.start,
          compositionStartTime: _v0.compositionTiming.start,
          overlayId: _v0.id,
          linkedElementId: _v0?.id ?? _v2?.id
        }), _v0.correctAnswerId ? _v10++ : _v9++;
      }
      return {
        pollList: _v6.sort((_v0, _v1) => {
          let _v2 = _v0.adjustedStartTime - _v1.adjustedStartTime;
          return 0 !== _v2 ? _v2 : _v0.compositionStartTime - _v1.compositionStartTime;
        }),
        pollQuestionCount: _v9,
        quizQuestionCount: _v10
      };
    }),
    _v36 = (0, _v1.createSelector)(_v35, ({
      pollList: _v0
    }) => _v0),
    _v37 = (0, _v1.createSelector)(_v35, ({
      quizQuestionCount: _v0
    }) => _v0),
    _v38 = (0, _v1.createSelector)(_v35, ({
      pollQuestionCount: _v0
    }) => _v0),
    _v39 = (0, _v1.createSelector)(_v37, _v38, (_v0, _v1) => _v0 + _v1 > 0),
    _v40 = (0, _v1.createSelector)([_v22.allLayersSelector, _v19.isEditingInteractiveOverlaySelector, _v19.editorBackupLayersSelector], (_v0, _v1, _v2) => {
      let _v3 = (_v1 ? _v2 : _v0).find(_v0 => _v0.type === _v5.LayerType.TIME_TRIGGERS);
      if (_v3) {
        for (let _v0 of _v3.composition) if ((0, _v11.isTimeTriggerElement)(_v0) && _v0.action.type === _v6.TimeTriggerActionType.SHOW_OVERLAY) return _v0;
      }
    }),
    _v41 = (0, _v1.createSelector)(_v40, _v0 => !!_v0),
    _v42 = (0, _v1.createSelector)(_v36, _v0 => _v0.some(({
      poll: _v0
    }) => _v0.variant === _v7.POLL_VARIANT.QUIZ));
  (0, _v1.createSelector)(_v22.nonHiddenLayersSelector, _v0 => {
    let _v1 = _v0[_v0.length - 1];
    return _v1?.type === _v5.LayerType.TIME_TRIGGERS;
  });
  let _v43 = (0, _v1.createSelector)(_v22.nonHiddenLayersSelector, _v0 => _v0[_v0.length - 1]?.id),
    _v44 = (0, _v1.createSelector)(_v22.nonHiddenLayersSelector, _v0 => _v0[0]?.id),
    _v45 = (0, _v1.createSelector)([_v17.isInteractiveSelector, _v22.durationSelector, _v28, _v23.secondsPerPixelSelector], (_v0, _v1, _v2, _v3) => (_v2 || _v1) * (_v0 ? _v9.INTERACTIVE_TIMELINE_DURATION_SCALE_FACTOR : _v9.TIMELINE_DURATION_SCALE_FACTOR) * _v3 * 60),
    _v46 = (0, _v1.createSelector)([_v22.durationSelector, _v28], (_v0, _v1) => 0 === (_v1 || _v0)),
    _v47 = (0, _v1.createSelector)([_v22.durationSelector, _v28], (_v0, _v1) => _v1 || _v0),
    _v48 = {
      fit: 0,
      min: 0,
      max: _v9.MAX_ZOOM_IN,
      step: 0
    },
    _v49 = (0, _v1.createSelector)([_v22.durationSelector, _v28, _v23.timelineSizeSelector, _v17.isInteractiveSelector, _v19.isEditingOverlaySelector], (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = _v1 || _v0;
      if (0 === _v5 || !_v2.width) return _v48;
      let _v6 = Math.max(_v9.TIMELINE_MIN_FIT_RATIO, _v5),
        _v7 = _v2.width - _v9.TIMELINE_SCROLL_WIDTH,
        _v8 = (0, _v15.getSecondsPerPixelsForTimelineFit)(_v6, _v7),
        _v9 = (0, _v15.getMinZoom)({
          fit: _v8,
          isEditingOverlay: _v4,
          isInteractive: _v3,
          timelineContentWidth: _v7,
          videoDuration: _v0
        });
      return {
        fit: _v8,
        min: _v9,
        max: _v9.MAX_ZOOM_IN,
        step: (0, _v15.getZoomStepValue)(_v9)
      };
    }, {
      memoizeOptions: {
        maxSize: 10,
        resultEqualityCheck: _v3.shallowEqual
      }
    }),
    _v50 = (0, _v1.createSelector)(_v49, _v0 => _v0.min),
    _v51 = (0, _v1.createSelector)(_v49, _v0 => _v0.fit),
    _v52 = (0, _v1.createSelector)(_v51, _v0 => _v0 > 0),
    _v53 = (0, _v1.createSelector)([_v23.secondsPerPixelSelector, _v50], (_v0, _v1) => (0, _v15.getZoomValueFromSecondsPerPixel)({
      min: _v1,
      secondsPerPixel: _v0
    })),
    _v54 = (0, _v1.createSelector)([_v21.selectedElementsIdsSelector, _v22.nonHiddenLayersSelector], (_v0, _v1) => {
      let _v2 = !1;
      return 0 !== _v0.length && (_v0.forEach(_v0 => {
        let _v1 = (0, _v12.getLayerDataByCeId)(_v0, _v1).layerIndex,
          _v2 = _v1[_v1],
          _v3 = _v2?.composition.filter(_v0 => !_v0.includes(_v0.id));
        _v2 || (_v2 = _v1 < _v1.length - 1 || _v1 === _v1.length - 1 && _v3?.length > 0);
      }), _v2);
    }),
    _v55 = (0, _v1.createSelector)([_v21.selectedElementsIdsSelector, _v22.nonHiddenLayersSelector], (_v0, _v1) => {
      let _v2 = !1;
      return 0 !== _v0.length && (_v0.forEach(_v0 => {
        let _v1 = (0, _v12.getLayerDataByCeId)(_v0, _v1).layerIndex,
          _v2 = _v1[_v1],
          _v3 = _v2?.composition.filter(_v0 => !_v0.includes(_v0.id));
        _v2 || (_v2 = _v1 > 0 || 0 === _v1 && _v3?.length > 0);
      }), _v2);
    }),
    _v56 = (0, _v1.createSelector)([_v17.isInteractiveSelector, _v22.nonHiddenLayersSelector, _v16.currentTimeSelector], (_v0, _v1, _v2) => !_v0 && _v1.some(({
      composition: _v0
    }) => _v0.some(({
      compositionTiming: {
        start: _v0,
        end: _v1
      }
    }) => _v0 < _v2 && _v1 > _v2))),
    _v57 = (0, _v1.createSelector)([_v22.nonHiddenLayersSelector, _v18.fontsSelector], (_v0, _v1) => {
      let _v2 = (0, _v13.getAllUsedFonts)(_v0),
        _v3 = [];
      return _v1 && _v2.forEach(_v0 => !!_v1[_v0] && _v3.push(_v1[_v0])), (0, _v2.default)(_v3, "family");
    });
  _v0.s(["durationForTimelineWidthSelector", 0, _v47, "elementsInCurrentTimeSelector", 0, _v33, "firstLayerIdSelector", 0, _v44, "fitZoomValueSelector", 0, _v51, "fullVideoDurationSelector", 0, _v34, "getActiveOverlaySelector", 0, _v0 => {
    if (_v0.interactiveOverlay.activeOverlayId) return _v0.storyboard.interactiveOverlays.find(_v0 => _v0.id === _v0.interactiveOverlay.activeOverlayId);
  }, "hasPollOrQuizQuestionsSelector", 0, _v39, "hasQuizzesSelector", 0, _v42, "hasTimeTriggerScorecardSelector", 0, _v41, "isCanBringSelectedForwardSelector", 0, _v54, "isCanSendSelectedBackwardSelector", 0, _v55, "isDraggingAndResizingDisabledSelector", 0, _v27, "isHaveFitZoomValueSelector", 0, _v52, "isLoadingMediaOrApplyingTemplateSelector", 0, _v29, "isSomeSelectedElementsInCurrentTimeSelector", 0, _v30, "isSomeSelectedNonSoundElementsInCurrentTimeSelector", 0, _v31, "isSplitEnabledSelector", 0, _v56, "isTimelineEmptySelector", 0, _v46, "lastLayerIdSelector", 0, _v43, "minZoomValueSelector", 0, _v50, "newElementFontSelector", 0, _v25, "overlayEditorDurationSelector", 0, _v28, "pollListSelector", 0, _v36, "quizQuestionCountSelector", 0, _v37, "scaledWidthByDurationSelector", 0, _v45, "scorecardTimeTriggerSelector", 0, _v40, "usedInProjectFontsSelector", 0, _v57, "zoomValueSelector", 0, _v53]);
}