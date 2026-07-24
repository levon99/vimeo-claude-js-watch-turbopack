{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = {
    unlisted: "unlisted_privacy",
    disable: "disable_privacy"
  };
  _v0.s(["useColdPrivacyVideoPaywall", 0, () => {
    let _v0 = (0, _v2.usePageName)(),
      {
        open: _v1,
        close: _v2
      } = (0, _v3.useUpsellModal)();
    return (0, _v1.useCallback)(({
      location: _v0,
      originalView: _v1
    }) => {
      let _v2 = (_v1 && _v4[_v1]) ?? "cold_privacy";
      _v1({
        tracking: {
          params: {
            feature: "privacy",
            location: _v0,
            page: _v0,
            upsell_name: "cold_privacy_video"
          },
          paywallTracking: {
            paywallTrigger: `cold_privacy_video_${_v2}_upgrade`,
            paywallLocation: _v0,
            paywallType: "popup",
            paywallFeature: "privacy"
          }
        },
        onClose: _v2
      });
    }, [_v2, _v1, _v0]);
  }]);
}