{
  "use strict";

  var _v1 = _v0.i(0),
    _v2 = _v0.i(0),
    _v3 = _v0.i(0),
    _v4 = _v0.i(0),
    _v5 = _v0.i(0),
    _v6 = _v0.i(0),
    _v7 = _v0.i(0);
  _v0.s(["PlayerWrapper", 0, ({
    children: _v0,
    thumbnailUrl: _v1,
    backgroundColor: _v2,
    aspectRatio: _v3,
    globalNavigationHidden: _v4 = !1,
    isSticky: _v5 = !0,
    outerContainerHeight: _v6 = "100vh",
    glow: _v7,
    ..._v8
  }) => {
    let [_v9] = (0, _v4.useMediaQuery)("(orientation: landscape)"),
      {
        isShowcaseLayout: _v10,
        isSideBySideActive: _v11
      } = (0, _v7.useLayout)(),
      {
        isVisible: _v12,
        elementRef: _v13
      } = (0, _v6.useIntersectionVisibility)(240 + _v5.NAV_HEIGHT),
      _v14 = _v5 && !_v12 && !_v11,
      _v15 = _v4 ? 0 : _v5.NAV_HEIGHT,
      _v16 = _v10 ? _v5.SHOWCASE_REVEAL_HEIGHT : _v5.REVEAL_HEIGHT,
      _v17 = _v10 ? _v5.SHOWCASE_REVEAL_HEIGHT_LARGE : _v5.REVEAL_HEIGHT_LARGE,
      _v18 = {
        base: _v9 ? `calc(100vh - ${_v5.NAV_HEIGHT}px)` : `calc(100vh - ${_v16}px)`,
        md: `calc(100vh - ${_v16}px)`,
        xl: `calc(100vh - ${_v17}px)`
      };
    return (0, _v1.jsx)(_v3.Box, {
      ref: _v13,
      as: _v2.motion.div,
      w: "100%",
      h: {
        base: "100%",
        md: _v11 ? "100%" : _v6
      },
      minH: {
        base: "200px",
        lg: "420px",
        xl: _v14 ? "240px" : "420px"
      },
      maxH: _v18,
      aspectRatio: _v3 ?? "16/9",
      borderRadius: {
        base: 0,
        md: _v11 ? "drawer" : 0
      },
      overflow: "hidden",
      ...(_v10 && {
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
      ..._v8,
      children: (0, _v1.jsxs)(_v3.Box, {
        w: "100%",
        h: {
          base: "inherit",
          xl: _v14 ? "240px" : "inherit"
        },
        minH: {
          base: "inherit",
          xl: _v14 ? "240px" : "inherit"
        },
        maxH: "inherit",
        backgroundColor: _v11 && !_v7 ? "transparent" : _v2 || "surface",
        position: _v11 ? "relative" : {
          base: "relative",
          md: "absolute",
          xl: _v14 ? "fixed" : "absolute"
        },
        top: {
          base: 0,
          xl: _v14 ? _v15 : 0
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
          ...(_v7 && {
            ".vp-video-wrapper, .player.js-player": {
              backgroundColor: "transparent !important"
            }
          })
        },
        children: [_v7, _v0]
      })
    }, "player-wrapper");
  }], 0);
  var _v8 = _v0.i(0),
    _v9 = _v0.i(0),
    _v10 = _v0.i(0),
    _v11 = _v0.i(0),
    _v12 = _v0.i(0),
    _v13 = _v0.i(0),
    _v14 = _v0.i(0),
    _v15 = _v0.i(0);
  let _v16 = ({
      w: _v0 = "100%",
      h: _v1 = "2xs"
    }) => (0, _v1.jsx)(_v13.Skeleton, {
      w: _v0,
      h: _v1,
      borderRadius: "pill"
    }),
    _v17 = ({
      w: _v0 = "md",
      h: _v1 = "md"
    }) => (0, _v1.jsx)(_v13.Skeleton, {
      w: _v0,
      h: _v1,
      borderRadius: "round"
    }),
    _v18 = ({
      name: _v0,
      image: _v1
    }) => (0, _v1.jsxs)(_v1.Fragment, {
      children: [(0, _v1.jsx)(_v9.Avatar, {
        alt: _v0,
        src: _v1,
        size: "sm",
        nameProps: {
          name: _v0
        }
      }), (0, _v1.jsx)(_v12.Text, {
        as: "span",
        variant: "heading-xs",
        children: _v0
      })]
    });
  _v0.s(["SkeletonCircle", 0, _v17, "SkeletonRow", 0, _v16, "VideoDetailsSkeleton", 0, ({
    title: _v0 = "",
    description: _v1,
    user: _v2,
    showUserInfo: _v3 = !1
  }) => (0, _v1.jsxs)(_v10.Flex, {
    direction: "column",
    gap: 100,
    p: {
      base: 200,
      md: 300
    },
    children: [_v0 ? (0, _v1.jsx)(_v12.Text, {
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
    }) : (0, _v1.jsx)(_v16, {
      w: "90%",
      h: "md"
    }), (0, _v1.jsx)(_v11.HStack, {
      my: 100,
      children: _v3 && _v2?.name && _v2?.image ? (0, _v1.jsx)(_v18, {
        name: _v2.name,
        image: _v2.image
      }) : (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v17, {
          h: "xs",
          w: "xs"
        }), (0, _v1.jsx)(_v16, {
          w: "30%",
          h: "xs"
        })]
      })
    }), (0, _v1.jsxs)(_v14.Show, {
      above: "md",
      children: [_v1 ? (0, _v1.jsx)(_v3.Box, {
        fontSize: "text-sm",
        lineHeight: "text-sm",
        children: (0, _v8.default)(_v1)
      }) : null, (0, _v1.jsx)(_v16, {
        w: "90%",
        h: "2xs"
      }), (0, _v1.jsx)(_v16, {
        w: "100%",
        h: "2xs"
      }), (0, _v1.jsx)(_v16, {
        w: "90%",
        h: "2xs"
      }), (0, _v1.jsx)(_v16, {
        w: "30%",
        h: "2xs"
      })]
    }), (0, _v1.jsxs)(_v15.Hide, {
      above: "md",
      children: [_v1 ? (0, _v1.jsx)(_v3.Box, {
        fontSize: "text-sm",
        lineHeight: "text-sm",
        mb: 100,
        children: (0, _v8.default)(_v1)
      }) : null, (0, _v1.jsxs)(_v1.Fragment, {
        children: [(0, _v1.jsx)(_v16, {
          w: "90%",
          h: "2xs"
        }), (0, _v1.jsx)(_v16, {
          w: "100%",
          h: "2xs"
        }), (0, _v1.jsx)(_v16, {
          w: "90%",
          h: "2xs"
        }), (0, _v1.jsx)(_v16, {
          w: "30%",
          h: "2xs"
        }), (0, _v1.jsxs)(_v11.HStack, {
          my: 100,
          children: [(0, _v1.jsx)(_v16, {
            w: "20%",
            h: "xs"
          }), (0, _v1.jsx)(_v16, {
            w: "20%",
            h: "xs"
          }), (0, _v1.jsx)(_v16, {
            w: "20%",
            h: "xs"
          })]
        })]
      })]
    })]
  })], 0);
}