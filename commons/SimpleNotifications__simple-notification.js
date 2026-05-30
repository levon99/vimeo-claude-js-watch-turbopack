{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["SimpleNotifications", 0, function ({
    id: _v0 = (0, _v5.createLiveDomName)("simple-notification"),
    notificationContext: {
      simpleNotification: _v1,
      notificationActions: _v2
    } = (0, _v1.useManager)(_v4.NotificationManager, ({
      simpleNotification: _v0
    }) => [_v0])
  }) {
    let [_v3, _v4] = (0, _v2.useState)(0),
      _v5 = (0, _v3.useToast)();
    return (0, _v2.useEffect)(() => {
      if (_v1) {
        let {
          message: _v0,
          status: _v1,
          onComplete: _v2
        } = _v1;
        _v5({
          id: (0, _v5.createLiveDomName)(_v0, _v3),
          title: _v0,
          status: _v1,
          onCloseComplete: () => {
            _v2.clearSimpleNotification(), _v2 && _v2();
          }
        }), _v4(_v0 => _v0 + 1);
      }
    }, [_v0, _v2, _v1]), null;
  }]);
}