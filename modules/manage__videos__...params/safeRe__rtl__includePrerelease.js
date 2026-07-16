{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    {
      safeRe: _v5,
      t: _v6
    } = _v0.r(0);
  _v1.exports = (_v0, _v1) => {
    if (_v0 instanceof _v3) return _v0;
    if ("number" == typeof _v0 && (_v0 = String(_v0)), "string" != typeof _v0) return null;
    let _v2 = null;
    if ((_v1 = _v1 || {}).rtl) {
      let _v0,
        _v1 = _v1.includePrerelease ? _v5[_v6.COERCERTLFULL] : _v5[_v6.COERCERTL];
      for (; (_v0 = _v1.exec(_v0)) && (!_v2 || _v2.index + _v2[0].length !== _v0.length);) _v2 && _v0.index + _v0[0].length === _v2.index + _v2[0].length || (_v2 = _v0), _v1.lastIndex = _v0.index + _v0[1].length + _v0[2].length;
      _v1.lastIndex = -1;
    } else _v2 = _v0.match(_v1.includePrerelease ? _v5[_v6.COERCEFULL] : _v5[_v6.COERCE]);
    if (null === _v2) return null;
    let _v3 = _v2[2],
      _v4 = _v2[3] || "0",
      _v5 = _v2[4] || "0",
      _v6 = _v1.includePrerelease && _v2[5] ? `-${_v2[5]}` : "",
      _v7 = _v1.includePrerelease && _v2[6] ? `+${_v2[6]}` : "";
    return _v4(`${_v3}.${_v4}.${_v5}${_v6}${_v7}`, _v1);
  };
}