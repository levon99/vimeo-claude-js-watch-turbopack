{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = new Map(),
    _v3 = new Set();
  function _v4() {
    _v3.forEach(_v0 => _v0());
  }
  function _v5(_v0) {
    return _v3.add(_v0), () => {
      _v3.delete(_v0);
    };
  }
  _v0.s(["embeddableStore", 0, {
    get: _v0 => _v2.get(_v0) ?? null,
    set(_v0, _v1) {
      _v2.set(_v0, _v1), _v4();
    },
    delete(_v0) {
      _v2.delete(_v0), _v4();
    }
  }, "useEmbeddable", 0, function (_v0) {
    return (0, _v1.useSyncExternalStore)(_v5, () => _v0 ? _v2.get(_v0) ?? null : null);
  }]);
}