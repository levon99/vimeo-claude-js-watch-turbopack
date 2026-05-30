{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  async function _v6() {
    let _v0 = (await window.navigator.mediaDevices.enumerateDevices()).filter(_v0 => -1 === _v0.kind.indexOf("output")).map((_v0, _v1) => ({
      ..._v0.toJSON(),
      label: _v0.label
    })).sort((_v0, _v1) => Number(_v7(_v0)) - Number(_v7(_v1)));
    return {
      audioDevices: _v0.filter(_v0 => "audioinput" === _v0.kind),
      videoDevices: _v0.filter(_v0 => "videoinput" === _v0.kind)
    };
  }
  function _v7(_v0) {
    let _v1 = _v0.label;
    return -1 !== _v1.indexOf("Disabled") ? _v3.EDeviceWeight.DISABLED : -1 !== _v1.indexOf("FaceTime") ? _v3.EDeviceWeight.FACETIME : _v1.match(/(Blackmagic)|(Decklink)|(UltraStudio)/i) ? _v3.EDeviceWeight.OTHER : -1 !== _v1.indexOf("Unknown") ? _v3.EDeviceWeight.UNKNOWN : _v3.EDeviceWeight.NORMAL;
  }
  _v0.s(["addMediaDeviceChangeListener", 0, function (_v0) {
    window.navigator.mediaDevices.addEventListener ? window.navigator.mediaDevices.addEventListener("devicechange", _v0) : window.navigator.mediaDevices.ondevicechange = _v0;
  }, "areSameVideos", 0, function (_v0, _v1) {
    let _v2 = (0, _v1.default)(_v0.getVideoTracks()) || null,
      _v3 = (0, _v1.default)(_v1.getVideoTracks()) || null;
    return !!_v2 && !!_v3 && _v2.id === _v3.id;
  }, "getFirstMediaDeviceId", 0, function (_v0) {
    let _v1 = (0, _v1.default)(_v0) || null;
    return _v1 ? _v1.deviceId : "";
  }, "getMediaDevices", 0, _v6, "getMediaError", 0, function (_v0) {
    switch (_v0.name) {
      case "NotReadableError":
        return _v3.EMediaError.DEVICE_BUSY;
      case "NotFoundError":
        return _v3.EMediaError.NO_DEVICES;
      case "NotAllowedError":
        return _v3.EMediaError.DEVICE_NOT_AVAILABLE;
      default:
        return _v3.EMediaError.DEVICE_ABORTED;
    }
  }, "getStreamAudioTrack", 0, function (_v0) {
    return _v0 && (0, _v1.default)(_v0.getAudioTracks()) || null;
  }, "getStreamVideoTrack", 0, function (_v0) {
    return _v0 && (0, _v1.default)(_v0.getVideoTracks()) || null;
  }, "isDeviceInList", 0, function (_v0, _v1) {
    return -1 !== _v0.findIndex(_v0 => _v0.deviceId === _v1);
  }, "isMediaAccessGranted", 0, function ({
    audioDevices: _v0,
    videoDevices: _v1
  }) {
    return _v0.concat(_v1).some(_v0 => "" !== _v0.label);
  }, "isMediaDeviceInList", 0, function (_v0, _v1) {
    return !!_v0.find(_v0 => _v0.deviceId === _v1);
  }, "mergeStreams", 0, function (_v0, _v1) {
    let _v2 = _v1 ? (0, _v1.default)(_v1.getVideoTracks()) : void 0,
      _v3 = _v1 ? (0, _v1.default)(_v1.getAudioTracks()) : void 0,
      _v4 = (0, _v1.default)(_v0.getVideoTracks()),
      _v5 = (0, _v1.default)(_v0.getAudioTracks()),
      _v6 = new MediaStream();
    return _v4 ? (_v2 && _v2.stop(), _v6.addTrack(_v4)) : _v2 && _v6.addTrack(_v2), _v5 ? (_v3 && _v3.stop(), _v6.addTrack(_v5)) : _v3 && _v6.addTrack(_v3), _v6;
  }, "normalizeDevicesInfo", 0, function (_v0) {
    return _v0.map(_v0 => ({
      kind: _v0.kind,
      deviceId: _v0.deviceId,
      groupId: _v0.groupId,
      label: _v0.label.replace(_v2.liveMediaConfig.DEVICE_NAME_HASH_REGEX, ""),
      toJSON() {
        return JSON.stringify((0, _v5.omit)(this, "toJSON"), (0, _v4.getCircularReplacer)());
      }
    }));
  }, "removeMediaDeviceChangeListener", 0, function (_v0) {
    window.navigator.mediaDevices.removeEventListener ? window.navigator.mediaDevices.removeEventListener("devicechange", _v0) : window.navigator.mediaDevices.ondevicechange = null;
  }, "safelyForceTrackConstraints", 0, function (_v0, _v1) {
    _v0 && _v0.applyConstraints(_v1).catch(() => {});
  }, "setStreamAudioState", 0, function (_v0, _v1) {
    return _v0 ? _v0.getAudioTracks().forEach(_v0 => _v0.enabled = _v1) : void 0;
  }, "shallowCloneAudioStream", 0, function (_v0) {
    if (!_v0) return null;
    let _v1 = new MediaStream();
    return _v0.getAudioTracks().forEach(_v0 => _v1.addTrack(_v0)), _v1;
  }, "stopStreamVideoTracks", 0, function (_v0) {
    return _v0 ? _v0.getVideoTracks().forEach(_v0 => {
      _v0.stop(), _v0.removeTrack(_v0);
    }) : void 0;
  }]);
}