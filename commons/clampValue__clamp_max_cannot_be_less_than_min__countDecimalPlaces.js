{
  "use strict";

  function _v1(_v0, _v1) {
    let _v2,
      _v3 = "number" != typeof (_v2 = parseFloat(_v0)) || Number.isNaN(_v2) ? 0 : _v2,
      _v4 = 10 ** (null != _v1 ? _v1 : 10);
    return _v3 = Math.round(_v3 * _v4) / _v4, _v1 ? _v3.toFixed(_v1) : _v3.toString();
  }
  function _v2(_v0) {
    if (!Number.isFinite(_v0)) return 0;
    let _v1 = 1,
      _v2 = 0;
    for (; Math.round(_v0 * _v1) / _v1 !== _v0;) _v1 *= 10, _v2 += 1;
    return _v2;
  }
  _v0.s(["clampValue", 0, function (_v0, _v1, _v2) {
    return null == _v0 ? _v0 : (_v2 < _v1 && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(_v0, _v1), _v2));
  }, "countDecimalPlaces", 0, _v2, "percentToValue", 0, function (_v0, _v1, _v2) {
    return (_v2 - _v1) * _v0 + _v1;
  }, "roundValueToStep", 0, function (_v0, _v1, _v2) {
    return _v1(Math.round((_v0 - _v1) / _v2) * _v2 + _v1, _v2(_v2));
  }, "toPrecision", 0, _v1, "valueToPercent", 0, function (_v0, _v1, _v2) {
    return (_v0 - _v1) * 100 / (_v2 - _v1);
  }]);
}