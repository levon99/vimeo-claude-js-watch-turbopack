{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = (_v0, _v1) => {
      for (let _v0 = 0; _v0 < _v1.length; _v0++) for (let _v0 = 0; _v0 < _v1[_v0].composition.length; _v0++) if (_v1[_v0].composition[_v0].id === _v0) return {
        ceIndex: _v0,
        layerIndex: _v0,
        layer: _v1[_v0]
      };
      return {
        ceIndex: -1,
        layerIndex: -1,
        layer: void 0
      };
    },
    _v4 = _v0 => _v0.filter(_v0 => 0 !== _v0.composition.length).map((_v0, _v1) => ({
      ..._v0,
      composition: _v0.composition.map(_v0 => ({
        ..._v0,
        zindex: _v1
      }))
    }));
  _v0.s(["alignZIndices", 0, _v4, "getInteractiveOverlayLayerDataByCeId", 0, (_v0, _v1) => {
    for (let _v0 = 0; _v0 < _v1.length; _v0++) {
      let _v0 = _v3(_v0, _v1[_v0].interactiveLayers);
      if (-1 !== _v0.layerIndex) return {
        ..._v0,
        interactiveOverlayIndex: _v0,
        interactiveOverlay: _v1[_v0]
      };
    }
    return {
      interactiveOverlayIndex: -1,
      ceIndex: -1,
      layerIndex: -1,
      interactiveOverlay: void 0,
      layer: void 0
    };
  }, "getLayerDataByCeId", 0, _v3, "getLayerIndexById", 0, (_v0, _v1) => _v1.findIndex(_v0 => _v0.id === _v0), "isCeInLayer", 0, (_v0, _v1) => !!_v1.composition.find(_v0 => _v0.id === _v0), "isElementValidForLayer", 0, (_v0, _v1) => _v1.type !== _v1.LayerType.INTERACTIVE_BACKGROUND_VIDEO && (_v1.type === _v1.LayerType.TIME_TRIGGERS ? (0, _v2.isTimeTriggerElement)(_v0) : _v1.type === _v1.LayerType.AUDIO ? (0, _v2.isSoundElement)(_v0) : _v1.type !== _v1.LayerType.VISUAL || !(0, _v2.isSoundElement)(_v0) && !(0, _v2.isTimeTriggerElement)(_v0)), "isLayersStoryboard", 0, function (_v0) {
    return "layers" in _v0;
  }, "isMixingSoundAndVisual", 0, (_v0, _v1) => {
    if (!_v0 || !_v1) return !1;
    let _v2 = (0, _v2.isElementTypeSound)(_v1),
      _v3 = _v0 === _v1.LayerType.AUDIO;
    return _v2 && !_v3 || !_v2 && _v3;
  }, "isScenesStoryboard", 0, function (_v0) {
    return "scenes" in _v0;
  }, "safeInsertLayers", 0, function ({
    insertIndex: _v0,
    layers: _v1,
    newLayers: _v2
  }) {
    let _v3 = _v1.length - 1,
      _v4 = _v0 >= _v3,
      _v5 = _v1[_v3]?.type === _v1.LayerType.TIME_TRIGGERS,
      _v6 = _v1[_v3]?.type === _v1.LayerType.HIDDEN,
      _v7 = _v2[0].type === _v1.LayerType.HIDDEN;
    if (_v4 && (_v5 || _v6 && !_v7)) {
      _v6 && _v1[_v3].composition.forEach(_v0 => _v0.zindex = _v3), _v1.splice(-1, 0, ..._v2), _v4(_v1);
      return;
    }
    let _v8 = _v0 < 1,
      _v9 = _v1[0]?.type === _v1.LayerType.INTERACTIVE_BACKGROUND_VIDEO;
    if (_v8 && _v9) {
      _v1.splice(1, 0, ..._v2), _v4(_v1);
      return;
    }
    _v1.splice(_v0, 0, ..._v2), _v4(_v1);
  }, "updateDuplicatedSourcesInLayers", 0, (_v0, _v1) => _v0.map(_v0 => {
    let _v1 = _v0.composition.map(_v0 => {
      if ((0, _v2.isMediaElement)(_v0)) {
        if (!_v1[_v0.sourceHash]) throw Error(`Source hash ${_v0.sourceHash} not found in the original to duplicate hash map`);
        return {
          ..._v0,
          sourceHash: _v1[_v0.sourceHash]
        };
      }
      return _v0;
    }).map(_v0 => {
      if ((0, _v2.isImageHotspot)(_v0) && _v0.interactiveHotspot.hover.sourceHash) {
        let _v0 = _v0.interactiveHotspot.hover.sourceHash;
        if (!_v1[_v0]) throw Error(`Hover source hash ${_v0} not found in the original to duplicate hash map`);
        return {
          ..._v0,
          interactiveHotspot: {
            ..._v0.interactiveHotspot,
            hover: {
              ..._v0.interactiveHotspot.hover,
              sourceHash: _v1[_v0]
            }
          }
        };
      }
      return _v0;
    });
    return {
      ..._v0,
      composition: _v1
    };
  })]);
}