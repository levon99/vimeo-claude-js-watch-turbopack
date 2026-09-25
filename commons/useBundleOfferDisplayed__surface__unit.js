{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["useBundleOfferDisplayed", 0, ({
    surface: _v0,
    unit: _v1,
    bundleType: _v2,
    bundlePrice: _v3,
    enabled: _v4 = !0
  }) => {
    let {
        trackBundleOfferDisplayed: _v5
      } = (0, _v2.useBundleTracking)(),
      _v6 = (0, _v3.useBundleExperimentKey)(),
      _v7 = (0, _v1.useRef)(!1),
      _v8 = (0, _v1.useEffectEvent)(() => void 0 !== _v0 && null !== _v2 && (_v5({
        surface: _v0,
        unit: _v1,
        bundleType: _v2,
        bundlePrice: _v3,
        experimentKey: _v6
      }), !0));
    (0, _v1.useEffect)(() => {
      _v4 && !_v7.current && _v8() && (_v7.current = !0);
    }, [_v4, _v0, _v2]);
  }]);
}