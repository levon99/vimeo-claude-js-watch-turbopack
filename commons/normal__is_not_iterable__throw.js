{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = TypeError,
    _v14 = function (_v0, _v1) {
      this.stopped = _v0, this.result = _v1;
    },
    _v15 = _v14.prototype;
  _v1.exports = function (_v0, _v1, _v2) {
    var _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      _v8,
      _v9,
      _v10 = _v2 && _v2.that,
      _v11 = !!(_v2 && _v2.AS_ENTRIES),
      _v12 = !!(_v2 && _v2.IS_RECORD),
      _v13 = !!(_v2 && _v2.IS_ITERATOR),
      _v14 = !!(_v2 && _v2.INTERRUPTED),
      _v15 = _v3(_v1, _v10),
      _v16 = function (_v0) {
        var _v1 = _v3;
        return _v3 = void 0, _v1 && _v12(_v1, "normal"), new _v14(!0, _v0);
      },
      _v17 = function (_v0) {
        return _v11 ? (_v5(_v0), _v14 ? _v15(_v0[0], _v0[1], _v16) : _v15(_v0[0], _v0[1])) : _v14 ? _v15(_v0, _v16) : _v15(_v0);
      };
    if (_v12) _v3 = _v0.iterator;else if (_v13) _v3 = _v0;else {
      if (!(_v4 = _v11(_v0))) throw new _v13(_v6(_v0) + " is not iterable");
      if (_v7(_v4)) {
        for (_v5 = 0, _v6 = _v8(_v0); _v6 > _v5; _v5++) if ((_v7 = _v17(_v0[_v5])) && _v9(_v15, _v7)) return _v7;
        return new _v14(!1);
      }
      _v3 = _v10(_v0, _v4);
    }
    for (_v8 = _v12 ? _v0.next : _v3.next; !(_v9 = _v4(_v8, _v3)).done;) {
      var _v18 = _v9.value;
      try {
        _v7 = _v17(_v18);
      } catch (_v0) {
        if (_v3) _v12(_v3, "throw", _v0);else throw _v0;
      }
      if ("object" == typeof _v7 && _v7 && _v9(_v15, _v7)) return _v7;
    }
    return new _v14(!1);
  };
}