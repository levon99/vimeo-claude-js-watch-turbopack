{
  "use strict";

  _v0.s(["registerSource", 0, function (_v0, _v1, _v2) {
    let _v3 = _v2.getRegistry(),
      _v4 = _v3.addSource(_v0, _v1);
    return [_v4, () => _v3.removeSource(_v4)];
  }, "registerTarget", 0, function (_v0, _v1, _v2) {
    let _v3 = _v2.getRegistry(),
      _v4 = _v3.addTarget(_v0, _v1);
    return [_v4, () => _v3.removeTarget(_v4)];
  }]);
}