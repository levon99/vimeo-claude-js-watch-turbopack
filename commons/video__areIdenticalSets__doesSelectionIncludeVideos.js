{
  "use strict";

  let _v1 = (_v0, _v1) => 0 === _v1.size || _v1.size === _v0.length,
    _v2 = (_v0, _v1, _v2) => {
      let _v3 = new Set(_v1);
      return _v3.has(_v2) ? _v3.delete(_v2) : _v3.add(_v2), _v3;
    },
    _v3 = (_v0, _v1) => {
      if (_v1.has("video")) return _v1;
      let _v2 = new Set(_v1);
      return _v2.add("video"), _v2;
    };
  _v0.s(["areIdenticalSets", 0, (_v0, _v1) => {
    if (_v0.size !== _v1.size) return !1;
    for (let _v0 of _v0) if (!_v1.has(_v0)) return !1;
    return !0;
  }, "doesSelectionIncludeVideos", 0, (_v0, _v1) => _v1(_v0, _v1) || _v1.has("video"), "excludeVideosFromSelection", 0, (_v0, _v1) => {
    if (_v1(_v0, _v1)) return new Set(_v0.filter(_v0 => "video" !== _v0));
    let _v2 = new Set(_v1);
    return _v2.delete("video"), _v2;
  }, "getContentTypeApiFilterParam", 0, (_v0, _v1) => {
    if (!_v1(_v0, _v1) && 1 === _v1.size) return [..._v1][0];
  }, "includeVideosInSelection", 0, _v3, "isContentTypeOptionChecked", 0, (_v0, _v1, _v2) => 0 !== _v1.size && (_v1.size === _v0.length || _v1.has(_v2)), "isContentTypeSelectionDefault", 0, _v1, "passesContentTypeSelection", 0, (_v0, _v1, _v2) => !!_v1(_v1, _v2) || (_v0.video ? _v2.has("video") : _v0.folder ? _v2.has("folder") : !_v0.showcase || _v2.has("showcase")), "toggleContentTypeSelection", 0, _v2, "toggleContentTypeSelectionWithAvailabilityAwareFolder", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v2(_v0, _v1, _v2);
    return _v3 && "folder" === _v2 && !_v1.has("folder") && _v4.has("folder") && !_v4.has("video") ? _v3(_v0, _v4) : _v4;
  }]);
}