{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => {
      let _v1 = Math.floor(_v0 / 0),
        _v2 = Math.floor((_v0 %= 0) / 0);
      return {
        years: _v1,
        days: _v2,
        hours: Math.floor((_v0 %= 0) / 0),
        minutes: Math.floor((_v0 %= 0) / 0),
        seconds: Math.floor((_v0 %= 0) / 0)
      };
    },
    _v7 = (_v0, _v1, _v2, _v3) => {
      let _v4 = new Date(_v0);
      return _v1 === _v5.AggregateInterval.DAY && ("PLUS" === _v2 ? _v4.setDate(_v4.getDate() + _v3) : _v4.setDate(_v4.getDate() - _v3)), _v1 === _v5.AggregateInterval.WEEK && ("PLUS" === _v2 ? _v4.setDate(_v4.getDate() + 7 * _v3) : _v4.setDate(_v4.getDate() - 7 * _v3)), _v1 === _v5.AggregateInterval.MONTH && ("PLUS" === _v2 ? _v4.setUTCMonth(_v4.getUTCMonth() + _v3) : _v4.setUTCMonth(_v4.getUTCMonth() - _v3)), _v1 === _v5.AggregateInterval.YEAR && ("PLUS" === _v2 ? _v4.setFullYear(_v4.getFullYear() + _v3) : _v4.setFullYear(_v4.getFullYear() - _v3)), _v4;
    },
    _v8 = (_v0, _v1) => _v0 <= 0 ? (0, _v4.formatNumber)({
      value: _v0,
      locale: _v1
    }) : (0, _v4.formatNumber)({
      value: _v0,
      locale: _v1,
      notation: "compact",
      maximumSignificantDigits: 3,
      minimumSignificantDigits: 3
    }),
    _v9 = _v0 => null !== _v0 && void 0 !== _v0 && (!!(_v0 >= 0) || !1);
  _v0.s(["aggregateNumberToString", 0, (_v0, _v1 = 0) => _v0 >= 0 && _v0 < 0 ? (_v0 / 0).toFixed(_v1) + "K" : _v0 >= 0 && _v0 < 0 ? (_v0 / 0).toFixed(_v1) + "M" : _v0 >= 0 && _v0 < 0 ? (_v0 / 0).toFixed(_v1) + "B" : Number(_v0).toLocaleString("en"), "formatDisplayNumber", 0, _v8, "formatDuration", 0, _v0 => {
    if (_v0 < 0) return console.error("[VA] Attempt to format(HH:MM:SS) -ve duration - ", _v0), `${_v0}`;
    let {
        years: _v1,
        days: _v2,
        hours: _v3,
        minutes: _v4,
        seconds: _v5
      } = _v6(_v0),
      _v6 = _v3 + (_v2 ? 24 * _v2 : 0) + (_v1 ? 365 * _v1 * 24 : 0);
    return [(0, _v1.default)(_v6) ? _v6 / 10 < 1 ? `0${_v6}` : _v6 : "00", (0, _v1.default)(_v4) ? _v4 / 10 < 1 ? `0${_v4}` : _v4 : "00", (0, _v1.default)(_v5) ? _v5 / 10 < 1 ? `0${_v5}` : _v5 : "00"].join(":");
  }, "formatDurationPretty", 0, (_v0, _v1) => {
    let {
        hours: _v2,
        minutes: _v3,
        seconds: _v4
      } = _v2.Duration.fromMillis(0 * _v0).shiftTo("hours", "minutes", "seconds"),
      _v5 = (0, _v4.formatNumber)({
        value: _v2,
        locale: _v1 ?? "en"
      });
    return [(0, _v1.default)(_v2) ? _v2 / 10 < 1 ? `0${_v2}` : _v5 : "00", (0, _v1.default)(_v3) ? _v3 / 10 < 1 ? `0${_v3}` : _v3 : "00", (0, _v1.default)(_v4) ? _v4 / 10 < 1 ? `0${_v4}` : _v4 : "00"].join(":");
  }, "formatPercent", 0, (_v0, _v1) => {
    let _v2 = _v9(_v0) && _v0 > 0 && _v9(_v1) && _v1 > 0 ? Number(_v0 / _v1 * 100) : 0;
    return 0 === _v2 ? 0 : _v2 < 10 ? Number(_v2?.toFixed(2)) : Number(_v2?.toFixed(1));
  }, "formatTime", 0, (_v0, _v1) => {
    let _v2 = _v2.Duration.fromMillis(0 * _v0);
    return 1 > _v2.as("hours") ? _v2.toFormat("mm:ss") : _v2.as("hours") >= 100 ? _v8(Math.floor(_v2.as("hours")), _v1 ?? "en") + " hours" : _v2.toFormat("hh:mm:ss");
  }, "formatTimeExpanded", 0, (_v0, _v1) => {
    if (0 === _v0) return "0";
    let {
        hours: _v2,
        minutes: _v3,
        seconds: _v4
      } = _v2.Duration.fromMillis(0 * _v0).shiftTo("hours", "minutes", "seconds"),
      _v5 = (0, _v4.formatNumber)({
        value: _v2,
        locale: _v1 ?? "en"
      }),
      _v6 = (0, _v3.translate)({
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
      _v7 = (0, _v3.translate)({
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
      _v8 = (0, _v3.translate)({
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
  }, "getClickThroughRate", 0, (_v0, _v1) => _v0 && _v1 ? Math.round(_v0 / _v1 * 100) : 0, "getDatesBetween", 0, (_v0, _v1, _v2) => {
    let _v3 = [],
      _v4 = _v7(_v0.valueOf(), _v2, "PLUS", 1);
    for (; _v4 < _v1;) _v3.push(_v4), _v4 = _v7(_v4.valueOf(), _v2, "PLUS", 1);
    return _v3;
  }, "getDisplayValue", 0, (_v0, _v1, _v2) => "percent" === _v0 ? `${_v1}%` : _v2 && _v9(_v1) ? _v8(Number(_v1), _v2.locale) : "-", "getTrueStartEndDate", 0, (_v0, _v1, _v2) => {
    if (_v1 === _v5.AggregateInterval.MONTH) {
      let _v0 = new Date(_v0.getFullYear(), _v0.getMonth() + 1, 1),
        _v1 = new Date(_v0.getFullYear(), _v0.getMonth(), 1);
      return "START" === _v2 ? _v1.toISOString() : _v0.toISOString();
    }
    if (_v1 !== _v5.AggregateInterval.WEEK) return _v0.toISOString();
    {
      let _v0 = new Date(_v0.getFullYear(), 0, 1),
        _v1 = Math.floor((_v0.valueOf() - _v0.valueOf()) / 0),
        _v2 = 7 * Math.ceil((_v0.getDay() + 1 + _v1) / 7) - 7,
        _v3 = new Date(_v0);
      _v3.setDate(_v3.getDate() + _v2);
      let _v4 = new Date(_v0);
      return _v4.setDate(_v4.getDate() + _v2 + 1), "START" === _v2 ? _v4.toISOString() : _v3.toISOString();
    }
  }, "getYearDayHourMinSecondBreakdown", 0, _v6, "isNaturalNumber", 0, _v9, "setNewDate", 0, _v7]);
}