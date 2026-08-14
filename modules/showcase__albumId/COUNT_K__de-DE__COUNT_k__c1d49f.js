{
  "use strict";

  Object.defineProperty(_v2, "__esModule", {
    value: !0
  });
  var _v3 = _v0.r(0),
    _v4 = function (_v0, _v1) {
      return _v3.translate({
        singular: "{COUNT}K",
        replacements: {
          COUNT: _v0.toLocaleString(_v1)
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT}K"
          },
          en: {
            singular: "{COUNT}K"
          },
          es: {
            singular: "{COUNT} k"
          },
          "fr-FR": {
            singular: "{COUNT}K"
          },
          "ja-JP": {
            singular: "{COUNT}千"
          },
          "ko-KR": {
            singular: "{COUNT}천"
          },
          "pt-BR": {
            singular: "{COUNT}Mil"
          }
        }
      });
    },
    _v5 = function (_v0, _v1) {
      return _v3.translate({
        singular: "{COUNT}M",
        replacements: {
          COUNT: _v0.toLocaleString(_v1)
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT}M"
          },
          en: {
            singular: "{COUNT}M"
          },
          es: {
            singular: "{COUNT} M"
          },
          "fr-FR": {
            singular: "{COUNT}M"
          },
          "ja-JP": {
            singular: "{COUNT}万"
          },
          "ko-KR": {
            singular: "{COUNT}만"
          },
          "pt-BR": {
            singular: "{COUNT}M"
          }
        }
      });
    },
    _v6 = function (_v0, _v1) {
      return _v3.translate({
        singular: "{COUNT}B",
        replacements: {
          COUNT: _v0.toLocaleString(_v1)
        },
        dictionary: {
          "de-DE": {
            singular: "{COUNT}B"
          },
          en: {
            singular: "{COUNT}B"
          },
          es: {
            singular: "{COUNT} G"
          },
          "fr-FR": {
            singular: "{COUNT}B"
          },
          "ja-JP": {
            singular: "{COUNT}億"
          },
          "ko-KR": {
            singular: "{COUNT}억"
          },
          "pt-BR": {
            singular: "{COUNT}B"
          }
        }
      });
    };
  _v2.shorten = function (_v0, _v1, _v2) {
    return void 0 === _v2 && (_v2 = 0), Math.floor(_v0 / Math.pow(10, _v1 - _v2)) / Math.pow(10, _v2);
  }, _v2.humanize = function (_v0) {
    var _v1,
      _v2,
      _v3 = _v3.getCurrentLocale();
    switch (!0) {
      case _v0 < 0:
        return _v1 = _v0, _v2 = _v3, _v1.toLocaleString(_v2);
      case _v0 < 0:
        return _v4(_v2.shorten(_v0, 3, 1), _v3);
      case _v0 < 0:
        return _v4(_v2.shorten(_v0, 3, 0), _v3);
      case _v0 < 0:
        return _v5(_v2.shorten(_v0, 6, 1), _v3);
      case _v0 < 0:
        return _v5(_v2.shorten(_v0, 6, 0), _v3);
      case _v0 < 0:
        return _v6(_v2.shorten(_v0, 9, 1), _v3);
      case _v0 < 0:
        return _v6(_v2.shorten(_v0, 9, 0), _v3);
      default:
        return "∞";
    }
  };
}