{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = "dev_region_mode",
    _v4 = ["none", "copyright", "china"],
    _v5 = _v0 => "string" == typeof _v0 && _v4.includes(_v0);
  _v0.s(["DEV_REGION_COOKIE", 0, _v3, "getDevRegionModeFromHeaders", 0, _v0 => {
    var _v1 = (_v0 instanceof Headers ? _v0.get("cookie") : _v0.cookie) ?? void 0;
    for (let _v0 of (Array.isArray(_v1) ? _v1.join("; ") : _v1 ?? "").split(";")) {
      let _v0,
        _v1 = _v0.indexOf("=");
      if (-1 !== _v1 && _v0.slice(0, _v1).trim() === _v3) {
        try {
          _v0 = decodeURIComponent(_v0.slice(_v1 + 1).trim());
        } catch {
          return "none";
        }
        return _v5(_v0) ? _v0 : "none";
      }
    }
    return "none";
  }, "isDevRegionMode", 0, _v5, "isDevRegionOverrideEnabled", 0, () => "production" !== (0, _v2.default)() || (_v1.default.env.ENVIRONMENT?.startsWith("ci-") ?? !1)]);
}