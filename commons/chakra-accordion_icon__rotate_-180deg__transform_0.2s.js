{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  function _v6(_v0) {
    let {
        isOpen: _v1,
        isDisabled: _v2
      } = (0, _v2.useAccordionItemContext)(),
      {
        reduceMotion: _v3
      } = (0, _v1.useAccordionContext)(),
      _v4 = (0, _v4.cx)("chakra-accordion__icon", _v0.className),
      _v5 = {
        opacity: _v2 ? .4 : 1,
        transform: _v1 ? "rotate(-180deg)" : void 0,
        transition: _v3 ? void 0 : "transform 0.2s",
        transformOrigin: "center",
        ...(0, _v2.useAccordionStyles)().icon
      };
    return (0, _v5.jsx)(_v3.Icon, {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: _v4,
      __css: _v5,
      ..._v0,
      children: (0, _v5.jsx)("path", {
        fill: "currentColor",
        d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
      })
    });
  }
  _v6.displayName = "AccordionIcon", _v0.s(["AccordionIcon", 0, _v6]);
}