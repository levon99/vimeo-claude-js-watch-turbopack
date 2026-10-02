{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0).CONSTRUCTOR,
    _v6 = _v0.r(0),
    _v7 = _v0.r(0),
    _v8 = _v0.r(0),
    _v9 = _v0.r(0),
    _v10 = _v6 && _v6.prototype;
  if (_v3({
    target: "Promise",
    proto: !0,
    forced: _v5,
    real: !0
  }, {
    catch: function (_v0) {
      return this.then(void 0, _v0);
    }
  }), !_v4 && _v8(_v6)) {
    var _v11 = _v7("Promise").prototype.catch;
    _v10.catch !== _v11 && _v9(_v10, "catch", _v11, {
      unsafe: !0
    });
  }
}