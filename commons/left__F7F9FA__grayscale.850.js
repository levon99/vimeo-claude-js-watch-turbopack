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
      collapsed: _v3 = !1,
      dragConstraint: _v4 = {
        min: _v9,
        max: _v10
      },
      isFixed: _v5 = !1,
      onCollapsedRailClick: _v6,
      onDragStart: _v7,
      onDragEnd: _v8,
      onResize: _v9,
      role: _v10
    }) => {
      let [_v11, _v12] = (0, _v2.useState)(null),
        [_v13, _v14] = (0, _v2.useState)(_v4.min),
        [_v15, _v16] = (0, _v2.useState)(!1),
        [_v17, _v18] = (0, _v2.useState)(!1),
        _v19 = (0, _v2.useRef)(_v3),
        _v20 = _v3 && (_v19.current !== _v3 || _v17);
      (0, _v2.useLayoutEffect)(() => {
        if (_v19.current === _v3) return;
        _v19.current = _v3, _v18(!0);
        let _v0 = setTimeout(() => _v18(!1), 180);
        return () => clearTimeout(_v0);
      }, [_v3]);
      let _v21 = (0, _v4.useColorModeValue)("#F7F9FA", "grayscale.850"),
        _v22 = (0, _v6.useIsBokeh)(),
        _v23 = (0, _v2.useCallback)(_v0 => {
          null !== _v0 && _v12(_v0.getBoundingClientRect());
        }, []),
        _v24 = (0, _v2.useCallback)(_v0 => {
          if (!_v11) return;
          let {
              offsetWidth: _v1,
              offsetLeft: _v2
            } = document.body,
            _v3 = _v4.min;
          "right" === _v1 && (_v3 = _v1 - _v0.clientX), "left" === _v1 && (_v3 = _v0.clientX - _v2), _v14(_v3 = (0, _v7.clamp)(_v3, _v4));
          let _v4 = {
            ..._v4,
            current: _v3
          };
          _v9?.(_v0, _v4);
        }, [_v11]),
        _v25 = (0, _v8.useThrottledCallback)(_v0 => {
          _v15 && (_v0.preventDefault(), _v24(_v0));
        }, [_v24, _v15], 16),
        _v26 = _v0 => {
          _v16(!1), _v8?.(_v0);
        };
      (0, _v2.useLayoutEffect)(() => (document.addEventListener("mouseup", _v26, !0), document.addEventListener("mousemove", _v25, !0), () => {
        document.removeEventListener("mouseup", _v26, !0), document.removeEventListener("mousemove", _v25, !0);
      }), [_v15, _v25]);
      let _v27 = "left" === _v1 ? -1 : 1,
        _v28 = `translateX(${100 * _v27}%)`,
        _v29 = Math.round(_v13 / 6 + 90),
        _v30 = {
          transform: _v0 ? "translateX(0)" : _v28,
          transition: _v15 ? "none" : `transform ${_v29}ms ease-in-out, width 180ms ease-in-out`,
          width: _v3 ? "72px" : `${_v13}px`
        },
        _v31 = _v3 || _v17,
        _v32 = _v3 ? 72 : _v13;
      return _v0 ? (0, _v1.jsxs)(_v3.Box, {
        as: "nav",
        ref: _v23,
        style: {
          [_v1]: 0,
          ..._v30
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
        backgroundColor: _v22 && _v15 ? "fill-surface" : _v22 ? "background" : _v21,
        borderRight: _v22 ? "" : "left" === _v1 ? "1px solid" : "",
        borderLeft: _v22 ? "" : "right" === _v1 ? "1px solid" : "",
        borderColor: _v22 ? "transparent" : "stroke",
        color: "text-primary",
        "data-collapsed-rail-ready": _v3 && !_v20 ? "true" : void 0,
        "data-collapsed-hover-enabled": _v3 && !_v20 ? "true" : void 0,
        sx: {
          '&[data-collapsed-rail-ready="true"]:hover': {
            cursor: "col-resize"
          }
        },
        onClick: _v0 => {
          !_v3 || !_v6 || _v0.target instanceof Element && _v0.target.closest('a, button, input, select, textarea, [role="button"], [role="menuitem"]') || _v6(_v0);
        },
        role: _v10,
        zIndex: 0,
        overflowX: _v31 ? "hidden" : void 0,
        children: [(0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: 0,
          width: _v31 ? `${_v32}px` : void 0,
          minWidth: _v31 ? `${_v32}px` : void 0,
          children: _v2
        }), !_v5 && !_v31 && (0, _v1.jsx)(_v3.Box, {
          onMouseDown: _v0 => {
            _v0.preventDefault(), _v16(!0), _v7?.(_v0);
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
    marginBottom: (0, _v5.rem)(12),
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
  }), _v0.s(["COLLAPSED_RAIL_WIDTH", 0, 72, "ResizableSideNav", 0, _v11]);
}