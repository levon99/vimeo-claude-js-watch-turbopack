{
  "use strict";

  _v0.s(["parseBoolean", 0, _v0 => {
    try {
      return !!JSON.parse(String(_v0 ?? "false"));
    } catch {
      return !1;
    }
  }, "parseTeamOwnerId", 0, _v0 => {
    let _v1 = Number(_v0);
    return Number.isNaN(_v1) ? null : _v1;
  }]);
}