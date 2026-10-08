{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = new class {
    sendLog(_v0, _v1, _v2 = {}) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addError(Error(_v0), {
          component: _v1,
          hash: _v1.default.videoHash,
          vimeoSessionId: _v1.default.getVimeoSessionId(),
          serverUrl: _v1.default.serverUrl,
          videoSessionId: _v1.default.videoSessionId?.toString() || "",
          isStaff: _v1.default.isStaff.toString() || "",
          sessionDuration: performance.now() - _v1.default.initTime,
          ..._v2
        });
      });
    }
    sendAction(_v0, _v1 = {}) {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addAction(_v0, {
          hash: _v1.default.videoHash,
          vimeoSessionId: _v1.default.getVimeoSessionId(),
          serverUrl: _v1.default.serverUrl,
          videoSessionId: _v1.default.videoSessionId?.toString() || "",
          isStaff: _v1.default.isStaff.toString() || "",
          sessionDuration: performance.now() - _v1.default.initTime,
          ..._v1
        });
      });
    }
    sendPageView() {
      window.DD_RUM && window.DD_RUM.onReady(() => {
        window.DD_RUM.addAction("editorView", {
          screenWidth: window.screen.width,
          screenHeight: window.screen.height
        });
      });
    }
  }();
  _v0.s(["LogService", 0, _v2, "default", 0, _v2]);
}