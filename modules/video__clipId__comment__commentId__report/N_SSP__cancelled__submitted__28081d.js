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
    commentId: _v1,
    onClose: _v2,
    onDone: _v3
  }) => {
    let _v4 = (0, _v6.useCommentReport)({
      clipId: _v0,
      commentId: _v1,
      onClose: _v2
    });
    return (0, _v1.jsx)(_v3.ReportFlowEmbed, {
      report: _v4,
      onDone: _v3,
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
    let _v0 = (0, _v2.useRouter)(),
      _v1 = String(_v0.query.clipId ?? ""),
      _v2 = String(_v0.query.commentId ?? ""),
      _v3 = (0, _v9.useReportEmbedCompletion)(`/${_v1}?comment=${_v2}`);
    return (0, _v1.jsx)(_v7, {
      clipId: _v1,
      commentId: _v2,
      onClose: () => _v3("cancelled"),
      onDone: () => _v3("submitted")
    });
  }], 0);
}