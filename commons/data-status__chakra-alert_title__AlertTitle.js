{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v4.forwardRef)(function (_v0, _v1) {
      let _v2 = (0, _v1.useAlertStyles)(),
        {
          status: _v3
        } = (0, _v1.useAlertContext)();
      return (0, _v5.jsx)(_v3.chakra.div, {
        ref: _v1,
        "data-status": _v3,
        ..._v0,
        className: (0, _v2.cx)("chakra-alert__title", _v0.className),
        __css: _v2.title
      });
    });
  _v6.displayName = "AlertTitle", _v0.s(["AlertTitle", 0, _v6]);
}