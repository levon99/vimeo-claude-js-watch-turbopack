{
  "use strict";

  let _v3 = _v0 => "object" == typeof _v0 && null !== _v0,
    _v4 = Symbol("skip"),
    _v5 = _v0 => _v3(_v0) && !(_v0 instanceof RegExp) && !(_v0 instanceof Error) && !(_v0 instanceof Date),
    _v6 = (_v0, _v1, _v2, _v3 = new WeakMap()) => {
      if (_v2 = {
        deep: !1,
        target: {},
        ..._v2
      }, _v3.has(_v0)) return _v3.get(_v0);
      _v3.set(_v0, _v2.target);
      let {
        target: _v4
      } = _v2;
      delete _v2.target;
      let _v5 = _v0 => _v0.map(_v0 => _v5(_v0) ? _v6(_v0, _v1, _v2, _v3) : _v0);
      if (Array.isArray(_v0)) return _v5(_v0);
      for (let [_v0, _v1] of Object.entries(_v0)) {
        let _v0 = _v1(_v0, _v1, _v0);
        if (_v0 === _v4) continue;
        let [_v1, _v2, {
          shouldRecurse: _v3 = !0
        } = {}] = _v0;
        "__proto__" !== _v1 && (_v2.deep && _v3 && _v5(_v2) && (_v2 = Array.isArray(_v2) ? _v5(_v2) : _v6(_v2, _v1, _v2, _v3)), _v4[_v1] = _v2);
      }
      return _v4;
    };
  _v1.exports = (_v0, _v1, _v2) => {
    if (!_v3(_v0)) throw TypeError(`Expected an object, got \`${_v0}\` (${typeof _v0})`);
    return _v6(_v0, _v1, _v2);
  }, _v1.exports.mapObjectSkip = _v4;
}