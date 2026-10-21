{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0);
  let _v6 = ({
    iconBoxSize: _v0 = "xl"
  }) => (0, _v1.jsx)(_v4.Center, {
    backgroundColor: "fill-component",
    height: "100%",
    width: "100%",
    opacity: .6,
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "stroke",
    children: (0, _v1.jsx)(_v5.CameraOnFilled, {
      boxSize: _v0,
      color: "text-tertiary"
    })
  });
  _v0.s(["DefaultThumbnail", 0, _v6], 0), _v0.s(["EventThumbnail", 0, ({
    src: _v0,
    borderRadius: _v1 = "sm",
    children: _v2
  }) => (0, _v1.jsxs)(_v2.Box, {
    border: "0.5px solid",
    borderColor: "stroke",
    borderRadius: _v1,
    overflow: "hidden",
    paddingBottom: "56.25%",
    position: "relative",
    width: "100%",
    children: [_v0 ? (0, _v1.jsx)(_v3.Image, {
      alt: "",
      height: "100%",
      left: 0,
      objectFit: "cover",
      position: "absolute",
      src: _v0,
      top: 0,
      width: "100%"
    }) : (0, _v1.jsx)(_v2.Box, {
      height: "100%",
      left: 0,
      position: "absolute",
      top: 0,
      width: "100%",
      children: (0, _v1.jsx)(_v6, {
        iconBoxSize: {
          base: "lg",
          md: "xs",
          lg: "md"
        }
      })
    }), _v2]
  })], 0);
}