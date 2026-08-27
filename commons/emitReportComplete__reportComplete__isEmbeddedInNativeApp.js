{
  "use strict";

  _v0.s(["emitReportComplete", 0, _v0 => {
    let {
        webkit: _v1,
        nativeBridge: _v2
      } = window,
      _v3 = {
        action: "reportComplete",
        outcome: _v0
      };
    try {
      if (_v1?.messageHandlers?.nativeBridge) return _v1.messageHandlers.nativeBridge.postMessage(_v3), !0;
      if (_v2) return _v2.postMessage(JSON.stringify(_v3)), !0;
    } catch {}
    return !1;
  }, "isEmbeddedInNativeApp", 0, () => {
    let {
      webkit: _v0,
      nativeBridge: _v1
    } = window;
    return !!_v0?.messageHandlers?.nativeBridge || !!_v1;
  }]);
}