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
    _v11 = _v0.i(0);
  function _v12({
    id: _v0,
    className: _v1,
    error: _v2,
    isHeaderEnabled: _v3 = !0
  }) {
    let [_v4, _v5] = (0, _v6.useMemo)(() => {
      if ((0, _v11.isApiError)(_v2)) switch (_v2.data.body.errorCode) {
        case _v10.EApiErrorCode.NO_CREDENTIALS_PROVIDED:
        case _v10.EApiErrorCode.NO_USER_CREDENTIALS_PROVIDED:
          return [_v9.T_ERROR_NOT_AUTHORIZED, _v9.T_ERROR_NOT_AUTHORIZED_DESCRIPTION];
        case _v10.EApiErrorCode.BAD_ARGUMENTS_PROVIDED:
        case _v10.EApiErrorCode.NOT_FOUND:
          return [_v9.T_ERROR_NOT_FOUND, _v9.T_ERROR_COUND_NOT_FIND_EVENT];
        case _v10.EApiErrorCode.NO_PERMISSIONS:
          return [_v9.T_ERROR_PERMISSION_DENIED, _v9.T_ERROR_PERMISSION_DENIED_DESCRIPTION];
      }
      return _v2 instanceof _v7.ResourceNotFoundError ? [_v9.T_ERROR_NOT_FOUND, _v9.T_ERROR_COUND_NOT_FIND_EVENT] : _v2 instanceof _v7.ForbiddenError ? [_v9.T_ERROR_PERMISSION_DENIED, _v9.T_ERROR_PERMISSION_DENIED_DESCRIPTION] : [_v9.T_ERROR_TECHNICAL_DIFFICULTIES, _v9.T_ERROR_TECHNICAL_DIFFICULTIES_TRY_AGAIN];
    }, [_v2]);
    return (0, _v1.jsx)(_v8.LiveErrorPage, {
      id: _v0,
      className: _v1,
      title: _v4,
      message: _v5,
      isHeaderEnabled: _v3,
      error: _v2
    });
  }
  var _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24() {
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v22.GlobalConfirmations, {}), (0, _v1.jsx)(_v23.SimpleNotifications, {})]
    });
  }
  var _v25 = _v0.i(0),
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
    _v40 = _v0.i(0);
  function _v41({
    composerSessionContext: {
      sessionInfo: {
        value: _v0
      }
    } = (0, _v13.useManager)(_v39.ComposerSessionManager)
  }) {
    let _v1 = (0, _v6.useCallback)(() => {
      let _v0 = _v0?.metadata?.connections?.latestVideo;
      _v0 && (window.location.href = _v0.uri);
    }, [_v0]);
    return (0, _v1.jsx)(_v38.Button, {
      isLoading: !_v0,
      isDisabled: !_v0,
      variant: "primary",
      onClick: _v1,
      children: _v40.T_MANAGE_VIDEO
    });
  }
  var _v42 = _v0.i(0);
  function _v43({
    id: _v0 = (0, _v34.createDomName)("live-completed-header"),
    className: _v1 = (0, _v34.createDomName)("live-completed-header"),
    panelsContext: {
      rightPanel: _v2
    } = (0, _v13.useManager)(_v31.PanelsManager)
  }) {
    let _v3 = (0, _v21.useIsVpaas)(),
      _v4 = (0, _v6.useMemo)(() => [{
        id: _v29.ERightPanelId.EVENT_SETTINGS,
        label: _v35.translations.settings,
        icon: (0, _v1.jsx)(_v28.SettingsGear, {}),
        isVisible: !0
      }], []),
      _v5 = (0, _v6.useCallback)(_v0 => {
        switch (!0) {
          case _v2 !== _v29.ERightPanelId.ANALYTICS && _v0 === _v29.ERightPanelId.ANALYTICS:
            (0, _v32.trackOpenAnalyticsTab)();
            break;
          case _v2 !== _v29.ERightPanelId.EVENT_SETTINGS && _v0 === _v29.ERightPanelId.EVENT_SETTINGS:
            (0, _v33.trackOpenSettingsTab)();
        }
      }, [_v2]);
    return (0, _v1.jsx)(_v26.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      children: (0, _v1.jsx)(_v26.Flex, {
        id: (0, _v34.createDomName)(_v0, "content"),
        className: (0, _v34.createDomName)(_v1, "content"),
        align: "center",
        justify: "space-between",
        position: "relative",
        padding: `${(0, _v27.rem)(12)} ${(0, _v27.rem)(16)}`,
        minHeight: (0, _v27.rem)(64),
        height: (0, _v27.rem)(64),
        maxHeight: (0, _v27.rem)(64),
        color: "text.300",
        borderTop: "2px solid transparent",
        children: (0, _v1.jsxs)(_v3.LiveErrorBoundary, {
          component: "LiveCompletedHeader",
          isDetailed: !1,
          children: [(0, _v1.jsx)(_v36.LivePath, {
            id: (0, _v34.createDomName)(_v0, "path"),
            className: (0, _v34.createDomName)(_v1, "path")
          }), (0, _v1.jsx)(_v26.Flex, {
            grow: 1
          }), (0, _v1.jsxs)(_v26.Flex, {
            align: "center",
            justify: "flex-end",
            gap: (0, _v27.rem)(8),
            height: "100%",
            children: [(0, _v1.jsx)(_v30.RightPanelControls, {
              id: (0, _v34.createDomName)(_v0, "right-panel-controls"),
              className: (0, _v34.createDomName)(_v1, "right-panel-controls"),
              panels: _v4,
              onPanelChange: _v5
            }), _v3 ? null : (0, _v1.jsx)(_v42.ShareButton, {}), (0, _v1.jsx)(_v41, {}), _v3 ? null : (0, _v1.jsx)(_v37.LiveBroadcasterHeaderProfile, {})]
          })]
        })
      })
    });
  }
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0);
  function _v52() {
    return (0, _v1.jsxs)(_v45.Modal, {
      id: (0, _v51.createLiveDomName)("invalid-session-type"),
      isOpen: !0,
      onClose: _v49.CallablePlaceholder,
      children: [(0, _v1.jsx)(_v47.ModalOverlay, {}), (0, _v1.jsxs)(_v46.ModalContent, {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: (0, _v27.rem)(24),
        gap: (0, _v27.rem)(16),
        children: [(0, _v1.jsx)(_v44.Header, {
          color: "text-primary",
          textAlign: "center",
          size: "md",
          children: _v40.T_INVALID_EVENT_TYPE
        }), (0, _v1.jsx)(_v48.Paragraph, {
          color: "text-primary",
          textAlign: "center",
          children: _v40.T_THIS_PAGE_SUPPORTS_ONLY
        }), (0, _v1.jsx)(_v26.Flex, {
          justifyContent: "center",
          children: (0, _v1.jsx)(_v38.Button, {
            size: "sm",
            onClick: _v50.redirectToHome,
            children: _v40.T_LEAVE_EVENT
          })
        })]
      })]
    });
  }
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  function _v58({
    id: _v0 = (0, _v34.createDomName)("preview-box"),
    className: _v1 = (0, _v34.createDomName)("preview-box")
  }) {
    return (0, _v1.jsxs)(_v26.Flex, {
      id: _v0,
      className: _v1,
      direction: "column",
      gap: (0, _v27.rem)(8),
      padding: (0, _v27.rem)(24),
      background: "fill-skeleton",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "absolute",
      border: "1px solid",
      borderColor: "stroke",
      borderRadius: (0, _v27.rem)(12),
      textAlign: "center",
      top: 0,
      left: 0,
      children: [(0, _v1.jsx)(_v44.Header, {
        size: "md",
        children: _v57.sharedTranslations.eventHasEnded
      }), (0, _v1.jsx)(_v48.Paragraph, {
        size: "md",
        children: _v57.sharedTranslations.wantToGoLiveAgain
      })]
    });
  }
  var _v59 = _v0.i(0),
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
    _v75 = _v0.i(0),
    _v76 = _v0.i(0);
  function _v77({
    id: _v0 = (0, _v34.createDomName)("chat-session-export"),
    placement: _v1 = "bottom",
    history: _v2,
    renderer: _v3
  }) {
    let _v4 = (0, _v65.useGctlConfig)(),
      [_v5, _v6] = (0, _v6.useState)(!1),
      {
        triggerRef: _v7,
        contentRef: _v8,
        isOpen: _v9,
        onTogglePopover: _v10,
        onClosePopover: _v11
      } = (0, _v70.useControlledPopover)(),
      _v12 = (0, _v6.useCallback)(_v0 => async () => {
        _v6(!0);
        try {
          let _v0 = await (0, _v69.downloadInteractionHistoryByConnection)({
              connection: _v0,
              gctlConfig: _v4
            }),
            _v1 = `export_chat_${new Date(_v0.streamingOn ? 0 * _v0.streamingOn : Date.now()).toLocaleString()}_${_v0.id}.csv`;
          (0, _v73.downloadFileByBlob)(_v1, _v0);
        } catch (_v0) {
          _v68.Logger.getGlobal().error("Failed to load history:", _v0, _v0);
        }
        _v6(!1), _v11(), (0, _v72.trackExportChat)();
      }, [_v4, _v11]),
      _v13 = (0, _v71.useScrollbarStyles)({
        width: (0, _v27.rem)(8),
        scrollbarColor: "transparent"
      }),
      _v14 = (0, _v1.jsxs)(_v26.Flex, {
        id: (0, _v34.createDomName)(_v0, "list"),
        ref: _v8,
        direction: "column",
        minWidth: (0, _v27.rem)(240),
        maxHeight: "50vh",
        overflowY: "auto",
        sx: _v13,
        children: [(0, _v1.jsx)(_v66.PopoverHeader, {
          id: (0, _v34.createDomName)(_v0, "list-header"),
          as: "h6",
          padding: (0, _v27.rem)(8),
          margin: 0,
          fontSize: (0, _v27.rem)(12),
          lineHeight: 1.25,
          color: "text-secondary",
          children: _v40.T_EXPORT_CHAT_30_DAYS
        }), (0, _v1.jsx)(_v67.PopoverBody, {
          children: _v2.sort((_v0, _v1) => _v0.streamingOn && _v1.streamingOn ? _v1.streamingOn - _v0.streamingOn : 1).map(_v0 => (0, _v1.jsx)(_v26.Flex, {
            className: (0, _v34.createDomName)(_v0, "list-item"),
            as: "span",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
            lineHeight: 1.25,
            padding: (0, _v27.rem)(8),
            borderRadius: (0, _v27.rem)(8),
            fontSize: (0, _v27.rem)(14),
            _hover: {
              background: "fill-component-hover"
            },
            onClick: _v12(_v0),
            children: _v0.streamingOn ? (0, _v74.exportDateFormatter)(navigator.language).format(0 * _v0.streamingOn) : _v40.T_CURRENT_SESSION
          }, _v0.uri))
        }), _v5 ? (0, _v1.jsx)(_v76.BlockingLoadingWrapper, {
          opacity: .4,
          withLoader: !0
        }) : null]
      });
    return (0, _v1.jsx)(_v75.BokehPopover, {
      isOpen: _v9,
      inPortal: !0,
      placement: _v1,
      gutter: 8,
      triggerContent: _v3({
        id: (0, _v34.createDomName)(_v0, "button"),
        triggerButtonRef: _v7,
        onToggleExport: _v10
      }),
      content: _v14
    });
  }
  function _v78({
    id: _v0 = (0, _v34.createDomName)("poll-session-export"),
    placement: _v1 = "bottom",
    history: _v2,
    renderer: _v3
  }) {
    let _v4 = (0, _v65.useGctlConfig)(),
      [_v5, _v6] = (0, _v6.useState)(!1),
      {
        triggerRef: _v7,
        contentRef: _v8,
        isOpen: _v9,
        onTogglePopover: _v10,
        onClosePopover: _v11
      } = (0, _v70.useControlledPopover)(),
      _v12 = (0, _v6.useCallback)(_v0 => async () => {
        _v6(!0);
        try {
          let _v0 = await (0, _v69.downloadInteractionHistoryByConnection)({
              connection: _v0,
              gctlConfig: _v4
            }),
            _v1 = `export_poll_${new Date(_v0.streamingOn ? 0 * _v0.streamingOn : Date.now()).toLocaleString()}_${_v0.id}.csv`;
          (0, _v73.downloadFileByBlob)(_v1, _v0);
        } catch (_v0) {
          _v68.Logger.getGlobal().error("Failed to load poll history:", _v0, _v0);
        }
        _v6(!1), _v11();
      }, [_v4, _v11]),
      _v13 = (0, _v71.useScrollbarStyles)({
        width: (0, _v27.rem)(8),
        scrollbarColor: "transparent"
      }),
      _v14 = (0, _v1.jsxs)(_v26.Flex, {
        ref: _v8,
        id: (0, _v34.createDomName)(_v0, "list"),
        direction: "column",
        minWidth: (0, _v27.rem)(240),
        maxHeight: "50vh",
        overflowY: "auto",
        sx: _v13,
        children: [(0, _v1.jsx)(_v66.PopoverHeader, {
          id: (0, _v34.createDomName)(_v0, "list-header"),
          as: "h6",
          padding: (0, _v27.rem)(8),
          margin: 0,
          fontSize: (0, _v27.rem)(12),
          color: "text-secondary",
          children: _v40.T_STREAM_DATE_30_DAYS
        }), (0, _v1.jsx)(_v67.PopoverBody, {
          children: _v2.sort((_v0, _v1) => _v0.streamingOn && _v1.streamingOn ? _v1.streamingOn - _v0.streamingOn : 1).map(_v0 => (0, _v1.jsx)(_v26.Flex, {
            className: (0, _v34.createDomName)(_v0, "list-item"),
            as: "span",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
            padding: (0, _v27.rem)(8),
            borderRadius: (0, _v27.rem)(8),
            fontSize: (0, _v27.rem)(14),
            _hover: {
              background: "fill-component-hover"
            },
            onClick: _v12(_v0),
            children: _v0.streamingOn ? (0, _v74.exportDateFormatter)(navigator.language).format(0 * _v0.streamingOn) : _v40.T_CURRENT_SESSION
          }, _v0.uri))
        }), _v5 ? (0, _v1.jsx)(_v76.BlockingLoadingWrapper, {
          opacity: .4,
          withLoader: !0
        }) : null]
      });
    return (0, _v1.jsx)(_v75.BokehPopover, {
      isOpen: _v9,
      placement: _v1,
      triggerContent: (0, _v1.jsx)(_v25.Box, {
        ref: _v7,
        width: "100%",
        children: _v3({
          id: (0, _v34.createDomName)(_v0, "button"),
          onToggleExport: _v10
        })
      }),
      content: _v14,
      onClose: _v11
    });
  }
  var _v79 = _v0.i(0);
  function _v80({
    id: _v0 = (0, _v34.createDomName)("qna-session-export"),
    placement: _v1 = "bottom",
    history: _v2,
    renderer: _v3
  }) {
    let _v4 = (0, _v65.useGctlConfig)(),
      [_v5, _v6] = (0, _v6.useState)(!1),
      {
        triggerRef: _v7,
        contentRef: _v8,
        isOpen: _v9,
        onTogglePopover: _v10,
        onClosePopover: _v11
      } = (0, _v70.useControlledPopover)(),
      _v12 = (0, _v6.useCallback)(_v0 => async () => {
        _v6(!0);
        try {
          let _v0 = await (0, _v69.downloadInteractionHistoryByConnection)({
              connection: _v0,
              gctlConfig: _v4
            }),
            _v1 = `export_qna_${new Date(_v0.streamingOn ? 0 * _v0.streamingOn : Date.now()).toLocaleString()}_${_v0.id}.csv`;
          (0, _v73.downloadFileByBlob)(_v1, _v0);
        } catch (_v0) {
          _v68.Logger.getGlobal().error("Failed to load history:", _v0, _v0);
        }
        _v6(!1), _v11(), (0, _v79.trackExportQna)();
      }, [_v4, _v11]),
      _v13 = (0, _v71.useScrollbarStyles)({
        width: (0, _v27.rem)(8),
        scrollbarColor: "transparent"
      }),
      _v14 = (0, _v1.jsxs)(_v26.Flex, {
        ref: _v8,
        id: (0, _v34.createDomName)(_v0, "list"),
        minWidth: (0, _v27.rem)(240),
        maxHeight: "50vh",
        overflowY: "auto",
        direction: "column",
        sx: _v13,
        children: [(0, _v1.jsx)(_v66.PopoverHeader, {
          id: (0, _v34.createDomName)(_v0, "list-header"),
          as: "h6",
          padding: (0, _v27.rem)(8),
          margin: 0,
          fontSize: (0, _v27.rem)(12),
          color: "text-secondary",
          children: _v40.T_STREAM_DATE_30_DAYS
        }), (0, _v1.jsx)(_v67.PopoverBody, {
          children: _v2.sort((_v0, _v1) => _v0.streamingOn && _v1.streamingOn ? _v1.streamingOn - _v0.streamingOn : 1).map(_v0 => (0, _v1.jsx)(_v26.Flex, {
            className: (0, _v34.createDomName)(_v0, "list-item"),
            as: "span",
            alignItems: "center",
            position: "relative",
            cursor: "pointer",
            padding: (0, _v27.rem)(8),
            borderRadius: (0, _v27.rem)(8),
            fontSize: (0, _v27.rem)(14),
            _hover: {
              background: "fill-component-hover"
            },
            onClick: _v12(_v0),
            children: _v0.streamingOn ? (0, _v74.exportDateFormatter)(navigator.language).format(0 * _v0.streamingOn) : _v40.T_ACTIVE_QNA_SESSION
          }, _v0.uri))
        }), _v5 ? (0, _v1.jsx)(_v76.BlockingLoadingWrapper, {
          opacity: .4,
          withLoader: !0
        }) : null]
      });
    return (0, _v1.jsx)(_v75.BokehPopover, {
      placement: _v1,
      isOpen: _v9,
      triggerContent: (0, _v1.jsx)(_v25.Box, {
        ref: _v7,
        width: "100%",
        children: _v3({
          id: (0, _v34.createDomName)(_v0, "button"),
          onToggleExport: _v10
        })
      }),
      content: _v14,
      onClose: _v11
    });
  }
  var _v81 = _v0.i(0),
    _v82 = _v0.i(0),
    _v83 = _v0.i(0),
    _v84 = _v0.i(0),
    _v85 = _v0.i(0),
    _v86 = _v0.i(0),
    _v87 = _v0.i(0);
  function _v88({
    id: _v0 = (0, _v34.createDomName)("export-tab"),
    className: _v1,
    qnaContext: {
      qnaSessionsHistory: _v2
    } = (0, _v13.useManager)(_v87.QnAManager),
    chatContext: {
      chatSessionsHistory: _v3
    } = (0, _v13.useManager)(_v85.ChatManager),
    pollContext: {
      pollsHistory: _v4
    } = (0, _v13.useManager)(_v86.PollManager),
    composerSessionContext: {
      sessionId: _v5
    } = (0, _v13.useManager)(_v39.ComposerSessionManager)
  }) {
    let _v6 = (0, _v20.useViewer)(),
      {
        jwt: _v7,
        locale: _v8,
        baseUrl: _v9
      } = (0, _v65.useGctlConfig)(),
      [_v10, _v11] = (0, _v6.useState)(!1),
      [_v12, _v13] = (0, _v6.useState)(!1),
      [_v14, _v15] = (0, _v61.useGetLeadCaptureResourceIdFormLazy)(),
      [_v16, _v17] = (0, _v62.useGetLeadCaptureResourceIdRegistrantsExportLazy)(),
      _v18 = (0, _v6.useCallback)(() => {
        let _v0 = `${_v9}/lead_capture/live_events/${_v5}/registrants/export?jwt_token=${_v7}&format=csv&locale=${_v8 ?? navigator.language}&sort=registration_date&direction=asc`;
        return (0, _v73.downloadFileByLinkElement)(_v0);
      }, [_v5, _v9, _v7, _v8]);
    (0, _v6.useEffect)(() => {
      _v14({
        where: {
          resourceId: `${_v5}`,
          resourceType: _v64.ENTITY_TO_PATH_MAP[_v64.ENTITY_TYPE.EVENT]
        },
        select: ["registrationData.downloadCsvAsynchronously"]
      });
    }, []), (0, _v6.useEffect)(() => {
      !_v17.loading && _v17.called && null !== _v17.data && (_v11(!0), _v13(!1));
    }, [_v17.loading, _v17.called, _v17.data]);
    let _v19 = _v15.data?.registrationData?.downloadCsvAsynchronously ? () => {
        _v13(!0), _v16({
          where: {
            resourceType: _v64.ENTITY_TO_PATH_MAP[_v64.ENTITY_TYPE.EVENT],
            resourceId: `${_v5}`
          },
          query: {
            downloadAsyncSupported: !0
          }
        });
      } : _v18,
      _v20 = _v6.user?.email,
      _v21 = (0, _v71.useScrollbarStyles)();
    return (0, _v1.jsxs)(_v25.Box, {
      id: _v0,
      className: _v1,
      sx: (0, _v84.createTabWrapperStyle)(),
      children: [(0, _v1.jsx)(_v83.LeftPanelHeader, {
        label: _v40.T_EXPORT,
        controls: (0, _v1.jsx)(_v82.LeftPanelDismiss, {})
      }), (0, _v1.jsx)(_v81.LeftPanelContent, {
        children: (0, _v1.jsx)(_v25.Box, {
          id: (0, _v34.createDomName)(_v0, "list"),
          sx: {
            ...(0, _v84.createTabListScrollStyle)({
              fullWidth: !0
            }),
            ..._v21
          },
          children: (0, _v1.jsx)(_v26.Flex, {
            direction: "column",
            alignItems: "center",
            justifyContent: "center",
            children: (0, _v1.jsxs)(_v26.Flex, {
              direction: "column",
              gap: (0, _v27.rem)(24),
              width: "100%",
              children: [(0, _v1.jsxs)(_v26.Flex, {
                direction: "column",
                gap: (0, _v27.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v44.Header, {
                  size: "xs",
                  children: _v40.T_REGISTRANTS
                }), (0, _v1.jsx)(_v38.Button, {
                  isDisabled: _v12,
                  isLoading: _v12,
                  variant: "secondary",
                  rightIcon: (0, _v1.jsx)(_v59.ArrowToBottom, {}),
                  size: "sm",
                  onClick: _v19,
                  children: _v40.T_EXPORT_CSV
                }), (0, _v1.jsx)(_v63.DownloadRequestedInfoModal, {
                  email: _v20,
                  open: _v10,
                  onClose: () => {
                    _v11(!1);
                  }
                })]
              }), (0, _v1.jsxs)(_v26.Flex, {
                direction: "column",
                gap: (0, _v27.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v44.Header, {
                  size: "xs",
                  children: _v40.T_CHAT
                }), (0, _v1.jsx)(_v77, {
                  placement: "top",
                  history: _v3,
                  renderer: ({
                    onToggleExport: _v0,
                    triggerButtonRef: _v1
                  }) => (0, _v1.jsx)(_v38.Button, {
                    ref: _v1,
                    isDisabled: !_v3.length,
                    variant: "secondary",
                    rightIcon: (0, _v1.jsx)(_v59.ArrowToBottom, {}),
                    size: "sm",
                    onClick: _v0,
                    children: _v40.T_EXPORT_CHAT
                  })
                })]
              }), (0, _v1.jsxs)(_v26.Flex, {
                direction: "column",
                gap: (0, _v27.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v44.Header, {
                  size: "xs",
                  children: _v40.T_POLLS
                }), (0, _v1.jsx)(_v78, {
                  placement: "top",
                  history: _v4,
                  renderer: ({
                    onToggleExport: _v0
                  }) => (0, _v1.jsx)(_v38.Button, {
                    isDisabled: !_v3.length,
                    variant: "secondary",
                    rightIcon: (0, _v1.jsx)(_v59.ArrowToBottom, {}),
                    size: "sm",
                    width: "100%",
                    onClick: _v0,
                    children: _v40.T_EXPORT_POLLS
                  })
                })]
              }), (0, _v1.jsxs)(_v26.Flex, {
                direction: "column",
                gap: (0, _v27.rem)(8),
                width: "100%",
                children: [(0, _v1.jsx)(_v44.Header, {
                  size: "xs",
                  children: _v40.T_QNA
                }), (0, _v1.jsx)(_v80, {
                  placement: "bottom",
                  history: _v2,
                  renderer: ({
                    onToggleExport: _v0
                  }) => (0, _v1.jsx)(_v38.Button, {
                    isDisabled: !_v3.length,
                    variant: "secondary",
                    rightIcon: (0, _v1.jsx)(_v59.ArrowToBottom, {}),
                    size: "sm",
                    width: "100%",
                    onClick: _v0,
                    children: _v40.T_EXPORT_QNA
                  })
                })]
              })]
            })
          })
        })
      })]
    });
  }
  var _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0);
  let _v93 = (0, _v6.lazy)(() => _v0.A(0).then(_v0 => ({
    default: _v0.CompletedDebugTab
  })));
  function _v94({
    id: _v0 = (0, _v34.createDomName)("completed-panel-left"),
    className: _v1 = (0, _v34.createDomName)("completed-panel-left")
  }) {
    let _v2 = (0, _v21.useIsVpaas)(),
      _v3 = (0, _v92.useCanSeeDebugTools)(),
      _v4 = (0, _v6.useMemo)(() => {
        let _v0 = [{
          id: _v90.ELeftPanelId.EXPORT,
          icon: (0, _v1.jsx)(_v59.ArrowToBottom, {}),
          header: _v35.translations.export,
          hash: _v90.ELeftPanelHash.EXPORT,
          content: _v88
        }];
        return _v3 && _v0.push({
          id: _v90.ELeftPanelId.DEBUG,
          icon: (0, _v1.jsx)(_v60.Processor, {}),
          header: _v35.translations.debug,
          hash: _v90.ELeftPanelHash.DEBUG,
          content: () => (0, _v1.jsx)(_v6.Suspense, {
            fallback: null,
            children: (0, _v1.jsx)(_v93, {})
          })
        }), _v0;
      }, [_v3]);
    return (0, _v1.jsx)(_v91.LeftPanel, {
      id: _v0,
      className: _v1,
      items: _v4,
      footer: _v2 ? null : (0, _v1.jsx)(_v89.FooterHelpMenu, {})
    });
  }
  var _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0);
  function _v98({
    id: _v0 = (0, _v34.createDomName)("completed-panel-right"),
    className: _v1 = (0, _v34.createDomName)("completed-panel-right"),
    composerSessionStatusContext: {
      isHydrated: _v2
    } = (0, _v13.useManager)(_v97.ComposerSessionStatusManager, ({
      isHydrated: _v0
    }) => [_v0])
  }) {
    let _v3 = (0, _v6.useMemo)(() => [{
      id: _v29.ERightPanelId.EVENT_SETTINGS,
      content: () => (0, _v1.jsx)(_v95.EventSettingsTab, {
        isCompleted: !0
      }),
      isVisible: !0
    }], []);
    return (0, _v1.jsx)(_v96.RightPanel, {
      id: _v0,
      className: _v1,
      items: _v3,
      isLoading: !_v2
    });
  }
  function _v99() {
    let _v0 = (0, _v54.useIsLiveDemoSubscription)(),
      {
        sessionInfo: _v1
      } = (0, _v13.useManager)(_v39.ComposerSessionManager);
    return _v1.isLoading || _v1.value?.status === _v55.EEventCompletionStatus.ENDED ? (0, _v1.jsxs)(_v26.Flex, {
      id: (0, _v34.createDomName)("page"),
      direction: "column",
      grow: 1,
      minWidth: (0, _v27.rem)(0),
      minHeight: (0, _v27.rem)(640),
      overflow: "hidden",
      background: "background",
      sx: _v0 ? {
        border: _v0 ? "2px solid" : "none",
        borderImageSlice: _v0 ? 2 : "none",
        borderImageSource: _v0 ? "linear-gradient(270deg, #12a3ab 0%, #18a57f 49.59%, #1fa84d 100%)" : "none"
      } : void 0,
      children: [(0, _v1.jsx)(_v43, {
        id: (0, _v34.createDomName)("header")
      }), (0, _v1.jsxs)(_v26.Flex, {
        id: (0, _v34.createDomName)("content"),
        basis: 0,
        grow: 1,
        overflow: "hidden",
        children: [(0, _v1.jsx)(_v94, {
          id: (0, _v34.createDomName)("left-panel")
        }), (0, _v1.jsxs)(_v26.Flex, {
          id: (0, _v34.createDomName)("workspace"),
          position: "relative",
          direction: "column",
          alignItems: "center",
          grow: 1,
          children: [(0, _v1.jsx)(_v26.Flex, {
            grow: 1
          }), (0, _v1.jsx)(_v26.Flex, {
            position: "relative",
            minWidth: (0, _v27.rem)(_v53.graphicsConfig.COMPLETED_PREVIEW.MIN_WIDTH),
            maxWidth: (0, _v27.rem)(_v53.graphicsConfig.COMPLETED_PREVIEW.MAX_WIDTH),
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-start",
            direction: "column",
            flexGrow: 1,
            margin: `${(0, _v27.rem)(24)} auto 0`,
            padding: `0 ${(0, _v27.rem)(24)}`,
            children: (0, _v1.jsx)(_v25.Box, {
              overflow: "hidden",
              sx: _v56.STRICT_16BY9_BOX_STYLE,
              children: (0, _v1.jsx)(_v3.LiveErrorBoundary, {
                children: (0, _v1.jsx)(_v58, {})
              })
            })
          }), (0, _v1.jsx)(_v26.Flex, {
            grow: 1
          })]
        }), (0, _v1.jsx)(_v98, {
          id: (0, _v34.createDomName)("right-panel")
        })]
      })]
    }) : (0, _v1.jsx)(_v52, {});
  }
  var _v100 = _v0.i(0),
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
  class _v111 extends _v108.AbstractFirebaseManager {
    context = {
      isFirebaseReady: !1,
      isComposerReady: !1,
      isInteractionReady: !1,
      isDisposed: !1,
      isStreamHealthReady: !1,
      interactionCredentials: null,
      composerCredentials: null,
      streamHealthCredentials: null,
      interactionConnection: (0, _v13.createNested)({
        isConnected: !1,
        user: null
      }),
      composerConnection: (0, _v13.createNested)({
        isConnected: !1,
        user: null
      }),
      streamHealthConnection: (0, _v13.createNested)({
        isConnected: !1,
        user: null
      }),
      connectionStatuses: (0, _v13.createComputed)(({
        interactionConnection: _v0
      }) => ({
        isInteractionConnected: !!(_v0?.isConnected && _v0?.user !== null)
      }))
    };
    async onComposerSessionReady(_v0) {
      this.log.info("Initializing firebase connection on session init"), await (0, _v109.initializeComposerInteractionToolsConnection)(this, _v0);
    }
  }
  (0, _v107._)([(0, _v13.OnSignal)(_v110.ELiveSignal.COMPOSER_SESSION_READY)], _v111.prototype, "onComposerSessionReady", null);
  var _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0),
    _v115 = _v0.i(0),
    _v116 = _v0.i(0);
  let _v117 = [_v103.DebugControlManager, _v85.ChatManager, _v111, _v39.ComposerSessionManager, _v102.ComposerSessionStatsManager, _v97.ComposerSessionStatusManager, _v105.DragDropManager, _v106.EventSettingsManager, _v104.ModuleManager, _v112.NotificationManager, _v113.PageEventsManager, _v31.PanelsManager, _v86.PollManager, _v87.QnAManager, _v114.TrackingManager, _v115.UserPreferencesManager],
    _v118 = (0, _v13.createProvider)(_v117, {
      isCombined: _v17.liveApplicationConfig.USE_COMBINED_PROVIDERS
    });
  function _v119({
    initialState: _v0,
    pageProps: _v1,
    children: _v2
  }) {
    return (0, _v116.useScopeViewerProvision)(), (0, _v100.useScopeGctlProvision)(), (0, _v1.jsx)(_v101.LiveGlobalsProvider, {
      initialState: _v0,
      pageProps: _v1,
      children: (0, _v1.jsx)(_v118, {
        initialState: _v0,
        children: _v2
      })
    });
  }
  function _v120(_v0) {
    let _v1 = (0, _v20.useViewer)(),
      _v2 = (0, _v21.useIsVpaas)(),
      _v3 = (0, _v6.useMemo)(() => {
        let {
          sessionId: _v0,
          sessionType: _v1
        } = _v0;
        return {
          sessionApplicationType: _v19.EComposerApplicationType.COMPLETED,
          sessionType: _v1,
          sessionId: _v0,
          isVpaas: _v2,
          user: {
            requiredOwnerCapabilities: _v17.liveApplicationConfig.USER.REQUIRED_OWNER_CAPABILITIES,
            requiredOwnerEntitlements: _v17.liveApplicationConfig.USER.REQUIRED_OWNER_ENTITLEMENTS,
            requiredOwnerPreferences: _v17.liveApplicationConfig.USER.REQUIRED_OWNER_PREFERENCES,
            requiredPreferences: _v17.liveApplicationConfig.USER.REQUIRED_PREFERENCES
          },
          externalModules: [_v19.EExternalModule.FIREBASE, _v19.EExternalModule.FIRESTORE]
        };
      }, []);
    return ((0, _v18.useApplicationTrackingDetailsSync)({
      sessionApplicationType: _v3.sessionApplicationType,
      sessionType: _v3.sessionType,
      sessionId: _v3.sessionId,
      userId: _v1.user?.id,
      userLocale: _v1?.locale
    }), _v16.browserConfig.BROWSER?.isMobile) ? (0, _v1.jsx)(_v14.MobileUnsupportedModal, {}) : (0, _v1.jsx)(_v13.ScopeProvider, {
      children: (0, _v1.jsx)(_v15.ScopeErrorBoundary, {
        fallback: _v12,
        children: (0, _v1.jsxs)(_v119, {
          pageProps: _v0,
          initialState: _v3,
          children: [(0, _v1.jsx)(_v99, {}), (0, _v1.jsx)(_v24, {})]
        })
      })
    });
  }
  function _v121(_v0) {
    let _v1 = (0, _v5.useOptionalViewer)(),
      {
        sessionId: _v2,
        sessionType: _v3
      } = (0, _v4.usePageSessionContext)();
    return _v1 ? (0, _v1.jsx)(_v3.LiveErrorBoundary, {
      component: "LiveCompletedRoot",
      componentHandler: _v12,
      children: (0, _v1.jsx)(_v120, {
        ..._v0,
        sessionType: _v3,
        sessionId: _v2
      })
    }) : null;
  }
  (0, _v2.withPageSetup)(() => ({
    props: {
      hasThemeSupport: !0
    }
  }), {
    requireLogin: !0
  }), _v0.s(["__N_SSP", 0, !0, "default", 0, _v0 => (0, _v1.jsx)(_v121, {
    ..._v0
  })], 0);
}