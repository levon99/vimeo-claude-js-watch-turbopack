{
  var _v3 = _v0.r(0);
  _v1.exports = function (_v0, _v1) {
    var _v2 = this.__data__,
      _v3 = _v3(_v2, _v0);
    return _v3 < 0 ? (++this.size, _v2.push([_v0, _v1])) : _v2[_v3][1] = _v1, this;
  };
}