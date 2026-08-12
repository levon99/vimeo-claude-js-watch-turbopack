{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  (0, _v3.withPageSetup)(({
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
    staffOnly: !0,
    inlineViewer: !0,
    inlinePlayerAssets: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, ({
    playerAssetUrls: _v0,
    entity: _v1,
    entityId: _v2
  }) => (0, _v2.useContext)(_v5.ViewerContext) && _v0 ? (0, _v1.jsx)(_v4.LeadCaptureAdmin, {
    type: _v1,
    entityId: _v2
  }) : null], 0);
}