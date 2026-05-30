{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0, ..._v1) {
    return `${_v0}-${_v1.join("-")}`;
  }
  _v0.s(["createInteractionDomName", 0, function (_v0, ..._v1) {
    return _v1.length ? `${_v0}-${_v1.join("-")}` : _v2(_v1.liveApplicationConfig.DOM.INTERACTION_APP_NAMING_PREFIX, _v0, ..._v1);
  }, "createLiveDomName", 0, function (_v0, ..._v1) {
    return _v1.length ? `${_v0}-${_v1.join("-")}` : _v2(_v1.liveApplicationConfig.DOM.LIVE_APP_NAMING_PREFIX, _v0, ..._v1);
  }]);
}