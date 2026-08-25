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
      onDragStart: _v6,
      onDragEnd: _v7,
      onResize: _v8,
      role: _v9
    }) => {
      let [_v10, _v11] = (0, _v2.useState)(null),
        [_v12, _v13] = (0, _v2.useState)(_v4.min),
        [_v14, _v15] = (0, _v2.useState)(!1),
        [_v16, _v17] = (0, _v2.useState)(!1),
        _v18 = (0, _v2.useRef)(_v3);
      (0, _v2.useLayoutEffect)(() => {
        if (_v18.current === _v3) return;
        _v18.current = _v3, _v17(!0);
        let _v0 = setTimeout(() => _v17(!1), 180);
        return () => clearTimeout(_v0);
      }, [_v3]);
      let _v19 = (0, _v4.useColorModeValue)("#F7F9FA", "grayscale.850"),
        _v20 = (0, _v6.useIsBokeh)(),
        _v21 = (0, _v2.useCallback)(_v0 => {
          null !== _v0 && _v11(_v0.getBoundingClientRect());
        }, []),
        _v22 = (0, _v2.useCallback)(_v0 => {
          if (!_v10) return;
          let {
              offsetWidth: _v1,
              offsetLeft: _v2
            } = document.body,
            _v3 = _v4.min;
          "right" === _v1 && (_v3 = _v1 - _v0.clientX), "left" === _v1 && (_v3 = _v0.clientX - _v2), _v13(_v3 = (0, _v7.clamp)(_v3, _v4));
          let _v4 = {
            ..._v4,
            current: _v3
          };
          _v8?.(_v0, _v4);
        }, [_v10]),
        _v23 = (0, _v8.useThrottledCallback)(_v0 => {
          _v14 && (_v0.preventDefault(), _v22(_v0));
        }, [_v22, _v14], 16),
        _v24 = _v0 => {
          _v15(!1), _v7?.(_v0);
        };
      (0, _v2.useLayoutEffect)(() => (document.addEventListener("mouseup", _v24, !0), document.addEventListener("mousemove", _v23, !0), () => {
        document.removeEventListener("mouseup", _v24, !0), document.removeEventListener("mousemove", _v23, !0);
      }), [_v14, _v23]);
      let _v25 = "left" === _v1 ? -1 : 1,
        _v26 = `translateX(${100 * _v25}%)`,
        _v27 = Math.round(_v12 / 6 + 90),
        _v28 = {
          transform: _v0 ? "translateX(0)" : _v26,
          transition: _v14 ? "none" : `transform ${_v27}ms ease-in-out, width 180ms ease-in-out`,
          width: _v3 ? "72px" : `${_v12}px`
        },
        _v29 = _v3 || _v16,
        _v30 = _v3 ? 72 : _v12;
      return _v0 ? (0, _v1.jsxs)(_v3.Box, {
        as: "nav",
        ref: _v21,
        style: {
          [_v1]: 0,
          ..._v28
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
        backgroundColor: _v20 && _v14 ? "fill-surface" : _v20 ? "background" : _v19,
        borderRight: _v20 ? "" : "left" === _v1 ? "1px solid" : "",
        borderLeft: _v20 ? "" : "right" === _v1 ? "1px solid" : "",
        borderColor: _v20 ? "transparent" : "stroke",
        color: "text-primary",
        role: _v9,
        zIndex: 0,
        overflowX: _v29 ? "hidden" : void 0,
        children: [(0, _v1.jsx)(_v3.Box, {
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          minHeight: 0,
          width: _v29 ? `${_v30}px` : void 0,
          minWidth: _v29 ? `${_v30}px` : void 0,
          children: _v2
        }), !_v5 && !_v29 && (0, _v1.jsx)(_v3.Box, {
          onMouseDown: _v0 => {
            _v0.preventDefault(), _v15(!0), _v6?.(_v0);
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