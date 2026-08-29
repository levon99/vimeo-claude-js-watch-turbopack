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
    _v15 = _v0.i(0);
  async function _v16(_v0) {
    _v0.context.isDestroyed = !0, _v0.context.isMediaAllowed = !1, await _v17(_v0), await _v0.audioListener?.closeContext(), _v0.agoraSDK && (_v0.agoraSDK.onCameraChanged = void 0, _v0.agoraSDK.onAudioAutoplayFailed = void 0, _v0.agoraSDK.onMicrophoneChanged = void 0);
    let {
      permission: {
        microphone: _v1,
        camera: _v2
      }
    } = _v0.context;
    _v0.audioListener?.dispose(), _v0.audioListener = null, _v1 && _v2 && (_v1.removeEventListener("change", _v0.onMicrophonePermissionsChanged), _v2.removeEventListener("change", _v0.onCameraPermissionsChanged));
  }
  async function _v17(_v0) {
    let {
      video: _v1,
      audio: _v2,
      screen: _v3
    } = _v0.context;
    _v0.log.info("Disposing all media"), (0, _v12.closeAgoraLocalTracks)(_v2.track, _v1.track, _v3.track);
    let _v4 = !!(0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.BLUR_ENABLED);
    _v0.setContext({
      video: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: _v1.isMuted,
        track: null,
        deviceId: _v1.deviceId,
        isBlurred: _v4,
        backgroundImageId: _v4 ? void 0 : (0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.BACKGROUND_IMAGE_ID) || void 0,
        error: null
      }),
      audio: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: _v2.isMuted,
        track: null,
        deviceId: _v2.deviceId,
        error: null
      }),
      screen: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: _v3.isMuted,
        track: null,
        deviceId: void 0,
        error: null
      })
    });
  }
  async function _v18(_v0) {
    if (_v0.context.permission.isAllowed || !_v0.context.isMediaAllowed) return;
    _v0.log.info("Permissions denied modal is opened");
    let _v1 = {
      type: _v11.EConfirmationType.MEDIA_PERMISSIONS_DENIED,
      header: _v8.T_DEVICES_ARE_BLOCKED,
      body: _v8.T_UNABLE_TO_CONNECT_TO_AGORA,
      confirmMessage: _v8.T_HELP_ME_TROUBLESHOOT,
      declineMessage: _v0.sessionApplicationType === _v9.EComposerApplicationType.BROADCASTER ? _v8.T_RETURN_TO_EVENT : _v8.T_RELOAD_PAGE,
      modalWidth: 480,
      onConfirm: () => (0, _v14.openNewFocusedTab)(_v7.vimeoConfig.SUPPORT.DEVICE_PERMISSIONS),
      onDecline: () => {
        _v0.sessionApplicationType !== _v9.EComposerApplicationType.BROADCASTER && window.location.reload();
      }
    };
    _v0.emitSignal({
      type: _v15.ELiveSignal.CONFIRMATION_NOTIFICATION,
      data: _v1
    });
  }
  async function _v19(_v0) {
    if (!_v0.context.isMediaAllowed) return;
    _v0.log.info("Screen access denied modal is opened");
    let _v1 = {
      type: _v11.EConfirmationType.MEDIA_PERMISSIONS_DENIED,
      header: _v8.T_CHANGE_SETTINGS_TO_SHARE_SCREEN,
      body: _v8.T_CHANGE_SETTINGS_TO_SHARE_SCREEN_DESCRIPTION,
      confirmMessage: _v8.T_HELP_ME_TROUBLESHOOT,
      declineMessage: _v8.T_RETURN_TO_EVENT,
      modalWidth: 400,
      onConfirm: () => (0, _v14.openNewFocusedTab)(_v7.vimeoConfig.SUPPORT.SCREEN_USAGE),
      onDecline: () => _v10.CallablePlaceholder
    };
    _v0.emitSignal({
      type: _v15.ELiveSignal.CONFIRMATION_NOTIFICATION,
      data: _v1
    });
  }
  var _v20 = _v0.i(0);
  let _v21 = (0, _v0.i(0).createLiveSchemaEventFactory)("vimeo.simple_live_layouts", 7, () => ({
    ..._v20.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    isAllowed: null
  }));
  function _v22(_v0) {
    return _v21("allow_device_access", _v0);
  }
  _v0.s(["trackAllowDeviceAccess", 0, _v22, "trackBroadCasterUnmuteGuestMic", 0, function () {
    return _v21("unmute_guest_mic", {
      page: _v9.EComposerApplicationType.BROADCASTER
    });
  }, "trackBroadcasterMuteGuestMic", 0, function () {
    return _v21("mute_guest_mic", {
      page: _v9.EComposerApplicationType.BROADCASTER
    });
  }, "trackDisableCam", 0, function (_v0) {
    return _v21("disable_cam", {
      page: _v0
    });
  }, "trackEnableCam", 0, function (_v0) {
    return _v21("enable_cam", {
      page: _v0
    });
  }, "trackMuteMic", 0, function (_v0) {
    return _v21("mute_mic", {
      page: _v0
    });
  }, "trackUnMuteMic", 0, function (_v0) {
    return _v21("unmute_mic", {
      page: _v0
    });
  }], 0);
  var _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  async function _v27(_v0) {
    if (!window.navigator.permissions) return _v0.log.info("Skip permissions check, API is not supported by browser");
    try {
      let [_v0, _v1] = await Promise.all([window.navigator.permissions.query({
          name: "camera"
        }), window.navigator.permissions.query({
          name: "microphone"
        })]),
        {
          permission: _v2
        } = _v0.context;
      _v0.log.info("Current media permissions:", _v0.state, _v1.state), _v0.setContext({
        permission: _v2.asMerged({
          camera: _v0,
          microphone: _v1
        })
      }), _v0.addEventListener("change", _v0.onCameraPermissionsChanged), _v1.addEventListener("change", _v0.onMicrophonePermissionsChanged);
    } catch (_v0) {
      _v0.log.info("Media permissions api is not supported in current environment");
    }
  }
  async function _v28(_v0) {
    let {
        permission: _v1,
        audio: _v2,
        video: _v3
      } = _v0.context,
      _v4 = new _v25.LiveError("Cannot get media since permissions are blocked.");
    _v0.log.info("Disposing devices media with access restrictions"), _v1.isAllowed && (0, _v26.trackLiveAction)("media_permission_denied"), (0, _v12.closeAgoraLocalTracks)(_v2.track, _v3.track), _v0.connectionTransactionId = (0, _v3.v4)();
    let _v5 = !!(0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.BLUR_ENABLED);
    _v0.setContext({
      video: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: !1,
        track: null,
        isBlurred: _v5,
        backgroundImageId: _v5 ? void 0 : (0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.BACKGROUND_IMAGE_ID) || void 0,
        deviceId: _v3.deviceId,
        error: _v4
      }),
      audio: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: !1,
        track: null,
        deviceId: _v2.deviceId,
        error: _v4
      }),
      permission: _v1.asMerged({
        isAllowed: !1
      })
    }), await _v0.emitSignal({
      type: _v15.ELiveMediaSignal.LOCAL_MEDIA_ACCESS_DENIED
    }), await _v18(_v0);
  }
  async function _v29(_v0, _v1) {
    _v0.log.info("Local media devices list updating");
    let {
      isBrowserPrompted: _v2,
      playbackDeviceId: _v3
    } = _v0.context;
    if (_v0.agoraSDK && !_v0.context.isDestroyed) {
      if (_v2) return _v0.log.warn("Cannot refresh devices, browser already prompted");
      try {
        _v0.setContext({
          isBrowserPrompted: !0
        });
        let _v0 = await (0, _v12.getDevicesList)(_v0.agoraSDK, !_v1),
          _v1 = (0, _v24.normalizeDevicesInfo)(_v0);
        if (_v0.context.isDestroyed || _v0.IS_DISPOSED) return _v0.log.info("Skip devices update, manager is disposed");
        _v0.setContext({
          isBrowserPrompted: !1,
          audioDevices: _v1.filter(_v0 => "audioinput" === _v0.kind),
          videoDevices: _v1.filter(_v0 => "videoinput" === _v0.kind),
          playbackDevices: _v1.filter(_v0 => "audiooutput" === _v0.kind)
        });
        let {
          videoDevices: _v2,
          audioDevices: _v3,
          playbackDevices: _v4
        } = _v0.context;
        _v0.log.info("Updated media devices list:", _v2, _v3, _v4), (0, _v24.isDeviceInList)(_v4, _v3) || (_v0.setContext({
          playbackDeviceId: "default"
        }), _v0.emitSignal({
          type: _v15.ELiveMediaSignal.OUTPUT_DEVICE_CHANGED
        })), _v1 && _v0.emitSignal({
          type: _v15.ELiveSignal.TRACK_SAFELY,
          data: () => _v22({
            isAllowed: !0
          })
        });
      } catch (_v0) {
        throw _v0.log.error("Local media devices list update failed:", _v0), _v0.code === _v23.EAgoraErrorCode.PERMISSION_DENIED && (await _v28(_v0), _v1 && !_v0.context.isDestroyed && _v0.emitSignal({
          type: _v15.ELiveSignal.TRACK_SAFELY,
          data: () => _v22({
            isAllowed: !1
          })
        })), _v0.setContext({
          isBrowserPrompted: !1
        }), _v0;
      }
    }
  }
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0);
  function _v35(_v0) {
    return _v0?.code === _v23.EAgoraErrorCode.PERMISSION_DENIED && /Permission denied$/.test(_v0.message);
  }
  function _v36(_v0) {
    if (_v0?.code) {
      if (_v0.code === _v23.EAgoraErrorCode.NOT_READABLE) return !0;else if (_v0.code === _v23.EAgoraErrorCode.UNEXPECTED_ERROR && (/Starting videoinput failed$/.test(String(_v0.message)) || /Starting audioinput failed$/.test(String(_v0.message)))) return !0;
    }
    return !1;
  }
  _v0.s(["isAgoraDeviceOccupiedError", 0, _v36, "isScreenAccessCancelledError", 0, _v35, "isScreenAccessRejectedError", 0, function (_v0) {
    return _v0?.code === _v23.EAgoraErrorCode.PERMISSION_DENIED && _v0.message.indexOf("request is not allowed by the user agent") >= 0;
  }], 0);
  var _v37 = _v0.i(0);
  class _v38 {
    lastAlert = Date.now();
    audioContext = null;
    audioStream = null;
    onAudioSpeechDetected;
    log = new _v5.Logger("AL");
    constructor({
      onAudioSpeechDetected: _v0
    }) {
      this.onAudioSpeechDetected = _v0;
    }
    async setAudioContext({
      track: _v0
    }) {
      if (this.log.info("Set audio context:", _v0), await this.dispose(), _v0) {
        let _v0 = _v0._mediaStreamTrack.clone();
        _v0.enabled = !0, this.audioStream = new MediaStream([_v0]);
      }
      await this.startListening();
    }
    async closeContext() {
      this.log.info("Close audio context:", this.audioContext?.state), this.audioContext && "closed" !== this.audioContext.state && (await this.audioContext.close(), this.audioContext = null);
    }
    cleanupExistingMediaStream() {
      if (this.log.info("Cleanup existing media stream:", this.audioStream), this.audioStream) {
        let _v0 = this.audioStream.getTracks();
        _v0 && _v0.length && _v0.forEach(_v0 => _v0.stop()), this.audioStream = null;
      }
    }
    async dispose() {
      this.cleanupExistingMediaStream(), await this.closeContext();
    }
    async startListening() {
      if (this.log.info("Start audio listening:", this.audioStream), !this.audioStream?.getTracks().length) return;
      this.audioContext = new AudioContext();
      let _v0 = [],
        _v1 = [],
        _v2 = 0,
        _v3 = this.audioContext.createAnalyser(),
        _v4 = this.audioContext.createMediaStreamSource(this.audioStream),
        _v5 = this.audioContext.createScriptProcessor(0, 1, 1);
      _v3.smoothingTimeConstant = .3, _v3.fftSize = 0, _v4.connect(_v3), _v3.connect(_v5), _v5.connect(this.audioContext.destination), _v5.addEventListener("audioprocess", () => {
        if (Date.now() - this.lastAlert < _v37.liveApplicationConfig.MEDIA.SPEAKING_NOTIFICATION_INTERVAL) return;
        let _v0 = new Uint8Array(_v3.frequencyBinCount);
        _v3.getByteFrequencyData(_v0);
        let _v1 = 0,
          _v2 = _v0.length;
        for (let _v0 = 0; _v0 < _v2; _v0++) _v1 += _v0[_v0];
        let _v3 = Math.floor(_v1 / _v2);
        if (_v3 <= 20) {
          if (_v0.length >= 400) {
            let _v0 = _v0.shift(),
              _v1 = void 0 !== _v0 ? _v1.indexOf(_v0) : -1;
            _v1 > -1 && _v1.splice(_v1, 1);
          }
          _v0.push(_v3), _v1.push(_v3), _v1.sort((_v0, _v1) => _v0 - _v1);
        }
        (_v2 = _v3 > Math.floor(3 * _v1[Math.floor(_v1.length / 2)] / 2) + 10 ? _v2 + 1 : 0) > 4 && (this.lastAlert = Date.now(), this.onAudioSpeechDetected());
      });
    }
  }
  var _v39 = _v0.i(0);
  let _v40 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/ffa76dfcfadd6b5e3be6acb636e42831" : "https://devi.vimeocdn.com/custom_asset/6b3c82185913ca292b85f12f9a34ef41",
    _v41 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/0a7fe6b7155b08a72e817f532ef4bc77" : "https://devi.vimeocdn.com/custom_asset/db9a63db3872000ab5844e55cc5345ff",
    _v42 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/76888e85eb5314c454bfebbe20c8236c" : "https://devi.vimeocdn.com/custom_asset/21a5a0a6effe210a8011b3506fe3e91a",
    _v43 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/50bf75a4035058b1bd75267a328bc1d1" : "https://devi.vimeocdn.com/custom_asset/cb526bc3832aec01b61d033fc2caac3c",
    _v44 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/11d209c341bd1e1853bbfb9d137ae7cd" : "https://devi.vimeocdn.com/custom_asset/b5a31e5b9a08bd907dee42ea0dd89ce0",
    _v45 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/e7fdb8a154bbcadffa428136990539b5" : "https://devi.vimeocdn.com/custom_asset/2d888410610b849d5d227c537214c848",
    _v46 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/27d066e41bcef8efff89704588239ad9" : "https://devi.vimeocdn.com/custom_asset/39c6519fcd9f7cc7934fe7f4fa75a140",
    _v47 = _v39.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/70008c35401da4fa6361c51ece6479ad" : "https://devi.vimeocdn.com/custom_asset/168ba0ae6814338b5817df4a8e909632";
  function _v48(_v0, _v1, _v2) {
    return {
      id: _v0,
      label: _v1,
      previewUrl: _v2
    };
  }
  let _v49 = [_v48("vimeo-dark", (0, _v4.translate)({
      singular: "Vimeo Dark",
      dictionary: {
        es: {
          singular: "Vimeo Oscuro"
        },
        "de-DE": {
          singular: "Vimeo Dunkel"
        },
        "fr-FR": {
          singular: "Vimeo Sombre"
        },
        "ja-JP": {
          singular: "Vimeo ダーク"
        },
        "ko-KR": {
          singular: "Vimeo 다크"
        },
        "pt-BR": {
          singular: "Vimeo Escuro"
        },
        "zh-CN": {
          singular: "Vimeo 暗色"
        }
      }
    }), _v40), _v48("vimeo-light", (0, _v4.translate)({
      singular: "Vimeo Light",
      dictionary: {
        es: {
          singular: "Vimeo Claro"
        },
        "de-DE": {
          singular: "Vimeo Hell"
        },
        "fr-FR": {
          singular: "Vimeo Clair"
        },
        "ja-JP": {
          singular: "Vimeo ライト"
        },
        "ko-KR": {
          singular: "Vimeo 라이트"
        },
        "pt-BR": {
          singular: "Vimeo Claro"
        },
        "zh-CN": {
          singular: "Vimeo 浅色"
        }
      }
    }), _v41), _v48("library", (0, _v4.translate)({
      singular: "Library",
      dictionary: {
        es: {
          singular: "Biblioteca"
        },
        "de-DE": {
          singular: "Bibliothek"
        },
        "fr-FR": {
          singular: "Bibliothèque"
        },
        "ja-JP": {
          singular: "ライブラリ"
        },
        "ko-KR": {
          singular: "라이브러리"
        },
        "pt-BR": {
          singular: "Biblioteca"
        },
        "zh-CN": {
          singular: "视频库"
        }
      }
    }), _v42), _v48("lounge", (0, _v4.translate)({
      singular: "Lounge",
      dictionary: {
        es: {
          singular: "Sala"
        },
        "fr-FR": {
          singular: "Salon"
        },
        "ja-JP": {
          singular: "ラウンジ"
        },
        "ko-KR": {
          singular: "라운지"
        },
        "zh-CN": {
          singular: "休息室"
        }
      }
    }), _v43), _v48("loggia", (0, _v4.translate)({
      singular: "Loggia",
      dictionary: {
        "ja-JP": {
          singular: "ロッジア"
        },
        "zh-CN": {
          singular: "回廊"
        }
      }
    }), _v44), _v48("open-space", (0, _v4.translate)({
      singular: "Open Space",
      dictionary: {
        es: {
          singular: "Espacio abierto"
        },
        "de-DE": {
          singular: "Offener Raum"
        },
        "fr-FR": {
          singular: "Espace ouvert"
        },
        "ja-JP": {
          singular: "オープンスペース"
        },
        "ko-KR": {
          singular: "개방형 공간"
        },
        "pt-BR": {
          singular: "Espaço Aberto"
        },
        "zh-CN": {
          singular: "开放空间"
        }
      }
    }), _v45), _v48("wooden-office", (0, _v4.translate)({
      singular: "Wooden Office",
      dictionary: {
        es: {
          singular: "Oficina de madera"
        },
        "de-DE": {
          singular: "Hölzernes Büro"
        },
        "fr-FR": {
          singular: "Bureau en bois"
        },
        "ja-JP": {
          singular: "木製オフィス"
        },
        "ko-KR": {
          singular: "원목 오피스"
        },
        "pt-BR": {
          singular: "Escritório de Madeira"
        },
        "zh-CN": {
          singular: "木质办公室"
        }
      }
    }), _v46), _v48("glass-office", (0, _v4.translate)({
      singular: "Glass Office",
      dictionary: {
        es: {
          singular: "Oficina acristalada"
        },
        "fr-FR": {
          singular: "Bureau vitré"
        },
        "ja-JP": {
          singular: "ガラスオフィス"
        },
        "ko-KR": {
          singular: "글래스 오피스"
        },
        "pt-BR": {
          singular: "Escritório envidraçado"
        },
        "zh-CN": {
          singular: "玻璃办公室"
        }
      }
    }), _v47)],
    _v50 = new Map();
  function _v51(_v0, _v1) {
    if (_v0.isBlurred) return _v1;
    if (_v0.backgroundImageId) {
      let _v0 = function (_v0) {
        if ("u" < typeof Image) return null;
        let _v1 = _v49.find(_v0 => _v0.id === _v0),
          _v2 = _v1 ? _v1.previewUrl : /^(https?:|data:|blob:)/.test(_v0) ? _v0 : null;
        if (!_v2) return null;
        let _v3 = _v50.get(_v0);
        return _v3 || ((_v3 = new Image(0, 720)).crossOrigin = "anonymous", _v3.src = _v2, _v50.set(_v0, _v3)), _v3;
      }(_v0.backgroundImageId);
      if (_v0) return {
        type: "img",
        source: _v0,
        fit: "cover"
      };
    }
    return null;
  }
  async function _v52(_v0, _v1) {
    if (!_v0) return;
    if (!_v1) return void (await _v0.disable());
    let _v2 = _v1.source;
    _v2 instanceof HTMLImageElement && !_v2.complete && (await _v2.decode().catch(() => void 0)), _v0.setOptions(_v1), await _v0.enable(), await _v0.getProcessedTrack();
  }
  _v0.s(["LIVE_BACKGROUND_PRESETS", 0, _v49, "applyVideoBackgroundEffect", 0, _v52, "resolveVideoBackgroundOptions", 0, _v51], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0);
  async function _v56(_v0) {
    _v0.assertIsInitialized(), _v0.log.info("Starting screen sharing");
    let {
      screen: _v1
    } = _v0.context;
    if (_v1.track || _v1.isLoading) return _v0.log.warn("Failed to get screen track, one already exists or updating");
    _v0.setContext({
      screen: _v1.asMerged({
        isLoading: !0,
        error: null
      })
    });
    let _v2 = _v0.connectionTransactionId,
      _v3 = await (0, _v12.createScreenTrackSafely)({
        agoraSDK: _v0.agoraSDK,
        onTrackEnded: () => {
          (0, _v26.trackLiveAction)("screen_share_track_browser_stopped"), _v0.stopScreenSharing();
        }
      });
    if ((0, _v12.isAgoraTrack)(_v3)) {
      let {
        isMediaAllowed: _v0
      } = _v0.context;
      _v0 && _v2 === _v0.connectionTransactionId ? (_v0.log.info("Screen share started"), _v0.setContext({
        screen: _v1.asMerged({
          isLoading: !1,
          track: _v3,
          error: null
        })
      }), _v0.emitSignal({
        type: _v15.ELiveMediaSignal.SCREEN_MEDIA_STARTED,
        data: _v3
      }), (0, _v26.trackLiveAction)("screen_initialized")) : ((0, _v12.closeAgoraLocalTracks)(_v3), _v0.log.warn("Previous transaction screen init received, cleaning video"), _v0.setContext({
        screen: _v1.asMerged({
          isLoading: !1
        })
      }));
    } else throw _v0.log.error("Failed to take current device screen", _v3), _v0.setContext({
      screen: _v1.asMerged({
        isLoading: !1,
        track: null,
        error: _v3
      })
    }), _v35(_v3) ? (0, _v26.trackLiveAction)("screen_permission_denied") : ((0, _v26.trackLiveAction)("screen_init_failed", {
      errorCode: _v3.code,
      errorMessage: _v3.message
    }), _v30.browserConfig.BROWSER?.name !== _v53.ESupportedBrowser.SAFARI && (await _v19(_v0))), _v3;
  }
  async function _v57(_v0, _v1) {
    _v0.log.info("Toggle video muted state:", _v1, _v0.isVideoHardMuteEnabled);
    let {
      isMediaAllowed: _v2,
      video: _v3
    } = _v0.context;
    if ((0, _v13.setLocalStorageItem)(`${_v6.localStorageConfig.MEDIA.ACTIVE_VIDEO_DEVICE_STATE}.${_v0.sessionId}`, _v1), !_v2 || !_v3.track) return _v0.setContext({
      video: _v3.asMerged({
        isMuted: _v1
      })
    });
    try {
      _v0.setContext({
        video: _v3.asMerged({
          isLoading: !0
        })
      }), _v0.isVideoHardMuteEnabled ? await _v3.track.setEnabled(!_v1).then(() => {
        (0, _v24.safelyForceTrackConstraints)(_v0.context.video.track?.getMediaStreamTrack(), _v31.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS);
      }) : await _v3.track.setMuted(_v1), !_v1 && (_v3.isBlurred || _v3.backgroundImageId) && (await _v0.context.videoBackgroundProcessor?.getProcessedTrack().catch(_v0 => {
        (0, _v26.trackLiveError)(_v0, {
          category: _v54.ELiveErrorCategory.AGORA,
          method: "setVideoMuted"
        });
      })), _v0.setContext({
        video: _v3.asMerged({
          isMuted: _v1,
          isLoading: !1
        })
      }), _v0.emitSignal({
        type: _v15.ELiveMediaSignal.LOCAL_TRACK_UPDATED
      }), (0, _v26.trackLiveAction)("toggled_video_mute_" + String(_v1));
    } catch (_v0) {
      throw _v0.setContext({
        video: _v3.asMerged({
          isLoading: !1
        })
      }), (0, _v26.trackLiveAction)("toggled_video_mute_fail_" + String(_v1)), _v0;
    }
  }
  async function _v58(_v0, _v1) {
    _v0.log.info("Toggle audio muted state:", _v1, _v0.isAudioHardMuteEnabled);
    let {
      isMediaAllowed: _v2,
      audio: _v3
    } = _v0.context;
    if ((0, _v13.setLocalStorageItem)(`${_v6.localStorageConfig.MEDIA.ACTIVE_AUDIO_DEVICE_STATE}.${_v0.sessionId}`, _v1), !_v2 || !_v3.track) return _v0.setContext({
      audio: _v3.asMerged({
        isMuted: _v1
      })
    });
    try {
      _v0.setContext({
        audio: _v3.asMerged({
          isLoading: !0
        })
      }), _v0.isAudioHardMuteEnabled ? await _v3.track.setEnabled(!_v1) : await _v3.track.setMuted(_v1), _v0.setContext({
        audio: _v3.asMerged({
          isMuted: _v1,
          isLoading: !1
        })
      }), _v0.emitSignal({
        type: _v15.ELiveMediaSignal.LOCAL_TRACK_UPDATED
      }), (0, _v26.trackLiveAction)("toggled_audio_mute_" + String(_v1));
    } catch (_v0) {
      throw _v0.setContext({
        audio: _v3.asMerged({
          isLoading: !1
        })
      }), (0, _v26.trackLiveAction)("toggled_audio_mute_fail_" + String(_v1)), _v0;
    }
  }
  async function _v59(_v0, _v1) {
    _v0.log.info("Changing audio device:", _v1), _v0.assertIsInitialized();
    let {
      isBrowserPrompted: _v2,
      isMediaAllowed: _v3,
      audio: _v4,
      audioDevices: _v5
    } = _v0.context;
    if (!(0, _v24.isDeviceInList)(_v5, _v1)) throw new _v25.LiveError("Cannot set audio device as it does not exist.", {
      code: _v32.ELiveErrorCode.INVALID_PARAMETERS
    });
    if (_v2 || _v4.isLoading) return _v0.log.info("Skipping device switch, currently processing");
    if (!_v3) return _v0.log.info("Skipping partial device switch, media not allowed"), _v0.setContext({
      audio: _v4.asMerged({
        deviceId: _v1,
        isLoading: !1
      })
    });
    try {
      if (_v0.setContext({
        audio: _v4.asMerged({
          isLoading: !0,
          error: null,
          deviceId: _v1
        })
      }), _v4.track) await _v4.track.setDevice(_v1), _v0.setContext({
        audio: _v4.asMerged({
          isLoading: !1,
          deviceId: _v1,
          error: null
        })
      });else {
        let _v0 = _v0.connectionTransactionId,
          _v1 = await (0, _v12.createMicrophoneTrackSafely)({
            agoraSDK: _v0.agoraSDK,
            deviceId: _v1,
            devices: _v5,
            isMuted: _v4.isMuted,
            isHardMuteEnabled: _v0.isAudioHardMuteEnabled,
            onTrackEnded: () => _v0.handleMicrophoneLost()
          });
        if (_v0 !== _v0.connectionTransactionId || _v0.IS_DISPOSED) return _v0.log.warn("Media switch transaction is outdated, cancelling it."), (0, _v12.closeAgoraLocalTracks)(_v1), _v0.setContext({
          isBrowserPrompted: !1,
          audio: _v4.asMerged({
            isLoading: !1
          })
        });
        if ((0, _v12.isAgoraTrack)(_v1)) _v0.setContext({
          isBrowserPrompted: !1,
          audio: _v4.asMerged({
            track: _v1,
            deviceId: (0, _v12.getAgoraTrackDeviceId)(_v1),
            error: null,
            isLoading: !1
          })
        }), _v0.emitSignal({
          type: _v15.ELiveMediaSignal.LOCAL_TRACK_UPDATED
        });else throw _v1;
      }
      (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.ACTIVE_AUDIO_DEVICE_ID, _v1), (0, _v26.trackLiveAction)("media_switched", {
        type: _v34.ETrackKind.AUDIO
      }), await _v0.audioListener?.setAudioContext(_v0.context.audio);
    } catch (_v0) {
      throw (0, _v12.closeAgoraLocalTracks)(_v0.context.audio.track), _v0.log.error("Change audio device failed:", _v0), _v0.setContext({
        audio: _v4.asMerged({
          isLoading: !1,
          error: _v0,
          deviceId: void 0
        })
      }), _v0.emitSignal({
        type: _v15.ELiveMediaSignal.LOCAL_TRACK_DISPOSED,
        data: _v0.context.audio.track
      }), (0, _v26.trackLiveAction)("media_switch_failed", {
        type: _v34.ETrackKind.AUDIO,
        errorCode: _v0?.code,
        errorMessage: _v0?.message
      }), _v0;
    }
  }
  async function _v60(_v0) {
    try {
      let {
        video: _v0,
        videoBackgroundProcessor: _v1
      } = _v0.context;
      if (!_v0 || !_v0.track) return void _v0.log.warn("Video track is missing");
      if (!_v1) return void _v0.log.warn("Virtual background processor is missing");
      _v0.track.pipe(_v1).pipe(_v0.track?.processorDestination);
      let _v2 = _v0.track.getMediaStreamTrack();
      _v0.log.info("Video track is piped", _v2.id);
      let _v3 = _v51(_v0, _v31.liveMediaConfig.LOCAL_MEDIA.VIRTUAL_BACKGROUND_OPTIONS);
      _v3 && (_v0.log.info("Enabling video background:", _v2.id), await _v52(_v1, _v3), _v0.forceUpdate(), _v0.log.info("Virtual background is enabled", _v2.id));
    } catch (_v0) {
      _v0.log.error("Error enabling virtual background", _v0.message), (0, _v26.trackLiveError)(_v0, {
        category: _v54.ELiveErrorCategory.AGORA,
        method: "pipeVideoTrackWithVirtualBackground"
      });
    }
  }
  async function _v61(_v0, _v1) {
    if (_v0.context.video.deviceId === _v1) return;
    _v0.log.info("Changing video device:", _v1), _v0.assertIsInitialized();
    let {
      isMediaAllowed: _v2,
      video: _v3,
      videoDevices: _v4,
      isBrowserPrompted: _v5
    } = _v0.context;
    if (!(0, _v24.isDeviceInList)(_v4, _v1)) throw new _v25.LiveError("Cannot set video device as it does not exist.", {
      code: _v32.ELiveErrorCode.INVALID_PARAMETERS
    });
    if (_v5 || _v3.isLoading) return _v0.log.warn("Skipping device switch, currently processing");
    if (!_v2) return _v0.log.info("Skipping partial device switch, media not allowed"), _v0.setContext({
      video: _v3.asMerged({
        deviceId: _v1
      })
    });
    _v0.setContext({
      video: _v3.asMerged({
        isLoading: !0,
        error: null,
        deviceId: _v1
      })
    });
    try {
      if (_v3.track) await _v3.track.setDevice(_v1), (0, _v24.safelyForceTrackConstraints)(_v0.context.video.track?.getMediaStreamTrack(), _v31.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS), _v0.setContext({
        video: _v3.asMerged({
          isLoading: !1,
          deviceId: _v1,
          error: null
        })
      });else {
        let _v0 = _v0.connectionTransactionId,
          _v1 = await (0, _v12.createCameraTrackSafely)({
            agoraSDK: _v0.agoraSDK,
            deviceId: _v1,
            devices: _v4,
            isMuted: _v3.isMuted,
            isHardMuteEnabled: _v0.isVideoHardMuteEnabled
          });
        if (_v0 !== _v0.connectionTransactionId || _v0.IS_DISPOSED) return _v0.log.warn("Media switch transaction is outdated, cancelling it."), (0, _v12.closeAgoraLocalTracks)(_v1), _v0.setContext({
          isBrowserPrompted: !1,
          video: _v3.asMerged({
            isLoading: !1
          })
        });
        if ((0, _v12.isAgoraTrack)(_v1)) _v0.setContext({
          isBrowserPrompted: !1,
          video: _v3.asMerged({
            track: _v1,
            deviceId: (0, _v12.getAgoraTrackDeviceId)(_v1),
            error: null,
            isLoading: !1
          })
        }), _v0.emitSignal({
          type: _v15.ELiveMediaSignal.LOCAL_TRACK_UPDATED
        });else throw _v1;
      }
      (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.ACTIVE_VIDEO_DEVICE_ID, _v1), await _v60(_v0), (0, _v26.trackLiveAction)("media_switched", {
        type: _v34.ETrackKind.VIDEO
      });
    } catch (_v0) {
      throw _v0.log.error("Change video device failed:", _v0), (0, _v12.closeAgoraLocalTracks)(_v0.context.video.track), _v0.emitSignal({
        type: _v15.ELiveMediaSignal.LOCAL_TRACK_DISPOSED,
        data: _v0.context.video.track
      }), _v0.setContext({
        isBrowserPrompted: !1,
        video: _v3.asMerged({
          isLoading: !1,
          error: _v0,
          deviceId: void 0,
          track: null
        })
      }), (0, _v26.trackLiveAction)("media_switch_failed", {
        type: _v34.ETrackKind.VIDEO,
        errorCode: _v0?.code,
        errorMessage: _v0?.message
      }), _v0;
    }
  }
  async function _v62(_v0, _v1) {
    if (_v0.log.info("Changing playback device:", _v1), !(0, _v24.isDeviceInList)(_v0.context.playbackDevices, _v1)) throw new _v25.LiveError("Cannot set playback device as it does not exist.", {
      code: _v32.ELiveErrorCode.INVALID_PARAMETERS
    });
    try {
      _v0.setContext({
        playbackDeviceId: _v1
      }), _v0.emitSignal({
        type: _v15.ELiveMediaSignal.OUTPUT_DEVICE_CHANGED
      }), (0, _v26.trackLiveAction)("media_switched", {
        type: "playback"
      });
    } catch (_v0) {
      throw _v0.log.error("Change output device failed:", _v0), (0, _v26.trackLiveAction)("media_switched", {
        type: "playback",
        errorCode: _v0?.code,
        errorMessage: _v0?.message
      }), _v0;
    }
  }
  async function _v63(_v0) {
    _v0.assertIsInitialized();
    let {
      permission: _v1,
      isMediaAllowed: _v2,
      isDestroyed: _v3,
      isBrowserPrompted: _v4
    } = _v0.context;
    if (_v3) return _v0.log.warn("Cannot initialize media for destroyed connections");
    if (!_v2) throw _v0.log.error("Tried to initialize media but it is not allowed in current tab"), new _v25.LiveError("Media is not allowed with current connection type.");
    if (!_v1.isAllowed) {
      _v0.log.info("Skip media init since current tab media access is restricted"), await _v28(_v0);
      return;
    }
    if (_v4) return _v0.log.info("Cannot initialize media while already prompting browser");
    _v0.setContext({
      isBrowserPrompted: !0,
      audio: _v0.context.audio.asMerged({
        isLoading: !0,
        deviceId: (0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.ACTIVE_AUDIO_DEVICE_ID)
      }),
      video: _v0.context.video.asMerged({
        isLoading: !0,
        deviceId: (0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.ACTIVE_VIDEO_DEVICE_ID)
      })
    });
    let {
      audio: _v5,
      video: _v6,
      videoDevices: _v7,
      audioDevices: _v8
    } = _v0.context;
    _v0.log.info("Initializing local media video/audio pair:", _v6.deviceId, _v6.isMuted, _v5.deviceId, _v5.isMuted);
    let _v9 = _v0.connectionTransactionId,
      [_v10, _v11] = await Promise.all([(0, _v12.createMicrophoneTrackSafely)({
        agoraSDK: _v0.agoraSDK,
        deviceId: _v5.deviceId,
        devices: _v8,
        isMuted: _v5.isMuted,
        isHardMuteEnabled: _v0.isAudioHardMuteEnabled,
        onTrackEnded: () => _v0.handleMicrophoneLost()
      }), (0, _v12.createCameraTrackSafely)({
        agoraSDK: _v0.agoraSDK,
        deviceId: _v6.deviceId,
        devices: _v7,
        isMuted: _v6.isMuted,
        isHardMuteEnabled: _v0.isVideoHardMuteEnabled
      })]),
      _v12 = (0, _v12.isAgoraTrack)(_v11),
      _v13 = (0, _v12.isAgoraTrack)(_v10);
    if (_v9 !== _v0.connectionTransactionId || _v0.IS_DISPOSED) return _v0.log.warn("Media init transaction is outdated, cancelling it."), (0, _v12.closeAgoraLocalTracks)(_v10, _v11), _v0.setContext({
      isBrowserPrompted: !1
    });
    if (_v11?.code === _v23.EAgoraErrorCode.PERMISSION_DENIED || _v10?.code === _v23.EAgoraErrorCode.PERMISSION_DENIED) return (0, _v12.closeAgoraLocalTracks)(_v11, _v10), _v0.log.error("Media permissions denied while initializing media"), await _v28(_v0), _v0.setContext({
      isBrowserPrompted: !1
    });
    if (_v36(_v11) && (_v0.log.error("Device is probably occupied by another application:", _v11), _v0.emitSignal({
      type: _v15.EAgoraSignal.LOCAL_MEDIA_DEVICE_OCCUPIED_BY_ANOTHER_APP
    })), _v0.log.info("Initialized local media, video/audio:", _v12, _v13), _v0.setContext({
      isBrowserPrompted: !1,
      audio: _v5.asMerged(_v13 ? {
        track: _v10,
        deviceId: (0, _v12.getAgoraTrackDeviceId)(_v10),
        error: null,
        isLoading: !1
      } : {
        error: _v10,
        track: null,
        isLoading: !1
      }),
      video: _v6.asMerged(_v12 ? {
        track: _v11,
        deviceId: (0, _v12.getAgoraTrackDeviceId)(_v11),
        error: null,
        isLoading: !1
      } : {
        error: _v11,
        track: null,
        isLoading: !1
      })
    }), await _v0.audioListener?.setAudioContext(_v0.context.audio), (_v12 || _v13) && (_v0.log.info("Emitting local media publishing signal"), await _v0.emitSignal({
      type: _v15.ELiveMediaSignal.LOCAL_MEDIA_INITIALIZED,
      data: {
        video: _v12 ? _v11 : null,
        audio: _v13 ? _v10 : null
      }
    })), await _v60(_v0), _v12 && _v13) (0, _v26.trackLiveAction)("media_initialized");else {
      let {
        video: _v0,
        audio: _v1
      } = _v0.context;
      (0, _v26.trackLiveAction)("media_init_failed", {
        videoErrorCode: _v0.error?.code,
        videoErrorMessage: _v0.error?.message,
        audioErrorCode: _v1.error?.code,
        audioErrorMessage: _v1.error?.message
      });
    }
  }
  async function _v64(_v0) {
    _v0.isAudioListenerEnabled && _v30.browserConfig.FEATURE.CAN_USE_AUDIO_CONTEXT ? (_v0.log.info("Initializing audio listener"), _v0.audioListener = new _v38({
      onAudioSpeechDetected: () => {
        !_v0.IS_DISPOSED && _v0.context.audio.isMuted && _v0.queryDataSync({
          type: _v55.ELiveQuery.INGEST_STATUS
        })?.data === _v33.EIngestStatus.STREAMING && _v0.emitSignal({
          type: _v15.ELiveSignal.USER_TALKING_WHILE_MUTED
        });
      }
    })) : _v0.log.info("Cannot audio listener, skip init", _v0.isAudioListenerEnabled);
  }
  async function _v65(_v0, _v1) {
    let {
      video: _v2,
      videoBackgroundProcessor: _v3,
      previewBackgroundProcessor: _v4
    } = _v0.context;
    if (!_v3 || !_v4) return void _v0.log.info("Blur not allowed:", _v2, _v3, _v4);
    let _v5 = _v1 ? _v31.liveMediaConfig.LOCAL_MEDIA.VIRTUAL_BACKGROUND_OPTIONS : null;
    try {
      await Promise.all([_v52(_v3, _v5), _v52(_v4, _v5)]), _v0.setContext({
        video: _v2.asMerged({
          isBlurred: _v1,
          backgroundImageId: void 0
        })
      }), (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.BLUR_ENABLED, _v1), (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.BACKGROUND_IMAGE_ID, ""), _v0.forceUpdate(), _v0.log.info("Video is blurred:", _v1);
    } catch (_v0) {
      _v0.log.info("Error blurring:", _v0);
    }
  }
  async function _v66(_v0) {
    return _v65(_v0, !_v0.context.video.isBlurred);
  }
  async function _v67(_v0, _v1) {
    let {
      video: _v2,
      videoBackgroundProcessor: _v3,
      previewBackgroundProcessor: _v4
    } = _v0.context;
    if (!_v3 || !_v4) return void _v0.log.info("Background image not allowed:", _v3);
    let _v5 = _v51({
      backgroundImageId: _v1
    }, _v31.liveMediaConfig.LOCAL_MEDIA.VIRTUAL_BACKGROUND_OPTIONS);
    if (!_v5) return void _v0.log.warn("Unknown background preset:", _v1);
    try {
      await Promise.all([_v52(_v3, _v5), _v52(_v4, _v5)]), _v0.setContext({
        video: _v2.asMerged({
          isBlurred: !1,
          backgroundImageId: _v1
        })
      }), (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.BACKGROUND_IMAGE_ID, _v1), (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.BLUR_ENABLED, !1), _v0.forceUpdate(), _v0.log.info("Video background image set:", _v1);
    } catch (_v0) {
      _v0.log.info("Error setting background image:", _v0);
    }
  }
  async function _v68(_v0) {
    let {
      video: _v1,
      videoBackgroundProcessor: _v2,
      previewBackgroundProcessor: _v3
    } = _v0.context;
    try {
      await Promise.all([_v52(_v2, null), _v52(_v3, null)]);
    } catch (_v0) {
      _v0.log.info("Error clearing background:", _v0);
      return;
    }
    _v0.setContext({
      video: _v1.asMerged({
        isBlurred: !1,
        backgroundImageId: void 0
      })
    }), (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.BLUR_ENABLED, !1), (0, _v13.setLocalStorageItem)(_v6.localStorageConfig.MEDIA.BACKGROUND_IMAGE_ID, ""), _v0.forceUpdate();
  }
  var _v69 = _v0.i(0);
  async function _v70(_v0, _v1) {
    var _v2 = _v31.liveMediaConfig.AGORA.LOG_LEVEL;
    try {
      if (_v2 >= 0 && _v2 <= 4) _v1.logger.logLevel = _v2;else throw new _v25.LiveError("Invalid log level. Must be between 0 and 4.");
    } catch (_v0) {
      (0, _v26.trackLiveError)(_v0, {
        category: _v54.ELiveErrorCategory.GENERIC,
        method: "setAgoraExtensionLoggerLevel"
      });
    }
    _v0.registerExtensions([_v1]);
    let _v3 = _v1.createProcessor(),
      _v4 = _v1.createProcessor();
    try {
      return await Promise.all([_v3.init(), _v4.init()]), {
        preview: _v4,
        video: _v3
      };
    } catch (_v0) {
      return _v5.Logger.getGlobal().error("Fail to load agora virtual background wasm file"), {
        preview: null,
        video: null
      };
    }
  }
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0);
  class _v73 extends _v2.ContextManager {
    context = {
      mediaActions: (0, _v2.createActions)({
        updateMediaDevices: () => this.updateMediaDevicesList(),
        startScreenSharing: () => this.startScreenSharing(),
        stopScreenSharing: () => this.stopScreenSharing(),
        setAudioDevice: _v0 => this.setAudioDevice(_v0),
        setAudioMuted: _v0 => this.setAudioMuted(_v0),
        setVideoMuted: _v0 => this.setVideoMuted(_v0),
        setVideoDevice: _v0 => this.setVideoDevice(_v0),
        setPlaybackDevice: _v0 => this.setPlaybackDevice(_v0),
        toggleVideoBlur: () => _v66(this),
        setVideoBackgroundImage: _v0 => _v67(this, _v0),
        clearVideoBackground: () => _v68(this)
      }),
      isMediaAllowed: !1,
      isBrowserPrompted: !1,
      isDestroyed: !1,
      agoraSDK: null,
      videoBackgroundProcessor: null,
      previewBackgroundProcessor: null,
      audioDevices: [],
      videoDevices: [],
      playbackDevices: [],
      playbackDeviceId: "default",
      audio: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: !0,
        error: null,
        track: null,
        deviceId: void 0
      }),
      video: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: !1,
        track: null,
        error: null,
        deviceId: void 0,
        isBlurred: !1,
        backgroundImageId: void 0
      }),
      screen: (0, _v2.createNested)({
        isLoading: !1,
        isMuted: !1,
        track: null,
        error: null,
        deviceId: void 0
      }),
      permission: (0, _v2.createNested)({
        isAllowed: !0,
        microphone: null,
        camera: null
      })
    };
    connectionTransactionId = (0, _v3.v4)();
    sessionApplicationType;
    sessionId;
    agoraSDK = null;
    isAudioListenerEnabled;
    audioListener = null;
    isVideoHardMuteEnabled = !1;
    isAudioHardMuteEnabled = !1;
    log = new _v5.Logger("🎬LMCM");
    constructor(_v0) {
      if (super(), !_v0?.sessionApplicationType || !_v0?.sessionId) throw new _v25.LiveError("Init failed, application type/id required.", {
        data: _v0
      });
      this.sessionApplicationType = _v0.sessionApplicationType, this.sessionId = _v0.sessionId, this.context.isMediaAllowed = !!_v0?.media?.isAllowedToGetLocalMedia, this.isAudioListenerEnabled = !!_v0.media?.isSpeakingWhileMutedDetectorEnabled, this.isVideoHardMuteEnabled = !!_v0?.media?.isVideoHardMuteEnabled, this.isAudioHardMuteEnabled = !!_v0?.media?.isAudioHardMuteEnabled, this.context.video.isMuted = !!(0, _v13.getFromLocalStorage)(`${_v6.localStorageConfig.MEDIA.ACTIVE_VIDEO_DEVICE_STATE}.${this.sessionId}`), this.context.video.isBlurred = !!(0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.BLUR_ENABLED), this.context.video.backgroundImageId = this.context.video.isBlurred ? void 0 : (0, _v13.getFromLocalStorage)(_v6.localStorageConfig.MEDIA.BACKGROUND_IMAGE_ID) || void 0, this.context.audio.isMuted = (0, _v72.inline)(() => {
        let _v0 = (0, _v13.getFromLocalStorage)(`${_v6.localStorageConfig.MEDIA.ACTIVE_AUDIO_DEVICE_STATE}.${this.sessionId}`);
        return null === _v0 || !!_v0;
      }), _v64(this);
    }
    async onProvisionStarted() {
      navigator?.mediaDevices && navigator.mediaDevices.addEventListener("devicechange", this.onMediaDevicesChange), await this.checkPermissions();
    }
    onProvisionEnded() {
      navigator?.mediaDevices && navigator.mediaDevices.removeEventListener("devicechange", this.onMediaDevicesChange), this.dispose();
    }
    async startScreenSharing() {
      return (0, _v26.withLiveErrorTracking)(() => _v56(this), () => ({
        method: "startScreenSharing",
        data: {
          context: this.context
        },
        category: _v54.ELiveErrorCategory.MEDIA
      }));
    }
    stopScreenSharing() {
      return (0, _v26.withLiveErrorTracking)(() => function (_v0) {
        _v0.log.info("Stopping screen sharing");
        let {
          screen: _v1
        } = _v0.context;
        if (!_v1.track || _v1.isLoading) return _v0.log.warn("Failed to stop screen share, one does not exist or is updating");
        (0, _v12.closeAgoraLocalTracks)(_v1.track), _v0.emitSignal({
          type: _v15.ELiveMediaSignal.SCREEN_MEDIA_STOPPED
        }), _v0.setContext({
          screen: _v1.asMerged({
            isLoading: !1,
            track: null,
            error: null
          })
        }), (0, _v26.trackLiveAction)("screen_share_stopped");
      }(this), {
        method: "stopScreenSharing",
        data: {
          context: this.context
        },
        category: _v54.ELiveErrorCategory.MEDIA
      });
    }
    async setVideoMuted(_v0) {
      return (0, _v26.withLiveErrorTracking)(() => _v57(this, _v0), {
        method: "setVideoMuted",
        category: _v54.ELiveErrorCategory.MEDIA
      });
    }
    async setAudioMuted(_v0) {
      return (0, _v26.withLiveErrorTracking)(() => _v58(this, _v0), {
        method: "setAudioMuted",
        category: _v54.ELiveErrorCategory.MEDIA
      });
    }
    async setAudioDevice(_v0) {
      return (0, _v26.withLiveErrorTracking)(() => _v59(this, _v0), {
        method: "setAudioDevice",
        category: _v54.ELiveErrorCategory.MEDIA,
        data: {
          deviceId: _v0,
          devices: this.context.audioDevices
        }
      });
    }
    async setVideoDevice(_v0) {
      return (0, _v26.withLiveErrorTracking)(() => _v61(this, _v0), {
        method: "setVideoDevice",
        category: _v54.ELiveErrorCategory.MEDIA,
        data: {
          deviceId: _v0,
          devices: this.context.videoDevices
        }
      });
    }
    async setPlaybackDevice(_v0) {
      return (0, _v26.withLiveErrorTracking)(() => _v62(this, _v0), {
        method: "setPlaybackDevice",
        category: _v54.ELiveErrorCategory.MEDIA,
        data: {
          deviceId: _v0,
          devices: this.context.playbackDevices
        }
      });
    }
    async updateMediaDevicesList() {
      return (0, _v26.withLiveErrorTracking)(() => _v29(this, !0), () => ({
        method: "updateMediaDevicesList",
        data: {
          context: this.context
        },
        category: _v54.ELiveErrorCategory.MEDIA
      }));
    }
    async initializeMedia() {
      return (0, _v26.withLiveErrorTracking)(() => _v63(this), {
        method: "initializeMedia",
        category: _v54.ELiveErrorCategory.MEDIA
      });
    }
    async checkPermissions() {
      return (0, _v26.withLiveErrorTracking)(() => _v27(this), {
        method: "checkPermissions",
        category: _v54.ELiveErrorCategory.MEDIA
      });
    }
    dispose() {
      return _v16(this);
    }
    disposeMedia() {
      return _v17(this);
    }
    async onMicrophonePermissionsChanged() {
      let {
        permission: _v0
      } = this.context;
      _v0.isAllowed && _v0.microphone?.state === "denied" && (this.log.info("Looks like audio permissions were restricted, disposing all local media"), await _v28(this));
    }
    async onCameraPermissionsChanged() {
      let {
        permission: _v0
      } = this.context;
      _v0.isAllowed && _v0.camera?.state === "denied" && (this.log.info("Looks like video permissions were restricted, disposing all local media"), await _v28(this));
    }
    async onCameraInDeviceListChanged(_v0) {
      let {
        permission: _v1,
        isDestroyed: _v2,
        video: {
          deviceId: _v3,
          isMuted: _v4
        }
      } = this.context;
      if (_v1.isAllowed && !_v2 && _v0.device.deviceId === _v3 && "INACTIVE" === _v0.state) if (this.log.info("Active camera was unplugged:", _v3), _v4) this.log.info("Active camera already disabled");else {
        await this.setVideoMuted(!1);
        let {
          video: _v0
        } = this.context;
        this.setContext({
          video: _v0.asMerged({
            error: Error("Device unplugged."),
            deviceId: void 0
          })
        }), this.log.info("Active camera gracefully unplugged:", _v3);
      }
    }
    async onMicrophoneInDeviceListChanged(_v0) {
      let {
        permission: _v1,
        audio: _v2
      } = this.context;
      _v1.isAllowed && "INACTIVE" === _v0.state && (_v0.device.deviceId === _v2.deviceId || _v0.device.deviceId === this.getActiveAudioTrackDeviceId()) && (this.log.info("Active microphone was unplugged:", _v0.device.deviceId), await this.handleMicrophoneLost());
    }
    getActiveAudioTrackDeviceId() {
      let {
        track: _v0
      } = this.context.audio;
      return _v0 ? (0, _v12.getAgoraTrackDeviceId)(_v0) : void 0;
    }
    async handleMicrophoneLost() {
      let {
        permission: _v0,
        isDestroyed: _v1,
        audio: _v2
      } = this.context;
      if (!_v0.isAllowed || _v1 || this.IS_DISPOSED || !_v2.track) return;
      let _v3 = _v2.track,
        _v4 = this.getActiveAudioTrackDeviceId(),
        _v5 = _v2.isMuted;
      this.log.info("Active microphone lost, recovering. Lost device:", _v4), (0, _v12.closeAgoraLocalTracks)(_v3), this.setContext({
        audio: _v2.asMerged({
          track: null,
          deviceId: void 0,
          isLoading: !1,
          error: new _v25.LiveError("Device unplugged.")
        })
      }), this.emitSignal({
        type: _v15.ELiveMediaSignal.LOCAL_TRACK_DISPOSED,
        data: _v3
      }), await this.updateMediaDevicesList();
      let _v6 = this.pickFallbackAudioDeviceId(_v4);
      if (_v6) try {
        this.log.info("Switching microphone to fallback device:", _v6), await this.setAudioDevice(_v6), this.emitSignal({
          type: _v15.ELiveSignal.SHOW_SIMPLE_NOTIFICATION,
          data: {
            status: _v11.ESimpleNotificationStatus.INFO,
            message: this.getMicrophoneSwitchedMessage(this.getAudioDeviceLabel(_v6))
          }
        }), this.log.info("Microphone recovered on fallback device, muted:", _v5);
        return;
      } catch (_v0) {
        this.log.warn("Fallback microphone switch failed, warning user.", _v0);
      } else this.log.info("No fallback microphone available, warning user.");
      this.emitSignal({
        type: _v15.ELiveSignal.SHOW_SIMPLE_NOTIFICATION,
        data: {
          status: _v11.ESimpleNotificationStatus.ERROR,
          message: _v8.T_MICROPHONE_DISCONNECTED
        }
      });
    }
    pickFallbackAudioDeviceId(_v0) {
      let {
          audioDevices: _v1
        } = this.context,
        _v2 = _v1.find(_v0 => "default" === _v0.deviceId && _v0.deviceId !== _v0);
      return _v2 ? _v2.deviceId : _v1.find(_v0 => _v0.deviceId && _v0.deviceId !== _v0)?.deviceId;
    }
    getAudioDeviceLabel(_v0) {
      if (_v0) return this.context.audioDevices.find(_v0 => _v0.deviceId === _v0)?.label?.trim();
    }
    getMicrophoneSwitchedMessage(_v0) {
      return _v0 ? (0, _v4.translate)({
        singular: "Your microphone was disconnected. Now using “{NEW}”.",
        replacements: {
          NEW: _v0
        },
        dictionary: {
          es: {
            singular: "Su micrófono se desconectó. Ahora se está usando “{NEW}”."
          },
          "de-DE": {
            singular: "Ihr Mikrofon wurde getrennt. Jetzt wird “{NEW}” verwendet."
          },
          "fr-FR": {
            singular: "Votre microphone a été déconnecté. Utilisation de “{NEW}”."
          },
          "ja-JP": {
            singular: "マイクが切断されました. 現在 “{NEW}”を使用しています."
          },
          "ko-KR": {
            singular: "마이크 연결이 끊어졌습니다. 현재 “{NEW}” 사용 중입니다."
          },
          "pt-BR": {
            singular: "Seu microfone foi desconectado. Agora está usando “{NEW}”."
          },
          "zh-CN": {
            singular: "您的麦克风已断开. 现在使用“{NEW}”."
          }
        }
      }) : (0, _v4.translate)({
        singular: "Your microphone was disconnected. Switched to another available device.",
        dictionary: {
          es: {
            singular: "Su micrófono se desconectó. Se cambió a otro dispositivo disponible."
          },
          "de-DE": {
            singular: "Ihr Mikrofon wurde getrennt. Auf ein anderes verfügbares Gerät umgeschaltet."
          },
          "fr-FR": {
            singular: "Votre microphone a été déconnecté. Le système a basculé sur un autre appareil disponible."
          },
          "ja-JP": {
            singular: "マイクが切断されました。別の利用可能なデバイスに切り替えました。"
          },
          "ko-KR": {
            singular: "마이크 연결이 끊겼습니다. 사용 가능한 다른 장치로 전환되었습니다."
          },
          "pt-BR": {
            singular: "Seu microfone foi desconectado. Foi selecionado outro dispositivo disponível."
          },
          "zh-CN": {
            singular: "您的麦克风已断开。已切换到另一个可用设备。"
          }
        }
      });
    }
    assertIsInitialized() {
      if (!this.agoraSDK) throw new _v25.LiveError("Local media manager is not initialized.", {
        code: _v32.ELiveErrorCode.INITIALIZATION
      });
    }
    async onMediaDevicesChange() {
      return this.updateMediaDevicesList();
    }
    async onAgoraLoaded(_v0) {
      let {
        agoraSDK: _v1,
        VirtualBackgroundExtension: _v2
      } = _v0.data;
      this.agoraSDK = _v1;
      let _v3 = new _v2(),
        _v4 = (_v3?.checkCompatibility() && _v30.browserConfig.BROWSER?.name !== "firefox" && _v30.browserConfig.FEATURE.CAN_USE_WEBGL || (_v5.Logger.getGlobal().warn("Virtual background is not supported."), 0)) && this.agoraSDK ? await _v70(this.agoraSDK, _v3) : {
          preview: null,
          video: null
        };
      this.setContext({
        videoBackgroundProcessor: _v4.video,
        previewBackgroundProcessor: _v4.preview,
        agoraSDK: _v1
      }), this.agoraSDK.onCameraChanged = this.onCameraInDeviceListChanged, this.agoraSDK.onMicrophoneChanged = this.onMicrophoneInDeviceListChanged, this.agoraSDK.onAudioAutoplayFailed = () => this.log.warn("Agora autoplay failed"), await this.updateMediaDevicesList(), this.context.isMediaAllowed && (this.log.info("Init media after agora load"), await this.initializeMedia());
    }
    async onConnectionTypeChanged(_v0) {
      let {
          isMediaAllowed: _v1
        } = this.context,
        {
          data: _v2
        } = _v0;
      this.connectionTransactionId = (0, _v3.v4)(), this.setContext({
        isMediaAllowed: _v2 === _v69.EEventConnectionType.BROADCASTER
      }), this.log.info("Changing current connection type to:", _v2), this.agoraSDK && (_v2 === _v69.EEventConnectionType.BROADCASTER ? (this.log.info("Required media after connection type change"), await this.initializeMedia()) : _v1 && this.disposeMedia()), await _v18(this);
    }
    async onScreenMediaStartRequired() {
      let {
          screen: _v0
        } = this.context,
        _v1 = this.queryDataSync({
          type: _v55.EGuestQuery.SESSION_JOINED
        });
      if (_v1?.data === !1) return this.log.info("Cancel remote screen share request when in preparation stage");
      _v0.track || _v0.isLoading ? this.log.info("Screen share start is requested, but already exists") : (this.log.info("Screen share start is requested by external source"), await this.startScreenSharing());
    }
    async onScreenMediaStopRequired() {
      let {
        screen: _v0
      } = this.context;
      !_v0.track || _v0.isLoading ? this.log.info("Screen share stop is requested, but already disposed") : (this.log.info("Screen share stop is requested by external source"), await this.stopScreenSharing());
    }
    onMediaShouldBeDestroyed() {
      this.dispose();
    }
    onGuestMuted({
      data: {
        guestId: _v0
      }
    }) {
      this.setAudioMuted(!0), this.emitSignal({
        type: _v15.ELiveSignal.SHOW_SIMPLE_NOTIFICATION,
        data: {
          message: _v8.T_MUTED_BY_HOST
        }
      }), this.emitSignal({
        type: _v15.EGuestMuteSignal.GUEST_MUTE_ACKNOWLEDGED,
        data: {
          guestId: _v0
        }
      });
    }
    onGuestUnmuteRequested({
      data: {
        guestId: _v0
      }
    }) {
      let _v1 = {
        type: _v11.EConfirmationType.UNMUTE_REQUEST,
        header: _v8.T_THE_BROADCASTER_WOULD_LIKE_YOU_TO_UNMUTE,
        body: _v8.T_YOUR_MIC_IS_CURRENTLY_MUTED,
        confirmMessage: _v8.T_UNMUTE,
        declineMessage: _v8.T_STAY_MUTED,
        onConfirm: () => this.setAudioMuted(!1)
      };
      this.emitSignal({
        type: _v15.ELiveSignal.CONFIRMATION_NOTIFICATION,
        data: _v1
      }), this.emitSignal({
        type: _v15.EGuestMuteSignal.GUEST_UNMUTE_ACKNOWLEDGED,
        data: {
          guestId: _v0
        }
      });
    }
    onQueryCurrentLocalMedia() {
      let {
        audio: _v0,
        video: _v1,
        screen: _v2
      } = this.context;
      return {
        audio: _v0.track,
        video: _v1.track,
        screen: _v2.track
      };
    }
    onQueryCurrentLocalVideoConfig() {
      return this.context.video;
    }
    onQueryCurrentPlaybackDevice() {
      return {
        playbackDeviceId: this.context.playbackDeviceId,
        playbackDevices: this.context.playbackDevices
      };
    }
  }
  (0, _v1._)([(0, _v2.Bind)()], _v73.prototype, "onMicrophonePermissionsChanged", null), (0, _v1._)([(0, _v2.Bind)()], _v73.prototype, "onCameraPermissionsChanged", null), (0, _v1._)([(0, _v2.Bind)()], _v73.prototype, "onCameraInDeviceListChanged", null), (0, _v1._)([(0, _v2.Bind)()], _v73.prototype, "onMicrophoneInDeviceListChanged", null), (0, _v1._)([(0, _v2.Bind)()], _v73.prototype, "handleMicrophoneLost", null), (0, _v1._)([(0, _v71.BoundDebounced)(0)], _v73.prototype, "onMediaDevicesChange", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.EDependencySignal.AGORA_DEPENDENCIES_LOADED)], _v73.prototype, "onAgoraLoaded", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.ELiveBroadcasterSignal.EVENT_CONNECTION_TYPE_CHANGED)], _v73.prototype, "onConnectionTypeChanged", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.ELiveMediaSignal.SCREEN_MEDIA_START_REQUIRED)], _v73.prototype, "onScreenMediaStartRequired", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.ELiveMediaSignal.SCREEN_MEDIA_STOP_REQUIRED), (0, _v2.OnSignal)(_v15.EGuestSignal.SESSION_LEFT)], _v73.prototype, "onScreenMediaStopRequired", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.ELiveSignal.LIVE_EVENT_ENDED), (0, _v2.OnSignal)(_v15.EPageSignal.PAGE_INACTIVE)], _v73.prototype, "onMediaShouldBeDestroyed", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.EGuestMuteSignal.GUEST_MUTE_REQUESTED)], _v73.prototype, "onGuestMuted", null), (0, _v1._)([(0, _v2.OnSignal)(_v15.EGuestMuteSignal.GUEST_UNMUTE_REQUESTED)], _v73.prototype, "onGuestUnmuteRequested", null), (0, _v1._)([(0, _v2.OnQuery)(_v55.ELiveMediaQuery.CURRENT_LOCAL_MEDIA)], _v73.prototype, "onQueryCurrentLocalMedia", null), (0, _v1._)([(0, _v2.OnQuery)(_v55.ELiveMediaQuery.CURRENT_LOCAL_VIDEO_CONFIG)], _v73.prototype, "onQueryCurrentLocalVideoConfig", null), (0, _v1._)([(0, _v2.OnQuery)(_v55.ELiveMediaQuery.CURRENT_PLAYBACK_DEVICE)], _v73.prototype, "onQueryCurrentPlaybackDevice", null), _v0.s(["LocalMediaManager", 0, _v73], 0);
}