{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    clipId: _v0,
    onClose: _v1,
    onDone: _v2
  }) => {
    let _v3 = (0, _v6.useVideoReport)({
      clipId: _v0,
      onClose: _v1
    });
    return (0, _v1.jsx)(_v3.ReportFlowEmbed, {
      report: _v3,
      onDone: _v2,
      doneLabel: (0, _v5.returnToVideoLabel)(),
      headerAction: (0, _v1.jsx)(_v4.ReportHelpLink, {})
    });
  };
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  (0, _v8.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = String((0, _v2.useRouter)().query.clipId ?? ""),
      _v1 = (0, _v9.useReportEmbedCompletion)(`/${_v0}`);
    return (0, _v1.jsx)(_v7, {
      clipId: _v0,
      onClose: () => _v1("cancelled"),
      onDone: () => _v1("submitted")
    });
  }], 0);
}