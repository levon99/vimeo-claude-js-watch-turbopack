{
  "use strict";

  let _v1;
  _v0.i(0);
  var _v2,
    _v3 = (_v2 = function (_v0, _v1, _v2, _v3) {
      let _v4 = "string" == typeof _v1 ? _v1.split(".") : [_v1];
      for (_v3 = 0; _v3 < _v4.length && _v0; _v3 += 1) _v0 = _v0[_v4[_v3]];
      return void 0 === _v0 ? _v2 : _v0;
    }, _v1 = new WeakMap(), (_v0, _v1, _v2, _v3) => {
      if (void 0 === _v0) return _v2(_v0, _v1, _v2);
      _v1.has(_v0) || _v1.set(_v0, new Map());
      let _v4 = _v1.get(_v0);
      if (_v4.has(_v1)) return _v4.get(_v1);
      let _v5 = _v2(_v0, _v1, _v2, _v3);
      return _v4.set(_v1, _v5), _v5;
    });
  function _v4(_v0, _v1) {
    let _v2 = {};
    return Object.keys(_v0).forEach(_v0 => {
      let _v1 = _v0[_v0];
      _v1(_v1, _v0, _v0) && (_v2[_v0] = _v1);
    }), _v2;
  }
  _v0.s(["filterUndefined", 0, _v0 => _v4(_v0, _v0 => null != _v0), "memoizedGet", 0, _v3, "objectFilter", 0, _v4, "omit", 0, function (_v0, _v1) {
    let _v2 = {};
    return Object.keys(_v0).forEach(_v0 => {
      _v1.includes(_v0) || (_v2[_v0] = _v0[_v0]);
    }), _v2;
  }]);
}