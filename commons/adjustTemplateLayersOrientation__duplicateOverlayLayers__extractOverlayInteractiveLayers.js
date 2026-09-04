{
  "use strict";

  _v0.s(["adjustTemplateLayersOrientation", () => _v24, "duplicateOverlayLayers", () => _v22, "extractOverlayInteractiveLayers", () => _v19, "getDFStoryboardForOverlayEditor", () => _v23, "getElementsToPasteWithOverlayDuplication", () => _v25, "getOverlayById", () => _v18, "mutateOverlayElementAndLayersWhenExitingOverlayEditor", () => _v21, "unlinkOverlayFromElement", () => _v20], 0);
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
    _v17 = _v0.i(0);
  let _v18 = (_v0, _v1) => {
      let _v2 = _v0.find(_v0 => _v0.id === _v1);
      if (!_v2) throw Error(`Overlay with id ${_v1} not found`);
      return _v2;
    },
    _v19 = _v0 => _v0.filter(_v0 => _v0.type !== _v2.LayerType.INTERACTIVE_BACKGROUND_VIDEO),
    _v20 = _v0 => {
      if (((0, _v8.isImageHotspot)(_v0) || (0, _v8.isButtonElement)(_v0)) && _v0.interactiveHotspot.action.type === _v1.HotspotActionType.SHOW_OVERLAY) _v0.interactiveHotspot.action.overlayId = "";else if ((0, _v8.isOverlayElement)(_v0)) _v0.overlayId = "";else throw Error(`Cannot unlink overlay, unsupported element type ${_v0.type}`);
    },
    _v21 = ({
      layersToRestore: _v0,
      overlayElementIndex: _v1,
      overlayElementLayerIndex: _v2,
      overlayId: _v3,
      currentlyEditedOverlayLayers: _v4
    }) => {
      let _v5 = _v0[_v2].composition[_v1];
      _v5.overlayId || (_v5.overlayId = _v3);
      let _v6 = (0, _v17.getDurationFromLayers)(_v4),
        _v7 = _v0[0].composition[0].compositionTiming.end,
        _v8 = (0, _v17.getSafeTime)(_v5.compositionTiming.start + _v6, _v7);
      if (_v5.compositionTiming.end = _v8, _v0[_v2].composition.some(_v0 => _v0.id !== _v5.id && (0, _v17.isCompositionTimingOverlap)(_v0.compositionTiming, _v5.compositionTiming))) {
        let _v0 = (0, _v15.createLayer)([_v5], _v2.LayerType.VISUAL);
        (0, _v14.safeInsertLayers)({
          insertIndex: _v2,
          layers: _v0,
          newLayers: [_v0]
        }), _v0[_v2 + 1].composition.splice(_v1, 1);
      }
    },
    _v22 = _v0 => _v0.map(_v0 => {
      let _v1 = `layer-${(0, _v16.randomString)(5)}`,
        _v2 = _v0.composition.map(_v0 => {
          let _v1 = {
            ..._v0,
            id: (0, _v10.createUuidV4)()
          };
          if ((0, _v8.isInteractiveHotspot)(_v1)) _v1.interactiveHotspot = {
            ..._v1.interactiveHotspot,
            analyticsId: (0, _v10.generateRandomUInt32Id)()
          };else if ((0, _v8.isTimeTriggerElement)(_v1)) _v1.analyticsId = (0, _v10.generateRandomUInt32Id)();else if ((0, _v8.isPollElement)(_v1)) {
            _v1.analyticsId = (0, _v10.generateRandomUInt32Id)();
            let _v0 = {};
            _v1.answers = _v1.answers.map(_v0 => {
              let _v1 = (0, _v10.generateRandomUInt32Id)();
              return _v0[_v0.id] = _v1, {
                id: _v1,
                text: _v0.text,
                analyticsId: _v1
              };
            }), _v1.correctAnswerId && _v0[_v1.correctAnswerId] && (_v1.correctAnswerId = _v0[_v1.correctAnswerId]);
          } else (0, _v8.isIframeElement)(_v1) && (_v1.analyticsId = (0, _v10.generateRandomUInt32Id)());
          return _v1;
        });
      return {
        ..._v0,
        id: _v1,
        composition: _v2
      };
    }),
    _v23 = _v0 => {
      let _v1 = _v19(_v0.layers),
        _v2 = {
          ..._v0,
          layers: _v1,
          interactiveOverlays: [],
          canvas: {
            ..._v0.canvas,
            color: "transparent"
          }
        };
      return (0, _v11.lowerCaseUnderscore)(_v2);
    },
    _v24 = ({
      layers: _v0,
      layersOrientation: _v1,
      targetOrientation: _v2
    }) => {
      if (_v1 === _v2) return _v0;
      let _v3 = [],
        _v4 = _v0.map(_v0 => {
          let _v1 = _v0.composition.map(_v0 => {
            let _v1 = {
              ..._v0
            };
            return _v1.rect = function (_v0, _v1, _v2) {
              if (_v1 === _v2) return _v0;
              let _v3 = _v5.ORIENTATION_MAP[_v1].width / _v5.ORIENTATION_MAP[_v2].width,
                _v4 = _v5.ORIENTATION_MAP[_v1].height / _v5.ORIENTATION_MAP[_v2].height;
              return {
                width: _v0.width * _v3,
                height: _v0.height * _v4,
                x: _v0.x * _v3,
                y: _v0.y * _v4
              };
            }(_v1.rect, _v1, _v2), _v3.push(_v1.rect), (0, _v8.isButtonElement)(_v1) && (_v1.fontSize = (0, _v12.changeButtonFontSizeByOrientation)(_v1.fontSize, _v1, _v2)), _v1;
          });
          return {
            ..._v0,
            composition: _v1
          };
        }),
        _v5 = (0, _v13.getBoundingBoxRect)(_v3),
        _v6 = _v5.width > 1 || _v5.height > 1,
        [_v7, _v8] = function (_v0, _v1, _v2) {
          if (_v1 === _v2) return [_v0, 1];
          let _v3 = _v5.ORIENTATION_MAP[_v1].width / _v5.ORIENTATION_MAP[_v2].width,
            _v4 = _v5.ORIENTATION_MAP[_v1].height / _v5.ORIENTATION_MAP[_v2].height,
            _v5 = 1;
          return _v3 > 1 ? _v5 = 1 / _v3 : _v4 > 1 && (_v5 = 1 / _v4), [{
            ..._v0,
            width: _v0.width * _v5,
            height: _v0.height * _v5
          }, _v5];
        }(_v5, _v1, _v2),
        _v9 = _v6 ? _v7 : _v5,
        _v10 = (0, _v13.recenterRect)(_v3.DEFAULT_RECT, _v9.width, _v9.height),
        _v11 = (0, _v9.getDeltaRect)({
          prevRect: _v5,
          nextRect: _v10
        });
      return _v4.map(_v0 => {
        let _v1 = _v0.composition.map(_v0 => {
          let _v1 = {
            ..._v0
          };
          return _v1.rect = (0, _v9.getResizedRectByResizedMultiRect)({
            originalRect: _v0.rect,
            originalMultiRect: _v5,
            deltaMultiRect: _v11
          }), (0, _v8.isButtonElement)(_v1) && _v6 && (_v1.fontSize *= _v8), _v1;
        });
        return {
          ..._v0,
          composition: _v1
        };
      });
    },
    _v25 = (_v0, _v1, _v2, _v3) => {
      if (!_v1) return [_v0, []];
      let _v4 = [];
      return [_v0.map(_v0 => {
        let _v1 = (0, _v8.getLinkedOverlayId)(_v0);
        if (!_v1) return _v0;
        let _v2 = _v2.find(_v0 => _v0.id === _v1);
        if (!_v2) return _v6.default.sendLog(_v4.INTERACTIVE_ELEMENT_MISSING_OVERLAY, _v7.LogComponent.INTERACTIVE_ERROR, {
          storyboardId: _v3,
          elementId: _v0.id
        }), _v0;
        let _v3 = (0, _v10.createUuidV4)(),
          _v4 = {
            ..._v2,
            id: _v3,
            analyticsId: (0, _v10.generateRandomUInt32Id)(),
            interactiveLayers: _v22(_v2.interactiveLayers)
          };
        return (_v4.push(_v4), (0, _v8.isInteractiveHotspot)(_v0)) ? (0, _v8.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type === _v1.HotspotActionType.SHOW_OVERLAY ? {
          ..._v0,
          interactiveHotspot: {
            ..._v0.interactiveHotspot,
            action: {
              ..._v0.interactiveHotspot.action,
              overlayId: _v3
            }
          }
        } : _v0 : {
          ..._v0,
          overlayId: _v3
        };
      }), _v4];
    };
  _v0.i(0), _v0.i(0), _v0.i(0), _v0.s(["isSoundEffectsValid", 0, _v0 => {
    let {
      effects: _v1,
      compositionTiming: {
        start: _v2,
        end: _v3
      }
    } = _v0;
    if (!_v1?.length) return !1;
    let _v4 = [..._v1].sort((_v0, _v1) => _v0.startTime - _v1.startTime);
    if (0 !== _v4[0].startTime || _v4[_v4.length - 1].endTime !== _v3 - _v2) return !1;
    for (let _v0 = 0; _v0 < _v4.length - 1; _v0++) {
      let _v0 = _v4[_v0].endTime > _v4[_v0 + 1].startTime,
        _v1 = _v4[_v0].endTime < _v4[_v0 + 1].startTime;
      if (_v0 || _v1) return !1;
    }
    return !0;
  }], 0);
}