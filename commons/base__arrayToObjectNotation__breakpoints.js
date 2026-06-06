{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = Object.freeze(["base", "sm", "md", "lg", "xl", "2xl"]);
  _v0.s(["arrayToObjectNotation", 0, function (_v0, _v1 = _v2) {
    let _v2 = {};
    return _v0.forEach((_v0, _v1) => {
      let _v2 = _v1[_v1];
      null != _v0 && (_v2[_v2] = _v0);
    }), _v2;
  }, "breakpoints", 0, _v2, "mapResponsive", 0, function (_v0, _v1) {
    return Array.isArray(_v0) ? _v0.map(_v0 => null === _v0 ? null : _v1(_v0)) : (0, _v1.isObject)(_v0) ? Object.keys(_v0).reduce((_v0, _v1) => (_v0[_v1] = _v1(_v0[_v1]), _v0), {}) : null != _v0 ? _v1(_v0) : null;
  }]);
}