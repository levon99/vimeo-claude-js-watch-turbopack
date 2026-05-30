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
    _v28 = _v0.i(0);
  function _v29({
    className: _v0 = (0, _v15.createDomName)("chat-message"),
    isPublic: _v1,
    sender: _v2,
    message: _v3,
    isCurrentSender: _v4,
    isCreator: _v5,
    isBlocked: _v6,
    onDeleteMessage: _v7,
    onBlockUser: _v8,
    onUnblockUser: _v9
  }) {
    let _v10 = (0, _v4.useCallback)(() => {
        _v7(_v3.id);
      }, [_v7, _v3?.id]),
      _v11 = (0, _v4.useCallback)(() => {
        _v8 && _v8(_v2.id);
      }, [_v2.id, _v8]),
      _v12 = (0, _v4.useCallback)(() => {
        _v9 && _v9(_v2.id);
      }, [_v2.id, _v9]),
      {
        displayName: _v13
      } = _v2,
      {
        createdAt: _v14,
        message: _v15
      } = _v3,
      _v16 = _v13 || _v13.T_NO_NAME,
      _v17 = _v5 || _v4,
      _v18 = _v1 && _v5 && !_v4 && !_v2.isCreator;
    return (0, _v1.jsx)(_v6.Flex, {
      "data-group": !0,
      as: "li",
      className: _v0,
      alignItems: "flex-start",
      opacity: _v6 ? .6 : 1,
      borderRadius: "sm",
      padding: (0, _v7.rem)(8),
      overflow: "hidden",
      width: "100%",
      maxWidth: "100%",
      animation: `${_v25.OPACITY_FROM_HIDDEN_TO_VISIBLE_KEYFRAMES} 750ms`,
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      children: (0, _v1.jsxs)(_v5.Box, {
        position: "relative",
        width: "100%",
        children: [(0, _v1.jsxs)(_v6.Flex, {
          className: (0, _v15.createDomName)(_v0, "author"),
          position: "relative",
          alignItems: "center",
          justifyContent: "flex-start",
          margin: `0 0 ${(0, _v7.rem)(6)}`,
          gap: (0, _v7.rem)(8),
          height: (0, _v7.rem)(24),
          children: [(0, _v1.jsxs)(_v6.Flex, {
            className: (0, _v15.createDomName)(_v0, "author-name"),
            alignItems: "center",
            position: "relative",
            width: 0,
            flexGrow: 1,
            gap: (0, _v7.rem)(8),
            children: [(0, _v1.jsx)(_v22.ChatMessageAuthor, {
              className: (0, _v15.createDomName)(_v0, "author-name-label"),
              isCurrentSender: _v4,
              senderName: _v16
            }), _v4 ? (0, _v1.jsx)(_v18.Badge, {
              className: (0, _v15.createDomName)(_v0, "author-name-badge-me"),
              size: "sm",
              variant: "staff",
              flexShrink: 0,
              children: _v13.T_ME
            }) : null, _v2.isCreator ? (0, _v1.jsx)(_v18.Badge, {
              className: (0, _v15.createDomName)(_v0, "author-name-badge-host"),
              size: "sm",
              flexShrink: 0,
              children: _v13.T_HOST
            }) : null]
          }), (0, _v1.jsx)(_v19.Paragraph, {
            className: (0, _v15.createDomName)(_v0, "time"),
            size: "sm",
            whiteSpace: "nowrap",
            display: "flex",
            color: "text-secondary",
            variant: "body-sm",
            _groupHover: {
              visibility: "hidden"
            },
            children: (0, _v24.getTwoDigitFormat)(_v14)
          }), _v17 || _v18 ? (0, _v1.jsxs)(_v6.Flex, {
            display: "none",
            justifyContent: "flex-end",
            alignItems: "center",
            position: "absolute",
            color: "text-secondary",
            zIndex: 5,
            minWidth: (0, _v7.rem)(48),
            height: (0, _v7.rem)(24),
            top: 0,
            right: 0,
            _groupHover: {
              display: "flex"
            },
            children: [_v17 ? (0, _v1.jsx)(_v27.BokehTooltip, {
              placement: "top",
              modifiers: [{
                name: "flip",
                enabled: !0,
                options: {
                  fallbackPlacements: ["top-end"]
                }
              }],
              label: _v13.T_DELETE_MESSAGE,
              children: (0, _v1.jsx)(_v26.BokehIconButton, {
                className: (0, _v15.createDomName)(_v0, "delete-button"),
                size: "xs",
                icon: (0, _v1.jsx)(_v20.TrashBin, {}),
                iconWidth: (0, _v7.rem)(16),
                iconHeight: (0, _v7.rem)(16),
                height: (0, _v7.rem)(24),
                width: (0, _v7.rem)(24),
                padding: "0!important",
                onClick: _v10
              })
            }) : null, _v18 ? (0, _v1.jsx)(_v27.BokehTooltip, {
              placement: "top",
              modifiers: [{
                name: "flip",
                enabled: !0,
                options: {
                  fallbackPlacements: ["top-end"]
                }
              }],
              label: _v6 ? _v13.T_UNBLOCK : _v13.T_BLOCK_USER,
              children: (0, _v1.jsx)(_v26.BokehIconButton, {
                className: (0, _v15.createDomName)(_v0, _v6 ? "unblock" : "block", "button"),
                size: "xs",
                icon: (0, _v1.jsx)(_v21.StopBanRight, {
                  color: _v6 ? "red.500" : "inherit"
                }),
                iconWidth: (0, _v7.rem)(16),
                iconHeight: (0, _v7.rem)(16),
                height: (0, _v7.rem)(24),
                width: (0, _v7.rem)(24),
                padding: "0!important",
                onClick: _v6 ? _v12 : _v11
              })
            }) : null]
          }) : null]
        }), (0, _v1.jsx)(_v6.Flex, {
          flexDirection: "column",
          flexGrow: 1,
          children: (0, _v1.jsx)(_v28.LiveErrorBoundary, {
            component: "ChatMessageContent",
            additionalInfo: {
              message: _v3
            },
            children: (0, _v1.jsx)(_v23.ChatMessageContent, {
              className: (0, _v15.createDomName)(_v0, "content"),
              messageText: _v15
            })
          })
        })]
      })
    });
  }
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  function _v39({
    className: _v0 = (0, _v15.createDomName)("chat-modal"),
    active: _v1,
    header: _v2,
    text: _v3,
    cancelAction: _v4,
    confirmAction: _v5,
    showAskAgainCheckBox: _v6 = !1,
    onCheck: _v7 = _v38.CallablePlaceholder
  }) {
    return (0, _v1.jsxs)(_v30.Modal, {
      size: "sm",
      isOpen: _v1,
      onClose: _v38.CallablePlaceholder,
      children: [(0, _v1.jsx)(_v31.ModalOverlay, {}), (0, _v1.jsxs)(_v32.ModalContent, {
        className: (0, _v15.createDomName)(_v0, "content"),
        children: [(0, _v1.jsx)(_v33.ModalHeader, {
          className: (0, _v15.createDomName)(_v0, "header"),
          children: _v2
        }), (0, _v1.jsx)(_v35.ModalBody, {
          children: (0, _v1.jsx)(_v19.Paragraph, {
            className: (0, _v15.createDomName)(_v0, "text"),
            size: "md",
            display: "block",
            children: _v3
          })
        }), (0, _v1.jsxs)(_v34.ModalFooter, {
          flexDirection: "column",
          children: [_v6 ? (0, _v1.jsx)(_v36.Checkbox, {
            className: (0, _v15.createDomName)(_v0, "checkbox"),
            width: "100%",
            color: "text-primary",
            autoFocus: !1,
            onChange: _v7,
            children: _v13.T_DONT_ASK_ME_AGAIN_TO_DELETE
          }) : null, (0, _v1.jsxs)(_v6.Flex, {
            gap: (0, _v7.rem)(16),
            width: "100%",
            children: [(0, _v1.jsx)(_v37.Button, {
              className: (0, _v15.createDomName)(_v0, "cancel-button"),
              variant: "secondary",
              width: "100%",
              onClick: _v4,
              children: _v13.T_CANCEL
            }), (0, _v1.jsx)(_v37.Button, {
              className: (0, _v15.createDomName)(_v0, "confirm-button"),
              variant: "destructive",
              width: "100%",
              onClick: _v5,
              children: _v13.T_CONFIRM
            })]
          })]
        })]
      })]
    });
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0);
  function _v42({
    automatic: _v0 = !1,
    children: _v1,
    showing: _v2,
    ..._v3
  }) {
    let _v4 = (0, _v4.useRef)(null),
      [_v5, _v6] = (0, _v4.useState)(0);
    return (0, _v4.useLayoutEffect)(() => {
      _v2 && _v6(() => _v4.current ? _v4.current.scrollHeight : 0);
    }, [_v1, _v2]), (0, _v4.useLayoutEffect)(() => {
      _v0 || _v6(0);
    }, [_v0]), (0, _v1.jsx)(_v5.Box, {
      ref: _v4,
      overflowY: "hidden",
      transition: "all 200ms ease-in-out",
      maxHeight: _v2 ? _v5 : 0,
      ..._v3,
      children: _v1
    });
  }
  function _v43({
    content: _v0,
    showing: _v1,
    onClickAction: _v2
  }) {
    return (0, _v1.jsx)(_v5.Box, {
      className: (0, _v15.createDomName)("chat-notice-slider-wrapper"),
      position: "absolute",
      opacity: +!!_v1,
      children: (0, _v1.jsx)(_v42, {
        showing: _v1,
        children: (0, _v1.jsx)(_v5.Box, {
          className: (0, _v15.createDomName)("chat-notice-wrapper"),
          cursor: "pointer",
          backgroundColor: "surface",
          onClick: _v2,
          children: (0, _v1.jsx)(_v40.Alert, {
            status: "info",
            children: (0, _v1.jsx)(_v41.AlertDescription, {
              className: (0, _v15.createDomName)("chat-notice-text"),
              children: _v0
            })
          })
        })
      })
    });
  }
  function _v44(_v0) {
    return (0, _v4.useMemo)(() => Object.values(_v0).slice(-_v9.interactionToolsConfig.CHAT.IN_MEMORY_MESSAGES_LIMIT), [_v0]);
  }
  _v0.s(["useChatHistoryMessages", 0, _v44], 0), _v0.s(["ChatHistory", 0, function ({
    id: _v0 = (0, _v15.createDomName)("chat-history"),
    className: _v1 = (0, _v15.createDomName)("chat-history"),
    chatType: _v2,
    currentUserId: _v3,
    scrollBackground: _v4 = "surface",
    placeholder: _v5
  }) {
    let {
        chatActions: {
          deleteMessage: _v6,
          blockChatUser: _v7,
          unblockChatUser: _v8
        },
        config: {
          isCreator: _v9
        },
        [_v2]: {
          participants: _v10,
          messages: _v11,
          banList: _v12
        }
      } = (0, _v2.useManager)(_v11.ChatManager),
      _v13 = _v44(_v11),
      _v14 = _v9.interactionToolsConfig.CHAT.ASK_TO_DELETE_CHAT_MESSAGE,
      _v15 = (0, _v4.useRef)(void 0),
      _v16 = (0, _v4.useRef)(void 0),
      _v17 = (0, _v4.useRef)(null),
      _v18 = (0, _v4.useRef)(null),
      [_v19, _v20] = (0, _v4.useState)(null),
      [_v21, _v22] = (0, _v4.useState)(null),
      [_v23, _v24] = (0, _v4.useState)(null),
      [_v25, _v26] = (0, _v4.useState)(!1),
      [_v27, _v28] = (0, _v4.useState)(!1),
      [_v29, _v30] = (0, _v4.useState)(!1),
      _v31 = (0, _v4.useCallback)((_v0 = !0) => {
        if (_v18.current && _v17.current) {
          let _v0 = _v17.current;
          _v0.scroll({
            top: _v0.scrollHeight,
            behavior: _v0 ? "smooth" : "auto"
          });
        }
        _v29 || _v30(!0);
      }, [_v29, _v30]),
      _v32 = (0, _v4.useCallback)(() => {
        let _v0 = _v17.current;
        _v0 && 200 > (0, _v16.getElementVerticalScroll)(_v0) && _v25 && _v26(!1);
      }, [_v25, _v26]),
      _v33 = (0, _v4.useCallback)(() => {
        if (!_v13 || !_v13.length) return;
        let _v0 = _v13[_v13.length - 1];
        if (!_v0 || _v16.current === _v0.createdAt) return;
        _v16.current = _v0.createdAt;
        let _v1 = _v17.current;
        if (!_v1) return;
        let _v2 = (0, _v16.getElementVerticalScroll)(_v1),
          _v3 = _v1.children[_v1.childElementCount - 2];
        if (!_v2 || !_v3) {
          _v29 || _v30(!0);
          return;
        }
        if (_v2 < (0, _v3.default)(Math.max(2 * _v3.clientHeight, _v1.clientHeight), 200, 600) || _v3 === _v0.senderId) return _v31();
        _v25 || _v26(!0);
      }, [_v3, _v29, _v13, _v31, _v25]),
      _v34 = (0, _v4.useCallback)(() => {
        _v19 && (_v6(_v2, _v19), _v20(null), _v2 === _v14.EChatType.PUBLIC ? (0, _v12.trackDeleteMessage)() : (0, _v12.trackDeleteBackstageMessage)());
      }, [_v2, _v19, _v20, _v6]),
      _v35 = (0, _v4.useCallback)(() => {
        _v20(null);
      }, [_v20]),
      _v36 = (0, _v4.useCallback)(() => {
        _v21 && (_v7(_v2, _v21), _v24(_v10[_v21].displayName), _v22(null), _v28(!0), (0, _v12.trackBanUser)());
      }, [_v2, _v21, _v10, _v7, _v22, _v28]),
      _v37 = (0, _v4.useCallback)(() => {
        _v22(null);
      }, [_v22]),
      _v38 = (0, _v4.useCallback)(_v0 => {
        _v9.interactionToolsConfig.CHAT.ASK_TO_DELETE_CHAT_MESSAGE = !_v0.target.checked;
      }, []),
      _v39 = (0, _v4.useCallback)(_v0 => {
        _v0 && _v22(_v0);
      }, [_v22]),
      _v40 = (0, _v4.useCallback)(_v0 => _v8(_v2, _v0), [_v2, _v8]),
      _v41 = (0, _v4.useCallback)(() => {
        _v28(!1), _v24(null);
      }, [_v28, _v24]),
      _v42 = (0, _v4.useCallback)(_v0 => !!_v12 && Object.values(_v12).some(({
        userId: _v0
      }) => _v0 === _v0), [_v12]);
    (0, _v4.useEffect)(() => {
      _v31(!1), (0, _v12.trackViewChat)();
    }, []), (0, _v4.useLayoutEffect)(() => {
      _v13.length && _v33();
    }, [_v13]), (0, _v4.useEffect)(() => (_v27 && (_v15.current = setTimeout(_v41, 0)), () => clearTimeout(_v15.current)), [_v27]), (0, _v4.useEffect)(() => {
      !_v14 && _v19 && _v34();
    }, [_v19]);
    let _v43 = function ({
        showNewMessageNotice: _v0,
        scrollChatHistoryToBottom: _v1,
        showBlockedUserNotice: _v2,
        blockedUser: _v3,
        handleCloseBlockUserNotice: _v4
      }) {
        return (0, _v4.useMemo)(() => _v0 ? {
          showing: _v0,
          content: _v13.T_NEW_MESSAGES_RECEIVED,
          onClickAction: _v1
        } : _v2 ? {
          showing: _v2,
          content: (0, _v13.T_USER_WAS_BLOCKED)(_v3 || _v13.T_NO_NAME),
          onClickAction: _v4
        } : {
          showing: !1,
          content: "",
          onClickAction: _v38.CallablePlaceholder
        }, [_v0, _v1, _v2, _v3, _v4]);
      }({
        showNewMessageNotice: _v25,
        scrollChatHistoryToBottom: _v31,
        showBlockedUserNotice: _v27,
        blockedUser: _v23,
        handleCloseBlockUserNotice: _v41
      }),
      _v44 = function ({
        deleteMessageId: _v0,
        handleDeleteCancel: _v1,
        handleDeleteConfirm: _v2,
        blockUserId: _v3,
        handleBlockUserCancel: _v4,
        handleBlockUserConfirm: _v5,
        onCheckAskAgain: _v6
      }) {
        return (0, _v4.useMemo)(() => _v0 ? {
          active: !!_v0,
          header: _v13.T_DELETE_MESSAGE,
          text: _v13.T_ARE_YOU_SURE_DELETE_MESSAGE,
          cancelAction: _v1,
          confirmAction: _v2,
          onCheck: _v6,
          showAskAgainCheckBox: !0
        } : _v3 ? {
          active: !!_v3,
          header: _v13.T_BLOCK_USER,
          text: _v13.T_ARE_YOU_SURE_BLOCK_USER,
          cancelAction: _v4,
          confirmAction: _v5
        } : {
          active: !1,
          header: "",
          text: "",
          cancelAction: _v38.CallablePlaceholder,
          confirmAction: _v38.CallablePlaceholder
        }, [_v0, _v1, _v2, _v3, _v4, _v5, _v6]);
      }({
        deleteMessageId: _v19,
        handleDeleteCancel: _v35,
        handleDeleteConfirm: _v34,
        blockUserId: _v21,
        handleBlockUserCancel: _v37,
        handleBlockUserConfirm: _v36,
        onCheckAskAgain: _v38
      }),
      _v45 = _v14 && !!_v19 || !!_v21,
      _v46 = _v2 === _v14.EChatType.PUBLIC,
      _v47 = (0, _v10.useScrollbarStyles)({
        scrollbarColor: _v4
      });
    return _v13.length ? (0, _v1.jsxs)(_v6.Flex, {
      id: _v0,
      className: _v1,
      flexGrow: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-end",
      overflowY: "hidden",
      width: "100%",
      paddingBottom: (0, _v7.rem)(8),
      sx: {
        contentVisibility: "auto"
      },
      children: [(0, _v1.jsxs)(_v5.Box, {
        as: "ul",
        ref: _v17,
        width: "100%",
        flexGrow: 0,
        overflowY: "scroll",
        transition: "opacity 400ms ease",
        opacity: +!!_v29,
        sx: _v47,
        onScroll: _v32,
        children: [_v13.map(_v0 => {
          let _v1 = _v10[_v0.senderId],
            _v2 = _v0.senderId !== _v3 && _v42(_v0.senderId),
            _v3 = _v46 && _v2 && !_v9 && (!_v3 || _v3 !== _v0.senderId),
            _v4 = _v3 === _v1.id;
          return _v3 || !_v1 ? null : (0, _v1.jsx)(_v29, {
            message: _v0,
            sender: _v1,
            isPublic: _v46,
            isCurrentSender: _v4,
            isCreator: _v9,
            isBlocked: _v2,
            onDeleteMessage: _v20,
            onBlockUser: _v46 ? _v39 : void 0,
            onUnblockUser: _v46 ? _v40 : void 0
          }, _v0.id);
        }), (0, _v1.jsx)(_v5.Box, {
          ref: _v18,
          as: "li",
          id: (0, _v15.createDomName)(_v0, "history-bottom"),
          className: (0, _v15.createDomName)(_v1, "history-bottom")
        })]
      }), (0, _v1.jsx)(_v43, {
        ..._v43
      }), _v45 ? (0, _v1.jsx)(_v39, {
        ..._v44
      }) : null]
    }) : _v5 || (0, _v1.jsx)(_v17.EmptyStatePlaceholder, {
      id: (0, _v15.createDomName)(_v0, "placeholder"),
      className: (0, _v15.createDomName)(_v1, "placeholder"),
      icon: (0, _v1.jsx)(_v8.Chats, {
        boxSize: "lg"
      }),
      description: _v13.T_CHAT_PLACEHOLDER[_v2].text,
      control: null
    });
  }], 0);
}