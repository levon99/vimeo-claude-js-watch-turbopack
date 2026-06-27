{
  "use strict";

  let _v1 = {
    B: 1e-6,
    KB: .001,
    MB: 1,
    GB: 0,
    TB: 0
  };
  _v0.s(["formatFileSize", 0, _v0 => {
    let _v1 = _v0.match(/[a-zA-Z]/)?.pop(),
      [_v2, _v3] = _v0.split(_v1 ?? "");
    return _v3 = _v1 + _v3, Math.round(10 * (parseFloat(_v2) * parseFloat(_v1[_v3]))) / 10;
  }, "getAspectRatio", 0, _v0 => {
    let {
      width: _v1,
      height: _v2
    } = _v0;
    if (0 === _v1 && 0 === _v2) return null;
    let _v3 = _v1,
      _v4 = _v2;
    for (; _v4;) {
      let _v0 = _v4;
      _v4 = _v3 % _v4, _v3 = _v0;
    }
    return `${_v1 / _v3}:${_v2 / _v3}`;
  }]);
}