{
  "use strict";

  let _v1 = ["01KGPR56B56Z9H89TBK6NENWDQ", "01KGPR56B56Z9H89TBK87BF9BS"],
    _v2 = ["01KW9DH1F0ZS21EKV4R6QR8DK9", "01KW9DH1F0JMZ59HN2WZQ1BN5S"],
    _v3 = (_v0, _v1) => {
      let _v2 = (_v0 => {
        if (_v0?.tier) return {
          skuIds: _v0.id ?? {},
          tier: _v0.tier
        };
      })(_v0);
      return _v2?.tier === "creator" && (void 0 !== _v2.skuIds.monthly && _v1.includes(_v2.skuIds.monthly) || void 0 !== _v2.skuIds.annual && _v1.includes(_v2.skuIds.annual));
    };
  _v0.s(["isCreatorJuly2026Plan", 0, _v0 => _v3(_v0, _v2), "isCreatorV2Plan", 0, _v0 => _v3(_v0, _v1)]);
}