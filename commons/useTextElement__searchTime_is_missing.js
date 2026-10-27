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
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  _v0.s(["useTextElement", 0, () => {
    let _v0 = (0, _v10.useAppSelector)(_v8.textAnimationsMetadataSelector),
      _v1 = (0, _v10.useAppSelector)(_v7.nonHiddenLayersSelector),
      _v2 = (0, _v10.useAppSelector)(_v7.orientationSelector),
      _v3 = (0, _v10.useAppSelector)(_v7.brandColorsSelector),
      _v4 = (0, _v10.useAppSelector)(_v9.newElementFontSelector),
      _v5 = (0, _v10.useAppSelector)(_v6.fontsSelector),
      _v6 = (0, _v10.useAppSelector)(_v6.languagesSelector),
      {
        getCompositionTimingByCurrentTime: _v7,
        DFRef: _v8
      } = (0, _v5.useDragonfly)(),
      _v9 = _v8.current?.currentTime;
    return {
      create: (0, _v1.useCallback)(async ({
        text: _v0,
        fontSize: _v1 = _v4.DEFAULT_FONT_SIZE,
        time: _v2,
        position: _v3
      }) => {
        if (!_v5 || !_v6) return;
        let {
            alignment: _v4,
            bgAlpha: _v5
          } = _v0[_v4.DEFAULT_TEXT_STYLE].metaData.defaults,
          _v6 = (0, _v14.detectLanguage)(_v0, _v6),
          {
            lineHeight: _v7
          } = _v5[_v4].metaData;
        await (0, _v12.loadFont)(_v4);
        let {
            width: _v8,
            height: _v9
          } = (0, _v17.getSVGTextDimensions)({
            text: _v0,
            font: _v4,
            fontSize: _v1,
            orientation: _v2,
            lineHeight: _v7
          }),
          _v10 = (0, _v15.recenterRect)(_v4.DEFAULT_RECT, _v8, _v9);
        _v3 && (_v10.x = _v3.left, _v10.y = _v3.top);
        let _v11 = _v2 || _v9;
        if (void 0 === _v11) throw Error("searchTime is missing");
        let _v12 = (0, _v16.getElementsInTime)(_v11, _v11 + _v4.DEFAULT_TEXT_ELEMENT_DURATION, _v1);
        return {
          type: _v2.CompositionElementType.TEXT,
          id: (0, _v13.createUuidV4)(),
          zindex: void 0,
          compositionTiming: _v2 ? {
            start: _v2,
            end: _v2 + _v4.DEFAULT_TEXT_ELEMENT_DURATION
          } : _v7(0, _v4.DEFAULT_TEXT_ELEMENT_DURATION),
          text: _v0,
          rect: (0, _v15.getRectWithOffset)(_v10, _v12),
          textStyleId: _v4.DEFAULT_TEXT_STYLE,
          colors: {
            fontColor: _v3.default,
            colorOne: _v3.secondary,
            highlight: _v4.DEFAULT_HIGHLIGHT_COLOR
          },
          fontSize: (0, _v12.getRelativeFontSize)(_v1, _v2),
          align: _v4,
          bgAlpha: _v5,
          dropShadow: _v3.DropShadow.NONE,
          language: _v6,
          font: _v4,
          selectable: !0
        };
      }, [_v9, _v5, _v6, _v0, _v2, _v1, _v7, _v3, _v4]),
      createPartial: (0, _v1.useCallback)(({
        textElement: _v0,
        text: _v1,
        font: _v2,
        fontSize: _v3
      }) => (0, _v11.createPartialTextElement)({
        textElement: _v0,
        text: _v1,
        font: _v2,
        fontSize: _v3,
        fetchedFonts: _v5,
        languages: _v6,
        orientation: _v2
      }), [_v5, _v6, _v2])
    };
  }]);
}