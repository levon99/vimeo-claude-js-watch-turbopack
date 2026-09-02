{
  "use strict";

  let _v1 = {
      anybody: "public",
      cold_storage: "locked",
      disable: "hide_from_vimeo",
      nobody: "private",
      password: "password",
      team: "team",
      unlisted: "unlisted"
    },
    _v2 = _v0 => _v0 && _v0 in _v1 ? _v1[_v0] : null,
    _v3 = _v0 => !!_v0.isColdStorage || "locked" === _v2(_v0.privacy?.view);
  _v0.s(["isRestrictedLibraryVideo", 0, _v3], 0);
  var _v4 = _v0.i(0);
  let _v5 = _v0 => _v0.has("restricted") !== _v0.has("available");
  _v0.s(["passesLibraryItemClientFilters", 0, ({
    clipPrivacyFilter: _v0,
    contentTypeOptions: _v1,
    contentTypeSelection: _v2,
    item: _v3,
    shouldUseClientPipeline: _v4,
    videoAvailabilityFilter: _v5
  }) => {
    if (!_v4) return !0;
    if (!(0, _v4.passesContentTypeSelection)(_v3, _v1, _v2)) return !1;
    if (!_v3.video) return !0;
    let _v6 = _v3.video,
      _v7 = 0 === _v0.size || (() => {
        if (_v0.has("cold_privacy")) {
          if (_v6.isColdPrivacyRestricted) return !0;
          if (1 === _v0.size) return !1;
        }
        let _v0 = _v2(_v6.privacy?.view);
        return !!_v0 && ("locked" === _v0 ? _v5(_v5) : _v0.has(_v0));
      })(),
      _v8 = (() => {
        if (!(0, _v4.doesSelectionIncludeVideos)(_v1, _v2) || !_v5(_v5)) return !0;
        let _v0 = _v3(_v6);
        return _v5.has("restricted") && !_v5.has("available") ? _v0 : !_v0;
      })();
    return _v7 && _v8;
  }], 0);
}