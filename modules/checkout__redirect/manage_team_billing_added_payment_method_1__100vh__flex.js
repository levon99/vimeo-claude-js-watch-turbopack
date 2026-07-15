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
    paymentMethodId: _v0,
    billingAddress: _v1,
    vatId: _v2
  }) => {
    let [_v3, {
        data: _v4,
        loading: _v5,
        error: _v6
      }] = (0, _v7.useSubmitPaymentMethod)(),
      _v7 = _v2.default.useRef(!1);
    return _v4 && !_v5 && (window.location.href = "/manage/team/billing?added_payment_method=1"), (0, _v2.useEffect)(() => {
      _v3 && !_v7.current && (_v7.current = !0, _v3(_v0, _v6.PaymentFormTypes.TYPE_CREDIT_CARD, !1, _v2, _v1));
    }, [_v3, _v0, _v2, _v1]), (0, _v1.jsx)(_v3.Box, {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      children: (0, _v1.jsx)(_v4.Spinner, {})
    });
  };
  _v0.s(["RedirectContainer", 0, function ({
    redirectUrl: _v0,
    success: _v1,
    addedPaymentMethod: _v2,
    paymentMethodId: _v3
  }) {
    let [_v4] = (0, _v7.useTrackCheckoutFormAction)(),
      _v5 = _v2 ? sessionStorage.getItem("addPmState") : null;
    if (!_v5) return window.location.href = _v0, null;
    _v4(_v5.CHECKOUT_FORM_ACTION_TYPE_LAND, "redirect");
    let _v6 = JSON.parse(_v5 || "{}");
    return _v1 && _v3 ? (0, _v1.jsx)(_v8, {
      paymentMethodId: _v3,
      billingAddress: _v6?.billingAddress,
      vatId: _v6?.vatId
    }) : (window.location.href = _v0, null);
  }]);
}