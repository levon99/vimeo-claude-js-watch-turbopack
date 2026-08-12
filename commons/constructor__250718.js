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
    _v12 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3 = _v8(_v0),
      _v4 = _v3 || _v9(_v0) || _v12(_v0);
    if (_v1 = _v6(_v1, 4), null == _v2) {
      var _v5 = _v0 && _v0.constructor;
      _v2 = _v4 ? _v3 ? new _v5() : [] : _v11(_v0) && _v10(_v5) ? _v4(_v7(_v0)) : {};
    }
    return (_v4 ? _v3 : _v5)(_v0, function (_v0, _v1, _v2) {
      return _v1(_v2, _v0, _v1, _v2);
    }), _v2;
  };
}