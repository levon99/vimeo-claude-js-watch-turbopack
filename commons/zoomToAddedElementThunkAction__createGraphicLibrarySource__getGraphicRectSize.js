{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["zoomToAddedElementThunkAction", 0, _v0 => (_v0, _v1) => {
    let _v2 = _v1(),
      _v3 = _v0.end - _v0.start,
      _v4 = _v3 * (0, _v3.secondsPerPixelSelector)(_v2) * 60;
    (0, _v2.isInteractiveSelector)(_v2) || (0, _v4.overlayEditorDurationSelector)(_v2) > 0 || _v4 <= 0 || _v4 >= _v1.MIN_ADDED_ELEMENT_WIDTH || _v0((0, _v3.zoomToAddedElementAction)({
      secondsPerPixel: Math.min(_v1.MAX_ZOOM_IN, _v1.ADDED_ELEMENT_ZOOM_WIDTH / _v3 / 60),
      compositionTiming: _v0
    }));
  }], 0);
  var _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["createGraphicLibrarySource", 0, _v0 => ({
    mhash: "",
    hash: _v0.id,
    height: 0,
    width: 0,
    type: _v5.SourceType.IMAGE,
    duration: 0,
    service: "",
    previewUrl: _v0.path,
    previewUrlLivePhoto: null,
    previewHeight: _v0.height ?? _v6.DEFAULT_LIBRARY_GRAPHIC_DIMENSIONS.height,
    previewWidth: _v0.width ?? _v6.DEFAULT_LIBRARY_GRAPHIC_DIMENSIONS.width,
    order: 0,
    text: null,
    name: _v0.name,
    size: 0,
    externalId: "",
    hasAudio: !1,
    masks: null,
    thumbnailsSprites: null,
    thumb: null,
    transcriptions: [],
    status: "",
    fps: 0
  }), "getGraphicRectSize", 0, function (_v0) {
    let _v1 = _v6.DEFAULT_GRAPHIC_RECT_SIZE,
      _v2 = _v6.DEFAULT_GRAPHIC_RECT_SIZE,
      _v3 = _v7.OrientationRatio[_v0];
    return _v3 && (_v3 > 1 ? _v1 /= _v3 : _v2 *= _v3), {
      rectWidth: _v1,
      rectHeight: _v2
    };
  }], 0);
}