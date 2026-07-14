{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v1.createSelector)(_v0 => _v0.drawer, _v0 => _v0.isShareDrawerOpen),
    _v3 = (0, _v1.createSelector)(_v0 => _v0.drawer, _v0 => _v0.isOttPublishDrawerOpen),
    _v4 = (0, _v1.createSelector)(_v0 => _v0.drawer, _v0 => _v0.defaultSharePanel),
    _v5 = (0, _v1.createSelector)(_v0 => _v0.drawer, _v0 => _v0.skipDefaultPanelTracking);
  _v0.s(["defaultSharePanelSelector", 0, _v4, "isOttPublishDrawerOpenSelector", 0, _v3, "isShareDrawerOpenSelector", 0, _v2, "skipDefaultPanelTrackingSelector", 0, _v5]);
}