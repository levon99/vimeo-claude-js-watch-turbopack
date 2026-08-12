{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["transformSessionTypeToUri", 0, function (_v0) {
    return _v0 === _v2.EComposerSessionType.LIVE_EVENT ? "event" : _v0;
  }, "transformUriParamToSessionType", 0, function (_v0) {
    return "event" === _v0 ? _v2.EComposerSessionType.LIVE_EVENT : Object.values(_v2.EComposerSessionType).includes(_v0) ? _v0 : _v2.EComposerSessionType.UNKNOWN;
  }, "transformUriToAbsolute", 0, function (_v0) {
    return _v0 && _v0.startsWith("http") ? _v0 : _v0 ? `${_v1.environmentConfig.URL_BASE}${_v0}` : "";
  }]);
}