{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  class _v7 extends Error {
    constructor(_v0) {
      super(_v0), this.name = "VideoNotValidError";
    }
  }
  let _v8 = async (_v0, _v1) => {
      let _v2 = document.createElement("canvas"),
        _v3 = document.createElement("video"),
        _v4 = new Promise(_v0 => {
          _v3.addEventListener("playing", _v0, {
            once: !0
          });
        });
      _v3.autoplay = !0, _v3.muted = !0;
      let _v5 = URL.createObjectURL(_v0);
      _v3.src = _v5, _v3.play(), await _v4;
      let _v6 = _v2.getContext("2d");
      if (!_v6) throw Error("Cannot get canvas 2d context");
      if (_v2.width = _v3.videoWidth, _v2.height = _v3.videoHeight, _v3.pause(), URL.revokeObjectURL(_v5), !_v3.duration) throw new _v7("video is not valid");
      _v6.drawImage(_v3, 0, 0, _v2.width, _v2.height);
      let _v7 = _v2.toDataURL("image/jpeg", 1);
      if (!_v1.current) throw new _v6.CancelError("Unmounted");
      return {
        width: _v2.width,
        height: _v2.height,
        size: _v0.size,
        name: _v0.name,
        duration: _v3.duration,
        thumbnail: _v7
      };
    },
    _v9 = async (_v0, _v1) => {
      let _v2 = _v0.type.split("/")[0];
      return _v2.includes("video") ? _v8(_v0, _v1) : _v2.includes("image") || _v2.includes("photo") ? new Promise((_v0, _v1) => {
        let _v2 = new FileReader();
        _v2.readAsDataURL(_v0), _v2.onload = function () {
          if (!_v1.current) return _v1(new _v6.CancelError("Unmounted"));
          (({
            file: _v0,
            url: _v1,
            resolve: _v2,
            reject: _v3
          }, _v4) => {
            let _v5 = new Image(),
              _v6 = () => (_v5.removeEventListener("error", _v7), _v5.removeEventListener("load", _v6), _v4.current) ? _v2({
                width: _v5.width,
                height: _v5.height,
                size: _v0.size,
                name: _v0.name,
                thumbnail: _v1
              }) : _v3(new _v6.CancelError("Unmounted")),
              _v7 = () => (_v5.removeEventListener("error", _v7), _v5.removeEventListener("load", _v6), _v4.current) ? _v3(Error("image load error")) : _v3(new _v6.CancelError("Unmounted"));
            _v5.onload = _v6, _v5.onerror = _v7, _v5.src = _v1;
          })({
            file: _v0,
            url: _v2.result,
            resolve: _v0,
            reject: _v1
          }, _v1);
        }, _v2.onerror = function (_v0) {
          return _v1.current ? _v1(_v0) : _v1(new _v6.CancelError("Unmounted"));
        };
      }) : {
        width: 0,
        height: 0,
        size: _v0.size
      };
    };
  var _v10 = _v0.i(0);
  let _v11 = () => (0, _v2.useCallback)(_v0 => {
    let _v1 = _v10.useUploaderStore.getState().uploads;
    return _v1.find(_v0 => _v0.id === _v0)?.status;
  }, []);
  var _v12 = _v0.i(0);
  let _v13 = "GET_UPLOAD_URLS",
    _v14 = "UPLOADING",
    _v15 = "TRANSCODING";
  var _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  class _v18 extends Error {
    constructor(_v0 = "Pause Error") {
      super(_v0), this.name = this.constructor.name;
    }
  }
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0);
  let _v21 = () => ({
    isActive: (0, _v2.useCallback)(_v0 => -1 !== _v10.useUploaderStore.getState().uploads.findIndex(_v0 => _v0.id === _v0), [])
  });
  var _v22 = _v0.i(0);
  async function _v23(_v0, _v1, _v2 = 3) {
    try {
      return await _v0();
    } catch (_v0) {
      if (_v0 instanceof _v6.CancelError || _v0?.name === "AbortError") throw new _v6.CancelError("Task was canceled");
      if (_v1.retriesUsed !== _v2 && !(_v0 instanceof _v16.FatalError)) return _v1.retriesUsed++, await _v23(() => function (_v0, _v1, _v2 = function (_v0) {
        return 0 * Math.pow(2, _v0.retriesUsed) + Math.round(0 * Math.random());
      }(_v1)) {
        let _v3 = (0, _v22.getLogger)("retryWithTimeout");
        return new Promise((_v0, _v1) => {
          _v3.info(`scheduled retry #${_v1.retriesUsed} after ${_v2}ms`);
          let _v2 = setTimeout(() => {
            "canceled" === _v1.state ? _v1(new _v6.CancelError("Retry was canceled")) : _v0(_v1).then(_v0).catch(_v1);
          }, _v2);
          _v1.autoRetryCleanup = () => {
            _v1.autoRetryCleanup = void 0, clearTimeout(_v2), _v1(new _v6.CancelError("[withTimeout] deferred retry was canceled"));
          };
        });
      }(_v0, _v1), _v1);
      throw _v0;
    }
  }
  let _v24 = _v0 => {
    if (_v0 instanceof _v17.NetworkError) switch (_v0.status) {
      case 410:
        return "UploadLinkGoneError";
      case 409:
        return "UploadConflictError";
      case 403:
        return "UploadForbidden";
      default:
        return "NetworkError";
    }
    return _v0 instanceof _v16.FatalError ? "FatalError" : _v0 instanceof TypeError ? "NoInternetError" : "EndpointError";
  };
  class _v25 extends Error {
    schema;
    constructor(_v0 = "", _v1 = {}) {
      super(_v0), this.name = this.constructor.name, this.schema = JSON.stringify(_v1);
    }
  }
  function _v26(_v0, _v1, _v2) {
    if (_v1(_v0)) return _v0;
    throw new _v25(`Failed to validate get upload urls response for service: ${_v2}`, {
      validatorName: _v1.name,
      sourceData: _v0
    });
  }
  function _v27(_v0) {
    return _v36(_v0) && _v37(_v0.status) && _v36(_v0.gcs) && _v37(_v0.gcs.storageObjectId) && _v36(_v0.gcs.upload) && _v37(_v0.gcs.upload.gcsUid) && _v34(_v0.gcs.upload.gcs);
  }
  function _v28(_v0) {
    return _v36(_v0) && _v37(_v0.uri) && _v36(_v0.upload) && _v37(_v0.upload.gcsUid) && _v37(_v0.upload.status) && _v34(_v0.upload.gcs) && _v36(_v0.transcode) && _v37(_v0.transcode.status);
  }
  function _v29(_v0) {
    return _v36(_v0) && _v37(_v0.uri) && _v33(_v0.upload);
  }
  function _v30(_v0) {
    return _v36(_v0) && _v37(_v0.storageObjectId) && _v36(_v0.upload) && _v37(_v0.upload.uploadLink);
  }
  function _v31(_v0) {
    return _v36(_v0) && _v37(_v0.storageObjectId) && _v33(_v0.upload);
  }
  function _v32(_v0) {
    return _v36(_v0) && _v37(_v0.storageObjectId) && _v36(_v0.upload) && _v38(_v0.upload.size) && _v37(_v0.upload.gcsUid) && _v34(_v0.upload.gcs) && _v0.upload.approach === _v12.UPLOAD_APPROACH.GCS;
  }
  function _v33(_v0) {
    return _v36(_v0) && _v37(_v0.uploadLink) && _v38(_v0.size) && _v0.approach === _v12.UPLOAD_APPROACH.TUS;
  }
  function _v34(_v0) {
    return Array.isArray(_v0) && _v0.every(_v35);
  }
  function _v35(_v0) {
    return !!_v36(_v0) && !!_v37(_v0.uploadLink) && (!("startByte" in _v0) || _v38(_v0.startByte)) && (!("endByte" in _v0) || _v38(_v0.endByte));
  }
  function _v36(_v0) {
    return "object" == typeof _v0 && null !== _v0;
  }
  function _v37(_v0) {
    return "string" == typeof _v0;
  }
  function _v38(_v0) {
    return "number" == typeof _v0 && !isNaN(_v0);
  }
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  function _v41(_v0, _v1, _v2, _v3 = function (_v0) {
    return 0 * Math.pow(2, _v0.retriesUsed) + Math.round(0 * Math.random());
  }(_v1)) {
    return new Promise((_v0, _v1) => {
      _v2.debug(`scheduled retry #${_v1.retriesUsed} after ${_v3}ms`);
      let _v2 = setTimeout(() => {
        "canceled" === _v1.state ? _v1(new _v6.CancelError("Retry was canceled")) : _v0(_v1).then(_v0).catch(_v1);
      }, _v3);
      _v1.autoRetryCleanup = () => {
        _v1.autoRetryCleanup = void 0, clearTimeout(_v2), _v1(new _v6.CancelError("Retry was canceled"));
      };
    });
  }
  let _v42 = "range";
  var _v43 = _v0.i(0);
  let _v44 = async (_v0, _v1, _v2, _v3) => {
      let _v4 = new FormData();
      _v4.append("method", "VIMEO"), _v4.append("token", _v0), _v4.append("settings", "1"), _v2 && _v4.append("teamToken", _v2), _v3 && _v4.append("partnerApp", _v3);
      let _v5 = await fetch(`//${_v1}/api/auth`, {
        body: _v4,
        method: "POST",
        headers: {
          "X-Requested-With": "XMLHttpRequest"
        }
      });
      if (_v5.ok) {
        let _v0 = _v5.headers.get("vmosessionid");
        if (!_v0) throw Error("`vmosessionid` header not found in response.");
        return _v5.json().then(_v0 => ({
          sessionId: _v0,
          response: (0, _v20.camelizeDeep)(_v0)
        }));
      }
      throw _v5;
    },
    _v45 = async ({
      teamUser: _v0,
      xsrft: _v1,
      magistoApiHost: _v2
    }) => {
      try {
        let _v0,
          _v1 = _v0 && _v0.plainTextPermissionLevel !== _v43.TeamUserPermissionLevel.Viewer && _v0.plainTextPermissionLevel !== _v43.TeamUserPermissionLevel.Uploader,
          _v2 = await (_v0 = ["public", "private", "create", "edit", "upload"], fetch("/_next/access_token", {
            body: JSON.stringify({
              scopes: _v0,
              app_id: 0,
              token: _v1,
              get_magisto_team_token: _v1
            }),
            method: "POST",
            headers: {
              "X-Requested-With": "XMLHttpRequest",
              "Content-type": "application/json"
            }
          }).then(_v0 => {
            if (_v0.ok) return _v0.json().then(_v0 => {
              let {
                access_token: _v1,
                magisto_team_token: _v2
              } = _v0;
              return (0, _v20.camelizeDeep)({
                ..._v1,
                magisto_team_token: _v2
              });
            });
            throw _v0;
          })),
          {
            sessionId: _v3
          } = await _v44(_v2.token, _v2, _v2.magistoTeamToken);
        return _v3;
      } catch (_v0) {
        throw (0, _v22.getLogger)("getMagistoSessionId").error(_v0, {
          category: "NETWORK",
          textError: "Failed getting magisto session id"
        }), _v0;
      }
    },
    _v46 = {
      url: "videos/<clipid>/versions/<versionid>/audiotracks",
      serviceName: _v12.UPLOAD_SERVICE.AUDIO_TRACKS,
      isVimeoApi: !0,
      transcodingUrl: "videos/<clipid>/versions/<versionid>/audiotracks/<id>",
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.AUDIO_TRACKS,
      file: null,
      params: {
        language_code: "",
        type: "main",
        upload: {
          size: 0,
          approach: _v12.UPLOAD_APPROACH.GCS,
          mime_type: null
        }
      }
    },
    _v47 = {
      url: "api/services/branding/start",
      serviceName: _v12.UPLOAD_SERVICE.BRANDING_BUMPERS,
      shouldParseFile: !0,
      isMagistoApi: !0,
      transcodingUrl: "api/services/branding/bumper",
      payloadStructure: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.BUMPER_INTRO,
      file: null,
      params: {
        filename: "",
        upload_product: "bumper",
        asset_location: "VIMEO",
        metadata: {
          context: "INTRO",
          asset_meta: {
            width: 0,
            height: 0,
            size: 0,
            duration: 0
          }
        }
      }
    },
    _v48 = {
      url: "api/services/branding/start",
      serviceName: _v12.UPLOAD_SERVICE.BRANDING_BUMPERS,
      shouldParseFile: !0,
      isMagistoApi: !0,
      transcodingUrl: "api/services/branding/bumper",
      payloadStructure: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.BUMPER_OUTRO,
      file: null,
      params: {
        filename: "",
        upload_product: "bumper",
        asset_location: "VIMEO",
        metadata: {
          context: "OUTRO",
          asset_meta: {
            width: 0,
            height: 0,
            size: 0,
            duration: 0
          }
        }
      }
    },
    _v49 = {
      url: "/users/<userid>/create_assets",
      serviceName: _v12.UPLOAD_SERVICE.CREATE_MULTIMEDIA,
      isVimeoApi: !0,
      transcodingUrl: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.CREATE_BRANDING_ASSET,
      file: null,
      params: {
        upload: {
          bucket: "vc-branding-dev",
          type: _v12.UPLOAD_TYPE_NAME.CREATE_BRANDING_ASSET,
          size: "0",
          approach: _v12.UPLOAD_APPROACH.GCS
        }
      }
    },
    _v50 = {
      url: "/users/<userid>/create_assets",
      serviceName: _v12.UPLOAD_SERVICE.IMAGE,
      isVimeoApi: !0,
      transcodingUrl: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.CREATE_IMAGE_ASSET,
      file: null,
      params: {
        upload: {
          size: "0",
          mime_type: "",
          type: _v12.UPLOAD_TYPE_NAME.CREATE_IMAGE_ASSET
        }
      }
    },
    _v51 = {
      url: "/users/<userid>/create_assets",
      serviceName: _v12.UPLOAD_SERVICE.CREATE_MULTIMEDIA,
      isVimeoApi: !0,
      transcodingUrl: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.CREATE_SOUNDTRACK_ASSET,
      file: null,
      params: {
        upload: {
          type: _v12.UPLOAD_TYPE_NAME.CREATE_SOUNDTRACK_ASSET,
          size: "0",
          approach: _v12.UPLOAD_APPROACH.GCS,
          bucket: "vc-audio-dev-c8a9b1b2"
        }
      }
    },
    _v52 = {
      url: "/users/<userid>/create_assets",
      serviceName: _v12.UPLOAD_SERVICE.CREATE_MULTIMEDIA,
      isVimeoApi: !0,
      transcodingUrl: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.CREATE_VIDEO_ASSET,
      file: null,
      params: {
        upload: {
          bucket: "vc-branding-dev",
          type: _v12.UPLOAD_TYPE_NAME.CREATE_VIDEO_ASSET,
          size: "0",
          approach: _v12.UPLOAD_APPROACH.GCS
        }
      }
    },
    _v53 = {
      url: "/users/<userid>/create_assets",
      serviceName: _v12.UPLOAD_SERVICE.CREATE_MULTIMEDIA,
      isVimeoApi: !0,
      transcodingUrl: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.CREATE_AUDIO,
      file: null,
      params: {
        upload: {
          type: _v12.UPLOAD_TYPE_NAME.CREATE_AUDIO,
          size: "0",
          approach: _v12.UPLOAD_APPROACH.GCS,
          bucket: "vc-audio-dev-c8a9b1b2"
        }
      }
    },
    _v54 = {
      url: "api/services/branding/start",
      serviceName: _v12.UPLOAD_SERVICE.BRANDING_LOGO,
      shouldParseFile: !0,
      isMagistoApi: !0,
      transcodingUrl: "api/services/branding/logo",
      payloadStructure: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.LOGO,
      file: null,
      params: {
        filename: "",
        upload_product: "logo",
        asset_location: "VIMEO",
        metadata: {
          asset_meta: {
            width: 0,
            height: 0,
            size: 0
          }
        }
      }
    },
    _v55 = {
      url: "/users/<userid>/create_assets",
      serviceName: _v12.UPLOAD_SERVICE.IMAGE,
      isVimeoApi: !0,
      transcodingUrl: null,
      uploadTypeName: _v12.UPLOAD_TYPE_NAME.OVERLAY_THUMBNAIL,
      file: null,
      params: {
        upload: {
          size: "0",
          mime_type: "",
          type: _v12.UPLOAD_TYPE_NAME.OVERLAY_THUMBNAIL
        }
      }
    };
  var _v56 = _v0.i(0),
    _v57 = (_v0.i(0), _v0.i(0));
  _v0.s(["default", 0, ({
    children: _v0
  }) => {
    let _v1,
      _v2,
      _v3,
      _v4,
      _v5 = (0, _v4.useViewer)(),
      _v6 = (0, _v19.useLogger)("ArtifactsUploaderProvider"),
      _v7 = _v5?.user?.id;
    !function ({
      appType: _v0,
      userId: _v1 = null,
      userLocale: _v2 = null
    }) {
      (0, _v2.useEffect)(() => {
        (0, _v56.updateTrackingConfig)({
          APP_TYPE: _v0,
          USER_ID: _v1,
          USER_LOCALE: _v2
        });
      }, [_v0, void 0, _v1, _v2]);
    }({
      appType: "artifacts-uploader",
      userId: _v7
    });
    let _v8 = _v11(),
      {
        initUploadForFile: _v9
      } = function (_v0) {
        let {
            getUploadUrlsService: _v1
          } = {
            getUploadUrlsService: (0, _v2.useCallback)(async _v0 => {
              let _v1,
                {
                  api: {
                    magistoApiHost: _v2,
                    teamUser: _v3,
                    xsrft: _v4,
                    jwt: _v5
                  },
                  uploadProcess: _v6,
                  urlsEndpointClient: _v7
                } = _v0,
                {
                  file: _v8,
                  fileData: {
                    width: _v9,
                    height: _v10,
                    size: _v11,
                    duration: _v12,
                    name: _v13
                  },
                  params: _v14 = {}
                } = _v6,
                _v15 = "",
                _v16 = !1;
              switch (_v7.serviceName) {
                case _v12.UPLOAD_SERVICE.BRANDING_BUMPERS:
                case _v12.UPLOAD_SERVICE.BRANDING_LOGO:
                  _v15 = await _v45({
                    teamUser: _v3,
                    xsrft: _v4,
                    magistoApiHost: _v2
                  });
                  let _v0 = _v6.apiConfiguration;
                  _v1 = {
                    ..._v7.params,
                    ..._v14,
                    ..._v0,
                    filename: `${_v13}`,
                    metadata: {
                      ..._v7.params.metadata,
                      ..._v14?.metadata,
                      ..._v0?.metadata,
                      asset_meta: {
                        size: _v11,
                        width: _v9,
                        height: _v10,
                        duration: _v12
                      }
                    }
                  };
                  break;
                case _v12.UPLOAD_SERVICE.AUDIO_TRACKS:
                  let _v1 = _v6.apiConfiguration,
                    _v2 = _v1?.upload?.approach ?? _v14?.upload?.approach ?? _v12.UPLOAD_APPROACH.GCS,
                    _v3 = {
                      ..._v7.params,
                      ..._v14,
                      ..._v1,
                      upload: {
                        ..._v14?.upload,
                        approach: _v2,
                        mime_type: _v8.type,
                        size: _v11
                      }
                    };
                  _v16 = _v7.serviceName === _v12.UPLOAD_SERVICE.AUDIO_TRACKS, _v1 = _v3;
                  break;
                case _v12.UPLOAD_SERVICE.CREATE_MULTIMEDIA:
                  let _v4 = _v6.apiConfiguration;
                  if (_v14?.upload?.approach === _v12.UPLOAD_APPROACH.GCS || _v4?.approach === _v12.UPLOAD_APPROACH.GCS) {
                    let _v0 = _v7.params,
                      _v1 = _v6.apiConfiguration,
                      _v2 = _v1?.upload.bucket ?? _v14?.upload?.bucket ?? _v0.upload.bucket,
                      _v3 = _v1?.upload.max_parallel_requests ?? _v14?.upload?.max_parallel_requests ?? 1;
                    _v1 = {
                      upload: {
                        ..._v14?.upload,
                        ..._v1?.upload,
                        size: `${_v11}`,
                        approach: _v12.UPLOAD_APPROACH.GCS,
                        mime_type: _v8.type,
                        bucket: _v2,
                        max_parallel_requests: _v3,
                        type: _v7.uploadTypeName
                      }
                    };
                  } else {
                    let _v0 = _v6.apiConfiguration,
                      _v1 = {
                        ..._v14?.upload,
                        ..._v0?.upload,
                        bucket: void 0
                      };
                    delete _v1.bucket, _v1 = {
                      upload: {
                        ..._v1,
                        size: `${_v11}`,
                        approach: _v12.UPLOAD_APPROACH.TUS,
                        mime_type: _v8.type,
                        type: _v7.uploadTypeName
                      }
                    };
                  }
                  break;
                case _v12.UPLOAD_SERVICE.IMAGE:
                  let _v5 = _v6.apiConfiguration;
                  _v1 = {
                    upload: {
                      ..._v14.upload,
                      ..._v5.upload,
                      size: `${_v11}`,
                      mime_type: _v8.type,
                      type: _v7.uploadTypeName
                    }
                  };
                  break;
                default:
                  throw new _v25("Invalid upload service name");
              }
              return {
                isVersionUrl: _v16,
                uploadEndpointParams: _v1,
                url: _v7.url,
                magistoSessionId: _v7.isMagistoApi ? _v15 : "",
                jwt: _v7.isVimeoApi ? _v5 : "",
                serviceName: _v7.serviceName
              };
            }, [])
          },
          {
            runUploader: _v2
          } = function () {
            let _v0 = (0, _v19.useLogger)("useRunUploader"),
              {
                uploadToEndpoints: _v1
              } = function () {
                let _v0 = (0, _v19.useLogger)("useGCSUploader"),
                  _v1 = (0, _v2.useCallback)(_v0 => Math.round(performance.now() - _v0.uploadStartTime) / 0, []),
                  _v2 = (0, _v2.useCallback)((_v0, _v1, _v2 = {}) => {
                    _v1.callbacks.onFailed?.(_v24(_v0)), _v0.error(_v0, {
                      errorMessage: _v0.message,
                      category: _v14,
                      method: "reportUploadFail",
                      component: "useGCSUploader",
                      hint: "GCS upload failed",
                      ..._v2
                    });
                  }, [_v0]),
                  _v3 = (0, _v2.useCallback)(_v0 => {
                    let _v1 = _v0.endpointUploadHandlers.reduce((_v0, _v1) => _v0 + _v1.getState().bytesUploaded + _v1.getState().partiallyUploadedBytes, 0);
                    _v0.bytesUploaded = _v1;
                  }, []),
                  _v4 = (0, _v2.useCallback)((_v0, _v1) => ({
                    onUploaded: (_v0, _v1) => {
                      let {
                        endpointDescriptor: _v2
                      } = _v0.getState();
                      _v1.finishedUploadEndpoints.add(_v2.url), _v1.finishedUploadEndpoints.size === _v1.endpointUploadHandlers.length ? (_v3(_v1), _v0.info(`[useGCSUploader: onUploaded] all endpoints have finished in ${_v0}s`, {
                        fromEndpoint: {
                          bytesUploaded: _v1,
                          bytesInChunk: _v2.file.size,
                          uploadUrl: _v2.url
                        },
                        finishedEndpoints: Array.from(_v1.finishedUploadEndpoints),
                        numTotalEndpoints: _v1.endpointUploadHandlers.length,
                        chunkName: _v2.file.name
                      })) : _v0.info(`[useGCSUploader: onUploaded] finished GCS upload to endpoint in ${_v0}s`, {
                        fromEndpoint: {
                          bytesUploaded: _v1,
                          bytesInChunk: _v2.file.size,
                          uploadUrl: _v2.url
                        },
                        chunkName: _v2.file.name,
                        finishedEndpoints: Array.from(_v1.finishedUploadEndpoints),
                        numTotalEndpoints: _v1.endpointUploadHandlers.length
                      });
                    },
                    onProgress: _v0 => {
                      let _v1 = _v1.fileSize,
                        {
                          endpointDescriptor: _v2
                        } = _v0.getState();
                      _v3(_v1);
                      let _v3 = {
                        bytesUploaded: _v1.bytesUploaded,
                        relativeProgress: 0 !== _v1 ? +Number(_v1.bytesUploaded / _v1).toFixed(2) : 0
                      };
                      _v1.callbacks.onProgress?.(_v3, {
                        ..._v0,
                        chunkName: _v2.file.name,
                        bytesInChunk: _v2.file.size,
                        uploadUrl: _v2.url
                      });
                    },
                    onFailed: _v0 => {
                      let {
                        endpointDescriptor: _v1
                      } = _v0.getState();
                      _v0.warn(`[useGCSUploader] failed GCS upload to ${_v1.url} reason: ${_v0}`, {
                        endpoints: _v1.endpointUploadHandlers.map(_v0 => _v0.getState().endpointDescriptor)
                      });
                      let {
                        uploadId: _v2,
                        uploadAttempt: _v3,
                        url: _v4
                      } = _v0.getState().endpointDescriptor;
                      _v2(new _v16.FatalError(_v0), _v1, {
                        uploadId: _v2,
                        uploadAttempt: _v3,
                        url: _v4
                      }), _v1.state = "error";
                    },
                    onUploading: () => void 0
                  }), [_v0, _v2, _v3]),
                  {
                    uploadToEndpoint: _v5
                  } = (() => {
                    let _v0 = (0, _v19.useLogger)("useGCSEndpointUploader"),
                      {
                        isActive: _v1
                      } = _v21(),
                      _v2 = (0, _v2.useCallback)(_v0 => {
                        let _v1 = new AbortController();
                        return _v0.abortRequest = () => {
                          _v0.abortRequest = void 0, _v1.abort();
                        }, _v1;
                      }, []),
                      _v3 = (0, _v2.useCallback)(_v0 => {
                        _v0.abortRequest?.(), _v0.autoRetryCleanup?.();
                      }, []),
                      _v4 = (0, _v2.useCallback)((_v0, _v1) => {
                        _v0.error(_v0, {
                          category: _v14,
                          message: _v0.message,
                          method: "reportFail",
                          component: "useGCSEndpointUploader"
                        }), _v3(_v1), _v1.callbacks.onFailed?.(_v24(_v0));
                      }, [_v3, _v0]),
                      _v5 = (0, _v2.useCallback)(_v0 => {
                        if (_v0.retriesUsed++, _v0.retriesUsed > 6) {
                          let _v0 = new _v16.FatalError("Exceeded upload retries");
                          throw _v4(_v0, _v0), _v0;
                        }
                        return _v0.retriesUsed > 4 ? (_v0.info("Exceeded range retries, restarting upload"), _v0.bytesUploaded = 0) : _v0.requestRange = !0, _v41(() => Promise.resolve(!0), _v0, _v0);
                      }, [_v0, _v4]),
                      _v6 = (0, _v2.useCallback)(_v0 => {
                        if (_v0 instanceof _v17.NetworkError) switch (_v0.status) {
                          case 400:
                          case 404:
                          case 403:
                          case 410:
                            return !0;
                          default:
                            return !1;
                        }
                        return _v0 instanceof _v16.FatalError;
                      }, []),
                      _v7 = (0, _v2.useCallback)(_v0 => {
                        let [_v1, _v2] = _v0.split("-");
                        _v0.info(`parseRangeHeader: ${_v1} -> ${_v2}`);
                        let _v3 = parseInt(_v2, 10);
                        return isNaN(_v3) ? (_v0.warn(`parseRangeHeader: finish isn't a number: ${_v3}`), !1) : _v3;
                      }, [_v0]),
                      _v8 = (0, _v2.useCallback)(_v0 => _v0[_v42] ? _v7(_v0[_v42]) : (_v0.warn("parseHeadersForRange: no 'Range' header in Headers: ", {
                        headers: _v0
                      }), !1), [_v0, _v7]),
                      _v9 = (0, _v2.useCallback)(({
                        endpointDescriptor: _v0,
                        bytesUploaded: _v1,
                        partiallyUploadedBytes: _v2
                      }) => {
                        let _v3 = _v0.file.size,
                          _v4 = _v1 + _v2;
                        return {
                          bytesUploaded: _v4,
                          relativeProgress: 0 !== _v3 ? +Number(_v4 / _v3).toFixed(2) : 0
                        };
                      }, []),
                      _v10 = (0, _v2.useCallback)(_v0 => {
                        let _v1 = _v9(_v0);
                        _v0.callbacks.onProgress?.(_v1);
                      }, [_v9]),
                      _v11 = (0, _v2.useCallback)((_v0, _v1) => {
                        let _v2 = _v8(_v0);
                        if (!1 === _v2) throw RangeError("Missing range header");
                        _v1.retriesUsed = 0, _v1.bytesUploaded = _v2, _v1.partiallyUploadedBytes = 0, _v10(_v1), _v1.requestRange = !1, _v0.info("GCS incomplete upload succeeded", {
                          bytesUploaded: _v1.bytesUploaded
                        });
                      }, [_v8, _v10, _v0]),
                      _v12 = (0, _v2.useCallback)((_v0, _v1) => {
                        if ("object" == typeof _v0 && null !== _v0 && void 0 !== _v0.isAxiosError) {
                          let _v0 = _v0;
                          _v0 = new _v17.NetworkError(_v0.message, _v0.response?.status ?? 500);
                        }
                        let _v2 = _v0 instanceof Error ? _v0 : Error(String(_v0));
                        if (_v2 instanceof _v6.CancelError || "AbortError" === _v2.name || _v40.default.isCancel(_v0)) throw new _v6.CancelError("Upload was cancelled");
                        if (_v0.warn(`onRequestReject caught error: ${_v2.name}`, {
                          component: "useGCSEndpointUploader.onRequestReject",
                          errorMessage: _v2.message,
                          retriesUsed: _v1.retriesUsed
                        }), _v6(_v2)) throw _v4(_v2, _v1), _v2;
                        return _v1.callbacks.onError?.(_v24(_v2)), _v0.warn("GCS upload - handled error", {
                          error: _v2
                        }), _v5(_v1);
                      }, [_v6, _v0, _v4, _v5]),
                      _v13 = (0, _v2.useCallback)(async (_v0, _v1) => {
                        let _v2 = "308" === _v0.headers["x-http-status-code-override"] || 308 === _v0.status;
                        if (_v0.info(`useGCSEndpointUploader.onRequestResolve: status: ${_v0.status} ${_v2 ? "; [incomplete upload]" : ""}`, {
                          headers: JSON.stringify(_v0.headers),
                          status: _v0.status,
                          statusText: _v0.statusText,
                          jsonResponse: _v0.data
                        }), _v2) _v11(_v0.headers, _v1);else if (200 !== _v0.status && 201 !== _v0.status) throw new _v17.NetworkError("Bad GCS response status", _v0.status);
                        return Promise.resolve(_v2);
                      }, [_v11, _v0]),
                      _v14 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => {
                        let _v4 = _v2(_v0);
                        return _v40.default.put(_v0.endpointDescriptor.url, _v3, {
                          method: "PUT",
                          headers: {
                            "Content-Type": _v1,
                            "Content-Range": _v2,
                            "X-GUploader-No-308": "yes"
                          },
                          signal: _v4.signal,
                          onUploadProgress: ({
                            loaded: _v0
                          }) => {
                            _v0.partiallyUploadedBytes = _v0;
                            let _v1 = _v9(_v0);
                            _v0.callbacks.onProgress?.(_v1);
                          }
                        });
                      }, [_v2, _v9]),
                      _v15 = (0, _v2.useCallback)(async _v0 => {
                        let _v1 = 0 === _v0.bytesUploaded ? 0 : _v0.bytesUploaded + 1,
                          _v2 = _v0.endpointDescriptor.file,
                          _v3 = _v2.size;
                        if (_v0.endpointDescriptor.maxRequestChunkSize) {
                          let {
                            maxRequestChunkSize: _v0
                          } = _v0.endpointDescriptor;
                          _v3 = Math.min(_v1 + Math.max(0, 0 * Math.ceil(_v0 / 0)), _v2.size);
                        }
                        let _v4 = new File([_v2.slice(_v1, _v3)], _v2.name, {
                          type: _v2.type,
                          lastModified: Date.now()
                        });
                        _v3 -= 1;
                        let _v5 = `bytes ${_v1}-${_v3}/${_v2.size}`;
                        return _v0.info(`makeUploadRequest (where range: ${_v5})`, {
                          filetype: _v2.type,
                          fileChunk: _v4.size
                        }), _v14(_v0, _v2.type, _v5, _v4);
                      }, [_v0, _v14]),
                      _v16 = (0, _v2.useCallback)(async _v0 => {
                        let _v1 = await fetch(_v0.endpointDescriptor.url, {
                          method: "DELETE",
                          headers: {
                            "Content-Length": "0"
                          }
                        });
                        if (499 === _v1.status) return _v0.debug("GCS upload was deleted", {
                          uploadLink: _v0.endpointDescriptor.url,
                          uploadId: _v0.uploadId
                        });
                        _v0.warn("GCS upload deleted incorrect status:", {
                          status: _v1.status
                        });
                      }, [_v0]),
                      _v17 = (0, _v2.useCallback)(async _v0 => {
                        _v0.info("requestRange");
                        let _v1 = `bytes */${_v0.endpointDescriptor.file.size}`;
                        return _v14(_v0, "application/octet-stream", _v1);
                      }, [_v0, _v14]),
                      _v18 = (0, _v2.useCallback)(async _v0 => {
                        try {
                          let _v0 = await (_v0.requestRange ? _v17(_v0) : _v15(_v0));
                          if (!_v1(_v0.uploadId)) throw new _v6.CancelError("Upload was cancelled");
                          return _v13(_v0, _v0);
                        } catch (_v0) {
                          return _v12(_v0, _v0);
                        }
                      }, [_v1, _v15, _v12, _v13, _v17]),
                      _v19 = (0, _v2.useCallback)(_v0 => Math.round(performance.now() - _v0.uploadStartTime) / 0, []),
                      _v20 = (0, _v2.useCallback)(_v0 => {
                        _v0.bytesUploaded = _v0.endpointDescriptor.file.size, _v0.partiallyUploadedBytes = 0, _v0.timeToUpload = _v19(_v0), _v0.debug(`GCS upload succeeded in ${_v0.timeToUpload}s`);
                      }, [_v0, _v19]),
                      _v21 = (0, _v2.useCallback)(_v0 => ({
                        fileSize: _v0.file.size,
                        uploadId: _v0.uploadId,
                        endpointDescriptor: _v0,
                        retriesUsed: 0,
                        requestRange: !1,
                        bytesUploaded: 0,
                        partiallyUploadedBytes: 0,
                        uploadStartTime: performance.now(),
                        state: "idle",
                        callbacks: {}
                      }), []),
                      _v22 = (0, _v2.useCallback)(async _v0 => {
                        let _v1 = !0;
                        for (; _v1;) _v1 = await _v18(_v0);
                      }, [_v18]),
                      _v23 = (0, _v2.useCallback)(async _v0 => {
                        try {
                          return _v0.state = "uploading", _v0.callbacks.onUploading?.(), await _v22(_v0), _v20(_v0), _v0.state = "uploaded", _v0.callbacks.onUploaded?.(_v0.timeToUpload ?? 0, _v0.bytesUploaded, _v0.state), _v0.callbacks = {}, _v0.state;
                        } catch (_v0) {
                          if (_v0 instanceof _v6.CancelError) {
                            if ("error" === _v0.state) throw new _v16.FatalError('Uploader cancelled in "error" state');
                            if ("paused" === _v0.state) throw _v0;
                            _v0.debug("statefulUpload intercepted CancelError", {
                              prevState: _v0.state
                            }), _v0.state = "canceled";
                          } else _v0.state = "error";
                          throw _v0;
                        }
                      }, [_v20, _v0, _v22]);
                    return {
                      uploadToEndpoint: (0, _v2.useCallback)(_v0 => {
                        let _v1,
                          _v2 = _v21(_v0),
                          {
                            maxRequestChunkSize: _v3,
                            file: _v4,
                            uploadId: _v5,
                            url: _v6
                          } = _v0;
                        return _v0.debug("[GCS] start upload to endpoint: ", {
                          maxRequestChunkSize: _v3,
                          fullFileSize: _v4.size,
                          uploadLink: _v6,
                          uploadId: _v5
                        }), {
                          upload: () => {
                            if ("paused" === _v2.state || "idle" === _v2.state) _v1 = _v23(_v2);else throw Error(`Wrong uploader state: ${_v2.state}`);
                            return _v1;
                          },
                          setCallbacks: _v0 => {
                            _v2.callbacks = _v0;
                          },
                          retryUpload: () => {
                            if ("error" === _v2.state) return _v0.info("Retry GCS endpoint upload from start", {
                              url: _v2.endpointDescriptor.url
                            }), _v2.retriesUsed = 0, _v2.requestRange = !0, _v2.bytesUploaded = 0, _v2.partiallyUploadedBytes = 0, _v1 = _v23(_v2);
                            _v0.warn(`Retry is not possible in ${_v2.state} state`);
                          },
                          getState: () => _v2,
                          cancel: () => {
                            _v2.callbacks = {}, _v3(_v2), _v2.state = "canceled", _v2.callbacks.onCancel?.(), _v16(_v2).catch(() => _v0.warn("failed to delete upload"));
                          },
                          pause: () => {
                            "uploading" === _v2.state && (_v0.debug("pause GCS upload"), _v3(_v2), _v2.state = "paused");
                          },
                          fail: () => {
                            "uploading" === _v2.state && (_v0.debug("FAIL GCS upload"), _v3(_v2), _v2.state = "error", _v2.callbacks.onFailed?.("NetworkError"));
                          },
                          resume: () => {
                            if ("paused" === _v2.state) return _v0.debug('resume GCS upload from "Range" offset'), _v2.requestRange = !0, _v1 = _v23(_v2);
                            _v0.warn(`Wrong state to resume GCS endpoint upload: ${_v2.state}`);
                          }
                        };
                      }, [_v3, _v21, _v0, _v16, _v23])
                    };
                  })(),
                  _v6 = (0, _v2.useCallback)((_v0, _v1, _v2, _v3) => _v1.map((_v0, _v1) => {
                    let {
                        uploadLink: _v2,
                        metadata: _v3
                      } = _v0,
                      _v4 = _v3?.connections?.uploadAttempt,
                      _v5 = _v0.slice(_v0.startByte, _v0.endByte + 1),
                      _v6 = `GCS: chunk #${_v1} of file [${_v0.name}]`;
                    return _v0.info("[sliceFileChunksByNumEndpoints] file slice for GCS uploader", {
                      fullFileSize: _v0.size,
                      fileSliceSize: _v5.size,
                      startByte: _v0.startByte,
                      endByte: _v0.endByte,
                      chunkIndex: _v1
                    }), {
                      uploadId: _v2,
                      uploadAttempt: _v4,
                      url: _v2,
                      file: new File([_v5], _v6, {
                        type: _v0.type,
                        lastModified: Date.now()
                      }),
                      approach: _v12.UPLOAD_APPROACH.GCS,
                      maxRequestChunkSize: _v3
                    };
                  }), [_v0]),
                  _v7 = (0, _v2.useCallback)((_v0, _v1) => ({
                    uploadId: _v1,
                    bytesUploaded: 0,
                    retriesUsed: 0,
                    uploadStartTime: performance.now(),
                    fileSize: _v0.size,
                    finishedUploadEndpoints: new Set(),
                    timeToUpload: void 0,
                    callbacks: {},
                    state: "idle",
                    endpointUploadHandlers: []
                  }), []),
                  _v8 = (0, _v2.useCallback)(_v0 => _v0 => {
                    _v0.endpointUploadHandlers.forEach(_v0 => {
                      _v0[_v0]();
                    });
                  }, []),
                  _v9 = (0, _v2.useCallback)((_v0, _v1) => {
                    _v0.endpointUploadHandlers = _v1.map(_v0 => {
                      let _v1 = _v5(_v0);
                      return _v1.setCallbacks(_v4(_v1, _v0)), _v1;
                    });
                  }, [_v4, _v5]),
                  _v10 = (0, _v2.useCallback)(_v0 => {
                    if (_v0.finishedUploadEndpoints.size !== _v0.endpointUploadHandlers.length) {
                      _v0.warn("[useGCSUploader: handleUploadComplete] Number of completed uploads not matching number of endpoints", {
                        finishedUploadEndpoints: _v0.finishedUploadEndpoints,
                        endpointUploadHandlers: _v0.endpointUploadHandlers
                      });
                      let _v0 = new _v16.FatalError("Number of completed uploads not matching number of endpoints");
                      throw _v0.warn(_v0.message, {
                        category: _v14,
                        finishedUploadEndpoints: _v0.finishedUploadEndpoints,
                        endpointUploadHandlers: _v0.endpointUploadHandlers
                      }), _v2(_v0, _v0), _v0;
                    }
                    _v0.timeToUpload = _v1(_v0), _v0.info(`[useGCSUploader] finished GCS parallel upload in ${_v0.timeToUpload}s`, {
                      uploadsFinishedTo: Array.from(_v0.finishedUploadEndpoints),
                      uploadsTotal: _v0.endpointUploadHandlers.length,
                      bytesUploaded: _v0.bytesUploaded,
                      bytesInFile: _v0.fileSize
                    });
                  }, [_v0, _v1, _v2]),
                  _v11 = (0, _v2.useCallback)(async _v0 => {
                    try {
                      _v0.state = "uploading";
                      let _v0 = _v0.endpointUploadHandlers.map(_v0 => {
                        let _v1 = _v0.getState().state;
                        return (_v0.info(`## Upload start for Endpoint URL: ${_v0.getState().endpointDescriptor.url}.`), "idle" === _v1) ? _v0.upload() : "error" === _v1 ? _v0.retryUpload() : "paused" === _v1 ? _v0.resume() : Error(`wrong state: ${_v1}`);
                      });
                      return _v0.callbacks.onUploading?.(), await Promise.all(_v0), _v10(_v0), _v0.state = "uploaded", _v0.callbacks.onUploaded?.(_v0.timeToUpload ?? 0, _v0.bytesUploaded, _v0.state), _v0.callbacks = {}, _v0.state;
                    } catch (_v0) {
                      if (_v0 instanceof _v6.CancelError) {
                        if ("error" === _v0.state) throw new _v16.FatalError('Uploader cancelled in "error" state');
                        if ("paused" === _v0.state) throw _v0;
                        _v0.debug("statefulUpload intercepted CancelError", {
                          prevState: _v0.state
                        }), _v0.state = "canceled";
                      } else _v0.state = "error";
                      throw _v0;
                    }
                  }, [_v10, _v0]);
                return {
                  uploadToEndpoints: (0, _v2.useCallback)(({
                    gcsUploadEndpoints: _v0,
                    file: _v1,
                    uploadId: _v2,
                    maxRequestChunkSize: _v3
                  }) => {
                    let _v4,
                      _v5 = _v7(_v1, _v2),
                      _v6 = _v8(_v5);
                    if (!_v0.length) {
                      let _v0 = new _v16.FatalError("Zero GCS upload endpoints provided");
                      throw _v2(_v0, _v5), _v0;
                    }
                    return _v9(_v5, _v6(_v1, _v0, _v2, _v3)), {
                      upload: () => {
                        if ("paused" === _v5.state || "idle" === _v5.state) _v4 = _v11(_v5);else throw Error("## BAD_STATE");
                        return _v4;
                      },
                      getState: () => _v5,
                      cancel: () => {
                        _v5.callbacks = {}, _v6("cancel"), _v5.state = "canceled", _v5.callbacks.onCancel?.();
                      },
                      pause: () => {
                        "uploading" === _v5.state && (_v6("pause"), _v5.state = "paused", _v5.callbacks.onPause?.());
                      },
                      setCallbacks: _v0 => {
                        _v5.callbacks = _v0;
                      },
                      fail: () => {
                        "uploading" === _v5.state && (_v6("fail"), _v5.callbacks.onFailed?.("NetworkError"), _v5.state = "error");
                      },
                      resume: () => {
                        if ("paused" === _v5.state) return _v0.debug("Resume GCS upload"), _v4 = _v11(_v5);
                        _v0.warn(`Wrong state to resume GCS upload: ${_v5.state}`);
                      },
                      retryUpload: () => {
                        if ("error" === _v5.state) return _v0.debug("Retry failed GCS endpoint uploads"), _v4 = _v11(_v5);
                        _v0.warn(`Retry is not possible in ${_v5.state} state`);
                      }
                    };
                  }, [_v8, _v7, _v0, _v2, _v9, _v6, _v11])
                };
              }(),
              {
                uploadToEndpoint: _v2
              } = function () {
                let _v0 = (0, _v19.useLogger)("useTusUploader"),
                  {
                    isActive: _v1
                  } = _v21(),
                  _v2 = (0, _v2.useCallback)(_v0 => {
                    let _v1 = new AbortController();
                    return _v0.abortRequest = _v0 => {
                      _v0.abortRequest = void 0, "pause" === _v0 ? _v1.abort(new _v18()) : _v1.abort();
                    }, _v1;
                  }, []),
                  _v3 = (0, _v2.useCallback)((_v0, _v1 = "cancel") => {
                    _v0.abortRequest?.(_v1), _v0.autoRetryCleanup?.();
                  }, []),
                  _v4 = (0, _v2.useCallback)(async _v0 => {
                    try {
                      let _v0 = await fetch(_v0.uploadLink, {
                        method: "DELETE",
                        headers: {
                          "Tus-Resumable": "1.0.0",
                          "Content-Type": "application/offset+octet-stream",
                          "Content-Length": "0",
                          Accept: "application/vnd.vimeo.*+json;version=3.4"
                        }
                      });
                      if (!_v0.ok) throw new _v17.NetworkError("Delete TUS upload failed", _v0.status, _v0);
                    } catch (_v0) {
                      _v0.error(_v0, {
                        category: _v14,
                        message: _v0.message,
                        method: "makeDeleteRequest",
                        component: "useTusUploader"
                      });
                    }
                  }, [_v0]),
                  _v5 = (0, _v2.useCallback)(async _v0 => {
                    let _v1 = _v2(_v0),
                      _v2 = await fetch(_v0.uploadLink, {
                        method: "HEAD",
                        headers: {
                          "Tus-Resumable": "1.0.0",
                          Accept: "application/vnd.vimeo.*+json;version=3.4"
                        },
                        signal: _v1.signal
                      });
                    if (_v2.ok && [200, 204].includes(_v2.status)) {
                      let _v0 = _v2.headers.get("Upload-Defer-Length"),
                        _v1 = _v2.headers.get("Upload-Offset"),
                        _v2 = _v2.headers.get("Upload-Length");
                      return {
                        uploadDeferLength: "1" === _v0,
                        uploadOffset: parseInt(_v1 || ""),
                        uploadLength: parseInt(_v2 || "")
                      };
                    }
                    throw new _v17.NetworkError("Get upload status failed", _v2.status, _v2);
                  }, [_v2]),
                  _v6 = (0, _v2.useCallback)(_v0 => {
                    if (_v0 instanceof _v17.NetworkError) switch (_v0.status) {
                      case 404:
                      case 403:
                      case 410:
                        return !0;
                      default:
                        return !1;
                    }
                    return _v0 instanceof _v16.FatalError;
                  }, []),
                  _v7 = (0, _v2.useCallback)(_v0 => {
                    let {
                        pendingChunks: _v1,
                        bytesUploaded: _v2,
                        partiallyUploadedBytes: _v3
                      } = _v0,
                      _v4 = _v1.reduce((_v0, _v1) => _v0 + _v1.size, 0) + _v0.uploadOffset,
                      _v5 = _v2 + _v3;
                    return {
                      relativeProgress: 0 !== _v4 ? +Number(_v5 / _v4).toFixed(2) : 0,
                      bytesUploaded: _v5
                    };
                  }, []),
                  _v8 = (0, _v2.useCallback)(_v0 => {
                    let {
                        bytesUploaded: _v1,
                        relativeProgress: _v2
                      } = _v7(_v0),
                      [_v3] = _v0.uploadedChunks.slice(-1);
                    _v0.debug("TUS received upload progress:", {
                      fromEndpoint: {
                        bytesUploaded: _v1,
                        relativeProgress: _v2,
                        uploadOffset: _v0.uploadOffset,
                        numPendingChunks: _v0.pendingChunks.length,
                        numUploadedChunks: _v0.uploadedChunks.length,
                        uploadLink: _v0.uploadLink
                      }
                    }), _v0.callbacks.onProgress?.({
                      bytesUploaded: _v1,
                      relativeProgress: _v2,
                      uploadUrl: _v0.uploadLink,
                      bytesInChunk: _v0.fileSize,
                      chunkName: _v3?.name
                    });
                  }, [_v7, _v0]),
                  _v9 = (0, _v2.useCallback)((_v0, _v1) => {
                    _v0.error(_v0, {
                      category: _v14,
                      message: _v0.message,
                      method: "reportFail",
                      component: "useTusUploader"
                    }), _v3(_v1), _v1.callbacks.onFailed?.(_v24(_v0));
                  }, [_v3, _v0]),
                  _v10 = (0, _v2.useCallback)((_v0, _v1) => {
                    if (_v0.debug("[TUS retryWithBackoff]:", {
                      used: _v0.retriesUsed,
                      max: 4
                    }), _v0.retriesUsed < 4) return _v0.retriesUsed++, _v0.requestUploadOffset = !0, _v41(_v1, _v0, _v0);
                    let _v2 = new _v16.FatalError("Exceeded upload retries");
                    throw _v9(_v2, _v0), _v2;
                  }, [_v9, _v0]),
                  _v11 = (0, _v2.useCallback)((_v0, _v1, _v2) => {
                    let _v3 = _v0 instanceof Error ? _v0 : Error(String(_v0));
                    if (_v0.warn("[onTusRequestError] caught ", {
                      error: _v0
                    }), _v3 instanceof _v18) throw _v3;
                    if (_v3 instanceof _v6.CancelError || "AbortError" === _v3.name || _v40.default.isCancel(_v0)) throw new _v6.CancelError("Upload was cancelled");
                    if (_v6(_v3)) throw _v9(_v3, _v1), _v3;
                    return _v1.callbacks.onError?.(_v24(_v3)), _v0.warn("TUS request - handled error", {
                      error: _v3
                    }), _v10(_v1, _v2);
                  }, [_v6, _v0, _v9, _v10]),
                  _v12 = (0, _v2.useCallback)(async (_v0, _v1) => {
                    let _v2,
                      _v3,
                      _v4 = _v2(_v1);
                    try {
                      _v2 = await _v40.default.patch(_v1.uploadLink, _v0, {
                        headers: {
                          "Tus-Resumable": "1.0.0",
                          "Upload-Offset": `${_v1.uploadOffset}`,
                          "Content-Type": "application/offset+octet-stream"
                        },
                        signal: _v4.signal,
                        onUploadProgress: ({
                          loaded: _v0
                        }) => {
                          _v1.partiallyUploadedBytes = _v0;
                          let _v1 = _v7(_v1);
                          _v1.callbacks.onProgress?.(_v1);
                        }
                      }), _v0.debug("received uploadChunkResponse: ", {
                        status: _v2.status,
                        statusText: _v2.statusText
                      });
                    } catch (_v0) {
                      if (_v3 = _v0, _v0.warn("caught uploadChunkError: ", {
                        code: _v3.code,
                        isAxiosError: _v3.isAxiosError,
                        errorMessage: _v3.message,
                        errorName: _v3.name,
                        errorInstance: _v3
                      }), _v4.signal.reason instanceof _v18) throw _v4.signal.reason;
                      if (_v0 instanceof _v6.CancelError || "AbortError" === _v0.name || _v40.default.isCancel(_v0)) throw _v0;
                    }
                    if (_v2 && 204 === _v2.status) {
                      let _v0 = parseInt(_v2.headers["upload-offset"] || "");
                      if (_v1.uploadOffset + _v0.size === _v0) return _v1.retriesUsed = 0, _v1.requestUploadOffset = !1, _v1.uploadOffset = _v0, _v0.debug("Chunk upload succeeded"), "success";
                      if (!_v1.requestUploadOffset) return _v1.requestUploadOffset = !0, _v0.error(RangeError("Chunk upload offset mismatch"), {
                        category: _v14,
                        method: "uploadChunk",
                        component: "useTusUploader",
                        hint: "Chunk upload failed; try recover with requestUploadOffset",
                        clientOffsetPrev: _v1.uploadOffset,
                        clientOffsetNext: _v1.uploadOffset + _v0.size,
                        serverOffset: _v0,
                        chunkSize: _v0.size
                      }), "missOffset";
                      throw new _v16.FatalError("Chunk upload offset mismatch");
                    }
                    {
                      let _v0 = new _v17.NetworkError("Chunk upload failed", _v2 ? _v2.status : Number(_v3?.response?.status ?? -1));
                      if (!_v1.requestUploadOffset) return _v1.callbacks.onError?.(_v24(_v0)), _v1.requestUploadOffset = !0, _v0.debug("TUS upload - handled error", {
                        networkError: _v0,
                        category: _v14,
                        method: "uploadChunk",
                        component: "useTusUploader",
                        hint: "Chunk upload failed; try auto-recover by fetching Upload-Offest once"
                      }), "networkError";
                      throw _v0.warn("TUS upload - failed auto-recover, propagate an error", {
                        networkError: _v0
                      }), _v0;
                    }
                  }, [_v2, _v7, _v0]),
                  _v13 = (0, _v2.useCallback)(async _v0 => {
                    let _v1 = _v2(_v0),
                      _v2 = await fetch(_v0.uploadLink, {
                        method: "PATCH",
                        headers: {
                          "Tus-Resumable": "1.0.0",
                          "Upload-Offset": `${_v0.uploadOffset}`,
                          "Upload-Length": `${_v0.uploadOffset}`,
                          "Content-Type": "application/offset+octet-stream",
                          "Content-Length": "0"
                        },
                        signal: _v1.signal
                      });
                    if (!_v2.ok) {
                      let _v0 = new _v17.NetworkError("Finalize upload failed", _v2.status, _v2);
                      throw _v0.error(_v0, {
                        category: _v14,
                        method: "finalizeUpload",
                        component: "useTusUploader"
                      }), _v0;
                    }
                  }, [_v2, _v0]),
                  _v14 = (0, _v2.useCallback)(async (_v0, _v1) => {
                    let {
                        uploadOffset: _v2
                      } = await _v5(_v0),
                      _v3 = _v1[0];
                    if (_v2 < _v0.uploadOffset || _v2 > _v0.uploadOffset + _v3.size) {
                      let _v0 = RangeError("Upload-Offset is out of expected bounds");
                      throw _v0.error(_v0, {
                        category: _v14,
                        method: "recoverUploadOffsetIssue",
                        component: "useTusUploader",
                        uploadOffset: _v2,
                        expectedBounds: [_v0.uploadOffset, _v0.uploadOffset + _v3.size]
                      }), _v0.callbacks.onFailed?.("FatalError"), _v0;
                    }
                    return _v2 > _v0.uploadOffset && (_v2 === _v0.uploadOffset + _v3.size ? (_v0.error(RangeError("Chunk is already uploaded, skip to the next one"), {
                      category: _v14,
                      method: "recoverUploadOffsetIssue",
                      component: "useTusUploader",
                      serverUploadOffset: _v2,
                      clientUploadOffest: _v0.uploadOffset,
                      pendingChunksLength: _v1.length
                    }), _v1.shift()) : (_v0.error(RangeError("Chunk is partially uploaded"), {
                      category: _v14,
                      method: "upload",
                      component: "Uploader",
                      serverUploadOffset: _v2,
                      clientUploadOffest: _v0.uploadOffset,
                      pendingChunksLength: _v1.length
                    }), _v1[0] = new File([_v3.slice(_v2 - _v0.uploadOffset)], _v3.name, {
                      type: _v3.type,
                      lastModified: Date.now()
                    })), _v0.uploadOffset = _v2), _v1;
                  }, [_v5, _v0]),
                  _v15 = (0, _v2.useCallback)(_v0 => Math.round(performance.now() - _v0.uploadStartTime) / 0, []),
                  _v16 = (0, _v2.useCallback)(async _v0 => {
                    if (_v0.requestUploadOffset && (_v0.debug("[TUS][perform upload step w/ RECOVER]"), _v0.pendingChunks = await _v14(_v0, _v0.pendingChunks), _v0.debug("[TUS][perform upload step w/ RECOVER]", {
                      pendingChunksLength: _v0.pendingChunks.length
                    }), 0 === _v0.pendingChunks.length)) return;
                    let _v1 = _v0.pendingChunks[0];
                    _v0.debug("[TUS][perform upload step]: ", {
                      size: _v1.size,
                      type: _v1.type
                    });
                    let _v2 = await _v12(_v1, _v0);
                    if (_v0.debug("[TUS][perform upload step] makeUploadRequest status: ", {
                      status: _v2
                    }), "success" === _v2) {
                      let _v0 = _v0.pendingChunks.shift();
                      _v0.uploadedChunks.push(_v0), _v0.bytesUploaded = _v0.uploadOffset, _v0.partiallyUploadedBytes = 0, _v0.debug('[TUS][perform upload step] status "success": ', {
                        numUploadedChunks: _v0.uploadedChunks.length,
                        bytesUploaded: _v0.bytesUploaded
                      }), _v8(_v0), _v0.debug("TUS chunk upload succeeded: ", {
                        uploadedCount: _v0.uploadedChunks.length,
                        pendingChunksCount: _v0.pendingChunks.length,
                        bytesUploaded: _v0.bytesUploaded
                      });
                    }
                  }, [_v12, _v14, _v8, _v0]),
                  _v17 = (0, _v2.useCallback)(async _v0 => {
                    for (; _v0.pendingChunks.length > 0;) await _v16(_v0);
                    if ((await _v5(_v0)).uploadDeferLength && (await _v13(_v0)), !_v1(_v0.uploadId)) throw new _v6.CancelError("Upload was cancelled");
                    _v0.timeToUpload = _v15(_v0), _v0.partiallyUploadedBytes = 0;
                    let {
                      uploadLink: _v1,
                      uploadId: _v2,
                      timeToUpload: _v3
                    } = _v0;
                    _v0.debug("[TUS] upload succeeded : ", {
                      timeToUpload: _v3,
                      uploadLink: _v1,
                      uploadId: _v2
                    });
                  }, [_v5, _v15, _v1, _v0, _v16, _v13]),
                  _v18 = (0, _v2.useCallback)((_v0, _v1, _v2) => ({
                    bytesUploaded: 0,
                    partiallyUploadedBytes: 0,
                    fileSize: 0,
                    callbacks: {},
                    retriesUsed: 0,
                    uploadOffset: 0,
                    uploadId: _v1,
                    uploadLink: _v0,
                    uploadStartTime: performance.now(),
                    state: "idle",
                    requestUploadOffset: !1,
                    pendingChunks: _v2,
                    uploadedChunks: []
                  }), []),
                  _v19 = (0, _v2.useCallback)(async _v0 => {
                    try {
                      await _v17(_v0);
                    } catch (_v0) {
                      return _v11(_v0, _v0, () => _v19(_v0));
                    }
                  }, [_v11, _v17]),
                  _v20 = (0, _v2.useCallback)(async _v0 => {
                    try {
                      return _v0.state = "uploading", _v0.callbacks.onUploading?.(), await _v19(_v0), _v0.state = "uploaded", _v0.callbacks.onUploaded?.(_v0.timeToUpload ?? 0, _v0.uploadOffset, _v0.state), _v0.callbacks = {}, _v0.state;
                    } catch (_v0) {
                      if (_v0 instanceof _v18) throw _v0;
                      if (_v0 instanceof _v6.CancelError || "AbortError" === _v0.name || _v40.default.isCancel(_v0)) {
                        if ("error" === _v0.state) throw new _v16.FatalError('Uploader cancelled in "error" state');
                        if ("paused" === _v0.state) throw _v0;
                        _v0.debug("statefulUpload intercepted CancelError", {
                          prevState: _v0.state
                        }), _v0.state = "canceled", _v0.callbacks = {};
                      } else _v0.state = "error";
                      throw _v0;
                    }
                  }, [_v0, _v19]),
                  _v21 = (_v0, _v1 = _v0.size, _v2 = 0) => [...Array(Math.ceil(_v0.size / _v1))].map((_v0, _v1) => {
                    let _v2 = _v1 * _v1,
                      _v3 = Math.min(_v2 + _v1, _v0.size);
                    return new File([_v0.slice(_v2, _v3)], `TUS: chunk #${_v1} of file [${_v0.name}] with index #${_v2}`, {
                      type: _v0.type,
                      lastModified: Date.now()
                    });
                  }),
                  _v22 = (0, _v2.useCallback)((_v0, _v1) => _v0 instanceof FileList ? Array.from(_v0).flatMap((_v0, _v1) => _v21(_v0, _v1, _v1)) : _v21(_v0, _v1), []);
                return {
                  uploadToEndpoint: (0, _v2.useCallback)(({
                    uploadLink: _v0,
                    file: _v1,
                    maxRequestChunkSize: _v2,
                    uploadId: _v3
                  }) => {
                    let _v4,
                      _v5 = _v22(_v1, _v2);
                    _v0.debug("[TUS] Start upload to endpoint: ", {
                      maxRequestChunkSize: _v2,
                      fullFileSize: _v1 instanceof File ? _v1.size : void 0,
                      uploadLink: _v0,
                      uploadId: _v3,
                      numFileParts: _v5.length,
                      filePartsInfo: _v5.map(({
                        size: _v0,
                        name: _v1,
                        type: _v2
                      }) => ({
                        size: _v0,
                        name: _v1,
                        type: _v2
                      }))
                    });
                    let _v6 = _v18(_v0, _v3, _v5);
                    return _v6.fileSize = _v1.size, {
                      upload: () => {
                        if ("paused" === _v6.state || "idle" === _v6.state) _v4 = _v20(_v6);else throw Error(`Wrong uploader state: ${_v6.state}`);
                        return _v4;
                      },
                      setCallbacks: _v0 => {
                        _v6.callbacks = _v0;
                      },
                      pause: () => {
                        "uploading" === _v6.state ? (_v0.debug("pause TUS upload"), _v3(_v6, "pause"), _v6.state = "paused", _v6.callbacks.onPause?.()) : _v0.warn(`Wrong state to pause TUS endpoint upload: ${_v6.state}`);
                      },
                      resume: () => {
                        if ("paused" === _v6.state) return _v0.debug("resume TUS upload from upload offset"), _v6.requestUploadOffset = !0, _v4 = _v20(_v6);
                        _v0.warn(`Wrong state to resume TUS endpoint upload: ${_v6.state}`);
                      },
                      getState: () => _v6,
                      retryUpload: () => {
                        if ("error" === _v6.state) return _v0.debug("Retry TUS upload from upload offset"), _v6.requestUploadOffset = !0, _v6.retriesUsed = 0, _v6.partiallyUploadedBytes = 0, _v4 = _v20(_v6);
                        _v0.warn(`Retry is not possible in ${_v6.state} state`);
                      },
                      fail: () => {
                        "uploading" === _v6.state && (_v3(_v6), _v6.state = "error", _v6.callbacks.onFailed?.("NetworkError"));
                      },
                      cancel: () => {
                        _v0.debug("cancel TUS upload"), _v3(_v6), _v6.state = "canceled", _v6.callbacks.onCancel?.(), _v4(_v6).catch(() => void 0), _v6.callbacks = {};
                      },
                      addFileParts: _v0 => {
                        if ("uploading" === _v6.state) {
                          let _v0 = _v22(_v0, _v2);
                          _v6.pendingChunks.push(..._v0), _v6.fileSize += _v0.size, _v0.debug("[TUS] added more file chunks: ", {
                            newFileSize: _v6.fileSize,
                            numAddedChunks: _v0.length,
                            numPending: _v6.pendingChunks.length,
                            addedChunksInfo: _v0.map(({
                              size: _v0,
                              name: _v1,
                              type: _v2
                            }) => ({
                              size: _v0,
                              name: _v1,
                              type: _v2
                            }))
                          });
                        }
                      }
                    };
                  }, [_v3, _v22, _v18, _v0, _v4, _v20])
                };
              }(),
              {
                uploadToEndpoint: _v3
              } = function () {
                let _v0 = (0, _v19.useLogger)("useImageUploader"),
                  {
                    isActive: _v1
                  } = _v21(),
                  _v2 = (0, _v2.useCallback)(_v0 => {
                    let _v1 = new AbortController();
                    return _v0.abortRequest = () => {
                      _v0.abortRequest = void 0, _v1.abort();
                    }, _v1;
                  }, []),
                  _v3 = (0, _v2.useCallback)(_v0 => Math.round(performance.now() - _v0.uploadStartTime) / 0, []),
                  _v4 = (0, _v2.useCallback)(_v0 => {
                    _v0.abortRequest?.(), _v0.autoRetryCleanup?.();
                  }, []),
                  _v5 = (0, _v2.useCallback)(({
                    bytesUploaded: _v0,
                    callbacks: _v1,
                    fileSize: _v2,
                    uploadLink: _v3,
                    file: _v4
                  }) => {
                    _v1.onProgress?.({
                      bytesUploaded: _v0,
                      relativeProgress: 0 !== _v2 ? +Number(_v0 / _v2).toFixed(2) : 0,
                      uploadUrl: _v3,
                      chunkName: _v4.name,
                      bytesInChunk: _v2
                    });
                  }, []),
                  _v6 = (0, _v2.useCallback)(async _v0 => {
                    let _v1 = _v2(_v0),
                      _v2 = await _v40.default.put(_v0.uploadLink, _v0.file, {
                        method: "PUT",
                        signal: _v1.signal,
                        onUploadProgress: ({
                          loaded: _v0
                        }) => {
                          _v0.bytesUploaded = _v0, _v5(_v0);
                        }
                      });
                    if (!_v2.status) throw new _v17.NetworkError("Image upload failed", _v2.status);
                  }, [_v2, _v5]),
                  _v7 = (0, _v2.useCallback)(_v0 => {
                    if (_v0 instanceof _v17.NetworkError) switch (_v0.status) {
                      case 400:
                      case 404:
                      case 403:
                      case 410:
                      case 409:
                        return !0;
                      default:
                        return !1;
                    }
                    return _v0 instanceof _v16.FatalError;
                  }, []),
                  _v8 = (0, _v2.useCallback)((_v0, _v1) => {
                    _v0.error(_v0, {
                      category: _v14,
                      message: _v0.message,
                      method: "reportFail",
                      component: "useImageUploader"
                    }), _v4(_v1), _v1.callbacks.onFailed?.(_v24(_v0));
                  }, [_v4, _v0]),
                  _v9 = (0, _v2.useCallback)(_v0 => {
                    if (_v0.retriesUsed < 3) return _v0.retriesUsed++, _v41(() => Promise.resolve(), _v0, _v0);
                    let _v1 = new _v16.FatalError("Exceeded upload retries");
                    throw _v8(_v1, _v0), _v1;
                  }, [_v0, _v8]),
                  _v10 = (0, _v2.useCallback)((_v0, _v1) => {
                    let _v2 = _v0 instanceof Error ? _v0 : Error(String(_v0));
                    if (_v2 instanceof _v6.CancelError || "AbortError" === _v2.name || _v40.default.isCancel(_v0)) throw new _v6.CancelError("Upload was cancelled");
                    if (_v7(_v2)) throw _v8(_v2, _v1), _v2;
                    return _v1.callbacks.onError?.(_v24(_v2)), _v0.warn("Image upload - handled error", {
                      error: _v2
                    }), _v9(_v1);
                  }, [_v7, _v0, _v8, _v9]),
                  _v11 = (0, _v2.useCallback)(async _v0 => {
                    try {
                      if (await _v6(_v0), !_v1(_v0.uploadId)) throw new _v6.CancelError("Upload was cancelled");
                      _v0.state = "uploaded", _v0.timeToUpload = _v3(_v0), _v0.bytesUploaded = _v0.fileSize, _v0.callbacks.onUploaded?.(_v0.timeToUpload, _v0.bytesUploaded, _v0.state), _v0.info(`Image upload succeeded in ${_v0.timeToUpload}s`);
                    } catch (_v0) {
                      return _v10(_v0, _v0);
                    }
                  }, [_v1, _v0, _v6, _v3, _v10]),
                  _v12 = (0, _v2.useCallback)(async _v0 => {
                    for (; "uploaded" !== _v0.state;) await _v11(_v0);
                  }, [_v11]),
                  _v13 = (0, _v2.useCallback)((_v0, _v1, _v2) => ({
                    bytesUploaded: 0,
                    retriesUsed: 0,
                    uploadStartTime: performance.now(),
                    fileSize: _v0.size,
                    timeToUpload: void 0,
                    callbacks: {},
                    state: "idle",
                    file: _v0,
                    uploadLink: _v1,
                    uploadId: _v2
                  }), []),
                  _v14 = (0, _v2.useCallback)(async _v0 => {
                    try {
                      return _v0.state = "uploading", _v0.callbacks.onUploading?.(), await _v12(_v0), _v0.state = "uploaded", _v0.callbacks = {}, _v0.state;
                    } catch (_v0) {
                      throw _v0 instanceof _v6.CancelError ? (_v0.debug("statefulUpload intercepted CancelError"), _v0.state = "canceled") : _v0.state = "error", _v0;
                    }
                  }, [_v0, _v12]);
                return {
                  uploadToEndpoint: (0, _v2.useCallback)(async ({
                    file: _v0,
                    uploadLink: _v1,
                    uploadId: _v2
                  }) => {
                    let _v3,
                      _v4 = _v13(_v0, _v1, _v2);
                    return {
                      upload: () => {
                        if ("paused" === _v4.state || "idle" === _v4.state) _v3 = _v14(_v4);else throw Error(`Wrong Image uploader state: ${_v4.state}`);
                        return _v3;
                      },
                      setCallbacks: _v0 => {
                        _v4.callbacks = _v0;
                      },
                      pause: () => void 0,
                      resume: () => void 0,
                      fail: () => void 0,
                      getState: () => _v4,
                      retryUpload: () => {
                        "error" === _v4.state ? (_v0.debug("Retry Image upload"), _v4.retriesUsed = 0, _v4.bytesUploaded = 0, _v3 = _v14(_v4)) : _v0.warn(`Retry is not possible in ${_v4.state} state`);
                      },
                      cancel: () => {
                        _v4.callbacks = {}, _v4(_v4), _v4.state = "canceled", _v4.callbacks.onCancel?.();
                      }
                    };
                  }, [_v4, _v13, _v0, _v14])
                };
              }(),
              {
                setUploadProgress: _v4,
                setUploadError: _v5,
                setUploadHandle: _v6,
                setUploadStatus: _v7
              } = (0, _v10.useUploaderStore)(_v0 => _v0.private),
              _v8 = (0, _v2.useMemo)(() => (0, _v39.default)((_v0, _v1, _v2, _v3) => {
                _v0.debug(`[${_v0}] received upload progress from endpoint: `, {
                  ..._v3,
                  totalProgress: _v2
                }), _v4({
                  id: _v1,
                  ..._v2
                });
              }, 500), [_v0, _v4]);
            return {
              runUploader: (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
                let _v3,
                  {
                    id: _v4,
                    file: _v5,
                    fileId: _v6
                  } = _v1,
                  {
                    storageObjectId: _v7
                  } = _v0,
                  _v8 = Promise.resolve(),
                  _v9 = _v10.useUploaderStore.getState().config.maxRequestChunkSize,
                  _v10 = {
                    onPause: () => _v7({
                      id: _v4,
                      status: _v12.UPLOAD_PROCESS_STATUS.PAUSED
                    }),
                    onUploading: () => _v7({
                      id: _v4,
                      status: _v12.UPLOAD_PROCESS_STATUS.UPLOADING
                    }),
                    onCancel: () => _v7({
                      id: _v4,
                      status: _v12.UPLOAD_PROCESS_STATUS.FAILED
                    }),
                    onProgress: (_v0, _v1) => {
                      _v8(_v0.uploaderType, _v4, _v0, _v1);
                    },
                    onFailed: _v0 => _v5({
                      id: _v4,
                      error: _v0,
                      status: _v12.UPLOAD_PROCESS_STATUS.FAILED
                    }),
                    onUploaded: (_v0, _v1, _v2) => {
                      _v0.info(`Upload uuid:${_v4} completed`, {
                        fileSize: _v5.size,
                        uploadDuration: _v0,
                        bytesUploaded: _v1,
                        uploadId: _v4,
                        gcsEndpoints: _v0.uploaderType === _v12.UPLOAD_APPROACH.GCS ? _v0.gcsUploadEndpoints.map(_v0 => _v0.uploadLink) : void 0
                      }), _v8 = _v2(_v2, _v0);
                    }
                  };
                if (_v0.uploaderType === _v12.UPLOAD_APPROACH.GCS) {
                  let _v0 = _v1({
                    gcsUploadEndpoints: _v0.gcsUploadEndpoints,
                    file: _v5,
                    uploadId: _v4,
                    storageObjectId: _v7,
                    maxRequestChunkSize: _v9
                  });
                  _v0.setCallbacks(_v10), _v6({
                    id: _v4,
                    fileId: _v6,
                    storageObjectId: _v7,
                    uploadHandle: _v0,
                    approach: _v12.UPLOAD_APPROACH.GCS,
                    numberEndpoints: _v0.getState().endpointUploadHandlers.length
                  }), _v3 = await _v0.upload();
                } else if (_v0.uploaderType === _v12.UPLOAD_APPROACH.TUS) {
                  let _v0 = _v2({
                    uploadLink: _v0.tusUploadLink,
                    file: _v5,
                    uploadId: _v4,
                    storageObjectId: _v7,
                    maxRequestChunkSize: _v9
                  });
                  _v0.setCallbacks(_v10), _v6({
                    id: _v4,
                    fileId: _v6,
                    storageObjectId: _v7,
                    uploadHandle: _v0,
                    approach: _v12.UPLOAD_APPROACH.TUS
                  }), _v3 = await _v0.upload();
                } else {
                  let _v0 = await _v3({
                    uploadId: _v4,
                    file: _v5,
                    uploadLink: _v0.imageUploadLink,
                    storageObjectId: _v7
                  });
                  _v6({
                    id: _v4,
                    fileId: _v6,
                    storageObjectId: _v7,
                    uploadHandle: _v0,
                    approach: _v12.UPLOAD_APPROACH.IMAGE
                  }), _v0.setCallbacks(_v10), _v3 = await _v0.upload();
                }
                "paused" === _v3 ? _v0.debug("Upload was paused by user.") : await _v8;
              }, [_v0, _v5, _v6, _v8, _v7, _v3, _v1, _v2])
            };
          }(),
          _v3 = (0, _v19.useLogger)("useUploadForFile"),
          {
            getUploadUrls: _v4
          } = (() => {
            let {
                isActive: _v0
              } = _v21(),
              _v1 = _v11(),
              _v2 = (0, _v19.useLogger)("useGetUploadUrls"),
              _v3 = (0, _v10.useUploaderStore)(_v0 => _v0.private.setAbortGetUrlsRequest),
              _v4 = (0, _v10.useUploaderStore)(_v0 => _v0.private.setRetryGetUrlsRequest),
              _v5 = (0, _v2.useCallback)((_v0, _v1) => {
                let _v2,
                  _v3,
                  _v4 = "",
                  _v5 = [];
                try {
                  switch (_v1.serviceName) {
                    case _v12.UPLOAD_SERVICE.BRANDING_BUMPERS:
                    case _v12.UPLOAD_SERVICE.BRANDING_LOGO:
                      let _v0 = _v26(_v0, _v27, _v1.serviceName);
                      return _v5 = _v0.gcs.upload.gcs, _v4 = _v0.gcs.storageObjectId, {
                        uploaderType: _v12.UPLOAD_APPROACH.GCS,
                        storageObjectId: _v4,
                        gcsUploadEndpoints: _v5,
                        gcsUid: _v0.gcs.upload.gcsUid
                      };
                    case _v12.UPLOAD_SERVICE.AUDIO_TRACKS:
                      if (_v1.uploadEndpointParams.upload.approach === _v12.UPLOAD_APPROACH.GCS) {
                        let _v0 = _v26(_v0, _v28, _v1.serviceName);
                        return _v5 = _v0.upload.gcs, _v4 = _v0.uri, {
                          uploaderType: _v12.UPLOAD_APPROACH.GCS,
                          storageObjectId: _v4,
                          gcsUploadEndpoints: _v5,
                          gcsUid: _v0.upload.gcsUid
                        };
                      }
                      {
                        let _v0 = _v26(_v0, _v29, _v1.serviceName);
                        return _v2 = _v0.upload.uploadLink, _v4 = _v0.uri, {
                          uploaderType: _v12.UPLOAD_APPROACH.TUS,
                          tusUploadLink: _v2,
                          storageObjectId: _v4
                        };
                      }
                    case _v12.UPLOAD_SERVICE.CREATE_MULTIMEDIA:
                      if (_v1.uploadEndpointParams.upload.approach === _v12.UPLOAD_APPROACH.GCS) {
                        let _v0 = _v26(_v0, _v32, _v1.serviceName);
                        return _v5 = _v0.upload.gcs, _v4 = _v0.storageObjectId, {
                          uploaderType: _v12.UPLOAD_APPROACH.GCS,
                          storageObjectId: _v4,
                          gcsUploadEndpoints: _v5,
                          gcsUid: _v0.upload.gcsUid
                        };
                      }
                      {
                        let _v0 = _v26(_v0, _v31, _v1.serviceName);
                        return _v2 = _v0.upload.uploadLink, _v4 = _v0.storageObjectId, {
                          uploaderType: _v12.UPLOAD_APPROACH.TUS,
                          tusUploadLink: _v2,
                          storageObjectId: _v4
                        };
                      }
                    case _v12.UPLOAD_SERVICE.IMAGE:
                    default:
                      let _v1 = _v26(_v0, _v30, _v1.serviceName);
                      return _v3 = _v1.upload.uploadLink, _v4 = _v1.storageObjectId, {
                        uploaderType: _v12.UPLOAD_APPROACH.IMAGE,
                        imageUploadLink: _v3,
                        storageObjectId: _v4
                      };
                  }
                } catch (_v0) {
                  throw _v2.error(_v0, {
                    category: _v13,
                    message: _v0.message,
                    method: "mapUploadUrlsResponse",
                    uploadUrlsResponseData: _v0
                  }), _v0;
                }
              }, [_v2]),
              _v6 = (0, _v2.useCallback)(_v0 => {
                if (_v0 instanceof _v17.NetworkError) {
                  let _v0 = {
                    category: _v13,
                    message: _v0.message,
                    method: "onRequestError",
                    status: _v0.status,
                    statusText: _v0.res?.statusText,
                    responseText: "",
                    responseTextParsed: ""
                  };
                  _v0.res?.text().then(_v0 => {
                    _v0.responseText = _v0, _v0.responseTextParsed = (() => {
                      try {
                        return JSON.parse(_v0);
                      } catch {
                        return _v0;
                      }
                    })();
                  }).finally(() => _v2.error(_v0, _v0));
                }
                if (_v0 instanceof _v17.NetworkError && [400, 403, 404].includes(_v0.status)) throw new _v16.FatalError(_v0.message);
                if (_v0 instanceof _v6.CancelError || _v0 instanceof Error && "AbortError" === _v0.name) throw new _v6.CancelError("Get upload urls request was cancelled");
                throw _v0;
              }, [_v2]),
              _v7 = (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
                try {
                  let {
                    isVersionUrl: _v0,
                    magistoSessionId: _v1,
                    jwt: _v2,
                    uploadEndpointParams: _v3,
                    url: _v4
                  } = _v1;
                  _v2.debug("requestGetUploadUrls before request: ", {
                    isVersionUrl: _v0,
                    magistoSessionId: _v1,
                    uploadEndpointParams: _v3,
                    url: _v4
                  });
                  let _v5 = new AbortController();
                  _v3({
                    uploadId: _v0,
                    abort: _v0 => {
                      _v2.state = "canceled", _v0 ? _v5.abort(new _v16.FatalError("Simulate network fail")) : _v5.abort(), _v2.autoRetryCleanup?.();
                    }
                  });
                  let _v6 = {
                    method: "POST",
                    headers: {
                      Authorization: _v2 ? `jwt ${_v2}` : `${_v1}`,
                      "Content-Type": "application/json"
                    },
                    signal: _v5.signal
                  };
                  _v0 && (_v6.headers.Accept = "application/vnd.vimeo.*+json;version=3.4.10"), _v1 && (_v6.headers["X-Requested-With"] = "XMLHttpRequest"), _v6.body = JSON.stringify(_v3);
                  let _v7 = await fetch(_v4, _v6);
                  if (!_v7.ok) throw new _v17.NetworkError(`Failed to get upload urls for service with status text: ${_v7.statusText}`, _v7.status, _v7);
                  if (!_v0(_v0)) throw new _v6.CancelError("Upload was cancelled");
                  _v2.debug("requestGetUploadUrls response: ", {
                    ok: _v7.ok,
                    status: _v7.status
                  });
                  let _v8 = await _v7.json();
                  return _v2.debug("requestGetUploadUrls json: ", {
                    json: JSON.stringify(_v8)
                  }), (0, _v20.camelizeDeep)(_v8);
                } catch (_v0) {
                  return _v6(_v0);
                }
              }, [_v0, _v2, _v6, _v3]),
              _v8 = (0, _v2.useCallback)(async (_v0, _v1, _v2, _v3) => {
                try {
                  let _v0 = {
                      retriesUsed: 0
                    },
                    _v1 = await _v23(() => _v7(_v0, _v1, _v0), _v0),
                    _v2 = _v5(_v1, _v1);
                  return _v2(_v2), _v2;
                } catch (_v0) {
                  throw _v0 instanceof _v6.CancelError || _v0?.name === "AbortError" || _v4({
                    uploadId: _v0,
                    retryGetUploadUrls: () => {
                      if (_v0(_v0) && _v1(_v0) === _v12.UPLOAD_PROCESS_STATUS.FAILED) return _v8(_v0, _v1, _v2, _v3).then(() => void 0).catch(_v0 => _v3(_v0, _v0));
                    }
                  }), _v2.error(_v0, {
                    category: _v13,
                    message: _v0.message,
                    method: "getUploadUrls"
                  }), _v0;
                }
              }, [_v1, _v0, _v2, _v5, _v7, _v4]);
            return {
              getUploadUrls: _v8
            };
          })(),
          {
            pollTranscodingStatus: _v5
          } = (() => {
            let _v0 = (0, _v19.useLogger)("useTranscoding"),
              {
                isActive: _v1
              } = _v21(),
              _v2 = (0, _v2.useCallback)(async (_v0, _v1, _v2) => {
                let _v3 = {};
                _v1 ? (_v3.Authorization = `jwt ${_v1}`, _v3.Accept = "application/vnd.vimeo.*+json;version=3.4.10") : _v3["X-Requested-With"] = "XMLHttpRequest";
                let _v4 = await fetch(_v0, {
                  method: "GET",
                  headers: _v3,
                  signal: _v2.signal
                });
                if (!_v4.ok) throw new _v17.NetworkError("Error polling asset transcode status", _v4.status, _v4);
                let _v5 = await _v4.json();
                return (0, _v20.camelizeDeep)(_v5);
              }, []);
            return {
              pollTranscodingStatus: (0, _v2.useCallback)(({
                uploadId: _v0,
                transcodingUrl: _v1,
                jwt: _v2,
                serviceName: _v3,
                onTranscodingCompletion: _v4
              }) => {
                let _v5, _v6;
                switch (_v3) {
                  case _v12.UPLOAD_SERVICE.BRANDING_BUMPERS:
                  case _v12.UPLOAD_SERVICE.BRANDING_LOGO:
                  case _v12.UPLOAD_SERVICE.AUDIO_TRACKS:
                    break;
                  default:
                    return _v0.warn(`Unsupported service for transcoding step: ${_v3}`), {};
                }
                let _v7 = 0,
                  _v8 = 0,
                  _v9 = async ({
                    uploadId: _v0,
                    url: _v1,
                    jwt: _v2,
                    timeout: _v3 = 250
                  }) => {
                    if (!_v1(_v0)) return null;
                    if (_v7 >= 200) return _v0.warn("reached MAX_REQUESTS_LIMIT for polling transcode status of asset", {
                      category: _v15,
                      method: "fetchAssetStatus",
                      uploadId: _v0,
                      transcodingUrl: _v1
                    }), null;
                    let _v4 = 0;
                    try {
                      _v5 = new AbortController();
                      let _v0 = await _v2(_v1, _v2 || null, _v5);
                      if (_v0.debug("transcoding response: ", {
                        parsedResponse: _v0,
                        uploadId: _v0,
                        transcodingUrl: _v1
                      }), !_v1(_v0)) return null;
                      _v8 = 0;
                      let _v1 = _v12.STATUS.PENDING;
                      if (_v3 === _v12.UPLOAD_SERVICE.BRANDING_BUMPERS) _v1 = _v0.bumpers.jobStatus;else if (_v3 === _v12.UPLOAD_SERVICE.BRANDING_LOGO) _v1 = _v0.logo.jobStatus;else {
                        let _v0 = _v0.transcode?.status;
                        _v4 = 0, _v1 = _v0 === _v12.AUDIO_TRACKS_UPLOAD_STATUS.COMPLETE ? _v12.STATUS.DONE : _v0 === _v12.AUDIO_TRACKS_UPLOAD_STATUS.ERROR ? _v12.STATUS.FAILED : _v12.STATUS.PENDING;
                      }
                      if (_v1 === _v12.STATUS.DONE) {
                        if (!_v1(_v0)) return null;
                        _v4({
                          transcodingStatus: _v12.STATUS.DONE,
                          result: _v0
                        });
                        return;
                      }
                      if (_v1 === _v12.STATUS.FAILED) {
                        if (!_v1(_v0)) return null;
                        _v4({
                          transcodingStatus: _v12.STATUS.FAILED,
                          result: _v0
                        });
                        return;
                      }
                    } catch (_v0) {
                      if (_v0 instanceof Error && "AbortError" === _v0.name) return;
                      if (_v8 >= 3) throw _v0;
                      _v0.warn("Error polling asset transcode status, will retry", {
                        message: _v0?.message,
                        name: _v0?.name,
                        uploadId: _v0
                      }), _v8++;
                    }
                    _v6 = setTimeout(async () => {
                      let _v0 = _v4 || 2 * _v3;
                      _v7++;
                      try {
                        await _v9({
                          url: _v1,
                          jwt: _v2,
                          timeout: _v0,
                          uploadId: _v0
                        });
                      } catch (_v0) {
                        _v0.error(_v0, {
                          category: _v15,
                          method: "fetchAssetStatus",
                          message: "Error polling asset transcode status",
                          uploadId: _v0,
                          transcodingUrl: _v1
                        });
                      }
                    }, _v3);
                  };
                return _v9({
                  url: _v1,
                  jwt: _v2,
                  uploadId: _v0
                }), {
                  stopTranscodePolling: () => {
                    _v0.debug("abort polling transcode status of asset"), clearTimeout(_v6), _v5?.abort();
                  }
                };
              }, [_v2, _v1, _v0])
            };
          })(),
          _v6 = _v11(),
          {
            setUploadCompleted: _v7,
            setUploadError: _v8,
            setTranscodingStep: _v9,
            setTranscodingCompleted: _v10,
            setUploadStatus: _v11
          } = (0, _v10.useUploaderStore)(_v0 => _v0.private),
          _v12 = (0, _v2.useCallback)(async ({
            clipId: _v0,
            jwt: _v1,
            vimeoUploadId: _v2
          }) => {
            let _v3 = `https://${_v0}/videos/${_v0}/upload_attempts/${_v2}/complete`;
            try {
              let _v0 = await fetch(_v3, {
                method: "POST",
                body: JSON.stringify({
                  title: ""
                }),
                headers: {
                  Authorization: `jwt ${_v1}`,
                  "Content-Type": "application/json"
                }
              });
              if (!_v0.ok) throw new _v17.NetworkError("Failed to complete audio track", _v0.status, _v0);
            } catch (_v0) {
              _v3.error(_v0, {
                category: "SET_ASSET_COMPLETE",
                method: "setAudioTrackComplete",
                message: "Failed to complete audio track",
                vimeoUploadId: _v2,
                completeUrl: _v3
              });
            }
          }, [_v0, _v3]),
          _v13 = (0, _v2.useCallback)((_v0, _v1) => {
            let _v2 = _v0 instanceof Error ? _v0 : Error(String(_v0)),
              _v3 = _v6(_v1);
            if (_v2 instanceof _v18) return _v3.warn(`Upload ${_v1} was paused, reason: PauseError`);
            if (_v2 instanceof _v6.CancelError || "AbortError" === _v2.name) if (_v3 === _v12.UPLOAD_PROCESS_STATUS.PAUSED) return _v3.warn(`Upload ${_v1} was paused while [${_v3}]`);else return _v11({
              id: _v1,
              status: _v12.UPLOAD_PROCESS_STATUS.CANCELLED
            }), _v3.warn("Upload was cancelled");
            _v8({
              id: _v1,
              status: _v12.UPLOAD_PROCESS_STATUS.FAILED
            }), _v3.error(_v2, {
              error: _v2,
              message: "Upload have failed",
              section: "ARTIFACTS_UPLOADER - UPLOAD ERROR",
              category: _v14,
              method: "initUploadForFile",
              uploadId: _v1
            });
          }, [_v6, _v3, _v8, _v11]);
        return {
          initUploadForFile: (0, _v2.useCallback)(async _v0 => {
            let {
                hostParams: {
                  clipId: _v1
                },
                api: {
                  magistoApiHost: _v2,
                  jwt: _v3
                },
                uploadProcess: _v4,
                urlsEndpointClient: _v5
              } = _v0,
              {
                id: _v6
              } = _v4;
            try {
              let _v0 = Date.now(),
                _v1 = await _v1(_v0);
              _v3.info("Upload Urls service: ", _v1), _v11({
                id: _v6,
                status: _v12.UPLOAD_PROCESS_STATUS.FETCHING_LINK
              });
              let _v2 = Promise.resolve(),
                _v3 = async (_v0, _v1) => {
                  try {
                    let _v0;
                    if ("paused" === _v0) return void _v3.debug("Upload was paused by user.");
                    if ("uploaded" !== _v0) throw _v3.warn(`Received unexpected uploader state: [${_v0}]`), new _v16.FatalError(`Received unexpected uploader state: [${_v0}]`);
                    _v3.info("Finished uploads to URLs"), _v1.serviceName === _v12.UPLOAD_SERVICE.AUDIO_TRACKS && _v1.uploaderType === _v12.UPLOAD_APPROACH.GCS && (await _v12({
                      clipId: _v1,
                      jwt: _v3,
                      vimeoUploadId: _v1.gcsUid
                    }));
                    let _v1 = _v5.transcodingUrl ?? "",
                      {
                        storageObjectId: _v2
                      } = _v1;
                    if (_v1.serviceName === _v12.UPLOAD_SERVICE.BRANDING_BUMPERS ? _v1 = `https://${_v2}/${_v5.transcodingUrl}/${_v2}` : _v1.serviceName === _v12.UPLOAD_SERVICE.AUDIO_TRACKS && (_v1 = `https://${_v0}${_v2}`, _v0 = _v3), _v5.transcodingUrl) {
                      _v3.info(`[Summary] Upload #${_v6} - start transcoding at ${new Date().toLocaleTimeString()}`, {
                        transcodingUrl: _v1
                      });
                      let {
                        stopTranscodePolling: _v0
                      } = _v5({
                        uploadId: _v6,
                        transcodingUrl: _v1,
                        serviceName: _v5.serviceName,
                        jwt: _v0,
                        onError: _v0 => {
                          _v3.warn(`[Summary] Upload #${_v6} - transcoding failed.`, {
                            reason: _v0
                          });
                        },
                        onTranscodingCompletion: ({
                          transcodingStatus: _v0,
                          result: _v1
                        }) => {
                          _v3.info(`[Summary] Upload #${_v6} completed after transcoding; result: `, {
                            transcodingStatus: _v0,
                            result: _v1
                          }), _v10({
                            id: _v6,
                            status: _v0,
                            result: _v1,
                            transcodingUrl: _v1
                          });
                        }
                      });
                      _v9({
                        id: _v6,
                        stopTranscodePolling: _v0
                      });
                    } else _v3.info(`[Summary] Upload #${_v6} completed at ${new Date().toLocaleTimeString()}. Took ${(Date.now() - _v0) / 0} seconds.`, {
                      uploaderState: _v0
                    }), _v7({
                      id: _v6,
                      status: _v12.UPLOAD_PROCESS_STATUS.DONE,
                      transcodingUrl: _v1
                    });
                  } catch (_v0) {
                    _v13(_v0, _v6);
                  }
                };
              await _v4(_v6, _v1, _v0 => {
                _v3.info("Upload Urls Response: ", _v0), _v2 = _v2(_v0, _v4, _v3).catch(_v0 => _v13(_v0, _v6));
              }, _v13), await _v2;
            } catch (_v0) {
              _v13(_v0, _v6);
            }
          }, [_v1, _v3, _v11, _v4, _v2, _v12, _v0, _v5, _v9, _v10, _v7, _v13])
        };
      }(_v5?.apiUrl ?? ""),
      {
        scheduleTasksAsync: _v10,
        getQueuedTasksCount: _v11
      } = (_v1 = (0, _v10.useUploaderStore)(_v0 => _v0.config.uploadConcurrency), _v2 = (0, _v10.useUploaderStore)(_v0 => _v0.config.uploadDurationLimit), _v3 = (0, _v10.useUploaderStore)(_v0 => _v0.queue), (0, _v2.useEffect)(() => {
        _v1 && (_v3.concurrency = _v1), _v2 && (_v3.taskDurationLimit = _v2);
      }, [_v3, _v1, _v2]), _v4 = (0, _v2.useCallback)(() => _v3.length(), [_v3]), {
        getQueuedTasksCount: _v4,
        waitForCompletion: (0, _v2.useCallback)(() => _v3.waitForCompletion(), [_v3]),
        scheduleTasksAsync: (0, _v2.useCallback)(_v0 => _v3.scheduleTasksAsync(_v0), [_v3])
      }),
      _v12 = (0, _v10.useUploaderStore)(_v0 => _v0.private.setUploads),
      _v13 = (0, _v10.useUploaderStore)(_v0 => _v0.private.setConfig),
      _v14 = (0, _v10.useUploaderStore)(_v0 => _v0.private.setIsUploading),
      _v15 = (0, _v10.useUploaderStore)(_v0 => _v0.public.clearUpload),
      _v16 = (0, _v2.useRef)(!1);
    (0, _v2.useEffect)(() => (_v16.current = !0, () => {
      _v16.current = !1;
    }), []);
    let _v17 = (0, _v2.useCallback)(async ({
        uploadedFiles: _v0,
        typeName: _v1,
        uploaderConfig: _v2,
        params: _v3 = {}
      }) => {
        let {
          versionUri: _v4
        } = _v3;
        _v2 && _v13(_v2);
        let _v5 = (({
          typeName: _v0,
          vimeoApi: _v1,
          magistoApi: _v2,
          serviceUrl: _v3,
          userId: _v4
        }) => {
          let _v5;
          switch (_v0) {
            case _v12.UPLOAD_TYPE_NAME.BUMPER_INTRO:
              _v5 = {
                ..._v47
              };
              break;
            case _v12.UPLOAD_TYPE_NAME.BUMPER_OUTRO:
              _v5 = {
                ..._v48
              };
              break;
            case _v12.UPLOAD_TYPE_NAME.LOGO:
              _v5 = {
                ..._v54
              };
              break;
            case _v12.UPLOAD_TYPE_NAME.AUDIO_TRACKS:
              (_v5 = {
                ..._v46
              }).url = _v3 ? `${_v3}/audiotracks` : _v5.url;
              break;
            case _v12.UPLOAD_TYPE_NAME.CREATE_AUDIO:
            case _v12.UPLOAD_TYPE_NAME.OVERLAY_THUMBNAIL:
            case _v12.UPLOAD_TYPE_NAME.CREATE_IMAGE_ASSET:
            case _v12.UPLOAD_TYPE_NAME.CREATE_SOUNDTRACK_ASSET:
            case _v12.UPLOAD_TYPE_NAME.CREATE_VIDEO_ASSET:
            case _v12.UPLOAD_TYPE_NAME.CREATE_BRANDING_ASSET:
              if (!_v4) throw new _v25(`User ID is not provided for [${_v0}] asset type`);
              switch (_v0) {
                case _v12.UPLOAD_TYPE_NAME.CREATE_IMAGE_ASSET:
                  _v5 = {
                    ..._v50
                  };
                  break;
                case _v12.UPLOAD_TYPE_NAME.OVERLAY_THUMBNAIL:
                  _v5 = {
                    ..._v55
                  };
                  break;
                case _v12.UPLOAD_TYPE_NAME.CREATE_AUDIO:
                  _v5 = {
                    ..._v53
                  };
                  break;
                case _v12.UPLOAD_TYPE_NAME.CREATE_BRANDING_ASSET:
                  _v5 = {
                    ..._v49
                  };
                  break;
                case _v12.UPLOAD_TYPE_NAME.CREATE_VIDEO_ASSET:
                  _v5 = {
                    ..._v52
                  };
                  break;
                case _v12.UPLOAD_TYPE_NAME.CREATE_SOUNDTRACK_ASSET:
                  _v5 = {
                    ..._v51
                  };
              }
              _v5.url = `/users/${_v4}/create_assets`;
              break;
            case _v12.UPLOAD_TYPE_NAME.CLIP:
              throw new _v25(`[${_v0}] asset type upload is not supported.`);
            default:
              throw new _v25(`Invalid asset type name provided: [${_v0}].`);
          }
          let _v6 = _v5.isVimeoApi ? _v1 : _v2;
          return _v6 && (_v5.url = new URL(_v5.url, `https://${_v6}`).href), _v5;
        })({
          typeName: _v1,
          userId: _v7,
          vimeoApi: _v5?.apiUrl ?? "",
          magistoApi: _v5?.magistoApiHost ?? "",
          serviceUrl: _v4 ?? ""
        });
        if (!_v5) throw Error("Upload Type is not recognized");
        let _v6 = await Promise.all(_v0.map(async _v0 => {
          let {
              id: _v1 = (0, _v3.v4)(),
              file: _v2,
              fileId: _v3,
              params: _v4,
              apiConfiguration: _v5
            } = _v0,
            _v6 = _v12.UPLOAD_PROCESS_STATUS.IN_QUEUE,
            _v7 = {
              width: 0,
              height: 0,
              name: _v2.name,
              size: _v2.size,
              duration: 0,
              thumbnail: ""
            };
          if (_v5.shouldParseFile) try {
            _v6.info("File data before parsing", {
              section: "ARTIFACTS_UPLOADER - FILE",
              obj: _v2,
              fileSize: _v2.size
            });
            let _v0 = await _v9(_v2, _v16);
            _v7 = {
              ..._v7,
              ..._v0
            }, _v6.info("Parsed File result", {
              section: "ARTIFACTS_UPLOADER - FILE",
              obj: _v7,
              fileSize: _v2.size
            });
          } catch (_v0) {
            _v6 = _v12.UPLOAD_PROCESS_STATUS.FAILED, _v6.error(_v0, {
              category: "FILE_PARSE",
              section: "ARTIFACTS_UPLOADER - FILE ERROR",
              title: "Failed parsing File",
              obj: _v7
            });
          }
          return {
            id: _v1,
            fileId: _v3,
            file: _v2,
            name: _v5.uploadTypeName,
            progress: {
              relativeProgress: 0,
              bytesUploaded: 0
            },
            step: _v12.STEP.UPLOADING,
            status: _v6,
            fileData: _v7,
            params: _v4,
            apiConfiguration: _v5
          };
        }));
        _v6 = _v6.filter(_v0 => _v0.status !== _v12.UPLOAD_PROCESS_STATUS.FAILED), _v6.info("Uploader Files", {
          section: "ARTIFACTS_UPLOADER - BEFORE UPLOADING PROCESS",
          obj: _v6
        }), _v12({
          uploadProcesses: _v6
        });
        let _v7 = _v6.map(_v0 => ({
          task: async () => {
            let _v0 = _v8(_v0.id);
            if (_v0 !== _v12.UPLOAD_PROCESS_STATUS.IN_QUEUE) return _v6.info(`[Skip] task for Upload #${_v0.id}; was cancelled.`), Promise.resolve();
            let _v1 = Date.now();
            _v6.info(`[Start] task for Upload #${_v0.id} (status: ${_v0}) at ${new Date(_v1).toLocaleTimeString()}`), await _v9({
              hostParams: _v3,
              uploadProcess: _v0,
              urlsEndpointClient: _v5,
              api: {
                teamUser: _v5?.teamUser,
                xsrft: _v5?.xsrft ?? "",
                jwt: _v5?.jwt,
                magistoApiHost: _v5?.magistoApiHost ?? ""
              }
            }), _v6.info(`[Finished] task for Upload #${_v0.id} (status: ${_v0}). Took ${(Date.now() - _v1) / 0} seconds.`);
          },
          config: {
            onTimeLimit: () => _v15({
              id: _v0.id
            })
          }
        }));
        _v14(!0), await _v10(_v7);
        let _v8 = _v10.useUploaderStore.getState().uploads,
          _v9 = [];
        return _v0.forEach(_v0 => {
          let _v1 = _v8.find(_v0 => _v0.id === _v0.id);
          _v1 && _v9.push(_v1);
        }), 0 === _v11() && _v14(!1), _v6.info("Uploader Files", {
          section: "completed all scheduled upload processes",
          uploadProcessesLength: _v6.length
        }), (0, _v57.normalizeUploads)(_v9);
      }, [_v7, _v5?.apiUrl, _v5?.magistoApiHost, _v6, _v12, _v14, _v10, _v11, _v13, _v8, _v9, _v5?.teamUser, _v5?.xsrft, _v5?.jwt, _v15]),
      _v18 = (0, _v2.useMemo)(() => ({
        upload: _v17
      }), [_v17]);
    return (0, _v1.jsx)(_v5.ArtifactsUploaderContext.Provider, {
      value: _v18,
      children: _v0
    });
  }], 0);
}