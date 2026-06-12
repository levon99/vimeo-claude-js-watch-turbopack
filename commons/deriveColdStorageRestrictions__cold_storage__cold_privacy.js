{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["deriveColdStorageRestrictions", 0, ({
    hasColdStorage: _v0,
    hasColdPrivacy: _v1
  }) => {
    let _v2 = [];
    return _v0 && _v2.push("cold_storage"), _v1 && _v2.push("cold_privacy"), _v2.length > 0 ? _v2 : void 0;
  }, "useColdStorageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(({
        surface: _v0,
        restrictions: _v1
      }) => {
        null !== _v0 && _v0.track("cold_storage_ux_displayed", {
          surface: _v0,
          ...(_v1 ? {
            restrictions: _v1
          } : {})
        });
      }, [_v0]);
    return {
      trackColdStorageUxDisplayed: _v1,
      trackColdStorageUxClicked: (0, _v1.useCallback)(({
        element: _v0,
        restrictions: _v1
      }) => {
        null !== _v0 && _v0.track("cold_storage_ux_clicked", {
          element: _v0,
          ...(_v1 ? {
            restrictions: _v1
          } : {})
        });
      }, [_v0]),
      trackColdStorageUxDeletedVideo: (0, _v1.useCallback)(({
        restrictions: _v0
      } = {}) => {
        null !== _v0 && _v0.track("cold_storage_ux_deleted_video", {
          ...(_v0 ? {
            restrictions: _v0
          } : {})
        });
      }, [_v0])
    };
  }]);
}