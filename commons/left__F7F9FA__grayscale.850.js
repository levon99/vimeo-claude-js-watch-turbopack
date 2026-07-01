{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = 256,
    _v10 = 600,
    _v11 = ({
      active: _v0,
      attach: _v1 = "left",
      children: _v2,
      dragConstraint: _v3 = {
        min: _v9,
        max: _v10
      },
      isFixed: _v4 = !1,
      onDragStart: _v5,
      onDragEnd: _v6,
      onResize: _v7,
      role: _v8
    }) => {
      let [_v9, _v10] = (0, _v2.useState)(null),
        [_v11, _v12] = (0, _v2.useState)(_v3.min),
        [_v13, _v14] = (0, _v2.useState)(!1),
        _v15 = (0, _v4.useColorModeValue)("#F7F9FA", "grayscale.850"),
        _v16 = (0, _v6.useIsBokeh)(),
        _v17 = (0, _v2.useCallback)(_v0 => {
          null !== _v0 && _v10(_v0.getBoundingClientRect());
        }, []),
        _v18 = (0, _v2.useCallback)(_v0 => {
          if (!_v9) return;
          let {
              offsetWidth: _v1,
              offsetLeft: _v2
            } = document.body,
            _v3 = _v3.min;
          "right" === _v1 && (_v3 = _v1 - _v0.clientX), "left" === _v1 && (_v3 = _v0.clientX - _v2), _v12(_v3 = (0, _v7.clamp)(_v3, _v3));
          let _v4 = {
            ..._v3,
            current: _v3
          };
          _v7?.(_v0, _v4);
        }, [_v9]),
        _v19 = (0, _v8.useThrottledCallback)(_v0 => {
          _v13 && (_v0.preventDefault(), _v18(_v0));
        }, [_v18, _v13], 16),
        _v20 = _v0 => {
          _v14(!1), _v6?.(_v0);
        };
      (0, _v2.useLayoutEffect)(() => (document.addEventListener("mouseup", _v20, !0), document.addEventListener("mousemove", _v19, !0), () => {
        document.removeEventListener("mouseup", _v20, !0), document.removeEventListener("mousemove", _v19, !0);
      }), [_v13, _v19]);
      let _v21 = "left" === _v1 ? -1 : 1,
        _v22 = `translateX(${100 * _v21}%)`,
        _v23 = Math.round(_v11 / 6 + 90),
        _v24 = {
          transform: _v0 ? "translateX(0)" : _v22,
          transition: _v13 ? "none" : `transform ${_v23}ms ease-in-out`,
          width: `${_v11}px`
        };
      return _v0 ? (0, _v1.jsxs)(_v3.Box, {
        as: "nav",
        ref: _v17,
        style: {
          [_v1]: 0,
          ..._v24
        },
        display: "flex",
        flexDirection: "column",
        position: {
          base: "fixed",
          lg: "relative"
        },
        height: "100dvh",
        minWidth: {
          base: "100%",
          md: "0%"
        },
        backgroundColor: _v16 && _v13 ? "fill-surface" : _v16 ? "background" : _v15,
        borderRight: _v16 ? "" : "left" === _v1 ? "1px solid" : "",
        borderLeft: _v16 ? "" : "right" === _v1 ? "1px solid" : "",
        borderColor: _v16 ? "transparent" : "stroke",
        color: "text-primary",
        role: _v8,
        zIndex: 0,
        children: [_v2, !_v4 && (0, _v1.jsx)(_v3.Box, {
          onMouseDown: _v0 => {
            _v0.preventDefault(), _v14(!0), _v5?.(_v0);
          },
          style: {
            [_v1]: "calc(100%)"
          },
          "aria-label": "Drag edge to resize",
          top: 0,
          width: "1rem",
          height: "100%",
          position: "absolute",
          cursor: "col-resize",
          _before: {
            content: '""',
            position: "absolute",
            [_v1]: 0,
            top: 0,
            height: "100%",
            width: "0.2rem",
            transition: "background 180ms ease-in-out 0ms"
          },
          _hover: {
            _before: {
              background: "blue.500",
              transition: "background 180ms ease-in-out 180ms"
            }
          }
        })]
      }) : (0, _v1.jsx)(_v1.Fragment, {});
    };
  _v11.Header = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Box, {
    padding: "0",
    marginBottom: (0, _v5.rem)(24),
    children: _v0
  }), _v11.Body = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Box, {
    display: "flex",
    flexDirection: "column",
    overflowY: "auto",
    px: "16px",
    flexGrow: 1,
    children: _v0
  }), _v11.Section = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Box, {
    display: "flex",
    flexDirection: "column",
    py: "8",
    children: _v0
  }), _v11.MenuItems = ({
    children: _v0,
    customStyles: _v1
  }) => (0, _v1.jsx)(_v3.Box, {
    as: "menu",
    listStyleType: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "2",
    ..._v1,
    children: _v0
  }), _v11.Footer = ({
    children: _v0
  }) => (0, _v1.jsx)(_v3.Box, {
    bottom: "0",
    width: "100%",
    children: _v0
  }), _v11.Divider = _v0 => (0, _v1.jsx)(_v3.Box, {
    as: "hr",
    margin: "0",
    border: "0",
    padding: "0",
    borderTop: "1px solid",
    borderColor: "darkBlueAlpha.200",
    _dark: {
      borderColor: "stroke"
    },
    ..._v0
  }), _v0.s(["ResizableSideNav", 0, _v11], 0);
  var _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0);
  _v0.s(["MenuItem", 0, ({
    action: _v0,
    active: _v1,
    dataId: _v2,
    hoverColor: _v3,
    href: _v4,
    icon: _v5,
    indentation: _v6 = 0,
    isEditing: _v7 = !1,
    label: _v8,
    menuItemColor: _v9 = "text-primary",
    onClick: _v10,
    prefetch: _v11,
    showActionOnHover: _v12 = !1,
    dropRef: _v13,
    fontWeight: _v14 = 400,
    fontFamily: _v15,
    iconSize: _v16 = "1.125rem",
    iconMarginRight: _v17 = "0.5rem",
    className: _v18,
    hoverBackgroundColor: _v19,
    height: _v20
  }) => {
    let _v21 = (0, _v15.useWindowSize)().width <= _v16.BreakPoints.sm,
      _v22 = (0, _v4.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      _v23 = !!_v4 && !_v7;
    return (0, _v1.jsxs)(_v3.Box, {
      className: _v18,
      as: _v23 ? _v12.default : "span",
      ...(_v23 ? {
        href: _v4,
        prefetch: _v11
      } : {}),
      role: _v23 ? void 0 : "button",
      onClick: _v0 => {
        _v7 || _v10?.(_v0);
      },
      tabIndex: _v23 ? void 0 : 0,
      "data-id": _v2,
      display: "flex",
      alignItems: "center",
      height: (0, _v5.rem)(_v20 || 40),
      borderRadius: "0.5rem",
      color: _v9,
      paddingTop: (0, _v5.rem)(4),
      paddingBottom: (0, _v5.rem)(4),
      paddingLeft: _v6 > 0 ? `${28 + _v6}px` : (0, _v5.rem)(10),
      paddingRight: _v0 ? (0, _v5.rem)(5) : (0, _v5.rem)(10),
      bg: _v1 ? _v22 : "transparent",
      textDecoration: _v23 ? "none" : void 0,
      cursor: "pointer",
      border: "2px solid",
      borderColor: "transparent",
      sx: {
        "--action-container-display": _v12 && !_v21 ? "none" : "flex",
        '&:has([aria-expanded="true"])': {
          "--action-container-display": "flex"
        },
        "> svg": {
          width: _v16,
          minWidth: _v16,
          minHeight: _v16,
          marginRight: _v17
        }
      },
      _hover: {
        background: _v19 ?? _v22,
        "--action-container-display": "flex",
        "> svg": {
          color: _v3
        },
        textColor: _v3
      },
      _focusVisible: {
        outline: "none",
        border: "2px solid",
        borderColor: "blue.500"
      },
      _focusWithin: {
        "--action-container-display": "flex"
      },
      ref: _v13 ?? void 0,
      children: [_v5, (0, _v1.jsx)(_v3.Box, {
        as: "span",
        whiteSpace: "nowrap",
        flexGrow: 1,
        position: "relative",
        overflow: "hidden",
        children: (0, _v1.jsx)(_v14.OverflowToolTip, {
          labelToolTip: _v8,
          children: (0, _v1.jsx)(_v13.Text, {
            variant: "body-xl",
            fontSize: (0, _v5.rem)(14),
            fontWeight: _v14,
            textOverflow: "ellipsis",
            overflow: "hidden",
            ...(_v15 && {
              fontFamily: _v15
            }),
            children: _v8
          })
        })
      }), _v0 && (0, _v1.jsx)(_v3.Box, {
        onClick: _v0 => {
          _v0.preventDefault(), _v0.stopPropagation();
        },
        display: "var(--action-container-display)",
        children: _v0
      })]
    });
  }], 0);
}