{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0, _v1) {
    return !!_v0 && String(_v0).startsWith(`${_v1}${_v1.liveMediaConfig.AGORA.UID_META_SEPARATOR}`);
  }
  _v0.s(["formatConnectionUidByType", 0, function (_v0, _v1) {
    return `${_v0}${_v1.liveMediaConfig.AGORA.UID_META_SEPARATOR}${_v1}`;
  }, "getRtcPeer", 0, function (_v0) {
    return _v0._p2pChannel?.connection?.peerConnection || null;
  }, "isAgoraClientConnected", 0, function (_v0) {
    return !!(_v0 && _v0.connectionState === _v2.EAgoraConnectionState.CONNECTED);
  }, "isAgoraClientConnecting", 0, function (_v0) {
    return !!(_v0 && (_v0.connectionState === _v2.EAgoraConnectionState.CONNECTING || _v0.connectionState === _v2.EAgoraConnectionState.RECONNECTING));
  }, "isAgoraClientDisconnected", 0, function (_v0) {
    return !!(!_v0 || _v0.connectionState === _v2.EAgoraConnectionState.DISCONNECTED || _v0.connectionState === _v2.EAgoraConnectionState.DISCONNECTING);
  }, "isAgoraConnectionType", 0, _v3, "isAgoraScreenConnectionType", 0, function (_v0) {
    return _v3(_v0, _v2.EAgoraConnectionType.GUEST_SCREEN) || _v3(_v0, _v2.EAgoraConnectionType.BROADCASTER_SCREEN);
  }, "mapUidToGraphicsSource", 0, function (_v0) {
    return _v3(_v0, _v2.EAgoraConnectionType.BROADCASTER) ? _v2.EAgoraConnectionType.BROADCASTER : _v0;
  }, "parseAgoraConnectionDetails", 0, function (_v0) {
    if (_v0 === _v2.EAgoraConnectionType.BROADCASTER || _v0 === _v2.EAgoraConnectionType.SCREEN) return [_v0, _v0];
    let _v1 = String(_v0).split(_v1.liveMediaConfig.AGORA.UID_META_SEPARATOR);
    return _v1?.length === 2 ? _v1 : null;
  }, "parseConnectionTypeFromUid", 0, function (_v0) {
    let _v1 = String(_v0).split(_v1.liveMediaConfig.AGORA.UID_META_SEPARATOR)[0];
    return _v2.EAgoraConnectionType[_v1] || _v2.EAgoraConnectionType.UNKNOWN;
  }, "parseUidFromAgora", 0, function (_v0) {
    let _v1 = String(_v0).split(_v1.liveMediaConfig.AGORA.UID_META_SEPARATOR);
    return 2 === _v1.length ? _v1[1] : null;
  }]);
}