{
  "use strict";

  let _v1 = "library";
  _v0.s(["isPublicSearchAvailable", 0, (_v0, _v1) => !_v0 && !_v1?.isFromCopyrightRestrictedRegion && !_v1?.isEnterpriseSite && !_v1?.isSimplifiedSite, "routeSearchScope", 0, (_v0, _v1 = !0) => {
    if (!_v1) return null;
    let _v2 = _v0.split(/[?#]/)[0].replace(/\/+$/, "");
    return _v2 === `/search/${_v1}` || _v2.startsWith(`/search/${_v1}/`) ? "library" : "/search" === _v2 || _v2.startsWith("/search/") ? "vimeo" : null;
  }, "slugSearchScope", 0, _v0 => (Array.isArray(_v0) ? _v0[0] : _v0) === _v1 ? "library" : "vimeo"]);
}