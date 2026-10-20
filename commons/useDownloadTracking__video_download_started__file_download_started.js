{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useDownloadTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackVideoDownloadStarted: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_download_started", {
          video_id: null != _v0.videoId ? String(_v0.videoId) : null,
          file_quality: _v0.fileQuality,
          file_rendition: _v0.fileRendition
        });
      }, [_v0]),
      trackFileDownloadStarted: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_download_started", {
          file_id: _v0.fileId,
          file_download_source: _v0.source
        });
      }, [_v0])
    };
  }]);
}