{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["ProductNameWithTier", 0, ({
    productId: _v0,
    variant: _v1,
    noOfLines: _v2
  }) => {
    if (!(0, _v3.isProductId)(_v0)) return (0, _v1.jsx)(_v2.Text, {
      variant: _v1,
      color: "text-primary",
      noOfLines: _v2,
      children: _v0
    });
    let _v3 = _v3.PRODUCT_TIER_LABELS[_v0];
    return (0, _v1.jsxs)(_v2.Text, {
      variant: _v1,
      color: "text-primary",
      noOfLines: _v2,
      children: [_v3.PRODUCT_NAMES[_v0], void 0 !== _v3 && (0, _v1.jsx)(_v2.Text, {
        as: "span",
        variant: _v1,
        color: "text-secondary",
        children: ` ${_v3}`
      })]
    });
  }]);
}