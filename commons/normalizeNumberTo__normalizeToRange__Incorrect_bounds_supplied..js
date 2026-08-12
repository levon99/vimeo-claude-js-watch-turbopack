{
  "use strict";

  _v0.s(["normalizeNumberTo", 0, function (_v0, _v1) {
    return Math.min(_v0 / _v1, 1);
  }, "normalizeToRange", 0, function (_v0, _v1, _v2) {
    if (_v2 < _v1) throw Error("Incorrect bounds supplied.");
    return _v0 < _v1 ? _v1 : _v0 > _v2 ? _v2 : _v0;
  }, "recalculateToAspectRatio", 0, function (_v0, _v1, _v2) {
    let _v3 = 0,
      _v4 = 0,
      _v5 = _v0 / _v2;
    return _v5 <= _v1 ? (_v4 = _v5, _v3 = _v0) : (_v4 = _v1, _v3 = _v1 * _v2), {
      width: Math.floor(_v3),
      height: Math.floor(_v4)
    };
  }]);
}