{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useOrionLoading", 0, function () {
    let _v0 = (0, _v2.useOrionStore)(),
      _v1 = (0, _v1.useCallback)(() => _v0.getState().isLoadingResponse, [_v0]),
      _v2 = (0, _v1.useCallback)(() => _v0.getServerState().isLoadingResponse, [_v0]);
    return (0, _v1.useSyncExternalStore)(_v0.subscribe, _v1, _v2);
  }]);
}