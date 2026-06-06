{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (_v0, _v1 = _v3.DEFAULT_FPS) => Math.round(Math.round(_v0 * _v1) / _v1 * 0) / 0,
    _v5 = (_v0, _v1 = 1) => new Date(0 * _v0).toISOString().substring(11, _v1 < .01 ? 23 : _v1 < .1 ? 22 : _v1 < 1 ? 21 : 19).replace(/^0(?:0:0?)?/, ""),
    _v6 = (_v0, _v1, _v2 = {
      isStartTime: !1
    }) => (0, _v1.clamp)(_v4(_v0), {
      max: _v2.isStartTime ? _v4(_v1 - _v3.MIN_ELEMENT_DURATION) : _v1,
      min: 0
    }),
    _v7 = /^(?:(?:\d{1,2}:)?[0-5]?\d:)?[0-5]?\d(?:\.\d{1,3})?$/;
  _v0.s(["getDurationDisplay", 0, (_v0, _v1 = !1) => {
    let _v2 = _v0 >= 60,
      _v3 = _v2 ? _v5(_v0) : _v0.toFixed(1);
    return `${_v3}${_v1 ? _v2 ? "m" : "s" : ""}`;
  }, "getDurationDisplayWithSuffixIndication", 0, _v0 => {
    let _v1 = _v0 >= 60,
      _v2 = _v1 ? _v5(_v0) : _v0.toFixed(1);
    return [`${_v2}`, _v1];
  }, "getDurationFromLayers", 0, function (_v0) {
    let _v1 = _v0.filter(_v0 => _v0.type !== _v2.LayerType.HIDDEN).map(_v0 => {
      let _v1 = _v0.composition.map(_v0 => _v0.compositionTiming.end);
      return _v1.length ? Math.max(..._v1) : 0;
    });
    return _v1.length ? Math.max(..._v1) : 0;
  }, "getSafeStartAndEndTime", 0, (_v0, _v1, _v2) => {
    let _v3 = _v6(_v0 + _v1, _v2);
    return {
      start: _v6(_v3 - _v1, _v2),
      end: _v3
    };
  }, "getSafeTime", 0, _v6, "getSafeTimeAccordingToDuration", 0, function ({
    compositionTiming: _v0,
    duration: _v1,
    ignoreStart: _v2 = !1
  }) {
    let _v3 = _v0.end - _v0.start,
      _v4 = _v6(_v0.end, _v1);
    return {
      start: _v2 ? _v0.start : _v6(_v4 - _v3, _v1),
      end: _v4
    };
  }, "isCompositionTimingOverlap", 0, function (_v0, _v1) {
    return _v0.start < _v1.end && _v0.end > _v1.start;
  }, "roundUpToOneDecimalPoint", 0, _v0 => Math.ceil(10 * _v0) / 10, "timeFormatHHMMSS", 0, function (_v0, _v1) {
    let _v2 = Math.floor(_v0 / 0),
      _v3 = Math.floor(_v0 % 0 / 60),
      _v4 = _v0 % 60,
      _v5 = _v2 > 0 ? String(_v3).padStart(2, "0") : _v3,
      _v6 = "";
    if (_v2 > 0 && (_v6 += `${_v2}:`), _v6 += `${_v5}:`, _v1) {
      let _v0 = Math.round((_v4 - Math.floor(_v4)) * 100) / 100;
      1 === _v0 && (_v4 += 1), _v6 += String(Math.floor(_v4)).padStart(2, "0");
      let _v1 = String(Math.round(100 * _v0) / 100).slice(2).padEnd(2, "0");
      _v6 += `.${_v1}`;
    } else _v6 += String(Math.floor(_v4)).padStart(2, "0");
    return _v6;
  }, "toCeilFrame", 0, (_v0, _v1 = _v3.DEFAULT_FPS) => Math.round(Math.ceil(_v0 * _v1) / _v1 * 0) / 0, "toFloorFrame", 0, (_v0, _v1 = _v3.DEFAULT_FPS) => Math.round(Math.floor(_v0 * _v1) / _v1 * 0) / 0, "toNearestFrame", 0, _v4, "validateDurationString", 0, _v0 => _v7.test(_v0)]);
}