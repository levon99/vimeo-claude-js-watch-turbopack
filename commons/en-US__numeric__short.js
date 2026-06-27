{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "en-US",
    _v4 = (_v0, _v1 = _v3) => {
      let _v2 = new Date(_v0);
      return isNaN(_v2.getTime()) ? "-" : _v2.toLocaleDateString(_v1, {
        day: "numeric",
        month: "short",
        year: "numeric"
      });
    },
    _v5 = (_v0, _v1 = _v3) => {
      if (isNaN(new Date(_v0).getTime())) return "-";
      let _v2 = _v4(_v0, _v1),
        _v3 = ((_v0, _v1 = _v3) => {
          let _v2 = new Date(_v0);
          return isNaN(_v2.getTime()) ? "-" : new Intl.DateTimeFormat(_v1, {
            hour: "numeric",
            minute: "numeric"
          }).format(_v2);
        })(_v0, _v1);
      return (0, _v1.translate)({
        singular: "{DATE} at {TIME}",
        replacements: {
          DATE: _v2,
          TIME: _v3
        },
        dictionary: {
          es: {
            singular: "{DATE} a las {TIME}"
          },
          "de-DE": {
            singular: "{DATE} am {TIME}"
          },
          "fr-FR": {
            singular: "Le {DATE} à {TIME}"
          },
          "ja-JP": {
            singular: "{DATE} {TIME}"
          },
          "ko-KR": {
            singular: "{DATE} {TIME}"
          },
          "pt-BR": {
            singular: "Em {DATE} às {TIME}"
          },
          "zh-CN": {
            singular: "{DATE} {TIME}"
          }
        }
      });
    };
  _v0.s(["getDisplayDate", 0, _v4, "getDisplayDateWithTime", 0, _v5, "getEventStartTime", 0, (_v0, _v1) => {
    if (_v0) if ("venue" === _v0.eventType) return _v0.nextOccurrenceTime ? (0, _v2.venueStartTimeText)(_v5(_v0.nextOccurrenceTime, _v1)) : (0, _v1.translate)({
      singular: "Unscheduled venue",
      dictionary: {
        es: {
          singular: "Sede no programada"
        },
        "de-DE": {
          singular: "Veranstaltungsort noch nicht festgelegt"
        },
        "fr-FR": {
          singular: "Site non programmé"
        },
        "ja-JP": {
          singular: "スケジュール予約されていないベニュー"
        },
        "ko-KR": {
          singular: "예정되지 않은 광장"
        },
        "pt-BR": {
          singular: "Venue não agendado"
        },
        "zh-CN": {
          singular: "未预定场地"
        }
      }
    });else return _v0.nextOccurrenceTime ? (0, _v2.eventStartTimeText)(_v5(_v0.nextOccurrenceTime, _v1)) : (0, _v1.translate)({
      singular: "Unscheduled event",
      dictionary: {
        es: {
          singular: "Evento no programado"
        },
        "de-DE": {
          singular: "Außerplanmäßiges Event"
        },
        "fr-FR": {
          singular: "Événement non programmé"
        },
        "ja-JP": {
          singular: "スケジュール予約されていないイベント"
        },
        "ko-KR": {
          singular: "예정되지 않은 이벤트"
        },
        "pt-BR": {
          singular: "Evento não agendado"
        },
        "zh-CN": {
          singular: "未预定活动"
        }
      }
    });
    return "";
  }, "getHasDatePassed", 0, _v0 => new Date().toISOString() > _v0]);
}