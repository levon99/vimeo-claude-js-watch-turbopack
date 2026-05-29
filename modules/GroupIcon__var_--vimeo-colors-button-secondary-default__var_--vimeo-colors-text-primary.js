{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["GroupIcon", 0, ({
    bgColor: _v0 = "var(--vimeo-colors-button-secondary-default)",
    iconColor: _v1 = "var(--vimeo-colors-text-primary)",
    iconSize: _v2
  }) => (0, _v1.jsx)(_v2.HStack, {
    justifyContent: "center",
    boxSize: _v2 ?? (0, _v3.rem)(32),
    borderRadius: (0, _v3.rem)(10),
    bgColor: _v0,
    children: (0, _v1.jsx)(_v4.UsersFilled, {
      color: _v1,
      boxSize: _v2 ?? (0, _v3.rem)(20),
      opacity: "40%"
    })
  })]);
}