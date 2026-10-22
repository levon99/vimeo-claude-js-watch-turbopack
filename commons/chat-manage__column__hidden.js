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
    _v33 = _v0.i(0);
  function _v34({
    id: _v0 = (0, _v27.createInteractionDomName)("chat-manage")
  }) {
    let {
        isEnabled: _v1,
        chatActions: {
          enableChat: _v2
        }
      } = (0, _v2.useManager)(_v13.ChatManager),
      {
        interactionCredentials: _v3,
        connectionStatuses: {
          isInteractionConnected: _v4
        }
      } = (0, _v2.useManager)(_v33.InteractionFirebaseManager),
      {
        initialState: _v5
      } = (0, _v12.useLiveGlobals)(),
      _v6 = _v3?.user?.id,
      _v7 = (0, _v3.useCallback)(() => {
        _v2();
      }, [_v2]);
    return (0, _v1.jsx)(_v23.Box, {
      id: _v0,
      flexDirection: "column",
      flexGrow: 1,
      maxHeight: "100%",
      overflowY: "hidden",
      children: null !== _v1 && _v6 ? (0, _v1.jsx)(_v24.Flex, {
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        overflowY: "hidden",
        padding: `0 ${(0, _v25.rem)(16)} ${(0, _v25.rem)(16)} ${(0, _v25.rem)(16)}`,
        children: _v5?.interaction?.isStandalone ? _v1 ? (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v29.ChatHistory, {
            chatType: _v19.EChatType.PUBLIC,
            currentUserId: _v6,
            scrollBackground: _v5?.interaction?.backgroundColor || "background"
          }), (0, _v1.jsx)(_v30.ChatInput, {
            chatType: _v19.EChatType.PUBLIC,
            isDisabled: !_v4
          })]
        }) : (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
          icon: (0, _v1.jsx)(_v26.Chats, {
            boxSize: "lg"
          }),
          buttonLabel: _v28.translations.turnOn,
          description: _v28.translations.turnOnChatToEngageWithYourAudience,
          onButtonClick: _v7
        }) : (0, _v1.jsxs)(_v1.Fragment, {
          children: [(0, _v1.jsx)(_v29.ChatHistory, {
            chatType: _v19.EChatType.PUBLIC,
            currentUserId: _v6,
            scrollBackground: _v5?.interaction?.backgroundColor || "background"
          }), (0, _v1.jsx)(_v30.ChatInput, {
            chatType: _v19.EChatType.PUBLIC,
            isDisabled: !_v4
          })]
        })
      }) : (0, _v1.jsx)(_v31.ChatPreloader, {
        id: (0, _v27.createInteractionDomName)(_v0, "preloader")
      })
    });
  }
  function _v35({
    id: _v0 = (0, _v27.createInteractionDomName)("chat-view"),
    className: _v1 = (0, _v27.createInteractionDomName)("chat-view"),
    chatType: _v2
  }) {
    let {
        interactionCredentials: _v3,
        connectionStatuses: {
          isInteractionConnected: _v4
        }
      } = (0, _v2.useManager)(_v33.InteractionFirebaseManager, ({
        interactionCredentials: _v0
      }) => [_v0]),
      {
        isEnabled: _v5,
        [_v2]: {
          banList: _v6
        }
      } = (0, _v2.useManager)(_v13.ChatManager),
      {
        initialState: _v7
      } = (0, _v12.useLiveGlobals)(),
      _v8 = _v3?.user?.id,
      _v9 = !!_v8 && Object.values(_v6 ?? {}).some(_v0 => _v0.userId === _v8);
    return (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      flexGrow: 1,
      flexDirection: "column",
      overflow: "hidden",
      paddingTop: (0, _v25.rem)(4),
      children: _v8 ? _v5 ? (0, _v1.jsxs)(_v24.Flex, {
        id: (0, _v27.createInteractionDomName)(_v0, "content"),
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        padding: `0 ${(0, _v25.rem)(16)} ${(0, _v25.rem)(16)} ${(0, _v25.rem)(16)}`,
        children: [(0, _v1.jsx)(_v29.ChatHistory, {
          chatType: _v2,
          currentUserId: _v8,
          scrollBackground: _v7?.interaction?.backgroundColor || "background",
          placeholder: (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
            id: (0, _v27.createInteractionDomName)(_v0, "chat-history-placeholder"),
            icon: (0, _v1.jsx)(_v26.Chats, {
              boxSize: "lg"
            }),
            description: _v28.translations.sendMessageToStartChat,
            control: null
          })
        }), _v7?.interaction?.feature?.isComposerHidden ? null : (0, _v1.jsx)(_v30.ChatInput, {
          chatType: _v2,
          isDisabled: !_v4 || _v9,
          placeholderText: _v9 ? _v18.T_CHAT_BANNED : _v28.translations.sendMessage
        })]
      }) : (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
        id: (0, _v27.createInteractionDomName)(_v0, "placeholder"),
        className: (0, _v27.createInteractionDomName)(_v1, "placeholder"),
        icon: (0, _v1.jsx)(_v26.Chats, {
          boxSize: "lg"
        }),
        control: null
      }) : (0, _v1.jsx)(_v31.ChatPreloader, {
        id: (0, _v27.createInteractionDomName)(_v0, "preloader")
      })
    });
  }
  _v0.s(["ChatManage", 0, _v34], 0), _v0.s(["ChatView", 0, _v35], 0);
  var _v36 = _v0.i(0),
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
    _v51 = _v0.i(0);
  function _v52({
    id: _v0 = (0, _v51.createDomName)("create-button-minimized"),
    className: _v1 = (0, _v51.createDomName)("create-button-minimized"),
    isDisabled: _v2,
    withBottomMargin: _v3,
    icon: _v4 = (0, _v1.jsx)(_v50.Plus, {
      width: (0, _v25.rem)(16),
      maxWidth: (0, _v25.rem)(16)
    }),
    children: _v5,
    onClick: _v6
  }) {
    return (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      borderRadius: (0, _v25.rem)(4),
      justifyContent: "center",
      color: "stroke",
      margin: `${(0, _v25.rem)(16)} 0 ${_v3 ? (0, _v25.rem)(16) : 0} 0`,
      children: (0, _v1.jsx)(_v49.Button, {
        id: (0, _v51.createDomName)(_v0, "target"),
        className: (0, _v51.createDomName)(_v1, "target"),
        variant: "primary",
        isDisabled: _v2,
        leftIcon: _v4,
        width: "100%",
        onClick: _v6,
        children: _v5
      })
    });
  }
  var _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = {
    position: "relative",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: (0, _v25.rem)(24)
  };
  function _v59() {
    return {
      padding: `${(0, _v25.rem)(16)} ${(0, _v25.rem)(8)}`,
      height: "100%",
      overflowY: "auto",
      overflowX: "visible",
      "@supports (-moz-appearance: none)": {
        paddingRight: (0, _v25.rem)(20)
      }
    };
  }
  let _v60 = (0, _v57.createPollInteractionObject)({
    id: "",
    question: "",
    state: _v19.EPollState.DRAFT,
    createdAt: 0,
    options: [(0, _v57.createPollOptionInteractionObject)({
      id: (0, _v36.v4)(),
      text: ""
    }, {
      validate: !1
    }), (0, _v57.createPollOptionInteractionObject)({
      id: (0, _v36.v4)(),
      text: ""
    }, {
      validate: !1
    })]
  }, {
    validate: !1
  });
  function _v61({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-manage"),
    className: _v1 = (0, _v27.createInteractionDomName)("poll-manage")
  }) {
    let {
        isHydrated: _v2,
        activePollId: _v3,
        polls: _v4,
        pollsHistory: _v5,
        pollActions: {
          createPoll: _v6,
          updatePoll: _v7,
          deletePoll: _v8,
          setActivePoll: _v9
        }
      } = (0, _v2.useManager)(_v14.PollManager),
      [_v10, _v11] = (0, _v3.useState)(!1),
      [_v12, _v13] = (0, _v3.useState)(null),
      {
        initialState: _v14
      } = (0, _v12.useLiveGlobals)(),
      {
        setIsHeaderEnabled: _v15
      } = (0, _v55.useResponsiveSidebarContext)(),
      _v16 = (0, _v3.useMemo)(() => Object.values(_v4), [_v4]),
      _v17 = _v16.some(_v0 => _v0.state === _v19.EPollState.OPENED),
      _v18 = _v16.some(_v0 => _v0.state === _v19.EPollState.CLOSED),
      _v19 = !_v17,
      {
        panels: _v20,
        activePolls: _v21,
        activePanelId: _v22,
        setActivePanelId: _v23
      } = (0, _v46.usePollPanels)(_v4),
      _v24 = (0, _v3.useCallback)(() => {
        _v15(!1), _v11(!0);
      }, [_v15]),
      _v25 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, {
          ..._v0,
          state: _v19.EPollState.CLOSED
        });
      }, [_v7]),
      _v26 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, {
          ..._v0,
          state: _v19.EPollState.ARCHIVED
        });
      }, [_v7]),
      _v27 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v3 ? _v4[_v3] : null;
        _v1 && _v26(_v1), _v7(_v0.id, {
          ..._v0,
          state: _v19.EPollState.OPENED
        }), _v9(_v0.id);
      }, [_v3, _v4, _v7, _v9, _v26]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        _v15(!1), _v13(_v0);
      }, [_v15]),
      _v29 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v30 = (0, _v3.useCallback)(() => {
        _v11(!1), _v15(!0);
      }, [_v15]),
      _v31 = (0, _v3.useCallback)(_v0 => (_v11(!1), _v15(!0), _v6(_v0)), [_v6, _v15]),
      _v32 = (0, _v3.useCallback)(() => {
        _v13(null), _v15(!0);
      }, [_v15]),
      _v33 = (0, _v3.useCallback)(_v0 => (_v13(null), _v15(!0), _v7(_v0.id, _v0)), [_v15, _v7]),
      _v34 = (0, _v56.useScrollbarStyles)();
    return _v10 ? (0, _v1.jsx)(_v23.Box, {
      id: _v0,
      className: _v1,
      sx: _v59(),
      children: (0, _v1.jsx)(_v44.PollForm, {
        poll: _v60,
        onClose: _v30,
        onSubmit: _v31
      })
    }) : _v12 ? (0, _v1.jsx)(_v23.Box, {
      id: _v0,
      className: _v1,
      sx: _v59(),
      children: (0, _v1.jsx)(_v44.PollForm, {
        poll: _v12,
        onClose: _v32,
        onSubmit: _v33
      })
    }) : _v2 ? _v16.length ? (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      className: _v1,
      sx: _v58,
      children: [(0, _v1.jsxs)(_v37.Tabs, {
        size: "sm",
        sx: _v53.TABS_STYLES,
        onChange: _v23,
        children: [(0, _v1.jsxs)(_v38.TabList, {
          children: [_v20.map(({
            id: _v0,
            label: _v1
          }) => (0, _v1.jsx)(_v39.Tab, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab"),
            children: _v1
          }, _v0)), (0, _v1.jsx)(_v37.TabIndicator, {})]
        }), (0, _v1.jsx)(_v40.TabPanels, {
          sx: _v53.TAB_PANELS_STYLES,
          children: _v20.map(({
            id: _v0,
            polls: _v1
          }) => (0, _v1.jsx)(_v41.TabPanel, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab-panel"),
            sx: _v53.TAB_PANEL_STYLES,
            children: (0, _v1.jsx)(_v23.Box, {
              id: (0, _v27.createInteractionDomName)(_v0, _v0, "scroll"),
              sx: {
                ...(0, _v53.createTabListScrollStyle)({
                  fullWidth: !0
                }),
                ..._v34
              },
              children: (0, _v1.jsx)(_v23.Box, {
                id: (0, _v27.createInteractionDomName)(_v0, _v0, "column"),
                sx: (0, _v53.createTabListColumnStyle)(!0),
                children: 0 === _v1.length ? (0, _v1.jsx)(_v47.PollEmptyState, {
                  id: (0, _v27.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                  className: (0, _v27.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                  width: "100%",
                  height: "100%",
                  buttonLabel: _v18.T_CREATE_POLL,
                  description: 0 === _v0 ? _v28.translations.createPollToInteractWithAudience : _v28.translations.noPollsArchived,
                  control: 0 === _v0,
                  history: 0 === _v0 ? _v5 : null,
                  onCreateClick: _v24
                }) : _v1.map(_v0 => {
                  var _v1;
                  return (0, _v1.jsx)(_v23.Box, {
                    sx: _v53.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
                    children: (0, _v1.jsx)(_v45.PollItem, {
                      poll: _v0,
                      isAnyPollPublished: _v18,
                      canOpenPoll: _v19,
                      menuAttach: "left-start",
                      itemActions: {
                        onPollOpen: _v27,
                        onPollClose: _v25,
                        onPollArchive: _v26
                      },
                      menuActions: (_v1 = {
                        onPollEdit: _v28,
                        onPollDelete: _v29
                      }, _v0.state === _v19.EPollState.DRAFT ? [{
                        key: "edit",
                        label: _v28.translations.edit,
                        onClick: () => {
                          _v1.onPollEdit(_v0);
                        },
                        icon: (0, _v1.jsx)(_v42.EditPencil, {})
                      }, {
                        key: "delete",
                        label: _v28.translations.remove,
                        onClick: () => {
                          _v1.onPollDelete(_v0.id);
                        },
                        icon: (0, _v1.jsx)(_v43.TrashBin, {})
                      }] : [])
                    })
                  }, _v0.id);
                })
              })
            })
          }, _v0))
        }, _v22)]
      }), (0, _v1.jsx)(_v24.Flex, {
        position: "relative",
        children: (0, _v1.jsx)(_v54.HorizontalScrollShadow, {
          color: _v14?.interaction?.backgroundColor || "background"
        })
      }), 0 === _v22 && 0 !== _v21.length ? (0, _v1.jsx)(_v52, {
        id: (0, _v27.createInteractionDomName)(_v0, "add-button"),
        onClick: _v24,
        children: _v28.translations.addPoll
      }) : null]
    }) : (0, _v1.jsx)(_v47.PollEmptyState, {
      id: _v0,
      className: _v1,
      buttonLabel: _v18.T_CREATE_POLL,
      description: _v28.translations.createPollToInteractWithAudience,
      history: _v5,
      maxWidth: (0, _v25.rem)(360),
      sx: _v58,
      onCreateClick: _v24
    }) : (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      className: _v1,
      sx: _v58,
      children: (0, _v1.jsx)(_v48.BlockingLoadingWrapper, {
        id: (0, _v27.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["PollManage", 0, _v61], 0);
  var _v62 = _v0.i(0),
    _v63 = _v0.i(0),
    _v64 = _v0.i(0);
  function _v65({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-results"),
    poll: _v1
  }) {
    let _v2 = _v1.options.reduce((_v0, _v1) => _v0 + _v1.votesCount, 0);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v64.PollOptionVotesBar, {
        id: (0, _v27.createInteractionDomName)(_v0, "option", _v1),
        option: _v0,
        state: _v1.state,
        totalCount: _v2,
        isBold: !0
      }, _v0.id))
    });
  }
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0),
    _v69 = _v0.i(0);
  function _v70({
    id: _v0,
    className: _v1 = (0, _v51.createDomName)("poll-option-votes"),
    option: _v2,
    isBold: _v3 = !1
  }) {
    let _v4 = (0, _v67.useColorModeValue)("slate.200", "grayscale.700");
    return (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      className: _v1,
      width: "100%",
      overflow: "hidden",
      position: "relative",
      direction: "column",
      justifyContent: "center",
      children: [(0, _v1.jsx)(_v24.Flex, {
        width: "100%",
        justifyContent: "space-between",
        margin: `${(0, _v25.rem)(4)} 0`,
        padding: `${(0, _v25.rem)(4)} 0`,
        children: (0, _v1.jsxs)(_v24.Flex, {
          overflow: "hidden",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v69.Text, {
            className: (0, _v51.createDomName)(_v1, "option-text"),
            variant: "body-xl",
            fontSize: "text-sm",
            lineHeight: (0, _v25.rem)(18),
            marginRight: (0, _v25.rem)(8),
            children: _v2.text
          }), _v2.isVotedByMe ? (0, _v1.jsx)(_v68.Checkmark, {
            className: (0, _v51.createDomName)(_v1, "your-answer-icon"),
            "data-testid": "yourAnswerIcon",
            height: (0, _v25.rem)(14)
          }) : null]
        })
      }), (0, _v1.jsx)(_v24.Flex, {
        className: (0, _v51.createDomName)(_v1, "bar"),
        overflow: "hidden",
        borderRadius: _v3 ? (0, _v25.rem)(8) : (0, _v25.rem)(4),
        height: _v3 ? (0, _v25.rem)(8) : (0, _v25.rem)(4),
        backgroundColor: _v4,
        children: (0, _v1.jsx)(_v24.Flex, {
          position: "absolute",
          width: 0,
          zIndex: 5,
          borderRadius: _v3 ? (0, _v25.rem)(8) : (0, _v25.rem)(4),
          height: _v3 ? (0, _v25.rem)(8) : (0, _v25.rem)(4),
          background: "status-info-primary"
        })
      })]
    });
  }
  function _v71({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-vote"),
    poll: _v1,
    isVotedOption: _v2,
    onSetVote: _v3
  }) {
    let _v4 = _v1.options.some(_v0 => _v0.isVotedByMe),
      _v5 = (0, _v67.useColorModeValue)("slate.400", "grayscale.700"),
      _v6 = (0, _v67.useColorModeValue)("slate.400", "grayscale.600"),
      _v7 = (0, _v67.useColorModeValue)("slate.50", "grayscale.700"),
      _v8 = (0, _v3.useCallback)((_v0, _v1) => {
        _v3(_v0, _v1);
      }, [_v3]);
    return _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v70, {
        id: (0, _v27.createInteractionDomName)(_v0, "option", _v1),
        option: _v0,
        isBold: !0
      }, _v0.id)), (0, _v1.jsx)(_v66.Paragraph, {
        size: "sm",
        color: "text-secondary",
        children: _v28.translations.waitingForFinalResults
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v49.Button, {
        id: (0, _v27.createInteractionDomName)(_v0, "option", _v1),
        "aria-label": _v0.text,
        variant: "tertiary",
        rightIcon: _v0.isVotedByMe ? (0, _v1.jsx)(_v68.Checkmark, {}) : void 0,
        isDisabled: _v2,
        width: "100%",
        justifyContent: "space-between",
        flexShrink: 0,
        border: "1px solid",
        whiteSpace: "break-spaces",
        textAlign: "left",
        minHeight: "sm",
        height: "auto",
        borderColor: _v5,
        backgroundColor: `${_v0.isVotedByMe ? _v6 : "transparent"}!important`,
        _disabled: {
          opacity: 1
        },
        _hover: {
          backgroundColor: `${_v7}!important`
        },
        onClick: () => _v8(_v1.id, _v1),
        children: _v0.text
      }, _v0.id))
    });
  }
  let _v72 = {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: (0, _v25.rem)(24),
    flexDirection: "column",
    alignSelf: "flex-start",
    rowGap: (0, _v25.rem)(16),
    overflow: "auto"
  };
  function _v73({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-view")
  }) {
    let {
        isHydrated: _v1,
        polls: _v2,
        activePollId: _v3,
        pollActions: _v4
      } = (0, _v2.useManager)(_v14.PollManager),
      _v5 = _v3 ? _v2[_v3] : null;
    if (!_v1) return (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      sx: _v72,
      children: (0, _v1.jsx)(_v48.BlockingLoadingWrapper, {
        opacity: .1,
        withAnimation: !0
      })
    });
    if (!_v5) return (0, _v1.jsxs)(_v24.Flex, {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "auto",
      children: [(0, _v1.jsx)(_v63.ChartGrowthAlt, {
        boxSize: "lg"
      }), (0, _v1.jsx)(_v24.Flex, {
        id: (0, _v27.createInteractionDomName)(_v0, "placeholder"),
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        color: "text-secondary",
        textAlign: "center",
        flexGrow: 1,
        margin: `${(0, _v25.rem)(16)} 0`,
        children: _v28.translations.noPollCurrentlyAvailable
      })]
    });
    let _v6 = _v5.options.some(_v0 => _v0.isVotedByMe),
      _v7 = _v5.state === _v19.EPollState.OPENED;
    return (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      sx: _v72,
      children: [(0, _v1.jsx)(_v62.Header, {
        id: (0, _v27.createInteractionDomName)(_v0, "question"),
        size: "sm",
        margin: 0,
        sx: {
          wordWrap: "break-word"
        },
        children: _v5.question
      }), _v7 ? (0, _v1.jsx)(_v71, {
        id: (0, _v27.createInteractionDomName)(_v0, "votes"),
        poll: _v5,
        onSetVote: _v4.voteForPollOption,
        isVotedOption: _v6
      }) : (0, _v1.jsx)(_v65, {
        id: (0, _v27.createInteractionDomName)(_v0, "results"),
        poll: _v5
      })]
    });
  }
  _v0.s(["PollView", 0, _v73], 0);
  var _v74 = _v0.i(0),
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
    _v85 = _v0.i(0);
  function _v86({
    id: _v0 = (0, _v27.createInteractionDomName)("qna-manage")
  }) {
    let {
        isHydrated: _v1,
        activeSession: _v2,
        activeSessionPinnedQuestionId: _v3,
        qnaReplies: _v4,
        qnaActions: {
          approveQuestion: _v5,
          archiveQuestion: _v6,
          unArchiveQuestion: _v7,
          pinQuestion: _v8,
          unPinQuestion: _v9,
          deleteQuestionReply: _v10
        }
      } = (0, _v2.useManager)(_v15.QnAManager),
      {
        connectionStatuses: {
          isInteractionConnected: _v11
        }
      } = (0, _v2.useManager)(_v33.InteractionFirebaseManager),
      {
        initialState: _v12
      } = (0, _v12.useLiveGlobals)(),
      {
        selectedQuestionId: _v13,
        selectedQuestionState: _v14,
        selectedQuestionElement: _v15,
        onSelectedQuestion: _v16,
        onDeselectQuestion: _v17
      } = (0, _v84.useQnaResponding)(),
      {
        panels: _v18,
        currentQuestions: _v19,
        activePanelId: _v20,
        setActivePanelId: _v21
      } = (0, _v80.useQnaPanels)(),
      {
        getIdByIndex: _v22,
        getIndexById: _v23
      } = (0, _v81.useTabsMapping)(_v18),
      _v24 = (0, _v82.useSimpleNotification)(),
      _v25 = null !== _v13 && (0, _v83.canReplyQuestion)(_v19.find(_v0 => _v0.id === _v13)) && !(0, _v83.hasQuestionReplies)(_v13 ? _v4?.[_v13] : void 0),
      _v26 = (0, _v3.useCallback)(_v0 => {
        _v5(_v0.id), _v24({
          message: _v18.T_QUESTION_APPROVED
        });
      }, [_v5, _v24]),
      _v27 = (0, _v3.useCallback)(_v0 => {
        _v6(_v0.id, !!_v0.approved), _v24({
          message: _v18.T_QUESTION_ARCHIVED
        });
      }, [_v6, _v24]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, !!_v0.approved), _v24({
          message: _v18.T_QUESTION_UNARCHIVED
        });
      }, [_v24, _v7]),
      _v29 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0), _v24({
          message: _v18.T_QUESTION_PINNED
        });
      }, [_v24, _v8]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v9(_v0), _v24({
          message: _v18.T_QUESTION_UNPINNED
        });
      }, [_v24, _v9]),
      _v31 = (0, _v3.useCallback)((_v0, _v1) => {
        _v10(_v0, _v1), _v24({
          message: _v18.T_QUESTION_REPLY_DELETED
        });
      }, [_v24, _v10]),
      _v32 = (0, _v3.useCallback)(_v0 => {
        _v21(_v22(_v0)), _v17();
      }, [_v22, _v17, _v21]);
    return _v1 ? _v2 ? (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      maxHeight: "100%",
      overflow: "hidden",
      padding: (0, _v25.rem)(24),
      children: [(0, _v1.jsxs)(_v37.Tabs, {
        size: "sm",
        sx: _v53.TABS_STYLES,
        index: _v23(_v20),
        onChange: _v32,
        children: [(0, _v1.jsxs)(_v38.TabList, {
          children: [_v18.map(({
            id: _v0,
            label: _v1
          }) => (0, _v1.jsx)(_v39.Tab, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab"),
            children: _v1
          }, _v0)), (0, _v1.jsx)(_v37.TabIndicator, {})]
        }), (0, _v1.jsx)(_v40.TabPanels, {
          sx: _v53.TAB_PANELS_STYLES,
          children: _v18.map(({
            id: _v0,
            questions: _v1
          }) => (0, _v1.jsx)(_v41.TabPanel, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab-panel"),
            sx: _v53.TAB_PANEL_STYLES,
            children: (0, _v1.jsx)(_v78.QuestionsList, {
              id: (0, _v27.createInteractionDomName)(_v0, _v0, "questions-list"),
              tabId: _v0,
              selectedQuestionElement: _v15,
              questions: _v1,
              fullWidth: !0,
              pinnedQuestionId: _v3,
              isManagementAccessed: !0,
              scrollBackground: _v12?.interaction?.backgroundColor || "background",
              itemRenderer: _v0 => {
                let _v1 = _v13 === _v0.id ? _v85.FOCUSED_STATE_COLOR : "transparent";
                return (0, _v1.jsxs)(_v23.Box, {
                  sx: _v53.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
                  children: [(0, _v1.jsx)(_v77.NewQuestionManageItem, {
                    question: _v0,
                    isActive: _v0.id === _v13,
                    isPinned: _v0.id === _v3,
                    questionReplies: _v4[_v0.id],
                    onQuestionSelected: _v16,
                    onQuestionDeselected: _v17,
                    onQuestionApprove: _v26,
                    onQuestionArchive: _v27,
                    onQuestionUnArchive: _v28,
                    onQuestionPin: _v29,
                    onQuestionUnPin: _v30,
                    onDeleteQuestionReply: _v31
                  }), (0, _v1.jsx)(_v75.SceneItemOverlay, {
                    size: "sm",
                    width: 2,
                    borderRadius: 8,
                    zIndex: "auto",
                    color: _v1
                  })]
                }, _v0.id);
              },
              placeholder: (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
                id: (0, _v27.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                className: (0, _v27.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                isWithPadding: !0,
                icon: (0, _v1.jsx)(_v74.ReviewQuestion, {
                  boxSize: "lg"
                }),
                description: _v0 === _v19.EQnaTab.PENDING ? _v18.T_NO_QUESTIONS_PENDING : _v18.T_NO_QUESTIONS_YET,
                control: null
              })
            })
          }, _v0))
        }, _v20)]
      }), (0, _v1.jsxs)(_v23.Box, {
        id: (0, _v27.createInteractionDomName)(_v0, "controls"),
        position: "relative",
        width: "100%",
        children: [(0, _v1.jsx)(_v54.HorizontalScrollShadow, {
          color: _v12?.interaction?.backgroundColor || "background"
        }), _v25 ? (0, _v1.jsx)(_v76.QnaReplyForm, {
          id: (0, _v27.createInteractionDomName)(_v0, "reply-form"),
          selectedQuestionId: _v13,
          isApproveNeeded: _v14 === _v19.EQuestionState.PENDING,
          onDismiss: _v17
        }) : null]
      })]
    }) : (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      overflowY: "hidden",
      position: "relative",
      height: "100%",
      padding: `0 ${(0, _v25.rem)(24)} ${(0, _v25.rem)(24)} ${(0, _v25.rem)(24)}`,
      children: [(0, _v1.jsx)(_v79.SessionInactive, {}), (0, _v1.jsx)(_v23.Box, {
        id: (0, _v27.createInteractionDomName)(_v0, "session-controls"),
        position: "relative",
        width: "100%"
      })]
    }) : (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      overflowY: "hidden",
      position: "relative",
      height: "100%",
      padding: `0 ${(0, _v25.rem)(24)} ${(0, _v25.rem)(24)} ${(0, _v25.rem)(24)}`,
      children: (0, _v1.jsx)(_v48.BlockingLoadingWrapper, {
        id: (0, _v27.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["QnaManage", 0, _v86], 0);
  var _v87 = _v0.i(0),
    _v88 = _v0.i(0),
    _v89 = _v0.i(0),
    _v90 = _v0.i(0),
    _v91 = _v0.i(0),
    _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0);
  function _v97({
    id: _v0 = (0, _v51.createDomName)("qna-question-input-form"),
    className: _v1 = (0, _v51.createDomName)("qna-question-input-form"),
    isDisabled: _v2 = !1
  }) {
    let {
        isAnonymousQuestionsDisabled: _v3,
        qnaActions: _v4
      } = (0, _v2.useManager)(_v15.QnAManager, ({
        isAnonymousQuestionsDisabled: _v0
      }) => [_v0]),
      _v5 = (0, _v3.useRef)(null),
      [_v6, _v7] = (0, _v3.useState)(""),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v82.useSimpleNotification)(),
      _v13 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.target.value);
      }, []),
      _v14 = (0, _v3.useCallback)(() => {
        _v9(_v0 => !_v0), _v5.current?.focus();
      }, [_v9]),
      _v15 = (0, _v3.useCallback)(async _v0 => {
        if ((_v0.preventDefault(), _v0.stopPropagation(), _v6.length && !(_v6.length > _v94.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH)) && !_v10) {
          _v11(!0);
          try {
            await _v4.submitQuestion(_v6, _v8), _v7(""), _v12({
              message: _v18.T_QUESTION_SUBMITTED
            }), setTimeout(() => _v11(!1), _v94.interactionToolsConfig.QNA.QUESTION_ASKING_THROTTLE);
          } catch (_v0) {
            _v11(!1);
          }
        }
      }, [_v6, _v10, _v4, _v8, _v12]),
      _v16 = (0, _v3.useCallback)(_v0 => {
        if (_v5.current) {
          let _v0 = _v5.current.selectionStart || 0,
            _v1 = _v5.current.value;
          _v7(_v1.slice(0, _v0) + _v0.native + _v1.slice(_v0, _v1.length)), _v5.current.focus();
        }
      }, []),
      _v17 = !_v2,
      _v18 = !!(_v17 && _v6.length && _v6.length <= _v94.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH && !_v10),
      _v19 = _v94.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH - _v6.length,
      _v20 = _v19 <= 20,
      _v21 = _v19 < 0;
    return (0, _v1.jsxs)(_v23.Box, {
      id: _v0,
      className: _v1,
      as: "form",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingTop: (0, _v25.rem)(8),
      onSubmit: _v15,
      onKeyUp: _v95.stopEventPropagation,
      onKeyDown: _v95.stopEventPropagation,
      onKeyPress: _v95.stopEventPropagation,
      children: [(0, _v1.jsxs)(_v24.Flex, {
        id: (0, _v51.createDomName)(_v0, "title"),
        className: (0, _v51.createDomName)(_v1, "title"),
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: (0, _v25.rem)(12),
        color: "text-primary",
        fontSize: "text-xs",
        fontWeight: "bold",
        children: [(0, _v1.jsx)("div", {
          children: _v18.T_ASK_QUESTION
        }), _v3 ? null : (0, _v1.jsxs)(_v24.Flex, {
          alignItems: "center",
          gap: (0, _v25.rem)(8),
          children: [(0, _v1.jsx)(_v24.Flex, {
            fontSize: "text-xs",
            fontWeight: 500,
            children: _v18.T_ANONYMOUS
          }), (0, _v1.jsx)(_v91.Switch, {
            id: (0, _v51.createDomName)(_v0, "anonymous-toggle"),
            className: (0, _v51.createDomName)(_v1, "anonymous-toggle"),
            size: "sm",
            isChecked: _v8,
            onChange: _v14
          })]
        })]
      }), (0, _v1.jsxs)(_v87.InputGroup, {
        id: (0, _v51.createDomName)(_v0, "controls"),
        className: (0, _v51.createDomName)(_v1, "controls"),
        children: [_v93.browserConfig.BROWSER?.isMobile ? null : (0, _v1.jsx)(_v88.InputLeftElement, {
          children: (0, _v1.jsx)(_v96.EmojiButton, {
            id: (0, _v51.createDomName)(_v0, "emoji-button"),
            className: (0, _v51.createDomName)(_v1, "emoji-button"),
            inputRef: _v5,
            isSubmitted: _v10,
            placement: "top-start",
            isDisabled: !_v17,
            onEmojiSelect: _v16
          })
        }), (0, _v1.jsx)(_v89.Input, {
          id: (0, _v51.createDomName)(_v0, "input"),
          className: (0, _v51.createDomName)(_v1, "input"),
          ref: _v5,
          maxLength: _v94.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH,
          value: _v6,
          autoComplete: "off",
          isDisabled: !_v17,
          size: "md",
          onChange: _v13
        }), (0, _v1.jsx)(_v88.InputRightElement, {
          children: (0, _v1.jsx)(_v90.IconButton, {
            id: (0, _v51.createDomName)(_v0, "send-button"),
            className: (0, _v51.createDomName)(_v1, "send-button"),
            "aria-label": "qna-submit-button",
            "data-chat-submit": !0,
            type: "submit",
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v92.Send, {}),
            isDisabled: !_v18,
            transition: "none",
            _hover: {
              backgroundColor: "transparent!important"
            }
          })
        })]
      }), (0, _v1.jsx)(_v24.Flex, {
        id: (0, _v51.createDomName)(_v0, "info"),
        className: (0, _v51.createDomName)(_v1, "info"),
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        children: (0, _v1.jsxs)(_v24.Flex, {
          id: (0, _v51.createDomName)(_v0, "characters-count"),
          className: (0, _v51.createDomName)(_v1, "characters-count"),
          as: "span",
          alignItems: "center",
          fontSize: "text-xs",
          lineHeight: "text-xs",
          padding: `${(0, _v25.rem)(8)} 0 0`,
          fontWeight: _v20 || _v21 ? "bold" : 400,
          color: _v21 ? _v85.FAILED_STATUS_COLOR : "text-secondary",
          children: [_v19, " ", _v18.T_CHARACTERS]
        })
      })]
    });
  }
  var _v98 = _v0.i(0);
  function _v99({
    id: _v0 = (0, _v27.createInteractionDomName)("qna-view")
  }) {
    let {
        connectionStatuses: {
          isInteractionConnected: _v1
        }
      } = (0, _v2.useManager)(_v33.InteractionFirebaseManager),
      {
        activeSession: _v2,
        activeSessionQuestions: _v3,
        activeSessionPendingQuestions: _v4,
        activeSessionPinnedQuestionId: _v5,
        isHydrated: _v6,
        qnaReplies: _v7,
        qnaActions: {
          voteQuestion: _v8
        }
      } = (0, _v2.useManager)(_v15.QnAManager),
      {
        initialState: _v9
      } = (0, _v12.useLiveGlobals)(),
      {
        activeQuestions: _v10
      } = (0, _v84.useQnaQuestions)(_v4, _v3);
    return _v6 ? _v2 ? (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      position: "relative",
      direction: "column",
      grow: 1,
      maxHeight: "100%",
      overflowY: "hidden",
      padding: `${(0, _v25.rem)(24)} ${(0, _v25.rem)(24)} 0 ${(0, _v25.rem)(24)}`,
      children: [(0, _v1.jsx)(_v24.Flex, {
        id: (0, _v27.createInteractionDomName)(_v0, "questions-panel"),
        direction: "column",
        grow: 1,
        overflow: "hidden",
        rowGap: (0, _v25.rem)(16),
        children: (0, _v1.jsx)(_v78.QuestionsList, {
          id: (0, _v27.createInteractionDomName)(_v0, "questions-list"),
          tabId: _v19.EQnaTab.ACTIVE,
          questions: _v10,
          fullWidth: !0,
          pinnedQuestionId: _v5,
          scrollBackground: _v9?.interaction?.backgroundColor || "background",
          itemRenderer: _v0 => (0, _v1.jsx)(_v23.Box, {
            sx: _v53.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
            children: (0, _v1.jsx)(_v98.NewQuestionViewItem, {
              question: _v0,
              isPinned: _v0.id === _v5,
              hasVoteButton: !0,
              questionReplies: _v7[_v0.id],
              onQuestionVoted: _v8
            })
          }, _v0.id),
          placeholder: (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
            id: (0, _v27.createInteractionDomName)(_v0, "questions-list-placeholder"),
            icon: (0, _v1.jsx)(_v74.ReviewQuestion, {
              boxSize: "lg"
            }),
            control: null
          })
        })
      }), (0, _v1.jsxs)(_v23.Box, {
        id: (0, _v27.createInteractionDomName)(_v0, "input-wrapper"),
        position: "relative",
        width: "100%",
        paddingBottom: (0, _v25.rem)(16),
        children: [(0, _v1.jsx)(_v54.HorizontalScrollShadow, {
          color: _v9?.interaction?.backgroundColor || "background"
        }), (0, _v1.jsx)(_v97, {
          id: (0, _v27.createInteractionDomName)(_v0, "input-form"),
          isDisabled: !_v1
        })]
      })]
    }) : (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      children: (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
        id: (0, _v27.createInteractionDomName)(_v0, "questions-list-placeholder"),
        icon: (0, _v1.jsx)(_v74.ReviewQuestion, {
          boxSize: "lg"
        }),
        control: null
      })
    }) : (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      textAlign: "center",
      children: (0, _v1.jsx)(_v48.BlockingLoadingWrapper, {
        id: (0, _v27.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["QnaView", 0, _v99], 0);
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
  let _v111 = (0, _v3.lazy)(() => _v0.A(0).then(_v0 => ({
      default: _v0.EmojiPanel
    }))),
    _v112 = [{
      emoji: "❤️",
      label: "Heart"
    }, {
      emoji: "👍",
      label: "Thumbs up"
    }, {
      emoji: "👏",
      label: "Clap"
    }, {
      emoji: "😂",
      label: "Laughing"
    }, {
      emoji: "😮",
      label: "Surprised"
    }, {
      emoji: "🔥",
      label: "Fire"
    }, {
      emoji: "🤯",
      label: "Mind blown"
    }, {
      emoji: "🎉",
      label: "Party"
    }];
  function _v113() {
    if ("u" < typeof document) return null;
    let _v0 = document.fullscreenElement ?? document.webkitFullscreenElement;
    return _v0 instanceof HTMLElement ? _v0 : null;
  }
  function _v114() {
    let {
        isEnabled: _v0,
        isRateLimited: _v1,
        reactionActions: {
          sendReaction: _v2
        }
      } = (0, _v2.useManager)(_v16.ReactionManager),
      {
        isOpen: _v3,
        onOpen: _v4,
        onClose: _v5
      } = (0, _v107.useDisclosure)(),
      _v6 = (0, _v3.useRef)(null),
      [_v7, _v8] = (0, _v3.useState)(_v113);
    (0, _v3.useEffect)(() => {
      let _v0 = () => _v8(_v113());
      return document.addEventListener("fullscreenchange", _v0), document.addEventListener("webkitfullscreenchange", _v0), () => {
        document.removeEventListener("fullscreenchange", _v0), document.removeEventListener("webkitfullscreenchange", _v0);
      };
    }, []);
    let _v9 = (0, _v3.useMemo)(() => _v7 ? {
      current: _v7
    } : void 0, [_v7]);
    (0, _v3.useEffect)(() => {
      _v1 && _v3 && _v5();
    }, [_v1, _v3, _v5]);
    let _v10 = (0, _v106.useBreakpointValue)({
        base: !0,
        md: !1
      }) ?? !1,
      _v11 = (0, _v3.useCallback)(_v0 => {
        _v1 || _v2(_v0);
      }, [_v1, _v2]),
      _v12 = (0, _v3.useCallback)(_v0 => {
        "string" != typeof _v0?.native || "" === _v0.native || _v1 || _v2(_v0.native);
      }, [_v1, _v2]);
    if (!0 !== _v0) return null;
    let _v13 = (0, _v109.translate)({
      singular: "Emoji break! Try again in a moment.",
      dictionary: {
        es: {
          singular: "¡Pausa de emoji! Vuelve a intentarlo en un momento."
        },
        "de-DE": {
          singular: "Emoji-Pause! Bitte versuchen Sie es in einem Moment erneut."
        },
        "fr-FR": {
          singular: "Pause Emoji ! Réessayez dans un instant."
        },
        "ja-JP": {
          singular: "絵文字の不具合が発生しました。しばらくしてからもう一度お試しください。"
        },
        "ko-KR": {
          singular: "이모지 오류입니다! 잠시 후에 다시 시도해 주세요."
        },
        "pt-BR": {
          singular: "Pausa do Emoji! Tente novamente daqui a pouco."
        },
        "zh-CN": {
          singular: "表情符号服务出现问题！请稍后再试。"
        }
      }
    });
    return (0, _v1.jsxs)(_v24.Flex, {
      flexDirection: {
        base: "row",
        md: "column"
      },
      alignItems: "center",
      justifyContent: {
        base: "flex-start",
        md: "center"
      },
      gap: 1,
      padding: 2,
      width: {
        base: "fit-content",
        md: "auto"
      },
      maxWidth: "100%",
      marginX: {
        base: "auto",
        md: 0
      },
      overflowX: {
        base: "auto",
        md: "visible"
      },
      overflowY: "visible",
      flexWrap: "nowrap",
      sx: {
        "&::-webkit-scrollbar": {
          display: "none"
        },
        scrollbarWidth: "none"
      },
      children: [_v112.map(({
        emoji: _v0,
        label: _v1
      }) => {
        let _v2 = _v1 ? _v13 : _v1;
        return (0, _v1.jsx)(_v110.BokehTooltip, {
          label: _v2,
          placement: "left",
          shouldWrapChildren: !0,
          children: (0, _v1.jsx)(_v23.Box, {
            as: "button",
            width: (0, _v25.rem)(44),
            height: (0, _v25.rem)(44),
            flexShrink: 0,
            fontSize: (0, _v25.rem)(28),
            lineHeight: 1,
            cursor: _v1 ? "not-allowed" : "pointer",
            opacity: _v1 ? .4 : 1,
            borderRadius: "sm",
            background: "none",
            border: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            _hover: _v1 ? void 0 : {
              transform: "scale(1.2)",
              background: "var(--vimeo-colors-fill-component)"
            },
            transition: "transform 0.1s, opacity 0.2s",
            "aria-label": _v2,
            "aria-disabled": _v1,
            disabled: _v1,
            onClick: () => _v11(_v0),
            children: _v0
          })
        }, _v0);
      }), (0, _v1.jsxs)(_v100.Popover, {
        isLazy: !0,
        placement: _v10 ? "top-end" : "left-end",
        gutter: 16,
        strategy: _v7 ? "fixed" : void 0,
        autoFocus: !1,
        isOpen: _v3 && !_v1,
        onOpen: _v4,
        onClose: _v5,
        children: [(0, _v1.jsx)(_v103.PopoverTrigger, {
          children: (0, _v1.jsx)(_v90.IconButton, {
            "aria-label": _v1 ? _v13 : (0, _v109.translate)({
              singular: "More emojis",
              dictionary: {
                es: {
                  singular: "Más emojis"
                },
                "de-DE": {
                  singular: "Mehr Emojis"
                },
                "fr-FR": {
                  singular: "Plus d'émojis"
                },
                "ja-JP": {
                  singular: "絵文字をもっと見る"
                },
                "ko-KR": {
                  singular: "이모지 더 보기"
                },
                "pt-BR": {
                  singular: "Mais emojis"
                },
                "zh-CN": {
                  singular: "更多表情"
                }
              }
            }),
            type: "button",
            size: "sm",
            variant: "tertiary",
            borderRadius: "sm",
            flexShrink: 0,
            icon: (0, _v1.jsx)(_v108.EllipsisH, {}),
            isDisabled: _v1
          })
        }), (0, _v1.jsx)(_v104.Portal, {
          containerRef: _v9,
          children: (0, _v1.jsx)(_v102.PopoverContent, {
            padding: 0,
            zIndex: "popover",
            children: (0, _v1.jsx)(_v101.PopoverBody, {
              width: (0, _v25.rem)(326),
              height: (0, _v25.rem)(260),
              children: (0, _v1.jsx)(_v3.Suspense, {
                fallback: (0, _v1.jsx)(_v24.Flex, {
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  children: (0, _v1.jsx)(_v105.Spinner, {
                    size: "xs"
                  })
                }),
                children: (0, _v1.jsx)(_v111, {
                  ref: _v6,
                  isOpen: _v3,
                  onSelect: _v12
                })
              })
            })
          })
        })]
      })]
    });
  }
  function _v115({
    id: _v0 = "reactions-manage"
  }) {
    let {
        isEnabled: _v1,
        reactionActions: {
          enableReactions: _v2,
          disableReactions: _v3
        }
      } = (0, _v2.useManager)(_v16.ReactionManager),
      _v4 = (0, _v3.useCallback)(() => {
        _v1 ? _v3() : _v2();
      }, [_v1, _v2, _v3]);
    return (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      alignItems: "center",
      justifyContent: "space-between",
      padding: (0, _v25.rem)(16),
      gap: (0, _v25.rem)(12),
      children: [(0, _v1.jsx)(_v69.Text, {
        variant: "heading-xs",
        children: "Emoji reactions"
      }), (0, _v1.jsx)(_v91.Switch, {
        size: "sm",
        id: "reactions-toggle",
        "aria-label": "Enable emoji reactions",
        isChecked: !!_v1,
        isDisabled: null === _v1,
        onChange: _v4
      })]
    });
  }
  _v0.s(["useInteractionSidebarItems", 0, function (_v0) {
    let {
        initialState: {
          interaction: _v1
        }
      } = (0, _v12.useLiveGlobals)(),
      {
        roomUser: {
          value: _v2
        }
      } = (0, _v2.useManager)(_v17.InteractionSessionManager),
      {
        isEnabled: _v3
      } = (0, _v2.useManager)(_v13.ChatManager, ({
        isEnabled: _v0
      }) => [_v0]),
      {
        polls: _v4,
        activePollId: _v5
      } = (0, _v2.useManager)(_v14.PollManager, ({
        polls: _v0,
        activePollId: _v1
      }) => [_v0, _v1]),
      {
        activeSessionId: _v6
      } = (0, _v2.useManager)(_v15.QnAManager, ({
        activeSessionId: _v0
      }) => [_v0]),
      _v7 = (0, _v22.useIsVpaas)(),
      {
        isEnabled: _v8
      } = (0, _v2.useManager)(_v16.ReactionManager, ({
        isEnabled: _v0
      }) => [_v0]),
      _v9 = (0, _v20.checkModuleIsActive)(_v1?.feature?.module, _v19.EInteractionModule.REACTIONS),
      _v10 = (0, _v21.useOrionSettingsFields)(["enable_live_reactions"]),
      _v11 = !!(_v2?.isCreator && !_v1?.feature?.isManagementDisabled || _v7 && _v2?.capabilities?.canUseQnaModeration),
      _v12 = _v0 === _v19.EInteractionModule.CHAT || _v11 || !!_v3,
      _v13 = _v0 === _v19.EInteractionModule.POLL || _v11 || !!(_v5 && _v4[_v5]),
      _v14 = _v0 === _v19.EInteractionModule.QNA || _v11 || !!_v6,
      _v15 = _v9 && (_v0 === _v19.EInteractionModule.REACTIONS || _v11 && _v10.enable_live_reactions || !0 === _v8),
      _v16 = (0, _v3.useMemo)(() => {
        let _v0 = {
            id: _v19.EInteractionModule.CHAT,
            label: _v18.T_CHAT,
            icon: (0, _v1.jsx)(_v9.PanelChatIcon, {
              isActive: _v0 === _v19.EInteractionModule.CHAT,
              isManagementAccessed: _v11
            }),
            header: _v18.T_CHAT,
            headerMenu: _v11 ? (0, _v1.jsx)(_v6.ChatSettingsButton, {
              buttonIcon: (0, _v1.jsx)(_v4.EllipsisV, {})
            }) : void 0,
            Content: _v11 ? _v34 : ({
              id: _v0
            }) => (0, _v1.jsx)(_v35, {
              id: _v0,
              chatType: _v19.EChatType.PUBLIC
            })
          },
          _v1 = {
            id: _v19.EInteractionModule.POLL,
            label: _v18.T_POLLS,
            icon: (0, _v1.jsx)(_v10.PanelPollIcon, {
              isActive: _v0 === _v19.EInteractionModule.POLL
            }),
            header: _v18.T_POLLS,
            headerMenu: _v11 ? (0, _v1.jsx)(_v7.PollSettingsButton, {
              buttonIcon: (0, _v1.jsx)(_v4.EllipsisV, {})
            }) : void 0,
            Content: _v11 ? _v61 : _v73
          },
          _v2 = {
            id: _v19.EInteractionModule.QNA,
            label: _v18.T_QNA,
            icon: (0, _v1.jsx)(_v11.PanelQnaIcon, {
              isActive: _v0 === _v19.EInteractionModule.QNA,
              isManagementAccessed: _v11
            }),
            header: _v18.T_QNA,
            headerMenu: _v11 ? (0, _v1.jsx)(_v8.QnaSettingsButton, {
              buttonIcon: (0, _v1.jsx)(_v4.EllipsisV, {})
            }) : void 0,
            Content: _v11 ? _v86 : _v99
          },
          _v3 = {
            id: _v19.EInteractionModule.REACTIONS,
            label: "Reactions",
            icon: (0, _v1.jsx)(_v5.Smile, {}),
            header: _v11 ? "Reactions" : void 0,
            panelWidth: _v11 ? void 0 : 60,
            panelAutoHeight: !_v11,
            Content: _v11 ? _v115 : _v114
          };
        return [].concat(_v12 ? _v0 : [], _v13 ? _v1 : [], _v14 ? _v2 : [], _v15 ? _v3 : []);
      }, [_v11, _v12, _v13, _v14, _v15, _v0]),
      [_v17, _v18] = (0, _v3.useState)([]),
      _v19 = (0, _v3.useCallback)(_v0 => {
        _v0 && _v18(_v0 => [..._v0, _v0]);
      }, []),
      _v20 = (0, _v3.useCallback)(_v0 => {
        _v0 && _v18(_v0 => _v0.filter(_v0 => _v0.id !== _v0));
      }, []);
    return {
      items: (0, _v3.useMemo)(() => [..._v16, ..._v17], [_v16, _v17]),
      addItem: _v19,
      removeItem: _v20
    };
  }], 0);
}