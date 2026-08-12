{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  _v0.s(["trackOpenCustomizePlayer", 0, function () {
    (0, _v3.createBPv2EventFactory)("vimeo.open_customize_player_modal", 2, () => ({
      ...(0, _v2.newTeamCtx)(),
      ...(0, _v2.newActionCtx)("click"),
      ...(0, _v2.newLiveCtx)({
        live_feature: "video_embed_settings"
      }),
      ...(0, _v2.newWebCtx)({
        target: "event_settings_page"
      }),
      ...(0, _v2.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "drawer",
        element: "button",
        copy: "customize player"
      })
    }), () => ({
      device_type: _v1.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))({
      value: null
    });
  }]);
}