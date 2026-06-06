{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["usePageName", 0, () => {
    let {
      pathname: _v0
    } = (0, _v1.useRouter)();
    return (0, _v2.useMemo)(() => {
      switch (_v0) {
        case "/user/[userId]/folder/[folderId]":
          return _v3.PAGE.MVV;
        case "/home":
          return _v3.PAGE.ELIHP;
        case "/library/showcases":
          return _v3.PAGE.SHOWCASES;
        case "/library-search":
          return _v3.PAGE.VLS;
        case "/search/[[...slug]]":
          return _v3.PAGE.SEARCH;
        case "/library":
          return _v3.PAGE.LIBRARY;
        case "/library/events":
          return _v3.PAGE.EVENTS;
        case "/manage/videos/[videoId]":
          return _v3.PAGE.SVV;
        case "/shared-with-me":
          return _v3.PAGE.SHARED_WITH_ME;
        default:
          return _v3.PAGE.UNKNOWN;
      }
    }, [_v0]);
  }]);
}