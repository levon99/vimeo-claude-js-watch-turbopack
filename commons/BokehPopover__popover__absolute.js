{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["BokehPopover", 0, function ({
    inPortal: _v0 = !1,
    isLazy: _v1 = !0,
    triggerContent: _v2,
    content: _v3,
    gutter: _v4 = 12,
    isOpen: _v5,
    contentProps: _v6,
    zIndex: _v7 = "popover",
    ..._v8
  }) {
    return (0, _v1.jsxs)(_v2.Popover, {
      isOpen: _v5,
      isLazy: _v1,
      gutter: _v4,
      ..._v8,
      children: [(0, _v1.jsx)(_v3.PopoverTrigger, {
        children: _v2
      }), _v0 ? (0, _v1.jsx)(_v6.Portal, {
        children: _v5 ? (0, _v1.jsx)(_v5.Box, {
          position: "absolute",
          zIndex: _v7,
          children: (0, _v1.jsx)(_v4.PopoverContent, {
            children: _v3
          })
        }) : null
      }) : (0, _v1.jsx)(_v5.Box, {
        position: "absolute",
        zIndex: _v7,
        children: (0, _v1.jsx)(_v4.PopoverContent, {
          rootProps: _v6,
          children: _v3
        })
      })]
    });
  }]);
}