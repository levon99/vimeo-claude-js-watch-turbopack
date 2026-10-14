{
  "use strict";

  var _v1 = _v0.i(0);
  _v0.s(["Teleprompter", () => _v1.TeleprompterRoot], 0);
  var _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
    visitHelpCenter: (0, _v0.i(0).translate)({
      singular: "Visit help center",
      dictionary: {
        es: {
          singular: "Visita el centro de ayuda"
        },
        "de-DE": {
          singular: "Zum Hilfecenter gehen"
        },
        "fr-FR": {
          singular: "Consulter le Centre d'aide"
        },
        "ja-JP": {
          singular: "ヘルプセンターへ移動"
        },
        "ko-KR": {
          singular: "도움말 센터 방문하기"
        },
        "pt-BR": {
          singular: "Acessar a Central de Ajuda"
        },
        "zh-CN": {
          singular: "访问“帮助中心”"
        }
      }
    })
  };
  _v0.s(["BottomBar", 0, () => (0, _v2.jsx)(_v5.VStack, {
    position: "absolute",
    bottom: "md",
    left: "md",
    children: (0, _v2.jsx)(_v4.Tooltip, {
      label: _v7.visitHelpCenter,
      placement: "right",
      children: (0, _v2.jsx)(_v3.IconButton, {
        "aria-label": _v7.visitHelpCenter,
        size: "lg",
        icon: (0, _v2.jsx)(_v6.QuestionCircle, {}),
        as: "a",
        href: "https://help.vimeo.com/hc/en-us/sections/23557130192529-Record-Studio",
        target: "_blank",
        variant: "tertiary",
        borderRadius: "round !important"
      })
    })
  })], 0), _v0.s(["TEST_IDS", 0, {
    SHARE_SCREEN_BUTTON: "record-studio-controls-share-screen",
    VIDEO_DEVICE_DROPDOWN_BUTTON: "record-studio-controls-video-dropdown",
    VIDEO_DEVICE_LOADING_SKELETON: "record-studio-controls-video-loading-skeleton",
    VIDEO_DEVICE_TOGGLE_BUTTON: "record-studio-controls-video",
    AUDIO_DEVICE_DROPDOWN_BUTTON: "record-studio-controls-audio-dropdown",
    AUDIO_DEVICE_LOADING_SKELETON: "record-studio-controls-audio-loading-skeleton",
    AUDIO_DEVICE_TOGGLE_BUTTON: "record-studio-controls-audio",
    DROPDOWN_LIST: "record-studio-controls-dropdown-list-",
    DROPDOWN_DEVICE_ITEM: "record-studio-controls-dropdown-device-",
    DROPDOWN_OPTION_ITEM: "record-studio-controls-dropdown-option-",
    DROPDOWN_DEVICE_SELECTED: "record-studio-controls-dropdown-device-selected",
    TELEPROMPTER_TOGGLE_BUTTON: "record-studio-controls-teleprompter",
    START_RECORDING_BUTTON: "record-studio-controls-record-button",
    UPGRADE_TO_START_RECORDING_BUTTON: "record-studio-controls-upgrade-to-record-button",
    STOP_RECORDING_BUTTON: "record-studio-controls-stop-record-button",
    CONTROLS_ELEMENT: "record-studio-controls",
    COUNTDOWN_ELEMENT: "record-studio-countdown",
    COUNTDOWN_CANCEL_BUTTON: "record-studio-countdown-cancel",
    PAUSE_RESUME_BUTTON: "record-studio-controls-pause-resume",
    RESTART_BUTTON: "record-studio-controls-restart",
    RESTART_MODAL: "record-studio-controls-restart-modal",
    RESTART_MODAL_CANCEL_BUTTON: "record-studio-controls-restart-modal-cancel",
    RESTART_MODAL_CONFIRM_BUTTON: "record-studio-controls-restart-modal-confirm",
    DELETE_BUTTON: "record-studio-controls-delete",
    DELETE_MODAL: "record-studio-controls-delete-modal",
    DELETE_MODAL_CANCEL_BUTTON: "record-studio-controls-delete-modal-cancel",
    DELETE_MODAL_CONFIRM_BUTTON: "record-studio-controls-delete-modal-confirm",
    MIDRECORDING_PIP_SWITCH_BUTTON: "record-studio-controls-pip-switch",
    PAUSE_NOTIFICATION: "record-studio-pause-notification",
    RECORDING_DURATION: "record-studio-recording-duration",
    WAVEFORM_TOGGLE_MENU_ITEM: "record-studio-waveform-toggle-menu-item",
    CAMERA_EFFECTS_MODAL: "record-studio-camera-effects-modal",
    SETTINGS_BUTTON: "record-studio-settings-button"
  }], 0);
  var _v8 = _v0.i(0);
  let _v9 = _v0 => (0, _v2.jsx)(_v8.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v2.jsx)("path", {
      d: "M15 8h4.4L14 2.6V7c0 .6.4 1 1 1Zm0 2c-1.7 0-3-1.3-3-3V2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-9h-5Zm-.3 5.7-2 2c-.4.4-1 .4-1.4 0l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l.3.3V12c0-.6.4-1 1-1s1 .4 1 1v2.6l.3-.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4Z",
      fill: "currentColor"
    })
  });
  var _v10 = _v0.i(0);
  let _v11 = ({
    children: _v0,
    isCompact: _v1
  }) => (0, _v2.jsx)(_v10.Flex, {
    position: "relative",
    direction: "row",
    borderRadius: "button",
    height: "100%",
    gap: "75",
    py: "50",
    px: _v1 ? "75" : "50",
    bgColor: _v1 ? "darkBlueAlpha.200" : void 0,
    _dark: {
      bgColor: _v1 ? "lightBlueAlpha.300" : void 0
    },
    children: _v0
  });
  _v0.s(["ControlsContainer", 0, _v11], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = (0, _v12.forwardRef)(({
    tipContent: _v0,
    isWide: _v1,
    isDisabled: _v2,
    isActive: _v3,
    ..._v4
  }, _v5) => (0, _v2.jsx)(_v4.Tooltip, {
    label: _v0,
    isDisabled: _v2,
    children: (0, _v2.jsx)(_v3.IconButton, {
      ref: _v5,
      "aria-label": _v0 || "",
      variant: _v3 ? "primary" : "secondary",
      display: "flex",
      alignItems: "center",
      justifyContent: _v1 ? "flex-start" : "center",
      isDisabled: _v2,
      isActive: _v3,
      size: "md",
      width: _v1 ? (0, _v13.rem)(60) : void 0,
      ..._v4
    })
  }));
  _v0.s(["CompactLabelledButton", 0, _v0 => (0, _v2.jsx)(_v14, {
    ..._v0,
    size: "sm",
    variant: "tertiary"
  }), "LabelledButton", 0, _v14], 0);
  var _v15 = _v0.i(0);
  function _v16(_v0, _v1) {
    let _v2 = (0, _v15.isMp4MimeType)((0, _v15.getMimeType)()) ? "mp4" : "webm";
    return new File(_v0, `${_v1}.${_v2}`, {
      type: `video/${_v2}`
    });
  }
  _v0.s(["getFileFromRecordedChunks", 0, _v16], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = _v0 => (0, _v17.create)((0, _v18.subscribeWithSelector)((0, _v19.immer)(_v0)));
  _v0.s(["createPersistentStore", 0, (_v0, _v1) => (0, _v17.create)((0, _v18.subscribeWithSelector)((0, _v18.persist)((0, _v19.immer)(_v0), _v1))), "createStore", 0, _v20], 0);
  let _v21 = {
      info: {
        uri: void 0,
        title: "",
        duration: 0,
        size: 0,
        isResolutionChanged: !1,
        isRecordingDurationLimitReached: !1
      },
      originalChunks: [],
      convertedChunks: [],
      recordingThumbnail: null
    },
    _v22 = _v20((_v0, _v1) => ({
      ..._v21,
      addOriginalChunk: _v0 => {
        _v0(_v0 => {
          _v0.originalChunks.push(_v0);
        });
      },
      addConvertedChunk: _v0 => {
        _v0(_v0 => {
          _v0.convertedChunks.push(_v0);
        });
      },
      removeOriginalChunks: () => {
        _v0(_v0 => {
          _v0.originalChunks = [];
        });
      },
      removeConvertedChunks: () => {
        _v0(_v0 => {
          _v0.convertedChunks = [];
        });
      },
      resetRecording: (_v0 = {}) => {
        let _v1 = _v0.keepThumbnail ? _v1().recordingThumbnail : null;
        _v0({
          ..._v21,
          recordingThumbnail: _v1
        });
      },
      setInfo: _v0 => {
        _v0(_v0 => {
          _v0.info = {
            ..._v0.info,
            ..._v0
          };
        });
      },
      setRecordingThumbnail(_v0) {
        _v0(_v0 => {
          _v0.recordingThumbnail = _v0;
        });
      }
    }));
  _v0.s(["useMemoryDataStorage", 0, _v22], 0);
  let _v23 = (_v0, _v1) => {
    let _v2 = URL.createObjectURL(_v0),
      _v3 = document.createElement("a");
    _v3.href = _v2, _v3.download = _v1, _v3.style.display = "none", document.body.appendChild(_v3), _v3.click(), _v3.remove(), setTimeout(() => URL.revokeObjectURL(_v2), 0);
  };
  _v0.s(["downloadBlob", 0, _v23], 0);
  let _v24 = () => {
    let _v0 = _v22(_v0 => _v0.convertedChunks.length > 0 || _v0.originalChunks.length > 0);
    return {
      downloadRecording: (0, _v12.useCallback)(() => {
        let {
            originalChunks: _v0,
            convertedChunks: _v1,
            info: _v2
          } = _v22.getState(),
          _v3 = _v1.length > 0 ? _v1 : _v0;
        if (0 === _v3.length) return !1;
        let _v4 = _v16(_v3, _v2.title);
        return _v23(_v4, _v4.name), !0;
      }, []),
      haveUnsavedRecording: _v0
    };
  };
  _v0.s(["useRecordDownloader", 0, _v24], 0);
  let _v25 = window.navigator.userAgent.indexOf("Safari") > -1 && -1 === window.navigator.userAgent.indexOf("Chrome"),
    _v26 = window.navigator.userAgent.indexOf("Firefox") > -1 && -1 === window.navigator.userAgent.indexOf("Chrome"),
    _v27 = () => "documentPictureInPicture" in window;
  _v0.s(["isDocumentPipSupported", 0, _v27, "isFirefox", 0, _v26, "isSafari", 0, _v25], 0);
  let _v28 = {
      state: "pre-recording",
      appMode: null,
      recordingState: "idle",
      uploadingState: "idle",
      recoveryStep: "retry",
      error: {
        type: null,
        errorKey: null
      },
      selectedFolder: void 0,
      recordingDuration: 0,
      averageFrameTime: null,
      recordingStartedAt: null,
      isModelLoading: !1,
      uploadToFolderUri: null,
      uploadToAccountId: null,
      userId: null,
      recordingAvailability: {
        available: !1
      },
      isTeamSwitching: !1,
      wereInvitedToRecord: !1,
      isRecordingStarted: !1,
      isBackModalShown: !1,
      waitingToRouteBack: !1,
      isEligibleForUltraQuality: !1,
      isGuest: void 0
    },
    _v29 = {
      available: ["nobody"],
      selected: {
        value: "nobody"
      },
      isLoaded: !1,
      resetCount: 0
    },
    _v30 = {
      instance: void 0,
      isCloudLoggingEnabled: !1
    },
    _v31 = _v20(_v0 => ({
      common: {
        ..._v28,
        setWereInvitedToRecord: _v0 => {
          _v0(_v0 => {
            _v0.common.wereInvitedToRecord = _v0;
          });
        },
        setState: _v0 => {
          _v0(_v0 => {
            _v0.common.state = _v0;
          });
        },
        setAppMode: _v0 => {
          _v0(_v0 => {
            _v0.common.appMode = _v0;
          });
        },
        setRecordingState: _v0 => {
          _v0(_v0 => {
            _v0.common.recordingState = _v0;
          });
        },
        setUploadingState: _v0 => {
          _v0(_v0 => {
            _v0.common.uploadingState = _v0;
          });
        },
        setRecoveryStep: _v0 => {
          _v0(_v0 => {
            _v0.common.recoveryStep = _v0;
          });
        },
        setError: _v0 => {
          _v0(_v0 => {
            let _v1 = "function" == typeof _v0 ? _v0(_v0.common.error) : _v0;
            void 0 === _v1 ? _v0.common.error = {
              type: null,
              errorKey: null
            } : _v0.common.error = _v1;
          });
        },
        setAverageFrameTime: _v0 => {
          _v0(_v0 => {
            _v0.common.averageFrameTime = _v0;
          });
        },
        setRecordingDuration: _v0 => {
          _v0(_v0 => {
            _v0.common.recordingDuration = _v0 ?? 0;
          });
        },
        recordingStartedAt: null,
        setRecordingStartedAt(_v0) {
          _v0(_v0 => {
            _v0.common.recordingStartedAt = _v0;
          });
        },
        setModelLoading: _v0 => {
          _v0(_v0 => {
            _v0.common.isModelLoading = _v0;
          });
        },
        setUploadToFolderUri: _v0 => {
          _v0(_v0 => {
            _v0.common.uploadToFolderUri = _v0;
          });
        },
        setSelectedFolder: _v0 => {
          _v0(_v0 => {
            _v0.common.selectedFolder = _v0;
          });
        },
        setUploadToAccountId(_v0) {
          _v0(_v0 => {
            _v0.common.uploadToAccountId = _v0;
          });
        },
        setUserId(_v0) {
          _v0(_v0 => {
            _v0.common.userId = _v0;
          });
        },
        setRecordingAvailability: _v0 => {
          _v0(_v0 => {
            _v0.common.recordingAvailability = _v0;
          });
        },
        setIsTeamSwitching: _v0 => {
          _v0(_v0 => {
            _v0.common.isTeamSwitching = _v0;
          });
        },
        setIsRecordingStarted: _v0 => {
          _v0(_v0 => {
            _v0.common.isRecordingStarted = _v0;
          });
        },
        setUploadMethod: _v0 => {
          _v0(_v0 => {
            _v0.common.uploadMethod = _v0;
          });
        },
        setBackModalShown: _v0 => {
          _v0(_v0 => {
            _v0.common.isBackModalShown = _v0;
          });
        },
        setWaitingToRouteBack: _v0 => {
          _v0(_v0 => {
            _v0.common.waitingToRouteBack = _v0;
          });
        },
        setIsEligibleForUltraQuality: _v0 => {
          _v0(_v0 => {
            _v0.common.isEligibleForUltraQuality = _v0;
          });
        },
        setIsGuest: _v0 => {
          _v0(_v0 => {
            _v0.common.isGuest = _v0;
          });
        }
      },
      privacy: {
        ..._v29,
        setAvailable: _v0 => {
          _v0(_v0 => {
            _v0.privacy.available = _v0, _v0.privacy.isLoaded = !0;
          });
        },
        setSelected: _v0 => {
          _v0(_v0 => {
            _v0.privacy.selected = _v0;
          });
        }
      },
      logger: {
        ..._v30,
        setLogger: _v0 => {
          _v0(_v0 => {
            _v0.logger.instance = _v0;
          });
        },
        setCloudLoggingEnabled: _v0 => {
          _v0(_v0 => {
            _v0.logger.isCloudLoggingEnabled = _v0;
          });
        }
      },
      reset: () => {
        _v0(_v0 => {
          _v0.common = {
            ..._v0.common,
            ..._v28
          }, _v0.privacy = {
            ..._v0.privacy,
            ..._v29,
            resetCount: _v0.privacy.resetCount + 1
          }, _v0.logger = {
            ..._v0.logger,
            ..._v30
          };
        });
      },
      controls: {
        confirmDialogState: null,
        controlsAction: null,
        setConfirmDialogState: _v0 => {
          _v0(_v0 => {
            _v0.controls.confirmDialogState = _v0;
          });
        },
        setControlsAction: (_v0, _v1) => {
          _v0(_v0 => {
            _v0.controls.controlsAction = {
              kind: _v0,
              source: _v1 ?? "other"
            };
          });
        }
      },
      pip: {
        supported: _v27(),
        reloading: !1,
        enabled: !1,
        currentSize: "minimized",
        setReloading: _v0 => {
          _v0(_v0 => {
            _v0.pip.reloading = _v0;
          });
        },
        setEnabled: _v0 => {
          _v0(_v0 => {
            _v0.pip.enabled = _v0;
          });
        },
        setCurrentSize: _v0 => {
          _v0(_v0 => {
            _v0.pip.currentSize = _v0;
          });
        }
      },
      recorder: null,
      setRecorder: _v0 => {
        _v0(_v0 => {
          _v0.recorder = _v0;
        });
      }
    }));
  _v0.s(["useUIStore", 0, _v31], 0), _v0.s(["DownloadLocalRecording", 0, () => {
    let _v0 = _v31(_v0 => _v0.common.state),
      {
        haveUnsavedRecording: _v1,
        downloadRecording: _v2
      } = _v24();
    return (0, _v2.jsx)(_v2.Fragment, {
      children: "pre-recording" === _v0 && _v1 && (0, _v2.jsx)(_v11, {
        children: (0, _v2.jsx)(_v14, {
          icon: (0, _v2.jsx)(_v9, {}),
          onClick: _v2,
          tipContent: "Download latest recording"
        })
      })
    });
  }], 0);
}