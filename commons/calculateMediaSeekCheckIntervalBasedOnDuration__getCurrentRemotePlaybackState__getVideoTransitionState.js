{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  function _v8(_v0 = 0, _v1, _v2) {
    let _v3 = (0, _v7.getAbsoluteNow)(),
      _v4 = Number.parseInt(String(_v1), 10) || null,
      _v5 = (0, _v6.inline)(() => null != _v4 ? Number((0, _v4.default)(_v3 - _v4, 0, _v0).toFixed(2)) : _v2 || 0),
      _v6 = Math.max(Math.round(_v0 - _v5), 0),
      _v7 = _v0 > 0 ? Number(Math.min(_v5 / _v0, 1).toFixed(5)) : 0,
      _v8 = Math.round(_v7 * _v0);
    return {
      timeRemaining: _v6,
      progressFraction: _v7,
      totalDuration: _v0,
      playingTime: _v5,
      seek: _v8
    };
  }
  _v0.s(["calculateMediaSeekCheckIntervalBasedOnDuration", 0, function (_v0) {
    return (0, _v4.default)(Math.round(70 * Math.log(_v0 / 0) - 280), _v2.liveApplicationConfig.MEDIA.MIN_VIDEO_SEEK_CHECK_INTERVAL, _v2.liveApplicationConfig.MEDIA.MAX_VIDEO_SEEK_CHECK_INTERVAL);
  }, "getCurrentRemotePlaybackState", 0, _v8, "getVideoTransitionState", 0, function (_v0) {
    let {
      loop: _v1,
      nextOnEOF: _v2
    } = _v0?.meta?.media || {};
    return -1 !== _v1 || _v2 ? _v2 ? _v5.EVideoTransitionState.AUTO : _v5.EVideoTransitionState.MANUAL : _v5.EVideoTransitionState.LOOP;
  }], 0), _v0.s(["useSubscriptionToRemotePlaybackState", 0, function ({
    startedAt: _v0,
    offset: _v1,
    duration: _v2 = 0,
    isActive: _v3 = !0,
    checkPeriod: _v4 = _v2.liveApplicationConfig.MEDIA.VIDEO_TIME_LEFT_CHECK_INTERVAL,
    onSeekPositionChanged: _v5
  }) {
    let [_v6, _v7] = (0, _v1.useState)(() => _v8(_v2, _v0, _v1));
    return (0, _v1.useEffect)(() => {
      if (_v3) {
        let _v0 = () => {
            let _v0 = _v8(_v2, _v0, _v1);
            _v7(_v0), _v5?.(_v0.seek), 0 === _v0.timeRemaining && (0, _v3.unRegisterInterval)(_v1);
          },
          _v1 = (0, _v3.registerInterval)(_v0, _v4, "videoPlaybackState");
        return _v0(), () => (0, _v3.unRegisterInterval)(_v1);
      }
      _v5?.(_v1 ?? 0), _v7(_v8(_v2, _v0, _v1));
    }, [_v3, _v1, _v2, _v0, _v4, _v5]), _v6;
  }], 0);
}