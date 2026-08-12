{
  "use strict";

  _v0.s(["getCapabilitiesByStatus", 0, function (_v0, _v1) {
    return _v0.reduce((_v0, _v1) => {
      switch (_v1.currentCapabilities[_v1]) {
        case void 0:
          return _v0.missing = [..._v0.missing, _v1], _v0;
        case "queued":
          return _v0.queued = [..._v0.queued, _v1], _v0;
        case !0:
        case !1:
          return _v0.received = [..._v0.received, _v1], _v0;
      }
    }, {
      missing: [],
      queued: [],
      received: []
    });
  }, "getKeys", 0, function (_v0) {
    return Object.keys(_v0);
  }, "getUserId", 0, function (_v0) {
    if (!_v0) return null;
    let _v1 = _v0.match(/^([0-9]+)$/);
    if (_v1) return Number(_v1[1]);
    let _v2 = _v0.match(/users\/([0-9]+)/);
    return _v2 ? Number(_v2[1]) : null;
  }]);
}