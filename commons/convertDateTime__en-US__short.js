{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["convertDateTime", 0, function (_v0) {
    let _v1 = new Date(_v0),
      _v2 = navigator.language || "en-US",
      _v3 = new Intl.DateTimeFormat(_v2, {
        month: "short",
        day: "numeric",
        year: "numeric"
      }),
      _v4 = new Intl.DateTimeFormat(_v2, {
        hour: "numeric",
        minute: "numeric",
        hour12: !0
      }),
      _v5 = _v3.format(_v1),
      _v6 = _v4.format(_v1);
    return (0, _v1.translate)({
      singular: "{DATE} at {TIME}",
      replacements: {
        DATE: _v5,
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
  }, "getAvatarImages", 0, _v0 => {
    let _v1 = "https://i.vimeocdn.com/custom_asset/92992640f627fdad710e4c3cb728b1b2",
      _v2 = _v0?.find(_v0 => 72 === _v0.width)?.link || _v0?.[1]?.link || _v1,
      _v3 = _v0?.find(_v0 => 144 === _v0.width)?.link || _v0?.[2]?.link || _v1;
    return [_v2, `${_v3} 2x`];
  }, "idFromUri", 0, _v0 => _v0 ? parseInt(_v0.substring(_v0.lastIndexOf("/") + 1), 10) : 0]);
}