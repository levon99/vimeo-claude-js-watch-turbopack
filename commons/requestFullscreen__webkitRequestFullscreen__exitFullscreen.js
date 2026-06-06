{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    BROWSER: (0, _v2.detectBrowser)(),
    AGORA_SUPPORT: {
      [_v2.ESupportedBrowser.EDGE_CHROMIUM]: {
        version: "80"
      },
      [_v2.ESupportedBrowser.CHROME]: {
        version: "58"
      },
      [_v2.ESupportedBrowser.FIREFOX]: {
        version: "56"
      },
      [_v2.ESupportedBrowser.SAFARI]: {
        version: "12"
      },
      [_v2.ESupportedBrowser.OPERA]: {
        version: "45"
      },
      [_v2.ESupportedBrowser.IOS]: {
        version: "15.1"
      }
    },
    IS_IN_IFRAME: (() => {
      try {
        return window.self !== window.top;
      } catch (_v0) {
        return !0;
      }
    })(),
    FEATURE: {
      CAN_USE_FULLSCREEN_MODE: !_v1.environmentConfig.IS_SSR && ("requestFullscreen" in window.document.body || "webkitRequestFullscreen" in window.document.body) && ("exitFullscreen" in window.document || "webkitExitFullscreen" in window.document),
      CAN_USE_PERFORMANCE_MARKS: !_v1.environmentConfig.IS_SSR && "function" == typeof window.performance?.mark,
      CAN_USE_AUDIO_CONTEXT: !_v1.environmentConfig.IS_SSR && "AudioContext" in window,
      CAN_USE_IMAGE_CAPTURE: !_v1.environmentConfig.IS_SSR && "ImageCapture" in window,
      CAN_USE_WEB_SOCKETS: !_v1.environmentConfig.IS_SSR && "WebSocket" in window,
      CAN_USE_OUTPUT_DEVICE: !_v1.environmentConfig.IS_SSR && "setSinkId" in HTMLMediaElement.prototype,
      CAN_USE_WEBRTC: (0, _v3.inline)(() => !!(!_v1.environmentConfig.IS_SSR && "RTCPeerConnection" in window && "MediaStream" in window && navigator.mediaDevices && navigator.mediaDevices.getUserMedia)),
      CAN_USE_WEBGL: (0, _v3.inline)(() => {
        if (_v1.environmentConfig.IS_TEST) return !1;
        try {
          let _v0 = document.createElement("canvas");
          return !!(_v0.getContext("webgl") || _v0.getContext("experimental-webgl"));
        } catch (_v0) {
          return !1;
        }
      })
    },
    CAN_USE_BROADCAST_CHANNEL() {
      if (!window.BroadcastChannel) return !1;
      try {
        return new window.BroadcastChannel("test_channel").close(), !0;
      } catch (_v0) {
        return !1;
      }
    }
  };
  _v0.s(["browserConfig", 0, _v4]);
}