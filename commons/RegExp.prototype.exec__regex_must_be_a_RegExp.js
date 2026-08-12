{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v3("RegExp.prototype.exec"),
    _v6 = _v0.r(0);
  _v1.exports = function (_v0) {
    if (!_v4(_v0)) throw new _v6("`regex` must be a RegExp");
    return function (_v0) {
      return null !== _v5(_v0, _v0);
    };
  };
}