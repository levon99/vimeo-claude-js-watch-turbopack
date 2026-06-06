{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = function (_v0) {
      return (0, _v1.default)(_v0) && _v0.indexOf("%") === _v0.length - 1;
    },
    _v7 = function (_v0) {
      return (0, _v4.default)(_v0) && !(0, _v2.default)(_v0);
    },
    _v8 = 0;
  _v0.s(["compareValues", 0, function (_v0, _v1) {
    return _v7(_v0) && _v7(_v1) ? _v0 - _v1 : (0, _v1.default)(_v0) && (0, _v1.default)(_v1) ? _v0.localeCompare(_v1) : _v0 instanceof Date && _v1 instanceof Date ? _v0.getTime() - _v1.getTime() : String(_v0).localeCompare(String(_v1));
  }, "findEntryInArray", 0, function (_v0, _v1, _v2) {
    return _v0 && _v0.length ? _v0.find(function (_v0) {
      return _v0 && ("function" == typeof _v1 ? _v1(_v0) : (0, _v3.default)(_v0, _v1)) === _v2;
    }) : null;
  }, "getAnyElementOfObject", 0, function (_v0) {
    if (!_v0) return null;
    var _v1 = Object.keys(_v0);
    return _v1 && _v1.length ? _v0[_v1[0]] : null;
  }, "getLinearRegression", 0, function (_v0) {
    if (!_v0 || !_v0.length) return null;
    for (var _v1 = _v0.length, _v2 = 0, _v3 = 0, _v4 = 0, _v5 = 0, _v6 = 1 / 0, _v7 = -1 / 0, _v8 = 0, _v9 = 0, _v10 = 0; _v10 < _v1; _v10++) _v8 = _v0[_v10].cx || 0, _v9 = _v0[_v10].cy || 0, _v2 += _v8, _v3 += _v9, _v4 += _v8 * _v9, _v5 += _v8 * _v8, _v6 = Math.min(_v6, _v8), _v7 = Math.max(_v7, _v8);
    var _v11 = _v1 * _v5 != _v2 * _v2 ? (_v1 * _v4 - _v2 * _v3) / (_v1 * _v5 - _v2 * _v2) : 0;
    return {
      xmin: _v6,
      xmax: _v7,
      a: _v11,
      b: (_v3 - _v11 * _v2) / _v1
    };
  }, "getPercentValue", 0, function (_v0, _v1) {
    var _v2,
      _v3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      _v4 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (!_v7(_v0) && !(0, _v1.default)(_v0)) return _v3;
    if (_v6(_v0)) {
      var _v5 = _v0.indexOf("%");
      _v2 = _v1 * parseFloat(_v0.slice(0, _v5)) / 100;
    } else _v2 = +_v0;
    return (0, _v2.default)(_v2) && (_v2 = _v3), _v4 && _v2 > _v1 && (_v2 = _v1), _v2;
  }, "hasDuplicate", 0, function (_v0) {
    if (!Array.isArray(_v0)) return !1;
    for (var _v1 = _v0.length, _v2 = {}, _v3 = 0; _v3 < _v1; _v3++) if (_v2[_v0[_v3]]) return !0;else _v2[_v0[_v3]] = !0;
    return !1;
  }, "interpolateNumber", 0, function (_v0, _v1) {
    return _v7(_v0) && _v7(_v1) ? function (_v0) {
      return _v0 + _v0 * (_v1 - _v0);
    } : function () {
      return _v1;
    };
  }, "isNullish", 0, function (_v0) {
    return (0, _v5.default)(_v0);
  }, "isNumOrStr", 0, function (_v0) {
    return _v7(_v0) || (0, _v1.default)(_v0);
  }, "isNumber", 0, _v7, "isPercent", 0, _v6, "mathSign", 0, function (_v0) {
    return 0 === _v0 ? 0 : _v0 > 0 ? 1 : -1;
  }, "uniqueId", 0, function (_v0) {
    var _v1 = ++_v8;
    return "".concat(_v0 || "").concat(_v1);
  }]);
}