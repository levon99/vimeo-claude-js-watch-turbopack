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
    _v9 = _v0.i(0);
  let _v10 = new _v1.Logger("🦩Datadog", _v4.liveApplicationConfig.TRACKING.IS_DATADOG_LOG_ENABLED);
  function _v11(_v0) {
    return !_v4.liveApplicationConfig.TRACKING.NR_IGNORED_USERS.includes(_v5.liveTrackingConfig.DETAILS.USER_ID) && !("AgoraRTCException" === (0, _v7.getErrorName)(_v0) && _v4.liveApplicationConfig.TRACKING.NR_AGORA_IGNORED_CODES.includes((0, _v7.getErrorCode)(_v0)));
  }
  function _v12(_v0, _v1) {
    if (!_v11(_v0)) return;
    let _v2 = Object.assign({}, _v1, (0, _v2.getLiveApplicationInfo)());
    if (_v1?.data && (_v2.data = JSON.stringify(_v1.data, (0, _v9.getCircularReplacer)())), _v0 instanceof _v8.LiveError && (_v2.liveErrorDetails = JSON.stringify(_v0.data, (0, _v9.getCircularReplacer)()), _v2.liveErrorCode = _v6.ELiveErrorCode[_v0.code] || _v6.ELiveErrorCode.GENERIC), !(_v4.liveApplicationConfig.TRACKING.NR_LOG_ERRORS_TRACKED <= _v4.liveApplicationConfig.TRACKING.NR_LOG_ERRORS_LIMIT)) return _v10.warn("Skipping error tracking, session facing limit");
    _v4.liveApplicationConfig.TRACKING.NR_LOG_ERRORS_TRACKED += 1, _v3.environmentConfig.IS_COM && window.DD_RUM ? window.DD_RUM.onReady(() => {
      let _v0 = window.DD_RUM.getUser() ?? null;
      _v10.info("Sending Datadog report:", _v0, _v2, _v0), window.DD_RUM.addError(_v0, _v2);
    }) : _v10.info("Got local Datadog report:", _v0, _v2);
  }
  async function _v13(_v0, _v1) {
    try {
      return await _v0();
    } catch (_v0) {
      throw _v12(_v0, "function" == typeof _v1 ? _v1() : _v1), _v0;
    }
  }
  _v0.s(["checkErrorsAndTrack", 0, function ({
    possibleErrors: _v0,
    data: _v1,
    methodName: _v2
  }) {
    return !(_v0.length > 0) || (_v10.error("Found validation errors:", _v2, _v1, _v0), _v12(new _v8.LiveError("Found corrupted object.", {
      code: _v6.ELiveErrorCode.CORRUPTED_OBJECT,
      data: {
        object: _v1,
        possibleErrors: _v0
      }
    }), {
      method: _v2,
      category: _v2.ELiveErrorCategory.GRAPHICS
    }), !1);
  }, "trackLiveAction", 0, function (_v0, _v1 = {}) {
    if (!_v11()) return;
    let _v2 = Object.assign({}, _v1, (0, _v2.getLiveApplicationInfo)());
    _v1.Logger.mark(_v0), _v3.environmentConfig.IS_COM && window.DD_RUM ? window.DD_RUM.onReady(() => {
      let _v0 = window.DD_RUM.getUser() ?? null;
      _v10.info("Sending Datadog action:", _v0, _v2, _v0), window.DD_RUM.addAction(_v0, _v2);
    }) : _v10.info("Got local Datadog action:", _v0, _v2);
  }, "trackLiveError", 0, _v12, "updateDatadogGlobals", 0, function (_v0) {
    _v10.info("Updating Datadog globals:", _v0), !_v3.environmentConfig.IS_IFRAME && window.DD_RUM && window.DD_RUM.onReady(() => {
      for (let _v0 in _v0) window.DD_RUM.setViewContextProperty(_v0, String(_v0[_v0]));
    });
  }, "withLiveErrorTracking", 0, _v13]);
}