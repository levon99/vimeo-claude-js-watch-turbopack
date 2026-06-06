{
  var _v3 = Date.now;
  _v1.exports = function (_v0) {
    var _v1 = 0,
      _v2 = 0;
    return function () {
      var _v0 = _v3(),
        _v1 = 16 - (_v0 - _v2);
      if (_v2 = _v0, _v1 > 0) {
        if (++_v1 >= 800) return arguments[0];
      } else _v1 = 0;
      return _v0.apply(void 0, arguments);
    };
  };
}