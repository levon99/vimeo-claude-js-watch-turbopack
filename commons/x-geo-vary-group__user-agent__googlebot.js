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
  let _v4 = _v0 => "function" == typeof _v0.headers.get;
  _v0.s(["isAllowedInChina", 0, _v0 => {
    let _v1 = (_v4(_v0) ? _v0.headers.get("vimeo-environment-tld") || "" : _v0.headers["vimeo-environment-tld"] || "").trim().toLowerCase(),
      _v2 = ["/", "^/((es|de|fr|jp|pt-br|ko|zh-cn))?$", "/404", "/home", "/join", "/log_in", "/library", "/search/library", "/shared-with-me", "/user/[slug]/folder/[slug]", "/profile/[userId]", "^/(\\d+)$", "^/(\\d+)/([0-9a-fA-F]+)$"].includes(_v4(_v0) ? _v0.headers.get("crossroads-rule") || "" : _v0.headers["crossroads-rule"] || "");
    return "cn" === _v1 && _v2;
  }, "isEnterprise", 0, _v0 => _v4(_v0) ? "" !== _v0.headers.get("vimeo-environment-id") && null !== _v0.headers.get("vimeo-environment-id") : "" !== _v0.headers["vimeo-environment-id"] && null !== _v0.headers["vimeo-environment-id"], "isFromCopyrightRestrictedRegion", 0, _v3, "isNextMiddlewareRequest", 0, _v4]);
}