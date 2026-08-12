{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v2.useTabPanel)({
          ..._v0,
          ref: _v1
        }),
        _v3 = (0, _v1.useTabsStyles)();
      return (0, _v6.jsx)(_v4.chakra.div, {
        outline: "0",
        ..._v2,
        className: (0, _v3.cx)("chakra-tabs__tab-panel", _v0.className),
        __css: _v3.tabpanel
      });
    });
  _v7.displayName = "TabPanel", _v0.s(["TabPanel", 0, _v7]);
}