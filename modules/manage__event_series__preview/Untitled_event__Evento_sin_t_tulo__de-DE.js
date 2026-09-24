{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => {
      if (!_v0.pictures?.uri) return;
      let _v1 = _v0.pictures?.sizes;
      if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
    },
    _v4 = _v0 => _v0.title?.trim() || (0, _v1.translate)({
      singular: "Untitled event",
      dictionary: {
        es: {
          singular: "Evento sin título"
        },
        "de-DE": {
          singular: "Unbenannte Veranstaltung"
        },
        "fr-FR": {
          singular: "Événement sans titre"
        },
        "ja-JP": {
          singular: "タイトル未設定のイベント"
        },
        "ko-KR": {
          singular: "제목 없는 이벤트"
        },
        "pt-BR": {
          singular: "Evento sem título"
        },
        "zh-CN": {
          singular: "未命名活动"
        }
      }
    }),
    _v5 = (_v0, _v1) => {
      let _v2 = _v1 ?? _v0.nextOccurrenceTime;
      if (!_v2) return null;
      let _v3 = new Date(_v2);
      if (Number.isNaN(_v3.getTime())) return null;
      let _v4 = new Intl.DateTimeFormat("en", {
          month: "short",
          day: "numeric",
          year: "numeric"
        }).format(_v3),
        _v5 = new Intl.DateTimeFormat("en", {
          hour: "numeric",
          minute: "2-digit"
        }).format(_v3);
      return `${_v4} \xb7 ${_v5}`;
    },
    _v6 = _v0 => {
      if (!_v0) return null;
      let _v1 = new Date(_v0).getTime();
      return Number.isNaN(_v1) ? null : _v1;
    },
    _v7 = (_v0, _v1) => {
      let _v2 = (0, _v1.getCurrentLocale)();
      if (_v1) try {
        return new Intl.DateTimeFormat(_v2, {
          ..._v0,
          timeZone: _v1
        });
      } catch {}
      return new Intl.DateTimeFormat(_v2, _v0);
    };
  _v0.s(["canManageEvent", 0, _v0 => !!_v0.metadata?.interactions?.edit, "expandUpcomingEntries", 0, _v0 => {
    let _v1 = Date.now(),
      _v2 = [];
    return _v0.forEach(_v0 => {
      let _v1 = (_v0.upcomingOccurrences ?? []).filter(_v0 => {
        let _v1 = _v6(_v0);
        return null !== _v1 && _v1 >= _v1;
      });
      (_v1.length > 0 ? _v1 : [_v0.nextOccurrenceTime ?? null]).forEach(_v0 => {
        _v2.push({
          key: `${_v0.uri}#${_v0 ?? "unscheduled"}`,
          event: _v0,
          occurrenceTime: _v0
        });
      });
    }), _v2.sort((_v0, _v1) => (_v6(_v0.occurrenceTime) ?? 0) - (_v6(_v1.occurrenceTime) ?? 0)), _v2;
  }, "formatDateTime", 0, _v0 => {
    if (!_v0) return null;
    let _v1 = new Date(_v0);
    if (Number.isNaN(_v1.getTime())) return null;
    let _v2 = new Intl.DateTimeFormat("en", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(_v1),
      _v3 = new Intl.DateTimeFormat("en", {
        hour: "numeric",
        minute: "2-digit"
      }).format(_v1);
    return `${_v2} ${(0, _v1.translate)({
      singular: "at",
      dictionary: {
        es: {
          singular: "a las"
        },
        "de-DE": {
          singular: "um"
        },
        "fr-FR": {
          singular: "à"
        },
        "ja-JP": {
          singular: "："
        },
        "ko-KR": {
          singular: "시간:"
        },
        "pt-BR": {
          singular: "às"
        },
        "zh-CN": {
          singular: "时间："
        }
      }
    })} ${_v3}`;
  }, "formatDuration", 0, _v0 => {
    if (null == _v0 || !Number.isFinite(_v0) || _v0 < 0) return null;
    let _v1 = Math.floor(_v0),
      _v2 = Math.floor(_v1 / 0),
      _v3 = Math.floor(_v1 % 0 / 60),
      _v4 = String(_v1 % 60).padStart(2, "0");
    return _v2 > 0 ? `${_v2}:${String(_v3).padStart(2, "0")}:${_v4}` : `${_v3}:${_v4}`;
  }, "formatEventDate", 0, _v5, "formatRecordingDate", 0, _v0 => {
    if (!_v0.streamedOn) return null;
    let _v1 = new Date(_v0.streamedOn).getTime();
    return Number.isNaN(_v1) ? null : new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric"
    }).format(new Date(_v1));
  }, "getEventPrivacyLabel", 0, _v0 => {
    let _v1 = _v0.streamPrivacy?.view;
    if (_v1) return _v2.DefaultPrivacies.find(_v0 => _v0.value === _v1)?.title;
  }, "getEventSettingsUrl", 0, _v0 => _v0.settingsLink ?? void 0, "getEventThumbnail", 0, _v3, "getEventTitle", 0, _v4, "getRecordingThumbnail", 0, _v0 => {
    let _v1 = _v0.pictures?.sizes;
    if (_v1 && 0 !== _v1.length) return _v1[_v1.length - 1]?.link ?? void 0;
  }, "getRecordingTitle", 0, _v0 => _v0.name?.trim() || (0, _v1.translate)({
    singular: "Untitled video",
    dictionary: {
      es: {
        singular: "Vídeo sin título"
      },
      "de-DE": {
        singular: "Unbenanntes Video"
      },
      "fr-FR": {
        singular: "Vidéo sans titre"
      },
      "ja-JP": {
        singular: "タイトル未設定の動画"
      },
      "ko-KR": {
        singular: "제목 없는 동영상"
      },
      "pt-BR": {
        singular: "Vídeo sem título"
      },
      "zh-CN": {
        singular: "未命名视频"
      }
    }
  }), "getUpcomingEntryCardProps", 0, _v0 => {
    let _v1;
    return {
      ...{
        title: _v4(_v1 = _v0.event),
        description: _v1.streamDescription,
        date: _v5(_v1),
        thumbnailSrc: _v3(_v1),
        speakers: (_v1.speakers ?? []).filter(_v0 => !!_v0?.name).map(_v0 => ({
          name: _v0.name,
          avatar: _v0.avatar ?? void 0
        }))
      },
      date: _v5(_v0.event, _v0.occurrenceTime)
    };
  }, "groupEventsByDay", 0, (_v0, _v1) => {
    let _v2 = [],
      _v3 = new Map();
    return _v0.forEach(_v0 => {
      let _v1 = _v0.occurrenceTime ?? _v0.event.startTime;
      if (!_v1 || null === _v6(_v1)) return;
      let _v2 = _v7({
          year: "numeric",
          month: "2-digit",
          day: "2-digit"
        }, _v1).format(new Date(_v1)),
        _v3 = _v3.get(_v2);
      _v3 || (_v3 = {
        key: _v2,
        label: ((_v0, _v1) => {
          let _v2 = _v6(_v0);
          if (null === _v2) return null;
          let _v3 = new Date(_v2),
            _v4 = _v7({
              month: "short",
              day: "numeric"
            }, _v1);
          if (!(0, _v1.getCurrentLocale)().startsWith("en")) return _v4.format(_v3);
          let _v5 = _v4.formatToParts(_v3),
            _v6 = _v5.find(_v0 => "month" === _v0.type)?.value ?? "",
            _v7 = _v5.find(_v0 => "day" === _v0.type)?.value ?? "",
            _v8 = Number(_v7);
          return `${_v6} ${_v7}${Number.isNaN(_v8) ? "" : (_v0 => {
            let _v1 = _v0 % 100;
            if (_v1 >= 11 && _v1 <= 13) return "th";
            switch (_v0 % 10) {
              case 1:
                return "st";
              case 2:
                return "nd";
              case 3:
                return "rd";
              default:
                return "th";
            }
          })(_v8)}`;
        })(_v1, _v1) ?? "",
        events: []
      }, _v3.set(_v2, _v3), _v2.push(_v3)), _v3.events.push({
        key: _v0.key,
        title: _v4(_v0.event),
        time: ((_v0, _v1) => {
          let _v2 = _v6(_v0);
          if (null === _v2) return null;
          let _v3 = new Date(_v2),
            _v4 = _v7({
              hour: "numeric",
              minute: "2-digit"
            }, _v1).format(_v3),
            _v5 = _v1 ? ((_v0, _v1) => {
              try {
                return new Intl.DateTimeFormat((0, _v1.getCurrentLocale)(), {
                  timeZone: _v1,
                  timeZoneName: "short"
                }).formatToParts(_v0).find(_v0 => "timeZoneName" === _v0.type)?.value ?? null;
              } catch {
                return null;
              }
            })(_v3, _v1) : null;
          return _v5 ? `${_v4} ${_v5}` : _v4;
        })(_v1, _v1),
        description: _v0.event.streamDescription,
        thumbnailSrc: _v3(_v0.event)
      });
    }), _v2;
  }, "isEventPassed", 0, _v0 => {
    let _v1 = _v0.nextOccurrenceTime ? new Date(_v0.nextOccurrenceTime).getTime() : NaN;
    if (!Number.isNaN(_v1) && _v1 > Date.now()) return !1;
    let _v2 = _v0.startTime ? new Date(_v0.startTime).getTime() : _v1;
    return !Number.isNaN(_v2) && _v2 <= Date.now();
  }, "splitSeriesEvents", 0, _v0 => {
    let _v1 = Date.now(),
      _v2 = [],
      _v3 = [];
    _v0.forEach(_v0 => {
      let _v1 = _v0.nextOccurrenceTime ? new Date(_v0.nextOccurrenceTime).getTime() : NaN;
      !Number.isNaN(_v1) && _v1 >= _v1 ? _v2.push(_v0) : _v3.push(_v0);
    });
    let _v4 = _v0 => _v0.nextOccurrenceTime ? new Date(_v0.nextOccurrenceTime).getTime() : 0;
    return _v2.sort((_v0, _v1) => _v4(_v0) - _v4(_v1)), {
      upcoming: _v2,
      onDemand: _v3
    };
  }]);
}