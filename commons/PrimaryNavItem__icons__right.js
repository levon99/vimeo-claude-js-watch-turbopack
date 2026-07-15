{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  let _v8 = (0, _v6.rem)(24),
    _v9 = (0, _v6.rem)(12),
    _v10 = (0, _v6.rem)(12),
    _v11 = (0, _v6.rem)(8),
    _v12 = (0, _v6.rem)(6);
  _v0.s(["PrimaryNavItem", 0, ({
    item: _v0,
    variant: _v1
  }) => {
    if ("icons" === _v1) {
      let _v0 = !!_v0.href;
      return (0, _v1.jsx)(_v5.Tooltip, {
        label: _v0.label,
        placement: "right",
        children: (0, _v1.jsxs)(_v3.Box, {
          position: "relative",
          display: "inline-flex",
          children: [(0, _v1.jsx)(_v4.IconButton, {
            as: _v0 ? _v2.default : "button",
            ...(_v0 ? {
              href: _v0.href,
              prefetch: _v0.prefetch
            } : {}),
            "aria-label": _v0.label,
            icon: _v0.icon,
            variant: "tertiary",
            size: "md",
            borderRadius: _v10,
            onClick: _v0.onClick,
            "data-id": _v0.dataId,
            sx: {
              "> svg": {
                width: _v8,
                height: _v8
              },
              ...(_v0.active && {
                backgroundColor: "button-tertiary-hover",
                _dark: {
                  backgroundColor: "button-tertiary-hover"
                }
              })
            }
          }), _v0.action && (0, _v1.jsx)(_v3.Box, {
            position: "absolute",
            top: (0, _v6.rem)(2),
            right: (0, _v6.rem)(2),
            pointerEvents: "none",
            children: _v0.action
          })]
        })
      });
    }
    return (0, _v1.jsx)(_v3.Box, {
      as: "li",
      listStyleType: "none",
      children: (0, _v1.jsx)(_v7.MenuItem, {
        icon: _v0.icon,
        iconSize: _v8,
        iconMarginRight: _v9,
        borderRadius: _v10,
        paddingX: _v11,
        paddingLeft: _v12,
        label: _v0.label,
        href: _v0.href,
        active: _v0.active,
        prefetch: _v0.prefetch,
        dataId: _v0.dataId,
        action: _v0.action,
        showActionOnHover: _v0.showActionOnHover,
        onClick: _v0.onClick
      })
    });
  }]);
}