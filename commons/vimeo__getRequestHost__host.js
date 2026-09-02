{
  "use strict";

  let _v1 = _v0 => {
    if ("function" == typeof _v0.cookies?.get) return null != _v0.cookies.get("vimeo");
    let _v1 = _v0.cookies;
    if (_v1 && null != _v1.vimeo) return !0;
    let _v2 = _v0.headers?.cookie;
    return "string" == typeof _v2 && /(?:^|;\s*)vimeo=/.test(_v2);
  };
  _v0.s(["getRequestHost", 0, _v0 => {
    let _v1 = "function" == typeof _v0.headers?.get ? _v0.headers.get("host") : _v0.headers?.host;
    return _v1 ? _v1.toLowerCase().split(":")[0].replace(/^www\./, "") : "";
  }, "hasLoggedIn", 0, _v0 => {
    if ("function" == typeof _v0.cookies?.get) return _v0.cookies.get("has_logged_in")?.value === "1";
    let _v1 = _v0.cookies;
    return _v1?.has_logged_in === "1";
  }, "hasVimeoCookie", 0, _v1, "isChinaRestrictedRequest", 0, _v0 => {
    let _v1 = ("function" == typeof _v0.headers?.get ? _v0.headers.get("vimeo-environment-tld") || "" : _v0.headers?.["vimeo-environment-tld"] ?? "").trim().toLowerCase();
    return "cn" === _v1 || "hk" === _v1;
  }, "isGooglebot", 0, _v0 => _v0.toLowerCase().includes("googlebot"), "isLoggedOut", 0, _v0 => !_v1(_v0)]);
}