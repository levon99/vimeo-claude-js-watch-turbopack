{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    return _v0.replace(/([A-Z])/g, (_v0, _v1) => "_" + _v1.toLowerCase()).replace(/^_/, "");
  }
  _v0.s(["decamelize", 0, _v2], 0), _v0.s(["getCapabilityMap", 0, function (_v0) {
    return _v0.reduce((_v0, _v1) => {
      let _v2 = _v1.match(/^(can|has)(.+)/)?.[2];
      return _v0[_v2(_v2 ? _v2[0].toLowerCase() + _v2.slice(1) : _v1)] = _v1, _v0;
    }, {});
  }, "getUserAvatar", 0, function (_v0, _v1 = {
    maximalAllowedWidth: 360
  }) {
    return _v0?.pictures?.sizes?.filter(_v0 => _v0.width <= _v1.maximalAllowedWidth).sort((_v0, _v1) => _v1.width - _v0.width)[0] || null;
  }, "isStaffUser", 0, function (_v0) {
    return _v0?.badge?.type === _v1.BadgeType.Staff;
  }], 0);
}