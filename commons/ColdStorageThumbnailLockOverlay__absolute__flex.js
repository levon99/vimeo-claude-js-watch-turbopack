{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["ColdStorageThumbnailLockOverlay", 0, ({
    iconSize: _v0 = (0, _v3.rem)(32),
    iconPadding: _v1 = (0, _v3.rem)(8),
    borderRadius: _v2 = "md"
  }) => (0, _v1.jsx)(_v2.Box, {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: _v2,
    overflow: "hidden",
    zIndex: 1,
    background: "rgba(0, 0, 0, 0.64)",
    children: (0, _v1.jsx)(_v2.Box, {
      display: "flex",
      padding: _v1,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: (0, _v3.rem)(8),
      background: "rgba(104, 114, 124, 0.64)",
      backdropFilter: "blur(1px)",
      position: "relative",
      zIndex: 1,
      children: (0, _v1.jsx)(_v4.ColdStorageVideoLockedIcon, {
        color: "white",
        boxSize: _v0
      })
    })
  })]);
}