{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0),
    _v8 = _v0.i(0);
  let _v9 = (_v0, _v1 = 0) => `calc(100vh - ${Math.max(_v0 - _v1, 0)}px)`;
  _v0.s(["PlayerWrapper", 0, ({
    children: _v0,
    thumbnailUrl: _v1,
    backgroundColor: _v2,
    aspectRatio: _v3,
    matchPageBackgroundBands: _v4 = !1,
    maxHeightOffset: _v5 = 0,
    mobileMaxHeight: _v6,
    playerTopGap: _v7 = !1,
    globalNavigationHidden: _v8 = !1,
    isSticky: _v9 = !0,
    outerContainerHeight: _v10 = "100vh",
    glow: _v11,
    ..._v12
  }) => {
    let [_v13] = (0, _v4.useMediaQuery)("(orientation: landscape)"),
      [_v14, _v15] = (0, _v5.useToken)("space", ["space.200", "space.300"]),
      {
        isShowcaseLayout: _v16,
        isSideBySideActive: _v17
      } = (0, _v8.useLayout)(),
      _v18 = _v8 ? 0 : _v6.NAV_HEIGHT,
      {
        isVisible: _v19,
        elementRef: _v20
      } = (0, _v7.useIntersectionVisibility)(240 + _v18),
      _v21 = _v9 && !_v19 && !_v17,
      _v22 = _v16 ? _v6.SHOWCASE_REVEAL_HEIGHT : _v6.REVEAL_HEIGHT,
      _v23 = _v16 ? _v6.SHOWCASE_REVEAL_HEIGHT_LARGE : _v6.REVEAL_HEIGHT_LARGE,
      _v24 = {
        base: _v13 ? _v9(_v8 ? 0 : _v6.NAV_HEIGHT, _v5) : _v6 || _v9(_v22, _v5),
        md: _v9(_v22, _v5),
        xl: _v9(_v23, _v5)
      };
    return (0, _v1.jsx)(_v3.Box, {
      ref: _v20,
      as: _v2.motion.div,
      w: "100%",
      h: {
        base: _v6 || "100%",
        md: _v17 ? "100%" : _v10
      },
      minH: {
        base: "200px",
        lg: "420px",
        xl: _v21 ? "240px" : "420px"
      },
      maxH: _v24,
      aspectRatio: _v3 ?? "16/9",
      borderRadius: {
        base: 0,
        md: _v17 ? "drawer" : 0
      },
      overflow: "hidden",
      ...(_v16 && {
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        }
      }),
      ..._v12,
      children: (0, _v1.jsxs)(_v3.Box, {
        w: "100%",
        h: {
          base: "inherit",
          xl: _v21 ? "240px" : "inherit"
        },
        minH: {
          base: "inherit",
          xl: _v21 ? "240px" : "inherit"
        },
        maxH: "inherit",
        backgroundColor: _v17 && !_v11 ? "transparent" : _v4 ? "background" : _v2 || "surface",
        position: _v17 ? "relative" : {
          base: "relative",
          md: "absolute",
          xl: _v21 ? "fixed" : "absolute"
        },
        top: {
          base: 0,
          md: _v7 && !_v17 ? _v14 : 0,
          lg: _v7 && !_v17 ? _v15 : 0,
          xl: _v21 ? _v18 : _v7 && !_v17 ? _v15 : 0
        },
        left: 0,
        bgSize: "contain",
        bgPosition: "center",
        bgRepeat: "no-repeat",
        zIndex: 2,
        ...(_v1 && {
          bgImage: `url(${_v1})`
        }),
        sx: {
          "button#chapters-control-bar-button": {
            display: "none"
          },
          ...(_v11 && !_v4 && {
            ".vp-video-wrapper, .player.js-player": {
              backgroundColor: "transparent !important"
            }
          }),
          ...(_v4 && {
            ".player.js-player:not(:fullscreen):not(.js-player-fullscreen-api)": {
              backgroundColor: "transparent !important",
              ".vp-video-wrapper": {
                backgroundColor: "transparent !important"
              }
            }
          })
        },
        children: [_v11, _v0]
      })
    }, "player-wrapper");
  }], 0);
  var _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0);
  let _v18 = ({
      w: _v0 = "100%",
      h: _v1 = "2xs"
    }) => (0, _v1.jsx)(_v15.Skeleton, {
      w: _v0,
      h: _v1,
      borderRadius: "pill"
    }),
    _v19 = ({
      w: _v0 = "md",
      h: _v1 = "md"
    }) => (0, _v1.jsx)(_v15.Skeleton, {
      w: _v0,
      h: _v1,
      borderRadius: "round"
    }),
    _v20 = ({
      name: _v0,
      image: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v11.Avatar, {
        alt: _v0,
        src: _v1,
        size: "sm",
        nameProps: {
          name: _v0
        }
      }), (0, _v1.jsx)(_v14.Text, {
        as: "span",
        variant: "heading-xs",
        children: _v0
      })]
    });
  _v0.s(["SkeletonCircle", 0, _v19, "SkeletonRow", 0, _v18, "VideoDetailsSkeleton", 0, ({
    title: _v0 = "",
    description: _v1,
    user: _v2,
    showUserInfo: _v3 = !1
  }) => (0, _v1.jsxs)(_v12.Flex, {
    direction: "column",
    gap: 100,
    p: {
      base: 200,
      md: 300
    },
    children: [_v0 ? (0, _v1.jsx)(_v14.Text, {
      as: "h1",
      variant: {
        base: "heading-md",
        md: "heading-lg",
        xl: "heading-xl"
      },
      minW: "0",
      style: {
        hyphens: "auto"
      },
      children: _v0
    }) : (0, _v1.jsx)(_v18, {
      w: "90%",
      h: "md"
    }), (0, _v1.jsx)(_v13.HStack, {
      my: 100,
      children: _v3 && _v2?.name && _v2?.image ? (0, _v1.jsx)(_v20, {
        name: _v2.name,
        image: _v2.image
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v19, {
          h: "xs",
          w: "xs"
        }), (0, _v1.jsx)(_v18, {
          w: "30%",
          h: "xs"
        })]
      })
    }), (0, _v1.jsxs)(_v16.Show, {
      above: "md",
      children: [_v1 ? (0, _v1.jsx)(_v3.Box, {
        fontSize: "text-sm",
        lineHeight: "text-sm",
        children: (0, _v10.default)(_v1)
      }) : null, (0, _v1.jsx)(_v18, {
        w: "90%",
        h: "2xs"
      }), (0, _v1.jsx)(_v18, {
        w: "100%",
        h: "2xs"
      }), (0, _v1.jsx)(_v18, {
        w: "90%",
        h: "2xs"
      }), (0, _v1.jsx)(_v18, {
        w: "30%",
        h: "2xs"
      })]
    }), (0, _v1.jsxs)(_v17.Hide, {
      above: "md",
      children: [_v1 ? (0, _v1.jsx)(_v3.Box, {
        fontSize: "text-sm",
        lineHeight: "text-sm",
        mb: 100,
        children: (0, _v10.default)(_v1)
      }) : null, (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v18, {
          w: "90%",
          h: "2xs"
        }), (0, _v1.jsx)(_v18, {
          w: "100%",
          h: "2xs"
        }), (0, _v1.jsx)(_v18, {
          w: "90%",
          h: "2xs"
        }), (0, _v1.jsx)(_v18, {
          w: "30%",
          h: "2xs"
        }), (0, _v1.jsxs)(_v13.HStack, {
          my: 100,
          children: [(0, _v1.jsx)(_v18, {
            w: "20%",
            h: "xs"
          }), (0, _v1.jsx)(_v18, {
            w: "20%",
            h: "xs"
          }), (0, _v1.jsx)(_v18, {
            w: "20%",
            h: "xs"
          })]
        })]
      })]
    })]
  })], 0);
}