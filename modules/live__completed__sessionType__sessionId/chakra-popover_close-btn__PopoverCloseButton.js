{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          onClose: _v2
        } = (0, _v1.usePopoverContext)(),
        _v3 = (0, _v1.usePopoverStyles)();
      return (0, _v5.jsx)(_v2.CloseButton, {
        size: "sm",
        onClick: _v2,
        className: (0, _v4.cx)("chakra-popover__close-btn", _v0.className),
        __css: _v3.closeButton,
        ref: _v1,
        ..._v0
      });
    });
  _v6.displayName = "PopoverCloseButton", _v0.s(["PopoverCloseButton", 0, _v6]);
}