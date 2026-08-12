{
  var _v3 = _v0.r(0);
  function _v4(_v0, _v1) {
    if ("function" != typeof _v0 || null != _v1 && "function" != typeof _v1) throw TypeError("Expected a function");
    var _v2 = function () {
      var _v0 = arguments,
        _v1 = _v1 ? _v1.apply(this, _v0) : _v0[0],
        _v2 = _v2.cache;
      if (_v2.has(_v1)) return _v2.get(_v1);
      var _v3 = _v0.apply(this, _v0);
      return _v2.cache = _v2.set(_v1, _v3) || _v2, _v3;
    };
    return _v2.cache = new (_v4.Cache || _v3)(), _v2;
  }
  _v4.Cache = _v3, _v1.exports = _v4;
}