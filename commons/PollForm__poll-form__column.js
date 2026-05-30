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
    _v23 = _v0.i(0);
  _v0.s(["PollForm", 0, function ({
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
        _v3(!1), _v5.id || (0, _v19.trackCancelPollCreation)();
      }, [_v3, _v5]),
      _v17 = (0, _v4.useCallback)(() => {
        _v10(!0), function (_v0) {
          if (!_v0) return !1;
          let _v1 = _v0.options.filter(_v0 => _v0.text.trim().length > 0 && _v0.text.trim().length <= _v18.interactionToolsConfig.POLLS.MAX_OPTION_LENGTH),
            _v2 = _v1.length >= 2 && _v1.length === _v0.options.length;
          return _v0.question.trim().length > 0 && _v0.question.trim().length <= _v18.interactionToolsConfig.POLLS.MAX_QUESTION_LENGTH && _v2;
        }(_v5) ? (_v8(!1), _v5.id || (_v5.id = (0, _v5.v4)()), _v4(_v5), _v3(!1), (0, _v19.trackSavePoll)(_v13.length)) : _v8(!0), _v10(!1);
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
        _v1.length > _v18.interactionToolsConfig.POLLS.MAX_OPTION_LENGTH || _v6({
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
        children: (0, _v1.jsx)(_v23.BackButtonPanel, {
          id: (0, _v21.createDomName)(_v0, "back-button"),
          className: (0, _v21.createDomName)(_v1, "back-button"),
          title: _v2.id ? _v20.T_EDIT_POLL : _v20.T_CREATE_POLL,
          onClick: _v16
        })
      }), (0, _v1.jsxs)(_v8.Flex, {
        direction: "column",
        gap: (0, _v6.rem)(8),
        children: [(0, _v1.jsx)(_v17.PollQuestionField, {
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
              children: [(0, _v1.jsx)(_v22.BokehTooltip, {
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
              }), (0, _v1.jsx)(_v22.BokehTooltip, {
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
          children: [_v13.length < _v18.interactionToolsConfig.POLLS.MAX_OPTION_COUNT ? (0, _v1.jsx)(_v10.Button, {
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
  var _v24 = _v0.i(0);
  _v0.s(["PollItemActions", 0, function ({
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
              _v0.stopPropagation(), _v2(_v0), _v7 && (0, _v19.trackArchivePoll)(), (0, _v19.trackOpenPoll)();
            },
            children: _v20.T_OPEN_POLL
          }, "open"),
          archive: (0, _v1.jsx)(_v10.Button, {
            className: (0, _v21.createDomName)("poll-item-action"),
            variant: "secondary",
            size: "sm",
            onClick: _v0 => {
              _v0.stopPropagation(), _v5(_v0), (0, _v19.trackArchivePoll)();
            },
            children: _v20.T_ARCHIVE_POLL
          }, "archive"),
          publish: (0, _v1.jsx)(_v10.Button, {
            className: (0, _v21.createDomName)("poll-item-action"),
            size: "sm",
            variant: "primary",
            onClick: _v0 => {
              _v0.stopPropagation(), _v3(_v0), (0, _v19.trackPublishPollResults)();
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
          case _v24.EPollState.CLOSED:
            return [_v8.archive, _v9];
          case _v24.EPollState.OPENED:
            return [_v8.publish, _v9];
          case _v24.EPollState.DRAFT:
            return [_v8.open, _v9];
        }
      }, [_v0, _v8]);
    return _v0.state !== _v24.EPollState.ARCHIVED ? (0, _v1.jsx)(_v8.Flex, {
      direction: "column",
      gap: (0, _v6.rem)(8),
      children: _v10
    }) : null;
  }], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  _v0.s(["PollOptionVotesBar", 0, function ({
    id: _v0,
    className: _v1 = (0, _v21.createDomName)("poll-option-votes"),
    state: _v2,
    option: _v3,
    totalCount: _v4,
    isBold: _v5 = !1
  }) {
    let _v6 = (0, _v25.useColorModeValue)("slate.200", "grayscale.700"),
      _v7 = (0, _v4.useMemo)(() => 0 === _v4 ? 0 : Math.floor(100 * _v3.votesCount / _v4), [_v4, _v3.votesCount]),
      _v8 = 0 === _v7 && _v3.votesCount > 0;
    return _v2 === _v24.EPollState.DRAFT ? (0, _v1.jsxs)(_v8.Flex, {
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
          }) : null, _v3.isVotedByMe ? (0, _v1.jsx)(_v26.Checkmark, {
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
  }], 0);
}