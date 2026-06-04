{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["getBPSortClickEventCopy", 0, _v0 => {
    let _v1 = `${_v0.type}_${_v0.direction}`;
    return _v1.BP_EVENT_COPY[_v1] ?? "unknown";
  }, "getResourceIdFromUri", 0, _v0 => {
    if (!_v0) return 0;
    let _v1 = _v0.split("/");
    return parseInt(_v1[_v1.length - 1].split(":")[0]);
  }, "getVideoReviewPageUrl", 0, (_v0, _v1) => `${window.location.origin}/reviews/${_v0.split("/").at(-1)}/videos/${_v1}`, "idFromUri", 0, _v0 => _v0 ? parseInt(_v0.split("/")[2], 10) : 0, "isSubsetOf", 0, function (_v0, _v1) {
    return !(_v0.size > _v1.size) && new Set([..._v0, ..._v1]).size === _v1.size;
  }, "mergeSets", 0, function (..._v0) {
    return new Set(_v0.flatMap(_v0 => [..._v0]));
  }]);
}