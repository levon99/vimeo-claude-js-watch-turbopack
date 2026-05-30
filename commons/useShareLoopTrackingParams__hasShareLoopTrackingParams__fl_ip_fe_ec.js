{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useShareLoopTrackingParams", 0, () => {
    let _v0,
      _v1 = (_v0 = (0, _v2.useViewer)(), _v0?.teamUser?.ownerId ?? _v0?.user?.id),
      {
        capabilities: _v2
      } = (0, _v1.useCapability)(["hasShareLoopTrackingParams"], _v1);
    return {
      getVideoShareLoopTrackingParams: (_v0, _v1) => _v2.hasShareLoopTrackingParams ? _v0 === _v3.PAGE.ELIHP ? "?fl=ip&fe=ec" : _v0 === _v3.PAGE.LIBRARY ? "?fl=tl&fe=ec" : _v0 === _v3.PAGE.SEARCH ? "?fl=ls&fe=ec" : _v1 ? "?fl=ml&fe=ec" : "" : "",
      getFolderShareLoopTrackingParams: (_v0, _v1) => _v2.hasShareLoopTrackingParams ? _v0 === _v3.PAGE.ELIHP ? "?fl=ip&fe=cc" : _v0 === _v3.PAGE.LIBRARY ? "?fl=tl&fe=cc" : _v0 === _v3.PAGE.SEARCH ? "?fl=ls&fe=cc" : _v1 ? "?fl=ml&fe=cc" : "" : "",
      getEventShareLoopTrackingParams: _v0 => _v2.hasShareLoopTrackingParams ? _v0 === _v3.PAGE.EVENTS ? "?fl=so&fe=fs" : _v0 === _v3.PAGE.SEARCH ? "?fl=ls&fe=ws" : "" : "",
      getShowcaseShareLoopTrackingParams: _v0 => _v2.hasShareLoopTrackingParams ? _v0 === _v3.PAGE.SHOWCASES ? "?fl=so&fe=fs" : _v0 === _v3.PAGE.SEARCH ? "?fl=ls&fe=fs" : "" : ""
    };
  }], 0);
}