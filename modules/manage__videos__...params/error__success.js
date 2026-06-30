{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = _v2.default.memo(({
      noticeType: _v0,
      onClose: _v1,
      seatsCount: _v2 = 1
    }) => {
      switch (_v0) {
        case _v5.NOTICE_TYPES.PAYMENT_FAILED:
          return (0, _v1.jsx)(_v8, {
            status: "error",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.PAYMENT_FAILED]
          });
        case _v5.NOTICE_TYPES.SOMETHING_WRONG:
          return (0, _v1.jsx)(_v8, {
            status: "error",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.SOMETHING_WRONG]
          });
        case _v5.NOTICE_TYPES.PURCHASE_SUCCESSFULL:
          return (0, _v1.jsx)(_v8, {
            status: "success",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.PURCHASE_SUCCESSFULL]
          });
        case _v5.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS:
          return (0, _v1.jsx)(_v8, {
            status: "success",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.PURCHASE_SUCCESSFULL_WITH_SEATS](_v2)
          });
        case _v5.NOTICE_TYPES.ADDED_SEATS_SUCCESSFULLY:
          return (0, _v1.jsx)(_v8, {
            status: "success",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.ADDED_SEATS_SUCCESSFULLY]
          });
        case _v5.NOTICE_TYPES.INVITATION_FAILED:
          return (0, _v1.jsx)(_v8, {
            status: "error",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.INVITATION_FAILED]
          });
        case _v5.NOTICE_TYPES.PURCHASE_INVITATION_SUCCESSFULL:
          return (0, _v1.jsx)(_v8, {
            status: "success",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.PURCHASE_INVITATION_SUCCESSFULL]
          });
        case _v5.NOTICE_TYPES.BILLING_FETCH_FAILED:
          return (0, _v1.jsx)(_v8, {
            status: "error",
            onClose: _v1,
            children: _v6.default.Notices[_v5.NOTICE_TYPES.BILLING_FETCH_FAILED]
          });
        default:
          return null;
      }
    }),
    _v8 = ({
      status: _v0,
      onClose: _v1,
      children: _v2,
      ..._v3
    }) => (0, _v1.jsx)(_v3.Alert, {
      status: _v0,
      fontSize: (0, _v4.rem)(14),
      transform: `translateY(-${(0, _v4.rem)(2)})`,
      onClose: _v1,
      ..._v3,
      children: _v2
    });
  _v0.s(["default", 0, _v7]);
}