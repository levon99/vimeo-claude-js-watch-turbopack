{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = "management_action";
  _v0.s(["gtm", 0, {
    trackBulkDelete: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "bulk_delete"
      });
    },
    trackBulkMove: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "bulk_move"
      });
    },
    trackFolderChangeSettings: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "folder_change_settings"
      });
    },
    trackFolderMove: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "folder_move"
      });
    },
    trackFolderRepeatVisit: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "folder_repeat_visit"
      });
    },
    trackVideoDelete: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "video_delete"
      });
    },
    trackVideoMove: () => {
      _v1.GoogleTagManager.trackEvent(_v2, {
        action: "video_move"
      });
    }
  }]);
}