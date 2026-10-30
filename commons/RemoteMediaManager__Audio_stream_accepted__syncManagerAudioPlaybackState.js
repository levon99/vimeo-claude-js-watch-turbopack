{
  "use strict";

  _v0.s(["RemoteMediaManager", () => _v17], 0);
  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  function _v12({
    manager: _v0,
    uid: _v1,
    type: _v2
  }) {
    let {
        isAudioPlaybackEnabled: _v3,
        isProgramAudioPlayback: _v4
      } = _v0.context,
      {
        currentScene: _v5,
        currentAudioMode: _v6
      } = _v0.audioSyncContext;
    if (!(_v3 && _v17.SPEAKER_CONNECTIONS.includes(_v2))) return _v5.EAudioVolume.MUTED;
    switch (_v6) {
      case _v5.EAudioMixingMode.ALL:
        return _v5.EAudioVolume.FULL;
      case _v5.EAudioMixingMode.SCENE:
        let _v0 = (0, _v7.isAgoraConnectionInScene)(_v1, _v5);
        if (_v4) return _v0 ? _v5.EAudioVolume.FULL : _v5.EAudioVolume.MUTED;
        return _v5.EAudioVolume.FULL;
    }
  }
  async function _v13(_v0) {
    let {
        roomMedia: _v1
      } = _v0.context,
      _v2 = _v4.browserConfig.FEATURE.CAN_USE_OUTPUT_DEVICE ? _v0.queryDataSync({
        type: _v10.ELiveMediaQuery.CURRENT_PLAYBACK_DEVICE
      }) : null,
      _v3 = !1,
      _v4 = _v1.map(_v0 => {
        let _v1 = _v12({
          manager: _v0,
          uid: _v0.uid,
          type: _v0.type
        });
        if (_v1 !== _v0.volume && (_v3 = !0), _v0.audio) {
          if (_v0.audio.isPlaying || (_v0.log.info("Audio stream accepted:", _v0), _v0.audio.play()), _v2?.data.playbackDeviceId) {
            let {
              data: {
                playbackDeviceId: _v0
              }
            } = _v2;
            (0, _v6.setAgoraAudioTrackOutput)(_v0.audio, _v0).catch(_v0 => {
              (0, _v9.trackLiveError)(_v0, {
                category: _v8.ELiveErrorCategory.AGORA,
                method: "syncManagerAudioPlaybackState",
                data: {
                  playbackDeviceId: _v0
                }
              });
            });
          }
          _v0.audio.setVolume(_v1);
        }
        return {
          ..._v0,
          volume: _v1
        };
      });
    _v3 && _v0.setContext({
      roomMedia: _v4
    });
  }
  var _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  class _v17 extends _v2.ContextManager {
    static SPEAKER_CONNECTIONS = [_v14.EAgoraConnectionType.BROADCASTER, _v14.EAgoraConnectionType.GUEST, _v14.EAgoraConnectionType.MEDIA];
    context = {
      remoteMediaActions: {
        setMediaVolume: (_v0, _v1) => this.setMediaVolume(_v0, _v1),
        setMediaQuality: (_v0, _v1) => this.setMediaQuality(_v0, _v1),
        setBulkMediaQuality: _v0 => this.setBulkMediaQuality(_v0)
      },
      isAudioPlaybackEnabled: !1,
      isProgramAudioPlayback: !1,
      roomMedia: []
    };
    audioSyncContext = {
      currentAudioMode: _v16.liveApplicationConfig.MEDIA.DEFAULT_AUDIO_MIXING_MODE,
      currentSpeakerUid: "",
      currentScene: null
    };
    log = new _v3.Logger("🦋RMCM");
    constructor(_v0) {
      super();
      const _v1 = !!_v0?.media?.isRoomAudioPlayingByDefault;
      this.log.info("Initialize remote media, should play audio:", _v1), this.context.isAudioPlaybackEnabled = _v1;
    }
    onProvisionEnded() {
      let {
        roomMedia: _v0
      } = this.context;
      _v0.forEach(_v0 => _v0.audio?.stop());
    }
    setAudioPlaybackEnabled(_v0) {
      this.log.info("Enabling audio playback"), this.setContext({
        isAudioPlaybackEnabled: _v0
      }), this.syncManagerAudioPlaybackState();
    }
    setMediaQuality(_v0, _v1) {
      return (0, _v9.withLiveErrorTracking)(() => function (_v0, _v1, _v2) {
        let {
            roomMedia: _v3
          } = _v0.context,
          _v4 = _v3.find(_v0 => _v0.uid === _v1);
        !_v0.IS_DISPOSED && _v4 && _v4.quality !== _v2 && _v0.emitSignal({
          data: {
            uid: _v1,
            quality: _v2
          },
          type: _v11.EAgoraSignal.AGORA_MEDIA_QUALITY_CHANGE_REQUIRED
        });
      }(this, _v0, _v1), {
        method: "setMediaQuality",
        data: {
          context: this.context
        },
        category: _v8.ELiveErrorCategory.MEDIA
      });
    }
    setBulkMediaQuality(_v0) {
      return (0, _v9.withLiveErrorTracking)(() => function (_v0, _v1) {
        let {
          roomMedia: _v2
        } = _v0.context;
        if (_v0.IS_DISPOSED) return;
        let _v3 = Object.entries(_v1).reduce((_v0, [_v1, _v2]) => {
          let _v3 = _v2.find(_v0 => _v0.uid === _v1);
          return _v3 && _v3.quality !== _v2 && (_v0[_v1] = _v2), _v0;
        }, {});
        _v0.emitSignal({
          data: _v3,
          type: _v11.EAgoraSignal.AGORA_MEDIA_BULK_QUALITY_CHANGE_REQUIRED
        });
      }(this, _v0), {
        method: "setBulkMediaQuality",
        data: {
          context: this.context
        },
        category: _v8.ELiveErrorCategory.MEDIA
      });
    }
    setMediaVolume(_v0, _v1) {
      return (0, _v9.withLiveErrorTracking)(() => function (_v0, _v1, _v2) {
        _v0.log.info("Changing audio volume for user:", _v1, _v2);
        let {
            roomMedia: _v3
          } = _v0.context,
          _v4 = _v3.findIndex(_v0 => _v0.uid === _v1);
        if (-1 !== _v4) {
          let _v0 = _v3[_v4],
            _v1 = Array.from(_v3);
          _v1[_v4] = {
            ..._v0,
            volume: _v2
          }, _v0.setContext({
            roomMedia: _v1
          }), _v0.audio && _v0.audio.setVolume(_v2);
        } else _v0.log.warn("Could not update audio volume for non-existing user");
      }(this, _v0, _v1), {
        method: "setMediaVolume",
        data: {
          context: this.context
        },
        category: _v8.ELiveErrorCategory.MEDIA
      });
    }
    async syncManagerAudioPlaybackState() {
      return (0, _v9.withLiveErrorTracking)(() => _v13(this), {
        method: "syncManagerAudioPlaybackState",
        data: {
          context: this.context
        },
        category: _v8.ELiveErrorCategory.MEDIA
      });
    }
    onRemoteMediaReceived(_v0) {
      !function (_v0, _v1) {
        let {
            roomMedia: _v2
          } = _v0.context,
          {
            user: _v3,
            mediaType: _v4,
            track: _v5
          } = _v1.data,
          _v6 = _v2.findIndex(_v0 => _v0.uid === _v3.uid),
          _v7 = (0, _v15.parseConnectionTypeFromUid)(_v3.uid),
          _v8 = -1 !== _v6 ? {
            ..._v2[_v6]
          } : {
            audio: null,
            video: null,
            volume: _v12({
              manager: _v0,
              uid: _v3.uid,
              type: _v7
            }),
            uid: _v3.uid,
            type: _v7,
            quality: _v14.EStreamQuality.LOW,
            connectedAt: Date.now()
          },
          _v9 = Array.from(_v2);
        _v0.log.info("Confirmed media received:", _v3.uid, _v4, _v6), "video" === _v4 ? _v8.video = _v5 : _v8.audio = _v5, -1 === _v6 ? _v9.push(_v8) : _v9[_v6] = _v8, _v0.setContext({
          roomMedia: _v9
        }), _v0.syncManagerAudioPlaybackState();
      }(this, _v0);
    }
    onRemoteMediaRemoved(_v0) {
      !function (_v0, _v1) {
        let {
            user: _v2,
            mediaType: _v3
          } = _v1.data,
          {
            roomMedia: _v4
          } = _v0.context,
          _v5 = _v4.findIndex(_v0 => _v0.uid === _v2.uid);
        if (-1 === _v5) return _v0.log.info("Unsubscribed from not-existing user media:", _v2.uid, _v3);
        _v0.log.info("Unsubscribing from user media:", _v2.uid, _v3);
        let _v6 = {
          ..._v4[_v5]
        };
        "video" === _v3 ? _v6.video = null : (_v6.audio?.stop(), _v6.audio = null);
        let _v7 = Array.from(_v4);
        _v7[_v5] = _v6, _v0.setContext({
          roomMedia: _v7
        }), _v0.log.info("Unsubscribed from user media:", _v3, _v2);
      }(this, _v0);
    }
    onRemoteUserLeft(_v0) {
      !function (_v0, _v1) {
        let {
            data: _v2
          } = _v1,
          {
            roomMedia: _v3
          } = _v0.context,
          _v4 = _v3.filter(_v0 => (_v0.uid === _v2.uid && _v0.audio?.stop(), _v0.uid !== _v2.uid));
        _v0.setContext({
          roomMedia: _v4
        });
      }(this, _v0);
    }
    onRemoteMediaQualityChanged(_v0) {
      !function (_v0, _v1) {
        let {
            uid: _v2,
            quality: _v3
          } = _v1.data,
          {
            roomMedia: _v4
          } = _v0.context;
        _v0.log.info("Media change quality confirmed:", _v2, _v14.EStreamQuality[_v3]);
        let _v5 = _v4.findIndex(_v0 => _v0.uid === _v2);
        if (-1 !== _v5) {
          let _v0 = _v4[_v5],
            _v1 = Array.from(_v4);
          _v1[_v5] = {
            ..._v0,
            quality: _v3
          }, _v0.setContext({
            roomMedia: _v1
          });
        } else _v0.log.warn("Media quality changed for non-accounted media:", _v2, _v3);
      }(this, _v0);
    }
    onOutputDeviceChanged() {
      this.syncManagerAudioPlaybackState();
    }
    onSceneInProgramChangedDetected(_v0) {
      this.audioSyncContext.currentScene = _v0.data, this.setContext({
        isProgramAudioPlayback: (0, _v7.isAgoraConnectionInScene)(this.audioSyncContext.currentSpeakerUid, this.audioSyncContext.currentScene)
      }), this.syncManagerAudioPlaybackState();
    }
    onAudioMixingModeChanged(_v0) {
      this.audioSyncContext.currentAudioMode = _v0.data, this.syncManagerAudioPlaybackState();
    }
    onAgoraConfigLoaded(_v0) {
      this.audioSyncContext.currentSpeakerUid = _v0.data.media.uid, this.setContext({
        isProgramAudioPlayback: (0, _v7.isAgoraConnectionInScene)(this.audioSyncContext.currentSpeakerUid, this.audioSyncContext.currentScene)
      }), this.syncManagerAudioPlaybackState();
    }
    onEnableAudioPlayback() {
      this.setAudioPlaybackEnabled(!0);
    }
    onDisableAudioPlayback() {
      this.setAudioPlaybackEnabled(!1);
    }
    onLiveEventEnded() {
      return this.context.roomMedia.forEach(_v0 => _v0.audio?.stop()), this.setContext({
        roomMedia: []
      });
    }
    getCurrentRemoteMedia() {
      return this.context.roomMedia;
    }
  }
  (0, _v1._)([(0, _v2.OnSignal)(_v11.EAgoraSignal.AGORA_MEDIA_RECEIVED)], _v17.prototype, "onRemoteMediaReceived", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EAgoraSignal.AGORA_MEDIA_REMOVED)], _v17.prototype, "onRemoteMediaRemoved", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EAgoraSignal.AGORA_USER_LEFT)], _v17.prototype, "onRemoteUserLeft", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EAgoraSignal.AGORA_MEDIA_QUALITY_CHANGED)], _v17.prototype, "onRemoteMediaQualityChanged", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.ELiveMediaSignal.OUTPUT_DEVICE_CHANGED)], _v17.prototype, "onOutputDeviceChanged", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.ELiveGraphicsSignal.SCENE_IN_PROGRAM_CHANGED)], _v17.prototype, "onSceneInProgramChangedDetected", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.ELiveSignal.AUDIO_MIXING_MODE_CHANGED)], _v17.prototype, "onAudioMixingModeChanged", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EAgoraSignal.AGORA_CONFIG_LOADED)], _v17.prototype, "onAgoraConfigLoaded", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EGuestSignal.SESSION_JOINED)], _v17.prototype, "onEnableAudioPlayback", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.EGuestSignal.SESSION_LEFT)], _v17.prototype, "onDisableAudioPlayback", null), (0, _v1._)([(0, _v2.OnSignal)(_v11.ELiveSignal.LIVE_EVENT_ENDED)], _v17.prototype, "onLiveEventEnded", null), (0, _v1._)([(0, _v2.OnQuery)(_v10.ELiveMediaQuery.CURRENT_REMOTE_MEDIA)], _v17.prototype, "getCurrentRemoteMedia", null);
}