{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = {
    members: "Members",
    groups: "Groups",
    branding: "Branding",
    settings: "Settings",
    billing: "Billing"
  };
  _v0.s(["buildProductAnalyticsContext", 0, _v0 => (0, _v3.buildProductAnalyticsBpContext)({
    product: "collaboration",
    feature: "teams",
    location: "page_area",
    device_type: (0, _v2.default)(),
    ..._v0
  }), "buildThirdPartyContext", 0, (_v0 = {}) => (0, _v4.buildThirdPartyIntegrationBpContext)({
    is_integration: !1,
    is_partner: !1,
    integration_name: null,
    integration_id: null,
    ..._v0
  }), "getTabCopy", 0, _v0 => _v5[_v0], "getTeamManagementTabFromPath", 0, _v0 => {
    let _v1 = _v0.split("/").filter(_v0 => _v0.length > 0).pop() ?? "";
    return _v1 in _v5 ? _v1 : null;
  }, "pageNameFromPathname", 0, function (_v0) {
    switch (!0) {
      case null != _v0.match(/\/live\/broadcaster(\/event)?\/[0-9]+.*/):
        return "live_browser_studio";
      case null != _v0.match(/\/live\/rtmp\/event\/[0-9]+.*/):
        return "live_event_rtmp_page";
      case null != _v0.match(/\/events?\/[0-9]+.*/):
      case null != _v0.match(/\/live\/(guest\/)?([0-9a-zA-Z])?(\/)?.*/):
        return "live_event_view_page";
      case null != _v0.match(/^\/upload(\/.*)?$/):
        return "upload_page";
      case null != _v0.match(/^\/(home)?$/):
        return "self_serve_logged_in_homepage";
      case null != _v0.match(/\/manage\/folders/):
      case null != _v0.match(/\/manage\/videos/):
        return "video_library";
      case null != _v0.match(/\/manage\/showcases/):
        return "showcases_library";
      case null != _v0.match(/\/manage\/events/):
        return "event_library";
      case null != _v0.match(/\/manage\/webinars/):
        return "webinars_library";
      case null != _v0.match(/\/team\/manage\/(members|groups|branding|settings|billing)/):
        return "team_management_page";
      default:
        return "other";
    }
  }, "sendBpEventWithContexts", 0, function (_v0, _v1, _v2 = -1, _v3 = {}) {
    let _v4 = new _v1.Event(_v0, _v2, _v3);
    _v1.BigPictureClient.sendEventWithContexts(_v4, _v1);
  }]);
}