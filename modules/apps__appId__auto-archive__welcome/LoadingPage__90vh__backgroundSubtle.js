{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["LoadingPage", 0, () => (0, _v1.jsx)(_v2.Center, {
    height: "90vh",
    backgroundColor: "backgroundSubtle",
    children: (0, _v1.jsx)(_v3.Spinner, {
      size: "md"
    })
  })], 0), _v0.s(["CONNECTION_STATUS", 0, {
    CONNECTED: "connected",
    DISCONNECTED: "disconnected",
    ERROR: "error",
    RECONNECT: "reconnect"
  }, "ONBOARDING_TYPE", 0, {
    ADMIN: "admin_onboarding",
    USER: "user_onboarding"
  }, "PARTNER_APP_ID", 0, {
    WebexProduction: 0,
    WebexDevelopment: 0,
    ZoomProduction: 0,
    ZoomDevelopment: 0,
    MSTeamDevelopment: 0,
    MSTeamProduction: 0,
    GoogleMeetDevelopment: 0,
    GoogleMeetProduction: 0,
    DropboxProduction: 0,
    DropboxDevelopment: 0
  }, "TeamRole", 0, {
    Owner: "Owner",
    Admin: "Admin"
  }], 0);
  var _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = (_v0, _v1) => ({
      field_value: _v1 ?? null,
      integration_name: _v0 ? "Microsoft Teams" : null,
      field_name: _v0 ?? null
    }),
    _v12 = (0, _v5.buildViewBpContext)({
      feature: null,
      view_type: "impression"
    }),
    _v13 = (0, _v6.buildActionBpContext)({
      feature: null,
      action_type: "click"
    }),
    _v14 = (_v0, _v1, _v2, _v3, _v4 = null) => {
      let _v5 = (0, _v7.buildThirdPartyIntegrationBpContext)({
          is_partner: !0,
          integration_name: "Microsoft Teams",
          is_integration: !0,
          integration_id: 58,
          app_id: _v1,
          integration_type: "oauth",
          partner_bucket: "Autoarchive"
        }),
        _v6 = ((_v0, _v1, _v2 = null) => (0, _v9.buildProductAnalyticsBpContext)({
          flow: _v0,
          product: "integrations",
          copy: _v1,
          element: _v2,
          location: "modal",
          feature: "integrations_connections",
          device_type: "desktop"
        }))(_v2, _v3, _v4),
        _v7 = (0, _v10.buildTeamBpContext)({
          is_team_member: !0,
          team_owner_id: _v0
        }),
        _v8 = (0, _v8.buildWebBpContext)({
          page_name: "integration_connection",
          location: null,
          path: window.location.pathname,
          referrer_page_name: null,
          referrer: null
        });
      return {
        ..._v13,
        ..._v12,
        ..._v6,
        ..._v8,
        ..._v5,
        ..._v7
      };
    };
  _v0.s(["default", 0, {
    chooseTeamForRecordingEvent: (_v0, _v1, _v2, _v3) => {
      let _v4 = _v14(_v0, _v2, _v1, "next", "button"),
        _v5 = _v11("is_deafult_team", _v3);
      (0, _v4.sendBpEventWithContexts)("vimeo.integration_choose_team", _v4, 2, {
        ..._v5
      });
    },
    chooseTeamForRecordingErrorEvent: (_v0, _v1, _v2, _v3 = "", _v4 = "") => {
      let _v5 = _v14(_v0, _v2, _v1, null, null);
      (0, _v4.sendBpEventWithContexts)("vimeo.notification_view", _v5, 2, {
        notification_copy: _v3,
        error_name: "team_error",
        checkbox_copy: null,
        error_id: _v4 || null,
        notification_name: "integrations_connections_error"
      });
    },
    chooseFolderForRecordingEvent: (_v0, _v1, _v2, _v3) => {
      let _v4 = _v14(_v0, _v2, _v1, "next", "button"),
        _v5 = _v11("is_deafult_folder", _v3 ?? "");
      (0, _v4.sendBpEventWithContexts)("vimeo.integration_choose_folder", _v4, 2, {
        ..._v5
      });
    },
    chooseFolderForRecordingErrorEvent: (_v0, _v1, _v2, _v3 = "", _v4 = "") => {
      let _v5 = _v14(_v0, _v2, _v1, null, null);
      (0, _v4.sendBpEventWithContexts)("vimeo.notification_view", _v5, 2, {
        notification_copy: _v3,
        error_name: "folder_error",
        checkbox_copy: null,
        error_id: _v4 || null,
        notification_name: "integrations_connections_error"
      });
    },
    chooseTeamForRecordingSuccessEvent: (_v0, _v1, _v2, _v3) => {
      let _v4 = _v14(_v0, _v2, _v1, null, null),
        _v5 = _v11("members_invited", _v3 ?? "");
      (0, _v4.sendBpEventWithContexts)("vimeo.integration_connected_view", _v4, 1, {
        ..._v5
      });
    }
  }], 0);
}