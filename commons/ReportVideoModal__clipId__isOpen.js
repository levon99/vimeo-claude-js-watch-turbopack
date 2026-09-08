{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = ({
    clipId: _v0,
    isOpen: _v1,
    onClose: _v2,
    onSubmitReport: _v3
  }) => {
    let _v4 = (0, _v4.useVideoReport)({
      clipId: _v0,
      onClose: _v2,
      onSubmitted: _v3
    });
    return (0, _v1.jsx)(_v2.ReportFlowModal, {
      report: _v4,
      isOpen: _v1,
      headerAction: (0, _v1.jsx)(_v3.ReportHelpLink, {})
    });
  };
  _v0.s(["ReportVideoModal", 0, _v0 => _v0.isOpen ? (0, _v1.jsx)(_v5, {
    ..._v0
  }) : null]);
}