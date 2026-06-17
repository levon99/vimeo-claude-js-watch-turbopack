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
    _v12 = /\w*$/;
  _v1.exports = function (_v0, _v1) {
    var _v2 = 30,
      _v3 = "...";
    if (_v6(_v1)) {
      var _v4 = "separator" in _v1 ? _v1.separator : _v4;
      _v2 = "length" in _v1 ? _v10(_v1.length) : _v2, _v3 = "omission" in _v1 ? _v3(_v1.omission) : _v3;
    }
    var _v5 = (_v0 = _v11(_v0)).length;
    if (_v5(_v0)) {
      var _v6 = _v9(_v0);
      _v5 = _v6.length;
    }
    if (_v2 >= _v5) return _v0;
    var _v7 = _v2 - _v8(_v3);
    if (_v7 < 1) return _v3;
    var _v8 = _v6 ? _v4(_v6, 0, _v7).join("") : _v0.slice(0, _v7);
    if (void 0 === _v4) return _v8 + _v3;
    if (_v6 && (_v7 += _v8.length - _v7), _v7(_v4)) {
      if (_v0.slice(_v7).search(_v4)) {
        var _v9,
          _v10 = _v8;
        for (_v4.global || (_v4 = RegExp(_v4.source, _v11(_v12.exec(_v4)) + "g")), _v4.lastIndex = 0; _v9 = _v4.exec(_v10);) var _v11 = _v9.index;
        _v8 = _v8.slice(0, void 0 === _v11 ? _v7 : _v11);
      }
    } else if (_v0.indexOf(_v3(_v4), _v7) != _v7) {
      var _v12 = _v8.lastIndexOf(_v4);
      _v12 > -1 && (_v8 = _v8.slice(0, _v12));
    }
    return _v8 + _v3;
  };
}