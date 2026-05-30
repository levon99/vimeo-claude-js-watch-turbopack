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
    _v13 = _v0.i(0);
  let _v14 = (0, _v3.createContext)({
      isSelected: !1
    }),
    _v15 = ({
      children: _v0,
      href: _v1,
      listGridColumns: _v2,
      isDragging: _v3 = !1,
      isDraggingOver: _v4 = !1,
      isSelected: _v5 = !1,
      isDisabled: _v6 = !1,
      disableHover: _v7 = !1,
      dragDropRef: _v8,
      onMouseEnter: _v9,
      onMouseLeave: _v10,
      onToggleSelected: _v11,
      shouldUseNextLink: _v12 = !0,
      ..._v13
    }) => {
      let _v14 = (0, _v9.useColorModeValue)("rgba(26, 54, 93, 0.06)", "rgba(190, 227, 248, 0.08)"),
        _v15 = (0, _v9.useColorModeValue)("stroke-light", "stroke-dark"),
        _v16 = (0, _v1.jsx)(_v4.Box, {
          ref: _v8,
          tabIndex: 0,
          role: "group",
          display: "grid",
          gridTemplateColumns: _v2,
          gridColumnGap: "0.5rem",
          alignItems: "center",
          padding: (0, _v8.rem)(12),
          opacity: "1",
          backgroundColor: _v5 || _v4 ? _v14 : "transparent",
          borderColor: _v5 || _v4 ? _v15 : "transparent",
          borderRadius: "md",
          borderWidth: ".125rem",
          transition: "background-color 0.2s ease, border-color 0.2s ease",
          position: "relative",
          _hover: _v7 ? {
            backgroundColor: "none"
          } : {
            backgroundColor: _v14
          },
          cursor: "initial",
          onMouseEnter: _v9,
          onMouseLeave: _v10,
          ..._v13,
          "data-testid": "content-row",
          children: (0, _v1.jsx)(_v14.Provider, {
            value: {
              isSelected: _v5,
              onToggleSelected: _v11
            },
            children: _v0
          })
        });
      return (0, _v1.jsx)(_v16, {
        href: _v1,
        shouldUseNextLink: _v12,
        children: _v16
      });
    },
    _v16 = ({
      children: _v0,
      href: _v1,
      shouldUseNextLink: _v2 = !0
    }) => _v1 ? _v2 ? (0, _v1.jsx)(_v2.default, {
      href: _v1,
      passHref: !0,
      children: _v0
    }) : (0, _v1.jsx)("a", {
      href: _v1,
      children: _v0
    }) : _v0;
  _v15.Column = ({
    children: _v0,
    href: _v1,
    width: _v2,
    overflow: _v3,
    margin: _v4,
    hideAtWidth: _v5,
    maxWidth: _v6,
    justifyColumn: _v7 = "flex-start",
    shouldUseNextLink: _v8 = !0,
    onClick: _v9,
    ..._v10
  }) => {
    let [_v11] = (0, _v10.useMediaQuery)(`(min-width: ${_v5})`),
      _v12 = (0, _v1.jsx)(_v11.VStack, {
        gap: "0.5rem",
        position: "relative",
        alignItems: "flex-start",
        justifySelf: _v7,
        width: _v2,
        overflow: _v3,
        margin: _v4,
        onClick: _v9,
        children: _v0
      });
    return (0, _v1.jsx)(_v4.Box, {
      display: !_v5 || _v11 ? "initial" : "none",
      overflow: _v3,
      maxWidth: _v6,
      ..._v10,
      children: (0, _v1.jsx)(_v16, {
        href: _v1,
        shouldUseNextLink: _v8,
        children: _v12
      })
    });
  };
  let _v17 = {
    margin: (0, _v8.rem)(2),
    padding: "inherit"
  };
  _v15.SelectCheckbox = ({
    isDisabled: _v0,
    size: _v1 = "sm"
  }) => {
    let {
      isSelected: _v2,
      onToggleSelected: _v3
    } = (0, _v3.useContext)(_v14);
    return (0, _v1.jsx)(_v6.Checkbox, {
      ..._v17,
      isChecked: _v2,
      onChange: _v3,
      disabled: _v0,
      size: _v1,
      "data-testid": "checkbox"
    });
  }, _v15.SelectRadio = ({
    isDisabled: _v0,
    size: _v1 = "sm"
  }) => {
    let {
      isSelected: _v2,
      onToggleSelected: _v3
    } = (0, _v3.useContext)(_v14);
    return (0, _v1.jsx)(_v12.Radio, {
      ..._v17,
      isChecked: _v2,
      onChange: _v3,
      disabled: _v0,
      size: _v1
    });
  }, _v15.Thumbnail = ({
    alt: _v0,
    src: _v1,
    srcSet: _v2,
    badgeBgColor: _v3,
    badgeText: _v4,
    badgeSize: _v5 = "sm",
    badgeSx: _v6,
    borderRadius: _v7 = "md",
    minWidth: _v8 = (0, _v8.rem)(130),
    variant: _v9 = "default",
    isLocked: _v10 = !1,
    lockIconSize: _v11,
    lockIconPadding: _v12
  }) => (0, _v1.jsxs)(_v4.Box, {
    position: "relative",
    zIndex: 0,
    isolation: "isolate",
    children: [_v10 && (0, _v1.jsx)(_v18, {
      iconSize: _v11,
      iconPadding: _v12
    }), (0, _v1.jsx)(_v4.Box, {
      as: "img",
      alt: _v0,
      src: _v1,
      srcSet: _v2,
      position: "relative",
      inset: "0",
      width: "100%",
      height: "100%",
      borderRadius: _v7,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#1A365D14",
      aspectRatio: "16 / 9",
      objectFit: "cover",
      minWidth: _v8,
      "data-testid": "thumbnail"
    }), _v4 && (0, _v1.jsx)(_v5.Badge, {
      position: "absolute",
      bottom: (0, _v8.rem)(8),
      right: (0, _v8.rem)(8),
      size: _v5,
      variant: _v9,
      backgroundColor: _v3,
      border: "none",
      sx: _v6,
      children: _v4
    })]
  }), _v15.DefaultThumbnail = ({
    children: _v0,
    background: _v1,
    border: _v2,
    badgeBgColor: _v3,
    badgeText: _v4,
    badgeSx: _v5,
    borderRadius: _v6 = "md",
    minWidth: _v7 = (0, _v8.rem)(150),
    variant: _v8 = "default",
    badgeSize: _v9 = "sm"
  }) => (0, _v1.jsxs)(_v1.Fragment, {
    children: [(0, _v1.jsx)(_v7.Center, {
      position: "relative",
      inset: "0",
      width: "100%",
      background: _v1 || "fill-component",
      opacity: _v1 ? 1 : .6,
      borderRadius: _v6,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "stroke",
      border: _v2,
      minWidth: _v7,
      aspectRatio: "16 / 9",
      children: _v0
    }), _v4 && (0, _v1.jsx)(_v5.Badge, {
      position: "absolute",
      bottom: (0, _v8.rem)(8),
      right: (0, _v8.rem)(8),
      size: _v9,
      backgroundColor: _v3,
      variant: _v8,
      border: "none",
      sx: _v5,
      children: _v4
    })]
  });
  let _v18 = ({
    iconSize: _v0,
    iconPadding: _v1
  } = {}) => (0, _v1.jsx)(_v13.ColdStorageThumbnailLockOverlay, {
    iconSize: _v0,
    iconPadding: _v1
  });
  _v0.s(["ContentRow", 0, _v15]);
}