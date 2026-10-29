{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0, _v1) {
    let _v2 = new Date(_v0);
    return isNaN(_v2.getTime()) ? "-" : new Intl.DateTimeFormat(_v1, {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    }).format(_v2);
  }
  _v0.s(["useEventScheduledAt", 0, function (_v0, _v1) {
    return (0, _v1.useMemo)(() => {
      if (_v0) if ("venue" === _v0.eventType) return _v0.nextOccurrenceTime ? (0, _v3.venueStartTimeText)(_v4(_v0.nextOccurrenceTime, _v1)) : (0, _v2.translate)({
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
      });else return _v0.nextOccurrenceTime ? (0, _v3.eventStartTimeText)(_v4(_v0.nextOccurrenceTime, _v1)) : (0, _v2.translate)({
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
    }, [_v0, _v1]);
  }]);
}