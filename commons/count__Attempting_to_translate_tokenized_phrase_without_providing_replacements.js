{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3,
    _v4 = function (_v0) {
      var _v1 = _v2.getCurrentLocale();
      return _v0.dictionary && _v0.dictionary[_v1] ? _v0.dictionary[_v1] : _v5[_v1] && _v5[_v1][_v0.singular] ? _v5[_v1][_v0.singular] : _v0;
    },
    _v5 = {};
  _v2.getCurrentLocale = function () {
    return !_v3 && "u" > typeof window && (_v3 = window.__i18nLocale || ""), _v3;
  }, _v2.setDictionaries = function (_v0) {
    _v5 = _v0;
  }, _v2.setLocale = function (_v0) {
    _v3 = _v0;
  };
  var _v6 = function (_v0, _v1) {
      if (0 === _v0.length) return "";
      var _v2,
        _v3 = _v0[0],
        _v4 = _v0.slice(1);
      if ("{" === _v3[0] && "}" === _v3[_v3.length - 1]) {
        var _v5 = _v3.substring(1, _v3.length - 1);
        if ("function" == typeof (_v2 = _v1[_v5])) {
          var _v6 = _v4.indexOf("{/" + _v5 + "}");
          -1 === _v6 ? _v2 = _v2() : (_v2 = _v2(_v6(_v4.slice(0, _v6), _v1)), _v4 = _v4.slice(_v6 + 1));
        }
      }
      switch (typeof _v2) {
        case "undefined":
          _v2 = _v3;
          break;
        case "number":
          _v2 = _v2.toString();
      }
      var _v7 = _v6(_v4, _v1);
      return "string" == typeof _v2 && "string" == typeof _v7 ? _v2 + _v7 : _v7 instanceof Array ? [_v2].concat(_v7) : [_v2, _v7];
    },
    _v7 = function (_v0) {
      var _v1 = _v4(_v0),
        _v2 = _v1.singular;
      _v0.hasOwnProperty("count") && 1 !== _v0.count && _v1.plural && (_v2 = _v1.plural);
      var _v3 = _v2.split(/({[\w\/]+})/g);
      return _v0.replacements ? _v6(_v3, _v0.replacements) : (_v3.length > 1 && console.warn("Attempting to translate tokenized phrase without providing replacements:\n" + _v2), _v2);
    };
  _v2.translate = function (_v0) {
    return "string" == typeof _v0 ? _v7({
      singular: _v0
    }) : _v7(_v0);
  };
}