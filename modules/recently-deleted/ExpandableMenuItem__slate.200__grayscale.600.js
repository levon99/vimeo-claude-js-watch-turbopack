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
    _v10 = _v0.i(0);
  _v0.s(["ExpandableMenuItem", 0, ({
    active: _v0,
    children: _v1,
    draggableItemIsHovering: _v2,
    dropRef: _v3,
    hasActiveColor: _v4 = !1,
    hasToggle: _v5,
    hoverColor: _v6,
    iconSize: _v7 = "xs",
    id: _v8,
    indentation: _v9 = 8,
    isEditing: _v10 = !1,
    isLoading: _v11 = !1,
    isFetching: _v12 = !1,
    isOpen: _v13,
    onClickToggle: _v14,
    toggleId: _v15,
    fontWeight: _v16,
    onKeyPress: _v17,
    tabIndex: _v18,
    hoverBackgroundColor: _v19,
    paddingTop: _v20,
    height: _v21,
    iconTopMargin: _v22,
    ..._v23
  }) => {
    let [_v24, _v25] = (0, _v3.useState)(!1),
      _v26 = void 0 !== _v13,
      _v27 = _v26 ? _v13 : _v24,
      _v28 = (0, _v8.useColorModeValue)("slate.200", "grayscale.600"),
      _v29 = (0, _v8.useColorModeValue)("slate.700", "text-secondary"),
      _v30 = _v4 ? _v0 || _v27 ? "text-primary" : _v29 : "text-primary";
    return (0, _v1.jsxs)(_v4.Box, {
      onDragStart: _v0 => _v0.dataTransfer.effectAllowed = "none",
      id: _v8,
      width: "100%",
      position: "relative",
      onKeyPress: _v17,
      overflow: "hidden",
      userSelect: "none",
      _hover: {
        "div > button": {
          "> svg": {
            path: {
              fill: _v6
            }
          }
        }
      },
      children: [(0, _v1.jsxs)(_v4.Box, {
        ref: _v3 ?? void 0,
        position: "relative",
        overflow: "hidden",
        paddingTop: _v20,
        paddingBottom: _v5 || _v1 ? "2px" : 0,
        _after: {
          content: '" "',
          position: "absolute",
          inset: 0,
          border: `${(0, _v2.rem)(2)} solid`,
          borderColor: _v2 || _v11 && !_v12 ? "vimeoBlue.500" : "transparent",
          borderRadius: (0, _v2.rem)(8),
          backgroundColor: _v2 ? "rgba(23, 213, 255, 0.06)" : "transparent",
          transition: "border 400ms ease",
          zIndex: 10,
          pointerEvents: "none"
        },
        children: [(_v5 || _v1) && (0, _v1.jsx)(_v6.IconButton, {
          tabIndex: _v18,
          icon: (0, _v1.jsx)(_v9.ChevronRightSmall, {}),
          "aria-label": "Toggle menu items list",
          "aria-expanded": _v27 ? "true" : "false",
          onClick: _v26 ? _v14 : () => _v25(!_v24),
          id: _v15,
          variant: "tertiary",
          position: "absolute",
          size: _v7,
          left: (0, _v2.rem)(_v9),
          border: 0,
          transition: "background 200ms",
          top: (0, _v2.rem)(_v22 || 8),
          color: _v30,
          _hover: {
            background: _v28
          },
          sx: {
            "> svg": {
              transition: "120ms ease-in-out",
              transform: _v27 ? "rotate(90deg)" : "rotate(0deg)",
              path: {
                fill: _v30
              }
            }
          }
        }), (0, _v1.jsx)(_v10.MenuItem, {
          active: _v0,
          fontWeight: _v16,
          hoverColor: _v6,
          indentation: _v9,
          isEditing: _v10,
          menuItemColor: _v30,
          hoverBackgroundColor: _v19,
          height: _v21,
          ..._v23
        }), (0, _v1.jsx)(_v4.Box, {
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
          children: _v11 && (0, _v1.jsx)(_v7.Spinner, {
            size: "sm"
          })
        })]
      }), _v1 && _v27 && (0, _v1.jsx)(_v5.Flex, {
        flexDirection: "column",
        gap: (0, _v2.rem)(2),
        children: _v1.map(_v0 => _v0 ? (0, _v3.cloneElement)(_v0, {
          indentation: _v9 + 8
        }) : null)
      })]
    });
  }]);
}