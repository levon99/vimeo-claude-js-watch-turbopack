{
  "use strict";

  let _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0);
  _v1.exports = (_v0, _v1) => {
    _v0 = new _v4(_v0, _v1);
    let _v2 = new _v3("0.0.0");
    if (_v0.test(_v2) || (_v2 = new _v3("0.0.0-0"), _v0.test(_v2))) return _v2;
    _v2 = null;
    for (let _v0 = 0; _v0 < _v0.set.length; ++_v0) {
      let _v0 = _v0.set[_v0],
        _v1 = null;
      _v0.forEach(_v0 => {
        let _v1 = new _v3(_v0.semver.version);
        switch (_v0.operator) {
          case ">":
            0 === _v1.prerelease.length ? _v1.patch++ : _v1.prerelease.push(0), _v1.raw = _v1.format();
          case "":
          case ">=":
            (!_v1 || _v5(_v1, _v1)) && (_v1 = _v1);
            break;
          case "<":
          case "<=":
            break;
          default:
            throw Error(`Unexpected operation: ${_v0.operator}`);
        }
      }), _v1 && (!_v2 || _v5(_v2, _v1)) && (_v2 = _v1);
    }
    return _v2 && _v0.test(_v2) ? _v2 : null;
  };
}