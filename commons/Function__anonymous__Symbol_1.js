{
  "use strict";

  _v2.__esModule = !0, _v2.default = function (_v0, _v1) {
    var _v2 = _v8(_v0, _v1);
    return null !== _v2 ? _v2 : JSON.stringify(_v0, function (_v0, _v1) {
      var _v2 = _v8(this[_v0], _v1);
      return null !== _v2 ? _v2 : _v1;
    }, 2);
  };
  var _v3 = Object.prototype.toString,
    _v4 = Error.prototype.toString,
    _v5 = RegExp.prototype.toString,
    _v6 = "u" > typeof Symbol ? Symbol.prototype.toString : function () {
      return "";
    },
    _v7 = /^Symbol\((.*)\)(.*)$/;
  function _v8(_v0, _v1) {
    if (void 0 === _v1 && (_v1 = !1), null == _v0 || !0 === _v0 || !1 === _v0) return "" + _v0;
    var _v2 = typeof _v0;
    if ("number" === _v2) return _v0 != +_v0 ? "NaN" : 0 === _v0 && 1 / _v0 < 0 ? "-0" : "" + _v0;
    if ("string" === _v2) return _v1 ? '"' + _v0 + '"' : _v0;
    if ("function" === _v2) return "[Function " + (_v0.name || "anonymous") + "]";
    if ("symbol" === _v2) return _v6.call(_v0).replace(_v7, "Symbol($1)");
    var _v3 = _v3.call(_v0).slice(8, -1);
    return "Date" === _v3 ? isNaN(_v0.getTime()) ? "" + _v0 : _v0.toISOString(_v0) : "Error" === _v3 || _v0 instanceof Error ? "[" + _v4.call(_v0) + "]" : "RegExp" === _v3 ? _v5.call(_v0) : null;
  }
  _v1.exports = _v2.default;
}