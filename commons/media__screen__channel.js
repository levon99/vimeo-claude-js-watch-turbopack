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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  class _v11 extends _v9.AbstractAgoraManager {
    context = {
      agoraActions: (0, _v2.createActions)({
        setLogLevel: _v0 => (0, _v10.setLogLevel)(this, _v0),
        setLogUpload: _v0 => (0, _v10.setLogUpload)(this, _v0),
        getMediaRTCStats: () => this.mediaClient?.getRTCStats() || null,
        getScreenRTCStats: () => this.screenClient?.getRTCStats() || null,
        getScreenStats: () => this.screenClient?.getLocalVideoStats() || null,
        getVideoStats: () => this.mediaClient?.getLocalVideoStats() || null,
        getAudioStats: () => this.mediaClient?.getLocalAudioStats() || null,
        getPeerRTCReport: () => (0, _v10.getPeerRTCReport)(this),
        getPerformanceReport: () => (0, _v10.getPerformanceReport)(this),
        getRemoteNetworkQuality: () => this.mediaClient?.getRemoteNetworkQuality() || {},
        getAgoraStatsCollector: () => this.statsCollector,
        getMediaClient: () => this.mediaClient,
        getScreenClient: () => this.screenClient
      }),
      connectionConfig: null,
      mediaUid: (0, _v2.createLoadable)(null),
      mediaConnectionState: _v5.EAgoraConnectionState.DISCONNECTED,
      mediaConnectionQuality: (0, _v2.createNested)({
        downlinkNetworkQuality: _v5.EAgoraNetworkQuality.UNKNOWN,
        uplinkNetworkQuality: _v5.EAgoraNetworkQuality.UNKNOWN
      }),
      screenUid: (0, _v2.createLoadable)(null),
      screenConnectionState: _v5.EAgoraConnectionState.DISCONNECTED,
      screenConnectionQuality: (0, _v2.createNested)({
        downlinkNetworkQuality: _v5.EAgoraNetworkQuality.UNKNOWN,
        uplinkNetworkQuality: _v5.EAgoraNetworkQuality.UNKNOWN
      }),
      isSupported: null,
      isReady: !1,
      isDestroyed: !1,
      role: _v5.EClientRole.HOST,
      isMediaJoined: !1,
      isScreenJoined: !1,
      mediaJoinedAt: null,
      screenJoinedAt: null,
      roomParticipants: [],
      roomVolume: (0, _v2.createNested)({}),
      roomVolumeSmooth: (0, _v2.createNested)({})
    };
    async loadInitialAgoraConfig() {
      this.assertConnectionsInitialized();
      let {
        uid: _v0,
        channel: _v1,
        cloudProxy: _v2,
        appId: _v3,
        media: _v4,
        screen: _v5
      } = await (0, _v3.getGuestAgoraCredentials)({
        connection: this.connections.getRtcCredentials,
        gctlConfig: (0, _v4.queryManagerGctlConfig)(this),
        fields: ["media", "uid", "screen", "channel", "cloud_proxy", "app_id"]
      });
      return {
        uid: _v0,
        appid: _v3,
        channel: _v1,
        cloudProxy: _v2,
        media: _v4,
        screen: _v5
      };
    }
    async loadRefreshedAgoraConfig() {
      this.assertConnectionsInitialized();
      let {
        connectionConfig: _v0
      } = this.context;
      if (_v0) {
        let {
          uid: _v0,
          channel: _v1,
          cloudProxy: _v2,
          appId: _v3,
          media: _v4,
          screen: _v5
        } = await (0, _v3.getGuestAgoraCredentials)({
          connection: this.connections.getRtcCredentials,
          gctlConfig: (0, _v4.queryManagerGctlConfig)(this),
          fields: ["media", "uid", "screen", "channel", "cloud_proxy", "app_id"]
        });
        return {
          uid: _v0,
          channel: _v1,
          cloudProxy: _v2,
          appid: _v3,
          media: _v4,
          screen: _v5
        };
      }
      throw new _v6.LiveError("Cannot refresh tokens for not fetched credentials.");
    }
    canPublishLocalMedia(_v0) {
      let {
        data: _v1
      } = this.queryDataSync({
        type: _v7.EGuestQuery.SESSION_JOINED
      });
      return _v1 && super.canPublishLocalMedia(_v0);
    }
    canPublishLocalScreen(_v0) {
      let {
        data: _v1
      } = this.queryDataSync({
        type: _v7.EGuestQuery.SESSION_JOINED
      });
      return _v1 && super.canPublishLocalScreen(_v0);
    }
    onGuestSessionJoined() {
      return this.attemptToPublishLocalMedia();
    }
    onGuestSessionLeft() {
      return (0, _v10.attemptToUnPublishConnectionTracks)(this);
    }
    onAgoraConnectionRemoved() {
      return (0, _v10.destroy)(this);
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v8.EGuestSignal.SESSION_JOINED)], _v11.prototype, "onGuestSessionJoined", null), (0, _v1._)([(0, _v2.OnSignal)(_v8.EGuestSignal.SESSION_LEFT)], _v11.prototype, "onGuestSessionLeft", null), (0, _v1._)([(0, _v2.OnSignal)(_v8.EAgoraSignal.AGORA_CONNECTION_REMOVED_FROM_SESSION)], _v11.prototype, "onAgoraConnectionRemoved", null), _v0.s(["GuestAgoraManager", 0, _v11]);
}