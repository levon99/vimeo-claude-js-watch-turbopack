{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["ColdStorageThumbTooltip", 0, ({
    children: _v0,
    label: _v1,
    layout: _v2 = "grid",
    triggerScope: _v3 = "group",
    compactGridTooltip: _v4 = !1
  }) => {
    let _v5 = "list" === _v2,
      _v6 = "group" === _v3,
      _v7 = _v5 ? (0, _v4.rem)(50) : _v4 ? (0, _v4.rem)(46) : (0, _v4.rem)(52),
      _v8 = _v4 ? (0, _v4.rem)(232) : (0, _v4.rem)(320),
      _v9 = _v4 ? (0, _v4.rem)(8) : (0, _v4.rem)(14),
      _v10 = _v4 ? (0, _v4.rem)(10) : (0, _v4.rem)(12);
    return (0, _v1.jsxs)(_v2.Box, {
      position: "relative",
      width: "100%",
      height: "100%",
      overflow: "visible",
      ...(!_v6 ? {
        _hover: {
          "& .cold-storage-thumb-tooltip": {
            opacity: 1
          }
        },
        _focusWithin: {
          "& .cold-storage-thumb-tooltip": {
            opacity: 1
          }
        }
      } : {}),
      children: [_v0, (0, _v1.jsx)(_v2.Box, {
        className: "cold-storage-thumb-tooltip",
        position: "absolute",
        bottom: _v7,
        display: "flex",
        alignItems: "flex-end",
        opacity: 0,
        pointerEvents: "none",
        transition: "opacity 0.2s ease",
        zIndex: 30,
        ...(_v6 ? {
          _groupHover: {
            opacity: 1
          },
          _groupFocusWithin: {
            opacity: 1
          }
        } : {}),
        ...(_v5 ? {
          left: 0,
          right: 0,
          justifyContent: "center"
        } : {
          left: "50%",
          transform: "translateX(-50%)",
          justifyContent: "center",
          width: "max-content",
          maxWidth: `min(${_v8}, calc(100vw - ${(0, _v4.rem)(32)}))`
        }),
        children: (0, _v1.jsx)(_v2.Box, {
          flexShrink: 0,
          width: _v5 ? (0, _v4.rem)(320) : "max-content",
          maxWidth: _v5 ? void 0 : _v8,
          backgroundColor: "grayscale.600",
          borderRadius: "md",
          paddingX: _v5 ? (0, _v4.rem)(10) : _v9,
          paddingY: _v5 ? (0, _v4.rem)(12) : _v10,
          boxShadow: "sm",
          borderWidth: "0",
          children: (0, _v1.jsx)(_v3.Text, {
            color: "white",
            textAlign: "center",
            variant: "body-sm",
            lineHeight: "1.45",
            children: _v1
          })
        })
      })]
    });
  }]);
}