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
    _v13 = _v0.i(0);
  _v0.s(["useReplaceElement", 0, () => {
    let _v0 = (0, _v10.useAppDispatch)(),
      _v1 = (0, _v10.useAppSelector)(_v9.isReplaceToolbarOpenSelector),
      _v2 = (0, _v10.useAppSelector)(_v5.currentInspectorSelector),
      _v3 = (0, _v10.useAppSelector)(_v4.isInteractiveSelector),
      _v4 = (0, _v10.useAppSelector)(_v6.isEditingOverlaySelector),
      {
        pause: _v5
      } = (0, _v3.useDragonfly)(),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v5(), _v0((0, _v9.showToolbarAction)(_v12.ToolbarType.REPLACE)), _v2 !== _v11.InspectorType.HOTSPOTS && _v3 && ((0, _v13.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type !== _v2.HotspotActionType.NONE || !_v4) ? _v0((0, _v5.openInspectorAction)({
          inspectorType: _v11.InspectorType.HOTSPOTS
        })) : _v2 === _v11.InspectorType.MEDIA || (0, _v13.isImageHotspot)(_v0) && _v0?.interactiveHotspot.action.type !== _v2.HotspotActionType.NONE || _v0((0, _v5.openInspectorAction)({
          inspectorType: _v11.InspectorType.MEDIA
        }));
      }, [_v2, _v0, _v4, _v3, _v5]);
    return {
      isReplacing: _v1,
      enterReplaceMode: _v6,
      exitReplaceMode: (0, _v1.useCallback)(_v0 => {
        _v0((0, _v9.showToolbarAction)((0, _v13.getToolbarTypeForElement)(_v0))), _v0((0, _v7.clearLastElementAction)());
      }, [_v0]),
      replaceElement: (0, _v1.useCallback)(({
        selectedElement: _v0,
        newElement: _v1
      }) => {
        if (!_v0 || !_v1) return;
        _v1.id = _v0.id, _v1.zindex = _v0.zindex;
        let _v2 = _v0.compositionTiming.end - _v0.compositionTiming.start;
        (0, _v13.isVideoElement)(_v1) && (_v2 = Math.min(_v2, _v1.timing.endTime - _v1.timing.startTime));
        let _v3 = {
          ..._v1,
          compositionTiming: {
            start: _v0.compositionTiming.start,
            end: _v0.compositionTiming.start + _v2
          },
          ...((0, _v13.isVideoElement)(_v1) && {
            timing: {
              startTime: 0,
              endTime: _v2
            }
          }),
          ...((0, _v13.isVideoElement)(_v0) && (0, _v13.isVideoElement)(_v1) && {
            effects: _v0.effects
          }),
          ...((0, _v13.isImageElement)(_v0) && (0, _v13.isImageElement)(_v1) && {
            layers: _v0.layers
          }),
          ...((0, _v13.isGraphicElement)(_v0) && (0, _v13.isGraphicElement)(_v1) && {
            rotate: _v0.rotate,
            flip: _v0.flip,
            style: _v0.style,
            bgAlpha: _v0.bgAlpha,
            primaryColor: _v1.primaryColor && _v0.primaryColor ? _v0.primaryColor : _v1.primaryColor,
            secondaryColor: _v1.secondaryColor && _v0.secondaryColor ? _v0.secondaryColor : _v1.secondaryColor
          })
        };
        (0, _v13.isMediaElement)(_v3) && (0, _v13.isMediaElement)(_v0) && (_v0.animationMid && (0, _v13.isImageElement)(_v0) && (0, _v13.isImageElement)(_v3) && (_v3.animationMid = _v0.animationMid), _v0.animationOut && (_v3.animationOut = _v0.animationOut), _v0.animationName && (_v3.animationName = _v0.animationName)), (0, _v13.isImageHotspot)(_v0) && (0, _v13.isImageElement)(_v1) && (_v3.bgAlpha = _v0.bgAlpha, _v3.rotate = _v0.rotate, _v3.flip = _v0.flip, _v3.interactiveHotspot = _v0.interactiveHotspot, _v1.primaryColor && (_v3.primaryColor = _v0.primaryColor ?? _v1.primaryColor), _v1.secondaryColor && (_v3.secondaryColor = _v0.secondaryColor ?? _v1.secondaryColor)), _v0((0, _v8.replaceElementAction)({
          ceId: _v0.id,
          element: _v3
        }));
      }, [_v0])
    };
  }]);
}