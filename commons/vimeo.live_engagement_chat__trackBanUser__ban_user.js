{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (0, _v0.i(0).createLiveSchemaEventFactoryNew)("vimeo.live_engagement_chat", 2, () => ({
    ..._v1.liveTrackingConfig.BIG_PICTURE_INTERACTION_SCHEMA_BASE
  }));
  _v0.s(["trackBanUser", 0, function () {
    return _v2({
      eventName: "ban_user"
    });
  }, "trackDeleteBackstageMessage", 0, function () {
    return _v2({
      eventName: "delete_backstage_message"
    });
  }, "trackDeleteMessage", 0, function () {
    return _v2({
      eventName: "delete_message"
    });
  }, "trackDisableAudienceChat", 0, function () {
    return _v2({
      eventName: "disable_audience_chat"
    });
  }, "trackEnableAudienceChat", 0, function () {
    return _v2({
      eventName: "enable_audience_chat"
    });
  }, "trackExportChat", 0, function () {
    return _v2({
      eventName: "export_chat"
    });
  }, "trackSendBackstageMessage", 0, function () {
    return _v2({
      eventName: "send_backstage_message"
    });
  }, "trackSendMessage", 0, function () {
    return _v2({
      eventName: "send_message"
    });
  }, "trackViewChat", 0, function () {
    return _v2({
      eventName: "view_chat",
      eventType: "impression"
    });
  }]);
}