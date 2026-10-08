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
  }], 0);
  var _v33 = _v0.i(0);
  let _v34 = _v0 => (0, _v4.jsx)(_v33.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v4.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.918 3.49a1 1 0 0 1 .86-.49h12.444a1 1 0 0 1 .86.49l1.778 3A1 1 0 0 1 21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a1 1 0 0 1 .14-.51l1.778-3ZM6.348 5l-.593 1h12.49l-.593-1H6.348ZM19 8H5a124123.581 124123.581 0 0 0 0 9 2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Zm-7 1.5a1 1 0 0 1 1 1v3.586l1.379-1.379a1 1 0 0 1 1.414 1.415l-3.086 3.085a1 1 0 0 1-1.414 0l-3.086-3.085a1 1 0 0 1 1.415-1.415L11 14.086V10.5a1 1 0 0 1 1-1Z",
        fill: "currentColor"
      })
    }),
    _v35 = _v0 => (0, _v4.jsx)(_v33.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v4.jsx)("g", {
        fill: "currentColor",
        children: (0, _v4.jsx)("path", {
          d: "M19.589 20.707a1 1 0 0 0 1.414-1.414l-16-16a1 1 0 0 0-1.414 1.414l3.799 3.799-2.54.363C3.626 9.043 3.127 10.54 4 11.414L12.586 20c.874.874 2.37.375 2.545-.849l.363-2.539 4.095 4.095ZM16.562 12.852l-5.414-5.414 1.56-1.56A1 1 0 0 0 13 5.173v-.965c0-1.336 1.616-2.006 2.56-1.06l5.294 5.292c.945.945.275 2.561-1.061 2.561h-.965a1 1 0 0 0-.707.293l-1.559 1.56ZM7.207 18.207a1 1 0 1 0-1.414-1.414l-2.5 2.5a1 1 0 1 0 1.414 1.414l2.5-2.5Z"
        })
      })
    }),
    _v36 = _v0 => (0, _v4.jsx)(_v33.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v4.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M12.704 4.207c0-1.336 1.616-2.006 2.56-1.06l5.294 5.292c.945.945.275 2.561-1.061 2.561h-.965a1 1 0 0 0-.707.293l-1.942 1.943a1 1 0 0 0-.283.565l-.764 5.35c-.175 1.224-1.672 1.723-2.546.849l-8.586-8.586c-.874-.874-.375-2.37.849-2.545l5.35-.765a1 1 0 0 0 .565-.283l1.943-1.942a1 1 0 0 0 .293-.707v-.965Zm1.991 1.198a3 3 0 0 1-.87 1.888l-1.942 1.943a3 3 0 0 1-1.697.848l-4.36.623 7.171 7.172.623-4.36a3 3 0 0 1 .848-1.697l1.943-1.943a3 3 0 0 1 1.888-.87l-3.604-3.604ZM6.911 16.793a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414l2.5-2.5a1 1 0 0 1 1.414 0Z",
        fill: "currentColor"
      })
    }),
    _v37 = _v0 => (0, _v4.jsx)(_v33.Icon, {
      viewBox: "0 0 24 24",
      ..._v0,
      fill: "none",
      children: (0, _v4.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.918 3.49a1 1 0 0 1 .86-.49h12.444a1 1 0 0 1 .86.49l1.778 3A1 1 0 0 1 21 7v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a1 1 0 0 1 .14-.51l1.778-3ZM6.348 5l-.593 1h12.49l-.593-1H6.348ZM19 8H5a124123.581 124123.581 0 0 0 0 9 2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Zm-7 1.5a1 1 0 0 1 .707.293l3.086 3.085a1 1 0 0 1-1.415 1.415L13 12.914V16.5a1 1 0 0 1-2 0v-3.586l-1.378 1.379a1 1 0 1 1-1.415-1.415l3.086-3.085A1 1 0 0 1 12 9.5Z",
        fill: "currentColor"
      })
    });
  var _v38 = _v0.i(0);
  _v0.s(["QuestionItemActions", 0, function ({
    className: _v0,
    isPending: _v1,
    isArchived: _v2,
    isPinned: _v3,
    canPin: _v4 = !0,
    hasActiveMenu: _v5 = !1,
    onQuestionArchiveClicked: _v6,
    onQuestionUnArchiveClicked: _v7,
    onQuestionApproveClicked: _v8,
    onQuestionUnPinClicked: _v9,
    onQuestionPinClicked: _v10
  }) {
    let _v11 = (0, _v5.useMemo)(() => {
      if (_v1) return [{
        id: "archive",
        icon: (0, _v4.jsx)(_v34, {}),
        tooltipLabel: _v22.T_ARCHIVE,
        onClick: _v6
      }, {
        id: "approve",
        icon: (0, _v4.jsx)(_v38.CircleCheck, {}),
        tooltipLabel: _v22.T_APPROVE,
        onClick: _v8
      }];
      if (_v2) return [{
        id: "unarchive",
        icon: (0, _v4.jsx)(_v37, {}),
        tooltipLabel: _v22.T_UNARCHIVE,
        onClick: _v7
      }];
      let _v0 = _v4 ? [{
        id: _v3 ? "unpin" : "pin",
        icon: _v3 ? (0, _v4.jsx)(_v35, {}) : (0, _v4.jsx)(_v36, {}),
        tooltipLabel: _v3 ? _v22.T_UNPIN : _v22.T_PIN_TO_TOP,
        onClick: _v3 ? _v9 : _v10
      }] : [];
      return _v5 || _v0.push({
        id: "archive",
        icon: (0, _v4.jsx)(_v34, {}),
        tooltipLabel: _v22.T_ARCHIVE,
        onClick: _v6
      }), _v0;
    }, [_v4, _v5, _v2, _v1, _v3, _v8, _v6, _v10, _v7, _v9]);
    return (0, _v4.jsx)(_v4.Fragment, {
      children: _v11.map(({
        id: _v0,
        icon: _v1,
        tooltipLabel: _v2,
        onClick: _v3
      }) => (0, _v4.jsx)(_v18.BokehTooltip, {
        placement: "top",
        modifiers: [{
          name: "flip",
          enabled: !0,
          options: {
            fallbackPlacements: ["top-end"]
          }
        }],
        label: _v2,
        children: (0, _v4.jsx)(_v32.BokehIconButton, {
          className: (0, _v17.createDomName)(_v0, _v0),
          size: "xs",
          icon: _v1,
          padding: "0!important",
          width: (0, _v7.rem)(24),
          variant: "secondary",
          onClick: _v3
        })
      }, _v0))
    });
  }], 0);
  var _v39 = _v0.i(0);
  function _v40() {
    return (_v40 = Object.assign.bind()).apply(null, arguments);
  }
  _v0.s(["QuestionItemVotesCount", 0, function ({
    id: _v0 = (0, _v17.createDomName)("question-item-votes-count"),
    className: _v1 = (0, _v17.createDomName)("question-item-votes-count"),
    votesCount: _v2
  }) {
    return (0, _v4.jsxs)(_v9.Flex, {
      id: _v0,
      className: _v1,
      cursor: "default",
      alignItems: "center",
      justifyContent: "space-between",
      gap: (0, _v7.rem)(4),
      children: [(0, _v4.jsx)(_v39.ThumbUpFilled, {
        boxSize: (0, _v7.rem)(16)
      }), (0, _v4.jsx)(_v10.Text, {
        variant: "heading-xs",
        children: _v2
      })]
    });
  }], 0), _v0.s(["default", 0, function (_v0) {
    return _v5.createElement("svg", _v40({
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
}