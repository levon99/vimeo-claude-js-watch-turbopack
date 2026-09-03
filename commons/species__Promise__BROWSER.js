{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = _v4 && _v4.prototype,
    _v13 = _v8("species"),
    _v14 = !1,
    _v15 = _v5(_v3.PromiseRejectionEvent);
  _v1.exports = {
    CONSTRUCTOR: _v6("Promise", function () {
      var _v0 = _v7(_v4),
        _v1 = _v0 !== String(_v4);
      if (!_v1 && 66 === _v11 || _v10 && !(_v12.catch && _v12.finally)) return !0;
      if (!_v11 || _v11 < 51 || !/native code/.test(_v0)) {
        var _v2 = new _v4(function (_v0) {
            _v0(1);
          }),
          _v3 = function (_v0) {
            _v0(function () {}, function () {});
          };
        if ((_v2.constructor = {})[_v13] = _v3, !(_v14 = _v2.then(function () {}) instanceof _v3)) return !0;
      }
      return !_v1 && ("BROWSER" === _v9 || "DENO" === _v9) && !_v15;
    }),
    REJECTION_EVENT: _v15,
    SUBCLASSING: _v14
  };
}