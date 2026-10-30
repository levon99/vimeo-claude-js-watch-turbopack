{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = function (_v0) {
      var _v1 = 1 === _v0,
        _v2 = 2 === _v0,
        _v3 = 3 === _v0,
        _v4 = 4 === _v0,
        _v5 = 6 === _v0,
        _v6 = 7 === _v0,
        _v7 = 5 === _v0 || _v5;
      return function (_v0, _v1, _v2) {
        for (var _v3, _v4, _v5 = _v5(_v0), _v6 = _v4(_v5), _v7 = _v6(_v6), _v8 = _v3(_v1, _v2), _v9 = 0, _v10 = 0, _v11 = _v1 ? _v7(_v0, _v7) : _v2 || _v6 ? _v7(_v0, 0) : void 0; _v7 > _v9; _v9++) if ((_v7 || _v9 in _v6) && (_v4 = _v8(_v3 = _v6[_v9], _v9, _v5), _v0)) if (_v1) _v8(_v11, _v9, _v4);else if (_v4) switch (_v0) {
          case 3:
            return !0;
          case 5:
            return _v3;
          case 6:
            return _v9;
          case 2:
            _v8(_v11, _v10++, _v3);
        } else switch (_v0) {
          case 4:
            return !1;
          case 7:
            _v8(_v11, _v10++, _v3);
        }
        return _v5 ? -1 : _v3 || _v4 ? _v4 : _v11;
      };
    };
  _v1.exports = {
    forEach: _v9(0),
    map: _v9(1),
    filter: _v9(2),
    some: _v9(3),
    every: _v9(4),
    find: _v9(5),
    findIndex: _v9(6),
    filterReject: _v9(7)
  };
}