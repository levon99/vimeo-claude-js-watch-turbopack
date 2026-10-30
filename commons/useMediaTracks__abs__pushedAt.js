{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  function _v5(_v0) {
    return !_v0 || Math.abs((_v0.pushedAt || 0) - (0, _v4.getAbsoluteNow)()) < _v2.liveApplicationConfig.MEDIA.MEDIA_TRANSITION_TIMEOUT;
  }
  _v0.s(["useMediaTracks", 0, function (_v0, _v1) {
    let [_v2, _v3] = (0, _v1.useState)(() => _v5(_v0));
    return (0, _v1.useEffect)(() => {
      let _v0 = _v5(_v0);
      if (_v3(_v0), _v0) {
        let _v0 = setTimeout(() => {
          _v3(!1);
        }, _v2.liveApplicationConfig.MEDIA.MEDIA_TRANSITION_TIMEOUT);
        return () => clearTimeout(_v0);
      }
    }, [_v0, _v0?.pushedAt]), (0, _v1.useMemo)(() => {
      if (_v2) return [null, null];
      let _v0 = _v1.find(_v0 => _v0.type === _v3.EAgoraConnectionType.MEDIA);
      return [_v0?.video || null, _v0?.audio || null];
    }, [_v2, _v1]);
  }]);
}