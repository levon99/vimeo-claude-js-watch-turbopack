{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.i(0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  _v0.s(["PaymentMethodAddressFormContainer", 0, ({
    onSubmitVatId: _v0,
    billingAddress: _v1,
    setBillingAddress: _v2,
    paymentFormType: _v3,
    lockedAddressFields: _v4,
    hidden: _v5 = !1,
    onPostalCodeValidityChange: _v6
  }) => {
    let {
        settings: _v7
      } = (0, _v4.useOrionSettings)(),
      _v8 = _v7.use_juno_billing,
      [_v9, _v10] = (0, _v2.useState)(!1);
    return _v5 ? null : (0, _v1.jsx)(_v5.AddressForm, {
      billingAddress: _v1,
      onCountryChange: _v0 => {
        _v2({
          country: _v0
        }), _v10(!1), _v6?.(!1, void 0, !0);
      },
      onPostalCodeChange: _v0 => {
        if (!_v1?.country) return;
        let _v1 = _v1.country,
          _v2 = "US" === _v1 ? 5 : "CA" === _v1 ? 6 : +!!(0, _v6.isPostalCodeRequired)(_v1),
          _v3 = _v0.length < _v2,
          _v4 = _v8 && "US" === _v1 && !_v3 && !(0, _v8.isUsZipCodeFormatValid)(_v0),
          _v5 = _v3 || _v4,
          _v6 = _v8 && _v5 ? "US" === _v1 ? (0, _v3.translate)({
            singular: "Please enter a valid ZIP code, for example 12345 or 12345-6789.",
            dictionary: {
              es: {
                singular: "Por favor, introduzca un código postal válido, por ejemplo 12345 o 12345-6789."
              },
              "de-DE": {
                singular: "Bitte geben Sie eine gültige Postleitzahl ein, zum Beispiel 12345 oder 12345-6789."
              },
              "fr-FR": {
                singular: "Veuillez saisir un code postal valide, par exemple 12345 ou 12345-6789."
              },
              "ja-JP": {
                singular: "有効な郵便番号を入力してください。例：12345 または 12345-6789。"
              },
              "ko-KR": {
                singular: "유효한 우편번호를 입력해 주세요. 예: 12345 또는 12345-6789."
              },
              "pt-BR": {
                singular: "Por favor, insira um CEP válido, por exemplo 12345 ou 12345-6789."
              },
              "zh-CN": {
                singular: "请输入有效的邮政编码，例如 12345 或 12345-6789。"
              }
            }
          }) : (0, _v3.translate)({
            singular: "Please enter a valid postal code.",
            dictionary: {
              es: {
                singular: "Por favor, introduzca un código postal válido."
              },
              "de-DE": {
                singular: "Bitte geben Sie eine gültige Postleitzahl ein."
              },
              "fr-FR": {
                singular: "Veuillez saisir un code postal valide."
              },
              "ja-JP": {
                singular: "有効な郵便番号を入力してください。"
              },
              "ko-KR": {
                singular: "유효한 우편번호를 입력해 주세요."
              },
              "pt-BR": {
                singular: "Por favor, insira um CEP válido."
              },
              "zh-CN": {
                singular: "请输入有效的邮政编码."
              }
            }
          }) : void 0;
        _v10(_v5), _v6?.(_v5, _v6, !(_v8 && _v5)), _v2({
          ..._v1,
          postalCode: _v0
        });
      },
      onSubmitVatId: _v0,
      postalCodeIsInvalid: _v9,
      isCheckout: !1,
      showAsRequired: _v3 !== _v7.PaymentFormTypes.TYPE_STRIPE,
      disableCountry: _v4?.country,
      disablePostalCode: _v4?.postalCode
    });
  }]);
}