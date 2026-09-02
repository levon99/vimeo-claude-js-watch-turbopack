{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["formatLongDate", 0, (_v0, _v1) => _v0.setLocale(_v1).toLocaleString(_v1.DateTime.DATE_HUGE), "formatTime", 0, (_v0, _v1) => _v0.setLocale(_v1).toLocaleString(_v1.DateTime.TIME_SIMPLE), "fromISO", 0, (_v0 = "") => {
    let _v1 = navigator.language || "en-US";
    return _v1.DateTime.fromISO(_v0, {
      locale: _v1
    });
  }, "getDurationString", 0, (_v0, _v1 = !0, _v2 = "hh:mm:ss") => {
    let _v3 = _v1.Duration.fromObject({
      seconds: _v0
    }).normalize();
    return _v3.hours > 0 || !_v1 ? _v3.toFormat(_v2) : _v3.toFormat(_v2).replace(/^00:/, "");
  }, "getIntlDate", 0, (_v0, _v1, _v2 = "en") => _v0 ? new Intl.DateTimeFormat(_v2, _v1).format(new Date(_v0)) : "", "getSyncTime", 0, _v0 => {
    if (!_v0) return "";
    let {
        hours: _v1,
        minutes: _v2
      } = _v1.DateTime.fromISO(_v0).diffNow(["hours", "minutes"]).toObject(),
      _v3 = Math.abs(Math.floor(_v1 || 0)),
      _v4 = Math.abs(Math.floor(_v2 || 0));
    return _v3 > 0 ? (0, _v2.translate)({
      singular: "Last imported {HOUR} hour ago",
      plural: "Last imported {HOUR} hours ago",
      count: _v3,
      replacements: {
        HOUR: _v3
      },
      dictionary: {
        es: {
          singular: "La última importación se realizó hace {HOUR} hora",
          plural: "La última importación se realizó hace {HOUR} horas"
        },
        "de-DE": {
          singular: "Zuletzt importiert vor {HOUR} Stunde",
          plural: "Zuletzt importiert vor {HOUR} Stunden"
        },
        "fr-FR": {
          singular: "Dernière importation il y a {HOUR} heure",
          plural: "Dernière importation il y a {HOUR} heures"
        },
        "ja-JP": {
          singular: "最後のインポートは {HOUR}時間前です",
          plural: "最後のインポートは {HOUR}時間前です"
        },
        "ko-KR": {
          singular: "{HOUR}시간 전에 마지막으로 가져옴",
          plural: "{HOUR}시간 전에 마지막으로 가져옴"
        },
        "pt-BR": {
          singular: "Última importação há {HOUR} hora",
          plural: "Última importação há {HOUR} horas"
        },
        "zh-CN": {
          singular: "上次导入是 {HOUR} 小时前",
          plural: "上次导入是 {HOUR} 小时前"
        }
      }
    }) : (0, _v2.translate)({
      singular: "Last imported {MIN} min ago",
      plural: "Last imported {MIN} mins ago",
      count: _v4,
      replacements: {
        MIN: _v4
      },
      dictionary: {
        es: {
          singular: "La última importación se realizó hace {MIN} minuto",
          plural: "La última importación se realizó hace {MIN} minutos"
        },
        "de-DE": {
          singular: "Zuletzt importiert vor {MIN} Minute",
          plural: "Zuletzt importiert vor {MIN} Minuten"
        },
        "fr-FR": {
          singular: "Dernière importation il y a {MIN} minute",
          plural: "Dernière importation il y a {MIN} minutes"
        },
        "ja-JP": {
          singular: "最後のインポートは {MIN}分前です",
          plural: "最後のインポートは {MIN}分前です"
        },
        "ko-KR": {
          singular: "{MIN}분 전에 마지막으로 가져옴",
          plural: "{MIN}분 전에 마지막으로 가져옴"
        },
        "pt-BR": {
          singular: "Última importação há {MIN} minuto",
          plural: "Última importação há {MIN} minutos"
        },
        "zh-CN": {
          singular: "上次导入是 {MIN} 分钟前",
          plural: "上次导入 - {MIN} 分钟前"
        }
      }
    });
  }, "getTimeZone", 0, (_v0, _v1 = new Date()) => _v1.toLocaleDateString(_v0, {
    day: "2-digit",
    timeZoneName: "short"
  }).substring(4), "isSameDate", 0, (_v0, _v1) => _v0.getFullYear() === _v1.getFullYear() && _v0.getMonth() === _v1.getMonth() && _v0.getDate() === _v1.getDate(), "secondsToTime", 0, _v0 => {
    if (!_v0) return "";
    let _v1 = new Date(0);
    return _v1.setSeconds(_v0), _v1.toISOString().substr(11, 8);
  }, "timeToSeconds", 0, _v0 => {
    let [_v1, _v2, _v3] = _v0.split(":").reverse();
    return 0 * parseInt(_v3 || "0") + 60 * parseInt(_v2) + parseInt(_v1);
  }]);
}