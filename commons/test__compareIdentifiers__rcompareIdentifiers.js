{
  "use strict";

  let _v3 = /^[0-9]+$/,
    _v4 = (_v0, _v1) => {
      if ("number" == typeof _v0 && "number" == typeof _v1) return _v0 === _v1 ? 0 : _v0 < _v1 ? -1 : 1;
      let _v2 = _v3.test(_v0),
        _v3 = _v3.test(_v1);
      return _v2 && _v3 && (_v0 *= 1, _v1 *= 1), _v0 === _v1 ? 0 : _v2 && !_v3 ? -1 : _v3 && !_v2 ? 1 : _v0 < _v1 ? -1 : 1;
    };
  _v1.exports = {
    compareIdentifiers: _v4,
    rcompareIdentifiers: (_v0, _v1) => _v4(_v1, _v0)
  };
}