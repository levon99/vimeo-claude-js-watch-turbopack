{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useSidebarStorageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackSidebarStorageBarHidden: (0, _v1.useCallback)(({
        barHidden: _v0,
        storagePercentage: _v1
      }) => {
        null !== _v0 && _v0.track("sidebar_storage_bar_hidden", {
          bar_hidden: _v0,
          storage_percentage: _v1
        });
      }, [_v0])
    };
  }]);
}