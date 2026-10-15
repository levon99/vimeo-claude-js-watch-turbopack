{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => "video" === _v0.contentType ? {
    content_type: "video",
    context: _v0.context,
    clip_id: _v0.clipId
  } : {
    content_type: "file",
    context: _v0.context,
    file_id: _v0.fileId
  };
  _v0.s(["useReportFlowTracking", 0, function () {
    let _v0 = (0, _v2.usePico)();
    return {
      trackReportFlowOpened: (0, _v1.useCallback)(_v0 => {
        _v0.track("report_flow_opened", _v3(_v0));
      }, [_v0]),
      trackReportFlowLoadFailed: (0, _v1.useCallback)(_v0 => {
        _v0.track("report_flow_load_failed", _v3(_v0));
      }, [_v0])
    };
  }]);
}