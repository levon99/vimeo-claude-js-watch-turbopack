{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.i(0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
      daily: (0, _v3.translate)({
        singular: "Daily",
        dictionary: {
          es: {
            singular: "Todos los días"
          },
          "de-DE": {
            singular: "Jeden Tag"
          },
          "fr-FR": {
            singular: "Quotidiennement"
          },
          "ja-JP": {
            singular: "デイリー"
          },
          "ko-KR": {
            singular: "일일"
          },
          "pt-BR": {
            singular: "Diariamente"
          },
          "zh-CN": {
            singular: "每日"
          }
        }
      }),
      notStartedYet: (0, _v3.translate)({
        singular: "This live event has not started yet",
        dictionary: {
          es: {
            singular: "Este evento en vivo aún no empieza"
          },
          "de-DE": {
            singular: "Dieses Live-Event hat noch nicht begonnen."
          },
          "fr-FR": {
            singular: "Cet évènement live n'a pas encore commencé"
          },
          "ja-JP": {
            singular: "このライブイベントはまだ開始されていません"
          },
          "ko-KR": {
            singular: "이 라이브 이벤트는 아직 시작하지 않았습니다"
          },
          "pt-BR": {
            singular: "Este evento ao vivo ainda não começou"
          },
          "zh-CN": {
            singular: "此直播活动尚未开始"
          }
        }
      }),
      scheduled: (0, _v3.translate)({
        singular: "Scheduled",
        dictionary: {
          es: {
            singular: "Programado"
          },
          "de-DE": {
            singular: "Auf den Zeitplan gesetzt"
          },
          "fr-FR": {
            singular: "Programmé"
          },
          "ja-JP": {
            singular: "ライブ予定"
          },
          "ko-KR": {
            singular: "예정"
          },
          "pt-BR": {
            singular: "Agendado"
          },
          "zh-CN": {
            singular: "已安排"
          }
        }
      }),
      schedulePlaceholder: (0, _v3.translate)({
        singular: "This event hasn't started yet",
        dictionary: {
          es: {
            singular: "El evento aún no ha comenzado"
          },
          "de-DE": {
            singular: "Event hat noch nicht begonnen"
          },
          "fr-FR": {
            singular: "Cet évènement n'a pas encore commencé"
          },
          "ja-JP": {
            singular: "このイベントはまだ開始されていません"
          },
          "ko-KR": {
            singular: "이 이벤트는 아직 시작하지 않았습니다"
          },
          "pt-BR": {
            singular: "Este evento ainda não começou"
          },
          "zh-CN": {
            singular: "此活动尚未开始"
          }
        }
      }),
      watchLive: (0, _v3.translate)({
        singular: "Watch live",
        dictionary: {
          es: {
            singular: "Ver en vivo"
          },
          "de-DE": {
            singular: "Live zuschauen"
          },
          "fr-FR": {
            singular: "Regardez en live"
          },
          "ja-JP": {
            singular: "ライブを鑑賞"
          },
          "ko-KR": {
            singular: "라이브 시청"
          },
          "pt-BR": {
            singular: "Assistir ao vivo"
          },
          "zh-CN": {
            singular: "观看直播"
          }
        }
      }),
      weekdays: (0, _v3.translate)({
        singular: "Weekdays",
        dictionary: {
          es: {
            singular: "Entre semana"
          },
          "de-DE": {
            singular: "An Wochentagen"
          },
          "fr-FR": {
            singular: "Les jours de semaine"
          },
          "ja-JP": {
            singular: "平日"
          },
          "ko-KR": {
            singular: "주간"
          },
          "pt-BR": {
            singular: "Dias úteis"
          },
          "zh-CN": {
            singular: "工作日"
          }
        }
      }),
      weekends: (0, _v3.translate)({
        singular: "Weekends",
        dictionary: {
          es: {
            singular: "Los fines de semana"
          },
          "de-DE": {
            singular: "An Wochenenden"
          },
          "fr-FR": {
            singular: "Les week-ends"
          },
          "ja-JP": {
            singular: "週末"
          },
          "ko-KR": {
            singular: "주말"
          },
          "pt-BR": {
            singular: "Fins de Semana"
          },
          "zh-CN": {
            singular: "周末"
          }
        }
      })
    },
    _v5 = "single",
    _v6 = (_v0, _v1) => {
      if (_v1.length !== _v0.length) return !1;
      let _v2 = !0;
      return _v0.forEach(_v0 => {
        0 > _v1.indexOf(_v0) && (_v2 = !1);
      }), _v2;
    },
    _v7 = _v0 => _v1.DateTime.fromISO(_v0).toLocal(),
    _v8 = _v0 => {
      let _v1 = _v2.RRule.parseString(_v0.rrule);
      return _v0.startTime && (_v1.dtstart = new Date(_v0.startTime)), _v0.endTime && (_v1.until = new Date(_v0.endTime)), new _v2.RRule(_v1);
    };
  _v0.s(["getNextOccurrenceStartTime", 0, (_v0, _v1 = new Date()) => {
    if (_v0?.rrule) try {
      let _v0 = _v2.RRule.parseString(_v0.rrule);
      _v0.startTime && (_v0.dtstart = new Date(_v0.startTime));
      let _v1 = new _v2.RRule(_v0).after(_v1, !0);
      if (_v1) return _v1.toISOString();
    } catch {}
    return _v0?.startTime ?? null;
  }, "getScheduleAvailability", 0, _v0 => {
    if (!_v0) return _v4.watchLive;
    if (_v0?.type) {
      let _v0;
      return _v0 = _v0.type === _v5 ? _v0.startTime : _v0.dailyTime, _v0 && !_v0 ? _v4.watchLive : _v4.scheduled;
    }
    return _v0?.rrule ? _v8(_v0).after(new Date()) ? _v4.scheduled : _v4.watchLive : _v0?.startTime ? _v4.scheduled : _v4.watchLive;
  }, "getScheduleTime", 0, _v0 => {
    if (!_v0) return _v4.schedulePlaceholder;
    if (_v0?.type) {
      if (!(_v0.type === _v5 ? _v0.startTime : _v0.dailyTime)) return _v4.notStartedYet;
      switch (_v0.type) {
        case _v5:
          if (_v0.startTime) return _v7(_v0.startTime).toFormat("LLLL d 'at' t");
          return "";
        case "weekly":
          if (_v0.dailyTime) return `${((_v0 = [], _v1 = "") => {
            let _v2 = ((_v0 = [], _v1 = "") => _v0.map(_v0 => Number(_v1.DateTime.fromFormat(_v1.substring(0, _v1.length - 1), "HH:mm:ss", {
              zone: "utc"
            }).set({
              weekday: _v0
            }).toLocal().toFormat("c"))))(_v0, _v1).sort();
            if (_v6(_v2, [1, 2, 3, 4, 5])) return _v4.weekdays;
            if (_v6(_v2, [6, 7])) return _v4.weekends;
            if (_v6(_v2, [1, 2, 3, 4, 5, 6, 7])) return _v4.daily;
            let _v3 = [];
            _v2.forEach(_v0 => {
              _v3.push(_v1.DateTime.fromFormat(_v0.toString(), "c").toFormat("cccc"));
            });
            let _v4 = _v3.length;
            switch (_v4) {
              case 0:
                return "";
              case 1:
                return `Every ${_v3[0]}`;
              case 2:
                return `Every ${_v3[0]} and ${_v3[1]}`;
              default:
                return `Every ${_v3.slice(0, _v4 - 1).join(", ")} and ${_v3[_v4 - 1]}`;
            }
          })(_v0.weekdays, _v0.dailyTime)} at ${_v7(_v0.dailyTime).toFormat("t")}`;
          return "";
        default:
          return "";
      }
    }
    if (_v0?.rrule) {
      let _v0 = _v8(_v0);
      if (!_v0.after(new Date())) return _v4.schedulePlaceholder;
      let _v1 = _v0.toText(),
        _v2 = _v0.startTime ? _v7(_v0.startTime).toFormat("'at' t") : "";
      return `${_v1[0].toUpperCase()}${_v1.slice(1)} ${_v2}`;
    }
    return _v0?.startTime ? _v7(_v0.startTime).toFormat("LLLL d 'at' t") : _v4.schedulePlaceholder;
  }], 0);
}