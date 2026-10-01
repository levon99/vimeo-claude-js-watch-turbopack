{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = new Date(_v1.ANNOUNCEMENTS.new_sidebar_intro.latestEligibleAccountCreationDate);
  _v0.s(["useIsNewSidebarUser", 0, function () {
    let _v0 = (0, _v2.useViewer)()?.user?.createdTime;
    return null != _v0 && new Date(_v0) > _v3;
  }]);
}