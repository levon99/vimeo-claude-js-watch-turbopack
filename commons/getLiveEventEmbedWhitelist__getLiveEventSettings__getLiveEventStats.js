{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  function _v4(_v0) {
    return "number" == typeof _v0?.rtmpPreview && (_v0.rtmpPreview = !!_v0.rtmpPreview), "number" == typeof _v0?.autoCcEnabled && (_v0.autoCcEnabled = !!_v0.autoCcEnabled), _v0;
  }
  async function _v5(_v0) {
    return _v4(await (0, _v2.withConnectionSupport)(_v3.ERequestMethod.GET, _v0, ({
      eventId: _v0
    }) => ({
      path: `/live_events/${_v0}`
    }), {
      additionalHeaders: {
        Accept: (0, _v1.getApplicationAcceptHeader)({
          resource: "*",
          version: "3.4.9"
        })
      }
    }));
  }
  async function _v6(_v0, _v1) {
    return _v4(await (0, _v2.withConnectionSupport)(_v3.ERequestMethod.PATCH, _v0, ({
      eventId: _v0
    }) => ({
      path: `/live_events/${_v0}`
    }), {
      body: _v1,
      additionalHeaders: {
        Accept: (0, _v1.getApplicationAcceptHeader)({
          resource: "*",
          version: "3.4.9"
        })
      }
    }));
  }
  async function _v7(_v0) {
    return (0, _v2.withConnectionSupport)(_v3.ERequestMethod.GET, _v0, ({
      streamableClipURI: _v0
    }) => ({
      path: `/${_v0}/stats/live`
    }));
  }
  _v0.s(["getLiveEventEmbedWhitelist", 0, function ({
    eventId: _v0,
    gctlConfig: _v1
  }) {
    return (0, _v1.sendApiRequest)({
      method: _v3.ERequestMethod.GET,
      path: `/live_events/${_v0}/privacy/domains`,
      gctlConfig: _v1
    });
  }, "getLiveEventSettings", 0, _v5, "getLiveEventStats", 0, _v7, "patchLiveEvent", 0, _v6, "updateLiveEventEmbedWhitelist", 0, function ({
    eventId: _v0,
    gctlConfig: _v1,
    domains: _v2
  }) {
    return (0, _v1.sendApiRequest)({
      method: _v3.ERequestMethod.PUT,
      path: `/live_events/${_v0}/privacy/domains`,
      gctlConfig: _v1,
      body: {
        allowedDomains: _v2
      }
    });
  }, "updateRecordingState", 0, function (_v0, _v1) {
    return (0, _v2.withConnectionSupport)(_v3.ERequestMethod.PATCH, _v0, ({
      liveClipId: _v0,
      userId: _v1
    }) => ({
      path: `/users/${_v1}/live_clip/${_v0}/record_mode`
    }), {
      body: {
        recordModeCommand: _v1
      }
    });
  }, "updateStreamMode", 0, function (_v0, _v1) {
    return (0, _v2.withConnectionSupport)(_v3.ERequestMethod.PATCH, _v0, ({
      eventId: _v0
    }) => ({
      path: `/live_events/${_v0}`
    }), {
      body: {
        streamMode: _v1
      },
      additionalHeaders: {
        Accept: (0, _v1.getApplicationAcceptHeader)({
          resource: "*",
          version: "3.4.9"
        })
      }
    });
  }]);
}