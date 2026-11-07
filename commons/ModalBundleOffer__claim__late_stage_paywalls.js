{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (0, _v2.createContext)({
      offer: null,
      isBundleActive: !1,
      toggleBundle: () => void 0,
      stampCheckoutHref: _v0 => _v0
    }),
    _v10 = () => {
      window.location.assign(_v8.BUNDLE_LIBRARY_PATH);
    };
  _v0.s(["ModalBundleOffer", 0, ({
    periodicity: _v0,
    mode: _v1,
    children: _v2
  }) => {
    let {
        offer: _v3
      } = (0, _v7.useTriggeredBundleOffer)({
        trigger: "claim" === _v1 ? void 0 : "late_stage_paywalls",
        periodicity: _v0,
        priceDisplay: "monthly-equivalent"
      }),
      [_v4, _v5] = (0, _v2.useState)("claim" === _v1),
      _v6 = (0, _v2.useCallback)(_v0 => _v5(_v0), []),
      _v7 = (0, _v2.useCallback)((_v0, _v1 = !0) => null !== _v3 && _v1 ? (0, _v6.withBundleOfferToggleParam)(_v0, _v4) : _v0, [_v3, _v4]),
      _v8 = (0, _v2.useMemo)(() => ({
        offer: _v3,
        isBundleActive: _v4,
        toggleBundle: _v6,
        stampCheckoutHref: _v7
      }), [_v3, _v4, _v6, _v7]);
    return (0, _v1.jsxs)(_v9.Provider, {
      value: _v8,
      children: [null !== _v3 && (0, _v1.jsx)(_v3.Box, {
        width: "100%",
        marginBottom: {
          base: (0, _v4.rem)(16),
          md: (0, _v4.rem)(24)
        },
        children: (0, _v1.jsx)(_v5.BundleToggleBanner, {
          bundleType: _v3.bundleType,
          isBundleActive: _v4,
          onToggleBundle: _v6,
          price: _v3.price,
          fullPrice: _v3.fullPrice ?? void 0,
          onLearnMoreClick: _v10,
          surface: "upsell_modal",
          bundlePrice: _v3.priceTier
        })
      }), _v2]
    });
  }, "openBundleLibrary", 0, _v10, "useModalBundleState", 0, () => (0, _v2.useContext)(_v9)]);
}