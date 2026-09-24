{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["prefetchCapabilities", 0, function (_v0, {
    capabilities: _v1,
    userId: _v2,
    jwt: _v3,
    apiUrl: _v4
  }) {
    let _v5 = _v0.getCapabilities(_v2),
      _v6 = _v0.getQueuedRequest(_v2);
    if (!_v5 || !_v6) return;
    let {
      missing: _v7
    } = (0, _v2.getCapabilitiesByStatus)(_v1, _v5);
    _v7.length && (_v7.forEach(_v0 => _v5.update({
      [_v0]: "queued"
    })), _v6.addCapabilities(_v7), _v6.scheduleBatch(() => (0, _v1.executeBatch)(_v6, _v5, {
      userId: _v2,
      jwt: _v3,
      apiUrl: _v4
    })));
  }]);
}