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
    _v14 = _v0.i(0),
    _v15 = _v0.i(0),
    _v16 = _v0.i(0),
    _v17 = _v0.i(0),
    _v18 = _v0.i(0),
    _v19 = _v0.i(0);
  let _v20 = (0, _v2.default)(async () => {
      let {
        UserCard: _v0
      } = await _v0.A(0);
      return {
        default: _v0
      };
    }, {
      loadableGenerated: {
        modules: [0]
      }
    }),
    _v21 = (0, _v4.createContext)({
      isSelected: !1
    }),
    _v22 = ({
      children: _v0,
      isDisabled: _v1 = !1,
      isDragging: _v2 = !1,
      isSelected: _v3 = !1,
      isHoverDisabled: _v4 = !1,
      href: _v5,
      onToggleSelected: _v6,
      width: _v7,
      minWidth: _v8,
      height: _v9,
      onClick: _v10,
      ariaLabel: _v11,
      tabIndex: _v12,
      shouldUseNextLink: _v13 = !0,
      isEditingContentTitle: _v14 = !1,
      hoverZIndex: _v15,
      ..._v16
    }) => {
      let _v17 = "rgba(23, 213, 255, 0.06)";
      return (0, _v1.jsxs)(_v8.Flex, {
        as: _v14 ? "section" : "div",
        position: "relative",
        isolation: "isolate",
        backgroundColor: _v3 || _v2 ? _v17 : "transparent",
        borderColor: _v3 || _v2 ? "vimeoBlue.500" : "transparent",
        borderRadius: "lg",
        borderWidth: ".125rem",
        direction: "column",
        gap: "0.5rem",
        opacity: _v1 ? .5 : 1,
        padding: "0.5rem",
        role: "group",
        transition: "background-color 0.2s ease, border-color 0.2s ease",
        _hover: {
          backgroundColor: _v4 ? "none" : _v17,
          ...(null != _v15 ? {
            zIndex: _v15
          } : {})
        },
        _focusWithin: {
          ...(null != _v15 ? {
            zIndex: _v15
          } : {})
        },
        cursor: _v4 ? "default" : "pointer",
        width: _v7,
        minWidth: _v8,
        height: _v9,
        flex: "none",
        onClick: _v10,
        tabIndex: _v12,
        ..._v16,
        children: [!_v14 && _v5 && (_v13 ? (0, _v1.jsx)(_v5.Box, {
          as: _v3.default,
          href: _v5,
          "aria-label": _v11,
          "data-testid": "content-card-link",
          position: "absolute",
          inset: "0",
          zIndex: "1",
          borderRadius: "lg",
          _focus: {
            boxShadow: "outline"
          }
        }) : (0, _v1.jsx)(_v5.Box, {
          as: "a",
          href: _v5,
          "aria-label": _v11,
          "data-testid": "content-card-link",
          position: "absolute",
          inset: "0",
          zIndex: "1",
          borderRadius: "lg",
          _focus: {
            boxShadow: "outline"
          }
        })), (0, _v1.jsx)(_v5.Box, {
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          position: "relative",
          zIndex: "2",
          pointerEvents: "none",
          sx: {
            'a, button, input, label, [role="button"], [data-clickable]': {
              pointerEvents: "auto"
            }
          },
          children: (0, _v1.jsx)(_v21.Provider, {
            value: {
              isSelected: _v3,
              onToggleSelected: _v6
            },
            children: _v0
          })
        })]
      });
    };
  _v22.Body = ({
    children: _v0,
    aspectRatio: _v1 = "16 / 9",
    onMouseEnter: _v2,
    onMouseLeave: _v3
  }) => (0, _v1.jsx)(_v5.Box, {
    aspectRatio: _v1,
    position: "relative",
    width: "100%",
    onMouseEnter: _v2,
    onMouseLeave: _v3,
    children: _v0
  }), _v22.Badge = ({
    children: _v0,
    variant: _v1 = "default",
    ..._v2
  }) => (0, _v1.jsx)(_v11.Badge, {
    position: "absolute",
    size: "sm",
    variant: _v1,
    fontWeight: "500",
    bottom: (0, _v13.rem)(8),
    right: (0, _v13.rem)(8),
    ..._v2,
    children: _v0
  }), _v22.HoverActions = ({
    children: _v0
  }) => (0, _v1.jsx)(_v12.VStack, {
    position: "absolute",
    top: "8px",
    right: "8px",
    gap: ".25rem",
    padding: "inherit",
    onClick: _v0 => {
      _v0.stopPropagation(), _v0.preventDefault();
    },
    children: _v0
  }), _v22.HoverAction = ({
    children: _v0,
    isAlwaysVisible: _v1
  }) => (0, _v1.jsx)(_v5.Box, {
    opacity: +!!_v1,
    transition: "opacity 0.2s ease",
    _groupHover: {
      opacity: 1
    },
    _groupFocusWithin: {
      opacity: 1
    },
    children: _v0
  });
  let _v23 = {
      badge: {
        position: "absolute",
        bottom: (0, _v13.rem)(8),
        left: (0, _v13.rem)(8)
      },
      grid: {
        gap: "0",
        _groupHover: {
          gap: "0.4em"
        },
        _groupFocusWithin: {
          gap: "0.4em"
        },
        transition: "gap 120ms cubic-bezier(0.4, 0, 1, 1)"
      },
      label: {
        width: "0",
        opacity: "0",
        transition: "opacity 120ms ease, width 180ms cubic-bezier(0.4, 0, 1, 1) 120ms",
        _groupHover: {
          width: "max-content",
          opacity: 1,
          transition: "width 180ms cubic-bezier(0.4, 0, 1, 1), opacity 180ms ease 120ms"
        },
        _groupFocusWithin: {
          width: "max-content",
          opacity: 1,
          transition: "width 180ms cubic-bezier(0.4, 0, 1, 1), opacity 180ms ease 120ms"
        }
      },
      defaultVariantColors: {},
      defaultVariantHover: {
        backgroundColor: "gray.600",
        borderColor: "gray.600"
      }
    },
    _v24 = {
      badge: {},
      grid: {
        gap: "0.4em"
      },
      label: {},
      defaultVariantColors: {
        backgroundColor: "button-secondary-default",
        borderColor: "transparent",
        color: "text-primary"
      },
      defaultVariantHover: {
        backgroundColor: "button-secondary-hover",
        borderColor: "transparent"
      }
    };
  _v22.VideoPrivacyBadge = ({
    videoPrivacy: _v0,
    onClick: _v1,
    variant: _v2 = "default",
    layout: _v3,
    tooltipLabel: _v4,
    isDimmed: _v5 = !1
  }) => {
    let _v6 = (0, _v17.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500"),
      {
        label: _v7,
        icon: _v8
      } = _v0 || {};
    if (!_v7) return null;
    let _v9 = "overlay" === _v3 ? _v23 : _v24;
    if ("coldStorage" === _v2 || "coldPrivacy" === _v2) {
      let _v0 = (0, _v1.jsx)(_v11.Badge, {
        ...(_v4 ? {
          position: "relative"
        } : _v9.badge),
        size: "sm",
        right: "auto",
        height: "auto",
        padding: (0, _v13.rem)(3),
        backgroundColor: "status-caution-secondary",
        color: "status-caution-primary",
        borderWidth: "0",
        backdropFilter: "blur(20px)",
        ...(_v1 && {
          as: "button",
          type: "button",
          cursor: "pointer",
          _hover: {
            backgroundColor: "status-caution-secondary",
            filter: "brightness(0.96)"
          },
          onClick: _v0 => {
            _v0.stopPropagation(), _v0.preventDefault(), _v1(_v0);
          }
        }),
        children: (0, _v1.jsxs)(_v15.Grid, {
          display: "inline-grid",
          gridAutoFlow: "column",
          alignItems: "center",
          ..._v9.grid,
          children: [_v8 && (0, _v1.jsx)(_v5.Box, {
            flexShrink: 0,
            lineHeight: 0,
            color: "status-caution-primary",
            children: _v8
          }), (0, _v1.jsx)(_v5.Box, {
            as: "span",
            flexShrink: 0,
            whiteSpace: "nowrap",
            lineHeight: "1",
            ..._v9.label,
            children: (0, _v1.jsx)(_v10.Text, {
              as: "span",
              variant: "body-sm",
              fontWeight: 500,
              color: "status-caution-primary",
              children: _v7
            })
          })]
        })
      });
      return _v4 ? (0, _v1.jsx)(_v16.Tooltip, {
        label: _v4,
        children: (0, _v1.jsx)(_v5.Box, {
          "data-clickable": !0,
          display: "inline-flex",
          ...("overlay" === _v3 && {
            position: "absolute",
            bottom: (0, _v13.rem)(8),
            left: (0, _v13.rem)(8)
          }),
          children: _v0
        })
      }) : _v0;
    }
    return (0, _v1.jsx)(_v11.Badge, {
      ..._v9.badge,
      size: "sm",
      padding: (0, _v13.rem)(4),
      height: "auto",
      ..._v9.defaultVariantColors,
      ...(_v5 && {
        color: _v6
      }),
      ...(_v1 && {
        as: "button",
        type: "button",
        cursor: "pointer",
        _hover: _v9.defaultVariantHover,
        onClick: _v0 => {
          _v0.stopPropagation(), _v0.preventDefault(), _v1(_v0);
        }
      }),
      children: (0, _v1.jsxs)(_v15.Grid, {
        display: "inline-grid",
        gridAutoFlow: "column",
        alignItems: "center",
        ..._v9.grid,
        children: [_v5 && _v8 ? (0, _v1.jsx)(_v5.Box, {
          as: "span",
          flexShrink: 0,
          lineHeight: 0,
          color: _v6,
          children: _v8
        }) : _v8, (0, _v1.jsx)(_v5.Box, {
          as: "span",
          flexShrink: "0",
          whiteSpace: "nowrap",
          lineHeight: "1",
          ..._v9.label,
          children: _v7
        })]
      })
    });
  };
  let _v25 = {
    display: {
      base: "none",
      md: "flex"
    },
    padding: "inherit",
    top: "xs",
    left: "xs",
    opacity: _v0 => +!!_v0,
    transition: "opacity 0.2s ease",
    _groupHover: {
      opacity: 1
    },
    _groupFocusWithin: {
      opacity: 1
    },
    backgroundColor: "fill-surface"
  };
  _v22.SelectCheckbox = ({
    size: _v0 = "sm"
  }) => {
    let {
      isSelected: _v1,
      onToggleSelected: _v2
    } = (0, _v4.useContext)(_v21);
    return (0, _v1.jsx)(_v7.Checkbox, {
      ..._v25,
      opacity: _v25.opacity(_v1),
      size: _v0,
      isChecked: _v1,
      onChange: _v2,
      position: "absolute",
      borderRadius: "sm"
    });
  }, _v22.SelectRadio = ({
    size: _v0 = "sm"
  }) => {
    let {
      isSelected: _v1,
      onToggleSelected: _v2
    } = (0, _v4.useContext)(_v21);
    return (0, _v1.jsx)(_v14.Radio, {
      ..._v25,
      opacity: _v25.opacity(_v1),
      size: _v0,
      isChecked: _v1,
      onChange: _v2,
      position: "absolute"
    });
  }, _v22.Thumbnail = ({
    alt: _v0,
    src: _v1,
    srcSet: _v2,
    aspectRatio: _v3 = "16 / 9",
    opacity: _v4 = 1,
    isLocked: _v5 = !1,
    onClick: _v6
  }) => (0, _v1.jsxs)(_v5.Box, {
    opacity: _v4,
    position: "relative",
    isolation: "isolate",
    width: "100%",
    height: "100%",
    borderRadius: "md",
    overflow: "hidden",
    backgroundColor: "background",
    onClick: _v5 ? void 0 : _v6,
    children: [_v5 && (0, _v1.jsx)(_v27, {}), (0, _v1.jsx)(_v5.Box, {
      as: "img",
      alt: _v0,
      src: _v1,
      srcSet: _v2,
      opacity: _v4,
      position: "relative",
      inset: "0",
      width: "100%",
      height: "100%",
      borderRadius: "md",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "stroke",
      aspectRatio: _v3,
      objectFit: "cover"
    })]
  }), _v22.DefaultThumbnail = ({
    children: _v0,
    background: _v1,
    _groupHover: _v2,
    _groupFocusWithin: _v3,
    border: _v4,
    isLocked: _v5,
    onClick: _v6
  }) => (0, _v1.jsxs)(_v6.Center, {
    position: "absolute",
    inset: "0",
    width: "100%",
    isolation: "isolate",
    background: _v1 || "fill-component",
    opacity: _v1 ? 1 : .6,
    borderRadius: "md",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "stroke",
    overflow: "hidden",
    _groupHover: _v2,
    _groupFocusWithin: _v3,
    border: _v4,
    onClick: _v5 ? void 0 : _v6,
    children: [_v5 && (0, _v1.jsx)(_v27, {}), _v0]
  });
  let _v26 = ({
    children: _v0,
    creator: _v1,
    showCard: _v2,
    showOverflow: _v3,
    hasFollow: _v4,
    followSource: _v5
  }) => {
    if (!_v1 || !_v3 && !_v2) return (0, _v1.jsx)(_v1.Fragment, {
      children: _v0
    });
    let {
      user: _v6,
      name: _v7,
      onClick: _v8
    } = _v1;
    return _v2 && _v6 ? (0, _v1.jsx)(_v20, {
      user: _v6,
      profileUrl: _v6.link,
      hasFollow: _v4,
      followSource: _v5,
      onProfileClick: _v8,
      openDelay: 500,
      children: _v0
    }) : (0, _v1.jsx)(_v18.OverflowToolTip, {
      labelToolTip: _v7,
      maxW: (0, _v13.rem)(480),
      children: _v0
    });
  };
  _v22.Footer = ({
    actions: _v0,
    avatar: _v1,
    subtitle: _v2,
    title: _v3,
    creator: _v4,
    titleStyles: _v5 = {
      maxWidth: (0, _v13.rem)(180)
    },
    titleRowStyles: _v6,
    onTitleClick: _v7,
    editableTitle: _v8,
    isEditingContentTitle: _v9,
    isLocked: _v10 = !1,
    hasFollow: _v11,
    followSource: _v12
  }) => {
    let {
        showCard: _v13
      } = _v4 || {},
      _v14 = _v10 ? .6 : 1,
      _v15 = (0, _v17.useColorModeValue)("darkBlueAlpha.500", "lightBlueAlpha.500");
    return (0, _v1.jsx)(_v8.Flex, {
      gap: "0.5rem",
      justifyContent: "space-between",
      children: (0, _v1.jsx)(_v8.Flex, {
        width: "100%",
        maxWidth: "100%",
        children: (0, _v1.jsxs)(_v8.Flex, {
          direction: "row",
          grow: "1",
          gap: "sm",
          width: "100%",
          children: [!!_v1 && (0, _v1.jsx)(_v26, {
            creator: _v4,
            showCard: !!_v13,
            showOverflow: !1,
            hasFollow: _v11,
            followSource: _v12,
            children: (0, _v1.jsx)(_v5.Box, {
              display: "block",
              opacity: _v14,
              ...(_v4?.link && {
                as: "a",
                href: _v4.link,
                onClick: _v0 => {
                  _v0.stopPropagation(), _v4.onClick?.();
                }
              }),
              children: _v1
            })
          }), (0, _v1.jsxs)(_v8.Flex, {
            direction: "column",
            gap: "xs",
            minW: 0,
            width: "100%",
            children: [(0, _v1.jsx)(_v8.Flex, {
              alignItems: "center",
              direction: "row",
              gap: "0.5rem",
              ..._v6,
              pointerEvents: "auto",
              onClick: _v7,
              children: (0, _v1.jsx)(_v18.OverflowToolTip, {
                labelToolTip: _v3,
                maxW: (0, _v13.rem)(480),
                children: _v8 ? (0, _v1.jsx)(_v5.Box, {
                  onClick: _v0 => {
                    _v0.preventDefault(), _v0.stopPropagation();
                  },
                  width: "100%",
                  children: _v8
                }) : (0, _v1.jsx)(_v10.Text, {
                  "data-testid": "content-card-title",
                  variant: "heading-xs",
                  noOfLines: 1,
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  display: "block",
                  sx: _v5,
                  ...(_v10 && {
                    color: _v15
                  }),
                  children: _v3
                })
              })
            }), _v4?.name && (0, _v1.jsx)(_v26, {
              creator: _v4,
              showCard: !!_v13,
              showOverflow: !_v13,
              hasFollow: _v11,
              followSource: _v12,
              children: (0, _v1.jsx)("object", {
                children: (0, _v1.jsx)(_v10.Text, {
                  opacity: _v14,
                  variant: "body-sm",
                  noOfLines: 1,
                  maxW: "200px",
                  ...(_v10 && {
                    color: _v15,
                    opacity: 1
                  }),
                  ...(_v4.link && {
                    as: "a",
                    href: _v4.link,
                    onClick: _v0 => {
                      _v0.stopPropagation(), _v4.onClick?.();
                    }
                  }),
                  children: _v4.name
                })
              })
            }), !_v9 && _v2 && (0, _v1.jsx)(_v9.Paragraph, {
              "data-testid": "content-card-subtitle",
              variant: "body-sm",
              color: _v10 ? _v15 : "text-secondary",
              opacity: _v10 ? 1 : _v14,
              noOfLines: 1,
              children: _v2
            })]
          }), !_v9 && _v0 && (0, _v1.jsx)(_v5.Box, {
            display: "block",
            justifySelf: "right",
            children: _v0
          })]
        })
      })
    });
  }, _v22.ThumbnailGrid = ({
    thumbnails: _v0
  }) => {
    let _v1 = {
      backgroundColor: "fill-component",
      borderRadius: "md",
      overflow: "hidden",
      borderColor: "stroke",
      borderWidth: "1px",
      sx: {
        img: {
          objectFit: "cover",
          objectPosition: "center",
          position: "absolute"
        }
      }
    };
    return (0, _v1.jsxs)(_v5.Box, {
      display: "grid",
      position: "relative",
      inset: "0",
      aspectRatio: "16/9",
      gridTemplateColumns: "5fr 3fr",
      gap: ".25rem",
      children: [(0, _v1.jsx)(_v5.Box, {
        ..._v1,
        gridRow: "1 / 3",
        position: "relative",
        children: _v0[0] && (0, _v1.jsx)("img", {
          src: _v0[0],
          loading: "lazy",
          alt: "",
          height: "100%",
          width: "100%"
        })
      }), (0, _v1.jsx)(_v5.Box, {
        ..._v1,
        position: "relative",
        children: _v0[1] && (0, _v1.jsx)("img", {
          src: _v0[1],
          loading: "lazy",
          alt: "",
          height: "100%",
          width: "100%"
        })
      }), (0, _v1.jsx)(_v5.Box, {
        ..._v1,
        position: "relative",
        children: _v0[2] && (0, _v1.jsx)("img", {
          src: _v0[2],
          loading: "lazy",
          alt: "",
          height: "100%",
          width: "100%"
        })
      })]
    });
  }, _v22.ThumbnailContentAnchor = ({
    children: _v0,
    position: _v1
  }) => {
    let _v2 = {};
    switch (_v1) {
      case "top-left":
        _v2.top = "0", _v2.left = "0";
        break;
      case "top-right":
        _v2.top = "0", _v2.right = "0";
        break;
      case "bottom-right":
        _v2.bottom = "0", _v2.right = "0";
        break;
      case "bottom-left":
        _v2.bottom = "0", _v2.left = "0";
    }
    return (0, _v1.jsx)(_v5.Box, {
      padding: "inherit",
      position: "absolute",
      ..._v2,
      children: _v0
    });
  }, _v22.ComposableFooter = ({
    children: _v0
  }) => (0, _v1.jsx)(_v8.Flex, {
    gap: "0.5rem",
    justifyContent: "space-between",
    children: _v0
  });
  let _v27 = () => (0, _v1.jsxs)(_v5.Box, {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: "1",
    children: [(0, _v1.jsx)(_v5.Box, {
      position: "absolute",
      inset: "0",
      background: "black",
      opacity: "0.65"
    }), (0, _v1.jsx)(_v5.Box, {
      display: "flex",
      padding: (0, _v13.rem)(8),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: (0, _v13.rem)(8),
      background: "rgba(104, 114, 124, 0.64)",
      backdropFilter: "blur(1px)",
      position: "relative",
      zIndex: "1",
      children: (0, _v1.jsx)(_v19.ColdStorageVideoLockedIcon, {
        color: "white",
        boxSize: (0, _v13.rem)(32)
      })
    }), (0, _v1.jsx)(_v8.Flex, {
      position: "absolute",
      bottom: (0, _v13.rem)(8),
      left: (0, _v13.rem)(8),
      alignItems: "center",
      justifyContent: "center",
      padding: (0, _v13.rem)(6),
      borderRadius: "md",
      background: "rgba(12, 18, 31, 0.64)",
      backdropFilter: "blur(2px)",
      zIndex: "1",
      children: (0, _v1.jsx)(_v19.ColdStorageVideoLockedIcon, {
        color: "white",
        boxSize: (0, _v13.rem)(16)
      })
    })]
  });
  _v0.s(["ContentCard", 0, _v22]);
}