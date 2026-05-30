{
  var _v3 = _v0.r(0),
    _v4 = _v2 && !_v2.nodeType && _v2,
    _v5 = _v4 && _v1 && !_v1.nodeType && _v1,
    _v6 = _v5 && _v5.exports === _v4 && _v3.process;
  _v1.exports = function () {
    try {
      var _v0 = _v5 && _v5.require && _v5.require("util").types;
      if (_v0) return _v0;
      return _v6 && _v6.binding && _v6.binding("util");
    } catch (_v0) {}
  }();
}