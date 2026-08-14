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
      }, [_v0]),
      _v20 = (0, _v1.useCallback)(_v0 => null !== _v0 && (_v0.track("search_page_displayed", {
        search_query: _v0.searchQuery,
        search_active_tab: _v0.searchActiveTab,
        search_result_type: _v0.searchResultType,
        search_page_viewer_auth_status: _v0.searchPageViewerAuthStatus
      }), !0), [_v0]),
      _v21 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_submitted", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          search_text: _v0.searchText,
          max_results: _v0.maxResults
        });
      }, [_v0]),
      _v22 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_page_viewed", {
          search_id: _v0.searchId,
          search_text: _v0.searchText,
          library_owner_id: _v0.libraryOwnerId,
          content_type: _v0.contentType,
          overview_state: _v0.overviewState
        });
      }, [_v0]),
      _v23 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_response", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          search_text: _v0.searchText,
          status: _v0.status,
          results_qty: _v0.resultsQty,
          other_results_qty: _v0.otherResultsQty,
          strategies_used: _v0.strategiesUsed,
          partial: _v0.partial,
          cited_qty: _v0.citedQty,
          latency_ms: _v0.latencyMs,
          error_message: _v0.errorMessage,
          summary: _v0.summary
        });
      }, [_v0]),
      _v24 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_result_click", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          entity_type: "clip",
          entity_id: _v0.clipId,
          clicked_item: _v0.clickedItem,
          clicked_item_id: _v0.clickedItemId,
          result_position: _v0.resultPosition,
          start_time_seconds: _v0.startTimeSeconds
        });
      }, [_v0]),
      _v25 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_interaction", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          value_name: _v0.valueName,
          ...(_v0.interactionType ? {
            interaction_type: _v0.interactionType
          } : {}),
          entity_id: _v0.entityId
        });
      }, [_v0]),
      _v26 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_rated", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          is_positive: _v0.isPositive
        });
      }, [_v0]),
      _v27 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_feedback", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          is_positive: _v0.isPositive,
          comment: _v0.comment
        });
      }, [_v0]);
    return {
      trackSearchPageDisplayed: _v20,
      trackAgenticSearchPageViewed: _v22,
      trackAgenticSearchSubmitted: _v21,
      trackAgenticSearchResponse: _v23,
      trackAgenticSearchResultClick: _v24,
      trackAgenticSearchInteraction: _v25,
      trackAgenticSearchRated: _v26,
      trackAgenticSearchFeedback: _v27,
      trackAgenticSearchFeedbackDismissed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_feedback_dismissed", {
          search_id: _v0.searchId,
          search_request_id: _v0.searchRequestId,
          is_positive: _v0.isPositive
        });
      }, [_v0]),
      trackAgenticSearchEntryClicked: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("agentic_search_entry_clicked", {
          location: _v0.location
        });
      }, [_v0]),
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
  }]);
}