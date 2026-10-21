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
    _v13 = _v0.i(0),
    _v14 = _v0.i(0);
  let _v15 = ({
      children: _v0,
      accessory: _v1,
      inline: _v2 = !1,
      color: _v3 = "text-tertiary"
    }) => {
      let _v4 = (0, _v14.useResponsiveStylingToken)(),
        _v5 = _v4("100%", (0, _v8.rem)(240));
      return (0, _v1.jsxs)(_v5.Flex, {
        flexShrink: +!!_v2,
        gap: "sm",
        width: _v2 ? void 0 : _v5,
        children: [(0, _v1.jsx)(_v7.Text, {
          color: _v3,
          variant: _v4("heading-md", "heading-lg"),
          display: "flex",
          alignItems: "center",
          height: (0, _v8.rem)(48),
          children: _v0
        }), _v1]
      });
    },
    _v16 = ({
      stackedGap: _v0 = "md",
      children: _v1
    }) => {
      let _v2 = (0, _v14.useResponsiveStylingToken)();
      return (0, _v1.jsx)(_v5.Flex, {
        direction: _v2("column", "row"),
        gap: _v2(_v0, "xl"),
        pt: "lg",
        pb: "md",
        px: "md",
        children: _v1
      });
    },
    _v17 = ({
      gap: _v0 = "md",
      children: _v1
    }) => (0, _v1.jsx)(_v5.Flex, {
      direction: "column",
      flex: "1",
      gap: _v0,
      minW: 0,
      children: _v1
    });
  _v0.s(["SectionContent", 0, _v17, "SectionHeader", 0, _v15, "SectionOneColumnWrapper", 0, ({
    children: _v0
  }) => {
    let _v1 = (0, _v14.useResponsiveStylingToken)();
    return (0, _v1.jsx)(_v5.Flex, {
      justify: "space-between",
      align: "center",
      gap: "sm",
      pt: _v1(_v13.SECTION_ONE_COLUMN_STYLES.MOBILE_TOP_PADDING_16, _v13.SECTION_ONE_COLUMN_STYLES.DESKTOP_TOP_PADDING_24),
      pb: _v1(_v13.SECTION_ONE_COLUMN_STYLES.MOBILE_BOTTOM_PADDING_8, _v13.SECTION_ONE_COLUMN_STYLES.DESKTOP_BOTTOM_PADDING_16),
      pl: _v13.SECTION_ONE_COLUMN_STYLES.LEFT_PADDING_16,
      pr: _v1(_v13.SECTION_ONE_COLUMN_STYLES.MOBILE_RIGHT_PADDING_8, _v13.SECTION_ONE_COLUMN_STYLES.DESKTOP_RIGHT_PADDING_16),
      children: _v0
    });
  }, "SectionTwoColumnsWrapper", 0, _v16], 0);
  let _v18 = ({
      src: _v0,
      isLive: _v1
    }) => {
      let _v2 = (0, _v14.useResponsiveStylingToken)();
      return (0, _v1.jsxs)(_v3.Box, {
        backgroundColor: "gray.400",
        border: "0.5px solid",
        borderColor: "stroke",
        borderRadius: "md",
        flexShrink: 0,
        height: _v2(_v13.AGENDA_STYLES.MOBILE_THUMBNAIL_HEIGHT_68, _v13.AGENDA_STYLES.DESKTOP_THUMBNAIL_HEIGHT_80),
        overflow: "hidden",
        position: "relative",
        width: _v2(_v13.AGENDA_STYLES.MOBILE_THUMBNAIL_WIDTH_120, _v13.AGENDA_STYLES.DESKTOP_THUMBNAIL_WIDTH_142),
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
      });
    },
    _v19 = ({
      item: _v0
    }) => {
      let _v1 = (0, _v14.useResponsiveStylingToken)(),
        _v2 = _v0.description?.trim();
      return (0, _v1.jsxs)(_v5.Flex, {
        align: "center",
        borderRadius: "xl",
        gap: "md",
        p: (0, _v8.rem)(12),
        position: "relative",
        role: "group",
        _hover: {
          backgroundColor: "fill-component-hover"
        },
        children: [(0, _v1.jsx)(_v18, {
          isLive: _v0.isLive,
          src: _v0.thumbnailSrc
        }), (0, _v1.jsxs)(_v5.Flex, {
          direction: "column",
          flex: "1",
          gap: "xs",
          minW: 0,
          children: [(0, _v1.jsx)(_v7.Text, {
            color: "text-primary",
            fontSize: _v1(_v13.AGENDA_STYLES.MOBILE_TITLE_18, _v13.AGENDA_STYLES.DESKTOP_TITLE_20),
            noOfLines: 1,
            variant: "heading-md",
            children: _v0.title
          }), _v0.time ? (0, _v1.jsx)(_v7.Text, {
            color: "text-secondary",
            noOfLines: 1,
            variant: "body-md",
            children: _v0.time
          }) : null, _v2 ? (0, _v1.jsx)(_v3.Box, {
            display: _v1(_v13.AGENDA_STYLES.MOBILE_DESCRIPTION_DISPLAY, _v13.AGENDA_STYLES.DESKTOP_DESCRIPTION_DISPLAY),
            children: (0, _v1.jsx)(_v7.Text, {
              color: "text-secondary",
              noOfLines: 1,
              variant: "body-md",
              children: _v2
            })
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
    _v20 = ({
      label: _v0,
      ordinal: _v1,
      events: _v2,
      defaultExpanded: _v3
    }) => {
      let [_v4, _v5] = (0, _v2.useState)(_v3),
        _v6 = (0, _v14.useResponsiveStylingToken)(),
        _v7 = _v6(_v13.AGENDA_STYLES.MOBILE_ACCORDION_ICON_SIZE_24, _v13.AGENDA_STYLES.DESKTOP_ACCORDION_ICON_SIZE_36);
      return (0, _v1.jsxs)(_v3.Box, {
        backgroundColor: "fill-surface",
        borderRadius: "xl",
        overflow: "hidden",
        p: "sm",
        children: [(0, _v1.jsxs)(_v5.Flex, {
          align: "center",
          as: "button",
          justify: "space-between",
          backgroundColor: "unset",
          onClick: () => _v5(_v0 => !_v0),
          px: "md",
          py: "sm",
          textAlign: "left",
          type: "button",
          w: "100%",
          children: [(0, _v1.jsxs)(_v7.Text, {
            color: "text-primary",
            variant: _v6(_v13.AGENDA_STYLES.MOBILE_ACCORDION_LABEL_20, _v13.AGENDA_STYLES.DESKTOP_ACCORDION_LABEL_30),
            children: [_v0, _v1 ? (0, _v1.jsx)(_v3.Box, {
              as: "sup",
              fontSize: _v13.AGENDA_STYLES.ORDINAL_FONT_SIZE,
              children: _v1
            }) : null]
          }), (0, _v1.jsx)(_v5.Flex, {
            align: "center",
            color: "text-primary",
            justify: "center",
            children: _v4 ? (0, _v1.jsx)(_v10.ChevronUp, {
              boxSize: _v7
            }) : (0, _v1.jsx)(_v9.ChevronDown, {
              boxSize: _v7
            })
          })]
        }), (0, _v1.jsx)(_v4.Collapse, {
          in: _v4,
          unmountOnExit: !0,
          children: (0, _v1.jsx)(_v5.Flex, {
            direction: "column",
            gap: "md",
            pt: "md",
            children: _v2.map(_v0 => (0, _v1.jsx)(_v19, {
              item: _v0
            }, _v0.key))
          })
        })]
      });
    };
  _v0.s(["AgendaSection", 0, ({
    groups: _v0,
    emptyState: _v1
  }) => {
    let _v2 = (0, _v14.useResponsiveStylingToken)();
    return 0 !== _v0.length || _v1 ? (0, _v1.jsx)(_v5.Flex, {
      direction: "column",
      id: "agenda",
      width: "100%",
      children: (0, _v1.jsxs)(_v16, {
        stackedGap: "lg",
        children: [(0, _v1.jsx)(_v15, {
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
        }), (0, _v1.jsx)(_v17, {
          gap: _v2(_v13.AGENDA_STYLES.MOBILE_DAY_GAP_16, _v13.AGENDA_STYLES.DESKTOP_DAY_GAP_24),
          children: 0 === _v0.length ? _v1 : _v0.map((_v0, _v1) => (0, _v1.jsx)(_v20, {
            label: _v0.label,
            ordinal: _v0.ordinal,
            events: _v0.events,
            defaultExpanded: 0 === _v1
          }, _v0.key))
        })]
      })
    }) : null;
  }], 0);
}