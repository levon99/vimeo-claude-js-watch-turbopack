{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["useShareLoopTrackingParams", 0, () => ({
    getVideoShareLoopTrackingParams: (_v0, _v1) => _v0 === _v1.PAGE.ELIHP ? "?fl=ip&fe=ec" : _v0 === _v1.PAGE.LIBRARY ? "?fl=tl&fe=ec" : _v0 === _v1.PAGE.SEARCH ? "?fl=ls&fe=ec" : _v1 ? "?fl=ml&fe=ec" : "",
    getFolderShareLoopTrackingParams: (_v0, _v1) => _v0 === _v1.PAGE.ELIHP ? "?fl=ip&fe=cc" : _v0 === _v1.PAGE.LIBRARY ? "?fl=tl&fe=cc" : _v0 === _v1.PAGE.SEARCH ? "?fl=ls&fe=cc" : _v1 ? "?fl=ml&fe=cc" : "",
    getEventShareLoopTrackingParams: _v0 => _v0 === _v1.PAGE.EVENTS ? "?fl=so&fe=fs" : _v0 === _v1.PAGE.SEARCH ? "?fl=ls&fe=ws" : "",
    getShowcaseShareLoopTrackingParams: _v0 => _v0 === _v1.PAGE.SHOWCASES ? "?fl=so&fe=fs" : _v0 === _v1.PAGE.SEARCH ? "?fl=ls&fe=fs" : ""
  })]);
}