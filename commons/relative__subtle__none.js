{
  "use strict";

  var _v1 = _v0.i(0);
  let _v2 = {
      paddingTop: "56.25%",
      width: "100%",
      position: "relative"
    },
    _v3 = `
  radial-gradient(
    50% 50% at 50% 50%,
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0) 100%
  ), #282828
`;
  ({
    ..._v2,
    borderRadius: "subtle",
    userSelect: "none",
    background: _v3
  });
  let _v4 = `
  user-select: none;
`,
    _v5 = `
  display: flex;
  align-items: center;
  justify-content: center;
`;
  (0, _v1.rem)(72), (0, _v1.rem)(360), (0, _v1.rem)(256), _v0.s(["CENTERED_FLEX", 0, _v5, "EMOJI_FONT_FAMILY", 0, "-apple-system, BlinkMacSystemFont, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'", "FULL_WIDTH_ABSOLUTE_STYLE", 0, {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  }, "HOVER_UNDERLINE_LINK_STYLE", 0, {
    color: "blue.500",
    textDecoration: "underline"
  }, "NO_SELECTION", 0, _v4, "PREVIEW_GRADIENT", 0, _v3, "STRICT_16BY9_BOX_STYLE", 0, _v2, "createChessBackgroundStyle", 0, function (_v0) {
    return {
      backgroundColor: "dark" === _v0 ? "grayscale.800" : "grayscale.100",
      backgroundSize: `${(0, _v1.rem)(16)} ${(0, _v1.rem)(16)}`,
      backgroundPosition: `0 0, ${(0, _v1.rem)(8)} ${(0, _v1.rem)(8)}`,
      backgroundImage: "dark" === _v0 ? `linear-gradient(
          45deg,
          #3d3d3d 26%,
          transparent 26%,
          transparent 74%,
          #3d3d3d 74%,
          #3d3d3d
        ),
        linear-gradient(
          45deg,
          #3d3d3d 26%,
          transparent 26%,
          transparent 74%,
          #3d3d3d 74%,
          #3d3d3d
        )` : `linear-gradient(
          45deg,
          white 26%,
          transparent 26%,
          transparent 74%,
          white 74%,
          white
        ),
        linear-gradient(
          45deg,
          white 26%,
          transparent 26%,
          transparent 74%,
          white 74%,
          white
        )`
    };
  }, "createFullWidthAbsoluteStyle", 0, {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%"
  }, "createSvgStyle", 0, function ({
    size: _v0 = 24,
    color: _v1 = "text-primary"
  } = {}) {
    return {
      svg: {
        width: _v0,
        height: _v0,
        path: {
          fill: _v1
        }
      }
    };
  }]);
}