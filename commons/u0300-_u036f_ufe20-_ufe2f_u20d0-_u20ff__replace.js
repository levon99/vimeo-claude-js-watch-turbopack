{
  var _v3 = _v0.r(0),
    _v4 = _v0.r(0),
    _v5 = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    _v6 = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
  _v1.exports = function (_v0) {
    return (_v0 = _v4(_v0)) && _v0.replace(_v5, _v3).replace(_v6, "");
  };
}