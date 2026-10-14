{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useUploadByClipId", 0, function (_v0) {
    let _v1 = (0, _v3.useUploaderStoreApi)();
    return (0, _v1.useStore)(_v1, _v0 => void 0 === _v0 ? void 0 : _v0.uploads.find(_v0 => _v0.clipId === _v0));
  }, "useUploaderActions", 0, function () {
    let _v0 = (0, _v3.useUploaderStoreApi)();
    return (0, _v1.useStore)(_v0, (0, _v2.useShallow)(_v0 => ({
      upload: _v0.upload,
      cancelAll: _v0.cancelAll,
      resumeAll: _v0.resumeAll,
      pauseAll: _v0.pauseAll,
      clearAll: _v0.clearAll,
      clear: _v0.clear,
      fileSelectStateChange: _v0.fileSelectStateChange,
      addShouldUploadStartCallback: _v0.addShouldUploadStartCallback,
      addDeferredUploadPreflight: _v0.addDeferredUploadPreflight
    })));
  }, "useUploaderConfig", 0, function () {
    let _v0 = (0, _v3.useUploaderStoreApi)();
    return (0, _v1.useStore)(_v0, (0, _v2.useShallow)(_v0 => ({
      enableUniversalHosting: _v0.enableUniversalHosting,
      fileInputAccept: _v0.fileInputAccept
    })));
  }, "useUploaderSummary", 0, function (_v0) {
    let _v1 = (0, _v3.useUploaderStoreApi)();
    return (0, _v1.useStore)(_v1, _v0 => _v0 ? _v0(_v0.uploaderSummary) : _v0.uploaderSummary);
  }, "useUploads", 0, function () {
    let _v0 = (0, _v3.useUploaderStoreApi)();
    return (0, _v1.useStore)(_v0, _v0 => _v0.uploads);
  }]);
}