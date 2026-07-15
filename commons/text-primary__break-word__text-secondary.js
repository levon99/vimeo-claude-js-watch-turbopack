{
  "use strict";

  var _v1,
    _v2,
    _v3,
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  function _v13() {
    return {
      flexShrink: 0,
      height: (0, _v7.rem)(32),
      width: (0, _v7.rem)(32),
      margin: 0
    };
  }
  function _v14() {
    return {
      color: "text-primary",
      margin: 0,
      wordWrap: "break-word",
      maxWidth: "100%",
      lineHeight: (0, _v7.rem)(20)
    };
  }
  let _v15 = {
    color: "text-secondary",
    margin: 0,
    flexShrink: 0,
    lineHeight: (0, _v7.rem)(16)
  };
  function _v16() {
    return {
      flexDirection: "row",
      alignItems: "baseline",
      flexWrap: "wrap",
      width: "100%",
      minWidth: 0,
      columnGap: (0, _v7.rem)(8),
      paddingRight: (0, _v7.rem)(48)
    };
  }
  (0, _v7.rem)(8), _v0.s(["TIME_ASKED_STYLE", 0, _v15, "createAvatarWrapperStyle", 0, _v13, "createQuestionInfoStyle", 0, _v16, "createQuestionItemWrapperStyle", 0, function ({
    themeName: _v0,
    isPinned: _v1,
    isHovered: _v2
  }) {
    return {
      borderRadius: "md",
      border: `${(0, _v7.rem)(1)} solid`,
      animation: `${_v12.OPACITY_FROM_HIDDEN_TO_VISIBLE_KEYFRAMES} 750ms`,
      flexDirection: "row",
      alignItems: "flex-start",
      gap: (0, _v7.rem)(8),
      padding: (0, _v7.rem)(8),
      maxWidth: "100%",
      overflow: "visible",
      transition: "border-width 0.1s ease-in-out",
      position: "relative",
      ...(_v1 ? {
        borderWidth: (0, _v7.rem)(2),
        ...("dark" === _v0 ? {
          backgroundColor: "grayscale.900",
          borderColor: "slate.100"
        } : {
          backgroundColor: "grayscale.50",
          borderColor: "grayscale.680"
        })
      } : {
        borderWidth: (0, _v7.rem)(1),
        borderColor: "dark" === _v0 ? "transparent" : "stroke"
      }),
      ...(_v2 ? {
        backgroundColor: "fill-component-hover"
      } : {})
    };
  }, "createQuestionTextStyle", 0, _v14], 0);
  var _v17 = _v0.i(0),
    _v18 = _v0.i(0);
  function _v19({
    className: _v0 = (0, _v17.createDomName)("question-author-name"),
    name: _v1
  }) {
    return (0, _v4.jsx)(_v18.BokehTooltip, {
      placement: "bottom",
      label: _v1,
      shouldWrapChildren: !1,
      children: (0, _v4.jsx)(_v10.Text, {
        className: _v0,
        variant: "heading-xs",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        maxWidth: "100%",
        children: _v1
      })
    });
  }
  _v0.s(["QuestionItemAuthor", 0, _v19], 0);
  var _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0);
  function _v24(_v0) {
    let _v1 = new Date();
    return _v1.getTime() - _v0 < _v21.interactionToolsConfig.QNA.JUST_NOW_THRESHOLD ? _v22.T_JUST_NOW : (0, _v20.timeBetween)(new Date(_v0), _v1);
  }
  function _v25(_v0) {
    let [_v1, _v2] = (0, _v5.useState)(() => _v24(_v0));
    return (0, _v5.useEffect)(() => {
      _v2(_v24(_v0));
      let _v0 = (0, _v23.registerInterval)(() => _v2(_v24(_v0)), _v21.interactionToolsConfig.QNA.QNA_POSTED_AT_REFRESH_PERIOD, "questionItem");
      return () => (0, _v23.unRegisterInterval)(_v0);
    }, [_v0]), _v1;
  }
  _v0.s(["useQuestionTimeAsked", 0, _v25], 0);
  var _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v26;
  let _v31 = (0, _v5.memo)(({
    id: _v0,
    className: _v1,
    size: _v2 = "md",
    src: _v3,
    fallback: _v4 = _v30.vimeoConfig.USER.DEFAULT_LOGO_URL(75),
    name: _v5
  }) => {
    let _v6 = (0, _v5.useMemo)(() => {
      let _v0 = _v29.environmentConfig.IS_DEV ? _v30.vimeoConfig.CDN.DEV : _v30.vimeoConfig.CDN.PROD;
      return String(_v3).startsWith(_v0) ? _v3 : _v4;
    }, [_v3, _v4]);
    return (0, _v4.jsx)(_v28.Avatar, {
      id: _v0,
      className: _v1,
      size: _v2,
      src: _v6,
      alt: "avatar",
      nameProps: {
        name: _v5 ?? ""
      }
    });
  });
  _v0.s(["CdnAvatar", 0, _v31], 0);
  var _v32 = _v0.i(0);
  function _v33() {
    return (_v33 = Object.assign.bind()).apply(null, arguments);
  }
  _v0.s(["NewQuestionItemReply", 0, function ({
    className: _v0 = (0, _v17.createDomName)("question-item-reply"),
    reply: _v1,
    isManagementAccessed: _v2 = !1,
    onDelete: _v3
  }) {
    let [_v4, _v5] = (0, _v5.useState)(!1),
      {
        user: _v6,
        createdAt: _v7,
        text: _v8
      } = _v1,
      _v9 = _v6 && _v6.avatarUrl ? _v6.avatarUrl : _v26.vimeoConfig.USER.DEFAULT_LOGO_URL(75),
      _v10 = _v25(_v7),
      _v11 = _v6 && _v6.displayName ? _v6.displayName : _v22.T_ANONYMOUS,
      _v12 = (0, _v8.useColorModeValue)("slate.100", "grayscale.700"),
      _v13 = (0, _v5.useMemo)(() => _v2 ? {
        borderRadius: "sm",
        borderColor: "transparent",
        background: _v12
      } : {}, [_v2, _v12]),
      _v14 = (0, _v5.useCallback)(() => {
        _v2 && _v5(!0);
      }, [_v2]),
      _v15 = (0, _v5.useCallback)(() => {
        _v2 && _v5(!1);
      }, [_v2]),
      _v16 = (0, _v5.useCallback)(_v0 => {
        if (_v0.stopPropagation(), _v3) return _v3(_v1.id);
      }, [_v3, _v1]);
    return (0, _v4.jsxs)(_v6.Box, {
      className: _v0,
      position: "relative",
      padding: (0, _v7.rem)(8),
      borderLeft: `solid ${(0, _v7.rem)(1)}`,
      borderColor: "stroke",
      width: "100%",
      sx: _v4 ? _v13 : {},
      onMouseEnter: _v14,
      onMouseLeave: _v15,
      children: [_v3 && _v4 ? (0, _v4.jsx)(_v9.Flex, {
        position: "absolute",
        right: (0, _v7.rem)(8),
        top: (0, _v7.rem)(8),
        zIndex: 1,
        onMouseDown: _v27.stopEventPropagation,
        onTouchStart: _v27.stopEventPropagation,
        children: (0, _v4.jsx)(_v18.BokehTooltip, {
          placement: "top",
          label: _v22.T_DELETE,
          children: (0, _v4.jsx)(_v32.BokehIconButton, {
            className: (0, _v17.createDomName)(_v0, "delete"),
            size: "xs",
            icon: (0, _v4.jsx)(_v11.TrashBin, {}),
            width: (0, _v7.rem)(24),
            onClick: _v16
          })
        })
      }) : null, (0, _v4.jsxs)(_v9.Flex, {
        position: "relative",
        width: "100%",
        minWidth: 0,
        flexDirection: "row",
        alignItems: "flex-start",
        gap: (0, _v7.rem)(8),
        marginBottom: 0,
        children: [(0, _v4.jsx)(_v6.Box, {
          sx: _v13(),
          children: (0, _v4.jsx)(_v31, {
            className: (0, _v17.createDomName)(_v0, "author-avatar"),
            size: "sm",
            src: _v9,
            name: _v11
          })
        }), (0, _v4.jsxs)(_v9.Flex, {
          flexDirection: "column",
          alignItems: "flex-start",
          width: "100%",
          gap: (0, _v7.rem)(8),
          overflow: "hidden",
          children: [(0, _v4.jsxs)(_v9.Flex, {
            sx: {
              ..._v16(),
              paddingRight: (0, _v7.rem)(24)
            },
            children: [(0, _v4.jsx)(_v19, {
              className: (0, _v17.createDomName)(_v0, "author-name"),
              name: _v11
            }), (0, _v4.jsx)(_v10.Text, {
              className: (0, _v17.createDomName)(_v0, "time"),
              variant: "body-sm",
              sx: _v15,
              children: _v10
            })]
          }), (0, _v4.jsx)(_v10.Text, {
            className: (0, _v17.createDomName)(_v0, "text"),
            variant: "body-md",
            sx: _v14(),
            children: _v8
          })]
        })]
      })]
    });
  }], 0), _v0.s(["default", 0, function (_v0) {
    return _v5.createElement("svg", _v33({
      viewBox: "0 0 41 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, _v0), _v1 || (_v1 = _v5.createElement("circle", {
      cx: 20.058,
      cy: 20.46,
      r: 20,
      fill: "#7C7C7C"
    })), _v2 || (_v2 = _v5.createElement("circle", {
      cx: 20.058,
      cy: 14.623,
      r: 6,
      fill: "#C1C1C1"
    })), _v3 || (_v3 = _v5.createElement("path", {
      d: "M29.058 27.758c0 4.03-1.5 3.82-9 3.82-7.501 0-9 .21-9-3.82s4.029-7.298 9-7.298c4.97 0 9 3.267 9 7.298z",
      fill: "#C1C1C1"
    })));
  }], 0);
  var _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  function _v40({
    id: _v0 = (0, _v17.createDomName)("question-list-notification"),
    className: _v1 = (0, _v17.createDomName)("question-list-notification"),
    content: _v2,
    placement: _v3,
    icon: _v4,
    onDismiss: _v5,
    onClick: _v6
  }) {
    let _v7 = (0, _v5.useCallback)(_v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v5 && _v5();
      }, [_v5]),
      _v8 = (0, _v5.useCallback)(_v0 => {
        _v0.stopPropagation(), _v0.preventDefault(), _v6 && _v6();
      }, [_v6]),
      _v9 = (0, _v5.useMemo)(() => _v4 ? {
        leftIcon: _v4
      } : _v5 ? {
        rightIcon: (0, _v4.jsx)(_v39.CloseX, {
          onClick: _v7
        })
      } : {}, [_v4, _v5, _v7]);
    return (0, _v4.jsx)(_v6.Box, {
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
      children: (0, _v4.jsx)(_v37.Button, {
        id: (0, _v17.createDomName)(_v1, "button"),
        className: (0, _v17.createDomName)(_v1, "button"),
        variant: "primary",
        size: "xs",
        ..._v9,
        padding: `0 ${(0, _v7.rem)(8)}`,
        onClick: _v8,
        children: (0, _v4.jsx)(_v38.Paragraph, {
          id: (0, _v17.createDomName)(_v1, "text"),
          className: (0, _v17.createDomName)(_v1, "text"),
          size: "md",
          as: "h2",
          children: _v2
        })
      })
    });
  }
  var _v41 = _v0.i(0),
    _v42 = _v0.i(0),
    _v43 = _v0.i(0),
    _v44 = _v0.i(0),
    _v45 = _v0.i(0),
    _v46 = _v0.i(0);
  function _v47({
    id: _v0 = (0, _v17.createDomName)("questions-list-sorting"),
    className: _v1 = (0, _v17.createDomName)("questions-list-sorting"),
    tabId: _v2,
    sorting: _v3,
    changeSorting: _v4
  }) {
    let {
        isOpen: _v5,
        onClose: _v6,
        onToggle: _v7
      } = (0, _v42.useDisclosure)(),
      _v8 = {
        [_v45.EQuestionSortType.NEWEST]: _v22.T_NEWEST,
        [_v45.EQuestionSortType.OLDEST]: _v22.T_OLDEST,
        [_v45.EQuestionSortType.MOST_POPULAR]: _v22.T_MOST_POPULAR
      }[_v3.type],
      _v9 = (0, _v5.useMemo)(() => {
        let _v0 = [{
          type: _v45.EQuestionSortType.NEWEST,
          order: _v45.ESortOrder.DESCENDING,
          copy: _v22.T_NEWEST,
          field: _v2 === _v45.EQnaTab.ARCHIVED ? _v45.EQuestionsSortBy.ARCHIVED_TIME : _v45.EQuestionsSortBy.TIMESTAMP
        }, {
          type: _v45.EQuestionSortType.OLDEST,
          order: _v45.ESortOrder.ASCENDING,
          copy: _v22.T_OLDEST,
          field: _v2 === _v45.EQnaTab.ARCHIVED ? _v45.EQuestionsSortBy.ARCHIVED_TIME : _v45.EQuestionsSortBy.TIMESTAMP
        }];
        return _v2 !== _v45.EQnaTab.PENDING && _v0.push({
          type: _v45.EQuestionSortType.MOST_POPULAR,
          order: _v45.ESortOrder.DESCENDING,
          copy: _v22.T_MOST_POPULAR,
          field: _v45.EQuestionsSortBy.VOTES
        }), _v0;
      }, [_v2]),
      _v10 = (0, _v4.jsx)(_v6.Box, {
        id: (0, _v17.createDomName)(_v0, "list"),
        minWidth: (0, _v7.rem)(160),
        children: (0, _v4.jsx)(_v41.PopoverBody, {
          children: _v9.map(({
            copy: _v0,
            field: _v1,
            type: _v2,
            order: _v3
          }) => (0, _v4.jsx)(_v9.Flex, {
            className: (0, _v17.createDomName)(_v0, "list-item"),
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
                case _v45.EQuestionSortType.MOST_POPULAR:
                  (0, _v44.trackSortByMostPopular)();
                  break;
                case _v45.EQuestionSortType.NEWEST:
                  (0, _v44.trackSortByMostRecent)();
              }
            },
            children: _v0
          }, _v2))
        })
      });
    return (0, _v4.jsx)(_v9.Flex, {
      id: _v0,
      className: _v1,
      alignItems: "center",
      justifyContent: "flex-end",
      gap: (0, _v7.rem)(8),
      children: (0, _v4.jsx)(_v46.BokehPopover, {
        isOpen: _v5,
        inPortal: !0,
        placement: "bottom-end",
        gutter: 8,
        triggerContent: (0, _v4.jsx)(_v37.Button, {
          id: (0, _v17.createDomName)(_v0, "button"),
          className: (0, _v17.createDomName)(_v1, "button"),
          size: "xs",
          variant: "tertiary",
          rightIcon: (0, _v4.jsx)(_v43.ChevronDown, {}),
          onClick: _v7,
          children: _v8
        }),
        content: _v10,
        onClose: _v6
      })
    });
  }
  var _v48 = _v0.i(0),
    _v49 = _v0.i(0),
    _v50 = _v0.i(0),
    _v51 = _v0.i(0),
    _v52 = _v0.i(0),
    _v53 = _v0.i(0),
    _v54 = _v0.i(0),
    _v55 = _v17,
    _v56 = _v0.i(0),
    _v57 = _v0.i(0);
  let _v58 = (0, _v5.forwardRef)(({
    id: _v0 = (0, _v55.createDomName)("questions-list"),
    className: _v1 = (0, _v55.createDomName)("questions-list"),
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
    let _v12 = (0, _v5.useRef)(null),
      [_v13, _v14, _v15] = function (_v0) {
        let [_v1, _v2] = (0, _v5.useState)(() => ({
            [_v45.EQnaTab.ACTIVE]: {
              type: _v45.EQuestionSortType.NEWEST,
              order: _v45.ESortOrder.DESCENDING,
              field: _v45.EQuestionsSortBy.TIMESTAMP
            },
            [_v45.EQnaTab.APPROVED]: {
              type: _v45.EQuestionSortType.NEWEST,
              order: _v45.ESortOrder.DESCENDING,
              field: _v45.EQuestionsSortBy.TIMESTAMP
            },
            [_v45.EQnaTab.PENDING]: {
              type: _v45.EQuestionSortType.NEWEST,
              order: _v45.ESortOrder.DESCENDING,
              field: _v45.EQuestionsSortBy.TIMESTAMP
            },
            [_v45.EQnaTab.ARCHIVED]: {
              type: _v45.EQuestionSortType.NEWEST,
              order: _v45.ESortOrder.DESCENDING,
              field: _v45.EQuestionsSortBy.ARCHIVED_TIME
            }
          })),
          _v3 = (0, _v5.useMemo)(() => _v1[_v0], [_v1, _v0]),
          _v4 = (0, _v5.useCallback)(_v0 => {
            _v2({
              ..._v1,
              ..._v0
            });
          }, [_v1]),
          _v5 = (0, _v5.useCallback)((_v0, _v1) => {
            let {
              field: _v2,
              order: _v3
            } = _v3;
            if (_v0.hasOwnProperty(_v2) && _v1.hasOwnProperty(_v2)) {
              let _v0 = _v0[_v2] - _v1[_v2];
              return _v3 === _v45.ESortOrder.ASCENDING ? _v0 : -_v0;
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
        let _v4 = (0, _v48.useScope)(),
          _v5 = (0, _v5.useRef)((0, _v53.getAbsoluteNow)()),
          [_v6, _v7] = (0, _v5.useState)(!1),
          [_v8, _v9] = (0, _v5.useState)(!1),
          [_v10, _v11] = (0, _v5.useState)(null),
          _v12 = !!(_v8 && _v10),
          _v13 = !_v12 && _v6 && (_v2.type === _v45.EQuestionSortType.NEWEST || _v2.type === _v45.EQuestionSortType.OLDEST),
          _v14 = _v2.type === _v45.EQuestionSortType.OLDEST ? "bottom" : "top",
          _v15 = (0, _v5.useCallback)(() => {
            let _v0 = _v0.current;
            if (!_v0 || !_v0.children.length) return !0;
            let _v1 = _v0.parentElement,
              _v2 = _v2.type === _v45.EQuestionSortType.OLDEST ? _v0.children[_v0.childElementCount - 1] : _v0.children[0],
              _v3 = _v2.clientHeight,
              _v4 = _v1.scrollTop,
              _v5 = _v4 + _v1.clientHeight,
              _v6 = _v2.offsetTop;
            return _v6 + _v2.clientHeight - _v5 < _v3 && _v4 - _v6 < _v3;
          }, [_v0, _v2.type]),
          _v16 = (0, _v5.useCallback)(() => {
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
            return [_v9, (0, _v52.inline)(() => _v9 ? null : _v7 ? "bottom" : _v8 ? "top" : null)];
          }, [_v0, _v3]),
          _v17 = (0, _v5.useCallback)(() => {
            _v5.current = (0, _v53.getAbsoluteNow)(), _v7(!1);
          }, []),
          _v18 = (0, _v5.useCallback)(() => {
            _v5.current = (0, _v53.getAbsoluteNow)(), _v7(!1);
            let _v0 = _v0.current?.parentElement;
            _v0 && _v0.scrollTo({
              top: _v2.type === _v45.EQuestionSortType.OLDEST ? _v0.scrollHeight : 0,
              behavior: "smooth"
            });
          }, [_v0, _v2.type]),
          _v19 = (0, _v5.useCallback)(() => {
            let _v0 = _v0.current?.parentElement,
              [, _v1] = _v16();
            _v0 && _v3 && (0, _v51.scrollElementIntoView)(_v3.parentElement, {
              behavior: "smooth",
              block: "top" === _v1 ? "start" : "bottom" === _v1 ? "end" : "center"
            });
          }, [_v16, _v0, _v3]),
          _v20 = (0, _v5.useMemo)(() => (0, _v49.default)(() => {
            _v15() && (_v5.current = (0, _v53.getAbsoluteNow)(), _v7(!1));
            let [_v0, _v1] = _v16();
            _v9(!_v0), _v11(_v1);
          }, 100), [_v15, _v16]);
        return (0, _v5.useLayoutEffect)(() => {
          if (_v15()) _v5.current = (0, _v53.getAbsoluteNow)(), _v7(!1);else {
            let _v0 = _v4.queryDataSync({
              type: _v50.ELiveInteractionQuery.LIVE_INTERACTION_USER
            })?.data?.id;
            _v7(_v1.some(_v0 => null != _v5.current && _v0.createdAt > _v5.current && (!_v0 || _v0.user?.id !== _v0)));
          }
        }, [_v4, _v15, _v0, _v1, _v2.type]), (0, _v5.useLayoutEffect)(() => {
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
    (0, _v5.useEffect)(() => {
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
      } = (0, _v5.useMemo)(() => {
        let _v0 = _v4.sort(_v15);
        return _v5 ? {
          pinnedQuestion: _v0.find(_v0 => _v0.id === _v5),
          sortedQuestions: _v0.filter(_v0 => _v0.id !== _v5)
        } : {
          pinnedQuestion: null,
          sortedQuestions: _v0
        };
      }, [_v5, _v4, _v15]),
      _v26 = (0, _v54.useScrollbarStyles)({
        scrollbarColor: _v10
      });
    return _v4.length ? (0, _v4.jsxs)(_v4.Fragment, {
      children: [(0, _v4.jsx)(_v47, {
        tabId: _v2,
        sorting: _v13,
        changeSorting: _v14
      }), (0, _v4.jsx)(_v6.Box, {
        ref: _v11,
        id: (0, _v55.createDomName)(_v0, "scroll"),
        className: (0, _v55.createDomName)(_v0, "scroll"),
        sx: {
          ...(0, _v57.createTabListScrollStyle)({
            fullWidth: _v6
          }),
          ..._v26,
          scrollPaddingBottom: (0, _v7.rem)(16)
        },
        onScroll: _v20,
        children: (0, _v4.jsxs)(_v6.Box, {
          ref: _v12,
          id: (0, _v55.createDomName)(_v0, "columns"),
          className: (0, _v55.createDomName)(_v1, "columns"),
          sx: (0, _v57.createTabListColumnStyle)(),
          children: [_v24 ? _v8(_v24) : null, _v25.map(_v0 => _v8(_v0))]
        })
      }), _v16 ? (0, _v4.jsx)(_v40, {
        id: (0, _v55.createDomName)(_v0, "new-questions-notification"),
        className: (0, _v55.createDomName)(_v1, "new-questions-notification"),
        placement: _v19,
        content: _v22.T_UNREAD_QUESTIONS,
        onDismiss: _v23,
        onClick: _v21
      }) : null, _v17 ? (0, _v4.jsx)(_v40, {
        id: (0, _v55.createDomName)(_v0, "scrolled-away-notification"),
        className: (0, _v55.createDomName)(_v1, "scrolled-away-notification"),
        placement: _v18,
        content: _v22.T_SELECTED,
        onClick: _v22,
        icon: "top" === _v18 ? (0, _v4.jsx)(_v35.ArrowUp, {}) : (0, _v4.jsx)(_v34.ArrowDown, {})
      }) : null]
    }) : _v9 || (0, _v4.jsx)(_v56.EmptyStatePlaceholder, {
      id: (0, _v55.createDomName)(_v0, "placeholder"),
      className: (0, _v55.createDomName)(_v1, "placeholder"),
      isWithPadding: !0,
      icon: (0, _v4.jsx)(_v36.ReviewQuestion, {
        boxSize: "lg"
      }),
      description: _v22.T_NO_QUESTIONS_YET,
      control: null
    });
  });
  _v0.s(["QuestionsList", 0, _v58], 0);
  var _v59 = _v0.i(0),
    _v60 = _v0.i(0);
  _v0.s(["useQnaPanels", 0, function () {
    let [_v0, _v1] = (0, _v5.useState)(_v45.EQnaTab.PENDING),
      {
        activeSessionPendingQuestions: _v2,
        activeSessionQuestions: _v3,
        isEventModerated: _v4,
        config: {
          canUseQnaModeration: _v5,
          canViewQnaModeration: _v6
        }
      } = (0, _v48.useManager)(_v59.QnAManager),
      _v7 = !!(_v4 && (_v5 || _v6));
    (0, _v5.useEffect)(() => {
      _v1(_v7 ? _v45.EQnaTab.PENDING : _v45.EQnaTab.ACTIVE);
    }, [_v7]);
    let {
        activeQuestions: _v8,
        pendingQuestions: _v9,
        archivedQuestions: _v10
      } = (0, _v60.useQnaQuestions)(_v2, _v3),
      _v11 = (0, _v5.useMemo)(() => {
        let _v0 = (0, _v4.jsxs)(_v9.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v4.jsx)(_v6.Box, {
              children: _v22.T_REVIEW
            }), (0, _v4.jsx)(_v6.Box, {
              color: "text-secondary",
              children: _v9.length || null
            })]
          }),
          _v1 = (0, _v4.jsxs)(_v9.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v4.jsx)(_v6.Box, {
              children: _v22.T_APPROVED
            }), (0, _v4.jsx)(_v6.Box, {
              color: "text-secondary",
              children: _v8.length || null
            })]
          }),
          _v2 = (0, _v4.jsxs)(_v9.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v4.jsx)(_v6.Box, {
              children: _v22.T_ACTIVE
            }), (0, _v4.jsx)(_v6.Box, {
              color: "text-secondary",
              children: _v8.length || null
            })]
          }),
          _v3 = (0, _v4.jsxs)(_v9.Flex, {
            gap: (0, _v7.rem)(4),
            children: [(0, _v4.jsx)(_v6.Box, {
              children: _v22.T_ARCHIVED
            }), (0, _v4.jsx)(_v6.Box, {
              color: "text-secondary",
              children: _v10.length || null
            })]
          });
        return _v7 ? [{
          id: _v45.EQnaTab.PENDING,
          label: _v0,
          questions: _v9
        }, {
          id: _v45.EQnaTab.APPROVED,
          label: _v1,
          questions: _v8
        }, {
          id: _v45.EQnaTab.ARCHIVED,
          label: _v3,
          questions: _v10
        }] : [{
          id: _v45.EQnaTab.ACTIVE,
          label: _v2,
          questions: _v8
        }, {
          id: _v45.EQnaTab.ARCHIVED,
          label: _v3,
          questions: _v10
        }];
      }, [_v9, _v8, _v10, _v7]),
      _v12 = (0, _v52.inline)(() => {
        switch (_v0) {
          case _v45.EQnaTab.PENDING:
            return _v9;
          case _v45.EQnaTab.ARCHIVED:
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