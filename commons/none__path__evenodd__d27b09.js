{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = _v0 => (0, _v1.jsx)(_v5.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 3.5a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0v-4a3 3 0 0 0-3-3Zm-3.535-.536A5 5 0 0 1 17 6.5v4a5 5 0 1 1-10 0v-4a5 5 0 0 1 1.465-3.536ZM4.369 13.101a1 1 0 0 1 1.337.461A6.997 6.997 0 0 0 12 17.5a7 7 0 0 0 6.295-3.938 1 1 0 0 1 1.798.876A8.998 8.998 0 0 1 13 19.444V21.5a1 1 0 1 1-2 0v-2.056a9 9 0 0 1-7.093-5.006A1 1 0 0 1 4.37 13.1Z",
      fill: "currentColor"
    })
  });
  _v0.s(["MicOn", 0, _v6], 0);
  var _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  function _v32({
    title: _v0,
    description: _v1
  }) {
    return (0, _v1.jsx)(_v25.BokehTooltip, {
      padding: 0,
      backgroundColor: "transparent",
      border: "none",
      label: (0, _v1.jsxs)(_v27.Alert, {
        variant: "solid",
        status: "error",
        size: "sm",
        textAlign: "left",
        maxWidth: (0, _v20.rem)(314),
        margin: 0,
        children: [_v0 ? (0, _v1.jsx)(_v29.AlertTitle, {
          children: _v0
        }) : null, (0, _v1.jsx)(_v28.AlertDescription, {
          children: _v1
        })]
      }),
      children: (0, _v1.jsx)(_v30.CircleExclamationFilled, {
        boxSize: (0, _v20.rem)(20),
        color: _v31.FAILED_STATUS_COLOR
      })
    });
  }
  function _v33({
    className: _v0 = (0, _v18.createLiveDomName)("control-button-error"),
    title: _v1,
    description: _v2
  }) {
    return (0, _v1.jsx)(_v21.Box, {
      className: _v0,
      sx: {
        position: "absolute",
        top: 0,
        right: 0,
        "& > span": {
          display: "flex",
          background: "background",
          position: "absolute",
          top: (0, _v20.rem)(-10),
          right: (0, _v20.rem)(-10),
          height: (0, _v20.rem)(20),
          borderRadius: (0, _v20.rem)(10)
        }
      },
      children: (0, _v1.jsx)(_v32, {
        title: _v1,
        description: _v2
      })
    });
  }
  function _v34({
    id: _v0 = "",
    className: _v1 = (0, _v18.createLiveDomName)("control-button"),
    toolTipLabel: _v2 = "",
    toolTipPosition: _v3 = "top",
    icon: _v4,
    isActive: _v5 = !1,
    isDisabled: _v6 = !1,
    isLoading: _v7 = !1,
    hasError: _v8 = !1,
    errorTitle: _v9 = "",
    errorDescription: _v10 = "",
    buttonMenu: _v11 = null,
    onClick: _v12 = _v26.CallablePlaceholder
  }) {
    let _v13 = !!_v11,
      _v14 = (0, _v22.useColorModeValue)(_v5 ? "gray.900" : "darkBlueAlpha.200", _v5 ? "gray.50" : "lightBlueAlpha.300"),
      _v15 = (0, _v22.useColorModeValue)("darkBlueAlpha.300", "lightBlueAlpha.400"),
      _v16 = (0, _v22.useColorModeValue)("gray.700", "gray.200"),
      _v17 = (0, _v3.useCallback)(() => {
        _v6 || _v12();
      }, [_v6, _v12]);
    return (0, _v1.jsxs)(_v24.Center, {
      "data-group": !0,
      position: "relative",
      alignSelf: "center",
      minHeight: (0, _v20.rem)(40),
      height: (0, _v20.rem)(40),
      width: (0, _v20.rem)(_v13 ? 62 : 34),
      borderRadius: (0, _v20.rem)(12),
      backgroundColor: _v14,
      _hover: {
        backgroundColor: _v6 ? "none" : _v5 ? _v16 : _v15
      },
      children: [_v8 ? (0, _v1.jsx)(_v33, {
        title: _v9,
        description: _v10
      }) : null, (0, _v1.jsx)(_v25.BokehTooltip, {
        label: _v2,
        placement: _v3,
        shouldWrapChildren: !1,
        isDisabled: _v7 || !_v2,
        maxWidth: (0, _v20.rem)(300),
        children: (0, _v1.jsx)(_v23.IconButton, {
          id: _v0,
          className: _v1,
          "aria-label": "media-control",
          icon: _v4,
          variant: "tertiary",
          isDisabled: _v6,
          isLoading: _v7,
          height: "100%",
          cursor: _v6 ? "unset" : void 0,
          opacity: _v6 ? .5 : 1,
          sx: {
            backgroundColor: "transparent !important",
            "&:hover": {
              backgroundColor: "transparent !important"
            }
          },
          onClick: _v17
        })
      }), _v11 ? (0, _v1.jsx)(_v21.Box, {
        id: _v0 ? (0, _v18.createLiveDomName)(_v0, "control-wrapper") : void 0,
        className: (0, _v18.createLiveDomName)(_v1, "control-wrapper"),
        position: "relative",
        left: (0, _v20.rem)(-4),
        top: (0, _v20.rem)(-4),
        cursor: _v6 ? "unset" : void 0,
        opacity: _v6 ? .5 : 1,
        children: _v11
      }) : null]
    });
  }
  _v0.s(["AlertTooltipIcon", 0, _v32], 0);
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0);
  let _v41 = (0, _v3.forwardRef)(function ({
    id: _v0 = (0, _v18.createLiveDomName)("control-button-chevron"),
    className: _v1 = (0, _v18.createLiveDomName)("control-button-chevron"),
    isActive: _v2,
    isDisabled: _v3,
    isTooltipDisabled: _v4 = !1,
    iconColor: _v5,
    menuTooltipLabel: _v6 = "",
    onClick: _v7
  }, _v8) {
    let _v9 = (0, _v22.useColorModeValue)(_v2 ? "gray.600" : "darkBlueAlpha.300", _v2 ? "gray.300" : "lightBlueAlpha.400"),
      _v10 = (0, _v3.useCallback)(() => {
        _v7 && _v7();
      }, [_v7]),
      _v11 = (0, _v3.useCallback)(_v0 => {
        _v0.stopPropagation(), _v3 || _v10();
      }, [_v3, _v10]);
    return (0, _v1.jsx)(_v25.BokehTooltip, {
      isDisabled: _v4,
      label: _v3 ? null : _v6,
      placement: "top",
      shouldWrapChildren: !1,
      maxWidth: (0, _v20.rem)(300),
      children: (0, _v1.jsx)(_v23.IconButton, {
        ref: _v8,
        "aria-label": "control-button-chevron",
        id: _v0,
        className: _v1,
        icon: (0, _v1.jsx)(_v40.ChevronUp, {
          color: _v5,
          width: (0, _v20.rem)(16),
          height: (0, _v20.rem)(16)
        }),
        variant: "tertiary",
        size: "xs",
        width: (0, _v20.rem)(20),
        height: `${(0, _v20.rem)(20)}!important`,
        _hover: {
          backgroundColor: _v3 ? "transparent!important" : _v9
        },
        cursor: _v3 ? "unset" : void 0,
        onClick: _v11
      })
    });
  });
  var _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0);
  function _v46({
    id: _v0,
    className: _v1 = (0, _v18.createLiveDomName)("media-devices-list"),
    isLoading: _v2,
    devices: _v3,
    active: _v4,
    header: _v5,
    onDeviceClicked: _v6
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5 ? (0, _v1.jsx)(_v42.Header, {
        id: _v0 ? (0, _v18.createLiveDomName)(_v0, "header") : void 0,
        className: (0, _v18.createLiveDomName)(_v1, "header"),
        size: "xs",
        color: "text-primary",
        fontWeight: 500,
        padding: `${(0, _v20.rem)(4)} ${(0, _v20.rem)(8)}`,
        children: _v5
      }) : null, _v3.map(_v0 => (0, _v1.jsxs)(_v35.Flex, {
        className: (0, _v18.createLiveDomName)(_v1, "item"),
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        padding: `${(0, _v20.rem)(4)} ${(0, _v20.rem)(8)}`,
        borderRadius: (0, _v20.rem)(4),
        gap: (0, _v20.rem)(4),
        color: "text-primary",
        _hover: {
          background: "fill-component-hover"
        },
        sx: {
          "& svg": {
            width: "100%"
          }
        },
        onClick: _v0.deviceId === _v4 ? void 0 : () => _v6(_v0.deviceId),
        children: [(0, _v1.jsx)(_v43.Paragraph, {
          className: (0, _v18.createLiveDomName)(_v1, "item-label"),
          size: "md",
          fontWeight: 400,
          sx: {
            textWrap: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
          },
          children: _v0.label
        }), _v0.deviceId === _v4 ? _v2 ? (0, _v1.jsx)(_v44.Spinner, {
          className: (0, _v18.createLiveDomName)(_v1, "item-loader"),
          size: "xs",
          maxHeight: (0, _v20.rem)(16),
          maxWidth: (0, _v20.rem)(16)
        }) : (0, _v1.jsx)(_v45.Checkmark, {
          className: (0, _v18.createLiveDomName)(_v1, "item-checkmark"),
          maxHeight: (0, _v20.rem)(16),
          maxWidth: (0, _v20.rem)(16)
        }) : null]
      }, _v0.deviceId))]
    });
  }
  function _v47({
    id: _v0 = (0, _v18.createLiveDomName)("audio-control-button-menu"),
    className: _v1 = (0, _v18.createLiveDomName)("audio-control-button-menu"),
    isLoading: _v2,
    isActive: _v3,
    isDisabled: _v4,
    iconColor: _v5,
    menuTooltipLabel: _v6 = "",
    audioDeviceId: _v7,
    playbackDeviceId: _v8,
    audioDevices: _v9,
    playbackDevices: _v10,
    onAudioDeviceClicked: _v11,
    onPlaybackDeviceClicked: _v12
  }) {
    let {
      triggerRef: _v13,
      contentRef: _v14,
      isOpen: _v15,
      onOpenPopover: _v16,
      onClosePopover: _v17,
      onTogglePopover: _v18
    } = (0, _v39.useControlledPopover)();
    return (0, _v1.jsx)(_v37.BokehPopover, {
      inPortal: !1,
      isOpen: _v15,
      placement: "top",
      triggerContent: (0, _v1.jsx)(_v21.Box, {
        children: (0, _v1.jsx)(_v41, {
          id: (0, _v18.createLiveDomName)(_v0, "button"),
          className: (0, _v18.createLiveDomName)(_v1, "button"),
          ref: _v13,
          isActive: _v3,
          isDisabled: _v4,
          iconColor: _v5,
          menuTooltipLabel: _v6,
          isTooltipDisabled: _v2 || _v4 || _v15,
          onClick: _v18
        })
      }),
      content: (0, _v1.jsxs)(_v35.Flex, {
        ref: _v14,
        id: (0, _v18.createLiveDomName)(_v0, "microphones-popover"),
        className: (0, _v18.createLiveDomName)(_v1, "microphones-popover"),
        direction: "column",
        gap: (0, _v20.rem)(4),
        minWidth: (0, _v20.rem)(352),
        maxWidth: (0, _v20.rem)(352),
        maxHeight: (0, _v20.rem)(400),
        children: [(0, _v1.jsx)(_v46, {
          id: (0, _v18.createLiveDomName)(_v0, "microphones-list"),
          className: (0, _v18.createLiveDomName)(_v1, "microphones-list"),
          header: _v19.translations.microphone,
          active: _v7,
          devices: _v9,
          isLoading: _v2,
          onDeviceClicked: _v11
        }), _v38.browserConfig.FEATURE.CAN_USE_OUTPUT_DEVICE ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v36.Divider, {
            borderColor: "stroke"
          }), (0, _v1.jsx)(_v46, {
            id: (0, _v18.createLiveDomName)(_v0, "speakers-list"),
            className: (0, _v18.createLiveDomName)(_v1, "speakers-list"),
            header: _v19.translations.speaker,
            active: _v8,
            devices: _v10,
            onDeviceClicked: _v12
          })]
        }) : null]
      }),
      onOpen: _v16,
      onClose: _v17
    });
  }
  _v0.s(["AudioControlButton", 0, function ({
    id: _v0 = (0, _v18.createLiveDomName)("audio-control-button"),
    className: _v1 = (0, _v18.createLiveDomName)("audio-control-button"),
    isDisabled: _v2 = !1,
    place: _v3,
    isJoined: _v4,
    onSettingsClicked: _v5,
    localMediaContext: {
      audio: _v6,
      audioDevices: _v7,
      playbackDeviceId: _v8,
      playbackDevices: _v9,
      mediaActions: _v10
    } = (0, _v2.useManager)(_v12.LocalMediaManager),
    composerSettingsContext: {
      audioMode: _v11
    } = (0, _v2.useManager)(_v11.ComposerSettingsManager, ({
      isLocalMirrored: _v0,
      composerSettingsActions: _v1,
      audioMode: _v2
    }) => [_v0, _v1, _v2]),
    composerSessionStatusContext: {
      ingestStatus: _v12,
      streamMode: _v13
    } = (0, _v2.useManager)(_v10.ComposerSessionStatusManager, ({
      ingestStatus: _v0,
      streamMode: _v1
    }) => [_v0, _v1]),
    remoteMediaContext: {
      isProgramAudioPlayback: _v14
    } = (0, _v2.useManager)(_v13.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamToolbarActionClicked: _v15
      } = (0, _v17.useLiveStreamBroadcasterTracking)(),
      {
        hadDeviceOccupiedError: _v16,
        hasDeviceBlockedError: _v17
      } = (0, _v3.useMemo)(() => _v6.error ? (0, _v16.isAgoraDeviceOccupiedError)(_v6.error) ? {
        hadDeviceOccupiedError: !0,
        hasDeviceBlockedError: !1
      } : {
        hadDeviceOccupiedError: !1,
        hasDeviceBlockedError: !0
      } : {
        hadDeviceOccupiedError: !1,
        hasDeviceBlockedError: !1
      }, [_v6.error]),
      _v18 = _v16 || _v17,
      _v19 = _v3 === _v15.EComposerApplicationType.GUEST,
      _v20 = !!(!_v2 && _v6.track && !_v6.error),
      _v21 = _v6.isLoading,
      _v22 = !!(_v6.track && !_v6.isMuted),
      _v23 = function ({
        isMuted: _v0,
        audioMode: _v1,
        ingestStatus: _v2,
        isMeInProgram: _v3,
        isStateLogic: _v4 = !0,
        isRecordMode: _v5,
        hadDeviceOccupiedError: _v6,
        hasDeviceBlockedError: _v7
      }) {
        return (0, _v3.useMemo)(() => {
          let _v0 = _v1 === _v9.EAudioMixingMode.ALL || _v2 === _v8.EIngestStatus.STREAMING && _v3;
          switch (!0) {
            case _v6:
              return {
                text: _v7.T_OCCUPIED_MICROPHONE_ERROR
              };
            case _v7:
              return {
                title: _v7.T_YOUR_MICROPHONE_IS_BLOCKED,
                text: _v7.T_WE_ARE_UNABLE_TO_CONNECT_TO_YOUR_MICROPHONE
              };
            case !_v4:
              return {
                text: _v0 ? _v7.T_UNMUTE : _v7.T_MUTE
              };
            case _v0 && _v0 && !_v5:
              return {
                text: _v7.T_UNMUTE_TO_SPEAK_TO_AUDIENCE
              };
            case _v0 && _v0 && _v5:
              return {
                text: _v7.T_UNMUTE_TO_RECORD_YOUR_VOICE
              };
            case _v0 && !_v3:
              return {
                text: _v7.T_UNMUTE_TO_SPEAK_TO_BACKSTAGE
              };
            case _v0:
              return {
                text: _v7.T_UNMUTE
              };
            default:
              return {
                text: _v7.T_MUTE
              };
          }
        }, [_v1, _v2, _v3, _v6, _v7, _v0, _v5, _v4]);
      }({
        isMuted: _v6.isMuted,
        audioMode: _v11,
        ingestStatus: _v12,
        isMeInProgram: _v14,
        isRecordMode: _v13 === _v15.EComposerStreamModeType.RECORD,
        ...(_v19 ? {
          isStateLogic: _v4
        } : {}),
        hadDeviceOccupiedError: _v16,
        hasDeviceBlockedError: _v17
      }),
      _v24 = (0, _v3.useMemo)(() => _v2 ? void 0 : _v6.isMuted || _v6.error || !_v6.track ? "status-destructive-primary" : "text-button-inverted", [_v2, _v6.isMuted, _v6.error, _v6.track]),
      _v25 = (0, _v3.useMemo)(() => _v2 || _v6.isMuted || _v6.error || !_v6.track ? (0, _v1.jsx)(_v4.MicOff, {
        color: _v24
      }) : (0, _v1.jsx)(_v6, {
        color: _v24
      }), [_v2, _v6.isMuted, _v6.error, _v6.track, _v24]),
      _v26 = _v19.translations.mediaMicrophoneSettings,
      _v27 = (0, _v3.useCallback)(() => {
        let _v0 = !_v6.isMuted;
        _v0 ? (0, _v14.trackMuteMic)(_v3) : (0, _v14.trackUnMuteMic)(_v3), _v3 === _v15.EComposerApplicationType.BROADCASTER && _v15({
          liveStreamToolbarAction: "toggle_mic"
        }), _v10.setAudioMuted(_v0);
      }, [_v6.isMuted, _v10, _v3, _v15]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        _v10.setPlaybackDevice(_v0);
      }, [_v10]);
    return (0, _v1.jsx)(_v34, {
      id: _v0,
      className: _v1,
      toolTipLabel: _v2 || !_v20 || _v18 ? null : _v23.text,
      icon: _v25,
      isActive: _v22,
      isDisabled: _v2,
      isLoading: _v21,
      hasError: _v18,
      errorTitle: _v23.title,
      errorDescription: _v23.text,
      onClick: _v20 ? _v27 : void 0,
      buttonMenu: (0, _v1.jsx)(_v47, {
        id: (0, _v18.createLiveDomName)(_v0, "control-menu"),
        className: (0, _v18.createLiveDomName)(_v1, "control-menu"),
        isLoading: _v21,
        isActive: _v22,
        isDisabled: _v2,
        iconColor: _v24,
        menuTooltipLabel: _v26,
        audioDeviceId: _v6.deviceId,
        playbackDeviceId: _v8,
        audioDevices: _v7,
        playbackDevices: _v9,
        onAudioDeviceClicked: _v10.setAudioDevice,
        onPlaybackDeviceClicked: _v28
      })
    });
  }], 0);
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  function _v57() {
    let _v0 = (0, _v3.useRef)(!1);
    return (0, _v3.useLayoutEffect)(() => (_v0.current = !0, () => {
      _v0.current = !1;
    }), []), _v0;
  }
  _v0.s(["useIsMountedRef", 0, _v57], 0);
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  function _v65({
    isMirrored: _v0,
    margin: _v1 = `${(0, _v20.rem)(16)} auto ${(0, _v20.rem)(24)} auto`,
    children: _v2,
    localMediaContext: {
      video: _v3,
      agoraSDK: _v4,
      videoDevices: _v5,
      isMediaAllowed: _v6,
      isBrowserPrompted: _v7,
      previewBackgroundProcessor: _v8
    } = (0, _v2.useManager)(_v12.LocalMediaManager)
  }) {
    let _v9 = (0, _v53.useLogger)("CS"),
      _v10 = _v57(),
      _v11 = (0, _v3.useRef)(!1),
      _v12 = (0, _v3.useRef)(null),
      _v13 = (0, _v3.useRef)(null),
      [_v14, _v15] = (0, _v3.useState)(() => (0, _v2.createNested)({
        isLoading: !1,
        isMuted: !1,
        track: null,
        error: null,
        deviceId: void 0
      })),
      _v16 = (0, _v56.useForceUpdate)(),
      _v17 = (0, _v59.getActiveAgoraSourceTrack)(_v14.track),
      _v18 = (0, _v3.useCallback)((_v0, _v1) => {
        if (_v0 && _v1) try {
          _v12.current === _v1 ? _v9.info("Track is piped already") : (_v1.pipe(_v0).pipe(_v1.processorDestination), _v0.setOptions(_v55.liveMediaConfig.LOCAL_MEDIA.VIRTUAL_BACKGROUND_OPTIONS), _v9.info("Preview track is piping:", _v1), _v12.current = _v1);
        } catch (_v0) {
          (0, _v64.trackLiveError)(_v0, {
            component: "CameraStream",
            category: _v63.ELiveErrorCategory.AGORA,
            method: "pipePreviewTrackWithVirtualBackground",
            data: {
              trackId: _v1?.getTrackId?.()
            }
          });
        } finally {
          _v3.isBlurred ? (_v9.info("Enabling preview blur:", _v1), (0, _v61.inline)(async () => {
            await _v0.enable(), await _v0.getProcessedTrack().catch(_v0 => {
              (0, _v64.trackLiveError)(_v0, {
                category: _v63.ELiveErrorCategory.AGORA,
                method: "pipePreviewTrackWithVirtualBackground"
              });
            }), _v16();
          })) : setTimeout(_v16, 20);
        }
      }, [_v3.isBlurred]);
    return (0, _v3.useEffect)(() => (_v9.info("Mounted agora track local preview replicator"), () => {
      (0, _v59.isAgoraTrack)(_v13.current) && (_v9.info("Closing agora tracks on unmount:", _v13.current), (0, _v59.closeAgoraLocalTracks)(_v13.current));
    }), []), (0, _v3.useEffect)(() => {
      _v15(_v0 => _v0.asMerged({
        error: null
      }));
    }, [_v3.deviceId]), (0, _v3.useEffect)(() => {
      !_v11.current && !_v3.isLoading && _v4 && _v6 && !_v7 && (_v14.track && _v14.deviceId !== _v3.deviceId ? (_v11.current = !0, _v9.info("Change active local device:", _v14.deviceId, "->", _v3.deviceId), _v14.track.setDevice(_v3.deviceId).then(() => {
        (0, _v60.safelyForceTrackConstraints)(_v14.track?.getMediaStreamTrack(), _v55.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS);
      }).finally(() => {
        _v11.current = !1, _v15(_v0 => (_v18(_v8, _v0.track), _v0.asMerged({
          deviceId: _v3.deviceId
        })));
      })) : _v14.track || _v14.error || (_v11.current = !0, _v9.info("Initializing a new local preview track"), (0, _v59.createCameraTrackSafely)({
        agoraSDK: _v4,
        deviceId: _v3.deviceId,
        devices: _v5,
        isMuted: !1,
        isHardMuteEnabled: !1
      }).then(_v0 => {
        let _v1 = (0, _v59.isAgoraTrack)(_v0);
        if (!_v10.current && _v1) return _v9.info("Created video tracks after unmount, closing:", _v3.deviceId, _v1), (0, _v59.closeAgoraLocalTracks)(_v0);
        _v9.info("Created video for local preview:", _v3.deviceId, _v1);
        let _v2 = _v1 ? _v0 : null;
        _v13.current = _v2, _v11.current = !1, _v15(_v0 => (_v9.info("Saving new preview track:", _v0.track, "->", _v2), (0, _v59.closeAgoraLocalTracks)(_v0.track), _v18(_v8, _v2), _v0.asMerged({
          track: _v1 ? _v2 : null,
          error: _v1 ? null : _v0,
          deviceId: _v3.deviceId
        })));
      })));
    }, [_v3, _v3.isBlurred, _v4, _v14, _v6, _v7, _v5, _v9, _v10]), (0, _v1.jsx)(_v21.Box, {
      margin: _v1,
      children: (0, _v1.jsx)(_v21.Box, {
        background: "stroke",
        sx: _v62.STRICT_16BY9_BOX_STYLE,
        children: (0, _v1.jsxs)(_v54.AgoraMediaTrackPreview, {
          track: _v17,
          isMirrored: _v0,
          background: "transparent",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: (0, _v20.rem)(8),
          children: [_v17 || _v14.error ? null : (0, _v1.jsx)(_v44.Spinner, {}), _v14.error ? (0, _v1.jsx)(_v52.Text, {
            variant: "body-xl",
            children: _v58.T_ERROR
          }) : null, _v2]
        }, "preview")
      })
    });
  }
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v18;
  let _v70 = (0, _v3.forwardRef)(({
    id: _v0 = (0, _v69.createLiveDomName)("media-devices-settings"),
    className: _v1 = (0, _v69.createLiveDomName)("media-devices-settings"),
    video: _v2,
    isMirrored: _v3,
    onVideoMirroringChanged: _v4,
    onToggleVideoBlur: _v5,
    isBlurAllowed: _v6
  }, _v7) => {
    let {
        initialState: {
          sessionApplicationType: _v8
        }
      } = (0, _v66.useLiveGlobals)(),
      _v9 = _v15.EComposerApplicationType.GUEST === _v8,
      _v10 = (0, _v3.useCallback)(() => {
        if (!_v4) return;
        let _v0 = !_v3;
        _v4(_v0), _v0 && function (_v0 = !1) {
          (0, _v68.createBPv2EventFactory)("vimeo.select_mirror_my_video", -1, () => ({
            ...(0, _v67.newTeamCtx)(),
            ...(0, _v67.newWebCtx)(),
            ...(0, _v67.newActionCtx)("click"),
            ...(0, _v67.newLiveCtx)({
              live_feature: "cam_and_audio_settings",
              is_guest_speaker: _v0
            }),
            ...(0, _v67.newProductAnalyticsCtx)({
              product: "events",
              feature: "settings",
              location: "modal",
              copy: "select_mirror_my_video",
              modal_name: "cam_and_audio_settings_modal",
              element: "check_box",
              device_type: _v38.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
            })
          }), () => void 0)();
        }(_v9);
      }, [_v4, _v3, _v9]),
      _v11 = (0, _v3.useCallback)(() => {
        _v2.isBlurred || function (_v0 = !1) {
          (0, _v68.createBPv2EventFactory)("vimeo.select_blur_background", -1, () => ({
            ...(0, _v67.newTeamCtx)(),
            ...(0, _v67.newWebCtx)(),
            ...(0, _v67.newActionCtx)("click"),
            ...(0, _v67.newLiveCtx)({
              live_feature: "cam_and_audio_settings",
              is_guest_speaker: _v0
            }),
            ...(0, _v67.newProductAnalyticsCtx)({
              product: "events",
              feature: "settings",
              location: "modal",
              modal_name: "cam_and_audio_settings_modal",
              element: "check_box",
              copy: "select_blur_background",
              device_type: _v38.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
            })
          }), () => void 0)();
        }(_v9), _v5();
      }, [_v5, _v2.isBlurred, _v9]);
    return (0, _v1.jsxs)(_v21.Box, {
      id: _v0,
      className: _v1,
      ref: _v7,
      userSelect: "none",
      position: "relative",
      children: [(0, _v1.jsx)(_v65, {
        isMirrored: _v3,
        margin: "0 auto",
        children: (0, _v1.jsx)(_v21.Box, {
          position: "absolute",
          bottom: (0, _v20.rem)(8),
          right: (0, _v20.rem)(8),
          children: (0, _v1.jsx)(_v51.TooltipIconButton, {
            label: _v19.translations.flipHorizontally,
            icon: (0, _v1.jsx)(_v50.FlipLeft, {}),
            variant: "blur",
            onClick: _v10
          })
        })
      }), (0, _v1.jsxs)(_v35.Flex, {
        direction: "column",
        marginTop: (0, _v20.rem)(8),
        marginBottom: (0, _v20.rem)(36),
        gap: (0, _v20.rem)(8),
        children: [(0, _v1.jsx)(_v42.Header, {
          size: "xs",
          children: _v19.translations.effects
        }), (0, _v1.jsxs)(_v35.Flex, {
          gap: (0, _v20.rem)(8),
          children: [(0, _v1.jsx)(_v51.TooltipIconButton, {
            label: _v19.translations.noEffects,
            placement: "bottom",
            width: (0, _v20.rem)(72),
            height: (0, _v20.rem)(72),
            minHeight: (0, _v20.rem)(72),
            variant: "secondary",
            outline: _v2.isBlurred ? void 0 : "2px solid",
            icon: (0, _v1.jsx)(_v48.StopBanLeft, {}),
            onClick: _v2.isBlurred ? _v11 : void 0
          }), (0, _v1.jsx)(_v51.TooltipIconButton, {
            isDisabled: !_v6,
            label: _v19.translations.blur,
            placement: "bottom",
            width: (0, _v20.rem)(72),
            height: (0, _v20.rem)(72),
            minHeight: (0, _v20.rem)(72),
            variant: "secondary",
            outline: _v2.isBlurred ? "2px solid" : void 0,
            icon: (0, _v1.jsx)(_v49.Blur, {}),
            onClick: _v2.isBlurred ? void 0 : _v11
          })]
        })]
      })]
    });
  });
  _v0.s(["MediaDevicesSettingsModalContent", 0, _v70], 0);
  var _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  function _v74({
    id: _v0 = (0, _v18.createLiveDomName)("video-control-button-menu"),
    className: _v1 = (0, _v18.createLiveDomName)("video-control-button-menu"),
    isLoading: _v2,
    isActive: _v3,
    isDisabled: _v4,
    iconColor: _v5,
    menuTooltipLabel: _v6 = "",
    videoDeviceId: _v7,
    videoDevices: _v8,
    onVideoDeviceClicked: _v9,
    onOpenSettingsModal: _v10
  }) {
    let {
        triggerRef: _v11,
        contentRef: _v12,
        isOpen: _v13,
        onOpenPopover: _v14,
        onClosePopover: _v15,
        onTogglePopover: _v16
      } = (0, _v39.useControlledPopover)(),
      _v17 = (0, _v3.useCallback)(() => {
        _v10(), _v15();
      }, [_v10, _v15]);
    return (0, _v1.jsx)(_v37.BokehPopover, {
      isOpen: _v13,
      placement: "top",
      triggerContent: (0, _v1.jsx)(_v21.Box, {
        children: (0, _v1.jsx)(_v41, {
          id: (0, _v18.createLiveDomName)(_v0, "button"),
          className: (0, _v18.createLiveDomName)(_v1, "button"),
          ref: _v11,
          isActive: _v3,
          isDisabled: _v4,
          iconColor: _v5,
          menuTooltipLabel: _v6,
          isTooltipDisabled: _v2 || _v4 || _v13,
          onClick: _v16
        })
      }),
      content: (0, _v1.jsxs)(_v35.Flex, {
        ref: _v12,
        id: (0, _v18.createLiveDomName)(_v0, "cameras-popover"),
        className: (0, _v18.createLiveDomName)(_v1, "cameras-popover"),
        direction: "column",
        gap: (0, _v20.rem)(4),
        minWidth: (0, _v20.rem)(352),
        maxWidth: (0, _v20.rem)(352),
        maxHeight: (0, _v20.rem)(400),
        children: [(0, _v1.jsx)(_v46, {
          id: (0, _v18.createLiveDomName)(_v0, "cameras-list"),
          className: (0, _v18.createLiveDomName)(_v1, "cameras-list"),
          header: _v19.translations.cameras,
          active: _v7,
          devices: _v8,
          isLoading: _v2,
          onDeviceClicked: _v9
        }), (0, _v1.jsx)(_v36.Divider, {
          borderColor: "stroke"
        }), (0, _v1.jsxs)(_v35.Flex, {
          id: (0, _v18.createLiveDomName)(_v0, "effects"),
          className: (0, _v18.createLiveDomName)(_v1, "effects"),
          alignItems: "center",
          padding: `${(0, _v20.rem)(4)} ${(0, _v20.rem)(8)}`,
          gap: (0, _v20.rem)(4),
          borderRadius: (0, _v20.rem)(4),
          cursor: "pointer",
          _hover: {
            background: "fill-component-hover"
          },
          onClick: _v17,
          children: [(0, _v1.jsx)(_v73.MagicWand, {}), (0, _v1.jsx)(_v43.Paragraph, {
            size: "md",
            children: _v19.translations.effects
          })]
        })]
      }),
      onOpen: _v14,
      onClose: _v15
    });
  }
  _v0.s(["VideoControlButton", 0, function ({
    id: _v0 = (0, _v18.createLiveDomName)("video-control-button"),
    className: _v1 = (0, _v18.createLiveDomName)("video-control-button"),
    isDisabled: _v2 = !1,
    place: _v3,
    onSettingsClicked: _v4,
    localMediaContext: {
      video: _v5,
      videoDevices: _v6,
      mediaActions: _v7
    } = (0, _v2.useManager)(_v12.LocalMediaManager)
  }) {
    let {
        trackLiveStreamToolbarActionClicked: _v8
      } = (0, _v17.useLiveStreamBroadcasterTracking)(),
      _v9 = !!(!_v2 && _v5.track && !_v5.error),
      _v10 = _v3 === _v15.EComposerApplicationType.GUEST,
      _v11 = _v5.isLoading,
      _v12 = !!(_v5.track && !_v5.isMuted),
      {
        hadDeviceOccupiedError: _v13,
        hasDeviceBlockedError: _v14
      } = (0, _v3.useMemo)(() => _v5.error ? (0, _v16.isAgoraDeviceOccupiedError)(_v5.error) ? {
        hadDeviceOccupiedError: !0,
        hasDeviceBlockedError: !1
      } : {
        hadDeviceOccupiedError: !1,
        hasDeviceBlockedError: !0
      } : {
        hadDeviceOccupiedError: !1,
        hasDeviceBlockedError: !1
      }, [_v5.error]),
      _v15 = _v13 || _v14,
      _v16 = (0, _v3.useCallback)(() => {
        let _v0 = !_v5.isMuted;
        _v0 ? (0, _v14.trackDisableCam)(_v3) : (0, _v14.trackEnableCam)(_v3), _v3 === _v15.EComposerApplicationType.BROADCASTER && _v8({
          liveStreamToolbarAction: "toggle_camera"
        }), _v7.setVideoMuted(_v0);
      }, [_v5.isMuted, _v7, _v3, _v8]),
      _v17 = function ({
        isMuted: _v0,
        isDisabled: _v1,
        hadDeviceOccupiedError: _v2,
        hasDeviceBlockedError: _v3
      }) {
        return (0, _v3.useMemo)(() => {
          switch (!0) {
            case _v2:
              return {
                text: _v7.T_OCCUPIED_CAMERA_ERROR
              };
            case _v3:
              return {
                title: _v7.T_YOUR_CAMERA_IS_BLOCKED,
                text: _v7.T_WE_ARE_UNABLE_TO_CONNECT_TO_YOUR_CAMERA
              };
            case _v1:
              return {
                text: null
              };
            case _v0:
              return {
                text: _v7.T_START_CAMERA
              };
            default:
              return {
                text: _v7.T_STOP_CAMERA
              };
          }
        }, [_v2, _v3, _v1, _v0]);
      }({
        isDisabled: !!_v2,
        isMuted: _v5.isMuted,
        hadDeviceOccupiedError: _v13,
        hasDeviceBlockedError: _v14
      }),
      _v18 = (0, _v3.useMemo)(() => _v2 ? void 0 : _v5.isMuted || _v5.error ? "status-destructive-primary" : "text-button-inverted", [_v2, _v5.isMuted, _v5.error]),
      _v19 = (0, _v3.useMemo)(() => _v2 || _v5.isMuted || _v5.error ? (0, _v1.jsx)(_v71.CameraOff, {
        color: _v18
      }) : (0, _v1.jsx)(_v72.CameraOn, {
        color: _v18
      }), [_v2, _v5.isMuted, _v5.error, _v18]),
      _v20 = _v19.translations.mediaCameraSettings,
      _v21 = (0, _v3.useCallback)(() => {
        _v4(), function (_v0 = !1) {
          (0, _v68.createBPv2EventFactory)("vimeo.open_cam_and_audio_settings", -1, () => ({
            ...(0, _v67.newTeamCtx)(),
            ...(0, _v67.newWebCtx)(),
            ...(0, _v67.newActionCtx)("click"),
            ...(0, _v67.newLiveCtx)({
              live_feature: "cam_and_audio_settings",
              is_guest_speaker: _v0
            }),
            ...(0, _v67.newProductAnalyticsCtx)({
              product: "events",
              feature: "settings",
              location: "content_area",
              element: "icon",
              device_type: _v38.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
            })
          }), () => void 0)();
        }(_v10);
      }, [_v4, _v10]);
    return (0, _v1.jsx)(_v34, {
      id: _v0,
      className: _v1,
      toolTipLabel: _v2 || !_v9 || _v15 ? null : _v17.text,
      icon: _v19,
      isActive: _v12,
      isDisabled: _v2,
      isLoading: _v11,
      hasError: _v15,
      errorTitle: _v17.title,
      errorDescription: _v17.text,
      onClick: _v9 ? _v16 : void 0,
      buttonMenu: (0, _v1.jsx)(_v74, {
        id: (0, _v18.createLiveDomName)(_v0, "control-menu"),
        className: (0, _v18.createLiveDomName)(_v1, "control-menu"),
        isLoading: _v11,
        isActive: _v12,
        isDisabled: _v2,
        iconColor: _v18,
        menuTooltipLabel: _v20,
        videoDeviceId: _v5.deviceId,
        videoDevices: _v6,
        onVideoDeviceClicked: _v7.setVideoDevice,
        onOpenSettingsModal: _v21
      })
    });
  }], 0);
  var _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  _v0.s(["TeleprompterButton", 0, function ({
    id: _v0 = (0, _v18.createLiveDomName)("teleprompter-button"),
    isDisabled: _v1,
    isGuest: _v2 = !1,
    isDemo: _v3
  }) {
    let {
        trackLiveStreamToolbarActionClicked: _v4
      } = (0, _v17.useLiveStreamBroadcasterTracking)(),
      {
        isTeleprompterShown: _v5,
        toggleTeleprompter: _v6
      } = (0, _v76.useTeleprompter)(_v2),
      {
        sendToggleTeleprompterBpEvent: _v7
      } = (0, _v77.useTeleprompterAnalytics)({
        element: "icon",
        feature: "teleprompter",
        location: "bottom_panel"
      }, "live", () => (0, _v67.newLiveCtx)({
        live_feature: "teleprompter",
        is_guest_speaker: _v2
      })),
      _v8 = (0, _v61.inline)(() => _v1 ? "" : _v3 ? _v19.translations.teleprompterButtonDemoTooltip : _v5 ? _v19.translations.teleprompterClose : _v19.translations.teleprompterOpen);
    return (0, _v1.jsx)(_v35.Flex, {
      id: _v0,
      alignItems: "center",
      children: (0, _v1.jsx)(_v25.BokehTooltip, {
        label: _v8,
        shouldWrapChildren: !0,
        maxWidth: (0, _v20.rem)(340),
        children: (0, _v1.jsx)(_v23.IconButton, {
          id: (0, _v18.createLiveDomName)(_v0, "teleprompter-button"),
          "aria-label": _v8,
          variant: _v5 ? "primary" : "secondary",
          alignSelf: "center",
          icon: (0, _v1.jsx)(_v75.Script, {}),
          isDisabled: _v1 || _v3,
          onClick: () => {
            let _v0 = !_v5;
            _v7(_v0), _v2 || _v4({
              liveStreamToolbarAction: "teleprompter"
            }), _v6(_v0);
          }
        })
      })
    });
  }], 0);
}