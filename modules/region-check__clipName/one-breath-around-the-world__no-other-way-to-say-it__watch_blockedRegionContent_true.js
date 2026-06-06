{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    yearbook: 0,
    "one-breath-around-the-world": 0,
    enough: 0,
    "no-other-way-to-say-it": 0,
    fauve: 0
  };
  (0, _v2.withPageSetup)(async _v0 => {
    let _v1 = _v0.params?.clipName;
    if ("string" != typeof _v1) return {
      notFound: !0
    };
    let _v2 = _v3[_v1];
    return _v2 ? {
      redirect: {
        destination: (await (0, _v1.isFromCopyrightRestrictedRegion)(_v0)) ? "/watch?blockedRegionContent=true" : `/${_v2}`,
        permanent: !1
      }
    } : {
      notFound: !0
    };
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, () => null], 0);
}