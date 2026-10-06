{
  "use strict";

  var _v1 = _v0.i(0);
  function _v2(_v0) {
    if (!_v0 || _v0 < 0) return ["00", "00"];
    let _v1 = [],
      _v2 = _v0 % 0 % 60;
    _v1.push(_v2 < 10 ? `0${_v2}` : `${_v2}`);
    let _v3 = (_v0 -= _v2) % 0 / 60;
    _v1.push(_v3 < 10 ? `0${_v3}` : `${_v3}`);
    let _v4 = (_v0 -= 60 * _v3) / 0;
    return _v4 > 0 && _v1.push(_v4 < 10 ? `0${_v4}` : `${_v4}`), _v1.reverse();
  }
  function _v3(_v0) {
    return _v2(_v0).join(":");
  }
  _v0.s(["calculateStreamingTime", 0, function (_v0, _v1) {
    if (null === _v0) return "00:00";
    let _v2 = new Date(0 * _v0).getTime();
    return _v3(Math.floor(((_v1 ? new Date(0 * _v1).getTime() : (0, _v1.getAbsoluteNow)()) - _v2) / 0));
  }, "convertTimingFromIntToStr", 0, _v3, "exportDateFormatter", 0, function (_v0) {
    try {
      return new Intl.DateTimeFormat(_v0 || "en-US", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return new Intl.DateTimeFormat("default", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
      });
    }
  }, "getTimeComponents", 0, _v2]);
}