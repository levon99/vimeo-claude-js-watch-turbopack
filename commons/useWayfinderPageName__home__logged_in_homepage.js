{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useWayfinderPageName", 0, () => {
    let {
      pathname: _v0
    } = (0, _v1.useRouter)();
    switch (_v0) {
      case "/home":
      case "/wayfinder-home":
        return "logged_in_homepage";
      case "/library":
        return "video_library";
      case "/library/events":
        return "events_library";
      case "/library/showcases":
        return "showcases_library";
      case "/library-search":
        return "library_search_result_page";
      case "/shared-with-me":
        return "shared_with_me";
      case "/user/[userId]/folder/[folderId]":
        return "folders_manager";
      default:
        return _v0;
    }
  }]);
}