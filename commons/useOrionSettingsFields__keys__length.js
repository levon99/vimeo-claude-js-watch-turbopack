{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1) {
    if (Object.is(_v0, _v1)) return !0;
    let _v2 = Object.keys(_v0);
    return _v2.length === Object.keys(_v1).length && _v2.every(_v0 => Object.prototype.hasOwnProperty.call(_v1, _v0) && Object.is(Reflect.get(_v0, _v0), Reflect.get(_v1, _v0)));
  }
  _v0.s(["useOrionSettingsFields", 0, function (_v0) {
    let _v1 = (0, _v3.useOrionStore)(),
      _v2 = (0, _v1.useCallback)(() => _v1.getState().identity.settings, [_v1]),
      _v3 = (0, _v1.useCallback)(() => _v1.getServerState().identity.settings, [_v1]),
      _v4 = (0, _v1.useCallback)(_v0 => function (_v0, _v1) {
        let _v2 = {};
        for (let _v0 of _v1) _v2[_v0] = _v0[_v0];
        return _v2;
      }(_v0, _v0), [_v0]);
    return (0, _v2.useSyncExternalStoreWithSelector)(_v1.subscribe, _v2, _v3, _v4, _v4);
  }]);
}