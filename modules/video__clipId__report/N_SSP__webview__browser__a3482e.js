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
    let _v0 = String((0, _v2.useRouter)().query.clipId ?? ""),
      _v1 = (0, _v13.useReportEmbedCompletion)(`/${_v0}`),
      _v2 = (0, _v12.isEmbeddedInNativeApp)() ? "webview" : "browser",
      {
        trackReportFlowOpened: _v3,
        trackReportFlowLoadFailed: _v4
      } = (0, _v11.useReportFlowTracking)();
    (0, _v10.usePicoEffect)(() => !!_v0 && (_v3({
      contentType: "video",
      context: _v2,
      clipId: _v0
    }), !0), [_v0, _v2], {
      once: !0
    });
    let _v5 = (0, _v3.useCallback)(() => _v4({
      contentType: "video",
      context: _v2,
      clipId: _v0
    }), [_v4, _v2, _v0]);
    return _v0 ? (0, _v1.jsx)(_v8, {
      clipId: _v0,
      onClose: () => _v1("cancelled"),
      onDone: () => _v1("submitted"),
      onLoadError: _v5
    }) : null;
  }], 0);
}