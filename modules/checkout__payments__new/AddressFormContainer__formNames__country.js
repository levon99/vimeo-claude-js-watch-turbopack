{
  "use strict";

  _v0.s(["AddressFormContainer", () => _v11, "formNames", () => _v10]);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = {
      country: "country",
      postalCode: "postalCode"
    },
    _v11 = ({
      formLoaded: _v0,
      bspStyling: _v1
    }) => {
      let {
          state: {
            order: _v2,
            billingAddress: _v3
          },
          dispatch: _v4
        } = (0, _v9.useStateContext)(),
        _v5 = (0, _v3.useViewer)(),
        [_v6] = (0, _v8.useUpdateOrderPreview)(),
        [_v7] = (0, _v8.useTrackCheckoutFormAction)(),
        [_v8, _v9] = (0, _v2.useState)(!1),
        _v10 = (0, _v2.useRef)(_v3);
      (0, _v2.useEffect)(() => {
        _v10.current = _v3;
      }, [_v3]), (0, _v2.useEffect)(() => {
        let _v0 = _v10.current,
          _v1 = _v0?.country,
          _v2 = _v0?.postalCode,
          _v3 = _v2?.billingAddress?.country,
          _v4 = _v2?.billingAddress?.postalCode,
          _v5 = "US" === _v1 || "CA" === _v1 ? !!_v2 && !_v8 && _v2 !== _v4 : !!_v1 && _v1 !== _v3;
        if (_v2 && _v1 && _v5) {
          let _v0 = {
            ..._v2,
            billingAddress: _v0,
            vatId: void 0
          };
          _v4({
            type: _v7.ActionTypes.ORDER_PREVIEW,
            payload: _v0
          }), _v6(_v0);
        }
      }, [_v3, _v2, _v4, _v6, _v8]);
      let _v11 = (0, _v2.useCallback)(_v0 => {
        _v4({
          type: _v7.ActionTypes.SET_BILLING_ADDRESS,
          payload: {
            country: _v0
          }
        }), _v7(_v5.CHECKOUT_FORM_ACTION_TYPE_SELECT, _v5.CHECKOUT_FORM_ACTION_LOCATION_COUNTRY);
      }, [_v4, _v7]);
      return (0, _v2.useEffect)(() => {
        !_v3 && _v5?.location && _v11(_v5.location);
      }, [_v3, _v5, _v11]), (0, _v2.useEffect)(() => {
        if (_v2 && _v3 && _v2.billingAddress?.postalCode === _v3.postalCode && _v9(!1), window?.Z && _v0 && _v2 && document.getElementById(_v5.ZUORA_HPM_IFRAME_ID)) {
          window.Z.post(_v5.ZUORA_HPM_IFRAME_ID, `setField(creditCardPostalCode:${_v2?.billingAddress?.postalCode ?? ""})`), window.Z.post(_v5.ZUORA_HPM_IFRAME_ID, `setField(creditCardState:${_v2?.billingAddress?.state ?? ""})`);
          let _v0 = _v6.countries[_v2?.billingAddress?.country]?.iso3;
          window.Z.post(_v5.ZUORA_HPM_IFRAME_ID, `setField(creditCardCountry:${_v0})`);
        }
      }, [_v3, _v2, _v0]), (0, _v1.jsx)(_v4.AddressForm, {
        billingAddress: _v3,
        onCountryChange: _v11,
        onCountryClick: () => _v7(_v5.CHECKOUT_FORM_ACTION_TYPE_CLICK, _v5.CHECKOUT_FORM_ACTION_LOCATION_COUNTRY),
        onPostalCodeChange: _v0 => {
          let _v1 = _v10.current;
          if (!_v1?.country) return;
          let _v2 = "US" === _v1.country ? 5 : 6 * ("CA" === _v1.country);
          _v0.length < _v2 ? (_v7(_v5.CHECKOUT_FORM_ACTION_TYPE_ERROR, _v5.CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE), _v9(!0)) : (_v7(_v5.CHECKOUT_FORM_ACTION_TYPE_INPUT, _v5.CHECKOUT_FORM_ACTION_LOCATION_ZIP_CODE), _v9(!1));
          let _v3 = {
            address: _v1.address ?? "",
            city: _v1.city ?? "",
            country: _v1.country ?? "",
            postalCode: _v0,
            state: _v1.state ?? ""
          };
          _v4({
            type: _v7.ActionTypes.SET_BILLING_ADDRESS,
            payload: _v3
          });
        },
        postalCodeIsInvalid: _v8,
        bspStyling: _v1
      });
    };
}