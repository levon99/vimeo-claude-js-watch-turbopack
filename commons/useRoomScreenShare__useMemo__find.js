{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useRoomScreenShare", 0, function (_v0) {
    return (0, _v1.useMemo)(() => {
      let _v0 = _v0.find(_v0 => _v0.type === _v2.EAgoraConnectionType.BROADCASTER_SCREEN || _v0.type === _v2.EAgoraConnectionType.GUEST_SCREEN) || null;
      return _v0?.video ? _v0 : null;
    }, [_v0]);
  }]);
}