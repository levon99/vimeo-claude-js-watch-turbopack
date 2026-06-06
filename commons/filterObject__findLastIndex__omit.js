{
  "use strict";

  _v0.s(["filterObject", 0, function (_v0, _v1) {
    return Object.keys(_v0).filter(_v0 => _v1(_v0, _v0[_v0])).reduce((_v0, _v1) => (_v0[_v1] = _v0[_v1], _v0), {});
  }, "findLastIndex", 0, function (_v0, _v1) {
    let _v2 = _v0.length;
    for (; _v2--;) if (_v1(_v0[_v2], _v2, _v0)) return _v2;
    return -1;
  }, "omit", 0, function (_v0, _v1) {
    let {
      [_v1]: _v2,
      ..._v3
    } = _v0;
    return _v3;
  }]);
}