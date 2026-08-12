{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  async function _v7({
    sessionType: _v0,
    sessionId: _v1,
    isVpaas: _v2,
    gctlConfig: _v3,
    fields: _v4 = [],
    capabilities: _v5 = [],
    entitlements: _v6 = [],
    preferences: _v7 = []
  }) {
    if (_v2 && _v0 !== _v3.EComposerSessionType.LIVE_EVENT) throw new _v4.LiveError(`VPAAS supports only live event based sessions, '${_v0}' provided.`);
    let _v8 = (0, _v6.getCapabilityMap)(_v5),
      _v9 = _v2 ? `/live_events/${_v1}/composer_info` : `/composer_info/${_v0}/${_v1}`,
      _v10 = await (0, _v1.sendApiRequest)({
        method: _v2.ERequestMethod.GET,
        path: _v9,
        gctlConfig: _v3,
        fields: _v4.concat(Object.keys(_v8).map(_v0 => `owner.capabilities.${_v0}`)).concat(_v7.map(_v0 => `owner.preferences.${_v0}`)).concat(_v6.map(_v0 => `owner.entitlements.${(0, _v5.decamelize)(_v0)}`))
      });
    return _v10?.owner?.capabilities && (_v10.owner.capabilities = Object.keys(_v10.owner.capabilities).reduce((_v0, _v1) => {
      let _v2 = (0, _v5.decamelize)(_v1),
        _v3 = _v10.owner.capabilities[_v1];
      return "boolean" == typeof _v3 && _v8[_v2] && (_v0[_v8[_v2]] = _v3), _v0;
    }, {})), _v10;
  }
  _v0.s(["getBroadcasterComposerSessionInfo", 0, _v7, "getGuestComposerSessionInfo", 0, function ({
    sessionType: _v0,
    sessionId: _v1,
    sessionCode: _v2,
    gctlConfig: _v3,
    fields: _v4 = []
  }) {
    return (0, _v1.sendApiRequest)({
      method: _v2.ERequestMethod.GET,
      path: `/composer_info/${_v0}/${_v1}/guests/${_v2}`,
      gctlConfig: _v3,
      fields: _v4
    });
  }]);
}