{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = ["id", "name", "itemName", "isActive", "currency", "price"];
  _v0.s(["useTriggeredBundleOffer", 0, ({
    trigger: _v0,
    periodicity: _v1,
    enabled: _v2 = !0,
    priceDisplay: _v3 = "period"
  }) => {
    let _v4 = (0, _v5.useBundleOffer)(),
      _v5 = (0, _v1.useMemo)(() => _v2 ? void 0 === _v0 ? (0, _v4.resolveOfferInput)(_v4) : (0, _v4.resolveOfferInputForTrigger)(_v4, _v0) : null, [_v4, _v0, _v2]),
      _v6 = (0, _v1.useMemo)(() => _v5 ? {
        select: _v8
      } : null, [_v5]),
      {
        data: _v7,
        isLoading: _v8
      } = (0, _v2.useGetMeAddOns)(() => _v6);
    return (0, _v1.useMemo)(() => {
      if (!_v5) return {
        offer: null,
        isResolving: !1
      };
      let _v0 = (0, _v3.findBundleAddOn)(Array.isArray(_v7) ? _v7 : Array.isArray(_v7?.data) ? _v7.data : [], {
        bundleType: _v5.bundleType,
        priceTier: _v5.priceTier,
        periodicity: _v1
      });
      if (!_v0) return {
        offer: null,
        isResolving: _v8
      };
      let _v1 = {
        addOnId: _v0.id,
        bundleType: _v5.bundleType,
        priceTier: _v5.priceTier
      };
      if ("free" === _v5.priceTier) return {
        offer: {
          ..._v1,
          price: null,
          fullPrice: null
        },
        isResolving: _v8
      };
      let _v2 = _v0.price?.amount;
      if ("number" != typeof _v2) return {
        offer: null,
        isResolving: _v8
      };
      let _v3 = "" !== _v0.currency ? _v0.currency : _v6.FALLBACK_CURRENCY,
        _v4 = "monthly-equivalent" === _v3 && "annual" === _v1,
        _v5 = _v4 ? (0, _v7.roundBundlePriceAmount)(_v2 / 12, _v3) : _v2,
        _v6 = (0, _v6.resolveBundleIdealAmount)({
          periodicity: _v1,
          display: _v4 ? "monthly" : "period",
          currency: _v3
        });
      return {
        offer: {
          ..._v1,
          price: {
            amount: _v5,
            currency: _v3
          },
          fullPrice: _v6
        },
        isResolving: _v8
      };
    }, [_v5, _v7, _v8, _v1, _v3]);
  }]);
}