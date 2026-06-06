{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0);
  _v1.exports = function (_v0, _v1, _v2) {
    if (!_v0 || "object" != typeof _v0 && "function" != typeof _v0) throw new _v5("`obj` must be an object or a function`");
    if ("string" != typeof _v1 && "symbol" != typeof _v1) throw new _v5("`property` must be a string or a symbol`");
    if (arguments.length > 3 && "boolean" != typeof arguments[3] && null !== arguments[3]) throw new _v5("`nonEnumerable`, if provided, must be a boolean or null");
    if (arguments.length > 4 && "boolean" != typeof arguments[4] && null !== arguments[4]) throw new _v5("`nonWritable`, if provided, must be a boolean or null");
    if (arguments.length > 5 && "boolean" != typeof arguments[5] && null !== arguments[5]) throw new _v5("`nonConfigurable`, if provided, must be a boolean or null");
    if (arguments.length > 6 && "boolean" != typeof arguments[6]) throw new _v5("`loose`, if provided, must be a boolean");
    var _v3 = arguments.length > 3 ? arguments[3] : null,
      _v4 = arguments.length > 4 ? arguments[4] : null,
      _v5 = arguments.length > 5 ? arguments[5] : null,
      _v6 = arguments.length > 6 && arguments[6],
      _v7 = !!_v6 && _v6(_v0, _v1);
    if (_v3) _v3(_v0, _v1, {
      configurable: null === _v5 && _v7 ? _v7.configurable : !_v5,
      enumerable: null === _v3 && _v7 ? _v7.enumerable : !_v3,
      value: _v2,
      writable: null === _v4 && _v7 ? _v7.writable : !_v4
    });else if (!_v6 && (_v3 || _v4 || _v5)) throw new _v4("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");else _v0[_v1] = _v2;
  };
}