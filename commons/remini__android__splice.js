{
  "use strict";

  let _v1 = [{
      appId: "remini",
      platforms: ["ios", "android"]
    }, {
      appId: "splice",
      platforms: ["ios", "android"]
    }],
    _v2 = _v0 => _v1.find(_v0 => _v0.appId === _v0)?.platforms ?? [],
    _v3 = (_v0, _v1) => `${_v0}-${_v1}`,
    _v4 = _v0 => {
      let _v1 = _v2(_v0);
      return 0 === _v1.length ? [_v0] : _v1.map(_v0 => _v3(_v0, _v0));
    };
  _v0.s(["getEntitlementId", 0, _v3, "getEntitlementIds", 0, _v4, "getProductPlatforms", 0, _v2, "parseEntitlementId", 0, _v0 => {
    for (let {
      appId: _v0,
      platforms: _v1
    } of _v1) {
      let _v0 = _v1.find(_v0 => _v3(_v0, _v0) === _v0);
      if (void 0 !== _v0) return {
        appId: _v0,
        platformId: _v0
      };
    }
    return {
      appId: _v0,
      platformId: void 0
    };
  }], 0);
  let _v5 = ["wetransfer", "evernote", "streamyard", "harvest", "remini", "komoot", "issuu", "splice", "mileiq"];
  _v5.flatMap(_v4), _v0.s(["BUNDLE_PRODUCT_IDS", 0, _v5, "BUNDLE_PRODUCT_ORDER", 0, {
    utility: ["wetransfer", "evernote", "streamyard", "harvest", "remini", "komoot", "issuu", "splice", "mileiq"],
    awareness: ["wetransfer", "aol", "airtable", "evernote", "streamyard", "harvest", "remini", "komoot", "issuu", "splice", "mileiq"]
  }, "BUNDLE_TYPES", 0, ["utility", "awareness"]], 0);
}