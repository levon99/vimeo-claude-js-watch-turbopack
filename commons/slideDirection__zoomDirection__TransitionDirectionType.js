{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
    SLIDE: "slideDirection",
    ZOOM: "zoomDirection"
  };
  _v0.s(["TransitionDirectionType", 0, _v6], 0);
  let _v7 = (_v0, _v1) => {
      let _v2 = _v0.transInDuration,
        _v3 = _v0.transOutDuration,
        _v4 = _v0.overlapDuration,
        _v5 = _v2 + _v3 - _v4,
        _v6 = (0, _v4.toNearestFrame)(100 * _v4 / _v5 * _v1 / 100);
      return {
        transOutDuration: (0, _v4.toNearestFrame)(100 * _v3 / _v5 * _v1 / 100),
        transInDuration: (0, _v4.toNearestFrame)(100 * _v2 / _v5 * _v1 / 100),
        overlapDuration: _v6
      };
    },
    _v8 = (_v0, _v1, _v2) => {
      let _v3 = _v0,
        _v4 = Math.min(_v1.compositionTiming.end - _v1.compositionTiming.start, _v2.compositionTiming.end - _v2.compositionTiming.start);
      return _v0 < _v5.MIN_TRANSITION_DURATION && (_v3 = _v5.MIN_TRANSITION_DURATION), _v3 > _v5.MAX_TRANSITION_DURATION && (_v3 = _v5.MAX_TRANSITION_DURATION), _v3 / 2 > _v4 && (_v3 = 2 * _v4), _v3;
    },
    _v9 = (_v0, _v1, _v2, _v3, _v4) => {
      let _v5 = {
        primaryColor: void 0,
        secondaryColor: void 0
      };
      return _v0.overlay?.primaryColor && (_v5.primaryColor = _v2?.outElement.controls.primaryColor || _v3?.primaryColor || _v1.primary, _v4?.secondaryColor && (_v5.secondaryColor = _v4.secondaryColor)), _v0.overlay?.secondaryColor && (_v5.secondaryColor = _v2?.outElement.controls.secondaryColor || _v3?.secondaryColor || _v1.secondary, _v4?.primaryColor && (_v5.primaryColor = _v4.primaryColor)), _v5;
    };
  _v0.s(["createTransitionData", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = {
        outElement: {
          elementId: _v2.id,
          controls: {
            overlapDuration: _v0.metaData.overlapDuration,
            outMotionType: _v0.metaData.outMotionType,
            transOutDuration: _v0.metaData.transOutDuration,
            ..._v9(_v0, _v3)
          },
          overlay: _v0.overlay?.transitionOverlayFile
        },
        inElement: {
          elementId: _v1.id,
          controls: {
            overlapDuration: _v0.metaData.overlapDuration,
            inMotionType: _v0.metaData.inMotionType,
            transInDuration: _v0.metaData.transInDuration,
            ..._v9(_v0, _v3)
          },
          overlay: _v0.overlay?.transitionOverlayFile
        }
      },
      _v6 = _v4?.duration,
      _v7 = _v4?.primaryColor,
      _v8 = _v4?.secondaryColor;
    if (_v6) {
      let {
        transInDuration: _v0,
        transOutDuration: _v1,
        overlapDuration: _v2
      } = _v7({
        transInDuration: _v0.metaData.transInDuration,
        transOutDuration: _v0.metaData.transOutDuration,
        overlapDuration: _v0.metaData.overlapDuration
      }, _v8(_v6, _v2, _v1));
      _v5?.inElement?.controls && _v5?.outElement?.controls && (_v5.inElement.controls.overlapDuration = _v2, _v5.outElement.controls.overlapDuration = _v2, _v5.inElement.controls.transInDuration = _v0, _v5.outElement.controls.transOutDuration = _v1);
    }
    return _v7 && _v0.overlay?.primaryColor && _v5?.inElement?.controls && _v5?.outElement?.controls && (_v5.inElement.controls.primaryColor = _v7, _v5.outElement.controls.primaryColor = _v7), _v8 && _v0.overlay?.secondaryColor && _v5?.inElement?.controls && _v5?.outElement?.controls && (_v5.inElement.controls.secondaryColor = _v8, _v5.outElement.controls.secondaryColor = _v8), _v5;
  }, "getColorPropertiesForElement", 0, _v9, "getDirectionType", 0, _v0 => {
    switch (_v0) {
      case _v2.TransitionDirection.IN:
      case _v2.TransitionDirection.OUT:
        return _v6.ZOOM;
      case _v2.TransitionDirection.UP:
      case _v2.TransitionDirection.DOWN:
      case _v2.TransitionDirection.LEFT:
      case _v2.TransitionDirection.RIGHT:
        return _v6.SLIDE;
      default:
        return null;
    }
  }, "getNewControlsFromDuration", 0, _v7, "getNormalisedDuration", 0, _v8, "getTransitionDurationFromControls", 0, _v0 => (_v0?.outElement?.controls?.transOutDuration || 0) + (_v0?.inElement?.controls?.transInDuration || 0) - (_v0?.outElement?.controls?.overlapDuration || 0), "getTransitionsForElementInLayer", 0, (_v0, _v1) => {
    let _v2 = [];
    for (let _v0 = 0; _v0 < _v0.composition.length; _v0++) {
      let _v0 = _v0.composition[_v0];
      if (_v0.type === _v1.CompositionElementType.TRANSITION && _v0.outElement.elementId === _v1 ? _v2.push({
        transitionElement: _v0,
        isOut: !0
      }) : _v0.type === _v1.CompositionElementType.TRANSITION && _v0.inElement.elementId === _v1 && _v2.push({
        transitionElement: _v0,
        isIn: !0
      }), _v2.length > 1) break;
    }
    return _v2;
  }, "isElementAFreeForTransition", 0, (_v0, _v1, _v2) => {
    if (!_v1 || !(0, _v3.isMediaElement)(_v0) || !(0, _v3.isMediaElement)(_v1)) return !1;
    let _v3 = _v0.compositionTiming,
      _v4 = _v1.compositionTiming;
    if (_v3.end !== _v4.start) return !1;
    let _v5 = _v3.end - _v3.start,
      _v6 = _v4.end - _v4.start;
    return !(_v5 < _v5.MIN_TRANSITION_ELEMENT_DURATION) && !(_v6 < _v5.MIN_TRANSITION_ELEMENT_DURATION) && !_v2.some(_v0 => _v0.outElement.elementId === _v0.id);
  }, "isShowVisualRepresentation", 0, (_v0, _v1, _v2) => {
    if (!_v1) return !1;
    let _v3 = _v0.compositionTiming.end - _v0.compositionTiming.start,
      _v4 = _v1.compositionTiming.end - _v1.compositionTiming.start;
    return 60 * _v3 * _v2 > _v5.MIN_VISUAL_TRANSITION_ELEMENT_PX && 60 * _v4 * _v2 > _v5.MIN_VISUAL_TRANSITION_ELEMENT_PX;
  }], 0);
}