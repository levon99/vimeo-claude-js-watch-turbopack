{
  "use strict";

  _v0.s(["AddressFormContainer", () => _v14, "formNames", () => _v13]);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = {
      country: "country",
      postalCode: "postalCode"
    },
    _v14 = ({
      bspStyling: _v0
    }) => {
      let {
          state: {
            order: _v1,
            billingAddress: _v2
          },
          dispatch: _v3
        } = (0, _v12.useStateContext)(),
        _v4 = (0, _v5.useViewer)(),
        {
          settings: _v5
        } = (0, _v4.useOrionSettings)(),
        _v6 = _v5.use_juno_billing,
        [_v7] = (0, _v8.useUpdateOrderPreview)(),
        [_v8] = (0, _v7.useTrackCheckoutFormAction)(),
        [_v9, _v10] = (0, _v2.useState)(!1),
        _v11 = (0, _v2.useRef)(_v2);
      (0, _v2.useEffect)(() => {
        _v11.current = _v2;
      }, [_v2]), (0, _v2.useEffect)(() => {
        let _v0 = _v11.current,
          _v1 = _v0?.country,
          _v2 = _v0?.postalCode,
          _v3 = _v1?.billingAddress?.country,
          _v4 = _v1?.billingAddress?.postalCode,
          _v5 = "US" === _v1 || "CA" === _v1,
          _v6 = (0, _v11.validatePostalCode)(_v1, _v2),
          _v7 = (0, _v11.validatePostalCode)(_v3, _v4),
          _v8 = !!_v6 && !_v9 && _v6 !== _v7,
          _v9 = !!_v1 && _v1 !== _v3;
        if (_v1 && _v1 && (_v5 ? _v8 : _v9)) {
          let _v0 = {
            ..._v1,
            billingAddress: _v0,
            vatId: void 0
          };
          _v3({
            type: _v10.ActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v7(_v0);
        }
      }, [_v2, _v1, _v3, _v7, _v9]);
      let _v12 = (0, _v2.useCallback)(_v0 => {
          _v3({
            type: _v10.ActionTypes.SET_BILLING_ADDRESS,
            payload: {
              country: _v0
            }
          }), _v8(_v9.CHECKOUT_FORM_ACTION_TYPE_SELECT, _v9.CHECKOUT_FORM_ACTION_LOCATION_COUNTRY), _v10(!1), _v6 && _v3({
            type: _v10.ActionTypes.PAYMENT_ALERT,
            payload: void 0
          });
        }, [_v3, _v8, _v6]),
        _v13 = (0, _v2.useCallback)(_v0 => {
          let _v1 = _v11.current;
          if (!_v1?.country) return;
          let _v2 = _v1.country,
            _v3 = (0, _v11.validatePostalCode)(_v2, _v0),
            _v4 = ("US" === _v2 || "CA" === _v2) && null === _v3;
          _v8(_v4 ? _v9.CHECKOUT_FORM_ACTION_TYPE_ERROR : _v9.CHECKOUT_FORM_ACTION_TYPE_INPUT, _v9.CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE), _v10(_v4), _v6 && _v3({
            type: _v10.ActionTypes.PAYMENT_ALERT,
            payload: _v4 ? {
              status: "error",
              message: "US" === _v2 ? (0, _v3.translate)({
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
              })
            } : void 0
          });
          let _v5 = {
            address: _v1.address ?? "",
            city: _v1.city ?? "",
            country: _v1.country ?? "",
            postalCode: _v3 ?? _v0,
            state: _v1.state ?? ""
          };
          _v3({
            type: _v10.ActionTypes.SET_BILLING_ADDRESS,
            payload: _v5
          });
        }, [_v3, _v8, _v6]);
      return (0, _v2.useEffect)(() => {
        !_v2 && _v4?.location && _v12(_v4.location);
      }, [_v2, _v4, _v12]), (0, _v2.useEffect)(() => {
        _v1 && _v2 && _v1.billingAddress?.postalCode === _v2.postalCode && _v10(!1);
      }, [_v2, _v1]), (0, _v1.jsx)(_v6.AddressForm, {
        billingAddress: _v2,
        onCountryChange: _v12,
        onCountryClick: () => _v8(_v9.CHECKOUT_FORM_ACTION_TYPE_CLICK, _v9.CHECKOUT_FORM_ACTION_LOCATION_COUNTRY),
        onPostalCodeChange: _v13,
        postalCodeIsInvalid: _v9,
        bspStyling: _v0
      }, _v2?.country);
    };
}