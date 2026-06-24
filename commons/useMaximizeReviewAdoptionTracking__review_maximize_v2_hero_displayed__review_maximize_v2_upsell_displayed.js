{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useMaximizeReviewAdoptionTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(() => null !== _v0 && (_v0.track("review_maximize_v2_hero_displayed", {}), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_upsell_displayed", {
        entry_point: _v0.entryPoint,
        review_video_id: _v0.reviewVideoId ?? null
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_entry_point_clicked", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_select_video_modal_displayed", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_entry_point_video_confirmed", {
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_cta_dismissed", {
        dismissal_stage: _v0.dismissalStage,
        entry_point: _v0.entryPoint
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_new_review_link_displayed", {
        surface: _v0.surface,
        new_review_link_type: _v0.newReviewLinkType
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_maximize_v2_new_review_link_clicked", {
        surface: _v0.surface,
        new_review_link_type: _v0.newReviewLinkType
      }), !0), [_v0]);
    return {
      trackReviewHeroDisplayed: _v1,
      trackReviewUpsellDisplayed: _v2,
      trackReviewEntryPointClicked: _v3,
      trackReviewSelectVideoModalDisplayed: _v4,
      trackReviewEntryPointVideoConfirmed: _v5,
      trackReviewCtaDismissed: _v6,
      trackNewReviewLinkDisplayed: _v7,
      trackNewReviewLinkClicked: _v8,
      trackReviewLinkPromptDisplayed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_link_prompt_displayed", {
        surface: _v0.surface,
        clip_id: _v0.clipId
      }), !0), [_v0]),
      trackReviewLinkPromptActionClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("review_link_prompt_action_clicked", {
        surface: _v0.surface,
        review_link_prompt_action: _v0.reviewLinkPromptAction,
        clip_id: _v0.clipId
      }), !0), [_v0])
    };
  }]);
}