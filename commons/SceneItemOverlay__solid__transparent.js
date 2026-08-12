{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["SceneItemOverlay", 0, function ({
    id: _v0,
    className: _v1,
    color: _v2,
    width: _v3 = 4,
    children: _v4,
    borderStyle: _v5 = "solid",
    backgroundColor: _v6 = "transparent",
    size: _v7 = "md",
    borderRadius: _v8 = 8,
    backdropFilter: _v9,
    zIndex: _v10 = _v4.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL
  }) {
    let _v11 = "md" === _v7;
    return (0, _v1.jsx)(_v3.Box, {
      id: _v0,
      className: _v1,
      position: "absolute",
      left: _v11 ? (0, _v2.rem)(-4) : 0,
      top: _v11 ? (0, _v2.rem)(-4) : 0,
      width: _v11 ? `calc(100% + ${(0, _v2.rem)(8)})` : "100%",
      height: _v11 ? `calc(100% + ${(0, _v2.rem)(8)})` : "100%",
      borderRadius: "string" == typeof _v8 ? _v8 : (0, _v2.rem)(_v8),
      borderWidth: _v2 ? (0, _v2.rem)(_v3) : void 0,
      borderStyle: _v2 ? _v5 || "solid" : void 0,
      borderColor: _v2 || void 0,
      backdropFilter: _v9,
      zIndex: _v10,
      pointerEvents: "none",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: _v6 || "transparent",
      children: _v4
    });
  }]);
}