{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = !0,
      _v4 = !0;
    if ("function" != typeof _v0) throw TypeError("Expected a function");
    return _v4(_v2) && (_v3 = "leading" in _v2 ? !!_v2.leading : _v3, _v4 = "trailing" in _v2 ? !!_v2.trailing : _v4), _v3(_v0, _v1, {
      leading: _v3,
      maxWait: _v1,
      trailing: _v4
    });
  };
}