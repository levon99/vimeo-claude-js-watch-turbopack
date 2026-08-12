{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  async function _v3(_v0, _v1) {
    let _v2 = await (0, _v1.withConnectionSupport)(_v2.ERequestMethod.PATCH, _v0, ({
      liveClipId: _v0,
      userId: _v1
    }) => ({
      path: `/users/${_v1}/live_clip/${_v0}/rtmp_preview`
    }), {
      body: {
        rtmpPreview: _v1
      }
    });
    return "number" == typeof _v2?.rtmpPreview && (_v2.rtmpPreview = !!_v2?.rtmpPreview), _v2;
  }
  _v0.s(["getRtmpSignalingCredentials", 0, function (_v0) {
    return (0, _v1.withConnectionSupport)(_v2.ERequestMethod.GET, _v0, ({
      eventId: _v0
    }) => ({
      path: `/live_events/${_v0}/rtmp_signaling_credentials`
    }));
  }, "patchRtmpPreview", 0, _v3]);
}