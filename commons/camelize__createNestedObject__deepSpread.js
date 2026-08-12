{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => (0, _v5.default)(_v0, (_v0, _v1, _v2, _v3) => {
      _v0[(0, _v2.default)(_v3) ? _v2 : (0, _v1.default)(_v2)] = (0, _v3.default)(_v1) ? _v6(_v1) : _v1;
    }),
    _v7 = _v0 => (0, _v5.default)(_v0, (_v0, _v1, _v2, _v3) => {
      _v0[(0, _v2.default)(_v3) ? _v2 : (0, _v4.default)(_v2)] = (0, _v3.default)(_v1) ? _v7(_v1) : _v1;
    });
  _v0.s(["camelize", 0, _v6, "createNestedObject", 0, function (_v0, _v1) {
    return _v0.split(".").reduceRight((_v0, _v1) => ({
      [_v1]: _v0
    }), _v1);
  }, "deepSpread", 0, function _v0(_v1, _v2) {
    for (let _v0 in _v2) "object" != typeof _v2[_v0] || null === _v2[_v0] || Array.isArray(_v2[_v0]) ? _v1[_v0] = _v2[_v0] : (("object" != typeof _v1[_v0] || null === _v1[_v0]) && (_v1[_v0] = {}), _v0(_v1[_v0], _v2[_v0]));
  }, "getValueByPath", 0, function (_v0, _v1) {
    return _v1.split(".").reduce((_v0, _v1) => _v0 && _v0[_v1], _v0);
  }, "lowerCaseUnderscore", 0, _v7]);
}