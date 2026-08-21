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
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0);
  function _v36({
    title: _v0,
    description: _v1
  }) {
    return (0, _v1.jsx)(_v29.BokehTooltip, {
      padding: 0,
      backgroundColor: "transparent",
      border: "none",
      label: (0, _v1.jsxs)(_v31.Alert, {
        variant: "solid",
        status: "error",
        size: "sm",
        textAlign: "left",
        maxWidth: (0, _v24.rem)(314),
        margin: 0,
        children: [_v0 ? (0, _v1.jsx)(_v33.AlertTitle, {
          children: _v0
        }) : null, (0, _v1.jsx)(_v32.AlertDescription, {
          children: _v1
        })]
      }),
      children: (0, _v1.jsx)(_v34.CircleExclamationFilled, {
        boxSize: (0, _v24.rem)(20),
        color: _v35.FAILED_STATUS_COLOR
      })
    });
  }
  function _v37({
    className: _v0 = (0, _v20.createLiveDomName)("control-button-error"),
    title: _v1,
    description: _v2
  }) {
    return (0, _v1.jsx)(_v25.Box, {
      className: _v0,
      sx: {
        position: "absolute",
        top: 0,
        right: 0,
        "& > span": {
          display: "flex",
          background: "background",
          position: "absolute",
          top: (0, _v24.rem)(-10),
          right: (0, _v24.rem)(-10),
          height: (0, _v24.rem)(20),
          borderRadius: (0, _v24.rem)(10)
        }
      },
      children: (0, _v1.jsx)(_v36, {
        title: _v1,
        description: _v2
      })
    });
  }
  function _v38({
    id: _v0 = "",
    className: _v1 = (0, _v20.createLiveDomName)("control-button"),
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
    onClick: _v12 = _v30.CallablePlaceholder
  }) {
    let _v13 = !!_v11,
      _v14 = (0, _v26.useColorModeValue)(_v5 ? "gray.900" : "darkBlueAlpha.200", _v5 ? "gray.50" : "lightBlueAlpha.300"),
      _v15 = (0, _v26.useColorModeValue)("darkBlueAlpha.300", "lightBlueAlpha.400"),
      _v16 = (0, _v26.useColorModeValue)("gray.700", "gray.200"),
      _v17 = (0, _v3.useCallback)(() => {
        _v6 || _v12();
      }, [_v6, _v12]);
    return (0, _v1.jsxs)(_v28.Center, {
      "data-group": !0,
      position: "relative",
      alignSelf: "center",
      minHeight: (0, _v24.rem)(40),
      height: (0, _v24.rem)(40),
      width: (0, _v24.rem)(_v13 ? 62 : 34),
      borderRadius: (0, _v24.rem)(12),
      backgroundColor: _v14,
      _hover: {
        backgroundColor: _v6 ? "none" : _v5 ? _v16 : _v15
      },
      children: [_v8 ? (0, _v1.jsx)(_v37, {
        title: _v9,
        description: _v10
      }) : null, (0, _v1.jsx)(_v29.BokehTooltip, {
        label: _v2,
        placement: _v3,
        shouldWrapChildren: !1,
        isDisabled: _v7 || !_v2,
        maxWidth: (0, _v24.rem)(300),
        children: (0, _v1.jsx)(_v27.IconButton, {
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
      }), _v11 ? (0, _v1.jsx)(_v25.Box, {
        id: _v0 ? (0, _v20.createLiveDomName)(_v0, "control-wrapper") : void 0,
        className: (0, _v20.createLiveDomName)(_v1, "control-wrapper"),
        position: "relative",
        left: (0, _v24.rem)(-4),
        top: (0, _v24.rem)(-4),
        cursor: _v6 ? "unset" : void 0,
        opacity: _v6 ? .5 : 1,
        children: _v11
      }) : null]
    });
  }
  _v0.s(["AlertTooltipIcon", 0, _v36], 0);
  var _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  let _v47 = (0, _v3.forwardRef)(function ({
    id: _v0 = (0, _v20.createLiveDomName)("control-button-chevron"),
    className: _v1 = (0, _v20.createLiveDomName)("control-button-chevron"),
    isActive: _v2,
    isDisabled: _v3,
    isTooltipDisabled: _v4 = !1,
    iconColor: _v5,
    menuTooltipLabel: _v6 = "",
    onClick: _v7
  }, _v8) {
    let _v9 = (0, _v26.useColorModeValue)(_v2 ? "gray.600" : "darkBlueAlpha.300", _v2 ? "gray.300" : "lightBlueAlpha.400"),
      _v10 = (0, _v3.useCallback)(() => {
        _v7 && _v7();
      }, [_v7]),
      _v11 = (0, _v3.useCallback)(_v0 => {
        _v0.stopPropagation(), _v3 || _v10();
      }, [_v3, _v10]);
    return (0, _v1.jsx)(_v29.BokehTooltip, {
      isDisabled: _v4,
      label: _v3 ? null : _v6,
      placement: "top",
      shouldWrapChildren: !1,
      maxWidth: (0, _v24.rem)(300),
      children: (0, _v1.jsx)(_v27.IconButton, {
        ref: _v8,
        "aria-label": "control-button-chevron",
        id: _v0,
        className: _v1,
        icon: (0, _v1.jsx)(_v46.ChevronUp, {
          color: _v5,
          width: (0, _v24.rem)(16),
          height: (0, _v24.rem)(16)
        }),
        variant: "tertiary",
        size: "xs",
        width: (0, _v24.rem)(20),
        height: `${(0, _v24.rem)(20)}!important`,
        _hover: {
          backgroundColor: _v3 ? "transparent!important" : _v9
        },
        cursor: _v3 ? "unset" : void 0,
        onClick: _v11
      })
    });
  });
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0);
  function _v51({
    id: _v0,
    className: _v1 = (0, _v20.createLiveDomName)("media-devices-list"),
    isLoading: _v2,
    devices: _v3,
    active: _v4,
    header: _v5,
    onDeviceClicked: _v6
  }) {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v5 ? (0, _v1.jsx)(_v48.Header, {
        id: _v0 ? (0, _v20.createLiveDomName)(_v0, "header") : void 0,
        className: (0, _v20.createLiveDomName)(_v1, "header"),
        size: "xs",
        color: "text-primary",
        fontWeight: 500,
        padding: `${(0, _v24.rem)(4)} ${(0, _v24.rem)(8)}`,
        children: _v5
      }) : null, _v3.map(_v0 => (0, _v1.jsxs)(_v39.Flex, {
        className: (0, _v20.createLiveDomName)(_v1, "item"),
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
        padding: `${(0, _v24.rem)(4)} ${(0, _v24.rem)(8)}`,
        borderRadius: (0, _v24.rem)(4),
        gap: (0, _v24.rem)(4),
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
        children: [(0, _v1.jsx)(_v41.Paragraph, {
          className: (0, _v20.createLiveDomName)(_v1, "item-label"),
          size: "md",
          fontWeight: 400,
          sx: {
            textWrap: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden"
          },
          children: _v0.label
        }), _v0.deviceId === _v4 ? _v2 ? (0, _v1.jsx)(_v49.Spinner, {
          className: (0, _v20.createLiveDomName)(_v1, "item-loader"),
          size: "xs",
          maxHeight: (0, _v24.rem)(16),
          maxWidth: (0, _v24.rem)(16)
        }) : (0, _v1.jsx)(_v50.Checkmark, {
          className: (0, _v20.createLiveDomName)(_v1, "item-checkmark"),
          maxHeight: (0, _v24.rem)(16),
          maxWidth: (0, _v24.rem)(16)
        }) : null]
      }, _v0.deviceId))]
    });
  }
  function _v52({
    id: _v0 = (0, _v20.createLiveDomName)("audio-control-button-menu"),
    className: _v1 = (0, _v20.createLiveDomName)("audio-control-button-menu"),
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
    onPlaybackDeviceClicked: _v12,
    onCheckAudioClicked: _v13
  }) {
    let {
        triggerRef: _v14,
        contentRef: _v15,
        isOpen: _v16,
        onOpenPopover: _v17,
        onClosePopover: _v18,
        onTogglePopover: _v19
      } = (0, _v45.useControlledPopover)(),
      _v20 = (0, _v3.useCallback)(() => {
        _v18(), _v13?.();
      }, [_v18, _v13]);
    return (0, _v1.jsx)(_v43.BokehPopover, {
      inPortal: !1,
      isOpen: _v16,
      placement: "top",
      triggerContent: (0, _v1.jsx)(_v25.Box, {
        children: (0, _v1.jsx)(_v47, {
          id: (0, _v20.createLiveDomName)(_v0, "button"),
          className: (0, _v20.createLiveDomName)(_v1, "button"),
          ref: _v14,
          isActive: _v3,
          isDisabled: _v4,
          iconColor: _v5,
          menuTooltipLabel: _v6,
          isTooltipDisabled: _v2 || _v4 || _v16,
          onClick: _v19
        })
      }),
      content: (0, _v1.jsxs)(_v39.Flex, {
        ref: _v15,
        id: (0, _v20.createLiveDomName)(_v0, "microphones-popover"),
        className: (0, _v20.createLiveDomName)(_v1, "microphones-popover"),
        direction: "column",
        gap: (0, _v24.rem)(4),
        minWidth: (0, _v24.rem)(352),
        maxWidth: (0, _v24.rem)(352),
        maxHeight: (0, _v24.rem)(400),
        children: [(0, _v1.jsx)(_v51, {
          id: (0, _v20.createLiveDomName)(_v0, "microphones-list"),
          className: (0, _v20.createLiveDomName)(_v1, "microphones-list"),
          header: _v21.translations.microphone,
          active: _v7,
          devices: _v9,
          isLoading: _v2,
          onDeviceClicked: _v11
        }), _v44.browserConfig.FEATURE.CAN_USE_OUTPUT_DEVICE ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v40.Divider, {
            borderColor: "stroke"
          }), (0, _v1.jsx)(_v51, {
            id: (0, _v20.createLiveDomName)(_v0, "speakers-list"),
            className: (0, _v20.createLiveDomName)(_v1, "speakers-list"),
            header: _v21.translations.speaker,
            active: _v8,
            devices: _v10,
            onDeviceClicked: _v12
          })]
        }) : null, _v13 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v40.Divider, {
            borderColor: "stroke"
          }), (0, _v1.jsxs)(_v39.Flex, {
            id: (0, _v20.createLiveDomName)(_v0, "check-audio"),
            className: (0, _v20.createLiveDomName)(_v1, "check-audio"),
            role: "button",
            tabIndex: 0,
            alignItems: "center",
            gap: (0, _v24.rem)(8),
            cursor: "pointer",
            padding: `${(0, _v24.rem)(4)} ${(0, _v24.rem)(8)}`,
            borderRadius: (0, _v24.rem)(4),
            color: "text-primary",
            _hover: {
              background: "fill-component-hover"
            },
            onClick: _v20,
            onKeyDown: _v0 => {
              ("Enter" === _v0.key || " " === _v0.key) && (_v0.preventDefault(), _v20());
            },
            children: [(0, _v1.jsx)(_v42.SoundWaves, {}), (0, _v1.jsx)(_v41.Paragraph, {
              size: "md",
              fontWeight: 400,
              children: _v21.translations.checkYourAudio
            })]
          })]
        }) : null]
      }),
      onOpen: _v17,
      onClose: _v18
    });
  }
  _v0.s(["AudioControlButton", 0, function ({
    id: _v0 = (0, _v20.createLiveDomName)("audio-control-button"),
    className: _v1 = (0, _v20.createLiveDomName)("audio-control-button"),
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
    } = (0, _v2.useManager)(_v13.LocalMediaManager),
    composerSettingsContext: {
      audioMode: _v11
    } = (0, _v2.useManager)(_v12.ComposerSettingsManager, ({
      isLocalMirrored: _v0,
      composerSettingsActions: _v1,
      audioMode: _v2
    }) => [_v0, _v1, _v2]),
    composerSessionStatusContext: {
      ingestStatus: _v12,
      streamMode: _v13
    } = (0, _v2.useManager)(_v11.ComposerSessionStatusManager, ({
      ingestStatus: _v0,
      streamMode: _v1
    }) => [_v0, _v1]),
    remoteMediaContext: {
      isProgramAudioPlayback: _v14
    } = (0, _v2.useManager)(_v14.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamToolbarActionClicked: _v15
      } = (0, _v19.useLiveStreamBroadcasterTracking)(),
      _v16 = (0, _v2.useScope)(),
      _v17 = (0, _v22.useIsHostAudioMeterAvailable)(),
      {
        hadDeviceOccupiedError: _v18,
        hasDeviceBlockedError: _v19
      } = (0, _v3.useMemo)(() => _v6.error ? (0, _v18.isAgoraDeviceOccupiedError)(_v6.error) ? {
        hadDeviceOccupiedError: !0,
        hasDeviceBlockedError: !1
      } : {
        hadDeviceOccupiedError: !1,
        hasDeviceBlockedError: !0
      } : {
        hadDeviceOccupiedError: !1,
        hasDeviceBlockedError: !1
      }, [_v6.error]),
      _v20 = _v18 || _v19,
      _v21 = _v3 === _v17.EComposerApplicationType.GUEST,
      _v22 = !!(!_v2 && _v6.track && !_v6.error),
      _v23 = _v6.isLoading,
      _v24 = !!(_v6.track && !_v6.isMuted),
      _v25 = function ({
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
          let _v0 = _v1 === _v10.EAudioMixingMode.ALL || _v2 === _v9.EIngestStatus.STREAMING && _v3;
          switch (!0) {
            case _v6:
              return {
                text: _v8.T_OCCUPIED_MICROPHONE_ERROR
              };
            case _v7:
              return {
                title: _v8.T_YOUR_MICROPHONE_IS_BLOCKED,
                text: _v8.T_WE_ARE_UNABLE_TO_CONNECT_TO_YOUR_MICROPHONE
              };
            case !_v4:
              return {
                text: _v0 ? _v8.T_UNMUTE : _v8.T_MUTE
              };
            case _v0 && _v0 && !_v5:
              return {
                text: _v8.T_UNMUTE_TO_SPEAK_TO_AUDIENCE
              };
            case _v0 && _v0 && _v5:
              return {
                text: _v8.T_UNMUTE_TO_RECORD_YOUR_VOICE
              };
            case _v0 && !_v3:
              return {
                text: _v8.T_UNMUTE_TO_SPEAK_TO_BACKSTAGE
              };
            case _v0:
              return {
                text: _v8.T_UNMUTE
              };
            default:
              return {
                text: _v8.T_MUTE
              };
          }
        }, [_v1, _v2, _v3, _v6, _v7, _v0, _v5, _v4]);
      }({
        isMuted: _v6.isMuted,
        audioMode: _v11,
        ingestStatus: _v12,
        isMeInProgram: _v14,
        isRecordMode: _v13 === _v17.EComposerStreamModeType.RECORD,
        ...(_v21 ? {
          isStateLogic: _v4
        } : {}),
        hadDeviceOccupiedError: _v18,
        hasDeviceBlockedError: _v19
      }),
      _v26 = (0, _v3.useMemo)(() => _v2 ? void 0 : _v6.isMuted || _v6.error || !_v6.track ? "status-destructive-primary" : "text-button-inverted", [_v2, _v6.isMuted, _v6.error, _v6.track]),
      _v27 = (0, _v3.useMemo)(() => _v2 || _v6.isMuted || _v6.error || !_v6.track ? (0, _v1.jsx)(_v5.MicOff, {
        color: _v26
      }) : (0, _v1.jsx)(_v6.MicOn, {
        color: _v26
      }), [_v2, _v6.isMuted, _v6.error, _v6.track, _v26]),
      _v28 = _v21.translations.mediaMicrophoneSettings,
      _v29 = (0, _v3.useCallback)(() => {
        let _v0 = !_v6.isMuted;
        _v0 ? (0, _v16.trackMuteMic)(_v3) : (0, _v16.trackUnMuteMic)(_v3), _v3 === _v17.EComposerApplicationType.BROADCASTER && _v15({
          liveStreamToolbarAction: "toggle_mic"
        }), _v10.setAudioMuted(_v0);
      }, [_v6.isMuted, _v10, _v3, _v15]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v10.setPlaybackDevice(_v0);
      }, [_v10]),
      _v31 = (0, _v3.useCallback)(async () => {
        _v16.emitSignal({
          type: _v15.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
          data: _v7.ERightPanelId.EVENT_SETTINGS
        }), await (0, _v4.nextAsyncQueue)(), _v16.emitSignal({
          type: _v15.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
          data: _v23.EAccordionItemId.AUDIO
        });
      }, [_v16]);
    return (0, _v1.jsx)(_v38, {
      id: _v0,
      className: _v1,
      toolTipLabel: _v2 || !_v22 || _v20 ? null : _v25.text,
      icon: _v27,
      isActive: _v24,
      isDisabled: _v2,
      isLoading: _v23,
      hasError: _v20,
      errorTitle: _v25.title,
      errorDescription: _v25.text,
      onClick: _v22 ? _v29 : void 0,
      buttonMenu: (0, _v1.jsx)(_v52, {
        id: (0, _v20.createLiveDomName)(_v0, "control-menu"),
        className: (0, _v20.createLiveDomName)(_v1, "control-menu"),
        isLoading: _v23,
        isActive: _v24,
        isDisabled: _v2,
        iconColor: _v26,
        menuTooltipLabel: _v28,
        audioDeviceId: _v6.deviceId,
        playbackDeviceId: _v8,
        audioDevices: _v7,
        playbackDevices: _v9,
        onAudioDeviceClicked: _v10.setAudioDevice,
        onPlaybackDeviceClicked: _v30,
        onCheckAudioClicked: _v21 || !_v17 ? void 0 : _v31
      })
    });
  }], 0);
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  function _v69() {
    let _v0 = (0, _v3.useRef)(!1);
    return (0, _v3.useLayoutEffect)(() => (_v0.current = !0, () => {
      _v0.current = !1;
    }), []), _v0;
  }
  _v0.s(["useIsMountedRef", 0, _v69], 0);
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0);
  function _v78({
    isMirrored: _v0,
    margin: _v1 = `${(0, _v24.rem)(16)} auto ${(0, _v24.rem)(24)} auto`,
    children: _v2,
    localMediaContext: {
      video: _v3,
      agoraSDK: _v4,
      videoDevices: _v5,
      isMediaAllowed: _v6,
      isBrowserPrompted: _v7,
      previewBackgroundProcessor: _v8
    } = (0, _v2.useManager)(_v13.LocalMediaManager)
  }) {
    let _v9 = (0, _v65.useLogger)("CS"),
      _v10 = _v69(),
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
      _v16 = (0, _v68.useForceUpdate)(),
      _v17 = (0, _v71.getActiveAgoraSourceTrack)(_v14.track),
      _v18 = (0, _v3.useCallback)((_v0, _v1) => {
        if (_v0 && _v1) try {
          _v12.current === _v1 ? _v9.info("Track is piped already") : (_v1.pipe(_v0).pipe(_v1.processorDestination), _v9.info("Preview track is piping:", _v1), _v12.current = _v1);
        } catch (_v0) {
          (0, _v77.trackLiveError)(_v0, {
            component: "CameraStream",
            category: _v76.ELiveErrorCategory.AGORA,
            method: "pipePreviewTrackWithVirtualBackground",
            data: {
              trackId: _v1?.getTrackId?.()
            }
          });
        } finally {
          let _v0 = (0, _v72.resolveVideoBackgroundOptions)(_v3, _v67.liveMediaConfig.LOCAL_MEDIA.VIRTUAL_BACKGROUND_OPTIONS);
          _v0 ? (_v9.info("Enabling preview background:", _v1), (0, _v74.inline)(async () => {
            await (0, _v72.applyVideoBackgroundEffect)(_v0, _v0).catch(_v0 => {
              (0, _v77.trackLiveError)(_v0, {
                category: _v76.ELiveErrorCategory.AGORA,
                method: "pipePreviewTrackWithVirtualBackground"
              });
            }), _v16();
          })) : setTimeout(_v16, 20);
        }
      }, [_v3.isBlurred, _v3.backgroundImageId]);
    return (0, _v3.useEffect)(() => (_v9.info("Mounted agora track local preview replicator"), () => {
      (0, _v71.isAgoraTrack)(_v13.current) && (_v9.info("Closing agora tracks on unmount:", _v13.current), (0, _v71.closeAgoraLocalTracks)(_v13.current));
    }), []), (0, _v3.useEffect)(() => {
      _v15(_v0 => _v0.asMerged({
        error: null
      }));
    }, [_v3.deviceId]), (0, _v3.useEffect)(() => {
      !_v11.current && !_v3.isLoading && _v4 && _v6 && !_v7 && (_v14.track && _v14.deviceId !== _v3.deviceId ? (_v11.current = !0, _v9.info("Change active local device:", _v14.deviceId, "->", _v3.deviceId), _v14.track.setDevice(_v3.deviceId).then(() => {
        (0, _v73.safelyForceTrackConstraints)(_v14.track?.getMediaStreamTrack(), _v67.liveMediaConfig.LOCAL_MEDIA.CONSTRAINTS);
      }).finally(() => {
        _v11.current = !1, _v15(_v0 => (_v18(_v8, _v0.track), _v0.asMerged({
          deviceId: _v3.deviceId
        })));
      })) : _v14.track || _v14.error || (_v11.current = !0, _v9.info("Initializing a new local preview track"), (0, _v71.createCameraTrackSafely)({
        agoraSDK: _v4,
        deviceId: _v3.deviceId,
        devices: _v5,
        isMuted: !1,
        isHardMuteEnabled: !1
      }).then(_v0 => {
        let _v1 = (0, _v71.isAgoraTrack)(_v0);
        if (!_v10.current && _v1) return _v9.info("Created video tracks after unmount, closing:", _v3.deviceId, _v1), (0, _v71.closeAgoraLocalTracks)(_v0);
        _v9.info("Created video for local preview:", _v3.deviceId, _v1);
        let _v2 = _v1 ? _v0 : null;
        _v13.current = _v2, _v11.current = !1, _v15(_v0 => (_v9.info("Saving new preview track:", _v0.track, "->", _v2), (0, _v71.closeAgoraLocalTracks)(_v0.track), _v18(_v8, _v2), _v0.asMerged({
          track: _v1 ? _v2 : null,
          error: _v1 ? null : _v0,
          deviceId: _v3.deviceId
        })));
      })));
    }, [_v3, _v3.isBlurred, _v4, _v14, _v6, _v7, _v5, _v9, _v10]), (0, _v1.jsx)(_v25.Box, {
      margin: _v1,
      children: (0, _v1.jsx)(_v25.Box, {
        background: "stroke",
        sx: _v75.STRICT_16BY9_BOX_STYLE,
        children: (0, _v1.jsxs)(_v66.AgoraMediaTrackPreview, {
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
          borderRadius: (0, _v24.rem)(8),
          children: [_v17 || _v14.error ? null : (0, _v1.jsx)(_v49.Spinner, {}), _v14.error ? (0, _v1.jsx)(_v53.Text, {
            variant: "body-xl",
            children: _v70.T_ERROR
          }) : null, _v2]
        }, "preview")
      })
    });
  }
  var _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0);
  function _v85(_v0) {
    return _v0.split("/").filter(Boolean).pop() ?? "";
  }
  var _v86 = _v20;
  let _v87 = (0, _v24.rem)(64),
    _v88 = (0, _v24.rem)(320),
    _v89 = (0, _v24.rem)(960),
    _v90 = `min(${(0, _v24.rem)(420)}, calc(100dvh - ${(0, _v24.rem)(280)}))`,
    _v91 = (0, _v24.rem)(12),
    _v92 = (0, _v24.rem)(24);
  function _v93({
    label: _v0,
    icon: _v1,
    isSelected: _v2,
    isDisabled: _v3,
    onClick: _v4
  }) {
    return (0, _v1.jsx)(_v64.TooltipIconButton, {
      label: _v0,
      placement: "bottom",
      isDisabled: _v3,
      width: "100%",
      height: "100%",
      minHeight: "100%",
      aspectRatio: "1 / 1",
      variant: "secondary",
      position: "relative",
      overflow: "hidden",
      outline: _v2 ? "2px solid" : void 0,
      icon: _v1,
      onClick: _v2 ? void 0 : _v4
    });
  }
  function _v94({
    title: _v0,
    emptyLabel: _v1,
    isResponsive: _v2 = !1,
    children: _v3
  }) {
    let _v4 = _v2 ? `repeat(auto-fill, minmax(${_v87}, 1fr))` : "repeat(4, minmax(0, 1fr))";
    return (0, _v1.jsxs)(_v39.Flex, {
      background: "fill-component",
      borderRadius: (0, _v24.rem)(16),
      direction: "column",
      gap: _v91,
      padding: (0, _v24.rem)(8),
      children: [(0, _v1.jsx)(_v48.Header, {
        paddingX: (0, _v24.rem)(8),
        size: "xs",
        children: _v0
      }), _v1 ? (0, _v1.jsx)(_v53.Text, {
        color: "text-secondary",
        paddingX: (0, _v24.rem)(8),
        children: _v1
      }) : (0, _v1.jsx)(_v25.Box, {
        display: "grid",
        gap: (0, _v24.rem)(8),
        gridTemplateColumns: _v4,
        children: _v3
      })]
    });
  }
  function _v95(_v0) {
    return (0, _v1.jsx)(_v25.Box, {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
      backgroundImage: _v0,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    });
  }
  function _v96({
    selectedId: _v0,
    isDisabled: _v1,
    isResponsive: _v2,
    onSelect: _v3
  }) {
    let _v4 = (0, _v83.useViewer)(),
      _v5 = _v4?.teamUser?.ownerId ?? _v4?.user?.id,
      {
        data: _v6
      } = (0, _v62.useGetUserBrandkits)(() => _v5 ? {
        where: {
          userId: _v5
        },
        select: ["name", "uri", "logos"]
      } : null),
      _v7 = (0, _v3.useMemo)(() => (_v6?.data ?? []).flatMap(_v0 => (_v0.logos ?? []).flatMap(_v0 => {
        let _v1 = _v0.picture?.baseLink;
        return _v1 ? [{
          uri: _v0.uri,
          name: _v0.name,
          url: _v1
        }] : [];
      })), [_v6]);
    return _v5 ? 0 === _v7.length ? (0, _v1.jsx)(_v94, {
      title: _v21.translations.brand,
      emptyLabel: _v21.translations.brandKitEmptyHint,
      isResponsive: _v2
    }) : (0, _v1.jsx)(_v94, {
      title: _v21.translations.brand,
      isResponsive: _v2,
      children: _v7.map(_v0 => (0, _v1.jsx)(_v25.Box, {
        aspectRatio: "1 / 1",
        minWidth: 0,
        width: "100%",
        children: (0, _v1.jsx)(_v93, {
          label: _v0.name,
          isDisabled: _v1,
          isSelected: _v0 === _v0.url,
          onClick: () => _v3(_v0.url),
          icon: _v95(_v0.url)
        })
      }, _v0.uri))
    }) : null;
  }
  function _v97({
    selectedId: _v0,
    isDisabled: _v1,
    isResponsive: _v2,
    onSelect: _v3,
    onClearBackground: _v4
  }) {
    let {
        backgrounds: _v5,
        canManage: _v6,
        isAtLimit: _v7,
        upload: _v8,
        remove: _v9
      } = function () {
        let {
            baseUrl: _v0,
            jwt: _v1
          } = (0, _v84.useGctlConfig)(),
          _v2 = (0, _v83.useViewer)(),
          _v3 = _v2?.user?.id,
          [_v4, _v5] = (0, _v3.useState)([]),
          _v6 = (0, _v3.useMemo)(() => ({
            "Content-Type": "application/json",
            Authorization: _v1 ? `jwt ${_v1}` : ""
          }), [_v1]),
          _v7 = _v3 ? `${_v0}/users/${_v3}/camera_backgrounds` : null,
          _v8 = (0, _v3.useCallback)(async () => {
            if (!_v7) return [];
            let _v0 = await fetch(_v7, {
              headers: _v6
            });
            if (!_v0.ok) return console.error(`Failed to load camera backgrounds: ${_v0.status} ${_v0.statusText} (${_v7})`), [];
            let _v1 = await _v0.json();
            return (Array.isArray(_v1?.data) ? _v1.data : []).map(_v0 => ({
              uid: _v85(_v0.uri),
              name: _v0.name,
              link: _v0.base_link
            }));
          }, [_v7, _v6]);
        (0, _v3.useEffect)(() => {
          let _v0 = !1;
          return _v8().then(_v0 => {
            _v0 || _v5(_v0);
          }).catch(_v0 => {
            console.error("Failed to load camera backgrounds", _v0);
          }), () => {
            _v0 = !0;
          };
        }, [_v8]);
        let _v9 = (0, _v3.useCallback)(async _v0 => {
            if (!_v7) return;
            if (_v0.size > 0) throw Error((0, _v63.translate)({
              singular: "Image must be smaller than 5 MB.",
              dictionary: {
                es: {
                  singular: "La imagen debe ser menor de 5 MB."
                },
                "de-DE": {
                  singular: "Das Bild muss kleiner als 5 MB sein."
                },
                "fr-FR": {
                  singular: "L'image doit être inférieure à 5 Mo."
                },
                "ja-JP": {
                  singular: "画像は5 MB未満である必要があります。"
                },
                "ko-KR": {
                  singular: "이미지는 5 MB보다 작아야 합니다."
                },
                "pt-BR": {
                  singular: "A imagem deve ser menor que 5 MB."
                },
                "zh-CN": {
                  singular: "图像必须小于 5 MB."
                }
              }
            }));
            let _v1 = await fetch(`${_v7}/upload_asset`, {
              method: "POST",
              headers: _v6,
              body: JSON.stringify({
                file_size: _v0.size
              })
            });
            if (!_v1.ok) {
              let _v0 = await _v1.json().catch(() => null);
              throw Error(_v0?.error ?? _v0?.developer_message ?? (0, _v63.translate)({
                singular: "Could not upload the image.",
                dictionary: {
                  es: {
                    singular: "No se pudo subir la imagen."
                  },
                  "de-DE": {
                    singular: "Das Bild konnte nicht hochgeladen werden."
                  },
                  "fr-FR": {
                    singular: "Impossible de téléverser l'image."
                  },
                  "ja-JP": {
                    singular: "画像をアップロードできませんでした。"
                  },
                  "ko-KR": {
                    singular: "이미지를 업로드할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível enviar a imagem."
                  },
                  "zh-CN": {
                    singular: "无法上传图像."
                  }
                }
              }));
            }
            let _v2 = await _v1.json();
            if (!(await fetch(_v2.upload_link, {
              method: "PUT",
              body: _v0,
              headers: {
                "Content-Type": _v0.type
              }
            })).ok) throw Error((0, _v63.translate)({
              singular: "Could not upload the image.",
              dictionary: {
                es: {
                  singular: "No se pudo subir la imagen."
                },
                "de-DE": {
                  singular: "Das Bild konnte nicht hochgeladen werden."
                },
                "fr-FR": {
                  singular: "Impossible de téléverser l'image."
                },
                "ja-JP": {
                  singular: "画像をアップロードできませんでした。"
                },
                "ko-KR": {
                  singular: "이미지를 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Não foi possível enviar a imagem."
                },
                "zh-CN": {
                  singular: "无法上传图像."
                }
              }
            }));
            let _v3 = await fetch(_v7, {
              method: "POST",
              headers: _v6,
              body: JSON.stringify({
                uid: _v2.uid,
                claim: _v2.claim,
                claim_expires: _v2.claim_expires,
                name: _v0.name
              })
            });
            if (!_v3.ok) {
              let _v0 = await _v3.json().catch(() => null);
              throw Error(_v0?.error ?? _v0?.developer_message ?? (0, _v63.translate)({
                singular: "Could not upload the image.",
                dictionary: {
                  es: {
                    singular: "No se pudo subir la imagen."
                  },
                  "de-DE": {
                    singular: "Das Bild konnte nicht hochgeladen werden."
                  },
                  "fr-FR": {
                    singular: "Impossible de téléverser l'image."
                  },
                  "ja-JP": {
                    singular: "画像をアップロードできませんでした。"
                  },
                  "ko-KR": {
                    singular: "이미지를 업로드할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível enviar a imagem."
                  },
                  "zh-CN": {
                    singular: "无法上传图像."
                  }
                }
              }));
            }
            let _v4 = await _v3.json(),
              _v5 = {
                uid: _v85(_v4.uri),
                name: _v4.name,
                link: _v4.base_link
              };
            _v5(_v0 => [..._v0, _v5]);
          }, [_v7, _v6]),
          _v10 = (0, _v3.useCallback)(async _v0 => {
            if (_v7) {
              if (!(await fetch(`${_v7}/${_v0}`, {
                method: "DELETE",
                headers: _v6
              })).ok) throw Error((0, _v63.translate)({
                singular: "Could not delete the image.",
                dictionary: {
                  es: {
                    singular: "No se pudo eliminar la imagen."
                  },
                  "de-DE": {
                    singular: "Das Bild konnte nicht gelöscht werden."
                  },
                  "fr-FR": {
                    singular: "Impossible de supprimer l'image."
                  },
                  "ja-JP": {
                    singular: "画像を削除できませんでした。"
                  },
                  "ko-KR": {
                    singular: "이미지를 삭제할 수 없습니다."
                  },
                  "pt-BR": {
                    singular: "Não foi possível excluir a imagem."
                  },
                  "zh-CN": {
                    singular: "无法删除图片。"
                  }
                }
              }));
              _v5(_v0 => _v0.filter(_v0 => _v0.uid !== _v0));
            }
          }, [_v7, _v6]);
        return {
          backgrounds: _v4,
          canManage: !!_v3,
          isAtLimit: _v4.length >= 10,
          upload: _v9,
          remove: _v10
        };
      }(),
      _v10 = (0, _v56.useToast)(),
      _v11 = (0, _v3.useCallback)(async _v0 => {
        let _v1 = _v0.target.files?.[0];
        if (_v0.target.value = "", _v1) try {
          await _v8(_v1);
        } catch (_v0) {
          _v10({
            status: "error",
            title: _v0 instanceof Error ? _v0.message : (0, _v63.translate)({
              singular: "Could not upload the image.",
              dictionary: {
                es: {
                  singular: "No se pudo subir la imagen."
                },
                "de-DE": {
                  singular: "Das Bild konnte nicht hochgeladen werden."
                },
                "fr-FR": {
                  singular: "Impossible de téléverser l'image."
                },
                "ja-JP": {
                  singular: "画像をアップロードできませんでした。"
                },
                "ko-KR": {
                  singular: "이미지를 업로드할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Não foi possível enviar a imagem."
                },
                "zh-CN": {
                  singular: "无法上传图像."
                }
              }
            })
          });
        }
      }, [_v10, _v8]),
      _v12 = (0, _v3.useCallback)(async _v0 => {
        let _v1 = _v0 === _v0.link;
        try {
          await _v9(_v0.uid), _v1 && _v4();
        } catch (_v0) {
          _v10({
            status: "error",
            title: _v0 instanceof Error ? _v0.message : (0, _v63.translate)({
              singular: "Could not delete the image.",
              dictionary: {
                es: {
                  singular: "No se pudo eliminar la imagen."
                },
                "de-DE": {
                  singular: "Das Bild konnte nicht gelöscht werden."
                },
                "fr-FR": {
                  singular: "Impossible de supprimer l'image."
                },
                "ja-JP": {
                  singular: "画像を削除できませんでした。"
                },
                "ko-KR": {
                  singular: "이미지를 삭제할 수 없습니다."
                },
                "pt-BR": {
                  singular: "Não foi possível excluir a imagem."
                },
                "zh-CN": {
                  singular: "无法删除图片。"
                }
              }
            })
          });
        }
      }, [_v9, _v0, _v4, _v10]);
    return _v6 ? (0, _v1.jsxs)(_v94, {
      title: _v21.translations.uploadedImages,
      isResponsive: _v2,
      children: [!_v7 && (0, _v1.jsx)(_v25.Box, {
        aspectRatio: "1 / 1",
        minWidth: 0,
        width: "100%",
        children: (0, _v1.jsx)(_v54.FileInput, {
          variant: "secondary",
          label: (0, _v1.jsx)(_v61.Plus, {}),
          accept: "image/png,image/jpeg,image/webp,image/heic,image/heif",
          onChange: _v11,
          sx: {
            width: "100%",
            aspectRatio: "1 / 1",
            height: "100%",
            minHeight: "100%",
            padding: 0,
            alignItems: "center",
            justifyContent: "center",
            _focusVisible: {
              outlineColor: "focus"
            },
            "&:focus-within": {
              outlineColor: "focus"
            },
            "& + input:focus-visible": {
              outline: "none"
            },
            "&:has(+ input:focus-visible)": {
              outlineColor: "focus"
            }
          }
        })
      }), _v5.map(_v0 => (0, _v1.jsxs)(_v25.Box, {
        role: "group",
        position: "relative",
        aspectRatio: "1 / 1",
        minWidth: 0,
        width: "100%",
        children: [(0, _v1.jsx)(_v93, {
          label: _v0.name ?? _v21.translations.uploadedImages,
          isDisabled: _v1,
          isSelected: _v0 === _v0.link,
          onClick: () => _v3(_v0.link),
          icon: _v95(_v0.link)
        }), (0, _v1.jsx)(_v27.IconButton, {
          "aria-label": _v21.translations.delete,
          icon: (0, _v1.jsx)(_v60.CloseXSmall, {}),
          size: "xs",
          variant: "blur",
          position: "absolute",
          top: (0, _v24.rem)(4),
          right: (0, _v24.rem)(4),
          opacity: 0,
          _groupHover: {
            opacity: 1
          },
          _focusVisible: {
            opacity: 1
          },
          onClick: () => _v12(_v0)
        })]
      }, _v0.uid))]
    }) : null;
  }
  let _v98 = (0, _v3.forwardRef)(({
    id: _v0 = (0, _v86.createLiveDomName)("media-devices-settings"),
    className: _v1 = (0, _v86.createLiveDomName)("media-devices-settings"),
    video: _v2,
    isMirrored: _v3,
    onVideoMirroringChanged: _v4,
    onToggleVideoBlur: _v5,
    onSelectBackgroundImage: _v6,
    onClearBackground: _v7,
    isBackgroundEffectAllowed: _v8
  }, _v9) => {
    let {
        initialState: {
          sessionApplicationType: _v10
        }
      } = (0, _v79.useLiveGlobals)(),
      {
        settings: _v11
      } = (0, _v82.useOrionSettings)(),
      _v12 = _v17.EComposerApplicationType.GUEST === _v10,
      _v13 = _v11.is_live_event_background_enabled,
      _v14 = (0, _v3.useCallback)(() => {
        if (!_v4) return;
        let _v0 = !_v3;
        _v4(_v0), _v0 && function (_v0 = !1) {
          (0, _v81.createBPv2EventFactory)("vimeo.select_mirror_my_video", -1, () => ({
            ...(0, _v80.newTeamCtx)(),
            ...(0, _v80.newWebCtx)(),
            ...(0, _v80.newActionCtx)("click"),
            ...(0, _v80.newLiveCtx)({
              live_feature: "cam_and_audio_settings",
              is_guest_speaker: _v0
            }),
            ...(0, _v80.newProductAnalyticsCtx)({
              product: "events",
              feature: "settings",
              location: "modal",
              copy: "select_mirror_my_video",
              modal_name: "cam_and_audio_settings_modal",
              element: "check_box",
              device_type: _v44.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
            })
          }), () => void 0)();
        }(_v12);
      }, [_v4, _v3, _v12]),
      _v15 = (0, _v3.useCallback)(() => {
        _v2.isBlurred || function (_v0 = !1) {
          (0, _v81.createBPv2EventFactory)("vimeo.select_blur_background", -1, () => ({
            ...(0, _v80.newTeamCtx)(),
            ...(0, _v80.newWebCtx)(),
            ...(0, _v80.newActionCtx)("click"),
            ...(0, _v80.newLiveCtx)({
              live_feature: "cam_and_audio_settings",
              is_guest_speaker: _v0
            }),
            ...(0, _v80.newProductAnalyticsCtx)({
              product: "events",
              feature: "settings",
              location: "modal",
              modal_name: "cam_and_audio_settings_modal",
              element: "check_box",
              copy: "select_blur_background",
              device_type: _v44.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
            })
          }), () => void 0)();
        }(_v12), _v5();
      }, [_v5, _v2.isBlurred, _v12]),
      _v16 = !_v2.isBlurred && !_v2.backgroundImageId,
      _v17 = (0, _v1.jsx)(_v78, {
        isMirrored: _v3,
        margin: "0",
        children: (0, _v1.jsx)(_v25.Box, {
          position: "absolute",
          bottom: (0, _v24.rem)(8),
          right: (0, _v24.rem)(8),
          children: (0, _v1.jsx)(_v64.TooltipIconButton, {
            label: _v21.translations.flipHorizontally,
            icon: (0, _v1.jsx)(_v59.FlipLeft, {}),
            variant: "blur",
            onClick: _v14
          })
        })
      }),
      _v18 = () => (0, _v1.jsx)(_v93, {
        label: _v21.translations.noEffects,
        icon: (0, _v1.jsx)(_v57.StopBanLeft, {}),
        isSelected: _v16,
        onClick: _v7
      }),
      _v19 = () => (0, _v1.jsx)(_v93, {
        label: _v21.translations.blur,
        icon: (0, _v1.jsx)(_v58.Blur, {}),
        isDisabled: !_v8,
        isSelected: !!_v2.isBlurred,
        onClick: _v15
      }),
      _v20 = (0, _v55.useBreakpointValue)({
        base: !0,
        md: !1
      }, {
        fallback: "md"
      }) ?? !1;
    return _v13 ? (0, _v1.jsxs)(_v39.Flex, {
      id: _v0,
      className: _v1,
      ref: _v9,
      userSelect: "none",
      width: _v89,
      maxWidth: "100%",
      gap: (0, _v24.rem)(20),
      direction: {
        base: "column",
        md: "row"
      },
      marginBottom: 0,
      alignItems: {
        base: "stretch",
        md: "flex-start"
      },
      children: [(0, _v1.jsx)(_v25.Box, {
        flex: "1 1 auto",
        minWidth: 0,
        background: "transparent",
        borderRadius: (0, _v24.rem)(8),
        overflow: "hidden",
        sx: {
          "& > *": {
            borderRadius: (0, _v24.rem)(8),
            overflow: "hidden"
          }
        },
        position: "relative",
        children: _v17
      }), (0, _v1.jsxs)(_v39.Flex, {
        direction: "column",
        flex: {
          base: "0 1 auto",
          md: `0 0 ${_v88}`
        },
        width: {
          base: "100%",
          md: _v88
        },
        minWidth: 0,
        gap: (0, _v24.rem)(20),
        maxHeight: _v90,
        overflowY: "auto",
        paddingBottom: _v92,
        sx: {
          scrollbarColor: "transparent transparent",
          scrollbarGutter: "auto",
          scrollbarWidth: "thin",
          "&:hover, &:focus-within": {
            scrollbarColor: "var(--vimeo-colors-darkBlueAlpha-200) transparent"
          },
          "&::-webkit-scrollbar": {
            width: (0, _v24.rem)(8)
          },
          "&::-webkit-scrollbar-track, &::-webkit-scrollbar-corner": {
            backgroundColor: "transparent"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundClip: "padding-box",
            backgroundColor: "transparent",
            border: `${(0, _v24.rem)(2)} solid transparent`,
            borderRadius: (0, _v24.rem)(8)
          },
          "&:hover::-webkit-scrollbar-thumb, &:focus-within::-webkit-scrollbar-thumb": {
            backgroundColor: "darkBlueAlpha.200"
          }
        },
        children: [(0, _v1.jsxs)(_v94, {
          title: _v21.translations.effects,
          isResponsive: _v20,
          children: [(0, _v1.jsx)(_v25.Box, {
            aspectRatio: "1 / 1",
            minWidth: 0,
            width: "100%",
            children: _v18()
          }), (0, _v1.jsx)(_v25.Box, {
            aspectRatio: "1 / 1",
            minWidth: 0,
            width: "100%",
            children: _v19()
          })]
        }), (0, _v1.jsx)(_v97, {
          selectedId: _v2.backgroundImageId,
          isDisabled: !_v8,
          isResponsive: _v20,
          onSelect: _v6,
          onClearBackground: _v7
        }), (0, _v1.jsx)(_v94, {
          title: _v21.translations.vimeoBackgrounds,
          isResponsive: _v20,
          children: _v72.LIVE_BACKGROUND_PRESETS.map(_v0 => (0, _v1.jsx)(_v25.Box, {
            aspectRatio: "1 / 1",
            minWidth: 0,
            width: "100%",
            children: (0, _v1.jsx)(_v93, {
              label: _v0.label,
              isDisabled: !_v8,
              isSelected: _v2.backgroundImageId === _v0.id,
              onClick: () => _v6(_v0.id),
              icon: _v95(_v0.previewUrl)
            })
          }, _v0.id))
        }), (0, _v1.jsx)(_v96, {
          selectedId: _v2.backgroundImageId,
          isDisabled: !_v8,
          isResponsive: _v20,
          onSelect: _v6
        })]
      })]
    }) : (0, _v1.jsxs)(_v25.Box, {
      id: _v0,
      className: _v1,
      ref: _v9,
      userSelect: "none",
      position: "relative",
      width: (0, _v24.rem)(400),
      children: [(0, _v1.jsx)(_v78, {
        isMirrored: _v3,
        margin: "0 auto",
        children: (0, _v1.jsx)(_v25.Box, {
          position: "absolute",
          bottom: (0, _v24.rem)(8),
          right: (0, _v24.rem)(8),
          children: (0, _v1.jsx)(_v64.TooltipIconButton, {
            label: _v21.translations.flipHorizontally,
            icon: (0, _v1.jsx)(_v59.FlipLeft, {}),
            variant: "blur",
            onClick: _v14
          })
        })
      }), (0, _v1.jsxs)(_v39.Flex, {
        direction: "column",
        marginTop: (0, _v24.rem)(8),
        marginBottom: (0, _v24.rem)(36),
        gap: (0, _v24.rem)(8),
        children: [(0, _v1.jsx)(_v48.Header, {
          size: "xs",
          children: _v21.translations.effects
        }), (0, _v1.jsxs)(_v39.Flex, {
          gap: (0, _v24.rem)(8),
          flexWrap: "wrap",
          children: [(0, _v1.jsx)(_v25.Box, {
            width: _v87,
            height: _v87,
            children: _v18()
          }), (0, _v1.jsx)(_v25.Box, {
            width: _v87,
            height: _v87,
            children: _v19()
          })]
        })]
      })]
    });
  });
  _v0.s(["MediaDevicesSettingsModalContent", 0, _v98], 0);
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  function _v102({
    id: _v0 = (0, _v20.createLiveDomName)("video-control-button-menu"),
    className: _v1 = (0, _v20.createLiveDomName)("video-control-button-menu"),
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
      } = (0, _v45.useControlledPopover)(),
      _v17 = (0, _v3.useCallback)(() => {
        _v10(), _v15();
      }, [_v10, _v15]);
    return (0, _v1.jsx)(_v43.BokehPopover, {
      isOpen: _v13,
      placement: "top",
      triggerContent: (0, _v1.jsx)(_v25.Box, {
        children: (0, _v1.jsx)(_v47, {
          id: (0, _v20.createLiveDomName)(_v0, "button"),
          className: (0, _v20.createLiveDomName)(_v1, "button"),
          ref: _v11,
          isActive: _v3,
          isDisabled: _v4,
          iconColor: _v5,
          menuTooltipLabel: _v6,
          isTooltipDisabled: _v2 || _v4 || _v13,
          onClick: _v16
        })
      }),
      content: (0, _v1.jsxs)(_v39.Flex, {
        ref: _v12,
        id: (0, _v20.createLiveDomName)(_v0, "cameras-popover"),
        className: (0, _v20.createLiveDomName)(_v1, "cameras-popover"),
        direction: "column",
        gap: (0, _v24.rem)(4),
        minWidth: (0, _v24.rem)(352),
        maxWidth: (0, _v24.rem)(352),
        maxHeight: (0, _v24.rem)(400),
        children: [(0, _v1.jsx)(_v51, {
          id: (0, _v20.createLiveDomName)(_v0, "cameras-list"),
          className: (0, _v20.createLiveDomName)(_v1, "cameras-list"),
          header: _v21.translations.cameras,
          active: _v7,
          devices: _v8,
          isLoading: _v2,
          onDeviceClicked: _v9
        }), (0, _v1.jsx)(_v40.Divider, {
          borderColor: "stroke"
        }), (0, _v1.jsxs)(_v39.Flex, {
          id: (0, _v20.createLiveDomName)(_v0, "effects"),
          className: (0, _v20.createLiveDomName)(_v1, "effects"),
          alignItems: "center",
          padding: `${(0, _v24.rem)(4)} ${(0, _v24.rem)(8)}`,
          gap: (0, _v24.rem)(4),
          borderRadius: (0, _v24.rem)(4),
          cursor: "pointer",
          _hover: {
            background: "fill-component-hover"
          },
          onClick: _v17,
          children: [(0, _v1.jsx)(_v101.MagicWand, {}), (0, _v1.jsx)(_v41.Paragraph, {
            size: "md",
            children: _v21.translations.effects
          })]
        })]
      }),
      onOpen: _v14,
      onClose: _v15
    });
  }
  _v0.s(["VideoControlButton", 0, function ({
    id: _v0 = (0, _v20.createLiveDomName)("video-control-button"),
    className: _v1 = (0, _v20.createLiveDomName)("video-control-button"),
    isDisabled: _v2 = !1,
    place: _v3,
    onSettingsClicked: _v4,
    localMediaContext: {
      video: _v5,
      videoDevices: _v6,
      mediaActions: _v7
    } = (0, _v2.useManager)(_v13.LocalMediaManager)
  }) {
    let {
        trackLiveStreamToolbarActionClicked: _v8
      } = (0, _v19.useLiveStreamBroadcasterTracking)(),
      _v9 = !!(!_v2 && _v5.track && !_v5.error),
      _v10 = _v3 === _v17.EComposerApplicationType.GUEST,
      _v11 = _v5.isLoading,
      _v12 = !!(_v5.track && !_v5.isMuted),
      {
        hadDeviceOccupiedError: _v13,
        hasDeviceBlockedError: _v14
      } = (0, _v3.useMemo)(() => _v5.error ? (0, _v18.isAgoraDeviceOccupiedError)(_v5.error) ? {
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
        _v0 ? (0, _v16.trackDisableCam)(_v3) : (0, _v16.trackEnableCam)(_v3), _v3 === _v17.EComposerApplicationType.BROADCASTER && _v8({
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
                text: _v8.T_OCCUPIED_CAMERA_ERROR
              };
            case _v3:
              return {
                title: _v8.T_YOUR_CAMERA_IS_BLOCKED,
                text: _v8.T_WE_ARE_UNABLE_TO_CONNECT_TO_YOUR_CAMERA
              };
            case _v1:
              return {
                text: null
              };
            case _v0:
              return {
                text: _v8.T_START_CAMERA
              };
            default:
              return {
                text: _v8.T_STOP_CAMERA
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
      _v19 = (0, _v3.useMemo)(() => _v2 || _v5.isMuted || _v5.error ? (0, _v1.jsx)(_v99.CameraOff, {
        color: _v18
      }) : (0, _v1.jsx)(_v100.CameraOn, {
        color: _v18
      }), [_v2, _v5.isMuted, _v5.error, _v18]),
      _v20 = _v21.translations.mediaCameraSettings,
      _v21 = (0, _v3.useCallback)(() => {
        _v4(), function (_v0 = !1) {
          (0, _v81.createBPv2EventFactory)("vimeo.open_cam_and_audio_settings", -1, () => ({
            ...(0, _v80.newTeamCtx)(),
            ...(0, _v80.newWebCtx)(),
            ...(0, _v80.newActionCtx)("click"),
            ...(0, _v80.newLiveCtx)({
              live_feature: "cam_and_audio_settings",
              is_guest_speaker: _v0
            }),
            ...(0, _v80.newProductAnalyticsCtx)({
              product: "events",
              feature: "settings",
              location: "content_area",
              element: "icon",
              device_type: _v44.browserConfig.BROWSER?.isMobile ? "mobile" : "desktop"
            })
          }), () => void 0)();
        }(_v10);
      }, [_v4, _v10]);
    return (0, _v1.jsx)(_v38, {
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
      buttonMenu: (0, _v1.jsx)(_v102, {
        id: (0, _v20.createLiveDomName)(_v0, "control-menu"),
        className: (0, _v20.createLiveDomName)(_v1, "control-menu"),
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
  var _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0);
  _v0.s(["TeleprompterButton", 0, function ({
    id: _v0 = (0, _v20.createLiveDomName)("teleprompter-button"),
    isDisabled: _v1,
    isGuest: _v2 = !1,
    isDemo: _v3
  }) {
    let {
        trackLiveStreamToolbarActionClicked: _v4
      } = (0, _v19.useLiveStreamBroadcasterTracking)(),
      {
        isTeleprompterShown: _v5,
        toggleTeleprompter: _v6
      } = (0, _v104.useTeleprompter)(_v2),
      {
        sendToggleTeleprompterBpEvent: _v7
      } = (0, _v105.useTeleprompterAnalytics)({
        element: "icon",
        feature: "teleprompter",
        location: "bottom_panel"
      }, "live", () => (0, _v80.newLiveCtx)({
        live_feature: "teleprompter",
        is_guest_speaker: _v2
      })),
      _v8 = (0, _v74.inline)(() => _v1 ? "" : _v3 ? _v21.translations.teleprompterButtonDemoTooltip : _v5 ? _v21.translations.teleprompterClose : _v21.translations.teleprompterOpen);
    return (0, _v1.jsx)(_v39.Flex, {
      id: _v0,
      alignItems: "center",
      children: (0, _v1.jsx)(_v29.BokehTooltip, {
        label: _v8,
        shouldWrapChildren: !0,
        maxWidth: (0, _v24.rem)(340),
        children: (0, _v1.jsx)(_v27.IconButton, {
          id: (0, _v20.createLiveDomName)(_v0, "teleprompter-button"),
          "aria-label": _v8,
          variant: _v5 ? "primary" : "secondary",
          alignSelf: "center",
          icon: (0, _v1.jsx)(_v103.Script, {}),
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