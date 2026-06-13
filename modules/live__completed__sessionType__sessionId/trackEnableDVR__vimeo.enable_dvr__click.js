{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["trackEnableDVR", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.enable_dvr", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "dvr"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "toggle"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0 ? "On" : "Off"
    });
  }, "trackEnableNoArchive", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.disable_event_archive", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "event_archive"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "toggle"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0 ? "On" : "Off"
    });
  }, "trackEnableSimulatedLive", 0, function (_v0, _v1, _v2) {
    (0, _v4.createBPv2EventFactory)("vimeo.enable_simulated_live", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "simulated_live"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: _v1,
        element: _v2
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0 ? "On" : "Off"
    });
  }, "trackEnableUnlimitedDuration", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.enable_extended_stream", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "extended_stream"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "toggle"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0 ? "On" : "Off"
    });
  }, "trackEnabledAutoCc", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.enable_automated_captions", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newLiveCtx)({
        live_feature: "closed_captions"
      }),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "toggle"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0 ? "On" : "Off"
    });
  }, "trackEnterAutoCcKeywords", 0, function () {
    (0, _v4.createBPv2EventFactory)("vimeo.enter_keywords", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newLiveCtx)({
        live_feature: "closed_captions"
      }),
      ...(0, _v2.newActionCtx)("type"),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "text"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: null
    });
  }, "trackSelectAutoCcLanguage", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.select_cc_language", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newLiveCtx)({
        live_feature: "closed_captions"
      }),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "dropdown"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v0
    });
  }, "trackSelectLatency", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.select_latency_settings", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "latency"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "dropdown"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: _v3.EventLatency[_v0]
    });
  }, "trackSelectStreamingMethod", 0, function (_v0) {
    (0, _v4.createBPv2EventFactory)("vimeo.select_streaming_method", 1, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newWebCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "streaming_mode"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "encoder",
        location: "header",
        element: "radio_button",
        copy: "RTMP Stream"
      })
    }), () => void 0)({
      value: _v3.ProductionMethod[_v0]
    });
  }]);
}