{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = {
      blur: "blur",
      lighten: "lighten",
      darken: "darken",
      grayscale: "grayscale",
      breath: "breath",
      fade: "fade"
    },
    _v7 = {
      LINEAR: "linear",
      EASE: "ease",
      EASE_IN: "ease-in",
      EASE_OUT: "ease-out",
      EASE_IN_OUT: "ease-in-out"
    };
  _v0.s(["ImageBreathEffect", 0, {
    NONE: "none",
    ZOOM_IN: "zoom-in"
  }, "ImageEffectName", 0, _v6, "ImageLayerTypeName", 0, {
    FULL_SOURCE: "full_source"
  }, "TransitionTimingFunctionName", 0, _v7], 0);
  let _v8 = _v0 => _v0.type === _v2.SoundEffectType.fade && _v0.fromLevel < _v0.level,
    _v9 = _v0 => _v0.type === _v2.SoundEffectType.fade && _v0.fromLevel > _v0.level,
    _v10 = _v0 => _v0.type === _v2.SoundEffectType.volume,
    _v11 = _v0 => {
      let _v1 = null,
        _v2 = null,
        _v3 = null;
      return _v0.effects?.forEach(_v0 => {
        _v8(_v0) ? _v1 = _v0 : _v10(_v0) ? _v2 = _v0 : _v9(_v0) && (_v3 = _v0);
      }), _v2 || (_v2 = _v12(_v0)), {
        fadeInEffect: _v1,
        volumeEffect: _v2,
        fadeOutEffect: _v3
      };
    },
    _v12 = _v0 => ({
      type: _v2.SoundEffectType.volume,
      level: 1,
      startTime: 0,
      endTime: _v0.compositionTiming.end - _v0.compositionTiming.start
    });
  _v0.s(["deconstructSoundEffects", 0, _v11, "getDefaultVolumeEffect", 0, _v12, "getElementEffectsAdjustedDuration", 0, (_v0, _v1) => {
    let {
        fadeInEffect: _v2,
        volumeEffect: _v3,
        fadeOutEffect: _v4
      } = _v11(_v0),
      _v5 = _v1,
      _v6 = (() => {
        if (!_v2) return;
        let _v0 = Math.min(_v1, _v2.endTime - _v2.startTime);
        return {
          ..._v2,
          endTime: (0, _v3.truncateFloat)(_v0)
        };
      })();
    _v5 -= _v6?.endTime ?? 0;
    let _v7 = (() => {
      if (!_v4 || _v5 < 0) return;
      let _v0 = _v4.endTime - _v4.startTime,
        _v1 = Math.min(_v5, _v0);
      return {
        ..._v4,
        startTime: (0, _v3.truncateFloat)(_v1 - _v1),
        endTime: _v1
      };
    })();
    _v5 -= (_v7?.endTime ?? 0) - (_v7?.startTime ?? 0);
    let _v8 = (() => {
        if (!(_v5 < 0)) return {
          ...(_v3 || {
            type: _v2.SoundEffectType.volume,
            level: 1
          }),
          startTime: _v6 ? _v6.endTime : 0,
          endTime: _v7 ? _v7.startTime : _v1
        };
      })(),
      _v9 = [];
    return _v6 && _v9.push(_v6), _v8 && _v9.push(_v8), _v7 && _v9.push(_v7), _v9;
  }, "getFadeInEffect", 0, _v0 => _v0.find(_v8), "getFadeOutEffect", 0, _v0 => _v0.find(_v9), "getUpdatedBreathEffect", 0, ({
    ceId: _v0,
    newScale: _v1,
    newCompositionTiming: _v2,
    layers: _v3
  }) => {
    let _v4 = (0, _v4.getLayerDataByCeId)(_v0, _v3).layer;
    if (!_v4) throw Error(_v5.LAYER_NOT_FOUND);
    let _v5 = _v4.composition.find(_v0 => _v0.id === _v0);
    if (!_v5) throw Error(_v5.CE_NOT_FOUND);
    let _v6 = (0, _v1.default)(_v5),
      _v7 = _v6?.layers;
    if (!_v7) throw Error(_v5.IMAGE_LAYERS_NOT_FOUND);
    let {
        sourceFootageRect: {
          width: _v8,
          height: _v9
        },
        compositionTiming: {
          start: _v10,
          end: _v11
        }
      } = _v6,
      _v12 = _v2?.start ?? _v10,
      _v13 = _v2?.end ?? _v11,
      _v14 = _v7[0].effects,
      _v15 = _v14.find(_v0 => _v0.name === _v6.breath);
    _v15 || (_v15 = {
      name: _v6.breath,
      options: {
        transformsFromFootageRect: [{
          timing: {
            startTime: 0,
            endTime: _v13 - _v12
          },
          transform: {
            type: _v7.LINEAR,
            transformX: 0,
            transformY: 0,
            scale: 1
          }
        }]
      }
    }, _v14.push(_v15));
    let _v16 = _v15,
      {
        transform: {
          type: _v17,
          scale: _v18
        }
      } = _v16.options.transformsFromFootageRect[0],
      _v19 = _v1 ?? _v18;
    return _v16.options.transformsFromFootageRect[0].transform = {
      type: _v17,
      transformX: _v8 * (1 - _v19) / 2,
      transformY: _v9 * (1 - _v19) / 2,
      scale: _v19
    }, _v16.options.transformsFromFootageRect[0].timing = {
      startTime: 0,
      endTime: _v13 - _v12
    }, _v6;
  }, "getVolumeEffect", 0, _v0 => _v0.find(_v10), "removeFadeInEffect", 0, _v0 => {
    let {
        volumeEffect: _v1,
        fadeOutEffect: _v2
      } = _v11(_v0),
      _v3 = [];
    return _v1 && _v3.push({
      ..._v1,
      startTime: 0
    }), _v2 && _v3.push(_v2), _v3;
  }, "removeFadeOutEffect", 0, _v0 => {
    let {
        fadeInEffect: _v1,
        volumeEffect: _v2,
        fadeOutEffect: _v3
      } = _v11(_v0),
      _v4 = [];
    if (_v1 && _v4.push(_v1), _v2 || _v3) {
      let _v0 = (() => {
        if (_v2) return _v2.endTime;
        if (_v3) return _v3.endTime;
        throw Error(_v5.SOMETHING_WENT_WRONG);
      })();
      _v4.push({
        ...(_v2 || {
          type: _v2.SoundEffectType.volume,
          level: 1,
          startTime: _v1 ? _v1.endTime : 0
        }),
        endTime: _v0
      });
    }
    return _v4;
  }], 0);
}