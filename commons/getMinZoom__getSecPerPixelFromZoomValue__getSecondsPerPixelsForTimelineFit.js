{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => Math.pow(_v1.MAX_ZOOM_IN / _v0, 1 / _v1.TOTAL_ZOOM_STEPS),
    _v3 = (_v0, _v1) => _v1 / _v0 / 60 * _v1.TIMELINE_MAX_ZOOM_OUT_WITHOUT_MARGIN;
  _v0.s(["getMinZoom", 0, ({
    isInteractive: _v0,
    isEditingOverlay: _v1,
    timelineContentWidth: _v2,
    videoDuration: _v3,
    fit: _v4
  }) => _v0 && _v1 ? _v3(_v3, _v2) : _v0 ? _v4 : _v4 / _v1.TIMELINE_MIN_FIT_RATIO, "getSecPerPixelFromZoomValue", 0, ({
    min: _v0,
    value: _v1
  }) => _v0 * Math.pow(_v2(_v0), _v1), "getSecondsPerPixelsForTimelineFit", 0, _v3, "getZoomStepValue", 0, _v2, "getZoomValueFromSecondsPerPixel", 0, ({
    min: _v0,
    secondsPerPixel: _v1
  }) => Math.round(Math.log(_v1 / _v0 || 1) / Math.log(_v2(_v0)))]);
}