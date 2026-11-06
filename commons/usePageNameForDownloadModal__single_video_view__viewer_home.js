{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["usePageNameForDownloadModal", 0, () => {
    switch ((0, _v1.usePageName)()) {
      case _v2.PAGE.SVV:
        return "single_video_view";
      case _v2.PAGE.ELIHP:
        return "viewer_home";
      case _v2.PAGE.EVENTS:
      case _v2.PAGE.MVV:
      case _v2.PAGE.SHOWCASES:
      case _v2.PAGE.LIBRARY:
      case _v2.PAGE.SHARED_WITH_ME:
        return "video_library";
      case _v2.PAGE.VLS:
      case _v2.PAGE.SEARCH:
        return "search_result_page";
      default:
        return;
    }
  }]);
}