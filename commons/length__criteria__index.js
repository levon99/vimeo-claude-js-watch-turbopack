{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    _v1 = _v1.length ? _v3(_v1, function (_v0) {
      return _v11(_v0) ? function (_v0) {
        return _v4(_v0, 1 === _v0.length ? _v0[0] : _v0);
      } : _v0;
    }) : [_v10];
    var _v3 = -1;
    return _v1 = _v3(_v1, _v8(_v5)), _v7(_v6(_v0, function (_v0, _v1, _v2) {
      return {
        criteria: _v3(_v1, function (_v0) {
          return _v0(_v0);
        }),
        index: ++_v3,
        value: _v0
      };
    }), function (_v0, _v1) {
      return _v9(_v0, _v1, _v2);
    });
  };
}