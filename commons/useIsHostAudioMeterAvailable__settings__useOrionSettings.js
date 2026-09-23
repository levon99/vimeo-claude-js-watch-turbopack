{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["useIsHostAudioMeterAvailable", 0, function () {
    let {
        settings: _v0
      } = (0, _v5.useOrionSettings)(),
      _v1 = (0, _v6.useIsVpaas)(),
      {
        initialState: {
          sessionApplicationType: _v2
        }
      } = (0, _v2.useLiveGlobals)(),
      {
        streamMode: _v3
      } = (0, _v1.useManager)(_v3.ComposerSessionStatusManager),
      _v4 = _v3 === _v4.EComposerStreamModeType.RECORD;
    return !!_v0.live_broadcaster_mic_meter && _v2 !== _v4.EComposerApplicationType.RTMP && !_v1 && !_v4;
  }]);
}