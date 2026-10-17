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
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0);
  let _v13 = {
      video: {
        backgroundLight: "rgba(190, 227, 248, 0.5)",
        backgroundDark: "blue.900",
        colorLight: "blue.500",
        colorDark: "blue.300"
      },
      document: {
        backgroundLight: "green.100",
        backgroundDark: "green.900",
        colorLight: "green.600",
        colorDark: "green.500"
      },
      image: {
        backgroundLight: "#FFEAE4",
        backgroundDark: "#3B150B",
        colorLight: "#FE4A1D",
        colorDark: "#F34F26"
      },
      audio: {
        backgroundLight: "purple.100",
        backgroundDark: "purple.800",
        colorLight: "purple.600",
        colorDark: "purple.300"
      }
    },
    _v14 = _v0 => {
      let _v1 = _v13[_v0];
      return {
        background: (0, _v4.useColorModeValue)(_v1.backgroundLight, _v1.backgroundDark),
        color: (0, _v4.useColorModeValue)(_v1.colorLight, _v1.colorDark)
      };
    };
  _v0.s(["useContentTypeColors", 0, _v14], 0);
  let _v15 = {
      video: {
        Filled: _v8.PlayerFilled,
        Outline: _v7.Player
      },
      document: {
        Filled: _v10.ScriptFilled,
        Outline: _v9.Script
      },
      image: {
        Filled: _v6.ImageFilled,
        Outline: _v5.Image
      },
      audio: {
        Filled: _v12.SoundWavesFilled,
        Outline: _v11.SoundWaves
      }
    },
    _v16 = _v0 => {
      let _v1 = (_v0 ?? "").toLowerCase();
      return _v1.startsWith("image/") ? "image" : _v1.startsWith("audio/") ? "audio" : _v1.startsWith("video/") ? "video" : "document";
    },
    _v17 = ["image/jpeg", "image/png", "image/webp"],
    _v18 = ({
      category: _v0,
      size: _v1 = "2xl",
      color: _v2 = "text-secondary",
      opacity: _v3 = 1,
      variant: _v4 = "outline"
    }) => {
      let {
        Outline: _v5,
        Filled: _v6
      } = _v15[_v0];
      return (0, _v1.jsx)("filled" === _v4 ? _v6 : _v5, {
        color: _v2,
        boxSize: _v1,
        opacity: _v3
      });
    },
    _v19 = _v0 => {
      let _v1 = _v0.lastIndexOf(".");
      return _v1 <= 0 || _v1 === _v0.length - 1 ? "" : _v0.slice(_v1 + 1).toUpperCase();
    };
  _v0.s(["CATEGORY_CONFIG", 0, _v15, "ContentTypeIcon", 0, ({
    category: _v0,
    size: _v1 = "md"
  }) => {
    let {
        Filled: _v2
      } = _v15[_v0],
      {
        background: _v3,
        color: _v4
      } = _v14(_v0);
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
    size: _v2 = "grid",
    variant: _v3 = "outline"
  }) => {
    let _v4 = _v16(_v1),
      _v5 = _v19(_v0),
      _v6 = (0, _v4.useColorModeValue)("gray.50", "fill-component-hover");
    return (0, _v1.jsx)(_v2.Flex, {
      alignItems: "center",
      justifyContent: "center",
      boxSize: "grid" === _v2 ? "56px" : "46px",
      borderRadius: "sm",
      bg: _v6,
      children: (0, _v1.jsxs)(_v2.Flex, {
        direction: "column",
        alignItems: "center",
        gap: "xs",
        children: [(0, _v1.jsx)(_v18, {
          category: _v4,
          color: "gray.400",
          size: "grid" === _v2 ? "28px" : "20px",
          variant: _v3
        }), "" !== _v5 && (0, _v1.jsx)(_v3.Text, {
          variant: "body-xs",
          fontFamily: "heading",
          color: "gray.400",
          children: _v5
        })]
      })
    });
  }, "getContentTypeCategory", 0, _v16, "getFileExtension", 0, _v19, "supportsGeneratedThumbnail", 0, _v0 => _v17.includes((_v0 ?? "").toLowerCase())], 0);
}