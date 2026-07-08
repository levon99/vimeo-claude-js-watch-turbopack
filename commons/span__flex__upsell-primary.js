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
    _v19 = _v0.i(0),
    _v20 = _v0.i(0),
    _v21 = _v0.i(0),
    _v22 = _v0.i(0),
    _v23 = _v0.i(0),
    _v24 = _v0.i(0),
    _v25 = _v0.i(0),
    _v26 = _v0.i(0),
    _v27 = _v0.i(0),
    _v28 = _v0.i(0),
    _v29 = _v0.i(0),
    _v30 = _v0.i(0),
    _v31 = _v0.i(0),
    _v32 = _v0.i(0),
    _v33 = _v0.i(0),
    _v34 = _v0.i(0),
    _v35 = _v0.i(0),
    _v36 = _v0.i(0),
    _v37 = _v0.i(0),
    _v38 = _v0.i(0),
    _v39 = _v0.i(0);
  let _v40 = () => (0, _v1.jsx)(_v4.Flex, {
      as: "span",
      display: "flex",
      backgroundColor: "upsell-primary",
      borderRadius: "6px",
      height: "24px",
      px: "4px",
      alignItems: "center",
      justifyContent: "center",
      children: (0, _v1.jsx)(_v39.Diamond, {
        boxSize: "2xs",
        color: "white"
      })
    }),
    _v41 = ({
      icon: _v0,
      title: _v1,
      subtitle: _v2,
      hasUpsell: _v3 = !1,
      isLoading: _v4 = !1,
      isDisabled: _v5 = !1,
      onClick: _v6
    }) => (0, _v1.jsxs)(_v4.Flex, {
      as: "button",
      type: "button",
      width: "100%",
      height: "60px",
      alignItems: "center",
      gap: "10px",
      pl: 0,
      pr: "8px",
      borderRadius: "16px",
      textAlign: "left",
      backgroundColor: "transparent",
      cursor: _v5 ? "default" : "pointer",
      opacity: _v5 ? .4 : 1,
      pointerEvents: _v5 ? "none" : void 0,
      _hover: {
        backgroundColor: "fill-component"
      },
      onClick: _v6,
      disabled: _v5,
      children: [(0, _v1.jsx)(_v4.Flex, {
        as: "span",
        display: "flex",
        p: "8px",
        borderRadius: "full",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        children: _v0
      }), (0, _v1.jsxs)(_v8.Box, {
        as: "span",
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        flex: "1 1 auto",
        minWidth: 0,
        children: [(0, _v1.jsx)(_v37.Text, {
          as: "span",
          display: "block",
          variant: "heading-xs",
          color: "text-primary",
          children: _v1
        }), (0, _v1.jsx)(_v37.Text, {
          as: "span",
          display: "block",
          variant: "body-sm",
          color: "text-secondary",
          children: _v2
        })]
      }), (0, _v1.jsxs)(_v4.Flex, {
        as: "span",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexShrink: 0,
        children: [_v3 && (0, _v1.jsx)(_v40, {}), _v4 ? (0, _v1.jsx)(_v5.Spinner, {
          size: "sm"
        }) : (0, _v1.jsx)(_v38.ChevronRightSmall, {})]
      })]
    }),
    _v42 = ({
      text: _v0
    }) => {
      let _v1 = (0, _v2.useRef)(null),
        [_v2, _v3] = (0, _v2.useState)(!1);
      return (0, _v2.useEffect)(function () {
        let _v0 = () => {
          _v1.current && _v3(_v1.current.scrollWidth > _v1.current.clientWidth);
        };
        return _v0(), window.addEventListener("resize", _v0), () => window.removeEventListener("resize", _v0);
      }, [_v0]), (0, _v1.jsx)(_v8.Box, {
        as: "span",
        overflow: "hidden",
        ref: _v1,
        children: _v2 ? (0, _v1.jsx)(_v7.Tooltip, {
          label: _v0,
          placement: "top",
          children: (0, _v1.jsx)(_v8.Box, {
            as: "span",
            flex: "1 1 auto",
            minW: 0,
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            display: "block",
            textAlign: "left",
            fontSize: "heading-xs",
            children: _v0
          })
        }) : _v0
      });
    },
    _v43 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v3.Button, {
      variant: "upsell",
      size: "xs",
      marginLeft: 8,
      children: _v0
    }),
    _v44 = ({
      isLoading: _v0,
      onClick: _v1,
      isPrimary: _v2,
      isDisabled: _v3,
      icon: _v4,
      choiceText: _v5,
      hasUpsell: _v6,
      isRootMenuButton: _v7,
      isRedesign: _v8,
      subtitle: _v9,
      redesignIcon: _v10
    }) => _v8 ? (0, _v1.jsx)(_v41, {
      icon: _v10,
      title: _v5,
      subtitle: _v9 ?? "",
      hasUpsell: _v6,
      isLoading: _v0,
      isDisabled: _v3,
      onClick: _v1
    }) : (0, _v1.jsx)(_v45, {
      icon: _v4,
      isDisabled: _v3,
      isPrimary: _v2,
      onClick: _v1,
      isLoading: _v0,
      isRootMenuButton: _v7,
      hasUpsell: _v6,
      children: (0, _v1.jsxs)(_v4.Flex, {
        sx: {
          position: "relative",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
          justifyContent: "space-between"
        },
        children: [(0, _v1.jsx)(_v42, {
          text: _v5
        }), _v6 && (0, _v1.jsx)(_v43, {
          text: _v35.upgrade
        })]
      })
    });
  function _v45({
    href: _v0,
    children: _v1,
    isDisabled: _v2 = !1,
    isPrimary: _v3 = !1,
    icon: _v4,
    onClick: _v5,
    isLoading: _v6 = !1,
    shouldWrap: _v7 = !1,
    inheritColors: _v8 = null,
    dataId: _v9,
    isRootMenuButton: _v10,
    hasUpsell: _v11 = !1
  }) {
    let _v12 = function (_v0) {
        if ("string" == typeof _v0) switch (_v0) {
          case "info":
          default:
            return (0, _v1.jsx)(_v15.InfoCircle, {});
          case "chapters":
            return (0, _v1.jsx)(_v17.ListUl, {});
          case "video":
            return (0, _v1.jsx)(_v29.Video, {});
          case "scene-media":
            return (0, _v1.jsx)(_v30.SceneMedia, {});
          case "check":
            return (0, _v1.jsx)(_v11.Checkmark, {});
          case "plus":
            return (0, _v1.jsx)(_v19.Plus, {});
          case "question":
            return (0, _v1.jsx)(_v21.QuestionCircle, {});
          case "play":
            return (0, _v1.jsx)(_v18.Play, {});
          case "email":
            return (0, _v1.jsx)(_v14.Envelope, {});
          case "popOut":
            return (0, _v1.jsx)(_v20.PopOut, {});
          case "scissors":
            return (0, _v1.jsx)(_v24.ScissorsEditTrim, {});
          case "link":
            return (0, _v1.jsx)(_v16.Link, {});
          case "cancel":
            return (0, _v1.jsx)(_v13.CloseX, {});
          case "arrow-out":
            return (0, _v1.jsx)(_v9.ArrowUpRightPopOut, {});
          case "reset":
            return (0, _v1.jsx)(_v22.Reset, {});
          case "translations":
            return (0, _v1.jsx)(_v28.TranslateFilled, {});
          case "empty":
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }(_v4),
      _v13 = (0, _v6.useColorModeValue)(_v33.AI_PRIMARY_BUTTON_COLORS.light, _v33.AI_PRIMARY_BUTTON_COLORS.dark),
      _v14 = _v3 ? {
        background: _v8?.primary || _v13.normal,
        _disabled: {
          background: _v13.disabled,
          _hover: {
            background: _v13.disabled,
            cursor: "default"
          }
        },
        _hover: {
          background: _v8?.accentHover || _v13.hover,
          ...(_v8?.textHoverColor ? {
            color: _v8.textHoverColor
          } : {})
        },
        color: _v8?.iconTextColor || _v13.textColor
      } : {};
    return (0, _v1.jsxs)(_v4.Flex, {
      w: "100%",
      position: "relative",
      children: [(0, _v1.jsx)(_v3.Button, {
        isDisabled: _v2,
        variant: _v10 ? "tertiary" : "secondary",
        leftIcon: _v12,
        onClick: _v5,
        size: _v10 ? "sm" : "md",
        sx: {
          ...(_v7 ? _v31.WrappingButtonSx : (0, _v31.getChoiceButtonSx)(_v10)),
          ...(_v10 ? {
            "data-root-menu-button": "true"
          } : {})
        },
        ..._v14,
        ...(_v0 ? {
          as: "a",
          href: _v0,
          target: "_blank"
        } : {}),
        ...(_v9 ? {
          "data-testid": _v9
        } : {}),
        children: _v1
      }), !_v6 && _v10 && !_v11 && (0, _v1.jsx)(_v12.ChevronRight, {
        boxSize: "2xs",
        sx: {
          position: "absolute !important",
          right: "1rem !important",
          top: "0 !important",
          bottom: "0 !important",
          alignSelf: "center !important"
        }
      }), _v6 ? (0, _v1.jsx)(_v5.Spinner, {
        size: "sm",
        sx: {
          position: "absolute !important",
          right: "1rem !important",
          top: "0 !important",
          bottom: "0 !important",
          alignSelf: "center !important"
        }
      }) : null]
    });
  }
  _v45.Summary = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    isLoading: _v3,
    hasUpsell: _v4,
    isRootMenuButton: _v5,
    isRedesign: _v6
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v7
    } = (0, _v32.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v4 && _v7("video_details");
    }, [_v4]), (0, _v1.jsx)(_v44, {
      icon: "info",
      isDisabled: _v0,
      isPrimary: _v1,
      onClick: _v2,
      isLoading: _v3,
      choiceText: _v35.generateVideoSummary,
      hasUpsell: _v4,
      isRootMenuButton: _v5,
      isRedesign: _v6,
      subtitle: _v35.generateVideoSummarySubtitle,
      redesignIcon: (0, _v1.jsx)(_v26.Subtitles, {
        boxSize: "xs"
      })
    });
  }, _v45.Chapters = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    isLoading: _v3,
    hasUpsell: _v4,
    isRootMenuButton: _v5,
    isRedesign: _v6
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v7
    } = (0, _v32.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v4 && _v7("chapters");
    }, [_v4]), (0, _v1.jsx)(_v44, {
      icon: "chapters",
      isDisabled: _v0,
      isPrimary: _v1,
      onClick: _v2,
      isLoading: _v3,
      choiceText: _v35.generateChapters,
      hasUpsell: _v4,
      isRootMenuButton: _v5,
      isRedesign: _v6,
      subtitle: _v35.generateChaptersSubtitle,
      redesignIcon: (0, _v1.jsx)(_v10.BookmarkChapter, {
        boxSize: "xs"
      })
    });
  }, _v45.Translations = ({
    isDisabled: _v0,
    isLoading: _v1,
    hasUpsell: _v2 = !1,
    onClick: _v3,
    isRootMenuButton: _v4,
    isRedesign: _v5
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v6
    } = (0, _v32.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v2 && _v6("ai_translate");
    }, [_v2]), (0, _v1.jsx)(_v44, {
      icon: "translations",
      isDisabled: _v0,
      onClick: _v3,
      isLoading: _v1,
      choiceText: _v35.translateVideo,
      hasUpsell: _v2,
      isRootMenuButton: _v4,
      isRedesign: _v5,
      subtitle: _v35.translateVideoSubtitle,
      redesignIcon: (0, _v1.jsx)(_v27.Translate, {
        boxSize: "xs"
      })
    });
  }, _v45.Empty = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v45, {
    icon: "empty",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v35.askQuestionAction
  }), _v45.Highlights = ({
    isLoading: _v0,
    isPrimary: _v1,
    isDisabled: _v2,
    hasUpsell: _v3 = !1,
    onClick: _v4,
    isRootMenuButton: _v5,
    isHighlightReel: _v6 = !0,
    isRedesign: _v7
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v8
    } = (0, _v32.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v3 && _v8("highlights");
    }, [_v3]), (0, _v1.jsx)(_v44, {
      icon: _v6 ? "scene-media" : "video",
      isDisabled: _v2,
      isPrimary: _v1,
      isLoading: _v0,
      onClick: _v4,
      choiceText: _v7 || !_v6 ? _v35.generateHighlight : _v35.generateHighlightReel,
      hasUpsell: _v3,
      isRootMenuButton: _v5,
      isRedesign: _v7,
      subtitle: _v35.generateHighlightsSubtitle,
      redesignIcon: (0, _v1.jsx)(_v25.Subscriptions, {
        boxSize: "xs"
      })
    });
  }, _v45.Save = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v45, {
    icon: "check",
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3,
    children: _v35.save
  }), _v45.Question = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v45, {
    icon: "question",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v35.askQuestionAction
  }), _v45.ActivateQnA = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    title: _v3,
    hasUpsell: _v4 = !1,
    onClick: _v5,
    isRootMenuButton: _v6,
    isRedesign: _v7
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v8
    } = (0, _v32.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v4 && _v8("ask_ai");
    }, [_v4]), (0, _v1.jsx)(_v44, {
      icon: "question",
      isDisabled: _v0,
      isPrimary: _v1,
      isLoading: _v2,
      onClick: _v5,
      choiceText: _v3 || _v35.generateQnA,
      hasUpsell: _v4,
      isRootMenuButton: _v6,
      isRedesign: _v7,
      subtitle: _v35.allowViewersToAskAiSubtitle,
      redesignIcon: (0, _v1.jsx)(_v23.ReviewQuestion, {
        boxSize: "xs"
      })
    });
  }, _v45.PlayMoment = ({
    children: _v0,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3
  }) => {
    let _v4 = (0, _v36.useUIStore)(_v0 => _v0.inheritColors);
    return (0, _v1.jsx)(_v45, {
      icon: "play",
      isDisabled: _v1,
      isPrimary: _v2,
      onClick: _v3,
      inheritColors: _v4,
      children: _v0
    });
  }, _v45.Replace = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v45, {
    icon: "check",
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3,
    children: _v35.replace
  }), _v45.SaveAsNewVideo = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v45, {
    icon: "plus",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v35.saveAsNewVideo
  }), _v45.SaveAndEditAsNewVideo = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v45, {
    icon: "scissors",
    isLoading: _v2,
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v3,
    children: _v34.saveAndEditAsNewVideo
  }), _v45.SavingAsNewVideo = () => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v45, {
      isLoading: !0,
      isDisabled: !0,
      children: _v34.saving
    })
  }), _v45.OpenVideo = ({
    onClick: _v0
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v45, {
      icon: "popOut",
      onClick: _v0,
      children: _v34.open
    })
  }), _v45.EditVideo = ({
    onClick: _v0
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v45, {
      icon: "scissors",
      onClick: _v0,
      children: _v34.edit
    })
  }), _v45.CopyLink = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v45, {
    icon: "link",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v35.copyLink
  }), _v45.TranslateAndSave = ({
    children: _v0,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3,
    dataId: _v4
  }) => (0, _v1.jsx)(_v45, {
    dataId: _v4,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3,
    children: _v0
  }), _v45.FinishAndSave = ({
    children: _v0,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v45, {
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3,
    children: _v0
  }), _v45.AddCredits = ({
    children: _v0,
    isDisabled: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v45, {
    icon: "plus",
    isDisabled: _v1,
    isPrimary: !1,
    onClick: _v2,
    children: _v0
  }), _v0.s(["Choice", 0, _v45], 0);
  var _v46 = _v0.i(0);
  let _v47 = ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v4.Flex, {
    position: "relative",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "8px",
    alignSelf: "stretch",
    padding: "12px 16px",
    ..._v1,
    children: _v0
  });
  _v0.s(["Divider", 0, () => (0, _v1.jsx)(_v8.Box, {
    w: "100%",
    h: "0.5pt",
    backgroundColor: "stroke"
  }), "ListItem", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v4.Flex, {
    height: 56,
    alignItems: "center",
    gap: (0, _v46.rem)(12),
    alignSelf: "stretch",
    padding: (0, _v46.rem)(8),
    marginX: (0, _v46.rem)(8),
    borderRadius: "md",
    _hover: {
      cursor: "pointer",
      backgroundColor: "fill-component-hover",
      ".thumbnailOverlay": {
        opacity: 1
      }
    },
    ..._v1,
    children: _v0
  }), "ScrollableSection", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v47, {
    ..._v1,
    height: "100%",
    overflowY: "auto",
    sx: _v33.SCROLLBAR_STYLE_SX,
    children: _v0
  }), "Section", 0, _v47, "SectionLabel", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v37.Text, {
    color: "text-secondary",
    variant: "body-sm",
    ..._v1,
    children: _v0
  }), "SectionTitle", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v4.Flex, {
    display: "flex",
    padding: "2px 0",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "stretch",
    ..._v1,
    children: _v0
  }), "Thumbnail", 0, _v0 => (0, _v1.jsx)(_v8.Box, {
    as: "img",
    width: "100%",
    sx: {
      aspectRatio: "85 / 48",
      backgroundColor: "black",
      objectFit: "contain"
    },
    ..._v0
  }), "ThumbnailContainer", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v8.Box, {
    width: (0, _v46.rem)(83),
    flexShrink: 0,
    position: "relative",
    borderRadius: "8px",
    overflow: "hidden",
    border: "0.5pt solid",
    borderColor: "stroke",
    ..._v1,
    children: _v0
  }), "ThumbnailContainerOverlay", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v8.Box, {
    className: "thumbnailOverlay",
    width: "100%",
    height: "100%",
    opacity: 0,
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "grid",
    placeItems: "center",
    ..._v1,
    children: _v0
  }), "ThumbnailDetails", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v8.Box, {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexGrow: 1,
    ..._v1,
    children: _v0
  }), "ThumbnailTimeCode", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v37.Text, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    gap: "10px",
    height: "20px",
    padding: "4px",
    alignSelf: "center",
    borderRadius: "6px",
    backgroundColor: "fill-blur",
    color: "text-primary",
    textAlign: "center",
    fontSize: "12px",
    fontStyle: "normal",
    variant: "body-xl",
    ..._v1,
    children: _v0
  }), "ThumbnailTitle", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v37.Text, {
    color: "text-primary",
    fontSize: "14px",
    fontWeight: "700",
    flex: "1",
    noOfLines: 3,
    variant: "body-xl",
    ..._v1,
    children: _v0
  })], 0);
}