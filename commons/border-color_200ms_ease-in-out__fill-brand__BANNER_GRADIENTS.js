{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = (_v0, _v1, _v2) => _v0 && !_v1 ? {
      transition: "border-color 200ms ease-in-out",
      borderColor: "fill-brand",
      [`[data-component-id="${_v2}-hover-wrapper"]`]: {
        opacity: 1
      }
    } : void 0,
    _v3 = {
      base: "100%",
      md: `calc(100% + ${(0, _v1.rem)(32)})`,
      lg: `calc(100% + ${(0, _v1.rem)(48)})`
    },
    _v4 = {
      base: 0,
      md: (0, _v1.rem)(-16),
      lg: (0, _v1.rem)(-24)
    };
  _v0.s(["BANNER_GRADIENTS", 0, {
    center: "linear-gradient(180deg, transparent 0%, black 100%)",
    right: "linear-gradient(90deg, transparent 0%, black 100%)",
    left: "linear-gradient(90deg, black 0%, transparent 100%)"
  }, "commonWrapperLeft", 0, _v4, "commonWrapperWidth", 0, _v3, "getBorderStyles", 0, (_v0, _v1, _v2) => ({
    border: `${(0, _v1.rem)(2)} solid`,
    borderColor: _v1 ? "fill-brand" : "transparent",
    _focusWithin: _v2(_v0, _v1, _v2),
    _hover: _v2(_v0, _v1, _v2),
    sx: _v1 ? {
      [`[data-component-id="${_v2}-hover-wrapper"]`]: {
        visibility: "hidden"
      }
    } : void 0
  })]);
}