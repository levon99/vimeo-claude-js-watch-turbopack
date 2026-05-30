{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = (0, _v5.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v1.useTabsStyles)(),
        _v3 = (0, _v2.useTab)({
          ..._v0,
          ref: _v1
        }),
        _v4 = {
          outline: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ..._v2.tab
        };
      return (0, _v6.jsx)(_v4.chakra.button, {
        ..._v3,
        className: (0, _v3.cx)("chakra-tabs__tab", _v0.className),
        __css: _v4
      });
    });
  _v7.displayName = "Tab", _v0.s(["Tab", 0, _v7]);
}