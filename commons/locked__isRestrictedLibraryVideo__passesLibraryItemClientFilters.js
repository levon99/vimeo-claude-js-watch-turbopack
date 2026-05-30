{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = _v0 => !!_v0.isColdStorage || "locked" === (0, _v1.getStorageLimitLockingPrivacyFilterValue)(_v0.privacy?.view);
  _v0.s(["isRestrictedLibraryVideo", 0, _v2], 0);
  var _v3 = _v0.i(0);
  _v0.s(["passesLibraryItemClientFilters", 0, ({
    clipPrivacyFilter: _v0,
    contentTypeOptions: _v1,
    contentTypeSelection: _v2,
    item: _v3,
    shouldUseClientPipeline: _v4,
    videoAvailabilityFilter: _v5
  }) => {
    let _v6;
    if (!_v4) return !0;
    if (!(0, _v3.passesContentTypeSelection)(_v3, _v1, _v2)) return !1;
    if (!_v3.video) return !0;
    let _v7 = _v3.video,
      _v8 = 0 === _v0.size || !!(_v6 = (0, _v1.getStorageLimitLockingPrivacyFilterValue)(_v7.privacy?.view)) && ("locked" === _v6 || _v0.has(_v6)),
      _v9 = (() => {
        if (!(0, _v3.doesSelectionIncludeVideos)(_v1, _v2) || _v5.has("restricted") === _v5.has("available")) return !0;
        let _v0 = _v2(_v7);
        return _v5.has("restricted") && !_v5.has("available") ? _v0 : !_v0;
      })();
    return _v8 && _v9;
  }], 0);
}