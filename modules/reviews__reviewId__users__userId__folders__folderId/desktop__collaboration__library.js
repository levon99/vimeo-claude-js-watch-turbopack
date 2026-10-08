{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1, _v2, _v3, _v4, _v5 = "desktop") => {
    let _v6 = _v1.BPEventService.init(_v4);
    _v6.withTeamCtx().withThirdPartyIntegrationCtx().withProductAnalyticsCtx({
      product: "collaboration",
      feature: "library",
      location: "header",
      device_type: _v5,
      element: "dropdown"
    }).withActionCtx(), _v6.send({
      eventName: _v0,
      version: _v1,
      additionalFields: {
        filter_type: _v2,
        page: _v3
      }
    });
  };
  _v0.s(["FilterBPEvents", 0, {
    sendOpenFilterEvent: (_v0, _v1, _v2, _v3 = "desktop") => {
      _v2("vimeo.open_filter", 1, _v0, _v1, _v2, _v3);
    },
    sendApplyFilterEvent: (_v0, _v1, _v2, _v3 = "desktop") => {
      _v2("vimeo.apply_filter", 1, _v0, _v1, _v2, _v3);
    }
  }]);
}