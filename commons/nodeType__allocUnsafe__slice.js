{
  var _v3 = _v0.r(0),
    _v4 = _v2 && !_v2.nodeType && _v2,
    _v5 = _v4 && _v1 && !_v1.nodeType && _v1,
    _v6 = _v5 && _v5.exports === _v4 ? _v3.Buffer : void 0,
    _v7 = _v6 ? _v6.allocUnsafe : void 0;
  _v1.exports = function (_v0, _v1) {
    if (_v1) return _v0.slice();
    var _v2 = _v0.length,
      _v3 = _v7 ? _v7(_v2) : new _v0.constructor(_v2);
    return _v0.copy(_v3), _v3;
  };
}