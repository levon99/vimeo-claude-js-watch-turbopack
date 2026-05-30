{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["useSessionOwnerId", 0, function () {
    let {
      sessionInfo: {
        value: _v0
      }
    } = (0, _v1.useManager)(_v3.ComposerSessionManager);
    return (0, _v2.useMemo)(() => _v0 ? (0, _v4.parseUserIdFromURI)(_v0.owner.user.uri) : 0, [_v0]);
  }]);
}