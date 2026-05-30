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
  let _v12 = {
      ANALYSIS_ACTION: "analysis_action",
      ANALYSIS_VIEW: "analysis_view"
    },
    _v13 = {
      PAGE_NAME: "analytics_page",
      PRODUCT: "analysis",
      FEATURE: "analytics_widget"
    },
    _v14 = {
      PAGE_NAME: "logged_in_home_page",
      FEATURE: "widgets",
      LOCATION: "analytics_widget",
      ELEMENT: "text",
      ENTITY_TYPE: "widget"
    },
    _v15 = {
      ANALYTICS_OVERVIEW: "analytics_overview",
      ANALYTICS_REGION: "analytics_region",
      ANALYTICS_SOURCE: "analytics_source",
      ANALYTICS_DEVICE: "analytics_device",
      ANALYTICS_TOP_VIDEOS: "analytics_top_videos",
      ANALYTICS_VIEWS: "analytics_views",
      ANALYTICS_UNIQUE_VIEWERS: "analytics_unique_viewers",
      ANALYTICS_TOTAL_TIME_WATCHED: "analytics_total_time_watched"
    },
    _v16 = {
      BIG_NUMBER_CARD: "big_number_card",
      GRAPH: "graph",
      CTA: "cta",
      REGION_MAP: "region_map",
      REGION_SEGMENTED_BAR_GRAPH: "region_segmented_bar_graph",
      REGION_LIST: "region_list",
      SOURCE_LIST: "source_list",
      DEVICE_BAR_GRAPH: "device_bar_graph",
      VIDEO_LIST: "video_list",
      VIDEO_CARD: "video_card"
    },
    _v17 = {
      widget_name: null,
      widget_element_name: null,
      seconds: null
    };
  _v0.s(["ANALYTICS_WIDGET_EVENTS", 0, _v13, "AnalyticsEventGroup", 0, _v12, "LIHP_ANALYTICS_WIDGET_EVENTS", 0, _v14, "WidgetElementName", 0, _v16, "WidgetName", 0, _v15, "sendDeviceBarGraphHoverEvent", 0, _v0 => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_DEVICE,
        widget_element_name: _v16.DEVICE_BAR_GRAPH
      },
      action_type: "hover",
      location: "widget",
      element: "graph",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendHoverEvent", 0, (_v0, _v1, _v2, _v3, _v4) => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v1,
        widget_element_name: _v3 || null
      },
      copy: _v4,
      action_type: "hover",
      location: "widget",
      element: _v2,
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendOverviewGraphHoverEvent", 0, (_v0, _v1) => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_OVERVIEW,
        widget_element_name: _v16.GRAPH,
        seconds: _v1
      },
      action_type: "hover",
      location: "widget",
      element: "graph",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendOverviewNumbersClickEvent", 0, (_v0, _v1) => {
    _v0("vimeo.widget_element_selection", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_OVERVIEW,
        widget_element_name: _v16.BIG_NUMBER_CARD
      },
      copy: _v1,
      action_type: "click",
      location: "widget",
      element: "card",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendOverviewNumbersHoverEvent", 0, (_v0, _v1) => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_OVERVIEW,
        widget_element_name: _v16.BIG_NUMBER_CARD
      },
      copy: _v1,
      action_type: "hover",
      location: "widget",
      element: "card",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendRegionListHoverEvent", 0, _v0 => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_REGION,
        widget_element_name: _v16.REGION_LIST
      },
      action_type: "hover",
      location: "widget",
      element: "list",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendRegionMapHoverEvent", 0, _v0 => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_REGION,
        widget_element_name: _v16.REGION_MAP
      },
      action_type: "hover",
      location: "widget",
      element: "map",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendRegionSegmentedBarGraphHoverEvent", 0, _v0 => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_REGION,
        widget_element_name: _v16.REGION_SEGMENTED_BAR_GRAPH
      },
      action_type: "hover",
      location: "widget",
      element: "segmented_bar_graph",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendSourceListHoverEvent", 0, _v0 => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_SOURCE,
        widget_element_name: _v16.SOURCE_LIST
      },
      action_type: "hover",
      location: "widget",
      element: "list",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendVideosCardClickEvent", 0, (_v0, _v1) => {
    _v0("vimeo.widget_element_selection", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_TOP_VIDEOS,
        widget_element_name: _v16.VIDEO_CARD
      },
      copy: _v1,
      action_type: "click",
      location: "widget",
      element: "link",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendVideosCardHoverEvent", 0, (_v0, _v1) => {
    _v0("vimeo.widget_element_hover", {
      additionalFields: {
        ..._v17,
        widget_name: _v15.ANALYTICS_TOP_VIDEOS,
        widget_element_name: _v16.VIDEO_LIST
      },
      copy: _v1,
      action_type: "hover",
      location: "widget",
      element: "list",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendWidgetCTAClickEvent", 0, (_v0, _v1, _v2, _v3) => {
    _v0("vimeo.widget_cta_selection", {
      additionalFields: {
        ..._v17,
        widget_name: _v1,
        widget_element_name: _v16.CTA
      },
      copy: _v2,
      action_type: "click",
      target: _v3,
      location: "widget",
      element: "link",
      eventGroup: _v12.ANALYSIS_ACTION
    });
  }, "sendWidgetImpressionEvent", 0, (_v0, _v1, _v2) => {
    _v0("vimeo.analytics_widget_impression", {
      additionalFields: {
        widget_name: _v1
      },
      copy: _v2,
      location: "widget",
      eventGroup: _v12.ANALYSIS_VIEW
    });
  }], 0), _v0.s(["useAnalyticsEvents", 0, () => {
    let _v0 = (0, _v1.useContext)(_v11.ViewerContext),
      _v1 = _v0?.teamUser;
    return {
      sendEvent: (_v0, _v1) => {
        var _v2;
        let _v3,
          {
            action_type: _v4,
            additionalFields: _v5,
            copy: _v6,
            element: _v7,
            target: _v8,
            location: _v9,
            eventGroup: _v10
          } = _v1,
          _v11 = (_v2 = window.location.pathname, _v3 = "other", _v2.match(/^\/analytics/) ? _v3 = "analytics_page" : (_v2.match(/^\/wayfinder(['-])home/) || "/" == _v2) && (_v3 = _v14.PAGE_NAME), _v3),
          _v12 = _v11 === _v14.PAGE_NAME,
          _v13 = _v12 ? _v14.ELEMENT : _v7,
          _v14 = _v10 === _v12.ANALYSIS_VIEW ? 1 : 2,
          _v15 = {
            ...(_v10 === _v12.ANALYSIS_VIEW && {
              ...(0, _v7.buildViewBpContext)({
                view_type: "impression",
                feature: null
              }),
              ...(0, _v6.buildThirdPartyIntegrationBpContext)({
                is_integration: !1,
                integration_id: null,
                integration_name: null,
                is_partner: null
              })
            }),
            ...(_v10 === _v12.ANALYSIS_ACTION && _v4 && {
              ...(0, _v3.buildActionBpContext)({
                action_type: _v4,
                feature: null
              })
            }),
            ...(0, _v8.buildWebBpContext)({
              page_name: _v11,
              target: _v8 ?? null,
              location: null,
              referrer_page_name: _v13.PAGE_NAME,
              referrer: (0, _v9.getEntryPage)(document.referrer || ""),
              path: window.location.pathname,
              copy: _v6 ?? null
            }),
            ...(0, _v5.buildTeamBpContextFromTeamUser)(_v1 ?? void 0),
            ...(0, _v4.buildProductAnalyticsBpContext)({
              product: _v13.PRODUCT,
              feature: _v12 ? _v14.FEATURE : _v13.FEATURE,
              location: _v12 ? _v14.LOCATION : _v9,
              modal_name: null,
              flow: null,
              element: _v13 ?? null,
              copy: _v6 ?? null,
              device_type: (0, _v2.default)(),
              entity_type: _v12 ? _v14.ENTITY_TYPE : null
            })
          };
        (0, _v10.sendBpEventWithContexts)(_v0, _v15, _v14, {
          ..._v5
        });
      }
    };
  }], 0);
}