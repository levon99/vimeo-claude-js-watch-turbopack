{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          getBodyProps: _v2
        } = (0, _v1.usePopoverContext)(),
        _v3 = (0, _v1.usePopoverStyles)();
      return (0, _v5.jsx)(_v2.chakra.div, {
        ..._v2(_v0, _v1),
        className: (0, _v4.cx)("chakra-popover__body", _v0.className),
        __css: _v3.body
      });
    });
  _v6.displayName = "PopoverBody", _v0.s(["PopoverBody", 0, _v6]);
}