{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  _v0.s(["activateEvent", 0, function (_v0) {
    return (0, _v1.withConnectionSupport)(_v2.ERequestMethod.POST, _v0, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/activate`
    }));
  }, "endEvent", 0, function (_v0) {
    return (0, _v1.withConnectionSupport)(_v2.ERequestMethod.POST, _v0, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/end`
    }));
  }, "getSessionIngestStatus", 0, function (_v0, _v1 = {}) {
    let _v2 = _v0.query ?? {};
    return _v1.cloudSessionId && (_v2.session_id = _v1.cloudSessionId), _v1.isRawStatus && (_v2.get_raw_ingest_status = !0), _v1.cacheKey && (_v2.cache_key = _v1.cacheKey), (0, _v1.withConnectionSupport)(_v2.ERequestMethod.GET, _v0, ({
      clipId: _v0
    }) => ({
      path: `/videos/${_v0}/sessions/status`
    }), {
      query: _v2
    });
  }, "startEvent", 0, function (_v0) {
    return (0, _v1.withConnectionSupport)(_v2.ERequestMethod.POST, _v0, ({
      liveEventId: _v0
    }) => ({
      path: `/live_events/${_v0}/activate`
    }), {
      body: {
        streamingStartRequested: !0
      }
    });
  }]);
}