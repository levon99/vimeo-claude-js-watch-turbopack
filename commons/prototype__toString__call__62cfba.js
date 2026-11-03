{
  var _v3 = Function.prototype.toString;
  _v1.exports = function (_v0) {
    if (null != _v0) {
      try {
        return _v3.call(_v0);
      } catch (_v0) {}
      try {
        return _v0 + "";
      } catch (_v0) {}
    }
    return "";
  };
}