{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["formatDuration", 0, function (_v0, _v1 = !0) {
    let _v2 = Math.floor(_v0 / 0),
      _v3 = Math.floor(_v2 / 0),
      _v4 = Math.floor(_v2 % 0 / 60),
      _v5 = _v2 % 60,
      _v6 = _v0 => String(_v0).padStart(2, "0");
    return _v1 ? `${_v6(_v3)}:${_v6(_v4)}:${_v6(_v5)}` : `${_v6(_v4)}:${_v6(_v5)}`;
  }, "getAbsoluteNow", 0, function () {
    return Date.now() + _v1.liveApplicationConfig.TIMING.CLOCK_SKEW;
  }, "getDifferenceBetweenTwoTimeStamps", 0, function (_v0, _v1) {
    let _v2 = Math.floor((_v1 - _v0) / 0),
      _v3 = Math.floor(_v2 / 60),
      _v4 = Math.floor(_v3 / 60),
      _v5 = Math.floor(_v4 / 24);
    return {
      seconds: _v2,
      minutes: _v3,
      hours: _v4,
      days: _v5
    };
  }, "getTwoDigitFormat", 0, function (_v0) {
    try {
      return new Intl.DateTimeFormat([], {
        hour: "2-digit",
        minute: "2-digit"
      }).format(_v0);
    } catch {
      return "00:00";
    }
  }, "toTimestamp", 0, function (_v0) {
    return _v0 ? "string" == typeof _v0 ? Math.floor(new Date(_v0).getTime() / 0) : _v0 : null;
  }]);
}