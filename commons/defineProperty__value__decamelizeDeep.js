{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.decamelizeDeep = void 0;
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v2.decamelizeDeep = function (_v0) {
    return (0, _v4.mapKeysDeep)(_v0, function (_v0, _v1) {
      return (0, _v3.decamelize)(_v1);
    });
  };
}