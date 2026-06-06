{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = new _v3.Logger("👁BP", _v6.liveApplicationConfig.TRACKING.IS_BP_LOG_ENABLED);
  function _v9() {
    return !1 !== _v2.BigPictureClient.isInitalized;
  }
  function _v10() {
    return !_v5.environmentConfig.IS_TEST && _v6.liveApplicationConfig.TRACKING.IS_ENABLED && !_v6.liveApplicationConfig.TRACKING.BP_IGNORED_USERS.includes(_v7.liveTrackingConfig.DETAILS.USER_ID);
  }
  function _v11(_v0) {
    _v10() && (_v9() ? (_v8.info("Sending event:", _v0), _v2.BigPictureClient.sendEvent(_v0)) : _v8.warn("Tracker was not ready when tried to send event:", _v0));
  }
  _v0.s(["createBPv2EventFactory", 0, function (_v0, _v1, _v2, _v3) {
    return (_v0 = {}) => {
      if (!_v10()) return;
      let _v1 = _v2(),
        _v2 = {
          ..._v0,
          ...("function" == typeof _v3 ? _v3() : _v3)
        };
      return _v8.info("Sending v2 event:", _v0, _v1, _v1, _v2), (0, _v4.sendBpEventWithContexts)(_v0, _v1, _v1, _v2);
    };
  }, "createLiveSchemaEventFactory", 0, function (_v0, _v1, _v2, _v3 = "name") {
    return (_v0, _v1 = {}) => _v11(new _v2.Event(_v0, _v1, (0, _v1.decamelizeDeep)({
      eventType: "click",
      target: null,
      copy: null,
      page: null,
      location: "",
      ...(_v0 ? {
        [_v3]: _v0
      } : {}),
      ...("function" == typeof _v2 ? _v2() : _v2),
      ..._v1
    })));
  }, "createLiveSchemaEventFactoryNew", 0, function (_v0, _v1, _v2) {
    return (_v0 = {}) => _v11(new _v2.Event(_v0, _v1, (0, _v1.decamelizeDeep)({
      eventType: "click",
      target: null,
      copy: null,
      page: null,
      location: "",
      ...("function" == typeof _v2 ? _v2() : _v2),
      ..._v0
    })));
  }, "isInteractionTrackingConfigReady", 0, function ({
    BIG_PICTURE_INTERACTION_SCHEMA_BASE: {
      roomId: _v0,
      roomType: _v1
    }
  } = _v7.liveTrackingConfig) {
    return _v9() && !!(_v0 && _v1);
  }, "isLiveTrackingConfigReady", 0, function ({
    BIG_PICTURE_LIVE_SCHEMA_BASE: {
      liveEventId: _v0,
      liveEventType: _v1
    }
  } = _v7.liveTrackingConfig) {
    return _v9() && !!(_v0 && _v1);
  }, "pageNameFromPathname", 0, function (_v0) {
    let _v1 = "other";
    _v0.match(/\/live\/broadcaster(\/event)?\/[0-9]+.*/) ? _v1 = "live_browser_studio" : _v0.match(/\/live\/(rtmp|completed)\/event\/[0-9]+.*/) ? _v1 = "live_event_rtmp_page" : _v0.match(/\/events?\/[0-9]+.*/) || _v0.match(/\/live\/(guest\/)?([0-9a-zA-Z])?(\/)?.*/) ? _v1 = "live_event_view_page" : _v0.match(/^\/upload(\/.*)?$/) ? _v1 = "upload_page" : _v0.match(/\/manage\/folders/) ? _v1 = "video_library" : _v0.match(/^\/(home)?/) && (_v1 = "self_serve_logged_in_homepage");
    let _v2 = _v0.match(/\/manage\/(videos|events|showcases)/);
    if (_v2) switch (_v2[1]) {
      case "videos":
        _v1 = "video_library";
        break;
      case "showcases":
        _v1 = "showcases_library";
        break;
      case "events":
        _v1 = "event_library";
        break;
      default:
        _v1 = "other";
    }
    return _v1;
  }, "updateTrackingConfig", 0, function (_v0, _v1 = _v7.liveTrackingConfig) {
    for (let _v0 in _v0) "object" == typeof _v1[_v0] && Object.assign(_v1[_v0], _v0[_v0]);
  }]);
}