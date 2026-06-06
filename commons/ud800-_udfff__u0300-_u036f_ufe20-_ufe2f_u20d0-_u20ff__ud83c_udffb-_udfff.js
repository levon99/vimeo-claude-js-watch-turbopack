{
  var _v3 = "\\ud800-\\udfff",
    _v4 = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
    _v5 = "\\ud83c[\\udffb-\\udfff]",
    _v6 = "[^" + _v3 + "]",
    _v7 = "(?:\\ud83c[\\udde6-\\uddff]){2}",
    _v8 = "[\\ud800-\\udbff][\\udc00-\\udfff]",
    _v9 = "(?:" + _v4 + "|" + _v5 + ")?",
    _v10 = "[\\ufe0e\\ufe0f]?",
    _v11 = "(?:\\u200d(?:" + [_v6, _v7, _v8].join("|") + ")" + _v10 + _v9 + ")*",
    _v12 = RegExp(_v5 + "(?=" + _v5 + ")|" + ("(?:" + [_v6 + _v4 + "?", _v4, _v7, _v8, "[" + _v3 + "]"].join("|")) + ")" + (_v10 + _v9 + _v11), "g");
  _v1.exports = function (_v0) {
    return _v0.match(_v12) || [];
  };
}