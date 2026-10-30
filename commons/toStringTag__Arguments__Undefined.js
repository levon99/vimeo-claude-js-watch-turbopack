{
  "use strict";

  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = _v0.r(0),
    _v6 = _v0.r(0)("toStringTag"),
    _v7 = Object,
    _v8 = "Arguments" === _v5(function () {
      return arguments;
    }()),
    _v9 = function (_v0, _v1) {
      try {
        return _v0[_v1];
      } catch (_v0) {}
    };
  _v1.exports = _v3 ? _v5 : function (_v0) {
    var _v1, _v2, _v3;
    return void 0 === _v0 ? "Undefined" : null === _v0 ? "Null" : "string" == typeof (_v2 = _v9(_v1 = _v7(_v0), _v6)) ? _v2 : _v8 ? _v5(_v1) : "Object" === (_v3 = _v5(_v1)) && _v4(_v1.callee) ? "Arguments" : _v3;
  };
}