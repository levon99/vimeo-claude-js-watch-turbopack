{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useBroadcasterActionConfirmation", 0, function () {
    let _v0 = (0, _v1.useScope)();
    return [(0, _v2.useCallback)(_v0 => {
      _v0.emitSignal({
        type: _v3.ELiveSignal.CONFIRMATION_NOTIFICATION,
        data: _v0
      });
    }, [_v0]), (0, _v2.useCallback)(() => {
      _v0.emitSignal({
        type: _v3.ELiveSignal.CONFIRMATION_NOTIFICATION_CLEAR
      });
    }, [_v0])];
  }, "useSimpleNotification", 0, function () {
    let _v0 = (0, _v1.useScope)();
    return (0, _v2.useCallback)(_v0 => {
      _v0.emitSignal({
        type: _v3.ELiveSignal.SHOW_SIMPLE_NOTIFICATION,
        data: _v0
      });
    }, [_v0]);
  }]);
}