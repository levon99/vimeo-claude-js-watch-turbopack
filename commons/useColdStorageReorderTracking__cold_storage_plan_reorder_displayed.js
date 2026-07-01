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
  }]);
}