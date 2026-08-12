{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useColdStorageReorderTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackColdStoragePlanReorderDisplayed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("cold_storage_plan_reorder_displayed", {
          cold_storage_plan_reorder_surface: _v0.surface
        });
      }, [_v0])
    };
  }], 0);
  let _v3 = new Set(["pro", "business", "livePremium"]);
  _v0.s(["applyPlanAvailabilityPolicy", 0, (_v0, _v1) => {
    if (!_v0) return _v0;
    let _v2 = _v1.coreTierEnabled ? _v0 : _v0.filter(_v0 => "core" !== _v0.tier);
    return !1 !== _v1.flatTierMonthlyEnabled ? _v2 : _v2 = _v2?.map(_v0 => _v3.has(_v0.tier) ? {
      ..._v0,
      id: {
        ..._v0.id,
        monthly: null
      },
      price: {
        ..._v0.price,
        monthly: void 0
      },
      priceFormatted: {
        ..._v0.priceFormatted,
        monthly: void 0
      },
      metadata: {
        ..._v0.metadata,
        interactions: {
          ..._v0.metadata?.interactions,
          purchase: {
            ..._v0.metadata?.interactions?.purchase,
            uri: {
              ..._v0.metadata?.interactions?.purchase?.uri,
              monthly: null
            }
          }
        }
      }
    } : _v0);
  }], 0);
}