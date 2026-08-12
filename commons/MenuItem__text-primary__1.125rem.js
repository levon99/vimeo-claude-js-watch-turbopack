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
    _v9 = _v0.i(0);
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
    height: _v20,
    borderRadius: _v21 = "0.5rem",
    paddingX: _v22,
    paddingLeft: _v23
  }) => {
    let _v24 = (0, _v8.useWindowSize)().width <= _v9.BreakPoints.sm,
      _v25 = (0, _v5.useColorModeValue)("darkBlueAlpha.200", "lightBlueAlpha.300"),
      _v26 = !!_v4 && !_v7;
    return (0, _v1.jsxs)(_v3.Box, {
      className: _v18,
      as: _v26 ? _v2.default : "span",
      ...(_v26 ? {
        href: _v4,
        prefetch: _v11
      } : {}),
      role: _v26 ? void 0 : "button",
      onClick: _v0 => {
        _v7 || _v10?.(_v0);
      },
      tabIndex: _v26 ? void 0 : 0,
      "data-id": _v2,
      display: "flex",
      alignItems: "center",
      height: (0, _v4.rem)(_v20 || 40),
      borderRadius: _v21,
      color: _v9,
      paddingTop: (0, _v4.rem)(4),
      paddingBottom: (0, _v4.rem)(4),
      paddingLeft: _v6 > 0 ? `${28 + _v6}px` : _v23 ?? _v22 ?? (0, _v4.rem)(10),
      paddingRight: _v0 ? (0, _v4.rem)(5) : _v22 ?? (0, _v4.rem)(10),
      bg: _v1 ? _v25 : "transparent",
      textDecoration: _v26 ? "none" : void 0,
      cursor: "pointer",
      border: "2px solid",
      borderColor: "transparent",
      sx: {
        "--action-container-display": _v12 && !_v24 ? "none" : "flex",
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
        background: _v19 ?? _v25,
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
        children: (0, _v1.jsx)(_v7.OverflowToolTip, {
          labelToolTip: _v8,
          children: (0, _v1.jsx)(_v6.Text, {
            variant: "body-xl",
            fontSize: (0, _v4.rem)(14),
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
  }]);
}