{
  "use strict";

  _v0.i(0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = (_v0, _v1) => _v0 <= 0 ? (0, _v3.formatNumber)({
    value: _v0,
    locale: _v1
  }) : (0, _v3.formatNumber)({
    value: _v0,
    locale: _v1,
    notation: "compact",
    maximumSignificantDigits: 3,
    minimumSignificantDigits: 3
  });
  _v0.s(["formatDisplayNumber", 0, _v4, "formatTime", 0, (_v0, _v1) => {
    let _v2 = _v1.Duration.fromMillis(0 * _v0);
    return 1 > _v2.as("hours") ? _v2.toFormat("mm:ss") : _v2.as("hours") >= 100 ? _v4(Math.floor(_v2.as("hours")), _v1 ?? "en") + " hours" : _v2.toFormat("hh:mm:ss");
  }, "formatTimeExpanded", 0, (_v0, _v1) => {
    if (0 === _v0) return "0";
    let {
        hours: _v2,
        minutes: _v3,
        seconds: _v4
      } = _v1.Duration.fromMillis(0 * _v0).shiftTo("hours", "minutes", "seconds"),
      _v5 = (0, _v3.formatNumber)({
        value: _v2,
        locale: _v1 ?? "en"
      }),
      _v6 = (0, _v2.translate)({
        singular: "{VALUE} hour",
        plural: "{VALUE} hours",
        replacements: {
          VALUE: _v5
        },
        count: _v2,
        dictionary: {
          es: {
            singular: "{VALUE} hora",
            plural: "{VALUE} horas"
          },
          "de-DE": {
            singular: "{VALUE} Stunde",
            plural: "{VALUE} Stunden"
          },
          "fr-FR": {
            singular: "{VALUE} heure",
            plural: "{VALUE} heures"
          },
          "ja-JP": {
            singular: "{VALUE}時間",
            plural: "{VALUE}時間"
          },
          "ko-KR": {
            singular: "{VALUE}시간",
            plural: "{VALUE} 시간"
          },
          "pt-BR": {
            singular: "{VALUE} hora",
            plural: "{VALUE} horas"
          },
          "zh-CN": {
            singular: "{VALUE} 小时",
            plural: "{VALUE} 小时"
          }
        }
      }),
      _v7 = (0, _v2.translate)({
        singular: "{VALUE} minute",
        plural: "{VALUE} minutes",
        replacements: {
          VALUE: _v3
        },
        count: _v3,
        dictionary: {
          es: {
            singular: "{VALUE} minuto",
            plural: "{VALUE} minutos"
          },
          "de-DE": {
            singular: "{VALUE} Minute",
            plural: "{VALUE} Minuten"
          },
          "ja-JP": {
            singular: "{VALUE}分",
            plural: "{VALUE} 分"
          },
          "ko-KR": {
            singular: "{VALUE}분",
            plural: "{VALUE}분"
          },
          "pt-BR": {
            singular: "{VALUE} minuto",
            plural: "{VALUE} minutos"
          },
          "zh-CN": {
            singular: "{VALUE} 分钟",
            plural: "{VALUE} 分钟"
          }
        }
      }),
      _v8 = (0, _v2.translate)({
        singular: "{VALUE} second",
        plural: "{VALUE} seconds",
        replacements: {
          VALUE: _v4
        },
        count: _v4,
        dictionary: {
          es: {
            singular: "{VALUE} segundo",
            plural: "{VALUE} segundos"
          },
          "de-DE": {
            singular: "{VALUE} Sekunde",
            plural: "{VALUE} Sekunden"
          },
          "fr-FR": {
            singular: "{VALUE} seconde",
            plural: "{VALUE} secondes"
          },
          "ja-JP": {
            singular: "{VALUE} 秒",
            plural: "{VALUE} 秒"
          },
          "ko-KR": {
            singular: "{VALUE}초",
            plural: "{VALUE}초"
          },
          "pt-BR": {
            singular: "{VALUE} segundo",
            plural: "{VALUE} segundos"
          },
          "zh-CN": {
            singular: "{VALUE} 秒",
            plural: "{VALUE} 秒"
          }
        }
      });
    return `${_v2 >= 1 ? _v6 + ", " : ""}${_v0 > 59 ? _v7 + ", " : ""}${_v0 > 0 ? _v8 : ""}`;
  }]);
}