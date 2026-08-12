{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useShowcaseManageTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcases_list_page_displayed", {
        showcases_list_count: _v0.showcasesListCount
      }), !0), [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_created", {
        showcase_id: _v0.showcaseId
      }), !0), [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_page_displayed", {
        showcase_id: _v0.showcaseId,
        showcase_manage_tab: _v0.showcaseManageTab
      }), !0), [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_tab_switched", {
        showcase_id: _v0.showcaseId,
        showcase_manage_new_tab: _v0.showcaseManageNewTab
      }), !0), [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_overflow_action_clicked", {
        showcase_id: _v0.showcaseId,
        showcase_manage_overflow_action: _v0.showcaseManageOverflowAction
      }), !0), [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_setting_changed", {
        showcase_id: _v0.showcaseId,
        showcase_manage_setting: _v0.showcaseManageSetting
      }), !0), [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_layout_navigation_toggled", {
        showcase_id: _v0.showcaseId,
        showcase_manage_layout_navigation_feature: _v0.showcaseManageLayoutNavigationFeature
      }), !0), [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_layout_featured_changed", {
        showcase_id: _v0.showcaseId,
        showcase_manage_layout_featured_setting: _v0.showcaseManageLayoutFeaturedSetting
      }), !0), [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_video_grid_searched", {
        showcase_id: _v0.showcaseId
      }), !0), [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_video_grid_sorted", {
        showcase_id: _v0.showcaseId
      }), !0), [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_video_grid_reordered", {
        showcase_id: _v0.showcaseId
      }), !0), [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_videos_add_videos_clicked", {
        showcase_id: _v0.showcaseId
      }), !0), [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_videos_videos_added", {
        showcase_id: _v0.showcaseId,
        added_videos_count: _v0.addedVideosCount
      }), !0), [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_video_grid_create_event_clicked", {
        showcase_id: _v0.showcaseId
      }), !0), [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_video_grid_setting_changed", {
        showcase_id: _v0.showcaseId,
        showcase_manage_video_grid_card_type: _v0.showcaseManageVideoGridCardType ?? null,
        showcase_manage_video_grid_size: _v0.showcaseManageVideoGridSize ?? null,
        showcase_manage_video_grid_toggle_name: _v0.showcaseManageVideoGridToggleName ?? null,
        showcase_manage_new_status: _v0.showcaseManageNewStatus ?? null
      }), !0), [_v0]);
    return {
      trackShowcasesListPageDisplayed: _v1,
      trackShowcaseCreated: _v2,
      trackShowcaseManagePageDisplayed: _v3,
      trackShowcaseManageTabSwitched: _v4,
      trackShowcaseManageOverflowActionClicked: _v5,
      trackShowcaseManageSettingChanged: _v6,
      trackShowcaseManageLayoutNavigationToggled: _v7,
      trackShowcaseManageLayoutFeaturedChanged: _v8,
      trackShowcaseManageVideoGridSearched: _v9,
      trackShowcaseManageVideoGridSorted: _v10,
      trackShowcaseManageVideoGridReordered: _v11,
      trackShowcaseManageVideosAddVideosClicked: _v12,
      trackShowcaseManageVideosVideosAdded: _v13,
      trackShowcaseManageVideoGridCreateEventClicked: _v14,
      trackShowcaseManageVideoGridSettingChanged: _v15,
      trackShowcaseManageAutoplayToggled: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_autoplay_toggled", {
        showcase_id: _v0.showcaseId,
        showcase_manage_autoplay_status: _v0.showcaseManageAutoplayStatus
      }), !0), [_v0]),
      trackShowcaseManagePlaybackChanged: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("showcase_manage_playback_changed", {
        showcase_id: _v0.showcaseId,
        showcase_manage_playback_section: _v0.showcaseManagePlaybackSection,
        showcase_manage_playback_setting: _v0.showcaseManagePlaybackSetting,
        showcase_manage_new_status: _v0.showcaseManageNewStatus
      }), !0), [_v0])
    };
  }]);
}