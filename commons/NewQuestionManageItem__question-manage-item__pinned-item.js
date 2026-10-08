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
    _v29 = _v0.i(0);
  _v0.s(["NewQuestionManageItem", 0, function ({
    className: _v0 = (0, _v26.createDomName)("question-manage-item"),
    question: _v1,
    isActive: _v2,
    isPinned: _v3,
    canPin: _v4 = !0,
    questionReplies: _v5 = {},
    menuItems: _v6 = [],
    onQuestionSelected: _v7,
    onQuestionDeselected: _v8,
    onQuestionArchive: _v9,
    onQuestionUnArchive: _v10,
    onQuestionApprove: _v11,
    onQuestionPin: _v12 = () => void 0,
    onQuestionUnPin: _v13 = () => void 0,
    onDeleteQuestionReply: _v14,
    canDeleteReply: _v15
  }) {
    let _v16 = (0, _v2.useRef)(null),
      [_v17, _v18] = (0, _v2.useState)(!0),
      {
        id: _v19,
        text: _v20,
        createdAt: _v21,
        anonymous: _v22,
        state: _v23,
        votesCount: _v24,
        user: _v25
      } = _v1,
      {
        colorMode: _v26
      } = (0, _v8.useColorMode)(),
      {
        onMouseEnter: _v27,
        onMouseLeave: _v28,
        isMenuOpen: _v29,
        isItemHovered: _v30,
        onCloseMenu: _v31,
        onToggleMenu: _v32
      } = (0, _v21.useSourceHoverControls)(),
      _v33 = (0, _v19.useQuestionTimeAsked)(_v21),
      _v34 = !_v22 && _v25 && _v25.displayName ? _v25.displayName : _v23.T_ANONYMOUS,
      _v35 = _v22 || !_v25?.avatarUrl ? (0, _v1.jsx)(_v20.default, {
        height: "sm",
        width: "sm"
      }) : (0, _v1.jsx)(_v27.CdnAvatar, {
        size: "sm",
        src: _v25.avatarUrl,
        name: _v34
      }),
      _v36 = _v23 === _v24.EQuestionState.PENDING,
      _v37 = _v23 === _v24.EQuestionState.ARCHIVED,
      _v38 = !_v36 && _v24 > 0,
      _v39 = Object.values(_v5),
      _v40 = _v39.length > 0,
      _v41 = _v4 && !_v36 && !_v37,
      _v42 = (0, _v2.useMemo)(() => `${_v0} ${_v41 && _v3 ? "pinned-item" : ""}`, [_v0, _v41, _v3]),
      _v43 = (0, _v2.useCallback)(() => {
        if (_v2 && _v8) return void _v8();
      }, [_v2, _v1, _v7, _v8]),
      _v44 = (0, _v2.useCallback)(() => {
        _v11 && _v1 && _v11(_v1);
      }, [_v1, _v11]),
      _v45 = (0, _v2.useCallback)(() => {
        _v9 && _v1 && _v9(_v1);
      }, [_v1, _v9]),
      _v46 = (0, _v2.useCallback)(() => {
        _v10 && _v1 && _v10(_v1);
      }, [_v1, _v10]),
      _v47 = (0, _v2.useCallback)(_v0 => {
        _v0.stopPropagation(), _v7 && _v1 && _v7(_v1, _v16.current);
      }, [_v7, _v1]),
      _v48 = (0, _v2.useCallback)(_v0 => {
        (0, _v22.trackDeleteQuestionReply)(), _v14 && _v14(_v19, _v0);
      }, [_v19, _v14]),
      _v49 = (0, _v2.useCallback)(_v0 => {
        _v0.stopPropagation(), _v12 && _v19 && _v12(_v19);
      }, [_v12, _v19]),
      _v50 = (0, _v2.useCallback)(_v0 => {
        _v0.stopPropagation(), _v3 && _v13 && _v19 && _v13(_v19);
      }, [_v3, _v13, _v19]);
    return (0, _v1.jsxs)(_v5.Flex, {
      ref: _v16,
      className: _v42,
      sx: (0, _v15.createQuestionItemWrapperStyle)({
        themeName: _v26,
        isPinned: _v41 && _v3,
        isHovered: _v30
      }),
      onMouseEnter: _v27,
      onMouseLeave: _v28,
      onClick: _v43,
      children: [_v30 ? (0, _v1.jsxs)(_v5.Flex, {
        className: (0, _v26.createDomName)(_v0, "controls"),
        onMouseDown: _v25.stopEventPropagation,
        onTouchStart: _v25.stopEventPropagation,
        position: "absolute",
        right: (0, _v7.rem)(8),
        top: (0, _v7.rem)(8),
        alignSelf: "flex-start",
        lineHeight: (0, _v7.rem)(20),
        gap: (0, _v7.rem)(2),
        children: [_v6.length ? (0, _v1.jsx)(_v28.BokehMenu, {
          isOpen: _v29,
          placement: "bottom-end",
          isInPortal: !1,
          variant: "secondary",
          onClose: _v31,
          onClick: _v32,
          menuList: (0, _v1.jsx)(_v1.Fragment, {
            children: _v6.map(({
              id: _v0,
              label: _v1,
              onClick: _v2
            }) => (0, _v1.jsx)(_v29.BokehMenuItem, {
              className: (0, _v26.createDomName)(_v0, "menu", "item", "id"),
              onClick: _v0 => {
                _v2(_v0), _v31();
              },
              children: _v1
            }, _v0))
          })
        }) : null, (0, _v1.jsx)(_v16.QuestionItemActions, {
          className: _v0,
          isPending: _v36,
          isArchived: _v37,
          isPinned: _v3,
          canPin: _v4,
          hasActiveMenu: !!_v6.length,
          onQuestionArchiveClicked: _v45,
          onQuestionUnArchiveClicked: _v46,
          onQuestionApproveClicked: _v44,
          onQuestionUnPinClicked: _v50,
          onQuestionPinClicked: _v49
        })]
      }) : null, _v41 && _v3 ? (0, _v1.jsx)(_v5.Flex, {
        display: _v30 ? "none" : "flex",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        border: `${(0, _v7.rem)(1)} solid transparent`,
        height: (0, _v7.rem)(24),
        minWidth: (0, _v7.rem)(24),
        right: (0, _v7.rem)(8),
        top: (0, _v7.rem)(8),
        children: (0, _v1.jsx)(_v13.PinOnFilled, {
          boxSize: (0, _v7.rem)(16)
        })
      }) : null, (0, _v1.jsx)(_v4.Box, {
        className: (0, _v26.createDomName)(_v0, "author-avatar"),
        sx: (0, _v15.createAvatarWrapperStyle)(),
        children: _v35
      }), (0, _v1.jsxs)(_v5.Flex, {
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: (0, _v7.rem)(8),
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          className: (0, _v26.createDomName)(_v0, "author-info"),
          sx: (0, _v15.createQuestionInfoStyle)(),
          children: [(0, _v1.jsx)(_v17.QuestionItemAuthor, {
            className: (0, _v26.createDomName)(_v0, "author-name"),
            name: _v34
          }), (0, _v1.jsx)(_v3.Text, {
            className: (0, _v26.createDomName)(_v0, "time"),
            variant: "body-sm",
            sx: _v15.TIME_ASKED_STYLE,
            children: _v33
          })]
        }), (0, _v1.jsx)(_v6.Paragraph, {
          variant: "body-md",
          className: (0, _v26.createDomName)(_v0, "text"),
          sx: (0, _v15.createQuestionTextStyle)(),
          children: _v20
        }), (0, _v1.jsxs)(_v5.Flex, {
          columnGap: (0, _v7.rem)(8),
          alignItems: "center",
          children: [_v40 || _v37 ? null : (0, _v1.jsx)(_v9.Button, {
            className: (0, _v26.createDomName)(_v0, "reply"),
            size: "xs",
            variant: "secondary",
            onClick: _v47,
            children: _v23.T_REPLY
          }), _v40 ? (0, _v1.jsx)(_v9.Button, {
            size: "xs",
            variant: "tertiary",
            iconSpacing: (0, _v7.rem)(4),
            rightIcon: _v17 ? (0, _v1.jsx)(_v11.ChevronUpSmall, {}) : (0, _v1.jsx)(_v12.ChevronDownSmall, {}),
            onClick: _v0 => {
              (0, _v25.stopEventPropagation)(_v0), _v18(_v0 => !_v0);
            },
            children: _v23.T_REPLY
          }) : null, _v38 ? (0, _v1.jsx)(_v18.QuestionItemVotesCount, {
            className: (0, _v26.createDomName)(_v0, "votes"),
            votesCount: _v24
          }) : null]
        }), _v39.length ? (0, _v1.jsx)(_v4.Box, {
          width: "100%",
          children: (0, _v1.jsx)(_v10.Collapse, {
            in: _v17,
            animateOpacity: !0,
            children: _v39.map(_v0 => {
              let _v1 = _v15 ? _v15(_v0) : !!_v14;
              return (0, _v1.jsx)(_v14.NewQuestionItemReply, {
                reply: _v0,
                onDelete: _v1 ? () => _v48(_v0.id) : void 0,
                isManagementAccessed: !0
              }, _v0.id);
            })
          })
        }) : null]
      })]
    });
  }], 0);
  var _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0);
  function _v34({
    id: _v0 = (0, _v26.createDomName)("question-list-notification"),
    className: _v1 = (0, _v26.createDomName)("question-list-notification"),
    content: _v2,
    placement: _v3,
    icon: _v4,
    onDismiss: _v5,
    onClick: _v6
  }) {
    let _v7 = (0, _v2.useCallback)(_v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v5 && _v5();
      }, [_v5]),
      _v8 = (0, _v2.useCallback)(_v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v6 && _v6();
      }, [_v6]),
      _v9 = (0, _v2.useMemo)(() => _v4 ? {
        leftIcon: _v4
      } : _v5 ? {
        rightIcon: (0, _v1.jsx)(_v33.CloseX, {
          onClick: _v7
        })
      } : {}, [_v4, _v5, _v7]);
    return (0, _v1.jsx)(_v4.Box, {
      id: _v0,
      className: _v1,
      position: "absolute",
      alignSelf: "center",
      opacity: 1,
      sx: "bottom" === _v3 ? {
        bottom: (0, _v7.rem)(20)
      } : {
        top: (0, _v7.rem)(60)
      },
      children: (0, _v1.jsx)(_v9.Button, {
        id: (0, _v26.createDomName)(_v1, "button"),
        className: (0, _v26.createDomName)(_v1, "button"),
        variant: "primary",
        size: "xs",
        ..._v9,
        padding: `0 ${(0, _v7.rem)(8)}`,
        onClick: _v8,
        children: (0, _v1.jsx)(_v6.Paragraph, {
          id: (0, _v26.createDomName)(_v1, "text"),
          className: (0, _v26.createDomName)(_v1, "text"),
          size: "md",
          as: "h2",
          children: _v2
        })
      })
    });
  }
  var _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0);
  function _v39({
    id: _v0 = (0, _v26.createDomName)("questions-list-sorting"),
    className: _v1 = (0, _v26.createDomName)("questions-list-sorting"),
    tabId: _v2,
    sorting: _v3,
    changeSorting: _v4
  }) {
    let {
        isOpen: _v5,
        onClose: _v6,
        onToggle: _v7
      } = (0, _v36.useDisclosure)(),
      _v8 = {
        [_v24.EQuestionSortType.NEWEST]: _v23.T_NEWEST,
        [_v24.EQuestionSortType.OLDEST]: _v23.T_OLDEST,
        [_v24.EQuestionSortType.MOST_POPULAR]: _v23.T_MOST_POPULAR
      }[_v3.type],
      _v9 = (0, _v2.useMemo)(() => {
        let _v0 = [{
          type: _v24.EQuestionSortType.NEWEST,
          order: _v24.ESortOrder.DESCENDING,
          copy: _v23.T_NEWEST,
          field: _v2 === _v24.EQnaTab.ARCHIVED ? _v24.EQuestionsSortBy.ARCHIVED_TIME : _v24.EQuestionsSortBy.TIMESTAMP
        }, {
          type: _v24.EQuestionSortType.OLDEST,
          order: _v24.ESortOrder.ASCENDING,
          copy: _v23.T_OLDEST,
          field: _v2 === _v24.EQnaTab.ARCHIVED ? _v24.EQuestionsSortBy.ARCHIVED_TIME : _v24.EQuestionsSortBy.TIMESTAMP
        }];
        return _v2 !== _v24.EQnaTab.PENDING && _v0.push({
          type: _v24.EQuestionSortType.MOST_POPULAR,
          order: _v24.ESortOrder.DESCENDING,
          copy: _v23.T_MOST_POPULAR,
          field: _v24.EQuestionsSortBy.VOTES
        }), _v0;
      }, [_v2]),
      _v10 = (0, _v1.jsx)(_v4.Box, {
        id: (0, _v26.createDomName)(_v0, "list"),
        minWidth: (0, _v7.rem)(160),
        children: (0, _v1.jsx)(_v35.PopoverBody, {
          children: _v9.map(({
            copy: _v0,
            field: _v1,
            type: _v2,
            order: _v3
          }) => (0, _v1.jsx)(_v5.Flex, {
            className: (0, _v26.createDomName)(_v0, "list-item"),
            as: "span",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            position: "relative",
            cursor: "pointer",
            width: "100%",
            fontSize: "text-sm",
            color: "text-primary",
            borderRadius: "sm",
            _hover: {
              backgroundColor: "fill-component-hover"
            },
            padding: `${(0, _v7.rem)(8)} ${(0, _v7.rem)(16)}`,
            onClick: () => {
              switch (_v4({
                [_v2]: {
                  field: _v1,
                  type: _v2,
                  order: _v3
                }
              }), _v6(), _v2) {
                case _v24.EQuestionSortType.MOST_POPULAR:
                  (0, _v22.trackSortByMostPopular)();
                  break;
                case _v24.EQuestionSortType.NEWEST:
                  (0, _v22.trackSortByMostRecent)();
              }
            },
            children: _v0
          }, _v2))
        })
      });
    return (0, _v1.jsx)(_v5.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "flex-end",
      gap: (0, _v7.rem)(8),
      children: (0, _v1.jsx)(_v38.BokehPopover, {
        isOpen: _v5,
        inPortal: !0,
        placement: "bottom-end",
        gutter: 8,
        triggerContent: (0, _v1.jsx)(_v9.Button, {
          id: (0, _v26.createDomName)(_v0, "button"),
          className: (0, _v26.createDomName)(_v1, "button"),
          size: "xs",
          variant: "tertiary",
          rightIcon: (0, _v1.jsx)(_v37.ChevronDown, {}),
          onClick: _v7,
          children: _v8
        }),
        content: _v10,
        onClose: _v6
      })
    });
  }
  var _v40 = _v0.i(0),
    _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0),
    _v47 = _v26,
    _v48 = _v0.i(0),
    _v49 = _v0.i(0);
  let _v50 = (0, _v2.forwardRef)(({
    id: _v0 = (0, _v47.createDomName)("questions-list"),
    className: _v1 = (0, _v47.createDomName)("questions-list"),
    tabId: _v2,
    selectedQuestionElement: _v3 = null,
    questions: _v4 = [],
    pinnedQuestionId: _v5,
    fullWidth: _v6,
    isManagementAccessed: _v7 = !1,
    itemRenderer: _v8,
    placeholder: _v9,
    scrollBackground: _v10 = "surface"
  }, _v11) => {
    let _v12 = (0, _v2.useRef)(null),
      [_v13, _v14, _v15] = function (_v0) {
        let [_v1, _v2] = (0, _v2.useState)(() => ({
            [_v24.EQnaTab.ACTIVE]: {
              type: _v24.EQuestionSortType.NEWEST,
              order: _v24.ESortOrder.DESCENDING,
              field: _v24.EQuestionsSortBy.TIMESTAMP
            },
            [_v24.EQnaTab.APPROVED]: {
              type: _v24.EQuestionSortType.NEWEST,
              order: _v24.ESortOrder.DESCENDING,
              field: _v24.EQuestionsSortBy.TIMESTAMP
            },
            [_v24.EQnaTab.PENDING]: {
              type: _v24.EQuestionSortType.NEWEST,
              order: _v24.ESortOrder.DESCENDING,
              field: _v24.EQuestionsSortBy.TIMESTAMP
            },
            [_v24.EQnaTab.ARCHIVED]: {
              type: _v24.EQuestionSortType.NEWEST,
              order: _v24.ESortOrder.DESCENDING,
              field: _v24.EQuestionsSortBy.ARCHIVED_TIME
            }
          })),
          _v3 = (0, _v2.useMemo)(() => _v1[_v0], [_v1, _v0]),
          _v4 = (0, _v2.useCallback)(_v0 => {
            _v2({
              ..._v1,
              ..._v0
            });
          }, [_v1]),
          _v5 = (0, _v2.useCallback)((_v0, _v1) => {
            let {
              field: _v2,
              order: _v3
            } = _v3;
            if (_v0.hasOwnProperty(_v2) && _v1.hasOwnProperty(_v2)) {
              let _v0 = _v0[_v2] - _v1[_v2];
              return _v3 === _v24.ESortOrder.ASCENDING ? _v0 : -_v0;
            }
            return 0;
          }, [_v3]);
        return [_v3, _v4, _v5];
      }(_v2),
      {
        canShowNewQuestionsNotification: _v16,
        canShowScrolledAway: _v17,
        scrolledAwayNotificationPosition: _v18,
        newQuestionNotificationPosition: _v19,
        onScrollInQuestionList: _v20,
        onConfirmShowNewQuestions: _v21,
        onConfirmScrollToSelectedQuestion: _v22,
        onDismissNewQuestionsNotification: _v23
      } = function (_v0, _v1, _v2, _v3) {
        let _v4 = (0, _v40.useScope)(),
          _v5 = (0, _v2.useRef)((0, _v45.getAbsoluteNow)()),
          [_v6, _v7] = (0, _v2.useState)(!1),
          [_v8, _v9] = (0, _v2.useState)(!1),
          [_v10, _v11] = (0, _v2.useState)(null),
          _v12 = !!(_v8 && _v10),
          _v13 = !_v12 && _v6 && (_v2.type === _v24.EQuestionSortType.NEWEST || _v2.type === _v24.EQuestionSortType.OLDEST),
          _v14 = _v2.type === _v24.EQuestionSortType.OLDEST ? "bottom" : "top",
          _v15 = (0, _v2.useCallback)(() => {
            let _v0 = _v0.current;
            if (!_v0 || !_v0.children.length) return !0;
            let _v1 = _v0.parentElement,
              _v2 = _v2.type === _v24.EQuestionSortType.OLDEST ? _v0.children[_v0.childElementCount - 1] : _v0.children[0],
              _v3 = _v2.clientHeight,
              _v4 = _v1.scrollTop,
              _v5 = _v4 + _v1.clientHeight,
              _v6 = _v2.offsetTop;
            return _v6 + _v2.clientHeight - _v5 < _v3 && _v4 - _v6 < _v3;
          }, [_v0, _v2.type]),
          _v16 = (0, _v2.useCallback)(() => {
            let _v0 = _v0.current;
            if (!_v0 || !_v3) return [!0, null];
            let _v1 = _v0.parentElement,
              _v2 = _v3.parentElement,
              _v3 = _v2.clientHeight,
              _v4 = _v1.scrollTop,
              _v5 = _v4 + _v1.clientHeight,
              _v6 = _v2.offsetTop,
              _v7 = _v6 + _v2.clientHeight - _v5 > _v3,
              _v8 = _v4 - _v6 > _v3,
              _v9 = !_v8 && !_v7;
            return [_v9, (0, _v44.inline)(() => _v9 ? null : _v7 ? "bottom" : _v8 ? "top" : null)];
          }, [_v0, _v3]),
          _v17 = (0, _v2.useCallback)(() => {
            _v5.current = (0, _v45.getAbsoluteNow)(), _v7(!1);
          }, []),
          _v18 = (0, _v2.useCallback)(() => {
            _v5.current = (0, _v45.getAbsoluteNow)(), _v7(!1);
            let _v0 = _v0.current?.parentElement;
            _v0 && _v0.scrollTo({
              top: _v2.type === _v24.EQuestionSortType.OLDEST ? _v0.scrollHeight : 0,
              behavior: "smooth"
            });
          }, [_v0, _v2.type]),
          _v19 = (0, _v2.useCallback)(() => {
            let _v0 = _v0.current?.parentElement,
              [, _v1] = _v16();
            _v0 && _v3 && (0, _v43.scrollElementIntoView)(_v3.parentElement, {
              behavior: "smooth",
              block: "top" === _v1 ? "start" : "bottom" === _v1 ? "end" : "center"
            });
          }, [_v16, _v0, _v3]),
          _v20 = (0, _v2.useMemo)(() => (0, _v41.default)(() => {
            _v15() && (_v5.current = (0, _v45.getAbsoluteNow)(), _v7(!1));
            let [_v0, _v1] = _v16();
            _v9(!_v0), _v11(_v1);
          }, 100), [_v15, _v16]);
        return (0, _v2.useLayoutEffect)(() => {
          if (_v15()) _v5.current = (0, _v45.getAbsoluteNow)(), _v7(!1);else {
            let _v0 = _v4.queryDataSync({
              type: _v42.ELiveInteractionQuery.LIVE_INTERACTION_USER
            })?.data?.id;
            _v7(_v1.some(_v0 => null != _v5.current && _v0.createdAt > _v5.current && (!_v0 || _v0.user?.id !== _v0)));
          }
        }, [_v4, _v15, _v0, _v1, _v2.type]), (0, _v2.useLayoutEffect)(() => {
          let [_v0, _v1] = _v16();
          _v9(!_v0), _v11(_v1);
        }, [_v16, _v3, _v2]), {
          lastSeenAtRef: _v5,
          canShowNewQuestionsNotification: _v13,
          canShowScrolledAway: _v12,
          scrolledAwayNotificationPosition: _v10,
          newQuestionNotificationPosition: _v14,
          onScrollInQuestionList: _v20,
          onDismissNewQuestionsNotification: _v17,
          onConfirmScrollToSelectedQuestion: _v19,
          onConfirmShowNewQuestions: _v18
        };
      }(_v12, _v4, _v13, _v3);
    (0, _v2.useEffect)(() => {
      if (!_v7 || !_v5) return;
      let _v0 = _v12.current?.parentElement;
      _v0 && _v0.scrollTop && _v0.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, [_v7, _v5, _v12]);
    let {
        pinnedQuestion: _v24,
        sortedQuestions: _v25
      } = (0, _v2.useMemo)(() => {
        let _v0 = _v4.sort(_v15);
        return _v5 ? {
          pinnedQuestion: _v0.find(_v0 => _v0.id === _v5),
          sortedQuestions: _v0.filter(_v0 => _v0.id !== _v5)
        } : {
          pinnedQuestion: null,
          sortedQuestions: _v0
        };
      }, [_v5, _v4, _v15]),
      _v26 = (0, _v46.useScrollbarStyles)({
        scrollbarColor: _v10
      });
    return _v4.length ? (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v39, {
        tabId: _v2,
        sorting: _v13,
        changeSorting: _v14
      }), (0, _v1.jsx)(_v4.Box, {
        ref: _v11,
        id: (0, _v47.createDomName)(_v0, "scroll"),
        className: (0, _v47.createDomName)(_v0, "scroll"),
        sx: {
          ...(0, _v49.createTabListScrollStyle)({
            fullWidth: _v6
          }),
          ..._v26,
          scrollPaddingBottom: (0, _v7.rem)(16)
        },
        onScroll: _v20,
        children: (0, _v1.jsxs)(_v4.Box, {
          ref: _v12,
          id: (0, _v47.createDomName)(_v0, "columns"),
          className: (0, _v47.createDomName)(_v1, "columns"),
          sx: (0, _v49.createTabListColumnStyle)(),
          children: [_v24 ? _v8(_v24) : null, _v25.map(_v0 => _v8(_v0))]
        })
      }), _v16 ? (0, _v1.jsx)(_v34, {
        id: (0, _v47.createDomName)(_v0, "new-questions-notification"),
        className: (0, _v47.createDomName)(_v1, "new-questions-notification"),
        placement: _v19,
        content: _v23.T_UNREAD_QUESTIONS,
        onDismiss: _v23,
        onClick: _v21
      }) : null, _v17 ? (0, _v1.jsx)(_v34, {
        id: (0, _v47.createDomName)(_v0, "scrolled-away-notification"),
        className: (0, _v47.createDomName)(_v1, "scrolled-away-notification"),
        placement: _v18,
        content: _v23.T_SELECTED,
        onClick: _v22,
        icon: "top" === _v18 ? (0, _v1.jsx)(_v31.ArrowUp, {}) : (0, _v1.jsx)(_v30.ArrowDown, {})
      }) : null]
    }) : _v9 || (0, _v1.jsx)(_v48.EmptyStatePlaceholder, {
      id: (0, _v47.createDomName)(_v0, "placeholder"),
      className: (0, _v47.createDomName)(_v1, "placeholder"),
      isWithPadding: !0,
      icon: (0, _v1.jsx)(_v32.ReviewQuestion, {
        boxSize: "lg"
      }),
      description: _v23.T_NO_QUESTIONS_YET,
      control: null
    });
  });
  _v0.s(["QuestionsList", 0, _v50], 0);
  var _v51 = _v0.i(0),
    _v52 = _v0.i(0);
  _v0.s(["useQnaPanels", 0, function () {
    let [_v0, _v1] = (0, _v2.useState)(_v24.EQnaTab.PENDING),
      {
        activeSessionPendingQuestions: _v2,
        activeSessionQuestions: _v3,
        isEventModerated: _v4,
        config: {
          canUseQnaModeration: _v5,
          canViewQnaModeration: _v6
        }
      } = (0, _v40.useManager)(_v51.QnAManager),
      _v7 = !!(_v4 && (_v5 || _v6));
    (0, _v2.useEffect)(() => {
      _v1(_v7 ? _v24.EQnaTab.PENDING : _v24.EQnaTab.ACTIVE);
    }, [_v7]);
    let {
        activeQuestions: _v8,
        pendingQuestions: _v9,
        archivedQuestions: _v10
      } = (0, _v52.useQnaQuestions)(_v2, _v3),
      _v11 = (0, _v2.useMemo)(() => {
        let _v0 = (0, _v1.jsxs)(_v5.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v1.jsx)(_v4.Box, {
              children: _v23.T_REVIEW
            }), (0, _v1.jsx)(_v4.Box, {
              color: "text-secondary",
              children: _v9.length || null
            })]
          }),
          _v1 = (0, _v1.jsxs)(_v5.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v1.jsx)(_v4.Box, {
              children: _v23.T_APPROVED
            }), (0, _v1.jsx)(_v4.Box, {
              color: "text-secondary",
              children: _v8.length || null
            })]
          }),
          _v2 = (0, _v1.jsxs)(_v5.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v1.jsx)(_v4.Box, {
              children: _v23.T_ACTIVE
            }), (0, _v1.jsx)(_v4.Box, {
              color: "text-secondary",
              children: _v8.length || null
            })]
          }),
          _v3 = (0, _v1.jsxs)(_v5.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v1.jsx)(_v4.Box, {
              children: _v23.T_ARCHIVED
            }), (0, _v1.jsx)(_v4.Box, {
              color: "text-secondary",
              children: _v10.length || null
            })]
          });
        return _v7 ? [{
          id: _v24.EQnaTab.PENDING,
          label: _v0,
          questions: _v9
        }, {
          id: _v24.EQnaTab.APPROVED,
          label: _v1,
          questions: _v8
        }, {
          id: _v24.EQnaTab.ARCHIVED,
          label: _v3,
          questions: _v10
        }] : [{
          id: _v24.EQnaTab.ACTIVE,
          label: _v2,
          questions: _v8
        }, {
          id: _v24.EQnaTab.ARCHIVED,
          label: _v3,
          questions: _v10
        }];
      }, [_v9, _v8, _v10, _v7]),
      _v12 = (0, _v44.inline)(() => {
        switch (_v0) {
          case _v24.EQnaTab.PENDING:
            return _v9;
          case _v24.EQnaTab.ARCHIVED:
            return _v10;
          default:
            return _v8;
        }
      });
    return {
      panels: _v11,
      activePanelId: _v0,
      currentQuestions: _v12,
      activeQuestions: _v8,
      pendingQuestions: _v9,
      archivedQuestions: _v10,
      setActivePanelId: _v1
    };
  }], 0);
}