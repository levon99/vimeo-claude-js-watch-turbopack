{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useColdStorageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(({
        surface: _v0
      }) => {
        null !== _v0 && _v0.track("cold_storage_ux_displayed", {
          surface: _v0
        });
      }, [_v0]);
    return {
      trackColdStorageUxDisplayed: _v1,
      trackColdStorageUxClicked: (0, _v1.useCallback)(({
        element: _v0
      }) => {
        null !== _v0 && _v0.track("cold_storage_ux_clicked", {
          element: _v0
        });
      }, [_v0]),
      trackColdStorageUxDeletedVideo: (0, _v1.useCallback)(() => {
        null !== _v0 && _v0.track("cold_storage_ux_deleted_video", {});
      }, [_v0])
    };
  }]);
}