{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3(_v0) {
    let _v1 = _v0.req.headers["x-geo-vary-group"];
    if ((_v0.req.headers["user-agent"] || "").toLowerCase().includes("googlebot") || "EU_UK" !== _v1) return !1;
    if ((0, _v2.isLoggedOut)(_v0.req)) return !0;
    try {
      return !(await (0, _v1.fetchAndFormatCapabilties)({
        apiUrl: _v0.baseUrl,
        jwt: _v0.jwt,
        capabilities: ["bypassRedviolin"]
      })).bypassRedviolin;
    } catch (_v0) {
      return !0;
    }
  }
  _v0.s(["isFromCopyrightRestrictedRegion", 0, _v3]);
}