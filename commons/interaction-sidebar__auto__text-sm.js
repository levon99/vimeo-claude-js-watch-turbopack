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
    _v21 = _v0.i(0);
  let _v22 = (0, _v3.memo)(function ({
    id: _v0 = (0, _v5.createInteractionDomName)("interaction-sidebar"),
    attach: _v1,
    isPortrait: _v2,
    isStandalone: _v3,
    isFullscreen: _v4,
    maxSize: _v5,
    onOpen: _v6,
    onClose: _v7,
    onToggleExtend: _v8,
    interactionSessionContext: {
      roomInfo: {
        value: _v9
      },
      roomUser: {
        value: _v10
      }
    } = (0, _v2.useManager)(_v9.InteractionSessionManager)
  }) {
    let {
        initialState: _v11,
        initialState: {
          interaction: _v12
        }
      } = (0, _v7.useLiveGlobals)(),
      _v13 = (0, _v3.useState)(null),
      [_v14, _v15] = (0, _v3.useState)(!!(!_v10?.isCreator && _v9?.settings.authOptions.admin && !_v3)),
      {
        items: _v16
      } = (0, _v21.useInteractionSidebarItems)(_v13[0]),
      _v17 = !!(_v10?.isCreator && !_v12?.feature?.isManagementDisabled),
      _v18 = (0, _v3.useCallback)(() => _v15(!1), [_v15]);
    return (0, _v1.jsx)(_v20.ResponsiveSidebar, {
      id: _v0,
      state: _v13,
      items: _v16,
      attach: _v1,
      isPortrait: _v2,
      isFullscreen: _v4,
      isInactiveDisabled: _v3,
      isWithHeader: _v17 || _v1 !== _v14.ESidebarAttach.TOP,
      maxSize: _v5,
      contentNotice: _v14 ? (0, _v1.jsx)(_v17.Alert, {
        margin: `${(0, _v18.rem)(24)} ${(0, _v18.rem)(24)} 0`,
        width: "auto",
        maxWidth: "100%",
        fontSize: "text-sm",
        onClose: _v18,
        children: _v19.translations.youDoNotHaveAccessToModerateThisEvent
      }) : null,
      backgroundColor: _v11?.interaction?.backgroundColor,
      onOpen: _v6,
      onClose: _v7,
      onToggleExtend: _v8
    });
  });
  function _v23({
    id: _v0 = (0, _v5.createInteractionDomName)("widget-auto")
  }) {
    let _v1 = (0, _v15.useIsPortraitScreenOrientation)(),
      {
        initialState: {
          interaction: _v2
        }
      } = (0, _v7.useLiveGlobals)(),
      _v3 = _v2?.toolbar?.attachPosition || _v14.ESidebarAttach.RIGHT;
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v16.PAGE_WRAPPER_STYLE,
      children: (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "main"),
        position: "relative",
        height: "100%",
        width: "100%",
        flexGrow: 1,
        overflow: "hidden",
        background: "surface",
        maxWidth: "100%",
        flexDirection: _v3 === _v14.ESidebarAttach.TOP || _v3 === _v14.ESidebarAttach.BOTTOM || _v1 ? "column" : "row",
        justifyContent: _v3 !== _v14.ESidebarAttach.TOP && (_v3 !== _v14.ESidebarAttach.LEFT || _v1) ? "flex-end" : "flex-start",
        children: (0, _v1.jsx)(_v22, {
          id: (0, _v5.createInteractionDomName)(_v0, "sidebar"),
          attach: _v3,
          isPortrait: _v1,
          isStandalone: _v2?.isStandalone,
          isFullscreen: _v2?.toolbar?.panelIsFluid,
          maxSize: _v2?.toolbar?.panelMaxSize,
          onOpen: _v2?.toolbar?.panelOnOpen,
          onClose: _v2?.toolbar?.panelOnClose,
          onToggleExtend: _v2?.toolbar?.panelOnToggleExtend
        })
      })
    });
  }
  var _v24 = _v0.i(0),
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
    _v40 = _v0.i(0);
  function _v41({
    id: _v0 = (0, _v5.createInteractionDomName)("content"),
    activeModule: _v1,
    isManagementAccessed: _v2,
    firebaseContext: {
      isInteractionReady: _v3
    } = (0, _v2.useManager)(_v31.InteractionFirebaseManager)
  }) {
    let {
        initialState: _v4
      } = (0, _v7.useLiveGlobals)(),
      {
        id: _v5,
        header: _v6,
        headerMenu: _v7,
        Content: _v8
      } = (0, _v3.useMemo)(() => {
        switch (_v1) {
          case _v11.EInteractionModule.CHAT:
            return {
              id: _v11.EInteractionModule.CHAT,
              header: _v32.T_CHAT,
              headerMenu: _v2 ? (0, _v1.jsx)(_v27.ChatSettingsButton, {
                buttonIcon: (0, _v1.jsx)(_v25.EllipsisV, {})
              }) : void 0,
              Content: _v2 ? _v35.ChatManage : ({
                id: _v0
              }) => (0, _v1.jsx)(_v36.ChatView, {
                id: _v0,
                chatType: _v11.EChatType.PUBLIC
              })
            };
          case _v11.EInteractionModule.POLL:
            return {
              id: _v11.EInteractionModule.POLL,
              header: _v32.T_POLLS,
              headerMenu: _v2 ? (0, _v1.jsx)(_v28.PollSettingsButton, {
                buttonIcon: (0, _v1.jsx)(_v25.EllipsisV, {})
              }) : void 0,
              Content: _v2 ? _v37.PollManage : _v38.PollView
            };
          case _v11.EInteractionModule.QNA:
            return {
              id: _v11.EInteractionModule.QNA,
              header: _v32.T_QNA,
              headerMenu: _v2 ? (0, _v1.jsx)(_v29.QnaSettingsButton, {
                buttonIcon: (0, _v1.jsx)(_v25.EllipsisV, {})
              }) : void 0,
              Content: _v2 ? _v39.QnaManage : _v40.QnaView
            };
          default:
            throw new _v34.LiveError(`Unexpected activeModule provided: '${_v1}'.`, {
              code: _v33.ELiveErrorCode.INVALID_PARAMETERS
            });
        }
      }, [_v1, _v2]);
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      height: "100%",
      width: "100%",
      maxWidth: (0, _v18.rem)(640),
      flexDirection: "column",
      flexGrow: 1,
      flexBasis: 0,
      overflow: "hidden",
      backgroundColor: _v4?.interaction?.backgroundColor || "background",
      children: _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [_v2 ? (0, _v1.jsxs)(_v4.Flex, {
          id: (0, _v5.createInteractionDomName)(_v0, "content-header", _v5),
          justifyContent: "space-between",
          alignItems: "center",
          padding: (0, _v18.rem)(16),
          children: [(0, _v1.jsx)(_v24.Text, {
            id: (0, _v5.createInteractionDomName)(_v0, "header"),
            variant: "heading-sm",
            color: "text-primary",
            children: _v6
          }), _v7 || null]
        }) : null, (0, _v1.jsx)(_v26.LiveErrorBoundary, {
          additionalInfo: _v5,
          component: "InteractionContent",
          children: (0, _v1.jsx)(_v8, {
            id: (0, _v5.createInteractionDomName)(_v0, "item-content", _v5)
          })
        }, _v5)]
      }) : (0, _v1.jsx)(_v30.BlockingLoadingWrapper, {
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["InteractionRoomLayout", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("widget-room"),
    interactionSessionContext: {
      sessionId: _v1,
      roomInfo: {
        value: _v2
      },
      roomUser: {
        value: _v3
      },
      roomPassword: _v4,
      roomHashedPassword: _v5
    } = (0, _v2.useManager)(_v9.InteractionSessionManager)
  }) {
    let _v6 = (0, _v12.useLogger)("📡 BC in InteractionRoomLayout"),
      {
        initialState: {
          interaction: _v7
        }
      } = (0, _v7.useLiveGlobals)(),
      _v8 = (0, _v3.useRef)(null),
      _v9 = !!(_v3?.isCreator && !_v7?.feature?.isManagementDisabled),
      _v10 = _v2?.settings.authOptions || {},
      _v11 = _v2?.settings.privacy === _v10.EInteractionRoomPrivacy.PASSWORD,
      _v12 = !0 === _v10[_v10.EInteractionAuthOption.REGISTRANT],
      _v13 = _v7?.feature?.module,
      _v14 = !_v13 || _v13 === _v11.EInteractionModule.AUTO,
      {
        isChannelActive: _v15,
        sendChannelMessage: _v16,
        subscribe: _v17,
        closeChannel: _v18
      } = (0, _v13.useBroadcastChannel)({
        name: _v8.interactionToolsConfig.BROADCAST_CHANNEL.NAME
      }),
      _v19 = (0, _v3.useCallback)(() => {
        _v8.current && (_v6.info("Unsubscribe from ask_data messages"), _v8.current());
      }, [_v6]),
      _v20 = (0, _v3.useCallback)(() => {
        _v8.current || (_v8.current = _v17(function (_v0) {
          if (_v6.info("Subscribe to ask_data messages"), _v0.type !== _v8.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.ASK_DATA || String(_v0?.payload?.sessionId) !== String(_v1)) return;
          _v6.info("Receive ask_data message:", _v0);
          let _v1 = {
            type: _v8.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.NEW_DATA,
            payload: {
              sessionId: String(_v1),
              type: _v0.payload.type
            }
          };
          _v0.payload.type === _v6.ECredentialsType.PASSWORD && _v4 && (_v1.payload.value = _v4), _v0.payload.type === _v6.ECredentialsType.HASHED_PASSWORD && _v5 && (_v1.payload.value = _v5), "registrant_uuid" === _v0.payload.type && _v3?.id && (_v1.payload.value = _v3.id), _v1.payload.value && (_v6.info("Post new_data message as a response", _v1), _v16(_v1));
        }));
      }, [_v6, _v5, _v4, _v3?.id, _v16, _v1, _v17]);
    return (0, _v3.useEffect)(() => {
      _v15 && (_v11 || _v12 ? _v20() : _v19());
    }, [_v15, _v12, _v11, _v20, _v19]), (0, _v3.useEffect)(() => () => {
      _v19(), _v6.info("Close channel"), _v18();
    }, [_v6, _v19, _v18]), _v14 ? (0, _v1.jsx)(_v23, {}) : (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v16.PAGE_WRAPPER_STYLE,
      children: (0, _v1.jsx)(_v41, {
        id: (0, _v5.createInteractionDomName)(_v0, "content"),
        activeModule: _v13,
        isManagementAccessed: _v9
      })
    });
  }], 0);
  var _v42 = _v0.i(0);
  function _v43({
    children: _v0,
    ..._v1
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      background: (0, _v42.useColorModeValue)("slate.50", "grayscale.800"),
      height: (0, _v18.rem)(56),
      width: (0, _v18.rem)(56),
      borderRadius: "50%",
      textAlign: "center",
      flexShrink: 0,
      justifyContent: "center",
      alignItems: "center",
      ..._v1,
      children: _v0
    });
  }
  _v0.s(["IconCircle", 0, _v43], 0);
  var _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v0.i(0),
    _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0);
  _v0.s(["InteractionPasswordLayout", 0, function ({
    id: _v0 = (0, _v51.createDomName)("password-screen"),
    className: _v1 = (0, _v51.createDomName)("password-screen"),
    interactionSessionContext: {
      sessionId: _v2,
      roomUser: {
        error: _v3,
        isLoading: _v4
      },
      interactionSessionActions: {
        checkPasswordAuth: _v5
      }
    } = (0, _v2.useManager)(_v9.InteractionSessionManager)
  }) {
    let [_v6, _v7] = (0, _v3.useState)(!1),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10,, _v11] = (0, _v50.useDomInputValue)(""),
      _v12 = !!(_v3 && !_v4 && _v8),
      {
        isChannelActive: _v13,
        sendChannelMessage: _v14
      } = (0, _v13.useBroadcastChannel)({
        name: _v8.interactionToolsConfig.BROADCAST_CHANNEL.NAME
      }),
      _v15 = (0, _v3.useCallback)(async _v0 => {
        if (_v0.preventDefault(), _v0.stopPropagation(), _v9(!0), _v10 && (_v7(!0), await _v5(_v10), _v13)) try {
          _v14({
            type: _v8.interactionToolsConfig.BROADCAST_CHANNEL.MESSAGE_TYPE.NEW_DATA,
            payload: {
              sessionId: String(_v2),
              type: _v6.ECredentialsType.PASSWORD,
              value: _v10
            }
          });
        } catch (_v0) {
          _v54.Logger.getGlobal().error("Failed to send password layout channel message:", _v0), (0, _v53.trackLiveError)(_v0, {
            component: "InteractionPasswordLayout",
            category: _v52.ELiveErrorCategory.INTERACTION
          });
        }
      }, [_v10, _v5, _v13, _v2, _v14]);
    return (0, _v3.useEffect)(() => {
      _v3 && _v7(!1);
    }, [_v3]), (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      className: _v1,
      sx: _v16.PAGE_WRAPPER_STYLE,
      children: (0, _v1.jsx)(_v44.Box, {
        margin: "auto",
        paddingX: (0, _v18.rem)(8),
        children: (0, _v1.jsxs)("form", {
          id: (0, _v51.createDomName)(_v0, "form"),
          className: (0, _v51.createDomName)(_v1, "form"),
          onSubmit: _v15,
          children: [(0, _v1.jsx)(_v46.Header, {
            size: "lg",
            textAlign: "center",
            marginBottom: (0, _v18.rem)(30),
            color: "text-primary",
            children: _v19.translations.passwordRequired
          }), (0, _v1.jsxs)(_v4.Flex, {
            children: [(0, _v1.jsxs)(_v45.FormControl, {
              isInvalid: _v12,
              children: [(0, _v1.jsx)(_v47.Password, {
                id: (0, _v51.createDomName)(_v0, "form-input"),
                className: (0, _v51.createDomName)(_v1, "form-input"),
                size: "md",
                placeholder: _v19.translations.enterPassword,
                value: _v10,
                isDisabled: _v4,
                onChange: _v11
              }), (0, _v1.jsx)(_v48.FormErrorMessage, {
                children: _v12 ? _v19.translations.incorrectPassword : ""
              })]
            }), (0, _v1.jsx)(_v49.Button, {
              id: (0, _v51.createDomName)(_v0, "form-button"),
              className: (0, _v51.createDomName)(_v1, "form-button"),
              type: "submit",
              isDisabled: !_v10 || _v4,
              isLoading: _v6,
              marginLeft: (0, _v18.rem)(16),
              children: _v19.translations.submit
            })]
          })]
        })
      })
    });
  }], 0);
  var _v55 = _v0.i(0),
    _v56 = _v0.i(0);
  let _v57 = {
      alignItems: "center",
      flexDirection: "column",
      height: "100%",
      flexGrow: 1,
      flexBasis: 0,
      overflow: "auto",
      width: "100%",
      maxWidth: (0, _v18.rem)(640),
      minHeight: (0, _v18.rem)(280),
      background: "surface"
    },
    _v58 = {
      flexDirection: "column",
      padding: (0, _v18.rem)(16),
      color: "text-primary",
      maxWidth: (0, _v18.rem)(420),
      width: "100%",
      margin: "auto"
    },
    _v59 = {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: (0, _v18.rem)(24),
      rowGap: (0, _v18.rem)(16)
    };
  _v0.s(["LOGIN_CONTAINER_WRAPPER_STYLE", 0, _v58, "LOGIN_CONTEXT_LABELS_STYLE", 0, _v59, "LOGIN_SCREEN_WRAPPER_STYLE", 0, _v57], 0), _v0.s(["InteractionNoAccessLayout", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("interaction-no-access"),
    isWithIcon: _v1,
    reason: _v2
  }) {
    return (0, _v1.jsx)(_v4.Flex, {
      id: _v0,
      sx: _v16.PAGE_WRAPPER_STYLE,
      children: (0, _v1.jsx)(_v4.Flex, {
        id: (0, _v5.createInteractionDomName)(_v0, "content"),
        sx: _v57,
        children: (0, _v1.jsx)(_v4.Flex, {
          id: (0, _v5.createInteractionDomName)(_v0, "form"),
          sx: _v58,
          children: (0, _v1.jsxs)(_v4.Flex, {
            sx: _v59,
            children: [_v1 ? (0, _v1.jsx)(_v43, {
              id: (0, _v5.createInteractionDomName)(_v0, "icon"),
              children: (0, _v1.jsx)(_v56.Comment, {
                boxSize: "sm"
              })
            }) : null, (0, _v1.jsx)(_v55.Paragraph, {
              size: "lg",
              textAlign: "center",
              color: "text-secondary",
              children: _v2
            })]
          })
        })
      })
    });
  }], 0);
  var _v60 = _v0.i(0),
    _v61 = _v0.i(0),
    _v62 = _v0.i(0),
    _v63 = _v0.i(0);
  function _v64(_v0) {
    let _v1 = (0, _v12.useLogger)("auth"),
      {
        roomInfo: {
          value: _v2
        },
        roomUser: {
          error: _v3,
          isLoading: _v4
        },
        isRoomUserAuthAttempted: _v5,
        interactionSessionActions: _v6
      } = (0, _v2.useManager)(_v9.InteractionSessionManager),
      _v7 = !!_v3 && _v3?.data?.authType === _v0,
      _v8 = (0, _v3.useMemo)(() => {
        if (!_v7 || _v4) return null;
        if ((0, _v63.isApiError)(_v3)) switch (_v3.data.body.errorCode) {
          case _v33.EApiErrorCode.ROOM_AUTHORIZATION_FAILED:
            return _v19.translations.errorRoomJoinFailed + ".";
          case _v33.EApiErrorCode.ROOM_AUTHORIZATION_FAILED_SESSION_ENDED:
            return _v19.translations.eventHasEnded + ".";
          case _v33.EApiErrorCode.ROOM_AUTHORIZATION_FAILED_NOT_LIVE_YET:
            return _v19.translations.eventHasNotStarted + ".";
        }
        return _v19.translations.requestError;
      }, [_v3, _v4, _v7]);
    return {
      isLoading: _v4,
      isLoginFailed: _v7,
      isRoomUserAuthAttempted: _v5,
      roomInfo: _v2,
      log: _v1,
      error: _v3,
      errorMessage: _v8,
      onLogin: (0, _v3.useCallback)(_v0 => _v6.authorizeInteractionUser({
        type: _v0,
        ..._v0
      }), [_v0, _v6]),
      onResetError: (0, _v3.useCallback)(() => {
        _v6.resetAuthError();
      }, [_v6])
    };
  }
  function _v65({
    id: _v0 = (0, _v5.createInteractionDomName)("vimeo-user-login"),
    loginType: _v1 = _v10.EInteractionAuthOption.VIMEO,
    buttonRenderer: _v2
  }) {
    let [_v3, _v4] = (0, _v3.useState)(!1),
      [_v5, _v6] = (0, _v3.useState)("login"),
      _v7 = (0, _v62.useViewer)(),
      {
        isLoading: _v8,
        isLoginFailed: _v9,
        errorMessage: _v10,
        onLogin: _v11
      } = _v64(_v1),
      _v12 = !!(_v7 && !_v7?.user),
      _v13 = (0, _v3.useCallback)(() => _v11(), [_v11]),
      _v14 = (0, _v3.useCallback)(() => _v4(!1), []),
      _v15 = (0, _v3.useCallback)(() => _v4(!0), []),
      _v16 = (0, _v3.useCallback)(async () => {
        _v7.refreshJwt && (await _v7.refreshJwt(), await (0, _v60.nextAsyncQueue)(), await _v11()), _v4(!1);
      }, [_v7, _v11]);
    return (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v12 ? (0, _v1.jsx)(_v61.LoginJoinModal, {
        type: _v5,
        xsrft: _v7.xsrft,
        isShowing: _v3,
        onDismiss: _v14,
        onSuccess: _v16,
        redirectUrl: window.location.href,
        redirectUrlAfterSocialLogin: window.location.href,
        updateInitialType: _v6
      }) : null, _v2({
        id: (0, _v5.createInteractionDomName)(_v0, "button"),
        label: _v19.translations.loginWithVimeo,
        isDisabled: _v8,
        onClick: _v12 ? _v15 : _v13
      }), _v9 ? (0, _v1.jsx)(_v55.Paragraph, {
        id: (0, _v5.createInteractionDomName)(_v0, "error"),
        size: "xs",
        color: "red.500",
        children: _v10
      }) : null]
    });
  }
  _v0.s(["useInteractionLoginOption", 0, _v64], 0), _v0.s(["VimeoUserLogin", 0, _v65], 0), _v0.s(["AdminLogin", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("admin-login")
  }) {
    return (0, _v1.jsxs)(_v4.Flex, {
      id: _v0,
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: `${(0, _v18.rem)(8)} ${(0, _v18.rem)(16)}`,
      maxWidth: (0, _v18.rem)(480),
      margin: `${(0, _v18.rem)(16)} ${(0, _v18.rem)(16)} ${(0, _v18.rem)(24)} ${(0, _v18.rem)(16)}`,
      borderRadius: (0, _v18.rem)(8),
      backgroundColor: "background-blur",
      children: [(0, _v1.jsx)(_v46.Header, {
        size: "xs",
        children: _v19.translations.moderatorLogIn
      }), (0, _v1.jsx)(_v55.Paragraph, {
        size: "md",
        color: "text-secondary",
        children: _v19.translations.ifYouAreModeratorForThisEvent
      }), (0, _v1.jsx)(_v65, {
        id: _v0,
        loginType: _v10.EInteractionAuthOption.ADMIN,
        buttonRenderer: ({
          label: _v0,
          ..._v1
        }) => (0, _v1.jsx)(_v49.Button, {
          size: "md",
          variant: "tertiary",
          flexShrink: 0,
          ..._v1,
          children: _v0
        })
      })]
    });
  }], 0);
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  _v0.s(["AnonymousLogin", 0, function ({
    id: _v0 = (0, _v5.createInteractionDomName)("anonymous-login")
  }) {
    let [_v1, _v2] = (0, _v3.useState)(""),
      _v3 = _v1.trim(),
      _v4 = _v3.length >= _v8.interactionToolsConfig.AUTHORIZATION.MIN_DISPLAYNAME_LENGTH && _v3.length <= _v8.interactionToolsConfig.AUTHORIZATION.MAX_DISPLAYNAME_LENGTH,
      {
        isLoading: _v5,
        isLoginFailed: _v6,
        error: _v7,
        errorMessage: _v8,
        onResetError: _v9,
        onLogin: _v10
      } = _v64(_v10.EInteractionAuthOption.ANONYMOUS),
      _v11 = (0, _v3.useCallback)(_v0 => {
        _v2(_v0.target.value), _v7 && _v9();
      }, [_v7, _v9]),
      _v12 = (0, _v3.useCallback)(_v0 => {
        _v0.preventDefault(), _v0.stopPropagation(), _v10({
          roomDisplayName: _v3
        });
      }, [_v3, _v10]);
    return (0, _v1.jsxs)("form", {
      onSubmit: _v12,
      id: _v0,
      children: [(0, _v1.jsxs)(_v45.FormControl, {
        isInvalid: _v6,
        children: [(0, _v1.jsx)(_v66.FormLabel, {
          color: "text-primary",
          fontWeight: 700,
          marginBottom: (0, _v18.rem)(8),
          children: _v19.translations.name
        }), (0, _v1.jsx)(_v67.Input, {
          id: (0, _v5.createInteractionDomName)(_v0, "input"),
          size: "md",
          value: _v1,
          isDisabled: _v5,
          fontSize: (0, _v18.rem)(_v69.browserConfig.BROWSER?.isMobile ? 16 : 14),
          onChange: _v11
        })]
      }), (0, _v1.jsx)(_v49.Button, {
        id: (0, _v5.createInteractionDomName)(_v0, "button"),
        size: "md",
        type: "submit",
        isDisabled: _v5 || !_v4,
        width: "100%",
        marginTop: (0, _v18.rem)(24),
        children: _v19.translations.joinAudience
      }), _v8 ? (0, _v1.jsx)(_v17.Alert, {
        status: "error",
        margin: `${(0, _v18.rem)(8)} 0 0 0`,
        onClose: _v9,
        children: (0, _v1.jsx)(_v68.AlertDescription, {
          margin: 0,
          children: _v8
        })
      }) : null]
    });
  }], 0);
}