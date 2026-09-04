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
    _v15 = _v0.i(0);
  let _v16 = (_v0, _v1 = 0, _v2 = !1) => (_v0, _v1) => {
    if (0 === _v0.length) return;
    let _v2 = _v1(),
      _v3 = (0, _v5.nonHiddenLayersSelector)(_v2),
      _v4 = (0, _v4.isInteractiveSelector)(_v2),
      _v5 = (0, _v14.isEditingInteractiveOverlaySelector)(_v2),
      _v6 = (0, _v13.currentTimeSelector)(_v2),
      _v7 = (0, _v5.durationSelector)(_v2),
      _v8 = {},
      _v9 = [..._v0].sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start),
      _v10 = _v9.reduce((_v0, _v1) => Math.min(_v0, _v1.compositionTiming.start), _v9[0].compositionTiming.start),
      _v11 = new Map();
    _v9.sort((_v0, _v1) => (0, _v9.getLayerDataByCeId)(_v0.id, _v3).layerIndex - (0, _v9.getLayerDataByCeId)(_v1.id, _v3).layerIndex).forEach(_v0 => {
      let _v1 = (0, _v9.getLayerDataByCeId)(_v0.id, _v3).layerIndex;
      _v11.has(_v1) || _v11.set(_v1, []), _v11.get(_v1)?.push(_v0);
    });
    let _v12 = [],
      _v13 = new Map();
    _v11.forEach((_v0, _v1) => {
      let _v2 = [];
      _v0.forEach(_v0 => {
        let _v1 = _v0.compositionTiming.start - _v10,
          _v2 = _v0.compositionTiming.end - _v0.compositionTiming.start,
          _v3 = (0, _v8.createUuidV4)(),
          _v4 = _v4 && (0, _v1.isInteractiveHotspot)(_v0) && _v0.interactiveHotspot.action.type === _v6.HotspotActionType.HIDE_OVERLAY,
          {
            start: _v5,
            end: _v6
          } = _v4 ? (0, _v11.getSafeStartAndEndTime)(_v6 + _v1, _v2, _v7) : {
            start: _v6 + _v1,
            end: _v6 + _v1 + _v2
          },
          _v7 = (_v0 => {
            if ((0, _v1.isOverlayElement)(_v0) || !(0, _v1.isInteractiveElement)(_v0)) return _v0;
            let _v1 = (0, _v8.generateRandomUInt32Id)(),
              _v2 = {
                ..._v0
              };
            return (0, _v1.isImageHotspot)(_v2) || (0, _v1.isButtonElement)(_v2) ? _v2.interactiveHotspot = {
              ..._v2.interactiveHotspot,
              analyticsId: _v1
            } : (_v2.analyticsId = _v1, (0, _v1.isPollElement)(_v2) && (_v2.answers = _v2.answers.map(_v0 => ({
              ..._v0,
              analyticsId: (0, _v8.generateRandomUInt32Id)()
            })))), _v2;
          })({
            ..._v0,
            id: _v3,
            compositionTiming: _v2 ? _v0.compositionTiming : {
              start: _v5,
              end: _v6
            },
            zindex: void 0,
            rect: {
              ..._v0.rect,
              x: _v0.rect.x + _v1,
              y: _v0.rect.y + _v1
            },
            ...(_v4 && !_v5 && {
              interactiveHotspot: {
                ..._v0.interactiveHotspot,
                action: {
                  type: _v6.HotspotActionType.NONE
                }
              }
            })
          });
        (_v1 > -1 ? (0, _v12.getTransitionsForElementInLayer)(_v3[_v1], _v0.id) : []).forEach(_v0 => {
          _v8[_v0.transitionElement.id] ? (_v8[_v0.transitionElement.id] = {
            ..._v8[_v0.transitionElement.id],
            inElement: {
              ..._v0.transitionElement.inElement,
              elementId: _v7.id
            }
          }, _v2.push({
            ..._v8[_v0.transitionElement.id],
            id: (0, _v8.createUuidV4)(),
            compositionTiming: {
              start: _v7.compositionTiming.start,
              end: _v7.compositionTiming.start + _v7.FRAME_TIMING
            }
          })) : _v8[_v0.transitionElement.id] = {
            ..._v0.transitionElement,
            outElement: {
              ..._v0.transitionElement.outElement,
              elementId: _v7.id
            }
          };
        }), _v2.push(_v7), _v13.set(_v0.id, _v7);
      }), _v12.unshift({
        elements: _v2,
        anchorOffset: _v12.length
      });
    });
    let _v14 = Array.from(_v13.values()),
      _v15 = Math.min(..._v14.map(_v0 => _v0.compositionTiming.start)),
      _v16 = Math.max(..._v14.map(_v0 => _v0.compositionTiming.end)),
      _v17 = (0, _v10.getHighestFreeZIndexInTimeframe)(_v15, _v16, _v3),
      _v18 = _v3[_v17] || _v3[_v17 - 1];
    _v0((0, _v5.addElementsToLayersWithOffsetMapAction)({
      elementsData: _v12,
      layerId: _v18.id || "",
      direction: 0
    })), _v0((0, _v15.selectCEsAction)({
      ceIds: []
    }));
  };
  _v0.s(["pasteElementsThunkAction", 0, _v16], 0), _v0.s(["duplicateElementsThunkAction", 0, _v0 => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = (0, _v4.isInteractiveSelector)(_v2),
      _v4 = (0, _v5.nonHiddenLayersSelector)(_v2),
      _v5 = (0, _v5.interactiveOverlaysSelector)(_v2),
      _v6 = (0, _v5.storyboardIdSelector)(_v2),
      _v7 = _v0.filter(_v1.isDuplicatableElement);
    if (!_v7.length) return;
    let [_v8, _v9] = (0, _v3.getElementsToPasteWithOverlayDuplication)(_v7, _v3, _v5, _v6);
    _v9 && _v9.forEach(_v0 => {
      _v0((0, _v5.addInteractiveOverlayAction)({
        overlay: _v0
      }));
    }), _v0(_v16((0, _v2.getWithDuplicationNaming)(_v8, _v4), 0, !0));
  }], 0);
}