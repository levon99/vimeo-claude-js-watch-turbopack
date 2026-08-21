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
    _v48 = _v0.i(0);
  let _v49 = (0, _v3.createContext)({});
  var _v50 = _v0.i(0);
  function _v51({
    id: _v0 = (0, _v20.createInteractionDomName)("registrant-login"),
    interactionSessionContext: {
      roomPassword: _v1,
      roomHashedPassword: _v2,
      roomUnlistedHash: _v3
    } = (0, _v2.useManager)(_v7.InteractionSessionManager)
  }) {
    let _v4 = (0, _v2.useScope)(),
      _v5 = (0, _v3.useRef)(null),
      [_v6, _v7] = (0, _v3.useState)(_v43.EIngestStatus.UNKNOWN),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)("registration"),
      {
        sessionId: _v12,
        setAccessBlocked: _v13,
        setJoinLabels: _v14,
        setIsTermsLabelEnabled: _v15,
        setJoinLabelIconEnabled: _v16
      } = (0, _v3.useContext)(_v49),
      {
        isLoading: _v17,
        isLoginFailed: _v18,
        isRoomUserAuthAttempted: _v19,
        error: _v20,
        errorMessage: _v21,
        roomInfo: _v22,
        log: _v23,
        onLogin: _v24,
        onResetError: _v25
      } = (0, _v50.useInteractionLoginOption)(_v26.EInteractionAuthOption.REGISTRANT),
      _v26 = _v6 === _v43.EIngestStatus.STREAMING,
      _v27 = _v6 === _v43.EIngestStatus.ENDED,
      _v28 = !!_v3,
      _v29 = _v22?.settings.privacy === _v26.EInteractionRoomPrivacy.EMBED_ONLY,
      _v30 = _v28 ? `${_v12}:${_v3}` : _v12,
      _v31 = (0, _v48.useRegistrantLoginCookie)(!0, _v30),
      _v32 = (0, _v3.useMemo)(() => {
        let _v0 = `${_v40.environmentConfig.PROTOCOL}//${_v40.environmentConfig.HOST}/live/interaction_tools/events/${_v12}/register`,
          _v1 = new URLSearchParams();
        "login" === _v10 && _v1.set("previewType", "login_screen"), _v3 && _v1.set("authRoomUnlistedHash", _v3), (_v1 || _v2) && _v1.set("authRoomPassword", _v1 || _v2), _v40.environmentConfig.IS_IFRAME && _v29 && _v1.set("pageReferrer", (0, _v45.getIframeReferrer)());
        let _v2 = _v1.toString();
        return _v2.length ? `${_v0}?${_v2}` : _v0;
      }, [_v12, _v10, _v3, _v1, _v2, _v29]),
      _v33 = (0, _v3.useCallback)(() => _v9(!1), []),
      _v34 = (0, _v3.useCallback)(() => _v9(!0), []),
      _v35 = (0, _v3.useCallback)(() => {
        _v11("registration"), _v34();
      }, [_v34]),
      _v36 = (0, _v3.useCallback)(() => {
        _v11("login"), _v34();
      }, [_v34]),
      _v37 = (0, _v3.useCallback)(async () => {
        if (_v22?.metadata.connections.ingestStatus) try {
          let _v0 = await (0, _v39.getSessionIngestStatus)({
            connection: _v22?.metadata.connections.ingestStatus,
            gctlConfig: (0, _v38.queryScopeGctlConfig)(_v4),
            fields: ["id", "ingest.status"]
          });
          _v7(_v0.ingest.status);
        } catch (_v0) {
          _v23.error("Failed to load ingest status:", _v0);
        }
      }, [_v22?.metadata.connections.ingestStatus, _v4, _v23]);
    return ((0, _v47.default)(_v5, _v33, null, [_v33]), (0, _v3.useEffect)(() => {
      ((0, _v46.isApiError)(_v20) && _v20.data.body.errorCode === _v42.EApiErrorCode.ROOM_AUTHORIZATION_FAILED_SESSION_ENDED || _v27) && _v13(_v21.translations.eventHasEnded);
    }, [_v20, _v27, _v13]), (0, _v3.useEffect)(() => {
      !_v19 && !_v17 && _v26 && _v31 && (_v33(), _v23.info("Attempt of registrant auto-login:", _v31), _v24({
        roomRegistrantUuid: _v31
      }).catch(_v0 => _v23.error("Attempt failed:", _v0)));
    }, [_v26, _v17, _v19, _v23, _v24, _v33, _v31]), (0, _v3.useEffect)(() => {
      _v26 ? (_v14(_v21.translations.registrationRequired), _v16(!1)) : _v14(_v21.translations.joinTheAudienceWhenTheEventIsLive), _v15(!1);
    }, [_v26]), (0, _v41.useInterval)(!!(!_v26 && _v22?.metadata.connections.ingestStatus), _v37, {
      checkCallable: !0,
      initialize: !0,
      period: 0
    }), (0, _v3.useEffect)(() => {
      _v25();
    }, []), _v26) ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v36.Modal, {
        isOpen: _v8,
        onClose: _v44.CallablePlaceholder,
        children: (0, _v1.jsx)(_v37.ModalContent, {
          id: (0, _v20.createInteractionDomName)(_v0, "modal-content"),
          ref: _v5,
          width: "100vw",
          maxWidth: (0, _v14.rem)(670),
          height: "100vh",
          maxHeight: (0, _v14.rem)(600),
          backgroundColor: "grayscale.800",
          children: (0, _v1.jsx)("iframe", {
            loading: "lazy",
            src: _v32,
            width: "100%",
            height: "100%",
            frameBorder: 0
          })
        })
      }), (0, _v1.jsx)(_v17.Paragraph, {
        id: _v0,
        size: "lg",
        textAlign: "center",
        color: "text-primary",
        children: _v21.translations.registerOrSignIntoEventToJoinAudience(_v35, _v36)
      }), _v18 ? (0, _v1.jsx)(_v17.Paragraph, {
        id: (0, _v20.createInteractionDomName)(_v0, "error"),
        size: "xs",
        color: "red.500",
        children: _v21
      }) : null]
    }) : null;
  }
  var _v52 = _v0.i(0),
    _v53 = _v0.i(0);
  function _v54({
    id: _v0 = (0, _v20.createInteractionDomName)("vimeo-login")
  }) {
    return (0, _v1.jsx)(_v53.VimeoUserLogin, {
      id: _v0,
      loginType: _v26.EInteractionAuthOption.VIMEO,
      buttonRenderer: ({
        label: _v0,
        ..._v1
      }) => (0, _v1.jsx)(_v52.Button, {
        size: "md",
        variant: "secondary",
        marginTop: (0, _v14.rem)(8),
        ..._v1,
        children: _v0
      })
    });
  }
  function _v55({
    value: _v0,
    children: _v1
  }) {
    return (0, _v1.jsx)(_v49.Provider, {
      value: _v0,
      children: _v1
    });
  }
  var _v56 = _v0.i(0);
  function _v57({
    id: _v0 = (0, _v20.createInteractionDomName)("widget-login"),
    interactionSessionContext: {
      sessionId: _v1,
      roomInfo: {
        value: _v2
      },
      roomUser: {
        value: _v3,
        isLoading: _v4
      },
      roomPassword: _v5,
      roomHashedPassword: _v6,
      interactionSessionActions: {
        checkPasswordAuth: _v7,
        authorizeInteractionUser: _v8
      }
    } = (0, _v2.useManager)(_v7.InteractionSessionManager)
  }) {
    let _v9 = (0, _v29.useLogger)("📡 BC in InteractionLoginLayout"),
      {
        initialState: {
          interaction: _v10
        }
      } = (0, _v6.useLiveGlobals)(),
      _v11 = !!_v10?.feature?.isReactionsOnly,
      [_v12, _v13] = (0, _v3.useState)(null),
      [_v14, _v15] = (0, _v3.useState)(!0),
      [_v16, _v17] = (0, _v3.useState)(_v21.translations.joinTheAudienceToParticipate),
      [_v18, _v19] = (0, _v3.useState)(!0),
      _v20 = _v2?.settings.authOptions || {},
      _v21 = !0 === _v20[_v26.EInteractionAuthOption.ADMIN],
      _v22 = _v2?.settings.privacy === _v26.EInteractionRoomPrivacy.PASSWORD,
      _v23 = (0, _v28.getFromLocalStorage)(_v25.localStorageConfig.INTERACTION.SAVED_USER_AUTH_PREFERENCES(_v1)),
      _v24 = !!(_v22 && !_v5 && !_v6),
      _v25 = !!(!0 === _v20[_v26.EInteractionAuthOption.REGISTRANT] && !_v3?.id),
      _v26 = !!(_v22 && _v4 && _v23),
      _v27 = Object.entries(_v20).filter(([_v0, _v1]) => _v1 && _v0 !== _v26.EInteractionAuthOption.ADMIN && _v0 !== _v26.EInteractionAuthOption.GUEST).length,
      _v28 = (0, _v3.useMemo)(() => ({
        sessionId: _v1.toString(),
        joinLabel: _v16,
        isTermsLabelEnabled: _v14,
        isJoinLabelIconEnabled: _v18,
        isAccessBlocked: !!_v12,
        accessBlockedReason: _v12,
        setIsTermsLabelEnabled: _v15,
        setJoinLabelIconEnabled: _v19,
        setAccessBlocked: _v13,
        setJoinLabels: _v0 => {
          _v17(_v0), _v19(!0);
        },
        resetLabels: () => {
          _v17(_v21.translations.joinTheAudienceToParticipate), _v15(!0);
        }
      }), [_v12, _v18, _v14, _v16, _v1]),
      _v29 = (0, _v3.useRef)(null),
      {
        isChannelActive: _v30,
        sendChannelMessage: _v31,
        subscribe: _v32,
        closeChannel: _v33
      } = (0, _v30.useBroadcastChannel)({
        name: _v24.interactionToolsConfig.BROADCAST_CHANNEL.NAME
      }),
      _v34 = (0, _v3.useCallback)(() => {
        _v29.current && (_v9.info("Unsubscribe from new_data messages"), _v29.current());
      }, [_v9]),
      _v35 = (0, _v3.useCallback)(() => {
        if (!_v29.current) {
          let _v0 = !1;
          _v29.current = _v32(function (_v0) {
            _v9.info("Subscribe to new_data messages"), _v0.type !== _v24.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.NEW_DATA || String(_v0?.payload?.sessionId) !== String(_v1) || _v0 || (_v9.info("Receive new_data message:", _v0), (_v0.payload.type === _v22.ECredentialsType.PASSWORD || _v0.payload.type === _v22.ECredentialsType.HASHED_PASSWORD) && (_v0 = !0, _v7(String(_v0.payload.value), _v0.payload.type).finally(() => _v0 = !1)), "registrant_uuid" === _v0.payload.type && (_v0 = !0, _v8({
              type: _v26.EInteractionAuthOption.REGISTRANT,
              roomRegistrantUuid: _v0.payload.value
            }).finally(() => _v0 = !1)));
          });
        }
      }, [_v8, _v7, _v9, _v1, _v32]);
    return ((0, _v3.useEffect)(() => {
      _v30 && (_v24 || _v25 ? (_v35(), _v24 && (_v9.info("Post ask_data message for:", _v22.ECredentialsType.PASSWORD), _v31({
        type: _v24.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.ASK_DATA,
        payload: {
          sessionId: String(_v1),
          type: _v22.ECredentialsType.PASSWORD
        }
      }), _v9.info("Post ask_data message for:", _v22.ECredentialsType.HASHED_PASSWORD), _v31({
        type: _v24.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.ASK_DATA,
        payload: {
          sessionId: String(_v1),
          type: _v22.ECredentialsType.HASHED_PASSWORD
        }
      })), _v25 && (_v9.info("Post ask_data message for:", "registrant_uuid"), _v31({
        type: _v24.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.ASK_DATA,
        payload: {
          sessionId: String(_v1),
          type: "registrant_uuid"
        }
      }))) : _v34());
    }, [_v1, _v30, _v25, _v24, _v9, _v35, _v34, _v31]), (0, _v3.useEffect)(() => () => {
      _v34(), _v9.info("Close channel"), _v33();
    }, [_v9, _v34, _v33]), _v12) ? (0, _v1.jsx)(_v55, {
      value: _v28,
      children: (0, _v1.jsx)(_v33.InteractionNoAccessLayout, {
        id: (0, _v20.createInteractionDomName)(_v0, "access-blocked"),
        isWithIcon: !0,
        reason: _v12
      })
    }) : _v24 || _v26 ? (0, _v1.jsx)(_v55, {
      value: _v28,
      children: (0, _v1.jsx)(_v31.InteractionPasswordLayout, {
        id: (0, _v20.createInteractionDomName)(_v0, "password-layout")
      })
    }) : _v27 || _v21 ? (0, _v1.jsx)(_v55, {
      value: _v28,
      children: (0, _v1.jsx)(_v15.Flex, {
        id: _v0,
        sx: _v32.PAGE_WRAPPER_STYLE,
        children: (0, _v1.jsxs)(_v15.Flex, {
          id: (0, _v20.createInteractionDomName)(_v0, "content"),
          sx: _v56.LOGIN_SCREEN_WRAPPER_STYLE,
          onKeyUp: _v27.stopEventPropagation,
          onKeyDown: _v27.stopEventPropagation,
          onKeyPress: _v27.stopEventPropagation,
          children: [(0, _v1.jsxs)(_v15.Flex, {
            id: (0, _v20.createInteractionDomName)(_v0, "form"),
            sx: _v56.LOGIN_CONTAINER_WRAPPER_STYLE,
            children: [(0, _v1.jsxs)(_v15.Flex, {
              id: (0, _v20.createInteractionDomName)(_v0, "context-labels"),
              sx: _v56.LOGIN_CONTEXT_LABELS_STYLE,
              children: [_v18 ? (0, _v1.jsx)(_v23.IconCircle, {
                id: (0, _v20.createInteractionDomName)(_v0, "context-icon"),
                children: _v11 ? (0, _v1.jsx)(_v19.Smile, {
                  boxSize: "md"
                }) : (0, _v1.jsx)(_v18.Chats, {
                  boxSize: "md"
                })
              }) : null, (0, _v1.jsx)(_v16.Header, {
                id: (0, _v20.createInteractionDomName)(_v0, "context-header"),
                size: "md",
                textAlign: "center",
                children: _v11 ? _v21.translations.joinTheAudienceToReact : _v16
              })]
            }), _v20[_v26.EInteractionAuthOption.ANONYMOUS] ? (0, _v1.jsx)(_v35.AnonymousLogin, {
              id: (0, _v20.createInteractionDomName)(_v0, "anonymous-login")
            }) : null, _v20[_v26.EInteractionAuthOption.REGISTRANT] ? (0, _v1.jsx)(_v51, {
              id: (0, _v20.createInteractionDomName)(_v0, "registrant-login")
            }) : null, _v20[_v26.EInteractionAuthOption.VIMEO] ? (0, _v1.jsx)(_v54, {
              id: (0, _v20.createInteractionDomName)(_v0, "vimeo-login")
            }) : null, _v14 && _v27 > 0 ? (0, _v1.jsx)(_v17.Paragraph, {
              size: "md",
              textAlign: "center",
              color: "text-secondary",
              margin: `${(0, _v14.rem)(8)} 0`,
              children: _v21.translations.contentYouSubmitThroughChatIsSubjectToVimeosTermsOfServiceAndPrivacyPolicy()
            }) : null]
          }), _v20[_v26.EInteractionAuthOption.ADMIN] ? (0, _v1.jsx)(_v34.AdminLogin, {
            id: (0, _v20.createInteractionDomName)(_v0, "admin-login")
          }) : null]
        })
      })
    }) : (0, _v1.jsx)(_v55, {
      value: _v28,
      children: (0, _v1.jsx)(_v33.InteractionNoAccessLayout, {
        id: (0, _v20.createInteractionDomName)(_v0, "no-access"),
        reason: _v8.T_ERROR_BECAUSE_OF_PRIVACY_CANNOT_JOIN
      })
    });
  }
  var _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  function _v64({
    id: _v0 = (0, _v20.createInteractionDomName)("widget-collapsible-login"),
    className: _v1 = (0, _v20.createInteractionDomName)("widget-collapsible-login"),
    interactionSessionContext: {
      roomUser: {
        value: _v2
      }
    } = (0, _v2.useManager)(_v7.InteractionSessionManager)
  }) {
    let {
        initialState: {
          interaction: _v3
        }
      } = (0, _v6.useLiveGlobals)(),
      {
        isEnabled: _v4
      } = (0, _v2.useManager)(_v61.ReactionManager, ({
        isEnabled: _v0
      }) => [_v0]),
      _v5 = !!_v3?.feature?.isReactionsOnly,
      _v6 = _v3?.toolbar?.attachPosition || _v58.ESidebarAttach.RIGHT,
      _v7 = (0, _v60.useIsPortraitScreenOrientation)(),
      _v8 = (0, _v3.useState)(null),
      _v9 = !!(!_v2 && _v3?.auth?.isCollapsibleSignIn),
      _v10 = _v8[0] === _v63.EInteractionModule.LOGIN || _v9,
      _v11 = !!(_v2?.isCreator && !_v3?.feature?.isManagementDisabled),
      _v12 = !0 === _v4,
      _v13 = (0, _v3.useMemo)(() => {
        let _v0 = {
            id: _v63.EInteractionModule.LOGIN,
            label: _v62.T_JOIN,
            icon: _v5 ? (0, _v1.jsx)(_v19.Smile, {}) : (0, _v1.jsx)(_v18.Chats, {}),
            isClosable: !0,
            header: _v62.T_JOIN,
            headerBackground: "surface",
            Content: _v57
          },
          _v1 = {
            id: _v63.EInteractionModule.REACTIONS,
            label: "Reactions",
            icon: (0, _v1.jsx)(_v19.Smile, {}),
            isClosable: !0,
            header: _v62.T_JOIN,
            headerBackground: "surface",
            Content: _v57
          };
        return [...(_v10 ? [_v0] : []), ...(_v12 ? [_v1] : [])];
      }, [_v10, _v5, _v12]);
    return (0, _v1.jsx)(_v15.Flex, {
      id: (0, _v20.createInteractionDomName)(_v0, "main"),
      className: (0, _v20.createInteractionDomName)(_v1, "main"),
      position: "relative",
      height: "100%",
      width: "100%",
      flexGrow: 1,
      overflow: "hidden",
      background: "surface",
      maxWidth: "100%",
      flexDirection: _v6 === _v58.ESidebarAttach.TOP || _v6 === _v58.ESidebarAttach.BOTTOM || _v7 ? "column" : "row",
      justifyContent: _v6 !== _v58.ESidebarAttach.TOP && (_v6 !== _v58.ESidebarAttach.LEFT || _v7) ? "flex-end" : "flex-start",
      children: (0, _v1.jsx)(_v59.ResponsiveSidebar, {
        id: _v0,
        attach: _v6,
        items: _v13,
        initialStateValue: _v63.EInteractionModule.LOGIN,
        isWithHeader: _v11 || _v6 !== _v58.ESidebarAttach.TOP,
        isPortrait: _v7,
        isInactiveDisabled: _v3?.isStandalone,
        isFullscreen: _v3?.toolbar?.panelIsFluid,
        maxSize: _v3?.toolbar?.panelMaxSize,
        state: _v8,
        onOpen: _v3?.toolbar?.panelOnOpen,
        onClose: _v3?.toolbar?.panelOnClose,
        onToggleExtend: _v3?.toolbar?.panelOnToggleExtend
      })
    });
  }
  _v0.s(["InteractionToolsRouter", 0, function ({
    id: _v0 = (0, _v9.createDomName)("loader"),
    className: _v1 = (0, _v9.createDomName)("loader"),
    interactionSessionContext: {
      roomInfo: {
        value: _v2,
        isLoading: _v3
      },
      roomUser: {
        value: _v4,
        isLoading: _v5
      }
    } = (0, _v2.useManager)(_v7.InteractionSessionManager)
  }) {
    let {
        initialState: _v6
      } = (0, _v6.useLiveGlobals)(),
      {
        setIsApplicationAvailableForModeration: _v7
      } = (0, _v12.useInteractionToolsStatusObserverContext)(),
      _v8 = (0, _v11.useIsVpaas)();
    if ((0, _v3.useEffect)(() => {
      _v3 || _v5 || _v7(!!(_v4?.isCreator && !_v6?.interaction?.feature?.isManagementDisabled || _v8 && _v4?.capabilities?.canUseQnaModeration));
    }, [_v6?.interaction?.feature?.isManagementDisabled, _v3, _v5, _v8, _v4?.isCreator, _v4?.capabilities?.canUseQnaModeration, _v7]), _v3) return (0, _v1.jsx)(_v5.BlockingLoadingWrapper, {
      id: _v0,
      className: _v1,
      overlayColor: _v6?.interaction?.backgroundColor || "background",
      opacity: 1,
      withLoader: !0
    });
    if (_v2) if (_v4) return (0, _v1.jsx)(_v13.InteractionRoomLayout, {});else if (_v8) return (0, _v1.jsx)(_v4.LiveErrorPage, {
      title: _v8.T_ERROR_THIS_PAGE_ISNT_AVAILABLE,
      message: _v8.T_ERROR_THE_LINK_MIGHT_HAVE_EXPIRED,
      isHeaderEnabled: !1
    });else if (_v6?.interaction?.auth?.isCollapsibleSignIn && !_v6?.interaction?.isStandalone) return (0, _v1.jsx)(_v64, {});else return (0, _v1.jsx)(_v57, {});
    throw new _v10.LiveError("Failed to render interaction application without room info.");
  }], 0);
}