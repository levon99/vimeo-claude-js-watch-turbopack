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
    _v31 = _v0.i(0);
  let _v32 = ({
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
    _v33 = ({
      text: _v0
    }) => (0, _v1.jsx)(_v3.Button, {
      variant: "upsell",
      size: "xs",
      marginLeft: 8,
      children: _v0
    }),
    _v34 = ({
      isLoading: _v0,
      onClick: _v1,
      isPrimary: _v2,
      isDisabled: _v3,
      icon: _v4,
      choiceText: _v5,
      hasUpsell: _v6,
      isRootMenuButton: _v7
    }) => (0, _v1.jsx)(_v35, {
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
        children: [(0, _v1.jsx)(_v32, {
          text: _v5
        }), _v6 && (0, _v1.jsx)(_v33, {
          text: _v30.upgrade
        })]
      })
    });
  function _v35({
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
            return (0, _v1.jsx)(_v14.InfoCircle, {});
          case "chapters":
            return (0, _v1.jsx)(_v16.ListUl, {});
          case "video":
            return (0, _v1.jsx)(_v24.Video, {});
          case "scene-media":
            return (0, _v1.jsx)(_v25.SceneMedia, {});
          case "check":
            return (0, _v1.jsx)(_v10.Checkmark, {});
          case "plus":
            return (0, _v1.jsx)(_v18.Plus, {});
          case "question":
            return (0, _v1.jsx)(_v20.QuestionCircle, {});
          case "play":
            return (0, _v1.jsx)(_v17.Play, {});
          case "email":
            return (0, _v1.jsx)(_v13.Envelope, {});
          case "popOut":
            return (0, _v1.jsx)(_v19.PopOut, {});
          case "scissors":
            return (0, _v1.jsx)(_v22.ScissorsEditTrim, {});
          case "link":
            return (0, _v1.jsx)(_v15.Link, {});
          case "cancel":
            return (0, _v1.jsx)(_v12.CloseX, {});
          case "arrow-out":
            return (0, _v1.jsx)(_v9.ArrowUpRightPopOut, {});
          case "reset":
            return (0, _v1.jsx)(_v21.Reset, {});
          case "translations":
            return (0, _v1.jsx)(_v23.TranslateFilled, {});
          case "empty":
        }
        return (0, _v1.jsx)(_v1.Fragment, {});
      }(_v4),
      _v13 = (0, _v6.useColorModeValue)(_v28.AI_PRIMARY_BUTTON_COLORS.light, _v28.AI_PRIMARY_BUTTON_COLORS.dark),
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
          ...(_v7 ? _v26.WrappingButtonSx : (0, _v26.getChoiceButtonSx)(_v10)),
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
      }), !_v6 && _v10 && !_v11 && (0, _v1.jsx)(_v11.ChevronRight, {
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
  _v35.Summary = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    isLoading: _v3,
    hasUpsell: _v4,
    isRootMenuButton: _v5
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v6
    } = (0, _v27.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v4 && _v6("video_details");
    }, [_v4]), (0, _v1.jsx)(_v34, {
      icon: "info",
      isDisabled: _v0,
      isPrimary: _v1,
      onClick: _v2,
      isLoading: _v3,
      choiceText: _v30.generateVideoSummary,
      hasUpsell: _v4,
      isRootMenuButton: _v5
    });
  }, _v35.Chapters = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    isLoading: _v3,
    hasUpsell: _v4,
    isRootMenuButton: _v5
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v6
    } = (0, _v27.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v4 && _v6("chapters");
    }, [_v4]), (0, _v1.jsx)(_v34, {
      icon: "chapters",
      isDisabled: _v0,
      isPrimary: _v1,
      onClick: _v2,
      isLoading: _v3,
      choiceText: _v30.generateChapters,
      hasUpsell: _v4,
      isRootMenuButton: _v5
    });
  }, _v35.Translations = ({
    isDisabled: _v0,
    isLoading: _v1,
    hasUpsell: _v2 = !1,
    onClick: _v3,
    isRootMenuButton: _v4
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v5
    } = (0, _v27.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v2 && _v5("ai_translate");
    }, [_v2]), (0, _v1.jsx)(_v34, {
      icon: "translations",
      isDisabled: _v0,
      onClick: _v3,
      isLoading: _v1,
      choiceText: _v30.translateVideo,
      hasUpsell: _v2,
      isRootMenuButton: _v4
    });
  }, _v35.Empty = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v35, {
    icon: "empty",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v30.askQuestionAction
  }), _v35.Highlights = ({
    isLoading: _v0,
    isPrimary: _v1,
    isDisabled: _v2,
    hasUpsell: _v3 = !1,
    onClick: _v4,
    isRootMenuButton: _v5,
    isHighlightReel: _v6 = !0
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v7
    } = (0, _v27.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v3 && _v7("highlights");
    }, [_v3]), (0, _v1.jsx)(_v34, {
      icon: _v6 ? "scene-media" : "video",
      isDisabled: _v2,
      isPrimary: _v1,
      isLoading: _v0,
      onClick: _v4,
      choiceText: _v6 ? _v30.generateHighlightReel : _v30.generateHighlight,
      hasUpsell: _v3,
      isRootMenuButton: _v5
    });
  }, _v35.Save = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v35, {
    icon: "check",
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3,
    children: _v30.save
  }), _v35.Question = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v35, {
    icon: "question",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v30.askQuestionAction
  }), _v35.ActivateQnA = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    title: _v3,
    hasUpsell: _v4 = !1,
    onClick: _v5,
    isRootMenuButton: _v6
  }) => {
    let {
      sendEnterpriseCTAImpressionEvent: _v7
    } = (0, _v27.useGetSvvManageBpEvents)();
    return (0, _v2.useEffect)(function () {
      _v4 && _v7("ask_ai");
    }, [_v4]), (0, _v1.jsx)(_v34, {
      icon: "question",
      isDisabled: _v0,
      isPrimary: _v1,
      isLoading: _v2,
      onClick: _v5,
      choiceText: _v3 || _v30.generateQnA,
      hasUpsell: _v4,
      isRootMenuButton: _v6
    });
  }, _v35.PlayMoment = ({
    children: _v0,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3
  }) => {
    let _v4 = (0, _v31.useUIStore)(_v0 => _v0.inheritColors);
    return (0, _v1.jsx)(_v35, {
      icon: "play",
      isDisabled: _v1,
      isPrimary: _v2,
      onClick: _v3,
      inheritColors: _v4,
      children: _v0
    });
  }, _v35.Replace = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v35, {
    icon: "check",
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3,
    children: _v30.replace
  }), _v35.SaveAsNewVideo = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v35, {
    icon: "plus",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v30.saveAsNewVideo
  }), _v35.SaveAndEditAsNewVideo = ({
    isDisabled: _v0,
    isPrimary: _v1,
    isLoading: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v35, {
    icon: "scissors",
    isLoading: _v2,
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v3,
    children: _v29.saveAndEditAsNewVideo
  }), _v35.SavingAsNewVideo = () => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v35, {
      isLoading: !0,
      isDisabled: !0,
      children: _v29.saving
    })
  }), _v35.OpenVideo = ({
    onClick: _v0
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v35, {
      icon: "popOut",
      onClick: _v0,
      children: _v29.open
    })
  }), _v35.EditVideo = ({
    onClick: _v0
  }) => (0, _v1.jsx)(_v1.Fragment, {
    children: (0, _v1.jsx)(_v35, {
      icon: "scissors",
      onClick: _v0,
      children: _v29.edit
    })
  }), _v35.CopyLink = ({
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v35, {
    icon: "link",
    isDisabled: _v0,
    isPrimary: _v1,
    onClick: _v2,
    children: _v30.copyLink
  }), _v35.TranslateAndSave = ({
    children: _v0,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3,
    dataId: _v4
  }) => (0, _v1.jsx)(_v35, {
    dataId: _v4,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3,
    children: _v0
  }), _v35.FinishAndSave = ({
    children: _v0,
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3
  }) => (0, _v1.jsx)(_v35, {
    isDisabled: _v1,
    isPrimary: _v2,
    onClick: _v3,
    children: _v0
  }), _v35.AddCredits = ({
    children: _v0,
    isDisabled: _v1,
    onClick: _v2
  }) => (0, _v1.jsx)(_v35, {
    icon: "plus",
    isDisabled: _v1,
    isPrimary: !1,
    onClick: _v2,
    children: _v0
  }), _v0.s(["Choice", 0, _v35], 0);
  var _v36 = _v0.i(0),
    _v37 = _v0.i(0);
  let _v38 = ({
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
    gap: (0, _v37.rem)(12),
    alignSelf: "stretch",
    padding: (0, _v37.rem)(8),
    marginX: (0, _v37.rem)(8),
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
  }) => (0, _v1.jsx)(_v38, {
    ..._v1,
    height: "100%",
    overflowY: "auto",
    sx: _v28.SCROLLBAR_STYLE_SX,
    children: _v0
  }), "Section", 0, _v38, "SectionLabel", 0, ({
    children: _v0,
    ..._v1
  }) => (0, _v1.jsx)(_v36.Text, {
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
    width: (0, _v37.rem)(83),
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
  }) => (0, _v1.jsx)(_v36.Text, {
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
  }) => (0, _v1.jsx)(_v36.Text, {
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