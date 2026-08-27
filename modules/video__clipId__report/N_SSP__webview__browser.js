{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ({
    clipId: _v0,
    onClose: _v1,
    onDone: _v2,
    onLoadError: _v3
  }) => {
    let _v4 = (0, _v7.useVideoReport)({
      clipId: _v0,
      onClose: _v1
    });
    return (0, _v1.jsx)(_v4.ReportFlowEmbed, {
      report: _v4,
      onDone: _v2,
      doneLabel: (0, _v6.returnToVideoLabel)(),
      headerAction: (0, _v1.jsx)(_v5.ReportHelpLink, {}),
      onLoadError: _v3
    });
  };
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  (0, _v9.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0,
      _v1 = String((0, _v2.useRouter)().query.clipId ?? ""),
      _v2 = (0, _v13.useReportEmbedCompletion)(`/${_v1}`),
      _v3 = (0, _v12.isEmbeddedInNativeApp)() ? "webview" : "browser",
      {
        trackReportFlowOpened: _v4,
        trackReportFlowLoadFailed: _v5
      } = (_v0 = (0, _v11.usePico)(), {
        trackReportFlowOpened: (0, _v3.useCallback)(({
          contentType: _v0,
          context: _v1,
          clipId: _v2
        }) => {
          _v0.track("report_flow_opened", {
            content_type: _v0,
            context: _v1,
            clip_id: _v2
          });
        }, [_v0]),
        trackReportFlowLoadFailed: (0, _v3.useCallback)(({
          contentType: _v0,
          context: _v1,
          clipId: _v2
        }) => {
          _v0.track("report_flow_load_failed", {
            content_type: _v0,
            context: _v1,
            clip_id: _v2
          });
        }, [_v0])
      });
    (0, _v10.usePicoEffect)(() => !!_v1 && (_v4({
      contentType: "video",
      context: _v3,
      clipId: _v1
    }), !0), [_v1, _v3], {
      once: !0
    });
    let _v6 = (0, _v3.useCallback)(() => _v5({
      contentType: "video",
      context: _v3,
      clipId: _v1
    }), [_v5, _v3, _v1]);
    return _v1 ? (0, _v1.jsx)(_v8, {
      clipId: _v1,
      onClose: () => _v2("cancelled"),
      onDone: () => _v2("submitted"),
      onLoadError: _v6
    }) : null;
  }], 0);
}