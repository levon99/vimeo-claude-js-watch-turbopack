{
  _v1.exports = function (_v0) {
    return function (_v0, _v1, _v2) {
      for (var _v3 = -1, _v4 = Object(_v0), _v5 = _v2(_v0), _v6 = _v5.length; _v6--;) {
        var _v7 = _v5[_v0 ? _v6 : ++_v3];
        if (!1 === _v1(_v4[_v7], _v7, _v4)) break;
      }
      return _v0;
    };
  };
}