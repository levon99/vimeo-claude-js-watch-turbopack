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
  function _v22(_v0) {
    return _v0.trim().length > 0 && _v0.trim().length <= _v19.interactionToolsConfig.POLLS.MAX_QUESTION_LENGTH;
  }
  function _v23({
    onQuestionChange: _v0,
    question: _v1,
    hasSubmitError: _v2,
    onValidate: _v3
  }) {
    let [_v4, _v5] = (0, _v4.useState)(!1);
    (0, _v4.useEffect)(() => {
      _v5(_v2);
    }, [_v2]);
    let _v6 = (0, _v4.useCallback)(_v0 => {
        let _v1 = _v22(_v0.target.value);
        _v5(!_v1), _v3?.(_v1), _v0(_v0);
      }, [_v0, _v3]),
      _v7 = _v4 && !_v22(_v1);
    return (0, _v1.jsxs)(_v13.InputGroup, {
      display: "flex",
      flexDirection: "column",
      gap: (0, _v6.rem)(8),
      children: [(0, _v1.jsx)(_v7.Text, {
        variant: "body-xl",
        fontSize: "text-sm",
        children: _v20.T_QUESTION
      }), (0, _v1.jsx)(_v18.Textarea, {
        className: (0, _v21.createDomName)("poll-form-question"),
        tabIndex: 1,
        minHeight: (0, _v6.rem)(120),
        maxHeight: (0, _v6.rem)(200),
        resize: "vertical",
        placeholder: _v20.T_ASK_YOUR_VIEWERS_QUESTION,
        value: _v1,
        isInvalid: _v7,
        onChange: _v6
      }), (0, _v1.jsx)(_v17.Box, {
        position: "relative",
        height: (0, _v6.rem)(12),
        children: _v1.length ? (0, _v1.jsxs)(_v7.Text, {
          variant: "body-sm",
          position: "absolute",
          width: "100%",
          align: "right",
          lineHeight: (0, _v6.rem)(14),
          color: _v7 ? "status-destructive-primary" : "text-secondary",
          children: [_v1.trim().length, " / ", _v19.interactionToolsConfig.POLLS.MAX_QUESTION_LENGTH]
        }) : null
      })]
    });
  }
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0);
  function _v29({
    id: _v0 = (0, _v21.createDomName)("panel-back-button"),
    className: _v1 = (0, _v21.createDomName)("panel-back-button"),
    title: _v2,
    headerSize: _v3,
    padding: _v4,
    margin: _v5,
    onClick: _v6 = _v28.CallablePlaceholder
  }) {
    return (0, _v1.jsxs)(_v8.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      width: "100%",
      cursor: "pointer",
      padding: _v4,
      margin: _v5,
      onClick: _v6,
      children: [(0, _v1.jsx)(_v11.IconButton, {
        id: (0, _v21.createDomName)(_v0, "arrow"),
        className: (0, _v21.createDomName)(_v1, "arrow"),
        "aria-label": "Back",
        variant: "tertiary",
        size: "sm",
        icon: (0, _v1.jsx)(_v27.ChevronLeft, {})
      }), (0, _v1.jsx)(_v26.Header, {
        id: (0, _v21.createDomName)(_v0, "header"),
        className: (0, _v21.createDomName)(_v1, "header"),
        marginLeft: (0, _v6.rem)(4),
        size: _v3 ?? "sm",
        children: _v2
      })]
    });
  }
  _v0.s(["BackButtonPanel", 0, _v29], 0), _v0.s(["PollForm", 0, function ({
    id: _v0 = (0, _v21.createDomName)("poll-form"),
    className: _v1 = (0, _v21.createDomName)("poll-form"),
    poll: _v2,
    onClose: _v3,
    onSubmit: _v4
  }) {
    let [_v5, _v6] = (0, _v4.useState)(() => (0, _v2.default)(_v2)),
      [_v7, _v8] = (0, _v4.useState)(!1),
      [_v9, _v10] = (0, _v4.useState)(!1),
      [_v11, _v12] = (0, _v4.useState)(!0),
      {
        options: _v13,
        question: _v14
      } = _v5,
      _v15 = (0, _v4.useMemo)(() => !(0, _v3.default)(_v5, _v2), [_v5, _v2]),
      _v16 = (0, _v4.useCallback)(() => {
        _v3(!1), _v5.id || (0, _v24.trackCancelPollCreation)();
      }, [_v3, _v5]),
      _v17 = (0, _v4.useCallback)(() => {
        _v10(!0), function (_v0) {
          if (!_v0) return !1;
          let _v1 = _v0.options.filter(_v0 => _v0.text.trim().length > 0 && _v0.text.trim().length <= _v19.interactionToolsConfig.POLLS.MAX_OPTION_LENGTH),
            _v2 = _v1.length >= 2 && _v1.length === _v0.options.length;
          return _v0.question.trim().length > 0 && _v0.question.trim().length <= _v19.interactionToolsConfig.POLLS.MAX_QUESTION_LENGTH && _v2;
        }(_v5) ? (_v8(!1), _v5.id || (_v5.id = (0, _v5.v4)()), _v4(_v5), _v3(!1), (0, _v24.trackSavePoll)(_v13.length)) : _v8(!0), _v10(!1);
      }, [_v4, _v5, _v3, _v13.length]),
      _v18 = (0, _v4.useCallback)(() => _v6({
        ..._v5,
        options: [..._v5.options, {
          id: (0, _v5.v4)(),
          text: "",
          correct: !1
        }]
      }), [_v5]),
      _v19 = (0, _v4.useCallback)(({
        target: {
          value: _v0
        }
      }) => {
        _v6({
          ..._v5,
          question: _v0
        });
      }, [_v5]),
      _v20 = (0, _v4.useCallback)(_v0 => () => {
        _v6({
          ..._v5,
          options: _v5.options.filter(_v0 => _v0 !== _v0)
        });
      }, [_v5]),
      _v21 = (0, _v4.useCallback)(_v0 => () => {
        _v6({
          ..._v5,
          options: _v5.options.map(_v0 => (_v0.correct = _v0 === _v0 && !_v0.correct, _v0))
        });
      }, [_v5]),
      _v22 = (0, _v4.useCallback)((_v0, _v1) => {
        _v1.length > _v19.interactionToolsConfig.POLLS.MAX_OPTION_LENGTH || _v6({
          ..._v5,
          options: _v5.options.map(_v0 => (_v0 === _v0 && (_v0.text = _v1), _v0))
        });
      }, [_v5]);
    return (0, _v1.jsxs)(_v8.Flex, {
      id: _v0,
      className: _v1,
      grow: 1,
      direction: "column",
      gap: (0, _v6.rem)(16),
      children: [(0, _v1.jsx)(_v8.Flex, {
        children: (0, _v1.jsx)(_v29, {
          id: (0, _v21.createDomName)(_v0, "back-button"),
          className: (0, _v21.createDomName)(_v1, "back-button"),
          title: _v2.id ? _v20.T_EDIT_POLL : _v20.T_CREATE_POLL,
          onClick: _v16
        })
      }), (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        gap: (0, _v6.rem)(8),
        children: [(0, _v1.jsx)(_v23, {
          hasSubmitError: _v7,
          question: _v14,
          onQuestionChange: _v19,
          onValidate: _v12
        }), _v13.map((_v0, _v1) => {
          let _v2 = !!(_v7 && !_v0.text.trim().length),
            _v3 = _v2 ? _v20.T_PLEASE_ENTER_AN_OPTION : null;
          return (0, _v1.jsxs)(_v8.Flex, {
            position: "relative",
            alignItems: "flex-start",
            paddingTop: (0, _v6.rem)(8),
            children: [(0, _v1.jsxs)(_v13.InputGroup, {
              display: "flex",
              flexDirection: "column",
              gap: (0, _v6.rem)(8),
              children: [(0, _v1.jsx)(_v7.Text, {
                className: (0, _v21.createDomName)(_v1, "option-text"),
                variant: "body-xl",
                fontSize: "text-sm",
                children: (0, _v20.T_NUMBERED_OPTION)(_v1 + 1)
              }), (0, _v1.jsx)(_v12.Input, {
                className: (0, _v21.createDomName)(_v1, "option-input"),
                flexGrow: 1,
                tabIndex: _v1 + 2,
                value: _v0.text,
                isInvalid: _v2,
                size: "sm",
                placeholder: _v20.T_ADD_OPTION,
                onChange: ({
                  target: {
                    value: _v0
                  }
                }) => _v22(_v0, _v0)
              }), _v3 ? (0, _v1.jsx)(_v7.Text, {
                className: (0, _v21.createDomName)(_v1, "error-message"),
                variant: "body-xl",
                color: "status-destructive-primary",
                fontSize: "text-xs",
                marginBottom: (0, _v6.rem)(12),
                children: _v3
              }) : null]
            }), (0, _v1.jsxs)(_v8.Flex, {
              position: "absolute",
              top: (0, _v6.rem)(8),
              right: 0,
              gap: (0, _v6.rem)(4),
              children: [(0, _v1.jsx)(_v25.BokehTooltip, {
                label: _v20.T_CORRECT_OPTION,
                shouldWrapChildren: !1,
                children: (0, _v1.jsx)(_v11.IconButton, {
                  className: (0, _v21.createDomName)(_v1, "mark-option-button"),
                  "aria-label": "correct",
                  variant: "tertiary",
                  size: "xs",
                  icon: _v0.correct ? (0, _v1.jsx)(_v16.StarFilled, {}) : (0, _v1.jsx)(_v15.Star, {}),
                  onClick: _v21(_v0)
                })
              }), (0, _v1.jsx)(_v25.BokehTooltip, {
                label: _v20.T_REMOVE,
                shouldWrapChildren: !1,
                children: (0, _v1.jsx)(_v11.IconButton, {
                  className: (0, _v21.createDomName)(_v1, "delete-option-button"),
                  "aria-label": "remove",
                  variant: "tertiary",
                  size: "xs",
                  icon: (0, _v1.jsx)(_v14.TrashBin, {}),
                  isDisabled: _v13.length <= 2,
                  onClick: _v20(_v0)
                })
              })]
            })]
          }, _v1);
        }), (0, _v1.jsxs)(_v8.Flex, {
          direction: "column",
          justifyContent: "space-between",
          gap: (0, _v6.rem)(8),
          children: [_v13.length < _v19.interactionToolsConfig.POLLS.MAX_OPTION_COUNT ? (0, _v1.jsx)(_v10.Button, {
            id: (0, _v21.createDomName)(_v0, "add-option-button"),
            className: (0, _v21.createDomName)(_v1, "add-option-button"),
            variant: "secondary",
            marginTop: (0, _v6.rem)(8),
            size: "sm",
            onClick: _v18,
            children: _v20.T_ADD_OPTION
          }) : null, (0, _v1.jsx)(_v9.Divider, {
            marginY: (0, _v6.rem)(8),
            borderColor: "stroke"
          }), (0, _v1.jsx)(_v10.Button, {
            id: (0, _v21.createDomName)(_v0, "save-button"),
            className: (0, _v21.createDomName)(_v1, "save-button"),
            variant: "primary",
            size: "sm",
            isDisabled: !_v15 || _v9 || !_v11,
            onClick: _v17,
            children: _v20.T_SAVE
          }), (0, _v1.jsx)(_v10.Button, {
            id: (0, _v21.createDomName)(_v0, "cancel-button"),
            className: (0, _v21.createDomName)(_v1, "cancel-button"),
            variant: "secondary",
            size: "sm",
            onClick: _v16,
            children: _v20.T_CANCEL
          })]
        })]
      })]
    });
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0);
  function _v32({
    poll: _v0,
    isPollShownInActiveScene: _v1,
    isAnyPollPublished: _v2,
    canOpenPoll: _v3,
    itemActions: {
      onPollOpen: _v4,
      onPollArchive: _v5,
      onPollClose: _v6,
      onToggleShowPoll: _v7
    }
  }) {
    let _v8 = (0, _v4.useMemo)(() => function ({
        poll: _v0,
        canOpenPoll: _v1,
        onPollOpen: _v2,
        onPollClose: _v3,
        onToggleShowPoll: _v4,
        onPollArchive: _v5,
        isPollShownInActiveScene: _v6,
        isAnyPollPublished: _v7
      }) {
        return {
          open: (0, _v1.jsx)(_v10.Button, {
            className: (0, _v21.createDomName)("poll-item-action"),
            isDisabled: !_v1,
            size: "sm",
            variant: "secondary",
            onClick: _v0 => {
              _v0.stopPropagation(), _v2(_v0), _v7 && (0, _v24.trackArchivePoll)(), (0, _v24.trackOpenPoll)();
            },
            children: _v20.T_OPEN_POLL
          }, "open"),
          archive: (0, _v1.jsx)(_v10.Button, {
            className: (0, _v21.createDomName)("poll-item-action"),
            variant: "secondary",
            size: "sm",
            onClick: _v0 => {
              _v0.stopPropagation(), _v5(_v0), (0, _v24.trackArchivePoll)();
            },
            children: _v20.T_ARCHIVE_POLL
          }, "archive"),
          publish: (0, _v1.jsx)(_v10.Button, {
            className: (0, _v21.createDomName)("poll-item-action"),
            size: "sm",
            variant: "primary",
            onClick: _v0 => {
              _v0.stopPropagation(), _v3(_v0), (0, _v24.trackPublishPollResults)();
            },
            children: _v20.T_PUBLISH_RESULTS
          }, "publish"),
          showResults: (0, _v1.jsx)(_v10.Button, {
            className: (0, _v21.createDomName)("poll-item-action"),
            size: "sm",
            variant: _v6 ? "destructive" : "secondary",
            onClick: _v0 => {
              _v0.stopPropagation(), _v4 && _v4(_v0);
            },
            children: _v6 ? _v20.T_HIDE_FROM_SCENE : _v20.T_SHOW_ON_SCENE
          }, "show-results")
        };
      }({
        poll: _v0,
        canOpenPoll: _v3,
        onPollOpen: _v4,
        onPollArchive: _v5,
        onPollClose: _v6,
        onToggleShowPoll: _v7,
        isPollShownInActiveScene: _v1,
        isAnyPollPublished: _v2
      }), [_v0, _v3, _v4, _v5, _v6, _v7, _v1, _v2]),
      _v9 = _v7 ? _v8.showResults : null,
      _v10 = (0, _v4.useMemo)(() => {
        switch (_v0.state) {
          case _v31.EPollState.CLOSED:
            return [_v8.archive, _v9];
          case _v31.EPollState.OPENED:
            return [_v8.publish, _v9];
          case _v31.EPollState.DRAFT:
            return [_v8.open, _v9];
        }
      }, [_v0, _v8]);
    return _v0.state !== _v31.EPollState.ARCHIVED ? (0, _v1.jsx)(_v8.Flex, {
      direction: "column",
      gap: (0, _v6.rem)(8),
      children: _v10
    }) : null;
  }
  var _v33 = _v0.i(0);
  function _v34({
    id: _v0,
    className: _v1 = (0, _v21.createDomName)("poll-option-votes"),
    state: _v2,
    option: _v3,
    totalCount: _v4,
    isBold: _v5 = !1
  }) {
    let _v6 = (0, _v30.useColorModeValue)("slate.200", "grayscale.700"),
      _v7 = (0, _v4.useMemo)(() => 0 === _v4 ? 0 : Math.floor(100 * _v3.votesCount / _v4), [_v4, _v3.votesCount]),
      _v8 = 0 === _v7 && _v3.votesCount > 0;
    return _v2 === _v31.EPollState.DRAFT ? (0, _v1.jsxs)(_v8.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      children: [(0, _v1.jsx)(_v7.Text, {
        className: (0, _v21.createDomName)(_v1, "option-text"),
        variant: "body-xl",
        overflow: "hidden",
        fontSize: "text-sm",
        lineHeight: (0, _v6.rem)(18),
        color: "text-primary",
        marginRight: (0, _v6.rem)(8),
        children: _v3.text
      }), _v3.correct ? (0, _v1.jsx)(_v16.StarFilled, {
        className: (0, _v21.createDomName)(_v1, "correct-icon"),
        height: (0, _v6.rem)(14)
      }) : null]
    }) : (0, _v1.jsxs)(_v8.Flex, {
      id: _v0,
      className: _v1,
      width: "100%",
      overflow: "hidden",
      position: "relative",
      direction: "column",
      justifyContent: "center",
      children: [(0, _v1.jsxs)(_v8.Flex, {
        width: "100%",
        justifyContent: "space-between",
        margin: `${(0, _v6.rem)(4)} 0`,
        padding: `${(0, _v6.rem)(4)} 0`,
        children: [(0, _v1.jsxs)(_v8.Flex, {
          overflow: "hidden",
          alignItems: "center",
          children: [(0, _v1.jsx)(_v7.Text, {
            className: (0, _v21.createDomName)(_v1, "option-text"),
            variant: "body-xl",
            color: "text-primary",
            fontSize: "text-sm",
            lineHeight: (0, _v6.rem)(18),
            marginRight: (0, _v6.rem)(8),
            children: _v3.text
          }), _v3.correct ? (0, _v1.jsx)(_v16.StarFilled, {
            className: (0, _v21.createDomName)(_v1, "correct-icon"),
            height: (0, _v6.rem)(14),
            "data-testid": "correctIcon"
          }) : null, _v3.isVotedByMe ? (0, _v1.jsx)(_v33.Checkmark, {
            className: (0, _v21.createDomName)(_v1, "your-answer-icon"),
            height: (0, _v6.rem)(14),
            "data-testid": "yourAnswerIcon"
          }) : null]
        }), (0, _v1.jsx)(_v8.Flex, {
          className: (0, _v21.createDomName)(_v1, "option-percentage"),
          alignItems: "center",
          color: "text-primary",
          fontSize: "text-sm",
          lineHeight: (0, _v6.rem)(18),
          children: `${_v8 ? "< 1" : _v7}%`
        })]
      }), (0, _v1.jsx)(_v8.Flex, {
        className: (0, _v21.createDomName)(_v1, "bar"),
        overflow: "hidden",
        borderRadius: _v5 ? (0, _v6.rem)(8) : (0, _v6.rem)(4),
        height: _v5 ? (0, _v6.rem)(8) : (0, _v6.rem)(4),
        backgroundColor: _v6,
        children: (0, _v1.jsx)(_v8.Flex, {
          position: "absolute",
          backgroundColor: _v3.correct ? "green.500" : "blue.500",
          width: `${_v7}%`,
          zIndex: 5,
          borderRadius: _v5 ? (0, _v6.rem)(8) : (0, _v6.rem)(4),
          height: _v5 ? (0, _v6.rem)(8) : (0, _v6.rem)(4)
        })
      })]
    });
  }
  function _v35() {
    let [_v0, _v1] = (0, _v4.useState)(!1),
      [_v2, _v3] = (0, _v4.useState)(!1),
      [_v4, _v5] = (0, _v4.useState)(!1),
      _v6 = (0, _v4.useCallback)(() => {
        _v5(!0), _v3(!0);
      }, []),
      _v7 = (0, _v4.useCallback)(() => {
        _v5(!0), _v3(!0);
      }, []),
      _v8 = (0, _v4.useCallback)(() => {
        _v3(!1), _v0 || _v5(!1);
      }, [_v0]);
    return {
      onMouseEnter: _v6,
      onMouseLeave: _v8,
      onMouseHover: _v7,
      onCloseMenu: (0, _v4.useCallback)(() => {
        _v1(!1), _v2 || _v5(!1);
      }, [_v2]),
      onToggleMenu: (0, _v4.useCallback)(() => {
        let _v0 = !_v0;
        _v1(_v0), !_v0 && _v2 && _v5(!1);
      }, [_v2, _v0]),
      isMenuOpen: _v0,
      isItemHovered: _v4
    };
  }
  _v0.s(["PollOptionVotesBar", 0, _v34], 0), _v0.s(["useSourceHoverControls", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  _v0.s(["PollItem", 0, function ({
    className: _v0 = (0, _v21.createDomName)("poll-item"),
    isPollShownInActiveScene: _v1,
    isAnyPollPublished: _v2,
    poll: _v3,
    poll: {
      state: _v4,
      question: _v5,
      options: _v6
    },
    canOpenPoll: _v7,
    menuAttach: _v8,
    itemActions: _v9,
    menuActions: _v10,
    childrenControls: _v11
  }) {
    let _v12 = (0, _v30.useColorModeValue)("stroke", "transparent"),
      {
        onMouseEnter: _v13,
        onMouseLeave: _v14,
        isMenuOpen: _v15,
        isItemHovered: _v16,
        onToggleMenu: _v17,
        onCloseMenu: _v18
      } = _v35(),
      _v19 = _v6.reduce((_v0, _v1) => _v0 + _v1.votesCount, 0),
      _v20 = _v4 === _v31.EPollState.CLOSED || _v4 === _v31.EPollState.ARCHIVED,
      _v21 = _v4 === _v31.EPollState.ARCHIVED;
    return (0, _v1.jsxs)(_v8.Flex, {
      className: _v0,
      position: "relative",
      padding: (0, _v6.rem)(16),
      rowGap: (0, _v6.rem)(16),
      direction: "column",
      background: "fill-component",
      _hover: {
        background: "fill-component-hover"
      },
      border: "1px solid",
      borderRadius: (0, _v6.rem)(8),
      borderColor: _v12,
      cursor: _v20 ? "default" : "pointer",
      onMouseEnter: _v13,
      onMouseLeave: _v14,
      children: [(0, _v1.jsxs)(_v8.Flex, {
        className: (0, _v21.createDomName)(_v0, "header"),
        justifyContent: "space-between",
        alignItems: "flex-start",
        children: [(0, _v1.jsx)(_v26.Header, {
          className: (0, _v21.createDomName)(_v0, "question"),
          size: "xs",
          minHeight: (0, _v6.rem)(24),
          margin: 0,
          maxWidth: _v21 ? "100%" : "83%",
          children: _v5
        }), (0, _v1.jsx)(_v8.Flex, {
          className: (0, _v21.createDomName)(_v0, "controls"),
          visibility: _v16 ? "visible" : "hidden",
          children: _v21 ? null : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v11, _v10.length ? (0, _v1.jsx)(_v36.BokehMenu, {
              onClose: _v18,
              placement: _v8,
              className: (0, _v21.createDomName)(_v0, "menu", "button"),
              isOpen: _v15,
              onClick: _v17,
              menuList: (0, _v1.jsx)(_v1.Fragment, {
                children: _v10.map(({
                  label: _v0,
                  key: _v1,
                  onClick: _v2,
                  icon: _v3
                }) => (0, _v1.jsx)(_v37.BokehMenuItem, {
                  className: (0, _v21.createDomName)(_v0, "menu", "item"),
                  onClick: () => {
                    _v2 && _v2(), ["removeFromScene", "addToScene"].includes(_v1) || _v18();
                  },
                  icon: _v3,
                  children: _v0
                }, _v1))
              })
            }) : null]
          })
        })]
      }), _v6.map(_v0 => (0, _v1.jsx)(_v34, {
        className: (0, _v21.createDomName)(_v0, "votes"),
        option: _v0,
        state: _v4,
        totalCount: _v19
      }, _v0.id)), (0, _v1.jsx)(_v32, {
        isPollShownInActiveScene: _v1,
        poll: _v3,
        canOpenPoll: _v7,
        itemActions: _v9,
        isAnyPollPublished: _v2
      })]
    });
  }], 0), _v0.s(["usePollPanels", 0, function (_v0) {
    let [_v1, _v2] = (0, _v4.useState)(0),
      {
        activePolls: _v3,
        archivedPolls: _v4
      } = {
        activePolls: (0, _v4.useMemo)(() => Object.values(_v0).filter(_v0 => _v0.state !== _v31.EPollState.ARCHIVED), [_v0]),
        archivedPolls: (0, _v4.useMemo)(() => Object.values(_v0).filter(_v0 => _v0.state === _v31.EPollState.ARCHIVED), [_v0])
      };
    return {
      panels: (0, _v4.useMemo)(() => [{
        id: 0,
        label: (0, _v1.jsxs)(_v8.Flex, {
          gap: (0, _v6.rem)(4),
          children: [(0, _v1.jsx)(_v17.Box, {
            children: _v20.T_ACTIVE
          }), (0, _v1.jsx)(_v17.Box, {
            color: "text-secondary",
            children: _v3.length || null
          })]
        }),
        polls: _v3
      }, {
        id: 1,
        label: (0, _v1.jsxs)(_v8.Flex, {
          gap: (0, _v6.rem)(4),
          children: [(0, _v1.jsx)(_v17.Box, {
            children: _v20.T_ARCHIVED
          }), (0, _v1.jsx)(_v17.Box, {
            color: "text-secondary",
            children: _v4.length || null
          })]
        }),
        polls: _v4
      }], [_v3, _v4]),
      activePolls: _v3,
      archivedPolls: _v4,
      activePanelId: _v1,
      setActivePanelId: _v2
    };
  }], 0);
  var _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  _v0.s(["PollEmptyState", 0, function ({
    id: _v0 = (0, _v21.createDomName)("poll-empty-state"),
    className: _v1 = (0, _v21.createDomName)("poll-empty-state"),
    control: _v2,
    buttonLabel: _v3,
    description: _v4,
    height: _v5,
    width: _v6,
    maxWidth: _v7,
    padding: _v8,
    sx: _v9,
    onCreateClick: _v10
  }) {
    return (0, _v1.jsx)(_v17.Box, {
      id: _v0,
      className: _v1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: _v5,
      width: _v6,
      padding: _v8,
      sx: _v9,
      children: (0, _v1.jsx)(_v8.Flex, {
        direction: "column",
        maxWidth: _v7,
        children: (0, _v1.jsx)(_v39.EmptyStatePlaceholder, {
          id: (0, _v21.createDomName)(_v0, "empty-placeholder"),
          className: (0, _v21.createDomName)(_v0, "empty-placeholder"),
          flexGrow: 0,
          height: "auto",
          control: _v2,
          buttonLabel: _v3,
          description: _v4,
          icon: (0, _v1.jsx)(_v38.ChartGrowthAlt, {
            boxSize: "lg"
          }),
          onButtonClick: _v10
        })
      })
    });
  }], 0);
}