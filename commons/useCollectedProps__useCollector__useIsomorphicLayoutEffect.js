{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useCollectedProps", 0, function (_v0, _v1, _v2) {
    return function (_v0, _v1, _v2) {
      let [_v3, _v4] = (0, _v2.useCollector)(_v0, _v1, _v2);
      return (0, _v1.useIsomorphicLayoutEffect)(function () {
        let _v0 = _v0.getHandlerId();
        if (null != _v0) return _v0.subscribeToStateChange(_v4, {
          handlerIds: [_v0]
        });
      }, [_v0, _v4]), _v3;
    }(_v1, _v0 || (() => ({})), () => _v2.reconnect());
  }], 0);
}