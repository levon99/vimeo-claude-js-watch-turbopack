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
  let _v15 = _v0 => {
    if ("PAYMENT_METHOD_TYPES_PAYPAL" === _v0.type) return _v2.default.createElement(_v10.Paypal);
    switch (_v0.card?.brand) {
      case "CARD_BRAND_AMERICAN_EXPRESS":
        return _v2.default.createElement(_v6.Amex);
      case "CARD_BRAND_DISCOVER":
        return _v2.default.createElement(_v7.Discover);
      case "CARD_BRAND_JCB":
        return _v2.default.createElement(_v8.Jcb);
      case "CARD_BRAND_MASTER_CARD":
        return _v2.default.createElement(_v9.Mastercard);
      case "CARD_BRAND_UNION_PAY":
        return _v2.default.createElement(_v11.UnionPay);
      case "CARD_BRAND_VISA":
        return _v2.default.createElement(_v12.Visa);
      default:
        return _v2.default.createElement(_v5.CreditCard);
    }
  };
  _v0.s(["SavedCardSelect", 0, function ({
    paymentMethods: _v0,
    paymentMethodId: _v1,
    onSelectPaymentMethod: _v2,
    disabled: _v3
  }) {
    let _v4 = (0, _v14.useHideCardExpiry)(),
      _v5 = _v0.find(_v0 => _v0.id === _v1);
    return (0, _v1.jsx)(_v4.Select, {
      "data-testid": "upsell-saved-card-select",
      disabled: _v3,
      leftIcon: _v5 ? _v15(_v5) : void 0,
      items: _v0.map(_v0 => ({
        value: _v0.id,
        label: (0, _v13.getPaymentMethodLabel)(_v0, _v4)
      })),
      value: _v1 ? [_v1] : void 0,
      onValueChange: _v0 => _v2(_v0.value[0]),
      children: _v0 => {
        let _v1 = _v0.find(_v0 => _v0.id === _v0.value);
        return (0, _v1.jsx)(_v4.SelectItem, {
          item: _v0,
          children: (0, _v1.jsxs)(_v3.Flex, {
            gap: "xs",
            alignItems: "center",
            children: [_v1 ? _v15(_v1) : null, (0, _v1.jsx)(_v4.SelectItemText, {
              children: _v0.label
            })]
          })
        });
      }
    });
  }]);
}