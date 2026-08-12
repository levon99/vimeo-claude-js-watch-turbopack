{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = (0, _v3.forwardRef)(function (_v0, _v1) {
      let {
          getButtonProps: _v2
        } = (0, _v1.useAccordionItemContext)(),
        _v3 = _v2(_v0, _v1),
        _v4 = {
          display: "flex",
          alignItems: "center",
          width: "100%",
          outline: 0,
          ...(0, _v1.useAccordionStyles)().button
        };
      return (0, _v5.jsx)(_v2.chakra.button, {
        ..._v3,
        className: (0, _v4.cx)("chakra-accordion__button", _v0.className),
        __css: _v4
      });
    });
  _v6.displayName = "AccordionButton", _v0.s(["AccordionButton", 0, _v6]);
}