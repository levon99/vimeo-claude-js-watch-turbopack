{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["createGapsFromComposition", 0, (_v0, _v1) => {
    let _v2 = 0,
      _v3 = [];
    return _v0.slice().sort((_v0, _v1) => _v0.compositionTiming.start - _v1.compositionTiming.start).forEach(_v0 => {
      _v0.compositionTiming.start > _v2 && _v3.push({
        id: (0, _v1.randomString)(5),
        layerId: _v1,
        ceId: _v0.id,
        start: _v2,
        end: _v0.compositionTiming.start
      }), _v2 = _v0.compositionTiming.end;
    }), _v3;
  }, "getPositionInTimeline", 0, (_v0, _v1) => _v1 * _v0 * 60, "getThumbnailWidth", 0, (_v0, _v1) => _v2.TIMELINE_STRIP_HEIGHT * (_v0 / _v1), "getTimingFromPositionInTimeline", 0, (_v0, _v1) => _v0 / (60 * _v1)]);
}