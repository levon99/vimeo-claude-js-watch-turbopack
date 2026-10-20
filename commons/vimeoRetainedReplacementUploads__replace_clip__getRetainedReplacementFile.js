{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0);
  let _v4 = "__vimeoRetainedReplacementUploads",
    _v5 = () => {
      let _v0 = window;
      return _v0[_v4] ??= new Map(), _v0[_v4];
    },
    _v6 = _v0 => {
      "replace_clip" === _v0.uploadType && _v0.clipId && _v0.file instanceof File && _v5().set(_v0.clipId, _v0.file);
    };
  _v0.s(["getRetainedReplacementFile", 0, _v0 => _v5().get(String(_v0)), "retainReplacementUpload", 0, _v6], 0);
  var _v7 = _v0.i(0);
  function _v8(_v0) {
    let _v1 = Object.keys(_v0),
      _v2 = {};
    for (let _v0 of _v1) {
      let _v0 = (0, _v7.default)(_v0);
      _v2 = {
        ..._v2,
        [_v0]: _v0[_v0]
      };
    }
    return _v2;
  }
  var _v9 = _v0.i(0);
  let _v10 = ["cancel", "resume", "pause", "service", "api_app", "upload_type", "id", "bytes_uploaded", "initial_size", "video_file_id", "uid", "signature", "_state", "file", "error", "attempt_id", "clip_id", "public_id"];
  function _v11(_v0) {
    let _v1 = _v8((0, _v9.default)(_v0, _v10)),
      {
        folder_id: _v2,
        target_user_id: _v3,
        thumbnailLink: _v4
      } = _v1.file;
    return {
      ..._v1,
      targetUserId: _v3,
      folderId: _v2,
      thumbnailLink: _v4
    };
  }
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = "video/*,.mkv,.m2ts",
    _v15 = "video/*,.mkv,.m2ts,.txt,.md,.srt,.vtt,.csv,.jpg,.jpeg,.png,.webp,.mp3,.wav",
    _v16 = new Set(["3g2", "3gp", "asf", "asx", "avi", "flv", "m2t", "m2ts", "m4v", "mkv", "mod", "mov", "mp4", "mpeg", "mpg", "mts", "webm", "wmv"]),
    _v17 = new Set([..._v16, "7z", "aac", "aep", "ai", "csv", "doc", "docx", "flac", "gif", "gz", "heic", "heif", "jpeg", "jpg", "m4a", "md", "mp3", "ogg", "pdf", "png", "ppt", "pptx", "prproj", "psd", "rar", "rtf", "srt", "svg", "tar", "txt", "vtt", "wav", "webp", "xls", "xlsx", "zip"]),
    _v18 = new Set(["application/octet-stream", "application/x-matroska"]),
    _v19 = /^[a-z0-9]{1,16}$/;
  function _v20(_v0, _v1) {
    let _v2 = _v0.trim().toLowerCase().slice(0, _v1);
    return "" === _v2 ? null : _v2;
  }
  function _v21(_v0) {
    let _v1 = _v0.name.lastIndexOf(".");
    if (_v1 <= 0 || _v1 === _v0.name.length - 1) return null;
    let _v2 = _v20(_v0.name.slice(_v1 + 1), 32);
    return null !== _v2 && _v19.test(_v2) ? _v2 : null;
  }
  function _v22(_v0) {
    let _v1 = _v20(_v0.type, 100);
    return _v1?.startsWith("video/") === !0 || (null === _v1 || _v18.has(_v1)) && _v16.has(_v21(_v0) ?? "");
  }
  function _v23(_v0, _v1) {
    let _v2 = _v0.filter(_v0 => !_v22(_v0));
    if (0 === _v2.length) return null;
    let _v3 = _v0.length - _v2.length;
    return {
      files: _v2.slice(0, 100).map(_v0 => {
        let _v1;
        return {
          fileExtension: null !== (_v1 = _v21(_v0)) && _v17.has(_v1) ? _v1 : null,
          fileMimeType: _v20(_v0.type, 100),
          fileSizeBytes: _v0.size
        };
      }),
      totalInBatch: _v0.length,
      nonVideoFileCount: _v2.length,
      videoFileCount: _v3,
      isMixedWithVideo: _v3 > 0,
      metadataTruncated: _v2.length > 100,
      isDropzone: _v1?.isDropzone ?? null,
      surface: _v1?.surface ?? null
    };
  }
  _v0.s(["UNIVERSAL_FILE_INPUT_ACCEPT", 0, _v15, "VIDEO_FILE_INPUT_ACCEPT", 0, _v14, "buildNonVideoUploadAttempt", 0, _v23, "isVideoFile", 0, _v22], 0);
  var _v24 = _v0.i(0);
  let _v25 = {
    frameCount: 10,
    imgQuality: .8
  };
  class _v26 extends _v24.EventEmitter {
    videoElement;
    supported;
    frames = [];
    frameCount;
    imgQuality;
    canvasElement;
    constructor(_v0, _v1 = _v25) {
      super(), this.videoElement = document.createElement("video"), this.supported = "" !== this.videoElement.canPlayType(_v0.type), "createObjectURL" in window.URL == !1 && (this.supported = !1), this.frameCount = _v1.frameCount, this.imgQuality = _v1.imgQuality, this.canvasElement = document.createElement("canvas"), this.videoElement.autoplay = !1, this.videoElement.muted = !0, this.videoElement.volume = 0, this.videoElement.addEventListener("canplay", this._onCanPlay), this.videoElement.addEventListener("error", () => {
        this.listenerCount("error") > 0 && this.emit("error", this.videoElement.error);
      }), _v0 instanceof File && (this.videoElement.src = window.URL.createObjectURL(_v0));
    }
    _removeListeners = () => {
      let {
        videoElement: _v0
      } = this;
      _v0.removeEventListener("seeked", this._onSeekedTime);
    };
    _createFrames = () => {
      let {
          videoElement: _v0,
          frameCount: _v1
        } = this,
        {
          duration: _v2
        } = _v0;
      if (!Number.isFinite(_v2) || _v2 <= 0) return;
      let _v3 = Math.round(_v2 / _v1),
        _v4 = 0;
      for (_v0.addEventListener("seeked", this._onSeekedTime), _v4 = 0; _v4 < _v1; _v4++) {
        let _v0 = _v3 * _v4;
        setTimeout(() => {
          _v0.currentTime = _v0;
        }, 200 * _v4);
      }
      let _v5 = 200 * _v4;
      setTimeout(this._removeListeners, _v5);
    };
    _onCanPlay = () => {
      let {
        videoElement: _v0
      } = this;
      _v0.removeEventListener("canplay", this._onCanPlay), this._createFrames();
    };
    _onSeekedTime = () => {
      let {
          canvasElement: _v0,
          videoElement: _v1,
          frames: _v2,
          imgQuality: _v3
        } = this,
        _v4 = _v0.getContext("2d");
      if (_v4) {
        _v4.drawImage(_v1, 0, 0, _v0.width, _v0.height);
        let _v0 = _v0.toDataURL("image/jpeg", _v3);
        _v2.push(_v0), this.emit("change", _v2.length);
      }
    };
  }
  _v0.s(["ThumbnailGenerator", 0, _v26], 0);
  let _v27 = {
      activeCount: 0,
      bytesUploaded: 0,
      canceledCount: 0,
      completeCount: 0,
      failedCount: 0,
      eta: 0,
      hasFailures: !1,
      inProgressCount: 0,
      isCanceled: !1,
      isPaused: !1,
      isComplete: !1,
      queuedCount: 0,
      totalBytes: 0,
      totalCount: 0
    },
    _v28 = _v0 => _v0.enableUniversalHosting ? _v15 : _v0.enableNonVideoUploadFakeDoor ? void 0 : _v14,
    _v29 = _v0 => ({
      service: "",
      hasBeenInitialized: !1,
      loading: !1,
      isFileSelectOpen: !1,
      uploads: [],
      uploaderSummary: {
        ..._v27
      },
      fileInputAccept: _v28(_v0),
      enableUniversalHosting: !0 === _v0.enableUniversalHosting,
      enableNonVideoUploadFakeDoor: !0 === _v0.enableNonVideoUploadFakeDoor,
      onNonVideoUploadAttempt: _v0.onNonVideoUploadAttempt
    }),
    _v30 = (_v0 = {}) => {
      let _v1,
        _v2,
        _v3 = _v0.maxSimultaneousUploads,
        _v4 = new Map(),
        _v5 = new Map(),
        _v6 = [],
        _v7 = [],
        _v8 = [],
        _v9 = () => _v2?.summary ? _v8(_v2.summary) : {
          ..._v27
        },
        _v10 = () => {
          _v5.forEach(_v0 => _v0()), _v5.clear(), _v4.clear();
        };
      return _v1 = (_v0, _v1) => {
        let _v2 = (_v0, _v1, _v2) => {
            let _v3 = _v4.get(_v1.id),
              _v4 = _v9();
            _v6(_v1), _v6.forEach(_v0 => _v0(_v0, _v1, _v4, _v2, _v3)), _v0(_v0 => ({
              uploads: _v0.uploads.map(_v0 => _v0.id === _v1.id ? _v1 : _v0),
              uploaderSummary: _v4
            })), (_v0 === _v3.STATES.COMPLETED || _v0 === _v3.STATES.FAILED || _v0 === _v3.STATES.CANCELED) && (_v4.delete(_v1.id), _v5.get(_v1.id)?.(), _v5.delete(_v1.id));
          },
          _v3 = (_v0, _v1, _v2, _v3, _v4) => {
            let _v5 = _v2?.config?.service ?? _v3.SERVICES.UPLOAD_SERVICE_SITE,
              _v6 = _v2.apiApp ?? _v3.SERVICE_APP_IDS[_v5],
              _v7 = _v2?.upload(_v0, _v1, _v6, _v2.clipId ? _v2.clipId.toString() : null, _v3);
            if (!_v7) return !1;
            Array.isArray(_v7) || (_v7 = [_v7]);
            let {
              origin: _v8
            } = _v2;
            _v8 && _v7.forEach(_v0 => {
              _v4.set(_v0.id, _v8);
            }), _v7.forEach(_v0 => {
              let _v1 = (0, _v2.default)(_v0 => {
                  let _v1 = _v9();
                  _v0(_v0 => ({
                    uploads: _v0.uploads.map(_v0 => _v0.id === _v0.id ? {
                      ..._v0,
                      bytesUploaded: _v0.bytes_uploaded,
                      eta: _v0.eta,
                      speedMbps: _v0.speed_mbps
                    } : _v0),
                    uploaderSummary: _v1
                  }));
                }, 0),
                _v2 = _v0 => {
                  let _v1 = _v11(_v0.upload);
                  _v2(_v1.state, _v1, _v4);
                };
              _v0.on(_v3.EVENTS.STATE_CHANGE, _v2), _v0.on(_v3.EVENTS.PROGRESS, _v1), _v5.set(_v0.id, () => {
                _v0.removeListener(_v3.EVENTS.STATE_CHANGE, _v2), _v0.removeListener(_v3.EVENTS.PROGRESS, _v1), _v1.cancel();
              });
              let _v3 = _v11(_v0);
              _v3.state && _v2(_v3.state, _v3, _v4);
            });
            let _v9 = _v7.map(_v11);
            return _v9.forEach(_v6), _v0(_v0 => ({
              uploads: [..._v9.slice().reverse(), ..._v0.uploads]
            })), !0;
          };
        return {
          ..._v29(_v0),
          registerEngine: _v0 => {
            _v2 = _v0;
          },
          hasEngine: () => void 0 !== _v2,
          setService: _v0 => _v0({
            service: _v0
          }),
          setHasBeenInitialized: () => _v0({
            hasBeenInitialized: !0
          }),
          setLoading: _v0 => _v0({
            loading: _v0
          }),
          setJwt: _v0 => {
            _v2?.setVimeoJWT(_v0);
          },
          setMaxSimultaneousUploads: _v0 => {
            _v3 = _v0, _v2 && void 0 !== _v3 && (_v2.config.max_simultaneous_uploads = _v3, _v2.startQueue());
          },
          getMaxSimultaneousUploads: () => _v3,
          setProviderOptions: _v0 => _v0({
            enableUniversalHosting: !0 === _v0.enableUniversalHosting,
            enableNonVideoUploadFakeDoor: !0 === _v0.enableNonVideoUploadFakeDoor,
            onNonVideoUploadAttempt: _v0.onNonVideoUploadAttempt,
            fileInputAccept: _v28(_v0)
          }),
          resetListeners: () => {
            _v10();
          },
          upload: (_v0, _v1, _v2) => {
            let _v3 = Array.isArray(_v0) ? _v0 : Array.from(_v0),
              _v4 = _v3.filter(_v0 => !_v31(_v0)),
              _v5 = _v4.length !== _v3.length,
              _v6 = void 0 === _v1.clipId && (void 0 === _v1.uploadType || _v1.uploadType === _v3.TYPES.CLIP) && !_v5,
              {
                enableUniversalHosting: _v7,
                enableNonVideoUploadFakeDoor: _v8,
                onNonVideoUploadAttempt: _v9
              } = _v1();
            if (_v6 && !_v7) {
              var _v10, _v11;
              let _v0 = (_v10 = _v4, _v11 = _v1, _v8 ? _v23(_v10, _v11.origin) : null);
              if (_v0) return _v9?.(_v0), !1;
            }
            if (!_v7.every(_v0 => _v0(_v0, _v1))) return !1;
            let _v12 = () => {
              var _v0, _v1;
              let _v2;
              if (_v6 && _v7) {
                let _v0, _v1, _v2, _v3;
                return _v0 = _v4.filter(_v22), _v1 = _v4.filter(_v0 => !_v22(_v0)), _v2 = {
                  total: _v0.length + _v1.length,
                  clips: _v0.length,
                  files: _v1.length
                }, _v3 = !1, _v0.length > 0 && (_v3 = _v3(_v32(_v0, _v1), _v3.TYPES.CLIP, _v1, _v2, _v2) || _v3), _v1.length > 0 && (_v3 = _v3(_v32(_v1, _v1), _v3.TYPES.FILE, _v1, void 0, _v2) || _v3), _v3;
              }
              return _v3(_v32(_v3, _v1), _v1.uploadType ?? _v3.TYPES.CLIP, _v1, _v2, (_v0 = _v1.uploadType ?? _v3.TYPES.CLIP, _v1 = _v3.length, {
                total: _v1,
                clips: (_v2 = _v0 === _v3.TYPES.FILE) ? 0 : _v1,
                files: _v2 ? _v1 : 0
              }));
            };
            return !_v8.some(_v0 => _v0(_v0, _v1, _v12, _v2)) && _v12();
          },
          pauseAll: () => {
            _v2?.pauseAll();
          },
          resumeAll: () => {
            _v2?.resumeAll();
          },
          cancelAll: () => {
            _v2?.cancelAll();
          },
          clearAll: () => {
            _v2?.clearAll(), _v10();
            let {
              fileInputAccept: _v0,
              enableUniversalHosting: _v1,
              enableNonVideoUploadFakeDoor: _v2,
              onNonVideoUploadAttempt: _v3
            } = _v1();
            _v0({
              ..._v29(_v0),
              hasBeenInitialized: !0,
              fileInputAccept: _v0,
              enableUniversalHosting: _v1,
              enableNonVideoUploadFakeDoor: _v2,
              onNonVideoUploadAttempt: _v3
            });
          },
          clear: _v0 => {
            if (!_v2) return;
            let _v1 = _v2.uploads.get(_v0.id);
            _v1 && (_v2.clear(_v1), _v0(_v0 => ({
              uploads: _v0.uploads.filter(_v0 => _v0.id !== _v0.id),
              uploaderSummary: _v9()
            })));
          },
          fileSelectStateChange: _v0 => {
            if (_v0({
              isFileSelectOpen: _v0
            }), _v0) {
              let _v0 = () => {
                _v0({
                  isFileSelectOpen: !1
                }), document.body.removeEventListener("focus", _v0);
              };
              document.body.addEventListener("focus", _v0);
            }
          },
          addShouldUploadStartCallback: _v0 => (_v7.push(_v0), () => {
            let _v0 = _v7.indexOf(_v0);
            -1 !== _v0 && _v7.splice(_v0, 1);
          }),
          addDeferredUploadPreflight: _v0 => (_v8.push(_v0), () => {
            let _v0 = _v8.indexOf(_v0);
            -1 !== _v0 && _v8.splice(_v0, 1);
          }),
          addUploadLifecycleListener: _v0 => (_v6.push(_v0), () => {
            let _v0 = _v6.indexOf(_v0);
            -1 !== _v0 && _v6.splice(_v0, 1);
          })
        };
      }, (0, _v13.createStore)()((0, _v12.subscribeWithSelector)(_v1));
    };
  function _v31(_v0) {
    return "link" in _v0 && "headers" in _v0;
  }
  function _v32(_v0, _v1) {
    return _v0.map(_v0 => {
      if (_v31(_v0)) return _v0;
      if (_v22(_v0)) {
        let _v0 = new _v26(_v0, {
          imgQuality: 1,
          frameCount: 10
        });
        _v0.on("change", () => {
          _v0.thumbnailLink = _v0.frames[_v0.frames.length - 1];
        });
      }
      return _v0.target_user_id = _v1?.targetUserId, _v0.folder_id = _v1?.folderId, _v0;
    });
  }
  _v0.s(["createUploadStore", 0, _v30], 0);
  let _v33 = (0, _v1.createContext)(_v30());
  _v0.s(["UploaderStoreContext", 0, _v33, "useUploaderStoreApi", 0, function () {
    return (0, _v1.useContext)(_v33);
  }], 0);
}