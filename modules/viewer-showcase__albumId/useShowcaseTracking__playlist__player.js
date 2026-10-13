{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useShowcaseTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let _v1 = "playlist" === _v0.showcasePageLayout ? "player" : _v0.showcasePageLayout;
        return _v0.track("showcase_page_displayed", {
          showcase_id: _v0.showcaseId,
          showcase_owner_id: _v0.showcaseOwnerId,
          showcase_video_count: _v0.showcaseVideoCount,
          showcase_page_layout: _v1,
          showcase_page_privacy: _v0.showcasePagePrivacy,
          showcase_page_viewer_auth_status: _v0.showcasePageViewerAuthStatus,
          referrer_page: _v0.referrerPage
        }), !0;
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("showcase_start_watching_clicked", {
          showcase_id: _v0.showcaseId
        });
      }, [_v0]);
    return {
      trackShowcasePageDisplayed: _v1,
      trackShowcaseStartWatchingClicked: _v2,
      trackShowcaseVideoClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("showcase_video_clicked", {
          showcase_id: _v0.showcaseId,
          clip_id: _v0.clipId,
          showcase_video_position: _v0.showcaseVideoPosition,
          showcase_page_number: _v0.showcasePageNumber
        });
      }, [_v0]),
      trackShowcaseLinkCopied: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("showcase_link_copied", {
          showcase_id: _v0.showcaseId
        });
      }, [_v0])
    };
  }]);
}