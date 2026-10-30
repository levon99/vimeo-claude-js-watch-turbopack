{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    START: "start",
    END: "end",
    PLAYHEAD: "playhead"
  };
  _v0.s(["SnapTimePointType", 0, _v3], 0);
  let _v4 = {
      secondsPerPixel: 0,
      isVerticalScrollDisabled: !1,
      isDropAllowed: !0,
      rect: {
        width: 0,
        height: 0,
        x: 0,
        y: 0
      },
      guides: {
        isSnap: !0,
        snapPoints: [],
        collisionPoints: []
      },
      dndPreview: {
        compositionTimings: {}
      }
    },
    _v5 = (0, _v2.createSlice)({
      name: "timeline",
      initialState: _v4,
      reducers: {
        setSecondsPerPixelAction: (_v0, _v1) => {
          let {
            secondsPerPixel: _v2
          } = _v1.payload;
          _v0.secondsPerPixel = _v2;
        },
        zoomToAddedElementAction: (_v0, _v1) => {
          _v0.secondsPerPixel = _v1.payload.secondsPerPixel, _v0.addedElementTiming = _v1.payload.compositionTiming;
        },
        clearAddedElementTimingAction: _v0 => {
          _v0.addedElementTiming = void 0;
        },
        showTransitionHintsAction: (_v0, _v1) => {
          _v0.transitionHintElementIds = _v1.payload;
        },
        hideTransitionHintAction: (_v0, _v1) => {
          _v0.transitionHintElementIds = _v0.transitionHintElementIds?.filter(_v0 => _v0 !== _v1.payload);
        },
        setIsTimelineVerticalScrollDisabled: (_v0, _v1) => {
          _v0.isVerticalScrollDisabled = _v1.payload;
        },
        setTimelineSizeAction: (_v0, _v1) => {
          let {
            width: _v2,
            height: _v3,
            x: _v4,
            y: _v5
          } = _v1.payload.rect;
          _v0.rect = {
            width: _v2,
            height: _v3,
            x: _v4,
            y: _v5
          };
        },
        setSnapPointsTimelineAction: (_v0, _v1) => {
          _v0.guides.snapPoints = _v1.payload;
        },
        setCollisionPointsTimelineAction: (_v0, _v1) => {
          _v0.guides.collisionPoints = _v1.payload;
        },
        resetDndPreview: _v0 => {
          _v0.dndPreview = {
            compositionTimings: {}
          };
        },
        setDndPreview: (_v0, _v1) => {
          let {
            layerId: _v2,
            compositionTiming: _v3,
            thumbnailUrl: _v4
          } = _v1.payload;
          _v0.dndPreview.compositionTimings[_v2] = _v3, _v0.dndPreview.thumbnailUrl = _v4;
        },
        resetTimelineState: _v0 => ({
          ..._v4,
          rect: _v0.rect
        }),
        setIsDropAllowed: (_v0, _v1) => {
          _v0.isDropAllowed = _v1.payload;
        }
      }
    }),
    {
      setSecondsPerPixelAction: _v6,
      zoomToAddedElementAction: _v7,
      clearAddedElementTimingAction: _v8,
      showTransitionHintsAction: _v9,
      hideTransitionHintAction: _v10,
      setTimelineSizeAction: _v11,
      setSnapPointsTimelineAction: _v12,
      setCollisionPointsTimelineAction: _v13,
      setDndPreview: _v14,
      resetDndPreview: _v15,
      setIsTimelineVerticalScrollDisabled: _v16,
      resetTimelineState: _v17,
      setIsDropAllowed: _v18
    } = _v5.actions,
    _v19 = _v5.reducer,
    _v20 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => ({
      width: _v0.rect.width,
      height: _v0.rect.height,
      x: _v0.rect.x,
      y: _v0.rect.y
    })),
    _v21 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => _v0.secondsPerPixel),
    _v22 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => _v0.addedElementTiming),
    _v23 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => _v0.guides.snapPoints),
    _v24 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => _v0.guides.collisionPoints),
    _v25 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => [..._v0.guides.snapPoints, ..._v0.guides.collisionPoints].map(_v0 => _v0.type).filter(_v0 => _v0 === _v3.PLAYHEAD).length > 0),
    _v26 = (0, _v1.createSelector)(_v0 => _v0.timeline, _v0 => _v0.dndPreview);
  _v0.s(["activeTimelineCollisionPointsSelector", 0, _v24, "activeTimelineSnapPointsSelector", 0, _v23, "addedElementTimingSelector", 0, _v22, "clearAddedElementTimingAction", 0, _v8, "default", 0, _v19, "dndPreviewSelector", 0, _v26, "hideTransitionHintAction", 0, _v10, "isPlayheadInActiveSnapPointsSelector", 0, _v25, "isTransitionHintShownSelector", 0, (_v0, _v1) => _v0.timeline.transitionHintElementIds?.includes(_v1) ?? !1, "resetDndPreview", 0, _v15, "resetTimelineState", 0, _v17, "secondsPerPixelSelector", 0, _v21, "setCollisionPointsTimelineAction", 0, _v13, "setDndPreview", 0, _v14, "setIsDropAllowed", 0, _v18, "setIsTimelineVerticalScrollDisabled", 0, _v16, "setSecondsPerPixelAction", 0, _v6, "setSnapPointsTimelineAction", 0, _v12, "setTimelineSizeAction", 0, _v11, "showTransitionHintsAction", 0, _v9, "timelineSizeSelector", 0, _v20, "zoomToAddedElementAction", 0, _v7], 0);
}