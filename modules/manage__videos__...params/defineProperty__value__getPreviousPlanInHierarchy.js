{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = _v0.r(0);
  _v2.getPreviousPlanInHierarchy = function (_v0, _v1) {
    if (void 0 === _v1 && (_v1 = _v3.DEFAULT_DISPLAYED_PLANS), _v0 === _v1[0]) return _v0;
    var _v2 = Object.keys(_v3.PLANS).map(function (_v0) {
        return _v3.PLANS[_v0];
      }),
      _v3 = _v1[_v1.indexOf(_v0) - 1];
    return _v3 === _v3.PLANS.PRO && _v0 !== _v3.PLANS.PRO_U ? _v2[_v2.indexOf(_v3) + 2] : _v0 === _v3.PLANS.ENTERPRISE && _v3 === _v3.PLANS.ADVANCED ? _v3.PLANS.ENTERPRISE : _v2[_v2.indexOf(_v3) + 1];
  };
}