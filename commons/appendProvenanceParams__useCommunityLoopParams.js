{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = /^[a-z0-9_]{1,64}$/;
  _v0.s(["appendProvenanceParams", 0, (_v0, _v1, _v2) => {
    if (!_v2.test(_v1)) return _v0;
    let _v3 = _v0.includes("?") ? "&" : "?";
    return `${_v0}${_v3}source_section=${_v1}&source_position=${_v2}`;
  }, "useCommunityLoopParams", 0, () => {
    let _v0 = (0, _v1.useSearchParams)().get("fl"),
      _v1 = _v0 && _v0.length > 0 ? _v0 : "wc";
    return `?fl=${_v1}`;
  }]);
}