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
    _v11 = _v0.i(0);
  _v0.s(["EventCard", 0, ({
    title: _v0,
    description: _v1,
    date: _v2,
    isLive: _v3,
    link: _v4,
    thumbnailSrc: _v5,
    speakers: _v6 = []
  }) => {
    let _v7 = _v1?.trim(),
      _v8 = _v6.slice(0, 3);
    return (0, _v1.jsxs)(_v4.Flex, {
      backgroundColor: "fill-component",
      borderRadius: "lg",
      direction: "column",
      gap: "md",
      height: "100%",
      overflow: "hidden",
      pb: "md",
      position: "relative",
      pt: "sm",
      px: "sm",
      role: "group",
      width: "100%",
      _hover: {
        backgroundColor: "fill-component-hover"
      },
      children: [(0, _v1.jsxs)(_v3.Box, {
        position: "relative",
        children: [(0, _v1.jsx)(_v10.EventThumbnail, {
          src: _v5
        }), _v3 ? (0, _v1.jsx)(_v3.Box, {
          left: "sm",
          position: "absolute",
          top: "sm",
          zIndex: 2,
          children: (0, _v1.jsx)(_v8.CardBadge, {
            format: "live",
            size: "sm",
            children: (0, _v9.translate)({
              singular: "Live",
              dictionary: {
                es: {
                  singular: "En vivo"
                },
                "fr-FR": {
                  singular: "Direct"
                },
                "ja-JP": {
                  singular: "ライブ"
                },
                "ko-KR": {
                  singular: "라이브"
                },
                "pt-BR": {
                  singular: "Ao vivo"
                },
                "zh-CN": {
                  singular: "直播"
                }
              }
            })
          })
        }) : null]
      }), (0, _v1.jsxs)(_v4.Flex, {
        direction: "column",
        gap: "sm",
        pl: "sm",
        children: [_v2 ? (0, _v1.jsxs)(_v4.Flex, {
          align: "center",
          gap: "sm",
          children: [(0, _v1.jsx)(_v7.Calendar, {
            boxSize: "2xs",
            color: "var(--vimeo-colors-text-secondary)"
          }), (0, _v1.jsx)(_v5.Text, {
            color: "text-secondary",
            variant: "body-md",
            whiteSpace: "nowrap",
            children: _v2
          })]
        }) : null, (0, _v1.jsxs)(_v4.Flex, {
          direction: "column",
          gap: "xs",
          children: [(0, _v1.jsx)(_v5.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-md",
            children: _v0
          }), (0, _v1.jsx)(_v3.Box, {
            minHeight: (0, _v6.rem)(40),
            children: _v7 ? (0, _v1.jsx)(_v5.Text, {
              color: "text-secondary",
              noOfLines: 2,
              variant: "body-md",
              children: _v7
            }) : null
          })]
        }), (0, _v1.jsx)(_v4.Flex, {
          align: "center",
          height: _v11.EVENT_CARD_STYLES.AVATAR_SIZE_28,
          px: (0, _v6.rem)(8),
          children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v3.Box, {
            ml: 0 === _v1 ? 0 : (0, _v6.rem)(-8),
            minHeight: _v11.EVENT_CARD_STYLES.AVATAR_SIZE_28,
            height: _v11.EVENT_CARD_STYLES.AVATAR_SIZE_28,
            width: _v11.EVENT_CARD_STYLES.AVATAR_SIZE_28,
            sx: {
              "& > div": {
                display: "unset !important"
              }
            },
            children: (0, _v1.jsx)(_v2.Avatar, {
              alt: _v0.name ?? "",
              nameProps: {
                color: "blue.400",
                name: _v0.name ?? ""
              },
              size: "auto",
              src: _v0.avatar ?? void 0
            })
          }, `${_v0.name}-${_v0.avatar ?? ""}`))
        })]
      }), _v4 ? (0, _v1.jsx)(_v3.Box, {
        "aria-label": _v0,
        as: "a",
        href: _v4,
        inset: 0,
        position: "absolute",
        zIndex: 1
      }) : null]
    });
  }]);
}