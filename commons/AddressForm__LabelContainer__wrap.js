{
  "use strict";

  _v0.s(["AddressForm", () => _v15, "LabelContainer", () => _v16]);
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
  let _v15 = ({
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
        _v13 = (0, _v3.useRef)(!1);
      (0, _v3.useEffect)(() => {
        !_v13.current && _v0?.postalCode && (_v13.current = !0, _v12(_v0.postalCode));
      }, [_v0?.postalCode]);
      let _v14 = (0, _v3.useMemo)(() => (0, _v2.default)(_v0 => {
        _v2(_v0);
      }, 600), [_v2]);
      (0, _v3.useEffect)(() => {
        if (!_v11 && !_v0?.postalCode) return;
        let _v0 = _v0?.country;
        return "US" !== _v0 && "CA" !== _v0 && _v11 ? void _v12("") : (_v11 !== _v0?.postalCode && _v14(_v11), () => {
          _v14.cancel();
        });
      }, [_v11, _v0, _v14]);
      let _v15 = _v6 || void 0 === _v5 ? (0, _v1.jsx)(_v13.VatContainer, {}) : (0, _v1.jsx)(_v12.PaymentMethodVatContainer, {
        country: _v0?.country,
        onSubmitVatId: _v5
      });
      return (0, _v1.jsxs)(_v5.Box, {
        flexWrap: "wrap",
        width: "100%",
        children: [(0, _v1.jsxs)(_v4.Flex, {
          as: "form",
          "data-testid": "address-form",
          gap: _v8 ? "100" : "75",
          alignItems: "center",
          flexDirection: _v8 ? "row" : {
            base: "column",
            lg: "row"
          },
          width: "100%",
          children: [(0, _v1.jsx)(_v16, {
            flex: "1",
            labelCopy: (0, _v10.translate)({
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
            children: (0, _v1.jsx)(_v8.Select, {
              name: _v11.formNames.country,
              disabled: _v9,
              value: _v0?.country ? [_v0?.country] : void 0,
              onValueChange: _v0 => _v3(_v0.value[0]),
              items: Object.keys(_v14.countries).map(_v0 => ({
                value: _v0,
                label: _v14.countries[_v0].name
              })).sort((_v0, _v1) => _v0.label.localeCompare(_v1.label)),
              onClick: () => {
                _v4?.();
              }
            })
          }), _v0?.country && _v14.countries[_v0?.country]?.subdivisions && (0, _v1.jsx)(_v16, {
            flex: "1",
            labelCopy: _v0?.country === "US" ? (0, _v10.translate)({
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
            }) : (0, _v10.translate)({
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
              name: _v11.formNames.postalCode,
              value: _v11
            })
          })]
        }), _v15]
      });
    },
    _v16 = ({
      labelCopy: _v0,
      children: _v1,
      flex: _v2,
      marginBottom: _v3,
      showAsterisk: _v4 = !0,
      useBoldLabel: _v5 = !1
    }) => (0, _v1.jsxs)(_v5.Box, {
      flex: _v2,
      maxW: (0, _v9.rem)(468),
      width: "100%",
      marginBottom: _v3,
      children: [(0, _v1.jsxs)(_v7.Text, {
        as: "label",
        variant: _v5 ? "heading-xs" : "body-md",
        paddingLeft: "50",
        paddingBottom: "50",
        lineHeight: "2",
        children: [_v0, _v4 && (0, _v1.jsxs)(_v1.Fragment, {
          children: [" ", (0, _v1.jsxs)(_v7.Text, {
            as: "span",
            variant: "body-xl",
            color: "text-primary",
            children: [" ", "*"]
          })]
        })]
      }), _v1]
    });
}