{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v2.useTabList)({
          ..._v0,
          ref: _v1
        }),
        _v3 = {
          display: "flex",
          ...(0, _v1.useTabsStyles)().tablist
        };
      return (0, _v6.jsx)(_v4.chakra.div, {
        ..._v2,
        className: (0, _v3.cx)("chakra-tabs__tablist", _v0.className),
        __css: _v3
      });
    });
  _v7.displayName = "TabList", _v0.s(["TabList", 0, _v7]);
}