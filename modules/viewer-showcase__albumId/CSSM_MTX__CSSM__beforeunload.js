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
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  class _v17 extends _v2.ContextManager {
    context = {
      liveComposerStatusActions: (0, _v2.createActions)({
        activateCloudStudio: () => this.activateCloudStudio(),
        startStream: () => this.startStream(),
        endStream: () => this.endStream(),
        startIngestStatusPolling: () => this.startIngestStatusPolling(),
        stopIngestStatusPolling: () => this.stopIngestStatusPolling(),
        loadSessionStatus: _v0 => this.loadSessionStatus(_v0),
        setStreamMode: _v0 => this.setStreamMode(_v0),
        setRecordState: _v0 => this.setContext({
          recordState: _v0
        }),
        sendRecordStateCommand: _v0 => this.sendRecordStateCommand(_v0)
      }),
      liveComposerStatusGetters: (0, _v2.createActions)({
        isReady: () => this.isReady(),
        isEnded: () => this.isEnded(),
        isStreaming: () => this.isStreaming(),
        isPreparing: () => this.isPreparing(),
        isUnavailable: () => this.isUnavailable(),
        isRecordStarted: () => this.isRecordStarted(),
        isRecordEnded: () => this.isRecordEnded(),
        isRecordDeleted: () => this.isRecordDeleted()
      }),
      liveComposerStatuses: (0, _v2.createComputed)(({
        cloudSessionEncoderType: _v0,
        ingestStatus: _v1,
        isProvisionStarting: _v2,
        isProvisionUpdating: _v3,
        streamEndedReason: _v4,
        streamMode: _v5
      }) => ({
        isRtcMode: _v0 === _v11.EEncoderType.SIMPLE_LIVE,
        isRtmpMode: _v0 === _v11.EEncoderType.DASH || _v0 === _v11.EEncoderType.RTMP || _v0 === _v11.EEncoderType.SRT,
        isSessionInitializing: _v3 || _v2,
        isSessionRequested: _v1 === _v11.EIngestStatus.PROVISION_REQUESTED,
        isSessionUpdating: _v3 || _v2,
        isSessionActive: _v1 === _v11.EIngestStatus.PROVISION_READY || _v1 === _v11.EIngestStatus.STREAMING,
        isSessionEnded: _v1 === _v11.EIngestStatus.ENDED,
        isSessionLive: _v1 === _v11.EIngestStatus.STREAMING,
        isSessionPreparing: _v1 !== _v11.EIngestStatus.STREAMING && _v1 !== _v11.EIngestStatus.ENDED && !_v2,
        isSessionUnavailable: _v1 === _v11.EIngestStatus.PROVISION_EXPIRED || _v1 === _v11.EIngestStatus.UNAVAILABLE,
        isSessionExpired: _v1 === _v11.EIngestStatus.PROVISION_EXPIRED,
        isSessionReady: _v1 === _v11.EIngestStatus.PROVISION_READY,
        isSessionRecordStarted: _v1 === _v11.EIngestStatus.STREAMING && _v5 === _v9.EComposerStreamModeType.RECORD,
        isSessionRecordEnded: _v1 === _v11.EIngestStatus.ENDED && _v5 === _v9.EComposerStreamModeType.RECORD && _v4 === _v11.EStreamEndedReason.NORMAL,
        isSessionRecordDeleted: _v1 === _v11.EIngestStatus.ENDED && _v5 === _v9.EComposerStreamModeType.RECORD && _v4 === _v11.EStreamEndedReason.RECORDING_WAS_DELETED,
        isSessionUnknown: _v1 === _v11.EIngestStatus.UNKNOWN
      })),
      sessionApplicationType: _v9.EComposerApplicationType.UNKNOWN,
      ingestStatus: _v11.EIngestStatus.UNKNOWN,
      metering: null,
      cloudSessionId: null,
      cloudSessionEncoderType: _v11.EEncoderType.UNKNOWN,
      startedAt: null,
      endedAt: null,
      scheduledStartTime: null,
      isHydrated: !1,
      isProvisionUpdating: !1,
      isProvisionStarting: !1,
      streamMode: _v9.EComposerStreamModeType.LIVE,
      isSimultaneousStreamLimitExceeded: !1,
      isDurationStreamLimitExceeded: !1,
      isProvisionLimitReached: !1,
      sessionType: null,
      recordState: _v9.ERecordState.NOT_ACTIVE,
      isResumePauseLoading: !1,
      streamEndedReason: null,
      videoWidth: null,
      videoHeight: null
    };
    isManagementAccessRequired;
    uuid = (0, _v3.v4)();
    connections = null;
    type = null;
    ingestStatusErrors = new Map();
    ingestStatusInterval = 0;
    ingestStartLastRequestedAt = 0;
    mutex = new _v4.Mutex({
      logEnabled: !1,
      name: "🌵CSSM MTX"
    });
    log = new _v5.Logger("🌵CSSM");
    constructor(_v0) {
      super(), this.context.sessionApplicationType = _v0?.sessionApplicationType ?? _v9.EComposerApplicationType.UNKNOWN, this.isManagementAccessRequired = [_v9.EComposerApplicationType.BROADCASTER, _v9.EComposerApplicationType.RTMP, _v9.EComposerApplicationType.COMPLETED].includes(this.context.sessionApplicationType), this.context.sessionType = _v0?.sessionType ?? null;
    }
    onProvisionStarted() {
      window.addEventListener("beforeunload", this.onBeforeUnload), this.startIngestStatusPolling();
    }
    onProvisionEnded() {
      window.removeEventListener("beforeunload", this.onBeforeUnload), this.stopIngestStatusPolling(), this.mutex.cancel();
    }
    async startStream() {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v6.startStream)(this), {
        method: "startStream",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    async endStream() {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v6.endStream)(this), {
        method: "endStream",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    async activateCloudStudio() {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v6.activateCloudStudio)(this), {
        method: "activateCloudStudio",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    async loadSessionStatus(_v0 = {}) {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v7.loadSessionStatus)(this, _v0), {
        method: "loadSessionStatus",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    async setStreamMode(_v0) {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v6.setStreamMode)(this, _v0), {
        method: "setStreamMode",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    async sendRecordStateCommand(_v0) {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v6.setRecordingState)(this, _v0), {
        method: "setRecordingState",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    startIngestStatusPolling() {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v7.startIngestStatusPolling)(this), {
        method: "startIngestStatusPolling",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    stopIngestStatusPolling() {
      return (0, _v14.withLiveErrorTracking)(() => (0, _v7.stopIngestStatusPolling)(this), {
        method: "stopIngestStatusPolling",
        category: _v13.ELiveErrorCategory.LIVE,
        data: {
          context: this.context
        }
      });
    }
    isInitialized() {
      return !!(this.connections && !this.IS_DISPOSED);
    }
    isReady() {
      return this.context.ingestStatus !== _v11.EIngestStatus.UNKNOWN;
    }
    isStreaming() {
      return this.context.ingestStatus === _v11.EIngestStatus.STREAMING;
    }
    isRecordStarted() {
      let {
        ingestStatus: _v0,
        streamMode: _v1
      } = this.context;
      return _v0 === _v11.EIngestStatus.STREAMING && _v1 === _v9.EComposerStreamModeType.RECORD;
    }
    isRecordEnded() {
      let {
        ingestStatus: _v0,
        streamMode: _v1,
        streamEndedReason: _v2
      } = this.context;
      return _v0 === _v11.EIngestStatus.ENDED && _v1 === _v9.EComposerStreamModeType.RECORD && _v2 === _v11.EStreamEndedReason.NORMAL;
    }
    isRecordDeleted() {
      let {
        ingestStatus: _v0,
        streamMode: _v1,
        streamEndedReason: _v2
      } = this.context;
      return _v0 === _v11.EIngestStatus.ENDED && _v1 === _v9.EComposerStreamModeType.RECORD && _v2 === _v11.EStreamEndedReason.RECORDING_WAS_DELETED;
    }
    isPreparing() {
      let {
        ingestStatus: _v0,
        isProvisionStarting: _v1
      } = this.context;
      return _v0 !== _v11.EIngestStatus.STREAMING && _v0 !== _v11.EIngestStatus.ENDED && !_v1;
    }
    isUnavailable() {
      let {
        ingestStatus: _v0
      } = this.context;
      return _v0 === _v11.EIngestStatus.PROVISION_EXPIRED || _v0 === _v11.EIngestStatus.UNAVAILABLE;
    }
    isEnded() {
      let {
        ingestStatus: _v0
      } = this.context;
      return _v0 === _v11.EIngestStatus.ENDED;
    }
    assertIsInitialized() {
      if (!this.isInitialized()) throw new _v12.LiveError("Live event status manager is not initialized.", {
        code: _v10.ELiveErrorCode.INITIALIZATION
      });
    }
    onBeforeUnload(_v0) {
      let {
          ingestStatus: _v1
        } = this.context,
        _v2 = this.queryDataSync({
          type: _v15.ELiveConnectionQuery.CURRENT_EVENT_CONNECTION_TYPE
        });
      return _v1 !== _v11.EIngestStatus.STREAMING || _v2?.data !== _v8.EEventConnectionType.BROADCASTER || (this.log.info("Tried to close tab when event is in live state"), _v0.returnValue = !1, !1);
    }
    async onScenePushed(_v0) {
      let {
        ingestStatus: _v1,
        isProvisionUpdating: _v2,
        isProvisionStarting: _v3
      } = this.context;
      _v2 || _v3 || _v1 !== _v11.EIngestStatus.UNAVAILABLE && _v1 !== _v11.EIngestStatus.PROVISION_EXPIRED || (this.log.info("Requesting studio provision on scene push:", _v11.EIngestStatus[_v1]), await this.activateCloudStudio());
    }
    onLiveEventEnded() {
      this.setContext({
        ingestStatus: _v11.EIngestStatus.ENDED
      }), this.stopIngestStatusPolling();
    }
    onRemovedFromAgoraSession() {
      this.context.sessionApplicationType !== _v9.EComposerApplicationType.RTMP && (this.setContext({
        ingestStatus: _v11.EIngestStatus.UNKNOWN
      }), this.stopIngestStatusPolling());
    }
    onQueryIngestStatus() {
      return this.context.ingestStatus;
    }
    onQueryLiveComposerStatuses() {
      return this.context.liveComposerStatuses;
    }
    onScheduledCloudSession() {
      return this.context.streamMode === _v9.EComposerStreamModeType.SIMULIVE;
    }
    onSimultaneousStreamLimitExceeded() {
      this.setContext({
        isSimultaneousStreamLimitExceeded: !0
      });
    }
    onDurationStreamLimitExceeded() {
      this.setContext({
        isDurationStreamLimitExceeded: !0
      });
    }
    onProvisionLimitExceeded() {
      this.setContext({
        isProvisionLimitReached: !0
      });
    }
    async onComposerSessionReady({
      data: {
        type: _v0,
        id: _v1,
        metadata: _v2
      }
    }) {
      this.log.info("Session ready for status polling:", _v0, _v1), this.connections = {
        getStatus: _v2.connections.ingestStatus,
        activateSession: _v2.interactions?.activateSession,
        startSession: _v2.interactions?.startSession,
        endSession: _v2.interactions?.endSession,
        updateSchedule: _v2.interactions?.updateSchedule,
        updateStreamMode: _v2.interactions?.updateStreamMode,
        updateRecordMode: _v2.interactions?.updateRecordMode
      }, await this.loadSessionStatus();
    }
  }
  (0, _v1._)([(0, _v2.Bind)()], _v17.prototype, "onBeforeUnload", null), (0, _v1._)([(0, _v2.OnSignal)(_v16.ELiveGraphicsSignal.SCENE_PUSHED)], _v17.prototype, "onScenePushed", null), (0, _v1._)([(0, _v2.OnSignal)(_v16.ELiveSignal.LIVE_EVENT_ENDED)], _v17.prototype, "onLiveEventEnded", null), (0, _v1._)([(0, _v2.OnSignal)([_v16.EAgoraSignal.AGORA_CONNECTION_REMOVED_FROM_SESSION, _v16.EPageSignal.PAGE_INACTIVE])], _v17.prototype, "onRemovedFromAgoraSession", null), (0, _v1._)([(0, _v2.OnQuery)(_v15.ELiveQuery.INGEST_STATUS)], _v17.prototype, "onQueryIngestStatus", null), (0, _v1._)([(0, _v2.OnQuery)(_v15.ELiveQuery.LIVE_COMPOSER_STATUSES)], _v17.prototype, "onQueryLiveComposerStatuses", null), (0, _v1._)([(0, _v2.OnQuery)(_v15.ELiveConnectionQuery.IS_SCHEDULED_CLOUD_SESSION)], _v17.prototype, "onScheduledCloudSession", null), (0, _v1._)([(0, _v2.OnSignal)(_v16.ELiveSignal.SIMULTANEOUS_STREAM_LIMIT_EXCEEDED)], _v17.prototype, "onSimultaneousStreamLimitExceeded", null), (0, _v1._)([(0, _v2.OnSignal)(_v16.ELiveSignal.TIME_STREAM_LIMIT_EXCEEDED)], _v17.prototype, "onDurationStreamLimitExceeded", null), (0, _v1._)([(0, _v2.OnSignal)(_v16.ELiveSignal.PROVISION_LIMIT_EXCEEDED)], _v17.prototype, "onProvisionLimitExceeded", null), (0, _v1._)([(0, _v2.OnSignal)(_v16.ELiveSignal.COMPOSER_SESSION_READY)], _v17.prototype, "onComposerSessionReady", null), _v0.s(["ComposerSessionStatusManager", 0, _v17]);
}