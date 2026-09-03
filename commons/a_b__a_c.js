{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0).RegExp;
  _v1.exports = _v3(function () {
    var _v0 = _v4("(?<a>b)", "g");
    return "b" !== _v0.exec("b").groups.a || "bc" !== "b".replace(_v0, "$<a>c");
  });
}