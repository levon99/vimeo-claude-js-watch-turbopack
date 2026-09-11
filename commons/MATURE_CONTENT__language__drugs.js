{
  "use strict";

  let _v1 = new Map();
  _v0.s(["MATURE_CONTENT", 0, ["language", "drugs", "nudity", "violence"], "getIsInitiallyBlocked", 0, (_v0, _v1) => {
    if (!_v0) return !1;
    let _v2 = JSON.stringify([_v1, _v0?.user?.id]),
      _v3 = _v1.get(_v2);
    if (void 0 !== _v3) return _v3;
    let _v4 = _v0?.contentViewingPrefs.contentRatingList;
    if (!_v4?.length || !_v1 || _v1.includes("safe")) return _v1.set(_v2, !1), !1;
    let _v5 = !_v1.every(_v0 => "advertisement" === _v0 || _v4.includes(_v0)),
      _v6 = !_v1?.includes("unrated") && !_v0?.contentViewingPrefs.allowContentRatingBypass,
      _v7 = _v5 || _v6;
    return _v1.set(_v2, _v7), _v7;
  }]);
}