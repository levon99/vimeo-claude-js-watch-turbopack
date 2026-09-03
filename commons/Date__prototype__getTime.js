{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = Date,
    _v6 = _v4(_v5.prototype.getTime);
  _v3({
    target: "Date",
    stat: !0
  }, {
    now: function () {
      return _v6(new _v5());
    }
  });
}