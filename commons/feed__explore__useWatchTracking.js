{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    my_feed: "feed",
    watch: "explore"
  };
  _v0.s(["useWatchTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("logged_out_banner_displayed", {
        page: _v0.page
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null === _v0 ? Promise.resolve() : _v0.track("logged_out_banner_cta_clicked", {
        page: _v0.page
      }), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_page_displayed", {
        referrer_page: _v0.referrerPage,
        watch_page_viewer_auth_status: _v0.watchPageViewerAuthStatus
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_hero_button_clicked", {
        clip_id: _v0.clipId
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_channel_card_clicked", {
        watch_channel_name: _v0.watchChannelName,
        watch_channel_card_action: _v0.watchChannelCardAction
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("sidebar_nav_clicked", {
        sidebar_nav_destination: _v3[_v0.sidebarNavDestination] ?? _v0.sidebarNavDestination,
        sidebar_nav_context: _v0.sidebarNavContext,
        ...(_v0.homeSidebarDiscoveryVariant && {
          home_sidebar_discovery_variant: _v0.homeSidebarDiscoveryVariant
        })
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_video_thumbnail_clicked", {
        clip_id: _v0.clipId,
        watch_section: _v0.watchSection
      }), !0), [_v0]);
    return {
      trackLoggedOutBannerDisplayed: _v1,
      trackLoggedOutBannerCtaClicked: _v2,
      trackWatchPageDisplayed: _v3,
      trackWatchHeroButtonClicked: _v4,
      trackWatchChannelCardClicked: _v5,
      trackSidebarNavClicked: _v6,
      trackWatchVideoThumbnailClicked: _v7,
      trackWatchSectionHeaderClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_header_clicked", {
        watch_section: _v0.watchSection
      }), !0), [_v0]),
      trackWatchSectionFollowClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_follow_clicked", {
        watch_section: _v0.watchSection,
        watch_channel_name: _v0.watchChannelName,
        watch_section_follow_effect: _v0.watchSectionFollowEffect
      }), !0), [_v0])
    };
  }]);
}