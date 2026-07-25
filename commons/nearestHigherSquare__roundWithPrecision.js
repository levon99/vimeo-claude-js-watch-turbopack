{
  "use strict";

  _v0.s(["nearestHigherSquare", 0, function (_v0) {
    if (_v0 <= 1) return 1;
    let _v1 = Math.sqrt(_v0),
      _v2 = Math.floor(_v1 + +!Number.isInteger(_v1));
    return _v2 * _v2;
  }, "roundWithPrecision", 0, function (_v0, _v1) {
    let _v2 = Math.pow(10, _v1);
    return Math.round(_v0 * _v2) / _v2;
  }]);
}