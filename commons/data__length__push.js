{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    var _v2 = this.__data__;
    if (_v2 instanceof _v3) {
      var _v3 = _v2.__data__;
      if (!_v4 || _v3.length < 199) return _v3.push([_v0, _v1]), this.size = ++_v2.size, this;
      _v2 = this.__data__ = new _v5(_v3);
    }
    return _v2.set(_v0, _v1), this.size = _v2.size, this;
  };
}