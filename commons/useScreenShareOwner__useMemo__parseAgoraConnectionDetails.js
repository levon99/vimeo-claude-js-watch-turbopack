{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useScreenShareOwner", 0, function (_v0) {
    return (0, _v1.useMemo)(() => {
      if (!_v0) return null;
      let _v0 = (0, _v3.parseAgoraConnectionDetails)(_v0);
      if (!_v0) return null;
      {
        let [_v0, _v1] = _v0;
        return _v0 === _v2.EAgoraConnectionType.BROADCASTER_SCREEN ? _v2.EAgoraConnectionType.BROADCASTER : _v0 === _v2.EAgoraConnectionType.GUEST_SCREEN ? _v1 : null;
      }
    }, [_v0]);
  }]);
}