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
  _v0.s(["Calendar", 0, () => {
    let {
        emailState: _v0,
        dispatch: _v1,
        activeContentKey: _v2
      } = (0, _v17.useEmailCustomization)(),
      _v3 = (0, _v2.useRef)(null),
      [_v4, _v5] = (0, _v2.useState)(!1),
      {
        schedule: _v6
      } = (0, _v18.useEntityStore)(),
      {
        sentRegistrationEmailLayoutChangeEvent: _v7
      } = (0, _v19.useAnalytics)();
    (0, _v13.useOutsideClick)({
      ref: _v3,
      handler: () => _v5(!1)
    });
    let _v8 = () => {
      _v1({
        type: _v22.ACTION_TYPE.SET_CALENDER,
        payload: _v2
      }), _v0.showCalender[_v2] && _v7({
        actionName: _v20.BP_ACTION_NAMES.LINKS_DELETED,
        type: _v20.BP_TYPE[_v0.emailTemplateType]
      });
    };
    return _v6?.startTime ? (0, _v1.jsx)(_v3.Box, {
      onKeyDown: _v0 => {
        _v0.key === _v21.KEY_CODES.ESCAPE && (_v0.preventDefault(), _v0.stopPropagation());
      },
      children: _v0.showCalender[_v2] ? (0, _v1.jsx)(_v3.Box, {
        onClick: () => {
          _v5(!_v4);
        },
        children: (0, _v1.jsxs)(_v8.Popover, {
          placement: _v0.previewMode === _v21.EMAIL_PREVIEW_MODE.MOBILE ? "top" : "right",
          children: [(0, _v1.jsx)(_v10.PopoverTrigger, {
            children: (0, _v1.jsxs)(_v4.Center, {
              mb: "sm",
              border: `${(0, _v11.rem)(1)} solid`,
              borderColor: _v4 ? "blue.500" : "transparent",
              cursor: "pointer",
              _hover: {
                background: "blue.50",
                borderRadius: (0, _v11.rem)(4)
              },
              ref: _v3,
              children: [(0, _v1.jsx)(_v14.Calendar, {
                height: (0, _v11.rem)(20),
                width: (0, _v11.rem)(20)
              }), _v21.CALENDAR_LIST.map((_v0, _v1) => (0, _v1.jsx)(_v12.Text, {
                color: "blue.500",
                variant: "body-md",
                textDecoration: "underline",
                lineHeight: (0, _v11.rem)(24),
                pl: "sm",
                _before: 0 !== _v1 ? {
                  content: '"\\2022"',
                  color: "slate.800",
                  fontWeight: 700,
                  display: "inline-block",
                  paddingRight: (0, _v11.rem)(6)
                } : {},
                children: _v0
              }, _v0))]
            })
          }), (0, _v1.jsx)(_v9.PopoverContent, {
            minW: {
              base: "100%",
              lg: "max-content"
            },
            children: (0, _v1.jsx)(_v6.Flex, {
              p: "sm",
              cursor: "pointer",
              onClick: _v8,
              children: (0, _v1.jsx)(_v16.TrashBin, {
                height: (0, _v11.rem)(24),
                width: (0, _v11.rem)(24)
              })
            })
          })]
        })
      }) : (0, _v1.jsxs)(_v8.Popover, {
        placement: "top",
        strategy: "fixed",
        children: [(0, _v1.jsx)(_v10.PopoverTrigger, {
          children: (0, _v1.jsxs)(_v6.Flex, {
            height: (0, _v11.rem)(18),
            role: "group",
            position: "relative",
            mb: "sm",
            cursor: "pointer",
            alignItems: "center",
            children: [(0, _v1.jsx)(_v5.Divider, {
              width: "100%",
              border: `${(0, _v11.rem)(2)} solid`,
              borderColor: "blue.100",
              height: 0,
              _groupHover: {
                borderColor: "blue.500"
              }
            }), (0, _v1.jsx)(_v15.PlusCircle, {
              boxSize: (0, _v11.rem)(18),
              position: "absolute",
              transform: "translateX(-50%)",
              left: "50%",
              top: 0,
              background: "white",
              color: "blue.100",
              _groupHover: {
                color: "blue.500"
              }
            })]
          })
        }), (0, _v1.jsx)(_v9.PopoverContent, {
          transform: "translateY(-100px)",
          children: (0, _v1.jsxs)(_v6.Flex, {
            cursor: "pointer",
            alignItems: "center",
            p: "sm",
            onClick: _v8,
            children: [(0, _v1.jsx)(_v14.Calendar, {
              height: (0, _v11.rem)(24),
              width: (0, _v11.rem)(24)
            }), (0, _v1.jsx)(_v7.Header, {
              pl: (0, _v11.rem)(10),
              size: "xs",
              children: _v23.default.AddCalendar
            })]
          })
        })]
      })
    }) : null;
  }], 0);
  var _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = (_v0, _v1, _v2) => () => {
    _v2 && _v2 === _v1 || _v0({
      type: _v22.ACTION_TYPE.SET_EMAIL_TOOL_BAR,
      payload: _v1
    });
  };
  _v0.s(["ActionButton", 0, ({
    children: _v0,
    customBackground: _v1,
    previewMode: _v2
  }) => {
    let {
      dispatch: _v3
    } = (0, _v17.useEmailCustomization)();
    return (0, _v1.jsx)(_v6.Flex, {
      width: "100%",
      justifyContent: "center",
      p: "sm",
      mt: "xs",
      cursor: "pointer",
      borderRadius: "xs",
      _hover: {
        background: "blue.50"
      },
      onClick: _v27(_v3, _v21.EMAIL_TOOLBAR_TYPES.BUTTON),
      children: (0, _v1.jsx)(_v24.Button, {
        borderRadius: "input-xs",
        textDecoration: "none",
        height: (0, _v11.rem)(40),
        px: (0, _v11.rem)(21),
        boxSizing: "border-box",
        transition: "0.5s",
        minWidth: _v2 === _v21.EMAIL_PREVIEW_MODE.WEB ? (0, _v11.rem)(140) : (0, _v11.rem)(203),
        minHeight: _v2 === _v21.EMAIL_PREVIEW_MODE.WEB ? (0, _v11.rem)(30) : (0, _v11.rem)(42),
        background: _v1,
        _hover: {
          background: _v1
        },
        children: _v0
      })
    });
  }, "DescWrapper", 0, _v0 => (0, _v1.jsx)(_v3.Box, {
    textAlign: "left",
    mb: "2xl",
    lineHeight: (0, _v11.rem)(24),
    maxWidth: "100%",
    cursor: "pointer",
    _hover: {
      background: "blue.50",
      borderRadius: (0, _v11.rem)(4)
    },
    ..._v0,
    children: _v0.children
  }), "EditableTitle", 0, _v0 => (0, _v1.jsx)(_v3.Box, {
    transition: "0.5s",
    m: `${(0, _v11.rem)(10)} 0 ${(0, _v11.rem)(20)}`,
    cursor: "pointer",
    _hover: {
      background: "blue.50",
      borderRadius: (0, _v11.rem)(4)
    },
    ..._v0,
    children: _v0.children
  }), "EmailType", 0, _v0 => (0, _v1.jsx)(_v12.Text, {
    variant: "body-xl",
    fontSize: "body-sm",
    display: "inline-block",
    color: "slate.800",
    textAlign: "center",
    textTransform: "uppercase",
    ..._v0,
    children: _v0.children
  }), "EventDate", 0, () => {
    let {
        schedule: _v0
      } = (0, _v18.useEntityStore)(),
      _v1 = _v0?.startTime ? (0, _v26.fromISO)(_v0.startTime) : null,
      _v2 = _v0?.endTime ? (0, _v26.fromISO)(_v0.endTime) : null;
    if (!_v1) return null;
    let _v3 = !_v2 || _v0?.endTime && _v0?.startTime && !(0, _v26.isSameDate)(new Date(_v0.startTime), new Date(_v0.endTime));
    return (0, _v1.jsxs)(_v3.Box, {
      p: `${(0, _v11.rem)(8)} 0 ${(0, _v11.rem)(12)}`,
      textAlign: "center",
      children: [(0, _v1.jsx)(_v7.Header, {
        size: "sm",
        pb: (0, _v11.rem)(10),
        children: "Date"
      }), _v3 ? (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)("span", {
          children: (0, _v1.jsxs)(_v25.Paragraph, {
            size: "lg",
            children: [_v1.toFormat("cccc, LLLL d, yyyy"), " at ", _v1.toFormat("h:mm"), " ", _v1.toFormat("a").toLowerCase()]
          })
        }), _v2 && (0, _v1.jsx)("div", {
          children: "to"
        }), _v2 && (0, _v1.jsx)("span", {
          children: (0, _v1.jsxs)(_v25.Paragraph, {
            size: "lg",
            children: [_v2.toFormat("cccc, LLLL d, yyyy"), " at ", _v2.toFormat("h:mm"), " ", _v2.toFormat("a").toLowerCase()]
          })
        })]
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v25.Paragraph, {
          size: "lg",
          children: _v1.toFormat("cccc, LLLL d, yyyy")
        }), (0, _v1.jsxs)(_v25.Paragraph, {
          size: "lg",
          children: [(0, _v1.jsxs)("span", {
            children: [_v1.toFormat("h:mm"), " ", _v1.toFormat("a").toLowerCase()]
          }), (0, _v1.jsxs)("span", {
            children: [_v2 ? " - " : "", _v2 ? _v2.toFormat("h:mm") + " " + _v2.toFormat("a").toLowerCase() : ""]
          })]
        })]
      })]
    });
  }, "switchContext", 0, _v27], 0);
}