{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = new Map();
  function _v9(_v0) {
    return !!(_v0 && _v0.trackMediaType && _v0.play);
  }
  function _v10(_v0) {
    return !_v0 || "_muted" in _v0 && !0 === _v0._muted;
  }
  function _v11(..._v0) {
    return _v0.filter(_v0 => _v9(_v0) && _v0._enabled);
  }
  async function _v12(_v0, _v1) {
    let _v2 = await _v0.getDevices(_v1);
    return _v1.browserConfig.BROWSER?.name !== "firefox" || _v2.find(_v0 => "audiooutput" === _v0.kind && "default" === _v0.deviceId) ? _v2 : [..._v2, {
      deviceId: "default",
      kind: "audiooutput",
      label: "Default",
      groupId: "",
      toJSON() {
        return JSON.stringify((0, _v7.omit)(this, "toJSON"), (0, _v6.getCircularReplacer)());
      }
    }];
  }
  async function _v13(_v0, _v1) {
    await Promise.all([_v1.hasAudio ? _v0.unsubscribe(_v1, "audio") : Promise.resolve(), _v1.hasVideo ? _v0.unsubscribe(_v1, "video") : Promise.resolve()]);
  }
  _v0.s(["TRACKS_REGISTRY", 0, _v8, "applyAgoraParameter", 0, function (_v0, _v1, _v2) {
    "setParameter" in _v0 && _v0.setParameter(_v1, _v2);
  }, "closeAgoraLocalTracks", 0, function (..._v0) {
    _v11(..._v0).forEach(_v0 => {
      _v8.delete(_v0.getTrackId()), "video" === _v0.trackMediaType && _v0.unpipe(), _v0.close();
    });
  }, "createCameraTrackSafely", 0, function ({
    agoraSDK: _v0,
    devices: _v1,
    deviceId: _v2,
    isMuted: _v3 = !1,
    isHardMuteEnabled: _v4 = !1
  }) {
    return _v1.length ? _v0.createCameraVideoTrack({
      cameraId: _v2 && (0, _v4.isDeviceInList)(_v1, _v2) ? _v2 : void 0,
      encoderConfig: {
        bitrateMax: _v2.liveMediaConfig.LOCAL_MEDIA.BITRATE_MAX,
        bitrateMin: _v2.liveMediaConfig.LOCAL_MEDIA.BITRATE_MIN,
        frameRate: _v2.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS.frameRate,
        width: _v2.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS.width,
        height: _v2.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS.height
      },
      optimizationMode: _v2.liveMediaConfig.LOCAL_MEDIA.OPTIMIZATION_MODE
    }).then(_v0 => ((0, _v4.safelyForceTrackConstraints)(_v0.getMediaStreamTrack(), _v2.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS), _v8.set(_v0.getTrackId(), _v0), (_v4 ? _v0.setEnabled(!_v3) : _v0.setMuted(_v3)).then(() => _v0))).catch(_v0 => _v0) : Promise.resolve(new _v5.LiveError("No devices available.", {
      code: _v3.EAgoraErrorCode.NO_DEVICES
    }));
  }, "createMicrophoneTrackSafely", 0, function ({
    agoraSDK: _v0,
    devices: _v1,
    deviceId: _v2,
    isMuted: _v3 = !1,
    isHardMuteEnabled: _v4 = !1,
    onTrackEnded: _v5
  }) {
    return _v0.createMicrophoneAudioTrack({
      microphoneId: _v2 && (0, _v4.isDeviceInList)(_v1, _v2) ? _v2 : void 0,
      encoderConfig: {
        stereo: _v2.liveMediaConfig.LOCAL_AUDIO.ENCODER.STEREO,
        sampleRate: _v2.liveMediaConfig.LOCAL_AUDIO.ENCODER.SAMPLE_RATE,
        sampleSize: _v2.liveMediaConfig.LOCAL_AUDIO.ENCODER.SAMPLE_SIZE,
        bitrate: _v2.liveMediaConfig.LOCAL_AUDIO.ENCODER.BITRATE
      },
      DTX: _v2.liveMediaConfig.LOCAL_AUDIO.DISCONTINUOUS_TRANSMISSION,
      AEC: _v2.liveMediaConfig.LOCAL_AUDIO.ECHO_CANCELLATION,
      AGC: _v2.liveMediaConfig.LOCAL_AUDIO.AUTO_GAIN,
      ANS: _v2.liveMediaConfig.LOCAL_AUDIO.NOISE_SUPPRESSION
    }).then(_v0 => (_v5 && _v0.on("track-ended", _v5), _v8.set(_v0.getTrackId(), _v0), (_v4 ? _v0.setEnabled(!_v3) : _v0.setMuted(_v3)).then(() => _v0))).catch(_v0 => _v0);
  }, "createScreenTrackSafely", 0, function ({
    agoraSDK: _v0,
    onTrackEnded: _v1
  }) {
    return _v0.createScreenVideoTrack({
      optimizationMode: _v2.liveMediaConfig.LOCAL_SCREEN.OPTIMIZATION_MODE,
      encoderConfig: _v2.liveMediaConfig.LOCAL_SCREEN.ENCODER_PRESET,
      scalabiltyMode: _v2.liveMediaConfig.LOCAL_SCREEN.SVC_PRESET
    }, "disable").then(_v0 => (_v0.on("track-ended", _v1), _v8.set(_v0.getTrackId(), _v0), _v0)).catch(_v0 => _v0);
  }, "filterTracks", 0, _v11, "getActiveAgoraSourceTrack", 0, function (_v0) {
    let _v1 = _v0?.getMediaStreamTrack() || null;
    return _v1 && !_v10(_v0) && "ended" !== _v1.readyState ? _v1 : null;
  }, "getAgoraTrackDeviceId", 0, function (_v0) {
    return _v0.getMediaStreamTrack().getSettings().deviceId;
  }, "getAgoraTrackEncoderConfig", 0, function (_v0) {
    return _v0._encoderConfig;
  }, "getBracketByPixels", 0, function (_v0) {
    if (_v0 >= 0) return ">=4k";
    if (_v0 >= 0) return ">=2k";
    if (_v0 >= 0) return ">=1080p";
    if (_v0 >= 0) return ">=720p";
    if (_v0 >= 0) return ">=540p";else if (_v0 >= 0) return ">=480p";else if (_v0 >= 0) return ">=360p";else return "<360p";
  }, "getDevicesList", 0, _v12, "getTrackVolumeSafely", 0, function (_v0, _v1 = 0) {
    try {
      return _v0 ? _v0.getVolumeLevel() : _v1;
    } catch (_v0) {
      return _v1;
    }
  }, "isAgoraTrack", 0, _v9, "isAgoraTrackMuted", 0, _v10, "setAgoraAudioTrackOutput", 0, function (_v0, _v1) {
    return _v1.browserConfig.BROWSER?.name === "firefox" && "default" === _v1 ? _v0.setPlaybackDevice("") : _v0.setPlaybackDevice(_v1);
  }, "unsubscribeFromAllUserMedia", 0, _v13]);
}