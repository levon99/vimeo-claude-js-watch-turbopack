{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = ({
    userId: _v0,
    onClose: _v1,
    onDone: _v2
  }) => {
    let _v3 = (0, _v8.useUserReport)({
        userId: _v0,
        onClose: _v1
      }),
      _v4 = _v3.showBlockOption ? (0, _v1.jsx)(_v6.BlockUserCheckbox, {
        isChecked: _v3.blockUser,
        onChange: _v3.setBlockUser
      }) : null;
    return (0, _v1.jsx)(_v4.ReportFlowEmbed, {
      report: _v3,
      onDone: _v2,
      doneLabel: (0, _v7.returnToProfileLabel)(),
      headerAction: (0, _v1.jsx)(_v5.ReportHelpLink, {}),
      footerAction: _v4
    });
  };
  var _v10 = _v0.i(0);
  (0, _v3.withPageSetup)({
    requireLogin: !0,
    inlineViewer: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => {
    let _v0 = Number((0, _v2.useRouter)().query.userId),
      _v1 = (0, _v10.useReportEmbedCompletion)(`/user${_v0}`);
    return (0, _v1.jsx)(_v9, {
      userId: _v0,
      onClose: () => _v1("cancelled"),
      onDone: () => _v1("submitted")
    });
  }], 0);
}