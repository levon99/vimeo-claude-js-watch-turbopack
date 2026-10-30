{
  "use strict";

  _v0.s(["compareVersions", 0, function (_v0, _v1) {
    let _v2 = /(\.0+)+$/,
      _v3 = _v0.replace(_v2, "").split("."),
      _v4 = _v1.replace(_v2, "").split("."),
      _v5 = Math.min(_v3.length, _v4.length);
    for (let _v0 = 0; _v0 < _v5; _v0 += 1) {
      let _v0 = parseInt(_v3[_v0], 10) - parseInt(_v4[_v0], 10);
      if (_v0) return _v0 <= 0;
    }
    return _v3.length - _v4.length <= 0;
  }]);
}