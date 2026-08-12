{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0);
  _v0.s(["OnboardingShell", 0, function ({
    children: _v0,
    growLogo: _v1 = !0
  }) {
    let {
        colorMode: _v2
      } = (0, _v5.useColorMode)(),
      _v3 = "dark" === _v2 ? "background" : "#fff";
    return (0, _v1.jsxs)(_v4.Grid, {
      gridTemplateColumns: {
        base: "1fr",
        lg: "1fr 320px"
      },
      height: "100vh",
      position: "relative",
      children: [(0, _v1.jsxs)(_v3.Flex, {
        direction: "column",
        height: "100%",
        p: "2rem",
        alignItems: "center",
        justifyContent: _v1 ? "space-between" : "flex-start",
        gap: "3",
        backgroundColor: _v3,
        position: "relative",
        children: [(0, _v1.jsx)(_v3.Flex, {
          grow: _v1 ? "1" : "0",
          children: (0, _v1.jsx)(_v6.default, {
            height: "32",
            width: "74"
          })
        }), _v0]
      }), (0, _v1.jsx)(_v3.Flex, {
        hideBelow: "lg",
        height: "100%",
        alignItems: "center",
        justifyContent: "end",
        overflow: "hidden",
        flexShrink: 0,
        backgroundColor: _v3,
        children: (0, _v1.jsx)(_v2.Box, {
          height: "100%",
          children: (0, _v1.jsx)("video", {
            height: "100%",
            autoPlay: !0,
            loop: !0,
            playsInline: !0,
            muted: !0,
            src: "https://player.vimeo.com/progressive_redirect/playback/1088210042/rendition/540p/file.mp4?loc=external&signature=e51aba1579c34ff97797cec14c655b48a9d0dbcdeca2761f94758ba49291b7e7",
            poster: "https://i.vimeocdn.com/custom_asset/8be3bdbdec84ca1597a9aaf08721f148"
          })
        })
      })]
    });
  }]);
}