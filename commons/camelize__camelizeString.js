{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return _v0.replace(/[\s_.-](\w|$)/g, (_v0, _v1) => _v1.toUpperCase());
  }
  _v0.s(["camelize", 0, function _v0(_v1) {
    return (0, _v1.isRecord)(_v1) ? Object.keys(_v1).reduce((_v0, _v1) => {
      let _v2 = _v1[_v1];
      return (0, _v1.isRecord)(_v2) ? _v2 = _v0(_v2) : Array.isArray(_v2) && (_v2 = _v2.map(_v0)), _v0[_v2(_v1)] = _v2, _v0;
    }, {}) : _v1;
  }, "camelizeString", 0, _v2]);
}