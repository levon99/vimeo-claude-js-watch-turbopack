{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ({
    clipId: _v0,
    clipRequestId: _v1,
    isOpen: _v2,
    onClose: _v3,
    onSubmitReport: _v4
  }) => {
    let _v5 = (0, _v4.useVideoReport)({
      clipId: _v0,
      clipRequestId: _v1,
      onClose: _v3,
      onSubmitted: _v4
    });
    return (0, _v1.jsx)(_v2.ReportFlowModal, {
      report: _v5,
      isOpen: _v2,
      headerAction: (0, _v1.jsx)(_v3.ReportHelpLink, {})
    });
  };
  _v0.s(["ReportVideoModal", 0, _v0 => _v0.isOpen ? (0, _v1.jsx)(_v5, {
    ..._v0
  }) : null]);
}