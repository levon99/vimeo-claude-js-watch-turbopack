{
  "use strict";

  var _v3,
    _v4,
    _v5,
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v0.r(0),
    _v13 = _v0.r(0),
    _v14 = "Object already initialized",
    _v15 = _v7.TypeError,
    _v16 = _v7.WeakMap;
  if (_v6 || _v11.state) {
    var _v17 = _v11.state || (_v11.state = new _v16());
    _v17.get = _v17.get, _v17.has = _v17.has, _v17.set = _v17.set, _v3 = function (_v0, _v1) {
      if (_v17.has(_v0)) throw new _v15(_v14);
      return _v1.facade = _v0, _v17.set(_v0, _v1), _v1;
    }, _v4 = function (_v0) {
      return _v17.get(_v0) || {};
    }, _v5 = function (_v0) {
      return _v17.has(_v0);
    };
  } else {
    var _v18 = _v12("state");
    _v13[_v18] = !0, _v3 = function (_v0, _v1) {
      if (_v10(_v0, _v18)) throw new _v15(_v14);
      return _v1.facade = _v0, _v9(_v0, _v18, _v1), _v1;
    }, _v4 = function (_v0) {
      return _v10(_v0, _v18) ? _v0[_v18] : {};
    }, _v5 = function (_v0) {
      return _v10(_v0, _v18);
    };
  }
  _v1.exports = {
    set: _v3,
    get: _v4,
    has: _v5,
    enforce: function (_v0) {
      return _v5(_v0) ? _v4(_v0) : _v3(_v0, {});
    },
    getterFor: function (_v0) {
      return function (_v0) {
        var _v1;
        if (!_v8(_v0) || (_v1 = _v4(_v0)).type !== _v0) throw new _v15("Incompatible receiver, " + _v0 + " required");
        return _v1;
      };
    }
  };
}