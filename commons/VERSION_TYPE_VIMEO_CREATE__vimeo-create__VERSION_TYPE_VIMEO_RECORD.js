{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = _v0 => `V${_v0}`;
  _v0.s(["VERSION_TYPE_VIMEO_CREATE", 0, "vimeo-create", "VERSION_TYPE_VIMEO_RECORD", 0, "screen-recording", "formatDate", 0, (_v0, _v1 = "en-US") => {
    let _v2 = new Date(),
      _v3 = new Date();
    _v3.setDate(_v2.getDate() - 1);
    let _v4 = _v0 ? new Date(_v0).getTime() : _v2.getTime(),
      _v5 = new Date(_v0),
      _v6 = new Intl.DateTimeFormat(_v1, {
        hour: "numeric",
        minute: "numeric"
      }).format(_v4).toLowerCase(),
      _v7 = new Intl.DateTimeFormat(_v1, {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(_v4),
      _v8 = (_v0, _v1) => _v0.getFullYear() === _v1.getFullYear() && _v0.getMonth() === _v1.getMonth() && _v0.getDate() === _v1.getDate();
    return _v8(_v5, _v2) ? (0, _v1.translate)({
      singular: "Today at {TIME}",
      replacements: {
        TIME: _v6
      },
      dictionary: {
        es: {
          singular: "Hoy a las {TIME}"
        },
        "de-DE": {
          singular: "Heute um {TIME}"
        },
        "fr-FR": {
          singular: "Aujourd'hui à {TIME}"
        },
        "ja-JP": {
          singular: "今日 {TIME}"
        },
        "ko-KR": {
          singular: "오늘 {TIME}"
        },
        "pt-BR": {
          singular: "Hoje às {TIME}"
        },
        "zh-CN": {
          singular: "今天 {TIME}"
        }
      }
    }) : _v8(_v5, _v3) ? (0, _v1.translate)({
      singular: "Yesterday at {TIME}",
      replacements: {
        TIME: _v6
      },
      dictionary: {
        es: {
          singular: "Ayer a las {TIME}"
        },
        "de-DE": {
          singular: "Gestern um {TIME}"
        },
        "fr-FR": {
          singular: "Hier à {TIME}"
        },
        "ja-JP": {
          singular: "昨日 {TIME}に"
        },
        "ko-KR": {
          singular: "어제 {TIME}"
        },
        "pt-BR": {
          singular: "Ontem às {TIME}"
        },
        "zh-CN": {
          singular: "昨天 {TIME}"
        }
      }
    }) : (0, _v1.translate)({
      singular: "{DATE} at {TIME}",
      replacements: {
        DATE: _v7,
        TIME: _v6
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
  }, "getNextVersionSequenceNumber", 0, _v0 => _v0.reduce((_v0, _v1) => Math.max(_v0, _v1.sequenceNumber ?? 0), 0) + 1, "getVersionLabel", 0, _v0 => null === _v0 ? (0, _v1.translate)({
    singular: "Failed",
    dictionary: {
      es: {
        singular: "Fallido"
      },
      "de-DE": {
        singular: "Fehlgeschlagen"
      },
      "fr-FR": {
        singular: "Échec"
      },
      "ja-JP": {
        singular: "失敗しました"
      },
      "ko-KR": {
        singular: "실패"
      },
      "pt-BR": {
        singular: "Com falha"
      },
      "zh-CN": {
        singular: "失败"
      }
    }
  }) : _v3(_v0), "getVersionNumber", 0, _v3, "isStaleIncompleteVersion", 0, ({
    createdTime: _v0,
    sequenceNumber: _v1,
    versionTranscodeStatus: _v2
  }) => !!_v0 && null === _v1 && "in_progress" === _v2 && Date.now() - new Date(_v0).getTime() >= 0, "isUploadActiveOrComplete", 0, _v0 => [_v2.STATES.ATTACHING, _v2.STATES.UPLOADING, _v2.STATES.RESUMING, _v2.STATES.REROUTING, _v2.STATES.COMPLETED].includes(_v0.state)]);
}