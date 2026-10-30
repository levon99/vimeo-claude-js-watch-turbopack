{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0);
  _v0.s(["SceneOverlayLoader", 0, function ({
    id: _v0 = (0, _v4.createLiveDomName)("scene-overlay-loader"),
    className: _v1 = (0, _v4.createLiveDomName)("scene-overlay-loader")
  }) {
    return (0, _v1.jsx)(_v2.Center, {
      id: _v0,
      className: _v1,
      height: "100%",
      width: "100%",
      background: "blackAlpha.500",
      children: (0, _v1.jsx)(_v3.Spinner, {
        size: "md",
        color: "white"
      })
    });
  }]);
}