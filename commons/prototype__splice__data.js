{
  var _v3 = _v0.r(0),
    _v4 = Array.prototype.splice;
  _v1.exports = function (_v0) {
    var _v1 = this.__data__,
      _v2 = _v3(_v1, _v0);
    return !(_v2 < 0) && (_v2 == _v1.length - 1 ? _v1.pop() : _v4.call(_v1, _v2, 1), --this.size, !0);
  };
}