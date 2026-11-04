{
  "use strict";

  var _v1,
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
    _v69 = _v0.i(0);
  function _v70(_v0) {
    return _v0 && Number.isFinite(_v0) ? Math.round(_v0 / 60) : 0;
  }
  function _v71({
    className: _v0 = (0, _v37.createDomName)("usage-progress-bar"),
    title: _v1,
    tip: _v2,
    currentValue: _v3,
    maxValue: _v4
  }) {
    let [_v5, _v6] = (0, _v68.inline)(() => {
        if (!Number.isFinite(_v3) || !Number.isFinite(_v4)) return ["transparent", 0];
        let _v0 = Number((_v3 / _v4 * 100).toFixed(2));
        return _v0 < 70 ? ["fill-brand", _v0] : ["status-destructive-primary", Math.min(_v0, 100)];
      }),
      [_v7, _v8] = (0, _v68.inline)(() => {
        if (!Number.isFinite(_v3)) return ["", 0];
        let _v0 = _v3 % 60;
        return [((_v3 - _v0) / 60).toLocaleString(), _v0];
      }),
      _v9 = (0, _v68.inline)(() => Number.isFinite(_v4) && 0 !== _v4 ? Math.round(_v4 / 60).toLocaleString() : "");
    return (0, _v2.jsxs)(_v12.Flex, {
      direction: "column",
      className: (0, _v37.createDomName)(_v0, "usage-progress-bar"),
      gap: "sm",
      children: [(0, _v2.jsxs)(_v12.Flex, {
        gap: (0, _v15.rem)(4),
        justifyContent: "flex-start",
        alignItems: "flex-end",
        children: [(0, _v2.jsxs)(_v12.Flex, {
          gap: (0, _v15.rem)(2),
          alignItems: "center",
          children: [(0, _v2.jsx)(_v13.Header, {
            className: (0, _v37.createDomName)(_v0, "usage-progress-bar-title"),
            size: "2xs",
            sx: {
              textWrap: "nowrap"
            },
            children: _v1
          }), (0, _v2.jsx)(_v59.CircleTip, {
            width: (0, _v15.rem)(360),
            iconBoxSize: 12,
            as: "span",
            label: _v2
          })]
        }), (0, _v2.jsxs)(_v14.Paragraph, {
          variant: "body-sm",
          marginLeft: "auto",
          paddingLeft: (0, _v15.rem)(4),
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "flex-end",
          gap: (0, _v15.rem)(2),
          children: [(0, _v2.jsx)("span", {
            children: (0, _v35.T_4K_ANALYTICS_TIME_RANGE_START)(_v7, _v8)
          }), " ", (0, _v2.jsx)("span", {
            children: (0, _v35.T_4K_ANALYTICS_TIME_RANGE_END)(_v9)
          })]
        })]
      }), (0, _v2.jsx)(_v10.Box, {
        position: "relative",
        borderRadius: (0, _v15.rem)(4),
        overflow: "hidden",
        background: "fill-component",
        height: (0, _v15.rem)(4),
        children: (0, _v2.jsx)(_v10.Box, {
          position: "absolute",
          height: "100%",
          width: `${_v6}%`,
          background: _v5
        })
      })]
    });
  }
  function _v72({
    id: _v0 = (0, _v37.createDomName)("streaming-4k"),
    className: _v1 = (0, _v37.createDomName)("streaming-4k")
  }) {
    var _v2;
    let _v3,
      _v4,
      _v5,
      _v6,
      _v7,
      {
        sessionInfo: {
          value: _v8
        }
      } = (0, _v3.useManager)(_v30.ComposerSessionManager),
      {
        streamingTime: _v9,
        viewingTime: _v10,
        maxStreamingTime: _v11,
        maxViewingTime: _v12
      } = (_v2 = _v8?.liveQuota, _v3 = _v70(_v2?.hiResStreaming?.remaining), _v4 = _v70(_v2?.hiResStreaming?.maximum), _v5 = (0, _v68.inline)(() => _v3 < 0 ? Math.abs(_v3) + _v4 : Math.max(_v4 - _v3, 0)), _v6 = _v70(_v2?.hiResViewing?.remaining), _v7 = _v70(_v2?.hiResViewing?.maximum), {
        streamingTime: _v5,
        viewingTime: (0, _v68.inline)(() => _v6 < 0 ? Math.abs(_v6) + _v7 : Math.max(_v7 - _v6, 0)),
        maxStreamingTime: _v4,
        maxViewingTime: _v7
      });
    return (0, _v2.jsxs)(_v12.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: (0, _v15.rem)(16),
      children: [(0, _v2.jsxs)(_v14.Paragraph, {
        id: (0, _v37.createDomName)(_v0, "title"),
        className: (0, _v37.createDomName)(_v0, "title"),
        alignItems: "center",
        display: "flex",
        gap: (0, _v15.rem)(4),
        fontWeight: "bold",
        size: "md",
        children: [_v35.T_4K_STREAMING, (0, _v2.jsx)(_v59.CircleTip, {
          width: (0, _v15.rem)(350),
          as: "span",
          label: _v35.T_4K_STREAMING_TOOLTIP
        })]
      }), (0, _v2.jsx)(_v71, {
        title: _v35.T_4K_VIEWING_TIME,
        tip: _v35.T_4K_VIEWING_TIME_TOOLTIP,
        currentValue: _v10,
        maxValue: _v12
      }), (0, _v2.jsx)(_v71, {
        title: _v35.T_4K_STREAMING_TIME,
        tip: _v35.T_4K_STREAMING_TIME_TOOLTIP,
        currentValue: _v9,
        maxValue: _v11
      }), (0, _v2.jsx)(_v14.Paragraph, {
        id: (0, _v37.createDomName)(_v0, "notice"),
        className: (0, _v37.createDomName)(_v0, "notice"),
        variant: "body-sm",
        children: _v35.T_4K_ANALYTICS_NOTICE
      })]
    });
  }
  var _v73 = _v0.i(0),
    _v74 = _v0.i(0),
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  function _v77({
    button: _v0,
    title: _v1,
    description: _v2,
    onClose: _v3
  }) {
    let _v4 = (0, _v76.useColorModeValue)("upsell-secondary", "purple.800");
    return (0, _v2.jsxs)(_v12.Flex, {
      position: "relative",
      direction: "column",
      alignItems: "flex-start",
      borderRadius: (0, _v15.rem)(12),
      padding: (0, _v15.rem)(16),
      gap: (0, _v15.rem)(12),
      background: _v4,
      children: [(0, _v2.jsx)(_v13.Header, {
        size: "sm",
        children: _v1
      }), _v2 ? (0, _v2.jsx)(_v14.Paragraph, {
        size: "md",
        children: _v2
      }) : null, (0, _v2.jsx)(_v54.Button, {
        as: "a",
        role: "button",
        target: _v0?.href ? "_blank" : "_self",
        href: _v0?.href,
        variant: "upsell",
        size: "sm",
        onClick: _v0.onClick,
        children: _v0.label
      }), _v3 ? (0, _v2.jsx)(_v75.CloseButton, {
        position: "absolute",
        right: (0, _v15.rem)(16),
        top: (0, _v15.rem)(16),
        variant: "tertiary",
        size: "xs",
        "aria-label": _v35.T_CLOSE,
        onClick: _v3
      }) : null]
    });
  }
  function _v78({
    onDismiss: _v0
  }) {
    let {
        open: _v1,
        upgradeModal: _v2
      } = function ({
        canOpen: _v0 = !0
      } = {}) {
        return (0, _v73.useUpgradeModal)({
          canOpen: _v0,
          templateType: "enterprise",
          tracking: {
            params: {
              feature: "q_and_a_moderation",
              location: "drawer",
              page: "/manage/event_setting_page/settings",
              upsell_name: "q_and_a_moderation"
            },
            paywallTracking: {
              paywallTrigger: "live_event_4k_streaming_toggle_button",
              paywallLocation: "live_event",
              paywallType: "popup",
              paywallFeature: "live"
            }
          },
          modalConfig: {
            mkcCode: "113177",
            enterpriseTitle: _v74.T_UNLOCK_4K_STREAMING,
            enterpriseSubtitle: _v74.T_DELIVER_LIVE_BROADCASTS,
            customFeaturesList: (0, _v2.jsxs)(_v12.Flex, {
              margin: `${(0, _v15.rem)(8)} 0 0 ${(0, _v15.rem)(16)}`,
              as: "ul",
              direction: "column",
              listStyleType: "disc",
              gap: (0, _v15.rem)(12),
              marginTop: (0, _v15.rem)(8),
              color: "white",
              children: [(0, _v2.jsx)(_v14.Paragraph, {
                as: "li",
                children: _v74.T_PRO_POLISHED_LOOK
              }), (0, _v2.jsx)(_v14.Paragraph, {
                as: "li",
                children: _v74.T_MORE_IMMERSIVE_LIFELIKE_EXP
              })]
            })
          }
        });
      }(),
      _v3 = (0, _v4.useCallback)(() => {
        _v0();
      }, [_v0]);
    return (0, _v2.jsxs)(_v2.Fragment, {
      children: [(0, _v2.jsx)(_v77, {
        button: {
          label: _v35.T_CONTACT_US,
          onClick: _v1
        },
        title: _v74.T_UNLOCK_4K_STREAMING,
        description: _v74.T_STREAM_CRISP_PRO_VIDEOS,
        onClose: _v3
      }), _v2]
    });
  }
  function _v79({
    id: _v0 = (0, _v37.createDomName)("live-settings-production"),
    className: _v1 = (0, _v37.createDomName)("live-settings-production")
  }) {
    let {
        sessionApplicationType: _v2,
        sessionInfo: {
          value: _v3
        },
        permissions: _v4
      } = (0, _v3.useManager)(_v30.ComposerSessionManager),
      {
        settings: {
          value: _v5
        },
        actions: _v6
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      {
        streamMode: _v7,
        liveComposerStatuses: _v8
      } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
      _v9 = (0, _v3.useManager)(_v65.EventAudioTracksManager),
      {
        trackLiveStreamLatencyChanged: _v10
      } = (0, _v38.useLiveStreamBroadcasterTracking)(),
      _v11 = (0, _v69.useLogger)("🥪settings-production"),
      {
        open: _v12,
        upgradeModal: _v13
      } = (0, _v60.useFailsafeUpgradeModal)(),
      {
        open: _v14,
        upgradeModal: _v15
      } = (0, _v61.useUnlimitedStreamUpgradeModal)(),
      [_v16, _v17] = (0, _v64.useTimeBasedDismissableNotification)({
        forceHide: !!_v3?.owner?.capabilities?.hasUhdStreaming,
        storedKey: _v63.localStorageConfig.MARKETING.STREAMING_4K_UPSELL
      }),
      _v18 = (0, _v4.useCallback)(_v0 => {
        if (_v0 !== _v5?.latency) {
          _v11.info("Switching latency:", _v0);
          let _v0 = {
            latency: _v0
          };
          _v0 === _v67.ELatency.LOW && (_v0.autoCcEnabled = !1), _v6.updateLiveEventSettings(_v0, _v34.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS), _v10({
            liveStreamLatency: _v0 === _v67.ELatency.LOW ? "low" : _v0 === _v67.ELatency.FAIL_SAFE ? "fail_safe" : "standard"
          });
        }
      }, [_v5?.latency, _v11, _v6, _v10]),
      _v19 = (0, _v4.useCallback)(() => {
        if (!_v8.isSessionLive) {
          let _v0 = !_v5?.dvr;
          _v11.info("Switching dvr:", _v0), _v6.updateLiveEventSettings({
            dvr: _v0
          }, _v34.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS);
        }
      }, [_v11, _v8.isSessionLive, _v5?.dvr, _v6]),
      _v20 = (0, _v4.useCallback)(() => {
        if (!_v8.isSessionLive) {
          let _v0 = !_v5?.unlimitedDuration;
          _v11.info("Switching unlimited streaming:", _v0), _v6.updateLiveEventSettings({
            unlimitedDuration: _v0,
            ...(_v0 ? {
              disableAutoArchiving: !0
            } : {})
          }, _v34.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS);
        }
      }, [_v8.isSessionLive, _v5?.unlimitedDuration, _v11, _v6]),
      _v21 = (0, _v4.useCallback)(() => {
        if (!_v8.isSessionLive) {
          let _v0 = !_v5?.disableAutoArchiving;
          _v11.info("Switching auto archiving:", _v0), _v6.updateLiveEventSettings({
            disableAutoArchiving: _v0
          }, _v34.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS);
        }
      }, [_v8.isSessionLive, _v5?.disableAutoArchiving, _v11, _v6]),
      _v22 = (0, _v4.useCallback)(() => {
        let _v0 = !_v5?.streamingAutoStop;
        _v11.info("Switching streaming auto stop:", _v0), _v6.updateLiveEventSettings({
          streamingAutoStop: _v0
        }, _v34.EventSettingsManager.EVENT_SETTINGS_PRODUCTION_FIELDS);
      }, [_v5?.streamingAutoStop, _v6, _v11]);
    if (!_v5 || !_v3?.owner?.capabilities) return (0, _v2.jsx)(_v12.Flex, {
      id: (0, _v37.createDomName)(_v0, "loading"),
      className: (0, _v37.createDomName)(_v1, "loading"),
      direction: "column",
      width: "100%",
      gap: (0, _v15.rem)(8),
      children: (0, _v68.range)(4).map(_v0 => (0, _v2.jsx)(_v57.BokehSkeleton, {
        height: (0, _v15.rem)(80),
        borderRadius: (0, _v15.rem)(4)
      }, _v0))
    });
    let {
        latency: _v23,
        preferredStreamMethod: _v24
      } = _v5,
      _v25 = _v2 === _v36.EComposerApplicationType.BROADCASTER,
      _v26 = _v25 && _v7 === _v36.EComposerStreamModeType.RECORD,
      _v27 = !!_v3?.owner?.capabilities?.hasDisableAutoArchiving,
      _v28 = !!_v3?.owner?.capabilities?.hasUnlimitedLiveEventDuration,
      _v29 = !_v26,
      _v30 = (0, _v68.inline)(() => {
        if (_v8.isSessionLive || !_v5?.disableAutoArchiving || !_v3?.owner?.capabilities?.hasUnlimitedLiveEventDuration) return !0;
        let _v0 = !_v5?.unlimitedDuration && _v2 !== _v36.EComposerApplicationType.RTMP;
        return !!(_v5?.dvr && !_v4.canUseExtendedStreamWithDVR || !_v5?.disableAutoArchiving || _v0);
      }),
      _v31 = _v9?.eventLanguages?.value?.secondary?.length ?? 0,
      _v32 = !!(_v5?.dvr && (_v5?.autoCcTranslationEnabled || _v31 > 0)),
      _v33 = !!(_v8.isSessionLive || _v32 || (_v5?.disableAutoArchiving || _v5?.unlimitedDuration) && !_v4.canUseExtendedStreamWithDVR),
      _v34 = !!(_v8.isSessionRequested || _v8.isSessionLive || _v8.isSessionInitializing || !_v27 || _v5.dvr && !_v4.canUseExtendedStreamWithDVR || _v5?.unlimitedDuration);
    return (0, _v2.jsxs)(_v12.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      children: [_v7 === _v36.EComposerStreamModeType.RECORD ? null : (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v62.EventLatency, {
          isMutationAllowed: !1,
          isDisabled: _v8.isSessionLive,
          viewType: "dropdown",
          capabilities: _v3?.owner?.capabilities ?? {},
          streamingMethod: _v24,
          latency: _v23,
          location: _v66.ESettingsLocation.Settings,
          label: (0, _v2.jsxs)(_v12.Flex, {
            alignItems: "center",
            gap: (0, _v15.rem)(4),
            marginBottom: (0, _v15.rem)(8),
            children: [(0, _v2.jsx)(_v13.Header, {
              size: "xs",
              children: _v35.T_LATENCY
            }), (0, _v2.jsx)(_v59.CircleTip, {
              as: "span",
              width: (0, _v15.rem)(300),
              label: _v35.T_LATENCY_TIP,
              color: "text-tertiary"
            })]
          }),
          onLatencyChange: _v18,
          onFailSafeUpsell: _v12
        }), (0, _v2.jsx)(_v51.Divider, {
          borderColor: "stroke",
          marginTop: (0, _v15.rem)(24)
        })]
      }), (0, _v2.jsxs)(_v12.Flex, {
        id: (0, _v37.createDomName)(_v0, "toggles"),
        className: (0, _v37.createDomName)(_v1, "toggles"),
        direction: "column",
        gap: (0, _v15.rem)(16),
        marginTop: (0, _v15.rem)(16),
        children: [_v29 ? (0, _v2.jsx)(_v2.Fragment, {
          children: (0, _v2.jsxs)(_v52.FormLabel, {
            id: (0, _v37.createDomName)(_v0, "archiving-form"),
            htmlFor: (0, _v37.createDomName)(_v0, "archiving"),
            display: "flex",
            cursor: _v34 ? "not-allowed" : "pointer",
            justifyContent: "space-between",
            margin: 0,
            columnGap: (0, _v15.rem)(4),
            children: [(0, _v2.jsxs)(_v14.Paragraph, {
              id: (0, _v37.createDomName)(_v0, "archiving-label"),
              alignItems: "center",
              color: _v34 ? "text-secondary" : "text-primary",
              display: "flex",
              gap: (0, _v15.rem)(4),
              fontWeight: "bold",
              size: "md",
              children: [_v40.translations.recordEventFeature, (0, _v2.jsx)(_v59.CircleTip, {
                as: "span",
                label: _v40.translations.recordEventFeatureTip
              })]
            }), (0, _v2.jsx)(_v58.BokehTooltip, {
              shouldWrapChildren: !1,
              label: (0, _v68.inline)(() => {
                if (_v34 && !(_v8.isSessionLive || _v8.isSessionInitializing)) {
                  if (_v5?.dvr && !_v4.canUseExtendedStreamWithDVR) return _v40.translations.recordEventRequiredForDvr;else if (_v5?.unlimitedDuration) return _v40.translations.recordEventUnlimitedNotSupported;
                }
                return null;
              }),
              children: (0, _v2.jsx)(_v12.Flex, {
                children: (0, _v2.jsx)(_v53.Switch, {
                  id: (0, _v37.createDomName)(_v0, "archiving-switch"),
                  isDisabled: _v34,
                  isChecked: !_v5?.disableAutoArchiving,
                  size: "sm",
                  onChange: _v21
                })
              })
            })]
          })
        }) : null, _v29 && _v5?.disableAutoArchiving ? (0, _v2.jsx)(_v56.Alert, {
          id: (0, _v37.createDomName)(_v0, "archiving-form-notice"),
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          margin: 0,
          children: (0, _v2.jsx)(_v55.AlertDescription, {
            children: _v35.T_ANALYTICS_RECORDING_NOTICE
          })
        }) : null, _v26 ? null : (0, _v2.jsx)(_v2.Fragment, {
          children: (0, _v2.jsxs)(_v52.FormLabel, {
            id: (0, _v37.createDomName)(_v0, "dvr-form"),
            htmlFor: (0, _v37.createDomName)(_v0, "dvr"),
            display: "flex",
            cursor: _v33 ? "not-allowed" : "pointer",
            justifyContent: "space-between",
            margin: 0,
            columnGap: (0, _v15.rem)(4),
            children: [(0, _v2.jsxs)(_v14.Paragraph, {
              id: (0, _v37.createDomName)(_v0, "dvr-label"),
              alignItems: "center",
              color: _v33 ? "text-secondary" : "text-primary",
              display: "flex",
              gap: (0, _v15.rem)(4),
              fontWeight: "bold",
              size: "md",
              children: [_v35.T_DVR, (0, _v2.jsx)(_v59.CircleTip, {
                as: "span",
                label: _v35.T_DVR_TIP
              })]
            }), (0, _v2.jsx)(_v58.BokehTooltip, {
              shouldWrapChildren: !1,
              label: (0, _v68.inline)(() => {
                if (_v33 && !_v8.isSessionLive) if (_v32) return _v35.T_DVR_REQUIRED_FOR_LANGUAGE_FEATURES;else if (_v5?.disableAutoArchiving) return _v35.T_DVR_IS_NOT_SUPPORTED_WITHOUT_ARCHIVE;else if (_v5?.unlimitedDuration) return _v35.T_DVR_IS_NOT_SUPPORTED_WITH_UNLIMITED_DURATION;else return _v35.T_DVR_IS_NOT_SUPPORTED_WITH_LOW_LATENCY;
                return null;
              }),
              children: (0, _v2.jsx)(_v12.Flex, {
                children: (0, _v2.jsx)(_v53.Switch, {
                  id: (0, _v37.createDomName)(_v0, "dvr"),
                  isChecked: _v5?.dvr,
                  isDisabled: _v33,
                  size: "sm",
                  onChange: _v19
                })
              })
            })]
          })
        }), _v25 || _v26 ? null : (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsxs)(_v52.FormLabel, {
            id: (0, _v37.createDomName)(_v0, "unlimited-duration-form"),
            htmlFor: (0, _v37.createDomName)(_v0, "unlimited-duration"),
            display: "flex",
            cursor: _v30 ? "not-allowed" : "pointer",
            justifyContent: "space-between",
            margin: 0,
            columnGap: (0, _v15.rem)(4),
            children: [(0, _v2.jsxs)(_v14.Paragraph, {
              id: (0, _v37.createDomName)(_v0, "unlimited-duration-label"),
              alignItems: "center",
              color: _v30 ? "text-secondary" : "text-primary",
              display: "flex",
              gap: (0, _v15.rem)(4),
              fontWeight: "bold",
              size: "md",
              children: [_v40.translations.unlimitedDurationFeature, (0, _v2.jsx)(_v59.CircleTip, {
                as: "span",
                label: _v40.translations.unlimitedDurationFeatureTip
              })]
            }), (0, _v2.jsx)(_v58.BokehTooltip, {
              shouldWrapChildren: !1,
              label: (0, _v68.inline)(() => {
                if (_v28 && _v30 && !_v8.isSessionLive) {
                  if (_v2 !== _v36.EComposerApplicationType.RTMP) return _v40.translations.unlimitedRequiresRTMP;else if (_v5?.dvr && !_v4.canUseExtendedStreamWithDVR) return _v40.translations.unlimitedNotSupportedWithDvr;else if (!_v5?.disableAutoArchiving) return _v40.translations.unlimitedNotSupportedWithArchive;
                }
                return null;
              }),
              children: (0, _v2.jsx)(_v12.Flex, {
                children: _v28 ? (0, _v2.jsx)(_v53.Switch, {
                  id: (0, _v37.createDomName)(_v0, "unlimited-duration-switch"),
                  isDisabled: _v30,
                  isChecked: _v5?.unlimitedDuration,
                  size: "sm",
                  onChange: _v20
                }) : (0, _v2.jsx)(_v54.Button, {
                  id: (0, _v37.createDomName)(_v0, "unlimited-duration-upsell"),
                  size: "xs",
                  variant: "upsell",
                  onClick: _v14,
                  children: _v40.translations.upgrade
                })
              })
            })]
          }), _v5?.unlimitedDuration ? (0, _v2.jsx)(_v56.Alert, {
            id: (0, _v37.createDomName)(_v0, "extended-stream-srt-notice"),
            className: (0, _v37.createDomName)(_v0, "extended-stream-srt-notice"),
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: 0,
            children: (0, _v2.jsx)(_v55.AlertDescription, {
              children: _v40.translations.extendedStreamSupportSrtNotice
            })
          }) : null]
        }), _v25 ? null : (0, _v2.jsxs)(_v52.FormLabel, {
          id: (0, _v37.createDomName)(_v0, "streaming-auto-stop-form"),
          htmlFor: (0, _v37.createDomName)(_v0, "streaming-auto-stop"),
          display: "flex",
          justifyContent: "space-between",
          margin: 0,
          columnGap: (0, _v15.rem)(4),
          children: [(0, _v2.jsxs)(_v14.Paragraph, {
            id: (0, _v37.createDomName)(_v0, "streaming-auto-stop-label"),
            alignItems: "center",
            display: "flex",
            gap: (0, _v15.rem)(4),
            fontWeight: "bold",
            size: "md",
            children: [_v40.translations.autoStop, (0, _v2.jsx)(_v59.CircleTip, {
              as: "span",
              label: _v40.translations.endEventDirectly
            })]
          }), (0, _v2.jsx)(_v53.Switch, {
            id: (0, _v37.createDomName)(_v0, "streaming-auto-stop-switch"),
            isChecked: _v5?.streamingAutoStop,
            size: "sm",
            onChange: _v22
          })]
        }), _v16 ? (0, _v2.jsx)(_v78, {
          onDismiss: _v17
        }) : null, _v3?.owner?.capabilities?.hasUhdStreaming ? (0, _v2.jsxs)(_v2.Fragment, {
          children: [(0, _v2.jsx)(_v51.Divider, {
            borderColor: "stroke",
            marginY: (0, _v15.rem)(4)
          }), (0, _v2.jsx)(_v72, {})]
        }) : null]
      }), _v15, _v13]
    });
  }
  var _v80 = _v0.i(0),
    _v81 = _v0.i(0);
  let _v82 = (0, _v4.lazy)(() => _v0.A(0).then(_v0 => ({
      default: _v0.LiveRegistrationTab
    }))),
    _v83 = (0, _v4.lazy)(() => _v0.A(0).then(_v0 => ({
      default: _v0.RegistrationToast
    })));
  function _v84() {
    let {
        sessionInfo: {
          value: _v0
        },
        sessionId: _v1
      } = (0, _v3.useManager)(_v30.ComposerSessionManager),
      {
        liveComposerStatusGetters: _v2
      } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
      {
        settings: _v3,
        actions: {
          updateLiveEventSettings: _v4
        }
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      _v5 = (0, _v4.useMemo)(() => _v3.value?.schedule ?? null, [_v3.value?.schedule]),
      _v6 = (0, _v80.useToast)(),
      _v7 = _v0?.registrationFormLink?.uri,
      _v8 = _v0?.registrationEmailLink?.uri,
      _v9 = _v0?.registrationTableLink?.uri,
      _v10 = _v2.isStreaming(),
      _v11 = !!_v0?.metadata?.interactions?.completeEvent,
      _v12 = (0, _v31.useSessionOwnerId)(),
      {
        trackLiveStreamRegistrationToggled: _v13,
        trackLiveStreamRegistrationSectionClicked: _v14
      } = (0, _v38.useLiveStreamBroadcasterTracking)(),
      _v15 = (0, _v4.useCallback)(_v0 => {
        _v4({
          schedule: _v0
        });
      }, [_v4]),
      _v16 = (0, _v4.useCallback)(_v0 => {
        _v4({
          hasRegistration: _v0,
          schedule: {
            ..._v5,
            rrule: void 0
          }
        }).then(() => {
          _v6({
            status: "neutral",
            duration: 0,
            title: "",
            render: () => (0, _v2.jsx)(_v4.Suspense, {
              fallback: null,
              children: (0, _v2.jsx)(_v83, {
                hasRegistration: _v0,
                onClickUndo: () => {
                  _v6.closeAll(), _v16(!_v0);
                }
              })
            })
          });
        }), _v13({
          liveStreamNewStatus: _v0
        });
      }, [_v5, _v13, _v4]);
    return (0, _v2.jsx)(_v4.Suspense, {
      fallback: null,
      children: (0, _v2.jsx)(_v82, {
        isRegistrationOn: _v3.value?.hasRegistration,
        setIsRegistrationOn: _v16,
        sessionId: Number(_v1),
        registrationFormLink: _v7,
        registrationEmailLink: _v8,
        registrationTableLink: _v9,
        bpTracking: {
          onCustomizeRegistrantsClick: () => {
            _v14({
              liveStreamRegistrationSection: "registrants"
            });
          },
          onCustomizeFormClick: () => {
            _v14({
              liveStreamRegistrationSection: "form"
            });
          },
          onCustomizeEmailClick: () => {
            _v14({
              liveStreamRegistrationSection: "email"
            });
          }
        },
        schedule: _v5,
        onScheduleChange: _v15,
        status: _v3.value?.status || (_v10 ? _v66.ENTITY_STATUS.STARTED : _v66.ENTITY_STATUS.EMPTY),
        canCompleteEvent: !_v10 && _v11,
        isLoading: _v3.isLoading,
        eventOwnerUserId: _v12,
        padding: 0,
        paddingUpsell: 0,
        getBreadCrumb: _v0 => (0, _v2.jsx)(_v81.LiveBreadcrumb, {
          isLive: _v10,
          title: _v0,
          sessionInfo: _v0
        })
      })
    });
  }
  var _v85 = _v0.i(0);
  function _v86() {
    let {
        settings: _v0,
        actions: {
          updateLiveEventSettings: _v1
        }
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      {
        trackLiveStreamScheduleConfigured: _v2
      } = (0, _v38.useLiveStreamBroadcasterTracking)(),
      _v3 = (0, _v4.useMemo)(() => _v0.value?.schedule ?? null, [_v0.value?.schedule]),
      _v4 = (0, _v4.useCallback)(_v0 => {
        _v1({
          schedule: _v0
        }, ["schedule"], !0), _v2({
          liveStreamHasStartDate: !!_v0?.startTime,
          liveStreamHasEndDate: !!_v0?.endTime,
          liveStreamRecurringEvent: !!_v0?.rrule
        });
      }, [_v1, _v2]);
    return (0, _v2.jsx)(_v85.EventSchedule, {
      isLoading: _v0.isLoading,
      isMutationAllowed: !0,
      isVertical: !0,
      isVerticalDate: !0,
      isRecurringDisabled: _v0.value?.hasRegistration,
      schedule: _v3,
      onChange: _v4
    });
  }
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0),
    _v102 = _v0.i(0),
    _v103 = _v0.i(0),
    _v104 = _v0.i(0),
    _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0);
  function _v111({
    id: _v0,
    className: _v1,
    value: _v2,
    onSelect: _v3,
    onRemove: _v4,
    options: _v5
  }) {
    let [_v6, _v7] = (0, _v4.useState)(_v2);
    (0, _v4.useEffect)(() => {
      _v7(_v2);
    }, [_v2]);
    let _v8 = (0, _v4.useCallback)(() => {
        _v6 && (_v7(""), _v4?.(_v6));
      }, [_v6, _v4]),
      _v9 = (0, _v4.useCallback)(_v0 => _v3(_v0.value[0], _v2), [_v3, _v2]);
    return (0, _v2.jsxs)(_v12.Flex, {
      gap: (0, _v15.rem)(4),
      id: _v0,
      className: _v1,
      children: [(0, _v2.jsx)(_v10.Box, {
        width: "100%",
        sx: {
          "& [data-disabled]": {
            pointerEvents: "auto"
          }
        },
        children: (0, _v2.jsx)(_v105.Select, {
          size: "md",
          placeholder: _v35.T_SELECT_LANGUAGE,
          value: _v6 ? [_v6] : [],
          items: _v5,
          onValueChange: _v9
        })
      }), (0, _v2.jsx)(_v109.IconButton, {
        isDisabled: !_v4,
        "aria-label": _v6 ? (0, _v35.T_REMOVE_LANGUAGE)(_v6) : "",
        size: "md",
        variant: "secondary",
        icon: (0, _v2.jsx)(_v110.CloseXSmall, {}),
        onClick: _v8
      })]
    });
  }
  function _v112({
    id: _v0 = (0, _v37.createDomName)("tracks-management-modal"),
    className: _v1 = (0, _v37.createDomName)("tracks-management-modal"),
    onClose: _v2
  }) {
    let {
        panelActions: _v3
      } = (0, _v3.useManager)(_v97.PanelsManager),
      {
        audioTracksActions: _v4,
        eventLanguages: {
          value: _v5,
          isLoading: _v6
        },
        availableLanguages: {
          value: _v7
        }
      } = (0, _v3.useManager)(_v65.EventAudioTracksManager),
      {
        sessionInfo: {
          value: _v8
        }
      } = (0, _v3.useManager)(_v30.ComposerSessionManager),
      {
        liveComposerStatuses: _v9
      } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
      {
        settings: {
          value: _v10
        }
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      [_v11, _v12] = (0, _v4.useState)(_v5?.primary ?? _v108.liveApplicationConfig.AUDIO_TRACKS.DEFAULT_LANGUAGE),
      [_v13, _v14] = (0, _v4.useState)(_v5?.secondary ?? []),
      _v15 = (0, _v39.useIsVpaas)(),
      _v16 = _v8?.liveQuota?.maxEventAudioTracks ?? _v108.liveApplicationConfig.AUDIO_TRACKS.DEFAULT_LANGUAGES_COUNT,
      _v17 = _v9.isSessionLive,
      _v18 = !!(_v9.isSessionActive && _v10?.rtmpPreview),
      _v19 = !_v15 && _v13.length >= _v16 && !_v8?.owner?.capabilities?.hasEnterprise,
      _v20 = !_v15 && _v16 <= _v13.length && !!_v8?.owner?.capabilities?.hasEnterprise,
      _v21 = (0, _v4.useMemo)(() => {
        let _v0 = new Set([..._v13, _v11]);
        return (_v7 || []).map(_v0 => ({
          value: _v0.code,
          label: _v0.name,
          disabled: _v0.has(_v0.code)
        }));
      }, [_v13, _v11, _v7]),
      _v22 = (0, _v4.useCallback)(_v0 => {
        _v14(_v0 => [..._v0, _v0]);
      }, [_v14]),
      _v23 = (0, _v4.useCallback)((_v0, _v1) => {
        _v14(_v0 => _v0.map(_v0 => _v0 === _v1 ? _v0 : _v0));
      }, [_v14]),
      _v24 = (0, _v4.useCallback)(_v0 => {
        _v14(_v0 => _v0.filter(_v0 => _v0 !== _v0));
      }, [_v14]),
      _v25 = (0, _v4.useCallback)(_v0 => {
        _v12(_v0.value[0]);
      }, []),
      _v26 = (0, _v4.useCallback)(async () => {
        await _v4.updateEventLanguages({
          primaryAudioTrack: _v11,
          audioTracks: _v13
        }), _v2(), _v3.setRightPanel(_v13.length > 0 ? _v95.ERightPanelId.AUDIO_TRACKS : _v95.ERightPanelId.EVENT_SETTINGS);
      }, [_v4, _v13, _v11, _v2, _v3]);
    return (0, _v2.jsxs)(_v100.Modal, {
      isOpen: !0,
      onClose: _v2,
      children: [(0, _v2.jsx)(_v104.ModalOverlay, {}), (0, _v2.jsxs)(_v102.ModalContent, {
        id: _v0,
        className: _v1,
        minWidth: (0, _v15.rem)(480),
        children: [(0, _v2.jsx)(_v99.ModalHeader, {
          children: _v35.T_ADD_LANGUAGE_STREAMS
        }), (0, _v2.jsx)(_v101.ModalCloseButton, {}), (0, _v2.jsxs)(_v98.ModalBody, {
          gap: (0, _v15.rem)(16),
          display: "flex",
          flexDirection: "column",
          children: [(0, _v2.jsx)(_v14.Paragraph, {
            size: "md",
            children: (0, _v35.T_SELECT_LANGUAGES_TO_CREATE)(_v28.vimeoConfig.SUPPORT.MULTIPLE_AUDIO_TRACKS_LIVE)
          }), _v18 || _v17 ? (0, _v2.jsx)(_v56.Alert, {
            id: (0, _v37.createDomName)(_v0, "notice"),
            className: (0, _v37.createDomName)(_v1, "notice"),
            width: "auto",
            alignItems: "center",
            marginTop: (0, _v15.rem)(8),
            paddingY: (0, _v15.rem)(8),
            children: (0, _v2.jsx)(_v55.AlertDescription, {
              children: (0, _v2.jsx)(_v92.Text, {
                variant: "body-sm",
                children: _v35.T_PRIMARY_TRACK_CANNOT_BE_CHANGED_WHILE_SESSION_ACTIVE
              })
            })
          }) : null, (0, _v2.jsx)(_v10.Box, {
            sx: {
              "& [data-disabled]": {
                pointerEvents: "auto"
              }
            },
            children: (0, _v2.jsx)(_v105.Select, {
              id: (0, _v37.createDomName)(_v0, "primary-select"),
              className: (0, _v37.createDomName)(_v1, "primary-select"),
              size: "md",
              placeholder: _v35.T_SELECT_LANGUAGE,
              value: _v11 ? [_v11] : [],
              label: _v35.T_PRIMARY_LANGUAGE,
              items: _v21,
              onValueChange: _v25,
              disabled: _v18 || _v17
            })
          }), _v11 ? (0, _v2.jsxs)(_v12.Flex, {
            direction: "column",
            gap: (0, _v15.rem)(4),
            children: [(0, _v2.jsxs)(_v12.Flex, {
              gap: (0, _v15.rem)(4),
              children: [(0, _v2.jsx)(_v14.Paragraph, {
                size: "lg",
                children: (0, _v35.T_INTERPRETER_LANGUAGES_RANGE)(_v13.length, _v16)
              }), _v19 ? (0, _v2.jsx)(_v106.Link, {
                target: "_blank",
                rel: "noreferrer",
                marginLeft: "auto",
                href: _v28.vimeoConfig.SUPPORT.UPGRADE_YOUR_PLAN_DIRECT,
                children: (0, _v2.jsx)(_v107.Badge, {
                  cursor: "pointer",
                  size: "sm",
                  color: "white",
                  background: "upsell-primary",
                  children: _v74.T_UPGRADE_FOR_MORE
                })
              }) : null]
            }), (0, _v2.jsxs)(_v12.Flex, {
              direction: "column",
              gap: (0, _v15.rem)(12),
              children: [_v13.map((_v0, _v1) => (0, _v2.jsx)(_v111, {
                id: (0, _v37.createDomName)(_v0, "language-select", _v1),
                className: (0, _v37.createDomName)(_v1, "language-select"),
                options: _v21,
                value: _v0,
                onRemove: _v24,
                onSelect: _v23
              }, _v0)), _v13.length < _v16 ? (0, _v2.jsx)(_v111, {
                id: (0, _v37.createDomName)(_v0, "language-select-new"),
                className: (0, _v37.createDomName)(_v1, "language-select-new"),
                onSelect: _v22,
                options: _v21
              }) : null, _v20 ? (0, _v2.jsx)(_v14.Paragraph, {
                size: "md",
                children: _v35.T_TO_INCREASE_LIMITS_MULTI_TRACKS
              }) : null]
            })]
          }) : null]
        }), (0, _v2.jsxs)(_v103.ModalFooter, {
          children: [(0, _v2.jsx)(_v54.Button, {
            variant: "secondary",
            onClick: _v2,
            children: _v35.T_CANCEL
          }), (0, _v2.jsx)(_v54.Button, {
            variant: "primary",
            isDisabled: _v17,
            isLoading: _v6,
            onClick: _v26,
            children: _v35.T_SAVE
          })]
        })]
      })]
    });
  }
  function _v113({
    id: _v0 = (0, _v37.createDomName)("audio-tracks-settings"),
    className: _v1 = (0, _v37.createDomName)("audio-tracks-settings")
  }) {
    let {
        panelActions: _v2
      } = (0, _v3.useManager)(_v97.PanelsManager),
      {
        eventLanguages: {
          value: _v3
        }
      } = (0, _v3.useManager)(_v65.EventAudioTracksManager),
      {
        liveComposerStatuses: _v4
      } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
      {
        settings: {
          value: _v5
        }
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      _v6 = _v4.isSessionLive,
      _v7 = !!_v5?.dvr,
      _v8 = _v6 ? _v35.T_U_CANT_ADD_REMOVE_DURING_BROADCAST : _v7 ? "" : _v35.T_FEATURE_DISABLED_WHEN_DVR_DISABLED,
      _v9 = (0, _v4.useCallback)(() => {
        _v2.setRightPanel(_v95.ERightPanelId.AUDIO_TRACKS);
      }, [_v2]),
      [_v10, _v11] = (0, _v64.useTimeBasedDismissableNotification)({
        storedKey: _v63.localStorageConfig.MARKETING.MULTI_TRACK_INFO_NOTICE
      }),
      _v12 = (0, _v96.useLiveLocalizationTrialExpiry)(),
      {
        isOpen: _v13,
        onOpen: _v14,
        onClose: _v15
      } = (0, _v93.useDisclosure)();
    return (0, _v2.jsxs)(_v12.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: (0, _v15.rem)(8),
      children: [(0, _v2.jsxs)(_v13.Header, {
        id: (0, _v37.createDomName)(_v0, "language-streams-label"),
        className: (0, _v37.createDomName)(_v1, "language-streams-label"),
        alignItems: "center",
        display: "flex",
        gap: (0, _v15.rem)(4),
        fontWeight: "bold",
        size: "xs",
        children: [_v35.T_LANGUAGE_STREAMS, (0, _v2.jsx)(_v59.CircleTip, {
          as: "span",
          label: _v35.T_CREATE_RTMP_STREAMS_TOOLTIP
        }), _v12 ? (0, _v2.jsx)(_v94.ExclusiveAccessBadge, {}) : null]
      }), _v3?.secondary?.length ? (0, _v2.jsx)(_v54.Button, {
        onClick: _v9,
        size: "sm",
        variant: "secondary",
        children: _v35.T_VIEW_STREAMS
      }) : (0, _v2.jsx)(_v58.BokehTooltip, {
        label: _v8,
        children: (0, _v2.jsx)(_v54.Button, {
          width: "100%",
          isDisabled: _v6 || !_v7,
          size: "sm",
          variant: "secondary",
          onClick: _v14,
          children: _v35.T_ADD_STREAM
        })
      }), _v10 ? (0, _v2.jsx)(_v56.Alert, {
        id: (0, _v37.createDomName)(_v0, "notice"),
        className: (0, _v37.createDomName)(_v1, "notice"),
        width: "auto",
        alignItems: "center",
        marginTop: (0, _v15.rem)(8),
        paddingY: (0, _v15.rem)(8),
        onClose: _v11,
        children: (0, _v2.jsx)(_v55.AlertDescription, {
          children: (0, _v2.jsx)(_v92.Text, {
            href: _v28.vimeoConfig.SUPPORT.MULTIPLE_AUDIO_TRACKS_LIVE,
            target: "_blank",
            variant: "body-sm",
            textDecoration: "underline",
            as: "a",
            children: _v35.T_SETTING_UP_STREAMS
          })
        })
      }) : null, _v13 ? (0, _v2.jsx)(_v112, {
        onClose: _v15
      }) : null]
    });
  }
  _v0.s(["TracksManagementModal", 0, _v112], 0);
  var _v114 = _v0.i(0),
    _v115 = ((_v1 = {}).RTMPS = "RTMPS", _v1.RTMP = "RTMP", _v1.SRT = "SRT", _v1);
  let _v116 = ["RTMPS", "RTMP", "SRT"],
    _v117 = "•".repeat(36),
    _v118 = "/help/sso?redirect_to=https://help.vimeo.com/hc/en-us/articles/34702537912465/";
  function _v119() {
    let {
        initialState: {
          sessionType: _v0,
          sessionId: _v1
        }
      } = (0, _v26.useLiveGlobals)(),
      _v2 = `${_v63.localStorageConfig.LIVE.PREFERRED_ENCODER_MODE}-${_v0}-${_v1}`,
      [_v3, _v4] = (0, _v4.useState)(() => (0, _v114.getFromLocalStorage)(_v2) ?? 0),
      _v5 = (0, _v4.useCallback)(_v0 => {
        _v4(_v0), (0, _v114.setLocalStorageItem)(_v2, _v0);
      }, [_v2]),
      _v6 = _v116[_v3] ?? 0;
    return {
      tabIndex: _v3,
      setTabIndex: _v5,
      selectedMode: _v6
    };
  }
  _v0.s(["EEncoderMode", () => _v115, "ENCODER_MODE_TAB_ORDER", 0, _v116, "SECRET_STREAM_KEY_VALUE", 0, _v117, "SRT_INFO_LINK", 0, _v118], 0), _v0.s(["useEncoderTabState", 0, _v119], 0);
  var _v120 = _v0.i(0);
  let _v121 = "•".repeat(36);
  var _v122 = _v0.i(0),
    _v123 = _v0.i(0);
  function _v124({
    id: _v0 = (0, _v37.createDomName)("stream-connection-info"),
    className: _v1 = (0, _v37.createDomName)("stream-connection-info"),
    url: _v2,
    copiedUrlMessage: _v3,
    streamKey: _v4,
    keyLabel: _v5,
    canUseBackupStream: _v6,
    forceHide: _v7,
    keyBackup: _v8,
    copiedStreamKeyMessage: _v9,
    copiedBackupStreamKeyMessage: _v10,
    onCopyUrl: _v11,
    onCopyKey: _v12,
    onCopyBackupKey: _v13
  }) {
    let _v14 = (0, _v122.useIsLiveDemoSubscription)(),
      _v15 = (0, _v39.useIsVpaas)(),
      {
        open: _v16,
        upgradeModal: _v17
      } = function ({
        canOpen: _v0 = !0
      } = {}) {
        return (0, _v73.useUpgradeModal)({
          canOpen: _v0,
          modalConfig: {
            mkcCode: "110461",
            enterpriseTitle: _v74.T_GO_LIVE_WITH_PEACE_OF_MIND,
            enterpriseSubtitle: _v74.T_ADD_BACKUP_STREAM_IN_CASE_OF_DOWN,
            customFeaturesList: (0, _v2.jsx)(_v123.UpsellFeaturesList, {
              featuresList: _v74.T_BACKUP_STREAM_UPSELL_FEATURES
            })
          },
          templateType: "enterprise",
          tracking: {
            params: {
              page: "live_event_production_settings",
              target: "enterprise_contact_us_page",
              feature: "live_event_settings",
              upsell_name: "backup_stream"
            },
            paywallTracking: {
              paywallTrigger: "live_event_backup_stream_toggle_button",
              paywallLocation: "live_event",
              paywallType: "popup",
              paywallFeature: "live"
            }
          }
        });
      }(),
      _v18 = (0, _v4.useCallback)(_v0 => {
        _v0.preventDefault(), _v16();
      }, [_v16]);
    return (0, _v2.jsxs)(_v12.Flex, {
      direction: "column",
      gap: (0, _v15.rem)(16),
      children: [_v2 ? (0, _v2.jsx)(_v120.CopyField, {
        id: (0, _v37.createDomName)(_v0, "url"),
        className: (0, _v37.createDomName)(_v1, "url"),
        title: (0, _v2.jsx)(_v13.Header, {
          size: "xs",
          children: _v35.T_STREAM_URL
        }),
        value: _v2,
        placeholder: _v121,
        copiedMessage: _v3,
        size: "sm",
        onCopyClick: _v11
      }) : null, _v4 ? (0, _v2.jsxs)(_v2.Fragment, {
        children: [(0, _v2.jsx)(_v120.CopyField, {
          id: (0, _v37.createDomName)(_v0, "key"),
          className: (0, _v37.createDomName)(_v1, "key"),
          isPassword: !0,
          title: (0, _v2.jsx)(_v13.Header, {
            size: "xs",
            children: (0, _v35.T_STREAM_ID)(_v5)
          }),
          value: _v4,
          placeholder: _v121,
          copiedMessage: _v9 ?? (0, _v35.T_COPIED_STREAM_ID)(_v5),
          size: "sm",
          onCopyClick: _v12
        }), (0, _v2.jsx)(_v120.CopyField, {
          id: (0, _v37.createDomName)(_v0, "backup-key"),
          className: (0, _v37.createDomName)(_v1, "backup-key"),
          isPassword: !0,
          isDisabled: !_v6,
          title: (0, _v2.jsxs)(_v12.Flex, {
            alignItems: "center",
            gap: (0, _v15.rem)(4),
            width: "100%",
            children: [(0, _v2.jsx)(_v13.Header, {
              size: "xs",
              children: (0, _v35.T_BACKUP_STREAM_ID)(_v5)
            }), (0, _v2.jsx)(_v59.CircleTip, {
              as: "span",
              label: _v35.T_AUTOMATICALLY_USED_IF_YOU_PRIMARY_STREAM_FAILS
            }), _v15 || _v14 || _v6 || _v7 ? null : (0, _v2.jsx)(_v107.Badge, {
              cursor: "pointer",
              size: "sm",
              color: "white",
              background: "upsell-primary",
              onClick: _v18,
              marginLeft: "auto",
              children: _v35.T_UPGRADE
            })]
          }),
          value: _v8,
          placeholder: _v121,
          copiedMessage: _v6 ? _v10 ?? (0, _v35.T_COPIED_BACKUP_STREAM_ID)(_v5) : _v35.T_PLEASE_CONTACT_US_TO_UPGRADE_PLAN,
          size: "sm",
          onCopyClick: _v13
        })]
      }) : null, _v17]
    });
  }
  _v0.s(["StreamConnectionInfo", 0, _v124], 0);
  var _v125 = _v0.i(0),
    _v126 = _v0.i(0);
  function _v127({
    id: _v0 = (0, _v37.createDomName)("live-encoder-mode-panel"),
    className: _v1 = (0, _v37.createDomName)("live-encoder-mode-panel"),
    mode: _v2
  }) {
    let {
      url: _v3,
      canUseBackupStream: _v4,
      canUseEncryption: _v5,
      keyBackup: _v6,
      key: _v7,
      keyLabel: _v8,
      encryptionPassphrase: _v9,
      isLoading: _v10,
      isEncryptionEnabled: _v11,
      isEncryptionToggleDisabled: _v12,
      infoNoticeText: _v13,
      onCopyUrl: _v14,
      onCopyKey: _v15,
      onCopyBackupKey: _v16,
      onCopyEncryptionPassphrase: _v17,
      onToggleEncryption: _v18
    } = function ({
      encoderMode: _v0
    }) {
      let {
          settings: {
            value: _v1,
            isLoading: _v2
          },
          actions: _v3
        } = (0, _v3.useManager)(_v34.EventSettingsManager),
        {
          sessionInfo: {
            value: _v4
          }
        } = (0, _v3.useManager)(_v30.ComposerSessionManager),
        {
          liveComposerStatuses: _v5
        } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
        _v6 = _v1?.latency === _v67.ELatency.FAIL_SAFE,
        _v7 = !!_v4?.owner?.capabilities?.canUseBackupStream,
        _v8 = _v0 === _v115.SRT,
        _v9 = _v5.isSessionRequested || _v5.isSessionUpdating || _v5.isSessionActive,
        _v10 = _v1?.rtmpLink ?? "",
        _v11 = _v1?.rtmpsLink ?? "",
        _v12 = _v1?.srtLink ?? "",
        _v13 = _v1?.streamKey ?? "",
        _v14 = _v7 ? `${_v13}_backup` : _v117,
        _v15 = _v0 === _v115.SRT ? _v1?.srtEncryptionEnabled : null,
        _v16 = _v0 === _v115.SRT ? _v1?.srtPassphrase : null,
        _v17 = (0, _v4.useCallback)(() => {
          switch (_v0) {
            case _v115.RTMP:
              _v6 ? (0, _v125.copyTextToClipboard)(_v28.vimeoConfig.PATH.FAIL_SAFE_RTMP_URL) : (0, _v125.copyTextToClipboard)(_v10);
              return;
            case _v115.RTMPS:
              (0, _v125.copyTextToClipboard)(_v11);
              return;
            case _v115.SRT:
              (0, _v125.copyTextToClipboard)(_v12);
              return;
          }
        }, [_v0, _v6, _v10, _v11, _v12]),
        _v18 = (0, _v4.useCallback)(() => {
          switch (_v0) {
            case _v115.RTMP:
            case _v115.RTMPS:
            case _v115.SRT:
              (0, _v125.copyTextToClipboard)(_v13);
              return;
          }
        }, [_v0, _v13]),
        _v19 = (0, _v4.useCallback)(() => {
          if (_v7) switch (_v0) {
            case _v115.RTMP:
            case _v115.RTMPS:
            case _v115.SRT:
              (0, _v125.copyTextToClipboard)(_v14);
              return;
          }
        }, [_v7, _v0, _v14]),
        _v20 = (0, _v4.useCallback)(() => {
          switch (_v0) {
            case _v115.RTMP:
            case _v115.RTMPS:
              throw new _v126.LiveError("Unexpected encryption passphrase toggle.");
            case _v115.SRT:
              _v3.updateLiveEventSettings({
                srtEncryptionEnabled: !_v15
              }, ["srtEncryptionEnabled", "srtPassphrase"], !0);
              return;
          }
        }, [_v3, _v0, _v15]),
        _v21 = (0, _v4.useCallback)(() => {
          switch (_v0) {
            case _v115.RTMP:
            case _v115.RTMPS:
              throw new _v126.LiveError("Unexpected encryption passphrase copy.");
            case _v115.SRT:
              _v16 && (0, _v125.copyTextToClipboard)(_v16);
              return;
          }
        }, [_v0, _v16]);
      switch (_v0) {
        case _v115.RTMP:
          return {
            url: _v6 ? _v28.vimeoConfig.PATH.FAIL_SAFE_RTMP_URL : _v10,
            key: _v13,
            keyBackup: _v14,
            isLoading: _v2,
            isEncryptionEnabled: _v15,
            encryptionPassphrase: _v16,
            infoNoticeText: null,
            keyLabel: _v40.translations.key,
            canUseBackupStream: _v7,
            canUseEncryption: _v8,
            isEncryptionToggleDisabled: _v9,
            onCopyUrl: _v17,
            onCopyKey: _v18,
            onCopyBackupKey: _v19,
            onToggleEncryption: _v20,
            onCopyEncryptionPassphrase: _v21
          };
        case _v115.RTMPS:
          return {
            url: _v11,
            key: _v13,
            keyBackup: _v14,
            isLoading: _v2,
            isEncryptionEnabled: _v15,
            encryptionPassphrase: _v16,
            infoNoticeText: _v6 ? _v40.translations.protocolNotSupportedNotice(_v0) : void 0,
            keyLabel: _v40.translations.key,
            canUseBackupStream: _v7,
            canUseEncryption: _v8,
            isEncryptionToggleDisabled: _v9,
            onCopyUrl: _v17,
            onCopyKey: _v18,
            onCopyBackupKey: _v19,
            onToggleEncryption: _v20,
            onCopyEncryptionPassphrase: _v21
          };
        case _v115.SRT:
          return {
            url: _v12,
            key: _v13,
            keyBackup: _v14,
            isLoading: _v2,
            isEncryptionEnabled: _v15,
            encryptionPassphrase: _v16,
            infoNoticeText: _v6 ? _v40.translations.protocolNotSupportedNotice(_v0) : _v40.translations.srtHelpNotification(_v118),
            keyLabel: _v40.translations.id,
            canUseBackupStream: _v7,
            canUseEncryption: _v8,
            isEncryptionToggleDisabled: _v9,
            onCopyUrl: _v17,
            onCopyKey: _v18,
            onCopyBackupKey: _v19,
            onToggleEncryption: _v20,
            onCopyEncryptionPassphrase: _v21
          };
      }
    }({
      encoderMode: _v2
    });
    return (0, _v2.jsxs)(_v12.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: (0, _v15.rem)(16),
      children: [_v13 ? (0, _v2.jsx)(_v56.Alert, {
        id: (0, _v37.createDomName)(_v0, "notice"),
        className: (0, _v37.createDomName)(_v1, "notice"),
        width: "auto",
        alignItems: "center",
        paddingY: (0, _v15.rem)(8),
        children: (0, _v2.jsx)(_v55.AlertDescription, {
          children: _v13
        })
      }) : null, (0, _v2.jsx)(_v124, {
        url: _v3,
        copiedUrlMessage: (0, _v35.T_COPIED_URL)(_v2),
        streamKey: _v7,
        keyLabel: _v8,
        canUseBackupStream: _v4,
        forceHide: _v2 === _v115.SRT,
        keyBackup: _v6,
        onCopyUrl: _v14,
        onCopyKey: _v15,
        onCopyBackupKey: _v16
      }), _v5 ? (0, _v2.jsxs)(_v52.FormLabel, {
        id: (0, _v37.createDomName)(_v0, "encryption-form"),
        className: (0, _v37.createDomName)(_v1, "encryption-form"),
        display: "flex",
        justifyContent: "space-between",
        margin: 0,
        columnGap: (0, _v15.rem)(4),
        children: [(0, _v2.jsxs)(_v13.Header, {
          id: (0, _v37.createDomName)(_v0, "encryption-label"),
          className: (0, _v37.createDomName)(_v1, "encryption-label"),
          alignItems: "center",
          display: "flex",
          gap: (0, _v15.rem)(4),
          fontWeight: "bold",
          size: "xs",
          children: [_v35.T_ENCRYPTION, (0, _v2.jsx)(_v59.CircleTip, {
            as: "span",
            label: _v35.T_ENCRYPTION_PROTECT_STREAM
          })]
        }), (0, _v2.jsx)(_v53.Switch, {
          id: (0, _v37.createDomName)(_v0, "encryption-switch"),
          className: (0, _v37.createDomName)(_v1, "encryption-switch"),
          isDisabled: _v10 || _v12,
          isChecked: !!_v11,
          size: "sm",
          onChange: _v18
        })]
      }) : null, _v5 && _v11 && _v9 ? (0, _v2.jsx)(_v10.Box, {
        width: "100%",
        marginTop: (0, _v15.rem)(8),
        children: (0, _v2.jsx)(_v120.CopyField, {
          id: (0, _v37.createDomName)(_v0, "encryption-passphrase"),
          className: (0, _v37.createDomName)(_v1, "encryption-passphrase"),
          title: (0, _v2.jsx)(_v13.Header, {
            size: "xs",
            children: _v35.T_PASSPHRASE
          }),
          value: _v9,
          placeholder: _v117,
          isPassword: !0,
          copiedMessage: _v35.T_COPIED_PASSPHRASE,
          size: "sm",
          onCopyClick: _v17
        })
      }) : null]
    });
  }
  function _v128({
    id: _v0 = (0, _v37.createDomName)("encoder-mode-panels"),
    className: _v1 = (0, _v37.createDomName)("encoder-mode-panels")
  }) {
    let {
        permissions: {
          hasAudioTracksManagement: _v2
        }
      } = (0, _v3.useManager)(_v30.ComposerSessionManager),
      _v3 = (0, _v4.useMemo)(() => [{
        label: _v35.T_RTMPS,
        content: _v2 ? (0, _v2.jsxs)(_v12.Flex, {
          direction: "column",
          gap: (0, _v15.rem)(16),
          children: [(0, _v2.jsx)(_v127, {
            mode: _v115.RTMPS
          }), (0, _v2.jsx)(_v113, {})]
        }) : (0, _v2.jsx)(_v127, {
          mode: _v115.RTMPS
        }),
        id: _v115.RTMPS
      }, {
        label: _v35.T_RTMP,
        content: _v2 ? (0, _v2.jsxs)(_v12.Flex, {
          direction: "column",
          gap: (0, _v15.rem)(16),
          children: [(0, _v2.jsx)(_v127, {
            mode: _v115.RTMP
          }), (0, _v2.jsx)(_v113, {})]
        }) : (0, _v2.jsx)(_v127, {
          mode: _v115.RTMP
        }),
        id: _v115.RTMP
      }, {
        label: _v35.T_SRT,
        content: (0, _v2.jsx)(_v127, {
          mode: _v115.SRT
        }),
        id: _v115.SRT
      }], [_v2]),
      {
        tabIndex: _v4,
        setTabIndex: _v5
      } = _v119();
    return (0, _v2.jsxs)(_v88.Tabs, {
      id: (0, _v37.createDomName)(_v0, "tabs"),
      className: (0, _v37.createDomName)(_v1, "tabs"),
      size: "sm",
      defaultIndex: _v4,
      onChange: _v5,
      isLazy: !0,
      children: [(0, _v2.jsxs)(_v89.TabList, {
        children: [_v3.map(_v0 => (0, _v2.jsx)(_v87.Tab, {
          id: (0, _v37.createDomName)(_v0.id, "tab"),
          children: _v0.label
        }, _v0.id)), (0, _v2.jsx)(_v88.TabIndicator, {})]
      }), (0, _v2.jsx)(_v91.TabPanels, {
        id: (0, _v37.createDomName)(_v0, "panel"),
        height: "100%",
        children: _v3.map(_v0 => (0, _v2.jsx)(_v90.TabPanel, {
          display: "flex",
          height: "100%",
          flexDirection: "column",
          flexGrow: 1,
          children: _v0.content
        }, _v0.id))
      })]
    });
  }
  var _v129 = _v0.i(0);
  function _v130({
    id: _v0 = (0, _v129.createLiveDomName)("stream-settings-tab"),
    className: _v1 = (0, _v129.createLiveDomName)("stream-settings-tab")
  }) {
    let {
        settings: {
          value: _v2,
          isLoading: _v3
        },
        actions: _v4
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      {
        liveComposerStatuses: _v5
      } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
      _v6 = (0, _v4.useCallback)(() => {
        _v4.updateRtmpPreview(!_v2?.rtmpPreview);
      }, [_v2?.rtmpPreview, _v4]);
    return (0, _v2.jsxs)(_v12.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      width: "100%",
      gap: (0, _v15.rem)(16),
      children: [(0, _v2.jsxs)(_v52.FormLabel, {
        id: (0, _v129.createLiveDomName)(_v0, "stream-preview-toggle-form"),
        className: (0, _v129.createLiveDomName)(_v1, "stream-preview-toggle-form"),
        htmlFor: (0, _v129.createLiveDomName)(_v0, "stream-preview-toggle"),
        display: "flex",
        justifyContent: "space-between",
        margin: 0,
        cursor: "pointer",
        columnGap: (0, _v15.rem)(8),
        children: [(0, _v2.jsxs)(_v14.Paragraph, {
          id: (0, _v129.createLiveDomName)(_v0, "stream-preview-toggle-label"),
          className: (0, _v129.createLiveDomName)(_v1, "stream-preview-toggle-label"),
          display: "flex",
          gap: (0, _v15.rem)(4),
          fontWeight: "bold",
          size: "md",
          children: [_v40.translations.previewStreamBeforeGoingLive, (0, _v2.jsx)(_v59.CircleTip, {
            as: "span",
            placement: "top-end",
            label: _v40.translations.previewStreamBeforeGoingLiveTooltip
          })]
        }), (0, _v2.jsx)(_v53.Switch, {
          id: (0, _v129.createLiveDomName)(_v0, "stream-preview-toggle"),
          className: (0, _v129.createLiveDomName)(_v1, "stream-preview-toggle"),
          size: "sm",
          isChecked: !!_v2?.rtmpPreview,
          isDisabled: !!_v3 || _v5.isSessionLive,
          onChange: _v6
        })]
      }), (0, _v2.jsx)(_v128, {})]
    });
  }
  var _v131 = _v0.i(0);
  let _v132 = new Set([_v131.EAccordionItemId.STREAM, _v131.EAccordionItemId.BASICS, _v131.EAccordionItemId.SCHEDULE]);
  _v0.s(["EventSettingsTab", 0, function ({
    id: _v0 = (0, _v37.createDomName)("event-settings-tab"),
    className: _v1 = (0, _v37.createDomName)("event-settings-tab"),
    isCompleted: _v2 = !1
  }) {
    let {
        permissions: _v3
      } = (0, _v3.useManager)(_v30.ComposerSessionManager),
      {
        streamMode: _v4
      } = (0, _v3.useManager)(_v32.ComposerSessionStatusManager),
      {
        settings: {
          value: _v5,
          isLoading: _v6
        }
      } = (0, _v3.useManager)(_v34.EventSettingsManager),
      _v7 = (0, _v3.useManager)(_v33.DestinationsManager),
      _v8 = !!_v7?.connections?.ott?.value?.isConnected,
      {
        trackLiveStreamSettingsSectionClicked: _v9
      } = (0, _v38.useLiveStreamBroadcasterTracking)(),
      _v10 = _v4 === _v36.EComposerStreamModeType.RECORD,
      _v11 = !_v6 && !!(_v5?.app?.uri && _v28.vimeoConfig.STREAMYARD_APP_URIS.includes(_v5.app.uri)),
      _v12 = _v11 && !_v8,
      _v13 = !!_v5?.fromShowcase,
      _v14 = !!_v5?.hasForcedLeadCaptureForm,
      _v15 = _v3.canUseContentProtectionSettings,
      {
        initialState: {
          sessionApplicationType: _v16
        }
      } = (0, _v26.useLiveGlobals)(),
      _v17 = (0, _v39.useIsVpaas)(),
      _v18 = !_v17 && !_v10,
      _v19 = (0, _v48.useIsHostAudioMeterAvailable)(),
      _v20 = (0, _v31.useSessionOwnerId)(),
      {
        capabilities: _v21
      } = (0, _v19.useCapability)(["hasLiveAutoCcAiCredits", "hasAdminForcedPreset", "hasLiveAutoTranslation", "hasCanUsePersonalizedViewerWatermarking", "hasCanUseForensicWatermarking"], _v20 || null),
      _v22 = !!_v21.hasLiveAutoCcAiCredits || !!_v21.hasLiveAutoTranslation,
      _v23 = !!_v21.hasAdminForcedPreset,
      _v24 = !!_v21.hasCanUsePersonalizedViewerWatermarking,
      _v25 = !!_v21.hasCanUseForensicWatermarking,
      _v26 = _v18 && !_v2,
      _v27 = (0, _v4.useMemo)(() => [_v16 === _v36.EComposerApplicationType.RTMP ? {
        id: _v131.EAccordionItemId.STREAM,
        title: _v40.translations.stream,
        content: (0, _v2.jsx)(_v130, {})
      } : null, _v17 ? null : {
        id: _v131.EAccordionItemId.BASICS,
        title: _v40.translations.basics,
        content: (0, _v2.jsx)(_v44.BasicSettings, {})
      }, _v19 && !_v2 ? {
        id: _v131.EAccordionItemId.AUDIO,
        title: _v40.translations.audio,
        content: (0, _v2.jsx)(_v47.HostAudioSettings, {})
      } : null, _v18 ? {
        id: _v131.EAccordionItemId.PRIVACY,
        title: _v40.translations.privacy,
        content: (0, _v2.jsx)(_v50.PrivacySettings, {
          canUsePersonalizedViewerWatermarking: _v24,
          canUseForensicWatermarking: _v25
        })
      } : null, _v26 ? {
        id: _v131.EAccordionItemId.SCHEDULE,
        title: _v40.translations.schedule,
        content: (0, _v2.jsx)(_v86, {})
      } : null, _v26 ? {
        id: _v131.EAccordionItemId.PRODUCTION,
        title: _v40.translations.production,
        content: (0, _v2.jsx)(_v79, {})
      } : null, _v2 || _v10 ? null : {
        id: _v131.EAccordionItemId.AUTO_CC,
        title: _v22 ? (0, _v2.jsxs)(_v12.Flex, {
          alignItems: "center",
          gap: (0, _v15.rem)(4),
          children: [(0, _v2.jsx)(_v16.AiSparkles, {
            boxSize: 20
          }), _v40.translations.captions]
        }) : _v40.translations.closedCaptions,
        content: (0, _v2.jsx)(_v43.AutoCcSettings, {})
      }, _v18 && !_v13 ? {
        id: _v131.EAccordionItemId.REGISTRATION,
        title: _v23 && !_v14 ? (0, _v2.jsxs)(_v12.Flex, {
          alignItems: "center",
          gap: (0, _v15.rem)(4),
          children: [(0, _v2.jsx)(_v17.InfoCircleFilled, {
            boxSize: 25,
            color: "status-caution-primary"
          }), _v40.translations.registration]
        }) : _v40.translations.registration,
        content: (0, _v2.jsx)(_v84, {})
      } : null, _v26 ? {
        id: _v131.EAccordionItemId.PLAYER,
        title: _v40.translations.player,
        content: (0, _v2.jsx)(_v49.PlayerSettings, {})
      } : null, _v26 ? {
        id: _v131.EAccordionItemId.DESTINATIONS,
        title: _v40.translations.destinations,
        content: (0, _v2.jsx)(_v42.Destinations, {
          isStreamYardEvent: _v11,
          hideVimeoDestination: !0
        })
      } : null, _v18 && _v15 ? {
        id: _v131.EAccordionItemId.AVAILABILITY,
        title: _v40.translations.availability,
        content: (0, _v2.jsx)(_v41.LiveEventAvailability, {})
      } : null, _v18 ? {
        id: _v131.EAccordionItemId.ENGAGEMENT,
        title: _v40.translations.engagementSettings,
        content: (0, _v2.jsx)(_v46.EngagementSettings, {})
      } : null].filter(_v0 => null != _v0), [_v16, _v17, _v18, _v19, _v13, _v15, _v26, _v2, _v10, _v22, _v23, _v14, _v11, _v24, _v25]),
      _v28 = _v0 => null != _v0 && (_v11 && _v132.has(_v0) || _v0 === _v131.EAccordionItemId.DESTINATIONS && _v12),
      _v29 = (_v11 ? _v27.find(_v0 => !_v28(_v0.id))?.id : void 0) ?? _v27[0]?.id ?? "",
      {
        activeIndex: _v30,
        getIdByIndex: _v31,
        onActiveIndexChange: _v32
      } = (0, _v20.useControlledAccordion)(_v27, (0, _v21.getDefaultAccordionId)(_v29), [_v27]),
      _v33 = _v30 >= 0 && _v28(_v27[_v30]?.id) ? _v27.findIndex(_v0 => !_v28(_v0.id)) : _v30,
      _v34 = (0, _v4.useCallback)(_v0 => {
        _v32(_v0);
        let _v1 = function (_v0) {
          switch (_v0) {
            case _v131.EAccordionItemId.BASICS:
              return "basics";
            case _v131.EAccordionItemId.PRIVACY:
              return "privacy";
            case _v131.EAccordionItemId.SCHEDULE:
              return "schedule";
            case _v131.EAccordionItemId.PRODUCTION:
              return "production";
            case _v131.EAccordionItemId.AUTO_CC:
              return "closed_captions";
            case _v131.EAccordionItemId.REGISTRATION:
              return "registration";
            case _v131.EAccordionItemId.DESTINATIONS:
              return "destinations";
            case _v131.EAccordionItemId.PLAYER:
              return "player";
            default:
              return null;
          }
        }(_v31(_v0));
        null !== _v1 && _v9({
          liveStreamSettingsSection: _v1
        });
      }, [_v31, _v32, _v9]),
      _v35 = (0, _v29.useScrollbarStyles)({
        width: (0, _v15.rem)(0),
        scrollbarColor: "transparent"
      }),
      _v36 = _v27?.length === 0 && _v17 && _v10;
    return (0, _v2.jsxs)(_v10.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v25.createTabWrapperStyle)({
        withScroll: !0
      }),
      children: [(0, _v2.jsx)(_v24.RightPanelHeader, {
        id: (0, _v37.createDomName)(_v0, "header"),
        className: (0, _v37.createDomName)(_v1, "header"),
        label: _v40.translations.settings,
        rightControls: (0, _v2.jsx)(_v23.RightPanelDismiss, {})
      }), (0, _v2.jsx)(_v22.RightPanelContent, {
        id: (0, _v37.createDomName)(_v0, "content"),
        className: (0, _v37.createDomName)(_v1, "content"),
        children: _v36 ? (0, _v2.jsxs)(_v11.Center, {
          flexDirection: "column",
          gap: "sm",
          height: "100%",
          padding: (0, _v15.rem)(16),
          children: [(0, _v2.jsx)(_v18.SettingsGear, {
            boxSize: "lg"
          }), (0, _v2.jsx)(_v13.Header, {
            id: (0, _v37.createDomName)(_v0, "headline"),
            className: (0, _v37.createDomName)(_v1, "headline"),
            size: "md",
            textAlign: "center",
            marginTop: (0, _v15.rem)(8),
            children: _v35.T_RECORDING_SETTINGS_MANAGED_EXTERNALLY
          }), (0, _v2.jsx)(_v14.Paragraph, {
            id: (0, _v37.createDomName)(_v0, "message"),
            className: (0, _v37.createDomName)(_v1, "message"),
            size: "md",
            textAlign: "center",
            children: _v35.T_ADJUST_YOUR_CONFIGURATION
          })]
        }) : (0, _v2.jsx)(_v10.Box, {
          id: (0, _v37.createDomName)(_v0, "scroll"),
          className: (0, _v37.createDomName)(_v0, "scroll"),
          overflowY: "scroll",
          sx: _v35,
          children: (0, _v2.jsx)(_v5.Accordion, {
            index: _v33,
            allowToggle: !0,
            reduceMotion: _v27.environmentConfig.IS_LOCAL_DEV,
            size: "lg",
            onChange: _v34,
            children: _v27.map((_v0, _v1) => {
              let _v2 = _v28(_v0.id),
                _v3 = (0, _v2.jsxs)(_v8.AccordionItem, {
                  id: _v0.id,
                  isDisabled: _v2,
                  opacity: _v2 ? .3 : void 0,
                  children: [(0, _v2.jsx)("h2", {
                    id: (0, _v37.createDomName)(_v0, _v0.id, "title"),
                    className: (0, _v37.createDomName)(_v1, _v0.id, "title"),
                    children: (0, _v2.jsxs)(_v6.AccordionButton, {
                      children: [_v0.title, (0, _v2.jsx)(_v7.AccordionIcon, {})]
                    })
                  }), (0, _v2.jsx)(_v9.AccordionPanel, {
                    children: _v1 !== _v33 || _v2 ? null : _v0.content
                  })]
                }, _v0.id);
              return _v0.id === _v131.EAccordionItemId.AUTO_CC ? (0, _v2.jsx)(_v45.DictionaryIntroLiveEventsAnnouncement, {
                children: _v3
              }, _v0.id) : _v3;
            })
          })
        })
      })]
    });
  }], 0);
}