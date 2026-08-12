{
  function _v3(_v0, _v1) {
    var _v2 = _v0.length,
      _v3 = Array(_v2),
      _v4 = {},
      _v5 = _v2,
      _v6 = function (_v0) {
        for (var _v1 = new Map(), _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2++) {
          var _v4 = _v0[_v2];
          _v1.has(_v4[0]) || _v1.set(_v4[0], new Set()), _v1.has(_v4[1]) || _v1.set(_v4[1], new Set()), _v1.get(_v4[0]).add(_v4[1]);
        }
        return _v1;
      }(_v1),
      _v7 = function (_v0) {
        for (var _v1 = new Map(), _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2++) _v1.set(_v0[_v2], _v2);
        return _v1;
      }(_v0);
    for (_v1.forEach(function (_v0) {
      if (!_v7.has(_v0[0]) || !_v7.has(_v0[1])) throw Error("Unknown node. There is an unknown node in the supplied edges.");
    }); _v5--;) _v4[_v5] || function _v0(_v1, _v2, _v3) {
      if (_v3.has(_v1)) {
        var _v4;
        try {
          _v4 = ", node was:" + JSON.stringify(_v1);
        } catch (_v0) {
          _v4 = "";
        }
        throw Error("Cyclic dependency" + _v4);
      }
      if (!_v7.has(_v1)) throw Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(_v1));
      if (!_v4[_v2]) {
        _v4[_v2] = !0;
        var _v5 = _v6.get(_v1) || new Set();
        if (_v2 = (_v5 = Array.from(_v5)).length) {
          _v3.add(_v1);
          do {
            var _v6 = _v5[--_v2];
            _v0(_v6, _v7.get(_v6), _v3);
          } while (_v2);
          _v3.delete(_v1);
        }
        _v3[--_v2] = _v1;
      }
    }(_v0[_v5], _v5, new Set());
    return _v3;
  }
  _v1.exports = function (_v0) {
    return _v3(function (_v0) {
      for (var _v1 = new Set(), _v2 = 0, _v3 = _v0.length; _v2 < _v3; _v2++) {
        var _v4 = _v0[_v2];
        _v1.add(_v4[0]), _v1.add(_v4[1]);
      }
      return Array.from(_v1);
    }(_v0), _v0);
  }, _v1.exports.array = _v3;
}