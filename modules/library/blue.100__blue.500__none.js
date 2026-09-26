{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0),
    _v9 = _v0.i(0);
  let _v10 = {
      video: {
        Filled: _v7.PlayerFilled,
        Outline: _v6.Player,
        background: "blue.100",
        color: "blue.500"
      },
      document: {
        Filled: _v0 => (0, _v1.jsx)(_v5.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v1.jsx)("path", {
            d: "M15 8h4.4L14 2.6V7c0 .6.4 1 1 1Zm0 2c-1.7 0-3-1.3-3-3V2H7C5.3 2 4 3.3 4 5v14c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-9h-5ZM9 8h1c.6 0 1 .4 1 1s-.4 1-1 1H9c-.6 0-1-.4-1-1s.4-1 1-1Zm6 10H9c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1Zm0-4H9c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1Z",
            fill: "currentColor"
          })
        }),
        Outline: _v8.Script,
        background: "green.100",
        color: "green.500"
      },
      image: {
        Filled: _v0 => (0, _v1.jsx)(_v5.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v1.jsxs)("g", {
            fill: "currentColor",
            children: [(0, _v1.jsx)("path", {
              d: "M7 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
            }), (0, _v1.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 3a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4H7ZM5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5.12l-.978-.783a3 3 0 0 0-3.995.222l-2.425 2.424a1 1 0 0 1-1.357.052l-.793-.679a3 3 0 0 0-3.904 0l-.548.47V7Z"
            })]
          })
        }),
        Outline: _v4.Image,
        background: "orange.100",
        color: "orange.500"
      },
      audio: {
        Filled: _v0 => (0, _v1.jsx)(_v5.Icon, {
          viewBox: "0 0 24 24",
          ..._v0,
          fill: "none",
          children: (0, _v1.jsx)("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M8 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Zm4-4a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm8 8a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM4 10a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1Zm12-4a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z",
            fill: "currentColor"
          })
        }),
        Outline: _v9.SoundWaves,
        background: "purple.100",
        color: "purple.500"
      }
    },
    _v11 = _v0 => {
      let _v1 = (_v0 ?? "").toLowerCase();
      return _v1.startsWith("image/") ? "image" : _v1.startsWith("audio/") ? "audio" : _v1.startsWith("video/") ? "video" : "document";
    },
    _v12 = ({
      category: _v0,
      size: _v1 = "2xl",
      color: _v2 = "text-secondary",
      opacity: _v3 = 1
    }) => {
      let {
        Outline: _v4
      } = _v10[_v0];
      return (0, _v1.jsx)(_v4, {
        color: _v2,
        boxSize: _v1,
        opacity: _v3
      });
    };
  _v0.s(["ContentTypeIcon", 0, ({
    category: _v0,
    size: _v1 = "md"
  }) => {
    let {
      Filled: _v2,
      background: _v3,
      color: _v4
    } = _v10[_v0];
    return (0, _v1.jsx)(_v2.Flex, {
      alignItems: "center",
      justifyContent: "center",
      boxSize: "sm" === _v1 ? "18px" : "20px",
      borderRadius: "sm",
      bg: _v3,
      flexShrink: 0,
      children: (0, _v1.jsx)(_v2, {
        color: _v4,
        boxSize: "sm" === _v1 ? "14px" : "16px"
      })
    });
  }, "FileThumbnailContent", 0, ({
    name: _v0,
    contentType: _v1,
    size: _v2 = "grid"
  }) => {
    let _v3,
      _v4 = _v11(_v1),
      _v5 = (_v3 = _v0.lastIndexOf(".")) <= 0 || _v3 === _v0.length - 1 ? "" : _v0.slice(_v3 + 1).toUpperCase();
    return (0, _v1.jsx)(_v2.Flex, {
      alignItems: "center",
      justifyContent: "center",
      boxSize: "grid" === _v2 ? "56px" : "46px",
      borderRadius: "md",
      bg: "gray.50",
      children: (0, _v1.jsxs)(_v2.Flex, {
        direction: "column",
        alignItems: "center",
        gap: "xs",
        children: [(0, _v1.jsx)(_v12, {
          category: _v4,
          color: "gray.400",
          size: "grid" === _v2 ? "28px" : "20px"
        }), "" !== _v5 && (0, _v1.jsx)(_v3.Text, {
          variant: "body-xs",
          fontFamily: "heading",
          color: "gray.400",
          children: _v5
        })]
      })
    });
  }, "getContentTypeCategory", 0, _v11], 0);
}