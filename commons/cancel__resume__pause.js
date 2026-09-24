{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  function _v7(_v0) {
    let _v1 = Object.keys(_v0),
      _v2 = {};
    for (let _v0 of _v1) {
      let _v0 = (0, _v6.default)(_v0);
      _v2 = {
        ..._v2,
        [_v0]: _v0[_v0]
      };
    }
    return _v2;
  }
  let _v8 = /vuid=(\w+\.\w+);?/;
  var _v9 = _v0.i(0),
    _v10 = _v0.i(0);
  let _v11 = ["cancel", "resume", "pause", "service", "api_app", "upload_type", "id", "bytes_uploaded", "initial_size", "video_file_id", "uid", "signature", "_state", "file", "error", "attempt_id", "clip_id"];
  function _v12(_v0) {
    let _v1 = _v7((0, _v10.default)(_v0, _v11)),
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
  let _v13 = _v0 => ({
      type: "LOADING",
      payload: {
        loading: _v0
      }
    }),
    _v14 = (_v0, _v1) => ({
      type: "UPLOAD_STATE_CHANGE",
      payload: {
        upload: _v0,
        uploaderSummary: _v1
      }
    }),
    _v15 = _v0 => ({
      type: "FILE_SELECT_STATE_CHANGE",
      payload: {
        isFileSelectOpen: _v0
      }
    });
  async function _v16(_v0, _v1, _v2, _v3) {
    let _v4 = _v1 ? `jwt ${_v1}` : `bearer ${_v2}`,
      _v5 = _v3 ? function (_v0) {
        let _v1 = "?",
          _v2 = Object.keys(_v0);
        for (let _v0 = 0; _v0 < _v2.length; _v0++) {
          let _v0 = _v2[_v0],
            _v1 = _v0[_v0];
          _v1 && (_v1 += 0 !== _v0 ? `&${(0, _v9.default)(_v0)}=${encodeURIComponent(_v1)}` : `${(0, _v9.default)(_v0)}=${encodeURIComponent(_v1)}`);
        }
        return _v1;
      }(_v3) : "",
      _v6 = await fetch(`https://${_v0}/upload/config${_v5}`, {
        headers: {
          Authorization: _v4
        }
      });
    if (200 !== _v6.status) throw Error(_v6.statusText);
    return _v6.json();
  }
  let _v17 = "__vimeoRetainedReplacementUploads",
    _v18 = () => {
      let _v0 = window;
      return _v0[_v17] ??= new Map(), _v0[_v17];
    },
    _v19 = _v0 => {
      "replace_clip" === _v0.uploadType && _v0.clipId && _v0.file instanceof File && _v18().set(_v0.clipId, _v0.file);
    };
  _v0.s(["getRetainedReplacementFile", 0, _v0 => _v18().get(String(_v0)), "retainReplacementUpload", 0, _v19], 0);
  let _v20 = "video/*,.mkv,.m2ts",
    _v21 = new Set(["3g2", "3gp", "asf", "asx", "avi", "flv", "m2t", "m2ts", "m4v", "mkv", "mod", "mov", "mp4", "mpeg", "mpg", "mts", "webm", "wmv"]),
    _v22 = new Set([..._v21, "7z", "aac", "aep", "ai", "csv", "doc", "docx", "flac", "gif", "gz", "heic", "heif", "jpeg", "jpg", "m4a", "mp3", "ogg", "pdf", "png", "ppt", "pptx", "prproj", "psd", "rar", "rtf", "srt", "svg", "tar", "txt", "vtt", "wav", "webp", "xls", "xlsx", "zip"]),
    _v23 = new Set(["application/octet-stream", "application/x-matroska"]),
    _v24 = /^[a-z0-9]{1,16}$/;
  function _v25(_v0, _v1) {
    let _v2 = _v0.trim().toLowerCase().slice(0, _v1);
    return "" === _v2 ? null : _v2;
  }
  function _v26(_v0) {
    let _v1 = _v0.name.lastIndexOf(".");
    if (_v1 <= 0 || _v1 === _v0.name.length - 1) return null;
    let _v2 = _v25(_v0.name.slice(_v1 + 1), 32);
    return null !== _v2 && _v24.test(_v2) ? _v2 : null;
  }
  var _v27 = _v0.i(0);
  let _v28 = {
    frameCount: 10,
    imgQuality: .8
  };
  class _v29 extends _v27.EventEmitter {
    videoElement;
    supported;
    frames = [];
    frameCount;
    imgQuality;
    canvasElement;
    constructor(_v0, _v1 = _v28) {
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
  _v0.s(["ThumbnailGenerator", 0, _v29], 0);
  let _v30 = {
      service: "",
      hasBeenInitialized: !1,
      loading: !1,
      isFileSelectOpen: !1,
      uploads: [],
      uploaderSummary: {
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
      }
    },
    _v31 = {
      ..._v30,
      fileInputAccept: _v20,
      upload: () => !1,
      cancelAll: () => null,
      resumeAll: () => null,
      pauseAll: () => null,
      clearAll: () => null,
      clear: () => null,
      fileSelectStateChange: () => null,
      addShouldUploadStartCallback: () => () => null
    },
    _v32 = _v3.default.createContext(_v31),
    _v33 = _v3.default.createContext({
      addUploadLifecycleListener: () => () => null
    });
  function _v34(_v0, _v1) {
    let _v2;
    switch (_v1.type) {
      case "REMOVE":
        return _v2 = _v0.uploads.filter(_v0 => _v0.id !== _v1.payload.upload.id), {
          ..._v0,
          uploads: _v2
        };
      case "RESET":
        return {
          ..._v30,
          hasBeenInitialized: !0
        };
      case "LOADING":
        return {
          ..._v0,
          loading: _v1.payload.loading
        };
      case "UPLOAD":
        let _v0 = _v1.payload.uploads.slice().reverse();
        return {
          ..._v0,
          uploads: [..._v0, ..._v0.uploads]
        };
      case "UPLOAD_STATE_CHANGE":
        return _v2 = _v0.uploads.map(_v0 => _v0.id === _v1.payload.upload.id ? _v1.payload.upload : _v0), {
          ..._v0,
          uploads: _v2,
          uploaderSummary: _v1.payload.uploaderSummary
        };
      case "UPLOAD_PROGRESS":
        return _v2 = _v0.uploads.map(_v0 => _v0.id === _v1.payload.uploadProgressEvent.id ? {
          ..._v0,
          bytesUploaded: _v1.payload.uploadProgressEvent.bytes_uploaded,
          eta: _v1.payload.uploadProgressEvent.eta,
          speedMbps: _v1.payload.uploadProgressEvent.speed_mbps
        } : _v0), {
          ..._v0,
          uploads: _v2,
          uploaderSummary: _v1.payload.uploaderSummary
        };
      case "FILE_SELECT_STATE_CHANGE":
        return {
          ..._v0,
          isFileSelectOpen: _v1.payload.isFileSelectOpen
        };
      case "SET_UPLOAD_SERVICE":
        return {
          ..._v0,
          service: _v1.payload.service
        };
      case "INITIALIZE":
        return {
          ..._v0,
          hasBeenInitialized: !0
        };
      default:
        return _v0;
    }
  }
  function _v35(_v0, _v1) {
    _v0 && void 0 !== _v1 && (_v0.config.max_simultaneous_uploads = _v1, _v0.startQueue());
  }
  function _v36(_v0) {
    return "link" in _v0 && "headers" in _v0;
  }
  _v0.s(["UploadContext", 0, _v32, "UploadLifecycleContext", 0, _v33, "UploaderProvider", 0, function (_v0) {
    let [_v1, _v2] = (0, _v3.useReducer)(_v34, _v30),
      _v3 = (0, _v3.useRef)(void 0),
      _v4 = (0, _v3.useRef)(_v0.maxSimultaneousUploads),
      _v5 = (0, _v3.useRef)([]),
      _v6 = (0, _v3.useRef)([]),
      _v7 = (0, _v3.useRef)(new Map()),
      _v8 = (0, _v3.useRef)([]),
      _v9 = (0, _v5.useViewer)();
    _v4.current = _v0.maxSimultaneousUploads;
    let _v10 = () => _v3.current?.summary ? _v7(_v3.current?.summary) : {},
      _v11 = (_v0, _v1, _v2) => {
        let _v3 = _v7.current.get(_v1.id),
          _v4 = _v10();
        _v19(_v1), _v6.current.forEach(_v0 => _v0(_v0, _v1, _v4, _v2, _v3)), _v2(_v14(_v1, _v4)), (_v0 === _v4.STATES.COMPLETED || _v0 === _v4.STATES.FAILED || _v0 === _v4.STATES.CANCELED) && _v7.current.delete(_v1.id);
      },
      _v12 = !!_v9?.user;
    return (0, _v3.useEffect)(() => {
      _v12 && !_v1.hasBeenInitialized && _v2({
        type: "INITIALIZE"
      });
    }, [_v12, _v1.hasBeenInitialized]), (0, _v3.useEffect)(() => {
      _v3.current?.setVimeoJWT(_v9?.jwt);
    }, [_v9?.jwt]), (0, _v3.useEffect)(() => {
      _v35(_v3.current, _v0.maxSimultaneousUploads);
    }, [_v0.maxSimultaneousUploads]), (0, _v3.useEffect)(() => {
      let _v0 = async () => {
        _v2(_v13(!0));
        try {
          let _v0,
            _v1,
            _v2 = (window.location.search || window.location.search).substr(1).split("&").map(_v0 => _v0.split("=")).filter(([_v0]) => /\S/.test(_v0)).reduce((_v0, [_v1, _v2]) => ({
              ..._v0,
              [_v1]: _v2
            }), {}),
            _v3 = await _v16(_v9?.apiUrl ?? "", _v9?.jwt, _v0.basicAuthToken, _v2),
            _v4 = _v9?.xsrft ? {
              ..._v3,
              xsrft: _v9.xsrft
            } : _v3;
          _v2((_v0 = _v4.service, {
            type: "SET_UPLOAD_SERVICE",
            payload: {
              service: _v0
            }
          })), _v4.vuid || (_v4.vuid = (_v1 = document.cookie.match(_v8)) && _v1.length >= 2 ? _v1[1] : "");
          let _v5 = _v4.current;
          _v3.current = new _v4.default({
            ..._v4,
            max_simultaneous_uploads: _v5 ?? _v4.max_simultaneous_uploads,
            embeddableUploaderVersion: "3.0.0"
          }, void 0), _v35(_v3.current, _v4.current);
        } catch (_v0) {
          console.error("Error configuring uploader: ", _v0);
        } finally {
          _v2(_v13(!1));
        }
      };
      return _v1.hasBeenInitialized && !_v3.current && !_v1.loading && _v9?.apiUrl && (_v9?.jwt || _v0.basicAuthToken) && _v0(), () => {
        (_v1.uploaderSummary.isCanceled || _v1.uploaderSummary.isComplete) && (_v5.current.forEach(_v0 => _v0()), _v5.current = []);
      };
    }, [_v1.loading, _v1.hasBeenInitialized, _v1.uploaderSummary.isCanceled, _v1.uploaderSummary.isComplete, _v9?.apiUrl, _v9?.jwt, _v0.basicAuthToken, _v0.maxSimultaneousUploads, _v9?.xsrft]), (0, _v1.jsx)(_v32.Provider, {
      value: {
        upload: (_v0, _v1, _v2) => {
          var _v3, _v4, _v5, _v6;
          let _v7 = function (_v0, _v1, _v2) {
            let _v3 = void 0 === _v1.clipId && (void 0 === _v1.uploadType || _v1.uploadType === _v4.TYPES.CLIP);
            if (!_v2 || !_v3) return null;
            let _v4 = Array.isArray(_v0) ? _v0 : Array.from(_v0),
              _v5 = _v4.filter(_v0 => !_v36(_v0));
            if (_v5.length !== _v4.length) return null;
            var _v6 = _v1.origin;
            let _v7 = _v5.filter(_v0 => {
              let _v1;
              return _v1 = _v25(_v0.type, 100), !(_v1?.startsWith("video/") === !0 || (null === _v1 || _v23.has(_v1)) && _v21.has(_v26(_v0) ?? ""));
            });
            if (0 === _v7.length) return null;
            let _v8 = _v5.length - _v7.length;
            return {
              files: _v7.slice(0, 100).map(_v0 => {
                let _v1;
                return {
                  fileExtension: null !== (_v1 = _v26(_v0)) && _v22.has(_v1) ? _v1 : null,
                  fileMimeType: _v25(_v0.type, 100),
                  fileSizeBytes: _v0.size
                };
              }),
              totalInBatch: _v5.length,
              nonVideoFileCount: _v7.length,
              videoFileCount: _v8,
              isMixedWithVideo: _v8 > 0,
              metadataTruncated: _v7.length > 100,
              isDropzone: _v6?.isDropzone ?? null,
              surface: _v6?.surface ?? null
            };
          }(_v0, _v1, !0 === _v0.enableNonVideoUploadFakeDoor);
          if (_v7) return _v0.onNonVideoUploadAttempt?.(_v7), !1;
          if (!_v8.current.every(_v0 => _v0(_v0, _v1))) return !1;
          let _v8 = [],
            _v9 = _v3.current?.config?.service || _v4.SERVICES.UPLOAD_SERVICE_SITE,
            _v10 = (_v5 = _v0, _v6 = _v1, (Array.isArray(_v5) ? _v5 : Array.from(_v5)).map(_v0 => {
              if (_v36(_v0)) return _v0;
              let _v1 = new _v29(_v0, {
                imgQuality: 1,
                frameCount: 10
              });
              return _v1.on("change", () => {
                _v0.thumbnailLink = _v1.frames[_v1.frames.length - 1];
              }), _v0.target_user_id = _v6?.targetUserId, _v0.folder_id = _v6?.folderId, _v0;
            })),
            _v11 = _v1.apiApp || _v4.SERVICE_APP_IDS[_v9];
          Array.isArray(_v8 = _v3.current?.upload(_v10, _v1.uploadType ?? _v4.TYPES.CLIP, _v11, _v1.clipId ? _v1.clipId.toString() : null, _v2)) || (_v8 = [_v8]);
          let {
            origin: _v12
          } = _v1;
          _v12 && _v8.forEach(_v0 => {
            _v7.current.set(_v0.id, _v12);
          }), _v3 = _v8, _v4 = _v8.length, _v3.forEach(_v0 => {
            let _v1 = (0, _v2.default)(_v0 => {
              _v2({
                type: "UPLOAD_PROGRESS",
                payload: {
                  uploadProgressEvent: {
                    ..._v0,
                    id: _v0.id
                  },
                  uploaderSummary: _v10()
                }
              });
            }, 0);
            _v0.on(_v4.EVENTS.STATE_CHANGE, _v0 => {
              let _v1 = _v12(_v0.upload);
              _v11(_v1.state, _v1, _v4);
            }), _v0.on(_v4.EVENTS.PROGRESS, _v1);
            let _v2 = _v12(_v0);
            _v2.state && _v11(_v2.state, _v2, _v4);
          });
          let _v13 = _v8.map(_v12);
          return _v13.forEach(_v19), _v2({
            type: "UPLOAD",
            payload: {
              uploads: _v13
            }
          }), !0;
        },
        pauseAll: () => _v3.current?.pauseAll(),
        resumeAll: () => _v3.current?.resumeAll(),
        cancelAll: () => _v3.current?.cancelAll(),
        clearAll: () => {
          _v3.current?.clearAll(), _v2({
            type: "RESET"
          });
        },
        clear: _v0 => {
          if (_v3.current) {
            let _v0 = _v3.current.uploads.get(_v0.id);
            _v0 && (_v3.current.clear(_v0), _v2({
              type: "REMOVE",
              payload: {
                upload: _v0
              }
            }), _v2(_v14(_v0, _v10())));
          }
        },
        fileSelectStateChange: _v0 => {
          if (_v2(_v15(_v0)), _v0) {
            let _v0 = () => {
              _v2(_v15(!1)), document.body.removeEventListener("focus", _v0);
            };
            document.body.addEventListener("focus", _v0);
          }
        },
        fileInputAccept: _v0.enableNonVideoUploadFakeDoor ? void 0 : _v20,
        addShouldUploadStartCallback: _v0 => (_v8.current.push(_v0), () => {
          _v8.current = _v8.current.filter(_v0 => _v0 !== _v0);
        }),
        ..._v1
      },
      children: (0, _v1.jsx)(_v33.Provider, {
        value: {
          addUploadLifecycleListener: _v0 => (_v6.current.push(_v0), () => {
            _v6.current = _v6.current.filter(_v0 => _v0 !== _v0);
          })
        },
        children: _v0.children
      })
    });
  }], 0);
}