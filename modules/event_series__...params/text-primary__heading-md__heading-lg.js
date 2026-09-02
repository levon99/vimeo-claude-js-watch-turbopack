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
  let _v13 = ({
      children: _v0,
      accessory: _v1,
      inline: _v2 = !1,
      isMobilePreview: _v3 = !1,
      color: _v4 = "text-primary"
    }) => {
      let _v5 = _v3 ? "100%" : {
        base: "100%",
        md: (0, _v8.rem)(240)
      };
      return (0, _v1.jsxs)(_v5.Flex, {
        flexShrink: +!!_v2,
        gap: "sm",
        width: _v2 ? void 0 : _v5,
        children: [(0, _v1.jsx)(_v7.Text, {
          color: _v4,
          variant: _v3 ? "heading-md" : {
            base: "heading-md",
            md: "heading-lg"
          },
          children: _v0
        }), _v1]
      });
    },
    _v14 = ({
      isMobilePreview: _v0,
      children: _v1
    }) => (0, _v1.jsx)(_v5.Flex, {
      direction: _v0 ? "column" : {
        base: "column",
        md: "row"
      },
      gap: _v0 ? "md" : {
        base: "md",
        md: "xl"
      },
      pt: "lg",
      pb: "md",
      px: "md",
      children: _v1
    }),
    _v15 = ({
      children: _v0
    }) => (0, _v1.jsx)(_v5.Flex, {
      direction: "column",
      flex: "1",
      gap: "md",
      minW: 0,
      children: _v0
    });
  _v0.s(["SectionContent", 0, _v15, "SectionHeader", 0, _v13, "SectionOneColumnWrapper", 0, ({
    children: _v0
  }) => (0, _v1.jsx)(_v5.Flex, {
    justify: "space-between",
    align: "center",
    gap: "sm",
    pt: "lg",
    pb: "md",
    px: "md",
    children: _v0
  }), "SectionTwoColumnsWrapper", 0, _v14], 0);
  let _v16 = ({
      src: _v0,
      isLive: _v1
    }) => (0, _v1.jsxs)(_v3.Box, {
      backgroundColor: "gray.400",
      border: "0.5px solid",
      borderColor: "stroke",
      borderRadius: "sm",
      flexShrink: 0,
      height: (0, _v8.rem)(80),
      overflow: "hidden",
      position: "relative",
      width: (0, _v8.rem)(142),
      children: [_v0 ? (0, _v1.jsx)(_v6.Image, {
        alt: "",
        height: "100%",
        objectFit: "cover",
        src: _v0,
        width: "100%"
      }) : null, _v1 ? (0, _v1.jsx)(_v3.Box, {
        left: "xs",
        position: "absolute",
        top: "xs",
        zIndex: 2,
        children: (0, _v1.jsx)(_v11.CardBadge, {
          format: "live",
          size: "sm",
          children: (0, _v12.translate)({
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
    }),
    _v17 = ({
      item: _v0
    }) => {
      let _v1 = _v0.description?.trim();
      return (0, _v1.jsxs)(_v5.Flex, {
        align: "center",
        borderRadius: "md",
        gap: "md",
        p: "sm",
        position: "relative",
        role: "group",
        _hover: {
          backgroundColor: "fill-surface-hover"
        },
        children: [(0, _v1.jsx)(_v16, {
          isLive: _v0.isLive,
          src: _v0.thumbnailSrc
        }), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          flex: "1",
          gap: "xs",
          minW: 0,
          children: [(0, _v1.jsx)(_v7.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-sm",
            children: _v0.title
          }), _v0.time ? (0, _v1.jsx)(_v7.Text, {
            color: "text-secondary",
            noOfLines: 1,
            variant: "body-sm",
            children: _v0.time
          }) : null, _v1 ? (0, _v1.jsx)(_v7.Text, {
            color: "text-secondary",
            noOfLines: 2,
            variant: "body-sm",
            children: _v1
          }) : null]
        }), _v0.link ? (0, _v1.jsx)(_v3.Box, {
          "aria-label": _v0.title,
          as: "a",
          href: _v0.link,
          inset: 0,
          position: "absolute",
          zIndex: 1
        }) : null]
      });
    },
    _v18 = ({
      label: _v0,
      events: _v1
    }) => {
      let [_v2, _v3] = (0, _v2.useState)(!1);
      return (0, _v1.jsxs)(_v3.Box, {
        backgroundColor: "fill-surface",
        borderRadius: "lg",
        overflow: "hidden",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          align: "center",
          as: "button",
          justify: "space-between",
          backgroundColor: "unset",
          onClick: () => _v3(_v0 => !_v0),
          px: "md",
          py: "md",
          textAlign: "left",
          type: "button",
          w: "100%",
          children: [(0, _v1.jsx)(_v7.Text, {
            color: "text-primary",
            variant: "heading-md",
            children: _v0
          }), (0, _v1.jsx)(_v5.Flex, {
            align: "center",
            color: "text-primary",
            justify: "center",
            children: _v2 ? (0, _v1.jsx)(_v10.ChevronUp, {}) : (0, _v1.jsx)(_v9.ChevronDown, {})
          })]
        }), (0, _v1.jsx)(_v4.Collapse, {
          in: _v2,
          unmountOnExit: !0,
          children: (0, _v1.jsx)(_v5.Flex, {
            direction: "column",
            gap: "xs",
            pb: "sm",
            px: "sm",
            children: _v1.map(_v0 => (0, _v1.jsx)(_v17, {
              item: _v0
            }, _v0.key))
          })
        })]
      });
    };
  _v0.s(["AgendaSection", 0, ({
    groups: _v0,
    isMobilePreview: _v1 = !1,
    emptyState: _v2
  }) => 0 !== _v0.length || _v2 ? (0, _v1.jsx)(_v5.Flex, {
    direction: "column",
    id: "agenda",
    width: "100%",
    children: (0, _v1.jsxs)(_v14, {
      isMobilePreview: _v1,
      children: [(0, _v1.jsx)(_v13, {
        isMobilePreview: _v1,
        children: (0, _v12.translate)({
          singular: "Agenda",
          dictionary: {
            "ja-JP": {
              singular: "アジェンダ"
            },
            "ko-KR": {
              singular: "일정"
            },
            "zh-CN": {
              singular: "议程"
            }
          }
        })
      }), (0, _v1.jsx)(_v15, {
        children: 0 === _v0.length ? _v2 : _v0.map(_v0 => (0, _v1.jsx)(_v18, {
          events: _v0.events,
          label: _v0.label
        }, _v0.key))
      })]
    })
  }) : null], 0);
  var _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0);
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
    return (0, _v1.jsxs)(_v5.Flex, {
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
        children: [(0, _v1.jsx)(_v21.EventThumbnail, {
          src: _v5
        }), _v3 ? (0, _v1.jsx)(_v3.Box, {
          left: "sm",
          position: "absolute",
          top: "sm",
          zIndex: 2,
          children: (0, _v1.jsx)(_v11.CardBadge, {
            format: "live",
            size: "sm",
            children: (0, _v12.translate)({
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
      }), (0, _v1.jsxs)(_v5.Flex, {
        direction: "column",
        gap: "sm",
        pl: "sm",
        children: [_v2 ? (0, _v1.jsxs)(_v5.Flex, {
          align: "center",
          gap: "sm",
          children: [(0, _v1.jsx)(_v20.Calendar, {
            boxSize: "2xs",
            color: "var(--vimeo-colors-text-secondary)"
          }), (0, _v1.jsx)(_v7.Text, {
            color: "text-secondary",
            lineHeight: (0, _v8.rem)(16),
            variant: "body-md",
            whiteSpace: "nowrap",
            children: _v2
          })]
        }) : null, (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          gap: "xs",
          children: [(0, _v1.jsx)(_v7.Text, {
            color: "text-primary",
            noOfLines: 1,
            variant: "heading-md",
            children: _v0
          }), (0, _v1.jsx)(_v3.Box, {
            minHeight: (0, _v8.rem)(40),
            children: _v7 ? (0, _v1.jsx)(_v7.Text, {
              color: "text-secondary",
              noOfLines: 2,
              variant: "body-md",
              children: _v7
            }) : null
          })]
        }), (0, _v1.jsx)(_v5.Flex, {
          align: "center",
          minHeight: (0, _v8.rem)(28),
          children: _v8.map((_v0, _v1) => (0, _v1.jsx)(_v3.Box, {
            ml: 0 === _v1 ? 0 : (0, _v8.rem)(-4),
            children: (0, _v1.jsx)(_v19.Avatar, {
              alt: _v0.name ?? "",
              nameProps: {
                name: _v0.name ?? ""
              },
              size: "xs",
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
  }], 0);
}