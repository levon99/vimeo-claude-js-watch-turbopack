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
    _v10 = _v0.i(0);
  function _v11({
    id: _v0,
    className: _v1,
    error: _v2,
    isHeaderEnabled: _v3 = !0
  }) {
    let [_v4, _v5] = (0, _v5.useMemo)(() => {
      if ((0, _v10.isApiError)(_v2)) switch (_v2.data.body.errorCode) {
        case _v9.EApiErrorCode.NO_CREDENTIALS_PROVIDED:
        case _v9.EApiErrorCode.NO_USER_CREDENTIALS_PROVIDED:
          return [_v8.T_ERROR_NOT_AUTHORIZED, _v8.T_ERROR_NOT_AUTHORIZED_DESCRIPTION];
        case _v9.EApiErrorCode.BAD_ARGUMENTS_PROVIDED:
        case _v9.EApiErrorCode.NOT_FOUND:
          return [_v8.T_ERROR_NOT_FOUND, _v8.T_ERROR_COUND_NOT_FIND_EVENT];
        case _v9.EApiErrorCode.NO_PERMISSIONS:
          return [_v8.T_ERROR_PERMISSION_DENIED, _v8.T_ERROR_PERMISSION_DENIED_DESCRIPTION];
      }
      return _v2 instanceof _v6.ResourceNotFoundError ? [_v8.T_ERROR_NOT_FOUND, _v8.T_ERROR_COUND_NOT_FIND_EVENT] : _v2 instanceof _v6.ForbiddenError ? [_v8.T_ERROR_PERMISSION_DENIED, _v8.T_ERROR_PERMISSION_DENIED_DESCRIPTION] : [_v8.T_ERROR_TECHNICAL_DIFFICULTIES, _v8.T_ERROR_TECHNICAL_DIFFICULTIES_TRY_AGAIN];
    }, [_v2]);
    return (0, _v1.jsx)(_v7.LiveErrorPage, {
      id: _v0,
      className: _v1,
      title: _v4,
      message: _v5,
      isHeaderEnabled: _v3,
      error: _v2
    });
  }
  var _v12 = _v0.i(0),
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
    _v29 = _v0.i(0);
  function _v30({
    userPreferencesContext: {
      isPendoLoaded: _v0,
      isRtmpOnboardingTourActive: _v1,
      isActiveFinishedStreamSurvey: _v2,
      isEnterpriseTiersUpgradeModalActive: _v3,
      userPreferencesActions: _v4,
      tourActions: _v5
    } = (0, _v12.useManager)(_v26.UserPreferencesManager),
    composerSessionStatusContext: {
      ingestStatus: _v6
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager)
  }) {
    let _v7 = _v6 === _v27.EIngestStatus.UNKNOWN || !_v0,
      _v8 = (0, _v5.useCallback)(() => {
        _v4.setEnterpriseUpgradeTiersModalState(!1);
      }, [_v4]);
    return (0, _v24.usePendoAndNotificationsAlignment)(), (0, _v5.useEffect)(() => {
      !_v7 && (_v1 ? _v5.showPendoTourById(_v28.EPendoToursIds.ONBOARDING_RTMP_REGULAR_PENDO_ID) : _v2 && _v5.showPendoTourById(_v28.EPendoSurveysIds.RTMP_MODE_CSAT));
    }, [_v7, _v1, _v2, _v5]), (0, _v1.jsx)(_v1.Fragment, {
      children: _v3 ? (0, _v1.jsx)(_v29.LiveTiersUpgradeModal, {
        isActive: !0,
        onDismissUpgradeModal: _v8
      }) : null
    });
  }
  var _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0),
    _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42({
    composerSessionContext: {
      sessionInfo: {
        value: _v0
      }
    } = (0, _v12.useManager)(_v36.ComposerSessionManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v1
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager)
  }) {
    let _v2;
    return !function () {
      let _v0 = (0, _v5.useRef)(!1),
        {
          isTrackingReady: _v1
        } = (0, _v34.useRTMPTrackingConfigUpdater)();
      (0, _v5.useEffect)(() => {
        _v1 && !_v0.current && (_v0.current = !0, (0, _v35.trackOpenRTMPView)(window.document.referrer));
      }, [_v1]);
    }(), (_v2 = (0, _v12.useScope)(), (0, _v41.useUserPreferencesPendoSync)({
      onGuideDisplayed: async _v0 => {
        _v0?.guideId === _v28.EPendoToursIds.ONBOARDING_RTMP_REGULAR_PENDO_ID && (_v2.emitSignal({
          type: _v40.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
          data: _v39.ERightPanelId.EVENT_SETTINGS
        }), await (0, _v37.nextAsyncQueue)(), _v2.emitSignal({
          type: _v40.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
          data: _v38.EAccordionItemId.REGISTRATION
        }));
      }
    }, [_v2]), _v1.isSessionEnded) ? (0, _v1.jsx)(_v23.LiveBroadcastEnded, {}) : _v1.isRtcMode && _v1.isSessionLive ? (0, _v1.jsx)(_v31.LiveEncoderWarningModal, {
      redirectLink: _v0?.rtcPreviewLink?.uri || _v0?.viewLink?.uri
    }) : _v1.isSessionUnknown ? null : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v32.GlobalConfirmations, {}), (0, _v1.jsx)(_v33.SimpleNotifications, {}), _v1.isSessionPreparing ? (0, _v1.jsx)(_v1.Fragment, {
        children: (0, _v1.jsx)(_v30, {})
      }) : null]
    });
  }
  var _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
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
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0);
  function _v76({
    id: _v0 = (0, _v50.createDomName)("download-banner"),
    className: _v1 = (0, _v50.createDomName)("download-banner"),
    latency: _v2
  }) {
    let _v3 = (0, _v5.useRef)(null),
      _v4 = _v2 === _v74.ELatency.FAIL_SAFE ? {
        title: _v57.translations.liveStreamWithConfidence,
        description: _v57.translations.inOrderToAccessFailSafeStreaming("/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/12426933553809-How-to-stream-to-your-event-with-Fail-Safe-Streaming"),
        image: "https://i.vimeocdn.com/custom_asset/2b3b5c5087d4b778e3531826e6df8ec8",
        cta: _v57.translations.download,
        onClick: () => {
          (0, _v73.createBPv2EventFactory)("vimeo.download_fail_safe_encoder", 2, () => ({
            ...(0, _v72.newTeamCtx)(),
            ...(0, _v72.newWebCtx)(),
            ...(0, _v72.newActionCtx)("click"),
            ...(0, _v72.newLiveCtx)({
              live_feature: "fail_safe_stream"
            }),
            ...(0, _v72.newProductAnalyticsCtx)({
              product: "events",
              feature: "stream",
              location: "drawer",
              element: "button"
            })
          }), () => ({
            device_type: _v16.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
          }))({
            value: null
          }), (0, _v75.downloadFileByPlatform)("https://f.vimeocdn.com/transmitter/mac/TransmitterService.pkg", "https://f.vimeocdn.com/transmitter/win/TransmitterService.exe");
        }
      } : null;
    if (!_v4) return null;
    let {
      title: _v5,
      description: _v6,
      image: _v7,
      cta: _v8,
      onClick: _v9
    } = _v4;
    return (0, _v1.jsxs)(_v43.Flex, {
      ref: _v3,
      id: _v0,
      className: _v1,
      width: "100%",
      padding: (0, _v44.rem)(16),
      gap: (0, _v44.rem)(16),
      borderRadius: "button",
      border: "1px solid",
      borderColor: "stroke",
      align: "center",
      maxWidth: (0, _v44.rem)(_v59.graphicsConfig.RTMP_PREVIEW.MAX_WIDTH),
      backgroundColor: "surface",
      sx: {
        containerType: "inline-size",
        containerName: "banner"
      },
      children: [(0, _v1.jsx)(_v70.Image, {
        id: (0, _v50.createDomName)(_v0, "image"),
        className: (0, _v50.createDomName)(_v1, "image"),
        style: {
          width: (0, _v44.rem)(72)
        },
        alt: _v5,
        src: _v7,
        sx: {
          [`@container banner (max-width: ${(0, _v44.rem)(600)})`]: {
            display: "none"
          }
        }
      }), (0, _v1.jsxs)(_v43.Flex, {
        grow: 1,
        direction: "column",
        gap: (0, _v44.rem)(8),
        children: [(0, _v1.jsx)(_v51.Header, {
          id: (0, _v50.createDomName)(_v0, "title"),
          className: (0, _v50.createDomName)(_v1, "title"),
          size: "md",
          children: _v5
        }), (0, _v1.jsx)(_v68.Paragraph, {
          id: (0, _v50.createDomName)(_v0, "description"),
          className: (0, _v50.createDomName)(_v1, "description"),
          size: "md",
          color: "text-secondary",
          sx: {
            [`@container banner (max-width: ${(0, _v44.rem)(600)})`]: {
              display: "none"
            }
          },
          children: _v6
        })]
      }), (0, _v1.jsx)(_v69.Button, {
        id: (0, _v50.createDomName)(_v0, "download-button"),
        className: (0, _v50.createDomName)(_v1, "download-button"),
        variant: "primary",
        "aria-label": "download",
        rightIcon: (0, _v1.jsx)(_v71.ArrowToBottom, {}),
        onClick: _v9,
        sx: {
          [`@container banner (max-width: ${(0, _v44.rem)(600)})`]: {
            paddingInline: (0, _v44.rem)(8),
            "& > span:first-of-type": {
              display: "none"
            }
          }
        },
        children: (0, _v1.jsx)("span", {
          children: _v8
        })
      })]
    });
  }
  var _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0);
  let _v81 = (0, _v5.forwardRef)(function ({
    id: _v0,
    muted: _v1,
    stream: _v2,
    width: _v3,
    height: _v4,
    children: _v5,
    className: _v6,
    ..._v7
  }, _v8) {
    let _v9 = (0, _v5.useRef)(null),
      _v10 = (0, _v5.useMemo)(() => ({
        width: _v3,
        height: _v4
      }), [_v3, _v4]),
      _v11 = (0, _v5.useMemo)(() => ({
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0
      }), []);
    return (0, _v80.useVideoSourceSync)(_v9, _v2), (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v6,
      ref: _v8,
      position: "relative",
      style: _v10,
      ..._v7,
      children: [(0, _v1.jsx)("video", {
        ref: _v9,
        style: _v11,
        muted: _v1,
        autoPlay: !0,
        playsInline: !0
      }), (0, _v1.jsx)(_v43.Flex, {
        justifyContent: "center",
        alignItems: "center",
        sx: _v67.FULL_WIDTH_ABSOLUTE_STYLE,
        children: _v5
      })]
    });
  });
  var _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  function _v93() {
    let {
        eventLanguages: {
          value: _v0
        },
        audioTracksActions: _v1
      } = (0, _v12.useManager)(_v90.EventAudioTracksManager),
      {
        stats: _v2
      } = (0, _v12.useManager)(_v92.StreamHealthManager),
      _v3 = (0, _v5.useCallback)((_v0, _v1) => ({
        isConnected: _v0 === _v91.EConnectionState.CONNECTED,
        code: _v1,
        label: _v1.getLanguageLabelByCode(_v1)
      }), [_v1]),
      _v4 = _v0?.primary || _v17.liveApplicationConfig.AUDIO_TRACKS.DEFAULT_LANGUAGE,
      _v5 = (0, _v5.useMemo)(() => _v3(_v2.connectionState, _v4), [_v4, _v3, _v2.connectionState]),
      _v6 = (0, _v5.useMemo)(() => _v0?.secondary || [], [_v0?.secondary]),
      _v7 = (0, _v5.useMemo)(() => _v6.map(_v0 => {
        let _v1 = _v2.altEncoders.find(_v0 => _v0.language === _v0);
        return _v3(_v1?.status, _v0);
      }), [_v6, _v2.altEncoders, _v3]);
    return {
      primaryLanguage: _v4,
      secondaryLanguages: _v6,
      languagesInfo: [_v5, ..._v7],
      primaryLanguageInfo: _v5,
      secondaryLanguagesInfo: _v7
    };
  }
  var _v94 = _v0.i(0),
    _v95 = _v0.i(0);
  let _v96 = (0, _v5.forwardRef)(function ({
    id: _v0,
    className: _v1,
    activeLanguageLabel: _v2,
    ..._v3
  }, _v4) {
    return (0, _v1.jsx)(_v78.BokehTooltip, {
      label: "Select Language",
      placement: "top",
      children: (0, _v1.jsx)(_v69.Button, {
        ref: _v4,
        id: (0, _v50.createDomName)(_v0, "language-select"),
        className: (0, _v50.createDomName)(_v1, "language-select"),
        variant: "tertiary",
        size: "md",
        textColor: "white",
        leftIcon: (0, _v1.jsx)(_v95.Translate, {
          boxSize: (0, _v44.rem)(24)
        }),
        ..._v3,
        children: _v2
      })
    });
  });
  var _v97 = _v0.i(0),
    _v98 = _v0.i(0);
  function _v99({
    title: _v0,
    isConnected: _v1,
    isDisabled: _v2 = !1,
    isSelected: _v3,
    isPrimary: _v4,
    onClick: _v5
  }) {
    let _v6 = (0, _v5.useMemo)(() => (0, _v1.jsxs)(_v97.MenuItem, {
      fontSize: (0, _v44.rem)(16),
      px: (0, _v44.rem)(16),
      py: (0, _v44.rem)(12),
      iconSpacing: (0, _v44.rem)(8),
      isDisabled: _v2,
      icon: (0, _v1.jsx)(_v98.Checkmark, {
        boxSize: (0, _v44.rem)(24),
        visibility: _v3 ? "visible" : "hidden"
      }),
      onClick: _v5,
      children: [_v0, _v4 ? " [Primary]" : ""]
    }), [_v2, _v3, _v4, _v5, _v0]);
    return _v1 ? _v6 : (0, _v1.jsx)(_v79.Box, {
      width: "100%",
      sx: {
        span: {
          width: "100%"
        }
      },
      children: (0, _v1.jsx)(_v78.BokehTooltip, {
        label: "Not connected",
        placement: "top",
        children: _v6
      })
    });
  }
  var _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  let _v102 = _v0 => (0, _v1.jsx)(_v101.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M12 5a1 1 0 0 0-1.625-.78L5.65 8H4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1.65l4.725 3.78A1 1 0 0 0 12 19V5ZM6.625 9.78 10 7.08v9.84l-3.375-2.7A1 1 0 0 0 6 14H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 0 .625-.22ZM19.91 12l1.8-1.79a1.005 1.005 0 0 0-1.42-1.42l-1.79 1.8-1.79-1.8a1.004 1.004 0 0 0-1.42 1.42l1.8 1.79-1.8 1.79a1.001 1.001 0 0 0 .325 1.639 1 1 0 0 0 1.095-.22l1.79-1.8 1.79 1.8a.999.999 0 0 0 1.42 0 1 1 0 0 0 0-1.42L19.91 12Z",
      fill: "currentColor"
    })
  });
  var _v103 = _v0.i(0);
  function _v104({
    id: _v0,
    className: _v1,
    isPreviewMuted: _v2,
    onTogglePreviewMute: _v3
  }) {
    return (0, _v1.jsx)(_v78.BokehTooltip, {
      label: _v2 ? "Unmute preview" : "Mute preview",
      placement: "top",
      children: (0, _v1.jsx)(_v100.IconButton, {
        id: _v0,
        className: _v1,
        "aria-label": _v2 ? "Unmute preview" : "Mute preview",
        variant: "tertiary",
        size: "md",
        textColor: "white",
        icon: _v2 ? (0, _v1.jsx)(_v102, {
          boxSize: (0, _v44.rem)(24)
        }) : (0, _v1.jsx)(_v103.VolumeOn, {
          boxSize: (0, _v44.rem)(24)
        }),
        onClick: _v3
      })
    });
  }
  let _v105 = _v0 => (0, _v1.jsx)(_v101.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsx)("g", {
        fill: "currentColor",
        children: (0, _v1.jsx)("path", {
          d: "M20.207 4.207a1 1 0 0 0-1.414-1.414l-8.497 8.497-.005.005-7.498 7.498a1 1 0 1 0 1.414 1.414l3.076-3.076 3.066 2.628A1 1 0 0 0 12 19v-6.586l3.032-3.032a4 4 0 0 1-.2 5.44 1 1 0 0 0 1.415 1.415 6 6 0 0 0 .202-8.272l2.118-2.117a9 9 0 0 1-.204 12.515 1 1 0 0 0 1.414 1.414 11 11 0 0 0 .204-15.344l.226-.226ZM12 5a1 1 0 0 0-1.625-.78L5.65 8H4a3 3 0 0 0-3 3v2.5A2.5 2.5 0 0 0 3.5 16a1 1 0 0 0 .707-.293l7.5-7.5A1 1 0 0 0 12 7.5V5Z"
        })
      })
    }),
    _v106 = _v0 => (0, _v1.jsx)(_v101.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v1.jsxs)("g", {
        fill: "currentColor",
        children: [(0, _v1.jsx)("path", {
          d: "M19.777 4.223a1 1 0 0 0-1.414 1.414 9 9 0 0 1 0 12.726 1 1 0 0 0 1.414 1.414 11 11 0 0 0 0-15.554Z"
        }), (0, _v1.jsx)("path", {
          d: "M16.247 7.753a1 1 0 0 0-1.414 1.414 4 4 0 0 1 0 5.656 1 1 0 0 0 1.414 1.414 6 6 0 0 0 0-8.484ZM11.433 4.099A1 1 0 0 1 12 5v14a1 1 0 0 1-1.625.781l-4.726-3.78H4a3 3 0 0 1-3-3v-2a3 3 0 0 1 3-3h1.65l4.725-3.782a1 1 0 0 1 1.058-.12Z"
        })]
      })
    });
  function _v107({
    id: _v0,
    className: _v1,
    togglePreviewMute: _v2,
    isPreviewMuted: _v3
  }) {
    return (0, _v1.jsx)(_v43.Flex, {
      id: _v0,
      className: _v1,
      cursor: "pointer",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: (0, _v44.rem)(40),
      height: (0, _v44.rem)(40),
      padding: (0, _v44.rem)(8),
      zIndex: 50,
      right: (0, _v44.rem)(12),
      bottom: (0, _v44.rem)(12),
      borderRadius: (0, _v44.rem)(8),
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      _hover: {
        backgroundColor: "rgba(60, 60, 60, 0.3)"
      },
      onClick: _v2,
      children: _v3 ? (0, _v1.jsx)(_v105, {
        color: "white"
      }) : (0, _v1.jsx)(_v106, {
        color: "white"
      })
    });
  }
  function _v108({
    id: _v0 = (0, _v50.createDomName)("rtmp-preview-audio-settings"),
    className: _v1 = (0, _v50.createDomName)("rtmp-preview-audio-settings"),
    studioContext: {
      isPreviewMuted: _v2,
      previewLanguage: _v3,
      studioActions: _v4
    } = (0, _v12.useManager)(_v63.StudioManager)
  }) {
    let {
        primaryLanguage: _v5,
        secondaryLanguages: _v6,
        languagesInfo: _v7
      } = _v93(),
      _v8 = _v6.length > 0,
      _v9 = _v3 || _v5,
      _v10 = (0, _v5.useMemo)(() => _v7.find(_v0 => _v0.code === _v9)?.label, [_v7, _v9]),
      _v11 = (0, _v5.useCallback)(() => {
        _v4.setPreviewMuted(!_v2);
      }, [_v2, _v4]);
    return _v17.liveApplicationConfig.FEATURE.USE_MULTIPLE_AUDIO_TRACKS_IN_RTMP_PREVIEW ? (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      className: _v1,
      position: "absolute",
      bottom: (0, _v44.rem)(16),
      right: (0, _v44.rem)(16),
      alignItems: "center",
      borderRadius: "md",
      backgroundColor: "blackAlpha.700",
      backdropFilter: `blur(${(0, _v44.rem)(40)})`,
      children: [_v8 ? (0, _v1.jsxs)(_v84.Menu, {
        offset: [40, 4],
        placement: "top-end",
        children: [(0, _v1.jsx)(_v85.MenuButton, {
          as: _v96,
          activeLanguageLabel: _v10
        }), (0, _v1.jsx)(_v89.Portal, {
          children: (0, _v1.jsx)(_v87.MenuList, {
            minWidth: (0, _v44.rem)(280),
            padding: 0,
            children: (0, _v1.jsxs)(_v86.MenuGroup, {
              title: _v94.T_AUDIO,
              fontSize: (0, _v44.rem)(16),
              textAlign: "center",
              children: [(0, _v1.jsx)(_v88.Divider, {
                borderColor: "whiteAlpha.200"
              }), _v7.map(_v0 => (0, _v1.jsx)(_v99, {
                title: _v0.label,
                isConnected: _v0.code === _v5 || _v0.isConnected,
                isSelected: _v0.code === _v9,
                isPrimary: _v0.code === _v5,
                onClick: () => _v4.sendSwitchPreviewLanguage(_v0.code)
              }, _v0.code))]
            })
          })
        })]
      }) : null, (0, _v1.jsx)(_v104, {
        id: (0, _v50.createDomName)(_v0, "mute-button"),
        className: (0, _v50.createDomName)(_v1, "mute-button"),
        isPreviewMuted: _v2,
        onTogglePreviewMute: _v11
      })]
    }) : (0, _v1.jsx)(_v107, {
      id: (0, _v50.createDomName)(_v0, "mute-button"),
      className: (0, _v50.createDomName)(_v1, "mute-button"),
      isPreviewMuted: _v2,
      togglePreviewMute: _v11
    });
  }
  function _v109({
    ingestStatus: _v0,
    isStudioPreview: _v1
  }) {
    let _v2 = (0, _v5.useMemo)(() => _v0 === _v27.EIngestStatus.PROVISION_READY || _v0 === _v27.EIngestStatus.PROVISION_REQUESTED ? _v1 ? _v57.translations.streamPreview : _v94.T_INCOMING : "", [_v1, _v0]),
      _v3 = (0, _v5.useMemo)(() => {
        switch (_v0) {
          case _v27.EIngestStatus.STREAMING:
            return _v1 ? _v66.LIVE_LAYOUT_COLOR : _v66.INCOMING_LAYOUT_COLOR;
          case _v27.EIngestStatus.PROVISION_REQUESTED:
          case _v27.EIngestStatus.PROVISION_READY:
            return _v1 ? _v66.WARNING_LAYOUT_COLOR : _v66.INCOMING_LAYOUT_COLOR;
          default:
            return _v66.NONE_LAYOUT_COLOR;
        }
      }, [_v0, _v1]);
    return (0, _v1.jsx)(_v68.Paragraph, {
      position: "absolute",
      left: (0, _v44.rem)(12),
      top: (0, _v44.rem)(12),
      size: "xs",
      color: "white",
      background: _v3,
      borderRadius: (0, _v44.rem)(4),
      margin: 0,
      padding: `${(0, _v44.rem)(4)} ${(0, _v44.rem)(8)}`,
      textTransform: "uppercase",
      userSelect: "none",
      fontWeight: "bold",
      zIndex: _v59.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL,
      children: _v2
    });
  }
  var _v110 = _v0.i(0);
  function _v111({
    ingestStatus: _v0,
    rtmpPreview: _v1,
    isSessionExpired: _v2
  }) {
    let _v3 = (0, _v5.useMemo)(() => _v2 ? ((0, _v73.createBPv2EventFactory)("vimeo.view_inactivity_preview_message", 1, () => ({
      ...(0, _v72.newTeamCtx)(),
      ...(0, _v72.newWebCtx)(),
      ...(0, _v72.newViewCtx)("impression"),
      ...(0, _v72.newLiveCtx)({
        live_feature: null
      }),
      ...(0, _v72.newProductAnalyticsCtx)({
        product: "events",
        feature: "live_event",
        location: "modal"
      })
    }), () => ({
      device_type: _v16.browserConfig.BROWSER?.isMobile ? "mobile_web" : "web"
    }))(), _v57.translations.streamPreviewEndedDueInactivity) : _v1 ? _v57.translations.connectEncoderToBeginPreview : _v57.translations.goLiveFromYourEncoderToStartEvent, [_v1, _v2]);
    return _v0 === _v27.EIngestStatus.PROVISION_READY || _v0 === _v27.EIngestStatus.STREAMING || _v0 === _v27.EIngestStatus.PROVISION_REQUESTED ? (0, _v1.jsx)(_v110.Spinner, {}) : (0, _v1.jsx)(_v68.Paragraph, {
      size: "md",
      margin: 0,
      fontWeight: "bold",
      maxWidth: (0, _v44.rem)(324),
      textAlign: "center",
      color: "white",
      children: _v3
    });
  }
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  function _v116({
    id: _v0 = (0, _v50.createDomName)("stream-view-state"),
    className: _v1 = (0, _v50.createDomName)("stream-view-state"),
    startedAt: _v2,
    endedAt: _v3,
    stats: _v4
  }) {
    let _v5 = (0, _v115.useDurationTimer)({
        startedAt: Number(_v2),
        endedAt: Number(_v3),
        isRecordMode: !1
      }),
      _v6 = function () {
        let {
            stats: _v0
          } = (0, _v12.useManager)(_v92.StreamHealthManager),
          {
            sessionInfo: _v1
          } = (0, _v12.useManager)(_v36.ComposerSessionManager),
          {
            videoWidth: _v2,
            videoHeight: _v3
          } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager),
          [_v4, _v5] = (0, _v64.inline)(() => Number.isFinite(_v3) && Number.isFinite(_v2) ? [_v3, _v2] : Number.isFinite(_v0.videoHeight) && Number.isFinite(_v0.videoWidth) && _v1?.value?.owner?.capabilities?.hasUhdStreaming ? [_v0.videoHeight, _v0.videoWidth] : [0, 0]);
        return Math.min(_v4, _v5) >= 0;
      }();
    return (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      className: _v1,
      position: "absolute",
      left: (0, _v44.rem)(12),
      top: (0, _v44.rem)(12),
      gap: (0, _v44.rem)(8),
      zIndex: _v59.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL,
      children: [(0, _v1.jsxs)(_v53.Center, {
        id: (0, _v50.createDomName)(_v0, "countdown"),
        className: (0, _v50.createDomName)(_v1, "countdown"),
        gap: (0, _v44.rem)(4),
        color: "white",
        background: "red.500",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: (0, _v44.rem)(12),
        lineHeight: (0, _v44.rem)(16),
        padding: `${(0, _v44.rem)(4)} ${(0, _v44.rem)(8)}`,
        borderRadius: (0, _v44.rem)(4),
        sx: {
          "font-variant-numeric": "tabular-nums slashed-zero"
        },
        children: [(0, _v1.jsx)(_v113.CircleShapeFilled, {
          color: "white",
          width: (0, _v44.rem)(8),
          height: (0, _v44.rem)(8)
        }), _v5]
      }), (0, _v1.jsx)(_v114.PreviewWatchersCount, {
        id: (0, _v50.createDomName)(_v0, "viewers-count"),
        className: (0, _v50.createDomName)(_v1, "viewers-count"),
        stats: _v4
      }), _v6 ? (0, _v1.jsx)(_v112.Badge, {
        children: "4K"
      }) : null]
    });
  }
  function _v117({
    id: _v0 = (0, _v50.createDomName)("rtmp-preview-scene"),
    className: _v1 = (0, _v50.createDomName)("rtmp-preview-scene"),
    studioContext: {
      preview: _v2,
      isPreviewMuted: _v3
    } = (0, _v12.useManager)(_v63.StudioManager, ({
      preview: _v0,
      isPreviewMuted: _v1
    }) => [_v0, _v1]),
    eventSettingsContext: {
      settings: {
        value: _v4
      }
    } = (0, _v12.useManager)(_v62.EventSettingsManager, ({
      settings: _v0
    }) => [_v0.value?.rtmpPreview]),
    composerSessionStatusContext: {
      ingestStatus: _v5,
      startedAt: _v6,
      endedAt: _v7,
      liveComposerStatuses: _v8
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager, ({
      ingestStatus: _v0,
      startedAt: _v1,
      endedAt: _v2
    }) => [_v0, _v1, _v2]),
    composerSessionStatsContext: {
      stats: {
        value: _v9
      }
    } = (0, _v12.useManager)(_v82.ComposerSessionStatsManager)
  }) {
    return (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      position: "relative",
      width: "100%",
      minWidth: (0, _v44.rem)(_v59.graphicsConfig.RTMP_PREVIEW.MIN_WIDTH),
      maxWidth: (0, _v44.rem)(_v59.graphicsConfig.RTMP_PREVIEW.MAX_WIDTH),
      onContextMenu: _v83.StopPropagation,
      children: [(0, _v1.jsx)(_v43.Flex, {
        overflow: "hidden",
        width: "100%",
        height: "100%",
        border: "1px solid",
        borderColor: "stroke",
        children: (0, _v1.jsxs)(_v81, {
          stream: _v2,
          muted: _v3,
          background: _v66.BOKEH_PREVIEW_CANVAS_BACKGROUND,
          overflow: "hidden",
          sx: _v67.STRICT_16BY9_BOX_STYLE,
          children: [_v5 === _v27.EIngestStatus.STREAMING ? (0, _v1.jsx)(_v116, {
            startedAt: _v6,
            endedAt: _v7,
            stats: _v9
          }) : (0, _v1.jsx)(_v109, {
            ingestStatus: _v5,
            isStudioPreview: !!_v2
          }), _v2 ? null : (0, _v1.jsx)(_v111, {
            ingestStatus: _v5,
            rtmpPreview: _v4?.rtmpPreview,
            isSessionExpired: _v8.isSessionExpired
          }), _v2 ? (0, _v1.jsx)(_v108, {}) : null]
        })
      }), _v2 ? (0, _v1.jsxs)(_v43.Flex, {
        id: (0, _v50.createDomName)(_v0, "low-res-notice"),
        className: (0, _v50.createDomName)(_v1, "low-res-notice"),
        alignItems: "center",
        marginTop: (0, _v44.rem)(8),
        gap: (0, _v44.rem)(4),
        children: [(0, _v1.jsx)(_v68.Paragraph, {
          size: "sm",
          margin: 0,
          color: "text-secondary",
          children: _v57.translations.lowResView
        }), (0, _v1.jsx)(_v78.BokehTooltip, {
          label: _v57.translations.toSaveBandwidth,
          placement: "bottom",
          children: (0, _v1.jsx)(_v77.InfoCircle, {
            position: "relative",
            color: "text-secondary",
            width: (0, _v44.rem)(16),
            height: (0, _v44.rem)(16)
          })
        })]
      }) : null]
    });
  }
  function _v118(_v0) {
    return (0, _v1.jsx)(_v101.Icon, {
      viewBox: "0 0 52 52",
      fill: "none",
      ..._v0,
      children: (0, _v1.jsx)("path", {
        d: "M15.1673 45.5H36.834M21.6673 16.7918C21.6679 16.5032 21.7453 16.2199 21.8916 15.9711C22.0379 15.7223 22.2478 15.517 22.4998 15.3762C22.7517 15.2354 23.0367 15.1643 23.3252 15.1702C23.6138 15.176 23.8956 15.2586 24.1417 15.4095L32.0803 20.2823C32.3169 20.4277 32.5123 20.6313 32.6479 20.8737C32.7834 21.116 32.8546 21.3891 32.8546 21.6668C32.8546 21.9445 32.7834 22.2176 32.6479 22.4599C32.5123 22.7023 32.3169 22.9059 32.0803 23.0513L24.1417 27.9263C23.8953 28.0774 23.6131 28.16 23.3241 28.1656C23.0352 28.1713 22.75 28.0998 22.4979 27.9585C22.2458 27.8172 22.0359 27.6113 21.8899 27.3619C21.7439 27.1125 21.6671 26.8286 21.6673 26.5396V16.7918ZM8.66732 6.5H43.334C45.7272 6.5 47.6673 8.4401 47.6673 10.8333V32.5C47.6673 34.8932 45.7272 36.8333 43.334 36.8333H8.66732C6.27408 36.8333 4.33398 34.8932 4.33398 32.5V10.8333C4.33398 8.4401 6.27408 6.5 8.66732 6.5Z",
        stroke: "currentColor",
        strokeWidth: 4,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      })
    });
  }
  function _v119({
    id: _v0 = (0, _v50.createDomName)("rtmp-preview-scene-layout"),
    className: _v1 = (0, _v50.createDomName)("rtmp-preview-scene-layout"),
    studioContext: {
      preview: _v2
    } = (0, _v12.useManager)(_v63.StudioManager, ({
      preview: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      liveComposerStatuses: _v3
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager),
    rtmpContext: {
      settings: {
        value: _v4,
        isLoading: _v5
      }
    } = (0, _v12.useManager)(_v62.EventSettingsManager, ({
      settings: _v0
    }) => [_v0.value?.latency, _v0.value?.app?.uri, _v0.isLoading])
  }) {
    let _v6 = (0, _v22.useIsVpaas)(),
      _v7 = !!(_v4?.app?.uri && _v61.vimeoConfig.STREAMYARD_APP_URIS.includes(_v4.app.uri)),
      _v8 = !!(_v4 && (null === _v2 || _v3.isRtcMode) && !_v6),
      [_v9, _v10] = (0, _v5.useState)(() => !(0, _v65.getFromLocalStorage)(_v60.localStorageConfig.MARKETING.HOW_GO_LIVE_NOTICE)),
      _v11 = (0, _v5.useCallback)(() => {
        (0, _v65.setLocalStorageItem)(_v60.localStorageConfig.MARKETING.HOW_GO_LIVE_NOTICE, !0), _v10(!1);
      }, []),
      _v12 = _v3.isSessionUnavailable || _v3.isSessionReady && _v3.isRtcMode,
      _v13 = (0, _v64.inline)(() => _v3.isSessionUnknown || _v12 && _v5 ? (0, _v1.jsx)(_v58.BokehSkeleton, {
        id: (0, _v50.createDomName)(_v0, "preview"),
        className: (0, _v50.createDomName)(_v1, "preview"),
        position: "relative",
        width: "100%",
        height: "auto",
        borderRadius: 0,
        maxWidth: (0, _v44.rem)(_v59.graphicsConfig.RTMP_PREVIEW.MAX_WIDTH),
        children: (0, _v1.jsx)(_v43.Flex, {
          id: (0, _v50.createDomName)(_v0, "loader"),
          className: (0, _v50.createDomName)(_v1, "loader"),
          sx: _v67.STRICT_16BY9_BOX_STYLE
        })
      }) : _v12 ? (0, _v1.jsxs)(_v43.Flex, {
        id: (0, _v50.createDomName)(_v0, "preview"),
        className: (0, _v50.createDomName)(_v1, "preview"),
        gap: (0, _v44.rem)(16),
        direction: "column",
        alignItems: "center",
        position: "relative",
        width: "100%",
        maxWidth: (0, _v44.rem)(_v59.graphicsConfig.RTMP_PREVIEW.MAX_WIDTH),
        children: [_v9 && !_v7 ? (0, _v1.jsx)(_v54.Alert, {
          onClose: _v11,
          width: "auto",
          alignItems: "center",
          paddingY: (0, _v44.rem)(8),
          children: (0, _v1.jsx)(_v55.AlertDescription, {
            children: _v57.translations.connectEncoderHelper
          })
        }) : null, (0, _v1.jsx)(_v43.Flex, {
          overflow: "hidden",
          border: "1px solid",
          borderColor: "stroke",
          sx: _v67.STRICT_16BY9_BOX_STYLE,
          children: (0, _v1.jsx)(_v53.Center, {
            sx: _v67.FULL_WIDTH_ABSOLUTE_STYLE,
            background: "fill-skeleton",
            children: (0, _v1.jsxs)(_v43.Flex, {
              direction: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: (0, _v44.rem)(8),
              padding: (0, _v44.rem)(8),
              maxWidth: (0, _v44.rem)(570),
              textAlign: "center",
              children: [_v7 ? (0, _v1.jsx)(_v118, {
                boxSize: "lg"
              }) : (0, _v1.jsx)(_v56.LinkBroken, {
                boxSize: "lg"
              }), (0, _v1.jsx)(_v51.Header, {
                id: (0, _v50.createDomName)(_v0, "connect-message"),
                className: (0, _v50.createDomName)(_v1, "connect-message"),
                size: "md",
                children: _v7 ? _v57.translations.connectedToStreamYardTitle : _v57.translations.connectEncoder
              }), (0, _v1.jsx)(_v52.Text, {
                id: (0, _v50.createDomName)(_v0, "connect-description"),
                className: (0, _v50.createDomName)(_v1, "connect-description"),
                color: "text-secondary",
                variant: "body-md",
                children: _v7 ? _v57.translations.connectedToStreamYardDescription : _v57.translations.connectEncoderDescription
              })]
            })
          })
        }), _v8 && !_v7 ? (0, _v1.jsx)(_v76, {
          id: (0, _v50.createDomName)(_v0, "preview-banner"),
          className: (0, _v50.createDomName)(_v1, "preview-banner"),
          latency: _v4?.latency
        }) : null]
      }) : _v3.isSessionEnded ? (0, _v1.jsx)(_v43.Flex, {
        id: (0, _v50.createDomName)(_v0, "preview"),
        className: (0, _v50.createDomName)(_v1, "preview"),
        position: "relative",
        width: "100%",
        border: "1px solid",
        borderColor: "stroke",
        overflow: "hidden",
        maxWidth: (0, _v44.rem)(_v59.graphicsConfig.RTMP_PREVIEW.MAX_WIDTH),
        children: (0, _v1.jsx)(_v43.Flex, {
          overflow: "hidden",
          sx: _v67.STRICT_16BY9_BOX_STYLE,
          children: (0, _v1.jsx)(_v43.Flex, {
            background: _v66.BOKEH_PREVIEW_CANVAS_BACKGROUND,
            textAlign: "center",
            justifyContent: "center",
            align: "center",
            sx: _v67.FULL_WIDTH_ABSOLUTE_STYLE,
            children: (0, _v1.jsx)(_v51.Header, {
              id: (0, _v50.createDomName)(_v0, "ended-message"),
              className: (0, _v50.createDomName)(_v1, "ended-message"),
              size: "md",
              color: "white",
              children: _v57.translations.eventEnded
            })
          })
        })
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v117, {
          id: (0, _v50.createDomName)(_v0, "preview-scene"),
          className: (0, _v50.createDomName)(_v1, "preview-scene")
        }), _v8 ? (0, _v1.jsx)(_v76, {
          id: (0, _v50.createDomName)(_v0, "preview-banner"),
          className: (0, _v50.createDomName)(_v1, "preview-banner"),
          latency: _v4?.latency
        }) : null]
      }));
    return (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      className: _v1,
      position: "relative",
      alignItems: "center",
      justifyContent: "flex-start",
      direction: "column",
      grow: 1,
      width: "100%",
      margin: `${(0, _v44.rem)(24)} auto 0`,
      padding: `0 ${(0, _v44.rem)(24)}`,
      gap: (0, _v44.rem)(24),
      sx: {
        [`@media screen and (max-height: ${(0, _v44.rem)(860)})`]: {
          maxWidth: `calc((100vh - ${(0, _v44.rem)(180)}) * 1.4)`
        },
        [`@media screen and (max-height: ${(0, _v44.rem)(0)}) and (min-height: ${(0, _v44.rem)(860)})`]: {
          maxWidth: `calc((100vh - ${(0, _v44.rem)(180)}) * 1.45)`
        }
      },
      children: [(0, _v1.jsx)(_v43.Flex, {
        grow: 1
      }), _v13, (0, _v1.jsx)(_v43.Flex, {
        grow: 1
      })]
    });
  }
  var _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v0.i(0),
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = _v0.i(0),
    _v130 = _v0.i(0),
    _v131 = _v0.i(0),
    _v132 = _v0.i(0),
    _v133 = _v0.i(0),
    _v134 = _v0.i(0),
    _v135 = _v0.i(0);
  function _v136({
    id: _v0 = (0, _v50.createDomName)("landing-page-tab"),
    className: _v1 = (0, _v50.createDomName)("landing-page-tab")
  }) {
    let _v2 = (0, _v135.useScrollbarStyles)();
    return (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)(),
      children: [(0, _v1.jsx)(_v133.LeftPanelHeader, {
        label: _v57.translations.eventLandingPage,
        controls: (0, _v1.jsx)(_v132.LeftPanelDismiss, {})
      }), (0, _v1.jsx)(_v131.LeftPanelContent, {
        children: (0, _v1.jsx)(_v79.Box, {
          id: (0, _v50.createDomName)(_v0, "scroll"),
          className: (0, _v50.createDomName)(_v1, "scroll"),
          width: "100%",
          sx: {
            ...(0, _v134.createTabListScrollStyle)({
              position: "inherit"
            }),
            ..._v2
          },
          children: (0, _v1.jsx)(_v130.LandingPageSettings, {})
        })
      })]
    });
  }
  var _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0),
    _v140 = _v0.i(0),
    _v141 = _v0.i(0),
    _v142 = _v0.i(0),
    _v143 = _v0.i(0),
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0),
    _v149 = _v0.i(0),
    _v150 = _v0.i(0),
    _v151 = _v0.i(0),
    _v152 = _v0.i(0),
    _v153 = _v0.i(0),
    _v154 = _v0.i(0),
    _v155 = _v0.i(0),
    _v156 = _v0.i(0),
    _v157 = _v0.i(0);
  let _v158 = (0, _v0.i(0).createDefaultPollInteractionObject)();
  function _v159({
    id: _v0 = (0, _v50.createDomName)("poll-tab"),
    className: _v1 = (0, _v50.createDomName)("poll-tab"),
    pollContext: {
      isHydrated: _v2,
      polls: _v3,
      pollsHistory: _v4,
      activePollId: _v5,
      pollActions: {
        createPoll: _v6,
        updatePoll: _v7,
        deletePoll: _v8,
        setActivePoll: _v9
      }
    } = (0, _v12.useManager)(_v155.PollManager),
    composerSessionContext: {
      sessionType: _v10
    } = (0, _v12.useManager)(_v36.ComposerSessionManager, ({
      sessionType: _v0
    }) => [_v0])
  }) {
    let [_v11, _v12] = (0, _v5.useState)(!1),
      [_v13, _v14] = (0, _v5.useState)(null),
      {
        setIsHeaderEnabled: _v15
      } = (0, _v154.useResponsiveSidebarContext)(),
      _v16 = (0, _v5.useMemo)(() => Object.values(_v3), [_v3]),
      _v17 = (0, _v22.useIsVpaas)(),
      _v18 = (0, _v5.useCallback)(() => {
        _v12(!0), _v15(!1), (0, _v156.trackClickAddPoll)();
      }, [_v15]),
      {
        panels: _v19,
        activePolls: _v20,
        activePanelId: _v21,
        setActivePanelId: _v22
      } = (0, _v149.usePollPanels)(_v3),
      _v23 = (0, _v5.useCallback)(_v0 => {
        _v0.state = _v157.EPollState.CLOSED, _v7(_v0.id, _v0);
      }, [_v7]),
      _v24 = (0, _v5.useCallback)(_v0 => {
        _v0.state = _v157.EPollState.ARCHIVED, _v7(_v0.id, _v0);
      }, [_v7]),
      _v25 = (0, _v5.useCallback)(_v0 => {
        let _v1 = _v5 ? _v3[_v5] : null;
        _v1 && _v24(_v1), _v7(_v0.id, {
          ..._v0,
          state: _v157.EPollState.OPENED
        }), _v9(_v0.id);
      }, [_v5, _v3, _v7, _v9, _v24]),
      _v26 = (0, _v5.useCallback)(_v0 => {
        _v14(_v0), _v15(!1);
      }, [_v15]),
      _v27 = (0, _v5.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v28 = _v16.some(_v0 => _v0.state === _v157.EPollState.OPENED),
      _v29 = _v16.some(_v0 => _v0.state === _v157.EPollState.CLOSED),
      _v30 = !_v28,
      _v31 = _v10 === _v20.EComposerSessionType.VENUE,
      _v32 = !_v17 && !_v31,
      _v33 = (0, _v5.useCallback)(() => {
        _v12(!1), _v15(!0);
      }, [_v15]),
      _v34 = (0, _v5.useCallback)(_v0 => (_v15(!0), _v12(!1), _v6(_v0)), [_v15, _v6]),
      _v35 = (0, _v5.useCallback)(() => {
        _v14(null), _v15(!0);
      }, [_v15]),
      _v36 = (0, _v5.useCallback)(_v0 => (_v15(!0), _v14(null), _v7(_v0.id, _v0)), [_v15, _v7]);
    (0, _v5.useEffect)(() => {
      (0, _v156.trackViewPoll)();
    }, []);
    let _v37 = (0, _v135.useScrollbarStyles)();
    return _v11 ? (0, _v1.jsx)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)(),
      children: (0, _v1.jsx)(_v131.LeftPanelContent, {
        withTopPadding: !0,
        children: (0, _v1.jsx)(_v147.PollForm, {
          poll: _v158,
          onClose: _v33,
          onSubmit: _v34
        })
      })
    }) : _v13 ? (_v15(!1), (0, _v1.jsx)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)(),
      children: (0, _v1.jsx)(_v131.LeftPanelContent, {
        withTopPadding: !0,
        children: (0, _v1.jsx)(_v147.PollForm, {
          poll: _v13,
          onClose: _v35,
          onSubmit: _v36
        })
      })
    })) : _v2 ? _v16.length ? (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)(),
      children: [(0, _v1.jsx)(_v133.LeftPanelHeader, {
        label: _v94.T_POLLS,
        controls: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v146.TooltipIconButton, {
            id: (0, _v50.createDomName)(_v0, "add-button"),
            className: (0, _v50.createDomName)(_v1, "add-button"),
            "aria-label": _v57.translations.addPoll,
            icon: (0, _v1.jsx)(_v144.Plus, {}),
            size: "sm",
            variant: "tertiary",
            placement: "bottom",
            label: _v57.translations.addPoll,
            onClick: _v18
          }), (0, _v1.jsx)(_v151.PollSettingsButton, {
            id: (0, _v50.createDomName)(_v0, "settings-button"),
            className: (0, _v50.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v32,
            buttonIcon: (0, _v1.jsx)(_v143.EllipsisV, {})
          }), (0, _v1.jsx)(_v132.LeftPanelDismiss, {
            id: (0, _v50.createDomName)(_v0, "dismiss-button"),
            className: (0, _v50.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v1.jsxs)(_v131.LeftPanelContent, {
        children: [(0, _v1.jsxs)(_v137.Tabs, {
          size: "sm",
          sx: _v134.TABS_STYLES,
          onChange: _v22,
          children: [(0, _v1.jsxs)(_v138.TabList, {
            children: [_v19.map(({
              id: _v0,
              label: _v1
            }) => (0, _v1.jsx)(_v139.Tab, {
              className: (0, _v50.createDomName)(_v0, _v0, "tab"),
              children: _v1
            }, _v0)), (0, _v1.jsx)(_v137.TabIndicator, {})]
          }), (0, _v1.jsx)(_v140.TabPanels, {
            sx: _v134.TAB_PANELS_STYLES,
            children: _v19.map(({
              id: _v0,
              polls: _v1
            }) => (0, _v1.jsx)(_v141.TabPanel, {
              className: (0, _v50.createDomName)(_v0, _v0, "tab-panel"),
              maxWidth: "100%",
              maxHeight: "100%",
              overflowY: "visible",
              sx: _v134.TAB_PANEL_STYLES,
              children: (0, _v1.jsx)(_v79.Box, {
                id: (0, _v50.createDomName)(_v0, _v0, "scroll"),
                sx: {
                  ...(0, _v134.createTabListScrollStyle)(),
                  ..._v37
                },
                children: (0, _v1.jsx)(_v79.Box, {
                  id: (0, _v50.createDomName)(_v0, _v0, "column"),
                  sx: (0, _v134.createTabListColumnStyle)(!0),
                  children: 0 === _v1.length ? (0, _v1.jsx)(_v150.PollEmptyState, {
                    id: (0, _v50.createDomName)(_v0, _v0, "empty-placeholder"),
                    className: (0, _v50.createDomName)(_v0, _v0, "empty-placeholder"),
                    width: "100%",
                    height: "100%",
                    padding: `0 ${(0, _v44.rem)(24)} 0 0`,
                    buttonLabel: _v94.T_CREATE_POLL,
                    description: 0 === _v0 ? _v57.translations.createPollToInteractWithAudience : _v57.translations.noPollsArchived,
                    control: 0 === _v0,
                    history: 0 === _v0 ? _v4 : null,
                    onCreateClick: _v18
                  }) : _v1.map(_v0 => {
                    var _v1;
                    let _v2, _v3;
                    return (0, _v1.jsx)(_v79.Box, {
                      sx: _v134.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                      children: (0, _v1.jsx)(_v148.PollItem, {
                        poll: _v0,
                        isAnyPollPublished: _v29,
                        canOpenPoll: _v30,
                        menuAttach: "right-start",
                        itemActions: {
                          onPollOpen: _v25,
                          onPollClose: _v23,
                          onPollArchive: _v24
                        },
                        menuActions: (_v1 = {
                          onPollEdit: _v26,
                          onPollDelete: _v27
                        }, _v2 = _v0.state === _v157.EPollState.DRAFT, _v3 = [], _v2 && _v3.push({
                          key: "edit",
                          label: _v57.translations.edit,
                          onClick: () => {
                            _v1.onPollEdit(_v0), (0, _v156.trackClickEditPoll)();
                          },
                          icon: (0, _v1.jsx)(_v142.EditPencil, {})
                        }, {
                          key: "delete",
                          label: _v57.translations.removeFromEvent,
                          onClick: () => {
                            _v1.onPollDelete(_v0.id), (0, _v156.trackRemovePollFromEvent)();
                          },
                          icon: (0, _v1.jsx)(_v145.TrashBin, {})
                        }), _v3)
                      })
                    }, _v0.id);
                  })
                })
              })
            }, _v0))
          }, _v21)]
        }), (0, _v1.jsx)(_v79.Box, {
          position: "relative",
          children: (0, _v1.jsx)(_v153.HorizontalScrollShadow, {
            color: "surface"
          })
        })]
      })]
    }) : (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v133.LeftPanelHeader, {
        label: _v94.T_POLLS,
        controls: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v146.TooltipIconButton, {
            id: (0, _v50.createDomName)(_v0, "add-button"),
            className: (0, _v50.createDomName)(_v1, "add-button"),
            "aria-label": _v57.translations.addPoll,
            icon: (0, _v1.jsx)(_v144.Plus, {}),
            size: "sm",
            variant: "tertiary",
            placement: "bottom",
            label: _v57.translations.addPoll,
            onClick: _v18
          }), (0, _v1.jsx)(_v151.PollSettingsButton, {
            id: (0, _v50.createDomName)(_v0, "settings-button"),
            className: (0, _v50.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v32,
            buttonIcon: (0, _v1.jsx)(_v143.EllipsisV, {})
          }), (0, _v1.jsx)(_v132.LeftPanelDismiss, {
            id: (0, _v50.createDomName)(_v0, "dismiss-button"),
            className: (0, _v50.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v1.jsx)(_v131.LeftPanelContent, {
        children: (0, _v1.jsx)(_v150.PollEmptyState, {
          id: _v0,
          className: _v1,
          buttonLabel: _v94.T_CREATE_POLL,
          description: _v57.translations.createPollToInteractWithAudience,
          history: _v4,
          sx: (0, _v134.createTabWrapperStyle)(),
          onCreateClick: _v18
        })
      })]
    }) : (0, _v1.jsx)(_v79.Box, {
      id: _v0,
      className: _v1,
      position: "relative",
      sx: (0, _v134.createTabWrapperStyle)(),
      children: (0, _v1.jsx)(_v152.BlockingLoadingWrapper, {
        id: (0, _v50.createDomName)(_v0, "loader"),
        opacity: .25,
        withAnimation: !0
      })
    });
  }
  var _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0),
    _v164 = _v0.i(0),
    _v165 = _v0.i(0),
    _v166 = _v0.i(0),
    _v167 = _v0.i(0),
    _v168 = _v0.i(0),
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v0.i(0),
    _v176 = _v0.i(0),
    _v177 = _v0.i(0);
  function _v178({
    id: _v0 = (0, _v50.createDomName)("qna-tab"),
    className: _v1 = (0, _v50.createDomName)("qna-tab"),
    qnaContext: {
      activeSessionId: _v2,
      activeSessionPinnedQuestionId: _v3,
      isEventModerated: _v4,
      isHydrated: _v5,
      config: {
        canUseQnaModeration: _v6
      },
      qnaReplies: _v7,
      qnaActions: {
        approveQuestion: _v8,
        archiveQuestion: _v9,
        unArchiveQuestion: _v10,
        pinQuestion: _v11,
        unPinQuestion: _v12,
        deleteQuestionReply: _v13
      }
    } = (0, _v12.useManager)(_v173.QnAManager),
    composerSessionContext: {
      sessionType: _v14
    } = (0, _v12.useManager)(_v36.ComposerSessionManager, ({
      sessionType: _v0
    }) => [_v0])
  }) {
    let {
        selectedQuestionId: _v15,
        selectedQuestionElement: _v16,
        selectedQuestionState: _v17,
        onSelectedQuestion: _v18,
        onDeselectQuestion: _v19
      } = (0, _v175.useQnaResponding)(),
      {
        panels: _v20,
        currentQuestions: _v21,
        activePanelId: _v22,
        setActivePanelId: _v23
      } = (0, _v169.useQnaPanels)(),
      {
        getIdByIndex: _v24,
        getIndexById: _v25
      } = (0, _v171.useTabsMapping)(_v20),
      _v26 = (0, _v172.useSimpleNotification)(),
      _v27 = (0, _v22.useIsVpaas)(),
      _v28 = null !== _v15 && (0, _v174.canReplyQuestion)(_v21.find(_v0 => _v0.id === _v15)) && !(0, _v174.hasQuestionReplies)(_v15 ? _v7?.[_v15] : void 0),
      _v29 = _v14 === _v20.EComposerSessionType.VENUE,
      _v30 = !_v27 && !_v29;
    (0, _v5.useEffect)(() => {
      (0, _v176.trackViewQna)();
    }, []);
    let _v31 = (0, _v5.useCallback)(_v0 => {
        _v8(_v0.id), (0, _v176.trackApproveModeratedQuestion)(), _v26({
          message: _v94.T_QUESTION_APPROVED
        });
      }, [_v8, _v26]),
      _v32 = (0, _v5.useCallback)(_v0 => {
        _v9(_v0.id, !!_v0.approved), (0, _v176.trackArchiveQuestion)(_v4), _v26({
          message: _v94.T_QUESTION_ARCHIVED
        });
      }, [_v9, _v4, _v26]),
      _v33 = (0, _v5.useCallback)(_v0 => {
        _v10(_v0.id, !!_v0.approved), (0, _v176.trackUnarchiveQuestion)(_v4), _v26({
          message: _v94.T_QUESTION_UNARCHIVED
        });
      }, [_v4, _v26, _v10]),
      _v34 = (0, _v5.useCallback)(_v0 => {
        _v11(_v0), (0, _v176.trackPinQuestion)(), _v26({
          message: _v94.T_QUESTION_PINNED
        });
      }, [_v26, _v11]),
      _v35 = (0, _v5.useCallback)(_v0 => {
        _v12(_v0), (0, _v176.trackUnpinQuestion)(), _v26({
          message: _v94.T_QUESTION_UNPINNED
        });
      }, [_v26, _v12]),
      _v36 = (0, _v5.useCallback)((_v0, _v1) => {
        _v13(_v0, _v1), _v26({
          message: _v94.T_QUESTION_REPLY_DELETED
        });
      }, [_v26, _v13]),
      _v37 = (0, _v5.useCallback)(_v0 => {
        _v23(_v24(_v0)), _v19(), (0, _v176.trackSwitchActiveTab)();
      }, [_v24, _v19, _v23]);
    return _v5 ? _v2 ? (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)(),
      children: [(0, _v1.jsx)(_v133.LeftPanelHeader, {
        label: _v94.T_QNA,
        controls: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v164.QnaSettingsButton, {
            id: (0, _v50.createDomName)(_v0, "settings-button"),
            className: (0, _v50.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v30,
            buttonIcon: (0, _v1.jsx)(_v143.EllipsisV, {})
          }), (0, _v1.jsx)(_v132.LeftPanelDismiss, {
            id: (0, _v50.createDomName)(_v0, "dismiss-button"),
            className: (0, _v50.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v1.jsxs)(_v131.LeftPanelContent, {
        children: [(0, _v1.jsxs)(_v137.Tabs, {
          size: "sm",
          index: _v25(_v22),
          sx: _v134.TABS_STYLES,
          onChange: _v37,
          children: [(0, _v1.jsxs)(_v138.TabList, {
            children: [_v20.map(({
              id: _v0,
              label: _v1
            }) => (0, _v1.jsx)(_v139.Tab, {
              className: (0, _v50.createDomName)(_v0, _v0, "tab"),
              children: _v1
            }, _v0)), (0, _v1.jsx)(_v137.TabIndicator, {})]
          }), (0, _v1.jsx)(_v140.TabPanels, {
            sx: _v134.TAB_PANELS_STYLES,
            children: _v20.map(({
              id: _v0,
              questions: _v1
            }) => (0, _v1.jsx)(_v141.TabPanel, {
              className: (0, _v50.createDomName)(_v0, _v0, "tab-panel"),
              sx: _v134.TAB_PANEL_STYLES,
              children: (0, _v1.jsx)(_v166.QuestionsList, {
                id: (0, _v50.createDomName)(_v0, _v0, "questions-list"),
                tabId: _v0,
                selectedQuestionElement: _v16,
                questions: _v1,
                pinnedQuestionId: _v3,
                isManagementAccessed: !0,
                scrollBackground: "surface",
                itemRenderer: _v0 => {
                  let _v1 = _v15 === _v0.id ? _v66.FOCUSED_STATE_COLOR : "transparent";
                  return (0, _v1.jsxs)(_v79.Box, {
                    sx: _v134.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                    children: [(0, _v1.jsx)(_v165.NewQuestionManageItem, {
                      question: _v0,
                      isActive: _v0.id === _v15,
                      isPinned: _v0.id === _v3,
                      questionReplies: _v7[_v0.id],
                      onQuestionSelected: _v18,
                      onQuestionDeselected: _v19,
                      onQuestionApprove: _v31,
                      onQuestionArchive: _v32,
                      onQuestionUnArchive: _v33,
                      onQuestionPin: _v34,
                      onQuestionUnPin: _v35,
                      onDeleteQuestionReply: _v36
                    }), (0, _v1.jsx)(_v161.SceneItemOverlay, {
                      size: "sm",
                      width: 2,
                      borderRadius: 8,
                      zIndex: "auto",
                      color: _v1
                    })]
                  }, _v0.id);
                },
                placeholder: (0, _v1.jsx)(_v170.EmptyStatePlaceholder, {
                  id: (0, _v50.createDomName)(_v0, _v0, "empty-placeholder"),
                  className: (0, _v50.createDomName)(_v0, _v0, "empty-placeholder"),
                  isWithPadding: !0,
                  icon: (0, _v1.jsx)(_v160.ReviewQuestion, {
                    boxSize: "lg"
                  }),
                  description: _v0 === _v157.EQnaTab.PENDING ? _v94.T_NO_QUESTIONS_PENDING : _v94.T_NO_QUESTIONS_YET,
                  control: null
                })
              })
            }, _v0))
          }, _v22)]
        }), (0, _v1.jsxs)(_v79.Box, {
          position: "relative",
          width: "100%",
          onMouseDown: _v177.stopEventPropagation,
          onTouchStart: _v177.stopEventPropagation,
          children: [(0, _v1.jsx)(_v153.HorizontalScrollShadow, {
            color: "surface"
          }), _v28 ? (0, _v1.jsx)(_v163.QnaReplyForm, {
            id: (0, _v50.createDomName)(_v0, "reply-form"),
            selectedQuestionId: _v15,
            isApproveNeeded: _v17 === _v157.EQuestionState.PENDING,
            onDismiss: _v19
          }) : (0, _v1.jsx)(_v167.SessionControlButton, {
            id: (0, _v50.createDomName)(_v0, "session-control-button")
          })]
        })]
      })]
    }) : (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)(),
      children: [(0, _v1.jsx)(_v133.LeftPanelHeader, {
        label: _v94.T_QNA,
        controls: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v164.QnaSettingsButton, {
            id: (0, _v50.createDomName)(_v0, "settings-button"),
            className: (0, _v50.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v30,
            buttonIcon: (0, _v1.jsx)(_v143.EllipsisV, {})
          }), (0, _v1.jsx)(_v132.LeftPanelDismiss, {
            id: (0, _v50.createDomName)(_v0, "dismiss-button"),
            className: (0, _v50.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v1.jsxs)(_v131.LeftPanelContent, {
        justifyContent: "center",
        alignItems: "center",
        children: [(0, _v1.jsx)(_v168.SessionInactive, {
          flexGrow: 0,
          height: "auto"
        }), _v27 ? null : (0, _v1.jsx)(_v162.QnAUpsell, {
          canUseQnaModeration: _v6
        })]
      })]
    }) : (0, _v1.jsx)(_v79.Box, {
      id: _v0,
      className: _v1,
      position: "relative",
      sx: (0, _v134.createTabWrapperStyle)(),
      children: (0, _v1.jsx)(_v152.BlockingLoadingWrapper, {
        id: (0, _v50.createDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  let _v179 = (0, _v5.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.RtmpDebugTab
  })));
  function _v180({
    id: _v0 = (0, _v50.createDomName)("rtmp-panel-left"),
    className: _v1 = (0, _v50.createDomName)("rtmp-panel-left"),
    composerSessionStatusContext: {
      isHydrated: _v2
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager, ({
      isHydrated: _v0
    }) => [_v0]),
    panelsContext: {
      leftPanel: _v3
    } = (0, _v12.useManager)(_v128.PanelsManager)
  }) {
    let _v4 = (0, _v22.useIsVpaas)(),
      _v5 = (0, _v127.useCanSeeDebugTools)(),
      _v6 = !_v4,
      {
        settings: _v7
      } = (0, _v129.useOrionSettings)(),
      _v8 = (0, _v5.useMemo)(() => {
        let _v0 = [{
          id: _v125.ELeftPanelId.QNA,
          icon: (0, _v1.jsx)(_v124.PanelQnaIcon, {
            isActive: _v3 === _v125.ELeftPanelId.QNA,
            isManagementAccessed: !0
          }),
          header: _v94.T_QNA,
          content: _v178,
          hash: _v125.ELeftPanelHash.QNA
        }, {
          id: _v125.ELeftPanelId.POLLS,
          icon: (0, _v1.jsx)(_v123.PanelPollIcon, {
            isActive: _v3 === _v125.ELeftPanelId.POLLS
          }),
          header: _v94.T_POLLS,
          content: _v159,
          hash: _v125.ELeftPanelHash.POLLS
        }];
        return !_v4 && _v7.enable_event_series_in_dev_features && _v0.push({
          id: _v125.ELeftPanelId.LANDING_PAGE,
          icon: (0, _v1.jsx)(_v121.BrowserWindow, {}),
          header: _v57.translations.landingPage,
          content: _v136,
          isNew: !0,
          hash: _v125.ELeftPanelHash.LANDING_PAGE
        }), _v5 && _v0.push({
          id: _v125.ELeftPanelId.DEBUG,
          icon: (0, _v1.jsx)(_v120.Processor, {}),
          header: _v57.translations.debug,
          hash: _v125.ELeftPanelHash.DEBUG,
          content: () => (0, _v1.jsx)(_v5.Suspense, {
            fallback: null,
            children: (0, _v1.jsx)(_v179, {})
          })
        }), _v0;
      }, [_v5, _v3, _v4, _v7.enable_event_series_in_dev_features]);
    return (0, _v1.jsx)(_v126.LeftPanel, {
      id: _v0,
      className: _v1,
      isLoading: !_v2,
      defaultValue: null,
      items: _v8,
      footer: _v6 ? (0, _v1.jsx)(_v122.FooterHelpMenu, {}) : null
    });
  }
  var _v181 = _v0.i(0),
    _v182 = _v0.i(0),
    _v183 = _v0.i(0),
    _v184 = _v0.i(0);
  function _v185({
    id: _v0 = (0, _v50.createDomName)("right-panel-back-button"),
    className: _v1 = (0, _v50.createDomName)("right-panel-back-button"),
    onClick: _v2
  }) {
    return (0, _v1.jsx)(_v100.IconButton, {
      id: (0, _v50.createDomName)(_v0, "back"),
      className: (0, _v50.createDomName)(_v1, "back"),
      "aria-label": "back",
      variant: "tertiary",
      icon: (0, _v1.jsx)(_v184.ChevronLeft, {}),
      size: "sm",
      onClick: _v2
    });
  }
  var _v186 = _v0.i(0),
    _v187 = _v0.i(0),
    _v188 = _v0.i(0),
    _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = _v0.i(0),
    _v192 = _v0.i(0);
  function _v193({
    id: _v0 = (0, _v50.createDomName)("audio-tracks-tab"),
    className: _v1 = (0, _v50.createDomName)("audio-tracks-tab"),
    panelsContext: {
      panelActions: _v2
    } = (0, _v12.useManager)(_v128.PanelsManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v3
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager),
    sessionContext: {
      permissions: {
        canUseBackupStream: _v4
      }
    } = (0, _v12.useManager)(_v36.ComposerSessionManager),
    eventSettingsContext: {
      settings: {
        value: _v5
      }
    } = (0, _v12.useManager)(_v62.EventSettingsManager)
  }) {
    let _v6 = (0, _v135.useScrollbarStyles)({
        width: (0, _v44.rem)(0),
        scrollbarColor: "transparent"
      }),
      {
        isOpen: _v7,
        onOpen: _v8,
        onClose: _v9
      } = (0, _v183.useDisclosure)(),
      {
        primaryLanguageInfo: _v10,
        secondaryLanguagesInfo: _v11
      } = _v93(),
      _v12 = _v3.isSessionLive,
      {
        selectedMode: _v13
      } = (0, _v190.useEncoderTabState)(),
      _v14 = _v5?.streamKey ?? "",
      _v15 = (0, _v64.inline)(() => _v13 === _v191.EEncoderMode.RTMPS ? _v5?.rtmpsLink ?? "" : _v13 === _v191.EEncoderMode.RTMP ? _v5?.rtmpLink ?? "" : ""),
      _v16 = (0, _v5.useCallback)(() => {
        _v2.setRightPanel(_v39.ERightPanelId.EVENT_SETTINGS);
      }, [_v2]);
    return _v10 ? (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: [(0, _v1.jsx)(_v188.RightPanelHeader, {
        id: (0, _v50.createDomName)(_v0, "header"),
        className: (0, _v50.createDomName)(_v1, "header"),
        label: _v94.T_LANGUAGE_STREAMS,
        leftControls: (0, _v1.jsx)(_v185, {
          onClick: _v16
        }),
        rightControls: (0, _v1.jsx)(_v187.RightPanelDismiss, {})
      }), (0, _v1.jsxs)(_v186.RightPanelContent, {
        id: (0, _v50.createDomName)(_v0, "content"),
        className: (0, _v50.createDomName)(_v1, "content"),
        children: [(0, _v1.jsxs)(_v43.Flex, {
          id: (0, _v50.createDomName)(_v0, "scroll"),
          className: (0, _v50.createDomName)(_v1, "scroll"),
          overflowY: "scroll",
          height: "100%",
          direction: "column",
          gap: (0, _v44.rem)(24),
          sx: _v6,
          children: [(0, _v1.jsx)(_v68.Paragraph, {
            size: "md",
            children: _v94.T_SHARE_STREAM_CREDENTIALS
          }), (0, _v1.jsxs)(_v43.Flex, {
            direction: "column",
            gap: (0, _v44.rem)(16),
            children: [(0, _v1.jsxs)(_v43.Flex, {
              alignItems: "center",
              gap: (0, _v44.rem)(8),
              children: [(0, _v1.jsx)(_v78.BokehTooltip, {
                label: _v10.isConnected ? _v94.T_CONNECTED : _v94.T_NO_SIGNAL,
                children: (0, _v1.jsx)(_v79.Box, {
                  width: (0, _v44.rem)(10),
                  height: (0, _v44.rem)(10),
                  background: _v10.isConnected ? "status-positive-primary" : "gray.500",
                  cursor: "pointer",
                  borderRadius: "50%"
                })
              }), (0, _v1.jsxs)(_v52.Text, {
                variant: "heading-sm",
                children: [_v10.label, " (", _v57.translations.primary, ")"]
              })]
            }), (0, _v1.jsx)(_v189.StreamConnectionInfo, {
              id: (0, _v50.createDomName)(_v0, "primary"),
              className: (0, _v50.createDomName)(_v1, "primary"),
              url: _v15,
              copiedUrlMessage: (0, _v94.T_COPIED_URL)(_v13),
              streamKey: _v14,
              keyLabel: _v57.translations.key,
              canUseBackupStream: _v4,
              keyBackup: `${_v14}_backup`
            })]
          }), _v11.length ? _v11.map(_v0 => (0, _v1.jsxs)(_v43.Flex, {
            direction: "column",
            gap: (0, _v44.rem)(8),
            children: [(0, _v1.jsxs)(_v43.Flex, {
              alignItems: "center",
              gap: (0, _v44.rem)(8),
              children: [(0, _v1.jsx)(_v78.BokehTooltip, {
                label: _v0.isConnected ? _v94.T_CONNECTED : _v94.T_NO_SIGNAL,
                children: (0, _v1.jsx)(_v79.Box, {
                  width: (0, _v44.rem)(10),
                  height: (0, _v44.rem)(10),
                  background: _v0.isConnected ? "status-positive-primary" : "gray.500",
                  cursor: "pointer",
                  borderRadius: "50%"
                })
              }), (0, _v1.jsx)(_v52.Text, {
                variant: "heading-sm",
                children: _v0.label
              })]
            }), (0, _v1.jsx)(_v189.StreamConnectionInfo, {
              id: (0, _v50.createDomName)(_v0, "secondary", _v0.code),
              className: (0, _v50.createDomName)(_v1, "secondary"),
              streamKey: `${_v14}_${_v0.code}`,
              keyLabel: _v57.translations.key,
              canUseBackupStream: _v4,
              copiedStreamKeyMessage: (0, _v94.T_COPIED_STREAM_LANGUAGE_KEY)(_v0.label),
              copiedBackupStreamKeyMessage: _v4 ? (0, _v94.T_COPIED_BACKUP_STREAM_LANGUAGE_KEY)(_v0.label) : null,
              keyBackup: `${_v14}_${_v0.code}_backup`
            })]
          }, _v0.code)) : null]
        }), (0, _v1.jsx)(_v78.BokehTooltip, {
          label: _v12 ? _v94.T_U_CANT_ADD_REMOVE_DURING_BROADCAST : "",
          children: (0, _v1.jsx)(_v69.Button, {
            width: "100%",
            marginTop: (0, _v44.rem)(16),
            size: "md",
            variant: "secondary",
            isDisabled: _v12,
            onClick: _v8,
            children: _v94.T_MANAGE_LANGUAGE_STREAMS
          })
        }), _v7 ? (0, _v1.jsx)(_v192.TracksManagementModal, {
          onClose: _v9
        }) : null]
      })]
    }) : null;
  }
  var _v194 = _v0.i(0),
    _v195 = _v0.i(0),
    _v196 = _v0.i(0),
    _v197 = _v0.i(0),
    _v198 = _v0.i(0),
    _v199 = _v0.i(0),
    _v200 = _v0.i(0),
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0);
  function _v204({
    id: _v0 = (0, _v50.createDomName)("tabbed-chat"),
    className: _v1 = (0, _v50.createDomName)("tabbed-chat"),
    chatContext: {
      isHydrated: _v2,
      isEnabled: _v3,
      chatActions: {
        enableChat: _v4
      }
    } = (0, _v12.useManager)(_v202.ChatManager),
    firebaseContext: {
      interactionCredentials: _v5,
      connectionStatuses: {
        isInteractionConnected: _v6
      }
    } = (0, _v12.useManager)(_v201.RtmpFirebaseManager)
  }) {
    let _v7 = (0, _v22.useIsVpaas)(),
      {
        initialState: {
          sessionType: _v8
        }
      } = (0, _v200.useLiveGlobals)(),
      _v9 = _v5?.user?.id,
      _v10 = !_v2 || !_v9,
      _v11 = _v8 === _v20.EComposerSessionType.VENUE,
      _v12 = (0, _v5.useCallback)(() => {
        _v4(), (0, _v203.trackEnableAudienceChat)();
      }, [_v4]);
    return _v10 ? (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      direction: "column",
      overflow: "hidden",
      grow: 1,
      width: "100%",
      children: [(0, _v1.jsx)(_v188.RightPanelHeader, {
        label: _v94.T_CHAT,
        rightControls: (0, _v1.jsx)(_v187.RightPanelDismiss, {})
      }), (0, _v1.jsx)(_v198.ChatPreloader, {
        id: (0, _v50.createDomName)(_v0, "preloader")
      })]
    }) : (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      direction: "column",
      overflow: "hidden",
      grow: 1,
      width: "100%",
      children: [(0, _v1.jsx)(_v188.RightPanelHeader, {
        label: _v94.T_CHAT,
        rightControls: (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v199.ChatSettingsButton, {
            id: (0, _v50.createDomName)(_v0, "settings-button"),
            className: (0, _v50.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: !_v7 && !_v11,
            buttonIcon: (0, _v1.jsx)(_v143.EllipsisV, {})
          }), (0, _v1.jsx)(_v187.RightPanelDismiss, {
            id: (0, _v50.createDomName)(_v0, "dismiss-button"),
            className: (0, _v50.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v1.jsx)(_v186.RightPanelContent, {
        children: (0, _v1.jsx)(_v43.Flex, {
          id: (0, _v50.createDomName)(_v0, "content"),
          direction: "column",
          alignItems: "center",
          width: "100%",
          grow: 1,
          overflow: "hidden",
          children: _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
            children: [(0, _v1.jsx)(_v196.ChatHistory, {
              chatType: _v157.EChatType.PUBLIC,
              currentUserId: _v9,
              scrollBackground: "surface"
            }), (0, _v1.jsx)(_v197.ChatInput, {
              chatType: _v157.EChatType.PUBLIC,
              isDisabled: !_v6
            })]
          }) : (0, _v1.jsx)(_v170.EmptyStatePlaceholder, {
            id: (0, _v50.createDomName)(_v0, "placeholder"),
            icon: (0, _v1.jsx)(_v195.Chats, {
              boxSize: "lg"
            }),
            buttonLabel: _v57.translations.turnOn,
            description: _v57.translations.turnOnChatToEngageWithYourAudience,
            onButtonClick: _v12
          })
        })
      })]
    });
  }
  var _v205 = _v0.i(0),
    _v206 = _v0.i(0);
  let _v207 = (0, _v5.memo)(({
      id: _v0,
      className: _v1,
      status: _v2,
      hasAudioTracksManagement: _v3
    }) => {
      let _v4 = (0, _v64.inline)(() => {
          switch (_v2) {
            case _v91.EBackupStreamStatus.STREAMING:
            case _v91.EBackupStreamStatus.CONNECTED:
              return "status-positive-primary";
            default:
              return;
          }
        }),
        _v5 = (0, _v64.inline)(() => {
          switch (_v2) {
            case _v91.EBackupStreamStatus.CONNECTED:
              return _v206.rtmpTranslations.connected;
            case _v91.EBackupStreamStatus.STREAMING:
              return _v206.rtmpTranslations.streaming;
            case _v91.EBackupStreamStatus.NOT_AVAILABLE:
              return _v206.rtmpTranslations.notAvailable;
            case _v91.EBackupStreamStatus.NOT_CONNECTED:
              return _v206.rtmpTranslations.notConnected;
          }
        }),
        _v6 = (0, _v64.inline)(() => {
          switch (_v2) {
            case _v91.EBackupStreamStatus.CONNECTED:
              return _v206.rtmpTranslations.backupStreamConnected;
            case _v91.EBackupStreamStatus.STREAMING:
              return _v206.rtmpTranslations.backupStreamStreaming;
            case _v91.EBackupStreamStatus.NOT_AVAILABLE:
              return _v206.rtmpTranslations.backupStreamIsUnavailable;
            case _v91.EBackupStreamStatus.NOT_CONNECTED:
              return _v206.rtmpTranslations.connectSecondaryStream;
          }
        });
      return (0, _v1.jsxs)(_v43.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        width: "100%",
        gap: (0, _v44.rem)(8),
        children: [(0, _v1.jsxs)(_v43.Flex, {
          justifyContent: _v3 ? "space-between" : "flex-start",
          gap: (0, _v44.rem)(8),
          children: [(0, _v1.jsx)(_v51.Header, {
            size: "xs",
            margin: 0,
            children: _v206.rtmpTranslations.backUpStreamStatus
          }), (0, _v1.jsx)(_v112.Badge, {
            size: _v3 ? "xs" : "sm",
            backgroundColor: _v4,
            textColor: "white",
            borderRadius: "subtle",
            border: "none",
            children: _v5
          })]
        }), (0, _v1.jsx)(_v68.Paragraph, {
          size: "md",
          color: "text-secondary",
          margin: 0,
          children: _v6
        })]
      });
    }),
    _v208 = (0, _v5.memo)(({
      id: _v0,
      className: _v1,
      stats: _v2
    }) => {
      let _v3 = !!(_v2.status === _v91.EConnectionState.CONNECTED && !_v2.backup),
        _v4 = !!(_v2.status === _v91.EConnectionState.CONNECTED && _v2.backup),
        _v5 = _v0 => _v0 ? "status-positive-primary" : "gray.500";
      return (0, _v1.jsxs)(_v43.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        width: "100%",
        gap: (0, _v44.rem)(8),
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "xs",
          margin: 0,
          children: _v2.languageLabel
        }), (0, _v1.jsxs)(_v43.Flex, {
          justifyContent: "space-between",
          gap: (0, _v44.rem)(8),
          marginBottom: 0,
          children: [(0, _v1.jsx)(_v68.Paragraph, {
            size: "md",
            color: "text-secondary",
            margin: 0,
            children: _v57.translations.currentStatus
          }), (0, _v1.jsx)(_v112.Badge, {
            size: "xs",
            backgroundColor: _v5(_v3),
            textColor: "white",
            borderRadius: "subtle",
            border: "none",
            children: _v3 ? _v57.translations.connected : _v57.translations.unknown
          })]
        }), (0, _v1.jsxs)(_v43.Flex, {
          justifyContent: "space-between",
          gap: (0, _v44.rem)(8),
          marginBottom: 0,
          children: [(0, _v1.jsx)(_v68.Paragraph, {
            size: "md",
            color: "text-secondary",
            margin: 0,
            children: _v57.translations.backUpStreamStatus
          }), (0, _v1.jsx)(_v112.Badge, {
            size: "xs",
            backgroundColor: _v5(_v4),
            textColor: "white",
            borderRadius: "subtle",
            border: "none",
            children: _v4 ? _v57.translations.connected : _v57.translations.notAvailable
          })]
        })]
      });
    });
  var _v209 = _v0.i(0),
    _v210 = _v0.i(0);
  function _v211(_v0) {
    return _v0.payload ? (0, _v1.jsxs)(_v43.Flex, {
      background: "background",
      border: "1px solid",
      borderColor: "stroke",
      direction: "column",
      padding: (0, _v44.rem)(8),
      children: [(0, _v1.jsx)(_v68.Paragraph, {
        size: "xs",
        color: "text-primary",
        children: new Date(_v0.label).toLocaleTimeString("en", {
          hour: "numeric",
          minute: "numeric"
        })
      }), _v0.payload.map((_v0, _v1) => (0, _v1.jsxs)(_v43.Flex, {
        flexWrap: "nowrap",
        alignItems: "center",
        padding: `${(0, _v44.rem)(4)} 0`,
        gap: (0, _v44.rem)(12),
        children: [(0, _v1.jsx)(_v113.CircleShapeFilled, {
          width: (0, _v44.rem)(8),
          height: (0, _v44.rem)(8),
          color: _v0.color
        }), (0, _v1.jsxs)(_v43.Flex, {
          display: "flex",
          color: "text-primary",
          flexWrap: "nowrap",
          gap: (0, _v44.rem)(4),
          children: [(0, _v1.jsx)(_v68.Paragraph, {
            size: "xs",
            children: _v0.value.toLocaleString("en")
          }), (0, _v1.jsx)(_v68.Paragraph, {
            size: "xs",
            children: "fps" === _v0.dataKey ? "fps" : "Kbps"
          })]
        })]
      }, `row-${_v1}`))]
    }) : null;
  }
  function _v212({
    payload: _v0
  }) {
    return _v0 ? (0, _v1.jsx)(_v43.Flex, {
      flexWrap: "nowrap",
      justifyContent: "flex-start",
      gap: (0, _v44.rem)(12),
      children: _v0.map((_v0, _v1) => (0, _v1.jsxs)(_v43.Flex, {
        alignItems: "center",
        fontWeight: "bold",
        color: "text-primary",
        gap: (0, _v44.rem)(4),
        children: [_v0.color ? (0, _v1.jsx)(_v113.CircleShapeFilled, {
          width: (0, _v44.rem)(8),
          height: (0, _v44.rem)(8),
          color: _v0.color
        }) : null, "fps" === _v0.value ? `${_v206.rtmpTranslations.frameRate} (fps)` : _v206.rtmpTranslations.bitrate]
      }, _v1))
    }) : null;
  }
  var _v213 = _v0.i(0);
  function _v214(_v0, _v1 = "", _v2) {
    let _v3 = parseInt(_v0);
    return _v0 === _v205.STREAM_HEALTH_NA || isNaN(_v3) ? _v205.STREAM_HEALTH_NA : _v2 && _v3 > 0 ? `${(_v3 / 0).toLocaleString(void 0, {
      maximumFractionDigits: 3
    })} ${_v2}` : `${parseFloat(_v0).toLocaleString(void 0, {
      maximumFractionDigits: 3
    })} ${_v1}`;
  }
  function _v215({
    ticks: _v0
  }) {
    let {
        ReCharts: _v1,
        loadError: _v2
      } = (0, _v210.useReCharts)(),
      _v3 = (0, _v209.useColorModeValue)("#000000", "#ffffff"),
      _v4 = _v0 && _v0.length - 2;
    return _v2 || !_v1 ? null : (0, _v1.jsxs)(_v43.Flex, {
      width: "100%",
      direction: "column",
      shrink: 0,
      fontSize: "text-sm",
      children: [(0, _v1.jsx)(_v51.Header, {
        size: "sm",
        color: "text-primary",
        marginBottom: (0, _v44.rem)(12),
        children: _v206.rtmpTranslations.streamMetrics
      }), (0, _v1.jsx)(_v1.ResponsiveContainer, {
        width: "100%",
        height: "100%",
        minHeight: 250,
        minWidth: 220,
        children: (0, _v1.jsxs)(_v1.LineChart, {
          width: 500,
          height: 300,
          data: _v0,
          margin: {
            top: 10
          },
          children: [(0, _v1.jsx)(_v1.CartesianGrid, {
            strokeDasharray: "2 2",
            vertical: !1
          }), (0, _v1.jsx)(_v1.XAxis, {
            height: 50,
            tickMargin: 24,
            axisLine: !1,
            tickLine: !1,
            type: "category",
            dataKey: "timestamp",
            stroke: "#a3a3a3",
            interval: _v4,
            tickFormatter: _v0 => {
              let _v1, _v2, _v3;
              return _v2 = !!(_v1 = (0, _v213.default)(_v0)) && _v1.timestamp === _v0, _v3 = new Date(_v0), `${_v3.toLocaleTimeString("en", {
                hour: "numeric",
                minute: "numeric"
              })} ${_v2 ? `(${_v206.rtmpTranslations.now})` : ""}`;
            },
            dx: -28,
            textAnchor: "middle"
          }), (0, _v1.jsx)(_v1.YAxis, {
            axisLine: !1,
            tickLine: !1,
            yAxisId: "left",
            tickFormatter: _v0 => _v0.toLocaleString(),
            width: 60 * !!_v0.length,
            stroke: _v3,
            domain: [_v0 => Math.floor(_v0 / 2), _v0 => Math.floor(_v0 / 2 + _v0)]
          }), (0, _v1.jsx)(_v1.YAxis, {
            axisLine: !1,
            tickLine: !1,
            domain: _v0.length > 0 ? [0, 60] : void 0,
            yAxisId: "right",
            orientation: "right",
            stroke: _v3,
            width: 30 * !!_v0.length
          }), 0 === _v0.length ? null : (0, _v1.jsx)(_v1.Tooltip, {
            content: _v211,
            wrapperStyle: {
              top: -100,
              bottom: 300
            }
          }), (0, _v1.jsx)(_v1.Legend, {
            height: 50,
            verticalAlign: "top",
            content: _v212
          }), (0, _v1.jsx)(_v1.Line, {
            activeDot: !0,
            dot: !1,
            strokeWidth: 2,
            type: "linear",
            yAxisId: "left",
            dataKey: "bitrate",
            stroke: "#00adef",
            isAnimationActive: !1
          }), (0, _v1.jsx)(_v1.Line, {
            dot: !1,
            strokeWidth: 2,
            type: "linear",
            dataKey: "fps",
            yAxisId: "right",
            activeDot: !1,
            stroke: "#d1d1d1",
            isAnimationActive: !1
          })]
        })
      })]
    });
  }
  function _v216({
    label: _v0,
    displayValue: _v1
  }) {
    return (0, _v1.jsxs)(_v43.Flex, {
      width: "100%",
      justifyContent: "space-between",
      flexWrap: "wrap",
      children: [(0, _v1.jsx)(_v51.Header, {
        size: "xs",
        color: "text-primary",
        children: _v0
      }), (0, _v1.jsx)(_v52.Text, {
        color: "text-secondary",
        variant: "body-md",
        children: _v1
      })]
    });
  }
  function _v217({
    sessionId: _v0,
    stats: {
      currentBitrate: _v1,
      averageBitrate: _v2,
      currentFps: _v3,
      averageFps: _v4,
      resolution: _v5,
      avcLevel: _v6,
      avcProfile: _v7,
      audioCodec: _v8,
      videoCodec: _v9
    }
  }) {
    let [_v10, _v11] = (0, _v5.useState)(!1),
      _v12 = (0, _v5.useCallback)(() => _v11(_v0 => !_v0), []);
    return (0, _v1.jsxs)(_v43.Flex, {
      direction: "column",
      width: "100%",
      justifyContent: "flex-start",
      children: [(0, _v1.jsxs)(_v43.Flex, {
        direction: "column",
        width: "100%",
        gap: (0, _v44.rem)(8),
        children: [(0, _v1.jsx)(_v216, {
          label: _v57.translations.bitrate,
          displayValue: _v214(String(_v1), "Kbps", "Mbps")
        }), (0, _v1.jsx)(_v216, {
          label: _v57.translations.averageBitrate,
          displayValue: _v214(String(_v2), "Kbps", "Mbps")
        }), (0, _v1.jsx)(_v216, {
          label: _v57.translations.frameRate,
          displayValue: _v214(String(_v3), "fps")
        }), (0, _v1.jsx)(_v216, {
          label: _v57.translations.averageFrameRate,
          displayValue: _v214(String(_v4), "fps")
        }), (0, _v1.jsx)(_v216, {
          label: _v57.translations.videoResolution,
          displayValue: _v5
        })]
      }), (0, _v1.jsx)(_v88.Divider, {
        margin: `${(0, _v44.rem)(24)} 0`,
        borderColor: "stroke"
      }), (0, _v1.jsx)(_v43.Flex, {
        width: "100%",
        maxHeight: _v10 ? (0, _v44.rem)(500) : 0,
        transition: _v10 ? "max-height 0.25s ease-in" : "max-height 0.05s ease-in",
        children: (0, _v1.jsxs)(_v43.Flex, {
          direction: "column",
          width: "100%",
          gap: (0, _v44.rem)(8),
          visibility: _v10 ? "visible" : "hidden",
          children: [(0, _v1.jsx)(_v216, {
            label: _v57.translations.audioCodec,
            displayValue: String(_v8)
          }), (0, _v1.jsx)(_v216, {
            label: _v57.translations.videoCodec,
            displayValue: String(_v9)
          }), (0, _v1.jsx)(_v216, {
            label: _v57.translations.avcProfile,
            displayValue: _v214(String(_v7))
          }), (0, _v1.jsx)(_v216, {
            label: _v57.translations.avcLevel,
            displayValue: _v214(String(_v6))
          }), (0, _v1.jsx)(_v216, {
            label: _v57.translations.sessionId,
            displayValue: _v0 || _v205.STREAM_HEALTH_NA
          })]
        })
      }), (0, _v1.jsx)(_v52.Text, {
        cursor: "pointer",
        textDecoration: "underline",
        color: "blue.500",
        variant: "body-md",
        marginTop: (0, _v44.rem)(8),
        onClick: _v12,
        children: _v10 ? _v57.translations.hideAdvancedAnalytics : _v57.translations.showAdvancedAnalytics
      })]
    });
  }
  let _v218 = (0, _v5.memo)(({
    id: _v0,
    className: _v1,
    status: _v2,
    hasAudioTracksManagement: _v3
  }) => {
    let _v4 = (0, _v64.inline)(() => {
        switch (_v2) {
          case _v91.EStreamStatus.GOOD:
          case _v91.EStreamStatus.READY:
            return "status-positive-primary";
          case _v91.EStreamStatus.UNSTABLE:
            return "status-caution-primary";
          default:
            return;
        }
      }),
      _v5 = (0, _v64.inline)(() => {
        switch (_v2) {
          case _v91.EStreamStatus.GOOD:
            return _v206.rtmpTranslations.good;
          case _v91.EStreamStatus.READY:
            return _v206.rtmpTranslations.ready;
          case _v91.EStreamStatus.UNSTABLE:
            return _v206.rtmpTranslations.unstable;
          default:
            return _v206.rtmpTranslations.unknown;
        }
      }),
      _v6 = (0, _v64.inline)(() => {
        switch (_v2) {
          case _v91.EStreamStatus.GOOD:
            return _v206.rtmpTranslations.youHaveStableStream;
          case _v91.EStreamStatus.READY:
            return _v206.rtmpTranslations.yourConnectionReadyForStreaming;
          case _v91.EStreamStatus.UNSTABLE:
            return _v206.rtmpTranslations.viewersMayExperienceBufferingProblems;
          default:
            return _v206.rtmpTranslations.streamHealthUnavailable;
        }
      });
    return (0, _v1.jsxs)(_v43.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      gap: (0, _v44.rem)(8),
      children: [(0, _v1.jsxs)(_v43.Flex, {
        justifyContent: _v3 ? "space-between" : "flex-start",
        gap: (0, _v44.rem)(8),
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "xs",
          margin: 0,
          children: _v206.rtmpTranslations.currentStatus
        }), (0, _v1.jsx)(_v112.Badge, {
          size: _v3 ? "xs" : "sm",
          backgroundColor: _v4,
          textColor: "white",
          borderRadius: "subtle",
          border: "none",
          children: _v5
        })]
      }), (0, _v1.jsx)(_v68.Paragraph, {
        size: "md",
        color: "text-secondary",
        margin: 0,
        children: _v6
      })]
    });
  });
  function _v219({
    streamHealthContext: {
      stats: _v0,
      ticks: _v1
    } = (0, _v12.useManager)(_v92.StreamHealthManager),
    sessionStatusContext: {
      cloudSessionId: _v2
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager),
    eventAudioTracksContext: {
      eventLanguages: {
        value: _v3
      },
      audioTracksActions: _v4
    } = (0, _v12.useManager)(_v90.EventAudioTracksManager),
    composerSessionContext: {
      permissions: {
        hasAudioTracksManagement: _v5
      }
    } = (0, _v12.useManager)(_v36.ComposerSessionManager)
  }) {
    let _v6 = (0, _v5.useMemo)(() => _v3 && 0 !== _v3.secondary.length ? _v3.secondary.map(_v0 => ({
      ...(_v0.altEncoders.find(_v0 => _v0.language === _v0) ?? _v205.ENCODER_STATS_STATE_NA),
      language: _v0,
      languageLabel: _v4.getLanguageLabelByCode(_v0)
    })) : [], [_v3, _v4, _v0.altEncoders]);
    return (0, _v1.jsxs)(_v43.Flex, {
      width: "100%",
      direction: "column",
      gap: (0, _v44.rem)(24),
      children: [(0, _v1.jsx)(_v218, {
        status: _v0.streamStatus,
        hasAudioTracksManagement: _v5
      }), (0, _v1.jsx)(_v88.Divider, {
        borderColor: "stroke"
      }), (0, _v1.jsx)(_v207, {
        status: _v0.backupStreamStatus,
        hasAudioTracksManagement: _v5
      }), (0, _v1.jsx)(_v88.Divider, {
        borderColor: "stroke"
      }), _v5 && _v6.length ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v51.Header, {
          size: "sm",
          margin: 0,
          children: _v57.translations.languageStreams
        }), _v6.map(_v0 => (0, _v1.jsx)(_v208, {
          stats: _v0,
          isPrimary: _v0.language === _v3?.primary
        }, _v0.language)), (0, _v1.jsx)(_v88.Divider, {
          borderColor: "stroke"
        })]
      }) : null, (0, _v1.jsx)(_v215, {
        ticks: _v1
      }), (0, _v1.jsx)(_v88.Divider, {
        borderColor: "stroke"
      }), (0, _v1.jsx)(_v217, {
        stats: _v0,
        sessionId: _v2
      })]
    });
  }
  function _v220({
    id: _v0 = (0, _v50.createDomName)("stream-health-tab"),
    className: _v1 = (0, _v50.createDomName)("stream-health-tab")
  }) {
    let _v2 = (0, _v135.useScrollbarStyles)();
    return (0, _v1.jsxs)(_v79.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v134.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: [(0, _v1.jsx)(_v188.RightPanelHeader, {
        id: (0, _v50.createDomName)(_v0, "header"),
        className: (0, _v50.createDomName)(_v1, "header"),
        label: _v57.translations.streamHealth,
        rightControls: (0, _v1.jsx)(_v187.RightPanelDismiss, {})
      }), (0, _v1.jsx)(_v186.RightPanelContent, {
        id: (0, _v50.createDomName)(_v0, "content"),
        className: (0, _v50.createDomName)(_v1, "content"),
        children: (0, _v1.jsx)(_v43.Flex, {
          direction: "column",
          marginRight: (0, _v44.rem)(-16),
          overflowY: "scroll",
          sx: _v2,
          children: (0, _v1.jsx)(_v219, {})
        })
      })]
    });
  }
  function _v221({
    id: _v0 = (0, _v50.createDomName)("rtmp-panel-right"),
    className: _v1 = (0, _v50.createDomName)("rtmp-panel-right"),
    composerSessionStatusContext: {
      isHydrated: _v2
    } = (0, _v12.useManager)(_v25.ComposerSessionStatusManager, ({
      isHydrated: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v5.useMemo)(() => [{
      id: _v39.ERightPanelId.EVENT_SETTINGS,
      content: _v182.EventSettingsTab,
      isVisible: !0
    }, {
      id: _v39.ERightPanelId.ANALYTICS,
      content: _v181.AnalyticsTab,
      isVisible: !0
    }, {
      id: _v39.ERightPanelId.STREAM_HEALTH,
      content: _v220,
      isVisible: !0
    }, {
      id: _v39.ERightPanelId.CHAT,
      content: _v204,
      isVisible: !0
    }, {
      id: _v39.ERightPanelId.AUDIO_TRACKS,
      content: _v193,
      isVisible: !0
    }], []);
    return (0, _v1.jsx)(_v194.RightPanel, {
      id: _v0,
      className: _v1,
      items: _v3,
      isLoading: !_v2
    });
  }
  function _v222() {
    let _v0 = (0, _v49.useIsLiveDemoSubscription)();
    return (0, _v1.jsxs)(_v43.Flex, {
      id: (0, _v50.createDomName)("page"),
      direction: "column",
      grow: 1,
      minWidth: (0, _v44.rem)(0),
      minHeight: (0, _v44.rem)(640),
      overflow: "hidden",
      background: "background",
      sx: _v0 ? {
        border: _v0 ? "2px solid" : "none",
        borderImageSlice: _v0 ? 2 : "none",
        borderImageSource: _v0 ? "linear-gradient(270deg, #12a3ab 0%, #18a57f 49.59%, #1fa84d 100%)" : "none"
      } : void 0,
      children: [_v0 ? (0, _v1.jsx)(_v47.LiveSubscriptionUpsell, {}) : null, (0, _v1.jsx)(_v45.LiveBroadcasterErrorNotification, {}), (0, _v1.jsx)(_v46.LiveBroadcasterHeader, {}), (0, _v1.jsxs)(_v43.Flex, {
        id: (0, _v50.createDomName)("content"),
        basis: 0,
        grow: 1,
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v180, {
          id: (0, _v50.createDomName)("left-panel")
        }), (0, _v1.jsxs)(_v43.Flex, {
          id: (0, _v50.createDomName)("workspace"),
          position: "relative",
          direction: "column",
          alignItems: "center",
          grow: 1,
          children: [(0, _v1.jsx)(_v2.LiveErrorBoundary, {
            component: "RtmpPreviewSceneLayout",
            children: (0, _v1.jsx)(_v119, {
              id: (0, _v50.createDomName)("preview-layout")
            })
          }), (0, _v1.jsx)(_v48.LiveComposerFooter, {
            id: (0, _v50.createDomName)("footer")
          })]
        }), (0, _v1.jsx)(_v221, {
          id: (0, _v50.createDomName)("right-panel")
        })]
      })]
    });
  }
  var _v223 = _v0.i(0),
    _v224 = _v0.i(0),
    _v225 = _v0.i(0),
    _v226 = _v0.i(0),
    _v227 = _v0.i(0),
    _v228 = _v0.i(0),
    _v229 = _v0.i(0),
    _v230 = _v0.i(0),
    _v231 = _v0.i(0);
  let _v232 = [_v224.DebugControlManager, _v202.ChatManager, _v36.ComposerSessionManager, _v82.ComposerSessionStatsManager, _v25.ComposerSessionStatusManager, _v226.DestinationsManager, _v227.DragDropManager, _v90.EventAudioTracksManager, _v62.EventSettingsManager, _v225.ModuleManager, _v228.NotificationManager, _v229.PageEventsManager, _v128.PanelsManager, _v155.PollManager, _v173.QnAManager, _v201.RtmpFirebaseManager, _v92.StreamHealthManager, _v63.StudioManager, _v230.TrackingManager, _v26.UserPreferencesManager],
    _v233 = (0, _v12.createProvider)(_v232, {
      isCombined: _v17.liveApplicationConfig.USE_COMBINED_PROVIDERS
    });
  function _v234({
    initialState: _v0,
    pageProps: _v1,
    children: _v2
  }) {
    return (0, _v231.useScopeViewerProvision)(), (0, _v223.useScopeGctlProvision)(), (0, _v1.jsx)(_v200.LiveGlobalsProvider, {
      initialState: _v0,
      pageProps: _v1,
      children: (0, _v1.jsx)(_v233, {
        initialState: _v0,
        children: _v2
      })
    });
  }
  function _v235(_v0) {
    let _v1 = (0, _v21.useViewer)(),
      _v2 = (0, _v18.useInitialRenderTime)(),
      _v3 = (0, _v22.useIsVpaas)(),
      _v4 = (0, _v5.useMemo)(() => {
        let {
          sessionId: _v0,
          sessionType: _v1
        } = _v0;
        return {
          renderAt: _v2,
          sessionApplicationType: _v20.EComposerApplicationType.RTMP,
          sessionType: _v1,
          sessionId: _v0,
          isVpaas: _v3,
          user: {
            requiredOwnerCapabilities: _v17.liveApplicationConfig.USER.REQUIRED_OWNER_CAPABILITIES,
            requiredOwnerEntitlements: _v17.liveApplicationConfig.USER.REQUIRED_OWNER_ENTITLEMENTS,
            requiredOwnerPreferences: _v17.liveApplicationConfig.USER.REQUIRED_OWNER_PREFERENCES,
            requiredPreferences: _v17.liveApplicationConfig.USER.REQUIRED_PREFERENCES
          },
          externalModules: [_v20.EExternalModule.FIREBASE, _v20.EExternalModule.FIRESTORE],
          live: {
            isSimulcastDisabled: _v1 !== _v20.EComposerSessionType.LIVE_EVENT || _v3,
            isUserPreferencesDisabled: _v3
          }
        };
      }, []);
    return ((0, _v19.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v4.sessionApplicationType,
      sessionType: _v4.sessionType,
      sessionId: _v4.sessionId,
      userId: _v1?.user?.id,
      userLocale: _v1?.locale,
      teamOwnerId: _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      teamAccountType: _v1?.teamUser?.accountType ?? _v1?.user?.account,
      teamUser: _v1?.teamUser
    }), !_v16.browserConfig.BROWSER?.isMobile || _v17.liveApplicationConfig.FEATURE.USE_MOBILE_ACCESS) ? (0, _v1.jsx)(_v12.ScopeProvider, {
      children: (0, _v1.jsx)(_v15.ScopeErrorBoundary, {
        fallback: _v11,
        children: (0, _v1.jsxs)(_v234, {
          pageProps: _v0,
          initialState: _v4,
          children: [(0, _v1.jsx)(_v222, {}), (0, _v1.jsx)(_v42, {})]
        })
      })
    }) : _v16.browserConfig.BROWSER?.isMobile ? (0, _v1.jsx)(_v14.MobileUnsupportedModal, {}) : (0, _v1.jsx)(_v13.BrowserUnsupportedModal, {});
  }
  _v0.s(["LiveRtmpRoot", 0, function (_v0) {
    let _v1 = (0, _v4.useOptionalViewer)(),
      {
        sessionId: _v2,
        sessionType: _v3
      } = (0, _v3.usePageSessionContext)();
    return _v1 ? (0, _v1.jsx)(_v2.LiveErrorBoundary, {
      component: "LiveRtmpRoot",
      componentHandler: _v11,
      children: (0, _v1.jsx)(_v235, {
        ..._v0,
        sessionType: _v3,
        sessionId: _v2
      })
    }) : null;
  }], 0);
}