{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useOrionSetting", 0, function (_v0) {
    let _v1 = (0, _v2.useOrionStore)(),
      _v2 = (0, _v1.useCallback)(() => _v1.getState().identity.settings[_v0], [_v1, _v0]),
      _v3 = (0, _v1.useCallback)(() => _v1.getServerState().identity.settings[_v0], [_v1, _v0]);
    return (0, _v1.useSyncExternalStore)(_v1.subscribe, _v2, _v3);
  }]);
}