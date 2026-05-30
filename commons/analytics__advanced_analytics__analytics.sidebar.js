{
  "use strict";

  var _v1,
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = "analytics",
    _v12 = "advanced_analytics",
    _v13 = "analytics.sidebar",
    _v14 = "vimeo.click",
    _v15 = {
      SIDEBAR: "sidebar",
      DATE_PICKER: "date_picker",
      FILTER_BAR: "filter_bar",
      GRAPH: "graph",
      TABLE_CONTROLS: "table_controls",
      TABLE: "table",
      REPORTS: "analytics_reports",
      TEAM_REPORT: "analytics_team_report"
    };
  var _v16 = ((_v1 = {}).DASHBOARD = "dashboard", _v1.REGION = "region", _v1.DATE = "date", _v1.VIDEO = "video", _v1.SOURCE = "source_url", _v1.DEVICE = "device", _v1.BANDWIDTH = "bandwidth", _v1.TEAM = "team", _v1.TEAM_MEMBER = "team_member", _v1.TEAM_VIDEO = "team_video", _v1);
  let _v17 = _v0 => RegExp("^/{0,1}analytics/video/{0,1}$").test(_v0) || RegExp("^/{0,1}analytics/video/{0,1}$").test(_v0) ? "video" : RegExp("^/{0,1}analytics/region/{0,1}$").test(_v0) ? "region" : RegExp("^/{0,1}analytics/source/{0,1}$").test(_v0) ? "source_url" : RegExp("^/{0,1}analytics/device/{0,1}$").test(_v0) ? "device" : RegExp("^/{0,1}analytics/date/{0,1}$").test(_v0) ? "date" : RegExp("^/{0,1}analytics/region/{0,1}$").test(_v0) ? "region" : RegExp("^/{0,1}analytics/source/{0,1}$").test(_v0) ? "source_url" : RegExp("^/{0,1}analytics/device/{0,1}$").test(_v0) ? "device" : RegExp("^/{0,1}analytics/bandwidth/{0,1}$").test(_v0) ? "bandwidth" : RegExp("/analytics/teams/[0-9]+/[users | videos]").test(_v0) ? "team" : RegExp("/analytics/teams/[0-9]+/users/[0-9]+").test(_v0) ? "team_member" : RegExp("/analytics/teams/[0-9]+/videos/[0-9]+").test(_v0) ? "team_video" : "dashboard",
    _v18 = _v0 => ({
      ...(0, _v7.buildTeamBpContextFromTeamUser)(_v0)
    }),
    _v19 = _v0 => {
      let _v1 = (0, _v5.buildActionBpContext)({
          action_type: "click",
          feature: null
        }),
        _v2 = (0, _v6.buildProductAnalyticsBpContext)({
          copy: _v0.copy,
          device_type: (0, _v4.default)(),
          element: "button",
          entity_type: "video",
          feature: "analytics",
          location: _v0.location,
          product: "analysis"
        }),
        _v3 = (0, _v7.buildTeamBpContextFromTeamUser)(_v0.teamUser),
        _v4 = (0, _v9.buildWebBpContext)({
          page_name: "analytics_page",
          path: window?.location?.pathname,
          referrer: document?.referrer
        }),
        _v5 = {
          ..._v1,
          ..._v2,
          ..._v3,
          ..._v4
        };
      (0, _v10.sendBpEventWithContexts)("vimeo.widget_cta_selection", _v5, 2, {
        seconds: null,
        widget_name: null,
        widget_element_name: _v0.widget_element_name
      });
    },
    _v20 = _v0 => {
      let _v1 = (0, _v6.buildProductAnalyticsBpContext)({
          copy: null,
          device_type: (0, _v4.default)(),
          element: "toast",
          entity_type: "video",
          feature: "analytics",
          location: "body",
          product: "analysis"
        }),
        _v2 = (0, _v7.buildTeamBpContextFromTeamUser)(_v0.teamUser),
        _v3 = (0, _v8.buildViewBpContext)({
          feature: null,
          view_type: "impression"
        }),
        _v4 = (0, _v9.buildWebBpContext)({
          page_name: "analytics_page",
          path: window?.location?.pathname,
          referrer: document?.referrer
        }),
        _v5 = {
          ..._v1,
          ..._v2,
          ..._v3,
          ..._v4
        };
      (0, _v10.sendBpEventWithContexts)("vimeo.notification_view", _v5, 3, {
        checkbox_copy: null,
        error_id: null,
        error_name: null,
        notification_copy: _v0.notification_copy,
        notification_name: _v0.notification_name
      });
    };
  _v0.s(["AGGREGATE_INTERVAL_CHANGE_EVENT_NAME", 0, "vimeo.change_report_graph_aggregate_interval", "ANALYTICS", 0, _v11, "ANALYTICS_PAGE", 0, "analytics_page", "BigPictureLocations", 0, _v15, "GRAPH_METRIC_SELECTOR_EVENT_NAME", 0, "analytics.graph_metric_selector", "TABLE_ROW_EVENT_NAME", 0, "analytics.table_row", "TABLE_ROW_EXPAND_EVENT_NAME", 0, "vimeo.click_analytics_table_row_expand", "TABLE_VIDEO_LINK_EVENT_NAME", 0, "vimeo.click_analytics_video_link", "UPSELL_IMPRESSION_EVENT_NAME", 0, "analytics.upsell_impression", "UpsellName", 0, {
    REPORTS: "analytics_reports_upsell",
    TEAM_REPORT: "team_report_enterprise_upsell"
  }, "getReportPageNameFromUrl", 0, _v17, "sendContentLimitBannerClickEvent", 0, (_v0, _v1) => {
    let _v2 = _v18(_v1);
    (0, _v10.sendBpEventWithContexts)("vimeo.click", _v2, 102, {
      page: "advanced_analytics_reports",
      location: "content_limit_banner",
      target: "Video Analytics Help Center",
      name: "content_limit_banner",
      copy: "Learn More",
      feature: "advanced_analytics",
      type: "general",
      target_path: "https://help.vimeo.com/hc/en-us/articles/12426192758929-Advanced-Analytics",
      path: _v0,
      click_type: null,
      device_type: null,
      third_party_integration: null
    });
  }, "sendContentLimitBannerImpressionEvent", 0, (_v0, _v1) => {
    let _v2 = _v18(_v1);
    (0, _v10.sendBpEventWithContexts)("vimeo.impression", _v2, 28, {
      page: "advanced_analytics_reports",
      location: "content_limit_banner",
      name: "content_limit_banner",
      feature: "advanced_analytics",
      type: "general",
      path: _v0,
      device_type: null
    });
  }, "sendExportModalCloseEvent", 0, (_v0, _v1) => {
    _v19({
      copy: _v0,
      location: "modal",
      teamUser: _v1,
      widget_element_name: "close_export_data_modal_button"
    });
  }, "sendExportModalErrorEvent", 0, _v0 => {
    _v20({
      teamUser: _v0,
      notification_copy: "Unable to export. Try again",
      notification_name: "analysis_export_data_error"
    });
  }, "sendExportModalExportEvent", 0, (_v0, _v1) => {
    _v19({
      copy: "POST" == _v0 ? "Email export" : "Download directly",
      location: "modal",
      teamUser: _v1,
      widget_element_name: "export_data_button"
    });
  }, "sendExportModalLoadingEvent", 0, _v0 => {
    _v20({
      teamUser: _v0,
      notification_copy: "Export processing. You may leave this page.",
      notification_name: "analysis_export_data_loading"
    });
  }, "sendExportModalOpenEvent", 0, _v0 => {
    _v19({
      copy: "Export data",
      location: "body",
      teamUser: _v0,
      widget_element_name: "open_export_data_modal_button"
    });
  }, "sendFilterBarEvent", 0, (_v0, _v1, _v2, _v3, _v4) => {
    let _v5 = _v18(_v3);
    (0, _v10.sendBpEventWithContexts)("analytics.filter_bar", _v5, 1, {
      path: _v2,
      location: _v2,
      report_name: _v17(_v2),
      filter_name: _v0,
      dimension: _v1,
      date_range: _v4 ?? null,
      product: _v11
    });
  }, "sendTableColumnSortEvent", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v18(_v3);
    (0, _v10.sendBpEventWithContexts)(_v14, _v4, 112, {
      page: `${_v17(_v1)}_report`,
      location: _v15.TABLE_CONTROLS,
      target: _v2,
      name: `sort_${(0, _v2.default)(_v0)}_${_v2}`,
      copy: _v0,
      feature: _v12,
      type: "general",
      path: _v1,
      target_path: null,
      click_type: null,
      device_type: null,
      third_party_integration: null
    });
  }, "sendTableDimensionChangeEvent", 0, (_v0, _v1, _v2, _v3) => {
    let _v4 = _v18(_v3);
    (0, _v10.sendBpEventWithContexts)(_v14, _v4, 112, {
      page: `${_v17(_v1)}_report`,
      location: _v15.TABLE_CONTROLS,
      target: _v17(_v1),
      name: `${(0, _v2.default)(_v0)}_toggle`,
      copy: _v0,
      feature: _v12,
      type: "general",
      path: _v1,
      target_path: _v2,
      click_type: null,
      device_type: null,
      third_party_integration: null
    });
  }, "sendTableSecondaryDimensionClickEvent", 0, _v0 => {
    let _v1 = _v18(_v0);
    (0, _v10.sendBpEventWithContexts)(_v14, _v1, 8, {
      page: "advanced_analytics_reports",
      location: _v15.TABLE_CONTROLS,
      target: "second dimension dropdown",
      name: "second_dimension_open",
      copy: "choose segment",
      feature: _v12,
      type: "general"
    });
  }, "sendTableSegmentClickEvent", 0, (_v0, _v1) => {
    let _v2 = _v18(_v1);
    (0, _v10.sendBpEventWithContexts)(_v14, _v2, 8, {
      page: "advanced_analytics_reports",
      location: _v15.TABLE_CONTROLS,
      target: _v0,
      name: "second_dimension_select",
      copy: _v0,
      feature: _v12,
      type: "general"
    });
  }, "trackSideBar", 0, _v0 => {
    let _v1 = {
      path: window.location.pathname,
      referrer: _v17(window.location.pathname),
      target: _v16[_v0.toLocaleUpperCase()],
      product: _v11,
      location: window.location.pathname
    };
    _v3.BigPictureClient.sendEvent(new _v3.Event(_v13, 1, _v1)).then(_v0 => _v0);
  }, "trackTableRowCheck", 0, _v0 => {
    _v3.BigPictureClient.sendEvent(new _v3.Event("analytics.table_row", 1, {
      action: _v0,
      path: window.location.pathname,
      report_name: `${_v17(window.location.pathname)}_report`,
      product: _v11,
      location: "table"
    }));
  }, "trackTableRowExpand", 0, (_v0, _v1, _v2, _v3) => {
    _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.click_analytics_table_row_expand", 1, {
      row_id: _v0,
      expansion_type: _v1,
      is_expand: _v2,
      nesting_level: _v3,
      path: window.location.pathname,
      product: _v11,
      location: "table"
    }));
  }, "trackUpgradeAction", 0, _v0 => {
    _v3.BigPictureClient.sendEvent(new _v3.Event("vimeo.upgrade_action", 30, {
      action_type: "click",
      target: null,
      plan_selected: null,
      purchase_type: null,
      duration: null,
      currency: null,
      price: null,
      is_discount: null,
      discount_offer: null,
      path: null,
      target_path: null,
      device_type: null,
      is_new_pricing: null,
      upgrade_flags: null,
      loading_time: null,
      promo_code_id: null,
      ..._v0
    }));
  }, "trackVOD", 0, () => {
    _v3.BigPictureClient.sendEvent(new _v3.Event(_v13, 1, {
      path: window.location.pathname,
      referrer: _v17(window.location.pathname),
      target: "VOD",
      product: _v11,
      location: window.location.pathname
    })).then(_v0 => _v0);
  }]);
}