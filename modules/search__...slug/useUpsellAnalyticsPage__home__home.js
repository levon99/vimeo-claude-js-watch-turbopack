{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useUpsellAnalyticsPage", 0, () => {
    let {
      pathname: _v0
    } = (0, _v1.useRouter)();
    switch (_v0) {
      case "/home":
        return "home";
      case "/library":
        return "library";
      case "/library/events":
        return "library_events";
      case "/library/showcases":
        return "library_showcases";
      case "/library-search":
        return "vls";
      case "/user/[userId]/folder/[folderId]":
        return "library_folder";
      case "/wayfinder-home":
        return "logged_in_homepage";
      default:
        return _v0;
    }
  }]);
}