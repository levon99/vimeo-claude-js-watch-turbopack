{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  _v0.s(["useGetPaymentMethods", 0, () => {
    let {
        dispatch: _v0
      } = (0, _v9.useStateContext)(),
      {
        isLoading: _v1,
        data: _v2
      } = (0, _v3.useGetMePaymentMethods)({
        select: _v8.PAYMENT_METHOD_FIELDS,
        query: {
          showDisabled: !1
        }
      });
    return (0, _v2.useEffect)(() => {
      if (_v2 && _v2.data) {
        let _v0 = _v2.data.filter(_v8.filterSavedPaymentMethods);
        if (_v0.length > 0) {
          _v0({
            type: _v7.ActionTypes.PAYMENT_METHODS,
            payload: _v0
          });
          let _v0 = _v0.find(_v0 => _v0.isDefault) || _v0[0];
          _v0 && _v0({
            type: _v7.ActionTypes.SELECT_PAYMENT_METHOD,
            payload: _v0
          });
        }
      }
    }, [_v0, _v2]), {
      isLoadingPaymentMethods: _v1,
      paymentMethods: _v2?.data
    };
  }, "useSelectPaymentMethod", 0, () => {
    let {
        state: {
          paymentMethods: _v0
        },
        dispatch: _v1
      } = (0, _v9.useStateContext)(),
      [_v2] = (0, _v5.useUpdateOrderPreviewWithDebounce)();
    return (_v0, _v1) => {
      let _v2 = _v0?.find(_v0 => _v0.id === _v0);
      if (!_v0 || !_v2) throw Error("Invalid payment method selected.");
      _v1 && _v2.card?.billingAddress && _v2({
        ..._v1,
        paymentMethodId: _v2.id,
        billingAddress: _v2.card.billingAddress
      }), _v1({
        type: _v7.ActionTypes.SELECT_PAYMENT_METHOD,
        payload: _v2
      });
    };
  }, "useSubmitPaymentMethod", 0, () => {
    let _v0 = (0, _v4.useViewer)(),
      _v1 = (0, _v1.useRouter)(),
      [_v2, _v3] = (0, _v3.usePostMePaymentMethods)(),
      _v4 = _v0?.user,
      _v5 = _v4 ? (_v0, _v1) => {
        (0, _v6.trackZuoraOrderStep)({
          user_id: `${_v4.id}`,
          hpm_session_id: _v0.xsrft,
          step_name: _v0,
          payment_method_id: _v1
        });
      } : null;
    return [_v4?.id || _v1.query?.token ? (_v0, _v1, _v2, _v3, _v4, _v5, _v6, _v7) => {
      _v5?.("Received vendor token", _v0), _v2({
        select: [],
        variables: {
          vendorToken: _v0,
          paymentFormType: _v1,
          isDefault: _v2,
          vatId: _v3,
          billingAddress: _v4,
          hpmSessionId: _v6,
          attemptSyncPayment: _v5 ?? !0,
          isCardVerification: _v7
        }
      }), _v5?.("Passed vendor token to API", _v0);
    } : null, _v3];
  }]);
}