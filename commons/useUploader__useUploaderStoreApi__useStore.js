{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useUploader", 0, function () {
    let _v0 = (0, _v3.useUploaderStoreApi)();
    return (0, _v1.useStore)(_v0, (0, _v2.useShallow)(_v0 => ({
      service: _v0.service,
      hasBeenInitialized: _v0.hasBeenInitialized,
      isFileSelectOpen: _v0.isFileSelectOpen,
      uploads: _v0.uploads,
      uploaderSummary: _v0.uploaderSummary,
      fileInputAccept: _v0.fileInputAccept,
      enableUniversalHosting: _v0.enableUniversalHosting,
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
  }]);
}