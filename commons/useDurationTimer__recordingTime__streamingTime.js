{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useDurationTimer", 0, function ({
    recordingStartedAt: _v0 = null,
    isRecordingPaused: _v1,
    recordingOffset: _v2 = null,
    isRecordMode: _v3,
    startedAt: _v4 = null,
    endedAt: _v5 = null,
    isRTMPPage: _v6 = !1
  }) {
    let _v7 = function ({
        recordingStartedAt: _v0,
        isRecordingPaused: _v1,
        recordingOffset: _v2,
        isRecordMode: _v3
      }) {
        let [_v4, _v5] = (0, _v1.useState)(0),
          _v6 = (0, _v1.useCallback)(_v0 => Math.round(((0, _v3.inline)(() => null === _v0 ? 0 : _v0 - _v0) + (_v2 ?? 0)) / 0), [_v0, _v2]);
        return (0, _v1.useEffect)(() => {
          if (!_v3) return;
          if (_v1 || null === _v0) return void _v5(_v6((0, _v4.getAbsoluteNow)()));
          let _v0 = (0, _v5.registerInterval)(() => {
            _v5(_v6((0, _v4.getAbsoluteNow)()));
          }, _v2.liveApplicationConfig.EVENT.DURATION_RECALCULATION_INTERVAL, "recordingTime");
          return _v5(_v6((0, _v4.getAbsoluteNow)())), () => (0, _v5.unRegisterInterval)(_v0);
        }, [_v3, _v2, _v0, _v1, _v6]), (0, _v6.convertTimingFromIntToStr)(_v4);
      }({
        recordingOffset: _v2,
        recordingStartedAt: _v0,
        isRecordingPaused: !!_v1,
        isRecordMode: _v3
      }),
      _v8 = function ({
        startTime: _v0,
        endedTime: _v1,
        isEnabled: _v2
      }) {
        let [_v3, _v4] = (0, _v1.useState)(() => (0, _v6.calculateStreamingTime)(_v0, _v1));
        return (0, _v1.useEffect)(() => {
          if (!_v2) return void _v4("");
          if (_v1) _v4((0, _v6.calculateStreamingTime)(_v0, _v1));else if (_v0) {
            let _v0 = (0, _v5.registerInterval)(() => {
              _v4((0, _v6.calculateStreamingTime)(_v0));
            }, _v2.liveApplicationConfig.EVENT.DURATION_RECALCULATION_INTERVAL, "streamingTime");
            return _v4((0, _v6.calculateStreamingTime)(_v0)), () => (0, _v5.unRegisterInterval)(_v0);
          }
        }, [_v0, _v1, _v2]), _v3;
      }({
        startTime: (0, _v4.toTimestamp)(_v4),
        endedTime: (0, _v4.toTimestamp)(_v5),
        isEnabled: !_v3 || _v6
      });
    return _v3 && !_v6 ? _v7 : _v8;
  }], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = (0, _v1.forwardRef)(({
    icon: _v0,
    isDisabled: _v1,
    ariaLabel: _v2 = "",
    onClick: _v3,
    sx: _v4 = {},
    size: _v5 = "sm",
    variant: _v6 = "tertiary",
    placement: _v7 = "top",
    label: _v8,
    ..._v9
  }, _v10) => {
    let _v11 = (0, _v7.jsx)(_v8.IconButton, {
      ref: _v10,
      "aria-label": _v2,
      variant: _v6,
      size: _v5,
      sx: _v4,
      isDisabled: _v1,
      icon: _v0,
      onClick: _v3,
      ..._v9
    });
    return _v8 ? (0, _v7.jsx)(_v9.BokehTooltip, {
      placement: _v7,
      label: _v8,
      shouldWrapChildren: !1,
      children: _v11
    }) : _v11;
  });
  _v0.s(["TooltipIconButton", 0, _v10], 0);
}