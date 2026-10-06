{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useOrionSettings", 0, function () {
    let _v0 = (0, _v2.useOrionStore)();
    return (0, _v1.useSyncExternalStore)(_v0.subscribe, _v0.getSettingsState, _v0.getServerSettingsState);
  }]);
}