{
  "use strict";

  let _v1,
    _v2 = "u" > typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto),
    _v3 = new Uint8Array(16),
    _v4 = [];
  for (let _v0 = 0; _v0 < 256; ++_v0) _v4.push((_v0 + 256).toString(16).slice(1));
  _v0.s(["v4", 0, function (_v0, _v1, _v2) {
    if (_v2 && !_v1 && !_v0) return _v2();
    let _v3 = (_v0 = _v0 || {}).random ?? _v0.rng?.() ?? function () {
      if (!_v1) {
        if ("u" < typeof crypto || !crypto.getRandomValues) throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        _v1 = crypto.getRandomValues.bind(crypto);
      }
      return _v1(_v3);
    }();
    if (_v3.length < 16) throw Error("Random bytes length must be >= 16");
    if (_v3[6] = 15 & _v3[6] | 64, _v3[8] = 63 & _v3[8] | 128, _v1) {
      if ((_v2 = _v2 || 0) < 0 || _v2 + 16 > _v1.length) throw RangeError(`UUID byte range ${_v2}:${_v2 + 15} is out of buffer bounds`);
      for (let _v0 = 0; _v0 < 16; ++_v0) _v1[_v2 + _v0] = _v3[_v0];
      return _v1;
    }
    return function (_v0, _v1 = 0) {
      return (_v4[_v0[_v1 + 0]] + _v4[_v0[_v1 + 1]] + _v4[_v0[_v1 + 2]] + _v4[_v0[_v1 + 3]] + "-" + _v4[_v0[_v1 + 4]] + _v4[_v0[_v1 + 5]] + "-" + _v4[_v0[_v1 + 6]] + _v4[_v0[_v1 + 7]] + "-" + _v4[_v0[_v1 + 8]] + _v4[_v0[_v1 + 9]] + "-" + _v4[_v0[_v1 + 10]] + _v4[_v0[_v1 + 11]] + _v4[_v0[_v1 + 12]] + _v4[_v0[_v1 + 13]] + _v4[_v0[_v1 + 14]] + _v4[_v0[_v1 + 15]]).toLowerCase();
    }(_v3);
  }], 0);
}