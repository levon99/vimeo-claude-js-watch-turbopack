{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  _v0.s(["BokehTooltip", 0, function ({
    isOpen: _v0,
    placement: _v1 = "top",
    label: _v2,
    children: _v3,
    gutter: _v4 = 8,
    width: _v5,
    maxWidth: _v6 = (0, _v5.rem)(300),
    fontSize: _v7 = "header-xs",
    hasArrow: _v8 = !1,
    shouldWrapChildren: _v9 = !0,
    inPopover: _v10 = !1,
    offset: _v11,
    modifiers: _v12,
    ..._v13
  }) {
    let _v14 = (0, _v2.useRef)(null),
      _v15 = (0, _v2.useMemo)(() => ({
        isOpen: _v0,
        placement: _v1,
        label: _v2,
        shouldWrapChildren: _v9,
        fontSize: _v7,
        gutter: _v4,
        offset: _v11,
        hasArrow: _v8,
        modifiers: _v12,
        maxWidth: _v6,
        width: _v5
      }), [_v5, _v6, _v0, _v7, _v4, _v11, _v8, _v2, _v1, _v9, _v12]);
    return (0, _v1.jsx)(_v1.Fragment, {
      children: _v10 ? (0, _v1.jsx)(_v4.Box, {
        ref: _v14,
        children: (0, _v1.jsx)(_v3.Tooltip, {
          portalProps: {
            containerRef: _v14
          },
          ..._v15,
          ..._v13,
          children: _v3
        })
      }) : (0, _v1.jsx)(_v3.Tooltip, {
        ..._v15,
        ..._v13,
        children: _v3
      })
    });
  }]);
}