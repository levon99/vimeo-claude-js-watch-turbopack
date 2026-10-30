{
  "use strict";

  _v1.exports = function (_v0) {
    try {
      return {
        error: !1,
        value: _v0()
      };
    } catch (_v0) {
      return {
        error: !0,
        value: _v0
      };
    }
  };
}