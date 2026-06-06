{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = Object.prototype.hasOwnProperty;
  _v1.exports = function (_v0, _v1) {
    var _v2 = _v5(_v0),
      _v3 = !_v2 && _v4(_v0),
      _v4 = !_v2 && !_v3 && _v6(_v0),
      _v5 = !_v2 && !_v3 && !_v4 && _v8(_v0),
      _v6 = _v2 || _v3 || _v4 || _v5,
      _v7 = _v6 ? _v3(_v0.length, String) : [],
      _v8 = _v7.length;
    for (var _v9 in _v0) (_v1 || _v9.call(_v0, _v9)) && !(_v6 && ("length" == _v9 || _v4 && ("offset" == _v9 || "parent" == _v9) || _v5 && ("buffer" == _v9 || "byteLength" == _v9 || "byteOffset" == _v9) || _v7(_v9, _v8))) && _v7.push(_v9);
    return _v7;
  };
}