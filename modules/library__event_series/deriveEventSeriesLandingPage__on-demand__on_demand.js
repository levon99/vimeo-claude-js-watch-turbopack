{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["deriveEventSeriesLandingPage", 0, _v0 => "on-demand" === _v0 ? "on_demand" : _v0, "useEventSeriesTracking", 0, () => {
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
      }, [_v0]);
    return {
      trackEventSeriesPageDisplayed: _v1,
      trackEventSeriesLandingPageDisplayed: _v2,
      trackEventSeriesCreated: _v3,
      trackEventSeriesEventAdded: _v4,
      trackEventSeriesDeleted: (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_deleted", {
          event_series_id: _v0.eventSeriesId
        });
      }, [_v0]),
      trackEventSeriesEventRemoved: (0, _v1.useCallback)(_v0 => {
        _v0?.track("event_series_event_removed", {
          event_series_id: _v0.eventSeriesId
        });
      }, [_v0])
    };
  }]);
}