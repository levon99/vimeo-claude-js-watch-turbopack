{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = (0, _v2.createContext)(null),
    _v7 = _v0 => {
      let _v1 = (0, _v2.useContext)(_v6);
      return (0, _v3.useStore)(_v1 ?? _v8, _v0);
    },
    _v8 = (0, _v5.createBundleOfferStore)();
  _v0.s(["BundleOfferProvider", 0, ({
    children: _v0,
    initialIsBundleActive: _v1 = !1
  }) => {
    let [_v2] = (0, _v2.useState)(() => (0, _v5.createBundleOfferStore)(_v1)),
      _v3 = (0, _v4.useBundleOffer)();
    return (0, _v2.useEffect)(() => {
      _v2.getState().setOffer((0, _v5.resolvePricingPageOfferInput)(_v3));
    }, [_v3, _v2]), (0, _v2.useEffect)(() => () => _v2.getState().reset(), [_v2]), (0, _v1.jsx)(_v6.Provider, {
      value: _v2,
      children: _v0
    });
  }, "useBundleCtaIntercept", 0, _v0 => {
    let _v1 = _v7(_v0 => _v0.isEnabled),
      _v2 = _v7(_v0 => _v0.interceptPurchase);
    return _v1 && "enterprise" !== _v0 ? _v2 : void 0;
  }, "useBundleOfferSelector", 0, _v7]);
}