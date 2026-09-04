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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  _v0.s(["AddressForm", 0, ({
    billingAddress: _v0,
    postalCodeIsInvalid: _v1,
    onPostalCodeChange: _v2,
    onCountryChange: _v3,
    onCountryClick: _v4,
    onSubmitVatId: _v5,
    isCheckout: _v6 = !0,
    showAsRequired: _v7,
    bspStyling: _v8 = !1,
    disableCountry: _v9 = !1,
    disablePostalCode: _v10 = !1
  }) => {
    let [_v11, _v12] = (0, _v3.useState)(""),
      _v13 = (0, _v3.useRef)(!1),
      _v14 = _v0?.country,
      _v15 = _v0?.postalCode;
    (0, _v3.useEffect)(() => {
      !_v13.current && _v15 && (_v13.current = !0, _v12(_v15));
    }, [_v15]);
    let _v16 = (0, _v3.useMemo)(() => (0, _v2.default)(_v0 => {
      _v2(_v0);
    }, 600), [_v2]);
    (0, _v3.useEffect)(() => {
      let _v0 = !!(_v11 || _v15),
        _v1 = "US" === _v14 || "CA" === _v14;
      if (_v0 && !_v1 && _v11 && _v12(""), _v0) {
        let _v0 = (0, _v14.validatePostalCode)(_v14, _v11),
          _v1 = (0, _v14.validatePostalCode)(_v14, _v15);
        (_v0 ?? _v11.trim().toUpperCase()) !== (_v1 ?? _v15?.trim().toUpperCase()) && _v16(_v11);
      }
      return () => {
        _v16.cancel();
      };
    }, [_v11, _v14, _v15, _v16]);
    let _v17 = _v6 || void 0 === _v5 ? (0, _v1.jsx)(_v12.VatContainer, {}) : (0, _v1.jsx)(_v11.PaymentMethodVatContainer, {
      country: _v0?.country,
      onSubmitVatId: _v5
    });
    return (0, _v1.jsxs)(_v4.Box, {
      flexWrap: "wrap",
      width: "100%",
      children: [(0, _v1.jsxs)(_v5.Flex, {
        as: "form",
        "data-testid": "address-form",
        gap: _v8 ? "100" : "75",
        alignItems: "center",
        flexDirection: _v8 ? "row" : {
          base: "column",
          lg: "row"
        },
        width: "100%",
        children: [(0, _v1.jsx)(_v10.LabelContainer, {
          flex: "1",
          labelCopy: (0, _v8.translate)({
            singular: "Country",
            dictionary: {
              es: {
                singular: "País"
              },
              "de-DE": {
                singular: "Land"
              },
              "fr-FR": {
                singular: "Pays"
              },
              "ja-JP": {
                singular: "国"
              },
              "ko-KR": {
                singular: "국가"
              },
              "pt-BR": {
                singular: "País"
              },
              "zh-CN": {
                singular: "国家/地区"
              }
            }
          }),
          showAsterisk: _v7,
          useBoldLabel: _v8,
          children: (0, _v1.jsx)(_v7.Select, {
            name: _v9.formNames.country,
            disabled: _v9,
            value: _v0?.country ? [_v0.country] : void 0,
            onValueChange: _v0 => _v3(_v0.value[0]),
            items: Object.keys(_v13.countries).map(_v0 => ({
              value: _v0,
              label: _v13.countries[_v0].name
            })).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)),
            onClick: () => {
              _v4?.();
            }
          })
        }), _v0?.country && _v13.countries[_v0.country]?.subdivisions && (0, _v1.jsx)(_v10.LabelContainer, {
          flex: "1",
          labelCopy: "US" === _v0.country ? (0, _v8.translate)({
            singular: "Zip code",
            dictionary: {
              es: {
                singular: "Código postal"
              },
              "de-DE": {
                singular: "Postleitzahl"
              },
              "fr-FR": {
                singular: "Code postal"
              },
              "ja-JP": {
                singular: "郵便番号"
              },
              "ko-KR": {
                singular: "우편 번호"
              },
              "pt-BR": {
                singular: "Código postal"
              },
              "zh-CN": {
                singular: "邮政编码"
              }
            }
          }) : (0, _v8.translate)({
            singular: "Postal code",
            dictionary: {
              es: {
                singular: "Código postal"
              },
              "de-DE": {
                singular: "PLZ"
              },
              "fr-FR": {
                singular: "Code postal"
              },
              "ja-JP": {
                singular: "郵便番号"
              },
              "ko-KR": {
                singular: "우편 번호"
              },
              "pt-BR": {
                singular: "Código postal"
              },
              "zh-CN": {
                singular: "邮政编码"
              }
            }
          }),
          showAsterisk: _v7,
          useBoldLabel: _v8,
          children: (0, _v1.jsx)(_v6.Input, {
            type: "text",
            isInvalid: _v1,
            isDisabled: _v10,
            onChange: _v0 => _v12(_v0.currentTarget.value),
            size: "md",
            name: _v9.formNames.postalCode,
            value: _v11
          })
        })]
      }), _v17]
    });
  }]);
}