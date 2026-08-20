{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  let _v7 = {
    transform: `scale(0.85) translateY(${(0, _v6.rem)(-22)})`,
    color: "text-primary"
  };
  _v0.s(["InputWrapper", 0, _v0 => (0, _v1.jsxs)(_v2.FormControl, {
    position: "relative",
    variant: "floating",
    _focusWithin: {
      label: _v7
    },
    sx: {
      "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": _v7,
      'input[aria-invalid="true"]:not(:placeholder-shown) + label': {
        color: "status-destructive-primary"
      },
      zIndex: 2
    },
    ..._v0,
    children: [_v0.children, (0, _v1.jsx)(_v4.FormErrorMessage, {
      fontWeight: 350,
      fontSize: "body-sm",
      color: "status-destructive-primary",
      children: _v0?.formFieldErrorMessage
    })]
  }), "Label", 0, _v0 => (0, _v1.jsx)(_v3.FormLabel, {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 2,
    backgroundColor: "white",
    pointerEvents: "none",
    mx: 3,
    px: 1,
    my: (0, _v6.rem)(10),
    transformOrigin: "left top",
    fontSize: (0, _v6.rem)(14),
    fontWeight: 350,
    color: "text-secondary",
    lineHeight: "140%",
    letterSpacing: "-3%",
    transition: "0.2s ease all",
    ..._v0,
    children: _v0.children
  }), "StyledInput", 0, _v0 => (0, _v1.jsx)(_v5.Input, {
    placeholder: "",
    _focusVisible: {
      borderColor: "text-primary"
    },
    ..._v0
  })]);
}