{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = ["storyboard/updateElementAction"];
  _v0.s(["replaceMiddleware", 0, ({
    getState: _v0,
    dispatch: _v1
  }) => _v0 => _v0 => {
    if (!_v3.includes(_v0.type)) return _v0(_v0);
    _v0(_v0);
    let {
        ceId: _v1,
        element: _v2
      } = _v0.payload,
      _v3 = (0, _v2.isReplaceToolbarOpenSelector)(_v0());
    if (_v2 && !_v2.isLoading && _v3) {
      let _v0 = _v0().storyboard,
        _v1 = (() => {
          for (let _v0 of _v0.layers) {
            let _v0 = _v0.composition.find(_v0 => _v0.id === _v1);
            if (_v0) return _v0;
          }
        })();
      _v1 && _v1((0, _v1.setLastElementAction)(_v1));
    }
  }], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ["storyboard/updateElementAction", "storyboard/addElementToLayerWithOffsetAction", "storyboard/addElementToLayerAction"],
    _v7 = _v0 => {
      _v0.compositionTiming && _v0.compositionTiming.start < 0 && (_v0.compositionTiming.start = 0);
    };
  _v0.s(["timingMiddleware", 0, ({
    getState: _v0
  }) => _v0 => _v0 => {
    if (_v6.includes(_v0.type)) {
      let {
        ceId: _v0,
        element: _v1
      } = _v0.payload;
      if (_v7(_v1), _v1 && _v1.timing) {
        let _v0 = _v0().storyboard.layers.find(_v0 => _v0.composition.find(_v0 => _v0.id === _v0)),
          _v1 = _v0?.composition.find(_v0 => _v0.id === _v0);
        ((0, _v4.isSoundElement)(_v1) || (0, _v4.isVideoElement)(_v1)) && _v1.effects && (_v0.payload.element = {
          ..._v1,
          effects: (0, _v5.getElementEffectsAdjustedDuration)(_v1, _v1.compositionTiming.end - _v1.compositionTiming.start)
        });
      }
    }
    if (["storyboard/updateElementsAction"].includes(_v0.type)) {
      let {
        elements: _v0
      } = _v0.payload;
      _v0.forEach(_v0 => {
        let {
          ceId: _v1,
          element: _v2
        } = _v0;
        if (_v7(_v2), _v2 && _v2.timing && _v2.compositionTiming) {
          let _v0 = _v0().storyboard.layers.find(_v0 => _v0.composition.find(_v0 => _v0.id === _v1)),
            _v1 = _v0?.composition.find(_v0 => _v0.id === _v1);
          ((0, _v4.isSoundElement)(_v1) || (0, _v4.isVideoElement)(_v1)) && _v1.effects && (_v0.element = {
            ..._v2,
            effects: (0, _v5.getElementEffectsAdjustedDuration)(_v1, _v2.compositionTiming.end - _v2.compositionTiming.start)
          });
        }
      });
    }
    if (["storyboard/addElementsToLayersWithOffsetMapAction"].includes(_v0.type)) {
      let {
        elementsData: _v0
      } = _v0.payload;
      _v0.forEach(_v0 => {
        _v0.elements.forEach(_v0 => {
          let {
            id: _v1
          } = _v0;
          if (_v7(_v0), _v0 && _v0.timing && _v0.compositionTiming) {
            let _v0 = _v0().storyboard.layers.find(_v0 => _v0.composition.find(_v0 => _v0.id === _v1)),
              _v1 = _v0?.composition.find(_v0 => _v0.id === _v1);
            ((0, _v4.isSoundElement)(_v1) || (0, _v4.isVideoElement)(_v1)) && _v1.effects && (_v0 = {
              ..._v0,
              effects: (0, _v5.getElementEffectsAdjustedDuration)(_v1, _v0.compositionTiming.end - _v0.compositionTiming.start)
            });
          }
        });
      });
    }
    return _v0(_v0);
  }], 0);
}