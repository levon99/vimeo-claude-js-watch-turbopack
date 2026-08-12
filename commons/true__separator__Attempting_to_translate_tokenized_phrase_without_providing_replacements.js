{
  "use strict";

  var _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.e && _v0.e.__assign || function () {
      return (_v6 = Object.assign || function (_v0) {
        for (var _v1, _v2 = 1, _v3 = arguments.length; _v2 < _v3; _v2++) for (var _v4 in _v1 = arguments[_v2]) Object.prototype.hasOwnProperty.call(_v1, _v4) && (_v0[_v4] = _v1[_v4]);
        return _v0;
      }).apply(this, arguments);
    },
    _v7 = _v0.e && _v0.e.__spreadArray || function (_v0, _v1) {
      for (var _v2 = 0, _v3 = _v1.length, _v4 = _v0.length; _v2 < _v3; _v2++, _v4++) _v0[_v4] = _v1[_v2];
      return _v0;
    };
  Object.defineProperty(_v2, "__esModule", {
    value: !0
  }), _v2.translate = _v2.setLocale = _v2.setDictionaries = _v2.getCurrentLocale = void 0;
  var _v8 = "true" === _v5.default.env.I18N_TEMPLATE,
    _v9 = _v0.r(0),
    _v10 = _v0.r(0),
    _v11 = _v0.r(0),
    _v12 = function (_v0) {
      var _v1,
        _v2 = null != (_v1 = _v0.locale) ? _v1 : _v2.getCurrentLocale();
      return _v0.dictionary && _v0.dictionary[_v2] ? _v0.dictionary[_v2] : _v13[_v2] && _v13[_v2][_v0.singular] ? _v13[_v2][_v0.singular] : _v0;
    },
    _v13 = {};
  _v2.getCurrentLocale = function () {
    return !_v3 && "u" > typeof window && (_v3 = window.__i18nLocale || ""), _v3;
  }, _v2.setDictionaries = function (_v0) {
    _v13 = _v0;
  }, _v2.setLocale = function (_v0) {
    _v3 = _v0;
  };
  var _v14 = function (_v0, _v1) {
      if (0 === _v0.length) return "";
      var _v2,
        _v3 = _v0[0],
        _v4 = _v0.slice(1);
      if ("{" === _v3[0] && "}" === _v3[_v3.length - 1]) {
        var _v5 = _v3.substring(1, _v3.length - 1);
        if ("function" == typeof (_v2 = _v1[_v5])) {
          var _v6 = _v4.indexOf("{/" + _v5 + "}");
          -1 === _v6 ? _v2 = _v2() : (_v2 = _v2(_v14(_v4.slice(0, _v6), _v1)), _v4 = _v4.slice(_v6 + 1));
        }
      }
      switch (typeof _v2) {
        case "undefined":
          _v2 = _v3;
          break;
        case "number":
          _v2 = _v2.toString();
      }
      var _v7 = _v14(_v4, _v1);
      return "string" == typeof _v2 && "string" == typeof _v7 ? _v2 + _v7 : _v7 instanceof Array ? _v7([_v2], _v7) : [_v2, _v7];
    },
    _v15 = "%separator%",
    _v16 = function (_v0) {
      var _v1 = _v0.singular.split(/({[\w\/]+})/g);
      if (!_v0.replacements) return _v1.length > 1 && console.warn("Attempting to translate tokenized phrase without providing replacements:\n" + _v0.singular), "{{t " + _v4.Buffer.from(JSON.stringify(_v0)).toString("base64") + " t}}";
      for (var _v2 = {}, _v3 = 0, _v4 = Object.entries(_v0.replacements); _v3 < _v4.length; _v3++) {
        var _v5 = _v4[_v3],
          _v6 = _v5[0],
          _v7 = _v5[1];
        if ("function" == typeof _v7) {
          var _v8 = _v1.includes("{/" + _v6 + "}"),
            _v9 = _v8 ? _v7(_v15) : _v7();
          if ("string" != typeof _v9 && (_v9 = _v0.r(0).renderToStaticMarkup(_v11.createElement(_v9.ThemeProvider, {
            theme: _v10.themes.light
          }, _v9))), _v8) {
            var _v10 = _v9.split(_v15);
            _v2[_v6] = _v10[0], _v2["/" + _v6] = _v10[1];
          } else _v2[_v6] = _v9;
        } else _v2[_v6] = _v7;
      }
      return "{{t " + _v4.Buffer.from(JSON.stringify(_v6(_v6({}, _v0), {
        replacements: _v2
      }))).toString("base64") + " t}}";
    },
    _v17 = function (_v0) {
      if (_v8) return _v16(_v0);
      var _v1 = _v12(_v0),
        _v2 = _v1.singular;
      _v0.hasOwnProperty("count") && 1 !== _v0.count && _v1.plural && (_v2 = _v1.plural);
      var _v3 = _v2.split(/({[\w\/]+})/g);
      return _v0.replacements ? _v14(_v3, _v0.replacements) : (_v3.length > 1 && console.warn("Attempting to translate tokenized phrase without providing replacements:\n" + _v2), _v2);
    };
  _v2.translate = function (_v0) {
    return "string" == typeof _v0 ? _v17({
      singular: _v0
    }) : _v17(_v0);
  };
}