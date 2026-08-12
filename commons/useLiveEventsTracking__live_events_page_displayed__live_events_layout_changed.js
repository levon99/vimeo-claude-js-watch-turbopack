{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["useLiveEventsTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_page_displayed", {
          referrer_page: _v0.referrerPage
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_layout_changed", {
          live_events_new_layout: _v0.newLayout
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_calendar_tab_selected", {
          live_events_calendar_tab: _v0.tab
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_calendar_navigation_button_clicked", {
          live_events_calendar_navigation_button: _v0.button
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_upcoming_carousel_navigation_button_clicked", {
          live_events_upcoming_carousel_navigation_button: _v0.button
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_search_button_clicked", {
          live_events_layout: _v0.layout
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_search_query_committed", {
          live_events_layout: _v0.layout,
          live_events_search_query: _v0.query
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_sort_changed", {
          live_events_layout: _v0.layout,
          live_events_sort_type: _v0.sortType,
          live_events_sort_direction: _v0.sortDirection
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_load_more_clicked", {
          live_events_layout: _v0.layout
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_select_all_button_clicked", {
          live_events_layout: _v0.layout
        });
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_bulk_action_clicked", {
          live_events_layout: _v0.layout,
          live_events_bulk_action: _v0.action,
          live_events_bulk_selected_count: _v0.selectedCount
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        let _v1 = {
          live_events_event_menu_opened_origin: _v0.origin,
          live_events_event_menu_opened_type: _v0.type
        };
        "calendar" === _v0.origin && (_v1.live_events_event_menu_opened_is_in_conflict = _v0.isInConflict ?? !1), _v0?.track("live_events_event_menu_opened", _v1);
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_event_menu_action_button_clicked", {
          live_events_event_action_origin: _v0.origin,
          live_events_event_type: _v0.type,
          live_events_event_action: _v0.action
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_event_navigate_to_page_clicked", {
          live_events_event_action_origin: _v0.origin,
          live_events_event_type: _v0.type
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_event_moved", {
          live_events_event_type: _v0.type,
          live_events_event_destination: _v0.destination
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_event_deleted", {
          live_events_event_type: _v0.type
        });
      }, [_v0]),
      _v17 = (0, _v1.useCallback)(() => {
        _v0?.track("live_events_new_event_button_clicked", {});
      }, [_v0]),
      _v18 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_events_event_creation_format_selected", {
          live_events_event_creation_format: _v0.format
        });
      }, [_v0]),
      _v19 = (0, _v1.useCallback)(_v0 => {
        let _v1 = {
          live_events_event_creation_setup: _v0.setup,
          live_events_event_creation_has_schedule: _v0.has_schedule,
          live_events_event_creation_is_recurring: _v0.is_recurring,
          live_events_event_creation_privacy: _v0.privacy,
          live_events_event_creation_has_description: _v0.has_description
        };
        if (void 0 !== _v0.type && (_v1.live_events_event_creation_type = _v0.type), void 0 !== _v0.event_settings) {
          let _v0 = _v0.event_settings,
            _v1 = {
              live_events_broadcast_source: _v0.broadcast_source,
              live_events_latency: _v0.latency,
              live_events_registration_enabled: _v0.registration_enabled,
              live_events_chat_enabled: _v0.chat_enabled,
              live_events_captions_enabled: _v0.captions_enabled
            };
          void 0 !== _v0.reuse_destinations_enabled && (_v1.live_events_reuse_destinations_enabled = _v0.reuse_destinations_enabled), _v1.live_events_event_creation_event_settings = _v1;
        }
        _v0?.track("live_events_event_creation_create_button_clicked", _v1);
      }, [_v0]);
    return {
      trackLiveTrialBlocked: (0, _v1.useCallback)(_v0 => {
        _v0?.track("live_trial_blocked", {
          live_trial_block_point: _v0.blockPoint
        });
      }, [_v0]),
      trackLiveEventsPageDisplayed: _v1,
      trackLiveEventsLayoutChanged: _v2,
      trackLiveEventsCalendarTabSelected: _v3,
      trackLiveEventsCalendarNavigationButtonClicked: _v4,
      trackLiveEventsUpcomingCarouselNavigationButtonClicked: _v5,
      trackLiveEventsSearchButtonClicked: _v6,
      trackLiveEventsSearchQueryCommitted: _v7,
      trackLiveEventsSortChanged: _v8,
      trackLiveEventsLoadMoreClicked: _v9,
      trackLiveEventsSelectAllButtonClicked: _v10,
      trackLiveEventsBulkActionClicked: _v11,
      trackLiveEventsEventMenuOpened: _v12,
      trackLiveEventsEventMenuActionButtonClicked: _v13,
      trackLiveEventsEventNavigateToPageClicked: _v14,
      trackLiveEventsEventMoved: _v15,
      trackLiveEventsEventDeleted: _v16,
      trackLiveEventNewEventButtonClicked: _v17,
      trackLiveEventsEventCreationFormatSelected: _v18,
      trackLiveEventsEventCreationCreateButtonClicked: _v19
    };
  }]);
}