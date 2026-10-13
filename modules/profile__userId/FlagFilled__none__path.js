{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["FlagFilled", 0, _v0 => (0, _v1.jsx)(_v2.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M19.65 3.999c-1.294.97-2.448 1.186-3.563 1.07-1.18-.121-2.351-.614-3.693-1.19l-.065-.027c-1.267-.543-2.699-1.157-4.21-1.313-1.605-.166-3.263.18-4.969 1.46a1 1 0 0 0-.4.8v15.75a1 1 0 1 0 2 0v-3.98c1.134-.732 2.164-.894 3.163-.791 1.181.122 2.351.615 3.693 1.19l.065.028c1.267.543 2.699 1.157 4.21 1.313 1.605.166 3.263-.18 4.97-1.46a1 1 0 0 0 .4-.8V4.799a1 1 0 0 0-1.6-.8Z",
      fill: "currentColor"
    })
  })], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = ({
    userId: _v0,
    isOpen: _v1,
    onClose: _v2,
    onSubmitReport: _v3
  }) => {
    let _v4 = (0, _v6.useUserReport)({
        userId: _v0,
        onClose: _v2,
        onSubmitted: _v3
      }),
      _v5 = _v4.showBlockOption ? (0, _v1.jsx)(_v5.BlockUserCheckbox, {
        isChecked: _v4.blockUser,
        onChange: _v4.setBlockUser
      }) : null;
    return (0, _v1.jsx)(_v3.ReportFlowModal, {
      report: _v4,
      isOpen: _v1,
      headerAction: (0, _v1.jsx)(_v4.ReportHelpLink, {}),
      footerAction: _v5
    });
  };
  _v0.s(["ReportUserModal", 0, _v0 => _v0.isOpen ? (0, _v1.jsx)(_v7, {
    ..._v0
  }) : null], 0);
}