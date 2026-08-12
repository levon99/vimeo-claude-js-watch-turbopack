{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["MicOn", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.5a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3Zm-3.535-.536A5 5 0 0 1 17 6.5v4a5 5 0 1 1-10 0v-4a5 5 0 0 1 1.465-3.536ZM4.369 13.101a1 1 0 0 1 1.337.461A6.997 6.997 0 0 0 12 17.5a7 7 0 0 0 6.295-3.938 1 1 0 0 1 1.798.876A8.998 8.998 0 0 1 13 19.444V21.5a1 1 0 1 1-2 0v-2.056a9 9 0 0 1-7.093-5.006A1 1 0 0 1 4.37 13.1Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["useIsHostAudioMeterAvailable", 0, function () {
    let {
        settings: _v0
      } = (0, _v7.useOrionSettings)(),
      _v1 = (0, _v8.useIsVpaas)(),
      {
        initialState: {
          sessionApplicationType: _v2
        }
      } = (0, _v4.useLiveGlobals)(),
      {
        streamMode: _v3
      } = (0, _v3.useManager)(_v5.ComposerSessionStatusManager),
      _v4 = _v3 === _v6.EComposerStreamModeType.RECORD;
    return !!_v0.live_broadcaster_mic_meter && _v2 !== _v6.EComposerApplicationType.RTMP && !_v1 && !_v4;
  }], 0);
}