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
    _v34 = _v0.i(0);
  function _v35({
    id: _v0 = (0, _v27.createInteractionDomName)("chat-manage"),
    chatContext: {
      isEnabled: _v1,
      chatActions: {
        enableChat: _v2
      }
    } = (0, _v2.useManager)(_v13.ChatManager),
    firebaseContext: {
      interactionCredentials: _v3,
      connectionStatuses: {
        isInteractionConnected: _v4
      }
    } = (0, _v2.useManager)(_v33.InteractionFirebaseManager)
  }) {
    let {
        initialState: _v5
      } = (0, _v12.useLiveGlobals)(),
      _v6 = _v3?.user?.id,
      _v7 = (0, _v3.useCallback)(() => {
        _v2(), (0, _v34.trackEnableAudienceChat)();
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
  function _v36({
    id: _v0 = (0, _v27.createInteractionDomName)("chat-view"),
    className: _v1 = (0, _v27.createInteractionDomName)("chat-view"),
    chatType: _v2,
    firebaseContext: {
      interactionCredentials: _v3,
      connectionStatuses: {
        isInteractionConnected: _v4
      }
    } = (0, _v2.useManager)(_v33.InteractionFirebaseManager, ({
      interactionCredentials: _v0
    }) => [_v0]),
    chatContext: {
      isEnabled: _v5
    } = (0, _v2.useManager)(_v13.ChatManager)
  }) {
    let {
        initialState: _v6
      } = (0, _v12.useLiveGlobals)(),
      _v7 = _v3?.user?.id;
    return (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      flexGrow: 1,
      flexDirection: "column",
      overflow: "hidden",
      paddingTop: (0, _v25.rem)(4),
      children: _v7 ? _v5 ? (0, _v1.jsxs)(_v24.Flex, {
        id: (0, _v27.createInteractionDomName)(_v0, "content"),
        flexDirection: "column",
        flexGrow: 1,
        height: "100%",
        padding: `0 ${(0, _v25.rem)(16)} ${(0, _v25.rem)(16)} ${(0, _v25.rem)(16)}`,
        children: [(0, _v1.jsx)(_v29.ChatHistory, {
          chatType: _v2,
          currentUserId: _v7,
          scrollBackground: _v6?.interaction?.backgroundColor || "background",
          placeholder: (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
            id: (0, _v27.createInteractionDomName)(_v0, "chat-history-placeholder"),
            icon: (0, _v1.jsx)(_v26.Chats, {
              boxSize: "lg"
            }),
            description: _v28.translations.sendMessageToStartChat,
            control: null
          })
        }), (0, _v1.jsx)(_v30.ChatInput, {
          chatType: _v2,
          isDisabled: !_v4,
          placeholderText: _v28.translations.sendMessage
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
  _v0.s(["ChatManage", 0, _v35], 0), _v0.s(["ChatView", 0, _v36], 0);
  var _v37 = _v0.i(0),
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
    _v52 = _v0.i(0);
  function _v53({
    id: _v0 = (0, _v52.createDomName)("create-button-minimized"),
    className: _v1 = (0, _v52.createDomName)("create-button-minimized"),
    isDisabled: _v2,
    withBottomMargin: _v3,
    icon: _v4 = (0, _v1.jsx)(_v51.Plus, {
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
      children: (0, _v1.jsx)(_v50.Button, {
        id: (0, _v52.createDomName)(_v0, "target"),
        className: (0, _v52.createDomName)(_v1, "target"),
        variant: "primary",
        isDisabled: _v2,
        leftIcon: _v4,
        width: "100%",
        onClick: _v6,
        children: _v5
      })
    });
  }
  var _v54 = _v0.i(0),
    _v55 = _v0.i(0),
    _v56 = _v0.i(0),
    _v57 = _v0.i(0),
    _v58 = _v0.i(0),
    _v59 = _v0.i(0),
    _v60 = _v0.i(0),
    _v61 = _v0.i(0);
  let _v62 = {
    position: "relative",
    flexGrow: 1,
    flexDirection: "column",
    height: "100%",
    overflow: "hidden",
    padding: (0, _v25.rem)(24)
  };
  function _v63() {
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
  let _v64 = (0, _v61.createPollInteractionObject)({
    id: "",
    question: "",
    state: _v19.EPollState.DRAFT,
    createdAt: 0,
    options: [(0, _v61.createPollOptionInteractionObject)({
      id: (0, _v37.v4)(),
      text: ""
    }, {
      validate: !1
    }), (0, _v61.createPollOptionInteractionObject)({
      id: (0, _v37.v4)(),
      text: ""
    }, {
      validate: !1
    })]
  }, {
    validate: !1
  });
  function _v65({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-manage"),
    className: _v1 = (0, _v27.createInteractionDomName)("poll-manage"),
    pollContext: {
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
    } = (0, _v2.useManager)(_v14.PollManager)
  }) {
    let [_v10, _v11] = (0, _v3.useState)(!1),
      [_v12, _v13] = (0, _v3.useState)(null),
      {
        initialState: _v14,
        initialState: {
          sessionType: _v15
        }
      } = (0, _v12.useLiveGlobals)(),
      {
        setIsHeaderEnabled: _v16
      } = (0, _v56.useResponsiveSidebarContext)(),
      _v17 = (0, _v3.useMemo)(() => Object.values(_v4), [_v4]),
      _v18 = _v17.some(_v0 => _v0.state === _v19.EPollState.OPENED),
      _v19 = _v17.some(_v0 => _v0.state === _v19.EPollState.CLOSED),
      _v20 = !_v18,
      {
        panels: _v21,
        activePolls: _v22,
        activePanelId: _v23,
        setActivePanelId: _v24
      } = (0, _v47.usePollPanels)(_v4),
      _v25 = (0, _v3.useCallback)(() => {
        _v16(!1), _v11(!0), (0, _v58.trackClickAddPoll)();
      }, [_v16]),
      _v26 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, {
          ..._v0,
          state: _v19.EPollState.CLOSED
        });
      }, [_v7]),
      _v27 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id, {
          ..._v0,
          state: _v19.EPollState.ARCHIVED
        });
      }, [_v7]),
      _v28 = (0, _v3.useCallback)(_v0 => {
        let _v1 = _v3 ? _v4[_v3] : null;
        _v1 && _v27(_v1), _v7(_v0.id, {
          ..._v0,
          state: _v19.EPollState.OPENED
        }), _v9(_v0.id);
      }, [_v3, _v4, _v7, _v9, _v27]),
      _v29 = (0, _v3.useCallback)(_v0 => {
        _v16(!1), _v13(_v0);
      }, [_v16]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0);
      }, [_v8]),
      _v31 = (0, _v3.useCallback)(() => {
        _v11(!1), _v16(!0);
      }, [_v16]),
      _v32 = (0, _v3.useCallback)(_v0 => (_v11(!1), _v16(!0), _v6(_v0)), [_v6, _v16]),
      _v33 = (0, _v3.useCallback)(() => {
        _v13(null), _v16(!0);
      }, [_v16]),
      _v34 = (0, _v3.useCallback)(_v0 => (_v13(null), _v16(!0), _v7(_v0.id, _v0)), [_v16, _v7]);
    (0, _v3.useEffect)(() => {
      (0, _v58.trackViewPoll)();
    }, []), (0, _v3.useEffect)(() => {
      _v2 && _v3 && _v15 === _v60.EComposerSessionType.VENUE && (0, _v59.trackVenuesViewPoll)(String(_v3));
    }, [_v3, _v2, _v15]);
    let _v35 = (0, _v57.useScrollbarStyles)();
    return _v10 ? (0, _v1.jsx)(_v23.Box, {
      id: _v0,
      className: _v1,
      sx: _v63(),
      children: (0, _v1.jsx)(_v45.PollForm, {
        poll: _v64,
        onClose: _v31,
        onSubmit: _v32
      })
    }) : _v12 ? (0, _v1.jsx)(_v23.Box, {
      id: _v0,
      className: _v1,
      sx: _v63(),
      children: (0, _v1.jsx)(_v45.PollForm, {
        poll: _v12,
        onClose: _v33,
        onSubmit: _v34
      })
    }) : _v2 ? _v17.length ? (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      className: _v1,
      sx: _v62,
      children: [(0, _v1.jsxs)(_v38.Tabs, {
        size: "sm",
        sx: _v54.TABS_STYLES,
        onChange: _v24,
        children: [(0, _v1.jsxs)(_v39.TabList, {
          children: [_v21.map(({
            id: _v0,
            label: _v1
          }) => (0, _v1.jsx)(_v40.Tab, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab"),
            children: _v1
          }, _v0)), (0, _v1.jsx)(_v38.TabIndicator, {})]
        }), (0, _v1.jsx)(_v41.TabPanels, {
          sx: _v54.TAB_PANELS_STYLES,
          children: _v21.map(({
            id: _v0,
            polls: _v1
          }) => (0, _v1.jsx)(_v42.TabPanel, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab-panel"),
            sx: _v54.TAB_PANEL_STYLES,
            children: (0, _v1.jsx)(_v23.Box, {
              id: (0, _v27.createInteractionDomName)(_v0, _v0, "scroll"),
              sx: {
                ...(0, _v54.createTabListScrollStyle)({
                  fullWidth: !0
                }),
                ..._v35
              },
              children: (0, _v1.jsx)(_v23.Box, {
                id: (0, _v27.createInteractionDomName)(_v0, _v0, "column"),
                sx: (0, _v54.createTabListColumnStyle)(!0),
                children: 0 === _v1.length ? (0, _v1.jsx)(_v48.PollEmptyState, {
                  id: (0, _v27.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                  className: (0, _v27.createInteractionDomName)(_v0, _v0, "empty-placeholder"),
                  width: "100%",
                  height: "100%",
                  buttonLabel: _v18.T_CREATE_POLL,
                  description: 0 === _v0 ? _v28.translations.createPollToInteractWithAudience : _v28.translations.noPollsArchived,
                  control: 0 === _v0,
                  history: 0 === _v0 ? _v5 : null,
                  onCreateClick: _v25
                }) : _v1.map(_v0 => {
                  var _v1;
                  return (0, _v1.jsx)(_v23.Box, {
                    sx: _v54.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
                    children: (0, _v1.jsx)(_v46.PollItem, {
                      poll: _v0,
                      isAnyPollPublished: _v19,
                      canOpenPoll: _v20,
                      menuAttach: "left-start",
                      itemActions: {
                        onPollOpen: _v28,
                        onPollClose: _v26,
                        onPollArchive: _v27
                      },
                      menuActions: (_v1 = {
                        onPollEdit: _v29,
                        onPollDelete: _v30
                      }, _v0.state === _v19.EPollState.DRAFT ? [{
                        key: "edit",
                        label: _v28.translations.edit,
                        onClick: () => {
                          _v1.onPollEdit(_v0), (0, _v58.trackClickEditPoll)();
                        },
                        icon: (0, _v1.jsx)(_v43.EditPencil, {})
                      }, {
                        key: "delete",
                        label: _v28.translations.remove,
                        onClick: () => {
                          _v1.onPollDelete(_v0.id), (0, _v58.trackRemovePollFromEvent)();
                        },
                        icon: (0, _v1.jsx)(_v44.TrashBin, {})
                      }] : [])
                    })
                  }, _v0.id);
                })
              })
            })
          }, _v0))
        }, _v23)]
      }), (0, _v1.jsx)(_v24.Flex, {
        position: "relative",
        children: (0, _v1.jsx)(_v55.HorizontalScrollShadow, {
          color: _v14?.interaction?.backgroundColor || "background"
        })
      }), 0 === _v23 && 0 !== _v22.length ? (0, _v1.jsx)(_v53, {
        id: (0, _v27.createInteractionDomName)(_v0, "add-button"),
        onClick: _v25,
        children: _v28.translations.addPoll
      }) : null]
    }) : (0, _v1.jsx)(_v48.PollEmptyState, {
      id: _v0,
      className: _v1,
      buttonLabel: _v18.T_CREATE_POLL,
      description: _v28.translations.createPollToInteractWithAudience,
      history: _v5,
      maxWidth: (0, _v25.rem)(360),
      sx: _v62,
      onCreateClick: _v25
    }) : (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      className: _v1,
      sx: _v62,
      children: (0, _v1.jsx)(_v49.BlockingLoadingWrapper, {
        id: (0, _v27.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["PollManage", 0, _v65], 0);
  var _v66 = _v0.i(0),
    _v67 = _v0.i(0),
    _v68 = _v0.i(0);
  function _v69({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-results"),
    poll: _v1
  }) {
    let _v2 = _v1.options.reduce((_v0, _v1) => _v0 + _v1.votesCount, 0);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v68.PollOptionVotesBar, {
        id: (0, _v27.createInteractionDomName)(_v0, "option", _v1),
        option: _v0,
        state: _v1.state,
        totalCount: _v2,
        isBold: !0
      }, _v0.id))
    });
  }
  var _v70 = _v0.i(0),
    _v71 = _v0.i(0),
    _v72 = _v0.i(0),
    _v73 = _v0.i(0);
  function _v74({
    id: _v0,
    className: _v1 = (0, _v52.createDomName)("poll-option-votes"),
    option: _v2,
    isBold: _v3 = !1
  }) {
    let _v4 = (0, _v71.useColorModeValue)("slate.200", "grayscale.700");
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
          children: [(0, _v1.jsx)(_v73.Text, {
            className: (0, _v52.createDomName)(_v1, "option-text"),
            variant: "body-xl",
            fontSize: "text-sm",
            lineHeight: (0, _v25.rem)(18),
            marginRight: (0, _v25.rem)(8),
            children: _v2.text
          }), _v2.isVotedByMe ? (0, _v1.jsx)(_v72.Checkmark, {
            className: (0, _v52.createDomName)(_v1, "your-answer-icon"),
            "data-testid": "yourAnswerIcon",
            height: (0, _v25.rem)(14)
          }) : null]
        })
      }), (0, _v1.jsx)(_v24.Flex, {
        className: (0, _v52.createDomName)(_v1, "bar"),
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
  function _v75({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-vote"),
    poll: _v1,
    isVotedOption: _v2,
    onSetVote: _v3
  }) {
    let _v4 = _v1.options.some(_v0 => _v0.isVotedByMe),
      _v5 = (0, _v71.useColorModeValue)("slate.400", "grayscale.700"),
      _v6 = (0, _v71.useColorModeValue)("slate.400", "grayscale.600"),
      _v7 = (0, _v71.useColorModeValue)("slate.50", "grayscale.700"),
      _v8 = (0, _v3.useCallback)((_v0, _v1) => {
        _v3(_v0, _v1), (0, _v58.trackVoteInPoll)();
      }, [_v3]);
    return _v4 ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [_v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v74, {
        id: (0, _v27.createInteractionDomName)(_v0, "option", _v1),
        option: _v0,
        isBold: !0
      }, _v0.id)), (0, _v1.jsx)(_v70.Paragraph, {
        size: "sm",
        color: "text-secondary",
        children: _v28.translations.waitingForFinalResults
      })]
    }) : (0, _v1.jsx)(_v1.Fragment, {
      children: _v1.options.map((_v0, _v1) => (0, _v1.jsx)(_v50.Button, {
        id: (0, _v27.createInteractionDomName)(_v0, "option", _v1),
        "aria-label": _v0.text,
        variant: "tertiary",
        rightIcon: _v0.isVotedByMe ? (0, _v1.jsx)(_v72.Checkmark, {}) : void 0,
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
  let _v76 = {
    position: "relative",
    width: "100%",
    height: "100%",
    padding: (0, _v25.rem)(24),
    flexDirection: "column",
    alignSelf: "flex-start",
    rowGap: (0, _v25.rem)(16),
    overflow: "auto"
  };
  function _v77({
    id: _v0 = (0, _v27.createInteractionDomName)("poll-view"),
    pollContext: {
      isHydrated: _v1,
      polls: _v2,
      activePollId: _v3,
      pollActions: _v4
    } = (0, _v2.useManager)(_v14.PollManager)
  }) {
    let {
        initialState: {
          sessionType: _v5
        }
      } = (0, _v12.useLiveGlobals)(),
      _v6 = _v3 ? _v2[_v3] : null;
    if ((0, _v3.useEffect)(() => {
      (0, _v58.trackViewPoll)();
    }, []), (0, _v3.useEffect)(() => {
      _v1 && _v3 && _v5 === _v60.EComposerSessionType.VENUE && (0, _v59.trackVenuesViewPoll)(String(_v3));
    }, [_v3, _v1, _v5]), !_v1) return (0, _v1.jsx)(_v24.Flex, {
      id: _v0,
      sx: _v76,
      children: (0, _v1.jsx)(_v49.BlockingLoadingWrapper, {
        opacity: .1,
        withAnimation: !0
      })
    });
    if (!_v6) return (0, _v1.jsxs)(_v24.Flex, {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      margin: "auto",
      children: [(0, _v1.jsx)(_v67.ChartGrowthAlt, {
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
    let _v7 = _v6.options.some(_v0 => _v0.isVotedByMe),
      _v8 = _v6.state === _v19.EPollState.OPENED;
    return (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      sx: _v76,
      children: [(0, _v1.jsx)(_v66.Header, {
        id: (0, _v27.createInteractionDomName)(_v0, "question"),
        size: "sm",
        margin: 0,
        sx: {
          wordWrap: "break-word"
        },
        children: _v6.question
      }), _v8 ? (0, _v1.jsx)(_v75, {
        id: (0, _v27.createInteractionDomName)(_v0, "votes"),
        poll: _v6,
        onSetVote: _v4.voteForPollOption,
        isVotedOption: _v7
      }) : (0, _v1.jsx)(_v69, {
        id: (0, _v27.createInteractionDomName)(_v0, "results"),
        poll: _v6
      })]
    });
  }
  _v0.s(["PollView", 0, _v77], 0);
  var _v78 = _v0.i(0),
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
    _v90 = _v0.i(0);
  function _v91({
    id: _v0 = (0, _v27.createInteractionDomName)("qna-manage"),
    qnaContext: {
      isHydrated: _v1,
      activeSessionId: _v2,
      activeSession: _v3,
      activeSessionPinnedQuestionId: _v4,
      isEventModerated: _v5,
      qnaReplies: _v6,
      qnaActions: {
        approveQuestion: _v7,
        archiveQuestion: _v8,
        unArchiveQuestion: _v9,
        pinQuestion: _v10,
        unPinQuestion: _v11,
        deleteQuestionReply: _v12
      }
    } = (0, _v2.useManager)(_v15.QnAManager),
    firebaseContext: {
      connectionStatuses: {
        isInteractionConnected: _v13
      }
    } = (0, _v2.useManager)(_v33.InteractionFirebaseManager)
  }) {
    let {
        initialState: _v14,
        initialState: {
          sessionType: _v15
        }
      } = (0, _v12.useLiveGlobals)(),
      {
        selectedQuestionId: _v16,
        selectedQuestionState: _v17,
        selectedQuestionElement: _v18,
        onSelectedQuestion: _v19,
        onDeselectQuestion: _v20
      } = (0, _v88.useQnaResponding)(),
      {
        panels: _v21,
        currentQuestions: _v22,
        activePanelId: _v23,
        setActivePanelId: _v24
      } = (0, _v84.useQnaPanels)(),
      {
        getIdByIndex: _v25,
        getIndexById: _v26
      } = (0, _v85.useTabsMapping)(_v21),
      _v27 = (0, _v86.useSimpleNotification)(),
      _v28 = null !== _v16 && (0, _v87.canReplyQuestion)(_v22.find(_v0 => _v0.id === _v16)) && !(0, _v87.hasQuestionReplies)(_v16 ? _v6?.[_v16] : void 0);
    (0, _v3.useEffect)(() => {
      (0, _v89.trackViewQna)();
    }, []), (0, _v3.useEffect)(() => {
      _v1 && _v2 && _v15 === _v60.EComposerSessionType.VENUE && (0, _v59.trackVenuesViewQa)(String(_v2));
    }, [_v2, _v1, _v15]);
    let _v29 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.id), (0, _v89.trackApproveModeratedQuestion)(), _v27({
          message: _v18.T_QUESTION_APPROVED
        });
      }, [_v7, _v27]),
      _v30 = (0, _v3.useCallback)(_v0 => {
        _v8(_v0.id, !!_v0.approved), (0, _v89.trackArchiveQuestion)(_v5), _v27({
          message: _v18.T_QUESTION_ARCHIVED
        });
      }, [_v8, _v5, _v27]),
      _v31 = (0, _v3.useCallback)(_v0 => {
        _v9(_v0.id, !!_v0.approved), (0, _v89.trackUnarchiveQuestion)(_v5), _v27({
          message: _v18.T_QUESTION_UNARCHIVED
        });
      }, [_v5, _v27, _v9]),
      _v32 = (0, _v3.useCallback)(_v0 => {
        _v10(_v0), (0, _v89.trackPinQuestion)(), _v27({
          message: _v18.T_QUESTION_PINNED
        });
      }, [_v27, _v10]),
      _v33 = (0, _v3.useCallback)(_v0 => {
        _v11(_v0), (0, _v89.trackUnpinQuestion)(), _v27({
          message: _v18.T_QUESTION_UNPINNED
        });
      }, [_v27, _v11]),
      _v34 = (0, _v3.useCallback)((_v0, _v1) => {
        _v12(_v0, _v1), _v27({
          message: _v18.T_QUESTION_REPLY_DELETED
        });
      }, [_v27, _v12]),
      _v35 = (0, _v3.useCallback)(_v0 => {
        _v24(_v25(_v0)), _v20(), (0, _v89.trackSwitchActiveTab)();
      }, [_v25, _v20, _v24]);
    return _v1 ? _v3 ? (0, _v1.jsxs)(_v24.Flex, {
      id: _v0,
      direction: "column",
      grow: 1,
      maxHeight: "100%",
      overflow: "hidden",
      padding: (0, _v25.rem)(24),
      children: [(0, _v1.jsxs)(_v38.Tabs, {
        size: "sm",
        sx: _v54.TABS_STYLES,
        index: _v26(_v23),
        onChange: _v35,
        children: [(0, _v1.jsxs)(_v39.TabList, {
          children: [_v21.map(({
            id: _v0,
            label: _v1
          }) => (0, _v1.jsx)(_v40.Tab, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab"),
            children: _v1
          }, _v0)), (0, _v1.jsx)(_v38.TabIndicator, {})]
        }), (0, _v1.jsx)(_v41.TabPanels, {
          sx: _v54.TAB_PANELS_STYLES,
          children: _v21.map(({
            id: _v0,
            questions: _v1
          }) => (0, _v1.jsx)(_v42.TabPanel, {
            className: (0, _v27.createInteractionDomName)(_v0, _v0, "tab-panel"),
            sx: _v54.TAB_PANEL_STYLES,
            children: (0, _v1.jsx)(_v82.QuestionsList, {
              id: (0, _v27.createInteractionDomName)(_v0, _v0, "questions-list"),
              tabId: _v0,
              selectedQuestionElement: _v18,
              questions: _v1,
              fullWidth: !0,
              pinnedQuestionId: _v4,
              isManagementAccessed: !0,
              scrollBackground: _v14?.interaction?.backgroundColor || "background",
              itemRenderer: _v0 => {
                let _v1 = _v16 === _v0.id ? _v90.FOCUSED_STATE_COLOR : "transparent";
                return (0, _v1.jsxs)(_v23.Box, {
                  sx: _v54.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
                  children: [(0, _v1.jsx)(_v81.NewQuestionManageItem, {
                    question: _v0,
                    isActive: _v0.id === _v16,
                    isPinned: _v0.id === _v4,
                    questionReplies: _v6[_v0.id],
                    onQuestionSelected: _v19,
                    onQuestionDeselected: _v20,
                    onQuestionApprove: _v29,
                    onQuestionArchive: _v30,
                    onQuestionUnArchive: _v31,
                    onQuestionPin: _v32,
                    onQuestionUnPin: _v33,
                    onDeleteQuestionReply: _v34
                  }), (0, _v1.jsx)(_v79.SceneItemOverlay, {
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
                icon: (0, _v1.jsx)(_v78.ReviewQuestion, {
                  boxSize: "lg"
                }),
                description: _v0 === _v19.EQnaTab.PENDING ? _v18.T_NO_QUESTIONS_PENDING : _v18.T_NO_QUESTIONS_YET,
                control: null
              })
            })
          }, _v0))
        }, _v23)]
      }), (0, _v1.jsxs)(_v23.Box, {
        id: (0, _v27.createInteractionDomName)(_v0, "controls"),
        position: "relative",
        width: "100%",
        children: [(0, _v1.jsx)(_v55.HorizontalScrollShadow, {
          color: _v14?.interaction?.backgroundColor || "background"
        }), _v28 ? (0, _v1.jsx)(_v80.QnaReplyForm, {
          id: (0, _v27.createInteractionDomName)(_v0, "reply-form"),
          selectedQuestionId: _v16,
          isApproveNeeded: _v17 === _v19.EQuestionState.PENDING,
          onDismiss: _v20
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
      children: [(0, _v1.jsx)(_v83.SessionInactive, {}), (0, _v1.jsx)(_v23.Box, {
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
      children: (0, _v1.jsx)(_v49.BlockingLoadingWrapper, {
        id: (0, _v27.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["QnaManage", 0, _v91], 0);
  var _v92 = _v0.i(0),
    _v93 = _v0.i(0),
    _v94 = _v0.i(0),
    _v95 = _v0.i(0),
    _v96 = _v0.i(0),
    _v97 = _v0.i(0),
    _v98 = _v0.i(0),
    _v99 = _v0.i(0),
    _v100 = _v0.i(0),
    _v101 = _v0.i(0);
  function _v102({
    id: _v0 = (0, _v52.createDomName)("qna-question-input-form"),
    className: _v1 = (0, _v52.createDomName)("qna-question-input-form"),
    isDisabled: _v2 = !1,
    qnaContext: {
      isAnonymousQuestionsDisabled: _v3,
      qnaActions: _v4
    } = (0, _v2.useManager)(_v15.QnAManager, ({
      isAnonymousQuestionsDisabled: _v0
    }) => [_v0])
  }) {
    let _v5 = (0, _v3.useRef)(null),
      [_v6, _v7] = (0, _v3.useState)(""),
      [_v8, _v9] = (0, _v3.useState)(!1),
      [_v10, _v11] = (0, _v3.useState)(!1),
      _v12 = (0, _v86.useSimpleNotification)(),
      _v13 = (0, _v3.useCallback)(_v0 => {
        _v7(_v0.target.value);
      }, []),
      _v14 = (0, _v3.useCallback)(() => {
        _v9(_v0 => !_v0), _v5.current?.focus();
      }, [_v9]),
      _v15 = (0, _v3.useCallback)(async _v0 => {
        if ((_v0.preventDefault(), _v0.stopPropagation(), _v6.length && !(_v6.length > _v99.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH)) && !_v10) {
          _v11(!0);
          try {
            await _v4.submitQuestion(_v6, _v8), _v7(""), (0, _v89.trackAskQuestion)(), _v12({
              message: _v18.T_QUESTION_SUBMITTED
            }), setTimeout(() => _v11(!1), _v99.interactionToolsConfig.QNA.QUESTION_ASKING_THROTTLE);
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
      _v18 = !!(_v17 && _v6.length && _v6.length <= _v99.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH && !_v10),
      _v19 = _v99.interactionToolsConfig.QNA.MAX_QUESTION_LENGTH - _v6.length,
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
      onKeyUp: _v100.stopEventPropagation,
      onKeyDown: _v100.stopEventPropagation,
      onKeyPress: _v100.stopEventPropagation,
      children: [(0, _v1.jsxs)(_v24.Flex, {
        id: (0, _v52.createDomName)(_v0, "title"),
        className: (0, _v52.createDomName)(_v1, "title"),
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
          }), (0, _v1.jsx)(_v96.Switch, {
            id: (0, _v52.createDomName)(_v0, "anonymous-toggle"),
            className: (0, _v52.createDomName)(_v1, "anonymous-toggle"),
            size: "sm",
            isChecked: _v8,
            onChange: _v14
          })]
        })]
      }), (0, _v1.jsxs)(_v92.InputGroup, {
        id: (0, _v52.createDomName)(_v0, "controls"),
        className: (0, _v52.createDomName)(_v1, "controls"),
        children: [_v98.browserConfig.BROWSER?.isMobile ? null : (0, _v1.jsx)(_v93.InputLeftElement, {
          children: (0, _v1.jsx)(_v101.EmojiButton, {
            id: (0, _v52.createDomName)(_v0, "emoji-button"),
            className: (0, _v52.createDomName)(_v1, "emoji-button"),
            inputRef: _v5,
            isSubmitted: _v10,
            placement: "top-start",
            isDisabled: !_v17,
            onEmojiSelect: _v16
          })
        }), (0, _v1.jsx)(_v94.Input, {
          id: (0, _v52.createDomName)(_v0, "input"),
          className: (0, _v52.createDomName)(_v1, "input"),
          ref: _v5,
          maxLength: _v99.interactionToolsConfig.CHAT.MAX_MESSAGE_LENGTH,
          value: _v6,
          autoComplete: "off",
          isDisabled: !_v17,
          size: "md",
          onChange: _v13
        }), (0, _v1.jsx)(_v93.InputRightElement, {
          children: (0, _v1.jsx)(_v95.IconButton, {
            id: (0, _v52.createDomName)(_v0, "send-button"),
            className: (0, _v52.createDomName)(_v1, "send-button"),
            "aria-label": "qna-submit-button",
            "data-chat-submit": !0,
            type: "submit",
            size: "sm",
            variant: "tertiary",
            icon: (0, _v1.jsx)(_v97.Send, {}),
            isDisabled: !_v18,
            transition: "none",
            _hover: {
              backgroundColor: "transparent!important"
            }
          })
        })]
      }), (0, _v1.jsx)(_v24.Flex, {
        id: (0, _v52.createDomName)(_v0, "info"),
        className: (0, _v52.createDomName)(_v1, "info"),
        justifyContent: "space-between",
        alignContent: "center",
        width: "100%",
        children: (0, _v1.jsxs)(_v24.Flex, {
          id: (0, _v52.createDomName)(_v0, "characters-count"),
          className: (0, _v52.createDomName)(_v1, "characters-count"),
          as: "span",
          alignItems: "center",
          fontSize: "text-xs",
          lineHeight: "text-xs",
          padding: `${(0, _v25.rem)(8)} 0 0`,
          fontWeight: _v20 || _v21 ? "bold" : 400,
          color: _v21 ? _v90.FAILED_STATUS_COLOR : "text-secondary",
          children: [_v19, " ", _v18.T_CHARACTERS]
        })
      })]
    });
  }
  var _v103 = _v0.i(0);
  function _v104({
    id: _v0 = (0, _v27.createInteractionDomName)("qna-view"),
    firebaseContext: {
      connectionStatuses: {
        isInteractionConnected: _v1
      }
    } = (0, _v2.useManager)(_v33.InteractionFirebaseManager),
    qnaContext: {
      activeSessionId: _v2,
      activeSession: _v3,
      activeSessionQuestions: _v4,
      activeSessionPendingQuestions: _v5,
      activeSessionPinnedQuestionId: _v6,
      isHydrated: _v7,
      qnaReplies: _v8,
      qnaActions: {
        voteQuestion: _v9
      }
    } = (0, _v2.useManager)(_v15.QnAManager)
  }) {
    let {
        initialState: _v10,
        initialState: {
          sessionType: _v11
        }
      } = (0, _v12.useLiveGlobals)(),
      {
        activeQuestions: _v12
      } = (0, _v88.useQnaQuestions)(_v5, _v4);
    return ((0, _v3.useEffect)(() => {
      (0, _v89.trackViewQna)();
    }, []), (0, _v3.useEffect)(() => {
      _v7 && _v2 && _v11 === _v60.EComposerSessionType.VENUE && (0, _v59.trackVenuesViewQa)(String(_v2));
    }, [_v2, _v7, _v11]), _v7) ? _v3 ? (0, _v1.jsxs)(_v24.Flex, {
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
        children: (0, _v1.jsx)(_v82.QuestionsList, {
          id: (0, _v27.createInteractionDomName)(_v0, "questions-list"),
          tabId: _v19.EQnaTab.ACTIVE,
          questions: _v12,
          fullWidth: !0,
          pinnedQuestionId: _v6,
          scrollBackground: _v10?.interaction?.backgroundColor || "background",
          itemRenderer: _v0 => (0, _v1.jsx)(_v23.Box, {
            sx: _v54.TAB_LIST_COLUMN_ROW_ITEM_STYLE,
            children: (0, _v1.jsx)(_v103.NewQuestionViewItem, {
              question: _v0,
              isPinned: _v0.id === _v6,
              hasVoteButton: !0,
              questionReplies: _v8[_v0.id],
              onQuestionVoted: _v9
            })
          }, _v0.id),
          placeholder: (0, _v1.jsx)(_v32.EmptyStatePlaceholder, {
            id: (0, _v27.createInteractionDomName)(_v0, "questions-list-placeholder"),
            icon: (0, _v1.jsx)(_v78.ReviewQuestion, {
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
        children: [(0, _v1.jsx)(_v55.HorizontalScrollShadow, {
          color: _v10?.interaction?.backgroundColor || "background"
        }), (0, _v1.jsx)(_v102, {
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
        icon: (0, _v1.jsx)(_v78.ReviewQuestion, {
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
      children: (0, _v1.jsx)(_v49.BlockingLoadingWrapper, {
        id: (0, _v27.createInteractionDomName)(_v0, "loader"),
        opacity: .1,
        withAnimation: !0
      })
    });
  }
  _v0.s(["QnaView", 0, _v104], 0);
  var _v105 = _v0.i(0),
    _v106 = _v0.i(0),
    _v107 = _v0.i(0),
    _v108 = _v0.i(0),
    _v109 = _v0.i(0),
    _v110 = _v0.i(0),
    _v111 = _v0.i(0),
    _v112 = _v0.i(0),
    _v113 = _v0.i(0),
    _v114 = _v0.i(0);
  let _v115 = (0, _v3.lazy)(() => _v0.A(0).then(_v0 => ({
      default: _v0.EmojiPanel
    }))),
    _v116 = [{
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
  function _v117() {
    let {
        isEnabled: _v0,
        reactionActions: {
          sendReaction: _v1
        }
      } = (0, _v2.useManager)(_v16.ReactionManager),
      {
        isOpen: _v2,
        onOpen: _v3,
        onClose: _v4
      } = (0, _v112.useDisclosure)(),
      _v5 = (0, _v3.useRef)(null),
      _v6 = (0, _v111.useBreakpointValue)({
        base: !0,
        md: !1
      }) ?? !1,
      _v7 = (0, _v3.useCallback)(_v0 => {
        _v1(_v0);
      }, [_v1]),
      _v8 = (0, _v3.useCallback)(_v0 => {
        _v0?.native && (_v1(_v0.native), _v4());
      }, [_v1, _v4]);
    return _v0 ? (0, _v1.jsxs)(_v24.Flex, {
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
      children: [_v116.map(({
        emoji: _v0,
        label: _v1
      }) => (0, _v1.jsx)(_v114.BokehTooltip, {
        label: _v1,
        placement: "left",
        shouldWrapChildren: !0,
        children: (0, _v1.jsx)(_v23.Box, {
          as: "button",
          width: (0, _v25.rem)(44),
          height: (0, _v25.rem)(44),
          flexShrink: 0,
          fontSize: (0, _v25.rem)(28),
          lineHeight: 1,
          cursor: "pointer",
          borderRadius: "sm",
          background: "none",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          _hover: {
            transform: "scale(1.2)",
            background: "var(--vimeo-colors-fill-component)"
          },
          transition: "transform 0.1s",
          "aria-label": _v1,
          onClick: () => _v7(_v0),
          children: _v0
        })
      }, _v0)), (0, _v1.jsxs)(_v105.Popover, {
        isLazy: !0,
        placement: _v6 ? "top-end" : "left-end",
        gutter: 16,
        isOpen: _v2,
        onOpen: _v3,
        onClose: _v4,
        children: [(0, _v1.jsx)(_v108.PopoverTrigger, {
          children: (0, _v1.jsx)(_v95.IconButton, {
            "aria-label": "More emojis",
            type: "button",
            size: "sm",
            variant: "tertiary",
            borderRadius: "sm",
            flexShrink: 0,
            icon: (0, _v1.jsx)(_v113.EllipsisH, {})
          })
        }), (0, _v1.jsx)(_v109.Portal, {
          children: (0, _v1.jsx)(_v107.PopoverContent, {
            padding: 0,
            zIndex: "popover",
            children: (0, _v1.jsx)(_v106.PopoverBody, {
              width: (0, _v25.rem)(326),
              height: (0, _v25.rem)(260),
              children: (0, _v1.jsx)(_v3.Suspense, {
                fallback: (0, _v1.jsx)(_v24.Flex, {
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100%",
                  children: (0, _v1.jsx)(_v110.Spinner, {
                    size: "xs"
                  })
                }),
                children: (0, _v1.jsx)(_v115, {
                  ref: _v5,
                  isOpen: _v2,
                  onSelect: _v8
                })
              })
            })
          })
        })]
      })]
    }) : null;
  }
  function _v118({
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
      children: [(0, _v1.jsx)(_v73.Text, {
        variant: "heading-xs",
        children: "Emoji reactions"
      }), (0, _v1.jsx)(_v96.Switch, {
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
      {
        settings: _v10
      } = (0, _v21.useOrionSettings)(),
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
            Content: _v11 ? _v35 : ({
              id: _v0
            }) => (0, _v1.jsx)(_v36, {
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
            Content: _v11 ? _v65 : _v77
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
            Content: _v11 ? _v91 : _v104
          },
          _v3 = {
            id: _v19.EInteractionModule.REACTIONS,
            label: "Reactions",
            icon: (0, _v1.jsx)(_v5.Smile, {}),
            header: _v11 ? "Reactions" : void 0,
            panelWidth: _v11 ? void 0 : 60,
            panelAutoHeight: !_v11,
            Content: _v11 ? _v118 : _v117
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