{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["PreviewStateLabel", 0, function ({
    id: _v0,
    className: _v1,
    color: _v2,
    position: _v3 = "absolute",
    children: _v4 = null
  }) {
    return (0, _v1.jsx)(_v2.Box, {
      id: _v0,
      className: _v1,
      as: "span",
      position: _v3,
      left: (0, _v3.rem)(12),
      top: (0, _v3.rem)(12),
      color: "white",
      borderRadius: (0, _v3.rem)(4),
      background: _v2,
      padding: `${(0, _v3.rem)(4)} ${(0, _v3.rem)(8)}`,
      fontSize: (0, _v3.rem)(12),
      lineHeight: (0, _v3.rem)(16),
      textTransform: "uppercase",
      userSelect: "none",
      fontWeight: "bold",
      zIndex: _v4.graphicsConfig.GRAPHICS_POSITIONING.Z_INDEX.SCENE_LABEL,
      children: _v4
    });
  }]);
}