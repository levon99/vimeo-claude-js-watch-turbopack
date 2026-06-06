{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v3 ? _v3.iterator : void 0;
  _v1.exports = function (_v0) {
    if (!_v0) return [];
    if (_v6(_v0)) return _v7(_v0) ? _v11(_v0) : _v4(_v0);
    if (_v13 && _v0[_v13]) return _v8(_v0[_v13]());
    var _v1 = _v5(_v0);
    return ("[object Map]" == _v1 ? _v9 : "[object Set]" == _v1 ? _v10 : _v12)(_v0);
  };
}