{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useVideoPrivacyBadgeTracking", 0, () => {
    let _v0 = (0, _v2.usePico)();
    return {
      trackVideoPrivacyBadgeClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_privacy_badge_clicked", {
          video_id: _v0.videoId,
          badge_variant: _v0.badgeVariant,
          surface: _v0.surface
        });
      }, [_v0])
    };
  }]);
}