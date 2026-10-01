{
  "use strict";

  let _v1 = ["lifetime", "week", "month", "year"],
    _v2 = _v0 => _v1.find(_v0 => _v0 === _v0);
  _v0.s(["selectBandwidthQuota", 0, ({
    periodicQuota: _v0,
    quotaPeriod: _v1
  }) => ({
    category: "bandwidth",
    scope: "total",
    period: _v2(_v1),
    unit: "video_size",
    quantity: _v0
  }), "selectStorageQuota", 0, ({
    restrictedVideoStorageLimit: _v0,
    videoStoragePeriodicQuota: _v1,
    videoStorageQuotaPeriod: _v2,
    videoStorageQuotaUnit: _v3
  }) => null != _v0 ? {
    category: "storage",
    scope: "restricted",
    period: void 0,
    unit: "video_size",
    quantity: _v0
  } : {
    category: "storage",
    scope: "total",
    period: _v2(_v2),
    unit: "video_count" === _v3 ? "video_count" : "video_size",
    quantity: _v1
  }]);
}