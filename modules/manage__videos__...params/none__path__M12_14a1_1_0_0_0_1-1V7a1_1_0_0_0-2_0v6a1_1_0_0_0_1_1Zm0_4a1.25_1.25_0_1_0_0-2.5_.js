{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  let _v5 = _v0 => (0, _v1.jsx)(_v4.Icon, {
    viewBox: "0 0 24 24",
    ..._v0,
    fill: "none",
    children: (0, _v1.jsx)("path", {
      d: "M12 14a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm0 4a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
      fill: "currentColor"
    })
  });
  _v0.s(["NotificationBadge", 0, ({
    badgeContent: _v0,
    max: _v1 = 100,
    children: _v2,
    sx: _v3,
    variant: _v4 = "count",
    showZero: _v5 = !1,
    isVisible: _v6 = !0,
    anchorOrigin: _v7 = "top-right",
    status: _v8,
    ..._v9
  }) => {
    let _v10 = _v8 ? `${_v4}-${_v8}` : _v4,
      _v11 = (0, _v2.useStyleConfig)("NotificationBadge", {
        variant: _v10
      });
    return (0, _v1.jsxs)(_v3.Box, {
      position: "relative",
      width: "max-content",
      sx: _v3,
      children: [_v2, _v6 && (0, _v1.jsx)(_v3.Box, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        as: "span",
        ...{
          dot: {
            "top-right": {
              right: "xs",
              top: "xs"
            },
            "top-left": {
              left: "xs",
              top: "xs"
            }
          },
          count: {
            "top-right": {
              right: "-6px",
              top: "-6px"
            },
            "top-left": {
              left: "-6px",
              top: "-6px"
            }
          },
          attention: {
            "top-right": {
              right: "-6px",
              top: "-6px"
            },
            "top-left": {
              left: "-6px",
              top: "-6px"
            }
          }
        }[_v4]?.[_v7],
        __css: _v11,
        ..._v9,
        children: (() => {
          if ("count" === _v4 && "number" == typeof _v0) {
            if (0 !== _v0) return _v0 > _v1 ? `${_v1}+` : _v0;
            if (_v5 && 0 === _v0) return 0;
          }
          return "attention" === _v4 ? (0, _v1.jsx)(_v5, {}) : "object" == typeof _v0 ? _v0 : null;
        })()
      })]
    });
  }], 0);
}