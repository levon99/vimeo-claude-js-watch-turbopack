{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = _v0 => {
      let _v1 = function () {
        try {
          let _v0 = (0, _v3.deriveCanonicalPage)(new URL(window.location.href));
          if ("watchpage" === _v0) return "watch";
          if ("staff_picks" === _v0) return "staff_picks";
        } catch {}
        return null;
      }();
      return null === _v1 ? _v0 : {
        ..._v0,
        watch_surface: _v1
      };
    },
    _v5 = {
      my_feed: "feed",
      watch: "explore"
    };
  _v0.s(["getLandingUrl", 0, function () {
    return window.location.pathname + window.location.search + window.location.hash;
  }, "useWatchTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("logged_out_banner_displayed", {
        page: _v0.page
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null === _v0 ? Promise.resolve() : _v0.track("logged_out_banner_cta_clicked", {
        page: _v0.page
      }), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_page_displayed", {
        referrer_page: _v0.referrerPage,
        watch_page_viewer_auth_status: _v0.watchPageViewerAuthStatus,
        watch_page_arm: _v0.watchPageArm ?? "control",
        ...(void 0 !== _v0.watchPageUrl ? {
          url: _v0.watchPageUrl
        } : {})
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_hero_button_clicked", {
        clip_id: _v0.clipId
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_channel_card_clicked", _v4({
        watch_channel_name: _v0.watchChannelName,
        watch_channel_id: _v0.watchChannelId,
        watch_channel_card_action: _v0.watchChannelCardAction
      })), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("sidebar_nav_clicked", {
        sidebar_nav_destination: _v5[_v0.sidebarNavDestination] ?? _v0.sidebarNavDestination,
        sidebar_nav_context: _v0.sidebarNavContext,
        version: _v0.version ?? "1"
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("sidebar_toggled", {
        sidebar_action: _v0.sidebarAction,
        page: _v0.page,
        version: _v0.version,
        is_mobile: _v0.isMobile
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_video_thumbnail_clicked", _v4({
        clip_id: _v0.clipId,
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_video_position: _v0.watchVideoPosition,
        watch_page_arm: _v0.watchPageArm ?? "control"
      })), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_header_clicked", _v4({
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId
      })), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_follow_clicked", _v4({
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_channel_name: _v0.watchChannelName,
        watch_channel_id: _v0.watchChannelId,
        watch_section_follow_effect: _v0.watchSectionFollowEffect,
        watch_page_arm: _v0.watchPageArm ?? "control"
      })), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_impression", _v4({
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_section_position: _v0.watchSectionPosition
      })), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_video_thumbnail_impression", _v4({
        clip_id: _v0.clipId,
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_video_position: _v0.watchVideoPosition,
        watch_page_arm: _v0.watchPageArm ?? "control"
      })), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_hero_slide_impression", {
        clip_id: _v0.clipId,
        watch_hero_slide_index: _v0.watchHeroSlideIndex,
        watch_hero_slide_method: _v0.watchHeroSlideMethod
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_hero_carousel_navigated", {
        watch_hero_direction: _v0.watchHeroDirection,
        watch_hero_method: _v0.watchHeroMethod,
        watch_hero_slide_index: _v0.watchHeroSlideIndex
      }), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_carousel_navigated", _v4({
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_section_direction: _v0.watchSectionDirection,
        watch_section_page: _v0.watchSectionPage,
        watch_page_arm: _v0.watchPageArm ?? "control"
      })), !0), [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_hero_clicked", {
        clip_id: _v0.clipId,
        watch_hero_slide_index: _v0.watchHeroSlideIndex,
        watch_hero_element: _v0.watchHeroElement
      }), !0), [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_section_follow_state", _v4({
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_section_followable: _v0.watchSectionFollowable,
        watch_section_is_following: _v0.watchSectionIsFollowing
      })), !0), [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => {
        if (null === _v0) return !1;
        let {
          sendImmediately: _v1,
          ..._v2
        } = _v0;
        return _v0.track("watch_page_exited", {
          watch_time_on_page_ms: _v2.watchTimeOnPageMs,
          watch_max_scroll_depth_percent: _v2.watchMaxScrollDepthPercent,
          watch_sections_reached: _v2.watchSectionsReached,
          watch_page_arm: _v2.watchPageArm ?? "control"
        }, void 0, !0 === _v1 ? {
          delivery: "immediate"
        } : void 0), !0;
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_page_lineup_rendered", {
        watch_lineup_sections: _v0.watchLineupSections,
        watch_lineup_clip_ids_by_section: _v0.watchLineupClipIdsBySection,
        watch_lineup_ranking_source: _v0.watchLineupRankingSource
      }), !0), [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_search_submitted", {
        watch_search_query: _v0.watchSearchQuery,
        watch_search_selection_type: _v0.watchSearchSelectionType,
        watch_search_time_to_find_ms: _v0.watchSearchTimeToFindMs
      }), !0), [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_category_tabs_rendered", {
        watch_category_count: _v0.watchCategoryCount,
        watch_category_slugs: _v0.watchCategorySlugs,
        watch_page_arm: _v0.watchPageArm
      }), !0), [_v0]);
    return {
      trackLoggedOutBannerDisplayed: _v1,
      trackLoggedOutBannerCtaClicked: _v2,
      trackWatchPageDisplayed: _v3,
      trackWatchHeroButtonClicked: _v4,
      trackWatchChannelCardClicked: _v5,
      trackSidebarNavClicked: _v6,
      trackSidebarToggled: _v7,
      trackWatchVideoThumbnailClicked: _v8,
      trackWatchSectionHeaderClicked: _v9,
      trackWatchSectionFollowClicked: _v10,
      trackWatchSectionImpression: _v11,
      trackWatchVideoThumbnailImpression: _v12,
      trackWatchHeroSlideImpression: _v13,
      trackWatchHeroCarouselNavigated: _v14,
      trackWatchSectionCarouselNavigated: _v15,
      trackWatchHeroClicked: _v16,
      trackWatchSectionFollowState: _v17,
      trackWatchPageExited: _v18,
      trackWatchPageLineupRendered: _v19,
      trackWatchSearchSubmitted: _v20,
      trackCategoryTabsRendered: _v21,
      trackWatchCategoryTabClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_category_tab_clicked", {
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_category_tab_position: _v0.watchCategoryTabPosition,
        watch_page_arm: _v0.watchPageArm
      }), !0), [_v0]),
      trackWatchFeedActionClicked: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("watch_feed_action_clicked", {
        clip_id: _v0.clipId,
        watch_feed_action: _v0.watchFeedAction,
        watch_section: _v0.watchSection,
        watch_section_id: _v0.watchSectionId,
        watch_video_position: _v0.watchVideoPosition,
        watch_page_arm: _v0.watchPageArm
      }), !0), [_v0])
    };
  }]);
}