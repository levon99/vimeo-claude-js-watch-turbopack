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
      formLoaded: _v0,
      bspStyling: _v1
    }) => {
      let {
          state: {
            order: _v2,
            billingAddress: _v3
          },
          dispatch: _v4
        } = (0, _v12.useStateContext)(),
        _v5 = (0, _v5.useViewer)(),
        {
          settings: _v6
        } = (0, _v4.useOrionSettings)(),
        _v7 = _v6.use_juno_billing,
        [_v8] = (0, _v11.useUpdateOrderPreview)(),
        [_v9] = (0, _v11.useTrackCheckoutFormAction)(),
        [_v10, _v11] = (0, _v2.useState)(!1),
        _v12 = (0, _v2.useRef)(_v3);
      (0, _v2.useEffect)(() => {
        _v12.current = _v3;
      }, [_v3]), (0, _v2.useEffect)(() => {
        let _v0 = _v12.current,
          _v1 = _v0?.country,
          _v2 = _v0?.postalCode,
          _v3 = _v2?.billingAddress?.country,
          _v4 = _v2?.billingAddress?.postalCode,
          _v5 = "US" === _v1 || "CA" === _v1 ? !!_v2 && !_v10 && _v2 !== _v4 : !!_v1 && _v1 !== _v3;
        if (_v2 && _v1 && _v5) {
          let _v0 = {
            ..._v2,
            billingAddress: _v0,
            vatId: void 0
          };
          _v4({
            type: _v9.ActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v8(_v0);
        }
      }, [_v3, _v2, _v4, _v8, _v10]);
      let _v13 = (0, _v2.useCallback)(_v0 => {
        _v4({
          type: _v9.ActionTypes.SET_BILLING_ADDRESS,
          payload: {
            country: _v0
          }
        }), _v9(_v7.CHECKOUT_FORM_ACTION_TYPE_SELECT, _v7.CHECKOUT_FORM_ACTION_LOCATION_COUNTRY), _v11(!1), _v7 && _v4({
          type: _v9.ActionTypes.PAYMENT_ALERT,
          payload: void 0
        });
      }, [_v4, _v9, _v7]);
      return (0, _v2.useEffect)(() => {
        !_v3 && _v5?.location && _v13(_v5.location);
      }, [_v3, _v5, _v13]), (0, _v2.useEffect)(() => {
        if (_v2 && _v3 && _v2.billingAddress?.postalCode === _v3.postalCode && _v11(!1), window?.Z && _v0 && _v2 && document.getElementById(_v7.ZUORA_HPM_IFRAME_ID)) {
          window.Z.post(_v7.ZUORA_HPM_IFRAME_ID, `setField(creditCardPostalCode:${_v2?.billingAddress?.postalCode ?? ""})`), window.Z.post(_v7.ZUORA_HPM_IFRAME_ID, `setField(creditCardState:${_v2?.billingAddress?.state ?? ""})`);
          let _v0 = _v8.countries[_v2?.billingAddress?.country]?.iso3;
          window.Z.post(_v7.ZUORA_HPM_IFRAME_ID, `setField(creditCardCountry:${_v0})`);
        }
      }, [_v3, _v2, _v0]), (0, _v1.jsx)(_v6.AddressForm, {
        billingAddress: _v3,
        onCountryChange: _v13,
        onCountryClick: () => _v9(_v7.CHECKOUT_FORM_ACTION_TYPE_CLICK, _v7.CHECKOUT_FORM_ACTION_LOCATION_COUNTRY),
        onPostalCodeChange: _v0 => {
          let _v1 = _v12.current;
          if (!_v1?.country) return;
          let _v2 = _v1.country,
            _v3 = _v0.length < ("US" === _v2 ? 5 : 6 * ("CA" === _v2)),
            _v4 = _v7 && "US" === _v2 && !_v3 && !(0, _v10.isUsZipCodeFormatValid)(_v0),
            _v5 = _v3 || _v4;
          _v9(_v5 ? _v7.CHECKOUT_FORM_ACTION_TYPE_ERROR : _v7.CHECKOUT_FORM_ACTION_TYPE_INPUT, _v7.CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE), _v11(_v5), _v7 && _v4({
            type: _v9.ActionTypes.PAYMENT_ALERT,
            payload: _v5 ? {
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
          let _v6 = {
            address: _v1.address ?? "",
            city: _v1.city ?? "",
            country: _v1.country ?? "",
            postalCode: _v0,
            state: _v1.state ?? ""
          };
          _v4({
            type: _v9.ActionTypes.SET_BILLING_ADDRESS,
            payload: _v6
          });
        },
        postalCodeIsInvalid: _v10,
        bspStyling: _v1
      });
    };
}