{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = TypeError,
    _v5 = function (_v0) {
      var _v1, _v2;
      this.promise = new _v0(function (_v0, _v1) {
        if (void 0 !== _v1 || void 0 !== _v2) throw new _v4("Bad Promise constructor");
        _v1 = _v0, _v2 = _v1;
      }), this.resolve = _v3(_v1), this.reject = _v3(_v2);
    };
  _v1.exports.f = function (_v0) {
    return new _v5(_v0);
  };
}