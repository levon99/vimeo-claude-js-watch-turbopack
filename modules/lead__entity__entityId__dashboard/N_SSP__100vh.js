{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  (0, _v5.withPageSetup)(({
    params: _v0
  }) => {
    let _v1 = _v0?.entity,
      _v2 = _v0?.entityId;
    return _v1 && _v2 ? {
      props: {
        hasThemeSupport: !0,
        entity: _v1,
        entityId: _v2
      }
    } : {
      notFound: !0
    };
  }, {
    staffOnly: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    playerAssetUrls: _v0,
    entity: _v1,
    entityId: _v2
  }) => {
    let _v3 = (0, _v2.useContext)(_v7.ViewerContext),
      _v4 = _v3?.user?.id;
    return _v3 && _v0 ? (0, _v1.jsx)(_v3.Box, {
      py: (0, _v4.rem)(40),
      pt: (0, _v4.rem)(60),
      h: "100vh",
      w: "100%",
      children: (0, _v1.jsx)(_v6.LeadCaptureDashboard, {
        entityType: _v1,
        entityId: _v2,
        entityOwnerId: _v4
      })
    }) : null;
  }], 0);
}