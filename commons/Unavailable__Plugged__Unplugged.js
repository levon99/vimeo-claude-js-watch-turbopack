{
  "use strict";

  let _v1 = {
    UNAVAILABLE: "Unavailable",
    PLUGGED: "Plugged",
    UNPLUGGED: "Unplugged",
    HAS_VIDEO: "Has video",
    ACTIVE: "Active"
  };
  var _v2,
    _v3,
    _v4,
    _v5 = ((_v2 = {}).CONNECTED = "CONNECTED", _v2.DISCONNECTING = "DISCONNECTING", _v2),
    _v6 = ((_v3 = {}).READY = "ready", _v3.GOOD = "good", _v3.UNSTABLE = "unstable", _v3.OFFLINE = "offline", _v3.UNKNOWN = "unknown", _v3),
    _v7 = ((_v4 = {})[_v4.NOT_AVAILABLE = 1] = "NOT_AVAILABLE", _v4[_v4.NOT_CONNECTED = 2] = "NOT_CONNECTED", _v4[_v4.CONNECTED = 3] = "CONNECTED", _v4[_v4.STREAMING = 4] = "STREAMING", _v4);
  _v0.s(["EBackupStreamStatus", () => _v7, "EConnectionState", () => _v5, "EIngestBackupStreamState", 0, _v1, "EStreamStatus", () => _v6], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = {
      avcLevel: "N/A",
      avcProfile: "N/A",
      audioCodec: "N/A",
      currentFps: "N/A",
      currentBitrate: "N/A",
      videoFps: "N/A",
      videoCodec: "N/A",
      resolution: "N/A",
      videoWidth: 0,
      videoHeight: 0,
      connectionState: "N/A",
      averageFps: "N/A",
      averageBitrate: "N/A",
      backupStreamStatus: _v7.NOT_AVAILABLE,
      streamStatus: _v6.UNKNOWN,
      altEncoders: []
    },
    _v15 = {
      [_v1.UNAVAILABLE]: _v7.NOT_AVAILABLE,
      [_v1.PLUGGED]: _v7.NOT_CONNECTED,
      [_v1.UNPLUGGED]: _v7.NOT_CONNECTED,
      [_v1.HAS_VIDEO]: _v7.CONNECTED,
      [_v1.ACTIVE]: _v7.STREAMING
    };
  function _v16(_v0, _v1) {
    return Math.floor((0, _v12.default)(_v0, _v1) / _v0.length);
  }
  function _v17(_v0, _v1) {
    return _v0 > 0 ? _v1 ? _v1(_v0) : _v0 : 0;
  }
  _v0.s(["ENCODER_STATS_STATE_NA", 0, {
    language: "N/A",
    languageLabel: "N/A",
    status: "N/A",
    bitrate: "N/A",
    backup: "N/A"
  }, "STREAM_HEALTH_NA", 0, "N/A", "STREAM_HEALTH_STABLE_FPS_RATE", 0, .8, "STREAM_HEALTH_STATS_STATE_NA", 0, _v14, "STREAM_HEALTH_STATUS_VALUABLE_TICKS_TTL", 0, 0, "STREAM_HEALTH_TICKS_LOST_TIMEOUT", 0, 0, "STREAM_HEALTH_TICKS_TTL", 0, 0, "ingestStateToBackupStreamStatusMap", 0, _v15], 0);
  var _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  function _v20(_v0, _v1) {
    var _v2, _v3;
    let {
        stats: {
          streamStatus: _v4
        }
      } = _v0.context,
      {
        bitrate: _v5,
        fps: _v6
      } = _v1,
      _v7 = (_v2 = [..._v0.context.ticks, {
        ..._v1
      }], _v3 = _v0.getTicksBoundaryTimestamp(), _v2.filter(_v0 => _v0.timestamp >= _v3)),
      _v8 = _v16(_v7, "bitrate"),
      _v9 = _v16(_v7, "fps");
    _v0.setContext({
      ticks: _v7,
      stats: {
        ..._v1,
        currentFps: _v6,
        averageFps: _v9,
        streamStatus: _v4,
        currentBitrate: _v5,
        averageBitrate: _v8
      }
    });
  }
  function _v21(_v0) {
    let {
        streamStatus: _v1
      } = _v0.context.stats,
      _v2 = function (_v0) {
        let {
          ingestStatus: _v1,
          context: {
            ticks: _v2,
            ticksLost: _v3,
            stats: {
              connectionState: _v4,
              videoFps: _v5
            }
          }
        } = _v0;
        if (!_v3 && _v4 === _v5.CONNECTED) switch (_v1) {
          case _v19.EIngestStatus.PROVISION_READY:
            return _v6.READY;
          case _v19.EIngestStatus.STREAMING:
            let _v0 = Date.now() - 0,
              _v1 = _v2.filter(_v0 => _v0.timestamp >= _v0);
            if (!_v1.length) break;
            let _v2 = _v16(_v1, "fps");
            if (!_v5 || "N/A" === _v5) return _v6.UNSTABLE;
            return _v2 < .8 * _v5 ? _v6.UNSTABLE : _v6.GOOD;
          default:
            return _v6.OFFLINE;
        }
        return _v6.UNKNOWN;
      }(_v0);
    _v1 !== _v2 && (_v0.log.info("Stream status updated: ", _v2), _v0.setContext({
      stats: {
        ..._v0.context.stats,
        streamStatus: _v2
      }
    }));
  }
  var _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  class _v24 extends _v22.UnsubscribingContextManager {
    streamKey = null;
    log = new _v10.Logger("🚑STRMHLTH");
    cloudSessionId = null;
    ticksLostTimer = null;
    firebaseApp = null;
    ingestStatus = _v19.EIngestStatus.UNKNOWN;
    firebaseDependencies = null;
    streamHealthCredentials = null;
    context = {
      statsActions: (0, _v9.createActions)({
        addStats: _v0 => {
          this.ingestStatus = _v19.EIngestStatus.STREAMING, _v21(this), _v20(this, _v0);
        },
        resetStats: () => {
          this.ingestStatus = _v19.EIngestStatus.UNKNOWN, _v21(this), this.setContext({
            ticks: [],
            stats: {
              ..._v14
            }
          });
        }
      }),
      ticksLost: !1,
      hasActualConnection: !1,
      ticks: [],
      stats: {
        ..._v14
      }
    };
    getTicksBoundaryTimestamp() {
      return Date.now() - 0;
    }
    onStreamHealthDocumentAdded(_v0) {
      let _v1;
      (_v1 = function (_v0) {
        let _v1 = (0, _v13.camelize)(_v0.event),
          _v2 = _v1.tsMs,
          _v3 = (0, _v13.camelize)(function (_v0) {
            let {
              inputs: _v1
            } = _v0.fields.ingestSessionStatus;
            return (0, _v11.default)(_v1.filter(_v0 => !!_v0.inProgram));
          }(_v1)),
          _v4 = (0, _v13.camelize)(function (_v0) {
            let {
              inputs: _v1
            } = _v0.fields.ingestSessionStatus;
            return _v1.find(_v0 => "RTMP" === _v0.type || "DASH" === _v0.type || "SRT" === _v0.type);
          }(_v1));
        if (_v3) {
          var _v5, _v6, _v7;
          return {
            timestamp: _v2,
            connectionState: _v5[_v3.state],
            guestType: _v3.guestType,
            resolution: (_v5 = _v3.videoWidth, _v6 = _v3.videoHeight, _v5 > 0 && _v6 > 0 ? `${_v5} x ${_v6}` : "N/A"),
            videoWidth: _v3.videoWidth,
            videoHeight: _v3.videoHeight,
            audioCodec: _v3.audioCodec || "N/A",
            avcLevel: String(_v3.videoDecoder.level),
            avcProfile: String(_v3.videoDecoder.profile),
            videoCodec: _v3.videoCodec || "N/A",
            bitrate: _v17(_v3.bitrateForPeriod),
            fps: _v17(_v3.calcVideoFpsBySystimeForPeriod, Math.floor),
            videoFps: _v17(_v3.videoFps, Math.round),
            backupStreamStatus: _v15[(_v7 = _v4) ? _v7.backupStreamState : _v1.UNAVAILABLE],
            altEncoders: _v3.altEncoders
          };
        }
      }(_v0)) && this.onTickDataReceived(_v1);
    }
    onTickDataReceived(_v0) {
      var _v1;
      _v1 = this, _v1.ticksLostTimer && clearTimeout(_v1.ticksLostTimer), _v1.context.ticksLost && (_v1.setContext({
        ticksLost: !1
      }), _v1.log.info("Stream Health ticks restored.")), _v1.ticksLostTimer = setTimeout(() => {
        _v1.setContext({
          ticksLost: !0,
          stats: {
            ..._v14
          }
        }), _v1.log.warn("Stream Health ticks lost.");
      }, 0), _v20(this, _v0), _v21(this);
    }
    tryToSubscribeOnStreamHealthTicksCollection() {
      if (this.context.hasActualConnection) this.log.info("Stream Health manager already has an actual connection.");else if (this.streamKey && this.firebaseDependencies && this.cloudSessionId && this.firebaseApp) {
        let _v0 = function (_v0) {
          let {
            streamKey: _v1,
            cloudSessionId: _v2,
            firebaseDependencies: _v3,
            firebaseApp: _v4
          } = _v0;
          if (_v3 && _v4 && _v1 && _v2) {
            let {
                firebase: _v0,
                firestore: _v1
              } = _v3,
              _v2 = `/streamKeys/${_v1}/sessions/${_v2}/fresnel.bigpicture.studio_ingest_heartbeat`;
            if (_v0 && _v1) {
              let _v0 = (0, _v18.getFirestore)(_v1, _v4),
                _v1 = (0, _v18.getFirestoreCollectionRef)(_v1, _v0, _v2),
                _v2 = (0, _v18.getFirestoreFilterConstraint)(_v1, "created_at", ">", _v0.getTicksBoundaryTimestamp()),
                _v3 = (0, _v18.getFirestoreFilteredQuery)(_v1, _v1, _v2);
              return (0, _v18.onFirestoreQuerySnapshot)(_v1, _v3, _v0 => {
                _v0.docChanges().forEach(_v0 => {
                  "added" === _v0.type && _v0.onStreamHealthDocumentAdded(_v0.doc.data());
                });
              });
            }
          }
        }(this);
        _v0 && this.addUnSubscribers([_v0]), this.setContext({
          hasActualConnection: !0
        }), this.log.info("Stream Health manager successfully connected to the Firestore.");
      } else this.log.info("Stream Health manager are not ready to connect yet", this);
    }
    onProvisionEnded() {
      this.cleanUp();
    }
    cleanUp() {
      this.disposeSubscribers(), this.ticksLostTimer && clearTimeout(this.ticksLostTimer);
    }
    onLiveEventStatusUpdated(_v0) {
      let {
        data: _v1
      } = _v0;
      this.ingestStatus = _v1, _v21(this);
    }
    onCloudSessionIdChange(_v0) {
      let {
        cloudSessionId: _v1
      } = _v0.data;
      return this.cloudSessionId && this.cloudSessionId !== _v1 ? (this.log.info("The context would be reset. Got new cloud session ID: ", _v1), this.cleanUp(), this.setContext({
        hasActualConnection: !1,
        stats: {
          ..._v14
        },
        ticks: [],
        ticksLost: !1
      })) : this.log.info("Cloud session ID received: ", _v1), this.cloudSessionId = _v1, this.tryToSubscribeOnStreamHealthTicksCollection();
    }
    onRtmpStreamKeyReceived(_v0) {
      return this.streamKey = _v0.data, this.log.info("Stream key received:", this.streamKey), this.tryToSubscribeOnStreamHealthTicksCollection();
    }
    async onStreamHealthAppReady(_v0) {
      let {
        firebase: _v1,
        app: _v2,
        credentials: _v3
      } = _v0.data;
      this.firebaseApp = _v2, this.firebaseDependencies = _v1, this.streamHealthCredentials = _v3, this.log.info("Firebase dependencies and stream health credentials are received", _v3), this.tryToSubscribeOnStreamHealthTicksCollection();
    }
  }
  (0, _v8._)([(0, _v9.OnSignal)(_v23.ELiveSignal.LIVE_EVENT_STATUS_UPDATED)], _v24.prototype, "onLiveEventStatusUpdated", null), (0, _v8._)([(0, _v9.OnSignal)(_v23.ELiveSignal.CLOUD_SESSION_ID_CHANGED)], _v24.prototype, "onCloudSessionIdChange", null), (0, _v8._)([(0, _v9.OnSignal)(_v23.ELiveSignal.RTMP_STREAM_KEY_RECEIVED)], _v24.prototype, "onRtmpStreamKeyReceived", null), (0, _v8._)([(0, _v9.OnSignal)(_v23.ELiveSignal.STREAM_HEALTH_CONFIG_READY)], _v24.prototype, "onStreamHealthAppReady", null), _v0.s(["StreamHealthManager", 0, _v24], 0);
}