{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["PASSWORD_LOCKED_IMAGE_STYLE", 0, {
    filter: "blur(12px)",
    transform: "scale(1.12)"
  }, "PasswordLockedOverlay", 0, ({
    iconSize: _v0 = (0, _v3.rem)(32),
    borderRadius: _v1 = "md"
  }) => (0, _v1.jsx)(_v2.Center, {
    position: "absolute",
    inset: 0,
    borderRadius: _v1,
    overflow: "hidden",
    zIndex: 1,
    children: (0, _v1.jsx)(_v4.LockPassword, {
      color: "white",
      boxSize: _v0
    })
  })]);
}