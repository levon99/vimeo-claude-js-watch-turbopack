{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["TimecodeFormats", 0, {
    Short: function ({
      d: _v0,
      h: _v1,
      m: _v2,
      s: _v3
    }) {
      let _v4 = [];
      return _v0 > 0 && _v4.push(`${_v0}d`), (_v1 > 0 || _v0 > 0) && _v4.push(`${_v1}h`), (_v2 > 0 || _v1 > 0 || _v0 > 0) && _v4.push(`${_v2}m`), _v4.push(`${_v3}s`), _v4.join(" ");
    },
    ShortWithLeadingZero: function ({
      d: _v0,
      h: _v1,
      m: _v2,
      s: _v3
    }) {
      let _v4 = [];
      return _v0 > 0 && _v4.push(`${_v0}d`), (_v1 > 0 || _v0 > 0) && _v4.push(_v1 < 10 ? `0${_v1}h` : `${_v1}h`), (_v2 > 0 || _v1 > 0 || _v0 > 0) && _v4.push(_v2 < 10 ? `0${_v2}m` : `${_v2}m`), (_v3 > 0 || _v2 > 0 || _v1 > 0 || _v0 > 0) && _v4.push(_v3 < 10 ? `0${_v3}s` : `${_v3}s`), _v4.join(" ");
    },
    OnlyDigits: function ({
      d: _v0,
      h: _v1,
      m: _v2,
      s: _v3
    }) {
      let _v4 = [];
      return _v0 > 0 && _v4.push(`${_v0}`), (_v1 >= 0 || _v0 >= 0) && _v4.push(_v1 < 10 ? `0${_v1}` : `${_v1}`), (_v2 >= 0 || _v1 >= 0 || _v0 >= 0) && _v4.push(_v2 < 10 ? `0${_v2}` : `${_v2}`), (_v3 >= 0 || _v2 >= 0 || _v1 >= 0 || _v0 >= 0) && _v4.push(_v3 < 10 ? `0${_v3}` : `${_v3}`), _v4.join(":");
    },
    LongWithoutDays: function ({
      d: _v0,
      h: _v1,
      m: _v2,
      s: _v3
    }) {
      return [(0, _v1.translate)({
        singular: "{h} hour",
        plural: "{h} hours",
        count: _v1 + 24 * _v0,
        replacements: {
          h: _v1 + 24 * _v0
        },
        dictionary: {
          es: {
            singular: "{h} hora",
            plural: "{h} horas"
          },
          "de-DE": {
            singular: "{h} Stunde",
            plural: "{h} Stunden"
          },
          "fr-FR": {
            singular: "{h} heure",
            plural: "{h} heures"
          },
          "ja-JP": {
            singular: "{h} 時間",
            plural: "{h} 時間"
          },
          "ko-KR": {
            singular: "{h}시간",
            plural: "{h}시간"
          },
          "pt-BR": {
            singular: "{h} hora",
            plural: "{h} horas"
          },
          "zh-CN": {
            singular: "{h} 小时",
            plural: "{h} 小时"
          }
        }
      }), (0, _v1.translate)({
        singular: "{m} minute",
        plural: "{m} minutes",
        count: _v2,
        replacements: {
          m: _v2
        },
        dictionary: {
          es: {
            singular: "{m} minuto",
            plural: "{m} minutos"
          },
          "de-DE": {
            singular: "{m} Minute",
            plural: "{m} Minuten"
          },
          "ja-JP": {
            singular: "{m} 分",
            plural: "{m} 分"
          },
          "ko-KR": {
            singular: "{m}분",
            plural: "{m}분"
          },
          "pt-BR": {
            singular: "{m} minuto",
            plural: "{m} minutos"
          },
          "zh-CN": {
            singular: "{m} 分钟",
            plural: "{m} 分钟"
          }
        }
      }), (0, _v1.translate)({
        singular: "{s} second",
        plural: "{s} seconds",
        count: _v3,
        replacements: {
          s: _v3
        },
        dictionary: {
          es: {
            singular: "{s} segundo",
            plural: "{s} segundos"
          },
          "de-DE": {
            singular: "{s} Sekunde",
            plural: "{s} Sekunden"
          },
          "fr-FR": {
            singular: "{s} seconde",
            plural: "{s} secondes"
          },
          "ja-JP": {
            singular: "{s} 秒",
            plural: "{s} 秒"
          },
          "ko-KR": {
            singular: "{s}초",
            plural: "{s}초"
          },
          "pt-BR": {
            singular: "{s} segundo",
            plural: "{s} segundos"
          },
          "zh-CN": {
            singular: "{s} 秒",
            plural: "{s} 秒"
          }
        }
      })].join(" ");
    }
  }, "getFormattedTimecodeFromSeconds", 0, function (_v0, _v1, _v2) {
    var _v3;
    if (_v0 < 0) return "N/A";
    let _v4 = {
      d: Math.floor((_v3 = _v0) / 60 / 60 / 24),
      h: Math.floor(_v3 / 60 / 60 % 24),
      m: Math.floor(_v3 / 60 % 60),
      s: Math.floor(_v3 % 60)
    };
    if (Object.values(_v4).every(_v0 => 0 === _v0) && !_v2?.shouldShowZero) return "N/A";
    let _v5 = _v1(_v4);
    return _v5.length > 0 ? _v5 : "N/A";
  }]);
}