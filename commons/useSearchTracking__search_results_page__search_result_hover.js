{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useSearchTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_results_page", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          results_page_number: _v0.resultsPageNumber,
          order_by: _v0.orderBy,
          results_qty: _v0.resultsQty,
          filters: _v0.filters,
          filter_values: _v0.filterValues,
          search_type: _v0.searchType
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_result_hover", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          default_search_type: _v0.defaultSearchType,
          results_page_number: _v0.resultsPageNumber,
          result_position: _v0.resultPosition,
          entity_id: _v0.entityId,
          entity_type: _v0.entityType,
          order_by: _v0.orderBy,
          results_qty: _v0.resultsQty,
          is_ai_request: _v0.isAiRequest
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_result_click", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          default_search_type: _v0.defaultSearchType,
          results_page_number: _v0.resultsPageNumber ?? null,
          result_position: _v0.resultPosition,
          entity_id: _v0.entityId,
          entity_type: _v0.entityType,
          order_by: _v0.orderBy,
          results_qty: _v0.resultsQty,
          is_ai_request: _v0.isAiRequest
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_watch_later", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          default_search_type: _v0.defaultSearchType,
          results_page_number: _v0.resultsPageNumber,
          result_position: _v0.resultPosition,
          entity_id: _v0.entityId,
          entity_type: _v0.entityType,
          order_by: _v0.orderBy,
          results_qty: _v0.resultsQty
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_filter", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          default_search_type: _v0.defaultSearchType,
          results_page_number: _v0.resultsPageNumber,
          previous_value: _v0.previousValue,
          value: _v0.value,
          value_name: _v0.valueName,
          order_by: _v0.orderBy,
          results_qty: _v0.resultsQty,
          is_ai_request: _v0.isAiRequest
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_sorting", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          default_search_type: _v0.defaultSearchType,
          results_page_number: _v0.resultsPageNumber,
          previous_value: _v0.previousValue,
          value: _v0.value,
          value_name: _v0.valueName,
          order_by: _v0.orderBy,
          results_qty: _v0.resultsQty,
          is_ai_request: _v0.isAiRequest
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("search_mode_switch", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          default_search_type: _v0.defaultSearchType,
          results_qty: _v0.resultsQty,
          copy: _v0.copy
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("notification_view", {
          notification_name: _v0.notificationName,
          notification_copy: _v0.notificationCopy
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("notification_action", {
          notification_name: _v0.notificationName,
          notification_copy: _v0.notificationCopy
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("view_generate_ai_search", {});
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("view_suggested_ai_search", {
          video_id: _v0.videoId,
          error_value: _v0.errorValue
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("select_suggested_ai_search", {
          entity_type: _v0.entityType,
          video_id: _v0.videoId
        });
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("ai_search_widget_actions", {
          copy: _v0.copy,
          video_id: _v0.videoId
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("thumbs_rate", {
          rated_feature: _v0.ratedFeature,
          is_positive: _v0.isPositive,
          video_id: _v0.videoId ?? null,
          generation_id: _v0.generationId ?? null
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("moments_timeline_clicks", {
          search_id: _v0.searchId,
          results_page_number: _v0.resultsPageNumber,
          result_position: _v0.resultPosition,
          entity_id: _v0.entityId
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("moments_panel_clicks_interactions", {
          search_id: _v0.searchId,
          results_page_number: _v0.resultsPageNumber,
          entity_id: _v0.entityId,
          value_name: _v0.valueName
        });
      }, [_v0]),
      _v17 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("moments_results_impressions", {
          search_id: _v0.searchId,
          results_page_number: _v0.resultsPageNumber
        });
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("moments_timeline_impressions", {
          search_id: _v0.searchId,
          results_page_number: _v0.resultsPageNumber
        });
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("moments_panel_impressions", {
          search_id: _v0.searchId,
          results_page_number: _v0.resultsPageNumber
        });
      }, [_v0]);
    return {
      trackSearchPageDisplayed: (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("search_page_displayed", {
        search_query: _v0.searchQuery,
        search_active_tab: _v0.searchActiveTab,
        search_result_type: _v0.searchResultType,
        search_page_viewer_auth_status: _v0.searchPageViewerAuthStatus
      }), !0), [_v0]),
      trackSearchResultsPage: _v1,
      trackSearchResultHover: _v2,
      trackSearchResultClick: _v3,
      trackSearchWatchLater: _v4,
      trackSearchFilter: _v5,
      trackSearchSorting: _v6,
      trackSearchModeSwitch: _v7,
      trackNotificationView: _v8,
      trackNotificationAction: _v9,
      trackViewGenerateAiSearch: _v10,
      trackViewSuggestedAiSearch: _v11,
      trackSelectSuggestedAiSearch: _v12,
      trackAiSearchWidgetActions: _v13,
      trackThumbsRate: _v14,
      trackMomentsTimelineClick: _v15,
      trackMomentsPanelClick: _v16,
      trackMomentsResultsImpressions: _v17,
      trackMomentsTimelineImpressions: _v18,
      trackMomentsPanelImpressions: _v19
    };
  }], 0);
  var _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["ThumbDownFilled", 0, _v0 => (0, _v3.jsx)(_v4.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v3.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M16.668 14.8h1.75a2.6 2.6 0 0 0 2.6-2.6V6.6a2.6 2.6 0 0 0-2.6-2.6H6.728A2.6 2.6 0 0 0 4.133 6.21v.001l-1.105 7.2a2.6 2.6 0 0 0 2.594 2.99h3.795v2.2a3.4 3.4 0 0 0 3.4 3.4 1 1 0 0 0 .914-.594l2.936-6.606Zm1.75-2a.6.6 0 0 0 .6-.6V6.6a.6.6 0 0 0-.6-.6h-1.4v6.8h1.4Z",
      fill: "currentColor"
    })
  })], 0);
}