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
    _v12 = _v0.i(0),
    _v13 = _v0.i(0);
  let _v14 = "opacity 200ms ease-in-out",
    _v15 = {
      _after: {
        content: "''",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        _groupHover: {
          background: "linear-gradient(180deg, rgba(14, 18, 22, 0) 0.5%, rgba(14, 18, 22, 0) 50%, rgba(14, 18, 22, 0.3) 100%)"
        }
      }
    },
    _v16 = ({
      src: _v0,
      srcSet: _v1,
      alt: _v2,
      loading: _v3,
      progress: _v4,
      centerDecoration: _v5,
      topLeftDecoration: _v6,
      topRightDecoration: _v7,
      bottomLeftDecoration: _v8,
      bottomRightDecoration: _v9,
      ..._v10
    }) => (0, _v1.jsxs)(_v10.Box, {
      position: "relative",
      minW: "8rem",
      aspectRatio: "16 / 9",
      outline: "0",
      borderRadius: "md",
      overflow: "hidden",
      backgroundColor: "black",
      _focusWithin: {
        '[data-component-id="decoration-wrapper"]': {
          opacity: 1
        }
      },
      "data-group": !0,
      "data-component-id": "video-card-thumbnail",
      ..._v10,
      children: [(0, _v1.jsx)(_v11.AspectRatio, {
        ratio: 16 / 9,
        w: "100%",
        maxW: "100%",
        ...(!!_v8 && _v15),
        children: (0, _v1.jsx)("img", {
          alt: _v2,
          src: _v0,
          srcSet: _v1,
          loading: _v3,
          style: {
            objectFit: "contain",
            userSelect: "none"
          }
        })
      }), _v5 ? (0, _v1.jsx)(_v12.Center, {
        position: "absolute",
        inset: "75",
        children: _v5
      }) : null, _v6 ? (0, _v1.jsx)(_v10.Box, {
        position: "absolute",
        top: "75",
        left: "75",
        transition: _v14,
        _groupHover: {
          opacity: 0
        },
        _groupFocus: {
          opacity: 0
        },
        children: _v6
      }) : null, _v7 ? (0, _v1.jsx)(_v10.Box, {
        position: "absolute",
        top: "75",
        right: "75",
        transition: _v14,
        children: _v7
      }) : null, _v8 ? (0, _v1.jsx)(_v10.Box, {
        position: "absolute",
        bottom: "75",
        left: "75",
        children: _v8
      }) : null, _v9 ? (0, _v1.jsx)(_v10.Box, {
        position: "absolute",
        bottom: "75",
        right: "75",
        children: _v9
      }) : null, _v4 && _v4 > 0 ? (0, _v1.jsx)(_v13.Progress, {
        "aria-label": `${_v4}% complete`,
        bottom: "0",
        left: "4px",
        position: "absolute",
        size: "xs",
        value: _v4,
        width: "calc(100% - 8px)",
        sx: {
          bgColor: "gray.500",
          borderTopRadius: "0",
          borderBottomRadius: "md"
        }
      }) : null]
    });
  var _v17 = _v0.i(0);
  let _v18 = ({
      user: _v0
    }) => (0, _v1.jsx)(_v5.HStack, {
      children: (0, _v1.jsxs)(_v5.HStack, {
        spacing: "50",
        ...(_v0.link && {
          as: "a",
          href: _v0.link,
          "aria-label": `Link to ${_v0.name} user profile`,
          _focusVisible: {
            outlineOffset: "2px",
            outlineColor: "blue.500"
          }
        }),
        children: [(0, _v1.jsx)(_v10.Box, {
          sx: {
            img: {
              width: (0, _v8.rem)(16),
              height: (0, _v8.rem)(16)
            }
          },
          children: (0, _v1.jsx)(_v17.Avatar, {
            alt: _v0.name,
            loading: "lazy",
            size: "xs",
            nameProps: {
              name: _v0.name
            },
            ..._v20(_v0?.pictures?.sizes)
          })
        }), (0, _v1.jsx)(_v6.Text, {
          variant: "body-sm",
          color: "text-primary",
          noOfLines: 1,
          children: _v0.name
        })]
      })
    }),
    _v19 = ({
      user: _v0
    }) => (0, _v1.jsx)(_v17.Avatar, {
      alt: _v0.name,
      size: "xs",
      nameProps: {
        name: _v0.name
      },
      ..._v20(_v0?.pictures?.sizes)
    }),
    _v20 = _v0 => {
      let _v1 = _v0?.find(_v0 => 72 === _v0.width)?.link || _v0?.[1]?.link || "https://i.vimeocdn.com/portrait/default-blue_40x40",
        _v2 = _v0?.find(_v0 => 144 === _v0.width)?.link || _v0?.[2]?.link || "https://i.vimeocdn.com/portrait/default-blue_80x80";
      return {
        src: _v1,
        srcSet: `${_v2} 2x`
      };
    };
  var _v21 = _v0.i(0),
    _v22 = _v0.i(0);
  let _v23 = _v0 => (0, _v1.jsx)(_v21.Badge, {
      size: "sm",
      variant: "timestamp",
      transition: _v14,
      _groupHover: {
        opacity: 0
      },
      ..._v0
    }),
    _v24 = ({
      duration: _v0,
      trackStatus: _v1
    }) => {
      switch (_v1) {
        case "playing":
          return (0, _v1.jsx)(_v23, {
            children: (0, _v9.translate)({
              singular: "Now playing",
              dictionary: {
                es: {
                  singular: "Se están viendo ahora"
                },
                "de-DE": {
                  singular: "Jetzt spielt"
                },
                "fr-FR": {
                  singular: "À l'affiche"
                },
                "ja-JP": {
                  singular: "再生中"
                },
                "ko-KR": {
                  singular: "현재 재생 중"
                },
                "pt-BR": {
                  singular: "Reproduzindo"
                },
                "zh-CN": {
                  singular: "正在播放"
                }
              }
            })
          });
        case "upcoming":
          return (0, _v1.jsx)(_v23, {
            children: (0, _v9.translate)({
              singular: "Upcoming",
              dictionary: {
                es: {
                  singular: "PRÓXIMAMENTE"
                },
                "de-DE": {
                  singular: "IN KÜRZE"
                },
                "fr-FR": {
                  singular: "À VENIR"
                },
                "ja-JP": {
                  singular: "近日配信"
                },
                "ko-KR": {
                  singular: "예정"
                },
                "pt-BR": {
                  singular: "EM BREVE"
                },
                "zh-CN": {
                  singular: "即将上线"
                }
              }
            })
          });
        case "live":
          return (0, _v1.jsx)(_v23, {
            variant: "mature",
            children: (0, _v9.translate)({
              singular: "LIVE",
              dictionary: {
                es: {
                  singular: "En directo"
                },
                "fr-FR": {
                  singular: "DIRECT"
                },
                "pt-BR": {
                  singular: "AO VIVO"
                },
                "zh-CN": {
                  singular: "直播"
                }
              }
            })
          });
        default:
          if (!_v0) return null;
          return (0, _v1.jsx)(_v23, {
            children: (0, _v22.secondsToDisplay)(_v0)
          });
      }
    };
  _v0.s(["VideoCardBadge", 0, _v24], 0);
  var _v25 = _v0.i(0),
    _v26 = _v0.i(0);
  let _v27 = {
      transform: "none",
      border: "2px solid transparent",
      transition: "backgroundColor 200ms ease",
      bgColor: "transparent",
      _dark: {
        bgColor: "transparent"
      }
    },
    _v28 = {
      minW: "9.875rem",
      gap: "75",
      p: "75",
      m: "-8px",
      borderRadius: "lg"
    },
    _v29 = {
      gap: "200",
      px: "300",
      py: "100",
      borderRadius: "none"
    },
    _v30 = (0, _v2.forwardRef)(({
      isReducedMotion: _v0,
      trackStatus: _v1,
      ..._v2
    }, _v3) => {
      let [_v4, _v5] = (0, _v26.useToken)("colors", ["accent", "focus-alt"]);
      return (0, _v1.jsx)(_v25.Card, {
        ref: _v3,
        position: "static",
        ..._v27,
        ...("row" === _v2.direction ? _v29 : _v28),
        ...(_v2.onClick && {
          cursor: "pointer",
          tabIndex: 0,
          _focusVisible: {
            outlineOffset: "2px",
            outlineColor: "focus"
          }
        }),
        borderColor: "playing" === _v1 ? "accent" !== _v4 ? _v4 : _v5 : "transparent",
        _hover: _v0 ? {} : {
          bgColor: "fill-component-hover !important"
        },
        ..._v2
      });
    }),
    _v31 = (0, _v2.forwardRef)(({
      name: _v0,
      user: _v1,
      views: _v2,
      cardDetailsStylingProps: _v3,
      createdTime: _v4,
      description: _v5,
      isReducedMotion: _v6,
      customUserProfile: _v7,
      showUserAvatar: _v8 = !0,
      showUserName: _v9 = !0,
      children: _v10,
      progress: _v11,
      ..._v12
    }, _v13) => {
      let _v14,
        _v15,
        _v16 = (0, _v7.usePrefersReducedMotion)() || _v6,
        _v17 = (0, _v9.translate)({
          singular: "{COUNT} view",
          plural: "{COUNT} views",
          count: _v2 ?? 0,
          replacements: {
            COUNT: (0, _v9.humanize)(_v2 ?? 0)
          },
          dictionary: {
            es: {
              singular: "{COUNT} vista",
              plural: "{COUNT} vistas"
            },
            "de-DE": {
              singular: "{COUNT} Ansicht",
              plural: "{COUNT} Ansichten"
            },
            "fr-FR": {
              singular: "{COUNT} vue",
              plural: "{COUNT} vues"
            },
            "ja-JP": {
              singular: "視聴回数: {COUNT}",
              plural: "視聴回数: {COUNT}"
            },
            "ko-KR": {
              singular: "{COUNT}회",
              plural: "{COUNT}회"
            },
            "pt-BR": {
              singular: "{COUNT} visualização",
              plural: "{COUNT} visualizações"
            },
            "zh-CN": {
              singular: "{COUNT} 观看",
              plural: "{COUNT} 次观看"
            }
          }
        }),
        _v18 = void 0 !== _v2 || void 0 !== _v4,
        _v19 = [void 0 !== _v2 ? _v17 : null, _v4].filter(Boolean).join(" • ");
      if ("thumbnail" in _v12) {
        let {
          thumbnail: _v0,
          ..._v1
        } = _v12;
        _v15 = _v1, _v14 = _v0;
      }
      if (!("thumbnail" in _v12)) {
        let {
          alt: _v0,
          src: _v1,
          srcSet: _v2,
          loading: _v3,
          centerDecoration: _v4,
          topLeftDecoration: _v5,
          topRightDecoration: _v6,
          bottomLeftDecoration: _v7,
          bottomRightDecoration: _v8,
          duration: _v9,
          ..._v10
        } = _v12;
        _v15 = _v10, _v14 = (0, _v1.jsx)(_v16, {
          alt: _v0,
          src: _v1,
          srcSet: _v2,
          loading: _v3,
          progress: _v11,
          centerDecoration: _v4,
          topLeftDecoration: _v5,
          topRightDecoration: _v6,
          bottomLeftDecoration: _v7,
          bottomRightDecoration: _v8 || (0, _v1.jsx)(_v24, {
            trackStatus: _v12.trackStatus,
            duration: _v9
          })
        });
      }
      let _v20 = _v15?.direction === "row";
      return (0, _v1.jsxs)(_v30, {
        "data-group": !0,
        isReducedMotion: _v16,
        ..._v15,
        ref: _v13,
        children: [_v14, (0, _v1.jsxs)(_v5.HStack, {
          align: "flex-start",
          flex: "1",
          ..._v3,
          children: [_v7 ? (0, _v1.jsx)(_v3.CardBody, {
            display: "flex",
            flexDirection: "column",
            gap: "50",
            flex: "1",
            children: _v7
          }) : null, _v7 ? null : (0, _v1.jsxs)(_v1.Fragment, {
            children: [_v1 && _v8 && !_v20 ? (0, _v1.jsx)(_v19, {
              user: _v1
            }) : null, (0, _v1.jsxs)(_v3.CardBody, {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: (0, _v8.rem)(4),
              flex: "1",
              h: "100%",
              children: [_v0 && (0, _v1.jsx)(_v6.Text, {
                title: _v0,
                variant: "heading-sm",
                color: "text-primary",
                noOfLines: 1,
                wordBreak: "break-all",
                children: _v0
              }), _v1 && _v20 ? (0, _v1.jsx)(_v18, {
                user: _v1
              }) : null, _v1 && _v9 && !_v20 ? (0, _v1.jsx)(_v6.Text, {
                variant: "body-sm",
                color: "text-primary",
                noOfLines: 1,
                children: _v1.name
              }) : null, _v5 ? (0, _v1.jsx)(_v6.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 3,
                mt: "1",
                children: _v5
              }) : null, _v18 ? (0, _v1.jsx)(_v6.Text, {
                variant: "body-sm",
                color: "text-secondary",
                noOfLines: 1,
                children: _v19
              }) : null]
            })]
          }), _v10 ? (0, _v1.jsx)(_v4.CardFooter, {
            children: _v10
          }) : null]
        })]
      });
    });
  _v0.s(["VideoCard", 0, _v31], 0);
}