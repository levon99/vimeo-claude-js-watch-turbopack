{
  "use strict";

  _v0.s(["getQuotaMood", 0, (_v0, _v1, _v2) => {
    if ("video_count" === _v2 && _v0 >= 0 && _v1 >= 0) {
      if (_v1 <= 10) {
        if (_v1 - _v0 <= 1 || _v0 / _v1 >= .7) return "limit";
        if (_v0 / _v1 >= .5) return "warn";
      }
      if (_v1 > 10) {
        if (_v0 / _v1 >= .9) return "limit";
        if (_v0 / _v1 >= 2 / 3) return "warn";
      }
      return "safe";
    }
    if ("video_size" === _v2 && _v0 >= 0 && _v1 >= 0) {
      if (_v0 / _v1 >= .9) return "limit";
      if (_v0 / _v1 >= 2 / 3) return "warn";
    }
    return "safe";
  }]);
}