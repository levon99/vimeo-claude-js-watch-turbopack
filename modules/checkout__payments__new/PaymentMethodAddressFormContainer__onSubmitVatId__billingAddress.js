{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["PaymentMethodAddressFormContainer", 0, ({
    onSubmitVatId: _v0,
    billingAddress: _v1,
    setBillingAddress: _v2,
    paymentFormType: _v3,
    formLoaded: _v4
  }) => {
    let [_v5, _v6] = (0, _v2.useState)(!1);
    return (0, _v1.jsx)(_v3.AddressForm, {
      billingAddress: _v1,
      onCountryChange: _v0 => {
        if (_v2({
          country: _v0
        }), window?.Z && _v4 && document.getElementById(_v4.ZUORA_HPM_IFRAME_ID)) {
          let _v0 = _v5.countries[_v0]?.iso3;
          window.Z.post(_v4.ZUORA_HPM_IFRAME_ID, `setField(creditCardCountry:${_v0})`);
        }
      },
      onPostalCodeChange: _v0 => {
        if (!_v1?.country) return;
        let _v1 = "US" === _v1.country ? 5 : 6 * ("CA" === _v1.country);
        _v0.length < _v1 ? _v6(!0) : _v6(!1), _v2({
          ..._v1,
          postalCode: _v0
        }), window?.Z && _v4 && document.getElementById(_v4.ZUORA_HPM_IFRAME_ID) && window.Z.post(_v4.ZUORA_HPM_IFRAME_ID, `setField(creditCardPostalCode:${_v0})`);
      },
      onSubmitVatId: _v0,
      postalCodeIsInvalid: _v5,
      isCheckout: !1,
      showAsRequired: _v3 !== _v6.PaymentFormTypes.TYPE_STRIPE
    });
  }]);
}