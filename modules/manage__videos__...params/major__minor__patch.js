{
  "use strict";

  let _v3 = _v0.r(0);
  _v1.exports = (_v0, _v1) => {
    let _v2 = _v3(_v0, null, !0),
      _v3 = _v3(_v1, null, !0),
      _v4 = _v2.compare(_v3);
    if (0 === _v4) return null;
    let _v5 = _v4 > 0,
      _v6 = _v5 ? _v2 : _v3,
      _v7 = _v5 ? _v3 : _v2,
      _v8 = !!_v6.prerelease.length;
    if (_v7.prerelease.length && !_v8) {
      if (!_v7.patch && !_v7.minor) return "major";
      if (0 === _v7.compareMain(_v6)) return _v7.minor && !_v7.patch ? "minor" : "patch";
    }
    let _v9 = _v8 ? "pre" : "";
    return _v2.major !== _v3.major ? _v9 + "major" : _v2.minor !== _v3.minor ? _v9 + "minor" : _v2.patch !== _v3.patch ? _v9 + "patch" : "prerelease";
  };
}