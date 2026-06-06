{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useMaximizeReviewAdoptionTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("review_hero_displayed", {}), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_entry_point_clicked", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_entry_point_video_confirmed", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_cta_dismissed", {
        dismissal_stage: _v0.dismissalStage,
        entry_point: _v0.entryPoint
      }), !0), [_v0]);
    return {
      trackReviewHeroDisplayed: _v1,
      trackReviewEntryPointClicked: _v2,
      trackReviewEntryPointVideoConfirmed: _v3,
      trackReviewCtaDismissed: _v4,
      trackNewReviewLinkDisplayed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("new_review_link_displayed", {
        surface: _v0.surface,
        new_review_link_type: _v0.newReviewLinkType
      }), !0), [_v0]),
      trackNewReviewLinkClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("new_review_link_clicked", {
        surface: _v0.surface,
        new_review_link_type: _v0.newReviewLinkType
      }), !0), [_v0])
    };
  }]);
}