{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0).RegExp;
  _v1.exports = _v3(function () {
    var _v0 = _v4(".", "s");
    return !(_v0.dotAll && _v0.test("\n") && "s" === _v0.flags);
  });
}