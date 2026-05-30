{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  _v0.s(["newActionCtx", 0, function (_v0) {
    return (0, _v1.buildActionBpContext)({
      action_type: _v0,
      feature: null
    });
  }, "newLiveCtx", 0, function (_v0) {
    let {
      BIG_PICTURE_LIVE_SCHEMA_BASE: {
        liveStatus: _v1,
        liveEventId: _v2,
        liveEventType: _v3,
        leadSource: _v4
      },
      DETAILS: {
        SESSION_ID: _v5,
        SESSION_TYPE: _v6
      },
      BIG_PICTURE_EVENT_SETTINGS_SCHEMA_BASE: {
        eventPrivacy: _v7,
        productionMethod: _v8
      }
    } = _v11.liveTrackingConfig;
    return (0, _v2.buildLiveBpContext)({
      live_production_method: _v8 || null,
      audience_type: _v6 ? _v9.AudienceType[_v6] : null,
      event_privacy: _v7 ? _v9.EventPrivacy[_v7] : null,
      recurring_live_event_id: _v5?.valueOf()?.toString(),
      encoder_type: _v8,
      lead_source: _v4,
      live_status: _v1 || "unknown",
      live_event_type: _v3 || "live_event",
      live_event_id: _v2?.toString() ?? "",
      ..._v0
    });
  }, "newProductAnalyticsCtx", 0, function (_v0) {
    return (0, _v3.buildProductAnalyticsBpContext)(_v0);
  }, "newTeamCtx", 0, function () {
    let {
      teamUser: _v0,
      teamOwnerId: _v1,
      teamAccountType: _v2
    } = _v11.liveTrackingConfig.BIG_PICTURE_TEAM_CONTEXT_BASE;
    return _v0 ? (0, _v4.buildTeamBpContextFromTeamUser)(_v0) : (0, _v4.buildTeamBpContext)({
      is_team_member: !1,
      team_role: "owner",
      team_owner_id: _v1?.valueOf() ?? null,
      team_subscription_type: _v2?.valueOf() ?? null
    });
  }, "newThirdPartyIntegrationCtx", 0, function () {
    return (0, _v7.buildThirdPartyIntegrationBpContext)({
      integration_id: null,
      integration_name: null,
      is_partner: null
    });
  }, "newVenueCtx", 0, function () {
    let {
      DETAILS: {
        SESSION_ID: _v0
      },
      BIG_PICTURE_VENUE_SCHEMA_BASE: {
        venueId: _v1,
        ownerId: _v2,
        spaceId: _v3,
        registrantId: _v4,
        sessionId: _v5,
        isSpacePrivate: _v6,
        isSpaceBreakout: _v7,
        recordingType: _v8
      }
    } = _v11.liveTrackingConfig;
    return (0, _v8.buildVenueBpContext)({
      venue_id: _v1,
      owner_id: _v2,
      space_id: _v3,
      registrant_id: _v4,
      session_id: _v5 || _v0?.valueOf()?.toString(),
      is_space_private: _v6,
      is_space_breakout: _v7,
      recording_type: _v8 || null
    });
  }, "newViewCtx", 0, function (_v0) {
    return (0, _v5.buildViewBpContext)({
      view_type: _v0,
      feature: null
    });
  }, "newWebCtx", 0, function (_v0) {
    let _v1 = _v0?.location ?? null,
      _v2 = _v0?.target ?? null,
      _v3 = _v0?.copy ?? null,
      _v4 = _v0?.target_path ?? null,
      _v5 = document.referrer ? new URL(document.referrer).pathname : "";
    return (0, _v6.buildWebBpContext)({
      location: _v1,
      page_name: (0, _v10.pageNameFromPathname)(window.location.pathname),
      referrer_page_name: _v5 ? (0, _v10.pageNameFromPathname)(_v5) : null,
      referrer: document.referrer,
      path: window.location.pathname,
      target: _v2,
      target_path: _v4,
      copy: _v3
    });
  }]);
}