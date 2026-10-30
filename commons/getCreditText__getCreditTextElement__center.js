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
  let _v11 = _v0 => `${_v0.type === _v1.CompositionElementType.IMAGE ? (0, _v10.getTranslations)().photoBy : (0, _v10.getTranslations)().videoBy} ${_v0?.creditInfo?.artist || _v0?.creditInfo?.collectionName}/Getty Images`;
  _v0.s(["getCreditText", 0, _v11, "getCreditTextElement", 0, (_v0, _v1, _v2) => {
    let {
        paddingX: _v3,
        paddingY: _v4,
        height: _v5,
        fontSize: _v6,
        marginY: _v7
      } = _v7.CREDITS_APPEARANCE_BY_ORIENTATION[_v1],
      {
        width: _v8
      } = (0, _v6.getSVGTextDimensions)({
        text: [_v0.credit],
        font: _v7.CREDITS_FONT,
        fontSize: _v6,
        orientation: _v1,
        lineHeight: _v7.CREDITS_FONT_LINE_HEIGHT
      }),
      _v9 = {
        x: _v3,
        y: 1 - _v4 - _v5 - _v0.indexInTime * (_v5 + _v7) - _v7.CREDITS_GAP,
        width: _v8,
        height: _v5
      };
    return {
      type: _v1.CompositionElementType.TEXT,
      id: (0, _v5.createUuidV4)(),
      zindex: _v2,
      compositionTiming: _v0.compositionTiming,
      text: [_v0.credit],
      rect: _v9,
      textStyleId: _v7.CREDITS_TEXT_STYLE,
      colors: {
        fontColor: _v7.CREDITS_TEXT_COLOR,
        colorOne: _v7.CREDITS_BG_COLOR,
        highlight: _v8.DEFAULT_HIGHLIGHT_COLOR
      },
      fontSize: (0, _v4.getRelativeFontSize)(_v6, _v1),
      align: "center",
      bgAlpha: _v7.CREDITS_BG_ALPHA,
      dropShadow: _v2.DropShadow.NONE,
      language: _v9.LANGUAGE.LATIN,
      font: _v7.CREDITS_FONT,
      selectable: !1
    };
  }, "getCreditsForLayerMedia", 0, _v0 => {
    let _v1 = {},
      _v2 = {},
      _v3 = [];
    _v0?.forEach(_v0 => {
      _v0.composition.forEach(_v0 => {
        if ((0, _v3.isMediaElement)(_v0) && (_v0?.creditInfo?.artist || _v0?.creditInfo?.collectionName)) {
          let _v0 = _v11(_v0);
          _v1[_v0] ? _v1[_v0].push(_v0.compositionTiming) : (_v1[_v0] = [_v0.compositionTiming], _v2[_v0] = _v0.id);
        }
      });
    }), Object.keys(_v1).forEach(_v0 => {
      _v1[_v0] = (_v0 => {
        if (_v0.length <= 1) return _v0;
        let _v1 = _v0.slice().sort((_v0, _v1) => _v0.start - _v1.start),
          _v2 = [{
            end: _v1[0].end,
            start: _v1[0].start
          }];
        for (let _v0 = 1; _v0 < _v1.length; _v0++) {
          let _v0 = _v1[_v0],
            _v1 = _v2[_v2.length - 1];
          _v0.start <= _v1.end ? _v1.end = Math.max(_v1.end, _v0.end) : _v2.push({
            end: _v0.end,
            start: _v0.start
          });
        }
        return _v2;
      })(_v1[_v0]), _v1[_v0].forEach(_v0 => {
        _v3.unshift({
          mediaElementId: _v2[_v0],
          credit: _v0,
          compositionTiming: _v0,
          indexInTime: 0
        });
      });
    });
    let _v4 = _v3.slice().sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start),
      _v5 = [];
    return _v4.some(_v0 => {
      0 === _v5.length ? (_v5.push(_v0.compositionTiming.end), _v0.indexInTime = 0) : _v5.some((_v0, _v1) => {
        if (_v0.compositionTiming.start >= _v0) return _v5[_v1] = _v0.compositionTiming.end, _v0.indexInTime = _v1, !0;
        _v1 === _v5.length - 1 && (_v5.push(_v0.compositionTiming.end), _v0.indexInTime = _v1 + 1);
      });
    }), _v4;
  }, "removeStaleCredits", 0, _v0 => {
    let _v1 = _v0.find(_v0 => _v0.id === _v7.CREDITS_LAYER);
    if (!_v1) return !1;
    let _v2 = new Map(),
      _v3 = [];
    _v0.forEach(_v0 => {
      _v0.composition.forEach(_v0 => {
        if ((0, _v3.isMediaElement)(_v0) && (_v0.creditInfo?.artist || _v0.creditInfo?.collectionName)) {
          let _v0 = _v11(_v0),
            _v1 = {
              ..._v0.compositionTiming
            };
          _v2.has(_v0) || _v2.set(_v0, []);
          let _v2 = _v2.get(_v0);
          _v2 && _v2.push(_v1), _v3.push(_v0);
        }
      });
    });
    let _v4 = !1,
      _v5 = [];
    for (let _v0 of _v1.composition) {
      let _v0 = _v0.text[0],
        _v1 = _v2.get(_v0);
      _v1 && 0 !== _v1.length && _v1.some(_v0 => JSON.stringify(_v0.compositionTiming) === JSON.stringify(_v0)) ? _v5.push(_v0) : _v4 = !0;
    }
    return _v4 && (_v1.composition = _v5), _v4;
  }]);
}