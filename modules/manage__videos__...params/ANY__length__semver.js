{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    {
      ANY: _v5
    } = _v4,
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = [new _v4(">=0.0.0-0")],
    _v9 = [new _v4(">=0.0.0")],
    _v10 = (_v0, _v1, _v2) => {
      let _v3, _v4, _v5, _v6, _v7, _v8, _v9;
      if (_v0 === _v1) return !0;
      if (1 === _v0.length && _v0[0].semver === _v5) if (1 === _v1.length && _v1[0].semver === _v5) return !0;else _v0 = _v2.includePrerelease ? _v8 : _v9;
      if (1 === _v1.length && _v1[0].semver === _v5) if (_v2.includePrerelease) return !0;else _v1 = _v9;
      let _v10 = new Set();
      for (let _v0 of _v0) ">" === _v0.operator || ">=" === _v0.operator ? _v3 = _v11(_v3, _v0, _v2) : "<" === _v0.operator || "<=" === _v0.operator ? _v4 = _v12(_v4, _v0, _v2) : _v10.add(_v0.semver);
      if (_v10.size > 1) return null;
      if (_v3 && _v4 && ((_v5 = _v7(_v3.semver, _v4.semver, _v2)) > 0 || 0 === _v5 && (">=" !== _v3.operator || "<=" !== _v4.operator))) return null;
      for (let _v0 of _v10) {
        if (_v3 && !_v6(_v0, String(_v3), _v2) || _v4 && !_v6(_v0, String(_v4), _v2)) return null;
        for (let _v0 of _v1) if (!_v6(_v0, String(_v0), _v2)) return !1;
        return !0;
      }
      let _v11 = !!_v4 && !_v2.includePrerelease && !!_v4.semver.prerelease.length && _v4.semver,
        _v12 = !!_v3 && !_v2.includePrerelease && !!_v3.semver.prerelease.length && _v3.semver;
      for (let _v0 of (_v11 && 1 === _v11.prerelease.length && "<" === _v4.operator && 0 === _v11.prerelease[0] && (_v11 = !1), _v1)) {
        if (_v9 = _v9 || ">" === _v0.operator || ">=" === _v0.operator, _v8 = _v8 || "<" === _v0.operator || "<=" === _v0.operator, _v3) {
          if (_v12 && _v0.semver.prerelease && _v0.semver.prerelease.length && _v0.semver.major === _v12.major && _v0.semver.minor === _v12.minor && _v0.semver.patch === _v12.patch && (_v12 = !1), ">" === _v0.operator || ">=" === _v0.operator) {
            if ((_v6 = _v11(_v3, _v0, _v2)) === _v0 && _v6 !== _v3) return !1;
          } else if (">=" === _v3.operator && !_v6(_v3.semver, String(_v0), _v2)) return !1;
        }
        if (_v4) {
          if (_v11 && _v0.semver.prerelease && _v0.semver.prerelease.length && _v0.semver.major === _v11.major && _v0.semver.minor === _v11.minor && _v0.semver.patch === _v11.patch && (_v11 = !1), "<" === _v0.operator || "<=" === _v0.operator) {
            if ((_v7 = _v12(_v4, _v0, _v2)) === _v0 && _v7 !== _v4) return !1;
          } else if ("<=" === _v4.operator && !_v6(_v4.semver, String(_v0), _v2)) return !1;
        }
        if (!_v0.operator && (_v4 || _v3) && 0 !== _v5) return !1;
      }
      return (!_v3 || !_v8 || !!_v4 || 0 === _v5) && (!_v4 || !_v9 || !!_v3 || 0 === _v5) && !_v12 && !_v11 && !0;
    },
    _v11 = (_v0, _v1, _v2) => {
      if (!_v0) return _v1;
      let _v3 = _v7(_v0.semver, _v1.semver, _v2);
      return _v3 > 0 ? _v0 : _v3 < 0 || ">" === _v1.operator && ">=" === _v0.operator ? _v1 : _v0;
    },
    _v12 = (_v0, _v1, _v2) => {
      if (!_v0) return _v1;
      let _v3 = _v7(_v0.semver, _v1.semver, _v2);
      return _v3 < 0 ? _v0 : _v3 > 0 || "<" === _v1.operator && "<=" === _v0.operator ? _v1 : _v0;
    };
  _v1.exports = (_v0, _v1, _v2 = {}) => {
    if (_v0 === _v1) return !0;
    _v0 = new _v3(_v0, _v2), _v1 = new _v3(_v1, _v2);
    let _v3 = !1;
    e: for (let _v0 of _v0.set) {
      for (let _v0 of _v1.set) {
        let _v0 = _v10(_v0, _v0, _v2);
        if (_v3 = _v3 || null !== _v0, _v0) continue e;
      }
      if (_v3) return !1;
    }
    return !0;
  };
}