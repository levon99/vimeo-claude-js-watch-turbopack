{
  "use strict";

  let _v1 = ["creator", "core", "professional"];
  function _v2(_v0, _v1) {
    return _v1 || !_v1.includes(_v0);
  }
  _v0.s(["filterB2BRepackagingPlans", 0, function (_v0, _v1) {
    return _v1 ? [..._v0] : _v0.filter(_v0 => _v2(_v0.tier, _v1));
  }, "isB2BRepackagingPlanAvailable", 0, _v2]);
}