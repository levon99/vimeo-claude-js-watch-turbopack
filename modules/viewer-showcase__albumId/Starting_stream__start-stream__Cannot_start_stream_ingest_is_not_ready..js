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
    _v13 = _v0.i(0);
  async function _v14(_v0) {
    _v0.log.info("Starting stream"), _v0.assertIsInitialized();
    let {
      ingestStatus: _v1
    } = _v0.context;
    try {
      await _v0.mutex.acquire("start-stream");
      let {
        data: _v0
      } = _v0.queryDataSync({
        type: _v12.ELiveQuery.CAN_STREAM
      });
      if (_v0.connections.startSession) {
        if (_v1 === _v6.EIngestStatus.ENDED || _v1 === _v6.EIngestStatus.STREAMING) throw new _v8.LiveError("Cannot start stream, ingest is not ready.");else if (!_v0) throw new _v8.LiveError("Cannot start stream, insufficient permissions.");
      } else throw new _v8.LiveError("Cannot start session, no meta available.");
      _v0.log.info("Sending start stream request"), _v0.ingestStartLastRequestedAt = (0, _v10.getAbsoluteNow)(), _v0.setContext({
        isProvisionUpdating: !0,
        isProvisionStarting: !0
      }), _v0.emitSignal({
        type: _v13.ELiveSignal.LIVE_EVENT_STARTING
      }), await (0, _v3.startEvent)({
        connection: _v0.connections.startSession,
        gctlConfig: (0, _v1.queryManagerGctlConfig)(_v0),
        fields: ["live.id", "live.sessionId"]
      }), (0, _v11.trackLiveAction)("live_session_started"), _v0.setContext({
        isProvisionUpdating: !1
      });
    } catch (_v0) {
      if (_v0.log.error("Failed to start event:", _v0), (0, _v7.isApiError)(_v0) && _v0.data.body.errorCode === _v5.EApiErrorCode.LIVE_STREAM_SIMULTANEOUS_LIMIT) _v0.setContext({
        isSimultaneousStreamLimitExceeded: !0,
        isProvisionUpdating: !1,
        isProvisionStarting: !1
      });else throw _v0.setContext({
        isProvisionUpdating: !1,
        isProvisionStarting: !1
      }), _v0;
    } finally {
      _v0.mutex.release("start-stream-finish");
    }
  }
  async function _v15(_v0) {
    _v0.log.info("Ending stream"), _v0.assertIsInitialized();
    let {
      ingestStatus: _v1
    } = _v0.context;
    try {
      await _v0.mutex.acquire("end-stream");
      let {
        data: _v0
      } = _v0.queryDataSync({
        type: _v12.ELiveQuery.CAN_STREAM
      });
      if (_v0.connections.endSession) {
        if (_v1 !== _v6.EIngestStatus.STREAMING) throw new _v8.LiveError("Cannot stop stream, ingest is not streaming.");else if (!_v0) throw new _v8.LiveError("Cannot stop stream, insufficient permissions.");
      } else throw new _v8.LiveError("Cannot stop stream, no meta available.");
      if (_v0.log.info("Sending stop current stream request"), _v0.setContext({
        isProvisionUpdating: !0
      }), await (0, _v3.endEvent)({
        connection: _v0.connections.endSession,
        gctlConfig: (0, _v1.queryManagerGctlConfig)(_v0),
        fields: ["live.id", "live.sessionId"]
      }).catch(_v0 => (0, _v7.isApiError)(_v0) && _v0.data.body.errorCode === _v5.EApiErrorCode.LIVE_STREAM_ALREADY_ENDED ? ((0, _v11.trackLiveAction)("live_session_ended_restored"), Promise.resolve()) : Promise.reject(_v0)), (0, _v11.trackLiveAction)("live_session_ended"), await _v0.loadSessionStatus({
        isBlockingRequest: !1
      }), _v0.isEnded()) {
        let _v0 = (0, _v9.getFromLocalStorage)(`${_v0.context.sessionType}${_v0.context.sessionApplicationType}_streamed`);
        (0, _v9.setLocalStorageItem)(`${_v0.context.sessionType}${_v0.context.sessionApplicationType}_streamed`, _v0 ? _v0 + 1 : 1);
      } else (0, _v11.trackLiveAction)("live_session_ended_unsuccessful", {
        ingestStatus: _v0.context.ingestStatus,
        cloudSessionId: _v0.context.cloudSessionId,
        startedAt: _v0.context.startedAt,
        endSessionConnection: _v0.connections?.endSession,
        getSessionConnection: _v0.connections?.getStatus
      });
    } catch (_v0) {
      throw _v0.log.error("Failed to end stream:", _v0), _v0;
    } finally {
      _v0.setContext({
        isProvisionUpdating: !1
      }), _v0.mutex.release("end-stream-finish");
    }
  }
  async function _v16(_v0) {
    _v0.log.info("Activating cloud studio"), _v0.assertIsInitialized();
    try {
      if (await _v0.mutex.acquire("activate-cloud"), !_v0.connections.activateSession) throw new _v8.LiveError("Cannot activate session, no meta available.");
      _v0.ingestStartLastRequestedAt = (0, _v10.getAbsoluteNow)(), _v0.setContext({
        isProvisionUpdating: !0
      }), await (0, _v3.activateEvent)({
        connection: _v0.connections.activateSession,
        gctlConfig: (0, _v1.queryManagerGctlConfig)(_v0),
        fields: ["live.id", "live.sessionId"]
      }), (0, _v11.trackLiveAction)("live_session_activated"), _v0.setContext({
        ingestStatus: _v6.EIngestStatus.PROVISION_REQUESTED
      });
    } catch (_v0) {
      if (_v0.log.error("Failed to activate cloud studio:", _v0), (0, _v7.isApiError)(_v0) && _v0.data.body.errorCode === _v5.EApiErrorCode.LIVE_STREAM_SIMULTANEOUS_LIMIT) _v0.setContext({
        isSimultaneousStreamLimitExceeded: !0
      });else throw _v0;
    } finally {
      _v0.mutex.release("activate-cloud-finish");
    }
  }
  async function _v17(_v0, _v1) {
    _v0.log.info("Updating stream mode state:", _v1), _v0.assertIsInitialized();
    try {
      if (await _v0.mutex.acquire("stream-mode-update"), !_v0.connections.updateStreamMode) throw new _v8.LiveError("Cannot update stream mode, no meta available.");
      _v0.setContext({
        isProvisionUpdating: !0
      }), await (0, _v2.updateStreamMode)({
        connection: _v0.connections.updateStreamMode,
        gctlConfig: (0, _v1.queryManagerGctlConfig)(_v0),
        fields: ["stream_mode"]
      }, _v1);
    } catch (_v0) {
      throw _v0.log.error("Failed to set stream mode:", _v0), _v0;
    } finally {
      _v0.setContext({
        isProvisionUpdating: !1,
        streamMode: _v1
      }), _v0.mutex.release("stream-mode-update");
    }
  }
  async function _v18(_v0, _v1) {
    _v0.log.info("Send record command:", _v1), _v0.assertIsInitialized();
    try {
      if (await _v0.mutex.acquire(`send-record-command-${_v1}`), _v0.setContext({
        isProvisionUpdating: !0
      }), !_v0.connections.updateRecordMode) throw new _v8.LiveError("Cannot update record state, no meta available.");
      await (0, _v2.updateRecordingState)({
        connection: _v0.connections.updateRecordMode,
        gctlConfig: (0, _v1.queryManagerGctlConfig)(_v0)
      }, _v1);
    } catch (_v0) {
      throw _v0.log.error("Failed to change recording state:", _v1, _v0), _v0;
    } finally {
      _v0.setContext(({
        recordState: _v0
      }) => ({
        isProvisionUpdating: !1,
        recordState: _v1 === _v4.ERecordStateCommand.DELETE || _v1 === _v4.ERecordStateCommand.RESTART ? _v4.ERecordState.NOT_ACTIVE : _v0
      })), _v0.mutex.release(`send-record-command-${_v1}`);
    }
  }
  _v0.s(["activateCloudStudio", 0, _v16, "endStream", 0, _v15, "setRecordingState", 0, _v18, "setStreamMode", 0, _v17, "startStream", 0, _v14], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  async function _v23(_v0, {
    isBlockingRequest: _v1 = !0
  } = {}) {
    if (_v0.isInitialized()) {
      _v0.assertIsInitialized();
      try {
        _v1 ? await _v0.mutex.acquire("ingest-status-update") : _v0.log.info("Performing off-mutex status fetch");
        let _v0 = await (0, _v3.getSessionIngestStatus)({
          connection: _v0.connections.getStatus,
          gctlConfig: (0, _v1.queryManagerGctlConfig)(_v0),
          fields: ["can_manage", "id", "ingest.encoder_type", "ingest.end_time", "ingest.height", "ingest.width", "ingest.is_rtmp_session", "ingest.is_scheduled_playback", "ingest.scheduled_start_time", "ingest.session_id", "ingest.start_time", "ingest.status", "ingest.stream_ended_reason", "metering", "stream_mode", "status"]
        }, {
          cacheKey: _v0.uuid,
          cloudSessionId: _v0.context.cloudSessionId,
          isRawStatus: !0
        });
        if (_v0.isManagementAccessRequired && !1 === _v0.canManage) return (0, _v11.trackLiveAction)("composer_session_access_fade"), _v0.emitSignal({
          type: _v13.ELiveSignal.GLOBAL_ERROR,
          data: new _v19.ForbiddenError()
        }), _v0.log.info("Session access lost during status polling, gracefully shut down");
        if (_v0.context.sessionApplicationType !== _v4.EComposerApplicationType.COMPLETED && _v0.status === _v6.EEventCompletionStatus.ENDED) return _v0.emitSignal({
          type: _v13.ELiveSignal.COMPOSER_SESSION_COMPLETED
        }), _v0.log.info("Session completed, redirecting to completed page");
        let _v1 = _v0.context,
          _v2 = {};
        _v2.isHydrated = !0, _v1.isProvisionStarting && (0, _v10.getAbsoluteNow)() - _v0.ingestStartLastRequestedAt > _v20.liveApplicationConfig.EVENT.MAXIMAL_EXPECTED_INGEST_START_DELAY && (_v0.log.warn("Discarding loading status because studio start took to much time"), _v2.isProvisionStarting = !1), _v1.ingestStatus !== _v0.ingest.status && (_v0.log.info(`Ingest status change detected: ${_v6.EIngestStatus[_v1.ingestStatus]} => ${_v6.EIngestStatus[_v0.ingest.status]}`), _v2.ingestStatus = _v0.ingest.status, _v0.emitSignal({
          type: _v13.ELiveSignal.LIVE_EVENT_STATUS_UPDATED,
          data: _v2.ingestStatus
        }), _v2.ingestStatus === _v6.EIngestStatus.ENDED && _v0.emitSignal({
          type: _v13.ELiveSignal.LIVE_EVENT_ENDED
        }), _v2.ingestStatus === _v6.EIngestStatus.PROVISION_EXPIRED && _v1.ingestStatus !== _v6.EIngestStatus.UNKNOWN && _v0.emitSignal({
          type: _v13.ELiveSignal.LIVE_EVENT_EXPIRED
        }), _v1.isProvisionUpdating && (_v2.isProvisionUpdating = !1), _v24(_v0, _v1.ingestStatus, _v2.ingestStatus, _v2)), _v1.startedAt !== _v0.ingest.startTime && (_v2.startedAt = _v0.ingest.startTime), _v1.streamEndedReason !== _v0.ingest.streamEndedReason && (_v2.streamEndedReason = _v0.ingest.streamEndedReason), _v1.endedAt !== _v0.ingest.endTime && (_v2.endedAt = _v0.ingest.endTime), _v1.streamMode !== _v0.streamMode && (_v2.streamMode = _v0.streamMode), _v1.scheduledStartTime !== _v0.ingest.scheduledStartTime && (_v2.scheduledStartTime = _v0.ingest.scheduledStartTime), _v1.videoWidth !== _v0.ingest.width && (_v2.videoWidth = _v0.ingest.width), _v1.videoHeight !== _v0.ingest.height && (_v2.videoHeight = _v0.ingest.height), _v1.cloudSessionEncoderType !== _v0.ingest.encoderType && (_v0.log.info("Encoder type change:", _v1.cloudSessionEncoderType, "->", _v0.ingest.encoderType), _v0.emitSignal({
          type: _v13.ELiveSignal.LIVE_ENCODER_TYPE_CHANGED,
          data: {
            previous: _v1.cloudSessionEncoderType,
            next: _v2.cloudSessionEncoderType
          }
        }), _v2.cloudSessionEncoderType = _v0.ingest.encoderType), _v1.cloudSessionId !== _v0.ingest.sessionId && _v0.ingest.status !== _v6.EIngestStatus.PROVISION_EXPIRED && (_v0.log.info("Active session changed:", _v0.ingest.sessionId), _v2.cloudSessionId = _v0.ingest.sessionId, _v0.emitSignal({
          type: _v13.ELiveSignal.CLOUD_SESSION_ID_CHANGED,
          data: {
            cloudSessionId: _v0.ingest.sessionId
          }
        })), _v1.cloudSessionId && _v0.ingest.status === _v6.EIngestStatus.PROVISION_EXPIRED && (_v0.log.info("Reset session:", _v0.ingest.sessionId, _v0.ingest.status), _v2.cloudSessionId = null), _v1.metering && _v1.metering.secondsMax === _v0.metering.secondsMax && _v1.metering.secondsRemaining === _v0.metering.secondsRemaining || (_v2.metering = _v0.metering), _v0.setContext(_v2);
      } catch (_v0) {
        !function (_v0, _v1) {
          _v0.log.error("Failed to check ingest status:", _v1);
          let _v2 = (0, _v7.isApiError)(_v1) ? _v1.data.body.errorCode : "generic",
            _v3 = _v0.ingestStatusErrors.get(_v2) || 0;
          if (_v0.ingestStatusErrors.set(_v2, _v3 + 1), _v0.isInitialized() && (_v2 === _v5.EApiErrorCode.NOT_FOUND && _v3 > 2 || _v2 === _v5.EApiErrorCode.NO_USER_CREDENTIALS_PROVIDED && _v3 > 2)) {
            _v0.log.error("Looks like live event was deleted"), _v0.stopIngestStatusPolling(), _v0.emitSignal({
              type: _v13.ELiveSignal.GLOBAL_ERROR,
              data: _v1
            });
            return;
          }
          let _v4 = [..._v0.ingestStatusErrors.values()].reduce((_v0, _v1) => _v1 + _v0, 0);
          _v4 === _v20.liveApplicationConfig.EVENT.STATUS_ERRORS_NOTIFICATION_THRESHOLD && (_v0.log.error("Passed notification threshold:", _v4), (0, _v11.trackLiveError)(_v1, {
            category: _v22.ELiveErrorCategory.LIVE,
            data: [..._v0.ingestStatusErrors.values()]
          }));
        }(_v0, _v0);
      } finally {
        _v1 && _v0.mutex.release("ingest-status-update-finish");
      }
    }
  }
  async function _v24(_v0, _v1, _v2, _v3) {
    let {
      isProvisionStarting: _v4
    } = _v0.context;
    _v2 === _v6.EIngestStatus.STREAMING && _v4 && (_v0.log.info("Ingest status became live, stopping loading states"), _v3.isProvisionStarting = !1), _v1 === _v6.EIngestStatus.UNKNOWN && _v2 === _v6.EIngestStatus.ENDED && (0, _v11.trackLiveAction)("composer_session_instant_ended", {
      getStatusUri: _v0.connections?.getStatus?.uri
    });
  }
  _v0.s(["loadSessionStatus", 0, _v23, "startIngestStatusPolling", 0, function (_v0) {
    _v0.log.info("Starting polling ingest status for live event"), _v0.ingestStatusInterval || (_v0.ingestStatusInterval = (0, _v21.registerInterval)(() => _v0.mutex.isLocked() ? void 0 : _v0.loadSessionStatus(), _v20.liveApplicationConfig.EVENT.STATUS_POLLING_INTERVAL, "eventStatusPolling"));
  }, "stopIngestStatusPolling", 0, function (_v0) {
    _v0.log.info("Ingest status polling stopping"), _v0.ingestStatusInterval && ((0, _v21.unRegisterInterval)(_v0.ingestStatusInterval), _v0.ingestStatusInterval = 0);
  }], 0);
}