{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0);
  function _v3(_v0) {
    return null === _v0 ? null : String(_v0);
  }
  function _v4(_v0) {
    return Number(_v0);
  }
  let _v5 = () => {
    let _v0 = (0, _v2.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_started", {
          file_size_bytes: _v4(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_completed", {
          video_id: _v3(_v0.videoId),
          file_size_bytes: _v4(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_failed", {
          video_id: _v3(_v0.videoId),
          file_size_bytes: _v4(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_cancelled", {
          video_id: _v3(_v0.videoId),
          file_size_bytes: _v4(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_session_started", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          is_multiple: _v0.isMultiple
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_session_completed", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          success_count: _v0.successCount,
          error_count: _v0.errorCount,
          canceled_count: _v0.canceledCount,
          total_duration_ms: _v0.totalDurationMs
        });
      }, [_v0]);
    return {
      trackVideoUploadStarted: _v1,
      trackVideoUploadCompleted: _v2,
      trackVideoUploadFailed: _v3,
      trackVideoUploadCancelled: _v4,
      trackVideoUploadSessionStarted: _v5,
      trackVideoUploadSessionCompleted: _v6,
      trackVideoUploadSessionAbandoned: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_session_abandoned", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          completed_count: _v0.completedCount,
          in_progress_count: _v0.inProgressCount
        });
      }, [_v0]),
      trackVideoUploadMetadataEditedDuringUpload: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_metadata_edited_during_upload", {
          session_id: _v0.sessionId,
          video_id: _v0.videoId,
          pending_uploads: _v0.pendingUploads,
          field_name: _v0.fieldName
        });
      }, [_v0])
    };
  };
  _v0.s(["useUploadTracking", 0, _v5], 0);
  var _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = 0,
    _v11 = new Set([_v7.STATES.STARTING, _v7.STATES.VALIDATING, _v7.STATES.ATTACHING, _v7.STATES.UPLOADING, _v7.STATES.RESUMING, _v7.STATES.REROUTING, _v7.STATES.QUEUED]),
    _v12 = null;
  _v0.s(["ACTIVE_UPLOAD_STATES", 0, _v11, "getCurrentUploadSessionId", 0, function () {
    return _v12;
  }, "useUploadPicoXTracking", 0, function () {
    let {
        trackVideoUploadSessionStarted: _v0,
        trackVideoUploadSessionCompleted: _v1,
        trackVideoUploadSessionAbandoned: _v2
      } = _v5(),
      {
        uploads: _v3
      } = (0, _v8.useUploader)(),
      _v4 = (0, _v1.useRef)(_v3),
      _v5 = (0, _v1.useRef)(null),
      _v6 = (0, _v1.useRef)(new Set()),
      _v7 = (0, _v1.useRef)(new Set());
    _v4.current = _v3;
    let _v8 = (0, _v1.useCallback)(() => {
        let _v0 = _v5.current;
        if (!_v0 || _v7.current.has(_v0.sessionId)) return;
        let _v1 = _v4.current.filter(_v0 => _v0.uploadIds.has(_v0.id) && (_v11.has(_v0.state) || _v0.state === _v7.STATES.PAUSED)).length,
          _v2 = _v0.completedCount;
        _v1 > 0 && (_v7.current.add(_v0.sessionId), _v2({
          sessionId: _v0.sessionId,
          fileCount: _v0.fileCount,
          completedCount: _v2,
          inProgressCount: _v1
        }));
      }, [_v2]),
      _v9 = (0, _v1.useCallback)(() => {
        let _v0 = _v5.current;
        !_v0 || _v0.completedCount + _v0.errorCount + _v0.canceledCount >= _v0.fileCount && (_v1({
          sessionId: _v0.sessionId,
          fileCount: _v0.fileCount,
          successCount: _v0.completedCount,
          errorCount: _v0.errorCount,
          canceledCount: _v0.canceledCount,
          totalDurationMs: Date.now() - _v0.startTime
        }), _v5.current = null, _v12 = null);
      }, [_v1]);
    function _v10(_v0) {
      let _v1 = _v5.current;
      if (!_v1 || _v1.terminatedFileIds.has(_v0.id)) return;
      let {
        state: _v2
      } = _v0;
      (_v2 === _v7.STATES.COMPLETED || _v2 === _v7.STATES.FAILED || _v2 === _v7.STATES.CANCELED) && (_v1.terminatedFileIds.add(_v0.id), _v2 === _v7.STATES.COMPLETED && (_v1.completedCount += 1), _v2 === _v7.STATES.FAILED && (_v1.errorCount += 1), _v2 === _v7.STATES.CANCELED && (_v1.canceledCount += 1));
    }
    (0, _v6.usePicoEffect)(() => {
      if (0 === _v3.length) {
        _v5.current = null, _v12 = null, _v6.current.clear();
        return;
      }
      let _v0 = _v3.filter(_v0 => !_v6.current.has(_v0.id));
      if (_v0.length > 0 && null === _v5.current) {
        let _v0 = (_v10 += 1, `upload-session-${Date.now()}-${_v10}`);
        _v12 = _v0;
        let _v1 = _v0.length > 1;
        _v5.current = {
          sessionId: _v0,
          fileCount: _v0.length,
          isMultiple: _v1,
          startTime: Date.now(),
          completedCount: 0,
          errorCount: 0,
          canceledCount: 0,
          uploadIds: new Set(),
          terminatedFileIds: new Set()
        }, _v0({
          sessionId: _v0,
          fileCount: _v0.length,
          isMultiple: _v1
        }), _v0.forEach(_v0 => {
          _v6.current.add(_v0.id), _v5.current?.uploadIds.add(_v0.id), _v10(_v0);
        }), _v9();
      } else if (_v0.length > 0 && _v5.current) {
        let _v0 = _v5.current;
        _v0.fileCount += _v0.length, _v0.forEach(_v0 => {
          _v6.current.add(_v0.id), _v0.uploadIds.add(_v0.id), _v10(_v0);
        }), _v9();
      }
      if (_v5.current) {
        let _v0 = new Set(_v3.map(_v0 => _v0.id));
        for (let _v0 of _v5.current.uploadIds) _v0.has(_v0) || _v5.current.terminatedFileIds.has(_v0) || (_v5.current.fileCount -= 1, _v5.current.uploadIds.delete(_v0));
        _v9();
      }
    }, [_v3, _v9]);
    let _v11 = (0, _v1.useCallback)((_v0, _v1) => {
      let _v2 = _v5.current;
      !_v2 || _v2.uploadIds.has(_v1.id) && (_v10(_v1), _v9());
    }, [_v9]);
    return (0, _v9.useUploadLifecycle)(_v11, [_v11]), (0, _v1.useEffect)(() => {
      let _v0 = () => {
        _v8();
      };
      return window.addEventListener("beforeunload", _v0), () => {
        _v8(), window.removeEventListener("beforeunload", _v0);
      };
    }, [_v8]), _v5;
  }], 0);
}