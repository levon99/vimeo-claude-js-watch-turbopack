{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0);
  _v1.exports = (_v0, _v1, _v2) => {
    let _v3 = [],
      _v4 = null,
      _v5 = null,
      _v6 = _v0.sort((_v0, _v1) => _v4(_v0, _v1, _v2));
    for (let _v0 of _v6) _v3(_v0, _v1, _v2) ? (_v5 = _v0, _v4 || (_v4 = _v0)) : (_v5 && _v3.push([_v4, _v5]), _v5 = null, _v4 = null);
    _v4 && _v3.push([_v4, null]);
    let _v7 = [];
    for (let [_v0, _v1] of _v3) _v0 === _v1 ? _v7.push(_v0) : _v1 || _v0 !== _v6[0] ? _v1 ? _v0 === _v6[0] ? _v7.push(`<=${_v1}`) : _v7.push(`${_v0} - ${_v1}`) : _v7.push(`>=${_v0}`) : _v7.push("*");
    let _v8 = _v7.join(" || "),
      _v9 = "string" == typeof _v1.raw ? _v1.raw : String(_v1);
    return _v8.length < _v9.length ? _v8 : _v1;
  };
}