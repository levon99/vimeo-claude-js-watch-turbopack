{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    return null === _v0 ? null : String(_v0);
  }
  function _v7(_v0) {
    return Number(_v0);
  }
  let _v8 = () => {
    let _v0 = (0, _v3.usePico)(),
      _v1 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_started", {
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface,
          privacy: (0, _v5.mapPrivacyToStandardizedName)(_v0.privacy ?? null, "video")
        });
      }, [_v0]),
      _v2 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_completed", {
          video_id: _v6(_v0.videoId),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface,
          privacy: (0, _v5.mapPrivacyToStandardizedName)(_v0.privacy ?? null, "video")
        });
      }, [_v0]),
      _v3 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_failed", {
          video_id: _v6(_v0.videoId),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v4 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_cancelled", {
          video_id: _v6(_v0.videoId),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v5 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_started", {
          file_type: (0, _v4.deriveFileType)(_v0.contentType),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v6 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_completed", {
          file_id: _v0.fileId,
          file_type: (0, _v4.deriveFileType)(_v0.contentType),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v7 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_failed", {
          file_id: _v0.fileId,
          file_type: (0, _v4.deriveFileType)(_v0.contentType),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v8 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_cancelled", {
          file_id: _v0.fileId,
          file_type: (0, _v4.deriveFileType)(_v0.contentType),
          file_size_bytes: _v7(_v0.fileSizeBytes),
          total_in_batch: _v0.totalInBatch,
          total_clips_in_batch: _v0.totalClipsInBatch,
          total_files_in_batch: _v0.totalFilesInBatch,
          is_dropzone: _v0.isDropzone,
          surface: _v0.surface
        });
      }, [_v0]),
      _v9 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_session_started", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          is_multiple: _v0.isMultiple
        });
      }, [_v0]),
      _v10 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_session_completed", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          success_count: _v0.successCount,
          error_count: _v0.errorCount,
          canceled_count: _v0.canceledCount,
          total_duration_ms: _v0.totalDurationMs
        });
      }, [_v0]),
      _v11 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_session_abandoned", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          completed_count: _v0.completedCount,
          in_progress_count: _v0.inProgressCount
        });
      }, [_v0]),
      _v12 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_session_started", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          is_multiple: _v0.isMultiple
        });
      }, [_v0]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_session_completed", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          success_count: _v0.successCount,
          error_count: _v0.errorCount,
          canceled_count: _v0.canceledCount,
          total_duration_ms: _v0.totalDurationMs
        });
      }, [_v0]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("file_upload_session_abandoned", {
          session_id: _v0.sessionId,
          file_count: _v0.fileCount,
          completed_count: _v0.completedCount,
          in_progress_count: _v0.inProgressCount
        });
      }, [_v0]),
      _v15 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("video_upload_metadata_edited_during_upload", {
          session_id: _v0.sessionId,
          video_id: _v0.videoId,
          pending_uploads: _v0.pendingUploads,
          field_name: _v0.fieldName
        });
      }, [_v0]),
      _v16 = (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("upload_title_match_check", {
          filename: _v0.filename,
          match_count: _v0.matchCount
        });
      }, [_v0]);
    return {
      trackVideoUploadStarted: _v1,
      trackVideoUploadCompleted: _v2,
      trackVideoUploadFailed: _v3,
      trackVideoUploadCancelled: _v4,
      trackFileUploadStarted: _v5,
      trackFileUploadCompleted: _v6,
      trackFileUploadFailed: _v7,
      trackFileUploadCancelled: _v8,
      trackVideoUploadSessionStarted: _v9,
      trackVideoUploadSessionCompleted: _v10,
      trackVideoUploadSessionAbandoned: _v11,
      trackFileUploadSessionStarted: _v12,
      trackFileUploadSessionCompleted: _v13,
      trackFileUploadSessionAbandoned: _v14,
      trackVideoUploadMetadataEditedDuringUpload: _v15,
      trackUploadTitleMatchCheck: _v16,
      trackUploadReplaceOfferDisplayed: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("upload_replace_offer_displayed", {
          filename: _v0.filename,
          match_count: _v0.matchCount
        });
      }, [_v0]),
      trackUploadReplaceOfferAction: (0, _v1.useCallback)(_v0 => {
        null !== _v0 && _v0.track("upload_replace_offer_action", {
          action: _v0.action,
          filename: _v0.filename,
          match_count: _v0.matchCount,
          replace_clip_id: _v0.replaceClipId,
          replace_clip_title: _v0.replaceClipTitle,
          started: _v0.started
        });
      }, [_v0])
    };
  };
  _v0.s(["useUploadTracking", 0, _v8], 0);
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0);
  let _v12 = ["video", "file"],
    _v13 = 0;
  function _v14(_v0) {
    return _v0.uploadType === _v9.TYPES.FILE ? "file" : "video";
  }
  let _v15 = new Set([_v9.STATES.STARTING, _v9.STATES.VALIDATING, _v9.STATES.ATTACHING, _v9.STATES.UPLOADING, _v9.STATES.RESUMING, _v9.STATES.REROUTING, _v9.STATES.QUEUED]),
    _v16 = null;
  _v0.s(["ACTIVE_UPLOAD_STATES", 0, _v15, "getCurrentUploadSessionId", 0, function () {
    return _v16;
  }, "useUploadPicoXTracking", 0, function () {
    let {
        trackVideoUploadSessionStarted: _v0,
        trackVideoUploadSessionCompleted: _v1,
        trackVideoUploadSessionAbandoned: _v2,
        trackFileUploadSessionStarted: _v3,
        trackFileUploadSessionCompleted: _v4,
        trackFileUploadSessionAbandoned: _v5
      } = _v8(),
      _v6 = (0, _v10.useUploads)(),
      _v7 = (0, _v1.useRef)(_v6),
      _v8 = (0, _v1.useRef)({
        video: null,
        file: null
      }),
      _v9 = (0, _v1.useRef)(new Set()),
      _v10 = (0, _v1.useRef)(new Set());
    _v7.current = _v6;
    let _v11 = (0, _v1.useMemo)(() => ({
        video: {
          started: _v0,
          completed: _v1,
          abandoned: _v2
        },
        file: {
          started: _v3,
          completed: _v4,
          abandoned: _v5
        }
      }), [_v0, _v1, _v2, _v3, _v4, _v5]),
      _v12 = (0, _v1.useCallback)(() => {
        for (let _v0 of _v12) {
          let _v0 = _v8.current[_v0];
          if (!_v0 || _v10.current.has(_v0.sessionId)) continue;
          let _v1 = _v7.current.filter(_v0 => _v0.uploadIds.has(_v0.id) && (_v15.has(_v0.state) || _v0.state === _v9.STATES.PAUSED)).length;
          _v1 > 0 && (_v10.current.add(_v0.sessionId), _v11[_v0].abandoned({
            sessionId: _v0.sessionId,
            fileCount: _v0.fileCount,
            completedCount: _v0.completedCount,
            inProgressCount: _v1
          }));
        }
      }, [_v11]),
      _v13 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v8.current[_v0];
        !_v1 || _v1.completedCount + _v1.errorCount + _v1.canceledCount >= _v1.fileCount && (_v11[_v0].completed({
          sessionId: _v1.sessionId,
          fileCount: _v1.fileCount,
          successCount: _v1.completedCount,
          errorCount: _v1.errorCount,
          canceledCount: _v1.canceledCount,
          totalDurationMs: Date.now() - _v1.startTime
        }), _v8.current[_v0] = null, "video" === _v0 && (_v16 = null));
      }, [_v11]),
      _v14 = (0, _v1.useCallback)(_v0 => {
        let _v1 = _v8.current[_v14(_v0)];
        if (!_v1 || _v1.terminatedFileIds.has(_v0.id)) return;
        let {
          state: _v2
        } = _v0;
        (_v2 === _v9.STATES.COMPLETED || _v2 === _v9.STATES.FAILED || _v2 === _v9.STATES.CANCELED) && (_v1.terminatedFileIds.add(_v0.id), _v2 === _v9.STATES.COMPLETED && (_v1.completedCount += 1), _v2 === _v9.STATES.FAILED && (_v1.errorCount += 1), _v2 === _v9.STATES.CANCELED && (_v1.canceledCount += 1));
      }, []);
    (0, _v2.usePicoEffect)(() => {
      if (0 === _v6.length) {
        _v8.current = {
          video: null,
          file: null
        }, _v16 = null, _v9.current.clear();
        return;
      }
      let _v0 = _v6.filter(_v0 => !_v9.current.has(_v0.id));
      for (let _v0 of _v12) {
        let _v0 = _v0.filter(_v0 => _v14(_v0) === _v0);
        if (0 !== _v0.length) {
          if (null === _v8.current[_v0]) {
            let _v0 = function (_v0, _v1) {
              let _v2 = (_v13 += 1, `upload-session-${Date.now()}-${_v13}`);
              return "video" === _v0 && (_v16 = _v2), {
                kind: _v0,
                sessionId: _v2,
                fileCount: _v1,
                isMultiple: _v1 > 1,
                startTime: Date.now(),
                completedCount: 0,
                errorCount: 0,
                canceledCount: 0,
                uploadIds: new Set(),
                terminatedFileIds: new Set()
              };
            }(_v0, _v0.length);
            _v8.current[_v0] = _v0, _v11[_v0].started({
              sessionId: _v0.sessionId,
              fileCount: _v0.fileCount,
              isMultiple: _v0.isMultiple
            });
          } else {
            let _v0 = _v8.current[_v0];
            _v0 && (_v0.fileCount += _v0.length);
          }
          _v0.forEach(_v0 => {
            _v9.current.add(_v0.id), _v8.current[_v0]?.uploadIds.add(_v0.id), _v14(_v0);
          }), _v13(_v0);
        }
      }
      let _v1 = new Set(_v6.map(_v0 => _v0.id));
      for (let _v0 of _v12) {
        let _v0 = _v8.current[_v0];
        if (_v0) {
          for (let _v0 of _v0.uploadIds) _v1.has(_v0) || _v0.terminatedFileIds.has(_v0) || (_v0.fileCount -= 1, _v0.uploadIds.delete(_v0));
          _v13(_v0);
        }
      }
    }, [_v6, _v13, _v11, _v14]);
    let _v15 = (0, _v1.useCallback)((_v0, _v1) => {
      let _v2 = _v14(_v1),
        _v3 = _v8.current[_v2];
      !_v3 || _v3.uploadIds.has(_v1.id) && (_v14(_v1), _v13(_v2));
    }, [_v14, _v13]);
    return (0, _v11.useUploadLifecycle)(_v15, [_v15]), (0, _v1.useEffect)(() => {
      let _v0 = () => {
        _v12();
      };
      return window.addEventListener("beforeunload", _v0), () => {
        _v12(), window.removeEventListener("beforeunload", _v0);
      };
    }, [_v12]), _v8;
  }], 0);
}