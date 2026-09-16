{
  "use strict";

  let _v1 = ["wetransfer", "evernote", "harvest", "splice", "mileiq", "issuu", "komoot", "aol", "remini", "meetup", "streamyard", "airtable", "tractive"],
    _v2 = {
      utility: ["wetransfer", "airtable", "evernote", "harvest", "mileiq", "splice", "issuu", "komoot", "aol", "remini", "meetup", "streamyard", "tractive"],
      awareness: ["wetransfer", "aol", "airtable", "komoot", "evernote", "tractive", "harvest", "mileiq", "splice", "issuu", "remini", "meetup", "streamyard"]
    };
  _v0.s(["BUNDLE_PRODUCT_IDS", 0, _v1, "BUNDLE_PRODUCT_ORDER", 0, _v2, "BUNDLE_TYPES", 0, ["utility", "awareness"]], 0);
  let _v3 = _v0 => {
    let _v1 = new Set(_v1);
    return _v2[_v0].filter(_v0 => _v1.has(_v0));
  };
  _v0.s(["getBundleProductOrder", 0, _v3, "getClusterTiles", 0, _v0 => _v3(_v0).slice(0, 4).map(_v0 => ({
    productId: _v0
  })), "getOtherProductsCount", 0, _v0 => _v3(_v0).length - 4], 0);
}