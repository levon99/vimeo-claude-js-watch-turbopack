{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
    [_v1.ResourceType.Folder]: {
      entityType: "folder",
      feature: "share",
      modalName: "share_folder_modal",
      closeFlow: "close_folder_share",
      flow: "share_folder",
      linkFlow: "share_folder_link"
    },
    [_v1.ResourceType.Video]: {
      entityType: "video",
      feature: "share_video",
      modalName: "share_video_modal",
      closeFlow: "close_video_share",
      flow: "share_video",
      linkFlow: "share_video_link"
    },
    [_v1.ResourceType.Album]: {
      entityType: "showcase",
      feature: "share",
      modalName: "share_showcase_modal",
      closeFlow: "share_showcase",
      flow: "share_showcase",
      linkFlow: null
    }
  };
  _v0.s(["ANALYTICS_EVENT_V2", 0, !0, "PageMap", 0, {
    home: "single_video_view",
    showcase_cms: "showcase_cms",
    "Viewer Home": "viewer_home",
    library: "video_library"
  }, "ResourceTypeEntityMap", 0, _v2]);
}