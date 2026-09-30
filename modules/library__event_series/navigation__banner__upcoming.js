{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  let _v3 = {
    navigation: "navigation",
    banner: "banner",
    upcoming: "upcoming",
    "on-demand": "on_demand",
    agenda: "agenda",
    faq: "faq"
  };
  _v0.s(["deriveEventSeriesLandingPage", 0, _v0 => "on-demand" === _v0 ? "on_demand" : _v0, "deriveEventSeriesSection", 0, _v0 => _v3[_v0] ?? null, "useEventSeriesTracking", 0, () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_page_displayed", {
          event_series_page: _v0.page,
          event_series_id: _v0.eventSeriesId,
          referrer_page: _v0.referrerPage
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_landing_page_displayed", {
          event_series_id: _v0.eventSeriesId,
          event_series_landing_page: _v0.landingPage,
          viewer_auth_status: _v0.viewerAuthStatus
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_created", {
          event_series_id: _v0.eventSeriesId,
          has_description: _v0.hasDescription
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_event_added", {
          event_series_id: _v0.eventSeriesId,
          added_events_count: _v0.addedEventsCount
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_deleted", {
          event_series_id: _v0.eventSeriesId
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_event_removed", {
          event_series_id: _v0.eventSeriesId
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_create_button_clicked", {
          event_series_create_source: _v0.source
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_section_changed", {
          event_series_id: _v0.eventSeriesId,
          event_series_section_action: _v0.action,
          event_series_section: _v0.section,
          event_series_section_source: _v0.source
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_section_saved", {
          event_series_id: _v0.eventSeriesId,
          event_series_section: _v0.section,
          event_series_hidden_recordings_count: _v0.hiddenRecordingsCount ?? null,
          event_series_faq_items_count: _v0.faqItemsCount ?? null
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_setting_changed", {
          event_series_id: _v0.eventSeriesId,
          event_series_setting: _v0.setting,
          event_series_setting_value: _v0.value
        });
      }, [_v0]);
    return {
      trackEventSeriesPageDisplayed: _v1,
      trackEventSeriesLandingPageDisplayed: _v2,
      trackEventSeriesCreated: _v3,
      trackEventSeriesEventAdded: _v4,
      trackEventSeriesDeleted: _v5,
      trackEventSeriesEventRemoved: _v6,
      trackEventSeriesCreateButtonClicked: _v7,
      trackEventSeriesSectionChanged: _v8,
      trackEventSeriesSectionSaved: _v9,
      trackEventSeriesSettingChanged: _v10,
      trackEventSeriesShareActionClicked: (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_share_action_clicked", {
          event_series_id: _v0.eventSeriesId,
          event_series_share_action: _v0.action,
          event_series_share_source: _v0.source
        });
      }, [_v0]),
      trackEventSeriesLocalizationAction: (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_localization_action", {
          event_series_id: _v0.eventSeriesId,
          event_series_localization_action: _v0.action,
          event_series_locale: _v0.locale,
          event_series_translation_mode: _v0.translationMode ?? null,
          event_series_translation_incomplete: _v0.translationIncomplete ?? !1
        });
      }, [_v0])
    };
  }]);
}