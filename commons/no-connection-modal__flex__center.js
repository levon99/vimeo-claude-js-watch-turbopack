{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4,
    _v5,
    _v6,
    _v7,
    _v8,
    _v9,
    _v10,
    _v11,
    _v12,
    _v13,
    _v14,
    _v15,
    _v16,
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  function _v27({
    id: _v0,
    className: _v1,
    error: _v2,
    isHeaderEnabled: _v3 = !0
  }) {
    let [_v4, _v5] = (0, _v21.useMemo)(() => {
      if ((0, _v26.isApiError)(_v2)) switch (_v2.data.body.errorCode) {
        case _v25.EApiErrorCode.NO_CREDENTIALS_PROVIDED:
        case _v25.EApiErrorCode.NO_USER_CREDENTIALS_PROVIDED:
          return [_v24.T_ERROR_NOT_AUTHORIZED, _v24.T_ERROR_NOT_AUTHORIZED_DESCRIPTION];
        case _v25.EApiErrorCode.BAD_ARGUMENTS_PROVIDED:
        case _v25.EApiErrorCode.NOT_FOUND:
          return [_v24.T_ERROR_NOT_FOUND, _v24.T_ERROR_COUND_NOT_FIND_EVENT];
        case _v25.EApiErrorCode.NO_PERMISSIONS:
          return [_v24.T_ERROR_PERMISSION_DENIED, _v24.T_ERROR_PERMISSION_DENIED_DESCRIPTION];
      }
      return _v2 instanceof _v22.ResourceNotFoundError ? [_v24.T_ERROR_NOT_FOUND, _v24.T_ERROR_COUND_NOT_FIND_EVENT] : _v2 instanceof _v22.ForbiddenError ? [_v24.T_ERROR_PERMISSION_DENIED, _v24.T_ERROR_PERMISSION_DENIED_DESCRIPTION] : [_v24.T_ERROR_TECHNICAL_DIFFICULTIES, _v24.T_ERROR_TECHNICAL_DIFFICULTIES_TRY_AGAIN];
    }, [_v2]);
    return (0, _v17.jsx)(_v23.LiveErrorPage, {
      id: _v0,
      className: _v1,
      title: _v4,
      message: _v5,
      isHeaderEnabled: _v3,
      error: _v2
    });
  }
  var _v28 = _v0.i(0),
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
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  function _v57({
    userPreferencesContext: {
      isEnterpriseTiersUpgradeModalActive: _v0,
      userPreferencesActions: _v1,
      isPendoLoaded: _v2,
      isRtcSimuliveTourActive: _v3,
      isRtcOnboardingTourActive: _v4,
      isRtcBokehOnboardingTourActive: _v5,
      isActiveFinishedStreamSurvey: _v6,
      tourActions: _v7
    } = (0, _v28.useManager)(_v52.UserPreferencesManager),
    firebaseContext: {
      isComposerReady: _v8
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager, ({
      isComposerReady: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      streamMode: _v9,
      ingestStatus: _v10
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    composerSettingsContext: {
      isHydrated: _v11
    } = (0, _v28.useManager)(_v50.ComposerSettingsManager, ({
      isHydrated: _v0
    }) => [_v0]),
    sceneContext: {
      isHydrated: _v12
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      isHydrated: _v0
    }) => [_v0])
  }) {
    let _v13 = (0, _v28.useScope)(),
      _v14 = _v10 === _v53.EIngestStatus.UNKNOWN || !_v11 || !_v12 || !_v8 || !_v2,
      _v15 = (0, _v21.useRef)(null),
      _v16 = (0, _v21.useCallback)(() => {
        _v1.setEnterpriseUpgradeTiersModalState(!1);
      }, [_v1]);
    return (0, _v47.usePendoAndNotificationsAlignment)(), (0, _v21.useEffect)(() => {
      !_v14 && (_v9 === _v39.EComposerStreamModeType.LIVE && _v4 ? (_v13.emitSignal({
        type: _v51.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
        data: _v46.ELeftPanelId.SPEAKERS
      }), _v7.showPendoTourById(_v54.EPendoToursIds.ONBOARDING_RTC_REGULAR_PENDO_ID)) : _v9 === _v39.EComposerStreamModeType.LIVE && _v5 ? _v7.showPendoTourById(_v54.EPendoToursIds.ONBOARDING_RTC_BOKEH_PENDO_ID) : _v9 === _v39.EComposerStreamModeType.SIMULIVE && _v3 ? _v7.showPendoTourById(_v54.EPendoToursIds.ONBOARDING_RTC_SIMULIVE_PENDO_ID) : _v6 && _v7.showPendoTourById(_v54.EPendoSurveysIds.RTC_MODE_CSAT));
    }, [_v13, _v14, _v9, _v3, _v6, _v4, _v5]), (0, _v21.useEffect)(() => {
      let _v0 = _v9 === _v39.EComposerStreamModeType.SIMULIVE;
      null === _v15.current ? _v15.current = _v0 : _v15.current !== _v0 && _v0 && (_v4 || _v5) ? _v4 ? _v7.dismissRtcOnboardingTour() : _v5 && _v7.dismissRtcBokehOnboardingTour() : _v15.current !== _v0 && !_v0 && _v3 ? _v7.dismissRtcSimuliveTour() : _v15.current = _v0;
    }, [_v4, _v5, _v9, _v3, _v7]), (0, _v17.jsx)(_v17.Fragment, {
      children: _v0 ? (0, _v17.jsx)(_v55.LiveTiersUpgradeModal, {
        isActive: !0,
        onDismissUpgradeModal: _v16
      }) : null
    });
  }
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0),
    _v65 = _v0.i(0),
    _v66 = _v0.i(0);
  function _v67({
    id: _v0 = (0, _v65.createLiveDomName)("no-connection-modal"),
    composerSessionContext: {
      sessionInfo: _v1
    } = (0, _v28.useManager)(_v63.ComposerSessionManager, ({
      sessionInfo: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      ingestStatus: _v2
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0]),
    firebaseContext: {
      composerConnection: _v3,
      interactionConnection: _v4
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager),
    agoraContext: {
      mediaConnectionState: _v5
    } = (0, _v28.useManager)(_v62.BroadcasterAgoraManager, ({
      mediaConnectionState: _v0
    }) => [_v0])
  }) {
    let _v6 = !!(_v1.value && !_v1.error && !_v3.isConnected && !_v4.isConnected && _v5 === _v38.EAgoraConnectionState.RECONNECTING),
      _v7 = _v2 !== _v53.EIngestStatus.UNKNOWN && _v2 !== _v53.EIngestStatus.ENDED;
    return (0, _v17.jsxs)(_v58.Modal, {
      id: _v0,
      size: "sm",
      isOpen: _v7 && _v6,
      onClose: _v64.CallablePlaceholder,
      children: [(0, _v17.jsx)(_v60.ModalOverlay, {}), (0, _v17.jsx)(_v59.ModalContent, {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: (0, _v61.rem)(24),
        gap: (0, _v61.rem)(16),
        color: "text-primary",
        children: _v66.translations.broadcasterConnectionDownMessage
      })]
    });
  }
  var _v68 = _v0.i(0),
    _v69 = _v0.i(0),
    _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0),
    _v77 = _v0.i(0),
    _v78 = _v0.i(0),
    _v79 = _v0.i(0),
    _v80 = _v0.i(0),
    _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0);
  async function _v92({
    videoId: _v0,
    gctlConfig: _v1,
    sceneActions: _v2,
    graphicsActions: _v3
  }) {
    if (!_v0) throw new _v89.LiveError("Invalid clip id supplied for preset.");
    let _v4 = await (0, _v87.getVideoInfo)({
      videoId: _v0,
      gctlConfig: _v1,
      fields: ["user.uri", "uri", "name", "pictures", "manage_link", "duration"]
    });
    if (!_v4.manageLink) throw new _v89.LiveError("Cannot create clip, management for it is disabled.", {
      data: {
        videoId: _v0,
        video: _v4
      }
    });
    let _v5 = await _v3.addVideo((0, _v90.createGfxFromVimeoVideo)(_v4)),
      _v6 = await _v2.createScene({
        graphics: {
          [_v5.id]: (0, _v91.createGraphicsDescriptor)({
            graphicType: _v88.EGraphicsDescriptorType.AGORA_MEDIA,
            graphicId: _v5.id
          })
        }
      });
    await _v2.setActiveScene(_v6);
  }
  function _v93({
    videoId: _v0,
    graphicsContext: {
      graphicsActions: _v1
    } = (0, _v28.useManager)(_v82.GraphicsManager, () => []),
    sceneContext: {
      isHydrated: _v2,
      sceneActions: _v3
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      isHydrated: _v0
    }) => [_v0]),
    firebaseContext: {
      isFirebaseReady: _v4,
      isComposerReady: _v5
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager, ({
      isFirebaseReady: _v0,
      isComposerReady: _v1
    }) => [_v0, _v1])
  }) {
    let _v6 = (0, _v83.useGctlConfig)(),
      [_v7, _v8] = (0, _v21.useState)(!1),
      [_v9, _v10] = (0, _v21.useState)(!1);
    return ((0, _v21.useEffect)(() => {
      (0, _v84.inline)(async () => {
        let _v0 = _v81.Logger.getGlobal();
        if (!_v7 && !_v9 && _v4 && _v5 && _v2) {
          _v10(!0);
          try {
            _v0.info("Creating video graphics preset"), await _v92({
              videoId: _v0,
              gctlConfig: _v6,
              graphicsActions: _v1,
              sceneActions: _v3
            });
          } catch (_v0) {
            _v0.error("Failed to create graphic preset:", _v0), (0, _v86.trackLiveError)(_v0, {
              category: _v85.ELiveErrorCategory.LIVE,
              component: "CreateVideoPresetObserver"
            });
          } finally {
            Object.values(_v35.liveQueryConfig.CREATION).forEach(_v0 => (0, _v42.removeCurrentPathQueryValue)(_v0)), _v8(!0), _v0.info("Creation process finished");
          }
        }
      });
    }, [_v7, _v9, _v4, _v5, _v2, _v6, _v0, _v3, _v1]), _v7) ? null : (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
      opacity: .2
    });
  }
  function _v94() {
    let {
      initialState: {
        creation: _v0
      }
    } = (0, _v80.useLiveGlobals)();
    return (0, _v21.useLayoutEffect)(() => {
      _v81.Logger.getGlobal().info("Creation preset configuration received:", _v0);
    }, [_v0]), (0, _v17.jsx)(_v17.Fragment, {
      children: _v0?.targetVideoGraphicPreset ? (0, _v17.jsx)(_v93, {
        videoId: _v0.targetVideoGraphicPreset
      }) : null
    });
  }
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  function _v98({
    id: _v0 = (0, _v96.createDomName)("inactive-page-overlay"),
    className: _v1 = (0, _v96.createDomName)("inactive-page-overlay")
  }) {
    let [_v2, _v3] = (0, _v21.useState)(!1),
      _v4 = (0, _v21.useRef)(null),
      _v5 = (0, _v21.useCallback)(() => {
        _v2 || (_v3(!0), window.location.reload());
      }, [_v2]);
    return (0, _v21.useEffect)(() => {
      _v4.current?.focus();
    }, []), (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      ref: _v4,
      tabIndex: -1,
      sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
      opacity: 0,
      zIndex: 0,
      onMouseMove: _v5,
      onKeyPress: _v5
    });
  }
  var _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = ((_v1 = {}).ANALYTICS = "analytics", _v1.BRAND = "brand", _v1.DEBUG = "debug", _v1.EVENT_SETTINGS = "event_settings", _v1.LOWERTHIRDS = "lowerthirds", _v1.MEDIA = "media", _v1.PLAYER = "player", _v1.POLLS = "polls", _v1.QNA = "qna", _v1.SPEAKERS = "speakers", _v1.TEMPLATES = "templates", _v1.REGISTRATION = "registration", _v1);
  function _v103({
    composerSessionContext: {
      sessionInfo: {
        value: _v0
      }
    } = (0, _v28.useManager)(_v63.ComposerSessionManager),
    composerSessionStatusContext: {
      liveComposerStatuses: _v1
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    pageEventsContext: {
      isPageActive: _v2
    } = (0, _v28.useManager)(_v79.PageEventsManager, ({
      isPageActive: _v0
    }) => [_v0])
  }) {
    let _v3;
    return (0, _v72.useSynchronizedProgram)(), function () {
      let _v0 = (0, _v21.useRef)(!1),
        _v1 = (0, _v21.useRef)(!1),
        _v2 = (0, _v76.usePico)(),
        {
          sessionId: _v3
        } = (0, _v28.useManager)(_v63.ComposerSessionManager, ({
          sessionId: _v0
        }) => [_v0]),
        {
          trackLiveStreamBroadcasterDisplayed: _v4
        } = (0, _v75.useLiveStreamBroadcasterTracking)(),
        {
          isTrackingReady: _v5
        } = (0, _v77.useBroadcasterTrackingConfigUpdater)();
      (0, _v21.useEffect)(() => {
        _v5 && (_v0.current || (_v0.current = !0, (0, _v78.trackOpenBroadcasterView)(window.document.referrer)), null === _v2 || _v1.current || (_v1.current = !0, _v4({
          liveEventId: null != _v3 ? String(_v3) : null
        })));
      }, [_v5, _v2, _v3, _v4]);
    }(), (_v3 = (0, _v28.useScope)(), (0, _v101.useUserPreferencesPendoSync)({
      onGuideAdvanced: async _v0 => {
        switch (_v0?.currentGuideState?.guideId) {
          case _v54.EPendoToursIds.ONBOARDING_RTC_REGULAR_PENDO_ID:
            _v0.currentGuideState?.step?.stepNumber === 3 && _v3.emitSignal({
              type: _v51.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
              data: _v102.EVENT_SETTINGS
            });
            break;
          case _v54.EPendoToursIds.ONBOARDING_RTC_BOKEH_PENDO_ID:
            _v0.currentGuideState?.step?.stepNumber === 2 && (_v3.emitSignal({
              type: _v51.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
              data: _v102.EVENT_SETTINGS
            }), await (0, _v99.nextAsyncQueue)(), _v3.emitSignal({
              type: _v51.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
              data: _v100.EAccordionItemId.REGISTRATION
            }));
        }
      }
    }, [_v3]), (0, _v21.useEffect)(() => {
      _v1.isSessionRecordDeleted && window.location.reload();
    }, [_v1.isSessionRecordDeleted]), _v1.isSessionRecordDeleted) ? (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
      opacity: .25
    }) : _v1.isSessionEnded ? (0, _v17.jsx)(_v45.LiveBroadcastEnded, {}) : _v1.isRtmpMode && _v1.isSessionActive ? (0, _v17.jsx)(_v68.LiveEncoderWarningModal, {
      redirectLink: _v0?.rtmpsPreviewLink?.uri || _v0?.viewLink?.uri
    }) : _v1.isSessionUnknown ? (0, _v17.jsx)(_v17.Fragment, {
      children: _v2 ? null : (0, _v17.jsx)(_v98, {})
    }) : (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v70.GlobalConfirmations, {}), (0, _v17.jsx)(_v71.SimpleNotifications, {}), (0, _v17.jsx)(_v67, {}), _v1.isSessionPreparing ? (0, _v17.jsxs)(_v18.LiveErrorBoundary, {
        component: "LiveBroadcasterAmbient",
        componentHandler: _v64.ComponentPlaceholder,
        children: [(0, _v17.jsx)(_v94, {}), (0, _v17.jsx)(_v57, {})]
      }) : null, _v74.graphicsConfig.CACHE.IS_PRELOAD_ENABLED ? (0, _v17.jsx)(_v69.LiveComposerCache, {}) : null]
    });
  }
  var _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0);
  function _v116() {
    let _v0 = (0, _v28.useScope)(),
      {
        settings: {
          value: _v1
        },
        actions: {
          updateLiveEventSettings: _v2
        }
      } = (0, _v28.useManager)(_v115.EventSettingsManager),
      {
        isOpen: _v3,
        show: _v4,
        acknowledge: _v5
      } = (0, _v113.useFirstSeenLiveModal)("lepim"),
      _v6 = (0, _v114.useSessionOwnerId)(),
      {
        capabilities: _v7
      } = (0, _v110.useCapability)(["hasLiveAutoTranslation", "hasLiveAudioTracksManagement"], _v6 || null),
      _v8 = !!_v7?.hasLiveAutoTranslation || !!_v7?.hasLiveAudioTracksManagement;
    (0, _v21.useEffect)(() => {
      _v8 && _v4();
    }, [_v4, _v8]);
    let _v9 = async () => {
      _v5(), _v0.emitSignal({
        type: _v51.ELiveSignal.RIGHT_PANEL_TAB_CHANGE_REQUEST,
        data: _v112.ERightPanelId.EVENT_SETTINGS
      }), await (0, _v99.nextAsyncQueue)(), _v0.emitSignal({
        type: _v51.ELiveSignal.ACCORDION_ITEM_CHANGE_REQUEST,
        data: _v100.EAccordionItemId.AUTO_CC
      }), _v2({
        autoCcEnabled: !0,
        ...(_v1?.autoCcLanguage ? {
          autoCcLanguage: _v1.autoCcLanguage
        } : {}),
        autoCcKeywords: _v1?.autoCcKeywords
      }, []);
    };
    return _v3 ? (0, _v17.jsxs)(_v58.Modal, {
      isOpen: _v3,
      onClose: _v5,
      children: [(0, _v17.jsx)(_v60.ModalOverlay, {}), (0, _v17.jsxs)(_v59.ModalContent, {
        width: (0, _v61.rem)(480),
        maxWidth: (0, _v61.rem)(480),
        maxHeight: (0, _v61.rem)(531),
        borderRadius: (0, _v61.rem)(20),
        padding: 0,
        overflow: "hidden",
        children: [(0, _v17.jsx)(_v108.ModalCloseButton, {
          zIndex: 1
        }), (0, _v17.jsxs)(_v95.Flex, {
          direction: "column",
          alignItems: "center",
          gap: (0, _v61.rem)(8),
          textAlign: "center",
          paddingTop: (0, _v61.rem)(32),
          paddingX: (0, _v61.rem)(24),
          paddingBottom: (0, _v61.rem)(8),
          children: [(0, _v17.jsx)(_v109.Text, {
            fontSize: (0, _v61.rem)(30),
            fontWeight: 500,
            color: "text-primary",
            lineHeight: 1.2,
            letterSpacing: "-0.04em",
            children: (0, _v111.translate)({
              singular: "Your live events just got multilingual",
              dictionary: {
                es: {
                  singular: "Tus eventos en vivo ahora son multilingües"
                },
                "de-DE": {
                  singular: "Ihre Live-Events sind jetzt mehrsprachig"
                },
                "fr-FR": {
                  singular: "Vos événements en direct viennent de devenir multilingues"
                },
                "ja-JP": {
                  singular: "ライブイベントが多言語対応になりました"
                },
                "ko-KR": {
                  singular: "라이브 이벤트가 이제 다국어를 지원합니다"
                },
                "pt-BR": {
                  singular: "Seus eventos ao vivo agora são multilíngues"
                },
                "zh-CN": {
                  singular: "您的直播活动现已支持多语言"
                }
              }
            })
          }), (0, _v17.jsx)(_v109.Text, {
            fontSize: (0, _v61.rem)(14),
            color: "text-secondary",
            lineHeight: 1.4,
            letterSpacing: "-0.03em",
            children: (0, _v111.translate)({
              singular: "Reach viewers in any language. Generate live captions in 90+ languages and stream multiple audio tracks simultaneously.",
              dictionary: {
                es: {
                  singular: "Llega a espectadores en cualquier idioma. Genera subtítulos en vivo en 90+ idiomas y transmite múltiples pistas de audio simultáneamente."
                },
                "de-DE": {
                  singular: "Erreichen Sie Zuschauer in jeder Sprache. Erstellen Sie Live-Untertitel in über 90 Sprachen und streamen Sie gleichzeitig mehrere Audiokanäle."
                },
                "fr-FR": {
                  singular: "Atteignez les spectateurs dans n'importe quelle langue. Générez des sous-titres en direct dans plus de 90 langues et diffusez plusieurs pistes audio simultanément."
                },
                "ja-JP": {
                  singular: "どの言語の視聴者にもリーチできます。90以上の言語でライブ字幕を生成し、複数の音声トラックを同時に配信できます。"
                },
                "ko-KR": {
                  singular: "모든 언어의 시청자에게 도달하세요. 90개 이상의 언어로 실시간 자막을 생성하고 여러 오디오 트랙을 동시에 스트리밍할 수 있습니다."
                },
                "pt-BR": {
                  singular: "Alcance espectadores em qualquer idioma. Gere legendas ao vivo em mais de 90 idiomas e transmita várias faixas de áudio simultaneamente."
                },
                "zh-CN": {
                  singular: "覆盖任何语言的观众。生成 90 多种语言的实时字幕，并同时传输多条音轨。"
                }
              }
            })
          })]
        }), (0, _v17.jsx)(_v106.Box, {
          paddingX: (0, _v61.rem)(24),
          paddingTop: (0, _v61.rem)(16),
          paddingBottom: (0, _v61.rem)(8),
          children: (0, _v17.jsx)(_v106.Box, {
            as: "img",
            src: "/assets/images_v6/live/multilingual-intro.gif",
            alt: "",
            display: "block",
            width: "100%",
            height: (0, _v61.rem)(243),
            borderRadius: (0, _v61.rem)(12)
          })
        }), (0, _v17.jsxs)(_v95.Flex, {
          gap: (0, _v61.rem)(12),
          alignItems: "center",
          paddingX: (0, _v61.rem)(24),
          paddingTop: (0, _v61.rem)(16),
          paddingBottom: (0, _v61.rem)(24),
          children: [(0, _v17.jsx)(_v107.Button, {
            variant: "ghost",
            size: "md",
            flex: 1,
            onClick: () => {
              window.open("https://help.vimeo.com/hc/en-us/articles/47511050400017-About-live-caption-translations-for-live-events", "_blank", "noopener,noreferrer");
            },
            children: (0, _v111.translate)({
              singular: "Learn more",
              dictionary: {
                es: {
                  singular: "Ver más"
                },
                "de-DE": {
                  singular: "Mehr dazu"
                },
                "fr-FR": {
                  singular: "En savoir plus "
                },
                "ja-JP": {
                  singular: "詳細を見る"
                },
                "ko-KR": {
                  singular: "자세히 보기"
                },
                "pt-BR": {
                  singular: "Saiba mais"
                },
                "zh-CN": {
                  singular: "了解更多"
                }
              }
            })
          }), (0, _v17.jsx)(_v107.Button, {
            variant: "primary",
            size: "md",
            flex: 1,
            onClick: _v9,
            children: (0, _v111.translate)({
              singular: "Try it in an event",
              dictionary: {
                es: {
                  singular: "Pruébalo en un evento"
                },
                "de-DE": {
                  singular: "Probieren Sie es bei einer Veranstaltung aus"
                },
                "fr-FR": {
                  singular: "Essayez-le lors d'un événement"
                },
                "ja-JP": {
                  singular: "イベントでお試しください"
                },
                "ko-KR": {
                  singular: "이벤트에서 사용해 보세요"
                },
                "pt-BR": {
                  singular: "Experimente em um evento"
                },
                "zh-CN": {
                  singular: "在活动中试用"
                }
              }
            })
          })]
        })]
      })]
    }) : null;
  }
  var _v117 = _v0.i(0),
    _v118 = _v0.i(0),
    _v119 = _v0.i(0),
    _v120 = _v0.i(0),
    _v121 = _v0.i(0),
    _v122 = _v28,
    _v123 = _v0.i(0),
    _v124 = _v0.i(0),
    _v125 = _v0.i(0),
    _v126 = _v0.i(0),
    _v127 = _v0.i(0),
    _v128 = _v0.i(0),
    _v129 = ((_v2 = {}).SCENE = "scene", _v2.GRAPHIC = "graphic", _v2.IS_SCENE_PREVIEW_DROP_DISABLED = "is-scene-preview-drop-disabled", _v2.IS_INDEX_DRAG_ALLOWED = "is-index-drag-allowed", _v2.IS_FROM_PANEL = "is-from-panel", _v2.IS_IN_SCENE = "is-in-scene", _v2.IS_SCENE_GRAPHICS_REPLACEMENTS = "is-scene-graphics-replacement", _v2.SCENE_CAN_BE_SCHEDULED = "scene-can-be-scheduled", _v2.AGORA_MEDIA = "agora-media", _v2.LOWER_THIRD = "lowerthird", _v2.BROADCASTER_LOWER_THIRD = "broadcaster-lowerthird", _v2.GUEST_LOWER_THIRD = "guest-lowerthird", _v2.POLL = "poll", _v2.QNA = "qna", _v2.LOGO = "logo", _v2.IMAGE = "fullscreen", _v2.AGORA_STREAM = "agora-stream", _v2.AGORA_SCREEN = "agora-screen", _v2.SLIDES = "slides", _v2.TEMPLATE = "template", _v2.TEMPLATE_ITEM = "template-item", _v2);
  let _v130 = {
    [_v88.EGraphicsDescriptorType.LOWER_THIRD]: "lowerthird",
    [_v88.EGraphicsDescriptorType.BROADCASTER_LOWER_THIRD]: "broadcaster-lowerthird",
    [_v88.EGraphicsDescriptorType.GUEST_LOWER_THIRD]: "guest-lowerthird",
    [_v88.EGraphicsDescriptorType.POLL]: "poll",
    [_v88.EGraphicsDescriptorType.QNA]: "qna",
    [_v88.EGraphicsDescriptorType.LOGO]: "logo",
    [_v88.EGraphicsDescriptorType.IMAGE]: "fullscreen",
    [_v88.EGraphicsDescriptorType.AGORA_STREAM]: "agora-stream",
    [_v88.EGraphicsDescriptorType.AGORA_SCREEN]: "agora-screen",
    [_v88.EGraphicsDescriptorType.AGORA_MEDIA]: "agora-media",
    [_v88.EGraphicsDescriptorType.SLIDES]: "slides"
  };
  function _v131({
    dataTransfer: _v0,
    type: _v1,
    graphicType: _v2,
    dropEffect: _v3,
    textData: _v4,
    ..._v5
  }) {
    _v3 && (_v0.dropEffect = _v3), _v0.setData("text/plain", _v4), _v0.setData("type", _v1), _v0.setData(_v1, ""), _v2 && _v0.setData("graphic/type", _v2), Object.values(_v129).forEach(_v0 => {
      _v5[_v0] && _v0.setData(_v0, JSON.stringify(_v5[_v0]));
    });
  }
  function _v132(_v0) {
    return _v0.getData("text/plain");
  }
  function _v133(_v0) {
    return JSON.parse(_v132(_v0));
  }
  function _v134(_v0) {
    _v0.preventDefault(), _v0.isCancelled = !0;
  }
  var _v135 = _v0.i(0),
    _v136 = _v0.i(0),
    _v137 = _v0.i(0),
    _v138 = _v0.i(0),
    _v139 = _v0.i(0);
  function _v140({
    id: _v0 = (0, _v65.createLiveDomName)("drag-over-label"),
    className: _v1 = (0, _v65.createLiveDomName)("drag-over-label"),
    dragOverState: _v2
  }) {
    let _v3 = _v66.translations.dragAndDropLabel[_v2];
    return _v3 ? (0, _v17.jsxs)(_v138.Center, {
      id: _v0,
      className: _v1,
      position: "absolute",
      color: "white",
      gap: (0, _v61.rem)(8),
      userSelect: "none",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: `${(0, _v61.rem)(8)} ${(0, _v61.rem)(24)}`,
      children: [(0, _v17.jsx)(_v139.SyncRefresh, {}), (0, _v17.jsx)(_v137.Header, {
        size: "xs",
        children: _v3
      })]
    }) : null;
  }
  var _v141 = ((_v3 = {}).DROP = "drop", _v3.REPLACE = "replace", _v3.SWAP = "swap", _v3.NONE = "none", _v3);
  function _v142(_v0, _v1 = !0, _v2) {
    let [_v3, _v4] = (0, _v21.useState)("none"),
      _v5 = (0, _v21.useMemo)(() => _v0 => {
        let _v1 = _v0.dataTransfer;
        if (!_v1 || _v1.types.includes(_v129.IS_INDEX_DRAG_ALLOWED) && !_v1.types.includes(_v129.IS_SCENE_PREVIEW_DROP_DISABLED)) {
          let _v0 = _v1.types.includes(_v129.IS_IN_SCENE);
          if (_v1.types.includes(_v129.IS_FROM_PANEL)) {
            if (!_v2) return _v1.types.includes(_v129.IS_SCENE_GRAPHICS_REPLACEMENTS) ? _v4("replace") : _v4("drop");
            _v0 && _v0 ? _v4("swap") : _v0 ? _v4("replace") : _v4("drop");
          } else _v0 && _v0 ? _v4("swap") : _v0 ? _v4("replace") : _v4("drop");
        }
      }, [_v0, _v1, _v2]);
    return {
      dragOverState: _v3,
      setDragOverState: _v4,
      onChangeDragOverState: _v5
    };
  }
  var _v143 = _v65,
    _v144 = _v0.i(0),
    _v145 = _v0.i(0),
    _v146 = _v0.i(0),
    _v147 = _v0.i(0),
    _v148 = _v0.i(0);
  function _v149({
    src: _v0,
    fit: _v1,
    children: _v2
  }) {
    return (0, _v17.jsx)(_v106.Box, {
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: _v0 ? `url('${_v0}')` : void 0,
      backgroundSize: _v1 ? "fit" : "cover",
      children: _v2
    });
  }
  function _v150({
    graphicId: _v0,
    graphicType: _v1,
    scope: _v2
  }) {
    switch (_v1) {
      case _v88.EGraphicsDescriptorType.AGORA_STREAM:
        {
          let _v0 = (0, _v147.parseAgoraConnectionDetails)(_v0);
          if (!_v0) return (0, _v17.jsx)(_v149, {
            src: null
          });
          let [_v1, _v2] = _v0,
            {
              guests: _v3
            } = _v2.getContextOf(_v146.GuestsManager),
            {
              additionalInformation: {
                broadcaster: _v4
              }
            } = _v2.getContextOf(_v82.GraphicsManager),
            _v5 = _v3[_v2],
            _v6 = _v1 === _v38.EAgoraConnectionType.BROADCASTER,
            _v7 = _v5?.name || _v4.name || "U",
            _v8 = _v5?.id || (_v6 ? _v38.EAgoraConnectionType.BROADCASTER : "U");
          return (0, _v17.jsx)(_v145.AgoraStreamAvatar, {
            name: _v7,
            colorSeed: _v8,
            fontSize: "100%",
            withAnimation: !1
          });
        }
      case _v88.EGraphicsDescriptorType.IMAGE:
        {
          let {
              fullscreenList: _v0
            } = _v2.getContextOf(_v82.GraphicsManager),
            _v1 = _v0[_v0];
          return (0, _v17.jsx)(_v149, {
            src: _v1?.imageSrc
          });
        }
      case _v88.EGraphicsDescriptorType.AGORA_MEDIA:
        {
          let {
              agoraMediaList: _v0
            } = _v2.getContextOf(_v82.GraphicsManager),
            _v1 = _v0[_v0];
          return (0, _v17.jsx)(_v149, {
            src: _v1?.videoThumb
          });
        }
      case _v88.EGraphicsDescriptorType.SLIDES:
        {
          let {
              slidesList: _v0
            } = _v2.getContextOf(_v82.GraphicsManager),
            _v1 = (0, _v148.getSlideThumbnail)(_v0[_v0]);
          return (0, _v17.jsx)(_v149, {
            src: _v1,
            fit: "contain"
          });
        }
      default:
        return null;
    }
  }
  var _v151 = _v0.i(0);
  function _v152({
    src: _v0,
    fit: _v1
  }) {
    return (0, _v17.jsx)(_v106.Box, {
      width: "100%",
      height: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: _v0 ? `url('${_v0}')` : void 0,
      backgroundSize: _v1 || "cover"
    });
  }
  function _v153({
    graphicItem: _v0,
    scope: _v1,
    theme: _v2
  }) {
    if (_v0.type === _v88.EGraphicsDescriptorType.AGORA_STREAM) {
      let _v0 = _v0.data.sourceId === _v38.EAgoraConnectionType.BROADCASTER,
        _v1 = "U",
        _v2 = _v0 ? _v38.EAgoraConnectionType.BROADCASTER : "U";
      if (_v0) {
        let _v0 = _v1?.queryDataSync({
          type: _v151.ELiveGraphicsQuery.BROADCASTER_INFO
        });
        _v1 = _v0?.data.name || _v1;
      } else {
        let _v0 = (0, _v147.parseAgoraConnectionDetails)(_v0.data.sourceId),
          _v1 = _v1?.queryDataSync({
            type: _v151.ELiveGraphicsQuery.GUEST_ITEM,
            data: {
              id: _v0 ? _v0[1] : null
            }
          });
        _v1 = _v1?.data?.name || _v1, _v2 = _v1?.data?.id || _v2;
      }
      return (0, _v17.jsx)(_v145.AgoraStreamAvatar, {
        name: _v1,
        colorSeed: _v2,
        fontSize: "100%",
        fontFamily: _v2?.font,
        withAnimation: !1
      });
    }
    let _v3 = _v1?.queryDataSync({
      type: _v151.ELiveGraphicsQuery.GRAPHICS_ITEM,
      data: {
        type: _v0.type,
        id: _v0.data.sourceId
      }
    });
    switch (_v0.type) {
      case _v88.EGraphicsDescriptorType.IMAGE:
        {
          let _v0 = _v3?.data?.imageSrc || "";
          return (0, _v17.jsx)(_v152, {
            src: _v0
          });
        }
      case _v88.EGraphicsDescriptorType.AGORA_MEDIA:
        {
          let _v0 = _v3?.data?.videoThumb || "";
          return (0, _v17.jsx)(_v152, {
            src: _v0
          });
        }
      case _v88.EGraphicsDescriptorType.SLIDES:
        {
          let {
              slideIndex: _v0 = 0
            } = _v0.data,
            _v1 = (0, _v148.getSlideThumbnail)(_v3?.data, _v0);
          return (0, _v17.jsx)(_v152, {
            src: _v1,
            fit: "contain"
          });
        }
      default:
        return null;
    }
  }
  function _v154(_v0, _v1) {
    let _v2 = document.createElement("div");
    Object.assign(_v2.style, (0, _v135.getDragThumbnailStyle)()), window.document.body.appendChild(_v2), (0, _v144.createRoot)(_v2).render(_v1), _v0.setDragImage(_v2, _v74.graphicsConfig.SCENE.GRAPHIC_THUMBNAIL.DRAG.WIDTH / 3, _v74.graphicsConfig.SCENE.GRAPHIC_THUMBNAIL.DRAG.HEIGHT / 3), setTimeout(() => window.document.body.removeChild(_v2), 0);
  }
  let _v155 = (0, _v21.memo)(({
    id: _v0 = (0, _v143.createLiveDomName)("placeholder-controls-renderer"),
    className: _v1 = (0, _v143.createLiveDomName)("placeholder-controls-renderer"),
    children: _v2,
    scope: _v3,
    theme: _v4,
    position: _v5,
    isDragEnabled: _v6,
    isDraggable: _v7,
    onAddSourceToPosition: _v8,
    onDragStarted: _v9,
    onDragEnded: _v10,
    graphicItem: _v11
  }) => {
    let _v12 = (0, _v21.useMemo)(() => (0, _v135.getGraphicWrapperStyle)(_v5), [_v5]),
      _v13 = _v11?.data.sourceId,
      {
        dragOverState: _v14,
        setDragOverState: _v15,
        onChangeDragOverState: _v16
      } = _v142(!!_v13, !0, !0),
      _v17 = !!(_v6 && _v14 !== _v141.NONE),
      _v18 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v0.nativeEvent.dataTransfer;
        _v11 && (!function ({
          graphicItem: _v0,
          scope: _v1,
          theme: _v2,
          dataTransfer: _v3
        }) {
          _v154(_v3, (0, _v21.createElement)(_v153, {
            graphicItem: _v0,
            scope: _v1,
            theme: _v2
          }));
        }({
          graphicItem: _v11,
          dataTransfer: _v1,
          scope: _v3,
          theme: _v4
        }), _v131({
          dataTransfer: _v1,
          graphicType: _v11.type,
          type: _v129.GRAPHIC,
          dropEffect: "move",
          [_v129.IS_INDEX_DRAG_ALLOWED]: !0,
          [_v129.IS_IN_SCENE]: !0,
          textData: JSON.stringify({
            id: _v13,
            graphicType: _v11.type
          })
        }), _v9 && _v9({
          id: _v13,
          graphicType: _v11.type,
          isInScene: !0,
          isIndexDragAllowed: !0,
          type: _v129.GRAPHIC
        }));
      }, [_v11, _v3, _v4, _v13, _v9]),
      _v19 = (0, _v21.useCallback)(() => {
        _v10 && _v10();
      }, [_v10]),
      _v20 = (0, _v21.useCallback)(_v0 => {
        if (_v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v0.dataTransfer.getData("graphic/type"))) {
          let _v0 = _v133(_v0.dataTransfer);
          _v15(_v141.NONE), _v8({
            index: _v5.index,
            graphicId: _v0.id,
            graphicType: _v0.graphicType
          }), _v134(_v0);
        }
      }, [_v5.index, _v8, _v15]),
      _v21 = (0, _v21.useCallback)(() => {
        _v15(_v141.NONE);
      }, [_v15]);
    return (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      draggable: _v7,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      userSelect: "none",
      background: _v17 ? `${_v136.PREVIEW_LAYOUT_COLOR}50` : void 0,
      border: _v17 ? `3px dashed ${_v136.PREVIEW_LAYOUT_COLOR}` : void 0,
      backdropFilter: _v17 ? "blur(10px)" : void 0,
      style: _v12,
      onDragOver: _v6 ? _v16 : void 0,
      onDragLeave: _v6 ? _v21 : void 0,
      onMouseLeave: _v6 ? _v21 : void 0,
      onDrop: _v20,
      onDragStart: _v18,
      onDragEnd: _v19,
      children: [(0, _v17.jsx)(_v140, {
        dragOverState: _v14
      }), _v2]
    });
  });
  var _v156 = _v65,
    _v157 = _v0.i(0);
  function _v158({
    id: _v0 = (0, _v65.createLiveDomName)("scene-overlay-loader"),
    className: _v1 = (0, _v65.createLiveDomName)("scene-overlay-loader")
  }) {
    return (0, _v17.jsx)(_v138.Center, {
      id: _v0,
      className: _v1,
      height: "100%",
      width: "100%",
      background: "blackAlpha.500",
      children: (0, _v17.jsx)(_v157.Spinner, {
        size: "md",
        color: "white"
      })
    });
  }
  let _v159 = (0, _v21.memo)(({
    id: _v0 = (0, _v156.createLiveDomName)("scene-controls-renderer"),
    className: _v1 = (0, _v156.createLiveDomName)("scene-controls-renderer"),
    scene: _v2,
    activeScreen: _v3,
    polls: _v4,
    theme: _v5,
    isInProgram: _v6,
    isEventModerated: _v7,
    hasDraggedContent: _v8,
    sceneActions: _v9,
    roomScreenShareActions: _v10,
    fullscreenList: _v11,
    isSessionLive: _v12,
    isSessionRequested: _v13,
    isSessionUpdating: _v14,
    isSessionUnavailable: _v15,
    roomMedia: _v16
  }) => {
    let _v17 = (0, _v28.useScope)(),
      [_v18, _v19] = (0, _v21.useState)(!1),
      _v20 = _v2?.meta?.layoutType,
      _v21 = !!_v20,
      _v22 = "rgba(0, 173, 239, 0.2)",
      [_v23] = (0, _v124.useMediaTracks)(_v2, _v16),
      [_v24, _v25] = (0, _v21.useState)(!1),
      _v26 = (0, _v123.useLayoutPlaceholdersDescriptors)(_v2),
      _v27 = (0, _v21.useCallback)(() => _v17.emitSignal({
        type: _v51.ELiveGraphicsSignal.TOGGLE_MEDIA_IN_SCENE
      }), [_v17]),
      _v28 = (0, _v21.useCallback)(async () => {
        if (_v2?.id) if (_v12) _v27();else try {
          (_v15 || !_v6) && (await _v9.pushSceneToProgram(_v2.id, {
            isCloudProvisionRequired: !0
          })), _v27();
        } catch (_v0) {
          _v81.Logger.getGlobal().warn("Failed to toggle media state:", _v0);
        }
      }, [_v27, _v2.id, _v12, _v15, _v6, _v9]),
      _v29 = (0, _v21.useCallback)(() => {
        _v28();
        let _v0 = _v2?.meta?.media?.status === _v88.EMediaStatus.PLAY ? "pause" : "play";
        (0, _v128.trackToggleVideoState)({
          status: _v0,
          element: "button",
          location: "content_area",
          copy: _v0
        });
      }, [_v28, _v2?.meta?.media?.status]),
      _v30 = (0, _v21.useCallback)(_v0 => _v17.getContextOf(_v125.DragDropManager)?.dragDropActions.startDragDrop(_v0), [_v17]),
      _v31 = (0, _v21.useCallback)(() => _v17.getContextOf(_v125.DragDropManager)?.dragDropActions.stopDragDrop(), [_v17]),
      _v32 = (0, _v21.useCallback)(_v0 => {
        _v19(!0), _v9.removeGraphicFromScene(_v2.id, _v0).finally(() => _v19(!1));
      }, [_v9, _v2]),
      _v33 = (0, _v21.useCallback)((_v0, _v1, _v2) => {
        if (_v19(!0), _v9.setGraphicVisibility(_v2.id, _v0, _v2).finally(() => _v19(!1)), _v2) {
          let _v0 = _v1 === _v88.EGraphicsDescriptorType.POLL ? _v4[_v0] : null;
          (0, _v127.trackShowGraphicInScene)({
            pollState: _v0 ? _v0.state : void 0,
            isModerated: _v7,
            graphicType: _v1,
            isInProgram: _v6,
            location: "scene_preview"
          });
        } else (0, _v127.trackHideGraphicInScene)({
          graphicType: _v1,
          isModerated: _v7
        });
      }, [_v9, _v2?.id, _v6, _v7]),
      _v34 = (0, _v21.useCallback)(({
        graphicType: _v0,
        graphicId: _v1,
        index: _v2,
        swap: _v3
      }) => {
        (0, _v91.isGraphicAlreadyInScene)(_v1, _v2) ? _v9.setGraphicLayoutIndex({
          sceneId: _v2.id,
          graphicIndex: _v2,
          swap: _v3,
          graphicId: _v1,
          graphicType: _v0
        }) : _v9.addGraphicToScene({
          sceneId: _v2.id,
          graphicId: _v1,
          graphicType: _v0,
          options: {
            location: _v126.ETtrackingAddGraphicLocations.SCENE_PREVIEW,
            isDragged: !0
          },
          sourceIndex: _v2
        });
      }, [_v2, _v9]);
    return ((0, _v21.useEffect)(() => {
      if (_v14 || _v13) {
        let _v0 = setTimeout(() => _v25(!0), 0);
        return () => clearTimeout(_v0);
      }
      _v25(!1);
    }, [_v13, _v14]), _v3) ? (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      overflow: "visible",
      zIndex: _v74.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_CONTROLS,
      sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
      children: (0, _v17.jsx)(_v95.Flex, {
        className: (0, _v156.createLiveDomName)(_v1, "screenshare-control"),
        userSelect: "none",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: _v74.graphicsConfig.GRAPHICS_POSITIONING.FULL_POSITION.z,
        sx: {
          "& > *": {
            opacity: 0,
            transition: "opacity 500ms ease-out"
          },
          "&: hover > *": {
            opacity: 1
          }
        },
        children: (0, _v17.jsx)(_v95.Flex, {
          justifyContent: "center",
          alignItems: "center",
          background: _v22,
          border: "1px solid",
          borderColor: "blue.500",
          width: "100%",
          height: "100%",
          children: (0, _v17.jsx)(_v107.Button, {
            variant: "destructive",
            isDisabled: _v18,
            size: "sm",
            onClick: _v10.stopCurrentSharing,
            children: _v66.translations.stopScreenSharing
          })
        })
      })
    }) : (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      overflow: "visible",
      zIndex: _v74.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_CONTROLS,
      sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
      children: [Object.entries(_v2.graphics || {}).map(([_v0, _v1]) => {
        let _v2 = _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v1.type),
          _v3 = !!(!_v20 || !_v2 || void 0 !== _v1.position.index),
          _v4 = _v1.position.width <= 35,
          _v5 = _v1.position.visible,
          _v6 = (0, _v84.inline)(() => {
            if (_v1.type !== _v88.EGraphicsDescriptorType.IMAGE) return !0;
            {
              let _v0 = _v11[_v1.data.sourceId];
              return !!(_v0?.line || _v0?.subLine);
            }
          }) && _v74.graphicsConfig.SCENE.CONTROLS.INLINE_TOGGLE_ALLOWED.includes(_v1.type),
          _v7 = _v74.graphicsConfig.SCENE.CONTROLS.INLINE_REMOVAL_ALLOWED.includes(_v1.type),
          _v8 = _v1.type === _v88.EGraphicsDescriptorType.AGORA_MEDIA,
          _v9 = (0, _v84.inline)(() => !_v23 && !!_v8 && _v24),
          _v10 = _v8 && _v6,
          _v11 = _v2?.meta?.media?.status === _v88.EMediaStatus.PLAY,
          _v12 = !!(_v21 && Number.isInteger(_v1.position.index) && _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v1.type)),
          _v13 = _v3 ? (0, _v17.jsx)(_v95.Flex, {
            className: (0, _v156.createLiveDomName)(_v1, "item"),
            userSelect: "none",
            position: "absolute",
            left: `${_v1.position.left}%`,
            top: `${_v1.position.top}%`,
            width: `${_v1.position.width}%`,
            height: `${_v1.position.height}%`,
            zIndex: _v1.position.z,
            sx: {
              "& > *": {
                opacity: 0,
                transition: "opacity 500ms ease-out"
              },
              "&: hover > *": {
                opacity: 1
              },
              ...(_v12 ? _v97.FULL_WIDTH_ABSOLUTE_STYLE : void 0)
            },
            children: (0, _v17.jsxs)(_v95.Flex, {
              className: (0, _v156.createLiveDomName)(_v1, "item-content"),
              direction: _v4 ? "column" : "row",
              justifyContent: "center",
              alignItems: "center",
              background: _v22,
              border: "1px solid",
              borderColor: "blue.500",
              width: "100%",
              height: "100%",
              children: [_v10 ? (0, _v17.jsx)(_v107.Button, {
                margin: (0, _v61.rem)(4),
                isDisabled: _v18,
                size: "sm",
                minWidth: (0, _v61.rem)(120),
                variant: "primary",
                onClick: _v29,
                children: _v11 ? _v66.translations.pause : _v66.translations.play
              }) : null, _v6 ? (0, _v17.jsx)(_v107.Button, {
                margin: (0, _v61.rem)(4),
                isDisabled: _v18,
                size: "sm",
                minWidth: (0, _v61.rem)(120),
                variant: "primary",
                onClick: () => _v33(_v0, _v1.type, !_v1.position.visible),
                children: _v5 ? _v66.translations.hide : _v66.translations.show
              }) : null, _v7 ? (0, _v17.jsx)(_v107.Button, {
                margin: (0, _v61.rem)(4),
                variant: "destructive",
                isDisabled: _v18,
                size: "sm",
                minWidth: (0, _v61.rem)(120),
                onClick: () => _v32(_v0),
                children: _v66.translations.remove
              }) : null]
            })
          }, _v0) : null;
        return _v12 ? (0, _v17.jsx)(_v155, {
          position: _v1.position,
          isDraggable: _v12,
          isDragEnabled: _v21,
          onDragStarted: _v30,
          onDragEnded: _v31,
          onAddSourceToPosition: ({
            graphicId: _v0,
            graphicType: _v1,
            index: _v2
          }) => _v34({
            graphicId: _v0,
            graphicType: _v1,
            index: _v2,
            swap: !0
          }),
          graphicItem: (_v2?.graphics || {})[_v0],
          scope: _v17,
          theme: _v5,
          children: _v9 ? (0, _v17.jsx)(_v158, {}) : _v13
        }, _v0) : _v9 ? (0, _v17.jsx)(_v158, {}, _v0) : _v8 ? null : _v13;
      }), _v26.map(_v0 => (0, _v17.jsx)(_v155, {
        position: _v0,
        isDragEnabled: _v21,
        theme: _v5,
        onAddSourceToPosition: _v34
      }, _v0.index))]
    });
  });
  var _v160 = _v0.i(0),
    _v161 = _v0.i(0),
    _v162 = _v0.i(0),
    _v163 = _v0.i(0);
  function _v164(_v0, _v1, _v2, _v3) {
    let [_v4] = (0, _v160.useBroadcasterActionConfirmation)(),
      _v5 = (0, _v160.useSimpleNotification)();
    return (0, _v21.useCallback)(async (_v0, _v1) => {
      let _v2 = _v1 || _v0,
        _v3 = !!(_v1?.meta?.layoutType && _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v2)),
        _v4 = !!(_v1 && !_v1.meta?.layoutType),
        _v5 = !_v74.graphicsConfig.SCENE.CONTROLS.BG_POSITION_ALLOWED.includes(_v2) && _v3,
        _v6 = !!_v1,
        _v7 = _v1?.id || null,
        _v8 = (_v2 === _v88.EGraphicsDescriptorType.QNA ? _v88.EGraphicsDescriptorType.QNA : _v0?.id) || null;
      if (!_v7 || !_v8) return !1;
      if ((0, _v91.isGraphicAlreadyInScene)(_v8, _v1)) return await _v2.removeGraphicFromScene(_v7, _v8), !0;
      if (_v4 && _v2 === _v88.EGraphicsDescriptorType.AGORA_STREAM && (0, _v161.getCountOfGraphicsByType)(_v2, _v1) >= _v74.graphicsConfig.SCENE.MAX_SPEAKERS_COUNT) return _v5({
        message: _v66.translations.graphicNoMoreSpeakers(_v74.graphicsConfig.SCENE.MAX_SPEAKERS_COUNT)
      }), !1;
      if (_v5 && !(0, _v91.hasIndexedSlotsInScene)(_v1)) return _v5({
        message: _v66.translations.graphicNoPlaceFound
      }), !1;
      {
        let _v0 = (0, _v91.findConflictingGraphicsWithType)(_v2, _v1);
        return _v0.length ? new Promise(_v0 => {
          let _v1;
          _v4({
            type: _v162.EConfirmationType.GRAPHICS_REPLACEMENT,
            header: (_v1 = _v0[0].type) === _v2 ? _v66.translations.graphicsReplaceNewConfirmation(_v163.NormalizedGraphicsDescriptorType[_v2]) : _v2 === _v88.EGraphicsDescriptorType.AGORA_MEDIA ? _v66.translations.graphicsReplaceAllConfirmation(_v163.NormalizedGraphicsDescriptorType[_v2]) : _v66.translations.graphicsReplaceConfirmation(_v163.NormalizedGraphicsDescriptorType[_v1], _v163.NormalizedGraphicsDescriptorType[_v2]),
            onConfirm: () => {
              _v0.find(_v0 => _v0.type === _v88.EGraphicsDescriptorType.GUEST_LOWER_THIRD) && _v2.setGuestLowerThirdsVisibility(_v7, !1), _v2.replaceGraphicInScene(_v7, _v2, _v8, {
                isDragged: _v6,
                location: _v3
              }), _v0(!0);
            },
            onDecline: () => _v0(!1)
          });
        }) : (await _v2.addGraphicToScene({
          sceneId: _v7,
          graphicType: _v2,
          graphicId: _v8,
          options: {
            isDragged: _v6,
            location: _v3
          }
        }), !0);
      }
    }, [_v1, _v2, _v0, _v4, _v5]);
  }
  function _v165({
    scene: _v0,
    sceneActions: _v1,
    children: _v2,
    isActiveDragOver: _v3,
    setIsActiveDragOver: _v4
  }) {
    let _v5 = (0, _v160.useSimpleNotification)(),
      _v6 = !!(_v0 && !_v0.meta?.layoutType),
      _v7 = _v164(_v88.EGraphicsDescriptorType.AGORA_STREAM, _v0, _v1, _v126.ETtrackingAddGraphicLocations.SCENE_PREVIEW),
      {
        dragOverState: _v8,
        onChangeDragOverState: _v9
      } = _v142((0, _v21.useMemo)(() => !!Object.entries(_v0.graphics || {}).length, [_v0.graphics]), !1, !_v6),
      _v10 = (0, _v21.useCallback)(_v0 => {
        let {
            dataTransfer: _v1
          } = _v0,
          {
            graphicType: _v2,
            id: _v3
          } = _v133(_v1),
          _v4 = !!(_v0.meta?.layoutType && _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v2)),
          _v5 = !_v74.graphicsConfig.SCENE.CONTROLS.BG_POSITION_ALLOWED.includes(_v2) && _v4;
        if (_v4(!1), !(_v0.isCancelled || !_v2 || _v1.types.includes(_v129.IS_SCENE_PREVIEW_DROP_DISABLED))) if (_v134(_v0), _v4 && !_v5) (0, _v91.isGraphicAlreadyInScene)(_v3, _v0) ? _v1.setGraphicLayoutIndex({
          sceneId: _v0.id,
          graphicId: _v3,
          graphicType: _v2,
          swap: !0,
          graphicIndex: void 0
        }) : _v1.addGraphicToScene({
          sceneId: _v0.id,
          graphicId: _v3,
          graphicType: _v2,
          options: {
            isDragged: !0,
            location: _v126.ETtrackingAddGraphicLocations.SCENE_PREVIEW
          }
        });else if ((0, _v91.isGraphicAlreadyInScene)(_v3, _v0)) _v5({
          message: _v66.translations.graphicAlreadyInScene(_v163.NormalizedGraphicsDescriptorType[_v2])
        });else {
          if (_v6 && _v2 === _v88.EGraphicsDescriptorType.AGORA_STREAM && (0, _v161.getCountOfGraphicsByType)(_v2, _v0) >= _v74.graphicsConfig.SCENE.MAX_SPEAKERS_COUNT) return _v5({
            message: _v66.translations.graphicNoMoreSpeakers(_v74.graphicsConfig.SCENE.MAX_SPEAKERS_COUNT)
          }), !1;
          _v5 && !(0, _v91.hasIndexedSlotsInScene)(_v0) ? _v5({
            message: _v66.translations.graphicNoPlaceFound
          }) : _v7({
            id: _v3
          }, _v2).then(_v0 => {
            _v5({
              message: _v0 ? _v66.translations.graphicAddedToScene(_v163.NormalizedGraphicsDescriptorType[_v2]) : _v66.translations.graphicConflictCancelled
            });
          });
        }
      }, [_v6, _v7, _v5, _v0, _v1, _v4]),
      _v11 = (0, _v21.useCallback)(_v0 => {
        if (!_v0.dataTransfer.types.includes(_v129.GRAPHIC) || _v0.dataTransfer.types.includes(_v129.IS_SCENE_PREVIEW_DROP_DISABLED)) {
          _v0.dataTransfer.dropEffect = "none";
          return;
        }
        _v6 && _v9(_v0), _v4(!0), _v0.preventDefault(), _v0.stopPropagation();
      }, [_v4, _v9, _v6]),
      _v12 = (0, _v21.useCallback)(() => _v4(!1), [_v4]),
      _v13 = _v6 && _v3;
    return (0, _v17.jsx)(_v106.Box, {
      overflow: "visible",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      onDrop: _v10,
      onDragOver: _v11,
      onDragLeave: _v12,
      children: (0, _v17.jsxs)(_v106.Box, {
        userSelect: "none",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        zIndex: 50 + _v74.graphicsConfig.GRAPHICS_POSITIONING.FULL_POSITION.z + 10,
        children: [(0, _v17.jsx)(_v95.Flex, {
          justify: "center",
          align: "center",
          opacity: +!!_v13,
          background: `${_v136.PREVIEW_LAYOUT_COLOR}50`,
          backdropFilter: _v13 ? "blur(10px)" : void 0,
          border: `2px dashed ${_v136.PREVIEW_LAYOUT_COLOR}`,
          width: "100%",
          height: "100%",
          transition: "opacity 500ms ease-out",
          children: _v6 ? (0, _v17.jsx)(_v140, {
            dragOverState: _v8
          }) : null
        }), _v2]
      })
    });
  }
  var _v166 = _v0.i(0),
    _v167 = _v82,
    _v168 = _v56,
    _v169 = _v0.i(0),
    _v170 = _v0.i(0),
    _v171 = _v0.i(0),
    _v172 = _v0.i(0),
    _v173 = _v0.i(0),
    _v174 = _v0.i(0),
    _v175 = _v62,
    _v176 = _v0.i(0),
    _v177 = _v48,
    _v178 = _v125,
    _v179 = _v146,
    _v180 = _v0.i(0),
    _v181 = _v50,
    _v182 = _v0.i(0),
    _v183 = _v0.i(0),
    _v184 = _v0.i(0),
    _v185 = _v96,
    _v186 = _v0.i(0),
    _v187 = _v0.i(0);
  function _v188({
    id: _v0 = (0, _v65.createLiveDomName)("preview-viewing-state"),
    className: _v1 = (0, _v65.createLiveDomName)("preview-viewing-state"),
    label: _v2,
    color: _v3,
    stats: _v4,
    isWithStats: _v5
  }) {
    return (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      position: "absolute",
      left: (0, _v61.rem)(12),
      top: (0, _v61.rem)(12),
      gap: (0, _v61.rem)(8),
      zIndex: _v74.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL,
      children: [_v2 ? (0, _v17.jsx)(_v186.PreviewStateLabel, {
        id: (0, _v65.createLiveDomName)(_v0, "scene-state-label"),
        className: (0, _v65.createLiveDomName)(_v1, "scene-state-label"),
        color: _v3,
        position: "static",
        children: _v2
      }) : null, _v5 ? (0, _v17.jsx)(_v187.PreviewWatchersCount, {
        id: (0, _v65.createLiveDomName)(_v0, "viewers-count"),
        className: (0, _v65.createLiveDomName)(_v1, "viewers-count"),
        stats: _v4
      }) : null]
    });
  }
  var _v189 = _v0.i(0),
    _v190 = _v0.i(0),
    _v191 = ((_v4 = {}).ALL = "SCENE_LIST_ALL", _v4.SCHEDULED = "SCENE_LIST_SCHEDULED", _v4.LIVE = "SCENE_LIST_LIVE", _v4);
  function _v192({
    id: _v0 = (0, _v96.createDomName)("scenes-empty-state"),
    className: _v1 = (0, _v96.createDomName)("scenes-empty-state"),
    isScheduledEvent: _v2,
    scene: _v3,
    sceneContext: {
      scenes: _v4,
      isHydrated: _v5
    } = (0, _v28.useManager)(_v56.SceneManager),
    composerSessionContext: {
      permissions: _v6
    } = (0, _v28.useManager)(_v63.ComposerSessionManager)
  }) {
    let _v7 = (0, _v28.useScope)(),
      _v8 = !!(_v2 && _v3.meta?.isScheduled),
      _v9 = !_v6.hasExplicitApiGuestsManagement,
      _v10 = !!_v6.canSeeTemplatesTab,
      _v11 = !_v6.hasExplicitApiMediaManagement,
      _v12 = (0, _v21.useMemo)(() => _v5 && Object.keys(_v4).length < _v74.graphicsConfig.SCENE.MAX_SCENES_COUNT, [_v4, _v5]),
      _v13 = (0, _v21.useCallback)(async () => {
        _v7.emitSignal({
          type: _v51.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
          data: _v102.SPEAKERS
        }), await (0, _v99.forMillis)(0), _v7.emitSignal({
          type: _v51.ELiveSignal.ADD_SPEAKER_TO_SCENE
        });
      }, [_v7]),
      _v14 = (0, _v21.useCallback)(() => {
        _v7.emitSignal({
          type: _v51.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
          data: _v102.TEMPLATES
        });
      }, [_v7]),
      _v15 = (0, _v21.useCallback)(() => {
        _v7.emitSignal({
          type: _v51.ESceneCreateActionsSignal.CREATE_SCENE,
          data: {
            sceneListType: _v191.SCHEDULED
          }
        });
      }, [_v7]);
    return (0, _v17.jsx)(_v138.Center, {
      padding: (0, _v61.rem)(12),
      sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
      children: (0, _v17.jsxs)(_v95.Flex, {
        id: (0, _v96.createDomName)(_v0, _v8 ? "schedule-edit-placeholder" : "manual-edit-placeholder"),
        direction: "column",
        alignItems: "center",
        gap: (0, _v61.rem)(8),
        children: [(0, _v17.jsx)(_v189.PlusSquare, {
          boxSize: "lg"
        }), (0, _v17.jsx)(_v137.Header, {
          id: (0, _v96.createDomName)(_v0, "connect-message"),
          size: "md",
          children: _v8 ? _v66.translations.addPrerecordedVideos : _v66.translations.buildYourScene
        }), (0, _v17.jsx)(_v109.Text, {
          variant: "body-md",
          color: "text-secondary",
          textAlign: "center",
          maxWidth: (0, _v61.rem)(268),
          children: _v8 ? _v66.translations.prerecordedScenesGoLiveAutomatically : _v66.translations.addAnySpeakersOrContent
        }), (0, _v17.jsx)(_v95.Flex, {
          gap: (0, _v61.rem)(8),
          marginTop: (0, _v61.rem)(8),
          position: "relative",
          zIndex: 99,
          children: _v8 ? _v11 ? (0, _v17.jsx)(_v107.Button, {
            id: (0, _v96.createDomName)(_v0, "add-videos"),
            className: (0, _v96.createDomName)(_v1, "add-videos"),
            variant: "primary",
            size: "sm",
            isDisabled: !_v12,
            onClick: _v15,
            children: _v190.T_ADD_VIDEOS
          }) : null : (0, _v17.jsxs)(_v17.Fragment, {
            children: [_v10 ? (0, _v17.jsx)(_v107.Button, {
              id: (0, _v96.createDomName)(_v0, "browse-templates"),
              className: (0, _v96.createDomName)(_v1, "browse-templates"),
              variant: "secondary",
              size: "sm",
              onClick: _v14,
              children: _v190.T_BROWSE_TEMPLATES
            }) : null, _v9 ? (0, _v17.jsx)(_v107.Button, {
              id: (0, _v96.createDomName)(_v0, "invite-speaker"),
              className: (0, _v96.createDomName)(_v1, "invite-speaker"),
              variant: "primary",
              size: "sm",
              onClick: _v13,
              children: _v190.T_INVITE_SPEAKER
            }) : null]
          })
        })]
      })
    });
  }
  let _v193 = (0, _v21.forwardRef)(({
    id: _v0 = (0, _v185.createDomName)("broadcaster-preview-scene"),
    className: _v1 = (0, _v185.createDomName)("broadcaster-preview-scene"),
    composerSessionStatusContext: {
      streamMode: _v2,
      liveComposerStatuses: {
        isSessionLive: _v3,
        isSessionUnavailable: _v4,
        isSessionEnded: _v5,
        isSessionRequested: _v6,
        isSessionUpdating: _v7,
        isSessionRecordStarted: _v8
      }
    } = (0, _v122.useManager)(_v177.ComposerSessionStatusManager),
    sceneContext: {
      activeScene: _v9,
      sceneInProgram: _v10,
      sceneActions: _v11
    } = (0, _v122.useManager)(_v168.SceneManager, ({
      sceneInProgram: _v0,
      activeScene: _v1
    }) => [_v1, _v0]),
    composerSettingsContext: {
      globalLogo: _v12,
      isLocalMirrored: _v13,
      isRecordingPaused: _v14
    } = (0, _v122.useManager)(_v181.ComposerSettingsManager),
    graphicsContext: {
      theme: _v15,
      logoList: _v16,
      lowerthirdList: _v17,
      fullscreenList: _v18,
      pollList: _v19,
      agoraMediaList: _v20,
      slidesList: _v21,
      globalList: _v22
    } = (0, _v122.useManager)(_v167.GraphicsManager),
    guestContext: {
      guests: _v23
    } = (0, _v122.useManager)(_v179.GuestsManager, ({
      guests: _v0
    }) => [_v0]),
    agoraContext: {
      role: _v24,
      connectionConfig: _v25,
      mediaUid: _v26,
      roomVolumeSmooth: _v27
    } = (0, _v122.useManager)(_v175.BroadcasterAgoraManager, ({
      mediaUid: _v0,
      role: _v1,
      connectionConfig: _v2,
      roomVolumeSmooth: _v3
    }) => [_v0, _v2, _v1, _v3]),
    remoteMediaContext: {
      roomMedia: _v28,
      remoteMediaActions: _v29
    } = (0, _v122.useManager)(_v184.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    qnaContext: {
      isEventModerated: _v30
    } = (0, _v122.useManager)(_v182.QnAManager, ({
      isEventModerated: _v0
    }) => [_v0]),
    roomScreenShareContext: {
      activeScreenShareId: _v31,
      roomScreenShareActions: _v32
    } = (0, _v122.useManager)(_v180.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    localMediaContext: {
      video: _v33,
      screen: _v34
    } = (0, _v122.useManager)(_v183.LocalMediaManager),
    dragDropContext: {
      isDraggingContent: _v35
    } = (0, _v122.useManager)(_v178.DragDropManager, ({
      isDraggingContent: _v0
    }) => [_v0]),
    composerSessionStatsContext: {
      stats: {
        value: _v36
      }
    } = (0, _v122.useManager)(_v176.ComposerSessionStatsManager)
  }, _v37) => {
    let _v38 = (0, _v21.useRef)(null),
      [_v39, _v40] = (0, _v21.useState)(!1),
      _v41 = (0, _v173.useSceneScreenShare)(_v31, _v25?.screen.uid || null, _v24 !== _v38.EClientRole.HOST || _v34.isMuted ? null : _v34.track, _v9, _v28),
      _v42 = !!(_v9 && _v9.id === _v10),
      _v43 = (0, _v161.getSceneOverlayColorNew)(_v3, _v5, _v9?.id === _v10, !0, _v14),
      _v44 = (0, _v174.useSceneStatusLabel)(_v42, _v3, _v8, _v14),
      _v45 = _v33.isMuted ? null : _v33.track,
      _v46 = (0, _v21.useCallback)(_v0 => _v29.setBulkMediaQuality(_v0), [_v29]),
      _v47 = _v2 === _v39.EComposerStreamModeType.RECORD;
    (0, _v172.useCanvasPreviewScaleObserver)(_v37 ?? _v38, _v2 === _v39.EComposerStreamModeType.SIMULIVE ? _v74.graphicsConfig.SCENE.LAYOUT_HEIGHT_SIMULIVE : _v74.graphicsConfig.SCENE.LAYOUT_HEIGHT_LIVE);
    let _v48 = _v9 ? (0, _v17.jsx)(_v192, {
      isScheduledEvent: _v2 === _v39.EComposerStreamModeType.SIMULIVE,
      scene: _v9
    }) : null;
    return (0, _v17.jsx)(_v170.PreviewLayout, {
      id: _v0,
      className: _v1,
      ref: _v37 ?? _v38,
      children: (0, _v17.jsx)(_v169.PreviewCanvas, {
        id: (0, _v185.createDomName)(_v0, "canvas"),
        className: (0, _v185.createDomName)(_v1, "canvas"),
        background: _v9?.meta?.background,
        children: (0, _v17.jsx)(_v171.PreviewSizer, {
          id: (0, _v185.createDomName)(_v0, "sizer"),
          className: (0, _v185.createDomName)(_v1, "sizer"),
          children: _v9 ? (0, _v17.jsxs)(_v17.Fragment, {
            children: [(0, _v17.jsx)(_v188, {
              id: (0, _v185.createDomName)(_v0, "viewing-state"),
              className: (0, _v185.createDomName)(_v1, "viewers-count"),
              isWithStats: _v42 && _v3 && !_v47,
              color: _v43,
              label: _v44,
              stats: _v36
            }), (0, _v17.jsx)(_v166.SceneRenderer, {
              canEdit: !0,
              emptyStatePlaceholder: _v48,
              isActiveDragOver: _v39,
              isInProgram: _v42,
              scene: _v9,
              theme: _v15,
              logoList: _v16,
              lowerthirdList: _v17,
              fullscreenList: _v18,
              globalList: _v22,
              pollList: _v19,
              agoraMediaList: _v20,
              slidesList: _v21,
              guests: _v23,
              localMediaUid: _v26.value,
              roomMedia: _v28,
              roomVolume: _v27,
              localVideo: _v45,
              activeScreen: _v41,
              globalLogo: _v12,
              isLocalMirrored: _v13,
              isWithPlaceholders: !0,
              onQualityChangeRequired: _v46
            }), (0, _v17.jsx)(_v165, {
              isActiveDragOver: _v39,
              setIsActiveDragOver: _v40,
              scene: _v9,
              sceneActions: _v11,
              children: (0, _v17.jsx)(_v159, {
                scene: _v9,
                activeScreen: _v41,
                polls: _v19,
                theme: _v15,
                roomMedia: _v28,
                isInProgram: _v42,
                isEventModerated: _v30 ?? !1,
                hasDraggedContent: _v35,
                sceneActions: _v11,
                roomScreenShareActions: _v32,
                fullscreenList: _v18,
                isSessionLive: _v3,
                isSessionRequested: _v6,
                isSessionUpdating: _v7,
                isSessionUnavailable: _v4
              })
            })]
          }) : (0, _v17.jsx)(_v95.Flex, {
            id: (0, _v185.createDomName)(_v0, "no-content-notification"),
            className: (0, _v185.createDomName)(_v1, "no-content-notification"),
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            color: "white",
            fontSize: "header-2xl",
            fontWeight: "medium",
            padding: (0, _v61.rem)(12),
            children: _v66.translations.selectScene
          })
        })
      })
    });
  });
  var _v194 = _v0.i(0);
  function _v195({
    id: _v0 = (0, _v96.createDomName)("preview-scene-layout-loader"),
    className: _v1 = (0, _v96.createDomName)("preview-scene-layout-loader")
  }) {
    let _v2 = (0, _v21.useRef)(null);
    return (0, _v172.useCanvasPreviewScaleObserver)(_v2, _v74.graphicsConfig.SCENE.LAYOUT_HEIGHT_LIVE), (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v95.Flex, {
        grow: 1
      }), (0, _v17.jsx)(_v194.BokehSkeleton, {
        className: (0, _v96.createDomName)(_v1, "top"),
        width: (0, _v61.rem)(180),
        height: (0, _v61.rem)(40),
        borderRadius: (0, _v61.rem)(8),
        marginBottom: (0, _v61.rem)(16)
      }), (0, _v17.jsx)(_v194.BokehSkeleton, {
        ref: _v2,
        id: _v0,
        className: (0, _v96.createDomName)(_v1, "mod"),
        maxWidth: (0, _v61.rem)(773),
        position: "relative",
        height: "auto",
        borderRadius: "subtle",
        children: (0, _v17.jsx)(_v106.Box, {
          sx: _v97.STRICT_16BY9_BOX_STYLE,
          overflow: "hidden"
        })
      }), (0, _v17.jsx)(_v95.Flex, {
        className: (0, _v96.createDomName)(_v1, "content"),
        margin: `${(0, _v61.rem)(16)} 0 ${(0, _v61.rem)(54)} 0`,
        overflowX: "hidden",
        width: "100%",
        justifyContent: "center",
        children: (0, _v17.jsx)(_v95.Flex, {
          gap: (0, _v61.rem)(12),
          children: (0, _v84.range)(3).map(_v0 => (0, _v17.jsx)(_v194.BokehSkeleton, {
            className: (0, _v96.createDomName)(_v1, "scene-placeholder"),
            overflow: "hidden",
            width: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_WIDTH),
            height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
            marginBottom: (0, _v61.rem)(16),
            borderRadius: (0, _v61.rem)(8)
          }, _v0))
        })
      }), (0, _v17.jsx)(_v95.Flex, {
        grow: .2
      }), (0, _v17.jsx)(_v194.BokehSkeleton, {
        className: (0, _v96.createDomName)(_v1, "bottom"),
        width: (0, _v61.rem)(216),
        height: (0, _v61.rem)(48),
        marginY: (0, _v61.rem)(24),
        borderRadius: (0, _v61.rem)(8)
      })]
    });
  }
  var _v196 = _v0.i(0);
  let _v197 = _v0 => (0, _v17.jsx)(_v196.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v17.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M21.485 2.515a1 1 0 0 1 0 1.414l-1.778 1.778A5.002 5.002 0 0 1 19.071 12l-1.414 1.414a1 1 0 0 1-1.415 0l-5.656-5.657a1 1 0 0 1 0-1.414L12 4.929a5.002 5.002 0 0 1 6.293-.637l1.778-1.777a1 1 0 0 1 1.414 0Zm-3.828 3.828a3 3 0 0 0-4.243 0l-.707.707 4.243 4.243.707-.707a3 3 0 0 0 0-4.243Zm-6.071 3.243a1 1 0 0 1 0 1.414l-1.707 1.707 1.414 1.414L13 12.414a1 1 0 1 1 1.414 1.414l-1.707 1.707.707.707a1 1 0 0 1 0 1.415L12 19.07a5.002 5.002 0 0 1-6.293.636l-1.778 1.778a1 1 0 1 1-1.414-1.414l1.777-1.778A5.002 5.002 0 0 1 4.93 12l1.414-1.414a1 1 0 0 1 1.414 0l.707.707 1.707-1.707a1 1 0 0 1 1.415 0ZM7.05 12.707l-.707.707a3 3 0 1 0 4.243 4.243l.707-.707-4.243-4.243Z",
      fill: "currentColor"
    })
  });
  var _v198 = _v96;
  let _v199 = (0, _v21.forwardRef)(({
    id: _v0 = (0, _v198.createDomName)("broadcaster-preview-scene-static"),
    className: _v1 = (0, _v198.createDomName)("broadcaster-preview-scene-static"),
    isRtmpCloudSession: _v2,
    isPageActive: _v3,
    streamMode: _v4
  }, _v5) => {
    let _v6 = (0, _v21.useRef)(null),
      _v7 = _v5 ?? _v6,
      _v8 = (0, _v84.inline)(() => _v3 ? _v2 ? _v66.translations.eventRtmpMode : _v4 === _v39.EComposerStreamModeType.RECORD ? _v66.translations.recordingIsEnded : _v66.translations.eventEnded : _v66.translations.inActivePageMessage);
    return (0, _v172.useCanvasPreviewScaleObserver)(_v7, _v4 === _v39.EComposerStreamModeType.SIMULIVE ? _v74.graphicsConfig.SCENE.LAYOUT_HEIGHT_SIMULIVE : _v74.graphicsConfig.SCENE.LAYOUT_HEIGHT_LIVE), (0, _v17.jsx)(_v170.PreviewLayout, {
      ref: _v7,
      id: _v0,
      className: _v1,
      children: (0, _v17.jsx)(_v169.PreviewCanvas, {
        id: (0, _v198.createDomName)(_v0, "canvas"),
        className: (0, _v198.createDomName)(_v1, "canvas"),
        children: (0, _v17.jsx)(_v171.PreviewSizer, {
          id: (0, _v198.createDomName)(_v0, "sizer"),
          className: (0, _v198.createDomName)(_v1, "sizer"),
          children: (0, _v17.jsxs)(_v95.Flex, {
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            direction: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: (0, _v61.rem)(8),
            children: [(0, _v17.jsx)(_v197, {
              boxSize: "lg"
            }), (0, _v17.jsx)(_v137.Header, {
              id: (0, _v198.createDomName)(_v0, "message"),
              size: "md",
              children: _v190.T_CONNECTION_PAUSED
            }), (0, _v17.jsx)(_v109.Text, {
              variant: "body-md",
              color: "text-secondary",
              textAlign: "center",
              children: _v8
            })]
          })
        })
      })
    });
  });
  var _v200 = _v28,
    _v201 = _v0.i(0),
    _v202 = _v0.i(0),
    _v203 = _v0.i(0),
    _v204 = _v0.i(0),
    _v205 = _v0.i(0),
    _v206 = _v0.i(0),
    _v207 = _v0.i(0),
    _v208 = _v65,
    _v209 = _v48,
    _v210 = _v50,
    _v211 = _v183,
    _v212 = _v0.i(0),
    _v213 = _v0.i(0),
    _v214 = _v0.i(0),
    _v215 = _v0.i(0),
    _v216 = _v0.i(0);
  function _v217({
    id: _v0 = (0, _v65.createLiveDomName)("broadcaster-chat-control-button"),
    panelsContext: {
      rightPanel: _v1,
      panelActions: _v2
    } = (0, _v28.useManager)(_v216.PanelsManager)
  }) {
    let {
        trackLiveStreamTopBarActionClicked: _v3
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v4 = _v1 === _v112.ERightPanelId.CHAT,
      _v5 = (0, _v21.useCallback)(() => {
        _v4 || _v3({
          liveStreamTopBarAction: "chat"
        }), _v2.toggleRightPanel(_v112.ERightPanelId.CHAT);
      }, [_v4, _v2, _v3]);
    return (0, _v17.jsx)(_v214.BokehTooltip, {
      label: _v4 ? _v66.translations.hideChat : _v66.translations.showChat,
      shouldWrapChildren: !1,
      children: (0, _v17.jsx)(_v213.IconButton, {
        id: (0, _v65.createLiveDomName)(_v0, "chat-button"),
        isActive: _v4,
        variant: "secondary",
        "aria-label": _v4 ? _v66.translations.hideChat : _v66.translations.showChat,
        alignSelf: "center",
        icon: (0, _v17.jsx)(_v215.PanelChatIcon, {
          isActive: _v4,
          isManagementAccessed: !0
        }),
        onClick: _v5
      })
    });
  }
  var _v218 = _v0.i(0);
  function _v219() {
    return (_v219 = Object.assign.bind()).apply(null, arguments);
  }
  let _v220 = function (_v0) {
    return _v21.createElement("svg", _v219({
      width: 36,
      height: 30,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v12 || (_v12 = _v21.createElement("path", {
      d: "M34 23.096c-.417-.963-.896-2.008-2-2.008h-1c1.104 0 2-.899 2-2.008V2.008A2.004 2.004 0 0031 0H5C3.896 0 3 .899 3 2.008V19.08c0 1.109.896 2.008 2 2.008H4c-1.104 0-1.667 1.004-2 2.008l-2 4.895C0 29.101.896 30 2 30h32c1.104 0 2-.899 2-2.008l-2-4.896z",
      fill: "#CCD6DD"
    })), _v13 || (_v13 = _v21.createElement("path", {
      d: "M.008 28.074l.006.057.17.692A1.998 1.998 0 002 30h32a2 2 0 001.992-1.925H.008z",
      fill: "#9AAAB4"
    })), _v14 || (_v14 = _v21.createElement("path", {
      d: "M31 18.076c0 .555-.447 1.004-1 1.004H6c-.552 0-1-.45-1-1.004V3.014c0-.555.448-1.004 1-1.004h24c.553 0 1 .45 1 1.004v15.062z",
      fill: "#5DADEC"
    })), _v15 || (_v15 = _v21.createElement("path", {
      d: "M32.906 25.041l-.76-2.175c-.239-.46-.635-.837-1.188-.837H5.11c-.552 0-.906.408-1.156 1.036l-.688 1.977c-.219.596.448 1.004 1 1.004h7.578s.937-.047 1.103-.608c.192-.648.415-1.624.463-1.796.074-.264.388-.53.856-.53h8.578c.5 0 .746.252.811.565.042.204.312 1.141.438 1.782.111.571 1.221.586 1.221.586h6.594c.551 0 1.217-.47.998-1.004z",
      fill: "#AEBBC1"
    })), _v16 || (_v16 = _v21.createElement("path", {
      d: "M22.375 27.113h-7.781c-.375 0-.538-.343-.484-.675.054-.331.359-1.793.383-1.963.023-.171.274-.375.524-.375h7.015c.297 0 .49.163.55.489.059.327.302 1.64.32 1.94.02.302-.168.584-.527.584z",
      fill: "#9AAAB4"
    })));
  };
  var _v221 = _v0.i(0),
    _v222 = _v0.i(0);
  function _v223({
    id: _v0 = (0, _v65.createLiveDomName)("share-screen-button"),
    isDisabled: _v1 = !1,
    localMediaContext: {
      isMediaAllowed: _v2,
      screen: _v3,
      mediaActions: _v4
    } = (0, _v28.useManager)(_v183.LocalMediaManager),
    roomScreenShareContext: {
      activeScreenShareId: _v5,
      isCurrentlyAllowed: _v6,
      roomScreenShareActions: _v7
    } = (0, _v28.useManager)(_v180.RoomScreenShareManager),
    remoteMediaContext: {
      roomMedia: _v8
    } = (0, _v28.useManager)(_v184.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0])
  }) {
    let _v9 = (0, _v28.useScope)(),
      {
        trackLiveStreamToolbarActionClicked: _v10
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v11 = (0, _v221.useRoomScreenShare)(_v8),
      _v12 = !!(!_v2 || _v1),
      _v13 = (0, _v21.useCallback)(() => {
        let _v0 = !!(String(_v5).startsWith(_v38.EAgoraConnectionType.GUEST_SCREEN) && _v5 === _v11?.uid);
        if (_v3.track) return _v7.stopCurrentSharing();
        if (_v0) {
          let _v0 = {
            type: _v162.EConfirmationType.SCREEN_SHARE_OVERTAKE,
            body: (0, _v17.jsxs)(_v17.Fragment, {
              children: [(0, _v17.jsx)(_v220, {}), _v66.translations.takeOverGuestScreenShare]
            }),
            onConfirm: () => {
              _v7.stopCurrentSharing(), _v4.startScreenSharing().then(() => {
                _v10({
                  liveStreamToolbarAction: "share_screen"
                }), (0, _v222.trackOverrideScreenshare)();
              });
            }
          };
          _v9.emitSignal({
            type: _v51.ELiveSignal.CONFIRMATION_NOTIFICATION,
            data: _v0
          });
        } else _v4.startScreenSharing().then(() => {
          _v10({
            liveStreamToolbarAction: "share_screen"
          }), (0, _v222.trackStartScreenshare)();
        });
      }, [_v5, _v11?.uid, _v3.track, _v7, _v9, _v4, _v10]),
      _v14 = !!(_v6 && _v3.track),
      _v15 = _v12 ? null : _v14 ? _v66.translations.stopSharing : _v66.translations.shareScreen;
    return (0, _v17.jsx)(_v214.BokehTooltip, {
      label: _v15,
      shouldWrapChildren: !1,
      children: (0, _v17.jsx)(_v213.IconButton, {
        id: (0, _v65.createLiveDomName)(_v0, "screen-button"),
        "aria-label": _v66.translations.exitFullscreen,
        variant: _v14 ? "primary" : "secondary",
        alignSelf: "center",
        icon: (0, _v17.jsx)(_v218.ScreenShare, {}),
        isDisabled: _v12,
        isLoading: _v3.isLoading,
        onClick: _v13
      })
    });
  }
  let _v224 = (0, _v21.lazy)(() => _v0.A(0).then(_v0 => ({
      default: _v0.Teleprompter
    }))),
    _v225 = (0, _v21.memo)(({
      id: _v0 = (0, _v208.createLiveDomName)("broadcaster-media-controls"),
      className: _v1 = (0, _v208.createLiveDomName)("broadcaster-media-controls"),
      localMediaContext: {
        isMediaAllowed: _v2,
        isBrowserPrompted: _v3,
        permission: _v4,
        audio: _v5,
        video: _v6,
        playbackDeviceId: _v7,
        mediaActions: _v8,
        videoDevices: _v9,
        audioDevices: _v10,
        playbackDevices: _v11,
        videoBackgroundProcessor: _v12
      } = (0, _v200.useManager)(_v211.LocalMediaManager),
      composerSettingsContext: {
        isLocalMirrored: _v13,
        composerSettingsActions: _v14
      } = (0, _v200.useManager)(_v210.ComposerSettingsManager, ({
        isLocalMirrored: _v0,
        composerSettingsActions: _v1,
        audioMode: _v2
      }) => [_v0, _v1, _v2]),
      composerSessionStatusContext: {
        liveComposerStatusGetters: _v15
      } = (0, _v200.useManager)(_v209.ComposerSessionStatusManager)
    }) => {
      let {
          isOpen: _v16,
          onOpen: _v17,
          onClose: _v18
        } = (0, _v201.useDisclosure)(),
        {
          initialState: {
            sessionApplicationType: _v19,
            sessionId: _v20,
            sessionType: _v21
          }
        } = (0, _v80.useLiveGlobals)(),
        _v22 = (0, _v119.useIsLiveDemoSubscription)(),
        _v23 = !_v15.isEnded(),
        _v24 = _v3 || !_v2 || !_v4.isAllowed;
      return (0, _v17.jsxs)(_v95.Flex, {
        id: _v0,
        className: _v1,
        borderRadius: (0, _v61.rem)(8),
        padding: (0, _v61.rem)(4),
        marginRight: (0, _v61.rem)(8),
        height: (0, _v61.rem)(48),
        minWidth: (0, _v61.rem)(180),
        children: [(0, _v17.jsxs)(_v95.Flex, {
          gap: (0, _v61.rem)(4),
          children: [(0, _v17.jsx)(_v204.AudioControlButton, {
            id: (0, _v208.createLiveDomName)(_v0, "audio-control-button"),
            className: (0, _v208.createLiveDomName)(_v1, "audio-control-button"),
            isDisabled: _v24,
            place: _v39.EComposerApplicationType.BROADCASTER,
            onSettingsClicked: _v17
          }), (0, _v17.jsx)(_v206.VideoControlButton, {
            id: (0, _v208.createLiveDomName)(_v0, "video-control-button"),
            className: (0, _v208.createLiveDomName)(_v1, "video-control-button"),
            isDisabled: _v24,
            place: _v39.EComposerApplicationType.BROADCASTER,
            onSettingsClicked: _v17
          }), (0, _v17.jsx)(_v217, {
            id: _v0
          }), (0, _v17.jsx)(_v223, {
            id: _v0,
            isDisabled: _v24
          }), _v23 ? (0, _v17.jsx)(_v18.LiveErrorBoundary, {
            component: "TeleprompterButton",
            children: (0, _v17.jsx)(_v207.TeleprompterButton, {
              id: _v0,
              isDemo: _v22,
              isDisabled: _v24,
              isGuest: !1
            })
          }) : null]
        }), _v23 ? (0, _v17.jsx)(_v18.LiveErrorBoundary, {
          component: "Teleprompter",
          children: (0, _v17.jsx)(_v21.Suspense, {
            children: (0, _v17.jsx)(_v224, {
              session: `${_v19}_${_v21}_${_v20}`,
              client: "live",
              audioTrack: _v5.track?.getMediaStreamTrack(),
              getClientAnalyticContext: () => (0, _v212.newLiveCtx)({
                live_feature: "teleprompter",
                is_guest_speaker: !1
              })
            })
          })
        }) : null, (0, _v17.jsxs)(_v58.Modal, {
          scrollBehavior: "outside",
          isOpen: _v16,
          onClose: _v18,
          returnFocusOnClose: !1,
          children: [(0, _v17.jsx)(_v60.ModalOverlay, {}), (0, _v17.jsxs)(_v59.ModalContent, {
            borderRadius: (0, _v61.rem)(8),
            children: [(0, _v17.jsx)(_v202.ModalHeader, {
              children: (0, _v17.jsx)(_v137.Header, {
                fontWeight: "bold",
                size: "md",
                children: _v66.translations.cameraBackground
              })
            }), (0, _v17.jsx)(_v108.ModalCloseButton, {}), (0, _v17.jsx)(_v203.ModalBody, {
              borderRadius: (0, _v61.rem)(8),
              children: (0, _v17.jsx)(_v205.MediaDevicesSettingsModalContent, {
                id: (0, _v208.createLiveDomName)(_v0, "settings-modal"),
                className: (0, _v208.createLiveDomName)(_v1, "settings-modal"),
                video: _v6,
                audio: _v5,
                playbackDeviceId: _v7,
                videoDevices: _v9,
                audioDevices: _v10,
                playbackDevices: _v11,
                isMirrored: _v13,
                onAudioDeviceChanged: _v8.setAudioDevice,
                onVideoDeviceChanged: _v8.setVideoDevice,
                onPlaybackDeviceChanged: _v8.setPlaybackDevice,
                onVideoMirroringChanged: _v14.setLocalMirrored,
                onToggleVideoBlur: _v8.toggleVideoBlur,
                isBlurAllowed: !!_v12
              })
            })]
          })]
        })]
      });
    });
  function _v226({
    id: _v0 = (0, _v65.createLiveDomName)("scene-controls"),
    className: _v1
  }) {
    return (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      width: "100%",
      height: (0, _v61.rem)(48),
      margin: `${(0, _v61.rem)(24)} 0`,
      userSelect: "none",
      children: (0, _v17.jsx)(_v225, {})
    });
  }
  var _v227 = _v28,
    _v228 = _v0.i(0),
    _v229 = _v56,
    _v230 = _v48,
    _v231 = _v96,
    _v232 = _v0.i(0),
    _v233 = _v0.i(0),
    _v234 = _v0.i(0),
    _v235 = _v0.i(0),
    _v236 = _v0.i(0),
    _v237 = _v28,
    _v238 = _v0.i(0),
    _v239 = _v56,
    _v240 = _v0.i(0),
    _v241 = _v0.i(0),
    _v242 = _v0.i(0),
    _v243 = _v0.i(0),
    _v244 = _v0.i(0);
  function _v245(_v0 = "hex") {
    (0, _v243.createBPv2EventFactory)("vimeo.select_scene_background_color", 1, () => ({
      ...(0, _v212.newWebCtx)(),
      ...(0, _v212.newActionCtx)("click"),
      ...(0, _v212.newTeamCtx)(),
      ...(0, _v212.newLiveCtx)({
        live_feature: "settings"
      }),
      ...(0, _v212.newProductAnalyticsCtx)({
        product: "events",
        feature: "settings",
        location: "body",
        element: "button",
        is_user_facing_data: !1,
        entity_type: "video"
      })
    }), {
      selection_format: _v0
    })();
  }
  let _v246 = (0, _v243.createLiveSchemaEventFactory)("vimeo.simple_live_scenes", 9, () => ({
    ..._v242.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    sceneAddedLocation: null,
    sceneMode: null,
    sceneLayout: null,
    backgroundColor: null
  }));
  function _v247(_v0) {
    return _v246("add_scene", _v0);
  }
  var _v248 = _v0.i(0);
  (0, _v111.translate)({
    singular: "Black",
    dictionary: {
      es: {
        singular: "Negro"
      },
      "de-DE": {
        singular: "Schwarz"
      },
      "fr-FR": {
        singular: "Noir"
      },
      "ko-KR": {
        singular: "검은색"
      },
      "pt-BR": {
        singular: "Preto"
      },
      "zh-CN": {
        singular: "黑色"
      }
    }
  });
  let _v249 = (0, _v111.translate)({
      singular: "Black (default)",
      dictionary: {
        es: {
          singular: "Negro (predeterminado)"
        },
        "de-DE": {
          singular: "Schwarz (Standard)"
        },
        "fr-FR": {
          singular: "Noir (par défaut)"
        },
        "ja-JP": {
          singular: "ブラック（デフォルト）"
        },
        "ko-KR": {
          singular: "검정(기본)"
        },
        "pt-BR": {
          singular: "Preto (padrão)"
        },
        "zh-CN": {
          singular: "黑色（默认）"
        }
      }
    }),
    _v250 = (0, _v111.translate)({
      singular: "Blue",
      dictionary: {
        es: {
          singular: "Azul"
        },
        "de-DE": {
          singular: "Blau"
        },
        "fr-FR": {
          singular: "Bleu"
        },
        "ja-JP": {
          singular: "ブルー"
        },
        "ko-KR": {
          singular: "파란색"
        },
        "pt-BR": {
          singular: "Azul"
        },
        "zh-CN": {
          singular: "蓝色"
        }
      }
    }),
    _v251 = (0, _v111.translate)({
      singular: "Dandelion white",
      dictionary: {
        es: {
          singular: "Diente de león blanco"
        },
        "de-DE": {
          singular: "Dandelion White"
        },
        "fr-FR": {
          singular: "Pissenlit blanc"
        },
        "ja-JP": {
          singular: "ダンデライオンホワイト"
        },
        "ko-KR": {
          singular: "댄델리온 화이트"
        },
        "pt-BR": {
          singular: "Branco dente-de-leão"
        },
        "zh-CN": {
          singular: "蒲公英白"
        }
      }
    }),
    _v252 = (0, _v111.translate)({
      singular: "Dark gray",
      dictionary: {
        es: {
          singular: "Gris oscuro"
        },
        "de-DE": {
          singular: "Dunkelgrau"
        },
        "fr-FR": {
          singular: "Gris foncé"
        },
        "ja-JP": {
          singular: "ダークグレー"
        },
        "ko-KR": {
          singular: "다크 그레이"
        },
        "pt-BR": {
          singular: "Cinza escuro"
        },
        "zh-CN": {
          singular: "深灰色"
        }
      }
    }),
    _v253 = (0, _v111.translate)({
      singular: "Dawn blue",
      dictionary: {
        es: {
          singular: "Azul amanecer"
        },
        "de-DE": {
          singular: "Dawn Blue"
        },
        "fr-FR": {
          singular: "Bleu aube"
        },
        "ja-JP": {
          singular: "ドーンブルー"
        },
        "ko-KR": {
          singular: "던 블루"
        },
        "pt-BR": {
          singular: "Azul alvorecer"
        },
        "zh-CN": {
          singular: "黎明蓝"
        }
      }
    }),
    _v254 = (0, _v111.translate)({
      singular: "Gray",
      dictionary: {
        es: {
          singular: "Gris"
        },
        "de-DE": {
          singular: "Grau"
        },
        "fr-FR": {
          singular: "Gris"
        },
        "ja-JP": {
          singular: "グレー"
        },
        "ko-KR": {
          singular: "그레이"
        },
        "pt-BR": {
          singular: "Cinza"
        },
        "zh-CN": {
          singular: "灰色"
        }
      }
    }),
    _v255 = (0, _v111.translate)({
      singular: "Green",
      dictionary: {
        es: {
          singular: "Verde"
        },
        "de-DE": {
          singular: "Grün"
        },
        "fr-FR": {
          singular: "Vert"
        },
        "ja-JP": {
          singular: "緑"
        },
        "ko-KR": {
          singular: "녹색"
        },
        "pt-BR": {
          singular: "Verde"
        },
        "zh-CN": {
          singular: "绿色"
        }
      }
    }),
    _v256 = (0, _v111.translate)({
      singular: "Light gray",
      dictionary: {
        es: {
          singular: "Gris claro"
        },
        "de-DE": {
          singular: "Hellgrau"
        },
        "fr-FR": {
          singular: "Gris clair"
        },
        "ja-JP": {
          singular: "ライトグレー"
        },
        "ko-KR": {
          singular: "라이트 그레이"
        },
        "pt-BR": {
          singular: "Cinza claro"
        },
        "zh-CN": {
          singular: "浅灰色"
        }
      }
    }),
    _v257 = (0, _v111.translate)({
      singular: "Midnight black",
      dictionary: {
        es: {
          singular: "Negro medianoche"
        },
        "de-DE": {
          singular: "Mitternachtsschwarz"
        },
        "fr-FR": {
          singular: "Noir minuit"
        },
        "ja-JP": {
          singular: "ミッドナイトブラック"
        },
        "ko-KR": {
          singular: "미드나잇 블랙"
        },
        "pt-BR": {
          singular: "Preto meia-noite"
        },
        "zh-CN": {
          singular: "午夜黑"
        }
      }
    }),
    _v258 = (0, _v111.translate)({
      singular: "Moonlight silver",
      dictionary: {
        es: {
          singular: "Plata de luz de luna"
        },
        "de-DE": {
          singular: "Moonlight Silver"
        },
        "fr-FR": {
          singular: "Moonlight Silver"
        },
        "ja-JP": {
          singular: "ムーンライトシルバー"
        },
        "ko-KR": {
          singular: "문라이트 실버"
        },
        "pt-BR": {
          singular: "Prata luar"
        },
        "zh-CN": {
          singular: "月光银"
        }
      }
    }),
    _v259 = (0, _v111.translate)({
      singular: "Ocean blue",
      dictionary: {
        es: {
          singular: "Azul océano"
        },
        "de-DE": {
          singular: "Ozeanblau"
        },
        "fr-FR": {
          singular: "Bleu océan"
        },
        "ja-JP": {
          singular: "オーシャンブルー"
        },
        "ko-KR": {
          singular: "오션 블루"
        },
        "pt-BR": {
          singular: "Azul oceano"
        },
        "zh-CN": {
          singular: "海洋蓝"
        }
      }
    }),
    _v260 = (0, _v111.translate)({
      singular: "Purple",
      dictionary: {
        es: {
          singular: "Púrpura"
        },
        "de-DE": {
          singular: "Violett"
        },
        "fr-FR": {
          singular: "Violet"
        },
        "ja-JP": {
          singular: "パープル"
        },
        "ko-KR": {
          singular: "퍼플"
        },
        "pt-BR": {
          singular: "Roxo"
        },
        "zh-CN": {
          singular: "紫色"
        }
      }
    }),
    _v261 = (0, _v111.translate)({
      singular: "Red",
      dictionary: {
        es: {
          singular: "RED"
        },
        "de-DE": {
          singular: "RED"
        },
        "fr-FR": {
          singular: "Rouge"
        },
        "ja-JP": {
          singular: "赤"
        },
        "ko-KR": {
          singular: "빨강"
        },
        "pt-BR": {
          singular: "Vermelho"
        },
        "zh-CN": {
          singular: "红色"
        }
      }
    }),
    _v262 = (0, _v111.translate)({
      singular: "Sky blue",
      dictionary: {
        es: {
          singular: "Azul cielo"
        },
        "de-DE": {
          singular: "Himmelblau"
        },
        "fr-FR": {
          singular: "Bleu ciel"
        },
        "ja-JP": {
          singular: "スカイブルー"
        },
        "ko-KR": {
          singular: "스카이 블루"
        },
        "pt-BR": {
          singular: "Azul céu"
        },
        "zh-CN": {
          singular: "天空蓝"
        }
      }
    }),
    _v263 = (0, _v111.translate)({
      singular: "Spaceship gray",
      dictionary: {
        es: {
          singular: "Gris nave espacial"
        },
        "de-DE": {
          singular: "Spaceship Gray"
        },
        "fr-FR": {
          singular: "Gris vaisseau spatial"
        },
        "ja-JP": {
          singular: "スペースシップグレー"
        },
        "ko-KR": {
          singular: "스페이스쉽 그레이"
        },
        "pt-BR": {
          singular: "Cinza espaçonave"
        },
        "zh-CN": {
          singular: "太空船灰"
        }
      }
    }),
    _v264 = (0, _v111.translate)({
      singular: "Sunset orange",
      dictionary: {
        es: {
          singular: "Naranja atardecer"
        },
        "de-DE": {
          singular: "Sunset Orange"
        },
        "fr-FR": {
          singular: "Orange soleil couchant"
        },
        "ja-JP": {
          singular: "サンセットオレンジ"
        },
        "ko-KR": {
          singular: "선셋 오렌지"
        },
        "pt-BR": {
          singular: "Laranja pôr-do-sol"
        },
        "zh-CN": {
          singular: "落日橙"
        }
      }
    }),
    _v265 = (0, _v111.translate)({
      singular: "Turquoise blue",
      dictionary: {
        es: {
          singular: "Azul turquesa"
        },
        "de-DE": {
          singular: "Türkisblau"
        },
        "fr-FR": {
          singular: "Bleu turquoise"
        },
        "ja-JP": {
          singular: "ターコイズブルー"
        },
        "ko-KR": {
          singular: "터콰이즈 블루"
        },
        "pt-BR": {
          singular: "Azul turquesa"
        },
        "zh-CN": {
          singular: "绿松石蓝"
        }
      }
    }),
    _v266 = (0, _v111.translate)({
      singular: "Twilight pink",
      dictionary: {
        es: {
          singular: "Rosa crepuscular"
        },
        "de-DE": {
          singular: "Twilight Pink"
        },
        "fr-FR": {
          singular: "Rose crépuscule"
        },
        "ja-JP": {
          singular: "トワイライトピンク"
        },
        "ko-KR": {
          singular: "트와일라잇 핑크"
        },
        "pt-BR": {
          singular: "Rosa crepuscular"
        },
        "zh-CN": {
          singular: "暮光粉"
        }
      }
    }),
    _v267 = [{
      name: _v249,
      background: "#141414"
    }, {
      name: _v252,
      background: "#252D35"
    }, {
      name: _v254,
      background: "#68727C"
    }, {
      name: _v256,
      background: "#CBD5E0"
    }, {
      name: (0, _v111.translate)({
        singular: "White",
        dictionary: {
          es: {
            singular: "Blanco"
          },
          "de-DE": {
            singular: "Weiß"
          },
          "fr-FR": {
            singular: "Blanc"
          },
          "ko-KR": {
            singular: "흰색"
          },
          "pt-BR": {
            singular: "Branco"
          },
          "zh-CN": {
            singular: "白色"
          }
        }
      }),
      background: "#F4F6F8"
    }, {
      name: _v250,
      background: "#17D5FF"
    }, {
      name: _v260,
      background: "#8A5EE8"
    }, {
      name: _v261,
      background: "#F56565"
    }, {
      name: (0, _v111.translate)({
        singular: "Yellow",
        dictionary: {
          es: {
            singular: "Amarillo"
          },
          "de-DE": {
            singular: "Gelb"
          },
          "fr-FR": {
            singular: "Jaune"
          },
          "ja-JP": {
            singular: "黄色"
          },
          "ko-KR": {
            singular: "노랑"
          },
          "pt-BR": {
            singular: "Amarelo"
          },
          "zh-CN": {
            singular: "黄色"
          }
        }
      }),
      background: "#ECC94B"
    }, {
      name: _v255,
      background: "#48BB78"
    }],
    _v268 = [{
      name: _v257,
      background: "linear-gradient(252deg, #181E24 0%, #3D4751 100%)"
    }, {
      name: _v263,
      background: "linear-gradient(252deg, #68727C 0%, #97A1AD 100%)"
    }, {
      name: _v258,
      background: "linear-gradient(252deg, #CBD5E0 0%, #E4E9EF 100%)"
    }, {
      name: _v251,
      background: "linear-gradient(252deg, #FFC2A3 0%, #C3F4FF 100%)"
    }, {
      name: _v262,
      background: "linear-gradient(252deg, #4299E1 0%, #FEEBCB 100%)"
    }, {
      name: _v259,
      background: "linear-gradient(252deg, #0088A6 0%, #743ED9 100%)"
    }, {
      name: _v266,
      background: "linear-gradient(252deg, #8A5EE8 0%, #FEB2B2 100%)"
    }, {
      name: _v265,
      background: "linear-gradient(252deg, #68D391 0%, #66E3FF 100%)"
    }, {
      name: _v253,
      background: "linear-gradient(252deg, #17D5FF 0%, #F6AD55 100%)"
    }, {
      name: _v264,
      background: "linear-gradient(252deg, #F56565 0%, #F6AD55 93%, #FFA575 100%)"
    }];
  function _v269(_v0) {
    if (_v0) {
      if (_v0.includes("gradient")) return "gradient";else if (_v267.find(_v0 => _v0.background === _v0)) return "solid";else if (_v0.startsWith("#")) return "hex";
    }
    return null;
  }
  function _v270({
    name: _v0,
    background: _v1,
    isSelected: _v2,
    onClick: _v3
  }) {
    return (0, _v17.jsx)(_v232.Tooltip, {
      label: _v0,
      children: (0, _v17.jsx)(_v213.IconButton, {
        "aria-label": "color-picker",
        isActive: _v2,
        size: "sm",
        width: "sm",
        variant: "tertiary",
        _active: {
          outlineColor: "focus-alt",
          outlineWidth: "2px",
          outlineOffset: "2px"
        },
        _hover: {
          background: _v1,
          outlineColor: "input-stroke-hover",
          outlineWidth: "2px",
          outlineOffset: "2px"
        },
        borderWidth: "1px",
        borderColor: "check-radio-stroke",
        borderRadius: "round !important",
        background: `${_v1} !important`,
        sx: {
          backgroundOrigin: "border-box !important"
        },
        onClick: () => _v3(_v1)
      })
    });
  }
  var _v271 = _v0.i(0),
    _v272 = _v0.i(0),
    _v273 = _v0.i(0),
    _v274 = _v0.i(0),
    _v275 = _v0.i(0),
    _v276 = _v0.i(0);
  function _v277({
    className: _v0 = (0, _v96.createDomName)("broadcaster-scene-background-color-picker"),
    isSelected: _v1,
    value: _v2,
    onChange: _v3
  }) {
    let _v4 = (0, _v21.useCallback)(_v0 => {
      _v3((0, _v272.toHex)(_v0.valueAsString));
    }, [_v3]);
    return (0, _v17.jsxs)(_v274.ColorPickerRoot, {
      className: (0, _v96.createDomName)(_v0, "controls"),
      defaultValue: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(_v2) ? (0, _v276.parseColor)(_v2) : void 0,
      onValueChange: _v4,
      children: [(0, _v17.jsx)(_v95.Flex, {
        width: "100%",
        alignItems: "center",
        gap: (0, _v61.rem)(16),
        padding: (0, _v61.rem)(7),
        children: (0, _v17.jsx)(_v275.ColorPickerControl, {
          children: (0, _v17.jsxs)(_v95.Flex, {
            width: "100%",
            alignItems: "center",
            gap: (0, _v61.rem)(16),
            children: [(0, _v17.jsx)(_v274.ColorPickerTrigger, {
              children: (0, _v17.jsx)(_v273.HStack, {
                gap: (0, _v61.rem)(16),
                children: (0, _v17.jsx)(_v214.BokehTooltip, {
                  label: _v190.T_CUSTOM,
                  children: (0, _v17.jsx)(_v270, {
                    isSelected: _v1,
                    background: _v2,
                    onClick: () => _v3(_v2)
                  })
                })
              })
            }), (0, _v17.jsx)(_v274.ColorPickerChannelInput, {
              className: (0, _v96.createDomName)(_v0, "channel-input"),
              channel: "hex"
            })]
          })
        })
      }), (0, _v17.jsx)(_v274.ColorPickerPositioner, {
        className: (0, _v96.createDomName)(_v0, "positioner"),
        children: (0, _v17.jsxs)(_v278, {
          className: _v0,
          children: [(0, _v17.jsx)(_v274.ColorPickerArea, {}), (0, _v17.jsx)(_v95.Flex, {
            className: (0, _v96.createDomName)(_v0, "sliders"),
            direction: "column",
            gap: (0, _v61.rem)(16),
            children: (0, _v17.jsxs)(_v274.ColorPickerChannelSlider, {
              channel: "hue",
              children: [(0, _v17.jsx)(_v274.ColorPickerChannelSliderTrack, {}), (0, _v17.jsx)(_v274.ColorPickerChannelSliderThumb, {})]
            })
          })]
        })
      })]
    });
  }
  var _v278 = (0, _v271.default)(_v274.ColorPickerContent).withConfig({
    displayName: "BroadcasterSceneBackgroundColorPicker___StyledColorPickerContent",
    componentId: "sc-e0511d3b-0"
  })({
    height: "auto !important"
  });
  let _v279 = (0, _v21.forwardRef)(({
    sceneContext: {
      activeScene: _v0,
      sceneActions: _v1
    } = (0, _v237.useManager)(_v239.SceneManager, ({
      activeScene: _v0
    }) => [_v0])
  }, _v2) => {
    let _v3 = (0, _v21.useMemo)(() => !!(_v0?.meta?.background?.startsWith("#") && !_v267.some(_v0 => _v0.background === _v0.meta?.background)), [_v0?.meta?.background]),
      _v4 = (0, _v21.useMemo)(() => _v3 ? _v0?.meta?.background || _v136.NEUTRAL_PREVIEW_CANVAS_BACKGROUND : (0, _v248.getLocalStorageConfigItem)(_v240.localStorageConfig.GRAPHICS.BACKGROUND_LAST_COLOR, _v136.NEUTRAL_PREVIEW_CANVAS_BACKGROUND), [_v0?.meta?.background, _v3]),
      _v5 = (0, _v241.useThrottledCallback)(_v245, 0, []),
      _v6 = (0, _v21.useCallback)(_v0 => {
        _v0 && (_v1.setSceneBackground(_v0.id, _v0), _v245(_v269(_v0)));
      }, [_v0, _v1]),
      _v7 = (0, _v21.useCallback)(_v0 => {
        _v0 && ((0, _v248.setLocalStorageItem)(_v240.localStorageConfig.GRAPHICS.BACKGROUND_LAST_COLOR, _v0), _v1.setSceneBackground(_v0.id, _v0), _v5());
      }, [_v0, _v1, _v5]);
    return _v0 ? (0, _v17.jsxs)(_v95.Flex, {
      ref: _v2,
      gap: "sm",
      direction: "column",
      overflow: "hidden",
      maxWidth: (0, _v61.rem)(232),
      padding: (0, _v61.rem)(4),
      children: [(0, _v17.jsxs)(_v106.Box, {
        children: [(0, _v17.jsx)(_v109.Text, {
          variant: "heading-xs",
          marginBottom: (0, _v61.rem)(4),
          children: _v190.T_SOLID
        }), (0, _v17.jsx)(_v238.Grid, {
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: (0, _v61.rem)(12),
          padding: (0, _v61.rem)(4),
          overflowY: "auto",
          children: _v267.map(_v0 => (0, _v17.jsx)(_v270, {
            ..._v0,
            isSelected: _v0.meta?.background === _v0.background,
            onClick: _v6
          }, _v0.name))
        })]
      }), (0, _v17.jsxs)(_v106.Box, {
        children: [(0, _v17.jsx)(_v109.Text, {
          variant: "heading-xs",
          marginBottom: (0, _v61.rem)(4),
          children: _v190.T_GRADIENT
        }), (0, _v17.jsx)(_v238.Grid, {
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: (0, _v61.rem)(12),
          padding: (0, _v61.rem)(4),
          overflowY: "auto",
          children: _v268.map(_v0 => (0, _v17.jsx)(_v270, {
            ..._v0,
            isSelected: _v0.meta?.background === _v0.background,
            onClick: _v6
          }, _v0.name))
        })]
      }), (0, _v17.jsx)(_v228.Divider, {
        borderColor: "stroke"
      }), (0, _v17.jsx)(_v106.Box, {
        children: (0, _v17.jsx)(_v277, {
          isSelected: _v3,
          value: _v4,
          onChange: _v7
        })
      })]
    }) : null;
  });
  function _v280({
    sceneContext: {
      activeScene: _v0
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      activeScene: _v0
    }) => [_v0])
  }) {
    let {
        triggerRef: _v1,
        contentRef: _v2,
        isOpen: _v3,
        onTogglePopover: _v4
      } = (0, _v236.useControlledPopover)(),
      _v5 = (0, _v233.useColorModeValue)("none", "#BEE3F829");
    return (0, _v17.jsx)(_v235.BokehPopover, {
      inPortal: !0,
      isOpen: _v3,
      contentProps: {
        background: "fill-blur",
        borderRadius: "md"
      },
      triggerContent: (0, _v17.jsx)(_v106.Box, {
        onClick: _v4,
        ref: _v1,
        children: (0, _v17.jsx)(_v232.Tooltip, {
          label: _v190.T_BACKGROUND_COLOR,
          children: (0, _v17.jsx)(_v213.IconButton, {
            "aria-label": _v190.T_BACKGROUND_COLOR,
            icon: (0, _v17.jsxs)(_v95.Flex, {
              alignItems: "center",
              justifyContent: "center",
              flexDir: "column",
              gap: (0, _v61.rem)(2),
              children: [(0, _v17.jsx)(_v234.FillPaintBucket, {}), (0, _v17.jsx)(_v106.Box, {
                width: (0, _v61.rem)(17),
                height: (0, _v61.rem)(3),
                background: _v0?.meta?.background || "#000000",
                borderRadius: (0, _v61.rem)(2),
                border: `${(0, _v61.rem)(1)} solid ${_v5}`
              })]
            }),
            variant: "tertiary",
            size: "sm"
          })
        })
      }),
      content: (0, _v17.jsx)(_v279, {
        ref: _v2
      })
    });
  }
  var _v281 = _v0.i(0),
    _v282 = _v0.i(0),
    _v283 = _v0.i(0);
  function _v284({
    id: _v0 = (0, _v65.createLiveDomName)("slides-controls"),
    className: _v1 = (0, _v65.createLiveDomName)("slides-controls"),
    graphicsContext: {
      slidesList: _v2
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      slidesList: _v0
    }) => [_v0]),
    sceneContext: {
      activeScene: _v3,
      sceneActions: _v4
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      activeScene: _v0
    }) => [_v0])
  }) {
    let _v5 = (0, _v283.useGraphicFromScene)(_v3, _v88.EGraphicsDescriptorType.SLIDES);
    return _v3 ? (0, _v17.jsxs)(_v95.Flex, {
      padding: `0 ${(0, _v61.rem)(8)}`,
      gap: (0, _v61.rem)(8),
      alignItems: "center",
      children: [(0, _v17.jsx)(_v281.PresentationLine, {
        id: (0, _v65.createLiveDomName)(_v0, "icon"),
        className: (0, _v65.createLiveDomName)(_v1, "icon"),
        boxSize: (0, _v61.rem)(24)
      }), (0, _v17.jsx)(_v282.SlidesControlPanel, {
        sceneId: _v3?.id,
        descriptor: _v5,
        slides: _v2,
        onSetSceneSlideIndex: _v4.setSceneSlideIndex
      })]
    }) : null;
  }
  var _v285 = _v0.i(0),
    _v286 = _v0.i(0),
    _v287 = _v0.i(0),
    _v288 = _v0.i(0),
    _v289 = _v0.i(0),
    _v290 = _v65;
  let _v291 = (0, _v21.memo)(({
    id: _v0 = (0, _v290.createLiveDomName)("play-button"),
    className: _v1 = (0, _v290.createLiveDomName)("play-button"),
    isDisabled: _v2,
    isLoading: _v3,
    status: _v4,
    onToggleStatus: _v5
  }) => {
    let [_v6, _v7] = (0, _v21.useMemo)(() => {
      if (!_v4) return [null, null];
      switch (_v4) {
        case _v88.EMediaStatus.PLAY:
          return [(0, _v17.jsx)(_v289.PauseFilled, {
            id: (0, _v290.createLiveDomName)(_v0, "pause-icon"),
            className: (0, _v290.createLiveDomName)(_v1, "pause-icon")
          }, 1), _v66.translations.pauseVideo];
        case _v88.EMediaStatus.PAUSE:
        case _v88.EMediaStatus.STOP:
        case _v88.EMediaStatus.RESTART:
        default:
          return [(0, _v17.jsx)(_v288.PlayFilled, {
            id: (0, _v290.createLiveDomName)(_v0, "play-icon"),
            className: (0, _v290.createLiveDomName)(_v1, "play-icon")
          }, 2), _v66.translations.playVideo];
      }
    }, [_v4, _v0, _v1]);
    return (0, _v17.jsx)(_v214.BokehTooltip, {
      label: _v2 ? "" : _v7,
      children: (0, _v17.jsx)(_v213.IconButton, {
        id: _v0,
        className: _v1,
        "aria-label": _v7 ?? "",
        isDisabled: _v2,
        isLoading: _v3,
        size: "sm",
        icon: _v6 ?? void 0,
        variant: "tertiary",
        onClick: _v5
      })
    });
  });
  var _v292 = _v0.i(0),
    _v293 = _v0.i(0),
    _v294 = _v0.i(0),
    _v295 = _v65,
    _v296 = _v0.i(0),
    _v297 = _v0.i(0);
  let _v298 = (0, _v21.memo)(({
    id: _v0 = (0, _v295.createLiveDomName)("video-seek"),
    className: _v1 = (0, _v295.createLiveDomName)("video-seek"),
    isDisabled: _v2,
    isLoading: _v3,
    status: _v4,
    startedAt: _v5,
    duration: _v6,
    offset: _v7,
    thumbnailSeekingPeriod: _v8 = 500,
    onPlayMedia: _v9,
    onPauseMedia: _v10,
    onOffsetChange: _v11,
    onSeekStart: _v12,
    onSeekStop: _v13
  }) => {
    let _v14 = (0, _v287.useLogger)("VS"),
      [_v15, _v16] = (0, _v21.useState)(null),
      [_v17, _v18] = (0, _v21.useState)(0),
      [_v19, _v20] = (0, _v21.useState)(!1),
      [_v21, _v22] = (0, _v21.useState)(!1),
      _v23 = !_v19 && _v4 === _v88.EMediaStatus.PLAY,
      {
        progressFraction: _v24,
        playingTime: _v25,
        totalDuration: _v26
      } = (0, _v296.useSubscriptionToRemotePlaybackState)({
        startedAt: _v5,
        duration: _v6,
        isActive: _v23,
        offset: _v19 ? _v17 * _v6 : _v7,
        checkPeriod: (0, _v286.calculateMediaSeekCheckIntervalBasedOnDuration)(_v6),
        onSeekPositionChanged: _v11
      }),
      _v27 = _v26 > 0,
      _v28 = (0, _v21.useMemo)(() => (0, _v297.formatDuration)(_v26, _v27), [_v27, _v26]),
      _v29 = Math.round(_v25 / 0),
      _v30 = Math.round(_v6 * _v24 / 0),
      _v31 = (0, _v84.inline)(() => _v19 ? (0, _v297.formatDuration)(0 * _v30, _v27) : (0, _v297.formatDuration)(0 * _v29, _v27)),
      _v32 = (0, _v241.useThrottledCallback)(_v0 => {
        _v14.info("Mid-pause seeking:", _v0);
        let {
          seek: _v1
        } = (0, _v286.getCurrentRemotePlaybackState)(_v26, null, _v0);
        return _v10(_v1);
      }, _v8, [_v10, _v26], {
        leading: !0,
        trailing: !1
      }),
      _v33 = (0, _v21.useCallback)(_v0 => {
        _v18(_v0), _v32(_v0 * _v6);
      }, [_v6, _v32]),
      _v34 = (0, _v21.useCallback)(_v0 => {
        let _v1 = Math.floor(_v0 * _v6);
        _v20(!0), _v16(_v4), _v14.info("Starting seeking:", _v4, _v1), _v12 && _v12();
      }, [_v6, _v14, _v12, _v4]),
      _v35 = (0, _v21.useCallback)(async _v0 => {
        _v32.cancel();
        let _v1 = Math.floor(_v0 * _v6);
        _v14.info("Stop seeking:", _v15, _v1), _v15 === _v88.EMediaStatus.PLAY ? (_v14.info("Play media on seek end:", _v15, _v1), await _v9(_v1), (0, _v128.trackPlayVideoFromCustomPlace)()) : (_v14.info("Pause media on seek end:", _v15, _v1), await _v10(_v1)), _v20(!1), _v16(null), _v13 && _v13();
      }, [_v32, _v6, _v14, _v15, _v9, _v10, _v13]),
      _v36 = (0, _v21.useCallback)(() => {
        _v22(!0);
      }, []),
      _v37 = (0, _v21.useCallback)(() => {
        _v22(!1);
      }, []);
    return (0, _v21.useEffect)(() => {
      !_v19 && _v7 && _v11(_v7);
    }, [_v19, _v7, _v11]), (0, _v17.jsxs)(_v138.Center, {
      id: _v0,
      className: _v1,
      flex: 1,
      gap: (0, _v61.rem)(8),
      children: [(0, _v17.jsxs)(_v293.Slider, {
        id: (0, _v295.createLiveDomName)(_v0, "slider"),
        className: (0, _v295.createLiveDomName)(_v1, "slider"),
        isDisabled: _v2 || _v3,
        value: _v24,
        focusThumbOnChange: !1,
        step: 1e-4,
        min: 0,
        max: 1,
        onChange: _v33,
        onChangeStart: _v34,
        onChangeEnd: _v35,
        children: [(0, _v17.jsx)(_v214.BokehTooltip, {
          shouldWrapChildren: !1,
          inPopover: !0,
          placement: "top",
          isOpen: !_v2 && (_v19 || _v21),
          label: _v31,
          children: (0, _v17.jsx)(_v294.SliderThumb, {
            onBlur: _v37,
            onMouseOver: _v36,
            onMouseOut: _v37
          })
        }), (0, _v17.jsx)(_v294.SliderTrack, {
          children: (0, _v17.jsx)(_v294.SliderFilledTrack, {})
        })]
      }), (0, _v17.jsxs)(_v138.Center, {
        whiteSpace: "nowrap",
        id: (0, _v295.createLiveDomName)(_v0, "duration"),
        className: (0, _v295.createLiveDomName)(_v1, "duration"),
        sx: {
          [`@container controls (max-width: ${(0, _v61.rem)(440)})`]: {
            display: "none"
          }
        },
        children: [(0, _v17.jsx)(_v292.Paragraph, {
          textAlign: "end",
          size: "sm",
          minWidth: _v27 ? (0, _v61.rem)(55) : (0, _v61.rem)(35),
          children: _v31
        }), (0, _v17.jsx)(_v292.Paragraph, {
          size: "sm",
          marginX: (0, _v61.rem)(4),
          children: "/"
        }), (0, _v17.jsx)(_v292.Paragraph, {
          size: "sm",
          children: _v28
        })]
      })]
    });
  });
  var _v299 = _v0.i(0),
    _v300 = _v0.i(0),
    _v301 = _v0.i(0);
  let _v302 = {
      [_v285.EVideoTransitionState.MANUAL]: {
        title: _v66.translations.playOnceAndStop,
        icon: (0, _v17.jsx)(_v0 => (0, _v17.jsx)(_v196.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v17.jsx)("g", {
            fill: "currentColor",
            children: (0, _v17.jsx)("path", {
              d: "M4 18.179c0 .633.305 1.205.8 1.536.507.34 1.198.405 1.8.036l.034-.021 8.616-6.305c.53-.347.75-.923.75-1.425s-.22-1.077-.75-1.425L6.634 4.271 6.6 4.25a1.652 1.652 0 0 0-1.8.035c-.495.331-.8.903-.8 1.537v12.357ZM18 19a1 1 0 1 0 2 0V5a1 1 0 1 0-2 0v14Z"
            })
          })
        }), {
          maxWidth: (0, _v61.rem)(20),
          maxHeight: (0, _v61.rem)(20),
          boxSize: (0, _v61.rem)(20)
        }),
        tip: _v66.translations.showTheVideoThumbnail
      },
      [_v285.EVideoTransitionState.AUTO]: {
        title: _v66.translations.autoTransition,
        icon: (0, _v17.jsx)(_v0 => (0, _v17.jsx)(_v196.Icon, {
          viewBox: "0 0 64 64",
          ..._v0,
          fill: "currentColor",
          children: (0, _v17.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M12.4506 12.0055L32.4643 30.0179C33.6413 31.0772 33.6413 32.9228 32.4643 33.9821L12.4506 51.9945C10.7345 53.5389 8 52.3211 8 50.0124V13.9876C8 11.6789 10.7345 10.4611 12.4506 12.0055ZM39.1172 12.0055L59.131 30.0179C60.308 31.0772 60.308 32.9228 59.131 33.9821L39.1172 51.9945C37.4012 53.5389 34.6667 52.3211 34.6667 50.0124V13.9876C34.6667 11.6789 37.4012 10.4611 39.1172 12.0055Z"
          })
        }), {
          maxWidth: (0, _v61.rem)(20),
          maxHeight: (0, _v61.rem)(20),
          boxSize: (0, _v61.rem)(20)
        }),
        tip: _v66.translations.progressToNextScene
      },
      [_v285.EVideoTransitionState.LOOP]: {
        title: _v66.translations.videoLoopSelectTitleLoop,
        icon: (0, _v17.jsx)(_v301.Repeat, {
          maxWidth: (0, _v61.rem)(20),
          maxHeight: (0, _v61.rem)(20),
          boxSize: (0, _v61.rem)(20)
        }),
        tip: _v66.translations.restartVideoAfterEnds
      }
    },
    _v303 = (0, _v21.forwardRef)(({
      onVideoStateChanged: _v0,
      videoTransitionState: _v1
    }, _v2) => (0, _v17.jsxs)(_v95.Flex, {
      ref: _v2,
      direction: "column",
      maxWidth: (0, _v61.rem)(260),
      padding: (0, _v61.rem)(4),
      gap: (0, _v61.rem)(4),
      children: [(0, _v17.jsx)(_v109.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v66.translations.videoBehavior
      }), Object.entries(_v302).map(([_v0, {
        title: _v1,
        icon: _v2,
        tip: _v3
      }]) => (0, _v17.jsxs)(_v107.Button, {
        isActive: _v0 === _v1,
        justifyContent: "flex-start",
        borderRadius: (0, _v61.rem)(8),
        variant: "tertiary",
        leftIcon: _v2,
        width: "100%",
        height: "auto",
        onClick: () => _v0(_v0),
        children: [(0, _v17.jsxs)(_v95.Flex, {
          direction: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: (0, _v61.rem)(8),
          maxWidth: "100%",
          sx: {
            textWrap: "auto",
            textAlign: "start"
          },
          children: [(0, _v17.jsx)(_v137.Header, {
            size: "xs",
            children: _v1
          }), (0, _v17.jsx)(_v292.Paragraph, {
            size: "sm",
            children: _v3
          })]
        }), _v0 === _v1 ? (0, _v17.jsx)(_v300.Checkmark, {
          maxWidth: (0, _v61.rem)(20),
          maxHeight: (0, _v61.rem)(20),
          boxSize: (0, _v61.rem)(20)
        }) : null]
      }, _v0))]
    })),
    _v304 = ({
      videoTransitionState: _v0,
      isDisabled: _v1 = !1,
      onVideoTransitionStateChange: _v2
    }) => {
      let {
          triggerRef: _v3,
          contentRef: _v4,
          isOpen: _v5,
          onTogglePopover: _v6,
          onClosePopover: _v7
        } = (0, _v236.useControlledPopover)(),
        _v8 = (0, _v21.useCallback)(() => {
          (0, _v128.trackClickVideoTransition)(), _v6();
        }, [_v6]),
        _v9 = (0, _v21.useCallback)(_v0 => {
          _v7(), (0, _v128.trackChooseVideoTransition)(_v0), _v2(_v0);
        }, [_v7, _v2]);
      return (0, _v17.jsx)(_v235.BokehPopover, {
        isOpen: _v5 && !_v1,
        inPortal: !0,
        gutter: 12,
        content: (0, _v17.jsx)(_v303, {
          ref: _v4,
          videoTransitionState: _v0,
          onVideoStateChanged: _v9
        }),
        triggerContent: (0, _v17.jsx)("div", {
          children: (0, _v17.jsx)(_v214.BokehTooltip, {
            label: _v66.translations.videoBehavior,
            children: (0, _v17.jsx)(_v213.IconButton, {
              ref: _v3,
              size: "sm",
              variant: "tertiary",
              icon: (0, _v17.jsx)(_v299.VideoBehavior, {}),
              "aria-label": _v66.translations.layouts,
              isDisabled: _v1,
              onClick: _v1 ? _v7 : _v8
            })
          })
        })
      });
    };
  var _v305 = _v0.i(0),
    _v306 = _v0.i(0);
  function _v307({
    id: _v0 = (0, _v65.createLiveDomName)("volume-control"),
    className: _v1 = (0, _v65.createLiveDomName)("volume-control"),
    sceneId: _v2,
    volume: _v3,
    setAgoraMediaMetaData: _v4
  }) {
    let {
        triggerRef: _v5,
        contentRef: _v6,
        isOpen: _v7,
        onTogglePopover: _v8
      } = (0, _v236.useControlledPopover)(),
      [_v9, _v10] = (0, _v21.useState)(() => 0 === _v3),
      [_v11, _v12] = (0, _v21.useState)(1),
      _v13 = (0, _v21.useCallback)(() => {
        _v9 ? _v4(_v2, {
          volume: _v11
        }) : (_v12(_v3), _v4(_v2, {
          volume: 0
        })), _v10(_v0 => !_v0);
      }, [_v9, _v2, _v4, _v3, _v11]),
      _v14 = (0, _v21.useCallback)(_v0 => {
        _v0 > 0 && _v9 ? _v10(!1) : 0 !== _v0 || _v9 || _v10(!0);
      }, [_v9]),
      [_v15, _v16] = (0, _v21.useState)(_v3),
      _v17 = (0, _v241.useThrottledCallback)(_v128.trackChangeSoundVolume, _v33.liveApplicationConfig.TRACKING.BP_FREQUENT_EVENTS_THROTTLE_PERIOD, []),
      _v18 = (0, _v241.useThrottledCallback)(_v0 => {
        _v17(), _v4(_v2, {
          volume: Number(_v0)
        });
      }, 200, [_v2, _v4]);
    (0, _v21.useEffect)(() => {
      _v14(_v15);
    }, [_v15, _v14]), (0, _v21.useEffect)(() => {
      _v16(_v3);
    }, [_v3]);
    let _v19 = (0, _v21.useCallback)(_v0 => {
      _v16(_v0), _v18(_v0);
    }, [_v18]);
    return (0, _v17.jsx)(_v235.BokehPopover, {
      isOpen: _v7,
      inPortal: !0,
      triggerContent: (0, _v17.jsx)("div", {
        children: (0, _v17.jsx)(_v214.BokehTooltip, {
          label: _v66.translations.mediaVolume,
          children: (0, _v17.jsx)(_v213.IconButton, {
            id: _v0,
            className: _v1,
            ref: _v5,
            "aria-label": _v66.translations.mediaVolume,
            size: "sm",
            variant: "tertiary",
            icon: _v9 ? (0, _v17.jsx)(_v305.VolumeOff, {}) : (0, _v17.jsx)(_v306.VolumeOn, {}),
            onClick: _v8
          })
        })
      }),
      content: (0, _v17.jsxs)(_v106.Box, {
        ref: _v6,
        id: (0, _v65.createLiveDomName)(_v0, "volume-popover"),
        className: (0, _v65.createLiveDomName)(_v1, "volume-popover"),
        padding: (0, _v61.rem)(4),
        children: [(0, _v17.jsx)(_v109.Text, {
          id: (0, _v65.createLiveDomName)(_v0, "volume-label-label"),
          className: (0, _v65.createLiveDomName)(_v1, "volume-popover-label"),
          variant: "heading-xs",
          color: "text-primary",
          marginBottom: (0, _v61.rem)(4),
          children: _v66.translations.mediaVolume
        }), (0, _v17.jsxs)(_v95.Flex, {
          alignItems: "center",
          gap: (0, _v61.rem)(14),
          children: [(0, _v17.jsx)(_v106.Box, {
            children: (0, _v17.jsx)(_v214.BokehTooltip, {
              inPopover: !0,
              label: _v9 ? _v66.translations.unmute : _v66.translations.mute,
              children: (0, _v17.jsx)(_v213.IconButton, {
                id: (0, _v65.createLiveDomName)(_v0, "volume-label-mute"),
                className: (0, _v65.createLiveDomName)(_v1, "volume-popover-mute"),
                "aria-label": _v9 ? _v66.translations.unmute : _v66.translations.mute,
                size: "sm",
                variant: "tertiary",
                icon: _v9 ? (0, _v17.jsx)(_v305.VolumeOff, {}) : (0, _v17.jsx)(_v306.VolumeOn, {}),
                onClick: _v13
              })
            })
          }), (0, _v17.jsxs)(_v293.Slider, {
            id: (0, _v65.createLiveDomName)(_v0, "volume-label-slider"),
            className: (0, _v65.createLiveDomName)(_v1, "volume-popover-slider"),
            minWidth: (0, _v61.rem)(120),
            min: 0,
            max: 1,
            step: .01,
            onChange: _v19,
            value: _v15,
            children: [(0, _v17.jsx)(_v294.SliderTrack, {
              children: (0, _v17.jsx)(_v294.SliderFilledTrack, {})
            }), (0, _v17.jsx)(_v294.SliderThumb, {})]
          })]
        })]
      })
    });
  }
  function _v308({
    id: _v0 = (0, _v65.createLiveDomName)("video-controls"),
    className: _v1 = (0, _v65.createLiveDomName)("video-controls"),
    sceneContext: {
      activeScene: _v2,
      sceneActions: _v3,
      sceneInProgram: _v4,
      scenePrescribersGetters: _v5,
      sceneMediaActions: _v6,
      isEditMode: _v7
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      activeScene: _v0,
      sceneInProgram: _v1,
      isEditMode: _v2
    }) => [_v0, _v1, _v2]),
    composerSessionStatusContext: {
      isProvisionUpdating: _v8,
      streamMode: _v9,
      liveComposerStatuses: _v10
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    graphicsContext: {
      agoraMediaList: _v11
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      agoraMediaList: _v0
    }) => [_v0])
  }) {
    var _v12;
    let _v13 = (0, _v287.useLogger)("VC"),
      _v14 = (0, _v28.useScope)(),
      [_v15, _v16] = (0, _v21.useState)(!1),
      [_v17, _v18] = (0, _v21.useState)(0),
      _v19 = _v4 || _v2?.id,
      _v20 = !_v8 && _v2?.id !== null && (_v10.isSessionUnavailable || _v2?.id !== _v19),
      _v21 = !!(!_v2 || _v2.id !== _v19),
      _v22 = (0, _v286.getVideoTransitionState)(_v2),
      _v23 = (0, _v283.useGraphicFromScene)(_v2, _v88.EGraphicsDescriptorType.AGORA_MEDIA),
      _v24 = _v23 ? (_v11[_v23.data.sourceId]?.videoDuration ?? 0) * 0 : 0,
      _v25 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v9 === _v39.EComposerStreamModeType.LIVE && _v2?.meta?.isScheduled ? [_v5.getIsSceneScheduledTogglePrescriber(_v2?.id, !1)] : [];
        switch (_v0) {
          case _v285.EVideoTransitionState.MANUAL:
            _v3.runTransaction([..._v5.getAgoraMediaMetaDataPrescriber(_v2?.id, {
              loop: 1,
              nextOnEOF: null
            }), ..._v1]);
            break;
          case _v285.EVideoTransitionState.AUTO:
            _v3.setAgoraMediaMetaData(_v2?.id, {
              loop: null,
              nextOnEOF: !0
            });
            break;
          case _v285.EVideoTransitionState.LOOP:
            _v3.runTransaction([..._v5.getAgoraMediaMetaDataPrescriber(_v2?.id, {
              loop: -1,
              nextOnEOF: null
            }), ..._v1]);
        }
      }, [_v9, _v2, _v3, _v5]),
      _v26 = (_v12 = _v3.setAgoraMediaMetaData, (0, _v21.useCallback)(() => {
        let _v0 = _v2?.meta?.media?.status;
        return _v2 ? _v0 === _v88.EMediaStatus.PLAY ? ((0, _v128.trackStopProgramVideo)(), _v6.pauseMedia(_v2.id, _v17)) : ((0, _v128.trackPlayVideoInProgram)(), _v6.playMedia(_v2.id, _v17)) : Promise.reject(Error("no scene"));
      }, [_v2?.id, _v2?.meta?.media?.status, _v12, _v17])),
      _v27 = (0, _v21.useCallback)(async () => {
        _v2?.id && (_v20 && (_v13.info("Media push on toggle:", _v2.id), await _v3.pushSceneToProgram(_v2.id)), await _v26());
      }, [_v20, _v13, _v2?.id, _v3, _v26]),
      _v28 = (0, _v21.useCallback)(() => {
        _v27(), (0, _v128.trackToggleVideoState)({
          status: _v2?.meta?.media?.status === _v88.EMediaStatus.PLAY ? "pause" : "play",
          element: "icon",
          location: "upper_banner",
          copy: null
        });
      }, [_v27, _v2?.meta?.media?.status]),
      _v29 = (0, _v21.useCallback)(_v0 => _v2?.id ? _v6.playMedia(_v2.id, _v0) : Promise.resolve(), [_v2?.id, _v6]),
      _v30 = (0, _v21.useCallback)(_v0 => _v2?.id ? _v6.pauseMedia(_v2.id, _v0) : Promise.resolve(), [_v2?.id, _v6]),
      _v31 = (0, _v21.useCallback)(async () => {
        _v2?.id && _v20 && (_v13.info("Media push on seek start:", _v2.id), await _v3.pushSceneToProgram(_v2.id));
      }, [_v20, _v13, _v2?.id, _v3]);
    (0, _v21.useEffect)(() => _v14.subscribeToSignals(_v0 => {
      if (_v0.type === _v51.ELiveGraphicsSignal.TOGGLE_MEDIA_IN_SCENE) return _v27();
    }), [_v27, _v14]);
    let _v32 = (0, _v21.useCallback)(() => {
        _v16(!0);
      }, []),
      _v33 = (0, _v21.useCallback)(() => {
        _v16(!1);
      }, []);
    return _v2 && _v23 ? (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      gap: (0, _v61.rem)(8),
      alignItems: "center",
      padding: 0,
      flex: 1,
      children: [(0, _v17.jsx)(_v214.BokehTooltip, {
        placement: "top",
        shouldWrapChildren: !1,
        isOpen: !!(_v7 && _v4 && _v19 !== _v2.id && _v15),
        label: _v66.translations.videoCantBePlayedInEditMode,
        children: (0, _v17.jsxs)(_v138.Center, {
          flex: 1,
          gap: (0, _v61.rem)(8),
          onMouseEnter: _v32,
          onMouseLeave: _v33,
          children: [(0, _v17.jsx)(_v291, {
            id: (0, _v65.createLiveDomName)(_v0, "play-button"),
            className: (0, _v65.createLiveDomName)(_v1, "play-button"),
            isDisabled: _v21,
            isLoading: !1,
            status: _v21 ? _v88.EMediaStatus.PAUSE : _v2?.meta?.media?.status,
            onToggleStatus: _v28
          }), (0, _v17.jsx)(_v298, {
            id: (0, _v65.createLiveDomName)(_v0, "seek-control"),
            className: (0, _v65.createLiveDomName)(_v1, "seek-control"),
            isEditMode: _v7,
            isDisabled: _v21,
            status: _v21 ? _v88.EMediaStatus.PAUSE : _v2?.meta?.media?.status,
            startedAt: _v21 ? null : _v2?.meta?.media?.startedAt,
            offset: _v21 ? null : _v2?.meta?.media?.offset,
            duration: _v24,
            onPlayMedia: _v29,
            onPauseMedia: _v30,
            onOffsetChange: _v18,
            onSeekStart: _v31
          })]
        })
      }), (0, _v17.jsx)(_v307, {
        id: (0, _v65.createLiveDomName)(_v0, "volume-control"),
        className: (0, _v65.createLiveDomName)(_v1, "volume-control"),
        setAgoraMediaMetaData: _v3.setAgoraMediaMetaData,
        volume: _v2.meta?.media?.volume ?? 1,
        sceneId: _v2?.id
      }), (0, _v17.jsx)(_v304, {
        isDisabled: !!(_v2.meta?.isScheduled && _v9 === _v39.EComposerStreamModeType.SIMULIVE),
        videoTransitionState: _v22,
        onVideoTransitionStateChange: _v25
      })]
    }) : null;
  }
  var _v309 = _v0.i(0),
    _v310 = _v28,
    _v311 = _v0.i(0),
    _v312 = _v0.i(0),
    _v313 = _v56,
    _v314 = _v0.i(0),
    _v315 = _v62,
    _v316 = _v180,
    _v317 = _v183,
    _v318 = _v184;
  let _v319 = (0, _v243.createLiveSchemaEventFactory)("vimeo.simple_live_scene_layouts", 3, () => ({
    ..._v242.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    layoutType: null
  }));
  var _v320 = _v0.i(0);
  let _v321 = (0, _v21.forwardRef)(({
    sceneContext: {
      activeScene: _v0,
      sceneActions: _v1
    } = (0, _v310.useManager)(_v313.SceneManager, ({
      activeScene: _v0
    }) => [_v0]),
    agoraContext: {
      role: _v2,
      connectionConfig: _v3
    } = (0, _v310.useManager)(_v315.BroadcasterAgoraManager, ({
      role: _v0,
      connectionConfig: _v1
    }) => [_v1, _v0]),
    remoteMediaContext: {
      roomMedia: _v4
    } = (0, _v310.useManager)(_v318.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    roomScreenShareContext: {
      activeScreenShareId: _v5
    } = (0, _v310.useManager)(_v316.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    localMediaContext: {
      screen: _v6
    } = (0, _v310.useManager)(_v317.LocalMediaManager)
  }, _v7) => {
    let {
        trackLiveStreamLayoutSelected: _v8
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v9 = _v0?.meta?.layoutType || null,
      _v10 = (0, _v21.useMemo)(() => [_v320.layoutsConfig.DEFAULT_LAYOUT].concat(Object.values(_v320.layoutsConfig.LAYOUTS)), []),
      _v11 = (0, _v173.useSceneScreenShare)(_v5, _v3?.screen.uid || null, _v2 !== _v38.EClientRole.HOST || _v6.isMuted ? null : _v6.track, _v0, _v4),
      _v12 = (0, _v21.useCallback)(_v0 => () => {
        _v0 && _v0.meta?.layoutType !== _v0 && (_v1.setSceneLayout(_v0.id, _v0), _v319("set_layout", {
          layoutType: _v0 ? (0, _v244.decamelize)(_v0) + "_layout" : null
        }), _v8());
      }, [_v0, _v1, _v8]),
      _v13 = (0, _v314.useScrollbarStyles)({
        width: (0, _v61.rem)(8),
        scrollbarColor: "transparent"
      });
    return _v11 ? (0, _v17.jsxs)(_v138.Center, {
      padding: (0, _v61.rem)(12),
      children: [(0, _v17.jsx)(_v311.InfoCircle, {
        width: 24,
        marginRight: (0, _v61.rem)(8)
      }), (0, _v17.jsx)(_v109.Text, {
        variant: "body-xl",
        children: _v66.translations.youCannotChangeLayoutWithScreen
      })]
    }) : (0, _v17.jsxs)(_v95.Flex, {
      ref: _v7,
      gap: (0, _v61.rem)(8),
      direction: "column",
      maxHeight: (0, _v61.rem)(310),
      padding: (0, _v61.rem)(4),
      overflow: "hidden",
      children: [(0, _v17.jsx)(_v109.Text, {
        variant: "heading-xs",
        color: "text-primary",
        children: _v66.translations.layout
      }), (0, _v17.jsx)(_v238.Grid, {
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: (0, _v61.rem)(12),
        padding: `${(0, _v61.rem)(4)} ${(0, _v61.rem)(12)} ${(0, _v61.rem)(4)} ${(0, _v61.rem)(4)}`,
        overflowY: "auto",
        sx: _v13,
        children: _v10.map(_v0 => (0, _v17.jsxs)(_v106.Box, {
          position: "relative",
          children: [(0, _v17.jsx)(_v138.Center, {
            cursor: "pointer",
            borderRadius: (0, _v61.rem)(12),
            width: (0, _v61.rem)(116),
            height: (0, _v61.rem)(72),
            overflow: "hidden",
            onClick: _v12(_v0.id),
            children: _v0.icon
          }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
            color: _v9 === _v0.id ? _v136.FOCUSED_STATE_COLOR : void 0,
            width: 2,
            size: "sm",
            borderRadius: 12
          })]
        }, _v0.id))
      })]
    });
  });
  function _v322() {
    let {
      triggerRef: _v0,
      contentRef: _v1,
      isOpen: _v2,
      onTogglePopover: _v3
    } = (0, _v236.useControlledPopover)();
    return (0, _v17.jsx)(_v235.BokehPopover, {
      inPortal: !0,
      isOpen: _v2,
      contentProps: {
        background: "fill-blur",
        borderRadius: "md"
      },
      triggerContent: (0, _v17.jsxs)(_v106.Box, {
        onClick: _v3,
        ref: _v0,
        children: [(0, _v17.jsx)(_v107.Button, {
          variant: "tertiary",
          size: "sm",
          iconSpacing: 12,
          leftIcon: (0, _v17.jsx)(_v309._3GridLeftLayout, {}),
          sx: {
            [`@container controls (max-width: ${(0, _v61.rem)(600)})`]: {
              display: "none"
            }
          },
          children: _v66.translations.layouts
        }), (0, _v17.jsx)(_v213.IconButton, {
          "aria-label": _v66.translations.layouts,
          icon: (0, _v17.jsx)(_v309._3GridLeftLayout, {}),
          variant: "tertiary",
          size: "sm",
          sx: {
            [`@container controls (min-width: ${(0, _v61.rem)(601)})`]: {
              display: "none"
            }
          }
        })]
      }),
      content: (0, _v17.jsx)(_v321, {
        ref: _v1
      })
    });
  }
  var _v323 = _v0.i(0),
    _v324 = _v0.i(0),
    _v325 = _v0.i(0);
  function _v326({
    isShown: _v0,
    showText: _v1,
    showAction: _v2,
    hideText: _v3,
    hideAction: _v4,
    hideIcon: _v5 = (0, _v17.jsx)(_v324.EyeShut, {}),
    showIcon: _v6 = (0, _v17.jsx)(_v325.Eye, {})
  }) {
    let [_v7, _v8] = (0, _v21.useState)(!1);
    return (0, _v17.jsx)(_v107.Button, {
      justifyContent: "flex-start",
      borderRadius: (0, _v61.rem)(8),
      variant: "tertiary",
      leftIcon: _v0 ? _v5 : _v6,
      "data-testid": _v0 ? "hide-button" : "show-button",
      onClick: function () {
        _v7 || (_v8(!0), _v0 ? _v4() : _v2(), setTimeout(() => {
          _v8(!1);
        }, _v74.graphicsConfig.RENDERER.ANIMATION.SYSTEM_DURATION_OFFSET));
      },
      children: _v0 ? _v3 : _v1
    });
  }
  function _v327({
    activeScene: _v0,
    isInProgram: _v1,
    setGraphicVisibility: _v2
  }) {
    let _v3 = (0, _v21.useMemo)(() => Object.values(_v0?.graphics || {}).find(_v0 => _v0.type === _v88.EGraphicsDescriptorType.LOWER_THIRD), [_v0?.graphics]),
      _v4 = (0, _v21.useCallback)(() => {
        if ((0, _v127.trackShowGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.LOWER_THIRD,
          lowerThirdType: _v126.ELowerThirdType.OTHER,
          isInProgram: _v1
        }), _v0?.id && _v3?.data?.sourceId) return _v2(_v0.id, _v3.data.sourceId, !0);
      }, [_v0, _v1, _v3, _v2]),
      _v5 = (0, _v21.useCallback)(() => {
        if ((0, _v127.trackHideGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.LOWER_THIRD
        }), _v0?.id && _v3?.data?.sourceId) return _v2(_v0?.id, _v3?.data.sourceId, !1);
      }, [_v0, _v3, _v2]);
    return _v3 ? (0, _v17.jsx)(_v326, {
      isShown: !!(_v3 && _v3.position.visible),
      showText: _v66.translations.showSceneLowerThird,
      hideText: _v66.translations.hideSceneLowerThird,
      hideAction: _v5,
      showAction: _v4
    }) : null;
  }
  function _v328({
    activeScene: _v0,
    isInProgram: _v1,
    setGraphicVisibility: _v2,
    polls: _v3
  }) {
    let _v4 = (0, _v283.useGraphicFromScene)(_v0, _v88.EGraphicsDescriptorType.POLL),
      _v5 = (0, _v21.useCallback)(async () => {
        if (_v0 && _v4) {
          await _v2(_v0.id, _v4.data.sourceId, !0);
          let _v0 = _v3[_v4.data.sourceId];
          (0, _v127.trackShowGraphicInScene)({
            graphicType: _v88.EGraphicsDescriptorType.POLL,
            isInProgram: _v1,
            pollState: _v0 ? _v0.state : void 0,
            location: "overlays_tab"
          });
        }
      }, [_v0, _v1, _v4, _v3, _v2]),
      _v6 = (0, _v21.useCallback)(async () => {
        _v0 && _v4 && (await _v2(_v0.id, _v4.data.sourceId, !1), (0, _v127.trackHideGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.POLL
        }));
      }, [_v0, _v4, _v2]);
    return _v4 && 1 ? (0, _v17.jsx)(_v326, {
      isShown: _v4?.position.visible,
      showText: _v66.translations.showPoll,
      hideText: _v66.translations.hidePoll,
      hideAction: _v6,
      showAction: _v5
    }) : null;
  }
  function _v329({
    activeScene: _v0,
    isInProgram: _v1,
    isEventModerated: _v2,
    setGraphicVisibility: _v3
  }) {
    let _v4 = (0, _v21.useMemo)(() => Object.values(_v0?.graphics || {}).find(_v0 => _v0.type === _v88.EGraphicsDescriptorType.QNA), [_v0?.graphics]),
      _v5 = (0, _v21.useCallback)(async () => {
        _v0?.id && (await _v3(_v0.id, _v88.EGraphicsDescriptorType.QNA, !0)), (0, _v127.trackShowGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.QNA,
          isInProgram: _v1,
          isModerated: _v2,
          location: "overlays_tab"
        });
      }, [_v0, _v2, _v1, _v3]),
      _v6 = (0, _v21.useCallback)(async () => {
        _v0?.id && (await _v3(_v0.id, _v88.EGraphicsDescriptorType.QNA, !1)), (0, _v127.trackHideGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.QNA,
          isModerated: !1
        });
      }, [_v0, _v3]);
    return _v4 ? (0, _v17.jsx)(_v326, {
      isShown: !!(_v4 && _v4.position.visible),
      showText: _v66.translations.showQna,
      hideText: _v66.translations.hideQna,
      hideAction: _v6,
      showAction: _v5
    }) : null;
  }
  function _v330({
    activeScene: _v0,
    isInProgram: _v1,
    setGuestLowerThirdsVisibility: _v2,
    removeGraphicFromScene: _v3
  }) {
    var _v4;
    let _v5 = (_v4 = _v88.EGraphicsDescriptorType.AGORA_STREAM, (0, _v21.useMemo)(() => {
        let _v0 = Array.isArray(_v4) ? _v4 : [_v4];
        return Object.values(_v0?.graphics || {}).reduce((_v0, _v1) => _v0 + +!!_v0.includes(_v1.type), 0);
      }, [_v4, _v0?.graphics])),
      _v6 = (0, _v91.findConflictingGraphicsWithType)(_v88.EGraphicsDescriptorType.GUEST_LOWER_THIRD, _v0),
      [_v7] = (0, _v160.useBroadcasterActionConfirmation)(),
      _v8 = !!(_v0 && _v5),
      _v9 = !!_v0?.meta?.guestLabelsVisible,
      _v10 = (0, _v21.useCallback)(() => {
        _v0 && (_v6.length ? _v7({
          type: _v162.EConfirmationType.GRAPHICS_REPLACEMENT,
          body: _v66.translations.graphicsReplaceConfirmation(_v163.NormalizedGraphicsDescriptorType[_v6[0].type], _v163.NormalizedGraphicsDescriptorType[_v88.EGraphicsDescriptorType.GUEST_LOWER_THIRD]),
          onConfirm: () => {
            _v2(_v0.id, !0), _v3(_v0.id, _v6[0].data.sourceId), (0, _v127.trackShowGraphicInScene)({
              graphicType: _v88.EGraphicsDescriptorType.LOWER_THIRD,
              lowerThirdType: _v126.ELowerThirdType.GUEST,
              isInProgram: _v1
            });
          }
        }) : (_v2(_v0.id, !0), (0, _v127.trackShowGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.LOWER_THIRD,
          lowerThirdType: _v126.ELowerThirdType.GUEST,
          isInProgram: _v1
        })));
      }, [_v0, _v7, _v6, _v1, _v3, _v2]),
      _v11 = (0, _v21.useCallback)(() => {
        _v0 && (_v2(_v0.id, !1), (0, _v127.trackHideGraphicInScene)({
          graphicType: _v88.EGraphicsDescriptorType.LOWER_THIRD
        }));
      }, [_v0, _v2]);
    return _v8 ? (0, _v17.jsx)(_v326, {
      isShown: _v9,
      showText: _v66.translations.showLowerThirds,
      hideText: _v66.translations.hideLowerThirds,
      hideAction: _v11,
      showAction: _v10
    }) : null;
  }
  function _v331({
    scene: _v0,
    sceneActions: _v1,
    agoraContext: {
      role: _v2,
      connectionConfig: _v3
    } = (0, _v28.useManager)(_v62.BroadcasterAgoraManager, ({
      role: _v0,
      connectionConfig: _v1
    }) => [_v1, _v0]),
    roomScreenShareContext: {
      activeScreenShareId: _v4
    } = (0, _v28.useManager)(_v180.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    remoteMediaContext: {
      roomMedia: _v5
    } = (0, _v28.useManager)(_v184.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    localMediaContext: {
      screen: _v6
    } = (0, _v28.useManager)(_v183.LocalMediaManager)
  }) {
    let _v7 = !_v0?.meta?.disableSpeakerPip,
      _v8 = (0, _v173.useSceneScreenShare)(_v4, _v3?.screen.uid || null, _v2 !== _v38.EClientRole.HOST || _v6.isMuted ? null : _v6.track, _v0, _v5),
      _v9 = (0, _v21.useMemo)(() => (0, _v161.findPipDescriptorInScene)(_v0), [_v0]),
      _v10 = !!((0, _v21.useMemo)(() => (0, _v161.findGraphicsByType)(_v88.EGraphicsDescriptorType.AGORA_STREAM, _v0), [_v0]).length && (_v8 || _v9)),
      _v11 = (0, _v21.useCallback)(() => {
        _v0 && _v1.setSceneSpeakerPipEnabled(_v0.id, !1);
      }, [_v0, _v1]),
      _v12 = (0, _v21.useCallback)(() => {
        _v0 && _v1.setSceneSpeakerPipEnabled(_v0.id, !0);
      }, [_v0, _v1]);
    return _v10 ? (0, _v17.jsx)(_v326, {
      isShown: _v7,
      showText: _v66.translations.showSpeakers,
      hideText: _v66.translations.hideSpeakers,
      hideAction: _v11,
      showAction: _v12
    }) : null;
  }
  function _v332({
    qnaContext: {
      isEventModerated: _v0
    } = (0, _v28.useManager)(_v182.QnAManager, ({
      isEventModerated: _v0
    }) => [_v0]),
    graphicsContext: {
      pollList: _v1
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      pollList: _v0
    }) => [_v0]),
    sceneContext: {
      activeScene: _v2,
      sceneActions: _v3,
      sceneInProgram: _v4
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      activeScene: _v0,
      sceneInProgram: _v1
    }) => [_v0, _v1])
  }) {
    let {
        triggerRef: _v5,
        contentRef: _v6,
        isOpen: _v7,
        onTogglePopover: _v8
      } = (0, _v236.useControlledPopover)(),
      _v9 = _v2?.id === _v4;
    return (0, _v17.jsx)(_v235.BokehPopover, {
      isOpen: _v7,
      inPortal: !0,
      triggerContent: (0, _v17.jsxs)(_v106.Box, {
        onClick: _v8,
        ref: _v5,
        children: [(0, _v17.jsx)(_v107.Button, {
          size: "sm",
          variant: "tertiary",
          iconSpacing: 12,
          leftIcon: (0, _v17.jsx)(_v323._2Layers, {}),
          sx: {
            [`@container controls (max-width: ${(0, _v61.rem)(600)})`]: {
              display: "none"
            }
          },
          children: _v66.translations.overlays
        }), (0, _v17.jsx)(_v213.IconButton, {
          "aria-label": _v66.translations.layouts,
          size: "sm",
          variant: "tertiary",
          icon: (0, _v17.jsx)(_v323._2Layers, {}),
          sx: {
            [`@container controls (min-width: ${(0, _v61.rem)(601)})`]: {
              display: "none"
            }
          }
        })]
      }),
      content: (0, _v17.jsxs)(_v95.Flex, {
        ref: _v6,
        justifyContent: "left",
        flexDirection: "column",
        padding: (0, _v61.rem)(4),
        minWidth: (0, _v61.rem)(240),
        gap: (0, _v61.rem)(8),
        children: [(0, _v17.jsx)(_v109.Text, {
          variant: "heading-xs",
          color: "text-primary",
          children: _v66.translations.overlays
        }), (0, _v17.jsx)(_v330, {
          activeScene: _v2,
          isInProgram: _v9,
          setGuestLowerThirdsVisibility: _v3.setGuestLowerThirdsVisibility,
          removeGraphicFromScene: _v3.removeGraphicFromScene
        }), (0, _v17.jsx)(_v327, {
          activeScene: _v2,
          isInProgram: _v9,
          setGraphicVisibility: _v3.setGraphicVisibility
        }), (0, _v17.jsx)(_v328, {
          activeScene: _v2,
          isInProgram: _v9,
          polls: _v1,
          setGraphicVisibility: _v3.setGraphicVisibility
        }), (0, _v17.jsx)(_v329, {
          activeScene: _v2,
          isEventModerated: _v0 ?? !1,
          isInProgram: _v9,
          setGraphicVisibility: _v3.setGraphicVisibility
        }), (0, _v17.jsx)(_v331, {
          scene: _v2,
          sceneActions: _v3
        })]
      })
    });
  }
  var _v333 = ((_v5 = {}).NONE = "none", _v5.SLIDES = "slides", _v5.VIDEOS = "videos", _v5.OVERLAYS = "overlays", _v5.LAYOUTS = "layouts", _v5.BACKGROUND = "background", _v5);
  let _v334 = (0, _v21.forwardRef)(({
    id: _v0 = (0, _v231.createDomName)("preview-scene-controls"),
    className: _v1 = (0, _v231.createDomName)("preview-scene-controls"),
    sceneContext: {
      activeScene: _v2
    } = (0, _v227.useManager)(_v229.SceneManager, ({
      activeScene: _v0,
      sceneInProgram: _v1
    }) => [_v0, _v1]),
    composerSessionStatusContext: {
      streamMode: _v3
    } = (0, _v227.useManager)(_v230.ComposerSessionStatusManager)
  }, _v4) => {
    let _v5 = !!(0, _v161.findFirstOfTypeGraphics)(_v88.EGraphicsDescriptorType.AGORA_MEDIA, _v2),
      _v6 = (0, _v21.useMemo)(() => {
        if (!_v2) return [];
        let _v0 = !!_v2?.meta?.isScheduled,
          _v1 = _v3 !== _v39.EComposerStreamModeType.SIMULIVE || !_v0,
          _v2 = Object.values(_v2?.graphics || {}).some(_v0 => _v0.type === _v88.EGraphicsDescriptorType.LOWER_THIRD || _v0.type === _v88.EGraphicsDescriptorType.POLL || _v0.type === _v88.EGraphicsDescriptorType.QNA || _v0.type === _v88.EGraphicsDescriptorType.AGORA_STREAM),
          _v3 = (0, _v161.findFirstOfTypeGraphics)(_v88.EGraphicsDescriptorType.SLIDES, _v2);
        return [{
          id: _v333.BACKGROUND,
          isVisible: !0,
          label: (0, _v17.jsx)(_v280, {})
        }, {
          id: _v333.LAYOUTS,
          isVisible: _v1,
          label: (0, _v17.jsx)(_v322, {})
        }, {
          id: _v333.OVERLAYS,
          isVisible: _v2,
          label: (0, _v17.jsx)(_v332, {})
        }, {
          id: _v333.VIDEOS,
          isVisible: _v5,
          label: (0, _v17.jsx)(_v308, {})
        }, {
          id: _v333.SLIDES,
          isVisible: !!_v3,
          label: (0, _v17.jsx)(_v284, {})
        }].filter(_v0 => _v0.isVisible);
      }, [_v2, _v3, _v5]);
    return 0 === _v6.length ? (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      width: "100%",
      justifyContent: "center",
      minHeight: (0, _v61.rem)(48),
      marginBottom: (0, _v61.rem)(16)
    }) : (0, _v17.jsx)(_v95.Flex, {
      ref: _v4,
      id: _v0,
      className: _v1,
      width: "100%",
      justifyContent: "center",
      marginBottom: (0, _v61.rem)(16),
      sx: {
        containerType: "inline-size",
        containerName: "controls"
      },
      children: (0, _v17.jsx)(_v95.Flex, {
        width: _v5 ? "100%" : void 0,
        padding: (0, _v61.rem)(4),
        alignItems: "center",
        minHeight: (0, _v61.rem)(40),
        gap: (0, _v61.rem)(4),
        borderRadius: (0, _v61.rem)(8),
        background: "surface",
        children: _v6.map((_v0, _v1) => (0, _v17.jsxs)(_v21.Fragment, {
          children: [(0, _v17.jsx)(_v138.Center, {
            id: (0, _v231.createDomName)(_v0, "items"),
            className: (0, _v231.createDomName)(_v0, "items"),
            height: (0, _v61.rem)(32),
            flex: _v5 ? +(_v0.id === _v333.VIDEOS) : void 0,
            children: _v0.label
          }), _v1 < _v6.length - 1 ? (0, _v17.jsx)(_v228.Divider, {
            orientation: "vertical",
            borderColor: "stroke",
            borderLeftWidth: (0, _v61.rem)(1),
            height: (0, _v61.rem)(24)
          }) : null]
        }, _v0.id))
      })
    });
  });
  var _v335 = _v28,
    _v336 = _v65;
  let _v337 = (0, _v21.createContext)(null),
    _v338 = ({
      children: _v0
    }) => {
      let _v1 = (0, _v21.useRef)({}),
        _v2 = (0, _v21.useCallback)((_v0, _v1) => {
          _v1.current[_v0] && (_v1.current[_v0] = _v1.current[_v0].filter(_v0 => _v0 !== _v1));
        }, []),
        _v3 = (0, _v21.useCallback)((_v0, _v1) => (_v1.current[_v0] || (_v1.current[_v0] = []), _v1.current[_v0].push(_v1), () => _v2(_v0, _v1)), [_v2]),
        _v4 = (0, _v21.useCallback)((_v0, _v1) => {
          _v1.current[_v0] && _v1.current[_v0].forEach(_v0 => _v0(_v1));
        }, []);
      return (0, _v17.jsx)(_v337.Provider, {
        value: {
          unsubscribe: _v2,
          subscribe: _v3,
          emit: _v4
        },
        children: _v0
      });
    },
    _v339 = () => (0, _v21.useContext)(_v337);
  var _v340 = _v48,
    _v341 = _v0.i(0),
    _v342 = _v0.i(0),
    _v343 = _v0.i(0),
    _v344 = _v0.i(0);
  function _v345({
    className: _v0 = (0, _v96.createDomName)("video-picker-footer"),
    onDismiss: _v1,
    selectedCount: _v2,
    onConfirm: _v3,
    canSelectMoreVideos: _v4 = !0
  }) {
    return (0, _v17.jsxs)(_v106.Box, {
      paddingY: (0, _v61.rem)(24),
      className: _v0,
      children: [_v4 ? null : (0, _v17.jsx)(_v343.Alert, {
        className: (0, _v96.createDomName)(_v0, "over-limit-notice"),
        status: "info",
        marginBottom: (0, _v61.rem)(20),
        children: (0, _v17.jsx)(_v344.AlertTitle, {
          fontWeight: "regular",
          children: _v66.translations.youHaveReachedLimitOfScenes
        })
      }), (0, _v17.jsxs)(_v95.Flex, {
        justifyContent: "flex-end",
        className: (0, _v96.createDomName)(_v0, "row"),
        children: [_v2 > 0 ? (0, _v17.jsx)(_v95.Flex, {
          alignItems: "center",
          marginRight: "auto",
          className: (0, _v96.createDomName)(_v0, "count-notice"),
          children: (0, _v17.jsx)(_v109.Text, {
            variant: "body-xl",
            children: _v66.translations.selectedVideosCount(_v2)
          })
        }) : null, (0, _v17.jsxs)(_v95.Flex, {
          className: (0, _v96.createDomName)(_v0, "controls"),
          gap: (0, _v61.rem)(8),
          children: [(0, _v17.jsx)(_v107.Button, {
            className: (0, _v96.createDomName)(_v0, "cancel-control"),
            variant: "secondary",
            minWidth: (0, _v61.rem)(88),
            onClick: _v1,
            children: _v190.T_CANCEL
          }), (0, _v17.jsx)(_v107.Button, {
            className: (0, _v96.createDomName)(_v0, "add-control"),
            variant: "primary",
            minWidth: (0, _v61.rem)(88),
            isDisabled: _v2 <= 0,
            onClick: _v3,
            children: _v66.translations.addToEvent
          })]
        })]
      })]
    });
  }
  var _v346 = _v0.i(0),
    _v347 = _v0.i(0),
    _v348 = _v0.i(0),
    _v349 = _v0.i(0),
    _v350 = _v0.i(0),
    _v351 = _v0.i(0),
    _v352 = _v0.i(0),
    _v353 = _v0.i(0),
    _v354 = _v65;
  let _v355 = (0, _v21.memo)(({
    className: _v0 = (0, _v354.createLiveDomName)("video-picker-row"),
    isDisabled: _v1 = !1,
    selected: _v2,
    video: _v3,
    onSelectVideo: _v4,
    onDeselectVideo: _v5
  }) => {
    let _v6 = (0, _v84.inline)(() => _v3.lastUserActionEventDate ? new Date(_v3.lastUserActionEventDate).toLocaleDateString(void 0, {
        month: "long",
        day: "numeric",
        year: "numeric"
      }) : ""),
      [_v7, _v8, _v9] = (0, _v84.inline)(() => _v1 ? [!1, null, !0] : _v3.metadata?.connections?.ondemand ? [!1, _v66.translations.dontSupportVodVideos, !1] : [!0, null, !0]),
      _v10 = _v3.pictures?.sizes && _v3.pictures.sizes[0] ? _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO(_v3.pictures.sizes[0].link, 128) : _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO(_v353.vimeoConfig.VIDEOTHUMB.DEFAULT_URL(), 128),
      _v11 = (!_v2 || !_v9) && !_v7 || !_v3.isPlayable,
      _v12 = (0, _v233.useColorModeValue)("grayscale.100", "rgba(0, 0, 0, 0.2)");
    return (0, _v17.jsxs)(_v106.Box, {
      as: "li",
      className: _v0,
      padding: `${(0, _v61.rem)(4)} ${(0, _v61.rem)(8)}`,
      borderRadius: "0",
      onClick: _v11 ? _v64.CallablePlaceholder : _v0 => {
        (_v0.preventDefault(), _v0.stopPropagation(), _v2) ? _v5(_v3) : _v4(_v3);
      },
      children: [(0, _v17.jsxs)(_v106.Box, {
        as: "div",
        alignItems: "center",
        display: "flex",
        borderRadius: (0, _v61.rem)(8),
        borderWidth: (0, _v61.rem)(2),
        borderColor: _v2 ? "blue.500" : "transparent",
        padding: (0, _v61.rem)(8),
        _hover: _v7 ? {
          background: _v12,
          cursor: "pointer"
        } : {
          cursor: "not-allowed"
        },
        children: [(0, _v17.jsx)(_v351.Checkbox, {
          isDisabled: _v11,
          isChecked: _v2,
          readOnly: !0
        }), (0, _v17.jsxs)(_v106.Box, {
          ...(_v7 ? {} : {
            filter: "grayscale.1"
          }),
          position: "relative",
          marginX: (0, _v61.rem)(16),
          children: [(0, _v17.jsx)(_v106.Box, {
            as: "img",
            className: (0, _v354.createLiveDomName)(_v0, "thumbnail"),
            alt: _v3.name,
            src: _v10,
            border: "1px solid",
            borderColor: "stroke",
            borderRadius: (0, _v61.rem)(4),
            width: (0, _v61.rem)(128),
            height: (0, _v61.rem)(72)
          }), (0, _v17.jsx)(_v106.Box, {
            className: (0, _v354.createLiveDomName)(_v0, "duration"),
            position: "absolute",
            bottom: (0, _v61.rem)(7),
            left: (0, _v61.rem)(7),
            alignItems: "center",
            gap: (0, _v61.rem)(4),
            justifyContent: "space-between",
            padding: `0 ${(0, _v61.rem)(2)}`,
            borderRadius: (0, _v61.rem)(4),
            color: "white",
            fontSize: (0, _v61.rem)(10),
            background: "rgba(0,0,0,0.75)",
            fontWeight: "bold",
            height: (0, _v61.rem)(16),
            minWidth: (0, _v61.rem)(30),
            textTransform: "uppercase",
            children: (0, _v352.secondsToDisplay)(_v3.duration)
          })]
        }), (0, _v17.jsxs)(_v106.Box, {
          userSelect: "none",
          ...(_v7 ? {} : {
            filter: "grayscale.1"
          }),
          children: [(0, _v17.jsx)(_v137.Header, {
            className: (0, _v354.createLiveDomName)(_v0, "name"),
            size: "sm",
            children: _v3.name
          }), (0, _v17.jsx)(_v292.Paragraph, {
            className: (0, _v354.createLiveDomName)(_v0, "modified-at"),
            size: "md",
            children: _v66.translations.modifiedTemplate(_v6)
          }), _v3.isPlayable ? null : (0, _v17.jsxs)(_v95.Flex, {
            className: (0, _v354.createLiveDomName)(_v0, "video-optimizing"),
            alignItems: "center",
            color: "text-primary",
            fontSize: "text-sm",
            marginTop: (0, _v61.rem)(4),
            children: [(0, _v17.jsx)(_v157.Spinner, {
              size: "sm",
              marginRight: (0, _v61.rem)(8)
            }), _v66.translations.thisVideoIsOptimizing]
          })]
        })]
      }), _v7 ? null : (0, _v17.jsx)(_v106.Box, {
        paddingLeft: (0, _v61.rem)(32),
        children: (0, _v17.jsx)(_v292.Paragraph, {
          className: (0, _v354.createLiveDomName)(_v0, "notice"),
          size: "md",
          color: "red.500",
          children: _v8
        })
      })]
    });
  });
  function _v356({
    userId: _v0,
    term: _v1,
    addedVideos: _v2,
    canSelectDuplicates: _v3 = !1,
    canSelectMoreVideos: _v4 = !0,
    onSelectVideo: _v5,
    selectedVideos: _v6,
    onDeselectVideo: _v7
  }) {
    let _v8 = (0, _v21.useRef)(null),
      _v9 = (0, _v21.useRef)(null),
      {
        videos: _v10,
        hasNextPage: _v11,
        loadNextPage: _v12,
        isLoading: _v13
      } = (_v33.liveApplicationConfig.FEATURE.USE_TEST_VIDEOS_SEARCH ? function (_v0, _v1) {
        let _v2 = (0, _v21.useMemo)(() => new _v81.Logger("🧶VDPCK"), []),
          _v3 = (0, _v21.useMemo)(() => new _v347.Mutex({
            name: "🧶VDPCK",
            log: _v2,
            logEnabled: !1
          }), [_v2]),
          _v4 = (0, _v21.useRef)(1),
          [_v5, _v6] = (0, _v350.useGetUserVideosLazy)(),
          [_v7, _v8] = (0, _v21.useState)({}),
          _v9 = (0, _v21.useMemo)(() => !_v6.loading && (_v6.data ? !!_v6.data.paging?.next : !_v6.error && !0), [_v6]),
          _v10 = (0, _v21.useMemo)(() => {
            let _v0 = [];
            return Object.keys(_v7).sort().forEach(_v0 => {
              let _v1 = _v7[_v0],
                _v2 = _v1.data?.data;
              _v2 && (_v0 = _v0.concat(_v2));
            }), _v0;
          }, [_v7]),
          _v11 = (0, _v21.useCallback)((_v0, _v1) => {
            if (!_v1) return;
            let _v2 = _v0.trim().length > 0 ? _v0 : void 0;
            _v3.runExclusive(() => (_v2.info("🟡 Fetching videos list for:", _v0 || "<empty>", _v1), _v5({
              where: {
                userId: Number(_v1)
              },
              query: {
                query: _v2,
                page: _v1,
                sort: "last_user_action_event_date",
                direction: "desc",
                filter: "nolive"
              },
              select: ["uri", "name", "pictures", "lastUserActionEventDate", "duration", "metadata.connections.ondemand", "parentProject.isPrivateToUser", "isPlayable"],
              headers: {
                Accept: (0, _v348.buildAcceptHeader)()
              }
            })), "search-videos").then(() => _v2.info("🟢 Fetched videos list for:", _v0 || "<empty>", _v1)).catch(_v0 => {
              if (_v0?.code === _v25.ELiveErrorCode.CANCEL) _v2.info("❌ Cancel search call");else throw _v0;
            });
          }, [_v2, _v3, _v1]),
          _v12 = (0, _v21.useCallback)(() => {
            _v9 && (_v4.current = (_v4.current ?? 0) + 1, _v11(_v0, _v4.current ?? 1));
          }, [_v9, _v2, _v0]);
        return (0, _v21.useEffect)(() => {
          _v3.cancel("init-term-change"), _v4.current = 1, _v2.info("🔷 Reset term:", _v0 || "<empty>"), _v8({}), _v11(_v0, 1);
        }, [_v3, _v0]), (0, _v21.useEffect)(() => {
          _v6.loading || _v6.error || _v6.data?.data && _v8(_v0 => ({
            ..._v0,
            [_v6.data.page]: _v6
          }));
        }, [_v2, _v6]), (0, _v21.useLayoutEffect)(() => () => {
          _v3.cancel("❌ unmount"), _v2.info("❌ De-init");
        }, [_v2, _v3]), {
          pageResults: _v7,
          videos: _v10,
          isLoading: _v6.loading,
          hasNextPage: _v9,
          loadNextPage: _v12
        };
      } : function (_v0, _v1) {
        let _v2 = (0, _v21.useMemo)(() => new _v81.Logger("🧶VDPCK"), []),
          _v3 = (0, _v21.useMemo)(() => new _v347.Mutex({
            name: "🧶VDPCK",
            log: _v2,
            logEnabled: !1
          }), [_v2]),
          _v4 = (0, _v21.useRef)(1),
          [_v5, _v6] = (0, _v349.useGetUserItemsLazy)(),
          [_v7, _v8] = (0, _v21.useState)({}),
          _v9 = (0, _v21.useMemo)(() => !_v6.loading && (_v6.data ? !!_v6.data.paging?.next : !_v6.error && !0), [_v6]),
          _v10 = (0, _v21.useMemo)(() => {
            let _v0 = [];
            return Object.keys(_v7).sort().forEach(_v0 => {
              let _v1 = _v7[_v0],
                _v2 = _v1.data?.data;
              _v2 && (_v0 = _v0.concat(_v2.map(_v0 => _v0.video)));
            }), _v0.filter(Boolean);
          }, [_v7]),
          _v11 = (0, _v21.useCallback)((_v0, _v1) => {
            if (!_v1) return;
            let _v2 = _v0.trim().length > 0 ? _v0 : void 0;
            _v3.runExclusive(() => (_v2.info("🟡 Fetching videos list for:", _v0 || "<empty>", _v1), _v5({
              where: {
                userId: Number(_v1)
              },
              query: {
                query: _v2,
                queryFields: "title",
                page: _v1,
                excludePrivateToMe: !1,
                sort: "last_user_action_event_date",
                direction: "desc",
                filter: "video",
                filterLive: "false",
                perPage: 12
              },
              select: ["type", "folder.uri", "folder.isPrivateToUser", "video.uri", "video.name", "video.pictures", "video.lastUserActionEventDate", "video.duration", "video.metadata.connections.ondemand", "video.parentProject.isPrivateToUser", "video.isPlayable"],
              headers: {
                Accept: (0, _v348.buildAcceptHeader)()
              }
            })), "search-videos").then(() => _v2.info("🟢 Fetched videos list for:", _v0 || "<empty>", _v1)).catch(_v0 => {
              if (_v0?.code === _v25.ELiveErrorCode.CANCEL) _v2.info("❌ Cancel search call");else throw _v0;
            });
          }, [_v2, _v3, _v1]),
          _v12 = (0, _v21.useCallback)(() => {
            _v9 && (_v4.current = (_v4.current ?? 0) + 1, _v11(_v0, _v4.current ?? 1));
          }, [_v9, _v2, _v0]);
        return (0, _v21.useEffect)(() => {
          _v3.cancel("init-term-change"), _v4.current = 1, _v2.info("🔷 Reset term:", _v0 || "<empty>"), _v8({}), _v11(_v0, 1);
        }, [_v3, _v0]), (0, _v21.useEffect)(() => {
          _v6.loading || _v6.error || _v6.data?.data && _v8(_v0 => ({
            ..._v0,
            [_v6.data.page]: _v6
          }));
        }, [_v2, _v6]), (0, _v21.useLayoutEffect)(() => () => {
          _v3.cancel("❌ unmount"), _v2.info("❌ De-init");
        }, [_v2, _v3]), {
          pageResults: _v7,
          videos: _v10,
          isLoading: _v6.loading,
          hasNextPage: _v9,
          loadNextPage: _v12
        };
      })(_v1, _v0),
      _v14 = (0, _v21.useMemo)(() => (0, _v346.default)(() => {
        let _v0 = _v8.current,
          _v1 = _v9.current;
        if (!_v1 || !_v0 || !_v1.offsetHeight) return;
        let _v2 = _v1.scrollTop;
        _v0.scrollHeight - _v2 - _v1.offsetHeight < 5 && _v11 && !_v13 && _v12();
      }, 500, {
        leading: !0
      }), [_v13, _v11, _v12]),
      _v15 = (0, _v21.useMemo)(() => _v3 ? _v10 : _v10.filter(_v0 => !_v2?.includes(_v0.uri)), [_v10, _v2, _v3]),
      _v16 = (0, _v314.useScrollbarStyles)(),
      _v17 = (0, _v84.inline)(() => 0 !== _v15.length || _v13 ? (0, _v17.jsx)("ul", {
        ref: _v8,
        children: _v15.map(_v0 => (0, _v17.jsx)(_v355, {
          video: _v0,
          selected: !!_v6[_v0.uri],
          isDisabled: !_v4,
          onSelectVideo: _v5,
          onDeselectVideo: _v7
        }, _v0.uri))
      }) : (0, _v17.jsx)(_v95.Flex, {
        justifyContent: "center",
        alignItems: "center",
        minHeight: (0, _v61.rem)(400),
        children: (0, _v17.jsx)(_v109.Text, {
          variant: "body-xl",
          children: _v1 ? _v66.translations.cannotFindVideosMessage : _v66.translations.noUploadedVideosMessage()
        })
      }));
    return (0, _v17.jsx)(_v106.Box, {
      ref: _v9,
      onScroll: _v14,
      position: "relative",
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      overflowY: "auto",
      overflowX: "hidden",
      borderBottom: "1px solid",
      borderTop: "1px solid",
      borderColor: "stroke",
      sx: _v16,
      children: (0, _v17.jsxs)(_v106.Box, {
        position: "relative",
        paddingX: (0, _v61.rem)(24),
        width: "100%",
        maxWidth: "100%",
        children: [_v17, _v13 ? (0, _v17.jsx)(_v95.Flex, {
          justifyContent: "center",
          paddingY: (0, _v61.rem)(50),
          children: (0, _v17.jsx)(_v157.Spinner, {
            size: "sm"
          })
        }) : null]
      })
    });
  }
  function _v357({
    id: _v0 = (0, _v65.createLiveDomName)("video-picker-modal-content"),
    className: _v1 = (0, _v65.createLiveDomName)("video-picker-modal-content"),
    userId: _v2,
    selectedVideos: _v3,
    addedVideos: _v4,
    canSelectDuplicates: _v5 = !1,
    canSelectMoreVideos: _v6 = !0,
    onSelectVideo: _v7,
    onDeselectVideo: _v8,
    onAddVideos: _v9,
    onCloseModal: _v10
  }) {
    let [_v11, _v12] = (0, _v21.useState)(""),
      _v13 = function (_v0) {
        let [_v1, _v2] = (0, _v21.useState)(_v0);
        return (0, _v21.useEffect)(() => {
          let _v0 = setTimeout(() => {
            _v2(_v0);
          }, 500);
          return () => {
            clearTimeout(_v0);
          };
        }, [500, _v0]), _v1;
      }(_v11),
      _v14 = (0, _v21.useCallback)(_v0 => {
        _v12(_v0.currentTarget.value);
      }, []);
    return (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      flexDirection: "column",
      width: "100%",
      maxWidth: "100%",
      children: [(0, _v17.jsxs)(_v106.Box, {
        children: [(0, _v17.jsx)(_v292.Paragraph, {
          size: "md",
          children: _v66.translations.searchVideosMessage()
        }), (0, _v17.jsx)(_v106.Box, {
          margin: `${(0, _v61.rem)(18)} 0`,
          children: (0, _v17.jsx)(_v342.Search, {
            autoFocus: !0,
            size: "md",
            variant: "minimal",
            value: _v11,
            onChange: _v14
          })
        })]
      }), (0, _v17.jsx)(_v356, {
        canSelectMoreVideos: _v6,
        canSelectDuplicates: _v5,
        userId: _v2,
        term: _v13,
        selectedVideos: _v3,
        addedVideos: _v4,
        onSelectVideo: _v7,
        onDeselectVideo: _v8
      }), (0, _v17.jsx)(_v345, {
        canSelectMoreVideos: _v6,
        selectedCount: Object.keys(_v3).length,
        onDismiss: _v10,
        onConfirm: _v9
      })]
    });
  }
  function _v358({
    id: _v0 = (0, _v65.createLiveDomName)("video-picker-modal"),
    className: _v1 = (0, _v65.createLiveDomName)("video-picker-modal"),
    userId: _v2,
    showModal: _v3,
    addedVideos: _v4,
    selectedVideos: _v5,
    canSelectDuplicates: _v6,
    canSelectMoreVideos: _v7,
    onCloseModal: _v8,
    onSelectVideo: _v9,
    onDeselectVideo: _v10,
    onAddVideos: _v11
  }) {
    return (0, _v17.jsxs)(_v58.Modal, {
      size: "lg",
      isOpen: _v3,
      onClose: _v8,
      children: [(0, _v17.jsx)(_v60.ModalOverlay, {}), (0, _v17.jsxs)(_v59.ModalContent, {
        overflow: "hidden",
        children: [(0, _v17.jsx)(_v202.ModalHeader, {
          paddingLeft: (0, _v61.rem)(24),
          children: (0, _v17.jsx)(_v137.Header, {
            size: "md",
            fontWeight: "bold",
            fontSize: "header",
            children: _v66.translations.selectVideos
          })
        }), (0, _v17.jsx)(_v108.ModalCloseButton, {}), (0, _v17.jsx)(_v203.ModalBody, {
          id: (0, _v65.createLiveDomName)(_v0, "body"),
          className: (0, _v65.createLiveDomName)(_v1, "body"),
          display: "flex",
          height: `min(70vh, ${(0, _v61.rem)(800)})`,
          maxHeight: `min(70vh, ${(0, _v61.rem)(800)})`,
          padding: `0 ${(0, _v61.rem)(24)}`,
          overflow: "hidden",
          children: (0, _v17.jsx)(_v357, {
            id: (0, _v65.createLiveDomName)(_v0, "content"),
            className: (0, _v65.createLiveDomName)(_v1, "content"),
            canSelectMoreVideos: _v7,
            canSelectDuplicates: _v6,
            userId: _v2,
            addedVideos: _v4,
            selectedVideos: _v5,
            onCloseModal: _v8,
            onSelectVideo: _v9,
            onDeselectVideo: _v10,
            onAddVideos: _v11
          })
        })]
      })]
    });
  }
  var _v359 = _v0.i(0),
    _v360 = _v0.i(0),
    _v361 = _v0.i(0);
  function _v362({
    children: _v0,
    sceneContext: {
      isHydrated: _v1,
      scenes: _v2,
      sceneInProgram: _v3,
      sceneGetters: _v4,
      sceneActions: _v5,
      scenePrescribersGetters: _v6
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      scenes: _v0,
      isHydrated: _v1,
      sceneInProgram: _v2
    }) => [_v0, _v1, _v2]),
    graphicsContext: {
      graphicsActions: _v7,
      agoraMediaList: _v8
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      agoraMediaList: _v0
    }) => [_v0]),
    userPreferencesContext: {
      tourState: {
        isAnyRtcTourExisting: _v9
      }
    } = (0, _v28.useManager)(_v52.UserPreferencesManager),
    composerSessionContext: {
      sessionInfo: {
        value: _v10
      },
      permissions: _v11
    } = (0, _v28.useManager)(_v63.ComposerSessionManager),
    composerSessionStatusContext: {
      streamMode: _v12,
      liveComposerStatusGetters: _v13
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    notificationsContext: {
      openedModalsIds: _v14,
      notificationActions: _v15
    } = (0, _v28.useManager)(_v359.NotificationManager)
  }) {
    let {
        trackLiveStreamSceneAdded: _v16
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v17 = (0, _v287.useLogger)("LVSNTLCC"),
      _v18 = (0, _v28.useScope)(),
      _v19 = (0, _v80.useLiveGlobals)(),
      _v20 = (0, _v114.useSessionOwnerId)(),
      _v21 = (0, _v21.useRef)(!1),
      _v22 = (0, _v21.useRef)(!1),
      [_v23, _v24] = (0, _v21.useState)({}),
      [_v25, _v26] = (0, _v21.useState)(!1),
      [_v27, _v28] = (0, _v21.useState)(!1),
      [_v29, _v30] = (0, _v21.useState)(!1),
      [_v31, _v32] = (0, _v21.useState)(null),
      _v33 = _v13.isStreaming(),
      _v34 = Object.keys(_v2).length + Object.keys(_v23).length < _v74.graphicsConfig.SCENE.MAX_SCENES_COUNT,
      _v35 = (0, _v21.useMemo)(() => Object.values(_v8).map(_v0 => `/videos/${_v0.videoId}`), [_v8]),
      _v36 = (0, _v21.useMemo)(() => _v14.includes(_v359.EGlobalModalId.VIDEO_PICKER_MODAL) && !_v11.hasExplicitApiMediaManagement, [_v14, _v11.hasExplicitApiMediaManagement]),
      _v37 = (0, _v21.useCallback)(() => {
        _v15.openModalWithId(_v359.EGlobalModalId.VIDEO_PICKER_MODAL);
      }, [_v15]),
      _v38 = (0, _v21.useCallback)(() => {
        _v15.closeModalWithId(_v359.EGlobalModalId.VIDEO_PICKER_MODAL);
      }, [_v15]),
      _v39 = (0, _v21.useCallback)(() => {
        _v38(), _v28(!1), _v24({}), (0, _v128.trackCancelAddingVideo)();
      }, [_v38]),
      _v40 = (0, _v21.useCallback)((_v0, _v1) => {
        _v5.insertNewSceneAfter(_v0.id, _v0).then(_v0 => {
          _v5.setActiveScene(_v0), _v18.emitSignal({
            type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID,
            data: {
              id: _v0.id
            }
          });
        }).finally(() => _v247({
          sceneAddedLocation: _v126.ESceneLocation.DUPLICATE,
          sceneMode: _v1 === _v191.SCHEDULED ? _v126.ESceneMode.SIMULIVE : _v126.ESceneMode.LIVE
        }));
      }, [_v5, _v18]),
      _v41 = (0, _v21.useCallback)(_v0 => {
        _v24(_v0 => ({
          ..._v0,
          [_v0.uri]: _v0
        }));
      }, []),
      _v42 = (0, _v21.useCallback)(_v0 => {
        _v24(_v0 => (0, _v360.omit)(_v0, _v0.uri));
      }, []),
      _v43 = (0, _v21.useCallback)(() => {
        let {
            scenes: _v0
          } = _v18.getContextOf(_v56.SceneManager),
          {
            streamMode: _v1
          } = _v18.getContextOf(_v48.ComposerSessionStatusManager),
          _v2 = Object.values(_v0).filter(_v0 => _v0.meta?.isScheduled),
          _v3 = _v2[0];
        return _v1 === _v39.EComposerStreamModeType.SIMULIVE && _v3 && 1 === _v2.length && _v3.meta?.isScheduled && 0 === Object.keys(_v3.graphics || {}).length ? _v3 : null;
      }, [_v18]),
      _v44 = (0, _v21.useCallback)(() => {
        let {
            scenes: _v0,
            scenesOrder: _v1
          } = _v18.getContextOf(_v56.SceneManager),
          _v2 = (0, _v161.pickSortedScenesList)(_v0, _v1);
        return _v31 ?? (0, _v161.findLastScheduledIndex)(_v2) + 1;
      }, [_v31, _v18]),
      _v45 = (0, _v21.useCallback)(async (_v0, _v1) => {
        _v30(!0);
        let _v2 = await _v5.createScenesOnIndex([{
          name: _v66.translations.video,
          graphics: {
            [_v0]: (0, _v91.createGraphicsDescriptor)({
              graphicType: _v88.EGraphicsDescriptorType.AGORA_MEDIA,
              graphicId: _v0
            })
          },
          meta: (0, _v161.createSceneMetadata)({
            isScheduled: !0,
            media: (0, _v161.createSceneMediaMetadata)({
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }),
            background: _v1
          })
        }], _v44());
        await _v5.setActiveScene(_v2[0]), _v5.setIsEditMode(), _v30(!1);
      }, [_v44, _v5]),
      _v46 = (0, _v21.useCallback)(async () => {
        _v38(), _v30(!0);
        let {
            alreadyCreatedVideos: _v0,
            videosForCreate: _v1
          } = Object.values(_v23).reduce((_v0, _v1) => {
            let _v2 = _v35.find(_v0 => _v0 === _v1.uri);
            if (_v2) {
              let _v0 = Object.values(_v8).find(_v0 => _v2.includes(String(_v0.videoId)));
              _v0 && _v0.alreadyCreatedVideos.push(_v0);
            } else _v0.videosForCreate.push((0, _v90.createGfxFromVimeoVideo)(_v1));
            return _v0;
          }, {
            alreadyCreatedVideos: [],
            videosForCreate: []
          }),
          _v2 = _v0.concat(await _v7.addVideos(_v1)),
          _v3 = _v27 ? _v43()?.id : null,
          {
            scenes: _v4,
            scenesOrder: _v5
          } = _v18.getContextOf(_v56.SceneManager),
          _v6 = _v44(),
          _v7 = await _v5.createScenesOnIndex(_v2.map((_v0, _v1) => ({
            name: `${_v66.translations.video} ${_v3 && 0 === _v1 ? _v4.getSceneNameIncrement() - 1 : _v4.getNextSceneNameIncrement()}`,
            graphics: {
              [_v0.id]: (0, _v91.createGraphicsDescriptor)({
                graphicType: _v88.EGraphicsDescriptorType.AGORA_MEDIA,
                graphicId: _v0.id
              })
            },
            meta: (0, _v161.createSceneMetadata)({
              isScheduled: !0,
              background: (0, _v161.pickNewSceneBackgroundForIndex)(_v4, _v5, _v6),
              media: (0, _v161.createSceneMediaMetadata)({
                status: _v88.EMediaStatus.PAUSE,
                nextOnEOF: !0
              })
            })
          })), _v6);
        if (_v7.length) {
          let _v0 = _v7[0],
            {
              sceneInProgram: _v1
            } = _v18.getContextOf(_v56.SceneManager),
            _v2 = [_v5.setActiveScene(_v0)];
          _v3 && _v2.push(_v5.deleteScene(_v3, _v1 === _v3 ? _v0.id : void 0)), await Promise.all(_v2), _v6 > 0 && _v5.setIsEditMode();
        }
        _v24({}), _v30(!1), _v247({
          sceneAddedLocation: _v31 ? _v126.ESceneLocation.IN_BETWEEN : _v126.ESceneLocation.AT_END,
          sceneMode: _v126.ESceneMode.SIMULIVE
        }), (0, _v128.trackAddVideoToEvent)(), null === _v31 ? _v18.emitSignal({
          type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_LIST_END,
          data: {
            sceneListType: _v191.SCHEDULED
          }
        }) : _v18.emitSignal({
          type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID,
          data: {
            id: (0, _v341.default)(_v7)?.id
          }
        });
      }, [_v38, _v23, _v7, _v27, _v43, _v5, _v44, _v31, _v35, _v8, _v4, _v18]),
      _v47 = (0, _v21.useCallback)(_v0 => {
        _v30(!0), _v5.createScene(_v0).then(_v0 => {
          _v5.setActiveScene(_v0), _v18.emitSignal({
            type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_LIST_END
          }), _v16();
        }).finally(() => {
          _v30(!1), _v247({
            sceneAddedLocation: _v126.ESceneLocation.AT_END,
            sceneMode: _v126.ESceneMode.LIVE
          });
        });
      }, [_v18, _v5, _v16]),
      _v48 = (0, _v21.useCallback)((_v0, _v1, _v2) => {
        let {
          scenes: _v3,
          scenesOrder: _v4
        } = _v18.getContextOf(_v56.SceneManager);
        switch (_v1) {
          case _v191.ALL:
            _v5.runTransaction([_v6.getMoveSceneToIndexPrescriber(_v0, _v2), _v6.getIsSceneScheduledTogglePrescriber(_v0, !1)]);
            break;
          case _v191.SCHEDULED:
            {
              let _v0 = (0, _v161.pickSortedScenesList)(_v3, _v4),
                _v1 = (0, _v161.findLastScheduledIndex)(_v0),
                _v2 = [_v6.getMoveSceneToIndexPrescriber(_v0, (0, _v361.normalizeToRange)(_v2, -1 / 0, _v1 + 1)), _v6.getIsSceneScheduledTogglePrescriber(_v0, !0)];
              (0, _v91.isGraphicTypeAlreadyInScene)(_v88.EGraphicsDescriptorType.AGORA_MEDIA, _v3[_v0]) && _v2.push(..._v6.getAgoraMediaMetaDataPrescriber(_v0, {
                nextOnEOF: !0,
                loop: null
              })), _v5.runTransaction(_v2);
              break;
            }
          case _v191.LIVE:
            {
              let _v0 = (0, _v161.pickSortedScenesList)(_v3, _v4),
                _v1 = (0, _v161.findLastScheduledIndex)(_v0) + 1;
              _v5.runTransaction([_v6.getMoveSceneToIndexPrescriber(_v0, _v2 + _v1), _v6.getIsSceneScheduledTogglePrescriber(_v0, !1)]);
            }
        }
        _v246("move_scene", {
          sceneMode: _v1 === _v191.SCHEDULED ? _v126.ESceneMode.SIMULIVE : _v126.ESceneMode.LIVE
        });
      }, [_v18, _v5, _v6]),
      _v49 = (0, _v21.useCallback)((_v0, _v1, _v2) => {
        let {
            scenes: _v3,
            scenesOrder: _v4
          } = _v18.getContextOf(_v56.SceneManager),
          _v5 = (0, _v161.pickSortedScenesList)(_v3, _v4),
          _v6 = _v2;
        _v1 === _v191.SCHEDULED ? _v6 = (0, _v361.normalizeToRange)(_v2, -1 / 0, (0, _v161.findLastScheduledIndex)(_v5)) : _v1 === _v191.LIVE && (_v6 = _v2 + (0, _v161.findLastScheduledIndex)(_v5) + 2);
        let _v7 = 1 === _v0.length ? _v0[0] : null;
        _v7 && !_v7.meta?.background && (_v7.meta = _v7.meta || {}, _v7.meta.background = (0, _v161.pickNewSceneBackgroundForIndex)(_v3, _v4, _v6)), _v5.createScenesOnIndex(_v0, _v6).then(_v0 => {
          _v0.length && _v5.setActiveScene(_v0[0]), _v18.emitSignal({
            type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID,
            data: {
              id: (0, _v341.default)(_v0)?.id
            }
          }), _v16();
        }).finally(() => {
          _v247({
            sceneAddedLocation: _v126.ESceneLocation.IN_BETWEEN,
            sceneMode: _v1 === _v191.SCHEDULED ? _v126.ESceneMode.SIMULIVE : _v126.ESceneMode.LIVE
          });
        });
      }, [_v18, _v5, _v16]);
    return (0, _v21.useEffect)(() => _v18.subscribeToSignals(_v0 => {
      switch (_v0.type) {
        case _v51.ESceneCreateActionsSignal.CREATE_SCENE:
          {
            let {
              data: _v0,
              data: {
                graphics: _v1,
                meta: _v2
              }
            } = _v0;
            if (_v5.setIsEditMode(), _v0.sceneListType === _v191.SCHEDULED) _v1 ? _v45(_v1.graphicId, _v2?.background) : (_v37(), _v32(null));else {
              let _v0 = {};
              _v1 && (_v0.graphics = (0, _v91.wrapGraphicsDescriptorsToSceneGraphicsList)([(0, _v91.createGraphicsDescriptor)({
                graphicType: _v1.graphicType,
                graphicId: _v1.graphicId
              })])), _v2 && (_v0.meta = (0, _v161.createSceneMetadata)(_v2)), _v47(_v0);
            }
            break;
          }
        case _v51.ESceneCreateActionsSignal.MOVE_SCENE_TO_INDEX_OF_LIST:
          {
            let {
              data: {
                sceneId: _v0,
                sceneListType: _v1,
                targetIndex: _v2
              }
            } = _v0;
            _v48(_v0, _v1, _v2);
            break;
          }
        case _v51.ESceneCreateActionsSignal.INSERT_SCENES_ON_INDEX:
          {
            let {
              data: {
                index: _v0,
                sceneListType: _v1
              }
            } = _v0;
            _v1 === _v191.SCHEDULED ? (_v37(), _v32(_v0 + 1)) : _v1 === _v191.LIVE ? _v49([{}], _v1, _v0) : _v1 === _v191.ALL && _v49([{}], _v1, _v0 + 1);
            break;
          }
        case _v51.ESceneCreateActionsSignal.DUPLICATE_SCENE:
          {
            let {
              data: {
                scene: _v0,
                sceneListType: _v1
              }
            } = _v0;
            _v40(_v0, _v1);
            break;
          }
        case _v51.ESceneCreateActionsSignal.INITIALIZE_SCENES:
          {
            let {
                scenes: _v0
              } = _v18.getContextOf(_v56.SceneManager),
              {
                streamMode: _v1
              } = _v18.getContextOf(_v48.ComposerSessionStatusManager),
              {
                creation: _v2
              } = _v19.initialState;
            if (_v2?.targetVideoGraphicPreset || Object.keys(_v0).length >= _v74.graphicsConfig.SCENE.MAX_SCENES_COUNT) return;
            (0, _v84.inline)(() => {
              let _v0 = Object.values(_v0).some(_v0 => _v0.meta?.isScheduled),
                _v1 = Object.values(_v0).some(_v0 => !_v0.meta?.isScheduled),
                _v2 = Object.values(_v0)[0];
              switch (_v1) {
                case _v39.EComposerStreamModeType.LIVE:
                case _v39.EComposerStreamModeType.RECORD:
                  _v1 || _v21.current ? _v1 && _v2 && !_v3 && _v5.pushSceneToProgram(_v2.id, {
                    isCloudProvisionRequired: !1
                  }) : (_v21.current = !0, _v5.createDefaultScene().then(_v0 => {
                    _v5.pushSceneToProgram(_v0.id, {
                      isCloudProvisionRequired: !1
                    });
                  }));
                  break;
                case _v39.EComposerStreamModeType.SIMULIVE:
                  _v0 || _v22.current || (_v22.current = !0, _v5.createDefaultScene({
                    name: `${_v66.translations.video} ${_v4.getNextSceneNameIncrement()}`,
                    meta: (0, _v161.createSceneMetadata)({
                      isScheduled: !0,
                      media: (0, _v161.createSceneMediaMetadata)({
                        nextOnEOF: !0
                      })
                    })
                  }).then(_v0 => {
                    _v5.pushSceneToProgram(_v0.id, {
                      isCloudProvisionRequired: !1
                    });
                  }).then(() => {
                    _v9 || null === _v10 || (_v37(), _v28(!0));
                  }));
                  break;
                default:
                  return null;
              }
            });
            let _v3 = Object.values(_v0).filter(_v0 => !_v0.meta?.isScheduled);
            _v3.every(_v0 => 0 === Object.keys(_v0.graphics || {}).length) && _v1 === _v39.EComposerStreamModeType.SIMULIVE && _v5.deleteScenes(_v3.map(_v0 => _v0.id));
          }
      }
    }), [_v18, _v5, _v48, _v40, _v47, _v49, _v10, _v9, _v19.initialState, _v45, _v4, _v6, _v37, _v33, _v3]), (0, _v21.useEffect)(() => {
      _v26(!1);
    }, [_v12]), (0, _v21.useEffect)(() => {
      let _v0 = _v1 && null !== _v12;
      _v25 || _v0 && (_v26(!0), _v18.emitSignal({
        type: _v51.ESceneCreateActionsSignal.INITIALIZE_SCENES
      }));
    }, [_v1, _v25, _v5, _v18, _v19, _v12]), (0, _v21.useEffect)(() => {
      _v25 && _v43() && !_v9 && null !== _v10 && (_v17.info("Opening video picker modal on page init"), _v37(), _v28(!0));
    }, [_v43, _v25, _v10, _v12]), (0, _v17.jsxs)(_v17.Fragment, {
      children: [_v0, (0, _v17.jsx)(_v358, {
        showModal: _v36,
        userId: _v20,
        addedVideos: _v35,
        selectedVideos: _v23,
        canSelectDuplicates: !0,
        canSelectMoreVideos: _v34,
        onSelectVideo: _v41,
        onCloseModal: _v39,
        onDeselectVideo: _v42,
        onAddVideos: _v46
      }), _v29 ? (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
        className: (0, _v65.createLiveDomName)("creation-loader"),
        opacity: 0
      }) : null]
    });
  }
  _v0.i(0);
  var _v363 = _v0.i(0),
    _v364 = _v0.i(0),
    _v365 = _v0.i(0),
    _v366 = _v0.i(0),
    _v367 = _v0.i(0),
    _v368 = _v0.i(0),
    _v369 = _v0.i(0);
  function _v370({
    onDropGraphics: _v0,
    type: _v1,
    onDrop: _v2,
    isLiveEmptyList: _v3 = !1
  }) {
    let [_v4, _v5] = (0, _v21.useState)(!1),
      [_v6, _v7] = (0, _v21.useState)(!1),
      _v8 = (0, _v21.useCallback)(() => {
        _v5(!1), _v7(!1);
      }, [_v5, _v7]),
      _v9 = (0, _v21.useCallback)(_v0 => {
        if ((0, _v368.stopEventPropagationPreventDefault)(_v0), _v4) {
          let {
              dataTransfer: _v0
            } = _v0,
            {
              graphicType: _v1,
              id: _v2
            } = _v133(_v0);
          return _v5(!1), _v0(_v2, _v1);
        }
        _v2 && _v2(_v0);
      }, [_v0, _v4, _v2]),
      _v10 = (0, _v21.useCallback)(_v0 => {
        (0, _v368.stopEventPropagationPreventDefault)(_v0);
        let {
          types: _v1
        } = _v0.dataTransfer;
        _v1.includes(_v129.GRAPHIC) && (_v1 !== _v191.SCHEDULED || _v1.includes(_v129.AGORA_MEDIA)) ? _v5(!0) : (_v3 && (_v0.dataTransfer.types.includes(_v129.SCENE_CAN_BE_SCHEDULED) || _v0.dataTransfer.types.includes(_v129.TEMPLATE)) || _v0.dataTransfer.types.includes(_v129.TEMPLATE_ITEM)) && _v7(!0);
      }, [_v3, _v1]);
    return {
      onDragLeaveFromElement: _v8,
      activeGraphicDropState: _v4,
      setActiveGraphicDropState: _v5,
      onDragDrop: _v9,
      onBoxDragOver: _v10,
      activeScenesDropState: _v6
    };
  }
  function _v371({
    className: _v0 = (0, _v65.createLiveDomName)("scenes-timeline-creation-box"),
    tourPointClassName: _v1,
    type: _v2 = _v191.ALL,
    title: _v3,
    isLoading: _v4,
    isDisabled: _v5,
    withLeftMargin: _v6,
    createButtonRef: _v7,
    onClick: _v8,
    onDrop: _v9,
    onDropGraphics: _v10
  }) {
    let {
        onDragLeaveFromElement: _v11,
        activeGraphicDropState: _v12,
        onDragDrop: _v13,
        onBoxDragOver: _v14
      } = _v370({
        onDropGraphics: _v10,
        type: _v2,
        onDrop: _v9
      }),
      _v15 = (0, _v233.useColorModeValue)("#E6EBEC", "grayscale.800"),
      _v16 = !!(_v12 && !_v5);
    return (0, _v17.jsxs)(_v95.Flex, {
      ref: _v7,
      className: _v0,
      "data-type": _v2,
      position: "relative",
      direction: "column",
      opacity: _v5 ? "60%" : "100%",
      cursor: _v5 ? "not-allowed" : _v8 ? "pointer" : "default",
      margin: `0 ${(0, _v61.rem)(20)} 0 0`,
      minWidth: (0, _v61.rem)(120),
      shrink: 0,
      borderRadius: (0, _v61.rem)(8),
      border: "1px solid",
      borderColor: "stroke",
      background: "surface",
      overflow: "hidden",
      marginLeft: _v6 ? (0, _v61.rem)(8) : void 0,
      height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
      _hover: {
        background: _v15
      },
      onDragOver: _v5 ? void 0 : _v14,
      onDrop: _v5 ? void 0 : _v13,
      onDragLeave: _v11,
      children: [(0, _v17.jsxs)(_v95.Flex, {
        className: `${(0, _v65.createLiveDomName)(_v0, "card")} ${_v1}`,
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100%",
        height: "100%",
        borderRadius: (0, _v61.rem)(8),
        cursor: "pointer",
        background: _v16 ? "rgba(0, 173, 239, 0.2)" : "transparent",
        border: _v16 ? "dashed" : "none",
        borderWidth: (0, _v61.rem)(2),
        borderColor: _v16 ? "blue.500" : "stroke",
        userSelect: "none",
        color: _v16 ? "blue.500" : "text-secondary",
        onClick: _v4 || _v5 ? void 0 : _v8,
        children: [(0, _v17.jsx)(_v369.Plus, {}), (0, _v17.jsx)(_v137.Header, {
          size: "xs",
          marginTop: (0, _v61.rem)(4),
          pointerEvents: "none",
          children: _v3
        })]
      }), _v5 ? (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
        className: (0, _v65.createLiveDomName)(_v0, "block"),
        overlayColor: "transparent",
        opacity: 1
      }) : null]
    });
  }
  function _v372({
    className: _v0,
    type: _v1,
    onCreateNewScene: _v2,
    onDropGraphics: _v3,
    onDrop: _v4
  }) {
    let {
        onDragLeaveFromElement: _v5,
        activeGraphicDropState: _v6,
        onDragDrop: _v7,
        onBoxDragOver: _v8,
        activeScenesDropState: _v9
      } = _v370({
        onDropGraphics: _v3,
        type: _v1,
        onDrop: _v4,
        isLiveEmptyList: !0
      }),
      _v10 = (0, _v233.useColorModeValue)("#E6EBEC", "grayscale.800"),
      _v11 = !!(_v6 || _v9);
    return (0, _v17.jsx)(_v95.Flex, {
      position: "relative",
      direction: "column",
      grow: 1,
      height: "100%",
      children: (0, _v17.jsxs)(_v95.Flex, {
        className: _v0,
        direction: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: (0, _v61.rem)(8),
        cursor: "pointer",
        width: (0, _v61.rem)(120),
        height: "100%",
        fontSize: (0, _v61.rem)(14),
        backgroundColor: "surface",
        filter: "opacity(0.6)",
        border: "dashed",
        borderWidth: _v11 ? (0, _v61.rem)(2) : (0, _v61.rem)(1),
        borderColor: _v11 ? "blue.500" : "stroke",
        color: _v11 ? "blue.500" : "text-secondary",
        _hover: {
          background: _v10
        },
        onDragLeave: _v5,
        onDrop: _v7,
        onClick: _v2,
        onDragOver: _v8,
        children: [(0, _v17.jsx)(_v95.Flex, {
          marginBottom: (0, _v61.rem)(4),
          children: (0, _v17.jsx)(_v369.Plus, {})
        }), (0, _v17.jsx)(_v95.Flex, {
          textAlign: "center",
          fontWeight: "bold",
          maxWidth: (0, _v61.rem)(70),
          lineHeight: (0, _v61.rem)(18),
          children: _v66.translations.addLiveSegment
        })]
      })
    });
  }
  var _v373 = _v0.i(0),
    _v374 = _v0.i(0),
    _v375 = _v0.i(0),
    _v376 = _v0.i(0),
    _v377 = _v0.i(0),
    _v378 = _v0.i(0);
  function _v379({
    className: _v0 = (0, _v65.createLiveDomName)("scenes-timeline-editable-controls"),
    display: _v1 = "flex",
    isSimulive: _v2,
    canEdit: _v3,
    canDelete: _v4,
    canDuplicate: _v5,
    onEdit: _v6,
    onDuplicate: _v7,
    onDelete: _v8
  }) {
    let {
      isOpen: _v9,
      onOpenPopover: _v10,
      onClosePopover: _v11
    } = (0, _v236.useControlledPopover)();
    return (0, _v17.jsx)(_v95.Flex, {
      className: _v0,
      display: _v9 ? "flex" : _v1,
      position: "absolute",
      top: 0,
      right: 0,
      background: _v2 ? "surface" : "background",
      width: (0, _v61.rem)(30),
      justifyContent: "flex-end",
      alignItems: "center",
      children: (0, _v17.jsxs)(_v373.Menu, {
        isOpen: _v9,
        placement: "bottom",
        gutter: 2,
        closeOnSelect: !0,
        onOpen: _v10,
        onClose: _v11,
        children: [(0, _v17.jsx)(_v374.MenuButton, {
          as: _v213.IconButton,
          "aria-label": "options",
          position: "relative",
          icon: (0, _v17.jsx)(_v378.EllipsisV, {}),
          size: "xs",
          variant: "tertiary"
        }), (0, _v17.jsx)(_v377.Portal, {
          children: (0, _v17.jsxs)(_v376.MenuList, {
            motionProps: {
              variants: {
                enter: {
                  visibility: "visible",
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: .2,
                    ease: [.4, 0, .2, 1]
                  }
                },
                exit: {
                  transitionEnd: {
                    visibility: "hidden"
                  },
                  opacity: 0,
                  scale: .8,
                  transition: {
                    duration: 0
                  }
                }
              }
            },
            children: [(0, _v17.jsx)(_v375.MenuItem, {
              isDisabled: !_v3,
              onClick: _v6,
              children: _v66.translations.editScene
            }), (0, _v17.jsx)(_v375.MenuItem, {
              isDisabled: !_v5,
              onClick: _v7,
              children: _v66.translations.duplicate
            }), (0, _v17.jsx)(_v375.MenuItem, {
              isDisabled: !_v4,
              onClick: _v8,
              children: _v66.translations.delete
            })]
          })
        })]
      })
    });
  }
  var _v380 = _v0.i(0),
    _v381 = _v0.i(0),
    _v382 = _v0.i(0),
    _v383 = _v0.i(0),
    _v384 = _v0.i(0),
    _v385 = ((_v6 = {}).SCROLL_START = "SCROLL_START", _v6.SCROLL_END = "SCROLL_END", _v6.CHECK_SCROLL = "CHECK_SCROLL", _v6);
  function _v386({
    className: _v0,
    content: _v1 = "",
    onHandleSave: _v2,
    maxLength: _v3,
    resetOnEmpty: _v4,
    placeholder: _v5,
    onEditStartCallback: _v6,
    onEditEndCallback: _v7,
    ..._v8
  }) {
    let _v9 = (0, _v21.useRef)(null),
      _v10 = (0, _v21.useRef)(null),
      [_v11, _v12] = (0, _v21.useState)(_v1),
      [_v13, _v14] = (0, _v21.useState)(_v1),
      {
        subscribe: _v15,
        emit: _v16
      } = _v339(),
      {
        isOpen: _v17,
        onOpen: _v18,
        onClose: _v19
      } = (0, _v201.useDisclosure)(),
      {
        isOpen: _v20,
        onOpen: _v21,
        onClose: _v22
      } = (0, _v201.useDisclosure)({
        onOpen: () => {
          _v19(), _v6 && _v6();
        },
        onClose: () => {
          _v7 && _v7();
        }
      }),
      _v23 = {
        Enter: _v0 => {
          _v0.preventDefault(), _v10.current?.blur();
        }
      },
      _v24 = (0, _v21.useCallback)(() => {
        _v10.current && _v9.current && (_v10.current.style.height = "auto", _v10.current.style.height = `${_v10.current.scrollHeight}px`, _v9.current.style.height = `${_v10.current.scrollHeight}px`);
      }, []),
      _v25 = (0, _v21.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation();
        let _v1 = _v0.currentTarget;
        _v1.scrollWidth > _v1.clientWidth && _v18();
      }, [_v18]),
      _v26 = (0, _v21.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v19(), _v16(_v385.CHECK_SCROLL, {
          element: _v0.currentTarget,
          onVisibleCallback: _v21
        });
      }, [_v19, _v21, _v16]);
    return (0, _v21.useEffect)(() => {
      _v24();
    }, [_v24, _v1]), (0, _v21.useEffect)(() => {
      _v12(_v1), _v14(_v1);
    }, [_v1]), (0, _v21.useEffect)(() => {
      if (_v20) return _v15(_v385.SCROLL_START, _v22);
    }, [_v20, _v22, _v19, _v15]), (0, _v17.jsxs)(_v95.Flex, {
      flexDirection: "column",
      justifyContent: "flex-start",
      width: "100%",
      position: "relative",
      children: [_v20 ? null : (0, _v17.jsx)(_v214.BokehTooltip, {
        isOpen: _v17,
        label: _v11,
        placement: "bottom",
        children: (0, _v17.jsx)(_v109.Text, {
          size: "xs",
          variant: "body-sm",
          letterSpacing: "normal",
          textAlign: "center",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          padding: `${(0, _v61.rem)(4)} ${(0, _v61.rem)(8)}`,
          width: "100%",
          onMouseEnter: _v25,
          onMouseLeave: _v19,
          onClick: _v26,
          children: _v11
        })
      }), (0, _v17.jsxs)(_v381.Popover, {
        isOpen: _v20,
        gutter: 0,
        placement: "bottom",
        flip: !1,
        closeOnBlur: !1,
        modifiers: [{
          name: "applyStyles",
          phase: "write",
          enabled: !0,
          fn({
            state: _v0
          }) {
            Object.entries({
              ..._v0.styles.popper,
              zIndex: 0
            }).map(([_v0, _v1]) => {
              _v0.elements.popper.style[_v0] = _v1;
            });
          }
        }, {
          name: "focusEditorOnOpen",
          enabled: !0,
          phase: "afterWrite",
          fn() {
            _v10.current && _v10.current.focus();
          }
        }],
        onOpen: _v21,
        onClose: _v22,
        children: [(0, _v17.jsx)(_v384.PopoverAnchor, {
          children: (0, _v17.jsx)(_v106.Box, {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0
          })
        }), (0, _v17.jsx)(_v377.Portal, {
          children: (0, _v17.jsx)(_v382.PopoverContent, {
            padding: 0,
            backgroundColor: "transparent!important",
            backdropFilter: "none",
            boxShadow: "none",
            borderRadius: 0,
            children: (0, _v17.jsx)(_v383.PopoverBody, {
              ref: _v9,
              children: (0, _v17.jsx)(_v380.Textarea, {
                ref: _v10,
                autoFocus: !0,
                maxLength: _v3,
                rows: 1,
                lineHeight: 1.2,
                value: _v11,
                className: _v0,
                placeholder: _v5,
                border: "none",
                resize: "none",
                fontSize: (0, _v61.rem)(12),
                padding: `${(0, _v61.rem)(4)} ${(0, _v61.rem)(8)}`,
                borderRadius: (0, _v61.rem)(6),
                color: "text-primary",
                overflow: "hidden",
                width: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_WIDTH),
                whiteSpace: "pre-wrap",
                textAlign: "center",
                outlineOffset: (0, _v61.rem)(2),
                transition: "height 0.4s ease-in-out",
                onBlur: () => {
                  if (_v22(), _v11 === _v13) return;
                  let _v0 = _v11.trim();
                  0 === _v0.length && _v4 ? (_v12(_v13), _v10.current && (_v10.current.value = _v13)) : _v2 && (_v2(_v0), _v14(_v0));
                },
                onFocus: _v24,
                onKeyUp: _v24,
                onKeyDown: _v0 => {
                  let {
                      key: _v1
                    } = _v0,
                    _v2 = _v23[_v1];
                  _v2 && _v2(_v0), _v24();
                },
                onChange: _v0 => {
                  _v12(_v0?.currentTarget?.value || "");
                },
                onPaste: _v0 => {
                  _v0.preventDefault();
                  let _v1 = _v0.clipboardData.getData("Text").replace(/[\r\n\v]+/g, " ");
                  document.execCommand("insertHTML", !1, _v1);
                },
                onDrop: _v0 => (_v0.preventDefault(), !1),
                ..._v8
              })
            })
          })
        })]
      })]
    });
  }
  function _v387({
    children: _v0,
    className: _v1,
    sceneTitle: _v2,
    isSimulive: _v3,
    canEdit: _v4,
    canDuplicate: _v5,
    canDelete: _v6,
    onHandleSave: _v7,
    onEdit: _v8,
    onDuplicate: _v9,
    onDelete: _v10
  }) {
    let {
        isOpen: _v11,
        onOpen: _v12,
        onClose: _v13
      } = (0, _v201.useDisclosure)(),
      {
        isOpen: _v14,
        onOpen: _v15,
        onClose: _v16
      } = (0, _v201.useDisclosure)();
    return (0, _v17.jsxs)(_v106.Box, {
      onMouseEnter: _v12,
      onMouseLeave: _v13,
      children: [_v0, (0, _v17.jsxs)(_v95.Flex, {
        className: (0, _v65.createLiveDomName)(_v1, "scene-title"),
        alignItems: "flex-start",
        textAlign: "center",
        position: "relative",
        fontSize: (0, _v61.rem)(14),
        marginTop: (0, _v61.rem)(12),
        columnGap: (0, _v61.rem)(8),
        maxWidth: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_WIDTH),
        children: [(0, _v17.jsx)(_v386, {
          content: _v2,
          maxLength: 36,
          resetOnEmpty: !0,
          onHandleSave: _v7,
          onEditStartCallback: _v15,
          onEditEndCallback: _v16
        }), (0, _v17.jsx)(_v379, {
          className: (0, _v65.createLiveDomName)(_v1, "editable-controls"),
          display: _v11 && !_v14 ? "flex" : "none",
          isSimulive: _v3,
          canEdit: _v4,
          canDuplicate: _v5,
          canDelete: _v6,
          onEdit: _v8,
          onDuplicate: _v9,
          onDelete: _v10
        })]
      })]
    });
  }
  let _v388 = _v0 => (0, _v17.jsx)(_v196.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v17.jsx)("path", {
      d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Zm4 11h-3v3c0 .6-.4 1-1 1s-1-.4-1-1v-3H8c-.6 0-1-.4-1-1s.4-1 1-1h3V8c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1 .4 1 1s-.4 1-1 1Z",
      fill: "currentColor"
    })
  });
  var _v389 = _v65;
  let _v390 = (0, _v21.memo)(({
    id: _v0,
    className: _v1 = (0, _v389.createLiveDomName)("scenes-timeline-drop-pipe"),
    isDisplayed: _v2,
    canCreateNewScenes: _v3,
    onDragDrop: _v4,
    onClick: _v5
  }) => {
    let [_v6, _v7] = (0, _v21.useState)(!1),
      [_v8, _v9] = (0, _v21.useState)(!1),
      _v10 = (0, _v21.useCallback)(_v0 => {
        _v7(!1), _v4(_v0);
      }, [_v4]),
      _v11 = (0, _v21.useCallback)(_v0 => {
        _v7(!0), (0, _v368.stopEventPropagationPreventDefault)(_v0);
      }, []),
      _v12 = (0, _v21.useCallback)(() => {
        _v7(!1);
      }, []),
      _v13 = (0, _v21.useCallback)(() => {
        _v3 && _v9(!0);
      }, [_v3]),
      _v14 = (0, _v21.useCallback)(() => {
        _v9(!1), _v7(!1);
      }, []);
    (0, _v21.useEffect)(() => {
      let _v0 = _v8 ? setTimeout(() => _v7(!0), 150) : null;
      return () => _v0 ? clearTimeout(_v0) : void 0;
    }, [_v8]);
    let _v15 = (0, _v17.jsx)(_v95.Flex, {
      className: (0, _v389.createLiveDomName)(_v1, "icon"),
      width: (0, _v61.rem)(2),
      height: "100%",
      background: "text-primary",
      position: "relative",
      pointerEvents: "none",
      children: (0, _v17.jsx)(_v138.Center, {
        borderRadius: "50%",
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
        height: (0, _v61.rem)(20),
        width: (0, _v61.rem)(20),
        background: "surface",
        pointerEvents: "none",
        children: (0, _v17.jsx)(_v388, {
          color: "text-primary"
        })
      })
    });
    return _v2 ? (0, _v17.jsx)(_v138.Center, {
      id: _v0,
      className: _v1,
      width: (0, _v61.rem)(32),
      height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
      background: "transparent",
      onDrop: _v10,
      onDragOver: _v11,
      onDragLeave: _v12,
      onMouseEnter: _v13,
      onMouseLeave: _v14,
      onClick: _v3 ? _v5 : void 0,
      children: _v15
    }) : (0, _v17.jsx)(_v138.Center, {
      id: _v0,
      className: _v1,
      width: (0, _v61.rem)(_v6 ? 32 : 12),
      height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
      background: "transparent",
      cursor: _v6 ? "pointer" : "initial",
      onMouseEnter: _v13,
      onMouseLeave: _v14,
      onClick: _v3 ? _v5 : void 0,
      children: _v6 ? _v15 : null
    });
  });
  var _v391 = ((_v7 = {}).COPY = "copy", _v7.LINK = "link", _v7.MOVE = "move", _v7.NONE = "none", _v7);
  function _v392({
    id: _v0 = (0, _v65.createLiveDomName)("scenes-timeline-controls"),
    className: _v1 = (0, _v65.createLiveDomName)("scenes-timeline-controls"),
    isLive: _v2,
    canPush: _v3
  }) {
    return _v2 && _v3 ? (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      display: "none",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 100,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "blackAlpha.700",
      borderRadius: (0, _v61.rem)(8),
      children: (0, _v17.jsx)(_v109.Text, {
        variant: "heading-xs",
        color: "white",
        children: _v66.translations.sendLive
      })
    }) : null;
  }
  function _v393({
    className: _v0 = (0, _v65.createLiveDomName)("scenes-timeline-preview"),
    id: _v1,
    children: _v2,
    index: _v3,
    type: _v4,
    scene: _v5,
    overlayColor: _v6,
    canPush: _v7,
    canSelect: _v8,
    isLive: _v9,
    isDragging: _v10,
    onSetVisibleDropZoneIndex: _v11,
    onSelect: _v12,
    onDragDropBetweenScenes: _v13,
    onDragStart: _v14,
    onDragEnd: _v15,
    onPush: _v16,
    onGraphicDrop: _v17
  }) {
    let [_v18, _v19] = (0, _v21.useState)(!1),
      [_v20, _v21] = (0, _v21.useState)(!1),
      _v22 = (0, _v21.useRef)(null),
      _v23 = (0, _v21.useCallback)(() => {
        _v21(!1), _v19(!1);
      }, [_v19]),
      _v24 = (0, _v21.useCallback)(_v0 => _v12(_v0, _v5), [_v12, _v5]),
      _v25 = (0, _v21.useCallback)(_v0 => {
        let {
            dataTransfer: _v1
          } = _v0,
          _v2 = !!(_v4 === _v191.SCHEDULED || (0, _v161.canBeScheduledScene)(_v5));
        _v14(), _v1.dropEffect = _v391.MOVE, _v131({
          dataTransfer: _v1,
          type: _v129.SCENE,
          textData: _v5.id,
          [_v129.SCENE_CAN_BE_SCHEDULED]: _v2
        });
      }, [_v4, _v5, _v14]),
      _v26 = (0, _v21.useCallback)(_v0 => {
        if ((0, _v368.stopEventPropagationPreventDefault)(_v0), _v0.dataTransfer.types.includes(_v129.GRAPHIC) && (_v4 !== _v191.SCHEDULED || _v0.dataTransfer.types.includes(_v129.AGORA_MEDIA))) return (0, _v91.findConflictingGraphicsWithType)(Object.entries(_v130).find(([_v0, _v1]) => _v0.dataTransfer.types.find(_v0 => _v0 === _v1))?.[0], _v5).length > 0 && _v21(!0), _v19(!0);
        if (_v0.dataTransfer.types.includes(_v129.TEMPLATE) || _v0.dataTransfer.types.includes(_v129.TEMPLATE_ITEM)) ;else if (!_v0.dataTransfer.types.includes(_v129.SCENE)) return _v0.dataTransfer.dropEffect = _v391.NONE;else if (_v4 === _v191.SCHEDULED && !_v0.dataTransfer.types.includes(_v129.SCENE_CAN_BE_SCHEDULED)) return;
        if (_v22.current) {
          let {
              left: _v0,
              right: _v1
            } = _v22.current.getBoundingClientRect(),
            {
              clientX: _v2
            } = _v0,
            _v3 = _v2 - (_v1 - _v0) / 2 > _v0 ? "right" : "left";
          "left" === _v3 && 0 === _v3 ? _v11(-1) : "left" === _v3 && _v3 > 0 ? _v11(_v3 - 1) : _v11(_v3);
        }
      }, [_v3, _v11, _v4, _v5]),
      _v27 = (0, _v21.useCallback)(_v0 => {
        let {
          dataTransfer: _v1
        } = _v0;
        if ((0, _v368.stopEventPropagationPreventDefault)(_v0), _v18) {
          let {
            graphicType: _v0,
            id: _v1
          } = _v133(_v1);
          return _v17(_v5, _v1, _v0), _v21(!1), _v19(!1);
        }
        _v132(_v1) !== _v5.id && _v13(_v0);
      }, [_v5, _v13, _v18, _v17]),
      _v28 = (0, _v21.useMemo)(() => _v7 ? _v16 : _v8 ? _v24 : _v64.CallablePlaceholder, [_v7, _v16, _v8, _v24]),
      _v29 = (0, _v21.useMemo)(() => {
        let _v0 = _v18 ? _v136.FOCUSED_STATE_COLOR : _v6,
          _v1 = 2;
        return _v0 === _v136.NONE_LAYOUT_COLOR && (_v0 = _v136.NONE_LAYOUT_COLOR, _v1 = 0), {
          color: _v0,
          width: _v1,
          size: "md",
          borderRadius: "md",
          borderStyle: _v18 ? "dashed" : "solid",
          backgroundColor: _v18 ? `${_v136.PREVIEW_LAYOUT_COLOR}50` : "transparent",
          backdropFilter: _v18 ? "blur(10px)" : void 0
        };
      }, [_v6, _v18]);
    return (0, _v17.jsxs)(_v95.Flex, {
      id: _v1,
      className: _v0,
      ref: _v22,
      draggable: !0,
      flexShrink: 0,
      position: "relative",
      borderRadius: (0, _v61.rem)(8),
      color: "text-primary",
      fontSize: (0, _v61.rem)(18),
      cursor: "pointer",
      width: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_WIDTH),
      height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
      opacity: _v10 ? .5 : 1,
      sx: {
        [`&:hover .${(0, _v65.createLiveDomName)(_v0, "controls")}`]: {
          display: "flex"
        },
        "&:last-child": {
          marginRight: (0, _v61.rem)(16)
        }
      },
      onDragStart: _v25,
      onDragEnd: _v15,
      onDragOver: _v26,
      onDragLeave: _v23,
      onDrop: _v27,
      onClick: _v28,
      onContextMenu: _v64.StopPropagation,
      children: [_v2, (0, _v17.jsx)(_v312.SceneItemOverlay, {
        ..._v29,
        children: _v20 && _v18 ? (0, _v17.jsx)(_v140, {
          dragOverState: _v141.REPLACE
        }) : null
      }), _v10 ? null : (0, _v17.jsx)(_v392, {
        id: (0, _v65.createLiveDomName)(_v0, "controls"),
        className: (0, _v65.createLiveDomName)(_v0, "controls"),
        isLive: _v9,
        canPush: _v7
      })]
    });
  }
  var _v394 = _v0.i(0),
    _v395 = _v0.i(0);
  function _v396({
    id: _v0,
    className: _v1 = (0, _v65.createLiveDomName)("scenes-timeline-list"),
    type: _v2 = _v191.ALL,
    sceneContext: {
      scenes: _v3,
      scenesOrder: _v4,
      activeScene: _v5,
      sceneActions: _v6,
      sceneInProgram: _v7,
      isHydrated: _v8
    } = (0, _v28.useManager)(_v56.SceneManager),
    graphicsContext: {
      agoraMediaList: _v9,
      fullscreenList: _v10,
      slidesList: _v11,
      additionalInformation: _v12,
      theme: _v13
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      agoraMediaList: _v0,
      fullscreenList: _v1,
      slidesList: _v2,
      additionalInformation: _v3,
      theme: _v4
    }) => [_v0, _v1, _v2, _v3.broadcaster, _v4]),
    guestContext: {
      guests: _v14
    } = (0, _v28.useManager)(_v146.GuestsManager, ({
      guests: _v0
    }) => [_v0]),
    composerSessionContext: {
      permissions: _v15
    } = (0, _v28.useManager)(_v63.ComposerSessionManager, ({
      permissions: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      ingestStatus: _v16,
      streamMode: _v17
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0,
      recordState: _v1,
      streamMode: _v2
    }) => [_v0, _v1, _v2]),
    screenShareContext: {
      activeScreenShareId: _v18
    } = (0, _v28.useManager)(_v180.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    remoteMediaContext: {
      roomMedia: _v19
    } = (0, _v28.useManager)(_v184.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    localMediaContext: {
      screen: _v20
    } = (0, _v28.useManager)(_v183.LocalMediaManager, ({
      screen: _v0
    }) => [_v0]),
    composerSettingsContext: {
      isRecordingPaused: _v21
    } = (0, _v28.useManager)(_v50.ComposerSettingsManager)
  }) {
    let _v22 = (0, _v287.useLogger)("LiveScenesTimelineList"),
      _v23 = (0, _v28.useScope)(),
      _v24 = (0, _v160.useSimpleNotification)(),
      [_v25, _v26] = (0, _v21.useState)(!1),
      [_v27, _v28] = (0, _v21.useState)(!1),
      [_v29, _v30] = (0, _v21.useState)(null),
      _v31 = (0, _v21.useRef)(0),
      _v32 = _v16 === _v53.EIngestStatus.STREAMING,
      _v33 = _v16 === _v53.EIngestStatus.ENDED,
      _v34 = _v16 === _v53.EIngestStatus.STREAMING && _v17 === _v39.EComposerStreamModeType.RECORD,
      _v35 = _v17 === _v39.EComposerStreamModeType.SIMULIVE,
      _v36 = _v2 !== _v191.SCHEDULED || !_v15.hasExplicitApiMediaManagement,
      _v37 = function () {
        let {
            streamMode: _v0
          } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
          _v1 = (0, _v365.useIsValidScheduledEvent)();
        return [_v1, _v0].some(_v0 => null === _v0) ? null : _v0 === _v39.EComposerStreamModeType.SIMULIVE && !_v1;
      }() || !1,
      _v38 = (0, _v65.createLiveDomName)("create-scene-button-tour-point"),
      [_v39, _v40] = (0, _v21.useMemo)(() => {
        let _v0 = (0, _v161.pickSortedScenesList)(_v3, _v4);
        switch (_v2) {
          case _v191.SCHEDULED:
            return [(0, _v161.pickScheduledScenesList)(_v0), _v0];
          case _v191.LIVE:
            return [(0, _v161.pickLiveScenesList)(_v0), _v0];
          default:
            return [_v0, _v0];
        }
      }, [_v3, _v4, _v2]),
      [_v41, _v42] = (0, _v21.useMemo)(() => {
        let _v0 = Object.keys(_v3).length;
        return [_v0 < _v74.graphicsConfig.SCENE.MAX_SCENES_COUNT && _v8, _v0 > 1];
      }, [_v3, _v8]),
      _v43 = (0, _v221.useRoomScreenShare)(_v19),
      _v44 = (0, _v366.useScreenShareOwner)(_v18),
      _v45 = !!(_v43 || _v20.track),
      [_v46] = (0, _v21.useMemo)(() => {
        let _v0 = _v19.find(_v0 => _v0.type === _v38.EAgoraConnectionType.PREVIEW) || null;
        return [_v0?.video || null, _v0?.audio || null];
      }, [_v19]),
      _v47 = !!(0, _v367.getActiveAgoraSourceTrack)(_v46),
      _v48 = _v2 === _v191.LIVE ? function ({
        hasStudioConnection: _v0,
        agoraMediaList: _v1,
        scheduledScenes: _v2,
        sceneInProgramId: _v3
      }) {
        let _v4 = (0, _v395.useForceUpdate)(),
          [_v5, _v6] = (0, _v21.useMemo)(() => {
            let _v0 = _v3 ? _v2.findIndex(_v0 => _v0.id === _v3) : -1;
            return [-1 === _v0 ? null : _v2[_v0], _v0];
          }, [_v3, _v2]),
          _v7 = !!(_v0 && _v5 && _v5.meta?.isScheduled && _v5.meta?.media?.status === _v88.EMediaStatus.PLAY),
          _v8 = (0, _v21.useMemo)(() => {
            if (!_v7) return null;
            let _v0 = _v2.length - 1,
              _v1 = _v6 >= 0 && _v0 >= 0 ? _v2.slice(_v6, _v0 + 1) : null;
            return _v1 ? 0 * _v1.reduce((_v0, _v1) => {
              let _v2 = (0, _v161.findFirstOfTypeGraphics)(_v88.EGraphicsDescriptorType.AGORA_MEDIA, _v1)?.data.sourceId;
              return _v2 ? _v0 + (_v1[_v2]?.videoDuration || 0) : _v0;
            }, 0) : null;
          }, [_v7, _v6, _v2, _v1]),
          _v9 = _v7 && _v8 ? (0, _v286.getCurrentRemotePlaybackState)(_v8, _v5?.meta?.media?.startedAt).timeRemaining : 0;
        return (0, _v394.useInterval)(_v9 > 0, _v4), _v9 / 0;
      }({
        hasStudioConnection: _v47,
        agoraMediaList: _v9,
        sceneInProgramId: _v7,
        scheduledScenes: (0, _v161.pickScheduledScenesList)(_v40)
      }) : null,
      _v49 = (0, _v21.useCallback)(() => {
        _v22.info("Creating scene:", _v2), _v23.emitSignal({
          type: _v51.ESceneCreateActionsSignal.CREATE_SCENE,
          data: {
            sceneListType: _v2,
            meta: {
              background: (0, _v161.pickNewSceneBackgroundForIndex)(_v3, _v4, 1 / 0)
            }
          }
        });
      }, [_v22, _v4, _v3, _v23, _v2]),
      _v50 = (0, _v21.useCallback)((_v0, _v1) => {
        _v23.emitSignal({
          type: _v51.ESceneCreateActionsSignal.CREATE_SCENE,
          data: {
            sceneListType: _v2,
            graphics: {
              graphicType: _v1,
              graphicId: _v0
            }
          }
        });
      }, [_v2, _v23]),
      _v51 = (0, _v21.useCallback)((_v0, _v1) => {
        _v6.setActiveScene(_v1), _v23.emitSignal({
          type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ELEMENT,
          data: {
            element: _v0.currentTarget
          }
        });
      }, [_v6, _v23]),
      _v52 = (0, _v21.useCallback)(_v0 => _v0 => {
        _v246("edit_scene_title", {
          sceneMode: _v2 === _v191.SCHEDULED ? _v126.ESceneMode.SIMULIVE : _v126.ESceneMode.LIVE
        }), _v6.setSceneName(_v0, _v0);
      }, [_v6, _v2]),
      _v53 = (0, _v21.useCallback)(_v0 => _v0 => {
        _v23.emitSignal({
          type: _v51.EPageSignal.PAGE_DRAG_END
        });
        let _v1 = _v132(_v0.dataTransfer);
        if (_v1 && _v0 !== _v1) {
          if (_v2 === _v191.SCHEDULED && !_v0.dataTransfer.types.includes(_v129.SCENE_CAN_BE_SCHEDULED)) return _v24({
            message: _v66.translations.contentTypeNotSupportedSimulive
          });
          null !== _v29 && (_v0.dataTransfer.types.includes(_v129.TEMPLATE) ? _v23.emitSignal({
            type: _v51.ESceneCreateActionsSignal.INSERT_TEMPLATE_TO_INDEX_OF_LIST,
            data: {
              templateId: _v1,
              sceneListType: _v2,
              targetIndex: _v29 + 1
            }
          }) : _v0.dataTransfer.types.includes(_v129.TEMPLATE_ITEM) ? _v23.emitSignal({
            type: _v51.ESceneCreateActionsSignal.INSERT_TEMPLATE_ITEM_TO_INDEX_OF_LIST,
            data: {
              templateId: _v1,
              sceneListType: _v2,
              targetIndex: _v29 + 1
            }
          }) : _v23.emitSignal({
            type: _v51.ESceneCreateActionsSignal.MOVE_SCENE_TO_INDEX_OF_LIST,
            data: {
              sceneId: _v1,
              sceneListType: _v2,
              targetIndex: _v29 + 1
            }
          }));
        }
      }, [_v23, _v2, _v29, _v24]),
      _v54 = (0, _v21.useCallback)(_v0 => _v0 => {
        (0, _v368.stopEventPropagation)(_v0), _v26(!0), _v6.setActiveScene(_v0).then(() => _v6.pushSceneToProgram(_v0.id, {
          isCloudProvisionRequired: !1
        })).finally(() => {
          var _v0;
          _v26(!1), (_v0 = {
            sceneLayout: _v0?.meta?.layoutType ?? null,
            backgroundColor: _v269(_v0?.meta?.background)
          }).sceneLayout = _v0.sceneLayout ? (0, _v244.decamelize)(_v0.sceneLayout) + "_layout" : null, _v246("send_scene_to_stream", _v0);
        });
      }, [_v6]),
      _v55 = (0, _v21.useCallback)(_v0 => () => {
        _v41 && _v23.emitSignal({
          type: _v51.ESceneCreateActionsSignal.INSERT_SCENES_ON_INDEX,
          data: {
            index: _v0,
            sceneListType: _v2
          }
        });
      }, [_v41, _v23, _v2]),
      _v56 = (0, _v21.useCallback)(_v0 => () => {
        _v23.emitSignal({
          type: _v51.ESceneCreateActionsSignal.DUPLICATE_SCENE,
          data: {
            scene: _v0,
            sceneListType: _v2
          }
        });
      }, [_v23, _v2]),
      _v57 = (0, _v21.useCallback)(() => {
        _v31.current -= 1, _v31.current <= 0 && _v30(null);
      }, []),
      _v58 = (0, _v21.useCallback)(() => {
        _v31.current += 1;
      }, []),
      _v59 = (0, _v21.useCallback)(() => {
        _v28(!0), _v30(null);
      }, []),
      _v60 = (0, _v21.useCallback)(() => {
        _v23.emitSignal({
          type: _v51.EPageSignal.PAGE_DRAG_END
        });
      }, [_v23]),
      _v61 = (0, _v21.useCallback)(_v0 => {
        _v23.emitSignal({
          type: _v51.EPageSignal.PAGE_DRAG_END
        });
        let {
            dataTransfer: _v1
          } = _v0,
          _v2 = _v132(_v1);
        if (_v2) {
          if (_v2 === _v191.SCHEDULED && !_v0.dataTransfer.types.includes(_v129.SCENE_CAN_BE_SCHEDULED)) return _v24({
            message: _v66.translations.contentTypeNotSupportedSimulive
          });
          _v0.dataTransfer.types.includes(_v129.TEMPLATE) ? _v23.emitSignal({
            type: _v51.ESceneCreateActionsSignal.INSERT_TEMPLATE_TO_INDEX_OF_LIST,
            data: {
              templateId: _v2,
              sceneListType: _v2,
              targetIndex: 1 / 0
            }
          }) : _v0.dataTransfer.types.includes(_v129.TEMPLATE_ITEM) ? _v23.emitSignal({
            type: _v51.ESceneCreateActionsSignal.INSERT_TEMPLATE_ITEM_TO_INDEX_OF_LIST,
            data: {
              templateId: _v2,
              sceneListType: _v2,
              targetIndex: 1 / 0
            }
          }) : _v23.emitSignal({
            type: _v51.ESceneCreateActionsSignal.MOVE_SCENE_TO_INDEX_OF_LIST,
            data: {
              sceneId: _v2,
              sceneListType: _v2,
              targetIndex: 1 / 0
            }
          });
        }
      }, [_v24, _v23, _v2]),
      _v62 = (0, _v21.useCallback)(_v0 => _v0 => (_v246("edit_scene", {
        sceneMode: _v2 === _v191.SCHEDULED ? _v126.ESceneMode.SIMULIVE : _v126.ESceneMode.LIVE
      }), _v6.setIsEditMode(), _v51(_v0, _v0)), [_v6, _v51, _v2]),
      _v63 = (0, _v21.useCallback)(_v0 => () => {
        let _v0 = (0, _v161.pickNextSceneId)(_v4, _v0, _v88.ENextScenePosition.FIRST);
        _v6.deleteScene(_v0, _v0 === _v7 ? _v0 : void 0), function (_v0 = {}) {
          _v246("delete_scene", _v0);
        }();
      }, [_v6, _v7, _v4]);
    (0, _v21.useEffect)(() => _v23.subscribeToSignals(_v0 => {
      _v0.type === _v51.EPageSignal.PAGE_DRAG_END && (_v31.current = 0, _v28(!1), _v30(null));
    }), [_v23]);
    let _v64 = (0, _v21.useCallback)(async (_v0, _v1, _v2) => {
        let _v3 = _v0.id,
          _v4 = Object.values(_v3).find(_v0 => _v0.id === _v3),
          _v5 = !!(_v4?.meta?.layoutType && _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v2));
        if (!_v74.graphicsConfig.SCENE.CONTROLS.BG_POSITION_ALLOWED.includes(_v2) && _v5 && !(0, _v91.hasIndexedSlotsInScene)(_v4)) return _v24({
          message: _v66.translations.contentWasNotAdded
        }), !1;
        if ((0, _v91.isGraphicAlreadyInScene)(_v1, _v0)) _v24({
          message: _v66.translations.graphicAlreadyInScene(_v163.NormalizedGraphicsDescriptorType[_v2])
        });else {
          let _v0 = (0, _v91.findConflictingGraphicsWithType)(_v2, _v4);
          if (!_v0.length) return await _v6.addGraphicToScene({
            sceneId: _v3,
            graphicType: _v2,
            graphicId: _v1,
            options: {
              isDragged: !0,
              location: _v126.ETtrackingAddGraphicLocations.SCENE_THUMBNAIL
            }
          }), !0;
          _v0.find(_v0 => _v0.type === _v88.EGraphicsDescriptorType.GUEST_LOWER_THIRD) && _v6.setGuestLowerThirdsVisibility(_v3, !1), _v6.replaceGraphicInScene(_v3, _v2, _v1, {
            isDragged: !0,
            location: _v126.ETtrackingAddGraphicLocations.SCENE_THUMBNAIL
          });
        }
      }, [_v24, _v3, _v6]),
      _v65 = (0, _v17.jsx)(_v371, {
        className: (0, _v65.createLiveDomName)(_v1, "create-control"),
        tourPointClassName: _v2 === _v191.SCHEDULED ? "" : _v38,
        type: _v2,
        title: _v2 === _v191.SCHEDULED ? _v66.translations.addVideo : _v66.translations.addScene,
        withLeftMargin: 0 === _v39.length,
        isDisabled: !_v41,
        onDrop: _v61,
        onClick: _v36 ? _v49 : void 0,
        onDropGraphics: _v50
      }),
      _v66 = (0, _v17.jsx)(_v138.Center, {
        width: (0, _v61.rem)(12),
        height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
        background: "transparent"
      });
    if (0 === _v39.length && _v2 === _v191.LIVE && _v41) return (0, _v17.jsx)(_v372, {
      type: _v2,
      onCreateNewScene: _v49,
      onDropGraphics: _v50,
      onDrop: _v61,
      className: _v38
    });
    let _v67 = (0, _v84.inline)(() => {
      switch (_v2) {
        case _v191.SCHEDULED:
          return (0, _v17.jsx)(_v95.Flex, {
            className: (0, _v65.createLiveDomName)(_v1, "subheader"),
            padding: `${(0, _v61.rem)(8)} 0 0 ${(0, _v61.rem)(12)}`,
            children: (0, _v17.jsxs)(_v95.Flex, {
              alignItems: "center",
              justifyContent: "flex-start",
              gap: (0, _v61.rem)(4),
              sx: {
                "& span": {
                  display: "flex"
                }
              },
              children: [(0, _v17.jsx)(_v137.Header, {
                size: "xs",
                children: _v66.translations.simulivePrerecorded
              }), (0, _v17.jsx)(_v214.BokehTooltip, {
                label: _v66.translations.simulatedLiveInfo,
                children: (0, _v17.jsx)(_v311.InfoCircle, {
                  width: "2xs"
                })
              })]
            })
          });
        case _v191.LIVE:
          {
            let _v0 = !!(_v48 && _v48 <= 60),
              _v1 = _v48 ? _v363.Duration.fromObject({
                seconds: _v48
              }) : null;
            return (0, _v17.jsx)(_v95.Flex, {
              className: (0, _v65.createLiveDomName)(_v1, "subheader"),
              padding: `${(0, _v61.rem)(8)} 0 0 ${(0, _v61.rem)(12)}`,
              children: (0, _v17.jsxs)(_v95.Flex, {
                position: "relative",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: (0, _v61.rem)(4),
                sx: {
                  "& span": {
                    display: "flex"
                  }
                },
                children: [(0, _v17.jsx)(_v137.Header, {
                  display: "flex",
                  size: "xs",
                  gap: (0, _v61.rem)(4),
                  children: _v32 && _v1 ? _v66.translations.liveToBeginIn(_v1.toFormat("mm:ss"), _v0 ? _v136.LIVE_LAYOUT_COLOR : _v136.WARNING_LAYOUT_COLOR) : _v66.translations.live
                }), (0, _v17.jsx)(_v214.BokehTooltip, {
                  label: _v66.translations.manualLiveInfo,
                  children: (0, _v17.jsx)(_v311.InfoCircle, {
                    width: "2xs"
                  })
                })]
              })
            });
          }
        default:
          return null;
      }
    });
    return _v8 ? (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      "data-type": _v2,
      direction: "column",
      borderRadius: (0, _v61.rem)(8),
      border: "1px dashed",
      borderColor: _v2 !== _v191.ALL ? "stroke" : "transparent",
      background: _v2 !== _v191.ALL ? "surface" : "transparent",
      children: [_v67, (0, _v17.jsxs)(_v95.Flex, {
        className: (0, _v65.createLiveDomName)(_v1, "content"),
        padding: `${(0, _v61.rem)(8)} 0`,
        onDragEnter: _v58,
        onDragLeave: _v57,
        children: [_v36 ? (0, _v17.jsx)(_v390, {
          className: (0, _v65.createLiveDomName)(_v1, "first-pipe"),
          isDisplayed: -1 === _v29,
          canCreateNewScenes: _v41,
          onClick: _v55(-1),
          onDragDrop: _v53(null)
        }) : _v66, _v39.map((_v0, _v1) => {
          let _v2 = _v0.id === _v5?.id,
            _v3 = _v0.id === _v7,
            _v4 = _v37 && 0 === _v1 && _v2 === _v191.SCHEDULED ? _v136.FAILED_STATUS_COLOR : (0, _v161.getSceneOverlayColorNew)(_v32, _v33, _v3, _v2, _v21),
            _v5 = !_v2 && !_v3,
            _v6 = !!(_v42 && (!_v3 || _v3 && !_v32)),
            _v7 = !!(!_v25 && _v15.canActivate && (!_v7 || !_v3)),
            _v8 = !!(!_v25 && !_v2),
            _v9 = (0, _v161.getSceneThumbnailStatusLabel)(_v32, _v3, _v34, _v21);
          return (0, _v17.jsxs)(_v95.Flex, {
            className: (0, _v65.createLiveDomName)(_v1, "scene"),
            "data-scene-id": _v0.id,
            children: [(0, _v17.jsx)(_v387, {
              className: _v1,
              sceneTitle: _v0.name,
              isSimulive: _v35,
              canEdit: _v5,
              canDuplicate: _v41,
              canDelete: _v6,
              onHandleSave: _v52(_v0.id),
              onEdit: _v62(_v0),
              onDuplicate: _v56(_v0),
              onDelete: _v63(_v0.id),
              children: (0, _v17.jsx)(_v393, {
                className: (0, _v65.createLiveDomName)(_v1, "scene-preview"),
                index: _v1,
                type: _v2,
                scene: _v0,
                canPush: _v7,
                canSelect: _v8,
                overlayColor: _v4,
                isLive: _v32,
                isDragging: _v27,
                onSetVisibleDropZoneIndex: _v30,
                onDuplicate: _v56(_v0),
                onSelect: _v51,
                onDragStart: _v59,
                onDragEnd: _v60,
                onDragDropBetweenScenes: _v53(_v0.id),
                onGraphicDrop: _v64,
                onPush: _v54(_v0),
                children: (0, _v17.jsx)(_v364.SceneThumbnail, {
                  className: (0, _v65.createLiveDomName)(_v1, "thumbnail"),
                  isInProgram: _v3,
                  isSelected: _v2,
                  hasStudioConnection: _v47,
                  isScheduled: _v2 === _v191.SCHEDULED,
                  statusLabel: _v9,
                  statusColor: _v4,
                  scene: _v0,
                  guests: _v14,
                  theme: _v13,
                  activeScreenOwnerId: _v45 ? _v44 : null,
                  broadcasterInfo: _v12.broadcaster,
                  fullscreenList: _v10,
                  agoraMediaList: _v9,
                  slidesList: _v11
                })
              })
            }), _v36 ? (0, _v17.jsx)(_v390, {
              className: (0, _v65.createLiveDomName)(_v1, "scene-pipe"),
              canCreateNewScenes: _v41,
              isDisplayed: _v29 === _v1,
              onClick: _v55(_v1),
              onDragDrop: _v53(_v0.id)
            }) : _v66]
          }, _v1);
        }), _v36 ? _v65 : (0, _v17.jsx)(_v214.BokehTooltip, {
          label: _v66.translations.dragVideosToAdd,
          children: _v65
        })]
      })]
    }) : (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      children: (0, _v17.jsx)(_v95.Flex, {
        className: (0, _v65.createLiveDomName)(_v1, "content"),
        padding: `${(0, _v61.rem)(8)} 0`,
        gap: (0, _v61.rem)(16),
        children: (0, _v84.range)(5).map(_v0 => (0, _v17.jsx)(_v194.BokehSkeleton, {
          className: (0, _v65.createLiveDomName)(_v1, "scene-placeholder"),
          overflow: "hidden",
          width: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_WIDTH),
          height: (0, _v61.rem)(_v74.graphicsConfig.SCENE.BASIC_SCENE_PREVIEW_HEIGHT),
          marginBottom: (0, _v61.rem)(16),
          borderRadius: (0, _v61.rem)(8)
        }, _v0))
      })
    });
  }
  var _v397 = _v0.i(0),
    _v398 = _v0.i(0);
  function _v399({
    className: _v0 = (0, _v65.createLiveDomName)("scenes-timeline-scroll"),
    children: _v1
  }) {
    let _v2 = (0, _v28.useScope)(),
      _v3 = (0, _v21.useRef)(null),
      {
        unsubscribe: _v4,
        subscribe: _v5,
        emit: _v6
      } = _v339(),
      _v7 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v3.current;
        if (!_v1 || !_v0) return {
          isElementOutOfScreen: !1,
          diff: 0
        };
        let _v2 = _v1.getBoundingClientRect(),
          _v3 = _v0.getBoundingClientRect(),
          _v4 = _v2.x + _v2.width / 2,
          _v5 = _v3.x + _v3.width / 2 - _v4;
        return {
          isElementOutOfScreen: Math.abs(_v5) > _v2.width / 2 - _v3.width / 2,
          diff: _v5
        };
      }, []),
      _v8 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v3.current;
        if (!_v1 || !_v0) return;
        let {
          isElementOutOfScreen: _v2,
          diff: _v3
        } = _v7(_v0);
        _v2 && _v1.scrollBy({
          left: _v3,
          behavior: "smooth"
        });
      }, [_v7]),
      _v9 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v3.current;
        if (!_v1) return;
        let _v2 = _v0 ? _v0.scrollWidth : _v1.scrollWidth;
        _v1.scrollTo({
          left: _v2 - _v1.getBoundingClientRect().width,
          behavior: "smooth"
        });
      }, []),
      _v10 = (0, _v21.useCallback)(({
        element: _v0,
        onVisibleCallback: _v1
      }) => {
        if (!_v3.current || !_v0) return;
        let {
          isElementOutOfScreen: _v2
        } = _v7(_v0);
        if (_v2) {
          let _v0 = () => {
            _v1(), _v4(_v385.SCROLL_END, _v0);
          };
          _v5(_v385.SCROLL_END, _v0), _v8(_v0);
        } else _v1();
      }, [_v7, _v8, _v5, _v4]);
    (0, _v21.useEffect)(() => _v2.subscribeToSignals(_v0 => {
      switch (_v0.type) {
        case _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ELEMENT:
          {
            let {
              data: _v0
            } = _v0;
            return _v8(_v0.element);
          }
        case _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID:
          {
            let {
              data: _v0
            } = _v0;
            return _v8(_v3.current?.querySelector(`div[data-scene-id="${_v0.id}"]`));
          }
        case _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_LIST_END:
          {
            let {
              data: _v0
            } = _v0;
            if (_v0?.sceneListType) return _v9(_v3.current?.querySelector(`div[data-type="${_v0.sceneListType}"]`));
            return _v9(null);
          }
      }
    }), [_v10, _v8, _v9, _v2]), (0, _v21.useEffect)(() => _v5(_v385.CHECK_SCROLL, _v10), [_v10, _v5]), (0, _v21.useEffect)(() => {
      let _v0 = _v3.current;
      if (!_v0) return;
      let _v1 = (0, _v397.default)(() => {
          _v6(_v385.SCROLL_START);
        }, 150, {
          leading: !0,
          trailing: !1
        }),
        _v2 = (0, _v397.default)(() => {
          _v6(_v385.SCROLL_END);
        }, 150);
      return _v0.addEventListener("scroll", _v1, !1), _v0.addEventListener("scroll", _v2, !1), () => {
        _v0.removeEventListener("scroll", _v1), _v0.removeEventListener("scroll", _v2);
      };
    }, [_v6]), (0, _v21.useLayoutEffect)(() => (0, _v398.transformHorizontalScrollsToVertical)(_v3.current), []);
    let _v11 = (0, _v314.useScrollbarStyles)({
      scrollbarColor: "background"
    });
    return (0, _v17.jsx)(_v95.Flex, {
      ref: _v3,
      className: _v0,
      flex: 1,
      position: "relative",
      width: "100%",
      justifyContent: "safe center",
      overflowX: "auto",
      overflowY: "hidden",
      sx: _v11,
      children: (0, _v17.jsx)(_v95.Flex, {
        className: (0, _v65.createLiveDomName)(_v0, "body"),
        position: "relative",
        top: 0,
        gap: (0, _v61.rem)(16),
        children: _v1
      })
    });
  }
  let _v400 = (0, _v21.forwardRef)(({
    id: _v0 = (0, _v336.createLiveDomName)("scenes-timeline"),
    className: _v1 = (0, _v336.createLiveDomName)("scenes-timeline"),
    composerSessionStatusContext: {
      streamMode: _v2
    } = (0, _v335.useManager)(_v340.ComposerSessionStatusManager, ({
      streamMode: _v0
    }) => [_v0])
  }, _v3) => {
    let _v4 = _v2 === _v39.EComposerStreamModeType.SIMULIVE;
    return (0, _v17.jsx)(_v18.LiveErrorBoundary, {
      component: "LiveScenesTimelineNew",
      children: (0, _v17.jsx)(_v95.Flex, {
        ref: _v3,
        id: _v0,
        className: _v1,
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        maxHeight: _v4 ? (0, _v61.rem)(184) : (0, _v61.rem)(170),
        direction: "column",
        marginTop: (0, _v61.rem)(8),
        children: (0, _v17.jsx)(_v362, {
          children: (0, _v17.jsx)(_v338, {
            children: (0, _v17.jsx)(_v399, {
              className: (0, _v336.createLiveDomName)(_v0, "scroll"),
              children: _v4 ? (0, _v17.jsxs)(_v17.Fragment, {
                children: [(0, _v17.jsx)(_v396, {
                  id: (0, _v336.createLiveDomName)(_v0, "scheduled-scenes-list"),
                  className: (0, _v336.createLiveDomName)(_v1, "scheduled-scenes-list"),
                  type: _v191.SCHEDULED
                }, _v191.SCHEDULED), (0, _v17.jsx)(_v396, {
                  id: (0, _v336.createLiveDomName)(_v0, "live-scenes-list"),
                  className: (0, _v336.createLiveDomName)(_v1, "live-scenes-list"),
                  type: _v191.LIVE
                }, _v191.LIVE)]
              }) : (0, _v17.jsx)(_v396, {
                id: (0, _v336.createLiveDomName)(_v0, "all-scenes-list"),
                className: (0, _v336.createLiveDomName)(_v1, "all-scenes-list"),
                type: _v191.ALL
              }, _v191.ALL)
            })
          })
        })
      })
    });
  });
  function _v401({
    id: _v0 = (0, _v65.createLiveDomName)("broadcaster-preview-scene-layout"),
    className: _v1 = (0, _v65.createLiveDomName)("broadcaster-preview-scene-layout"),
    composerSessionStatusContext: {
      ingestStatus: _v2,
      streamMode: _v3,
      liveComposerStatuses: _v4,
      liveComposerStatusGetters: _v5
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    sceneContext: {
      isHydrated: _v6
    } = (0, _v28.useManager)(_v56.SceneManager),
    pageEventsContext: {
      isPageActive: _v7
    } = (0, _v28.useManager)(_v79.PageEventsManager, ({
      isPageActive: _v0
    }) => [_v0])
  }) {
    let _v8 = (0, _v21.useRef)(null),
      _v9 = (0, _v21.useRef)(null),
      _v10 = (0, _v21.useRef)(null),
      _v11 = _v2 === _v53.EIngestStatus.UNKNOWN && !_v4.isRtmpMode && _v7 || !_v6,
      _v12 = _v5.isEnded() || _v4.isRtmpMode || !_v7,
      _v13 = (0, _v21.useCallback)(() => {
        _v8.current && (_v9.current && (_v9.current.style.maxWidth = `${_v8.current.clientWidth}px`), _v10.current && (_v10.current.style.maxWidth = `${_v8.current.clientWidth}px`));
      }, []);
    return ((0, _v121.useResizeObserver)(_v8.current, _v13), (0, _v21.useLayoutEffect)(() => {
      _v13();
    }, [_v13, _v11]), _v11) ? (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      grow: 1,
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: `${(0, _v61.rem)(16)} ${(0, _v61.rem)(16)} 0 ${(0, _v61.rem)(16)}`,
      sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
      children: (0, _v17.jsx)(_v195, {
        id: (0, _v65.createLiveDomName)(_v0, "loader"),
        className: (0, _v65.createLiveDomName)(_v1, "loader")
      })
    }) : (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      grow: 1,
      direction: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: `${(0, _v61.rem)(16)} ${(0, _v61.rem)(16)} 0 ${(0, _v61.rem)(16)}`,
      sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
      children: [(0, _v17.jsx)(_v95.Flex, {
        grow: 1
      }), (0, _v17.jsxs)(_v95.Flex, {
        position: "relative",
        direction: "column",
        alignItems: "center",
        width: "100%",
        children: [(0, _v17.jsx)(_v120.SpeakingWhileMutedBanner, {
          position: "absolute",
          bottom: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          marginBottom: (0, _v61.rem)(12)
        }), (0, _v17.jsx)(_v334, {
          ref: _v10,
          id: (0, _v65.createLiveDomName)(_v0, "controls"),
          className: (0, _v65.createLiveDomName)(_v1, "controls")
        }), _v12 ? (0, _v17.jsx)(_v199, {
          ref: _v8,
          id: (0, _v65.createLiveDomName)(_v0, "scene"),
          className: (0, _v65.createLiveDomName)(_v1, "scene"),
          isPageActive: _v7,
          isRtmpCloudSession: _v4.isRtmpMode,
          streamMode: _v3
        }) : (0, _v17.jsx)(_v193, {
          ref: _v8,
          id: (0, _v65.createLiveDomName)(_v0, "scene"),
          className: (0, _v65.createLiveDomName)(_v1, "scene")
        }), (0, _v17.jsx)(_v400, {
          ref: _v9,
          id: (0, _v65.createLiveDomName)(_v0, "scenes-list"),
          className: (0, _v65.createLiveDomName)(_v1, "scenes-list")
        })]
      }), (0, _v17.jsx)(_v95.Flex, {
        grow: .2
      }), (0, _v17.jsx)(_v226, {
        id: (0, _v65.createLiveDomName)(_v0, "controls"),
        className: (0, _v65.createLiveDomName)(_v1, "controls")
      })]
    });
  }
  var _v402 = _v0.i(0),
    _v403 = _v0.i(0),
    _v404 = _v0.i(0),
    _v405 = _v0.i(0),
    _v406 = _v0.i(0),
    _v407 = _v0.i(0),
    _v408 = _v0.i(0),
    _v409 = _v0.i(0),
    _v410 = _v0.i(0),
    _v411 = _v0.i(0),
    _v412 = _v0.i(0),
    _v413 = _v0.i(0),
    _v414 = _v0.i(0),
    _v415 = _v0.i(0),
    _v416 = _v0.i(0),
    _v417 = _v0.i(0),
    _v418 = _v0.i(0),
    _v419 = _v0.i(0);
  function _v420({
    id: _v0 = (0, _v96.createDomName)("notification-modal"),
    isOpen: _v1,
    title: _v2,
    message: _v3,
    fileNames: _v4,
    footerText: _v5,
    closeButtonLabel: _v6,
    onClose: _v7
  }) {
    return (0, _v17.jsxs)(_v58.Modal, {
      id: _v0,
      isOpen: _v1,
      onClose: _v7,
      children: [(0, _v17.jsx)(_v60.ModalOverlay, {}), (0, _v17.jsxs)(_v59.ModalContent, {
        width: (0, _v61.rem)(368),
        children: [(0, _v17.jsx)(_v202.ModalHeader, {
          id: (0, _v96.createDomName)(_v0, "header"),
          paddingTop: (0, _v61.rem)(24),
          children: (0, _v17.jsx)(_v137.Header, {
            size: "md",
            children: _v2
          })
        }), (0, _v17.jsx)(_v108.ModalCloseButton, {}), (0, _v17.jsxs)(_v203.ModalBody, {
          children: [(0, _v17.jsx)(_v292.Paragraph, {
            size: "md",
            marginBottom: (0, _v61.rem)(8),
            children: _v3
          }), _v4?.map((_v0, _v1) => (0, _v17.jsx)(_v292.Paragraph, {
            size: "md",
            sx: {
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              position: "relative",
              paddingLeft: (0, _v61.rem)(20),
              "&:before": {
                content: '""',
                width: (0, _v61.rem)(3),
                height: (0, _v61.rem)(3),
                position: "absolute",
                left: (0, _v61.rem)(8),
                top: (0, _v61.rem)(8),
                borderRadius: "50%",
                background: "text-primary"
              }
            },
            children: _v0
          }, _v1)), _v5 && (0, _v17.jsx)(_v292.Paragraph, {
            size: "md",
            marginTop: (0, _v61.rem)(8),
            children: _v5
          })]
        }), (0, _v17.jsx)(_v419.ModalFooter, {
          paddingBottom: (0, _v61.rem)(24),
          children: (0, _v17.jsx)(_v107.Button, {
            id: (0, _v96.createDomName)(_v0, "close-button"),
            variant: "primary",
            onClick: _v7,
            children: _v6
          })
        })]
      })]
    });
  }
  let _v421 = (0, _v243.createLiveSchemaEventFactory)("vimeo.simple_live_brand", 9, () => ({
    ..._v242.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    isShowLogoEnabled: !1,
    primaryColorSelected: null,
    secondaryColorSelected: null
  }));
  var _v422 = _v0.i(0),
    _v423 = _v0.i(0),
    _v424 = _v0.i(0);
  function _v425({
    id: _v0,
    className: _v1,
    chess: _v2,
    children: _v3 = null,
    height: _v4,
    src: _v5,
    width: _v6,
    fit: _v7
  }) {
    let {
        colorMode: _v8
      } = (0, _v233.useColorMode)(),
      _v9 = (0, _v21.useMemo)(() => {
        let _v0 = {};
        return Object.assign(_v0, _v4 ? {
          height: _v4,
          minHeight: _v4
        } : _v97.STRICT_16BY9_BOX_STYLE), _v2 && Object.assign(_v0, (0, _v97.createChessBackgroundStyle)(_v8)), _v0;
      }, [_v4, _v2, _v8]);
    return (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      height: _v4,
      position: "relative",
      width: _v6,
      minWidth: _v6,
      sx: _v9,
      children: (0, _v17.jsx)(_v95.Flex, {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundSize: _v7 || "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `/**/ url(${_v5})`,
        children: _v3
      })
    });
  }
  function _v426({
    className: _v0 = (0, _v65.createLiveDomName)("brand-logo-item"),
    item: _v1,
    overlayColor: _v2,
    onSelectLogo: _v3,
    onDeleteLogo: _v4
  }) {
    let {
        colorMode: _v5
      } = (0, _v233.useColorMode)(),
      [_v6, _v7] = (0, _v21.useState)(!1),
      _v8 = (0, _v21.useCallback)(_v0 => {
        _v7(!0), _v0.preventDefault(), _v0.stopPropagation(), _v4(_v1).catch(() => _v7(!1));
      }, [_v4, _v1]),
      _v9 = (0, _v21.useCallback)(_v0 => _v6 ? void 0 : _v3(_v0, _v1), [_v3, _v6, _v1]);
    return (0, _v17.jsxs)(_v95.Flex, {
      className: _v0,
      "data-item-id": _v1.id,
      height: (0, _v61.rem)(90),
      borderRadius: (0, _v61.rem)(8),
      cursor: "pointer",
      position: "relative",
      sx: {
        ...(0, _v97.createChessBackgroundStyle)(_v5),
        "&: hover > button": {
          opacity: 1
        }
      },
      onClick: _v9,
      children: [(0, _v17.jsx)(_v312.SceneItemOverlay, {
        className: (0, _v65.createLiveDomName)(_v0, "overlay"),
        color: _v2,
        width: 2,
        size: "sm"
      }), (0, _v17.jsx)(_v425, {
        className: (0, _v65.createLiveDomName)(_v0, "image-preview"),
        src: _v1.imageSrc,
        width: "100%",
        height: "100%",
        fit: "contain",
        chess: !1,
        children: _v1.imageSrc ? null : (0, _v17.jsx)(_v403.Image, {
          className: (0, _v65.createLiveDomName)(_v0, "graphics-icon"),
          width: (0, _v61.rem)(40),
          height: (0, _v61.rem)(40)
        })
      }), (0, _v17.jsx)(_v214.BokehTooltip, {
        label: _v66.translations.delete,
        shouldWrapChildren: !1,
        children: (0, _v17.jsx)(_v213.IconButton, {
          className: (0, _v65.createLiveDomName)(_v0, "delete-button"),
          variant: "tertiary",
          size: "xs",
          "aria-label": "delete",
          icon: (0, _v17.jsx)(_v424.TrashBin, {}),
          position: "absolute",
          opacity: 0,
          zIndex: 100,
          top: (0, _v61.rem)(4),
          right: (0, _v61.rem)(4),
          isDisabled: _v6,
          onClick: _v8
        })
      })]
    });
  }
  var _v427 = _v0.i(0),
    _v428 = _v0.i(0),
    _v429 = _v0.i(0);
  let _v430 = ({
      isBrandkitLogoLoading: _v0,
      isUploading: _v1,
      isMenuOpen: _v2,
      isLogoPickerOpen: _v3,
      setIsLogoPickerOpen: _v4,
      onUpload: _v5,
      onAddFromBrandkit: _v6,
      setIsMenuOpen: _v7,
      logoPickerRef: _v8,
      onLogoSelect: _v9,
      fileInputRef: _v10,
      onUploadLogos: _v11,
      acceptedImageTypes: _v12
    }) => (0, _v17.jsx)(_v106.Box, {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "2xl",
      children: _v0 || _v1 ? (0, _v17.jsx)(_v157.Spinner, {
        size: "sm"
      }) : (0, _v17.jsxs)(_v95.Flex, {
        children: [(0, _v17.jsx)(_v214.BokehTooltip, {
          placement: "top",
          label: _v66.translations.addLogo,
          children: (0, _v17.jsxs)(_v373.Menu, {
            isOpen: _v2,
            onOpen: () => _v7(!0),
            onClose: () => _v7(!1),
            placement: "right-start",
            children: [(0, _v17.jsx)(_v374.MenuButton, {
              as: _v213.IconButton,
              icon: (0, _v17.jsx)(_v427.PlusFilled, {}),
              variant: "tertiary",
              "aria-label": _v66.translations.addLogo
            }), (0, _v17.jsxs)(_v376.MenuList, {
              children: [(0, _v17.jsx)(_v375.MenuItem, {
                width: (0, _v61.rem)(176),
                padding: "sm",
                icon: (0, _v17.jsx)(_v428.Upload, {}),
                onClick: _v5,
                children: _v66.translations.upload
              }), (0, _v17.jsx)(_v375.MenuItem, {
                width: (0, _v61.rem)(176),
                padding: "sm",
                icon: (0, _v17.jsx)(_v404.LogoBrand, {}),
                onClick: _v6,
                children: _v66.translations.addFromBrandKit
              })]
            })]
          })
        }), (0, _v17.jsx)(_v429.LogoPickerBrandKit, {
          isPickerOpen: _v3,
          onLogoSelect: _v9,
          popoverRef: _v8,
          popoverPlacement: "right-start",
          onClose: () => _v4(!1)
        }), (0, _v17.jsx)("input", {
          ref: _v10,
          type: "file",
          accept: _v12,
          multiple: !0,
          style: {
            display: "none"
          },
          onChange: _v11
        })]
      })
    }),
    _v431 = {
      id: "",
      type: _v88.EGraphicsDescriptorType.LOGO,
      line: "",
      subLine: "",
      imageSrc: "",
      imageFileName: "",
      createdAt: 0
    };
  function _v432({
    id: _v0 = (0, _v96.createDomName)("brand-logo-list"),
    className: _v1 = (0, _v96.createDomName)("brand-logo-list"),
    sceneContext: {
      activeScene: _v2,
      sceneInProgram: _v3
    } = (0, _v28.useManager)(_v56.SceneManager),
    composerSettingsContext: {
      globalLogo: _v4,
      composerSettingsActions: _v5
    } = (0, _v28.useManager)(_v50.ComposerSettingsManager),
    graphicsContext: {
      graphicsActions: _v6,
      logoList: _v7
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      logoList: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      ingestStatus: _v8
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamBrandLogoAdded: _v9
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v10 = (0, _v160.useSimpleNotification)(),
      [_v11, _v12] = (0, _v21.useState)(0),
      [_v13, _v14] = (0, _v21.useState)(null),
      [_v15, _v16] = (0, _v21.useState)(!1),
      [_v17, _v18] = (0, _v21.useState)(!1),
      [_v19, _v20] = (0, _v21.useState)(!1),
      _v21 = (0, _v21.useRef)(null),
      _v22 = (0, _v21.useRef)(null),
      _v23 = (0, _v21.useMemo)(() => Object.values(_v7).sort(_v422.graphicsComparator), [_v7]),
      _v24 = 0 === _v23.length ? null : _v4?.visible ?? null,
      _v25 = (0, _v21.useCallback)(async _v0 => {
        await _v5.setGlobalLogoVisibility(_v0);
      }, [_v5]),
      _v26 = (0, _v21.useMemo)(() => {
        let _v0 = _v13?.map(_v0 => _v0.fileName).flat() || [],
          _v1 = _v13?.[0]?.fileSizeLimit || 0;
        return {
          hasError: !!_v13?.some(_v0 => _v0.hasError),
          fileNames: _v0,
          fileSizeLimit: _v1
        };
      }, [_v13]),
      _v27 = (0, _v21.useCallback)(async (_v0, _v1 = "upload") => {
        _v12(_v0.length);
        let _v2 = [],
          _v3 = [];
        for (let _v0 of _v0) try {
          let {
              fileSrc: _v0,
              fileName: _v1
            } = await (0, _v423.getFileNameAndBase64)(_v0),
            _v2 = await _v6.saveLogo({
              ..._v431,
              imageSrc: String(_v0),
              imageFileName: String(_v1)
            }, _v0);
          _v421("save_logo"), _v9({
            liveStreamLogoSource: _v1
          }), _v2.push(_v2);
        } catch (_v0) {
          _v0 instanceof _v89.LiveError && _v0.code === _v25.ELiveErrorCode.INVALID_UPLOAD_SIZE ? _v3.push({
            fileName: _v0.data.fileName,
            fileSizeLimit: _v0.data.fileSizeLimit
          }) : _v10({
            message: _v66.translations.somethingWentWrongUploading
          });
        } finally {
          _v12(_v0 => _v0 - 1);
        }
        _v3.length > 0 ? _v14(_v3.map(_v0 => ({
          hasError: !0,
          fileName: _v0.fileName,
          fileSizeLimit: _v0.fileSizeLimit / 0 / 0
        }))) : _v14(null);
        let _v4 = _v2.length;
        if (!_v23.length && _v4) {
          _v25(!0);
          let _v0 = _v2[_v4 - 1]?.id;
          !_v4?.id && _v0 && _v5.setGlobalLogo(_v0);
        }
      }, [_v5, _v4?.id, _v6, _v23.length, _v10, _v25, _v9]),
      _v28 = (0, _v21.useCallback)(async _v0 => {
        let _v1 = _v0.target.files;
        _v1 && _v1.length > 0 && (await _v27(Array.from(_v1).slice(0, 10))), _v0.target.value = "";
      }, [_v27]),
      _v29 = (0, _v21.useCallback)(() => _v14(null), [_v14]),
      _v30 = (0, _v21.useCallback)(async ({
        logoUrl: _v0,
        logoUri: _v1
      }) => {
        try {
          _v16(!1), _v20(!0);
          let _v0 = await fetch(_v0);
          if (!_v0.ok) throw new _v89.LiveError(`Failed to fetch logo: ${_v0.statusText}`);
          let _v1 = await _v0.blob(),
            _v2 = _v1 ? `brand-logo-${_v1.split("/").pop()}.${_v1.type.split("/")[1]}` : "brand-logo.png",
            _v3 = new File([_v1], _v2, {
              type: _v1.type
            });
          await _v27([_v3], "brand_kit");
        } catch (_v0) {
          _v81.Logger.getGlobal().error("Error saving logo from brand kit:", _v0), _v10({
            message: _v66.translations.somethingWentWrongUploading
          });
        } finally {
          _v20(!1);
        }
      }, [_v10, _v27]),
      _v31 = (0, _v21.useCallback)(() => {
        _v421("toggle_show_logo_in_all_scenes", {
          isShowLogoEnabled: !_v24
        }), _v25(!_v24);
      }, [_v24, _v25]),
      _v32 = (0, _v21.useCallback)((_v0, _v1) => {
        _v4?.id !== _v1.id && _v5.setGlobalLogo(_v1.id);
      }, [_v4, _v5]),
      _v33 = (0, _v21.useCallback)(async _v0 => {
        if (_v4?.id === _v0.id) if (1 === _v23.length) await _v5.setGlobalLogo(null);else {
          let _v0 = _v23.findIndex(_v0 => _v0.id === _v0.id);
          _v0 === _v23.length - 1 ? await _v5.setGlobalLogo(_v23[0].id) : await _v5.setGlobalLogo(_v23[_v0 + 1].id);
        }
        await _v6.removeGraphic(_v88.EGraphicsDescriptorType.LOGO, _v0.id);
      }, [_v5, _v4?.id, _v6, _v23]),
      _v34 = (0, _v21.useCallback)(_v0 => _v0 === _v4?.id ? _v2 && _v2.id === _v3 && _v8 === _v53.EIngestStatus.STREAMING ? _v136.LIVE_LAYOUT_COLOR : _v8 === _v53.EIngestStatus.ENDED ? _v136.INACTIVE_LAYOUT_COLOR : _v136.FOCUSED_STATE_COLOR : _v136.NONE_LAYOUT_COLOR, [_v2, _v4?.id, _v8, _v3]),
      _v35 = (0, _v21.useCallback)(_v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v22.current?.click(), _v18(!1);
      }, []),
      _v36 = (0, _v21.useCallback)(_v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v16(!0), _v18(!1);
      }, []);
    return (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsxs)(_v95.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        children: [(0, _v17.jsxs)(_v95.Flex, {
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: (0, _v61.rem)(12),
          children: [(0, _v17.jsx)(_v137.Header, {
            id: (0, _v96.createDomName)(_v0, "header"),
            className: (0, _v96.createDomName)(_v1, "header"),
            size: "sm",
            color: "text-primary",
            children: _v66.translations.logo
          }), (0, _v17.jsx)(_v430, {
            isBrandkitLogoLoading: _v19,
            isUploading: _v11 > 0,
            isMenuOpen: _v17,
            isLogoPickerOpen: _v15,
            setIsLogoPickerOpen: _v16,
            onUpload: _v35,
            onAddFromBrandkit: _v36,
            setIsMenuOpen: _v18,
            logoPickerRef: _v21,
            onLogoSelect: _v30,
            fileInputRef: _v22,
            onUploadLogos: _v28,
            acceptedImageTypes: _v74.graphicsConfig.UPLOADS.ACCEPTED_IMAGE_TYPES
          })]
        }), (0, _v17.jsx)(_v95.Flex, {
          id: (0, _v96.createDomName)(_v0, "list"),
          className: (0, _v96.createDomName)(_v1, "list"),
          gap: (0, _v61.rem)(8),
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          position: "relative",
          children: _v23.map((_v0, _v1) => {
            let _v2 = _v34(_v0.id);
            return (0, _v17.jsx)(_v426, {
              className: (0, _v96.createDomName)(_v1, "item"),
              item: _v0,
              overlayColor: _v2,
              onSelectLogo: _v32,
              onDeleteLogo: _v33
            }, _v0.id ?? _v1);
          })
        }), null === _v24 ? null : (0, _v17.jsxs)(_v417.FormLabel, {
          id: (0, _v96.createDomName)(_v0, "toggle-form"),
          className: (0, _v96.createDomName)(_v1, "toggle-form"),
          display: "flex",
          alignItems: "center",
          gap: (0, _v61.rem)(12),
          marginTop: (0, _v61.rem)(8),
          children: [(0, _v17.jsx)(_v418.Switch, {
            id: (0, _v96.createDomName)(_v0, "toggle-control"),
            className: (0, _v96.createDomName)(_v1, "toggle-control"),
            size: "sm",
            isChecked: !!_v24,
            onChange: _v31
          }), (0, _v17.jsx)(_v292.Paragraph, {
            id: (0, _v96.createDomName)(_v0, "toggle-label"),
            className: (0, _v96.createDomName)(_v1, "toggle-label"),
            size: "md",
            color: "text-primary",
            children: _v66.translations.showLogoOnAllScenes
          })]
        }), (0, _v17.jsx)(_v228.Divider, {
          orientation: "horizontal",
          padding: `${(0, _v61.rem)(16)} ${(0, _v61.rem)(8)}`,
          borderRadius: "1px",
          borderColor: "stroke"
        })]
      }), (0, _v17.jsx)(_v420, {
        id: (0, _v96.createDomName)(_v0, "logos-file-size-error-modal"),
        isOpen: _v26.hasError,
        title: _v66.translations.fileTooLarge,
        message: (0, _v190.T_FILE_CANT_BE_UPLOADED)(_v26.fileNames.length, _v26.fileSizeLimit),
        fileNames: _v26.fileNames,
        footerText: _v66.translations.imagesMustBeSmaller,
        closeButtonLabel: _v190.T_CLOSE,
        onClose: _v29
      })]
    });
  }
  var _v433 = _v0.i(0),
    _v434 = _v0.i(0);
  function _v435({
    className: _v0 = (0, _v65.createLiveDomName)("brand-color-picker"),
    value: _v1,
    defaultValue: _v2,
    label: _v3,
    onChange: _v4
  }) {
    let _v5 = (0, _v21.useCallback)(() => {
      _v4(_v2);
    }, [_v2, _v4]);
    return (0, _v17.jsxs)(_v95.Flex, {
      width: "100%",
      alignItems: "center",
      className: (0, _v65.createLiveDomName)(_v0, "controls"),
      children: [(0, _v17.jsx)(_v109.Text, {
        color: "text-primary",
        className: (0, _v65.createLiveDomName)(_v0, "label"),
        variant: "body-md",
        children: _v3
      }), (0, _v17.jsx)(_v106.Box, {
        flexGrow: 1
      }), (0, _v17.jsxs)(_v95.Flex, {
        gap: (0, _v61.rem)(8),
        _hover: {
          "& .reset-button": {
            opacity: 1
          }
        },
        children: [String(_v1).toLowerCase() === _v2.toLowerCase() ? null : (0, _v17.jsx)(_v214.BokehTooltip, {
          label: _v66.translations.reset,
          shouldWrapChildren: !1,
          children: (0, _v17.jsx)(_v213.IconButton, {
            className: `${(0, _v65.createLiveDomName)(_v0, "reset")} reset-button`,
            "aria-label": "reset",
            size: "xs",
            variant: "secondary",
            icon: (0, _v17.jsx)(_v424.TrashBin, {}),
            opacity: 0,
            onClick: _v5
          })
        }), (0, _v17.jsx)(_v433.ColorPickerBrandKit, {
          onChange: _v4,
          color: _v1 ?? _v434.DEFAULT_BRANDING_COLOR,
          position: _v434.DEFAULT_PICKER_PLACEMENT,
          children: (0, _v17.jsx)(_v106.Box, {
            children: (0, _v17.jsx)(_v214.BokehTooltip, {
              label: _v66.translations.changeColor,
              children: (0, _v17.jsx)(_v106.Box, {
                cursor: "pointer",
                width: "xs",
                height: "xs",
                background: _v1,
                borderRadius: "50%",
                border: "2px solid",
                borderColor: "rgba(0,0,0,0.1)",
                _hover: {
                  borderColor: "input-stroke-hover"
                }
              })
            })
          })
        })]
      })]
    });
  }
  var _v436 = _v0.i(0);
  function _v437({
    id: _v0 = (0, _v65.createLiveDomName)("lower-third-preview"),
    className: _v1 = (0, _v65.createLiveDomName)("lower-third-preview"),
    line: _v2,
    subline: _v3,
    imageSrc: _v4,
    theme: _v5
  }) {
    let {
        colorMode: _v6
      } = (0, _v233.useColorMode)(),
      _v7 = (0, _v21.useMemo)(() => ({
        object: {
          id: "lowerThirdPreview",
          line: _v2,
          subLine: _v3,
          imageSrc: _v4,
          type: _v88.EGraphicsDescriptorType.LOWER_THIRD,
          createdAt: 0
        },
        animation: _v88.EAnimationState.NONE,
        fadeInDuration: 0,
        fadeOutDuration: 0
      }), [_v2, _v3, _v4]),
      _v8 = !!(_v2 || _v3);
    return (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      overflow: "hidden",
      position: "relative",
      width: "100%",
      borderRadius: "md",
      border: "0.5px solid",
      borderColor: "stroke",
      sx: {
        ..._v97.STRICT_16BY9_BOX_STYLE,
        ...(0, _v97.createChessBackgroundStyle)(_v6)
      },
      children: (0, _v17.jsx)(_v95.Flex, {
        id: (0, _v65.createLiveDomName)(_v0, "scale"),
        className: (0, _v65.createLiveDomName)(_v1, "scale"),
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        children: (0, _v17.jsx)(_v95.Flex, {
          id: (0, _v65.createLiveDomName)(_v0, "canvas"),
          className: (0, _v65.createLiveDomName)(_v1, "canvas"),
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          left: 0,
          top: 0,
          width: (0, _v61.rem)(_v74.graphicsConfig.RENDERER.WIDTH),
          height: (0, _v61.rem)(_v74.graphicsConfig.RENDERER.HEIGHT),
          transformOrigin: "top left",
          transform: "scale(0.15)",
          overflow: "hidden",
          "transform-origin": "top left",
          children: (0, _v17.jsx)(_v95.Flex, {
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            maxWidth: (0, _v61.rem)(_v74.graphicsConfig.RENDERER.WIDTH / 2.5),
            padding: `0 ${(0, _v61.rem)(50)}`,
            children: _v8 ? (0, _v17.jsx)(_v436.LowerThird, {
              ..._v7,
              theme: _v5,
              scale: 2,
              scaleOrigin: "center"
            }) : null
          })
        })
      })
    });
  }
  function _v438({
    id: _v0 = (0, _v96.createDomName)("brand-theme-switcher"),
    className: _v1 = (0, _v96.createDomName)("brand-theme-switcher"),
    graphicsContext: {
      theme: _v2,
      graphicsActions: _v3
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      theme: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamBrandColorChanged: _v4
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v5 = (0, _v21.useRef)(_v4);
    _v5.current = _v4;
    let [_v6, _v7] = (0, _v21.useState)(!1),
      [_v8, _v9] = (0, _v21.useState)(_v2.font),
      [_v10, _v11] = (0, _v21.useState)(_v2.primaryColor),
      [_v12, _v13] = (0, _v21.useState)(_v2.secondaryColor),
      _v14 = (0, _v160.useSimpleNotification)(),
      _v15 = _v10 !== _v2.primaryColor || _v12 !== _v2.secondaryColor || _v8 !== _v2.font,
      _v16 = (0, _v21.useCallback)(() => {
        _v7(!0), _v3.updateTheme({
          font: _v8,
          primaryColor: _v10,
          secondaryColor: _v12
        }).then(() => {
          _v7(!1), _v421("save_gfx_branding");
        }).catch(() => {
          _v7(!1), _v14({
            message: _v66.translations.somethingWentWrongUploading
          });
        });
      }, [_v8, _v3, _v14, _v10, _v12]),
      _v17 = (0, _v21.useCallback)(() => {
        _v9(_v2.font), _v11(_v2.primaryColor), _v13(_v2.secondaryColor);
      }, [_v2]),
      _v18 = (0, _v21.useMemo)(() => (0, _v346.default)(_v0 => {
        _v421("update_primary_color", {
          primaryColorSelected: _v0
        }), _v5.current({
          liveStreamColorType: "primary"
        });
      }, 500), []),
      _v19 = (0, _v21.useMemo)(() => (0, _v346.default)(_v0 => {
        _v421("update_secondary_color", {
          secondaryColorSelected: _v0
        }), _v5.current({
          liveStreamColorType: "secondary"
        });
      }, 500), []),
      _v20 = (0, _v21.useCallback)(_v0 => {
        _v11(_v0), _v18(_v0);
      }, [_v18]),
      _v21 = (0, _v21.useCallback)(_v0 => {
        _v13(_v0), _v19(_v0);
      }, [_v19]);
    return (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      gap: (0, _v61.rem)(16),
      direction: "column",
      children: [(0, _v17.jsxs)(_v95.Flex, {
        direction: "column",
        gap: (0, _v61.rem)(8),
        children: [(0, _v17.jsx)(_v137.Header, {
          id: (0, _v96.createDomName)(_v0, "preview-header"),
          className: (0, _v96.createDomName)(_v1, "preview-header"),
          size: "sm",
          color: "text-primary",
          children: _v66.translations.colors
        }), (0, _v17.jsx)(_v437, {
          id: (0, _v96.createDomName)(_v0, "preview-content"),
          className: (0, _v96.createDomName)(_v1, "preview-header"),
          line: _v66.translations.primaryText,
          subline: _v66.translations.secondaryText,
          theme: {
            ..._v2,
            font: _v8,
            primaryColor: _v10,
            secondaryColor: _v12
          }
        })]
      }), (0, _v17.jsx)(_v435, {
        className: (0, _v96.createDomName)(_v1, "primary-color"),
        value: _v10,
        defaultValue: _v74.graphicsConfig.DEFAULT_THEME.primaryColor,
        label: _v66.translations.primaryColor,
        onChange: _v20
      }), (0, _v17.jsx)(_v435, {
        className: (0, _v96.createDomName)(_v1, "secondary-color"),
        value: _v12,
        defaultValue: _v74.graphicsConfig.DEFAULT_THEME.secondaryColor,
        label: _v66.translations.secondaryColor,
        onChange: _v21
      }), _v15 ? (0, _v17.jsxs)(_v95.Flex, {
        gap: (0, _v61.rem)(8),
        direction: "column",
        children: [(0, _v17.jsx)(_v107.Button, {
          id: (0, _v96.createDomName)(_v0, "save-button"),
          className: (0, _v96.createDomName)(_v1, "save-button"),
          variant: "primary",
          isLoading: _v6,
          size: "sm",
          onClick: _v16,
          children: _v66.translations.save
        }), (0, _v17.jsx)(_v107.Button, {
          id: (0, _v96.createDomName)(_v0, "cancel-button"),
          className: (0, _v96.createDomName)(_v1, "cancel-button"),
          variant: "secondary",
          size: "sm",
          onClick: _v17,
          children: _v190.T_CANCEL
        })]
      }) : null]
    });
  }
  function _v439({
    id: _v0 = (0, _v96.createDomName)("brand-tab"),
    className: _v1 = (0, _v96.createDomName)("brand-tab"),
    graphicsContext: {
      isHydrated: _v2
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      isHydrated: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v314.useScrollbarStyles)();
    return (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v66.translations.brand,
        controls: (0, _v17.jsx)(_v414.LeftPanelDismiss, {})
      }), (0, _v17.jsx)(_v413.LeftPanelContent, {
        gap: (0, _v61.rem)(16),
        children: (0, _v17.jsx)(_v106.Box, {
          id: (0, _v96.createDomName)(_v0, "scroll"),
          className: (0, _v96.createDomName)(_v1, "scroll"),
          width: "100%",
          sx: {
            ...(0, _v416.createTabListScrollStyle)({
              position: "inherit"
            }),
            ..._v3
          },
          children: _v2 ? (0, _v17.jsxs)(_v95.Flex, {
            id: (0, _v96.createDomName)(_v0, "scroll-box"),
            className: (0, _v96.createDomName)(_v1, "scroll-box"),
            direction: "column",
            marginRight: (0, _v61.rem)(4),
            gap: (0, _v61.rem)(16),
            children: [(0, _v17.jsx)(_v432, {
              id: (0, _v96.createDomName)(_v0, "logo-list"),
              className: (0, _v96.createDomName)(_v1, "logo-list")
            }), (0, _v17.jsx)(_v438, {
              id: (0, _v96.createDomName)(_v0, "theme-form"),
              className: (0, _v96.createDomName)(_v1, "theme-form")
            })]
          }) : (0, _v17.jsxs)(_v95.Flex, {
            direction: "column",
            gap: (0, _v61.rem)(16),
            children: [(0, _v17.jsx)(_v194.BokehSkeleton, {
              className: (0, _v96.createDomName)(_v1, "loader"),
              height: (0, _v61.rem)(156),
              borderRadius: (0, _v61.rem)(4)
            }), (0, _v17.jsx)(_v194.BokehSkeleton, {
              className: (0, _v96.createDomName)(_v1, "loader"),
              height: (0, _v61.rem)(275),
              borderRadius: (0, _v61.rem)(4)
            })]
          })
        })
      })]
    });
  }
  var _v440 = _v0.i(0),
    _v441 = _v0.i(0),
    _v442 = _v0.i(0),
    _v443 = _v0.i(0),
    _v444 = _v0.i(0),
    _v445 = _v0.i(0),
    _v446 = _v0.i(0),
    _v447 = _v0.i(0),
    _v448 = _v0.i(0);
  function _v449(_v0, _v1, _v2, _v3) {
    return (0, _v91.isGraphicAlreadyInScene)(_v0, _v1) ? _v1 && _v1.id === _v2 && _v3 === _v53.EIngestStatus.STREAMING ? _v136.LIVE_LAYOUT_COLOR : _v3 === _v53.EIngestStatus.ENDED ? _v136.INACTIVE_LAYOUT_COLOR : _v136.FOCUSED_STATE_COLOR : _v136.NONE_LAYOUT_COLOR;
  }
  var _v450 = _v0.i(0),
    _v451 = _v96;
  let _v452 = (0, _v21.forwardRef)(({
    className: _v0 = (0, _v451.createDomName)("draggable-container"),
    graphicType: _v1,
    graphicId: _v2,
    children: _v3,
    isInScene: _v4,
    draggable: _v5 = !0
  }, _v6) => {
    let _v7 = (0, _v28.useScope)(),
      _v8 = (0, _v21.useRef)(!1),
      _v9 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v0.nativeEvent.dataTransfer,
          _v2 = _v0.target;
        if (_v74.graphicsConfig.SCENE.GRAPHIC_THUMBNAIL.CUSTOM_LIST_DRAG.includes(_v1)) !function ({
          dataTransfer: _v0,
          graphicId: _v1,
          graphicType: _v2,
          scope: _v3
        }) {
          _v154(_v0, (0, _v21.createElement)(_v150, {
            graphicId: _v1,
            graphicType: _v2,
            scope: _v3,
            theme: _v74.graphicsConfig.DEFAULT_THEME
          }));
        }({
          scope: _v7,
          graphicId: _v2,
          graphicType: _v1,
          dataTransfer: _v1
        });else if (_v2.children.length) {
          let {
            width: _v0,
            height: _v1
          } = _v2.children[0].getBoundingClientRect();
          _v1.setDragImage(_v2.children[0], _v0 / 2, _v1 / 2);
        }
      }, [_v2, _v1, _v7]),
      _v10 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v0.nativeEvent.dataTransfer,
          _v2 = !0,
          {
            streamMode: _v3
          } = _v7.getContextOf(_v48.ComposerSessionStatusManager),
          {
            activeScene: _v4,
            scenes: _v5,
            scenesOrder: _v6
          } = _v7.getContextOf(_v56.SceneManager);
        _v3 === _v39.EComposerStreamModeType.SIMULIVE && _v4?.meta?.isScheduled && (_v2 = -1 === (0, _v161.pickScheduledScenesList)((0, _v161.pickSortedScenesList)(_v5, _v6)).findIndex(_v0 => _v0.id === _v4.id) || _v74.graphicsConfig.SCENE.CONTROLS.SCHEDULED_PLAYBACK_ALLOWED.includes(_v1));
        let _v7 = !(0, _v91.isGraphicAlreadyInScene)(_v2, _v4) && (0, _v91.findConflictingGraphicsWithType)(_v1, _v4).length > 0;
        return _v131({
          dataTransfer: _v1,
          graphicType: _v1,
          type: _v129.GRAPHIC,
          dropEffect: "move",
          textData: JSON.stringify({
            id: _v2,
            graphicType: _v1
          }),
          [_v129.IS_SCENE_PREVIEW_DROP_DISABLED]: !_v2,
          [_v129.IS_INDEX_DRAG_ALLOWED]: _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v1),
          [_v129.IS_FROM_PANEL]: !0,
          [_v129.IS_IN_SCENE]: _v4,
          [_v130[_v1]]: !0,
          [_v129.IS_SCENE_GRAPHICS_REPLACEMENTS]: _v7
        }), {
          type: _v129.GRAPHIC,
          id: _v2,
          graphicType: _v1,
          isScenePreviewDropDisabled: !_v2,
          isIndexDragAllowed: _v74.graphicsConfig.SCENE.CONTROLS.INDEXED_POSITION_ALLOWED.includes(_v1),
          isFromPanel: !0,
          isInScene: _v4,
          isSceneGraphicsReplacements: _v7
        };
      }, [_v2, _v1, _v4, _v7]),
      _v11 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v10(_v0);
        _v8.current = !0, _v9(_v0), _v7.getContextOf(_v125.DragDropManager)?.dragDropActions.startDragDrop(_v1);
      }, [_v9, _v10, _v7]),
      _v12 = (0, _v21.useCallback)(() => {
        _v8.current = !1, _v7.getContextOf(_v125.DragDropManager)?.dragDropActions.stopDragDrop();
      }, [_v7]);
    return (0, _v21.useEffect)(() => () => {
      _v8.current && _v7.getContextOf(_v125.DragDropManager)?.dragDropActions.stopDragDrop();
    }, [_v7]), (0, _v17.jsx)(_v106.Box, {
      className: _v0,
      ref: _v6,
      position: "relative",
      draggable: _v5,
      onDragStart: _v11,
      onDragEnd: _v12,
      children: _v3
    });
  });
  var _v453 = _v0.i(0),
    _v454 = _v0.i(0),
    _v455 = _v0.i(0),
    _v456 = _v0.i(816),
    _v457 = _v0.i(0),
    _v458 = _v0.i(0),
    _v459 = _v0.i(0),
    _v460 = _v0.i(0),
    _v461 = _v0.i(0),
    _v462 = _v0.i(0);
  (_v8 = {})[_v8.DEFAULT = 0] = "DEFAULT", _v8[_v8.IN_PROGRESS = 1] = "IN_PROGRESS", _v8[_v8.OK = 2] = "OK", _v8[_v8.INVALID = 3] = "INVALID";
  var _v463 = ((_v9 = {}).NAME = "name", _v9.TITLE = "title", _v9.MAIL = "mail", _v9);
  let _v464 = _v0 => 3 !== _v0 && 1 !== _v0;
  function _v465(_v0, _v1) {
    let _v2 = _v1?.trim();
    switch (_v0) {
      case "name":
        return !!(_v2 && _v2.length <= _v33.liveApplicationConfig.GUESTS.MAX_GUEST_NAME_LENGTH && _v2.length > 1);
      case "title":
        return _v2.length <= _v33.liveApplicationConfig.GUESTS.MAX_GUEST_TITLE_LENGTH;
      case "mail":
        return (0, _v462.isEmailValid)(_v1, _v33.liveApplicationConfig.GUESTS.MAX_GUEST_MAIL_LENGTH);
    }
    return !1;
  }
  let _v466 = (_v0, _v1, _v2, _v3, _v4, _v5, _v6) => {
    let [_v7, _v8] = (0, _v21.useState)(0),
      [_v9, _v10] = (0, _v21.useState)(_v2),
      _v11 = (0, _v21.useCallback)(_v0 => !_v6 && "" === _v0 || _v3(_v0), [_v3, _v6]),
      _v12 = (0, _v21.useCallback)(async _v0 => {
        _v8(1);
        try {
          if (_v11(_v0[_v1])) {
            switch (await _v5(_v0.id, {
              ..._v0
            }), _v1) {
              case "name":
                (0, _v222.trackSaveSpeakerName)();
                break;
              case "title":
                (0, _v222.trackSaveSpeakerTitle)();
                break;
              case "mail":
                (0, _v222.trackSaveSpeakerEmail)();
            }
            _v8(2);
          } else _v8(3);
        } catch (_v0) {
          console.error(_v0), _v8(3);
        }
      }, [_v0, _v1, _v5, _v11]),
      _v13 = (0, _v21.useMemo)(() => (0, _v397.default)(_v8, _v4), []),
      _v14 = (0, _v21.useMemo)(() => (0, _v397.default)(_v12, _v4), [_v0]),
      _v15 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v0.target.value ?? "";
        if (_v10(_v1), _v0 && _v0.id) {
          let _v0 = {};
          _v0[_v1] = _v1.trim(), _v14(_v0);
        } else _v13(_v11(_v1) ? 2 : 3);
      }, [_v9, _v0]);
    return {
      value: _v9,
      setValue: _v10,
      inputStatus: _v7,
      setInputStatus: _v8,
      onFieldChange: _v15
    };
  };
  function _v467({
    className: _v0 = (0, _v65.createLiveDomName)("guest-field-input"),
    label: _v1,
    value: _v2,
    inputStatus: _v3,
    onChange: _v4,
    placeholder: _v5 = "",
    optional: _v6 = !1,
    autoFocus: _v7 = !1,
    required: _v8,
    testId: _v9 = ""
  }) {
    let _v10 = (0, _v21.useRef)(null),
      _v11 = (0, _v21.useMemo)(() => 1 === _v3 ? (0, _v17.jsx)(_v157.Spinner, {
        size: "xs",
        color: "blue.500"
      }) : 2 === _v3 && _v2?.length ? (0, _v17.jsx)(_v300.Checkmark, {
        color: "status-positive-primary",
        "data-testid": "statusIconOk"
      }) : 3 === _v3 ? (0, _v17.jsx)(_v311.InfoCircle, {
        color: "status-destructive-primary",
        "data-testid": "statusIconInvalid"
      }) : null, [_v3, _v2?.length]);
    return (0, _v21.useEffect)(() => {
      _v7 && _v10.current?.focus({
        preventScroll: !0
      });
    }, [_v7]), (0, _v17.jsxs)(_v459.FormControl, {
      isRequired: _v8,
      isInvalid: 3 === _v3,
      position: "relative",
      width: "100%",
      className: _v0,
      children: [(0, _v17.jsx)(_v417.FormLabel, {
        size: "sm",
        children: _v6 ? `${_v1} (${_v66.translations.optional})` : _v1
      }), (0, _v17.jsxs)(_v461.InputGroup, {
        children: [(0, _v17.jsx)(_v458.Input, {
          ref: _v10,
          size: "sm",
          className: (0, _v65.createLiveDomName)(_v0, "input"),
          value: _v2,
          autoFocus: _v7,
          type: "text",
          placeholder: _v5,
          "data-testid": _v9,
          onChange: _v4
        }), (0, _v17.jsx)(_v460.InputRightElement, {
          height: "100%",
          children: _v11
        })]
      })]
    });
  }
  var _v468 = ((_v10 = _v468 || {}).DEFAULT = "default", _v10.LOADING = "loading", _v10.COMPLETE = "complete", _v10.FAILED = "failed", _v10);
  function _v469({
    className: _v0 = (0, _v65.createLiveDomName)("edit-guest-menu"),
    children: _v1,
    canSendEmails: _v2,
    guest: _v3,
    inviteUrl: _v4,
    isEditing: _v5,
    onCancelEditing: _v6,
    onUpdateGuest: _v7,
    onCreateGuest: _v8,
    onSendInvite: _v9,
    guestsEmailInvitesCreatedTimestamps: _v10,
    isEditingLowerThird: _v11 = !1,
    isGuestsViewTab: _v12 = !1
  }) {
    let {
        trackLiveStreamSpeakerInvited: _v13
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v14 = (0, _v28.useScope)(),
      _v15 = (0, _v287.useLogger)("🪲EDTGM"),
      [_v16, _v17] = (0, _v21.useState)("default"),
      _v18 = (0, _v21.useRef)(null),
      _v19 = (0, _v21.useCallback)(() => {
        _v5 && _v6(), _v17("default");
      }, [_v5, _v6]),
      [_v20, _v21] = (0, _v21.useState)(!1),
      [_v22, _v23] = (0, _v21.useState)(!1),
      [_v24, _v25] = (0, _v21.useState)(null),
      _v26 = (0, _v26.isApiError)(_v24) && _v24.data.body.errorCode === _v25.EApiErrorCode.REQUEST_RATE_LIMIT,
      {
        value: _v27,
        onFieldChange: _v28,
        inputStatus: _v29
      } = _v466(_v3, _v463.MAIL, _v3.mail, _v0 => _v465(_v463.MAIL, _v0), 300, _v7),
      {
        value: _v30,
        onFieldChange: _v31,
        inputStatus: _v32
      } = _v466(_v3, _v463.NAME, _v3.name, _v0 => _v465(_v463.NAME, _v0), 300, _v7, !0),
      {
        value: _v33,
        onFieldChange: _v34,
        inputStatus: _v35
      } = _v466(_v3, _v463.TITLE, _v3.title, _v0 => _v465(_v463.TITLE, _v0), 300, _v7);
    (0, _v21.useEffect)(() => {
      if (_v12) {
        let _v0 = _v10?.[_v3.id];
        _v0 && 10 >= Math.floor((Date.now() - _v0) / 0) ? _v17("complete") : _v17("default");
      }
    }, [_v10, _v3.id, _v5, _v12]);
    let _v36 = (0, _v21.useCallback)(() => {
        let {
            sessionInfo: {
              value: _v0
            }
          } = _v14.getContextOf(_v63.ComposerSessionManager),
          {
            userPreferencesActions: _v1
          } = _v14.getContextOf(_v52.UserPreferencesManager);
        (0, _v456.trackClickUpgrade)({
          upgradeLocation: _v126.EUpgradeLocationType.SEND_GUEST_SPEAKER_INVITE
        }), _v0?.owner?.capabilities?.hasEnterprise ? _v1.setEnterpriseUpgradeTiersModalState(!0) : (0, _v457.openNewFocusedTab)(_v353.vimeoConfig.PATH.REQUEST_DEMO_UPGRADE_BUTTON_PATH);
      }, [_v14]),
      _v37 = _v30 && _v464(_v35) && _v464(_v32) && _v464(_v29),
      _v38 = _v37 && _v27,
      _v39 = !!_v4,
      _v40 = (0, _v21.useCallback)(async () => {
        if (_v21(!0), !_v22) if (_v17("loading"), _v3?.id) try {
          await _v9(_v3.id), _v13({
            liveStreamInviteMethod: "send_invite_via_email"
          }), _v17("complete"), _v25(null), _v15.info("Sent guest invite for:", _v3.id);
        } catch (_v0) {
          _v15.error("Send guest invite failed:", _v3.id, _v0), _v17("default"), _v25(_v0);
        } finally {
          (0, _v222.trackClickSendEmail)(), _v18.current?.focus();
        } else {
          _v23(!0);
          try {
            await _v8({
              mail: _v27,
              name: _v30,
              title: _v33
            }, !0), _v25(null), _v17("complete"), _v13({
              liveStreamInviteMethod: "send_invite_via_email"
            }), (0, _v222.trackClickSendEmail)();
          } catch (_v0) {
            _v17("default"), _v25(_v0);
          } finally {
            _v23(!1), _v21(!1), _v18.current?.focus();
          }
        }
      }, [_v22, _v15, _v27, _v30, _v3, _v8, _v9, _v33, _v13]),
      _v41 = (0, _v21.useCallback)(() => {
        _v25(null);
      }, []);
    (0, _v21.useEffect)(() => {
      _v25(null);
    }, [_v5]);
    let _v42 = (0, _v17.jsxs)(_v95.Flex, {
      direction: "column",
      gap: (0, _v61.rem)(8),
      children: [(0, _v17.jsx)(_v292.Paragraph, {
        className: (0, _v65.createLiveDomName)(_v0, "header"),
        size: "lg",
        children: _v66.translations.speaker
      }), (0, _v17.jsxs)(_v383.PopoverBody, {
        display: "flex",
        flexDirection: "column",
        gap: (0, _v61.rem)(8),
        children: [(0, _v17.jsx)(_v467, {
          label: _v66.translations.name,
          value: _v30,
          autoFocus: !0,
          onChange: _v31,
          inputStatus: _v32,
          required: !0,
          testId: "guest-name-input"
        }), _v11 ? null : (0, _v17.jsx)(_v467, {
          label: _v66.translations.email,
          value: _v27,
          onChange: _v28,
          inputStatus: _v29,
          testId: "guest-email-input"
        }), (0, _v17.jsx)(_v467, {
          label: _v66.translations.title,
          value: _v33,
          onChange: _v34,
          inputStatus: _v35,
          testId: "guest-title-input"
        }), _v11 ? null : (0, _v17.jsxs)(_v17.Fragment, {
          children: [_v39 ? (0, _v17.jsx)(_v455.CopyField, {
            className: (0, _v65.createLiveDomName)(_v0, "link-copy"),
            title: (0, _v17.jsx)(_v137.Header, {
              color: "text-primary",
              size: "xs",
              marginBottom: (0, _v61.rem)(-4),
              children: _v66.translations.guestLink
            }),
            value: _v4 ?? "",
            size: "sm",
            copiedMessage: _v66.translations.copied,
            onAfterCopyClick: _v222.trackCopySpeakerInviteLink,
            copyButton: (0, _v17.jsx)(_v95.Flex, {
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              _hover: {
                background: "text-primary",
                svg: {
                  color: "text-button-inverted"
                }
              },
              borderRightRadius: "input-md",
              children: (0, _v17.jsx)(_v454.CopyPortrait, {
                boxSize: "2xs"
              })
            })
          }) : (0, _v17.jsx)(_v107.Button, {
            marginTop: (0, _v61.rem)(8),
            isDisabled: !_v37 || _v20,
            isLoading: _v20,
            width: "100%",
            borderRadius: (0, _v61.rem)(8),
            variant: "primary",
            size: "sm",
            onClick: () => {
              _v21(!0), _v22 || (_v23(!0), _v8({
                mail: _v27,
                name: _v30,
                title: _v33
              }, !1).then(() => {
                (0, _v222.trackClickGenerateLink)(), _v13({
                  liveStreamInviteMethod: "generate_invite_link"
                });
              }).catch(() => {}).finally(() => {
                _v23(!1), _v21(!1);
              }));
            },
            children: _v66.translations.generateInviteLink
          }), "complete" === _v16 ? (0, _v17.jsx)(_v343.Alert, {
            status: "success",
            size: "sm",
            fontSize: (0, _v61.rem)(14),
            children: _v66.translations.emailSent
          }) : null, (0, _v17.jsxs)(_v107.Button, {
            className: (0, _v65.createLiveDomName)(_v0, "send-email-button"),
            isDisabled: !_v38 || _v26 || "complete" === _v16,
            isLoading: "loading" === _v16,
            variant: "secondary",
            width: "100%",
            size: "sm",
            onClick: _v2 ? _v40 : _v36,
            children: [_v66.translations.sendInviteViaEmail, _v2 ? null : (0, _v17.jsx)(_v453.Badge, {
              marginLeft: (0, _v61.rem)(4),
              padding: (0, _v61.rem)(4),
              variant: "upgrade",
              borderRadius: (0, _v61.rem)(4),
              children: _v66.translations.upgrade
            })]
          }), _v24 ? (0, _v17.jsx)(_v343.Alert, {
            maxWidth: (0, _v61.rem)(238),
            status: "error",
            onClose: _v41,
            children: (0, _v17.jsx)(_v344.AlertTitle, {
              fontWeight: "regular",
              children: _v26 ? _v66.translations.errorSendEmailLimit : _v66.translations.errorSomethingWentWrong
            })
          }) : null]
        })]
      })]
    });
    return _v1 ? (0, _v17.jsx)(_v235.BokehPopover, {
      isOpen: _v5,
      inPortal: !0,
      placement: "right-start",
      triggerContent: (0, _v17.jsx)("div", {
        className: _v0,
        children: _v1
      }),
      content: (0, _v17.jsx)(_v106.Box, {
        width: (0, _v61.rem)(280),
        padding: (0, _v61.rem)(8),
        tabIndex: -1,
        ref: _v18,
        children: _v42
      }),
      onClose: _v19
    }) : (0, _v17.jsx)(_v106.Box, {
      className: _v0,
      width: (0, _v61.rem)(280),
      padding: (0, _v61.rem)(8),
      tabIndex: -1,
      ref: _v18,
      children: _v42
    });
  }
  function _v470({
    id: _v0 = (0, _v65.createLiveDomName)("broadcaster-edit-form"),
    broadcasterInfo: _v1,
    onEditBroadcaster: _v2
  }) {
    let _v3 = (0, _v21.useCallback)(async (_v0, _v1) => {
        await _v2(_v1);
      }, [_v2]),
      {
        value: _v4,
        onFieldChange: _v5,
        inputStatus: _v6
      } = _v466(_v1, "name", _v1.name, _v0 => _v465(_v463.NAME, _v0), 300, _v3, !0),
      {
        value: _v7,
        onFieldChange: _v8,
        inputStatus: _v9
      } = _v466(_v1, "title", _v1.title, _v0 => _v465(_v463.TITLE, _v0), 300, _v3);
    return (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v467, {
        className: (0, _v65.createLiveDomName)(_v0, "name-input"),
        label: _v66.translations.name,
        value: _v4,
        onChange: _v5,
        inputStatus: _v6,
        required: !0,
        autoFocus: !0,
        testId: "broadcaster-name-input"
      }), (0, _v17.jsx)(_v467, {
        className: (0, _v65.createLiveDomName)(_v0, "title-input"),
        label: _v66.translations.title,
        value: _v7,
        onChange: _v8,
        inputStatus: _v9,
        testId: "broadcaster-title-input"
      })]
    });
  }
  function _v471({
    className: _v0 = (0, _v65.createLiveDomName)("broadcaster-lower-third-form"),
    broadcasterInfo: _v1,
    isEditing: _v2,
    onCloseEditForm: _v3,
    onEditBroadcaster: _v4,
    children: _v5
  }) {
    return (0, _v21.useEffect)(() => () => _v3(), [_v3]), (0, _v17.jsx)(_v235.BokehPopover, {
      isOpen: _v2,
      inPortal: !0,
      placement: "right-start",
      content: (0, _v17.jsxs)(_v95.Flex, {
        className: _v0,
        direction: "column",
        padding: (0, _v61.rem)(8),
        minWidth: (0, _v61.rem)(280),
        gap: (0, _v61.rem)(8),
        children: [(0, _v17.jsx)(_v292.Paragraph, {
          className: (0, _v65.createLiveDomName)(_v0, "header"),
          size: "lg",
          children: _v66.translations.speaker
        }), (0, _v17.jsx)(_v470, {
          broadcasterInfo: _v1,
          onEditBroadcaster: _v4
        })]
      }),
      triggerContent: _v5,
      onClose: _v3
    });
  }
  var _v472 = _v0.i(0),
    _v473 = _v0.i(0),
    _v474 = _v0.i(0),
    _v475 = _v0.i(0),
    _v476 = _v0.i(0);
  function _v477({
    id: _v0 = (0, _v65.createLiveDomName)("image-upload"),
    className: _v1 = (0, _v65.createLiveDomName)("image-upload"),
    onUploadImage: _v2,
    imageSrc: _v3,
    onClearImage: _v4,
    isUploading: _v5
  }) {
    let {
        onMouseEnter: _v6,
        onMouseLeave: _v7,
        isItemHovered: _v8,
        onMouseHover: _v9
      } = (0, _v476.useSourceHoverControls)(),
      _v10 = (0, _v233.useColorModeValue)("var(--vimeo-colors-grayAlpha-100)", "var(--vimeo-colors-grayAlpha-700)"),
      _v11 = (0, _v233.useColorModeValue)("var(--vimeo-colors-grayAlpha-200)", "var(--vimeo-colors-grayAlpha-600)");
    return (0, _v17.jsxs)(_v95.Flex, {
      direction: "column",
      gap: (0, _v61.rem)(8),
      children: [(0, _v17.jsx)(_v109.Text, {
        id: (0, _v65.createLiveDomName)(_v0, "image-label"),
        variant: "body-md",
        color: "text-primary",
        children: _v66.translations.image
      }), (0, _v17.jsx)(_v95.Flex, {
        width: (0, _v61.rem)(116),
        height: (0, _v61.rem)(64),
        overflow: "hidden",
        borderRadius: (0, _v61.rem)(8),
        sx: {
          "& > label": {
            width: "100%",
            height: "100%"
          },
          "& > input": {
            display: "none"
          }
        },
        children: _v3 ? (0, _v17.jsxs)(_v106.Box, {
          width: "100%",
          height: "100%",
          position: "relative",
          onMouseEnter: _v6,
          onMouseLeave: _v7,
          onMouseMove: _v9,
          children: [(0, _v17.jsx)(_v425, {
            width: "100%",
            height: "100%",
            id: (0, _v65.createLiveDomName)(_v0, "image"),
            src: _v3,
            fit: "cover",
            chess: !1
          }), (0, _v17.jsxs)(_v106.Box, {
            visibility: _v8 ? "visible" : "hidden",
            children: [(0, _v17.jsx)(_v95.Flex, {
              position: "absolute",
              alignItems: "center",
              justifyContent: "center",
              top: (0, _v61.rem)(5.5),
              left: (0, _v61.rem)(4),
              width: (0, _v61.rem)(24),
              height: (0, _v61.rem)(24),
              sx: {
                "& span": {
                  height: "100%",
                  width: "100%"
                }
              },
              children: (0, _v17.jsx)(_v475.FileInput, {
                id: _v0,
                className: _v1,
                isDisabled: _v5,
                onChange: _v2,
                accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_IMAGE_TYPES,
                variant: "secondary",
                size: "sm",
                padding: 0,
                position: "relative",
                sx: {
                  height: "100%",
                  width: "100%",
                  padding: 0,
                  "& > input": {
                    display: "none"
                  }
                },
                label: (0, _v17.jsx)(_v214.BokehTooltip, {
                  label: _v66.translations.replace,
                  placement: "top",
                  children: (0, _v17.jsx)(_v95.Flex, {
                    background: _v10,
                    _hover: {
                      background: _v11
                    },
                    height: "100%",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: (0, _v61.rem)(6),
                    sx: (0, _v97.createSvgStyle)({
                      size: 16
                    }),
                    children: (0, _v17.jsx)(_v139.SyncRefresh, {})
                  })
                })
              })
            }), (0, _v17.jsx)(_v106.Box, {
              position: "absolute",
              top: (0, _v61.rem)(4),
              right: (0, _v61.rem)(4),
              children: (0, _v17.jsx)(_v214.BokehTooltip, {
                label: _v66.translations.delete,
                placement: "top",
                children: (0, _v17.jsx)(_v213.IconButton, {
                  "aria-label": "Delete image",
                  size: "xs",
                  variant: "blur",
                  icon: (0, _v17.jsx)(_v424.TrashBin, {}),
                  onClick: _v4
                })
              })
            }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
              color: "input-stroke-hover",
              size: "sm",
              width: 2
            })]
          })]
        }) : (0, _v17.jsx)(_v475.FileInput, {
          id: _v0,
          className: _v1,
          isDisabled: _v5,
          accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_IMAGE_TYPES,
          variant: "secondary",
          position: "relative",
          label: (0, _v17.jsx)(_v95.Flex, {
            justifyContent: "center",
            alignItems: "center",
            grow: 1,
            children: (0, _v17.jsx)(_v369.Plus, {
              boxSize: (0, _v61.rem)(20)
            })
          }),
          onChange: _v2
        })
      })]
    });
  }
  function _v478({
    id: _v0 = (0, _v96.createDomName)("lower-third-form"),
    className: _v1 = (0, _v96.createDomName)("lower-third-form"),
    defaultGraphic: _v2,
    onFormClose: _v3,
    graphicsContext: {
      theme: _v4,
      graphicsActions: _v5
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      theme: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamLowerThirdSaved: _v6
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      [_v7, _v8] = (0, _v21.useState)(null),
      [_v9, _v10] = (0, _v21.useState)(!1),
      [_v11, _v12] = (0, _v21.useState)(null),
      [_v13, _v14] = (0, _v21.useState)(() => (0, _v472.default)(_v2)),
      _v15 = (0, _v160.useSimpleNotification)(),
      _v16 = (0, _v21.useCallback)((_v0, _v1) => _v5.saveLowerThird(_v0, _v1), [_v5]),
      _v17 = (0, _v21.useMemo)(() => !(0, _v473.default)(_v2, _v13), [_v2, _v13]),
      _v18 = (0, _v21.useMemo)(() => _v11?.hasError ? {
        hasError: !0,
        fileNames: [_v11.fileName],
        fileSizeLimit: _v11.fileSizeLimit
      } : {
        hasError: !1,
        fileNames: [],
        fileSizeLimit: 0
      }, [_v11]),
      _v19 = !!_v13.line?.trim(),
      {
        imageSrc: _v20,
        line: _v21,
        subLine: _v22
      } = _v13,
      _v23 = _v13.id ? _v66.translations.editLowerThird : _v66.translations.addLowerThird;
    return (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v95.Flex, {
        id: (0, _v96.createDomName)(_v0, "header"),
        marginBottom: (0, _v61.rem)(12),
        children: (0, _v17.jsx)(_v474.BackButtonPanel, {
          onClick: _v3,
          title: _v23
        })
      }), (0, _v17.jsx)(_v95.Flex, {
        id: _v0,
        direction: "column",
        grow: 1,
        children: (0, _v17.jsxs)(_v95.Flex, {
          height: "100%",
          direction: "column",
          gap: (0, _v61.rem)(16),
          children: [(0, _v17.jsx)(_v437, {
            id: (0, _v96.createDomName)(_v0, "preview"),
            line: _v21,
            imageSrc: _v20,
            subline: _v22,
            theme: _v4
          }), (0, _v17.jsx)(_v477, {
            onUploadImage: _v0 => {
              let _v1 = _v0.target.files?.item(0);
              if (!_v1) return;
              _v0.target.value = "";
              let [_v2] = (0, _v423.getFileNameAndExtension)(_v1.name);
              if (_v2) {
                if (_v1.size > _v74.graphicsConfig.UPLOADS.FILE_UPLOAD_LIMIT) return void _v12({
                  hasError: !0,
                  fileName: _v2,
                  fileSizeLimit: _v74.graphicsConfig.UPLOADS.FILE_UPLOAD_LIMIT / 0 / 0
                });
                _v10(!0), _v12(null), (0, _v423.getBase64Image)(_v1).then(_v0 => {
                  _v8(_v1), _v14({
                    ..._v13,
                    imageSrc: String(_v0),
                    imageFileName: String(_v2)
                  }), (0, _v450.trackUploadLowerThirdImage)();
                }).catch(() => {
                  _v15({
                    message: _v66.translations.somethingWentWrongUploading
                  });
                }).finally(() => {
                  _v10(!1);
                });
              }
            },
            imageSrc: _v20,
            onClearImage: () => {
              _v8(null), _v14({
                ..._v13,
                imageSrc: ""
              });
            },
            isUploading: _v9
          }), (0, _v17.jsxs)(_v95.Flex, {
            id: (0, _v96.createDomName)(_v0, "inputs"),
            className: (0, _v96.createDomName)(_v1, "inputs"),
            direction: "column",
            gap: (0, _v61.rem)(16),
            children: [(0, _v17.jsxs)(_v459.FormControl, {
              children: [(0, _v17.jsx)(_v417.FormLabel, {
                size: "sm",
                children: _v66.translations.primaryText
              }), (0, _v17.jsx)(_v458.Input, {
                id: (0, _v96.createDomName)(_v0, "line-input"),
                required: !0,
                maxLength: _v74.graphicsConfig.VALIDATION.LOWER_THIRD_LINE_MAX_LENGTH,
                isDisabled: _v9,
                value: _v21 || "",
                size: "sm",
                onChange: _v0 => {
                  _v14({
                    ..._v13,
                    line: _v0.target.value
                  });
                },
                "data-testid": "lowerThirdLine"
              })]
            }), (0, _v17.jsxs)(_v459.FormControl, {
              children: [(0, _v17.jsx)(_v417.FormLabel, {
                size: "sm",
                children: _v66.translations.secondaryTextOptional
              }), (0, _v17.jsx)(_v458.Input, {
                id: (0, _v96.createDomName)(_v0, "subline-input"),
                maxLength: _v74.graphicsConfig.VALIDATION.LOWER_THIRD_LINE_MAX_LENGTH,
                isDisabled: _v9,
                value: _v22 || "",
                size: "sm",
                onChange: _v0 => {
                  _v14({
                    ..._v13,
                    subLine: _v0.target.value
                  });
                },
                "data-testid": "lowerThirdSubLine"
              })]
            })]
          }), (0, _v17.jsxs)(_v95.Flex, {
            direction: "column",
            gap: (0, _v61.rem)(8),
            children: [(0, _v17.jsx)(_v107.Button, {
              id: (0, _v96.createDomName)(_v0, "save-button"),
              variant: "primary",
              isLoading: _v9,
              isDisabled: !_v19 || _v9 || !_v17,
              "data-testid": "saveButton",
              size: "sm",
              onClick: () => {
                _v19 && (_v10(!0), (0, _v450.trackSaveOtherLowerThird)({
                  hasPrimaryText: !!_v21,
                  hasSecondaryText: !!_v22
                }), _v16(_v13, _v7).then(() => {
                  _v6({
                    liveStreamHasImage: !!(_v13.imageSrc?.trim() || _v7)
                  }), _v3();
                }).catch(() => {
                  _v10(!1), _v15({
                    message: _v66.translations.somethingWentWrongUploading
                  });
                }));
              },
              children: _v66.translations.save
            }), (0, _v17.jsx)(_v107.Button, {
              id: (0, _v96.createDomName)(_v0, "cancel-button"),
              variant: "secondary",
              "data-testid": "cancelButton",
              size: "sm",
              onClick: () => {
                _v8(null), _v10(!1), _v3();
              },
              children: _v190.T_CANCEL
            })]
          })]
        })
      }), (0, _v17.jsx)(_v420, {
        id: (0, _v96.createDomName)(_v0, "lower-third-image-error-modal"),
        isOpen: _v18.hasError,
        title: _v66.translations.fileTooLarge,
        message: (0, _v190.T_FILE_CANT_BE_UPLOADED)(_v18.fileNames.length, _v18.fileSizeLimit),
        fileNames: _v18.fileNames,
        footerText: _v66.translations.imagesMustBeSmaller,
        closeButtonLabel: _v190.T_CLOSE,
        onClose: () => _v12(null)
      })]
    });
  }
  var _v479 = _v0.i(0),
    _v480 = _v0.i(0),
    _v481 = _v0.i(0);
  function _v482({
    className: _v0 = (0, _v65.createLiveDomName)("graphics-item-menu"),
    onEditClick: _v1,
    onDeleteClick: _v2
  }) {
    let _v3 = (0, _v21.useMemo)(() => [{
      key: "edit",
      className: (0, _v65.createLiveDomName)(_v0, "edit-item"),
      label: _v66.translations.edit,
      onClick: _v1
    }, {
      key: "delete",
      className: (0, _v65.createLiveDomName)(_v0, "delete-item"),
      label: _v66.translations.removeFromEvent,
      onClick: _v2
    }], [_v0, _v1, _v2]);
    return (0, _v17.jsx)(_v17.Fragment, {
      children: _v3.map(({
        key: _v0,
        className: _v1,
        label: _v2,
        onClick: _v3
      }) => "edit" !== _v0 || _v1 ? (0, _v17.jsx)(_v481.BokehMenuItem, {
        className: _v1,
        onClick: _v3,
        children: _v2
      }, _v0) : null)
    });
  }
  var _v483 = _v0.i(0);
  function _v484({
    id: _v0,
    className: _v1,
    isInScene: _v2,
    top: _v3 = (0, _v61.rem)(6),
    left: _v4 = (0, _v61.rem)(6),
    position: _v5 = "absolute",
    variant: _v6,
    ..._v7
  }) {
    let _v8 = _v2 ? _v66.translations.removeFromScene : _v66.translations.addToScene;
    return (0, _v17.jsx)(_v214.BokehTooltip, {
      gutter: 8,
      shouldWrapChildren: !1,
      label: _v8,
      children: (0, _v17.jsx)(_v213.IconButton, {
        id: _v0,
        className: _v1,
        position: _v5,
        left: _v4,
        top: _v3,
        zIndex: 20,
        "aria-label": _v8,
        variant: _v6 || "secondary",
        size: "xs",
        icon: _v2 ? (0, _v17.jsx)(_v483.MinusCircle, {}) : (0, _v17.jsx)(_v369.Plus, {}),
        ..._v7
      })
    });
  }
  function _v485({
    id: _v0 = (0, _v96.createDomName)("lower-third-item"),
    className: _v1 = (0, _v96.createDomName)("lower-third-item"),
    item: _v2,
    isInScene: _v3,
    isGuests: _v4,
    onEdit: _v5,
    onGuestEdit: _v6,
    onDelete: _v7,
    onToggleInScene: _v8
  }) {
    let _v9 = (0, _v233.useColorModeValue)("slate.300", "grayscale.600"),
      {
        onMouseEnter: _v10,
        onMouseLeave: _v11,
        isMenuOpen: _v12,
        isItemHovered: _v13,
        onCloseMenu: _v14,
        onToggleMenu: _v15
      } = (0, _v476.useSourceHoverControls)(),
      {
        id: _v16,
        line: _v17,
        subLine: _v18,
        imageSrc: _v19
      } = _v2;
    return (0, _v17.jsxs)(_v95.Flex, {
      id: _v1,
      className: _v1,
      "data-id": _v16,
      borderRadius: "input-md",
      position: "relative",
      alignItems: "center",
      padding: `${(0, _v61.rem)(8)} ${(0, _v61.rem)(16)}`,
      width: "100%",
      minHeight: (0, _v61.rem)(56),
      backgroundColor: "fill-component",
      onMouseEnter: _v10,
      onMouseLeave: _v11,
      children: [_v4 ? null : (0, _v17.jsxs)(_v138.Center, {
        background: "fill-surface",
        borderRadius: "sm",
        marginRight: (0, _v61.rem)(8),
        children: [_v19 ? (0, _v17.jsx)(_v425, {
          id: (0, _v96.createDomName)(_v0, "image-preview"),
          className: (0, _v96.createDomName)(_v1, "image-preview"),
          src: _v19,
          height: (0, _v61.rem)(36),
          width: (0, _v61.rem)(36),
          fit: "contain",
          chess: !1,
          children: _v19 ? null : (0, _v17.jsx)(_v95.Flex, {
            id: (0, _v96.createDomName)(_v0, "placeholder"),
            className: (0, _v96.createDomName)(_v1, "placeholder"),
            justifyContent: "center",
            alignItems: "center",
            width: (0, _v61.rem)(40),
            height: (0, _v61.rem)(40),
            borderRadius: (0, _v61.rem)(4),
            overflow: "hidden",
            backgroundColor: _v9,
            children: (0, _v17.jsx)(_v403.Image, {
              color: "white"
            })
          })
        }) : null, _v19 ? null : (0, _v17.jsx)(_v95.Flex, {
          background: "fill-surface",
          padding: "sm",
          borderRadius: "sm",
          alignItems: "center",
          justifyContent: "center",
          children: (0, _v17.jsx)(_v405.LowerThird, {
            boxSize: (0, _v61.rem)(20)
          })
        })]
      }), (0, _v17.jsxs)(_v106.Box, {
        id: (0, _v96.createDomName)(_v0, "text"),
        className: (0, _v96.createDomName)(_v1, "text"),
        maxWidth: _v4 ? "85%" : "60%",
        children: [(0, _v17.jsx)(_v292.Paragraph, {
          id: (0, _v96.createDomName)(_v0, "line"),
          className: (0, _v96.createDomName)(_v1, "line"),
          size: "sm",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontWeight: "bold",
          children: _v17
        }), (0, _v17.jsx)(_v292.Paragraph, {
          id: (0, _v96.createDomName)(_v0, "subline"),
          className: (0, _v96.createDomName)(_v1, "subline"),
          size: "sm",
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          fontWeight: 400,
          children: _v18
        })]
      }), _v13 ? (0, _v17.jsx)(_v95.Flex, {
        id: (0, _v96.createDomName)(_v0, "controls"),
        className: (0, _v96.createDomName)(_v1, "controls"),
        position: "absolute",
        right: (0, _v61.rem)(8),
        children: _v4 ? (0, _v17.jsx)(_v213.IconButton, {
          id: (0, _v96.createDomName)(_v0, "edit-button"),
          className: (0, _v96.createDomName)(_v1, "edit-button"),
          "aria-label": "edit",
          icon: (0, _v17.jsx)(_v479.EditPencil, {}),
          size: "xs",
          variant: "secondary",
          onClick: () => {
            _v6(_v2.id), (0, _v450.trackOpenGuestLowerThirdEditModal)();
          }
        }) : (0, _v17.jsxs)(_v95.Flex, {
          gap: (0, _v61.rem)(2),
          children: [(0, _v17.jsx)(_v484, {
            id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
            className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
            position: "relative",
            left: "0",
            top: "0",
            isInScene: _v3,
            onClick: () => {
              _v8(_v2);
            }
          }), (0, _v17.jsx)(_v480.BokehMenu, {
            id: (0, _v96.createDomName)(_v0, "edit-menu"),
            className: (0, _v96.createDomName)(_v1, "edit-menu"),
            isOpen: _v12,
            menuList: (0, _v17.jsx)(_v482, {
              onEditClick: () => {
                _v5(_v2), (0, _v450.trackOpenOtherLowerThirdEditModal)();
              },
              onDeleteClick: () => {
                _v7(_v2), (0, _v450.trackRemoveOtherLowerThirdFromEvent)();
              }
            }),
            onClose: _v14,
            onClick: _v15
          })]
        })
      }) : null]
    });
  }
  let _v486 = {
    id: "",
    type: _v88.EGraphicsDescriptorType.LOWER_THIRD,
    line: "",
    subLine: "",
    imageSrc: "",
    imageFileName: "",
    createdAt: 0
  };
  function _v487({
    id: _v0 = (0, _v65.createLiveDomName)("lower-third-tab"),
    className: _v1 = (0, _v65.createLiveDomName)("lower-third-tab"),
    sceneContext: {
      activeScene: _v2,
      sceneInProgram: _v3,
      sceneActions: _v4
    } = (0, _v28.useManager)(_v56.SceneManager),
    graphicsContext: {
      graphicsActions: _v5,
      lowerthirdList: _v6,
      globalList: _v7
    } = (0, _v28.useManager)(_v82.GraphicsManager),
    guestsContext: {
      guests: _v8,
      guestsActions: _v9
    } = (0, _v28.useManager)(_v146.GuestsManager),
    composerSessionStatusContext: {
      ingestStatus: _v10
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0])
  }) {
    let _v11 = (0, _v28.useScope)(),
      {
        setIsHeaderEnabled: _v12
      } = (0, _v448.useResponsiveSidebarContext)(),
      [_v13, _v14] = (0, _v21.useState)(null),
      [_v15, _v16] = (0, _v21.useState)(0),
      [_v17, _v18] = (0, _v21.useState)(_v486),
      [_v19, _v20] = (0, _v21.useState)(!1),
      _v21 = (0, _v21.useMemo)(() => Object.values(_v6).sort(_v422.graphicsComparator), [_v6]),
      _v22 = (0, _v21.useMemo)(() => _v8 ? Object.values(_v8).reduce((_v0, _v1) => (_v0.push({
        id: (0, _v147.formatConnectionUidByType)(_v38.EAgoraConnectionType.GUEST, _v1.id),
        line: _v1.name,
        subLine: _v1.title,
        imageSrc: "",
        imageFileName: "",
        createdAt: _v1.createdAt,
        mail: _v1.mail
      }), _v0), []) : [], [_v8]),
      _v23 = (0, _v21.useMemo)(() => _v7[_v74.graphicsConfig.BROADCASTER.LOWERTHIRD_KEY], [_v7]),
      _v24 = (0, _v21.useMemo)(() => {
        let _v0 = _v7[_v74.graphicsConfig.BROADCASTER.LOWERTHIRD_KEY];
        return {
          name: _v0?.line ?? "",
          title: _v0?.subLine ?? "",
          mail: "",
          createdAt: 0,
          isAudioMuted: !1,
          isVideoMuted: !1,
          id: "BROADCASTER"
        };
      }, [_v7]),
      _v25 = (0, _v21.useMemo)(() => [{
        tabLabel: _v66.translations.scenes,
        tabId: "scenes-lowerthird",
        isGuests: !1,
        graphicsList: _v21
      }, {
        tabLabel: _v66.translations.speakers,
        tabId: "guests-lowerthird",
        isGuests: !0,
        graphicsList: _v23 ? [_v23, ..._v22] : _v22
      }], [_v21, _v22, _v23]),
      _v26 = (0, _v21.useCallback)(() => {
        _v12(!1), _v20(!0);
      }, [_v12]),
      _v27 = (0, _v21.useCallback)(_v0 => {
        _v18(_v0), _v26();
      }, [_v26]),
      _v28 = (0, _v21.useCallback)(_v0 => {
        _v14(_v13 === _v0 ? null : _v0);
      }, [_v13]),
      _v29 = (0, _v21.useCallback)(() => {
        _v14(null);
      }, []),
      _v30 = (0, _v21.useCallback)(async (_v0, _v1) => {
        await _v9.updateGuest(_v0, _v1);
      }, [_v9]),
      _v31 = (0, _v21.useCallback)(async _v0 => {
        await _v5.updateBroadcasterLowerThird(_v0);
      }, [_v5]),
      _v32 = (0, _v21.useCallback)(() => {
        _v27(_v486), (0, _v450.trackClickAddOtherLowerThird)();
      }, [_v27]),
      _v33 = _v164(_v88.EGraphicsDescriptorType.LOWER_THIRD, _v2, _v4, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v34 = (0, _v21.useCallback)(({
        id: _v0,
        type: _v1
      }) => _v5.removeGraphic(_v1, _v0), [_v5]),
      _v35 = (0, _v21.useCallback)(_v0 => {
        _v16(_v0);
      }, []),
      _v36 = (0, _v21.useCallback)(() => {
        _v11.emitSignal({
          type: _v51.ELiveSignal.LIVE_PANEL_TAB_CHANGE_REQUEST,
          data: _v102.SPEAKERS
        });
      }, [_v11]),
      _v37 = (0, _v314.useScrollbarStyles)();
    return _v19 ? (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: (0, _v17.jsx)(_v413.LeftPanelContent, {
        withTopPadding: !0,
        children: (0, _v17.jsx)(_v478, {
          id: (0, _v65.createLiveDomName)(_v0, "form"),
          onFormClose: () => {
            _v20(!1), _v12(!0), _v18(_v486);
          },
          defaultGraphic: _v17
        })
      })
    }) : (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v66.translations.lowerThirds,
        controls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v445.TooltipIconButton, {
            id: (0, _v65.createLiveDomName)(_v0, "add-button"),
            className: (0, _v65.createLiveDomName)(_v1, "add-button"),
            "aria-label": _v66.translations.addLowerThird,
            icon: (0, _v17.jsx)(_v369.Plus, {}),
            size: "sm",
            variant: "tertiary",
            placement: "bottom",
            label: _v66.translations.addLowerThird,
            onClick: _v32
          }), (0, _v17.jsx)(_v414.LeftPanelDismiss, {
            id: (0, _v65.createLiveDomName)(_v0, "dismiss-button"),
            className: (0, _v65.createLiveDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v17.jsx)(_v413.LeftPanelContent, {
        children: (0, _v17.jsxs)(_v440.Tabs, {
          id: (0, _v65.createLiveDomName)(_v0, "tabs"),
          index: _v15,
          size: "sm",
          sx: _v416.TABS_STYLES,
          flexGrow: 1,
          position: "relative",
          onChange: _v35,
          children: [(0, _v17.jsxs)(_v441.TabList, {
            children: [_v25.map(({
              tabLabel: _v0,
              tabId: _v1
            }) => (0, _v17.jsx)(_v442.Tab, {
              id: (0, _v65.createLiveDomName)(_v0, "tab"),
              children: _v0
            }, _v1)), (0, _v17.jsx)(_v440.TabIndicator, {})]
          }), (0, _v17.jsx)(_v444.TabPanels, {
            sx: _v416.TAB_PANELS_STYLES,
            children: _v25.map(({
              tabId: _v0,
              isGuests: _v1,
              graphicsList: _v2
            }, _v3) => (0, _v17.jsx)(_v443.TabPanel, {
              id: (0, _v65.createLiveDomName)(_v0, "tab", _v0),
              tabIndex: _v3,
              sx: _v416.TAB_PANEL_STYLES,
              maxWidth: "100%",
              maxHeight: "100%",
              overflowY: "visible",
              children: (0, _v17.jsxs)(_v95.Flex, {
                id: (0, _v65.createLiveDomName)(_v0, "tab"),
                height: "100%",
                sx: _v416.TOOL_TAB_ITEM_STYLE,
                children: [(0, _v17.jsx)(_v106.Box, {
                  id: (0, _v65.createLiveDomName)(_v0, "list"),
                  sx: {
                    ...(0, _v416.createTabListScrollStyle)(),
                    ..._v37
                  },
                  children: (0, _v17.jsxs)(_v106.Box, {
                    id: (0, _v65.createLiveDomName)(_v0, "columns"),
                    sx: (0, _v416.createTabListColumnStyle)(!1),
                    children: [_v2.map(_v0 => {
                      let _v1 = (0, _v91.isGraphicAlreadyInScene)(_v0.id, _v2),
                        _v2 = _v449(_v0.id, _v2, _v3, _v10),
                        _v3 = _v0.id === _v13,
                        _v4 = (0, _v17.jsxs)(_v17.Fragment, {
                          children: [(0, _v17.jsx)(_v485, {
                            item: _v0,
                            overlayColor: _v2,
                            isInScene: _v1,
                            isGuests: _v1,
                            onEdit: _v27,
                            onGuestEdit: _v3 ? _v29 : _v28,
                            onDelete: _v34,
                            onToggleInScene: _v33
                          }, _v0.id), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                            color: _v2,
                            width: 2,
                            size: "sm",
                            borderRadius: 12
                          })]
                        });
                      if (!_v1) return (0, _v17.jsx)(_v106.Box, {
                        sx: _v416.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                        children: (0, _v17.jsx)(_v452, {
                          graphicType: _v88.EGraphicsDescriptorType.LOWER_THIRD,
                          graphicId: _v0.id,
                          isInScene: _v1,
                          children: _v4
                        })
                      }, _v0.id);
                      if (_v0.id === _v38.EAgoraConnectionType.BROADCASTER) return (0, _v17.jsx)(_v106.Box, {
                        sx: _v416.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                        children: (0, _v17.jsx)(_v471, {
                          broadcasterInfo: _v24,
                          isEditing: _v3,
                          onEditBroadcaster: _v31,
                          onCloseEditForm: _v29,
                          children: (0, _v17.jsx)("div", {
                            children: _v4
                          })
                        })
                      }, "form");
                      let _v5 = (0, _v147.parseUidFromAgora)(_v0.id),
                        _v6 = Object.values(_v8).find(_v0 => _v0.id === _v5);
                      return _v6 ? (0, _v17.jsx)(_v106.Box, {
                        sx: _v416.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                        children: (0, _v17.jsx)(_v469, {
                          canSendEmails: !1,
                          isEditingLowerThird: !0,
                          guest: _v6,
                          inviteUrl: null,
                          isEditing: _v3,
                          onCancelEditing: _v29,
                          onUpdateGuest: _v30,
                          onCreateGuest: _v64.CallablePlaceholderAsync,
                          onSendInvite: _v64.CallablePlaceholderAsync,
                          children: (0, _v17.jsx)("div", {
                            children: _v4
                          })
                        })
                      }, _v0.id) : null;
                    }), _v1 ? (0, _v17.jsx)(_v95.Flex, {
                      marginLeft: (0, _v61.rem)(2),
                      marginTop: (0, _v61.rem)(12),
                      fontSize: (0, _v61.rem)(12),
                      children: (0, _v17.jsx)(_v109.Text, {
                        id: (0, _v65.createLiveDomName)(_v0, "view-sources-link"),
                        variant: "body-xl",
                        fontSize: "text-xs",
                        textDecoration: "underline",
                        cursor: "pointer",
                        onClick: _v36,
                        children: _v66.translations.viewGuestSources
                      })
                    }) : null, 0 !== _v2.length || _v1 ? null : (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
                      isWithScroll: !0,
                      icon: (0, _v17.jsx)(_v405.LowerThird, {
                        boxSize: "lg"
                      }),
                      buttonLeftIcon: (0, _v17.jsx)(_v369.Plus, {}),
                      buttonLabel: _v66.translations.addLowerThird,
                      description: _v66.translations.addLowerThirdDescription,
                      onButtonClick: _v32
                    })]
                  })
                }), (0, _v17.jsx)(_v106.Box, {
                  position: "relative",
                  children: (0, _v17.jsx)(_v447.HorizontalScrollShadow, {})
                })]
              })
            }, _v0))
          })]
        })
      })]
    });
  }
  var _v488 = _v0.i(0),
    _v489 = _v0.i(0),
    _v490 = _v0.i(0);
  let _v491 = "https://slides.googleapis.com/v1/presentations";
  function _v492(_v0) {
    return new Promise(_v0 => setTimeout(_v0, _v0));
  }
  async function _v493(_v0, _v1, _v2) {
    let _v3 = new AbortController(),
      _v4 = setTimeout(() => _v3.abort(), 0),
      _v5 = () => _v3.abort();
    _v2?.aborted && _v3.abort(), _v2?.addEventListener("abort", _v5);
    try {
      return await fetch(_v0, {
        ..._v1,
        signal: _v3.signal
      });
    } finally {
      clearTimeout(_v4), _v2?.removeEventListener("abort", _v5);
    }
  }
  async function _v494(_v0, _v1, _v2, _v3 = 0) {
    let _v4;
    try {
      _v4 = await _v493(_v0, {
        headers: {
          Authorization: `Bearer ${_v1}`
        }
      }, _v2);
    } catch {
      throw "GENERIC";
    }
    if (401 === _v4.status) throw "AUTH_EXPIRED";
    if (429 === _v4.status || 503 === _v4.status) {
      if (_v3 >= 6 || _v2?.aborted) throw "GENERIC";
      return await _v492(0), _v494(_v0, _v1, _v2, _v3 + 1);
    }
    if (!_v4.ok) throw "GENERIC";
    try {
      return await _v4.json();
    } catch {
      throw "GENERIC";
    }
  }
  async function _v495(_v0, _v1, _v2) {
    return ((await _v494(`${_v491}/${encodeURIComponent(_v0)}?fields=slides.objectId`, _v1, _v2)).slides ?? []).map(_v0 => _v0.objectId).filter(_v0 => !!_v0);
  }
  async function _v496(_v0, _v1, _v2, _v3) {
    let _v4 = new URLSearchParams({
        "thumbnailProperties.mimeType": "PNG",
        "thumbnailProperties.thumbnailSize": "LARGE",
        fields: "contentUrl"
      }),
      _v5 = await _v494(`${_v491}/${encodeURIComponent(_v0)}/pages/${encodeURIComponent(_v1)}/thumbnail?${_v4}`, _v2, _v3);
    if (!_v5.contentUrl) throw "GENERIC";
    return _v5.contentUrl;
  }
  async function _v497(_v0, _v1, _v2 = 0) {
    let _v3;
    try {
      _v3 = await _v493(_v0, {}, _v1);
    } catch {
      _v3 = void 0;
    }
    if (!_v1?.aborted && (!_v3 || _v3.status >= 500 || 429 === _v3.status) && _v2 < 4) return await _v492(0 * 2 ** _v2), _v497(_v0, _v1, _v2 + 1);
    if (!_v3 || !_v3.ok) throw "GENERIC";
    return _v3.blob();
  }
  async function _v498(_v0) {
    let _v1;
    try {
      _v1 = await createImageBitmap(_v0);
    } catch {
      throw "GENERIC";
    }
    try {
      let {
          width: _v0,
          height: _v1
        } = _v1,
        _v2 = document.createElement("canvas");
      _v2.width = _v0, _v2.height = _v1;
      let _v3 = _v2.getContext("2d");
      if (!_v3) throw "GENERIC";
      return _v3.fillStyle = "#ffffff", _v3.fillRect(0, 0, _v0, _v1), _v3.drawImage(_v1, 0, 0), {
        jpeg: await new Promise((_v0, _v1) => {
          _v2.toBlob(_v0 => {
            _v0 ? _v0.arrayBuffer().then(_v0 => _v0(new Uint8Array(_v0))).catch(() => _v1("GENERIC")) : _v1("GENERIC");
          }, "image/jpeg", .95);
        }),
        width: _v0,
        height: _v1
      };
    } finally {
      _v1.close();
    }
  }
  async function _v499(_v0, _v1, _v2) {
    let _v3 = Array(_v0.length),
      _v4 = 0,
      _v5 = !1,
      _v6 = async () => {
        for (; _v4 < _v0.length && !_v5;) {
          let _v0 = _v4++;
          try {
            _v3[_v0] = await _v2(_v0[_v0], _v0);
          } catch (_v0) {
            throw _v5 = !0, _v0;
          }
        }
      };
    return await Promise.all(Array.from({
      length: Math.min(_v1, _v0.length)
    }, _v6)), _v3;
  }
  async function _v500(_v0, _v1, _v2, _v3) {
    let _v4 = new AbortController(),
      _v5 = () => _v4.abort();
    _v3?.aborted && _v4.abort(), _v3?.addEventListener("abort", _v5);
    let {
      signal: _v6
    } = _v4;
    try {
      let _v0 = await _v495(_v0, _v1, _v6);
      if (0 === _v0.length) throw "GENERIC";
      if (_v0.length > 300) throw "TOO_MANY_PAGES";
      let _v1 = [];
      for (let _v0 = 0; _v0 < _v0.length; _v0 += 60) {
        _v0 > 0 && (await _v492(0));
        let _v0 = await _v499(_v0.slice(_v0, _v0 + 60), 10, async _v0 => {
          let _v1 = await _v496(_v0, _v0, _v1, _v6);
          return _v498(await _v497(_v1, _v6));
        });
        _v1.push(..._v0);
      }
      let _v2 = function (_v0) {
        let _v1 = new TextEncoder(),
          _v2 = [],
          _v3 = [],
          _v4 = 0,
          _v5 = _v0 => {
            let _v1 = "string" == typeof _v0 ? _v1.encode(_v0) : _v0;
            _v2.push(_v1), _v4 += _v1.length;
          },
          _v6 = _v0 => {
            _v3[_v0] = _v4;
          },
          _v7 = 2 + 3 * _v0.length;
        _v5(new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10])), _v5(new Uint8Array([37, 226, 227, 207, 211, 10])), _v6(1), _v5("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n"), _v6(2);
        let _v8 = _v0.map((_v0, _v1) => `${3 + 3 * _v1} 0 R`).join(" ");
        _v5(`2 0 obj
<< /Type /Pages /Kids [${_v8}] /Count ${_v0.length} >>
endobj
`), _v0.forEach((_v0, _v1) => {
          _v6(3 + 3 * _v1), _v5(`${3 + 3 * _v1} 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${_v0.width} ${_v0.height}] /Resources << /XObject << /Im0 ${5 + 3 * _v1} 0 R >> >> /Contents ${4 + 3 * _v1} 0 R >>
endobj
`);
          let _v2 = `q
${_v0.width} 0 0 ${_v0.height} 0 0 cm
/Im0 Do
Q
`;
          _v6(4 + 3 * _v1), _v5(`${4 + 3 * _v1} 0 obj
<< /Length ${_v2.length} >>
stream
${_v2}endstream
endobj
`), _v6(5 + 3 * _v1), _v5(`${5 + 3 * _v1} 0 obj
<< /Type /XObject /Subtype /Image /Width ${_v0.width} /Height ${_v0.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${_v0.jpeg.length} >>
stream
`), _v5(_v0.jpeg), _v5("\nendstream\nendobj\n");
        });
        let _v9 = _v4,
          _v10 = `xref
0 ${_v7 + 1}
0000000000 65535 f 
`;
        for (let _v0 = 1; _v0 <= _v7; _v0++) _v10 += `${String(_v3[_v0]).padStart(10, "0")} 00000 n 
`;
        return _v5(_v10), _v5(`trailer
<< /Size ${_v7 + 1} /Root 1 0 R >>
startxref
${_v9}
%%EOF
`), _v2;
      }(_v1);
      return new File(_v2, `${_v2}.pdf`, {
        type: "application/pdf"
      });
    } catch (_v0) {
      throw _v4.abort(), _v0;
    } finally {
      _v3?.removeEventListener("abort", _v5);
    }
  }
  let _v501 = "application/pdf";
  var _v502 = _v0.i(0),
    _v503 = _v0.i(0),
    _v504 = _v0.i(0),
    _v505 = _v0.i(0),
    _v506 = _v0.i(0);
  let _v507 = (0, _v21.createContext)(null);
  function _v508() {
    return (0, _v21.useContext)(_v507);
  }
  function _v509({
    id: _v0 = (0, _v65.createLiveDomName)("add-media-button"),
    className: _v1 = (0, _v65.createLiveDomName)("add-media-button"),
    composerSessionContext: {
      permissions: _v2
    } = (0, _v28.useManager)(_v63.ComposerSessionManager)
  }) {
    let {
        video: {
          openModal: _v3
        },
        slides: {
          onAddSlides: _v4,
          onAddGoogleSlides: _v5,
          canAddGoogleSlides: _v6,
          isExportingGoogleSlides: _v7
        },
        images: {
          onAddImages: _v8
        }
      } = _v508(),
      _v9 = !_v2.hasExplicitApiMediaManagement;
    return (0, _v17.jsxs)(_v373.Menu, {
      children: [(0, _v17.jsx)(_v214.BokehTooltip, {
        placement: "bottom",
        label: _v66.translations.addMedia,
        children: (0, _v17.jsx)(_v374.MenuButton, {
          id: _v0,
          className: _v1,
          as: _v213.IconButton,
          icon: (0, _v17.jsx)(_v369.Plus, {}),
          variant: "tertiary",
          size: "sm"
        })
      }), (0, _v17.jsxs)(_v376.MenuList, {
        sx: {
          "label:hover": {
            background: "none!important"
          }
        },
        children: [_v9 ? (0, _v17.jsx)(_v375.MenuItem, {
          gap: (0, _v61.rem)(10),
          icon: (0, _v17.jsx)(_v504.Video, {
            boxSize: (0, _v61.rem)(20)
          }),
          onClick: _v3,
          children: (0, _v17.jsx)(_v292.Paragraph, {
            size: "md",
            children: _v66.translations.videos
          })
        }) : null, (0, _v17.jsx)(_v375.MenuItem, {
          children: (0, _v17.jsx)(_v475.FileInput, {
            accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_IMAGE_TYPES,
            multiple: !0,
            size: "sm",
            onChange: _v8,
            variant: "minimal",
            sx: {
              padding: 0,
              height: "100%"
            },
            label: (0, _v17.jsxs)(_v95.Flex, {
              gap: (0, _v61.rem)(10),
              children: [(0, _v17.jsx)(_v403.Image, {
                boxSize: (0, _v61.rem)(20)
              }), (0, _v17.jsx)(_v292.Paragraph, {
                size: "md",
                children: _v66.translations.images
              })]
            })
          })
        }), (0, _v17.jsx)(_v375.MenuItem, {
          children: (0, _v17.jsx)(_v475.FileInput, {
            accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_SLIDES_TYPES,
            multiple: !0,
            size: "sm",
            onChange: _v4,
            variant: "minimal",
            sx: {
              padding: 0,
              height: "100%"
            },
            label: (0, _v17.jsxs)(_v95.Flex, {
              gap: (0, _v61.rem)(10),
              children: [(0, _v17.jsx)(_v505.PresentationPlay, {
                boxSize: (0, _v61.rem)(20)
              }), (0, _v17.jsx)(_v292.Paragraph, {
                size: "md",
                children: _v66.translations.slides
              })]
            })
          })
        }), _v6 ? (0, _v17.jsx)(_v375.MenuItem, {
          gap: (0, _v61.rem)(10),
          icon: (0, _v17.jsx)(_v506.GoogleDrive, {
            boxSize: (0, _v61.rem)(20)
          }),
          onClick: _v5,
          isDisabled: _v7,
          children: (0, _v17.jsx)(_v292.Paragraph, {
            size: "md",
            children: _v66.translations.addFromGoogleSlides
          })
        }) : null]
      })]
    });
  }
  var _v510 = ((_v11 = {})[_v11.VIDEO = 0] = "VIDEO", _v11[_v11.IMAGES = 1] = "IMAGES", _v11[_v11.SLIDES = 2] = "SLIDES", _v11),
    _v511 = _v0.i(0),
    _v512 = _v0.i(0),
    _v513 = _v0.i(0);
  function _v514({
    className: _v0 = "image-preview",
    line: _v1,
    subline: _v2,
    imageSrc: _v3,
    theme: _v4,
    ..._v5
  }) {
    let {
        colorMode: _v6
      } = (0, _v233.useColorMode)(),
      _v7 = (0, _v21.useRef)(null),
      _v8 = (0, _v21.useMemo)(() => ({
        object: {
          id: "imagePreview",
          line: _v1,
          subLine: _v2,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          createdAt: 0,
          imageSrc: _v3
        },
        descriptor: (0, _v91.createGraphicsDescriptor)({
          graphicType: _v88.EGraphicsDescriptorType.IMAGE,
          graphicId: "imagePreview"
        }),
        animation: _v88.EAnimationState.NONE,
        fadeInDuration: 0,
        fadeOutDuration: 0
      }), [_v1, _v2, _v3]);
    return (0, _v513.useGraphicsResizeObserver)({
      zoomElement: _v7,
      maxWidth: _v74.graphicsConfig.SCENE.FULLSCREEN_MODE_MAX_WIDTH,
      defaultRescaleThrottle: _v74.graphicsConfig.SCENE.DEFAULT_RESCALE_THROTTLE
    }), (0, _v17.jsx)(_v95.Flex, {
      className: _v0,
      overflow: "hidden",
      position: "relative",
      width: "100%",
      borderRadius: (0, _v61.rem)(4),
      sx: {
        ..._v97.STRICT_16BY9_BOX_STYLE,
        ...(0, _v97.createChessBackgroundStyle)(_v6)
      },
      ..._v5,
      children: (0, _v17.jsx)(_v95.Flex, {
        ref: _v7,
        className: (0, _v65.createLiveDomName)(_v0, "canvas"),
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        top: 0,
        width: _v74.graphicsConfig.RENDERER.WIDTH,
        height: _v74.graphicsConfig.RENDERER.HEIGHT,
        overflow: "hidden",
        transformOrigin: "top left",
        children: (0, _v17.jsx)(_v512.Image, {
          ..._v8,
          theme: _v4
        })
      })
    });
  }
  function _v515({
    id: _v0 = (0, _v65.createLiveDomName)("images-form"),
    className: _v1 = (0, _v65.createLiveDomName)("images-form"),
    graphicsContext: {
      theme: _v2
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      theme: _v0
    }) => [_v0])
  }) {
    let {
        images: {
          onFormClose: _v3,
          imageFile: _v4,
          editedImage: _v5,
          save: _v6
        }
      } = _v508(),
      [_v7, _v8] = (0, _v21.useState)(() => (0, _v472.default)(_v5)),
      [_v9, _v10] = (0, _v21.useState)(null),
      [_v11, _v12] = (0, _v21.useState)(!1),
      [_v13, _v14] = (0, _v21.useState)(!1),
      {
        colorMode: _v15
      } = (0, _v233.useColorMode)(),
      [_v16, _v17] = (0, _v21.useState)(!1),
      _v18 = (0, _v21.useCallback)(() => {
        _v17(!0);
      }, []),
      _v19 = (0, _v21.useCallback)(() => {
        _v17(!1);
      }, []);
    (0, _v21.useEffect)(() => {
      _v4 && _v22(_v4);
    }, [_v4]);
    let _v20 = (0, _v160.useSimpleNotification)(),
      _v21 = !!_v7.imageSrc?.trim(),
      _v22 = _v0 => {
        (0, _v423.getFileNameAndBase64)(_v0).then(({
          fileSrc: _v0,
          fileName: _v1
        }) => {
          _v10(_v0), _v8({
            ..._v7,
            imageSrc: String(_v0),
            imageFileName: String(_v1)
          });
        }).catch(_v0 => {
          _v0 instanceof _v89.LiveError && _v0.code === _v25.ELiveErrorCode.INVALID_UPLOAD_SIZE || _v20({
            message: _v66.translations.somethingWentWrongUploading
          });
        });
      },
      {
        imageSrc: _v23,
        line: _v24,
        subLine: _v25
      } = _v7,
      _v26 = "negative" == (_v13 && !_v21 ? "negative" : "neutral") ? _v66.translations.addAnImage : "",
      _v27 = _v7.id ? _v66.translations.editImage : _v66.translations.addImage,
      _v28 = (0, _v21.useMemo)(() => !(0, _v473.default)(_v5, _v7), [_v5, _v7]);
    return (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v95.Flex, {
        marginBottom: (0, _v61.rem)(16),
        children: (0, _v17.jsx)(_v474.BackButtonPanel, {
          onClick: _v3,
          title: _v27
        })
      }), (0, _v17.jsx)(_v95.Flex, {
        id: _v0,
        className: _v1,
        direction: "column",
        grow: 1,
        children: (0, _v17.jsxs)(_v95.Flex, {
          height: "100%",
          direction: "column",
          gap: (0, _v61.rem)(16),
          children: [(0, _v17.jsx)(_v95.Flex, {
            direction: "column",
            shrink: 0,
            align: "stretch",
            children: (0, _v17.jsxs)(_v106.Box, {
              position: "relative",
              cursor: "pointer",
              onMouseEnter: _v18,
              onMouseLeave: _v19,
              borderRadius: "md",
              overflow: "hidden",
              children: [(0, _v17.jsx)(_v514, {
                theme: _v2,
                line: _v24,
                subline: _v25,
                imageSrc: _v23
              }), (0, _v17.jsx)(_v106.Box, {
                position: "absolute",
                right: (0, _v61.rem)(6),
                top: (0, _v61.rem)(6),
                visibility: _v16 ? "visible" : "hidden",
                sx: {
                  "& > label": {
                    width: (0, _v61.rem)(32),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#3D4751A3",
                    color: "white",
                    "&:hover": {
                      background: "#3D4751A3"
                    }
                  },
                  "& > input": {
                    display: "none"
                  }
                },
                children: (0, _v17.jsx)(_v475.FileInput, {
                  id: (0, _v65.createLiveDomName)(_v0, "image-upload"),
                  className: (0, _v65.createLiveDomName)(_v1, "image-upload"),
                  isDisabled: _v11,
                  accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_IMAGE_TYPES,
                  variant: "blur",
                  size: "sm",
                  position: "relative",
                  label: (0, _v17.jsx)(_v214.BokehTooltip, {
                    inPopover: !1,
                    placement: "top",
                    gutter: 16,
                    label: _v66.translations.replaceUpload,
                    children: (0, _v17.jsx)(_v428.Upload, {})
                  }),
                  onChange: _v0 => {
                    _v0.target.files && _v22(_v0.target.files.item(0));
                  }
                })
              }), _v16 && "dark" === _v15 ? (0, _v17.jsx)(_v312.SceneItemOverlay, {
                color: "white",
                size: "sm",
                width: 2,
                borderRadius: 12
              }) : null]
            })
          }), (0, _v17.jsxs)(_v459.FormControl, {
            isInvalid: _v13 && !_v21,
            children: [(0, _v17.jsx)(_v417.FormLabel, {
              size: "sm",
              children: _v66.translations.primaryTextOptional
            }), (0, _v17.jsx)(_v458.Input, {
              "data-testid": "primaryTextField",
              maxLength: _v74.graphicsConfig.VALIDATION.IMAGE_LINE_MAX_LENGTH,
              isDisabled: _v11,
              value: _v24 || "",
              size: "sm",
              onChange: _v0 => {
                _v8({
                  ..._v7,
                  line: _v0.target.value
                });
              }
            }), (0, _v17.jsx)(_v511.FormErrorMessage, {
              children: _v26
            })]
          }), (0, _v17.jsxs)(_v459.FormControl, {
            children: [(0, _v17.jsx)(_v417.FormLabel, {
              size: "sm",
              children: _v66.translations.secondaryTextOptional
            }), (0, _v17.jsx)(_v458.Input, {
              "data-testid": "secondaryTextField",
              maxLength: _v74.graphicsConfig.VALIDATION.IMAGE_LINE_MAX_LENGTH,
              isDisabled: _v11,
              value: _v25 || "",
              size: "sm",
              onChange: _v0 => {
                _v8({
                  ..._v7,
                  subLine: _v0.target.value
                });
              }
            })]
          }), (0, _v17.jsxs)(_v95.Flex, {
            direction: "column",
            gap: (0, _v61.rem)(8),
            children: [(0, _v17.jsx)(_v107.Button, {
              "data-testid": "saveButton",
              size: "sm",
              width: "100%",
              variant: "primary",
              isLoading: _v11,
              isDisabled: !_v21 || _v11 || !_v28,
              onClick: () => {
                _v21 ? (_v12(!0), _v6(_v7, _v9).then(() => {
                  _v3(), (0, _v502.trackSaveImage)({
                    hasPrimaryText: !!_v24,
                    hasSecondaryText: !!_v25
                  });
                }).catch(() => {
                  _v12(!1), _v20({
                    message: _v66.translations.somethingWentWrongUploading
                  });
                })) : _v14(!0);
              },
              children: _v66.translations.save
            }), (0, _v17.jsx)(_v107.Button, {
              "data-testid": "cancelButton",
              size: "sm",
              variant: "secondary",
              width: "100%",
              onClick: () => {
                _v10(null), _v12(!1), _v14(!1), _v3();
              },
              children: _v190.T_CANCEL
            })]
          })]
        })
      })]
    });
  }
  var _v516 = _v0.i(0),
    _v517 = _v0.i(0);
  function _v518(_v0) {
    let {
        activeScene: _v1,
        scenes: _v2,
        scenesOrder: _v3
      } = (0, _v28.useManager)(_v56.SceneManager),
      {
        streamMode: _v4
      } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager);
    return (0, _v21.useMemo)(() => null !== _v1 && (!(_v4 === _v39.EComposerStreamModeType.SIMULIVE && _v1?.meta?.isScheduled) || !!_v74.graphicsConfig.SCENE.CONTROLS.SCHEDULED_PLAYBACK_ALLOWED.includes(_v0) || -1 === (0, _v161.pickScheduledScenesList)((0, _v161.pickSortedScenesList)(_v2, _v3)).findIndex(_v0 => _v0.id === _v1.id)), [_v0, _v4, _v1, _v2, _v3]);
  }
  function _v519({
    id: _v0,
    className: _v1 = (0, _v96.createDomName)("images-item"),
    item: _v2,
    isInScene: _v3,
    canToggleInScene: _v4,
    onEdit: _v5,
    onDelete: _v6,
    onToggleInScene: _v7,
    theme: _v8
  }) {
    let {
        onMouseEnter: _v9,
        onMouseLeave: _v10,
        isMenuOpen: _v11,
        isItemHovered: _v12,
        onMouseHover: _v13,
        onToggleMenu: _v14,
        onCloseMenu: _v15
      } = (0, _v476.useSourceHoverControls)(),
      {
        imageSrc: _v16,
        imageFileName: _v17
      } = _v2;
    return (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabListColumnHalfItemStyle)(),
      onMouseEnter: _v9,
      onMouseLeave: _v10,
      onMouseMove: _v13,
      children: (0, _v17.jsxs)(_v95.Flex, {
        position: "relative",
        justifyContent: "space-between",
        align: "center",
        padding: 0,
        children: [(0, _v17.jsx)(_v514, {
          theme: _v8,
          line: _v2.line,
          subline: _v2.subLine,
          imageSrc: _v16,
          marginBottom: 0
        }), _v12 ? (0, _v17.jsxs)(_v95.Flex, {
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          children: [(0, _v17.jsx)(_v95.Flex, {
            children: (0, _v17.jsx)(_v484, {
              id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
              className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
              variant: "blur",
              isDisabled: !_v4,
              isInScene: _v3,
              onClick: () => {
                _v7(_v2);
              }
            })
          }), (0, _v17.jsx)(_v95.Flex, {
            position: "absolute",
            left: (0, _v61.rem)(6),
            bottom: (0, _v61.rem)(4),
            children: (0, _v17.jsx)(_v292.Paragraph, {
              id: (0, _v96.createDomName)(_v0, "filename"),
              className: (0, _v96.createDomName)(_v1, "filename"),
              fontWeight: "bold",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              size: "md",
              width: (0, _v61.rem)(120),
              maxWidth: (0, _v61.rem)(120),
              children: _v17
            })
          }), (0, _v17.jsx)(_v95.Flex, {
            position: "absolute",
            right: (0, _v61.rem)(4),
            top: (0, _v61.rem)(4),
            children: (0, _v17.jsx)(_v480.BokehMenu, {
              id: (0, _v96.createDomName)(_v0, "edit-menu"),
              className: (0, _v96.createDomName)(_v1, "edit-menu"),
              isOpen: _v11,
              variant: "blur",
              menuList: (0, _v17.jsx)(_v482, {
                onEditClick: () => {
                  _v5(_v2, null), (0, _v502.trackOpenImageEditModal)();
                },
                onDeleteClick: () => {
                  _v6(_v2), (0, _v502.trackRemoveImageFromEvent)();
                }
              }),
              onClose: _v15,
              onClick: _v14
            })
          })]
        }) : null]
      })
    });
  }
  var _v520 = _v28,
    _v521 = _v82,
    _v522 = _v0.i(0);
  function _v523({
    canCancelProcessing: _v0 = !1,
    onDeleteClick: _v1
  }) {
    let _v2 = (0, _v233.useColorModeValue)("slate.50", "surface");
    return (0, _v17.jsx)(_v106.Box, {
      sx: (0, _v416.createTabListColumnHalfItemStyle)(),
      children: (0, _v17.jsxs)(_v95.Flex, {
        position: "relative",
        justifyContent: "space-between",
        align: "center",
        children: [(0, _v17.jsx)(_v106.Box, {
          backgroundColor: _v2,
          position: "relative",
          sx: _v97.STRICT_16BY9_BOX_STYLE,
          children: (0, _v17.jsx)(_v106.Box, {
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 50,
            children: (0, _v17.jsx)(_v157.Spinner, {
              size: "sm"
            })
          })
        }), _v0 ? (0, _v17.jsx)(_v106.Box, {
          position: "absolute",
          top: (0, _v61.rem)(4),
          right: (0, _v61.rem)(4),
          children: (0, _v17.jsx)(_v214.BokehTooltip, {
            label: _v66.translations.cancelUpload,
            children: (0, _v17.jsx)(_v213.IconButton, {
              "aria-label": "Delete item",
              variant: "tertiary",
              size: "xs",
              icon: (0, _v17.jsx)(_v522.CloseX, {}),
              onClick: _v1
            })
          })
        }) : null]
      })
    });
  }
  let _v524 = (0, _v21.memo)(({
    graphicType: _v0,
    canCancelProcessing: _v1 = !1,
    graphicsContextManager: {
      pendingGraphicsList: _v2,
      graphicsActions: _v3
    } = (0, _v520.useManager)(_v521.GraphicsManager, ({
      pendingGraphicsList: _v0
    }) => [_v0])
  }) => {
    let _v4 = (0, _v21.useMemo)(() => Object.values(_v2).filter(_v0 => _v0?.type === _v0), [_v2, _v0]),
      _v5 = (0, _v21.useCallback)(_v0 => {
        _v0 && (_v3.cancelUploading(_v0), (0, _v503.trackCancelSlidesUploading)({
          uploadState: _v126.ESlidesUploadState.UPLOADING
        }));
      }, [_v3]);
    return (0, _v17.jsx)(_v17.Fragment, {
      children: _v4.map(_v0 => (0, _v17.jsx)(_v523, {
        canCancelProcessing: _v1,
        onDeleteClick: () => _v5(_v0?.id)
      }, _v0?.id))
    });
  });
  var _v525 = _v0.i(0);
  function _v526({
    id: _v0 = (0, _v65.createLiveDomName)("media-tabs-notice"),
    className: _v1 = (0, _v65.createLiveDomName)("media-tabs-notice"),
    isNoticeShown: _v2,
    text: _v3,
    onNoticeClose: _v4
  }) {
    return _v2 ? (0, _v17.jsx)(_v343.Alert, {
      id: _v0,
      className: _v1,
      status: "info",
      marginBottom: (0, _v61.rem)(12),
      onClose: _v4,
      children: (0, _v17.jsx)(_v525.AlertDescription, {
        id: (0, _v65.createLiveDomName)(_v0, "description"),
        className: (0, _v65.createLiveDomName)(_v1, "description"),
        children: _v3
      })
    }) : null;
  }
  function _v527({
    id: _v0 = (0, _v65.createLiveDomName)("images-tab"),
    sceneContext: {
      activeScene: _v1,
      sceneInProgram: _v2,
      sceneActions: _v3
    } = (0, _v28.useManager)(_v56.SceneManager),
    graphicsContext: {
      graphicsActions: _v4,
      fullscreenList: _v5,
      pendingGraphicsList: _v6,
      theme: _v7
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      fullscreenList: _v0,
      theme: _v1,
      pendingGraphicsList: _v2
    }) => [_v0, _v2, _v1]),
    composerSessionStatusContext: {
      ingestStatus: _v8
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0])
  }) {
    let _v9 = (0, _v28.useScope)(),
      [_v10, _v11] = (0, _v21.useState)(!1),
      {
        images: {
          onAddImages: _v12,
          onEditImage: _v13,
          imagesFileSizeError: _v14,
          setImagesFileSizeError: _v15
        }
      } = _v508(),
      _v16 = _v14?.map(_v0 => _v0.fileName).flat() || [],
      _v17 = _v14?.[0]?.fileSizeLimit || 0,
      _v18 = !!_v14?.some(_v0 => _v0.hasError),
      _v19 = (0, _v21.useMemo)(() => Object.values(_v5).filter(_v0 => !0 !== _v0.hidden).sort(_v422.graphicsComparator), [_v5]),
      _v20 = (0, _v21.useMemo)(() => Object.values(_v6).filter(_v0 => _v0.type === _v88.EGraphicsDescriptorType.IMAGE), [_v6]),
      _v21 = 0 === _v19.length && 0 === _v20.length,
      _v22 = _v518(_v88.EGraphicsDescriptorType.IMAGE),
      _v23 = (0, _v21.useCallback)(({
        id: _v0,
        type: _v1
      }) => _v4.removeGraphic(_v1, _v0), [_v4]),
      _v24 = (0, _v21.useCallback)(() => _v15(null), [_v15]),
      _v25 = _v164(_v88.EGraphicsDescriptorType.IMAGE, _v1, _v3, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL);
    (0, _v21.useEffect)(() => _v9.subscribeToSignals(_v0 => {
      _v0.type === _v51.ELiveGraphicsSignal.IMAGE_ADDED_BEHIND_GUEST && _v11(!0);
    }), [_v9]);
    let _v26 = (0, _v314.useScrollbarStyles)();
    return _v1 && _v1.id ? (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsxs)(_v106.Box, {
        sx: _v416.TOOL_TAB_ITEM_STYLE,
        id: _v0,
        children: [(0, _v17.jsx)(_v526, {
          isNoticeShown: !!_v10,
          onNoticeClose: () => {
            _v11(!1);
          },
          text: _v66.translations.imagesWillAppearBehindSpeakers
        }), (0, _v17.jsx)(_v106.Box, {
          id: (0, _v65.createLiveDomName)(_v0, "list"),
          sx: {
            ...(0, _v416.createTabListScrollStyle)(),
            ..._v26
          },
          children: (0, _v17.jsxs)(_v106.Box, {
            id: (0, _v65.createLiveDomName)(_v0, "columns"),
            sx: (0, _v416.createTabListColumnStyle)(),
            children: [(0, _v17.jsx)(_v524, {
              graphicType: _v88.EGraphicsDescriptorType.IMAGE
            }), _v21 ? (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
              isWithScroll: !0,
              buttonLabel: _v66.translations.upload,
              description: _v66.translations.uploadImagesToEvent,
              icon: (0, _v17.jsx)(_v516.Images, {
                boxSize: "lg"
              }),
              control: (0, _v17.jsx)(_v475.FileInput, {
                accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_IMAGE_TYPES,
                multiple: !0,
                size: "sm",
                variant: "primary",
                sx: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: (0, _v61.rem)(8),
                  minHeight: (0, _v61.rem)(36)
                },
                label: (0, _v17.jsxs)(_v17.Fragment, {
                  children: [(0, _v17.jsx)(_v517.Export, {}), _v66.translations.upload]
                }),
                onChange: _v12
              })
            }) : _v19.map(_v0 => {
              let _v1 = (0, _v91.isGraphicAlreadyInScene)(_v0.id, _v1),
                _v2 = _v449(_v0.id, _v1, _v2, _v8);
              return (0, _v17.jsx)(_v452, {
                graphicType: _v88.EGraphicsDescriptorType.IMAGE,
                graphicId: _v0.id,
                isInScene: _v1,
                children: (0, _v17.jsxs)(_v106.Box, {
                  position: "relative",
                  children: [(0, _v17.jsx)(_v519, {
                    theme: _v7,
                    item: _v0,
                    isInScene: _v1,
                    canToggleInScene: _v22,
                    onEdit: _v13,
                    onDelete: _v23,
                    onToggleInScene: _v25
                  }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                    color: _v2,
                    size: "sm",
                    width: 2
                  })]
                })
              }, _v0.id);
            })]
          })
        })]
      }), (0, _v17.jsx)(_v420, {
        id: (0, _v96.createDomName)(_v0, "images-file-size-error-modal"),
        isOpen: _v18,
        title: _v66.translations.fileTooLarge,
        message: (0, _v190.T_FILE_CANT_BE_UPLOADED)(_v16.length, _v17),
        fileNames: _v16,
        footerText: _v66.translations.imagesMustBeSmaller,
        closeButtonLabel: _v190.T_CLOSE,
        onClose: _v24
      })]
    }) : null;
  }
  function _v528({
    id: _v0 = (0, _v65.createLiveDomName)("slides-import-progress"),
    className: _v1 = (0, _v65.createLiveDomName)("slides-import-progress"),
    isShown: _v2
  }) {
    return _v2 ? (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      marginBottom: (0, _v61.rem)(12),
      sx: {
        "& .chakra-alert__icon": {
          display: "none"
        }
      },
      children: (0, _v17.jsx)(_v343.Alert, {
        status: "info",
        children: (0, _v17.jsxs)(_v95.Flex, {
          alignItems: "center",
          gap: (0, _v61.rem)(8),
          children: [(0, _v17.jsx)(_v157.Spinner, {
            id: (0, _v65.createLiveDomName)(_v0, "spinner"),
            className: (0, _v65.createLiveDomName)(_v1, "spinner"),
            size: "sm",
            flexShrink: 0
          }), (0, _v17.jsx)(_v525.AlertDescription, {
            id: (0, _v65.createLiveDomName)(_v0, "description"),
            className: (0, _v65.createLiveDomName)(_v1, "description"),
            children: _v66.translations.slidesGoogleImportingLargeDeck
          })]
        })
      })
    }) : null;
  }
  let _v529 = _v0 => (0, _v17.jsx)(_v196.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v17.jsx)("path", {
      d: "M21 14h-1V4h1a1 1 0 1 0 0-2H3a1 1 0 0 0 0 2h1v10H3a1 1 0 0 0 0 2h8v1.15l-4.55 3A1 1 0 0 0 7 22a.94.94 0 0 0 .55-.17L11 19.55V21a1 1 0 0 0 2 0v-1.45l3.45 2.28A.94.94 0 0 0 17 22a1 1 0 0 0 .55-1.83l-4.55-3V16h8a1 1 0 0 0 0-2Zm-3 0H6V4h12v10Z",
      fill: "currentColor"
    })
  });
  function _v530({
    className: _v0 = (0, _v65.createLiveDomName)("slide-item-failed-details"),
    name: _v1,
    isHovered: _v2 = !1,
    onDeleteClick: _v3
  }) {
    return (0, _v17.jsxs)(_v95.Flex, {
      className: _v0,
      position: "relative",
      width: "100%",
      height: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      children: [(0, _v17.jsx)(_v95.Flex, {
        position: "relative",
        sx: _v97.STRICT_16BY9_BOX_STYLE,
        children: (0, _v17.jsx)(_v95.Flex, {
          sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
          background: "surface",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "text-xs",
          padding: (0, _v61.rem)(4),
          children: _v66.translations.uploadFailed
        })
      }), (0, _v17.jsxs)(_v95.Flex, {
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        visibility: _v2 ? "visible" : "hidden",
        sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
        children: [(0, _v17.jsx)(_v95.Flex, {
          position: "absolute",
          left: (0, _v61.rem)(6),
          bottom: (0, _v61.rem)(4),
          children: (0, _v17.jsx)(_v95.Flex, {
            width: (0, _v61.rem)(128),
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            children: (0, _v17.jsx)(_v292.Paragraph, {
              size: "md",
              fontWeight: "bold",
              children: _v1
            })
          })
        }), (0, _v17.jsx)(_v95.Flex, {
          position: "absolute",
          right: (0, _v61.rem)(4),
          top: (0, _v61.rem)(4),
          children: (0, _v17.jsx)(_v213.IconButton, {
            "aria-label": "delete",
            size: "sm",
            variant: "hyperminimal",
            icon: (0, _v17.jsx)(_v522.CloseX, {}),
            onClick: _v3
          })
        })]
      })]
    });
  }
  function _v531({
    id: _v0,
    className: _v1 = (0, _v96.createDomName)("slide-item"),
    item: _v2,
    isInScene: _v3,
    uploadingFraction: _v4 = 0,
    canToggleInScene: _v5,
    onDelete: _v6,
    onToggleInScene: _v7
  }) {
    let {
        onMouseEnter: _v8,
        onMouseLeave: _v9,
        isItemHovered: _v10,
        onMouseHover: _v11
      } = (0, _v476.useSourceHoverControls)(),
      _v12 = () => {
        _v6(_v2);
      },
      _v13 = () => {
        _v12(), (0, _v503.trackRemoveSlidesFromEvent)();
      },
      {
        name: _v14,
        slides: _v15 = [],
        status: _v16,
        pagesCount: _v17,
        pagesProcessed: _v18 = 0
      } = _v2,
      _v19 = (0, _v148.getSlideThumbnail)(_v2),
      _v20 = _v16 === _v88.ESlidesStatus.COMPLETE,
      _v21 = _v16 === _v88.ESlidesStatus.FAILED,
      _v22 = (0, _v21.useMemo)(() => _v17 && 0 !== _v17 ? 100 * _v4 + Math.round(_v18 * (1 - _v4)) : 100 * _v4, [_v17, _v18, _v4]);
    return _v21 ? (0, _v17.jsx)(_v95.Flex, {
      id: (0, _v96.createDomName)(_v0, "failed"),
      className: (0, _v96.createDomName)(_v1, "failed"),
      sx: (0, _v416.createTabListColumnHalfItemStyle)(),
      onMouseEnter: _v8,
      onMouseLeave: _v9,
      onMouseMove: _v11,
      children: (0, _v17.jsx)(_v530, {
        name: _v14,
        isHovered: _v10,
        onDeleteClick: _v13
      })
    }) : _v22 <= 100 && !_v20 ? (0, _v17.jsx)(_v523, {
      canCancelProcessing: !0,
      onDeleteClick: () => {
        _v12(), (0, _v503.trackCancelSlidesUploading)({
          uploadState: _v126.ESlidesUploadState.PROCESSING
        });
      }
    }) : (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabListColumnHalfItemStyle)(),
      onMouseEnter: _v8,
      onMouseLeave: _v9,
      onMouseMove: _v11,
      children: (0, _v17.jsxs)(_v95.Flex, {
        position: "relative",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        children: [(0, _v17.jsx)(_v425, {
          id: (0, _v96.createDomName)(_v0, "preview"),
          className: (0, _v96.createDomName)(_v1, "preview"),
          src: _v19,
          width: "100%",
          fit: "contain",
          chess: !0,
          children: _v19 ? null : (0, _v17.jsx)(_v529, {
            width: (0, _v61.rem)(48),
            height: (0, _v61.rem)(48)
          })
        }), (0, _v17.jsxs)(_v95.Flex, {
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          visibility: _v10 ? "visible" : "hidden",
          sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
          children: [_v15.length ? (0, _v17.jsxs)(_v95.Flex, {
            id: (0, _v96.createDomName)(_v0, "count"),
            className: (0, _v96.createDomName)(_v1, "count"),
            position: "absolute",
            right: (0, _v61.rem)(4),
            bottom: (0, _v61.rem)(4),
            background: "rgba(0, 0, 0, 0.75)",
            color: "white",
            borderRadius: "xs",
            padding: (0, _v61.rem)(4),
            zIndex: 5,
            fontSize: (0, _v61.rem)(10),
            fontWeight: "bold",
            children: [_v15.length, " ", _v66.translations.slidesLowercase]
          }) : null, (0, _v17.jsx)(_v95.Flex, {
            children: (0, _v17.jsx)(_v484, {
              id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
              className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
              isDisabled: !_v5,
              isInScene: _v3,
              variant: "blur",
              onClick: () => {
                _v7(_v2);
              }
            })
          }), (0, _v17.jsx)(_v106.Box, {
            position: "absolute",
            top: (0, _v61.rem)(6),
            right: (0, _v61.rem)(6),
            children: (0, _v17.jsx)(_v214.BokehTooltip, {
              label: _v66.translations.removeFromEvent,
              placement: "top",
              children: (0, _v17.jsx)(_v213.IconButton, {
                id: (0, _v96.createDomName)(_v0, "delete-button"),
                className: (0, _v96.createDomName)(_v1, "delete-button"),
                "aria-label": "Delete slide",
                size: "xs",
                variant: "blur",
                icon: (0, _v17.jsx)(_v424.TrashBin, {}),
                onClick: _v13
              })
            })
          })]
        })]
      })
    });
  }
  function _v532({
    id: _v0 = (0, _v65.createLiveDomName)("slides-tab"),
    sceneContext: {
      activeScene: _v1,
      sceneInProgram: _v2,
      sceneActions: _v3
    } = (0, _v28.useManager)(_v56.SceneManager),
    graphicsContext: {
      graphicsActions: _v4,
      slidesList: _v5,
      pendingGraphicsList: _v6
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      slidesList: _v0,
      theme: _v1,
      pendingGraphicsList: _v2
    }) => [_v0, _v1, _v2]),
    composerSessionStatusContext: {
      ingestStatus: _v7
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0])
  }) {
    let {
        slides: {
          slidesFileSizeError: _v8,
          onAddSlides: _v9,
          setSlidesFileSizeError: _v10,
          onAddGoogleSlides: _v11,
          canAddGoogleSlides: _v12,
          isExportingGoogleSlides: _v13,
          isImportingLargeGoogleDeck: _v14
        }
      } = _v508(),
      _v15 = _v8?.map(_v0 => _v0.fileName).flat() || [],
      _v16 = _v8?.[0]?.fileSizeLimit || 0,
      _v17 = _v8?.[0]?.isPdfFile,
      _v18 = !!_v8?.some(_v0 => _v0.hasError),
      _v19 = (0, _v21.useMemo)(() => Object.values(_v5).sort(_v422.graphicsComparator), [_v5]),
      _v20 = (0, _v21.useMemo)(() => Object.values(_v6).filter(_v0 => _v0.type === _v88.EGraphicsDescriptorType.SLIDES), [_v6]),
      _v21 = 0 === _v19.length && 0 === _v20.length,
      _v22 = _v518(_v88.EGraphicsDescriptorType.SLIDES),
      _v23 = (0, _v21.useCallback)(({
        id: _v0,
        type: _v1
      }) => _v4.removeGraphic(_v1, _v0), [_v4]),
      _v24 = (0, _v21.useCallback)(() => _v10(null), [_v10]),
      _v25 = _v164(_v88.EGraphicsDescriptorType.SLIDES, _v1, _v3, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v26 = (0, _v314.useScrollbarStyles)();
    return _v1 && _v1.id ? (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsxs)(_v106.Box, {
        sx: _v416.TOOL_TAB_ITEM_STYLE,
        id: _v0,
        children: [(0, _v17.jsx)(_v528, {
          id: (0, _v65.createLiveDomName)(_v0, "large-deck-progress"),
          isShown: _v14
        }), (0, _v17.jsx)(_v106.Box, {
          id: (0, _v65.createLiveDomName)(_v0, "list"),
          sx: {
            ...(0, _v416.createTabListScrollStyle)(),
            ..._v26
          },
          children: (0, _v17.jsxs)(_v106.Box, {
            sx: (0, _v416.createTabListColumnStyle)(),
            id: (0, _v65.createLiveDomName)(_v0, "columns"),
            children: [(0, _v17.jsx)(_v524, {
              canCancelProcessing: !0,
              graphicType: _v88.EGraphicsDescriptorType.SLIDES
            }), _v21 ? (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
              isWithScroll: !0,
              buttonLabel: _v66.translations.upload,
              description: _v66.translations.uploadSlidesToEvent,
              icon: (0, _v17.jsx)(_v505.PresentationPlay, {
                boxSize: "lg"
              }),
              control: (0, _v17.jsxs)(_v95.Flex, {
                direction: "column",
                gap: (0, _v61.rem)(8),
                alignItems: "stretch",
                children: [(0, _v17.jsx)(_v475.FileInput, {
                  accept: _v74.graphicsConfig.UPLOADS.ACCEPTED_SLIDES_TYPES,
                  multiple: !0,
                  size: "sm",
                  onChange: _v9,
                  variant: "primary",
                  sx: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: (0, _v61.rem)(8),
                    width: "100%",
                    minHeight: (0, _v61.rem)(36)
                  },
                  label: (0, _v17.jsxs)(_v17.Fragment, {
                    children: [(0, _v17.jsx)(_v517.Export, {}), _v66.translations.upload]
                  })
                }), _v12 ? (0, _v17.jsx)(_v107.Button, {
                  size: "sm",
                  variant: "secondary",
                  onClick: _v11,
                  isLoading: _v13 && !_v14,
                  isDisabled: _v14,
                  leftIcon: (0, _v17.jsx)(_v506.GoogleDrive, {}),
                  sx: {
                    minHeight: (0, _v61.rem)(36)
                  },
                  children: _v66.translations.addFromGoogleSlides
                }) : null]
              })
            }) : _v19.map(_v0 => {
              let _v1 = _v0?.status === _v88.ESlidesStatus.COMPLETE,
                _v2 = (0, _v91.isGraphicAlreadyInScene)(_v0.id, _v1),
                _v3 = _v449(_v0.id, _v1, _v2, _v7);
              return (0, _v17.jsxs)(_v95.Flex, {
                direction: "column",
                gap: (0, _v61.rem)(2),
                children: [(0, _v17.jsx)(_v452, {
                  graphicType: _v88.EGraphicsDescriptorType.SLIDES,
                  graphicId: _v0.id,
                  isInScene: _v2,
                  draggable: _v1,
                  children: (0, _v17.jsxs)(_v106.Box, {
                    position: "relative",
                    children: [(0, _v17.jsx)(_v531, {
                      item: _v0,
                      isInScene: _v2,
                      canToggleInScene: _v22,
                      onDelete: _v23,
                      onToggleInScene: _v25,
                      uploadingFraction: _v74.graphicsConfig.UPLOADS.SLIDES_UPLOADING_PROGRESS_FRACTION
                    }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                      color: _v3,
                      size: "sm",
                      width: 2
                    })]
                  })
                }), (0, _v17.jsx)(_v292.Paragraph, {
                  width: (0, _v61.rem)(132),
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  variant: "body-xs",
                  children: _v0.name
                })]
              }, _v0.id);
            })]
          })
        })]
      }), (0, _v17.jsx)(_v420, {
        id: (0, _v96.createDomName)(_v0, "slides-file-size-error-modal"),
        isOpen: _v18,
        title: _v66.translations.fileTooLarge,
        message: (0, _v190.T_FILE_CANT_BE_UPLOADED)(_v15.length, _v16),
        fileNames: _v15,
        footerText: _v17 ? _v66.translations.tryReducingPdfFileSize : _v66.translations.tryReducingPptFileSize,
        closeButtonLabel: _v190.T_CLOSE,
        onClose: _v24
      })]
    }) : null;
  }
  var _v533 = _v0.i(0),
    _v534 = _v0.i(0),
    _v535 = _v0.i(0),
    _v536 = _v0.i(0),
    _v537 = _v0.i(0);
  function _v538(_v0, {
    clipConfigUrl: _v1,
    initPlayer: _v2
  }) {
    let _v3 = (0, _v287.useLogger)("⛑useLivePlayer"),
      _v4 = (0, _v395.useForceUpdate)(),
      {
        PlayerConstructor: _v5,
        playerType: _v6
      } = (0, _v21.useContext)(_v537.PlayerContext),
      _v7 = (0, _v21.useRef)(!1),
      _v8 = (0, _v21.useRef)({
        player: null,
        clipConfigUrl: null
      }),
      _v9 = (0, _v21.useCallback)(() => {
        if (_v3.info("Configure player:", _v1), _v7.current = !0, _v6 === _v534.PlayerType.BarebonePlayer) {
          let _v0 = new _v5(_v0.current, _v1);
          _v3.info("Create barebone player"), _v0.then(_v0 => {
            _v8.current.player = _v0, _v8.current.clipConfigUrl = _v1, _v4();
          }).finally(() => _v7.current = !1);
        } else _v8.current.player = new _v5(_v0.current, _v1, !0, {}), _v8.current.clipConfigUrl = _v1, _v7.current = !1, _v3.info("Create generic player"), _v4();
      }, [_v4, _v3, _v1, _v6, _v5, _v0]),
      _v10 = (0, _v21.useCallback)(async (_v0 = "generic-call") => {
        _v3.info("Flush player:", _v0), _v8.current.player?.unload && _v8.current.player?.unload(), _v8.current.player = null, _v8.current.clipConfigUrl = null, _v4();
      }, [_v4, _v3]);
    return (0, _v21.useEffect)(() => {
      !_v7.current && _v8.current.clipConfigUrl !== _v1 && (_v1 ? _v5 && _v0.current && _v2 && (_v0.current.innerHTML = "", _v9()) : _v10("missing-config"));
    }, [_v5, _v9, _v0, _v1, _v2]), {
      player: _v8.current.player,
      flushPlayer: _v10
    };
  }
  function _v539({
    id: _v0,
    className: _v1 = (0, _v96.createDomName)("video-card"),
    videoId: _v2,
    videoHash: _v3,
    isHovering: _v4,
    hasHoverPlayback: _v5 = !0,
    videoDuration: _v6 = 0,
    videoThumbFullSize: _v7 = "",
    isVideoTimerShowing: _v8,
    videoError: _v9
  }) {
    let [_v10, _v11] = (0, _v535.useGetVideoLazy)(),
      [_v12, _v13] = (0, _v21.useState)(!1),
      _v14 = (0, _v21.useRef)(null),
      {
        player: _v15,
        flushPlayer: _v16
      } = _v538(_v14, {
        clipConfigUrl: _v11.data?.configUrl,
        initPlayer: _v4
      }),
      _v17 = "NOT_FOUND" === _v9;
    (0, _v21.useEffect)(() => {
      _v15 && !_v17 && _v5 && (_v15.muted = !0, _v4 ? _v15.play().then(() => {
        _v13(!0);
      }).catch(() => {
        _v13(!1);
      }) : _v15.pause());
    }, [_v4, _v5, _v15, _v13, _v17]), (0, _v21.useEffect)(() => () => {
      _v16("unmount");
    }, [_v16]), (0, _v21.useEffect)(() => {
      !_v4 || _v11.loading || _v12 || _v11.data || _v17 || _v10({
        where: {
          videoId: _v3 ? `${_v2}:${_v3}` : _v2
        },
        select: ["configUrl"]
      });
    }, [_v17, _v10, _v4, _v12, _v11.data, _v11.loading, _v3, _v2]);
    let _v18 = (0, _v21.useMemo)(() => (0, _v17.jsx)(_v95.Flex, {
        className: (0, _v96.createDomName)(_v1, "duration"),
        zIndex: _v74.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_MODIFIERS,
        position: "absolute",
        bottom: (0, _v61.rem)(4),
        right: (0, _v61.rem)(4),
        gap: (0, _v61.rem)(4),
        alignItems: "center",
        justifyContent: "space-between",
        padding: `0 ${(0, _v61.rem)(2)}`,
        borderRadius: (0, _v61.rem)(4),
        color: "white",
        fontSize: (0, _v61.rem)(10),
        background: "rgba(0,0,0,0.75)",
        fontWeight: "bold",
        height: (0, _v61.rem)(16),
        minWidth: (0, _v61.rem)(30),
        textTransform: "uppercase",
        children: (0, _v352.secondsToDisplay)(_v6)
      }), [_v1, _v6]),
      _v19 = (_v11.loading || !_v12) && _v4;
    return _v9 ? (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v106.Box, {
        position: "absolute",
        top: (0, _v61.rem)(6),
        left: (0, _v61.rem)(6),
        gap: (0, _v61.rem)(4),
        zIndex: 101,
        children: (0, _v17.jsx)(_v536.LiveVideoErrorStatus, {
          className: (0, _v96.createDomName)(_v1, "scene-status-error"),
          title: _v190.T_VIDEO_CARD_PREVIEW_ERROR,
          description: _v190.T_VIDEO_CARD_PREVIEW_ERROR_DESCRIPTION
        })
      }), _v18]
    }) : (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      children: [_v19 && _v5 ? (0, _v17.jsx)(_v106.Box, {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 50,
        children: (0, _v17.jsx)(_v157.Spinner, {
          size: "sm",
          className: (0, _v96.createDomName)(_v1, "loader")
        })
      }) : null, (0, _v17.jsx)(_v106.Box, {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ref: _v14,
        sx: {
          ".vp-video-wrapper, .vp-video, .vp-telecine": {
            height: "100%",
            width: "100%"
          },
          ".vp-telecine video": {
            height: "100%",
            width: "100%",
            "object-fit": "cover"
          }
        }
      }), _v12 && _v4 ? null : (0, _v17.jsx)(_v106.Box, {
        className: (0, _v96.createDomName)(_v1, "thumb"),
        position: "absolute",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundImage: `url('${_v7}')`
      }), _v8 ? _v18 : null]
    });
  }
  function _v540({
    id: _v0,
    className: _v1,
    item: _v2,
    thumbUrl: _v3,
    duration: _v4,
    isInScene: _v5,
    hasHoverPlayback: _v6 = !0,
    hasContextMenu: _v7 = !0,
    onToggleInScene: _v8,
    onRemoveVideo: _v9,
    onPlayLocallyVideo: _v10
  }) {
    let _v11 = (0, _v21.useRef)(null),
      {
        pageProps: _v12
      } = (0, _v80.useLiveGlobals)(),
      {
        onMouseEnter: _v13,
        onMouseLeave: _v14,
        isMenuOpen: _v15,
        isItemHovered: _v16,
        onToggleMenu: _v17,
        onCloseMenu: _v18
      } = (0, _v476.useSourceHoverControls)(),
      _v19 = (0, _v21.useCallback)(() => {
        _v15 || (0, _v128.trackOpenVideoManagementBox)(), _v17();
      }, [_v15, _v17]),
      _v20 = (0, _v21.useCallback)(() => {
        _v10(_v2, _v11.current?.parentElement || null), (0, _v128.trackExpandVideoForLocalPlayback)();
      }, [_v11, _v2, _v10]);
    return (0, _v17.jsxs)(_v106.Box, {
      sx: (0, _v416.createTabListColumnHalfItemStyle)(),
      ref: _v11,
      onMouseEnter: _v13,
      onMouseLeave: _v14,
      children: [(0, _v17.jsx)(_v533.PlayerContextProvider, {
        assetUrls: _v12.playerAssetUrls,
        type: _v534.PlayerType.BarebonePlayer,
        children: (0, _v17.jsx)(_v539, {
          videoDuration: _v4,
          videoThumbFullSize: _v3,
          videoId: _v2.videoId,
          isHovering: _v16,
          isVideoTimerShowing: !0,
          hasHoverPlayback: _v6,
          videoError: _v2.error
        })
      }), (0, _v17.jsx)(_v95.Flex, {
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        visibility: _v16 ? "visible" : "hidden",
        children: _v2.error ? (0, _v17.jsx)(_v106.Box, {
          position: "absolute",
          top: (0, _v61.rem)(6),
          right: (0, _v61.rem)(6),
          children: (0, _v17.jsx)(_v214.BokehTooltip, {
            label: _v66.translations.removeFromEvent,
            placement: "top",
            children: (0, _v17.jsx)(_v213.IconButton, {
              "aria-label": "Delete video",
              size: "xs",
              variant: "blur",
              icon: (0, _v17.jsx)(_v424.TrashBin, {}),
              onClick: () => _v9(_v2)
            })
          })
        }) : (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v484, {
            id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
            className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
            isInScene: _v5,
            variant: "blur",
            onClick: () => _v8(_v2)
          }), _v7 ? (0, _v17.jsx)(_v95.Flex, {
            position: "absolute",
            right: (0, _v61.rem)(6),
            top: (0, _v61.rem)(6),
            grow: 1,
            children: (0, _v17.jsx)(_v480.BokehMenu, {
              id: (0, _v96.createDomName)(_v0, "edit-menu"),
              className: (0, _v96.createDomName)(_v1, "edit-menu"),
              isOpen: _v15,
              variant: "blur",
              menuList: (0, _v17.jsxs)(_v17.Fragment, {
                children: [(0, _v17.jsx)(_v481.BokehMenuItem, {
                  onClick: () => {
                    _v20(), _v18();
                  },
                  children: _v66.translations.preview
                }), (0, _v17.jsx)(_v481.BokehMenuItem, {
                  onClick: () => _v9(_v2),
                  children: _v66.translations.removeFromEvent
                })]
              }),
              onClick: _v19,
              onClose: _v18
            })
          }) : null]
        })
      })]
    });
  }
  var _v541 = _v0.i(0),
    _v542 = _v0.i(0);
  function _v543({
    id: _v0,
    className: _v1,
    playerConfigUrl: _v2,
    autoplay: _v3,
    loader: _v4
  }) {
    let _v5 = (0, _v287.useLogger)("⛑LiveControlledPlayer"),
      _v6 = (0, _v542.useIsMountedRef)(),
      [_v7, _v8] = (0, _v21.useState)(!1),
      _v9 = (0, _v21.useRef)(null),
      {
        player: _v10,
        flushPlayer: _v11
      } = _v538(_v9, {
        clipConfigUrl: _v2,
        initPlayer: !0
      }),
      _v12 = (0, _v21.useCallback)(_v0 => {
        if (_v5.info("Configure player"), _v0.muted = !0, _v0.qualities?.find(_v0 => "540p" === _v0.label)) try {
          _v0.quality = "540p";
        } catch (_v0) {
          _v5.error("Failed to change quality:", _v0);
        }
        _v0._setEmbedSettings({
          email: !1,
          fullscreen: !1,
          share: !1,
          watch_later: !1,
          like: !1,
          collections: !1,
          auto_pip: !1,
          logo: !1,
          custom_logo: !1,
          title: !1,
          portrait: !1,
          byline: !1,
          pip: !1
        }), _v0.disableTextTrack(), _v0.on("play", () => {
          _v5.info("Playback started");
        }), _v0.on("ended", () => {
          _v5.info("Playback ended, move to start"), _v0.seekTo(0);
        }), _v5.info("Configured player");
      }, [_v5]);
    return (0, _v21.useEffect)(() => {
      _v10?.ready ? (_v5.info("Player updated:", !!_v10.ready), _v10.ready(() => {
        if (_v12(_v10), !_v6.current) return _v5.warn("Skip player start, not mounted");
        _v8(!0), _v3 && (_v5.info("Start autoplay"), _v10.play().then(() => _v5.info("Playback started")).catch(_v0 => _v5.warn("Autoplay failed:", _v0)));
      })) : _v5.info("Player reset");
    }, [_v5, _v10, _v3, _v6, _v12]), (0, _v21.useEffect)(() => () => {
      _v11("unmount");
    }, [_v11]), (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      borderRadius: (0, _v61.rem)(4),
      children: [(0, _v17.jsx)("div", {
        ref: _v9,
        className: "player js-player"
      }), _v7 || void 0 === _v4 ? null : _v4]
    });
  }
  var _v544 = _v96;
  let _v545 = (0, _v21.forwardRef)(({
    id: _v0 = (0, _v544.createDomName)("video-source-local-playback"),
    className: _v1 = (0, _v544.createDomName)("video-source-local-playback"),
    item: _v2,
    onRemoveVideo: _v3,
    onStopPlayback: _v4,
    onPlaybackAttached: _v5,
    isDateShowing: _v6 = !0
  }, _v7) => {
    let [_v8, _v9] = (0, _v535.useGetVideoLazy)(),
      _v10 = _v2?.videoId,
      _v11 = _v2?.videoHash,
      {
        locale: _v12
      } = (0, _v83.useGctlConfig)(),
      _v13 = (0, _v21.useMemo)(() => {
        if (!_v9.data?.createdTime) return null;
        {
          let _v0 = _v541.DateTime.fromISO(_v9.data?.createdTime).toLocal();
          return new Intl.DateTimeFormat(_v12 ?? navigator.language, {
            month: "short",
            year: "numeric",
            day: "numeric"
          }).format(_v0.valueOf());
        }
      }, [_v12, _v9.data?.createdTime]),
      _v14 = (0, _v21.useCallback)(() => {
        _v2 && _v3 && _v3(_v2), _v4();
      }, [_v2, _v3, _v4]);
    (0, _v21.useEffect)(() => {
      _v10 ? _v8({
        where: {
          videoId: _v11 ? `${_v10}:${_v11}` : _v10
        },
        select: ["uri", "name", "link", "createdTime", "pictures", "embedPlayerConfigUrl"]
      }) : _v9.loading = !0;
    }, [_v10, _v11]), (0, _v21.useEffect)(() => {
      _v5();
    }, [_v5, _v10]);
    let _v15 = _v9.loading ? null : _v9.data?.embedPlayerConfigUrl,
      _v16 = _v9.loading ? null : _v9.data?.name;
    return _v10 ? (0, _v17.jsxs)(_v106.Box, {
      ref: _v7,
      id: _v0,
      className: _v1,
      zIndex: 0,
      borderColor: "stroke",
      padding: (0, _v61.rem)(16),
      position: "absolute",
      backgroundColor: "background",
      left: (0, _v61.rem)(0),
      top: (0, _v61.rem)(0),
      borderRadius: (0, _v61.rem)(20),
      children: [(0, _v17.jsxs)(_v106.Box, {
        position: "relative",
        borderRadius: (0, _v61.rem)(4),
        width: (0, _v61.rem)(640),
        height: (0, _v61.rem)(360),
        children: [(0, _v17.jsx)(_v194.BokehSkeleton, {
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          borderRadius: 0
        }), (0, _v17.jsx)(_v543, {
          id: (0, _v544.createDomName)("page-local-media-playback"),
          playerConfigUrl: _v15,
          autoplay: !0
        })]
      }), (0, _v17.jsxs)(_v95.Flex, {
        justifyContent: "space-between",
        gap: (0, _v61.rem)(16),
        alignItems: "center",
        marginTop: (0, _v61.rem)(12),
        maxWidth: (0, _v61.rem)(640),
        children: [(0, _v17.jsxs)(_v95.Flex, {
          direction: "column",
          gap: (0, _v61.rem)(4),
          overflow: "hidden",
          children: [(0, _v17.jsx)(_v292.Paragraph, {
            size: "lg",
            color: "text-primary",
            children: _v16
          }), _v6 ? (0, _v17.jsx)(_v292.Paragraph, {
            size: "sm",
            color: "text-secondary",
            children: _v13 ? `${_v66.translations.uploaded} ${_v13}` : null
          }) : null]
        }), _v3 ? (0, _v17.jsx)(_v214.BokehTooltip, {
          label: _v66.translations.removeFromEvent,
          placement: "left",
          children: (0, _v17.jsx)(_v213.IconButton, {
            "aria-label": _v66.translations.removeFromEvent,
            variant: "primary",
            size: "md",
            icon: (0, _v17.jsx)(_v424.TrashBin, {}),
            onClick: _v14
          })
        }) : null]
      })]
    }) : null;
  });
  var _v546 = _v0.i(0);
  function _v547({
    calculateAttachLocalPlayback: _v0
  }) {
    let _v1 = (0, _v21.useRef)(null),
      _v2 = (0, _v21.useRef)(null),
      _v3 = (0, _v21.useRef)(null),
      [_v4, _v5] = (0, _v21.useState)(null),
      _v6 = (0, _v21.useCallback)(() => {
        _v0({
          attachPlaybackRefElement: _v3.current,
          wrapperRefElement: _v1.current,
          videoSourcePlaybackRefElement: _v2.current
        });
      }, [_v0]),
      _v7 = (0, _v21.useCallback)((_v0, _v1) => {
        _v5(_v0 => _v0 === _v0 ? (_v3.current = null, _v6(), null) : (_v3.current = _v1, _v6(), _v0));
      }, [_v6]),
      _v8 = (0, _v21.useCallback)(() => {
        _v5(null), _v3.current = null;
      }, []);
    return (0, _v546.useOutsideClick)({
      ref: _v2,
      enabled: !!_v4,
      handler: _v0 => {
        _v0.target && _v3?.current?.contains(_v0.target) || _v8();
      }
    }), (0, _v21.useEffect)(() => {
      let _v0 = new ResizeObserver(_v6);
      return _v0.observe(window.document.body), () => _v0.unobserve(window.document.body);
    }, [_v6]), {
      onPlayLocallyVideo: _v7,
      wrapperRef: _v1,
      videoSourcePlaybackRef: _v2,
      attachPlaybackRef: _v3,
      onStopPlayLocallyVideo: _v8,
      onAttachLocalPlayback: _v6,
      previewVideoGraphic: _v4
    };
  }
  function _v548({
    id: _v0 = (0, _v96.createDomName)("video-tab"),
    className: _v1 = (0, _v96.createDomName)("video-tab"),
    graphicsContext: {
      graphicsActions: _v2,
      agoraMediaList: _v3
    } = (0, _v28.useManager)(_v82.GraphicsManager),
    sceneContext: {
      sceneActions: _v4,
      activeScene: _v5,
      sceneInProgram: _v6
    } = (0, _v28.useManager)(_v56.SceneManager),
    composerSessionContext: {
      permissions: _v7
    } = (0, _v28.useManager)(_v63.ComposerSessionManager),
    composerSessionStatusContext: {
      ingestStatus: _v8
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager)
  }) {
    let _v9 = (0, _v44.useIsVpaas)(),
      _v10 = (0, _v80.useLiveGlobals)(),
      _v11 = (0, _v114.useSessionOwnerId)(),
      {
        trackLiveStreamMediaAdded: _v12
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      {
        video: {
          openModal: _v13,
          closeModal: _v14,
          isModalOpened: _v15
        },
        panels: {
          setActivePanel: _v16
        }
      } = _v508(),
      _v17 = (0, _v21.useMemo)(() => Object.values(_v3).filter(_v0 => !0 !== _v0.hidden).sort(_v422.graphicsComparator), [_v3]),
      {
        onPlayLocallyVideo: _v18,
        wrapperRef: _v19,
        videoSourcePlaybackRef: _v20,
        onStopPlayLocallyVideo: _v21,
        onAttachLocalPlayback: _v22,
        previewVideoGraphic: _v23
      } = _v547({
        calculateAttachLocalPlayback: ({
          attachPlaybackRefElement: _v0,
          wrapperRefElement: _v1,
          videoSourcePlaybackRefElement: _v2
        }) => {
          if (_v0 && _v1 && _v2) {
            let _v0 = _v0.getBoundingClientRect(),
              _v1 = _v0.x + _v0.width + 4,
              _v2 = _v0.y,
              _v3 = _v2 + 456 + 32 - document.body.scrollHeight;
            _v2.style.position = "fixed", _v2.style.left = _v1 + "px", _v2.style.top = Math.max(_v3 > 0 ? _v2 - _v3 : _v2, 0) + "px";
          }
        }
      }),
      [_v24, _v25] = (0, _v21.useState)({}),
      _v26 = !_v7.hasExplicitApiMediaManagement,
      _v27 = !_v7.hasExplicitApiMediaManagement,
      _v28 = !_v9,
      _v29 = (0, _v21.useMemo)(() => Object.values(_v3).map(_v0 => `/videos/${_v0.videoId}`), [_v3]),
      _v30 = (0, _v21.useCallback)(_v0 => {
        _v25(_v0 => ({
          ..._v0,
          [_v0.uri]: _v0
        })), (0, _v128.trackSelectVideo)();
      }, []),
      _v31 = (0, _v21.useCallback)(_v0 => {
        _v25(_v0 => (0, _v360.omit)(_v0, _v0.uri));
      }, []),
      _v32 = _v164(_v88.EGraphicsDescriptorType.AGORA_MEDIA, _v5, _v4, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v33 = (0, _v21.useCallback)(() => {
        let _v0 = Object.values(_v24).map(_v0 => (0, _v90.createGfxFromVimeoVideo)(_v0));
        _v25({}), _v14(), (0, _v128.trackAddVideoToEvent)(), _v0.length > 0 && _v2.addVideos(_v0).then(() => {
          _v12({
            liveStreamMediaType: "videos"
          });
        }), _v16(_v510.VIDEO);
      }, [_v16, _v14, _v24, _v2, _v12]),
      _v34 = (0, _v21.useCallback)(() => {
        _v13(), (0, _v128.trackClickAddVideo)();
      }, [_v13]),
      _v35 = (0, _v21.useCallback)(() => {
        _v14(), _v25({}), (0, _v128.trackCancelAddingVideo)();
      }, [_v14]),
      _v36 = (0, _v21.useCallback)(_v0 => {
        _v2.removeGraphic(_v88.EGraphicsDescriptorType.AGORA_MEDIA, _v0.id), (0, _v128.trackRemoveVideoFromEvent)();
      }, [_v2]),
      _v37 = (0, _v314.useScrollbarStyles)();
    return (0, _v17.jsxs)(_v533.PlayerContextProvider, {
      assetUrls: _v10.pageProps.playerAssetUrls,
      type: _v534.PlayerType.VimeoPlayer,
      children: [(0, _v17.jsx)(_v106.Box, {
        sx: _v416.TOOL_TAB_ITEM_STYLE,
        id: _v0,
        className: _v1,
        ref: _v19,
        children: (0, _v17.jsx)(_v106.Box, {
          id: (0, _v96.createDomName)(_v0, "list"),
          className: (0, _v96.createDomName)(_v1, "list"),
          sx: {
            ...(0, _v416.createTabListScrollStyle)(),
            ..._v37
          },
          children: (0, _v17.jsx)(_v106.Box, {
            sx: (0, _v416.createTabListColumnStyle)(),
            id: (0, _v96.createDomName)(_v0, "columns"),
            className: (0, _v96.createDomName)(_v1, "columns"),
            children: _v17.length ? _v17.map(_v0 => {
              let _v1 = (0, _v91.isGraphicAlreadyInScene)(_v0.id, _v5),
                _v2 = _v449(_v0.id, _v5, _v6, _v8),
                {
                  videoThumb: _v3,
                  videoDuration: _v4
                } = _v0;
              return (0, _v17.jsx)(_v452, {
                isInScene: _v1,
                graphicId: _v0.id,
                graphicType: _v88.EGraphicsDescriptorType.AGORA_MEDIA,
                children: (0, _v17.jsxs)(_v106.Box, {
                  position: "relative",
                  children: [(0, _v17.jsx)(_v540, {
                    item: _v0,
                    duration: _v4 || 0,
                    thumbUrl: _v3 || "",
                    isInScene: _v1,
                    hasHoverPlayback: _v28,
                    hasContextMenu: _v27,
                    onToggleInScene: _v32,
                    onPlayLocallyVideo: _v18,
                    onRemoveVideo: _v36
                  }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                    color: _v2,
                    size: "sm",
                    width: 2
                  })]
                })
              }, _v0.id);
            }) : (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
              isWithScroll: !0,
              control: _v26,
              icon: (0, _v17.jsx)(_v504.Video, {
                boxSize: "lg"
              }),
              buttonLeftIcon: (0, _v17.jsx)(_v369.Plus, {}),
              buttonLabel: _v66.translations.addVideos,
              description: _v26 ? _v66.translations.addVideosDescription : "",
              onButtonClick: _v34
            })
          })
        })
      }), (0, _v17.jsx)(_v545, {
        ref: _v20,
        item: _v23,
        onStopPlayback: _v21,
        onPlaybackAttached: _v22,
        onRemoveVideo: _v36
      }), (0, _v17.jsx)(_v358, {
        userId: _v11,
        showModal: _v15,
        addedVideos: _v29,
        selectedVideos: _v24,
        onCloseModal: _v35,
        onSelectVideo: _v30,
        onDeselectVideo: _v31,
        onAddVideos: _v33
      })]
    });
  }
  function _v549({
    id: _v0 = (0, _v65.createLiveDomName)("media-tab"),
    className: _v1 = (0, _v65.createLiveDomName)("media-tab")
  }) {
    let {
        images: {
          isShowEditForm: _v2
        },
        panels: {
          setActivePanel: _v3,
          activePanel: _v4
        }
      } = _v508(),
      _v5 = (0, _v21.useMemo)(() => [{
        label: _v66.translations.videos,
        content: (0, _v17.jsx)(_v548, {}),
        tabId: _v510.VIDEO
      }, {
        label: _v66.translations.images,
        content: (0, _v17.jsx)(_v527, {}),
        tabId: _v510.IMAGES
      }, {
        label: _v66.translations.slides,
        content: (0, _v17.jsx)(_v532, {}),
        tabId: _v510.SLIDES
      }], []);
    return _v2 ? (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: (0, _v17.jsx)(_v413.LeftPanelContent, {
        withTopPadding: !0,
        children: (0, _v17.jsx)(_v515, {})
      })
    }) : (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v66.translations.media,
        controls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v509, {}), (0, _v17.jsx)(_v414.LeftPanelDismiss, {})]
        })
      }), (0, _v17.jsx)(_v413.LeftPanelContent, {
        children: (0, _v17.jsxs)(_v440.Tabs, {
          id: (0, _v65.createLiveDomName)(_v0, "tabs"),
          flexDirection: "column",
          display: "flex",
          flexGrow: 1,
          index: _v4,
          size: "sm",
          onChange: _v3,
          children: [(0, _v17.jsxs)(_v441.TabList, {
            children: [_v5.map(({
              label: _v0,
              tabId: _v1
            }) => (0, _v17.jsx)(_v442.Tab, {
              id: (0, _v65.createLiveDomName)(_v0, "tab"),
              children: _v0
            }, _v1)), (0, _v17.jsx)(_v440.TabIndicator, {})]
          }), (0, _v17.jsx)(_v444.TabPanels, {
            id: (0, _v65.createLiveDomName)(_v0, "tab"),
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: "100%",
            children: _v5.map(_v0 => (0, _v17.jsx)(_v443.TabPanel, {
              display: "flex",
              height: "100%",
              flexDirection: "column",
              flexGrow: 1,
              children: _v0.content
            }, _v0.tabId))
          }, _v4)]
        })
      })]
    });
  }
  function _v550({
    graphicsContext: {
      graphicsActions: _v0
    } = (0, _v28.useManager)(_v82.GraphicsManager)
  }) {
    let {
        trackLiveStreamMediaAdded: _v1
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      [_v2, _v3] = (0, _v21.useState)(_v510.VIDEO),
      [_v4, _v5] = (0, _v21.useState)(!1),
      [_v6] = (0, _v160.useBroadcasterActionConfirmation)(),
      _v7 = (0, _v160.useSimpleNotification)(),
      [_v8, _v9] = (0, _v21.useState)(null),
      [_v10, _v11] = (0, _v21.useState)(null),
      [_v12, _v13] = (0, _v21.useState)(() => (0, _v90.createImageGraphicObject)({
        id: "",
        imageSrc: "",
        line: "",
        subLine: ""
      }, !1)),
      {
        setIsHeaderEnabled: _v14
      } = (0, _v448.useResponsiveSidebarContext)(),
      [_v15, _v16] = (0, _v21.useState)(!1),
      [_v17, _v18] = (0, _v21.useState)(null),
      _v19 = (0, _v21.useCallback)(() => {
        _v16(!1), _v14(!0), _v3(_v510.IMAGES), _v13((0, _v90.createImageGraphicObject)({
          id: "",
          imageSrc: "",
          line: "",
          subLine: ""
        }, !1)), _v18(null);
      }, [_v14]),
      _v20 = (0, _v21.useCallback)((_v0, _v1) => {
        _v13(_v0), _v18(_v1), _v14(!1), _v16(!0);
      }, [_v14]),
      _v21 = (0, _v21.useCallback)(_v0 => {
        _v6({
          type: _v162.EConfirmationType.SLIDES_CONVERTATION,
          modalWidth: 368,
          confirmMessage: _v66.translations.upload,
          body: (0, _v17.jsxs)(_v95.Flex, {
            direction: "column",
            gap: (0, _v61.rem)(8),
            alignItems: "flex-start",
            children: [(0, _v17.jsx)(_v137.Header, {
              size: "md",
              children: _v66.translations.uploadFileAsSlides
            }), (0, _v17.jsx)(_v292.Paragraph, {
              size: "md",
              children: _v66.translations.slidesConvertationMessage
            })]
          }),
          onConfirm: () => {
            let _v0 = (0, _v90.createSlidesGraphicObject)({
              id: "",
              name: "",
              fileUrl: "",
              slideIndex: 0,
              status: _v88.ESlidesStatus.UPLOADED
            }, !1);
            _v3(_v510.SLIDES);
            let _v1 = [];
            Promise.allSettled(_v0.map(_v0 => (0, _v423.getFileNameAndBase64)(_v0, _v74.graphicsConfig.UPLOADS.SLIDES_FILE_UPLOAD_LIMIT).then(({
              fileSrc: _v0,
              fileName: _v1
            }) => _v0.addSlides({
              ..._v0,
              fileUrl: String(_v0),
              name: String(_v1),
              thumbnails: [],
              slides: [],
              slideIndex: 0
            }, _v0).then(() => {
              _v1({
                liveStreamMediaType: "slides"
              });
            })).catch(_v0 => {
              _v0 instanceof _v89.LiveError && _v0.code === _v25.ELiveErrorCode.INVALID_UPLOAD_SIZE ? _v1.push({
                fileName: _v0.data.fileName,
                fileExtension: _v0.data.fileExtension,
                fileSizeLimit: _v0.data.fileSizeLimit
              }) : _v7({
                message: _v66.translations.somethingWentWrongUploading
              });
            }))).then(() => {
              _v1.length > 0 && (_v9(_v1.map(_v0 => ({
                hasError: !0,
                fileName: _v0.fileName,
                fileSizeLimit: _v0.fileSizeLimit / 0 / 0,
                isPdfFile: _v0.fileExtension === _v88.ESlidesType.PDF
              }))), (0, _v503.trackShowErrorStates)({
                errorReason: _v126.ESlidesErrorReason.FILE_TOO_LARGE,
                errorDetails: `${(_v1[0].fileExtension || "").replace(".", "").toUpperCase()} ${Math.round(_v1[0].fileSizeLimit)} bytes`
              }));
            });
          }
        });
      }, [_v6, _v0, _v7, _v1]),
      {
        canAddGoogleSlides: _v22,
        pickGoogleSlides: _v23,
        isExporting: _v24,
        isLargeDeckImporting: _v25
      } = function ({
        onSlidesSelected: _v0,
        onError: _v1,
        handleClose: _v2
      }) {
        let {
            settings: _v3
          } = (0, _v488.useOrionSettings)(),
          _v4 = !!_v3.live_google_slides_integration,
          _v5 = (0, _v21.useContext)(_v489.ViewerContext),
          _v6 = _v5?.user?.id,
          [_v7, _v8] = (0, _v21.useState)(null);
        (0, _v21.useEffect)(() => {
          if (!_v4 || !_v6 || _v7) return;
          let _v0 = !1;
          return fetch(`/upload_action?action=get_config_data&user_id=${_v6}`, {
            headers: {
              "X-Requested-With": "XMLHttpRequest"
            }
          }).then(_v0 => _v0.json()).then(_v0 => {
            if (_v0) return;
            let _v1 = _v0?.picker_tokens?.["69025"];
            _v1?.clientId && _v1?.developerKey && _v8({
              clientId: _v1.clientId,
              developerKey: _v1.developerKey
            });
          }).catch(() => void 0), () => {
            _v0 = !0;
          };
        }, [_v4, _v6, _v7]);
        let {
          pickGoogleSlides: _v9,
          isExporting: _v10,
          isLargeDeckImporting: _v11,
          canPick: _v12
        } = function ({
          clientId: _v0,
          developerKey: _v1,
          onSlidesSelected: _v2,
          onError: _v3,
          handleClose: _v4,
          scope: _v5 = "https://www.googleapis.com/auth/drive.file",
          enabled: _v6 = !0
        }) {
          let [_v7, _v8] = (0, _v490.useScript)("https://apis.google.com/js/api.js", !_v6),
            [_v9, _v10] = (0, _v490.useScript)("https://accounts.google.com/gsi/client", !_v6),
            [_v11, _v12] = (0, _v21.useState)(!1),
            [_v13, _v14] = (0, _v21.useState)(!1),
            _v15 = (0, _v21.useRef)(""),
            _v16 = (0, _v21.useRef)(void 0),
            _v17 = (0, _v21.useRef)(() => void 0),
            _v18 = (0, _v21.useRef)(void 0),
            _v19 = (0, _v21.useContext)(_v489.ViewerContext),
            _v20 = _v19?.locale || "en",
            _v21 = _v19?.isEnterpriseSite,
            _v22 = window.gapi;
          (0, _v21.useEffect)(() => {
            _v22 && _v7 && !_v8 && _v22.load("picker", {});
          }, [_v7, _v8, _v22]);
          let _v23 = (0, _v21.useCallback)(async _v0 => {
              let _v1 = new AbortController(),
                _v2 = setTimeout(() => _v1.abort(new DOMException("export timed out", "TimeoutError")), 0);
              try {
                let _v0 = await fetch(`https://www.googleapis.com/drive/v3/files/${_v0}/export?mimeType=${encodeURIComponent(_v501)}`, {
                  method: "GET",
                  headers: {
                    Authorization: `Bearer ${_v15.current}`
                  },
                  signal: _v1.signal
                });
                if (401 === _v0.status) throw "AUTH_EXPIRED";
                if (403 === _v0.status) {
                  let _v0,
                    _v1 = await _v0.text().catch(() => "");
                  try {
                    _v0 = JSON.parse(_v1)?.error?.errors?.[0]?.reason;
                  } catch {
                    _v0 = void 0;
                  }
                  throw "exportSizeLimitExceeded" === _v0 || "cannotExportFile" === _v0 ? "EXPORT_TOO_LARGE" : "GENERIC";
                }
                if (!_v0.ok) throw "GENERIC";
                return await _v0.blob();
              } finally {
                clearTimeout(_v2);
              }
            }, []),
            _v24 = (0, _v21.useCallback)((_v0 = "") => {
              let _v1 = encodeURI(window?.location?.origin + "/oauth/token/popup-callback"),
                _v2 = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${_v0}&scope=${_v5}&redirect_uri=https://integrations-redirect.vimeo.work/oauth_redirect_fragmented&state=${_v1}&response_type=token&include_granted_scopes=true&enable_granular_consent=true&prompt=${_v0}`;
              window.connectCallback = _v0 => {
                _v0.access_token && (_v15.current = _v0.access_token, _v17.current());
              }, window.open(_v2);
            }, [_v0, _v5]),
            _v25 = (0, _v21.useCallback)(_v0 => {
              _v17.current = _v0, _v21 ? _v24("consent") : _v16.current?.requestAccessToken({
                prompt: ""
              });
            }, [_v21, _v24]),
            _v26 = (0, _v21.useRef)(() => Promise.resolve()),
            _v27 = (0, _v21.useCallback)(async (_v0, _v1, _v2 = !1) => {
              _v12(!0);
              try {
                let _v0 = await _v23(_v0),
                  _v1 = new File([_v0], `${_v1}.pdf`, {
                    type: _v501
                  });
                _v12(!1), _v2(_v1, _v1);
              } catch (_v0) {
                if ("EXPORT_TOO_LARGE" === _v0) {
                  _v14(!0);
                  let _v0 = new AbortController();
                  _v18.current = _v0;
                  try {
                    let _v0 = await _v500(_v0, _v15.current, _v1, _v0.signal);
                    _v14(!1), _v12(!1), _v2(_v0, _v1);
                  } catch (_v0) {
                    if (_v0.signal.aborted) return;
                    if (_v14(!1), "AUTH_EXPIRED" === _v0 && !_v2) {
                      _v12(!1), _v25(() => void _v26.current(_v0, _v1, !0));
                      return;
                    }
                    _v12(!1), "AUTH_EXPIRED" !== _v0 && "TOO_MANY_PAGES" !== _v0 && (0, _v86.trackLiveError)(_v0, {
                      category: _v85.ELiveErrorCategory.MEDIA,
                      method: "useGoogleSlidesPicker.exportAndDeliver.fallback"
                    }), _v3?.("EXPORT_TOO_LARGE");
                  }
                  return;
                }
                if ("AUTH_EXPIRED" === _v0 && !_v2) {
                  _v12(!1), _v25(() => void _v26.current(_v0, _v1, !0));
                  return;
                }
                _v12(!1);
                let _v1 = "AUTH_EXPIRED" === _v0 ? _v0 : "GENERIC";
                "GENERIC" === _v1 && (0, _v86.trackLiveError)(_v0, {
                  category: _v85.ELiveErrorCategory.MEDIA,
                  method: "useGoogleSlidesPicker.exportAndDeliver"
                }), _v3?.(_v1);
              }
            }, [_v23, _v2, _v3, _v25]);
          (0, _v21.useEffect)(() => {
            _v26.current = _v27;
          }, [_v27]), (0, _v21.useEffect)(() => () => _v18.current?.abort(), []);
          let _v28 = (0, _v21.useCallback)(_v0 => {
              if (!_v0) return;
              let _v1 = Array.isArray(_v0) ? _v0[0] : _v0;
              _v1?.id && _v27(_v1.id, _v1.name ?? "Google Slides");
            }, [_v27]),
            _v29 = (0, _v21.useCallback)(_v0 => {
              _v0[google.picker.Response.ACTION] === google.picker.Action.CANCEL ? _v4?.() : _v0[google.picker.Response.ACTION] === google.picker.Action.PICKED && _v28(_v0[google.picker.Response.DOCUMENTS]);
            }, [_v28, _v4]),
            _v30 = (0, _v21.useCallback)(() => {
              let _v0 = new google.picker.DocsView(google.picker.ViewId.PRESENTATIONS);
              _v0.setMimeTypes("application/vnd.google-apps.presentation"), _v0.setMode(google.picker.DocsViewMode.LIST), new google.picker.PickerBuilder().addView(_v0).enableFeature(google.picker.Feature.NAV_HIDDEN).enableFeature(google.picker.Feature.SUPPORT_DRIVES).setOAuthToken(_v15.current).setOrigin(`${window.location.protocol}//${window.location.host}`).setLocale(_v20).setCallback(_v29).setDeveloperKey(_v1).setAppId(_v0).build().setVisible(!0);
            }, [_v0, _v1, _v20, _v29]);
          return (0, _v21.useEffect)(() => {
            _v9 && !_v10 && window.google && _v0 && (_v16.current = google?.accounts?.oauth2?.initTokenClient({
              client_id: _v0,
              scope: _v5,
              callback: async _v0 => {
                if (void 0 !== _v0.error) {
                  (0, _v86.trackLiveError)(`Google Slides OAuth failed: ${_v0.error}`, {
                    category: _v85.ELiveErrorCategory.MEDIA,
                    method: "useGoogleSlidesPicker.initTokenClient"
                  }), _v3?.("GENERIC");
                  return;
                }
                _v15.current = _v0.access_token, _v17.current();
              },
              error_callback: () => _v4?.()
            }));
          }, [_v0, _v9, _v10, _v5, _v3, _v4]), {
            pickGoogleSlides: (0, _v21.useCallback)(() => {
              if (_v17.current = () => _v30(), _v21) return void _v24(_v15.current ? "" : "consent");
              let _v0 = _v16.current;
              _v0 && _v0.requestAccessToken({
                prompt: _v15.current ? "" : "consent"
              });
            }, [_v21, _v24, _v30]),
            isExporting: _v11,
            isLargeDeckImporting: _v13,
            canPick: !!window?.google?.picker && !_v10
          };
        }({
          clientId: _v7?.clientId,
          developerKey: _v7?.developerKey,
          onSlidesSelected: _v0,
          onError: _v1,
          handleClose: _v2,
          enabled: _v4
        });
        return {
          isEnabled: _v4,
          canAddGoogleSlides: _v4 && !!_v7 && _v12,
          pickGoogleSlides: _v9,
          isExporting: _v10,
          isLargeDeckImporting: _v11
        };
      }({
        onSlidesSelected: (0, _v21.useCallback)(_v0 => {
          _v21([_v0]);
        }, [_v21]),
        onError: (0, _v21.useCallback)(_v0 => {
          _v7({
            message: "EXPORT_TOO_LARGE" === _v0 ? _v66.translations.slidesGoogleTooLarge : _v66.translations.slidesGoogleImportError
          });
        }, [_v7])
      }),
      _v26 = (0, _v21.useCallback)(_v0 => {
        if ((0, _v503.trackClickAddSlides)(), !_v0.target.files) return;
        let _v1 = Object.values(_v0.target.files);
        switch (_v1.length) {
          case 0:
            break;
          case 1:
            let _v0 = _v1[0];
            _v0 && _v21([_v0]);
            break;
          default:
            _v21(_v1);
        }
        _v0.target.value = "";
      }, [_v21]),
      _v27 = (0, _v21.useCallback)(_v0 => {
        let _v1 = [];
        Promise.allSettled(_v0.map(_v0 => (0, _v423.getFileNameAndBase64)(_v0).then(({
          fileSrc: _v0,
          fileName: _v1
        }) => _v0.saveImage({
          ..._v12,
          imageSrc: String(_v0),
          imageFileName: String(_v1)
        }, _v0).then(() => {
          (0, _v502.trackSaveImage)({
            hasPrimaryText: !1,
            hasSecondaryText: !1
          }), _v1({
            liveStreamMediaType: "images"
          }), _v3(_v510.IMAGES);
        })).catch(_v0 => {
          _v0 instanceof _v89.LiveError && _v0.code === _v25.ELiveErrorCode.INVALID_UPLOAD_SIZE ? _v1.push({
            fileName: _v0.data.fileName,
            fileSizeLimit: _v0.data.fileSizeLimit
          }) : _v7({
            message: _v66.translations.somethingWentWrongUploading
          });
        }))).then(() => {
          _v1.length > 0 && _v11(_v1.map(_v0 => ({
            hasError: !0,
            fileName: _v0.fileName,
            fileSizeLimit: _v0.fileSizeLimit / 0 / 0
          })));
        });
      }, [_v12, _v0, _v7, _v1]),
      _v28 = (0, _v21.useCallback)(_v0 => {
        if ((0, _v502.trackClickAddImage)(), !_v0.target.files) return;
        let _v1 = Object.values(_v0.target.files);
        _v1.length && _v27(_v1), _v0.target.value = "";
      }, [_v27]),
      _v29 = (0, _v21.useCallback)(() => {
        _v5(!0);
      }, []),
      _v30 = (0, _v21.useCallback)(() => {
        _v5(!1);
      }, []);
    return (0, _v17.jsx)(_v507.Provider, {
      value: {
        video: {
          openModal: _v29,
          closeModal: _v30,
          isModalOpened: _v4
        },
        slides: {
          onAddSlides: _v26,
          slidesFileSizeError: _v8,
          setSlidesFileSizeError: _v9,
          onAddGoogleSlides: _v23,
          canAddGoogleSlides: _v22,
          isExportingGoogleSlides: _v24,
          isImportingLargeGoogleDeck: _v25
        },
        images: {
          onAddImages: _v28,
          imagesFileSizeError: _v10,
          setImagesFileSizeError: _v11,
          isShowEditForm: _v15,
          setShowEditForm: _v16,
          onFormClose: _v19,
          imageFile: _v17,
          editedImage: _v12,
          onEditImage: _v20,
          save: _v0.saveImage
        },
        panels: {
          activePanel: _v2,
          setActivePanel: _v3
        }
      },
      children: (0, _v17.jsx)(_v549, {})
    });
  }
  var _v551 = _v0.i(0),
    _v552 = _v0.i(0),
    _v553 = _v0.i(0),
    _v554 = _v0.i(0),
    _v555 = _v0.i(0),
    _v556 = _v0.i(0),
    _v557 = _v0.i(0);
  let _v558 = (0, _v0.i(0).createDefaultPollInteractionObject)();
  function _v559({
    id: _v0 = (0, _v96.createDomName)("poll-tab"),
    className: _v1 = (0, _v96.createDomName)("poll-tab"),
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
    } = (0, _v28.useManager)(_v556.PollManager),
    sceneContext: {
      sceneActions: _v10,
      activeScene: _v11,
      sceneInProgram: _v12
    } = (0, _v28.useManager)(_v56.SceneManager),
    composerSessionStatusContext: {
      ingestStatus: _v13
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0]),
    composerSessionContext: {
      sessionType: _v14
    } = (0, _v28.useManager)(_v63.ComposerSessionManager, ({
      sessionType: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamPollCreated: _v15
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v16 = (0, _v44.useIsVpaas)(),
      [_v17, _v18] = (0, _v21.useState)(!1),
      [_v19, _v20] = (0, _v21.useState)(null),
      {
        setIsHeaderEnabled: _v21
      } = (0, _v448.useResponsiveSidebarContext)(),
      _v22 = (0, _v21.useMemo)(() => Object.values(_v3), [_v3]),
      _v23 = (0, _v283.useGraphicFromScene)(_v11, _v88.EGraphicsDescriptorType.POLL),
      _v24 = _v22.some(_v0 => _v0.state === _v40.EPollState.OPENED),
      _v25 = _v22.some(_v0 => _v0.state === _v40.EPollState.CLOSED),
      _v26 = _v14 === _v39.EComposerSessionType.VENUE,
      _v27 = !_v24,
      _v28 = !_v16 && !_v26,
      _v29 = (0, _v21.useCallback)(_v0 => _v23?.data.sourceId === _v0.id && _v23.position.visible, [_v23]),
      _v30 = (0, _v21.useCallback)(() => {
        _v18(!0), _v21(!1), (0, _v557.trackClickAddPoll)();
      }, [_v21]),
      {
        panels: _v31,
        activePanelId: _v32,
        setActivePanelId: _v33
      } = (0, _v553.usePollPanels)(_v3),
      _v34 = (0, _v21.useCallback)(_v0 => {
        if (_v11?.id) return _v10.removeGraphicFromScene(_v11.id, _v0);
      }, [_v11, _v10]),
      _v35 = _v164(_v88.EGraphicsDescriptorType.POLL, _v11, _v10, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v36 = (0, _v21.useCallback)(_v0 => {
        let _v1 = !!(_v11 && _v11.id === _v12);
        _v0.state === _v40.EPollState.CLOSED ? (0, _v557.trackShowPollResultsInScene)(_v1, "left_panel") : (0, _v557.trackShowPollQuestionInScene)(_v1, "left_panel");
      }, [_v11, _v12]),
      _v37 = (0, _v21.useCallback)(async _v0 => {
        _v11?.id && (_v29(_v0) ? ((0, _v557.trackHidePollInScene)("left_panel"), await _v10.setGraphicVisibility(_v11.id, _v0.id, !1)) : ((0, _v91.isGraphicAlreadyInScene)(_v0.id, _v11) ? _v36(_v0) : (_v36(_v0), await _v35(_v0)), await _v10.setGraphicVisibility(_v11.id, _v0.id, !0)));
      }, [_v11, _v29, _v35, _v10, _v36]),
      _v38 = (0, _v21.useCallback)(_v0 => {
        _v0.state = _v40.EPollState.CLOSED, _v7(_v0.id, _v0);
      }, [_v7]),
      _v39 = (0, _v21.useCallback)(_v0 => {
        _v0.state = _v40.EPollState.ARCHIVED, _v7(_v0.id, _v0), _v34(_v0.id);
      }, [_v34, _v7]),
      _v40 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v5 ? _v3[_v5] : null;
        _v1 && _v39(_v1), _v7(_v0.id, {
          ..._v0,
          state: _v40.EPollState.OPENED
        }), _v9(_v0.id);
      }, [_v5, _v3, _v7, _v9, _v39]),
      _v41 = (0, _v21.useCallback)(_v0 => {
        _v20(_v0), _v21(!1);
      }, [_v21]),
      _v42 = (0, _v21.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v43 = (0, _v21.useCallback)(() => {
        _v18(!1), _v21(!0);
      }, [_v21]),
      _v44 = (0, _v21.useCallback)(_v0 => (_v15({
        liveStreamPollOptionCount: _v0.options.length
      }), _v21(!0), _v18(!1), _v6(_v0)), [_v21, _v6, _v15]),
      _v45 = (0, _v21.useCallback)(() => {
        _v20(null), _v21(!0);
      }, [_v21]),
      _v46 = (0, _v21.useCallback)(_v0 => (_v21(!0), _v20(null), _v7(_v0.id, _v0)), [_v21, _v7]);
    (0, _v21.useEffect)(() => {
      (0, _v557.trackViewPoll)();
    }, []);
    let _v47 = (0, _v314.useScrollbarStyles)();
    return _v17 ? (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: (0, _v17.jsx)(_v413.LeftPanelContent, {
        withTopPadding: !0,
        children: (0, _v17.jsx)(_v551.PollForm, {
          poll: _v558,
          onClose: _v43,
          onSubmit: _v44
        })
      })
    }) : _v19 ? (_v21(!1), (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: (0, _v17.jsx)(_v413.LeftPanelContent, {
        withTopPadding: !0,
        children: (0, _v17.jsx)(_v551.PollForm, {
          poll: _v19,
          onClose: _v45,
          onSubmit: _v46
        })
      })
    })) : _v2 ? _v22.length ? (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v190.T_POLLS,
        controls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v445.TooltipIconButton, {
            id: (0, _v96.createDomName)(_v0, "add-button"),
            className: (0, _v96.createDomName)(_v1, "add-button"),
            "aria-label": _v66.translations.addPoll,
            icon: (0, _v17.jsx)(_v369.Plus, {}),
            size: "sm",
            variant: "tertiary",
            placement: "bottom",
            label: _v66.translations.addPoll,
            onClick: _v30
          }), (0, _v17.jsx)(_v555.PollSettingsButton, {
            id: (0, _v96.createDomName)(_v0, "settings-button"),
            className: (0, _v96.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v28,
            buttonIcon: (0, _v17.jsx)(_v378.EllipsisV, {})
          }), (0, _v17.jsx)(_v414.LeftPanelDismiss, {
            id: (0, _v96.createDomName)(_v0, "dismiss-button"),
            className: (0, _v96.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v17.jsxs)(_v413.LeftPanelContent, {
        children: [(0, _v17.jsxs)(_v440.Tabs, {
          size: "sm",
          sx: _v416.TABS_STYLES,
          onChange: _v33,
          children: [(0, _v17.jsxs)(_v441.TabList, {
            children: [_v31.map(({
              id: _v0,
              label: _v1
            }) => (0, _v17.jsx)(_v442.Tab, {
              id: (0, _v96.createDomName)(_v0, _v0, "tab"),
              className: (0, _v96.createDomName)(_v1, _v0, "tab"),
              children: _v1
            }, _v0)), (0, _v17.jsx)(_v440.TabIndicator, {})]
          }), (0, _v17.jsx)(_v444.TabPanels, {
            sx: _v416.TAB_PANELS_STYLES,
            children: _v31.map(({
              id: _v0,
              polls: _v1
            }) => (0, _v17.jsx)(_v443.TabPanel, {
              id: (0, _v96.createDomName)(_v0, _v0, "tab-panel"),
              className: (0, _v96.createDomName)(_v1, _v0, "tab-panel"),
              sx: _v416.TAB_PANEL_STYLES,
              maxWidth: "100%",
              maxHeight: "100%",
              overflowY: "visible",
              children: (0, _v17.jsx)(_v106.Box, {
                id: (0, _v96.createDomName)(_v0, _v0, "scroll"),
                className: (0, _v96.createDomName)(_v1, _v0, "scroll"),
                sx: {
                  ...(0, _v416.createTabListScrollStyle)(),
                  ..._v47
                },
                children: (0, _v17.jsx)(_v106.Box, {
                  id: (0, _v96.createDomName)(_v0, _v0, "column"),
                  className: (0, _v96.createDomName)(_v1, _v0, "column"),
                  sx: (0, _v416.createTabListColumnStyle)(!0),
                  children: 0 === _v1.length ? (0, _v17.jsx)(_v554.PollEmptyState, {
                    id: (0, _v96.createDomName)(_v0, _v0, "empty-placeholder"),
                    className: (0, _v96.createDomName)(_v1, _v0, "empty-placeholder"),
                    width: "100%",
                    height: "100%",
                    padding: `0 ${(0, _v61.rem)(24)} 0 0`,
                    buttonLabel: _v190.T_CREATE_POLL,
                    description: 0 === _v0 ? _v66.translations.createPollToInteractWithAudience : _v66.translations.noPollsArchived,
                    control: 0 === _v0,
                    history: 0 === _v0 ? _v4 : null,
                    onCreateClick: _v30
                  }) : _v1.map(_v0 => {
                    var _v1;
                    let _v2,
                      _v3,
                      _v4 = (0, _v91.isGraphicAlreadyInScene)(_v0.id, _v11),
                      _v5 = _v449(_v0.id, _v11, _v12, _v13),
                      _v6 = (_v1 = {
                        onPollEdit: _v41,
                        onPollDelete: _v42
                      }, _v2 = _v0.state === _v40.EPollState.DRAFT, _v3 = [], _v2 && _v3.push({
                        key: "edit",
                        label: _v66.translations.edit,
                        onClick: () => {
                          _v1.onPollEdit(_v0), (0, _v557.trackClickEditPoll)();
                        },
                        icon: (0, _v17.jsx)(_v479.EditPencil, {})
                      }, {
                        key: "delete",
                        label: _v66.translations.removeFromEvent,
                        onClick: () => {
                          _v1.onPollDelete(_v0.id), (0, _v557.trackRemovePollFromEvent)();
                        },
                        icon: (0, _v17.jsx)(_v424.TrashBin, {})
                      }), _v3);
                    return (0, _v17.jsx)(_v106.Box, {
                      sx: _v416.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                      children: (0, _v17.jsxs)(_v452, {
                        graphicType: _v88.EGraphicsDescriptorType.POLL,
                        graphicId: _v0.id,
                        isInScene: _v4,
                        draggable: _v0.state !== _v40.EPollState.ARCHIVED,
                        children: [(0, _v17.jsx)(_v552.PollItem, {
                          poll: _v0,
                          isPollShownInActiveScene: _v29(_v0),
                          isAnyPollPublished: _v25,
                          canOpenPoll: _v27,
                          menuAttach: "right-start",
                          itemActions: {
                            onPollOpen: _v40,
                            onPollClose: _v38,
                            onPollArchive: _v39,
                            onToggleShowPoll: _v37
                          },
                          menuActions: _v6,
                          childrenControls: (0, _v17.jsx)(_v484, {
                            id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
                            className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
                            position: "relative",
                            left: "0",
                            top: "0",
                            marginRight: _v6.length ? (0, _v61.rem)(2) : "0px",
                            isInScene: _v4,
                            onClick: () => _v35(_v0)
                          })
                        }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                          size: "sm",
                          color: _v5,
                          width: 2,
                          borderRadius: 8
                        })]
                      })
                    }, _v0.id);
                  })
                })
              })
            }, _v0))
          }, _v32)]
        }), (0, _v17.jsx)(_v95.Flex, {
          position: "relative",
          children: (0, _v17.jsx)(_v447.HorizontalScrollShadow, {
            color: "surface"
          })
        })]
      })]
    }) : (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v190.T_POLLS,
        controls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v445.TooltipIconButton, {
            id: (0, _v96.createDomName)(_v0, "add-button"),
            className: (0, _v96.createDomName)(_v1, "add-button"),
            "aria-label": _v66.translations.addPoll,
            icon: (0, _v17.jsx)(_v369.Plus, {}),
            size: "sm",
            variant: "tertiary",
            placement: "bottom",
            label: _v66.translations.addPoll,
            onClick: _v30
          }), (0, _v17.jsx)(_v555.PollSettingsButton, {
            id: (0, _v96.createDomName)(_v0, "settings-button"),
            className: (0, _v96.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v28,
            buttonIcon: (0, _v17.jsx)(_v378.EllipsisV, {})
          }), (0, _v17.jsx)(_v414.LeftPanelDismiss, {
            id: (0, _v96.createDomName)(_v0, "dismiss-button"),
            className: (0, _v96.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v17.jsx)(_v413.LeftPanelContent, {
        children: (0, _v17.jsx)(_v554.PollEmptyState, {
          id: _v0,
          className: _v1,
          buttonLabel: _v190.T_CREATE_POLL,
          description: _v66.translations.createPollToInteractWithAudience,
          history: _v4,
          sx: (0, _v416.createTabWrapperStyle)(),
          onCreateClick: _v30
        })
      })]
    }) : (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      className: _v1,
      position: "relative",
      sx: (0, _v416.createTabWrapperStyle)(),
      children: (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
        id: (0, _v96.createDomName)(_v0, "loader"),
        className: (0, _v96.createDomName)(_v1, "loader"),
        opacity: .25,
        withAnimation: !0
      })
    });
  }
  var _v560 = _v0.i(0),
    _v561 = _v0.i(0),
    _v562 = _v0.i(0),
    _v563 = _v0.i(0),
    _v564 = _v0.i(0),
    _v565 = _v0.i(0),
    _v566 = _v0.i(0),
    _v567 = _v0.i(0),
    _v568 = _v0.i(0),
    _v569 = _v0.i(0),
    _v570 = _v0.i(0),
    _v571 = _v0.i(0),
    _v572 = _v0.i(0);
  function _v573({
    id: _v0 = (0, _v96.createDomName)("rtc-qna-tab"),
    className: _v1 = (0, _v96.createDomName)("rtc-qna-tab"),
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
        deactivateQuestion: _v11,
        answerQuestion: _v12,
        pinQuestion: _v13,
        unPinQuestion: _v14,
        deleteQuestionReply: _v15
      }
    } = (0, _v28.useManager)(_v182.QnAManager),
    sceneContext: {
      activeScene: _v16,
      sceneInProgram: _v17,
      sceneActions: _v18
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      activeScene: _v0
    }) => [_v0]),
    composerSessionStatusContext: {
      ingestStatus: _v19
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      ingestStatus: _v0
    }) => [_v0]),
    firebaseContext: {
      connectionStatuses: {
        isInteractionConnected: _v20
      }
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager),
    composerSessionContext: {
      sessionType: _v21
    } = (0, _v28.useManager)(_v63.ComposerSessionManager, ({
      sessionType: _v0
    }) => [_v0])
  }) {
    let _v22 = (0, _v44.useIsVpaas)(),
      {
        selectedQuestionId: _v23,
        selectedQuestionElement: _v24,
        selectedQuestionState: _v25,
        onSelectedQuestion: _v26,
        onDeselectQuestion: _v27
      } = (0, _v571.useQnaResponding)(),
      {
        panels: _v28,
        currentQuestions: _v29,
        activePanelId: _v30,
        setActivePanelId: _v31
      } = (0, _v568.useQnaPanels)(),
      {
        getIdByIndex: _v32,
        getIndexById: _v33
      } = (0, _v569.useTabsMapping)(_v28),
      _v34 = (0, _v160.useSimpleNotification)(),
      _v35 = null !== _v23 && (0, _v570.canReplyQuestion)(_v29.find(_v0 => _v0.id === _v23)) && !(0, _v570.hasQuestionReplies)(_v23 ? _v7?.[_v23] : void 0),
      _v36 = _v17 === _v16?.id,
      _v37 = _v21 === _v39.EComposerSessionType.VENUE,
      _v38 = !_v22 && !_v37,
      _v39 = (0, _v91.isGraphicTypeAlreadyInScene)(_v88.EGraphicsDescriptorType.QNA, _v16),
      _v40 = _v449(_v88.EGraphicsDescriptorType.QNA, _v16, _v17, _v19),
      _v41 = _v164(_v88.EGraphicsDescriptorType.QNA, _v16, _v18, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v42 = (0, _v21.useCallback)(async _v0 => {
        _v39 ? (_v18.setGraphicVisibility(_v16.id, _v88.EGraphicsDescriptorType.QNA, !0), _v12(_v0.id)) : (await _v41(_v0)) && (_v18.setGraphicVisibility(_v16.id, _v88.EGraphicsDescriptorType.QNA, !0), _v12(_v0.id)), (0, _v572.trackShowQuestion)(_v4, _v36, "left_panel");
      }, [_v16, _v12, _v4, _v36, _v39, _v41, _v18]),
      _v43 = (0, _v21.useCallback)(_v0 => {
        _v11(_v0.id), (0, _v572.trackHideQuestion)(_v4, "left_panel");
      }, [_v11, _v4]),
      _v44 = (0, _v21.useCallback)(_v0 => {
        _v8(_v0.id), (0, _v572.trackApproveModeratedQuestion)(), _v34({
          message: _v190.T_QUESTION_APPROVED
        });
      }, [_v8, _v34]),
      _v45 = (0, _v21.useCallback)(_v0 => {
        _v9(_v0.id, !!_v0.approved), (0, _v572.trackArchiveQuestion)(_v4), _v34({
          message: _v190.T_QUESTION_ARCHIVED
        });
      }, [_v9, _v4, _v34]),
      _v46 = (0, _v21.useCallback)(_v0 => {
        _v10(_v0.id, !!_v0.approved), (0, _v572.trackUnarchiveQuestion)(_v4), _v34({
          message: _v190.T_QUESTION_UNARCHIVED
        });
      }, [_v4, _v34, _v10]),
      _v47 = (0, _v21.useCallback)(_v0 => {
        _v13(_v0), (0, _v572.trackPinQuestion)(), _v34({
          message: _v190.T_QUESTION_PINNED
        });
      }, [_v34, _v13]),
      _v48 = (0, _v21.useCallback)(_v0 => {
        _v14(_v0), (0, _v572.trackUnpinQuestion)(), _v34({
          message: _v190.T_QUESTION_UNPINNED
        });
      }, [_v34, _v14]),
      _v49 = (0, _v21.useCallback)((_v0, _v1) => {
        _v15(_v0, _v1), _v34({
          message: _v190.T_QUESTION_REPLY_DELETED
        });
      }, [_v34, _v15]),
      _v50 = (0, _v21.useCallback)(_v0 => {
        _v31(_v32(_v0)), _v27(), (0, _v572.trackSwitchActiveTab)();
      }, [_v32, _v27, _v31]);
    return ((0, _v21.useEffect)(() => {
      (0, _v572.trackViewQna)();
    }, []), _v5) ? _v2 ? (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v190.T_QNA,
        controls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v563.QnaSettingsButton, {
            id: (0, _v96.createDomName)(_v0, "settings-button"),
            className: (0, _v96.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v38,
            buttonIcon: (0, _v17.jsx)(_v378.EllipsisV, {})
          }), (0, _v17.jsx)(_v414.LeftPanelDismiss, {
            id: (0, _v96.createDomName)(_v0, "dismiss-button"),
            className: (0, _v96.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v17.jsxs)(_v413.LeftPanelContent, {
        children: [(0, _v17.jsxs)(_v440.Tabs, {
          size: "sm",
          index: _v33(_v30),
          sx: _v416.TABS_STYLES,
          onChange: _v50,
          children: [(0, _v17.jsxs)(_v441.TabList, {
            children: [_v28.map(({
              id: _v0,
              label: _v1
            }) => (0, _v17.jsx)(_v442.Tab, {
              className: (0, _v96.createDomName)(_v0, _v0, "tab"),
              children: _v1
            }, _v0)), (0, _v17.jsx)(_v440.TabIndicator, {})]
          }), (0, _v17.jsx)(_v444.TabPanels, {
            sx: _v416.TAB_PANELS_STYLES,
            children: _v28.map(({
              id: _v0,
              questions: _v1
            }) => (0, _v17.jsx)(_v443.TabPanel, {
              className: (0, _v96.createDomName)(_v0, _v0, "tab-panel"),
              sx: _v416.TAB_PANEL_STYLES,
              children: (0, _v17.jsx)(_v565.QuestionsList, {
                id: (0, _v96.createDomName)(_v0, _v0, "questions-list"),
                tabId: _v0,
                selectedQuestionElement: _v24,
                questions: _v1,
                pinnedQuestionId: _v3,
                isManagementAccessed: !0,
                scrollBackground: "surface",
                itemRenderer: _v0 => {
                  var _v1;
                  let _v2,
                    _v3 = (_v1 = {
                      onHideQuestion: _v43,
                      onShowQuestion: _v42,
                      onArchiveQuestion: _v45
                    }, _v2 = {
                      id: "archive",
                      label: _v190.T_ARCHIVE,
                      onClick: () => _v1.onArchiveQuestion(_v0)
                    }, _v0.state === _v40.EQuestionState.ANSWERING ? [{
                      id: "hide",
                      label: _v66.translations.hideFromScene,
                      onClick: () => _v1.onHideQuestion(_v0)
                    }, _v2] : _v0.state === _v40.EQuestionState.ASKED ? [{
                      id: "show",
                      label: _v66.translations.showOnScene,
                      onClick: () => _v1.onShowQuestion(_v0)
                    }, _v2] : void 0),
                    _v4 = _v39 && _v0.state === _v40.EQuestionState.ANSWERING ? _v40 : _v23 === _v0.id ? _v136.FOCUSED_STATE_COLOR : "transparent";
                  return (0, _v17.jsxs)(_v106.Box, {
                    sx: _v416.TAB_LIST_COLUMN_FULL_ITEM_STYLE,
                    children: [(0, _v17.jsx)(_v564.NewQuestionManageItem, {
                      question: _v0,
                      isActive: _v0.id === _v23,
                      isPinned: _v0.id === _v3,
                      questionReplies: _v7[_v0.id],
                      menuItems: _v3,
                      onQuestionSelected: _v26,
                      onQuestionDeselected: _v27,
                      onQuestionApprove: _v44,
                      onQuestionArchive: _v45,
                      onQuestionUnArchive: _v46,
                      onQuestionPin: _v47,
                      onQuestionUnPin: _v48,
                      onDeleteQuestionReply: _v49
                    }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                      size: "sm",
                      width: 2,
                      borderRadius: 12,
                      zIndex: "auto",
                      color: _v4
                    })]
                  }, _v0.id);
                },
                placeholder: (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
                  id: (0, _v96.createDomName)(_v0, _v0, "empty-placeholder"),
                  className: (0, _v96.createDomName)(_v0, _v0, "empty-placeholder"),
                  isWithPadding: !0,
                  icon: (0, _v17.jsx)(_v560.ReviewQuestion, {
                    boxSize: "lg"
                  }),
                  description: _v0 === _v40.EQnaTab.PENDING ? _v190.T_NO_QUESTIONS_PENDING : _v190.T_NO_QUESTIONS_YET,
                  control: null
                })
              })
            }, _v0))
          }, _v30)]
        }), (0, _v17.jsxs)(_v106.Box, {
          position: "relative",
          width: "100%",
          onMouseDown: _v368.stopEventPropagation,
          onTouchStart: _v368.stopEventPropagation,
          children: [(0, _v17.jsx)(_v447.HorizontalScrollShadow, {
            color: "surface"
          }), _v35 ? (0, _v17.jsx)(_v562.QnaReplyForm, {
            id: (0, _v96.createDomName)(_v0, "reply-form"),
            selectedQuestionId: _v23,
            isApproveNeeded: _v25 === _v40.EQuestionState.PENDING,
            onDismiss: _v27
          }) : (0, _v17.jsx)(_v566.SessionControlButton, {
            id: (0, _v96.createDomName)(_v0, "session-control-button")
          })]
        })]
      })]
    }, "active") : (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v190.T_QNA,
        controls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v563.QnaSettingsButton, {
            id: (0, _v96.createDomName)(_v0, "settings-button"),
            className: (0, _v96.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: _v38,
            buttonIcon: (0, _v17.jsx)(_v378.EllipsisV, {})
          }), (0, _v17.jsx)(_v414.LeftPanelDismiss, {
            id: (0, _v96.createDomName)(_v0, "dismiss-button"),
            className: (0, _v96.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v17.jsxs)(_v413.LeftPanelContent, {
        justifyContent: "center",
        children: [(0, _v17.jsx)(_v567.SessionInactive, {
          flexGrow: 0,
          height: "auto"
        }), _v22 ? null : (0, _v17.jsx)(_v561.QnAUpsell, {
          canUseQnaModeration: _v6
        })]
      })]
    }, "inactive") : (0, _v17.jsx)(_v106.Box, {
      id: _v0,
      position: "relative",
      sx: (0, _v416.createTabWrapperStyle)(),
      children: (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
        id: (0, _v96.createDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  var _v574 = _v0.i(0),
    _v575 = _v0.i(0),
    _v576 = _v0.i(0),
    _v577 = _v0.i(0),
    _v578 = _v0.i(0);
  function _v579({
    id: _v0 = (0, _v65.createLiveDomName)("backstage-mode-toggle"),
    className: _v1 = (0, _v65.createLiveDomName)("backstage-mode-toggle"),
    composerSettingsContext: {
      audioMode: _v2,
      composerSettingsActions: _v3
    } = (0, _v28.useManager)(_v50.ComposerSettingsManager, ({
      audioMode: _v0
    }) => [_v0])
  }) {
    let {
        trackLiveStreamBackstageToggled: _v4
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v5 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v0.target.checked;
        (0, _v222.trackToggleAudioMode)(_v1), _v4({
          liveStreamNewStatus: _v1
        }), _v3.setAudioMode(_v1 ? _v285.EAudioMixingMode.SCENE : _v285.EAudioMixingMode.ALL);
      }, [_v3, _v4]),
      _v6 = _v2 === _v285.EAudioMixingMode.SCENE;
    return (0, _v17.jsx)(_v235.BokehPopover, {
      inPortal: !1,
      triggerContent: (0, _v17.jsx)("div", {
        children: (0, _v17.jsx)(_v214.BokehTooltip, {
          label: _v66.translations.backstageSettings,
          placement: "bottom",
          children: (0, _v17.jsx)(_v578.BokehIconButton, {
            size: "sm",
            icon: (0, _v17.jsx)(_v378.EllipsisV, {})
          })
        })
      }),
      placement: "bottom",
      content: (0, _v17.jsxs)(_v95.Flex, {
        id: _v0,
        className: _v1,
        padding: `${(0, _v61.rem)(8)} ${(0, _v61.rem)(16)}`,
        maxWidth: (0, _v61.rem)(260),
        direction: "column",
        gap: (0, _v61.rem)(8),
        color: "text-primary",
        borderRadius: "md",
        children: [(0, _v17.jsxs)(_v417.FormLabel, {
          cursor: "pointer",
          id: (0, _v65.createLiveDomName)(_v0, "control"),
          className: (0, _v65.createLiveDomName)(_v1, "control"),
          htmlFor: "switch-backstage",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: 0,
          children: [(0, _v17.jsx)(_v109.Text, {
            variant: "heading-sm",
            children: _v66.translations.backstage
          }), (0, _v17.jsx)(_v453.Badge, {
            border: "none",
            size: "sm",
            variant: "mature",
            backgroundColor: _v6 ? "status-positive-primary" : _v136.FAILED_STATUS_COLOR,
            marginLeft: (0, _v61.rem)(8),
            children: _v6 ? _v66.translations.open : _v66.translations.closed
          }), (0, _v17.jsx)(_v418.Switch, {
            marginLeft: "auto",
            onChange: _v5,
            isChecked: _v6,
            id: (0, _v65.createLiveDomName)(_v0, "switcher")
          })]
        }), (0, _v17.jsx)(_v109.Text, {
          variant: "body-sm",
          children: _v66.translations.backstageModeDescription
        })]
      })
    });
  }
  var _v580 = _v0.i(0),
    _v581 = _v0.i(0),
    _v582 = _v0.i(0),
    _v583 = _v0.i(0),
    _v584 = _v0.i(0);
  function _v585({
    text: _v0,
    id: _v1,
    onClick: _v2
  }) {
    return (0, _v17.jsxs)(_v95.Flex, {
      alignItems: "center",
      children: [(0, _v17.jsx)(_v213.IconButton, {
        id: _v1,
        "aria-label": "back",
        size: "xs",
        variant: "tertiary",
        icon: (0, _v17.jsx)(_v584.ChevronLeft, {}),
        onClick: _v2
      }), (0, _v17.jsx)(_v292.Paragraph, {
        marginLeft: (0, _v61.rem)(4),
        fontSize: "body-md",
        children: _v0
      })]
    });
  }
  var _v586 = _v0.i(0);
  function _v587({
    id: _v0 = (0, _v65.createLiveDomName)("camera-switch"),
    onCloseCameraSwitch: _v1,
    presenceContext: {
      eventConnections: _v2,
      broadcasterId: _v3,
      currentConnectionId: _v4,
      presenceActions: {
        switchConnectionToBroadcasterMode: _v5
      }
    } = (0, _v28.useManager)(_v586.PresenceManager)
  }) {
    let _v6 = (0, _v21.useMemo)(() => Object.values(_v2).filter(_v0 => _v4 === _v0.id || !_v0.isPossessedByMod && !_v0.isHidden), [_v2, _v4]),
      _v7 = (0, _v21.useCallback)(_v0 => {
        _v5(_v0);
      }, [_v5]);
    return (0, _v17.jsxs)(_v106.Box, {
      padding: (0, _v61.rem)(8),
      children: [(0, _v17.jsx)(_v585, {
        text: _v66.translations.switchCamera,
        id: (0, _v65.createLiveDomName)(_v0, "back-button"),
        onClick: _v1
      }), _v6.map(({
        name: _v0,
        id: _v1
      }) => (0, _v17.jsx)(_v481.BokehMenuItem, {
        className: (0, _v65.createLiveDomName)(_v0, "option"),
        icon: _v1 === _v3 ? (0, _v17.jsx)(_v300.Checkmark, {}) : void 0,
        isDisabled: _v1 === _v3,
        dataId: _v1,
        onClick: () => _v7(_v1),
        children: _v0
      }, _v1))]
    });
  }
  function _v588({
    id: _v0 = (0, _v65.createLiveDomName)("broadcaster-form-container"),
    broadcasterInfo: _v1,
    onCloseEditForm: _v2,
    onEditBroadcaster: _v3
  }) {
    return (0, _v17.jsxs)(_v95.Flex, {
      direction: "column",
      width: (0, _v61.rem)(266),
      borderRadius: (0, _v61.rem)(8),
      gap: (0, _v61.rem)(8),
      padding: (0, _v61.rem)(8),
      id: _v0,
      children: [(0, _v17.jsx)(_v585, {
        text: _v66.translations.edit,
        id: (0, _v65.createLiveDomName)(_v0, "back-button"),
        onClick: _v2
      }), (0, _v17.jsx)(_v470, {
        onEditBroadcaster: _v3,
        broadcasterInfo: _v1
      })]
    });
  }
  var _v589 = _v0.i(0);
  function _v590({
    id: _v0 = (0, _v65.createLiveDomName)("menu-actions"),
    onOpenEditForm: _v1,
    onOpenCameraSwitch: _v2
  }) {
    let _v3 = (0, _v21.useMemo)(() => [{
      key: "edit",
      label: _v66.translations.edit,
      icon: (0, _v17.jsx)(_v479.EditPencil, {}),
      onClick: _v1
    }, {
      key: "switch-camera",
      label: _v66.translations.switchCamera,
      icon: (0, _v17.jsx)(_v589.CameraOn, {}),
      onClick: _v2
    }], [_v1, _v2]);
    return (0, _v17.jsx)(_v17.Fragment, {
      children: _v3.map(({
        key: _v0,
        label: _v1,
        icon: _v2,
        onClick: _v3
      }) => (0, _v17.jsx)(_v481.BokehMenuItem, {
        className: (0, _v65.createLiveDomName)(_v0, _v0),
        icon: _v2,
        onClick: _v3,
        children: _v1
      }, _v0))
    });
  }
  function _v591({
    id: _v0 = (0, _v96.createDomName)("broadcaster-menu"),
    className: _v1 = (0, _v96.createDomName)("broadcaster-menu"),
    isBroadcasterMenuOpen: _v2,
    onToggleBroadcasterMenu: _v3,
    onCloseBroadcasterMenu: _v4,
    broadcasterInfo: _v5,
    onEditBroadcaster: _v6
  }) {
    let [_v7, _v8] = (0, _v21.useState)("default"),
      _v9 = (0, _v21.useCallback)(() => {
        _v8("edit"), (0, _v222.trackOpenBroadcasterEditModal)();
      }, []),
      _v10 = (0, _v21.useCallback)(() => {
        _v8("default");
      }, []),
      _v11 = (0, _v21.useCallback)(() => {
        _v10(), _v3();
      }, [_v10, _v3]),
      _v12 = (0, _v21.useCallback)(() => {
        _v8("camera");
      }, []),
      _v13 = (0, _v21.useMemo)(() => {
        switch (_v7) {
          case "edit":
            return (0, _v17.jsx)(_v588, {
              onCloseEditForm: _v10,
              onEditBroadcaster: _v6,
              broadcasterInfo: _v5
            });
          case "camera":
            return (0, _v17.jsx)(_v587, {
              onCloseCameraSwitch: _v10
            });
          case "default":
            return (0, _v17.jsx)(_v590, {
              onOpenEditForm: _v9,
              onOpenCameraSwitch: _v12
            });
        }
      }, [_v5, _v7, _v10, _v6, _v12, _v9]);
    return (0, _v17.jsx)(_v480.BokehMenu, {
      id: (0, _v96.createDomName)(_v0, "edit-menu"),
      className: (0, _v96.createDomName)(_v1, "edit-menu"),
      variant: "blur",
      isOpen: _v2,
      onClick: _v11,
      onClose: _v4,
      menuList: _v13
    });
  }
  function _v592({
    id: _v0 = (0, _v96.createDomName)("broadcaster-source"),
    className: _v1 = (0, _v96.createDomName)("broadcaster-source"),
    isInPreview: _v2,
    canToggleInScene: _v3,
    agoraContext: {
      role: _v4,
      isReady: _v5,
      isDestroyed: _v6
    } = (0, _v28.useManager)(_v62.BroadcasterAgoraManager, ({
      role: _v0,
      isReady: _v1,
      mediaConnectionQuality: _v2
    }) => [_v2.uplinkNetworkQuality, _v2.downlinkNetworkQuality, _v0, _v1]),
    remoteMediaContext: {
      roomMedia: _v7
    } = (0, _v28.useManager)(_v184.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    screenShareContext: {
      activeScreenShareId: _v8
    } = (0, _v28.useManager)(_v180.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    graphicsContext: {
      additionalInformation: {
        broadcaster: _v9
      },
      graphicsActions: _v10,
      theme: _v11
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      additionalInformation: _v0,
      theme: _v1
    }) => [_v0.broadcaster, _v1]),
    localMediaContext: {
      video: _v12,
      audio: _v13,
      screen: _v14
    } = (0, _v28.useManager)(_v183.LocalMediaManager),
    composerSettingsContext: {
      isLocalMirrored: _v15
    } = (0, _v28.useManager)(_v50.ComposerSettingsManager),
    sceneContext: {
      activeScene: _v16,
      sceneActions: _v17
    } = (0, _v28.useManager)(_v56.SceneManager, ({
      activeScene: _v0
    }) => [_v0])
  }) {
    var _v18, _v19;
    let [_v20] = (_v18 = _v12.track, _v19 = _v13.track, (0, _v21.useMemo)(() => {
        if (_v4 === _v38.EClientRole.HOST) return [_v18, _v19, null];
        let _v0 = _v7.find(_v0 => _v0.type === _v38.EAgoraConnectionType.BROADCASTER) || null;
        return [_v0?.video || null, _v0?.audio || null, _v0];
      }, [_v4, _v7, _v18, _v19])),
      _v21 = (0, _v21.useMemo)(() => ({
        name: _v9.name,
        title: _v9.title,
        mail: "",
        createdAt: 0,
        isAudioMuted: !1,
        isVideoMuted: !1,
        id: "BROADCASTER"
      }), [_v9]),
      {
        onMouseEnter: _v22,
        onMouseLeave: _v23,
        isMenuOpen: _v24,
        onToggleMenu: _v25,
        isItemHovered: _v26,
        onMouseHover: _v27,
        onCloseMenu: _v28
      } = (0, _v476.useSourceHoverControls)(),
      _v29 = (0, _v21.useCallback)(() => {
        _v25();
      }, [_v25]),
      _v30 = (0, _v21.useCallback)(_v0 => _v10.updateBroadcasterLowerThird(_v0), [_v10]),
      _v31 = _v164(_v88.EGraphicsDescriptorType.AGORA_STREAM, _v16, _v17, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v32 = (0, _v21.useCallback)(() => {
        _v31({
          id: _v38.EAgoraConnectionType.BROADCASTER
        });
      }, [_v31]),
      _v33 = _v9.name,
      _v34 = _v4 === _v38.EClientRole.HOST,
      _v35 = (0, _v367.getActiveAgoraSourceTrack)(_v20),
      _v36 = !!(String(_v8).startsWith(_v38.EAgoraConnectionType.BROADCASTER_SCREEN) && _v14.track),
      _v37 = !_v34 || !_v12.isMuted;
    return _v5 || _v6 ? (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      direction: "column",
      alignItems: "center",
      background: _v97.PREVIEW_GRADIENT,
      overflow: "hidden",
      sx: _v97.STRICT_16BY9_BOX_STYLE,
      onMouseEnter: _v22,
      onMouseLeave: _v23,
      onMouseMove: _v27,
      children: [(0, _v17.jsx)(_v145.AgoraStreamAvatar, {
        avatarSrc: void 0,
        name: _v33,
        colorSeed: _v38.EAgoraConnectionType.BROADCASTER,
        fontFamily: _v11?.font
      }), (0, _v17.jsx)(_v582.AgoraMediaTrackPreview, {
        track: _v37 ? _v35 : null,
        isMirrored: _v15,
        background: "transparent",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: "100%",
        height: "100%"
      }), (0, _v17.jsx)(_v106.Box, {
        position: "absolute",
        left: (0, _v61.rem)(4),
        top: (0, _v61.rem)(2),
        zIndex: 20,
        children: _v13.isMuted ? (0, _v17.jsx)(_v580.MicOff, {
          boxSize: (0, _v61.rem)(16),
          color: "white"
        }) : (0, _v17.jsx)(_v581.MicOn, {
          boxSize: (0, _v61.rem)(16),
          color: "white"
        })
      }), _v36 ? (0, _v17.jsx)(_v583.LiveSourceScreenshareIndicator, {
        id: (0, _v96.createDomName)(_v0, "sharing-screen-badge"),
        className: (0, _v96.createDomName)(_v1, "sharing-screen-badge"),
        children: _v66.translations.sharingScreen
      }) : null, (0, _v17.jsx)(_v95.Flex, {
        justifyContent: "flex-end",
        alignItems: "center",
        flexWrap: "nowrap",
        visibility: _v26 ? "visible" : "hidden",
        sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
        children: (0, _v17.jsxs)(_v95.Flex, {
          id: (0, _v96.createDomName)(_v0, "controls"),
          className: (0, _v96.createDomName)(_v1, "controls"),
          position: "absolute",
          right: (0, _v61.rem)(4),
          top: (0, _v61.rem)(4),
          grow: 1,
          zIndex: 21,
          gap: (0, _v61.rem)(2),
          children: [(0, _v17.jsx)(_v484, {
            id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
            className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
            variant: "blur",
            position: "static",
            isDisabled: !_v3,
            isInScene: _v2,
            onClick: _v32
          }), (0, _v17.jsx)(_v591, {
            id: (0, _v96.createDomName)(_v0, "broadcaster-menu"),
            className: (0, _v96.createDomName)(_v1, "broadcaster-menu"),
            isBroadcasterMenuOpen: _v24,
            broadcasterInfo: _v21,
            onToggleBroadcasterMenu: _v29,
            onCloseBroadcasterMenu: _v28,
            onEditBroadcaster: _v30
          })]
        })
      })]
    }) : (0, _v17.jsx)(_v95.Flex, {
      id: _v0,
      direction: "column",
      alignItems: "center",
      overflow: "hidden",
      background: _v97.PREVIEW_GRADIENT,
      sx: _v97.STRICT_16BY9_BOX_STYLE,
      children: (0, _v17.jsx)(_v95.Flex, {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        children: (0, _v17.jsx)(_v157.Spinner, {
          id: (0, _v96.createDomName)(_v0, "loader"),
          className: (0, _v96.createDomName)(_v1, "loader"),
          size: "sm"
        })
      })
    });
  }
  function _v593({
    id: _v0 = (0, _v65.createLiveDomName)("create-guest-button"),
    isCreating: _v1,
    isDisabled: _v2,
    isLoading: _v3,
    canSendEmailInvites: _v4,
    newGuest: _v5,
    newGuestInviteUrl: _v6,
    onCreateGuest: _v7,
    onCancelEditing: _v8,
    onUpdateGuest: _v9,
    onSendInvite: _v10,
    onCreateClick: _v11
  }) {
    return (0, _v17.jsx)(_v235.BokehPopover, {
      isOpen: _v1,
      inPortal: !0,
      placement: "right-end",
      triggerContent: (0, _v17.jsx)("div", {
        children: (0, _v17.jsx)(_v214.BokehTooltip, {
          label: _v66.translations.addSpeaker,
          placement: "bottom",
          children: (0, _v17.jsx)(_v213.IconButton, {
            id: _v0,
            "aria-label": _v66.translations.addSpeaker,
            size: "sm",
            variant: "tertiary",
            isLoading: _v3,
            isDisabled: _v2,
            icon: (0, _v17.jsx)(_v369.Plus, {}),
            onClick: _v11
          })
        })
      }),
      content: (0, _v17.jsx)(_v469, {
        canSendEmails: _v4,
        guest: _v5,
        inviteUrl: _v6,
        isEditing: _v1,
        onCreateGuest: _v7,
        onCancelEditing: _v8,
        onUpdateGuest: _v9,
        onSendInvite: _v10
      }),
      onClose: _v8
    });
  }
  var _v594 = _v0.i(0),
    _v595 = _v0.i(0),
    _v596 = _v0.i(0);
  function _v597({
    inviteUrl: _v0,
    onClick: _v1
  }) {
    let _v2 = (0, _v160.useSimpleNotification)(),
      _v3 = (0, _v21.useCallback)(async () => {
        (0, _v596.copyTextToClipboard)(_v0), _v2({
          message: _v66.translations.copied
        }), (0, _v222.trackCopySpeakerInviteLink)(), _v1();
      }, [_v0, _v2, _v1]);
    return (0, _v17.jsx)(_v481.BokehMenuItem, {
      icon: (0, _v17.jsx)(_v595.Link, {}),
      onClick: _v3,
      children: _v66.translations.copyGuestLink
    });
  }
  function _v598({
    id: _v0,
    className: _v1 = (0, _v96.createDomName)("guest-source"),
    guest: _v2,
    descriptor: _v3,
    fontFamily: _v4,
    isInPreview: _v5,
    isMuteToggleEnabled: _v6 = !1,
    canToggleInScene: _v7 = !0,
    canEditGuests: _v8 = !0,
    isEditing: _v9,
    isSharingScreen: _v10,
    isAllowedToShareScreen: _v11,
    inviteUrl: _v12,
    onRemoveGuest: _v13,
    onEditGuest: _v14,
    onSetGuestMuted: _v15,
    onSetGuestUnmuted: _v16,
    onToggleInScene: _v17,
    audioMode: _v18
  }) {
    let _v19 = (0, _v21.useRef)(null),
      {
        onMouseEnter: _v20,
        onMouseLeave: _v21,
        isMenuOpen: _v22,
        isItemHovered: _v23,
        onMouseHover: _v24,
        onToggleMenu: _v25,
        onCloseMenu: _v26
      } = (0, _v476.useSourceHoverControls)(),
      _v27 = function (_v0, _v1 = []) {
        let [_v2, _v3] = (0, _v21.useState)(!1),
          _v4 = (0, _v21.useMemo)(() => new IntersectionObserver(([_v0]) => {
            _v3(_v0.isIntersecting);
          }), []);
        return (0, _v21.useEffect)(() => {
          let _v0 = !1;
          return async function () {
            await (0, _v99.nextAsyncQueue)(), _v0.current && !_v0 && _v4.observe(_v0.current);
          }(), () => {
            _v0 = !0, _v4.disconnect();
          };
        }, [_v4, _v0, ..._v1]), _v2;
      }(_v19, [_v18]),
      _v28 = _v3?.video || null,
      _v29 = _v3?.audio || null,
      _v30 = _v28?.getMediaStreamTrack() || null,
      _v31 = !!(_v6 && _v3),
      _v32 = !_v29 || _v3?.volume === 0,
      _v33 = (0, _v21.useCallback)(() => {
        _v22 || (0, _v222.trackOpenSpeakerManagementBox)(), _v25();
      }, [_v22, _v25]),
      _v34 = (0, _v21.useMemo)(() => (0, _v147.formatConnectionUidByType)(_v38.EAgoraConnectionType.GUEST, _v2.id), [_v2.id]),
      _v35 = (0, _v21.useCallback)(() => {
        _v17({
          id: _v34
        });
      }, [_v17, _v34]),
      _v36 = (0, _v21.useCallback)(() => {
        _v13(_v2), _v26();
      }, [_v2, _v26, _v13]),
      _v37 = (0, _v21.useCallback)(() => {
        _v32 ? ((0, _v594.trackBroadCasterUnmuteGuestMic)(), _v16(_v2.id)) : ((0, _v594.trackBroadcasterMuteGuestMic)(), _v15(_v2.id));
      }, [_v2, _v32, _v15, _v16]),
      _v38 = (0, _v21.useCallback)(() => {
        _v14(_v2.id), _v26(), (0, _v222.trackOpenSpeakerEditModal)();
      }, [_v2.id, _v26, _v14]);
    return ((0, _v21.useEffect)(() => _v27 ? void 0 : _v26, [_v27, _v26]), _v27) ? (0, _v17.jsx)(_v106.Box, {
      ref: _v19,
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabListColumnHalfItemStyle)(),
      onMouseEnter: _v20,
      onMouseLeave: _v21,
      onMouseMove: _v24,
      children: (0, _v17.jsxs)(_v95.Flex, {
        direction: "column",
        alignItems: "center",
        background: _v97.PREVIEW_GRADIENT,
        overflow: "hidden",
        sx: _v97.STRICT_16BY9_BOX_STYLE,
        children: [(0, _v17.jsx)(_v145.AgoraStreamAvatar, {
          avatarSrc: void 0,
          name: _v2.name,
          colorSeed: _v2.id,
          fontFamily: _v4,
          withAnimation: !1
        }), (0, _v17.jsx)(_v582.AgoraMediaTrackPreview, {
          track: _v30,
          background: "transparent",
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }), (0, _v17.jsx)(_v106.Box, {
          position: "absolute",
          left: (0, _v61.rem)(4),
          top: (0, _v61.rem)(3),
          zIndex: 20,
          children: (0, _v17.jsx)(_v214.BokehTooltip, {
            label: (0, _v84.inline)(() => _v31 ? _v32 ? _v66.translations.askToUnmute : _v66.translations.mute : null),
            placement: "top",
            children: (0, _v17.jsx)(_v213.IconButton, {
              "aria-label": "microphone-status",
              padding: (0, _v61.rem)(4),
              variant: "tertiary",
              background: _v32 ? "gray.600" : "white",
              _hover: {
                background: _v32 ? "gray.600" : "white"
              },
              size: "xs",
              isDisabled: !_v31,
              onClick: _v37,
              icon: _v32 ? (0, _v17.jsx)(_v580.MicOff, {
                color: "white"
              }) : (0, _v17.jsx)(_v581.MicOn, {
                color: "black"
              })
            })
          })
        }), _v11 && _v10 ? (0, _v17.jsx)(_v583.LiveSourceScreenshareIndicator, {
          children: _v66.translations.sharingScreen
        }) : null, (0, _v17.jsx)(_v95.Flex, {
          justifyContent: "flex-end",
          alignItems: "center",
          flexWrap: "nowrap",
          visibility: _v23 ? "visible" : "hidden",
          sx: _v97.FULL_WIDTH_ABSOLUTE_STYLE,
          children: (0, _v17.jsxs)(_v95.Flex, {
            position: "absolute",
            right: (0, _v61.rem)(4),
            top: (0, _v61.rem)(4),
            grow: 1,
            zIndex: 21,
            gap: (0, _v61.rem)(2),
            children: [(0, _v17.jsx)(_v484, {
              id: (0, _v96.createDomName)(_v0, "toggle-in-scene"),
              className: (0, _v96.createDomName)(_v1, "toggle-in-scene"),
              position: "static",
              variant: "blur",
              isDisabled: !_v7,
              isInScene: _v5,
              onClick: _v35
            }), (0, _v17.jsx)(_v480.BokehMenu, {
              id: (0, _v96.createDomName)(_v0, "edit-menu"),
              className: (0, _v96.createDomName)(_v1, "edit-menu"),
              variant: "blur",
              isOpen: _v22,
              menuList: (0, _v17.jsxs)(_v17.Fragment, {
                children: [_v8 ? (0, _v17.jsx)(_v481.BokehMenuItem, {
                  onClick: _v38,
                  icon: (0, _v17.jsx)(_v479.EditPencil, {}),
                  isDisabled: _v9,
                  children: _v66.translations.edit
                }) : null, (0, _v17.jsx)(_v597, {
                  onClick: _v26,
                  inviteUrl: _v12
                }), _v8 ? (0, _v17.jsx)(_v481.BokehMenuItem, {
                  icon: (0, _v17.jsx)(_v424.TrashBin, {}),
                  onClick: _v36,
                  children: _v66.translations.removeFromEvent
                }) : null]
              }),
              onClick: _v33,
              onClose: _v26
            })]
          })
        })]
      })
    }) : (0, _v17.jsx)(_v106.Box, {
      ref: _v19,
      sx: (0, _v416.createTabListColumnHalfItemStyle)()
    });
  }
  let _v599 = {
    mail: "",
    name: "",
    title: "",
    isAudioMuted: !1,
    isVideoMuted: !1,
    id: "",
    createdAt: 0
  };
  function _v600({
    id: _v0 = (0, _v96.createDomName)("sources-tab"),
    className: _v1 = (0, _v96.createDomName)("sources-tab"),
    firebaseContext: {
      isComposerReady: _v2
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager, ({
      isComposerReady: _v0
    }) => [_v0]),
    guestsContext: {
      guests: _v3,
      guestInvites: _v4,
      guestsActions: _v5,
      guestsEmailInvitesCreatedTimestamps: _v6
    } = (0, _v28.useManager)(_v146.GuestsManager),
    remoteMediaContext: {
      roomMedia: _v7,
      remoteMediaActions: _v8
    } = (0, _v28.useManager)(_v184.RemoteMediaManager, ({
      roomMedia: _v0
    }) => [_v0]),
    screenShareContext: {
      activeScreenShareId: _v9
    } = (0, _v28.useManager)(_v180.RoomScreenShareManager, ({
      activeScreenShareId: _v0
    }) => [_v0]),
    sceneContext: {
      activeScene: _v10,
      sceneInProgram: _v11,
      sceneActions: _v12,
      scenes: _v13
    } = (0, _v28.useManager)(_v56.SceneManager),
    agoraContext: {
      isReady: _v14,
      agoraActions: _v15,
      role: _v16,
      mediaConnectionQuality: _v17
    } = (0, _v28.useManager)(_v62.BroadcasterAgoraManager, ({
      isReady: _v0,
      role: _v1,
      mediaConnectionQuality: _v2
    }) => [_v0, _v1, _v2]),
    composerSessionContext: {
      sessionInfo: {
        value: _v18
      },
      permissions: _v19
    } = (0, _v28.useManager)(_v63.ComposerSessionManager),
    composerSessionStatusContext: {
      ingestStatus: _v20
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    composerSettingsContext: {
      audioMode: _v21,
      isHydrated: _v22
    } = (0, _v28.useManager)(_v50.ComposerSettingsManager, ({
      audioMode: _v0,
      isHydrated: _v1
    }) => [_v0, _v1]),
    graphicsContext: {
      additionalInformation: {
        broadcaster: _v23
      },
      theme: _v24
    } = (0, _v28.useManager)(_v82.GraphicsManager, ({
      additionalInformation: _v0,
      theme: _v1
    }) => [_v0.broadcaster, _v1])
  }) {
    let _v25 = (0, _v28.useScope)(),
      _v26 = (0, _v21.useRef)(null),
      _v27 = (0, _v44.useIsVpaas)(),
      [_v28, _v29] = (0, _v21.useState)(!1),
      [_v30, _v31] = (0, _v21.useState)(!1),
      [_v32, _v33] = (0, _v21.useState)(null),
      _v34 = _v518(_v88.EGraphicsDescriptorType.AGORA_STREAM),
      {
        initialState: {
          sessionType: _v35,
          sessionId: _v36
        }
      } = (0, _v80.useLiveGlobals)(),
      _v37 = !!_v18?.owner?.capabilities?.canSendGuestEmailInvites,
      _v38 = !_v19.hasExplicitApiGuestsManagement,
      _v39 = !_v19.hasExplicitApiGuestsManagement,
      _v40 = (0, _v91.isGraphicAlreadyInScene)(_v38.EAgoraConnectionType.BROADCASTER, _v13[_v11 || ""]),
      _v41 = (0, _v91.isGraphicAlreadyInScene)(_v38.EAgoraConnectionType.BROADCASTER, _v10),
      _v42 = (0, _v575.useRoomConnectionsQualities)(_v14, _v34.liveMediaConfig.AGORA.REMOTE_NETWORK_CHECK_INTERVAL, _v15.getRemoteNetworkQuality),
      _v43 = (0, _v21.useMemo)(() => Object.values(_v3).sort(_v422.guestsComparator), [_v3]),
      _v44 = (0, _v21.useMemo)(() => Object.values(_v4), [_v4]),
      [_v45, _v46] = (0, _v21.useState)(_v599),
      _v47 = (0, _v21.useCallback)(() => {
        _v26.current && (0, _v398.scrollToVerticalEnd)(_v26.current);
      }, []),
      _v48 = (0, _v21.useCallback)(async (_v0, _v1) => {
        _v29(!0);
        try {
          let _v0 = await _v5.createGuest(_v0);
          _v46({
            ..._v45,
            ..._v0.seat
          }), _v1 && (await _v5.sendGuestInvite(_v0.seat.id)), _v31(!1), _v33(_v0.seat.id);
        } catch (_v0) {
          throw _v0;
        } finally {
          _v29(!1);
        }
      }, [_v5, _v45]),
      _v49 = async _v0 => {
        await _v5.sendGuestInvite(_v0);
      },
      _v50 = _v164(_v88.EGraphicsDescriptorType.AGORA_STREAM, _v10, _v12, _v126.ETtrackingAddGraphicLocations.LEFT_PANEL),
      _v51 = (0, _v21.useCallback)(async (_v0, _v1) => {
        _v29(!0);
        try {
          await _v5.updateGuest(_v0, _v1);
        } catch (_v0) {
          throw _v0;
        } finally {
          _v29(!1);
        }
      }, [_v5]),
      _v52 = (0, _v21.useCallback)(_v0 => {
        _v33(_v0);
      }, []),
      _v53 = (0, _v21.useCallback)(() => {
        _v31(!0), (0, _v222.trackClickAddSource)();
      }, []),
      _v54 = (0, _v21.useCallback)(() => {
        _v31(!1), _v33(null), _v46(_v599);
      }, []);
    (0, _v21.useLayoutEffect)(() => {
      _v30 && _v47();
    }, [_v30, _v43, _v47]);
    let _v55 = (0, _v576.createGuestInviteLink)({
        eventInvites: _v44,
        guestId: _v45.id,
        isVpaas: _v27,
        sessionId: _v36,
        sessionType: _v35
      }),
      {
        Tabs: _v56,
        getGuestsList: _v57,
        tabId: _v58,
        onActivate: _v59,
        tabs: _v60
      } = function ({
        id: _v0,
        audioMode: _v1,
        scenes: _v2,
        sceneInProgram: _v3,
        eventGuests: _v4,
        isBroadcasterInProgram: _v5
      }) {
        let [_v6, _v7] = (0, _v21.useState)(_v577.ESourcesSubTab.BACKSTAGE),
          [_v8, _v9] = (0, _v21.useMemo)(() => {
            let _v0 = [],
              _v1 = [];
            return _v4.forEach(_v0 => {
              let _v1 = (0, _v147.formatConnectionUidByType)(_v38.EAgoraConnectionType.GUEST, _v0.id);
              (0, _v91.isGraphicAlreadyInScene)(_v1, _v2[_v3 || ""]) ? _v0.push(_v0) : _v1.push(_v0);
            }), [_v0, _v1];
          }, [_v4, _v3, _v2]),
          _v10 = (0, _v21.useMemo)(() => [...(_v1 === _v285.EAudioMixingMode.ALL ? [] : [{
            tabLabel: _v66.translations.backstageTab(_v9.length + +!_v5),
            tabId: _v577.ESourcesSubTab.BACKSTAGE
          }]), {
            tabLabel: _v66.translations.stageTab(_v8.length + +!!_v5),
            tabId: _v577.ESourcesSubTab.STREAM
          }], [_v1, _v9.length, _v5, _v8.length]),
          _v11 = (0, _v21.useCallback)(_v0 => {
            _v7(_v0);
          }, []);
        (0, _v21.useEffect)(() => {
          _v1 === _v285.EAudioMixingMode.ALL && _v11(_v577.ESourcesSubTab.BACKSTAGE);
        }, [_v1, _v11]);
        let _v12 = (0, _v21.useCallback)(_v0 => _v1 === _v285.EAudioMixingMode.ALL ? _v4 : _v0 === _v577.ESourcesSubTab.BACKSTAGE ? _v9 : _v0 === _v577.ESourcesSubTab.STREAM ? _v8 : _v4, [_v9, _v8, _v4, _v1]);
        return {
          Tabs: (0, _v21.useMemo)(() => _v1 === _v285.EAudioMixingMode.SCENE ? (0, _v17.jsxs)(_v441.TabList, {
            children: [_v10.map(({
              tabLabel: _v0,
              tabId: _v1
            }) => (0, _v17.jsx)(_v442.Tab, {
              id: (0, _v65.createLiveDomName)(_v0, "tab", _v1),
              children: _v0
            }, _v1)), (0, _v17.jsx)(_v440.TabIndicator, {})]
          }) : null, [_v1, _v0, _v10]),
          getGuestsList: _v12,
          tabId: _v6,
          onActivate: _v11,
          tabs: _v10
        };
      }({
        id: _v0,
        audioMode: _v21,
        scenes: _v13,
        sceneInProgram: _v11,
        eventGuests: _v43,
        isBroadcasterInProgram: _v40
      }),
      _v61 = _v43.length < _v33.liveApplicationConfig.GUESTS.LIMIT && (_v58 !== _v577.ESourcesSubTab.STREAM || _v21 === _v285.EAudioMixingMode.ALL);
    (0, _v21.useEffect)(() => _v25.subscribeToSignals(_v0 => {
      _v0.type === _v51.ELiveSignal.ADD_SPEAKER_TO_SCENE && _v61 && _v31(!0);
    }), [_v25, _v61]);
    let _v62 = _v449(_v38.EAgoraConnectionType.BROADCASTER, _v10, _v11, _v20),
      _v63 = (0, _v21.useMemo)(() => {
        let _v0 = Object.keys(_v42).find(_v0 => (0, _v147.isAgoraConnectionType)(_v0, _v38.EAgoraConnectionType.BROADCASTER));
        return (_v0 ? _v42[_v0] : null) || null;
      }, [_v42]),
      [_v64] = (0, _v160.useBroadcasterActionConfirmation)(),
      _v65 = (0, _v21.useCallback)(_v0 => {
        _v29(!0), _v64({
          type: _v162.EConfirmationType.GUEST_REMOVAL,
          header: _v66.translations.removeGuestSpeaker,
          body: _v66.translations.areYouSureToRemoveGuest(_v0.name),
          onConfirm: () => {
            _v5.deleteGuest(_v0.id).finally(() => {
              (0, _v222.trackRemoveSpeakerFromEvent)(), _v29(!1);
            });
          },
          onDecline: () => {
            _v29(!1);
          },
          declineMessage: _v190.T_CANCEL,
          confirmMessage: _v66.translations.yesRemove
        });
      }, [_v64, _v5]),
      _v66 = (0, _v221.useRoomScreenShare)(_v7),
      _v67 = (0, _v21.useMemo)(() => {
        let _v0 = _v58 === _v577.ESourcesSubTab.STREAM && _v40 && _v56,
          _v1 = _v58 === _v577.ESourcesSubTab.BACKSTAGE && !_v40 && _v56 || !_v56,
          _v2 = _v16 === _v38.EClientRole.HOST,
          _v3 = _v2 ? _v66.translations.meNameLabel(_v23.name) : _v66.translations.broadcasterNameLabel(_v23.name);
        return _v0 || _v1 ? (0, _v17.jsxs)(_v95.Flex, {
          direction: "column",
          children: [(0, _v17.jsxs)(_v106.Box, {
            position: "relative",
            children: [(0, _v17.jsx)(_v106.Box, {
              sx: (0, _v416.createTabListColumnHalfItemStyle)(),
              id: (0, _v96.createDomName)(_v0, "broadcaster-card"),
              children: (0, _v17.jsx)(_v452, {
                draggable: !0,
                isInScene: _v41,
                graphicId: _v38.EAgoraConnectionType.BROADCASTER,
                graphicType: _v88.EGraphicsDescriptorType.AGORA_STREAM,
                children: (0, _v17.jsx)(_v592, {
                  canToggleInScene: _v34,
                  isInPreview: _v41,
                  networkQuality: _v63
                })
              })
            }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
              color: _v0 ? _v136.NONE_LAYOUT_COLOR : _v62,
              size: "sm",
              width: 2
            })]
          }), (0, _v17.jsxs)(_v95.Flex, {
            maxWidth: (0, _v61.rem)(140),
            padding: (0, _v61.rem)(4),
            overflow: "hidden",
            whiteSpace: "nowrap",
            children: [(0, _v17.jsx)(_v574.LiveSourceStatusIndicator, {
              isConnected: !0,
              networkQuality: _v2 ? _v17 : _v63
            }), (0, _v17.jsx)(_v214.BokehTooltip, {
              placement: "top",
              shouldWrapChildren: !1,
              label: _v3,
              children: (0, _v17.jsx)(_v109.Text, {
                id: (0, _v65.createLiveDomName)(_v0, "broadcaster-name"),
                className: (0, _v65.createLiveDomName)(_v1, "broadcaster-name"),
                cursor: "pointer",
                variant: "body-xs",
                color: "text-primary",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: _v3
              })
            })]
          })]
        }) : null;
      }, [_v58, _v40, _v56, _v16, _v23.name, _v0, _v41, _v34, _v63, _v17, _v62]),
      _v68 = (0, _v314.useScrollbarStyles)(),
      _v69 = (0, _v17.jsxs)(_v17.Fragment, {
        children: [_v38 ? (0, _v17.jsx)(_v593, {
          canSendEmailInvites: _v37,
          isCreating: _v30,
          isLoading: _v28,
          isDisabled: !_v61,
          newGuest: _v45,
          newGuestInviteUrl: _v55,
          onCreateGuest: _v48,
          onCancelEditing: _v54,
          onUpdateGuest: _v51,
          onSendInvite: _v49,
          onCreateClick: _v53
        }) : null, (0, _v17.jsx)(_v579, {}), (0, _v17.jsx)(_v414.LeftPanelDismiss, {})]
      });
    return _v2 && _v22 ? (0, _v17.jsxs)(_v106.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v416.createTabWrapperStyle)(),
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v66.translations.speakers,
        controls: _v69
      }), (0, _v17.jsx)(_v413.LeftPanelContent, {
        children: (0, _v17.jsxs)(_v440.Tabs, {
          id: _v0,
          index: _v58,
          size: "sm",
          flexDirection: "column",
          display: "flex",
          flexGrow: 1,
          onChange: _v59,
          children: [_v56, (0, _v17.jsx)(_v444.TabPanels, {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            height: "100%",
            children: _v60.map(({
              tabId: _v0
            }) => {
              let _v1 = _v57(_v0),
                _v2 = _v0 === _v577.ESourcesSubTab.BACKSTAGE ? _v66.translations.noSpeakersInTheBackstage : _v66.translations.noSpeakersOnStage;
              return (0, _v17.jsx)(_v443.TabPanel, {
                display: "flex",
                height: "100%",
                flexDirection: "column",
                flexGrow: 1,
                children: (0, _v17.jsx)(_v106.Box, {
                  id: (0, _v65.createLiveDomName)(_v0, "sources-list"),
                  sx: _v416.TOOL_TAB_ITEM_STYLE,
                  children: (0, _v17.jsx)(_v106.Box, {
                    id: (0, _v65.createLiveDomName)(_v0, "scroll"),
                    sx: {
                      ...(0, _v416.createTabListScrollStyle)(),
                      ..._v68
                    },
                    children: (0, _v17.jsxs)(_v106.Box, {
                      ref: _v26,
                      id: (0, _v96.createDomName)(_v0, "columns"),
                      className: (0, _v96.createDomName)(_v1, "columns"),
                      sx: (0, _v416.createTabListColumnStyle)(),
                      children: [_v67, 0 !== _v1.length || _v67 ? _v1.map(_v0 => {
                        let _v1 = (0, _v147.formatConnectionUidByType)(_v38.EAgoraConnectionType.GUEST, _v0.id),
                          _v2 = (0, _v147.formatConnectionUidByType)(_v38.EAgoraConnectionType.GUEST_SCREEN, _v0.id),
                          _v3 = _v0.id === _v32,
                          _v4 = (0, _v91.isGraphicAlreadyInScene)(_v1, _v10),
                          _v5 = (0, _v576.createGuestInviteLink)({
                            eventInvites: _v44,
                            guestId: _v0.id,
                            isVpaas: _v27,
                            sessionId: _v36,
                            sessionType: _v35
                          }),
                          _v6 = _v7.find(_v0 => _v0.uid === _v1) || null,
                          _v7 = _v6 ? _v42[_v6.uid] : null,
                          _v8 = _v449(_v1, _v10, _v11, _v20),
                          _v9 = _v0 === _v577.ESourcesSubTab.STREAM && _v56 ? _v136.NONE_LAYOUT_COLOR : _v8;
                        return (0, _v17.jsx)(_v469, {
                          canSendEmails: _v37,
                          guest: _v0,
                          inviteUrl: _v5,
                          isEditing: _v3,
                          onCreateGuest: _v48,
                          guestsEmailInvitesCreatedTimestamps: _v6,
                          isGuestsViewTab: !0,
                          onCancelEditing: _v54,
                          onUpdateGuest: _v51,
                          onSendInvite: _v49,
                          children: (0, _v17.jsxs)("div", {
                            children: [(0, _v17.jsx)(_v452, {
                              isInScene: _v4,
                              graphicId: _v1,
                              draggable: !0,
                              graphicType: _v88.EGraphicsDescriptorType.AGORA_STREAM,
                              children: (0, _v17.jsxs)(_v106.Box, {
                                position: "relative",
                                children: [(0, _v17.jsx)(_v598, {
                                  guest: _v0,
                                  audioMode: _v21,
                                  isInPreview: _v4,
                                  canToggleInScene: _v34,
                                  canEditGuests: _v39,
                                  descriptor: _v6,
                                  isEditing: _v3,
                                  isSharingScreen: !!(_v66?.video && _v66.uid === _v9),
                                  isAllowedToShareScreen: _v2 === _v9,
                                  isMuteToggleEnabled: !0,
                                  inviteUrl: _v5,
                                  fontFamily: _v24?.font,
                                  onRemoveGuest: _v65,
                                  onEditGuest: _v52,
                                  onSetGuestVolume: _v8.setMediaVolume,
                                  onSetGuestMuted: _v5.muteGuest,
                                  onSetGuestUnmuted: _v5.unmuteGuest,
                                  onToggleInScene: _v50
                                }), (0, _v17.jsx)(_v312.SceneItemOverlay, {
                                  color: _v9,
                                  size: "sm",
                                  width: 2
                                })]
                              })
                            }), (0, _v17.jsxs)(_v95.Flex, {
                              color: "text-primary",
                              maxWidth: (0, _v61.rem)(140),
                              overflow: "hidden",
                              whiteSpace: "nowrap",
                              padding: (0, _v61.rem)(4),
                              children: [(0, _v17.jsx)(_v574.LiveSourceStatusIndicator, {
                                isConnected: !!_v6,
                                networkQuality: _v7
                              }), (0, _v17.jsx)(_v214.BokehTooltip, {
                                placement: "top",
                                shouldWrapChildren: !1,
                                label: _v0.name,
                                children: (0, _v17.jsx)(_v109.Text, {
                                  className: (0, _v65.createLiveDomName)("guest-source-name"),
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
                          })
                        }, _v0.id);
                      }) : (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
                        isWithScroll: !0,
                        description: _v2,
                        icon: (0, _v17.jsx)(_v407.Users, {
                          boxSize: (0, _v61.rem)(48)
                        }),
                        control: null
                      })]
                    })
                  })
                })
              }, _v0);
            })
          }), _v30 || _v28 || _v32 ? (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
            id: (0, _v96.createDomName)(_v0, "loader"),
            className: (0, _v96.createDomName)(_v1, "loader"),
            withLoader: _v28,
            opacity: 0,
            zIndex: 30
          }) : null]
        })
      })]
    }) : (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v415.LeftPanelHeader, {
        label: _v66.translations.speakers,
        controls: _v69
      }), (0, _v17.jsx)(_v413.LeftPanelContent, {
        children: (0, _v17.jsx)(_v106.Box, {
          sx: (0, _v416.createTabListColumnStyle)(!1),
          justifyContent: "center",
          children: (0, _v84.range)(_v33.liveApplicationConfig.GUESTS.LIMIT).map(_v0 => (0, _v17.jsx)(_v106.Box, {
            className: (0, _v65.createLiveDomName)(_v0, "source-placeholder"),
            sx: (0, _v416.createTabListColumnHalfItemStyle)({
              withBorder: !1
            }),
            children: (0, _v17.jsx)(_v194.BokehSkeleton, {
              width: "100%",
              height: "100%",
              borderRadius: 0
            })
          }, _v0))
        })
      })]
    });
  }
  var _v601 = _v28,
    _v602 = _v0.i(0);
  function _v603(_v0) {
    return _v0.map(_v0 => {
      let {
          title: _v1,
          id: _v2,
          graphics: _v3,
          meta: _v4
        } = _v0,
        {
          templateGraphics: _v5,
          fullscreenList: _v6,
          agoraMediaList: _v7
        } = _v3.reduce((_v0, _v1) => {
          switch (_v1.type) {
            case _v88.EGraphicsDescriptorType.IMAGE:
              let _v0 = (0, _v90.createImageGraphicObject)({
                  id: (0, _v602.v4)(),
                  line: "",
                  subLine: "",
                  imageSrc: _v1.imageSrc
                }),
                _v1 = (0, _v91.createGraphicsDescriptor)({
                  graphicId: _v0.id,
                  graphicType: _v0.type,
                  ...(_v4?.layoutType ? {
                    layoutId: _v4?.layoutType,
                    layoutIndex: _v1.index
                  } : {})
                });
              _v0.templateGraphics[_v0.id] = _v1, _v0.fullscreenList[_v0.id] = _v0;
              break;
            case _v88.EGraphicsDescriptorType.AGORA_MEDIA:
              let {
                  videoId: _v2,
                  videoHash: _v3,
                  videoDuration: _v4,
                  videoThumb: _v5,
                  videoThumbFullSize: _v6
                } = _v1,
                _v7 = (0, _v90.createVideoGraphicObject)({
                  id: (0, _v602.v4)(),
                  videoThumbFullSize: _v6,
                  videoId: _v2,
                  videoHash: _v3,
                  videoThumb: _v5,
                  videoDuration: _v4
                }),
                _v8 = (0, _v91.createGraphicsDescriptor)({
                  graphicId: _v7.id,
                  graphicType: _v7.type
                });
              _v0.templateGraphics[_v7.id] = _v8, _v0.agoraMediaList[_v7.id] = _v7;
          }
          return _v0;
        }, {
          templateGraphics: {},
          fullscreenList: {},
          agoraMediaList: {}
        });
      return {
        newScene: (0, _v161.createScene)({
          id: _v2,
          name: _v1,
          graphics: _v5,
          meta: (0, _v161.createSceneMetadata)({
            layoutType: _v4?.layoutType
          })
        }),
        fullscreenList: _v6,
        agoraMediaList: _v7,
        templateId: _v2,
        templateTitle: _v1,
        template: _v0
      };
    });
  }
  async function _v604(_v0, _v1, _v2 = 1 / 0, _v3 = !1) {
    let _v4 = _v1?.reduce((_v0, _v1) => {
        let {
            template: {
              graphics: _v2
            },
            agoraMediaList: _v3,
            fullscreenList: _v4
          } = _v1,
          _v5 = Object.fromEntries(Object.entries(_v4).filter(([_v0, _v1]) => _v2.find(_v0 => _v0.imageSrc === _v1.imageSrc)?.index === void 0));
        return [..._v0, ...Object.values(_v3), ...Object.values(_v5)];
      }, []),
      _v5 = _v4?.reduce((_v0, _v1) => _v1.type === _v88.EGraphicsDescriptorType.IMAGE ? _v0.imagesSrc.includes(_v1.imageSrc) ? _v0 : {
        allGraphics: [..._v0.allGraphics, _v1],
        imagesSrc: [..._v0.imagesSrc, _v1.imageSrc]
      } : {
        allGraphics: [..._v0.allGraphics, _v1],
        imagesSrc: [..._v0.imagesSrc]
      }, {
        allGraphics: [],
        imagesSrc: []
      }),
      {
        data: _v6
      } = await _v0.queryDataAsync({
        type: _v151.ELiveGraphicsQuery.CREATE_TEMPLATE_GRAPHICS,
        data: _v5?.allGraphics
      }),
      _v7 = _v1?.map(_v0 => {
        let {
            template: {
              title: _v1,
              meta: _v2,
              graphics: _v3
            }
          } = _v0,
          _v4 = _v3.find(_v0 => _v0?.index === void 0),
          _v5 = _v6.find(_v0 => _v4?.type === _v88.EGraphicsDescriptorType.IMAGE ? _v0.imageSrc === _v4.imageSrc : _v0.videoId === _v4?.videoId);
        return {
          graphics: (0, _v91.wrapGraphicsDescriptorsToSceneGraphicsList)([(0, _v91.createGraphicsDescriptor)({
            graphicType: _v5?.type,
            graphicId: _v5?.id
          })]),
          name: _v1,
          meta: (0, _v161.createSceneMetadata)({
            ..._v2,
            isTemplateBased: !0,
            isScheduled: _v3,
            media: {
              ...(_v3 ? (0, _v161.createSceneMediaMetadata)({
                nextOnEOF: !0
              }) : _v2?.media),
              volume: .3
            }
          })
        };
      }),
      {
        data: _v8
      } = await _v0.queryDataAsync({
        type: _v151.ELiveGraphicsQuery.CREATE_SCENES_FROM_PARTIAL,
        data: {
          scenes: _v7,
          index: _v2
        }
      });
    return _v8;
  }
  var _v605 = _v0.i(0);
  let _v606 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/e7de23414cd53bc513ab6ebab71ae396" : "https://devi.vimeocdn.com/custom_asset/d7bc5c52ef1d34f0b899e11f8637f6f0",
    _v607 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/a6b4a54f408466d77432f2d91bf8fc3a" : "https://devi.vimeocdn.com/custom_asset/15eb4e8eac9204527a287f416f341dfc",
    _v608 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/44e9d56720a9a90e51ae295b3f956025" : "https://devi.vimeocdn.com/custom_asset/44e5ffd8d7f9610c89f99e853524253f",
    _v609 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/9ef4768e5b068c171d67cb9c668f29de" : "https://devi.vimeocdn.com/custom_asset/f885ce96f8f502d38eb08aa57cc57e61",
    _v610 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/c54f4532e86d45c67745b9147e36922f" : "https://devi.vimeocdn.com/custom_asset/1189043299b6fa42837fdaedd3a786cd",
    _v611 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/9c0b7b023ab89c59ea1e34037c84bf6c" : "https://devi.vimeocdn.com/custom_asset/0d100fcf8a424aa62a9034945f4971ec",
    _v612 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/c53b71b2cbad19142648a6dde4fd923a" : "https://devi.vimeocdn.com/custom_asset/4cc61c56f28b715d59b7d5cc3a96304a",
    _v613 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/d5866bf36f75f3c4a5f4838b95f98560" : "https://devi.vimeocdn.com/custom_asset/2b658de48ef8a648ba6dc5d3ba247670",
    _v614 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/cecc407513623b2b9746ca3b95b87db9" : "https://devi.vimeocdn.com/custom_asset/90dde2acdbfc97d330d66e5d542505c6",
    _v615 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/974ccad471724b02906c707911bb434b" : "https://devi.vimeocdn.com/custom_asset/952a29c60fd842d99eb58a49d024bce2",
    _v616 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/e4816eb762263f68bd139d6239ef1b10" : "https://devi.vimeocdn.com/custom_asset/42888062aa38ae98fda12c11877c9e20",
    _v617 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/a4e0654ad033dc9c81d59a45978a8b06" : "https://devi.vimeocdn.com/custom_asset/2cd712eabaf21b4e2d1cb5a8852b4af5",
    _v618 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/d80a9f77256e626647a1cb630767b126" : "https://devi.vimeocdn.com/custom_asset/b2d82cba5a7eccc2e21001e52cc845e0",
    _v619 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/336ba55b0c4e77cbab51fe15a8c990f0" : "https://devi.vimeocdn.com/custom_asset/97ab1cdfa485250df362a42cc234a019",
    _v620 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/1cbe9d2b3306b0a24ff9598bc4e576a7" : "https://devi.vimeocdn.com/custom_asset/6488f7a8131716317b189463c86a1142",
    _v621 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/495a0b87f616ef40cc2f95498a5d4a5d" : "https://devi.vimeocdn.com/custom_asset/fc5a966aa526c5cdb533fec01ad38ba7",
    _v622 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/03c19f48353dfce4e4bfe2047695d6a7" : "https://devi.vimeocdn.com/custom_asset/31528f24b6639aa5920e8efe9b026057",
    _v623 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/fa5ef1f033fac1fd5dfdef52cc938a9d" : "https://devi.vimeocdn.com/custom_asset/7fca1746143422546cd8758bfa258fac",
    _v624 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/e965fd3318df8234e8c19cb24d85b1e5" : "https://devi.vimeocdn.com/custom_asset/b3da4d2f5e6a0b2e15930e707cdaa1dc",
    _v625 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/c6227a2e91a8d9ca8ec759cd66e91e00" : "https://devi.vimeocdn.com/custom_asset/5c2a11502d040bc15ca6dcadd202b8fe",
    _v626 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/7a52b0f185bcaeccd09568413c4f27e7" : "https://devi.vimeocdn.com/custom_asset/7cb38c46a94fae0044b689a492e8c0a1",
    _v627 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/12ee1b7a882c3221a52f8d6518ca1c09" : "https://devi.vimeocdn.com/custom_asset/11bf0a85b9471e9290aaa35026090c7c",
    _v628 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/95cfe775d6230397ae006b9e98f30499" : "https://devi.vimeocdn.com/custom_asset/469a227b9e5c8a22fdfa590c8fe66e2a",
    _v629 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/9fff1c7863eeb21fb0c133fe4eea281c" : "https://devi.vimeocdn.com/custom_asset/5d43a44f0ea33e96dc78d3d4af1065c1",
    _v630 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/30805cc137279477e62c5f4197e4f41b" : "https://devi.vimeocdn.com/custom_asset/767743969f09a0ee548794254d0d7f42",
    _v631 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/45b4819e272911b0813e9264ee4f2eea" : "https://devi.vimeocdn.com/custom_asset/01ca1e9aec8cee02fef4917194f8fe03",
    _v632 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/4dc3297716ed13573ed8f08f78723dcd" : "https://devi.vimeocdn.com/custom_asset/4478e55a3d7f034078ed3fc702029d43",
    _v633 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/fd2be473397a387d13b295cc4b4f5075" : "https://devi.vimeocdn.com/custom_asset/e3adc44860b63637e7145c1fe134a9ba",
    _v634 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/16641e8a88b83592008e32152e22cbdb" : "https://devi.vimeocdn.com/custom_asset/f892597a134f6e68c389535ebf7a2902",
    _v635 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/da92345915701b90821d713333db954b" : "https://devi.vimeocdn.com/custom_asset/06e6306dc1a6feb84376168a1d74aba3",
    _v636 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/01d188fb0ebaf7c1bdcca8f6e8c67e6b" : "https://devi.vimeocdn.com/custom_asset/f4b7a2593dee9f85f6575ed66d7c6005",
    _v637 = _v605.environmentConfig.IS_COM ? "https://i.vimeocdn.com/custom_asset/762df94a86e32198600ac034d62ff3b2" : "https://devi.vimeocdn.com/custom_asset/38235a30379d01a15d1bdf944f90701c",
    _v638 = {
      title: "Color blur light",
      id: "RoundBoxLight",
      graphics: [{
        videoId: 0,
        videoHash: "c4e575538c",
        videoDuration: 19,
        videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1743001664-dc4b0f812ea8cfd7de0d345042aaf10f9d618415edbb18960ff12a38b7d4ca8c-d", 360, 16 / 9, !0),
        videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1743001664-dc4b0f812ea8cfd7de0d345042aaf10f9d618415edbb18960ff12a38b7d4ca8c-d", 0, 16 / 9, !0),
        type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
      }],
      sceneTemplates: [{
        title: "Starting soon",
        id: "sceneTemp1",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "cc2c16fe67",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1691533027-ffcbbdb229a9de2264acbb5c0d2c91d736378fb4a78d0bbc3ccc5f1581e9d9f9-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1691533027-ffcbbdb229a9de2264acbb5c0d2c91d736378fb4a78d0bbc3ccc5f1581e9d9f9-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Countdown",
        id: "sceneTemp2",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            nextOnEOF: !0
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "a75cea3a5c",
          videoDuration: 61,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1687826935-4cb5e0211a47dbe861a9564fc4d90e8ff630501a7dba0103aa78cbbce94c0e3d-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1687826935-4cb5e0211a47dbe861a9564fc4d90e8ff630501a7dba0103aa78cbbce94c0e3d-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp3",
        meta: {
          layoutType: "bigScreen"
        },
        graphics: [{
          imageSrc: _v606,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v622,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp4",
        meta: {
          layoutType: "oneAround"
        },
        graphics: [{
          imageSrc: _v606,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v634,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v623,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Break",
        id: "sceneTemp5",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "2e10a369de",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693093269-8a0781cf1446b5572a69c66f04ed6bbf361f4f3d57d0ce1a1632753d3d76444a-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693093269-8a0781cf1446b5572a69c66f04ed6bbf361f4f3d57d0ce1a1632753d3d76444a-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp6",
        meta: {
          layoutType: "bigTwo"
        },
        graphics: [{
          imageSrc: _v606,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v622,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v627,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Q&A intro",
        id: "sceneTemp7",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "96bf9f6555",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1687826611-295635c8199afe84a088a09b27830aeb74aeaa66b536d8f0cd5daa0defbed434-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1687826611-295635c8199afe84a088a09b27830aeb74aeaa66b536d8f0cd5daa0defbed434-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp8",
        meta: {
          layoutType: "bigThree"
        },
        graphics: [{
          imageSrc: _v606,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v622,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v627,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }, {
          imageSrc: _v623,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 2
        }]
      }, {
        title: "Thank you",
        id: "sceneTemp9",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "0b4a2a61c8",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1687744612-1ebc64e14bd69a123ce90bfef7cf037c1c74cc56a058e0062d786e61dd344b62-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1687744612-1ebc64e14bd69a123ce90bfef7cf037c1c74cc56a058e0062d786e61dd344b62-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }]
    },
    _v639 = {
      title: "Color blur dark",
      id: "RoundBoxDark",
      graphics: [{
        videoId: 0,
        videoHash: "7aa587d909",
        videoDuration: 21,
        videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1743002548-df0ef38e323d1f34a4faafb1e6cace12810112c2e466c149797d5f113cc3766d-d", 360, 16 / 9, !0),
        videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1743002548-df0ef38e323d1f34a4faafb1e6cace12810112c2e466c149797d5f113cc3766d-d", 0, 16 / 9, !0),
        type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
      }],
      sceneTemplates: [{
        title: "Starting soon",
        id: "sceneTemp1",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "5facca6810",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693249910-b1c291ff9cd90424aba2e3d963f973e4941f22cf7aabdc2ba07fae477887224b-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693249910-b1c291ff9cd90424aba2e3d963f973e4941f22cf7aabdc2ba07fae477887224b-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Countdown",
        id: "sceneTemp2",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            nextOnEOF: !0
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "3b138a7533",
          videoDuration: 61,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693172948-58e2b8263a7f37a9d31946e2d5989c3ef754f76749adf2ccd4829af65b6baef9-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693172948-58e2b8263a7f37a9d31946e2d5989c3ef754f76749adf2ccd4829af65b6baef9-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp3",
        meta: {
          layoutType: "bigScreen"
        },
        graphics: [{
          imageSrc: _v607,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v628,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp4",
        meta: {
          layoutType: "oneAround"
        },
        graphics: [{
          imageSrc: _v607,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v635,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v629,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Break",
        id: "sceneTemp5",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "82e3d86548",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693168418-7cf90d98924381c41c1ef99c3ba2bf31f291b52e71edc4b9b45f5beba0638fba-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693168418-7cf90d98924381c41c1ef99c3ba2bf31f291b52e71edc4b9b45f5beba0638fba-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp6",
        meta: {
          layoutType: "bigTwo"
        },
        graphics: [{
          imageSrc: _v607,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v624,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v628,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Q&A intro",
        id: "sceneTemp7",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "2f37a20b20",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693173450-8bd3554c9a7b9bbde72bb90e28128d9a9ca69f7ebd1727f08ada7f2cee20bb31-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693173450-8bd3554c9a7b9bbde72bb90e28128d9a9ca69f7ebd1727f08ada7f2cee20bb31-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp8",
        meta: {
          layoutType: "bigThree"
        },
        graphics: [{
          imageSrc: _v607,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v624,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v628,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }, {
          imageSrc: _v629,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 2
        }]
      }, {
        title: "Thank you",
        id: "sceneTemp9",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "2fb0cac5c5",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693168736-287925ad1d30411af3a3a6545343f3ae19f2fd3dc997813b4328505f8614d6d7-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1693168736-287925ad1d30411af3a3a6545343f3ae19f2fd3dc997813b4328505f8614d6d7-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }]
    },
    _v640 = {
      title: "Sliding transitions",
      id: "Transitions",
      graphics: [{
        videoId: 0,
        videoHash: "4d2dab77a3",
        videoDuration: 14,
        videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348552-f6ecb8b94819f6bb7409c7849d0440f924e8e7b02784de98cc1c731c65ae1973-d", 360, 16 / 9, !0),
        videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348552-f6ecb8b94819f6bb7409c7849d0440f924e8e7b02784de98cc1c731c65ae1973-d", 0, 16 / 9, !0),
        type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
      }],
      sceneTemplates: [{
        title: "Starting soon",
        id: "sceneTemp1",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "a7d6107696",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348751-60dffda1e7a39cfe6dc79a10c65eb98145644595ecd15ce7ad5aef708e00147d-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348751-60dffda1e7a39cfe6dc79a10c65eb98145644595ecd15ce7ad5aef708e00147d-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Countdown",
        id: "sceneTemp2",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            nextOnEOF: !0
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "5e80cebc58",
          videoDuration: 61,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348948-accd28a722a01e4fbd7b135297a6e938034738a43c5298bbe4441addd418a0c4-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348948-accd28a722a01e4fbd7b135297a6e938034738a43c5298bbe4441addd418a0c4-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp3",
        meta: {
          layoutType: "bigScreen"
        },
        graphics: [{
          imageSrc: _v608,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v625,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp4",
        meta: {
          layoutType: "oneAround"
        },
        graphics: [{
          imageSrc: _v612,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v634,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v630,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Break",
        id: "sceneTemp5",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "3f59ac6172",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976349208-9bd7b139b521310ead49e00b3c9ff9592a743926f0847ad6b3a30defe7ea76d8-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976349208-9bd7b139b521310ead49e00b3c9ff9592a743926f0847ad6b3a30defe7ea76d8-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp6",
        meta: {
          layoutType: "bigTwo"
        },
        graphics: [{
          imageSrc: _v609,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v631,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v625,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Q&A intro",
        id: "sceneTemp7",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "24ef64fe09",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976349541-279b62c9d0329328a373f4c4a728ded3db9af82bac13410eb3f22a967e9b4081-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976349541-279b62c9d0329328a373f4c4a728ded3db9af82bac13410eb3f22a967e9b4081-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp8",
        meta: {
          layoutType: "bigThree"
        },
        graphics: [{
          imageSrc: _v611,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v631,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v625,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }, {
          imageSrc: _v630,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 2
        }]
      }, {
        title: "Thank you",
        id: "sceneTemp9",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "220b2fc70f",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976349763-12355d64efac5fe4b55d96556caea2969a2a18b2686fe0d81d2f63c14b88ee2a-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976349763-12355d64efac5fe4b55d96556caea2969a2a18b2686fe0d81d2f63c14b88ee2a-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }]
    },
    _v641 = {
      title: "Multicolor text",
      id: "Duplication",
      graphics: [{
        videoId: 0,
        videoHash: "0f312bb3d7",
        videoDuration: 13,
        videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346727-8889c44d060f04f68caaf1504482d089bca37eda067ecf8571498fd7d04c8a33-d", 360, 16 / 9, !0),
        videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346727-8889c44d060f04f68caaf1504482d089bca37eda067ecf8571498fd7d04c8a33-d", 0, 16 / 9, !0),
        type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
      }],
      sceneTemplates: [{
        title: "Starting soon",
        id: "sceneTemp1",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "155fa755f6",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976339373-ad4438f493652b620c1f123ed60833f61aa28f683472d441fde8dca6596a0112-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976339373-ad4438f493652b620c1f123ed60833f61aa28f683472d441fde8dca6596a0112-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Countdown",
        id: "sceneTemp2",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            nextOnEOF: !0
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "f145d63665",
          videoDuration: 61,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976339519-61890807f8b964600813a5b4f77445231b6878fa3a79e7dd5e269acc719bafa0-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976339519-61890807f8b964600813a5b4f77445231b6878fa3a79e7dd5e269acc719bafa0-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp3",
        meta: {
          layoutType: "bigScreen"
        },
        graphics: [{
          imageSrc: _v619,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v628,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp4",
        meta: {
          layoutType: "oneAround"
        },
        graphics: [{
          imageSrc: _v619,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v635,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v629,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Break",
        id: "sceneTemp5",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "7f9c164deb",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976339818-8518f1987161422229b3c451e712550e0b6a5e28ad8deba59901b0ea532cb9f9-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976339818-8518f1987161422229b3c451e712550e0b6a5e28ad8deba59901b0ea532cb9f9-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp6",
        meta: {
          layoutType: "bigTwo"
        },
        graphics: [{
          imageSrc: _v619,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v624,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v628,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }]
      }, {
        title: "Q&A intro",
        id: "sceneTemp7",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "eb1203b635",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976340759-bf10c690fa1db0c63a82c2e8f3887f270580bf0772e752a9b5212f7aef427c1e-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976340759-bf10c690fa1db0c63a82c2e8f3887f270580bf0772e752a9b5212f7aef427c1e-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }, {
        title: "Scene layout",
        id: "sceneTemp8",
        meta: {
          layoutType: "bigThree"
        },
        graphics: [{
          imageSrc: _v619,
          type: _v88.EGraphicsDescriptorType.IMAGE
        }, {
          imageSrc: _v624,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 0
        }, {
          imageSrc: _v628,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 1
        }, {
          imageSrc: _v629,
          type: _v88.EGraphicsDescriptorType.IMAGE,
          index: 2
        }]
      }, {
        title: "Thank you",
        id: "sceneTemp9",
        meta: {
          media: {
            status: _v88.EMediaStatus.PAUSE,
            loop: -1
          }
        },
        graphics: [{
          videoId: 0,
          videoHash: "c6e3105e27",
          videoDuration: 120,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341013-8608bc8c05f022fe5b3bc6170a9894f3c7813bc785f249a8424973b4a24a12aa-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341013-8608bc8c05f022fe5b3bc6170a9894f3c7813bc785f249a8424973b4a24a12aa-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }]
      }]
    },
    _v642 = {
      roundBoxDark: _v639,
      roundBoxLight: _v638,
      minimal: {
        title: "Clean lines",
        id: "Minimal",
        graphics: [{
          videoId: 0,
          videoHash: "368c0d70fc",
          videoDuration: 37,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341352-92eacec315710b4747c107f059dce52fb9407db18afd8ffc2d068318e2b6fac3-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341352-92eacec315710b4747c107f059dce52fb9407db18afd8ffc2d068318e2b6fac3-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }],
        sceneTemplates: [{
          title: "Starting soon",
          id: "sceneTemp1",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "0acc73d3bf",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341583-8422404ff88c0f328104eaed22224d32f29f3f6c24d7435a73ceed434e5e8d85-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341583-8422404ff88c0f328104eaed22224d32f29f3f6c24d7435a73ceed434e5e8d85-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Countdown",
          id: "sceneTemp2",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "59bc5d6cec",
            videoDuration: 64,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341913-fb5608f6204dd4060eb74a8df07f7cde651e90bc13ecd2470e63aec3a275b205-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976341913-fb5608f6204dd4060eb74a8df07f7cde651e90bc13ecd2470e63aec3a275b205-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp3",
          meta: {
            layoutType: "bigScreen"
          },
          graphics: [{
            imageSrc: _v619,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp4",
          meta: {
            layoutType: "oneAround"
          },
          graphics: [{
            imageSrc: _v619,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v636,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v630,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Break",
          id: "sceneTemp5",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "541404fb2b",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976342124-71ed46e72218c70200aa8349cbe861560b3fab0efd54ed5d844b541560aa373c-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976342124-71ed46e72218c70200aa8349cbe861560b3fab0efd54ed5d844b541560aa373c-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp6",
          meta: {
            layoutType: "bigTwo"
          },
          graphics: [{
            imageSrc: _v619,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v631,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Q&A intro",
          id: "sceneTemp7",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "0c0b96b2d5",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976342398-00acd76a13372fa9ce7c05ecaa53d489f6c4d0aefde3ace8267bb1d2a7c3c3d6-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976342398-00acd76a13372fa9ce7c05ecaa53d489f6c4d0aefde3ace8267bb1d2a7c3c3d6-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp8",
          meta: {
            layoutType: "bigThree"
          },
          graphics: [{
            imageSrc: _v619,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v631,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }, {
            imageSrc: _v630,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 2
          }]
        }, {
          title: "Thank you",
          id: "sceneTemp9",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "02a28d7780",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976342680-00ea20b8f9caf5596b81add2c305d35e20c1d4a6f2fec17780d85dcf940b7b57-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976342680-00ea20b8f9caf5596b81add2c305d35e20c1d4a6f2fec17780d85dcf940b7b57-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }]
      },
      duplication: _v641,
      transitions: _v640,
      geometric: {
        title: "Geometry in motion",
        id: "Geometric",
        graphics: [{
          videoId: 0,
          videoHash: "d499aa2e8b",
          videoDuration: 12,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1743000899-814b4b25468231a03c7ceca49fd6430d793b7b76b99efd76c99af2b1cee67473-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1743000899-814b4b25468231a03c7ceca49fd6430d793b7b76b99efd76c99af2b1cee67473-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }],
        sceneTemplates: [{
          title: "Starting soon",
          id: "sceneTemp1",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "596a8be730",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692623879-524f49a92466af081f14d3e75b711eda0e60e071e5867a01984a2b4052b89be7-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692623879-524f49a92466af081f14d3e75b711eda0e60e071e5867a01984a2b4052b89be7-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Countdown",
          id: "sceneTemp2",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "79d102a119",
            videoDuration: 63,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692624931-2010843b2e51da7cc3820f36039b4585bb1a1dfa98aa0c247bd545a66cd884c6-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692624931-2010843b2e51da7cc3820f36039b4585bb1a1dfa98aa0c247bd545a66cd884c6-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp3",
          meta: {
            layoutType: "bigScreen"
          },
          graphics: [{
            imageSrc: _v620,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp4",
          meta: {
            layoutType: "oneAround"
          },
          graphics: [{
            imageSrc: _v620,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v636,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v630,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Break",
          id: "sceneTemp5",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "1fd6fabb6b",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692623996-6727d306cb15ca76351f0cd3814f482842749257c6736241d89dc997fb41e108-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692623996-6727d306cb15ca76351f0cd3814f482842749257c6736241d89dc997fb41e108-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp6",
          meta: {
            layoutType: "bigTwo"
          },
          graphics: [{
            imageSrc: _v620,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v631,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Q&A intro",
          id: "sceneTemp7",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "c7979f828c",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692626530-1627a03e441f7c7343126e4f2cf5f6e5adfe2cfefb904884c848dc5dfbf2b818-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692626530-1627a03e441f7c7343126e4f2cf5f6e5adfe2cfefb904884c848dc5dfbf2b818-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp8",
          meta: {
            layoutType: "bigThree"
          },
          graphics: [{
            imageSrc: _v620,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v631,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }, {
            imageSrc: _v630,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 2
          }]
        }, {
          title: "Thank you",
          id: "sceneTemp9",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "9339642496",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692624211-60370f9bdd5b94e20cbe9e8068b108e035fd213430749de63430c5fac574a2ad-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1692624211-60370f9bdd5b94e20cbe9e8068b108e035fd213430749de63430c5fac574a2ad-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }]
      },
      colorBlocks: {
        title: "Color blocks",
        id: "ColorBlocks",
        graphics: [{
          videoId: 0,
          videoHash: "b16b5b1127",
          videoDuration: 14,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346847-65ad8b572c8517a27196ff841beeddef0cae884c0e50920762338da02cf3b31f-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346847-65ad8b572c8517a27196ff841beeddef0cae884c0e50920762338da02cf3b31f-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }],
        sceneTemplates: [{
          title: "Starting soon",
          id: "sceneTemp1",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "aa1d63661c",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976335969-78859faeba61a2c5b07537da4b40df8ca965f69c94f4b37f00412be70a7effd5-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976335969-78859faeba61a2c5b07537da4b40df8ca965f69c94f4b37f00412be70a7effd5-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Countdown",
          id: "sceneTemp2",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "00df7ad142",
            videoDuration: 61,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976336301-8054ee2ea4bc8f3c82407268eb482134361501d62f32dba63b1cd6821d4afc06-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976336301-8054ee2ea4bc8f3c82407268eb482134361501d62f32dba63b1cd6821d4afc06-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp3",
          meta: {
            layoutType: "bigScreen"
          },
          graphics: [{
            imageSrc: _v614,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v628,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp4",
          meta: {
            layoutType: "oneAround"
          },
          graphics: [{
            imageSrc: _v617,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v634,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v629,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Break",
          id: "sceneTemp5",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "f66c9b4c8d",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976336915-0d9b69cf1eb6e34b2e8d4075090c50cc4d58b139f95803b29e6b20c4b7f7aa80-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976336915-0d9b69cf1eb6e34b2e8d4075090c50cc4d58b139f95803b29e6b20c4b7f7aa80-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp6",
          meta: {
            layoutType: "bigTwo"
          },
          graphics: [{
            imageSrc: _v611,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v624,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v628,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Q&A intro",
          id: "sceneTemp7",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "41ea55386c",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976337136-87e63a368c58e60dffc553169e0bf2d642f09d8bb611fadc4619400adc94d319-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976337136-87e63a368c58e60dffc553169e0bf2d642f09d8bb611fadc4619400adc94d319-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp8",
          meta: {
            layoutType: "bigThree"
          },
          graphics: [{
            imageSrc: _v610,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v624,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v628,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }, {
            imageSrc: _v629,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 2
          }]
        }, {
          title: "Thank you",
          id: "sceneTemp9",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "f894a946be",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976337302-f5e704997a92a5d6f10f415977dcff9aced24fa1bf312658899c834ba0d10aae-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976337302-f5e704997a92a5d6f10f415977dcff9aced24fa1bf312658899c834ba0d10aae-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }]
      },
      ECHOES: {
        title: "Bright text bounce",
        id: "Echoes",
        graphics: [{
          videoId: 0,
          videoHash: "c913fd9a18",
          videoDuration: 15,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346441-a3892e8b45a53cbdfc5e0941aba471a2be3303331ac934c199f90a41a3094512-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346441-a3892e8b45a53cbdfc5e0941aba471a2be3303331ac934c199f90a41a3094512-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }],
        sceneTemplates: [{
          title: "Starting soon",
          id: "sceneTemp1",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "25d0ded4f0",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976344084-79037be5a7783c70bf6946d2b3d02e04ffd7dfffc19b8205967524048944f07a-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976344084-79037be5a7783c70bf6946d2b3d02e04ffd7dfffc19b8205967524048944f07a-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Countdown",
          id: "sceneTemp2",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "f3323ecca5",
            videoDuration: 62,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976344567-3a93ceeba1c295411820431ce10637c923445afe9881bcdc41ef7c8faf69b3fa-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976344567-3a93ceeba1c295411820431ce10637c923445afe9881bcdc41ef7c8faf69b3fa-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp3",
          meta: {
            layoutType: "bigScreen"
          },
          graphics: [{
            imageSrc: _v613,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v632,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp4",
          meta: {
            layoutType: "oneAround"
          },
          graphics: [{
            imageSrc: _v613,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v637,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v633,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Break",
          id: "sceneTemp5",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "0415a8bca3",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976344771-f4f05869065da8d101f2411319df4b8ee821bba9b922112095ca05640405b859-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976344771-f4f05869065da8d101f2411319df4b8ee821bba9b922112095ca05640405b859-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp6",
          meta: {
            layoutType: "bigTwo"
          },
          graphics: [{
            imageSrc: _v615,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v632,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v633,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Q&A intro",
          id: "sceneTemp7",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "925fdbfdda",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976345014-6497cbbdb6cd2c3576c74f6aa7b70975454ab6981fc9b6de56ef40e5f88c7922-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976345014-6497cbbdb6cd2c3576c74f6aa7b70975454ab6981fc9b6de56ef40e5f88c7922-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp8",
          meta: {
            layoutType: "bigThree"
          },
          graphics: [{
            imageSrc: _v618,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v632,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v633,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }, {
            imageSrc: _v626,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 2
          }]
        }, {
          title: "Thank you",
          id: "sceneTemp9",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "c141e3c08b",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976345195-79d47e3019bde029e2f8e39c4ee0a7875f46d35e81d7c8ffdb013928c24cfe09-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976345195-79d47e3019bde029e2f8e39c4ee0a7875f46d35e81d7c8ffdb013928c24cfe09-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }]
      },
      outline: {
        title: "Forward motion",
        id: "Outline",
        graphics: [{
          videoId: 0,
          videoHash: "5c3567b932",
          videoDuration: 18,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346045-c94be6d37281cd60f7b30e440ede33e84165f0d174d87aeb9ecc9d6761d8dedd-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976346045-c94be6d37281cd60f7b30e440ede33e84165f0d174d87aeb9ecc9d6761d8dedd-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }],
        sceneTemplates: [{
          title: "Starting soon",
          id: "sceneTemp1",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "492ed4f192",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347163-830d61698cc6db7c958b224821702612b0daabfb57015796c35a344f94008e5e-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347163-830d61698cc6db7c958b224821702612b0daabfb57015796c35a344f94008e5e-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Countdown",
          id: "sceneTemp2",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "b738acedf1",
            videoDuration: 63,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347482-3bb1c708d7a90994241cb5b99ec4816498e222f8023257cc73d1b3c661a8c251-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347482-3bb1c708d7a90994241cb5b99ec4816498e222f8023257cc73d1b3c661a8c251-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp3",
          meta: {
            layoutType: "bigScreen"
          },
          graphics: [{
            imageSrc: _v616,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v622,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp4",
          meta: {
            layoutType: "oneAround"
          },
          graphics: [{
            imageSrc: _v616,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v635,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v623,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Break",
          id: "sceneTemp5",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "76e72ceec1",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347698-86c4a69ea810f3a8da6e199e1354e9cf70c2d16a5c3abc9aded11c53849db4b0-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347698-86c4a69ea810f3a8da6e199e1354e9cf70c2d16a5c3abc9aded11c53849db4b0-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp6",
          meta: {
            layoutType: "bigTwo"
          },
          graphics: [{
            imageSrc: _v616,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v622,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v627,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Q&A intro",
          id: "sceneTemp7",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "eb39a7e9d0",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347923-3354c6e938429ecb0a9cad21bb46ce6b9098899cdb8f0ce292f91c9442792a97-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976347923-3354c6e938429ecb0a9cad21bb46ce6b9098899cdb8f0ce292f91c9442792a97-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp8",
          meta: {
            layoutType: "bigThree"
          },
          graphics: [{
            imageSrc: _v616,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v622,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v627,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }, {
            imageSrc: _v623,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 2
          }]
        }, {
          title: "Thank you",
          id: "sceneTemp9",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "7a0517f0cf",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348156-557d31457acf8aa1c3c821841ce7400261fef77a4cc486c50c947f5d8a47b241-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1976348156-557d31457acf8aa1c3c821841ce7400261fef77a4cc486c50c947f5d8a47b241-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }]
      },
      monochromeEnergy: {
        title: "Monochrome energy",
        id: "MonochromeEnergy",
        graphics: [{
          videoId: 0,
          videoHash: "1683757f64",
          videoDuration: 19,
          videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742998120-dce20621a602c0d452de17936452a9154f82009ca57d4ba52020036f3e99c197-d", 360, 16 / 9, !0),
          videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742998120-dce20621a602c0d452de17936452a9154f82009ca57d4ba52020036f3e99c197-d", 0, 16 / 9, !0),
          type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
        }],
        sceneTemplates: [{
          title: "Starting soon",
          id: "sceneTemp1",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "3be698fda4",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742924768-98a30ad4253176599ed85d1939eacc1edc4fb70525b7a5d107b9b1f52844ff9c-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742924768-98a30ad4253176599ed85d1939eacc1edc4fb70525b7a5d107b9b1f52844ff9c-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Countdown",
          id: "sceneTemp2",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              nextOnEOF: !0
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "d12998573f",
            videoDuration: 65,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742989789-92ccda084fd5f615bc01fe7f4cebdff72daa9410ef0e183d0900a264c9519213-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742989789-92ccda084fd5f615bc01fe7f4cebdff72daa9410ef0e183d0900a264c9519213-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp3",
          meta: {
            layoutType: "bigScreen"
          },
          graphics: [{
            imageSrc: _v621,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp4",
          meta: {
            layoutType: "oneAround"
          },
          graphics: [{
            imageSrc: _v621,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v634,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v630,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Break",
          id: "sceneTemp5",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "c93a80e060",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742924598-8ff0a96d53b4a8c69855f151ffc3e2454c71b0b85287415309f66178988d91d2-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742924598-8ff0a96d53b4a8c69855f151ffc3e2454c71b0b85287415309f66178988d91d2-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp6",
          meta: {
            layoutType: "bigTwo"
          },
          graphics: [{
            imageSrc: _v621,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v631,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }]
        }, {
          title: "Q&A intro",
          id: "sceneTemp7",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "6ca4ce8f89",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742993690-c20baef1f2cbd267009b6a77283fbb0e5584a1750b821555ae5abc5e50801747-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742993690-c20baef1f2cbd267009b6a77283fbb0e5584a1750b821555ae5abc5e50801747-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }, {
          title: "Scene layout",
          id: "sceneTemp8",
          meta: {
            layoutType: "bigThree"
          },
          graphics: [{
            imageSrc: _v621,
            type: _v88.EGraphicsDescriptorType.IMAGE
          }, {
            imageSrc: _v630,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 0
          }, {
            imageSrc: _v631,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 1
          }, {
            imageSrc: _v625,
            type: _v88.EGraphicsDescriptorType.IMAGE,
            index: 2
          }]
        }, {
          title: "Thank you",
          id: "sceneTemp9",
          meta: {
            media: {
              status: _v88.EMediaStatus.PAUSE,
              loop: -1
            }
          },
          graphics: [{
            videoId: 0,
            videoHash: "4609184fee",
            videoDuration: 120,
            videoThumb: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742983307-24df8725822ce2ac306b231ef140807afe283198350e039c39db98c2a10a2f5a-d", 360, 16 / 9, !0),
            videoThumbFullSize: _v353.vimeoConfig.VIDEOTHUMB.URL_AT_RATIO_FOR_ID("1742983307-24df8725822ce2ac306b231ef140807afe283198350e039c39db98c2a10a2f5a-d", 0, 16 / 9, !0),
            type: _v88.EGraphicsDescriptorType.AGORA_MEDIA
          }]
        }]
      }
    };
  class _v643 extends _v601.ContextManager {
    context = {
      templatesActions: (0, _v601.createActions)({
        selectedActiveTemplateObject: _v0 => this.selectedActiveTemplateObject(_v0),
        createScenesFromTemplates: (_v0, _v1, _v2) => this.createScenesFromTemplates(_v0, _v1, _v2)
      }),
      previewTemplateObject: null,
      activeTemplateObject: null,
      activeTemplateConfig: null
    };
    async onProvisionStarted() {
      this.createTemplatesPreviewObjects(Object.values(_v642));
    }
    async createTemplatesPreviewObjects(_v0) {
      return (0, _v86.withLiveErrorTracking)(() => {
        let _v0;
        return _v0 = _v603(_v0), void this.setContext({
          previewTemplateObject: _v0
        });
      }, {
        method: "createTemplatesPreviewObjects",
        category: _v85.ELiveErrorCategory.GRAPHICS
      });
    }
    async selectedActiveTemplateObject(_v0) {
      return (0, _v86.withLiveErrorTracking)(() => function (_v0, _v1) {
        if (!_v1?.sceneTemplates) return _v0.setContext({
          activeTemplateObject: null,
          activeTemplateConfig: null
        });
        _v0.setContext({
          activeTemplateObject: _v603(_v1.sceneTemplates),
          activeTemplateConfig: _v1
        });
      }(this, _v0), {
        method: "selectedActiveTemplateObject",
        category: _v85.ELiveErrorCategory.GRAPHICS
      });
    }
    async createScenesFromTemplates(_v0, _v1, _v2) {
      return (0, _v86.withLiveErrorTracking)(() => _v604(this, _v0, _v1, _v2), {
        method: "createScenesFromTemplates",
        category: _v85.ELiveErrorCategory.GRAPHICS
      });
    }
  }
  let _v644 = (0, _v243.createLiveSchemaEventFactory)("vimeo.simple_live_scene_templates", 5, () => ({
    ..._v242.liveTrackingConfig.BIG_PICTURE_LIVE_SCHEMA_BASE,
    isSimulive: _v242.liveTrackingConfig.BIG_PICTURE_SCHEME_ADDITIONAL.isSimulive,
    videoTitle: null,
    collectionName: null
  }));
  function _v645(_v0) {
    return _v644("add_template_to_timeline", {
      collectionName: _v0
    });
  }
  function _v646(_v0) {
    return _v644("add_all_scenes_to_timeline", {
      collectionName: _v0
    });
  }
  var _v647 = _v0.i(0);
  function _v648({
    id: _v0 = (0, _v65.createLiveDomName)("opened-template-overlay"),
    className: _v1,
    isVideo: _v2,
    showControls: _v3,
    onPlayLocallyVideoClicked: _v4 = _v64.CallablePlaceholder,
    onAddButtonClick: _v5 = _v64.CallablePlaceholder,
    isDisabled: _v6 = !1,
    isHovering: _v7
  }) {
    let _v8 = (0, _v21.useRef)(null),
      _v9 = (0, _v17.jsx)(_v214.BokehTooltip, {
        placement: "top",
        label: _v66.translations.addAsNewScene,
        shouldWrapChildren: !1,
        children: (0, _v17.jsx)(_v213.IconButton, {
          "aria-label": _v66.translations.addAsNewScene,
          size: "xs",
          variant: "blur",
          position: "relative",
          isDisabled: _v6,
          icon: (0, _v17.jsx)(_v369.Plus, {}),
          onClick: _v5
        })
      }),
      _v10 = (0, _v17.jsx)(_v213.IconButton, {
        "aria-label": _v66.translations.show,
        size: "xs",
        variant: "blur",
        position: "relative",
        icon: (0, _v17.jsx)(_v647.ExpandArrowsAlt, {}),
        onClick: _v0 => {
          _v0.stopPropagation(), _v4(_v8?.current?.parentElement?.parentElement || null);
        }
      });
    return (0, _v17.jsx)(_v95.Flex, {
      ref: _v8,
      id: _v0,
      className: _v1,
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      borderRadius: (0, _v61.rem)(8),
      border: "2px blue.500 solid",
      justifyContent: "flex-end",
      alignItems: "flex-start",
      flexFlow: "row nowrap",
      visibility: _v7 ? "visible" : "hidden",
      zIndex: 40,
      children: (0, _v17.jsxs)(_v95.Flex, {
        padding: (0, _v61.rem)(4),
        gap: (0, _v61.rem)(2),
        children: [_v2 ? _v10 : null, _v3 ? _v9 : null]
      })
    });
  }
  var _v649 = _v0.i(0),
    _v650 = _v0.i(0),
    _v651 = _v0.i(0);
  let _v652 = {
    [_v285.EVideoTransitionState.AUTO]: (0, _v17.jsx)(_v649.default, {}),
    [_v285.EVideoTransitionState.LOOP]: (0, _v17.jsx)(_v650.default, {})
  };
  function _v653({
    isInProgram: _v0,
    hasStudioConnection: _v1,
    scene: _v2,
    fullscreenList: _v3,
    agoraMediaList: _v4,
    isVideoTimerShowing: _v5 = !0,
    onClick: _v6 = _v64.CallablePlaceholder
  }) {
    let _v7 = (0, _v21.useMemo)(() => (0, _v161.findPipDescriptorInScene)(_v2), [_v2]),
      _v8 = (0, _v21.useMemo)(() => Object.values(_v2?.graphics || {}), [_v2?.graphics]),
      _v9 = (0, _v123.useLayoutPlaceholdersDescriptors)(_v2),
      _v10 = _v8.map(_v0 => {
        let _v1 = `${_v0.type}-thumbnail`;
        switch (_v0.type) {
          case _v88.EGraphicsDescriptorType.AGORA_MEDIA:
            {
              let _v0 = _v4?.[_v0.data.sourceId] || null,
                _v1 = _v0?.videoThumbFullSize || "",
                _v2 = (0, _v286.getVideoTransitionState)(_v2);
              return (0, _v17.jsxs)(_v21.Fragment, {
                children: [(0, _v17.jsx)(_v106.Box, {
                  "data-testid": _v1,
                  position: "absolute",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  top: `${_v0.position.top}%`,
                  left: `${_v0.position.left}%`,
                  width: `${_v0.position.width}%`,
                  height: `${_v0.position.height}%`,
                  zIndex: _v0.position.z,
                  backgroundSize: "contain",
                  backgroundImage: `url('${_v1}')`
                }), _v5 ? (0, _v17.jsx)(_v106.Box, {
                  position: "absolute",
                  zIndex: _v74.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_MODIFIERS,
                  bottom: (0, _v61.rem)(4),
                  right: (0, _v61.rem)(4),
                  children: (0, _v17.jsxs)(_v106.Box, {
                    display: "flex",
                    alignItems: "center",
                    gap: (0, _v61.rem)(4),
                    justifyContent: "space-between",
                    padding: `${(0, _v61.rem)(1)} ${(0, _v61.rem)(2)}`,
                    borderRadius: (0, _v61.rem)(4),
                    color: "white",
                    fontSize: (0, _v61.rem)(10),
                    fontWeight: "700",
                    background: "rgba(0, 0, 0, 0.75)",
                    children: [(0, _v17.jsx)(_v651.VideoTimeLeft, {
                      isPlaying: !!(_v1 && _v2?.meta?.media?.status === _v88.EMediaStatus.PLAY),
                      isInProgram: !!_v0,
                      offset: _v2?.meta?.media?.offset,
                      startedAt: _v2?.meta?.media?.startedAt,
                      duration: 0 * (_v0?.videoDuration || 0)
                    }), _v652[_v2]]
                  })
                }) : null]
              }, _v0.data.sourceId);
            }
          case _v88.EGraphicsDescriptorType.IMAGE:
            {
              let _v0 = _v3?.[_v0.data.sourceId]?.imageSrc || "";
              return (0, _v17.jsx)(_v106.Box, {
                "data-testid": _v1,
                position: "absolute",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                top: `${_v0.position.top}%`,
                left: `${_v0.position.left}%`,
                width: `${_v0.position.width}%`,
                height: `${_v0.position.height}%`,
                zIndex: _v0.position.z,
                backgroundSize: "cover",
                backgroundImage: `url('${_v0}')`
              }, _v0.data.sourceId);
            }
          default:
            return null;
        }
      }),
      _v11 = _v7 ? null : _v9.map((_v0, _v1) => (0, _v17.jsx)(_v106.Box, {
        position: "absolute",
        border: "1px solid black",
        background: _v97.PREVIEW_GRADIENT,
        borderRadius: 0,
        zIndex: _v0.z,
        top: `${_v0.top}%`,
        left: `${_v0.left}%`,
        width: `${_v0.width}%`,
        height: `${_v0.height}%`
      }, _v0.index || `i-${_v1}`));
    return (0, _v17.jsx)(_v106.Box, {
      sx: _v97.STRICT_16BY9_BOX_STYLE,
      children: (0, _v17.jsxs)(_v106.Box, {
        sx: _v97.createFullWidthAbsoluteStyle,
        onClick: _v6,
        children: [_v10, _v11]
      })
    });
  }
  function _v654({
    id: _v0 = (0, _v96.createDomName)("single-template-wrapper"),
    showControls: _v1,
    videoObject: _v2,
    templateId: _v3,
    agoraMediaList: _v4,
    fullscreenList: _v5,
    isDisabled: _v6,
    newScene: _v7,
    isVideoTimerShowing: _v8 = !0,
    onClick: _v9,
    onAddButtonClick: _v10,
    onPlayLocallyVideoClicked: _v11
  }) {
    let [_v12, _v13] = (0, _v21.useState)(!1),
      {
        pageProps: _v14
      } = (0, _v80.useLiveGlobals)(),
      _v15 = (0, _v21.useCallback)(() => {
        _v13(!0);
      }, []),
      _v16 = (0, _v21.useCallback)(() => {
        _v13(!1);
      }, []);
    return (0, _v17.jsxs)(_v106.Box, {
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      cursor: "pointer",
      onMouseEnter: _v15,
      onMouseLeave: _v16,
      id: _v0,
      children: [(0, _v17.jsx)(_v648, {
        isHovering: _v12,
        showControls: _v1,
        isVideo: !!_v2,
        isDisabled: _v6,
        onPlayLocallyVideoClicked: _v2 ? _v11(_v2, _v3) : void 0,
        onAddButtonClick: _v10
      }), _v2 ? (0, _v17.jsx)(_v533.PlayerContextProvider, {
        assetUrls: _v14.playerAssetUrls,
        type: _v534.PlayerType.BarebonePlayer,
        children: (0, _v17.jsx)(_v539, {
          videoDuration: _v2.videoDuration,
          videoThumbFullSize: _v2.videoThumbFullSize,
          videoId: _v2.videoId,
          videoHash: _v2.videoHash,
          isHovering: _v12,
          isVideoTimerShowing: _v8
        })
      }) : (0, _v17.jsx)(_v653, {
        agoraMediaList: _v4,
        scene: _v7,
        fullscreenList: _v5,
        isVideoTimerShowing: _v8,
        onClick: _v9
      })]
    });
  }
  var _v655 = _v65;
  let _v656 = (0, _v21.forwardRef)(({
    className: _v0 = (0, _v655.createLiveDomName)("draggable-container"),
    children: _v1,
    type: _v2,
    additionalType: _v3,
    itemId: _v4,
    draggable: _v5 = !0
  }, _v6) => {
    let _v7 = (0, _v28.useScope)(),
      _v8 = (0, _v21.useRef)(!1),
      _v9 = (0, _v21.useCallback)(_v0 => (_v131({
        dataTransfer: _v0.nativeEvent.dataTransfer,
        type: _v2,
        ...(_v3 ? {
          [_v3]: !0
        } : {}),
        dropEffect: "move",
        textData: String(_v4),
        [_v2]: !0,
        [_v129.IS_SCENE_PREVIEW_DROP_DISABLED]: !0,
        [_v129.IS_FROM_PANEL]: !0,
        [_v129.IS_IN_SCENE]: !1,
        [_v129.IS_SCENE_GRAPHICS_REPLACEMENTS]: !1
      }), {
        type: _v2,
        itemId: _v4,
        additionalType: _v3,
        isScenePreviewDropDisabled: !0,
        isFromPanel: !0,
        isInScene: !1,
        isSceneGraphicsReplacements: !1
      }), [_v3, _v4, _v2]),
      _v10 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v9(_v0);
        _v8.current = !0, _v7.getContextOf(_v125.DragDropManager)?.dragDropActions.startDragDrop(_v1);
      }, [_v9, _v7]),
      _v11 = (0, _v21.useCallback)(() => {
        _v8.current = !1, _v7.getContextOf(_v125.DragDropManager)?.dragDropActions.stopDragDrop();
      }, [_v7]);
    return (0, _v21.useEffect)(() => () => {
      _v8.current && _v7.getContextOf(_v125.DragDropManager)?.dragDropActions.stopDragDrop();
    }, [_v7]), (0, _v17.jsx)("div", {
      className: _v0,
      ref: _v6,
      draggable: _v5,
      onDragStart: _v10,
      onDragEnd: _v11,
      children: _v1
    });
  });
  function _v657({
    id: _v0 = (0, _v96.createDomName)("opened-template-view"),
    className: _v1 = (0, _v96.createDomName)("opened-template-view"),
    canCreateScenes: _v2,
    isDraggingContent: _v3,
    activeTemplateConfig: _v4,
    activeTemplateObject: _v5,
    onAddButtonClick: _v6,
    onAddAllButtonClick: _v7,
    onPlayLocallyVideo: _v8,
    onCloseAllTemplates: _v9
  }) {
    let _v10 = (0, _v21.useCallback)((_v0, _v1) => _v0 => {
        _v644("expand_template", {
          collectionName: _v1
        }), _v8(_v0, _v0);
      }, [_v8]),
      _v11 = (0, _v21.useCallback)(() => {
        _v7(_v5);
      }, [_v5, _v7]);
    return (0, _v17.jsxs)(_v17.Fragment, {
      children: [(0, _v17.jsx)(_v474.BackButtonPanel, {
        id: (0, _v96.createDomName)(_v0, "back-button"),
        title: _v4?.title || "",
        headerSize: "sm",
        padding: `${(0, _v61.rem)(24)} 0 0 0`,
        onClick: _v9
      }), (0, _v17.jsx)(_v107.Button, {
        id: (0, _v96.createDomName)(_v0, "use-all-scenes-btn"),
        marginY: (0, _v61.rem)(16),
        variant: "primary",
        onClick: _v11,
        children: _v66.translations.useAllCountScenes(_v5?.length || "")
      }), (0, _v17.jsx)(_v106.Box, {
        sx: (0, _v416.createTabListScrollStyle)(),
        id: (0, _v96.createDomName)(_v0, "scroll"),
        children: (0, _v17.jsx)(_v106.Box, {
          sx: (0, _v416.createTabListColumnStyle)(),
          id: (0, _v96.createDomName)(_v0, "list"),
          children: _v5?.map(_v0 => {
            let {
                newScene: _v1,
                fullscreenList: _v2,
                agoraMediaList: _v3,
                templateId: _v4
              } = _v0,
              _v5 = Object.keys(_v3).length > 0 ? Object.values(_v3)[0] : null;
            return (0, _v17.jsx)(_v656, {
              type: _v129.TEMPLATE_ITEM,
              additionalType: _v5 ? _v129.SCENE_CAN_BE_SCHEDULED : void 0,
              itemId: _v4,
              children: (0, _v17.jsx)(_v106.Box, {
                sx: (0, _v416.createTabListColumnHalfItemStyle)(),
                className: (0, _v96.createDomName)(_v1, "item"),
                children: (0, _v17.jsx)(_v654, {
                  id: (0, _v96.createDomName)(_v0, "template-view"),
                  showControls: !_v3,
                  videoObject: _v5,
                  agoraMediaList: _v3,
                  isDisabled: !_v2,
                  newScene: _v1,
                  fullscreenList: _v2,
                  templateId: _v4,
                  onPlayLocallyVideoClicked: _v10,
                  onAddButtonClick: () => _v6(_v0)
                })
              })
            }, _v4);
          })
        })
      })]
    });
  }
  function _v658({
    id: _v0 = (0, _v96.createDomName)("preview-template-view"),
    className: _v1 = (0, _v96.createDomName)("preview-template-view"),
    onPlayLocallyVideo: _v2,
    onClick: _v3,
    templateContext: {
      previewTemplateObject: _v4,
      templatesActions: {
        selectedActiveTemplateObject: _v5
      }
    } = (0, _v28.useManager)(_v643)
  }) {
    let {
        trackLiveStreamTemplateSelected: _v6
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v7 = (0, _v21.useCallback)(_v0 => {
        _v644("open_collection", {
          collectionName: _v0.id
        }), _v6({
          liveStreamTemplateType: _v0.id
        }), _v5(_v0);
      }, [_v5, _v6]),
      _v8 = (0, _v21.useCallback)((_v0, _v1) => _v0 => {
        _v644("expand_collection", {
          collectionName: _v1
        }), _v2(_v0, _v0);
      }, [_v2]);
    return (0, _v17.jsx)(_v106.Box, {
      sx: (0, _v416.createTabListScrollStyle)(),
      id: _v0,
      children: (0, _v17.jsx)(_v106.Box, {
        sx: (0, _v416.createTabListColumnStyle)(),
        id: (0, _v96.createDomName)(_v0, "list"),
        children: _v4?.map(_v0 => {
          let {
              newScene: _v1,
              fullscreenList: _v2,
              agoraMediaList: _v3,
              templateId: _v4,
              template: _v5
            } = _v0,
            _v6 = Object.keys(_v3).length > 0 ? Object.values(_v3)[0] : null;
          return (0, _v17.jsxs)("div", {
            children: [(0, _v17.jsx)(_v656, {
              className: (0, _v96.createDomName)(_v1, "drag"),
              type: _v129.TEMPLATE,
              itemId: _v4,
              children: (0, _v17.jsx)(_v106.Box, {
                sx: (0, _v416.createTabListColumnHalfItemStyle)(),
                className: (0, _v96.createDomName)(_v1, "item"),
                onClick: () => _v7(_v5),
                children: (0, _v17.jsx)(_v654, {
                  showControls: !1,
                  videoObject: _v6,
                  agoraMediaList: _v3,
                  newScene: _v1,
                  fullscreenList: _v2,
                  isVideoTimerShowing: !1,
                  templateId: _v4,
                  onClick: _v3,
                  onPlayLocallyVideoClicked: _v8
                })
              })
            }), (0, _v17.jsx)(_v106.Box, {
              padding: (0, _v61.rem)(4),
              children: (0, _v17.jsx)(_v109.Text, {
                className: (0, _v96.createDomName)(_v1, "template-name"),
                cursor: "pointer",
                variant: "body-xs",
                color: "text-primary",
                width: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                children: _v5.title
              })
            })]
          }, _v4);
        })
      })
    });
  }
  function _v659({
    id: _v0 = (0, _v96.createDomName)("template-tab"),
    className: _v1 = (0, _v96.createDomName)("template-tab"),
    templateContext: {
      activeTemplateObject: _v2,
      activeTemplateConfig: _v3,
      templatesActions: {
        selectedActiveTemplateObject: _v4,
        createScenesFromTemplates: _v5
      }
    } = (0, _v28.useManager)(_v643),
    sceneContext: {
      sceneActions: _v6,
      scenes: _v7,
      isHydrated: _v8,
      scenesOrder: _v9,
      sceneInProgram: _v10
    } = (0, _v28.useManager)(_v56.SceneManager),
    composerSessionStatusContext: {
      streamMode: _v11
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      streamMode: _v0
    }) => [_v0]),
    dragDropContext: {
      isDraggingContent: _v12
    } = (0, _v28.useManager)(_v125.DragDropManager)
  }) {
    let _v13 = !!(_v2 && _v3),
      _v14 = (0, _v80.useLiveGlobals)(),
      _v15 = (0, _v28.useScope)(),
      [_v16] = (0, _v160.useBroadcasterActionConfirmation)(),
      {
        onPlayLocallyVideo: _v17,
        wrapperRef: _v18,
        videoSourcePlaybackRef: _v19,
        onStopPlayLocallyVideo: _v20,
        onAttachLocalPlayback: _v21,
        previewVideoGraphic: _v22
      } = _v547({
        calculateAttachLocalPlayback: ({
          attachPlaybackRefElement: _v0,
          wrapperRefElement: _v1,
          videoSourcePlaybackRefElement: _v2
        }) => {
          if (_v0 && _v1 && _v2) {
            let _v0 = _v0.getBoundingClientRect(),
              _v1 = _v0.x + _v0.width + 4,
              _v2 = _v0.y,
              _v3 = _v2 + 456 + 32 - document.body.scrollHeight;
            _v2.style.left = _v1 + "px", _v2.style.top = Math.max(_v3 > 0 ? _v2 - _v3 : _v2, 0) + "px";
          }
        }
      }),
      _v23 = (0, _v21.useMemo)(() => (0, _v161.pickSortedScenesList)(_v7, _v9), [_v9, _v7]),
      _v24 = (0, _v21.useCallback)(async _v0 => {
        let _v1 = !1;
        await _v6.deleteScenes(_v23.map(_v0 => (_v0.id === _v10 && (_v1 = !0), _v0.id)));
        let _v2 = await _v5(_v0),
          _v3 = _v2[0];
        _v6.setActiveScene(_v3), _v1 && _v6.pushSceneToProgram(_v3.id, {
          isCloudProvisionRequired: !1
        }), _v15.emitSignal({
          type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID,
          data: {
            id: (0, _v341.default)(_v2)?.id
          }
        });
      }, [_v5, _v6, _v10, _v23, _v15]),
      _v25 = (0, _v21.useCallback)((_v0, _v1, _v2) => {
        let _v3 = _v2;
        _v1 === _v191.SCHEDULED ? _v3 = (0, _v361.normalizeToRange)(_v2, -1 / 0, (0, _v161.findLastScheduledIndex)(_v23)) : _v1 === _v191.LIVE && (_v3 = _v2 + (0, _v161.findLastScheduledIndex)(_v23) + 1), _v5([_v0], _v3, _v1 === _v191.SCHEDULED).then(_v0 => {
          if (0 !== _v0.length) {
            let _v0 = _v0[0];
            _v6.setActiveScene(_v0), _v6.setIsEditMode();
          }
          _v15.emitSignal({
            type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID,
            data: {
              id: (0, _v341.default)(_v0)?.id
            }
          });
        }).finally(() => {
          _v645(_v3?.id || "unknown");
        });
      }, [_v5, _v23, _v15, _v6, _v3?.id]),
      _v26 = (0, _v21.useCallback)(() => {
        let _v0 = _v23[0];
        return _v0 && 1 === _v23.length && 0 === Object.keys(_v0.graphics || {}).length ? _v0 : null;
      }, [_v23]),
      _v27 = (0, _v21.useCallback)(async _v0 => {
        let _v1 = _v26(),
          _v2 = _v1?.id,
          _v3 = (await _v5([_v0]))[0];
        _v2 && (await _v6.deleteScene(_v2, _v10 === _v2 ? _v3.id : void 0)), _v6.setActiveScene(_v3), _v15.emitSignal({
          type: _v51.ESceneCreateActionsSignal.SCROLL_TO_SCENE_ID,
          data: {
            id: _v3.id
          }
        }), _v645(_v3?.id);
      }, [_v3?.id, _v26, _v5, _v6, _v15, _v10]),
      _v28 = (0, _v21.useCallback)(_v0 => {
        _v33.liveApplicationConfig.ASK_TO_REPLACE_ALL_SCENES = !_v0.target.checked;
      }, []),
      _v29 = (0, _v21.useCallback)((_v0, _v1 = null) => {
        if (_v26() || !_v33.liveApplicationConfig.ASK_TO_REPLACE_ALL_SCENES || 0 === _v23.length) {
          _v646(_v3?.id || _v1), _v24(_v0);
          return;
        }
        _v16({
          modalWidth: 440,
          type: _v162.EConfirmationType.REMOVE_ALL_SCENES,
          confirmMessage: _v66.translations.replaceScenes,
          header: _v66.translations.replaceAllScenes,
          body: (0, _v17.jsxs)("div", {
            children: [(0, _v17.jsx)(_v106.Box, {
              mb: (0, _v61.rem)(10),
              fontSize: "text-sm",
              children: _v11 === _v39.EComposerStreamModeType.SIMULIVE ? _v66.translations.removeAllSceneBodyMessageScheduled : _v66.translations.removeAllSceneBodyMessageLive
            }), (0, _v17.jsx)(_v351.Checkbox, {
              onChange: _v28,
              children: _v66.translations.dontShowThisMessage
            })]
          }),
          onConfirm: () => {
            _v24(_v0), _v646(_v3?.id || _v1);
          }
        });
      }, [_v26, _v23.length, _v16, _v28, _v3?.id, _v24, _v11]),
      [_v30] = (0, _v21.useMemo)(() => {
        let _v0 = Object.keys(_v7).length;
        return [_v0 < _v74.graphicsConfig.SCENE.MAX_SCENES_COUNT && _v8, _v0 > 1];
      }, [_v7, _v8]),
      _v31 = (0, _v21.useCallback)(() => {
        _v4(null);
      }, [_v4]);
    return (0, _v21.useEffect)(() => _v15.subscribeToSignals(_v0 => {
      switch (_v0.type) {
        case _v51.ESceneCreateActionsSignal.INSERT_TEMPLATE_TO_INDEX_OF_LIST:
          {
            let {
                data: {
                  templateId: _v0
                }
              } = _v0,
              _v1 = Object.values(_v642).find(_v0 => _v0.id === _v0);
            _v1?.sceneTemplates ? _v29(_v603(_v1.sceneTemplates), _v0) : _v81.Logger.getGlobal().warn("Could not create template scenes:", _v0);
            break;
          }
        case _v51.ESceneCreateActionsSignal.INSERT_TEMPLATE_ITEM_TO_INDEX_OF_LIST:
          {
            let {
                data: {
                  templateId: _v0,
                  targetIndex: _v1,
                  sceneListType: _v2
                }
              } = _v0,
              _v3 = _v2?.find(_v0 => _v0.templateId === _v0);
            _v3 ? _v25(_v3, _v2, _v1) : _v81.Logger.getGlobal().warn("Could not create template scene for item:", _v0);
          }
      }
    }), [_v15, _v29, _v2, _v25]), (0, _v17.jsxs)(_v533.PlayerContextProvider, {
      assetUrls: _v14.pageProps.playerAssetUrls,
      type: _v534.PlayerType.VimeoPlayer,
      children: [(0, _v17.jsxs)(_v106.Box, {
        ref: _v18,
        id: _v0,
        className: _v1,
        sx: (0, _v416.createTabWrapperStyle)(),
        children: [_v13 ? null : (0, _v17.jsx)(_v415.LeftPanelHeader, {
          label: _v66.translations.templates,
          controls: (0, _v17.jsx)(_v414.LeftPanelDismiss, {})
        }), (0, _v17.jsx)(_v413.LeftPanelContent, {
          children: _v2 && _v3 ? (0, _v17.jsx)(_v657, {
            isDraggingContent: _v12,
            canCreateScenes: _v30,
            activeTemplateConfig: _v3,
            activeTemplateObject: _v2,
            onAddAllButtonClick: _v29,
            onAddButtonClick: _v27,
            onPlayLocallyVideo: _v17,
            onCloseAllTemplates: _v31
          }) : (0, _v17.jsx)(_v658, {
            onPlayLocallyVideo: _v17,
            onClick: _v20
          })
        })]
      }), (0, _v17.jsx)(_v545, {
        ref: _v19,
        item: _v22,
        onStopPlayback: _v20,
        onPlaybackAttached: _v21,
        isDateShowing: !1
      })]
    });
  }
  let _v660 = (0, _v28.createProvider)([_v643]);
  function _v661({
    id: _v0 = (0, _v96.createDomName)("template-tab"),
    className: _v1 = (0, _v96.createDomName)("template-tab"),
    firebaseContext: {
      isComposerReady: _v2
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager, ({
      isComposerReady: _v0
    }) => [_v0])
  }) {
    return (0, _v17.jsx)(_v660, {
      children: _v2 ? (0, _v17.jsx)(_v659, {}) : (0, _v17.jsx)(_v73.BlockingLoadingWrapper, {
        id: (0, _v96.createDomName)(_v0, "loader"),
        className: (0, _v96.createDomName)(_v1, "loader"),
        opacity: .25,
        withAnimation: !0
      })
    });
  }
  let _v662 = (0, _v21.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.RtcDebugTab
  })));
  function _v663({
    id: _v0 = (0, _v96.createDomName)("live-left-panel"),
    className: _v1 = (0, _v96.createDomName)("live-left-panel"),
    composerSessionStatusContext: {
      streamMode: _v2,
      isHydrated: _v3
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager),
    composerSessionContext: {
      permissions: _v4
    } = (0, _v28.useManager)(_v63.ComposerSessionManager),
    panelsContext: {
      leftPanel: _v5
    } = (0, _v28.useManager)(_v216.PanelsManager)
  }) {
    let {
        trackLiveStreamSidebarPanelClicked: _v6
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      _v7 = (0, _v21.useCallback)(_v0 => {
        let _v1 = (() => {
          switch (_v0) {
            case _v46.ELeftPanelId.SPEAKERS:
              return "speakers";
            case _v46.ELeftPanelId.TEMPLATES:
              return "templates";
            case _v46.ELeftPanelId.MEDIA:
              return "media";
            case _v46.ELeftPanelId.LOWERTHIRDS:
              return "graphics";
            case _v46.ELeftPanelId.BRAND:
              return "brand";
            case _v46.ELeftPanelId.QNA:
              return "q_and_a";
            case _v46.ELeftPanelId.POLLS:
              return "polls";
            default:
              return null;
          }
        })();
        null !== _v1 && _v6({
          liveStreamPanel: _v1
        });
      }, [_v6]),
      _v8 = (0, _v44.useIsVpaas)(),
      _v9 = _v2 === _v39.EComposerStreamModeType.RECORD,
      _v10 = (0, _v412.useCanSeeDebugTools)(),
      _v11 = (0, _v21.useMemo)(() => {
        let _v0 = [{
          id: _v46.ELeftPanelId.SPEAKERS,
          icon: (0, _v17.jsx)(_v407.Users, {}),
          header: _v66.translations.speakers,
          hash: _v46.ELeftPanelHash.SPEAKERS,
          content: _v600
        }, _v4.canSeeTemplatesTab ? {
          id: _v46.ELeftPanelId.TEMPLATES,
          icon: (0, _v17.jsx)(_v402._3GridTopLayout, {}),
          header: _v66.translations.templates,
          hash: _v46.ELeftPanelHash.TEMPLATES,
          content: _v661
        } : null, {
          id: _v46.ELeftPanelId.MEDIA,
          icon: (0, _v17.jsx)(_v403.Image, {}),
          header: _v66.translations.media,
          hash: _v46.ELeftPanelHash.MEDIA,
          content: _v550
        }, {
          id: _v46.ELeftPanelId.LOWERTHIRDS,
          icon: (0, _v17.jsx)(_v405.LowerThird, {}),
          header: _v66.translations.graphics,
          hash: _v46.ELeftPanelHash.LOWERTHIRDS,
          content: _v487
        }, {
          id: _v46.ELeftPanelId.BRAND,
          icon: (0, _v17.jsx)(_v404.LogoBrand, {}),
          header: _v66.translations.brand,
          hash: _v46.ELeftPanelHash.BRAND,
          content: _v439
        }, _v9 ? null : {
          id: _v46.ELeftPanelId.QNA,
          icon: (0, _v17.jsx)(_v410.PanelQnaIcon, {
            isActive: _v5 === _v46.ELeftPanelId.QNA,
            isManagementAccessed: !0
          }),
          header: _v190.T_QNA,
          content: _v573,
          hash: _v46.ELeftPanelHash.QNA
        }, _v9 ? null : {
          id: _v46.ELeftPanelId.POLLS,
          icon: (0, _v17.jsx)(_v409.PanelPollIcon, {
            isActive: _v5 === _v46.ELeftPanelId.POLLS
          }),
          header: _v190.T_POLLS,
          content: _v559,
          hash: _v46.ELeftPanelHash.POLLS
        }];
        return _v10 && _v0.push({
          id: _v46.ELeftPanelId.DEBUG,
          icon: (0, _v17.jsx)(_v406.Processor, {}),
          header: _v66.translations.debug,
          hash: _v46.ELeftPanelHash.DEBUG,
          content: () => (0, _v17.jsx)(_v21.Suspense, {
            fallback: null,
            children: (0, _v17.jsx)(_v662, {})
          })
        }), _v0.filter(Boolean);
      }, [_v4.canSeeTemplatesTab, _v10, _v9, _v5]);
    return (0, _v17.jsx)(_v411.LeftPanel, {
      id: _v0,
      className: _v1,
      isLoading: !_v3,
      items: _v11,
      footer: _v8 ? null : (0, _v17.jsx)(_v408.FooterHelpMenu, {}),
      onUserActivateLeftPanel: _v7
    });
  }
  var _v664 = _v0.i(0),
    _v665 = _v0.i(0),
    _v666 = _v0.i(0),
    _v667 = _v0.i(0),
    _v668 = _v0.i(0),
    _v669 = _v0.i(0),
    _v670 = _v0.i(0),
    _v671 = _v0.i(0),
    _v672 = _v0.i(0);
  function _v673({
    id: _v0 = (0, _v65.createLiveDomName)("chat-backstage"),
    className: _v1 = (0, _v65.createLiveDomName)("chat-backstage"),
    firebaseContext: {
      interactionCredentials: _v2,
      connectionStatuses: {
        isInteractionConnected: _v3
      }
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager)
  }) {
    let _v4 = _v2?.user?.id;
    return _v4 ? (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      grow: 1,
      height: "100%",
      width: "100%",
      overflow: "hidden",
      children: [(0, _v17.jsx)(_v672.RightPanelHeader, {
        label: _v190.T_CHAT,
        rightControls: (0, _v17.jsx)(_v671.RightPanelDismiss, {
          id: (0, _v65.createLiveDomName)(_v0, "dismiss-button"),
          className: (0, _v65.createLiveDomName)(_v1, "dismiss-button")
        })
      }), (0, _v17.jsxs)(_v670.RightPanelContent, {
        children: [(0, _v17.jsx)(_v667.ChatHistory, {
          chatType: _v40.EChatType.BACKSTAGE,
          currentUserId: _v4,
          scrollBackground: "surface"
        }), (0, _v17.jsx)(_v668.ChatInput, {
          chatType: _v40.EChatType.BACKSTAGE,
          isDisabled: !_v3
        })]
      })]
    }) : (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      overflow: "hidden",
      grow: 1,
      width: "100%",
      children: [(0, _v17.jsx)(_v672.RightPanelHeader, {
        label: _v190.T_CHAT
      }), (0, _v17.jsx)(_v670.RightPanelContent, {
        children: (0, _v17.jsx)(_v669.ChatPreloader, {
          id: (0, _v65.createLiveDomName)(_v0, "preloader"),
          className: (0, _v65.createLiveDomName)(_v1, "preloader")
        })
      })]
    });
  }
  var _v674 = _v0.i(0),
    _v675 = _v0.i(0),
    _v676 = _v0.i(0),
    _v677 = _v0.i(0),
    _v678 = _v0.i(0);
  function _v679({
    id: _v0 = (0, _v96.createDomName)("tabbed-chat"),
    className: _v1 = (0, _v96.createDomName)("tabbed-chat"),
    chatContext: {
      isHydrated: _v2,
      isEnabled: _v3,
      chatActions: {
        enableChat: _v4
      }
    } = (0, _v28.useManager)(_v677.ChatManager),
    firebaseContext: {
      interactionCredentials: _v5,
      connectionStatuses: {
        isInteractionConnected: _v6
      }
    } = (0, _v28.useManager)(_v49.BroadcasterFirebaseManager)
  }) {
    let _v7 = (0, _v44.useIsVpaas)(),
      {
        trackLiveStreamChatTabChanged: _v8,
        trackLiveStreamChatToggled: _v9
      } = (0, _v75.useLiveStreamBroadcasterTracking)(),
      {
        initialState: {
          sessionType: _v10,
          interaction: _v11
        }
      } = (0, _v80.useLiveGlobals)(),
      [_v12, _v13] = (0, _v21.useState)(() => _v11?.feature?.defaultChatType || _v40.EChatType.PUBLIC),
      _v14 = _v5?.user?.id,
      _v15 = !_v2 || !_v14,
      _v16 = _v10 === _v39.EComposerSessionType.VENUE,
      _v17 = (0, _v21.useCallback)(() => {
        _v9({
          liveStreamNewStatus: !0
        }), _v4(), (0, _v678.trackEnableAudienceChat)();
      }, [_v4, _v9]),
      _v18 = (0, _v21.useMemo)(() => {
        let _v0 = [{
          id: _v40.EChatType.BACKSTAGE,
          label: _v66.translations.speakers
        }];
        return _v10 !== _v39.EComposerSessionType.VENUE && _v0.unshift({
          id: _v40.EChatType.PUBLIC,
          label: _v66.translations.audience
        }), _v0;
      }, [_v10]),
      {
        getIdByIndex: _v19,
        getIndexById: _v20
      } = (0, _v569.useTabsMapping)(_v18),
      _v21 = (0, _v21.useCallback)(_v0 => {
        let _v1 = _v19(_v0);
        _v13(_v1), _v8({
          liveStreamChatTab: _v1 === _v40.EChatType.PUBLIC ? "audience" : "speakers"
        });
      }, [_v19, _v8]);
    return _v15 ? (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      direction: "column",
      overflow: "hidden",
      grow: 1,
      width: "100%",
      children: [(0, _v17.jsx)(_v672.RightPanelHeader, {
        label: _v190.T_CHAT
      }), (0, _v17.jsx)(_v669.ChatPreloader, {
        id: (0, _v96.createDomName)(_v0, "preloader")
      })]
    }) : (0, _v17.jsxs)(_v95.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      overflow: "hidden",
      grow: 1,
      width: "100%",
      children: [(0, _v17.jsx)(_v672.RightPanelHeader, {
        label: _v190.T_CHAT,
        rightControls: (0, _v17.jsxs)(_v17.Fragment, {
          children: [(0, _v17.jsx)(_v675.ChatSettingsButton, {
            id: (0, _v96.createDomName)(_v0, "settings-button"),
            className: (0, _v96.createDomName)(_v1, "settings-button"),
            withInteractionSubmenu: !_v7 && !_v16,
            buttonIcon: (0, _v17.jsx)(_v378.EllipsisV, {})
          }), (0, _v17.jsx)(_v671.RightPanelDismiss, {
            id: (0, _v96.createDomName)(_v0, "dismiss-button"),
            className: (0, _v96.createDomName)(_v1, "dismiss-button")
          })]
        })
      }), (0, _v17.jsx)(_v670.RightPanelContent, {
        children: (0, _v17.jsxs)(_v440.Tabs, {
          size: "sm",
          index: _v20(_v12),
          sx: {
            ..._v416.TABS_STYLES,
            overflow: "hidden"
          },
          onChange: _v21,
          children: [(0, _v17.jsxs)(_v441.TabList, {
            children: [_v18.map(({
              id: _v0,
              label: _v1
            }) => (0, _v17.jsx)(_v442.Tab, {
              className: (0, _v96.createDomName)(_v0, _v0, "tab"),
              children: (0, _v17.jsx)(_v676.ChatTabLabel, {
                className: (0, _v96.createDomName)(_v0, "tab-label"),
                isSelected: _v12 === _v0,
                chatType: _v0,
                label: _v1
              })
            }, _v0)), (0, _v17.jsx)(_v440.TabIndicator, {})]
          }), (0, _v17.jsx)(_v444.TabPanels, {
            sx: {
              ..._v416.TAB_PANELS_STYLES,
              overflow: "hidden"
            },
            children: _v18.map(({
              id: _v0
            }) => {
              let _v1 = _v0 === _v40.EChatType.PUBLIC && !1 === _v3;
              return (0, _v17.jsx)(_v443.TabPanel, {
                className: (0, _v96.createDomName)(_v0, _v0, "tab-panel"),
                sx: {
                  ..._v416.TAB_PANEL_STYLES,
                  overflow: "hidden",
                  rowGap: 0,
                  marginTop: (0, _v61.rem)(8)
                },
                children: _v1 ? (0, _v17.jsx)(_v446.EmptyStatePlaceholder, {
                  id: (0, _v96.createDomName)(_v0, _v0, "empty-placeholder"),
                  className: (0, _v96.createDomName)(_v0, _v0, "empty-placeholder"),
                  isWithScroll: !1,
                  icon: (0, _v17.jsx)(_v674.Chats, {
                    boxSize: "lg"
                  }),
                  buttonLabel: _v66.translations.turnOn,
                  description: _v66.translations.turnOnChatToEngageWithYourAudience,
                  onButtonClick: _v17
                }) : (0, _v17.jsxs)(_v17.Fragment, {
                  children: [(0, _v17.jsx)(_v667.ChatHistory, {
                    chatType: _v0,
                    currentUserId: _v14,
                    scrollBackground: "surface"
                  }), (0, _v17.jsx)(_v668.ChatInput, {
                    chatType: _v0,
                    isDisabled: !_v6
                  })]
                })
              }, _v0);
            })
          }, _v12)]
        })
      })]
    });
  }
  function _v680({
    composerSessionStatusContext: {
      streamMode: _v0
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager)
  }) {
    let {
      initialState: _v1
    } = (0, _v80.useLiveGlobals)();
    return _v0 === _v39.EComposerStreamModeType.RECORD || _v1?.sessionType === _v39.EComposerSessionType.VENUE ? (0, _v17.jsx)(_v673, {
      id: (0, _v65.createLiveDomName)("chat-backstage")
    }) : (0, _v17.jsx)(_v679, {
      id: (0, _v65.createLiveDomName)("chat-tabs")
    });
  }
  function _v681({
    id: _v0 = (0, _v65.createLiveDomName)("rtc-panel-right"),
    className: _v1 = (0, _v65.createLiveDomName)("rtc-panel-right"),
    composerSessionStatusContext: {
      isHydrated: _v2
    } = (0, _v28.useManager)(_v48.ComposerSessionStatusManager, ({
      isHydrated: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v21.useMemo)(() => [{
      id: _v112.ERightPanelId.EVENT_SETTINGS,
      content: _v665.EventSettingsTab,
      isVisible: !0
    }, {
      id: _v112.ERightPanelId.ANALYTICS,
      content: _v664.AnalyticsTab,
      isVisible: !0
    }, {
      id: _v112.ERightPanelId.CHAT,
      content: _v680,
      isVisible: !0
    }], []);
    return (0, _v17.jsx)(_v666.RightPanel, {
      id: _v0,
      className: _v1,
      items: _v3,
      isLoading: !_v2
    });
  }
  function _v682() {
    let _v0 = (0, _v119.useIsLiveDemoSubscription)();
    return (0, _v17.jsxs)(_v95.Flex, {
      id: (0, _v96.createDomName)("page"),
      direction: "column",
      grow: 1,
      minWidth: (0, _v61.rem)(0),
      minHeight: (0, _v61.rem)(640),
      overflow: "hidden",
      background: "background",
      sx: _v0 ? {
        border: _v0 ? "2px solid" : "none",
        borderImageSlice: _v0 ? 2 : "none",
        borderImageSource: _v0 ? "linear-gradient(270deg, #12a3ab 0%, #18a57f 49.59%, #1fa84d 100%)" : "none"
      } : void 0,
      children: [_v0 ? (0, _v17.jsx)(_v117.LiveSubscriptionUpsell, {}) : null, (0, _v17.jsx)(_v104.LiveBroadcasterErrorNotification, {}), (0, _v17.jsx)(_v105.LiveBroadcasterHeader, {
        id: (0, _v96.createDomName)("header")
      }), (0, _v17.jsxs)(_v95.Flex, {
        id: (0, _v96.createDomName)("content"),
        flexGrow: 1,
        flexBasis: 0,
        overflow: "hidden",
        children: [(0, _v17.jsx)(_v663, {
          id: (0, _v96.createDomName)("left-panel")
        }), (0, _v17.jsxs)(_v95.Flex, {
          id: (0, _v96.createDomName)("workspace"),
          position: "relative",
          flexDirection: "column",
          alignItems: "center",
          grow: 1,
          children: [(0, _v17.jsx)(_v18.LiveErrorBoundary, {
            component: "PreviewSceneLayout",
            children: (0, _v17.jsx)(_v401, {
              id: (0, _v96.createDomName)("preview-layout")
            })
          }), (0, _v17.jsx)(_v18.LiveErrorBoundary, {
            component: "LiveComposerFooter",
            children: (0, _v17.jsx)(_v118.LiveComposerFooter, {
              id: (0, _v96.createDomName)("footer")
            })
          })]
        }), (0, _v17.jsx)(_v681, {
          id: (0, _v96.createDomName)("right-panel")
        })]
      }), (0, _v17.jsx)(_v116, {})]
    });
  }
  var _v683 = _v0.i(0),
    _v684 = _v0.i(0),
    _v685 = _v0.i(0),
    _v686 = _v0.i(0),
    _v687 = _v0.i(0),
    _v688 = _v0.i(0),
    _v689 = _v0.i(0);
  let _v690 = [_v685.DebugControlManager, _v62.BroadcasterAgoraManager, _v49.BroadcasterFirebaseManager, _v677.ChatManager, _v63.ComposerSessionManager, _v176.ComposerSessionStatsManager, _v48.ComposerSessionStatusManager, _v50.ComposerSettingsManager, _v687.DestinationsManager, _v125.DragDropManager, _v115.EventSettingsManager, _v82.GraphicsManager, _v146.GuestsManager, _v183.LocalMediaManager, _v686.ModuleManager, _v359.NotificationManager, _v79.PageEventsManager, _v216.PanelsManager, _v556.PollManager, _v586.PresenceManager, _v182.QnAManager, _v184.RemoteMediaManager, _v180.RoomScreenShareManager, _v56.SceneManager, _v688.TrackingManager, _v52.UserPreferencesManager],
    _v691 = (0, _v28.createProvider)(_v690, {
      isCombined: _v33.liveApplicationConfig.USE_COMBINED_PROVIDERS
    });
  function _v692({
    initialState: _v0,
    pageProps: _v1,
    children: _v2
  }) {
    return (0, _v689.useScopeViewerProvision)(), (0, _v683.useScopeGctlProvision)(), (0, _v17.jsxs)(_v80.LiveGlobalsProvider, {
      initialState: _v0,
      pageProps: _v1,
      children: [(0, _v17.jsx)(_v533.PlayerContextProvider, {
        assetUrls: _v1.playerAssetUrls,
        type: _v534.PlayerType.BarebonePlayer,
        children: (0, _v17.jsx)(_v691, {
          initialState: _v0,
          children: _v2
        })
      }), (0, _v17.jsx)(_v684.FontsProvider, {
        fonts: _v74.graphicsConfig.FONTS.ENABLED_FONTS
      })]
    });
  }
  function _v693(_v0) {
    let _v1 = (0, _v43.useViewer)(),
      _v2 = (0, _v36.useInitialRenderTime)(),
      _v3 = (0, _v44.useIsVpaas)(),
      {
        producerTitle: _v4
      } = (0, _v44.useVpaasContext)(),
      _v5 = (0, _v21.useMemo)(() => {
        let {
            sessionId: _v0,
            sessionType: _v1
          } = _v0,
          _v2 = {
            targetVideoGraphicPreset: Number((0, _v42.getUrlQueryValue)(_v35.liveQueryConfig.CREATION.TARGET_VIDEO_PRESET) || void 0)
          };
        return {
          renderAt: _v2,
          sessionApplicationType: _v39.EComposerApplicationType.BROADCASTER,
          sessionType: _v1,
          sessionId: _v0,
          isVpaas: _v3,
          creation: _v2,
          user: {
            requiredOwnerCapabilities: _v33.liveApplicationConfig.USER.REQUIRED_OWNER_CAPABILITIES,
            requiredOwnerEntitlements: _v33.liveApplicationConfig.USER.REQUIRED_OWNER_ENTITLEMENTS,
            requiredOwnerPreferences: _v33.liveApplicationConfig.USER.REQUIRED_OWNER_PREFERENCES,
            requiredPreferences: _v33.liveApplicationConfig.USER.REQUIRED_PREFERENCES
          },
          graphic: {
            canEditGraphic: !0,
            initialBroadcasterTitle: _v4
          },
          media: {
            codec: _v34.liveMediaConfig.AGORA.CODEC,
            mediaMode: _v38.EAgoraMode.LIVE,
            screenMode: _v34.liveMediaConfig.AGORA.SCREEN_MODE,
            isVolumeIndicatorEnabled: !0,
            isStatsCollectionEnabled: _v33.liveApplicationConfig.TRACKING.IS_AGORA_STATS_COLLECTING_ENABLED,
            isVideoHardMuteEnabled: _v34.liveMediaConfig.AGORA.USE_VIDEO_HARD_MUTE,
            isAudioHardMuteEnabled: _v34.liveMediaConfig.AGORA.USE_AUDIO_HARD_MUTE,
            isSpeakingWhileMutedDetectorEnabled: !0,
            isDualStreamEnabled: _v34.liveMediaConfig.DUAL_STREAM.IS_ENABLED,
            dualStreamConfig: _v34.liveMediaConfig.DUAL_STREAM.CONFIG,
            remoteStreamFallbackType: _v34.liveMediaConfig.AGORA.REMOTE_STREAM_FALLBACK_OPTION,
            isRoomAudioPlayingByDefault: !0,
            canModerateActiveSharing: !0
          },
          interaction: {
            feature: {
              defaultChatType: _v40.EChatType.BACKSTAGE,
              isBackstageAllowed: !0
            }
          },
          externalModules: [_v39.EExternalModule.FIREBASE, _v39.EExternalModule.AGORA],
          live: {
            isSimulcastDisabled: _v1 !== _v39.EComposerSessionType.LIVE_EVENT || _v3,
            isUserPreferencesDisabled: _v3
          }
        };
      }, []);
    return ((0, _v37.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v5.sessionApplicationType,
      sessionType: _v5.sessionType,
      sessionId: _v5.sessionId,
      userId: _v1?.user?.id,
      userLocale: _v1?.locale,
      teamOwnerId: _v1?.teamUser?.ownerId ?? _v1?.user?.id,
      teamAccountType: _v1?.teamUser?.accountType ?? _v1?.user?.account,
      teamUser: _v1?.teamUser
    }), (0, _v41.isAgoraSupportedInBrowser)() && (!_v32.browserConfig.BROWSER?.isMobile || _v33.liveApplicationConfig.FEATURE.USE_MOBILE_ACCESS)) ? (0, _v17.jsx)(_v28.ScopeProvider, {
      children: (0, _v17.jsx)(_v31.ScopeErrorBoundary, {
        fallback: _v27,
        children: (0, _v17.jsxs)(_v692, {
          pageProps: _v0,
          initialState: _v5,
          children: [(0, _v17.jsx)(_v682, {}), (0, _v17.jsx)(_v103, {})]
        })
      })
    }) : _v32.browserConfig.BROWSER?.isMobile ? (0, _v17.jsx)(_v30.MobileUnsupportedModal, {}) : (0, _v17.jsx)(_v29.BrowserUnsupportedModal, {});
  }
  _v0.s(["LiveRtcRoot", 0, function (_v0) {
    let _v1 = (0, _v20.useOptionalViewer)(),
      {
        sessionId: _v2,
        sessionType: _v3
      } = (0, _v19.usePageSessionContext)();
    return _v1 ? (0, _v17.jsx)(_v18.LiveErrorBoundary, {
      component: "LiveRtcRoot",
      componentHandler: _v27,
      children: (0, _v17.jsx)(_v693, {
        ..._v0,
        sessionType: _v3,
        sessionId: _v2
      })
    }) : null;
  }], 0);
}