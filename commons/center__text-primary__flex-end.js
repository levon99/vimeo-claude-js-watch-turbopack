{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  function _v15({
    error: _v0
  }) {
    let [_v1, _v2] = (0, _v10.useMemo)(() => {
      if ((0, _v14.isApiError)(_v0)) switch (_v0.data.body.errorCode) {
        case _v13.EApiErrorCode.NO_CREDENTIALS_PROVIDED:
        case _v13.EApiErrorCode.NO_USER_CREDENTIALS_PROVIDED:
          return [_v12.T_ERROR_NOT_AUTHORIZED, _v12.T_ERROR_NOT_AUTHORIZED_DESCRIPTION];
        case _v13.EApiErrorCode.BAD_ARGUMENTS_PROVIDED:
        case _v13.EApiErrorCode.GUEST_CODE_AUTHORIZATION_FAILED:
        case _v13.EApiErrorCode.NOT_FOUND:
          return [_v12.T_ERROR_BAD_GUEST_LINK, _v12.T_ERROR_BAD_GUEST_LINK_DESCRIPTION];
      }
      return [_v12.T_ERROR_TECHNICAL_DIFFICULTIES, _v12.T_ERROR_TECHNICAL_DIFFICULTIES_TRY_AGAIN];
    }, [_v0]);
    return (0, _v6.jsx)(_v11.LiveErrorPage, {
      title: _v1,
      message: _v2,
      error: _v0
    });
  }
  var _v16 = _v0.i(0),
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
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0);
  function _v48({
    children: _v0
  }) {
    let _v1 = (0, _v10.useCallback)(() => {
      window.location.reload();
    }, []);
    return (0, _v6.jsxs)(_v40.Modal, {
      isOpen: !0,
      size: "sm",
      onClose: _v1,
      children: [(0, _v6.jsx)(_v41.ModalOverlay, {}), (0, _v6.jsxs)(_v42.ModalContent, {
        alignItems: "center",
        justifyContent: "center",
        color: "text-primary",
        padding: (0, _v47.rem)(24),
        gap: (0, _v47.rem)(12),
        children: [(0, _v6.jsx)(_v43.Header, {
          width: "100%",
          size: "md",
          children: _v35.translations.thanksForJoining
        }), (0, _v6.jsx)(_v45.Paragraph, {
          width: "100%",
          size: "md",
          children: _v0
        }), (0, _v6.jsx)(_v46.Flex, {
          width: "100%",
          justifyContent: "flex-end",
          children: (0, _v6.jsx)(_v44.Button, {
            variant: "primary",
            size: "sm",
            textTransform: "uppercase",
            onClick: _v1,
            children: _v35.translations.ok
          })
        })]
      })]
    });
  }
  function _v49({
    composerSessionStatusContext: {
      liveComposerStatusGetters: _v0
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager)
  }) {
    (0, _v34.useSynchronizedProgram)(), (0, _v37.useGuestTrackingConfigUpdater)();
    let _v1 = _v0.isEnded(),
      _v2 = _v0.isRecordDeleted(),
      _v3 = _v0.isRecordEnded();
    (0, _v10.useEffect)(() => {
      _v2 && window.location.reload();
    }, [_v2]);
    let _v4 = (0, _v39.inline)(() => {
      switch (!0) {
        case _v2:
          return _v35.translations.recordingIsDeleted;
        case _v3:
          return _v35.translations.recordingIsEnded;
        default:
          return _v35.translations.yourEventEnded;
      }
    });
    return _v2 ? (0, _v6.jsx)(_v36.BlockingLoadingWrapper, {
      opacity: .25
    }) : (0, _v6.jsx)(_v6.Fragment, {
      children: _v1 ? (0, _v6.jsx)(_v48, {
        children: _v4
      }) : null
    });
  }
  var _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
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
    _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0);
  let _v72 = [_v56.DebugControlManager, _v62.ChatManager, _v38.ComposerSessionStatusManager, _v61.ComposerSettingsManager, _v50.GraphicsManager, _v55.GuestAgoraManager, _v58.GuestFirebaseManager, _v64.GuestSessionManager, _v59.GuestsManager, _v65.LocalMediaManager, _v57.ModuleManager, _v67.NotificationManager, _v68.PageEventsManager, _v69.PanelsManager, _v63.QnAManager, _v66.RemoteMediaManager, _v60.RoomScreenShareManager, _v51.SceneManager, _v70.TrackingManager],
    _v73 = (0, _v16.createProvider)(_v72, {
      isCombined: _v25.liveApplicationConfig.USE_COMBINED_PROVIDERS
    });
  function _v74({
    initialState: _v0,
    pageProps: _v1,
    children: _v2
  }) {
    return (0, _v71.useScopeViewerProvision)(), (0, _v52.useScopeGctlProvision)(), (0, _v6.jsxs)(_v54.LiveGlobalsProvider, {
      initialState: _v0,
      pageProps: _v1,
      children: [(0, _v6.jsx)(_v73, {
        initialState: _v0,
        children: _v2
      }), (0, _v6.jsx)(_v53.FontsProvider, {
        fonts: _v24.graphicsConfig.FONTS.ENABLED_FONTS
      })]
    });
  }
  var _v75 = _v0.i(0);
  function _v76({
    isCentered: _v0,
    withPadding: _v1,
    withWrapping: _v2
  } = {}) {
    return {
      justifyContent: _v0 ? "center" : "unset",
      alignItems: _v0 ? "center" : "unset",
      padding: _v1 ? (0, _v47.rem)(24) : 0,
      flexWrap: _v2 ? "wrap" : "unset",
      flexGrow: 1,
      width: "100%",
      minHeight: (0, _v47.rem)(600),
      overflow: "hidden",
      [`@media screen and (max-height: ${(0, _v47.rem)(664)})`]: {
        minHeight: (0, _v47.rem)(536)
      }
    };
  }
  function _v77() {
    return {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      border: `${(0, _v47.rem)(1)} solid`,
      borderColor: "stroke",
      borderRadius: "md",
      width: "100%",
      marginTop: (0, _v47.rem)(16),
      padding: `${(0, _v47.rem)(24)} 0`,
      columnGap: (0, _v47.rem)(8)
    };
  }
  var _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0);
  function _v83() {
    return (_v83 = Object.assign.bind()).apply(null, arguments);
  }
  let _v84 = function (_v0) {
    return _v10.createElement("svg", _v83({
      width: 24,
      height: 24,
      viewBox: "0 0 24 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v2 || (_v2 = _v10.createElement("rect", {
      x: 18,
      width: 4,
      height: 20,
      rx: 2,
      fill: "#4EC437"
    })), _v3 || (_v3 = _v10.createElement("rect", {
      x: 12,
      y: 4,
      width: 4,
      height: 16,
      rx: 2,
      fill: "#4EC437"
    })), _v4 || (_v4 = _v10.createElement("rect", {
      x: 6,
      y: 8,
      width: 4,
      height: 12,
      rx: 2,
      fill: "#4EC437"
    })), _v5 || (_v5 = _v10.createElement("rect", {
      y: 12,
      width: 4,
      height: 8,
      rx: 2,
      fill: "#4EC437"
    })));
  };
  var _v85 = _v0.i(0);
  function _v86({
    id: _v0 = (0, _v79.createDomName)("connection-quality"),
    className: _v1 = (0, _v79.createDomName)("connection-quality"),
    connectionQuality: _v2
  }) {
    let [_v3, _v4] = (0, _v10.useMemo)(() => {
      let {
        uplinkNetworkQuality: _v0,
        downlinkNetworkQuality: _v1
      } = _v2;
      return _v0 === _v85.EAgoraNetworkQuality.UNKNOWN || _v1 === _v85.EAgoraNetworkQuality.UNKNOWN ? ["grayscale.500", _v35.translations.unknown] : (_v0 === _v85.EAgoraNetworkQuality.EXCELLENT || _v0 === _v85.EAgoraNetworkQuality.GOOD) && (_v1 === _v85.EAgoraNetworkQuality.EXCELLENT || _v1 === _v85.EAgoraNetworkQuality.GOOD) ? ["green.500", null] : _v0 === _v85.EAgoraNetworkQuality.DOWN || _v1 === _v85.EAgoraNetworkQuality.DOWN ? ["red.500", _v35.translations.connectionQualityReduced] : ["yellow.500", _v35.translations.connectionQualityReduced];
    }, [_v2]);
    return _v4 ? (0, _v6.jsx)(_v82.BokehTooltip, {
      label: _v4,
      placement: "bottom",
      children: (0, _v6.jsx)(_v81.Box, {
        id: _v0,
        className: _v1,
        position: "relative",
        top: (0, _v47.rem)(2),
        sx: {
          "& rect": {
            fill: _v3
          }
        },
        children: (0, _v6.jsx)(_v84, {})
      })
    }) : null;
  }
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0);
  let _v89 = (0, _v87.default)(async () => {
    let {
      AccountMenu: _v0
    } = await _v0.A(0);
    return {
      default: _v0
    };
  });
  function _v90({
    id: _v0 = (0, _v79.createDomName)("header-profile"),
    className: _v1 = (0, _v79.createDomName)("header-profile"),
    isLive: _v2 = !1
  }) {
    let _v3 = (0, _v10.useCallback)(() => !_v2 || window.confirm(_v35.translations.promptBeforePageLeave), [_v2]);
    return (0, _v6.jsx)(_v46.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      minWidth: (0, _v47.rem)(28),
      zIndex: _v24.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL + 1,
      children: (0, _v6.jsx)(_v7.LiveErrorBoundary, {
        component: "LiveHeaderProfile",
        isDetailed: !1,
        children: (0, _v6.jsx)(_v10.Suspense, {
          fallback: (0, _v6.jsx)(_v88.Spinner, {
            id: (0, _v79.createDomName)(_v0, "loader"),
            className: (0, _v79.createDomName)(_v1, "loader"),
            size: "sm"
          }),
          children: (0, _v6.jsx)(_v89, {
            onConfirmTeamSwitch: _v3
          })
        })
      })
    });
  }
  var _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0);
  function _v95({
    id: _v0 = (0, _v79.createDomName)("stream-duration"),
    className: _v1 = (0, _v79.createDomName)("stream-duration"),
    isLoading: _v2,
    startedAt: _v3,
    endedAt: _v4,
    withIcon: _v5 = !0,
    recordingOffset: _v6,
    recordingStartedAt: _v7,
    isRecordingPaused: _v8,
    isRecordMode: _v9
  }) {
    let _v10 = (0, _v94.useDurationTimer)({
        startedAt: _v3,
        endedAt: _v4,
        recordingOffset: _v6,
        recordingStartedAt: _v7,
        isRecordingPaused: _v8,
        isRecordMode: _v9
      }),
      _v11 = (0, _v10.useMemo)(() => {
        switch (!0) {
          case _v5 && _v8 && _v9:
            return (0, _v6.jsx)(_v91.PauseFilled, {
              width: (0, _v47.rem)(24),
              height: (0, _v47.rem)(24),
              id: (0, _v79.createDomName)(_v0, "pause-icon")
            });
          case _v5:
            return (0, _v6.jsx)(_v92.Clock, {
              width: (0, _v47.rem)(24),
              height: (0, _v47.rem)(24),
              id: (0, _v79.createDomName)(_v0, "elapsed-time-icon")
            });
          default:
            return null;
        }
      }, [_v5, _v8, _v9, _v0]);
    return (0, _v6.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "start",
      gap: (0, _v47.rem)(8),
      minWidth: (0, _v47.rem)(82),
      userSelect: "none",
      children: [_v11, _v2 ? (0, _v6.jsx)(_v93.BokehSkeleton, {
        id: (0, _v79.createDomName)(_v0, "loader"),
        className: (0, _v79.createDomName)(_v0, "loader"),
        width: (0, _v47.rem)(60),
        height: (0, _v47.rem)(20),
        borderRadius: (0, _v47.rem)(4)
      }) : _v10]
    });
  }
  function _v96({
    id: _v0 = (0, _v79.createDomName)("header"),
    className: _v1 = (0, _v79.createDomName)("header"),
    withTopBorder: _v2 = !0,
    composerSettingsContext: {
      recordingOffset: _v3,
      recordingStartedAt: _v4,
      isRecordingPaused: _v5
    } = (0, _v16.useManager)(_v61.ComposerSettingsManager),
    composerSessionStatusContext: {
      startedAt: _v6,
      endedAt: _v7,
      streamMode: _v8,
      liveComposerStatuses: _v9
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager),
    guestSessionContext: {
      isJoined: _v10,
      isBlocked: _v11,
      sessionInfo: _v12,
      guestSessionActions: _v13
    } = (0, _v16.useManager)(_v64.GuestSessionManager),
    guestAgoraContext: {
      mediaConnectionQuality: _v14,
      mediaUid: _v15
    } = (0, _v16.useManager)(_v55.GuestAgoraManager),
    panelsContext: {
      panelActions: _v16
    } = (0, _v16.useManager)(_v69.PanelsManager)
  }) {
    let _v17 = (0, _v33.useIsVpaas)(),
      _v18 = _v12.value?.sessionName || "",
      _v19 = (0, _v39.inline)(() => _v9.isSessionLive && _v10 && _v2 ? _v80.LIVE_LAYOUT_COLOR : _v9.isSessionUnknown && _v2 ? _v80.INACTIVE_LAYOUT_COLOR : "transparent"),
      _v20 = (0, _v10.useCallback)(() => {
        _v13.leaveGuestSession(), _v16.setRightPanel(null);
      }, [_v13, _v16]);
    return (0, _v6.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      height: (0, _v47.rem)(64),
      padding: `${(0, _v47.rem)(12)} ${(0, _v47.rem)(16)}`,
      borderTop: `2px solid ${_v19}`,
      children: [(0, _v6.jsx)(_v46.Flex, {
        alignItems: "center",
        children: (0, _v6.jsx)(_v43.Header, {
          id: (0, _v79.createDomName)(_v0, "title"),
          className: (0, _v79.createDomName)(_v1, "title"),
          size: "sm",
          as: "h5",
          children: _v18
        })
      }), (0, _v6.jsxs)(_v46.Flex, {
        justifyContent: "flex-end",
        alignItems: "center",
        gap: (0, _v47.rem)(16),
        height: "100%",
        children: [_v10 ? (0, _v6.jsxs)(_v6.Fragment, {
          children: [_v9.isSessionLive ? (0, _v6.jsx)(_v86, {
            connectionQuality: _v14
          }) : null, _v9.isSessionLive ? (0, _v6.jsx)(_v95, {
            id: (0, _v79.createDomName)(_v0, "stream-duration"),
            className: (0, _v79.createDomName)(_v0, "stream-duration"),
            isLoading: !!_v11 || _v9.isSessionUnknown,
            startedAt: _v6,
            endedAt: _v7,
            recordingOffset: _v3,
            recordingStartedAt: _v4,
            isRecordingPaused: _v5,
            isRecordMode: _v8 === _v29.EComposerStreamModeType.RECORD
          }) : null, (0, _v6.jsx)(_v44.Button, {
            id: (0, _v79.createDomName)(_v0, "leave-guest-session-button"),
            className: (0, _v79.createDomName)(_v0, "leave-guest-session-button"),
            isLoading: _v15.isLoading,
            color: "white",
            backgroundColor: _v80.LIVE_LAYOUT_COLOR,
            _hover: {
              bg: _v80.LIVE_LAYOUT_COLOR
            },
            onClick: _v20,
            children: _v78.T_LEAVE_EVENT
          })]
        }) : null, _v17 ? null : (0, _v6.jsx)(_v90, {
          isLive: _v9.isSessionLive
        })]
      })]
    });
  }
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  function _v99({
    id: _v0,
    className: _v1 = (0, _v79.createDomName)("access-denied-header")
  }) {
    return (0, _v6.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      alignItems: "center",
      rowGap: (0, _v47.rem)(16),
      children: [(0, _v6.jsx)(_v98.StopBanLeft, {
        id: (0, _v79.createDomName)(_v0, "icon"),
        className: (0, _v79.createDomName)(_v1, "icon"),
        boxSize: "2xl"
      }), (0, _v6.jsx)(_v43.Header, {
        id: (0, _v79.createDomName)(_v0, "header"),
        className: (0, _v79.createDomName)(_v1, "header"),
        size: "xl",
        children: _v35.translations.accessDenied
      }), (0, _v6.jsx)(_v97.Text, {
        id: (0, _v79.createDomName)(_v0, "text"),
        className: (0, _v79.createDomName)(_v1, "text"),
        variant: "body-lg",
        children: _v35.translations.youDontHaveAccessToThisEvent
      }), (0, _v6.jsx)(_v44.Button, {
        variant: "secondary",
        size: "md",
        as: "a",
        href: "/home",
        marginTop: (0, _v47.rem)(8),
        children: _v35.translations.goToHomepage
      })]
    });
  }
  function _v100() {
    return (0, _v6.jsxs)(_v46.Flex, {
      direction: "column",
      grow: 1,
      minWidth: (0, _v47.rem)(960),
      minHeight: (0, _v47.rem)(540),
      overflow: "hidden",
      background: "background",
      children: [(0, _v6.jsx)(_v96, {}), (0, _v6.jsx)(_v46.Flex, {
        sx: _v76({
          isCentered: !0,
          withPadding: !0,
          withWrapping: !0
        }),
        children: (0, _v6.jsx)(_v99, {})
      }), (0, _v6.jsx)(_v75.LiveComposerFooter, {})]
    });
  }
  var _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0);
  let _v104 = (0, _v0.i(0).createLiveSchemaEventFactory)("vimeo.simple_live_guest_speaker_view", 7, () => ({
    ..._v103.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE
  }));
  _v0.i(0);
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0);
  let _v109 = (0, _v10.memo)(({
    isLive: _v0,
    nextOccurrenceTime: _v1
  }) => {
    var _v2;
    let _v3,
      _v4,
      _v5,
      _v6 = (0, _v108.useForceUpdate)(),
      _v7 = _v1 ? _v105.DateTime.fromISO(_v1).toLocal() : null,
      _v8 = _v7 ? _v7.diffNow(["days", "hours", "minutes"]) : null,
      _v9 = !!(!_v0 && _v8);
    if ((0, _v107.useInterval)(_v9, _v6, {
      period: 0
    }), _v0) return (0, _v6.jsxs)(_v46.Flex, {
      sx: _v77(),
      children: [(0, _v6.jsx)(_v106.Calendar, {
        boxSize: "xs"
      }), (0, _v6.jsx)(_v97.Text, {
        variant: "body-md",
        children: _v35.translations.eventStarted
      })]
    });
    if (!_v7 || !_v8) return null;
    let _v10 = _v7.toFormat("LLLL d, y 'at' t"),
      _v11 = (_v3 = Math.floor((_v2 = _v8).days), _v4 = Math.floor(_v2.hours), _v5 = Math.floor(_v2.minutes), _v3 > 0 ? 1 !== _v3 ? _v35.translations.startsInDaysHour(_v3, _v4) : 1 !== _v4 ? _v35.translations.startsInDayHours(_v3, _v4) : _v35.translations.startsInDayHour(_v3, _v4) : _v4 > 0 ? 1 !== _v4 ? _v35.translations.startsInHoursMinute(_v4, _v5) : 1 !== _v5 ? _v35.translations.startsInHourMinutes(_v4, _v5) : _v35.translations.startsInHourMinute(_v4, _v5) : _v5 > 0 ? _v35.translations.startsInMinutes(_v5) : null);
    return (0, _v6.jsxs)(_v46.Flex, {
      sx: _v77(),
      children: [(0, _v6.jsx)(_v106.Calendar, {
        boxSize: "xs"
      }), (0, _v6.jsxs)(_v46.Flex, {
        direction: "column",
        children: [(0, _v6.jsx)(_v97.Text, {
          variant: "body-md",
          children: _v10
        }), _v11 ? (0, _v6.jsx)(_v97.Text, {
          variant: "body-sm",
          color: "text-secondary",
          children: _v11
        }) : null]
      })]
    });
  });
  function _v110({
    id: _v0 = (0, _v79.createDomName)("join-form"),
    className: _v1 = (0, _v79.createDomName)("join-form"),
    guestAgoraContext: {
      isReady: _v2,
      roomParticipants: _v3,
      mediaConnectionState: _v4
    } = (0, _v16.useManager)(_v55.GuestAgoraManager, ({
      isReady: _v0,
      mediaConnectionQuality: _v1,
      roomParticipants: _v2
    }) => [_v0, _v1, _v2]),
    guestSessionContext: {
      guestSessionActions: _v5,
      sessionInfo: _v6
    } = (0, _v16.useManager)(_v64.GuestSessionManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v7
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0]),
    localMediaContext: {
      permission: _v8
    } = (0, _v16.useManager)(_v65.LocalMediaManager, ({
      permission: _v0
    }) => [_v0])
  }) {
    let _v9 = (0, _v33.useIsVpaas)(),
      _v10 = _v6?.value?.seat?.name || "?",
      _v11 = !_v2 || _v6.isLoading,
      _v12 = _v4 !== _v85.EAgoraConnectionState.CONNECTED,
      _v13 = _v11 || _v12,
      _v14 = (0, _v10.useMemo)(() => _v3.reduce((_v0, _v1) => {
        let _v2 = (0, _v102.parseConnectionTypeFromUid)(_v1.uid);
        return _v2 === _v85.EAgoraConnectionType.BROADCASTER || _v2 === _v85.EAgoraConnectionType.GUEST ? _v0 + 1 : _v0;
      }, 0), [_v3]),
      _v15 = (0, _v10.useCallback)(() => {
        _v5.joinGuestSession(), _v104("click_go_backstage");
      }, [_v5]);
    return (0, _v6.jsx)(_v46.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: (0, _v47.rem)(360),
      marginBottom: (0, _v47.rem)(64),
      justifyContent: "center",
      children: _v6.isLoading ? (0, _v6.jsx)(_v93.BokehSkeleton, {
        className: (0, _v79.createDomName)(_v1, "loader"),
        width: (0, _v47.rem)(420),
        height: (0, _v47.rem)(270),
        opacity: .25,
        borderRadius: (0, _v47.rem)(4)
      }) : (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsxs)(_v46.Flex, {
          flexDirection: "column",
          alignItems: "center",
          rowGap: (0, _v47.rem)(8),
          marginBottom: (0, _v47.rem)(24),
          children: [(0, _v6.jsx)(_v81.Box, {
            boxSize: (0, _v47.rem)(76),
            sx: {
              "& div, & img": {
                width: "100%",
                maxWidth: "100%",
                height: "100%",
                maxHeight: "100%",
                border: "none"
              },
              svg: {
                height: (0, _v47.rem)(64),
                width: (0, _v47.rem)(64)
              }
            },
            children: (0, _v6.jsx)(_v101.Avatar, {
              alt: "avatar",
              size: "2xl",
              nameProps: {
                name: _v10
              }
            })
          }), (0, _v6.jsx)(_v82.BokehTooltip, {
            label: _v35.translations.welcomeName(_v10),
            maxWidth: (0, _v47.rem)(300),
            children: (0, _v6.jsx)(_v43.Header, {
              className: (0, _v79.createDomName)(_v1, "header"),
              size: "lg",
              maxHeight: (0, _v47.rem)(72),
              overflow: "hidden",
              sx: {
                display: "-webkit-box",
                "-webkit-line-clamp": "2",
                "-webkit-box-orient": "vertical"
              },
              children: _v35.translations.welcomeName(_v10)
            })
          }), _v12 ? null : (0, _v6.jsx)(_v97.Text, {
            className: (0, _v79.createDomName)(_v1, "participants-count"),
            variant: "body-md",
            color: "text-secondary",
            children: _v35.translations.backstageCount(_v14)
          }), (0, _v6.jsx)(_v109, {
            nextOccurrenceTime: _v6.value?.nextOccurrenceTime || null,
            isLive: _v7.isSessionLive
          })]
        }), (0, _v6.jsx)(_v44.Button, {
          className: (0, _v79.createDomName)(_v1, "button"),
          variant: "primary",
          isLoading: _v13,
          isDisabled: _v13 || !_v8.isAllowed,
          onClick: _v15,
          children: _v35.translations.enterBackstage
        }), _v9 ? null : (0, _v6.jsx)(_v46.Flex, {
          className: (0, _v79.createDomName)(_v1, "agreement"),
          marginTop: (0, _v47.rem)(16),
          children: (0, _v6.jsx)(_v97.Text, {
            variant: "body-xs",
            color: "text-secondary",
            textAlign: "center",
            children: _v35.translations.joinLiveFormTermsAndPrivacy
          })
        })]
      })
    });
  }
  var _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0);
  let _v114 = _v0 => (0, _v6.jsx)(_v113.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v6.jsx)("g", {
        fill: "currentColor",
        children: (0, _v6.jsx)("path", {
          d: "M12 1.5a5 5 0 0 1 4.04 2.053 1 1 0 0 1-.095 1.29l-7.232 7.358A1 1 0 0 1 7 11.5v-5a5 5 0 0 1 5-5ZM18.487 4.1A1 1 0 1 1 19.9 5.512L17 8.414V10.5a5 5 0 0 1-5 5c-.557 0-1.2-.134-1.761-.324l-1.512 1.511a6.998 6.998 0 0 0 9.568-3.125 1 1 0 0 1 1.798.876A8.998 8.998 0 0 1 13 19.444V21.5a1 1 0 1 1-2 0v-2.056a9 9 0 0 1-3.738-1.292l-1.749 1.749A1 1 0 1 1 4.1 18.487L18.487 4.099ZM3.907 14.438a1 1 0 0 1 1.799-.876c.072.149.15.295.232.438a1 1 0 0 1-1.732 1 9.015 9.015 0 0 1-.299-.563Z"
        })
      })
    }),
    _v115 = (0, _v10.memo)((0, _v10.forwardRef)(({
      isActive: _v0
    }, _v1) => {
      let _v2 = (0, _v10.useRef)(null);
      return (0, _v10.useImperativeHandle)(_v1, () => ({
        setVolumeStyle: _v0 => {
          _v2.current && _v2.current.setAttribute("height", `${8 * _v0}`);
        }
      })), (0, _v6.jsxs)(_v81.Box, {
        as: "svg",
        width: "18",
        height: "16",
        viewBox: "0 0 16 16",
        fill: _v0 ? _v80.CONNECTED_STATUS_COLOR : _v80.DISCONNECTED_STATUS_COLOR,
        children: [(0, _v6.jsx)("rect", {
          ref: _v2,
          width: "4",
          height: "0",
          transform: "matrix(1 0 0 -1 6 9)"
        }), (0, _v6.jsx)("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M9.59999 6.39999V3.2C9.59999 2.31634 8.88365 1.6 7.99999 1.6C7.11634 1.6 6.4 2.31634 6.4 3.2V6.39999C6.4 7.28365 7.11634 7.99999 7.99999 7.99999C8.88365 7.99999 9.59999 7.28365 9.59999 6.39999ZM7.99999 0C6.23268 0 4.8 1.43269 4.8 3.2V6.39999C4.8 8.1673 6.23268 9.59999 7.99999 9.59999C9.7673 9.59999 11.2 8.1673 11.2 6.39999V3.2C11.2 1.43269 9.7673 0 7.99999 0ZM12.751 7.08672C12.8135 6.64934 13.2188 6.3455 13.6562 6.40806C14.0936 6.47062 14.3974 6.8759 14.3349 7.31327C13.9247 10.1805 11.6343 12.3954 8.79999 12.7502V16H7.19999V12.7503C4.36532 12.3957 2.07457 10.1808 1.66441 7.31327C1.60185 6.8759 1.9057 6.47062 2.34307 6.40806C2.78045 6.3455 3.18573 6.64934 3.24829 7.08672C3.58405 9.43406 5.60414 11.2 7.99963 11.2C10.3951 11.2 12.4152 9.43406 12.751 7.08672Z"
        })]
      });
    }));
  var _v116 = _v0.i(0),
    _v117 = _v0.i(0),
    _v118 = _v0.i(0);
  let _v119 = (0, _v10.memo)(function ({
    id: _v0,
    className: _v1,
    isConnected: _v2,
    isMuted: _v3,
    track: _v4,
    isActive: _v5
  }) {
    let _v6 = (0, _v10.useRef)(null),
      _v7 = (0, _v39.inline)(() => void 0 !== _v5 ? _v5 : !!((Array.isArray(_v4) ? _v4 : [_v4]).some(_v0 => {
        let _v1 = _v0?.getMediaStreamTrack();
        return !!(_v1 && "live" === _v1.readyState);
      }) && _v2)),
      _v8 = (0, _v10.useCallback)(_v0 => {
        _v6.current && _v6.current.setVolumeStyle(_v0);
      }, []),
      _v9 = (0, _v10.useCallback)(_v0 => {
        let _v1 = (Array.isArray(_v0) ? _v0 : [_v0]).reduce((_v0, _v1) => {
            let _v2 = (0, _v116.getTrackVolumeSafely)(_v1, 0);
            return _v2 > _v0 ? _v2 : _v0;
          }, 0),
          _v2 = _v1 >= _v26.liveMediaConfig.AGORA.VOLUME_CHECK_THRESHOLD / 100 ? _v1 : 0;
        _v8((0, _v117.normalizeNumberTo)(_v2, .5));
      }, [_v8]);
    return (0, _v10.useEffect)(() => {
      if (Array.isArray(_v4) ? _v4.length : _v4) {
        _v9(_v4);
        let _v0 = (0, _v118.registerInterval)(() => _v9(_v4), _v26.liveMediaConfig.AGORA.VOLUME_CHECK_INTERVAL, "sourceVolume");
        return () => {
          _v9(), (0, _v118.unRegisterInterval)(_v0);
        };
      }
    }, [_v4, _v9]), (0, _v6.jsx)(_v46.Flex, {
      id: _v0,
      className: _v1,
      justifyContent: "center",
      alignItems: "center",
      height: (0, _v47.rem)(20),
      zIndex: 50,
      children: _v2 && _v3 ? (0, _v6.jsx)(_v114, {
        width: 18,
        color: "red.500"
      }) : (0, _v6.jsx)(_v115, {
        isActive: _v7,
        ref: _v6
      })
    });
  });
  var _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0);
  function _v125({
    id: _v0,
    className: _v1,
    cameraPermissionState: _v2
  }) {
    return (0, _v6.jsx)(_v46.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      position: "absolute",
      padding: "0 15%",
      color: "white",
      gap: 12,
      sx: (0, _v122.createSvgStyle)({
        size: 32
      }),
      children: "denied" === _v2 ? (0, _v6.jsxs)(_v6.Fragment, {
        children: [(0, _v6.jsx)(_v123.InfoCircle, {}), (0, _v6.jsx)("div", {
          children: _v35.translations.cameraMicBlocked(_v124.vimeoConfig.SUPPORT.DEVICE_PERMISSIONS)
        })]
      }) : _v35.translations.getStartedEnableCam
    });
  }
  var _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0);
  function _v139({
    id: _v0 = "",
    className: _v1 = "",
    panelsContext: {
      rightPanel: _v2,
      panelActions: _v3
    } = (0, _v16.useManager)(_v69.PanelsManager)
  }) {
    let _v4 = (0, _v10.useCallback)(() => {
        _v3.toggleRightPanel(_v138.ERightPanelId.CHAT);
      }, [_v3]),
      _v5 = _v2 === _v138.ERightPanelId.CHAT;
    return (0, _v6.jsx)(_v82.BokehTooltip, {
      label: _v5 ? _v35.translations.hideChat : _v35.translations.showChat,
      shouldWrapChildren: !1,
      children: (0, _v6.jsx)(_v136.IconButton, {
        id: (0, _v79.createDomName)(_v0, "chat-button"),
        className: (0, _v79.createDomName)(_v1, "chat-button"),
        isActive: _v5,
        variant: "secondary",
        "aria-label": _v5 ? _v35.translations.hideChat : _v35.translations.showChat,
        height: "100%",
        alignSelf: "center",
        icon: (0, _v6.jsx)(_v137.PanelChatIcon, {
          isActive: _v5,
          isGlobal: !1,
          isManagementAccessed: !0
        }),
        onClick: _v4
      })
    });
  }
  var _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0);
  function _v143({
    id: _v0 = "",
    className: _v1 = "",
    guestSessionContext: {
      mediaSettings: {
        isFullscreenMode: _v2
      },
      sessionMediaActions: _v3
    } = (0, _v16.useManager)(_v64.GuestSessionManager),
    panelsContext: {
      panelActions: _v4
    } = (0, _v16.useManager)(_v69.PanelsManager)
  }) {
    let _v5 = (0, _v10.useCallback)(() => {
      _v3.setFullscreenMode(!_v2), _v2 ? _v104("leave_fullscreen") : (_v4.setLeftPanel(null), _v4.setRightPanel(null), _v104("enter_fullscreen"));
    }, [_v3, _v4, _v2]);
    return (0, _v6.jsx)(_v82.BokehTooltip, {
      label: _v2 ? _v35.translations.exitFullscreen : _v35.translations.fullscreen,
      shouldWrapChildren: !1,
      children: (0, _v6.jsx)(_v136.IconButton, {
        id: (0, _v142.createLiveDomName)(_v0, "fullscreen-button"),
        className: (0, _v142.createLiveDomName)(_v1, "fullscreen-button"),
        "aria-label": _v2 ? _v35.translations.exitFullscreen : _v35.translations.fullscreen,
        variant: "secondary",
        alignSelf: "center",
        icon: _v2 ? (0, _v6.jsx)(_v140.FullscreenExit, {}) : (0, _v6.jsx)(_v141.Fullscreen, {}),
        isDisabled: !_v23.browserConfig.FEATURE.CAN_USE_FULLSCREEN_MODE,
        onClick: _v5
      })
    });
  }
  var _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0);
  function _v147({
    localMediaContext: {
      screen: _v0,
      mediaActions: _v1
    } = (0, _v16.useManager)(_v65.LocalMediaManager),
    roomScreenShareContext: {
      roomScreenShareActions: _v2,
      isCurrentlyAllowed: _v3,
      isCurrentlyPending: _v4,
      pendingScreenShareId: _v5,
      activeScreenShareId: _v6,
      isReady: _v7
    } = (0, _v16.useManager)(_v60.RoomScreenShareManager),
    guestSessionContext: {
      sessionInfo: {
        value: _v8
      }
    } = (0, _v16.useManager)(_v64.GuestSessionManager),
    sceneContext: {
      activeScene: _v9
    } = (0, _v16.useManager)(_v51.SceneManager, ({
      activeScene: _v0
    }) => [_v0])
  }) {
    let _v10 = _v8?.seat?.id || null,
      _v11 = (0, _v146.isGuestAlreadyInScene)(_v10, _v9),
      _v12 = !!(_v3 && _v0.track),
      _v13 = !!(_v5 && !_v4),
      _v14 = !(_v6 && !_v3) && _v11 || _v3,
      _v15 = (0, _v145.isScreenAccessRejectedError)(_v0.error),
      _v16 = (0, _v10.useCallback)(() => {
        if (_v104("click_share_screen"), _v14) return _v1.startScreenSharing();
        _v4 ? _v2.cancelPermissionsRequest() : _v2.askForPermissions();
      }, [_v2, _v1, _v4, _v14]),
      _v17 = (0, _v10.useCallback)(() => {
        _v1.stopScreenSharing();
      }, [_v1]),
      _v18 = "",
      _v19 = "text-primary",
      _v20 = _v15 || _v13 && !_v3 || _v4 || !_v7;
    return _v15 ? (_v19 = "grayscale.500", _v18 = _v35.translations.screenShareDeniedAccess) : _v0.track ? (_v19 = "text-button-inverted", _v18 = _v35.translations.screenShareStop) : _v14 ? _v18 = _v35.translations.screenShareStart : (_v4 && (_v19 = "grayscale.500"), _v18 = _v35.translations.screenShareRequest), (0, _v6.jsx)(_v82.BokehTooltip, {
      label: _v18,
      shouldWrapChildren: !1,
      children: (0, _v6.jsx)(_v136.IconButton, {
        id: (0, _v142.createLiveDomName)("screen-button"),
        "aria-label": _v18,
        variant: _v12 ? "primary" : "secondary",
        alignSelf: "center",
        icon: (0, _v6.jsx)(_v144.ScreenShare, {
          color: _v19
        }),
        isDisabled: _v20,
        isLoading: _v0.isLoading,
        onClick: _v0.track ? _v17 : _v16
      })
    });
  }
  var _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0);
  function _v152({
    id: _v0 = (0, _v142.createLiveDomName)("slides-controls"),
    className: _v1 = (0, _v142.createLiveDomName)("slides-controls"),
    isStandaloneBlock: _v2 = !1,
    sceneContext: {
      sceneActions: _v3,
      activeScene: _v4
    } = (0, _v16.useManager)(_v51.SceneManager, ({
      sceneInProgram: _v0,
      activeScene: _v1
    }) => [_v0, _v1]),
    graphicsContext: {
      slidesList: _v5
    } = (0, _v16.useManager)(_v50.GraphicsManager, ({
      slidesList: _v0
    }) => [_v0]),
    guestSessionContext: {
      sessionInfo: {
        value: _v6
      }
    } = (0, _v16.useManager)(_v64.GuestSessionManager)
  }) {
    let _v7 = _v6?.seat?.id || null,
      _v8 = (0, _v146.isGuestAlreadyInScene)(_v7, _v4),
      _v9 = (0, _v150.useGraphicFromScene)(_v4, _v151.EGraphicsDescriptorType.SLIDES);
    if (!_v4 || !_v8 || !_v9) return null;
    {
      let _v0 = (0, _v6.jsx)(_v6.Fragment, {
        children: (0, _v6.jsxs)(_v46.Flex, {
          alignItems: "center",
          justifyContent: "center",
          marginLeft: (0, _v47.rem)(8),
          gap: (0, _v47.rem)(8),
          children: [(0, _v6.jsx)(_v148.PresentationLine, {
            id: (0, _v142.createLiveDomName)(_v0, "icon"),
            className: (0, _v142.createLiveDomName)(_v1, "icon"),
            boxSize: (0, _v47.rem)(24)
          }), (0, _v6.jsx)(_v149.SlidesControlPanel, {
            id: _v0,
            className: _v1,
            sceneId: _v4?.id,
            descriptor: _v9,
            slides: _v5,
            onSetSceneSlideIndex: _v3.setSceneSlideIndex
          })]
        })
      });
      return _v2 ? (0, _v6.jsx)(_v46.Flex, {
        padding: (0, _v47.rem)(4),
        alignItems: "center",
        minHeight: (0, _v47.rem)(40),
        gap: (0, _v47.rem)(4),
        borderRadius: (0, _v47.rem)(8),
        background: "surface",
        marginBottom: (0, _v47.rem)(16),
        children: _v0
      }) : _v0;
    }
  }
  let _v153 = (0, _v10.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.Teleprompter
  })));
  function _v154({
    id: _v0 = (0, _v79.createDomName)("live-guest-media-controls"),
    className: _v1 = (0, _v79.createDomName)("live-guest-media-controls"),
    isScreenSharingEnabled: _v2 = !1,
    isSlidesControlsEnabled: _v3 = !1,
    localMediaContext: {
      isMediaAllowed: _v4,
      isBrowserPrompted: _v5,
      permission: _v6,
      audio: _v7,
      video: _v8,
      playbackDeviceId: _v9,
      videoDevices: _v10,
      audioDevices: _v11,
      playbackDevices: _v12,
      mediaActions: _v13,
      videoBackgroundProcessor: _v14
    } = (0, _v16.useManager)(_v65.LocalMediaManager),
    guestSessionContext: {
      sessionInfo: _v15,
      mediaSettings: {
        isLocalMirrored: _v16
      },
      sessionMediaActions: _v17,
      isJoined: _v18
    } = (0, _v16.useManager)(_v64.GuestSessionManager, ({
      mediaSettings: _v0,
      isJoined: _v1
    }) => [_v0, _v1]),
    composerSessionStatusContext: {
      liveComposerStatusGetters: _v19
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager)
  }) {
    let {
        isOpen: _v20,
        onOpen: _v21,
        onClose: _v22
      } = (0, _v126.useDisclosure)(),
      {
        initialState: {
          sessionId: _v23,
          sessionType: _v24,
          sessionCode: _v25,
          sessionApplicationType: _v26
        }
      } = (0, _v54.useLiveGlobals)(),
      _v27 = _v19.isEnded(),
      _v28 = _v18 && !_v27,
      _v29 = _v15?.value?.sessionIsDemo ?? !1,
      _v30 = _v5 || !_v4 || !_v6.isAllowed,
      _v31 = (0, _v10.useCallback)(() => {
        (0, _v135.trackLiveAction)("live_script_generation_started");
      }, []);
    return (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v46.Flex, {
        alignItems: "center",
        justifyContent: "stretch",
        borderRadius: (0, _v47.rem)(8),
        height: (0, _v47.rem)(48),
        padding: (0, _v47.rem)(4),
        children: (0, _v6.jsxs)(_v46.Flex, {
          height: "100%",
          gap: (0, _v47.rem)(8),
          children: [(0, _v6.jsx)(_v130.AudioControlButton, {
            id: (0, _v79.createDomName)(_v0, "audio-control-button"),
            className: (0, _v79.createDomName)(_v1, "audio-control-button"),
            place: _v29.EComposerApplicationType.GUEST,
            isJoined: _v18,
            isDisabled: _v30,
            onSettingsClicked: _v21
          }), (0, _v6.jsx)(_v132.VideoControlButton, {
            id: (0, _v79.createDomName)(_v0, "video-control-button"),
            className: (0, _v79.createDomName)(_v1, "video-control-button"),
            place: _v29.EComposerApplicationType.GUEST,
            isDisabled: _v30,
            onSettingsClicked: _v21
          }), _v18 ? (0, _v6.jsx)(_v139, {
            id: _v0
          }) : null, _v2 ? (0, _v6.jsx)(_v147, {}) : null, _v28 ? (0, _v6.jsx)(_v7.LiveErrorBoundary, {
            component: "TeleprompterButton",
            children: (0, _v6.jsx)(_v133.TeleprompterButton, {
              id: _v0,
              isDisabled: _v15.isLoading || _v29,
              isDemo: _v29,
              isGuest: !0
            })
          }) : null, _v3 ? (0, _v6.jsx)(_v152, {
            id: _v0
          }) : null, _v18 ? (0, _v6.jsx)(_v143, {
            id: _v0
          }) : null]
        })
      }), _v28 && (0, _v6.jsx)(_v7.LiveErrorBoundary, {
        component: "Teleprompter",
        children: (0, _v6.jsx)(_v10.Suspense, {
          children: (0, _v6.jsx)(_v153, {
            session: `${_v26}_${_v24}_${_v23}_${_v25}`,
            client: "live",
            audioTrack: _v7.track?.getMediaStreamTrack(),
            guestUserInfo: {
              composerId: _v23,
              composerType: _v24,
              guestCode: _v25
            },
            getClientAnalyticContext: () => (0, _v134.newLiveCtx)({
              live_feature: "teleprompter",
              is_guest_speaker: !0
            }),
            onScriptGenerationStarted: _v31
          })
        })
      }), (0, _v6.jsxs)(_v40.Modal, {
        scrollBehavior: "inside",
        returnFocusOnClose: !1,
        isOpen: _v20,
        onClose: _v22,
        children: [(0, _v6.jsx)(_v41.ModalOverlay, {}), (0, _v6.jsxs)(_v42.ModalContent, {
          borderRadius: (0, _v47.rem)(8),
          width: "fit-content",
          maxWidth: "96vw",
          maxH: "100dvh",
          children: [(0, _v6.jsx)(_v127.ModalHeader, {
            children: (0, _v6.jsx)(_v43.Header, {
              fontWeight: "bold",
              size: "md",
              children: _v35.translations.cameraBackground
            })
          }), (0, _v6.jsx)(_v128.ModalCloseButton, {}), (0, _v6.jsx)(_v129.ModalBody, {
            borderRadius: (0, _v47.rem)(8),
            paddingBottom: 0,
            children: (0, _v6.jsx)(_v131.MediaDevicesSettingsModalContent, {
              id: (0, _v79.createDomName)(_v0, "settings-modal"),
              className: (0, _v79.createDomName)(_v1, "settings-modal"),
              video: _v8,
              audio: _v7,
              playbackDeviceId: _v9,
              videoDevices: _v10,
              audioDevices: _v11,
              playbackDevices: _v12,
              isMirrored: _v16,
              onVideoMirroringChanged: _v17.setLocalMirrored,
              onAudioDeviceChanged: _v13.setAudioDevice,
              onVideoDeviceChanged: _v13.setVideoDevice,
              onPlaybackDeviceChanged: _v13.setPlaybackDevice,
              onToggleVideoBlur: _v13.toggleVideoBlur,
              onSelectBackgroundImage: _v13.setVideoBackgroundImage,
              onClearBackground: _v13.clearVideoBackground,
              isBackgroundEffectAllowed: !!_v14
            })
          })]
        })]
      })]
    });
  }
  function _v155({
    id: _v0 = (0, _v79.createDomName)("join-live-preview"),
    className: _v1 = (0, _v79.createDomName)("join-live-preview"),
    guestSessionContext: {
      sessionInfo: {
        value: _v2
      },
      mediaSettings: _v3
    } = (0, _v16.useManager)(_v64.GuestSessionManager),
    guestAgoraContext: {
      mediaConnectionQuality: _v4
    } = (0, _v16.useManager)(_v55.GuestAgoraManager, ({
      mediaConnectionQuality: _v0
    }) => [_v0.uplinkNetworkQuality, _v0.downlinkNetworkQuality]),
    localMediaContext: {
      video: _v5,
      audio: _v6,
      permission: _v7,
      isBrowserPrompted: _v8
    } = (0, _v16.useManager)(_v65.LocalMediaManager),
    graphicsContext: {
      theme: _v9
    } = (0, _v16.useManager)(_v50.GraphicsManager, ({
      theme: _v0
    }) => [_v0])
  }) {
    let _v10 = (0, _v116.getActiveAgoraSourceTrack)(_v5.isMuted ? null : _v5.track),
      _v11 = !!(_v6.track && _v5.track),
      _v12 = !_v7.camera?.state || _v7.camera?.state === "granted",
      _v13 = _v2?.seat || null;
    return (0, _v6.jsxs)(_v46.Flex, {
      maxWidth: (0, _v47.rem)(640),
      width: "70%",
      direction: "column",
      children: [(0, _v6.jsxs)(_v46.Flex, {
        background: _v122.PREVIEW_GRADIENT,
        position: "relative",
        overflow: "hidden",
        maxWidth: (0, _v47.rem)(640),
        maxHeight: (0, _v47.rem)(360),
        borderRadius: "md",
        children: [(0, _v6.jsx)(_v120.PreviewSizer, {
          children: (0, _v6.jsx)(_v46.Flex, {
            id: (0, _v79.createDomName)(_v0, "wrapper"),
            className: (0, _v79.createDomName)(_v1, "wrapper"),
            minWidth: (0, _v47.rem)(_v24.graphicsConfig.SCENE.MIN_WIDTH),
            children: _v12 && !_v8 ? (0, _v6.jsxs)(_v6.Fragment, {
              children: [_v13 ? (0, _v6.jsx)(_v111.AgoraStreamAvatar, {
                avatarSrc: void 0,
                name: _v13.name,
                colorSeed: _v13.id,
                fontFamily: _v9?.font
              }) : null, (0, _v6.jsx)(_v112.AgoraMediaTrackPreview, {
                id: _v0,
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                position: "absolute",
                isMirrored: _v3.isLocalMirrored,
                track: _v10
              })]
            }) : (0, _v6.jsx)(_v125, {
              id: (0, _v79.createDomName)(_v0, "no-camera-access-granted"),
              className: (0, _v79.createDomName)(_v1, "no-camera-access-granted"),
              cameraPermissionState: _v7.camera?.state
            })
          })
        }), (0, _v6.jsx)(_v81.Box, {
          position: "absolute",
          right: (0, _v47.rem)(12),
          bottom: (0, _v47.rem)(8),
          zIndex: 20,
          children: (0, _v6.jsx)(_v119, {
            isConnected: _v11,
            track: _v6.track,
            isMuted: _v6.isMuted
          })
        }), (0, _v6.jsxs)(_v46.Flex, {
          position: "absolute",
          left: (0, _v47.rem)(12),
          bottom: (0, _v47.rem)(12),
          color: "white",
          children: [(0, _v6.jsx)(_v121.LiveSourceStatusIndicator, {
            isConnected: _v11,
            networkQuality: _v4
          }), _v13 ? _v13.name : ""]
        })]
      }), (0, _v6.jsx)(_v46.Flex, {
        mt: (0, _v47.rem)(16),
        justifyContent: "center",
        children: (0, _v6.jsx)(_v154, {})
      })]
    });
  }
  function _v156() {
    return (0, _v6.jsxs)(_v46.Flex, {
      direction: "column",
      grow: 1,
      minWidth: (0, _v47.rem)(960),
      minHeight: (0, _v47.rem)(540),
      overflow: "hidden",
      background: "background",
      children: [(0, _v6.jsx)(_v96, {}), (0, _v6.jsx)(_v46.Flex, {
        sx: _v76({
          isCentered: !0,
          withPadding: !0
        }),
        children: (0, _v6.jsxs)(_v46.Flex, {
          width: "100%",
          justifyContent: "center",
          columnGap: (0, _v47.rem)(96),
          children: [(0, _v6.jsx)(_v155, {}), (0, _v6.jsx)(_v110, {})]
        })
      }), (0, _v6.jsx)(_v75.LiveComposerFooter, {})]
    });
  }
  var _v157 = _v0.i(0),
    _v158 = _v0.i(0),
    _v159 = _v0.i(0),
    _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0);
  function _v166({
    id: _v0 = (0, _v79.createDomName)("preview-pause"),
    className: _v1 = (0, _v79.createDomName)("preview-pause")
  }) {
    return (0, _v6.jsx)(_v46.Flex, {
      id: _v0,
      className: _v1,
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      children: (0, _v6.jsx)(_v46.Flex, {
        borderRadius: "50%",
        width: (0, _v47.rem)(78),
        height: (0, _v47.rem)(78),
        background: "background",
        justifyContent: "center",
        alignItems: "center",
        children: (0, _v6.jsx)(_v91.PauseFilled, {
          id: (0, _v79.createDomName)(_v0, "icon"),
          className: (0, _v79.createDomName)(_v1, "icon"),
          width: (0, _v47.rem)(32),
          height: (0, _v47.rem)(32)
        })
      })
    });
  }
  var _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0);
  let _v173 = "guest-camera-position-hint__tip";
  function _v174({
    position: _v0
  }) {
    return (0, _v6.jsx)(_v81.Box, {
      position: "absolute",
      left: `${_v0.left}%`,
      top: `${_v0.top}%`,
      width: `${_v0.width}%`,
      height: `${_v0.height}%`,
      overflow: "hidden",
      zIndex: _v24.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_CONTROLS,
      sx: {
        [`& .${_v173}`]: {
          opacity: 0,
          transition: "opacity 0.15s ease"
        },
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.6)"
        },
        [`&:hover .${_v173}`]: {
          opacity: 1
        }
      },
      children: (0, _v6.jsx)(_v162.Center, {
        className: _v173,
        width: "100%",
        height: "100%",
        padding: (0, _v47.rem)(8),
        textAlign: "center",
        children: (0, _v6.jsx)(_v97.Text, {
          variant: "body-xs",
          color: "white",
          children: _v35.translations.cameraPositionGuestHint
        })
      })
    });
  }
  var _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0);
  async function _v178({
    baseUrl: _v0,
    select: _v1,
    where: {
      liveEventId: _v2
    },
    query: _v3,
    ..._v4
  }) {
    return (0, _v176.measureLatency)("getLiveEventVideoStats", "GET", async () => {
      let _v0 = await fetch(`${_v0}/live_events/${_v2}/video_stats?${(0, _v177.searchQueryString)(_v3)}&fields=${_v1.map(_v177.intoSnakeCase).join(",")}`, {
        ..._v4,
        method: "GET"
      });
      if (!_v0.ok) throw new _v177.NetworkError("A network error occurred", _v0.status, _v0);
      if (204 === _v0.status) return null;
      if (!_v0.headers.get("content-type")?.match(/^application\/(.+)?json$/)) throw Error("Expected JSON response");
      let _v1 = await _v0.json();
      return (0, _v177.deepCamelCase)(_v1);
    });
  }
  var _v179 = _v0.i(0),
    _v180 = _v0.i(0),
    _v181 = _v0.i(0),
    _v182 = _v0.i(0);
  function _v183(_v0, _v1) {
    let _v2 = "function" == typeof _v0 ? _v0() : _v0,
      {
        baseUrl: _v3,
        jwt: _v4,
        xVimeoPage: _v5,
        locale: _v6
      } = (0, _v182.useGctlConfig)();
    return (0, _v179.default)(_v2 ? `/live_events/${_v2.where.liveEventId}/video_stats${(0, _v181.serializeQuery)(_v2)}` : () => null, _v2 ? () => _v178({
      ..._v2,
      headers: {
        ..._v2.headers,
        "Content-Type": "application/json",
        Authorization: _v4 ? `jwt ${_v4}` : "",
        "Vimeo-Page": `${_v5}`,
        "Accept-Language": _v6 ?? "en"
      },
      baseUrl: _v3
    }) : null, _v1);
  }
  "true" === _v175.default.env.STORYBOOK && (0, _v181.assignMswData)(_v183, {
    endpoint: "/live_events/:liveEventId/video_stats",
    method: "GET"
  }), "true" === _v175.default.env.STORYBOOK && (0, _v181.assignMswData)(function () {
    let {
        mutate: _v0
      } = (0, _v180.useSWRConfig)(),
      {
        baseUrl: _v1,
        jwt: _v2,
        xVimeoPage: _v3,
        locale: _v4
      } = (0, _v182.useGctlConfig)(),
      [_v5, _v6] = (0, _v181.useInternalState)();
    return [(0, _v10.useCallback)(async _v0 => {
      _v6({
        type: "REQUEST"
      });
      try {
        let _v0 = await _v0(`/live_events/${_v0.where.liveEventId}/video_stats${(0, _v181.serializeQuery)(_v0)}`, _v178({
          ..._v0,
          baseUrl: _v1,
          headers: {
            ..._v0.headers,
            "Content-Type": "application/json",
            Authorization: _v2 ? `jwt ${_v2}` : "",
            "Vimeo-Page": `${_v3}`,
            "Accept-Language": _v4 ?? "en"
          }
        }));
        _v6({
          type: "SUCCESS",
          payload: _v0
        });
      } catch (_v0) {
        _v6({
          type: "FAILURE",
          payload: _v0
        });
      }
    }, [_v1, _v3, _v2, _v4, _v6]), _v5];
  }, {
    endpoint: "/live_events/:liveEventId/video_stats",
    method: "GET"
  });
  var _v184 = _v0.i(0);
  function _v185({
    id: _v0 = (0, _v79.createDomName)("guest-viewers-count"),
    className: _v1 = (0, _v79.createDomName)("guest-viewers-count")
  } = {}) {
    let {
        liveComposerStatuses: {
          isSessionLive: _v2
        }
      } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager),
      {
        sessionId: _v3
      } = (0, _v16.useManager)(_v64.GuestSessionManager),
      {
        data: _v4
      } = _v183(() => _v2 && _v3 ? {
        where: {
          liveEventId: String(_v3)
        },
        select: ["viewers"]
      } : null, {
        refreshInterval: _v25.liveApplicationConfig.EVENT.STREAM_STATS_POLLING_INTERVAL
      }),
      _v5 = (0, _v10.useMemo)(() => _v4 ? {
        plays: null,
        totalViewTime: null,
        viewers: {
          current: _v4.viewers.current,
          peak: _v4.viewers.peak
        }
      } : null, [_v4]);
    return _v2 ? (0, _v6.jsx)(_v184.PreviewWatchersCount, {
      id: _v0,
      className: _v1,
      stats: _v5
    }) : null;
  }
  function _v186({
    id: _v0 = (0, _v79.createDomName)("preview-scene"),
    className: _v1 = (0, _v79.createDomName)("preview-scene"),
    guestSessionContext: {
      mediaSettings: _v2
    } = (0, _v16.useManager)(_v64.GuestSessionManager, ({
      mediaSettings: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      streamMode: _v3,
      liveComposerStatusGetters: _v4
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager),
    sceneContext: {
      sceneInProgram: _v5,
      activeScene: _v6
    } = (0, _v16.useManager)(_v51.SceneManager, ({
      sceneInProgram: _v0,
      activeScene: _v1
    }) => [_v0, _v1]),
    graphicsContext: {
      theme: _v7,
      logoList: _v8,
      lowerthirdList: _v9,
      fullscreenList: _v10,
      pollList: _v11,
      agoraMediaList: _v12,
      globalList: _v13,
      slidesList: _v14
    } = (0, _v16.useManager)(_v50.GraphicsManager),
    composerSettingsContext: {
      globalLogo: _v15,
      isRecordingPaused: _v16
    } = (0, _v16.useManager)(_v61.ComposerSettingsManager),
    guestContext: {
      guests: _v17
    } = (0, _v16.useManager)(_v59.GuestsManager, ({
      guests: _v0
    }) => [_v0]),
    agoraContext: {
      role: _v18,
      connectionConfig: _v19,
      mediaUid: _v20,
      roomVolumeSmooth: _v21
    } = (0, _v16.useManager)(_v55.GuestAgoraManager, ({
      mediaUid: _v0,
      role: _v1,
      connectionConfig: _v2,
      roomVolumeSmooth: _v3
    }) => [_v0, _v2, _v1, _v3]),
    remoteMediaContext: {
      roomMedia: _v22,
      remoteMediaActions: _v23
    } = (0, _v16.useManager)(_v66.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    roomScreenShareContext: {
      activeScreenShareId: _v24,
      isCurrentlyAllowed: _v25
    } = (0, _v16.useManager)(_v60.RoomScreenShareManager, ({
      activeScreenShareId: _v0,
      isCurrentlyAllowed: _v1
    }) => [_v0, _v1]),
    localMediaContext: {
      video: _v26,
      screen: _v27
    } = (0, _v16.useManager)(_v65.LocalMediaManager)
  }) {
    let _v28 = (0, _v10.useRef)(null),
      _v29 = _v4.isRecordStarted(),
      _v30 = _v4.isStreaming(),
      _v31 = _v4.isEnded(),
      _v32 = (0, _v169.useSceneScreenShare)(_v24, _v19?.screen.uid || null, _v18 !== _v85.EClientRole.HOST || _v27.isMuted ? null : _v27.track, _v6, _v22),
      _v33 = _v26.isMuted ? null : _v26.track,
      {
        settings: _v34
      } = (0, _v172.useOrionSettings)(),
      _v35 = _v34.enable_browser_studio_camera_position_presets && !!_v6 && !!_v32 && _v25 && !!_v33 && !_v6?.meta?.disableSpeakerPip,
      _v36 = _v6?.meta?.speakerPosition ?? _v24.graphicsConfig.GRAPHICS_POSITIONING.SCREEN_SPEAKER_POSITION,
      _v37 = (0, _v171.getSceneOverlayColorNew)(_v30, _v31, !!_v5, !0, _v16),
      _v38 = (0, _v10.useCallback)(_v0 => _v23.setBulkMediaQuality(_v0), [_v23]),
      _v39 = (0, _v170.useSceneStatusLabel)(!!_v5, _v30, _v29, _v16);
    if ((0, _v168.useCanvasPreviewScaleObserver)(_v28, _v24.graphicsConfig.SCENE.LAYOUT_HEIGHT_LIVE, void 0, void 0, _v2.isFullscreenMode), _v31) return (0, _v6.jsx)(_v165.PreviewLayout, {
      ref: _v28,
      id: _v0,
      className: _v1,
      isFullscreenMode: _v2.isFullscreenMode,
      children: (0, _v6.jsx)(_v164.PreviewCanvas, {
        id: (0, _v79.createDomName)(_v0, "canvas"),
        className: (0, _v79.createDomName)(_v1, "canvas"),
        background: _v80.NEUTRAL_PREVIEW_CANVAS_BACKGROUND,
        children: (0, _v6.jsx)(_v120.PreviewSizer, {
          id: (0, _v79.createDomName)(_v0, "sizer"),
          className: (0, _v79.createDomName)(_v1, "sizer"),
          children: (0, _v6.jsx)(_v162.Center, {
            id: (0, _v79.createDomName)(_v0, "event-ended-notification"),
            position: "absolute",
            inset: 0,
            color: "text-primary",
            width: "100%",
            height: "100%",
            userSelect: "none",
            fontSize: (0, _v47.rem)(16),
            padding: (0, _v47.rem)(12),
            children: _v35.translations.eventEnded
          })
        })
      })
    });
    let _v40 = _v30 && _v16,
      _v41 = !!_v39;
    return (0, _v6.jsx)(_v165.PreviewLayout, {
      ref: _v28,
      id: _v0,
      className: _v1,
      isFullscreenMode: _v2.isFullscreenMode,
      children: (0, _v6.jsx)(_v164.PreviewCanvas, {
        id: (0, _v79.createDomName)(_v0, "canvas"),
        className: (0, _v79.createDomName)(_v1, "canvas"),
        background: _v6?.meta?.background,
        children: (0, _v6.jsxs)(_v120.PreviewSizer, {
          id: (0, _v79.createDomName)(_v0, "sizer"),
          className: (0, _v79.createDomName)(_v1, "sizer"),
          children: [_v40 ? (0, _v6.jsx)(_v46.Flex, {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
            children: (0, _v6.jsx)(_v166, {})
          }) : null, _v41 ? (0, _v6.jsxs)(_v46.Flex, {
            position: "absolute",
            left: (0, _v47.rem)(12),
            top: (0, _v47.rem)(12),
            gap: (0, _v47.rem)(8),
            zIndex: _v24.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL,
            children: [(0, _v6.jsx)(_v167.PreviewStateLabel, {
              id: (0, _v79.createDomName)(_v0, "scene-state-label"),
              className: (0, _v79.createDomName)(_v1, "scene-state-label"),
              color: _v37,
              position: "static",
              children: _v39
            }), _v39 === _v78.T_LIVE ? (0, _v6.jsx)(_v185, {
              id: (0, _v79.createDomName)(_v0, "viewers-count"),
              className: (0, _v79.createDomName)(_v1, "viewers-count")
            }) : null]
          }) : null, _v6 ? (0, _v6.jsx)(_v163.SceneRenderer, {
            canEdit: !1,
            emptyStatePlaceholder: null,
            isInProgram: !0,
            scene: _v6,
            theme: _v7,
            logoList: _v8,
            lowerthirdList: _v9,
            fullscreenList: _v10,
            globalList: _v13,
            pollList: _v11,
            agoraMediaList: _v12,
            guests: _v17,
            slidesList: _v14,
            localMediaUid: _v20.value,
            roomMedia: _v22,
            roomVolume: _v21,
            localVideo: _v33,
            activeScreen: _v32,
            globalLogo: _v15,
            isLocalMirrored: _v2.isLocalMirrored,
            onQualityChangeRequired: _v38
          }) : (0, _v6.jsx)(_v46.Flex, {
            id: (0, _v79.createDomName)(_v0, "no-content-notification"),
            className: (0, _v79.createDomName)(_v1, "no-content-notification"),
            position: "absolute",
            left: 0,
            top: 0,
            opacity: .5,
            color: "text-primary",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            userSelect: "none",
            fontSize: (0, _v47.rem)(14),
            padding: (0, _v47.rem)(12),
            children: _v35.translations.noContentInStream
          }), _v35 ? (0, _v6.jsx)(_v174, {
            position: _v36
          }) : null]
        })
      })
    });
  }
  var _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0),
    _v193 = _v0.i(0),
    _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = ((_v1 = _v202 || {})[_v1.PUBLIC_CHAT = 1] = "PUBLIC_CHAT", _v1[_v1.BACKSTAGE_CHAT = 2] = "BACKSTAGE_CHAT", _v1[_v1.QNA = 3] = "QNA", _v1);
  function _v203({
    id: _v0 = (0, _v79.createDomName)("guest-chat-tab"),
    className: _v1 = (0, _v79.createDomName)("guest-chat-tab"),
    chatContext: {
      isHydrated: _v2
    } = (0, _v16.useManager)(_v62.ChatManager),
    firebaseContext: {
      interactionCredentials: _v3,
      connectionStatuses: {
        isInteractionConnected: _v4
      }
    } = (0, _v16.useManager)(_v58.GuestFirebaseManager),
    composerSessionStatusContext: {
      streamMode: _v5
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager)
  }) {
    let _v6 = (0, _v201.useLogger)("GuestChatTab"),
      {
        initialState: _v7
      } = (0, _v54.useLiveGlobals)(),
      [_v8, _v9] = (0, _v10.useState)(0),
      _v10 = _v3?.user?.id,
      _v11 = !_v2 || !_v10 || !_v5,
      _v12 = (0, _v10.useMemo)(() => {
        let _v0 = !!(_v5 && _v5 !== _v29.EComposerStreamModeType.RECORD && _v7.sessionType !== _v29.EComposerSessionType.VENUE),
          _v1 = [{
            panelId: 2,
            label: _v35.translations.speakers,
            chatType: _v30.EChatType.BACKSTAGE
          }];
        return _v0 && _v1.unshift({
          panelId: 1,
          label: _v35.translations.audience,
          chatType: _v30.EChatType.PUBLIC
        }), _v1;
      }, [_v5, _v7.sessionType]),
      _v13 = (0, _v10.useCallback)(_v0 => {
        _v9(_v0), _v12[_v0]?.panelId === 3 && _v104("open_qa_tab");
      }, [_v12]);
    return ((0, _v10.useEffect)(() => {
      !_v11 && _v8 >= _v12.length && (_v6.info("Current tab is out of bonds, fallback to element 0"), _v9(0));
    }, [_v11, _v12, _v8, _v6]), (0, _v10.useEffect)(() => {
      if (!_v11) {
        let _v0 = _v7?.interaction?.feature?.defaultChatType ?? 1,
          _v1 = _v12.findIndex(_v0 => _v0.panelId === _v0);
        -1 === _v1 ? _v6.info("Chat loaded and ready, stay with 0 default tab") : (_v9(_v1), _v6.info("Chat loaded and ready, set current tab as:", _v1));
      }
    }, [_v11]), _v11) ? (0, _v6.jsxs)(_v81.Box, {
      id: _v0,
      className: _v1,
      height: "100%",
      sx: (0, _v200.createTabWrapperStyle)(),
      children: [(0, _v6.jsx)(_v199.RightPanelHeader, {
        label: _v78.T_CHAT,
        rightControls: (0, _v6.jsx)(_v198.RightPanelDismiss, {})
      }), (0, _v6.jsx)(_v197.RightPanelContent, {
        children: (0, _v6.jsx)(_v195.ChatPreloader, {
          id: (0, _v79.createDomName)(_v0, "preloader"),
          className: (0, _v79.createDomName)(_v1, "preloader")
        })
      })]
    }) : (0, _v6.jsxs)(_v81.Box, {
      id: _v0,
      className: _v1,
      height: "100%",
      sx: (0, _v200.createTabWrapperStyle)(),
      children: [(0, _v6.jsx)(_v199.RightPanelHeader, {
        label: _v78.T_CHAT,
        rightControls: (0, _v6.jsx)(_v198.RightPanelDismiss, {})
      }), (0, _v6.jsx)(_v197.RightPanelContent, {
        children: (0, _v6.jsxs)(_v189.Tabs, {
          id: (0, _v79.createDomName)(_v0, "tabs"),
          className: (0, _v79.createDomName)(_v1, "tabs"),
          index: _v8,
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          width: "100%",
          maxWidth: "100%",
          size: "sm",
          onChange: _v13,
          children: [_v12.length ? (0, _v6.jsxs)(_v190.TabList, {
            children: [_v12.map(({
              panelId: _v0,
              label: _v1,
              chatType: _v2
            }, _v3) => (0, _v6.jsx)(_v188.Tab, {
              className: (0, _v79.createDomName)(_v0, _v0, "tab"),
              children: (0, _v6.jsx)(_v196.ChatTabLabel, {
                className: (0, _v79.createDomName)(_v0, "tab-label"),
                isSelected: _v3 === _v8,
                chatType: _v2,
                label: _v1
              })
            }, _v0)), (0, _v6.jsx)(_v189.TabIndicator, {}, _v12.length)]
          }) : null, (0, _v6.jsx)(_v192.TabPanels, {
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            children: _v12.map(({
              panelId: _v0,
              chatType: _v1
            }) => (0, _v6.jsx)(_v191.TabPanel, {
              className: (0, _v79.createDomName)(_v0, _v0, "tab-panel"),
              display: "flex",
              flexBasis: 0,
              flexDirection: "column",
              flexGrow: 1,
              children: (0, _v39.inline)(() => (0, _v6.jsxs)(_v46.Flex, {
                id: (0, _v79.createDomName)(_v0, _v0, "content"),
                direction: "column",
                alignItems: "center",
                width: "100%",
                overflow: "hidden",
                flexBasis: 0,
                grow: 1,
                children: [(0, _v6.jsx)(_v193.ChatHistory, {
                  chatType: _v1,
                  currentUserId: _v10
                }), (0, _v6.jsx)(_v194.ChatInput, {
                  chatType: _v1,
                  isDisabled: !_v4
                })]
              }))
            }, _v0))
          }, _v8)]
        })
      })]
    });
  }
  function _v204({
    id: _v0 = (0, _v79.createDomName)("guest-panel-right"),
    className: _v1 = (0, _v79.createDomName)("guest-panel-right")
  }) {
    let _v2 = (0, _v10.useMemo)(() => [{
      id: _v138.ERightPanelId.CHAT,
      content: _v203,
      isVisible: !0
    }], []);
    return (0, _v6.jsx)(_v187.RightPanel, {
      id: _v0,
      className: _v1,
      items: _v2
    });
  }
  function _v205({
    id: _v0 = (0, _v79.createDomName)("guest-fullscreen-layout"),
    className: _v1 = (0, _v79.createDomName)("guest-fullscreen-layout"),
    composerSessionStatusContext: {
      liveComposerStatusGetters: _v2
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager),
    guestSessionContext: {
      isJoined: _v3
    } = (0, _v16.useManager)(_v64.GuestSessionManager, ({
      isJoined: _v0
    }) => [_v0]),
    panelsContext: {
      rightPanel: _v4
    } = (0, _v16.useManager)(_v69.PanelsManager)
  }) {
    let _v5,
      [_v6, _v7] = (0, _v10.useState)(!1),
      _v8 = (0, _v10.useRef)(null),
      _v9 = (0, _v10.useRef)(null),
      _v10 = (0, _v10.useRef)(null),
      _v11 = !_v2.isReady(),
      _v12 = _v2.isStreaming(),
      _v13 = (0, _v39.inline)(() => _v12 && _v3 ? _v80.LIVE_LAYOUT_COLOR : _v11 ? _v80.INACTIVE_LAYOUT_COLOR : "transparent"),
      _v14 = _v4 === _v138.ERightPanelId.CHAT;
    return _v5 = (0, _v10.useCallback)(_v0 => {
      let _v1 = _v9.current;
      if (_v1) {
        var _v2;
        _v1.style.minWidth = (0, _v47.rem)(_v24.graphicsConfig.SCENE.FULLSCREEN_MODE_MIN_WIDTH), _v1.style.width = "100%";
        let {
            contentRect: {
              height: _v0,
              width: _v1
            }
          } = _v0[0],
          _v2 = 16 / 9,
          _v3 = _v24.graphicsConfig.SCENE.FULLSCREEN_MODE_MIN_WIDTH,
          _v4 = _v24.graphicsConfig.SCENE.FULLSCREEN_MODE_MAX_WIDTH;
        _v2 = _v1 / _v0 < _v2 ? _v1 : _v0 * _v2, _v1.style.maxWidth = (0, _v47.rem)(_v2 < _v3 ? _v3 : _v2 > _v4 ? _v4 : _v2);
      }
    }, [_v9]), (0, _v10.useEffect)(() => {
      let _v0 = _v8.current;
      if (_v0) {
        let _v0 = (0, _v157.default)(_v5, 50),
          _v1 = new _v158.default(_v0);
        return _v1.observe(_v0), () => {
          _v0.cancel(), _v1.unobserve(_v0);
        };
      }
      throw new _v160.LiveError("Failed to find resizing element.");
    }, [_v5, _v8]), (0, _v161.default)(_v10, () => _v7(!1)), (0, _v6.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      direction: "column",
      grow: 1,
      overflow: "hidden",
      width: "100%",
      minWidth: (0, _v47.rem)(_v24.graphicsConfig.SCENE.FULLSCREEN_MODE_MIN_WIDTH),
      height: "100vh",
      position: "relative",
      overflowY: "auto",
      background: "background",
      borderTop: `2px solid ${_v13}`,
      children: [(0, _v6.jsx)(_v46.Flex, {
        ref: _v10,
        zIndex: 102,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        background: "background",
        transform: `scaleY(${+!!_v6})`,
        transformOrigin: "top",
        transition: "transform 0.4s ease 0.4s",
        onMouseLeave: () => _v7(!1),
        children: (0, _v6.jsx)(_v96, {
          withTopBorder: !1
        })
      }), (0, _v6.jsx)(_v159.SpeakingWhileMutedBanner, {
        position: "absolute",
        top: (0, _v47.rem)(92),
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 103
      }), (0, _v6.jsxs)(_v46.Flex, {
        justifyContent: "center",
        wrap: "unset",
        width: "100%",
        overflow: "hidden",
        grow: 1,
        children: [(0, _v6.jsxs)(_v46.Flex, {
          ref: _v8,
          justifyContent: "center",
          alignItems: "center",
          grow: 1,
          width: "100%",
          position: "relative",
          paddingBottom: (0, _v47.rem)(64),
          paddingRight: _v14 ? (0, _v47.rem)(16) : 0,
          children: [(0, _v6.jsx)(_v46.Flex, {
            id: (0, _v79.createDomName)(_v0, "hover-header"),
            className: (0, _v79.createDomName)(_v1, "hover-header"),
            width: "100%",
            height: (0, _v47.rem)(64),
            zIndex: 101,
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            onMouseEnter: () => _v7(!0)
          }), (0, _v6.jsx)(_v46.Flex, {
            ref: _v9,
            children: (0, _v6.jsx)(_v186, {})
          }), (0, _v6.jsx)(_v46.Flex, {
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            bottom: (0, _v47.rem)(8),
            margin: "auto",
            children: (0, _v6.jsx)(_v154, {
              isScreenSharingEnabled: !0,
              isSlidesControlsEnabled: !0
            })
          })]
        }), _v14 ? (0, _v6.jsx)(_v204, {}) : null]
      })]
    });
  }
  var _v206 = _v0.i(0),
    _v207 = _v0.i(0);
  function _v208(_v0, _v1, _v2) {
    if (!_v2) return [null, null];
    let _v3 = (0, _v171.pickSortedScenesList)(_v0, _v1),
      _v4 = _v3.findIndex(_v0 => _v0.id === _v2);
    return [_v3[_v4] ?? null, _v3[_v4 + 1] ?? null];
  }
  var _v209 = _v0.i(0);
  function _v210({
    id: _v0 = (0, _v79.createDomName)("next-guest-scene-preview"),
    className: _v1 = (0, _v79.createDomName)("next-guest-scene-preview"),
    scene: _v2,
    guests: _v3,
    theme: _v4,
    user: _v5,
    activeScreenOwnerId: _v6,
    fullscreenList: _v7,
    agoraMediaList: _v8,
    slidesList: _v9,
    broadcasterInfo: _v10
  }) {
    let _v11 = (0, _v10.useMemo)(() => (0, _v146.isGuestAlreadyInScene)(_v5?.id ?? null, _v2), [_v2, _v5]),
      _v12 = (0, _v10.useMemo)(() => _v2 ? _v11 ? _v35.translations.youreUpNext : _v35.translations.upNext : "", [_v11, _v2]),
      _v13 = (0, _v10.useMemo)(() => {
        if (_v2) return _v11 ? _v80.LIVE_LAYOUT_COLOR : "gray.500";
      }, [_v11, _v2]);
    return (0, _v6.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      direction: "column",
      children: [(0, _v6.jsx)(_v46.Flex, {
        id: (0, _v79.createDomName)(_v0, "wrapper"),
        className: (0, _v79.createDomName)(_v1, "wrapper"),
        borderRadius: "subtle",
        shrink: 0,
        position: "relative",
        overflow: "hidden",
        color: "text-primary",
        fontSize: "header",
        justifyContent: "center",
        width: (0, _v47.rem)(_v24.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_WIDTH),
        height: (0, _v47.rem)(_v24.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
        children: _v2 ? (0, _v6.jsx)(_v209.SceneThumbnail, {
          scene: _v2,
          theme: _v4,
          guests: _v3,
          broadcasterInfo: _v10,
          fullscreenList: _v7,
          agoraMediaList: _v8,
          slidesList: _v9,
          activeScreenOwnerId: _v6,
          statusLabel: _v12,
          statusColor: _v13
        }) : (0, _v6.jsx)(_v43.Header, {
          id: (0, _v79.createDomName)(_v0, "no-scenes-header"),
          className: (0, _v79.createDomName)(_v1, "no-scenes-header"),
          color: "text-secondary",
          size: "2xs",
          children: _v35.translations.noMoreScenes
        })
      }), _v2 ? (0, _v6.jsx)(_v43.Header, {
        id: (0, _v79.createDomName)(_v0, "scene-name"),
        className: (0, _v79.createDomName)(_v1, "scene-name"),
        color: "text-secondary",
        marginTop: (0, _v47.rem)(4),
        size: "2xs",
        children: _v2.name
      }) : null]
    });
  }
  function _v211({
    id: _v0 = (0, _v79.createDomName)("live-guest-timeline"),
    className: _v1 = (0, _v79.createDomName)("live-guest-timeline"),
    sceneContext: {
      scenes: _v2,
      scenesOrder: _v3,
      sceneInProgram: _v4
    } = (0, _v16.useManager)(_v51.SceneManager),
    guestContext: {
      guests: _v5
    } = (0, _v16.useManager)(_v59.GuestsManager, ({
      guests: _v0
    }) => [_v0]),
    guestAgoraContext: {
      mediaUid: _v6
    } = (0, _v16.useManager)(_v55.GuestAgoraManager),
    remoteMediaContext: {
      roomMedia: _v7
    } = (0, _v16.useManager)(_v66.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    screenShareContext: {
      activeScreenShareId: _v8
    } = (0, _v16.useManager)(_v60.RoomScreenShareManager),
    localMediaContext: {
      screen: _v9
    } = (0, _v16.useManager)(_v65.LocalMediaManager, _v0 => [_v0]),
    graphicsContext: {
      additionalInformation: _v10,
      agoraMediaList: _v11,
      fullscreenList: _v12,
      slidesList: _v13,
      theme: _v14
    } = (0, _v16.useManager)(_v50.GraphicsManager, ({
      additionalInformation: _v0,
      agoraMediaList: _v1,
      fullscreenList: _v2,
      slidesList: _v3,
      theme: _v4
    }) => [_v0, _v1, _v2, _v3, _v4]),
    guestSessionContext: {
      mediaSettings: _v15
    } = (0, _v16.useManager)(_v64.GuestSessionManager)
  }) {
    let _v16,
      [, _v17] = _v208(_v2, _v3, _v4),
      _v18 = (_v16 = (0, _v102.parseAgoraConnectionDetails)(_v6.value)) ? _v5[_v16[1]] : null,
      _v19 = (0, _v206.useRoomScreenShare)(_v7),
      _v20 = (0, _v207.useScreenShareOwner)(_v8),
      _v21 = !!(_v19 || _v9.track);
    return _v15.isFullscreenMode || !_v17 ? null : (0, _v6.jsx)(_v46.Flex, {
      id: _v0,
      className: _v1,
      position: "relative",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: (0, _v47.rem)(12),
      gap: (0, _v47.rem)(16),
      children: (0, _v6.jsx)(_v210, {
        scene: _v17,
        guests: _v5,
        theme: _v14,
        activeScreenOwnerId: _v21 ? _v20 : null,
        broadcasterInfo: _v10.broadcaster,
        fullscreenList: _v12,
        agoraMediaList: _v11,
        slidesList: _v13,
        user: _v18
      })
    });
  }
  function _v212({
    id: _v0 = (0, _v79.createDomName)("guest-preview-stage"),
    className: _v1 = (0, _v79.createDomName)("guest-preview-stage")
  }) {
    return (0, _v6.jsxs)(_v46.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      justify: "center",
      alignItems: "center",
      grow: 1,
      gap: (0, _v47.rem)(4),
      children: [(0, _v6.jsx)(_v46.Flex, {
        id: (0, _v79.createDomName)(_v0, "content"),
        className: (0, _v79.createDomName)(_v1, "content"),
        grow: 1,
        direction: "column",
        justify: "center",
        alignItems: "center",
        width: "100%",
        children: (0, _v6.jsxs)(_v46.Flex, {
          position: "relative",
          direction: "column",
          alignItems: "center",
          width: "100%",
          children: [(0, _v6.jsx)(_v159.SpeakingWhileMutedBanner, {
            position: "absolute",
            bottom: "100%",
            left: "50%",
            transform: "translateX(-50%)",
            marginBottom: (0, _v47.rem)(32)
          }), (0, _v6.jsx)(_v152, {
            id: _v0,
            isStandaloneBlock: !0
          }), (0, _v6.jsx)(_v186, {}), (0, _v6.jsx)(_v211, {})]
        })
      }), (0, _v6.jsx)(_v154, {
        isScreenSharingEnabled: !0
      })]
    });
  }
  var _v213 = _v0.i(0),
    _v214 = _v0.i(0),
    _v215 = _v0.i(0),
    _v216 = _v0.i(0),
    _v217 = _v0.i(0),
    _v218 = _v0.i(0),
    _v219 = _v0.i(0),
    _v220 = _v0.i(0),
    _v221 = _v0.i(0),
    _v222 = _v0.i(0),
    _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0),
    _v227 = _v0.i(0);
  function _v228({
    id: _v0 = (0, _v79.createDomName)("guest-qna-tab"),
    className: _v1 = (0, _v79.createDomName)("guest-qna-tab"),
    firebaseContext: {
      isInteractionReady: _v2
    } = (0, _v16.useManager)(_v58.GuestFirebaseManager),
    qnaContext: {
      activeSessionPinnedQuestionId: _v3,
      qnaReplies: _v4
    } = (0, _v16.useManager)(_v63.QnAManager)
  }) {
    let {
        panels: _v5,
        activePanelId: _v6,
        setActivePanelId: _v7
      } = (0, _v221.useQnaPanels)(),
      {
        getIdByIndex: _v8,
        getIndexById: _v9
      } = (0, _v226.useTabsMapping)(_v5);
    (0, _v10.useEffect)(() => {
      (0, _v227.trackViewQna)();
    }, []);
    let _v10 = (0, _v10.useCallback)(_v0 => {
      _v7(_v8(_v0)), (0, _v227.trackSwitchActiveTab)();
    }, [_v8, _v7]);
    return (0, _v6.jsxs)(_v81.Box, {
      id: _v0,
      className: _v1,
      height: "100%",
      sx: (0, _v200.createTabWrapperStyle)(),
      children: [(0, _v6.jsx)(_v224.LeftPanelHeader, {
        label: _v78.T_QNA,
        controls: (0, _v6.jsx)(_v223.LeftPanelDismiss, {})
      }), (0, _v6.jsxs)(_v222.LeftPanelContent, {
        children: [(0, _v6.jsxs)(_v189.Tabs, {
          size: "sm",
          sx: _v200.TABS_STYLES,
          index: _v9(_v6),
          onChange: _v10,
          children: [(0, _v6.jsxs)(_v190.TabList, {
            children: [_v5.map(({
              id: _v0,
              label: _v1
            }) => (0, _v6.jsx)(_v188.Tab, {
              className: (0, _v79.createDomName)(_v0, _v0, "tab"),
              children: _v1
            }, _v0)), (0, _v6.jsx)(_v189.TabIndicator, {})]
          }), (0, _v6.jsx)(_v192.TabPanels, {
            sx: _v200.TAB_PANELS_STYLES,
            position: "relative",
            children: _v5.map(({
              id: _v0,
              questions: _v1
            }) => (0, _v6.jsx)(_v191.TabPanel, {
              className: (0, _v79.createDomName)(_v0, _v0, "tab-panel"),
              sx: _v200.TAB_PANEL_STYLES,
              children: (0, _v6.jsx)(_v220.QuestionsList, {
                id: (0, _v79.createDomName)(_v0, _v0, "questions-list"),
                scrollBackground: "surface",
                tabId: _v0,
                questions: _v1,
                pinnedQuestionId: _v3,
                itemRenderer: _v0 => (0, _v6.jsx)(_v81.Box, {
                  sx: _v200.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                  children: (0, _v6.jsx)(_v219.NewQuestionViewItem, {
                    question: _v0,
                    isPinned: _v0.id === _v3,
                    questionReplies: _v4[_v0.id]
                  }, _v0.id)
                }, _v0.id)
              })
            }, _v0))
          }, _v6)]
        }), (0, _v6.jsx)(_v81.Box, {
          position: "relative",
          children: (0, _v6.jsx)(_v225.HorizontalScrollShadow, {
            color: "surface"
          })
        }), _v2 ? null : (0, _v6.jsx)(_v36.BlockingLoadingWrapper, {
          opacity: .1
        })]
      })]
    });
  }
  var _v229 = _v0.i(0),
    _v230 = _v0.i(0),
    _v231 = _v0.i(0),
    _v232 = _v0.i(0),
    _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = _v0.i(0),
    _v236 = _v0.i(0),
    _v237 = _v0.i(0);
  function _v238({
    id: _v0 = (0, _v79.createDomName)("guest-speakers-tab"),
    className: _v1 = (0, _v79.createDomName)("guest-speakers-tab"),
    localMediaContext: _v2 = (0, _v16.useManager)(_v65.LocalMediaManager),
    sceneContext: {
      scenes: _v3,
      scenesOrder: _v4,
      sceneInProgram: _v5
    } = (0, _v16.useManager)(_v51.SceneManager),
    guestAgoraContext: {
      mediaConnectionQuality: _v6,
      isReady: _v7,
      agoraActions: _v8
    } = (0, _v16.useManager)(_v55.GuestAgoraManager),
    remoteMediaContext: {
      roomMedia: _v9
    } = (0, _v16.useManager)(_v66.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    localMediaContext: {
      screen: _v10
    } = (0, _v16.useManager)(_v65.LocalMediaManager),
    guestsContext: {
      guests: _v11
    } = (0, _v16.useManager)(_v59.GuestsManager),
    graphicsContext: {
      additionalInformation: {
        broadcaster: _v12
      },
      theme: _v13
    } = (0, _v16.useManager)(_v50.GraphicsManager, ({
      additionalInformation: _v0,
      theme: _v1
    }) => [_v0, _v1]),
    guestSessionContext: {
      mediaSettings: _v14,
      sessionInfo: {
        value: _v15
      }
    } = (0, _v16.useManager)(_v64.GuestSessionManager),
    composerSettingsContext: {
      audioMode: _v16
    } = (0, _v16.useManager)(_v61.ComposerSettingsManager, ({
      audioMode: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      streamMode: _v17
    } = (0, _v16.useManager)(_v38.ComposerSessionStatusManager, ({
      streamMode: _v0
    }) => [_v0]),
    screenShareContext: {
      activeScreenShareId: _v18
    } = (0, _v16.useManager)(_v60.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0])
  }) {
    let [_v19] = _v208(_v3, _v4, _v5),
      _v20 = (0, _v235.useRoomConnectionsQualities)(_v7, _v26.liveMediaConfig.AGORA.REMOTE_NETWORK_CHECK_INTERVAL, _v8.getRemoteNetworkQuality),
      _v21 = (0, _v10.useMemo)(() => Object.keys(_v20).reduce((_v0, _v1) => {
        let _v2 = (0, _v102.parseConnectionTypeFromUid)(_v1);
        return (_v2 === _v85.EAgoraConnectionType.GUEST || _v2 === _v85.EAgoraConnectionType.BROADCASTER) && (_v0[(0, _v102.mapUidToGraphicsSource)(_v1)] = _v20[_v1]), _v0;
      }, {}), [_v20]),
      _v22 = (0, _v10.useMemo)(() => {
        let _v0 = _v17 === _v29.EComposerStreamModeType.RECORD;
        switch (!0) {
          case _v0 && _v16 === _v237.EAudioMixingMode.ALL:
            return {
              header: _v35.translations.speakers,
              description: _v35.translations.allUnmutedAreRecorded
            };
          case _v0 && _v16 === _v237.EAudioMixingMode.SCENE:
            return {
              header: _v35.translations.backStage,
              description: _v35.translations.backstageAreNotRecorded
            };
          case _v16 === _v237.EAudioMixingMode.ALL:
            return {
              header: _v35.translations.speakers,
              description: _v35.translations.audienceHearsUnmuted
            };
          default:
            return {
              header: _v35.translations.backStage,
              description: _v35.translations.audienceCantHearUnmuted
            };
        }
      }, [_v16, _v17]),
      _v23 = (0, _v10.useMemo)(() => {
        let _v0 = _v15?.seat?.id ?? null,
          _v1 = _v9.reduce((_v0, _v1) => {
            let _v2 = (0, _v102.parseConnectionTypeFromUid)(_v1.uid);
            return (_v2 === _v85.EAgoraConnectionType.GUEST || _v2 === _v85.EAgoraConnectionType.BROADCASTER) && (_v0[(0, _v102.mapUidToGraphicsSource)(_v1.uid)] = _v1), _v0;
          }, {}),
          _v2 = Object.values(_v11).sort((_v0, _v1) => _v0.id === _v0 ? -1 : _v0.createdAt - _v1.createdAt).filter(_v0 => !(0, _v146.isGuestAlreadyInScene)(_v0.id, _v19)).map(_v0 => {
            let _v1 = _v0.id === _v0,
              _v2 = (0, _v102.formatConnectionUidByType)(_v85.EAgoraConnectionType.GUEST, _v0.id),
              _v3 = _v1[_v2] || null,
              _v4 = _v2.video.isMuted ? null : _v2.video.track?.getMediaStreamTrack(),
              _v5 = _v3?.video?.getMediaStreamTrack() || null;
            return {
              uid: _v2,
              isMe: _v1,
              isBroadcaster: !1,
              name: _v0.name,
              isConnected: !!_v1 || !!_v3,
              audio: _v1 ? _v2.audio.track : _v3?.audio,
              sourceTrack: _v1 ? _v4 : _v5,
              audioIsMuted: _v1 ? _v2.audio.isMuted : !_v3?.audio || _v3?.volume === 0
            };
          }),
          _v3 = _v1[_v85.EAgoraConnectionType.BROADCASTER] || null,
          _v4 = {
            uid: _v85.EAgoraConnectionType.BROADCASTER,
            isMe: !1,
            isBroadcaster: !0,
            name: _v12.name,
            isConnected: !!_v3,
            audio: _v3?.audio,
            sourceTrack: _v3?.video?.getMediaStreamTrack() || null,
            audioIsMuted: !_v3?.audio || _v3?.volume === 0
          };
        return (0, _v146.isGraphicAlreadyInScene)(_v85.EAgoraConnectionType.BROADCASTER, _v19) || _v2.splice(1, 0, _v4), _v2;
      }, [_v11, _v19, _v9, _v12, _v15, _v2]),
      _v24 = (0, _v206.useRoomScreenShare)(_v9),
      _v25 = (0, _v236.useScrollbarStyles)();
    return _v23.length ? (0, _v6.jsxs)(_v81.Box, {
      id: _v0,
      className: _v1,
      height: "100%",
      sx: (0, _v200.createTabWrapperStyle)(),
      children: [(0, _v6.jsx)(_v224.LeftPanelHeader, {
        label: _v22.header,
        controls: (0, _v6.jsx)(_v223.LeftPanelDismiss, {})
      }), (0, _v6.jsxs)(_v222.LeftPanelContent, {
        children: [(0, _v6.jsx)(_v230.Alert, {
          id: (0, _v79.createDomName)(_v0, "description"),
          fontSize: "header-2xs",
          color: "text-secondary",
          marginBottom: (0, _v47.rem)(16),
          children: (0, _v6.jsx)(_v229.AlertDescription, {
            children: _v22.description
          })
        }), (0, _v6.jsx)(_v81.Box, {
          id: (0, _v79.createDomName)(_v0, "sources-list"),
          sx: {
            ...(0, _v200.createTabListScrollStyle)(),
            ..._v25
          },
          children: (0, _v6.jsx)(_v81.Box, {
            sx: (0, _v200.createTabListColumnStyle)(!1),
            children: _v23.map(_v0 => {
              let _v1 = _v0.isBroadcaster ? !!(_v24?.video && String(_v18).startsWith(_v85.EAgoraConnectionType.BROADCASTER_SCREEN)) : _v0.isMe ? !!(_v10.track && String(_v18).endsWith((0, _v102.parseUidFromAgora)(_v0.uid))) : !!(_v24?.video && String(_v18).endsWith((0, _v102.parseUidFromAgora)(_v0.uid))),
                _v2 = _v0.isBroadcaster ? _v35.translations.broadcasterNameLabel(_v0.name) : _v0.isMe ? _v35.translations.meNameLabel(_v0.name) : _v0.name;
              return (0, _v6.jsxs)("div", {
                children: [(0, _v6.jsx)(_v81.Box, {
                  id: (0, _v79.createDomName)(_v0, "speakers-card"),
                  sx: (0, _v200.createTabListColumnHalfItemStyle)(),
                  children: (0, _v6.jsxs)(_v46.Flex, {
                    direction: "column",
                    alignItems: "center",
                    overflow: "hidden",
                    borderRadius: "button",
                    background: _v122.PREVIEW_GRADIENT,
                    sx: _v122.STRICT_16BY9_BOX_STYLE,
                    children: [(0, _v6.jsx)(_v111.AgoraStreamAvatar, {
                      avatarSrc: void 0,
                      name: _v2,
                      colorSeed: _v0.uid.toString(),
                      fontFamily: _v13?.font,
                      withAnimation: !1
                    }), (0, _v6.jsx)(_v112.AgoraMediaTrackPreview, {
                      id: (0, _v79.createDomName)(_v0, "speakers-card-track-preview"),
                      track: _v0.sourceTrack,
                      isMirrored: !!_v0.isMe && _v14.isLocalMirrored,
                      background: "transparent",
                      position: "absolute",
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "100%"
                    }), (0, _v6.jsx)(_v81.Box, {
                      position: "absolute",
                      left: (0, _v47.rem)(4),
                      top: (0, _v47.rem)(3),
                      zIndex: 20,
                      children: (0, _v6.jsx)(_v136.IconButton, {
                        "aria-label": "microphone-status",
                        padding: (0, _v47.rem)(4),
                        variant: "tertiary",
                        icon: _v0.audioIsMuted ? (0, _v6.jsx)(_v231.MicOff, {
                          color: "white"
                        }) : (0, _v6.jsx)(_v232.MicOn, {
                          color: "black"
                        }),
                        background: _v0.audioIsMuted ? "gray.600" : "white",
                        _hover: {
                          background: _v0.audioIsMuted ? "gray.600" : "white"
                        },
                        size: "xs",
                        cursor: "unset !important",
                        isDisabled: !0
                      })
                    }), _v1 ? (0, _v6.jsx)(_v234.LiveSourceScreenshareIndicator, {
                      children: _v35.translations.sharingScreen
                    }) : null]
                  })
                }), (0, _v6.jsxs)(_v46.Flex, {
                  color: "text-primary",
                  maxWidth: (0, _v47.rem)(140),
                  padding: (0, _v47.rem)(4),
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  children: [(0, _v6.jsx)(_v121.LiveSourceStatusIndicator, {
                    isConnected: _v0.isConnected,
                    networkQuality: _v0.isMe ? _v6 : _v21[_v0.uid]
                  }), (0, _v6.jsx)(_v82.BokehTooltip, {
                    placement: "top",
                    label: _v0.name,
                    shouldWrapChildren: !1,
                    children: (0, _v6.jsx)(_v97.Text, {
                      className: (0, _v79.createDomName)("guest-source-name"),
                      cursor: "pointer",
                      variant: "body-xs",
                      color: "text-primary",
                      width: "100%",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      children: _v0.name
                    })
                  })]
                })]
              }, _v0.uid);
            })
          })
        })]
      })]
    }) : (0, _v6.jsxs)(_v6.Fragment, {
      children: [(0, _v6.jsx)(_v224.LeftPanelHeader, {
        label: _v22.header,
        controls: (0, _v6.jsx)(_v223.LeftPanelDismiss, {})
      }), (0, _v6.jsx)(_v222.LeftPanelContent, {
        children: (0, _v6.jsx)(_v233.EmptyStatePlaceholder, {
          id: (0, _v79.createDomName)(_v0, "empty-placeholder"),
          description: _v35.translations.allSpeakersAreOnStage,
          icon: (0, _v6.jsx)(_v214.Users, {
            boxSize: (0, _v47.rem)(48)
          }),
          control: null
        })
      })]
    });
  }
  let _v239 = (0, _v10.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.GuestDebugTab
  })));
  function _v240({
    id: _v0 = (0, _v79.createDomName)("guest-panel-left"),
    className: _v1 = (0, _v79.createDomName)("guest-panel-left"),
    panelsContext: {
      leftPanel: _v2
    } = (0, _v16.useManager)(_v69.PanelsManager)
  }) {
    let _v3 = (0, _v218.useCanSeeDebugTools)(),
      _v4 = (0, _v10.useMemo)(() => {
        let _v0 = [{
          id: _v216.ELeftPanelId.SPEAKERS,
          icon: (0, _v6.jsx)(_v214.Users, {}),
          header: _v35.translations.speakers,
          hash: _v216.ELeftPanelHash.SPEAKERS,
          content: _v238
        }, {
          id: _v216.ELeftPanelId.QNA,
          icon: (0, _v6.jsx)(_v215.PanelQnaIcon, {
            isActive: _v2 === _v216.ELeftPanelId.QNA,
            isManagementAccessed: !0
          }),
          header: _v78.T_QNA,
          content: _v228,
          hash: _v216.ELeftPanelHash.QNA
        }];
        return _v3 && _v0.push({
          id: _v216.ELeftPanelId.DEBUG,
          icon: (0, _v6.jsx)(_v213.Processor, {}),
          header: _v35.translations.debug,
          hash: _v216.ELeftPanelHash.DEBUG,
          content: () => (0, _v6.jsx)(_v10.Suspense, {
            fallback: null,
            children: (0, _v6.jsx)(_v239, {})
          })
        }), _v0;
      }, [_v3, _v2]);
    return (0, _v6.jsx)(_v217.LeftPanel, {
      id: _v0,
      className: _v1,
      items: _v4
    });
  }
  function _v241({
    id: _v0 = (0, _v79.createDomName)("stage-layout"),
    className: _v1 = (0, _v79.createDomName)("stage-layout")
  }) {
    return (0, _v6.jsxs)(_v46.Flex, {
      direction: "column",
      grow: 1,
      minWidth: (0, _v47.rem)(960),
      minHeight: (0, _v47.rem)(540),
      overflow: "hidden",
      background: "background",
      children: [(0, _v6.jsx)(_v96, {}), (0, _v6.jsxs)(_v46.Flex, {
        id: (0, _v79.createDomName)(_v0, "content"),
        className: (0, _v79.createDomName)(_v1, "content"),
        flexGrow: 1,
        flexBasis: 0,
        overflow: "hidden",
        children: [(0, _v6.jsx)(_v240, {}), (0, _v6.jsxs)(_v46.Flex, {
          position: "relative",
          direction: "column",
          justify: "center",
          padding: (0, _v47.rem)(16),
          grow: 1,
          children: [(0, _v6.jsx)(_v7.LiveErrorBoundary, {
            component: "GuestPreviewStage",
            children: (0, _v6.jsx)(_v212, {})
          }), (0, _v6.jsx)(_v7.LiveErrorBoundary, {
            component: "LiveComposerFooter",
            children: (0, _v6.jsx)(_v75.LiveComposerFooter, {})
          })]
        }), (0, _v6.jsx)(_v204, {})]
      })]
    });
  }
  function _v242({
    guestSessionContext: {
      mediaSettings: _v0
    } = (0, _v16.useManager)(_v64.GuestSessionManager)
  }) {
    return _v0.isFullscreenMode ? (0, _v6.jsx)(_v205, {}) : (0, _v6.jsx)(_v241, {});
  }
  function _v243({
    guestSessionContext: {
      isJoined: _v0,
      isBlocked: _v1
    } = (0, _v16.useManager)(_v64.GuestSessionManager, ({
      isJoined: _v0,
      isBlocked: _v1
    }) => [_v0, _v1])
  }) {
    return _v1 ? (0, _v6.jsx)(_v100, {}) : _v0 ? (0, _v6.jsx)(_v242, {}) : (0, _v6.jsx)(_v156, {});
  }
  function _v244(_v0) {
    let _v1 = (0, _v32.useViewer)(),
      _v2 = (0, _v27.useInitialRenderTime)(),
      _v3 = (0, _v33.useIsVpaas)(),
      _v4 = (0, _v10.useMemo)(() => {
        let {
          sessionId: _v0,
          sessionType: _v1,
          sessionCode: _v2
        } = _v0;
        return {
          renderAt: _v2,
          sessionApplicationType: _v29.EComposerApplicationType.GUEST,
          sessionType: _v1,
          sessionCode: _v2,
          sessionId: _v0,
          isVpaas: _v3,
          media: {
            codec: _v26.liveMediaConfig.AGORA.CODEC,
            mediaMode: _v26.liveMediaConfig.AGORA.MEDIA_MODE,
            screenMode: _v26.liveMediaConfig.AGORA.SCREEN_MODE,
            isVolumeIndicatorEnabled: !0,
            isStatsCollectionEnabled: _v25.liveApplicationConfig.TRACKING.IS_AGORA_STATS_COLLECTING_ENABLED,
            isSpeakingWhileMutedDetectorEnabled: !0,
            isVideoHardMuteEnabled: _v26.liveMediaConfig.AGORA.USE_VIDEO_HARD_MUTE,
            isAudioHardMuteEnabled: _v26.liveMediaConfig.AGORA.USE_AUDIO_HARD_MUTE,
            isDualStreamEnabled: _v26.liveMediaConfig.DUAL_STREAM.IS_ENABLED,
            dualStreamConfig: _v26.liveMediaConfig.DUAL_STREAM.CONFIG,
            remoteStreamFallbackType: _v26.liveMediaConfig.AGORA.REMOTE_STREAM_FALLBACK_OPTION,
            isAllowedToGetLocalMedia: !0
          },
          interaction: {
            feature: {
              defaultChatType: _v30.EChatType.BACKSTAGE,
              isBackstageAllowed: !0
            }
          },
          externalModules: [_v29.EExternalModule.FIREBASE, _v29.EExternalModule.AGORA]
        };
      }, []);
    return ((0, _v28.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v4.sessionApplicationType,
      sessionType: _v4.sessionType,
      sessionId: _v4.sessionId,
      userId: _v1?.user?.id,
      userLocale: _v1?.locale
    }), (0, _v31.isAgoraSupportedInBrowser)() && (!_v23.browserConfig.BROWSER?.isMobile || _v25.liveApplicationConfig.FEATURE.USE_MOBILE_ACCESS)) ? (0, _v6.jsx)(_v16.ScopeProvider, {
      children: (0, _v6.jsx)(_v22.ScopeErrorBoundary, {
        fallback: _v15,
        children: (0, _v6.jsxs)(_v74, {
          initialState: _v4,
          pageProps: _v0,
          children: [(0, _v6.jsx)(_v243, {}), (0, _v6.jsx)(_v49, {}), (0, _v6.jsx)(_v19.SimpleNotifications, {}), (0, _v6.jsx)(_v18.GlobalConfirmations, {}), _v24.graphicsConfig.CACHE.IS_PRELOAD_ENABLED ? (0, _v6.jsx)(_v17.LiveComposerCache, {}) : null]
        })
      })
    }) : _v23.browserConfig.BROWSER?.isMobile ? (0, _v6.jsx)(_v21.MobileUnsupportedModal, {}) : (0, _v6.jsx)(_v20.BrowserUnsupportedModal, {});
  }
  _v0.s(["LiveGuestRoot", 0, function (_v0) {
    let _v1 = (0, _v9.useOptionalViewer)(),
      {
        sessionId: _v2,
        sessionType: _v3,
        sessionCode: _v4
      } = (0, _v8.usePageSessionContext)();
    return _v1 && _v3 && _v2 && _v4 ? (0, _v6.jsx)(_v7.LiveErrorBoundary, {
      component: "LiveGuestRoot",
      componentHandler: _v15,
      children: (0, _v6.jsx)(_v244, {
        ..._v0,
        sessionType: _v3,
        sessionId: _v2,
        sessionCode: _v4
      })
    }) : null;
  }], 0);
}